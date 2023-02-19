class Point1{
    x;
    y;


    //making a parameter optional
    //undefined is not assignable to a type number
    constructor(x?:number, y?:number){
        this.x = x;
        this.y = y;
    }
    draw(){
        console.log('X: '+ this.x + 'Y: ' + this.y)
    }
    getDistannce(another:Point){
        //...
    }
}
let point1 = new Point1(3,4)
point.draw()