import { defineComponent as x, shallowRef as s, onMounted as C, onBeforeUnmount as F, openBlock as Z, createElementBlock as $, Fragment as N, createElementVNode as t, renderSlot as a, createCommentVNode as z, toDisplayString as V, unref as O, createTextVNode as P } from "vue";
import R from "peaks.js";
const L = ["src"], T = { class: "peaks-controls" }, D = /* @__PURE__ */ P("\xA0 "), M = /* @__PURE__ */ P("\xA0 "), U = /* @__PURE__ */ x({
  __name: "AudioPeaks",
  props: {
    src: null,
    zoomviewElementId: null,
    zoomviewElement: null,
    overviewElementId: null,
    overviewElement: null,
    mediaElementId: null,
    mediaElement: null,
    options: null
  },
  setup(u, { expose: c }) {
    const e = u, l = s(void 0), m = s(null), p = s(null), _ = s(null), E = s(null), y = s(null), g = s(null), d = s(void 0);
    c({
      peaksInstance: l
    }), C(() => {
      b();
    }), F(() => {
      A();
    });
    function b() {
      console.debug("AudioPeaks::createPeaksInstance:options:", e.options);
      const o = f(
        e.overviewElement,
        e.overviewElementId,
        m,
        p,
        "div"
      ), n = f(
        e.zoomviewElement,
        e.zoomviewElementId,
        _,
        E,
        "div"
      ), r = f(
        e.mediaElement,
        e.mediaElementId,
        y,
        g,
        "audio"
      );
      e.options && (e.options.containers = {
        overview: o,
        zoomview: n
      }, e.options.mediaElement = r);
      const w = e.options ? e.options : {
        containers: {
          overview: o,
          zoomview: n
        },
        mediaElement: r,
        webAudio: {
          audioContext: new AudioContext()
        },
        zoomLevels: [256, 512, 1024, 2048, 4096]
      };
      R.init(w, function(v, i) {
        v && console.error(v), l.value = i, d.value = i == null ? void 0 : i.zoom.getZoom();
      });
    }
    function A() {
      var o;
      (o = l.value) == null || o.destroy();
    }
    function f(o, n, r, w, v) {
      if (o)
        return console.debug("AudioPeaks::Found elm: ", o), o;
      if (n)
        return console.debug("AudioPeaks::Found element by id: ", n), document.getElementById("" + n);
      const i = r.value;
      if (i)
        return console.debug("AudioPeaks::Found element by Ref: ", i), i;
      const I = w.value;
      if (I) {
        const k = I.getElementsByTagName(
          v
        )[0];
        if (k)
          return console.debug(
            "AudioPeaks::Found element by first in slot: ",
            k
          ), k;
      }
    }
    function S() {
      var o, n;
      (o = l.value) == null || o.zoom.zoomIn(), d.value = (n = l.value) == null ? void 0 : n.zoom.getZoom();
    }
    function B() {
      var o, n;
      (o = l.value) == null || o.zoom.zoomOut(), d.value = (n = l.value) == null ? void 0 : n.zoom.getZoom();
    }
    return (o, n) => (Z(), $(N, null, [
      t("div", {
        ref_key: "overviewSlot",
        ref: p
      }, [
        !e.overviewElementId && !e.overviewElement ? a(o.$slots, "overview", { key: 0 }, () => [
          t("div", {
            class: "peaks-overview",
            ref_key: "overview",
            ref: m
          }, null, 512)
        ], !0) : z("", !0)
      ], 512),
      t("div", {
        ref_key: "zoomviewSlot",
        ref: E
      }, [
        !e.zoomviewElementId && !e.zoomviewElement ? a(o.$slots, "zoomview", { key: 0 }, () => [
          t("div", {
            class: "peaks-zoomview",
            ref_key: "zoomview",
            ref: _
          }, null, 512)
        ], !0) : z("", !0)
      ], 512),
      t("div", {
        ref_key: "audioSlot",
        ref: g
      }, [
        !e.mediaElementId && !e.mediaElement ? a(o.$slots, "default", { key: 0 }, () => [
          t("audio", {
            class: "peaks-audio",
            ref_key: "audio",
            ref: y,
            controls: ""
          }, [
            t("source", { src: u.src }, null, 8, L)
          ], 512)
        ], !0) : z("", !0)
      ], 512),
      a(o.$slots, "controls", {}, () => [
        t("div", T, [
          t("button", {
            onClick: n[0] || (n[0] = (r) => S())
          }, "Zoom in"),
          D,
          t("button", {
            onClick: n[1] || (n[1] = (r) => B())
          }, "Zoom out"),
          M,
          t("span", null, "Zoom level: " + V(O(d)), 1)
        ])
      ], !0)
    ], 64));
  }
});
const h = (u, c) => {
  const e = u.__vccOpts || u;
  for (const [l, m] of c)
    e[l] = m;
  return e;
}, j = /* @__PURE__ */ h(U, [["__scopeId", "data-v-da208bf3"]]), H = {
  install: (u) => {
    u.component("AudioPeaks", j);
  }
};
export {
  j as AudioPeaks,
  H as default
};
//# sourceMappingURL=vue-peaks.es.js.map
