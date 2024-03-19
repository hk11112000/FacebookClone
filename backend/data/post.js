const fs = require("node:fs/promises");

async function getStoredPost() {
  const rawFileContent = await fs.readFile("post.json", { encoding: "utf-8" });
  const data = JSON.parse(rawFileContent);
  const storedPost = data.post ?? [];
  return storedPost;
}

function storePost(post) {
  return fs.writeFile("post.json", JSON.stringify({ post: post || [] }));
}

exports.getStoredPost = getStoredPost;
exports.storePost = storePost;
