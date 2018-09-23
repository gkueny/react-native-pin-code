'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var reactNative = require('react-native');
var propTypes = require('prop-types');

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
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
  _inheritsLoose(CodePin, _Component);

  function CodePin(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      currentCode: '',
      currentIdEdit: 0,
      codeLength: null
    };
    return _this;
  }

  CodePin.getDerivedStateFromProps = function getDerivedStateFromProps(_ref) {
    var code = _ref.code,
        codeLength = _ref.codeLength;
    return {
      codeLength: code ? code.length : codeLength
    };
  };
  /**
   * Return all Pins
   * @param {number} codeLength
   * @param {string} currentCode
   *
   * @returns {array} pins's list
   */


  CodePin.getPinList = function getPinList(codeLength, currentCode) {
    var pins = [];

    for (var i = 0; i < codeLength; i += 1) {
      var value = currentCode.length >= i ? currentCode[i] : '';
      pins.push(React__default.createElement(Pin, {
        key: i + value,
        value: value
      }));
    }

    return pins;
  };

  var _proto = CodePin.prototype;

  _proto.render = function render() {
    var _this$state = this.state,
        codeLength = _this$state.codeLength,
        currentCode = _this$state.currentCode;
    var pins = CodePin.getPinList(codeLength, currentCode);
    return React__default.createElement(reactNative.View, null, React__default.createElement(reactNative.TextInput, {
      value: currentCode
    }), pins);
  };

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
