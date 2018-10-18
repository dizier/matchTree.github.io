"use strict";
class Config {
    constructor() {}

    static getTexture(name){
        return PIXI.loader.resources[name].texture;
    }

}
Config.MATRIX_SET = [1,2,3,4,5,6,7];

