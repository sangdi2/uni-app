"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      queryobj: {
        query: "",
        cid: 0,
        pagenum: 1,
        pagesize: 20
      },
      goodslist: [],
      total: 0,
      isloading: false
    };
  },
  onLoad(options) {
    console.log(options);
    this.queryobj.query = options.query || "";
    this.queryobj.cid = options.cid || "";
    this.getgoodslist();
  },
  methods: {
    async getgoodslist() {
      this.isloading = true;
      const { data: res } = await common_vendor.$http.get("https://api-ugo-web.itheima.net/api/public/v1/goods/search", this.queryobj);
      this.isloading = false;
      if (res.meta.status !== 200) {
        return common_vendor.index$1.$showMeg();
      }
      this.total = res.message.total;
      this.goodslist = [...this.goodslist, ...res.message.goods];
      console.log(res);
    },
    gotoDetail(item) {
      common_vendor.index$1.navigateTo({
        url: "/subpkg/goods_detail/goods_detail?goods_id=" + item.goods_id
      });
    },
    onReachBottom() {
      console.log("fvvvvvvvvv");
      if (this.queryobj.pagenum * this.queryobj.pagesize >= this.total)
        return common_vendor.index$1.$showMeg("\u6570\u636E\u52A0\u8F7D\u5B8C\u6BD5");
      if (this.isloading) {
        return;
      }
      this.queryobj.pagenum++;
      this.getgoodslist();
    }
  }
};
if (!Array) {
  const _easycom_my_goods2 = common_vendor.resolveComponent("my-goods");
  _easycom_my_goods2();
}
const _easycom_my_goods = () => "../../components/my-goods/my-goods.js";
if (!Math) {
  _easycom_my_goods();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.goodslist, (item, k0, i0) => {
      return {
        a: "d15fc7fa-0-" + i0,
        b: common_vendor.p({
          goods: item
        }),
        c: item.goods_id,
        d: common_vendor.o(($event) => $options.gotoDetail(item), item.goods_id)
      };
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/sangdi/Desktop/vs\u7EC3\u4E60/uni-app\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F/uni_shop/subpkg/goods_list/goods_list.vue"]]);
wx.createPage(MiniProgramPage);
