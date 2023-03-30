const addItem = document.getElementById("add-item");
const deleteItem = document.querySelector('span')
const ul = document.getElementById("items");

function addListItem(event) {
  const itemText = prompt("Lägg till: ");

  const item = document.createElement("li");
  const deleteItem = document.createElement("span");

  item.textContent = itemText;
  deleteItem.textContent = "Delete";
  deleteItem.addEventListener("click", deleteListItem);

  ul.appendChild(item);
  item.appendChild(deleteItem);
}

function deleteListItem(event) {
  const li = event.target.closest("li")
  ul.removeChild(li);
}

addItem.addEventListener("click", () => {
  addListItem();
})