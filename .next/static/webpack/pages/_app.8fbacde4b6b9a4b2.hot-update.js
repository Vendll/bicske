"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/Szechenyi.jsx":
/*!**************************************!*\
  !*** ./src/components/Szechenyi.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar Szechenyi = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), visible = ref[0], setVisible = ref[1];\n    var toggleImage = function() {\n        setVisible(!visible);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: visible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"fixed right-0 bottom-0 z-50 h-48 w-64\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"absolute top-7 left-10 z-[99] flex h-8 w-8 items-center justify-center rounded-full bg-gray-500 text-sm font-bold text-white hover:scale-110 dark:bg-gray-200 dark:text-gray-800\",\n                    onClick: toggleImage,\n                    children: \"X\"\n                }, void 0, false, {\n                    fileName: \"/Users/somogyiroland/Desktop/Projektek/Bicske/bicske/src/components/Szechenyi.jsx\",\n                    lineNumber: 15,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: \"/szec.png\",\n                    layout: \"fill\",\n                    objectFit: \"contain\"\n                }, void 0, false, {\n                    fileName: \"/Users/somogyiroland/Desktop/Projektek/Bicske/bicske/src/components/Szechenyi.jsx\",\n                    lineNumber: 21,\n                    columnNumber: 11\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/somogyiroland/Desktop/Projektek/Bicske/bicske/src/components/Szechenyi.jsx\",\n            lineNumber: 14,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false);\n};\n_s(Szechenyi, \"6J2wAdZ2kjF0faG/fj33ZXGxstA=\");\n_c = Szechenyi;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Szechenyi);\nvar _c;\n$RefreshReg$(_c, \"Szechenyi\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TemVjaGVueWkuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFBOEI7QUFDRTs7QUFFaEMsSUFBTUUsU0FBUyxHQUFHLFdBQU07O0lBQ3RCLElBQThCRCxHQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxDQUFDLEVBSjlDLE9BSWdCLEdBQWdCQSxHQUFjLEdBQTlCLEVBSmhCLFVBSTRCLEdBQUlBLEdBQWMsR0FBbEI7SUFFMUIsSUFBTUksV0FBVyxHQUFHLFdBQU07UUFDeEJELFVBQVUsQ0FBQyxDQUFDRCxPQUFPLENBQUM7S0FDckI7SUFFRCxxQkFDRTtrQkFDR0EsT0FBTyxrQkFDTiw4REFBQ0csS0FBRztZQUFDQyxTQUFTLEVBQUMsdUNBQXVDOzs4QkFDcEQsOERBQUNDLFFBQU07b0JBQ0xELFNBQVMsRUFBQyxrTEFBa0w7b0JBQzVMRSxPQUFPLEVBQUVKLFdBQVc7OEJBQ3JCLEdBRUQ7Ozs7O3lCQUFTOzhCQUNULDhEQUFDTCxtREFBSztvQkFBQ1UsR0FBRyxFQUFDLFdBQVc7b0JBQUNDLE1BQU0sRUFBQyxNQUFNO29CQUFDQyxTQUFTLEVBQUMsU0FBUzs7Ozs7eUJBQUc7Ozs7OztpQkFDdkQ7cUJBRVAsQ0FDSjtDQUNGO0dBdEJLVixTQUFTO0FBQVRBLEtBQUFBLFNBQVM7QUF3QmYsK0RBQWVBLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3plY2hlbnlpLmpzeD84ZDUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgU3plY2hlbnlpID0gKCkgPT4ge1xuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZSh0cnVlKVxuXG4gIGNvbnN0IHRvZ2dsZUltYWdlID0gKCkgPT4ge1xuICAgIHNldFZpc2libGUoIXZpc2libGUpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7dmlzaWJsZSAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgcmlnaHQtMCBib3R0b20tMCB6LTUwIGgtNDggdy02NFwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC03IGxlZnQtMTAgei1bOTldIGZsZXggaC04IHctOCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1mdWxsIGJnLWdyYXktNTAwIHRleHQtc20gZm9udC1ib2xkIHRleHQtd2hpdGUgaG92ZXI6c2NhbGUtMTEwIGRhcms6YmctZ3JheS0yMDAgZGFyazp0ZXh0LWdyYXktODAwXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUltYWdlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFhcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL3N6ZWMucG5nXCIgbGF5b3V0PVwiZmlsbFwiIG9iamVjdEZpdD1cImNvbnRhaW5cIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3plY2hlbnlpXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJ1c2VTdGF0ZSIsIlN6ZWNoZW55aSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidG9nZ2xlSW1hZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwic3JjIiwibGF5b3V0Iiwib2JqZWN0Rml0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Szechenyi.jsx\n");

/***/ })

});