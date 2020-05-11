// ==UserScript==
// @name         Voxed - Botón [AutoUpdate y EscribirFlechita (>)]
// @namespace    http://tampermonkey.net/
// @version      0.6
// @description  try to take over the world!
// @author       You
// @include      /.*voxed.net/.*/.*\
// @grant        none
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// @updateURL    https://raw.githubusercontent.com/randomperson190/VoxedExtensiones/master/Script1.js
// @downloadURL  https://raw.githubusercontent.com/randomperson190/VoxedExtensiones/master/Script1.js
// ==/UserScript==

///////////////////////////////////////////////
///////////////////////////////////////////////

// #############
// ### Regex ###
// #############
// https://www.debuggex.com/

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

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@ Escritura de Flechita @@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@

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

///////////////////////////////////////////////
///////////////////////////////////////////////

// ##################################
// ### Agregado de Nuevos Botones ###
// ##################################

var CantidadDeBotones = document.getElementsByClassName("attachButton tooltip-bottom").length - 1;
var EstadoInicial = false;
var div = document.getElementsByClassName("attachButton tooltip-bottom")[CantidadDeBotones];
var el1 = document.createElement("div");
el1.className = "attachButton tooltip-bottom AutoUpdate";
el1.style = "font-size: 18px; padding-bottom: 3px; height: 37px; user-select: none; -moz-user-select: none; -khtml-user-select: none; -webkit-user-select: none; -o-user-select: none;";
el1.innerText = "֍";
insertAfter(div, el1);
var el2 = document.createElement("div");
el2.className = "attachButton tooltip-bottom EscribirFlechita";
el2.style = "font-size: 18px; user-select: none; -moz-user-select: none; -khtml-user-select: none; -webkit-user-select: none; -o-user-select: none;";
el2.innerText = ">";
insertAfter(el1, el2);

// ####################################
// ### Comportamiento de AutoUpdate ###
// ####################################

document.getElementsByClassName("AutoUpdate")[0].addEventListener("click", myFunction1);
function myFunction1() {
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

// #############################
// ### Escritura de Flechita ###
// #############################

document.getElementsByClassName("EscribirFlechita")[0].addEventListener("click", myFunction2);
function myFunction2() {
  TextoActual = document.getElementById("commentTextarea").value;
  CantidadDeCaracteresActuales = document.getElementById("commentTextarea").value.length;
  if (CantidadDeCaracteresActuales < CaracteresMaximos) {
    var TextoUltimo = insert(TextoActual, PosicionActual, ">");
    document.getElementById("commentTextarea").value = TextoUltimo;
    document.getElementById("commentTextarea").selectionStart = PosicionActual + 1;
    document.getElementById("commentTextarea").selectionEnd = PosicionActual + 1;
    document.getElementById("commentTextarea").focus();
    PosicionActual++;
  }
}
