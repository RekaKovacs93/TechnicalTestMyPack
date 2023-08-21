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

// Packed Items

const get_packed_items = () => {
  return db["packedItems"];
};

module.exports = {
  initialise_db,
  get_trip,
  update_trip,
  get_items,
  get_item_by_id,
  get_packed_items,
};
