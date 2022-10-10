"use strict";
var store_store = require("../../store/store.js");
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "my-settle",
  data() {
    return {};
  },
  methods: {
    ChangeAllState() {
      store_store.store.commit("updateState", !this.isfullchecked);
      this.$emit("quancart");
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
    d: common_vendor.t($options.checkedtotal)
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-01fdff5e"], ["__file", "C:/Users/sangdi/Desktop/vs\u7EC3\u4E60/uni-app\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F/uni_shop/components/my-settle/my-settle.vue"]]);
wx.createComponent(Component);
