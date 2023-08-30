const fs = require("fs");

let db = {};

// Note: Please don't edit the mock_db.json file directly or update it via code. Modify the database in memory only.

const initialise_db = () => {
  let data = fs.readFileSync("mock_db.json");
  let dataJSON = JSON.parse(data);

  db = dataJSON;

  console.log("db initialised");
};

// Trip

const get_trip = () => {
  return db["trip"];
};

const update_trip = (trip) => {
  // Use of spread operator to merge the new trip data with the existing trip data
  db["trip"] = {
    ...db.trip,
    ...trip,
  };
};

// Items

const get_items = () => {
  return db["items"];
};

const get_item_by_id = (id) => {
  const items = get_items();
  return items.find((item) => item.id === Number.parseInt(id));
};

const add_items = (item) => {
  db["items"] = [
    ...db.items,
    item
  ];
}

const delete_item = (id) => {
  db["items"] = db["items"].filter((item) => item.id != id);
}

// Packed Items

const get_packed_items = () => {
  return db["packedItems"];
};

const add_packed_items = (item) => {
  db["packedItems"] = [
    ...db.packedItems,
    item
  ];
}


const delete_packed_item = (id) => {
  db["packedItems"] = db["packedItems"].filter((item) => item.id != id);
}


module.exports = {
  initialise_db,
  get_trip,
  update_trip,
  get_items,
  get_item_by_id,
  add_items,
  delete_item,
  get_packed_items,
  add_packed_items,
  delete_packed_item,
};
