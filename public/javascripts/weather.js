var Weather = function (storm_probability) {
    this._storm_probability = storm_probability
};

Weather.prototype = {
    isStormy: function () {
        if (Math.random() < this._storm_probability)
            return true;
        else
            return false;
    },
};