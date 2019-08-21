'use strict';

describe('Airport', function () {

    var airport;
    var plane;
    var clear_weather = new Weather(0);
    var stormy_weather = new Weather(1);

    it('creates a plane', function () {
        airport = new Airport(stormy_weather, Plane);
        airport.create_plane();
        expect(airport.storage[0]).toEqual(jasmine.any(Plane));
    });

    beforeEach(function () {
        airport = new Airport(clear_weather, Plane);
        plane = new Plane();

    });
    it('starts with no plane', function () {
        expect(airport.storage).toEqual([]);
    });
    it('stores an airplane', function () {
        plane.land();
        airport.land(plane);
        expect(airport.storage).toEqual([plane]);
    });

    beforeEach(function () {
        airport = new Airport(stormy_weather, Plane);
        plane = new Plane();
    });
    it('does not take off an airplane in stormy weather', function () {
        plane.land();
        airport.land(plane);
        expect(function () {
            airport.takeoff()
        }).toThrowError('It is stormy out there, need to wait until it is clear!')
    });

});

describe('Airport', function () {

    var airport;
    var plane;
    var clear_weather = new Weather(0);
    var stormy_weather = new Weather(1);

    beforeEach(function () {
        airport = new Airport(clear_weather, Plane);
        plane = new Plane();

    });
    it('takes off an airplane in clear weather', function () {
        plane.land();
        airport.land(plane);
        plane.takeoff();
        airport.takeoff(plane);
        expect(airport.storage).toEqual([]);
    });
});