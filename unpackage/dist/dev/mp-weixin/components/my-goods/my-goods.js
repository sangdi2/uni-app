"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "my-goods",
  data() {
    return {};
  },
  filters: {
    tofixe(num) {
      return Number(num).toFixed(2);
    }
  },
  props: {
    goods: {
      type: Object
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $props.goods.goods_small_logo,
    b: common_vendor.t($props.goods.goods_name),
    c: common_vendor.t($props.goods.goods_price.toFixed(2))
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/sangdi/Desktop/vs\u7EC3\u4E60/uni-app\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F/uni_shop/components/my-goods/my-goods.vue"]]);
wx.createComponent(Component);
