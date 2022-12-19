"use strict";
(() => {
var exports = {};
exports.id = 457;
exports.ids = [457];
exports.modules = {

/***/ 5173:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MarkdocComponent),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(626);
/* harmony import */ var _markdoc_markdoc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5360);
/* harmony import */ var _markdoc_markdoc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_markdoc_markdoc__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_uttovendel_Documents_other_peter_next_node_modules_markdoc_next_js_src_runtime_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4266);
/* harmony import */ var _Users_uttovendel_Documents_other_peter_next_markdoc_tags_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3033);
/* harmony import */ var _Users_uttovendel_Documents_other_peter_next_markdoc_nodes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5160);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_yaml__WEBPACK_IMPORTED_MODULE_1__]);
js_yaml__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// renderers is imported separately so Markdoc isn't sent to the client


/**
 * Schema is imported like this so end-user's code is compiled using build-in babel/webpack configs.
 * This enables typescript/ESnext support
 */ const config = {};


const functions = {};
const schema = {
    tags: (0,_Users_uttovendel_Documents_other_peter_next_node_modules_markdoc_next_js_src_runtime_js__WEBPACK_IMPORTED_MODULE_3__/* .defaultObject */ .w)(_Users_uttovendel_Documents_other_peter_next_markdoc_tags_js__WEBPACK_IMPORTED_MODULE_4__),
    nodes: (0,_Users_uttovendel_Documents_other_peter_next_node_modules_markdoc_next_js_src_runtime_js__WEBPACK_IMPORTED_MODULE_3__/* .defaultObject */ .w)(_Users_uttovendel_Documents_other_peter_next_markdoc_nodes_js__WEBPACK_IMPORTED_MODULE_5__),
    functions: (0,_Users_uttovendel_Documents_other_peter_next_node_modules_markdoc_next_js_src_runtime_js__WEBPACK_IMPORTED_MODULE_3__/* .defaultObject */ .w)(functions),
    ...(0,_Users_uttovendel_Documents_other_peter_next_node_modules_markdoc_next_js_src_runtime_js__WEBPACK_IMPORTED_MODULE_3__/* .defaultObject */ .w)(config)
};
/**
 * Source will never change at runtime, so parse happens at the file root
 */ const source = "---\ndate: 2022-06-03T02:05:11+01:00\ntitle: Szakrendel\xe9sek\n---\n\n## Allergol\xf3gia\n\n- Feln\u0151tt t\xfcd\u0151gy\xf3gy\xe1sz!\n- Beutal\xf3 k\xf6teles rendel\xe9s!\n- Csak el\u0151jegyz\xe9ssel!\n\nBetegir\xe1ny\xedt\xe1s: [06 22 567 520](tel:+3622567520), [06 22 567 521](tel:+3622567521)\n\n| Orvos                |  Nap   | Rendel\xe9si id\u0151 |\n| :------------------- | :----: | :-----------: |\n| Dr. Egerszegi S\xe1ndor | Szerda | 16:00 - 19:00 |\n\n## Belgy\xf3gy\xe1szat\n\n- Csak el\u0151jegyz\xe9ssel!\n\nBetegir\xe1ny\xedt\xe1s: [06 22 567 520](tel:+3622567520), [06 22 567 521](tel:+3622567521) \\\nRendel\xe9si id\u0151ben: [06 22 567 503](tel:+3622567565)\n\n| Orvos               |  Nap   | Rendel\xe9si id\u0151 |\n| :------------------ | :----: | :-----------: |\n| Dr. Petrovicz Edina | Szerda | 16:00 - 18:00 |\n\n## B\u0151rgy\xf3gy\xe1szat\n\n- Csak el\u0151jegyz\xe9ssel!\n\nBetegir\xe1ny\xedt\xe1s: [06 22 567 520](tel:+3622567520), [06 22 567 521](tel:+3622567521) \\\nRendel\xe9si id\u0151ben: [06 22 567 565](tel:+3622567503)\n\n| Orvos           |                          |\n| :-------------- | :----------------------: |\n| Dr. Kiss Ildik\xf3 | szabads\xe1g miatt sz\xfcnetel |\n\nE-mail: [borgyogyaszat@bicskerendelo.hu](mailto:borgyogyaszat@bicskerendelo.hu)\\\n(N\xc9V \xe9s TAJ sz\xe1m megad\xe1s\xe1val megkeresheti a doktorn\u0151t - recept\xedr\xe1s, f\xe9nyk\xe9p k\xfcld\xe9se..... stb)\n\n## Diabetologia\n\n- Csak el\u0151jegyz\xe9ssel!\n\nBetegir\xe1ny\xedt\xe1s: [06 22 567 520](tel:+3622567520) \\\nRendel\xe9si id\u0151ben: [06 22 567 565](tel:+3622567565)\n\n| Orvos            |  Nap  | Rendel\xe9si id\u0151 |\n| :--------------- | :---: | :-----------: |\n| Dr. Kovalik Rita | H\xe9tf\u0151 | 8:00 - 17:00  |\n| Dr. Kovalik Rita | Kedd  | 8:00 - 11:00  |\n\n## Endokrinol\xf3gia\n\n- Beutal\xf3 k\xf6teles rendel\xe9s!\n- Csak el\u0151jegyz\xe9ssel!\n\nBetegir\xe1ny\xedt\xe1s: [06 22 567 520](tel:+3622567520) \\\nRendel\xe9si id\u0151ben: [06 22 567 565](tel:+3622567565)\n\n| Orvos                     |          Nap          | Rendel\xe9si id\u0151 |\n| :------------------------ | :-------------------: | :-----------: |\n| Dr. Cseh Gabriella Csilla |  Szerda (j\xfanius 8.)   | 8:00 - 14:00  |\n| Dr. Nagy Erzs\xe9bet         | Cs\xfct\xf6rt\xf6k (j\xfanius 2.) | 8:00 - 14:00  |\n\n## \xc9rseb\xe9szet\n\n- Csak el\u0151jegyz\xe9ssel!\n\nBetegir\xe1ny\xedt\xe1s: [06 22 567 520](tel:+3622567520) \\\nRendel\xe9si id\u0151ben: [06 22 567 569](tel:+3622567569)\n\n| Orvos             |         Nap         | Rendel\xe9si id\u0151 |\n| :---------------- | :-----------------: | :-----------: |\n| Dr. Bencze Gy\xf6rgy | Szerda (j\xfanius 15.) | 15:00 - 19:00 |\n\n## F\xfcl-orr-g\xe9g\xe9szet\n\n- Csak el\u0151jegyz\xe9ssel!\n\nBetegir\xe1ny\xedt\xe1s: [06 22 567 520](tel:+3622567520) \\\nRendel\xe9si id\u0151ben: [06 22 567 565](tel:+3622567565)\n\n| Orvos            |          Nap          | Rendel\xe9si id\u0151 |\n| :--------------- | :-------------------: | :-----------: |\n| Dr. Nagy Armand  |         H\xe9tf\u0151         | 13:00 - 17:00 |\n| Dr. Fain Andr\xe1s  |         Kedd          | 7:30 - 13:30  |\n| Dr. Lukits J\xfalia | Szerda, p\xe1ratlan h\xe9t! | 15:00 - 19:00 |\n| Dr. Fain Andr\xe1s  |       Cs\xfct\xf6rt\xf6k       | 7:30 - 13:30  |\n\n## Fizikoter\xe1pia\n\n- Beutal\xf3 k\xf6teles rendel\xe9s!\n- Csak el\u0151jegyz\xe9ssel!\n\nRendel\xe9si id\u0151ben: [06 22 567 553](tel:+3622567553)\n\n|  Nap   | Rendel\xe9si id\u0151 |\n| :----: | :-----------: |\n| H\xe9tf\u0151  | 9:00 - 12:30  |\n|  Kedd  | 8:00 - 13:00  |\n| Szerda | 9:00 - 12:30  |\n\n## Gasztroenterol\xf3gia\n\n- Csak el\u0151jegyz\xe9ssel!\n\nA rendel\xe9sre el\u0151jegyz\xe9st a [06-30-346-8767](tel:+36303468767) telefonsz\xe1mon vesz\xfcnk fel, h\xe9tf\u0151n \xe9s szerd\xe1n 8:00 \xe9s 13:00 \xf3ra k\xf6z\xf6tt.\n\n| Orvos           | Nap  | Rendel\xe9si id\u0151 |\n| :-------------- | :--: | :-----------: |\n| Dr. P\xe9ter Antal | Kedd | 8:00 - 12:00  |\n\n## Gyermekpszichi\xe1tria\n\n- Csak el\u0151jegyz\xe9ssel!\n\nBetegir\xe1ny\xedt\xe1s: [06 22 567 520](tel:+3622567520) \\\nRendel\xe9si id\u0151ben: [06 22 567 578](tel:+3622567578)\n\n| Orvos             |         Nap          | Rendel\xe9si id\u0151 |\n| :---------------- | :------------------: | :-----------: |\n| Dr. Balogh Ildik\xf3 | Cs\xfct\xf6rt\xf6k, j\xfanius 9. |               |\n\n## Gyermekt\xfcd\u0151gy\xf3gy\xe1szat\n\n- Csak el\u0151jegyz\xe9ssel!\n\nBetegir\xe1ny\xedt\xe1s: [06 22 567 520](tel:+3622567520), [06 22 567 521](tel:+3622567521)\n\n| Orvos            |        Nap        | Rendel\xe9si id\u0151 |\n| :--------------- | :---------------: | :-----------: |\n| Dr. B\xe1nfi Andrea | P\xe9ntek, j\xfanius 3. | 8:00 - 12:00  |\n\n## Gy\xf3gytorna\n\n- Csak el\u0151jegyz\xe9ssel!\n\nTelefon: [06 22 567 580](tel:+3622567580)\n\n|    Nap    | Rendel\xe9si id\u0151 |\n| :-------: | :-----------: |\n|   H\xe9tf\u0151   | 8:00 - 17:30  |\n|   Kedd    | 8:00 - 12:00  |\n|  Szerda   | 13:00 - 17:30 |\n| Cs\xfct\xf6rt\xf6k | 8:00 - 12:00  |\n|  P\xe9ntek   | 8:00 - 12:30  |\n\n## Kardiol\xf3gia\n\n- Beutal\xf3 k\xf6teles rendel\xe9s!\n- Csak el\u0151jegyz\xe9ssel!\n\nBetegir\xe1ny\xedt\xe1s: [06 22 567 520](tel:+3622567520), [06 22 567 521](tel:+3622567521) \\\nRendel\xe9si id\u0151ben: [06 22 567 565](tel:+3622567565)\n\n| Orvos               |    Nap    | Rendel\xe9si id\u0151 |\n| :------------------ | :-------: | :-----------: |\n| Dr. Kerkovits G\xe1bor |   Kedd    | 10:00 - 16:30 |\n| Dr. Kerkovits G\xe1bor |  Szerda   | 10:00 - 16:30 |\n| Dr. Petr\xe1ssy M\xe1rta  | Cs\xfct\xf6rt\xf6k | 11:00 - 18:00 |\n\n## Labor\n\nId\u0151pont k\xe9r\xe9se: \\\nBetegir\xe1ny\xedt\xe1s: [06 22 567 520](tel:+3622567520), [06 22 567 521](tel:+3622567521) \\\nvalamint 12:00 - 14:00 k\xf6z\xf6tt: [06 22 567 570](tel:+3622567570) \\\nLeletkiad\xe1s: 12:00 - 14:15\n\n| Orvos             |      Nap       | Rendel\xe9si id\u0151 |\n| :---------------- | :------------: | :-----------: |\n| Dr. Kellner Viola | H\xe9tf\u0151 - P\xe9ntek | 6:30 - 11:00  |\n\n## Nephrol\xf3gia\n\n- Beutal\xf3 k\xf6teles rendel\xe9s!\n- Csak el\u0151jegyz\xe9ssel!\n\nBetegir\xe1ny\xedt\xe1s: [06 22 567 520](tel:+3622567520), [06 22 567 521](tel:+3622567521)\n\n| Orvos          |         Nap          | Rendel\xe9si id\u0151 |\n| :------------- | :------------------: | :-----------: |\n| Dr. Nagy Lajos | Cs\xfct\xf6rt\xf6k, j\xfanius 9. | 13:00 - 16:00 |\n\n## Neurol\xf3gia\n\n- Beutal\xf3 k\xf6teles rendel\xe9s!\n- Csak el\u0151jegyz\xe9ssel!\n\nBetegir\xe1ny\xedt\xe1s: [06 22 567 520](tel:+3622567520), [06 22 567 521](tel:+3622567521) \\\nSzerd\xe1n, rendel\xe9si id\u0151ben: [06 22 567 544](tel:+3622567544)\n\n| Orvos                |        Nap        | Rendel\xe9si id\u0151 |\n| :------------------- | :---------------: | :-----------: |\n| Dr. Szentannai Kinga | Szerda, j\xfanius 1. | 9:00 - 11:00  |\n| Dr. T\xf3th T\xedmea       |     Cs\xfct\xf6rt\xf6k     | 8:00 - 11:00  |\n\n## N\u0151gy\xf3gy\xe1szat\n\n- Csak el\u0151jegyz\xe9ssel!\n\nBetegir\xe1ny\xedt\xe1s: [06 22 567 520](tel:+3622567520), [06 22 567 521](tel:+3622567521) \\\nRendel\xe9si id\u0151ben: [06 22 567 573](tel:+3622567573)\n\n| Orvos             |    Nap    | Rendel\xe9si id\u0151 |\n| :---------------- | :-------: | :-----------: |\n| Dr. Kocsis \xc9va    |   H\xe9tf\u0151   | 12:00 - 18:00 |\n| Dr. Moln\xe1r Mih\xe1ly |   Kedd    | 15:00 - 18:00 |\n| Dr. Tam\xe1si Ferenc | Cs\xfct\xf6rt\xf6k | 15:00 - 18:00 |\n\n## Onkol\xf3gia\n\n- Csak el\u0151jegyz\xe9ssel!\n\nBetegir\xe1ny\xedt\xe1s: [06 22 567 520](tel:+3622567520), [06 22 567 521](tel:+3622567521) \\\nRendel\xe9si id\u0151ben: [06 22 567 573](tel:+3622567573)\n\n| Orvos             |  Nap   | Rendel\xe9si id\u0151 |\n| :---------------- | :----: | :-----------: |\n| Dr. Kov\xe1cs L\xe1szl\xf3 | Szerda |    elmarad    |\n\n## Ortop\xe9dia\n\n- Beutal\xf3 k\xf6teles rendel\xe9s!\n- Csak el\u0151jegyz\xe9ssel!\n\nBetegir\xe1ny\xedt\xe1s: [06 22 567 520](tel:+3622567520), [06 22 567 521](tel:+3622567521) \\\nRendel\xe9si id\u0151ben: [06 22 567 544](tel:+3622567544)\n\n| Orvos                |  Nap   | Rendel\xe9si id\u0151 |\n| :------------------- | :----: | :-----------: |\n| Dr. K\xe1d\xe1r Zsolt      |  Kedd  | 15:30 - 18:00 |\n| Dr. Koll\xe1r Iv\xe1n G\xe9za | Szerda | 16:00 - 20:00 |\n\n## Pszichi\xe1tria\n\n- Beutal\xf3 k\xf6teles rendel\xe9s!\n- Csak el\u0151jegyz\xe9ssel!\n\nBetegir\xe1ny\xedt\xe1s: [06 22 567 520](tel:+3622567520), [06 22 567 521](tel:+3622567521) \\\nRendel\xe9si id\u0151ben: [06 22 567 578](tel:+3622567578)\n\n| Orvos                |  Nap   | Rendel\xe9si id\u0151 |\n| :------------------- | :----: | :-----------: |\n| Dr. Ferencz Csaba    | H\xe9tf\u0151  | 9:00 - 13:00  |\n| Dr. Ternov\xe1n Szilvia | H\xe9tf\u0151  | 15:00 - 19:00 |\n| Dr. Stvrteczky Rita  |  Kedd  | 9:00 - 16:00  |\n| Dr. Sujt\xf3 Katalin    | Szerda | 9:00 - 14:00  |\n\n## Reumatol\xf3gia\n\n- Beutal\xf3 k\xf6teles rendel\xe9s!\n- Csak el\u0151jegyz\xe9ssel!\n\nBetegir\xe1ny\xedt\xe1s: [06 22 567 520](tel:+3622567520), [06 22 567 521](tel:+3622567521) \\\nRendel\xe9si id\u0151ben: [06 22 567 574](tel:+3622567574)\n\n| Orvos               |        Nap        | Rendel\xe9si id\u0151 |\n| :------------------ | :---------------: | :-----------: |\n| Dr. \xdajhelyi M\xf3nika  |       H\xe9tf\u0151       | 8:30 - 13:00  |\n| Dr. Kardos \xc9va      |       H\xe9tf\u0151       | 14:30 - 16:00 |\n| Dr. \xdajhelyi M\xf3nika  |       Kedd        | 8:30 - 15:00  |\n| Dr. Stvrteczky Rita |      Szerda       | 14:30 - 17:00 |\n| Dr. \xdajhelyi M\xf3nika  | Cs\xfct\xf6rt\xf6k, Plntek | 8:30 - 13:00  |\n\n## R\xf6ntgen\n\nTelefon: [06 22 567 559](tel:+3622567559)\n\n|       Nap        | Rendel\xe9si id\u0151 |\n| :--------------: | :-----------: |\n| H\xe9tf\u0151-Cs\xfctr\xf6rt\xf6k | 8:00 - 17:30  |\n|      P\xe9ntek      | 8:00 - 14:00  |\n\n## Seb\xe9szet\n\nBetegir\xe1ny\xedt\xe1s: [06 22 567 520](tel:+3622567520), [06 22 567 521](tel:+3622567521) \\\nRendel\xe9si id\u0151ben: [06 22 567 560](tel:+3622567560)\n\n| Orvos               |      Nap      | Rendel\xe9si id\u0151 |\n| :------------------ | :-----------: | :-----------: |\n| Dr. Keser\u0171 G\xe1bor    | H\xe9tf\u0151, P\xe9ntek | 9:30 - 14:30  |\n| Dr. Somorjai Attila |     Kedd      | 8:00 - 13:00  |\n| Dr. Balika Zolt\xe1n   |    Szerda     | 7:30 - 12:30  |\n| Dr. Somorjai Attila |    Szerda     | 14:00 - 19:00 |\n| Dr. Keser\u0171 G\xe1bor    |    P\xe9ntek     | 9:30 - 14:30  |\n\n## Szem\xe9szet\n\n- Csak el\u0151jegyz\xe9ssel!\n\nBetegir\xe1ny\xedt\xe1s: [06 22 567 520](tel:+3622567520), [06 22 567 521](tel:+3622567521) \\\nRendel\xe9si id\u0151ben: [06 22 567 566](tel:+3622567566)\n\n| Orvos             |            Nap            | Rendel\xe9si id\u0151 |\n| :---------------- | :-----------------------: | :-----------: |\n| Dr. J\xe1nossy \xc1gnes |        H\xe9tf\u0151, Kedd        | 8:00 - 13:00  |\n| Dr. K\xe1lm\xe1n Kinga  |           H\xe9tf\u0151           | 15:00 - 19:00 |\n| Dr. Dolhay Eszter |     Kedd, p\xe1ros h\xe9ten     | 15:00 - 19:00 |\n| Dr. Piros Andrea  |   Kedd, p\xe1ratlan h\xe9ten    | 15:30 - 19:00 |\n| Dr. K\xe1lm\xe1n Kinga  |          Szerda           | 8:00 - 12:00  |\n| Dr. Piros Andrea  |  Cs\xfct\xf6rt\xf6k, p\xe1ros h\xe9ten   | 8:00 - 12:00  |\n| Dr. Dolhay Eszter | Cs\xfct\xf6rt\xf6k, p\xe1ratlan h\xe9ten | 8:00 - 12:00  |\n| Dr. Kerek T\xfcnde   |          P\xe9ntek           | 8:00 - 12:00  |\n\n## Traumatol\xf3gia\n\nBetegir\xe1ny\xedt\xe1s: [06 22 567 520](tel:+3622567520), [06 22 567 521](tel:+3622567521)\n\n| Orvos                | Nap | Rendel\xe9si id\u0151 |\n| :------------------- | :-: | :-----------: |\n| Dr. Koll\xe1r Iv\xe1n G\xe9za |     |               |\n\n## Ultrahang\n\n- Beutal\xf3 k\xf6teles rendel\xe9s!\n- Csak el\u0151jegyz\xe9ssel!\n\nBetegir\xe1ny\xedt\xe1s: [06 22 567 520](tel:+3622567520), [06 22 567 521](tel:+3622567521) \\\nRendel\xe9si id\u0151ben: [06 22 567 598](tel:+3622567598)\n\n| Orvos             |    Nap    | Rendel\xe9si id\u0151 |\n| :---------------- | :-------: | :-----------: |\n| Dr. Simon Gy\xf6ngyi |   Kedd    | 8:00 - 18:00  |\n| Dr. Magyar P\xe9ter  |  Szerda   | 8:00 - 14:00  |\n| Dr. Nagy Katalin  | Cs\xfct\xf6rt\xf6k | 8:00 - 14:00  |\n\n## Urol\xf3gia\n\n- Csak el\u0151jegyz\xe9ssel!\n\nBetegir\xe1ny\xedt\xe1s: [06 22 567 520](tel:+3622567520), [06 22 567 521](tel:+3622567521) \\\nRendel\xe9si id\u0151ben: [06 22 567 598](tel:+3622567598)\n\n| Orvos           |       Nap        | Rendel\xe9si id\u0151 |\n| :-------------- | :--------------: | :-----------: |\n| Dr. Bokor Csaba | H\xe9tf\u0151, m\xe1jus 31. | 15:00 - 19:00 |\n| Dr. Csiki Csaba | Kedd, j\xfanius 7.  | 15:30 - 19:00 |\n";
const filepath = "/informaciok/szakrendelesek.md";
const ast = _markdoc_markdoc__WEBPACK_IMPORTED_MODULE_2___default().parse(source);
/**
 * Like the AST, frontmatter won't change at runtime, so it is loaded at file root.
 * This unblocks future features, such a per-page dataFetchingFunction.
 */ const frontmatter = ast.attributes.frontmatter ? js_yaml__WEBPACK_IMPORTED_MODULE_1__["default"].load(ast.attributes.frontmatter) : {};
const { components , ...rest } = (0,_Users_uttovendel_Documents_other_peter_next_node_modules_markdoc_next_js_src_runtime_js__WEBPACK_IMPORTED_MODULE_3__/* .getSchema */ .J)(schema);
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

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ }),

/***/ 626:
/***/ ((module) => {

module.exports = import("js-yaml");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,664,266,559], () => (__webpack_exec__(5173)));
module.exports = __webpack_exports__;

})();