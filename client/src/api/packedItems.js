const getPackedItems = async () => {
  const res = await fetch("http://localhost:3001/packed-items");
  const items = await res.json();
  return items;
};

module.exports = {
  getPackedItems,
};
