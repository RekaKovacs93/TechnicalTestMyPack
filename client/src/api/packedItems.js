const getPackedItems = async () => {
  const res = await fetch("http://localhost:3001/packed-items");
  const items = await res.json();
  return items;
};

const addPackedItems = async (item) => {
  const res = await fetch("http://localhost:3001/packed-items", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });

  const addedPackedItems = await res.json();
  return addedPackedItems;
};

const updatePackedItems = async (id) => {
  const res = await fetch(`http://localhost:3001/packed-items/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    }
  });

  const updatedPackedItems = await res.json();
  return updatedPackedItems;
}

const deletePackedItems = async (id) => {
  const res = await fetch(`http://localhost:3001/packed-items/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    }
  });
  // const itemDeleted = await res.json();
  // console.log("api res", res)
  // return itemDeleted;

};


module.exports = {
  getPackedItems,
  addPackedItems,
  deletePackedItems,
  updatePackedItems
};
