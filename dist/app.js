'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _task = require('./task/task.js');

var _task2 = _interopRequireDefault(_task);

var _sidebar = require('./sidebar.js');

var _sidebar2 = _interopRequireDefault(_sidebar);

var _nav = require('./nav.js');

var _nav2 = _interopRequireDefault(_nav);

var _taskList = require('./task/taskList.js');

var _taskList2 = _interopRequireDefault(_taskList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var root = document.getElementById('root');

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

        _this.completeTask = _this.completeTask.bind(_this);

        _this.state = { tasks: [] };
        return _this;
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            fetch("/task/list", {
                method: "GET"
            }).then(function (response) {
                console.log(response);
                return response.json();
            }).then(function (data) {
                _this2.setState({ tasks: data });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var tasks = this.state.tasks;
            return React.createElement(
                'div',
                { id: 'app' },
                React.createElement(
                    'header',
                    null,
                    React.createElement(_nav2.default, null),
                    React.createElement(_sidebar2.default, null)
                ),
                React.createElement(
                    'main',
                    null,
                    React.createElement(
                        'div',
                        { className: 'section currentTask' },
                        React.createElement(_taskList2.default, { completeTask: this.completeTask, tasks: tasks })
                    ),
                    React.createElement(
                        'div',
                        { className: 'section tasklog' },
                        'Monthly Tasklog goes here'
                    )
                )
            );
        }
    }, {
        key: 'completeTask',
        value: function completeTask(task) {}
    }]);

    return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), root);