// ==UserScript==
// @name         Voxed - Control+Enter enviar comentario
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @include      /.*www.voxed.net/[a-z]{3}/.*\
// @grant        none
// @updateURL    https://raw.githubusercontent.com/randomperson190/VoxedExtensiones/master/Script4.js
// @downloadURL  https://raw.githubusercontent.com/randomperson190/VoxedExtensiones/master/Script4.js
// ==/UserScript==

document.onkeyup = function (e) {
  // ### Control + Enter ### - https://keycode.info/
  if (e.ctrlKey && e.which == 13) {
    document.querySelectorAll(".buttonPress.newComment")[0].click();
  }
};
