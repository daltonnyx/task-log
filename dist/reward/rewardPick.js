"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var RewardPick = function RewardPick(props) {
    return React.createElement(
        "div",
        { className: "input-field s12" },
        React.createElement(
            "select",
            { onChange: props.change, name: "reward" },
            props.rewards.map(function (reward) {
                return React.createElement(
                    "option",
                    { key: reward._id, value: reward.score },
                    reward.title
                );
            })
        ),
        React.createElement(
            "label",
            null,
            "Score"
        )
    );
};

exports.default = RewardPick;