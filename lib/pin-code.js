'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var reactNative = require('react-native');
var propTypes = require('prop-types');

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

var Pin = function Pin(_ref) {
  var value = _ref.value;
  return React__default.createElement(reactNative.Text, null, value);
};

Pin.propTypes = {
  value: propTypes.PropTypes.string
};
Pin.defaultProps = {
  value: ''
};

var CodePin =
/*#__PURE__*/
function (_Component) {
  _inherits(CodePin, _Component);

  function CodePin(props) {
    var _this;

    _classCallCheck(this, CodePin);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CodePin).call(this, props));
    _this.state = {
      currentCode: '',
      currentIdEdit: 0,
      codeLength: null
    };
    return _this;
  }

  _createClass(CodePin, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          codeLength = _this$state.codeLength,
          currentCode = _this$state.currentCode;
      var pins = CodePin.getPinList(codeLength, currentCode);
      return React__default.createElement(reactNative.View, null, React__default.createElement(reactNative.TextInput, {
        value: currentCode
      }), pins);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref) {
      var code = _ref.code,
          codeLength = _ref.codeLength;
      return {
        codeLength: code ? code.length : codeLength
      };
    }
    /**
     * Return all Pins
     * @param {number} codeLength
     * @param {string} currentCode
     *
     * @returns {array} pins's list
     */

  }, {
    key: "getPinList",
    value: function getPinList(codeLength, currentCode) {
      var pins = [];

      for (var i = 0; i < codeLength; i += 1) {
        var value = currentCode.length >= i ? currentCode[i] : '';
        pins.push(React__default.createElement(Pin, {
          key: i + value,
          value: value
        }));
      }

      return pins;
    }
  }]);

  return CodePin;
}(React.Component);

CodePin.propTypes = {
  code: propTypes.PropTypes.string,
  // directly specify code
  codeLength: propTypes.PropTypes.number,
  // specify code length if checkPinCode is used
  checkPinCode: propTypes.PropTypes.func,
  // check manually code
  onSuccess: propTypes.PropTypes.func,
  // call on success
  onError: propTypes.PropTypes.func,
  // call on error
  pinStyle: propTypes.PropTypes.object
};
CodePin.defaultProps = {
  code: null,
  codeLength: 0,
  checkPinCode: null,
  onSuccess: null,
  onError: null,
  pinStyle: null
};

module.exports = CodePin;
