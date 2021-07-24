"use strict";

import KeyCodeList from "./KeyCodes";

let area = document.getElementById("area");

document.getElementById("ButtonInput").addEventListener("keydown", (event) => {
  let keyName = event.key;
  let keyCode = event.code;
});

area.value += keyName + "----" + keyCode;
