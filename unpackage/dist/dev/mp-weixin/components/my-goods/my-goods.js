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
    },
    showRadio: {
      type: Boolean,
      default: false
    },
    showNum: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    radioClick() {
      this.$emit("radio-change", {
        goods_id: this.goods.goods_id,
        goods_state: !this.goods.goods_state
      });
    },
    changeClick(val) {
      this.$emit("num-change", {
        goods_id: this.goods.goods_id,
        goods_count: val
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_number_box2 = common_vendor.resolveComponent("uni-number-box");
  _easycom_uni_number_box2();
}
const _easycom_uni_number_box = () => "../../uni_modules/uni-number-box/components/uni-number-box/uni-number-box.js";
if (!Math) {
  _easycom_uni_number_box();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.showRadio
  }, $props.showRadio ? {
    b: $props.goods.goods_state,
    c: common_vendor.o((...args) => $options.radioClick && $options.radioClick(...args))
  } : {}, {
    d: $props.goods.goods_small_logo,
    e: common_vendor.t($props.goods.goods_name),
    f: common_vendor.t($props.goods.goods_price.toFixed(2)),
    g: $props.showNum
  }, $props.showNum ? {
    h: common_vendor.o($options.changeClick),
    i: common_vendor.p({
      min: 1,
      value: $props.goods.goods_count
    })
  } : {});
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/sangdi/Desktop/vs\u7EC3\u4E60/uni-app\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F/uni_shop/components/my-goods/my-goods.vue"]]);
wx.createComponent(Component);
