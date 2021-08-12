import ddRequest from "../../server/http/index"
import api from "./api"

const App = getApp()

Page({
  qureyData: {},
  data: {
    showSkt: true,
    sCircleList: [],
    sRectList: [],
    bannerList: [],
    cateList: [undefined, undefined, undefined, undefined, undefined, undefined],
    recommendList: [],
    selectedData: [],
    isLoadImgError: false,
    imgFailUrl: App.data.defaultLogo,
    courseCategoryData: [],
    navDatalist: [
      {
        id: "course",
        text: "全部课程",
        iconUrl: "/resource/icon/icon_course_list.svg",
        class: "nav_func_course",
        url: "/pages/lesson/list/index",
      },
      {
        id: "cert",
        text: "我的证书",
        iconUrl: "/resource/icon/icon_my_cert.svg",
        class: "nav_func_cert",
        url: "/pages/mine/certificate/certificate",
      },
    ],
  },
  onLoad(query) {
    // 页面加载
    dd.setNavigationBar({
      title: "新职业在线学习平台",
    })

    let sCircleList = []
    let sRectList = []
    let that = this
    dd.createSelectorQuery()
      .selectAll(".skeleton_c")
      .boundingClientRect()
      .exec(ret => {
        if (ret.length > 0) {
          ret = ret[0]
          sCircleList = ret
          dd.createSelectorQuery()
            .selectAll(".skeleton_r")
            .boundingClientRect()
            .exec(res => {
              if (res.length > 0) {
                res = res[0]
                sRectList = res
                that.setData({
                  sCircleList,
                  sRectList,
                })
              }
            })
        }
      })
  },
  onReady() {
    // 页面加载完成
    this.getHomeData()
    // this.getBannerList()
    // this.getCourseCategories()
    // this.randomRecommend()
    setTimeout(() => {
      this.setData({ showSkt: false })
    }, 1000)
  },
  onShow() {
    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: "首页",
      desc: "首页",
      path: `pages/home/index`,
    }
  },
  toSearch() {
    dd.navigateTo({
      url: "/pages/homeSearch/homeSearch",
    })
  },
  onImageError(e) {
    console.log(e)
  },

  // 获取首页分类数据
  getHomeData() {
    ddRequest({
      url: api.home,
      okFun: e => {
        const { data } = e || {}
        const { banner, selected, courseCategory } = data || {}
        console.log(e, "---")
        this.setData({
          bannerList: banner || [],
          selectedData: selected || [],
          courseCategoryData: courseCategory || [],
        })
      },
    })
  },

  /** 获取banner*/
  // getBannerList() {
  //   ddRequest({
  //     url: api.banner,
  //     okFun: e => {
  //       this.setData({ bannerList: e.data })
  //     },
  //   })
  // },

  /**获取首页分类数据*/
  getCourseCategories() {
    ddRequest({
      url: api.courseCategories,
      method: "get",
      data: { "per-page": 5, page: 1, level: 1 },
      okFun: e => {
        let { data, status } = e || {}
        data = data || []
        if (status !== 200) return
        data = data.slice(0, 5)
        if (data.length % 2 === 0) {
          data.pop()
        }
        data.push({
          id: "all_0",
          image: "https://static.zpimg.cn/public/career_sp/icon/see_more.png",
          pid: "0",
          level: "1",
          name: "查看更多",
        })
        data.map(item => {
          item.image = item.image || App.data.defaultListImage
        })
        this.setData({ cateList: data })
      },
    })
  },
  linkToNavFunc(e) {
    let { currentTarget } = e || {}
    let { dataset } = currentTarget || {}
    let { value } = dataset || {}
    const { url } = value
    dd.navigateTo({ url })
  },
  /**跳转到分类页*/
  linkTo(e) {
    let { currentTarget } = e || {}
    let { dataset } = currentTarget || {}
    let { value } = dataset || {}
    let { id } = value || {}
    let url = "/pages/lesson/list/index"

    if (id) {
      url = `${url}?id=${id}`
    }

    dd.navigateTo({ url })
  },
  /**
   * 随机首页推荐数据
   * */
  randomRecommend() {
    ddRequest({
      url: api.courses,
      method: "get",
      data: { "per-page": 10, page: 1, level: 1 },
      okFun: e => {
        let { data, status } = e || {}
        data = data || []
        this.setData({ recommendList: data.splice(0, 10) })
      },
    })
  },
  /**跳转到课程详情页*/
  recommendLinkTo(e) {
    let { currentTarget } = e || {}
    let { dataset } = currentTarget || {}
    let { value } = dataset || {}
    let { id, name } = value
    // dd.navigateTo({ url: `/pages/mine/learn/index?cid=${id}&class_id=1` })
    dd.navigateTo({ url: `/pages/lesson/detail/index?id=${id}` })
  },
  /**修复分类图裂 */
  fixErrorNav(e) {
    console.log(e)
  },
})
