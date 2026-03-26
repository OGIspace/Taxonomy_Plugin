/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js"
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
() {

eval("{document.addEventListener(\"DOMContentLoaded\", () => {\n    const wrappers = document.querySelectorAll(\".posts-by-date\");\n\n    wrappers.forEach((wrapper) => {\n        const modal = wrapper.querySelector(\"[data-post-modal]\");\n        if (!modal) {\n            return;\n        }\n\n        const titleEl = modal.querySelector(\"[data-post-modal-title]\");\n        const thumbnailEl = modal.querySelector(\"[data-post-modal-thumbnail]\");\n        const excerptEl = modal.querySelector(\"[data-post-modal-excerpt]\");\n        const dateEl = modal.querySelector(\"[data-post-modal-date]\");\n        const slugEl = modal.querySelector(\"[data-post-modal-slug]\");\n        const linkEl = modal.querySelector(\"[data-post-modal-link]\");\n        const closeEls = modal.querySelectorAll(\"[data-post-modal-close]\");\n\n        const openModal = (card) => {\n            const title = card.dataset.title || \"\";\n            const thumbnail = card.dataset.thumbnail || \"\";\n            const excerpt = card.dataset.excerpt || \"\";\n            const date = card.dataset.date || \"\";\n            const slug = card.dataset.slug || \"\";\n            const link = card.dataset.link || \"#\";\n\n            titleEl.textContent = title;\n            excerptEl.textContent = excerpt;\n            dateEl.textContent = `Date: ${date}`;\n            slugEl.textContent = `Slug: ${slug}`;\n            linkEl.href = link;\n\n            if (thumbnail) {\n                thumbnailEl.src = thumbnail;\n                thumbnailEl.alt = title;\n                thumbnailEl.hidden = false;\n            } else {\n                thumbnailEl.hidden = true;\n                thumbnailEl.removeAttribute(\"src\");\n                thumbnailEl.alt = \"\";\n            }\n\n            modal.hidden = false;\n            document.body.classList.add(\"post-modal-open\");\n        };\n\n        const closeModal = () => {\n            modal.hidden = true;\n            document.body.classList.remove(\"post-modal-open\");\n        };\n\n        wrapper.querySelectorAll(\".post-card\").forEach((card) => {\n            card.addEventListener(\"click\", () => openModal(card));\n        });\n\n        closeEls.forEach((el) => {\n            el.addEventListener(\"click\", closeModal);\n        });\n\n        document.addEventListener(\"keydown\", (event) => {\n            if (event.key === \"Escape\" && !modal.hidden) {\n                closeModal();\n            }\n        });\n    });\n});\n\nconst test = () => {\n    console.log(\"Test\");\n    const wrappers = document.querySelectorAll(\".posts-by-date\");\n    wrappers.forEach((wrapper) => {\n        const modal = wrapper.querySelector(\"[data-post-modal]\");\n        if (!modal) {\n            return;\n        }\n    });\n}\n\ntest();\n\n//# sourceURL=webpack://posts-by-date-plugin/./src/js/main.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main.js"]();
/******/ 	
/******/ })()
;