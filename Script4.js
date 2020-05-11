// ==UserScript==
// @name         Voxed - Ir a Comentario [Primero / Último]
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  try to take over the world!
// @author       You
// @include      /.*voxed.net/[a-z]{3}/.*\
// @grant        none
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// @updateURL    https://raw.githubusercontent.com/randomperson190/VoxedExtensiones/master/Script4.js
// @downloadURL  https://raw.githubusercontent.com/randomperson190/VoxedExtensiones/master/Script4.js
// ==/UserScript==

///////////////////////////////////////////////
///////////////////////////////////////////////

// @@@@@@@@@@@@@@@@@
// @@@ Functions @@@
// @@@@@@@@@@@@@@@@@

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
function ScrollToFirstComment() {
  document.getElementsByTagName("main")[0].style.marginTop = "0px";
  var elmnt = document.getElementsByClassName("commentBox")[0];
  elmnt.style.marginTop = 0;
  elmnt.scrollIntoView();
  elmnt.style.marginTop = "20px";
  document.getElementsByTagName("main")[0].style.marginTop = "50px";
}
function ScrollToLastComment() {
  var CantidadDecomentarios = document.getElementsByClassName("commentTag pointer").length - 1;
  var elmnt = document.getElementsByClassName("commentTag pointer")[CantidadDecomentarios];
  elmnt.scrollIntoView();
}

///////////////////////////////////////////////
///////////////////////////////////////////////

// ############
// ### Main ###
// ############

var $ = window.jQuery;
var div1 = document.getElementsByClassName("menuIcon tooltip-bottom mobile")[document.getElementsByClassName("menuIcon tooltip-bottom mobile").length - 1];
var FlechaUp = document.createElement("div");
FlechaUp.className = "menuIcon tooltip-bottom mobile FlechaUp"
FlechaUp.style = "padding-bottom: 2px; margin-bottom: 16px; margin-right: 4px; padding-left: 5px; padding-right: 5px; user-select: none; -moz-user-select: none; -khtml-user-select: none; -webkit-user-select: none; -o-user-select: none;";
FlechaUp.innerText = "⮝";
insertAfter(div1, FlechaUp);
var div2 = document.getElementsByClassName("menuIcon tooltip-bottom mobile")[document.getElementsByClassName("menuIcon tooltip-bottom mobile").length - 1];
var FlechaDown = document.createElement("div");
FlechaDown.className = "menuIcon tooltip-bottom mobile FlechaDown"
FlechaDown.style = "margin-left: -28px; margin-top: 18px; margin-right: 15px; padding-left: 5px; padding-right: 5px; user-select: none; -moz-user-select: none; -khtml-user-select: none; -webkit-user-select: none; -o-user-select: none;";
FlechaDown.innerText = "⮟";
insertAfter(div2, FlechaDown);
$(".FlechaUp").hover(function(){
  $(this).css("cursor", "pointer");
  }, function(){
  $(this).css("cursor", "default");
});
$(".FlechaDown").hover(function(){
  $(this).css("cursor", "pointer");
  }, function(){
  $(this).css("cursor", "default");
});
document.getElementsByClassName("FlechaUp")[0].addEventListener("click", ScrollToFirstComment);
document.getElementsByClassName("FlechaDown")[0].addEventListener("click", ScrollToLastComment);
