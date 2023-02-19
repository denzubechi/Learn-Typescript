/***
 * Public
 * Private
 * Protected
 */

class Point2{
    //making a parameter optional
    //undefined is not assignable to a t_ype number
    constructor(private _x?:number,private _y?:number){
    }
    draw(){
        console.log('X: '+ this._x + 'Y: ' + this._y)
    }
    //accessing from the private class
    get x(){
        return this._x
    }
    set x(value){
        if (value <0)
            throw new Error('Value cannt be less than 0')

        this._x = value
    }
}
let point2 = new Point2(3,4);
let x = point2.x;
point2.x = 10;
point2.draw()