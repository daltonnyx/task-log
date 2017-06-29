"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _taskCard = require("./taskCard.js");

var _taskCard2 = _interopRequireDefault(_taskCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TaskList = function TaskList(props) {
    var tasks = props.tasks.map(function (task) {
        return React.createElement(_taskCard2.default, { key: task._id, task: task, completeTask: props.completeTask });
    });
    return React.createElement(
        "ul",
        { className: "task-list" },
        tasks
    );
};

exports.default = TaskList;