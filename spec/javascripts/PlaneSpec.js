'use strict';

describe('Plane', function () {

    var plane;
    beforeEach(function () {
        plane = new Plane();
    });

    it('responds to land', function () {
        plane.land();
        expect(plane.isFlying()).toBe(false);
    });

    it('responds to takeoff', function () {
        plane.land();
        plane.takeoff();
        expect(plane.isFlying()).toBe(true);
    });
});