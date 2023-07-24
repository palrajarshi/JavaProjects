let fetch = document.getElementById("btn1");
let storage;
function storageupd() {
  let title = document.getElementById("titleinp").value;
  let desc = document.getElementById("txtarea").value;
  if (title == "" && desc == "") {
    alert("Add title and description before adding!");
  } else {
    if (localStorage.getItem("value") == null) {
      storage = [];
      storage.push(title, desc);
      console.log(storage);
      storageJSON = JSON.stringify(storage);
      localStorage.setItem("value", storageJSON);
    } else {
      storage = JSON.parse(localStorage.getItem("value"));
      storage.push(title, desc);
      console.log(storage);
      storageJSON = JSON.stringify(storage);
      localStorage.setItem("value", storageJSON);
    }
  }
  updatetable();
}

function updatetable() {
  storage = JSON.parse(localStorage.getItem("value")) || [];
  let fetch = document.getElementById("tablebody");
  let index = 0;
  let serialnumber = 1;
  let str = "";
  for (index = 0; index < storage.length; index = index + 2) {
    console.log("inside for");
    str += `<tr>
      <td>${serialnumber}</td>
      <td>${storage[index]}</td>
      <td>${storage[index + 1]}</td>
      <td><button class="btn" onclick = "delnow(${index})">Delete</button></td>
    </tr>`;
    serialnumber++;
  }
  fetch.innerHTML = str;
}

fetch.addEventListener("click", storageupd);

// window.onload = updatetable();

// onclick function to reload the page
function reloadpage() {
  location.reload(); //to reload the page
  console.log("page reloaded");
}

// onclick function to clear the localstorage
function listclear() {
  let a = confirm("Are you sure?");
  if (a == true) {
    console.log(localStorage);
    localStorage.clear();
    console.log(localStorage);
    storage = [];
    updatetable();
  }
}
// function to delete the items
function delnow(element) {
  storage = JSON.parse(localStorage.getItem("value"));
  console.log(storage); //to know what is inside the array
  storage.splice(element, 2);
  console.log(storage); //to know whether elements are getting deleted
  storageJSON = JSON.stringify(storage);
  localStorage.setItem("value", storageJSON);
  updatetable();
}
window.onload = updatetable();
// updatetable();
