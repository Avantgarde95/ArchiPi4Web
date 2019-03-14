var Util = (function () {
    'use strict';

    function Util() {
    }

    Util.getAllElements = function (id) {
        return document.getElementsByClassName(id);
    };

    Util.getElement = function (id) {
        return this.getAllElements(id)[0];
    };

    Util.forEach = function (data, onIterate) {
        var length = data.length,
            i;

        for (i = 0; i < length; i++) {
            onIterate(data[i], i, data);
        }
    };

    Util.toInteger = function (value) {
        return value * 1;
    };

    Util.isInteger = Number.isInteger || function (value) {
        return typeof value === "number"
            && isFinite(value)
            && Math.floor(value) === value;
    };

    Util.formatFloat = function (value) {
        return value.toFixed(6);
    };

    return Util;
})();
