var Airport = function (weather, plane) {
    this.storage = []
    this._weather = weather
    this._plane = plane
};

Airport.prototype = {
    land: function (plane) {
        this.storage.push(plane)
    },
    takeoff: function (plane) {
        if (this._weather.isStormy()) {
            throw new Error('It is stormy out there, need to wait until it is clear!');
        }
        this.storage.pop(plane)
    },
    create_plane: function () {
        this.storage.push(new this._plane());
    },
};