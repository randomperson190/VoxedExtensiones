// ==UserScript==
// @name         Voxed - [Control+Enter enviar comentario + Control+Q escribir Flechita (>)]
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  try to take over the world!
// @author       You
// @include      /.*voxed.net/[a-z]{3}/.*\
// @grant        none
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==

var PosicionActual;
var TextoActual;
var CantidadDeCaracteresActuales;
var CaracteresMaximos = 3000;
var $ = window.jQuery;
function insert(str, index, value) {
  return str.substr(0, index) + value + str.substr(index);
}
$("#commentTextarea").on("click mousedown mouseup dblclick keyup keypress textInput", function (e) {
  PosicionActual = e.target.selectionStart;
});
document.onkeyup = function (e) {
  // ### Control + Enter ### - https://keycode.info/
  if (e.ctrlKey && e.which == 13) {
    document.querySelectorAll(".buttonPress.newComment")[0].click();
  }
  // ### Control + Q ### - https://keycode.info/
  if (e.ctrlKey && e.which == 81) {
    TextoActual = document.getElementById("commentTextarea").value;
    CantidadDeCaracteresActuales = document.getElementById("commentTextarea").value.length;
    if (CantidadDeCaracteresActuales < CaracteresMaximos) {
      var TextoUltimo = insert(TextoActual, PosicionActual, ">");
      document.getElementById("commentTextarea").value = TextoUltimo;
      document.getElementById("commentTextarea").selectionStart = PosicionActual + 1;
      document.getElementById("commentTextarea").selectionEnd = PosicionActual + 1;
    }
  }
};
