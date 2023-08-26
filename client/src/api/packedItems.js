const getPackedItems = async () => {
  const res = await fetch("http://localhost:3001/packed-items");
  const items = await res.json();
  return items;
};

const updatePackedItems = async (item) => {
  const res = await fetch("http://localhost:3001/packed-items", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });

  const updatedPackedItems = await res.json();
  return updatedPackedItems;
};




module.exports = {
  getPackedItems,
  updatePackedItems
};
