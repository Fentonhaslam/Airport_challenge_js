'use strict';
describe('Weather', function () {

    var calm_weather;
    var weather;
    var stormy_weather;

    beforeEach(function () {
        calm_weather = new Weather(0);
        weather = new Weather(0.5);
        stormy_weather = new Weather(1);
    });;

    it('responds to stormy', function () {
        expect(calm_weather.isStormy()).toEqual(false)
        expect(stormy_weather.isStormy()).toEqual(true)
    });

    it('can be set a spy on Math.random - to false', function () {
        spyOn(Math, 'random').and.returnValue(0.1)
        expect(weather.isStormy()).toEqual(true)
    });
    it('can be set a spy on Math.random - to clear', function () {
        spyOn(Math, 'random').and.returnValue(0.9)
        expect(weather.isStormy()).toEqual(false)
    });
})