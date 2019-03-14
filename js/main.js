window.onload = function () {
    'use strict';

    var element = {
            language: Util.getElement('Language'),
            board: Util.getElement('Board'),
            input: Util.getElement('Input'),
            run: Util.getElement('Run'),
            outerPolygonArea: Util.getElement('OuterPolygonArea'),
            innerPolygonArea: Util.getElement('InnerPolygonArea'),
            piByArea: Util.getElement('PiByArea'),
            outerPolygonPerimeter: Util.getElement('OuterPolygonPerimeter'),
            innerPolygonPerimeter: Util.getElement('InnerPolygonPerimeter'),
            piByPerimeter: Util.getElement('PiByPerimeter')
        },
        board = new Board(element.board),
        state = {
            useKorean: true
        };

    function run(sideCount) {
        var area = Archimedes.area(sideCount),
            perimeter = Archimedes.perimeter(sideCount);

        board.simulate(sideCount);

        element.innerPolygonArea.innerHTML = Util.formatFloat(area.innerPolygon);
        element.outerPolygonArea.innerHTML = Util.formatFloat(area.outerPolygon);
        element.piByArea.innerHTML = Util.formatFloat(area.pi);

        element.innerPolygonPerimeter.innerHTML = Util.formatFloat(perimeter.innerPolygon);
        element.outerPolygonPerimeter.innerHTML = Util.formatFloat(perimeter.outerPolygon);
        element.piByPerimeter.innerHTML = Util.formatFloat(perimeter.pi);
    }

    element.language.addEventListener('click', function () {
        state.useKorean = !state.useKorean;

        Util.forEach(Util.getAllElements('Korean'), function (element) {
            element.style.display = state.useKorean ? 'inline' : 'none';
        });

        Util.forEach(Util.getAllElements('English'), function (element) {
            element.style.display = state.useKorean ? 'none' : 'inline';
        });
    });

    element.run.addEventListener('click', function () {
        var sideCount = Util.toInteger(element.input.value);

        if (Util.isInteger(sideCount) && sideCount >= 3 && sideCount <= 300) {
            run(sideCount);
        }
    });

    run(5);
};
