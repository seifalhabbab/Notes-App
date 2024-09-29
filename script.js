const createBtn = document.querySelector(".btn");
const notesContainer = document.querySelector(".notes-container");
let notes = document.querySelectorAll(".input-box");

createBtn.addEventListener("click", function () {
  let wrapper = document.createElement("div");
  wrapper.className = "wrapper";
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  img.src = "images/delete.png";
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  notesContainer.appendChild(wrapper).appendChild(inputBox);
  notesContainer.appendChild(wrapper).appendChild(img);
  saveData();
});

notesContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    saveData();
  }
  else if (e.target.tagName === "P") {
    notes = document.querySelectorAll(".input-box")
    notes.forEach(nt => {
      nt.onkeyup = function () {
        saveData();
      }
    })
  }
});

function saveData() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}
function showData() {
  notesContainer.innerHTML = localStorage.getItem("notes");
}
showData();

document.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    document.execCommand("insertLineBreak");
    e.preventDefault();
  }
})