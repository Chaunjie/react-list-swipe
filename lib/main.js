'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _listSwiper = require('./plugin/listSwiper');

var _listSwiper2 = _interopRequireDefault(_listSwiper);

require('./listSwiper.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * =====================================
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Chaunjie on 17/3/31.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Used for About component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Project Verson 0.0.1
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * =====================================
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var ListSwiper = function (_React$Component) {
    _inherits(ListSwiper, _React$Component);

    function ListSwiper(props) {
        _classCallCheck(this, ListSwiper);

        var _this = _possibleConstructorReturn(this, (ListSwiper.__proto__ || Object.getPrototypeOf(ListSwiper)).call(this, props));

        _this.state = {};

        return _this;
    }

    _createClass(ListSwiper, [{
        key: 'componentWillMount',
        value: function componentWillMount() {}
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var swipe = new _listSwiper2.default.ListSwipe();
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps() {}
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'swipe-view-container aui-in' },
                this.props.children
            );
        }
    }]);

    return ListSwiper;
}(_react2.default.Component);

exports.default = ListSwiper;