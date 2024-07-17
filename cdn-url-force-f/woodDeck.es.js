import We from "react";
import { Canvas as Sr } from "@react-three/fiber";
function Cr(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var $e = { exports: {} }, c = $e.exports = {}, _, R;
function ue() {
  throw new Error("setTimeout has not been defined");
}
function se() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    typeof setTimeout == "function" ? _ = setTimeout : _ = ue;
  } catch {
    _ = ue;
  }
  try {
    typeof clearTimeout == "function" ? R = clearTimeout : R = se;
  } catch {
    R = se;
  }
})();
function Ye(a) {
  if (_ === setTimeout)
    return setTimeout(a, 0);
  if ((_ === ue || !_) && setTimeout)
    return _ = setTimeout, setTimeout(a, 0);
  try {
    return _(a, 0);
  } catch {
    try {
      return _.call(null, a, 0);
    } catch {
      return _.call(this, a, 0);
    }
  }
}
function jr(a) {
  if (R === clearTimeout)
    return clearTimeout(a);
  if ((R === se || !R) && clearTimeout)
    return R = clearTimeout, clearTimeout(a);
  try {
    return R(a);
  } catch {
    try {
      return R.call(null, a);
    } catch {
      return R.call(this, a);
    }
  }
}
var w = [], L = !1, x, H = -1;
function Pr() {
  !L || !x || (L = !1, x.length ? w = x.concat(w) : H = -1, w.length && Me());
}
function Me() {
  if (!L) {
    var a = Ye(Pr);
    L = !0;
    for (var f = w.length; f; ) {
      for (x = w, w = []; ++H < f; )
        x && x[H].run();
      H = -1, f = w.length;
    }
    x = null, L = !1, jr(a);
  }
}
c.nextTick = function(a) {
  var f = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var b = 1; b < arguments.length; b++)
      f[b - 1] = arguments[b];
  w.push(new Ve(a, f)), w.length === 1 && !L && Ye(Me);
};
function Ve(a, f) {
  this.fun = a, this.array = f;
}
Ve.prototype.run = function() {
  this.fun.apply(null, this.array);
};
c.title = "browser";
c.browser = !0;
c.env = {};
c.argv = [];
c.version = "";
c.versions = {};
function O() {
}
c.on = O;
c.addListener = O;
c.once = O;
c.off = O;
c.removeListener = O;
c.removeAllListeners = O;
c.emit = O;
c.prependListener = O;
c.prependOnceListener = O;
c.listeners = function(a) {
  return [];
};
c.binding = function(a) {
  throw new Error("process.binding is not supported");
};
c.cwd = function() {
  return "/";
};
c.chdir = function(a) {
  throw new Error("process.chdir is not supported");
};
c.umask = function() {
  return 0;
};
var xr = $e.exports;
const Ue = /* @__PURE__ */ Cr(xr), kr = (a, f) => a + f, Dr = (a, f) => a + f;
var le = { exports: {} }, V = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ie;
function Ar() {
  if (Ie) return V;
  Ie = 1;
  var a = We, f = Symbol.for("react.element"), b = Symbol.for("react.fragment"), k = Object.prototype.hasOwnProperty, B = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, q = { key: !0, ref: !0, __self: !0, __source: !0 };
  function W(S, p, D) {
    var g, T = {}, C = null, J = null;
    D !== void 0 && (C = "" + D), p.key !== void 0 && (C = "" + p.key), p.ref !== void 0 && (J = p.ref);
    for (g in p) k.call(p, g) && !q.hasOwnProperty(g) && (T[g] = p[g]);
    if (S && S.defaultProps) for (g in p = S.defaultProps, p) T[g] === void 0 && (T[g] = p[g]);
    return { $$typeof: f, type: S, key: C, ref: J, props: T, _owner: B.current };
  }
  return V.Fragment = b, V.jsx = W, V.jsxs = W, V;
}
var U = {}, Le;
function Fr() {
  return Le || (Le = 1, Ue.env.NODE_ENV !== "production" && function() {
    var a = We, f = Symbol.for("react.element"), b = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), B = Symbol.for("react.strict_mode"), q = Symbol.for("react.profiler"), W = Symbol.for("react.provider"), S = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), D = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), J = Symbol.for("react.offscreen"), ce = Symbol.iterator, Ne = "@@iterator";
    function Be(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = ce && e[ce] || e[Ne];
      return typeof r == "function" ? r : null;
    }
    var A = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        qe("error", e, t);
      }
    }
    function qe(e, r, t) {
      {
        var n = A.ReactDebugCurrentFrame, u = n.getStackAddendum();
        u !== "" && (r += "%s", t = t.concat([u]));
        var s = t.map(function(i) {
          return String(i);
        });
        s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var Je = !1, Ge = !1, Ke = !1, ze = !1, Xe = !1, fe;
    fe = Symbol.for("react.module.reference");
    function He(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === k || e === q || Xe || e === B || e === D || e === g || ze || e === J || Je || Ge || Ke || typeof e == "object" && e !== null && (e.$$typeof === C || e.$$typeof === T || e.$$typeof === W || e.$$typeof === S || e.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === fe || e.getModuleId !== void 0));
    }
    function Qe(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var u = r.displayName || r.name || "";
      return u !== "" ? t + "(" + u + ")" : t;
    }
    function de(e) {
      return e.displayName || "Context";
    }
    function E(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case k:
          return "Fragment";
        case b:
          return "Portal";
        case q:
          return "Profiler";
        case B:
          return "StrictMode";
        case D:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case S:
            var r = e;
            return de(r) + ".Consumer";
          case W:
            var t = e;
            return de(t._context) + ".Provider";
          case p:
            return Qe(e, e.render, "ForwardRef");
          case T:
            var n = e.displayName || null;
            return n !== null ? n : E(e.type) || "Memo";
          case C: {
            var u = e, s = u._payload, i = u._init;
            try {
              return E(i(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var j = Object.assign, $ = 0, ve, pe, he, me, ge, ye, be;
    function Ee() {
    }
    Ee.__reactDisabledLog = !0;
    function Ze() {
      {
        if ($ === 0) {
          ve = console.log, pe = console.info, he = console.warn, me = console.error, ge = console.group, ye = console.groupCollapsed, be = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ee,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        $++;
      }
    }
    function er() {
      {
        if ($--, $ === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: j({}, e, {
              value: ve
            }),
            info: j({}, e, {
              value: pe
            }),
            warn: j({}, e, {
              value: he
            }),
            error: j({}, e, {
              value: me
            }),
            group: j({}, e, {
              value: ge
            }),
            groupCollapsed: j({}, e, {
              value: ye
            }),
            groupEnd: j({}, e, {
              value: be
            })
          });
        }
        $ < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Q = A.ReactCurrentDispatcher, Z;
    function G(e, r, t) {
      {
        if (Z === void 0)
          try {
            throw Error();
          } catch (u) {
            var n = u.stack.trim().match(/\n( *(at )?)/);
            Z = n && n[1] || "";
          }
        return `
` + Z + e;
      }
    }
    var ee = !1, K;
    {
      var rr = typeof WeakMap == "function" ? WeakMap : Map;
      K = new rr();
    }
    function _e(e, r) {
      if (!e || ee)
        return "";
      {
        var t = K.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      ee = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = Q.current, Q.current = null, Ze();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (m) {
              n = m;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (m) {
              n = m;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (m) {
            n = m;
          }
          e();
        }
      } catch (m) {
        if (m && n && typeof m.stack == "string") {
          for (var o = m.stack.split(`
`), h = n.stack.split(`
`), l = o.length - 1, d = h.length - 1; l >= 1 && d >= 0 && o[l] !== h[d]; )
            d--;
          for (; l >= 1 && d >= 0; l--, d--)
            if (o[l] !== h[d]) {
              if (l !== 1 || d !== 1)
                do
                  if (l--, d--, d < 0 || o[l] !== h[d]) {
                    var y = `
` + o[l].replace(" at new ", " at ");
                    return e.displayName && y.includes("<anonymous>") && (y = y.replace("<anonymous>", e.displayName)), typeof e == "function" && K.set(e, y), y;
                  }
                while (l >= 1 && d >= 0);
              break;
            }
        }
      } finally {
        ee = !1, Q.current = s, er(), Error.prepareStackTrace = u;
      }
      var I = e ? e.displayName || e.name : "", P = I ? G(I) : "";
      return typeof e == "function" && K.set(e, P), P;
    }
    function tr(e, r, t) {
      return _e(e, !1);
    }
    function nr(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function z(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return _e(e, nr(e));
      if (typeof e == "string")
        return G(e);
      switch (e) {
        case D:
          return G("Suspense");
        case g:
          return G("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            return tr(e.render);
          case T:
            return z(e.type, r, t);
          case C: {
            var n = e, u = n._payload, s = n._init;
            try {
              return z(s(u), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var Y = Object.prototype.hasOwnProperty, Re = {}, Te = A.ReactDebugCurrentFrame;
    function X(e) {
      if (e) {
        var r = e._owner, t = z(e.type, e._source, r ? r.type : null);
        Te.setExtraStackFrame(t);
      } else
        Te.setExtraStackFrame(null);
    }
    function ar(e, r, t, n, u) {
      {
        var s = Function.call.bind(Y);
        for (var i in e)
          if (s(e, i)) {
            var o = void 0;
            try {
              if (typeof e[i] != "function") {
                var h = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw h.name = "Invariant Violation", h;
              }
              o = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (l) {
              o = l;
            }
            o && !(o instanceof Error) && (X(u), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof o), X(null)), o instanceof Error && !(o.message in Re) && (Re[o.message] = !0, X(u), v("Failed %s type: %s", t, o.message), X(null));
          }
      }
    }
    var or = Array.isArray;
    function re(e) {
      return or(e);
    }
    function ir(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function ur(e) {
      try {
        return we(e), !1;
      } catch {
        return !0;
      }
    }
    function we(e) {
      return "" + e;
    }
    function Oe(e) {
      if (ur(e))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ir(e)), we(e);
    }
    var M = A.ReactCurrentOwner, sr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Se, Ce, te;
    te = {};
    function lr(e) {
      if (Y.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function cr(e) {
      if (Y.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function fr(e, r) {
      if (typeof e.ref == "string" && M.current && r && M.current.stateNode !== r) {
        var t = E(M.current.type);
        te[t] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', E(M.current.type), e.ref), te[t] = !0);
      }
    }
    function dr(e, r) {
      {
        var t = function() {
          Se || (Se = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function vr(e, r) {
      {
        var t = function() {
          Ce || (Ce = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var pr = function(e, r, t, n, u, s, i) {
      var o = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: f,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: s
      };
      return o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(o, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(o, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    };
    function hr(e, r, t, n, u) {
      {
        var s, i = {}, o = null, h = null;
        t !== void 0 && (Oe(t), o = "" + t), cr(r) && (Oe(r.key), o = "" + r.key), lr(r) && (h = r.ref, fr(r, u));
        for (s in r)
          Y.call(r, s) && !sr.hasOwnProperty(s) && (i[s] = r[s]);
        if (e && e.defaultProps) {
          var l = e.defaultProps;
          for (s in l)
            i[s] === void 0 && (i[s] = l[s]);
        }
        if (o || h) {
          var d = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && dr(i, d), h && vr(i, d);
        }
        return pr(e, o, h, u, n, M.current, i);
      }
    }
    var ne = A.ReactCurrentOwner, je = A.ReactDebugCurrentFrame;
    function F(e) {
      if (e) {
        var r = e._owner, t = z(e.type, e._source, r ? r.type : null);
        je.setExtraStackFrame(t);
      } else
        je.setExtraStackFrame(null);
    }
    var ae;
    ae = !1;
    function oe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === f;
    }
    function Pe() {
      {
        if (ne.current) {
          var e = E(ne.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function mr(e) {
      return "";
    }
    var xe = {};
    function gr(e) {
      {
        var r = Pe();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function ke(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = gr(r);
        if (xe[t])
          return;
        xe[t] = !0;
        var n = "";
        e && e._owner && e._owner !== ne.current && (n = " It was passed a child from " + E(e._owner.type) + "."), F(e), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), F(null);
      }
    }
    function De(e, r) {
      {
        if (typeof e != "object")
          return;
        if (re(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            oe(n) && ke(n, r);
          }
        else if (oe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var u = Be(e);
          if (typeof u == "function" && u !== e.entries)
            for (var s = u.call(e), i; !(i = s.next()).done; )
              oe(i.value) && ke(i.value, r);
        }
      }
    }
    function yr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === p || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === T))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = E(r);
          ar(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !ae) {
          ae = !0;
          var u = E(r);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", u || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function br(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            F(e), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), F(null);
            break;
          }
        }
        e.ref !== null && (F(e), v("Invalid attribute `ref` supplied to `React.Fragment`."), F(null));
      }
    }
    var Ae = {};
    function Fe(e, r, t, n, u, s) {
      {
        var i = He(e);
        if (!i) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var h = mr();
          h ? o += h : o += Pe();
          var l;
          e === null ? l = "null" : re(e) ? l = "array" : e !== void 0 && e.$$typeof === f ? (l = "<" + (E(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : l = typeof e, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", l, o);
        }
        var d = hr(e, r, t, u, s);
        if (d == null)
          return d;
        if (i) {
          var y = r.children;
          if (y !== void 0)
            if (n)
              if (re(y)) {
                for (var I = 0; I < y.length; I++)
                  De(y[I], e);
                Object.freeze && Object.freeze(y);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              De(y, e);
        }
        if (Y.call(r, "key")) {
          var P = E(e), m = Object.keys(r).filter(function(Or) {
            return Or !== "key";
          }), ie = m.length > 0 ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ae[P + ie]) {
            var wr = m.length > 0 ? "{" + m.join(": ..., ") + ": ...}" : "{}";
            v(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ie, P, wr, P), Ae[P + ie] = !0;
          }
        }
        return e === k ? br(d) : yr(d), d;
      }
    }
    function Er(e, r, t) {
      return Fe(e, r, t, !0);
    }
    function _r(e, r, t) {
      return Fe(e, r, t, !1);
    }
    var Rr = _r, Tr = Er;
    U.Fragment = k, U.jsx = Rr, U.jsxs = Tr;
  }()), U;
}
Ue.env.NODE_ENV === "production" ? le.exports = Ar() : le.exports = Fr();
var N = le.exports;
function Ir() {
  return /* @__PURE__ */ N.jsxs(Sr, { children: [
    /* @__PURE__ */ N.jsx("ambientLight", {}),
    /* @__PURE__ */ N.jsxs("mesh", { children: [
      /* @__PURE__ */ N.jsx("boxGeometry", { args: [1, 1, 1] }),
      /* @__PURE__ */ N.jsx("meshStandardMaterial", { color: "hotpink" })
    ] })
  ] });
}
window.process = {
  env: {
    NODE_ENV: "production"
  }
};
window.webGDL = {
  add: Dr,
  sum: kr,
  Button: Ir
};
