"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      swiperList: [],
      navList: [],
      floorList: []
    };
  },
  onLoad() {
    this.getSwiperList();
    this.getNavList();
    this.getFloorList();
  },
  methods: {
    async getSwiperList() {
      const { data: res } = await common_vendor.$http.get("https://api-ugo-web.itheima.net/api/public/v1/home/swiperdata");
      console.log(res);
      if (res.meta.status != 200) {
        return common_vendor.index.$showMeg();
      }
      this.swiperList = res.message;
    },
    async getNavList() {
      const { data: res } = await common_vendor.$http.get("https://api-ugo-web.itheima.net/api/public/v1/home/catitems");
      console.log(res);
      if (res.meta.status != 200) {
        return common_vendor.index.$showMeg();
      }
      this.navList = res.message;
    },
    tiaoZhuanCate(item) {
      if (item.name == "\u5206\u7C7B") {
        common_vendor.index.switchTab({
          url: "/pages/cate/cate"
        });
      }
    },
    async getFloorList() {
      const { data: res } = await common_vendor.$http.get("https://api-ugo-web.itheima.net/api/public/v1/home/floordata");
      console.log(res);
      if (res.meta.status != 200) {
        return common_vendor.index.$showMeg();
      }
      res.message.forEach((floor) => {
        floor.product_list.forEach((floor2) => {
          floor2.url = "/subpkg/goods_list/goods_list?" + floor2.navigator_url.split("?")[1];
        });
      });
      this.floorList = res.message;
    },
    goToSearch() {
      common_vendor.index.navigateTo({
        url: "/subpkg/search-detail/search-detail"
      });
    }
  }
};
if (!Array) {
  const _easycom_search2 = common_vendor.resolveComponent("search");
  _easycom_search2();
}
const _easycom_search = () => "../../components/search/search.js";
if (!Math) {
  _easycom_search();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.goToSearch),
    b: common_vendor.f($data.swiperList, (item, i, i0) => {
      return {
        a: item.image_src,
        b: "/subpkg/goods_detail/goods_detail?goods_id=" + item.goods_id,
        c: i
      };
    }),
    c: common_vendor.f($data.navList, (item, i, i0) => {
      return {
        a: item.image_src,
        b: i,
        c: common_vendor.o(($event) => $options.tiaoZhuanCate(item))
      };
    }),
    d: common_vendor.f($data.floorList, (item, i, i0) => {
      return {
        a: item.floor_title.image_src,
        b: item.product_list[0].image_src,
        c: item.product_list[0].image_width + "rpx",
        d: item.product_list[0].url,
        e: common_vendor.f(item.product_list, (item2, i2, i1) => {
          return common_vendor.e({
            a: i2 !== 0
          }, i2 !== 0 ? {
            b: item2.image_src,
            c: item2.image_width + "rpx"
          } : {}, {
            d: i2,
            e: item2.url
          });
        }),
        f: i
      };
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/sangdi/Desktop/vs\u7EC3\u4E60/uni-app\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F/uni_shop/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
