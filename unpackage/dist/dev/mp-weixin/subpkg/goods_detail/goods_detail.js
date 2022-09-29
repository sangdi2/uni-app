"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      detail_info: {},
      indicatorDots: true,
      autoplay: true,
      interval: 2e3,
      duration: 500,
      options: [{
        icon: "shop",
        text: "\u5E97\u94FA",
        infoBackgroundColor: "#007aff",
        infoColor: "red"
      }, {
        icon: "cart",
        text: "\u8D2D\u7269\u8F66"
      }],
      buttonGroup: [
        {
          text: "\u52A0\u5165\u8D2D\u7269\u8F66",
          backgroundColor: "#ff0000",
          color: "#fff"
        },
        {
          text: "\u7ACB\u5373\u8D2D\u4E70",
          backgroundColor: "#ffa200",
          color: "#fff"
        }
      ]
    };
  },
  onLoad(options) {
    const goods_id = options.goods_id;
    this.getgoodsdetails(goods_id);
  },
  methods: {
    async getgoodsdetails(goods_id) {
      const { data: res } = await common_vendor.$http.get("https://api-ugo-web.itheima.net/api/public/v1/goods/detail", { goods_id });
      console.log(res);
      if (res.meta.status !== 200) {
        return common_vendor.index.$showMeg();
      }
      this.detail_info = res.message;
    },
    preview(i) {
      common_vendor.index.previewImage({
        current: i,
        urls: this.detail_info.pics.map((x) => x.pics_big)
      });
    },
    onClick(e) {
      console.log(e);
      if (e.content.text == "\u8D2D\u7269\u8F66") {
        common_vendor.index.switchTab({
          url: "/pages/cart/cart"
        });
      }
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_goods_nav2 = common_vendor.resolveComponent("uni-goods-nav");
  (_easycom_uni_icons2 + _easycom_uni_goods_nav2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_goods_nav = () => "../../uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_goods_nav)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.detail_info.pics, (item, i, i0) => {
      return {
        a: item.pics_big,
        b: common_vendor.o(($event) => $options.preview(i)),
        c: i
      };
    }),
    b: $data.indicatorDots,
    c: $data.autoplay,
    d: $data.interval,
    e: $data.duration,
    f: common_vendor.t($data.detail_info.goods_price),
    g: common_vendor.t($data.detail_info.goods_name),
    h: common_vendor.p({
      type: "star",
      size: "15",
      color: "gray"
    }),
    i: common_vendor.o($options.onClick),
    j: common_vendor.o(_ctx.buttonClick),
    k: common_vendor.p({
      fill: true,
      options: $data.options,
      buttonGroup: $data.buttonGroup
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/sangdi/Desktop/vs\u7EC3\u4E60/uni-app\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F/uni_shop/subpkg/goods_detail/goods_detail.vue"]]);
wx.createPage(MiniProgramPage);
