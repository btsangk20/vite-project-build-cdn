(function (xe, x) {
  typeof exports == "object" && typeof module < "u"
    ? x(exports, require("react"), require("react-dom"))
    : typeof define == "function" && define.amd
    ? define(["exports", "react", "react-dom"], x)
    : ((xe = typeof globalThis < "u" ? globalThis : xe || self),
      x((xe.WoodDeck = {}), xe.React, xe.ReactDOM));
})(this, function (xe, x, Sr) {
  "use strict";
  function Wn(e) {
    const t = Object.create(null, {
      [Symbol.toStringTag]: { value: "Module" },
    });
    if (e) {
      for (const r in e)
        if (r !== "default") {
          const n = Object.getOwnPropertyDescriptor(e, r);
          Object.defineProperty(
            t,
            r,
            n.get ? n : { enumerable: !0, get: () => e[r] }
          );
        }
    }
    return (t.default = e), Object.freeze(t);
  }
  const h = Wn(x),
    ya = Wn(Sr);
  function Sa(e) {
    return e &&
      e.__esModule &&
      Object.prototype.hasOwnProperty.call(e, "default")
      ? e.default
      : e;
  }
  var Gn = { exports: {} };
  /*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
    (function () {
      var t = {}.hasOwnProperty;
      function r() {
        for (var i = "", a = 0; a < arguments.length; a++) {
          var c = arguments[a];
          c && (i = o(i, n(c)));
        }
        return i;
      }
      function n(i) {
        if (typeof i == "string" || typeof i == "number") return i;
        if (typeof i != "object") return "";
        if (Array.isArray(i)) return r.apply(null, i);
        if (
          i.toString !== Object.prototype.toString &&
          !i.toString.toString().includes("[native code]")
        )
          return i.toString();
        var a = "";
        for (var c in i) t.call(i, c) && i[c] && (a = o(a, c));
        return a;
      }
      function o(i, a) {
        return a ? (i ? i + " " + a : i + a) : i;
      }
      e.exports ? ((r.default = r), (e.exports = r)) : (window.classNames = r);
    })();
  })(Gn);
  var Ca = Gn.exports;
  const pe = Sa(Ca);
  function nt() {
    return (
      (nt = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }),
      nt.apply(null, arguments)
    );
  }
  var Cr = { exports: {} },
    G = {};
  /**
   * @license React
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var Un;
  function Ea() {
    if (Un) return G;
    Un = 1;
    var e = Symbol.for("react.element"),
      t = Symbol.for("react.portal"),
      r = Symbol.for("react.fragment"),
      n = Symbol.for("react.strict_mode"),
      o = Symbol.for("react.profiler"),
      i = Symbol.for("react.provider"),
      a = Symbol.for("react.context"),
      c = Symbol.for("react.server_context"),
      l = Symbol.for("react.forward_ref"),
      s = Symbol.for("react.suspense"),
      u = Symbol.for("react.suspense_list"),
      f = Symbol.for("react.memo"),
      d = Symbol.for("react.lazy"),
      g = Symbol.for("react.offscreen"),
      C;
    C = Symbol.for("react.module.reference");
    function m(p) {
      if (typeof p == "object" && p !== null) {
        var P = p.$$typeof;
        switch (P) {
          case e:
            switch (((p = p.type), p)) {
              case r:
              case o:
              case n:
              case s:
              case u:
                return p;
              default:
                switch (((p = p && p.$$typeof), p)) {
                  case c:
                  case a:
                  case l:
                  case d:
                  case f:
                  case i:
                    return p;
                  default:
                    return P;
                }
            }
          case t:
            return P;
        }
      }
    }
    return (
      (G.ContextConsumer = a),
      (G.ContextProvider = i),
      (G.Element = e),
      (G.ForwardRef = l),
      (G.Fragment = r),
      (G.Lazy = d),
      (G.Memo = f),
      (G.Portal = t),
      (G.Profiler = o),
      (G.StrictMode = n),
      (G.Suspense = s),
      (G.SuspenseList = u),
      (G.isAsyncMode = function () {
        return !1;
      }),
      (G.isConcurrentMode = function () {
        return !1;
      }),
      (G.isContextConsumer = function (p) {
        return m(p) === a;
      }),
      (G.isContextProvider = function (p) {
        return m(p) === i;
      }),
      (G.isElement = function (p) {
        return typeof p == "object" && p !== null && p.$$typeof === e;
      }),
      (G.isForwardRef = function (p) {
        return m(p) === l;
      }),
      (G.isFragment = function (p) {
        return m(p) === r;
      }),
      (G.isLazy = function (p) {
        return m(p) === d;
      }),
      (G.isMemo = function (p) {
        return m(p) === f;
      }),
      (G.isPortal = function (p) {
        return m(p) === t;
      }),
      (G.isProfiler = function (p) {
        return m(p) === o;
      }),
      (G.isStrictMode = function (p) {
        return m(p) === n;
      }),
      (G.isSuspense = function (p) {
        return m(p) === s;
      }),
      (G.isSuspenseList = function (p) {
        return m(p) === u;
      }),
      (G.isValidElementType = function (p) {
        return (
          typeof p == "string" ||
          typeof p == "function" ||
          p === r ||
          p === o ||
          p === n ||
          p === s ||
          p === u ||
          p === g ||
          (typeof p == "object" &&
            p !== null &&
            (p.$$typeof === d ||
              p.$$typeof === f ||
              p.$$typeof === i ||
              p.$$typeof === a ||
              p.$$typeof === l ||
              p.$$typeof === C ||
              p.getModuleId !== void 0))
        );
      }),
      (G.typeOf = m),
      G
    );
  }
  var U = {};
  /**
   * @license React
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var Xn;
  function xa() {
    return (
      Xn ||
        ((Xn = 1),
        process.env.NODE_ENV !== "production" &&
          (function () {
            var e = Symbol.for("react.element"),
              t = Symbol.for("react.portal"),
              r = Symbol.for("react.fragment"),
              n = Symbol.for("react.strict_mode"),
              o = Symbol.for("react.profiler"),
              i = Symbol.for("react.provider"),
              a = Symbol.for("react.context"),
              c = Symbol.for("react.server_context"),
              l = Symbol.for("react.forward_ref"),
              s = Symbol.for("react.suspense"),
              u = Symbol.for("react.suspense_list"),
              f = Symbol.for("react.memo"),
              d = Symbol.for("react.lazy"),
              g = Symbol.for("react.offscreen"),
              C = !1,
              m = !1,
              p = !1,
              P = !1,
              E = !1,
              M;
            M = Symbol.for("react.module.reference");
            function $(I) {
              return !!(
                typeof I == "string" ||
                typeof I == "function" ||
                I === r ||
                I === o ||
                E ||
                I === n ||
                I === s ||
                I === u ||
                P ||
                I === g ||
                C ||
                m ||
                p ||
                (typeof I == "object" &&
                  I !== null &&
                  (I.$$typeof === d ||
                    I.$$typeof === f ||
                    I.$$typeof === i ||
                    I.$$typeof === a ||
                    I.$$typeof === l ||
                    I.$$typeof === M ||
                    I.getModuleId !== void 0))
              );
            }
            function O(I) {
              if (typeof I == "object" && I !== null) {
                var Le = I.$$typeof;
                switch (Le) {
                  case e:
                    var te = I.type;
                    switch (te) {
                      case r:
                      case o:
                      case n:
                      case s:
                      case u:
                        return te;
                      default:
                        var Re = te && te.$$typeof;
                        switch (Re) {
                          case c:
                          case a:
                          case l:
                          case d:
                          case f:
                          case i:
                            return Re;
                          default:
                            return Le;
                        }
                    }
                  case t:
                    return Le;
                }
              }
            }
            var T = a,
              S = i,
              _ = e,
              k = l,
              V = r,
              X = d,
              D = f,
              B = t,
              L = o,
              W = n,
              y = s,
              v = u,
              b = !1,
              w = !1;
            function j(I) {
              return (
                b ||
                  ((b = !0),
                  console.warn(
                    "The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+."
                  )),
                !1
              );
            }
            function A(I) {
              return (
                w ||
                  ((w = !0),
                  console.warn(
                    "The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+."
                  )),
                !1
              );
            }
            function R(I) {
              return O(I) === a;
            }
            function H(I) {
              return O(I) === i;
            }
            function q(I) {
              return typeof I == "object" && I !== null && I.$$typeof === e;
            }
            function oe(I) {
              return O(I) === l;
            }
            function ce(I) {
              return O(I) === r;
            }
            function Q(I) {
              return O(I) === d;
            }
            function We(I) {
              return O(I) === f;
            }
            function Ge(I) {
              return O(I) === t;
            }
            function tt(I) {
              return O(I) === o;
            }
            function Ie(I) {
              return O(I) === n;
            }
            function be(I) {
              return O(I) === s;
            }
            function Ue(I) {
              return O(I) === u;
            }
            (U.ContextConsumer = T),
              (U.ContextProvider = S),
              (U.Element = _),
              (U.ForwardRef = k),
              (U.Fragment = V),
              (U.Lazy = X),
              (U.Memo = D),
              (U.Portal = B),
              (U.Profiler = L),
              (U.StrictMode = W),
              (U.Suspense = y),
              (U.SuspenseList = v),
              (U.isAsyncMode = j),
              (U.isConcurrentMode = A),
              (U.isContextConsumer = R),
              (U.isContextProvider = H),
              (U.isElement = q),
              (U.isForwardRef = oe),
              (U.isFragment = ce),
              (U.isLazy = Q),
              (U.isMemo = We),
              (U.isPortal = Ge),
              (U.isProfiler = tt),
              (U.isStrictMode = Ie),
              (U.isSuspense = be),
              (U.isSuspenseList = Ue),
              (U.isValidElementType = $),
              (U.typeOf = O);
          })()),
      U
    );
  }
  process.env.NODE_ENV === "production"
    ? (Cr.exports = Ea())
    : (Cr.exports = xa());
  var It = Cr.exports,
    Er = {},
    xr = [],
    wa = function (t) {
      xr.push(t);
    };
  function wr(e, t) {
    if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
      var r = xr.reduce(function (n, o) {
        return o(n ?? "", "warning");
      }, t);
      r && console.error("Warning: ".concat(r));
    }
  }
  function Oa(e, t) {
    if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
      var r = xr.reduce(function (n, o) {
        return o(n ?? "", "note");
      }, t);
      r && console.warn("Note: ".concat(r));
    }
  }
  function qn() {
    Er = {};
  }
  function Kn(e, t, r) {
    !t && !Er[r] && (e(!1, r), (Er[r] = !0));
  }
  function ke(e, t) {
    Kn(wr, e, t);
  }
  function Ta(e, t) {
    Kn(Oa, e, t);
  }
  (ke.preMessage = wa), (ke.resetWarned = qn), (ke.noteOnce = Ta);
  function K(e) {
    "@babel/helpers - typeof";
    return (
      (K =
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                typeof Symbol == "function" &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            }),
      K(e)
    );
  }
  function Aa(e, t) {
    if (K(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
      var n = r.call(e, t || "default");
      if (K(n) != "object") return n;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (t === "string" ? String : Number)(e);
  }
  function Yn(e) {
    var t = Aa(e, "string");
    return K(t) == "symbol" ? t : t + "";
  }
  function z(e, t, r) {
    return (
      (t = Yn(t)) in e
        ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = r),
      e
    );
  }
  function Qn(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t &&
        (n = n.filter(function (o) {
          return Object.getOwnPropertyDescriptor(e, o).enumerable;
        })),
        r.push.apply(r, n);
    }
    return r;
  }
  function N(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] != null ? arguments[t] : {};
      t % 2
        ? Qn(Object(r), !0).forEach(function (n) {
            z(e, n, r[n]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Qn(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
    }
    return e;
  }
  function Zn(e) {
    return e instanceof HTMLElement || e instanceof SVGElement;
  }
  function Pa(e) {
    return e && K(e) === "object" && Zn(e.nativeElement)
      ? e.nativeElement
      : Zn(e)
      ? e
      : null;
  }
  function _a(e) {
    var t = Pa(e);
    if (t) return t;
    if (e instanceof x.Component) {
      var r;
      return (r = Sr.findDOMNode) === null || r === void 0
        ? void 0
        : r.call(Sr, e);
    }
    return null;
  }
  function Jn(e, t, r) {
    var n = h.useRef({});
    return (
      (!("value" in n.current) || r(n.current.condition, t)) &&
        ((n.current.value = e()), (n.current.condition = t)),
      n.current.value
    );
  }
  var eo = function (t, r) {
      typeof t == "function"
        ? t(r)
        : K(t) === "object" && t && "current" in t && (t.current = r);
    },
    Or = function () {
      for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
        r[n] = arguments[n];
      var o = r.filter(Boolean);
      return o.length <= 1
        ? o[0]
        : function (i) {
            r.forEach(function (a) {
              eo(a, i);
            });
          };
    },
    to = function (t) {
      var r,
        n,
        o = It.isMemo(t) ? t.type.type : t.type;
      return !(
        (typeof o == "function" &&
          !((r = o.prototype) !== null && r !== void 0 && r.render) &&
          o.$$typeof !== It.ForwardRef) ||
        (typeof t == "function" &&
          !((n = t.prototype) !== null && n !== void 0 && n.render) &&
          t.$$typeof !== It.ForwardRef)
      );
    };
  function ro(e) {
    return x.isValidElement(e) && !It.isFragment(e);
  }
  Number(x.version.split(".")[0]) >= 19;
  function we(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function no(e, t) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(e, Yn(n.key), n);
    }
  }
  function Oe(e, t, r) {
    return (
      t && no(e.prototype, t),
      r && no(e, r),
      Object.defineProperty(e, "prototype", { writable: !1 }),
      e
    );
  }
  function Tr(e, t) {
    return (
      (Tr = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (r, n) {
            return (r.__proto__ = n), r;
          }),
      Tr(e, t)
    );
  }
  function Lt(e, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Super expression must either be null or a function");
    (e.prototype = Object.create(t && t.prototype, {
      constructor: { value: e, writable: !0, configurable: !0 },
    })),
      Object.defineProperty(e, "prototype", { writable: !1 }),
      t && Tr(e, t);
  }
  function Rt(e) {
    return (
      (Rt = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          }),
      Rt(e)
    );
  }
  function oo() {
    try {
      var e = !Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      );
    } catch {}
    return (oo = function () {
      return !!e;
    })();
  }
  function qe(e) {
    if (e === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return e;
  }
  function $a(e, t) {
    if (t && (K(t) == "object" || typeof t == "function")) return t;
    if (t !== void 0)
      throw new TypeError(
        "Derived constructors may only return object or undefined"
      );
    return qe(e);
  }
  function Nt(e) {
    var t = oo();
    return function () {
      var r,
        n = Rt(e);
      if (t) {
        var o = Rt(this).constructor;
        r = Reflect.construct(n, arguments, o);
      } else r = n.apply(this, arguments);
      return $a(this, r);
    };
  }
  function Ma(e, t) {
    var r = Object.assign({}, e);
    return (
      Array.isArray(t) &&
        t.forEach(function (n) {
          delete r[n];
        }),
      r
    );
  }
  function Ar(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
    return n;
  }
  function ja(e) {
    if (Array.isArray(e)) return Ar(e);
  }
  function io(e) {
    if (
      (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
      e["@@iterator"] != null
    )
      return Array.from(e);
  }
  function Pr(e, t) {
    if (e) {
      if (typeof e == "string") return Ar(e, t);
      var r = {}.toString.call(e).slice(8, -1);
      return (
        r === "Object" && e.constructor && (r = e.constructor.name),
        r === "Map" || r === "Set"
          ? Array.from(e)
          : r === "Arguments" ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? Ar(e, t)
          : void 0
      );
    }
  }
  function Ia() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function Te(e) {
    return ja(e) || io(e) || Pr(e) || Ia();
  }
  var ao = function (t) {
      return +setTimeout(t, 16);
    },
    co = function (t) {
      return clearTimeout(t);
    };
  typeof window < "u" &&
    "requestAnimationFrame" in window &&
    ((ao = function (t) {
      return window.requestAnimationFrame(t);
    }),
    (co = function (t) {
      return window.cancelAnimationFrame(t);
    }));
  var so = 0,
    kt = new Map();
  function lo(e) {
    kt.delete(e);
  }
  var Be = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
    so += 1;
    var n = so;
    function o(i) {
      if (i === 0) lo(n), t();
      else {
        var a = ao(function () {
          o(i - 1);
        });
        kt.set(n, a);
      }
    }
    return o(r), n;
  };
  (Be.cancel = function (e) {
    var t = kt.get(e);
    return lo(e), co(t);
  }),
    process.env.NODE_ENV !== "production" &&
      (Be.ids = function () {
        return kt;
      });
  function uo(e) {
    if (Array.isArray(e)) return e;
  }
  function La(e, t) {
    var r =
      e == null
        ? null
        : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
    if (r != null) {
      var n,
        o,
        i,
        a,
        c = [],
        l = !0,
        s = !1;
      try {
        if (((i = (r = r.call(e)).next), t === 0)) {
          if (Object(r) !== r) return;
          l = !1;
        } else
          for (
            ;
            !(l = (n = i.call(r)).done) && (c.push(n.value), c.length !== t);
            l = !0
          );
      } catch (u) {
        (s = !0), (o = u);
      } finally {
        try {
          if (!l && r.return != null && ((a = r.return()), Object(a) !== a))
            return;
        } finally {
          if (s) throw o;
        }
      }
      return c;
    }
  }
  function fo() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function F(e, t) {
    return uo(e) || La(e, t) || Pr(e, t) || fo();
  }
  function bt(e) {
    for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
      (r =
        (e.charCodeAt(n) & 255) |
        ((e.charCodeAt(++n) & 255) << 8) |
        ((e.charCodeAt(++n) & 255) << 16) |
        ((e.charCodeAt(++n) & 255) << 24)),
        (r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)),
        (r ^= r >>> 24),
        (t =
          ((r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)) ^
          ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
    switch (o) {
      case 3:
        t ^= (e.charCodeAt(n + 2) & 255) << 16;
      case 2:
        t ^= (e.charCodeAt(n + 1) & 255) << 8;
      case 1:
        (t ^= e.charCodeAt(n) & 255),
          (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
    }
    return (
      (t ^= t >>> 13),
      (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
      ((t ^ (t >>> 15)) >>> 0).toString(36)
    );
  }
  function Ae() {
    return !!(
      typeof window < "u" &&
      window.document &&
      window.document.createElement
    );
  }
  function Ra(e, t) {
    if (!e) return !1;
    if (e.contains) return e.contains(t);
    for (var r = t; r; ) {
      if (r === e) return !0;
      r = r.parentNode;
    }
    return !1;
  }
  var po = "data-rc-order",
    vo = "data-rc-priority",
    Na = "rc-util-key",
    _r = new Map();
  function go() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      t = e.mark;
    return t ? (t.startsWith("data-") ? t : "data-".concat(t)) : Na;
  }
  function Bt(e) {
    if (e.attachTo) return e.attachTo;
    var t = document.querySelector("head");
    return t || document.body;
  }
  function ka(e) {
    return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
  }
  function $r(e) {
    return Array.from((_r.get(e) || e).children).filter(function (t) {
      return t.tagName === "STYLE";
    });
  }
  function ho(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!Ae()) return null;
    var r = t.csp,
      n = t.prepend,
      o = t.priority,
      i = o === void 0 ? 0 : o,
      a = ka(n),
      c = a === "prependQueue",
      l = document.createElement("style");
    l.setAttribute(po, a),
      c && i && l.setAttribute(vo, "".concat(i)),
      r != null && r.nonce && (l.nonce = r == null ? void 0 : r.nonce),
      (l.innerHTML = e);
    var s = Bt(t),
      u = s.firstChild;
    if (n) {
      if (c) {
        var f = (t.styles || $r(s)).filter(function (d) {
          if (!["prepend", "prependQueue"].includes(d.getAttribute(po)))
            return !1;
          var g = Number(d.getAttribute(vo) || 0);
          return i >= g;
        });
        if (f.length) return s.insertBefore(l, f[f.length - 1].nextSibling), l;
      }
      s.insertBefore(l, u);
    } else s.appendChild(l);
    return l;
  }
  function mo(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = Bt(t);
    return (t.styles || $r(r)).find(function (n) {
      return n.getAttribute(go(t)) === e;
    });
  }
  function bo(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = mo(e, t);
    if (r) {
      var n = Bt(t);
      n.removeChild(r);
    }
  }
  function Ba(e, t) {
    var r = _r.get(e);
    if (!r || !Ra(document, r)) {
      var n = ho("", t),
        o = n.parentNode;
      _r.set(e, o), e.removeChild(n);
    }
  }
  function Ke(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      n = Bt(r),
      o = $r(n),
      i = N(N({}, r), {}, { styles: o });
    Ba(n, i);
    var a = mo(t, i);
    if (a) {
      var c, l;
      if (
        (c = i.csp) !== null &&
        c !== void 0 &&
        c.nonce &&
        a.nonce !== ((l = i.csp) === null || l === void 0 ? void 0 : l.nonce)
      ) {
        var s;
        a.nonce = (s = i.csp) === null || s === void 0 ? void 0 : s.nonce;
      }
      return a.innerHTML !== e && (a.innerHTML = e), a;
    }
    var u = ho(e, i);
    return u.setAttribute(go(i), t), u;
  }
  function Ha(e, t) {
    if (e == null) return {};
    var r = {};
    for (var n in e)
      if ({}.hasOwnProperty.call(e, n)) {
        if (t.includes(n)) continue;
        r[n] = e[n];
      }
    return r;
  }
  function yt(e, t) {
    if (e == null) return {};
    var r,
      n,
      o = Ha(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (n = 0; n < i.length; n++)
        (r = i[n]),
          t.includes(r) ||
            ({}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]));
    }
    return o;
  }
  function Da(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
      n = new Set();
    function o(i, a) {
      var c =
          arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
        l = n.has(i);
      if ((ke(!l, "Warning: There may be circular references"), l)) return !1;
      if (i === a) return !0;
      if (r && c > 1) return !1;
      n.add(i);
      var s = c + 1;
      if (Array.isArray(i)) {
        if (!Array.isArray(a) || i.length !== a.length) return !1;
        for (var u = 0; u < i.length; u++) if (!o(i[u], a[u], s)) return !1;
        return !0;
      }
      if (i && a && K(i) === "object" && K(a) === "object") {
        var f = Object.keys(i);
        return f.length !== Object.keys(a).length
          ? !1
          : f.every(function (d) {
              return o(i[d], a[d], s);
            });
      }
      return !1;
    }
    return o(e, t);
  }
  var za = "%";
  function Mr(e) {
    return e.join(za);
  }
  var Fa = (function () {
      function e(t) {
        we(this, e),
          z(this, "instanceId", void 0),
          z(this, "cache", new Map()),
          (this.instanceId = t);
      }
      return (
        Oe(e, [
          {
            key: "get",
            value: function (r) {
              return this.opGet(Mr(r));
            },
          },
          {
            key: "opGet",
            value: function (r) {
              return this.cache.get(r) || null;
            },
          },
          {
            key: "update",
            value: function (r, n) {
              return this.opUpdate(Mr(r), n);
            },
          },
          {
            key: "opUpdate",
            value: function (r, n) {
              var o = this.cache.get(r),
                i = n(o);
              i === null ? this.cache.delete(r) : this.cache.set(r, i);
            },
          },
        ]),
        e
      );
    })(),
    ot = "data-token-hash",
    ve = "data-css-hash",
    Va = "data-cache-path",
    He = "__cssinjs_instance__";
  function Wa() {
    var e = Math.random().toString(12).slice(2);
    if (typeof document < "u" && document.head && document.body) {
      var t = document.body.querySelectorAll("style[".concat(ve, "]")) || [],
        r = document.head.firstChild;
      Array.from(t).forEach(function (o) {
        (o[He] = o[He] || e), o[He] === e && document.head.insertBefore(o, r);
      });
      var n = {};
      Array.from(document.querySelectorAll("style[".concat(ve, "]"))).forEach(
        function (o) {
          var i = o.getAttribute(ve);
          if (n[i]) {
            if (o[He] === e) {
              var a;
              (a = o.parentNode) === null || a === void 0 || a.removeChild(o);
            }
          } else n[i] = !0;
        }
      );
    }
    return new Fa(e);
  }
  var Ga = h.createContext({
    hashPriority: "low",
    cache: Wa(),
    defaultCache: !0,
  });
  const Ht = Ga;
  var yo = Oe(function e() {
      we(this, e);
    }),
    So = "CALC_UNIT",
    Ua = new RegExp(So, "g");
  function jr(e) {
    return typeof e == "number" ? "".concat(e).concat(So) : e;
  }
  var Xa = (function (e) {
      Lt(r, e);
      var t = Nt(r);
      function r(n, o) {
        var i;
        we(this, r),
          (i = t.call(this)),
          z(qe(i), "result", ""),
          z(qe(i), "unitlessCssVar", void 0),
          z(qe(i), "lowPriority", void 0);
        var a = K(n);
        return (
          (i.unitlessCssVar = o),
          n instanceof r
            ? (i.result = "(".concat(n.result, ")"))
            : a === "number"
            ? (i.result = jr(n))
            : a === "string" && (i.result = n),
          i
        );
      }
      return (
        Oe(r, [
          {
            key: "add",
            value: function (o) {
              return (
                o instanceof r
                  ? (this.result = ""
                      .concat(this.result, " + ")
                      .concat(o.getResult()))
                  : (typeof o == "number" || typeof o == "string") &&
                    (this.result = "".concat(this.result, " + ").concat(jr(o))),
                (this.lowPriority = !0),
                this
              );
            },
          },
          {
            key: "sub",
            value: function (o) {
              return (
                o instanceof r
                  ? (this.result = ""
                      .concat(this.result, " - ")
                      .concat(o.getResult()))
                  : (typeof o == "number" || typeof o == "string") &&
                    (this.result = "".concat(this.result, " - ").concat(jr(o))),
                (this.lowPriority = !0),
                this
              );
            },
          },
          {
            key: "mul",
            value: function (o) {
              return (
                this.lowPriority &&
                  (this.result = "(".concat(this.result, ")")),
                o instanceof r
                  ? (this.result = ""
                      .concat(this.result, " * ")
                      .concat(o.getResult(!0)))
                  : (typeof o == "number" || typeof o == "string") &&
                    (this.result = "".concat(this.result, " * ").concat(o)),
                (this.lowPriority = !1),
                this
              );
            },
          },
          {
            key: "div",
            value: function (o) {
              return (
                this.lowPriority &&
                  (this.result = "(".concat(this.result, ")")),
                o instanceof r
                  ? (this.result = ""
                      .concat(this.result, " / ")
                      .concat(o.getResult(!0)))
                  : (typeof o == "number" || typeof o == "string") &&
                    (this.result = "".concat(this.result, " / ").concat(o)),
                (this.lowPriority = !1),
                this
              );
            },
          },
          {
            key: "getResult",
            value: function (o) {
              return this.lowPriority || o
                ? "(".concat(this.result, ")")
                : this.result;
            },
          },
          {
            key: "equal",
            value: function (o) {
              var i = this,
                a = o || {},
                c = a.unit,
                l = !0;
              return (
                typeof c == "boolean"
                  ? (l = c)
                  : Array.from(this.unitlessCssVar).some(function (s) {
                      return i.result.includes(s);
                    }) && (l = !1),
                (this.result = this.result.replace(Ua, l ? "px" : "")),
                typeof this.lowPriority < "u"
                  ? "calc(".concat(this.result, ")")
                  : this.result
              );
            },
          },
        ]),
        r
      );
    })(yo),
    qa = (function (e) {
      Lt(r, e);
      var t = Nt(r);
      function r(n) {
        var o;
        return (
          we(this, r),
          (o = t.call(this)),
          z(qe(o), "result", 0),
          n instanceof r
            ? (o.result = n.result)
            : typeof n == "number" && (o.result = n),
          o
        );
      }
      return (
        Oe(r, [
          {
            key: "add",
            value: function (o) {
              return (
                o instanceof r
                  ? (this.result += o.result)
                  : typeof o == "number" && (this.result += o),
                this
              );
            },
          },
          {
            key: "sub",
            value: function (o) {
              return (
                o instanceof r
                  ? (this.result -= o.result)
                  : typeof o == "number" && (this.result -= o),
                this
              );
            },
          },
          {
            key: "mul",
            value: function (o) {
              return (
                o instanceof r
                  ? (this.result *= o.result)
                  : typeof o == "number" && (this.result *= o),
                this
              );
            },
          },
          {
            key: "div",
            value: function (o) {
              return (
                o instanceof r
                  ? (this.result /= o.result)
                  : typeof o == "number" && (this.result /= o),
                this
              );
            },
          },
          {
            key: "equal",
            value: function () {
              return this.result;
            },
          },
        ]),
        r
      );
    })(yo),
    Ka = function (t, r) {
      var n = t === "css" ? Xa : qa;
      return function (o) {
        return new n(o, r);
      };
    };
  function Ya(e, t) {
    if (e.length !== t.length) return !1;
    for (var r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
    return !0;
  }
  var Ir = (function () {
    function e() {
      we(this, e),
        z(this, "cache", void 0),
        z(this, "keys", void 0),
        z(this, "cacheCallTimes", void 0),
        (this.cache = new Map()),
        (this.keys = []),
        (this.cacheCallTimes = 0);
    }
    return (
      Oe(e, [
        {
          key: "size",
          value: function () {
            return this.keys.length;
          },
        },
        {
          key: "internalGet",
          value: function (r) {
            var n,
              o,
              i =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : !1,
              a = { map: this.cache };
            return (
              r.forEach(function (c) {
                if (!a) a = void 0;
                else {
                  var l;
                  a =
                    (l = a) === null ||
                    l === void 0 ||
                    (l = l.map) === null ||
                    l === void 0
                      ? void 0
                      : l.get(c);
                }
              }),
              (n = a) !== null &&
                n !== void 0 &&
                n.value &&
                i &&
                (a.value[1] = this.cacheCallTimes++),
              (o = a) === null || o === void 0 ? void 0 : o.value
            );
          },
        },
        {
          key: "get",
          value: function (r) {
            var n;
            return (n = this.internalGet(r, !0)) === null || n === void 0
              ? void 0
              : n[0];
          },
        },
        {
          key: "has",
          value: function (r) {
            return !!this.internalGet(r);
          },
        },
        {
          key: "set",
          value: function (r, n) {
            var o = this;
            if (!this.has(r)) {
              if (this.size() + 1 > e.MAX_CACHE_SIZE + e.MAX_CACHE_OFFSET) {
                var i = this.keys.reduce(
                    function (s, u) {
                      var f = F(s, 2),
                        d = f[1];
                      return o.internalGet(u)[1] < d
                        ? [u, o.internalGet(u)[1]]
                        : s;
                    },
                    [this.keys[0], this.cacheCallTimes]
                  ),
                  a = F(i, 1),
                  c = a[0];
                this.delete(c);
              }
              this.keys.push(r);
            }
            var l = this.cache;
            r.forEach(function (s, u) {
              if (u === r.length - 1)
                l.set(s, { value: [n, o.cacheCallTimes++] });
              else {
                var f = l.get(s);
                f ? f.map || (f.map = new Map()) : l.set(s, { map: new Map() }),
                  (l = l.get(s).map);
              }
            });
          },
        },
        {
          key: "deleteByPath",
          value: function (r, n) {
            var o = r.get(n[0]);
            if (n.length === 1) {
              var i;
              return (
                o.map ? r.set(n[0], { map: o.map }) : r.delete(n[0]),
                (i = o.value) === null || i === void 0 ? void 0 : i[0]
              );
            }
            var a = this.deleteByPath(o.map, n.slice(1));
            return (
              (!o.map || o.map.size === 0) && !o.value && r.delete(n[0]), a
            );
          },
        },
        {
          key: "delete",
          value: function (r) {
            if (this.has(r))
              return (
                (this.keys = this.keys.filter(function (n) {
                  return !Ya(n, r);
                })),
                this.deleteByPath(this.cache, r)
              );
          },
        },
      ]),
      e
    );
  })();
  z(Ir, "MAX_CACHE_SIZE", 20), z(Ir, "MAX_CACHE_OFFSET", 5);
  var Co = 0,
    Eo = (function () {
      function e(t) {
        we(this, e),
          z(this, "derivatives", void 0),
          z(this, "id", void 0),
          (this.derivatives = Array.isArray(t) ? t : [t]),
          (this.id = Co),
          t.length === 0 &&
            wr(
              t.length > 0,
              "[Ant Design CSS-in-JS] Theme should have at least one derivative function."
            ),
          (Co += 1);
      }
      return (
        Oe(e, [
          {
            key: "getDerivativeToken",
            value: function (r) {
              return this.derivatives.reduce(function (n, o) {
                return o(r, n);
              }, void 0);
            },
          },
        ]),
        e
      );
    })(),
    Lr = new Ir();
  function Rr(e) {
    var t = Array.isArray(e) ? e : [e];
    return Lr.has(t) || Lr.set(t, new Eo(t)), Lr.get(t);
  }
  var Qa = new WeakMap(),
    Nr = {};
  function Za(e, t) {
    for (var r = Qa, n = 0; n < t.length; n += 1) {
      var o = t[n];
      r.has(o) || r.set(o, new WeakMap()), (r = r.get(o));
    }
    return r.has(Nr) || r.set(Nr, e()), r.get(Nr);
  }
  var xo = new WeakMap();
  function St(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
      r = xo.get(e) || "";
    return (
      r ||
        (Object.keys(e).forEach(function (n) {
          var o = e[n];
          (r += n),
            o instanceof Eo
              ? (r += o.id)
              : o && K(o) === "object"
              ? (r += St(o, t))
              : (r += o);
        }),
        t && (r = bt(r)),
        xo.set(e, r)),
      r
    );
  }
  function wo(e, t) {
    return bt("".concat(t, "_").concat(St(e, !0)));
  }
  var kr = Ae();
  function De(e) {
    return typeof e == "number" ? "".concat(e, "px") : e;
  }
  function Dt(e, t, r) {
    var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
      o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
    if (o) return e;
    var i = N(N({}, n), {}, z(z({}, ot, t), ve, r)),
      a = Object.keys(i)
        .map(function (c) {
          var l = i[c];
          return l ? "".concat(c, '="').concat(l, '"') : null;
        })
        .filter(function (c) {
          return c;
        })
        .join(" ");
    return "<style ".concat(a, ">").concat(e, "</style>");
  }
  var zt = function (t) {
      var r =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
      return "--"
        .concat(r ? "".concat(r, "-") : "")
        .concat(t)
        .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
        .replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2")
        .replace(/([a-z])([A-Z0-9])/g, "$1-$2")
        .toLowerCase();
    },
    Ja = function (t, r, n) {
      return Object.keys(t).length
        ? "."
            .concat(r)
            .concat(n != null && n.scope ? ".".concat(n.scope) : "", "{")
            .concat(
              Object.entries(t)
                .map(function (o) {
                  var i = F(o, 2),
                    a = i[0],
                    c = i[1];
                  return "".concat(a, ":").concat(c, ";");
                })
                .join(""),
              "}"
            )
        : "";
    },
    Oo = function (t, r, n) {
      var o = {},
        i = {};
      return (
        Object.entries(t).forEach(function (a) {
          var c,
            l,
            s = F(a, 2),
            u = s[0],
            f = s[1];
          if (n != null && (c = n.preserve) !== null && c !== void 0 && c[u])
            i[u] = f;
          else if (
            (typeof f == "string" || typeof f == "number") &&
            !(n != null && (l = n.ignore) !== null && l !== void 0 && l[u])
          ) {
            var d,
              g = zt(u, n == null ? void 0 : n.prefix);
            (o[g] =
              typeof f == "number" &&
              !(n != null && (d = n.unitless) !== null && d !== void 0 && d[u])
                ? "".concat(f, "px")
                : String(f)),
              (i[u] = "var(".concat(g, ")"));
          }
        }),
        [i, Ja(o, r, { scope: n == null ? void 0 : n.scope })]
      );
    },
    To =
      process.env.NODE_ENV !== "test" && Ae() ? h.useLayoutEffect : h.useEffect,
    ec = function (t, r) {
      var n = h.useRef(!0);
      To(function () {
        return t(n.current);
      }, r),
        To(function () {
          return (
            (n.current = !1),
            function () {
              n.current = !0;
            }
          );
        }, []);
    },
    tc = N({}, h),
    Ao = tc.useInsertionEffect,
    rc = function (t, r, n) {
      h.useMemo(t, n),
        ec(function () {
          return r(!0);
        }, n);
    },
    nc = Ao
      ? function (e, t, r) {
          return Ao(function () {
            return e(), t();
          }, r);
        }
      : rc;
  const oc = nc;
  var ic = N({}, h),
    ac = ic.useInsertionEffect,
    cc = function (t) {
      var r = [],
        n = !1;
      function o(i) {
        if (n) {
          process.env.NODE_ENV !== "production" &&
            wr(
              !1,
              "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect."
            );
          return;
        }
        r.push(i);
      }
      return (
        h.useEffect(function () {
          return (
            (n = !1),
            function () {
              (n = !0),
                r.length &&
                  r.forEach(function (i) {
                    return i();
                  });
            }
          );
        }, t),
        o
      );
    },
    sc = function () {
      return function (t) {
        t();
      };
    },
    lc = typeof ac < "u" ? cc : sc;
  const uc = lc;
  function fc() {
    return !1;
  }
  var Br = !1;
  function dc() {
    return Br;
  }
  const pc = process.env.NODE_ENV === "production" ? fc : dc;
  if (
    process.env.NODE_ENV !== "production" &&
    typeof module < "u" &&
    module &&
    module.hot &&
    typeof window < "u"
  ) {
    var Hr = window;
    if (typeof Hr.webpackHotUpdate == "function") {
      var vc = Hr.webpackHotUpdate;
      Hr.webpackHotUpdate = function () {
        return (
          (Br = !0),
          setTimeout(function () {
            Br = !1;
          }, 0),
          vc.apply(void 0, arguments)
        );
      };
    }
  }
  function Dr(e, t, r, n, o) {
    var i = h.useContext(Ht),
      a = i.cache,
      c = [e].concat(Te(t)),
      l = Mr(c),
      s = uc([l]),
      u = pc(),
      f = function (m) {
        a.opUpdate(l, function (p) {
          var P = p || [void 0, void 0],
            E = F(P, 2),
            M = E[0],
            $ = M === void 0 ? 0 : M,
            O = E[1],
            T = O;
          process.env.NODE_ENV !== "production" &&
            O &&
            u &&
            (n == null || n(T, u), (T = null));
          var S = T || r(),
            _ = [$, S];
          return m ? m(_) : _;
        });
      };
    h.useMemo(
      function () {
        f();
      },
      [l]
    );
    var d = a.opGet(l);
    process.env.NODE_ENV !== "production" && !d && (f(), (d = a.opGet(l)));
    var g = d[1];
    return (
      oc(
        function () {
          o == null || o(g);
        },
        function (C) {
          return (
            f(function (m) {
              var p = F(m, 2),
                P = p[0],
                E = p[1];
              return C && P === 0 && (o == null || o(g)), [P + 1, E];
            }),
            function () {
              a.opUpdate(l, function (m) {
                var p = m || [],
                  P = F(p, 2),
                  E = P[0],
                  M = E === void 0 ? 0 : E,
                  $ = P[1],
                  O = M - 1;
                return O === 0
                  ? (s(function () {
                      (C || !a.opGet(l)) && (n == null || n($, !1));
                    }),
                    null)
                  : [M - 1, $];
              });
            }
          );
        },
        [l]
      ),
      g
    );
  }
  var gc = {},
    hc =
      process.env.NODE_ENV !== "production"
        ? "css-dev-only-do-not-override"
        : "css",
    Ye = new Map();
  function mc(e) {
    Ye.set(e, (Ye.get(e) || 0) + 1);
  }
  function bc(e, t) {
    if (typeof document < "u") {
      var r = document.querySelectorAll(
        "style[".concat(ot, '="').concat(e, '"]')
      );
      r.forEach(function (n) {
        if (n[He] === t) {
          var o;
          (o = n.parentNode) === null || o === void 0 || o.removeChild(n);
        }
      });
    }
  }
  var yc = 0;
  function Sc(e, t) {
    Ye.set(e, (Ye.get(e) || 0) - 1);
    var r = Array.from(Ye.keys()),
      n = r.filter(function (o) {
        var i = Ye.get(o) || 0;
        return i <= 0;
      });
    r.length - n.length > yc &&
      n.forEach(function (o) {
        bc(o, t), Ye.delete(o);
      });
  }
  var Cc = function (t, r, n, o) {
      var i = n.getDerivativeToken(t),
        a = N(N({}, i), r);
      return o && (a = o(a)), a;
    },
    Po = "token";
  function Ec(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      n = x.useContext(Ht),
      o = n.cache.instanceId,
      i = n.container,
      a = r.salt,
      c = a === void 0 ? "" : a,
      l = r.override,
      s = l === void 0 ? gc : l,
      u = r.formatToken,
      f = r.getComputedToken,
      d = r.cssVar,
      g = Za(function () {
        return Object.assign.apply(Object, [{}].concat(Te(t)));
      }, t),
      C = St(g),
      m = St(s),
      p = d ? St(d) : "",
      P = Dr(
        Po,
        [c, e.id, C, m, p],
        function () {
          var E,
            M = f ? f(g, s, e) : Cc(g, s, e, u),
            $ = N({}, M),
            O = "";
          if (d) {
            var T = Oo(M, d.key, {
                prefix: d.prefix,
                ignore: d.ignore,
                unitless: d.unitless,
                preserve: d.preserve,
              }),
              S = F(T, 2);
            (M = S[0]), (O = S[1]);
          }
          var _ = wo(M, c);
          (M._tokenKey = _), ($._tokenKey = wo($, c));
          var k =
            (E = d == null ? void 0 : d.key) !== null && E !== void 0 ? E : _;
          (M._themeKey = k), mc(k);
          var V = "".concat(hc, "-").concat(bt(_));
          return (
            (M._hashId = V), [M, V, $, O, (d == null ? void 0 : d.key) || ""]
          );
        },
        function (E) {
          Sc(E[0]._themeKey, o);
        },
        function (E) {
          var M = F(E, 4),
            $ = M[0],
            O = M[3];
          if (d && O) {
            var T = Ke(O, bt("css-variables-".concat($._themeKey)), {
              mark: ve,
              prepend: "queue",
              attachTo: i,
              priority: -999,
            });
            (T[He] = o), T.setAttribute(ot, $._themeKey);
          }
        }
      );
    return P;
  }
  var xc = function (t, r, n) {
      var o = F(t, 5),
        i = o[2],
        a = o[3],
        c = o[4],
        l = n || {},
        s = l.plain;
      if (!a) return null;
      var u = i._tokenKey,
        f = -999,
        d = {
          "data-rc-order": "prependQueue",
          "data-rc-priority": "".concat(f),
        },
        g = Dt(a, c, u, d, s);
      return [f, u, g];
    },
    wc = {
      animationIterationCount: 1,
      borderImageOutset: 1,
      borderImageSlice: 1,
      borderImageWidth: 1,
      boxFlex: 1,
      boxFlexGroup: 1,
      boxOrdinalGroup: 1,
      columnCount: 1,
      columns: 1,
      flex: 1,
      flexGrow: 1,
      flexPositive: 1,
      flexShrink: 1,
      flexNegative: 1,
      flexOrder: 1,
      gridRow: 1,
      gridRowEnd: 1,
      gridRowSpan: 1,
      gridRowStart: 1,
      gridColumn: 1,
      gridColumnEnd: 1,
      gridColumnSpan: 1,
      gridColumnStart: 1,
      msGridRow: 1,
      msGridRowSpan: 1,
      msGridColumn: 1,
      msGridColumnSpan: 1,
      fontWeight: 1,
      lineHeight: 1,
      opacity: 1,
      order: 1,
      orphans: 1,
      tabSize: 1,
      widows: 1,
      zIndex: 1,
      zoom: 1,
      WebkitLineClamp: 1,
      fillOpacity: 1,
      floodOpacity: 1,
      stopOpacity: 1,
      strokeDasharray: 1,
      strokeDashoffset: 1,
      strokeMiterlimit: 1,
      strokeOpacity: 1,
      strokeWidth: 1,
    },
    _o = "comm",
    $o = "rule",
    Mo = "decl",
    Oc = "@import",
    Tc = "@keyframes",
    Ac = "@layer",
    jo = Math.abs,
    zr = String.fromCharCode;
  function Io(e) {
    return e.trim();
  }
  function Ft(e, t, r) {
    return e.replace(t, r);
  }
  function Pc(e, t, r) {
    return e.indexOf(t, r);
  }
  function Ct(e, t) {
    return e.charCodeAt(t) | 0;
  }
  function Et(e, t, r) {
    return e.slice(t, r);
  }
  function Pe(e) {
    return e.length;
  }
  function _c(e) {
    return e.length;
  }
  function Vt(e, t) {
    return t.push(e), e;
  }
  var Wt = 1,
    it = 1,
    Lo = 0,
    de = 0,
    J = 0,
    at = "";
  function Fr(e, t, r, n, o, i, a, c) {
    return {
      value: e,
      root: t,
      parent: r,
      type: n,
      props: o,
      children: i,
      line: Wt,
      column: it,
      length: a,
      return: "",
      siblings: c,
    };
  }
  function $c() {
    return J;
  }
  function Mc() {
    return (
      (J = de > 0 ? Ct(at, --de) : 0), it--, J === 10 && ((it = 1), Wt--), J
    );
  }
  function ge() {
    return (
      (J = de < Lo ? Ct(at, de++) : 0), it++, J === 10 && ((it = 1), Wt++), J
    );
  }
  function Qe() {
    return Ct(at, de);
  }
  function Gt() {
    return de;
  }
  function Ut(e, t) {
    return Et(at, e, t);
  }
  function Vr(e) {
    switch (e) {
      case 0:
      case 9:
      case 10:
      case 13:
      case 32:
        return 5;
      case 33:
      case 43:
      case 44:
      case 47:
      case 62:
      case 64:
      case 126:
      case 59:
      case 123:
      case 125:
        return 4;
      case 58:
        return 3;
      case 34:
      case 39:
      case 40:
      case 91:
        return 2;
      case 41:
      case 93:
        return 1;
    }
    return 0;
  }
  function jc(e) {
    return (Wt = it = 1), (Lo = Pe((at = e))), (de = 0), [];
  }
  function Ic(e) {
    return (at = ""), e;
  }
  function Wr(e) {
    return Io(Ut(de - 1, Gr(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
  }
  function Lc(e) {
    for (; (J = Qe()) && J < 33; ) ge();
    return Vr(e) > 2 || Vr(J) > 3 ? "" : " ";
  }
  function Rc(e, t) {
    for (
      ;
      --t &&
      ge() &&
      !(J < 48 || J > 102 || (J > 57 && J < 65) || (J > 70 && J < 97));

    );
    return Ut(e, Gt() + (t < 6 && Qe() == 32 && ge() == 32));
  }
  function Gr(e) {
    for (; ge(); )
      switch (J) {
        case e:
          return de;
        case 34:
        case 39:
          e !== 34 && e !== 39 && Gr(J);
          break;
        case 40:
          e === 41 && Gr(e);
          break;
        case 92:
          ge();
          break;
      }
    return de;
  }
  function Nc(e, t) {
    for (; ge() && e + J !== 57; ) if (e + J === 84 && Qe() === 47) break;
    return "/*" + Ut(t, de - 1) + "*" + zr(e === 47 ? e : ge());
  }
  function kc(e) {
    for (; !Vr(Qe()); ) ge();
    return Ut(e, de);
  }
  function Bc(e) {
    return Ic(Xt("", null, null, null, [""], (e = jc(e)), 0, [0], e));
  }
  function Xt(e, t, r, n, o, i, a, c, l) {
    for (
      var s = 0,
        u = 0,
        f = a,
        d = 0,
        g = 0,
        C = 0,
        m = 1,
        p = 1,
        P = 1,
        E = 0,
        M = "",
        $ = o,
        O = i,
        T = n,
        S = M;
      p;

    )
      switch (((C = E), (E = ge()))) {
        case 40:
          if (C != 108 && Ct(S, f - 1) == 58) {
            Pc((S += Ft(Wr(E), "&", "&\f")), "&\f", jo(s ? c[s - 1] : 0)) !=
              -1 && (P = -1);
            break;
          }
        case 34:
        case 39:
        case 91:
          S += Wr(E);
          break;
        case 9:
        case 10:
        case 13:
        case 32:
          S += Lc(C);
          break;
        case 92:
          S += Rc(Gt() - 1, 7);
          continue;
        case 47:
          switch (Qe()) {
            case 42:
            case 47:
              Vt(Hc(Nc(ge(), Gt()), t, r, l), l);
              break;
            default:
              S += "/";
          }
          break;
        case 123 * m:
          c[s++] = Pe(S) * P;
        case 125 * m:
        case 59:
        case 0:
          switch (E) {
            case 0:
            case 125:
              p = 0;
            case 59 + u:
              P == -1 && (S = Ft(S, /\f/g, "")),
                g > 0 &&
                  Pe(S) - f &&
                  Vt(
                    g > 32
                      ? No(S + ";", n, r, f - 1, l)
                      : No(Ft(S, " ", "") + ";", n, r, f - 2, l),
                    l
                  );
              break;
            case 59:
              S += ";";
            default:
              if (
                (Vt(
                  (T = Ro(S, t, r, s, u, o, c, M, ($ = []), (O = []), f, i)),
                  i
                ),
                E === 123)
              )
                if (u === 0) Xt(S, t, T, T, $, i, f, c, O);
                else
                  switch (d === 99 && Ct(S, 3) === 110 ? 100 : d) {
                    case 100:
                    case 108:
                    case 109:
                    case 115:
                      Xt(
                        e,
                        T,
                        T,
                        n &&
                          Vt(Ro(e, T, T, 0, 0, o, c, M, o, ($ = []), f, O), O),
                        o,
                        O,
                        f,
                        c,
                        n ? $ : O
                      );
                      break;
                    default:
                      Xt(S, T, T, T, [""], O, 0, c, O);
                  }
          }
          (s = u = g = 0), (m = P = 1), (M = S = ""), (f = a);
          break;
        case 58:
          (f = 1 + Pe(S)), (g = C);
        default:
          if (m < 1) {
            if (E == 123) --m;
            else if (E == 125 && m++ == 0 && Mc() == 125) continue;
          }
          switch (((S += zr(E)), E * m)) {
            case 38:
              P = u > 0 ? 1 : ((S += "\f"), -1);
              break;
            case 44:
              (c[s++] = (Pe(S) - 1) * P), (P = 1);
              break;
            case 64:
              Qe() === 45 && (S += Wr(ge())),
                (d = Qe()),
                (u = f = Pe((M = S += kc(Gt())))),
                E++;
              break;
            case 45:
              C === 45 && Pe(S) == 2 && (m = 0);
          }
      }
    return i;
  }
  function Ro(e, t, r, n, o, i, a, c, l, s, u, f) {
    for (
      var d = o - 1, g = o === 0 ? i : [""], C = _c(g), m = 0, p = 0, P = 0;
      m < n;
      ++m
    )
      for (var E = 0, M = Et(e, d + 1, (d = jo((p = a[m])))), $ = e; E < C; ++E)
        ($ = Io(p > 0 ? g[E] + " " + M : Ft(M, /&\f/g, g[E]))) && (l[P++] = $);
    return Fr(e, t, r, o === 0 ? $o : c, l, s, u, f);
  }
  function Hc(e, t, r, n) {
    return Fr(e, t, r, _o, zr($c()), Et(e, 2, -2), 0, n);
  }
  function No(e, t, r, n, o) {
    return Fr(e, t, r, Mo, Et(e, 0, n), Et(e, n + 1, -1), n, o);
  }
  function Ur(e, t) {
    for (var r = "", n = 0; n < e.length; n++) r += t(e[n], n, e, t) || "";
    return r;
  }
  function Dc(e, t, r, n) {
    switch (e.type) {
      case Ac:
        if (e.children.length) break;
      case Oc:
      case Mo:
        return (e.return = e.return || e.value);
      case _o:
        return "";
      case Tc:
        return (e.return = e.value + "{" + Ur(e.children, n) + "}");
      case $o:
        if (!Pe((e.value = e.props.join(",")))) return "";
    }
    return Pe((r = Ur(e.children, n)))
      ? (e.return = e.value + "{" + r + "}")
      : "";
  }
  function ko(e, t) {
    var r = t.path,
      n = t.parentSelectors;
    ke(
      !1,
      "[Ant Design CSS-in-JS] "
        .concat(r ? "Error in ".concat(r, ": ") : "")
        .concat(e)
        .concat(n.length ? " Selector: ".concat(n.join(" | ")) : "")
    );
  }
  var zc = function (t, r, n) {
      if (t === "content") {
        var o =
            /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/,
          i = ["normal", "none", "initial", "inherit", "unset"];
        (typeof r != "string" ||
          (i.indexOf(r) === -1 &&
            !o.test(r) &&
            (r.charAt(0) !== r.charAt(r.length - 1) ||
              (r.charAt(0) !== '"' && r.charAt(0) !== "'")))) &&
          ko(
            "You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(
              r,
              "\"'`."
            ),
            n
          );
      }
    },
    Fc = function (t, r, n) {
      t === "animation" &&
        n.hashId &&
        r !== "none" &&
        ko(
          "You seem to be using hashed animation '".concat(
            r,
            "', in which case 'animationName' with Keyframe as value is recommended."
          ),
          n
        );
    },
    Bo = "data-ant-cssinjs-cache-path",
    Ho = "_FILE_STYLE__",
    Ze,
    Do = !0;
  function Vc() {
    if (!Ze && ((Ze = {}), Ae())) {
      var e = document.createElement("div");
      (e.className = Bo),
        (e.style.position = "fixed"),
        (e.style.visibility = "hidden"),
        (e.style.top = "-9999px"),
        document.body.appendChild(e);
      var t = getComputedStyle(e).content || "";
      (t = t.replace(/^"/, "").replace(/"$/, "")),
        t.split(";").forEach(function (o) {
          var i = o.split(":"),
            a = F(i, 2),
            c = a[0],
            l = a[1];
          Ze[c] = l;
        });
      var r = document.querySelector("style[".concat(Bo, "]"));
      if (r) {
        var n;
        (Do = !1),
          (n = r.parentNode) === null || n === void 0 || n.removeChild(r);
      }
      document.body.removeChild(e);
    }
  }
  function Wc(e) {
    return Vc(), !!Ze[e];
  }
  function Gc(e) {
    var t = Ze[e],
      r = null;
    if (t && Ae())
      if (Do) r = Ho;
      else {
        var n = document.querySelector(
          "style[".concat(ve, '="').concat(Ze[e], '"]')
        );
        n ? (r = n.innerHTML) : delete Ze[e];
      }
    return [r, t];
  }
  var zo = "_skip_check_",
    Fo = "_multi_value_";
  function qt(e) {
    var t = Ur(Bc(e), Dc);
    return t.replace(/\{%%%\:[^;];}/g, ";");
  }
  function Uc(e) {
    return K(e) === "object" && e && (zo in e || Fo in e);
  }
  function Xc(e, t, r) {
    if (!t) return e;
    var n = ".".concat(t),
      o = r === "low" ? ":where(".concat(n, ")") : n,
      i = e.split(",").map(function (a) {
        var c,
          l = a.trim().split(/\s+/),
          s = l[0] || "",
          u =
            ((c = s.match(/^\w+/)) === null || c === void 0 ? void 0 : c[0]) ||
            "";
        return (
          (s = "".concat(u).concat(o).concat(s.slice(u.length))),
          [s].concat(Te(l.slice(1))).join(" ")
        );
      });
    return i.join(",");
  }
  var qc = function e(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n =
        arguments.length > 2 && arguments[2] !== void 0
          ? arguments[2]
          : { root: !0, parentSelectors: [] },
      o = n.root,
      i = n.injectHash,
      a = n.parentSelectors,
      c = r.hashId,
      l = r.layer,
      s = r.path,
      u = r.hashPriority,
      f = r.transformers,
      d = f === void 0 ? [] : f,
      g = r.linters,
      C = g === void 0 ? [] : g,
      m = "",
      p = {};
    function P($) {
      var O = $.getName(c);
      if (!p[O]) {
        var T = e($.style, r, { root: !1, parentSelectors: a }),
          S = F(T, 1),
          _ = S[0];
        p[O] = "@keyframes ".concat($.getName(c)).concat(_);
      }
    }
    function E($) {
      var O =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
      return (
        $.forEach(function (T) {
          Array.isArray(T) ? E(T, O) : T && O.push(T);
        }),
        O
      );
    }
    var M = E(Array.isArray(t) ? t : [t]);
    return (
      M.forEach(function ($) {
        var O = typeof $ == "string" && !o ? {} : $;
        if (typeof O == "string")
          m += "".concat(
            O,
            `
`
          );
        else if (O._keyframe) P(O);
        else {
          var T = d.reduce(function (S, _) {
            var k;
            return (
              (_ == null || (k = _.visit) === null || k === void 0
                ? void 0
                : k.call(_, S)) || S
            );
          }, O);
          Object.keys(T).forEach(function (S) {
            var _ = T[S];
            if (
              K(_) === "object" &&
              _ &&
              (S !== "animationName" || !_._keyframe) &&
              !Uc(_)
            ) {
              var k = !1,
                V = S.trim(),
                X = !1;
              (o || i) && c
                ? V.startsWith("@")
                  ? (k = !0)
                  : (V = Xc(S, c, u))
                : o && !c && (V === "&" || V === "") && ((V = ""), (X = !0));
              var D = e(_, r, {
                  root: X,
                  injectHash: k,
                  parentSelectors: [].concat(Te(a), [V]),
                }),
                B = F(D, 2),
                L = B[0],
                W = B[1];
              (p = N(N({}, p), W)), (m += "".concat(V).concat(L));
            } else {
              let b = function (w, j) {
                process.env.NODE_ENV !== "production" &&
                  (K(_) !== "object" || !(_ != null && _[zo])) &&
                  [zc, Fc].concat(Te(C)).forEach(function (H) {
                    return H(w, j, { path: s, hashId: c, parentSelectors: a });
                  });
                var A = w.replace(/[A-Z]/g, function (H) {
                    return "-".concat(H.toLowerCase());
                  }),
                  R = j;
                !wc[w] &&
                  typeof R == "number" &&
                  R !== 0 &&
                  (R = "".concat(R, "px")),
                  w === "animationName" &&
                    j !== null &&
                    j !== void 0 &&
                    j._keyframe &&
                    (P(j), (R = j.getName(c))),
                  (m += "".concat(A, ":").concat(R, ";"));
              };
              var y,
                v =
                  (y = _ == null ? void 0 : _.value) !== null && y !== void 0
                    ? y
                    : _;
              K(_) === "object" &&
              _ !== null &&
              _ !== void 0 &&
              _[Fo] &&
              Array.isArray(v)
                ? v.forEach(function (w) {
                    b(S, w);
                  })
                : b(S, v);
            }
          });
        }
      }),
      o
        ? l &&
          ((m = "@layer ".concat(l.name, " {").concat(m, "}")),
          l.dependencies &&
            (p["@layer ".concat(l.name)] = l.dependencies.map(function ($) {
              return "@layer ".concat($, ", ").concat(l.name, ";");
            }).join(`
`)))
        : (m = "{".concat(m, "}")),
      [m, p]
    );
  };
  function Vo(e, t) {
    return bt("".concat(e.join("%")).concat(t));
  }
  function Kc() {
    return null;
  }
  var Wo = "style";
  function Xr(e, t) {
    var r = e.token,
      n = e.path,
      o = e.hashId,
      i = e.layer,
      a = e.nonce,
      c = e.clientOnly,
      l = e.order,
      s = l === void 0 ? 0 : l,
      u = h.useContext(Ht),
      f = u.autoClear,
      d = u.mock,
      g = u.defaultCache,
      C = u.hashPriority,
      m = u.container,
      p = u.ssrInline,
      P = u.transformers,
      E = u.linters,
      M = u.cache,
      $ = u.layer,
      O = r._tokenKey,
      T = [O];
    $ && T.push("layer"), T.push.apply(T, Te(n));
    var S = kr;
    process.env.NODE_ENV !== "production" &&
      d !== void 0 &&
      (S = d === "client");
    var _ = Dr(
        Wo,
        T,
        function () {
          var B = T.join("|");
          if (Wc(B)) {
            var L = Gc(B),
              W = F(L, 2),
              y = W[0],
              v = W[1];
            if (y) return [y, O, v, {}, c, s];
          }
          var b = t(),
            w = qc(b, {
              hashId: o,
              hashPriority: C,
              layer: $ ? i : void 0,
              path: n.join("-"),
              transformers: P,
              linters: E,
            }),
            j = F(w, 2),
            A = j[0],
            R = j[1],
            H = qt(A),
            q = Vo(T, H);
          return [H, O, q, R, c, s];
        },
        function (B, L) {
          var W = F(B, 3),
            y = W[2];
          (L || f) && kr && bo(y, { mark: ve });
        },
        function (B) {
          var L = F(B, 4),
            W = L[0];
          L[1];
          var y = L[2],
            v = L[3];
          if (S && W !== Ho) {
            var b = {
                mark: ve,
                prepend: $ ? !1 : "queue",
                attachTo: m,
                priority: s,
              },
              w = typeof a == "function" ? a() : a;
            w && (b.csp = { nonce: w });
            var j = [],
              A = [];
            Object.keys(v).forEach(function (H) {
              H.startsWith("@layer") ? j.push(H) : A.push(H);
            }),
              j.forEach(function (H) {
                Ke(
                  qt(v[H]),
                  "_layer-".concat(H),
                  N(N({}, b), {}, { prepend: !0 })
                );
              });
            var R = Ke(W, y, b);
            (R[He] = M.instanceId),
              R.setAttribute(ot, O),
              process.env.NODE_ENV !== "production" &&
                R.setAttribute(Va, T.join("|")),
              A.forEach(function (H) {
                Ke(qt(v[H]), "_effect-".concat(H), b);
              });
          }
        }
      ),
      k = F(_, 3),
      V = k[0],
      X = k[1],
      D = k[2];
    return function (B) {
      var L;
      return (
        !p || S || !g
          ? (L = h.createElement(Kc, null))
          : (L = h.createElement(
              "style",
              nt({}, z(z({}, ot, X), ve, D), {
                dangerouslySetInnerHTML: { __html: V },
              })
            )),
        h.createElement(h.Fragment, null, L, B)
      );
    };
  }
  var Yc = function (t, r, n) {
      var o = F(t, 6),
        i = o[0],
        a = o[1],
        c = o[2],
        l = o[3],
        s = o[4],
        u = o[5],
        f = n || {},
        d = f.plain;
      if (s) return null;
      var g = i,
        C = {
          "data-rc-order": "prependQueue",
          "data-rc-priority": "".concat(u),
        };
      return (
        (g = Dt(i, a, c, C, d)),
        l &&
          Object.keys(l).forEach(function (m) {
            if (!r[m]) {
              r[m] = !0;
              var p = qt(l[m]),
                P = Dt(p, a, "_effect-".concat(m), C, d);
              m.startsWith("@layer") ? (g = P + g) : (g += P);
            }
          }),
        [u, c, g]
      );
    },
    Go = "cssVar",
    Qc = function (t, r) {
      var n = t.key,
        o = t.prefix,
        i = t.unitless,
        a = t.ignore,
        c = t.token,
        l = t.scope,
        s = l === void 0 ? "" : l,
        u = x.useContext(Ht),
        f = u.cache.instanceId,
        d = u.container,
        g = c._tokenKey,
        C = [].concat(Te(t.path), [n, s, g]),
        m = Dr(
          Go,
          C,
          function () {
            var p = r(),
              P = Oo(p, n, { prefix: o, unitless: i, ignore: a, scope: s }),
              E = F(P, 2),
              M = E[0],
              $ = E[1],
              O = Vo(C, $);
            return [M, $, O, n];
          },
          function (p) {
            var P = F(p, 3),
              E = P[2];
            kr && bo(E, { mark: ve });
          },
          function (p) {
            var P = F(p, 3),
              E = P[1],
              M = P[2];
            if (E) {
              var $ = Ke(E, M, {
                mark: ve,
                prepend: "queue",
                attachTo: d,
                priority: -999,
              });
              ($[He] = f), $.setAttribute(ot, n);
            }
          }
        );
      return m;
    },
    Zc = function (t, r, n) {
      var o = F(t, 4),
        i = o[1],
        a = o[2],
        c = o[3],
        l = n || {},
        s = l.plain;
      if (!i) return null;
      var u = -999,
        f = {
          "data-rc-order": "prependQueue",
          "data-rc-priority": "".concat(u),
        },
        d = Dt(i, c, a, f, s);
      return [u, a, d];
    };
  z(z(z({}, Wo, Yc), Po, xc), Go, Zc);
  function ct(e) {
    return (e.notSplit = !0), e;
  }
  ct(["borderTop", "borderBottom"]),
    ct(["borderTop"]),
    ct(["borderBottom"]),
    ct(["borderLeft", "borderRight"]),
    ct(["borderLeft"]),
    ct(["borderRight"]);
  var qr = x.createContext({});
  function Jc(e) {
    return uo(e) || io(e) || Pr(e) || fo();
  }
  function Kr(e, t) {
    for (var r = e, n = 0; n < t.length; n += 1) {
      if (r == null) return;
      r = r[t[n]];
    }
    return r;
  }
  function Uo(e, t, r, n) {
    if (!t.length) return r;
    var o = Jc(t),
      i = o[0],
      a = o.slice(1),
      c;
    return (
      !e && typeof i == "number"
        ? (c = [])
        : Array.isArray(e)
        ? (c = Te(e))
        : (c = N({}, e)),
      n && r === void 0 && a.length === 1
        ? delete c[i][a[0]]
        : (c[i] = Uo(c[i], a, r, n)),
      c
    );
  }
  function Yr(e, t, r) {
    var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
    return t.length && n && r === void 0 && !Kr(e, t.slice(0, -1))
      ? e
      : Uo(e, t, r, n);
  }
  function es(e) {
    return (
      K(e) === "object" &&
      e !== null &&
      Object.getPrototypeOf(e) === Object.prototype
    );
  }
  function Xo(e) {
    return Array.isArray(e) ? [] : {};
  }
  var ts = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
  function rs() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    var n = Xo(t[0]);
    return (
      t.forEach(function (o) {
        function i(a, c) {
          var l = new Set(c),
            s = Kr(o, a),
            u = Array.isArray(s);
          if (u || es(s)) {
            if (!l.has(s)) {
              l.add(s);
              var f = Kr(n, a);
              u
                ? (n = Yr(n, a, []))
                : (!f || K(f) !== "object") && (n = Yr(n, a, Xo(s))),
                ts(s).forEach(function (d) {
                  i([].concat(Te(a), [d]), l);
                });
            }
          } else n = Yr(n, a, s);
        }
        i([]);
      }),
      n
    );
  }
  function qo() {}
  let _e = null;
  function ns() {
    (_e = null), qn();
  }
  let Qr = qo;
  process.env.NODE_ENV !== "production" &&
    (Qr = (e, t, r) => {
      ke(e, `[antd: ${t}] ${r}`), process.env.NODE_ENV === "test" && ns();
    });
  const Ko = h.createContext({}),
    st =
      process.env.NODE_ENV !== "production"
        ? (e) => {
            const { strict: t } = h.useContext(Ko),
              r = (n, o, i) => {
                if (!n)
                  if (t === !1 && o === "deprecated") {
                    const a = _e;
                    _e || (_e = {}),
                      (_e[e] = _e[e] || []),
                      _e[e].includes(i || "") || _e[e].push(i || ""),
                      a ||
                        console.warn(
                          "[antd] There exists deprecated usage in your code:",
                          _e
                        );
                  } else process.env.NODE_ENV !== "production" && Qr(n, e, i);
              };
            return (
              (r.deprecated = (n, o, i, a) => {
                r(
                  n,
                  "deprecated",
                  `\`${o}\` is deprecated. Please use \`${i}\` instead.${
                    a ? ` ${a}` : ""
                  }`
                );
              }),
              r
            );
          }
        : () => {
            const e = () => {};
            return (e.deprecated = qo), e;
          },
    Kt = Qr,
    os = x.createContext(void 0);
  var is = {
      items_per_page: "/ page",
      jump_to: "Go to",
      jump_to_confirm: "confirm",
      page: "Page",
      prev_page: "Previous Page",
      next_page: "Next Page",
      prev_5: "Previous 5 Pages",
      next_5: "Next 5 Pages",
      prev_3: "Previous 3 Pages",
      next_3: "Next 3 Pages",
      page_size: "Page Size",
    },
    as = {
      yearFormat: "YYYY",
      dayFormat: "D",
      cellMeridiemFormat: "A",
      monthBeforeYear: !0,
    },
    cs = N(
      N({}, as),
      {},
      {
        locale: "en_US",
        today: "Today",
        now: "Now",
        backToToday: "Back to today",
        ok: "OK",
        clear: "Clear",
        month: "Month",
        year: "Year",
        timeSelect: "select time",
        dateSelect: "select date",
        weekSelect: "Choose a week",
        monthSelect: "Choose a month",
        yearSelect: "Choose a year",
        decadeSelect: "Choose a decade",
        dateFormat: "M/D/YYYY",
        dateTimeFormat: "M/D/YYYY HH:mm:ss",
        previousMonth: "Previous month (PageUp)",
        nextMonth: "Next month (PageDown)",
        previousYear: "Last year (Control + left)",
        nextYear: "Next year (Control + right)",
        previousDecade: "Last decade",
        nextDecade: "Next decade",
        previousCentury: "Last century",
        nextCentury: "Next century",
      }
    );
  const Yo = {
      placeholder: "Select time",
      rangePlaceholder: ["Start time", "End time"],
    },
    Qo = {
      lang: Object.assign(
        {
          placeholder: "Select date",
          yearPlaceholder: "Select year",
          quarterPlaceholder: "Select quarter",
          monthPlaceholder: "Select month",
          weekPlaceholder: "Select week",
          rangePlaceholder: ["Start date", "End date"],
          rangeYearPlaceholder: ["Start year", "End year"],
          rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
          rangeMonthPlaceholder: ["Start month", "End month"],
          rangeWeekPlaceholder: ["Start week", "End week"],
        },
        cs
      ),
      timePickerLocale: Object.assign({}, Yo),
    },
    le = "${label} is not a valid ${type}",
    Yt = {
      locale: "en",
      Pagination: is,
      DatePicker: Qo,
      TimePicker: Yo,
      Calendar: Qo,
      global: { placeholder: "Please select" },
      Table: {
        filterTitle: "Filter menu",
        filterConfirm: "OK",
        filterReset: "Reset",
        filterEmptyText: "No filters",
        filterCheckall: "Select all items",
        filterSearchPlaceholder: "Search in filters",
        emptyText: "No data",
        selectAll: "Select current page",
        selectInvert: "Invert current page",
        selectNone: "Clear all data",
        selectionAll: "Select all data",
        sortTitle: "Sort",
        expand: "Expand row",
        collapse: "Collapse row",
        triggerDesc: "Click to sort descending",
        triggerAsc: "Click to sort ascending",
        cancelSort: "Click to cancel sorting",
      },
      Tour: { Next: "Next", Previous: "Previous", Finish: "Finish" },
      Modal: { okText: "OK", cancelText: "Cancel", justOkText: "OK" },
      Popconfirm: { okText: "OK", cancelText: "Cancel" },
      Transfer: {
        titles: ["", ""],
        searchPlaceholder: "Search here",
        itemUnit: "item",
        itemsUnit: "items",
        remove: "Remove",
        selectCurrent: "Select current page",
        removeCurrent: "Remove current page",
        selectAll: "Select all data",
        deselectAll: "Deselect all data",
        removeAll: "Remove all data",
        selectInvert: "Invert current page",
      },
      Upload: {
        uploading: "Uploading...",
        removeFile: "Remove file",
        uploadError: "Upload error",
        previewFile: "Preview file",
        downloadFile: "Download file",
      },
      Empty: { description: "No data" },
      Icon: { icon: "icon" },
      Text: {
        edit: "Edit",
        copy: "Copy",
        copied: "Copied",
        expand: "Expand",
        collapse: "Collapse",
      },
      Form: {
        optional: "(optional)",
        defaultValidateMessages: {
          default: "Field validation error for ${label}",
          required: "Please enter ${label}",
          enum: "${label} must be one of [${enum}]",
          whitespace: "${label} cannot be a blank character",
          date: {
            format: "${label} date format is invalid",
            parse: "${label} cannot be converted to a date",
            invalid: "${label} is an invalid date",
          },
          types: {
            string: le,
            method: le,
            array: le,
            object: le,
            number: le,
            date: le,
            boolean: le,
            integer: le,
            float: le,
            regexp: le,
            email: le,
            url: le,
            hex: le,
          },
          string: {
            len: "${label} must be ${len} characters",
            min: "${label} must be at least ${min} characters",
            max: "${label} must be up to ${max} characters",
            range: "${label} must be between ${min}-${max} characters",
          },
          number: {
            len: "${label} must be equal to ${len}",
            min: "${label} must be minimum ${min}",
            max: "${label} must be maximum ${max}",
            range: "${label} must be between ${min}-${max}",
          },
          array: {
            len: "Must be ${len} ${label}",
            min: "At least ${min} ${label}",
            max: "At most ${max} ${label}",
            range: "The amount of ${label} must be between ${min}-${max}",
          },
          pattern: {
            mismatch: "${label} does not match the pattern ${pattern}",
          },
        },
      },
      Image: { preview: "Preview" },
      QRCode: {
        expired: "QR code expired",
        refresh: "Refresh",
        scanned: "Scanned",
      },
      ColorPicker: { presetEmpty: "Empty" },
    };
  Object.assign({}, Yt.Modal);
  let Qt = [];
  const Zo = () =>
    Qt.reduce((e, t) => Object.assign(Object.assign({}, e), t), Yt.Modal);
  function ss(e) {
    if (e) {
      const t = Object.assign({}, e);
      return (
        Qt.push(t),
        Zo(),
        () => {
          (Qt = Qt.filter((r) => r !== t)), Zo();
        }
      );
    }
    Object.assign({}, Yt.Modal);
  }
  const Jo = x.createContext(void 0),
    ei = "internalMark",
    ti = (e) => {
      const { locale: t = {}, children: r, _ANT_MARK__: n } = e;
      if (process.env.NODE_ENV !== "production") {
        const i = st("LocaleProvider");
        process.env.NODE_ENV !== "production" &&
          i(
            n === ei,
            "deprecated",
            "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale"
          );
      }
      h.useEffect(() => ss(t == null ? void 0 : t.Modal), [t]);
      const o = h.useMemo(
        () => Object.assign(Object.assign({}, t), { exist: !0 }),
        [t]
      );
      return h.createElement(Jo.Provider, { value: o }, r);
    };
  process.env.NODE_ENV !== "production" && (ti.displayName = "LocaleProvider");
  function ne(e, t) {
    ls(e) && (e = "100%");
    var r = us(e);
    return (
      (e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e)))),
      r && (e = parseInt(String(e * t), 10) / 100),
      Math.abs(e - t) < 1e-6
        ? 1
        : (t === 360
            ? (e = (e < 0 ? (e % t) + t : e % t) / parseFloat(String(t)))
            : (e = (e % t) / parseFloat(String(t))),
          e)
    );
  }
  function Zt(e) {
    return Math.min(1, Math.max(0, e));
  }
  function ls(e) {
    return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
  }
  function us(e) {
    return typeof e == "string" && e.indexOf("%") !== -1;
  }
  function ri(e) {
    return (e = parseFloat(e)), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
  }
  function Jt(e) {
    return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
  }
  function Je(e) {
    return e.length === 1 ? "0" + e : String(e);
  }
  function fs(e, t, r) {
    return { r: ne(e, 255) * 255, g: ne(t, 255) * 255, b: ne(r, 255) * 255 };
  }
  function ni(e, t, r) {
    (e = ne(e, 255)), (t = ne(t, 255)), (r = ne(r, 255));
    var n = Math.max(e, t, r),
      o = Math.min(e, t, r),
      i = 0,
      a = 0,
      c = (n + o) / 2;
    if (n === o) (a = 0), (i = 0);
    else {
      var l = n - o;
      switch (((a = c > 0.5 ? l / (2 - n - o) : l / (n + o)), n)) {
        case e:
          i = (t - r) / l + (t < r ? 6 : 0);
          break;
        case t:
          i = (r - e) / l + 2;
          break;
        case r:
          i = (e - t) / l + 4;
          break;
      }
      i /= 6;
    }
    return { h: i, s: a, l: c };
  }
  function Zr(e, t, r) {
    return (
      r < 0 && (r += 1),
      r > 1 && (r -= 1),
      r < 1 / 6
        ? e + (t - e) * (6 * r)
        : r < 1 / 2
        ? t
        : r < 2 / 3
        ? e + (t - e) * (2 / 3 - r) * 6
        : e
    );
  }
  function ds(e, t, r) {
    var n, o, i;
    if (((e = ne(e, 360)), (t = ne(t, 100)), (r = ne(r, 100)), t === 0))
      (o = r), (i = r), (n = r);
    else {
      var a = r < 0.5 ? r * (1 + t) : r + t - r * t,
        c = 2 * r - a;
      (n = Zr(c, a, e + 1 / 3)), (o = Zr(c, a, e)), (i = Zr(c, a, e - 1 / 3));
    }
    return { r: n * 255, g: o * 255, b: i * 255 };
  }
  function Jr(e, t, r) {
    (e = ne(e, 255)), (t = ne(t, 255)), (r = ne(r, 255));
    var n = Math.max(e, t, r),
      o = Math.min(e, t, r),
      i = 0,
      a = n,
      c = n - o,
      l = n === 0 ? 0 : c / n;
    if (n === o) i = 0;
    else {
      switch (n) {
        case e:
          i = (t - r) / c + (t < r ? 6 : 0);
          break;
        case t:
          i = (r - e) / c + 2;
          break;
        case r:
          i = (e - t) / c + 4;
          break;
      }
      i /= 6;
    }
    return { h: i, s: l, v: a };
  }
  function ps(e, t, r) {
    (e = ne(e, 360) * 6), (t = ne(t, 100)), (r = ne(r, 100));
    var n = Math.floor(e),
      o = e - n,
      i = r * (1 - t),
      a = r * (1 - o * t),
      c = r * (1 - (1 - o) * t),
      l = n % 6,
      s = [r, a, i, i, c, r][l],
      u = [c, r, r, a, i, i][l],
      f = [i, i, c, r, r, a][l];
    return { r: s * 255, g: u * 255, b: f * 255 };
  }
  function en(e, t, r, n) {
    var o = [
      Je(Math.round(e).toString(16)),
      Je(Math.round(t).toString(16)),
      Je(Math.round(r).toString(16)),
    ];
    return n &&
      o[0].startsWith(o[0].charAt(1)) &&
      o[1].startsWith(o[1].charAt(1)) &&
      o[2].startsWith(o[2].charAt(1))
      ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0)
      : o.join("");
  }
  function vs(e, t, r, n, o) {
    var i = [
      Je(Math.round(e).toString(16)),
      Je(Math.round(t).toString(16)),
      Je(Math.round(r).toString(16)),
      Je(gs(n)),
    ];
    return o &&
      i[0].startsWith(i[0].charAt(1)) &&
      i[1].startsWith(i[1].charAt(1)) &&
      i[2].startsWith(i[2].charAt(1)) &&
      i[3].startsWith(i[3].charAt(1))
      ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) + i[3].charAt(0)
      : i.join("");
  }
  function gs(e) {
    return Math.round(parseFloat(e) * 255).toString(16);
  }
  function oi(e) {
    return ue(e) / 255;
  }
  function ue(e) {
    return parseInt(e, 16);
  }
  function hs(e) {
    return { r: e >> 16, g: (e & 65280) >> 8, b: e & 255 };
  }
  var tn = {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    goldenrod: "#daa520",
    gold: "#ffd700",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavenderblush: "#fff0f5",
    lavender: "#e6e6fa",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    rebeccapurple: "#663399",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32",
  };
  function lt(e) {
    var t = { r: 0, g: 0, b: 0 },
      r = 1,
      n = null,
      o = null,
      i = null,
      a = !1,
      c = !1;
    return (
      typeof e == "string" && (e = ys(e)),
      typeof e == "object" &&
        ($e(e.r) && $e(e.g) && $e(e.b)
          ? ((t = fs(e.r, e.g, e.b)),
            (a = !0),
            (c = String(e.r).substr(-1) === "%" ? "prgb" : "rgb"))
          : $e(e.h) && $e(e.s) && $e(e.v)
          ? ((n = Jt(e.s)),
            (o = Jt(e.v)),
            (t = ps(e.h, n, o)),
            (a = !0),
            (c = "hsv"))
          : $e(e.h) &&
            $e(e.s) &&
            $e(e.l) &&
            ((n = Jt(e.s)),
            (i = Jt(e.l)),
            (t = ds(e.h, n, i)),
            (a = !0),
            (c = "hsl")),
        Object.prototype.hasOwnProperty.call(e, "a") && (r = e.a)),
      (r = ri(r)),
      {
        ok: a,
        format: e.format || c,
        r: Math.min(255, Math.max(t.r, 0)),
        g: Math.min(255, Math.max(t.g, 0)),
        b: Math.min(255, Math.max(t.b, 0)),
        a: r,
      }
    );
  }
  var ms = "[-\\+]?\\d+%?",
    bs = "[-\\+]?\\d*\\.\\d+%?",
    ze = "(?:".concat(bs, ")|(?:").concat(ms, ")"),
    rn = "[\\s|\\(]+("
      .concat(ze, ")[,|\\s]+(")
      .concat(ze, ")[,|\\s]+(")
      .concat(ze, ")\\s*\\)?"),
    nn = "[\\s|\\(]+("
      .concat(ze, ")[,|\\s]+(")
      .concat(ze, ")[,|\\s]+(")
      .concat(ze, ")[,|\\s]+(")
      .concat(ze, ")\\s*\\)?"),
    he = {
      CSS_UNIT: new RegExp(ze),
      rgb: new RegExp("rgb" + rn),
      rgba: new RegExp("rgba" + nn),
      hsl: new RegExp("hsl" + rn),
      hsla: new RegExp("hsla" + nn),
      hsv: new RegExp("hsv" + rn),
      hsva: new RegExp("hsva" + nn),
      hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
      hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    };
  function ys(e) {
    if (((e = e.trim().toLowerCase()), e.length === 0)) return !1;
    var t = !1;
    if (tn[e]) (e = tn[e]), (t = !0);
    else if (e === "transparent")
      return { r: 0, g: 0, b: 0, a: 0, format: "name" };
    var r = he.rgb.exec(e);
    return r
      ? { r: r[1], g: r[2], b: r[3] }
      : ((r = he.rgba.exec(e)),
        r
          ? { r: r[1], g: r[2], b: r[3], a: r[4] }
          : ((r = he.hsl.exec(e)),
            r
              ? { h: r[1], s: r[2], l: r[3] }
              : ((r = he.hsla.exec(e)),
                r
                  ? { h: r[1], s: r[2], l: r[3], a: r[4] }
                  : ((r = he.hsv.exec(e)),
                    r
                      ? { h: r[1], s: r[2], v: r[3] }
                      : ((r = he.hsva.exec(e)),
                        r
                          ? { h: r[1], s: r[2], v: r[3], a: r[4] }
                          : ((r = he.hex8.exec(e)),
                            r
                              ? {
                                  r: ue(r[1]),
                                  g: ue(r[2]),
                                  b: ue(r[3]),
                                  a: oi(r[4]),
                                  format: t ? "name" : "hex8",
                                }
                              : ((r = he.hex6.exec(e)),
                                r
                                  ? {
                                      r: ue(r[1]),
                                      g: ue(r[2]),
                                      b: ue(r[3]),
                                      format: t ? "name" : "hex",
                                    }
                                  : ((r = he.hex4.exec(e)),
                                    r
                                      ? {
                                          r: ue(r[1] + r[1]),
                                          g: ue(r[2] + r[2]),
                                          b: ue(r[3] + r[3]),
                                          a: oi(r[4] + r[4]),
                                          format: t ? "name" : "hex8",
                                        }
                                      : ((r = he.hex3.exec(e)),
                                        r
                                          ? {
                                              r: ue(r[1] + r[1]),
                                              g: ue(r[2] + r[2]),
                                              b: ue(r[3] + r[3]),
                                              format: t ? "name" : "hex",
                                            }
                                          : !1)))))))));
  }
  function $e(e) {
    return !!he.CSS_UNIT.exec(String(e));
  }
  var fe = (function () {
      function e(t, r) {
        t === void 0 && (t = ""), r === void 0 && (r = {});
        var n;
        if (t instanceof e) return t;
        typeof t == "number" && (t = hs(t)), (this.originalInput = t);
        var o = lt(t);
        (this.originalInput = t),
          (this.r = o.r),
          (this.g = o.g),
          (this.b = o.b),
          (this.a = o.a),
          (this.roundA = Math.round(100 * this.a) / 100),
          (this.format =
            (n = r.format) !== null && n !== void 0 ? n : o.format),
          (this.gradientType = r.gradientType),
          this.r < 1 && (this.r = Math.round(this.r)),
          this.g < 1 && (this.g = Math.round(this.g)),
          this.b < 1 && (this.b = Math.round(this.b)),
          (this.isValid = o.ok);
      }
      return (
        (e.prototype.isDark = function () {
          return this.getBrightness() < 128;
        }),
        (e.prototype.isLight = function () {
          return !this.isDark();
        }),
        (e.prototype.getBrightness = function () {
          var t = this.toRgb();
          return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
        }),
        (e.prototype.getLuminance = function () {
          var t = this.toRgb(),
            r,
            n,
            o,
            i = t.r / 255,
            a = t.g / 255,
            c = t.b / 255;
          return (
            i <= 0.03928
              ? (r = i / 12.92)
              : (r = Math.pow((i + 0.055) / 1.055, 2.4)),
            a <= 0.03928
              ? (n = a / 12.92)
              : (n = Math.pow((a + 0.055) / 1.055, 2.4)),
            c <= 0.03928
              ? (o = c / 12.92)
              : (o = Math.pow((c + 0.055) / 1.055, 2.4)),
            0.2126 * r + 0.7152 * n + 0.0722 * o
          );
        }),
        (e.prototype.getAlpha = function () {
          return this.a;
        }),
        (e.prototype.setAlpha = function (t) {
          return (
            (this.a = ri(t)),
            (this.roundA = Math.round(100 * this.a) / 100),
            this
          );
        }),
        (e.prototype.isMonochrome = function () {
          var t = this.toHsl().s;
          return t === 0;
        }),
        (e.prototype.toHsv = function () {
          var t = Jr(this.r, this.g, this.b);
          return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
        }),
        (e.prototype.toHsvString = function () {
          var t = Jr(this.r, this.g, this.b),
            r = Math.round(t.h * 360),
            n = Math.round(t.s * 100),
            o = Math.round(t.v * 100);
          return this.a === 1
            ? "hsv(".concat(r, ", ").concat(n, "%, ").concat(o, "%)")
            : "hsva("
                .concat(r, ", ")
                .concat(n, "%, ")
                .concat(o, "%, ")
                .concat(this.roundA, ")");
        }),
        (e.prototype.toHsl = function () {
          var t = ni(this.r, this.g, this.b);
          return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
        }),
        (e.prototype.toHslString = function () {
          var t = ni(this.r, this.g, this.b),
            r = Math.round(t.h * 360),
            n = Math.round(t.s * 100),
            o = Math.round(t.l * 100);
          return this.a === 1
            ? "hsl(".concat(r, ", ").concat(n, "%, ").concat(o, "%)")
            : "hsla("
                .concat(r, ", ")
                .concat(n, "%, ")
                .concat(o, "%, ")
                .concat(this.roundA, ")");
        }),
        (e.prototype.toHex = function (t) {
          return t === void 0 && (t = !1), en(this.r, this.g, this.b, t);
        }),
        (e.prototype.toHexString = function (t) {
          return t === void 0 && (t = !1), "#" + this.toHex(t);
        }),
        (e.prototype.toHex8 = function (t) {
          return (
            t === void 0 && (t = !1), vs(this.r, this.g, this.b, this.a, t)
          );
        }),
        (e.prototype.toHex8String = function (t) {
          return t === void 0 && (t = !1), "#" + this.toHex8(t);
        }),
        (e.prototype.toHexShortString = function (t) {
          return (
            t === void 0 && (t = !1),
            this.a === 1 ? this.toHexString(t) : this.toHex8String(t)
          );
        }),
        (e.prototype.toRgb = function () {
          return {
            r: Math.round(this.r),
            g: Math.round(this.g),
            b: Math.round(this.b),
            a: this.a,
          };
        }),
        (e.prototype.toRgbString = function () {
          var t = Math.round(this.r),
            r = Math.round(this.g),
            n = Math.round(this.b);
          return this.a === 1
            ? "rgb(".concat(t, ", ").concat(r, ", ").concat(n, ")")
            : "rgba("
                .concat(t, ", ")
                .concat(r, ", ")
                .concat(n, ", ")
                .concat(this.roundA, ")");
        }),
        (e.prototype.toPercentageRgb = function () {
          var t = function (r) {
            return "".concat(Math.round(ne(r, 255) * 100), "%");
          };
          return { r: t(this.r), g: t(this.g), b: t(this.b), a: this.a };
        }),
        (e.prototype.toPercentageRgbString = function () {
          var t = function (r) {
            return Math.round(ne(r, 255) * 100);
          };
          return this.a === 1
            ? "rgb("
                .concat(t(this.r), "%, ")
                .concat(t(this.g), "%, ")
                .concat(t(this.b), "%)")
            : "rgba("
                .concat(t(this.r), "%, ")
                .concat(t(this.g), "%, ")
                .concat(t(this.b), "%, ")
                .concat(this.roundA, ")");
        }),
        (e.prototype.toName = function () {
          if (this.a === 0) return "transparent";
          if (this.a < 1) return !1;
          for (
            var t = "#" + en(this.r, this.g, this.b, !1),
              r = 0,
              n = Object.entries(tn);
            r < n.length;
            r++
          ) {
            var o = n[r],
              i = o[0],
              a = o[1];
            if (t === a) return i;
          }
          return !1;
        }),
        (e.prototype.toString = function (t) {
          var r = !!t;
          t = t ?? this.format;
          var n = !1,
            o = this.a < 1 && this.a >= 0,
            i = !r && o && (t.startsWith("hex") || t === "name");
          return i
            ? t === "name" && this.a === 0
              ? this.toName()
              : this.toRgbString()
            : (t === "rgb" && (n = this.toRgbString()),
              t === "prgb" && (n = this.toPercentageRgbString()),
              (t === "hex" || t === "hex6") && (n = this.toHexString()),
              t === "hex3" && (n = this.toHexString(!0)),
              t === "hex4" && (n = this.toHex8String(!0)),
              t === "hex8" && (n = this.toHex8String()),
              t === "name" && (n = this.toName()),
              t === "hsl" && (n = this.toHslString()),
              t === "hsv" && (n = this.toHsvString()),
              n || this.toHexString());
        }),
        (e.prototype.toNumber = function () {
          return (
            (Math.round(this.r) << 16) +
            (Math.round(this.g) << 8) +
            Math.round(this.b)
          );
        }),
        (e.prototype.clone = function () {
          return new e(this.toString());
        }),
        (e.prototype.lighten = function (t) {
          t === void 0 && (t = 10);
          var r = this.toHsl();
          return (r.l += t / 100), (r.l = Zt(r.l)), new e(r);
        }),
        (e.prototype.brighten = function (t) {
          t === void 0 && (t = 10);
          var r = this.toRgb();
          return (
            (r.r = Math.max(
              0,
              Math.min(255, r.r - Math.round(255 * -(t / 100)))
            )),
            (r.g = Math.max(
              0,
              Math.min(255, r.g - Math.round(255 * -(t / 100)))
            )),
            (r.b = Math.max(
              0,
              Math.min(255, r.b - Math.round(255 * -(t / 100)))
            )),
            new e(r)
          );
        }),
        (e.prototype.darken = function (t) {
          t === void 0 && (t = 10);
          var r = this.toHsl();
          return (r.l -= t / 100), (r.l = Zt(r.l)), new e(r);
        }),
        (e.prototype.tint = function (t) {
          return t === void 0 && (t = 10), this.mix("white", t);
        }),
        (e.prototype.shade = function (t) {
          return t === void 0 && (t = 10), this.mix("black", t);
        }),
        (e.prototype.desaturate = function (t) {
          t === void 0 && (t = 10);
          var r = this.toHsl();
          return (r.s -= t / 100), (r.s = Zt(r.s)), new e(r);
        }),
        (e.prototype.saturate = function (t) {
          t === void 0 && (t = 10);
          var r = this.toHsl();
          return (r.s += t / 100), (r.s = Zt(r.s)), new e(r);
        }),
        (e.prototype.greyscale = function () {
          return this.desaturate(100);
        }),
        (e.prototype.spin = function (t) {
          var r = this.toHsl(),
            n = (r.h + t) % 360;
          return (r.h = n < 0 ? 360 + n : n), new e(r);
        }),
        (e.prototype.mix = function (t, r) {
          r === void 0 && (r = 50);
          var n = this.toRgb(),
            o = new e(t).toRgb(),
            i = r / 100,
            a = {
              r: (o.r - n.r) * i + n.r,
              g: (o.g - n.g) * i + n.g,
              b: (o.b - n.b) * i + n.b,
              a: (o.a - n.a) * i + n.a,
            };
          return new e(a);
        }),
        (e.prototype.analogous = function (t, r) {
          t === void 0 && (t = 6), r === void 0 && (r = 30);
          var n = this.toHsl(),
            o = 360 / r,
            i = [this];
          for (n.h = (n.h - ((o * t) >> 1) + 720) % 360; --t; )
            (n.h = (n.h + o) % 360), i.push(new e(n));
          return i;
        }),
        (e.prototype.complement = function () {
          var t = this.toHsl();
          return (t.h = (t.h + 180) % 360), new e(t);
        }),
        (e.prototype.monochromatic = function (t) {
          t === void 0 && (t = 6);
          for (
            var r = this.toHsv(), n = r.h, o = r.s, i = r.v, a = [], c = 1 / t;
            t--;

          )
            a.push(new e({ h: n, s: o, v: i })), (i = (i + c) % 1);
          return a;
        }),
        (e.prototype.splitcomplement = function () {
          var t = this.toHsl(),
            r = t.h;
          return [
            this,
            new e({ h: (r + 72) % 360, s: t.s, l: t.l }),
            new e({ h: (r + 216) % 360, s: t.s, l: t.l }),
          ];
        }),
        (e.prototype.onBackground = function (t) {
          var r = this.toRgb(),
            n = new e(t).toRgb(),
            o = r.a + n.a * (1 - r.a);
          return new e({
            r: (r.r * r.a + n.r * n.a * (1 - r.a)) / o,
            g: (r.g * r.a + n.g * n.a * (1 - r.a)) / o,
            b: (r.b * r.a + n.b * n.a * (1 - r.a)) / o,
            a: o,
          });
        }),
        (e.prototype.triad = function () {
          return this.polyad(3);
        }),
        (e.prototype.tetrad = function () {
          return this.polyad(4);
        }),
        (e.prototype.polyad = function (t) {
          for (
            var r = this.toHsl(), n = r.h, o = [this], i = 360 / t, a = 1;
            a < t;
            a++
          )
            o.push(new e({ h: (n + a * i) % 360, s: r.s, l: r.l }));
          return o;
        }),
        (e.prototype.equals = function (t) {
          return this.toRgbString() === new e(t).toRgbString();
        }),
        e
      );
    })(),
    er = 2,
    ii = 0.16,
    Ss = 0.05,
    Cs = 0.05,
    Es = 0.15,
    ai = 5,
    ci = 4,
    xs = [
      { index: 7, opacity: 0.15 },
      { index: 6, opacity: 0.25 },
      { index: 5, opacity: 0.3 },
      { index: 5, opacity: 0.45 },
      { index: 5, opacity: 0.65 },
      { index: 5, opacity: 0.85 },
      { index: 4, opacity: 0.9 },
      { index: 3, opacity: 0.95 },
      { index: 2, opacity: 0.97 },
      { index: 1, opacity: 0.98 },
    ];
  function si(e) {
    var t = e.r,
      r = e.g,
      n = e.b,
      o = Jr(t, r, n);
    return { h: o.h * 360, s: o.s, v: o.v };
  }
  function tr(e) {
    var t = e.r,
      r = e.g,
      n = e.b;
    return "#".concat(en(t, r, n, !1));
  }
  function ws(e, t, r) {
    var n = r / 100,
      o = {
        r: (t.r - e.r) * n + e.r,
        g: (t.g - e.g) * n + e.g,
        b: (t.b - e.b) * n + e.b,
      };
    return o;
  }
  function li(e, t, r) {
    var n;
    return (
      Math.round(e.h) >= 60 && Math.round(e.h) <= 240
        ? (n = r ? Math.round(e.h) - er * t : Math.round(e.h) + er * t)
        : (n = r ? Math.round(e.h) + er * t : Math.round(e.h) - er * t),
      n < 0 ? (n += 360) : n >= 360 && (n -= 360),
      n
    );
  }
  function ui(e, t, r) {
    if (e.h === 0 && e.s === 0) return e.s;
    var n;
    return (
      r ? (n = e.s - ii * t) : t === ci ? (n = e.s + ii) : (n = e.s + Ss * t),
      n > 1 && (n = 1),
      r && t === ai && n > 0.1 && (n = 0.1),
      n < 0.06 && (n = 0.06),
      Number(n.toFixed(2))
    );
  }
  function fi(e, t, r) {
    var n;
    return (
      r ? (n = e.v + Cs * t) : (n = e.v - Es * t),
      n > 1 && (n = 1),
      Number(n.toFixed(2))
    );
  }
  function xt(e) {
    for (
      var t =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        r = [],
        n = lt(e),
        o = ai;
      o > 0;
      o -= 1
    ) {
      var i = si(n),
        a = tr(lt({ h: li(i, o, !0), s: ui(i, o, !0), v: fi(i, o, !0) }));
      r.push(a);
    }
    r.push(tr(n));
    for (var c = 1; c <= ci; c += 1) {
      var l = si(n),
        s = tr(lt({ h: li(l, c), s: ui(l, c), v: fi(l, c) }));
      r.push(s);
    }
    return t.theme === "dark"
      ? xs.map(function (u) {
          var f = u.index,
            d = u.opacity,
            g = tr(ws(lt(t.backgroundColor || "#141414"), lt(r[f]), d * 100));
          return g;
        })
      : r;
  }
  var on = {
      red: "#F5222D",
      volcano: "#FA541C",
      orange: "#FA8C16",
      gold: "#FAAD14",
      yellow: "#FADB14",
      lime: "#A0D911",
      green: "#52C41A",
      cyan: "#13C2C2",
      blue: "#1677FF",
      geekblue: "#2F54EB",
      purple: "#722ED1",
      magenta: "#EB2F96",
      grey: "#666666",
    },
    an = [
      "#fff1f0",
      "#ffccc7",
      "#ffa39e",
      "#ff7875",
      "#ff4d4f",
      "#f5222d",
      "#cf1322",
      "#a8071a",
      "#820014",
      "#5c0011",
    ];
  an.primary = an[5];
  var cn = [
    "#fff2e8",
    "#ffd8bf",
    "#ffbb96",
    "#ff9c6e",
    "#ff7a45",
    "#fa541c",
    "#d4380d",
    "#ad2102",
    "#871400",
    "#610b00",
  ];
  cn.primary = cn[5];
  var sn = [
    "#fff7e6",
    "#ffe7ba",
    "#ffd591",
    "#ffc069",
    "#ffa940",
    "#fa8c16",
    "#d46b08",
    "#ad4e00",
    "#873800",
    "#612500",
  ];
  sn.primary = sn[5];
  var ln = [
    "#fffbe6",
    "#fff1b8",
    "#ffe58f",
    "#ffd666",
    "#ffc53d",
    "#faad14",
    "#d48806",
    "#ad6800",
    "#874d00",
    "#613400",
  ];
  ln.primary = ln[5];
  var un = [
    "#feffe6",
    "#ffffb8",
    "#fffb8f",
    "#fff566",
    "#ffec3d",
    "#fadb14",
    "#d4b106",
    "#ad8b00",
    "#876800",
    "#614700",
  ];
  un.primary = un[5];
  var fn = [
    "#fcffe6",
    "#f4ffb8",
    "#eaff8f",
    "#d3f261",
    "#bae637",
    "#a0d911",
    "#7cb305",
    "#5b8c00",
    "#3f6600",
    "#254000",
  ];
  fn.primary = fn[5];
  var dn = [
    "#f6ffed",
    "#d9f7be",
    "#b7eb8f",
    "#95de64",
    "#73d13d",
    "#52c41a",
    "#389e0d",
    "#237804",
    "#135200",
    "#092b00",
  ];
  dn.primary = dn[5];
  var pn = [
    "#e6fffb",
    "#b5f5ec",
    "#87e8de",
    "#5cdbd3",
    "#36cfc9",
    "#13c2c2",
    "#08979c",
    "#006d75",
    "#00474f",
    "#002329",
  ];
  pn.primary = pn[5];
  var rr = [
    "#e6f4ff",
    "#bae0ff",
    "#91caff",
    "#69b1ff",
    "#4096ff",
    "#1677ff",
    "#0958d9",
    "#003eb3",
    "#002c8c",
    "#001d66",
  ];
  rr.primary = rr[5];
  var vn = [
    "#f0f5ff",
    "#d6e4ff",
    "#adc6ff",
    "#85a5ff",
    "#597ef7",
    "#2f54eb",
    "#1d39c4",
    "#10239e",
    "#061178",
    "#030852",
  ];
  vn.primary = vn[5];
  var gn = [
    "#f9f0ff",
    "#efdbff",
    "#d3adf7",
    "#b37feb",
    "#9254de",
    "#722ed1",
    "#531dab",
    "#391085",
    "#22075e",
    "#120338",
  ];
  gn.primary = gn[5];
  var hn = [
    "#fff0f6",
    "#ffd6e7",
    "#ffadd2",
    "#ff85c0",
    "#f759ab",
    "#eb2f96",
    "#c41d7f",
    "#9e1068",
    "#780650",
    "#520339",
  ];
  hn.primary = hn[5];
  var mn = [
    "#a6a6a6",
    "#999999",
    "#8c8c8c",
    "#808080",
    "#737373",
    "#666666",
    "#404040",
    "#1a1a1a",
    "#000000",
    "#000000",
  ];
  mn.primary = mn[5];
  var bn = {
    red: an,
    volcano: cn,
    orange: sn,
    gold: ln,
    yellow: un,
    lime: fn,
    green: dn,
    cyan: pn,
    blue: rr,
    geekblue: vn,
    purple: gn,
    magenta: hn,
    grey: mn,
  };
  const di = {
      blue: "#1677FF",
      purple: "#722ED1",
      cyan: "#13C2C2",
      green: "#52C41A",
      magenta: "#EB2F96",
      pink: "#EB2F96",
      red: "#F5222D",
      orange: "#FA8C16",
      yellow: "#FADB14",
      volcano: "#FA541C",
      geekblue: "#2F54EB",
      gold: "#FAAD14",
      lime: "#A0D911",
    },
    wt = Object.assign(Object.assign({}, di), {
      colorPrimary: "#1677ff",
      colorSuccess: "#52c41a",
      colorWarning: "#faad14",
      colorError: "#ff4d4f",
      colorInfo: "#1677ff",
      colorLink: "",
      colorTextBase: "",
      colorBgBase: "",
      fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
      fontFamilyCode:
        "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
      fontSize: 14,
      lineWidth: 1,
      lineType: "solid",
      motionUnit: 0.1,
      motionBase: 0,
      motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
      motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
      motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
      motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
      motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
      motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
      motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
      motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
      borderRadius: 6,
      sizeUnit: 4,
      sizeStep: 4,
      sizePopupArrow: 16,
      controlHeight: 32,
      zIndexBase: 0,
      zIndexPopupBase: 1e3,
      opacityImage: 1,
      wireframe: !1,
      motion: !0,
    });
  function Os(e, t) {
    let { generateColorPalettes: r, generateNeutralColorPalettes: n } = t;
    const {
        colorSuccess: o,
        colorWarning: i,
        colorError: a,
        colorInfo: c,
        colorPrimary: l,
        colorBgBase: s,
        colorTextBase: u,
      } = e,
      f = r(l),
      d = r(o),
      g = r(i),
      C = r(a),
      m = r(c),
      p = n(s, u),
      P = e.colorLink || e.colorInfo,
      E = r(P);
    return Object.assign(Object.assign({}, p), {
      colorPrimaryBg: f[1],
      colorPrimaryBgHover: f[2],
      colorPrimaryBorder: f[3],
      colorPrimaryBorderHover: f[4],
      colorPrimaryHover: f[5],
      colorPrimary: f[6],
      colorPrimaryActive: f[7],
      colorPrimaryTextHover: f[8],
      colorPrimaryText: f[9],
      colorPrimaryTextActive: f[10],
      colorSuccessBg: d[1],
      colorSuccessBgHover: d[2],
      colorSuccessBorder: d[3],
      colorSuccessBorderHover: d[4],
      colorSuccessHover: d[4],
      colorSuccess: d[6],
      colorSuccessActive: d[7],
      colorSuccessTextHover: d[8],
      colorSuccessText: d[9],
      colorSuccessTextActive: d[10],
      colorErrorBg: C[1],
      colorErrorBgHover: C[2],
      colorErrorBgActive: C[3],
      colorErrorBorder: C[3],
      colorErrorBorderHover: C[4],
      colorErrorHover: C[5],
      colorError: C[6],
      colorErrorActive: C[7],
      colorErrorTextHover: C[8],
      colorErrorText: C[9],
      colorErrorTextActive: C[10],
      colorWarningBg: g[1],
      colorWarningBgHover: g[2],
      colorWarningBorder: g[3],
      colorWarningBorderHover: g[4],
      colorWarningHover: g[4],
      colorWarning: g[6],
      colorWarningActive: g[7],
      colorWarningTextHover: g[8],
      colorWarningText: g[9],
      colorWarningTextActive: g[10],
      colorInfoBg: m[1],
      colorInfoBgHover: m[2],
      colorInfoBorder: m[3],
      colorInfoBorderHover: m[4],
      colorInfoHover: m[4],
      colorInfo: m[6],
      colorInfoActive: m[7],
      colorInfoTextHover: m[8],
      colorInfoText: m[9],
      colorInfoTextActive: m[10],
      colorLinkHover: E[4],
      colorLink: E[6],
      colorLinkActive: E[7],
      colorBgMask: new fe("#000").setAlpha(0.45).toRgbString(),
      colorWhite: "#fff",
    });
  }
  const Ts = (e) => {
    let t = e,
      r = e,
      n = e,
      o = e;
    return (
      e < 6 && e >= 5
        ? (t = e + 1)
        : e < 16 && e >= 6
        ? (t = e + 2)
        : e >= 16 && (t = 16),
      e < 7 && e >= 5
        ? (r = 4)
        : e < 8 && e >= 7
        ? (r = 5)
        : e < 14 && e >= 8
        ? (r = 6)
        : e < 16 && e >= 14
        ? (r = 7)
        : e >= 16 && (r = 8),
      e < 6 && e >= 2 ? (n = 1) : e >= 6 && (n = 2),
      e > 4 && e < 8 ? (o = 4) : e >= 8 && (o = 6),
      {
        borderRadius: e,
        borderRadiusXS: n,
        borderRadiusSM: r,
        borderRadiusLG: t,
        borderRadiusOuter: o,
      }
    );
  };
  function As(e) {
    const { motionUnit: t, motionBase: r, borderRadius: n, lineWidth: o } = e;
    return Object.assign(
      {
        motionDurationFast: `${(r + t).toFixed(1)}s`,
        motionDurationMid: `${(r + t * 2).toFixed(1)}s`,
        motionDurationSlow: `${(r + t * 3).toFixed(1)}s`,
        lineWidthBold: o + 1,
      },
      Ts(n)
    );
  }
  const Ps = (e) => {
    const { controlHeight: t } = e;
    return {
      controlHeightSM: t * 0.75,
      controlHeightXS: t * 0.5,
      controlHeightLG: t * 1.25,
    };
  };
  function nr(e) {
    return (e + 8) / e;
  }
  function _s(e) {
    const t = new Array(10).fill(null).map((r, n) => {
      const o = n - 1,
        i = e * Math.pow(Math.E, o / 5),
        a = n > 1 ? Math.floor(i) : Math.ceil(i);
      return Math.floor(a / 2) * 2;
    });
    return (t[1] = e), t.map((r) => ({ size: r, lineHeight: nr(r) }));
  }
  const $s = (e) => {
    const t = _s(e),
      r = t.map((u) => u.size),
      n = t.map((u) => u.lineHeight),
      o = r[1],
      i = r[0],
      a = r[2],
      c = n[1],
      l = n[0],
      s = n[2];
    return {
      fontSizeSM: i,
      fontSize: o,
      fontSizeLG: a,
      fontSizeXL: r[3],
      fontSizeHeading1: r[6],
      fontSizeHeading2: r[5],
      fontSizeHeading3: r[4],
      fontSizeHeading4: r[3],
      fontSizeHeading5: r[2],
      lineHeight: c,
      lineHeightLG: s,
      lineHeightSM: l,
      fontHeight: Math.round(c * o),
      fontHeightLG: Math.round(s * a),
      fontHeightSM: Math.round(l * i),
      lineHeightHeading1: n[6],
      lineHeightHeading2: n[5],
      lineHeightHeading3: n[4],
      lineHeightHeading4: n[3],
      lineHeightHeading5: n[2],
    };
  };
  function Ms(e) {
    const { sizeUnit: t, sizeStep: r } = e;
    return {
      sizeXXL: t * (r + 8),
      sizeXL: t * (r + 4),
      sizeLG: t * (r + 2),
      sizeMD: t * (r + 1),
      sizeMS: t * r,
      size: t * r,
      sizeSM: t * (r - 1),
      sizeXS: t * (r - 2),
      sizeXXS: t * (r - 3),
    };
  }
  const Me = (e, t) => new fe(e).setAlpha(t).toRgbString(),
    Ot = (e, t) => new fe(e).darken(t).toHexString(),
    js = (e) => {
      const t = xt(e);
      return {
        1: t[0],
        2: t[1],
        3: t[2],
        4: t[3],
        5: t[4],
        6: t[5],
        7: t[6],
        8: t[4],
        9: t[5],
        10: t[6],
      };
    },
    Is = (e, t) => {
      const r = e || "#fff",
        n = t || "#000";
      return {
        colorBgBase: r,
        colorTextBase: n,
        colorText: Me(n, 0.88),
        colorTextSecondary: Me(n, 0.65),
        colorTextTertiary: Me(n, 0.45),
        colorTextQuaternary: Me(n, 0.25),
        colorFill: Me(n, 0.15),
        colorFillSecondary: Me(n, 0.06),
        colorFillTertiary: Me(n, 0.04),
        colorFillQuaternary: Me(n, 0.02),
        colorBgLayout: Ot(r, 4),
        colorBgContainer: Ot(r, 0),
        colorBgElevated: Ot(r, 0),
        colorBgSpotlight: Me(n, 0.85),
        colorBgBlur: "transparent",
        colorBorder: Ot(r, 15),
        colorBorderSecondary: Ot(r, 6),
      };
    };
  function Ls(e) {
    (on.pink = on.magenta), (bn.pink = bn.magenta);
    const t = Object.keys(di)
      .map((r) => {
        const n = e[r] === on[r] ? bn[r] : xt(e[r]);
        return new Array(10)
          .fill(1)
          .reduce(
            (o, i, a) => (
              (o[`${r}-${a + 1}`] = n[a]), (o[`${r}${a + 1}`] = n[a]), o
            ),
            {}
          );
      })
      .reduce((r, n) => ((r = Object.assign(Object.assign({}, r), n)), r), {});
    return Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(
            Object.assign(
              Object.assign(Object.assign({}, e), t),
              Os(e, {
                generateColorPalettes: js,
                generateNeutralColorPalettes: Is,
              })
            ),
            $s(e.fontSize)
          ),
          Ms(e)
        ),
        Ps(e)
      ),
      As(e)
    );
  }
  const pi = Rr(Ls),
    yn = { token: wt, override: { override: wt }, hashed: !0 },
    vi = x.createContext(yn),
    or = "ant",
    gi = "anticon",
    Rs = (e, t) => t || (e ? `${or}-${e}` : or),
    Fe = h.createContext({ getPrefixCls: Rs, iconPrefixCls: gi }),
    Ns = `-ant-${Date.now()}-${Math.random()}`;
  function ks(e, t) {
    const r = {},
      n = (a, c) => {
        let l = a.clone();
        return (l = (c == null ? void 0 : c(l)) || l), l.toRgbString();
      },
      o = (a, c) => {
        const l = new fe(a),
          s = xt(l.toRgbString());
        (r[`${c}-color`] = n(l)),
          (r[`${c}-color-disabled`] = s[1]),
          (r[`${c}-color-hover`] = s[4]),
          (r[`${c}-color-active`] = s[6]),
          (r[`${c}-color-outline`] = l.clone().setAlpha(0.2).toRgbString()),
          (r[`${c}-color-deprecated-bg`] = s[0]),
          (r[`${c}-color-deprecated-border`] = s[2]);
      };
    if (t.primaryColor) {
      o(t.primaryColor, "primary");
      const a = new fe(t.primaryColor),
        c = xt(a.toRgbString());
      c.forEach((s, u) => {
        r[`primary-${u + 1}`] = s;
      }),
        (r["primary-color-deprecated-l-35"] = n(a, (s) => s.lighten(35))),
        (r["primary-color-deprecated-l-20"] = n(a, (s) => s.lighten(20))),
        (r["primary-color-deprecated-t-20"] = n(a, (s) => s.tint(20))),
        (r["primary-color-deprecated-t-50"] = n(a, (s) => s.tint(50))),
        (r["primary-color-deprecated-f-12"] = n(a, (s) =>
          s.setAlpha(s.getAlpha() * 0.12)
        ));
      const l = new fe(c[0]);
      (r["primary-color-active-deprecated-f-30"] = n(l, (s) =>
        s.setAlpha(s.getAlpha() * 0.3)
      )),
        (r["primary-color-active-deprecated-d-02"] = n(l, (s) => s.darken(2)));
    }
    return (
      t.successColor && o(t.successColor, "success"),
      t.warningColor && o(t.warningColor, "warning"),
      t.errorColor && o(t.errorColor, "error"),
      t.infoColor && o(t.infoColor, "info"),
      `
  :root {
    ${Object.keys(r).map((a) => `--${e}-${a}: ${r[a]};`).join(`
`)}
  }
  `.trim()
    );
  }
  function Bs(e, t) {
    const r = ks(e, t);
    Ae()
      ? Ke(r, `${Ns}-dynamic-theme`)
      : process.env.NODE_ENV !== "production" &&
        Kt(
          !1,
          "ConfigProvider",
          "SSR do not support dynamic theme with css variables."
        );
  }
  const ir = h.createContext(!1),
    Hs = (e) => {
      let { children: t, disabled: r } = e;
      const n = h.useContext(ir);
      return h.createElement(ir.Provider, { value: r ?? n }, t);
    },
    ut = h.createContext(void 0),
    Ds = (e) => {
      let { children: t, size: r } = e;
      const n = h.useContext(ut);
      return h.createElement(ut.Provider, { value: r || n }, t);
    };
  function zs() {
    const e = x.useContext(ir),
      t = x.useContext(ut);
    return { componentDisabled: e, componentSize: t };
  }
  const Fs = "5.19.2";
  function Sn(e) {
    return e >= 0 && e <= 255;
  }
  function ar(e, t) {
    const { r, g: n, b: o, a: i } = new fe(e).toRgb();
    if (i < 1) return e;
    const { r: a, g: c, b: l } = new fe(t).toRgb();
    for (let s = 0.01; s <= 1; s += 0.01) {
      const u = Math.round((r - a * (1 - s)) / s),
        f = Math.round((n - c * (1 - s)) / s),
        d = Math.round((o - l * (1 - s)) / s);
      if (Sn(u) && Sn(f) && Sn(d))
        return new fe({
          r: u,
          g: f,
          b: d,
          a: Math.round(s * 100) / 100,
        }).toRgbString();
    }
    return new fe({ r, g: n, b: o, a: 1 }).toRgbString();
  }
  var Vs = function (e, t) {
    var r = {};
    for (var n in e)
      Object.prototype.hasOwnProperty.call(e, n) &&
        t.indexOf(n) < 0 &&
        (r[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
        t.indexOf(n[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
          (r[n[o]] = e[n[o]]);
    return r;
  };
  function hi(e) {
    const { override: t } = e,
      r = Vs(e, ["override"]),
      n = Object.assign({}, t);
    Object.keys(wt).forEach((d) => {
      delete n[d];
    });
    const o = Object.assign(Object.assign({}, r), n),
      i = 480,
      a = 576,
      c = 768,
      l = 992,
      s = 1200,
      u = 1600;
    if (o.motion === !1) {
      const d = "0s";
      (o.motionDurationFast = d),
        (o.motionDurationMid = d),
        (o.motionDurationSlow = d);
    }
    return Object.assign(
      Object.assign(Object.assign({}, o), {
        colorFillContent: o.colorFillSecondary,
        colorFillContentHover: o.colorFill,
        colorFillAlter: o.colorFillQuaternary,
        colorBgContainerDisabled: o.colorFillTertiary,
        colorBorderBg: o.colorBgContainer,
        colorSplit: ar(o.colorBorderSecondary, o.colorBgContainer),
        colorTextPlaceholder: o.colorTextQuaternary,
        colorTextDisabled: o.colorTextQuaternary,
        colorTextHeading: o.colorText,
        colorTextLabel: o.colorTextSecondary,
        colorTextDescription: o.colorTextTertiary,
        colorTextLightSolid: o.colorWhite,
        colorHighlight: o.colorError,
        colorBgTextHover: o.colorFillSecondary,
        colorBgTextActive: o.colorFill,
        colorIcon: o.colorTextTertiary,
        colorIconHover: o.colorText,
        colorErrorOutline: ar(o.colorErrorBg, o.colorBgContainer),
        colorWarningOutline: ar(o.colorWarningBg, o.colorBgContainer),
        fontSizeIcon: o.fontSizeSM,
        lineWidthFocus: o.lineWidth * 4,
        lineWidth: o.lineWidth,
        controlOutlineWidth: o.lineWidth * 2,
        controlInteractiveSize: o.controlHeight / 2,
        controlItemBgHover: o.colorFillTertiary,
        controlItemBgActive: o.colorPrimaryBg,
        controlItemBgActiveHover: o.colorPrimaryBgHover,
        controlItemBgActiveDisabled: o.colorFill,
        controlTmpOutline: o.colorFillQuaternary,
        controlOutline: ar(o.colorPrimaryBg, o.colorBgContainer),
        lineType: o.lineType,
        borderRadius: o.borderRadius,
        borderRadiusXS: o.borderRadiusXS,
        borderRadiusSM: o.borderRadiusSM,
        borderRadiusLG: o.borderRadiusLG,
        fontWeightStrong: 600,
        opacityLoading: 0.65,
        linkDecoration: "none",
        linkHoverDecoration: "none",
        linkFocusDecoration: "none",
        controlPaddingHorizontal: 12,
        controlPaddingHorizontalSM: 8,
        paddingXXS: o.sizeXXS,
        paddingXS: o.sizeXS,
        paddingSM: o.sizeSM,
        padding: o.size,
        paddingMD: o.sizeMD,
        paddingLG: o.sizeLG,
        paddingXL: o.sizeXL,
        paddingContentHorizontalLG: o.sizeLG,
        paddingContentVerticalLG: o.sizeMS,
        paddingContentHorizontal: o.sizeMS,
        paddingContentVertical: o.sizeSM,
        paddingContentHorizontalSM: o.size,
        paddingContentVerticalSM: o.sizeXS,
        marginXXS: o.sizeXXS,
        marginXS: o.sizeXS,
        marginSM: o.sizeSM,
        margin: o.size,
        marginMD: o.sizeMD,
        marginLG: o.sizeLG,
        marginXL: o.sizeXL,
        marginXXL: o.sizeXXL,
        boxShadow: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
        boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
        boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
        screenXS: i,
        screenXSMin: i,
        screenXSMax: a - 1,
        screenSM: a,
        screenSMMin: a,
        screenSMMax: c - 1,
        screenMD: c,
        screenMDMin: c,
        screenMDMax: l - 1,
        screenLG: l,
        screenLGMin: l,
        screenLGMax: s - 1,
        screenXL: s,
        screenXLMin: s,
        screenXLMax: u - 1,
        screenXXL: u,
        screenXXLMin: u,
        boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
        boxShadowCard: `
      0 1px 2px -2px ${new fe("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new fe("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new fe("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,
        boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
        boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
        boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
        boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
        boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
        boxShadowTabsOverflowRight:
          "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
        boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
        boxShadowTabsOverflowBottom:
          "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)",
      }),
      n
    );
  }
  var mi = function (e, t) {
    var r = {};
    for (var n in e)
      Object.prototype.hasOwnProperty.call(e, n) &&
        t.indexOf(n) < 0 &&
        (r[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
        t.indexOf(n[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
          (r[n[o]] = e[n[o]]);
    return r;
  };
  const bi = {
      lineHeight: !0,
      lineHeightSM: !0,
      lineHeightLG: !0,
      lineHeightHeading1: !0,
      lineHeightHeading2: !0,
      lineHeightHeading3: !0,
      lineHeightHeading4: !0,
      lineHeightHeading5: !0,
      opacityLoading: !0,
      fontWeightStrong: !0,
      zIndexPopupBase: !0,
      zIndexBase: !0,
    },
    yi = {
      size: !0,
      sizeSM: !0,
      sizeLG: !0,
      sizeMD: !0,
      sizeXS: !0,
      sizeXXS: !0,
      sizeMS: !0,
      sizeXL: !0,
      sizeXXL: !0,
      sizeUnit: !0,
      sizeStep: !0,
      motionBase: !0,
      motionUnit: !0,
    },
    Ws = {
      screenXS: !0,
      screenXSMin: !0,
      screenXSMax: !0,
      screenSM: !0,
      screenSMMin: !0,
      screenSMMax: !0,
      screenMD: !0,
      screenMDMin: !0,
      screenMDMax: !0,
      screenLG: !0,
      screenLGMin: !0,
      screenLGMax: !0,
      screenXL: !0,
      screenXLMin: !0,
      screenXLMax: !0,
      screenXXL: !0,
      screenXXLMin: !0,
    },
    Si = (e, t, r) => {
      const n = r.getDerivativeToken(e),
        { override: o } = t,
        i = mi(t, ["override"]);
      let a = Object.assign(Object.assign({}, n), { override: o });
      return (
        (a = hi(a)),
        i &&
          Object.entries(i).forEach((c) => {
            let [l, s] = c;
            const { theme: u } = s,
              f = mi(s, ["theme"]);
            let d = f;
            u &&
              (d = Si(
                Object.assign(Object.assign({}, a), f),
                { override: f },
                u
              )),
              (a[l] = d);
          }),
        a
      );
    };
  function et() {
    const {
        token: e,
        hashed: t,
        theme: r,
        override: n,
        cssVar: o,
      } = x.useContext(vi),
      i = `${Fs}-${t || ""}`,
      a = r || pi,
      [c, l, s] = Ec(a, [wt, e], {
        salt: i,
        override: n,
        getComputedToken: Si,
        formatToken: hi,
        cssVar: o && {
          prefix: o.prefix,
          key: o.key,
          unitless: bi,
          ignore: yi,
          preserve: Ws,
        },
      });
    return [a, s, t ? l : "", c, o];
  }
  function cr(e) {
    var t = h.useRef();
    t.current = e;
    var r = h.useCallback(function () {
      for (var n, o = arguments.length, i = new Array(o), a = 0; a < o; a++)
        i[a] = arguments[a];
      return (n = t.current) === null || n === void 0
        ? void 0
        : n.call.apply(n, [t].concat(i));
    }, []);
    return r;
  }
  function Cn(e) {
    var t = h.useRef(!1),
      r = h.useState(e),
      n = F(r, 2),
      o = n[0],
      i = n[1];
    h.useEffect(function () {
      return (
        (t.current = !1),
        function () {
          t.current = !0;
        }
      );
    }, []);
    function a(c, l) {
      (l && t.current) || i(c);
    }
    return [o, a];
  }
  const Gs = 1e3 * 60 * 10;
  let Us = (function () {
    function e() {
      we(this, e),
        (this.map = new Map()),
        (this.objectIDMap = new WeakMap()),
        (this.nextID = 0),
        (this.lastAccessBeat = new Map()),
        (this.accessBeat = 0);
    }
    return Oe(e, [
      {
        key: "set",
        value: function (r, n) {
          this.clear();
          const o = this.getCompositeKey(r);
          this.map.set(o, n), this.lastAccessBeat.set(o, Date.now());
        },
      },
      {
        key: "get",
        value: function (r) {
          const n = this.getCompositeKey(r),
            o = this.map.get(n);
          return (
            this.lastAccessBeat.set(n, Date.now()), (this.accessBeat += 1), o
          );
        },
      },
      {
        key: "getCompositeKey",
        value: function (r) {
          return r
            .map((o) =>
              o && typeof o == "object"
                ? `obj_${this.getObjectID(o)}`
                : `${typeof o}_${o}`
            )
            .join("|");
        },
      },
      {
        key: "getObjectID",
        value: function (r) {
          if (this.objectIDMap.has(r)) return this.objectIDMap.get(r);
          const n = this.nextID;
          return this.objectIDMap.set(r, n), (this.nextID += 1), n;
        },
      },
      {
        key: "clear",
        value: function () {
          if (this.accessBeat > 1e4) {
            const r = Date.now();
            this.lastAccessBeat.forEach((n, o) => {
              r - n > Gs && (this.map.delete(o), this.lastAccessBeat.delete(o));
            }),
              (this.accessBeat = 0);
          }
        },
      },
    ]);
  })();
  const Ci = new Us();
  function Xs(e, t) {
    return x.useMemo(() => {
      const r = Ci.get(t);
      if (r) return r;
      const n = e();
      return Ci.set(t, n), n;
    }, t);
  }
  const qs = () => ({
      display: "inline-flex",
      alignItems: "center",
      color: "inherit",
      fontStyle: "normal",
      lineHeight: 0,
      textAlign: "center",
      textTransform: "none",
      verticalAlign: "-0.125em",
      textRendering: "optimizeLegibility",
      "-webkit-font-smoothing": "antialiased",
      "-moz-osx-font-smoothing": "grayscale",
      "> *": { lineHeight: 1 },
      svg: { display: "inline-block" },
    }),
    Ks = (e) => ({
      a: {
        color: e.colorLink,
        textDecoration: e.linkDecoration,
        backgroundColor: "transparent",
        outline: "none",
        cursor: "pointer",
        transition: `color ${e.motionDurationSlow}`,
        "-webkit-text-decoration-skip": "objects",
        "&:hover": { color: e.colorLinkHover },
        "&:active": { color: e.colorLinkActive },
        "&:active, &:hover": {
          textDecoration: e.linkHoverDecoration,
          outline: 0,
        },
        "&:focus": { textDecoration: e.linkFocusDecoration, outline: 0 },
        "&[disabled]": { color: e.colorTextDisabled, cursor: "not-allowed" },
      },
    }),
    Ys = (e, t, r, n) => {
      const o = `[class^="${t}"], [class*=" ${t}"]`,
        i = r ? `.${r}` : o,
        a = {
          boxSizing: "border-box",
          "&::before, &::after": { boxSizing: "border-box" },
        };
      let c = {};
      return (
        n !== !1 && (c = { fontFamily: e.fontFamily, fontSize: e.fontSize }),
        {
          [i]: Object.assign(Object.assign(Object.assign({}, c), a), {
            [o]: a,
          }),
        }
      );
    },
    Qs = (e) => ({
      outline: `${De(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`,
      outlineOffset: 1,
      transition: "outline-offset 0s, outline 0s",
    }),
    Zs = (e) => ({ "&:focus-visible": Object.assign({}, Qs(e)) });
  function Js(e) {
    return e === "js"
      ? { max: Math.max, min: Math.min }
      : {
          max: function () {
            for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
              r[n] = arguments[n];
            return `max(${r.map((o) => De(o)).join(",")})`;
          },
          min: function () {
            for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
              r[n] = arguments[n];
            return `min(${r.map((o) => De(o)).join(",")})`;
          },
        };
  }
  const Ei =
    process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u";
  let En = !0;
  function ft() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    if (!Ei) return Object.assign.apply(Object, [{}].concat(t));
    En = !1;
    const n = {};
    return (
      t.forEach((o) => {
        Object.keys(o).forEach((a) => {
          Object.defineProperty(n, a, {
            configurable: !0,
            enumerable: !0,
            get: () => o[a],
          });
        });
      }),
      (En = !0),
      n
    );
  }
  const xi = {};
  function el() {}
  const tl = (e) => {
      let t,
        r = e,
        n = el;
      return (
        Ei &&
          typeof Proxy < "u" &&
          ((t = new Set()),
          (r = new Proxy(e, {
            get(o, i) {
              return En && t.add(i), o[i];
            },
          })),
          (n = (o, i) => {
            var a;
            xi[o] = {
              global: Array.from(t),
              component: Object.assign(
                Object.assign(
                  {},
                  (a = xi[o]) === null || a === void 0 ? void 0 : a.component
                ),
                i
              ),
            };
          })),
        { token: r, keys: t, flush: n }
      );
    },
    wi = (e, t) => {
      const [r, n] = et();
      return Xr(
        {
          theme: r,
          token: n,
          hashId: "",
          path: ["ant-design-icons", e],
          nonce: () => (t == null ? void 0 : t.nonce),
          layer: { name: "antd" },
        },
        () => [
          {
            [`.${e}`]: Object.assign(Object.assign({}, qs()), {
              [`.${e} .${e}-icon`]: { display: "block" },
            }),
          },
        ]
      );
    },
    Oi = (e, t, r) => {
      var n;
      return typeof r == "function"
        ? r(ft(t, (n = t[e]) !== null && n !== void 0 ? n : {}))
        : r ?? {};
    },
    Ti = (e, t, r, n) => {
      const o = Object.assign({}, t[e]);
      if (n != null && n.deprecatedTokens) {
        const { deprecatedTokens: a } = n;
        a.forEach((c) => {
          let [l, s] = c;
          var u;
          process.env.NODE_ENV !== "production" &&
            process.env.NODE_ENV !== "production" &&
            ke(
              !(o != null && o[l]),
              `Component Token \`${String(
                l
              )}\` of ${e} is deprecated. Please use \`${String(s)}\` instead.`
            ),
            ((o != null && o[l]) || (o != null && o[s])) &&
              (((u = o[s]) !== null && u !== void 0) ||
                (o[s] = o == null ? void 0 : o[l]));
        });
      }
      const i = Object.assign(Object.assign({}, r), o);
      return (
        Object.keys(i).forEach((a) => {
          i[a] === t[a] && delete i[a];
        }),
        i
      );
    },
    Ai = (e, t) =>
      `${[
        t,
        e
          .replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2")
          .replace(/([a-z])([A-Z])/g, "$1-$2"),
      ]
        .filter(Boolean)
        .join("-")}`;
  function xn(e, t, r) {
    let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const o = Array.isArray(e) ? e : [e, e],
      [i] = o,
      a = o.join("-");
    return function (c) {
      let l =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : c;
      const [s, u, f, d, g] = et(),
        { getPrefixCls: C, iconPrefixCls: m, csp: p } = x.useContext(Fe),
        P = C(),
        E = g ? "css" : "js",
        M = Xs(() => {
          const _ = new Set();
          return (
            g &&
              Object.keys(n.unitless || {}).forEach((k) => {
                _.add(zt(k, g.prefix)), _.add(zt(k, Ai(i, g.prefix)));
              }),
            Ka(E, _)
          );
        }, [E, i, g == null ? void 0 : g.prefix]),
        { max: $, min: O } = Js(E),
        T = {
          theme: s,
          token: d,
          hashId: f,
          nonce: () => (p == null ? void 0 : p.nonce),
          clientOnly: n.clientOnly,
          layer: { name: "antd" },
          order: n.order || -999,
        };
      return (
        Xr(
          Object.assign(Object.assign({}, T), {
            clientOnly: !1,
            path: ["Shared", P],
          }),
          () => [{ "&": Ks(d) }]
        ),
        wi(m, p),
        [
          Xr(Object.assign(Object.assign({}, T), { path: [a, c, m] }), () => {
            if (n.injectStyle === !1) return [];
            const { token: _, flush: k } = tl(d),
              V = Oi(i, u, r),
              X = `.${c}`,
              D = Ti(i, u, V, { deprecatedTokens: n.deprecatedTokens });
            g &&
              Object.keys(V).forEach((W) => {
                V[W] = `var(${zt(W, Ai(i, g.prefix))})`;
              });
            const B = ft(
                _,
                {
                  componentCls: X,
                  prefixCls: c,
                  iconCls: `.${m}`,
                  antCls: `.${P}`,
                  calc: M,
                  max: $,
                  min: O,
                },
                g ? V : D
              ),
              L = t(B, {
                hashId: f,
                prefixCls: c,
                rootPrefixCls: P,
                iconPrefixCls: m,
              });
            return (
              k(i, D),
              [n.resetStyle === !1 ? null : Ys(B, c, l, n.resetFont), L]
            );
          }),
          f,
        ]
      );
    };
  }
  const rl = (e, t, r, n) => {
      const o = xn(e, t, r, Object.assign({ resetStyle: !1, order: -998 }, n)),
        i = (a) => {
          let { prefixCls: c, rootCls: l = c } = a;
          return o(c, l), null;
        };
      return (
        process.env.NODE_ENV !== "production" &&
          (i.displayName = `SubStyle_${Array.isArray(e) ? e.join(".") : e}`),
        i
      );
    },
    nl = (e, t, r) => {
      const { unitless: n, injectStyle: o = !0, prefixToken: i } = r,
        a = (l) => {
          let { rootCls: s, cssVar: u } = l;
          const [, f] = et();
          return (
            Qc(
              {
                path: [e],
                prefix: u.prefix,
                key: u == null ? void 0 : u.key,
                unitless: n,
                ignore: yi,
                token: f,
                scope: s,
              },
              () => {
                const d = Oi(e, f, t),
                  g = Ti(e, f, d, {
                    deprecatedTokens: r == null ? void 0 : r.deprecatedTokens,
                  });
                return (
                  Object.keys(d).forEach((C) => {
                    (g[i(C)] = g[C]), delete g[C];
                  }),
                  g
                );
              }
            ),
            null
          );
        };
      return (l) => {
        const [, , , , s] = et();
        return [
          (u) =>
            o && s
              ? x.createElement(
                  x.Fragment,
                  null,
                  x.createElement(a, { rootCls: l, cssVar: s, component: e }),
                  u
                )
              : u,
          s == null ? void 0 : s.key,
        ];
      };
    },
    ol = (e, t, r, n) => {
      const o = Array.isArray(e) ? e[0] : e;
      function i(f) {
        return `${o}${f.slice(0, 1).toUpperCase()}${f.slice(1)}`;
      }
      const a = (n == null ? void 0 : n.unitless) || {},
        c = Object.assign(Object.assign({}, bi), { [i("zIndexPopup")]: !0 });
      Object.keys(a).forEach((f) => {
        c[i(f)] = a[f];
      });
      const l = Object.assign(Object.assign({}, n), {
          unitless: c,
          prefixToken: i,
        }),
        s = xn(e, t, r, l),
        u = nl(o, r, l);
      return function (f) {
        let d =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : f;
        const [, g] = s(f, d),
          [C, m] = u(d);
        return [C, g, m];
      };
    },
    il = Object.assign({}, h),
    { useId: Pi } = il,
    al = typeof Pi > "u" ? () => "" : Pi;
  function cl(e, t, r) {
    var n, o;
    const i = st("ConfigProvider"),
      a = e || {},
      c =
        a.inherit === !1 || !t
          ? Object.assign(Object.assign({}, yn), {
              hashed:
                (n = t == null ? void 0 : t.hashed) !== null && n !== void 0
                  ? n
                  : yn.hashed,
              cssVar: t == null ? void 0 : t.cssVar,
            })
          : t,
      l = al();
    if (process.env.NODE_ENV !== "production") {
      const s = a.cssVar || c.cssVar,
        u = !!(
          (typeof a.cssVar == "object" &&
            !((o = a.cssVar) === null || o === void 0) &&
            o.key) ||
          l
        );
      process.env.NODE_ENV !== "production" &&
        i(
          !s || u,
          "breaking",
          "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider."
        );
    }
    return Jn(
      () => {
        var s, u;
        if (!e) return t;
        const f = Object.assign({}, c.components);
        Object.keys(e.components || {}).forEach((C) => {
          f[C] = Object.assign(Object.assign({}, f[C]), e.components[C]);
        });
        const d = `css-var-${l.replace(/:/g, "")}`,
          g =
            ((s = a.cssVar) !== null && s !== void 0 ? s : c.cssVar) &&
            Object.assign(
              Object.assign(
                Object.assign(
                  { prefix: r == null ? void 0 : r.prefixCls },
                  typeof c.cssVar == "object" ? c.cssVar : {}
                ),
                typeof a.cssVar == "object" ? a.cssVar : {}
              ),
              {
                key:
                  (typeof a.cssVar == "object" &&
                    ((u = a.cssVar) === null || u === void 0
                      ? void 0
                      : u.key)) ||
                  d,
              }
            );
        return Object.assign(Object.assign(Object.assign({}, c), a), {
          token: Object.assign(Object.assign({}, c.token), a.token),
          components: f,
          cssVar: g,
        });
      },
      [a, c],
      (s, u) =>
        s.some((f, d) => {
          const g = u[d];
          return !Da(f, g, !0);
        })
    );
  }
  var sl = ["children"],
    _i = h.createContext({});
  function ll(e) {
    var t = e.children,
      r = yt(e, sl);
    return h.createElement(_i.Provider, { value: r }, t);
  }
  var ul = (function (e) {
    Lt(r, e);
    var t = Nt(r);
    function r() {
      return we(this, r), t.apply(this, arguments);
    }
    return (
      Oe(r, [
        {
          key: "render",
          value: function () {
            return this.props.children;
          },
        },
      ]),
      r
    );
  })(h.Component);
  function fl(e) {
    var t = h.useReducer(function (c) {
        return c + 1;
      }, 0),
      r = F(t, 2),
      n = r[1],
      o = h.useRef(e),
      i = cr(function () {
        return o.current;
      }),
      a = cr(function (c) {
        (o.current = typeof c == "function" ? c(o.current) : c), n();
      });
    return [i, a];
  }
  var Ve = "none",
    sr = "appear",
    lr = "enter",
    ur = "leave",
    $i = "none",
    me = "prepare",
    dt = "start",
    pt = "active",
    wn = "end",
    Mi = "prepared";
  function ji(e, t) {
    var r = {};
    return (
      (r[e.toLowerCase()] = t.toLowerCase()),
      (r["Webkit".concat(e)] = "webkit".concat(t)),
      (r["Moz".concat(e)] = "moz".concat(t)),
      (r["ms".concat(e)] = "MS".concat(t)),
      (r["O".concat(e)] = "o".concat(t.toLowerCase())),
      r
    );
  }
  function dl(e, t) {
    var r = {
      animationend: ji("Animation", "AnimationEnd"),
      transitionend: ji("Transition", "TransitionEnd"),
    };
    return (
      e &&
        ("AnimationEvent" in t || delete r.animationend.animation,
        "TransitionEvent" in t || delete r.transitionend.transition),
      r
    );
  }
  var pl = dl(Ae(), typeof window < "u" ? window : {}),
    Ii = {};
  if (Ae()) {
    var vl = document.createElement("div");
    Ii = vl.style;
  }
  var fr = {};
  function Li(e) {
    if (fr[e]) return fr[e];
    var t = pl[e];
    if (t)
      for (var r = Object.keys(t), n = r.length, o = 0; o < n; o += 1) {
        var i = r[o];
        if (Object.prototype.hasOwnProperty.call(t, i) && i in Ii)
          return (fr[e] = t[i]), fr[e];
      }
    return "";
  }
  var Ri = Li("animationend"),
    Ni = Li("transitionend"),
    ki = !!(Ri && Ni),
    Bi = Ri || "animationend",
    Hi = Ni || "transitionend";
  function Di(e, t) {
    if (!e) return null;
    if (K(e) === "object") {
      var r = t.replace(/-\w/g, function (n) {
        return n[1].toUpperCase();
      });
      return e[r];
    }
    return "".concat(e, "-").concat(t);
  }
  const gl = function (e) {
    var t = x.useRef();
    function r(o) {
      o && (o.removeEventListener(Hi, e), o.removeEventListener(Bi, e));
    }
    function n(o) {
      t.current && t.current !== o && r(t.current),
        o &&
          o !== t.current &&
          (o.addEventListener(Hi, e),
          o.addEventListener(Bi, e),
          (t.current = o));
    }
    return (
      h.useEffect(function () {
        return function () {
          r(t.current);
        };
      }, []),
      [n, r]
    );
  };
  var zi = Ae() ? x.useLayoutEffect : x.useEffect;
  const hl = function () {
    var e = h.useRef(null);
    function t() {
      Be.cancel(e.current);
    }
    function r(n) {
      var o =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
      t();
      var i = Be(function () {
        o <= 1
          ? n({
              isCanceled: function () {
                return i !== e.current;
              },
            })
          : r(n, o - 1);
      });
      e.current = i;
    }
    return (
      h.useEffect(function () {
        return function () {
          t();
        };
      }, []),
      [r, t]
    );
  };
  var ml = [me, dt, pt, wn],
    bl = [me, Mi],
    Fi = !1,
    yl = !0;
  function Vi(e) {
    return e === pt || e === wn;
  }
  const Sl = function (e, t, r) {
    var n = Cn($i),
      o = F(n, 2),
      i = o[0],
      a = o[1],
      c = hl(),
      l = F(c, 2),
      s = l[0],
      u = l[1];
    function f() {
      a(me, !0);
    }
    var d = t ? bl : ml;
    return (
      zi(
        function () {
          if (i !== $i && i !== wn) {
            var g = d.indexOf(i),
              C = d[g + 1],
              m = r(i);
            m === Fi
              ? a(C, !0)
              : C &&
                s(function (p) {
                  function P() {
                    p.isCanceled() || a(C, !0);
                  }
                  m === !0 ? P() : Promise.resolve(m).then(P);
                });
          }
        },
        [e, i]
      ),
      h.useEffect(function () {
        return function () {
          u();
        };
      }, []),
      [f, i]
    );
  };
  function Cl(e, t, r, n) {
    var o = n.motionEnter,
      i = o === void 0 ? !0 : o,
      a = n.motionAppear,
      c = a === void 0 ? !0 : a,
      l = n.motionLeave,
      s = l === void 0 ? !0 : l,
      u = n.motionDeadline,
      f = n.motionLeaveImmediately,
      d = n.onAppearPrepare,
      g = n.onEnterPrepare,
      C = n.onLeavePrepare,
      m = n.onAppearStart,
      p = n.onEnterStart,
      P = n.onLeaveStart,
      E = n.onAppearActive,
      M = n.onEnterActive,
      $ = n.onLeaveActive,
      O = n.onAppearEnd,
      T = n.onEnterEnd,
      S = n.onLeaveEnd,
      _ = n.onVisibleChanged,
      k = Cn(),
      V = F(k, 2),
      X = V[0],
      D = V[1],
      B = fl(Ve),
      L = F(B, 2),
      W = L[0],
      y = L[1],
      v = Cn(null),
      b = F(v, 2),
      w = b[0],
      j = b[1],
      A = W(),
      R = x.useRef(!1),
      H = x.useRef(null);
    function q() {
      return r();
    }
    var oe = x.useRef(!1);
    function ce() {
      y(Ve), j(null, !0);
    }
    var Q = cr(function (re) {
        var Z = W();
        if (Z !== Ve) {
          var se = q();
          if (!(re && !re.deadline && re.target !== se)) {
            var Se = oe.current,
              Y;
            Z === sr && Se
              ? (Y = O == null ? void 0 : O(se, re))
              : Z === lr && Se
              ? (Y = T == null ? void 0 : T(se, re))
              : Z === ur && Se && (Y = S == null ? void 0 : S(se, re)),
              Se && Y !== !1 && ce();
          }
        }
      }),
      We = gl(Q),
      Ge = F(We, 1),
      tt = Ge[0],
      Ie = function (Z) {
        switch (Z) {
          case sr:
            return z(z(z({}, me, d), dt, m), pt, E);
          case lr:
            return z(z(z({}, me, g), dt, p), pt, M);
          case ur:
            return z(z(z({}, me, C), dt, P), pt, $);
          default:
            return {};
        }
      },
      be = h.useMemo(
        function () {
          return Ie(A);
        },
        [A]
      ),
      Ue = Sl(A, !e, function (re) {
        if (re === me) {
          var Z = be[me];
          return Z ? Z(q()) : Fi;
        }
        if (te in be) {
          var se;
          j(
            ((se = be[te]) === null || se === void 0
              ? void 0
              : se.call(be, q(), null)) || null
          );
        }
        return (
          te === pt &&
            A !== Ve &&
            (tt(q()),
            u > 0 &&
              (clearTimeout(H.current),
              (H.current = setTimeout(function () {
                Q({ deadline: !0 });
              }, u)))),
          te === Mi && ce(),
          yl
        );
      }),
      I = F(Ue, 2),
      Le = I[0],
      te = I[1],
      Re = Vi(te);
    (oe.current = Re),
      zi(
        function () {
          D(t);
          var re = R.current;
          R.current = !0;
          var Z;
          !re && t && c && (Z = sr),
            re && t && i && (Z = lr),
            ((re && !t && s) || (!re && f && !t && s)) && (Z = ur);
          var se = Ie(Z);
          Z && (e || se[me]) ? (y(Z), Le()) : y(Ve);
        },
        [t]
      ),
      x.useEffect(
        function () {
          ((A === sr && !c) || (A === lr && !i) || (A === ur && !s)) && y(Ve);
        },
        [c, i, s]
      ),
      x.useEffect(function () {
        return function () {
          (R.current = !1), clearTimeout(H.current);
        };
      }, []);
    var Xe = h.useRef(!1);
    x.useEffect(
      function () {
        X && (Xe.current = !0),
          X !== void 0 &&
            A === Ve &&
            ((Xe.current || X) && (_ == null || _(X)), (Xe.current = !0));
      },
      [X, A]
    );
    var rt = w;
    return (
      be[me] && te === dt && (rt = N({ transition: "none" }, rt)),
      [A, te, rt, X ?? t]
    );
  }
  function El(e) {
    var t = e;
    K(e) === "object" && (t = e.transitionSupport);
    function r(o, i) {
      return !!(o.motionName && t && i !== !1);
    }
    var n = h.forwardRef(function (o, i) {
      var a = o.visible,
        c = a === void 0 ? !0 : a,
        l = o.removeOnLeave,
        s = l === void 0 ? !0 : l,
        u = o.forceRender,
        f = o.children,
        d = o.motionName,
        g = o.leavedClassName,
        C = o.eventProps,
        m = h.useContext(_i),
        p = m.motion,
        P = r(o, p),
        E = x.useRef(),
        M = x.useRef();
      function $() {
        try {
          return E.current instanceof HTMLElement ? E.current : _a(M.current);
        } catch {
          return null;
        }
      }
      var O = Cl(P, c, $, o),
        T = F(O, 4),
        S = T[0],
        _ = T[1],
        k = T[2],
        V = T[3],
        X = h.useRef(V);
      V && (X.current = !0);
      var D = h.useCallback(
          function (w) {
            (E.current = w), eo(i, w);
          },
          [i]
        ),
        B,
        L = N(N({}, C), {}, { visible: c });
      if (!f) B = null;
      else if (S === Ve)
        V
          ? (B = f(N({}, L), D))
          : !s && X.current && g
          ? (B = f(N(N({}, L), {}, { className: g }), D))
          : u || (!s && !g)
          ? (B = f(N(N({}, L), {}, { style: { display: "none" } }), D))
          : (B = null);
      else {
        var W;
        _ === me
          ? (W = "prepare")
          : Vi(_)
          ? (W = "active")
          : _ === dt && (W = "start");
        var y = Di(d, "".concat(S, "-").concat(W));
        B = f(
          N(
            N({}, L),
            {},
            {
              className: pe(
                Di(d, S),
                z(z({}, y, y && W), d, typeof d == "string")
              ),
              style: k,
            }
          ),
          D
        );
      }
      if (h.isValidElement(B) && to(B)) {
        var v = B,
          b = v.ref;
        b || (B = h.cloneElement(B, { ref: D }));
      }
      return h.createElement(ul, { ref: M }, B);
    });
    return (n.displayName = "CSSMotion"), n;
  }
  const On = El(ki);
  var Tn = "add",
    An = "keep",
    Pn = "remove",
    _n = "removed";
  function xl(e) {
    var t;
    return (
      e && K(e) === "object" && "key" in e ? (t = e) : (t = { key: e }),
      N(N({}, t), {}, { key: String(t.key) })
    );
  }
  function $n() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return e.map(xl);
  }
  function wl() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
      t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
      r = [],
      n = 0,
      o = t.length,
      i = $n(e),
      a = $n(t);
    i.forEach(function (s) {
      for (var u = !1, f = n; f < o; f += 1) {
        var d = a[f];
        if (d.key === s.key) {
          n < f &&
            ((r = r.concat(
              a.slice(n, f).map(function (g) {
                return N(N({}, g), {}, { status: Tn });
              })
            )),
            (n = f)),
            r.push(N(N({}, d), {}, { status: An })),
            (n += 1),
            (u = !0);
          break;
        }
      }
      u || r.push(N(N({}, s), {}, { status: Pn }));
    }),
      n < o &&
        (r = r.concat(
          a.slice(n).map(function (s) {
            return N(N({}, s), {}, { status: Tn });
          })
        ));
    var c = {};
    r.forEach(function (s) {
      var u = s.key;
      c[u] = (c[u] || 0) + 1;
    });
    var l = Object.keys(c).filter(function (s) {
      return c[s] > 1;
    });
    return (
      l.forEach(function (s) {
        (r = r.filter(function (u) {
          var f = u.key,
            d = u.status;
          return f !== s || d !== Pn;
        })),
          r.forEach(function (u) {
            u.key === s && (u.status = An);
          });
      }),
      r
    );
  }
  var Ol = ["component", "children", "onVisibleChanged", "onAllRemoved"],
    Tl = ["status"],
    Al = [
      "eventProps",
      "visible",
      "children",
      "motionName",
      "motionAppear",
      "motionEnter",
      "motionLeave",
      "motionLeaveImmediately",
      "motionDeadline",
      "removeOnLeave",
      "leavedClassName",
      "onAppearPrepare",
      "onAppearStart",
      "onAppearActive",
      "onAppearEnd",
      "onEnterStart",
      "onEnterActive",
      "onEnterEnd",
      "onLeaveStart",
      "onLeaveActive",
      "onLeaveEnd",
    ];
  function Pl(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : On,
      r = (function (n) {
        Lt(i, n);
        var o = Nt(i);
        function i() {
          var a;
          we(this, i);
          for (var c = arguments.length, l = new Array(c), s = 0; s < c; s++)
            l[s] = arguments[s];
          return (
            (a = o.call.apply(o, [this].concat(l))),
            z(qe(a), "state", { keyEntities: [] }),
            z(qe(a), "removeKey", function (u) {
              var f = a.state.keyEntities,
                d = f.map(function (g) {
                  return g.key !== u ? g : N(N({}, g), {}, { status: _n });
                });
              return (
                a.setState({ keyEntities: d }),
                d.filter(function (g) {
                  var C = g.status;
                  return C !== _n;
                }).length
              );
            }),
            a
          );
        }
        return (
          Oe(
            i,
            [
              {
                key: "render",
                value: function () {
                  var c = this,
                    l = this.state.keyEntities,
                    s = this.props,
                    u = s.component,
                    f = s.children,
                    d = s.onVisibleChanged,
                    g = s.onAllRemoved,
                    C = yt(s, Ol),
                    m = u || h.Fragment,
                    p = {};
                  return (
                    Al.forEach(function (P) {
                      (p[P] = C[P]), delete C[P];
                    }),
                    delete C.keys,
                    h.createElement(
                      m,
                      C,
                      l.map(function (P, E) {
                        var M = P.status,
                          $ = yt(P, Tl),
                          O = M === Tn || M === An;
                        return h.createElement(
                          t,
                          nt({}, p, {
                            key: $.key,
                            visible: O,
                            eventProps: $,
                            onVisibleChanged: function (S) {
                              if ((d == null || d(S, { key: $.key }), !S)) {
                                var _ = c.removeKey($.key);
                                _ === 0 && g && g();
                              }
                            },
                          }),
                          function (T, S) {
                            return f(N(N({}, T), {}, { index: E }), S);
                          }
                        );
                      })
                    )
                  );
                },
              },
            ],
            [
              {
                key: "getDerivedStateFromProps",
                value: function (c, l) {
                  var s = c.keys,
                    u = l.keyEntities,
                    f = $n(s),
                    d = wl(u, f);
                  return {
                    keyEntities: d.filter(function (g) {
                      var C = u.find(function (m) {
                        var p = m.key;
                        return g.key === p;
                      });
                      return !(C && C.status === _n && g.status === Pn);
                    }),
                  };
                },
              },
            ]
          ),
          i
        );
      })(h.Component);
    return z(r, "defaultProps", { component: "div" }), r;
  }
  Pl(ki);
  function _l(e) {
    const { children: t } = e,
      [, r] = et(),
      { motion: n } = r,
      o = h.useRef(!1);
    return (
      (o.current = o.current || n === !1),
      o.current ? h.createElement(ll, { motion: n }, t) : t
    );
  }
  const Wi = h.memo((e) => {
    let { dropdownMatchSelectWidth: t } = e;
    return (
      st("ConfigProvider").deprecated(
        t === void 0,
        "dropdownMatchSelectWidth",
        "popupMatchSelectWidth"
      ),
      null
    );
  });
  process.env.NODE_ENV !== "production" && (Wi.displayName = "PropWarning");
  const $l = process.env.NODE_ENV !== "production" ? Wi : () => null;
  var Ml = function (e, t) {
    var r = {};
    for (var n in e)
      Object.prototype.hasOwnProperty.call(e, n) &&
        t.indexOf(n) < 0 &&
        (r[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
        t.indexOf(n[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
          (r[n[o]] = e[n[o]]);
    return r;
  };
  let Mn = !1;
  process.env.NODE_ENV;
  const jl = [
    "getTargetContainer",
    "getPopupContainer",
    "renderEmpty",
    "input",
    "pagination",
    "form",
    "select",
    "button",
  ];
  let Gi;
  function Il() {
    return Gi || or;
  }
  function Ll(e) {
    return Object.keys(e).some((t) => t.endsWith("Color"));
  }
  const Rl = (e) => {
      const { prefixCls: t, iconPrefixCls: r, theme: n, holderRender: o } = e;
      t !== void 0 && (Gi = t),
        n &&
          Ll(n) &&
          (process.env.NODE_ENV !== "production" &&
            Kt(
              !1,
              "ConfigProvider",
              "`config` of css variable theme is not work in v5. Please use new `theme` config instead."
            ),
          Bs(Il(), n));
    },
    Nl = (e) => {
      const {
          children: t,
          csp: r,
          autoInsertSpaceInButton: n,
          alert: o,
          anchor: i,
          form: a,
          locale: c,
          componentSize: l,
          direction: s,
          space: u,
          virtual: f,
          dropdownMatchSelectWidth: d,
          popupMatchSelectWidth: g,
          popupOverflow: C,
          legacyLocale: m,
          parentContext: p,
          iconPrefixCls: P,
          theme: E,
          componentDisabled: M,
          segmented: $,
          statistic: O,
          spin: T,
          calendar: S,
          carousel: _,
          cascader: k,
          collapse: V,
          typography: X,
          checkbox: D,
          descriptions: B,
          divider: L,
          drawer: W,
          skeleton: y,
          steps: v,
          image: b,
          layout: w,
          list: j,
          mentions: A,
          modal: R,
          progress: H,
          result: q,
          slider: oe,
          breadcrumb: ce,
          menu: Q,
          pagination: We,
          input: Ge,
          textArea: tt,
          empty: Ie,
          badge: be,
          radio: Ue,
          rate: I,
          switch: Le,
          transfer: te,
          avatar: Re,
          message: Xe,
          tag: rt,
          table: re,
          card: Z,
          tabs: se,
          timeline: Se,
          timePicker: Y,
          upload: ye,
          notification: $t,
          tree: Yu,
          colorPicker: Qu,
          datePicker: Zu,
          rangePicker: Ju,
          flex: ef,
          wave: tf,
          dropdown: rf,
          warning: nf,
          tour: of,
          floatButtonGroup: af,
          variant: cf,
          inputNumber: sf,
          treeSelect: lf,
        } = e,
        ga = h.useCallback(
          (ee, ae) => {
            const { prefixCls: Ce } = e;
            if (ae) return ae;
            const Ee = Ce || p.getPrefixCls("");
            return ee ? `${Ee}-${ee}` : Ee;
          },
          [p.getPrefixCls, e.prefixCls]
        ),
        Mt = P || p.iconPrefixCls || gi,
        jt = r || p.csp;
      wi(Mt, jt);
      const br = cl(E, p.theme, { prefixCls: ga("") });
      process.env.NODE_ENV !== "production" && (Mn = Mn || !!br);
      const Fn = {
        csp: jt,
        autoInsertSpaceInButton: n,
        alert: o,
        anchor: i,
        locale: c || m,
        direction: s,
        space: u,
        virtual: f,
        popupMatchSelectWidth: g ?? d,
        popupOverflow: C,
        getPrefixCls: ga,
        iconPrefixCls: Mt,
        theme: br,
        segmented: $,
        statistic: O,
        spin: T,
        calendar: S,
        carousel: _,
        cascader: k,
        collapse: V,
        typography: X,
        checkbox: D,
        descriptions: B,
        divider: L,
        drawer: W,
        skeleton: y,
        steps: v,
        image: b,
        input: Ge,
        textArea: tt,
        layout: w,
        list: j,
        mentions: A,
        modal: R,
        progress: H,
        result: q,
        slider: oe,
        breadcrumb: ce,
        menu: Q,
        pagination: We,
        empty: Ie,
        badge: be,
        radio: Ue,
        rate: I,
        switch: Le,
        transfer: te,
        avatar: Re,
        message: Xe,
        tag: rt,
        table: re,
        card: Z,
        tabs: se,
        timeline: Se,
        timePicker: Y,
        upload: ye,
        notification: $t,
        tree: Yu,
        colorPicker: Qu,
        datePicker: Zu,
        rangePicker: Ju,
        flex: ef,
        wave: tf,
        dropdown: rf,
        warning: nf,
        tour: of,
        floatButtonGroup: af,
        variant: cf,
        inputNumber: sf,
        treeSelect: lf,
      };
      process.env.NODE_ENV !== "production" &&
        st("ConfigProvider")(
          !("autoInsertSpaceInButton" in e),
          "deprecated",
          "`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead."
        );
      const ht = Object.assign({}, p);
      Object.keys(Fn).forEach((ee) => {
        Fn[ee] !== void 0 && (ht[ee] = Fn[ee]);
      }),
        jl.forEach((ee) => {
          const ae = e[ee];
          ae && (ht[ee] = ae);
        }),
        typeof n < "u" &&
          (ht.button = Object.assign({ autoInsertSpace: n }, ht.button));
      const mt = Jn(
          () => ht,
          ht,
          (ee, ae) => {
            const Ce = Object.keys(ee),
              Ee = Object.keys(ae);
            return (
              Ce.length !== Ee.length || Ce.some((yr) => ee[yr] !== ae[yr])
            );
          }
        ),
        uf = h.useMemo(() => ({ prefixCls: Mt, csp: jt }), [Mt, jt]);
      let ie = h.createElement(
        h.Fragment,
        null,
        h.createElement($l, { dropdownMatchSelectWidth: d }),
        t
      );
      const ha = h.useMemo(() => {
        var ee, ae, Ce, Ee;
        return rs(
          ((ee = Yt.Form) === null || ee === void 0
            ? void 0
            : ee.defaultValidateMessages) || {},
          ((Ce =
            (ae = mt.locale) === null || ae === void 0 ? void 0 : ae.Form) ===
            null || Ce === void 0
            ? void 0
            : Ce.defaultValidateMessages) || {},
          ((Ee = mt.form) === null || Ee === void 0
            ? void 0
            : Ee.validateMessages) || {},
          (a == null ? void 0 : a.validateMessages) || {}
        );
      }, [mt, a == null ? void 0 : a.validateMessages]);
      Object.keys(ha).length > 0 &&
        (ie = h.createElement(os.Provider, { value: ha }, ie)),
        c && (ie = h.createElement(ti, { locale: c, _ANT_MARK__: ei }, ie)),
        (Mt || jt) && (ie = h.createElement(qr.Provider, { value: uf }, ie)),
        l && (ie = h.createElement(Ds, { size: l }, ie)),
        (ie = h.createElement(_l, null, ie));
      const ff = h.useMemo(() => {
        const ee = br || {},
          { algorithm: ae, token: Ce, components: Ee, cssVar: yr } = ee,
          df = Ml(ee, ["algorithm", "token", "components", "cssVar"]),
          ma = ae && (!Array.isArray(ae) || ae.length > 0) ? Rr(ae) : pi,
          Vn = {};
        Object.entries(Ee || {}).forEach((pf) => {
          let [vf, gf] = pf;
          const Ne = Object.assign({}, gf);
          "algorithm" in Ne &&
            (Ne.algorithm === !0
              ? (Ne.theme = ma)
              : (Array.isArray(Ne.algorithm) ||
                  typeof Ne.algorithm == "function") &&
                (Ne.theme = Rr(Ne.algorithm)),
            delete Ne.algorithm),
            (Vn[vf] = Ne);
        });
        const ba = Object.assign(Object.assign({}, wt), Ce);
        return Object.assign(Object.assign({}, df), {
          theme: ma,
          token: ba,
          components: Vn,
          override: Object.assign({ override: ba }, Vn),
          cssVar: yr,
        });
      }, [br]);
      return (
        E && (ie = h.createElement(vi.Provider, { value: ff }, ie)),
        mt.warning &&
          (ie = h.createElement(Ko.Provider, { value: mt.warning }, ie)),
        M !== void 0 && (ie = h.createElement(Hs, { disabled: M }, ie)),
        h.createElement(Fe.Provider, { value: mt }, ie)
      );
    },
    vt = (e) => {
      const t = h.useContext(Fe),
        r = h.useContext(Jo);
      return h.createElement(
        Nl,
        Object.assign({ parentContext: t, legacyLocale: r }, e)
      );
    };
  (vt.ConfigContext = Fe),
    (vt.SizeContext = ut),
    (vt.config = Rl),
    (vt.useConfig = zs),
    Object.defineProperty(vt, "SizeContext", {
      get: () => (
        process.env.NODE_ENV !== "production" &&
          Kt(
            !1,
            "ConfigProvider",
            "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."
          ),
        ut
      ),
    }),
    process.env.NODE_ENV !== "production" &&
      (vt.displayName = "ConfigProvider");
  function Ui(e) {
    var t;
    return e == null || (t = e.getRootNode) === null || t === void 0
      ? void 0
      : t.call(e);
  }
  function kl(e) {
    return Ui(e) instanceof ShadowRoot;
  }
  function Bl(e) {
    return kl(e) ? Ui(e) : null;
  }
  function Hl(e) {
    return e.replace(/-(.)/g, function (t, r) {
      return r.toUpperCase();
    });
  }
  function Dl(e, t) {
    ke(e, "[@ant-design/icons] ".concat(t));
  }
  function Xi(e) {
    return (
      K(e) === "object" &&
      typeof e.name == "string" &&
      typeof e.theme == "string" &&
      (K(e.icon) === "object" || typeof e.icon == "function")
    );
  }
  function qi() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return Object.keys(e).reduce(function (t, r) {
      var n = e[r];
      switch (r) {
        case "class":
          (t.className = n), delete t.class;
          break;
        default:
          delete t[r], (t[Hl(r)] = n);
      }
      return t;
    }, {});
  }
  function jn(e, t, r) {
    return r
      ? x.createElement(
          e.tag,
          N(N({ key: t }, qi(e.attrs)), r),
          (e.children || []).map(function (n, o) {
            return jn(n, "".concat(t, "-").concat(e.tag, "-").concat(o));
          })
        )
      : x.createElement(
          e.tag,
          N({ key: t }, qi(e.attrs)),
          (e.children || []).map(function (n, o) {
            return jn(n, "".concat(t, "-").concat(e.tag, "-").concat(o));
          })
        );
  }
  function Ki(e) {
    return xt(e)[0];
  }
  function Yi(e) {
    return e ? (Array.isArray(e) ? e : [e]) : [];
  }
  var zl = `
.anticon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,
    Fl = function (t) {
      var r = x.useContext(qr),
        n = r.csp,
        o = r.prefixCls,
        i = zl;
      o && (i = i.replace(/anticon/g, o)),
        x.useEffect(function () {
          var a = t.current,
            c = Bl(a);
          Ke(i, "@ant-design-icons", { prepend: !0, csp: n, attachTo: c });
        }, []);
    },
    Vl = [
      "icon",
      "className",
      "onClick",
      "style",
      "primaryColor",
      "secondaryColor",
    ],
    Tt = { primaryColor: "#333", secondaryColor: "#E6E6E6", calculated: !1 };
  function Wl(e) {
    var t = e.primaryColor,
      r = e.secondaryColor;
    (Tt.primaryColor = t),
      (Tt.secondaryColor = r || Ki(t)),
      (Tt.calculated = !!r);
  }
  function Gl() {
    return N({}, Tt);
  }
  var gt = function (t) {
    var r = t.icon,
      n = t.className,
      o = t.onClick,
      i = t.style,
      a = t.primaryColor,
      c = t.secondaryColor,
      l = yt(t, Vl),
      s = h.useRef(),
      u = Tt;
    if (
      (a && (u = { primaryColor: a, secondaryColor: c || Ki(a) }),
      Fl(s),
      Dl(Xi(r), "icon should be icon definiton, but got ".concat(r)),
      !Xi(r))
    )
      return null;
    var f = r;
    return (
      f &&
        typeof f.icon == "function" &&
        (f = N(
          N({}, f),
          {},
          { icon: f.icon(u.primaryColor, u.secondaryColor) }
        )),
      jn(
        f.icon,
        "svg-".concat(f.name),
        N(
          N(
            {
              className: n,
              onClick: o,
              style: i,
              "data-icon": f.name,
              width: "1em",
              height: "1em",
              fill: "currentColor",
              "aria-hidden": "true",
            },
            l
          ),
          {},
          { ref: s }
        )
      )
    );
  };
  (gt.displayName = "IconReact"),
    (gt.getTwoToneColors = Gl),
    (gt.setTwoToneColors = Wl);
  function Qi(e) {
    var t = Yi(e),
      r = F(t, 2),
      n = r[0],
      o = r[1];
    return gt.setTwoToneColors({ primaryColor: n, secondaryColor: o });
  }
  function Ul() {
    var e = gt.getTwoToneColors();
    return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
  }
  var Xl = [
    "className",
    "icon",
    "spin",
    "rotate",
    "tabIndex",
    "onClick",
    "twoToneColor",
  ];
  Qi(rr.primary);
  var dr = h.forwardRef(function (e, t) {
    var r = e.className,
      n = e.icon,
      o = e.spin,
      i = e.rotate,
      a = e.tabIndex,
      c = e.onClick,
      l = e.twoToneColor,
      s = yt(e, Xl),
      u = h.useContext(qr),
      f = u.prefixCls,
      d = f === void 0 ? "anticon" : f,
      g = u.rootClassName,
      C = pe(
        g,
        d,
        z(
          z({}, "".concat(d, "-").concat(n.name), !!n.name),
          "".concat(d, "-spin"),
          !!o || n.name === "loading"
        ),
        r
      ),
      m = a;
    m === void 0 && c && (m = -1);
    var p = i
        ? {
            msTransform: "rotate(".concat(i, "deg)"),
            transform: "rotate(".concat(i, "deg)"),
          }
        : void 0,
      P = Yi(l),
      E = F(P, 2),
      M = E[0],
      $ = E[1];
    return h.createElement(
      "span",
      nt({ role: "img", "aria-label": n.name }, s, {
        ref: t,
        tabIndex: m,
        onClick: c,
        className: C,
      }),
      h.createElement(gt, {
        icon: n,
        primaryColor: M,
        secondaryColor: $,
        style: p,
      })
    );
  });
  (dr.displayName = "AntdIcon"),
    (dr.getTwoToneColor = Ul),
    (dr.setTwoToneColor = Qi);
  function ql(e) {
    return e && x.isValidElement(e) && e.type === x.Fragment;
  }
  const Kl = (e, t, r) =>
    x.isValidElement(e)
      ? x.cloneElement(e, typeof r == "function" ? r(e.props || {}) : r)
      : t;
  function Zi(e, t) {
    return Kl(e, e, t);
  }
  var Yl = {
      icon: {
        tag: "svg",
        attrs: { viewBox: "0 0 1024 1024", focusable: "false" },
        children: [
          {
            tag: "path",
            attrs: {
              d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z",
            },
          },
        ],
      },
      name: "loading",
      theme: "outlined",
    },
    Ql = function (t, r) {
      return h.createElement(dr, nt({}, t, { ref: r, icon: Yl }));
    },
    Ji = h.forwardRef(Ql);
  process.env.NODE_ENV !== "production" && (Ji.displayName = "LoadingOutlined");
  function At() {
    At = function () {
      return t;
    };
    var e,
      t = {},
      r = Object.prototype,
      n = r.hasOwnProperty,
      o =
        Object.defineProperty ||
        function (y, v, b) {
          y[v] = b.value;
        },
      i = typeof Symbol == "function" ? Symbol : {},
      a = i.iterator || "@@iterator",
      c = i.asyncIterator || "@@asyncIterator",
      l = i.toStringTag || "@@toStringTag";
    function s(y, v, b) {
      return (
        Object.defineProperty(y, v, {
          value: b,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        }),
        y[v]
      );
    }
    try {
      s({}, "");
    } catch {
      s = function (b, w, j) {
        return (b[w] = j);
      };
    }
    function u(y, v, b, w) {
      var j = v && v.prototype instanceof P ? v : P,
        A = Object.create(j.prototype),
        R = new L(w || []);
      return o(A, "_invoke", { value: V(y, b, R) }), A;
    }
    function f(y, v, b) {
      try {
        return { type: "normal", arg: y.call(v, b) };
      } catch (w) {
        return { type: "throw", arg: w };
      }
    }
    t.wrap = u;
    var d = "suspendedStart",
      g = "suspendedYield",
      C = "executing",
      m = "completed",
      p = {};
    function P() {}
    function E() {}
    function M() {}
    var $ = {};
    s($, a, function () {
      return this;
    });
    var O = Object.getPrototypeOf,
      T = O && O(O(W([])));
    T && T !== r && n.call(T, a) && ($ = T);
    var S = (M.prototype = P.prototype = Object.create($));
    function _(y) {
      ["next", "throw", "return"].forEach(function (v) {
        s(y, v, function (b) {
          return this._invoke(v, b);
        });
      });
    }
    function k(y, v) {
      function b(j, A, R, H) {
        var q = f(y[j], y, A);
        if (q.type !== "throw") {
          var oe = q.arg,
            ce = oe.value;
          return ce && K(ce) == "object" && n.call(ce, "__await")
            ? v.resolve(ce.__await).then(
                function (Q) {
                  b("next", Q, R, H);
                },
                function (Q) {
                  b("throw", Q, R, H);
                }
              )
            : v.resolve(ce).then(
                function (Q) {
                  (oe.value = Q), R(oe);
                },
                function (Q) {
                  return b("throw", Q, R, H);
                }
              );
        }
        H(q.arg);
      }
      var w;
      o(this, "_invoke", {
        value: function (A, R) {
          function H() {
            return new v(function (q, oe) {
              b(A, R, q, oe);
            });
          }
          return (w = w ? w.then(H, H) : H());
        },
      });
    }
    function V(y, v, b) {
      var w = d;
      return function (j, A) {
        if (w === C) throw Error("Generator is already running");
        if (w === m) {
          if (j === "throw") throw A;
          return { value: e, done: !0 };
        }
        for (b.method = j, b.arg = A; ; ) {
          var R = b.delegate;
          if (R) {
            var H = X(R, b);
            if (H) {
              if (H === p) continue;
              return H;
            }
          }
          if (b.method === "next") b.sent = b._sent = b.arg;
          else if (b.method === "throw") {
            if (w === d) throw ((w = m), b.arg);
            b.dispatchException(b.arg);
          } else b.method === "return" && b.abrupt("return", b.arg);
          w = C;
          var q = f(y, v, b);
          if (q.type === "normal") {
            if (((w = b.done ? m : g), q.arg === p)) continue;
            return { value: q.arg, done: b.done };
          }
          q.type === "throw" &&
            ((w = m), (b.method = "throw"), (b.arg = q.arg));
        }
      };
    }
    function X(y, v) {
      var b = v.method,
        w = y.iterator[b];
      if (w === e)
        return (
          (v.delegate = null),
          (b === "throw" &&
            y.iterator.return &&
            ((v.method = "return"),
            (v.arg = e),
            X(y, v),
            v.method === "throw")) ||
            (b !== "return" &&
              ((v.method = "throw"),
              (v.arg = new TypeError(
                "The iterator does not provide a '" + b + "' method"
              )))),
          p
        );
      var j = f(w, y.iterator, v.arg);
      if (j.type === "throw")
        return (v.method = "throw"), (v.arg = j.arg), (v.delegate = null), p;
      var A = j.arg;
      return A
        ? A.done
          ? ((v[y.resultName] = A.value),
            (v.next = y.nextLoc),
            v.method !== "return" && ((v.method = "next"), (v.arg = e)),
            (v.delegate = null),
            p)
          : A
        : ((v.method = "throw"),
          (v.arg = new TypeError("iterator result is not an object")),
          (v.delegate = null),
          p);
    }
    function D(y) {
      var v = { tryLoc: y[0] };
      1 in y && (v.catchLoc = y[1]),
        2 in y && ((v.finallyLoc = y[2]), (v.afterLoc = y[3])),
        this.tryEntries.push(v);
    }
    function B(y) {
      var v = y.completion || {};
      (v.type = "normal"), delete v.arg, (y.completion = v);
    }
    function L(y) {
      (this.tryEntries = [{ tryLoc: "root" }]),
        y.forEach(D, this),
        this.reset(!0);
    }
    function W(y) {
      if (y || y === "") {
        var v = y[a];
        if (v) return v.call(y);
        if (typeof y.next == "function") return y;
        if (!isNaN(y.length)) {
          var b = -1,
            w = function j() {
              for (; ++b < y.length; )
                if (n.call(y, b)) return (j.value = y[b]), (j.done = !1), j;
              return (j.value = e), (j.done = !0), j;
            };
          return (w.next = w);
        }
      }
      throw new TypeError(K(y) + " is not iterable");
    }
    return (
      (E.prototype = M),
      o(S, "constructor", { value: M, configurable: !0 }),
      o(M, "constructor", { value: E, configurable: !0 }),
      (E.displayName = s(M, l, "GeneratorFunction")),
      (t.isGeneratorFunction = function (y) {
        var v = typeof y == "function" && y.constructor;
        return (
          !!v && (v === E || (v.displayName || v.name) === "GeneratorFunction")
        );
      }),
      (t.mark = function (y) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(y, M)
            : ((y.__proto__ = M), s(y, l, "GeneratorFunction")),
          (y.prototype = Object.create(S)),
          y
        );
      }),
      (t.awrap = function (y) {
        return { __await: y };
      }),
      _(k.prototype),
      s(k.prototype, c, function () {
        return this;
      }),
      (t.AsyncIterator = k),
      (t.async = function (y, v, b, w, j) {
        j === void 0 && (j = Promise);
        var A = new k(u(y, v, b, w), j);
        return t.isGeneratorFunction(v)
          ? A
          : A.next().then(function (R) {
              return R.done ? R.value : A.next();
            });
      }),
      _(S),
      s(S, l, "Generator"),
      s(S, a, function () {
        return this;
      }),
      s(S, "toString", function () {
        return "[object Generator]";
      }),
      (t.keys = function (y) {
        var v = Object(y),
          b = [];
        for (var w in v) b.push(w);
        return (
          b.reverse(),
          function j() {
            for (; b.length; ) {
              var A = b.pop();
              if (A in v) return (j.value = A), (j.done = !1), j;
            }
            return (j.done = !0), j;
          }
        );
      }),
      (t.values = W),
      (L.prototype = {
        constructor: L,
        reset: function (v) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = e),
            (this.done = !1),
            (this.delegate = null),
            (this.method = "next"),
            (this.arg = e),
            this.tryEntries.forEach(B),
            !v)
          )
            for (var b in this)
              b.charAt(0) === "t" &&
                n.call(this, b) &&
                !isNaN(+b.slice(1)) &&
                (this[b] = e);
        },
        stop: function () {
          this.done = !0;
          var v = this.tryEntries[0].completion;
          if (v.type === "throw") throw v.arg;
          return this.rval;
        },
        dispatchException: function (v) {
          if (this.done) throw v;
          var b = this;
          function w(oe, ce) {
            return (
              (R.type = "throw"),
              (R.arg = v),
              (b.next = oe),
              ce && ((b.method = "next"), (b.arg = e)),
              !!ce
            );
          }
          for (var j = this.tryEntries.length - 1; j >= 0; --j) {
            var A = this.tryEntries[j],
              R = A.completion;
            if (A.tryLoc === "root") return w("end");
            if (A.tryLoc <= this.prev) {
              var H = n.call(A, "catchLoc"),
                q = n.call(A, "finallyLoc");
              if (H && q) {
                if (this.prev < A.catchLoc) return w(A.catchLoc, !0);
                if (this.prev < A.finallyLoc) return w(A.finallyLoc);
              } else if (H) {
                if (this.prev < A.catchLoc) return w(A.catchLoc, !0);
              } else {
                if (!q) throw Error("try statement without catch or finally");
                if (this.prev < A.finallyLoc) return w(A.finallyLoc);
              }
            }
          }
        },
        abrupt: function (v, b) {
          for (var w = this.tryEntries.length - 1; w >= 0; --w) {
            var j = this.tryEntries[w];
            if (
              j.tryLoc <= this.prev &&
              n.call(j, "finallyLoc") &&
              this.prev < j.finallyLoc
            ) {
              var A = j;
              break;
            }
          }
          A &&
            (v === "break" || v === "continue") &&
            A.tryLoc <= b &&
            b <= A.finallyLoc &&
            (A = null);
          var R = A ? A.completion : {};
          return (
            (R.type = v),
            (R.arg = b),
            A
              ? ((this.method = "next"), (this.next = A.finallyLoc), p)
              : this.complete(R)
          );
        },
        complete: function (v, b) {
          if (v.type === "throw") throw v.arg;
          return (
            v.type === "break" || v.type === "continue"
              ? (this.next = v.arg)
              : v.type === "return"
              ? ((this.rval = this.arg = v.arg),
                (this.method = "return"),
                (this.next = "end"))
              : v.type === "normal" && b && (this.next = b),
            p
          );
        },
        finish: function (v) {
          for (var b = this.tryEntries.length - 1; b >= 0; --b) {
            var w = this.tryEntries[b];
            if (w.finallyLoc === v)
              return this.complete(w.completion, w.afterLoc), B(w), p;
          }
        },
        catch: function (v) {
          for (var b = this.tryEntries.length - 1; b >= 0; --b) {
            var w = this.tryEntries[b];
            if (w.tryLoc === v) {
              var j = w.completion;
              if (j.type === "throw") {
                var A = j.arg;
                B(w);
              }
              return A;
            }
          }
          throw Error("illegal catch attempt");
        },
        delegateYield: function (v, b, w) {
          return (
            (this.delegate = { iterator: W(v), resultName: b, nextLoc: w }),
            this.method === "next" && (this.arg = e),
            p
          );
        },
      }),
      t
    );
  }
  function ea(e, t, r, n, o, i, a) {
    try {
      var c = e[i](a),
        l = c.value;
    } catch (s) {
      return void r(s);
    }
    c.done ? t(l) : Promise.resolve(l).then(n, o);
  }
  function ta(e) {
    return function () {
      var t = this,
        r = arguments;
      return new Promise(function (n, o) {
        var i = e.apply(t, r);
        function a(l) {
          ea(i, n, o, a, c, "next", l);
        }
        function c(l) {
          ea(i, n, o, a, c, "throw", l);
        }
        a(void 0);
      });
    };
  }
  var Pt = N({}, ya),
    Zl = Pt.version,
    Jl = Pt.render,
    eu = Pt.unmountComponentAtNode,
    pr;
  try {
    var tu = Number((Zl || "").split(".")[0]);
    tu >= 18 && (pr = Pt.createRoot);
  } catch {}
  function ra(e) {
    var t = Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    t && K(t) === "object" && (t.usingClientEntryPoint = e);
  }
  var vr = "__rc_react_root__";
  function ru(e, t) {
    ra(!0);
    var r = t[vr] || pr(t);
    ra(!1), r.render(e), (t[vr] = r);
  }
  function nu(e, t) {
    Jl(e, t);
  }
  function ou(e, t) {
    if (pr) {
      ru(e, t);
      return;
    }
    nu(e, t);
  }
  function iu(e) {
    return In.apply(this, arguments);
  }
  function In() {
    return (
      (In = ta(
        At().mark(function e(t) {
          return At().wrap(function (n) {
            for (;;)
              switch ((n.prev = n.next)) {
                case 0:
                  return n.abrupt(
                    "return",
                    Promise.resolve().then(function () {
                      var o;
                      (o = t[vr]) === null || o === void 0 || o.unmount(),
                        delete t[vr];
                    })
                  );
                case 1:
                case "end":
                  return n.stop();
              }
          }, e);
        })
      )),
      In.apply(this, arguments)
    );
  }
  function au(e) {
    eu(e);
  }
  function cu(e) {
    return Ln.apply(this, arguments);
  }
  function Ln() {
    return (
      (Ln = ta(
        At().mark(function e(t) {
          return At().wrap(function (n) {
            for (;;)
              switch ((n.prev = n.next)) {
                case 0:
                  if (pr === void 0) {
                    n.next = 2;
                    break;
                  }
                  return n.abrupt("return", iu(t));
                case 2:
                  au(t);
                case 3:
                case "end":
                  return n.stop();
              }
          }, e);
        })
      )),
      Ln.apply(this, arguments)
    );
  }
  const su = function (e) {
      if (!e) return !1;
      if (e instanceof Element) {
        if (e.offsetParent) return !0;
        if (e.getBBox) {
          var t = e.getBBox(),
            r = t.width,
            n = t.height;
          if (r || n) return !0;
        }
        if (e.getBoundingClientRect) {
          var o = e.getBoundingClientRect(),
            i = o.width,
            a = o.height;
          if (i || a) return !0;
        }
      }
      return !1;
    },
    lu = (e) => {
      const { componentCls: t, colorPrimary: r } = e;
      return {
        [t]: {
          position: "absolute",
          background: "transparent",
          pointerEvents: "none",
          boxSizing: "border-box",
          color: `var(--wave-color, ${r})`,
          boxShadow: "0 0 0 0 currentcolor",
          opacity: 0.2,
          "&.wave-motion-appear": {
            transition: [
              `box-shadow 0.4s ${e.motionEaseOutCirc}`,
              `opacity 2s ${e.motionEaseOutCirc}`,
            ].join(","),
            "&-active": { boxShadow: "0 0 0 6px currentcolor", opacity: 0 },
            "&.wave-quick": {
              transition: [
                `box-shadow ${e.motionDurationSlow} ${e.motionEaseInOut}`,
                `opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`,
              ].join(","),
            },
          },
        },
      };
    },
    uu = xn("Wave", (e) => [lu(e)]),
    na = `${or}-wave-target`;
  function fu(e) {
    const t = (e || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
    return t && t[1] && t[2] && t[3] ? !(t[1] === t[2] && t[2] === t[3]) : !0;
  }
  function Rn(e) {
    return (
      e &&
      e !== "#fff" &&
      e !== "#ffffff" &&
      e !== "rgb(255, 255, 255)" &&
      e !== "rgba(255, 255, 255, 1)" &&
      fu(e) &&
      !/rgba\((?:\d*, ){3}0\)/.test(e) &&
      e !== "transparent"
    );
  }
  function du(e) {
    const {
      borderTopColor: t,
      borderColor: r,
      backgroundColor: n,
    } = getComputedStyle(e);
    return Rn(t) ? t : Rn(r) ? r : Rn(n) ? n : null;
  }
  function Nn(e) {
    return Number.isNaN(e) ? 0 : e;
  }
  const pu = (e) => {
      const { className: t, target: r, component: n } = e,
        o = h.useRef(null),
        [i, a] = h.useState(null),
        [c, l] = h.useState([]),
        [s, u] = h.useState(0),
        [f, d] = h.useState(0),
        [g, C] = h.useState(0),
        [m, p] = h.useState(0),
        [P, E] = h.useState(!1),
        M = {
          left: s,
          top: f,
          width: g,
          height: m,
          borderRadius: c.map((T) => `${T}px`).join(" "),
        };
      i && (M["--wave-color"] = i);
      function $() {
        const T = getComputedStyle(r);
        a(du(r));
        const S = T.position === "static",
          { borderLeftWidth: _, borderTopWidth: k } = T;
        u(S ? r.offsetLeft : Nn(-parseFloat(_))),
          d(S ? r.offsetTop : Nn(-parseFloat(k))),
          C(r.offsetWidth),
          p(r.offsetHeight);
        const {
          borderTopLeftRadius: V,
          borderTopRightRadius: X,
          borderBottomLeftRadius: D,
          borderBottomRightRadius: B,
        } = T;
        l([V, X, B, D].map((L) => Nn(parseFloat(L))));
      }
      if (
        (h.useEffect(() => {
          if (r) {
            const T = Be(() => {
              $(), E(!0);
            });
            let S;
            return (
              typeof ResizeObserver < "u" &&
                ((S = new ResizeObserver($)), S.observe(r)),
              () => {
                Be.cancel(T), S == null || S.disconnect();
              }
            );
          }
        }, []),
        !P)
      )
        return null;
      const O =
        (n === "Checkbox" || n === "Radio") &&
        (r == null ? void 0 : r.classList.contains(na));
      return h.createElement(
        On,
        {
          visible: !0,
          motionAppear: !0,
          motionName: "wave-motion",
          motionDeadline: 5e3,
          onAppearEnd: (T, S) => {
            var _;
            if (S.deadline || S.propertyName === "opacity") {
              const k =
                (_ = o.current) === null || _ === void 0
                  ? void 0
                  : _.parentElement;
              cu(k).then(() => {
                k == null || k.remove();
              });
            }
            return !1;
          },
        },
        (T, S) => {
          let { className: _ } = T;
          return h.createElement("div", {
            ref: Or(o, S),
            className: pe(t, _, { "wave-quick": O }),
            style: M,
          });
        }
      );
    },
    vu = (e, t) => {
      var r;
      const { component: n } = t;
      if (
        n === "Checkbox" &&
        !(
          !((r = e.querySelector("input")) === null || r === void 0) &&
          r.checked
        )
      )
        return;
      const o = document.createElement("div");
      (o.style.position = "absolute"),
        (o.style.left = "0px"),
        (o.style.top = "0px"),
        e == null || e.insertBefore(o, e == null ? void 0 : e.firstChild),
        ou(h.createElement(pu, Object.assign({}, t, { target: e })), o);
    },
    gu = (e, t, r) => {
      const { wave: n } = h.useContext(Fe),
        [, o, i] = et(),
        a = cr((s) => {
          const u = e.current;
          if ((n != null && n.disabled) || !u) return;
          const f = u.querySelector(`.${na}`) || u,
            { showEffect: d } = n || {};
          (d || vu)(f, {
            className: t,
            token: o,
            component: r,
            event: s,
            hashId: i,
          });
        }),
        c = h.useRef();
      return (s) => {
        Be.cancel(c.current),
          (c.current = Be(() => {
            a(s);
          }));
      };
    },
    oa = (e) => {
      const { children: t, disabled: r, component: n } = e,
        { getPrefixCls: o } = x.useContext(Fe),
        i = x.useRef(null),
        a = o("wave"),
        [, c] = uu(a),
        l = gu(i, pe(a, c), n);
      if (
        (x.useEffect(() => {
          const u = i.current;
          if (!u || u.nodeType !== 1 || r) return;
          const f = (d) => {
            !su(d.target) ||
              !u.getAttribute ||
              u.getAttribute("disabled") ||
              u.disabled ||
              u.className.includes("disabled") ||
              u.className.includes("-leave") ||
              l(d);
          };
          return (
            u.addEventListener("click", f, !0),
            () => {
              u.removeEventListener("click", f, !0);
            }
          );
        }, [r]),
        !x.isValidElement(t))
      )
        return t ?? null;
      const s = to(t) ? Or(t.ref, i) : i;
      return Zi(t, { ref: s });
    };
  process.env.NODE_ENV !== "production" && (oa.displayName = "Wave");
  const hu = (e) => {
      const t = x.useContext(ut);
      return x.useMemo(
        () =>
          e
            ? typeof e == "string"
              ? e ?? t
              : e instanceof Function
              ? e(t)
              : t
            : t,
        [e, t]
      );
    },
    mu = h.createContext(null),
    bu = (e, t) => {
      const r = h.useContext(mu),
        n = h.useMemo(() => {
          if (!r) return "";
          const { compactDirection: o, isFirstItem: i, isLastItem: a } = r,
            c = o === "vertical" ? "-vertical-" : "-";
          return pe(`${e}-compact${c}item`, {
            [`${e}-compact${c}first-item`]: i,
            [`${e}-compact${c}last-item`]: a,
            [`${e}-compact${c}item-rtl`]: t === "rtl",
          });
        }, [e, t, r]);
      return {
        compactSize: r == null ? void 0 : r.compactSize,
        compactDirection: r == null ? void 0 : r.compactDirection,
        compactItemClassnames: n,
      };
    };
  var yu = function (e, t) {
    var r = {};
    for (var n in e)
      Object.prototype.hasOwnProperty.call(e, n) &&
        t.indexOf(n) < 0 &&
        (r[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
        t.indexOf(n[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
          (r[n[o]] = e[n[o]]);
    return r;
  };
  const ia = h.createContext(void 0),
    Su = (e) => {
      const { getPrefixCls: t, direction: r } = h.useContext(Fe),
        { prefixCls: n, size: o, className: i } = e,
        a = yu(e, ["prefixCls", "size", "className"]),
        c = t("btn-group", n),
        [, , l] = et();
      let s = "";
      switch (o) {
        case "large":
          s = "lg";
          break;
        case "small":
          s = "sm";
          break;
      }
      if (process.env.NODE_ENV !== "production") {
        const f = st("Button.Group");
        process.env.NODE_ENV !== "production" &&
          f(
            !o || ["large", "small", "middle"].includes(o),
            "usage",
            "Invalid prop `size`."
          );
      }
      const u = pe(c, { [`${c}-${s}`]: s, [`${c}-rtl`]: r === "rtl" }, i, l);
      return h.createElement(
        ia.Provider,
        { value: o },
        h.createElement("div", Object.assign({}, a, { className: u }))
      );
    },
    aa = /^[\u4e00-\u9fa5]{2}$/,
    kn = aa.test.bind(aa);
  function ca(e) {
    return typeof e == "string";
  }
  function gr(e) {
    return e === "text" || e === "link";
  }
  function Cu(e, t) {
    if (e == null) return;
    const r = t ? " " : "";
    return typeof e != "string" &&
      typeof e != "number" &&
      ca(e.type) &&
      kn(e.props.children)
      ? Zi(e, { children: e.props.children.split("").join(r) })
      : ca(e)
      ? kn(e)
        ? x.createElement("span", null, e.split("").join(r))
        : x.createElement("span", null, e)
      : ql(e)
      ? x.createElement("span", null, e)
      : e;
  }
  function Eu(e, t) {
    let r = !1;
    const n = [];
    return (
      x.Children.forEach(e, (o) => {
        const i = typeof o,
          a = i === "string" || i === "number";
        if (r && a) {
          const c = n.length - 1,
            l = n[c];
          n[c] = `${l}${o}`;
        } else n.push(o);
        r = a;
      }),
      x.Children.map(n, (o) => Cu(o, t))
    );
  }
  const sa = x.forwardRef((e, t) => {
      const { className: r, style: n, children: o, prefixCls: i } = e,
        a = pe(`${i}-icon`, r);
      return x.createElement("span", { ref: t, className: a, style: n }, o);
    }),
    la = x.forwardRef((e, t) => {
      const { prefixCls: r, className: n, style: o, iconClassName: i } = e,
        a = pe(`${r}-loading-icon`, n);
      return x.createElement(
        sa,
        { prefixCls: r, className: a, style: o, ref: t },
        x.createElement(Ji, { className: i })
      );
    }),
    Bn = () => ({ width: 0, opacity: 0, transform: "scale(0)" }),
    Hn = (e) => ({ width: e.scrollWidth, opacity: 1, transform: "scale(1)" }),
    xu = (e) => {
      const {
          prefixCls: t,
          loading: r,
          existIcon: n,
          className: o,
          style: i,
        } = e,
        a = !!r;
      return n
        ? x.createElement(la, { prefixCls: t, className: o, style: i })
        : x.createElement(
            On,
            {
              visible: a,
              motionName: `${t}-loading-icon-motion`,
              motionLeave: a,
              removeOnLeave: !0,
              onAppearStart: Bn,
              onAppearActive: Hn,
              onEnterStart: Bn,
              onEnterActive: Hn,
              onLeaveStart: Hn,
              onLeaveActive: Bn,
            },
            (c, l) => {
              let { className: s, style: u } = c;
              return x.createElement(la, {
                prefixCls: t,
                className: o,
                style: Object.assign(Object.assign({}, i), u),
                ref: l,
                iconClassName: s,
              });
            }
          );
    },
    ua = (e, t) => ({
      [`> span, > ${e}`]: {
        "&:not(:last-child)": {
          [`&, & > ${e}`]: { "&:not(:disabled)": { borderInlineEndColor: t } },
        },
        "&:not(:first-child)": {
          [`&, & > ${e}`]: {
            "&:not(:disabled)": { borderInlineStartColor: t },
          },
        },
      },
    }),
    wu = (e) => {
      const {
        componentCls: t,
        fontSize: r,
        lineWidth: n,
        groupBorderColor: o,
        colorErrorHover: i,
      } = e;
      return {
        [`${t}-group`]: [
          {
            position: "relative",
            display: "inline-flex",
            [`> span, > ${t}`]: {
              "&:not(:last-child)": {
                [`&, & > ${t}`]: {
                  borderStartEndRadius: 0,
                  borderEndEndRadius: 0,
                },
              },
              "&:not(:first-child)": {
                marginInlineStart: e.calc(n).mul(-1).equal(),
                [`&, & > ${t}`]: {
                  borderStartStartRadius: 0,
                  borderEndStartRadius: 0,
                },
              },
            },
            [t]: {
              position: "relative",
              zIndex: 1,
              "&:hover, &:focus, &:active": { zIndex: 2 },
              "&[disabled]": { zIndex: 0 },
            },
            [`${t}-icon-only`]: { fontSize: r },
          },
          ua(`${t}-primary`, o),
          ua(`${t}-danger`, i),
        ],
      };
    },
    fa = (e) => {
      const { paddingInline: t, onlyIconSize: r, paddingBlock: n } = e;
      return ft(e, {
        buttonPaddingHorizontal: t,
        buttonPaddingVertical: n,
        buttonIconOnlyFontSize: r,
      });
    },
    da = (e) => {
      var t, r, n, o, i, a;
      const c =
          (t = e.contentFontSize) !== null && t !== void 0 ? t : e.fontSize,
        l = (r = e.contentFontSizeSM) !== null && r !== void 0 ? r : e.fontSize,
        s =
          (n = e.contentFontSizeLG) !== null && n !== void 0 ? n : e.fontSizeLG,
        u = (o = e.contentLineHeight) !== null && o !== void 0 ? o : nr(c),
        f = (i = e.contentLineHeightSM) !== null && i !== void 0 ? i : nr(l),
        d = (a = e.contentLineHeightLG) !== null && a !== void 0 ? a : nr(s);
      return {
        fontWeight: 400,
        defaultShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlTmpOutline}`,
        primaryShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlOutline}`,
        dangerShadow: `0 ${e.controlOutlineWidth}px 0 ${e.colorErrorOutline}`,
        primaryColor: e.colorTextLightSolid,
        dangerColor: e.colorTextLightSolid,
        borderColorDisabled: e.colorBorder,
        defaultGhostColor: e.colorBgContainer,
        ghostBg: "transparent",
        defaultGhostBorderColor: e.colorBgContainer,
        paddingInline: e.paddingContentHorizontal - e.lineWidth,
        paddingInlineLG: e.paddingContentHorizontal - e.lineWidth,
        paddingInlineSM: 8 - e.lineWidth,
        onlyIconSize: e.fontSizeLG,
        onlyIconSizeSM: e.fontSizeLG - 2,
        onlyIconSizeLG: e.fontSizeLG + 2,
        groupBorderColor: e.colorPrimaryHover,
        linkHoverBg: "transparent",
        textHoverBg: e.colorBgTextHover,
        defaultColor: e.colorText,
        defaultBg: e.colorBgContainer,
        defaultBorderColor: e.colorBorder,
        defaultBorderColorDisabled: e.colorBorder,
        defaultHoverBg: e.colorBgContainer,
        defaultHoverColor: e.colorPrimaryHover,
        defaultHoverBorderColor: e.colorPrimaryHover,
        defaultActiveBg: e.colorBgContainer,
        defaultActiveColor: e.colorPrimaryActive,
        defaultActiveBorderColor: e.colorPrimaryActive,
        contentFontSize: c,
        contentFontSizeSM: l,
        contentFontSizeLG: s,
        contentLineHeight: u,
        contentLineHeightSM: f,
        contentLineHeightLG: d,
        paddingBlock: Math.max((e.controlHeight - c * u) / 2 - e.lineWidth, 0),
        paddingBlockSM: Math.max(
          (e.controlHeightSM - l * f) / 2 - e.lineWidth,
          0
        ),
        paddingBlockLG: Math.max(
          (e.controlHeightLG - s * d) / 2 - e.lineWidth,
          0
        ),
      };
    },
    Ou = (e) => {
      const { componentCls: t, iconCls: r, fontWeight: n } = e;
      return {
        [t]: {
          outline: "none",
          position: "relative",
          display: "inline-flex",
          gap: e.marginXS,
          alignItems: "center",
          justifyContent: "center",
          fontWeight: n,
          whiteSpace: "nowrap",
          textAlign: "center",
          backgroundImage: "none",
          background: "transparent",
          border: `${De(e.lineWidth)} ${e.lineType} transparent`,
          cursor: "pointer",
          transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
          userSelect: "none",
          touchAction: "manipulation",
          color: e.colorText,
          "&:disabled > *": { pointerEvents: "none" },
          "> span": { display: "inline-block" },
          [`${t}-icon`]: { lineHeight: 1 },
          "> a": { color: "currentColor" },
          "&:not(:disabled)": Object.assign({}, Zs(e)),
          [`&${t}-two-chinese-chars::first-letter`]: {
            letterSpacing: "0.34em",
          },
          [`&${t}-two-chinese-chars > *:not(${r})`]: {
            marginInlineEnd: "-0.34em",
            letterSpacing: "0.34em",
          },
          "&-icon-end": { flexDirection: "row-reverse" },
        },
      };
    },
    je = (e, t, r) => ({
      [`&:not(:disabled):not(${e}-disabled)`]: { "&:hover": t, "&:active": r },
    }),
    Tu = (e) => ({
      minWidth: e.controlHeight,
      paddingInlineStart: 0,
      paddingInlineEnd: 0,
      borderRadius: "50%",
    }),
    Au = (e) => ({
      borderRadius: e.controlHeight,
      paddingInlineStart: e.calc(e.controlHeight).div(2).equal(),
      paddingInlineEnd: e.calc(e.controlHeight).div(2).equal(),
    }),
    Pu = (e) => ({
      cursor: "not-allowed",
      borderColor: e.borderColorDisabled,
      color: e.colorTextDisabled,
      background: e.colorBgContainerDisabled,
      boxShadow: "none",
    }),
    _t = (e, t, r, n, o, i, a, c) => ({
      [`&${e}-background-ghost`]: Object.assign(
        Object.assign(
          {
            color: r || void 0,
            background: t,
            borderColor: n || void 0,
            boxShadow: "none",
          },
          je(
            e,
            Object.assign({ background: t }, a),
            Object.assign({ background: t }, c)
          )
        ),
        {
          "&:disabled": {
            cursor: "not-allowed",
            color: o || void 0,
            borderColor: i || void 0,
          },
        }
      ),
    }),
    Dn = (e) => ({
      [`&:disabled, &${e.componentCls}-disabled`]: Object.assign({}, Pu(e)),
    }),
    pa = (e) => Object.assign({}, Dn(e)),
    hr = (e) => ({
      [`&:disabled, &${e.componentCls}-disabled`]: {
        cursor: "not-allowed",
        color: e.colorTextDisabled,
      },
    }),
    va = (e) =>
      Object.assign(
        Object.assign(
          Object.assign(
            Object.assign(Object.assign({}, pa(e)), {
              background: e.defaultBg,
              borderColor: e.defaultBorderColor,
              color: e.defaultColor,
              boxShadow: e.defaultShadow,
            }),
            je(
              e.componentCls,
              {
                color: e.defaultHoverColor,
                borderColor: e.defaultHoverBorderColor,
                background: e.defaultHoverBg,
              },
              {
                color: e.defaultActiveColor,
                borderColor: e.defaultActiveBorderColor,
                background: e.defaultActiveBg,
              }
            )
          ),
          _t(
            e.componentCls,
            e.ghostBg,
            e.defaultGhostColor,
            e.defaultGhostBorderColor,
            e.colorTextDisabled,
            e.colorBorder
          )
        ),
        {
          [`&${e.componentCls}-dangerous`]: Object.assign(
            Object.assign(
              Object.assign(
                { color: e.colorError, borderColor: e.colorError },
                je(
                  e.componentCls,
                  {
                    color: e.colorErrorHover,
                    borderColor: e.colorErrorBorderHover,
                  },
                  { color: e.colorErrorActive, borderColor: e.colorErrorActive }
                )
              ),
              _t(
                e.componentCls,
                e.ghostBg,
                e.colorError,
                e.colorError,
                e.colorTextDisabled,
                e.colorBorder
              )
            ),
            Dn(e)
          ),
        }
      ),
    _u = (e) =>
      Object.assign(
        Object.assign(
          Object.assign(
            Object.assign(Object.assign({}, pa(e)), {
              color: e.primaryColor,
              background: e.colorPrimary,
              boxShadow: e.primaryShadow,
            }),
            je(
              e.componentCls,
              { color: e.colorTextLightSolid, background: e.colorPrimaryHover },
              { color: e.colorTextLightSolid, background: e.colorPrimaryActive }
            )
          ),
          _t(
            e.componentCls,
            e.ghostBg,
            e.colorPrimary,
            e.colorPrimary,
            e.colorTextDisabled,
            e.colorBorder,
            { color: e.colorPrimaryHover, borderColor: e.colorPrimaryHover },
            { color: e.colorPrimaryActive, borderColor: e.colorPrimaryActive }
          )
        ),
        {
          [`&${e.componentCls}-dangerous`]: Object.assign(
            Object.assign(
              Object.assign(
                {
                  background: e.colorError,
                  boxShadow: e.dangerShadow,
                  color: e.dangerColor,
                },
                je(
                  e.componentCls,
                  { background: e.colorErrorHover },
                  { background: e.colorErrorActive }
                )
              ),
              _t(
                e.componentCls,
                e.ghostBg,
                e.colorError,
                e.colorError,
                e.colorTextDisabled,
                e.colorBorder,
                { color: e.colorErrorHover, borderColor: e.colorErrorHover },
                { color: e.colorErrorActive, borderColor: e.colorErrorActive }
              )
            ),
            Dn(e)
          ),
        }
      ),
    $u = (e) =>
      Object.assign(Object.assign({}, va(e)), { borderStyle: "dashed" }),
    Mu = (e) =>
      Object.assign(
        Object.assign(
          Object.assign(
            { color: e.colorLink },
            je(
              e.componentCls,
              { color: e.colorLinkHover, background: e.linkHoverBg },
              { color: e.colorLinkActive }
            )
          ),
          hr(e)
        ),
        {
          [`&${e.componentCls}-dangerous`]: Object.assign(
            Object.assign(
              { color: e.colorError },
              je(
                e.componentCls,
                { color: e.colorErrorHover },
                { color: e.colorErrorActive }
              )
            ),
            hr(e)
          ),
        }
      ),
    ju = (e) =>
      Object.assign(
        Object.assign(
          Object.assign(
            {},
            je(
              e.componentCls,
              { color: e.colorText, background: e.textHoverBg },
              { color: e.colorText, background: e.colorBgTextActive }
            )
          ),
          hr(e)
        ),
        {
          [`&${e.componentCls}-dangerous`]: Object.assign(
            Object.assign({ color: e.colorError }, hr(e)),
            je(
              e.componentCls,
              { color: e.colorErrorHover, background: e.colorErrorBg },
              { color: e.colorErrorHover, background: e.colorErrorBgActive }
            )
          ),
        }
      ),
    Iu = (e) => {
      const { componentCls: t } = e;
      return {
        [`${t}-default`]: va(e),
        [`${t}-primary`]: _u(e),
        [`${t}-dashed`]: $u(e),
        [`${t}-link`]: Mu(e),
        [`${t}-text`]: ju(e),
        [`${t}-ghost`]: _t(
          e.componentCls,
          e.ghostBg,
          e.colorBgContainer,
          e.colorBgContainer,
          e.colorTextDisabled,
          e.colorBorder
        ),
      };
    },
    zn = function (e) {
      let t =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
      const {
          componentCls: r,
          controlHeight: n,
          fontSize: o,
          lineHeight: i,
          borderRadius: a,
          buttonPaddingHorizontal: c,
          iconCls: l,
          buttonPaddingVertical: s,
        } = e,
        u = `${r}-icon-only`;
      return [
        {
          [`${t}`]: {
            fontSize: o,
            lineHeight: i,
            height: n,
            padding: `${De(s)} ${De(c)}`,
            borderRadius: a,
            [`&${u}`]: {
              width: n,
              paddingInline: 0,
              [`&${r}-compact-item`]: { flex: "none" },
              [`&${r}-round`]: { width: "auto" },
              [l]: { fontSize: e.buttonIconOnlyFontSize },
            },
            [`&${r}-loading`]: { opacity: e.opacityLoading, cursor: "default" },
            [`${r}-loading-icon`]: {
              transition: `width ${e.motionDurationSlow} ${e.motionEaseInOut}, opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`,
            },
          },
        },
        { [`${r}${r}-circle${t}`]: Tu(e) },
        { [`${r}${r}-round${t}`]: Au(e) },
      ];
    },
    Lu = (e) => {
      const t = ft(e, {
        fontSize: e.contentFontSize,
        lineHeight: e.contentLineHeight,
      });
      return zn(t, e.componentCls);
    },
    Ru = (e) => {
      const t = ft(e, {
        controlHeight: e.controlHeightSM,
        fontSize: e.contentFontSizeSM,
        lineHeight: e.contentLineHeightSM,
        padding: e.paddingXS,
        buttonPaddingHorizontal: e.paddingInlineSM,
        buttonPaddingVertical: e.paddingBlockSM,
        borderRadius: e.borderRadiusSM,
        buttonIconOnlyFontSize: e.onlyIconSizeSM,
      });
      return zn(t, `${e.componentCls}-sm`);
    },
    Nu = (e) => {
      const t = ft(e, {
        controlHeight: e.controlHeightLG,
        fontSize: e.contentFontSizeLG,
        lineHeight: e.contentLineHeightLG,
        buttonPaddingHorizontal: e.paddingInlineLG,
        buttonPaddingVertical: e.paddingBlockLG,
        borderRadius: e.borderRadiusLG,
        buttonIconOnlyFontSize: e.onlyIconSizeLG,
      });
      return zn(t, `${e.componentCls}-lg`);
    },
    ku = (e) => {
      const { componentCls: t } = e;
      return { [t]: { [`&${t}-block`]: { width: "100%" } } };
    },
    Bu = ol(
      "Button",
      (e) => {
        const t = fa(e);
        return [Ou(t), Lu(t), Ru(t), Nu(t), ku(t), Iu(t), wu(t)];
      },
      da,
      {
        unitless: {
          fontWeight: !0,
          contentLineHeight: !0,
          contentLineHeightSM: !0,
          contentLineHeightLG: !0,
        },
      }
    );
  function Hu(e, t, r) {
    const { focusElCls: n, focus: o, borderElCls: i } = r,
      a = i ? "> *" : "",
      c = ["hover", o ? "focus" : null, "active"]
        .filter(Boolean)
        .map((l) => `&:${l} ${a}`)
        .join(",");
    return {
      [`&-item:not(${t}-last-item)`]: {
        marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal(),
      },
      "&-item": Object.assign(
        Object.assign(
          { [c]: { zIndex: 2 } },
          n ? { [`&${n}`]: { zIndex: 2 } } : {}
        ),
        { [`&[disabled] ${a}`]: { zIndex: 0 } }
      ),
    };
  }
  function Du(e, t, r) {
    const { borderElCls: n } = r,
      o = n ? `> ${n}` : "";
    return {
      [`&-item:not(${t}-first-item):not(${t}-last-item) ${o}`]: {
        borderRadius: 0,
      },
      [`&-item:not(${t}-last-item)${t}-first-item`]: {
        [`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]: {
          borderStartEndRadius: 0,
          borderEndEndRadius: 0,
        },
      },
      [`&-item:not(${t}-first-item)${t}-last-item`]: {
        [`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]: {
          borderStartStartRadius: 0,
          borderEndStartRadius: 0,
        },
      },
    };
  }
  function zu(e) {
    let t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { focus: !0 };
    const { componentCls: r } = e,
      n = `${r}-compact`;
    return { [n]: Object.assign(Object.assign({}, Hu(e, n, t)), Du(r, n, t)) };
  }
  function Fu(e, t) {
    return {
      [`&-item:not(${t}-last-item)`]: {
        marginBottom: e.calc(e.lineWidth).mul(-1).equal(),
      },
      "&-item": {
        "&:hover,&:focus,&:active": { zIndex: 2 },
        "&[disabled]": { zIndex: 0 },
      },
    };
  }
  function Vu(e, t) {
    return {
      [`&-item:not(${t}-first-item):not(${t}-last-item)`]: { borderRadius: 0 },
      [`&-item${t}-first-item:not(${t}-last-item)`]: {
        [`&, &${e}-sm, &${e}-lg`]: {
          borderEndEndRadius: 0,
          borderEndStartRadius: 0,
        },
      },
      [`&-item${t}-last-item:not(${t}-first-item)`]: {
        [`&, &${e}-sm, &${e}-lg`]: {
          borderStartStartRadius: 0,
          borderStartEndRadius: 0,
        },
      },
    };
  }
  function Wu(e) {
    const t = `${e.componentCls}-compact-vertical`;
    return {
      [t]: Object.assign(Object.assign({}, Fu(e, t)), Vu(e.componentCls, t)),
    };
  }
  const Gu = (e) => {
      const { componentCls: t, calc: r } = e;
      return {
        [t]: {
          [`&-compact-item${t}-primary`]: {
            [`&:not([disabled]) + ${t}-compact-item${t}-primary:not([disabled])`]:
              {
                position: "relative",
                "&:before": {
                  position: "absolute",
                  top: r(e.lineWidth).mul(-1).equal(),
                  insetInlineStart: r(e.lineWidth).mul(-1).equal(),
                  display: "inline-block",
                  width: e.lineWidth,
                  height: `calc(100% + ${De(e.lineWidth)} * 2)`,
                  backgroundColor: e.colorPrimaryHover,
                  content: '""',
                },
              },
          },
          "&-compact-vertical-item": {
            [`&${t}-primary`]: {
              [`&:not([disabled]) + ${t}-compact-vertical-item${t}-primary:not([disabled])`]:
                {
                  position: "relative",
                  "&:before": {
                    position: "absolute",
                    top: r(e.lineWidth).mul(-1).equal(),
                    insetInlineStart: r(e.lineWidth).mul(-1).equal(),
                    display: "inline-block",
                    width: `calc(100% + ${De(e.lineWidth)} * 2)`,
                    height: e.lineWidth,
                    backgroundColor: e.colorPrimaryHover,
                    content: '""',
                  },
                },
            },
          },
        },
      };
    },
    Uu = rl(
      ["Button", "compact"],
      (e) => {
        const t = fa(e);
        return [zu(t), Wu(t), Gu(t)];
      },
      da
    );
  var Xu = function (e, t) {
    var r = {};
    for (var n in e)
      Object.prototype.hasOwnProperty.call(e, n) &&
        t.indexOf(n) < 0 &&
        (r[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
        t.indexOf(n[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
          (r[n[o]] = e[n[o]]);
    return r;
  };
  function qu(e) {
    if (typeof e == "object" && e) {
      let t = e == null ? void 0 : e.delay;
      return (
        (t = !Number.isNaN(t) && typeof t == "number" ? t : 0),
        { loading: t <= 0, delay: t }
      );
    }
    return { loading: !!e, delay: 0 };
  }
  const mr = x.forwardRef((e, t) => {
    var r, n, o;
    const {
        loading: i = !1,
        prefixCls: a,
        type: c,
        danger: l = !1,
        shape: s = "default",
        size: u,
        styles: f,
        disabled: d,
        className: g,
        rootClassName: C,
        children: m,
        icon: p,
        iconPosition: P = "start",
        ghost: E = !1,
        block: M = !1,
        htmlType: $ = "button",
        classNames: O,
        style: T = {},
        autoInsertSpace: S,
      } = e,
      _ = Xu(e, [
        "loading",
        "prefixCls",
        "type",
        "danger",
        "shape",
        "size",
        "styles",
        "disabled",
        "className",
        "rootClassName",
        "children",
        "icon",
        "iconPosition",
        "ghost",
        "block",
        "htmlType",
        "classNames",
        "style",
        "autoInsertSpace",
      ]),
      k = c || "default",
      { getPrefixCls: V, direction: X, button: D } = x.useContext(Fe),
      B =
        (r = S ?? (D == null ? void 0 : D.autoInsertSpace)) !== null &&
        r !== void 0
          ? r
          : !0,
      L = V("btn", a),
      [W, y, v] = Bu(L),
      b = x.useContext(ir),
      w = d ?? b,
      j = x.useContext(ia),
      A = x.useMemo(() => qu(i), [i]),
      [R, H] = x.useState(A.loading),
      [q, oe] = x.useState(!1),
      Q = Or(t, x.createRef()),
      We = x.Children.count(m) === 1 && !p && !gr(k);
    x.useEffect(() => {
      let Y = null;
      A.delay > 0
        ? (Y = setTimeout(() => {
            (Y = null), H(!0);
          }, A.delay))
        : H(A.loading);
      function ye() {
        Y && (clearTimeout(Y), (Y = null));
      }
      return ye;
    }, [A]),
      x.useEffect(() => {
        if (!Q || !Q.current || !B) return;
        const Y = Q.current.textContent;
        We && kn(Y) ? q || oe(!0) : q && oe(!1);
      }, [Q]);
    const Ge = (Y) => {
      const { onClick: ye } = e;
      if (R || w) {
        Y.preventDefault();
        return;
      }
      ye == null || ye(Y);
    };
    if (process.env.NODE_ENV !== "production") {
      const Y = st("Button");
      process.env.NODE_ENV !== "production" &&
        Y(
          !(typeof p == "string" && p.length > 2),
          "breaking",
          `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${p}\` at https://ant.design/components/icon`
        ),
        process.env.NODE_ENV !== "production" &&
          Y(
            !(E && gr(k)),
            "usage",
            "`link` or `text` button can't be a `ghost` button."
          );
    }
    const { compactSize: tt, compactItemClassnames: Ie } = bu(L, X),
      be = { large: "lg", small: "sm", middle: void 0 },
      Ue = hu((Y) => {
        var ye, $t;
        return ($t = (ye = u ?? tt) !== null && ye !== void 0 ? ye : j) !==
          null && $t !== void 0
          ? $t
          : Y;
      }),
      I = (Ue && be[Ue]) || "",
      Le = R ? "loading" : p,
      te = Ma(_, ["navigate"]),
      Re = pe(
        L,
        y,
        v,
        {
          [`${L}-${s}`]: s !== "default" && s,
          [`${L}-${k}`]: k,
          [`${L}-${I}`]: I,
          [`${L}-icon-only`]: !m && m !== 0 && !!Le,
          [`${L}-background-ghost`]: E && !gr(k),
          [`${L}-loading`]: R,
          [`${L}-two-chinese-chars`]: q && B && !R,
          [`${L}-block`]: M,
          [`${L}-dangerous`]: l,
          [`${L}-rtl`]: X === "rtl",
          [`${L}-icon-end`]: P === "end",
        },
        Ie,
        g,
        C,
        D == null ? void 0 : D.className
      ),
      Xe = Object.assign(Object.assign({}, D == null ? void 0 : D.style), T),
      rt = pe(
        O == null ? void 0 : O.icon,
        (n = D == null ? void 0 : D.classNames) === null || n === void 0
          ? void 0
          : n.icon
      ),
      re = Object.assign(
        Object.assign({}, (f == null ? void 0 : f.icon) || {}),
        ((o = D == null ? void 0 : D.styles) === null || o === void 0
          ? void 0
          : o.icon) || {}
      ),
      Z =
        p && !R
          ? x.createElement(sa, { prefixCls: L, className: rt, style: re }, p)
          : x.createElement(xu, { existIcon: !!p, prefixCls: L, loading: R }),
      se = m || m === 0 ? Eu(m, We && B) : null;
    if (te.href !== void 0)
      return W(
        x.createElement(
          "a",
          Object.assign({}, te, {
            className: pe(Re, { [`${L}-disabled`]: w }),
            href: w ? void 0 : te.href,
            style: Xe,
            onClick: Ge,
            ref: Q,
            tabIndex: w ? -1 : 0,
          }),
          Z,
          se
        )
      );
    let Se = x.createElement(
      "button",
      Object.assign({}, _, {
        type: $,
        className: Re,
        style: Xe,
        onClick: Ge,
        disabled: w,
        ref: Q,
      }),
      Z,
      se,
      !!Ie && x.createElement(Uu, { key: "compact", prefixCls: L })
    );
    return (
      gr(k) ||
        (Se = x.createElement(oa, { component: "Button", disabled: R }, Se)),
      W(Se)
    );
  });
  (mr.Group = Su),
    (mr.__ANT_BUTTON = !0),
    process.env.NODE_ENV !== "production" && (mr.displayName = "Button");
  const Ku = (e, t) => e + t;
  (xe.Button = mr),
    (xe.sum = Ku),
    Object.defineProperty(xe, Symbol.toStringTag, { value: "Module" });
});

