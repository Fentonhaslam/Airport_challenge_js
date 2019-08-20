describe('Plane', function () {

    var plane;
    beforeEach(function () {
        plane = new Plane();
    });

    it('responds to land', function () {
        plane.land();
        expect(plane.isFlying()).toBe(false);
    });
});