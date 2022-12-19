"use strict";
exports.id = 58;
exports.ids = [58];
exports.modules = {

/***/ 3112:
/***/ ((__unused_webpack_module, exports) => {

Object.defineProperty(exports, "__esModule", ({value:true}));Object.defineProperty(exports, "default", ({enumerable:true,get:function(){return _default}}));var formats=["jpeg","jpg","png","webp","avif"];var formatValidate=function(format){return formats.some(function(allowedFormat){return allowedFormat===format})};var _default=formatValidate;

/***/ }),

/***/ 8782:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

Object.defineProperty(exports, "__esModule", ({value:true}));Object.defineProperty(exports, "default", ({enumerable:true,get:function(){return _default}}));var _image=_interopRequireDefault(_exportStar(__webpack_require__(9749),exports));var _react=_interopRequireDefault(__webpack_require__(6689));var _formatValidate=_interopRequireDefault(__webpack_require__(3112));var _getConfig=_interopRequireDefault(__webpack_require__(473));function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}function _exportStar(from,to){Object.keys(from).forEach(function(k){if(k!=="default"&&!Object.prototype.hasOwnProperty.call(to,k))Object.defineProperty(to,k,{enumerable:true,get:function(){return from[k]}})});return from}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};return _extends.apply(this,arguments)}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _iterableToArrayLimit(arr,i){var _i=arr==null?null:typeof Symbol!=="undefined"&&arr[Symbol.iterator]||arr["@@iterator"];if(_i==null)return;var _arr=[];var _n=true;var _d=false;var _s,_e;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break}}catch(err){_d=true;_e=err}finally{try{if(!_n&&_i["return"]!=null)_i["return"]()}finally{if(_d)throw _e}}return _arr}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest()}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(n);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}var config=(0,_getConfig.default)();function hashCode(src){var hash=0;for(var i=0;i<src.length;i+=1){var chr=src.charCodeAt(i);hash=(hash<<5)-hash+chr;hash|=0}return"".concat(hash)}var defaultImageParser=function(src){var path=src.split(/\.([^.]*$)/)[0];var extension=(src.split(/\.([^.]*$)/)[1]||"").split("?")[0];if(!path||!extension){throw new Error("Invalid path or no file extension: ".concat(src))}var pathWithoutName=path.split("/").slice(0,-1).join("/");var name=path.split("/").slice(-1).toString();if(src.startsWith("http")){pathWithoutName=pathWithoutName.replace(/^https?:\/\//,"").split("/").slice(1).join("/")}return{pathWithoutName:pathWithoutName,name:name,extension:extension}};var exportableLoader=function(param){var _src=param.src,width=param.width,quality=param.quality;if(false){}var src=_src;if(config.basePath!==undefined){src=_src.replace(config.basePath,"")}var parsedImageInformation=config.sourceImageParser?config.sourceImageParser({src:src,defaultParser:defaultImageParser}):defaultImageParser(src);var extension=parsedImageInformation.extension;var pathWithoutName=parsedImageInformation.pathWithoutName,name=parsedImageInformation.name,originalExtension=parsedImageInformation.extension;if(config.convertFormat!==undefined){var convertArray=config.convertFormat.find(function(param){var _param=_slicedToArray(param,1),beforeConvert=_param[0];return beforeConvert===extension});if(convertArray!==undefined){if(!(0,_formatValidate.default)(convertArray[0]))throw Error("Unauthorized format specified in `configFormat`. beforeConvert: ".concat(convertArray[0]));if(!(0,_formatValidate.default)(convertArray[1]))throw Error("Unauthorized format specified in `configFormat`. afterConvert: ".concat(convertArray[1]));extension=convertArray[1]}}var outputDir="/".concat(config.imageDir?config.imageDir.replace(/^\//,"").replace(/\/$/,""):"_next/static/chunks/images");var externalOutputDir="".concat(config.externalImageDir?config.externalImageDir.replace(/^\//,"").replace(/\/$/,""):"_next/static/media");var filename=config.filenameGenerator!==undefined?config.filenameGenerator({path:pathWithoutName,name:name,width:width,quality:quality||75,extension:extension}):"".concat(pathWithoutName,"/").concat(name,"_").concat(width,"_").concat(quality||75,".").concat(extension);var output="".concat(outputDir,"/").concat(filename.replace(/^\//,""));if(typeof window==="undefined"||process.env["TEST_JSON_PATH"]!==undefined){var json={output:output,src:src,width:width,quality:quality||75,extension:extension};var fs=__webpack_require__(4470);var path=__webpack_require__(1017);if(src.startsWith("http")){json.src="/".concat(externalOutputDir,"/").concat(hashCode(src.replace(/^https?:\/\//,"").split("/").slice(1).join("/")),".").concat(originalExtension);json.externalUrl=src}var _process_env_TEST_JSON_PATH;fs.appendFileSync(path.join(process.cwd(),(_process_env_TEST_JSON_PATH=process.env["TEST_JSON_PATH"])!==null&&_process_env_TEST_JSON_PATH!==void 0?_process_env_TEST_JSON_PATH:".next/custom-optimized-images.nd.json"),JSON.stringify(json)+"\n")}var _config_basePath;return"".concat((_config_basePath=config.basePath)!==null&&_config_basePath!==void 0?_config_basePath:"").concat(output)};var CustomImage=function(props){return _react.default.createElement(_image.default,_extends({},props,{loader:props.loader||exportableLoader,blurDataURL:props.blurDataURL||(typeof props.src==="string"&&props.placeholder==="blur"&&props.loader===undefined?exportableLoader({src:props.src,width:8,quality:10}):"")}))};var _default=CustomImage;

/***/ }),

/***/ 473:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

Object.defineProperty(exports, "__esModule", ({value:true}));Object.defineProperty(exports, "default", ({enumerable:true,get:function(){return _default}}));var getConfig=function(){try{if(false){}return __webpack_require__(4062)}catch(_){return{}}};var _default=getConfig;

/***/ }),

/***/ 1058:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _react = _interopRequireWildcard(__webpack_require__(6689));
var _image = _interopRequireDefault(__webpack_require__(8782));
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
var splitFilePath = function(param) {
    var filePath = param.filePath;
    var _filePath_split_pop;
    var filenameWithExtension = ((_filePath_split_pop = filePath.split("\\").pop()) === null || _filePath_split_pop === void 0 ? void 0 : _filePath_split_pop.split("/").pop()) || "";
    var filePathWithoutFilename = filePath.split(filenameWithExtension).shift();
    var fileExtension = filePath.split(".").pop();
    var filenameWithoutExtension = filenameWithExtension.substring(0, filenameWithExtension.lastIndexOf(".")) || filenameWithExtension;
    return {
        path: filePathWithoutFilename,
        filename: filenameWithoutExtension,
        extension: fileExtension || ""
    };
};
var generateImageURL = function(src, width) {
    var _splitFilePath = splitFilePath({
        filePath: src
    }), filename = _splitFilePath.filename, path = _splitFilePath.path, extension = _splitFilePath.extension;
    var useWebp = process.env.nextImageExportOptimizer_storePicturesInWEBP != undefined ? process.env.nextImageExportOptimizer_storePicturesInWEBP : true;
    if (![
        "JPG",
        "JPEG",
        "WEBP",
        "PNG",
        "AVIF"
    ].includes(extension.toUpperCase())) {
        return src;
    }
    var processedExtension = extension;
    if (useWebp && [
        "JPG",
        "JPEG",
        "PNG"
    ].includes(extension.toUpperCase())) {
        processedExtension = "WEBP";
    }
    var correctedPath = path;
    var lastChar = correctedPath === null || correctedPath === void 0 ? void 0 : correctedPath.substr(-1);
    if (lastChar != "/") {
        correctedPath = correctedPath + "/";
    }
    var isStaticImage = src.includes("_next/static/media");
    var exportFolderName = process.env.nextImageExportOptimizer_exportFolderName || "nextImageExportOptimizer";
    var generatedImageURL = "".concat(isStaticImage ? "" : correctedPath).concat(exportFolderName, "/").concat(filename, "-opt-").concat(width, ".").concat(processedExtension.toUpperCase());
    if (generatedImageURL.charAt(0) !== "/") {
        generatedImageURL = "/" + generatedImageURL;
    }
    return generatedImageURL;
};
var optimizedLoader = function(param) {
    var src = param.src, width = param.width;
    var isStaticImage = typeof src === "object";
    var _src = isStaticImage ? src.src : src;
    return generateImageURL(_src, width);
};
var fallbackLoader = function(param) {
    var src = param.src;
    var _src = typeof src === "object" ? src.src : src;
    if (_src.charAt(0) !== "/") {
        _src = "/" + _src;
    }
    return _src;
};
function ExportedImage(_param) {
    var src = _param.src, _param_priority = _param.priority, priority = _param_priority === void 0 ? false : _param_priority, loading = _param.loading, className = _param.className, width = _param.width, height = _param.height, onLoadingComplete = _param.onLoadingComplete, unoptimized = _param.unoptimized, _param_placeholder = _param.placeholder, placeholder = _param_placeholder === void 0 ? "blur" : _param_placeholder, blurDataURL = _param.blurDataURL, style = _param.style, onError = _param.onError, rest = _objectWithoutProperties(_param, [
        "src",
        "priority",
        "loading",
        "className",
        "width",
        "height",
        "onLoadingComplete",
        "unoptimized",
        "placeholder",
        "blurDataURL",
        "style",
        "onError"
    ]);
    var _useState = _slicedToArray((0, _react.useState)(false), 2), imageError = _useState[0], setImageError = _useState[1];
    var automaticallyCalculatedBlurDataURL = (0, _react.useMemo)(function() {
        if (blurDataURL) {
            return blurDataURL;
        }
        var isStaticImage = typeof src === "object";
        var _src = isStaticImage ? src.src : src;
        if (unoptimized === true) {
            return _src;
        }
        return generateImageURL(_src, 10);
    }, [
        blurDataURL,
        src,
        unoptimized
    ]);
    var isSVG = typeof src === "object" ? src.src.endsWith(".svg") : src.endsWith(".svg");
    var _useState1 = _slicedToArray((0, _react.useState)(false), 2), blurComplete = _useState1[0], setBlurComplete = _useState1[1];
    var blurStyle = placeholder === "blur" && !isSVG && automaticallyCalculatedBlurDataURL && automaticallyCalculatedBlurDataURL.startsWith("/") && !blurComplete ? {
        backgroundSize: (style === null || style === void 0 ? void 0 : style.objectFit) || "cover",
        backgroundPosition: (style === null || style === void 0 ? void 0 : style.objectPosition) || "50% 50%",
        backgroundRepeat: "no-repeat",
        backgroundImage: "url(".concat(automaticallyCalculatedBlurDataURL, ")"),
        filter: "url(#sharpBlur)"
    } : undefined;
    var ImageElement = _react.default.createElement(_image.default, _extends({}, rest, width && {
        width: width
    }, height && {
        height: height
    }, loading && {
        loading: loading
    }, className && {
        className: className
    }, onLoadingComplete && {
        onLoadingComplete: onLoadingComplete
    }, placeholder && {
        placeholder: blurStyle ? "empty" : placeholder
    }, unoptimized && {
        unoptimized: unoptimized
    }, priority && {
        priority: priority
    }, isSVG && {
        unoptimized: true
    }, {
        style: _objectSpread({}, style, blurStyle),
        loader: imageError || unoptimized === true ? fallbackLoader : function(e) {
            return optimizedLoader({
                src: src,
                width: e.width
            });
        },
        blurDataURL: automaticallyCalculatedBlurDataURL,
        onError: function(error) {
            setImageError(true);
            setBlurComplete(true);
            onError && onError(error);
        },
        onLoadingComplete: function(result) {
            if (result.naturalWidth === 0) {
                setImageError(true);
            }
            setBlurComplete(true);
            onLoadingComplete && onLoadingComplete(result);
        },
        src: src
    }));
    return blurStyle ? _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("noscript", null, _react.default.createElement(_image.default, _extends({}, rest, width && {
        width: width
    }, height && {
        height: height
    }, loading && {
        loading: loading
    }, className && {
        className: className
    }, {
        placeholder: "empty"
    }, unoptimized && {
        unoptimized: unoptimized
    }, priority && {
        priority: priority
    }, {
        style: style,
        loader: imageError || unoptimized === true ? fallbackLoader : function(e) {
            return optimizedLoader({
                src: src,
                width: e.width
            });
        },
        src: src
    }))), ImageElement, _react.default.createElement("svg", {
        style: {
            border: 0,
            clip: "rect(0 0 0 0)",
            height: 0,
            margin: "-1px",
            overflow: "hidden",
            padding: 0,
            position: "absolute",
            width: "1px"
        }
    }, _react.default.createElement("filter", {
        id: "sharpBlur"
    }, _react.default.createElement("feGaussianBlur", {
        stdDeviation: "20",
        colorInterpolationFilters: "sRGB"
    }), _react.default.createElement("feColorMatrix", {
        type: "matrix",
        colorInterpolationFilters: "sRGB",
        values: "1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 9 0"
    }), _react.default.createElement("feComposite", {
        in2: "SourceGraphic",
        operator: "in"
    })))) : ImageElement;
}
var _default = ExportedImage;


//# sourceMappingURL=ExportedImage.js.map

/***/ }),

/***/ 9749:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = Image;
var _react = _interopRequireWildcard(__webpack_require__(6689));
var _head = _interopRequireDefault(__webpack_require__(4957));
var _imageConfig = __webpack_require__(5843);
var _useIntersection = __webpack_require__(9246);
var _imageConfigContext = __webpack_require__(744);
var _utils = __webpack_require__(9232);
var _normalizeTrailingSlash = __webpack_require__(2700);
function Image(_param) {
    var { src , sizes , unoptimized =false , priority =false , loading , lazyRoot =null , lazyBoundary ="200px" , className , quality , width , height , style , objectFit , objectPosition , onLoadingComplete , placeholder ="empty" , blurDataURL  } = _param, all = _objectWithoutProperties(_param, [
        "src",
        "sizes",
        "unoptimized",
        "priority",
        "loading",
        "lazyRoot",
        "lazyBoundary",
        "className",
        "quality",
        "width",
        "height",
        "style",
        "objectFit",
        "objectPosition",
        "onLoadingComplete",
        "placeholder",
        "blurDataURL"
    ]);
    const configContext = (0, _react).useContext(_imageConfigContext.ImageConfigContext);
    const config = (0, _react).useMemo(()=>{
        const c = configEnv || configContext || _imageConfig.imageConfigDefault;
        const allSizes = [
            ...c.deviceSizes,
            ...c.imageSizes
        ].sort((a, b)=>a - b
        );
        const deviceSizes = c.deviceSizes.sort((a, b)=>a - b
        );
        return _objectSpread({}, c, {
            allSizes,
            deviceSizes
        });
    }, [
        configContext
    ]);
    let rest = all;
    let layout = sizes ? "responsive" : "intrinsic";
    if ("layout" in rest) {
        // Override default layout if the user specified one:
        if (rest.layout) layout = rest.layout;
        // Remove property so it's not spread on <img>:
        delete rest.layout;
    }
    let loader = defaultImageLoader;
    if ("loader" in rest) {
        if (rest.loader) {
            const customImageLoader = rest.loader;
            var _tmp;
            _tmp = (obj)=>{
                const { config: _  } = obj, opts = _objectWithoutProperties(obj, [
                    "config"
                ]);
                // The config object is internal only so we must
                // not pass it to the user-defined loader()
                return customImageLoader(opts);
            }, loader = _tmp, _tmp;
        }
        // Remove property so it's not spread on <img>
        delete rest.loader;
    }
    let staticSrc = "";
    if (isStaticImport(src)) {
        const staticImageData = isStaticRequire(src) ? src.default : src;
        if (!staticImageData.src) {
            throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(staticImageData)}`);
        }
        blurDataURL = blurDataURL || staticImageData.blurDataURL;
        staticSrc = staticImageData.src;
        if (!layout || layout !== "fill") {
            height = height || staticImageData.height;
            width = width || staticImageData.width;
            if (!staticImageData.height || !staticImageData.width) {
                throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(staticImageData)}`);
            }
        }
    }
    src = typeof src === "string" ? src : staticSrc;
    const widthInt = getInt(width);
    const heightInt = getInt(height);
    const qualityInt = getInt(quality);
    let isLazy = !priority && (loading === "lazy" || typeof loading === "undefined");
    if (src.startsWith("data:") || src.startsWith("blob:")) {
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
        unoptimized = true;
        isLazy = false;
    }
    if (false) {}
    const [blurComplete, setBlurComplete] = (0, _react).useState(false);
    const [setIntersection, isIntersected, resetIntersected] = (0, _useIntersection).useIntersection({
        rootRef: lazyRoot,
        rootMargin: lazyBoundary,
        disabled: !isLazy
    });
    const isVisible = !isLazy || isIntersected;
    const wrapperStyle = {
        boxSizing: "border-box",
        display: "block",
        overflow: "hidden",
        width: "initial",
        height: "initial",
        background: "none",
        opacity: 1,
        border: 0,
        margin: 0,
        padding: 0
    };
    const sizerStyle = {
        boxSizing: "border-box",
        display: "block",
        width: "initial",
        height: "initial",
        background: "none",
        opacity: 1,
        border: 0,
        margin: 0,
        padding: 0
    };
    let hasSizer = false;
    let sizerSvgUrl;
    const layoutStyle = {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        boxSizing: "border-box",
        padding: 0,
        border: "none",
        margin: "auto",
        display: "block",
        width: 0,
        height: 0,
        minWidth: "100%",
        maxWidth: "100%",
        minHeight: "100%",
        maxHeight: "100%",
        objectFit,
        objectPosition
    };
    if (false) {}
    if (false) {}
    const imgStyle = Object.assign({}, style, layout === "raw" ? {} : layoutStyle);
    const blurStyle = placeholder === "blur" && !blurComplete ? {
        filter: "blur(20px)",
        backgroundSize: objectFit || "cover",
        backgroundImage: `url("${blurDataURL}")`,
        backgroundPosition: objectPosition || "0% 0%"
    } : {};
    if (layout === "fill") {
        // <Image src="i.png" layout="fill" />
        wrapperStyle.display = "block";
        wrapperStyle.position = "absolute";
        wrapperStyle.top = 0;
        wrapperStyle.left = 0;
        wrapperStyle.bottom = 0;
        wrapperStyle.right = 0;
    } else if (typeof widthInt !== "undefined" && typeof heightInt !== "undefined") {
        // <Image src="i.png" width="100" height="100" />
        const quotient = heightInt / widthInt;
        const paddingTop = isNaN(quotient) ? "100%" : `${quotient * 100}%`;
        if (layout === "responsive") {
            // <Image src="i.png" width="100" height="100" layout="responsive" />
            wrapperStyle.display = "block";
            wrapperStyle.position = "relative";
            hasSizer = true;
            sizerStyle.paddingTop = paddingTop;
        } else if (layout === "intrinsic") {
            // <Image src="i.png" width="100" height="100" layout="intrinsic" />
            wrapperStyle.display = "inline-block";
            wrapperStyle.position = "relative";
            wrapperStyle.maxWidth = "100%";
            hasSizer = true;
            sizerStyle.maxWidth = "100%";
            sizerSvgUrl = `data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27${widthInt}%27%20height=%27${heightInt}%27/%3e`;
        } else if (layout === "fixed") {
            // <Image src="i.png" width="100" height="100" layout="fixed" />
            wrapperStyle.display = "inline-block";
            wrapperStyle.position = "relative";
            wrapperStyle.width = widthInt;
            wrapperStyle.height = heightInt;
        }
    } else {
        // <Image src="i.png" />
        if (false) {}
    }
    let imgAttributes = {
        src: emptyDataURL,
        srcSet: undefined,
        sizes: undefined
    };
    if (isVisible) {
        imgAttributes = generateImgAttrs({
            config,
            src,
            unoptimized,
            layout,
            width: widthInt,
            quality: qualityInt,
            sizes,
            loader
        });
    }
    let srcString = src;
    if (false) {}
    let imageSrcSetPropName = "imagesrcset";
    let imageSizesPropName = "imagesizes";
    if (true) {
        imageSrcSetPropName = "imageSrcSet";
        imageSizesPropName = "imageSizes";
    }
    const linkProps = {
        // Note: imagesrcset and imagesizes are not in the link element type with react 17.
        [imageSrcSetPropName]: imgAttributes.srcSet,
        [imageSizesPropName]: imgAttributes.sizes
    };
    const useLayoutEffect =  true ? _react.default.useEffect : 0;
    const onLoadingCompleteRef = (0, _react).useRef(onLoadingComplete);
    const previousImageSrc = (0, _react).useRef(src);
    (0, _react).useEffect(()=>{
        onLoadingCompleteRef.current = onLoadingComplete;
    }, [
        onLoadingComplete
    ]);
    useLayoutEffect(()=>{
        if (previousImageSrc.current !== src) {
            resetIntersected();
            previousImageSrc.current = src;
        }
    }, [
        resetIntersected,
        src
    ]);
    const imgElementArgs = _objectSpread({
        isLazy,
        imgAttributes,
        heightInt,
        widthInt,
        qualityInt,
        layout,
        className,
        imgStyle,
        blurStyle,
        loading,
        config,
        unoptimized,
        placeholder,
        loader,
        srcString,
        onLoadingCompleteRef,
        setBlurComplete,
        setIntersection,
        isVisible
    }, rest);
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, layout === "raw" ? /*#__PURE__*/ _react.default.createElement(ImageElement, Object.assign({}, imgElementArgs)) : /*#__PURE__*/ _react.default.createElement("span", {
        style: wrapperStyle
    }, hasSizer ? /*#__PURE__*/ _react.default.createElement("span", {
        style: sizerStyle
    }, sizerSvgUrl ? /*#__PURE__*/ _react.default.createElement("img", {
        style: {
            display: "block",
            maxWidth: "100%",
            width: "initial",
            height: "initial",
            background: "none",
            opacity: 1,
            border: 0,
            margin: 0,
            padding: 0
        },
        alt: "",
        "aria-hidden": true,
        src: sizerSvgUrl
    }) : null) : null, /*#__PURE__*/ _react.default.createElement(ImageElement, Object.assign({}, imgElementArgs))), priority ? // for browsers that do not support `imagesrcset`, and in those cases
    // it would likely cause the incorrect image to be preloaded.
    //
    // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
    /*#__PURE__*/ _react.default.createElement(_head.default, null, /*#__PURE__*/ _react.default.createElement("link", Object.assign({
        key: "__nimg-" + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
        rel: "preload",
        as: "image",
        href: imgAttributes.srcSet ? undefined : imgAttributes.src
    }, linkProps))) : null);
}
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    } else {
        var newObj = {};
        if (obj != null) {
            for(var key in obj){
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                    var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};
                    if (desc.get || desc.set) {
                        Object.defineProperty(newObj, key, desc);
                    } else {
                        newObj[key] = obj[key];
                    }
                }
            }
        }
        newObj.default = obj;
        return newObj;
    }
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
var ref;
const experimentalLayoutRaw = (ref = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image/","loader":"custom","experimentalLayoutRaw":false}) === null || ref === void 0 ? void 0 : ref.experimentalLayoutRaw;
const configEnv = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image/","loader":"custom","experimentalLayoutRaw":false};
const loadedImageURLs = new Set();
const allImgs = new Map();
let perfObserver;
const emptyDataURL = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
if (true) {
    global.__NEXT_IMAGE_IMPORTED = true;
}
const VALID_LOADING_VALUES = (/* unused pure expression or super */ null && ([
    "lazy",
    "eager",
    undefined
]));
const loaders = new Map([
    [
        "default",
        defaultLoader
    ],
    [
        "imgix",
        imgixLoader
    ],
    [
        "cloudinary",
        cloudinaryLoader
    ],
    [
        "akamai",
        akamaiLoader
    ],
    [
        "custom",
        customLoader
    ], 
]);
const VALID_LAYOUT_VALUES = (/* unused pure expression or super */ null && ([
    "fill",
    "fixed",
    "intrinsic",
    "responsive",
    "raw",
    undefined, 
]));
function isStaticRequire(src) {
    return src.default !== undefined;
}
function isStaticImageData(src) {
    return src.src !== undefined;
}
function isStaticImport(src) {
    return typeof src === "object" && (isStaticRequire(src) || isStaticImageData(src));
}
function getWidths({ deviceSizes , allSizes  }, width, layout, sizes) {
    if (sizes && (layout === "fill" || layout === "responsive" || layout === "raw")) {
        // Find all the "vw" percent sizes used in the sizes prop
        const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
        const percentSizes = [];
        for(let match; match = viewportWidthRe.exec(sizes); match){
            percentSizes.push(parseInt(match[2]));
        }
        if (percentSizes.length) {
            const smallestRatio = Math.min(...percentSizes) * 0.01;
            return {
                widths: allSizes.filter((s)=>s >= deviceSizes[0] * smallestRatio
                ),
                kind: "w"
            };
        }
        return {
            widths: allSizes,
            kind: "w"
        };
    }
    if (typeof width !== "number" || layout === "fill" || layout === "responsive") {
        return {
            widths: deviceSizes,
            kind: "w"
        };
    }
    const widths = [
        ...new Set(// > are actually 3x in the green color, but only 1.5x in the red and
        // > blue colors. Showing a 3x resolution image in the app vs a 2x
        // > resolution image will be visually the same, though the 3x image
        // > takes significantly more data. Even true 3x resolution screens are
        // > wasteful as the human eye cannot see that level of detail without
        // > something like a magnifying glass.
        // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
        [
            width,
            width * 2 /*, width * 3*/ 
        ].map((w)=>allSizes.find((p)=>p >= w
            ) || allSizes[allSizes.length - 1]
        )), 
    ];
    return {
        widths,
        kind: "x"
    };
}
function generateImgAttrs({ config , src , unoptimized , layout , width , quality , sizes , loader  }) {
    if (unoptimized) {
        return {
            src,
            srcSet: undefined,
            sizes: undefined
        };
    }
    const { widths , kind  } = getWidths(config, width, layout, sizes);
    const last = widths.length - 1;
    return {
        sizes: !sizes && kind === "w" ? "100vw" : sizes,
        srcSet: widths.map((w, i)=>`${loader({
                config,
                src,
                quality,
                width: w
            })} ${kind === "w" ? w : i + 1}${kind}`
        ).join(", "),
        // It's intended to keep `src` the last attribute because React updates
        // attributes in order. If we keep `src` the first one, Safari will
        // immediately start to fetch `src`, before `sizes` and `srcSet` are even
        // updated by React. That causes multiple unnecessary requests if `srcSet`
        // and `sizes` are defined.
        // This bug cannot be reproduced in Chrome or Firefox.
        src: loader({
            config,
            src,
            quality,
            width: widths[last]
        })
    };
}
function getInt(x) {
    if (typeof x === "number") {
        return x;
    }
    if (typeof x === "string") {
        return parseInt(x, 10);
    }
    return undefined;
}
function defaultImageLoader(loaderProps) {
    var ref2;
    const loaderKey = ((ref2 = loaderProps.config) === null || ref2 === void 0 ? void 0 : ref2.loader) || "default";
    const load = loaders.get(loaderKey);
    if (load) {
        return load(loaderProps);
    }
    throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(", ")}. Received: ${loaderKey}`);
}
// See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.
function handleLoading(img, src, layout, placeholder, onLoadingCompleteRef, setBlurComplete) {
    if (!img || img.src === emptyDataURL || img["data-loaded-src"] === src) {
        return;
    }
    img["data-loaded-src"] = src;
    const p = "decode" in img ? img.decode() : Promise.resolve();
    p.catch(()=>{}).then(()=>{
        if (!img.parentNode) {
            // Exit early in case of race condition:
            // - onload() is called
            // - decode() is called but incomplete
            // - unmount is called
            // - decode() completes
            return;
        }
        loadedImageURLs.add(src);
        if (placeholder === "blur") {
            setBlurComplete(true);
        }
        if (onLoadingCompleteRef === null || onLoadingCompleteRef === void 0 ? void 0 : onLoadingCompleteRef.current) {
            const { naturalWidth , naturalHeight  } = img;
            // Pass back read-only primitive values but not the
            // underlying DOM element because it could be misused.
            onLoadingCompleteRef.current({
                naturalWidth,
                naturalHeight
            });
        }
        if (false) { var ref3; }
    });
}
const ImageElement = (_param)=>{
    var { imgAttributes , heightInt , widthInt , qualityInt , layout , className , imgStyle , blurStyle , isLazy , placeholder , loading , srcString , config , unoptimized , loader , onLoadingCompleteRef , setBlurComplete , setIntersection , onLoad , onError , isVisible  } = _param, rest = _objectWithoutProperties(_param, [
        "imgAttributes",
        "heightInt",
        "widthInt",
        "qualityInt",
        "layout",
        "className",
        "imgStyle",
        "blurStyle",
        "isLazy",
        "placeholder",
        "loading",
        "srcString",
        "config",
        "unoptimized",
        "loader",
        "onLoadingCompleteRef",
        "setBlurComplete",
        "setIntersection",
        "onLoad",
        "onError",
        "isVisible"
    ]);
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement("img", Object.assign({}, rest, imgAttributes, layout === "raw" ? {
        height: heightInt,
        width: widthInt
    } : {}, {
        decoding: "async",
        "data-nimg": layout,
        className: className,
        style: _objectSpread({}, imgStyle, blurStyle),
        ref: (0, _react).useCallback((img)=>{
            setIntersection(img);
            if (img === null || img === void 0 ? void 0 : img.complete) {
                handleLoading(img, srcString, layout, placeholder, onLoadingCompleteRef, setBlurComplete);
            }
        }, [
            setIntersection,
            srcString,
            layout,
            placeholder,
            onLoadingCompleteRef,
            setBlurComplete, 
        ]),
        onLoad: (event)=>{
            const img = event.currentTarget;
            handleLoading(img, srcString, layout, placeholder, onLoadingCompleteRef, setBlurComplete);
            if (onLoad) {
                onLoad(event);
            }
        },
        onError: (event)=>{
            if (placeholder === "blur") {
                // If the real image fails to load, this will still remove the placeholder.
                setBlurComplete(true);
            }
            if (onError) {
                onError(event);
            }
        }
    })), (isLazy || placeholder === "blur") && /*#__PURE__*/ _react.default.createElement("noscript", null, /*#__PURE__*/ _react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
        config,
        src: srcString,
        unoptimized,
        layout,
        width: widthInt,
        quality: qualityInt,
        sizes: imgAttributes.sizes,
        loader
    }), layout === "raw" ? {
        height: heightInt,
        width: widthInt
    } : {}, {
        decoding: "async",
        "data-nimg": layout,
        style: imgStyle,
        className: className,
        // @ts-ignore - TODO: upgrade to `@types/react@17`
        loading: loading || "lazy"
    }))));
};
function normalizeSrc(src) {
    return src[0] === "/" ? src.slice(1) : src;
}
function imgixLoader({ config , src , width , quality  }) {
    // Demo: https://static.imgix.net/daisy.png?auto=format&fit=max&w=300
    const url = new URL(`${config.path}${normalizeSrc(src)}`);
    const params = url.searchParams;
    params.set("auto", params.get("auto") || "format");
    params.set("fit", params.get("fit") || "max");
    params.set("w", params.get("w") || width.toString());
    if (quality) {
        params.set("q", quality.toString());
    }
    return url.href;
}
function akamaiLoader({ config , src , width  }) {
    return `${config.path}${normalizeSrc(src)}?imwidth=${width}`;
}
function cloudinaryLoader({ config , src , width , quality  }) {
    // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
    const params = [
        "f_auto",
        "c_limit",
        "w_" + width,
        "q_" + (quality || "auto")
    ];
    const paramsString = params.join(",") + "/";
    return `${config.path}${paramsString}${normalizeSrc(src)}`;
}
function customLoader({ src  }) {
    throw new Error(`Image with src "${src}" is missing "loader" prop.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader`);
}
function defaultLoader({ config , src , width , quality  }) {
    if (false) {}
    if (src.endsWith(".svg") && !config.dangerouslyAllowSVG) {
        // Special case to make svg serve as-is to avoid proxying
        // through the built-in Image Optimization API.
        return src;
    }
    return `${(0, _normalizeTrailingSlash).normalizePathTrailingSlash(config.path)}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}
if (typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) {
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=image.js.map


/***/ })

};
;