
/**
 *  Using inline annotations
 * let point let drawPoint = (point:{ x:number; y:number})=> {

}
 */
//Interfaces (defining the shape of an object)
//when using interface use the pascal's naming convention
interface Point{
    x:number,
    y:number
}
let drawPoint = (point:Point)=> {

}
point.x=4
point.y=5
drawPoint({
   x:4,
   y:8

})