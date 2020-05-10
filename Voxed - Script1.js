// ==UserScript==
// @name         Voxed - Agregar botón de autoactualizar
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.voxed.net/*
// @grant        none
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// @updateURL    https://raw.githubusercontent.com/Charcoal-SE/Userscripts/master/fdsc/fdsc.meta.js
// @downloadURL  https://raw.githubusercontent.com/Charcoal-SE/Userscripts/master/fdsc/fdsc.user.js
// ==/UserScript==

///////////////////////////////////////////////
///////////////////////////////////////////////

// @@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@ External functions @@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

///////////////////////////////////////////////
///////////////////////////////////////////////

var CantidadDeBotones = document.getElementsByClassName("attachButton tooltip-bottom").length - 1;
var EstadoInicial = false;
var div = document.getElementsByClassName("attachButton tooltip-bottom")[CantidadDeBotones];
var el = document.createElement("div");
el.className = "attachButton tooltip-bottom AutoUpdate";
el.style = "font-size: 18px; padding-bottom: 3px; height: 37px;";
el.innerText = "֍";
insertAfter(div, el);
document.getElementsByClassName("attachButton tooltip-bottom AutoUpdate")[0].addEventListener("click", myFunction);
function myFunction() {
  if (EstadoInicial == false) {
    document.getElementsByClassName("AutoUpdate")[0].style.backgroundColor = "#256587";
    EstadoInicial = true;
    var myVar = setInterval(myTimer, 1);
  }
  else if (EstadoInicial == true) {
    document.getElementsByClassName("AutoUpdate")[0].style.backgroundColor = "";
    EstadoInicial = false;
  }
  function myTimer() {
    var ColorActual = document.getElementsByClassName("AutoUpdate")[0].style.backgroundColor;
    var CantidadDeComentariosNuevos = document.getElementsByClassName("commentsVoxCount loadmore unselect")[0].getAttribute("data-comments");
    if (CantidadDeComentariosNuevos >= 1) {
      document.getElementsByClassName("commentsVoxCount loadmore unselect")[0].click();
    }
    if (ColorActual == "") {
      myStopFunction();
    }
  }
  function myStopFunction() {
    clearInterval(myVar);
  }
}
