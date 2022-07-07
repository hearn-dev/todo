/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./notebook.svg */ "./src/notebook.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./home.svg */ "./src/home.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./today.svg */ "./src/today.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./week.svg */ "./src/week.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --margin: 2vw;\n    --prm-green: #85dccfe1;\n    --accent-green: #41a3b3;\n    --dark-orange: #e27d60;\n    --light-orange: #e8a87c;\n    --clr-warning: #FF0000;\n}\n\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n    font-family: inherit;\n    margin: 0;\n    padding: 0;\n    max-width: 100%;\n}\n\nbody {\n    margin: 0;\n    font-family: monospace;\n    background-color: var(--prm-green);\n    display: grid;\n    grid:\n    \"header header\" auto\n    \"menu   active\" auto /\n    1fr 4fr;\n\n}\n\n\n.header {\n    grid-area: header;\n    background-color: var(--dark-orange);\n    display: flex;\n    height: 15vh;\n}\n\n.title-icon {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    margin-left: var(--margin);\n}\n\n.icon {\n    height: 8vh;\n    width: 6vw;\n    background:no-repeat center url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: contain;\n    filter: invert(100%);\n    -webkit-filter: invert(100%);\n}\n\n.title {\n    color: white;\n    font-size: 8vh;\n    margin-left: 1vw;\n}\n\n.menu {\n    grid-area: menu;\n    background-color: var(--accent-green);\n    color: white;\n    height: 100vh;\n    margin-top: 0;\n}\n\n.menu-title {\n    padding-top: 10px;\n    margin-left: 20px;\n}\n\n.active-list {\n    font-size: 1rem;\n    font-weight: 900;\n    text-decoration: underline;\n    \n}\n\n.button:hover {\n    transform: scale(1.1);\n    cursor: pointer;\n}\n\n.project-item:hover {\n    cursor: pointer;\n    transform: none;\n    opacity: 0.7\n}\n\n.menu-options {\n    padding-top: var(--margin);\n    display: grid;\n    gap: 25px;\n    list-style: none;\n    justify-content: center;\n\n}\n\n.option {\n    width: 15vw;\n    height: 5vh;\n    background-color: var(--light-orange);\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    font-size: 1.3rem;\n}\n\n.home-icon {\n    background: no-repeat center url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n.today-icon {\n    background: no-repeat center url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\n.week-icon {\n    background: no-repeat center url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n}\n\n.projects-title {\n    margin: 20px;\n    margin-bottom: 15px;\n    font-size: 1.4rem;\n}\n\n.projects {\n    display: grid;\n    gap: 10px;\n    color: white;\n}\n\n.project-item {\n    margin-left: 35px;\n}\n\n.task-list {\n    font-size: 1.2rem;\n    line-height: 1.7;\n    list-style: circle;\n    padding-left: 1.1em;\n}\n\nform {\n    display: flex;\n    align-items: flex-end;\n    margin-top: 10px;\n}\n\n\n.btn {\n    cursor: pointer;\n    background: 0;\n    border: 0;\n    padding: 0;\n    color: inherit;\n    font-size: 1rem;\n}\n\n.btn.create {\n    font-size: 1.5rem;\n    font-weight: 900;\n    margin-right: .25rem;\n    transition: opacity 250ms ease-in;\n    margin: 0 0 3px 20px;\n    font-size: 1rem;\n    \n}\n\n.btn.task {\n    margin-left: 0;\n}\n\n.btn.create:hover {\n    opacity: 0.7;\n}\n\n.btn.delete {\n    font-weight: 700;\n    letter-spacing: 1px;\n    opacity: .7;\n    font-size: 1rem;\n    transition: color 200ms;\n}\n\n.btn.delete:hover {\n    color: var(--clr-warning)\n}\n\n.new {\n    background: transparent;\n    border: 0;\n    color: inherit;\n    border-bottom: 1px solid currentColor;\n    font-size: inherit;\n    outline: none;\n    transition: border-bottom 250ms ease-in;\n    order: 2;\n}\n\n\n.new::placeholder,\n.date::placeholder {\n    color: inherit;\n    opacity: .5;\n}\n\n.new:focus,\n.date:focus {\n    border-bottom-width: 3px;\n}\n\n.new:focus::placeholder,\n.date:focus::placeholder {\n    opacity: .2\n}\n\n.new.list,\n.new.task {\n    margin: 0 10px 0px 10px;\n    width: 15vw;\n    margin-top: 8px;\n    padding: .35em;\n}\n\n.todo-list {\n    --spacer: 2rem;\n\n    grid-area: active;\n    margin: 20px 20px 0 50px;\n}\n\n.todo-header {\n    padding: var(--spacer);\n    background-color: var(--light-orange);\n    color: white;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.list-title {\n    margin: 0 1rem 0 0;\n}\n\n.task-count {\n    margin: 0;\n    font-size: .85rem;\n}\n\n.todo-body {\n    padding: var(--spacer);\n    background-color: white;\n    color: var(--accent-green);\n    position: relative;\n}\n\n.new-task-creator .create {\n    color: var(--dark-orange)\n}\n\n[type=\"checkbox\"] {\n    opacity: 0;\n    position: absolute;\n}\n\n.task > * {\n    cursor: pointer;\n}\n\n.task label {\n    display: inline-flex;\n    align-items: center;\n    position: relative;\n    gap: 15px;\n}\n\n.task {\n    position: relative;\n    margin-bottom: 1.25em;\n}\n\n.task::after {\n    content:\"\";\n    position: absolute;\n    right: 0;\n    left: 0;\n    bottom: -.5em;\n    height: 1px;\n    background: currentColor;\n    opacity: .1;\n}\n\n.custom-checkbox {\n    --size: .75em;\n    display: inline-block;\n    width: var(--size);\n    height: var(--size);\n    margin-right: var(--size);\n    border: 2px solid currentColor;\n    border-radius: 50%;\n    transform: scale(1);\n    transition: transform 200ms ease-in-out;\n}\n\n.task:hover .custom-checkbox,\n[type=\"checkbox\"]:focus + label .custom-checkbox{\n    transform: scale(1.2);\n    color: var(--prm-green)\n}\n\n[type=\"checkbox\"]:checked + label .custom-checkbox {\n    background: var(--accent-green);\n    border-color: var(--accent-green);\n    box-shadow: inset 0 0 0px 1px white;\n}\n\n[type=\"checkbox\"]:checked + label,\n[type=\"checkbox\"]:checked + .due {\n    opacity: 0.5;\n\n}\n\n.task label::after {\n    content: \"\";\n    position: absolute;\n    left: 2.5em;\n    right: 0;\n    top: calc(50% - 1px);\n    height: 2px;\n    background: currentColor;\n    transform: scaleX(0);\n    transform-origin: right;\n    transition: transform 150ms ease-in-out;\n}\n\n[type=\"checkbox\"]:checked + label::after {\n    transform: scaleX(1);\n    transform-origin: left;\n}\n\n\n.delete-stuff {\n    display: flex;\n    justify-content: space-evenly;\n    position: absolute;\n    width: 100%;\n    left: 0;\n    bottom: -35px;\n    color: var(--accent-green);\n}\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --margin: 2vw;\n    --prm-green: #85dccfe1;\n    --accent-green: #41a3b3;\n    --dark-orange: #e27d60;\n    --light-orange: #e8a87c;\n    --clr-warning: #FF0000;\n}\n\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n    font-family: inherit;\n    margin: 0;\n    padding: 0;\n    max-width: 100%;\n}\n\nbody {\n    margin: 0;\n    font-family: monospace;\n    background-color: var(--prm-green);\n    display: grid;\n    grid:\n    \"header header\" auto\n    \"menu   active\" auto /\n    1fr 4fr;\n\n}\n\n\n.header {\n    grid-area: header;\n    background-color: var(--dark-orange);\n    display: flex;\n    height: 15vh;\n}\n\n.title-icon {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    margin-left: var(--margin);\n}\n\n.icon {\n    height: 8vh;\n    width: 6vw;\n    background:no-repeat center url('./notebook.svg');\n    background-size: contain;\n    filter: invert(100%);\n    -webkit-filter: invert(100%);\n}\n\n.title {\n    color: white;\n    font-size: 8vh;\n    margin-left: 1vw;\n}\n\n.menu {\n    grid-area: menu;\n    background-color: var(--accent-green);\n    color: white;\n    height: 100vh;\n    margin-top: 0;\n}\n\n.menu-title {\n    padding-top: 10px;\n    margin-left: 20px;\n}\n\n.active-list {\n    font-size: 1rem;\n    font-weight: 900;\n    text-decoration: underline;\n    \n}\n\n.button:hover {\n    transform: scale(1.1);\n    cursor: pointer;\n}\n\n.project-item:hover {\n    cursor: pointer;\n    transform: none;\n    opacity: 0.7\n}\n\n.menu-options {\n    padding-top: var(--margin);\n    display: grid;\n    gap: 25px;\n    list-style: none;\n    justify-content: center;\n\n}\n\n.option {\n    width: 15vw;\n    height: 5vh;\n    background-color: var(--light-orange);\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    font-size: 1.3rem;\n}\n\n.home-icon {\n    background: no-repeat center url('./home.svg');\n}\n\n.today-icon {\n    background: no-repeat center url('./today.svg');\n}\n\n.week-icon {\n    background: no-repeat center url('./week.svg');\n}\n\n.projects-title {\n    margin: 20px;\n    margin-bottom: 15px;\n    font-size: 1.4rem;\n}\n\n.projects {\n    display: grid;\n    gap: 10px;\n    color: white;\n}\n\n.project-item {\n    margin-left: 35px;\n}\n\n.task-list {\n    font-size: 1.2rem;\n    line-height: 1.7;\n    list-style: circle;\n    padding-left: 1.1em;\n}\n\nform {\n    display: flex;\n    align-items: flex-end;\n    margin-top: 10px;\n}\n\n\n.btn {\n    cursor: pointer;\n    background: 0;\n    border: 0;\n    padding: 0;\n    color: inherit;\n    font-size: 1rem;\n}\n\n.btn.create {\n    font-size: 1.5rem;\n    font-weight: 900;\n    margin-right: .25rem;\n    transition: opacity 250ms ease-in;\n    margin: 0 0 3px 20px;\n    font-size: 1rem;\n    \n}\n\n.btn.task {\n    margin-left: 0;\n}\n\n.btn.create:hover {\n    opacity: 0.7;\n}\n\n.btn.delete {\n    font-weight: 700;\n    letter-spacing: 1px;\n    opacity: .7;\n    font-size: 1rem;\n    transition: color 200ms;\n}\n\n.btn.delete:hover {\n    color: var(--clr-warning)\n}\n\n.new {\n    background: transparent;\n    border: 0;\n    color: inherit;\n    border-bottom: 1px solid currentColor;\n    font-size: inherit;\n    outline: none;\n    transition: border-bottom 250ms ease-in;\n    order: 2;\n}\n\n\n.new::placeholder,\n.date::placeholder {\n    color: inherit;\n    opacity: .5;\n}\n\n.new:focus,\n.date:focus {\n    border-bottom-width: 3px;\n}\n\n.new:focus::placeholder,\n.date:focus::placeholder {\n    opacity: .2\n}\n\n.new.list,\n.new.task {\n    margin: 0 10px 0px 10px;\n    width: 15vw;\n    margin-top: 8px;\n    padding: .35em;\n}\n\n.todo-list {\n    --spacer: 2rem;\n\n    grid-area: active;\n    margin: 20px 20px 0 50px;\n}\n\n.todo-header {\n    padding: var(--spacer);\n    background-color: var(--light-orange);\n    color: white;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.list-title {\n    margin: 0 1rem 0 0;\n}\n\n.task-count {\n    margin: 0;\n    font-size: .85rem;\n}\n\n.todo-body {\n    padding: var(--spacer);\n    background-color: white;\n    color: var(--accent-green);\n    position: relative;\n}\n\n.new-task-creator .create {\n    color: var(--dark-orange)\n}\n\n[type=\"checkbox\"] {\n    opacity: 0;\n    position: absolute;\n}\n\n.task > * {\n    cursor: pointer;\n}\n\n.task label {\n    display: inline-flex;\n    align-items: center;\n    position: relative;\n    gap: 15px;\n}\n\n.task {\n    position: relative;\n    margin-bottom: 1.25em;\n}\n\n.task::after {\n    content:\"\";\n    position: absolute;\n    right: 0;\n    left: 0;\n    bottom: -.5em;\n    height: 1px;\n    background: currentColor;\n    opacity: .1;\n}\n\n.custom-checkbox {\n    --size: .75em;\n    display: inline-block;\n    width: var(--size);\n    height: var(--size);\n    margin-right: var(--size);\n    border: 2px solid currentColor;\n    border-radius: 50%;\n    transform: scale(1);\n    transition: transform 200ms ease-in-out;\n}\n\n.task:hover .custom-checkbox,\n[type=\"checkbox\"]:focus + label .custom-checkbox{\n    transform: scale(1.2);\n    color: var(--prm-green)\n}\n\n[type=\"checkbox\"]:checked + label .custom-checkbox {\n    background: var(--accent-green);\n    border-color: var(--accent-green);\n    box-shadow: inset 0 0 0px 1px white;\n}\n\n[type=\"checkbox\"]:checked + label,\n[type=\"checkbox\"]:checked + .due {\n    opacity: 0.5;\n\n}\n\n.task label::after {\n    content: \"\";\n    position: absolute;\n    left: 2.5em;\n    right: 0;\n    top: calc(50% - 1px);\n    height: 2px;\n    background: currentColor;\n    transform: scaleX(0);\n    transform-origin: right;\n    transition: transform 150ms ease-in-out;\n}\n\n[type=\"checkbox\"]:checked + label::after {\n    transform: scaleX(1);\n    transform-origin: left;\n}\n\n\n.delete-stuff {\n    display: flex;\n    justify-content: space-evenly;\n    position: absolute;\n    width: 100%;\n    left: 0;\n    bottom: -35px;\n    color: var(--accent-green);\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProject": () => (/* binding */ createProject),
/* harmony export */   "findProjectById": () => (/* binding */ findProjectById),
/* harmony export */   "projects": () => (/* binding */ projects),
/* harmony export */   "selectedProjectId": () => (/* binding */ selectedProjectId)
/* harmony export */ });
// Initialize projects folder
let projects = {
    list: []};

let selectedProjectId = {
    id:''
};

// Initialize new projects with unique id
function createProject(name) {
    return { id: Date.now().toString(), name: name, tasks: []}
}

// Find project in array based on ID
function findProjectById(projectId) {
    let list = projects.list;
    const project = list.find(project => project.id === projectId);
    return project;

}



/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assignTaskCount": () => (/* binding */ assignTaskCount),
/* harmony export */   "createTask": () => (/* binding */ createTask)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");



const taskCount = document.querySelector('[data-task-counter]');


// Assign task count
function assignTaskCount(project) {

    let incomplete = project.tasks.filter(task => !task.complete).length;

    if (_projects__WEBPACK_IMPORTED_MODULE_0__.selectedProjectId === 'home') {
        incomplete = _projects__WEBPACK_IMPORTED_MODULE_0__.projects.list.forEach(project => {
            project.tasks.filter(task.filter(task => !task.complete).length);
        })
    }
    // Count tasks in project
    if (incomplete === 1) {
        taskCount.innerText = `${incomplete} task remaining`
    } else {
        taskCount.innerText = `${incomplete} tasks remaining`
    }
}


// Exactly as the title says
function createTask(taskName, due) {
    return { id: Date.now().toString(), name: taskName, due: due, complete: false, project: _projects__WEBPACK_IMPORTED_MODULE_0__.selectedProjectId.id};
}



/***/ }),

/***/ "./src/window.js":
/*!***********************!*\
  !*** ./src/window.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assignProjectList": () => (/* binding */ assignProjectList),
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "renderProjects": () => (/* binding */ renderProjects),
/* harmony export */   "showAllTasks": () => (/* binding */ showAllTasks),
/* harmony export */   "taskWindow": () => (/* binding */ taskWindow)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");



const projectsContainer = document.querySelector('[data-projects]');
const todoSection = document.querySelector('[data-todo]');
const tasksContainer = document.querySelector('[data-tasks-container]');
const taskProjectTitle = document.querySelector('[data-project-title]');
const newTaskDateInput = document.querySelector('[data-new-task-date-input]');
const taskTemplate = document.getElementById('task-template')


// Render screen
function render() {

    // Clear and set project list
    clearElement(projectsContainer);
    // Clear existing tasks
    clearElement(tasksContainer);
    renderProjects();

    if (_projects__WEBPACK_IMPORTED_MODULE_0__.selectedProjectId.id == null || _projects__WEBPACK_IMPORTED_MODULE_0__.selectedProjectId.id == '') {
        todoSection.style.display = 'none';
    }else if (_projects__WEBPACK_IMPORTED_MODULE_0__.selectedProjectId.id == 'home') {
        todoSection.style.display = '';
        taskProjectTitle.innerText = "Home";
        showAllTasks();
    } else {
        todoSection.style.display = '';
        let project = (0,_projects__WEBPACK_IMPORTED_MODULE_0__.findProjectById)(_projects__WEBPACK_IMPORTED_MODULE_0__.selectedProjectId.id);
        renderTasks(project.tasks);

    }
}

// Refresh project name and task counter
function taskWindow(project){
    assignProjectList(project);
    (0,_tasks__WEBPACK_IMPORTED_MODULE_1__.assignTaskCount)(project);
}

// Assign project name and task count to task list
function assignProjectList(project) {

    // Clear tasks
    clearElement(tasksContainer);

    // Assign project title to list
    taskProjectTitle.innerText = project.name;
}

function renderProjects() {
    // Add each project to projectList
    _projects__WEBPACK_IMPORTED_MODULE_0__.projects.list.forEach(project => {
        const projectElement = document.createElement('li');
        projectElement.dataset.projectId = project.id;
        projectElement.classList.add('project-item');
        projectElement.innerText = project.name;
        if (projectElement.dataset.projectId === _projects__WEBPACK_IMPORTED_MODULE_0__.selectedProjectId.id) {
            projectElement.classList.add('active-list')
        };
        projectsContainer.appendChild(projectElement);
    })
}

function renderTasks(selectedList) {

    // Render each task in list
    selectedList.forEach(task => {
        const taskElement = document.importNode(taskTemplate.content, true)
        const checkbox = taskElement.querySelector('input');
        const due = taskElement.querySelector('.due');
        checkbox.id = task.id;
        checkbox.classList.add(task.project);
        checkbox.checked = task.complete;
        const label = taskElement.querySelector('label');
        label.htmlFor = task.id;
        label.append(task.name);
        due.textContent = task.due;

        tasksContainer.appendChild(taskElement);
    })

}

// Clear container of all children
function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function showAllTasks() {
    _projects__WEBPACK_IMPORTED_MODULE_0__.projects.list.forEach(project => {
        renderTasks(project.tasks)
    })
}

/***/ }),

/***/ "./src/home.svg":
/*!**********************!*\
  !*** ./src/home.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f873234c93d19c837bd8.svg";

/***/ }),

/***/ "./src/notebook.svg":
/*!**************************!*\
  !*** ./src/notebook.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "829131dbe68a15408157.svg";

/***/ }),

/***/ "./src/today.svg":
/*!***********************!*\
  !*** ./src/today.svg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "026599f9eca46bc8f47e.svg";

/***/ }),

/***/ "./src/week.svg":
/*!**********************!*\
  !*** ./src/week.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9b3a8c5393486225ddc6.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _window__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./window */ "./src/window.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects */ "./src/projects.js");







// Assign DOM variables
const projectsContainer = document.querySelector('[data-projects]');
const newProjectForm = document.querySelector('[data-new-project-form');
const newProjectInput = document.querySelector('[data-new-project-input]');
const tasksContainer = document.querySelector('[data-tasks-container]');
const newTaskForm = document.querySelector('[data-new-task-form]');
const newTaskInput = document.querySelector('[data-new-task-input]');
const homeButton = document.querySelector('[data-home-button]');
const clearCompleteTasksButtons = document.querySelector('[data-clear-complete-tasks-button]');
const deleteListButton = document.querySelector('[data-delete-list-button]')


// Show all tasks when Home Button clicked
homeButton.addEventListener('click', e => {
    _projects__WEBPACK_IMPORTED_MODULE_3__.selectedProjectId.id = "home";
    
    (0,_window__WEBPACK_IMPORTED_MODULE_1__.render)();
})

// Select project when clicked
projectsContainer.addEventListener('click', e => {

        // Target clicked items
        if (e.target.tagName.toLowerCase() === 'li') {

            // Determine id of clicked project
            _projects__WEBPACK_IMPORTED_MODULE_3__.selectedProjectId.id = e.target.dataset.projectId;

            // Find and assign project
            const project = (0,_projects__WEBPACK_IMPORTED_MODULE_3__.findProjectById)(_projects__WEBPACK_IMPORTED_MODULE_3__.selectedProjectId.id)
 
            // Assign name of project and task list count
            ;(0,_window__WEBPACK_IMPORTED_MODULE_1__.taskWindow)(project);
            (0,_window__WEBPACK_IMPORTED_MODULE_1__.render)();
        }
    }
)

// update Task count when task crossed off
tasksContainer.addEventListener('click', e => {

    if (e.target.tagName.toLowerCase() === 'input') {
        const project = (0,_projects__WEBPACK_IMPORTED_MODULE_3__.findProjectById)(e.target.className);
        const selectedTask = project.tasks.find(task => task.id === e.target.id)
        selectedTask.complete = e.target.checked;
        (0,_tasks__WEBPACK_IMPORTED_MODULE_2__.assignTaskCount)(project);
    }

  
})

// Clear completed tasks when requested
clearCompleteTasksButtons.addEventListener('click', e => {
    const selectedList = (0,_projects__WEBPACK_IMPORTED_MODULE_3__.findProjectById)(_projects__WEBPACK_IMPORTED_MODULE_3__.selectedProjectId.id);
    selectedList.tasks = selectedList.tasks.filter(task => !task.complete);
    (0,_window__WEBPACK_IMPORTED_MODULE_1__.render)();
})

// Delete Project when requested
deleteListButton.addEventListener('click', e => {
    _projects__WEBPACK_IMPORTED_MODULE_3__.projects.list = _projects__WEBPACK_IMPORTED_MODULE_3__.projects.list.filter(project => project.id !== _projects__WEBPACK_IMPORTED_MODULE_3__.selectedProjectId.id)
    _projects__WEBPACK_IMPORTED_MODULE_3__.selectedProjectId.id = null;
    (0,_window__WEBPACK_IMPORTED_MODULE_1__.render)();
})

// Create new project when form submitted
newProjectForm.addEventListener('submit', e => {
    e.preventDefault();

    // Assign form content to name
    const projectName = newProjectInput.value;

    // Stop if form empty
    if (projectName == null || projectName === '') return;

    // Push project to list and clear form
    const project = (0,_projects__WEBPACK_IMPORTED_MODULE_3__.createProject)(projectName)
    newProjectInput.value = null;
    _projects__WEBPACK_IMPORTED_MODULE_3__.projects.list.push(project);

    // Render task window
    _projects__WEBPACK_IMPORTED_MODULE_3__.selectedProjectId.id = project.id
    ;(0,_window__WEBPACK_IMPORTED_MODULE_1__.taskWindow)(project);

    (0,_window__WEBPACK_IMPORTED_MODULE_1__.render)();

});

// Create new task when form submitted
newTaskForm.addEventListener('submit', e => {
    e.preventDefault();

    // Assign task name and due date
    const taskName = newTaskInput.value;
    // const taskDue = newTaskDateInput.value;


    // Stop if form empty
    if (taskName == null || taskName === '') return;

    // Create task if form filled
    const task = (0,_tasks__WEBPACK_IMPORTED_MODULE_2__.createTask)(taskName)

    // Clear form
    newTaskInput.value = null;
    // newTaskDateInput.value = null 

    // Cache task
    const project = (0,_projects__WEBPACK_IMPORTED_MODULE_3__.findProjectById)(_projects__WEBPACK_IMPORTED_MODULE_3__.selectedProjectId.id);
    project.tasks.push(task);

    // Render task window
    (0,_tasks__WEBPACK_IMPORTED_MODULE_2__.assignTaskCount)(project);
    (0,_window__WEBPACK_IMPORTED_MODULE_1__.render)();

});

(0,_window__WEBPACK_IMPORTED_MODULE_1__.render)()


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBOztBQUVBO0FBQ0Esb0JBQW9CLHdEQUFhO0FBQ2pDO0FBQ0EsSUFBSSx5REFBa0I7O0FBRXRCO0FBQ0EsSUFBSSwyREFBb0I7QUFDeEIsSUFBSSxvREFBVTs7QUFFZCxJQUFJLCtDQUFNOztBQUVWLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixrREFBVTs7QUFFM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLDBEQUFlLENBQUMsMkRBQW9CO0FBQ3hEOztBQUVBO0FBQ0EsSUFBSSx1REFBZTtBQUNuQixJQUFJLCtDQUFNOztBQUVWLENBQUM7O0FBRUQsK0NBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy90YXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3dpbmRvdy5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vbm90ZWJvb2suc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9ob21lLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vdG9kYXkuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi93ZWVrLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1tYXJnaW46IDJ2dztcXG4gICAgLS1wcm0tZ3JlZW46ICM4NWRjY2ZlMTtcXG4gICAgLS1hY2NlbnQtZ3JlZW46ICM0MWEzYjM7XFxuICAgIC0tZGFyay1vcmFuZ2U6ICNlMjdkNjA7XFxuICAgIC0tbGlnaHQtb3JhbmdlOiAjZThhODdjO1xcbiAgICAtLWNsci13YXJuaW5nOiAjRkYwMDAwO1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJtLWdyZWVuKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZDpcXG4gICAgXFxcImhlYWRlciBoZWFkZXJcXFwiIGF1dG9cXG4gICAgXFxcIm1lbnUgICBhY3RpdmVcXFwiIGF1dG8gL1xcbiAgICAxZnIgNGZyO1xcblxcbn1cXG5cXG5cXG4uaGVhZGVyIHtcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstb3JhbmdlKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAxNXZoO1xcbn1cXG5cXG4udGl0bGUtaWNvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWxlZnQ6IHZhcigtLW1hcmdpbik7XFxufVxcblxcbi5pY29uIHtcXG4gICAgaGVpZ2h0OiA4dmg7XFxuICAgIHdpZHRoOiA2dnc7XFxuICAgIGJhY2tncm91bmQ6bm8tcmVwZWF0IGNlbnRlciB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpO1xcbiAgICAtd2Via2l0LWZpbHRlcjogaW52ZXJ0KDEwMCUpO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogOHZoO1xcbiAgICBtYXJnaW4tbGVmdDogMXZ3O1xcbn1cXG5cXG4ubWVudSB7XFxuICAgIGdyaWQtYXJlYTogbWVudTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWdyZWVuKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbn1cXG5cXG4ubWVudS10aXRsZSB7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXG59XFxuXFxuLmFjdGl2ZS1saXN0IHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgXFxufVxcblxcbi5idXR0b246aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3QtaXRlbTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNmb3JtOiBub25lO1xcbiAgICBvcGFjaXR5OiAwLjdcXG59XFxuXFxuLm1lbnUtb3B0aW9ucyB7XFxuICAgIHBhZGRpbmctdG9wOiB2YXIoLS1tYXJnaW4pO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDI1cHg7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbn1cXG5cXG4ub3B0aW9uIHtcXG4gICAgd2lkdGg6IDE1dnc7XFxuICAgIGhlaWdodDogNXZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1vcmFuZ2UpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4uaG9tZS1pY29uIHtcXG4gICAgYmFja2dyb3VuZDogbm8tcmVwZWF0IGNlbnRlciB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG5cXG4udG9kYXktaWNvbiB7XFxuICAgIGJhY2tncm91bmQ6IG5vLXJlcGVhdCBjZW50ZXIgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG59XFxuXFxuLndlZWstaWNvbiB7XFxuICAgIGJhY2tncm91bmQ6IG5vLXJlcGVhdCBjZW50ZXIgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG59XFxuXFxuLnByb2plY3RzLXRpdGxlIHtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG59XFxuXFxuLnByb2plY3RzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0ge1xcbiAgICBtYXJnaW4tbGVmdDogMzVweDtcXG59XFxuXFxuLnRhc2stbGlzdCB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBsaW5lLWhlaWdodDogMS43O1xcbiAgICBsaXN0LXN0eWxlOiBjaXJjbGU7XFxuICAgIHBhZGRpbmctbGVmdDogMS4xZW07XFxufVxcblxcbmZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcblxcbi5idG4ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IDA7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmJ0bi5jcmVhdGUge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAuMjVyZW07XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMjUwbXMgZWFzZS1pbjtcXG4gICAgbWFyZ2luOiAwIDAgM3B4IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgXFxufVxcblxcbi5idG4udGFzayB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcbn1cXG5cXG4uYnRuLmNyZWF0ZTpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDAuNztcXG59XFxuXFxuLmJ0bi5kZWxldGUge1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgICBvcGFjaXR5OiAuNztcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAyMDBtcztcXG59XFxuXFxuLmJ0bi5kZWxldGU6aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tY2xyLXdhcm5pbmcpXFxufVxcblxcbi5uZXcge1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tIDI1MG1zIGVhc2UtaW47XFxuICAgIG9yZGVyOiAyO1xcbn1cXG5cXG5cXG4ubmV3OjpwbGFjZWhvbGRlcixcXG4uZGF0ZTo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgb3BhY2l0eTogLjU7XFxufVxcblxcbi5uZXc6Zm9jdXMsXFxuLmRhdGU6Zm9jdXMge1xcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAzcHg7XFxufVxcblxcbi5uZXc6Zm9jdXM6OnBsYWNlaG9sZGVyLFxcbi5kYXRlOmZvY3VzOjpwbGFjZWhvbGRlciB7XFxuICAgIG9wYWNpdHk6IC4yXFxufVxcblxcbi5uZXcubGlzdCxcXG4ubmV3LnRhc2sge1xcbiAgICBtYXJnaW46IDAgMTBweCAwcHggMTBweDtcXG4gICAgd2lkdGg6IDE1dnc7XFxuICAgIG1hcmdpbi10b3A6IDhweDtcXG4gICAgcGFkZGluZzogLjM1ZW07XFxufVxcblxcbi50b2RvLWxpc3Qge1xcbiAgICAtLXNwYWNlcjogMnJlbTtcXG5cXG4gICAgZ3JpZC1hcmVhOiBhY3RpdmU7XFxuICAgIG1hcmdpbjogMjBweCAyMHB4IDAgNTBweDtcXG59XFxuXFxuLnRvZG8taGVhZGVyIHtcXG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2VyKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtb3JhbmdlKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5saXN0LXRpdGxlIHtcXG4gICAgbWFyZ2luOiAwIDFyZW0gMCAwO1xcbn1cXG5cXG4udGFzay1jb3VudCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1zaXplOiAuODVyZW07XFxufVxcblxcbi50b2RvLWJvZHkge1xcbiAgICBwYWRkaW5nOiB2YXIoLS1zcGFjZXIpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6IHZhcigtLWFjY2VudC1ncmVlbik7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLm5ldy10YXNrLWNyZWF0b3IgLmNyZWF0ZSB7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrLW9yYW5nZSlcXG59XFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi50YXNrID4gKiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2sgbGFiZWwge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbi50YXNrIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxLjI1ZW07XFxufVxcblxcbi50YXNrOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6XFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJvdHRvbTogLS41ZW07XFxuICAgIGhlaWdodDogMXB4O1xcbiAgICBiYWNrZ3JvdW5kOiBjdXJyZW50Q29sb3I7XFxuICAgIG9wYWNpdHk6IC4xO1xcbn1cXG5cXG4uY3VzdG9tLWNoZWNrYm94IHtcXG4gICAgLS1zaXplOiAuNzVlbTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogdmFyKC0tc2l6ZSk7XFxuICAgIGhlaWdodDogdmFyKC0tc2l6ZSk7XFxuICAgIG1hcmdpbi1yaWdodDogdmFyKC0tc2l6ZSk7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi50YXNrOmhvdmVyIC5jdXN0b20tY2hlY2tib3gsXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl06Zm9jdXMgKyBsYWJlbCAuY3VzdG9tLWNoZWNrYm94e1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICAgIGNvbG9yOiB2YXIoLS1wcm0tZ3JlZW4pXFxufVxcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyBsYWJlbCAuY3VzdG9tLWNoZWNrYm94IHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWdyZWVuKTtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY2NlbnQtZ3JlZW4pO1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMHB4IDFweCB3aGl0ZTtcXG59XFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVsLFxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyAuZHVlIHtcXG4gICAgb3BhY2l0eTogMC41O1xcblxcbn1cXG5cXG4udGFzayBsYWJlbDo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAyLjVlbTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogY2FsYyg1MCUgLSAxcHgpO1xcbiAgICBoZWlnaHQ6IDJweDtcXG4gICAgYmFja2dyb3VuZDogY3VycmVudENvbG9yO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxNTBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVsOjphZnRlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xcbn1cXG5cXG5cXG4uZGVsZXRlLXN0dWZmIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJvdHRvbTogLTM1cHg7XFxuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtZ3JlZW4pO1xcbn1cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixzQkFBc0I7QUFDMUI7O0FBRUE7OztJQUdJLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsU0FBUztJQUNULFVBQVU7SUFDVixlQUFlO0FBQ25COztBQUVBO0lBQ0ksU0FBUztJQUNULHNCQUFzQjtJQUN0QixrQ0FBa0M7SUFDbEMsYUFBYTtJQUNiOzs7V0FHTzs7QUFFWDs7O0FBR0E7SUFDSSxpQkFBaUI7SUFDakIsb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsMEJBQTBC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QUNSLE9BQU87SUFDUCxhQUFhO0lBQ2IsV0FBVztJQUNYLHdCQUF3QjtJQUN4QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHVDQUF1QztBQUMzQzs7QUFFQTs7SUFFSSxxQkFBcUI7SUFDckI7QUFDSjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixpQ0FBaUM7SUFDakMsbUNBQW1DO0FBQ3ZDOztBQUVBOztJQUVJLFlBQVk7O0FBRWhCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsUUFBUTtJQUNSLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLG9CQUFvQjtJQUNwQix1QkFBdUI7SUFDdkIsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLHNCQUFzQjtBQUMxQjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsT0FBTztJQUNQLGFBQWE7SUFDYiwwQkFBMEI7QUFDOUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLW1hcmdpbjogMnZ3O1xcbiAgICAtLXBybS1ncmVlbjogIzg1ZGNjZmUxO1xcbiAgICAtLWFjY2VudC1ncmVlbjogIzQxYTNiMztcXG4gICAgLS1kYXJrLW9yYW5nZTogI2UyN2Q2MDtcXG4gICAgLS1saWdodC1vcmFuZ2U6ICNlOGE4N2M7XFxuICAgIC0tY2xyLXdhcm5pbmc6ICNGRjAwMDA7XFxufVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcm0tZ3JlZW4pO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkOlxcbiAgICBcXFwiaGVhZGVyIGhlYWRlclxcXCIgYXV0b1xcbiAgICBcXFwibWVudSAgIGFjdGl2ZVxcXCIgYXV0byAvXFxuICAgIDFmciA0ZnI7XFxuXFxufVxcblxcblxcbi5oZWFkZXIge1xcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1vcmFuZ2UpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDE1dmg7XFxufVxcblxcbi50aXRsZS1pY29uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tbGVmdDogdmFyKC0tbWFyZ2luKTtcXG59XFxuXFxuLmljb24ge1xcbiAgICBoZWlnaHQ6IDh2aDtcXG4gICAgd2lkdGg6IDZ2dztcXG4gICAgYmFja2dyb3VuZDpuby1yZXBlYXQgY2VudGVyIHVybCgnLi9ub3RlYm9vay5zdmcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKTtcXG4gICAgLXdlYmtpdC1maWx0ZXI6IGludmVydCgxMDAlKTtcXG59XFxuXFxuLnRpdGxlIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDh2aDtcXG4gICAgbWFyZ2luLWxlZnQ6IDF2dztcXG59XFxuXFxuLm1lbnUge1xcbiAgICBncmlkLWFyZWE6IG1lbnU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1ncmVlbik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG59XFxuXFxuLm1lbnUtdGl0bGUge1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxufVxcblxcbi5hY3RpdmUtbGlzdCB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIFxcbn1cXG5cXG4uYnV0dG9uOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW06aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zZm9ybTogbm9uZTtcXG4gICAgb3BhY2l0eTogMC43XFxufVxcblxcbi5tZW51LW9wdGlvbnMge1xcbiAgICBwYWRkaW5nLXRvcDogdmFyKC0tbWFyZ2luKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAyNXB4O1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG59XFxuXFxuLm9wdGlvbiB7XFxuICAgIHdpZHRoOiAxNXZ3O1xcbiAgICBoZWlnaHQ6IDV2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtb3JhbmdlKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLmhvbWUtaWNvbiB7XFxuICAgIGJhY2tncm91bmQ6IG5vLXJlcGVhdCBjZW50ZXIgdXJsKCcuL2hvbWUuc3ZnJyk7XFxufVxcblxcbi50b2RheS1pY29uIHtcXG4gICAgYmFja2dyb3VuZDogbm8tcmVwZWF0IGNlbnRlciB1cmwoJy4vdG9kYXkuc3ZnJyk7XFxufVxcblxcbi53ZWVrLWljb24ge1xcbiAgICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQgY2VudGVyIHVybCgnLi93ZWVrLnN2ZycpO1xcbn1cXG5cXG4ucHJvamVjdHMtdGl0bGUge1xcbiAgICBtYXJnaW46IDIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbn1cXG5cXG4ucHJvamVjdHMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnByb2plY3QtaXRlbSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzNXB4O1xcbn1cXG5cXG4udGFzay1saXN0IHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjc7XFxuICAgIGxpc3Qtc3R5bGU6IGNpcmNsZTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxLjFlbTtcXG59XFxuXFxuZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuXFxuLmJ0biB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZDogMDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uYnRuLmNyZWF0ZSB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBtYXJnaW4tcmlnaHQ6IC4yNXJlbTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAyNTBtcyBlYXNlLWluO1xcbiAgICBtYXJnaW46IDAgMCAzcHggMjBweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBcXG59XFxuXFxuLmJ0bi50YXNrIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxufVxcblxcbi5idG4uY3JlYXRlOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMC43O1xcbn1cXG5cXG4uYnRuLmRlbGV0ZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICAgIG9wYWNpdHk6IC43O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHRyYW5zaXRpb246IGNvbG9yIDIwMG1zO1xcbn1cXG5cXG4uYnRuLmRlbGV0ZTpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1jbHItd2FybmluZylcXG59XFxuXFxuLm5ldyB7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgY3VycmVudENvbG9yO1xcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20gMjUwbXMgZWFzZS1pbjtcXG4gICAgb3JkZXI6IDI7XFxufVxcblxcblxcbi5uZXc6OnBsYWNlaG9sZGVyLFxcbi5kYXRlOjpwbGFjZWhvbGRlciB7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICBvcGFjaXR5OiAuNTtcXG59XFxuXFxuLm5ldzpmb2N1cyxcXG4uZGF0ZTpmb2N1cyB7XFxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDNweDtcXG59XFxuXFxuLm5ldzpmb2N1czo6cGxhY2Vob2xkZXIsXFxuLmRhdGU6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcXG4gICAgb3BhY2l0eTogLjJcXG59XFxuXFxuLm5ldy5saXN0LFxcbi5uZXcudGFzayB7XFxuICAgIG1hcmdpbjogMCAxMHB4IDBweCAxMHB4O1xcbiAgICB3aWR0aDogMTV2dztcXG4gICAgbWFyZ2luLXRvcDogOHB4O1xcbiAgICBwYWRkaW5nOiAuMzVlbTtcXG59XFxuXFxuLnRvZG8tbGlzdCB7XFxuICAgIC0tc3BhY2VyOiAycmVtO1xcblxcbiAgICBncmlkLWFyZWE6IGFjdGl2ZTtcXG4gICAgbWFyZ2luOiAyMHB4IDIwcHggMCA1MHB4O1xcbn1cXG5cXG4udG9kby1oZWFkZXIge1xcbiAgICBwYWRkaW5nOiB2YXIoLS1zcGFjZXIpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1vcmFuZ2UpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmxpc3QtdGl0bGUge1xcbiAgICBtYXJnaW46IDAgMXJlbSAwIDA7XFxufVxcblxcbi50YXNrLWNvdW50IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXNpemU6IC44NXJlbTtcXG59XFxuXFxuLnRvZG8tYm9keSB7XFxuICAgIHBhZGRpbmc6IHZhcigtLXNwYWNlcik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LWdyZWVuKTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ubmV3LXRhc2stY3JlYXRvciAuY3JlYXRlIHtcXG4gICAgY29sb3I6IHZhcigtLWRhcmstb3JhbmdlKVxcbn1cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLnRhc2sgPiAqIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzayBsYWJlbCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuLnRhc2sge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbi1ib3R0b206IDEuMjVlbTtcXG59XFxuXFxuLnRhc2s6OmFmdGVyIHtcXG4gICAgY29udGVudDpcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgYm90dG9tOiAtLjVlbTtcXG4gICAgaGVpZ2h0OiAxcHg7XFxuICAgIGJhY2tncm91bmQ6IGN1cnJlbnRDb2xvcjtcXG4gICAgb3BhY2l0eTogLjE7XFxufVxcblxcbi5jdXN0b20tY2hlY2tib3gge1xcbiAgICAtLXNpemU6IC43NWVtO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiB2YXIoLS1zaXplKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1zaXplKTtcXG4gICAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1zaXplKTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgY3VycmVudENvbG9yO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyMDBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnRhc2s6aG92ZXIgLmN1c3RvbS1jaGVja2JveCxcXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpmb2N1cyArIGxhYmVsIC5jdXN0b20tY2hlY2tib3h7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gICAgY29sb3I6IHZhcigtLXBybS1ncmVlbilcXG59XFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVsIC5jdXN0b20tY2hlY2tib3gge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtZ3JlZW4pO1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWFjY2VudC1ncmVlbik7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwcHggMXB4IHdoaXRlO1xcbn1cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgbGFiZWwsXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIC5kdWUge1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuXFxufVxcblxcbi50YXNrIGxhYmVsOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDIuNWVtO1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiBjYWxjKDUwJSAtIDFweCk7XFxuICAgIGhlaWdodDogMnB4O1xcbiAgICBiYWNrZ3JvdW5kOiBjdXJyZW50Q29sb3I7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDE1MG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgbGFiZWw6OmFmdGVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XFxufVxcblxcblxcbi5kZWxldGUtc3R1ZmYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbGVmdDogMDtcXG4gICAgYm90dG9tOiAtMzVweDtcXG4gICAgY29sb3I6IHZhcigtLWFjY2VudC1ncmVlbik7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBJbml0aWFsaXplIHByb2plY3RzIGZvbGRlclxuZXhwb3J0IGxldCBwcm9qZWN0cyA9IHtcbiAgICBsaXN0OiBbXX07XG5cbmV4cG9ydCBsZXQgc2VsZWN0ZWRQcm9qZWN0SWQgPSB7XG4gICAgaWQ6Jydcbn07XG5cbi8vIEluaXRpYWxpemUgbmV3IHByb2plY3RzIHdpdGggdW5pcXVlIGlkXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdChuYW1lKSB7XG4gICAgcmV0dXJuIHsgaWQ6IERhdGUubm93KCkudG9TdHJpbmcoKSwgbmFtZTogbmFtZSwgdGFza3M6IFtdfVxufVxuXG4vLyBGaW5kIHByb2plY3QgaW4gYXJyYXkgYmFzZWQgb24gSURcbmV4cG9ydCBmdW5jdGlvbiBmaW5kUHJvamVjdEJ5SWQocHJvamVjdElkKSB7XG4gICAgbGV0IGxpc3QgPSBwcm9qZWN0cy5saXN0O1xuICAgIGNvbnN0IHByb2plY3QgPSBsaXN0LmZpbmQocHJvamVjdCA9PiBwcm9qZWN0LmlkID09PSBwcm9qZWN0SWQpO1xuICAgIHJldHVybiBwcm9qZWN0O1xuXG59XG5cbiIsImltcG9ydCB7IHNlbGVjdGVkUHJvamVjdElkLCBwcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzXCI7XG5cblxuY29uc3QgdGFza0NvdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdGFzay1jb3VudGVyXScpO1xuXG5cbi8vIEFzc2lnbiB0YXNrIGNvdW50XG5leHBvcnQgZnVuY3Rpb24gYXNzaWduVGFza0NvdW50KHByb2plY3QpIHtcblxuICAgIGxldCBpbmNvbXBsZXRlID0gcHJvamVjdC50YXNrcy5maWx0ZXIodGFzayA9PiAhdGFzay5jb21wbGV0ZSkubGVuZ3RoO1xuXG4gICAgaWYgKHNlbGVjdGVkUHJvamVjdElkID09PSAnaG9tZScpIHtcbiAgICAgICAgaW5jb21wbGV0ZSA9IHByb2plY3RzLmxpc3QuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgIHByb2plY3QudGFza3MuZmlsdGVyKHRhc2suZmlsdGVyKHRhc2sgPT4gIXRhc2suY29tcGxldGUpLmxlbmd0aCk7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIC8vIENvdW50IHRhc2tzIGluIHByb2plY3RcbiAgICBpZiAoaW5jb21wbGV0ZSA9PT0gMSkge1xuICAgICAgICB0YXNrQ291bnQuaW5uZXJUZXh0ID0gYCR7aW5jb21wbGV0ZX0gdGFzayByZW1haW5pbmdgXG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGFza0NvdW50LmlubmVyVGV4dCA9IGAke2luY29tcGxldGV9IHRhc2tzIHJlbWFpbmluZ2BcbiAgICB9XG59XG5cblxuLy8gRXhhY3RseSBhcyB0aGUgdGl0bGUgc2F5c1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhc2sodGFza05hbWUsIGR1ZSkge1xuICAgIHJldHVybiB7IGlkOiBEYXRlLm5vdygpLnRvU3RyaW5nKCksIG5hbWU6IHRhc2tOYW1lLCBkdWU6IGR1ZSwgY29tcGxldGU6IGZhbHNlLCBwcm9qZWN0OiBzZWxlY3RlZFByb2plY3RJZC5pZH07XG59XG5cbiIsImltcG9ydCB7IHByb2plY3RzLCBzZWxlY3RlZFByb2plY3RJZCwgZmluZFByb2plY3RCeUlkIH0gZnJvbSAnLi9wcm9qZWN0cyc7XG5pbXBvcnQgeyBhc3NpZ25UYXNrQ291bnQgfSBmcm9tICcuL3Rhc2tzJ1xuXG5jb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXByb2plY3RzXScpO1xuY29uc3QgdG9kb1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS10b2RvXScpO1xuY29uc3QgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS10YXNrcy1jb250YWluZXJdJyk7XG5jb25zdCB0YXNrUHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcHJvamVjdC10aXRsZV0nKTtcbmNvbnN0IG5ld1Rhc2tEYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1uZXctdGFzay1kYXRlLWlucHV0XScpO1xuY29uc3QgdGFza1RlbXBsYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stdGVtcGxhdGUnKVxuXG5cbi8vIFJlbmRlciBzY3JlZW5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoKSB7XG5cbiAgICAvLyBDbGVhciBhbmQgc2V0IHByb2plY3QgbGlzdFxuICAgIGNsZWFyRWxlbWVudChwcm9qZWN0c0NvbnRhaW5lcik7XG4gICAgLy8gQ2xlYXIgZXhpc3RpbmcgdGFza3NcbiAgICBjbGVhckVsZW1lbnQodGFza3NDb250YWluZXIpO1xuICAgIHJlbmRlclByb2plY3RzKCk7XG5cbiAgICBpZiAoc2VsZWN0ZWRQcm9qZWN0SWQuaWQgPT0gbnVsbCB8fCBzZWxlY3RlZFByb2plY3RJZC5pZCA9PSAnJykge1xuICAgICAgICB0b2RvU2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1lbHNlIGlmIChzZWxlY3RlZFByb2plY3RJZC5pZCA9PSAnaG9tZScpIHtcbiAgICAgICAgdG9kb1NlY3Rpb24uc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgICAgICB0YXNrUHJvamVjdFRpdGxlLmlubmVyVGV4dCA9IFwiSG9tZVwiO1xuICAgICAgICBzaG93QWxsVGFza3MoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0b2RvU2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgICAgIGxldCBwcm9qZWN0ID0gZmluZFByb2plY3RCeUlkKHNlbGVjdGVkUHJvamVjdElkLmlkKTtcbiAgICAgICAgcmVuZGVyVGFza3MocHJvamVjdC50YXNrcyk7XG5cbiAgICB9XG59XG5cbi8vIFJlZnJlc2ggcHJvamVjdCBuYW1lIGFuZCB0YXNrIGNvdW50ZXJcbmV4cG9ydCBmdW5jdGlvbiB0YXNrV2luZG93KHByb2plY3Qpe1xuICAgIGFzc2lnblByb2plY3RMaXN0KHByb2plY3QpO1xuICAgIGFzc2lnblRhc2tDb3VudChwcm9qZWN0KTtcbn1cblxuLy8gQXNzaWduIHByb2plY3QgbmFtZSBhbmQgdGFzayBjb3VudCB0byB0YXNrIGxpc3RcbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ25Qcm9qZWN0TGlzdChwcm9qZWN0KSB7XG5cbiAgICAvLyBDbGVhciB0YXNrc1xuICAgIGNsZWFyRWxlbWVudCh0YXNrc0NvbnRhaW5lcik7XG5cbiAgICAvLyBBc3NpZ24gcHJvamVjdCB0aXRsZSB0byBsaXN0XG4gICAgdGFza1Byb2plY3RUaXRsZS5pbm5lclRleHQgPSBwcm9qZWN0Lm5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJQcm9qZWN0cygpIHtcbiAgICAvLyBBZGQgZWFjaCBwcm9qZWN0IHRvIHByb2plY3RMaXN0XG4gICAgcHJvamVjdHMubGlzdC5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIHByb2plY3RFbGVtZW50LmRhdGFzZXQucHJvamVjdElkID0gcHJvamVjdC5pZDtcbiAgICAgICAgcHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1pdGVtJyk7XG4gICAgICAgIHByb2plY3RFbGVtZW50LmlubmVyVGV4dCA9IHByb2plY3QubmFtZTtcbiAgICAgICAgaWYgKHByb2plY3RFbGVtZW50LmRhdGFzZXQucHJvamVjdElkID09PSBzZWxlY3RlZFByb2plY3RJZC5pZCkge1xuICAgICAgICAgICAgcHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLWxpc3QnKVxuICAgICAgICB9O1xuICAgICAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RWxlbWVudCk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gcmVuZGVyVGFza3Moc2VsZWN0ZWRMaXN0KSB7XG5cbiAgICAvLyBSZW5kZXIgZWFjaCB0YXNrIGluIGxpc3RcbiAgICBzZWxlY3RlZExpc3QuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgY29uc3QgdGFza0VsZW1lbnQgPSBkb2N1bWVudC5pbXBvcnROb2RlKHRhc2tUZW1wbGF0ZS5jb250ZW50LCB0cnVlKVxuICAgICAgICBjb25zdCBjaGVja2JveCA9IHRhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gICAgICAgIGNvbnN0IGR1ZSA9IHRhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kdWUnKTtcbiAgICAgICAgY2hlY2tib3guaWQgPSB0YXNrLmlkO1xuICAgICAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKHRhc2sucHJvamVjdCk7XG4gICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0YXNrLmNvbXBsZXRlO1xuICAgICAgICBjb25zdCBsYWJlbCA9IHRhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsJyk7XG4gICAgICAgIGxhYmVsLmh0bWxGb3IgPSB0YXNrLmlkO1xuICAgICAgICBsYWJlbC5hcHBlbmQodGFzay5uYW1lKTtcbiAgICAgICAgZHVlLnRleHRDb250ZW50ID0gdGFzay5kdWU7XG5cbiAgICAgICAgdGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0VsZW1lbnQpO1xuICAgIH0pXG5cbn1cblxuLy8gQ2xlYXIgY29udGFpbmVyIG9mIGFsbCBjaGlsZHJlblxuZnVuY3Rpb24gY2xlYXJFbGVtZW50KGVsZW1lbnQpIHtcbiAgICB3aGlsZSAoZWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93QWxsVGFza3MoKSB7XG4gICAgcHJvamVjdHMubGlzdC5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICByZW5kZXJUYXNrcyhwcm9qZWN0LnRhc2tzKVxuICAgIH0pXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgcmVuZGVyLCB0YXNrV2luZG93LCBzaG93QWxsVGFza3MgfSBmcm9tICcuL3dpbmRvdyc7XG5pbXBvcnQgeyBhc3NpZ25UYXNrQ291bnQsIGNyZWF0ZVRhc2sgfSBmcm9tICcuL3Rhc2tzJztcbmltcG9ydCB7IHByb2plY3RzLCBzZWxlY3RlZFByb2plY3RJZCwgY3JlYXRlUHJvamVjdCwgZmluZFByb2plY3RCeUlkIH0gZnJvbSAnLi9wcm9qZWN0cyc7XG5pbXBvcnQge2Zvcm1hdCwgcGFyc2VJU099IGZyb20gJ2RhdGUtZm5zJztcblxuXG4vLyBBc3NpZ24gRE9NIHZhcmlhYmxlc1xuY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wcm9qZWN0c10nKTtcbmNvbnN0IG5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtbmV3LXByb2plY3QtZm9ybScpO1xuY29uc3QgbmV3UHJvamVjdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtbmV3LXByb2plY3QtaW5wdXRdJyk7XG5jb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRhc2tzLWNvbnRhaW5lcl0nKTtcbmNvbnN0IG5ld1Rhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtbmV3LXRhc2stZm9ybV0nKTtcbmNvbnN0IG5ld1Rhc2tJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW5ldy10YXNrLWlucHV0XScpO1xuY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWhvbWUtYnV0dG9uXScpO1xuY29uc3QgY2xlYXJDb21wbGV0ZVRhc2tzQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWNsZWFyLWNvbXBsZXRlLXRhc2tzLWJ1dHRvbl0nKTtcbmNvbnN0IGRlbGV0ZUxpc3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1kZWxldGUtbGlzdC1idXR0b25dJylcblxuXG4vLyBTaG93IGFsbCB0YXNrcyB3aGVuIEhvbWUgQnV0dG9uIGNsaWNrZWRcbmhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICBzZWxlY3RlZFByb2plY3RJZC5pZCA9IFwiaG9tZVwiO1xuICAgIFxuICAgIHJlbmRlcigpO1xufSlcblxuLy8gU2VsZWN0IHByb2plY3Qgd2hlbiBjbGlja2VkXG5wcm9qZWN0c0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuXG4gICAgICAgIC8vIFRhcmdldCBjbGlja2VkIGl0ZW1zXG4gICAgICAgIGlmIChlLnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdsaScpIHtcblxuICAgICAgICAgICAgLy8gRGV0ZXJtaW5lIGlkIG9mIGNsaWNrZWQgcHJvamVjdFxuICAgICAgICAgICAgc2VsZWN0ZWRQcm9qZWN0SWQuaWQgPSBlLnRhcmdldC5kYXRhc2V0LnByb2plY3RJZDtcblxuICAgICAgICAgICAgLy8gRmluZCBhbmQgYXNzaWduIHByb2plY3RcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBmaW5kUHJvamVjdEJ5SWQoc2VsZWN0ZWRQcm9qZWN0SWQuaWQpXG4gXG4gICAgICAgICAgICAvLyBBc3NpZ24gbmFtZSBvZiBwcm9qZWN0IGFuZCB0YXNrIGxpc3QgY291bnRcbiAgICAgICAgICAgIHRhc2tXaW5kb3cocHJvamVjdCk7XG4gICAgICAgICAgICByZW5kZXIoKTtcbiAgICAgICAgfVxuICAgIH1cbilcblxuLy8gdXBkYXRlIFRhc2sgY291bnQgd2hlbiB0YXNrIGNyb3NzZWQgb2ZmXG50YXNrc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuXG4gICAgaWYgKGUudGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2lucHV0Jykge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZmluZFByb2plY3RCeUlkKGUudGFyZ2V0LmNsYXNzTmFtZSk7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkVGFzayA9IHByb2plY3QudGFza3MuZmluZCh0YXNrID0+IHRhc2suaWQgPT09IGUudGFyZ2V0LmlkKVxuICAgICAgICBzZWxlY3RlZFRhc2suY29tcGxldGUgPSBlLnRhcmdldC5jaGVja2VkO1xuICAgICAgICBhc3NpZ25UYXNrQ291bnQocHJvamVjdCk7XG4gICAgfVxuXG4gIFxufSlcblxuLy8gQ2xlYXIgY29tcGxldGVkIHRhc2tzIHdoZW4gcmVxdWVzdGVkXG5jbGVhckNvbXBsZXRlVGFza3NCdXR0b25zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWRMaXN0ID0gZmluZFByb2plY3RCeUlkKHNlbGVjdGVkUHJvamVjdElkLmlkKTtcbiAgICBzZWxlY3RlZExpc3QudGFza3MgPSBzZWxlY3RlZExpc3QudGFza3MuZmlsdGVyKHRhc2sgPT4gIXRhc2suY29tcGxldGUpO1xuICAgIHJlbmRlcigpO1xufSlcblxuLy8gRGVsZXRlIFByb2plY3Qgd2hlbiByZXF1ZXN0ZWRcbmRlbGV0ZUxpc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICBwcm9qZWN0cy5saXN0ID0gcHJvamVjdHMubGlzdC5maWx0ZXIocHJvamVjdCA9PiBwcm9qZWN0LmlkICE9PSBzZWxlY3RlZFByb2plY3RJZC5pZClcbiAgICBzZWxlY3RlZFByb2plY3RJZC5pZCA9IG51bGw7XG4gICAgcmVuZGVyKCk7XG59KVxuXG4vLyBDcmVhdGUgbmV3IHByb2plY3Qgd2hlbiBmb3JtIHN1Ym1pdHRlZFxubmV3UHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgLy8gQXNzaWduIGZvcm0gY29udGVudCB0byBuYW1lXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBuZXdQcm9qZWN0SW5wdXQudmFsdWU7XG5cbiAgICAvLyBTdG9wIGlmIGZvcm0gZW1wdHlcbiAgICBpZiAocHJvamVjdE5hbWUgPT0gbnVsbCB8fCBwcm9qZWN0TmFtZSA9PT0gJycpIHJldHVybjtcblxuICAgIC8vIFB1c2ggcHJvamVjdCB0byBsaXN0IGFuZCBjbGVhciBmb3JtXG4gICAgY29uc3QgcHJvamVjdCA9IGNyZWF0ZVByb2plY3QocHJvamVjdE5hbWUpXG4gICAgbmV3UHJvamVjdElucHV0LnZhbHVlID0gbnVsbDtcbiAgICBwcm9qZWN0cy5saXN0LnB1c2gocHJvamVjdCk7XG5cbiAgICAvLyBSZW5kZXIgdGFzayB3aW5kb3dcbiAgICBzZWxlY3RlZFByb2plY3RJZC5pZCA9IHByb2plY3QuaWRcbiAgICB0YXNrV2luZG93KHByb2plY3QpO1xuXG4gICAgcmVuZGVyKCk7XG5cbn0pO1xuXG4vLyBDcmVhdGUgbmV3IHRhc2sgd2hlbiBmb3JtIHN1Ym1pdHRlZFxubmV3VGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgLy8gQXNzaWduIHRhc2sgbmFtZSBhbmQgZHVlIGRhdGVcbiAgICBjb25zdCB0YXNrTmFtZSA9IG5ld1Rhc2tJbnB1dC52YWx1ZTtcbiAgICAvLyBjb25zdCB0YXNrRHVlID0gbmV3VGFza0RhdGVJbnB1dC52YWx1ZTtcblxuXG4gICAgLy8gU3RvcCBpZiBmb3JtIGVtcHR5XG4gICAgaWYgKHRhc2tOYW1lID09IG51bGwgfHwgdGFza05hbWUgPT09ICcnKSByZXR1cm47XG5cbiAgICAvLyBDcmVhdGUgdGFzayBpZiBmb3JtIGZpbGxlZFxuICAgIGNvbnN0IHRhc2sgPSBjcmVhdGVUYXNrKHRhc2tOYW1lKVxuXG4gICAgLy8gQ2xlYXIgZm9ybVxuICAgIG5ld1Rhc2tJbnB1dC52YWx1ZSA9IG51bGw7XG4gICAgLy8gbmV3VGFza0RhdGVJbnB1dC52YWx1ZSA9IG51bGwgXG5cbiAgICAvLyBDYWNoZSB0YXNrXG4gICAgY29uc3QgcHJvamVjdCA9IGZpbmRQcm9qZWN0QnlJZChzZWxlY3RlZFByb2plY3RJZC5pZCk7XG4gICAgcHJvamVjdC50YXNrcy5wdXNoKHRhc2spO1xuXG4gICAgLy8gUmVuZGVyIHRhc2sgd2luZG93XG4gICAgYXNzaWduVGFza0NvdW50KHByb2plY3QpO1xuICAgIHJlbmRlcigpO1xuXG59KTtcblxucmVuZGVyKClcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9