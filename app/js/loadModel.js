'use strict';
let parseSTL = require('parse-stl');
let viewport = require('./viewport.js');

module.exports = loadModel;

function loadModel(STLasArrayBuffer) {
    let buf = new Buffer(STLasArrayBuffer);
    let mesh = parseSTL(buf);
    viewport.loadMesh(mesh);

    viewport.setStatus("");
    viewport.enableButtons();
}
