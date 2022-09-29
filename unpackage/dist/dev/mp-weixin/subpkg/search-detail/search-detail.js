"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      timer: null,
      kw: "",
      searchList: [],
      historyList: ["a", "b", "c"]
    };
  },
  computed: {
    histories() {
      return [...this.historyList].reverse();
    }
  },
  onLoad() {
    this.historyList = common_vendor.index.getStorageSync("kw") || [];
  },
  methods: {
    input(e) {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        console.log(e);
        this.kw = e;
        this.getSearchList();
      }, 500);
    },
    async getSearchList() {
      if (this.kw === "") {
        this.searchList = [];
        return;
      }
      const { data: res } = await common_vendor.$http.get("https://api-ugo-web.itheima.net/api/public/v1/goods/qsearch", { query: this.kw });
      if (res.meta.status !== 200)
        return common_vendor.index.$showMeg();
      console.log(res.message);
      this.searchList = res.message;
      this.SaveHistoryList();
    },
    gotoDetail(item) {
      common_vendor.index.navigateTo({
        url: "/subpkg/goods_detail/goods_detail"
      });
    },
    gotoList(item) {
      common_vendor.index.navigateTo({
        url: "/subpkg/goods_list/goods_list?query=" + item
      });
    },
    SaveHistoryList() {
      const set = new Set(this.historyList);
      set.delete(this.kw);
      set.add(this.kw);
      this.historyList = Array.from(set);
      common_vendor.index.setStorageSync("kw", this.historyList);
    },
    clean() {
      this.historyList = [];
      common_vendor.index.setStorageSync("kw", "[]");
    }
  }
};
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_tag2 = common_vendor.resolveComponent("uni-tag");
  (_easycom_uni_search_bar2 + _easycom_uni_icons2 + _easycom_uni_tag2)();
}
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_tag = () => "../../uni_modules/uni-tag/components/uni-tag/uni-tag.js";
if (!Math) {
  (_easycom_uni_search_bar + _easycom_uni_icons + _easycom_uni_tag)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o(_ctx.search),
    b: common_vendor.o(_ctx.blur),
    c: common_vendor.o(_ctx.focus),
    d: common_vendor.o($options.input),
    e: common_vendor.o(_ctx.cancel),
    f: common_vendor.o(_ctx.clear),
    g: common_vendor.o(($event) => _ctx.searchValue = $event),
    h: common_vendor.p({
      focus: true,
      radius: 100,
      modelValue: _ctx.searchValue
    }),
    i: $data.searchList.length !== 0
  }, $data.searchList.length !== 0 ? {
    j: common_vendor.f($data.searchList, (item, i, i0) => {
      return {
        a: common_vendor.t(item.goods_name),
        b: "e274ea5e-1-" + i0,
        c: i
      };
    }),
    k: common_vendor.p({
      type: "arrowright",
      size: "15"
    }),
    l: common_vendor.o(($event) => $options.gotoDetail())
  } : {
    m: common_vendor.o($options.clean),
    n: common_vendor.p({
      type: "trash",
      size: "15"
    }),
    o: common_vendor.f($options.histories, (item, i, i0) => {
      return {
        a: i,
        b: common_vendor.o(($event) => $options.gotoList(item)),
        c: "e274ea5e-3-" + i0,
        d: common_vendor.p({
          text: item
        })
      };
    })
  });
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/sangdi/Desktop/vs\u7EC3\u4E60/uni-app\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F/uni_shop/subpkg/search-detail/search-detail.vue"]]);
wx.createPage(MiniProgramPage);
