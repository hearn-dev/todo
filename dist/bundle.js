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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --margin: 2vw;\n  --prm-green: #85dccfe1;\n  --accent-green: #41a3b3;\n  --dark-orange: #e27d60;\n  --light-orange: #e8a87c;\n  --clr-warning: #ff0000;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  font-family: inherit;\n  margin: 0;\n  padding: 0;\n  max-width: 100%;\n}\n\nbody {\n  margin: 0;\n  font-family: monospace;\n  background-color: var(--prm-green);\n  display: grid;\n  grid:\n    \"header header\" auto\n    \"menu   active\" auto /\n    1fr 4fr;\n}\n\n.header {\n  grid-area: header;\n  background-color: var(--dark-orange);\n  display: flex;\n  height: 15vh;\n}\n\n.title-icon {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin-left: var(--margin);\n}\n\n.icon {\n  height: 8vh;\n  width: 6vw;\n  background: no-repeat center url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: contain;\n  filter: invert(100%);\n  -webkit-filter: invert(100%);\n}\n\n.title {\n  color: white;\n  font-size: 8vh;\n  margin-left: 1vw;\n}\n\n.menu {\n  grid-area: menu;\n  background-color: var(--accent-green);\n  color: white;\n  height: 100vh;\n  margin-top: 0;\n}\n\n.menu-title {\n  padding-top: 10px;\n  margin-left: 20px;\n}\n\n.active-list {\n  font-size: 1rem;\n  font-weight: 900;\n  text-decoration: underline;\n}\n\n.button:hover {\n  transform: scale(1.1);\n  cursor: pointer;\n}\n\n.project-item:hover {\n  cursor: pointer;\n  transform: none;\n  opacity: 0.7;\n}\n\n.menu-options {\n  padding-top: var(--margin);\n  display: grid;\n  gap: 25px;\n  list-style: none;\n  justify-content: center;\n}\n\n.option {\n  width: 15vw;\n  height: 5vh;\n  background-color: var(--light-orange);\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  font-size: 1.3rem;\n}\n\n.home-icon {\n  background: no-repeat center url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n.today-icon {\n  background: no-repeat center url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\n.week-icon {\n  background: no-repeat center url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n}\n\n.projects-title {\n  margin: 20px;\n  margin-bottom: 15px;\n  font-size: 1.4rem;\n}\n\n.projects {\n  display: grid;\n  gap: 10px;\n  color: white;\n}\n\n.project-item {\n  margin-left: 35px;\n}\n\n.task-list {\n  font-size: 1.2rem;\n  line-height: 1.7;\n  list-style: circle;\n  padding-left: 1.1em;\n}\n\nform {\n  display: flex;\n  align-items: flex-end;\n  margin-top: 10px;\n}\n\n.btn {\n  cursor: pointer;\n  background: 0;\n  border: 0;\n  padding: 0;\n  color: inherit;\n  font-size: 1rem;\n}\n\n.btn.create {\n  font-size: 1.5rem;\n  font-weight: 900;\n  margin-right: 0.25rem;\n  transition: opacity 250ms ease-in;\n  margin: 0 0 3px 20px;\n  font-size: 1rem;\n}\n\n.btn.task {\n  margin-left: 0;\n}\n\n.btn.create:hover {\n  opacity: 0.7;\n}\n\n.btn.delete {\n  font-weight: 700;\n  letter-spacing: 1px;\n  opacity: 0.7;\n  font-size: 1rem;\n  transition: color 200ms;\n}\n\n.btn.delete:hover {\n  color: var(--clr-warning);\n}\n\n.new {\n  background: transparent;\n  border: 0;\n  color: inherit;\n  border-bottom: 1px solid currentColor;\n  font-size: inherit;\n  outline: none;\n  transition: border-bottom 250ms ease-in;\n  order: 2;\n}\n\n.new::placeholder,\n.date::placeholder {\n  color: inherit;\n  opacity: 0.5;\n}\n\n.new:focus,\n.date:focus {\n  border-bottom-width: 3px;\n}\n\n.new:focus::placeholder,\n.date:focus::placeholder {\n  opacity: 0.2;\n}\n\n.new.list,\n.new.task {\n  margin: 0 10px 0px 10px;\n  width: 15vw;\n  margin-top: 8px;\n  padding: 0.35em;\n}\n\n.todo-list {\n  --spacer: 2rem;\n\n  grid-area: active;\n  margin: 20px 20px 0 50px;\n}\n\n.todo-header {\n  padding: var(--spacer);\n  background-color: var(--light-orange);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.list-title {\n  margin: 0 1rem 0 0;\n}\n\n.task-count {\n  margin: 0;\n  font-size: 0.85rem;\n}\n\n.todo-body {\n  padding: var(--spacer);\n  background-color: white;\n  color: var(--accent-green);\n  position: relative;\n}\n\n.new-task-creator .create {\n  color: var(--dark-orange);\n}\n\n[type=\"checkbox\"] {\n  opacity: 0;\n  position: absolute;\n}\n\n.task > * {\n  cursor: pointer;\n}\n\n.task label {\n  display: inline-flex;\n  align-items: center;\n  position: relative;\n  gap: 15px;\n}\n\n.task {\n  position: relative;\n  margin-bottom: 1.25em;\n}\n\n.task::after {\n  content: \"\";\n  position: absolute;\n  right: 0;\n  left: 0;\n  bottom: -0.5em;\n  height: 1px;\n  background: currentColor;\n  opacity: 0.1;\n}\n\n.custom-checkbox {\n  --size: 0.75em;\n  display: inline-block;\n  width: var(--size);\n  height: var(--size);\n  margin-right: var(--size);\n  border: 2px solid currentColor;\n  border-radius: 50%;\n  transform: scale(1);\n  transition: transform 200ms ease-in-out;\n}\n\n.task:hover .custom-checkbox,\n[type=\"checkbox\"]:focus + label .custom-checkbox {\n  transform: scale(1.2);\n  color: var(--prm-green);\n}\n\n[type=\"checkbox\"]:checked + label .custom-checkbox {\n  background: var(--accent-green);\n  border-color: var(--accent-green);\n  box-shadow: inset 0 0 0px 1px white;\n}\n\n[type=\"checkbox\"]:checked + label,\n[type=\"checkbox\"]:checked + .due {\n  opacity: 0.5;\n}\n\n.task label::after {\n  content: \"\";\n  position: absolute;\n  left: 2.5em;\n  right: 0;\n  top: calc(50% - 1px);\n  height: 2px;\n  background: currentColor;\n  transform: scaleX(0);\n  transform-origin: right;\n  transition: transform 150ms ease-in-out;\n}\n\n[type=\"checkbox\"]:checked + label::after {\n  transform: scaleX(1);\n  transform-origin: left;\n}\n\n.delete-stuff {\n  display: flex;\n  justify-content: space-evenly;\n  position: absolute;\n  width: 100%;\n  left: 0;\n  bottom: -35px;\n  color: var(--accent-green);\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --margin: 2vw;\n  --prm-green: #85dccfe1;\n  --accent-green: #41a3b3;\n  --dark-orange: #e27d60;\n  --light-orange: #e8a87c;\n  --clr-warning: #ff0000;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  font-family: inherit;\n  margin: 0;\n  padding: 0;\n  max-width: 100%;\n}\n\nbody {\n  margin: 0;\n  font-family: monospace;\n  background-color: var(--prm-green);\n  display: grid;\n  grid:\n    \"header header\" auto\n    \"menu   active\" auto /\n    1fr 4fr;\n}\n\n.header {\n  grid-area: header;\n  background-color: var(--dark-orange);\n  display: flex;\n  height: 15vh;\n}\n\n.title-icon {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin-left: var(--margin);\n}\n\n.icon {\n  height: 8vh;\n  width: 6vw;\n  background: no-repeat center url(\"./notebook.svg\");\n  background-size: contain;\n  filter: invert(100%);\n  -webkit-filter: invert(100%);\n}\n\n.title {\n  color: white;\n  font-size: 8vh;\n  margin-left: 1vw;\n}\n\n.menu {\n  grid-area: menu;\n  background-color: var(--accent-green);\n  color: white;\n  height: 100vh;\n  margin-top: 0;\n}\n\n.menu-title {\n  padding-top: 10px;\n  margin-left: 20px;\n}\n\n.active-list {\n  font-size: 1rem;\n  font-weight: 900;\n  text-decoration: underline;\n}\n\n.button:hover {\n  transform: scale(1.1);\n  cursor: pointer;\n}\n\n.project-item:hover {\n  cursor: pointer;\n  transform: none;\n  opacity: 0.7;\n}\n\n.menu-options {\n  padding-top: var(--margin);\n  display: grid;\n  gap: 25px;\n  list-style: none;\n  justify-content: center;\n}\n\n.option {\n  width: 15vw;\n  height: 5vh;\n  background-color: var(--light-orange);\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  font-size: 1.3rem;\n}\n\n.home-icon {\n  background: no-repeat center url(\"./home.svg\");\n}\n\n.today-icon {\n  background: no-repeat center url(\"./today.svg\");\n}\n\n.week-icon {\n  background: no-repeat center url(\"./week.svg\");\n}\n\n.projects-title {\n  margin: 20px;\n  margin-bottom: 15px;\n  font-size: 1.4rem;\n}\n\n.projects {\n  display: grid;\n  gap: 10px;\n  color: white;\n}\n\n.project-item {\n  margin-left: 35px;\n}\n\n.task-list {\n  font-size: 1.2rem;\n  line-height: 1.7;\n  list-style: circle;\n  padding-left: 1.1em;\n}\n\nform {\n  display: flex;\n  align-items: flex-end;\n  margin-top: 10px;\n}\n\n.btn {\n  cursor: pointer;\n  background: 0;\n  border: 0;\n  padding: 0;\n  color: inherit;\n  font-size: 1rem;\n}\n\n.btn.create {\n  font-size: 1.5rem;\n  font-weight: 900;\n  margin-right: 0.25rem;\n  transition: opacity 250ms ease-in;\n  margin: 0 0 3px 20px;\n  font-size: 1rem;\n}\n\n.btn.task {\n  margin-left: 0;\n}\n\n.btn.create:hover {\n  opacity: 0.7;\n}\n\n.btn.delete {\n  font-weight: 700;\n  letter-spacing: 1px;\n  opacity: 0.7;\n  font-size: 1rem;\n  transition: color 200ms;\n}\n\n.btn.delete:hover {\n  color: var(--clr-warning);\n}\n\n.new {\n  background: transparent;\n  border: 0;\n  color: inherit;\n  border-bottom: 1px solid currentColor;\n  font-size: inherit;\n  outline: none;\n  transition: border-bottom 250ms ease-in;\n  order: 2;\n}\n\n.new::placeholder,\n.date::placeholder {\n  color: inherit;\n  opacity: 0.5;\n}\n\n.new:focus,\n.date:focus {\n  border-bottom-width: 3px;\n}\n\n.new:focus::placeholder,\n.date:focus::placeholder {\n  opacity: 0.2;\n}\n\n.new.list,\n.new.task {\n  margin: 0 10px 0px 10px;\n  width: 15vw;\n  margin-top: 8px;\n  padding: 0.35em;\n}\n\n.todo-list {\n  --spacer: 2rem;\n\n  grid-area: active;\n  margin: 20px 20px 0 50px;\n}\n\n.todo-header {\n  padding: var(--spacer);\n  background-color: var(--light-orange);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.list-title {\n  margin: 0 1rem 0 0;\n}\n\n.task-count {\n  margin: 0;\n  font-size: 0.85rem;\n}\n\n.todo-body {\n  padding: var(--spacer);\n  background-color: white;\n  color: var(--accent-green);\n  position: relative;\n}\n\n.new-task-creator .create {\n  color: var(--dark-orange);\n}\n\n[type=\"checkbox\"] {\n  opacity: 0;\n  position: absolute;\n}\n\n.task > * {\n  cursor: pointer;\n}\n\n.task label {\n  display: inline-flex;\n  align-items: center;\n  position: relative;\n  gap: 15px;\n}\n\n.task {\n  position: relative;\n  margin-bottom: 1.25em;\n}\n\n.task::after {\n  content: \"\";\n  position: absolute;\n  right: 0;\n  left: 0;\n  bottom: -0.5em;\n  height: 1px;\n  background: currentColor;\n  opacity: 0.1;\n}\n\n.custom-checkbox {\n  --size: 0.75em;\n  display: inline-block;\n  width: var(--size);\n  height: var(--size);\n  margin-right: var(--size);\n  border: 2px solid currentColor;\n  border-radius: 50%;\n  transform: scale(1);\n  transition: transform 200ms ease-in-out;\n}\n\n.task:hover .custom-checkbox,\n[type=\"checkbox\"]:focus + label .custom-checkbox {\n  transform: scale(1.2);\n  color: var(--prm-green);\n}\n\n[type=\"checkbox\"]:checked + label .custom-checkbox {\n  background: var(--accent-green);\n  border-color: var(--accent-green);\n  box-shadow: inset 0 0 0px 1px white;\n}\n\n[type=\"checkbox\"]:checked + label,\n[type=\"checkbox\"]:checked + .due {\n  opacity: 0.5;\n}\n\n.task label::after {\n  content: \"\";\n  position: absolute;\n  left: 2.5em;\n  right: 0;\n  top: calc(50% - 1px);\n  height: 2px;\n  background: currentColor;\n  transform: scaleX(0);\n  transform-origin: right;\n  transition: transform 150ms ease-in-out;\n}\n\n[type=\"checkbox\"]:checked + label::after {\n  transform: scaleX(1);\n  transform-origin: left;\n}\n\n.delete-stuff {\n  display: flex;\n  justify-content: space-evenly;\n  position: absolute;\n  width: 100%;\n  left: 0;\n  bottom: -35px;\n  color: var(--accent-green);\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   "save": () => (/* binding */ save),
/* harmony export */   "selectedProjectId": () => (/* binding */ selectedProjectId)
/* harmony export */ });
/* eslint-disable import/no-mutable-exports */
// Initialize projects folder
const LOCAL_STORAGE_PROJECT_KEY = 'task.lists';
const projects = { list: JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)) || [] };

const selectedProjectId = { id: '' };

// Initialize new projects with unique id
function createProject(name) {
  return { id: Date.now().toString(), name, tasks: [] };
}

// Find project in array based on ID
function findProjectById(projectId) {
  const { list } = projects;
  const project = list.find((listItem) => listItem.id === projectId);
  return project;
}

function save() {
  localStorage.setItem(LOCAL_STORAGE_PROJECT_KEY, JSON.stringify(projects.list));
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
/* harmony export */   "createTask": () => (/* binding */ createTask),
/* harmony export */   "taskCountAll": () => (/* binding */ taskCountAll)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* eslint-disable no-plusplus */


const taskCount = document.querySelector('[data-task-counter]');

// Assign task count
function assignTaskCount(project) {
  const incomplete = project.tasks.filter((task) => !task.complete).length;

  // Count tasks in project
  if (incomplete === 1) {
    taskCount.innerText = `${incomplete} task remaining`;
  } else {
    taskCount.innerText = `${incomplete} tasks remaining`;
  }
}

// Exactly as the title says
function createTask(taskName, due) {
  return {
    id: Date.now().toString(),
    name: taskName,
    due,
    complete: false,
    project: _projects__WEBPACK_IMPORTED_MODULE_0__.selectedProjectId.id,
  };
}

function taskCountAll() {
  let incomplete = 0;

  _projects__WEBPACK_IMPORTED_MODULE_0__.projects.list.forEach((project) => {
    project.tasks.forEach((task) => {
      if (!task.complete) {
        incomplete++;
      }
    });
  });
  if (incomplete === 1) {
    taskCount.innerText = `${incomplete} task remaining`;
  } else {
    taskCount.innerText = `${incomplete} tasks remaining`;
  }
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
/* harmony export */   "saveAndRender": () => (/* binding */ saveAndRender),
/* harmony export */   "taskWindow": () => (/* binding */ taskWindow)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");



const projectsContainer = document.querySelector('[data-projects]');
const todoSection = document.querySelector('[data-todo]');
const tasksContainer = document.querySelector('[data-tasks-container]');
const taskProjectTitle = document.querySelector('[data-project-title]');
// const newTaskDateInput = document.querySelector('[data-new-task-date-input]');
const taskTemplate = document.getElementById('task-template');

// Clear container of all children
function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

// Renders project list
function renderProjects() {
  // Add each project to projectList
  _projects__WEBPACK_IMPORTED_MODULE_0__.projects.list.forEach((project) => {
    const projectElement = document.createElement('li');
    projectElement.dataset.projectId = project.id;
    projectElement.classList.add('project-item');
    projectElement.innerText = project.name;
    if (projectElement.dataset.projectId === _projects__WEBPACK_IMPORTED_MODULE_0__.selectedProjectId.id) {
      projectElement.classList.add('active-list');
    }
    projectsContainer.appendChild(projectElement);
  });
}

// Renders tasks from selected task list
function renderTasks(selectedList) {
  // Render each task in list
  selectedList.forEach((task) => {
    const taskElement = document.importNode(taskTemplate.content, true);
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
  });
}

// Render tasks from all project lists
function showAllTasks() {
  _projects__WEBPACK_IMPORTED_MODULE_0__.projects.list.forEach((project) => {
    renderTasks(project.tasks);
  });
}

// Render screen
function render() {
  // Clear and set project list
  clearElement(projectsContainer);
  // Clear existing tasks
  clearElement(tasksContainer);
  renderProjects();

  if (_projects__WEBPACK_IMPORTED_MODULE_0__.selectedProjectId.id == null || _projects__WEBPACK_IMPORTED_MODULE_0__.selectedProjectId.id === '') {
    todoSection.style.display = 'none';
  } else if (_projects__WEBPACK_IMPORTED_MODULE_0__.selectedProjectId.id === 'home') {
    todoSection.style.display = '';
    taskProjectTitle.innerText = 'Home';
    showAllTasks();
  } else {
    todoSection.style.display = '';
    const project = (0,_projects__WEBPACK_IMPORTED_MODULE_0__.findProjectById)(_projects__WEBPACK_IMPORTED_MODULE_0__.selectedProjectId.id);
    renderTasks(project.tasks);
  }
}

function saveAndRender() {
  (0,_projects__WEBPACK_IMPORTED_MODULE_0__.save)();
  render();
}

// Assign project name and task count to task list
function assignProjectList(project) {
  // Clear tasks
  clearElement(tasksContainer);

  // Assign project title to list
  taskProjectTitle.innerText = project.name;
}

// Refresh project name and task counter
function taskWindow(project) {
  assignProjectList(project);
  (0,_tasks__WEBPACK_IMPORTED_MODULE_1__.assignTaskCount)(project);
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

// eslint-disable-next-line import/named



// import {format, parseISO} from 'date-fns';

// Assign DOM variables
const projectsContainer = document.querySelector('[data-projects]');
const newProjectForm = document.querySelector('[data-new-project-form');
const newProjectInput = document.querySelector('[data-new-project-input]');
const tasksContainer = document.querySelector('[data-tasks-container]');
const newTaskForm = document.querySelector('[data-new-task-form]');
const newTaskInput = document.querySelector('[data-new-task-input]');
const homeButton = document.querySelector('[data-home-button]');
const clearCompleteTasksButtons = document.querySelector(
  '[data-clear-complete-tasks-button]',
);
const deleteListButton = document.querySelector('[data-delete-list-button]');

// Show all tasks when Home Button clicked
homeButton.addEventListener('click', () => {
  _projects__WEBPACK_IMPORTED_MODULE_3__.selectedProjectId.id = 'home';
  (0,_tasks__WEBPACK_IMPORTED_MODULE_2__.taskCountAll)();
  (0,_window__WEBPACK_IMPORTED_MODULE_1__.saveAndRender)();
});

// Select project when clicked
projectsContainer.addEventListener('click', (e) => {
  // Target clicked items
  if (e.target.tagName.toLowerCase() === 'li') {
    // Determine id of clicked project
    _projects__WEBPACK_IMPORTED_MODULE_3__.selectedProjectId.id = e.target.dataset.projectId;

    // Find and assign project
    const project = (0,_projects__WEBPACK_IMPORTED_MODULE_3__.findProjectById)(_projects__WEBPACK_IMPORTED_MODULE_3__.selectedProjectId.id);

    // Assign name of project and task list count
    (0,_window__WEBPACK_IMPORTED_MODULE_1__.taskWindow)(project);
    (0,_window__WEBPACK_IMPORTED_MODULE_1__.saveAndRender)();
  }
});

// update Task count when task crossed off
tasksContainer.addEventListener('click', (e) => {
  if (e.target.tagName.toLowerCase() === 'input') {
    const project = (0,_projects__WEBPACK_IMPORTED_MODULE_3__.findProjectById)(e.target.className);
    const selectedTask = project.tasks.find((task) => task.id === e.target.id);
    selectedTask.complete = e.target.checked;
    if (_projects__WEBPACK_IMPORTED_MODULE_3__.selectedProjectId.id !== 'home') {
      (0,_tasks__WEBPACK_IMPORTED_MODULE_2__.assignTaskCount)(project);
    } else {
      (0,_tasks__WEBPACK_IMPORTED_MODULE_2__.taskCountAll)();
    }
  }
});

// Clear completed tasks when requested
clearCompleteTasksButtons.addEventListener('click', () => {
  const selectedList = (0,_projects__WEBPACK_IMPORTED_MODULE_3__.findProjectById)(_projects__WEBPACK_IMPORTED_MODULE_3__.selectedProjectId.id);
  selectedList.tasks = selectedList.tasks.filter((task) => !task.complete);
  (0,_window__WEBPACK_IMPORTED_MODULE_1__.saveAndRender)();
});

// Delete Project when requested
deleteListButton.addEventListener('click', () => {
  _projects__WEBPACK_IMPORTED_MODULE_3__.projects.list = _projects__WEBPACK_IMPORTED_MODULE_3__.projects.list.filter(
    (project) => project.id !== _projects__WEBPACK_IMPORTED_MODULE_3__.selectedProjectId.id,
  );
  _projects__WEBPACK_IMPORTED_MODULE_3__.selectedProjectId.id = null;
  (0,_window__WEBPACK_IMPORTED_MODULE_1__.saveAndRender)();
});

// Create new project when form submitted
newProjectForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Assign form content to name
  const projectName = newProjectInput.value;

  // Stop if form empty
  if (projectName == null || projectName === '') return;

  // Push project to list and clear form
  const project = (0,_projects__WEBPACK_IMPORTED_MODULE_3__.createProject)(projectName);
  newProjectInput.value = null;
  _projects__WEBPACK_IMPORTED_MODULE_3__.projects.list.push(project);

  // Render task window
  _projects__WEBPACK_IMPORTED_MODULE_3__.selectedProjectId.id = project.id;
  (0,_window__WEBPACK_IMPORTED_MODULE_1__.taskWindow)(project);

  (0,_window__WEBPACK_IMPORTED_MODULE_1__.saveAndRender)();
});

// Create new task when form submitted
newTaskForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Assign task name and due date
  const taskName = newTaskInput.value;
  // const taskDue = newTaskDateInput.value;

  // Stop if form empty
  if (taskName == null || taskName === '') return;

  // Create task if form filled
  const task = (0,_tasks__WEBPACK_IMPORTED_MODULE_2__.createTask)(taskName);

  // Clear form
  newTaskInput.value = null;
  // newTaskDateInput.value = null

  // Cache task
  const project = (0,_projects__WEBPACK_IMPORTED_MODULE_3__.findProjectById)(_projects__WEBPACK_IMPORTED_MODULE_3__.selectedProjectId.id);
  project.tasks.push(task);

  // Render task window
  (0,_tasks__WEBPACK_IMPORTED_MODULE_2__.assignTaskCount)(project);
  (0,_window__WEBPACK_IMPORTED_MODULE_1__.saveAndRender)();
});

(0,_window__WEBPACK_IMPORTED_MODULE_1__.render)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ckIsTUFBTTtBQUNOLE1BQU0sb0RBQVk7QUFDbEI7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLHVCQUF1QiwwREFBZSxDQUFDLDJEQUFvQjtBQUMzRDtBQUNBLEVBQUUsc0RBQWE7QUFDZixDQUFDOztBQUVEO0FBQ0E7QUFDQSxFQUFFLG9EQUFhLEdBQUcsMkRBQW9CO0FBQ3RDLGdDQUFnQywyREFBb0I7QUFDcEQ7QUFDQSxFQUFFLDJEQUFvQjtBQUN0QixFQUFFLHNEQUFhO0FBQ2YsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLHdEQUFhO0FBQy9CO0FBQ0EsRUFBRSx5REFBa0I7O0FBRXBCO0FBQ0EsRUFBRSwyREFBb0I7QUFDdEIsRUFBRSxtREFBVTs7QUFFWixFQUFFLHNEQUFhO0FBQ2YsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLGtEQUFVOztBQUV6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsMERBQWUsQ0FBQywyREFBb0I7QUFDdEQ7O0FBRUE7QUFDQSxFQUFFLHVEQUFlO0FBQ2pCLEVBQUUsc0RBQWE7QUFDZixDQUFDOztBQUVELCtDQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy93aW5kb3cuanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL25vdGVib29rLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaG9tZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL3RvZGF5LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vd2Vlay5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLW1hcmdpbjogMnZ3O1xcbiAgLS1wcm0tZ3JlZW46ICM4NWRjY2ZlMTtcXG4gIC0tYWNjZW50LWdyZWVuOiAjNDFhM2IzO1xcbiAgLS1kYXJrLW9yYW5nZTogI2UyN2Q2MDtcXG4gIC0tbGlnaHQtb3JhbmdlOiAjZThhODdjO1xcbiAgLS1jbHItd2FybmluZzogI2ZmMDAwMDtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJtLWdyZWVuKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkOlxcbiAgICBcXFwiaGVhZGVyIGhlYWRlclxcXCIgYXV0b1xcbiAgICBcXFwibWVudSAgIGFjdGl2ZVxcXCIgYXV0byAvXFxuICAgIDFmciA0ZnI7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLW9yYW5nZSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiAxNXZoO1xcbn1cXG5cXG4udGl0bGUtaWNvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiB2YXIoLS1tYXJnaW4pO1xcbn1cXG5cXG4uaWNvbiB7XFxuICBoZWlnaHQ6IDh2aDtcXG4gIHdpZHRoOiA2dnc7XFxuICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQgY2VudGVyIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICBmaWx0ZXI6IGludmVydCgxMDAlKTtcXG4gIC13ZWJraXQtZmlsdGVyOiBpbnZlcnQoMTAwJSk7XFxufVxcblxcbi50aXRsZSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDh2aDtcXG4gIG1hcmdpbi1sZWZ0OiAxdnc7XFxufVxcblxcbi5tZW51IHtcXG4gIGdyaWQtYXJlYTogbWVudTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1ncmVlbik7XFxuICBjb2xvcjogd2hpdGU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgbWFyZ2luLXRvcDogMDtcXG59XFxuXFxuLm1lbnUtdGl0bGUge1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG59XFxuXFxuLmFjdGl2ZS1saXN0IHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLmJ1dHRvbjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW06aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNmb3JtOiBub25lO1xcbiAgb3BhY2l0eTogMC43O1xcbn1cXG5cXG4ubWVudS1vcHRpb25zIHtcXG4gIHBhZGRpbmctdG9wOiB2YXIoLS1tYXJnaW4pO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMjVweDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLm9wdGlvbiB7XFxuICB3aWR0aDogMTV2dztcXG4gIGhlaWdodDogNXZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtb3JhbmdlKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi5ob21lLWljb24ge1xcbiAgYmFja2dyb3VuZDogbm8tcmVwZWF0IGNlbnRlciB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG5cXG4udG9kYXktaWNvbiB7XFxuICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQgY2VudGVyIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxufVxcblxcbi53ZWVrLWljb24ge1xcbiAgYmFja2dyb3VuZDogbm8tcmVwZWF0IGNlbnRlciB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbn1cXG5cXG4ucHJvamVjdHMtdGl0bGUge1xcbiAgbWFyZ2luOiAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbn1cXG5cXG4ucHJvamVjdHMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMTBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnByb2plY3QtaXRlbSB7XFxuICBtYXJnaW4tbGVmdDogMzVweDtcXG59XFxuXFxuLnRhc2stbGlzdCB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjc7XFxuICBsaXN0LXN0eWxlOiBjaXJjbGU7XFxuICBwYWRkaW5nLWxlZnQ6IDEuMWVtO1xcbn1cXG5cXG5mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4uYnRuIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6IDA7XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5idG4uY3JlYXRlIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIG1hcmdpbi1yaWdodDogMC4yNXJlbTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMjUwbXMgZWFzZS1pbjtcXG4gIG1hcmdpbjogMCAwIDNweCAyMHB4O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uYnRuLnRhc2sge1xcbiAgbWFyZ2luLWxlZnQ6IDA7XFxufVxcblxcbi5idG4uY3JlYXRlOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDAuNztcXG59XFxuXFxuLmJ0bi5kZWxldGUge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICBvcGFjaXR5OiAwLjc7XFxuICBmb250LXNpemU6IDFyZW07XFxuICB0cmFuc2l0aW9uOiBjb2xvciAyMDBtcztcXG59XFxuXFxuLmJ0bi5kZWxldGU6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWNsci13YXJuaW5nKTtcXG59XFxuXFxuLm5ldyB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tIDI1MG1zIGVhc2UtaW47XFxuICBvcmRlcjogMjtcXG59XFxuXFxuLm5ldzo6cGxhY2Vob2xkZXIsXFxuLmRhdGU6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4ubmV3OmZvY3VzLFxcbi5kYXRlOmZvY3VzIHtcXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDNweDtcXG59XFxuXFxuLm5ldzpmb2N1czo6cGxhY2Vob2xkZXIsXFxuLmRhdGU6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcXG4gIG9wYWNpdHk6IDAuMjtcXG59XFxuXFxuLm5ldy5saXN0LFxcbi5uZXcudGFzayB7XFxuICBtYXJnaW46IDAgMTBweCAwcHggMTBweDtcXG4gIHdpZHRoOiAxNXZ3O1xcbiAgbWFyZ2luLXRvcDogOHB4O1xcbiAgcGFkZGluZzogMC4zNWVtO1xcbn1cXG5cXG4udG9kby1saXN0IHtcXG4gIC0tc3BhY2VyOiAycmVtO1xcblxcbiAgZ3JpZC1hcmVhOiBhY3RpdmU7XFxuICBtYXJnaW46IDIwcHggMjBweCAwIDUwcHg7XFxufVxcblxcbi50b2RvLWhlYWRlciB7XFxuICBwYWRkaW5nOiB2YXIoLS1zcGFjZXIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtb3JhbmdlKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ubGlzdC10aXRsZSB7XFxuICBtYXJnaW46IDAgMXJlbSAwIDA7XFxufVxcblxcbi50YXNrLWNvdW50IHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcXG59XFxuXFxuLnRvZG8tYm9keSB7XFxuICBwYWRkaW5nOiB2YXIoLS1zcGFjZXIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogdmFyKC0tYWNjZW50LWdyZWVuKTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLm5ldy10YXNrLWNyZWF0b3IgLmNyZWF0ZSB7XFxuICBjb2xvcjogdmFyKC0tZGFyay1vcmFuZ2UpO1xcbn1cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4udGFzayA+ICoge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzayBsYWJlbCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBnYXA6IDE1cHg7XFxufVxcblxcbi50YXNrIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbi1ib3R0b206IDEuMjVlbTtcXG59XFxuXFxuLnRhc2s6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICBsZWZ0OiAwO1xcbiAgYm90dG9tOiAtMC41ZW07XFxuICBoZWlnaHQ6IDFweDtcXG4gIGJhY2tncm91bmQ6IGN1cnJlbnRDb2xvcjtcXG4gIG9wYWNpdHk6IDAuMTtcXG59XFxuXFxuLmN1c3RvbS1jaGVja2JveCB7XFxuICAtLXNpemU6IDAuNzVlbTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiB2YXIoLS1zaXplKTtcXG4gIGhlaWdodDogdmFyKC0tc2l6ZSk7XFxuICBtYXJnaW4tcmlnaHQ6IHZhcigtLXNpemUpO1xcbiAgYm9yZGVyOiAycHggc29saWQgY3VycmVudENvbG9yO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyMDBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnRhc2s6aG92ZXIgLmN1c3RvbS1jaGVja2JveCxcXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpmb2N1cyArIGxhYmVsIC5jdXN0b20tY2hlY2tib3gge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgY29sb3I6IHZhcigtLXBybS1ncmVlbik7XFxufVxcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyBsYWJlbCAuY3VzdG9tLWNoZWNrYm94IHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1ncmVlbik7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWFjY2VudC1ncmVlbik7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMHB4IDFweCB3aGl0ZTtcXG59XFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVsLFxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyAuZHVlIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLnRhc2sgbGFiZWw6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMi41ZW07XFxuICByaWdodDogMDtcXG4gIHRvcDogY2FsYyg1MCUgLSAxcHgpO1xcbiAgaGVpZ2h0OiAycHg7XFxuICBiYWNrZ3JvdW5kOiBjdXJyZW50Q29sb3I7XFxuICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDE1MG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgbGFiZWw6OmFmdGVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcXG59XFxuXFxuLmRlbGV0ZS1zdHVmZiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IC0zNXB4O1xcbiAgY29sb3I6IHZhcigtLWFjY2VudC1ncmVlbik7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtBQUN4Qjs7QUFFQTs7O0VBR0Usc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixTQUFTO0VBQ1QsVUFBVTtFQUNWLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLGtDQUFrQztFQUNsQyxhQUFhO0VBQ2I7OztXQUdTO0FBQ1g7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLG9FQUFrRDtFQUNsRCx3QkFBd0I7RUFDeEIsb0JBQW9CO0VBQ3BCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0VBQ2QsZ0JBQWdCO0FB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QUNuQix5QkFBeUI7RUFDekIsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsdUNBQXVDO0FBQ3pDOztBQUVBOztFQUVFLHFCQUFxQjtFQUNyQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsaUNBQWlDO0VBQ2pDLG1DQUFtQztBQUNyQzs7QUFFQTs7RUFFRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxRQUFRO0VBQ1Isb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCx3QkFBd0I7RUFDeEIsb0JBQW9CO0VBQ3BCLHVCQUF1QjtFQUN2Qix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLE9BQU87RUFDUCxhQUFhO0VBQ2IsMEJBQTBCO0FBQzVCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tbWFyZ2luOiAydnc7XFxuICAtLXBybS1ncmVlbjogIzg1ZGNjZmUxO1xcbiAgLS1hY2NlbnQtZ3JlZW46ICM0MWEzYjM7XFxuICAtLWRhcmstb3JhbmdlOiAjZTI3ZDYwO1xcbiAgLS1saWdodC1vcmFuZ2U6ICNlOGE4N2M7XFxuICAtLWNsci13YXJuaW5nOiAjZmYwMDAwO1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcm0tZ3JlZW4pO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQ6XFxuICAgIFxcXCJoZWFkZXIgaGVhZGVyXFxcIiBhdXRvXFxuICAgIFxcXCJtZW51ICAgYWN0aXZlXFxcIiBhdXRvIC9cXG4gICAgMWZyIDRmcjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstb3JhbmdlKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDE1dmg7XFxufVxcblxcbi50aXRsZS1pY29uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWxlZnQ6IHZhcigtLW1hcmdpbik7XFxufVxcblxcbi5pY29uIHtcXG4gIGhlaWdodDogOHZoO1xcbiAgd2lkdGg6IDZ2dztcXG4gIGJhY2tncm91bmQ6IG5vLXJlcGVhdCBjZW50ZXIgdXJsKFxcXCIuL25vdGVib29rLnN2Z1xcXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSk7XFxuICAtd2Via2l0LWZpbHRlcjogaW52ZXJ0KDEwMCUpO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiA4dmg7XFxuICBtYXJnaW4tbGVmdDogMXZ3O1xcbn1cXG5cXG4ubWVudSB7XFxuICBncmlkLWFyZWE6IG1lbnU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtZ3JlZW4pO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG1hcmdpbi10b3A6IDA7XFxufVxcblxcbi5tZW51LXRpdGxlIHtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxufVxcblxcbi5hY3RpdmUtbGlzdCB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5idXR0b246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zZm9ybTogbm9uZTtcXG4gIG9wYWNpdHk6IDAuNztcXG59XFxuXFxuLm1lbnUtb3B0aW9ucyB7XFxuICBwYWRkaW5nLXRvcDogdmFyKC0tbWFyZ2luKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDI1cHg7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5vcHRpb24ge1xcbiAgd2lkdGg6IDE1dnc7XFxuICBoZWlnaHQ6IDV2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LW9yYW5nZSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4uaG9tZS1pY29uIHtcXG4gIGJhY2tncm91bmQ6IG5vLXJlcGVhdCBjZW50ZXIgdXJsKFxcXCIuL2hvbWUuc3ZnXFxcIik7XFxufVxcblxcbi50b2RheS1pY29uIHtcXG4gIGJhY2tncm91bmQ6IG5vLXJlcGVhdCBjZW50ZXIgdXJsKFxcXCIuL3RvZGF5LnN2Z1xcXCIpO1xcbn1cXG5cXG4ud2Vlay1pY29uIHtcXG4gIGJhY2tncm91bmQ6IG5vLXJlcGVhdCBjZW50ZXIgdXJsKFxcXCIuL3dlZWsuc3ZnXFxcIik7XFxufVxcblxcbi5wcm9qZWN0cy10aXRsZSB7XFxuICBtYXJnaW46IDIwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxufVxcblxcbi5wcm9qZWN0cyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAxMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtIHtcXG4gIG1hcmdpbi1sZWZ0OiAzNXB4O1xcbn1cXG5cXG4udGFzay1saXN0IHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNztcXG4gIGxpc3Qtc3R5bGU6IGNpcmNsZTtcXG4gIHBhZGRpbmctbGVmdDogMS4xZW07XFxufVxcblxcbmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5idG4ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZDogMDtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmJ0bi5jcmVhdGUge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAyNTBtcyBlYXNlLWluO1xcbiAgbWFyZ2luOiAwIDAgM3B4IDIwcHg7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5idG4udGFzayB7XFxuICBtYXJnaW4tbGVmdDogMDtcXG59XFxuXFxuLmJ0bi5jcmVhdGU6aG92ZXIge1xcbiAgb3BhY2l0eTogMC43O1xcbn1cXG5cXG4uYnRuLmRlbGV0ZSB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gIG9wYWNpdHk6IDAuNztcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDIwMG1zO1xcbn1cXG5cXG4uYnRuLmRlbGV0ZTpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tY2xyLXdhcm5pbmcpO1xcbn1cXG5cXG4ubmV3IHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAwO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgY3VycmVudENvbG9yO1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20gMjUwbXMgZWFzZS1pbjtcXG4gIG9yZGVyOiAyO1xcbn1cXG5cXG4ubmV3OjpwbGFjZWhvbGRlcixcXG4uZGF0ZTo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi5uZXc6Zm9jdXMsXFxuLmRhdGU6Zm9jdXMge1xcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogM3B4O1xcbn1cXG5cXG4ubmV3OmZvY3VzOjpwbGFjZWhvbGRlcixcXG4uZGF0ZTpmb2N1czo6cGxhY2Vob2xkZXIge1xcbiAgb3BhY2l0eTogMC4yO1xcbn1cXG5cXG4ubmV3Lmxpc3QsXFxuLm5ldy50YXNrIHtcXG4gIG1hcmdpbjogMCAxMHB4IDBweCAxMHB4O1xcbiAgd2lkdGg6IDE1dnc7XFxuICBtYXJnaW4tdG9wOiA4cHg7XFxuICBwYWRkaW5nOiAwLjM1ZW07XFxufVxcblxcbi50b2RvLWxpc3Qge1xcbiAgLS1zcGFjZXI6IDJyZW07XFxuXFxuICBncmlkLWFyZWE6IGFjdGl2ZTtcXG4gIG1hcmdpbjogMjBweCAyMHB4IDAgNTBweDtcXG59XFxuXFxuLnRvZG8taGVhZGVyIHtcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1vcmFuZ2UpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5saXN0LXRpdGxlIHtcXG4gIG1hcmdpbjogMCAxcmVtIDAgMDtcXG59XFxuXFxuLnRhc2stY291bnQge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xcbn1cXG5cXG4udG9kby1ib2R5IHtcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtZ3JlZW4pO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ubmV3LXRhc2stY3JlYXRvciAuY3JlYXRlIHtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLW9yYW5nZSk7XFxufVxcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gIG9wYWNpdHk6IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi50YXNrID4gKiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrIGxhYmVsIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGdhcDogMTVweDtcXG59XFxuXFxuLnRhc2sge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luLWJvdHRvbTogMS4yNWVtO1xcbn1cXG5cXG4udGFzazo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IC0wLjVlbTtcXG4gIGhlaWdodDogMXB4O1xcbiAgYmFja2dyb3VuZDogY3VycmVudENvbG9yO1xcbiAgb3BhY2l0eTogMC4xO1xcbn1cXG5cXG4uY3VzdG9tLWNoZWNrYm94IHtcXG4gIC0tc2l6ZTogMC43NWVtO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IHZhcigtLXNpemUpO1xcbiAgaGVpZ2h0OiB2YXIoLS1zaXplKTtcXG4gIG1hcmdpbi1yaWdodDogdmFyKC0tc2l6ZSk7XFxuICBib3JkZXI6IDJweCBzb2xpZCBjdXJyZW50Q29sb3I7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDIwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4udGFzazpob3ZlciAuY3VzdG9tLWNoZWNrYm94LFxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmZvY3VzICsgbGFiZWwgLmN1c3RvbS1jaGVja2JveCB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICBjb2xvcjogdmFyKC0tcHJtLWdyZWVuKTtcXG59XFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVsIC5jdXN0b20tY2hlY2tib3gge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWdyZWVuKTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYWNjZW50LWdyZWVuKTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwcHggMXB4IHdoaXRlO1xcbn1cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgbGFiZWwsXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIC5kdWUge1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4udGFzayBsYWJlbDo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAyLjVlbTtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiBjYWxjKDUwJSAtIDFweCk7XFxuICBoZWlnaHQ6IDJweDtcXG4gIGJhY2tncm91bmQ6IGN1cnJlbnRDb2xvcjtcXG4gIHRyYW5zZm9ybTogc2NhbGVYKDApO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTUwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyBsYWJlbDo6YWZ0ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xcbn1cXG5cXG4uZGVsZXRlLXN0dWZmIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbGVmdDogMDtcXG4gIGJvdHRvbTogLTM1cHg7XFxuICBjb2xvcjogdmFyKC0tYWNjZW50LWdyZWVuKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1tdXRhYmxlLWV4cG9ydHMgKi9cbi8vIEluaXRpYWxpemUgcHJvamVjdHMgZm9sZGVyXG5jb25zdCBMT0NBTF9TVE9SQUdFX1BST0pFQ1RfS0VZID0gJ3Rhc2subGlzdHMnO1xuZXhwb3J0IGNvbnN0IHByb2plY3RzID0geyBsaXN0OiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKExPQ0FMX1NUT1JBR0VfUFJPSkVDVF9LRVkpKSB8fCBbXSB9O1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0SWQgPSB7IGlkOiAnJyB9O1xuXG4vLyBJbml0aWFsaXplIG5ldyBwcm9qZWN0cyB3aXRoIHVuaXF1ZSBpZFxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QobmFtZSkge1xuICByZXR1cm4geyBpZDogRGF0ZS5ub3coKS50b1N0cmluZygpLCBuYW1lLCB0YXNrczogW10gfTtcbn1cblxuLy8gRmluZCBwcm9qZWN0IGluIGFycmF5IGJhc2VkIG9uIElEXG5leHBvcnQgZnVuY3Rpb24gZmluZFByb2plY3RCeUlkKHByb2plY3RJZCkge1xuICBjb25zdCB7IGxpc3QgfSA9IHByb2plY3RzO1xuICBjb25zdCBwcm9qZWN0ID0gbGlzdC5maW5kKChsaXN0SXRlbSkgPT4gbGlzdEl0ZW0uaWQgPT09IHByb2plY3RJZCk7XG4gIHJldHVybiBwcm9qZWN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2F2ZSgpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oTE9DQUxfU1RPUkFHRV9QUk9KRUNUX0tFWSwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMubGlzdCkpO1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbmltcG9ydCB7IHNlbGVjdGVkUHJvamVjdElkLCBwcm9qZWN0cyB9IGZyb20gJy4vcHJvamVjdHMnO1xuXG5jb25zdCB0YXNrQ291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS10YXNrLWNvdW50ZXJdJyk7XG5cbi8vIEFzc2lnbiB0YXNrIGNvdW50XG5leHBvcnQgZnVuY3Rpb24gYXNzaWduVGFza0NvdW50KHByb2plY3QpIHtcbiAgY29uc3QgaW5jb21wbGV0ZSA9IHByb2plY3QudGFza3MuZmlsdGVyKCh0YXNrKSA9PiAhdGFzay5jb21wbGV0ZSkubGVuZ3RoO1xuXG4gIC8vIENvdW50IHRhc2tzIGluIHByb2plY3RcbiAgaWYgKGluY29tcGxldGUgPT09IDEpIHtcbiAgICB0YXNrQ291bnQuaW5uZXJUZXh0ID0gYCR7aW5jb21wbGV0ZX0gdGFzayByZW1haW5pbmdgO1xuICB9IGVsc2Uge1xuICAgIHRhc2tDb3VudC5pbm5lclRleHQgPSBgJHtpbmNvbXBsZXRlfSB0YXNrcyByZW1haW5pbmdgO1xuICB9XG59XG5cbi8vIEV4YWN0bHkgYXMgdGhlIHRpdGxlIHNheXNcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXNrKHRhc2tOYW1lLCBkdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBpZDogRGF0ZS5ub3coKS50b1N0cmluZygpLFxuICAgIG5hbWU6IHRhc2tOYW1lLFxuICAgIGR1ZSxcbiAgICBjb21wbGV0ZTogZmFsc2UsXG4gICAgcHJvamVjdDogc2VsZWN0ZWRQcm9qZWN0SWQuaWQsXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0YXNrQ291bnRBbGwoKSB7XG4gIGxldCBpbmNvbXBsZXRlID0gMDtcblxuICBwcm9qZWN0cy5saXN0LmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBwcm9qZWN0LnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGlmICghdGFzay5jb21wbGV0ZSkge1xuICAgICAgICBpbmNvbXBsZXRlKys7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICBpZiAoaW5jb21wbGV0ZSA9PT0gMSkge1xuICAgIHRhc2tDb3VudC5pbm5lclRleHQgPSBgJHtpbmNvbXBsZXRlfSB0YXNrIHJlbWFpbmluZ2A7XG4gIH0gZWxzZSB7XG4gICAgdGFza0NvdW50LmlubmVyVGV4dCA9IGAke2luY29tcGxldGV9IHRhc2tzIHJlbWFpbmluZ2A7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIHByb2plY3RzLCBzZWxlY3RlZFByb2plY3RJZCwgZmluZFByb2plY3RCeUlkLCBzYXZlLFxufSBmcm9tICcuL3Byb2plY3RzJztcbmltcG9ydCB7IGFzc2lnblRhc2tDb3VudCB9IGZyb20gJy4vdGFza3MnO1xuXG5jb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXByb2plY3RzXScpO1xuY29uc3QgdG9kb1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS10b2RvXScpO1xuY29uc3QgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS10YXNrcy1jb250YWluZXJdJyk7XG5jb25zdCB0YXNrUHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcHJvamVjdC10aXRsZV0nKTtcbi8vIGNvbnN0IG5ld1Rhc2tEYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1uZXctdGFzay1kYXRlLWlucHV0XScpO1xuY29uc3QgdGFza1RlbXBsYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stdGVtcGxhdGUnKTtcblxuLy8gQ2xlYXIgY29udGFpbmVyIG9mIGFsbCBjaGlsZHJlblxuZnVuY3Rpb24gY2xlYXJFbGVtZW50KGVsZW1lbnQpIHtcbiAgd2hpbGUgKGVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudC5maXJzdENoaWxkKTtcbiAgfVxufVxuXG4vLyBSZW5kZXJzIHByb2plY3QgbGlzdFxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclByb2plY3RzKCkge1xuICAvLyBBZGQgZWFjaCBwcm9qZWN0IHRvIHByb2plY3RMaXN0XG4gIHByb2plY3RzLmxpc3QuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBwcm9qZWN0RWxlbWVudC5kYXRhc2V0LnByb2plY3RJZCA9IHByb2plY3QuaWQ7XG4gICAgcHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1pdGVtJyk7XG4gICAgcHJvamVjdEVsZW1lbnQuaW5uZXJUZXh0ID0gcHJvamVjdC5uYW1lO1xuICAgIGlmIChwcm9qZWN0RWxlbWVudC5kYXRhc2V0LnByb2plY3RJZCA9PT0gc2VsZWN0ZWRQcm9qZWN0SWQuaWQpIHtcbiAgICAgIHByb2plY3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1saXN0Jyk7XG4gICAgfVxuICAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RFbGVtZW50KTtcbiAgfSk7XG59XG5cbi8vIFJlbmRlcnMgdGFza3MgZnJvbSBzZWxlY3RlZCB0YXNrIGxpc3RcbmZ1bmN0aW9uIHJlbmRlclRhc2tzKHNlbGVjdGVkTGlzdCkge1xuICAvLyBSZW5kZXIgZWFjaCB0YXNrIGluIGxpc3RcbiAgc2VsZWN0ZWRMaXN0LmZvckVhY2goKHRhc2spID0+IHtcbiAgICBjb25zdCB0YXNrRWxlbWVudCA9IGRvY3VtZW50LmltcG9ydE5vZGUodGFza1RlbXBsYXRlLmNvbnRlbnQsIHRydWUpO1xuICAgIGNvbnN0IGNoZWNrYm94ID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcbiAgICBjb25zdCBkdWUgPSB0YXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZHVlJyk7XG4gICAgY2hlY2tib3guaWQgPSB0YXNrLmlkO1xuICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQodGFzay5wcm9qZWN0KTtcbiAgICBjaGVja2JveC5jaGVja2VkID0gdGFzay5jb21wbGV0ZTtcbiAgICBjb25zdCBsYWJlbCA9IHRhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsJyk7XG4gICAgbGFiZWwuaHRtbEZvciA9IHRhc2suaWQ7XG4gICAgbGFiZWwuYXBwZW5kKHRhc2submFtZSk7XG4gICAgZHVlLnRleHRDb250ZW50ID0gdGFzay5kdWU7XG4gICAgdGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0VsZW1lbnQpO1xuICB9KTtcbn1cblxuLy8gUmVuZGVyIHRhc2tzIGZyb20gYWxsIHByb2plY3QgbGlzdHNcbmZ1bmN0aW9uIHNob3dBbGxUYXNrcygpIHtcbiAgcHJvamVjdHMubGlzdC5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgcmVuZGVyVGFza3MocHJvamVjdC50YXNrcyk7XG4gIH0pO1xufVxuXG4vLyBSZW5kZXIgc2NyZWVuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKCkge1xuICAvLyBDbGVhciBhbmQgc2V0IHByb2plY3QgbGlzdFxuICBjbGVhckVsZW1lbnQocHJvamVjdHNDb250YWluZXIpO1xuICAvLyBDbGVhciBleGlzdGluZyB0YXNrc1xuICBjbGVhckVsZW1lbnQodGFza3NDb250YWluZXIpO1xuICByZW5kZXJQcm9qZWN0cygpO1xuXG4gIGlmIChzZWxlY3RlZFByb2plY3RJZC5pZCA9PSBudWxsIHx8IHNlbGVjdGVkUHJvamVjdElkLmlkID09PSAnJykge1xuICAgIHRvZG9TZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH0gZWxzZSBpZiAoc2VsZWN0ZWRQcm9qZWN0SWQuaWQgPT09ICdob21lJykge1xuICAgIHRvZG9TZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICB0YXNrUHJvamVjdFRpdGxlLmlubmVyVGV4dCA9ICdIb21lJztcbiAgICBzaG93QWxsVGFza3MoKTtcbiAgfSBlbHNlIHtcbiAgICB0b2RvU2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgY29uc3QgcHJvamVjdCA9IGZpbmRQcm9qZWN0QnlJZChzZWxlY3RlZFByb2plY3RJZC5pZCk7XG4gICAgcmVuZGVyVGFza3MocHJvamVjdC50YXNrcyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVBbmRSZW5kZXIoKSB7XG4gIHNhdmUoKTtcbiAgcmVuZGVyKCk7XG59XG5cbi8vIEFzc2lnbiBwcm9qZWN0IG5hbWUgYW5kIHRhc2sgY291bnQgdG8gdGFzayBsaXN0XG5leHBvcnQgZnVuY3Rpb24gYXNzaWduUHJvamVjdExpc3QocHJvamVjdCkge1xuICAvLyBDbGVhciB0YXNrc1xuICBjbGVhckVsZW1lbnQodGFza3NDb250YWluZXIpO1xuXG4gIC8vIEFzc2lnbiBwcm9qZWN0IHRpdGxlIHRvIGxpc3RcbiAgdGFza1Byb2plY3RUaXRsZS5pbm5lclRleHQgPSBwcm9qZWN0Lm5hbWU7XG59XG5cbi8vIFJlZnJlc2ggcHJvamVjdCBuYW1lIGFuZCB0YXNrIGNvdW50ZXJcbmV4cG9ydCBmdW5jdGlvbiB0YXNrV2luZG93KHByb2plY3QpIHtcbiAgYXNzaWduUHJvamVjdExpc3QocHJvamVjdCk7XG4gIGFzc2lnblRhc2tDb3VudChwcm9qZWN0KTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbmFtZWRcbmltcG9ydCB7IHJlbmRlciwgc2F2ZUFuZFJlbmRlciwgdGFza1dpbmRvdyB9IGZyb20gJy4vd2luZG93JztcbmltcG9ydCB7IGFzc2lnblRhc2tDb3VudCwgY3JlYXRlVGFzaywgdGFza0NvdW50QWxsIH0gZnJvbSAnLi90YXNrcyc7XG5pbXBvcnQge1xuICBwcm9qZWN0cyxcbiAgc2VsZWN0ZWRQcm9qZWN0SWQsXG4gIGNyZWF0ZVByb2plY3QsXG4gIGZpbmRQcm9qZWN0QnlJZCxcbn0gZnJvbSAnLi9wcm9qZWN0cyc7XG4vLyBpbXBvcnQge2Zvcm1hdCwgcGFyc2VJU099IGZyb20gJ2RhdGUtZm5zJztcblxuLy8gQXNzaWduIERPTSB2YXJpYWJsZXNcbmNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcHJvamVjdHNdJyk7XG5jb25zdCBuZXdQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW5ldy1wcm9qZWN0LWZvcm0nKTtcbmNvbnN0IG5ld1Byb2plY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW5ldy1wcm9qZWN0LWlucHV0XScpO1xuY29uc3QgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS10YXNrcy1jb250YWluZXJdJyk7XG5jb25zdCBuZXdUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW5ldy10YXNrLWZvcm1dJyk7XG5jb25zdCBuZXdUYXNrSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1uZXctdGFzay1pbnB1dF0nKTtcbmNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1ob21lLWJ1dHRvbl0nKTtcbmNvbnN0IGNsZWFyQ29tcGxldGVUYXNrc0J1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAnW2RhdGEtY2xlYXItY29tcGxldGUtdGFza3MtYnV0dG9uXScsXG4pO1xuY29uc3QgZGVsZXRlTGlzdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWRlbGV0ZS1saXN0LWJ1dHRvbl0nKTtcblxuLy8gU2hvdyBhbGwgdGFza3Mgd2hlbiBIb21lIEJ1dHRvbiBjbGlja2VkXG5ob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBzZWxlY3RlZFByb2plY3RJZC5pZCA9ICdob21lJztcbiAgdGFza0NvdW50QWxsKCk7XG4gIHNhdmVBbmRSZW5kZXIoKTtcbn0pO1xuXG4vLyBTZWxlY3QgcHJvamVjdCB3aGVuIGNsaWNrZWRcbnByb2plY3RzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgLy8gVGFyZ2V0IGNsaWNrZWQgaXRlbXNcbiAgaWYgKGUudGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2xpJykge1xuICAgIC8vIERldGVybWluZSBpZCBvZiBjbGlja2VkIHByb2plY3RcbiAgICBzZWxlY3RlZFByb2plY3RJZC5pZCA9IGUudGFyZ2V0LmRhdGFzZXQucHJvamVjdElkO1xuXG4gICAgLy8gRmluZCBhbmQgYXNzaWduIHByb2plY3RcbiAgICBjb25zdCBwcm9qZWN0ID0gZmluZFByb2plY3RCeUlkKHNlbGVjdGVkUHJvamVjdElkLmlkKTtcblxuICAgIC8vIEFzc2lnbiBuYW1lIG9mIHByb2plY3QgYW5kIHRhc2sgbGlzdCBjb3VudFxuICAgIHRhc2tXaW5kb3cocHJvamVjdCk7XG4gICAgc2F2ZUFuZFJlbmRlcigpO1xuICB9XG59KTtcblxuLy8gdXBkYXRlIFRhc2sgY291bnQgd2hlbiB0YXNrIGNyb3NzZWQgb2ZmXG50YXNrc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIGlmIChlLnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdpbnB1dCcpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gZmluZFByb2plY3RCeUlkKGUudGFyZ2V0LmNsYXNzTmFtZSk7XG4gICAgY29uc3Qgc2VsZWN0ZWRUYXNrID0gcHJvamVjdC50YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLmlkID09PSBlLnRhcmdldC5pZCk7XG4gICAgc2VsZWN0ZWRUYXNrLmNvbXBsZXRlID0gZS50YXJnZXQuY2hlY2tlZDtcbiAgICBpZiAoc2VsZWN0ZWRQcm9qZWN0SWQuaWQgIT09ICdob21lJykge1xuICAgICAgYXNzaWduVGFza0NvdW50KHByb2plY3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YXNrQ291bnRBbGwoKTtcbiAgICB9XG4gIH1cbn0pO1xuXG4vLyBDbGVhciBjb21wbGV0ZWQgdGFza3Mgd2hlbiByZXF1ZXN0ZWRcbmNsZWFyQ29tcGxldGVUYXNrc0J1dHRvbnMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGNvbnN0IHNlbGVjdGVkTGlzdCA9IGZpbmRQcm9qZWN0QnlJZChzZWxlY3RlZFByb2plY3RJZC5pZCk7XG4gIHNlbGVjdGVkTGlzdC50YXNrcyA9IHNlbGVjdGVkTGlzdC50YXNrcy5maWx0ZXIoKHRhc2spID0+ICF0YXNrLmNvbXBsZXRlKTtcbiAgc2F2ZUFuZFJlbmRlcigpO1xufSk7XG5cbi8vIERlbGV0ZSBQcm9qZWN0IHdoZW4gcmVxdWVzdGVkXG5kZWxldGVMaXN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBwcm9qZWN0cy5saXN0ID0gcHJvamVjdHMubGlzdC5maWx0ZXIoXG4gICAgKHByb2plY3QpID0+IHByb2plY3QuaWQgIT09IHNlbGVjdGVkUHJvamVjdElkLmlkLFxuICApO1xuICBzZWxlY3RlZFByb2plY3RJZC5pZCA9IG51bGw7XG4gIHNhdmVBbmRSZW5kZXIoKTtcbn0pO1xuXG4vLyBDcmVhdGUgbmV3IHByb2plY3Qgd2hlbiBmb3JtIHN1Ym1pdHRlZFxubmV3UHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIC8vIEFzc2lnbiBmb3JtIGNvbnRlbnQgdG8gbmFtZVxuICBjb25zdCBwcm9qZWN0TmFtZSA9IG5ld1Byb2plY3RJbnB1dC52YWx1ZTtcblxuICAvLyBTdG9wIGlmIGZvcm0gZW1wdHlcbiAgaWYgKHByb2plY3ROYW1lID09IG51bGwgfHwgcHJvamVjdE5hbWUgPT09ICcnKSByZXR1cm47XG5cbiAgLy8gUHVzaCBwcm9qZWN0IHRvIGxpc3QgYW5kIGNsZWFyIGZvcm1cbiAgY29uc3QgcHJvamVjdCA9IGNyZWF0ZVByb2plY3QocHJvamVjdE5hbWUpO1xuICBuZXdQcm9qZWN0SW5wdXQudmFsdWUgPSBudWxsO1xuICBwcm9qZWN0cy5saXN0LnB1c2gocHJvamVjdCk7XG5cbiAgLy8gUmVuZGVyIHRhc2sgd2luZG93XG4gIHNlbGVjdGVkUHJvamVjdElkLmlkID0gcHJvamVjdC5pZDtcbiAgdGFza1dpbmRvdyhwcm9qZWN0KTtcblxuICBzYXZlQW5kUmVuZGVyKCk7XG59KTtcblxuLy8gQ3JlYXRlIG5ldyB0YXNrIHdoZW4gZm9ybSBzdWJtaXR0ZWRcbm5ld1Rhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcblxuICAvLyBBc3NpZ24gdGFzayBuYW1lIGFuZCBkdWUgZGF0ZVxuICBjb25zdCB0YXNrTmFtZSA9IG5ld1Rhc2tJbnB1dC52YWx1ZTtcbiAgLy8gY29uc3QgdGFza0R1ZSA9IG5ld1Rhc2tEYXRlSW5wdXQudmFsdWU7XG5cbiAgLy8gU3RvcCBpZiBmb3JtIGVtcHR5XG4gIGlmICh0YXNrTmFtZSA9PSBudWxsIHx8IHRhc2tOYW1lID09PSAnJykgcmV0dXJuO1xuXG4gIC8vIENyZWF0ZSB0YXNrIGlmIGZvcm0gZmlsbGVkXG4gIGNvbnN0IHRhc2sgPSBjcmVhdGVUYXNrKHRhc2tOYW1lKTtcblxuICAvLyBDbGVhciBmb3JtXG4gIG5ld1Rhc2tJbnB1dC52YWx1ZSA9IG51bGw7XG4gIC8vIG5ld1Rhc2tEYXRlSW5wdXQudmFsdWUgPSBudWxsXG5cbiAgLy8gQ2FjaGUgdGFza1xuICBjb25zdCBwcm9qZWN0ID0gZmluZFByb2plY3RCeUlkKHNlbGVjdGVkUHJvamVjdElkLmlkKTtcbiAgcHJvamVjdC50YXNrcy5wdXNoKHRhc2spO1xuXG4gIC8vIFJlbmRlciB0YXNrIHdpbmRvd1xuICBhc3NpZ25UYXNrQ291bnQocHJvamVjdCk7XG4gIHNhdmVBbmRSZW5kZXIoKTtcbn0pO1xuXG5yZW5kZXIoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==