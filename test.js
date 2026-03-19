const assert = require("assert");
const { getItems, createItem, updateItem, deleteItem } = require("./api.js");

console.log("Running tests...");

const start = getItems().length;

const created = createItem({ name: "Test", description: "D" });
assert.ok(created.id);

const updated = updateItem(created.id, { name: "Updated", description: "X" });
assert.strictEqual(updated.name, "Updated");

deleteItem(created.id);
assert.strictEqual(getItems().length, start);

let threw = false;
try { createItem({ name: "" }); } catch { threw = true; }
assert.ok(threw);

console.log("All tests passed.");
