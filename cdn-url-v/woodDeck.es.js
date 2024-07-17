var oc = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
import * as h from "react";
import F, { version as ac, isValidElement as ic, useContext as Ae, createContext as zn, useRef as at, useLayoutEffect as cc, useEffect as it, forwardRef as ra, useMemo as sc, useState as so, Children as lc, createRef as uc } from "react";
import * as fc from "react-dom";
import lo from "react-dom";
var Kf = oc((Jf, fr) => {
  function dc(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  }
  var na = { exports: {} }, ee = na.exports = {}, Te, Oe;
  function Qr() {
    throw new Error("setTimeout has not been defined");
  }
  function Zr() {
    throw new Error("clearTimeout has not been defined");
  }
  (function() {
    try {
      typeof setTimeout == "function" ? Te = setTimeout : Te = Qr;
    } catch {
      Te = Qr;
    }
    try {
      typeof clearTimeout == "function" ? Oe = clearTimeout : Oe = Zr;
    } catch {
      Oe = Zr;
    }
  })();
  function oa(e) {
    if (Te === setTimeout)
      return setTimeout(e, 0);
    if ((Te === Qr || !Te) && setTimeout)
      return Te = setTimeout, setTimeout(e, 0);
    try {
      return Te(e, 0);
    } catch {
      try {
        return Te.call(null, e, 0);
      } catch {
        return Te.call(this, e, 0);
      }
    }
  }
  function vc(e) {
    if (Oe === clearTimeout)
      return clearTimeout(e);
    if ((Oe === Zr || !Oe) && clearTimeout)
      return Oe = clearTimeout, clearTimeout(e);
    try {
      return Oe(e);
    } catch {
      try {
        return Oe.call(null, e);
      } catch {
        return Oe.call(this, e);
      }
    }
  }
  var Ne = [], bt = !1, nt, rr = -1;
  function pc() {
    !bt || !nt || (bt = !1, nt.length ? Ne = nt.concat(Ne) : rr = -1, Ne.length && aa());
  }
  function aa() {
    if (!bt) {
      var e = oa(pc);
      bt = !0;
      for (var t = Ne.length; t; ) {
        for (nt = Ne, Ne = []; ++rr < t; )
          nt && nt[rr].run();
        rr = -1, t = Ne.length;
      }
      nt = null, bt = !1, vc(e);
    }
  }
  ee.nextTick = function(e) {
    var t = new Array(arguments.length - 1);
    if (arguments.length > 1)
      for (var r = 1; r < arguments.length; r++)
        t[r - 1] = arguments[r];
    Ne.push(new ia(e, t)), Ne.length === 1 && !bt && oa(aa);
  };
  function ia(e, t) {
    this.fun = e, this.array = t;
  }
  ia.prototype.run = function() {
    this.fun.apply(null, this.array);
  };
  ee.title = "browser";
  ee.browser = !0;
  ee.env = {};
  ee.argv = [];
  ee.version = "";
  ee.versions = {};
  function He() {
  }
  ee.on = He;
  ee.addListener = He;
  ee.once = He;
  ee.off = He;
  ee.removeListener = He;
  ee.removeAllListeners = He;
  ee.emit = He;
  ee.prependListener = He;
  ee.prependOnceListener = He;
  ee.listeners = function(e) {
    return [];
  };
  ee.binding = function(e) {
    throw new Error("process.binding is not supported");
  };
  ee.cwd = function() {
    return "/";
  };
  ee.chdir = function(e) {
    throw new Error("process.chdir is not supported");
  };
  ee.umask = function() {
    return 0;
  };
  var gc = na.exports;
  const N = /* @__PURE__ */ dc(gc);
  function hc(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  }
  var ca = { exports: {} };
  /*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  */
  (function(e) {
    (function() {
      var t = {}.hasOwnProperty;
      function r() {
        for (var a = "", i = 0; i < arguments.length; i++) {
          var c = arguments[i];
          c && (a = o(a, n(c)));
        }
        return a;
      }
      function n(a) {
        if (typeof a == "string" || typeof a == "number")
          return a;
        if (typeof a != "object")
          return "";
        if (Array.isArray(a))
          return r.apply(null, a);
        if (a.toString !== Object.prototype.toString && !a.toString.toString().includes("[native code]"))
          return a.toString();
        var i = "";
        for (var c in a)
          t.call(a, c) && a[c] && (i = o(i, c));
        return i;
      }
      function o(a, i) {
        return i ? a ? a + " " + i : a + i : a;
      }
      e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
    })();
  })(ca);
  var mc = ca.exports;
  const ye = /* @__PURE__ */ hc(mc);
  function yt() {
    return yt = Object.assign ? Object.assign.bind() : function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    }, yt.apply(null, arguments);
  }
  var Jr = { exports: {} }, X = {};
  /**
   * @license React
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var uo;
  function bc() {
    if (uo) return X;
    uo = 1;
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), s = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), C;
    C = Symbol.for("react.module.reference");
    function m(v) {
      if (typeof v == "object" && v !== null) {
        var A = v.$$typeof;
        switch (A) {
          case e:
            switch (v = v.type, v) {
              case r:
              case o:
              case n:
              case s:
              case u:
                return v;
              default:
                switch (v = v && v.$$typeof, v) {
                  case c:
                  case i:
                  case l:
                  case d:
                  case f:
                  case a:
                    return v;
                  default:
                    return A;
                }
            }
          case t:
            return A;
        }
      }
    }
    return X.ContextConsumer = i, X.ContextProvider = a, X.Element = e, X.ForwardRef = l, X.Fragment = r, X.Lazy = d, X.Memo = f, X.Portal = t, X.Profiler = o, X.StrictMode = n, X.Suspense = s, X.SuspenseList = u, X.isAsyncMode = function() {
      return !1;
    }, X.isConcurrentMode = function() {
      return !1;
    }, X.isContextConsumer = function(v) {
      return m(v) === i;
    }, X.isContextProvider = function(v) {
      return m(v) === a;
    }, X.isElement = function(v) {
      return typeof v == "object" && v !== null && v.$$typeof === e;
    }, X.isForwardRef = function(v) {
      return m(v) === l;
    }, X.isFragment = function(v) {
      return m(v) === r;
    }, X.isLazy = function(v) {
      return m(v) === d;
    }, X.isMemo = function(v) {
      return m(v) === f;
    }, X.isPortal = function(v) {
      return m(v) === t;
    }, X.isProfiler = function(v) {
      return m(v) === o;
    }, X.isStrictMode = function(v) {
      return m(v) === n;
    }, X.isSuspense = function(v) {
      return m(v) === s;
    }, X.isSuspenseList = function(v) {
      return m(v) === u;
    }, X.isValidElementType = function(v) {
      return typeof v == "string" || typeof v == "function" || v === r || v === o || v === n || v === s || v === u || v === g || typeof v == "object" && v !== null && (v.$$typeof === d || v.$$typeof === f || v.$$typeof === a || v.$$typeof === i || v.$$typeof === l || v.$$typeof === C || v.getModuleId !== void 0);
    }, X.typeOf = m, X;
  }
  var q = {}, fo;
  function yc() {
    return fo || (fo = 1, N.env.NODE_ENV !== "production" && function() {
      var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), s = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), C = !1, m = !1, v = !1, A = !1, E = !1, R;
      R = Symbol.for("react.module.reference");
      function _(M) {
        return !!(typeof M == "string" || typeof M == "function" || M === r || M === o || E || M === n || M === s || M === u || A || M === g || C || m || v || typeof M == "object" && M !== null && (M.$$typeof === d || M.$$typeof === f || M.$$typeof === a || M.$$typeof === i || M.$$typeof === l || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        M.$$typeof === R || M.getModuleId !== void 0));
      }
      function w(M) {
        if (typeof M == "object" && M !== null) {
          var _e = M.$$typeof;
          switch (_e) {
            case e:
              var ne = M.type;
              switch (ne) {
                case r:
                case o:
                case n:
                case s:
                case u:
                  return ne;
                default:
                  var Re = ne && ne.$$typeof;
                  switch (Re) {
                    case c:
                    case i:
                    case l:
                    case d:
                    case f:
                    case a:
                      return Re;
                    default:
                      return _e;
                  }
              }
            case t:
              return _e;
          }
        }
      }
      var T = i, S = a, P = e, k = l, W = r, U = d, D = f, B = t, j = o, G = n, y = s, p = u, b = !1, x = !1;
      function $(M) {
        return b || (b = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
      }
      function O(M) {
        return x || (x = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
      }
      function I(M) {
        return w(M) === i;
      }
      function H(M) {
        return w(M) === a;
      }
      function K(M) {
        return typeof M == "object" && M !== null && M.$$typeof === e;
      }
      function ae(M) {
        return w(M) === l;
      }
      function le(M) {
        return w(M) === r;
      }
      function Z(M) {
        return w(M) === d;
      }
      function Ve(M) {
        return w(M) === f;
      }
      function We(M) {
        return w(M) === t;
      }
      function et(M) {
        return w(M) === o;
      }
      function Pe(M) {
        return w(M) === n;
      }
      function ge(M) {
        return w(M) === s;
      }
      function Ge(M) {
        return w(M) === u;
      }
      q.ContextConsumer = T, q.ContextProvider = S, q.Element = P, q.ForwardRef = k, q.Fragment = W, q.Lazy = U, q.Memo = D, q.Portal = B, q.Profiler = j, q.StrictMode = G, q.Suspense = y, q.SuspenseList = p, q.isAsyncMode = $, q.isConcurrentMode = O, q.isContextConsumer = I, q.isContextProvider = H, q.isElement = K, q.isForwardRef = ae, q.isFragment = le, q.isLazy = Z, q.isMemo = Ve, q.isPortal = We, q.isProfiler = et, q.isStrictMode = Pe, q.isSuspense = ge, q.isSuspenseList = Ge, q.isValidElementType = _, q.typeOf = w;
    }()), q;
  }
  N.env.NODE_ENV === "production" ? Jr.exports = bc() : Jr.exports = yc();
  var nr = Jr.exports, en = {}, Fn = [], Sc = function(t) {
    Fn.push(t);
  };
  function Vn(e, t) {
    if (N.env.NODE_ENV !== "production" && !e && console !== void 0) {
      var r = Fn.reduce(function(n, o) {
        return o(n ?? "", "warning");
      }, t);
      r && console.error("Warning: ".concat(r));
    }
  }
  function Cc(e, t) {
    if (N.env.NODE_ENV !== "production" && !e && console !== void 0) {
      var r = Fn.reduce(function(n, o) {
        return o(n ?? "", "note");
      }, t);
      r && console.warn("Note: ".concat(r));
    }
  }
  function sa() {
    en = {};
  }
  function la(e, t, r) {
    !t && !en[r] && (e(!1, r), en[r] = !0);
  }
  function Ze(e, t) {
    la(Vn, e, t);
  }
  function Ec(e, t) {
    la(Cc, e, t);
  }
  Ze.preMessage = Sc;
  Ze.resetWarned = sa;
  Ze.noteOnce = Ec;
  function Y(e) {
    "@babel/helpers - typeof";
    return Y = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
      return typeof t;
    } : function(t) {
      return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    }, Y(e);
  }
  function xc(e, t) {
    if (Y(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
      var n = r.call(e, t || "default");
      if (Y(n) != "object") return n;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (t === "string" ? String : Number)(e);
  }
  function ua(e) {
    var t = xc(e, "string");
    return Y(t) == "symbol" ? t : t + "";
  }
  function z(e, t, r) {
    return (t = ua(t)) in e ? Object.defineProperty(e, t, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = r, e;
  }
  function vo(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function(o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function L(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] != null ? arguments[t] : {};
      t % 2 ? vo(Object(r), !0).forEach(function(n) {
        z(e, n, r[n]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vo(Object(r)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
      });
    }
    return e;
  }
  function po(e) {
    return e instanceof HTMLElement || e instanceof SVGElement;
  }
  function wc(e) {
    return e && Y(e) === "object" && po(e.nativeElement) ? e.nativeElement : po(e) ? e : null;
  }
  function Tc(e) {
    var t = wc(e);
    if (t)
      return t;
    if (e instanceof F.Component) {
      var r;
      return (r = lo.findDOMNode) === null || r === void 0 ? void 0 : r.call(lo, e);
    }
    return null;
  }
  function fa(e, t, r) {
    var n = h.useRef({});
    return (!("value" in n.current) || r(n.current.condition, t)) && (n.current.value = e(), n.current.condition = t), n.current.value;
  }
  var da = function(t, r) {
    typeof t == "function" ? t(r) : Y(t) === "object" && t && "current" in t && (t.current = r);
  }, Wn = function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    var o = r.filter(Boolean);
    return o.length <= 1 ? o[0] : function(a) {
      r.forEach(function(i) {
        da(i, a);
      });
    };
  }, va = function(t) {
    var r, n, o = nr.isMemo(t) ? t.type.type : t.type;
    return !(typeof o == "function" && !((r = o.prototype) !== null && r !== void 0 && r.render) && o.$$typeof !== nr.ForwardRef || typeof t == "function" && !((n = t.prototype) !== null && n !== void 0 && n.render) && t.$$typeof !== nr.ForwardRef);
  };
  function go(e) {
    return /* @__PURE__ */ ic(e) && !nr.isFragment(e);
  }
  Number(ac.split(".")[0]) >= 19;
  function De(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }
  function ho(e, t) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r];
      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, ua(n.key), n);
    }
  }
  function ze(e, t, r) {
    return t && ho(e.prototype, t), r && ho(e, r), Object.defineProperty(e, "prototype", {
      writable: !1
    }), e;
  }
  function tn(e, t) {
    return tn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
      return r.__proto__ = n, r;
    }, tn(e, t);
  }
  function Sr(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        writable: !0,
        configurable: !0
      }
    }), Object.defineProperty(e, "prototype", {
      writable: !1
    }), t && tn(e, t);
  }
  function dr(e) {
    return dr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    }, dr(e);
  }
  function pa() {
    try {
      var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch {
    }
    return (pa = function() {
      return !!e;
    })();
  }
  function ct(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function Oc(e, t) {
    if (t && (Y(t) == "object" || typeof t == "function")) return t;
    if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return ct(e);
  }
  function Cr(e) {
    var t = pa();
    return function() {
      var r, n = dr(e);
      if (t) {
        var o = dr(this).constructor;
        r = Reflect.construct(n, arguments, o);
      } else r = n.apply(this, arguments);
      return Oc(this, r);
    };
  }
  function Ac(e, t) {
    var r = Object.assign({}, e);
    return Array.isArray(t) && t.forEach(function(n) {
      delete r[n];
    }), r;
  }
  function rn(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
    return n;
  }
  function Pc(e) {
    if (Array.isArray(e)) return rn(e);
  }
  function ga(e) {
    if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
  }
  function Gn(e, t) {
    if (e) {
      if (typeof e == "string") return rn(e, t);
      var r = {}.toString.call(e).slice(8, -1);
      return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? rn(e, t) : void 0;
    }
  }
  function _c() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function ke(e) {
    return Pc(e) || ga(e) || Gn(e) || _c();
  }
  var ha = function(t) {
    return +setTimeout(t, 16);
  }, ma = function(t) {
    return clearTimeout(t);
  };
  typeof window < "u" && "requestAnimationFrame" in window && (ha = function(t) {
    return window.requestAnimationFrame(t);
  }, ma = function(t) {
    return window.cancelAnimationFrame(t);
  });
  var mo = 0, Er = /* @__PURE__ */ new Map();
  function ba(e) {
    Er.delete(e);
  }
  var Ye = function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
    mo += 1;
    var n = mo;
    function o(a) {
      if (a === 0)
        ba(n), t();
      else {
        var i = ha(function() {
          o(a - 1);
        });
        Er.set(n, i);
      }
    }
    return o(r), n;
  };
  Ye.cancel = function(e) {
    var t = Er.get(e);
    return ba(e), ma(t);
  };
  N.env.NODE_ENV !== "production" && (Ye.ids = function() {
    return Er;
  });
  function ya(e) {
    if (Array.isArray(e)) return e;
  }
  function Rc(e, t) {
    var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (r != null) {
      var n, o, a, i, c = [], l = !0, s = !1;
      try {
        if (a = (r = r.call(e)).next, t === 0) {
          if (Object(r) !== r) return;
          l = !1;
        } else for (; !(l = (n = a.call(r)).done) && (c.push(n.value), c.length !== t); l = !0) ;
      } catch (u) {
        s = !0, o = u;
      } finally {
        try {
          if (!l && r.return != null && (i = r.return(), Object(i) !== i)) return;
        } finally {
          if (s) throw o;
        }
      }
      return c;
    }
  }
  function Sa() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function V(e, t) {
    return ya(e) || Rc(e, t) || Gn(e, t) || Sa();
  }
  function It(e) {
    for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
      r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
      (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
      r >>> 24, t = /* Math.imul(k, m): */
      (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
    switch (o) {
      case 3:
        t ^= (e.charCodeAt(n + 2) & 255) << 16;
      case 2:
        t ^= (e.charCodeAt(n + 1) & 255) << 8;
      case 1:
        t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
        (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
    }
    return t ^= t >>> 13, t = /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
  }
  function Fe() {
    return !!(typeof window < "u" && window.document && window.document.createElement);
  }
  function $c(e, t) {
    if (!e)
      return !1;
    if (e.contains)
      return e.contains(t);
    for (var r = t; r; ) {
      if (r === e)
        return !0;
      r = r.parentNode;
    }
    return !1;
  }
  var bo = "data-rc-order", yo = "data-rc-priority", Mc = "rc-util-key", nn = /* @__PURE__ */ new Map();
  function Ca() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
    return t ? t.startsWith("data-") ? t : "data-".concat(t) : Mc;
  }
  function xr(e) {
    if (e.attachTo)
      return e.attachTo;
    var t = document.querySelector("head");
    return t || document.body;
  }
  function jc(e) {
    return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
  }
  function Un(e) {
    return Array.from((nn.get(e) || e).children).filter(function(t) {
      return t.tagName === "STYLE";
    });
  }
  function Ea(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!Fe())
      return null;
    var r = t.csp, n = t.prepend, o = t.priority, a = o === void 0 ? 0 : o, i = jc(n), c = i === "prependQueue", l = document.createElement("style");
    l.setAttribute(bo, i), c && a && l.setAttribute(yo, "".concat(a)), r != null && r.nonce && (l.nonce = r == null ? void 0 : r.nonce), l.innerHTML = e;
    var s = xr(t), u = s.firstChild;
    if (n) {
      if (c) {
        var f = (t.styles || Un(s)).filter(function(d) {
          if (!["prepend", "prependQueue"].includes(d.getAttribute(bo)))
            return !1;
          var g = Number(d.getAttribute(yo) || 0);
          return a >= g;
        });
        if (f.length)
          return s.insertBefore(l, f[f.length - 1].nextSibling), l;
      }
      s.insertBefore(l, u);
    } else
      s.appendChild(l);
    return l;
  }
  function xa(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = xr(t);
    return (t.styles || Un(r)).find(function(n) {
      return n.getAttribute(Ca(t)) === e;
    });
  }
  function wa(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = xa(e, t);
    if (r) {
      var n = xr(t);
      n.removeChild(r);
    }
  }
  function Ic(e, t) {
    var r = nn.get(e);
    if (!r || !$c(document, r)) {
      var n = Ea("", t), o = n.parentNode;
      nn.set(e, o), e.removeChild(n);
    }
  }
  function st(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = xr(r), o = Un(n), a = L(L({}, r), {}, {
      styles: o
    });
    Ic(n, a);
    var i = xa(t, a);
    if (i) {
      var c, l;
      if ((c = a.csp) !== null && c !== void 0 && c.nonce && i.nonce !== ((l = a.csp) === null || l === void 0 ? void 0 : l.nonce)) {
        var s;
        i.nonce = (s = a.csp) === null || s === void 0 ? void 0 : s.nonce;
      }
      return i.innerHTML !== e && (i.innerHTML = e), i;
    }
    var u = Ea(e, a);
    return u.setAttribute(Ca(a), t), u;
  }
  function Lc(e, t) {
    if (e == null) return {};
    var r = {};
    for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
      if (t.includes(n)) continue;
      r[n] = e[n];
    }
    return r;
  }
  function Lt(e, t) {
    if (e == null) return {};
    var r, n, o = Lc(e, t);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      for (n = 0; n < a.length; n++) r = a[n], t.includes(r) || {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
    }
    return o;
  }
  function Nc(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = /* @__PURE__ */ new Set();
    function o(a, i) {
      var c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, l = n.has(a);
      if (Ze(!l, "Warning: There may be circular references"), l)
        return !1;
      if (a === i)
        return !0;
      if (r && c > 1)
        return !1;
      n.add(a);
      var s = c + 1;
      if (Array.isArray(a)) {
        if (!Array.isArray(i) || a.length !== i.length)
          return !1;
        for (var u = 0; u < a.length; u++)
          if (!o(a[u], i[u], s))
            return !1;
        return !0;
      }
      if (a && i && Y(a) === "object" && Y(i) === "object") {
        var f = Object.keys(a);
        return f.length !== Object.keys(i).length ? !1 : f.every(function(d) {
          return o(a[d], i[d], s);
        });
      }
      return !1;
    }
    return o(e, t);
  }
  var kc = "%";
  function on(e) {
    return e.join(kc);
  }
  var Bc = /* @__PURE__ */ function() {
    function e(t) {
      De(this, e), z(this, "instanceId", void 0), z(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = t;
    }
    return ze(e, [{
      key: "get",
      value: function(r) {
        return this.opGet(on(r));
      }
      /** A fast get cache with `get` concat. */
    }, {
      key: "opGet",
      value: function(r) {
        return this.cache.get(r) || null;
      }
    }, {
      key: "update",
      value: function(r, n) {
        return this.opUpdate(on(r), n);
      }
      /** A fast get cache with `get` concat. */
    }, {
      key: "opUpdate",
      value: function(r, n) {
        var o = this.cache.get(r), a = n(o);
        a === null ? this.cache.delete(r) : this.cache.set(r, a);
      }
    }]), e;
  }(), St = "data-token-hash", Se = "data-css-hash", Hc = "data-cache-path", qe = "__cssinjs_instance__";
  function Dc() {
    var e = Math.random().toString(12).slice(2);
    if (typeof document < "u" && document.head && document.body) {
      var t = document.body.querySelectorAll("style[".concat(Se, "]")) || [], r = document.head.firstChild;
      Array.from(t).forEach(function(o) {
        o[qe] = o[qe] || e, o[qe] === e && document.head.insertBefore(o, r);
      });
      var n = {};
      Array.from(document.querySelectorAll("style[".concat(Se, "]"))).forEach(function(o) {
        var a = o.getAttribute(Se);
        if (n[a]) {
          if (o[qe] === e) {
            var i;
            (i = o.parentNode) === null || i === void 0 || i.removeChild(o);
          }
        } else
          n[a] = !0;
      });
    }
    return new Bc(e);
  }
  var zc = /* @__PURE__ */ h.createContext({
    hashPriority: "low",
    cache: Dc(),
    defaultCache: !0
  });
  const wr = zc;
  var Ta = /* @__PURE__ */ ze(function e() {
    De(this, e);
  }), Oa = "CALC_UNIT", Fc = new RegExp(Oa, "g");
  function Ir(e) {
    return typeof e == "number" ? "".concat(e).concat(Oa) : e;
  }
  var Vc = /* @__PURE__ */ function(e) {
    Sr(r, e);
    var t = Cr(r);
    function r(n, o) {
      var a;
      De(this, r), a = t.call(this), z(ct(a), "result", ""), z(ct(a), "unitlessCssVar", void 0), z(ct(a), "lowPriority", void 0);
      var i = Y(n);
      return a.unitlessCssVar = o, n instanceof r ? a.result = "(".concat(n.result, ")") : i === "number" ? a.result = Ir(n) : i === "string" && (a.result = n), a;
    }
    return ze(r, [{
      key: "add",
      value: function(o) {
        return o instanceof r ? this.result = "".concat(this.result, " + ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " + ").concat(Ir(o))), this.lowPriority = !0, this;
      }
    }, {
      key: "sub",
      value: function(o) {
        return o instanceof r ? this.result = "".concat(this.result, " - ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " - ").concat(Ir(o))), this.lowPriority = !0, this;
      }
    }, {
      key: "mul",
      value: function(o) {
        return this.lowPriority && (this.result = "(".concat(this.result, ")")), o instanceof r ? this.result = "".concat(this.result, " * ").concat(o.getResult(!0)) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " * ").concat(o)), this.lowPriority = !1, this;
      }
    }, {
      key: "div",
      value: function(o) {
        return this.lowPriority && (this.result = "(".concat(this.result, ")")), o instanceof r ? this.result = "".concat(this.result, " / ").concat(o.getResult(!0)) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " / ").concat(o)), this.lowPriority = !1, this;
      }
    }, {
      key: "getResult",
      value: function(o) {
        return this.lowPriority || o ? "(".concat(this.result, ")") : this.result;
      }
    }, {
      key: "equal",
      value: function(o) {
        var a = this, i = o || {}, c = i.unit, l = !0;
        return typeof c == "boolean" ? l = c : Array.from(this.unitlessCssVar).some(function(s) {
          return a.result.includes(s);
        }) && (l = !1), this.result = this.result.replace(Fc, l ? "px" : ""), typeof this.lowPriority < "u" ? "calc(".concat(this.result, ")") : this.result;
      }
    }]), r;
  }(Ta), Wc = /* @__PURE__ */ function(e) {
    Sr(r, e);
    var t = Cr(r);
    function r(n) {
      var o;
      return De(this, r), o = t.call(this), z(ct(o), "result", 0), n instanceof r ? o.result = n.result : typeof n == "number" && (o.result = n), o;
    }
    return ze(r, [{
      key: "add",
      value: function(o) {
        return o instanceof r ? this.result += o.result : typeof o == "number" && (this.result += o), this;
      }
    }, {
      key: "sub",
      value: function(o) {
        return o instanceof r ? this.result -= o.result : typeof o == "number" && (this.result -= o), this;
      }
    }, {
      key: "mul",
      value: function(o) {
        return o instanceof r ? this.result *= o.result : typeof o == "number" && (this.result *= o), this;
      }
    }, {
      key: "div",
      value: function(o) {
        return o instanceof r ? this.result /= o.result : typeof o == "number" && (this.result /= o), this;
      }
    }, {
      key: "equal",
      value: function() {
        return this.result;
      }
    }]), r;
  }(Ta), Gc = function(t, r) {
    var n = t === "css" ? Vc : Wc;
    return function(o) {
      return new n(o, r);
    };
  };
  function Uc(e, t) {
    if (e.length !== t.length)
      return !1;
    for (var r = 0; r < e.length; r++)
      if (e[r] !== t[r])
        return !1;
    return !0;
  }
  var Xn = /* @__PURE__ */ function() {
    function e() {
      De(this, e), z(this, "cache", void 0), z(this, "keys", void 0), z(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
    }
    return ze(e, [{
      key: "size",
      value: function() {
        return this.keys.length;
      }
    }, {
      key: "internalGet",
      value: function(r) {
        var n, o, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, i = {
          map: this.cache
        };
        return r.forEach(function(c) {
          if (!i)
            i = void 0;
          else {
            var l;
            i = (l = i) === null || l === void 0 || (l = l.map) === null || l === void 0 ? void 0 : l.get(c);
          }
        }), (n = i) !== null && n !== void 0 && n.value && a && (i.value[1] = this.cacheCallTimes++), (o = i) === null || o === void 0 ? void 0 : o.value;
      }
    }, {
      key: "get",
      value: function(r) {
        var n;
        return (n = this.internalGet(r, !0)) === null || n === void 0 ? void 0 : n[0];
      }
    }, {
      key: "has",
      value: function(r) {
        return !!this.internalGet(r);
      }
    }, {
      key: "set",
      value: function(r, n) {
        var o = this;
        if (!this.has(r)) {
          if (this.size() + 1 > e.MAX_CACHE_SIZE + e.MAX_CACHE_OFFSET) {
            var a = this.keys.reduce(function(s, u) {
              var f = V(s, 2), d = f[1];
              return o.internalGet(u)[1] < d ? [u, o.internalGet(u)[1]] : s;
            }, [this.keys[0], this.cacheCallTimes]), i = V(a, 1), c = i[0];
            this.delete(c);
          }
          this.keys.push(r);
        }
        var l = this.cache;
        r.forEach(function(s, u) {
          if (u === r.length - 1)
            l.set(s, {
              value: [n, o.cacheCallTimes++]
            });
          else {
            var f = l.get(s);
            f ? f.map || (f.map = /* @__PURE__ */ new Map()) : l.set(s, {
              map: /* @__PURE__ */ new Map()
            }), l = l.get(s).map;
          }
        });
      }
    }, {
      key: "deleteByPath",
      value: function(r, n) {
        var o = r.get(n[0]);
        if (n.length === 1) {
          var a;
          return o.map ? r.set(n[0], {
            map: o.map
          }) : r.delete(n[0]), (a = o.value) === null || a === void 0 ? void 0 : a[0];
        }
        var i = this.deleteByPath(o.map, n.slice(1));
        return (!o.map || o.map.size === 0) && !o.value && r.delete(n[0]), i;
      }
    }, {
      key: "delete",
      value: function(r) {
        if (this.has(r))
          return this.keys = this.keys.filter(function(n) {
            return !Uc(n, r);
          }), this.deleteByPath(this.cache, r);
      }
    }]), e;
  }();
  z(Xn, "MAX_CACHE_SIZE", 20);
  z(Xn, "MAX_CACHE_OFFSET", 5);
  var So = 0, Aa = /* @__PURE__ */ function() {
    function e(t) {
      De(this, e), z(this, "derivatives", void 0), z(this, "id", void 0), this.derivatives = Array.isArray(t) ? t : [t], this.id = So, t.length === 0 && Vn(t.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), So += 1;
    }
    return ze(e, [{
      key: "getDerivativeToken",
      value: function(r) {
        return this.derivatives.reduce(function(n, o) {
          return o(r, n);
        }, void 0);
      }
    }]), e;
  }(), Lr = new Xn();
  function an(e) {
    var t = Array.isArray(e) ? e : [e];
    return Lr.has(t) || Lr.set(t, new Aa(t)), Lr.get(t);
  }
  var Xc = /* @__PURE__ */ new WeakMap(), Nr = {};
  function qc(e, t) {
    for (var r = Xc, n = 0; n < t.length; n += 1) {
      var o = t[n];
      r.has(o) || r.set(o, /* @__PURE__ */ new WeakMap()), r = r.get(o);
    }
    return r.has(Nr) || r.set(Nr, e()), r.get(Nr);
  }
  var Co = /* @__PURE__ */ new WeakMap();
  function Mt(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = Co.get(e) || "";
    return r || (Object.keys(e).forEach(function(n) {
      var o = e[n];
      r += n, o instanceof Aa ? r += o.id : o && Y(o) === "object" ? r += Mt(o, t) : r += o;
    }), t && (r = It(r)), Co.set(e, r)), r;
  }
  function Eo(e, t) {
    return It("".concat(t, "_").concat(Mt(e, !0)));
  }
  var cn = Fe();
  function Qe(e) {
    return typeof e == "number" ? "".concat(e, "px") : e;
  }
  function vr(e, t, r) {
    var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
    if (o)
      return e;
    var a = L(L({}, n), {}, z(z({}, St, t), Se, r)), i = Object.keys(a).map(function(c) {
      var l = a[c];
      return l ? "".concat(c, '="').concat(l, '"') : null;
    }).filter(function(c) {
      return c;
    }).join(" ");
    return "<style ".concat(i, ">").concat(e, "</style>");
  }
  var or = function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    return "--".concat(r ? "".concat(r, "-") : "").concat(t).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
  }, Kc = function(t, r, n) {
    return Object.keys(t).length ? ".".concat(r).concat(n != null && n.scope ? ".".concat(n.scope) : "", "{").concat(Object.entries(t).map(function(o) {
      var a = V(o, 2), i = a[0], c = a[1];
      return "".concat(i, ":").concat(c, ";");
    }).join(""), "}") : "";
  }, Pa = function(t, r, n) {
    var o = {}, a = {};
    return Object.entries(t).forEach(function(i) {
      var c, l, s = V(i, 2), u = s[0], f = s[1];
      if (n != null && (c = n.preserve) !== null && c !== void 0 && c[u])
        a[u] = f;
      else if ((typeof f == "string" || typeof f == "number") && !(n != null && (l = n.ignore) !== null && l !== void 0 && l[u])) {
        var d, g = or(u, n == null ? void 0 : n.prefix);
        o[g] = typeof f == "number" && !(n != null && (d = n.unitless) !== null && d !== void 0 && d[u]) ? "".concat(f, "px") : String(f), a[u] = "var(".concat(g, ")");
      }
    }), [a, Kc(o, r, {
      scope: n == null ? void 0 : n.scope
    })];
  }, xo = N.env.NODE_ENV !== "test" && Fe() ? h.useLayoutEffect : h.useEffect, Yc = function(t, r) {
    var n = h.useRef(!0);
    xo(function() {
      return t(n.current);
    }, r), xo(function() {
      return n.current = !1, function() {
        n.current = !0;
      };
    }, []);
  }, Qc = L({}, h), wo = Qc.useInsertionEffect, Zc = function(t, r, n) {
    h.useMemo(t, n), Yc(function() {
      return r(!0);
    }, n);
  }, Jc = wo ? function(e, t, r) {
    return wo(function() {
      return e(), t();
    }, r);
  } : Zc;
  const es = Jc;
  var ts = L({}, h), rs = ts.useInsertionEffect, ns = function(t) {
    var r = [], n = !1;
    function o(a) {
      if (n) {
        N.env.NODE_ENV !== "production" && Vn(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
        return;
      }
      r.push(a);
    }
    return h.useEffect(function() {
      return n = !1, function() {
        n = !0, r.length && r.forEach(function(a) {
          return a();
        });
      };
    }, t), o;
  }, os = function() {
    return function(t) {
      t();
    };
  }, as = typeof rs < "u" ? ns : os;
  const is = as;
  function cs() {
    return !1;
  }
  var sn = !1;
  function ss() {
    return sn;
  }
  const ls = N.env.NODE_ENV === "production" ? cs : ss;
  if (N.env.NODE_ENV !== "production" && typeof fr < "u" && fr && fr.hot && typeof window < "u") {
    var kr = window;
    if (typeof kr.webpackHotUpdate == "function") {
      var us = kr.webpackHotUpdate;
      kr.webpackHotUpdate = function() {
        return sn = !0, setTimeout(function() {
          sn = !1;
        }, 0), us.apply(void 0, arguments);
      };
    }
  }
  function qn(e, t, r, n, o) {
    var a = h.useContext(wr), i = a.cache, c = [e].concat(ke(t)), l = on(c), s = is([l]), u = ls(), f = function(m) {
      i.opUpdate(l, function(v) {
        var A = v || [void 0, void 0], E = V(A, 2), R = E[0], _ = R === void 0 ? 0 : R, w = E[1], T = w;
        N.env.NODE_ENV !== "production" && w && u && (n == null || n(T, u), T = null);
        var S = T || r(), P = [_, S];
        return m ? m(P) : P;
      });
    };
    h.useMemo(
      function() {
        f();
      },
      /* eslint-disable react-hooks/exhaustive-deps */
      [l]
      /* eslint-enable */
    );
    var d = i.opGet(l);
    N.env.NODE_ENV !== "production" && !d && (f(), d = i.opGet(l));
    var g = d[1];
    return es(function() {
      o == null || o(g);
    }, function(C) {
      return f(function(m) {
        var v = V(m, 2), A = v[0], E = v[1];
        return C && A === 0 && (o == null || o(g)), [A + 1, E];
      }), function() {
        i.opUpdate(l, function(m) {
          var v = m || [], A = V(v, 2), E = A[0], R = E === void 0 ? 0 : E, _ = A[1], w = R - 1;
          return w === 0 ? (s(function() {
            (C || !i.opGet(l)) && (n == null || n(_, !1));
          }), null) : [R - 1, _];
        });
      };
    }, [l]), g;
  }
  var fs = {}, ds = N.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", rt = /* @__PURE__ */ new Map();
  function vs(e) {
    rt.set(e, (rt.get(e) || 0) + 1);
  }
  function ps(e, t) {
    if (typeof document < "u") {
      var r = document.querySelectorAll("style[".concat(St, '="').concat(e, '"]'));
      r.forEach(function(n) {
        if (n[qe] === t) {
          var o;
          (o = n.parentNode) === null || o === void 0 || o.removeChild(n);
        }
      });
    }
  }
  var gs = 0;
  function hs(e, t) {
    rt.set(e, (rt.get(e) || 0) - 1);
    var r = Array.from(rt.keys()), n = r.filter(function(o) {
      var a = rt.get(o) || 0;
      return a <= 0;
    });
    r.length - n.length > gs && n.forEach(function(o) {
      ps(o, t), rt.delete(o);
    });
  }
  var ms = function(t, r, n, o) {
    var a = n.getDerivativeToken(t), i = L(L({}, a), r);
    return o && (i = o(i)), i;
  }, _a = "token";
  function bs(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = Ae(wr), o = n.cache.instanceId, a = n.container, i = r.salt, c = i === void 0 ? "" : i, l = r.override, s = l === void 0 ? fs : l, u = r.formatToken, f = r.getComputedToken, d = r.cssVar, g = qc(function() {
      return Object.assign.apply(Object, [{}].concat(ke(t)));
    }, t), C = Mt(g), m = Mt(s), v = d ? Mt(d) : "", A = qn(_a, [c, e.id, C, m, v], function() {
      var E, R = f ? f(g, s, e) : ms(g, s, e, u), _ = L({}, R), w = "";
      if (d) {
        var T = Pa(R, d.key, {
          prefix: d.prefix,
          ignore: d.ignore,
          unitless: d.unitless,
          preserve: d.preserve
        }), S = V(T, 2);
        R = S[0], w = S[1];
      }
      var P = Eo(R, c);
      R._tokenKey = P, _._tokenKey = Eo(_, c);
      var k = (E = d == null ? void 0 : d.key) !== null && E !== void 0 ? E : P;
      R._themeKey = k, vs(k);
      var W = "".concat(ds, "-").concat(It(P));
      return R._hashId = W, [R, W, _, w, (d == null ? void 0 : d.key) || ""];
    }, function(E) {
      hs(E[0]._themeKey, o);
    }, function(E) {
      var R = V(E, 4), _ = R[0], w = R[3];
      if (d && w) {
        var T = st(w, It("css-variables-".concat(_._themeKey)), {
          mark: Se,
          prepend: "queue",
          attachTo: a,
          priority: -999
        });
        T[qe] = o, T.setAttribute(St, _._themeKey);
      }
    });
    return A;
  }
  var ys = function(t, r, n) {
    var o = V(t, 5), a = o[2], i = o[3], c = o[4], l = n || {}, s = l.plain;
    if (!i)
      return null;
    var u = a._tokenKey, f = -999, d = {
      "data-rc-order": "prependQueue",
      "data-rc-priority": "".concat(f)
    }, g = vr(i, c, u, d, s);
    return [f, u, g];
  }, Ss = {
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
    // SVG-related properties
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
  }, Ra = "comm", $a = "rule", Ma = "decl", Cs = "@import", Es = "@keyframes", xs = "@layer", ja = Math.abs, Kn = String.fromCharCode;
  function Ia(e) {
    return e.trim();
  }
  function ar(e, t, r) {
    return e.replace(t, r);
  }
  function ws(e, t, r) {
    return e.indexOf(t, r);
  }
  function Nt(e, t) {
    return e.charCodeAt(t) | 0;
  }
  function kt(e, t, r) {
    return e.slice(t, r);
  }
  function Le(e) {
    return e.length;
  }
  function Ts(e) {
    return e.length;
  }
  function Gt(e, t) {
    return t.push(e), e;
  }
  var Tr = 1, Ct = 1, La = 0, pe = 0, re = 0, xt = "";
  function Yn(e, t, r, n, o, a, i, c) {
    return { value: e, root: t, parent: r, type: n, props: o, children: a, line: Tr, column: Ct, length: i, return: "", siblings: c };
  }
  function Os() {
    return re;
  }
  function As() {
    return re = pe > 0 ? Nt(xt, --pe) : 0, Ct--, re === 10 && (Ct = 1, Tr--), re;
  }
  function Ce() {
    return re = pe < La ? Nt(xt, pe++) : 0, Ct++, re === 10 && (Ct = 1, Tr++), re;
  }
  function lt() {
    return Nt(xt, pe);
  }
  function ir() {
    return pe;
  }
  function Or(e, t) {
    return kt(xt, e, t);
  }
  function ln(e) {
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
  function Ps(e) {
    return Tr = Ct = 1, La = Le(xt = e), pe = 0, [];
  }
  function _s(e) {
    return xt = "", e;
  }
  function Br(e) {
    return Ia(Or(pe - 1, un(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
  }
  function Rs(e) {
    for (; (re = lt()) && re < 33; )
      Ce();
    return ln(e) > 2 || ln(re) > 3 ? "" : " ";
  }
  function $s(e, t) {
    for (; --t && Ce() && !(re < 48 || re > 102 || re > 57 && re < 65 || re > 70 && re < 97); )
      ;
    return Or(e, ir() + (t < 6 && lt() == 32 && Ce() == 32));
  }
  function un(e) {
    for (; Ce(); )
      switch (re) {
        case e:
          return pe;
        case 34:
        case 39:
          e !== 34 && e !== 39 && un(re);
          break;
        case 40:
          e === 41 && un(e);
          break;
        case 92:
          Ce();
          break;
      }
    return pe;
  }
  function Ms(e, t) {
    for (; Ce() && e + re !== 57; )
      if (e + re === 84 && lt() === 47)
        break;
    return "/*" + Or(t, pe - 1) + "*" + Kn(e === 47 ? e : Ce());
  }
  function js(e) {
    for (; !ln(lt()); )
      Ce();
    return Or(e, pe);
  }
  function Is(e) {
    return _s(cr("", null, null, null, [""], e = Ps(e), 0, [0], e));
  }
  function cr(e, t, r, n, o, a, i, c, l) {
    for (var s = 0, u = 0, f = i, d = 0, g = 0, C = 0, m = 1, v = 1, A = 1, E = 0, R = "", _ = o, w = a, T = n, S = R; v; )
      switch (C = E, E = Ce()) {
        case 40:
          if (C != 108 && Nt(S, f - 1) == 58) {
            ws(S += ar(Br(E), "&", "&\f"), "&\f", ja(s ? c[s - 1] : 0)) != -1 && (A = -1);
            break;
          }
        case 34:
        case 39:
        case 91:
          S += Br(E);
          break;
        case 9:
        case 10:
        case 13:
        case 32:
          S += Rs(C);
          break;
        case 92:
          S += $s(ir() - 1, 7);
          continue;
        case 47:
          switch (lt()) {
            case 42:
            case 47:
              Gt(Ls(Ms(Ce(), ir()), t, r, l), l);
              break;
            default:
              S += "/";
          }
          break;
        case 123 * m:
          c[s++] = Le(S) * A;
        case 125 * m:
        case 59:
        case 0:
          switch (E) {
            case 0:
            case 125:
              v = 0;
            case 59 + u:
              A == -1 && (S = ar(S, /\f/g, "")), g > 0 && Le(S) - f && Gt(g > 32 ? Oo(S + ";", n, r, f - 1, l) : Oo(ar(S, " ", "") + ";", n, r, f - 2, l), l);
              break;
            case 59:
              S += ";";
            default:
              if (Gt(T = To(S, t, r, s, u, o, c, R, _ = [], w = [], f, a), a), E === 123)
                if (u === 0)
                  cr(S, t, T, T, _, a, f, c, w);
                else
                  switch (d === 99 && Nt(S, 3) === 110 ? 100 : d) {
                    case 100:
                    case 108:
                    case 109:
                    case 115:
                      cr(e, T, T, n && Gt(To(e, T, T, 0, 0, o, c, R, o, _ = [], f, w), w), o, w, f, c, n ? _ : w);
                      break;
                    default:
                      cr(S, T, T, T, [""], w, 0, c, w);
                  }
          }
          s = u = g = 0, m = A = 1, R = S = "", f = i;
          break;
        case 58:
          f = 1 + Le(S), g = C;
        default:
          if (m < 1) {
            if (E == 123)
              --m;
            else if (E == 125 && m++ == 0 && As() == 125)
              continue;
          }
          switch (S += Kn(E), E * m) {
            case 38:
              A = u > 0 ? 1 : (S += "\f", -1);
              break;
            case 44:
              c[s++] = (Le(S) - 1) * A, A = 1;
              break;
            case 64:
              lt() === 45 && (S += Br(Ce())), d = lt(), u = f = Le(R = S += js(ir())), E++;
              break;
            case 45:
              C === 45 && Le(S) == 2 && (m = 0);
          }
      }
    return a;
  }
  function To(e, t, r, n, o, a, i, c, l, s, u, f) {
    for (var d = o - 1, g = o === 0 ? a : [""], C = Ts(g), m = 0, v = 0, A = 0; m < n; ++m)
      for (var E = 0, R = kt(e, d + 1, d = ja(v = i[m])), _ = e; E < C; ++E)
        (_ = Ia(v > 0 ? g[E] + " " + R : ar(R, /&\f/g, g[E]))) && (l[A++] = _);
    return Yn(e, t, r, o === 0 ? $a : c, l, s, u, f);
  }
  function Ls(e, t, r, n) {
    return Yn(e, t, r, Ra, Kn(Os()), kt(e, 2, -2), 0, n);
  }
  function Oo(e, t, r, n, o) {
    return Yn(e, t, r, Ma, kt(e, 0, n), kt(e, n + 1, -1), n, o);
  }
  function fn(e, t) {
    for (var r = "", n = 0; n < e.length; n++)
      r += t(e[n], n, e, t) || "";
    return r;
  }
  function Ns(e, t, r, n) {
    switch (e.type) {
      case xs:
        if (e.children.length) break;
      case Cs:
      case Ma:
        return e.return = e.return || e.value;
      case Ra:
        return "";
      case Es:
        return e.return = e.value + "{" + fn(e.children, n) + "}";
      case $a:
        if (!Le(e.value = e.props.join(","))) return "";
    }
    return Le(r = fn(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
  }
  function Na(e, t) {
    var r = t.path, n = t.parentSelectors;
    Ze(!1, "[Ant Design CSS-in-JS] ".concat(r ? "Error in ".concat(r, ": ") : "").concat(e).concat(n.length ? " Selector: ".concat(n.join(" | ")) : ""));
  }
  var ks = function(t, r, n) {
    if (t === "content") {
      var o = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, a = ["normal", "none", "initial", "inherit", "unset"];
      (typeof r != "string" || a.indexOf(r) === -1 && !o.test(r) && (r.charAt(0) !== r.charAt(r.length - 1) || r.charAt(0) !== '"' && r.charAt(0) !== "'")) && Na("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(r, "\"'`."), n);
    }
  }, Bs = function(t, r, n) {
    t === "animation" && n.hashId && r !== "none" && Na("You seem to be using hashed animation '".concat(r, "', in which case 'animationName' with Keyframe as value is recommended."), n);
  }, Ao = "data-ant-cssinjs-cache-path", ka = "_FILE_STYLE__", ut, Ba = !0;
  function Hs() {
    if (!ut && (ut = {}, Fe())) {
      var e = document.createElement("div");
      e.className = Ao, e.style.position = "fixed", e.style.visibility = "hidden", e.style.top = "-9999px", document.body.appendChild(e);
      var t = getComputedStyle(e).content || "";
      t = t.replace(/^"/, "").replace(/"$/, ""), t.split(";").forEach(function(o) {
        var a = o.split(":"), i = V(a, 2), c = i[0], l = i[1];
        ut[c] = l;
      });
      var r = document.querySelector("style[".concat(Ao, "]"));
      if (r) {
        var n;
        Ba = !1, (n = r.parentNode) === null || n === void 0 || n.removeChild(r);
      }
      document.body.removeChild(e);
    }
  }
  function Ds(e) {
    return Hs(), !!ut[e];
  }
  function zs(e) {
    var t = ut[e], r = null;
    if (t && Fe())
      if (Ba)
        r = ka;
      else {
        var n = document.querySelector("style[".concat(Se, '="').concat(ut[e], '"]'));
        n ? r = n.innerHTML : delete ut[e];
      }
    return [r, t];
  }
  var Ha = "_skip_check_", Da = "_multi_value_";
  function sr(e) {
    var t = fn(Is(e), Ns);
    return t.replace(/\{%%%\:[^;];}/g, ";");
  }
  function Fs(e) {
    return Y(e) === "object" && e && (Ha in e || Da in e);
  }
  function Vs(e, t, r) {
    if (!t)
      return e;
    var n = ".".concat(t), o = r === "low" ? ":where(".concat(n, ")") : n, a = e.split(",").map(function(i) {
      var c, l = i.trim().split(/\s+/), s = l[0] || "", u = ((c = s.match(/^\w+/)) === null || c === void 0 ? void 0 : c[0]) || "";
      return s = "".concat(u).concat(o).concat(s.slice(u.length)), [s].concat(ke(l.slice(1))).join(" ");
    });
    return a.join(",");
  }
  var Ws = function e(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
      root: !0,
      parentSelectors: []
    }, o = n.root, a = n.injectHash, i = n.parentSelectors, c = r.hashId, l = r.layer, s = r.path, u = r.hashPriority, f = r.transformers, d = f === void 0 ? [] : f, g = r.linters, C = g === void 0 ? [] : g, m = "", v = {};
    function A(_) {
      var w = _.getName(c);
      if (!v[w]) {
        var T = e(_.style, r, {
          root: !1,
          parentSelectors: i
        }), S = V(T, 1), P = S[0];
        v[w] = "@keyframes ".concat(_.getName(c)).concat(P);
      }
    }
    function E(_) {
      var w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
      return _.forEach(function(T) {
        Array.isArray(T) ? E(T, w) : T && w.push(T);
      }), w;
    }
    var R = E(Array.isArray(t) ? t : [t]);
    return R.forEach(function(_) {
      var w = typeof _ == "string" && !o ? {} : _;
      if (typeof w == "string")
        m += "".concat(w, `
`);
      else if (w._keyframe)
        A(w);
      else {
        var T = d.reduce(function(S, P) {
          var k;
          return (P == null || (k = P.visit) === null || k === void 0 ? void 0 : k.call(P, S)) || S;
        }, w);
        Object.keys(T).forEach(function(S) {
          var P = T[S];
          if (Y(P) === "object" && P && (S !== "animationName" || !P._keyframe) && !Fs(P)) {
            var k = !1, W = S.trim(), U = !1;
            (o || a) && c ? W.startsWith("@") ? k = !0 : W = Vs(S, c, u) : o && !c && (W === "&" || W === "") && (W = "", U = !0);
            var D = e(P, r, {
              root: U,
              injectHash: k,
              parentSelectors: [].concat(ke(i), [W])
            }), B = V(D, 2), j = B[0], G = B[1];
            v = L(L({}, v), G), m += "".concat(W).concat(j);
          } else {
            let b = function(x, $) {
              N.env.NODE_ENV !== "production" && (Y(P) !== "object" || !(P != null && P[Ha])) && [ks, Bs].concat(ke(C)).forEach(function(H) {
                return H(x, $, {
                  path: s,
                  hashId: c,
                  parentSelectors: i
                });
              });
              var O = x.replace(/[A-Z]/g, function(H) {
                return "-".concat(H.toLowerCase());
              }), I = $;
              !Ss[x] && typeof I == "number" && I !== 0 && (I = "".concat(I, "px")), x === "animationName" && $ !== null && $ !== void 0 && $._keyframe && (A($), I = $.getName(c)), m += "".concat(O, ":").concat(I, ";");
            };
            var y, p = (y = P == null ? void 0 : P.value) !== null && y !== void 0 ? y : P;
            Y(P) === "object" && P !== null && P !== void 0 && P[Da] && Array.isArray(p) ? p.forEach(function(x) {
              b(S, x);
            }) : b(S, p);
          }
        });
      }
    }), o ? l && (m = "@layer ".concat(l.name, " {").concat(m, "}"), l.dependencies && (v["@layer ".concat(l.name)] = l.dependencies.map(function(_) {
      return "@layer ".concat(_, ", ").concat(l.name, ";");
    }).join(`
`))) : m = "{".concat(m, "}"), [m, v];
  };
  function za(e, t) {
    return It("".concat(e.join("%")).concat(t));
  }
  function Gs() {
    return null;
  }
  var Fa = "style";
  function dn(e, t) {
    var r = e.token, n = e.path, o = e.hashId, a = e.layer, i = e.nonce, c = e.clientOnly, l = e.order, s = l === void 0 ? 0 : l, u = h.useContext(wr), f = u.autoClear, d = u.mock, g = u.defaultCache, C = u.hashPriority, m = u.container, v = u.ssrInline, A = u.transformers, E = u.linters, R = u.cache, _ = u.layer, w = r._tokenKey, T = [w];
    _ && T.push("layer"), T.push.apply(T, ke(n));
    var S = cn;
    N.env.NODE_ENV !== "production" && d !== void 0 && (S = d === "client");
    var P = qn(
      Fa,
      T,
      // Create cache if needed
      function() {
        var B = T.join("|");
        if (Ds(B)) {
          var j = zs(B), G = V(j, 2), y = G[0], p = G[1];
          if (y)
            return [y, w, p, {}, c, s];
        }
        var b = t(), x = Ws(b, {
          hashId: o,
          hashPriority: C,
          layer: _ ? a : void 0,
          path: n.join("-"),
          transformers: A,
          linters: E
        }), $ = V(x, 2), O = $[0], I = $[1], H = sr(O), K = za(T, H);
        return [H, w, K, I, c, s];
      },
      // Remove cache if no need
      function(B, j) {
        var G = V(B, 3), y = G[2];
        (j || f) && cn && wa(y, {
          mark: Se
        });
      },
      // Effect: Inject style here
      function(B) {
        var j = V(B, 4), G = j[0];
        j[1];
        var y = j[2], p = j[3];
        if (S && G !== ka) {
          var b = {
            mark: Se,
            prepend: _ ? !1 : "queue",
            attachTo: m,
            priority: s
          }, x = typeof i == "function" ? i() : i;
          x && (b.csp = {
            nonce: x
          });
          var $ = [], O = [];
          Object.keys(p).forEach(function(H) {
            H.startsWith("@layer") ? $.push(H) : O.push(H);
          }), $.forEach(function(H) {
            st(sr(p[H]), "_layer-".concat(H), L(L({}, b), {}, {
              prepend: !0
            }));
          });
          var I = st(G, y, b);
          I[qe] = R.instanceId, I.setAttribute(St, w), N.env.NODE_ENV !== "production" && I.setAttribute(Hc, T.join("|")), O.forEach(function(H) {
            st(sr(p[H]), "_effect-".concat(H), b);
          });
        }
      }
    ), k = V(P, 3), W = k[0], U = k[1], D = k[2];
    return function(B) {
      var j;
      return !v || S || !g ? j = /* @__PURE__ */ h.createElement(Gs, null) : j = /* @__PURE__ */ h.createElement("style", yt({}, z(z({}, St, U), Se, D), {
        dangerouslySetInnerHTML: {
          __html: W
        }
      })), /* @__PURE__ */ h.createElement(h.Fragment, null, j, B);
    };
  }
  var Us = function(t, r, n) {
    var o = V(t, 6), a = o[0], i = o[1], c = o[2], l = o[3], s = o[4], u = o[5], f = n || {}, d = f.plain;
    if (s)
      return null;
    var g = a, C = {
      "data-rc-order": "prependQueue",
      "data-rc-priority": "".concat(u)
    };
    return g = vr(a, i, c, C, d), l && Object.keys(l).forEach(function(m) {
      if (!r[m]) {
        r[m] = !0;
        var v = sr(l[m]), A = vr(v, i, "_effect-".concat(m), C, d);
        m.startsWith("@layer") ? g = A + g : g += A;
      }
    }), [u, c, g];
  }, Va = "cssVar", Xs = function(t, r) {
    var n = t.key, o = t.prefix, a = t.unitless, i = t.ignore, c = t.token, l = t.scope, s = l === void 0 ? "" : l, u = Ae(wr), f = u.cache.instanceId, d = u.container, g = c._tokenKey, C = [].concat(ke(t.path), [n, s, g]), m = qn(Va, C, function() {
      var v = r(), A = Pa(v, n, {
        prefix: o,
        unitless: a,
        ignore: i,
        scope: s
      }), E = V(A, 2), R = E[0], _ = E[1], w = za(C, _);
      return [R, _, w, n];
    }, function(v) {
      var A = V(v, 3), E = A[2];
      cn && wa(E, {
        mark: Se
      });
    }, function(v) {
      var A = V(v, 3), E = A[1], R = A[2];
      if (E) {
        var _ = st(E, R, {
          mark: Se,
          prepend: "queue",
          attachTo: d,
          priority: -999
        });
        _[qe] = f, _.setAttribute(St, n);
      }
    });
    return m;
  }, qs = function(t, r, n) {
    var o = V(t, 4), a = o[1], i = o[2], c = o[3], l = n || {}, s = l.plain;
    if (!a)
      return null;
    var u = -999, f = {
      "data-rc-order": "prependQueue",
      "data-rc-priority": "".concat(u)
    }, d = vr(a, c, i, f, s);
    return [u, i, d];
  };
  z(z(z({}, Fa, Us), _a, ys), Va, qs);
  function pt(e) {
    return e.notSplit = !0, e;
  }
  pt(["borderTop", "borderBottom"]), pt(["borderTop"]), pt(["borderBottom"]), pt(["borderLeft", "borderRight"]), pt(["borderLeft"]), pt(["borderRight"]);
  var Qn = /* @__PURE__ */ zn({});
  function Ks(e) {
    return ya(e) || ga(e) || Gn(e) || Sa();
  }
  function vn(e, t) {
    for (var r = e, n = 0; n < t.length; n += 1) {
      if (r == null)
        return;
      r = r[t[n]];
    }
    return r;
  }
  function Wa(e, t, r, n) {
    if (!t.length)
      return r;
    var o = Ks(t), a = o[0], i = o.slice(1), c;
    return !e && typeof a == "number" ? c = [] : Array.isArray(e) ? c = ke(e) : c = L({}, e), n && r === void 0 && i.length === 1 ? delete c[a][i[0]] : c[a] = Wa(c[a], i, r, n), c;
  }
  function Hr(e, t, r) {
    var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
    return t.length && n && r === void 0 && !vn(e, t.slice(0, -1)) ? e : Wa(e, t, r, n);
  }
  function Ys(e) {
    return Y(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
  }
  function Po(e) {
    return Array.isArray(e) ? [] : {};
  }
  var Qs = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
  function Zs() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    var n = Po(t[0]);
    return t.forEach(function(o) {
      function a(i, c) {
        var l = new Set(c), s = vn(o, i), u = Array.isArray(s);
        if (u || Ys(s)) {
          if (!l.has(s)) {
            l.add(s);
            var f = vn(n, i);
            u ? n = Hr(n, i, []) : (!f || Y(f) !== "object") && (n = Hr(n, i, Po(s))), Qs(s).forEach(function(d) {
              a([].concat(ke(i), [d]), l);
            });
          }
        } else
          n = Hr(n, i, s);
      }
      a([]);
    }), n;
  }
  function Ga() {
  }
  let Ie = null;
  function Js() {
    Ie = null, sa();
  }
  let Zn = Ga;
  N.env.NODE_ENV !== "production" && (Zn = (e, t, r) => {
    Ze(e, `[antd: ${t}] ${r}`), N.env.NODE_ENV === "test" && Js();
  });
  const Ua = /* @__PURE__ */ h.createContext({}), wt = N.env.NODE_ENV !== "production" ? (e) => {
    const {
      strict: t
    } = h.useContext(Ua), r = (n, o, a) => {
      if (!n)
        if (t === !1 && o === "deprecated") {
          const i = Ie;
          Ie || (Ie = {}), Ie[e] = Ie[e] || [], Ie[e].includes(a || "") || Ie[e].push(a || ""), i || console.warn("[antd] There exists deprecated usage in your code:", Ie);
        } else
          N.env.NODE_ENV !== "production" && Zn(n, e, a);
    };
    return r.deprecated = (n, o, a, i) => {
      r(n, "deprecated", `\`${o}\` is deprecated. Please use \`${a}\` instead.${i ? ` ${i}` : ""}`);
    }, r;
  } : () => {
    const e = () => {
    };
    return e.deprecated = Ga, e;
  }, Ar = Zn, el = /* @__PURE__ */ zn(void 0);
  var tl = {
    // Options
    items_per_page: "/ page",
    jump_to: "Go to",
    jump_to_confirm: "confirm",
    page: "Page",
    // Pagination
    prev_page: "Previous Page",
    next_page: "Next Page",
    prev_5: "Previous 5 Pages",
    next_5: "Next 5 Pages",
    prev_3: "Previous 3 Pages",
    next_3: "Next 3 Pages",
    page_size: "Page Size"
  }, rl = {
    yearFormat: "YYYY",
    dayFormat: "D",
    cellMeridiemFormat: "A",
    monthBeforeYear: !0
  }, nl = L(L({}, rl), {}, {
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
    nextCentury: "Next century"
  });
  const Xa = {
    placeholder: "Select time",
    rangePlaceholder: ["Start time", "End time"]
  }, _o = {
    lang: Object.assign({
      placeholder: "Select date",
      yearPlaceholder: "Select year",
      quarterPlaceholder: "Select quarter",
      monthPlaceholder: "Select month",
      weekPlaceholder: "Select week",
      rangePlaceholder: ["Start date", "End date"],
      rangeYearPlaceholder: ["Start year", "End year"],
      rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
      rangeMonthPlaceholder: ["Start month", "End month"],
      rangeWeekPlaceholder: ["Start week", "End week"]
    }, nl),
    timePickerLocale: Object.assign({}, Xa)
  }, fe = "${label} is not a valid ${type}", Pr = {
    locale: "en",
    Pagination: tl,
    DatePicker: _o,
    TimePicker: Xa,
    Calendar: _o,
    global: {
      placeholder: "Please select"
    },
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
      cancelSort: "Click to cancel sorting"
    },
    Tour: {
      Next: "Next",
      Previous: "Previous",
      Finish: "Finish"
    },
    Modal: {
      okText: "OK",
      cancelText: "Cancel",
      justOkText: "OK"
    },
    Popconfirm: {
      okText: "OK",
      cancelText: "Cancel"
    },
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
      selectInvert: "Invert current page"
    },
    Upload: {
      uploading: "Uploading...",
      removeFile: "Remove file",
      uploadError: "Upload error",
      previewFile: "Preview file",
      downloadFile: "Download file"
    },
    Empty: {
      description: "No data"
    },
    Icon: {
      icon: "icon"
    },
    Text: {
      edit: "Edit",
      copy: "Copy",
      copied: "Copied",
      expand: "Expand",
      collapse: "Collapse"
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
          invalid: "${label} is an invalid date"
        },
        types: {
          string: fe,
          method: fe,
          array: fe,
          object: fe,
          number: fe,
          date: fe,
          boolean: fe,
          integer: fe,
          float: fe,
          regexp: fe,
          email: fe,
          url: fe,
          hex: fe
        },
        string: {
          len: "${label} must be ${len} characters",
          min: "${label} must be at least ${min} characters",
          max: "${label} must be up to ${max} characters",
          range: "${label} must be between ${min}-${max} characters"
        },
        number: {
          len: "${label} must be equal to ${len}",
          min: "${label} must be minimum ${min}",
          max: "${label} must be maximum ${max}",
          range: "${label} must be between ${min}-${max}"
        },
        array: {
          len: "Must be ${len} ${label}",
          min: "At least ${min} ${label}",
          max: "At most ${max} ${label}",
          range: "The amount of ${label} must be between ${min}-${max}"
        },
        pattern: {
          mismatch: "${label} does not match the pattern ${pattern}"
        }
      }
    },
    Image: {
      preview: "Preview"
    },
    QRCode: {
      expired: "QR code expired",
      refresh: "Refresh",
      scanned: "Scanned"
    },
    ColorPicker: {
      presetEmpty: "Empty"
    }
  };
  Object.assign({}, Pr.Modal);
  let lr = [];
  const Ro = () => lr.reduce((e, t) => Object.assign(Object.assign({}, e), t), Pr.Modal);
  function ol(e) {
    if (e) {
      const t = Object.assign({}, e);
      return lr.push(t), Ro(), () => {
        lr = lr.filter((r) => r !== t), Ro();
      };
    }
    Object.assign({}, Pr.Modal);
  }
  const qa = /* @__PURE__ */ zn(void 0), Ka = "internalMark", Ya = (e) => {
    const {
      locale: t = {},
      children: r,
      _ANT_MARK__: n
    } = e;
    if (N.env.NODE_ENV !== "production") {
      const a = wt("LocaleProvider");
      N.env.NODE_ENV !== "production" && a(n === Ka, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
    }
    h.useEffect(() => ol(t == null ? void 0 : t.Modal), [t]);
    const o = h.useMemo(() => Object.assign(Object.assign({}, t), {
      exist: !0
    }), [t]);
    return /* @__PURE__ */ h.createElement(qa.Provider, {
      value: o
    }, r);
  };
  N.env.NODE_ENV !== "production" && (Ya.displayName = "LocaleProvider");
  function se(e, t) {
    al(e) && (e = "100%");
    var r = il(e);
    return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), r && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
  }
  function Ut(e) {
    return Math.min(1, Math.max(0, e));
  }
  function al(e) {
    return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
  }
  function il(e) {
    return typeof e == "string" && e.indexOf("%") !== -1;
  }
  function Qa(e) {
    return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
  }
  function Xt(e) {
    return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
  }
  function ot(e) {
    return e.length === 1 ? "0" + e : String(e);
  }
  function cl(e, t, r) {
    return {
      r: se(e, 255) * 255,
      g: se(t, 255) * 255,
      b: se(r, 255) * 255
    };
  }
  function $o(e, t, r) {
    e = se(e, 255), t = se(t, 255), r = se(r, 255);
    var n = Math.max(e, t, r), o = Math.min(e, t, r), a = 0, i = 0, c = (n + o) / 2;
    if (n === o)
      i = 0, a = 0;
    else {
      var l = n - o;
      switch (i = c > 0.5 ? l / (2 - n - o) : l / (n + o), n) {
        case e:
          a = (t - r) / l + (t < r ? 6 : 0);
          break;
        case t:
          a = (r - e) / l + 2;
          break;
        case r:
          a = (e - t) / l + 4;
          break;
      }
      a /= 6;
    }
    return { h: a, s: i, l: c };
  }
  function Dr(e, t, r) {
    return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * (6 * r) : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
  }
  function sl(e, t, r) {
    var n, o, a;
    if (e = se(e, 360), t = se(t, 100), r = se(r, 100), t === 0)
      o = r, a = r, n = r;
    else {
      var i = r < 0.5 ? r * (1 + t) : r + t - r * t, c = 2 * r - i;
      n = Dr(c, i, e + 1 / 3), o = Dr(c, i, e), a = Dr(c, i, e - 1 / 3);
    }
    return { r: n * 255, g: o * 255, b: a * 255 };
  }
  function pn(e, t, r) {
    e = se(e, 255), t = se(t, 255), r = se(r, 255);
    var n = Math.max(e, t, r), o = Math.min(e, t, r), a = 0, i = n, c = n - o, l = n === 0 ? 0 : c / n;
    if (n === o)
      a = 0;
    else {
      switch (n) {
        case e:
          a = (t - r) / c + (t < r ? 6 : 0);
          break;
        case t:
          a = (r - e) / c + 2;
          break;
        case r:
          a = (e - t) / c + 4;
          break;
      }
      a /= 6;
    }
    return { h: a, s: l, v: i };
  }
  function ll(e, t, r) {
    e = se(e, 360) * 6, t = se(t, 100), r = se(r, 100);
    var n = Math.floor(e), o = e - n, a = r * (1 - t), i = r * (1 - o * t), c = r * (1 - (1 - o) * t), l = n % 6, s = [r, i, a, a, c, r][l], u = [c, r, r, i, a, a][l], f = [a, a, c, r, r, i][l];
    return { r: s * 255, g: u * 255, b: f * 255 };
  }
  function gn(e, t, r, n) {
    var o = [
      ot(Math.round(e).toString(16)),
      ot(Math.round(t).toString(16)),
      ot(Math.round(r).toString(16))
    ];
    return n && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) : o.join("");
  }
  function ul(e, t, r, n, o) {
    var a = [
      ot(Math.round(e).toString(16)),
      ot(Math.round(t).toString(16)),
      ot(Math.round(r).toString(16)),
      ot(fl(n))
    ];
    return o && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) && a[3].startsWith(a[3].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) + a[3].charAt(0) : a.join("");
  }
  function fl(e) {
    return Math.round(parseFloat(e) * 255).toString(16);
  }
  function Mo(e) {
    return de(e) / 255;
  }
  function de(e) {
    return parseInt(e, 16);
  }
  function dl(e) {
    return {
      r: e >> 16,
      g: (e & 65280) >> 8,
      b: e & 255
    };
  }
  var hn = {
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
    yellowgreen: "#9acd32"
  };
  function gt(e) {
    var t = { r: 0, g: 0, b: 0 }, r = 1, n = null, o = null, a = null, i = !1, c = !1;
    return typeof e == "string" && (e = gl(e)), typeof e == "object" && (Me(e.r) && Me(e.g) && Me(e.b) ? (t = cl(e.r, e.g, e.b), i = !0, c = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : Me(e.h) && Me(e.s) && Me(e.v) ? (n = Xt(e.s), o = Xt(e.v), t = ll(e.h, n, o), i = !0, c = "hsv") : Me(e.h) && Me(e.s) && Me(e.l) && (n = Xt(e.s), a = Xt(e.l), t = sl(e.h, n, a), i = !0, c = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (r = e.a)), r = Qa(r), {
      ok: i,
      format: e.format || c,
      r: Math.min(255, Math.max(t.r, 0)),
      g: Math.min(255, Math.max(t.g, 0)),
      b: Math.min(255, Math.max(t.b, 0)),
      a: r
    };
  }
  var vl = "[-\\+]?\\d+%?", pl = "[-\\+]?\\d*\\.\\d+%?", Ke = "(?:".concat(pl, ")|(?:").concat(vl, ")"), zr = "[\\s|\\(]+(".concat(Ke, ")[,|\\s]+(").concat(Ke, ")[,|\\s]+(").concat(Ke, ")\\s*\\)?"), Fr = "[\\s|\\(]+(".concat(Ke, ")[,|\\s]+(").concat(Ke, ")[,|\\s]+(").concat(Ke, ")[,|\\s]+(").concat(Ke, ")\\s*\\)?"), me = {
    CSS_UNIT: new RegExp(Ke),
    rgb: new RegExp("rgb" + zr),
    rgba: new RegExp("rgba" + Fr),
    hsl: new RegExp("hsl" + zr),
    hsla: new RegExp("hsla" + Fr),
    hsv: new RegExp("hsv" + zr),
    hsva: new RegExp("hsva" + Fr),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
  };
  function gl(e) {
    if (e = e.trim().toLowerCase(), e.length === 0)
      return !1;
    var t = !1;
    if (hn[e])
      e = hn[e], t = !0;
    else if (e === "transparent")
      return { r: 0, g: 0, b: 0, a: 0, format: "name" };
    var r = me.rgb.exec(e);
    return r ? { r: r[1], g: r[2], b: r[3] } : (r = me.rgba.exec(e), r ? { r: r[1], g: r[2], b: r[3], a: r[4] } : (r = me.hsl.exec(e), r ? { h: r[1], s: r[2], l: r[3] } : (r = me.hsla.exec(e), r ? { h: r[1], s: r[2], l: r[3], a: r[4] } : (r = me.hsv.exec(e), r ? { h: r[1], s: r[2], v: r[3] } : (r = me.hsva.exec(e), r ? { h: r[1], s: r[2], v: r[3], a: r[4] } : (r = me.hex8.exec(e), r ? {
      r: de(r[1]),
      g: de(r[2]),
      b: de(r[3]),
      a: Mo(r[4]),
      format: t ? "name" : "hex8"
    } : (r = me.hex6.exec(e), r ? {
      r: de(r[1]),
      g: de(r[2]),
      b: de(r[3]),
      format: t ? "name" : "hex"
    } : (r = me.hex4.exec(e), r ? {
      r: de(r[1] + r[1]),
      g: de(r[2] + r[2]),
      b: de(r[3] + r[3]),
      a: Mo(r[4] + r[4]),
      format: t ? "name" : "hex8"
    } : (r = me.hex3.exec(e), r ? {
      r: de(r[1] + r[1]),
      g: de(r[2] + r[2]),
      b: de(r[3] + r[3]),
      format: t ? "name" : "hex"
    } : !1)))))))));
  }
  function Me(e) {
    return !!me.CSS_UNIT.exec(String(e));
  }
  var ve = (
    /** @class */
    function() {
      function e(t, r) {
        t === void 0 && (t = ""), r === void 0 && (r = {});
        var n;
        if (t instanceof e)
          return t;
        typeof t == "number" && (t = dl(t)), this.originalInput = t;
        var o = gt(t);
        this.originalInput = t, this.r = o.r, this.g = o.g, this.b = o.b, this.a = o.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (n = r.format) !== null && n !== void 0 ? n : o.format, this.gradientType = r.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = o.ok;
      }
      return e.prototype.isDark = function() {
        return this.getBrightness() < 128;
      }, e.prototype.isLight = function() {
        return !this.isDark();
      }, e.prototype.getBrightness = function() {
        var t = this.toRgb();
        return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
      }, e.prototype.getLuminance = function() {
        var t = this.toRgb(), r, n, o, a = t.r / 255, i = t.g / 255, c = t.b / 255;
        return a <= 0.03928 ? r = a / 12.92 : r = Math.pow((a + 0.055) / 1.055, 2.4), i <= 0.03928 ? n = i / 12.92 : n = Math.pow((i + 0.055) / 1.055, 2.4), c <= 0.03928 ? o = c / 12.92 : o = Math.pow((c + 0.055) / 1.055, 2.4), 0.2126 * r + 0.7152 * n + 0.0722 * o;
      }, e.prototype.getAlpha = function() {
        return this.a;
      }, e.prototype.setAlpha = function(t) {
        return this.a = Qa(t), this.roundA = Math.round(100 * this.a) / 100, this;
      }, e.prototype.isMonochrome = function() {
        var t = this.toHsl().s;
        return t === 0;
      }, e.prototype.toHsv = function() {
        var t = pn(this.r, this.g, this.b);
        return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
      }, e.prototype.toHsvString = function() {
        var t = pn(this.r, this.g, this.b), r = Math.round(t.h * 360), n = Math.round(t.s * 100), o = Math.round(t.v * 100);
        return this.a === 1 ? "hsv(".concat(r, ", ").concat(n, "%, ").concat(o, "%)") : "hsva(".concat(r, ", ").concat(n, "%, ").concat(o, "%, ").concat(this.roundA, ")");
      }, e.prototype.toHsl = function() {
        var t = $o(this.r, this.g, this.b);
        return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
      }, e.prototype.toHslString = function() {
        var t = $o(this.r, this.g, this.b), r = Math.round(t.h * 360), n = Math.round(t.s * 100), o = Math.round(t.l * 100);
        return this.a === 1 ? "hsl(".concat(r, ", ").concat(n, "%, ").concat(o, "%)") : "hsla(".concat(r, ", ").concat(n, "%, ").concat(o, "%, ").concat(this.roundA, ")");
      }, e.prototype.toHex = function(t) {
        return t === void 0 && (t = !1), gn(this.r, this.g, this.b, t);
      }, e.prototype.toHexString = function(t) {
        return t === void 0 && (t = !1), "#" + this.toHex(t);
      }, e.prototype.toHex8 = function(t) {
        return t === void 0 && (t = !1), ul(this.r, this.g, this.b, this.a, t);
      }, e.prototype.toHex8String = function(t) {
        return t === void 0 && (t = !1), "#" + this.toHex8(t);
      }, e.prototype.toHexShortString = function(t) {
        return t === void 0 && (t = !1), this.a === 1 ? this.toHexString(t) : this.toHex8String(t);
      }, e.prototype.toRgb = function() {
        return {
          r: Math.round(this.r),
          g: Math.round(this.g),
          b: Math.round(this.b),
          a: this.a
        };
      }, e.prototype.toRgbString = function() {
        var t = Math.round(this.r), r = Math.round(this.g), n = Math.round(this.b);
        return this.a === 1 ? "rgb(".concat(t, ", ").concat(r, ", ").concat(n, ")") : "rgba(".concat(t, ", ").concat(r, ", ").concat(n, ", ").concat(this.roundA, ")");
      }, e.prototype.toPercentageRgb = function() {
        var t = function(r) {
          return "".concat(Math.round(se(r, 255) * 100), "%");
        };
        return {
          r: t(this.r),
          g: t(this.g),
          b: t(this.b),
          a: this.a
        };
      }, e.prototype.toPercentageRgbString = function() {
        var t = function(r) {
          return Math.round(se(r, 255) * 100);
        };
        return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
      }, e.prototype.toName = function() {
        if (this.a === 0)
          return "transparent";
        if (this.a < 1)
          return !1;
        for (var t = "#" + gn(this.r, this.g, this.b, !1), r = 0, n = Object.entries(hn); r < n.length; r++) {
          var o = n[r], a = o[0], i = o[1];
          if (t === i)
            return a;
        }
        return !1;
      }, e.prototype.toString = function(t) {
        var r = !!t;
        t = t ?? this.format;
        var n = !1, o = this.a < 1 && this.a >= 0, a = !r && o && (t.startsWith("hex") || t === "name");
        return a ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (n = this.toRgbString()), t === "prgb" && (n = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (n = this.toHexString()), t === "hex3" && (n = this.toHexString(!0)), t === "hex4" && (n = this.toHex8String(!0)), t === "hex8" && (n = this.toHex8String()), t === "name" && (n = this.toName()), t === "hsl" && (n = this.toHslString()), t === "hsv" && (n = this.toHsvString()), n || this.toHexString());
      }, e.prototype.toNumber = function() {
        return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
      }, e.prototype.clone = function() {
        return new e(this.toString());
      }, e.prototype.lighten = function(t) {
        t === void 0 && (t = 10);
        var r = this.toHsl();
        return r.l += t / 100, r.l = Ut(r.l), new e(r);
      }, e.prototype.brighten = function(t) {
        t === void 0 && (t = 10);
        var r = this.toRgb();
        return r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(t / 100)))), r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(t / 100)))), r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(t / 100)))), new e(r);
      }, e.prototype.darken = function(t) {
        t === void 0 && (t = 10);
        var r = this.toHsl();
        return r.l -= t / 100, r.l = Ut(r.l), new e(r);
      }, e.prototype.tint = function(t) {
        return t === void 0 && (t = 10), this.mix("white", t);
      }, e.prototype.shade = function(t) {
        return t === void 0 && (t = 10), this.mix("black", t);
      }, e.prototype.desaturate = function(t) {
        t === void 0 && (t = 10);
        var r = this.toHsl();
        return r.s -= t / 100, r.s = Ut(r.s), new e(r);
      }, e.prototype.saturate = function(t) {
        t === void 0 && (t = 10);
        var r = this.toHsl();
        return r.s += t / 100, r.s = Ut(r.s), new e(r);
      }, e.prototype.greyscale = function() {
        return this.desaturate(100);
      }, e.prototype.spin = function(t) {
        var r = this.toHsl(), n = (r.h + t) % 360;
        return r.h = n < 0 ? 360 + n : n, new e(r);
      }, e.prototype.mix = function(t, r) {
        r === void 0 && (r = 50);
        var n = this.toRgb(), o = new e(t).toRgb(), a = r / 100, i = {
          r: (o.r - n.r) * a + n.r,
          g: (o.g - n.g) * a + n.g,
          b: (o.b - n.b) * a + n.b,
          a: (o.a - n.a) * a + n.a
        };
        return new e(i);
      }, e.prototype.analogous = function(t, r) {
        t === void 0 && (t = 6), r === void 0 && (r = 30);
        var n = this.toHsl(), o = 360 / r, a = [this];
        for (n.h = (n.h - (o * t >> 1) + 720) % 360; --t; )
          n.h = (n.h + o) % 360, a.push(new e(n));
        return a;
      }, e.prototype.complement = function() {
        var t = this.toHsl();
        return t.h = (t.h + 180) % 360, new e(t);
      }, e.prototype.monochromatic = function(t) {
        t === void 0 && (t = 6);
        for (var r = this.toHsv(), n = r.h, o = r.s, a = r.v, i = [], c = 1 / t; t--; )
          i.push(new e({ h: n, s: o, v: a })), a = (a + c) % 1;
        return i;
      }, e.prototype.splitcomplement = function() {
        var t = this.toHsl(), r = t.h;
        return [
          this,
          new e({ h: (r + 72) % 360, s: t.s, l: t.l }),
          new e({ h: (r + 216) % 360, s: t.s, l: t.l })
        ];
      }, e.prototype.onBackground = function(t) {
        var r = this.toRgb(), n = new e(t).toRgb(), o = r.a + n.a * (1 - r.a);
        return new e({
          r: (r.r * r.a + n.r * n.a * (1 - r.a)) / o,
          g: (r.g * r.a + n.g * n.a * (1 - r.a)) / o,
          b: (r.b * r.a + n.b * n.a * (1 - r.a)) / o,
          a: o
        });
      }, e.prototype.triad = function() {
        return this.polyad(3);
      }, e.prototype.tetrad = function() {
        return this.polyad(4);
      }, e.prototype.polyad = function(t) {
        for (var r = this.toHsl(), n = r.h, o = [this], a = 360 / t, i = 1; i < t; i++)
          o.push(new e({ h: (n + i * a) % 360, s: r.s, l: r.l }));
        return o;
      }, e.prototype.equals = function(t) {
        return this.toRgbString() === new e(t).toRgbString();
      }, e;
    }()
  ), qt = 2, jo = 0.16, hl = 0.05, ml = 0.05, bl = 0.15, Za = 5, Ja = 4, yl = [{
    index: 7,
    opacity: 0.15
  }, {
    index: 6,
    opacity: 0.25
  }, {
    index: 5,
    opacity: 0.3
  }, {
    index: 5,
    opacity: 0.45
  }, {
    index: 5,
    opacity: 0.65
  }, {
    index: 5,
    opacity: 0.85
  }, {
    index: 4,
    opacity: 0.9
  }, {
    index: 3,
    opacity: 0.95
  }, {
    index: 2,
    opacity: 0.97
  }, {
    index: 1,
    opacity: 0.98
  }];
  function Io(e) {
    var t = e.r, r = e.g, n = e.b, o = pn(t, r, n);
    return {
      h: o.h * 360,
      s: o.s,
      v: o.v
    };
  }
  function Kt(e) {
    var t = e.r, r = e.g, n = e.b;
    return "#".concat(gn(t, r, n, !1));
  }
  function Sl(e, t, r) {
    var n = r / 100, o = {
      r: (t.r - e.r) * n + e.r,
      g: (t.g - e.g) * n + e.g,
      b: (t.b - e.b) * n + e.b
    };
    return o;
  }
  function Lo(e, t, r) {
    var n;
    return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? n = r ? Math.round(e.h) - qt * t : Math.round(e.h) + qt * t : n = r ? Math.round(e.h) + qt * t : Math.round(e.h) - qt * t, n < 0 ? n += 360 : n >= 360 && (n -= 360), n;
  }
  function No(e, t, r) {
    if (e.h === 0 && e.s === 0)
      return e.s;
    var n;
    return r ? n = e.s - jo * t : t === Ja ? n = e.s + jo : n = e.s + hl * t, n > 1 && (n = 1), r && t === Za && n > 0.1 && (n = 0.1), n < 0.06 && (n = 0.06), Number(n.toFixed(2));
  }
  function ko(e, t, r) {
    var n;
    return r ? n = e.v + ml * t : n = e.v - bl * t, n > 1 && (n = 1), Number(n.toFixed(2));
  }
  function Bt(e) {
    for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [], n = gt(e), o = Za; o > 0; o -= 1) {
      var a = Io(n), i = Kt(gt({
        h: Lo(a, o, !0),
        s: No(a, o, !0),
        v: ko(a, o, !0)
      }));
      r.push(i);
    }
    r.push(Kt(n));
    for (var c = 1; c <= Ja; c += 1) {
      var l = Io(n), s = Kt(gt({
        h: Lo(l, c),
        s: No(l, c),
        v: ko(l, c)
      }));
      r.push(s);
    }
    return t.theme === "dark" ? yl.map(function(u) {
      var f = u.index, d = u.opacity, g = Kt(Sl(gt(t.backgroundColor || "#141414"), gt(r[f]), d * 100));
      return g;
    }) : r;
  }
  var Vr = {
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
    grey: "#666666"
  }, mn = ["#fff1f0", "#ffccc7", "#ffa39e", "#ff7875", "#ff4d4f", "#f5222d", "#cf1322", "#a8071a", "#820014", "#5c0011"];
  mn.primary = mn[5];
  var bn = ["#fff2e8", "#ffd8bf", "#ffbb96", "#ff9c6e", "#ff7a45", "#fa541c", "#d4380d", "#ad2102", "#871400", "#610b00"];
  bn.primary = bn[5];
  var yn = ["#fff7e6", "#ffe7ba", "#ffd591", "#ffc069", "#ffa940", "#fa8c16", "#d46b08", "#ad4e00", "#873800", "#612500"];
  yn.primary = yn[5];
  var Sn = ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"];
  Sn.primary = Sn[5];
  var Cn = ["#feffe6", "#ffffb8", "#fffb8f", "#fff566", "#ffec3d", "#fadb14", "#d4b106", "#ad8b00", "#876800", "#614700"];
  Cn.primary = Cn[5];
  var En = ["#fcffe6", "#f4ffb8", "#eaff8f", "#d3f261", "#bae637", "#a0d911", "#7cb305", "#5b8c00", "#3f6600", "#254000"];
  En.primary = En[5];
  var xn = ["#f6ffed", "#d9f7be", "#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d", "#237804", "#135200", "#092b00"];
  xn.primary = xn[5];
  var wn = ["#e6fffb", "#b5f5ec", "#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c", "#006d75", "#00474f", "#002329"];
  wn.primary = wn[5];
  var pr = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
  pr.primary = pr[5];
  var Tn = ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"];
  Tn.primary = Tn[5];
  var On = ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
  On.primary = On[5];
  var An = ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c0", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"];
  An.primary = An[5];
  var Pn = ["#a6a6a6", "#999999", "#8c8c8c", "#808080", "#737373", "#666666", "#404040", "#1a1a1a", "#000000", "#000000"];
  Pn.primary = Pn[5];
  var Wr = {
    red: mn,
    volcano: bn,
    orange: yn,
    gold: Sn,
    yellow: Cn,
    lime: En,
    green: xn,
    cyan: wn,
    blue: pr,
    geekblue: Tn,
    purple: On,
    magenta: An,
    grey: Pn
  };
  const ei = {
    blue: "#1677FF",
    purple: "#722ED1",
    cyan: "#13C2C2",
    green: "#52C41A",
    magenta: "#EB2F96",
    /**
     * @deprecated Use magenta instead
     */
    pink: "#EB2F96",
    red: "#F5222D",
    orange: "#FA8C16",
    yellow: "#FADB14",
    volcano: "#FA541C",
    geekblue: "#2F54EB",
    gold: "#FAAD14",
    lime: "#A0D911"
  }, Ht = Object.assign(Object.assign({}, ei), {
    // Color
    colorPrimary: "#1677ff",
    colorSuccess: "#52c41a",
    colorWarning: "#faad14",
    colorError: "#ff4d4f",
    colorInfo: "#1677ff",
    colorLink: "",
    colorTextBase: "",
    colorBgBase: "",
    // Font
    fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
    fontFamilyCode: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
    fontSize: 14,
    // Line
    lineWidth: 1,
    lineType: "solid",
    // Motion
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
    // Radius
    borderRadius: 6,
    // Size
    sizeUnit: 4,
    sizeStep: 4,
    sizePopupArrow: 16,
    // Control Base
    controlHeight: 32,
    // zIndex
    zIndexBase: 0,
    zIndexPopupBase: 1e3,
    // Image
    opacityImage: 1,
    // Wireframe
    wireframe: !1,
    // Motion
    motion: !0
  });
  function Cl(e, t) {
    let {
      generateColorPalettes: r,
      generateNeutralColorPalettes: n
    } = t;
    const {
      colorSuccess: o,
      colorWarning: a,
      colorError: i,
      colorInfo: c,
      colorPrimary: l,
      colorBgBase: s,
      colorTextBase: u
    } = e, f = r(l), d = r(o), g = r(a), C = r(i), m = r(c), v = n(s, u), A = e.colorLink || e.colorInfo, E = r(A);
    return Object.assign(Object.assign({}, v), {
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
      colorBgMask: new ve("#000").setAlpha(0.45).toRgbString(),
      colorWhite: "#fff"
    });
  }
  const El = (e) => {
    let t = e, r = e, n = e, o = e;
    return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? r = 4 : e < 8 && e >= 7 ? r = 5 : e < 14 && e >= 8 ? r = 6 : e < 16 && e >= 14 ? r = 7 : e >= 16 && (r = 8), e < 6 && e >= 2 ? n = 1 : e >= 6 && (n = 2), e > 4 && e < 8 ? o = 4 : e >= 8 && (o = 6), {
      borderRadius: e,
      borderRadiusXS: n,
      borderRadiusSM: r,
      borderRadiusLG: t,
      borderRadiusOuter: o
    };
  };
  function xl(e) {
    const {
      motionUnit: t,
      motionBase: r,
      borderRadius: n,
      lineWidth: o
    } = e;
    return Object.assign({
      // motion
      motionDurationFast: `${(r + t).toFixed(1)}s`,
      motionDurationMid: `${(r + t * 2).toFixed(1)}s`,
      motionDurationSlow: `${(r + t * 3).toFixed(1)}s`,
      // line
      lineWidthBold: o + 1
    }, El(n));
  }
  const wl = (e) => {
    const {
      controlHeight: t
    } = e;
    return {
      controlHeightSM: t * 0.75,
      controlHeightXS: t * 0.5,
      controlHeightLG: t * 1.25
    };
  };
  function ur(e) {
    return (e + 8) / e;
  }
  function Tl(e) {
    const t = new Array(10).fill(null).map((r, n) => {
      const o = n - 1, a = e * Math.pow(Math.E, o / 5), i = n > 1 ? Math.floor(a) : Math.ceil(a);
      return Math.floor(i / 2) * 2;
    });
    return t[1] = e, t.map((r) => ({
      size: r,
      lineHeight: ur(r)
    }));
  }
  const Ol = (e) => {
    const t = Tl(e), r = t.map((u) => u.size), n = t.map((u) => u.lineHeight), o = r[1], a = r[0], i = r[2], c = n[1], l = n[0], s = n[2];
    return {
      fontSizeSM: a,
      fontSize: o,
      fontSizeLG: i,
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
      fontHeightLG: Math.round(s * i),
      fontHeightSM: Math.round(l * a),
      lineHeightHeading1: n[6],
      lineHeightHeading2: n[5],
      lineHeightHeading3: n[4],
      lineHeightHeading4: n[3],
      lineHeightHeading5: n[2]
    };
  };
  function Al(e) {
    const {
      sizeUnit: t,
      sizeStep: r
    } = e;
    return {
      sizeXXL: t * (r + 8),
      // 48
      sizeXL: t * (r + 4),
      // 32
      sizeLG: t * (r + 2),
      // 24
      sizeMD: t * (r + 1),
      // 20
      sizeMS: t * r,
      // 16
      size: t * r,
      // 16
      sizeSM: t * (r - 1),
      // 12
      sizeXS: t * (r - 2),
      // 8
      sizeXXS: t * (r - 3)
      // 4
    };
  }
  const je = (e, t) => new ve(e).setAlpha(t).toRgbString(), $t = (e, t) => new ve(e).darken(t).toHexString(), Pl = (e) => {
    const t = Bt(e);
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
      10: t[6]
      // 8: colors[7],
      // 9: colors[8],
      // 10: colors[9],
    };
  }, _l = (e, t) => {
    const r = e || "#fff", n = t || "#000";
    return {
      colorBgBase: r,
      colorTextBase: n,
      colorText: je(n, 0.88),
      colorTextSecondary: je(n, 0.65),
      colorTextTertiary: je(n, 0.45),
      colorTextQuaternary: je(n, 0.25),
      colorFill: je(n, 0.15),
      colorFillSecondary: je(n, 0.06),
      colorFillTertiary: je(n, 0.04),
      colorFillQuaternary: je(n, 0.02),
      colorBgLayout: $t(r, 4),
      colorBgContainer: $t(r, 0),
      colorBgElevated: $t(r, 0),
      colorBgSpotlight: je(n, 0.85),
      colorBgBlur: "transparent",
      colorBorder: $t(r, 15),
      colorBorderSecondary: $t(r, 6)
    };
  };
  function Rl(e) {
    Vr.pink = Vr.magenta, Wr.pink = Wr.magenta;
    const t = Object.keys(ei).map((r) => {
      const n = e[r] === Vr[r] ? Wr[r] : Bt(e[r]);
      return new Array(10).fill(1).reduce((o, a, i) => (o[`${r}-${i + 1}`] = n[i], o[`${r}${i + 1}`] = n[i], o), {});
    }).reduce((r, n) => (r = Object.assign(Object.assign({}, r), n), r), {});
    return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), Cl(e, {
      generateColorPalettes: Pl,
      generateNeutralColorPalettes: _l
    })), Ol(e.fontSize)), Al(e)), wl(e)), xl(e));
  }
  const ti = an(Rl), _n = {
    token: Ht,
    override: {
      override: Ht
    },
    hashed: !0
  }, ri = /* @__PURE__ */ F.createContext(_n), gr = "ant", ni = "anticon", $l = (e, t) => t || (e ? `${gr}-${e}` : gr), Je = /* @__PURE__ */ h.createContext({
    // We provide a default function for Context without provider
    getPrefixCls: $l,
    iconPrefixCls: ni
  }), Ml = `-ant-${Date.now()}-${Math.random()}`;
  function jl(e, t) {
    const r = {}, n = (i, c) => {
      let l = i.clone();
      return l = (c == null ? void 0 : c(l)) || l, l.toRgbString();
    }, o = (i, c) => {
      const l = new ve(i), s = Bt(l.toRgbString());
      r[`${c}-color`] = n(l), r[`${c}-color-disabled`] = s[1], r[`${c}-color-hover`] = s[4], r[`${c}-color-active`] = s[6], r[`${c}-color-outline`] = l.clone().setAlpha(0.2).toRgbString(), r[`${c}-color-deprecated-bg`] = s[0], r[`${c}-color-deprecated-border`] = s[2];
    };
    if (t.primaryColor) {
      o(t.primaryColor, "primary");
      const i = new ve(t.primaryColor), c = Bt(i.toRgbString());
      c.forEach((s, u) => {
        r[`primary-${u + 1}`] = s;
      }), r["primary-color-deprecated-l-35"] = n(i, (s) => s.lighten(35)), r["primary-color-deprecated-l-20"] = n(i, (s) => s.lighten(20)), r["primary-color-deprecated-t-20"] = n(i, (s) => s.tint(20)), r["primary-color-deprecated-t-50"] = n(i, (s) => s.tint(50)), r["primary-color-deprecated-f-12"] = n(i, (s) => s.setAlpha(s.getAlpha() * 0.12));
      const l = new ve(c[0]);
      r["primary-color-active-deprecated-f-30"] = n(l, (s) => s.setAlpha(s.getAlpha() * 0.3)), r["primary-color-active-deprecated-d-02"] = n(l, (s) => s.darken(2));
    }
    return t.successColor && o(t.successColor, "success"), t.warningColor && o(t.warningColor, "warning"), t.errorColor && o(t.errorColor, "error"), t.infoColor && o(t.infoColor, "info"), `
  :root {
    ${Object.keys(r).map((i) => `--${e}-${i}: ${r[i]};`).join(`
`)}
  }
  `.trim();
  }
  function Il(e, t) {
    const r = jl(e, t);
    Fe() ? st(r, `${Ml}-dynamic-theme`) : N.env.NODE_ENV !== "production" && Ar(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
  }
  const hr = /* @__PURE__ */ h.createContext(!1), Ll = (e) => {
    let {
      children: t,
      disabled: r
    } = e;
    const n = h.useContext(hr);
    return /* @__PURE__ */ h.createElement(hr.Provider, {
      value: r ?? n
    }, t);
  }, Et = /* @__PURE__ */ h.createContext(void 0), Nl = (e) => {
    let {
      children: t,
      size: r
    } = e;
    const n = h.useContext(Et);
    return /* @__PURE__ */ h.createElement(Et.Provider, {
      value: r || n
    }, t);
  };
  function kl() {
    const e = Ae(hr), t = Ae(Et);
    return {
      componentDisabled: e,
      componentSize: t
    };
  }
  const Bl = "5.19.2";
  function Gr(e) {
    return e >= 0 && e <= 255;
  }
  function Yt(e, t) {
    const {
      r,
      g: n,
      b: o,
      a
    } = new ve(e).toRgb();
    if (a < 1)
      return e;
    const {
      r: i,
      g: c,
      b: l
    } = new ve(t).toRgb();
    for (let s = 0.01; s <= 1; s += 0.01) {
      const u = Math.round((r - i * (1 - s)) / s), f = Math.round((n - c * (1 - s)) / s), d = Math.round((o - l * (1 - s)) / s);
      if (Gr(u) && Gr(f) && Gr(d))
        return new ve({
          r: u,
          g: f,
          b: d,
          a: Math.round(s * 100) / 100
        }).toRgbString();
    }
    return new ve({
      r,
      g: n,
      b: o,
      a: 1
    }).toRgbString();
  }
  var Hl = function(e, t) {
    var r = {};
    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
    return r;
  };
  function oi(e) {
    const {
      override: t
    } = e, r = Hl(e, ["override"]), n = Object.assign({}, t);
    Object.keys(Ht).forEach((d) => {
      delete n[d];
    });
    const o = Object.assign(Object.assign({}, r), n), a = 480, i = 576, c = 768, l = 992, s = 1200, u = 1600;
    if (o.motion === !1) {
      const d = "0s";
      o.motionDurationFast = d, o.motionDurationMid = d, o.motionDurationSlow = d;
    }
    return Object.assign(Object.assign(Object.assign({}, o), {
      // ============== Background ============== //
      colorFillContent: o.colorFillSecondary,
      colorFillContentHover: o.colorFill,
      colorFillAlter: o.colorFillQuaternary,
      colorBgContainerDisabled: o.colorFillTertiary,
      // ============== Split ============== //
      colorBorderBg: o.colorBgContainer,
      colorSplit: Yt(o.colorBorderSecondary, o.colorBgContainer),
      // ============== Text ============== //
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
      colorErrorOutline: Yt(o.colorErrorBg, o.colorBgContainer),
      colorWarningOutline: Yt(o.colorWarningBg, o.colorBgContainer),
      // Font
      fontSizeIcon: o.fontSizeSM,
      // Line
      lineWidthFocus: o.lineWidth * 4,
      // Control
      lineWidth: o.lineWidth,
      controlOutlineWidth: o.lineWidth * 2,
      // Checkbox size and expand icon size
      controlInteractiveSize: o.controlHeight / 2,
      controlItemBgHover: o.colorFillTertiary,
      controlItemBgActive: o.colorPrimaryBg,
      controlItemBgActiveHover: o.colorPrimaryBgHover,
      controlItemBgActiveDisabled: o.colorFill,
      controlTmpOutline: o.colorFillQuaternary,
      controlOutline: Yt(o.colorPrimaryBg, o.colorBgContainer),
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
      screenXS: a,
      screenXSMin: a,
      screenXSMax: i - 1,
      screenSM: i,
      screenSMMin: i,
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
      0 1px 2px -2px ${new ve("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new ve("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new ve("rgba(0, 0, 0, 0.09)").toRgbString()}
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
      boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
      boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
      boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"
    }), n);
  }
  var Bo = function(e, t) {
    var r = {};
    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
    return r;
  };
  const ai = {
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
    zIndexBase: !0
  }, ii = {
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
    motionUnit: !0
  }, Dl = {
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
    screenXXLMin: !0
  }, ci = (e, t, r) => {
    const n = r.getDerivativeToken(e), {
      override: o
    } = t, a = Bo(t, ["override"]);
    let i = Object.assign(Object.assign({}, n), {
      override: o
    });
    return i = oi(i), a && Object.entries(a).forEach((c) => {
      let [l, s] = c;
      const {
        theme: u
      } = s, f = Bo(s, ["theme"]);
      let d = f;
      u && (d = ci(Object.assign(Object.assign({}, i), f), {
        override: f
      }, u)), i[l] = d;
    }), i;
  };
  function ft() {
    const {
      token: e,
      hashed: t,
      theme: r,
      override: n,
      cssVar: o
    } = F.useContext(ri), a = `${Bl}-${t || ""}`, i = r || ti, [c, l, s] = bs(i, [Ht, e], {
      salt: a,
      override: n,
      getComputedToken: ci,
      // formatToken will not be consumed after 1.15.0 with getComputedToken.
      // But token will break if @ant-design/cssinjs is under 1.15.0 without it
      formatToken: oi,
      cssVar: o && {
        prefix: o.prefix,
        key: o.key,
        unitless: ai,
        ignore: ii,
        preserve: Dl
      }
    });
    return [i, s, t ? l : "", c, o];
  }
  function mr(e) {
    var t = h.useRef();
    t.current = e;
    var r = h.useCallback(function() {
      for (var n, o = arguments.length, a = new Array(o), i = 0; i < o; i++)
        a[i] = arguments[i];
      return (n = t.current) === null || n === void 0 ? void 0 : n.call.apply(n, [t].concat(a));
    }, []);
    return r;
  }
  function Rn(e) {
    var t = h.useRef(!1), r = h.useState(e), n = V(r, 2), o = n[0], a = n[1];
    h.useEffect(function() {
      return t.current = !1, function() {
        t.current = !0;
      };
    }, []);
    function i(c, l) {
      l && t.current || a(c);
    }
    return [o, i];
  }
  const zl = 1e3 * 60 * 10;
  let Fl = /* @__PURE__ */ function() {
    function e() {
      De(this, e), this.map = /* @__PURE__ */ new Map(), this.objectIDMap = /* @__PURE__ */ new WeakMap(), this.nextID = 0, this.lastAccessBeat = /* @__PURE__ */ new Map(), this.accessBeat = 0;
    }
    return ze(e, [{
      key: "set",
      value: function(r, n) {
        this.clear();
        const o = this.getCompositeKey(r);
        this.map.set(o, n), this.lastAccessBeat.set(o, Date.now());
      }
    }, {
      key: "get",
      value: function(r) {
        const n = this.getCompositeKey(r), o = this.map.get(n);
        return this.lastAccessBeat.set(n, Date.now()), this.accessBeat += 1, o;
      }
    }, {
      key: "getCompositeKey",
      value: function(r) {
        return r.map((o) => o && typeof o == "object" ? `obj_${this.getObjectID(o)}` : `${typeof o}_${o}`).join("|");
      }
    }, {
      key: "getObjectID",
      value: function(r) {
        if (this.objectIDMap.has(r))
          return this.objectIDMap.get(r);
        const n = this.nextID;
        return this.objectIDMap.set(r, n), this.nextID += 1, n;
      }
    }, {
      key: "clear",
      value: function() {
        if (this.accessBeat > 1e4) {
          const r = Date.now();
          this.lastAccessBeat.forEach((n, o) => {
            r - n > zl && (this.map.delete(o), this.lastAccessBeat.delete(o));
          }), this.accessBeat = 0;
        }
      }
    }]);
  }();
  const Ho = new Fl();
  function Vl(e, t) {
    return F.useMemo(() => {
      const r = Ho.get(t);
      if (r)
        return r;
      const n = e();
      return Ho.set(t, n), n;
    }, t);
  }
  const Wl = () => ({
    display: "inline-flex",
    alignItems: "center",
    color: "inherit",
    fontStyle: "normal",
    lineHeight: 0,
    textAlign: "center",
    textTransform: "none",
    // for SVG icon, see https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
    verticalAlign: "-0.125em",
    textRendering: "optimizeLegibility",
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
    "> *": {
      lineHeight: 1
    },
    svg: {
      display: "inline-block"
    }
  }), Gl = (e) => ({
    a: {
      color: e.colorLink,
      textDecoration: e.linkDecoration,
      backgroundColor: "transparent",
      // remove the gray background on active links in IE 10.
      outline: "none",
      cursor: "pointer",
      transition: `color ${e.motionDurationSlow}`,
      "-webkit-text-decoration-skip": "objects",
      // remove gaps in links underline in iOS 8+ and Safari 8+.
      "&:hover": {
        color: e.colorLinkHover
      },
      "&:active": {
        color: e.colorLinkActive
      },
      "&:active, &:hover": {
        textDecoration: e.linkHoverDecoration,
        outline: 0
      },
      // https://github.com/ant-design/ant-design/issues/22503
      "&:focus": {
        textDecoration: e.linkFocusDecoration,
        outline: 0
      },
      "&[disabled]": {
        color: e.colorTextDisabled,
        cursor: "not-allowed"
      }
    }
  }), Ul = (e, t, r, n) => {
    const o = `[class^="${t}"], [class*=" ${t}"]`, a = r ? `.${r}` : o, i = {
      boxSizing: "border-box",
      "&::before, &::after": {
        boxSizing: "border-box"
      }
    };
    let c = {};
    return n !== !1 && (c = {
      fontFamily: e.fontFamily,
      fontSize: e.fontSize
    }), {
      [a]: Object.assign(Object.assign(Object.assign({}, c), i), {
        [o]: i
      })
    };
  }, Xl = (e) => ({
    outline: `${Qe(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`,
    outlineOffset: 1,
    transition: "outline-offset 0s, outline 0s"
  }), ql = (e) => ({
    "&:focus-visible": Object.assign({}, Xl(e))
  });
  function Kl(e) {
    return e === "js" ? {
      max: Math.max,
      min: Math.min
    } : {
      max: function() {
        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
          r[n] = arguments[n];
        return `max(${r.map((o) => Qe(o)).join(",")})`;
      },
      min: function() {
        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
          r[n] = arguments[n];
        return `min(${r.map((o) => Qe(o)).join(",")})`;
      }
    };
  }
  const si = N.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u";
  let $n = !0;
  function Tt() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    if (!si)
      return Object.assign.apply(Object, [{}].concat(t));
    $n = !1;
    const n = {};
    return t.forEach((o) => {
      Object.keys(o).forEach((i) => {
        Object.defineProperty(n, i, {
          configurable: !0,
          enumerable: !0,
          get: () => o[i]
        });
      });
    }), $n = !0, n;
  }
  const Do = {};
  function Yl() {
  }
  const Ql = (e) => {
    let t, r = e, n = Yl;
    return si && typeof Proxy < "u" && (t = /* @__PURE__ */ new Set(), r = new Proxy(e, {
      get(o, a) {
        return $n && t.add(a), o[a];
      }
    }), n = (o, a) => {
      var i;
      Do[o] = {
        global: Array.from(t),
        component: Object.assign(Object.assign({}, (i = Do[o]) === null || i === void 0 ? void 0 : i.component), a)
      };
    }), {
      token: r,
      keys: t,
      flush: n
    };
  }, li = (e, t) => {
    const [r, n] = ft();
    return dn({
      theme: r,
      token: n,
      hashId: "",
      path: ["ant-design-icons", e],
      nonce: () => t == null ? void 0 : t.nonce,
      layer: {
        name: "antd"
      }
    }, () => [{
      [`.${e}`]: Object.assign(Object.assign({}, Wl()), {
        [`.${e} .${e}-icon`]: {
          display: "block"
        }
      })
    }]);
  }, ui = (e, t, r) => {
    var n;
    return typeof r == "function" ? r(Tt(t, (n = t[e]) !== null && n !== void 0 ? n : {})) : r ?? {};
  }, fi = (e, t, r, n) => {
    const o = Object.assign({}, t[e]);
    if (n != null && n.deprecatedTokens) {
      const {
        deprecatedTokens: i
      } = n;
      i.forEach((c) => {
        let [l, s] = c;
        var u;
        N.env.NODE_ENV !== "production" && N.env.NODE_ENV !== "production" && Ze(!(o != null && o[l]), `Component Token \`${String(l)}\` of ${e} is deprecated. Please use \`${String(s)}\` instead.`), (o != null && o[l] || o != null && o[s]) && ((u = o[s]) !== null && u !== void 0 || (o[s] = o == null ? void 0 : o[l]));
      });
    }
    const a = Object.assign(Object.assign({}, r), o);
    return Object.keys(a).forEach((i) => {
      a[i] === t[i] && delete a[i];
    }), a;
  }, zo = (e, t) => `${[t, e.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-")}`;
  function Jn(e, t, r) {
    let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const o = Array.isArray(e) ? e : [e, e], [a] = o, i = o.join("-");
    return function(c) {
      let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : c;
      const [s, u, f, d, g] = ft(), {
        getPrefixCls: C,
        iconPrefixCls: m,
        csp: v
      } = Ae(Je), A = C(), E = g ? "css" : "js", R = Vl(() => {
        const P = /* @__PURE__ */ new Set();
        return g && Object.keys(n.unitless || {}).forEach((k) => {
          P.add(or(k, g.prefix)), P.add(or(k, zo(a, g.prefix)));
        }), Gc(E, P);
      }, [E, a, g == null ? void 0 : g.prefix]), {
        max: _,
        min: w
      } = Kl(E), T = {
        theme: s,
        token: d,
        hashId: f,
        nonce: () => v == null ? void 0 : v.nonce,
        clientOnly: n.clientOnly,
        layer: {
          name: "antd"
        },
        // antd is always at top of styles
        order: n.order || -999
      };
      return dn(Object.assign(Object.assign({}, T), {
        clientOnly: !1,
        path: ["Shared", A]
      }), () => [{
        // Link
        "&": Gl(d)
      }]), li(m, v), [dn(Object.assign(Object.assign({}, T), {
        path: [i, c, m]
      }), () => {
        if (n.injectStyle === !1)
          return [];
        const {
          token: P,
          flush: k
        } = Ql(d), W = ui(a, u, r), U = `.${c}`, D = fi(a, u, W, {
          deprecatedTokens: n.deprecatedTokens
        });
        g && Object.keys(W).forEach((G) => {
          W[G] = `var(${or(G, zo(a, g.prefix))})`;
        });
        const B = Tt(P, {
          componentCls: U,
          prefixCls: c,
          iconCls: `.${m}`,
          antCls: `.${A}`,
          calc: R,
          // @ts-ignore
          max: _,
          // @ts-ignore
          min: w
        }, g ? W : D), j = t(B, {
          hashId: f,
          prefixCls: c,
          rootPrefixCls: A,
          iconPrefixCls: m
        });
        return k(a, D), [n.resetStyle === !1 ? null : Ul(B, c, l, n.resetFont), j];
      }), f];
    };
  }
  const Zl = (e, t, r, n) => {
    const o = Jn(e, t, r, Object.assign({
      resetStyle: !1,
      // Sub Style should default after root one
      order: -998
    }, n)), a = (i) => {
      let {
        prefixCls: c,
        rootCls: l = c
      } = i;
      return o(c, l), null;
    };
    return N.env.NODE_ENV !== "production" && (a.displayName = `SubStyle_${Array.isArray(e) ? e.join(".") : e}`), a;
  }, Jl = (e, t, r) => {
    const {
      unitless: n,
      injectStyle: o = !0,
      prefixToken: a
    } = r, i = (l) => {
      let {
        rootCls: s,
        cssVar: u
      } = l;
      const [, f] = ft();
      return Xs({
        path: [e],
        prefix: u.prefix,
        key: u == null ? void 0 : u.key,
        unitless: n,
        ignore: ii,
        token: f,
        scope: s
      }, () => {
        const d = ui(e, f, t), g = fi(e, f, d, {
          deprecatedTokens: r == null ? void 0 : r.deprecatedTokens
        });
        return Object.keys(d).forEach((C) => {
          g[a(C)] = g[C], delete g[C];
        }), g;
      }), null;
    };
    return (l) => {
      const [, , , , s] = ft();
      return [(u) => o && s ? /* @__PURE__ */ F.createElement(F.Fragment, null, /* @__PURE__ */ F.createElement(i, {
        rootCls: l,
        cssVar: s,
        component: e
      }), u) : u, s == null ? void 0 : s.key];
    };
  }, eu = (e, t, r, n) => {
    const o = Array.isArray(e) ? e[0] : e;
    function a(f) {
      return `${o}${f.slice(0, 1).toUpperCase()}${f.slice(1)}`;
    }
    const i = (n == null ? void 0 : n.unitless) || {}, c = Object.assign(Object.assign({}, ai), {
      [a("zIndexPopup")]: !0
    });
    Object.keys(i).forEach((f) => {
      c[a(f)] = i[f];
    });
    const l = Object.assign(Object.assign({}, n), {
      unitless: c,
      prefixToken: a
    }), s = Jn(e, t, r, l), u = Jl(o, r, l);
    return function(f) {
      let d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : f;
      const [, g] = s(f, d), [C, m] = u(d);
      return [C, g, m];
    };
  }, tu = Object.assign({}, h), {
    useId: Fo
  } = tu, ru = () => "", nu = typeof Fo > "u" ? ru : Fo;
  function ou(e, t, r) {
    var n, o;
    const a = wt("ConfigProvider"), i = e || {}, c = i.inherit === !1 || !t ? Object.assign(Object.assign({}, _n), {
      hashed: (n = t == null ? void 0 : t.hashed) !== null && n !== void 0 ? n : _n.hashed,
      cssVar: t == null ? void 0 : t.cssVar
    }) : t, l = nu();
    if (N.env.NODE_ENV !== "production") {
      const s = i.cssVar || c.cssVar, u = !!(typeof i.cssVar == "object" && (!((o = i.cssVar) === null || o === void 0) && o.key) || l);
      N.env.NODE_ENV !== "production" && a(!s || u, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
    }
    return fa(() => {
      var s, u;
      if (!e)
        return t;
      const f = Object.assign({}, c.components);
      Object.keys(e.components || {}).forEach((C) => {
        f[C] = Object.assign(Object.assign({}, f[C]), e.components[C]);
      });
      const d = `css-var-${l.replace(/:/g, "")}`, g = ((s = i.cssVar) !== null && s !== void 0 ? s : c.cssVar) && Object.assign(Object.assign(Object.assign({
        prefix: r == null ? void 0 : r.prefixCls
      }, typeof c.cssVar == "object" ? c.cssVar : {}), typeof i.cssVar == "object" ? i.cssVar : {}), {
        key: typeof i.cssVar == "object" && ((u = i.cssVar) === null || u === void 0 ? void 0 : u.key) || d
      });
      return Object.assign(Object.assign(Object.assign({}, c), i), {
        token: Object.assign(Object.assign({}, c.token), i.token),
        components: f,
        cssVar: g
      });
    }, [i, c], (s, u) => s.some((f, d) => {
      const g = u[d];
      return !Nc(f, g, !0);
    }));
  }
  var au = ["children"], di = /* @__PURE__ */ h.createContext({});
  function iu(e) {
    var t = e.children, r = Lt(e, au);
    return /* @__PURE__ */ h.createElement(di.Provider, {
      value: r
    }, t);
  }
  var cu = /* @__PURE__ */ function(e) {
    Sr(r, e);
    var t = Cr(r);
    function r() {
      return De(this, r), t.apply(this, arguments);
    }
    return ze(r, [{
      key: "render",
      value: function() {
        return this.props.children;
      }
    }]), r;
  }(h.Component);
  function su(e) {
    var t = h.useReducer(function(c) {
      return c + 1;
    }, 0), r = V(t, 2), n = r[1], o = h.useRef(e), a = mr(function() {
      return o.current;
    }), i = mr(function(c) {
      o.current = typeof c == "function" ? c(o.current) : c, n();
    });
    return [a, i];
  }
  var Xe = "none", Qt = "appear", Zt = "enter", Jt = "leave", Vo = "none", be = "prepare", ht = "start", mt = "active", eo = "end", vi = "prepared";
  function Wo(e, t) {
    var r = {};
    return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit".concat(e)] = "webkit".concat(t), r["Moz".concat(e)] = "moz".concat(t), r["ms".concat(e)] = "MS".concat(t), r["O".concat(e)] = "o".concat(t.toLowerCase()), r;
  }
  function lu(e, t) {
    var r = {
      animationend: Wo("Animation", "AnimationEnd"),
      transitionend: Wo("Transition", "TransitionEnd")
    };
    return e && ("AnimationEvent" in t || delete r.animationend.animation, "TransitionEvent" in t || delete r.transitionend.transition), r;
  }
  var uu = lu(Fe(), typeof window < "u" ? window : {}), pi = {};
  if (Fe()) {
    var fu = document.createElement("div");
    pi = fu.style;
  }
  var er = {};
  function gi(e) {
    if (er[e])
      return er[e];
    var t = uu[e];
    if (t)
      for (var r = Object.keys(t), n = r.length, o = 0; o < n; o += 1) {
        var a = r[o];
        if (Object.prototype.hasOwnProperty.call(t, a) && a in pi)
          return er[e] = t[a], er[e];
      }
    return "";
  }
  var hi = gi("animationend"), mi = gi("transitionend"), bi = !!(hi && mi), Go = hi || "animationend", Uo = mi || "transitionend";
  function Xo(e, t) {
    if (!e) return null;
    if (Y(e) === "object") {
      var r = t.replace(/-\w/g, function(n) {
        return n[1].toUpperCase();
      });
      return e[r];
    }
    return "".concat(e, "-").concat(t);
  }
  const du = function(e) {
    var t = at();
    function r(o) {
      o && (o.removeEventListener(Uo, e), o.removeEventListener(Go, e));
    }
    function n(o) {
      t.current && t.current !== o && r(t.current), o && o !== t.current && (o.addEventListener(Uo, e), o.addEventListener(Go, e), t.current = o);
    }
    return h.useEffect(function() {
      return function() {
        r(t.current);
      };
    }, []), [n, r];
  };
  var yi = Fe() ? cc : it;
  const vu = function() {
    var e = h.useRef(null);
    function t() {
      Ye.cancel(e.current);
    }
    function r(n) {
      var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
      t();
      var a = Ye(function() {
        o <= 1 ? n({
          isCanceled: function() {
            return a !== e.current;
          }
        }) : r(n, o - 1);
      });
      e.current = a;
    }
    return h.useEffect(function() {
      return function() {
        t();
      };
    }, []), [r, t];
  };
  var pu = [be, ht, mt, eo], gu = [be, vi], Si = !1, hu = !0;
  function Ci(e) {
    return e === mt || e === eo;
  }
  const mu = function(e, t, r) {
    var n = Rn(Vo), o = V(n, 2), a = o[0], i = o[1], c = vu(), l = V(c, 2), s = l[0], u = l[1];
    function f() {
      i(be, !0);
    }
    var d = t ? gu : pu;
    return yi(function() {
      if (a !== Vo && a !== eo) {
        var g = d.indexOf(a), C = d[g + 1], m = r(a);
        m === Si ? i(C, !0) : C && s(function(v) {
          function A() {
            v.isCanceled() || i(C, !0);
          }
          m === !0 ? A() : Promise.resolve(m).then(A);
        });
      }
    }, [e, a]), h.useEffect(function() {
      return function() {
        u();
      };
    }, []), [f, a];
  };
  function bu(e, t, r, n) {
    var o = n.motionEnter, a = o === void 0 ? !0 : o, i = n.motionAppear, c = i === void 0 ? !0 : i, l = n.motionLeave, s = l === void 0 ? !0 : l, u = n.motionDeadline, f = n.motionLeaveImmediately, d = n.onAppearPrepare, g = n.onEnterPrepare, C = n.onLeavePrepare, m = n.onAppearStart, v = n.onEnterStart, A = n.onLeaveStart, E = n.onAppearActive, R = n.onEnterActive, _ = n.onLeaveActive, w = n.onAppearEnd, T = n.onEnterEnd, S = n.onLeaveEnd, P = n.onVisibleChanged, k = Rn(), W = V(k, 2), U = W[0], D = W[1], B = su(Xe), j = V(B, 2), G = j[0], y = j[1], p = Rn(null), b = V(p, 2), x = b[0], $ = b[1], O = G(), I = at(!1), H = at(null);
    function K() {
      return r();
    }
    var ae = at(!1);
    function le() {
      y(Xe), $(null, !0);
    }
    var Z = mr(function(oe) {
      var J = G();
      if (J !== Xe) {
        var ue = K();
        if (!(oe && !oe.deadline && oe.target !== ue)) {
          var Ee = ae.current, Q;
          J === Qt && Ee ? Q = w == null ? void 0 : w(ue, oe) : J === Zt && Ee ? Q = T == null ? void 0 : T(ue, oe) : J === Jt && Ee && (Q = S == null ? void 0 : S(ue, oe)), Ee && Q !== !1 && le();
        }
      }
    }), Ve = du(Z), We = V(Ve, 1), et = We[0], Pe = function(J) {
      switch (J) {
        case Qt:
          return z(z(z({}, be, d), ht, m), mt, E);
        case Zt:
          return z(z(z({}, be, g), ht, v), mt, R);
        case Jt:
          return z(z(z({}, be, C), ht, A), mt, _);
        default:
          return {};
      }
    }, ge = h.useMemo(function() {
      return Pe(O);
    }, [O]), Ge = mu(O, !e, function(oe) {
      if (oe === be) {
        var J = ge[be];
        return J ? J(K()) : Si;
      }
      if (ne in ge) {
        var ue;
        $(((ue = ge[ne]) === null || ue === void 0 ? void 0 : ue.call(ge, K(), null)) || null);
      }
      return ne === mt && O !== Xe && (et(K()), u > 0 && (clearTimeout(H.current), H.current = setTimeout(function() {
        Z({
          deadline: !0
        });
      }, u))), ne === vi && le(), hu;
    }), M = V(Ge, 2), _e = M[0], ne = M[1], Re = Ci(ne);
    ae.current = Re, yi(function() {
      D(t);
      var oe = I.current;
      I.current = !0;
      var J;
      !oe && t && c && (J = Qt), oe && t && a && (J = Zt), (oe && !t && s || !oe && f && !t && s) && (J = Jt);
      var ue = Pe(J);
      J && (e || ue[be]) ? (y(J), _e()) : y(Xe);
    }, [t]), it(function() {
      // Cancel appear
      (O === Qt && !c || // Cancel enter
      O === Zt && !a || // Cancel leave
      O === Jt && !s) && y(Xe);
    }, [c, a, s]), it(function() {
      return function() {
        I.current = !1, clearTimeout(H.current);
      };
    }, []);
    var Ue = h.useRef(!1);
    it(function() {
      U && (Ue.current = !0), U !== void 0 && O === Xe && ((Ue.current || U) && (P == null || P(U)), Ue.current = !0);
    }, [U, O]);
    var tt = x;
    return ge[be] && ne === ht && (tt = L({
      transition: "none"
    }, tt)), [O, ne, tt, U ?? t];
  }
  function yu(e) {
    var t = e;
    Y(e) === "object" && (t = e.transitionSupport);
    function r(o, a) {
      return !!(o.motionName && t && a !== !1);
    }
    var n = /* @__PURE__ */ h.forwardRef(function(o, a) {
      var i = o.visible, c = i === void 0 ? !0 : i, l = o.removeOnLeave, s = l === void 0 ? !0 : l, u = o.forceRender, f = o.children, d = o.motionName, g = o.leavedClassName, C = o.eventProps, m = h.useContext(di), v = m.motion, A = r(o, v), E = at(), R = at();
      function _() {
        try {
          return E.current instanceof HTMLElement ? E.current : Tc(R.current);
        } catch {
          return null;
        }
      }
      var w = bu(A, c, _, o), T = V(w, 4), S = T[0], P = T[1], k = T[2], W = T[3], U = h.useRef(W);
      W && (U.current = !0);
      var D = h.useCallback(function(x) {
        E.current = x, da(a, x);
      }, [a]), B, j = L(L({}, C), {}, {
        visible: c
      });
      if (!f)
        B = null;
      else if (S === Xe)
        W ? B = f(L({}, j), D) : !s && U.current && g ? B = f(L(L({}, j), {}, {
          className: g
        }), D) : u || !s && !g ? B = f(L(L({}, j), {}, {
          style: {
            display: "none"
          }
        }), D) : B = null;
      else {
        var G;
        P === be ? G = "prepare" : Ci(P) ? G = "active" : P === ht && (G = "start");
        var y = Xo(d, "".concat(S, "-").concat(G));
        B = f(L(L({}, j), {}, {
          className: ye(Xo(d, S), z(z({}, y, y && G), d, typeof d == "string")),
          style: k
        }), D);
      }
      if (/* @__PURE__ */ h.isValidElement(B) && va(B)) {
        var p = B, b = p.ref;
        b || (B = /* @__PURE__ */ h.cloneElement(B, {
          ref: D
        }));
      }
      return /* @__PURE__ */ h.createElement(cu, {
        ref: R
      }, B);
    });
    return n.displayName = "CSSMotion", n;
  }
  const to = yu(bi);
  var Mn = "add", jn = "keep", In = "remove", Ur = "removed";
  function Su(e) {
    var t;
    return e && Y(e) === "object" && "key" in e ? t = e : t = {
      key: e
    }, L(L({}, t), {}, {
      key: String(t.key)
    });
  }
  function Ln() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return e.map(Su);
  }
  function Cu() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = [], n = 0, o = t.length, a = Ln(e), i = Ln(t);
    a.forEach(function(s) {
      for (var u = !1, f = n; f < o; f += 1) {
        var d = i[f];
        if (d.key === s.key) {
          n < f && (r = r.concat(i.slice(n, f).map(function(g) {
            return L(L({}, g), {}, {
              status: Mn
            });
          })), n = f), r.push(L(L({}, d), {}, {
            status: jn
          })), n += 1, u = !0;
          break;
        }
      }
      u || r.push(L(L({}, s), {}, {
        status: In
      }));
    }), n < o && (r = r.concat(i.slice(n).map(function(s) {
      return L(L({}, s), {}, {
        status: Mn
      });
    })));
    var c = {};
    r.forEach(function(s) {
      var u = s.key;
      c[u] = (c[u] || 0) + 1;
    });
    var l = Object.keys(c).filter(function(s) {
      return c[s] > 1;
    });
    return l.forEach(function(s) {
      r = r.filter(function(u) {
        var f = u.key, d = u.status;
        return f !== s || d !== In;
      }), r.forEach(function(u) {
        u.key === s && (u.status = jn);
      });
    }), r;
  }
  var Eu = ["component", "children", "onVisibleChanged", "onAllRemoved"], xu = ["status"], wu = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
  function Tu(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : to, r = /* @__PURE__ */ function(n) {
      Sr(a, n);
      var o = Cr(a);
      function a() {
        var i;
        De(this, a);
        for (var c = arguments.length, l = new Array(c), s = 0; s < c; s++)
          l[s] = arguments[s];
        return i = o.call.apply(o, [this].concat(l)), z(ct(i), "state", {
          keyEntities: []
        }), z(ct(i), "removeKey", function(u) {
          var f = i.state.keyEntities, d = f.map(function(g) {
            return g.key !== u ? g : L(L({}, g), {}, {
              status: Ur
            });
          });
          return i.setState({
            keyEntities: d
          }), d.filter(function(g) {
            var C = g.status;
            return C !== Ur;
          }).length;
        }), i;
      }
      return ze(a, [{
        key: "render",
        value: function() {
          var c = this, l = this.state.keyEntities, s = this.props, u = s.component, f = s.children, d = s.onVisibleChanged, g = s.onAllRemoved, C = Lt(s, Eu), m = u || h.Fragment, v = {};
          return wu.forEach(function(A) {
            v[A] = C[A], delete C[A];
          }), delete C.keys, /* @__PURE__ */ h.createElement(m, C, l.map(function(A, E) {
            var R = A.status, _ = Lt(A, xu), w = R === Mn || R === jn;
            return /* @__PURE__ */ h.createElement(t, yt({}, v, {
              key: _.key,
              visible: w,
              eventProps: _,
              onVisibleChanged: function(S) {
                if (d == null || d(S, {
                  key: _.key
                }), !S) {
                  var P = c.removeKey(_.key);
                  P === 0 && g && g();
                }
              }
            }), function(T, S) {
              return f(L(L({}, T), {}, {
                index: E
              }), S);
            });
          }));
        }
      }], [{
        key: "getDerivedStateFromProps",
        value: function(c, l) {
          var s = c.keys, u = l.keyEntities, f = Ln(s), d = Cu(u, f);
          return {
            keyEntities: d.filter(function(g) {
              var C = u.find(function(m) {
                var v = m.key;
                return g.key === v;
              });
              return !(C && C.status === Ur && g.status === In);
            })
          };
        }
      }]), a;
    }(h.Component);
    return z(r, "defaultProps", {
      component: "div"
    }), r;
  }
  Tu(bi);
  function Ou(e) {
    const {
      children: t
    } = e, [, r] = ft(), {
      motion: n
    } = r, o = h.useRef(!1);
    return o.current = o.current || n === !1, o.current ? /* @__PURE__ */ h.createElement(iu, {
      motion: n
    }, t) : t;
  }
  const Ei = /* @__PURE__ */ h.memo((e) => {
    let {
      dropdownMatchSelectWidth: t
    } = e;
    return wt("ConfigProvider").deprecated(t === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null;
  });
  N.env.NODE_ENV !== "production" && (Ei.displayName = "PropWarning");
  const Au = N.env.NODE_ENV !== "production" ? Ei : () => null;
  var Pu = function(e, t) {
    var r = {};
    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
    return r;
  };
  let Nn = !1;
  N.env.NODE_ENV;
  const _u = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"];
  let xi;
  function Ru() {
    return xi || gr;
  }
  function $u(e) {
    return Object.keys(e).some((t) => t.endsWith("Color"));
  }
  const Mu = (e) => {
    const {
      prefixCls: t,
      iconPrefixCls: r,
      theme: n,
      holderRender: o
    } = e;
    t !== void 0 && (xi = t), n && $u(n) && (N.env.NODE_ENV !== "production" && Ar(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), Il(Ru(), n));
  }, ju = (e) => {
    const {
      children: t,
      csp: r,
      autoInsertSpaceInButton: n,
      alert: o,
      anchor: a,
      form: i,
      locale: c,
      componentSize: l,
      direction: s,
      space: u,
      virtual: f,
      dropdownMatchSelectWidth: d,
      popupMatchSelectWidth: g,
      popupOverflow: C,
      legacyLocale: m,
      parentContext: v,
      iconPrefixCls: A,
      theme: E,
      componentDisabled: R,
      segmented: _,
      statistic: w,
      spin: T,
      calendar: S,
      carousel: P,
      cascader: k,
      collapse: W,
      typography: U,
      checkbox: D,
      descriptions: B,
      divider: j,
      drawer: G,
      skeleton: y,
      steps: p,
      image: b,
      layout: x,
      list: $,
      mentions: O,
      modal: I,
      progress: H,
      result: K,
      slider: ae,
      breadcrumb: le,
      menu: Z,
      pagination: Ve,
      input: We,
      textArea: et,
      empty: Pe,
      badge: ge,
      radio: Ge,
      rate: M,
      switch: _e,
      transfer: ne,
      avatar: Re,
      message: Ue,
      tag: tt,
      table: oe,
      card: J,
      tabs: ue,
      timeline: Ee,
      timePicker: Q,
      upload: he,
      notification: Pt,
      tree: Hi,
      colorPicker: Di,
      datePicker: zi,
      rangePicker: Fi,
      flex: Vi,
      wave: Wi,
      dropdown: Gi,
      warning: Ui,
      tour: Xi,
      floatButtonGroup: qi,
      variant: Ki,
      inputNumber: Yi,
      treeSelect: Qi
    } = e, oo = h.useCallback((te, ce) => {
      const {
        prefixCls: xe
      } = e;
      if (ce)
        return ce;
      const we = xe || v.getPrefixCls("");
      return te ? `${we}-${te}` : we;
    }, [v.getPrefixCls, e.prefixCls]), _t = A || v.iconPrefixCls || ni, Rt = r || v.csp;
    li(_t, Rt);
    const Vt = ou(E, v.theme, {
      prefixCls: oo("")
    });
    N.env.NODE_ENV !== "production" && (Nn = Nn || !!Vt);
    const Mr = {
      csp: Rt,
      autoInsertSpaceInButton: n,
      alert: o,
      anchor: a,
      locale: c || m,
      direction: s,
      space: u,
      virtual: f,
      popupMatchSelectWidth: g ?? d,
      popupOverflow: C,
      getPrefixCls: oo,
      iconPrefixCls: _t,
      theme: Vt,
      segmented: _,
      statistic: w,
      spin: T,
      calendar: S,
      carousel: P,
      cascader: k,
      collapse: W,
      typography: U,
      checkbox: D,
      descriptions: B,
      divider: j,
      drawer: G,
      skeleton: y,
      steps: p,
      image: b,
      input: We,
      textArea: et,
      layout: x,
      list: $,
      mentions: O,
      modal: I,
      progress: H,
      result: K,
      slider: ae,
      breadcrumb: le,
      menu: Z,
      pagination: Ve,
      empty: Pe,
      badge: ge,
      radio: Ge,
      rate: M,
      switch: _e,
      transfer: ne,
      avatar: Re,
      message: Ue,
      tag: tt,
      table: oe,
      card: J,
      tabs: ue,
      timeline: Ee,
      timePicker: Q,
      upload: he,
      notification: Pt,
      tree: Hi,
      colorPicker: Di,
      datePicker: zi,
      rangePicker: Fi,
      flex: Vi,
      wave: Wi,
      dropdown: Gi,
      warning: Ui,
      tour: Xi,
      floatButtonGroup: qi,
      variant: Ki,
      inputNumber: Yi,
      treeSelect: Qi
    };
    N.env.NODE_ENV !== "production" && wt("ConfigProvider")(!("autoInsertSpaceInButton" in e), "deprecated", "`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead.");
    const dt = Object.assign({}, v);
    Object.keys(Mr).forEach((te) => {
      Mr[te] !== void 0 && (dt[te] = Mr[te]);
    }), _u.forEach((te) => {
      const ce = e[te];
      ce && (dt[te] = ce);
    }), typeof n < "u" && (dt.button = Object.assign({
      autoInsertSpace: n
    }, dt.button));
    const vt = fa(() => dt, dt, (te, ce) => {
      const xe = Object.keys(te), we = Object.keys(ce);
      return xe.length !== we.length || xe.some((Wt) => te[Wt] !== ce[Wt]);
    }), Zi = h.useMemo(() => ({
      prefixCls: _t,
      csp: Rt
    }), [_t, Rt]);
    let ie = /* @__PURE__ */ h.createElement(h.Fragment, null, /* @__PURE__ */ h.createElement(Au, {
      dropdownMatchSelectWidth: d
    }), t);
    const ao = h.useMemo(() => {
      var te, ce, xe, we;
      return Zs(((te = Pr.Form) === null || te === void 0 ? void 0 : te.defaultValidateMessages) || {}, ((xe = (ce = vt.locale) === null || ce === void 0 ? void 0 : ce.Form) === null || xe === void 0 ? void 0 : xe.defaultValidateMessages) || {}, ((we = vt.form) === null || we === void 0 ? void 0 : we.validateMessages) || {}, (i == null ? void 0 : i.validateMessages) || {});
    }, [vt, i == null ? void 0 : i.validateMessages]);
    Object.keys(ao).length > 0 && (ie = /* @__PURE__ */ h.createElement(el.Provider, {
      value: ao
    }, ie)), c && (ie = /* @__PURE__ */ h.createElement(Ya, {
      locale: c,
      _ANT_MARK__: Ka
    }, ie)), (_t || Rt) && (ie = /* @__PURE__ */ h.createElement(Qn.Provider, {
      value: Zi
    }, ie)), l && (ie = /* @__PURE__ */ h.createElement(Nl, {
      size: l
    }, ie)), ie = /* @__PURE__ */ h.createElement(Ou, null, ie);
    const Ji = h.useMemo(() => {
      const te = Vt || {}, {
        algorithm: ce,
        token: xe,
        components: we,
        cssVar: Wt
      } = te, ec = Pu(te, ["algorithm", "token", "components", "cssVar"]), io = ce && (!Array.isArray(ce) || ce.length > 0) ? an(ce) : ti, jr = {};
      Object.entries(we || {}).forEach((tc) => {
        let [rc, nc] = tc;
        const $e = Object.assign({}, nc);
        "algorithm" in $e && ($e.algorithm === !0 ? $e.theme = io : (Array.isArray($e.algorithm) || typeof $e.algorithm == "function") && ($e.theme = an($e.algorithm)), delete $e.algorithm), jr[rc] = $e;
      });
      const co = Object.assign(Object.assign({}, Ht), xe);
      return Object.assign(Object.assign({}, ec), {
        theme: io,
        token: co,
        components: jr,
        override: Object.assign({
          override: co
        }, jr),
        cssVar: Wt
      });
    }, [Vt]);
    return E && (ie = /* @__PURE__ */ h.createElement(ri.Provider, {
      value: Ji
    }, ie)), vt.warning && (ie = /* @__PURE__ */ h.createElement(Ua.Provider, {
      value: vt.warning
    }, ie)), R !== void 0 && (ie = /* @__PURE__ */ h.createElement(Ll, {
      disabled: R
    }, ie)), /* @__PURE__ */ h.createElement(Je.Provider, {
      value: vt
    }, ie);
  }, Ot = (e) => {
    const t = h.useContext(Je), r = h.useContext(qa);
    return /* @__PURE__ */ h.createElement(ju, Object.assign({
      parentContext: t,
      legacyLocale: r
    }, e));
  };
  Ot.ConfigContext = Je;
  Ot.SizeContext = Et;
  Ot.config = Mu;
  Ot.useConfig = kl;
  Object.defineProperty(Ot, "SizeContext", {
    get: () => (N.env.NODE_ENV !== "production" && Ar(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), Et)
  });
  N.env.NODE_ENV !== "production" && (Ot.displayName = "ConfigProvider");
  function wi(e) {
    var t;
    return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
  }
  function Iu(e) {
    return wi(e) instanceof ShadowRoot;
  }
  function Lu(e) {
    return Iu(e) ? wi(e) : null;
  }
  function Nu(e) {
    return e.replace(/-(.)/g, function(t, r) {
      return r.toUpperCase();
    });
  }
  function ku(e, t) {
    Ze(e, "[@ant-design/icons] ".concat(t));
  }
  function qo(e) {
    return Y(e) === "object" && typeof e.name == "string" && typeof e.theme == "string" && (Y(e.icon) === "object" || typeof e.icon == "function");
  }
  function Ko() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return Object.keys(e).reduce(function(t, r) {
      var n = e[r];
      switch (r) {
        case "class":
          t.className = n, delete t.class;
          break;
        default:
          delete t[r], t[Nu(r)] = n;
      }
      return t;
    }, {});
  }
  function kn(e, t, r) {
    return r ? /* @__PURE__ */ F.createElement(e.tag, L(L({
      key: t
    }, Ko(e.attrs)), r), (e.children || []).map(function(n, o) {
      return kn(n, "".concat(t, "-").concat(e.tag, "-").concat(o));
    })) : /* @__PURE__ */ F.createElement(e.tag, L({
      key: t
    }, Ko(e.attrs)), (e.children || []).map(function(n, o) {
      return kn(n, "".concat(t, "-").concat(e.tag, "-").concat(o));
    }));
  }
  function Ti(e) {
    return Bt(e)[0];
  }
  function Oi(e) {
    return e ? Array.isArray(e) ? e : [e] : [];
  }
  var Bu = `
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
`, Hu = function(t) {
    var r = Ae(Qn), n = r.csp, o = r.prefixCls, a = Bu;
    o && (a = a.replace(/anticon/g, o)), it(function() {
      var i = t.current, c = Lu(i);
      st(a, "@ant-design-icons", {
        prepend: !0,
        csp: n,
        attachTo: c
      });
    }, []);
  }, Du = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], jt = {
    primaryColor: "#333",
    secondaryColor: "#E6E6E6",
    calculated: !1
  };
  function zu(e) {
    var t = e.primaryColor, r = e.secondaryColor;
    jt.primaryColor = t, jt.secondaryColor = r || Ti(t), jt.calculated = !!r;
  }
  function Fu() {
    return L({}, jt);
  }
  var At = function(t) {
    var r = t.icon, n = t.className, o = t.onClick, a = t.style, i = t.primaryColor, c = t.secondaryColor, l = Lt(t, Du), s = h.useRef(), u = jt;
    if (i && (u = {
      primaryColor: i,
      secondaryColor: c || Ti(i)
    }), Hu(s), ku(qo(r), "icon should be icon definiton, but got ".concat(r)), !qo(r))
      return null;
    var f = r;
    return f && typeof f.icon == "function" && (f = L(L({}, f), {}, {
      icon: f.icon(u.primaryColor, u.secondaryColor)
    })), kn(f.icon, "svg-".concat(f.name), L(L({
      className: n,
      onClick: o,
      style: a,
      "data-icon": f.name,
      width: "1em",
      height: "1em",
      fill: "currentColor",
      "aria-hidden": "true"
    }, l), {}, {
      ref: s
    }));
  };
  At.displayName = "IconReact";
  At.getTwoToneColors = Fu;
  At.setTwoToneColors = zu;
  function Ai(e) {
    var t = Oi(e), r = V(t, 2), n = r[0], o = r[1];
    return At.setTwoToneColors({
      primaryColor: n,
      secondaryColor: o
    });
  }
  function Vu() {
    var e = At.getTwoToneColors();
    return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
  }
  var Wu = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
  Ai(pr.primary);
  var _r = /* @__PURE__ */ h.forwardRef(function(e, t) {
    var r = e.className, n = e.icon, o = e.spin, a = e.rotate, i = e.tabIndex, c = e.onClick, l = e.twoToneColor, s = Lt(e, Wu), u = h.useContext(Qn), f = u.prefixCls, d = f === void 0 ? "anticon" : f, g = u.rootClassName, C = ye(g, d, z(z({}, "".concat(d, "-").concat(n.name), !!n.name), "".concat(d, "-spin"), !!o || n.name === "loading"), r), m = i;
    m === void 0 && c && (m = -1);
    var v = a ? {
      msTransform: "rotate(".concat(a, "deg)"),
      transform: "rotate(".concat(a, "deg)")
    } : void 0, A = Oi(l), E = V(A, 2), R = E[0], _ = E[1];
    return /* @__PURE__ */ h.createElement("span", yt({
      role: "img",
      "aria-label": n.name
    }, s, {
      ref: t,
      tabIndex: m,
      onClick: c,
      className: C
    }), /* @__PURE__ */ h.createElement(At, {
      icon: n,
      primaryColor: R,
      secondaryColor: _,
      style: v
    }));
  });
  _r.displayName = "AntdIcon";
  _r.getTwoToneColor = Vu;
  _r.setTwoToneColor = Ai;
  function Gu(e) {
    return e && /* @__PURE__ */ F.isValidElement(e) && e.type === F.Fragment;
  }
  const Uu = (e, t, r) => /* @__PURE__ */ F.isValidElement(e) ? /* @__PURE__ */ F.cloneElement(e, typeof r == "function" ? r(e.props || {}) : r) : t;
  function Pi(e, t) {
    return Uu(e, e, t);
  }
  var Xu = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" }, qu = function(t, r) {
    return /* @__PURE__ */ h.createElement(_r, yt({}, t, {
      ref: r,
      icon: Xu
    }));
  }, _i = /* @__PURE__ */ h.forwardRef(qu);
  N.env.NODE_ENV !== "production" && (_i.displayName = "LoadingOutlined");
  function Dt() {
    Dt = function() {
      return t;
    };
    var e, t = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function(y, p, b) {
      y[p] = b.value;
    }, a = typeof Symbol == "function" ? Symbol : {}, i = a.iterator || "@@iterator", c = a.asyncIterator || "@@asyncIterator", l = a.toStringTag || "@@toStringTag";
    function s(y, p, b) {
      return Object.defineProperty(y, p, {
        value: b,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), y[p];
    }
    try {
      s({}, "");
    } catch {
      s = function(b, x, $) {
        return b[x] = $;
      };
    }
    function u(y, p, b, x) {
      var $ = p && p.prototype instanceof A ? p : A, O = Object.create($.prototype), I = new j(x || []);
      return o(O, "_invoke", {
        value: W(y, b, I)
      }), O;
    }
    function f(y, p, b) {
      try {
        return {
          type: "normal",
          arg: y.call(p, b)
        };
      } catch (x) {
        return {
          type: "throw",
          arg: x
        };
      }
    }
    t.wrap = u;
    var d = "suspendedStart", g = "suspendedYield", C = "executing", m = "completed", v = {};
    function A() {
    }
    function E() {
    }
    function R() {
    }
    var _ = {};
    s(_, i, function() {
      return this;
    });
    var w = Object.getPrototypeOf, T = w && w(w(G([])));
    T && T !== r && n.call(T, i) && (_ = T);
    var S = R.prototype = A.prototype = Object.create(_);
    function P(y) {
      ["next", "throw", "return"].forEach(function(p) {
        s(y, p, function(b) {
          return this._invoke(p, b);
        });
      });
    }
    function k(y, p) {
      function b($, O, I, H) {
        var K = f(y[$], y, O);
        if (K.type !== "throw") {
          var ae = K.arg, le = ae.value;
          return le && Y(le) == "object" && n.call(le, "__await") ? p.resolve(le.__await).then(function(Z) {
            b("next", Z, I, H);
          }, function(Z) {
            b("throw", Z, I, H);
          }) : p.resolve(le).then(function(Z) {
            ae.value = Z, I(ae);
          }, function(Z) {
            return b("throw", Z, I, H);
          });
        }
        H(K.arg);
      }
      var x;
      o(this, "_invoke", {
        value: function(O, I) {
          function H() {
            return new p(function(K, ae) {
              b(O, I, K, ae);
            });
          }
          return x = x ? x.then(H, H) : H();
        }
      });
    }
    function W(y, p, b) {
      var x = d;
      return function($, O) {
        if (x === C) throw Error("Generator is already running");
        if (x === m) {
          if ($ === "throw") throw O;
          return {
            value: e,
            done: !0
          };
        }
        for (b.method = $, b.arg = O; ; ) {
          var I = b.delegate;
          if (I) {
            var H = U(I, b);
            if (H) {
              if (H === v) continue;
              return H;
            }
          }
          if (b.method === "next") b.sent = b._sent = b.arg;
          else if (b.method === "throw") {
            if (x === d) throw x = m, b.arg;
            b.dispatchException(b.arg);
          } else b.method === "return" && b.abrupt("return", b.arg);
          x = C;
          var K = f(y, p, b);
          if (K.type === "normal") {
            if (x = b.done ? m : g, K.arg === v) continue;
            return {
              value: K.arg,
              done: b.done
            };
          }
          K.type === "throw" && (x = m, b.method = "throw", b.arg = K.arg);
        }
      };
    }
    function U(y, p) {
      var b = p.method, x = y.iterator[b];
      if (x === e) return p.delegate = null, b === "throw" && y.iterator.return && (p.method = "return", p.arg = e, U(y, p), p.method === "throw") || b !== "return" && (p.method = "throw", p.arg = new TypeError("The iterator does not provide a '" + b + "' method")), v;
      var $ = f(x, y.iterator, p.arg);
      if ($.type === "throw") return p.method = "throw", p.arg = $.arg, p.delegate = null, v;
      var O = $.arg;
      return O ? O.done ? (p[y.resultName] = O.value, p.next = y.nextLoc, p.method !== "return" && (p.method = "next", p.arg = e), p.delegate = null, v) : O : (p.method = "throw", p.arg = new TypeError("iterator result is not an object"), p.delegate = null, v);
    }
    function D(y) {
      var p = {
        tryLoc: y[0]
      };
      1 in y && (p.catchLoc = y[1]), 2 in y && (p.finallyLoc = y[2], p.afterLoc = y[3]), this.tryEntries.push(p);
    }
    function B(y) {
      var p = y.completion || {};
      p.type = "normal", delete p.arg, y.completion = p;
    }
    function j(y) {
      this.tryEntries = [{
        tryLoc: "root"
      }], y.forEach(D, this), this.reset(!0);
    }
    function G(y) {
      if (y || y === "") {
        var p = y[i];
        if (p) return p.call(y);
        if (typeof y.next == "function") return y;
        if (!isNaN(y.length)) {
          var b = -1, x = function $() {
            for (; ++b < y.length; ) if (n.call(y, b)) return $.value = y[b], $.done = !1, $;
            return $.value = e, $.done = !0, $;
          };
          return x.next = x;
        }
      }
      throw new TypeError(Y(y) + " is not iterable");
    }
    return E.prototype = R, o(S, "constructor", {
      value: R,
      configurable: !0
    }), o(R, "constructor", {
      value: E,
      configurable: !0
    }), E.displayName = s(R, l, "GeneratorFunction"), t.isGeneratorFunction = function(y) {
      var p = typeof y == "function" && y.constructor;
      return !!p && (p === E || (p.displayName || p.name) === "GeneratorFunction");
    }, t.mark = function(y) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(y, R) : (y.__proto__ = R, s(y, l, "GeneratorFunction")), y.prototype = Object.create(S), y;
    }, t.awrap = function(y) {
      return {
        __await: y
      };
    }, P(k.prototype), s(k.prototype, c, function() {
      return this;
    }), t.AsyncIterator = k, t.async = function(y, p, b, x, $) {
      $ === void 0 && ($ = Promise);
      var O = new k(u(y, p, b, x), $);
      return t.isGeneratorFunction(p) ? O : O.next().then(function(I) {
        return I.done ? I.value : O.next();
      });
    }, P(S), s(S, l, "Generator"), s(S, i, function() {
      return this;
    }), s(S, "toString", function() {
      return "[object Generator]";
    }), t.keys = function(y) {
      var p = Object(y), b = [];
      for (var x in p) b.push(x);
      return b.reverse(), function $() {
        for (; b.length; ) {
          var O = b.pop();
          if (O in p) return $.value = O, $.done = !1, $;
        }
        return $.done = !0, $;
      };
    }, t.values = G, j.prototype = {
      constructor: j,
      reset: function(p) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(B), !p) for (var b in this) b.charAt(0) === "t" && n.call(this, b) && !isNaN(+b.slice(1)) && (this[b] = e);
      },
      stop: function() {
        this.done = !0;
        var p = this.tryEntries[0].completion;
        if (p.type === "throw") throw p.arg;
        return this.rval;
      },
      dispatchException: function(p) {
        if (this.done) throw p;
        var b = this;
        function x(ae, le) {
          return I.type = "throw", I.arg = p, b.next = ae, le && (b.method = "next", b.arg = e), !!le;
        }
        for (var $ = this.tryEntries.length - 1; $ >= 0; --$) {
          var O = this.tryEntries[$], I = O.completion;
          if (O.tryLoc === "root") return x("end");
          if (O.tryLoc <= this.prev) {
            var H = n.call(O, "catchLoc"), K = n.call(O, "finallyLoc");
            if (H && K) {
              if (this.prev < O.catchLoc) return x(O.catchLoc, !0);
              if (this.prev < O.finallyLoc) return x(O.finallyLoc);
            } else if (H) {
              if (this.prev < O.catchLoc) return x(O.catchLoc, !0);
            } else {
              if (!K) throw Error("try statement without catch or finally");
              if (this.prev < O.finallyLoc) return x(O.finallyLoc);
            }
          }
        }
      },
      abrupt: function(p, b) {
        for (var x = this.tryEntries.length - 1; x >= 0; --x) {
          var $ = this.tryEntries[x];
          if ($.tryLoc <= this.prev && n.call($, "finallyLoc") && this.prev < $.finallyLoc) {
            var O = $;
            break;
          }
        }
        O && (p === "break" || p === "continue") && O.tryLoc <= b && b <= O.finallyLoc && (O = null);
        var I = O ? O.completion : {};
        return I.type = p, I.arg = b, O ? (this.method = "next", this.next = O.finallyLoc, v) : this.complete(I);
      },
      complete: function(p, b) {
        if (p.type === "throw") throw p.arg;
        return p.type === "break" || p.type === "continue" ? this.next = p.arg : p.type === "return" ? (this.rval = this.arg = p.arg, this.method = "return", this.next = "end") : p.type === "normal" && b && (this.next = b), v;
      },
      finish: function(p) {
        for (var b = this.tryEntries.length - 1; b >= 0; --b) {
          var x = this.tryEntries[b];
          if (x.finallyLoc === p) return this.complete(x.completion, x.afterLoc), B(x), v;
        }
      },
      catch: function(p) {
        for (var b = this.tryEntries.length - 1; b >= 0; --b) {
          var x = this.tryEntries[b];
          if (x.tryLoc === p) {
            var $ = x.completion;
            if ($.type === "throw") {
              var O = $.arg;
              B(x);
            }
            return O;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function(p, b, x) {
        return this.delegate = {
          iterator: G(p),
          resultName: b,
          nextLoc: x
        }, this.method === "next" && (this.arg = e), v;
      }
    }, t;
  }
  function Yo(e, t, r, n, o, a, i) {
    try {
      var c = e[a](i), l = c.value;
    } catch (s) {
      return void r(s);
    }
    c.done ? t(l) : Promise.resolve(l).then(n, o);
  }
  function Ri(e) {
    return function() {
      var t = this, r = arguments;
      return new Promise(function(n, o) {
        var a = e.apply(t, r);
        function i(l) {
          Yo(a, n, o, i, c, "next", l);
        }
        function c(l) {
          Yo(a, n, o, i, c, "throw", l);
        }
        i(void 0);
      });
    };
  }
  var Ft = L({}, fc), Ku = Ft.version, Yu = Ft.render, Qu = Ft.unmountComponentAtNode, Rr;
  try {
    var Zu = Number((Ku || "").split(".")[0]);
    Zu >= 18 && (Rr = Ft.createRoot);
  } catch {
  }
  function Qo(e) {
    var t = Ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    t && Y(t) === "object" && (t.usingClientEntryPoint = e);
  }
  var br = "__rc_react_root__";
  function Ju(e, t) {
    Qo(!0);
    var r = t[br] || Rr(t);
    Qo(!1), r.render(e), t[br] = r;
  }
  function ef(e, t) {
    Yu(e, t);
  }
  function tf(e, t) {
    if (Rr) {
      Ju(e, t);
      return;
    }
    ef(e, t);
  }
  function rf(e) {
    return Bn.apply(this, arguments);
  }
  function Bn() {
    return Bn = Ri(/* @__PURE__ */ Dt().mark(function e(t) {
      return Dt().wrap(function(n) {
        for (; ; ) switch (n.prev = n.next) {
          case 0:
            return n.abrupt("return", Promise.resolve().then(function() {
              var o;
              (o = t[br]) === null || o === void 0 || o.unmount(), delete t[br];
            }));
          case 1:
          case "end":
            return n.stop();
        }
      }, e);
    })), Bn.apply(this, arguments);
  }
  function nf(e) {
    Qu(e);
  }
  function of(e) {
    return Hn.apply(this, arguments);
  }
  function Hn() {
    return Hn = Ri(/* @__PURE__ */ Dt().mark(function e(t) {
      return Dt().wrap(function(n) {
        for (; ; ) switch (n.prev = n.next) {
          case 0:
            if (Rr === void 0) {
              n.next = 2;
              break;
            }
            return n.abrupt("return", rf(t));
          case 2:
            nf(t);
          case 3:
          case "end":
            return n.stop();
        }
      }, e);
    })), Hn.apply(this, arguments);
  }
  const af = function(e) {
    if (!e)
      return !1;
    if (e instanceof Element) {
      if (e.offsetParent)
        return !0;
      if (e.getBBox) {
        var t = e.getBBox(), r = t.width, n = t.height;
        if (r || n)
          return !0;
      }
      if (e.getBoundingClientRect) {
        var o = e.getBoundingClientRect(), a = o.width, i = o.height;
        if (a || i)
          return !0;
      }
    }
    return !1;
  }, cf = (e) => {
    const {
      componentCls: t,
      colorPrimary: r
    } = e;
    return {
      [t]: {
        position: "absolute",
        background: "transparent",
        pointerEvents: "none",
        boxSizing: "border-box",
        color: `var(--wave-color, ${r})`,
        boxShadow: "0 0 0 0 currentcolor",
        opacity: 0.2,
        // =================== Motion ===================
        "&.wave-motion-appear": {
          transition: [`box-shadow 0.4s ${e.motionEaseOutCirc}`, `opacity 2s ${e.motionEaseOutCirc}`].join(","),
          "&-active": {
            boxShadow: "0 0 0 6px currentcolor",
            opacity: 0
          },
          "&.wave-quick": {
            transition: [`box-shadow ${e.motionDurationSlow} ${e.motionEaseInOut}`, `opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`].join(",")
          }
        }
      }
    };
  }, sf = Jn("Wave", (e) => [cf(e)]), $i = `${gr}-wave-target`;
  function lf(e) {
    const t = (e || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
    return t && t[1] && t[2] && t[3] ? !(t[1] === t[2] && t[2] === t[3]) : !0;
  }
  function Xr(e) {
    return e && e !== "#fff" && e !== "#ffffff" && e !== "rgb(255, 255, 255)" && e !== "rgba(255, 255, 255, 1)" && lf(e) && !/rgba\((?:\d*, ){3}0\)/.test(e) && // any transparent rgba color
    e !== "transparent";
  }
  function uf(e) {
    const {
      borderTopColor: t,
      borderColor: r,
      backgroundColor: n
    } = getComputedStyle(e);
    return Xr(t) ? t : Xr(r) ? r : Xr(n) ? n : null;
  }
  function qr(e) {
    return Number.isNaN(e) ? 0 : e;
  }
  const ff = (e) => {
    const {
      className: t,
      target: r,
      component: n
    } = e, o = h.useRef(null), [a, i] = h.useState(null), [c, l] = h.useState([]), [s, u] = h.useState(0), [f, d] = h.useState(0), [g, C] = h.useState(0), [m, v] = h.useState(0), [A, E] = h.useState(!1), R = {
      left: s,
      top: f,
      width: g,
      height: m,
      borderRadius: c.map((T) => `${T}px`).join(" ")
    };
    a && (R["--wave-color"] = a);
    function _() {
      const T = getComputedStyle(r);
      i(uf(r));
      const S = T.position === "static", {
        borderLeftWidth: P,
        borderTopWidth: k
      } = T;
      u(S ? r.offsetLeft : qr(-parseFloat(P))), d(S ? r.offsetTop : qr(-parseFloat(k))), C(r.offsetWidth), v(r.offsetHeight);
      const {
        borderTopLeftRadius: W,
        borderTopRightRadius: U,
        borderBottomLeftRadius: D,
        borderBottomRightRadius: B
      } = T;
      l([W, U, B, D].map((j) => qr(parseFloat(j))));
    }
    if (h.useEffect(() => {
      if (r) {
        const T = Ye(() => {
          _(), E(!0);
        });
        let S;
        return typeof ResizeObserver < "u" && (S = new ResizeObserver(_), S.observe(r)), () => {
          Ye.cancel(T), S == null || S.disconnect();
        };
      }
    }, []), !A)
      return null;
    const w = (n === "Checkbox" || n === "Radio") && (r == null ? void 0 : r.classList.contains($i));
    return /* @__PURE__ */ h.createElement(to, {
      visible: !0,
      motionAppear: !0,
      motionName: "wave-motion",
      motionDeadline: 5e3,
      onAppearEnd: (T, S) => {
        var P;
        if (S.deadline || S.propertyName === "opacity") {
          const k = (P = o.current) === null || P === void 0 ? void 0 : P.parentElement;
          of(k).then(() => {
            k == null || k.remove();
          });
        }
        return !1;
      }
    }, (T, S) => {
      let {
        className: P
      } = T;
      return /* @__PURE__ */ h.createElement("div", {
        ref: Wn(o, S),
        className: ye(t, P, {
          "wave-quick": w
        }),
        style: R
      });
    });
  }, df = (e, t) => {
    var r;
    const {
      component: n
    } = t;
    if (n === "Checkbox" && !(!((r = e.querySelector("input")) === null || r === void 0) && r.checked))
      return;
    const o = document.createElement("div");
    o.style.position = "absolute", o.style.left = "0px", o.style.top = "0px", e == null || e.insertBefore(o, e == null ? void 0 : e.firstChild), tf(/* @__PURE__ */ h.createElement(ff, Object.assign({}, t, {
      target: e
    })), o);
  }, vf = (e, t, r) => {
    const {
      wave: n
    } = h.useContext(Je), [, o, a] = ft(), i = mr((s) => {
      const u = e.current;
      if (n != null && n.disabled || !u)
        return;
      const f = u.querySelector(`.${$i}`) || u, {
        showEffect: d
      } = n || {};
      (d || df)(f, {
        className: t,
        token: o,
        component: r,
        event: s,
        hashId: a
      });
    }), c = h.useRef();
    return (s) => {
      Ye.cancel(c.current), c.current = Ye(() => {
        i(s);
      });
    };
  }, Mi = (e) => {
    const {
      children: t,
      disabled: r,
      component: n
    } = e, {
      getPrefixCls: o
    } = Ae(Je), a = at(null), i = o("wave"), [, c] = sf(i), l = vf(a, ye(i, c), n);
    if (F.useEffect(() => {
      const u = a.current;
      if (!u || u.nodeType !== 1 || r)
        return;
      const f = (d) => {
        !af(d.target) || // No need wave
        !u.getAttribute || u.getAttribute("disabled") || u.disabled || u.className.includes("disabled") || u.className.includes("-leave") || l(d);
      };
      return u.addEventListener("click", f, !0), () => {
        u.removeEventListener("click", f, !0);
      };
    }, [r]), !/* @__PURE__ */ F.isValidElement(t))
      return t ?? null;
    const s = va(t) ? Wn(t.ref, a) : a;
    return Pi(t, {
      ref: s
    });
  };
  N.env.NODE_ENV !== "production" && (Mi.displayName = "Wave");
  const pf = (e) => {
    const t = F.useContext(Et);
    return F.useMemo(() => e ? typeof e == "string" ? e ?? t : e instanceof Function ? e(t) : t : t, [e, t]);
  }, gf = /* @__PURE__ */ h.createContext(null), hf = (e, t) => {
    const r = h.useContext(gf), n = h.useMemo(() => {
      if (!r)
        return "";
      const {
        compactDirection: o,
        isFirstItem: a,
        isLastItem: i
      } = r, c = o === "vertical" ? "-vertical-" : "-";
      return ye(`${e}-compact${c}item`, {
        [`${e}-compact${c}first-item`]: a,
        [`${e}-compact${c}last-item`]: i,
        [`${e}-compact${c}item-rtl`]: t === "rtl"
      });
    }, [e, t, r]);
    return {
      compactSize: r == null ? void 0 : r.compactSize,
      compactDirection: r == null ? void 0 : r.compactDirection,
      compactItemClassnames: n
    };
  };
  var mf = function(e, t) {
    var r = {};
    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
    return r;
  };
  const ji = /* @__PURE__ */ h.createContext(void 0), bf = (e) => {
    const {
      getPrefixCls: t,
      direction: r
    } = h.useContext(Je), {
      prefixCls: n,
      size: o,
      className: a
    } = e, i = mf(e, ["prefixCls", "size", "className"]), c = t("btn-group", n), [, , l] = ft();
    let s = "";
    switch (o) {
      case "large":
        s = "lg";
        break;
      case "small":
        s = "sm";
        break;
    }
    if (N.env.NODE_ENV !== "production") {
      const f = wt("Button.Group");
      N.env.NODE_ENV !== "production" && f(!o || ["large", "small", "middle"].includes(o), "usage", "Invalid prop `size`.");
    }
    const u = ye(c, {
      [`${c}-${s}`]: s,
      [`${c}-rtl`]: r === "rtl"
    }, a, l);
    return /* @__PURE__ */ h.createElement(ji.Provider, {
      value: o
    }, /* @__PURE__ */ h.createElement("div", Object.assign({}, i, {
      className: u
    })));
  }, Zo = /^[\u4e00-\u9fa5]{2}$/, Dn = Zo.test.bind(Zo);
  function Jo(e) {
    return typeof e == "string";
  }
  function tr(e) {
    return e === "text" || e === "link";
  }
  function yf(e, t) {
    if (e == null)
      return;
    const r = t ? " " : "";
    return typeof e != "string" && typeof e != "number" && Jo(e.type) && Dn(e.props.children) ? Pi(e, {
      children: e.props.children.split("").join(r)
    }) : Jo(e) ? Dn(e) ? /* @__PURE__ */ F.createElement("span", null, e.split("").join(r)) : /* @__PURE__ */ F.createElement("span", null, e) : Gu(e) ? /* @__PURE__ */ F.createElement("span", null, e) : e;
  }
  function Sf(e, t) {
    let r = !1;
    const n = [];
    return F.Children.forEach(e, (o) => {
      const a = typeof o, i = a === "string" || a === "number";
      if (r && i) {
        const c = n.length - 1, l = n[c];
        n[c] = `${l}${o}`;
      } else
        n.push(o);
      r = i;
    }), F.Children.map(n, (o) => yf(o, t));
  }
  const Ii = /* @__PURE__ */ ra((e, t) => {
    const {
      className: r,
      style: n,
      children: o,
      prefixCls: a
    } = e, i = ye(`${a}-icon`, r);
    return /* @__PURE__ */ F.createElement("span", {
      ref: t,
      className: i,
      style: n
    }, o);
  }), ea = /* @__PURE__ */ ra((e, t) => {
    const {
      prefixCls: r,
      className: n,
      style: o,
      iconClassName: a
    } = e, i = ye(`${r}-loading-icon`, n);
    return /* @__PURE__ */ F.createElement(Ii, {
      prefixCls: r,
      className: i,
      style: o,
      ref: t
    }, /* @__PURE__ */ F.createElement(_i, {
      className: a
    }));
  }), Kr = () => ({
    width: 0,
    opacity: 0,
    transform: "scale(0)"
  }), Yr = (e) => ({
    width: e.scrollWidth,
    opacity: 1,
    transform: "scale(1)"
  }), Cf = (e) => {
    const {
      prefixCls: t,
      loading: r,
      existIcon: n,
      className: o,
      style: a
    } = e, i = !!r;
    return n ? /* @__PURE__ */ F.createElement(ea, {
      prefixCls: t,
      className: o,
      style: a
    }) : /* @__PURE__ */ F.createElement(to, {
      visible: i,
      // We do not really use this motionName
      motionName: `${t}-loading-icon-motion`,
      motionLeave: i,
      removeOnLeave: !0,
      onAppearStart: Kr,
      onAppearActive: Yr,
      onEnterStart: Kr,
      onEnterActive: Yr,
      onLeaveStart: Yr,
      onLeaveActive: Kr
    }, (c, l) => {
      let {
        className: s,
        style: u
      } = c;
      return /* @__PURE__ */ F.createElement(ea, {
        prefixCls: t,
        className: o,
        style: Object.assign(Object.assign({}, a), u),
        ref: l,
        iconClassName: s
      });
    });
  }, ta = (e, t) => ({
    // Border
    [`> span, > ${e}`]: {
      "&:not(:last-child)": {
        [`&, & > ${e}`]: {
          "&:not(:disabled)": {
            borderInlineEndColor: t
          }
        }
      },
      "&:not(:first-child)": {
        [`&, & > ${e}`]: {
          "&:not(:disabled)": {
            borderInlineStartColor: t
          }
        }
      }
    }
  }), Ef = (e) => {
    const {
      componentCls: t,
      fontSize: r,
      lineWidth: n,
      groupBorderColor: o,
      colorErrorHover: a
    } = e;
    return {
      [`${t}-group`]: [
        {
          position: "relative",
          display: "inline-flex",
          // Border
          [`> span, > ${t}`]: {
            "&:not(:last-child)": {
              [`&, & > ${t}`]: {
                borderStartEndRadius: 0,
                borderEndEndRadius: 0
              }
            },
            "&:not(:first-child)": {
              marginInlineStart: e.calc(n).mul(-1).equal(),
              [`&, & > ${t}`]: {
                borderStartStartRadius: 0,
                borderEndStartRadius: 0
              }
            }
          },
          [t]: {
            position: "relative",
            zIndex: 1,
            "&:hover, &:focus, &:active": {
              zIndex: 2
            },
            "&[disabled]": {
              zIndex: 0
            }
          },
          [`${t}-icon-only`]: {
            fontSize: r
          }
        },
        // Border Color
        ta(`${t}-primary`, o),
        ta(`${t}-danger`, a)
      ]
    };
  }, Li = (e) => {
    const {
      paddingInline: t,
      onlyIconSize: r,
      paddingBlock: n
    } = e;
    return Tt(e, {
      buttonPaddingHorizontal: t,
      buttonPaddingVertical: n,
      buttonIconOnlyFontSize: r
    });
  }, Ni = (e) => {
    var t, r, n, o, a, i;
    const c = (t = e.contentFontSize) !== null && t !== void 0 ? t : e.fontSize, l = (r = e.contentFontSizeSM) !== null && r !== void 0 ? r : e.fontSize, s = (n = e.contentFontSizeLG) !== null && n !== void 0 ? n : e.fontSizeLG, u = (o = e.contentLineHeight) !== null && o !== void 0 ? o : ur(c), f = (a = e.contentLineHeightSM) !== null && a !== void 0 ? a : ur(l), d = (i = e.contentLineHeightLG) !== null && i !== void 0 ? i : ur(s);
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
      paddingBlockSM: Math.max((e.controlHeightSM - l * f) / 2 - e.lineWidth, 0),
      paddingBlockLG: Math.max((e.controlHeightLG - s * d) / 2 - e.lineWidth, 0)
    };
  }, xf = (e) => {
    const {
      componentCls: t,
      iconCls: r,
      fontWeight: n
    } = e;
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
        border: `${Qe(e.lineWidth)} ${e.lineType} transparent`,
        cursor: "pointer",
        transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
        userSelect: "none",
        touchAction: "manipulation",
        color: e.colorText,
        "&:disabled > *": {
          pointerEvents: "none"
        },
        "> span": {
          display: "inline-block"
        },
        [`${t}-icon`]: {
          lineHeight: 1
        },
        "> a": {
          color: "currentColor"
        },
        "&:not(:disabled)": Object.assign({}, ql(e)),
        [`&${t}-two-chinese-chars::first-letter`]: {
          letterSpacing: "0.34em"
        },
        [`&${t}-two-chinese-chars > *:not(${r})`]: {
          marginInlineEnd: "-0.34em",
          letterSpacing: "0.34em"
        },
        // iconPosition="end"
        "&-icon-end": {
          flexDirection: "row-reverse"
        }
      }
    };
  }, Be = (e, t, r) => ({
    [`&:not(:disabled):not(${e}-disabled)`]: {
      "&:hover": t,
      "&:active": r
    }
  }), wf = (e) => ({
    minWidth: e.controlHeight,
    paddingInlineStart: 0,
    paddingInlineEnd: 0,
    borderRadius: "50%"
  }), Tf = (e) => ({
    borderRadius: e.controlHeight,
    paddingInlineStart: e.calc(e.controlHeight).div(2).equal(),
    paddingInlineEnd: e.calc(e.controlHeight).div(2).equal()
  }), Of = (e) => ({
    cursor: "not-allowed",
    borderColor: e.borderColorDisabled,
    color: e.colorTextDisabled,
    background: e.colorBgContainerDisabled,
    boxShadow: "none"
  }), zt = (e, t, r, n, o, a, i, c) => ({
    [`&${e}-background-ghost`]: Object.assign(Object.assign({
      color: r || void 0,
      background: t,
      borderColor: n || void 0,
      boxShadow: "none"
    }, Be(e, Object.assign({
      background: t
    }, i), Object.assign({
      background: t
    }, c))), {
      "&:disabled": {
        cursor: "not-allowed",
        color: o || void 0,
        borderColor: a || void 0
      }
    })
  }), ro = (e) => ({
    [`&:disabled, &${e.componentCls}-disabled`]: Object.assign({}, Of(e))
  }), ki = (e) => Object.assign({}, ro(e)), yr = (e) => ({
    [`&:disabled, &${e.componentCls}-disabled`]: {
      cursor: "not-allowed",
      color: e.colorTextDisabled
    }
  }), Bi = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, ki(e)), {
    background: e.defaultBg,
    borderColor: e.defaultBorderColor,
    color: e.defaultColor,
    boxShadow: e.defaultShadow
  }), Be(e.componentCls, {
    color: e.defaultHoverColor,
    borderColor: e.defaultHoverBorderColor,
    background: e.defaultHoverBg
  }, {
    color: e.defaultActiveColor,
    borderColor: e.defaultActiveBorderColor,
    background: e.defaultActiveBg
  })), zt(e.componentCls, e.ghostBg, e.defaultGhostColor, e.defaultGhostBorderColor, e.colorTextDisabled, e.colorBorder)), {
    [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign(Object.assign({
      color: e.colorError,
      borderColor: e.colorError
    }, Be(e.componentCls, {
      color: e.colorErrorHover,
      borderColor: e.colorErrorBorderHover
    }, {
      color: e.colorErrorActive,
      borderColor: e.colorErrorActive
    })), zt(e.componentCls, e.ghostBg, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder)), ro(e))
  }), Af = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, ki(e)), {
    color: e.primaryColor,
    background: e.colorPrimary,
    boxShadow: e.primaryShadow
  }), Be(e.componentCls, {
    color: e.colorTextLightSolid,
    background: e.colorPrimaryHover
  }, {
    color: e.colorTextLightSolid,
    background: e.colorPrimaryActive
  })), zt(e.componentCls, e.ghostBg, e.colorPrimary, e.colorPrimary, e.colorTextDisabled, e.colorBorder, {
    color: e.colorPrimaryHover,
    borderColor: e.colorPrimaryHover
  }, {
    color: e.colorPrimaryActive,
    borderColor: e.colorPrimaryActive
  })), {
    [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign(Object.assign({
      background: e.colorError,
      boxShadow: e.dangerShadow,
      color: e.dangerColor
    }, Be(e.componentCls, {
      background: e.colorErrorHover
    }, {
      background: e.colorErrorActive
    })), zt(e.componentCls, e.ghostBg, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder, {
      color: e.colorErrorHover,
      borderColor: e.colorErrorHover
    }, {
      color: e.colorErrorActive,
      borderColor: e.colorErrorActive
    })), ro(e))
  }), Pf = (e) => Object.assign(Object.assign({}, Bi(e)), {
    borderStyle: "dashed"
  }), _f = (e) => Object.assign(Object.assign(Object.assign({
    color: e.colorLink
  }, Be(e.componentCls, {
    color: e.colorLinkHover,
    background: e.linkHoverBg
  }, {
    color: e.colorLinkActive
  })), yr(e)), {
    [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign({
      color: e.colorError
    }, Be(e.componentCls, {
      color: e.colorErrorHover
    }, {
      color: e.colorErrorActive
    })), yr(e))
  }), Rf = (e) => Object.assign(Object.assign(Object.assign({}, Be(e.componentCls, {
    color: e.colorText,
    background: e.textHoverBg
  }, {
    color: e.colorText,
    background: e.colorBgTextActive
  })), yr(e)), {
    [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign({
      color: e.colorError
    }, yr(e)), Be(e.componentCls, {
      color: e.colorErrorHover,
      background: e.colorErrorBg
    }, {
      color: e.colorErrorHover,
      background: e.colorErrorBgActive
    }))
  }), $f = (e) => {
    const {
      componentCls: t
    } = e;
    return {
      [`${t}-default`]: Bi(e),
      [`${t}-primary`]: Af(e),
      [`${t}-dashed`]: Pf(e),
      [`${t}-link`]: _f(e),
      [`${t}-text`]: Rf(e),
      [`${t}-ghost`]: zt(e.componentCls, e.ghostBg, e.colorBgContainer, e.colorBgContainer, e.colorTextDisabled, e.colorBorder)
    };
  }, no = function(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const {
      componentCls: r,
      controlHeight: n,
      fontSize: o,
      lineHeight: a,
      borderRadius: i,
      buttonPaddingHorizontal: c,
      iconCls: l,
      buttonPaddingVertical: s
    } = e, u = `${r}-icon-only`;
    return [
      {
        [`${t}`]: {
          fontSize: o,
          lineHeight: a,
          height: n,
          padding: `${Qe(s)} ${Qe(c)}`,
          borderRadius: i,
          [`&${u}`]: {
            width: n,
            paddingInline: 0,
            // make `btn-icon-only` not too narrow
            [`&${r}-compact-item`]: {
              flex: "none"
            },
            [`&${r}-round`]: {
              width: "auto"
            },
            [l]: {
              fontSize: e.buttonIconOnlyFontSize
            }
          },
          // Loading
          [`&${r}-loading`]: {
            opacity: e.opacityLoading,
            cursor: "default"
          },
          [`${r}-loading-icon`]: {
            transition: `width ${e.motionDurationSlow} ${e.motionEaseInOut}, opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`
          }
        }
      },
      // Shape - patch prefixCls again to override solid border radius style
      {
        [`${r}${r}-circle${t}`]: wf(e)
      },
      {
        [`${r}${r}-round${t}`]: Tf(e)
      }
    ];
  }, Mf = (e) => {
    const t = Tt(e, {
      fontSize: e.contentFontSize,
      lineHeight: e.contentLineHeight
    });
    return no(t, e.componentCls);
  }, jf = (e) => {
    const t = Tt(e, {
      controlHeight: e.controlHeightSM,
      fontSize: e.contentFontSizeSM,
      lineHeight: e.contentLineHeightSM,
      padding: e.paddingXS,
      buttonPaddingHorizontal: e.paddingInlineSM,
      buttonPaddingVertical: e.paddingBlockSM,
      borderRadius: e.borderRadiusSM,
      buttonIconOnlyFontSize: e.onlyIconSizeSM
    });
    return no(t, `${e.componentCls}-sm`);
  }, If = (e) => {
    const t = Tt(e, {
      controlHeight: e.controlHeightLG,
      fontSize: e.contentFontSizeLG,
      lineHeight: e.contentLineHeightLG,
      buttonPaddingHorizontal: e.paddingInlineLG,
      buttonPaddingVertical: e.paddingBlockLG,
      borderRadius: e.borderRadiusLG,
      buttonIconOnlyFontSize: e.onlyIconSizeLG
    });
    return no(t, `${e.componentCls}-lg`);
  }, Lf = (e) => {
    const {
      componentCls: t
    } = e;
    return {
      [t]: {
        [`&${t}-block`]: {
          width: "100%"
        }
      }
    };
  }, Nf = eu("Button", (e) => {
    const t = Li(e);
    return [
      // Shared
      xf(t),
      // Size
      Mf(t),
      jf(t),
      If(t),
      // Block
      Lf(t),
      // Group (type, ghost, danger, loading)
      $f(t),
      // Button Group
      Ef(t)
    ];
  }, Ni, {
    unitless: {
      fontWeight: !0,
      contentLineHeight: !0,
      contentLineHeightSM: !0,
      contentLineHeightLG: !0
    }
  });
  function kf(e, t, r) {
    const {
      focusElCls: n,
      focus: o,
      borderElCls: a
    } = r, i = a ? "> *" : "", c = ["hover", o ? "focus" : null, "active"].filter(Boolean).map((l) => `&:${l} ${i}`).join(",");
    return {
      [`&-item:not(${t}-last-item)`]: {
        marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal()
      },
      "&-item": Object.assign(Object.assign({
        [c]: {
          zIndex: 2
        }
      }, n ? {
        [`&${n}`]: {
          zIndex: 2
        }
      } : {}), {
        [`&[disabled] ${i}`]: {
          zIndex: 0
        }
      })
    };
  }
  function Bf(e, t, r) {
    const {
      borderElCls: n
    } = r, o = n ? `> ${n}` : "";
    return {
      [`&-item:not(${t}-first-item):not(${t}-last-item) ${o}`]: {
        borderRadius: 0
      },
      [`&-item:not(${t}-last-item)${t}-first-item`]: {
        [`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]: {
          borderStartEndRadius: 0,
          borderEndEndRadius: 0
        }
      },
      [`&-item:not(${t}-first-item)${t}-last-item`]: {
        [`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]: {
          borderStartStartRadius: 0,
          borderEndStartRadius: 0
        }
      }
    };
  }
  function Hf(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      focus: !0
    };
    const {
      componentCls: r
    } = e, n = `${r}-compact`;
    return {
      [n]: Object.assign(Object.assign({}, kf(e, n, t)), Bf(r, n, t))
    };
  }
  function Df(e, t) {
    return {
      // border collapse
      [`&-item:not(${t}-last-item)`]: {
        marginBottom: e.calc(e.lineWidth).mul(-1).equal()
      },
      "&-item": {
        "&:hover,&:focus,&:active": {
          zIndex: 2
        },
        "&[disabled]": {
          zIndex: 0
        }
      }
    };
  }
  function zf(e, t) {
    return {
      [`&-item:not(${t}-first-item):not(${t}-last-item)`]: {
        borderRadius: 0
      },
      [`&-item${t}-first-item:not(${t}-last-item)`]: {
        [`&, &${e}-sm, &${e}-lg`]: {
          borderEndEndRadius: 0,
          borderEndStartRadius: 0
        }
      },
      [`&-item${t}-last-item:not(${t}-first-item)`]: {
        [`&, &${e}-sm, &${e}-lg`]: {
          borderStartStartRadius: 0,
          borderStartEndRadius: 0
        }
      }
    };
  }
  function Ff(e) {
    const t = `${e.componentCls}-compact-vertical`;
    return {
      [t]: Object.assign(Object.assign({}, Df(e, t)), zf(e.componentCls, t))
    };
  }
  const Vf = (e) => {
    const {
      componentCls: t,
      calc: r
    } = e;
    return {
      [t]: {
        // Special styles for Primary Button
        [`&-compact-item${t}-primary`]: {
          [`&:not([disabled]) + ${t}-compact-item${t}-primary:not([disabled])`]: {
            position: "relative",
            "&:before": {
              position: "absolute",
              top: r(e.lineWidth).mul(-1).equal(),
              insetInlineStart: r(e.lineWidth).mul(-1).equal(),
              display: "inline-block",
              width: e.lineWidth,
              height: `calc(100% + ${Qe(e.lineWidth)} * 2)`,
              backgroundColor: e.colorPrimaryHover,
              content: '""'
            }
          }
        },
        // Special styles for Primary Button
        "&-compact-vertical-item": {
          [`&${t}-primary`]: {
            [`&:not([disabled]) + ${t}-compact-vertical-item${t}-primary:not([disabled])`]: {
              position: "relative",
              "&:before": {
                position: "absolute",
                top: r(e.lineWidth).mul(-1).equal(),
                insetInlineStart: r(e.lineWidth).mul(-1).equal(),
                display: "inline-block",
                width: `calc(100% + ${Qe(e.lineWidth)} * 2)`,
                height: e.lineWidth,
                backgroundColor: e.colorPrimaryHover,
                content: '""'
              }
            }
          }
        }
      }
    };
  }, Wf = Zl(["Button", "compact"], (e) => {
    const t = Li(e);
    return [
      // Space Compact
      Hf(t),
      Ff(t),
      Vf(t)
    ];
  }, Ni);
  var Gf = function(e, t) {
    var r = {};
    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
    return r;
  };
  function Uf(e) {
    if (typeof e == "object" && e) {
      let t = e == null ? void 0 : e.delay;
      return t = !Number.isNaN(t) && typeof t == "number" ? t : 0, {
        loading: t <= 0,
        delay: t
      };
    }
    return {
      loading: !!e,
      delay: 0
    };
  }
  const Xf = /* @__PURE__ */ F.forwardRef((e, t) => {
    var r, n, o;
    const {
      loading: a = !1,
      prefixCls: i,
      type: c,
      danger: l = !1,
      shape: s = "default",
      size: u,
      styles: f,
      disabled: d,
      className: g,
      rootClassName: C,
      children: m,
      icon: v,
      iconPosition: A = "start",
      ghost: E = !1,
      block: R = !1,
      // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
      htmlType: _ = "button",
      classNames: w,
      style: T = {},
      autoInsertSpace: S
    } = e, P = Gf(e, ["loading", "prefixCls", "type", "danger", "shape", "size", "styles", "disabled", "className", "rootClassName", "children", "icon", "iconPosition", "ghost", "block", "htmlType", "classNames", "style", "autoInsertSpace"]), k = c || "default", {
      getPrefixCls: W,
      direction: U,
      button: D
    } = Ae(Je), B = (r = S ?? (D == null ? void 0 : D.autoInsertSpace)) !== null && r !== void 0 ? r : !0, j = W("btn", i), [G, y, p] = Nf(j), b = Ae(hr), x = d ?? b, $ = Ae(ji), O = sc(() => Uf(a), [a]), [I, H] = so(O.loading), [K, ae] = so(!1), Z = Wn(t, /* @__PURE__ */ uc()), Ve = lc.count(m) === 1 && !v && !tr(k);
    it(() => {
      let Q = null;
      O.delay > 0 ? Q = setTimeout(() => {
        Q = null, H(!0);
      }, O.delay) : H(O.loading);
      function he() {
        Q && (clearTimeout(Q), Q = null);
      }
      return he;
    }, [O]), it(() => {
      if (!Z || !Z.current || !B)
        return;
      const Q = Z.current.textContent;
      Ve && Dn(Q) ? K || ae(!0) : K && ae(!1);
    }, [Z]);
    const We = (Q) => {
      const {
        onClick: he
      } = e;
      if (I || x) {
        Q.preventDefault();
        return;
      }
      he == null || he(Q);
    };
    if (N.env.NODE_ENV !== "production") {
      const Q = wt("Button");
      N.env.NODE_ENV !== "production" && Q(!(typeof v == "string" && v.length > 2), "breaking", `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${v}\` at https://ant.design/components/icon`), N.env.NODE_ENV !== "production" && Q(!(E && tr(k)), "usage", "`link` or `text` button can't be a `ghost` button.");
    }
    const {
      compactSize: et,
      compactItemClassnames: Pe
    } = hf(j, U), ge = {
      large: "lg",
      small: "sm",
      middle: void 0
    }, Ge = pf((Q) => {
      var he, Pt;
      return (Pt = (he = u ?? et) !== null && he !== void 0 ? he : $) !== null && Pt !== void 0 ? Pt : Q;
    }), M = Ge && ge[Ge] || "", _e = I ? "loading" : v, ne = Ac(P, ["navigate"]), Re = ye(j, y, p, {
      [`${j}-${s}`]: s !== "default" && s,
      [`${j}-${k}`]: k,
      [`${j}-${M}`]: M,
      [`${j}-icon-only`]: !m && m !== 0 && !!_e,
      [`${j}-background-ghost`]: E && !tr(k),
      [`${j}-loading`]: I,
      [`${j}-two-chinese-chars`]: K && B && !I,
      [`${j}-block`]: R,
      [`${j}-dangerous`]: l,
      [`${j}-rtl`]: U === "rtl",
      [`${j}-icon-end`]: A === "end"
    }, Pe, g, C, D == null ? void 0 : D.className), Ue = Object.assign(Object.assign({}, D == null ? void 0 : D.style), T), tt = ye(w == null ? void 0 : w.icon, (n = D == null ? void 0 : D.classNames) === null || n === void 0 ? void 0 : n.icon), oe = Object.assign(Object.assign({}, (f == null ? void 0 : f.icon) || {}), ((o = D == null ? void 0 : D.styles) === null || o === void 0 ? void 0 : o.icon) || {}), J = v && !I ? /* @__PURE__ */ F.createElement(Ii, {
      prefixCls: j,
      className: tt,
      style: oe
    }, v) : /* @__PURE__ */ F.createElement(Cf, {
      existIcon: !!v,
      prefixCls: j,
      loading: I
    }), ue = m || m === 0 ? Sf(m, Ve && B) : null;
    if (ne.href !== void 0)
      return G(/* @__PURE__ */ F.createElement("a", Object.assign({}, ne, {
        className: ye(Re, {
          [`${j}-disabled`]: x
        }),
        href: x ? void 0 : ne.href,
        style: Ue,
        onClick: We,
        ref: Z,
        tabIndex: x ? -1 : 0
      }), J, ue));
    let Ee = /* @__PURE__ */ F.createElement("button", Object.assign({}, P, {
      type: _,
      className: Re,
      style: Ue,
      onClick: We,
      disabled: x,
      ref: Z
    }), J, ue, !!Pe && /* @__PURE__ */ F.createElement(Wf, {
      key: "compact",
      prefixCls: j
    }));
    return tr(k) || (Ee = /* @__PURE__ */ F.createElement(Mi, {
      component: "Button",
      disabled: I
    }, Ee)), G(Ee);
  }), $r = Xf;
  $r.Group = bf;
  $r.__ANT_BUTTON = !0;
  N.env.NODE_ENV !== "production" && ($r.displayName = "Button");
  const qf = (e, t) => e + t;
  window.process = {
    env: {
      NODE_ENV: "production"
    }
  };
  window.webGDL = {
    sum: qf,
    Button: $r
  };
});
export default Kf();
