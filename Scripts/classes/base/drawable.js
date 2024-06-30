class DrawableBase {
    width = 0;
    height = 0;
    isDestroyed = false;
    
    position = new Point(0,0);

    constructor(position) {
        this.position = position;
    }
}