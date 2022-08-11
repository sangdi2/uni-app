"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      windowHeight: 0,
      cate1List: [],
      active: 0,
      cate2List: [],
      scrollTop: 0
    };
  },
  onLoad() {
    const wh = common_vendor.index.getSystemInfoSync();
    console.log(wh);
    this.windowHeight = wh.windowHeight;
    this.getcateList();
  },
  methods: {
    async getcateList() {
      const { data: res } = await common_vendor.$http.get("https://api-ugo-web.itheima.net/api/public/v1/categories");
      console.log(res);
      if (res.meta.status != 200) {
        return common_vendor.index.$showMeg();
      }
      this.cate1List = res.message;
      this.cate2List = res.message[0].children;
    },
    cateChange(i) {
      this.active = i;
      this.cate2List = this.cate1List[i].children;
      this.scrollTop = this.scrollTop === 0 ? 1 : 0;
    },
    gotoGoodsList(item2) {
      common_vendor.index.navigateTo({
        url: "/subpkg/goods_list/goods_list?cid=" + item2.cat_id
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.cate1List, (item, i, i0) => {
      return {
        a: common_vendor.t(item.cat_name),
        b: common_vendor.n($data.active == i ? "active" : ""),
        c: i,
        d: common_vendor.o(($event) => $options.cateChange(i))
      };
    }),
    b: $data.windowHeight + "px",
    c: common_vendor.f($data.cate2List, (item1, i1, i0) => {
      return {
        a: common_vendor.t(item1.cat_name),
        b: common_vendor.f(item1.children, (item2, i2, i12) => {
          return {
            a: item2.cat_icon,
            b: common_vendor.t(item2.cat_name),
            c: i2,
            d: common_vendor.o(($event) => $options.gotoGoodsList(item2))
          };
        })
      };
    }),
    d: _ctx.i2,
    e: $data.windowHeight + "px",
    f: $data.scrollTop
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/sangdi/Desktop/vs\u7EC3\u4E60/uni-app\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F/uni_shop/pages/cate/cate.vue"]]);
wx.createPage(MiniProgramPage);
