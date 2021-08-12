(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/lesson/study/index"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/pages/lesson/study/index.jsx":
/*!**************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/pages/lesson/study/index.jsx ***!
  \**************************************************************************/
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
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.module.less */ "./src/pages/lesson/study/index.module.less");
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_module_less__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Hunan_Lesson_Study__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Hunan/Lesson/Study */ "./src/components/Hunan/Lesson/Study/index.jsx");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react-lite/es/index.js");
/* harmony import */ var _studyStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./studyStore */ "./src/pages/lesson/study/studyStore.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);











var Study = function Study() {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var _toJS = Object(mobx__WEBPACK_IMPORTED_MODULE_6__[/* toJS */ "p"])(_studyStore__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"]),
        cleanAll = _toJS.cleanAll;

    cleanAll = cleanAll || new Function();

    var cleanUp = function cleanUp() {
      cleanAll();
    };

    return cleanUp;
  }, []);
  return Object(mobx_react__WEBPACK_IMPORTED_MODULE_7__[/* useObserver */ "d"])(function () {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], {
      className: _index_module_less__WEBPACK_IMPORTED_MODULE_4___default.a.page,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_components_Hunan_Lesson_Study__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, Object(mobx__WEBPACK_IMPORTED_MODULE_6__[/* toJS */ "p"])(_studyStore__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])))
    });
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Study);

/***/ }),

/***/ "./src/components/Hunan/Lesson/Study/index.jsx":
/*!*****************************************************!*\
  !*** ./src/components/Hunan/Lesson/Study/index.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react-lite/es/index.js");
/* harmony import */ var _components_TryVideo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/TryVideo */ "./src/components/TryVideo/index.js");
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.module.less */ "./src/components/Hunan/Lesson/Study/index.module.less");
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_module_less__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _util_useStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/util/useStore */ "./src/util/useStore.js");
/* harmony import */ var _EmptyList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../EmptyList */ "./src/components/Hunan/EmptyList/index.js");
/* harmony import */ var _util_getHMS__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/util/getHMS */ "./src/util/getHMS.js");
/* harmony import */ var _util_getCurrentUrl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/util/getCurrentUrl */ "./src/util/getCurrentUrl.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);














var Study = function Study(props) {
  var router = Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  var _ref = router || {},
      params = _ref.params;

  var _ref2 = params || {},
      cid = _ref2.cid,
      unitid = _ref2.unitid;

  cid = cid || null;
  unitid = unitid || null;

  var _useStore = Object(_util_useStore__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(),
      store = _useStore.store;

  var _ref3 = store || {},
      globalStore = _ref3.globalStore;

  var _ref4 = globalStore || {},
      defaultBannerImage = _ref4.defaultBannerImage,
      defaultLogo = _ref4.defaultLogo,
      confirm_time = _ref4.confirm_time,
      userData = _ref4.userData;

  userData = userData || {};

  var _ref5 = userData || {},
      id = _ref5.id,
      name = _ref5.name,
      info = _ref5.info;

  var _ref6 = info || {},
      idcard = _ref6.idcard;

  confirm_time = Number(confirm_time || 0);
  var setUid = props.setUid,
      setConfirmTime = props.setConfirmTime,
      getLessonDetail = props.getLessonDetail,
      getLessonChapters = props.getLessonChapters,
      toggleUnit = props.toggleUnit,
      toggleFollow = props.toggleFollow,
      cleanAll = props.cleanAll;
  setUid = setUid || new Function();
  setConfirmTime = setConfirmTime || new Function();
  getLessonDetail = getLessonDetail || new Function();
  getLessonChapters = getLessonChapters || new Function();
  toggleUnit = toggleUnit || new Function();
  toggleFollow = toggleFollow || new Function();
  cleanAll = cleanAll || new Function();
  var shareObj = {};

  var doWatchMovie = function doWatchMovie(e) {
    e.stopPropagation();
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.showToast({
      title: '您目前只能观看试看视频',
      icon: 'none',
      duration: 3000
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setUid(id);
    setConfirmTime(confirm_time);
    getLessonDetail(cid);
    getLessonChapters(cid, unitid);
    return function () {
      cleanAll();
    };
  }, []);
  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__["useShareAppMessage"])(function (res) {
    return shareObj;
  });
  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__["useShareTimeline"])(function (res) {
    return shareObj;
  });
  return Object(mobx_react__WEBPACK_IMPORTED_MODULE_3__[/* useObserver */ "d"])(function () {
    var unitid = props.unitid,
        uid = props.uid,
        info = props.info,
        listData = props.listData,
        trailerTime = props.trailerTime,
        videoParams = props.videoParams,
        videoDuration = props.videoDuration,
        testData = props.testData,
        toggleSelTest = props.toggleSelTest,
        goToTest = props.goToTest,
        sel_test = props.sel_test,
        test_id = props.test_id;
    testData = testData || {};
    toggleSelTest = toggleSelTest || new Function();
    goToTest = goToTest || new Function();
    sel_test = sel_test || false;
    listData = listData || [];
    trailerTime = Number(trailerTime || 0);

    var _ref7 = info || {},
        title = _ref7.title,
        image = _ref7.image,
        content = _ref7.content,
        source = _ref7.source,
        is_follow = _ref7.is_follow;

    image = image || defaultBannerImage;
    content = content || {};
    content.content = content.content || '';
    content.content = content.content.replace(/<p([\s\w"=\/\.:;]+)((?:(style="[^"]+")))/gi, '<p').replace(/<p([\s\w"=\/\.:;]+)((?:(class="[^"]+")))/gi, '<p').replace(/<p>/gi, '<p style="textIndent:60px;marginBottom:20px">').replace(/<img([\s\w"-=\/\.:;]+)((?:(height="[^"]+")))/gi, '<img$1').replace(/<img([\s\w"-=\/\.:;]+)((?:(width="[^"]+")))/gi, '<img$1').replace(/<img([\s\w"-=\/\.:;]+)((?:(style="[^"]+")))/gi, '<img$1').replace(/<img([\s\w"-=\/\.:;]+)((?:(alt="[^"]+")))/gi, '<img$1').replace(/<img/gi, '<img width="100%" height="auto" style="margin-bottom:10px;display:block"');
    source = source || {};
    source.avatar = source.avatar || defaultLogo;
    is_follow = is_follow || false;
    shareObj = {
      title: title,
      path: Object(_util_getCurrentUrl__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(),
      imageUrl: image
    };
    var MemTryVideo = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_components_TryVideo__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
        name: name,
        idcard: idcard,
        uid: uid,
        videoDuration: videoDuration,
        trailerTime: trailerTime,
        videoParams: videoParams
      });
    }, [videoParams.src]);
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
      className: _index_module_less__WEBPACK_IMPORTED_MODULE_5___default.a.page,
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
        className: _index_module_less__WEBPACK_IMPORTED_MODULE_5___default.a.video_content,
        children: MemTryVideo
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
        className: _index_module_less__WEBPACK_IMPORTED_MODULE_5___default.a.info_content,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
          className: _index_module_less__WEBPACK_IMPORTED_MODULE_5___default.a.info,
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
            className: _index_module_less__WEBPACK_IMPORTED_MODULE_5___default.a.name,
            children: title
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
          className: _index_module_less__WEBPACK_IMPORTED_MODULE_5___default.a.fav,
          onClick: toggleFollow,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
            className: [is_follow ? _index_module_less__WEBPACK_IMPORTED_MODULE_5___default.a.signed : _index_module_less__WEBPACK_IMPORTED_MODULE_5___default.a.sign].join(' ')
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
            className: _index_module_less__WEBPACK_IMPORTED_MODULE_5___default.a.text,
            children: "\u6536\u85CF"
          })]
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
        className: _index_module_less__WEBPACK_IMPORTED_MODULE_5___default.a.gray_con
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
        className: _index_module_less__WEBPACK_IMPORTED_MODULE_5___default.a.tabs,
        children: "\u5B66\u4E60\u76EE\u5F55"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
        className: _index_module_less__WEBPACK_IMPORTED_MODULE_5___default.a.list,
        children: [listData.length === 0 && Object.keys(testData).length === 0 ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_EmptyList__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {}) : null, listData.map(function (item, listIndex) {
          var id = item.id,
              title = item.title,
              sections = item.sections,
              units = item.units,
              active = item.active;
          sections = sections || [];
          units = units || [];
          return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
            className: [_index_module_less__WEBPACK_IMPORTED_MODULE_5___default.a.chapter, active ? _index_module_less__WEBPACK_IMPORTED_MODULE_5___default.a.active : ''].join(' '),
            onClick: function onClick(e) {
              e.stopPropagation();
              toggleUnit(item);
            },
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
              className: _index_module_less__WEBPACK_IMPORTED_MODULE_5___default.a.chapter_info,
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                className: _index_module_less__WEBPACK_IMPORTED_MODULE_5___default.a.chapter_sign
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                className: _index_module_less__WEBPACK_IMPORTED_MODULE_5___default.a.chapter_tit,
                children: title
              })]
            }), sections.map(function (sectionItem) {
              var _ref8 = sectionItem || {},
                  title = _ref8.title,
                  units = _ref8.units;

              units = units || [];
              return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                  className: _index_module_less__WEBPACK_IMPORTED_MODULE_5___default.a.section,
                  children: title
                }), units.map(function (sectionUnit) {
                  var _ref9 = sectionUnit || {},
                      type = _ref9.type,
                      typeName = _ref9.typeName,
                      title = _ref9.title,
                      total_time = _ref9.total_time,
                      total_question = _ref9.total_question,
                      isFirstMovie = _ref9.isFirstMovie;

                  type = Number(type || 0);
                  typeName = typeName || {};
                  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                    className: [_index_module_less__WEBPACK_IMPORTED_MODULE_5___default.a.section_unit, Number(sectionUnit.id || 0) === Number(unitid || 0) ? _index_module_less__WEBPACK_IMPORTED_MODULE_5___default.a.active : ''].join(' '),
                    onClick: function onClick(e) {
                      doWatchMovie(e);
                    },
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                      className: _index_module_less__WEBPACK_IMPORTED_MODULE_5___default.a.section_unit_info_content,
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                        className: _index_module_less__WEBPACK_IMPORTED_MODULE_5___default.a.section_unit_sign,
                        children: typeName.name
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                        className: _index_module_less__WEBPACK_IMPORTED_MODULE_5___default.a.section_unit_info,
                        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                          className: _index_module_less__WEBPACK_IMPORTED_MODULE_5___default.a.section_unit_info_left,
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                            className: _index_module_less__WEBPACK_IMPORTED_MODULE_5___default.a.section_unit_info_left_title,
                            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                              className: _index_module_less__WEBPACK_IMPORTED_MODULE_5___default.a.title,
                              children: title
                            }), isFirstMovie ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                              className: _index_module_less__WEBPACK_IMPORTED_MODULE_5___default.a.title_sign,
                              children: "\u8BD5\u770B"
                            }) : null]
                          }), type === 1 ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                            className: _index_module_less__WEBPACK_IMPORTED_MODULE_5___default.a.section_unit_info_left_info,
                            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                              className: _index_module_less__WEBPACK_IMPORTED_MODULE_5___default.a.unit_time
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                              className: _index_module_less__WEBPACK_IMPORTED_MODULE_5___default.a.unit_time_str,
                              children: Object(_util_getHMS__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(total_time)
                            })]
                          }) : null, type === 2 ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                            className: _index_module_less__WEBPACK_IMPORTED_MODULE_5___default.a.section_unit_info_left_info,
                            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                              className: _index_module_less__WEBPACK_IMPORTED_MODULE_5___default.a.unit_practise
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                              className: _index_module_less__WEBPACK_IMPORTED_MODULE_5___default.a.unit_time_str,
                              children: [total_question, "\u9898"]
                            })]
                          }) : null]
                        }), !isFirstMovie ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                          className: _index_module_less__WEBPACK_IMPORTED_MODULE_5___default.a.section_unit_info_right
                        }) : null]
                      })]
                    })
                  }, "section_unit_".concat(sectionUnit.id));
                })]
              }, "section_unit_".concat(sectionItem.id));
            }), units.map(function (chapterUnit) {
              var _ref10 = chapterUnit || {},
                  type = _ref10.type,
                  typeName = _ref10.typeName,
                  title = _ref10.title,
                  total_time = _ref10.total_time,
                  total_question = _ref10.total_question,
                  isFirstMovie = _ref10.isFirstMovie;

              type = Number(type || 0);
              typeName = typeName || {};
              return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                className: [_index_module_less__WEBPACK_IMPORTED_MODULE_5___default.a.section_unit, Number(chapterUnit.id || 0) === Number(unitid || 0) ? _index_module_less__WEBPACK_IMPORTED_MODULE_5___default.a.active : ''].join(' '),
                onClick: function onClick(e) {
                  doWatchMovie(e);
                },
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                  className: _index_module_less__WEBPACK_IMPORTED_MODULE_5___default.a.section_unit_info_content,
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                    className: _index_module_less__WEBPACK_IMPORTED_MODULE_5___default.a.section_unit_sign,
                    children: typeName.name
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                    className: _index_module_less__WEBPACK_IMPORTED_MODULE_5___default.a.section_unit_info,
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                      className: _index_module_less__WEBPACK_IMPORTED_MODULE_5___default.a.section_unit_info_left,
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                        className: _index_module_less__WEBPACK_IMPORTED_MODULE_5___default.a.section_unit_info_left_title,
                        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                          className: _index_module_less__WEBPACK_IMPORTED_MODULE_5___default.a.title,
                          children: title
                        }), isFirstMovie ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                          className: _index_module_less__WEBPACK_IMPORTED_MODULE_5___default.a.title_sign,
                          children: "\u8BD5\u770B"
                        }) : null]
                      }), type === 1 ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                        className: _index_module_less__WEBPACK_IMPORTED_MODULE_5___default.a.section_unit_info_left_info,
                        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                          className: _index_module_less__WEBPACK_IMPORTED_MODULE_5___default.a.unit_time
                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                          className: _index_module_less__WEBPACK_IMPORTED_MODULE_5___default.a.unit_time_str,
                          children: Object(_util_getHMS__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(total_time)
                        })]
                      }) : null, type === 2 ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                        className: _index_module_less__WEBPACK_IMPORTED_MODULE_5___default.a.section_unit_info_left_info,
                        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                          className: _index_module_less__WEBPACK_IMPORTED_MODULE_5___default.a.unit_practise
                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                          className: _index_module_less__WEBPACK_IMPORTED_MODULE_5___default.a.unit_time_str,
                          children: [total_question, "\u9898"]
                        })]
                      }) : null]
                    }), !isFirstMovie ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                      className: _index_module_less__WEBPACK_IMPORTED_MODULE_5___default.a.section_unit_info_right
                    }) : null]
                  })]
                })
              }, "chapter_unit_".concat(chapterUnit.id));
            })]
          }, "chapter_".concat(id));
        }), Object.keys(testData).length !== 0 ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
          className: [_index_module_less__WEBPACK_IMPORTED_MODULE_5___default.a.chapter, sel_test ? _index_module_less__WEBPACK_IMPORTED_MODULE_5___default.a.active : ''].join(' '),
          onClick: function onClick(e) {
            e.stopPropagation();
            toggleSelTest();
          },
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
            className: _index_module_less__WEBPACK_IMPORTED_MODULE_5___default.a.chapter_info,
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
              className: _index_module_less__WEBPACK_IMPORTED_MODULE_5___default.a.chapter_sign
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
              className: _index_module_less__WEBPACK_IMPORTED_MODULE_5___default.a.chapter_tit,
              children: "\u8BFE\u540E\u8003\u8BD5"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
            className: [_index_module_less__WEBPACK_IMPORTED_MODULE_5___default.a.section_unit, test_id ? _index_module_less__WEBPACK_IMPORTED_MODULE_5___default.a.active : ''].join(' '),
            onClick: function onClick(e) {
              e.stopPropagation();
              goToTest();
            },
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
              className: _index_module_less__WEBPACK_IMPORTED_MODULE_5___default.a.section_unit_info_content,
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                className: _index_module_less__WEBPACK_IMPORTED_MODULE_5___default.a.section_unit_sign,
                children: "\u8003\u8BD5"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                className: _index_module_less__WEBPACK_IMPORTED_MODULE_5___default.a.section_unit_info,
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                  className: _index_module_less__WEBPACK_IMPORTED_MODULE_5___default.a.section_unit_info_left,
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                    className: _index_module_less__WEBPACK_IMPORTED_MODULE_5___default.a.section_unit_info_left_title,
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "s"], {
                      className: [_index_module_less__WEBPACK_IMPORTED_MODULE_5___default.a.title, Number(test_id || 0) !== 0 ? _index_module_less__WEBPACK_IMPORTED_MODULE_5___default.a.active : ''].join(' '),
                      children: testData.title
                    })
                  })
                })
              })]
            })
          })]
        }) : null]
      })]
    });
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Study);

/***/ }),

/***/ "./src/components/Hunan/Lesson/Study/index.module.less":
/*!*************************************************************!*\
  !*** ./src/components/Hunan/Lesson/Study/index.module.less ***!
  \*************************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"video_cover":"index-module__video_cover___2d7kE","video_try":"index-module__video_try___20ZTf","page":"index-module__page___1Qfk4","video_content":"index-module__video_content___1gyo9","video":"index-module__video___1nadO","info_content":"index-module__info_content___1durf","info":"index-module__info___2fwjR","name":"index-module__name___2XRA4","cost":"index-module__cost___WeRn9","free":"index-module__free___vbv6I","money":"index-module__money___1zyRg","fav":"index-module__fav___3pcaW","sign":"index-module__sign___2K23U","signed":"index-module__signed___16uW7","text":"index-module__text___2nUDh","gray_con":"index-module__gray_con___1yQEp","tabs":"index-module__tabs___3n8iU","list":"index-module__list___Wwfac","chapter":"index-module__chapter___3ERvW","chapter_info":"index-module__chapter_info___ycS98","chapter_sign":"index-module__chapter_sign___1Lvcm","chapter_tit":"index-module__chapter_tit___3RMzL","active":"index-module__active___36nKh","section":"index-module__section___1Wj9E","section_unit":"index-module__section_unit___1QkxN","section_unit_info_content":"index-module__section_unit_info_content___n0YzT","section_unit_sign":"index-module__section_unit_sign___2XZDw","section_unit_info":"index-module__section_unit_info___13t__","section_unit_info_left":"index-module__section_unit_info_left___2eYDI","section_unit_info_left_title":"index-module__section_unit_info_left_title___BihJl","title":"index-module__title___21Z9f","title_sign":"index-module__title_sign___3geSM","section_unit_info_left_info":"index-module__section_unit_info_left_info___3CNIY","unit_time":"index-module__unit_time___eGZkg","unit_practise":"index-module__unit_practise___1rDuk","unit_time_str":"index-module__unit_time_str___2n3h_","unit_split":"index-module__unit_split___1cIrM","unit_status_learned":"index-module__unit_status_learned___2FkLu","unit_status_unlearn":"index-module__unit_status_unlearn___2V-RT","unit_status_learning":"index-module__unit_status_learning___Mcxwv","unit_file_type":"index-module__unit_file_type___5dEuA","section_unit_info_right":"index-module__section_unit_info_right___3aF9o","unit":"index-module__unit___9hVM5","unit_info":"index-module__unit_info___u8U29","unit_sign":"index-module__unit_sign___USIXq","unit_tit":"index-module__unit_tit___3h8fG","list_item":"index-module__list_item___cAWUX","item_content":"index-module__item_content___OzGW1","item_name_con":"index-module__item_name_con___mjGiq","item_name":"index-module__item_name___3BM-r","item_try":"index-module__item_try___1icVu","item_info":"index-module__item_info___1Ufwc","time":"index-module__time___1SBsk","time_str":"index-module__time_str___5cQ_Q","split":"index-module__split___2QAgH","unlearn_sign":"index-module__unlearn_sign___2nlsr","learned_sign":"index-module__learned_sign___2tm03","learn_status":"index-module__learn_status___3pHCn","canvas":"index-module__canvas___XjmMh","hasLock":"index-module__hasLock___3ifw3","item_lock":"index-module__item_lock___1eZLN","detail":"index-module__detail___17bLh","des_title":"index-module__des_title___3-HGD","rich_content":"index-module__rich_content___1NVpn","from":"index-module__from___nHzZJ","icon":"index-module__icon___3Cz7f","txt":"index-module__txt___1uOY_","dialog":"index-module__dialog___35MCQ","dialog_box":"index-module__dialog_box___1kKxc","dialog_text":"index-module__dialog_text___3Gna-","dialog_btn":"index-module__dialog_btn___3AAww","warring_box":"index-module__warring_box___2vcby","warring_img":"index-module__warring_img___3eDJA","warring_tit":"index-module__warring_tit___3Q27Z","warring_des":"index-module__warring_des___1_Vqd","warring_p_tit":"index-module__warring_p_tit___2tZze","warring_p_l":"index-module__warring_p_l___1yfEc","warring_i":"index-module__warring_i___19yzq","warring_p":"index-module__warring_p___1ELsh","warring_btn":"index-module__warring_btn___Guhg8"};

/***/ }),

/***/ "./src/components/TryVideo/index.js":
/*!******************************************!*\
  !*** ./src/components/TryVideo/index.js ***!
  \******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.module.less */ "./src/components/TryVideo/index.module.less");
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_module_less__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _pages_lesson_study_studyStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/pages/lesson/study/studyStore */ "./src/pages/lesson/study/studyStore.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);


/**
 * Created by feeling on 2020/9/16.
 * Theme：播放器组件
 */







var tryVideoContext = null;
var controlShowEvent = []; //控制条延时显示事件

var tempCurrentTime = 0; //当前播放器播放到的时间（未上传）

var onChangeQuality = false; //是否正在切换清晰度

var timeFormat = function timeFormat(time) {
  time = Number(time || 0);
  var newTime, hour, minite, seconds;
  hour = parseInt(time / 3600) < 10 ? '0' + parseInt(time / 3600) : parseInt(time / 3600);
  minite = parseInt(time % 3600 / 60) < 10 ? '0' + parseInt(time % 3600 / 60) : parseInt(time % 3600 / 60);
  seconds = parseInt(time % 60);
  seconds = seconds < 10 ? '0' + seconds : seconds;
  newTime = {
    hour: hour,
    minite: minite,
    seconds: seconds
  };
  return newTime;
};

/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  var _this = this;

  var _ref = props || {},
      trailerTime = _ref.trailerTime,
      videoParams = _ref.videoParams;

  videoParams = videoParams || {}; //控制加载动画显隐

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
      videoLoading = _useState2[0],
      setVideoLoading = _useState2[1]; //控制是否展示试看模块


  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState4 = Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState3, 2),
      showTry = _useState4[0],
      setShowTry = _useState4[1]; //是否处于全屏模式


  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState6 = Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState5, 2),
      isFullScreen = _useState6[0],
      setIsFullScreen = _useState6[1]; //是否显示播放器控制器


  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      _useState8 = Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState7, 2),
      showControl = _useState8[0],
      setShowControl = _useState8[1]; //是否显示清晰度选择


  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState10 = Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState9, 2),
      showQuality = _useState10[0],
      setShowQuality = _useState10[1]; //视频总长度


  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState12 = Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState11, 2),
      duration = _useState12[0],
      setDuration = _useState12[1]; //是否正在播放


  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      _useState14 = Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState13, 2),
      playing = _useState14[0],
      setPlaying = _useState14[1]; //已播放时长


  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      _useState16 = Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState15, 2),
      timePlay = _useState16[0],
      setTimePlay = _useState16[1]; //视频总时长


  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      _useState18 = Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState17, 2),
      timeAll = _useState18[0],
      setTimeAll = _useState18[1]; //视频总时长


  var _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      _useState20 = Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState19, 2),
      timeBarWidth = _useState20[0],
      setTimeBarWidth = _useState20[1]; //当前视频清晰度名称


  var _useState21 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState22 = Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState21, 2),
      qualityName = _useState22[0],
      setQualityName = _useState22[1];

  var updateVideoParams = _pages_lesson_study_studyStore__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].updateVideoParams;
  updateVideoParams = updateVideoParams || new Function();
  /**src数据（清晰度更换）改变时触发*/

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    tryVideoContext = _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.createVideoContext('tryVideo', _this);

    var _ref2 = videoParams || {},
        src = _ref2.src,
        videoUrls = _ref2.videoUrls;

    videoUrls = videoUrls || [];
    /**设置清晰度*/

    var qualityArr = videoUrls.filter(function (temp) {
      return temp.url === src;
    });

    if (qualityArr.length > 0) {
      var tempQualityName = getQualityName(qualityArr[0].clarity);
      setQualityName(tempQualityName);
    }

    setDuration(props.videoDuration);

    if (!videoLoading) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.nextTick(function () {
        setVideoLoading(true);
      });
    }
  }, [videoParams.src]);
  /**播放触发*/

  var bindPlay = function bindPlay(e) {
    setPlaying(true);
  };
  /**暂停触发*/


  var bindPause = function bindPause(e) {
    setPlaying(false);
  };
  /**视频结束触发*/


  var bindEnded = function bindEnded(e) {
    tryVideoContext.stop();

    if (!showTry) {
      setShowTry(true);
      setPlaying(false);
      setShowQuality(false);
      setShowControl(false);
    }
  };
  /**视频重新播放触发*/


  var bindReplay = function bindReplay(e) {
    setPlaying(true);
    setShowTry(false);

    if (tryVideoContext) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.nextTick(function () {
        tryVideoContext.seek(0);
        tryVideoContext.play();
      });
    }
  };
  /**视频出现缓冲时触发*/


  var bindWaiting = function bindWaiting(e) {};
  /**播放中触发*/


  var bindtimeupdate = function bindtimeupdate(e) {
    /**
     * 记录播放进度时间
     * 比较进度时间与试看时间 比较成功 显示试看遮罩层
     * */
    var _ref3 = e || {},
        detail = _ref3.detail;

    var _ref4 = detail || {},
        currentTime = _ref4.currentTime;

    tempCurrentTime = currentTime;
    /**试看时间结束执行**/

    if (Number(currentTime || 0) > Number(trailerTime || 0) && Number(trailerTime || 0) !== 0) {
      if (!showTry) {
        setShowTry(true);
        setPlaying(false);
        setShowQuality(false);
        setShowControl(false);
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.nextTick(function () {
          if (tryVideoContext) {
            tryVideoContext.pause();
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.nextTick(function () {
              tryVideoContext.seek(Number(trailerTime || 0));
            });
          }
        });
      }
    }

    setTimeBarWidth(Math.ceil(currentTime / duration * 100));
    setTimePlay(timeFormat(currentTime));
    setTimeAll(timeFormat(duration));
  };
  /**全屏或者退出全屏触发*/


  var bindfullscreenchange = function bindfullscreenchange(e) {
    if (isFullScreen) {
      setIsFullScreen(false);
    } else {
      setIsFullScreen(true);
    }
  };
  /**退出全屏触发*/


  var bindExitFullScreen = function bindExitFullScreen(e) {
    setShowQuality(false);

    if (tryVideoContext) {
      tryVideoContext.exitFullScreen();
    }
  };
  /**点击组件触发*/


  var controlToggle = function controlToggle(e) {
    if (showTry) return;
    controlShowEvent.map(function (item) {
      clearTimeout(item);
    });
    controlShowEvent = [];
    setShowControl(true);
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.nextTick(function () {
      var temp = setTimeout(function () {
        setShowControl(false);
        setShowQuality(false);
      }, 4000);
      controlShowEvent.push(temp);
    });
  };
  /**视频元数据加载完成时触发*/


  var bindLoadedmetadata = function bindLoadedmetadata(e) {
    if (!onChangeQuality && Number(videoParams.progress || 0) === 1) {
      tryVideoContext.play();
      setVideoLoading(false);
      return;
    }

    setTimeout(function () {
      if (!tryVideoContext) return;
      setVideoLoading(false);
    }, 3000);
  };
  /**视频播放进度改变时触发*/


  var bindProgressChange = function bindProgressChange(e) {
    if (videoLoading) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.nextTick(function () {
        setTimeout(function () {
          setVideoLoading(false);
        }, 4000);
      });
    }
  };
  /**视频出错触发*/


  var bindVideoErrorCallback = function bindVideoErrorCallback(e) {
    var _ref5 = e || {},
        detail = _ref5.detail;

    var errMsg = detail.errMsg;
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.showToast({
      title: errMsg.toString(),
      icon: 'none',
      duration: 4000
    });
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.nextTick(function () {
      setVideoLoading(false);
    });
  };
  /**进度条拖动触发*/


  var sliderChanging = function sliderChanging(e) {};
  /**进度条拖动结束触发*/


  var sliderChangeEnd = function sliderChangeEnd(e) {};
  /**播放和暂停*/


  var togglePlay = function togglePlay(e) {
    e.stopPropagation();
    controlToggle();

    if (playing) {
      setPlaying(false);
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.nextTick(function () {
        tryVideoContext.pause();
        setShowQuality(false);
      });
    } else {
      setPlaying(true);
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.nextTick(function () {
        tryVideoContext.play();
        setShowQuality(false);
      });
    }
  };
  /**切换视频清晰度*/


  var toggleQuality = function toggleQuality(e) {
    if (showQuality) {
      setShowQuality(false);
    } else {
      setShowQuality(true);
    }
  };
  /**切换全屏*/


  var toggleFull = function toggleFull(e) {
    if (!tryVideoContext) {
      tryVideoContext = _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.createVideoContext('tryVideo', _this);
    }

    if (isFullScreen) {
      if (tryVideoContext) {
        tryVideoContext.exitFullScreen();
      }
    } else {
      if (tryVideoContext) {
        tryVideoContext.requestFullScreen({
          direction: 90
        });
      }
    }
  };
  /**获取视频清晰度名称*/


  var getQualityName = function getQualityName(clarity) {
    var quality_name = '';

    switch (parseInt(clarity)) {
      case 1:
        quality_name = '流畅';
        break;

      case 2:
        quality_name = '标清';
        break;

      case 3:
        quality_name = '高清';
        break;

      case 4:
        quality_name = '超清';
        break;

      case 5:
        quality_name = '2k';
        break;

      case 6:
        quality_name = '4k';
        break;

      case 7:
        quality_name = '流畅';
        break;

      case 8:
        quality_name = '标清';
        break;

      case 9:
        quality_name = '高清';
        break;

      case 10:
        quality_name = '超清';
        break;

      case 11:
        quality_name = '2k';
        break;

      case 12:
        quality_name = '4k';
        break;

      case 13:
        quality_name = '原画';
        break;
    }

    return quality_name;
  };
  /**设置新的视频码率，与当前视频码率对比，不一样即更换视频地址和取当前播放进度，更新store数据*/


  var setQuality = function setQuality(item) {
    if (videoLoading) return;
    controlToggle();
    item = item || {};

    var _ref6 = videoParams || {},
        src = _ref6.src,
        canTouch = _ref6.canTouch,
        videoUrls = _ref6.videoUrls,
        progress = _ref6.progress,
        isTask = _ref6.isTask;

    if (item.url !== src) {
      var tempVideoParams = {
        vid: item.video_id,
        src: item.url,
        canTouch: canTouch,
        videoUrls: videoUrls,
        startFrom: tempCurrentTime,
        progress: progress,
        isTask: isTask
      };
      onChangeQuality = true;
      updateVideoParams(tempVideoParams);
      setShowQuality(false);
    } else {
      setShowQuality(false);
    }
  };

  var _ref7 = videoParams || {},
      src = _ref7.src,
      videoUrls = _ref7.videoUrls,
      canTouch = _ref7.canTouch,
      isTask = _ref7.isTask;

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Video */ "r"], {
    id: "tryVideo",
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_4___default.a.video,
    src: src,
    enableProgressGesture: false,
    enableProgressPesture: false,
    showFullscreenBtn: false,
    showPlayBtn: false,
    showCenterPlayBtn: false,
    showProgress: false,
    controls: false,
    autoplay: true,
    onPlay: bindPlay,
    onPause: bindPause,
    onEnded: bindEnded,
    onWaiting: bindWaiting,
    onTimeUpdate: bindtimeupdate,
    onFullscreenChange: bindfullscreenchange,
    onLoadedmetadata: bindLoadedmetadata,
    onProgress: bindProgressChange,
    onError: bindVideoErrorCallback,
    onClick: controlToggle,
    children: [videoLoading ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "s"], {
      className: _index_module_less__WEBPACK_IMPORTED_MODULE_4___default.a.video_mask,
      onClick: function onClick(e) {
        return e.stopPropagation();
      },
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "s"], {
        className: _index_module_less__WEBPACK_IMPORTED_MODULE_4___default.a.video_loading,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "s"], {
          className: _index_module_less__WEBPACK_IMPORTED_MODULE_4___default.a.circle_line,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "q"], {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "q"], {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "q"], {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "q"], {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "q"], {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "q"], {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "q"], {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "q"], {})]
        })
      })
    }) : null, /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])("view", {
      className: [_index_module_less__WEBPACK_IMPORTED_MODULE_4___default.a.quality_content, showQuality ? '' : _index_module_less__WEBPACK_IMPORTED_MODULE_4___default.a.hide].join(' '),
      children: videoUrls.map(function (item) {
        var _ref8 = item || {},
            id = _ref8.id,
            clarity = _ref8.clarity;

        clarity = Number(clarity || 0);
        return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "s"], {
          className: _index_module_less__WEBPACK_IMPORTED_MODULE_4___default.a.quality_content_item,
          onClick: function onClick() {
            setQuality(item);
          },
          children: getQualityName(clarity)
        }, "video_quality_".concat(id));
      })
    }), showControl ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "s"], {
      className: _index_module_less__WEBPACK_IMPORTED_MODULE_4___default.a.video_controls,
      style: {
        bottom: isFullScreen ? '30rpx' : '0'
      },
      children: [!isFullScreen ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "s"], {
        className: playing ? _index_module_less__WEBPACK_IMPORTED_MODULE_4___default.a.video_btn_play : _index_module_less__WEBPACK_IMPORTED_MODULE_4___default.a.video_btn_pause,
        onClick: togglePlay
      }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "s"], {
        className: playing ? _index_module_less__WEBPACK_IMPORTED_MODULE_4___default.a.video_btn_play : _index_module_less__WEBPACK_IMPORTED_MODULE_4___default.a.video_btn_pause,
        style: {
          paddingLeft: '100rpx'
        },
        onClick: togglePlay
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "s"], {
        className: isFullScreen ? _index_module_less__WEBPACK_IMPORTED_MODULE_4___default.a.video_time_full : _index_module_less__WEBPACK_IMPORTED_MODULE_4___default.a.video_time,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "s"], {
          className: _index_module_less__WEBPACK_IMPORTED_MODULE_4___default.a.video_time_item,
          children: timePlay.hour || '00'
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "s"], {
          className: _index_module_less__WEBPACK_IMPORTED_MODULE_4___default.a.video_time_point,
          children: ":"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "s"], {
          className: _index_module_less__WEBPACK_IMPORTED_MODULE_4___default.a.video_time_item,
          children: [" ", timePlay.minite || '00']
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "s"], {
          className: _index_module_less__WEBPACK_IMPORTED_MODULE_4___default.a.video_time_point,
          children: ":"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "s"], {
          className: _index_module_less__WEBPACK_IMPORTED_MODULE_4___default.a.video_time_item,
          children: timePlay.seconds || '00'
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Slider */ "n"], {
        className: _index_module_less__WEBPACK_IMPORTED_MODULE_4___default.a.video_timebar_bg,
        value: timeBarWidth,
        color: "#e9e9e9",
        selectedColor: "#1aad19",
        showValue: false,
        blockSize: "12",
        leftIcon: "cancel",
        rightIcon: "success_no_circle",
        onChanging: sliderChanging,
        onChange: sliderChangeEnd,
        disabled: !canTouch
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "s"], {
        className: isFullScreen ? _index_module_less__WEBPACK_IMPORTED_MODULE_4___default.a.video_time_full : _index_module_less__WEBPACK_IMPORTED_MODULE_4___default.a.video_time,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "s"], {
          className: _index_module_less__WEBPACK_IMPORTED_MODULE_4___default.a.video_time_item,
          children: timeAll.hour || '00'
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "s"], {
          className: _index_module_less__WEBPACK_IMPORTED_MODULE_4___default.a.video_time_point,
          children: ":"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "s"], {
          className: _index_module_less__WEBPACK_IMPORTED_MODULE_4___default.a.video_time_item,
          children: [" ", timeAll.minite || '00']
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "s"], {
          className: _index_module_less__WEBPACK_IMPORTED_MODULE_4___default.a.video_time_point,
          children: ":"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "s"], {
          className: _index_module_less__WEBPACK_IMPORTED_MODULE_4___default.a.video_time_item,
          children: timeAll.seconds || '00'
        })]
      }), isFullScreen ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "s"], {
        className: _index_module_less__WEBPACK_IMPORTED_MODULE_4___default.a.video_btn_quality,
        onClick: toggleQuality,
        children: qualityName
      }) : null, !isFullScreen ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "s"], {
        className: isFullScreen ? _index_module_less__WEBPACK_IMPORTED_MODULE_4___default.a.video_btn_full_exit : _index_module_less__WEBPACK_IMPORTED_MODULE_4___default.a.video_btn_full,
        onClick: toggleFull
      }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "s"], {
        className: isFullScreen ? _index_module_less__WEBPACK_IMPORTED_MODULE_4___default.a.video_btn_full_exit : _index_module_less__WEBPACK_IMPORTED_MODULE_4___default.a.video_btn_full,
        style: "padding-right:100rpx",
        onClick: toggleFull
      })]
    }) : null, showTry ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "s"], {
      className: _index_module_less__WEBPACK_IMPORTED_MODULE_4___default.a.video_cover,
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "s"], {
        className: _index_module_less__WEBPACK_IMPORTED_MODULE_4___default.a.cover_txt,
        children: "\u8BD5\u770B\u5DF2\u7ED3\u675F"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "s"], {
        className: _index_module_less__WEBPACK_IMPORTED_MODULE_4___default.a.cover_btns,
        children: [isFullScreen ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "s"], {
          className: _index_module_less__WEBPACK_IMPORTED_MODULE_4___default.a.cover_btn_1,
          onClick: bindExitFullScreen,
          children: "\u9000\u51FA\u5168\u5C4F"
        }) : null, /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "s"], {
          className: _index_module_less__WEBPACK_IMPORTED_MODULE_4___default.a.cover_btn_2,
          onClick: bindReplay,
          children: "\u91CD\u65B0\u8BD5\u770B"
        })]
      })]
    }) : null]
  });
});

/***/ }),

/***/ "./src/components/TryVideo/index.module.less":
/*!***************************************************!*\
  !*** ./src/components/TryVideo/index.module.less ***!
  \***************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"video":"index-module__video___XSU9A","video_controls":"index-module__video_controls___3oavk","video_btn_play":"index-module__video_btn_play___3cb7D","video_btn_pause":"index-module__video_btn_pause___37LrJ","video_time":"index-module__video_time___3h6KJ","video_time_full":"index-module__video_time_full___3NRYq","quality_content":"index-module__quality_content___2gCBb","hide":"index-module__hide___M1EBp","quality_content_item":"index-module__quality_content_item___1pYn7","video_mask":"index-module__video_mask___3n37u","video_loading":"index-module__video_loading___NUPc_","circle_line":"index-module__circle_line___1kkkW","circle":"index-module__circle___3qjS5","slider_time":"index-module__slider_time___2giVN","video_time_item":"index-module__video_time_item___SeO-a","video_time_point":"index-module__video_time_point____uULL","video_timebar_bg":"index-module__video_timebar_bg___3oqEO","video_btn_quality":"index-module__video_btn_quality___2O0qm","video_btn_full":"index-module__video_btn_full___EiBSe","video_btn_full_exit":"index-module__video_btn_full_exit___2ucvo","video_cover":"index-module__video_cover___fLutB","cover_txt":"index-module__cover_txt___3ixcr","cover_btns":"index-module__cover_btns___2T9Hs","cover_btn_1":"index-module__cover_btn_1___1q6ED","cover_btn_2":"index-module__cover_btn_2___PCcMx"};

/***/ }),

/***/ "./src/pages/lesson/study/index.jsx":
/*!******************************************!*\
  !*** ./src/pages/lesson/study/index.jsx ***!
  \******************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/babel-loader/lib!./index.jsx */ "./node_modules/babel-loader/lib/index.js!./src/pages/lesson/study/index.jsx");


var config = {"navigationBarTitleText":"课程详情","enableShareAppMessage":true,"enableShareTimeline":true};
_node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].enableShareTimeline = true
_node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].enableShareAppMessage = true
var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/lesson/study/index', {root:{cn:[]}}, config || {}))



/***/ }),

/***/ "./src/pages/lesson/study/index.module.less":
/*!**************************************************!*\
  !*** ./src/pages/lesson/study/index.module.less ***!
  \**************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"page":"index-module__page___1aB7O","color":"index-module__color___1am1i"};

/***/ }),

/***/ "./src/pages/lesson/study/studyStore.js":
/*!**********************************************!*\
  !*** ./src/pages/lesson/study/studyStore.js ***!
  \**********************************************/
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








var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31;






var studyStore = (_class = function studyStore() {
  var _this = this;

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, studyStore);

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, "id", _descriptor, this);

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, "unitid", _descriptor2, this);

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, "uid", _descriptor3, this);

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, "vid", _descriptor4, this);

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, "info", _descriptor5, this);

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, "listData", _descriptor6, this);

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, "testData", _descriptor7, this);

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, "sel_test", _descriptor8, this);

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, "test_id", _descriptor9, this);

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, "allUnits", _descriptor10, this);

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, "unitDetail", _descriptor11, this);

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, "allVideo", _descriptor12, this);

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, "selItem", _descriptor13, this);

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, "videoPlayer", _descriptor14, this);

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, "coverImage", _descriptor15, this);

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, "videoData", _descriptor16, this);

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, "videoUrl", _descriptor17, this);

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, "videoUrls", _descriptor18, this);

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, "progress", _descriptor19, this);

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, "videoDuration", _descriptor20, this);

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, "trailerTime", _descriptor21, this);

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, "canTouch", _descriptor22, this);

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, "canRequest", _descriptor23, this);

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, "is_task", _descriptor24, this);

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, "startFrom", _descriptor25, this);

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, "confirm_time", _descriptor26, this);

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, "playing", _descriptor27, this);

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, "todayOver", _descriptor28, this);

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, "successTime", _descriptor29, this);

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, "show_problem", _descriptor30, this);

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, "videoParams", _descriptor31, this);

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, "updateListData", function (params) {
    var _ref = params || {},
        vid = _ref.vid,
        progress = _ref.progress,
        progressTime = _ref.progressTime;

    var tempListData = JSON.parse(JSON.stringify(_this.listData));
    tempListData.map(function (item) {
      var _ref2 = item || {},
          video = _ref2.video;

      video.map(function (temp) {
        if (Number(temp.id || 0) === Number(vid || 0)) {
          temp.progress = progress;
          temp.progress_time = progressTime;
        }
      });
    });
    _this.listData = tempListData;
  });

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, "updateShowProblem", function (bool) {
    _this.show_problem = bool;
  });

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, "updateVideoParams", function (params) {
    var _ref3 = params || {},
        vid = _ref3.vid,
        src = _ref3.src,
        canTouch = _ref3.canTouch,
        videoUrls = _ref3.videoUrls,
        progress = _ref3.progress,
        startFrom = _ref3.startFrom,
        isTask = _ref3.isTask,
        successTime = _ref3.successTime;

    _this.vid = vid;
    _this.videoUrl = src;
    _this.canTouch = canTouch;
    _this.videoUrls = videoUrls;
    _this.progress = progress;
    _this.startFrom = startFrom;
    _this.is_task = isTask;
    _this.successTime = successTime;
    var tempVideoParams = {
      vid: vid,
      src: src,
      canTouch: canTouch,
      videoUrls: videoUrls,
      progress: progress,
      startFrom: startFrom,
      isTask: isTask,
      successTime: successTime,
      getVideoPlayer: _this.getVideoPlayer,
      onEndHandler: _this.getNextVideoHasUnLearn
    };
    _this.videoParams = tempVideoParams;
  });

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, "getVideoPlayer", function (player) {
    _this.videoPlayer = player;
  });

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, "updateVideoParamsKey", function (key, value) {
    if (key === 'isTask') {
      _this.is_task = value;
    } else if (key === 'src') {
      _this.videoUrl = value;
    } else {
      _this[key] = value;
    }

    var tempVideoParams = {
      vid: _this.vid,
      src: _this.videoUrl,
      canTouch: _this.canTouch,
      videoUrls: _this.videoUrls,
      progress: _this.progress,
      startFrom: _this.startFrom,
      isTask: _this.is_task,
      successTime: _this.successTime,
      getVideoPlayer: _this.getVideoPlayer,
      onEndHandler: _this.getNextVideoHasUnLearn
    };
    _this.videoParams = tempVideoParams;
  });

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, "cleanAll", function () {
    // 课程详情
    _this.info = {};
    _this.listData = [];
    _this.selItem = 1; //视频的数据

    _this.coverImage = ''; //视频的数据

    _this.videoData = {}; //播放视频的地址

    _this.videoUrl = ''; //播放视频的所有清晰度

    _this.videoUrls = []; //允许试看的时间

    _this.trailerTime = 0; //是否允许快进

    _this.canTouch = false; //是否允许请求

    _this.canRequest = true; //是否在任务

    _this.is_task = 0; //上次观看时长

    _this.startFrom = 0; //确认在线间隔

    _this.confirm_time = 0;
    _this.videoParams = {
      vid: _this.vid,
      src: _this.videoUrl,
      canTouch: _this.canTouch,
      videoUrls: _this.videoUrls,
      progress: _this.progress,
      startFrom: _this.startFrom,
      isTask: _this.is_task,
      successTime: _this.successTime,
      getVideoPlayer: _this.getVideoPlayer,
      onEndHandler: _this.getNextVideoHasUnLearn
    };
    _this.testData = {};
    _this.sel_test = true;
    _this.test_id = null;
  });

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, "setVideoUrl", function (url) {
    _this.videoUrl = url;
  });

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, "setTrailerTime", function (num) {
    _this.trailerTime = num;
  });

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, "setStartFrom", function (num) {
    _this.startFrom = num;
  });

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, "setCanTouch", function (bool) {
    _this.canTouch = bool;
  });

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, "setConfirmTime", function (num) {
    _this.confirm_time = num;
  });

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, "selSee", function (type) {
    _this.selItem = type;
  });

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, "toggleFollow", function () {
    if (!_this.canRequest) return;
    _this.canRequest = false;
    var is_follow = _this.info.is_follow;
    is_follow = is_follow || false;

    if (is_follow) {
      Object(_servers_http__WEBPACK_IMPORTED_MODULE_10__[/* myDeleteData */ "b"])("".concat(_api__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].follows, "/").concat(_this.id)).then(function (_ref4) {
        var status = _ref4.status,
            data = _ref4.data;
        _this.canRequest = true;
        if (status !== 204) return;
        var temp = JSON.parse(JSON.stringify(_this.info));
        temp.is_follow = false;
        _this.info = temp;
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_9___default.a.eventCenter.trigger('toggleFollow', false);
      }).catch(function () {
        _this.canRequest = true;
      });
    } else {
      Object(_servers_http__WEBPACK_IMPORTED_MODULE_10__[/* myPostData */ "d"])(_api__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].follows, {
        follow_id: _this.id
      }).then(function (_ref5) {
        var status = _ref5.status,
            data = _ref5.data;
        _this.canRequest = true;
        if (status !== 201) return;
        var temp = JSON.parse(JSON.stringify(_this.info));
        temp.is_follow = true;
        _this.info = temp;
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_9___default.a.eventCenter.trigger('toggleFollow', true);
      }).catch(function () {
        _this.canRequest = true;
      });
    }
  });

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, "getLessonDetail", /*#__PURE__*/function () {
    var _ref6 = Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(id) {
      return _Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.id = id;
              Object(_servers_http__WEBPACK_IMPORTED_MODULE_10__[/* myGetData */ "c"])("".concat(_api__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].courses, "/").concat(id)).then(function (_ref7) {
                var status = _ref7.status,
                    data = _ref7.data;
                if (status !== 200) return;
                _this.info = data;

                var _ref8 = data || {},
                    is_task = _ref8.is_task;

                _this.is_task = Number(is_task || 0);
                var siteData = _tarojs_taro__WEBPACK_IMPORTED_MODULE_9___default.a.getStorageSync('career_fe_site') || '{}';
                siteData = JSON.parse(siteData) || {};
                var _siteData = siteData,
                    alias = _siteData.alias; // if ( alias === 'bj' ) {
                //   this.setTrailerTime(600)
                //   return
                // }
                // if ( alias === 'jx' ){
                //   this.setTrailerTime(180)
                //   return
                // }

                _this.setTrailerTime(600);
              }).catch(function (_ref9) {
                var status = _ref9.status,
                    data = _ref9.data;
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref6.apply(this, arguments);
    };
  }());

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, "getNextVideoHasUnLearn", function (vid) {// let that = this
    // let cidIndex = 0
    // this.allVideo.map((item, index) => {
    //   if (item.id === vid) {
    //     cidIndex = index
    //   }
    // })
    // let tempVideoList = this.allVideo.filter((item, index) => index < cidIndex)
    // let nextVideoList = this.allVideo.filter((item, index) => index > cidIndex)
    // let allNextUnLearnVideoList = nextVideoList.filter(item => Number(item.progress || 0) !== 1)
    // let nextUnLearnVideoList = nextVideoList.filter(item => Number(item.isFirstTask || 0) === 1)
    // let unLearnVideo = tempVideoList.filter(item => Number(item.isFirstTask || 0) === 1)
    // if (unLearnVideo.length > 0) {
    //   if (this.videoPlayer) {
    //     this.videoPlayer.pause()
    //   }
    //   Taro.showModal({
    //     title: '提示',
    //     content: '您前面有章节还未学完，请按顺序进行学习。',
    //     confirmColor: '#2a65de',
    //     confirmText: '按顺序学',
    //     success: function (res) {
    //       if (res.confirm) {
    //         if (unLearnVideo.length > 0) {
    //           that.getLessonVideoUrl(unLearnVideo[0].id, () => {})
    //         }
    //       } else if (res.cancel) {
    //         if (nextUnLearnVideoList.length > 0) {
    //           that.getLessonVideoUrl(nextUnLearnVideoList[0].id, () => {})
    //         } else {
    //           if (allNextUnLearnVideoList.length > 0) {
    //             that.getLessonVideoUrl(allNextUnLearnVideoList[0].id, () => {})
    //           } else {
    //             if (nextVideoList.length > 0) {
    //               that.getLessonVideoUrl(nextVideoList[0].id, () => {})
    //             }
    //           }
    //         }
    //       }
    //     },
    //   })
    // } else {
    //   if (nextUnLearnVideoList.length > 0) {
    //     this.getLessonVideoUrl(nextUnLearnVideoList[0].id, () => {})
    //   } else {
    //     if (allNextUnLearnVideoList.length > 0) {
    //       this.getLessonVideoUrl(allNextUnLearnVideoList[0].id, () => {})
    //     } else {
    //       if (nextVideoList.length > 0) {
    //         this.getLessonVideoUrl(nextVideoList[0].id, () => {})
    //       }
    //     }
    //   }
    // }
  });

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, "getLessonChapters", /*#__PURE__*/function () {
    var _ref10 = Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(id, unitid) {
      return _Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this.id = id;
              Object(_servers_http__WEBPACK_IMPORTED_MODULE_10__[/* myGetData */ "c"])("".concat(_api__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].newCourseChapters), {
                course_id: id
              }).then(function (_ref11) {
                var status = _ref11.status,
                    data = _ref11.data;

                if (Number(status || 0) > 199 && Number(status || 0) < 300) {
                  var _ref12 = data || {},
                      course = _ref12.course,
                      test = _ref12.test;

                  course = course || [];
                  test = test || {};
                  var tempAllUnit = [];
                  course.map(function (a, index) {
                    a.active = true;

                    var _ref13 = a || {},
                        sections = _ref13.sections,
                        units = _ref13.units;

                    sections = sections || [];
                    units = units || [];
                    sections.map(function (s) {
                      var _ref14 = s || {},
                          units = _ref14.units;

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
                  _this.allUnits = tempAllUnit;
                  console.log(course);
                  _this.listData = course;
                  _this.testData = test;

                  _this.getUnitDetail(unitid);
                }
              }).catch(function (_ref15) {
                var status = _ref15.status,
                    data = _ref15.data;
              });

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x2, _x3) {
      return _ref10.apply(this, arguments);
    };
  }());

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, "toggleSelTest", function () {
    _this.sel_test = !_this.sel_test;
  });

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, "goToTest", function () {
    var _ref16 = _this.testData || {},
        id = _ref16.id;

    _this.test_id = id;
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_9___default.a.showToast({
      title: '您目前只能观看试看视频',
      icon: 'none',
      duration: 3000
    });
  });

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, "getUnitDetail", function (unitId) {
    _this.unitid = unitId;
    Object(_servers_http__WEBPACK_IMPORTED_MODULE_10__[/* myGetData */ "c"])("".concat(_api__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].unitDetail, "/").concat(unitId)).then(function (_ref17) {
      var status = _ref17.status,
          data = _ref17.data;

      if (Number(status || 0) > 199 && Number(status || 0) < 300) {
        data = data || {};
        _this.unitDetail = data;
        var _data = data,
            type = _data.type,
            video = _data.video,
            total_time = _data.total_time;
        type = Number(type || 0);
        total_time = Number(total_time || 0);
        _this.videoDuration = total_time;
        video = video || {};
        var _video = video,
            urls = _video.urls;
        urls = urls || [];
        var videoUrl = '';

        if (urls.length > 0) {
          videoUrl = urls[0].url;
        }

        var tempVideoParams = {
          src: videoUrl,
          canTouch: false,
          videoUrls: urls,
          progress: 0,
          startFrom: 0,
          isTask: 0,
          successTime: 0
        };
        _this.videoParams = tempVideoParams;
      }
    }).catch(function (_ref18) {
      var status = _ref18.status,
          data = _ref18.data;
    });
  });

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, "setUid", function (id) {
    _this.uid = id;
  });

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

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, "updateTodayOver", function () {
    _this.todayOver = true;
  });

  Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, "watchMovie", function (e) {
    e.stopPropagation();
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_9___default.a.showToast({
      title: '您目前只能观看试看视频',
      icon: 'none',
      duration: 3000
    });
  });
}, (_descriptor = Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_class.prototype, "id", [mobx__WEBPACK_IMPORTED_MODULE_8__[/* observable */ "m"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor2 = Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_class.prototype, "unitid", [mobx__WEBPACK_IMPORTED_MODULE_8__[/* observable */ "m"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor3 = Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_class.prototype, "uid", [mobx__WEBPACK_IMPORTED_MODULE_8__[/* observable */ "m"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor4 = Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_class.prototype, "vid", [mobx__WEBPACK_IMPORTED_MODULE_8__[/* observable */ "m"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor5 = Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_class.prototype, "info", [mobx__WEBPACK_IMPORTED_MODULE_8__[/* observable */ "m"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return {};
  }
}), _descriptor6 = Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_class.prototype, "listData", [mobx__WEBPACK_IMPORTED_MODULE_8__[/* observable */ "m"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor7 = Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_class.prototype, "testData", [mobx__WEBPACK_IMPORTED_MODULE_8__[/* observable */ "m"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return {};
  }
}), _descriptor8 = Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_class.prototype, "sel_test", [mobx__WEBPACK_IMPORTED_MODULE_8__[/* observable */ "m"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor9 = Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_class.prototype, "test_id", [mobx__WEBPACK_IMPORTED_MODULE_8__[/* observable */ "m"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor10 = Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_class.prototype, "allUnits", [mobx__WEBPACK_IMPORTED_MODULE_8__[/* observable */ "m"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor11 = Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_class.prototype, "unitDetail", [mobx__WEBPACK_IMPORTED_MODULE_8__[/* observable */ "m"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return {};
  }
}), _descriptor12 = Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_class.prototype, "allVideo", [mobx__WEBPACK_IMPORTED_MODULE_8__[/* observable */ "m"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor13 = Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_class.prototype, "selItem", [mobx__WEBPACK_IMPORTED_MODULE_8__[/* observable */ "m"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 1;
  }
}), _descriptor14 = Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_class.prototype, "videoPlayer", [mobx__WEBPACK_IMPORTED_MODULE_8__[/* observable */ "m"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor15 = Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_class.prototype, "coverImage", [mobx__WEBPACK_IMPORTED_MODULE_8__[/* observable */ "m"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor16 = Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_class.prototype, "videoData", [mobx__WEBPACK_IMPORTED_MODULE_8__[/* observable */ "m"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return {};
  }
}), _descriptor17 = Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_class.prototype, "videoUrl", [mobx__WEBPACK_IMPORTED_MODULE_8__[/* observable */ "m"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor18 = Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_class.prototype, "videoUrls", [mobx__WEBPACK_IMPORTED_MODULE_8__[/* observable */ "m"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor19 = Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_class.prototype, "progress", [mobx__WEBPACK_IMPORTED_MODULE_8__[/* observable */ "m"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor20 = Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_class.prototype, "videoDuration", [mobx__WEBPACK_IMPORTED_MODULE_8__[/* observable */ "m"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor21 = Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_class.prototype, "trailerTime", [mobx__WEBPACK_IMPORTED_MODULE_8__[/* observable */ "m"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor22 = Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_class.prototype, "canTouch", [mobx__WEBPACK_IMPORTED_MODULE_8__[/* observable */ "m"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor23 = Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_class.prototype, "canRequest", [mobx__WEBPACK_IMPORTED_MODULE_8__[/* observable */ "m"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor24 = Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_class.prototype, "is_task", [mobx__WEBPACK_IMPORTED_MODULE_8__[/* observable */ "m"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor25 = Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_class.prototype, "startFrom", [mobx__WEBPACK_IMPORTED_MODULE_8__[/* observable */ "m"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor26 = Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_class.prototype, "confirm_time", [mobx__WEBPACK_IMPORTED_MODULE_8__[/* observable */ "m"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor27 = Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_class.prototype, "playing", [mobx__WEBPACK_IMPORTED_MODULE_8__[/* observable */ "m"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor28 = Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_class.prototype, "todayOver", [mobx__WEBPACK_IMPORTED_MODULE_8__[/* observable */ "m"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor29 = Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_class.prototype, "successTime", [mobx__WEBPACK_IMPORTED_MODULE_8__[/* observable */ "m"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor30 = Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_class.prototype, "show_problem", [mobx__WEBPACK_IMPORTED_MODULE_8__[/* observable */ "m"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor31 = Object(_Users_ding_Desktop_wotu_space_career_fe_sp_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_class.prototype, "videoParams", [mobx__WEBPACK_IMPORTED_MODULE_8__[/* observable */ "m"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return {
      vid: this.vid,
      src: this.videoUrl,
      canTouch: this.canTouch,
      videoUrls: this.videoUrls,
      startFrom: this.startFrom,
      progress: this.progress,
      isTask: this.is_task,
      successTime: this.successTime,
      getVideoPlayer: this.getVideoPlayer,
      onEndHandler: this.getNextVideoHasUnLearn
    };
  }
})), _class);
/* harmony default export */ __webpack_exports__["a"] = (new studyStore());

/***/ })

},[["./src/pages/lesson/study/index.jsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map