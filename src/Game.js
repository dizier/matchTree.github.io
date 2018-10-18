"use strict";
window.addEventListener("load", init, false);


var application;


function init() {
    application = new PIXI.Application(1200, 800, {transparent: true});
    document.body.appendChild(application.view);

    PIXI.loader
        .add('1', "assets/img/itemType_1.png")
        .add('2', "assets/img/itemType_2.png")
        .add('3', "assets/img/itemType_3.png")
        .add('4', "assets/img/itemType_4.png")
        .add('5', "assets/img/itemType_5.png")
        .add('6', "assets/img/itemType_6.png")
        .add('7', "assets/img/itemType_7.png")
        .load(onLoadAssets);

    function onLoadAssets() {
        let matrix = [];
        let matrixSize = 5;
        let matrixTypeNum = 7;

        for(let i = 0; i < matrixSize; i++) {
            for(let j = 0; j < matrixSize; j++) {
                let item = new MatrixItem(Math.round(Math.random() * (matrixTypeNum - 1)));
                item.x = j * item.width;
                item.y = i * item.width;
                application.stage.addChild(item);
            }
        }

    }
}
