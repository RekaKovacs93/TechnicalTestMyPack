import "./Items.css";
import ItemList from "./itemList/ItemList";

import { addItems, getItems } from "../../api/items";
import { getPackedItems, addPackedItems, deletePackedItems} from "../../api/packedItems";
import { useState, useEffect } from "react";

function Items() {
  const [allItems, setAllItems] = useState([]);
  const [packedItems, setPackedItems] = useState([]);

  const fetchAllItems = async () => {
    const items = await getItems();
    setAllItems(items);
  };

  const fetchPackedItems = async () => {
    const items = await getPackedItems();
    setPackedItems(items);
  };

  useEffect(() => {
    fetchAllItems();
    fetchPackedItems();
  }, []);

  const resetFilter = (state) => {
    if (state === allItems){
      fetchAllItems();
    }
    else {
      fetchPackedItems();
    }
  }

  const filterItems = (event, state, setStateFunction) => {
    //resetFilter(state);
    const itemTag = event.target.value;
    // const checkTags = (tag) => tag === itemTag;
    const itemsWithTag = state.filter((item) => {
      return item.tags.includes(itemTag)
    })
    setStateFunction(itemsWithTag);
  }

  const onClickAdd = async (event) => {
    const itemId = event.target.value;
    const newPackedItem = allItems.find((item) => item.id == itemId);
    const addedPackedItems = await addPackedItems(newPackedItem);
    const newItemsList = allItems.filter((item) => item.id != itemId);
    setPackedItems(addedPackedItems);
    setAllItems(newItemsList);
  }

  const onClickRemove = async (event) => {
    const itemId = event.target.value;
    const item = packedItems.find((item) => item.id == itemId);
    const addToAllItems = await addItems(item);
    await deletePackedItems(itemId);
    const newPackedItems = packedItems.filter((item) => item.id != itemId);
    setPackedItems(newPackedItems);
    setAllItems(addToAllItems);
    console.log("clicked remove", newPackedItems)
  }

  return (
    <div className="items">
      <div>
        <h4>Suggested Items</h4>
        <ItemList
        items={allItems}
        onClickAdd={onClickAdd}
        filterItems={(event) => filterItems(event, allItems, setAllItems)} 
        resetFilter={() => resetFilter(allItems)}/>
      </div>

      <div>
        <h4>Your Suitcase</h4>
        <ItemList
        items={packedItems}
        onClickRemove={onClickRemove}
        filterItems={(event) => filterItems(event, packedItems, setPackedItems)}
        resetFilter={() => resetFilter(packedItems)}
        />
      </div>
    </div>
  );
}

export default Items;
