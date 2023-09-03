const express = require("express");
const {
  initialise_db,
  get_items,
  get_item_by_id,
  add_items,
  delete_item,
  get_trip,
  update_trip,
  get_packed_items,
  add_packed_items,
  delete_packed_item
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
  const weatherCondtion = req.query["current-weather"] 
  let items = get_items();
  if (weatherCondtion){
    items = items.filter((item) => {
      return item.appropriateWeather === weatherCondtion || item.appropriateWeather === "any"
    })
  }
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

app.post("/items", (req, res) => {
  const item = req.body;
  add_items(item);
  const items = get_items();
  res.status(200); 
  res.json(items);
})

app.delete("/items/:id", (req, res) => {
  const id = req.params.id;
  delete_item(id);
  const items = get_items();
  res.status(200);
  res.json(items)
})

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
  delete_item(item.id)
  res.status(200); 
  res.json(items );
})

app.delete("/packed-items/:id", (req, res) => {
  const id = req.params.id;
  delete_packed_item(id);
  const items = get_packed_items();
  res.status(200);
  res.json(items)
})

app.listen(PORT, (error) => {
  if (!error) console.log("Server is running. Listening on port " + PORT);
  else console.log("Error occurred, server can't start", error);
});
