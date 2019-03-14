var Archimedes = (function () {
    'use strict';

    function Archimedes() {

    }

    Archimedes.area = function (sideCount) {
        var innerPolygon = sideCount * Math.sin(Math.PI * 2 / sideCount) / 2,
            outerPolygon = innerPolygon / Math.pow(Math.cos(Math.PI / sideCount), 2);

        return {
            innerPolygon: innerPolygon,
            outerPolygon: outerPolygon,
            pi: (innerPolygon + outerPolygon) / 2
        };
    };

    Archimedes.perimeter = function (sideCount) {
        var innerPolygon = sideCount * Math.sin(Math.PI / sideCount) * 2,
            outerPolygon = innerPolygon / Math.cos(Math.PI / sideCount);

        return {
            innerPolygon: innerPolygon,
            outerPolygon: outerPolygon,
            pi: (innerPolygon + outerPolygon) / 4
        }
    };

    return Archimedes;
}());
