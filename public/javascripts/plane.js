var Plane = function () {
    this._flying = true;
};

Plane.prototype = {
    isFlying: function () {
        return this._flying;
    },
    land: function () {
        this._flying = false;
    },
    takeoff: function () {
        this._flying = true;
    },
};