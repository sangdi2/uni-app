"use strict";
var store_store = require("../../store/store.js");
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  computed: {
    checked() {
      return store_store.store.state.token;
    }
  }
};
if (!Array) {
  const _easycom_my_login2 = common_vendor.resolveComponent("my-login");
  const _easycom_my_userinfo2 = common_vendor.resolveComponent("my-userinfo");
  (_easycom_my_login2 + _easycom_my_userinfo2)();
}
const _easycom_my_login = () => "../../components/my-login/my-login.js";
const _easycom_my_userinfo = () => "../../components/my-userinfo/my-userinfo.js";
if (!Math) {
  (_easycom_my_login + _easycom_my_userinfo)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: !$options.checked
  }, !$options.checked ? {} : {});
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/sangdi/Desktop/vs\u7EC3\u4E60/uni-app\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F/uni_shop/pages/my/my.vue"]]);
wx.createPage(MiniProgramPage);
