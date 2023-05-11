"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 1110:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MarkdocComponent),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(487);
/* harmony import */ var _markdoc_markdoc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5360);
/* harmony import */ var _markdoc_markdoc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_markdoc_markdoc__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_uttovendel_Documents_other_peter_next_node_modules_pnpm_markdoc_next_js_0_1_10_gyevq2qx4ehobe22pkbiyd5g6q_node_modules_markdoc_next_js_src_runtime_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7072);
/* harmony import */ var _Users_uttovendel_Documents_other_peter_next_markdoc_tags_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(573);
/* harmony import */ var _Users_uttovendel_Documents_other_peter_next_markdoc_nodes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9524);


// renderers is imported separately so Markdoc isn't sent to the client


/**
 * Schema is imported like this so end-user's code is compiled using build-in babel/webpack configs.
 * This enables typescript/ESnext support
 */ const config = {};


const functions = {};
const schema = {
    tags: (0,_Users_uttovendel_Documents_other_peter_next_node_modules_pnpm_markdoc_next_js_0_1_10_gyevq2qx4ehobe22pkbiyd5g6q_node_modules_markdoc_next_js_src_runtime_js__WEBPACK_IMPORTED_MODULE_3__/* .defaultObject */ .w)(_Users_uttovendel_Documents_other_peter_next_markdoc_tags_js__WEBPACK_IMPORTED_MODULE_4__),
    nodes: (0,_Users_uttovendel_Documents_other_peter_next_node_modules_pnpm_markdoc_next_js_0_1_10_gyevq2qx4ehobe22pkbiyd5g6q_node_modules_markdoc_next_js_src_runtime_js__WEBPACK_IMPORTED_MODULE_3__/* .defaultObject */ .w)(_Users_uttovendel_Documents_other_peter_next_markdoc_nodes_js__WEBPACK_IMPORTED_MODULE_5__),
    functions: (0,_Users_uttovendel_Documents_other_peter_next_node_modules_pnpm_markdoc_next_js_0_1_10_gyevq2qx4ehobe22pkbiyd5g6q_node_modules_markdoc_next_js_src_runtime_js__WEBPACK_IMPORTED_MODULE_3__/* .defaultObject */ .w)(functions),
    ...(0,_Users_uttovendel_Documents_other_peter_next_node_modules_pnpm_markdoc_next_js_0_1_10_gyevq2qx4ehobe22pkbiyd5g6q_node_modules_markdoc_next_js_src_runtime_js__WEBPACK_IMPORTED_MODULE_3__/* .defaultObject */ .w)(config)
};
/**
 * Source will never change at runtime, so parse happens at the file root
 */ const source = "---\ndate: 2022-06-03T02:05:11+01:00\ntitle: Bicskei Eg\xe9szs\xe9g\xfcgyi K\xf6zpont el\xe9rhet\u0151s\xe9g\n---\n\nC\xedm: 2060 Bicske, Kossuth t\xe9r 17.\n\nTelefon 07:00 - 19:00 k\xf6z\xf6tt: [+36 22 567 520](tel:+3622567520)\n\n[Szakrendel\xe9sek](informaciok/szakrendelesek)\n";
const filepath = "/index.md";
const ast = _markdoc_markdoc__WEBPACK_IMPORTED_MODULE_2___default().parse(source);
/**
 * Like the AST, frontmatter won't change at runtime, so it is loaded at file root.
 * This unblocks future features, such a per-page dataFetchingFunction.
 */ const frontmatter = ast.attributes.frontmatter ? js_yaml__WEBPACK_IMPORTED_MODULE_1__/* ["default"].load */ .ZP.load(ast.attributes.frontmatter) : {};
const { components , ...rest } = (0,_Users_uttovendel_Documents_other_peter_next_node_modules_pnpm_markdoc_next_js_0_1_10_gyevq2qx4ehobe22pkbiyd5g6q_node_modules_markdoc_next_js_src_runtime_js__WEBPACK_IMPORTED_MODULE_3__/* .getSchema */ .J)(schema);
async function getStaticProps(context) {
    const partials = {};
    // Ensure Node.transformChildren is available
    Object.keys(partials).forEach((key)=>{
        partials[key] = _markdoc_markdoc__WEBPACK_IMPORTED_MODULE_2___default().parse(partials[key]);
    });
    const cfg = {
        ...rest,
        variables: {
            ...rest ? rest.variables : {},
            // user can't override this namespace
            markdoc: {
                frontmatter
            },
            // Allows users to eject from Markdoc rendering and pass in dynamic variables via getServerSideProps
            ...context.variables || {}
        },
        partials,
        source
    };
    /**
   * transform must be called in dataFetchingFunction to support server-side rendering while
   * accessing variables on the server
   */ const content = await _markdoc_markdoc__WEBPACK_IMPORTED_MODULE_2___default().transform(ast, cfg);
    return {
        // Removes undefined
        props: JSON.parse(JSON.stringify({
            markdoc: {
                content,
                frontmatter,
                file: {
                    path: filepath
                }
            }
        }))
    };
}
function MarkdocComponent(props) {
    // Only execute HMR code in development
    return _markdoc_markdoc__WEBPACK_IMPORTED_MODULE_2__.renderers.react(props.markdoc.content, (react__WEBPACK_IMPORTED_MODULE_0___default()), {
        components: {
            ...components,
            // Allows users to override default components at runtime, via their _app
            ...props.components
        }
    });
};


/***/ }),

/***/ 5360:
/***/ ((module) => {

module.exports = require("@markdoc/markdoc");

/***/ }),

/***/ 8103:
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 7096:
/***/ ((module) => {

module.exports = require("prism-react-renderer");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [0,621,462,492], () => (__webpack_exec__(1110)));
module.exports = __webpack_exports__;

})();