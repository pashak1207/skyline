/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/main_image.png */ "./src/assets/main_image.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Manrope", sans-serif;
}

button {
  outline: none;
  border: none;
  margin: 0;
  padding: 0;
  background: unset;
  cursor: pointer;
}

.hero-container {
  max-width: 1820px;
  margin: 0 auto;
}

.wishlist {
  background: transparent;
  display: inline-block;
  padding: 0;
  margin: 0;
  border: none;
  outline: hidden;
  cursor: pointer;
}

.btn-accent {
  text-align: center;
  font-size: 17px;
  font-weight: 400;
  line-height: 16px;
  border-radius: 5px;
  color: #fff;
  text-decoration: none;
  padding: 35px 65px;
  display: inline-block;
  position: relative;
  backdrop-filter: none;
  transition: bottom 0.3s;
  bottom: 0;
  background: -webkit-gradient(linear, left top, left bottom, from(rgba(255, 0, 0, 0)), to(rgba(147, 0, 0, 0.7))), -webkit-gradient(linear, left top, right top, from(#E81E39), color-stop(0.01%, #DA0F2A), color-stop(48.96%, #FE2F4B), to(#DA0F2A));
  background: linear-gradient(180deg, rgba(255, 0, 0, 0) 0%, rgba(147, 0, 0, 0.7) 100%), linear-gradient(90deg, #E81E39 0%, #DA0F2A 0.01%, #FE2F4B 48.96%, #DA0F2A 100%);
}
.btn-accent:before {
  content: "";
  position: absolute;
  border-radius: 10px;
  background: linear-gradient(139deg, #B11026 0%, #8D0013 52.38%, #B11026 100%);
  left: 0;
  top: 5px;
  transition: top 0.3s;
  width: 100%;
  height: 100%;
  z-index: -1;
}
.btn-accent:after {
  content: "";
  position: absolute;
  left: 5px;
  top: 5px;
  width: calc(100% - 10px);
  height: calc(100% - 10px);
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  opacity: 0;
  transition: opacity 0.3s;
}
.btn-accent:hover {
  bottom: 2px;
}
.btn-accent:hover:before {
  top: 7px;
}
.btn-accent:hover:after {
  opacity: 1;
}

.btn-main {
  display: inline-flex;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  text-decoration: none;
  backdrop-filter: blur(10px);
  padding: 35px 65px;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 14px;
  text-align: center;
  transition: background 0.3s;
}
.btn-main:hover {
  background: rgba(255, 255, 255, 0.2);
}

.object-hero {
  margin-top: 30px;
  padding: 70px;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) no-repeat;
  background-size: cover;
  border-radius: 50px;
  color: #fff;
}
.object-hero_topLine {
  display: flex;
  justify-content: space-between;
  padding-bottom: 320px;
}
.object-hero_topLine .object-hero_sales {
  display: inline-flex;
  padding: 10px;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0px 5.0680561066px 19px 0px rgba(0, 0, 0, 0.07);
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
}
.object-hero_topLine .object-hero_sales .object-hero_sale {
  border-radius: 5px;
  padding: 6px 15px;
}
.object-hero_topLine .object-hero_sales .object-hero_sale.sale {
  background: linear-gradient(180deg, rgba(255, 0, 0, 0) 0%, rgba(147, 0, 0, 0.7) 100%), linear-gradient(90deg, #E81E39 0%, #DA0F2A 0.01%, #FE2F4B 48.96%, #DA0F2A 100%);
}
.object-hero_topLine .object-hero_sales .object-hero_sale.installment {
  background: var(--linear, linear-gradient(172deg, #A7FF92 0%, #5CB446 100%));
}
.object-hero_title {
  font-size: 70px;
  font-style: normal;
  font-weight: 300;
  line-height: 75px;
  margin: 0 0 20px;
}
.object-hero_bottomLine {
  display: flex;
  justify-content: space-between;
}
.object-hero_bottomLine .object-hero_info {
  display: flex;
  align-items: center;
  gap: 30px;
}
.object-hero_bottomLine .object-hero_photos {
  display: inline-flex;
  padding: 11px;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  border-radius: 15px;
  background: #FFF;
  /* Drop Shadow 0 10 30 0 6% */
  box-shadow: 0px 5.0680561066px 19px 0px rgba(0, 0, 0, 0.07);
  font-weight: 300;
}
.object-hero_bottomLine .object-hero_photos .object-hero_photoInfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.object-hero_bottomLine .object-hero_photos .object-hero_count {
  color: #161616;
  font-size: 30px;
  font-style: normal;
  line-height: 35px;
}
.object-hero_bottomLine .object-hero_photos .object-hero_text {
  color: rgba(22, 22, 22, 0.5);
  font-size: 10px;
  font-style: normal;
  line-height: 12px;
}
.object-hero_bottomLine .object-hero_locations {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.object-hero_bottomLine .object-hero_locations .object-hero_location {
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 14px;
  line-height: 20px;
}
.object-hero_bottomLine .object-hero_locations .object-hero_location:last-child {
  gap: 12px;
}
.object-hero_bottomLine .object-hero_btns a {
  margin-right: 15px;
}
.object-hero_bottomLine .object-hero_btns a:last-child {
  margin-right: 0;
}

.main-container {
  margin: 50px auto 0;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 30px;
  max-width: 1500px;
}

.tabs-section {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  color: #161616;
}
.tabs-section__tabs {
  width: 100%;
  border-bottom: 1px solid rgba(22, 22, 22, 0.1);
  display: flex;
  align-items: center;
  padding: 0 30px;
  justify-content: space-between;
}
.tabs-section__tabs .object-tab {
  padding: 0 24px 30px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 300;
  opacity: 0.8;
}
.tabs-section__tabs .object-tab.active {
  position: relative;
  font-weight: 700;
}
.tabs-section__tabs .object-tab.active:after {
  content: "";
  position: absolute;
  bottom: -1px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% + 62px);
  min-width: 208px;
  height: 3px;
  background: #454545;
}
.tabs-section [data-tab-content] {
  display: none;
}
.tabs-section [data-tab-content].active {
  display: block;
}
.tabs-section__content {
  width: 100%;
}

.tab-section__section-title {
  opacity: 0.8;
  font-size: 20px;
  font-weight: 700;
  line-height: 150%;
}

.tabs-section .tabs-section__content .description {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.tabs-section .tabs-section__content .description__text {
  max-width: 900px;
  font-size: 16px;
  font-weight: 400;
  line-height: 187.5%;
  margin-bottom: 70px;
  opacity: 0.8;
}

.tabs-section .tabs-section__content .characteristics {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 70px;
}
.tabs-section .tabs-section__content .characteristics__title {
  margin-bottom: 10px;
}
.tabs-section .tabs-section__content .characteristics__subtitle {
  font-size: 16px;
  line-height: 187.5%;
  margin-bottom: 32px;
  opacity: 0.8;
}
.tabs-section .tabs-section__content .characteristics__list {
  width: 100%;
  max-width: calc(100% - 100px);
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 40px 50px;
}
.tabs-section .tabs-section__content .characteristics__list .characteristic {
  width: calc(25% - 50px);
  display: flex;
  align-items: center;
  gap: 15px;
}
.tabs-section .tabs-section__content .characteristics__list .characteristic__img {
  width: 50px;
}
.tabs-section .tabs-section__content .characteristics__list .characteristic__info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
}
.tabs-section .tabs-section__content .characteristics__list .characteristic__info .title {
  font-size: 14px;
  font-weight: 400;
  line-height: 142%;
  opacity: 0.8;
}
.tabs-section .tabs-section__content .characteristics__list .characteristic__info .status {
  font-size: 16px;
  font-weight: 500;
  line-height: 125%;
  opacity: 0.8;
}

.tabs-section .tabs-section__content .planning {
  width: 100%;
  margin-bottom: 70px;
}
.tabs-section .tabs-section__content .planning__title {
  margin-bottom: 30px;
}
.tabs-section .tabs-section__content .planning__types {
  display: flex;
  align-items: stretch;
  gap: 10px;
}
.tabs-section .tabs-section__content .planning__types .type-btn {
  min-width: 95px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 18px;
  border-radius: 5px;
  background: #F5F5F5;
  min-height: 44px;
  margin-bottom: 42px;
  font-weight: 500;
  line-height: 187.5%;
  font-size: 16px;
  color: rgba(139, 139, 139, 0.8);
}
.tabs-section .tabs-section__content .planning__types .type-btn.active {
  background: #143653;
  color: rgba(255, 255, 255, 0.8);
}
.tabs-section .tabs-section__content .planning__content {
  width: 100%;
  background: #FFF;
  filter: drop-shadow(0px 10px 30px rgba(0, 0, 0, 0.06));
  padding-top: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 25px;
}
.tabs-section .tabs-section__content .planning__table {
  width: 100%;
  max-width: calc(100% - 30px);
  max-height: 430px;
  overflow: hidden;
  overflow-y: scroll;
  border-collapse: collapse;
  border: none;
  margin-bottom: 35px;
}
.tabs-section .tabs-section__content .planning__table thead {
  width: 100%;
}
.tabs-section .tabs-section__content .planning__table thead tr th {
  color: rgba(0, 0, 0, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 240%;
  text-align: center;
  padding: 0 10px 6px;
}
.tabs-section .tabs-section__content .planning__table tbody tr td {
  text-align: center;
}
.tabs-section .tabs-section__content .planning__table tbody tr td.row-img .row-img__img {
  height: 60px;
  width: 60px;
  object-fit: contain;
  border-radius: 10px;
}
.tabs-section .tabs-section__content .planning__footer {
  width: 100%;
  position: relative;
  background: linear-gradient(98.5deg, #001A31 -25.09%, #173A58 102.96%);
}
.tabs-section .tabs-section__content .planning__footer .agent-photo {
  width: 193px;
  height: 184px;
  object-fit: contain;
  position: absolute;
  bottom: 0;
}
.tabs-section .tabs-section__content .planning__footer .footer-content {
  width: 100%;
  height: 165px;
}

.right-aside {
  display: flex;
  align-items: stretch;
  flex-direction: column;
  gap: 32px;
}
.right-aside .agent-card {
  width: 430px;
  padding: 30px 40px 40px;
  border-radius: 30px;
  background: #FFF;
  box-shadow: 0 5px 19px 0 rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.right-aside .agent-card__head {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
}
.right-aside .agent-card__img {
  width: 80px;
}
.right-aside .agent-card__initials {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
}
.right-aside .agent-card__initials .position {
  color: rgba(0, 0, 0, 0.5);
  font-size: 16px;
  line-height: 187.5%;
}
.right-aside .agent-card__initials .name {
  color: #161616;
  font-size: 20px;
  font-weight: 500;
  line-height: 150%;
}
.right-aside .agent-card__desc {
  max-width: 250px;
  font-size: 16px;
  line-height: 187.5%;
  opacity: 0.8;
  margin-bottom: 30px;
}`, "",{"version":3,"sources":["webpack://./src/styles/main.scss"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap');\n\n$main-font: 'Manrope';\n$main-color: #161616;\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: $main-font, sans-serif;\n}\n\nbutton {\n  outline: none;\n  border: none;\n  margin: 0;\n  padding: 0;\n  background: unset;\n  cursor: pointer;\n}\n\n.hero-container {\n  max-width: 1820px;\n  margin: 0 auto;\n}\n\n.wishlist {\n  background: transparent;\n  display: inline-block;\n  padding: 0;\n  margin: 0;\n  border: none;\n  outline: hidden;\n  cursor: pointer;\n}\n\n.btn-accent {\n  text-align: center;\n  font-size: 17px;\n  font-weight: 400;\n  line-height: 16px;\n  border-radius: 5px;\n\n  color: #fff;\n  text-decoration: none;\n\n  padding: 35px 65px;\n  display: inline-block;\n\n  position: relative;\n\n  backdrop-filter: none;\n\n  transition: bottom 0.3s;\n  bottom: 0;\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(255, 0, 0, 0)), to(rgba(147, 0, 0, 0.7))), -webkit-gradient(linear, left top, right top, from(#E81E39), color-stop(0.01%, #DA0F2A), color-stop(48.96%, #FE2F4B), to(#DA0F2A));\n  background: linear-gradient(180deg, rgba(255, 0, 0, 0) 0%, rgba(147, 0, 0, 0.7) 100%), linear-gradient(90deg, #E81E39 0%, #DA0F2A 0.01%, #FE2F4B 48.96%, #DA0F2A 100%);\n\n  &:before {\n    content: \"\";\n    position: absolute;\n    border-radius: 10px;\n    background: linear-gradient(139deg, #B11026 0%, #8D0013 52.38%, #B11026 100%);\n    left: 0;\n    top: 5px;\n\n    transition: top 0.3s;\n    width: 100%;\n    height: 100%;\n    z-index: -1;\n  }\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    left: 5px;\n    top: 5px;\n    width: calc(100% - 10px);\n    height: calc(100% - 10px);\n    border-radius: 5px;\n    border: 1px solid rgba(255, 255, 255, 0.15);\n    opacity: 0;\n\n    transition: opacity 0.3s;\n  }\n\n  &:hover {\n    bottom: 2px;\n\n    &:before {\n      top: 7px;\n    }\n\n    &:after {\n      opacity: 1;\n    }\n  }\n}\n\n.btn-main {\n  display: inline-flex;\n  border-radius: 5px;\n  background: rgba(255, 255, 255, 0.1);\n\n  color: #fff;\n  text-decoration: none;\n\n  backdrop-filter: blur(10px);\n  padding: 35px 65px;\n\n  justify-content: center;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 14px;\n  text-align: center;\n\n  transition: background 0.3s;\n\n  &:hover {\n    background: rgba(255, 255, 255, 0.2);\n  }\n}\n\n.object-hero {\n  margin-top: 30px;\n  padding: 70px;\n  background: url(\"../assets/main_image.png\") no-repeat;\n  background-size: cover;\n  border-radius: 50px;\n\n  color: #fff;\n\n  &_topLine {\n    display: flex;\n    justify-content: space-between;\n    padding-bottom: 320px;\n\n    .object-hero_sales {\n      display: inline-flex;\n      padding: 10px;\n      flex-direction: row;\n      align-items: flex-start;\n      gap: 10px;\n\n      border-radius: 10px;\n      background: rgba(255, 255, 255, 0.30);\n      box-shadow: 0px 5.068056106567383px 19px 0px rgba(0, 0, 0, 0.07);\n\n      font-size: 11px;\n      font-style: normal;\n      font-weight: 500;\n      line-height: 16px;\n\n      .object-hero_sale {\n        border-radius: 5px;\n        padding: 6px 15px;\n\n        &.sale {\n          background: linear-gradient(180deg, rgba(255, 0, 0, 0.00) 0%, rgba(147, 0, 0, 0.70) 100%), linear-gradient(90deg, #E81E39 0%, #DA0F2A 0.01%, #FE2F4B 48.96%, #DA0F2A 100%);\n        }\n\n        &.installment {\n          background: var(--linear, linear-gradient(172deg, #A7FF92 0%, #5CB446 100%));\n        }\n      }\n    }\n  }\n\n  &_title {\n    font-size: 70px;\n    font-style: normal;\n    font-weight: 300;\n    line-height: 75px;\n\n    margin: 0 0 20px;\n  }\n\n  &_bottomLine {\n    display: flex;\n    justify-content: space-between;\n\n    .object-hero_info {\n      display: flex;\n      align-items: center;\n      gap: 30px;\n    }\n\n    .object-hero_photos {\n      display: inline-flex;\n      padding: 11px;\n      flex-direction: row;\n      align-items: center;\n      gap: 15px;\n\n      border-radius: 15px;\n      background: #FFF;\n      /* Drop Shadow 0 10 30 0 6% */\n      box-shadow: 0px 5.068056106567383px 19px 0px rgba(0, 0, 0, 0.07);\n\n      font-weight: 300;\n\n      .object-hero_photoInfo {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n\n      .object-hero_count {\n        color: $main-color;\n        font-size: 30px;\n        font-style: normal;\n        line-height: 35px;\n      }\n\n      .object-hero_text {\n        color: rgba(22, 22, 22, 0.50);\n        font-size: 10px;\n        font-style: normal;\n        line-height: 12px;\n      }\n    }\n\n    .object-hero_locations {\n      display: flex;\n      flex-direction: column;\n      gap: 15px;\n\n      .object-hero_location {\n        display: flex;\n        gap: 10px;\n        align-items: center;\n\n        font-size: 14px;\n        line-height: 20px;\n\n        &:last-child {\n          gap: 12px;\n        }\n      }\n    }\n\n    .object-hero_btns {\n      a {\n        margin-right: 15px;\n\n        &:last-child {\n          margin-right: 0;\n        }\n      }\n    }\n  }\n}\n\n.main-container {\n  margin: 50px auto 0;\n  width: 100%;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  gap: 30px;\n  max-width: 1500px;\n}\n\n.tabs-section {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 40px;\n  color: #161616;\n\n  &__tabs {\n    width: 100%;\n    border-bottom: 1px solid rgba(22, 22, 22, 0.10);\n    display: flex;\n    align-items: center;\n    padding: 0 30px;\n    justify-content: space-between;\n\n    .object-tab {\n      padding: 0 24px 30px;\n      cursor: pointer;\n      font-size: 20px;\n      font-weight: 300;\n      opacity: 0.8;\n\n      &.active {\n        position: relative;\n        font-weight: 700;\n\n        &:after {\n          content: '';\n          position: absolute;\n          bottom: -1px;\n          left: 50%;\n          transform: translateX(-50%);\n          width: calc(100% + 62px);\n          min-width: 208px;\n          height: 3px;\n          background: #454545;\n        }\n      }\n    }\n  }\n\n  [data-tab-content] {\n    display: none;\n\n    &.active {\n      display: block;\n    }\n  }\n\n  &__content {\n    width: 100%;\n  }\n}\n\n.tab-section__section-title {\n  opacity: 0.8;\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 150%;\n}\n\n.tabs-section .tabs-section__content .description {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n\n  &__text {\n    max-width: 900px;\n    font-size: 16px;\n    font-weight: 400;\n    line-height: 187.5%;\n    margin-bottom: 70px;\n    opacity: 0.8;\n  }\n}\n\n.tabs-section .tabs-section__content .characteristics {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  margin-bottom: 70px;\n\n  &__title {\n    margin-bottom: 10px;\n  }\n\n  &__subtitle {\n    font-size: 16px;\n    line-height: 187.5%;\n    margin-bottom: 32px;\n    opacity: 0.8;\n  }\n\n  &__list {\n    width: 100%;\n    max-width: calc(100% - 100px);\n    display: flex;\n    align-items: flex-start;\n    flex-wrap: wrap;\n    gap: 40px 50px;\n\n    .characteristic {\n      width: calc(25% - 50px);\n      display: flex;\n      align-items: center;\n      gap: 15px;\n\n      &__img {\n        width: 50px;\n      }\n\n      &__info {\n        display: flex;\n        flex-direction: column;\n        align-items: flex-start;\n        gap: 4px;\n\n        .title {\n          font-size: 14px;\n          font-weight: 400;\n          line-height: 142%;\n          opacity: 0.8;\n        }\n\n        .status {\n          font-size: 16px;\n          font-weight: 500;\n          line-height: 125%;\n          opacity: 0.8;\n        }\n      }\n    }\n  }\n}\n\n.tabs-section .tabs-section__content .planning {\n  width: 100%;\n  margin-bottom: 70px;\n\n  &__title {\n    margin-bottom: 30px;\n  }\n\n  &__types {\n    display: flex;\n    align-items: stretch;\n    gap: 10px;\n\n    .type-btn {\n      min-width: 95px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      padding: 4px 18px;\n      border-radius: 5px;\n      background: #F5F5F5;\n      min-height: 44px;\n      margin-bottom: 42px;\n      font-weight: 500;\n      line-height: 187.5%;\n      font-size: 16px;\n      color: rgba(139, 139, 139, 0.8);\n\n      &.active {\n        background: #143653;\n        color: rgba(255, 255, 255, 0.8);\n      }\n    }\n  }\n\n  &__content {\n    width: 100%;\n    background: #FFF;\n    filter: drop-shadow(0px 10px 30px rgba(0, 0, 0, 0.06));\n    padding-top: 12px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    border-radius: 25px;\n  }\n\n  &__table {\n    width: 100%;\n    max-width: calc(100% - 30px);\n    max-height: 430px;\n    overflow: hidden;\n    overflow-y: scroll;\n    border-collapse: collapse;\n    border: none;\n    margin-bottom: 35px;\n\n    thead {\n      width: 100%;\n\n      tr {\n        th {\n          color: rgba(0, 0, 0, 0.50);\n          font-size: 12px;\n          font-weight: 400;\n          line-height:  240%;\n          text-align: center;\n          padding: 0 10px 6px;\n        }\n      }\n    }\n\n    tbody {\n      tr {\n        //border: 1px solid #111;\n        //border-radius: 8px;\n\n        td {\n          text-align: center;\n          //padding: 0 10px;\n\n          &.row-img {\n\n           .row-img__img {\n             height: 60px;\n             width: 60px;\n             object-fit: contain;\n             border-radius: 10px;\n           }\n          }\n        }\n      }\n    }\n  }\n\n  &__footer {\n    width: 100%;\n    position: relative;\n    background: linear-gradient(98.5deg, #001A31 -25.09%, #173A58 102.96%);\n\n    .agent-photo {\n      width: 193px;\n      height: 184px;\n      object-fit: contain;\n      position: absolute;\n      bottom: 0;\n    }\n\n    .footer-content {\n      width: 100%;\n      height: 165px;\n    }\n  }\n}\n\n.right-aside {\n  display: flex;\n  align-items: stretch;\n  flex-direction: column;\n  gap: 32px;\n\n  .agent-card {\n    width: 430px;\n    padding: 30px 40px 40px;\n    border-radius: 30px;\n    background: #FFF;\n    box-shadow: 0 5px 19px 0 rgba(0, 0, 0, 0.07);\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n\n    &__head {\n      width: 100%;\n      display: flex;\n      align-items: center;\n      gap: 20px;\n      margin-bottom: 20px;\n    }\n\n    &__img {\n      width: 80px;\n    }\n\n    &__initials {\n      display: flex;\n      flex-direction: column;\n      align-items: flex-start;\n      gap: 5px;\n\n      .position {\n        color: rgba(0, 0, 0, 0.50);\n        font-size: 16px;\n        line-height: 187.5%;\n      }\n\n      .name {\n        color: #161616;\n        font-size: 20px;\n        font-weight: 500;\n        line-height: 150%;\n      }\n    }\n\n    &__desc {\n      max-width: 250px;\n      font-size: 16px;\n      line-height: 187.5%;\n      opacity: 0.8;\n      margin-bottom: 30px;\n    }\n  }\n}\n\n//\n//.tabs-section {\n//  width: 100%;\n//  color: #161616;\n//  font-size: 16px;\n//  font-weight: 400;\n//  line-height: 30px;\n//\n//  h3 {\n//    font-size: 20px;\n//    font-weight: 700;\n//    line-height: 30px;\n//\n//    margin-top: 0;\n//    margin-bottom: 10px;\n//  }\n//\n//  .container {\n//    display: grid;\n//    gap: 30px;\n//    grid-template-columns: 2.5fr 1fr;\n//  }\n//\n//\n//  .active[data-tab-content] {\n//    display: block;\n//  }\n//\n//  .object-tabs {\n//    display: grid;\n//    grid-template-columns: repeat(4, 1fr);\n//    justify-content: center;\n//    text-align: center;\n//    list-style-type: none;\n//    margin: 0;\n//    padding: 0;\n//  }\n//\n//  .object-tab {\n//    cursor: pointer;\n//    padding-bottom: 27px;\n//\n//    color: #161616;\n//    font-size: 20px;\n//    font-weight: 300;\n//    line-height: 30px;\n//    border-bottom: 1px solid rgba(22, 22, 22, 0.10);\n//  }\n//\n//  .object-tab.active {\n//    border-bottom: 3px solid #454545;\n//    font-weight: 700;\n//  }\n//\n//  .object-tab:hover {\n//    border-bottom: 3px solid #454545;\n//    font-weight: 700;\n//  }\n//\n//  .object-tab_content {\n//    padding: 40px 0;\n//  }\n//\n//  .characteristics {\n//    margin-top: 70px;\n//\n//    &_grid {\n//      display: grid;\n//      grid-template-columns: repeat(4, 1fr);\n//      gap: 40px;\n//\n//      .characteristics_grid__item {\n//        display: flex;\n//        align-items: center;\n//        gap: 14px;\n//\n//        .characteristics_grid__info {\n//          display: flex;\n//          flex-direction: column;\n//          gap: 5px;\n//        }\n//\n//        .characteristics_grid__title {\n//          font-size: 14px;\n//          margin-top: 0;\n//          margin-bottom: 0;\n//          font-weight: 400;\n//          line-height: 20px;\n//        }\n//\n//        .characteristics_grid__status {\n//          margin: 0;\n//          font-size: 16px;\n//          font-weight: 500;\n//          line-height: 20px;\n//        }\n//      }\n//    }\n//  }\n//\n//  .judical {\n//    .characteristics {\n//      margin-top: 0;\n//    }\n//  }\n//}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
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
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
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
  };

  // import a list of modules into the list
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
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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
      layer: item[5]
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
        references: 1
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
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
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

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
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
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



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
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
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
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



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

/***/ }),

/***/ "./src/assets/agent.png":
/*!******************************!*\
  !*** ./src/assets/agent.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "agent.png";

/***/ }),

/***/ "./src/assets/agent_paning.png":
/*!*************************************!*\
  !*** ./src/assets/agent_paning.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "agent_paning.png";

/***/ }),

/***/ "./src/assets/characteristics.svg":
/*!****************************************!*\
  !*** ./src/assets/characteristics.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "characteristics.svg";

/***/ }),

/***/ "./src/assets/deadline.svg":
/*!*********************************!*\
  !*** ./src/assets/deadline.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "deadline.svg";

/***/ }),

/***/ "./src/assets/estate_building.png":
/*!****************************************!*\
  !*** ./src/assets/estate_building.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "estate_building.png";

/***/ }),

/***/ "./src/assets/main_image.png":
/*!***********************************!*\
  !*** ./src/assets/main_image.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "main_image.png";

/***/ }),

/***/ "./src/assets/object-photo.png":
/*!*************************************!*\
  !*** ./src/assets/object-photo.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "object-photo.png";

/***/ }),

/***/ "./src/assets/town.svg":
/*!*****************************!*\
  !*** ./src/assets/town.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "town.svg";

/***/ }),

/***/ "./src/assets/turkey.svg":
/*!*******************************!*\
  !*** ./src/assets/turkey.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "turkey.svg";

/***/ }),

/***/ "./src/assets/wishlist.svg":
/*!*********************************!*\
  !*** ./src/assets/wishlist.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "wishlist.svg";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _assets_wishlist_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/wishlist.svg */ "./src/assets/wishlist.svg");
/* harmony import */ var _assets_object_photo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/object-photo.png */ "./src/assets/object-photo.png");
/* harmony import */ var _assets_turkey_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/turkey.svg */ "./src/assets/turkey.svg");
/* harmony import */ var _assets_town_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/town.svg */ "./src/assets/town.svg");
/* harmony import */ var _assets_characteristics_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/characteristics.svg */ "./src/assets/characteristics.svg");
/* harmony import */ var _assets_deadline_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/deadline.svg */ "./src/assets/deadline.svg");
/* harmony import */ var _assets_estate_building_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/estate_building.png */ "./src/assets/estate_building.png");
/* harmony import */ var _assets_agent_paning_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/agent_paning.png */ "./src/assets/agent_paning.png");
/* harmony import */ var _assets_agent_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/agent.png */ "./src/assets/agent.png");





// Characteristics


// Estate Building



var characteristicsListImg = [_assets_characteristics_svg__WEBPACK_IMPORTED_MODULE_5__, _assets_deadline_svg__WEBPACK_IMPORTED_MODULE_6__, _assets_characteristics_svg__WEBPACK_IMPORTED_MODULE_5__, _assets_characteristics_svg__WEBPACK_IMPORTED_MODULE_5__, _assets_characteristics_svg__WEBPACK_IMPORTED_MODULE_5__, _assets_characteristics_svg__WEBPACK_IMPORTED_MODULE_5__, _assets_characteristics_svg__WEBPACK_IMPORTED_MODULE_5__, _assets_characteristics_svg__WEBPACK_IMPORTED_MODULE_5__, _assets_characteristics_svg__WEBPACK_IMPORTED_MODULE_5__, _assets_characteristics_svg__WEBPACK_IMPORTED_MODULE_5__, _assets_characteristics_svg__WEBPACK_IMPORTED_MODULE_5__];
var wishlistImg = document.getElementById("wishlist");
wishlistImg.src = _assets_wishlist_svg__WEBPACK_IMPORTED_MODULE_1__;
var thumbImg = document.getElementById("thumb");
thumbImg.src = _assets_object_photo_png__WEBPACK_IMPORTED_MODULE_2__;
var turkeyImg = document.getElementById("turkey");
turkeyImg.src = _assets_turkey_svg__WEBPACK_IMPORTED_MODULE_3__;
var locationImg = document.getElementById("location");
locationImg.src = _assets_town_svg__WEBPACK_IMPORTED_MODULE_4__;
var characteristicsImg = document.querySelectorAll(".characteristic__img");
for (var i = 0; i < characteristicsImg.length; i++) {
  characteristicsImg[i].src = characteristicsListImg[i];
}
var planningImg = document.querySelectorAll('.row-img__img');
for (var _i = 0; _i < planningImg.length; _i++) {
  planningImg[_i].src = _assets_estate_building_png__WEBPACK_IMPORTED_MODULE_7__;
}
var planningAgent = document.querySelector('.agent-photo');
planningAgent.src = _assets_agent_paning_png__WEBPACK_IMPORTED_MODULE_8__;
var agentCard = document.querySelector('.agent-card__img');
agentCard.src = _assets_agent_png__WEBPACK_IMPORTED_MODULE_9__;
var tabs = document.querySelectorAll('[data-tab-target]');
var tabContents = document.querySelectorAll('[data-tab-content]');
tabs.forEach(function (tab) {
  tab.addEventListener('click', function () {
    var target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach(function (tabContent) {
      tabContent.classList.remove('active');
    });
    tabs.forEach(function (tab) {
      tab.classList.remove('active');
    });
    tab.classList.add('active');
    target.classList.add('active');
  });
});
})();

/******/ })()
;
//# sourceMappingURL=bundle39e27ed73d5fc9890ec4.js.map