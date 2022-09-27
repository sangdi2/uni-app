"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "search",
  data() {
    return {};
  },
  methods: {
    searchBoxHandler() {
      this.$emit("myclick");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.searchBoxHandler && $options.searchBoxHandler(...args))
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/sangdi/Desktop/vs\u7EC3\u4E60/uni-app\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F/uni_shop/components/search/search.vue"]]);
wx.createComponent(Component);
