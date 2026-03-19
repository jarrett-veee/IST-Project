const items = [
  { id: "1", name: "Sample item", description: "Seed item" }
];

function newId() { return String(Date.now()); }

function validate(p) {
  if (!p.name || p.name.trim() === "") throw new Error("Name required");
}

function getItems() { return items; }

function createItem(payload) {
  validate(payload);
  const item = { id: newId(), name: payload.name, description: payload.description || "" };
  items.push(item);
  return item;
}

function updateItem(id, payload) {
  validate(payload);
  const i = items.findIndex(x => x.id === id);
  if (i === -1) throw new Error("Not found");
  items[i] = { ...items[i], name: payload.name, description: payload.description || "" };
  return items[i];
}

function deleteItem(id) {
  const i = items.findIndex(x => x.id === id);
  if (i === -1) throw new Error("Not found");
  items.splice(i, 1);
  return { success: true };
}

if (typeof module !== "undefined") {
  module.exports = { getItems, createItem, updateItem, deleteItem };
} else {
  window.ItemApi = { getItems, createItem, updateItem, deleteItem };
}
