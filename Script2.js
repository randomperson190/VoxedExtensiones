// ==UserScript==
// @name         Voxed - ControlEnter enviar comentario
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.voxed.net/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/randomperson190/VoxedExtensiones/master/Script2.js
// @downloadURL  https://raw.githubusercontent.com/randomperson190/VoxedExtensiones/master/Script2.js
// ==/UserScript==

document.onkeyup = function (e) {
  // ### Control + Enter ###
  if (e.ctrlKey && e.which == 13) {
    document.querySelectorAll(".buttonPress.newComment")[0].click();
  }
};

