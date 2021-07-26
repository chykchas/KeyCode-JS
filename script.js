let KeyHTML = document.getElementById("Key");
let CodeHTML = document.getElementById("Code");
let keyCodeHTML = document.getElementById("keyCode");
/*let key;
let Code;
let keyCode;
let i = 0;
*/

document.getElementById("Input").addEventListener("keydown", (event) => {
  KeyHTML.textContent = event.key;
  CodeHTML.textContent = event.code;
  keyCodeHTML.textContent = event.keyCode;
  /*
  area.value += "Key(name)" + " | " + "Code" + " | " + "KeyCode" + "\n";

  // вывод keyName и keyCode в текстовое окно
  area.value += "\n" + key + " | " + Code + " | " + keyCode + "\n";

   // Автоматическая прокрутка до последнего "свежего" вывода
  area.scrollTop = area.scrollHeight;

  // Отрисовка оступа
  do {
    area.value += "-";
    i++;
  } while (i < cols - 1);
  i = 0;
*/
});
