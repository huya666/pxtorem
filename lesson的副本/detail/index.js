(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/lesson/detail/index"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/pages/lesson/detail/index.jsx":
/*!***************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/pages/lesson/detail/index.jsx ***!
  \***************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.module.less */ "./src/pages/lesson/detail/index.module.less");
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_module_less__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Hunan_Lesson_Detail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Hunan/Lesson/Detail */ "./src/components/Hunan/Lesson/Detail/index.jsx");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react-lite/es/index.js");
/* harmony import */ var _detailStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./detailStore */ "./src/pages/lesson/detail/detailStore.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);











var Detail = function Detail() {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var _toJS = Object(mobx__WEBPACK_IMPORTED_MODULE_6__[/* toJS */ "p"])(_detailStore__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"]),
        cleanAll = _toJS.cleanAll;

    cleanAll = cleanAll || new Function();
    return cleanAll;
  }, []);
  return Object(mobx_react__WEBPACK_IMPORTED_MODULE_7__[/* useObserver */ "d"])(function () {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], {
      className: _index_module_less__WEBPACK_IMPORTED_MODULE_4___default.a.page,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_components_Hunan_Lesson_Detail__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, Object(mobx__WEBPACK_IMPORTED_MODULE_6__[/* toJS */ "p"])(_detailStore__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])))
    });
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Detail);

/***/ }),

/***/ "./src/components/Hunan/Lesson/Detail/index.jsx":
/*!******************************************************!*\
  !*** ./src/components/Hunan/Lesson/Detail/index.jsx ***!
  \******************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.module.less */ "./src/components/Hunan/Lesson/Detail/index.module.less");
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_module_less__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react-lite/es/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_CircleProcess__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/CircleProcess */ "./src/components/CircleProcess/index.js");
/* harmony import */ var _util_useStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../util/useStore */ "./src/util/useStore.js");
/* harmony import */ var _util_getHMS__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../util/getHMS */ "./src/util/getHMS.js");
/* harmony import */ var _components_Hunan_EmptyList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/Hunan/EmptyList */ "./src/components/Hunan/EmptyList/index.js");
/* harmony import */ var _util_getCurrentUrl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../util/getCurrentUrl */ "./src/util/getCurrentUrl.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);














var Detail = function Detail(props) {
  var router = Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();

  var _ref = router || {},
      params = _ref.params;

  var _ref2 = params || {},
      id = _ref2.id;

  var _useStore = Object(_util_useStore__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(),
      store = _useStore.store;

  var _ref3 = store || {},
      globalStore = _ref3.globalStore;

  var _ref4 = globalStore || {},
      defaultBannerImage = _ref4.defaultBannerImage,
      defaultLogo = _ref4.defaultLogo;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var getLessonDetail = props.getLessonDetail,
        getLessonChapters = props.getLessonChapters,
        cleanAll = props.cleanAll;
    getLessonDetail = getLessonDetail || new Function();
    getLessonChapters = getLessonChapters || new Function();
    getLessonDetail(id);
    getLessonChapters(id);
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.eventCenter.on('toggleFollow', setFollowStatus);

    var cleanUp = function cleanUp() {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.eventCenter.off('toggleFollow', setFollowStatus);
    };

    return cleanUp;
  }, []);
  var shareObj = {};
  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_5__["useShareAppMessage"])(function (res) {
    return shareObj;
  });
  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_5__["useShareTimeline"])(function (res) {
    return shareObj;
  });

  var setFollowStatus = function setFollowStatus(bool) {
    var upDateFollow = props.upDateFollow;
    upDateFollow = upDateFollow || new Function();
    upDateFollow(bool);
  };
  /**
   * 根据学习状态生成dom
   * **/


  var getLearnStatus = function getLearnStatus(id, process) {
    process = Number(process || 0);

    if (process === 0) {
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
        className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.unlearn_sign
      });
    } else if (process === 100) {
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
        className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.learned_sign
      });
    } else {
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_components_CircleProcess__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
        id: id,
        process: process,
        classname: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.canvas
      });
    }
  };

  return Object(mobx_react__WEBPACK_IMPORTED_MODULE_4__[/* useObserver */ "d"])(function () {
    var info = props.info,
        selItem = props.selItem,
        listData = props.listData,
        selSee = props.selSee,
        toStudy = props.toStudy,
        fixErrorImage = props.fixErrorImage,
        fixErrorAvatar = props.fixErrorAvatar,
        toggleUnit = props.toggleUnit,
        toggleFollow = props.toggleFollow,
        testData = props.testData,
        toggleSelTest = props.toggleSelTest,
        goToTest = props.goToTest,
        sel_test = props.sel_test,
        test_id = props.test_id;
    listData = listData || [];
    testData = testData || {};
    selSee = selSee || new Function();
    toStudy = toStudy || new Function();
    fixErrorImage = fixErrorImage || new Function();
    fixErrorAvatar = fixErrorAvatar || new Function();
    toggleUnit = toggleUnit || new Function();
    toggleFollow = toggleFollow || new Function();
    toggleSelTest = toggleSelTest || new Function();
    goToTest = goToTest || new Function();
    sel_test = sel_test || false;

    var _ref5 = info || {},
        title = _ref5.title,
        image = _ref5.image,
        price = _ref5.price,
        cost_price = _ref5.cost_price,
        total_time = _ref5.total_time,
        total_video = _ref5.total_video,
        click = _ref5.click,
        category = _ref5.category,
        map = _ref5.map,
        description = _ref5.description,
        comment = _ref5.comment,
        target = _ref5.target,
        content = _ref5.content,
        source = _ref5.source,
        is_follow = _ref5.is_follow,
        is_task = _ref5.is_task;

    image = image || defaultBannerImage;
    category = category || {};
    map = map || {};
    content = content || {};
    content.content = content.content || '';
    content.content = content.content.replace(/<p([\s\w"=\/\.:;]+)((?:(style="[^"]+")))/gi, '<p').replace(/<p([\s\w"=\/\.:;]+)((?:(class="[^"]+")))/gi, '<p').replace(/<p>/gi, '<p style="textIndent:60px;marginBottom:20px">').replace(/<img([\s\w"-=\/\.:;]+)((?:(height="[^"]+")))/gi, '<img$1').replace(/<img([\s\w"-=\/\.:;]+)((?:(width="[^"]+")))/gi, '<img$1').replace(/<img([\s\w"-=\/\.:;]+)((?:(style="[^"]+")))/gi, '<img$1').replace(/<img([\s\w"-=\/\.:;]+)((?:(alt="[^"]+")))/gi, '<img$1').replace(/<img/gi, '<img width="100%" height="auto" style="margin-bottom:10px;display:block"');
    source = source || {};
    var _source = source,
        seller = _source.seller;
    seller = seller || {};
    source.avatar = source.avatar || defaultLogo;
    is_follow = is_follow || false;
    is_task = is_task || false;
    shareObj = {
      title: title,
      path: Object(_util_getCurrentUrl__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(),
      imageUrl: image
    };

    var _useStore2 = Object(_util_useStore__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(),
        store = _useStore2.store;

    var _ref6 = store || {},
        globalStore = _ref6.globalStore;

    var _ref7 = Object(mobx__WEBPACK_IMPORTED_MODULE_3__[/* toJS */ "p"])(globalStore) || {},
        userData = _ref7.userData;

    userData = userData || {};
    var userInfo = userData.info;

    var _ref8 = userInfo || {},
        real_auth_status = _ref8.real_auth_status;

    real_auth_status = Number(real_auth_status || 0);
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
      className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.page,
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Image */ "g"], {
        lazyLoad: true,
        src: image,
        className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.video_content,
        onError: function onError() {
          fixErrorImage(defaultBannerImage);
        }
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
        className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.info_content,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
          className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.info,
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
            className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.name,
            children: title
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
          className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.fav,
          onClick: toggleFollow,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
            className: [is_follow ? _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.signed : _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.sign].join(' ')
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
            className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.text,
            children: "\u6536\u85CF"
          })]
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
        className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.gray_con
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
        className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.tabs,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
          className: [_index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.tab_item, selItem === 1 ? _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.active : ''].join(' '),
          onClick: function onClick() {
            selSee(1);
          },
          children: "\u5B66\u4E60\u76EE\u5F55"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
          className: [_index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.tab_item, selItem === 2 ? _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.active : ''].join(' '),
          onClick: function onClick() {
            selSee(2);
          },
          children: "\u8BFE\u7A0B\u8BE6\u60C5"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
          className: [_index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.tab_line, selItem === 2 ? _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.active : ''].join(' ')
        })]
      }), selItem === 1 ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
        className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.list,
        children: [listData.length === 0 && Object.keys(testData).length === 0 ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_components_Hunan_EmptyList__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {}) : null, listData.map(function (item, listIndex) {
          var id = item.id,
              title = item.title,
              sections = item.sections,
              units = item.units,
              active = item.active;
          sections = sections || [];
          units = units || [];
          return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
            className: [_index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.chapter, active ? _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.active : ''].join(' '),
            onClick: function onClick(e) {
              e.stopPropagation();
              toggleUnit(item);
            },
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
              className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.chapter_info,
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.chapter_sign
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.chapter_tit,
                children: title
              })]
            }), sections.map(function (sectionItem) {
              var _ref9 = sectionItem || {},
                  title = _ref9.title,
                  units = _ref9.units;

              units = units || [];
              return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                  className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.section,
                  children: title
                }), units.map(function (sectionUnit) {
                  var _ref10 = sectionUnit || {},
                      type = _ref10.type,
                      typeName = _ref10.typeName,
                      title = _ref10.title,
                      total_time = _ref10.total_time,
                      total_question = _ref10.total_question,
                      isFirstMovie = _ref10.isFirstMovie;

                  type = Number(type || 0);
                  typeName = typeName || {};
                  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                    className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.section_unit,
                    onClick: function onClick(e) {
                      toStudy(e, isFirstMovie, is_task, sectionUnit, real_auth_status);
                    },
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                      className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.section_unit_info_content,
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                        className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.section_unit_sign,
                        children: typeName.name
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                        className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.section_unit_info,
                        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                          className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.section_unit_info_left,
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                            className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.section_unit_info_left_title,
                            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                              className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.title,
                              children: title
                            }), isFirstMovie ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                              className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.title_sign,
                              children: "\u8BD5\u770B"
                            }) : null]
                          }), type === 1 ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                            className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.section_unit_info_left_info,
                            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                              className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.unit_time
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                              className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.unit_time_str,
                              children: Object(_util_getHMS__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(total_time)
                            })]
                          }) : null, type === 2 ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                            className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.section_unit_info_left_info,
                            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                              className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.unit_practise
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                              className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.unit_time_str,
                              children: [total_question, "\u9898"]
                            })]
                          }) : null]
                        }), !isFirstMovie ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                          className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.section_unit_info_right
                        }) : null]
                      })]
                    })
                  }, "section_unit_".concat(sectionUnit.id));
                })]
              }, "section_unit_".concat(sectionItem.id));
            }), units.map(function (chapterUnit) {
              var _ref11 = chapterUnit || {},
                  type = _ref11.type,
                  typeName = _ref11.typeName,
                  title = _ref11.title,
                  total_time = _ref11.total_time,
                  total_question = _ref11.total_question,
                  isFirstMovie = _ref11.isFirstMovie;

              type = Number(type || 0);
              typeName = typeName || {};
              return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.section_unit,
                onClick: function onClick(e) {
                  toStudy(e, isFirstMovie, is_task, chapterUnit, real_auth_status);
                },
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                  className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.section_unit_info_content,
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                    className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.section_unit_sign,
                    children: typeName.name
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                    className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.section_unit_info,
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                      className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.section_unit_info_left,
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                        className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.section_unit_info_left_title,
                        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                          className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.title,
                          children: title
                        }), isFirstMovie ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                          className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.title_sign,
                          children: "\u8BD5\u770B"
                        }) : null]
                      }), type === 1 ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                        className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.section_unit_info_left_info,
                        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                          className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.unit_time
                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                          className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.unit_time_str,
                          children: Object(_util_getHMS__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(total_time)
                        })]
                      }) : null, type === 2 ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                        className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.section_unit_info_left_info,
                        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                          className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.unit_practise
                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                          className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.unit_time_str,
                          children: [total_question, "\u9898"]
                        })]
                      }) : null]
                    }), !isFirstMovie ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                      className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.section_unit_info_right
                    }) : null]
                  })]
                })
              }, "chapter_unit_".concat(chapterUnit.id));
            })]
          }, "chapter_".concat(id));
        }), Object.keys(testData).length !== 0 ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
          className: [_index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.chapter, sel_test ? _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.active : ''].join(' '),
          onClick: function onClick(e) {
            e.stopPropagation();
            toggleSelTest();
          },
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
            className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.chapter_info,
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
              className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.chapter_sign
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
              className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.chapter_tit,
              children: "\u8BFE\u540E\u8003\u8BD5"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
            className: [_index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.section_unit, test_id ? _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.active : ''].join(' '),
            onClick: function onClick(e) {
              e.stopPropagation();
              goToTest();
            },
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
              className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.section_unit_info_content,
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.section_unit_sign,
                children: "\u8003\u8BD5"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.section_unit_info,
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                  className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.section_unit_info_left,
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                    className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.section_unit_info_left_title,
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                      className: [_index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.title, Number(test_id || 0) !== 0 ? _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.active : ''].join(' '),
                      children: testData.title
                    })
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                  className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.section_unit_info_right
                })]
              })]
            })
          })]
        }) : null]
      }) : null, selItem === 2 ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
        className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.detail,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "q"], {
          className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.des_title,
          children: "\u8BFE\u7A0B\u6982\u8FF0"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
          className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.des_txt,
          children: description
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "q"], {
          className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.des_title,
          children: "\u8BFE\u7A0B\u76EE\u6807"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
          className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.des_txt,
          children: target
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "q"], {
          className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.des_title,
          children: "\u8003\u6838\u8BC4\u4EF7"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
          className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.des_txt,
          children: comment
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "q"], {
          className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.des_title,
          children: "\u8BE6\u7EC6\u4ECB\u7ECD"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* RichText */ "l"], {
          className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.rich_content,
          nodes: content.content
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "q"], {
          className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.des_title,
          children: "\u8BFE\u7A0B\u6765\u6E90"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
          className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.from,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Image */ "g"], {
            lazyLoad: true,
            className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.icon,
            src: source.avatar,
            onError: function onError() {
              fixErrorAvatar(defaultLogo);
            }
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "q"], {
            className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a.txt,
            children: seller.company_alias_name
          })]
        })]
      }) : null]
    });
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Detail);

/***/ }),

/***/ "./src/components/Hunan/Lesson/Detail/index.module.less":
/*!**************************************************************!*\
  !*** ./src/components/Hunan/Lesson/Detail/index.module.less ***!
  \**************************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"page":"index-module__page___3L9vW","video_content":"index-module__video_content___B9CnA","video":"index-module__video___2qdwc","info_content":"index-module__info_content___3Ga7t","info":"index-module__info___3TY8I","name":"index-module__name___QoQpV","cost":"index-module__cost___D337W","free":"index-module__free___1iLIN","money":"index-module__money___jblw4","fav":"index-module__fav___1EeyL","sign":"index-module__sign___3TT3Q","signed":"index-module__signed___kdpLX","text":"index-module__text___2PKCN","gray_con":"index-module__gray_con___Dagf8","tabs":"index-module__tabs___1lbMk","tab_item":"index-module__tab_item___35eZZ","active":"index-module__active___JIgpA","tab_line":"index-module__tab_line___2CZi9","list":"index-module__list___3VV9q","chapter":"index-module__chapter___1a1Sa","chapter_info":"index-module__chapter_info___380LO","chapter_sign":"index-module__chapter_sign___3tW5K","chapter_tit":"index-module__chapter_tit___1AZD4","section":"index-module__section___hFWjC","section_unit":"index-module__section_unit___3DOoN","section_unit_info_content":"index-module__section_unit_info_content___2yio4","section_unit_sign":"index-module__section_unit_sign___1Rchr","section_unit_info":"index-module__section_unit_info___2kUlM","section_unit_info_left":"index-module__section_unit_info_left___CbWiC","section_unit_info_left_title":"index-module__section_unit_info_left_title___2ygij","title":"index-module__title___3ZJea","title_sign":"index-module__title_sign___1fYvG","section_unit_info_left_info":"index-module__section_unit_info_left_info___MCTpd","unit_time":"index-module__unit_time___bJ4x9","unit_practise":"index-module__unit_practise___EB8BH","unit_time_str":"index-module__unit_time_str___1MoFz","unit_split":"index-module__unit_split___-O1C5","unit_status_learned":"index-module__unit_status_learned___3KPMv","unit_status_unlearn":"index-module__unit_status_unlearn___2ES-u","unit_status_learning":"index-module__unit_status_learning___zD6tC","unit_file_type":"index-module__unit_file_type___U85p9","section_unit_info_right":"index-module__section_unit_info_right___21jsg","unit":"index-module__unit___3E2er","unit_info":"index-module__unit_info___1TqGS","unit_sign":"index-module__unit_sign___1fVKP","unit_tit":"index-module__unit_tit___Y9CGf","list_item":"index-module__list_item___rSPhE","item_content":"index-module__item_content___3l7vH","item_name_con":"index-module__item_name_con___fbq3h","item_name":"index-module__item_name___nXvnz","item_try":"index-module__item_try___QOJM9","item_info":"index-module__item_info___3ipG9","time":"index-module__time___wLhQr","time_str":"index-module__time_str___1n5wi","split":"index-module__split___gfxcS","unlearn_sign":"index-module__unlearn_sign___eTo2k","learned_sign":"index-module__learned_sign___2s6fH","learn_status":"index-module__learn_status___2ej8A","canvas":"index-module__canvas___i240d","hasLock":"index-module__hasLock___MLD80","item_lock":"index-module__item_lock___1Hg_Z","detail":"index-module__detail___1q7zM","des_title":"index-module__des_title___16QuH","des_txt":"index-module__des_txt___1sl0k","rich_content":"index-module__rich_content___2dLIj","from":"index-module__from___1RC81","icon":"index-module__icon___SwTcY","txt":"index-module__txt___2COCm"};

/***/ }),

/***/ "./src/pages/lesson/detail/detailStore.js":
/*!************************************************!*\
  !*** ./src/pages/lesson/detail/detailStore.js ***!
  \************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/initializerDefineProperty */ "./node_modules/@babel/runtime/helpers/esm/initializerDefineProperty.js");
/* harmony import */ var _Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor */ "./node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor.js");
/* harmony import */ var _Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/initializerWarningHelper */ "./node_modules/@babel/runtime/helpers/esm/initializerWarningHelper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _servers_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../servers/http */ "./src/servers/http.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../api */ "./src/pages/lesson/api.js");








var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;






var detailStore = (_class = function detailStore() {
  var _this = this;

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, detailStore);

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, "id", _descriptor, this);

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, "info", _descriptor2, this);

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, "listData", _descriptor3, this);

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, "testData", _descriptor4, this);

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, "canRequest", _descriptor5, this);

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, "sel_test", _descriptor6, this);

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, "test_id", _descriptor7, this);

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, "selItem", _descriptor8, this);

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, "selSee", function (type) {
    _this.selItem = type;
  });

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, "toggleSelTest", function () {
    _this.sel_test = !_this.sel_test;
  });

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, "goToTest", function () {
    var _ref = _this.testData || {},
        id = _ref.id;

    _this.test_id = id;
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_9___default.a.showToast({
      title: '您目前只能观看试看视频',
      icon: 'none',
      duration: 3000
    });
  });

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, "cleanAll", function () {
    // 课程详情
    _this.info = {};
    _this.listData = [];
    _this.testData = {};
    _this.sel_test = true;
    _this.test_id = null;
    _this.canRequest = true;
    _this.selItem = 1;
  });

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, "upDateFollow", function (bool) {
    bool = bool || false;
    var temp = JSON.parse(JSON.stringify(_this.info));
    temp.is_follow = bool;
    _this.info = temp;
  });

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, "toStudy", function (e, isFirstMovie, is_task, data, realStatus) {
    e.stopPropagation();
    var id = data.id;

    if (isFirstMovie) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_9___default.a.navigateTo({
        url: "/pages/lesson/study/index?cid=".concat(_this.id, "&unitid=").concat(id)
      });
    } else {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_9___default.a.showToast({
        title: '您目前只能观看试看视频',
        icon: 'none',
        duration: 3000
      });
    }
  });

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, "startStudy", function (video_id, time, type) {
    var params = {
      video_id: video_id,
      time: time
    };

    switch (type) {
      case 'start':
        params.start = 1;
        break;

      case 'end':
        params.end = 1;
    }

    Object(_servers_http__WEBPACK_IMPORTED_MODULE_10__[/* myPostData */ "d"])(_api__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].studies, params).then(function (_ref2) {
      var status = _ref2.status,
          data = _ref2.data;
    }).catch(function (e) {});
  });

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, "toggleFollow", function () {
    if (!_this.canRequest) return;
    _this.canRequest = false;
    var is_follow = _this.info.is_follow;
    is_follow = is_follow || false;

    if (is_follow) {
      Object(_servers_http__WEBPACK_IMPORTED_MODULE_10__[/* myDeleteData */ "b"])("".concat(_api__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].follows, "/").concat(_this.id)).then(function (_ref3) {
        var status = _ref3.status,
            data = _ref3.data;
        _this.canRequest = true;
        if (status !== 204) return;
        var temp = JSON.parse(JSON.stringify(_this.info));
        temp.is_follow = false;
        _this.info = temp;
      }).catch(function () {
        _this.canRequest = true;
      });
    } else {
      Object(_servers_http__WEBPACK_IMPORTED_MODULE_10__[/* myPostData */ "d"])(_api__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].follows, {
        follow_id: _this.id
      }).then(function (_ref4) {
        var status = _ref4.status,
            data = _ref4.data;
        _this.canRequest = true;
        if (status !== 201) return;
        var temp = JSON.parse(JSON.stringify(_this.info));
        temp.is_follow = true;
        _this.info = temp;
      }).catch(function () {
        _this.canRequest = true;
      });
    }
  });

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, "getLessonDetail", /*#__PURE__*/function () {
    var _ref5 = Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(id) {
      return _Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.id = id;
              Object(_servers_http__WEBPACK_IMPORTED_MODULE_10__[/* myGetData */ "c"])("".concat(_api__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].courses, "/").concat(id)).then(function (_ref6) {
                var status = _ref6.status,
                    data = _ref6.data;
                if (status !== 200) return;
                _this.info = data;
              }).catch(function (_ref7) {
                var status = _ref7.status,
                    data = _ref7.data;
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref5.apply(this, arguments);
    };
  }());

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, "getLessonChapters", /*#__PURE__*/function () {
    var _ref8 = Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(id) {
      return _Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this.id = id;
              Object(_servers_http__WEBPACK_IMPORTED_MODULE_10__[/* myGetData */ "c"])("".concat(_api__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].newCourseChapters), {
                course_id: id
              }).then(function (_ref9) {
                var status = _ref9.status,
                    data = _ref9.data;

                if (Number(status || 0) > 199 && Number(status || 0) < 300) {
                  var _ref10 = data || {},
                      course = _ref10.course,
                      test = _ref10.test;

                  course = course || [];
                  test = test || {};
                  var tempAllUnit = [];
                  course.map(function (a, index) {
                    a.active = true;

                    var _ref11 = a || {},
                        sections = _ref11.sections,
                        units = _ref11.units;

                    sections = sections || [];
                    units = units || [];
                    sections.map(function (s) {
                      var _ref12 = s || {},
                          units = _ref12.units;

                      units.map(function (u) {
                        tempAllUnit.push(u);
                        u.active = false;
                      });
                    });
                    units.map(function (u) {
                      tempAllUnit.push(u);
                      u.active = false;
                    });
                  });
                  tempAllUnit.every(function (item) {
                    if (Number(item.type || 0) === 1) {
                      item.isFirstMovie = true;
                      return false;
                    } else {
                      return true;
                    }
                  });
                  _this.listData = course;
                  _this.testData = test;
                }
              }).catch(function (_ref13) {
                var status = _ref13.status,
                    data = _ref13.data;
              });

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x2) {
      return _ref8.apply(this, arguments);
    };
  }());

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, "toggleUnit", function (data) {
    var tempList = JSON.parse(JSON.stringify(_this.listData));
    tempList.map(function (item) {
      if (item.id.toString() === data.id.toString()) {
        item.active = !item.active;
      }
    });
    _this.listData = tempList;
  });

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, "fixErrorImage", function (defaultImage) {
    var tempInfo = JSON.parse(JSON.stringify(_this.info));

    if (tempInfo) {
      tempInfo.image = defaultImage;
    }

    _this.info = tempInfo;
  });

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, "fixErrorAvatar", function (defaultImage) {
    var tempInfo = JSON.parse(JSON.stringify(_this.info));

    if (tempInfo) {
      tempInfo.source = tempInfo.source || {};
      tempInfo.source.avatar = defaultImage;
    }

    _this.info = tempInfo;
  });
}, (_descriptor = Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_class.prototype, "id", [mobx__WEBPACK_IMPORTED_MODULE_8__[/* observable */ "m"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor2 = Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_class.prototype, "info", [mobx__WEBPACK_IMPORTED_MODULE_8__[/* observable */ "m"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return {};
  }
}), _descriptor3 = Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_class.prototype, "listData", [mobx__WEBPACK_IMPORTED_MODULE_8__[/* observable */ "m"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor4 = Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_class.prototype, "testData", [mobx__WEBPACK_IMPORTED_MODULE_8__[/* observable */ "m"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return {};
  }
}), _descriptor5 = Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_class.prototype, "canRequest", [mobx__WEBPACK_IMPORTED_MODULE_8__[/* observable */ "m"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor6 = Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_class.prototype, "sel_test", [mobx__WEBPACK_IMPORTED_MODULE_8__[/* observable */ "m"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor7 = Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_class.prototype, "test_id", [mobx__WEBPACK_IMPORTED_MODULE_8__[/* observable */ "m"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor8 = Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_class.prototype, "selItem", [mobx__WEBPACK_IMPORTED_MODULE_8__[/* observable */ "m"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 1;
  }
})), _class);
/* harmony default export */ __webpack_exports__["a"] = (new detailStore());

/***/ }),

/***/ "./src/pages/lesson/detail/index.jsx":
/*!*******************************************!*\
  !*** ./src/pages/lesson/detail/index.jsx ***!
  \*******************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/babel-loader/lib!./index.jsx */ "./node_modules/babel-loader/lib/index.js!./src/pages/lesson/detail/index.jsx");


var config = {"navigationBarTitleText":"课程详情","enableShareAppMessage":true,"enableShareTimeline":true};
_node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].enableShareTimeline = true
_node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].enableShareAppMessage = true
var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/lesson/detail/index', {root:{cn:[]}}, config || {}))



/***/ }),

/***/ "./src/pages/lesson/detail/index.module.less":
/*!***************************************************!*\
  !*** ./src/pages/lesson/detail/index.module.less ***!
  \***************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"page":"index-module__page___2q5YC","color":"index-module__color___66zWZ"};

/***/ })

},[["./src/pages/lesson/detail/index.jsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map