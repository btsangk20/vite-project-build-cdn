(function (b, E) {
  typeof exports == 'object' && typeof module < 'u'
    ? (module.exports = E(require('react')))
    : typeof define == 'function' && define.amd
    ? define(['react'], E)
    : ((b = typeof globalThis < 'u' ? globalThis : b || self),
      (b.WoodDeck = E(b.React)));
})(this, function (b) {
  'use strict';
  var E = { exports: {} },
    j = {};
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var ee;
  function Pe() {
    if (ee) return j;
    ee = 1;
    var N = b,
      k = Symbol.for('react.element'),
      B = Symbol.for('react.fragment'),
      O = Object.prototype.hasOwnProperty,
      W =
        N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
      Y = { key: !0, ref: !0, __self: !0, __source: !0 };
    function D(R, c, S) {
      var p,
        g = {},
        _ = null,
        $ = null;
      S !== void 0 && (_ = '' + S),
        c.key !== void 0 && (_ = '' + c.key),
        c.ref !== void 0 && ($ = c.ref);
      for (p in c) O.call(c, p) && !Y.hasOwnProperty(p) && (g[p] = c[p]);
      if (R && R.defaultProps)
        for (p in ((c = R.defaultProps), c)) g[p] === void 0 && (g[p] = c[p]);
      return {
        $$typeof: k,
        type: R,
        key: _,
        ref: $,
        props: g,
        _owner: W.current,
      };
    }
    return (j.Fragment = B), (j.jsx = D), (j.jsxs = D), j;
  }
  var x = {};
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var re;
  function je() {
    return (
      re ||
        ((re = 1),
        process.env.NODE_ENV !== 'production' &&
          (function () {
            var N = b,
              k = Symbol.for('react.element'),
              B = Symbol.for('react.portal'),
              O = Symbol.for('react.fragment'),
              W = Symbol.for('react.strict_mode'),
              Y = Symbol.for('react.profiler'),
              D = Symbol.for('react.provider'),
              R = Symbol.for('react.context'),
              c = Symbol.for('react.forward_ref'),
              S = Symbol.for('react.suspense'),
              p = Symbol.for('react.suspense_list'),
              g = Symbol.for('react.memo'),
              _ = Symbol.for('react.lazy'),
              $ = Symbol.for('react.offscreen'),
              ne = Symbol.iterator,
              xe = '@@iterator';
            function ke(e) {
              if (e === null || typeof e != 'object') return null;
              var r = (ne && e[ne]) || e[xe];
              return typeof r == 'function' ? r : null;
            }
            var C = N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
            function l(e) {
              {
                for (
                  var r = arguments.length,
                    t = new Array(r > 1 ? r - 1 : 0),
                    n = 1;
                  n < r;
                  n++
                )
                  t[n - 1] = arguments[n];
                De('error', e, t);
              }
            }
            function De(e, r, t) {
              {
                var n = C.ReactDebugCurrentFrame,
                  i = n.getStackAddendum();
                i !== '' && ((r += '%s'), (t = t.concat([i])));
                var u = t.map(function (o) {
                  return String(o);
                });
                u.unshift('Warning: ' + r),
                  Function.prototype.apply.call(console[e], console, u);
              }
            }
            var Fe = !1,
              Ae = !1,
              Ie = !1,
              We = !1,
              Ye = !1,
              ae;
            ae = Symbol.for('react.module.reference');
            function $e(e) {
              return !!(
                typeof e == 'string' ||
                typeof e == 'function' ||
                e === O ||
                e === Y ||
                Ye ||
                e === W ||
                e === S ||
                e === p ||
                We ||
                e === $ ||
                Fe ||
                Ae ||
                Ie ||
                (typeof e == 'object' &&
                  e !== null &&
                  (e.$$typeof === _ ||
                    e.$$typeof === g ||
                    e.$$typeof === D ||
                    e.$$typeof === R ||
                    e.$$typeof === c ||
                    e.$$typeof === ae ||
                    e.getModuleId !== void 0))
              );
            }
            function Le(e, r, t) {
              var n = e.displayName;
              if (n) return n;
              var i = r.displayName || r.name || '';
              return i !== '' ? t + '(' + i + ')' : t;
            }
            function oe(e) {
              return e.displayName || 'Context';
            }
            function h(e) {
              if (e == null) return null;
              if (
                (typeof e.tag == 'number' &&
                  l(
                    'Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.',
                  ),
                typeof e == 'function')
              )
                return e.displayName || e.name || null;
              if (typeof e == 'string') return e;
              switch (e) {
                case O:
                  return 'Fragment';
                case B:
                  return 'Portal';
                case Y:
                  return 'Profiler';
                case W:
                  return 'StrictMode';
                case S:
                  return 'Suspense';
                case p:
                  return 'SuspenseList';
              }
              if (typeof e == 'object')
                switch (e.$$typeof) {
                  case R:
                    var r = e;
                    return oe(r) + '.Consumer';
                  case D:
                    var t = e;
                    return oe(t._context) + '.Provider';
                  case c:
                    return Le(e, e.render, 'ForwardRef');
                  case g:
                    var n = e.displayName || null;
                    return n !== null ? n : h(e.type) || 'Memo';
                  case _: {
                    var i = e,
                      u = i._payload,
                      o = i._init;
                    try {
                      return h(o(u));
                    } catch {
                      return null;
                    }
                  }
                }
              return null;
            }
            var m = Object.assign,
              F = 0,
              ie,
              ue,
              se,
              fe,
              le,
              ce,
              de;
            function ve() {}
            ve.__reactDisabledLog = !0;
            function Me() {
              {
                if (F === 0) {
                  (ie = console.log),
                    (ue = console.info),
                    (se = console.warn),
                    (fe = console.error),
                    (le = console.group),
                    (ce = console.groupCollapsed),
                    (de = console.groupEnd);
                  var e = {
                    configurable: !0,
                    enumerable: !0,
                    value: ve,
                    writable: !0,
                  };
                  Object.defineProperties(console, {
                    info: e,
                    log: e,
                    warn: e,
                    error: e,
                    group: e,
                    groupCollapsed: e,
                    groupEnd: e,
                  });
                }
                F++;
              }
            }
            function Ve() {
              {
                if ((F--, F === 0)) {
                  var e = { configurable: !0, enumerable: !0, writable: !0 };
                  Object.defineProperties(console, {
                    log: m({}, e, { value: ie }),
                    info: m({}, e, { value: ue }),
                    warn: m({}, e, { value: se }),
                    error: m({}, e, { value: fe }),
                    group: m({}, e, { value: le }),
                    groupCollapsed: m({}, e, { value: ce }),
                    groupEnd: m({}, e, { value: de }),
                  });
                }
                F < 0 &&
                  l(
                    'disabledDepth fell below zero. This is a bug in React. Please file an issue.',
                  );
              }
            }
            var J = C.ReactCurrentDispatcher,
              K;
            function L(e, r, t) {
              {
                if (K === void 0)
                  try {
                    throw Error();
                  } catch (i) {
                    var n = i.stack.trim().match(/\n( *(at )?)/);
                    K = (n && n[1]) || '';
                  }
                return (
                  `
` +
                  K +
                  e
                );
              }
            }
            var q = !1,
              M;
            {
              var Ue = typeof WeakMap == 'function' ? WeakMap : Map;
              M = new Ue();
            }
            function pe(e, r) {
              if (!e || q) return '';
              {
                var t = M.get(e);
                if (t !== void 0) return t;
              }
              var n;
              q = !0;
              var i = Error.prepareStackTrace;
              Error.prepareStackTrace = void 0;
              var u;
              (u = J.current), (J.current = null), Me();
              try {
                if (r) {
                  var o = function () {
                    throw Error();
                  };
                  if (
                    (Object.defineProperty(o.prototype, 'props', {
                      set: function () {
                        throw Error();
                      },
                    }),
                    typeof Reflect == 'object' && Reflect.construct)
                  ) {
                    try {
                      Reflect.construct(o, []);
                    } catch (v) {
                      n = v;
                    }
                    Reflect.construct(e, [], o);
                  } else {
                    try {
                      o.call();
                    } catch (v) {
                      n = v;
                    }
                    e.call(o.prototype);
                  }
                } else {
                  try {
                    throw Error();
                  } catch (v) {
                    n = v;
                  }
                  e();
                }
              } catch (v) {
                if (v && n && typeof v.stack == 'string') {
                  for (
                    var a = v.stack.split(`
`),
                      d = n.stack.split(`
`),
                      s = a.length - 1,
                      f = d.length - 1;
                    s >= 1 && f >= 0 && a[s] !== d[f];

                  )
                    f--;
                  for (; s >= 1 && f >= 0; s--, f--)
                    if (a[s] !== d[f]) {
                      if (s !== 1 || f !== 1)
                        do
                          if ((s--, f--, f < 0 || a[s] !== d[f])) {
                            var y =
                              `
` + a[s].replace(' at new ', ' at ');
                            return (
                              e.displayName &&
                                y.includes('<anonymous>') &&
                                (y = y.replace('<anonymous>', e.displayName)),
                              typeof e == 'function' && M.set(e, y),
                              y
                            );
                          }
                        while (s >= 1 && f >= 0);
                      break;
                    }
                }
              } finally {
                (q = !1), (J.current = u), Ve(), (Error.prepareStackTrace = i);
              }
              var P = e ? e.displayName || e.name : '',
                T = P ? L(P) : '';
              return typeof e == 'function' && M.set(e, T), T;
            }
            function Ne(e, r, t) {
              return pe(e, !1);
            }
            function Be(e) {
              var r = e.prototype;
              return !!(r && r.isReactComponent);
            }
            function V(e, r, t) {
              if (e == null) return '';
              if (typeof e == 'function') return pe(e, Be(e));
              if (typeof e == 'string') return L(e);
              switch (e) {
                case S:
                  return L('Suspense');
                case p:
                  return L('SuspenseList');
              }
              if (typeof e == 'object')
                switch (e.$$typeof) {
                  case c:
                    return Ne(e.render);
                  case g:
                    return V(e.type, r, t);
                  case _: {
                    var n = e,
                      i = n._payload,
                      u = n._init;
                    try {
                      return V(u(i), r, t);
                    } catch {}
                  }
                }
              return '';
            }
            var A = Object.prototype.hasOwnProperty,
              ye = {},
              he = C.ReactDebugCurrentFrame;
            function U(e) {
              if (e) {
                var r = e._owner,
                  t = V(e.type, e._source, r ? r.type : null);
                he.setExtraStackFrame(t);
              } else he.setExtraStackFrame(null);
            }
            function Je(e, r, t, n, i) {
              {
                var u = Function.call.bind(A);
                for (var o in e)
                  if (u(e, o)) {
                    var a = void 0;
                    try {
                      if (typeof e[o] != 'function') {
                        var d = Error(
                          (n || 'React class') +
                            ': ' +
                            t +
                            ' type `' +
                            o +
                            '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                            typeof e[o] +
                            '`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.',
                        );
                        throw ((d.name = 'Invariant Violation'), d);
                      }
                      a = e[o](
                        r,
                        o,
                        n,
                        t,
                        null,
                        'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
                      );
                    } catch (s) {
                      a = s;
                    }
                    a &&
                      !(a instanceof Error) &&
                      (U(i),
                      l(
                        '%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
                        n || 'React class',
                        t,
                        o,
                        typeof a,
                      ),
                      U(null)),
                      a instanceof Error &&
                        !(a.message in ye) &&
                        ((ye[a.message] = !0),
                        U(i),
                        l('Failed %s type: %s', t, a.message),
                        U(null));
                  }
              }
            }
            var Ke = Array.isArray;
            function G(e) {
              return Ke(e);
            }
            function qe(e) {
              {
                var r = typeof Symbol == 'function' && Symbol.toStringTag,
                  t =
                    (r && e[Symbol.toStringTag]) ||
                    e.constructor.name ||
                    'Object';
                return t;
              }
            }
            function Ge(e) {
              try {
                return ge(e), !1;
              } catch {
                return !0;
              }
            }
            function ge(e) {
              return '' + e;
            }
            function be(e) {
              if (Ge(e))
                return (
                  l(
                    'The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.',
                    qe(e),
                  ),
                  ge(e)
                );
            }
            var I = C.ReactCurrentOwner,
              ze = { key: !0, ref: !0, __self: !0, __source: !0 },
              Ee,
              Re,
              z;
            z = {};
            function Xe(e) {
              if (A.call(e, 'ref')) {
                var r = Object.getOwnPropertyDescriptor(e, 'ref').get;
                if (r && r.isReactWarning) return !1;
              }
              return e.ref !== void 0;
            }
            function He(e) {
              if (A.call(e, 'key')) {
                var r = Object.getOwnPropertyDescriptor(e, 'key').get;
                if (r && r.isReactWarning) return !1;
              }
              return e.key !== void 0;
            }
            function Ze(e, r) {
              if (
                typeof e.ref == 'string' &&
                I.current &&
                r &&
                I.current.stateNode !== r
              ) {
                var t = h(I.current.type);
                z[t] ||
                  (l(
                    'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
                    h(I.current.type),
                    e.ref,
                  ),
                  (z[t] = !0));
              }
            }
            function Qe(e, r) {
              {
                var t = function () {
                  Ee ||
                    ((Ee = !0),
                    l(
                      '%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
                      r,
                    ));
                };
                (t.isReactWarning = !0),
                  Object.defineProperty(e, 'key', { get: t, configurable: !0 });
              }
            }
            function er(e, r) {
              {
                var t = function () {
                  Re ||
                    ((Re = !0),
                    l(
                      '%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
                      r,
                    ));
                };
                (t.isReactWarning = !0),
                  Object.defineProperty(e, 'ref', { get: t, configurable: !0 });
              }
            }
            var rr = function (e, r, t, n, i, u, o) {
              var a = {
                $$typeof: k,
                type: e,
                key: r,
                ref: t,
                props: o,
                _owner: u,
              };
              return (
                (a._store = {}),
                Object.defineProperty(a._store, 'validated', {
                  configurable: !1,
                  enumerable: !1,
                  writable: !0,
                  value: !1,
                }),
                Object.defineProperty(a, '_self', {
                  configurable: !1,
                  enumerable: !1,
                  writable: !1,
                  value: n,
                }),
                Object.defineProperty(a, '_source', {
                  configurable: !1,
                  enumerable: !1,
                  writable: !1,
                  value: i,
                }),
                Object.freeze && (Object.freeze(a.props), Object.freeze(a)),
                a
              );
            };
            function tr(e, r, t, n, i) {
              {
                var u,
                  o = {},
                  a = null,
                  d = null;
                t !== void 0 && (be(t), (a = '' + t)),
                  He(r) && (be(r.key), (a = '' + r.key)),
                  Xe(r) && ((d = r.ref), Ze(r, i));
                for (u in r)
                  A.call(r, u) && !ze.hasOwnProperty(u) && (o[u] = r[u]);
                if (e && e.defaultProps) {
                  var s = e.defaultProps;
                  for (u in s) o[u] === void 0 && (o[u] = s[u]);
                }
                if (a || d) {
                  var f =
                    typeof e == 'function'
                      ? e.displayName || e.name || 'Unknown'
                      : e;
                  a && Qe(o, f), d && er(o, f);
                }
                return rr(e, a, d, i, n, I.current, o);
              }
            }
            var X = C.ReactCurrentOwner,
              _e = C.ReactDebugCurrentFrame;
            function w(e) {
              if (e) {
                var r = e._owner,
                  t = V(e.type, e._source, r ? r.type : null);
                _e.setExtraStackFrame(t);
              } else _e.setExtraStackFrame(null);
            }
            var H;
            H = !1;
            function Z(e) {
              return typeof e == 'object' && e !== null && e.$$typeof === k;
            }
            function me() {
              {
                if (X.current) {
                  var e = h(X.current.type);
                  if (e)
                    return (
                      `

Check the render method of \`` +
                      e +
                      '`.'
                    );
                }
                return '';
              }
            }
            function nr(e) {
              return '';
            }
            var Te = {};
            function ar(e) {
              {
                var r = me();
                if (!r) {
                  var t = typeof e == 'string' ? e : e.displayName || e.name;
                  t &&
                    (r =
                      `

Check the top-level render call using <` +
                      t +
                      '>.');
                }
                return r;
              }
            }
            function Oe(e, r) {
              {
                if (!e._store || e._store.validated || e.key != null) return;
                e._store.validated = !0;
                var t = ar(r);
                if (Te[t]) return;
                Te[t] = !0;
                var n = '';
                e &&
                  e._owner &&
                  e._owner !== X.current &&
                  (n = ' It was passed a child from ' + h(e._owner.type) + '.'),
                  w(e),
                  l(
                    'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
                    t,
                    n,
                  ),
                  w(null);
              }
            }
            function Se(e, r) {
              {
                if (typeof e != 'object') return;
                if (G(e))
                  for (var t = 0; t < e.length; t++) {
                    var n = e[t];
                    Z(n) && Oe(n, r);
                  }
                else if (Z(e)) e._store && (e._store.validated = !0);
                else if (e) {
                  var i = ke(e);
                  if (typeof i == 'function' && i !== e.entries)
                    for (var u = i.call(e), o; !(o = u.next()).done; )
                      Z(o.value) && Oe(o.value, r);
                }
              }
            }
            function or(e) {
              {
                var r = e.type;
                if (r == null || typeof r == 'string') return;
                var t;
                if (typeof r == 'function') t = r.propTypes;
                else if (
                  typeof r == 'object' &&
                  (r.$$typeof === c || r.$$typeof === g)
                )
                  t = r.propTypes;
                else return;
                if (t) {
                  var n = h(r);
                  Je(t, e.props, 'prop', n, e);
                } else if (r.PropTypes !== void 0 && !H) {
                  H = !0;
                  var i = h(r);
                  l(
                    'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?',
                    i || 'Unknown',
                  );
                }
                typeof r.getDefaultProps == 'function' &&
                  !r.getDefaultProps.isReactClassApproved &&
                  l(
                    'getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.',
                  );
              }
            }
            function ir(e) {
              {
                for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
                  var n = r[t];
                  if (n !== 'children' && n !== 'key') {
                    w(e),
                      l(
                        'Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.',
                        n,
                      ),
                      w(null);
                    break;
                  }
                }
                e.ref !== null &&
                  (w(e),
                  l('Invalid attribute `ref` supplied to `React.Fragment`.'),
                  w(null));
              }
            }
            var Ce = {};
            function we(e, r, t, n, i, u) {
              {
                var o = $e(e);
                if (!o) {
                  var a = '';
                  (e === void 0 ||
                    (typeof e == 'object' &&
                      e !== null &&
                      Object.keys(e).length === 0)) &&
                    (a +=
                      " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                  var d = nr();
                  d ? (a += d) : (a += me());
                  var s;
                  e === null
                    ? (s = 'null')
                    : G(e)
                    ? (s = 'array')
                    : e !== void 0 && e.$$typeof === k
                    ? ((s = '<' + (h(e.type) || 'Unknown') + ' />'),
                      (a =
                        ' Did you accidentally export a JSX literal instead of a component?'))
                    : (s = typeof e),
                    l(
                      'React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s',
                      s,
                      a,
                    );
                }
                var f = tr(e, r, t, i, u);
                if (f == null) return f;
                if (o) {
                  var y = r.children;
                  if (y !== void 0)
                    if (n)
                      if (G(y)) {
                        for (var P = 0; P < y.length; P++) Se(y[P], e);
                        Object.freeze && Object.freeze(y);
                      } else
                        l(
                          'React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.',
                        );
                    else Se(y, e);
                }
                if (A.call(r, 'key')) {
                  var T = h(e),
                    v = Object.keys(r).filter(function (dr) {
                      return dr !== 'key';
                    }),
                    Q =
                      v.length > 0
                        ? '{key: someKey, ' + v.join(': ..., ') + ': ...}'
                        : '{key: someKey}';
                  if (!Ce[T + Q]) {
                    var cr =
                      v.length > 0 ? '{' + v.join(': ..., ') + ': ...}' : '{}';
                    l(
                      `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
                      Q,
                      T,
                      cr,
                      T,
                    ),
                      (Ce[T + Q] = !0);
                  }
                }
                return e === O ? ir(f) : or(f), f;
              }
            }
            function ur(e, r, t) {
              return we(e, r, t, !0);
            }
            function sr(e, r, t) {
              return we(e, r, t, !1);
            }
            var fr = sr,
              lr = ur;
            (x.Fragment = O), (x.jsx = fr), (x.jsxs = lr);
          })()),
      x
    );
  }
  process.env.NODE_ENV === 'production'
    ? (E.exports = Pe())
    : (E.exports = je());
  var te = E.exports;
  return () =>
    te.jsx('div', {
      children: te.jsx('h1', { children: 'Hello from MyComponent!' }),
    });
});
