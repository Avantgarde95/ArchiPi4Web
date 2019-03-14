var Board = (function () {
    'use strict';

    function Board(element) {
        this.isSupported = typeof element.getContext !== 'undefined';

        if (!this.isSupported) {
            return;
        }

        this.element = element;
        this.context = element.getContext('2d');
        this.width = this.element.width;
        this.height = this.element.height;

        this.center = {
            x: this.width / 2,
            y: this.height / 2
        };
    }

    Board.prototype.simulate = function (sideCount) {
        if (!this.isSupported) {
            return;
        }

        var innerRadius = this.width * 0.4,
            outerRadius;

        if (sideCount === 3) {
            innerRadius = this.width * 0.2;
        } else if (sideCount === 4) {
            innerRadius = this.width * 0.3;
        }

        outerRadius = innerRadius / Math.cos(Math.PI / sideCount);

        this.clear();

        this.context.strokeStyle = '#d5eef4';
        this.context.lineWidth = 2;

        this.context.fillStyle = '#fcff23';
        this.drawPolygon(outerRadius, sideCount);

        this.context.fillStyle = '#582cdd';
        this.drawCircle(innerRadius);

        this.context.fillStyle = '#03ef00';
        this.drawPolygon(innerRadius, sideCount);

        this.drawSkeleton(outerRadius, sideCount);
    };

    Board.prototype.clear = function () {
        this.context.clearRect(0, 0, this.width, this.height);
    };

    Board.prototype.drawCircle = function (radius) {
        this.context.beginPath();
        this.context.arc(this.center.x, this.center.y, radius, 0, Math.PI * 2);
        this.context.fill();
        this.context.stroke();
    };

    Board.prototype.drawPolygon = function (radius, sideCount) {
        var angle = (Math.PI * 2) / sideCount,
            i;

        this.context.beginPath();
        this.context.moveTo(this.center.x, this.center.y - radius);

        for (i = 1; i < sideCount; i++) {
            this.context.lineTo(
                this.center.x + radius * Math.cos(angle * i - Math.PI / 2),
                this.center.y + radius * Math.sin(angle * i - Math.PI / 2)
            );
        }

        this.context.closePath();

        this.context.fill();
        this.context.stroke();
    };

    Board.prototype.drawSkeleton = function (radius, sideCount) {
        var angle = (Math.PI * 2) / sideCount,
            i;

        for (i = 0; i < sideCount; i++) {
            this.context.beginPath();
            this.context.moveTo(this.center.x, this.center.y);

            this.context.lineTo(
                this.center.x + radius * Math.cos(angle * i - Math.PI / 2),
                this.center.y + radius * Math.sin(angle * i - Math.PI / 2)
            );

            this.context.stroke();
        }
    };

    return Board;
}());
