import $e from "react";
function Cr(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var Le = { exports: {} }, c = Le.exports = {}, _, R;
function ie() {
  throw new Error("setTimeout has not been defined");
}
function ue() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    typeof setTimeout == "function" ? _ = setTimeout : _ = ie;
  } catch {
    _ = ie;
  }
  try {
    typeof clearTimeout == "function" ? R = clearTimeout : R = ue;
  } catch {
    R = ue;
  }
})();
function Ye(o) {
  if (_ === setTimeout)
    return setTimeout(o, 0);
  if ((_ === ie || !_) && setTimeout)
    return _ = setTimeout, setTimeout(o, 0);
  try {
    return _(o, 0);
  } catch {
    try {
      return _.call(null, o, 0);
    } catch {
      return _.call(this, o, 0);
    }
  }
}
function Sr(o) {
  if (R === clearTimeout)
    return clearTimeout(o);
  if ((R === ue || !R) && clearTimeout)
    return R = clearTimeout, clearTimeout(o);
  try {
    return R(o);
  } catch {
    try {
      return R.call(null, o);
    } catch {
      return R.call(this, o);
    }
  }
}
var w = [], W = !1, x, X = -1;
function Pr() {
  !W || !x || (W = !1, x.length ? w = x.concat(w) : X = -1, w.length && Me());
}
function Me() {
  if (!W) {
    var o = Ye(Pr);
    W = !0;
    for (var d = w.length; d; ) {
      for (x = w, w = []; ++X < d; )
        x && x[X].run();
      X = -1, d = w.length;
    }
    x = null, W = !1, Sr(o);
  }
}
c.nextTick = function(o) {
  var d = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var b = 1; b < arguments.length; b++)
      d[b - 1] = arguments[b];
  w.push(new Ve(o, d)), w.length === 1 && !W && Ye(Me);
};
function Ve(o, d) {
  this.fun = o, this.array = d;
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
c.listeners = function(o) {
  return [];
};
c.binding = function(o) {
  throw new Error("process.binding is not supported");
};
c.cwd = function() {
  return "/";
};
c.chdir = function(o) {
  throw new Error("process.chdir is not supported");
};
c.umask = function() {
  return 0;
};
var jr = Le.exports;
const Ue = /* @__PURE__ */ Cr(jr), xr = (o, d) => o + d;
var se = { exports: {} }, V = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fe;
function kr() {
  if (Fe) return V;
  Fe = 1;
  var o = $e, d = Symbol.for("react.element"), b = Symbol.for("react.fragment"), k = Object.prototype.hasOwnProperty, N = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, B = { key: !0, ref: !0, __self: !0, __source: !0 };
  function $(C, p, D) {
    var m, T = {}, S = null, q = null;
    D !== void 0 && (S = "" + D), p.key !== void 0 && (S = "" + p.key), p.ref !== void 0 && (q = p.ref);
    for (m in p) k.call(p, m) && !B.hasOwnProperty(m) && (T[m] = p[m]);
    if (C && C.defaultProps) for (m in p = C.defaultProps, p) T[m] === void 0 && (T[m] = p[m]);
    return { $$typeof: d, type: C, key: S, ref: q, props: T, _owner: N.current };
  }
  return V.Fragment = b, V.jsx = $, V.jsxs = $, V;
}
var U = {}, Ie;
function Dr() {
  return Ie || (Ie = 1, Ue.env.NODE_ENV !== "production" && function() {
    var o = $e, d = Symbol.for("react.element"), b = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), N = Symbol.for("react.strict_mode"), B = Symbol.for("react.profiler"), $ = Symbol.for("react.provider"), C = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), D = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), q = Symbol.for("react.offscreen"), le = Symbol.iterator, Ne = "@@iterator";
    function Be(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = le && e[le] || e[Ne];
      return typeof r == "function" ? r : null;
    }
    var A = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
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
    var Je = !1, Ke = !1, Ge = !1, ze = !1, Xe = !1, ce;
    ce = Symbol.for("react.module.reference");
    function He(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === k || e === B || Xe || e === N || e === D || e === m || ze || e === q || Je || Ke || Ge || typeof e == "object" && e !== null && (e.$$typeof === S || e.$$typeof === T || e.$$typeof === $ || e.$$typeof === C || e.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ce || e.getModuleId !== void 0));
    }
    function Qe(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var u = r.displayName || r.name || "";
      return u !== "" ? t + "(" + u + ")" : t;
    }
    function fe(e) {
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
        case B:
          return "Profiler";
        case N:
          return "StrictMode";
        case D:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case C:
            var r = e;
            return fe(r) + ".Consumer";
          case $:
            var t = e;
            return fe(t._context) + ".Provider";
          case p:
            return Qe(e, e.render, "ForwardRef");
          case T:
            var n = e.displayName || null;
            return n !== null ? n : E(e.type) || "Memo";
          case S: {
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
    var P = Object.assign, L = 0, de, ve, pe, he, ge, me, ye;
    function be() {
    }
    be.__reactDisabledLog = !0;
    function Ze() {
      {
        if (L === 0) {
          de = console.log, ve = console.info, pe = console.warn, he = console.error, ge = console.group, me = console.groupCollapsed, ye = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: be,
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
        L++;
      }
    }
    function er() {
      {
        if (L--, L === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, e, {
              value: de
            }),
            info: P({}, e, {
              value: ve
            }),
            warn: P({}, e, {
              value: pe
            }),
            error: P({}, e, {
              value: he
            }),
            group: P({}, e, {
              value: ge
            }),
            groupCollapsed: P({}, e, {
              value: me
            }),
            groupEnd: P({}, e, {
              value: ye
            })
          });
        }
        L < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var H = A.ReactCurrentDispatcher, Q;
    function J(e, r, t) {
      {
        if (Q === void 0)
          try {
            throw Error();
          } catch (u) {
            var n = u.stack.trim().match(/\n( *(at )?)/);
            Q = n && n[1] || "";
          }
        return `
` + Q + e;
      }
    }
    var Z = !1, K;
    {
      var rr = typeof WeakMap == "function" ? WeakMap : Map;
      K = new rr();
    }
    function Ee(e, r) {
      if (!e || Z)
        return "";
      {
        var t = K.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      Z = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = H.current, H.current = null, Ze();
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
            } catch (g) {
              n = g;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (g) {
              n = g;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (g) {
            n = g;
          }
          e();
        }
      } catch (g) {
        if (g && n && typeof g.stack == "string") {
          for (var a = g.stack.split(`
`), h = n.stack.split(`
`), l = a.length - 1, f = h.length - 1; l >= 1 && f >= 0 && a[l] !== h[f]; )
            f--;
          for (; l >= 1 && f >= 0; l--, f--)
            if (a[l] !== h[f]) {
              if (l !== 1 || f !== 1)
                do
                  if (l--, f--, f < 0 || a[l] !== h[f]) {
                    var y = `
` + a[l].replace(" at new ", " at ");
                    return e.displayName && y.includes("<anonymous>") && (y = y.replace("<anonymous>", e.displayName)), typeof e == "function" && K.set(e, y), y;
                  }
                while (l >= 1 && f >= 0);
              break;
            }
        }
      } finally {
        Z = !1, H.current = s, er(), Error.prepareStackTrace = u;
      }
      var I = e ? e.displayName || e.name : "", j = I ? J(I) : "";
      return typeof e == "function" && K.set(e, j), j;
    }
    function tr(e, r, t) {
      return Ee(e, !1);
    }
    function nr(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function G(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ee(e, nr(e));
      if (typeof e == "string")
        return J(e);
      switch (e) {
        case D:
          return J("Suspense");
        case m:
          return J("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            return tr(e.render);
          case T:
            return G(e.type, r, t);
          case S: {
            var n = e, u = n._payload, s = n._init;
            try {
              return G(s(u), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var Y = Object.prototype.hasOwnProperty, _e = {}, Re = A.ReactDebugCurrentFrame;
    function z(e) {
      if (e) {
        var r = e._owner, t = G(e.type, e._source, r ? r.type : null);
        Re.setExtraStackFrame(t);
      } else
        Re.setExtraStackFrame(null);
    }
    function ar(e, r, t, n, u) {
      {
        var s = Function.call.bind(Y);
        for (var i in e)
          if (s(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var h = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw h.name = "Invariant Violation", h;
              }
              a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (l) {
              a = l;
            }
            a && !(a instanceof Error) && (z(u), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), z(null)), a instanceof Error && !(a.message in _e) && (_e[a.message] = !0, z(u), v("Failed %s type: %s", t, a.message), z(null));
          }
      }
    }
    var or = Array.isArray;
    function ee(e) {
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
        return Te(e), !1;
      } catch {
        return !0;
      }
    }
    function Te(e) {
      return "" + e;
    }
    function we(e) {
      if (ur(e))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ir(e)), Te(e);
    }
    var M = A.ReactCurrentOwner, sr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Oe, Ce, re;
    re = {};
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
        re[t] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', E(M.current.type), e.ref), re[t] = !0);
      }
    }
    function dr(e, r) {
      {
        var t = function() {
          Oe || (Oe = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: d,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: s
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function hr(e, r, t, n, u) {
      {
        var s, i = {}, a = null, h = null;
        t !== void 0 && (we(t), a = "" + t), cr(r) && (we(r.key), a = "" + r.key), lr(r) && (h = r.ref, fr(r, u));
        for (s in r)
          Y.call(r, s) && !sr.hasOwnProperty(s) && (i[s] = r[s]);
        if (e && e.defaultProps) {
          var l = e.defaultProps;
          for (s in l)
            i[s] === void 0 && (i[s] = l[s]);
        }
        if (a || h) {
          var f = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && dr(i, f), h && vr(i, f);
        }
        return pr(e, a, h, u, n, M.current, i);
      }
    }
    var te = A.ReactCurrentOwner, Se = A.ReactDebugCurrentFrame;
    function F(e) {
      if (e) {
        var r = e._owner, t = G(e.type, e._source, r ? r.type : null);
        Se.setExtraStackFrame(t);
      } else
        Se.setExtraStackFrame(null);
    }
    var ne;
    ne = !1;
    function ae(e) {
      return typeof e == "object" && e !== null && e.$$typeof === d;
    }
    function Pe() {
      {
        if (te.current) {
          var e = E(te.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function gr(e) {
      return "";
    }
    var je = {};
    function mr(e) {
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
    function xe(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = mr(r);
        if (je[t])
          return;
        je[t] = !0;
        var n = "";
        e && e._owner && e._owner !== te.current && (n = " It was passed a child from " + E(e._owner.type) + "."), F(e), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), F(null);
      }
    }
    function ke(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ee(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            ae(n) && xe(n, r);
          }
        else if (ae(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var u = Be(e);
          if (typeof u == "function" && u !== e.entries)
            for (var s = u.call(e), i; !(i = s.next()).done; )
              ae(i.value) && xe(i.value, r);
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
        } else if (r.PropTypes !== void 0 && !ne) {
          ne = !0;
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
    var De = {};
    function Ae(e, r, t, n, u, s) {
      {
        var i = He(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var h = gr();
          h ? a += h : a += Pe();
          var l;
          e === null ? l = "null" : ee(e) ? l = "array" : e !== void 0 && e.$$typeof === d ? (l = "<" + (E(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : l = typeof e, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", l, a);
        }
        var f = hr(e, r, t, u, s);
        if (f == null)
          return f;
        if (i) {
          var y = r.children;
          if (y !== void 0)
            if (n)
              if (ee(y)) {
                for (var I = 0; I < y.length; I++)
                  ke(y[I], e);
                Object.freeze && Object.freeze(y);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ke(y, e);
        }
        if (Y.call(r, "key")) {
          var j = E(e), g = Object.keys(r).filter(function(Or) {
            return Or !== "key";
          }), oe = g.length > 0 ? "{key: someKey, " + g.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!De[j + oe]) {
            var wr = g.length > 0 ? "{" + g.join(": ..., ") + ": ...}" : "{}";
            v(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, oe, j, wr, j), De[j + oe] = !0;
          }
        }
        return e === k ? br(f) : yr(f), f;
      }
    }
    function Er(e, r, t) {
      return Ae(e, r, t, !0);
    }
    function _r(e, r, t) {
      return Ae(e, r, t, !1);
    }
    var Rr = _r, Tr = Er;
    U.Fragment = k, U.jsx = Rr, U.jsxs = Tr;
  }()), U;
}
Ue.env.NODE_ENV === "production" ? se.exports = kr() : se.exports = Dr();
var We = se.exports;
const Ar = () => /* @__PURE__ */ We.jsx("div", { children: /* @__PURE__ */ We.jsx("h1", { children: "Hello from MyComponent!" }) });
window.process = {
  env: {
    NODE_ENV: "production"
  }
};
window.webGDL = {
  sum: xr,
  Button: Ar
};
