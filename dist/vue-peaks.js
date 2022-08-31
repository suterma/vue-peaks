import { defineComponent as I, shallowRef as a, ref as g, onMounted as k, openBlock as y, createElementBlock as B, renderSlot as m, createElementVNode as i, createCommentVNode as E, toDisplayString as A, createTextVNode as _ } from "vue";
import h from "peaks.js";
const C = ["id"], O = ["id"], Z = ["id"], $ = ["id"], b = ["src"], x = { class: "peaks-controls" }, P = /* @__PURE__ */ _("\xA0 "), N = /* @__PURE__ */ _("\xA0 "), V = /* @__PURE__ */ I({
  __name: "AudioPeaks",
  props: {
    src: null,
    id: null,
    mediaElementId: null,
    options: null
  },
  setup(s) {
    const o = s, n = a(void 0), c = a(null), r = a(null), d = g(void 0);
    k(() => {
      f();
    });
    function f() {
      var e, u, v;
      const t = {
        containers: {
          overview: document.getElementById("overview-" + o.id),
          zoomview: document.getElementById("zoomview-" + o.id)
        },
        mediaElement: (v = (e = document.getElementById("" + o.id)) == null ? void 0 : e.getElementsByTagName("audio")[0]) != null ? v : (u = document.getElementById("" + o.mediaElementId)) != null ? u : void 0,
        webAudio: {
          audioContext: new AudioContext()
        },
        zoomLevels: [256, 512, 1024, 2048, 4096]
      };
      h.init(
        o.options ? o.options : t,
        function(w, l) {
          console.log(w, l), n.value = l, d.value = l == null ? void 0 : l.zoom.getZoom();
        }
      );
    }
    function z() {
      var t, e;
      (t = n.value) == null || t.zoom.zoomIn(), d.value = (e = n.value) == null ? void 0 : e.zoom.getZoom();
    }
    function p() {
      var t, e;
      (t = n.value) == null || t.zoom.zoomOut(), d.value = (e = n.value) == null ? void 0 : e.zoom.getZoom();
    }
    return (t, e) => (y(), B("div", {
      id: "" + o.id
    }, [
      m(t.$slots, "overview", {}, () => [
        i("div", {
          class: "peaks-overview",
          id: "overview-" + o.id,
          ref: "overview"
        }, null, 8, O)
      ], !0),
      m(t.$slots, "zoomview", {}, () => [
        i("div", {
          class: "peaks-zoomview",
          id: "zoomview-" + o.id,
          ref: "zoomview"
        }, null, 8, Z)
      ], !0),
      o.mediaElementId ? E("", !0) : m(t.$slots, "default", { key: 0 }, () => [
        i("audio", {
          class: "peaks-audio",
          id: o.id,
          ref: "audio",
          controls: ""
        }, [
          i("source", { src: s.src }, null, 8, b)
        ], 8, $)
      ], !0),
      m(t.$slots, "controls", {}, () => [
        i("div", x, [
          i("button", {
            ref_key: "zoomInButton",
            ref: c,
            onClick: e[0] || (e[0] = (u) => z())
          }, " Zoom in", 512),
          P,
          i("button", {
            ref_key: "zoomOutButton",
            ref: r,
            onClick: e[1] || (e[1] = (u) => p())
          }, " Zoom out", 512),
          N,
          i("span", null, "Zoom level: " + A(d.value), 1)
        ])
      ], !0)
    ], 8, C));
  }
});
const L = (s, o) => {
  const n = s.__vccOpts || s;
  for (const [c, r] of o)
    n[c] = r;
  return n;
}, D = /* @__PURE__ */ L(V, [["__scopeId", "data-v-fb2c49f4"]]);
export {
  D as AudioPeaks
};
//# sourceMappingURL=vue-peaks.js.map
