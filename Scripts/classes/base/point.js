class Point {

    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    distance(point){
        return Math.sqrt((this.x - point.x) ** 2 + (this.y - point.y) ** 2)
    }

}