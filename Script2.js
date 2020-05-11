// ==UserScript==
// @name         Voxed - Autocargar nuevos comentarios al clickear en Comentar
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @include      /.*voxed.net/.*/.*\
// @grant        none
// @updateURL    https://raw.githubusercontent.com/randomperson190/VoxedExtensiones/master/Script2.js
// @downloadURL  https://raw.githubusercontent.com/randomperson190/VoxedExtensiones/master/Script2.js
// ==/UserScript==

var Contador = 0;
document.querySelectorAll(".buttonPress.newComment")[0].addEventListener("click", myFunction);
function myFunction() {
  var myVar = setInterval(myTimer, 1);
  function myTimer() {
    Contador++;
    var CantidadDeComentariosNuevos = document.getElementsByClassName("commentsVoxCount loadmore unselect")[0].getAttribute("data-comments");
    if (CantidadDeComentariosNuevos >= 1) {
      document.getElementsByClassName("commentsVoxCount loadmore unselect")[0].click();
    }
    if (Contador == 1000) {
      myStopFunction();
    }
  }
  function myStopFunction() {
    Contador = 0;
    clearInterval(myVar);
  }
}
