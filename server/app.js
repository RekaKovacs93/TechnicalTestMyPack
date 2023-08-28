const express = require("express");
const {
  initialise_db,
  get_items,
  get_item_by_id,
  get_trip,
  update_trip,
  get_packed_items,
  add_packed_items,
  delete_packed_item,
  update_packed_items
} = require("./db.js");
const cors = require("cors");


const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

initialise_db();

// Trip

app.get("/trip", (req, res) => {
  const trip = get_trip();
  res.status(200);
  res.json(trip);
});

app.patch("/trip", (req, res) => {
  const trip = req.body;
  update_trip(trip);
  res.status(200);
  res.json(trip);
});

// Items

app.get("/items", (req, res) => {
  const items = get_items();
  res.status(200);
  res.json(items);
});

app.get("/items/:id", (req, res) => {
  const id = req.params.id;
  const item = get_item_by_id(id);
  if (item === undefined) {
    res.status(404);
    res.json({ error: "Item not found" });
    return;
  }

  res.status(200);
  res.json(item);
});

// Packed Items

app.get("/packed-items", (req, res) => {
  const items = get_packed_items();
  res.status(200);
  res.json(items);
  
});

app.post("/packed-items", (req, res) => {
  const item = req.body;
  add_packed_items(item);
  const items = get_packed_items();
  res.status(200); 
  res.json(items );
})

app.put("/packed-items/:id", (req, res) => {
  const id = req.params.id;
  update_packed_items(id);
  const items = get_packed_items();
  res.status(200);
  res.json(items);
})

app.delete("/packed-items/:id", (req, res) => {
  const id = req.params.id;
  // const item = get_item_by_id(id);
  // if (item === undefined) {
  //   res.status(404);
  //   res.json({ error: "Item not found" });
  //   return;
  // }
  // delete_packed_item(id);
  console.log("delete res id", id)
  delete_packed_item(id);
  const items = get_packed_items();
  console.log(items)
  res.status(200);
  res.json(items)
})

app.listen(PORT, (error) => {
  if (!error) console.log("Server is running. Listening on port " + PORT);
  else console.log("Error occurred, server can't start", error);
});
