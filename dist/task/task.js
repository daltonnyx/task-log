"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Task = function () {
    function Task(data) {
        _classCallCheck(this, Task);

        this._id = data._id;
        this.title = data.title;
        this.description = data.description;
        this.owner = data.owner;
        this.reward = data.reward;
        this.dateEnd = data.dateEnd;
        this.priority = data.priority;
    }

    _createClass(Task, [{
        key: "complete",
        value: function complete() {
            console.log("completing");
            if (!this.dateEnd) {
                this.dateEnd = new Date();
            }
        }
    }]);

    return Task;
}();

exports.default = Task;