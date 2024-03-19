const fs = require("node:fs/promises");

async function getStoredItems() {
  const rawFileContent = await fs.readFile("menu.json", { encoding: "utf-8" });
  const data = JSON.parse(rawFileContent);
  const storedItems = data.menu ?? [];
  return storedItems;
}

function storeItems(menu) {
  return fs.writeFile("menu.json", JSON.stringify({ menu: menu || [] }));
}

exports.getStoredItems = getStoredItems;
exports.storeItems = storeItems;
