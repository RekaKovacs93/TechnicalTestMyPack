const getItems = async () => {
  const res = await fetch("http://localhost:3001/items");
  const items = await res.json();
  return items;
};

const addItems = async (item) => {
  const res = await fetch("http://localhost:3001/items", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item)
  });
  const addedItem = await res.json();
  return addedItem;
  
}


module.exports = {
  getItems,
  addItems
};
