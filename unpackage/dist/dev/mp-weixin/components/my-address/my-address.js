"use strict";
var common_vendor = require("../../common/vendor.js");
var store_store = require("../../store/store.js");
const _sfc_main = {
  name: "my-address",
  data() {
    return {
      address: {}
    };
  },
  created() {
    this.address = store_store.store.state.address;
  },
  onShow() {
    this.address = store_store.store.state.address;
  },
  methods: {
    async chooseAddress() {
      const res = await common_vendor.index$1.chooseAddress().catch((err) => err);
      console.log(res);
      if (res.errMsg === "chooseAddress:ok") {
        store_store.store.commit("updateAddress", res);
        this.address = store_store.store.state.address;
      }
    }
  },
  computed: {
    addre() {
      if (this.address.provinceName === "")
        return "";
      return this.address.provinceName + this.address.cityName + this.address.countyName + this.address.detailInfo;
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
  return common_vendor.e({
    a: JSON.stringify($data.address) === "{}"
  }, JSON.stringify($data.address) === "{}" ? {
    b: common_vendor.o((...args) => $options.chooseAddress && $options.chooseAddress(...args))
  } : {
    c: common_vendor.t($data.address.userName),
    d: common_vendor.t($data.address.telNumber),
    e: common_vendor.p({
      type: "forward"
    }),
    f: common_vendor.t($options.addre),
    g: common_vendor.o((...args) => $options.chooseAddress && $options.chooseAddress(...args))
  });
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/sangdi/Desktop/vs\u7EC3\u4E60/uni-app\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F/uni_shop/components/my-address/my-address.vue"]]);
wx.createComponent(Component);
