(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(87);

Object.defineProperty(exports, "__esModule", {
  value: true
});

function getSurroundingWord(text, position) {
  if (!text) throw Error("Argument 'text' should be truthy");

  var isWordDelimiter = function isWordDelimiter(c) {
    return c === " " || c.charCodeAt(0) === 10;
  }; // leftIndex is initialized to 0 because if selection is 0, it won't even enter the iteration


  var start = 0; // rightIndex is initialized to text.length because if selection is equal to text.length it won't even enter the interation

  var end = text.length; // iterate to the left

  for (var i = position; i - 1 > -1; i--) {
    if (isWordDelimiter(text[i - 1])) {
      start = i;
      break;
    }
  } // iterate to the right


  for (var i = position; i < text.length; i++) {
    if (isWordDelimiter(text[i])) {
      end = i;
      break;
    }
  }

  return {
    start: start,
    end: end
  };
}

exports.getSurroundingWord = getSurroundingWord;

function selectWord(_a) {
  var text = _a.text,
      selection = _a.selection;

  if (text && text.length && selection.start === selection.end) {
    // the user is pointing to a word
    return getSurroundingWord(text, selection.start);
  }

  return selection;
}

exports.selectWord = selectWord;
/**
 *  Gets the number of line-breaks that would have to be inserted before the given 'startPosition'
 *  to make sure there's an empty line between 'startPosition' and the previous text
 */

function getBreaksNeededForEmptyLineBefore(text, startPosition) {
  if (text === void 0) {
    text = "";
  }

  if (startPosition === 0) return 0; // rules:
  // - If we're in the first line, no breaks are needed
  // - Otherwise there must be 2 breaks before the previous character. Depending on how many breaks exist already, we
  //      may need to insert 0, 1 or 2 breaks

  var neededBreaks = 2;
  var isInFirstLine = true;

  for (var i = startPosition - 1; i >= 0 && neededBreaks >= 0; i--) {
    switch (text.charCodeAt(i)) {
      case 32:
        // blank space
        continue;

      case 10:
        // line break
        neededBreaks--;
        isInFirstLine = false;
        break;

      default:
        return neededBreaks;
    }
  }

  return isInFirstLine ? 0 : neededBreaks;
}

exports.getBreaksNeededForEmptyLineBefore = getBreaksNeededForEmptyLineBefore;
/**
 *  Gets the number of line-breaks that would have to be inserted after the given 'startPosition'
 *  to make sure there's an empty line between 'startPosition' and the next text
 */

function getBreaksNeededForEmptyLineAfter(text, startPosition) {
  if (text === void 0) {
    text = "";
  }

  if (startPosition === text.length - 1) return 0; // rules:
  // - If we're in the first line, no breaks are needed
  // - Otherwise there must be 2 breaks before the previous character. Depending on how many breaks exist already, we
  //      may need to insert 0, 1 or 2 breaks

  var neededBreaks = 2;
  var isInLastLine = true;

  for (var i = startPosition; i < text.length && neededBreaks >= 0; i++) {
    switch (text.charCodeAt(i)) {
      case 32:
        continue;

      case 10:
        {
          neededBreaks--;
          isInLastLine = false;
          break;
        }

      default:
        return neededBreaks;
    }
  }

  return isInLastLine ? 0 : neededBreaks;
}

exports.getBreaksNeededForEmptyLineAfter = getBreaksNeededForEmptyLineAfter;

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

__webpack_require__(48);

__webpack_require__(87);

Object.defineProperty(exports, "__esModule", {
  value: true
});

function classNames() {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  var classes = [];

  for (var i = 0; i < arguments.length; i++) {
    var arg = arguments[i];
    if (!arg) continue;
    var argType = typeof arg;

    if (argType === "string" || argType === "number") {
      classes.push(arg);
    } else if (Array.isArray(arg) && arg.length) {
      var inner = classNames.apply(null, arg);

      if (inner) {
        classes.push(inner);
      }
    } else if (argType === "object") {
      for (var key in arg) {
        if (arg.hasOwnProperty(key) && arg[key]) {
          classes.push(key);
        }
      }
    }
  }

  return classes.join(" ");
}

exports.classNames = classNames;

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(45);

__webpack_require__(87);

__webpack_require__(22);

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __webpack_require__(0);

var defaultButtonProps = {
  tabIndex: -1
};

exports.MdeToolbarButton = function (props) {
  var buttonComponentClass = props.buttonComponentClass,
      buttonContent = props.buttonContent,
      buttonProps = props.buttonProps,
      onClick = props.onClick,
      readOnly = props.readOnly,
      name = props.name;

  var finalButtonProps = __assign({}, defaultButtonProps, buttonProps || {});

  var finalButtonComponent = buttonComponentClass || "button";
  return React.createElement("li", {
    className: "mde-header-item"
  }, React.createElement(finalButtonComponent, __assign({
    "data-name": name
  }, finalButtonProps, {
    onClick: onClick,
    disabled: readOnly,
    type: "button"
  }), buttonContent));
};

/***/ }),

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(87);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var boldCommand_1 = __webpack_require__(358);

exports.boldCommand = boldCommand_1.boldCommand;

var italicCommand_1 = __webpack_require__(359);

exports.italicCommand = italicCommand_1.italicCommand;

var strikeThroughCommand_1 = __webpack_require__(360);

exports.strikeThroughCommand = strikeThroughCommand_1.strikeThroughCommand;

var headerCommand_1 = __webpack_require__(361);

exports.headerCommand = headerCommand_1.headerCommand;

var linkCommand_1 = __webpack_require__(362);

exports.linkCommand = linkCommand_1.linkCommand;

var quoteCommand_1 = __webpack_require__(363);

exports.quoteCommand = quoteCommand_1.quoteCommand;

var codeCommand_1 = __webpack_require__(364);

exports.codeCommand = codeCommand_1.codeCommand;

var imageCommand_1 = __webpack_require__(365);

exports.imageCommand = imageCommand_1.imageCommand;

var listCommands_1 = __webpack_require__(366);

exports.checkedListCommand = listCommands_1.checkedListCommand;
exports.orderedListCommand = listCommands_1.orderedListCommand;
exports.unorderedListCommand = listCommands_1.unorderedListCommand;

var getDefaultCommands = function getDefaultCommands() {
  return [{
    commands: [headerCommand_1.headerCommand, boldCommand_1.boldCommand, italicCommand_1.italicCommand, strikeThroughCommand_1.strikeThroughCommand]
  }, {
    commands: [linkCommand_1.linkCommand, quoteCommand_1.quoteCommand, codeCommand_1.codeCommand, imageCommand_1.imageCommand]
  }, {
    commands: [listCommands_1.unorderedListCommand, listCommands_1.orderedListCommand, listCommands_1.checkedListCommand]
  }];
};

exports.getDefaultCommands = getDefaultCommands;

/***/ }),

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(87);

function __export(m) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}

Object.defineProperty(exports, "__esModule", {
  value: true
});

__export(__webpack_require__(261));

__export(__webpack_require__(244));

__export(__webpack_require__(262));

__export(__webpack_require__(263));

__export(__webpack_require__(367));

__export(__webpack_require__(368));

__export(__webpack_require__(369));

__export(__webpack_require__(370));

/***/ }),

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(87);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __webpack_require__(0);

var ClassNames_1 = __webpack_require__(235);

exports.MdeToolbarButtonGroup = function (props) {
  return React.createElement("ul", {
    className: ClassNames_1.classNames("mde-header-group", {
      hidden: props.hidden
    })
  }, props.children);
};

/***/ }),

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(45);

__webpack_require__(29);

__webpack_require__(87);

__webpack_require__(22);

__webpack_require__(44);

__webpack_require__(152);

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __webpack_require__(0);

var MdeToolbarButton_1 = __webpack_require__(244);

var defaultHeaderButtonProps = {
  tabIndex: -1
};

var MdeToolbarDropdown =
/** @class */
function (_super) {
  __extends(MdeToolbarDropdown, _super);

  function MdeToolbarDropdown(props) {
    var _this = _super.call(this, props) || this;

    _this.handleGlobalClick = function (e) {
      if (_this.clickedOutside(e)) {
        _this.closeDropdown();
      }
    };

    _this.openDropdown = function () {
      _this.setState({
        open: true
      });
    };

    _this.clickedOutside = function (e) {
      var target = e.target;
      return _this.state.open && _this.dropdown && _this.dropdownOpener && !_this.dropdown.contains(target) && !_this.dropdownOpener.contains(target);
    };

    _this.handleOnClickCommand = function (e, command) {
      var onCommand = _this.props.onCommand;
      onCommand(command);

      _this.closeDropdown();
    };

    _this.handleClick = function () {
      if (!_this.state.open) _this.openDropdown();else _this.closeDropdown();
    };

    _this.state = {
      open: false
    };
    return _this;
  }

  MdeToolbarDropdown.prototype.componentDidMount = function () {
    document.addEventListener("click", this.handleGlobalClick, false);
  };

  MdeToolbarDropdown.prototype.componentWillUnmount = function () {
    document.removeEventListener("click", this.handleGlobalClick, false);
  };

  MdeToolbarDropdown.prototype.closeDropdown = function () {
    this.setState({
      open: false
    });
  };

  MdeToolbarDropdown.prototype.render = function () {
    var _this = this;

    var _a = this.props,
        getIcon = _a.getIcon,
        commands = _a.commands,
        readOnly = _a.readOnly;
    var open = this.state.open;
    var items = commands.map(function (command, index) {
      return React.createElement(MdeToolbarButton_1.MdeToolbarButton, {
        key: "header-item" + index,
        name: command.name,
        buttonProps: command.buttonProps,
        buttonContent: command.icon ? command.icon(getIcon) : getIcon(command.name),
        onClick: function onClick(e) {
          return _this.handleOnClickCommand(e, command);
        },
        readOnly: readOnly
      });
    });
    var dropdown = open ? React.createElement("ul", {
      className: "react-mde-dropdown",
      ref: function ref(_ref) {
        _this.dropdown = _ref;
      }
    }, items) : null;
    var _b = this.props,
        buttonContent = _b.buttonContent,
        buttonProps = _b.buttonProps;

    var finalButtonProps = __assign({}, defaultHeaderButtonProps, buttonProps || {});

    return React.createElement("li", {
      className: "mde-header-item"
    }, React.createElement("button", __assign({
      type: "button"
    }, finalButtonProps, {
      ref: function ref(_ref2) {
        _this.dropdownOpener = _ref2;
      },
      onClick: this.handleClick,
      disabled: readOnly
    }), buttonContent), dropdown);
  };

  return MdeToolbarDropdown;
}(React.Component);

exports.MdeToolbarDropdown = MdeToolbarDropdown;

/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(87);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __webpack_require__(0);

exports.MdeFontAwesomeIcon = function (_a) {
  var icon = _a.icon;
  var transformedIcon = icon;

  switch (icon) {
    case "header":
      transformedIcon = "heading";
      break;

    case "quote":
      transformedIcon = "quote-right";
      break;

    case "unordered-list":
      transformedIcon = "tasks";
      break;

    case "ordered-list":
      transformedIcon = "list-ol";
      break;

    case "checked-list":
      transformedIcon = "tasks";
      break;

    default:
      transformedIcon = icon;
  }

  return React.createElement("i", {
    className: "fas fa-" + transformedIcon,
    "aria-hidden": "true"
  });
};

/***/ }),

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(87);

function __export(m) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}

Object.defineProperty(exports, "__esModule", {
  value: true
});

__export(__webpack_require__(263));

__export(__webpack_require__(375));

/***/ }),

/***/ 357:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(87);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var MarkdownUtil = __webpack_require__(227);

exports.MarkdownUtil = MarkdownUtil;

var commands = __webpack_require__(259);

exports.commands = commands;

var components_1 = __webpack_require__(260);

var icons_1 = __webpack_require__(264);

exports.SvgIcon = icons_1.SvgIcon;
exports.MdeFontAwesomeIcon = icons_1.MdeFontAwesomeIcon;
exports["default"] = components_1.ReactMde;

/***/ }),

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(87);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var MarkdownUtil_1 = __webpack_require__(227);

exports.boldCommand = {
  name: "bold",
  buttonProps: {
    "aria-label": "Add bold text"
  },
  execute: function execute(state0, api) {
    // Adjust the selection to encompass the whole word if the caret is inside one
    var newSelectionRange = MarkdownUtil_1.selectWord({
      text: state0.text,
      selection: state0.selection
    });
    var state1 = api.setSelectionRange(newSelectionRange); // Replaces the current selection with the bold mark up

    var state2 = api.replaceSelection("**" + state1.selectedText + "**"); // Adjust the selection to not contain the **

    api.setSelectionRange({
      start: state2.selection.end - 2 - state1.selectedText.length,
      end: state2.selection.end - 2
    });
  },
  keyCommand: "bold"
};

/***/ }),

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(87);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var MarkdownUtil_1 = __webpack_require__(227);

exports.italicCommand = {
  name: "italic",
  buttonProps: {
    "aria-label": "Add italic text"
  },
  execute: function execute(state0, api) {
    // Adjust the selection to encompass the whole word if the caret is inside one
    var newSelectionRange = MarkdownUtil_1.selectWord({
      text: state0.text,
      selection: state0.selection
    });
    var state1 = api.setSelectionRange(newSelectionRange); // Replaces the current selection with the italic mark up

    var state2 = api.replaceSelection("*" + state1.selectedText + "*"); // Adjust the selection to not contain the *

    api.setSelectionRange({
      start: state2.selection.end - 1 - state1.selectedText.length,
      end: state2.selection.end - 1
    });
  },
  keyCommand: "italic"
};

/***/ }),

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(87);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var MarkdownUtil_1 = __webpack_require__(227);

exports.strikeThroughCommand = {
  name: "strikethrough",
  buttonProps: {
    "aria-label": "Add strikethrough text"
  },
  execute: function execute(state0, api) {
    // Adjust the selection to encompass the whole word if the caret is inside one
    var newSelectionRange = MarkdownUtil_1.selectWord({
      text: state0.text,
      selection: state0.selection
    });
    var state1 = api.setSelectionRange(newSelectionRange); // Replaces the current selection with the strikethrough mark up

    var state2 = api.replaceSelection("~~" + state1.selectedText + "~~"); // Adjust the selection to not contain the ~~

    api.setSelectionRange({
      start: state2.selection.end - 2 - state1.selectedText.length,
      end: state2.selection.end - 2
    });
  },
  keyCommand: "strikeThrough"
};

/***/ }),

/***/ 361:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(87);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __webpack_require__(0);

var MarkdownUtil_1 = __webpack_require__(227);

function setHeader(state0, api, prefix) {
  // Adjust the selection to encompass the whole word if the caret is inside one
  var newSelectionRange = MarkdownUtil_1.selectWord({
    text: state0.text,
    selection: state0.selection
  });
  var state1 = api.setSelectionRange(newSelectionRange); // Add the prefix to the selection

  var state2 = api.replaceSelection("" + prefix + state1.selectedText); // Adjust the selection to not contain the prefix

  api.setSelectionRange({
    start: state2.selection.end - state1.selectedText.length,
    end: state2.selection.end
  });
}

exports.headerCommand = {
  name: "header",
  buttonProps: {
    "aria-label": "Add header"
  },
  children: [{
    name: "header-1",
    icon: function icon() {
      return React.createElement("p", {
        className: "header-1"
      }, "Header 1");
    },
    execute: function execute(state, api) {
      return setHeader(state, api, "# ");
    }
  }, {
    name: "header-2",
    icon: function icon() {
      return React.createElement("p", {
        className: "header-2"
      }, "Header 2");
    },
    execute: function execute(state, api) {
      return setHeader(state, api, "## ");
    }
  }, {
    name: "header-3",
    icon: function icon() {
      return React.createElement("p", {
        className: "header-3"
      }, "Header 3");
    },
    execute: function execute(state, api) {
      return setHeader(state, api, "### ");
    }
  }, {
    name: "header-4",
    icon: function icon() {
      return React.createElement("p", {
        className: "header-4"
      }, "Header 4");
    },
    execute: function execute(state, api) {
      return setHeader(state, api, "#### ");
    }
  }]
};

/***/ }),

/***/ 362:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(87);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var MarkdownUtil_1 = __webpack_require__(227);

exports.linkCommand = {
  name: "link",
  buttonProps: {
    "aria-label": "Add a link"
  },
  execute: function execute(state0, api) {
    // Adjust the selection to encompass the whole word if the caret is inside one
    var newSelectionRange = MarkdownUtil_1.selectWord({
      text: state0.text,
      selection: state0.selection
    });
    var state1 = api.setSelectionRange(newSelectionRange); // Replaces the current selection with the bold mark up

    var state2 = api.replaceSelection("[" + state1.selectedText + "](url)"); // Adjust the selection to not contain the **

    api.setSelectionRange({
      start: state2.selection.end - 6 - state1.selectedText.length,
      end: state2.selection.end - 6
    });
  },
  keyCommand: "bold"
};

/***/ }),

/***/ 363:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(87);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var MarkdownUtil_1 = __webpack_require__(227);

exports.quoteCommand = {
  name: "quote",
  buttonProps: {
    "aria-label": "Insert a quote"
  },
  execute: function execute(state0, api) {
    // Adjust the selection to encompass the whole word if the caret is inside one
    var newSelectionRange = MarkdownUtil_1.selectWord({
      text: state0.text,
      selection: state0.selection
    });
    var state1 = api.setSelectionRange(newSelectionRange);
    var breaksBeforeCount = MarkdownUtil_1.getBreaksNeededForEmptyLineBefore(state1.text, state1.selection.start);
    var breaksBefore = Array(breaksBeforeCount + 1).join("\n");
    var breaksAfterCount = MarkdownUtil_1.getBreaksNeededForEmptyLineAfter(state1.text, state1.selection.end);
    var breaksAfter = Array(breaksAfterCount + 1).join("\n"); // Replaces the current selection with the quote mark up

    api.replaceSelection(breaksBefore + "> " + state1.selectedText + breaksAfter);
    var selectionStart = state1.selection.start + breaksBeforeCount + 2;
    var selectionEnd = selectionStart + state1.selectedText.length;
    api.setSelectionRange({
      start: selectionStart,
      end: selectionEnd
    });
  },
  keyCommand: "quote"
};

/***/ }),

/***/ 364:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(20);

__webpack_require__(87);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var MarkdownUtil_1 = __webpack_require__(227);

exports.codeCommand = {
  name: "code",
  buttonProps: {
    "aria-label": "Insert code"
  },
  execute: function execute(state0, api) {
    // Adjust the selection to encompass the whole word if the caret is inside one
    var newSelectionRange = MarkdownUtil_1.selectWord({
      text: state0.text,
      selection: state0.selection
    });
    var state1 = api.setSelectionRange(newSelectionRange); // when there's no breaking line

    if (state1.selectedText.indexOf("\n") === -1) {
      api.replaceSelection("`" + state1.selectedText + "`"); // Adjust the selection to not contain the **

      var selectionStart_1 = state1.selection.start + 1;
      var selectionEnd_1 = selectionStart_1 + state1.selectedText.length;
      api.setSelectionRange({
        start: selectionStart_1,
        end: selectionEnd_1
      });
      return;
    }

    var breaksBeforeCount = MarkdownUtil_1.getBreaksNeededForEmptyLineBefore(state1.text, state1.selection.start);
    var breaksBefore = Array(breaksBeforeCount + 1).join("\n");
    var breaksAfterCount = MarkdownUtil_1.getBreaksNeededForEmptyLineAfter(state1.text, state1.selection.end);
    var breaksAfter = Array(breaksAfterCount + 1).join("\n");
    api.replaceSelection(breaksBefore + "```\n" + state1.selectedText + "\n```" + breaksAfter);
    var selectionStart = state1.selection.start + breaksBeforeCount + 4;
    var selectionEnd = selectionStart + state1.selectedText.length;
    api.setSelectionRange({
      start: selectionStart,
      end: selectionEnd
    });
  },
  keyCommand: "code"
};

/***/ }),

/***/ 365:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(87);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var MarkdownUtil_1 = __webpack_require__(227);

exports.imageCommand = {
  name: "image",
  buttonProps: {
    "aria-label": "Add image"
  },
  execute: function execute(state0, api) {
    // Select everything
    var newSelectionRange = MarkdownUtil_1.selectWord({
      text: state0.text,
      selection: state0.selection
    });
    var state1 = api.setSelectionRange(newSelectionRange); // Replaces the current selection with the image

    var imageTemplate = state1.selectedText || "https://example.com/your-image.png";
    api.replaceSelection("![](" + imageTemplate + ")"); // Adjust the selection to not contain the **

    api.setSelectionRange({
      start: 4 + state1.selection.start,
      end: 4 + state1.selection.start + imageTemplate.length
    });
  },
  keyCommand: "image"
};

/***/ }),

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(20);

__webpack_require__(29);

__webpack_require__(47);

__webpack_require__(87);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var MarkdownUtil_1 = __webpack_require__(227);
/**
 * Inserts insertionString before each line
 */


function insertBeforeEachLine(selectedText, insertBefore) {
  var lines = selectedText.split(/\n/);
  var insertionLength = 0;
  var modifiedText = lines.map(function (item, index) {
    if (typeof insertBefore === "string") {
      insertionLength += insertBefore.length;
      return insertBefore + item;
    } else if (typeof insertBefore === "function") {
      var insertionResult = insertBefore(item, index);
      insertionLength += insertionResult.length;
      return insertBefore(item, index) + item;
    }

    throw Error("insertion is expected to be either a string or a function");
  }).join("\n");
  return {
    modifiedText: modifiedText,
    insertionLength: insertionLength
  };
}

exports.insertBeforeEachLine = insertBeforeEachLine;

exports.makeList = function (state0, api, insertBefore) {
  // Adjust the selection to encompass the whole word if the caret is inside one
  var newSelectionRange = MarkdownUtil_1.selectWord({
    text: state0.text,
    selection: state0.selection
  });
  var state1 = api.setSelectionRange(newSelectionRange);
  var breaksBeforeCount = MarkdownUtil_1.getBreaksNeededForEmptyLineBefore(state1.text, state1.selection.start);
  var breaksBefore = Array(breaksBeforeCount + 1).join("\n");
  var breaksAfterCount = MarkdownUtil_1.getBreaksNeededForEmptyLineAfter(state1.text, state1.selection.end);
  var breaksAfter = Array(breaksAfterCount + 1).join("\n");
  var modifiedText = insertBeforeEachLine(state1.selectedText, insertBefore);
  api.replaceSelection("" + breaksBefore + modifiedText.modifiedText + breaksAfter); // Specifically when the text has only one line, we can exclude the "- ", for example, from the selection

  var oneLinerOffset = state1.selectedText.indexOf("\n") === -1 ? modifiedText.insertionLength : 0;
  var selectionStart = state1.selection.start + breaksBeforeCount + oneLinerOffset;
  var selectionEnd = selectionStart + modifiedText.modifiedText.length - oneLinerOffset; // Adjust the selection to not contain the **

  api.setSelectionRange({
    start: selectionStart,
    end: selectionEnd
  });
};

exports.unorderedListCommand = {
  name: "unordered-list",
  buttonProps: {
    "aria-label": "Add unordered list"
  },
  execute: function execute(state0, api) {
    exports.makeList(state0, api, "- ");
  },
  keyCommand: "code"
};
exports.orderedListCommand = {
  name: "ordered-list",
  buttonProps: {
    "aria-label": "Add ordered list"
  },
  execute: function execute(state0, api) {
    exports.makeList(state0, api, function (item, index) {
      return index + 1 + ". ";
    });
  },
  keyCommand: "code"
};
exports.checkedListCommand = {
  name: "checked-list",
  buttonProps: {
    "aria-label": "Add checked list"
  },
  execute: function execute(state0, api) {
    exports.makeList(state0, api, function (item, index) {
      return "- [ ] ";
    });
  },
  keyCommand: "code"
};

/***/ }),

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(87);

__webpack_require__(44);

__webpack_require__(152);

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __webpack_require__(0);

var ClassNames_1 = __webpack_require__(235);

var MdePreview =
/** @class */
function (_super) {
  __extends(MdePreview, _super);

  function MdePreview(props) {
    var _this = _super.call(this, props) || this;

    _this.state = {
      loading: true
    };
    return _this;
  }

  MdePreview.prototype.componentDidMount = function () {
    var _this = this;

    var _a = this.props,
        markdown = _a.markdown,
        generateMarkdownPreview = _a.generateMarkdownPreview;
    generateMarkdownPreview(markdown).then(function (preview) {
      _this.setState({
        preview: preview,
        loading: false
      });
    });
  };

  MdePreview.prototype.render = function () {
    var _this = this;

    var _a = this.props,
        className = _a.className,
        minHeight = _a.minHeight,
        loadingPreview = _a.loadingPreview;
    var _b = this.state,
        preview = _b.preview,
        loading = _b.loading;
    var finalHtml = loading ? loadingPreview : preview;
    var content;

    if (typeof finalHtml === "string") {
      content = React.createElement("div", {
        className: "mde-preview-content",
        dangerouslySetInnerHTML: {
          __html: finalHtml || "<p>&nbsp;</p>"
        },
        ref: function ref(p) {
          return _this.previewRef = p;
        }
      });
    } else {
      content = React.createElement("div", {
        className: "mde-preview-content"
      }, finalHtml);
    }

    return React.createElement("div", {
      className: ClassNames_1.classNames("mde-preview", {
        className: className,
        loading: loading
      }),
      style: {
        minHeight: minHeight + 10
      }
    }, content);
  };

  return MdePreview;
}(React.Component);

exports.MdePreview = MdePreview;

/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(87);

__webpack_require__(22);

__webpack_require__(44);

__webpack_require__(152);

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __webpack_require__(0);

var TextArea =
/** @class */
function (_super) {
  __extends(TextArea, _super);

  function TextArea() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.handleOnChange = function (event) {
      var onChange = _this.props.onChange;
      onChange(event.target.value);
    };

    return _this;
  }

  TextArea.prototype.render = function () {
    var _a = this.props,
        className = _a.className,
        readOnly = _a.readOnly,
        textAreaProps = _a.textAreaProps,
        height = _a.height,
        editorRef = _a.editorRef,
        value = _a.value;
    return React.createElement("textarea", __assign({
      className: "mde-text " + (className || ""),
      style: {
        height: height
      },
      ref: editorRef,
      onChange: this.handleOnChange,
      readOnly: readOnly,
      value: value
    }, textAreaProps));
  };

  return TextArea;
}(React.Component);

exports.TextArea = TextArea;

/***/ }),

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(45);

__webpack_require__(29);

__webpack_require__(87);

__webpack_require__(44);

__webpack_require__(152);

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __webpack_require__(0);

var MdeToolbarButtonGroup_1 = __webpack_require__(261);

var MdeToolbarDropdown_1 = __webpack_require__(262);

var MdeToolbarButton_1 = __webpack_require__(244);

var ClassNames_1 = __webpack_require__(235);

var MdeToolbar =
/** @class */
function (_super) {
  __extends(MdeToolbar, _super);

  function MdeToolbar() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.handleTabChange = function (tab) {
      var onTabChange = _this.props.onTabChange;
      onTabChange(tab);
    };

    return _this;
  }

  MdeToolbar.prototype.render = function () {
    var _this = this;

    var l18n = this.props.l18n;
    var _a = this.props,
        getIcon = _a.getIcon,
        children = _a.children,
        commands = _a.commands,
        _onCommand = _a.onCommand,
        readOnly = _a.readOnly;

    if ((!commands || commands.length === 0) && !children) {
      return null;
    }

    return React.createElement("div", {
      className: "mde-header"
    }, React.createElement("div", {
      className: "mde-tabs"
    }, React.createElement("button", {
      type: "button",
      className: ClassNames_1.classNames({
        "selected": this.props.tab === "write"
      }),
      onClick: function onClick() {
        return _this.handleTabChange("write");
      }
    }, l18n.write), React.createElement("button", {
      type: "button",
      className: ClassNames_1.classNames({
        "selected": this.props.tab === "preview"
      }),
      onClick: function onClick() {
        return _this.handleTabChange("preview");
      }
    }, l18n.preview)), commands.map(function (commandGroup, i) {
      return React.createElement(MdeToolbarButtonGroup_1.MdeToolbarButtonGroup, {
        key: i,
        hidden: _this.props.tab === "preview"
      }, commandGroup.commands.map(function (c, j) {
        if (c.children) {
          return React.createElement(MdeToolbarDropdown_1.MdeToolbarDropdown, {
            key: j,
            buttonProps: c.buttonProps,
            getIcon: getIcon,
            buttonContent: c.icon ? c.icon(getIcon) : getIcon(c.name),
            commands: c.children,
            onCommand: function onCommand(cmd) {
              return _onCommand(cmd);
            },
            readOnly: readOnly
          });
        }

        return React.createElement(MdeToolbarButton_1.MdeToolbarButton, {
          key: j,
          name: c.name,
          buttonContent: c.icon ? c.icon(getIcon) : getIcon(c.name),
          buttonProps: c.buttonProps,
          onClick: function onClick() {
            return _onCommand(c);
          },
          readOnly: readOnly,
          buttonComponentClass: c.buttonComponentClass
        });
      }));
    }));
  };

  return MdeToolbar;
}(React.Component);

exports.MdeToolbar = MdeToolbar;

/***/ }),

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(87);

__webpack_require__(22);

__webpack_require__(44);

__webpack_require__(152);

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __webpack_require__(0);

var commands_1 = __webpack_require__(259);

var _1 = __webpack_require__(260);

var CommandUtils_1 = __webpack_require__(371);

var react_mde_en_1 = __webpack_require__(372);

var commandOrchestrator_1 = __webpack_require__(373);

var icons_1 = __webpack_require__(264);

var ClassNames_1 = __webpack_require__(235);

var ReactMde =
/** @class */
function (_super) {
  __extends(ReactMde, _super);

  function ReactMde(props) {
    var _this = _super.call(this, props) || this; // resizeYStart will be null when it is not resizing


    _this.gripDrag = null;

    _this.handleTextChange = function (value) {
      var onChange = _this.props.onChange;
      onChange(value);
    };

    _this.handleGripMouseDown = function (event) {
      _this.gripDrag = {
        originalHeight: _this.state.editorHeight,
        originalDragY: event.clientY
      };
    };

    _this.handleGripMouseUp = function () {
      _this.gripDrag = null;
    };

    _this.handleGripMouseMove = function (event) {
      if (_this.gripDrag !== null) {
        var newHeight = _this.gripDrag.originalHeight + event.clientY - _this.gripDrag.originalDragY;

        if (newHeight >= _this.props.minEditorHeight && newHeight <= _this.props.maxEditorHeight) {
          _this.setState(__assign({}, _this.state, {
            editorHeight: _this.gripDrag.originalHeight + (event.clientY - _this.gripDrag.originalDragY)
          }));
        }
      }
    };

    _this.handleTabChange = function (newTab) {
      var onTabChange = _this.props.onTabChange;
      onTabChange(newTab);
    };

    _this.setTextAreaRef = function (element) {
      _this.textAreaRef = element;
      _this.commandOrchestrator = new commandOrchestrator_1.TextAreaCommandOrchestrator(_this.textAreaRef);
    };

    _this.handleCommand = function (command) {
      _this.commandOrchestrator.executeCommand(command);
    };

    _this.state = {
      editorHeight: props.minEditorHeight
    };
    _this.keyCommandMap = {};
    var commands = _this.props.commands;
    _this.keyCommandMap = CommandUtils_1.extractCommandMap(commands);
    return _this;
  }

  ReactMde.prototype.componentDidMount = function () {
    document.addEventListener("mousemove", this.handleGripMouseMove);
    document.addEventListener("mouseup", this.handleGripMouseUp);
  };

  ReactMde.prototype.render = function () {
    var _this = this;

    var _a = this.props,
        getIcon = _a.getIcon,
        commands = _a.commands,
        className = _a.className,
        loadingPreview = _a.loadingPreview,
        emptyPreviewHtml = _a.emptyPreviewHtml,
        readOnly = _a.readOnly,
        value = _a.value,
        l18n = _a.l18n,
        minPreviewHeight = _a.minPreviewHeight,
        textAreaProps = _a.textAreaProps,
        selectedTab = _a.selectedTab,
        generateMarkdownPreview = _a.generateMarkdownPreview;
    return React.createElement("div", {
      className: ClassNames_1.classNames("react-mde", "react-mde-tabbed-layout", className)
    }, React.createElement(_1.MdeToolbar, {
      getIcon: getIcon,
      commands: commands,
      onCommand: this.handleCommand,
      onTabChange: this.handleTabChange,
      tab: selectedTab,
      readOnly: readOnly,
      l18n: l18n
    }), selectedTab === "write" ? React.createElement(React.Fragment, null, React.createElement(_1.TextArea, {
      editorRef: this.setTextAreaRef,
      onChange: this.handleTextChange,
      readOnly: readOnly,
      textAreaProps: textAreaProps,
      height: this.state.editorHeight,
      value: value
    }), React.createElement("div", {
      className: "grip",
      onMouseDown: this.handleGripMouseDown
    }, React.createElement("svg", {
      "aria-hidden": "true",
      "data-prefix": "far",
      "data-icon": "ellipsis-h",
      role: "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512",
      className: "icon"
    }, React.createElement("path", {
      fill: "currentColor",
      d: "M304 256c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48 48zm120-48c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zm-336 0c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48z",
      className: ""
    })))) : React.createElement(_1.MdePreview, {
      previewRef: function previewRef(c) {
        return _this.previewRef = c;
      },
      loadingPreview: loadingPreview || emptyPreviewHtml,
      minHeight: minPreviewHeight,
      generateMarkdownPreview: generateMarkdownPreview,
      markdown: value
    }));
  };

  ReactMde.defaultProps = {
    commands: commands_1.getDefaultCommands(),
    getIcon: function getIcon(name) {
      return React.createElement(icons_1.SvgIcon, {
        icon: name
      });
    },
    emptyPreviewHtml: "<p>&nbsp;</p>",
    readOnly: false,
    l18n: react_mde_en_1.enL18n,
    minEditorHeight: 200,
    maxEditorHeight: 500,
    minPreviewHeight: 200,
    selectedTab: "write"
  };
  return ReactMde;
}(React.Component);

exports.ReactMde = ReactMde;

/***/ }),

/***/ 371:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(87);

Object.defineProperty(exports, "__esModule", {
  value: true
}); // Extracts a map that associate "key commands" (strings) with react-mde Commands.
// This is important because, when pressing tab, for example, Draft.js issues
// a "tab" command. We need to associate the key bindings with react-mde commands.

function extractCommandMap(groups) {
  var result = {};

  if (!groups || !groups.length) {
    return result;
  }

  for (var _i = 0, groups_1 = groups; _i < groups_1.length; _i++) {
    var group = groups_1[_i];

    if (group.commands && group.commands.length) {
      for (var _a = 0, _b = group.commands; _a < _b.length; _a++) {
        var command = _b[_a];

        if (command.keyCommand) {
          result[command.keyCommand] = command;
        }
      }
    }
  }

  return result;
}

exports.extractCommandMap = extractCommandMap;

/***/ }),

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(87);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.enL18n = {
  write: 'Write',
  preview: 'Preview'
};

/***/ }),

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(87);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var InsertTextAtPosition_1 = __webpack_require__(374);

var TextAreaTextApi =
/** @class */
function () {
  function TextAreaTextApi(textArea) {
    this.textArea = textArea;
  }

  TextAreaTextApi.prototype.replaceSelection = function (text) {
    InsertTextAtPosition_1.insertText(this.textArea, text);
    return getStateFromTextArea(this.textArea);
  };

  TextAreaTextApi.prototype.setSelectionRange = function (selection) {
    this.textArea.focus();
    this.textArea.selectionStart = selection.start;
    this.textArea.selectionEnd = selection.end;
    return getStateFromTextArea(this.textArea);
  };

  return TextAreaTextApi;
}();

exports.TextAreaTextApi = TextAreaTextApi;

function getStateFromTextArea(textArea) {
  return {
    selection: {
      start: textArea.selectionStart,
      end: textArea.selectionEnd
    },
    text: textArea.value,
    selectedText: textArea.value.slice(textArea.selectionStart, textArea.selectionEnd)
  };
}

exports.getStateFromTextArea = getStateFromTextArea;

var TextAreaCommandOrchestrator =
/** @class */
function () {
  function TextAreaCommandOrchestrator(textArea) {
    this.textArea = textArea;
    this.textApi = new TextAreaTextApi(textArea);
  }

  TextAreaCommandOrchestrator.prototype.executeCommand = function (command) {
    command.execute(getStateFromTextArea(this.textArea), this.textApi);
  };

  return TextAreaCommandOrchestrator;
}();

exports.TextAreaCommandOrchestrator = TextAreaCommandOrchestrator;

/***/ }),

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * The MIT License
   Copyright (c) 2018 Dmitriy Kubyshkin
   Copied from https://github.com/grassator/insert-text-at-cursor
 */

__webpack_require__(87);

Object.defineProperty(exports, "__esModule", {
  value: true
});

function canManipulateViaTextNodes(input) {
  if (input.nodeName !== "TEXTAREA") {
    return false;
  }

  var browserSupportsTextareaTextNodes;

  if (typeof browserSupportsTextareaTextNodes === "undefined") {
    var textarea = document.createElement("textarea");
    textarea.value = "1";
    browserSupportsTextareaTextNodes = !!textarea.firstChild;
  }

  return browserSupportsTextareaTextNodes;
}

function insertText(input, text) {
  // Most of the used APIs only work with the field selected
  input.focus(); // IE 8-10

  if (document.selection) {
    var ieRange = document.selection.createRange();
    ieRange.text = text; // Move cursor after the inserted text

    ieRange.collapse(false
    /* to the end */
    );
    ieRange.select();
    return;
  } // Webkit + Edge


  var isSuccess = document.execCommand("insertText", false, text);

  if (!isSuccess) {
    var start = input.selectionStart;
    var end = input.selectionEnd; // Firefox (non-standard method)

    if (typeof input.setRangeText === "function") {
      input.setRangeText(text);
    } else {
      if (canManipulateViaTextNodes(input)) {
        var textNode = document.createTextNode(text);
        var node = input.firstChild; // If textarea is empty, just insert the text

        if (!node) {
          input.appendChild(textNode);
        } else {
          // Otherwise we need to find a nodes for start and end
          var offset = 0;
          var startNode = null;
          var endNode = null; // To make a change we just need a Range, not a Selection

          var range = document.createRange();

          while (node && (startNode === null || endNode === null)) {
            var nodeLength = node.nodeValue.length; // if start of the selection falls into current node

            if (start >= offset && start <= offset + nodeLength) {
              range.setStart(startNode = node, start - offset);
            } // if end of the selection falls into current node


            if (end >= offset && end <= offset + nodeLength) {
              range.setEnd(endNode = node, end - offset);
            }

            offset += nodeLength;
            node = node.nextSibling;
          } // If there is some text selected, remove it as we should replace it


          if (start !== end) {
            range.deleteContents();
          } // Finally insert a new node. The browser will automatically
          // split start and end nodes into two if necessary


          range.insertNode(textNode);
        }
      } else {
        // For the text input the only way is to replace the whole value :(
        var value = input.value;
        input.value = value.slice(0, start) + text + value.slice(end);
      }
    } // Correct the cursor position to be at the end of the insertion


    input.setSelectionRange(start + text.length, start + text.length); // Notify any possible listeners of the change

    var e = document.createEvent("UIEvent");
    e.initEvent("input", true, false);
    input.dispatchEvent(e);
  }
}

exports.insertText = insertText;

/***/ }),

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(87);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __webpack_require__(0);

var checkedListIcon = React.createElement("svg", {
  className: "svg-icon",
  "aria-hidden": "true",
  "data-prefix": "fas",
  "data-icon": "tasks",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512",
  "data-fa-i2svg": ""
}, React.createElement("path", {
  fill: "currentColor",
  d: "M208 132h288c8.8 0 16-7.2 16-16V76c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16zm0 160h288c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16zm0 160h288c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16zM64 368c-26.5 0-48.6 21.5-48.6 48s22.1 48 48.6 48 48-21.5 48-48-21.5-48-48-48zm92.5-299l-72.2 72.2-15.6 15.6c-4.7 4.7-12.9 4.7-17.6 0L3.5 109.4c-4.7-4.7-4.7-12.3 0-17l15.7-15.7c4.7-4.7 12.3-4.7 17 0l22.7 22.1 63.7-63.3c4.7-4.7 12.3-4.7 17 0l17 16.5c4.6 4.7 4.6 12.3-.1 17zm0 159.6l-72.2 72.2-15.7 15.7c-4.7 4.7-12.9 4.7-17.6 0L3.5 269c-4.7-4.7-4.7-12.3 0-17l15.7-15.7c4.7-4.7 12.3-4.7 17 0l22.7 22.1 63.7-63.7c4.7-4.7 12.3-4.7 17 0l17 17c4.6 4.6 4.6 12.2-.1 16.9z"
}));
var orderedListIcon = React.createElement("svg", {
  className: "svg-icon",
  "aria-hidden": "true",
  "data-prefix": "fas",
  "data-icon": "list-ol",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512",
  "data-fa-i2svg": ""
}, React.createElement("path", {
  fill: "currentColor",
  d: "M3.263 139.527c0-7.477 3.917-11.572 11.573-11.572h15.131V88.078c0-5.163.534-10.503.534-10.503h-.356s-1.779 2.67-2.848 3.738c-4.451 4.273-10.504 4.451-15.666-1.068l-5.518-6.231c-5.342-5.341-4.984-11.216.534-16.379l21.72-19.938C32.815 33.602 36.732 32 42.785 32H54.89c7.656 0 11.749 3.916 11.749 11.572v84.384h15.488c7.655 0 11.572 4.094 11.572 11.572v8.901c0 7.477-3.917 11.572-11.572 11.572H14.836c-7.656 0-11.573-4.095-11.573-11.572v-8.902zM2.211 304.591c0-47.278 50.955-56.383 50.955-69.165 0-7.18-5.954-8.755-9.28-8.755-3.153 0-6.479 1.051-9.455 3.852-5.079 4.903-10.507 7.004-16.111 2.451l-8.579-6.829c-5.779-4.553-7.18-9.805-2.803-15.409C13.592 201.981 26.025 192 47.387 192c19.437 0 44.476 10.506 44.476 39.573 0 38.347-46.753 46.402-48.679 56.909h39.049c7.529 0 11.557 4.027 11.557 11.382v8.755c0 7.354-4.028 11.382-11.557 11.382h-67.94c-7.005 0-12.083-4.028-12.083-11.382v-4.028zM5.654 454.61l5.603-9.28c3.853-6.654 9.105-7.004 15.584-3.152 4.903 2.101 9.63 3.152 14.359 3.152 10.155 0 14.358-3.502 14.358-8.23 0-6.654-5.604-9.106-15.934-9.106h-4.728c-5.954 0-9.28-2.101-12.258-7.88l-1.05-1.926c-2.451-4.728-1.226-9.806 2.801-14.884l5.604-7.004c6.829-8.405 12.257-13.483 12.257-13.483v-.35s-4.203 1.051-12.608 1.051H16.685c-7.53 0-11.383-4.028-11.383-11.382v-8.755c0-7.53 3.853-11.382 11.383-11.382h58.484c7.529 0 11.382 4.027 11.382 11.382v3.327c0 5.778-1.401 9.806-5.079 14.183l-17.509 20.137c19.611 5.078 28.716 20.487 28.716 34.845 0 21.363-14.358 44.126-48.503 44.126-16.636 0-28.192-4.728-35.896-9.455-5.779-4.202-6.304-9.805-2.626-15.934zM144 132h352c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h352c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h352c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
}));
var unorderedListIcon = React.createElement("svg", {
  className: "svg-icon",
  "aria-hidden": "true",
  "data-prefix": "fas",
  "data-icon": "list-ul",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512",
  "data-fa-i2svg": ""
}, React.createElement("path", {
  fill: "currentColor",
  d: "M96 96c0 26.51-21.49 48-48 48S0 122.51 0 96s21.49-48 48-48 48 21.49 48 48zM48 208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm0 160c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm96-236h352c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h352c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h352c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
}));
var imageIcon = React.createElement("svg", {
  className: "svg-icon",
  "aria-hidden": "true",
  "data-prefix": "fas",
  "data-icon": "image",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512",
  "data-fa-i2svg": ""
}, React.createElement("path", {
  fill: "currentColor",
  d: "M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z"
}));
var codeIcon = React.createElement("svg", {
  className: "svg-icon",
  "aria-hidden": "true",
  "data-prefix": "fas",
  "data-icon": "code",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 640 512",
  "data-fa-i2svg": ""
}, React.createElement("path", {
  fill: "currentColor",
  d: "M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"
}));
var quoteIcon = React.createElement("svg", {
  className: "svg-icon",
  "aria-hidden": "true",
  "data-prefix": "fas",
  "data-icon": "quote-right",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512",
  "data-fa-i2svg": ""
}, React.createElement("path", {
  fill: "currentColor",
  d: "M512 80v128c0 137.018-63.772 236.324-193.827 271.172-15.225 4.08-30.173-7.437-30.173-23.199v-33.895c0-10.057 6.228-19.133 15.687-22.55C369.684 375.688 408 330.054 408 256h-72c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h128c26.51 0 48 21.49 48 48zM176 32H48C21.49 32 0 53.49 0 80v128c0 26.51 21.49 48 48 48h72c0 74.054-38.316 119.688-104.313 143.528C6.228 402.945 0 412.021 0 422.078v33.895c0 15.762 14.948 27.279 30.173 23.199C160.228 444.324 224 345.018 224 208V80c0-26.51-21.49-48-48-48z"
}));
var linkIcon = React.createElement("svg", {
  className: "svg-icon",
  "aria-hidden": "true",
  "data-prefix": "fas",
  "data-icon": "link",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512",
  "data-fa-i2svg": ""
}, React.createElement("path", {
  fill: "currentColor",
  d: "M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"
}));
var strikeThroughIcon = React.createElement("svg", {
  className: "svg-icon",
  "aria-hidden": "true",
  "data-prefix": "fas",
  "data-icon": "strikethrough",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512",
  "data-fa-i2svg": ""
}, React.createElement("path", {
  fill: "currentColor",
  d: "M496 288H16c-8.837 0-16-7.163-16-16v-32c0-8.837 7.163-16 16-16h480c8.837 0 16 7.163 16 16v32c0 8.837-7.163 16-16 16zm-214.666 16c27.258 12.937 46.524 28.683 46.524 56.243 0 33.108-28.977 53.676-75.621 53.676-32.325 0-76.874-12.08-76.874-44.271V368c0-8.837-7.164-16-16-16H113.75c-8.836 0-16 7.163-16 16v19.204c0 66.845 77.717 101.82 154.487 101.82 88.578 0 162.013-45.438 162.013-134.424 0-19.815-3.618-36.417-10.143-50.6H281.334zm-30.952-96c-32.422-13.505-56.836-28.946-56.836-59.683 0-33.92 30.901-47.406 64.962-47.406 42.647 0 64.962 16.593 64.962 32.985V136c0 8.837 7.164 16 16 16h45.613c8.836 0 16-7.163 16-16v-30.318c0-52.438-71.725-79.875-142.575-79.875-85.203 0-150.726 40.972-150.726 125.646 0 22.71 4.665 41.176 12.777 56.547h129.823z"
}));
var italicIcon = React.createElement("svg", {
  className: "svg-icon",
  "aria-hidden": "true",
  "data-prefix": "fas",
  "data-icon": "italic",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 320 512",
  "data-fa-i2svg": ""
}, React.createElement("path", {
  fill: "currentColor",
  d: "M204.758 416h-33.849l62.092-320h40.725a16 16 0 0 0 15.704-12.937l6.242-32C297.599 41.184 290.034 32 279.968 32H120.235a16 16 0 0 0-15.704 12.937l-6.242 32C96.362 86.816 103.927 96 113.993 96h33.846l-62.09 320H46.278a16 16 0 0 0-15.704 12.935l-6.245 32C22.402 470.815 29.967 480 40.034 480h158.479a16 16 0 0 0 15.704-12.935l6.245-32c1.927-9.88-5.638-19.065-15.704-19.065z"
}));
var headerIcon = React.createElement("svg", {
  className: "svg-icon",
  "aria-hidden": "true",
  "data-prefix": "fas",
  "data-icon": "heading",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512",
  "data-fa-i2svg": ""
}, React.createElement("path", {
  fill: "currentColor",
  d: "M496 80V48c0-8.837-7.163-16-16-16H320c-8.837 0-16 7.163-16 16v32c0 8.837 7.163 16 16 16h37.621v128H154.379V96H192c8.837 0 16-7.163 16-16V48c0-8.837-7.163-16-16-16H32c-8.837 0-16 7.163-16 16v32c0 8.837 7.163 16 16 16h37.275v320H32c-8.837 0-16 7.163-16 16v32c0 8.837 7.163 16 16 16h160c8.837 0 16-7.163 16-16v-32c0-8.837-7.163-16-16-16h-37.621V288H357.62v128H320c-8.837 0-16 7.163-16 16v32c0 8.837 7.163 16 16 16h160c8.837 0 16-7.163 16-16v-32c0-8.837-7.163-16-16-16h-37.275V96H480c8.837 0 16-7.163 16-16z"
}));
var boldIcon = React.createElement("svg", {
  className: "svg-icon",
  "aria-hidden": "true",
  "data-prefix": "fas",
  "data-icon": "bold",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 384 512",
  "data-fa-i2svg": ""
}, React.createElement("path", {
  fill: "currentColor",
  d: "M304.793 243.891c33.639-18.537 53.657-54.16 53.657-95.693 0-48.236-26.25-87.626-68.626-104.179C265.138 34.01 240.849 32 209.661 32H24c-8.837 0-16 7.163-16 16v33.049c0 8.837 7.163 16 16 16h33.113v318.53H24c-8.837 0-16 7.163-16 16V464c0 8.837 7.163 16 16 16h195.69c24.203 0 44.834-1.289 66.866-7.584C337.52 457.193 376 410.647 376 350.014c0-52.168-26.573-91.684-71.207-106.123zM142.217 100.809h67.444c16.294 0 27.536 2.019 37.525 6.717 15.828 8.479 24.906 26.502 24.906 49.446 0 35.029-20.32 56.79-53.029 56.79h-76.846V100.809zm112.642 305.475c-10.14 4.056-22.677 4.907-31.409 4.907h-81.233V281.943h84.367c39.645 0 63.057 25.38 63.057 63.057.001 28.425-13.66 52.483-34.782 61.284z"
}));

exports.SvgIcon = function (_a) {
  var icon = _a.icon;

  switch (icon) {
    case "header":
      return headerIcon;

    case "bold":
      return boldIcon;

    case "italic":
      return italicIcon;

    case "strikethrough":
      return strikeThroughIcon;

    case "link":
      return linkIcon;

    case "quote":
      return quoteIcon;

    case "code":
      return codeIcon;

    case "image":
      return imageIcon;

    case "unordered-list":
      return unorderedListIcon;

    case "ordered-list":
      return orderedListIcon;

    case "checked-list":
      return checkedListIcon;

    default:
      return null;
  }
};

/***/ })

}]);
//# sourceMappingURL=11-f3c89635968b50f1fdad.js.map