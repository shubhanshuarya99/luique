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

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_layouts_PreLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/layouts/PreLoader */ \"./src/layouts/PreLoader.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api/api */ \"./pages/api/api.js\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\nconst MyComponent = ()=>{\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const apiData = await fetchDataFromAPI();\n                setData(apiData);\n            } catch (error) {\n            // Handle error\n            }\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n        fileName: \"C:\\\\Users\\\\shubh\\\\Downloads\\\\luique\\\\luique\\\\pages\\\\_app.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MyComponent, \"fQZRxy/+nAZ7NLS1X4dVhrlp8Go=\");\n_c = MyComponent;\nconst App = (param)=>{\n    let { Component , pageProps  } = param;\n    _s1();\n    const [loader, setLoader] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        setTimeout(()=>{\n            setLoader(false);\n        }, 500);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Luique - Personal Portfolio React NextJS Template\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\shubh\\\\Downloads\\\\luique\\\\luique\\\\pages\\\\_app.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        httpEquiv: \"Content-Type\",\n                        content: \"text/html; charset=utf-8\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\shubh\\\\Downloads\\\\luique\\\\luique\\\\pages\\\\_app.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        httpEquiv: \"X-UA-Compatible\",\n                        content: \"IE=edge\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\shubh\\\\Downloads\\\\luique\\\\luique\\\\pages\\\\_app.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\shubh\\\\Downloads\\\\luique\\\\luique\\\\pages\\\\_app.js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"HandheldFriendly\",\n                        content: \"true\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\shubh\\\\Downloads\\\\luique\\\\luique\\\\pages\\\\_app.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"author\",\n                        content: \"bslthemes\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\shubh\\\\Downloads\\\\luique\\\\luique\\\\pages\\\\_app.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"stylesheet\",\n                        href: \"https://fonts.googleapis.com/css?family=Jost%3A0%2C100%3B0%2C200%3B0%2C300%3B0%2C400%3B0%2C500%3B0%2C600%3B0%2C700%3B0%2C800%3B0%2C900%3B1%2C100%3B1%2C200%3B1%2C300%3B1%2C400%3B1%2C500%3B1%2C600%3B1%2C700%3B1%2C800%3B1%2C900%7CCaveat%3A400%3B500%3B600%3B700&display=swap\",\n                        type: \"text/css\",\n                        media: \"all\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\shubh\\\\Downloads\\\\luique\\\\luique\\\\pages\\\\_app.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"stylesheet\",\n                        href: \"https://fonts.googleapis.com/css?family=Roboto%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CRoboto+Slab%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&display=auto\",\n                        type: \"text/css\",\n                        media: \"all\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\shubh\\\\Downloads\\\\luique\\\\luique\\\\pages\\\\_app.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"stylesheet\",\n                        href: \"assets/css/vendors/bootstrap.css\",\n                        type: \"text/css\",\n                        media: \"all\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\shubh\\\\Downloads\\\\luique\\\\luique\\\\pages\\\\_app.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"stylesheet\",\n                        href: \"assets/fonts/font-awesome/css/font-awesome.css\",\n                        type: \"text/css\",\n                        media: \"all\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\shubh\\\\Downloads\\\\luique\\\\luique\\\\pages\\\\_app.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"stylesheet\",\n                        href: \"assets/css/vendors/magnific-popup.css\",\n                        type: \"text/css\",\n                        media: \"all\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\shubh\\\\Downloads\\\\luique\\\\luique\\\\pages\\\\_app.js\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"stylesheet\",\n                        href: \"assets/css/vendors/splitting.css\",\n                        type: \"text/css\",\n                        media: \"all\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\shubh\\\\Downloads\\\\luique\\\\luique\\\\pages\\\\_app.js\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"stylesheet\",\n                        href: \"assets/css/vendors/swiper.css\",\n                        type: \"text/css\",\n                        media: \"all\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\shubh\\\\Downloads\\\\luique\\\\luique\\\\pages\\\\_app.js\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"stylesheet\",\n                        href: \"assets/css/vendors/animate.css\",\n                        type: \"text/css\",\n                        media: \"all\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\shubh\\\\Downloads\\\\luique\\\\luique\\\\pages\\\\_app.js\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"stylesheet\",\n                        href: \"assets/css/style.css\",\n                        type: \"text/css\",\n                        media: \"all\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\shubh\\\\Downloads\\\\luique\\\\luique\\\\pages\\\\_app.js\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"stylesheet\",\n                        href: \"assets/css/dark.css\",\n                        type: \"text/css\",\n                        media: \"all\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\shubh\\\\Downloads\\\\luique\\\\luique\\\\pages\\\\_app.js\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"shortcut icon\",\n                        href: \"favicon.ico\",\n                        type: \"image/x-icon\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\shubh\\\\Downloads\\\\luique\\\\luique\\\\pages\\\\_app.js\",\n                        lineNumber: 110,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"favicon.ico\",\n                        type: \"image/x-icon\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\shubh\\\\Downloads\\\\luique\\\\luique\\\\pages\\\\_app.js\",\n                        lineNumber: 111,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\shubh\\\\Downloads\\\\luique\\\\luique\\\\pages\\\\_app.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            loader && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_layouts_PreLoader__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\shubh\\\\Downloads\\\\luique\\\\luique\\\\pages\\\\_app.js\",\n                lineNumber: 113,\n                columnNumber: 18\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\shubh\\\\Downloads\\\\luique\\\\luique\\\\pages\\\\_app.js\",\n                lineNumber: 114,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\shubh\\\\Downloads\\\\luique\\\\luique\\\\pages\\\\_app.js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(App, \"v9Gmr36LIRqHprS819AlpxmZHdc=\");\n_c1 = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c, _c1;\n$RefreshReg$(_c, \"MyComponent\");\n$RefreshReg$(_c1, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBGcmFnbWVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByZUxvYWRlciBmcm9tIFwiLi4vc3JjL2xheW91dHMvUHJlTG9hZGVyXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCBcIi4vYXBpL2FwaVwiO1xuXG5jb25zdCBNeUNvbXBvbmVudCA9ICgpID0+IHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBhcGlEYXRhID0gYXdhaXQgZmV0Y2hEYXRhRnJvbUFQSSgpO1xuICAgICAgICBzZXREYXRhKGFwaURhdGEpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgLy8gSGFuZGxlIGVycm9yXG4gICAgICB9XG4gICAgfTtcblxuICAgIGZldGNoRGF0YSgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgey8qIFJlbmRlciBkYXRhIGhlcmUgKi99XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XG4gIGNvbnN0IFtsb2FkZXIsIHNldExvYWRlcl0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldExvYWRlcihmYWxzZSk7XG4gICAgfSwgNTAwKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5MdWlxdWUgLSBQZXJzb25hbCBQb3J0Zm9saW8gUmVhY3QgTmV4dEpTIFRlbXBsYXRlPC90aXRsZT5cbiAgICAgICAgPG1ldGEgaHR0cEVxdWl2PVwiQ29udGVudC1UeXBlXCIgY29udGVudD1cInRleHQvaHRtbDsgY2hhcnNldD11dGYtOFwiIC8+XG4gICAgICAgIDxtZXRhIGh0dHBFcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJJRT1lZGdlXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cIkhhbmRoZWxkRnJpZW5kbHlcIiBjb250ZW50PVwidHJ1ZVwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJhdXRob3JcIiBjb250ZW50PVwiYnNsdGhlbWVzXCIgLz5cbiAgICAgICAgey8qIEZvbnRzICovfVxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Sm9zdCUzQTAlMkMxMDAlM0IwJTJDMjAwJTNCMCUyQzMwMCUzQjAlMkM0MDAlM0IwJTJDNTAwJTNCMCUyQzYwMCUzQjAlMkM3MDAlM0IwJTJDODAwJTNCMCUyQzkwMCUzQjElMkMxMDAlM0IxJTJDMjAwJTNCMSUyQzMwMCUzQjElMkM0MDAlM0IxJTJDNTAwJTNCMSUyQzYwMCUzQjElMkM3MDAlM0IxJTJDODAwJTNCMSUyQzkwMCU3Q0NhdmVhdCUzQTQwMCUzQjUwMCUzQjYwMCUzQjcwMCZkaXNwbGF5PXN3YXBcIlxuICAgICAgICAgIHR5cGU9XCJ0ZXh0L2Nzc1wiXG4gICAgICAgICAgbWVkaWE9XCJhbGxcIlxuICAgICAgICAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvJTNBMTAwJTJDMTAwaXRhbGljJTJDMjAwJTJDMjAwaXRhbGljJTJDMzAwJTJDMzAwaXRhbGljJTJDNDAwJTJDNDAwaXRhbGljJTJDNTAwJTJDNTAwaXRhbGljJTJDNjAwJTJDNjAwaXRhbGljJTJDNzAwJTJDNzAwaXRhbGljJTJDODAwJTJDODAwaXRhbGljJTJDOTAwJTJDOTAwaXRhbGljJTdDUm9ib3RvK1NsYWIlM0ExMDAlMkMxMDBpdGFsaWMlMkMyMDAlMkMyMDBpdGFsaWMlMkMzMDAlMkMzMDBpdGFsaWMlMkM0MDAlMkM0MDBpdGFsaWMlMkM1MDAlMkM1MDBpdGFsaWMlMkM2MDAlMkM2MDBpdGFsaWMlMkM3MDAlMkM3MDBpdGFsaWMlMkM4MDAlMkM4MDBpdGFsaWMlMkM5MDAlMkM5MDBpdGFsaWMmZGlzcGxheT1hdXRvXCJcbiAgICAgICAgICB0eXBlPVwidGV4dC9jc3NcIlxuICAgICAgICAgIG1lZGlhPVwiYWxsXCJcbiAgICAgICAgLz5cbiAgICAgICAgey8qIENTUyBTVFlMRVMgKi99XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaHJlZj1cImFzc2V0cy9jc3MvdmVuZG9ycy9ib290c3RyYXAuY3NzXCJcbiAgICAgICAgICB0eXBlPVwidGV4dC9jc3NcIlxuICAgICAgICAgIG1lZGlhPVwiYWxsXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICBocmVmPVwiYXNzZXRzL2ZvbnRzL2ZvbnQtYXdlc29tZS9jc3MvZm9udC1hd2Vzb21lLmNzc1wiXG4gICAgICAgICAgdHlwZT1cInRleHQvY3NzXCJcbiAgICAgICAgICBtZWRpYT1cImFsbFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaHJlZj1cImFzc2V0cy9jc3MvdmVuZG9ycy9tYWduaWZpYy1wb3B1cC5jc3NcIlxuICAgICAgICAgIHR5cGU9XCJ0ZXh0L2Nzc1wiXG4gICAgICAgICAgbWVkaWE9XCJhbGxcIlxuICAgICAgICAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIGhyZWY9XCJhc3NldHMvY3NzL3ZlbmRvcnMvc3BsaXR0aW5nLmNzc1wiXG4gICAgICAgICAgdHlwZT1cInRleHQvY3NzXCJcbiAgICAgICAgICBtZWRpYT1cImFsbFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaHJlZj1cImFzc2V0cy9jc3MvdmVuZG9ycy9zd2lwZXIuY3NzXCJcbiAgICAgICAgICB0eXBlPVwidGV4dC9jc3NcIlxuICAgICAgICAgIG1lZGlhPVwiYWxsXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICBocmVmPVwiYXNzZXRzL2Nzcy92ZW5kb3JzL2FuaW1hdGUuY3NzXCJcbiAgICAgICAgICB0eXBlPVwidGV4dC9jc3NcIlxuICAgICAgICAgIG1lZGlhPVwiYWxsXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICBocmVmPVwiYXNzZXRzL2Nzcy9zdHlsZS5jc3NcIlxuICAgICAgICAgIHR5cGU9XCJ0ZXh0L2Nzc1wiXG4gICAgICAgICAgbWVkaWE9XCJhbGxcIlxuICAgICAgICAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIGhyZWY9XCJhc3NldHMvY3NzL2RhcmsuY3NzXCJcbiAgICAgICAgICB0eXBlPVwidGV4dC9jc3NcIlxuICAgICAgICAgIG1lZGlhPVwiYWxsXCJcbiAgICAgICAgLz5cbiAgICAgICAgey8qIEZhdmljb24gKi99XG4gICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiZmF2aWNvbi5pY29cIiB0eXBlPVwiaW1hZ2UveC1pY29uXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCJmYXZpY29uLmljb1wiIHR5cGU9XCJpbWFnZS94LWljb25cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAge2xvYWRlciAmJiA8UHJlTG9hZGVyIC8+fVxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sIm5hbWVzIjpbIkhlYWQiLCJGcmFnbWVudCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUHJlTG9hZGVyIiwiTXlDb21wb25lbnQiLCJkYXRhIiwic2V0RGF0YSIsImZldGNoRGF0YSIsImFwaURhdGEiLCJmZXRjaERhdGFGcm9tQVBJIiwiZXJyb3IiLCJkaXYiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJsb2FkZXIiLCJzZXRMb2FkZXIiLCJzZXRUaW1lb3V0IiwidGl0bGUiLCJtZXRhIiwiaHR0cEVxdWl2IiwiY29udGVudCIsIm5hbWUiLCJsaW5rIiwicmVsIiwiaHJlZiIsInR5cGUiLCJtZWRpYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});