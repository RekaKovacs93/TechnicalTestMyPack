import "./Items.css";
import ItemList from "./itemList/ItemList";

import { getItems } from "../../api/items";
import { getPackedItems, addPackedItems, deletePackedItems, updatePackedItems} from "../../api/packedItems";
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

  const resetFilter = async (arrayType) => {
    if (arrayType === "allItems"){
      fetchAllItems();
    }
    else {
      fetchPackedItems();
    }
  }

  const filterItems = async (event, arrayType) => {
    event.preventDefault();
    const itemTag = event.target.value;
    const checkTags = (tag) => tag === itemTag;
    if (arrayType === "allItems") {
      const itemsWithTag = allItems.filter((item) => {
      return item.tags.some(checkTags)
    })
    setAllItems(itemsWithTag);
  }
    else {
      const itemsWithTag = packedItems.filter((item) => {
        return item.tags.some(checkTags)
      })
      setPackedItems(itemsWithTag)
  }
    // console.log(itemsWithTag)
  }

  const onClickAdd = async (event) => {
    event.preventDefault();
    const itemId = event.target.value;
    const newPackedItem = allItems.find((item) => item.id == itemId);
    const addedPackedItems = await addPackedItems(newPackedItem);
    setPackedItems(addedPackedItems);
    // const newItemsList = allItems.filter((item) => item.id !== itemId);
    // setAllItems(newItemsList);
    // console.log(newItemsList)
    
  }

  const onClickRemove = async (event) => {
    event.preventDefault();
    const itemId = event.target.value;
    await deletePackedItems(itemId);
    console.log(itemId)
    console.log("packed", packedItems)
    const newPackedItems = packedItems.filter((item) => item.id !== itemId);
    //console.log("deleted" ,itemDeleted)
    setPackedItems(newPackedItems);
    console.log("clicked remove", newPackedItems)
  }

  return (
    <div className="items">
      <div>
        <h4>Suggested Items</h4>
        <ItemList
        items={allItems}
        onClickAdd={onClickAdd}
        filterItems={(event) => filterItems(event, "allItems")} 
        resetFilter={() => resetFilter("allItems")}/>
      </div>

      <div>
        <h4>Your Suitcase</h4>
        <ItemList
        items={packedItems}
        onClickRemove={onClickRemove}
        filterItems={(event) => filterItems(event, "packedItems")}
        resetFilter={() => resetFilter("packedItems")}
        />
      </div>
    </div>
  );
}

export default Items;
