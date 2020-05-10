// ==UserScript==
// @name         Voxed - ControlEnter enviar comentario
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.voxed.net/*
// @grant        none
// ==/UserScript==

document.onkeyup = function (e) {
  // ### Control + Enter ###
  if (e.ctrlKey && e.which == 13) {
    document.querySelectorAll(".buttonPress.newComment")[0].click();
  }
};

