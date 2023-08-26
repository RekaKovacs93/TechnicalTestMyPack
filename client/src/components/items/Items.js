import "./Items.css";
import ItemList from "./itemList/ItemList";

import { getItems } from "../../api/items";
import { getPackedItems, updatePackedItems } from "../../api/packedItems";

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
    console.log('fetch patcked items', items)
    setPackedItems(items);
  };

  useEffect(() => {
    fetchAllItems();
    fetchPackedItems();
  }, []);

  const onClickAdd = async (event) => {
    event.preventDefault()
    const itemId = event.target.value
    const newPackedItem = allItems.find((item) => item.id == itemId)
    const updatedPackedItems = await updatePackedItems(newPackedItem)
    setPackedItems(updatedPackedItems);
    
  }

  return (
    <div className="items">
      <div>
        <h4>Suggested Items</h4>
        <ItemList items={allItems} onClickAdd={onClickAdd}/>
      </div>

      <div>
        <h4>Your Suitcase</h4>
        <ItemList items={packedItems} />
      </div>
    </div>
  );
}

export default Items;
