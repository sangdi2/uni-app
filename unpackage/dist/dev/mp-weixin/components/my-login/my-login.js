"use strict";
var common_vendor = require("../../common/vendor.js");
var store_store = require("../../store/store.js");
const _sfc_main = {
  name: "my-login",
  data() {
    return {
      userinfo: {}
    };
  },
  methods: {
    userlogin() {
      common_vendor.index$1.login({
        provider: "weixin",
        success: function(loginRes) {
          console.log(loginRes);
          common_vendor.index$1.getUserInfo({
            provider: "weixin",
            success: function(infoRes) {
              console.log(infoRes);
              const query = {
                code: loginRes.code,
                encryptedData: infoRes.encryptedData,
                iv: infoRes.iv,
                rawData: infoRes.rawData,
                signature: infoRes.signature
              };
              common_vendor.$http.post("https://api-ugo-web.itheima.net/api/public/v1/users/wxlogin", query);
              store_store.store.commit("updateToken", loginRes.code);
              if (store_store.store.state.redirectinfo && store_store.store.state.redirectinfo.opentype === "switchTab") {
                common_vendor.index$1.switchTab({
                  url: store_store.store.state.redirectinfo.from,
                  complete: () => {
                    store_store.store.commit("updateredirectinfo", null);
                  }
                });
              }
            }
          });
        }
      });
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
    a: common_vendor.p({
      type: "person",
      size: "100"
    }),
    b: common_vendor.o((...args) => $options.userlogin && $options.userlogin(...args))
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/sangdi/Desktop/vs\u7EC3\u4E60/uni-app\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F/uni_shop/components/my-login/my-login.vue"]]);
wx.createComponent(Component);
