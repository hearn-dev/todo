/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
      /*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js"
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js"
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js"
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__
          );
        // Imports

        var ___CSS_LOADER_URL_IMPORT_0___ = new URL(
          /* asset import */ __webpack_require__(
            /*! ./notebook.svg */ "./src/notebook.svg"
          ),
          __webpack_require__.b
        );
        var ___CSS_LOADER_URL_IMPORT_1___ = new URL(
          /* asset import */ __webpack_require__(
            /*! ./home.svg */ "./src/home.svg"
          ),
          __webpack_require__.b
        );
        var ___CSS_LOADER_URL_IMPORT_2___ = new URL(
          /* asset import */ __webpack_require__(
            /*! ./today.svg */ "./src/today.svg"
          ),
          __webpack_require__.b
        );
        var ___CSS_LOADER_URL_IMPORT_3___ = new URL(
          /* asset import */ __webpack_require__(
            /*! ./week.svg */ "./src/week.svg"
          ),
          __webpack_require__.b
        );
        var ___CSS_LOADER_EXPORT___ =
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        var ___CSS_LOADER_URL_REPLACEMENT_0___ =
          _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(
            ___CSS_LOADER_URL_IMPORT_0___
          );
        var ___CSS_LOADER_URL_REPLACEMENT_1___ =
          _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(
            ___CSS_LOADER_URL_IMPORT_1___
          );
        var ___CSS_LOADER_URL_REPLACEMENT_2___ =
          _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(
            ___CSS_LOADER_URL_IMPORT_2___
          );
        var ___CSS_LOADER_URL_REPLACEMENT_3___ =
          _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(
            ___CSS_LOADER_URL_IMPORT_3___
          );
        // Module
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          ':root {\n    --margin: 2vw;\n    --prm-green: #85dccfe1;\n    --accent-green: #41a3b3;\n    --dark-orange: #e27d60;\n    --light-orange: #e8a87c;\n    --clr-warning: #FF0000;\n}\n\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n    font-family: inherit;\n    margin: 0;\n    padding: 0;\n    max-width: 100%;\n}\n\nbody {\n    margin: 0;\n    font-family: monospace;\n    background-color: var(--prm-green);\n    display: grid;\n    grid:\n    "header header" auto\n    "menu   active" auto /\n    1fr 4fr;\n\n}\n\n\n.header {\n    grid-area: header;\n    background-color: var(--dark-orange);\n    display: flex;\n    height: 15vh;\n}\n\n.title-icon {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    margin-left: var(--margin);\n}\n\n.icon {\n    height: 8vh;\n    width: 6vw;\n    background:no-repeat center url(' +
            ___CSS_LOADER_URL_REPLACEMENT_0___ +
            ");\n    background-size: contain;\n    filter: invert(100%);\n    -webkit-filter: invert(100%);\n}\n\n.title {\n    color: white;\n    font-size: 8vh;\n    margin-left: 1vw;\n}\n\n.menu {\n    grid-area: menu;\n    background-color: var(--accent-green);\n    color: white;\n    height: 100vh;\n    margin-top: 0;\n}\n\n.menu-title {\n    padding-top: 10px;\n    margin-left: 20px;\n}\n\n.active-list {\n    font-size: 1rem;\n    font-weight: 900;\n    text-decoration: underline;\n    \n}\n\n.button:hover {\n    transform: scale(1.1);\n    cursor: pointer;\n}\n\n.project-item:hover {\n    cursor: pointer;\n    transform: none;\n    opacity: 0.7\n}\n\n.menu-options {\n    padding-top: var(--margin);\n    display: grid;\n    gap: 25px;\n    list-style: none;\n    justify-content: center;\n\n}\n\n.option {\n    width: 15vw;\n    height: 5vh;\n    background-color: var(--light-orange);\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    font-size: 1.3rem;\n}\n\n.home-icon {\n    background: no-repeat center url(" +
            ___CSS_LOADER_URL_REPLACEMENT_1___ +
            ");\n}\n\n.today-icon {\n    background: no-repeat center url(" +
            ___CSS_LOADER_URL_REPLACEMENT_2___ +
            ");\n}\n\n.week-icon {\n    background: no-repeat center url(" +
            ___CSS_LOADER_URL_REPLACEMENT_3___ +
            ');\n}\n\n.projects-title {\n    margin: 20px;\n    margin-bottom: 15px;\n    font-size: 1.4rem;\n}\n\n.projects {\n    display: grid;\n    gap: 10px;\n    color: white;\n}\n\n.project-item {\n    margin-left: 35px;\n}\n\n.task-list {\n    font-size: 1.2rem;\n    line-height: 1.7;\n    list-style: circle;\n    padding-left: 1.1em;\n}\n\nform {\n    display: flex;\n    align-items: flex-end;\n    margin-top: 10px;\n}\n\n\n.btn {\n    cursor: pointer;\n    background: 0;\n    border: 0;\n    padding: 0;\n    color: inherit;\n    font-size: 1rem;\n}\n\n.btn.create {\n    font-size: 1.5rem;\n    font-weight: 900;\n    margin-right: .25rem;\n    transition: opacity 250ms ease-in;\n    margin: 0 0 3px 20px;\n    font-size: 1rem;\n    \n}\n\n.btn.task {\n    margin-left: 0;\n}\n\n.btn.create:hover {\n    opacity: 0.7;\n}\n\n.btn.delete {\n    font-weight: 700;\n    letter-spacing: 1px;\n    opacity: .7;\n    font-size: 1rem;\n    transition: color 200ms;\n}\n\n.btn.delete:hover {\n    color: var(--clr-warning)\n}\n\n.new {\n    background: transparent;\n    border: 0;\n    color: inherit;\n    border-bottom: 1px solid currentColor;\n    font-size: inherit;\n    outline: none;\n    transition: border-bottom 250ms ease-in;\n    order: 2;\n}\n\n\n.new::placeholder,\n.date::placeholder {\n    color: inherit;\n    opacity: .5;\n}\n\n.new:focus,\n.date:focus {\n    border-bottom-width: 3px;\n}\n\n.new:focus::placeholder,\n.date:focus::placeholder {\n    opacity: .2\n}\n\n.new.list,\n.new.task {\n    margin: 0 10px 0px 10px;\n    width: 15vw;\n    margin-top: 8px;\n    padding: .35em;\n}\n\n.todo-list {\n    --spacer: 2rem;\n\n    grid-area: active;\n    margin: 20px 20px 0 50px;\n}\n\n.todo-header {\n    padding: var(--spacer);\n    background-color: var(--light-orange);\n    color: white;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.list-title {\n    margin: 0 1rem 0 0;\n}\n\n.task-count {\n    margin: 0;\n    font-size: .85rem;\n}\n\n.todo-body {\n    padding: var(--spacer);\n    background-color: white;\n    color: var(--accent-green);\n    position: relative;\n}\n\n.new-task-creator .create {\n    color: var(--dark-orange)\n}\n\n[type="checkbox"] {\n    opacity: 0;\n    position: absolute;\n}\n\n.task > * {\n    cursor: pointer;\n}\n\n.task label {\n    display: inline-flex;\n    align-items: center;\n    position: relative;\n    gap: 15px;\n}\n\n.task {\n    position: relative;\n    margin-bottom: 1.25em;\n}\n\n.task::after {\n    content:"";\n    position: absolute;\n    right: 0;\n    left: 0;\n    bottom: -.5em;\n    height: 1px;\n    background: currentColor;\n    opacity: .1;\n}\n\n.custom-checkbox {\n    --size: .75em;\n    display: inline-block;\n    width: var(--size);\n    height: var(--size);\n    margin-right: var(--size);\n    border: 2px solid currentColor;\n    border-radius: 50%;\n    transform: scale(1);\n    transition: transform 200ms ease-in-out;\n}\n\n.task:hover .custom-checkbox,\n[type="checkbox"]:focus + label .custom-checkbox{\n    transform: scale(1.2);\n    color: var(--prm-green)\n}\n\n[type="checkbox"]:checked + label .custom-checkbox {\n    background: var(--accent-green);\n    border-color: var(--accent-green);\n    box-shadow: inset 0 0 0px 1px white;\n}\n\n[type="checkbox"]:checked + label,\n[type="checkbox"]:checked + .due {\n    opacity: 0.5;\n\n}\n\n.task label::after {\n    content: "";\n    position: absolute;\n    left: 2.5em;\n    right: 0;\n    top: calc(50% - 1px);\n    height: 2px;\n    background: currentColor;\n    transform: scaleX(0);\n    transform-origin: right;\n    transition: transform 150ms ease-in-out;\n}\n\n[type="checkbox"]:checked + label::after {\n    transform: scaleX(1);\n    transform-origin: left;\n}\n\n\n.delete-stuff {\n    display: flex;\n    justify-content: space-evenly;\n    position: absolute;\n    width: 100%;\n    left: 0;\n    bottom: -35px;\n    color: var(--accent-green);\n}\n\n',
          "",
          {
            version: 3,
            sources: ["webpack://./src/style.css"],
            names: [],
            mappings:
              "AAAA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,sBAAsB;IACtB,uBAAuB;IACvB,sBAAsB;AAC1B;;AAEA;;;IAGI,sBAAsB;IACtB,oBAAoB;IACpB,SAAS;IACT,UAAU;IACV,eAAe;AACnB;;AAEA;IACI,SAAS;IACT,sBAAsB;IACtB,kCAAkC;IAClC,aAAa;IACb;;;WAGO;;AAEX;;;AAGA;IACI,iBAAiB;IACjB,oCAAoC;IACpC,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,2BAA2B;IAC3B,mBAAmB;IACnB,0BAA0B;AAC9B;;AAEA;IACI,WAAW;IACX,UAAU;IACV,mEAAiD;IACjD,wBAAwB;IACxB,oBAAoB;IACpB,4BAA4B;AAChC;;AAEA;IACI,YAAY;IACZ,cAAc;IACd,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,qCAAqC;IACrC,YAAY;IACZ,aAAa;IACb,aAAa;AACjB;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,0BAA0B;;AAE9B;;AAEA;IACI,qBAAqB;IACrB,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,eAAe;IACf;AACJ;;AAEA;IACI,0BAA0B;IAC1B,aAAa;IACb,SAAS;IACT,gBAAgB;IAChB,uBAAuB;;AAE3B;;AAEA;IACI,WAAW;IACX,WAAW;IACX,qCAAqC;IACrC,aAAa;IACb,2BAA2B;IAC3B,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,oEAA8C;AAClD;;AAEA;IACI,oEAA+C;AACnD;;AAEA;IACI,oEAA8C;AAClD;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,SAAS;IACT,YAAY;AAChB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,gBAAgB;AACpB;;;AAGA;IACI,eAAe;IACf,aAAa;IACb,SAAS;IACT,UAAU;IACV,cAAc;IACd,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,oBAAoB;IACpB,iCAAiC;IACjC,oBAAoB;IACpB,eAAe;;AAEnB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,mBAAmB;IACnB,WAAW;IACX,eAAe;IACf,uBAAuB;AAC3B;;AAEA;IACI;AACJ;;AAEA;IACI,uBAAuB;IACvB,SAAS;IACT,cAAc;IACd,qCAAqC;IACrC,kBAAkB;IAClB,aAAa;IACb,uCAAuC;IACvC,QAAQ;AACZ;;;AAGA;;IAEI,cAAc;IACd,WAAW;AACf;;AAEA;;IAEI,wBAAwB;AAC5B;;AAEA;;IAEI;AACJ;;AAEA;;IAEI,uBAAuB;IACvB,WAAW;IACX,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,cAAc;;IAEd,iBAAiB;IACjB,wBAAwB;AAC5B;;AAEA;IACI,sBAAsB;IACtB,qCAAqC;IACrC,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,8BAA8B;AAClC;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,SAAS;IACT,iBAAiB;AACrB;;AAEA;IACI,sBAAsB;IACtB,uBAAuB;IACvB,0BAA0B;IAC1B,kBAAkB;AACtB;;AAEA;IACI;AACJ;;AAEA;IACI,UAAU;IACV,kBAAkB;AACtB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,oBAAoB;IACpB,mBAAmB;IACnB,kBAAkB;IAClB,SAAS;AACb;;AAEA;IACI,kBAAkB;IAClB,qBAAqB;AACzB;;AAEA;IACI,UAAU;IACV,kBAAkB;IAClB,QAAQ;IACR,OAAO;IACP,aAAa;IACb,WAAW;IACX,wBAAwB;IACxB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,kBAAkB;IAClB,mBAAmB;IACnB,yBAAyB;IACzB,8BAA8B;IAC9B,kBAAkB;IAClB,mBAAmB;IACnB,uCAAuC;AAC3C;;AAEA;;IAEI,qBAAqB;IACrB;AACJ;;AAEA;IACI,+BAA+B;IAC/B,iCAAiC;IACjC,mCAAmC;AACvC;;AAEA;;IAEI,YAAY;;AAEhB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,WAAW;IACX,QAAQ;IACR,oBAAoB;IACpB,WAAW;IACX,wBAAwB;IACxB,oBAAoB;IACpB,uBAAuB;IACvB,uCAAuC;AAC3C;;AAEA;IACI,oBAAoB;IACpB,sBAAsB;AAC1B;;;AAGA;IACI,aAAa;IACb,6BAA6B;IAC7B,kBAAkB;IAClB,WAAW;IACX,OAAO;IACP,aAAa;IACb,0BAA0B;AAC9B",
            sourcesContent: [
              ':root {\n    --margin: 2vw;\n    --prm-green: #85dccfe1;\n    --accent-green: #41a3b3;\n    --dark-orange: #e27d60;\n    --light-orange: #e8a87c;\n    --clr-warning: #FF0000;\n}\n\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n    font-family: inherit;\n    margin: 0;\n    padding: 0;\n    max-width: 100%;\n}\n\nbody {\n    margin: 0;\n    font-family: monospace;\n    background-color: var(--prm-green);\n    display: grid;\n    grid:\n    "header header" auto\n    "menu   active" auto /\n    1fr 4fr;\n\n}\n\n\n.header {\n    grid-area: header;\n    background-color: var(--dark-orange);\n    display: flex;\n    height: 15vh;\n}\n\n.title-icon {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    margin-left: var(--margin);\n}\n\n.icon {\n    height: 8vh;\n    width: 6vw;\n    background:no-repeat center url(\'./notebook.svg\');\n    background-size: contain;\n    filter: invert(100%);\n    -webkit-filter: invert(100%);\n}\n\n.title {\n    color: white;\n    font-size: 8vh;\n    margin-left: 1vw;\n}\n\n.menu {\n    grid-area: menu;\n    background-color: var(--accent-green);\n    color: white;\n    height: 100vh;\n    margin-top: 0;\n}\n\n.menu-title {\n    padding-top: 10px;\n    margin-left: 20px;\n}\n\n.active-list {\n    font-size: 1rem;\n    font-weight: 900;\n    text-decoration: underline;\n    \n}\n\n.button:hover {\n    transform: scale(1.1);\n    cursor: pointer;\n}\n\n.project-item:hover {\n    cursor: pointer;\n    transform: none;\n    opacity: 0.7\n}\n\n.menu-options {\n    padding-top: var(--margin);\n    display: grid;\n    gap: 25px;\n    list-style: none;\n    justify-content: center;\n\n}\n\n.option {\n    width: 15vw;\n    height: 5vh;\n    background-color: var(--light-orange);\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    font-size: 1.3rem;\n}\n\n.home-icon {\n    background: no-repeat center url(\'./home.svg\');\n}\n\n.today-icon {\n    background: no-repeat center url(\'./today.svg\');\n}\n\n.week-icon {\n    background: no-repeat center url(\'./week.svg\');\n}\n\n.projects-title {\n    margin: 20px;\n    margin-bottom: 15px;\n    font-size: 1.4rem;\n}\n\n.projects {\n    display: grid;\n    gap: 10px;\n    color: white;\n}\n\n.project-item {\n    margin-left: 35px;\n}\n\n.task-list {\n    font-size: 1.2rem;\n    line-height: 1.7;\n    list-style: circle;\n    padding-left: 1.1em;\n}\n\nform {\n    display: flex;\n    align-items: flex-end;\n    margin-top: 10px;\n}\n\n\n.btn {\n    cursor: pointer;\n    background: 0;\n    border: 0;\n    padding: 0;\n    color: inherit;\n    font-size: 1rem;\n}\n\n.btn.create {\n    font-size: 1.5rem;\n    font-weight: 900;\n    margin-right: .25rem;\n    transition: opacity 250ms ease-in;\n    margin: 0 0 3px 20px;\n    font-size: 1rem;\n    \n}\n\n.btn.task {\n    margin-left: 0;\n}\n\n.btn.create:hover {\n    opacity: 0.7;\n}\n\n.btn.delete {\n    font-weight: 700;\n    letter-spacing: 1px;\n    opacity: .7;\n    font-size: 1rem;\n    transition: color 200ms;\n}\n\n.btn.delete:hover {\n    color: var(--clr-warning)\n}\n\n.new {\n    background: transparent;\n    border: 0;\n    color: inherit;\n    border-bottom: 1px solid currentColor;\n    font-size: inherit;\n    outline: none;\n    transition: border-bottom 250ms ease-in;\n    order: 2;\n}\n\n\n.new::placeholder,\n.date::placeholder {\n    color: inherit;\n    opacity: .5;\n}\n\n.new:focus,\n.date:focus {\n    border-bottom-width: 3px;\n}\n\n.new:focus::placeholder,\n.date:focus::placeholder {\n    opacity: .2\n}\n\n.new.list,\n.new.task {\n    margin: 0 10px 0px 10px;\n    width: 15vw;\n    margin-top: 8px;\n    padding: .35em;\n}\n\n.todo-list {\n    --spacer: 2rem;\n\n    grid-area: active;\n    margin: 20px 20px 0 50px;\n}\n\n.todo-header {\n    padding: var(--spacer);\n    background-color: var(--light-orange);\n    color: white;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.list-title {\n    margin: 0 1rem 0 0;\n}\n\n.task-count {\n    margin: 0;\n    font-size: .85rem;\n}\n\n.todo-body {\n    padding: var(--spacer);\n    background-color: white;\n    color: var(--accent-green);\n    position: relative;\n}\n\n.new-task-creator .create {\n    color: var(--dark-orange)\n}\n\n[type="checkbox"] {\n    opacity: 0;\n    position: absolute;\n}\n\n.task > * {\n    cursor: pointer;\n}\n\n.task label {\n    display: inline-flex;\n    align-items: center;\n    position: relative;\n    gap: 15px;\n}\n\n.task {\n    position: relative;\n    margin-bottom: 1.25em;\n}\n\n.task::after {\n    content:"";\n    position: absolute;\n    right: 0;\n    left: 0;\n    bottom: -.5em;\n    height: 1px;\n    background: currentColor;\n    opacity: .1;\n}\n\n.custom-checkbox {\n    --size: .75em;\n    display: inline-block;\n    width: var(--size);\n    height: var(--size);\n    margin-right: var(--size);\n    border: 2px solid currentColor;\n    border-radius: 50%;\n    transform: scale(1);\n    transition: transform 200ms ease-in-out;\n}\n\n.task:hover .custom-checkbox,\n[type="checkbox"]:focus + label .custom-checkbox{\n    transform: scale(1.2);\n    color: var(--prm-green)\n}\n\n[type="checkbox"]:checked + label .custom-checkbox {\n    background: var(--accent-green);\n    border-color: var(--accent-green);\n    box-shadow: inset 0 0 0px 1px white;\n}\n\n[type="checkbox"]:checked + label,\n[type="checkbox"]:checked + .due {\n    opacity: 0.5;\n\n}\n\n.task label::after {\n    content: "";\n    position: absolute;\n    left: 2.5em;\n    right: 0;\n    top: calc(50% - 1px);\n    height: 2px;\n    background: currentColor;\n    transform: scaleX(0);\n    transform-origin: right;\n    transition: transform 150ms ease-in-out;\n}\n\n[type="checkbox"]:checked + label::after {\n    transform: scaleX(1);\n    transform-origin: left;\n}\n\n\n.delete-stuff {\n    display: flex;\n    justify-content: space-evenly;\n    position: absolute;\n    width: 100%;\n    left: 0;\n    bottom: -35px;\n    color: var(--accent-green);\n}\n\n',
            ],
            sourceRoot: "",
          },
        ]);
        // Exports
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ___CSS_LOADER_EXPORT___;

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/api.js":
      /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
      /***/ (module) => {
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
                content += "@layer".concat(
                  item[5].length > 0 ? " ".concat(item[5]) : "",
                  " {"
                );
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
                  item[1] = "@layer"
                    .concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {")
                    .concat(item[1], "}");
                  item[5] = layer;
                }
              }

              if (media) {
                if (!item[2]) {
                  item[2] = media;
                } else {
                  item[1] = "@media "
                    .concat(item[2], " {")
                    .concat(item[1], "}");
                  item[2] = media;
                }
              }

              if (supports) {
                if (!item[4]) {
                  item[4] = "".concat(supports);
                } else {
                  item[1] = "@supports ("
                    .concat(item[4], ") {")
                    .concat(item[1], "}");
                  item[4] = supports;
                }
              }

              list.push(item);
            }
          };

          return list;
        };

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
      /*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
      /***/ (module) => {
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
            return '"'.concat(
              url.replace(/"/g, '\\"').replace(/\n/g, "\\n"),
              '"'
            );
          }

          return url;
        };

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
      /*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
      /***/ (module) => {
        module.exports = function (item) {
          var content = item[1];
          var cssMapping = item[3];

          if (!cssMapping) {
            return content;
          }

          if (typeof btoa === "function") {
            var base64 = btoa(
              unescape(encodeURIComponent(JSON.stringify(cssMapping)))
            );
            var data =
              "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                base64
              );
            var sourceMapping = "/*# ".concat(data, " */");
            var sourceURLs = cssMapping.sources.map(function (source) {
              return "/*# sourceURL="
                .concat(cssMapping.sourceRoot || "")
                .concat(source, " */");
            });
            return [content]
              .concat(sourceURLs)
              .concat([sourceMapping])
              .join("\n");
          }

          return [content].join("\n");
        };

        /***/
      },

    /***/ "./src/style.css":
      /*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__
          );
        /* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css"
          );

        var options = {};

        options.styleTagTransform =
          _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
        options.setAttributes =
          _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();

        options.insert =
          _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(
            null,
            "head"
          );

        options.domAPI =
          _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
        options.insertStyleElement =
          _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();

        var update =
          _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(
            _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
              "default"
            ],
            options
          );

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
            "default"
          ] &&
          _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
            "default"
          ].locals
            ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
                "default"
              ].locals
            : undefined;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
      /***/ (module) => {
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
              layer: item[5],
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
                references: 1,
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
              if (
                newObj.css === obj.css &&
                newObj.media === obj.media &&
                newObj.sourceMap === obj.sourceMap &&
                newObj.supports === obj.supports &&
                newObj.layer === obj.layer
              ) {
                return;
              }

              api.update((obj = newObj));
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

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
      /*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
      /***/ (module) => {
        var memo = {};
        /* istanbul ignore next  */

        function getTarget(target) {
          if (typeof memo[target] === "undefined") {
            var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

            if (
              window.HTMLIFrameElement &&
              styleTarget instanceof window.HTMLIFrameElement
            ) {
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
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          }

          target.appendChild(style);
        }

        module.exports = insertBySelector;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
      /***/ (module) => {
        /* istanbul ignore next  */
        function insertStyleElement(options) {
          var element = document.createElement("style");
          options.setAttributes(element, options.attributes);
          options.insert(element, options.options);
          return element;
        }

        module.exports = insertStyleElement;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
      /*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        /* istanbul ignore next  */
        function setAttributesWithoutAttributes(styleElement) {
          var nonce = true ? __webpack_require__.nc : 0;

          if (nonce) {
            styleElement.setAttribute("nonce", nonce);
          }
        }

        module.exports = setAttributesWithoutAttributes;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
      /*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
      /***/ (module) => {
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
            css += "@layer".concat(
              obj.layer.length > 0 ? " ".concat(obj.layer) : "",
              " {"
            );
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
            css +=
              "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))),
                " */"
              );
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
            },
          };
        }

        module.exports = domAPI;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
      /*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
      /***/ (module) => {
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

        /***/
      },

    /***/ "./src/projects.js":
      /*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ createProject: () => /* binding */ createProject,
          /* harmony export */ findProjectById: () =>
            /* binding */ findProjectById,
          /* harmony export */ projects: () => /* binding */ projects,
          /* harmony export */ selectedProjectId: () =>
            /* binding */ selectedProjectId,
          /* harmony export */
        });
        /* eslint-disable import/no-mutable-exports */
        // Initialize projects folder
        const projects = { list: [] };

        const selectedProjectId = { id: "" };

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

        /***/
      },

    /***/ "./src/tasks.js":
      /*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ assignTaskCount: () =>
            /* binding */ assignTaskCount,
          /* harmony export */ createTask: () => /* binding */ createTask,
          /* harmony export */
        });
        /* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./projects */ "./src/projects.js");

        const taskCount = document.querySelector("[data-task-counter]");

        // Assign task count
        function assignTaskCount(project) {
          let incomplete = project.tasks.filter(
            (task) => !task.complete
          ).length;

          if (
            _projects__WEBPACK_IMPORTED_MODULE_0__.selectedProjectId === "home"
          ) {
            incomplete =
              _projects__WEBPACK_IMPORTED_MODULE_0__.projects.list.forEach(
                (listItem) => {
                  // eslint-disable-next-line no-undef
                  listItem.tasks.filter(
                    task.filter((task) => !task.complete).length
                  );
                }
              );
          }
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
            project:
              _projects__WEBPACK_IMPORTED_MODULE_0__.selectedProjectId.id,
          };
        }

        /***/
      },

    /***/ "./src/window.js":
      /*!***********************!*\
  !*** ./src/window.js ***!
  \***********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ assignProjectList: () =>
            /* binding */ assignProjectList,
          /* harmony export */ render: () => /* binding */ render,
          /* harmony export */ renderProjects: () =>
            /* binding */ renderProjects,
          /* harmony export */ taskWindow: () => /* binding */ taskWindow,
          /* harmony export */
        });
        /* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./projects */ "./src/projects.js");
        /* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./tasks */ "./src/tasks.js");

        const projectsContainer = document.querySelector("[data-projects]");
        const todoSection = document.querySelector("[data-todo]");
        const tasksContainer = document.querySelector("[data-tasks-container]");
        const taskProjectTitle = document.querySelector("[data-project-title]");
        // const newTaskDateInput = document.querySelector('[data-new-task-date-input]');
        const taskTemplate = document.getElementById("task-template");

        // Clear container of all children
        function clearElement(element) {
          while (element.firstChild) {
            element.removeChild(element.firstChild);
          }
        }

        // Renders project list
        function renderProjects() {
          // Add each project to projectList
          _projects__WEBPACK_IMPORTED_MODULE_0__.projects.list.forEach(
            (project) => {
              const projectElement = document.createElement("li");
              projectElement.dataset.projectId = project.id;
              projectElement.classList.add("project-item");
              projectElement.innerText = project.name;
              if (
                projectElement.dataset.projectId ===
                _projects__WEBPACK_IMPORTED_MODULE_0__.selectedProjectId.id
              ) {
                projectElement.classList.add("active-list");
              }
              projectsContainer.appendChild(projectElement);
            }
          );
        }

        // Renders tasks from selected task list
        function renderTasks(selectedList) {
          // Render each task in list
          selectedList.forEach((task) => {
            const taskElement = document.importNode(taskTemplate.content, true);
            const checkbox = taskElement.querySelector("input");
            const due = taskElement.querySelector(".due");
            checkbox.id = task.id;
            checkbox.classList.add(task.project);
            checkbox.checked = task.complete;
            const label = taskElement.querySelector("label");
            label.htmlFor = task.id;
            label.append(task.name);
            due.textContent = task.due;
            tasksContainer.appendChild(taskElement);
          });
        }

        // Render tasks from all project lists
        function showAllTasks() {
          _projects__WEBPACK_IMPORTED_MODULE_0__.projects.list.forEach(
            (project) => {
              renderTasks(project.tasks);
            }
          );
        }

        // Render screen
        function render() {
          // Clear and set project list
          clearElement(projectsContainer);
          // Clear existing tasks
          clearElement(tasksContainer);
          renderProjects();

          if (
            _projects__WEBPACK_IMPORTED_MODULE_0__.selectedProjectId.id ==
              null ||
            _projects__WEBPACK_IMPORTED_MODULE_0__.selectedProjectId.id === ""
          ) {
            todoSection.style.display = "none";
          } else if (
            _projects__WEBPACK_IMPORTED_MODULE_0__.selectedProjectId.id ===
            "home"
          ) {
            todoSection.style.display = "";
            taskProjectTitle.innerText = "Home";
            showAllTasks();
          } else {
            todoSection.style.display = "";
            const project = (0,
            _projects__WEBPACK_IMPORTED_MODULE_0__.findProjectById)(
              _projects__WEBPACK_IMPORTED_MODULE_0__.selectedProjectId.id
            );
            renderTasks(project.tasks);
          }
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
          (0, _tasks__WEBPACK_IMPORTED_MODULE_1__.assignTaskCount)(project);
        }

        /***/
      },

    /***/ "./src/home.svg":
      /*!**********************!*\
  !*** ./src/home.svg ***!
  \**********************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = __webpack_require__.p + "f873234c93d19c837bd8.svg";

        /***/
      },

    /***/ "./src/notebook.svg":
      /*!**************************!*\
  !*** ./src/notebook.svg ***!
  \**************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = __webpack_require__.p + "829131dbe68a15408157.svg";

        /***/
      },

    /***/ "./src/today.svg":
      /*!***********************!*\
  !*** ./src/today.svg ***!
  \***********************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = __webpack_require__.p + "026599f9eca46bc8f47e.svg";

        /***/
      },

    /***/ "./src/week.svg":
      /*!**********************!*\
  !*** ./src/week.svg ***!
  \**********************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = __webpack_require__.p + "9b3a8c5393486225ddc6.svg";

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ id: moduleId,
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/ __webpack_require__.m = __webpack_modules__;
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module["default"]
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/global */
  /******/ (() => {
    /******/ __webpack_require__.g = (function () {
      /******/ if (typeof globalThis === "object") return globalThis;
      /******/ try {
        /******/ return this || new Function("return this")();
        /******/
      } catch (e) {
        /******/ if (typeof window === "object") return window;
        /******/
      }
      /******/
    })();
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/publicPath */
  /******/ (() => {
    /******/ var scriptUrl;
    /******/ if (__webpack_require__.g.importScripts)
      scriptUrl = __webpack_require__.g.location + "";
    /******/ var document = __webpack_require__.g.document;
    /******/ if (!scriptUrl && document) {
      /******/ if (document.currentScript)
        /******/ scriptUrl = document.currentScript.src;
      /******/ if (!scriptUrl) {
        /******/ var scripts = document.getElementsByTagName("script");
        /******/ if (scripts.length)
          scriptUrl = scripts[scripts.length - 1].src;
        /******/
      }
      /******/
    }
    /******/ // When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
    /******/ // or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
    /******/ if (!scriptUrl)
      throw new Error("Automatic publicPath is not supported in this browser");
    /******/ scriptUrl = scriptUrl
      .replace(/#.*$/, "")
      .replace(/\?.*$/, "")
      .replace(/\/[^\/]+$/, "/");
    /******/ __webpack_require__.p = scriptUrl;
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/jsonp chunk loading */
  /******/ (() => {
    /******/ __webpack_require__.b = document.baseURI || self.location.href;
    /******/
    /******/ // object to store loaded and loading chunks
    /******/ // undefined = chunk not loaded, null = chunk preloaded/prefetched
    /******/ // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
    /******/ var installedChunks = {
      /******/ main: 0,
      /******/
    };
    /******/
    /******/ // no chunk on demand loading
    /******/
    /******/ // no prefetching
    /******/
    /******/ // no preloaded
    /******/
    /******/ // no HMR
    /******/
    /******/ // no HMR manifest
    /******/
    /******/ // no on chunks loaded
    /******/
    /******/ // no jsonp function
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/nonce */
  /******/ (() => {
    /******/ __webpack_require__.nc = undefined;
    /******/
  })();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  (() => {
    /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(/*! ./style.css */ "./src/style.css");
    /* harmony import */ var _window__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(/*! ./window */ "./src/window.js");
    /* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_2__ =
      __webpack_require__(/*! ./tasks */ "./src/tasks.js");
    /* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_3__ =
      __webpack_require__(/*! ./projects */ "./src/projects.js");

    // import {format, parseISO} from 'date-fns';

    // Assign DOM variables
    const projectsContainer = document.querySelector("[data-projects]");
    const newProjectForm = document.querySelector("[data-new-project-form");
    const newProjectInput = document.querySelector("[data-new-project-input]");
    const tasksContainer = document.querySelector("[data-tasks-container]");
    const newTaskForm = document.querySelector("[data-new-task-form]");
    const newTaskInput = document.querySelector("[data-new-task-input]");
    const homeButton = document.querySelector("[data-home-button]");
    const clearCompleteTasksButtons = document.querySelector(
      "[data-clear-complete-tasks-button]"
    );
    const deleteListButton = document.querySelector(
      "[data-delete-list-button]"
    );

    // Show all tasks when Home Button clicked
    homeButton.addEventListener("click", () => {
      _projects__WEBPACK_IMPORTED_MODULE_3__.selectedProjectId.id = "home";
      (0, _window__WEBPACK_IMPORTED_MODULE_1__.render)();
    });

    // Select project when clicked
    projectsContainer.addEventListener("click", (e) => {
      // Target clicked items
      if (e.target.tagName.toLowerCase() === "li") {
        // Determine id of clicked project
        _projects__WEBPACK_IMPORTED_MODULE_3__.selectedProjectId.id =
          e.target.dataset.projectId;

        // Find and assign project
        const project = (0,
        _projects__WEBPACK_IMPORTED_MODULE_3__.findProjectById)(
          _projects__WEBPACK_IMPORTED_MODULE_3__.selectedProjectId.id
        );

        // Assign name of project and task list count
        (0, _window__WEBPACK_IMPORTED_MODULE_1__.taskWindow)(project);
        (0, _window__WEBPACK_IMPORTED_MODULE_1__.render)();
      }
    });

    // update Task count when task crossed off
    tasksContainer.addEventListener("click", (e) => {
      if (e.target.tagName.toLowerCase() === "input") {
        const project = (0,
        _projects__WEBPACK_IMPORTED_MODULE_3__.findProjectById)(
          e.target.className
        );
        const selectedTask = project.tasks.find(
          (task) => task.id === e.target.id
        );
        selectedTask.complete = e.target.checked;
        (0, _tasks__WEBPACK_IMPORTED_MODULE_2__.assignTaskCount)(project);
      }
    });

    // Clear completed tasks when requested
    clearCompleteTasksButtons.addEventListener("click", () => {
      const selectedList = (0,
      _projects__WEBPACK_IMPORTED_MODULE_3__.findProjectById)(
        _projects__WEBPACK_IMPORTED_MODULE_3__.selectedProjectId.id
      );
      selectedList.tasks = selectedList.tasks.filter((task) => !task.complete);
      (0, _window__WEBPACK_IMPORTED_MODULE_1__.render)();
    });

    // Delete Project when requested
    deleteListButton.addEventListener("click", () => {
      _projects__WEBPACK_IMPORTED_MODULE_3__.projects.list =
        _projects__WEBPACK_IMPORTED_MODULE_3__.projects.list.filter(
          (project) =>
            project.id !==
            _projects__WEBPACK_IMPORTED_MODULE_3__.selectedProjectId.id
        );
      _projects__WEBPACK_IMPORTED_MODULE_3__.selectedProjectId.id = null;
      (0, _window__WEBPACK_IMPORTED_MODULE_1__.render)();
    });

    // Create new project when form submitted
    newProjectForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // Assign form content to name
      const projectName = newProjectInput.value;

      // Stop if form empty
      if (projectName == null || projectName === "") return;

      // Push project to list and clear form
      const project = (0, _projects__WEBPACK_IMPORTED_MODULE_3__.createProject)(
        projectName
      );
      newProjectInput.value = null;
      _projects__WEBPACK_IMPORTED_MODULE_3__.projects.list.push(project);

      // Render task window
      _projects__WEBPACK_IMPORTED_MODULE_3__.selectedProjectId.id = project.id;
      (0, _window__WEBPACK_IMPORTED_MODULE_1__.taskWindow)(project);

      (0, _window__WEBPACK_IMPORTED_MODULE_1__.render)();
    });

    // Create new task when form submitted
    newTaskForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // Assign task name and due date
      const taskName = newTaskInput.value;
      // const taskDue = newTaskDateInput.value;

      // Stop if form empty
      if (taskName == null || taskName === "") return;

      // Create task if form filled
      const task = (0, _tasks__WEBPACK_IMPORTED_MODULE_2__.createTask)(
        taskName
      );

      // Clear form
      newTaskInput.value = null;
      // newTaskDateInput.value = null

      // Cache task
      const project = (0,
      _projects__WEBPACK_IMPORTED_MODULE_3__.findProjectById)(
        _projects__WEBPACK_IMPORTED_MODULE_3__.selectedProjectId.id
      );
      project.tasks.push(task);

      // Render task window
      (0, _tasks__WEBPACK_IMPORTED_MODULE_2__.assignTaskCount)(project);
      (0, _window__WEBPACK_IMPORTED_MODULE_1__.render)();
    });

    (0, _window__WEBPACK_IMPORTED_MODULE_1__.render)();
  })();

  /******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLHdEQUFhO0FBQy9CO0FBQ0EsRUFBRSx5REFBa0I7O0FBRXBCO0FBQ0EsRUFBRSwyREFBb0I7QUFDdEIsRUFBRSxtREFBVTs7QUFFWixFQUFFLCtDQUFNO0FBQ1IsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLGtEQUFVOztBQUV6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsMERBQWUsQ0FBQywyREFBb0I7QUFDdEQ7O0FBRUE7QUFDQSxFQUFFLHVEQUFlO0FBQ2pCLEVBQUUsK0NBQU07QUFDUixDQUFDOztBQUVELCtDQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy93aW5kb3cuanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL25vdGVib29rLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaG9tZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL3RvZGF5LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vd2Vlay5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tbWFyZ2luOiAydnc7XFxuICAgIC0tcHJtLWdyZWVuOiAjODVkY2NmZTE7XFxuICAgIC0tYWNjZW50LWdyZWVuOiAjNDFhM2IzO1xcbiAgICAtLWRhcmstb3JhbmdlOiAjZTI3ZDYwO1xcbiAgICAtLWxpZ2h0LW9yYW5nZTogI2U4YTg3YztcXG4gICAgLS1jbHItd2FybmluZzogI0ZGMDAwMDtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBybS1ncmVlbik7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQ6XFxuICAgIFxcXCJoZWFkZXIgaGVhZGVyXFxcIiBhdXRvXFxuICAgIFxcXCJtZW51ICAgYWN0aXZlXFxcIiBhdXRvIC9cXG4gICAgMWZyIDRmcjtcXG5cXG59XFxuXFxuXFxuLmhlYWRlciB7XFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLW9yYW5nZSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogMTV2aDtcXG59XFxuXFxuLnRpdGxlLWljb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiB2YXIoLS1tYXJnaW4pO1xcbn1cXG5cXG4uaWNvbiB7XFxuICAgIGhlaWdodDogOHZoO1xcbiAgICB3aWR0aDogNnZ3O1xcbiAgICBiYWNrZ3JvdW5kOm5vLXJlcGVhdCBjZW50ZXIgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKTtcXG4gICAgLXdlYmtpdC1maWx0ZXI6IGludmVydCgxMDAlKTtcXG59XFxuXFxuLnRpdGxlIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDh2aDtcXG4gICAgbWFyZ2luLWxlZnQ6IDF2dztcXG59XFxuXFxuLm1lbnUge1xcbiAgICBncmlkLWFyZWE6IG1lbnU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1ncmVlbik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG59XFxuXFxuLm1lbnUtdGl0bGUge1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxufVxcblxcbi5hY3RpdmUtbGlzdCB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIFxcbn1cXG5cXG4uYnV0dG9uOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW06aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zZm9ybTogbm9uZTtcXG4gICAgb3BhY2l0eTogMC43XFxufVxcblxcbi5tZW51LW9wdGlvbnMge1xcbiAgICBwYWRkaW5nLXRvcDogdmFyKC0tbWFyZ2luKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAyNXB4O1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG59XFxuXFxuLm9wdGlvbiB7XFxuICAgIHdpZHRoOiAxNXZ3O1xcbiAgICBoZWlnaHQ6IDV2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtb3JhbmdlKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLmhvbWUtaWNvbiB7XFxuICAgIGJhY2tncm91bmQ6IG5vLXJlcGVhdCBjZW50ZXIgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG59XFxuXFxuLnRvZGF5LWljb24ge1xcbiAgICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQgY2VudGVyIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxufVxcblxcbi53ZWVrLWljb24ge1xcbiAgICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQgY2VudGVyIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxufVxcblxcbi5wcm9qZWN0cy10aXRsZSB7XFxuICAgIG1hcmdpbjogMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxufVxcblxcbi5wcm9qZWN0cyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMTBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDM1cHg7XFxufVxcblxcbi50YXNrLWxpc3Qge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNztcXG4gICAgbGlzdC1zdHlsZTogY2lyY2xlO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEuMWVtO1xcbn1cXG5cXG5mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG5cXG4uYnRuIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kOiAwO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5idG4uY3JlYXRlIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIG1hcmdpbi1yaWdodDogLjI1cmVtO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDI1MG1zIGVhc2UtaW47XFxuICAgIG1hcmdpbjogMCAwIDNweCAyMHB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIFxcbn1cXG5cXG4uYnRuLnRhc2sge1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG59XFxuXFxuLmJ0bi5jcmVhdGU6aG92ZXIge1xcbiAgICBvcGFjaXR5OiAwLjc7XFxufVxcblxcbi5idG4uZGVsZXRlIHtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gICAgb3BhY2l0eTogLjc7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMjAwbXM7XFxufVxcblxcbi5idG4uZGVsZXRlOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLWNsci13YXJuaW5nKVxcbn1cXG5cXG4ubmV3IHtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBjdXJyZW50Q29sb3I7XFxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbSAyNTBtcyBlYXNlLWluO1xcbiAgICBvcmRlcjogMjtcXG59XFxuXFxuXFxuLm5ldzo6cGxhY2Vob2xkZXIsXFxuLmRhdGU6OnBsYWNlaG9sZGVyIHtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIG9wYWNpdHk6IC41O1xcbn1cXG5cXG4ubmV3OmZvY3VzLFxcbi5kYXRlOmZvY3VzIHtcXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogM3B4O1xcbn1cXG5cXG4ubmV3OmZvY3VzOjpwbGFjZWhvbGRlcixcXG4uZGF0ZTpmb2N1czo6cGxhY2Vob2xkZXIge1xcbiAgICBvcGFjaXR5OiAuMlxcbn1cXG5cXG4ubmV3Lmxpc3QsXFxuLm5ldy50YXNrIHtcXG4gICAgbWFyZ2luOiAwIDEwcHggMHB4IDEwcHg7XFxuICAgIHdpZHRoOiAxNXZ3O1xcbiAgICBtYXJnaW4tdG9wOiA4cHg7XFxuICAgIHBhZGRpbmc6IC4zNWVtO1xcbn1cXG5cXG4udG9kby1saXN0IHtcXG4gICAgLS1zcGFjZXI6IDJyZW07XFxuXFxuICAgIGdyaWQtYXJlYTogYWN0aXZlO1xcbiAgICBtYXJnaW46IDIwcHggMjBweCAwIDUwcHg7XFxufVxcblxcbi50b2RvLWhlYWRlciB7XFxuICAgIHBhZGRpbmc6IHZhcigtLXNwYWNlcik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LW9yYW5nZSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ubGlzdC10aXRsZSB7XFxuICAgIG1hcmdpbjogMCAxcmVtIDAgMDtcXG59XFxuXFxuLnRhc2stY291bnQge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtc2l6ZTogLjg1cmVtO1xcbn1cXG5cXG4udG9kby1ib2R5IHtcXG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2VyKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtZ3JlZW4pO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5uZXctdGFzay1jcmVhdG9yIC5jcmVhdGUge1xcbiAgICBjb2xvcjogdmFyKC0tZGFyay1vcmFuZ2UpXFxufVxcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4udGFzayA+ICoge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrIGxhYmVsIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4udGFzayB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMS4yNWVtO1xcbn1cXG5cXG4udGFzazo6YWZ0ZXIge1xcbiAgICBjb250ZW50OlxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBib3R0b206IC0uNWVtO1xcbiAgICBoZWlnaHQ6IDFweDtcXG4gICAgYmFja2dyb3VuZDogY3VycmVudENvbG9yO1xcbiAgICBvcGFjaXR5OiAuMTtcXG59XFxuXFxuLmN1c3RvbS1jaGVja2JveCB7XFxuICAgIC0tc2l6ZTogLjc1ZW07XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IHZhcigtLXNpemUpO1xcbiAgICBoZWlnaHQ6IHZhcigtLXNpemUpO1xcbiAgICBtYXJnaW4tcmlnaHQ6IHZhcigtLXNpemUpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBjdXJyZW50Q29sb3I7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDIwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4udGFzazpob3ZlciAuY3VzdG9tLWNoZWNrYm94LFxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmZvY3VzICsgbGFiZWwgLmN1c3RvbS1jaGVja2JveHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgICBjb2xvcjogdmFyKC0tcHJtLWdyZWVuKVxcbn1cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgbGFiZWwgLmN1c3RvbS1jaGVja2JveCB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1ncmVlbik7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYWNjZW50LWdyZWVuKTtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDBweCAxcHggd2hpdGU7XFxufVxcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyBsYWJlbCxcXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgLmR1ZSB7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG5cXG59XFxuXFxuLnRhc2sgbGFiZWw6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMi41ZW07XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IGNhbGMoNTAlIC0gMXB4KTtcXG4gICAgaGVpZ2h0OiAycHg7XFxuICAgIGJhY2tncm91bmQ6IGN1cnJlbnRDb2xvcjtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0O1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTUwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyBsYWJlbDo6YWZ0ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcXG59XFxuXFxuXFxuLmRlbGV0ZS1zdHVmZiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBib3R0b206IC0zNXB4O1xcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LWdyZWVuKTtcXG59XFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsc0JBQXNCO0FBQzFCOztBQUVBOzs7SUFHSSxzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsa0NBQWtDO0lBQ2xDLGFBQWE7SUFDYjs7O1dBR087O0FBRVg7OztBQUdBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9DQUFvQztJQUNwQyxhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsbUJBQW1C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O0lBQ2xCLFFBQVE7SUFDUixPQUFPO0lBQ1AsYUFBYTtJQUNiLFdBQVc7SUFDWCx3QkFBd0I7SUFDeEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6Qiw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix1Q0FBdUM7QUFDM0M7O0FBRUE7O0lBRUkscUJBQXFCO0lBQ3JCO0FBQ0o7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsaUNBQWlDO0lBQ2pDLG1DQUFtQztBQUN2Qzs7QUFFQTs7SUFFSSxZQUFZOztBQUVoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFFBQVE7SUFDUixvQkFBb0I7SUFDcEIsV0FBVztJQUNYLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixzQkFBc0I7QUFDMUI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLE9BQU87SUFDUCxhQUFhO0lBQ2IsMEJBQTBCO0FBQzlCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1tYXJnaW46IDJ2dztcXG4gICAgLS1wcm0tZ3JlZW46ICM4NWRjY2ZlMTtcXG4gICAgLS1hY2NlbnQtZ3JlZW46ICM0MWEzYjM7XFxuICAgIC0tZGFyay1vcmFuZ2U6ICNlMjdkNjA7XFxuICAgIC0tbGlnaHQtb3JhbmdlOiAjZThhODdjO1xcbiAgICAtLWNsci13YXJuaW5nOiAjRkYwMDAwO1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJtLWdyZWVuKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZDpcXG4gICAgXFxcImhlYWRlciBoZWFkZXJcXFwiIGF1dG9cXG4gICAgXFxcIm1lbnUgICBhY3RpdmVcXFwiIGF1dG8gL1xcbiAgICAxZnIgNGZyO1xcblxcbn1cXG5cXG5cXG4uaGVhZGVyIHtcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstb3JhbmdlKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAxNXZoO1xcbn1cXG5cXG4udGl0bGUtaWNvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWxlZnQ6IHZhcigtLW1hcmdpbik7XFxufVxcblxcbi5pY29uIHtcXG4gICAgaGVpZ2h0OiA4dmg7XFxuICAgIHdpZHRoOiA2dnc7XFxuICAgIGJhY2tncm91bmQ6bm8tcmVwZWF0IGNlbnRlciB1cmwoJy4vbm90ZWJvb2suc3ZnJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSk7XFxuICAgIC13ZWJraXQtZmlsdGVyOiBpbnZlcnQoMTAwJSk7XFxufVxcblxcbi50aXRsZSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiA4dmg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxdnc7XFxufVxcblxcbi5tZW51IHtcXG4gICAgZ3JpZC1hcmVhOiBtZW51O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtZ3JlZW4pO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxufVxcblxcbi5tZW51LXRpdGxlIHtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbn1cXG5cXG4uYWN0aXZlLWxpc3Qge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBcXG59XFxuXFxuLmJ1dHRvbjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2Zvcm06IG5vbmU7XFxuICAgIG9wYWNpdHk6IDAuN1xcbn1cXG5cXG4ubWVudS1vcHRpb25zIHtcXG4gICAgcGFkZGluZy10b3A6IHZhcigtLW1hcmdpbik7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMjVweDtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxufVxcblxcbi5vcHRpb24ge1xcbiAgICB3aWR0aDogMTV2dztcXG4gICAgaGVpZ2h0OiA1dmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LW9yYW5nZSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi5ob21lLWljb24ge1xcbiAgICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQgY2VudGVyIHVybCgnLi9ob21lLnN2ZycpO1xcbn1cXG5cXG4udG9kYXktaWNvbiB7XFxuICAgIGJhY2tncm91bmQ6IG5vLXJlcGVhdCBjZW50ZXIgdXJsKCcuL3RvZGF5LnN2ZycpO1xcbn1cXG5cXG4ud2Vlay1pY29uIHtcXG4gICAgYmFja2dyb3VuZDogbm8tcmVwZWF0IGNlbnRlciB1cmwoJy4vd2Vlay5zdmcnKTtcXG59XFxuXFxuLnByb2plY3RzLXRpdGxlIHtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG59XFxuXFxuLnByb2plY3RzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0ge1xcbiAgICBtYXJnaW4tbGVmdDogMzVweDtcXG59XFxuXFxuLnRhc2stbGlzdCB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBsaW5lLWhlaWdodDogMS43O1xcbiAgICBsaXN0LXN0eWxlOiBjaXJjbGU7XFxuICAgIHBhZGRpbmctbGVmdDogMS4xZW07XFxufVxcblxcbmZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcblxcbi5idG4ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IDA7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmJ0bi5jcmVhdGUge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAuMjVyZW07XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMjUwbXMgZWFzZS1pbjtcXG4gICAgbWFyZ2luOiAwIDAgM3B4IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgXFxufVxcblxcbi5idG4udGFzayB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcbn1cXG5cXG4uYnRuLmNyZWF0ZTpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDAuNztcXG59XFxuXFxuLmJ0bi5kZWxldGUge1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgICBvcGFjaXR5OiAuNztcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAyMDBtcztcXG59XFxuXFxuLmJ0bi5kZWxldGU6aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tY2xyLXdhcm5pbmcpXFxufVxcblxcbi5uZXcge1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tIDI1MG1zIGVhc2UtaW47XFxuICAgIG9yZGVyOiAyO1xcbn1cXG5cXG5cXG4ubmV3OjpwbGFjZWhvbGRlcixcXG4uZGF0ZTo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgb3BhY2l0eTogLjU7XFxufVxcblxcbi5uZXc6Zm9jdXMsXFxuLmRhdGU6Zm9jdXMge1xcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAzcHg7XFxufVxcblxcbi5uZXc6Zm9jdXM6OnBsYWNlaG9sZGVyLFxcbi5kYXRlOmZvY3VzOjpwbGFjZWhvbGRlciB7XFxuICAgIG9wYWNpdHk6IC4yXFxufVxcblxcbi5uZXcubGlzdCxcXG4ubmV3LnRhc2sge1xcbiAgICBtYXJnaW46IDAgMTBweCAwcHggMTBweDtcXG4gICAgd2lkdGg6IDE1dnc7XFxuICAgIG1hcmdpbi10b3A6IDhweDtcXG4gICAgcGFkZGluZzogLjM1ZW07XFxufVxcblxcbi50b2RvLWxpc3Qge1xcbiAgICAtLXNwYWNlcjogMnJlbTtcXG5cXG4gICAgZ3JpZC1hcmVhOiBhY3RpdmU7XFxuICAgIG1hcmdpbjogMjBweCAyMHB4IDAgNTBweDtcXG59XFxuXFxuLnRvZG8taGVhZGVyIHtcXG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2VyKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtb3JhbmdlKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5saXN0LXRpdGxlIHtcXG4gICAgbWFyZ2luOiAwIDFyZW0gMCAwO1xcbn1cXG5cXG4udGFzay1jb3VudCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1zaXplOiAuODVyZW07XFxufVxcblxcbi50b2RvLWJvZHkge1xcbiAgICBwYWRkaW5nOiB2YXIoLS1zcGFjZXIpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6IHZhcigtLWFjY2VudC1ncmVlbik7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLm5ldy10YXNrLWNyZWF0b3IgLmNyZWF0ZSB7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrLW9yYW5nZSlcXG59XFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi50YXNrID4gKiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2sgbGFiZWwge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbi50YXNrIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxLjI1ZW07XFxufVxcblxcbi50YXNrOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6XFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJvdHRvbTogLS41ZW07XFxuICAgIGhlaWdodDogMXB4O1xcbiAgICBiYWNrZ3JvdW5kOiBjdXJyZW50Q29sb3I7XFxuICAgIG9wYWNpdHk6IC4xO1xcbn1cXG5cXG4uY3VzdG9tLWNoZWNrYm94IHtcXG4gICAgLS1zaXplOiAuNzVlbTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogdmFyKC0tc2l6ZSk7XFxuICAgIGhlaWdodDogdmFyKC0tc2l6ZSk7XFxuICAgIG1hcmdpbi1yaWdodDogdmFyKC0tc2l6ZSk7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi50YXNrOmhvdmVyIC5jdXN0b20tY2hlY2tib3gsXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl06Zm9jdXMgKyBsYWJlbCAuY3VzdG9tLWNoZWNrYm94e1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICAgIGNvbG9yOiB2YXIoLS1wcm0tZ3JlZW4pXFxufVxcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyBsYWJlbCAuY3VzdG9tLWNoZWNrYm94IHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWdyZWVuKTtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY2NlbnQtZ3JlZW4pO1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMHB4IDFweCB3aGl0ZTtcXG59XFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVsLFxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyAuZHVlIHtcXG4gICAgb3BhY2l0eTogMC41O1xcblxcbn1cXG5cXG4udGFzayBsYWJlbDo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAyLjVlbTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogY2FsYyg1MCUgLSAxcHgpO1xcbiAgICBoZWlnaHQ6IDJweDtcXG4gICAgYmFja2dyb3VuZDogY3VycmVudENvbG9yO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxNTBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVsOjphZnRlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xcbn1cXG5cXG5cXG4uZGVsZXRlLXN0dWZmIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJvdHRvbTogLTM1cHg7XFxuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtZ3JlZW4pO1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLW11dGFibGUtZXhwb3J0cyAqL1xuLy8gSW5pdGlhbGl6ZSBwcm9qZWN0cyBmb2xkZXJcbmV4cG9ydCBjb25zdCBwcm9qZWN0cyA9IHsgbGlzdDogW10gfTtcblxuZXhwb3J0IGNvbnN0IHNlbGVjdGVkUHJvamVjdElkID0geyBpZDogJycgfTtcblxuLy8gSW5pdGlhbGl6ZSBuZXcgcHJvamVjdHMgd2l0aCB1bmlxdWUgaWRcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KG5hbWUpIHtcbiAgcmV0dXJuIHsgaWQ6IERhdGUubm93KCkudG9TdHJpbmcoKSwgbmFtZSwgdGFza3M6IFtdIH07XG59XG5cbi8vIEZpbmQgcHJvamVjdCBpbiBhcnJheSBiYXNlZCBvbiBJRFxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRQcm9qZWN0QnlJZChwcm9qZWN0SWQpIHtcbiAgY29uc3QgeyBsaXN0IH0gPSBwcm9qZWN0cztcbiAgY29uc3QgcHJvamVjdCA9IGxpc3QuZmluZCgobGlzdEl0ZW0pID0+IGxpc3RJdGVtLmlkID09PSBwcm9qZWN0SWQpO1xuICByZXR1cm4gcHJvamVjdDtcbn1cbiIsImltcG9ydCB7IHNlbGVjdGVkUHJvamVjdElkLCBwcm9qZWN0cyB9IGZyb20gJy4vcHJvamVjdHMnO1xuXG5jb25zdCB0YXNrQ291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS10YXNrLWNvdW50ZXJdJyk7XG5cbi8vIEFzc2lnbiB0YXNrIGNvdW50XG5leHBvcnQgZnVuY3Rpb24gYXNzaWduVGFza0NvdW50KHByb2plY3QpIHtcbiAgbGV0IGluY29tcGxldGUgPSBwcm9qZWN0LnRhc2tzLmZpbHRlcigodGFzaykgPT4gIXRhc2suY29tcGxldGUpLmxlbmd0aDtcblxuICBpZiAoc2VsZWN0ZWRQcm9qZWN0SWQgPT09ICdob21lJykge1xuICAgIGluY29tcGxldGUgPSBwcm9qZWN0cy5saXN0LmZvckVhY2goKGxpc3RJdGVtKSA9PiB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICAgIGxpc3RJdGVtLnRhc2tzLmZpbHRlcih0YXNrLmZpbHRlcigodGFzaykgPT4gIXRhc2suY29tcGxldGUpLmxlbmd0aCk7XG4gICAgfSk7XG4gIH1cbiAgLy8gQ291bnQgdGFza3MgaW4gcHJvamVjdFxuICBpZiAoaW5jb21wbGV0ZSA9PT0gMSkge1xuICAgIHRhc2tDb3VudC5pbm5lclRleHQgPSBgJHtpbmNvbXBsZXRlfSB0YXNrIHJlbWFpbmluZ2A7XG4gIH0gZWxzZSB7XG4gICAgdGFza0NvdW50LmlubmVyVGV4dCA9IGAke2luY29tcGxldGV9IHRhc2tzIHJlbWFpbmluZ2A7XG4gIH1cbn1cblxuLy8gRXhhY3RseSBhcyB0aGUgdGl0bGUgc2F5c1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhc2sodGFza05hbWUsIGR1ZSkge1xuICByZXR1cm4ge1xuICAgIGlkOiBEYXRlLm5vdygpLnRvU3RyaW5nKCksIG5hbWU6IHRhc2tOYW1lLCBkdWUsIGNvbXBsZXRlOiBmYWxzZSwgcHJvamVjdDogc2VsZWN0ZWRQcm9qZWN0SWQuaWQsXG4gIH07XG59XG4iLCJpbXBvcnQgeyBwcm9qZWN0cywgc2VsZWN0ZWRQcm9qZWN0SWQsIGZpbmRQcm9qZWN0QnlJZCB9IGZyb20gJy4vcHJvamVjdHMnO1xuaW1wb3J0IHsgYXNzaWduVGFza0NvdW50IH0gZnJvbSAnLi90YXNrcyc7XG5cbmNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcHJvamVjdHNdJyk7XG5jb25zdCB0b2RvU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRvZG9dJyk7XG5jb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRhc2tzLWNvbnRhaW5lcl0nKTtcbmNvbnN0IHRhc2tQcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wcm9qZWN0LXRpdGxlXScpO1xuLy8gY29uc3QgbmV3VGFza0RhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW5ldy10YXNrLWRhdGUtaW5wdXRdJyk7XG5jb25zdCB0YXNrVGVtcGxhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay10ZW1wbGF0ZScpO1xuXG4vLyBDbGVhciBjb250YWluZXIgb2YgYWxsIGNoaWxkcmVuXG5mdW5jdGlvbiBjbGVhckVsZW1lbnQoZWxlbWVudCkge1xuICB3aGlsZSAoZWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmZpcnN0Q2hpbGQpO1xuICB9XG59XG5cbi8vIFJlbmRlcnMgcHJvamVjdCBsaXN0XG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyUHJvamVjdHMoKSB7XG4gIC8vIEFkZCBlYWNoIHByb2plY3QgdG8gcHJvamVjdExpc3RcbiAgcHJvamVjdHMubGlzdC5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgcHJvamVjdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIHByb2plY3RFbGVtZW50LmRhdGFzZXQucHJvamVjdElkID0gcHJvamVjdC5pZDtcbiAgICBwcm9qZWN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWl0ZW0nKTtcbiAgICBwcm9qZWN0RWxlbWVudC5pbm5lclRleHQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgaWYgKHByb2plY3RFbGVtZW50LmRhdGFzZXQucHJvamVjdElkID09PSBzZWxlY3RlZFByb2plY3RJZC5pZCkge1xuICAgICAgcHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLWxpc3QnKTtcbiAgICB9XG4gICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEVsZW1lbnQpO1xuICB9KTtcbn1cblxuLy8gUmVuZGVycyB0YXNrcyBmcm9tIHNlbGVjdGVkIHRhc2sgbGlzdFxuZnVuY3Rpb24gcmVuZGVyVGFza3Moc2VsZWN0ZWRMaXN0KSB7XG4gIC8vIFJlbmRlciBlYWNoIHRhc2sgaW4gbGlzdFxuICBzZWxlY3RlZExpc3QuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGNvbnN0IHRhc2tFbGVtZW50ID0gZG9jdW1lbnQuaW1wb3J0Tm9kZSh0YXNrVGVtcGxhdGUuY29udGVudCwgdHJ1ZSk7XG4gICAgY29uc3QgY2hlY2tib3ggPSB0YXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICAgIGNvbnN0IGR1ZSA9IHRhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kdWUnKTtcbiAgICBjaGVja2JveC5pZCA9IHRhc2suaWQ7XG4gICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCh0YXNrLnByb2plY3QpO1xuICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0YXNrLmNvbXBsZXRlO1xuICAgIGNvbnN0IGxhYmVsID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcignbGFiZWwnKTtcbiAgICBsYWJlbC5odG1sRm9yID0gdGFzay5pZDtcbiAgICBsYWJlbC5hcHBlbmQodGFzay5uYW1lKTtcbiAgICBkdWUudGV4dENvbnRlbnQgPSB0YXNrLmR1ZTtcbiAgICB0YXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRWxlbWVudCk7XG4gIH0pO1xufVxuXG4vLyBSZW5kZXIgdGFza3MgZnJvbSBhbGwgcHJvamVjdCBsaXN0c1xuZnVuY3Rpb24gc2hvd0FsbFRhc2tzKCkge1xuICBwcm9qZWN0cy5saXN0LmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICByZW5kZXJUYXNrcyhwcm9qZWN0LnRhc2tzKTtcbiAgfSk7XG59XG5cbi8vIFJlbmRlciBzY3JlZW5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIC8vIENsZWFyIGFuZCBzZXQgcHJvamVjdCBsaXN0XG4gIGNsZWFyRWxlbWVudChwcm9qZWN0c0NvbnRhaW5lcik7XG4gIC8vIENsZWFyIGV4aXN0aW5nIHRhc2tzXG4gIGNsZWFyRWxlbWVudCh0YXNrc0NvbnRhaW5lcik7XG4gIHJlbmRlclByb2plY3RzKCk7XG5cbiAgaWYgKHNlbGVjdGVkUHJvamVjdElkLmlkID09IG51bGwgfHwgc2VsZWN0ZWRQcm9qZWN0SWQuaWQgPT09ICcnKSB7XG4gICAgdG9kb1NlY3Rpb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfSBlbHNlIGlmIChzZWxlY3RlZFByb2plY3RJZC5pZCA9PT0gJ2hvbWUnKSB7XG4gICAgdG9kb1NlY3Rpb24uc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgIHRhc2tQcm9qZWN0VGl0bGUuaW5uZXJUZXh0ID0gJ0hvbWUnO1xuICAgIHNob3dBbGxUYXNrcygpO1xuICB9IGVsc2Uge1xuICAgIHRvZG9TZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICBjb25zdCBwcm9qZWN0ID0gZmluZFByb2plY3RCeUlkKHNlbGVjdGVkUHJvamVjdElkLmlkKTtcbiAgICByZW5kZXJUYXNrcyhwcm9qZWN0LnRhc2tzKTtcbiAgfVxufVxuXG4vLyBBc3NpZ24gcHJvamVjdCBuYW1lIGFuZCB0YXNrIGNvdW50IHRvIHRhc2sgbGlzdFxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnblByb2plY3RMaXN0KHByb2plY3QpIHtcbiAgLy8gQ2xlYXIgdGFza3NcbiAgY2xlYXJFbGVtZW50KHRhc2tzQ29udGFpbmVyKTtcblxuICAvLyBBc3NpZ24gcHJvamVjdCB0aXRsZSB0byBsaXN0XG4gIHRhc2tQcm9qZWN0VGl0bGUuaW5uZXJUZXh0ID0gcHJvamVjdC5uYW1lO1xufVxuXG4vLyBSZWZyZXNoIHByb2plY3QgbmFtZSBhbmQgdGFzayBjb3VudGVyXG5leHBvcnQgZnVuY3Rpb24gdGFza1dpbmRvdyhwcm9qZWN0KSB7XG4gIGFzc2lnblByb2plY3RMaXN0KHByb2plY3QpO1xuICBhc3NpZ25UYXNrQ291bnQocHJvamVjdCk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyByZW5kZXIsIHRhc2tXaW5kb3cgfSBmcm9tICcuL3dpbmRvdyc7XG5pbXBvcnQgeyBhc3NpZ25UYXNrQ291bnQsIGNyZWF0ZVRhc2sgfSBmcm9tICcuL3Rhc2tzJztcbmltcG9ydCB7XG4gIHByb2plY3RzLCBzZWxlY3RlZFByb2plY3RJZCwgY3JlYXRlUHJvamVjdCwgZmluZFByb2plY3RCeUlkLFxufSBmcm9tICcuL3Byb2plY3RzJztcbi8vIGltcG9ydCB7Zm9ybWF0LCBwYXJzZUlTT30gZnJvbSAnZGF0ZS1mbnMnO1xuXG4vLyBBc3NpZ24gRE9NIHZhcmlhYmxlc1xuY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wcm9qZWN0c10nKTtcbmNvbnN0IG5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtbmV3LXByb2plY3QtZm9ybScpO1xuY29uc3QgbmV3UHJvamVjdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtbmV3LXByb2plY3QtaW5wdXRdJyk7XG5jb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRhc2tzLWNvbnRhaW5lcl0nKTtcbmNvbnN0IG5ld1Rhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtbmV3LXRhc2stZm9ybV0nKTtcbmNvbnN0IG5ld1Rhc2tJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW5ldy10YXNrLWlucHV0XScpO1xuY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWhvbWUtYnV0dG9uXScpO1xuY29uc3QgY2xlYXJDb21wbGV0ZVRhc2tzQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWNsZWFyLWNvbXBsZXRlLXRhc2tzLWJ1dHRvbl0nKTtcbmNvbnN0IGRlbGV0ZUxpc3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1kZWxldGUtbGlzdC1idXR0b25dJyk7XG5cbi8vIFNob3cgYWxsIHRhc2tzIHdoZW4gSG9tZSBCdXR0b24gY2xpY2tlZFxuaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgc2VsZWN0ZWRQcm9qZWN0SWQuaWQgPSAnaG9tZSc7XG4gIHJlbmRlcigpO1xufSk7XG5cbi8vIFNlbGVjdCBwcm9qZWN0IHdoZW4gY2xpY2tlZFxucHJvamVjdHNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAvLyBUYXJnZXQgY2xpY2tlZCBpdGVtc1xuICBpZiAoZS50YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnbGknKSB7XG4gICAgLy8gRGV0ZXJtaW5lIGlkIG9mIGNsaWNrZWQgcHJvamVjdFxuICAgIHNlbGVjdGVkUHJvamVjdElkLmlkID0gZS50YXJnZXQuZGF0YXNldC5wcm9qZWN0SWQ7XG5cbiAgICAvLyBGaW5kIGFuZCBhc3NpZ24gcHJvamVjdFxuICAgIGNvbnN0IHByb2plY3QgPSBmaW5kUHJvamVjdEJ5SWQoc2VsZWN0ZWRQcm9qZWN0SWQuaWQpO1xuXG4gICAgLy8gQXNzaWduIG5hbWUgb2YgcHJvamVjdCBhbmQgdGFzayBsaXN0IGNvdW50XG4gICAgdGFza1dpbmRvdyhwcm9qZWN0KTtcbiAgICByZW5kZXIoKTtcbiAgfVxufSk7XG5cbi8vIHVwZGF0ZSBUYXNrIGNvdW50IHdoZW4gdGFzayBjcm9zc2VkIG9mZlxudGFza3NDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBpZiAoZS50YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaW5wdXQnKSB7XG4gICAgY29uc3QgcHJvamVjdCA9IGZpbmRQcm9qZWN0QnlJZChlLnRhcmdldC5jbGFzc05hbWUpO1xuICAgIGNvbnN0IHNlbGVjdGVkVGFzayA9IHByb2plY3QudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5pZCA9PT0gZS50YXJnZXQuaWQpO1xuICAgIHNlbGVjdGVkVGFzay5jb21wbGV0ZSA9IGUudGFyZ2V0LmNoZWNrZWQ7XG4gICAgYXNzaWduVGFza0NvdW50KHByb2plY3QpO1xuICB9XG59KTtcblxuLy8gQ2xlYXIgY29tcGxldGVkIHRhc2tzIHdoZW4gcmVxdWVzdGVkXG5jbGVhckNvbXBsZXRlVGFza3NCdXR0b25zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjb25zdCBzZWxlY3RlZExpc3QgPSBmaW5kUHJvamVjdEJ5SWQoc2VsZWN0ZWRQcm9qZWN0SWQuaWQpO1xuICBzZWxlY3RlZExpc3QudGFza3MgPSBzZWxlY3RlZExpc3QudGFza3MuZmlsdGVyKCh0YXNrKSA9PiAhdGFzay5jb21wbGV0ZSk7XG4gIHJlbmRlcigpO1xufSk7XG5cbi8vIERlbGV0ZSBQcm9qZWN0IHdoZW4gcmVxdWVzdGVkXG5kZWxldGVMaXN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBwcm9qZWN0cy5saXN0ID0gcHJvamVjdHMubGlzdC5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3QuaWQgIT09IHNlbGVjdGVkUHJvamVjdElkLmlkKTtcbiAgc2VsZWN0ZWRQcm9qZWN0SWQuaWQgPSBudWxsO1xuICByZW5kZXIoKTtcbn0pO1xuXG4vLyBDcmVhdGUgbmV3IHByb2plY3Qgd2hlbiBmb3JtIHN1Ym1pdHRlZFxubmV3UHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIC8vIEFzc2lnbiBmb3JtIGNvbnRlbnQgdG8gbmFtZVxuICBjb25zdCBwcm9qZWN0TmFtZSA9IG5ld1Byb2plY3RJbnB1dC52YWx1ZTtcblxuICAvLyBTdG9wIGlmIGZvcm0gZW1wdHlcbiAgaWYgKHByb2plY3ROYW1lID09IG51bGwgfHwgcHJvamVjdE5hbWUgPT09ICcnKSByZXR1cm47XG5cbiAgLy8gUHVzaCBwcm9qZWN0IHRvIGxpc3QgYW5kIGNsZWFyIGZvcm1cbiAgY29uc3QgcHJvamVjdCA9IGNyZWF0ZVByb2plY3QocHJvamVjdE5hbWUpO1xuICBuZXdQcm9qZWN0SW5wdXQudmFsdWUgPSBudWxsO1xuICBwcm9qZWN0cy5saXN0LnB1c2gocHJvamVjdCk7XG5cbiAgLy8gUmVuZGVyIHRhc2sgd2luZG93XG4gIHNlbGVjdGVkUHJvamVjdElkLmlkID0gcHJvamVjdC5pZDtcbiAgdGFza1dpbmRvdyhwcm9qZWN0KTtcblxuICByZW5kZXIoKTtcbn0pO1xuXG4vLyBDcmVhdGUgbmV3IHRhc2sgd2hlbiBmb3JtIHN1Ym1pdHRlZFxubmV3VGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIC8vIEFzc2lnbiB0YXNrIG5hbWUgYW5kIGR1ZSBkYXRlXG4gIGNvbnN0IHRhc2tOYW1lID0gbmV3VGFza0lucHV0LnZhbHVlO1xuICAvLyBjb25zdCB0YXNrRHVlID0gbmV3VGFza0RhdGVJbnB1dC52YWx1ZTtcblxuICAvLyBTdG9wIGlmIGZvcm0gZW1wdHlcbiAgaWYgKHRhc2tOYW1lID09IG51bGwgfHwgdGFza05hbWUgPT09ICcnKSByZXR1cm47XG5cbiAgLy8gQ3JlYXRlIHRhc2sgaWYgZm9ybSBmaWxsZWRcbiAgY29uc3QgdGFzayA9IGNyZWF0ZVRhc2sodGFza05hbWUpO1xuXG4gIC8vIENsZWFyIGZvcm1cbiAgbmV3VGFza0lucHV0LnZhbHVlID0gbnVsbDtcbiAgLy8gbmV3VGFza0RhdGVJbnB1dC52YWx1ZSA9IG51bGxcblxuICAvLyBDYWNoZSB0YXNrXG4gIGNvbnN0IHByb2plY3QgPSBmaW5kUHJvamVjdEJ5SWQoc2VsZWN0ZWRQcm9qZWN0SWQuaWQpO1xuICBwcm9qZWN0LnRhc2tzLnB1c2godGFzayk7XG5cbiAgLy8gUmVuZGVyIHRhc2sgd2luZG93XG4gIGFzc2lnblRhc2tDb3VudChwcm9qZWN0KTtcbiAgcmVuZGVyKCk7XG59KTtcblxucmVuZGVyKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
