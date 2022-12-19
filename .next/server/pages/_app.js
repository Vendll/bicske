"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 689:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5489);
/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5999);
/* harmony import */ var _components_MobileNavigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3127);
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6931);
/* harmony import */ var _components_Prose__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9742);
/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6998);
/* harmony import */ var _components_ThemeSelector__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2760);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_MobileNavigation__WEBPACK_IMPORTED_MODULE_7__, _components_ThemeSelector__WEBPACK_IMPORTED_MODULE_11__]);
([_components_MobileNavigation__WEBPACK_IMPORTED_MODULE_7__, _components_ThemeSelector__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












function Header({ navigation  }) {
    let { 0: isScrolled , 1: setIsScrolled  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        function onScroll() {
            setIsScrolled(window.scrollY > 0);
        }
        onScroll();
        window.addEventListener("scroll", onScroll);
        return ()=>{
            window.removeEventListener("scroll", onScroll);
        };
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
        className: clsx__WEBPACK_IMPORTED_MODULE_4___default()("sticky top-0 z-50 flex flex-wrap items-center justify-between bg-white px-4 py-5 shadow-md shadow-slate-900/5 transition duration-500 dark:shadow-none sm:px-6 lg:px-8", {
            "dark:bg-slate-900/95 dark:backdrop-blur dark:[@supports(backdrop-filter:blur(0))]:bg-slate-900/75": isScrolled,
            "dark:bg-transparent": !isScrolled
        }),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mr-6 lg:hidden",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MobileNavigation__WEBPACK_IMPORTED_MODULE_7__/* .MobileNavigation */ .$, {
                    navigation: navigation
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "relative flex flex-grow basis-0 items-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: "/",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        className: "block w-10 overflow-hidden lg:w-auto",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "sr-only",
                                children: "Kezdolap"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Logo__WEBPACK_IMPORTED_MODULE_6__/* .Logo */ .T, {})
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "-my-5 mr-6 sm:mr-8 md:mr-0"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "relative flex basis-0 justify-end space-x-6 sm:space-x-8 md:flex-grow",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ThemeSelector__WEBPACK_IMPORTED_MODULE_11__/* .ThemeSelector */ .Y, {
                    className: "relative z-10 mr-12"
                })
            })
        ]
    });
}
function Layout({ children , title , navigation , tableOfContents  }) {
    let router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    let isHomePage = router.pathname === "/";
    let allLinks = navigation.flatMap((section)=>section.links
    );
    let linkIndex = allLinks.findIndex((link)=>link.href === router.pathname
    );
    let previousPage = allLinks[linkIndex - 1];
    let nextPage = allLinks[linkIndex + 1];
    let section1 = navigation.find((section)=>section.links.find((link)=>link.href === router.pathname
        )
    );
    let currentSection = useTableOfContents(tableOfContents);
    function isActive(section) {
        if (section.id === currentSection) {
            return true;
        }
        if (!section.children) {
            return false;
        }
        return section.children.findIndex(isActive) > -1;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Header, {
                navigation: navigation
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative mx-auto flex max-w-8xl justify-center sm:px-2 lg:px-8 xl:px-12",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "hidden lg:relative lg:block lg:flex-none",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "absolute inset-y-0 right-0 w-[50vw] bg-slate-50 dark:hidden"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "sticky top-[4.5rem] -ml-0.5 h-[calc(100vh-4.5rem)] overflow-y-auto py-16 pl-0.5",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "absolute top-16 bottom-0 right-0 hidden h-12 w-px bg-gradient-to-t from-slate-800 dark:block"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "absolute top-28 bottom-0 right-0 hidden w-px bg-slate-800 dark:block"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Navigation__WEBPACK_IMPORTED_MODULE_8__/* .Navigation */ .W, {
                                        navigation: navigation,
                                        className: "w-64 pr-8 xl:w-72 xl:pr-16"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
                            className: "prose-a:text-bblue hover:prose-a:underline",
                            children: [
                                (title || section1) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                                    className: "mb-9 space-y-1",
                                    children: [
                                        section1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "font-display text-sm font-medium text-bblue",
                                            children: section1.title
                                        }),
                                        title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            className: "font-display text-3xl tracking-tight text-slate-900 dark:text-white",
                                            children: title
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Prose__WEBPACK_IMPORTED_MODULE_9__/* .Prose */ .M, {
                                    children: children
                                }),
                                isHomePage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Map__WEBPACK_IMPORTED_MODULE_5__/* .Map */ .D, {})
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "hidden xl:sticky xl:top-[4.5rem] xl:-mr-6 xl:block xl:h-[calc(100vh-4.5rem)] xl:flex-none xl:overflow-y-auto xl:py-16 xl:pr-6",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                            "aria-labelledby": "on-this-page-title",
                            className: "w-56",
                            children: tableOfContents.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        id: "on-this-page-title",
                                        className: "font-display text-sm font-medium text-slate-900 dark:text-white",
                                        children: "Oldal tartalma"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                        className: "mt-4 space-y-3 text-sm",
                                        children: tableOfContents.map((section)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            href: `#${section.id}`,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(isActive(section) ? "text-sky-500" : "font-normal text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"),
                                                                children: section.title
                                                            })
                                                        })
                                                    }),
                                                    section.children.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                        className: "mt-2 space-y-3 pl-5 text-slate-500 dark:text-slate-400",
                                                        children: section.children.map((subSection)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                    href: `#${subSection.id}`,
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                        className: isActive(subSection) ? "text-sky-500" : "hover:text-slate-600 dark:hover:text-slate-300",
                                                                        children: subSection.title
                                                                    })
                                                                })
                                                            }, subSection.id)
                                                        )
                                                    })
                                                ]
                                            }, section.id)
                                        )
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        ]
    });
}
function useTableOfContents(tableOfContents) {
    let { 0: currentSection , 1: setCurrentSection  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(tableOfContents[0]?.id);
    let getHeadings = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        function* traverse(node) {
            if (Array.isArray(node)) {
                for (let child of node){
                    yield* traverse(child);
                }
            } else {
                let el = document.getElementById(node.id);
                if (!el) return;
                let style = window.getComputedStyle(el);
                let scrollMt = parseFloat(style.scrollMarginTop);
                let top = window.scrollY + el.getBoundingClientRect().top - scrollMt;
                yield {
                    id: node.id,
                    top
                };
                for (let child of node.children ?? []){
                    yield* traverse(child);
                }
            }
        }
        return Array.from(traverse(tableOfContents));
    }, [
        tableOfContents
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let headings = getHeadings();
        if (tableOfContents.length === 0 || headings.length === 0) return;
        function onScroll() {
            let sortedHeadings = headings.concat([]).sort((a, b)=>a.top - b.top
            );
            let top = window.pageYOffset;
            let current = sortedHeadings[0].id;
            for(let i = 0; i < sortedHeadings.length; i++){
                if (top >= sortedHeadings[i].top) {
                    current = sortedHeadings[i].id;
                }
            }
            setCurrentSection(current);
        }
        window.addEventListener("scroll", onScroll, {
            capture: true,
            passive: true
        });
        onScroll();
        return ()=>{
            window.removeEventListener("scroll", onScroll, {
                capture: true,
                passive: true
            });
        };
    }, [
        getHeadings,
        tableOfContents
    ]);
    return currentSection;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5999:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "T": () => (/* binding */ Logo)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next-export-optimize-images/dist/image.js
var dist_image = __webpack_require__(8782);
var image_default = /*#__PURE__*/__webpack_require__.n(dist_image);
// EXTERNAL MODULE: ./node_modules/next-image-export-optimizer/dist/ExportedImage.js
var ExportedImage = __webpack_require__(1058);
;// CONCATENATED MODULE: ./src/images/BICSKE_UJ_t.png
/* harmony default export */ const BICSKE_UJ_t = ({"src":"/_next/static/media/BICSKE_UJ_t.787ac9c9.png","height":120,"width":300,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAIVBMVEU/fq89eaikqrMobqQ8eKi/zdm0w9I8eag5dKOjo7OUb1NIqIzuAAAACnRSTlM8KNkXAVt1D1n4iFAzzQAAAAlwSFlzAAAuIwAALiMBeKU/dgAAACFJREFUeJxjYGNiZWZkZmFh4ORiYuBgYGBkAIkwMLKzAAAE4ABXgnz1ogAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./src/images/BICSKE_UJ_m.png
/* harmony default export */ const BICSKE_UJ_m = ({"src":"/_next/static/media/BICSKE_UJ_m.1b6fdd55.png","height":75,"width":75,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAS1BMVEXh4uPJfj6ue1D48u1MaXG2TVHh6O7J3enO4Ovn6+/x8vLk6OwOfLinSV84hpmfU2bHnC4Mb7Lldx1AiIrcrR94gqGLsc+Uts5+j535WV7aAAAAFXRSTlMp/v4qAP7y9Pe1sLD4/vf+/vf+9/6oaLe6AAAACXBIWXMAAC4jAAAuIwF4pT92AAAAQklEQVR4nBXGWxaAIAgFwKuigFb2Atz/SjvN14CgLFoIEDeLBqhv8358QGxPbzWGWE3nH40j5ys6SvO1vBUQBnMHfWR5AsMuEUIHAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./src/components/Logo.jsx





function Logo() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "hidden sm:block",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: BICSKE_UJ_t,
                    alt: "Bicske",
                    width: 200,
                    height: 80
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "block sm:hidden",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: BICSKE_UJ_m,
                    alt: "Bicske",
                    width: 50,
                    height: 50
                })
            })
        ]
    });
}


/***/ }),

/***/ 5489:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ Map)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Map() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "mt-12 overflow-hidden bg-slate-900 dark:-mb-32 dark:-mt-[4.5rem] dark:pb-32 dark:pt-[4.5rem] dark:lg:-mt-[4.75rem] dark:lg:pt-[4.75rem]",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
            src: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d618.0310131240433!2d18.63537956323205!3d47.492452230716694!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x13e415f61bd434a2!2zQmljc2tlaSBFZ8Opc3pzw6lnw7xneWkgS8O2enBvbnQ!5e0!3m2!1sen!2shu!4v1671447939766!5m2!1sen!2shu",
            width: "100%",
            height: "450",
            allowfullscreen: "",
            loading: "lazy",
            referrerpolicy: "no-referrer-when-downgrade"
        })
    });
}


/***/ }),

/***/ 3127:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ MobileNavigation)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1185);
/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5999);
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6931);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_4__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function MobileNavigation({ navigation  }) {
    let router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    let { 0: isOpen , 1: setIsOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!isOpen) return;
        function onRouteChange() {
            setIsOpen(false);
        }
        router.events.on("routeChangeComplete", onRouteChange);
        router.events.on("routeChangeError", onRouteChange);
        return ()=>{
            router.events.off("routeChangeComplete", onRouteChange);
            router.events.off("routeChangeError", onRouteChange);
        };
    }, [
        router,
        isOpen
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                type: "button",
                onClick: ()=>setIsOpen(true)
                ,
                className: "relative",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "sr-only",
                        children: "Open navigation"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                        "aria-hidden": "true",
                        className: "h-6 w-6 stroke-slate-500",
                        fill: "none",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            d: "M4 7h16M4 12h16M4 17h16"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Dialog, {
                open: isOpen,
                onClose: setIsOpen,
                className: "fixed inset-0 z-50 flex items-start overflow-y-auto bg-slate-900/50 pr-10 backdrop-blur lg:hidden",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Dialog.Panel, {
                    className: "min-h-full w-full max-w-xs bg-white px-4 pt-5 pb-12 dark:bg-slate-900 sm:px-6",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Dialog.Title, {
                            className: "sr-only",
                            children: "Navigation"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                    type: "button",
                                    onClick: ()=>setIsOpen(false)
                                    ,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "sr-only",
                                            children: "Close navigation"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                            "aria-hidden": "true",
                                            className: "h-6 w-6 stroke-slate-500",
                                            fill: "none",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                d: "M5 5l14 14M19 5l-14 14"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: "/",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        className: "ml-6 block w-10 overflow-hidden lg:w-auto",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "sr-only",
                                                children: "Home page"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Logo__WEBPACK_IMPORTED_MODULE_5__/* .Logo */ .T, {})
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Navigation__WEBPACK_IMPORTED_MODULE_6__/* .Navigation */ .W, {
                            navigation: navigation,
                            className: "mt-5 px-1"
                        })
                    ]
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6931:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ Navigation)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);




function Navigation({ navigation , className  }) {
    let router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()("text-base lg:text-sm", className),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
            className: "space-y-9",
            children: navigation.map((section)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "font-display font-medium text-slate-900 dark:text-white",
                            children: section.title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                            className: "mt-2 space-y-2 border-l-2 border-slate-100 dark:border-slate-800 lg:mt-4 lg:space-y-4 lg:border-slate-200",
                            children: section.links.map((link)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: "relative",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: link.href,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            className: clsx__WEBPACK_IMPORTED_MODULE_3___default()("block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full", {
                                                "font-semibold text-bblue before:bg-bblue": link.href === router.pathname,
                                                "text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300": link.href !== router.pathname
                                            }),
                                            children: link.title
                                        })
                                    })
                                }, link.href)
                            )
                        })
                    ]
                }, section.title)
            )
        })
    });
}


/***/ }),

/***/ 9742:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ Prose)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);


function Prose({ as: Component = "div" , className , ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(className, "prose prose-slate max-w-none dark:prose-invert dark:text-slate-400", // headings
        "prose-headings:scroll-mt-28 prose-headings:font-display prose-headings:font-normal lg:prose-headings:scroll-mt-[8.5rem]", // lead
        "prose-lead:text-slate-500 dark:prose-lead:text-slate-400", // links
        "prose-a:font-semibold dark:prose-a:text-bblue", // link underline
        "prose-a:no-underline", // pre
        "prose-pre:rounded-xl prose-pre:bg-slate-900 prose-pre:shadow-lg dark:prose-pre:bg-slate-800/60 dark:prose-pre:shadow-none dark:prose-pre:ring-1 dark:prose-pre:ring-slate-300/10", // hr
        "dark:prose-hr:border-slate-800", // td
        "prose-td:text-left"),
        ...props
    });
}


/***/ }),

/***/ 6998:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: Search

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-dom"
const external_react_dom_namespaceObject = require("react-dom");
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: external "@docsearch/react"
const react_namespaceObject = require("@docsearch/react");
;// CONCATENATED MODULE: ./src/components/Search.jsx






const docSearchConfig = {
    appId: process.env.NEXT_PUBLIC_DOCSEARCH_APP_ID,
    apiKey: process.env.NEXT_PUBLIC_DOCSEARCH_API_KEY,
    indexName: process.env.NEXT_PUBLIC_DOCSEARCH_INDEX_NAME
};
function Hit({ hit , children  }) {
    return /*#__PURE__*/ _jsx(Link, {
        href: hit.url,
        children: /*#__PURE__*/ _jsx("a", {
            children: children
        })
    });
}
function Search() {
    let { 0: isOpen , 1: setIsOpen  } = useState(false);
    let { 0: modifierKey , 1: setModifierKey  } = useState();
    const onOpen = useCallback(()=>{
        setIsOpen(true);
    }, [
        setIsOpen
    ]);
    const onClose = useCallback(()=>{
        setIsOpen(false);
    }, [
        setIsOpen
    ]);
    useDocSearchKeyboardEvents({
        isOpen,
        onOpen,
        onClose
    });
    useEffect(()=>{
        setModifierKey(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? "\u2318" : "Ctrl ");
    }, []);
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsxs("button", {
                type: "button",
                className: "group flex h-6 w-6 items-center justify-center sm:justify-start md:h-auto md:w-80 md:flex-none md:rounded-lg md:py-2.5 md:pl-4 md:pr-3.5 md:text-sm md:ring-1 md:ring-slate-200 md:hover:ring-slate-300 dark:md:bg-slate-800/75 dark:md:ring-inset dark:md:ring-white/5 dark:md:hover:bg-slate-700/40 dark:md:hover:ring-slate-500 lg:w-96",
                onClick: onOpen,
                children: [
                    /*#__PURE__*/ _jsx("svg", {
                        "aria-hidden": "true",
                        className: "h-5 w-5 flex-none fill-slate-400 group-hover:fill-slate-500 dark:fill-slate-500 md:group-hover:fill-slate-400",
                        children: /*#__PURE__*/ _jsx("path", {
                            d: "M16.293 17.707a1 1 0 0 0 1.414-1.414l-1.414 1.414ZM9 14a5 5 0 0 1-5-5H2a7 7 0 0 0 7 7v-2ZM4 9a5 5 0 0 1 5-5V2a7 7 0 0 0-7 7h2Zm5-5a5 5 0 0 1 5 5h2a7 7 0 0 0-7-7v2Zm8.707 12.293-3.757-3.757-1.414 1.414 3.757 3.757 1.414-1.414ZM14 9a4.98 4.98 0 0 1-1.464 3.536l1.414 1.414A6.98 6.98 0 0 0 16 9h-2Zm-1.464 3.536A4.98 4.98 0 0 1 9 14v2a6.98 6.98 0 0 0 4.95-2.05l-1.414-1.414Z"
                        })
                    }),
                    /*#__PURE__*/ _jsx("span", {
                        className: "sr-only md:not-sr-only md:ml-2 md:text-slate-500 md:dark:text-slate-400",
                        children: "Search docs"
                    }),
                    modifierKey && /*#__PURE__*/ _jsxs("kbd", {
                        className: "ml-auto hidden font-medium text-slate-400 dark:text-slate-500 md:block",
                        children: [
                            /*#__PURE__*/ _jsx("kbd", {
                                className: "font-sans",
                                children: modifierKey
                            }),
                            /*#__PURE__*/ _jsx("kbd", {
                                className: "font-sans",
                                children: "K"
                            })
                        ]
                    })
                ]
            }),
            isOpen && /*#__PURE__*/ createPortal(/*#__PURE__*/ _jsx(DocSearchModal, {
                ...docSearchConfig,
                initialScrollY: window.scrollY,
                onClose: onClose,
                hitComponent: Hit,
                navigator: {
                    navigate ({ itemUrl  }) {
                        Router.push(itemUrl);
                    }
                }
            }), document.body)
        ]
    });
}


/***/ }),

/***/ 2760:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ ThemeSelector)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1185);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const themes = [
    {
        name: "Light",
        value: "light",
        icon: LightIcon
    },
    {
        name: "Dark",
        value: "dark",
        icon: DarkIcon
    },
    {
        name: "System",
        value: "system",
        icon: SystemIcon
    }, 
];
function IconBase({ children , ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 16 16",
        ...props,
        children: children
    });
}
function LightIcon(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(IconBase, {
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M7 1a1 1 0 0 1 2 0v1a1 1 0 1 1-2 0V1Zm4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm2.657-5.657a1 1 0 0 0-1.414 0l-.707.707a1 1 0 0 0 1.414 1.414l.707-.707a1 1 0 0 0 0-1.414Zm-1.415 11.313-.707-.707a1 1 0 0 1 1.415-1.415l.707.708a1 1 0 0 1-1.415 1.414ZM16 7.999a1 1 0 0 0-1-1h-1a1 1 0 1 0 0 2h1a1 1 0 0 0 1-1ZM7 14a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1Zm-2.536-2.464a1 1 0 0 0-1.414 0l-.707.707a1 1 0 0 0 1.414 1.414l.707-.707a1 1 0 0 0 0-1.414Zm0-8.486A1 1 0 0 1 3.05 4.464l-.707-.707a1 1 0 0 1 1.414-1.414l.707.707ZM3 8a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h1a1 1 0 0 0 1-1Z"
        })
    });
}
function DarkIcon(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(IconBase, {
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M7.23 3.333C7.757 2.905 7.68 2 7 2a6 6 0 1 0 0 12c.68 0 .758-.905.23-1.332A5.989 5.989 0 0 1 5 8c0-1.885.87-3.568 2.23-4.668ZM12 5a1 1 0 0 1 1 1 1 1 0 0 0 1 1 1 1 0 1 1 0 2 1 1 0 0 0-1 1 1 1 0 1 1-2 0 1 1 0 0 0-1-1 1 1 0 1 1 0-2 1 1 0 0 0 1-1 1 1 0 0 1 1-1Z"
        })
    });
}
function SystemIcon(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(IconBase, {
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M1 4a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-1.5l.31 1.242c.084.333.36.573.63.808.091.08.182.158.264.24A1 1 0 0 1 11 15H5a1 1 0 0 1-.704-1.71c.082-.082.173-.16.264-.24.27-.235.546-.475.63-.808L5.5 11H4a3 3 0 0 1-3-3V4Zm3-1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4Z"
        })
    });
}
function ThemeSelector(props) {
    let { 0: selectedTheme , 1: setSelectedTheme  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (selectedTheme) {
            document.documentElement.setAttribute("data-theme", selectedTheme.value);
        } else {
            setSelectedTheme(themes.find((theme)=>theme.value === document.documentElement.getAttribute("data-theme")
            ));
        }
    }, [
        selectedTheme
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Listbox, {
        as: "div",
        value: selectedTheme,
        onChange: setSelectedTheme,
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Listbox.Label, {
                className: "sr-only",
                children: "Theme"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Listbox.Button, {
                className: "flex h-6 w-6 items-center justify-center rounded-lg shadow-md shadow-black/5 ring-1 ring-black/5 dark:bg-slate-700 dark:ring-inset dark:ring-white/5",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "sr-only",
                        children: selectedTheme?.name
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LightIcon, {
                        className: "hidden h-4 w-4 fill-sky-400 [[data-theme=light]_&]:block"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DarkIcon, {
                        className: "hidden h-4 w-4 fill-sky-400 [[data-theme=dark]_&]:block"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LightIcon, {
                        className: "hidden h-4 w-4 fill-slate-400 [:not(.dark)[data-theme=system]_&]:block"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DarkIcon, {
                        className: "hidden h-4 w-4 fill-slate-400 [.dark[data-theme=system]_&]:block"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Listbox.Options, {
                className: "absolute top-full left-1/2 mt-3 w-36 -translate-x-1/2 space-y-1 rounded-xl bg-white p-3 text-sm font-medium shadow-md shadow-black/5 ring-1 ring-black/5 dark:bg-slate-800 dark:ring-white/5",
                children: themes.map((theme)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Listbox.Option, {
                        value: theme,
                        className: ({ active , selected  })=>clsx__WEBPACK_IMPORTED_MODULE_3___default()("flex cursor-pointer select-none items-center rounded-[0.625rem] p-1", {
                                "text-sky-500": selected,
                                "text-slate-900 dark:text-white": active && !selected,
                                "text-slate-700 dark:text-slate-400": !active && !selected,
                                "bg-slate-100 dark:bg-slate-900/40": active
                            })
                        ,
                        children: ({ selected  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "rounded-md bg-white p-1 shadow ring-1 ring-slate-900/5 dark:bg-slate-700 dark:ring-inset dark:ring-white/5",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(theme.icon, {
                                            className: clsx__WEBPACK_IMPORTED_MODULE_3___default()("h-4 w-4", {
                                                "fill-sky-400 dark:fill-sky-400": selected,
                                                "fill-slate-400": !selected
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "ml-3",
                                        children: theme.name
                                    })
                                ]
                            })
                    }, theme.value)
                )
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3948:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sindresorhus_slugify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5272);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(689);
/* harmony import */ var focus_visible__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2235);
/* harmony import */ var focus_visible__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(focus_visible__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_sindresorhus_slugify__WEBPACK_IMPORTED_MODULE_2__, _components_Layout__WEBPACK_IMPORTED_MODULE_3__]);
([_sindresorhus_slugify__WEBPACK_IMPORTED_MODULE_2__, _components_Layout__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const navigation = [
    {
        title: "Inform\xe1ci\xf3k",
        links: [
            {
                title: "El\xe9rhet\xf6s\xe9gek",
                href: "/"
            },
            {
                title: "Szakrendel\xe9sek",
                href: "/informaciok/szakrendelesek"
            }, 
        ]
    },
    {
        title: "Tov\xe1bbi linkek",
        links: [
            {
                title: "Google",
                href: "https://google.com"
            }
        ]
    }, 
];
function getNodeText(node) {
    let text = "";
    for (let child of node.children ?? []){
        if (typeof child === "string") {
            text += child;
        }
        text += getNodeText(child);
    }
    return text;
}
function collectHeadings(nodes, slugify = (0,_sindresorhus_slugify__WEBPACK_IMPORTED_MODULE_2__.slugifyWithCounter)()) {
    let sections = [];
    for (let node of nodes){
        if (/^h[23]$/.test(node.name)) {
            let title = getNodeText(node);
            if (title) {
                let id = slugify(title);
                node.attributes.id = id;
                if (node.name === "h3") {
                    sections[sections.length - 1].children.push({
                        ...node.attributes,
                        title
                    });
                } else {
                    sections.push({
                        ...node.attributes,
                        title,
                        children: []
                    });
                }
            }
        }
        sections.push(...collectHeadings(node.children ?? [], slugify));
    }
    return sections;
}
function App({ Component , pageProps  }) {
    let title = pageProps.markdoc?.frontmatter.title;
    let pageTitle = pageProps.markdoc?.frontmatter.pageTitle || `${pageProps.markdoc?.frontmatter.title}`;
    let description = pageProps.markdoc?.frontmatter.description;
    let tableOfContents = pageProps.markdoc?.content ? collectHeadings(pageProps.markdoc.content) : [];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: pageTitle
                    }),
                    description && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: description
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__/* .Layout */ .A, {
                navigation: navigation,
                title: title,
                tableOfContents: tableOfContents,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                    ...pageProps
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8103:
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ 2235:
/***/ ((module) => {

module.exports = require("focus-visible");

/***/ }),

/***/ 4470:
/***/ ((module) => {

module.exports = require("fs-extra");

/***/ }),

/***/ 4062:
/***/ ((module) => {

module.exports = require("next-export-optimize-images/export-images.config.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

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

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

/***/ }),

/***/ 5272:
/***/ ((module) => {

module.exports = import("@sindresorhus/slugify");;

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,664,58], () => (__webpack_exec__(3948)));
module.exports = __webpack_exports__;

})();