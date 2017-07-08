'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _userDropdown = require('../user/userDropdown.js');

var _userDropdown2 = _interopRequireDefault(_userDropdown);

var _rewardPick = require('../reward/rewardPick.js');

var _rewardPick2 = _interopRequireDefault(_rewardPick);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TaskForm = function (_React$Component) {
    _inherits(TaskForm, _React$Component);

    function TaskForm(props) {
        _classCallCheck(this, TaskForm);

        var _this = _possibleConstructorReturn(this, (TaskForm.__proto__ || Object.getPrototypeOf(TaskForm)).call(this, props));

        _this.state = { users: [], task: props.task, rewards: [] };
        _this.onTitleChange = _this.onTitleChange.bind(_this);
        _this.onOwnerChange = _this.onOwnerChange.bind(_this);
        _this.onDescriptionChange = _this.onDescriptionChange.bind(_this);
        return _this;
    }

    _createClass(TaskForm, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.loadUsers().loadRewards();
        }
    }, {
        key: 'loadUsers',
        value: function loadUsers() {
            var _this2 = this;

            fetch("/user/list", {
                method: "GET"
            }).then(function (res) {
                return res.json();
            }).then(function (data) {
                var newState = _this2.state;
                newState.users = data;
                _this2.setState(newState);
                jQuery('select[name="owner"]').material_select();
            });
            return this;
        }
    }, {
        key: 'loadRewards',
        value: function loadRewards() {
            var _this3 = this;

            fetch("/reward/list", {
                method: "GET"
            }).then(function (res) {
                return res.json();
            }).then(function (data) {
                var newState = _this3.state;
                newState.rewards = data;
                _this3.setState(newState);
                jQuery('select[name="reward"]').material_select(_this3.onRewardChange.bind(_this3));
            });
            return this;
        }
    }, {
        key: 'onTitleChange',
        value: function onTitleChange(e) {
            this.updateTask({ title: e.target.value });
        }
    }, {
        key: 'updateTask',
        value: function updateTask(obj) {
            var task = this.state.task || {};
            for (var prop in obj) {
                task[prop] = obj[prop];
            }
            var newState = this.state;
            newState.task = task;
            this.setState(newState);
        }
    }, {
        key: 'onOwnerChange',
        value: function onOwnerChange(e) {}
    }, {
        key: 'onDescriptionChange',
        value: function onDescriptionChange(e) {
            this.updateTask({ description: e.target.value });
        }
    }, {
        key: 'onRewardChange',
        value: function onRewardChange(e) {
            var rewardDropdown = document.querySelector('[name="reward"]');
            var selectedItem = rewardDropdown.children[rewardDropdown.selectedIndex];
            console.log(selectedItem);
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { id: 'task-form', className: 'modal modal-fixed-footer' },
                React.createElement(
                    'div',
                    { className: 'modal-content' },
                    React.createElement(
                        'form',
                        { id: 'task' },
                        React.createElement(
                            'h4',
                            null,
                            React.createElement('input', { type: 'text', onChange: this.onTitleChange, value: this.state.task ? this.state.task.title : "New Task" })
                        ),
                        React.createElement(_userDropdown2.default, { change: this.onOwnerChange, users: this.state.users }),
                        React.createElement(
                            'div',
                            { className: 'input-field s12' },
                            React.createElement('textarea', { value: this.state.task ? this.state.task.description : "", onChange: this.onDescriptionChange, id: 'description', name: 'description', className: 'materialize-textarea' }),
                            React.createElement(
                                'label',
                                null,
                                'Description'
                            )
                        ),
                        React.createElement(_rewardPick2.default, { change: this.onRewardChange, rewards: this.state.rewards })
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'modal-footer' },
                    React.createElement(
                        'a',
                        { href: '#!', className: 'modal-action modal-close waves-effect waves-green btn' },
                        this.state.task ? "Update" : "Create"
                    )
                )
            );
        }
    }]);

    return TaskForm;
}(React.Component);

exports.default = TaskForm;