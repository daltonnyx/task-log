"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var UserDropdown = function UserDropdown(props) {
    return React.createElement(
        "div",
        { className: "input-field s12" },
        React.createElement(
            "select",
            { onChange: props.change, name: "owner" },
            props.users.map(function (user) {
                return React.createElement(
                    "option",
                    { key: user._id, value: user._id },
                    user.fullName
                );
            })
        ),
        React.createElement(
            "label",
            null,
            "Owner"
        )
    );
};

exports.default = UserDropdown;