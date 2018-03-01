module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/App.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_comp_Layout__ = __webpack_require__("./src/comp/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_comp_ToolBar__ = __webpack_require__("./src/comp/ToolBar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_comp_Banner__ = __webpack_require__("./src/comp/Banner.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_comp_About__ = __webpack_require__("./src/comp/About.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_comp_Graph__ = __webpack_require__("./src/comp/Graph.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_comp_Footer__ = __webpack_require__("./src/comp/Footer.js");
var _jsxFileName = "/Users/angellydejesus/Documents/dev/pulse-react/pages/App.js";








/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1__src_comp_Layout__["a" /* default */],
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__src_comp_ToolBar__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__src_comp_Banner__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__src_comp_About__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__src_comp_Graph__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__src_comp_Footer__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      }
    })
  );
});

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__("react-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App__ = __webpack_require__("./pages/App.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registerServiceWorker__ = __webpack_require__("./pages/registerServiceWorker.js");
var _jsxFileName = '/Users/angellydejesus/Documents/dev/pulse-react/pages/index.js';





__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__App__["a" /* default */], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  }
}), document.getElementById("root"));
Object(__WEBPACK_IMPORTED_MODULE_3__registerServiceWorker__["a" /* default */])();

/***/ }),

/***/ "./pages/registerServiceWorker.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = register;
/* unused harmony export unregister */
// In production, we register a service worker to serve assets from local cache.

// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on the "N+1" visit to a page, since previously
// cached resources are updated in the background.

// To learn more about the benefits of this model, read https://goo.gl/KwvDNy.
// This link also includes instructions on opting out of this behavior.

var isLocalhost = Boolean(window.location.hostname === 'localhost' ||
// [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' ||
// 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));

function register() {
  if (false) {
    // The URL constructor is available in all browsers that support SW.
    var publicUrl = new URL(process.env.PUBLIC_URL, window.location);
    if (publicUrl.origin !== window.location.origin) {
      // Our service worker won't work if PUBLIC_URL is on a different origin
      // from what our page is served on. This might happen if a CDN is used to
      // serve assets; see https://github.com/facebookincubator/create-react-app/issues/2374
      return;
    }

    window.addEventListener('load', function () {
      var swUrl = process.env.PUBLIC_URL + '/service-worker.js';

      if (isLocalhost) {
        // This is running on localhost. Lets check if a service worker still exists or not.
        checkValidServiceWorker(swUrl);

        // Add some additional logging to localhost, pointing developers to the
        // service worker/PWA documentation.
        navigator.serviceWorker.ready.then(function () {
          console.log('This web app is being served cache-first by a service ' + 'worker. To learn more, visit https://goo.gl/SC7cgQ');
        });
      } else {
        // Is not local host. Just register service worker
        registerValidSW(swUrl);
      }
    });
  }
}

function registerValidSW(swUrl) {
  navigator.serviceWorker.register(swUrl).then(function (registration) {
    registration.onupdatefound = function () {
      var installingWorker = registration.installing;
      installingWorker.onstatechange = function () {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the old content will have been purged and
            // the fresh content will have been added to the cache.
            // It's the perfect time to display a "New content is
            // available; please refresh." message in your web app.
            console.log('New content is available; please refresh.');
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.');
          }
        }
      };
    };
  }).catch(function (error) {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(function (response) {
    // Ensure service worker exists, and that we really are getting a JS file.
    if (response.status === 404 || response.headers.get('content-type').indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(function (registration) {
        registration.unregister().then(function () {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl);
    }
  }).catch(function () {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ "./src/comp/About.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/Users/angellydejesus/Documents/dev/pulse-react/src/comp/About.js";



/* harmony default export */ __webpack_exports__["a"] = (function () {
	return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
		"div",
		{ id: "about", className: "jsx-3859698729",
			__source: {
				fileName: _jsxFileName,
				lineNumber: 4
			}
		},
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
			"div",
			{ id: "title", className: "jsx-3859698729",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 5
				}
			},
			"ABOUT ALVAREZ & MARSAL TAXAND"
		),
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
			"div",
			{ id: "bio-info", className: "jsx-3859698729",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 8
				}
			},
			__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
				"p",
				{
					className: "jsx-3859698729",
					__source: {
						fileName: _jsxFileName,
						lineNumber: 9
					}
				},
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque iaculis libero leo, sit amet interdum urna scelerisque sed. Quisque vitae sodales turpis, quis hendrerit ex. Fusce magna ipsum, eleifend sed augue id, condimentum volutpat purus. Pellentesque vitae elit orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin in lorem dolor. Fusce interdum feugiat nisl. Suspendisse eu quam purus. Nulla vulputate sem eget ipsum consectetur, a lobortis felis iaculis."
			),
			__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
				className: "jsx-3859698729",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 10
				}
			}),
			__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
				"p",
				{
					className: "jsx-3859698729",
					__source: {
						fileName: _jsxFileName,
						lineNumber: 11
					}
				},
				"Nullam ipsum eros, volutpat vel faucibus ullamcorper, blandit nec urna. Curabitur porta nunc quis quam congue, venenatis vestibulum leo lacinia. Nunc finibus mollis eros, eget condimentum massa efficitur id. Nulla scelerisque metus sit amet tellus laoreet, ut aliquam velit auctor. Sed ultrices ante urna, condimentum placerat enim lacinia. "
			)
		),
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
			styleId: "3859698729",
			css: "#about.jsx-3859698729{position:static;width:100%;padding:5% 15% 5% 15%;text-align:center;border-bottom:5px solid lightBlue;box-shadow:1px 1px grey;}#title.jsx-3859698729{padding-bottom:3%;width:100%;height:auto;text-align:center;color:#00355f;font-size:50px;line-height:58px;}#bio-info.jsx-3859698729{color:#000000;font-size:20px;line-height:30px;-webkit-transform:scaleX(1.011);-ms-transform:scaleX(1.011);transform:scaleX(1.011);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wL0Fib3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFjLEFBR29CLEFBUUMsQUFTSixjQUNFLEVBakJMLEVBUUEsU0FQVyxFQVFWLEFBU00sWUFSQyxLQVNNLEdBakJQLFVBU0gsUUFSb0IsTUFTbkIsZUFDRSxhQVRPLElBVXpCLG9CQVRBLEtBZUEiLCJmaWxlIjoic3JjL2NvbXAvQWJvdXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FuZ2VsbHlkZWplc3VzL0RvY3VtZW50cy9kZXYvcHVsc2UtcmVhY3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuPGRpdiBpZD1cImFib3V0XCI+XG5cdDxkaXYgaWQ9XCJ0aXRsZVwiPlxuXHRcdEFCT1VUIEFMVkFSRVogJiBNQVJTQUwgVEFYQU5EXG5cdDwvZGl2PlxuXHRcdDxkaXYgIGlkPVwiYmlvLWluZm9cIj5cblx0XHRcdDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFF1aXNxdWUgaWFjdWxpcyBsaWJlcm8gbGVvLCBzaXQgYW1ldCBpbnRlcmR1bSB1cm5hIHNjZWxlcmlzcXVlIHNlZC4gUXVpc3F1ZSB2aXRhZSBzb2RhbGVzIHR1cnBpcywgcXVpcyBoZW5kcmVyaXQgZXguIEZ1c2NlIG1hZ25hIGlwc3VtLCBlbGVpZmVuZCBzZWQgYXVndWUgaWQsIGNvbmRpbWVudHVtIHZvbHV0cGF0IHB1cnVzLiBQZWxsZW50ZXNxdWUgdml0YWUgZWxpdCBvcmNpLiBPcmNpIHZhcml1cyBuYXRvcXVlIHBlbmF0aWJ1cyBldCBtYWduaXMgZGlzIHBhcnR1cmllbnQgbW9udGVzLCBuYXNjZXR1ciByaWRpY3VsdXMgbXVzLiBQcm9pbiBpbiBsb3JlbSBkb2xvci4gRnVzY2UgaW50ZXJkdW0gZmV1Z2lhdCBuaXNsLiBTdXNwZW5kaXNzZSBldSBxdWFtIHB1cnVzLiBOdWxsYSB2dWxwdXRhdGUgc2VtIGVnZXQgaXBzdW0gY29uc2VjdGV0dXIsIGEgbG9ib3J0aXMgZmVsaXMgaWFjdWxpcy48L3A+XG5cdFx0XHQ8YnIvPlxuXHRcdFx0PHA+XG5cdFx0XHRcdE51bGxhbSBpcHN1bSBlcm9zLCB2b2x1dHBhdCB2ZWwgZmF1Y2lidXMgdWxsYW1jb3JwZXIsIGJsYW5kaXQgbmVjIHVybmEuIEN1cmFiaXR1ciBwb3J0YSBudW5jIHF1aXMgcXVhbSBjb25ndWUsIHZlbmVuYXRpcyB2ZXN0aWJ1bHVtIGxlbyBsYWNpbmlhLiBOdW5jIGZpbmlidXMgbW9sbGlzIGVyb3MsIGVnZXQgY29uZGltZW50dW0gbWFzc2EgZWZmaWNpdHVyIGlkLiBOdWxsYSBzY2VsZXJpc3F1ZSBtZXR1cyBzaXQgYW1ldCB0ZWxsdXMgbGFvcmVldCwgdXQgYWxpcXVhbSB2ZWxpdCBhdWN0b3IuIFNlZCB1bHRyaWNlcyBhbnRlIHVybmEsIGNvbmRpbWVudHVtIHBsYWNlcmF0IGVuaW0gbGFjaW5pYS4gPC9wPlxuXHRcdDwvZGl2PlxuXHRcdDxzdHlsZSBqc3g+e2Bcblx0XHQjYWJvdXR7XG5cdFx0XHRwb3NpdGlvbjogc3RhdGljO1xuXHRcdFx0d2lkdGg6MTAwJTtcblx0XHRcdHBhZGRpbmc6NSUgMTUlIDUlIDE1JTtcblx0XHRcdHRleHQtYWxpZ246Y2VudGVyO1xuXHRcdFx0Ym9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIGxpZ2h0Qmx1ZTtcblx0XHRcdGJveC1zaGFkb3c6IDFweCAxcHggZ3JleTtcblx0XHR9XG5cdFx0I3RpdGxle1xuXHRcdFx0cGFkZGluZy1ib3R0b206MyU7XG5cdFx0XHR3aWR0aDoxMDAlO1xuXHRcdFx0aGVpZ2h0OmF1dG87XG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRjb2xvcjogIzAwMzU1Zjtcblx0XHRcdGZvbnQtc2l6ZTogNTBweDtcblx0XHRcdGxpbmUtaGVpZ2h0OiA1OHB4O1xuXHRcdH1cblx0XHQjYmlvLWluZm97XG5cdFx0XHRjb2xvcjojMDAwMDAwO1xuXHRcdFx0Zm9udC1zaXplOiAyMHB4O1xuXHRcdFx0bGluZS1oZWlnaHQ6IDMwcHg7XG5cdFx0XHR0cmFuc2Zvcm06IHNjYWxlWCgxLjAxMSk7XG5cdFx0fVxuXHRcdGB9PC9zdHlsZT5cbjwvZGl2PlxuKSJdfQ== */\n/*@ sourceURL=src/comp/About.js */"
		})
	);
});

/***/ }),

/***/ "./src/comp/Banner.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__img_amtax_mp4__ = __webpack_require__("./src/img/amtax.mp4");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__img_amtax_mp4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__img_amtax_mp4__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Circle_js__ = __webpack_require__("./src/comp/Circle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__img_global_png__ = __webpack_require__("./src/img/global.png");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__img_global_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__img_global_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__img_date_png__ = __webpack_require__("./src/img/date.png");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__img_date_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__img_date_png__);
var _jsxFileName = '/Users/angellydejesus/Documents/dev/pulse-react/src/comp/Banner.js';







/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    { id: 'banner', className: 'jsx-589233167',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      { id: 'video-layer', className: 'jsx-589233167',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'video',
        { autoPlay: true, loop: true, id: 'bg-video', className: 'jsx-589233167',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('source', { src: __WEBPACK_IMPORTED_MODULE_2__img_amtax_mp4__["default"], type: 'video/mp4', className: 'jsx-589233167',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          }
        })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', { id: 'bg-layer', className: 'jsx-589233167',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      }
    }),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      { id: 'circle-title', className: 'jsx-589233167',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Circle_js__["a" /* default */], {
        backgroundColor: 'rgba(73, 85, 129, 0.5)',
        width: '58vw',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: 'jsx-589233167' + ' ' + 'header-wrapper',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'header',
          {
            className: 'jsx-589233167',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'h1',
            {
              className: 'jsx-589233167',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 25
              }
            },
            '16-18 MAY 2018'
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'h2',
            {
              className: 'jsx-589233167',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 26
              }
            },
            'Tax Trends Today'
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      { id: 'circle-logo', className: 'jsx-589233167',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Circle_js__["a" /* default */], {
        backgroundColor: 'rgba(2, 26, 59, 0.6)',
        width: '30vw', __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: 'jsx-589233167' + ' ' + 'header-wrapper',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'header',
          {
            className: 'jsx-589233167',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 36
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: __WEBPACK_IMPORTED_MODULE_4__img_global_png__["default"], alt: 'Global Conf', className: 'jsx-589233167',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            }
          })
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      { id: 'circle-date', className: 'jsx-589233167',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Circle_js__["a" /* default */], {
        backgroundColor: 'rgba(170, 182, 71, 0.6)',
        width: '15vw', __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: 'jsx-589233167' + ' ' + 'header-wrapper',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'header',
          {
            className: 'jsx-589233167',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: __WEBPACK_IMPORTED_MODULE_5__img_date_png__["default"], alt: 'date', className: 'jsx-589233167',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            }
          })
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: '589233167',
      css: '#banner.jsx-589233167{position:relative;width:100%;padding-top:3em;}#bg-layer.jsx-589233167{position:absolute;top:0;bottom:5px;right:0;left:0;background-color:rgba(19,40,69,0.6);}#bg-video.jsx-589233167{width:100%;height:100%;}#circle-title.jsx-589233167{position:absolute;left:-10%;bottom:5px;height:536px;overflow:hidden;}.header-wrapper.jsx-589233167{color:white;}#circle-title.jsx-589233167 .header-wrapper.jsx-589233167{position:absolute;top:0;left:0;right:0;bottom:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}#circle-title.jsx-589233167 header.jsx-589233167{text-align:center;}#circle-title.jsx-589233167 header.jsx-589233167 h1.jsx-589233167{font-size:36px;}#circle-title.jsx-589233167 header.jsx-589233167 h2.jsx-589233167{font-size:30px;}#circle-logo.jsx-589233167{position:absolute;right:12%;top:29%;}#circle-logo.jsx-589233167 .header-wrapper.jsx-589233167{position:absolute;top:0;right:10px;left:0;bottom:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}#circle-logo.jsx-589233167 header.jsx-589233167{text-align:center;}#circle-date.jsx-589233167{position:absolute;right:9%;top:26%;}#circle-date.jsx-589233167 .header-wrapper.jsx-589233167{position:absolute;top:0;right:10px;left:0;bottom:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}#circle-date.jsx-589233167 header.jsx-589233167{text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wL0Jhbm5lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRGMsQUFHeUIsQUFNQSxBQVNQLEFBS08sQUFPUCxBQUdPLEFBV0EsQUFJSCxBQUlBLEFBSUcsQUFPQSxBQVdBLEFBSUEsQUFPQSxBQVdBLFdBN0VOLENBWWQsR0FrQkEsQUFJQSxHQWpEYSxBQU1MLEFBY0ksQUFVSixBQVdSLEFBWVksQUFPSixBQVdSLEFBSVcsQUFPSCxBQVdSLEtBN0VBLENBVGEsQUF3QkosQUE4QkksQUFzQkEsR0FQSCxDQXZERyxBQWlDSCxDQXJEUSxFQStCUixJQXhCQSxBQXNERixBQWVSLEFBT1EsQ0E3QlIsR0FqQ2UsQUFXSixHQThCQSxBQXNCQSxDQTVFRixFQVBULEdBZ0NlLEVBeEIwQixDQXNEMUIsQUFzQkEsQ0EvREcsZ0JBQ2xCLGtCQWJBLG9DQXdCeUIsR0E4QkEsQUFzQkEsZ0dBbkRKLEdBOEJBLEFBc0JBLDBGQW5EckIsR0E4QkEsQUFzQkEiLCJmaWxlIjoic3JjL2NvbXAvQmFubmVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hbmdlbGx5ZGVqZXN1cy9Eb2N1bWVudHMvZGV2L3B1bHNlLXJlYWN0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgdmlkZW8gZnJvbSAnLi4vaW1nL2FtdGF4Lm1wNCdcbmltcG9ydCBDaXJjbGUgZnJvbSAnLi9DaXJjbGUuanMnXG5pbXBvcnQgZ2xvYmFsIGZyb20gJy4uL2ltZy9nbG9iYWwucG5nJ1xuaW1wb3J0IGRhdGUgZnJvbSAnLi4vaW1nL2RhdGUucG5nJ1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG48ZGl2IGlkPVwiYmFubmVyXCI+XG5cbiAgPGRpdiBpZD1cInZpZGVvLWxheWVyXCI+XG4gICAgPHZpZGVvIGF1dG9QbGF5IGxvb3AgaWQ9XCJiZy12aWRlb1wiPlxuICAgICAgPHNvdXJjZSBzcmM9e3ZpZGVvfSB0eXBlPVwidmlkZW8vbXA0XCIvPlxuICAgIDwvdmlkZW8+XG4gIDwvZGl2PlxuXG4gIDxkaXYgaWQ9XCJiZy1sYXllclwiPjwvZGl2PlxuXG4gIDxkaXYgaWQ9XCJjaXJjbGUtdGl0bGVcIj5cbiAgICA8Q2lyY2xlIFxuICAgICAgYmFja2dyb3VuZENvbG9yPVwicmdiYSg3MywgODUsIDEyOSwgMC41KVwiIFxuICAgICAgd2lkdGg9XCI1OHZ3XCJcbiAgICAvPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXdyYXBwZXJcIj5cbiAgICAgIDxoZWFkZXI+XG4gICAgICAgIDxoMT4xNi0xOCBNQVkgMjAxODwvaDE+XG4gICAgICAgIDxoMj5UYXggVHJlbmRzIFRvZGF5PC9oMj5cbiAgICAgIDwvaGVhZGVyPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8ZGl2IGlkPVwiY2lyY2xlLWxvZ29cIj5cbiAgICA8Q2lyY2xlIFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCJyZ2JhKDIsIDI2LCA1OSwgMC42KVwiIFxuICAgICAgICB3aWR0aD1cIjMwdndcIi8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci13cmFwcGVyXCI+XG4gICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgPGltZyBzcmM9e2dsb2JhbH0gYWx0PVwiR2xvYmFsIENvbmZcIiAvPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8ZGl2IGlkPVwiY2lyY2xlLWRhdGVcIj5cbiAgICA8Q2lyY2xlIFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCJyZ2JhKDE3MCwgMTgyLCA3MSwgMC42KVwiIFxuICAgICAgICB3aWR0aD1cIjE1dndcIi8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci13cmFwcGVyXCI+XG4gICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgPGltZyBzcmM9e2RhdGV9IGFsdD1cImRhdGVcIi8+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgPC9kaXY+XG4gIDwvZGl2PlxuXG4gIDxzdHlsZSBqc3g+e2BcbiAgICAjYmFubmVye1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nLXRvcDogM2VtO1xuICAgIH1cblxuICAgICNiZy1sYXllciB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICBib3R0b206IDVweDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTksIDQwLCA2OSwgMC42KTtcbiAgICB9XG5cbiAgICAjYmctdmlkZW8ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuXG4gICAgI2NpcmNsZS10aXRsZSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAtMTAlO1xuICAgICAgYm90dG9tOiA1cHg7XG4gICAgICBoZWlnaHQ6IDUzNnB4O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG4gICAgLmhlYWRlci13cmFwcGVye1xuICAgICAgY29sb3I6d2hpdGU7XG4gICAgfVxuICAgICNjaXJjbGUtdGl0bGUgLmhlYWRlci13cmFwcGVyIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgI2NpcmNsZS10aXRsZSBoZWFkZXIge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgICNjaXJjbGUtdGl0bGUgaGVhZGVyIGgxIHtcbiAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICB9XG5cbiAgICAjY2lyY2xlLXRpdGxlIGhlYWRlciBoMiB7XG4gICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgfVxuXG4gICAgI2NpcmNsZS1sb2dvIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAxMiU7XG4gICAgICB0b3A6IDI5JTtcbiAgICB9XG5cblxuICAgICNjaXJjbGUtbG9nbyAuaGVhZGVyLXdyYXBwZXIge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICBsZWZ0OjA7XG4gICAgICBib3R0b206IDA7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgICNjaXJjbGUtbG9nbyBoZWFkZXIge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICBcbiAgICAjY2lyY2xlLWRhdGUge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IDklO1xuICAgICAgdG9wOiAyNiU7XG4gICAgfVxuXG5cbiAgICAjY2lyY2xlLWRhdGUgLmhlYWRlci13cmFwcGVyIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgbGVmdDowO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAjY2lyY2xlLWRhdGUgaGVhZGVyIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gIGB9PC9zdHlsZT5cbjwvZGl2PlxuKSJdfQ== */\n/*@ sourceURL=src/comp/Banner.js */'
    })
  );
});

/***/ }),

/***/ "./src/comp/Circle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/angellydejesus/Documents/dev/pulse-react/src/comp/Circle.js";


var divStyle = {
  boxSizing: "border-box",
  borderRadius: "100%"
};

var Circle = function Circle(_ref) {
  var title = _ref.title,
      content = _ref.content,
      backgroundColor = _ref.backgroundColor,
      _ref$width = _ref.width,
      width = _ref$width === undefined ? "500px" : _ref$width,
      fontSize = _ref.fontSize,
      headerFontSize = _ref.headerFontSize,
      borderRadius = _ref.borderRadius;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { style: Object.assign({}, divStyle, {
      backgroundColor: backgroundColor,
      width: width,
      height: width,
      fontSize: fontSize
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Circle);

/***/ }),

/***/ "./src/comp/Footer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__img_social_media_png__ = __webpack_require__("./src/img/social_media.png");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__img_social_media_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__img_social_media_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__img_bottom_logo_png__ = __webpack_require__("./src/img/bottom-logo.png");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__img_bottom_logo_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__img_bottom_logo_png__);
var _jsxFileName = "/Users/angellydejesus/Documents/dev/pulse-react/src/comp/Footer.js";





/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    "footer",
    {
      className: "jsx-4277770948" + " " + "footer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      "div",
      {
        className: "jsx-4277770948" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "div",
        {
          className: "jsx-4277770948" + " " + "footer-content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "div",
          { id: "bottom-logo", className: "jsx-4277770948",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 10
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", { src: __WEBPACK_IMPORTED_MODULE_3__img_bottom_logo_png__["default"], alt: "logo", className: "jsx-4277770948",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 11
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "div",
            { id: "address", className: "jsx-4277770948",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 12
              }
            },
            "600 Madison Avenue",
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
              className: "jsx-4277770948",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 13
              }
            }),
            "8th Floor",
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
              className: "jsx-4277770948",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 14
              }
            }),
            "New York, New York, 10022"
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "div",
          { id: "social", className: "jsx-4277770948",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 19
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "strong",
            {
              className: "jsx-4277770948",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 20
              }
            },
            "Follow us on: "
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
            className: "jsx-4277770948",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", { src: __WEBPACK_IMPORTED_MODULE_2__img_social_media_png__["default"], alt: "social-media", className: "jsx-4277770948",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            }
          })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "div",
        {
          className: "jsx-4277770948" + " " + "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "div",
          { id: "copy", className: "jsx-4277770948",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 26
            }
          },
          "\xA9 Copyright 2017, Alvarez & Marsal Holdings, LLC. All Rights Reserved."
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: "4277770948",
      css: ".footer.jsx-4277770948{background-color:rgb(0,43,73);width:100%;height:auto;color:white;}.container.jsx-4277770948{max-width:970px;margin:0 auto;}.row.jsx-4277770948{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.footer-content.jsx-4277770948{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-top:2em;padding-bottom:3em;}#bottom-logo.jsx-4277770948{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:42%;}#address.jsx-4277770948{color:#ffffff;font-size:20px;line-height:22px;}#copy.jsx-4277770948{font-size:16px;line-height:36px;padding:1%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wL0Zvb3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QmMsQUFHdUMsQUFNaEIsQUFJSCxBQUdGLEFBUUUsQUFNQyxBQUtDLFdBbEJGLEdBY0UsQ0FLRSxDQTFCSCxhQXNCRyxDQTVCTixBQU9iLEVBMEJZLFNBaENFLEVBaUNkLEdBTEEsT0EzQmMsWUFDZCxTQU9BLEFBV2dDLFdBUEEsd0dBUVgsV0FQQSxrRkFRVCxVQUNaLENBUmtCLGdCQUNHLG1CQUNyQiIsImZpbGUiOiJzcmMvY29tcC9Gb290ZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FuZ2VsbHlkZWplc3VzL0RvY3VtZW50cy9kZXYvcHVsc2UtcmVhY3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBTb2NpYWwgZnJvbSBcIi4uL2ltZy9zb2NpYWxfbWVkaWEucG5nXCJcbmltcG9ydCBCb3R0b21Mb2dvIGZyb20gXCIuLi9pbWcvYm90dG9tLWxvZ28ucG5nXCJcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuPGZvb3RlciBjbGFzc05hbWU9XCJmb290ZXJcIj5cbiAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1jb250ZW50XCI+XG4gICAgICBcbiAgICAgIDxkaXYgaWQ9XCJib3R0b20tbG9nb1wiPlxuICAgICAgICA8aW1nIHNyYz17Qm90dG9tTG9nb30gYWx0PVwibG9nb1wiLz5cbiAgICAgICAgPGRpdiBpZD1cImFkZHJlc3NcIj5cbiAgICAgICAgICA2MDAgTWFkaXNvbiBBdmVudWU8YnIvPlxuICAgICAgICAgIDh0aCBGbG9vcjxici8+XG4gICAgICAgICAgTmV3IFlvcmssIE5ldyBZb3JrLCAxMDAyMlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgICA8ZGl2IGlkPVwic29jaWFsXCI+XG4gICAgICAgIDxzdHJvbmc+Rm9sbG93IHVzIG9uOiA8L3N0cm9uZz5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxpbWcgc3JjPXtTb2NpYWx9IGFsdD1cInNvY2lhbC1tZWRpYVwiLz5cbiAgICAgIDwvZGl2Plx0XHRcbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgPGRpdiBpZD1cImNvcHlcIj5cbiAgICAgICAgwqkgQ29weXJpZ2h0IDIwMTcsIEFsdmFyZXogJiBNYXJzYWwgSG9sZGluZ3MsIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPHN0eWxlIGpzeD57YFxuICAgIC5mb290ZXJ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgNDMsIDczKTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICAuY29udGFpbmVyIHtcbiAgICAgIG1heC13aWR0aDogOTcwcHg7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG4gICAgLnJvd3tcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuICAgIC5mb290ZXItY29udGVudHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nLXRvcDogMmVtO1xuICAgICAgcGFkZGluZy1ib3R0b206IDNlbTtcbiAgICB9XG4gICAgI2JvdHRvbS1sb2dve1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB3aWR0aDogNDIlO1xuICAgIH1cbiAgICAjYWRkcmVzc3tcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgfVxuICAgICNjb3B5e1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gICAgICBwYWRkaW5nOjElO1xuICAgIH1cbiAgICAjc29jaWFse1xuICAgIH1cbiAgYH08L3N0eWxlPlxuPC9mb290ZXI+XG4pIl19 */\n/*@ sourceURL=src/comp/Footer.js */"
    })
  );
});

/***/ }),

/***/ "./src/comp/Graph.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__img_wheel_png__ = __webpack_require__("./src/img/wheel.png");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__img_wheel_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__img_wheel_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__img_think2_jpg__ = __webpack_require__("./src/img/think2.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__img_think2_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__img_think2_jpg__);
var _jsxFileName = '/Users/angellydejesus/Documents/dev/pulse-react/src/comp/Graph.js';





// let bgStyle = {
//     backgroundImage: `url(${Background})`
// }

/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    {
      className: 'jsx-757885570' + ' ' + 'wrapper',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', {
      className: 'jsx-757885570' + ' ' + 'bg-img',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    }),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', { id: 'grey-area', className: 'jsx-757885570',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    }),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      {
        className: 'jsx-757885570' + ' ' + 'row',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { id: 'wheel-info', className: 'jsx-757885570' + ' ' + 'col',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'h1',
          {
            className: 'jsx-757885570',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 16
            }
          },
          'WHAT WE DO'
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'p',
          {
            className: 'jsx-757885570',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 17
            }
          },
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque iaculis libero leo, sit amet interdum urna scelerisque sed. Quisque vitae sodales turpis, quis hendrerit ex. Fusce magna ipsum, eleifend sed augue id, condimentum volutpat purus. Pellentesque vitae elit orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin in lorem dolor. Fusce interdum feugiat nisl.'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { id: 'wheel', className: 'jsx-757885570' + ' ' + 'col',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: __WEBPACK_IMPORTED_MODULE_2__img_wheel_png__["default"], alt: 'Graph Wheel', className: 'jsx-757885570',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          }
        })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: '757885570',
      css: '.wrapper.jsx-757885570{display:grid;position:relative;}.row.jsx-757885570{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.col.jsx-757885570{background:transparent;}#wheel.jsx-757885570{width:50%;float:right;margin:5%;}#wheel-info.jsx-757885570{position:relative;top:20%;left:5%;bottom:0;right:0;margin:2%;float:left;padding:2%;margin:2%;height:100%;width:100%;}#wheel-info.jsx-757885570 h1.jsx-757885570{width:100%;color:#00355f;font-size:60px;line-height:58px;}#wheel-info.jsx-757885570 p.jsx-757885570{width:100%;height:11.7%;color:#000000;font-size:20px;line-height:30px;-webkit-transform:scaleX(1.011);-ms-transform:scaleX(1.011);transform:scaleX(1.011);}.bg-img.jsx-757885570{position:absolute;width:100%;height:auto;top:0;bottom:0;left:0;right:0;z-index:-1;background-image:url(' + __WEBPACK_IMPORTED_MODULE_3__img_think2_jpg__["default"] + ');background-attachment:cover;background-position:center;background-repeat:no-repeat;-webkit-filter:grayscale(100%);-webkit-filter:grayscale(100%);filter:grayscale(100%);-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover;}#grey-area.jsx-757885570{background-color:rgba(225,225,225,0.85);position:absolute;width:100%;height:60%;top:20%;z-index:-1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wL0dyYXBoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCa0IsQUFHc0IsQUFJQSxBQUlVLEFBR2IsQUFLTyxBQWFOLEFBTUEsQUFRTyxBQXFCeUIsVUFwRC9CLENBa0JFLEFBTUQsRUFuQ0ssS0FnQlYsQUEyQkcsSUEvQkYsQ0FKWCxDQTRCZ0IsQ0FOQyxDQWJQLEdBMkJJLEVBM0NkLENBWUEsRUFLVyxJQW1CTSxFQU5FLEFBaUNDLENBbkJaLEVBMUJFLElBMkJDLElBMUJBLEVBa0JRLEdBU1YsQ0FmWCxDQWlDZSxHQTVDQSxFQTJCSCxNQWtCRSxDQTNCYyxDQVViLENBM0JELEVBbEJhLE1BK0RoQixFQWpCNEMsQ0EzQjFDLEtBNkNFLEtBNUNBLE1BNkNmLE1BNUNjLFdBQ1osaUJBeUI4QixxQkFYaEMsT0FZK0IsWUEvQy9CLGVBZ0RnQyw0QkFDRywrQkFDUixzREFDTyw4QkFDSCwyQkFDRix5QkFDSCxzQkFFMUIiLCJmaWxlIjoic3JjL2NvbXAvR3JhcGguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FuZ2VsbHlkZWplc3VzL0RvY3VtZW50cy9kZXYvcHVsc2UtcmVhY3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBXaGVlbEltYWdlIGZyb20gJy4uL2ltZy93aGVlbC5wbmcnXG5pbXBvcnQgQmFja2dyb3VuZCBmcm9tICcuLi9pbWcvdGhpbmsyLmpwZydcblxuLy8gbGV0IGJnU3R5bGUgPSB7XG4vLyAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7QmFja2dyb3VuZH0pYFxuLy8gfVxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG48ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgPGRpdiBjbGFzc05hbWU9XCJiZy1pbWdcIj48L2Rpdj5cbiAgPGRpdiBpZD1cImdyZXktYXJlYVwiPjwvZGl2PlxuXG4gIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICA8ZGl2IGlkPVwid2hlZWwtaW5mb1wiIGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgIDxoMT5XSEFUIFdFIERPPC9oMT5cbiAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBRdWlzcXVlIGlhY3VsaXMgbGliZXJvIGxlbywgc2l0IGFtZXQgaW50ZXJkdW0gdXJuYSBzY2VsZXJpc3F1ZSBzZWQuIFF1aXNxdWUgdml0YWUgc29kYWxlcyB0dXJwaXMsIHF1aXMgaGVuZHJlcml0IGV4LiBGdXNjZSBtYWduYSBpcHN1bSwgZWxlaWZlbmQgc2VkIGF1Z3VlIGlkLCBjb25kaW1lbnR1bSB2b2x1dHBhdCBwdXJ1cy4gUGVsbGVudGVzcXVlIHZpdGFlIGVsaXQgb3JjaS4gT3JjaSB2YXJpdXMgbmF0b3F1ZSBwZW5hdGlidXMgZXQgbWFnbmlzIGRpcyBwYXJ0dXJpZW50IG1vbnRlcywgbmFzY2V0dXIgcmlkaWN1bHVzIG11cy4gUHJvaW4gaW4gbG9yZW0gZG9sb3IuIEZ1c2NlIGludGVyZHVtIGZldWdpYXQgbmlzbC48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBpZD1cIndoZWVsXCIgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgIDxpbWcgc3JjPXtXaGVlbEltYWdlfSBhbHQ9XCJHcmFwaCBXaGVlbFwiLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgLndyYXBwZXIge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG4gICAgICAucm93e1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG4gICAgLmNvbHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICB9XG4gICAgICAjd2hlZWx7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgbWFyZ2luOjUlO1xuICAgICAgfVxuICAgICAgI3doZWVsLWluZm97XG4gICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgICAgICB0b3A6IDIwJTtcbiAgICAgICAgbGVmdDogNSU7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIG1hcmdpbjoyJTtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIHBhZGRpbmc6MiU7XG4gICAgICAgIG1hcmdpbjoyJTtcbiAgICAgICAgaGVpZ2h0OjEwMCU7XG4gICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICB9XG4gICAgICAjd2hlZWwtaW5mbyBoMXtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGNvbG9yOiAjMDAzNTVmO1xuICAgICAgICBmb250LXNpemU6IDYwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA1OHB4O1xuICAgIH1cbiAgICAgI3doZWVsLWluZm8gcHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTEuNyU7XG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxLjAxMSk7XG4gICAgfVxuICAgIC5iZy1pbWd7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7QmFja2dyb3VuZH0pO1xuICAgICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGNvdmVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IFxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xuICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcbiAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIFxuICAgIH1cbiAgICAjZ3JleS1hcmVhe1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNSwgMjI1LCAyMjUsIDAuODUpO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6NjAlO1xuICAgICAgICB0b3A6MjAlO1xuICAgICAgICB6LWluZGV4OiAtMTtcbiAgICB9XG4gICAgICBgfTwvc3R5bGU+XG48L2Rpdj5cbikiXX0= */\n/*@ sourceURL=src/comp/Graph.js */'
    })
  );
});

/***/ }),

/***/ "./src/comp/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
var _jsxFileName = "/Users/angellydejesus/Documents/dev/pulse-react/src/comp/Layout.js";




/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var children = _ref.children;
  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
    "div",
    {
      className: "jsx-2796125573",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      }
    },
    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_next_head___default.a,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      },
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        "title",
        {
          className: "jsx-2796125573",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 7
          }
        },
        "Pulse Global"
      ),
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("meta", { name: "viewport", content: "initial-scale=1.0, width=device-width", className: "jsx-2796125573",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      })
    ),
    children,
    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: "2796125573",
      css: "*{padding:0px;margin:0px;box-sizing:border-box;font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wL0xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZdUIsQUFHa0IsWUFDRCxXQUNZLHNCQUNxQyx3REFDN0QiLCJmaWxlIjoic3JjL2NvbXAvTGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hbmdlbGx5ZGVqZXN1cy9Eb2N1bWVudHMvZGV2L3B1bHNlLXJlYWN0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5cbmV4cG9ydCBkZWZhdWx0ICh7Y2hpbGRyZW59KSA9PiAoXG48ZGl2PlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPlB1bHNlIEdsb2JhbDwvdGl0bGU+XG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiLz5cbiAgICA8L0hlYWQ+XG5cbiAgICB7Y2hpbGRyZW59XG4gICAgXG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAqe1xuICAgICAgcGFkZGluZzowcHg7XG4gICAgICBtYXJnaW46MHB4O1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgfVxuICAgIGB9PC9zdHlsZT5cbjwvZGl2PlxuKSJdfQ== */\n/*@ sourceURL=src/comp/Layout.js */"
    })
  );
});

/***/ }),

/***/ "./src/comp/ToolBar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__img_amLogo_png__ = __webpack_require__("./src/img/amLogo.png");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__img_amLogo_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__img_amLogo_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__img_vector_png__ = __webpack_require__("./src/img/vector.png");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__img_vector_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__img_vector_png__);
var _jsxFileName = "/Users/angellydejesus/Documents/dev/pulse-react/src/comp/ToolBar.js";





/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    "div",
    { id: "menu-bar", className: "jsx-2231927557",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      "div",
      {
        className: "jsx-2231927557" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "ul",
        {
          className: "jsx-2231927557",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "li",
          {
            className: "jsx-2231927557",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 10
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", { src: __WEBPACK_IMPORTED_MODULE_2__img_amLogo_png__["default"], alt: "logo", className: "jsx-2231927557",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 11
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "li",
          {
            className: "jsx-2231927557" + " " + "link first",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 13
            }
          },
          "ABOUT"
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "li",
          {
            className: "jsx-2231927557" + " " + "link",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            }
          },
          "WHO WE SERVE"
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "li",
          {
            className: "jsx-2231927557" + " " + "link",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 15
            }
          },
          "WHAT WE DO"
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "li",
          {
            className: "jsx-2231927557" + " " + "link",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 16
            }
          },
          "THOUGHT LEADERSHIP"
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "li",
          {
            className: "jsx-2231927557" + " " + "link",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 17
            }
          },
          "EVENTS"
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "li",
          {
            className: "jsx-2231927557" + " " + "link",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            }
          },
          "OUR PARTNERS"
        )
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "div",
        { id: "vector", className: "jsx-2231927557",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", { src: __WEBPACK_IMPORTED_MODULE_3__img_vector_png__["default"], alt: "AM Global", className: "jsx-2231927557",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          }
        })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: "2231927557",
      css: "#menu-bar.jsx-2231927557{position:absolute;z-index:100;background:white;width:100%;}.container.jsx-2231927557{max-width:970px;margin:0 auto;position:relative;}#vector.jsx-2231927557{position:absolute;top:0;right:0;}ul.jsx-2231927557{color:#3585b7;font-size:18px;font-weight:bold;-webkit-letter-spacing:0px;-moz-letter-spacing:0px;-ms-letter-spacing:0px;letter-spacing:0px;line-height:15.518px;list-style:none;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;padding-top:1em;padding-bottom:1em;}li.link.jsx-2231927557{padding-bottom:1.5em;}li.link.first.jsx-2231927557{padding-left:1em;}li.link.jsx-2231927557:hover{cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wL1Rvb2xCYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUJjLEFBR3lCLEFBTUYsQUFLRSxBQUtKLEFBY08sQUFHSixBQUdGLGNBbkJBLENBb0JqQixDQTlCZ0IsQ0EyQmhCLENBakNjLEFBV1AsR0FtQlAsR0FsQlUsS0FLUyxDQWhCQSxBQU1DLEVBTXBCLGNBS3FCLENBaEJSLENBTWIsVUFMQSxpRkFnQnVCLHFCQUNMLGdCQUNOLFdBQ0csMEVBQ2dCLDJIQUNSLHFHQUNMLGdCQUNHLG1CQUNyQiIsImZpbGUiOiJzcmMvY29tcC9Ub29sQmFyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hbmdlbGx5ZGVqZXN1cy9Eb2N1bWVudHMvZGV2L3B1bHNlLXJlYWN0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgTG9nb0ltZyBmcm9tIFwiLi4vaW1nL2FtTG9nby5wbmdcIlxuaW1wb3J0IFZlY3RvciBmcm9tIFwiLi4vaW1nL3ZlY3Rvci5wbmdcIlxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxkaXYgaWQ9XCJtZW51LWJhclwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxpbWcgc3JjPXtMb2dvSW1nfSBhbHQ9XCJsb2dvXCIgLz5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpbmsgZmlyc3RcIj5BQk9VVDwvbGk+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaW5rXCI+V0hPIFdFIFNFUlZFPC9saT5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpbmtcIj5XSEFUIFdFIERPPC9saT5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpbmtcIj5USE9VR0hUIExFQURFUlNISVA8L2xpPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlua1wiPkVWRU5UUzwvbGk+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaW5rXCI+T1VSIFBBUlRORVJTPC9saT5cbiAgICAgIDwvdWw+XG5cbiAgICAgIDxkaXYgaWQ9XCJ2ZWN0b3JcIj5cbiAgICAgICAgPGltZyBzcmM9e1ZlY3Rvcn0gYWx0PVwiQU0gR2xvYmFsXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgIFxuICA8L2Rpdj5cbiAgPHN0eWxlIGpzeD57YFxuICAgICNtZW51LWJhciB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB6LWluZGV4OiAxMDA7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAuY29udGFpbmVyIHtcbiAgICAgIG1heC13aWR0aDogOTcwcHg7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG4gICAgI3ZlY3RvcntcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDowO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgfVxuICAgIHVse1x0XG4gICAgICBjb2xvcjogIzM1ODViNztcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxNS41MThweDtcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICB3aWR0aDoxMDAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgcGFkZGluZy10b3A6IDFlbTtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxZW07XG4gICAgfSBcbiAgICBsaS5saW5rIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxLjVlbTtcbiAgICB9XG4gICAgbGkubGluay5maXJzdCB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDFlbTtcbiAgICB9XG4gICAgbGkubGluazpob3ZlciB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICBgfTwvc3R5bGU+XG48L2Rpdj5cbikiXX0= */\n/*@ sourceURL=src/comp/ToolBar.js */"
    })
  );
});

/***/ }),

/***/ "./src/img/amLogo.png":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)");

/***/ }),

/***/ "./src/img/amtax.mp4":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '\u0000' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)");

/***/ }),

/***/ "./src/img/bottom-logo.png":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)");

/***/ }),

/***/ "./src/img/date.png":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)");

/***/ }),

/***/ "./src/img/global.png":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)");

/***/ }),

/***/ "./src/img/social_media.png":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)");

/***/ }),

/***/ "./src/img/think2.jpg":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)");

/***/ }),

/***/ "./src/img/vector.png":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)");

/***/ }),

/***/ "./src/img/wheel.png":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)");

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map