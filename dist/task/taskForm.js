"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _userDropdown = require("../user/userDropdown.js");

var _userDropdown2 = _interopRequireDefault(_userDropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TaskForm = function (_React$Component) {
    _inherits(TaskForm, _React$Component);

    function TaskForm(props) {
        _classCallCheck(this, TaskForm);

        var _this = _possibleConstructorReturn(this, (TaskForm.__proto__ || Object.getPrototypeOf(TaskForm)).call(this, props));

        _this.state = { users: [], task: props.task };
        _this.onTitleChange = _this.onTitleChange.bind(_this);
        _this.onOwnerChange = _this.onOwnerChange.bind(_this);
        _this.onDescriptionChange = _this.onDescriptionChange.bind(_this);
        return _this;
    }

    _createClass(TaskForm, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this2 = this;

            fetch("/user/list", {
                method: "GET"
            }).then(function (res) {
                return res.json();
            }).then(function (data) {
                _this2.setState({ users: data, task: _this2.props.task });
                jQuery('select[name="owner"]').material_select();
            });
        }
    }, {
        key: "onTitleChange",
        value: function onTitleChange(e) {
            var task = this.state.task || {};
            task.title = e.target.value;
            this.setState({ users: this.state.users, task: task });
        }
    }, {
        key: "onOwnerChange",
        value: function onOwnerChange(e) {}
    }, {
        key: "onDescriptionChange",
        value: function onDescriptionChange(e) {
            var task = this.state.task || {};
            task.description = e.target.innerText;
            this.setState({ users: this.state.users, task: task });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { id: "task-form", className: "modal modal-fixed-footer" },
                React.createElement(
                    "div",
                    { className: "modal-content" },
                    React.createElement(
                        "form",
                        { id: "task" },
                        React.createElement(
                            "h4",
                            null,
                            React.createElement("input", { type: "text", onChange: this.onTitleChange, value: this.state.task ? this.state.task.title : "New Task" })
                        ),
                        React.createElement(_userDropdown2.default, { change: this.onOwnerChange, users: this.state.users }),
                        React.createElement(
                            "div",
                            { className: "input-field col s12" },
                            React.createElement(
                                "textarea",
                                { onChange: this.onDescriptionChange, id: "description", name: "description", className: "materialize-textarea" },
                                this.state.task ? this.state.task.description : ""
                            ),
                            React.createElement(
                                "label",
                                null,
                                "Description"
                            )
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "modal-footer" },
                    React.createElement(
                        "a",
                        { href: "#!", className: "modal-action modal-close waves-effect waves-green btn-flat" },
                        "OK"
                    )
                )
            );
        }
    }]);

    return TaskForm;
}(React.Component);

exports.default = TaskForm;