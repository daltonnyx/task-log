"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var TaskAdd = function TaskAdd(props) {
    return React.createElement(
        "div",
        { className: "task-add" },
        React.createElement(
            "a",
            { "data-target": "task-form", href: "#task-form" },
            React.createElement(
                "i",
                { className: "material-icons" },
                "add"
            )
        )
    );
};

exports.default = TaskAdd;