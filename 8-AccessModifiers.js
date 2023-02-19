/***
 * Public
 * Private
 * Protected
 */
var Point2 = /** @class */ (function () {
    //making a parameter optional
    //undefined is not assignable to a t_ype number
    function Point2(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point2.prototype.draw = function () {
        console.log('X: ' + this._x + 'Y: ' + this._y);
    };
    Object.defineProperty(Point2.prototype, "x", {
        //accessing from the private class
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value < 0)
                throw new Error('Value cannt be less than 0');
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    return Point2;
}());
var point2 = new Point2(3, 4);
var x = point2.x;
point2.x = 10;
point2.draw();
