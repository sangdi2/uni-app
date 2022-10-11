"use strict";
var common_vendor = require("../../common/vendor.js");
var store_store = require("../../store/store.js");
const _sfc_main = {
  name: "my-settle",
  data() {
    return {
      second: 3,
      timer: null
    };
  },
  methods: {
    ChangeAllState() {
      store_store.store.commit("updateState", !this.isfullchecked);
      this.$emit("quancart");
    },
    showTips(n) {
      common_vendor.index$1.showToast({
        title: "\u8BF7\u5148\u767B\u5F55,\u5728" + n + "\u79D2\u4E4B\u540E\u5C06\u4F1A\u8DF3\u8F6C\u5230\u767B\u5F55\u9875\u9762",
        icon: "none",
        duration: 1500
      });
    },
    jiesuan() {
      if (!store_store.store.getters.checkedcount)
        return common_vendor.index$1.showToast({
          title: "\u8BF7\u5148\u9009\u62E9\u8981\u7ED3\u7B97\u7684\u5546\u54C1",
          icon: "none",
          duration: 2e3
        });
      if (!store_store.store.getters.addre)
        return common_vendor.index$1.showToast({
          title: "\u8BF7\u9009\u62E9\u5730\u5740",
          icon: "none",
          duration: 2e3
        });
      if (!store_store.store.state.token)
        return this.delay();
    },
    delay() {
      this.second = 3;
      this.showTips(this.second);
      this.timer = setInterval(() => {
        this.second--;
        if (this.second <= 0) {
          clearInterval(this.timer);
          common_vendor.index$1.switchTab({
            url: "/pages/my/my"
          });
          store_store.store.commit("updateredirectinfo", {
            opentype: "switchTab",
            from: "/pages/cart/cart"
          });
          return;
        }
        this.showTips(this.second);
      }, 1e3);
    }
  },
  computed: {
    checkedtotal() {
      return store_store.store.getters.checkedcount;
    },
    uncheckedtotal() {
      return store_store.store.getters.totalcart;
    },
    isfullchecked() {
      if (this.checkedtotal === this.uncheckedtotal) {
        return true;
      }
      return false;
    },
    goodsPrice() {
      return store_store.store.getters.checkedGoodsPrice;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $options.isfullchecked,
    b: common_vendor.o((...args) => $options.ChangeAllState && $options.ChangeAllState(...args)),
    c: common_vendor.t($options.goodsPrice.toFixed(2)),
    d: common_vendor.t($options.checkedtotal),
    e: common_vendor.o((...args) => $options.jiesuan && $options.jiesuan(...args))
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-01fdff5e"], ["__file", "C:/Users/sangdi/Desktop/vs\u7EC3\u4E60/uni-app\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F/uni_shop/components/my-settle/my-settle.vue"]]);
wx.createComponent(Component);
