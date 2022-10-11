"use strict";
var common_vendor = require("../../common/vendor.js");
var store_store = require("../../store/store.js");
const _sfc_main = {
  name: "my-userinfo",
  data() {
    return {};
  },
  computed: {
    userin() {
      return store_store.store.state.userinfo;
    }
  },
  methods: {
    async gooutlogin() {
      const res = await common_vendor.index$1.showModal({
        title: "\u63D0\u793A",
        content: "\u786E\u8BA4\u9000\u51FA\u767B\u5F55\u5417\uFF1F"
      }).catch((err) => err);
      console.log(res);
      if (res && res.confirm) {
        store_store.store.commit("updateAddress", {});
        store_store.store.commit("updateUserinfo", {});
        store_store.store.commit("updateToken", "");
      }
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $options.userin.avatarUrl,
    b: common_vendor.t($options.userin.nickName),
    c: common_vendor.p({
      type: "forward"
    }),
    d: common_vendor.p({
      type: "forward"
    }),
    e: common_vendor.p({
      type: "forward"
    }),
    f: common_vendor.o((...args) => $options.gooutlogin && $options.gooutlogin(...args))
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/sangdi/Desktop/vs\u7EC3\u4E60/uni-app\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F/uni_shop/components/my-userinfo/my-userinfo.vue"]]);
wx.createComponent(Component);
