let area = document.getElementById("area");
let cols = area.getAttribute("cols");
let keyName;
let keyCode;
let i = 0;

document.getElementById("Input").addEventListener("keydown", (event) => {
  key = event.key;
  Code = event.code;
  keyCode = event.keyCode;

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
});
