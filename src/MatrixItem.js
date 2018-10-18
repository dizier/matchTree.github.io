"use strict";

class MatrixItem extends PIXI.Container{
    constructor(id) {
        super();
        let itemSprite = new PIXI.Sprite(Config.getTexture(Config.MATRIX_SET[id]));
        this.addChild(itemSprite);

        this.interactive = true;
        this.buttonMode = true;

        this
            .on('pointerdown', onDragStart)
            .on('pointerup', onDragEnd)
            .on('pointerupoutside', onDragEnd)
            .on('pointermove', onDragMove);

        function onDragStart(event) {
            // store a reference to the data
            // the reason for this is because of multitouch
            // we want to track the movement of this particular touch
            this.data = event.data;
            this.alpha = 0.5;
            this.dragging = true;

            this.drugFromPoint = new PIXI.Point(this.data.originalEvent.offsetX - this.x, this.data.originalEvent.offsetY - this.y);
        }

        function onDragEnd() {
            this.alpha = 1;
            this.dragging = false;
            // set the interaction data to null
            this.data = null;
            this.x = this.drugFromPoint.x;
            this.y = this.drugFromPoint.y;
        }

        function onDragMove() {
            if (this.dragging) {
                var newPosition = this.data.getLocalPosition(this.parent);
                console.log(this.data);
                this.x = this.data.originalEvent.offsetX - this.drugFromPoint.x;
                this.y = this.data.originalEvent.offsetY - this.drugFromPoint.y;
            }
        }
    }


}
MatrixItem.prototype.drugFromPoint = null;
MatrixItem.prototype.dragging = null;

