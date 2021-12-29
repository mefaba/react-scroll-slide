!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports, require("react"))
    : "function" == typeof define && define.amd
    ? define(["exports", "react"], t)
    : t(((e || self).reactScrollSlide = {}), e.react);
})(this, function (e, t) {
  function n(e) {
    return e && "object" == typeof e && "default" in e ? e : { default: e };
  }
  var r = /*#__PURE__*/ n(t);
  function u() {
    return (
      (u =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
      u.apply(this, arguments)
    );
  }
  e.ReactScrollSlide = function (e) {
    var n = t.useState({ current: 0 })[1],
      c = t.useRef({});
    t.useEffect(function () {
      return (
        document.addEventListener("wheel", f, { passive: !1 }),
        function () {
          document.removeEventListener("wheel", f, { passive: !1 });
        }
      );
    }, []);
    var o = function (e, t, n) {
        return e > n ? n : e < t ? t : e;
      },
      f = function (e) {
        e.preventDefault();
        var t = Object.keys(c.current).length - 1;
        e.deltaY > 0
          ? n(function (e) {
              var n = o(e.current + 1, 0, t);
              return i(n), u({}, e, { current: n });
            })
          : e.deltaY < 0 &&
            n(function (e) {
              var n = o(e.current - 1, 0, t);
              return i(n), u({}, e, { current: n });
            });
      },
      i = function (e) {
        c.current[e].scrollIntoView();
      };
    return h(
      r.default.Fragment,
      null,
      e.children.map(function (e, t) {
        return r.default.cloneElement(e, {
          key: t,
          ref: function (e) {
            return (c.current[t] = e);
          },
        });
      })
    );
  };
});
//# sourceMappingURL=index.umd.js.map
