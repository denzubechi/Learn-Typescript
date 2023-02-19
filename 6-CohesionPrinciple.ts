class Point{
    x:number;
    y:number;

    draw(){
        console.log('X: '+ this.x + 'Y: ' + this.y)
    }
    getDistannce(another:Point){
        //...
    }
}
let point = new Point()
point.x = 4;
point.y = 7;
point.draw()