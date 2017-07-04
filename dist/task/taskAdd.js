'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var taskAddClick = function taskAddClick(evt) {
    evt.preventDefault();
    jQuery('#task-form').modal('open');
};
var TaskAdd = function TaskAdd(props) {
    return React.createElement(
        'div',
        { className: 'task-add' },
        React.createElement(
            'a',
            { 'data-target': 'task-form', onClick: taskAddClick },
            React.createElement(
                'i',
                { className: 'material-icons' },
                'add'
            )
        )
    );
};

exports.default = TaskAdd;