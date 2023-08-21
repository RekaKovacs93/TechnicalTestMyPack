import "./Items.css";
import ItemList from "./itemList/ItemList";

import { getItems } from "../../api/items";
import { getPackedItems } from "../../api/packedItems";

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

  return (
    <div className="items">
      <div>
        <h4>Suggested Items</h4>
        <ItemList items={allItems} />
      </div>

      <div>
        <h4>Your Suitcase</h4>
        <ItemList items={packedItems} />
      </div>
    </div>
  );
}

export default Items;
