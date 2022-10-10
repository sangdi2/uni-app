"use strict";
var common_vendor = require("../../common/vendor.js");
var store_store = require("../../store/store.js");
const _sfc_main = {
  data() {
    return {
      cart: [],
      options: [{
        text: "\u5220\u9664",
        style: {
          backgroundColor: "#c00000"
        }
      }]
    };
  },
  created() {
    this.cart = JSON.parse(common_vendor.index$1.getStorageSync("cart")) || "[]";
  },
  onShow() {
    this.cart = JSON.parse(common_vendor.index$1.getStorageSync("cart")) || "[]";
  },
  methods: {
    radioChangeHandler(e) {
      store_store.store.commit("changeRadio", e);
      this.cart = JSON.parse(common_vendor.index$1.getStorageSync("cart")) || "[]";
      console.log(e);
    },
    cartquan() {
      this.cart = JSON.parse(common_vendor.index$1.getStorageSync("cart")) || "[]";
    },
    numChangeHandler(e) {
      store_store.store.commit("updateNumber", e);
      console.log(e);
    },
    deleteHandler(item) {
      store_store.store.commit("deleteById", item);
      this.cart = JSON.parse(common_vendor.index$1.getStorageSync("cart")) || "[]";
    }
  }
};
if (!Array) {
  const _easycom_my_address2 = common_vendor.resolveComponent("my-address");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_my_goods2 = common_vendor.resolveComponent("my-goods");
  const _easycom_uni_swipe_action_item2 = common_vendor.resolveComponent("uni-swipe-action-item");
  const _easycom_uni_swipe_action2 = common_vendor.resolveComponent("uni-swipe-action");
  const _easycom_my_settle2 = common_vendor.resolveComponent("my-settle");
  (_easycom_my_address2 + _easycom_uni_icons2 + _easycom_my_goods2 + _easycom_uni_swipe_action_item2 + _easycom_uni_swipe_action2 + _easycom_my_settle2)();
}
const _easycom_my_address = () => "../../components/my-address/my-address.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_my_goods = () => "../../components/my-goods/my-goods.js";
const _easycom_uni_swipe_action_item = () => "../../uni_modules/uni-swipe-action/components/uni-swipe-action-item/uni-swipe-action-item.js";
const _easycom_uni_swipe_action = () => "../../uni_modules/uni-swipe-action/components/uni-swipe-action/uni-swipe-action.js";
const _easycom_my_settle = () => "../../components/my-settle/my-settle.js";
if (!Math) {
  (_easycom_my_address + _easycom_uni_icons + _easycom_my_goods + _easycom_uni_swipe_action_item + _easycom_uni_swipe_action + _easycom_my_settle)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.cart.length !== 0
  }, $data.cart.length !== 0 ? {
    b: common_vendor.p({
      type: "shop",
      size: "15",
      color: "gray"
    }),
    c: common_vendor.f($data.cart, (item, i, i0) => {
      return {
        a: "e7185086-4-" + i0 + "," + ("e7185086-3-" + i0),
        b: common_vendor.p({
          goods: item,
          showRadio: true,
          showNum: true
        }),
        c: common_vendor.o(($event) => $options.deleteHandler(item)),
        d: "e7185086-3-" + i0 + ",e7185086-2",
        e: i
      };
    }),
    d: common_vendor.o($options.radioChangeHandler),
    e: common_vendor.o($options.numChangeHandler),
    f: common_vendor.p({
      ["right-options"]: $data.options
    }),
    g: common_vendor.o($options.cartquan)
  } : {});
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/sangdi/Desktop/vs\u7EC3\u4E60/uni-app\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F/uni_shop/pages/cart/cart.vue"]]);
wx.createPage(MiniProgramPage);
