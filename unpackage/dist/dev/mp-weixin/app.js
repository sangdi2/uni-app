"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var common_vendor = require("./common/vendor.js");
var store_store = require("./store/store.js");
if (!Math) {
  "./pages/home/home.js";
  "./pages/cate/cate.js";
  "./pages/cart/cart.js";
  "./pages/my/my.js";
  "./subpkg/goods_detail/goods_detail.js";
  "./subpkg/goods_list/goods_list.js";
  "./subpkg/search-detail/search-detail.js";
}
const _sfc_main = {
  data() {
    return {
      cart: [],
      d: 0
    };
  },
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
    this.setbadage();
  },
  onHide: function() {
    console.log("App Hide");
  },
  computed: {
    tabbarnum() {
      return store_store.store.getters.totalcart;
    }
  },
  watch: {
    tabbarnum() {
      this.setbadage();
    }
  },
  methods: {
    setbadage() {
      common_vendor.index$1.setTabBarBadge({
        index: 2,
        text: this.tabbarnum + ""
      });
    }
  }
};
var App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/sangdi/Desktop/vs\u7EC3\u4E60/uni-app\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F/uni_shop/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  return {
    app,
    store: store_store.store
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
