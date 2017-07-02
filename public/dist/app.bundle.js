/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sidebar = function (_React$Component) {
    _inherits(Sidebar, _React$Component);

    function Sidebar() {
        _classCallCheck(this, Sidebar);

        return _possibleConstructorReturn(this, (Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).apply(this, arguments));
    }

    _createClass(Sidebar, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "ul",
                { id: "main-nav", className: "side-nav" },
                React.createElement(
                    "li",
                    null,
                    React.createElement(
                        "div",
                        { className: "user-view" },
                        React.createElement(
                            "div",
                            { className: "background" },
                            React.createElement("img", { src: "./assets/images/office.jpg" })
                        ),
                        React.createElement(
                            "a",
                            { href: "#" },
                            React.createElement("img", { className: "circle", src: "./assets/images/yuna.jpg" })
                        ),
                        React.createElement(
                            "a",
                            { href: "#" },
                            React.createElement(
                                "span",
                                { className: "white-text name" },
                                "Dalton Nyx"
                            )
                        ),
                        React.createElement(
                            "a",
                            { href: "#" },
                            React.createElement(
                                "span",
                                { className: "white-text email" },
                                "quytn@vinabits.com.vn"
                            )
                        )
                    )
                ),
                React.createElement(
                    "li",
                    null,
                    React.createElement(
                        "a",
                        { href: "#" },
                        React.createElement(
                            "i",
                            { className: "material-icons" },
                            "dashboard"
                        ),
                        " Dashboard"
                    )
                ),
                React.createElement(
                    "li",
                    null,
                    React.createElement(
                        "a",
                        { href: "#" },
                        React.createElement(
                            "i",
                            { className: "material-icons" },
                            "assignment"
                        ),
                        " Tasks"
                    )
                ),
                React.createElement(
                    "li",
                    null,
                    React.createElement("div", { className: "divider" })
                ),
                React.createElement(
                    "li",
                    null,
                    React.createElement(
                        "a",
                        { href: "#" },
                        React.createElement(
                            "i",
                            { className: "material-icons" },
                            "trending_up"
                        ),
                        " Reports"
                    )
                )
            );
        }
    }]);

    return Sidebar;
}(React.Component);

exports.default = Sidebar;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = function (_React$Component) {
    _inherits(Navbar, _React$Component);

    function Navbar() {
        _classCallCheck(this, Navbar);

        return _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).apply(this, arguments));
    }

    _createClass(Navbar, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "nav",
                null,
                React.createElement(
                    "div",
                    { className: "nav-wrapper" },
                    React.createElement(
                        "a",
                        { href: "#", "data-activates": "main-nav", className: "button-collapse show-on-large" },
                        React.createElement(
                            "i",
                            { className: "material-icons" },
                            "apps"
                        )
                    )
                )
            );
        }
    }]);

    return Navbar;
}(React.Component);

exports.default = Navbar;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(3);
__webpack_require__(1);
module.exports = __webpack_require__(0);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _task = __webpack_require__(4);

var _task2 = _interopRequireDefault(_task);

var _sidebar = __webpack_require__(0);

var _sidebar2 = _interopRequireDefault(_sidebar);

var _nav = __webpack_require__(1);

var _nav2 = _interopRequireDefault(_nav);

var _taskList = __webpack_require__(5);

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

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _taskCard = __webpack_require__(6);

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

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

/***/ })
/******/ ]);