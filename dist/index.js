var e = require("react"),
  r = require("react/jsx-runtime");
function t(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
var n = /*#__PURE__*/ t(e);
function u() {
  return (
    (u =
      Object.assign ||
      function (e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = arguments[r];
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        }
        return e;
      }),
    u.apply(this, arguments)
  );
}
exports.ReactScrollSlide = function (t) {
  var c = e.useState({ current: 0 })[1],
    a = e.useRef({});
  e.useEffect(function () {
    return (
      document.addEventListener("wheel", o, { passive: !1 }),
      function () {
        document.removeEventListener("wheel", o, { passive: !1 });
      }
    );
  }, []);
  var i = function (e, r, t) {
      return e > t ? t : e < r ? r : e;
    },
    o = function (e) {
      e.preventDefault();
      var r = Object.keys(a.current).length - 1;
      e.deltaY > 0
        ? c(function (e) {
            var t = i(e.current + 1, 0, r);
            return f(t), u({}, e, { current: t });
          })
        : e.deltaY < 0 &&
          c(function (e) {
            var t = i(e.current - 1, 0, r);
            return f(t), u({}, e, { current: t });
          });
    },
    f = function (e) {
      a.current[e].scrollIntoView();
    };
  /*#__PURE__*/ return r.jsx(n.default.Fragment, {
    children: t.children.map(function (e, r) {
      /*#__PURE__*/ return n.default.cloneElement(e, {
        key: r,
        ref: function (e) {
          return (a.current[r] = e);
        },
      });
    }),
  });
};
//# sourceMappingURL=index.js.map
