import "./Items.css";
import ItemList from "./itemList/ItemList";

import { addItems, getItems } from "../../api/items";
import { getPackedItems, addPackedItems, deletePackedItems} from "../../api/packedItems";

import { useState, useEffect } from "react";

function Items(props) {
  const [allItems, setAllItems] = useState([]);
  const [packedItems, setPackedItems] = useState([]);
  
  
  const fetchAllItems = async (weather) => {
    const items = await getItems(weather);
    setAllItems(items);
  };

  const fetchPackedItems = async () => {
    const items = await getPackedItems();
    setPackedItems(items);
  };

  useEffect(() => {
    fetchPackedItems()
    fetchAllItems(props.currentWeather);
  }, []);


  useEffect(() => {
    fetchAllItems(props.currentWeather);
  }, [props.currentWeather]);


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
  }

  return (
    <div className="items">
      <div>
        <h4>Suggested Items</h4>
        <ItemList
        listType="suggested"
        items={allItems}
        onClickAdd={onClickAdd}
        />
      </div>

      <div>
        <h4>Your Suitcase</h4>
        <ItemList
        items={packedItems}
        onClickRemove={onClickRemove}
        />
      </div>
    </div>
  );
}

export default Items;
