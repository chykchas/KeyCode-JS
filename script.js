//import KeyCodeList from "./KeyCodes";

let area = document.getElementById("area");
let keyName;
let keyCode;

document.getElementById("ButtonInput").addEventListener("keydown", (event) => {
  keyName = event.key;
  keyCode = event.code;
  console.log(event);
});
