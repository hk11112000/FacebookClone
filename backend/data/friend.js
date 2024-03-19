const fs = require("node:fs/promises");

async function getStoredFriends() {
  const rawFileContent = await fs.readFile("friend.json", {
    encoding: "utf-8",
  });
  const data = JSON.parse(rawFileContent);
  const storedFriends = data.friend ?? [];
  return storedFriends;
}

function storeFriends(friend) {
  return fs.writeFile("friend.json", JSON.stringify({ friend: friend || [] }));
}

exports.getStoredFriends = getStoredFriends;
exports.storeFriends = storeFriends;
