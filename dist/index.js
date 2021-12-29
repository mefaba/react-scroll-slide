var e = require("react");
function t(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
var r = /*#__PURE__*/ t(e);
function n() {
  return (
    (n =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    n.apply(this, arguments)
  );
}
exports.ReactScrollSlide = function (t) {
  var u = e.useState({ current: 0 })[1],
    c = e.useRef({});
  e.useEffect(function () {
    return (
      document.addEventListener("wheel", o, { passive: !1 }),
      function () {
        document.removeEventListener("wheel", o, { passive: !1 });
      }
    );
  }, []);
  var a = function (e, t, r) {
      return e > r ? r : e < t ? t : e;
    },
    o = function (e) {
      e.preventDefault();
      var t = Object.keys(c.current).length - 1;
      e.deltaY > 0
        ? u(function (e) {
            var r = a(e.current + 1, 0, t);
            return f(r), n({}, e, { current: r });
          })
        : e.deltaY < 0 &&
          u(function (e) {
            var r = a(e.current - 1, 0, t);
            return f(r), n({}, e, { current: r });
          });
    },
    f = function (e) {
      c.current[e].scrollIntoView();
    };
  return h(
    r.default.Fragment,
    null,
    t.children.map(function (e, t) {
      return r.default.cloneElement(e, {
        key: t,
        ref: function (e) {
          return (c.current[t] = e);
        },
      });
    })
  );
};
//# sourceMappingURL=index.js.map
