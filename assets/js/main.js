/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _partial_js_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partial_js/_data.js */ "./src/partial_js/_data.js");
Vue.config.devtools = true;










document.addEventListener('DOMContentLoaded', function () {
  console.log('ciao ale');
  var root = new Vue({
    el: '#root',
    data: {
      navbarAnchor: _partial_js_data_js__WEBPACK_IMPORTED_MODULE_0__.default.navbarAnchor,
      cardNumber: _partial_js_data_js__WEBPACK_IMPORTED_MODULE_0__.default.cardNumber,
      cardService: _partial_js_data_js__WEBPACK_IMPORTED_MODULE_0__.default.cardService,
      ulService: _partial_js_data_js__WEBPACK_IMPORTED_MODULE_0__.default.ulService,
      cardCourses: _partial_js_data_js__WEBPACK_IMPORTED_MODULE_0__.default.cardCourses,
      cardAbout: _partial_js_data_js__WEBPACK_IMPORTED_MODULE_0__.default.cardAbout,
      logosAbout: _partial_js_data_js__WEBPACK_IMPORTED_MODULE_0__.default.logosAbout,
      cardBlog: _partial_js_data_js__WEBPACK_IMPORTED_MODULE_0__.default.cardBlog,
      cardHelp: _partial_js_data_js__WEBPACK_IMPORTED_MODULE_0__.default.cardHelp,
      logosSocial: _partial_js_data_js__WEBPACK_IMPORTED_MODULE_0__.default.logosSocial,
      footerInfo: _partial_js_data_js__WEBPACK_IMPORTED_MODULE_0__.default.footerInfo
    },
    methods: {},
    compiuted: {},
    created: function created() {
      console.log(this.navbarAnchor);
    }
  });
});

/***/ }),

/***/ "./src/partial_js/_data.js":
/*!*********************************!*\
  !*** ./src/partial_js/_data.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var similAxsios = {
  navbarAnchor: [{
    name: "Home",
    link: "#"
  }, {
    name: "Pages",
    link: "#"
  }, {
    name: "Courses",
    link: "#"
  }, {
    name: "Features",
    link: "#"
  }, {
    name: "Blog",
    link: "#"
  }, {
    name: "Shop",
    link: "#"
  }],
  cardNumber: [{
    number: "1.926",
    aboutNumber: "Finished session"
  }, {
    number: "3.092",
    aboutNumber: "Enrolled learners"
  }, {
    number: "200",
    aboutNumber: "Online istructor"
  }, {
    number: "100%",
    aboutNumber: "Satisfaction rate"
  }],
  cardService: [{
    title: "Graphic Design",
    paragraph: "Have a passion for graphics and arts? Show your talents with confidence and self-assertiveness.",
    img: "01",
    imgPosition: "down"
  }, {
    title: "Idea Discussion",
    paragraph: "Get teamed up with the specialists who work and teach coding for years at famous universities.",
    img: "03",
    imgPosition: "up"
  }, {
    title: "Business Administration",
    paragraph: "Learners are encouraged to study the mechanism and structure of system administration.",
    img: "02",
    imgPosition: "down"
  }, {
    title: "Web Development",
    paragraph: "Learn to start building a webpage from scratch. You decide your own pace, course and speed.",
    img: "04",
    imgPosition: "up"
  }],
  ulService: [{
    nameLi: "Select & customize courses to your preferences"
  }, {
    nameLi: "Change the tutor and make arrangements"
  }, {
    nameLi: "Participate in events to join others"
  }, {
    nameLi: "Get the desired certificate delivered at house"
  }],
  cardCourses: [{
    img: "01",
    cost: "40.00",
    paragraph: "Learning to writhe as a Professional Author",
    lesson: "20",
    student: "50"
  }, {
    img: "02",
    cost: "Free",
    paragraph: "Customer-cintric Info-Tech Strategies",
    lesson: "24",
    student: "769"
  }, {
    img: "03",
    cost: "$19.00",
    paragraph: "Open Programming Courses for Evryone: Python",
    lesson: "17",
    student: "62"
  }, {
    img: "04",
    cost: "$26.00",
    paragraph: "Academic Listening and Note-taking",
    lesson: "14",
    student: "67"
  }, {
    img: "05",
    cost: "$39.00",
    paragraph: "Master jQuery in a Shotr Period Time",
    lesson: "6",
    student: "51"
  }, {
    img: "06",
    cost: "$59.00",
    paragraph: "Itroduction to Javascript for Beginners",
    lesson: "14",
    student: "76"
  }],
  cardAbout: [{
    img: "01",
    paragraph: "I am free to learn at my own pace, follow my own schedule and choose the subject I like. Great study portal for people like me.",
    author: "Mina Hollace",
    work: "/Freelancer"
  }, {
    img: "02",
    paragraph: "MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.",
    author: "Luvic Dubble",
    work: "/Private Tutor"
  }, {
    img: "03",
    paragraph: "MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.",
    author: "Mina Hollace",
    work: "/Freelancer"
  }, {
    img: "04",
    paragraph: "I'm a very strict person so I require everything to be organized and neat. MaxCoach guys just got me.",
    author: "Florence Themes",
    work: "/Multimedia Admin"
  }],
  logosAbout: [{
    logo: "01"
  }, {
    logo: "02"
  }, {
    logo: "03"
  }, {
    logo: "04"
  }, {
    logo: "05"
  }, {
    logo: "06"
  }],
  cardBlog: [{
    img: "01",
    work: "Artist",
    paragraph: "Brush Strokes Energize Trees in Painting",
    data: "May 15, 2020",
    views: "688"
  }, {
    img: "02",
    work: "Artist",
    paragraph: "Poket-Sized Notebooks Hold Miniature Paintings",
    data: "May 15, 2020",
    views: "603"
  }, {
    img: "03",
    work: "Artist",
    paragraph: "Connection between Self-Protrains and Identity",
    data: "May 15, 2020",
    views: "397"
  }],
  cardHelp: [{
    icon: "far fa-flag",
    title: "Idea Discussion",
    paragraph: "Get teamed up with the specialists who work and teach coding for years at famous universities."
  }, {
    icon: "fas fa-cog",
    title: "Web Development",
    paragraph: "Learn to start building a webpage from scratch. You decide your own pace, course and speed."
  }, {
    icon: "fas fa-life-ring",
    title: "System Administration",
    paragraph: "Learners are encouraged to study the mechanism and structure of system administration."
  }, {
    icon: "fas fa-tv",
    title: "Graphic Design",
    paragraph: "Have a passion for graphics and arts? Show your talents with confidence and self-assertiveness."
  }],
  logosSocial: [{
    icon: "fab fa-facebook-square"
  }, {
    icon: "fab fa-twitter"
  }, {
    icon: "fab fa-instagram"
  }, {
    icon: "fab fa-linkedin"
  }],
  footerInfo: {
    explore: [{
      text: "Start Here",
      link: "#"
    }, {
      text: "Success story",
      link: "#"
    }, {
      text: "Blog",
      link: "#"
    }, {
      text: "Courses",
      link: "#"
    }, {
      text: "About us",
      link: "#"
    }, {
      text: "Contact us",
      link: "#"
    }],
    information: [{
      text: "Membership",
      link: "#"
    }, {
      text: "Purchase guide",
      link: "#"
    }, {
      text: "Privacy policy",
      link: "#"
    }, {
      text: "Terms of service",
      link: "#"
    }]
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (similAxsios);

/***/ }),

/***/ "./src/master.scss":
/*!*************************!*\
  !*** ./src/master.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/assets/js/main": 0,
/******/ 			"assets/css/master": 0
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
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			__webpack_require__.O();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkproj_html_vuejs"] = self["webpackChunkproj_html_vuejs"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["assets/css/master"], () => (__webpack_require__("./src/main.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["assets/css/master"], () => (__webpack_require__("./src/master.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;