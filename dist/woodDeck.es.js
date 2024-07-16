import * as h from "react";
import z, { version as Fi, isValidElement as Vi, useContext as xe, createContext as Pn, useRef as Ze, useLayoutEffect as Wi, useEffect as Je, forwardRef as Wo, useMemo as Gi, useState as Yn, Children as Ui, createRef as Xi } from "react";
import * as qi from "react-dom";
import Qn from "react-dom";
function Ki(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Go = { exports: {} };
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
})(Go);
var Yi = Go.exports;
const me = /* @__PURE__ */ Ki(Yi);
function ft() {
  return ft = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ft.apply(null, arguments);
}
var Dr = { exports: {} }, U = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zn;
function Qi() {
  if (Zn) return U;
  Zn = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), s = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), C;
  C = Symbol.for("react.module.reference");
  function m(p) {
    if (typeof p == "object" && p !== null) {
      var A = p.$$typeof;
      switch (A) {
        case e:
          switch (p = p.type, p) {
            case r:
            case o:
            case n:
            case s:
            case u:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case c:
                case i:
                case l:
                case d:
                case f:
                case a:
                  return p;
                default:
                  return A;
              }
          }
        case t:
          return A;
      }
    }
  }
  return U.ContextConsumer = i, U.ContextProvider = a, U.Element = e, U.ForwardRef = l, U.Fragment = r, U.Lazy = d, U.Memo = f, U.Portal = t, U.Profiler = o, U.StrictMode = n, U.Suspense = s, U.SuspenseList = u, U.isAsyncMode = function() {
    return !1;
  }, U.isConcurrentMode = function() {
    return !1;
  }, U.isContextConsumer = function(p) {
    return m(p) === i;
  }, U.isContextProvider = function(p) {
    return m(p) === a;
  }, U.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }, U.isForwardRef = function(p) {
    return m(p) === l;
  }, U.isFragment = function(p) {
    return m(p) === r;
  }, U.isLazy = function(p) {
    return m(p) === d;
  }, U.isMemo = function(p) {
    return m(p) === f;
  }, U.isPortal = function(p) {
    return m(p) === t;
  }, U.isProfiler = function(p) {
    return m(p) === o;
  }, U.isStrictMode = function(p) {
    return m(p) === n;
  }, U.isSuspense = function(p) {
    return m(p) === s;
  }, U.isSuspenseList = function(p) {
    return m(p) === u;
  }, U.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === r || p === o || p === n || p === s || p === u || p === g || typeof p == "object" && p !== null && (p.$$typeof === d || p.$$typeof === f || p.$$typeof === a || p.$$typeof === i || p.$$typeof === l || p.$$typeof === C || p.getModuleId !== void 0);
  }, U.typeOf = m, U;
}
var X = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jn;
function Zi() {
  return Jn || (Jn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), s = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), C = !1, m = !1, p = !1, A = !1, E = !1, R;
    R = Symbol.for("react.module.reference");
    function _(M) {
      return !!(typeof M == "string" || typeof M == "function" || M === r || M === o || E || M === n || M === s || M === u || A || M === g || C || m || p || typeof M == "object" && M !== null && (M.$$typeof === d || M.$$typeof === f || M.$$typeof === a || M.$$typeof === i || M.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      M.$$typeof === R || M.getModuleId !== void 0));
    }
    function w(M) {
      if (typeof M == "object" && M !== null) {
        var Oe = M.$$typeof;
        switch (Oe) {
          case e:
            var te = M.type;
            switch (te) {
              case r:
              case o:
              case n:
              case s:
              case u:
                return te;
              default:
                var Te = te && te.$$typeof;
                switch (Te) {
                  case c:
                  case i:
                  case l:
                  case d:
                  case f:
                  case a:
                    return Te;
                  default:
                    return Oe;
                }
            }
          case t:
            return Oe;
        }
      }
    }
    var O = i, S = a, P = e, N = l, V = r, G = d, H = f, k = t, j = o, W = n, y = s, v = u, b = !1, x = !1;
    function $(M) {
      return b || (b = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function T(M) {
      return x || (x = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function I(M) {
      return w(M) === i;
    }
    function B(M) {
      return w(M) === a;
    }
    function q(M) {
      return typeof M == "object" && M !== null && M.$$typeof === e;
    }
    function ne(M) {
      return w(M) === l;
    }
    function ce(M) {
      return w(M) === r;
    }
    function Q(M) {
      return w(M) === d;
    }
    function ke(M) {
      return w(M) === f;
    }
    function Be(M) {
      return w(M) === t;
    }
    function qe(M) {
      return w(M) === o;
    }
    function we(M) {
      return w(M) === n;
    }
    function pe(M) {
      return w(M) === s;
    }
    function He(M) {
      return w(M) === u;
    }
    X.ContextConsumer = O, X.ContextProvider = S, X.Element = P, X.ForwardRef = N, X.Fragment = V, X.Lazy = G, X.Memo = H, X.Portal = k, X.Profiler = j, X.StrictMode = W, X.Suspense = y, X.SuspenseList = v, X.isAsyncMode = $, X.isConcurrentMode = T, X.isContextConsumer = I, X.isContextProvider = B, X.isElement = q, X.isForwardRef = ne, X.isFragment = ce, X.isLazy = Q, X.isMemo = ke, X.isPortal = Be, X.isProfiler = qe, X.isStrictMode = we, X.isSuspense = pe, X.isSuspenseList = He, X.isValidElementType = _, X.typeOf = w;
  }()), X;
}
process.env.NODE_ENV === "production" ? Dr.exports = Qi() : Dr.exports = Zi();
var qt = Dr.exports, zr = {}, _n = [], Ji = function(t) {
  _n.push(t);
};
function Rn(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = _n.reduce(function(n, o) {
      return o(n ?? "", "warning");
    }, t);
    r && console.error("Warning: ".concat(r));
  }
}
function ec(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = _n.reduce(function(n, o) {
      return o(n ?? "", "note");
    }, t);
    r && console.warn("Note: ".concat(r));
  }
}
function Uo() {
  zr = {};
}
function Xo(e, t, r) {
  !t && !zr[r] && (e(!1, r), zr[r] = !0);
}
function Ue(e, t) {
  Xo(Rn, e, t);
}
function tc(e, t) {
  Xo(ec, e, t);
}
Ue.preMessage = Ji;
Ue.resetWarned = Uo;
Ue.noteOnce = tc;
function K(e) {
  "@babel/helpers - typeof";
  return K = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, K(e);
}
function rc(e, t) {
  if (K(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (K(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function qo(e) {
  var t = rc(e, "string");
  return K(t) == "symbol" ? t : t + "";
}
function D(e, t, r) {
  return (t = qo(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function eo(e, t) {
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
    t % 2 ? eo(Object(r), !0).forEach(function(n) {
      D(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : eo(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function to(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function nc(e) {
  return e && K(e) === "object" && to(e.nativeElement) ? e.nativeElement : to(e) ? e : null;
}
function oc(e) {
  var t = nc(e);
  if (t)
    return t;
  if (e instanceof z.Component) {
    var r;
    return (r = Qn.findDOMNode) === null || r === void 0 ? void 0 : r.call(Qn, e);
  }
  return null;
}
function Ko(e, t, r) {
  var n = h.useRef({});
  return (!("value" in n.current) || r(n.current.condition, t)) && (n.current.value = e(), n.current.condition = t), n.current.value;
}
var Yo = function(t, r) {
  typeof t == "function" ? t(r) : K(t) === "object" && t && "current" in t && (t.current = r);
}, $n = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  var o = r.filter(Boolean);
  return o.length <= 1 ? o[0] : function(a) {
    r.forEach(function(i) {
      Yo(i, a);
    });
  };
}, Qo = function(t) {
  var r, n, o = qt.isMemo(t) ? t.type.type : t.type;
  return !(typeof o == "function" && !((r = o.prototype) !== null && r !== void 0 && r.render) && o.$$typeof !== qt.ForwardRef || typeof t == "function" && !((n = t.prototype) !== null && n !== void 0 && n.render) && t.$$typeof !== qt.ForwardRef);
};
function ro(e) {
  return /* @__PURE__ */ Vi(e) && !qt.isFragment(e);
}
Number(Fi.split(".")[0]) >= 19;
function Ie(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function no(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, qo(n.key), n);
  }
}
function Le(e, t, r) {
  return t && no(e.prototype, t), r && no(e, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function Fr(e, t) {
  return Fr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, Fr(e, t);
}
function ur(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && Fr(e, t);
}
function rr(e) {
  return rr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, rr(e);
}
function Zo() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Zo = function() {
    return !!e;
  })();
}
function et(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ac(e, t) {
  if (t && (K(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return et(e);
}
function fr(e) {
  var t = Zo();
  return function() {
    var r, n = rr(e);
    if (t) {
      var o = rr(this).constructor;
      r = Reflect.construct(n, arguments, o);
    } else r = n.apply(this, arguments);
    return ac(this, r);
  };
}
function ic(e, t) {
  var r = Object.assign({}, e);
  return Array.isArray(t) && t.forEach(function(n) {
    delete r[n];
  }), r;
}
function Vr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function cc(e) {
  if (Array.isArray(e)) return Vr(e);
}
function Jo(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Mn(e, t) {
  if (e) {
    if (typeof e == "string") return Vr(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Vr(e, t) : void 0;
  }
}
function sc() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Me(e) {
  return cc(e) || Jo(e) || Mn(e) || sc();
}
var ea = function(t) {
  return +setTimeout(t, 16);
}, ta = function(t) {
  return clearTimeout(t);
};
typeof window < "u" && "requestAnimationFrame" in window && (ea = function(t) {
  return window.requestAnimationFrame(t);
}, ta = function(t) {
  return window.cancelAnimationFrame(t);
});
var oo = 0, dr = /* @__PURE__ */ new Map();
function ra(e) {
  dr.delete(e);
}
var We = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  oo += 1;
  var n = oo;
  function o(a) {
    if (a === 0)
      ra(n), t();
    else {
      var i = ea(function() {
        o(a - 1);
      });
      dr.set(n, i);
    }
  }
  return o(r), n;
};
We.cancel = function(e) {
  var t = dr.get(e);
  return ra(e), ta(t);
};
process.env.NODE_ENV !== "production" && (We.ids = function() {
  return dr;
});
function na(e) {
  if (Array.isArray(e)) return e;
}
function lc(e, t) {
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
function oa() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function F(e, t) {
  return na(e) || lc(e, t) || Mn(e, t) || oa();
}
function Tt(e) {
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
function Ne() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function uc(e, t) {
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
var ao = "data-rc-order", io = "data-rc-priority", fc = "rc-util-key", Wr = /* @__PURE__ */ new Map();
function aa() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : fc;
}
function pr(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function dc(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function jn(e) {
  return Array.from((Wr.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function ia(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!Ne())
    return null;
  var r = t.csp, n = t.prepend, o = t.priority, a = o === void 0 ? 0 : o, i = dc(n), c = i === "prependQueue", l = document.createElement("style");
  l.setAttribute(ao, i), c && a && l.setAttribute(io, "".concat(a)), r != null && r.nonce && (l.nonce = r == null ? void 0 : r.nonce), l.innerHTML = e;
  var s = pr(t), u = s.firstChild;
  if (n) {
    if (c) {
      var f = (t.styles || jn(s)).filter(function(d) {
        if (!["prepend", "prependQueue"].includes(d.getAttribute(ao)))
          return !1;
        var g = Number(d.getAttribute(io) || 0);
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
function ca(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = pr(t);
  return (t.styles || jn(r)).find(function(n) {
    return n.getAttribute(aa(t)) === e;
  });
}
function sa(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = ca(e, t);
  if (r) {
    var n = pr(t);
    n.removeChild(r);
  }
}
function pc(e, t) {
  var r = Wr.get(e);
  if (!r || !uc(document, r)) {
    var n = ia("", t), o = n.parentNode;
    Wr.set(e, o), e.removeChild(n);
  }
}
function tt(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = pr(r), o = jn(n), a = L(L({}, r), {}, {
    styles: o
  });
  pc(n, a);
  var i = ca(t, a);
  if (i) {
    var c, l;
    if ((c = a.csp) !== null && c !== void 0 && c.nonce && i.nonce !== ((l = a.csp) === null || l === void 0 ? void 0 : l.nonce)) {
      var s;
      i.nonce = (s = a.csp) === null || s === void 0 ? void 0 : s.nonce;
    }
    return i.innerHTML !== e && (i.innerHTML = e), i;
  }
  var u = ia(e, a);
  return u.setAttribute(aa(a), t), u;
}
function vc(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.includes(n)) continue;
    r[n] = e[n];
  }
  return r;
}
function At(e, t) {
  if (e == null) return {};
  var r, n, o = vc(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.includes(r) || {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function gc(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = /* @__PURE__ */ new Set();
  function o(a, i) {
    var c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, l = n.has(a);
    if (Ue(!l, "Warning: There may be circular references"), l)
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
    if (a && i && K(a) === "object" && K(i) === "object") {
      var f = Object.keys(a);
      return f.length !== Object.keys(i).length ? !1 : f.every(function(d) {
        return o(a[d], i[d], s);
      });
    }
    return !1;
  }
  return o(e, t);
}
var hc = "%";
function Gr(e) {
  return e.join(hc);
}
var mc = /* @__PURE__ */ function() {
  function e(t) {
    Ie(this, e), D(this, "instanceId", void 0), D(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = t;
  }
  return Le(e, [{
    key: "get",
    value: function(r) {
      return this.opGet(Gr(r));
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
      return this.opUpdate(Gr(r), n);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(r, n) {
      var o = this.cache.get(r), a = n(o);
      a === null ? this.cache.delete(r) : this.cache.set(r, a);
    }
  }]), e;
}(), dt = "data-token-hash", be = "data-css-hash", bc = "data-cache-path", Fe = "__cssinjs_instance__";
function yc() {
  var e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var t = document.body.querySelectorAll("style[".concat(be, "]")) || [], r = document.head.firstChild;
    Array.from(t).forEach(function(o) {
      o[Fe] = o[Fe] || e, o[Fe] === e && document.head.insertBefore(o, r);
    });
    var n = {};
    Array.from(document.querySelectorAll("style[".concat(be, "]"))).forEach(function(o) {
      var a = o.getAttribute(be);
      if (n[a]) {
        if (o[Fe] === e) {
          var i;
          (i = o.parentNode) === null || i === void 0 || i.removeChild(o);
        }
      } else
        n[a] = !0;
    });
  }
  return new mc(e);
}
var Sc = /* @__PURE__ */ h.createContext({
  hashPriority: "low",
  cache: yc(),
  defaultCache: !0
});
const vr = Sc;
var la = /* @__PURE__ */ Le(function e() {
  Ie(this, e);
}), ua = "CALC_UNIT", Cc = new RegExp(ua, "g");
function xr(e) {
  return typeof e == "number" ? "".concat(e).concat(ua) : e;
}
var Ec = /* @__PURE__ */ function(e) {
  ur(r, e);
  var t = fr(r);
  function r(n, o) {
    var a;
    Ie(this, r), a = t.call(this), D(et(a), "result", ""), D(et(a), "unitlessCssVar", void 0), D(et(a), "lowPriority", void 0);
    var i = K(n);
    return a.unitlessCssVar = o, n instanceof r ? a.result = "(".concat(n.result, ")") : i === "number" ? a.result = xr(n) : i === "string" && (a.result = n), a;
  }
  return Le(r, [{
    key: "add",
    value: function(o) {
      return o instanceof r ? this.result = "".concat(this.result, " + ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " + ").concat(xr(o))), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(o) {
      return o instanceof r ? this.result = "".concat(this.result, " - ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " - ").concat(xr(o))), this.lowPriority = !0, this;
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
      }) && (l = !1), this.result = this.result.replace(Cc, l ? "px" : ""), typeof this.lowPriority < "u" ? "calc(".concat(this.result, ")") : this.result;
    }
  }]), r;
}(la), xc = /* @__PURE__ */ function(e) {
  ur(r, e);
  var t = fr(r);
  function r(n) {
    var o;
    return Ie(this, r), o = t.call(this), D(et(o), "result", 0), n instanceof r ? o.result = n.result : typeof n == "number" && (o.result = n), o;
  }
  return Le(r, [{
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
}(la), wc = function(t, r) {
  var n = t === "css" ? Ec : xc;
  return function(o) {
    return new n(o, r);
  };
};
function Oc(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
var In = /* @__PURE__ */ function() {
  function e() {
    Ie(this, e), D(this, "cache", void 0), D(this, "keys", void 0), D(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return Le(e, [{
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
            var f = F(s, 2), d = f[1];
            return o.internalGet(u)[1] < d ? [u, o.internalGet(u)[1]] : s;
          }, [this.keys[0], this.cacheCallTimes]), i = F(a, 1), c = i[0];
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
          return !Oc(n, r);
        }), this.deleteByPath(this.cache, r);
    }
  }]), e;
}();
D(In, "MAX_CACHE_SIZE", 20);
D(In, "MAX_CACHE_OFFSET", 5);
var co = 0, fa = /* @__PURE__ */ function() {
  function e(t) {
    Ie(this, e), D(this, "derivatives", void 0), D(this, "id", void 0), this.derivatives = Array.isArray(t) ? t : [t], this.id = co, t.length === 0 && Rn(t.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), co += 1;
  }
  return Le(e, [{
    key: "getDerivativeToken",
    value: function(r) {
      return this.derivatives.reduce(function(n, o) {
        return o(r, n);
      }, void 0);
    }
  }]), e;
}(), wr = new In();
function Ur(e) {
  var t = Array.isArray(e) ? e : [e];
  return wr.has(t) || wr.set(t, new fa(t)), wr.get(t);
}
var Tc = /* @__PURE__ */ new WeakMap(), Or = {};
function Ac(e, t) {
  for (var r = Tc, n = 0; n < t.length; n += 1) {
    var o = t[n];
    r.has(o) || r.set(o, /* @__PURE__ */ new WeakMap()), r = r.get(o);
  }
  return r.has(Or) || r.set(Or, e()), r.get(Or);
}
var so = /* @__PURE__ */ new WeakMap();
function wt(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = so.get(e) || "";
  return r || (Object.keys(e).forEach(function(n) {
    var o = e[n];
    r += n, o instanceof fa ? r += o.id : o && K(o) === "object" ? r += wt(o, t) : r += o;
  }), t && (r = Tt(r)), so.set(e, r)), r;
}
function lo(e, t) {
  return Tt("".concat(t, "_").concat(wt(e, !0)));
}
var Xr = Ne();
function Ge(e) {
  return typeof e == "number" ? "".concat(e, "px") : e;
}
function nr(e, t, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (o)
    return e;
  var a = L(L({}, n), {}, D(D({}, dt, t), be, r)), i = Object.keys(a).map(function(c) {
    var l = a[c];
    return l ? "".concat(c, '="').concat(l, '"') : null;
  }).filter(function(c) {
    return c;
  }).join(" ");
  return "<style ".concat(i, ">").concat(e, "</style>");
}
var Kt = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(r ? "".concat(r, "-") : "").concat(t).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, Pc = function(t, r, n) {
  return Object.keys(t).length ? ".".concat(r).concat(n != null && n.scope ? ".".concat(n.scope) : "", "{").concat(Object.entries(t).map(function(o) {
    var a = F(o, 2), i = a[0], c = a[1];
    return "".concat(i, ":").concat(c, ";");
  }).join(""), "}") : "";
}, da = function(t, r, n) {
  var o = {}, a = {};
  return Object.entries(t).forEach(function(i) {
    var c, l, s = F(i, 2), u = s[0], f = s[1];
    if (n != null && (c = n.preserve) !== null && c !== void 0 && c[u])
      a[u] = f;
    else if ((typeof f == "string" || typeof f == "number") && !(n != null && (l = n.ignore) !== null && l !== void 0 && l[u])) {
      var d, g = Kt(u, n == null ? void 0 : n.prefix);
      o[g] = typeof f == "number" && !(n != null && (d = n.unitless) !== null && d !== void 0 && d[u]) ? "".concat(f, "px") : String(f), a[u] = "var(".concat(g, ")");
    }
  }), [a, Pc(o, r, {
    scope: n == null ? void 0 : n.scope
  })];
}, uo = process.env.NODE_ENV !== "test" && Ne() ? h.useLayoutEffect : h.useEffect, _c = function(t, r) {
  var n = h.useRef(!0);
  uo(function() {
    return t(n.current);
  }, r), uo(function() {
    return n.current = !1, function() {
      n.current = !0;
    };
  }, []);
}, Rc = L({}, h), fo = Rc.useInsertionEffect, $c = function(t, r, n) {
  h.useMemo(t, n), _c(function() {
    return r(!0);
  }, n);
}, Mc = fo ? function(e, t, r) {
  return fo(function() {
    return e(), t();
  }, r);
} : $c;
const jc = Mc;
var Ic = L({}, h), Lc = Ic.useInsertionEffect, Nc = function(t) {
  var r = [], n = !1;
  function o(a) {
    if (n) {
      process.env.NODE_ENV !== "production" && Rn(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
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
}, kc = function() {
  return function(t) {
    t();
  };
}, Bc = typeof Lc < "u" ? Nc : kc;
const Hc = Bc;
function Dc() {
  return !1;
}
var qr = !1;
function zc() {
  return qr;
}
const Fc = process.env.NODE_ENV === "production" ? Dc : zc;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var Tr = window;
  if (typeof Tr.webpackHotUpdate == "function") {
    var Vc = Tr.webpackHotUpdate;
    Tr.webpackHotUpdate = function() {
      return qr = !0, setTimeout(function() {
        qr = !1;
      }, 0), Vc.apply(void 0, arguments);
    };
  }
}
function Ln(e, t, r, n, o) {
  var a = h.useContext(vr), i = a.cache, c = [e].concat(Me(t)), l = Gr(c), s = Hc([l]), u = Fc(), f = function(m) {
    i.opUpdate(l, function(p) {
      var A = p || [void 0, void 0], E = F(A, 2), R = E[0], _ = R === void 0 ? 0 : R, w = E[1], O = w;
      process.env.NODE_ENV !== "production" && w && u && (n == null || n(O, u), O = null);
      var S = O || r(), P = [_, S];
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
  process.env.NODE_ENV !== "production" && !d && (f(), d = i.opGet(l));
  var g = d[1];
  return jc(function() {
    o == null || o(g);
  }, function(C) {
    return f(function(m) {
      var p = F(m, 2), A = p[0], E = p[1];
      return C && A === 0 && (o == null || o(g)), [A + 1, E];
    }), function() {
      i.opUpdate(l, function(m) {
        var p = m || [], A = F(p, 2), E = A[0], R = E === void 0 ? 0 : E, _ = A[1], w = R - 1;
        return w === 0 ? (s(function() {
          (C || !i.opGet(l)) && (n == null || n(_, !1));
        }), null) : [R - 1, _];
      });
    };
  }, [l]), g;
}
var Wc = {}, Gc = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", Ye = /* @__PURE__ */ new Map();
function Uc(e) {
  Ye.set(e, (Ye.get(e) || 0) + 1);
}
function Xc(e, t) {
  if (typeof document < "u") {
    var r = document.querySelectorAll("style[".concat(dt, '="').concat(e, '"]'));
    r.forEach(function(n) {
      if (n[Fe] === t) {
        var o;
        (o = n.parentNode) === null || o === void 0 || o.removeChild(n);
      }
    });
  }
}
var qc = 0;
function Kc(e, t) {
  Ye.set(e, (Ye.get(e) || 0) - 1);
  var r = Array.from(Ye.keys()), n = r.filter(function(o) {
    var a = Ye.get(o) || 0;
    return a <= 0;
  });
  r.length - n.length > qc && n.forEach(function(o) {
    Xc(o, t), Ye.delete(o);
  });
}
var Yc = function(t, r, n, o) {
  var a = n.getDerivativeToken(t), i = L(L({}, a), r);
  return o && (i = o(i)), i;
}, pa = "token";
function Qc(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = xe(vr), o = n.cache.instanceId, a = n.container, i = r.salt, c = i === void 0 ? "" : i, l = r.override, s = l === void 0 ? Wc : l, u = r.formatToken, f = r.getComputedToken, d = r.cssVar, g = Ac(function() {
    return Object.assign.apply(Object, [{}].concat(Me(t)));
  }, t), C = wt(g), m = wt(s), p = d ? wt(d) : "", A = Ln(pa, [c, e.id, C, m, p], function() {
    var E, R = f ? f(g, s, e) : Yc(g, s, e, u), _ = L({}, R), w = "";
    if (d) {
      var O = da(R, d.key, {
        prefix: d.prefix,
        ignore: d.ignore,
        unitless: d.unitless,
        preserve: d.preserve
      }), S = F(O, 2);
      R = S[0], w = S[1];
    }
    var P = lo(R, c);
    R._tokenKey = P, _._tokenKey = lo(_, c);
    var N = (E = d == null ? void 0 : d.key) !== null && E !== void 0 ? E : P;
    R._themeKey = N, Uc(N);
    var V = "".concat(Gc, "-").concat(Tt(P));
    return R._hashId = V, [R, V, _, w, (d == null ? void 0 : d.key) || ""];
  }, function(E) {
    Kc(E[0]._themeKey, o);
  }, function(E) {
    var R = F(E, 4), _ = R[0], w = R[3];
    if (d && w) {
      var O = tt(w, Tt("css-variables-".concat(_._themeKey)), {
        mark: be,
        prepend: "queue",
        attachTo: a,
        priority: -999
      });
      O[Fe] = o, O.setAttribute(dt, _._themeKey);
    }
  });
  return A;
}
var Zc = function(t, r, n) {
  var o = F(t, 5), a = o[2], i = o[3], c = o[4], l = n || {}, s = l.plain;
  if (!i)
    return null;
  var u = a._tokenKey, f = -999, d = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(f)
  }, g = nr(i, c, u, d, s);
  return [f, u, g];
}, Jc = {
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
}, va = "comm", ga = "rule", ha = "decl", es = "@import", ts = "@keyframes", rs = "@layer", ma = Math.abs, Nn = String.fromCharCode;
function ba(e) {
  return e.trim();
}
function Yt(e, t, r) {
  return e.replace(t, r);
}
function ns(e, t, r) {
  return e.indexOf(t, r);
}
function Pt(e, t) {
  return e.charCodeAt(t) | 0;
}
function _t(e, t, r) {
  return e.slice(t, r);
}
function $e(e) {
  return e.length;
}
function os(e) {
  return e.length;
}
function kt(e, t) {
  return t.push(e), e;
}
var gr = 1, pt = 1, ya = 0, de = 0, ee = 0, gt = "";
function kn(e, t, r, n, o, a, i, c) {
  return { value: e, root: t, parent: r, type: n, props: o, children: a, line: gr, column: pt, length: i, return: "", siblings: c };
}
function as() {
  return ee;
}
function is() {
  return ee = de > 0 ? Pt(gt, --de) : 0, pt--, ee === 10 && (pt = 1, gr--), ee;
}
function ye() {
  return ee = de < ya ? Pt(gt, de++) : 0, pt++, ee === 10 && (pt = 1, gr++), ee;
}
function rt() {
  return Pt(gt, de);
}
function Qt() {
  return de;
}
function hr(e, t) {
  return _t(gt, e, t);
}
function Kr(e) {
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
function cs(e) {
  return gr = pt = 1, ya = $e(gt = e), de = 0, [];
}
function ss(e) {
  return gt = "", e;
}
function Ar(e) {
  return ba(hr(de - 1, Yr(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function ls(e) {
  for (; (ee = rt()) && ee < 33; )
    ye();
  return Kr(e) > 2 || Kr(ee) > 3 ? "" : " ";
}
function us(e, t) {
  for (; --t && ye() && !(ee < 48 || ee > 102 || ee > 57 && ee < 65 || ee > 70 && ee < 97); )
    ;
  return hr(e, Qt() + (t < 6 && rt() == 32 && ye() == 32));
}
function Yr(e) {
  for (; ye(); )
    switch (ee) {
      case e:
        return de;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Yr(ee);
        break;
      case 40:
        e === 41 && Yr(e);
        break;
      case 92:
        ye();
        break;
    }
  return de;
}
function fs(e, t) {
  for (; ye() && e + ee !== 57; )
    if (e + ee === 84 && rt() === 47)
      break;
  return "/*" + hr(t, de - 1) + "*" + Nn(e === 47 ? e : ye());
}
function ds(e) {
  for (; !Kr(rt()); )
    ye();
  return hr(e, de);
}
function ps(e) {
  return ss(Zt("", null, null, null, [""], e = cs(e), 0, [0], e));
}
function Zt(e, t, r, n, o, a, i, c, l) {
  for (var s = 0, u = 0, f = i, d = 0, g = 0, C = 0, m = 1, p = 1, A = 1, E = 0, R = "", _ = o, w = a, O = n, S = R; p; )
    switch (C = E, E = ye()) {
      case 40:
        if (C != 108 && Pt(S, f - 1) == 58) {
          ns(S += Yt(Ar(E), "&", "&\f"), "&\f", ma(s ? c[s - 1] : 0)) != -1 && (A = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        S += Ar(E);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        S += ls(C);
        break;
      case 92:
        S += us(Qt() - 1, 7);
        continue;
      case 47:
        switch (rt()) {
          case 42:
          case 47:
            kt(vs(fs(ye(), Qt()), t, r, l), l);
            break;
          default:
            S += "/";
        }
        break;
      case 123 * m:
        c[s++] = $e(S) * A;
      case 125 * m:
      case 59:
      case 0:
        switch (E) {
          case 0:
          case 125:
            p = 0;
          case 59 + u:
            A == -1 && (S = Yt(S, /\f/g, "")), g > 0 && $e(S) - f && kt(g > 32 ? vo(S + ";", n, r, f - 1, l) : vo(Yt(S, " ", "") + ";", n, r, f - 2, l), l);
            break;
          case 59:
            S += ";";
          default:
            if (kt(O = po(S, t, r, s, u, o, c, R, _ = [], w = [], f, a), a), E === 123)
              if (u === 0)
                Zt(S, t, O, O, _, a, f, c, w);
              else
                switch (d === 99 && Pt(S, 3) === 110 ? 100 : d) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Zt(e, O, O, n && kt(po(e, O, O, 0, 0, o, c, R, o, _ = [], f, w), w), o, w, f, c, n ? _ : w);
                    break;
                  default:
                    Zt(S, O, O, O, [""], w, 0, c, w);
                }
        }
        s = u = g = 0, m = A = 1, R = S = "", f = i;
        break;
      case 58:
        f = 1 + $e(S), g = C;
      default:
        if (m < 1) {
          if (E == 123)
            --m;
          else if (E == 125 && m++ == 0 && is() == 125)
            continue;
        }
        switch (S += Nn(E), E * m) {
          case 38:
            A = u > 0 ? 1 : (S += "\f", -1);
            break;
          case 44:
            c[s++] = ($e(S) - 1) * A, A = 1;
            break;
          case 64:
            rt() === 45 && (S += Ar(ye())), d = rt(), u = f = $e(R = S += ds(Qt())), E++;
            break;
          case 45:
            C === 45 && $e(S) == 2 && (m = 0);
        }
    }
  return a;
}
function po(e, t, r, n, o, a, i, c, l, s, u, f) {
  for (var d = o - 1, g = o === 0 ? a : [""], C = os(g), m = 0, p = 0, A = 0; m < n; ++m)
    for (var E = 0, R = _t(e, d + 1, d = ma(p = i[m])), _ = e; E < C; ++E)
      (_ = ba(p > 0 ? g[E] + " " + R : Yt(R, /&\f/g, g[E]))) && (l[A++] = _);
  return kn(e, t, r, o === 0 ? ga : c, l, s, u, f);
}
function vs(e, t, r, n) {
  return kn(e, t, r, va, Nn(as()), _t(e, 2, -2), 0, n);
}
function vo(e, t, r, n, o) {
  return kn(e, t, r, ha, _t(e, 0, n), _t(e, n + 1, -1), n, o);
}
function Qr(e, t) {
  for (var r = "", n = 0; n < e.length; n++)
    r += t(e[n], n, e, t) || "";
  return r;
}
function gs(e, t, r, n) {
  switch (e.type) {
    case rs:
      if (e.children.length) break;
    case es:
    case ha:
      return e.return = e.return || e.value;
    case va:
      return "";
    case ts:
      return e.return = e.value + "{" + Qr(e.children, n) + "}";
    case ga:
      if (!$e(e.value = e.props.join(","))) return "";
  }
  return $e(r = Qr(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function Sa(e, t) {
  var r = t.path, n = t.parentSelectors;
  Ue(!1, "[Ant Design CSS-in-JS] ".concat(r ? "Error in ".concat(r, ": ") : "").concat(e).concat(n.length ? " Selector: ".concat(n.join(" | ")) : ""));
}
var hs = function(t, r, n) {
  if (t === "content") {
    var o = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, a = ["normal", "none", "initial", "inherit", "unset"];
    (typeof r != "string" || a.indexOf(r) === -1 && !o.test(r) && (r.charAt(0) !== r.charAt(r.length - 1) || r.charAt(0) !== '"' && r.charAt(0) !== "'")) && Sa("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(r, "\"'`."), n);
  }
}, ms = function(t, r, n) {
  t === "animation" && n.hashId && r !== "none" && Sa("You seem to be using hashed animation '".concat(r, "', in which case 'animationName' with Keyframe as value is recommended."), n);
}, go = "data-ant-cssinjs-cache-path", Ca = "_FILE_STYLE__", nt, Ea = !0;
function bs() {
  if (!nt && (nt = {}, Ne())) {
    var e = document.createElement("div");
    e.className = go, e.style.position = "fixed", e.style.visibility = "hidden", e.style.top = "-9999px", document.body.appendChild(e);
    var t = getComputedStyle(e).content || "";
    t = t.replace(/^"/, "").replace(/"$/, ""), t.split(";").forEach(function(o) {
      var a = o.split(":"), i = F(a, 2), c = i[0], l = i[1];
      nt[c] = l;
    });
    var r = document.querySelector("style[".concat(go, "]"));
    if (r) {
      var n;
      Ea = !1, (n = r.parentNode) === null || n === void 0 || n.removeChild(r);
    }
    document.body.removeChild(e);
  }
}
function ys(e) {
  return bs(), !!nt[e];
}
function Ss(e) {
  var t = nt[e], r = null;
  if (t && Ne())
    if (Ea)
      r = Ca;
    else {
      var n = document.querySelector("style[".concat(be, '="').concat(nt[e], '"]'));
      n ? r = n.innerHTML : delete nt[e];
    }
  return [r, t];
}
var xa = "_skip_check_", wa = "_multi_value_";
function Jt(e) {
  var t = Qr(ps(e), gs);
  return t.replace(/\{%%%\:[^;];}/g, ";");
}
function Cs(e) {
  return K(e) === "object" && e && (xa in e || wa in e);
}
function Es(e, t, r) {
  if (!t)
    return e;
  var n = ".".concat(t), o = r === "low" ? ":where(".concat(n, ")") : n, a = e.split(",").map(function(i) {
    var c, l = i.trim().split(/\s+/), s = l[0] || "", u = ((c = s.match(/^\w+/)) === null || c === void 0 ? void 0 : c[0]) || "";
    return s = "".concat(u).concat(o).concat(s.slice(u.length)), [s].concat(Me(l.slice(1))).join(" ");
  });
  return a.join(",");
}
var xs = function e(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, o = n.root, a = n.injectHash, i = n.parentSelectors, c = r.hashId, l = r.layer, s = r.path, u = r.hashPriority, f = r.transformers, d = f === void 0 ? [] : f, g = r.linters, C = g === void 0 ? [] : g, m = "", p = {};
  function A(_) {
    var w = _.getName(c);
    if (!p[w]) {
      var O = e(_.style, r, {
        root: !1,
        parentSelectors: i
      }), S = F(O, 1), P = S[0];
      p[w] = "@keyframes ".concat(_.getName(c)).concat(P);
    }
  }
  function E(_) {
    var w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return _.forEach(function(O) {
      Array.isArray(O) ? E(O, w) : O && w.push(O);
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
      var O = d.reduce(function(S, P) {
        var N;
        return (P == null || (N = P.visit) === null || N === void 0 ? void 0 : N.call(P, S)) || S;
      }, w);
      Object.keys(O).forEach(function(S) {
        var P = O[S];
        if (K(P) === "object" && P && (S !== "animationName" || !P._keyframe) && !Cs(P)) {
          var N = !1, V = S.trim(), G = !1;
          (o || a) && c ? V.startsWith("@") ? N = !0 : V = Es(S, c, u) : o && !c && (V === "&" || V === "") && (V = "", G = !0);
          var H = e(P, r, {
            root: G,
            injectHash: N,
            parentSelectors: [].concat(Me(i), [V])
          }), k = F(H, 2), j = k[0], W = k[1];
          p = L(L({}, p), W), m += "".concat(V).concat(j);
        } else {
          let b = function(x, $) {
            process.env.NODE_ENV !== "production" && (K(P) !== "object" || !(P != null && P[xa])) && [hs, ms].concat(Me(C)).forEach(function(B) {
              return B(x, $, {
                path: s,
                hashId: c,
                parentSelectors: i
              });
            });
            var T = x.replace(/[A-Z]/g, function(B) {
              return "-".concat(B.toLowerCase());
            }), I = $;
            !Jc[x] && typeof I == "number" && I !== 0 && (I = "".concat(I, "px")), x === "animationName" && $ !== null && $ !== void 0 && $._keyframe && (A($), I = $.getName(c)), m += "".concat(T, ":").concat(I, ";");
          };
          var y, v = (y = P == null ? void 0 : P.value) !== null && y !== void 0 ? y : P;
          K(P) === "object" && P !== null && P !== void 0 && P[wa] && Array.isArray(v) ? v.forEach(function(x) {
            b(S, x);
          }) : b(S, v);
        }
      });
    }
  }), o ? l && (m = "@layer ".concat(l.name, " {").concat(m, "}"), l.dependencies && (p["@layer ".concat(l.name)] = l.dependencies.map(function(_) {
    return "@layer ".concat(_, ", ").concat(l.name, ";");
  }).join(`
`))) : m = "{".concat(m, "}"), [m, p];
};
function Oa(e, t) {
  return Tt("".concat(e.join("%")).concat(t));
}
function ws() {
  return null;
}
var Ta = "style";
function Zr(e, t) {
  var r = e.token, n = e.path, o = e.hashId, a = e.layer, i = e.nonce, c = e.clientOnly, l = e.order, s = l === void 0 ? 0 : l, u = h.useContext(vr), f = u.autoClear, d = u.mock, g = u.defaultCache, C = u.hashPriority, m = u.container, p = u.ssrInline, A = u.transformers, E = u.linters, R = u.cache, _ = u.layer, w = r._tokenKey, O = [w];
  _ && O.push("layer"), O.push.apply(O, Me(n));
  var S = Xr;
  process.env.NODE_ENV !== "production" && d !== void 0 && (S = d === "client");
  var P = Ln(
    Ta,
    O,
    // Create cache if needed
    function() {
      var k = O.join("|");
      if (ys(k)) {
        var j = Ss(k), W = F(j, 2), y = W[0], v = W[1];
        if (y)
          return [y, w, v, {}, c, s];
      }
      var b = t(), x = xs(b, {
        hashId: o,
        hashPriority: C,
        layer: _ ? a : void 0,
        path: n.join("-"),
        transformers: A,
        linters: E
      }), $ = F(x, 2), T = $[0], I = $[1], B = Jt(T), q = Oa(O, B);
      return [B, w, q, I, c, s];
    },
    // Remove cache if no need
    function(k, j) {
      var W = F(k, 3), y = W[2];
      (j || f) && Xr && sa(y, {
        mark: be
      });
    },
    // Effect: Inject style here
    function(k) {
      var j = F(k, 4), W = j[0];
      j[1];
      var y = j[2], v = j[3];
      if (S && W !== Ca) {
        var b = {
          mark: be,
          prepend: _ ? !1 : "queue",
          attachTo: m,
          priority: s
        }, x = typeof i == "function" ? i() : i;
        x && (b.csp = {
          nonce: x
        });
        var $ = [], T = [];
        Object.keys(v).forEach(function(B) {
          B.startsWith("@layer") ? $.push(B) : T.push(B);
        }), $.forEach(function(B) {
          tt(Jt(v[B]), "_layer-".concat(B), L(L({}, b), {}, {
            prepend: !0
          }));
        });
        var I = tt(W, y, b);
        I[Fe] = R.instanceId, I.setAttribute(dt, w), process.env.NODE_ENV !== "production" && I.setAttribute(bc, O.join("|")), T.forEach(function(B) {
          tt(Jt(v[B]), "_effect-".concat(B), b);
        });
      }
    }
  ), N = F(P, 3), V = N[0], G = N[1], H = N[2];
  return function(k) {
    var j;
    return !p || S || !g ? j = /* @__PURE__ */ h.createElement(ws, null) : j = /* @__PURE__ */ h.createElement("style", ft({}, D(D({}, dt, G), be, H), {
      dangerouslySetInnerHTML: {
        __html: V
      }
    })), /* @__PURE__ */ h.createElement(h.Fragment, null, j, k);
  };
}
var Os = function(t, r, n) {
  var o = F(t, 6), a = o[0], i = o[1], c = o[2], l = o[3], s = o[4], u = o[5], f = n || {}, d = f.plain;
  if (s)
    return null;
  var g = a, C = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  };
  return g = nr(a, i, c, C, d), l && Object.keys(l).forEach(function(m) {
    if (!r[m]) {
      r[m] = !0;
      var p = Jt(l[m]), A = nr(p, i, "_effect-".concat(m), C, d);
      m.startsWith("@layer") ? g = A + g : g += A;
    }
  }), [u, c, g];
}, Aa = "cssVar", Ts = function(t, r) {
  var n = t.key, o = t.prefix, a = t.unitless, i = t.ignore, c = t.token, l = t.scope, s = l === void 0 ? "" : l, u = xe(vr), f = u.cache.instanceId, d = u.container, g = c._tokenKey, C = [].concat(Me(t.path), [n, s, g]), m = Ln(Aa, C, function() {
    var p = r(), A = da(p, n, {
      prefix: o,
      unitless: a,
      ignore: i,
      scope: s
    }), E = F(A, 2), R = E[0], _ = E[1], w = Oa(C, _);
    return [R, _, w, n];
  }, function(p) {
    var A = F(p, 3), E = A[2];
    Xr && sa(E, {
      mark: be
    });
  }, function(p) {
    var A = F(p, 3), E = A[1], R = A[2];
    if (E) {
      var _ = tt(E, R, {
        mark: be,
        prepend: "queue",
        attachTo: d,
        priority: -999
      });
      _[Fe] = f, _.setAttribute(dt, n);
    }
  });
  return m;
}, As = function(t, r, n) {
  var o = F(t, 4), a = o[1], i = o[2], c = o[3], l = n || {}, s = l.plain;
  if (!a)
    return null;
  var u = -999, f = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  }, d = nr(a, c, i, f, s);
  return [u, i, d];
};
D(D(D({}, Ta, Os), pa, Zc), Aa, As);
function ct(e) {
  return e.notSplit = !0, e;
}
ct(["borderTop", "borderBottom"]), ct(["borderTop"]), ct(["borderBottom"]), ct(["borderLeft", "borderRight"]), ct(["borderLeft"]), ct(["borderRight"]);
var Bn = /* @__PURE__ */ Pn({});
function Ps(e) {
  return na(e) || Jo(e) || Mn(e) || oa();
}
function Jr(e, t) {
  for (var r = e, n = 0; n < t.length; n += 1) {
    if (r == null)
      return;
    r = r[t[n]];
  }
  return r;
}
function Pa(e, t, r, n) {
  if (!t.length)
    return r;
  var o = Ps(t), a = o[0], i = o.slice(1), c;
  return !e && typeof a == "number" ? c = [] : Array.isArray(e) ? c = Me(e) : c = L({}, e), n && r === void 0 && i.length === 1 ? delete c[a][i[0]] : c[a] = Pa(c[a], i, r, n), c;
}
function Pr(e, t, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && n && r === void 0 && !Jr(e, t.slice(0, -1)) ? e : Pa(e, t, r, n);
}
function _s(e) {
  return K(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function ho(e) {
  return Array.isArray(e) ? [] : {};
}
var Rs = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function $s() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = ho(t[0]);
  return t.forEach(function(o) {
    function a(i, c) {
      var l = new Set(c), s = Jr(o, i), u = Array.isArray(s);
      if (u || _s(s)) {
        if (!l.has(s)) {
          l.add(s);
          var f = Jr(n, i);
          u ? n = Pr(n, i, []) : (!f || K(f) !== "object") && (n = Pr(n, i, ho(s))), Rs(s).forEach(function(d) {
            a([].concat(Me(i), [d]), l);
          });
        }
      } else
        n = Pr(n, i, s);
    }
    a([]);
  }), n;
}
function _a() {
}
let Re = null;
function Ms() {
  Re = null, Uo();
}
let Hn = _a;
process.env.NODE_ENV !== "production" && (Hn = (e, t, r) => {
  Ue(e, `[antd: ${t}] ${r}`), process.env.NODE_ENV === "test" && Ms();
});
const Ra = /* @__PURE__ */ h.createContext({}), ht = process.env.NODE_ENV !== "production" ? (e) => {
  const {
    strict: t
  } = h.useContext(Ra), r = (n, o, a) => {
    if (!n)
      if (t === !1 && o === "deprecated") {
        const i = Re;
        Re || (Re = {}), Re[e] = Re[e] || [], Re[e].includes(a || "") || Re[e].push(a || ""), i || console.warn("[antd] There exists deprecated usage in your code:", Re);
      } else
        process.env.NODE_ENV !== "production" && Hn(n, e, a);
  };
  return r.deprecated = (n, o, a, i) => {
    r(n, "deprecated", `\`${o}\` is deprecated. Please use \`${a}\` instead.${i ? ` ${i}` : ""}`);
  }, r;
} : () => {
  const e = () => {
  };
  return e.deprecated = _a, e;
}, mr = Hn, js = /* @__PURE__ */ Pn(void 0);
var Is = {
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
}, Ls = {
  yearFormat: "YYYY",
  dayFormat: "D",
  cellMeridiemFormat: "A",
  monthBeforeYear: !0
}, Ns = L(L({}, Ls), {}, {
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
const $a = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
}, mo = {
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
  }, Ns),
  timePickerLocale: Object.assign({}, $a)
}, le = "${label} is not a valid ${type}", br = {
  locale: "en",
  Pagination: Is,
  DatePicker: mo,
  TimePicker: $a,
  Calendar: mo,
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
        hex: le
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
Object.assign({}, br.Modal);
let er = [];
const bo = () => er.reduce((e, t) => Object.assign(Object.assign({}, e), t), br.Modal);
function ks(e) {
  if (e) {
    const t = Object.assign({}, e);
    return er.push(t), bo(), () => {
      er = er.filter((r) => r !== t), bo();
    };
  }
  Object.assign({}, br.Modal);
}
const Ma = /* @__PURE__ */ Pn(void 0), ja = "internalMark", Ia = (e) => {
  const {
    locale: t = {},
    children: r,
    _ANT_MARK__: n
  } = e;
  if (process.env.NODE_ENV !== "production") {
    const a = ht("LocaleProvider");
    process.env.NODE_ENV !== "production" && a(n === ja, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  h.useEffect(() => ks(t == null ? void 0 : t.Modal), [t]);
  const o = h.useMemo(() => Object.assign(Object.assign({}, t), {
    exist: !0
  }), [t]);
  return /* @__PURE__ */ h.createElement(Ma.Provider, {
    value: o
  }, r);
};
process.env.NODE_ENV !== "production" && (Ia.displayName = "LocaleProvider");
function ie(e, t) {
  Bs(e) && (e = "100%");
  var r = Hs(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), r && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function Bt(e) {
  return Math.min(1, Math.max(0, e));
}
function Bs(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function Hs(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function La(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function Ht(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function Qe(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function Ds(e, t, r) {
  return {
    r: ie(e, 255) * 255,
    g: ie(t, 255) * 255,
    b: ie(r, 255) * 255
  };
}
function yo(e, t, r) {
  e = ie(e, 255), t = ie(t, 255), r = ie(r, 255);
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
function _r(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * (6 * r) : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function zs(e, t, r) {
  var n, o, a;
  if (e = ie(e, 360), t = ie(t, 100), r = ie(r, 100), t === 0)
    o = r, a = r, n = r;
  else {
    var i = r < 0.5 ? r * (1 + t) : r + t - r * t, c = 2 * r - i;
    n = _r(c, i, e + 1 / 3), o = _r(c, i, e), a = _r(c, i, e - 1 / 3);
  }
  return { r: n * 255, g: o * 255, b: a * 255 };
}
function en(e, t, r) {
  e = ie(e, 255), t = ie(t, 255), r = ie(r, 255);
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
function Fs(e, t, r) {
  e = ie(e, 360) * 6, t = ie(t, 100), r = ie(r, 100);
  var n = Math.floor(e), o = e - n, a = r * (1 - t), i = r * (1 - o * t), c = r * (1 - (1 - o) * t), l = n % 6, s = [r, i, a, a, c, r][l], u = [c, r, r, i, a, a][l], f = [a, a, c, r, r, i][l];
  return { r: s * 255, g: u * 255, b: f * 255 };
}
function tn(e, t, r, n) {
  var o = [
    Qe(Math.round(e).toString(16)),
    Qe(Math.round(t).toString(16)),
    Qe(Math.round(r).toString(16))
  ];
  return n && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) : o.join("");
}
function Vs(e, t, r, n, o) {
  var a = [
    Qe(Math.round(e).toString(16)),
    Qe(Math.round(t).toString(16)),
    Qe(Math.round(r).toString(16)),
    Qe(Ws(n))
  ];
  return o && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) && a[3].startsWith(a[3].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) + a[3].charAt(0) : a.join("");
}
function Ws(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function So(e) {
  return ue(e) / 255;
}
function ue(e) {
  return parseInt(e, 16);
}
function Gs(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var rn = {
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
function st(e) {
  var t = { r: 0, g: 0, b: 0 }, r = 1, n = null, o = null, a = null, i = !1, c = !1;
  return typeof e == "string" && (e = qs(e)), typeof e == "object" && (Pe(e.r) && Pe(e.g) && Pe(e.b) ? (t = Ds(e.r, e.g, e.b), i = !0, c = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : Pe(e.h) && Pe(e.s) && Pe(e.v) ? (n = Ht(e.s), o = Ht(e.v), t = Fs(e.h, n, o), i = !0, c = "hsv") : Pe(e.h) && Pe(e.s) && Pe(e.l) && (n = Ht(e.s), a = Ht(e.l), t = zs(e.h, n, a), i = !0, c = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (r = e.a)), r = La(r), {
    ok: i,
    format: e.format || c,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: r
  };
}
var Us = "[-\\+]?\\d+%?", Xs = "[-\\+]?\\d*\\.\\d+%?", Ve = "(?:".concat(Xs, ")|(?:").concat(Us, ")"), Rr = "[\\s|\\(]+(".concat(Ve, ")[,|\\s]+(").concat(Ve, ")[,|\\s]+(").concat(Ve, ")\\s*\\)?"), $r = "[\\s|\\(]+(".concat(Ve, ")[,|\\s]+(").concat(Ve, ")[,|\\s]+(").concat(Ve, ")[,|\\s]+(").concat(Ve, ")\\s*\\)?"), ge = {
  CSS_UNIT: new RegExp(Ve),
  rgb: new RegExp("rgb" + Rr),
  rgba: new RegExp("rgba" + $r),
  hsl: new RegExp("hsl" + Rr),
  hsla: new RegExp("hsla" + $r),
  hsv: new RegExp("hsv" + Rr),
  hsva: new RegExp("hsva" + $r),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function qs(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (rn[e])
    e = rn[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var r = ge.rgb.exec(e);
  return r ? { r: r[1], g: r[2], b: r[3] } : (r = ge.rgba.exec(e), r ? { r: r[1], g: r[2], b: r[3], a: r[4] } : (r = ge.hsl.exec(e), r ? { h: r[1], s: r[2], l: r[3] } : (r = ge.hsla.exec(e), r ? { h: r[1], s: r[2], l: r[3], a: r[4] } : (r = ge.hsv.exec(e), r ? { h: r[1], s: r[2], v: r[3] } : (r = ge.hsva.exec(e), r ? { h: r[1], s: r[2], v: r[3], a: r[4] } : (r = ge.hex8.exec(e), r ? {
    r: ue(r[1]),
    g: ue(r[2]),
    b: ue(r[3]),
    a: So(r[4]),
    format: t ? "name" : "hex8"
  } : (r = ge.hex6.exec(e), r ? {
    r: ue(r[1]),
    g: ue(r[2]),
    b: ue(r[3]),
    format: t ? "name" : "hex"
  } : (r = ge.hex4.exec(e), r ? {
    r: ue(r[1] + r[1]),
    g: ue(r[2] + r[2]),
    b: ue(r[3] + r[3]),
    a: So(r[4] + r[4]),
    format: t ? "name" : "hex8"
  } : (r = ge.hex3.exec(e), r ? {
    r: ue(r[1] + r[1]),
    g: ue(r[2] + r[2]),
    b: ue(r[3] + r[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function Pe(e) {
  return !!ge.CSS_UNIT.exec(String(e));
}
var fe = (
  /** @class */
  function() {
    function e(t, r) {
      t === void 0 && (t = ""), r === void 0 && (r = {});
      var n;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = Gs(t)), this.originalInput = t;
      var o = st(t);
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
      return this.a = La(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = en(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = en(this.r, this.g, this.b), r = Math.round(t.h * 360), n = Math.round(t.s * 100), o = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(r, ", ").concat(n, "%, ").concat(o, "%)") : "hsva(".concat(r, ", ").concat(n, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = yo(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = yo(this.r, this.g, this.b), r = Math.round(t.h * 360), n = Math.round(t.s * 100), o = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(r, ", ").concat(n, "%, ").concat(o, "%)") : "hsla(".concat(r, ", ").concat(n, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), tn(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), Vs(this.r, this.g, this.b, this.a, t);
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
        return "".concat(Math.round(ie(r, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(r) {
        return Math.round(ie(r, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + tn(this.r, this.g, this.b, !1), r = 0, n = Object.entries(rn); r < n.length; r++) {
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
      return r.l += t / 100, r.l = Bt(r.l), new e(r);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var r = this.toRgb();
      return r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(t / 100)))), r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(t / 100)))), r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(t / 100)))), new e(r);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.l -= t / 100, r.l = Bt(r.l), new e(r);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.s -= t / 100, r.s = Bt(r.s), new e(r);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.s += t / 100, r.s = Bt(r.s), new e(r);
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
), Dt = 2, Co = 0.16, Ks = 0.05, Ys = 0.05, Qs = 0.15, Na = 5, ka = 4, Zs = [{
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
function Eo(e) {
  var t = e.r, r = e.g, n = e.b, o = en(t, r, n);
  return {
    h: o.h * 360,
    s: o.s,
    v: o.v
  };
}
function zt(e) {
  var t = e.r, r = e.g, n = e.b;
  return "#".concat(tn(t, r, n, !1));
}
function Js(e, t, r) {
  var n = r / 100, o = {
    r: (t.r - e.r) * n + e.r,
    g: (t.g - e.g) * n + e.g,
    b: (t.b - e.b) * n + e.b
  };
  return o;
}
function xo(e, t, r) {
  var n;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? n = r ? Math.round(e.h) - Dt * t : Math.round(e.h) + Dt * t : n = r ? Math.round(e.h) + Dt * t : Math.round(e.h) - Dt * t, n < 0 ? n += 360 : n >= 360 && (n -= 360), n;
}
function wo(e, t, r) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var n;
  return r ? n = e.s - Co * t : t === ka ? n = e.s + Co : n = e.s + Ks * t, n > 1 && (n = 1), r && t === Na && n > 0.1 && (n = 0.1), n < 0.06 && (n = 0.06), Number(n.toFixed(2));
}
function Oo(e, t, r) {
  var n;
  return r ? n = e.v + Ys * t : n = e.v - Qs * t, n > 1 && (n = 1), Number(n.toFixed(2));
}
function Rt(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [], n = st(e), o = Na; o > 0; o -= 1) {
    var a = Eo(n), i = zt(st({
      h: xo(a, o, !0),
      s: wo(a, o, !0),
      v: Oo(a, o, !0)
    }));
    r.push(i);
  }
  r.push(zt(n));
  for (var c = 1; c <= ka; c += 1) {
    var l = Eo(n), s = zt(st({
      h: xo(l, c),
      s: wo(l, c),
      v: Oo(l, c)
    }));
    r.push(s);
  }
  return t.theme === "dark" ? Zs.map(function(u) {
    var f = u.index, d = u.opacity, g = zt(Js(st(t.backgroundColor || "#141414"), st(r[f]), d * 100));
    return g;
  }) : r;
}
var Mr = {
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
}, nn = ["#fff1f0", "#ffccc7", "#ffa39e", "#ff7875", "#ff4d4f", "#f5222d", "#cf1322", "#a8071a", "#820014", "#5c0011"];
nn.primary = nn[5];
var on = ["#fff2e8", "#ffd8bf", "#ffbb96", "#ff9c6e", "#ff7a45", "#fa541c", "#d4380d", "#ad2102", "#871400", "#610b00"];
on.primary = on[5];
var an = ["#fff7e6", "#ffe7ba", "#ffd591", "#ffc069", "#ffa940", "#fa8c16", "#d46b08", "#ad4e00", "#873800", "#612500"];
an.primary = an[5];
var cn = ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"];
cn.primary = cn[5];
var sn = ["#feffe6", "#ffffb8", "#fffb8f", "#fff566", "#ffec3d", "#fadb14", "#d4b106", "#ad8b00", "#876800", "#614700"];
sn.primary = sn[5];
var ln = ["#fcffe6", "#f4ffb8", "#eaff8f", "#d3f261", "#bae637", "#a0d911", "#7cb305", "#5b8c00", "#3f6600", "#254000"];
ln.primary = ln[5];
var un = ["#f6ffed", "#d9f7be", "#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d", "#237804", "#135200", "#092b00"];
un.primary = un[5];
var fn = ["#e6fffb", "#b5f5ec", "#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c", "#006d75", "#00474f", "#002329"];
fn.primary = fn[5];
var or = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
or.primary = or[5];
var dn = ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"];
dn.primary = dn[5];
var pn = ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
pn.primary = pn[5];
var vn = ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c0", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"];
vn.primary = vn[5];
var gn = ["#a6a6a6", "#999999", "#8c8c8c", "#808080", "#737373", "#666666", "#404040", "#1a1a1a", "#000000", "#000000"];
gn.primary = gn[5];
var jr = {
  red: nn,
  volcano: on,
  orange: an,
  gold: cn,
  yellow: sn,
  lime: ln,
  green: un,
  cyan: fn,
  blue: or,
  geekblue: dn,
  purple: pn,
  magenta: vn,
  grey: gn
};
const Ba = {
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
}, $t = Object.assign(Object.assign({}, Ba), {
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
function el(e, t) {
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
  } = e, f = r(l), d = r(o), g = r(a), C = r(i), m = r(c), p = n(s, u), A = e.colorLink || e.colorInfo, E = r(A);
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
    colorWhite: "#fff"
  });
}
const tl = (e) => {
  let t = e, r = e, n = e, o = e;
  return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? r = 4 : e < 8 && e >= 7 ? r = 5 : e < 14 && e >= 8 ? r = 6 : e < 16 && e >= 14 ? r = 7 : e >= 16 && (r = 8), e < 6 && e >= 2 ? n = 1 : e >= 6 && (n = 2), e > 4 && e < 8 ? o = 4 : e >= 8 && (o = 6), {
    borderRadius: e,
    borderRadiusXS: n,
    borderRadiusSM: r,
    borderRadiusLG: t,
    borderRadiusOuter: o
  };
};
function rl(e) {
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
  }, tl(n));
}
const nl = (e) => {
  const {
    controlHeight: t
  } = e;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  };
};
function tr(e) {
  return (e + 8) / e;
}
function ol(e) {
  const t = new Array(10).fill(null).map((r, n) => {
    const o = n - 1, a = e * Math.pow(Math.E, o / 5), i = n > 1 ? Math.floor(a) : Math.ceil(a);
    return Math.floor(i / 2) * 2;
  });
  return t[1] = e, t.map((r) => ({
    size: r,
    lineHeight: tr(r)
  }));
}
const al = (e) => {
  const t = ol(e), r = t.map((u) => u.size), n = t.map((u) => u.lineHeight), o = r[1], a = r[0], i = r[2], c = n[1], l = n[0], s = n[2];
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
function il(e) {
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
const _e = (e, t) => new fe(e).setAlpha(t).toRgbString(), xt = (e, t) => new fe(e).darken(t).toHexString(), cl = (e) => {
  const t = Rt(e);
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
}, sl = (e, t) => {
  const r = e || "#fff", n = t || "#000";
  return {
    colorBgBase: r,
    colorTextBase: n,
    colorText: _e(n, 0.88),
    colorTextSecondary: _e(n, 0.65),
    colorTextTertiary: _e(n, 0.45),
    colorTextQuaternary: _e(n, 0.25),
    colorFill: _e(n, 0.15),
    colorFillSecondary: _e(n, 0.06),
    colorFillTertiary: _e(n, 0.04),
    colorFillQuaternary: _e(n, 0.02),
    colorBgLayout: xt(r, 4),
    colorBgContainer: xt(r, 0),
    colorBgElevated: xt(r, 0),
    colorBgSpotlight: _e(n, 0.85),
    colorBgBlur: "transparent",
    colorBorder: xt(r, 15),
    colorBorderSecondary: xt(r, 6)
  };
};
function ll(e) {
  Mr.pink = Mr.magenta, jr.pink = jr.magenta;
  const t = Object.keys(Ba).map((r) => {
    const n = e[r] === Mr[r] ? jr[r] : Rt(e[r]);
    return new Array(10).fill(1).reduce((o, a, i) => (o[`${r}-${i + 1}`] = n[i], o[`${r}${i + 1}`] = n[i], o), {});
  }).reduce((r, n) => (r = Object.assign(Object.assign({}, r), n), r), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), el(e, {
    generateColorPalettes: cl,
    generateNeutralColorPalettes: sl
  })), al(e.fontSize)), il(e)), nl(e)), rl(e));
}
const Ha = Ur(ll), hn = {
  token: $t,
  override: {
    override: $t
  },
  hashed: !0
}, Da = /* @__PURE__ */ z.createContext(hn), ar = "ant", za = "anticon", ul = (e, t) => t || (e ? `${ar}-${e}` : ar), Xe = /* @__PURE__ */ h.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: ul,
  iconPrefixCls: za
}), fl = `-ant-${Date.now()}-${Math.random()}`;
function dl(e, t) {
  const r = {}, n = (i, c) => {
    let l = i.clone();
    return l = (c == null ? void 0 : c(l)) || l, l.toRgbString();
  }, o = (i, c) => {
    const l = new fe(i), s = Rt(l.toRgbString());
    r[`${c}-color`] = n(l), r[`${c}-color-disabled`] = s[1], r[`${c}-color-hover`] = s[4], r[`${c}-color-active`] = s[6], r[`${c}-color-outline`] = l.clone().setAlpha(0.2).toRgbString(), r[`${c}-color-deprecated-bg`] = s[0], r[`${c}-color-deprecated-border`] = s[2];
  };
  if (t.primaryColor) {
    o(t.primaryColor, "primary");
    const i = new fe(t.primaryColor), c = Rt(i.toRgbString());
    c.forEach((s, u) => {
      r[`primary-${u + 1}`] = s;
    }), r["primary-color-deprecated-l-35"] = n(i, (s) => s.lighten(35)), r["primary-color-deprecated-l-20"] = n(i, (s) => s.lighten(20)), r["primary-color-deprecated-t-20"] = n(i, (s) => s.tint(20)), r["primary-color-deprecated-t-50"] = n(i, (s) => s.tint(50)), r["primary-color-deprecated-f-12"] = n(i, (s) => s.setAlpha(s.getAlpha() * 0.12));
    const l = new fe(c[0]);
    r["primary-color-active-deprecated-f-30"] = n(l, (s) => s.setAlpha(s.getAlpha() * 0.3)), r["primary-color-active-deprecated-d-02"] = n(l, (s) => s.darken(2));
  }
  return t.successColor && o(t.successColor, "success"), t.warningColor && o(t.warningColor, "warning"), t.errorColor && o(t.errorColor, "error"), t.infoColor && o(t.infoColor, "info"), `
  :root {
    ${Object.keys(r).map((i) => `--${e}-${i}: ${r[i]};`).join(`
`)}
  }
  `.trim();
}
function pl(e, t) {
  const r = dl(e, t);
  Ne() ? tt(r, `${fl}-dynamic-theme`) : process.env.NODE_ENV !== "production" && mr(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const ir = /* @__PURE__ */ h.createContext(!1), vl = (e) => {
  let {
    children: t,
    disabled: r
  } = e;
  const n = h.useContext(ir);
  return /* @__PURE__ */ h.createElement(ir.Provider, {
    value: r ?? n
  }, t);
}, vt = /* @__PURE__ */ h.createContext(void 0), gl = (e) => {
  let {
    children: t,
    size: r
  } = e;
  const n = h.useContext(vt);
  return /* @__PURE__ */ h.createElement(vt.Provider, {
    value: r || n
  }, t);
};
function hl() {
  const e = xe(ir), t = xe(vt);
  return {
    componentDisabled: e,
    componentSize: t
  };
}
const ml = "5.19.2";
function Ir(e) {
  return e >= 0 && e <= 255;
}
function Ft(e, t) {
  const {
    r,
    g: n,
    b: o,
    a
  } = new fe(e).toRgb();
  if (a < 1)
    return e;
  const {
    r: i,
    g: c,
    b: l
  } = new fe(t).toRgb();
  for (let s = 0.01; s <= 1; s += 0.01) {
    const u = Math.round((r - i * (1 - s)) / s), f = Math.round((n - c * (1 - s)) / s), d = Math.round((o - l * (1 - s)) / s);
    if (Ir(u) && Ir(f) && Ir(d))
      return new fe({
        r: u,
        g: f,
        b: d,
        a: Math.round(s * 100) / 100
      }).toRgbString();
  }
  return new fe({
    r,
    g: n,
    b: o,
    a: 1
  }).toRgbString();
}
var bl = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
function Fa(e) {
  const {
    override: t
  } = e, r = bl(e, ["override"]), n = Object.assign({}, t);
  Object.keys($t).forEach((d) => {
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
    colorSplit: Ft(o.colorBorderSecondary, o.colorBgContainer),
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
    colorErrorOutline: Ft(o.colorErrorBg, o.colorBgContainer),
    colorWarningOutline: Ft(o.colorWarningBg, o.colorBgContainer),
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
    controlOutline: Ft(o.colorPrimaryBg, o.colorBgContainer),
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
    boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"
  }), n);
}
var To = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const Va = {
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
}, Wa = {
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
}, yl = {
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
}, Ga = (e, t, r) => {
  const n = r.getDerivativeToken(e), {
    override: o
  } = t, a = To(t, ["override"]);
  let i = Object.assign(Object.assign({}, n), {
    override: o
  });
  return i = Fa(i), a && Object.entries(a).forEach((c) => {
    let [l, s] = c;
    const {
      theme: u
    } = s, f = To(s, ["theme"]);
    let d = f;
    u && (d = Ga(Object.assign(Object.assign({}, i), f), {
      override: f
    }, u)), i[l] = d;
  }), i;
};
function ot() {
  const {
    token: e,
    hashed: t,
    theme: r,
    override: n,
    cssVar: o
  } = z.useContext(Da), a = `${ml}-${t || ""}`, i = r || Ha, [c, l, s] = Qc(i, [$t, e], {
    salt: a,
    override: n,
    getComputedToken: Ga,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: Fa,
    cssVar: o && {
      prefix: o.prefix,
      key: o.key,
      unitless: Va,
      ignore: Wa,
      preserve: yl
    }
  });
  return [i, s, t ? l : "", c, o];
}
function cr(e) {
  var t = h.useRef();
  t.current = e;
  var r = h.useCallback(function() {
    for (var n, o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return (n = t.current) === null || n === void 0 ? void 0 : n.call.apply(n, [t].concat(a));
  }, []);
  return r;
}
function mn(e) {
  var t = h.useRef(!1), r = h.useState(e), n = F(r, 2), o = n[0], a = n[1];
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
const Sl = 1e3 * 60 * 10;
let Cl = /* @__PURE__ */ function() {
  function e() {
    Ie(this, e), this.map = /* @__PURE__ */ new Map(), this.objectIDMap = /* @__PURE__ */ new WeakMap(), this.nextID = 0, this.lastAccessBeat = /* @__PURE__ */ new Map(), this.accessBeat = 0;
  }
  return Le(e, [{
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
          r - n > Sl && (this.map.delete(o), this.lastAccessBeat.delete(o));
        }), this.accessBeat = 0;
      }
    }
  }]);
}();
const Ao = new Cl();
function El(e, t) {
  return z.useMemo(() => {
    const r = Ao.get(t);
    if (r)
      return r;
    const n = e();
    return Ao.set(t, n), n;
  }, t);
}
const xl = () => ({
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
}), wl = (e) => ({
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
}), Ol = (e, t, r, n) => {
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
}, Tl = (e) => ({
  outline: `${Ge(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`,
  outlineOffset: 1,
  transition: "outline-offset 0s, outline 0s"
}), Al = (e) => ({
  "&:focus-visible": Object.assign({}, Tl(e))
});
function Pl(e) {
  return e === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
        r[n] = arguments[n];
      return `max(${r.map((o) => Ge(o)).join(",")})`;
    },
    min: function() {
      for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
        r[n] = arguments[n];
      return `min(${r.map((o) => Ge(o)).join(",")})`;
    }
  };
}
const Ua = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u";
let bn = !0;
function mt() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  if (!Ua)
    return Object.assign.apply(Object, [{}].concat(t));
  bn = !1;
  const n = {};
  return t.forEach((o) => {
    Object.keys(o).forEach((i) => {
      Object.defineProperty(n, i, {
        configurable: !0,
        enumerable: !0,
        get: () => o[i]
      });
    });
  }), bn = !0, n;
}
const Po = {};
function _l() {
}
const Rl = (e) => {
  let t, r = e, n = _l;
  return Ua && typeof Proxy < "u" && (t = /* @__PURE__ */ new Set(), r = new Proxy(e, {
    get(o, a) {
      return bn && t.add(a), o[a];
    }
  }), n = (o, a) => {
    var i;
    Po[o] = {
      global: Array.from(t),
      component: Object.assign(Object.assign({}, (i = Po[o]) === null || i === void 0 ? void 0 : i.component), a)
    };
  }), {
    token: r,
    keys: t,
    flush: n
  };
}, Xa = (e, t) => {
  const [r, n] = ot();
  return Zr({
    theme: r,
    token: n,
    hashId: "",
    path: ["ant-design-icons", e],
    nonce: () => t == null ? void 0 : t.nonce,
    layer: {
      name: "antd"
    }
  }, () => [{
    [`.${e}`]: Object.assign(Object.assign({}, xl()), {
      [`.${e} .${e}-icon`]: {
        display: "block"
      }
    })
  }]);
}, qa = (e, t, r) => {
  var n;
  return typeof r == "function" ? r(mt(t, (n = t[e]) !== null && n !== void 0 ? n : {})) : r ?? {};
}, Ka = (e, t, r, n) => {
  const o = Object.assign({}, t[e]);
  if (n != null && n.deprecatedTokens) {
    const {
      deprecatedTokens: i
    } = n;
    i.forEach((c) => {
      let [l, s] = c;
      var u;
      process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && Ue(!(o != null && o[l]), `Component Token \`${String(l)}\` of ${e} is deprecated. Please use \`${String(s)}\` instead.`), (o != null && o[l] || o != null && o[s]) && ((u = o[s]) !== null && u !== void 0 || (o[s] = o == null ? void 0 : o[l]));
    });
  }
  const a = Object.assign(Object.assign({}, r), o);
  return Object.keys(a).forEach((i) => {
    a[i] === t[i] && delete a[i];
  }), a;
}, _o = (e, t) => `${[t, e.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-")}`;
function Dn(e, t, r) {
  let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  const o = Array.isArray(e) ? e : [e, e], [a] = o, i = o.join("-");
  return function(c) {
    let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : c;
    const [s, u, f, d, g] = ot(), {
      getPrefixCls: C,
      iconPrefixCls: m,
      csp: p
    } = xe(Xe), A = C(), E = g ? "css" : "js", R = El(() => {
      const P = /* @__PURE__ */ new Set();
      return g && Object.keys(n.unitless || {}).forEach((N) => {
        P.add(Kt(N, g.prefix)), P.add(Kt(N, _o(a, g.prefix)));
      }), wc(E, P);
    }, [E, a, g == null ? void 0 : g.prefix]), {
      max: _,
      min: w
    } = Pl(E), O = {
      theme: s,
      token: d,
      hashId: f,
      nonce: () => p == null ? void 0 : p.nonce,
      clientOnly: n.clientOnly,
      layer: {
        name: "antd"
      },
      // antd is always at top of styles
      order: n.order || -999
    };
    return Zr(Object.assign(Object.assign({}, O), {
      clientOnly: !1,
      path: ["Shared", A]
    }), () => [{
      // Link
      "&": wl(d)
    }]), Xa(m, p), [Zr(Object.assign(Object.assign({}, O), {
      path: [i, c, m]
    }), () => {
      if (n.injectStyle === !1)
        return [];
      const {
        token: P,
        flush: N
      } = Rl(d), V = qa(a, u, r), G = `.${c}`, H = Ka(a, u, V, {
        deprecatedTokens: n.deprecatedTokens
      });
      g && Object.keys(V).forEach((W) => {
        V[W] = `var(${Kt(W, _o(a, g.prefix))})`;
      });
      const k = mt(P, {
        componentCls: G,
        prefixCls: c,
        iconCls: `.${m}`,
        antCls: `.${A}`,
        calc: R,
        // @ts-ignore
        max: _,
        // @ts-ignore
        min: w
      }, g ? V : H), j = t(k, {
        hashId: f,
        prefixCls: c,
        rootPrefixCls: A,
        iconPrefixCls: m
      });
      return N(a, H), [n.resetStyle === !1 ? null : Ol(k, c, l, n.resetFont), j];
    }), f];
  };
}
const $l = (e, t, r, n) => {
  const o = Dn(e, t, r, Object.assign({
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
  return process.env.NODE_ENV !== "production" && (a.displayName = `SubStyle_${Array.isArray(e) ? e.join(".") : e}`), a;
}, Ml = (e, t, r) => {
  const {
    unitless: n,
    injectStyle: o = !0,
    prefixToken: a
  } = r, i = (l) => {
    let {
      rootCls: s,
      cssVar: u
    } = l;
    const [, f] = ot();
    return Ts({
      path: [e],
      prefix: u.prefix,
      key: u == null ? void 0 : u.key,
      unitless: n,
      ignore: Wa,
      token: f,
      scope: s
    }, () => {
      const d = qa(e, f, t), g = Ka(e, f, d, {
        deprecatedTokens: r == null ? void 0 : r.deprecatedTokens
      });
      return Object.keys(d).forEach((C) => {
        g[a(C)] = g[C], delete g[C];
      }), g;
    }), null;
  };
  return (l) => {
    const [, , , , s] = ot();
    return [(u) => o && s ? /* @__PURE__ */ z.createElement(z.Fragment, null, /* @__PURE__ */ z.createElement(i, {
      rootCls: l,
      cssVar: s,
      component: e
    }), u) : u, s == null ? void 0 : s.key];
  };
}, jl = (e, t, r, n) => {
  const o = Array.isArray(e) ? e[0] : e;
  function a(f) {
    return `${o}${f.slice(0, 1).toUpperCase()}${f.slice(1)}`;
  }
  const i = (n == null ? void 0 : n.unitless) || {}, c = Object.assign(Object.assign({}, Va), {
    [a("zIndexPopup")]: !0
  });
  Object.keys(i).forEach((f) => {
    c[a(f)] = i[f];
  });
  const l = Object.assign(Object.assign({}, n), {
    unitless: c,
    prefixToken: a
  }), s = Dn(e, t, r, l), u = Ml(o, r, l);
  return function(f) {
    let d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : f;
    const [, g] = s(f, d), [C, m] = u(d);
    return [C, g, m];
  };
}, Il = Object.assign({}, h), {
  useId: Ro
} = Il, Ll = () => "", Nl = typeof Ro > "u" ? Ll : Ro;
function kl(e, t, r) {
  var n, o;
  const a = ht("ConfigProvider"), i = e || {}, c = i.inherit === !1 || !t ? Object.assign(Object.assign({}, hn), {
    hashed: (n = t == null ? void 0 : t.hashed) !== null && n !== void 0 ? n : hn.hashed,
    cssVar: t == null ? void 0 : t.cssVar
  }) : t, l = Nl();
  if (process.env.NODE_ENV !== "production") {
    const s = i.cssVar || c.cssVar, u = !!(typeof i.cssVar == "object" && (!((o = i.cssVar) === null || o === void 0) && o.key) || l);
    process.env.NODE_ENV !== "production" && a(!s || u, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
  }
  return Ko(() => {
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
    return !gc(f, g, !0);
  }));
}
var Bl = ["children"], Ya = /* @__PURE__ */ h.createContext({});
function Hl(e) {
  var t = e.children, r = At(e, Bl);
  return /* @__PURE__ */ h.createElement(Ya.Provider, {
    value: r
  }, t);
}
var Dl = /* @__PURE__ */ function(e) {
  ur(r, e);
  var t = fr(r);
  function r() {
    return Ie(this, r), t.apply(this, arguments);
  }
  return Le(r, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), r;
}(h.Component);
function zl(e) {
  var t = h.useReducer(function(c) {
    return c + 1;
  }, 0), r = F(t, 2), n = r[1], o = h.useRef(e), a = cr(function() {
    return o.current;
  }), i = cr(function(c) {
    o.current = typeof c == "function" ? c(o.current) : c, n();
  });
  return [a, i];
}
var ze = "none", Vt = "appear", Wt = "enter", Gt = "leave", $o = "none", he = "prepare", lt = "start", ut = "active", zn = "end", Qa = "prepared";
function Mo(e, t) {
  var r = {};
  return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit".concat(e)] = "webkit".concat(t), r["Moz".concat(e)] = "moz".concat(t), r["ms".concat(e)] = "MS".concat(t), r["O".concat(e)] = "o".concat(t.toLowerCase()), r;
}
function Fl(e, t) {
  var r = {
    animationend: Mo("Animation", "AnimationEnd"),
    transitionend: Mo("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in t || delete r.animationend.animation, "TransitionEvent" in t || delete r.transitionend.transition), r;
}
var Vl = Fl(Ne(), typeof window < "u" ? window : {}), Za = {};
if (Ne()) {
  var Wl = document.createElement("div");
  Za = Wl.style;
}
var Ut = {};
function Ja(e) {
  if (Ut[e])
    return Ut[e];
  var t = Vl[e];
  if (t)
    for (var r = Object.keys(t), n = r.length, o = 0; o < n; o += 1) {
      var a = r[o];
      if (Object.prototype.hasOwnProperty.call(t, a) && a in Za)
        return Ut[e] = t[a], Ut[e];
    }
  return "";
}
var ei = Ja("animationend"), ti = Ja("transitionend"), ri = !!(ei && ti), jo = ei || "animationend", Io = ti || "transitionend";
function Lo(e, t) {
  if (!e) return null;
  if (K(e) === "object") {
    var r = t.replace(/-\w/g, function(n) {
      return n[1].toUpperCase();
    });
    return e[r];
  }
  return "".concat(e, "-").concat(t);
}
const Gl = function(e) {
  var t = Ze();
  function r(o) {
    o && (o.removeEventListener(Io, e), o.removeEventListener(jo, e));
  }
  function n(o) {
    t.current && t.current !== o && r(t.current), o && o !== t.current && (o.addEventListener(Io, e), o.addEventListener(jo, e), t.current = o);
  }
  return h.useEffect(function() {
    return function() {
      r(t.current);
    };
  }, []), [n, r];
};
var ni = Ne() ? Wi : Je;
const Ul = function() {
  var e = h.useRef(null);
  function t() {
    We.cancel(e.current);
  }
  function r(n) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var a = We(function() {
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
var Xl = [he, lt, ut, zn], ql = [he, Qa], oi = !1, Kl = !0;
function ai(e) {
  return e === ut || e === zn;
}
const Yl = function(e, t, r) {
  var n = mn($o), o = F(n, 2), a = o[0], i = o[1], c = Ul(), l = F(c, 2), s = l[0], u = l[1];
  function f() {
    i(he, !0);
  }
  var d = t ? ql : Xl;
  return ni(function() {
    if (a !== $o && a !== zn) {
      var g = d.indexOf(a), C = d[g + 1], m = r(a);
      m === oi ? i(C, !0) : C && s(function(p) {
        function A() {
          p.isCanceled() || i(C, !0);
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
function Ql(e, t, r, n) {
  var o = n.motionEnter, a = o === void 0 ? !0 : o, i = n.motionAppear, c = i === void 0 ? !0 : i, l = n.motionLeave, s = l === void 0 ? !0 : l, u = n.motionDeadline, f = n.motionLeaveImmediately, d = n.onAppearPrepare, g = n.onEnterPrepare, C = n.onLeavePrepare, m = n.onAppearStart, p = n.onEnterStart, A = n.onLeaveStart, E = n.onAppearActive, R = n.onEnterActive, _ = n.onLeaveActive, w = n.onAppearEnd, O = n.onEnterEnd, S = n.onLeaveEnd, P = n.onVisibleChanged, N = mn(), V = F(N, 2), G = V[0], H = V[1], k = zl(ze), j = F(k, 2), W = j[0], y = j[1], v = mn(null), b = F(v, 2), x = b[0], $ = b[1], T = W(), I = Ze(!1), B = Ze(null);
  function q() {
    return r();
  }
  var ne = Ze(!1);
  function ce() {
    y(ze), $(null, !0);
  }
  var Q = cr(function(re) {
    var Z = W();
    if (Z !== ze) {
      var se = q();
      if (!(re && !re.deadline && re.target !== se)) {
        var Se = ne.current, Y;
        Z === Vt && Se ? Y = w == null ? void 0 : w(se, re) : Z === Wt && Se ? Y = O == null ? void 0 : O(se, re) : Z === Gt && Se && (Y = S == null ? void 0 : S(se, re)), Se && Y !== !1 && ce();
      }
    }
  }), ke = Gl(Q), Be = F(ke, 1), qe = Be[0], we = function(Z) {
    switch (Z) {
      case Vt:
        return D(D(D({}, he, d), lt, m), ut, E);
      case Wt:
        return D(D(D({}, he, g), lt, p), ut, R);
      case Gt:
        return D(D(D({}, he, C), lt, A), ut, _);
      default:
        return {};
    }
  }, pe = h.useMemo(function() {
    return we(T);
  }, [T]), He = Yl(T, !e, function(re) {
    if (re === he) {
      var Z = pe[he];
      return Z ? Z(q()) : oi;
    }
    if (te in pe) {
      var se;
      $(((se = pe[te]) === null || se === void 0 ? void 0 : se.call(pe, q(), null)) || null);
    }
    return te === ut && T !== ze && (qe(q()), u > 0 && (clearTimeout(B.current), B.current = setTimeout(function() {
      Q({
        deadline: !0
      });
    }, u))), te === Qa && ce(), Kl;
  }), M = F(He, 2), Oe = M[0], te = M[1], Te = ai(te);
  ne.current = Te, ni(function() {
    H(t);
    var re = I.current;
    I.current = !0;
    var Z;
    !re && t && c && (Z = Vt), re && t && a && (Z = Wt), (re && !t && s || !re && f && !t && s) && (Z = Gt);
    var se = we(Z);
    Z && (e || se[he]) ? (y(Z), Oe()) : y(ze);
  }, [t]), Je(function() {
    // Cancel appear
    (T === Vt && !c || // Cancel enter
    T === Wt && !a || // Cancel leave
    T === Gt && !s) && y(ze);
  }, [c, a, s]), Je(function() {
    return function() {
      I.current = !1, clearTimeout(B.current);
    };
  }, []);
  var De = h.useRef(!1);
  Je(function() {
    G && (De.current = !0), G !== void 0 && T === ze && ((De.current || G) && (P == null || P(G)), De.current = !0);
  }, [G, T]);
  var Ke = x;
  return pe[he] && te === lt && (Ke = L({
    transition: "none"
  }, Ke)), [T, te, Ke, G ?? t];
}
function Zl(e) {
  var t = e;
  K(e) === "object" && (t = e.transitionSupport);
  function r(o, a) {
    return !!(o.motionName && t && a !== !1);
  }
  var n = /* @__PURE__ */ h.forwardRef(function(o, a) {
    var i = o.visible, c = i === void 0 ? !0 : i, l = o.removeOnLeave, s = l === void 0 ? !0 : l, u = o.forceRender, f = o.children, d = o.motionName, g = o.leavedClassName, C = o.eventProps, m = h.useContext(Ya), p = m.motion, A = r(o, p), E = Ze(), R = Ze();
    function _() {
      try {
        return E.current instanceof HTMLElement ? E.current : oc(R.current);
      } catch {
        return null;
      }
    }
    var w = Ql(A, c, _, o), O = F(w, 4), S = O[0], P = O[1], N = O[2], V = O[3], G = h.useRef(V);
    V && (G.current = !0);
    var H = h.useCallback(function(x) {
      E.current = x, Yo(a, x);
    }, [a]), k, j = L(L({}, C), {}, {
      visible: c
    });
    if (!f)
      k = null;
    else if (S === ze)
      V ? k = f(L({}, j), H) : !s && G.current && g ? k = f(L(L({}, j), {}, {
        className: g
      }), H) : u || !s && !g ? k = f(L(L({}, j), {}, {
        style: {
          display: "none"
        }
      }), H) : k = null;
    else {
      var W;
      P === he ? W = "prepare" : ai(P) ? W = "active" : P === lt && (W = "start");
      var y = Lo(d, "".concat(S, "-").concat(W));
      k = f(L(L({}, j), {}, {
        className: me(Lo(d, S), D(D({}, y, y && W), d, typeof d == "string")),
        style: N
      }), H);
    }
    if (/* @__PURE__ */ h.isValidElement(k) && Qo(k)) {
      var v = k, b = v.ref;
      b || (k = /* @__PURE__ */ h.cloneElement(k, {
        ref: H
      }));
    }
    return /* @__PURE__ */ h.createElement(Dl, {
      ref: R
    }, k);
  });
  return n.displayName = "CSSMotion", n;
}
const Fn = Zl(ri);
var yn = "add", Sn = "keep", Cn = "remove", Lr = "removed";
function Jl(e) {
  var t;
  return e && K(e) === "object" && "key" in e ? t = e : t = {
    key: e
  }, L(L({}, t), {}, {
    key: String(t.key)
  });
}
function En() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(Jl);
}
function eu() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = [], n = 0, o = t.length, a = En(e), i = En(t);
  a.forEach(function(s) {
    for (var u = !1, f = n; f < o; f += 1) {
      var d = i[f];
      if (d.key === s.key) {
        n < f && (r = r.concat(i.slice(n, f).map(function(g) {
          return L(L({}, g), {}, {
            status: yn
          });
        })), n = f), r.push(L(L({}, d), {}, {
          status: Sn
        })), n += 1, u = !0;
        break;
      }
    }
    u || r.push(L(L({}, s), {}, {
      status: Cn
    }));
  }), n < o && (r = r.concat(i.slice(n).map(function(s) {
    return L(L({}, s), {}, {
      status: yn
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
      return f !== s || d !== Cn;
    }), r.forEach(function(u) {
      u.key === s && (u.status = Sn);
    });
  }), r;
}
var tu = ["component", "children", "onVisibleChanged", "onAllRemoved"], ru = ["status"], nu = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function ou(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Fn, r = /* @__PURE__ */ function(n) {
    ur(a, n);
    var o = fr(a);
    function a() {
      var i;
      Ie(this, a);
      for (var c = arguments.length, l = new Array(c), s = 0; s < c; s++)
        l[s] = arguments[s];
      return i = o.call.apply(o, [this].concat(l)), D(et(i), "state", {
        keyEntities: []
      }), D(et(i), "removeKey", function(u) {
        var f = i.state.keyEntities, d = f.map(function(g) {
          return g.key !== u ? g : L(L({}, g), {}, {
            status: Lr
          });
        });
        return i.setState({
          keyEntities: d
        }), d.filter(function(g) {
          var C = g.status;
          return C !== Lr;
        }).length;
      }), i;
    }
    return Le(a, [{
      key: "render",
      value: function() {
        var c = this, l = this.state.keyEntities, s = this.props, u = s.component, f = s.children, d = s.onVisibleChanged, g = s.onAllRemoved, C = At(s, tu), m = u || h.Fragment, p = {};
        return nu.forEach(function(A) {
          p[A] = C[A], delete C[A];
        }), delete C.keys, /* @__PURE__ */ h.createElement(m, C, l.map(function(A, E) {
          var R = A.status, _ = At(A, ru), w = R === yn || R === Sn;
          return /* @__PURE__ */ h.createElement(t, ft({}, p, {
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
          }), function(O, S) {
            return f(L(L({}, O), {}, {
              index: E
            }), S);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(c, l) {
        var s = c.keys, u = l.keyEntities, f = En(s), d = eu(u, f);
        return {
          keyEntities: d.filter(function(g) {
            var C = u.find(function(m) {
              var p = m.key;
              return g.key === p;
            });
            return !(C && C.status === Lr && g.status === Cn);
          })
        };
      }
    }]), a;
  }(h.Component);
  return D(r, "defaultProps", {
    component: "div"
  }), r;
}
ou(ri);
function au(e) {
  const {
    children: t
  } = e, [, r] = ot(), {
    motion: n
  } = r, o = h.useRef(!1);
  return o.current = o.current || n === !1, o.current ? /* @__PURE__ */ h.createElement(Hl, {
    motion: n
  }, t) : t;
}
const ii = /* @__PURE__ */ h.memo((e) => {
  let {
    dropdownMatchSelectWidth: t
  } = e;
  return ht("ConfigProvider").deprecated(t === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null;
});
process.env.NODE_ENV !== "production" && (ii.displayName = "PropWarning");
const iu = process.env.NODE_ENV !== "production" ? ii : () => null;
var cu = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
let xn = !1;
process.env.NODE_ENV;
const su = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"];
let ci;
function lu() {
  return ci || ar;
}
function uu(e) {
  return Object.keys(e).some((t) => t.endsWith("Color"));
}
const fu = (e) => {
  const {
    prefixCls: t,
    iconPrefixCls: r,
    theme: n,
    holderRender: o
  } = e;
  t !== void 0 && (ci = t), n && uu(n) && (process.env.NODE_ENV !== "production" && mr(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), pl(lu(), n));
}, du = (e) => {
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
    parentContext: p,
    iconPrefixCls: A,
    theme: E,
    componentDisabled: R,
    segmented: _,
    statistic: w,
    spin: O,
    calendar: S,
    carousel: P,
    cascader: N,
    collapse: V,
    typography: G,
    checkbox: H,
    descriptions: k,
    divider: j,
    drawer: W,
    skeleton: y,
    steps: v,
    image: b,
    layout: x,
    list: $,
    mentions: T,
    modal: I,
    progress: B,
    result: q,
    slider: ne,
    breadcrumb: ce,
    menu: Q,
    pagination: ke,
    input: Be,
    textArea: qe,
    empty: we,
    badge: pe,
    radio: He,
    rate: M,
    switch: Oe,
    transfer: te,
    avatar: Te,
    message: De,
    tag: Ke,
    table: re,
    card: Z,
    tabs: se,
    timeline: Se,
    timePicker: Y,
    upload: ve,
    notification: St,
    tree: xi,
    colorPicker: wi,
    datePicker: Oi,
    rangePicker: Ti,
    flex: Ai,
    wave: Pi,
    dropdown: _i,
    warning: Ri,
    tour: $i,
    floatButtonGroup: Mi,
    variant: ji,
    inputNumber: Ii,
    treeSelect: Li
  } = e, Un = h.useCallback((J, ae) => {
    const {
      prefixCls: Ce
    } = e;
    if (ae)
      return ae;
    const Ee = Ce || p.getPrefixCls("");
    return J ? `${Ee}-${J}` : Ee;
  }, [p.getPrefixCls, e.prefixCls]), Ct = A || p.iconPrefixCls || za, Et = r || p.csp;
  Xa(Ct, Et);
  const Lt = kl(E, p.theme, {
    prefixCls: Un("")
  });
  process.env.NODE_ENV !== "production" && (xn = xn || !!Lt);
  const Cr = {
    csp: Et,
    autoInsertSpaceInButton: n,
    alert: o,
    anchor: a,
    locale: c || m,
    direction: s,
    space: u,
    virtual: f,
    popupMatchSelectWidth: g ?? d,
    popupOverflow: C,
    getPrefixCls: Un,
    iconPrefixCls: Ct,
    theme: Lt,
    segmented: _,
    statistic: w,
    spin: O,
    calendar: S,
    carousel: P,
    cascader: N,
    collapse: V,
    typography: G,
    checkbox: H,
    descriptions: k,
    divider: j,
    drawer: W,
    skeleton: y,
    steps: v,
    image: b,
    input: Be,
    textArea: qe,
    layout: x,
    list: $,
    mentions: T,
    modal: I,
    progress: B,
    result: q,
    slider: ne,
    breadcrumb: ce,
    menu: Q,
    pagination: ke,
    empty: we,
    badge: pe,
    radio: He,
    rate: M,
    switch: Oe,
    transfer: te,
    avatar: Te,
    message: De,
    tag: Ke,
    table: re,
    card: Z,
    tabs: se,
    timeline: Se,
    timePicker: Y,
    upload: ve,
    notification: St,
    tree: xi,
    colorPicker: wi,
    datePicker: Oi,
    rangePicker: Ti,
    flex: Ai,
    wave: Pi,
    dropdown: _i,
    warning: Ri,
    tour: $i,
    floatButtonGroup: Mi,
    variant: ji,
    inputNumber: Ii,
    treeSelect: Li
  };
  process.env.NODE_ENV !== "production" && ht("ConfigProvider")(!("autoInsertSpaceInButton" in e), "deprecated", "`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead.");
  const at = Object.assign({}, p);
  Object.keys(Cr).forEach((J) => {
    Cr[J] !== void 0 && (at[J] = Cr[J]);
  }), su.forEach((J) => {
    const ae = e[J];
    ae && (at[J] = ae);
  }), typeof n < "u" && (at.button = Object.assign({
    autoInsertSpace: n
  }, at.button));
  const it = Ko(() => at, at, (J, ae) => {
    const Ce = Object.keys(J), Ee = Object.keys(ae);
    return Ce.length !== Ee.length || Ce.some((Nt) => J[Nt] !== ae[Nt]);
  }), Ni = h.useMemo(() => ({
    prefixCls: Ct,
    csp: Et
  }), [Ct, Et]);
  let oe = /* @__PURE__ */ h.createElement(h.Fragment, null, /* @__PURE__ */ h.createElement(iu, {
    dropdownMatchSelectWidth: d
  }), t);
  const Xn = h.useMemo(() => {
    var J, ae, Ce, Ee;
    return $s(((J = br.Form) === null || J === void 0 ? void 0 : J.defaultValidateMessages) || {}, ((Ce = (ae = it.locale) === null || ae === void 0 ? void 0 : ae.Form) === null || Ce === void 0 ? void 0 : Ce.defaultValidateMessages) || {}, ((Ee = it.form) === null || Ee === void 0 ? void 0 : Ee.validateMessages) || {}, (i == null ? void 0 : i.validateMessages) || {});
  }, [it, i == null ? void 0 : i.validateMessages]);
  Object.keys(Xn).length > 0 && (oe = /* @__PURE__ */ h.createElement(js.Provider, {
    value: Xn
  }, oe)), c && (oe = /* @__PURE__ */ h.createElement(Ia, {
    locale: c,
    _ANT_MARK__: ja
  }, oe)), (Ct || Et) && (oe = /* @__PURE__ */ h.createElement(Bn.Provider, {
    value: Ni
  }, oe)), l && (oe = /* @__PURE__ */ h.createElement(gl, {
    size: l
  }, oe)), oe = /* @__PURE__ */ h.createElement(au, null, oe);
  const ki = h.useMemo(() => {
    const J = Lt || {}, {
      algorithm: ae,
      token: Ce,
      components: Ee,
      cssVar: Nt
    } = J, Bi = cu(J, ["algorithm", "token", "components", "cssVar"]), qn = ae && (!Array.isArray(ae) || ae.length > 0) ? Ur(ae) : Ha, Er = {};
    Object.entries(Ee || {}).forEach((Hi) => {
      let [Di, zi] = Hi;
      const Ae = Object.assign({}, zi);
      "algorithm" in Ae && (Ae.algorithm === !0 ? Ae.theme = qn : (Array.isArray(Ae.algorithm) || typeof Ae.algorithm == "function") && (Ae.theme = Ur(Ae.algorithm)), delete Ae.algorithm), Er[Di] = Ae;
    });
    const Kn = Object.assign(Object.assign({}, $t), Ce);
    return Object.assign(Object.assign({}, Bi), {
      theme: qn,
      token: Kn,
      components: Er,
      override: Object.assign({
        override: Kn
      }, Er),
      cssVar: Nt
    });
  }, [Lt]);
  return E && (oe = /* @__PURE__ */ h.createElement(Da.Provider, {
    value: ki
  }, oe)), it.warning && (oe = /* @__PURE__ */ h.createElement(Ra.Provider, {
    value: it.warning
  }, oe)), R !== void 0 && (oe = /* @__PURE__ */ h.createElement(vl, {
    disabled: R
  }, oe)), /* @__PURE__ */ h.createElement(Xe.Provider, {
    value: it
  }, oe);
}, bt = (e) => {
  const t = h.useContext(Xe), r = h.useContext(Ma);
  return /* @__PURE__ */ h.createElement(du, Object.assign({
    parentContext: t,
    legacyLocale: r
  }, e));
};
bt.ConfigContext = Xe;
bt.SizeContext = vt;
bt.config = fu;
bt.useConfig = hl;
Object.defineProperty(bt, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && mr(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), vt)
});
process.env.NODE_ENV !== "production" && (bt.displayName = "ConfigProvider");
function si(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
}
function pu(e) {
  return si(e) instanceof ShadowRoot;
}
function vu(e) {
  return pu(e) ? si(e) : null;
}
function gu(e) {
  return e.replace(/-(.)/g, function(t, r) {
    return r.toUpperCase();
  });
}
function hu(e, t) {
  Ue(e, "[@ant-design/icons] ".concat(t));
}
function No(e) {
  return K(e) === "object" && typeof e.name == "string" && typeof e.theme == "string" && (K(e.icon) === "object" || typeof e.icon == "function");
}
function ko() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(e).reduce(function(t, r) {
    var n = e[r];
    switch (r) {
      case "class":
        t.className = n, delete t.class;
        break;
      default:
        delete t[r], t[gu(r)] = n;
    }
    return t;
  }, {});
}
function wn(e, t, r) {
  return r ? /* @__PURE__ */ z.createElement(e.tag, L(L({
    key: t
  }, ko(e.attrs)), r), (e.children || []).map(function(n, o) {
    return wn(n, "".concat(t, "-").concat(e.tag, "-").concat(o));
  })) : /* @__PURE__ */ z.createElement(e.tag, L({
    key: t
  }, ko(e.attrs)), (e.children || []).map(function(n, o) {
    return wn(n, "".concat(t, "-").concat(e.tag, "-").concat(o));
  }));
}
function li(e) {
  return Rt(e)[0];
}
function ui(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var mu = `
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
`, bu = function(t) {
  var r = xe(Bn), n = r.csp, o = r.prefixCls, a = mu;
  o && (a = a.replace(/anticon/g, o)), Je(function() {
    var i = t.current, c = vu(i);
    tt(a, "@ant-design-icons", {
      prepend: !0,
      csp: n,
      attachTo: c
    });
  }, []);
}, yu = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], Ot = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function Su(e) {
  var t = e.primaryColor, r = e.secondaryColor;
  Ot.primaryColor = t, Ot.secondaryColor = r || li(t), Ot.calculated = !!r;
}
function Cu() {
  return L({}, Ot);
}
var yt = function(t) {
  var r = t.icon, n = t.className, o = t.onClick, a = t.style, i = t.primaryColor, c = t.secondaryColor, l = At(t, yu), s = h.useRef(), u = Ot;
  if (i && (u = {
    primaryColor: i,
    secondaryColor: c || li(i)
  }), bu(s), hu(No(r), "icon should be icon definiton, but got ".concat(r)), !No(r))
    return null;
  var f = r;
  return f && typeof f.icon == "function" && (f = L(L({}, f), {}, {
    icon: f.icon(u.primaryColor, u.secondaryColor)
  })), wn(f.icon, "svg-".concat(f.name), L(L({
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
yt.displayName = "IconReact";
yt.getTwoToneColors = Cu;
yt.setTwoToneColors = Su;
function fi(e) {
  var t = ui(e), r = F(t, 2), n = r[0], o = r[1];
  return yt.setTwoToneColors({
    primaryColor: n,
    secondaryColor: o
  });
}
function Eu() {
  var e = yt.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var xu = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
fi(or.primary);
var yr = /* @__PURE__ */ h.forwardRef(function(e, t) {
  var r = e.className, n = e.icon, o = e.spin, a = e.rotate, i = e.tabIndex, c = e.onClick, l = e.twoToneColor, s = At(e, xu), u = h.useContext(Bn), f = u.prefixCls, d = f === void 0 ? "anticon" : f, g = u.rootClassName, C = me(g, d, D(D({}, "".concat(d, "-").concat(n.name), !!n.name), "".concat(d, "-spin"), !!o || n.name === "loading"), r), m = i;
  m === void 0 && c && (m = -1);
  var p = a ? {
    msTransform: "rotate(".concat(a, "deg)"),
    transform: "rotate(".concat(a, "deg)")
  } : void 0, A = ui(l), E = F(A, 2), R = E[0], _ = E[1];
  return /* @__PURE__ */ h.createElement("span", ft({
    role: "img",
    "aria-label": n.name
  }, s, {
    ref: t,
    tabIndex: m,
    onClick: c,
    className: C
  }), /* @__PURE__ */ h.createElement(yt, {
    icon: n,
    primaryColor: R,
    secondaryColor: _,
    style: p
  }));
});
yr.displayName = "AntdIcon";
yr.getTwoToneColor = Eu;
yr.setTwoToneColor = fi;
function wu(e) {
  return e && /* @__PURE__ */ z.isValidElement(e) && e.type === z.Fragment;
}
const Ou = (e, t, r) => /* @__PURE__ */ z.isValidElement(e) ? /* @__PURE__ */ z.cloneElement(e, typeof r == "function" ? r(e.props || {}) : r) : t;
function di(e, t) {
  return Ou(e, e, t);
}
var Tu = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" }, Au = function(t, r) {
  return /* @__PURE__ */ h.createElement(yr, ft({}, t, {
    ref: r,
    icon: Tu
  }));
}, pi = /* @__PURE__ */ h.forwardRef(Au);
process.env.NODE_ENV !== "production" && (pi.displayName = "LoadingOutlined");
function Mt() {
  Mt = function() {
    return t;
  };
  var e, t = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function(y, v, b) {
    y[v] = b.value;
  }, a = typeof Symbol == "function" ? Symbol : {}, i = a.iterator || "@@iterator", c = a.asyncIterator || "@@asyncIterator", l = a.toStringTag || "@@toStringTag";
  function s(y, v, b) {
    return Object.defineProperty(y, v, {
      value: b,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), y[v];
  }
  try {
    s({}, "");
  } catch {
    s = function(b, x, $) {
      return b[x] = $;
    };
  }
  function u(y, v, b, x) {
    var $ = v && v.prototype instanceof A ? v : A, T = Object.create($.prototype), I = new j(x || []);
    return o(T, "_invoke", {
      value: V(y, b, I)
    }), T;
  }
  function f(y, v, b) {
    try {
      return {
        type: "normal",
        arg: y.call(v, b)
      };
    } catch (x) {
      return {
        type: "throw",
        arg: x
      };
    }
  }
  t.wrap = u;
  var d = "suspendedStart", g = "suspendedYield", C = "executing", m = "completed", p = {};
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
  var w = Object.getPrototypeOf, O = w && w(w(W([])));
  O && O !== r && n.call(O, i) && (_ = O);
  var S = R.prototype = A.prototype = Object.create(_);
  function P(y) {
    ["next", "throw", "return"].forEach(function(v) {
      s(y, v, function(b) {
        return this._invoke(v, b);
      });
    });
  }
  function N(y, v) {
    function b($, T, I, B) {
      var q = f(y[$], y, T);
      if (q.type !== "throw") {
        var ne = q.arg, ce = ne.value;
        return ce && K(ce) == "object" && n.call(ce, "__await") ? v.resolve(ce.__await).then(function(Q) {
          b("next", Q, I, B);
        }, function(Q) {
          b("throw", Q, I, B);
        }) : v.resolve(ce).then(function(Q) {
          ne.value = Q, I(ne);
        }, function(Q) {
          return b("throw", Q, I, B);
        });
      }
      B(q.arg);
    }
    var x;
    o(this, "_invoke", {
      value: function(T, I) {
        function B() {
          return new v(function(q, ne) {
            b(T, I, q, ne);
          });
        }
        return x = x ? x.then(B, B) : B();
      }
    });
  }
  function V(y, v, b) {
    var x = d;
    return function($, T) {
      if (x === C) throw Error("Generator is already running");
      if (x === m) {
        if ($ === "throw") throw T;
        return {
          value: e,
          done: !0
        };
      }
      for (b.method = $, b.arg = T; ; ) {
        var I = b.delegate;
        if (I) {
          var B = G(I, b);
          if (B) {
            if (B === p) continue;
            return B;
          }
        }
        if (b.method === "next") b.sent = b._sent = b.arg;
        else if (b.method === "throw") {
          if (x === d) throw x = m, b.arg;
          b.dispatchException(b.arg);
        } else b.method === "return" && b.abrupt("return", b.arg);
        x = C;
        var q = f(y, v, b);
        if (q.type === "normal") {
          if (x = b.done ? m : g, q.arg === p) continue;
          return {
            value: q.arg,
            done: b.done
          };
        }
        q.type === "throw" && (x = m, b.method = "throw", b.arg = q.arg);
      }
    };
  }
  function G(y, v) {
    var b = v.method, x = y.iterator[b];
    if (x === e) return v.delegate = null, b === "throw" && y.iterator.return && (v.method = "return", v.arg = e, G(y, v), v.method === "throw") || b !== "return" && (v.method = "throw", v.arg = new TypeError("The iterator does not provide a '" + b + "' method")), p;
    var $ = f(x, y.iterator, v.arg);
    if ($.type === "throw") return v.method = "throw", v.arg = $.arg, v.delegate = null, p;
    var T = $.arg;
    return T ? T.done ? (v[y.resultName] = T.value, v.next = y.nextLoc, v.method !== "return" && (v.method = "next", v.arg = e), v.delegate = null, p) : T : (v.method = "throw", v.arg = new TypeError("iterator result is not an object"), v.delegate = null, p);
  }
  function H(y) {
    var v = {
      tryLoc: y[0]
    };
    1 in y && (v.catchLoc = y[1]), 2 in y && (v.finallyLoc = y[2], v.afterLoc = y[3]), this.tryEntries.push(v);
  }
  function k(y) {
    var v = y.completion || {};
    v.type = "normal", delete v.arg, y.completion = v;
  }
  function j(y) {
    this.tryEntries = [{
      tryLoc: "root"
    }], y.forEach(H, this), this.reset(!0);
  }
  function W(y) {
    if (y || y === "") {
      var v = y[i];
      if (v) return v.call(y);
      if (typeof y.next == "function") return y;
      if (!isNaN(y.length)) {
        var b = -1, x = function $() {
          for (; ++b < y.length; ) if (n.call(y, b)) return $.value = y[b], $.done = !1, $;
          return $.value = e, $.done = !0, $;
        };
        return x.next = x;
      }
    }
    throw new TypeError(K(y) + " is not iterable");
  }
  return E.prototype = R, o(S, "constructor", {
    value: R,
    configurable: !0
  }), o(R, "constructor", {
    value: E,
    configurable: !0
  }), E.displayName = s(R, l, "GeneratorFunction"), t.isGeneratorFunction = function(y) {
    var v = typeof y == "function" && y.constructor;
    return !!v && (v === E || (v.displayName || v.name) === "GeneratorFunction");
  }, t.mark = function(y) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(y, R) : (y.__proto__ = R, s(y, l, "GeneratorFunction")), y.prototype = Object.create(S), y;
  }, t.awrap = function(y) {
    return {
      __await: y
    };
  }, P(N.prototype), s(N.prototype, c, function() {
    return this;
  }), t.AsyncIterator = N, t.async = function(y, v, b, x, $) {
    $ === void 0 && ($ = Promise);
    var T = new N(u(y, v, b, x), $);
    return t.isGeneratorFunction(v) ? T : T.next().then(function(I) {
      return I.done ? I.value : T.next();
    });
  }, P(S), s(S, l, "Generator"), s(S, i, function() {
    return this;
  }), s(S, "toString", function() {
    return "[object Generator]";
  }), t.keys = function(y) {
    var v = Object(y), b = [];
    for (var x in v) b.push(x);
    return b.reverse(), function $() {
      for (; b.length; ) {
        var T = b.pop();
        if (T in v) return $.value = T, $.done = !1, $;
      }
      return $.done = !0, $;
    };
  }, t.values = W, j.prototype = {
    constructor: j,
    reset: function(v) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(k), !v) for (var b in this) b.charAt(0) === "t" && n.call(this, b) && !isNaN(+b.slice(1)) && (this[b] = e);
    },
    stop: function() {
      this.done = !0;
      var v = this.tryEntries[0].completion;
      if (v.type === "throw") throw v.arg;
      return this.rval;
    },
    dispatchException: function(v) {
      if (this.done) throw v;
      var b = this;
      function x(ne, ce) {
        return I.type = "throw", I.arg = v, b.next = ne, ce && (b.method = "next", b.arg = e), !!ce;
      }
      for (var $ = this.tryEntries.length - 1; $ >= 0; --$) {
        var T = this.tryEntries[$], I = T.completion;
        if (T.tryLoc === "root") return x("end");
        if (T.tryLoc <= this.prev) {
          var B = n.call(T, "catchLoc"), q = n.call(T, "finallyLoc");
          if (B && q) {
            if (this.prev < T.catchLoc) return x(T.catchLoc, !0);
            if (this.prev < T.finallyLoc) return x(T.finallyLoc);
          } else if (B) {
            if (this.prev < T.catchLoc) return x(T.catchLoc, !0);
          } else {
            if (!q) throw Error("try statement without catch or finally");
            if (this.prev < T.finallyLoc) return x(T.finallyLoc);
          }
        }
      }
    },
    abrupt: function(v, b) {
      for (var x = this.tryEntries.length - 1; x >= 0; --x) {
        var $ = this.tryEntries[x];
        if ($.tryLoc <= this.prev && n.call($, "finallyLoc") && this.prev < $.finallyLoc) {
          var T = $;
          break;
        }
      }
      T && (v === "break" || v === "continue") && T.tryLoc <= b && b <= T.finallyLoc && (T = null);
      var I = T ? T.completion : {};
      return I.type = v, I.arg = b, T ? (this.method = "next", this.next = T.finallyLoc, p) : this.complete(I);
    },
    complete: function(v, b) {
      if (v.type === "throw") throw v.arg;
      return v.type === "break" || v.type === "continue" ? this.next = v.arg : v.type === "return" ? (this.rval = this.arg = v.arg, this.method = "return", this.next = "end") : v.type === "normal" && b && (this.next = b), p;
    },
    finish: function(v) {
      for (var b = this.tryEntries.length - 1; b >= 0; --b) {
        var x = this.tryEntries[b];
        if (x.finallyLoc === v) return this.complete(x.completion, x.afterLoc), k(x), p;
      }
    },
    catch: function(v) {
      for (var b = this.tryEntries.length - 1; b >= 0; --b) {
        var x = this.tryEntries[b];
        if (x.tryLoc === v) {
          var $ = x.completion;
          if ($.type === "throw") {
            var T = $.arg;
            k(x);
          }
          return T;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function(v, b, x) {
      return this.delegate = {
        iterator: W(v),
        resultName: b,
        nextLoc: x
      }, this.method === "next" && (this.arg = e), p;
    }
  }, t;
}
function Bo(e, t, r, n, o, a, i) {
  try {
    var c = e[a](i), l = c.value;
  } catch (s) {
    return void r(s);
  }
  c.done ? t(l) : Promise.resolve(l).then(n, o);
}
function vi(e) {
  return function() {
    var t = this, r = arguments;
    return new Promise(function(n, o) {
      var a = e.apply(t, r);
      function i(l) {
        Bo(a, n, o, i, c, "next", l);
      }
      function c(l) {
        Bo(a, n, o, i, c, "throw", l);
      }
      i(void 0);
    });
  };
}
var It = L({}, qi), Pu = It.version, _u = It.render, Ru = It.unmountComponentAtNode, Sr;
try {
  var $u = Number((Pu || "").split(".")[0]);
  $u >= 18 && (Sr = It.createRoot);
} catch {
}
function Ho(e) {
  var t = It.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  t && K(t) === "object" && (t.usingClientEntryPoint = e);
}
var sr = "__rc_react_root__";
function Mu(e, t) {
  Ho(!0);
  var r = t[sr] || Sr(t);
  Ho(!1), r.render(e), t[sr] = r;
}
function ju(e, t) {
  _u(e, t);
}
function Iu(e, t) {
  if (Sr) {
    Mu(e, t);
    return;
  }
  ju(e, t);
}
function Lu(e) {
  return On.apply(this, arguments);
}
function On() {
  return On = vi(/* @__PURE__ */ Mt().mark(function e(t) {
    return Mt().wrap(function(n) {
      for (; ; ) switch (n.prev = n.next) {
        case 0:
          return n.abrupt("return", Promise.resolve().then(function() {
            var o;
            (o = t[sr]) === null || o === void 0 || o.unmount(), delete t[sr];
          }));
        case 1:
        case "end":
          return n.stop();
      }
    }, e);
  })), On.apply(this, arguments);
}
function Nu(e) {
  Ru(e);
}
function ku(e) {
  return Tn.apply(this, arguments);
}
function Tn() {
  return Tn = vi(/* @__PURE__ */ Mt().mark(function e(t) {
    return Mt().wrap(function(n) {
      for (; ; ) switch (n.prev = n.next) {
        case 0:
          if (Sr === void 0) {
            n.next = 2;
            break;
          }
          return n.abrupt("return", Lu(t));
        case 2:
          Nu(t);
        case 3:
        case "end":
          return n.stop();
      }
    }, e);
  })), Tn.apply(this, arguments);
}
const Bu = function(e) {
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
}, Hu = (e) => {
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
}, Du = Dn("Wave", (e) => [Hu(e)]), gi = `${ar}-wave-target`;
function zu(e) {
  const t = (e || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
  return t && t[1] && t[2] && t[3] ? !(t[1] === t[2] && t[2] === t[3]) : !0;
}
function Nr(e) {
  return e && e !== "#fff" && e !== "#ffffff" && e !== "rgb(255, 255, 255)" && e !== "rgba(255, 255, 255, 1)" && zu(e) && !/rgba\((?:\d*, ){3}0\)/.test(e) && // any transparent rgba color
  e !== "transparent";
}
function Fu(e) {
  const {
    borderTopColor: t,
    borderColor: r,
    backgroundColor: n
  } = getComputedStyle(e);
  return Nr(t) ? t : Nr(r) ? r : Nr(n) ? n : null;
}
function kr(e) {
  return Number.isNaN(e) ? 0 : e;
}
const Vu = (e) => {
  const {
    className: t,
    target: r,
    component: n
  } = e, o = h.useRef(null), [a, i] = h.useState(null), [c, l] = h.useState([]), [s, u] = h.useState(0), [f, d] = h.useState(0), [g, C] = h.useState(0), [m, p] = h.useState(0), [A, E] = h.useState(!1), R = {
    left: s,
    top: f,
    width: g,
    height: m,
    borderRadius: c.map((O) => `${O}px`).join(" ")
  };
  a && (R["--wave-color"] = a);
  function _() {
    const O = getComputedStyle(r);
    i(Fu(r));
    const S = O.position === "static", {
      borderLeftWidth: P,
      borderTopWidth: N
    } = O;
    u(S ? r.offsetLeft : kr(-parseFloat(P))), d(S ? r.offsetTop : kr(-parseFloat(N))), C(r.offsetWidth), p(r.offsetHeight);
    const {
      borderTopLeftRadius: V,
      borderTopRightRadius: G,
      borderBottomLeftRadius: H,
      borderBottomRightRadius: k
    } = O;
    l([V, G, k, H].map((j) => kr(parseFloat(j))));
  }
  if (h.useEffect(() => {
    if (r) {
      const O = We(() => {
        _(), E(!0);
      });
      let S;
      return typeof ResizeObserver < "u" && (S = new ResizeObserver(_), S.observe(r)), () => {
        We.cancel(O), S == null || S.disconnect();
      };
    }
  }, []), !A)
    return null;
  const w = (n === "Checkbox" || n === "Radio") && (r == null ? void 0 : r.classList.contains(gi));
  return /* @__PURE__ */ h.createElement(Fn, {
    visible: !0,
    motionAppear: !0,
    motionName: "wave-motion",
    motionDeadline: 5e3,
    onAppearEnd: (O, S) => {
      var P;
      if (S.deadline || S.propertyName === "opacity") {
        const N = (P = o.current) === null || P === void 0 ? void 0 : P.parentElement;
        ku(N).then(() => {
          N == null || N.remove();
        });
      }
      return !1;
    }
  }, (O, S) => {
    let {
      className: P
    } = O;
    return /* @__PURE__ */ h.createElement("div", {
      ref: $n(o, S),
      className: me(t, P, {
        "wave-quick": w
      }),
      style: R
    });
  });
}, Wu = (e, t) => {
  var r;
  const {
    component: n
  } = t;
  if (n === "Checkbox" && !(!((r = e.querySelector("input")) === null || r === void 0) && r.checked))
    return;
  const o = document.createElement("div");
  o.style.position = "absolute", o.style.left = "0px", o.style.top = "0px", e == null || e.insertBefore(o, e == null ? void 0 : e.firstChild), Iu(/* @__PURE__ */ h.createElement(Vu, Object.assign({}, t, {
    target: e
  })), o);
}, Gu = (e, t, r) => {
  const {
    wave: n
  } = h.useContext(Xe), [, o, a] = ot(), i = cr((s) => {
    const u = e.current;
    if (n != null && n.disabled || !u)
      return;
    const f = u.querySelector(`.${gi}`) || u, {
      showEffect: d
    } = n || {};
    (d || Wu)(f, {
      className: t,
      token: o,
      component: r,
      event: s,
      hashId: a
    });
  }), c = h.useRef();
  return (s) => {
    We.cancel(c.current), c.current = We(() => {
      i(s);
    });
  };
}, hi = (e) => {
  const {
    children: t,
    disabled: r,
    component: n
  } = e, {
    getPrefixCls: o
  } = xe(Xe), a = Ze(null), i = o("wave"), [, c] = Du(i), l = Gu(a, me(i, c), n);
  if (z.useEffect(() => {
    const u = a.current;
    if (!u || u.nodeType !== 1 || r)
      return;
    const f = (d) => {
      !Bu(d.target) || // No need wave
      !u.getAttribute || u.getAttribute("disabled") || u.disabled || u.className.includes("disabled") || u.className.includes("-leave") || l(d);
    };
    return u.addEventListener("click", f, !0), () => {
      u.removeEventListener("click", f, !0);
    };
  }, [r]), !/* @__PURE__ */ z.isValidElement(t))
    return t ?? null;
  const s = Qo(t) ? $n(t.ref, a) : a;
  return di(t, {
    ref: s
  });
};
process.env.NODE_ENV !== "production" && (hi.displayName = "Wave");
const Uu = (e) => {
  const t = z.useContext(vt);
  return z.useMemo(() => e ? typeof e == "string" ? e ?? t : e instanceof Function ? e(t) : t : t, [e, t]);
}, Xu = /* @__PURE__ */ h.createContext(null), qu = (e, t) => {
  const r = h.useContext(Xu), n = h.useMemo(() => {
    if (!r)
      return "";
    const {
      compactDirection: o,
      isFirstItem: a,
      isLastItem: i
    } = r, c = o === "vertical" ? "-vertical-" : "-";
    return me(`${e}-compact${c}item`, {
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
var Ku = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const mi = /* @__PURE__ */ h.createContext(void 0), Yu = (e) => {
  const {
    getPrefixCls: t,
    direction: r
  } = h.useContext(Xe), {
    prefixCls: n,
    size: o,
    className: a
  } = e, i = Ku(e, ["prefixCls", "size", "className"]), c = t("btn-group", n), [, , l] = ot();
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
    const f = ht("Button.Group");
    process.env.NODE_ENV !== "production" && f(!o || ["large", "small", "middle"].includes(o), "usage", "Invalid prop `size`.");
  }
  const u = me(c, {
    [`${c}-${s}`]: s,
    [`${c}-rtl`]: r === "rtl"
  }, a, l);
  return /* @__PURE__ */ h.createElement(mi.Provider, {
    value: o
  }, /* @__PURE__ */ h.createElement("div", Object.assign({}, i, {
    className: u
  })));
}, Do = /^[\u4e00-\u9fa5]{2}$/, An = Do.test.bind(Do);
function zo(e) {
  return typeof e == "string";
}
function Xt(e) {
  return e === "text" || e === "link";
}
function Qu(e, t) {
  if (e == null)
    return;
  const r = t ? " " : "";
  return typeof e != "string" && typeof e != "number" && zo(e.type) && An(e.props.children) ? di(e, {
    children: e.props.children.split("").join(r)
  }) : zo(e) ? An(e) ? /* @__PURE__ */ z.createElement("span", null, e.split("").join(r)) : /* @__PURE__ */ z.createElement("span", null, e) : wu(e) ? /* @__PURE__ */ z.createElement("span", null, e) : e;
}
function Zu(e, t) {
  let r = !1;
  const n = [];
  return z.Children.forEach(e, (o) => {
    const a = typeof o, i = a === "string" || a === "number";
    if (r && i) {
      const c = n.length - 1, l = n[c];
      n[c] = `${l}${o}`;
    } else
      n.push(o);
    r = i;
  }), z.Children.map(n, (o) => Qu(o, t));
}
const bi = /* @__PURE__ */ Wo((e, t) => {
  const {
    className: r,
    style: n,
    children: o,
    prefixCls: a
  } = e, i = me(`${a}-icon`, r);
  return /* @__PURE__ */ z.createElement("span", {
    ref: t,
    className: i,
    style: n
  }, o);
}), Fo = /* @__PURE__ */ Wo((e, t) => {
  const {
    prefixCls: r,
    className: n,
    style: o,
    iconClassName: a
  } = e, i = me(`${r}-loading-icon`, n);
  return /* @__PURE__ */ z.createElement(bi, {
    prefixCls: r,
    className: i,
    style: o,
    ref: t
  }, /* @__PURE__ */ z.createElement(pi, {
    className: a
  }));
}), Br = () => ({
  width: 0,
  opacity: 0,
  transform: "scale(0)"
}), Hr = (e) => ({
  width: e.scrollWidth,
  opacity: 1,
  transform: "scale(1)"
}), Ju = (e) => {
  const {
    prefixCls: t,
    loading: r,
    existIcon: n,
    className: o,
    style: a
  } = e, i = !!r;
  return n ? /* @__PURE__ */ z.createElement(Fo, {
    prefixCls: t,
    className: o,
    style: a
  }) : /* @__PURE__ */ z.createElement(Fn, {
    visible: i,
    // We do not really use this motionName
    motionName: `${t}-loading-icon-motion`,
    motionLeave: i,
    removeOnLeave: !0,
    onAppearStart: Br,
    onAppearActive: Hr,
    onEnterStart: Br,
    onEnterActive: Hr,
    onLeaveStart: Hr,
    onLeaveActive: Br
  }, (c, l) => {
    let {
      className: s,
      style: u
    } = c;
    return /* @__PURE__ */ z.createElement(Fo, {
      prefixCls: t,
      className: o,
      style: Object.assign(Object.assign({}, a), u),
      ref: l,
      iconClassName: s
    });
  });
}, Vo = (e, t) => ({
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
}), ef = (e) => {
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
      Vo(`${t}-primary`, o),
      Vo(`${t}-danger`, a)
    ]
  };
}, yi = (e) => {
  const {
    paddingInline: t,
    onlyIconSize: r,
    paddingBlock: n
  } = e;
  return mt(e, {
    buttonPaddingHorizontal: t,
    buttonPaddingVertical: n,
    buttonIconOnlyFontSize: r
  });
}, Si = (e) => {
  var t, r, n, o, a, i;
  const c = (t = e.contentFontSize) !== null && t !== void 0 ? t : e.fontSize, l = (r = e.contentFontSizeSM) !== null && r !== void 0 ? r : e.fontSize, s = (n = e.contentFontSizeLG) !== null && n !== void 0 ? n : e.fontSizeLG, u = (o = e.contentLineHeight) !== null && o !== void 0 ? o : tr(c), f = (a = e.contentLineHeightSM) !== null && a !== void 0 ? a : tr(l), d = (i = e.contentLineHeightLG) !== null && i !== void 0 ? i : tr(s);
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
}, tf = (e) => {
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
      border: `${Ge(e.lineWidth)} ${e.lineType} transparent`,
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
      "&:not(:disabled)": Object.assign({}, Al(e)),
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
}, je = (e, t, r) => ({
  [`&:not(:disabled):not(${e}-disabled)`]: {
    "&:hover": t,
    "&:active": r
  }
}), rf = (e) => ({
  minWidth: e.controlHeight,
  paddingInlineStart: 0,
  paddingInlineEnd: 0,
  borderRadius: "50%"
}), nf = (e) => ({
  borderRadius: e.controlHeight,
  paddingInlineStart: e.calc(e.controlHeight).div(2).equal(),
  paddingInlineEnd: e.calc(e.controlHeight).div(2).equal()
}), of = (e) => ({
  cursor: "not-allowed",
  borderColor: e.borderColorDisabled,
  color: e.colorTextDisabled,
  background: e.colorBgContainerDisabled,
  boxShadow: "none"
}), jt = (e, t, r, n, o, a, i, c) => ({
  [`&${e}-background-ghost`]: Object.assign(Object.assign({
    color: r || void 0,
    background: t,
    borderColor: n || void 0,
    boxShadow: "none"
  }, je(e, Object.assign({
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
}), Vn = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: Object.assign({}, of(e))
}), Ci = (e) => Object.assign({}, Vn(e)), lr = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: {
    cursor: "not-allowed",
    color: e.colorTextDisabled
  }
}), Ei = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Ci(e)), {
  background: e.defaultBg,
  borderColor: e.defaultBorderColor,
  color: e.defaultColor,
  boxShadow: e.defaultShadow
}), je(e.componentCls, {
  color: e.defaultHoverColor,
  borderColor: e.defaultHoverBorderColor,
  background: e.defaultHoverBg
}, {
  color: e.defaultActiveColor,
  borderColor: e.defaultActiveBorderColor,
  background: e.defaultActiveBg
})), jt(e.componentCls, e.ghostBg, e.defaultGhostColor, e.defaultGhostBorderColor, e.colorTextDisabled, e.colorBorder)), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign(Object.assign({
    color: e.colorError,
    borderColor: e.colorError
  }, je(e.componentCls, {
    color: e.colorErrorHover,
    borderColor: e.colorErrorBorderHover
  }, {
    color: e.colorErrorActive,
    borderColor: e.colorErrorActive
  })), jt(e.componentCls, e.ghostBg, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder)), Vn(e))
}), af = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Ci(e)), {
  color: e.primaryColor,
  background: e.colorPrimary,
  boxShadow: e.primaryShadow
}), je(e.componentCls, {
  color: e.colorTextLightSolid,
  background: e.colorPrimaryHover
}, {
  color: e.colorTextLightSolid,
  background: e.colorPrimaryActive
})), jt(e.componentCls, e.ghostBg, e.colorPrimary, e.colorPrimary, e.colorTextDisabled, e.colorBorder, {
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
  }, je(e.componentCls, {
    background: e.colorErrorHover
  }, {
    background: e.colorErrorActive
  })), jt(e.componentCls, e.ghostBg, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder, {
    color: e.colorErrorHover,
    borderColor: e.colorErrorHover
  }, {
    color: e.colorErrorActive,
    borderColor: e.colorErrorActive
  })), Vn(e))
}), cf = (e) => Object.assign(Object.assign({}, Ei(e)), {
  borderStyle: "dashed"
}), sf = (e) => Object.assign(Object.assign(Object.assign({
  color: e.colorLink
}, je(e.componentCls, {
  color: e.colorLinkHover,
  background: e.linkHoverBg
}, {
  color: e.colorLinkActive
})), lr(e)), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign({
    color: e.colorError
  }, je(e.componentCls, {
    color: e.colorErrorHover
  }, {
    color: e.colorErrorActive
  })), lr(e))
}), lf = (e) => Object.assign(Object.assign(Object.assign({}, je(e.componentCls, {
  color: e.colorText,
  background: e.textHoverBg
}, {
  color: e.colorText,
  background: e.colorBgTextActive
})), lr(e)), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign({
    color: e.colorError
  }, lr(e)), je(e.componentCls, {
    color: e.colorErrorHover,
    background: e.colorErrorBg
  }, {
    color: e.colorErrorHover,
    background: e.colorErrorBgActive
  }))
}), uf = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-default`]: Ei(e),
    [`${t}-primary`]: af(e),
    [`${t}-dashed`]: cf(e),
    [`${t}-link`]: sf(e),
    [`${t}-text`]: lf(e),
    [`${t}-ghost`]: jt(e.componentCls, e.ghostBg, e.colorBgContainer, e.colorBgContainer, e.colorTextDisabled, e.colorBorder)
  };
}, Wn = function(e) {
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
        padding: `${Ge(s)} ${Ge(c)}`,
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
      [`${r}${r}-circle${t}`]: rf(e)
    },
    {
      [`${r}${r}-round${t}`]: nf(e)
    }
  ];
}, ff = (e) => {
  const t = mt(e, {
    fontSize: e.contentFontSize,
    lineHeight: e.contentLineHeight
  });
  return Wn(t, e.componentCls);
}, df = (e) => {
  const t = mt(e, {
    controlHeight: e.controlHeightSM,
    fontSize: e.contentFontSizeSM,
    lineHeight: e.contentLineHeightSM,
    padding: e.paddingXS,
    buttonPaddingHorizontal: e.paddingInlineSM,
    buttonPaddingVertical: e.paddingBlockSM,
    borderRadius: e.borderRadiusSM,
    buttonIconOnlyFontSize: e.onlyIconSizeSM
  });
  return Wn(t, `${e.componentCls}-sm`);
}, pf = (e) => {
  const t = mt(e, {
    controlHeight: e.controlHeightLG,
    fontSize: e.contentFontSizeLG,
    lineHeight: e.contentLineHeightLG,
    buttonPaddingHorizontal: e.paddingInlineLG,
    buttonPaddingVertical: e.paddingBlockLG,
    borderRadius: e.borderRadiusLG,
    buttonIconOnlyFontSize: e.onlyIconSizeLG
  });
  return Wn(t, `${e.componentCls}-lg`);
}, vf = (e) => {
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
}, gf = jl("Button", (e) => {
  const t = yi(e);
  return [
    // Shared
    tf(t),
    // Size
    ff(t),
    df(t),
    pf(t),
    // Block
    vf(t),
    // Group (type, ghost, danger, loading)
    uf(t),
    // Button Group
    ef(t)
  ];
}, Si, {
  unitless: {
    fontWeight: !0,
    contentLineHeight: !0,
    contentLineHeightSM: !0,
    contentLineHeightLG: !0
  }
});
function hf(e, t, r) {
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
function mf(e, t, r) {
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
function bf(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    focus: !0
  };
  const {
    componentCls: r
  } = e, n = `${r}-compact`;
  return {
    [n]: Object.assign(Object.assign({}, hf(e, n, t)), mf(r, n, t))
  };
}
function yf(e, t) {
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
function Sf(e, t) {
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
function Cf(e) {
  const t = `${e.componentCls}-compact-vertical`;
  return {
    [t]: Object.assign(Object.assign({}, yf(e, t)), Sf(e.componentCls, t))
  };
}
const Ef = (e) => {
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
            height: `calc(100% + ${Ge(e.lineWidth)} * 2)`,
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
              width: `calc(100% + ${Ge(e.lineWidth)} * 2)`,
              height: e.lineWidth,
              backgroundColor: e.colorPrimaryHover,
              content: '""'
            }
          }
        }
      }
    }
  };
}, xf = $l(["Button", "compact"], (e) => {
  const t = yi(e);
  return [
    // Space Compact
    bf(t),
    Cf(t),
    Ef(t)
  ];
}, Si);
var wf = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
function Of(e) {
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
const Tf = /* @__PURE__ */ z.forwardRef((e, t) => {
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
    icon: p,
    iconPosition: A = "start",
    ghost: E = !1,
    block: R = !1,
    // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
    htmlType: _ = "button",
    classNames: w,
    style: O = {},
    autoInsertSpace: S
  } = e, P = wf(e, ["loading", "prefixCls", "type", "danger", "shape", "size", "styles", "disabled", "className", "rootClassName", "children", "icon", "iconPosition", "ghost", "block", "htmlType", "classNames", "style", "autoInsertSpace"]), N = c || "default", {
    getPrefixCls: V,
    direction: G,
    button: H
  } = xe(Xe), k = (r = S ?? (H == null ? void 0 : H.autoInsertSpace)) !== null && r !== void 0 ? r : !0, j = V("btn", i), [W, y, v] = gf(j), b = xe(ir), x = d ?? b, $ = xe(mi), T = Gi(() => Of(a), [a]), [I, B] = Yn(T.loading), [q, ne] = Yn(!1), Q = $n(t, /* @__PURE__ */ Xi()), ke = Ui.count(m) === 1 && !p && !Xt(N);
  Je(() => {
    let Y = null;
    T.delay > 0 ? Y = setTimeout(() => {
      Y = null, B(!0);
    }, T.delay) : B(T.loading);
    function ve() {
      Y && (clearTimeout(Y), Y = null);
    }
    return ve;
  }, [T]), Je(() => {
    if (!Q || !Q.current || !k)
      return;
    const Y = Q.current.textContent;
    ke && An(Y) ? q || ne(!0) : q && ne(!1);
  }, [Q]);
  const Be = (Y) => {
    const {
      onClick: ve
    } = e;
    if (I || x) {
      Y.preventDefault();
      return;
    }
    ve == null || ve(Y);
  };
  if (process.env.NODE_ENV !== "production") {
    const Y = ht("Button");
    process.env.NODE_ENV !== "production" && Y(!(typeof p == "string" && p.length > 2), "breaking", `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${p}\` at https://ant.design/components/icon`), process.env.NODE_ENV !== "production" && Y(!(E && Xt(N)), "usage", "`link` or `text` button can't be a `ghost` button.");
  }
  const {
    compactSize: qe,
    compactItemClassnames: we
  } = qu(j, G), pe = {
    large: "lg",
    small: "sm",
    middle: void 0
  }, He = Uu((Y) => {
    var ve, St;
    return (St = (ve = u ?? qe) !== null && ve !== void 0 ? ve : $) !== null && St !== void 0 ? St : Y;
  }), M = He && pe[He] || "", Oe = I ? "loading" : p, te = ic(P, ["navigate"]), Te = me(j, y, v, {
    [`${j}-${s}`]: s !== "default" && s,
    [`${j}-${N}`]: N,
    [`${j}-${M}`]: M,
    [`${j}-icon-only`]: !m && m !== 0 && !!Oe,
    [`${j}-background-ghost`]: E && !Xt(N),
    [`${j}-loading`]: I,
    [`${j}-two-chinese-chars`]: q && k && !I,
    [`${j}-block`]: R,
    [`${j}-dangerous`]: l,
    [`${j}-rtl`]: G === "rtl",
    [`${j}-icon-end`]: A === "end"
  }, we, g, C, H == null ? void 0 : H.className), De = Object.assign(Object.assign({}, H == null ? void 0 : H.style), O), Ke = me(w == null ? void 0 : w.icon, (n = H == null ? void 0 : H.classNames) === null || n === void 0 ? void 0 : n.icon), re = Object.assign(Object.assign({}, (f == null ? void 0 : f.icon) || {}), ((o = H == null ? void 0 : H.styles) === null || o === void 0 ? void 0 : o.icon) || {}), Z = p && !I ? /* @__PURE__ */ z.createElement(bi, {
    prefixCls: j,
    className: Ke,
    style: re
  }, p) : /* @__PURE__ */ z.createElement(Ju, {
    existIcon: !!p,
    prefixCls: j,
    loading: I
  }), se = m || m === 0 ? Zu(m, ke && k) : null;
  if (te.href !== void 0)
    return W(/* @__PURE__ */ z.createElement("a", Object.assign({}, te, {
      className: me(Te, {
        [`${j}-disabled`]: x
      }),
      href: x ? void 0 : te.href,
      style: De,
      onClick: Be,
      ref: Q,
      tabIndex: x ? -1 : 0
    }), Z, se));
  let Se = /* @__PURE__ */ z.createElement("button", Object.assign({}, P, {
    type: _,
    className: Te,
    style: De,
    onClick: Be,
    disabled: x,
    ref: Q
  }), Z, se, !!we && /* @__PURE__ */ z.createElement(xf, {
    key: "compact",
    prefixCls: j
  }));
  return Xt(N) || (Se = /* @__PURE__ */ z.createElement(hi, {
    component: "Button",
    disabled: I
  }, Se)), W(Se);
}), Gn = Tf;
Gn.Group = Yu;
Gn.__ANT_BUTTON = !0;
process.env.NODE_ENV !== "production" && (Gn.displayName = "Button");
const _f = (e, t) => e + t;
export {
  Gn as Button,
  _f as sum
};
