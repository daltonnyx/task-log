'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TaskCard = function (_React$Component) {
    _inherits(TaskCard, _React$Component);

    function TaskCard() {
        _classCallCheck(this, TaskCard);

        var _this = _possibleConstructorReturn(this, (TaskCard.__proto__ || Object.getPrototypeOf(TaskCard)).call(this));

        _this.complete = _this.complete.bind(_this);
        return _this;
    }

    _createClass(TaskCard, [{
        key: 'complete',
        value: function complete() {
            this.props.completeTask(this.props.task);
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'li',
                { 'data-taskId': this.props._id },
                React.createElement(
                    'div',
                    { className: this.props.task.dateEnd ? 'task-card done' : 'task-card' },
                    React.createElement(
                        'div',
                        { className: 'score', onClick: this.complete },
                        React.createElement(
                            'span',
                            { className: 'task-done' },
                            React.createElement(
                                'svg',
                                { fill: '#000000', height: '120', viewBox: '0 0 24 24', width: '120', xmlns: 'http://www.w3.org/2000/svg' },
                                React.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
                                React.createElement('path', { id: 'tick-mark', d: 'M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z' })
                            )
                        ),
                        React.createElement(
                            'span',
                            { className: 'taskScore' },
                            this.props.task.reward.score
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'task-content' },
                        React.createElement(
                            'span',
                            { className: 'task-title' },
                            this.props.task.title,
                            React.createElement(
                                'i',
                                { className: 'material-icons right' },
                                'more_vert'
                            )
                        ),
                        React.createElement(
                            'p',
                            null,
                            this.props.task.description
                        )
                    )
                )
            );
        }
    }]);

    return TaskCard;
}(React.Component);

exports.default = TaskCard;