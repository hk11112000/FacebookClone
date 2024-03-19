const express = require("express");
const bodyParser = require("body-parser");

const { getStoredItems, storeItems } = require("./data/menu");
const { getStoredFriends, storeFriends } = require("./data/friend");
const { getStoredPost, storePost } = require("./data/post");

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/menu", async (req, res) => {
  const storedItems = await getStoredItems();
  await new Promise((resolve, reject) => setTimeout(() => resolve(), 0));
  res.json({ menu: storedItems });
});

app.get("/menu/:id", async (req, res) => {
  const storedItems = await getStoredItems();
  const menu = storedItems.find((menu) => menu.id === req.params.id);
  res.json({ menu });
});

app.post("/menu", async (req, res) => {
  const existingItems = await getStoredItems();
  const itemData = req.body;
  const newItem = {
    ...itemData,
    id: Math.random().toString(),
  };
  const updatedItems = [newItem, ...existingItems];
  await storeItems(updatedItems);
  res.status(201).json({ message: "Stored new menu.", menu: newItem });
});
//friends Api

app.get("/friend", async (req, res) => {
  const storedFriends = await getStoredFriends();
  await new Promise((resolve, reject) => setTimeout(() => resolve(), 0));
  res.json({ friend: storedFriends });
});
app.get("/friend/:id", async (req, res) => {
  const storedFriends = await getStoredFriends();
  const friend = storedFriends.find((friend) => friend.id === req.params.id);
  res.json({ friend });
});

app.post("/friend", async (req, res) => {
  const existingItems = await getStoredFriends();
  const itemData = req.body;
  const newItem = {
    ...itemData,
    id: Math.random().toString(),
  };
  const updatedItems = [newItem, ...existingItems];
  await storeFriends(updatedItems);
  res.status(201).json({ message: "Stored new menu.", friend: newItem });
});

//post api
app.get("/post", async (req, res) => {
  const storedPost = await getStoredPost();
  await new Promise((resolve, reject) => setTimeout(() => resolve(), 0));
  res.json({ post: storedPost });
});
app.get("/post/:id", async (req, res) => {
  const storedPost = await getStoredPost();
  const post = storedPost.find((post) => post.id === req.params.id);
  res.json({ post });
});

app.post("/post", async (req, res) => {
  const existingItems = await getStoredPost();
  const itemData = req.body;
  const newItem = {
    ...itemData,
    id: Math.random().toString(),
  };
  const updatedItems = [newItem, ...existingItems];
  await storePost(updatedItems);
  res.status(201).json({ message: "Stored new menu.", post: newItem });
});

app.listen(8080);
