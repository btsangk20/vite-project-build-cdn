(function (S, $) {
  typeof exports == 'object' && typeof module < 'u'
    ? $(require('react'), require('@react-three/fiber'))
    : typeof define == 'function' && define.amd
    ? define(['react', '@react-three/fiber'], $)
    : ((S = typeof globalThis < 'u' ? globalThis : S || self),
      $(S.React, S.ReactThreeFiber));
})(this, function (S, $) {
  'use strict';
  function qe(a) {
    return a &&
      a.__esModule &&
      Object.prototype.hasOwnProperty.call(a, 'default')
      ? a.default
      : a;
  }
  var de = { exports: {} },
    l = (de.exports = {}),
    b,
    E;
  function ee() {
    throw new Error('setTimeout has not been defined');
  }
  function re() {
    throw new Error('clearTimeout has not been defined');
  }
  (function () {
    try {
      typeof setTimeout == 'function' ? (b = setTimeout) : (b = ee);
    } catch {
      b = ee;
    }
    try {
      typeof clearTimeout == 'function' ? (E = clearTimeout) : (E = re);
    } catch {
      E = re;
    }
  })();
  function ve(a) {
    if (b === setTimeout) return setTimeout(a, 0);
    if ((b === ee || !b) && setTimeout)
      return (b = setTimeout), setTimeout(a, 0);
    try {
      return b(a, 0);
    } catch {
      try {
        return b.call(null, a, 0);
      } catch {
        return b.call(this, a, 0);
      }
    }
  }
  function Be(a) {
    if (E === clearTimeout) return clearTimeout(a);
    if ((E === re || !E) && clearTimeout)
      return (E = clearTimeout), clearTimeout(a);
    try {
      return E(a);
    } catch {
      try {
        return E.call(null, a);
      } catch {
        return E.call(this, a);
      }
    }
  }
  var T = [],
    D = !1,
    C,
    J = -1;
  function Je() {
    !D ||
      !C ||
      ((D = !1), C.length ? (T = C.concat(T)) : (J = -1), T.length && pe());
  }
  function pe() {
    if (!D) {
      var a = ve(Je);
      D = !0;
      for (var f = T.length; f; ) {
        for (C = T, T = []; ++J < f; ) C && C[J].run();
        (J = -1), (f = T.length);
      }
      (C = null), (D = !1), Be(a);
    }
  }
  l.nextTick = function (a) {
    var f = new Array(arguments.length - 1);
    if (arguments.length > 1)
      for (var _ = 1; _ < arguments.length; _++) f[_ - 1] = arguments[_];
    T.push(new he(a, f)), T.length === 1 && !D && ve(pe);
  };
  function he(a, f) {
    (this.fun = a), (this.array = f);
  }
  (he.prototype.run = function () {
    this.fun.apply(null, this.array);
  }),
    (l.title = 'browser'),
    (l.browser = !0),
    (l.env = {}),
    (l.argv = []),
    (l.version = ''),
    (l.versions = {});
  function w() {}
  (l.on = w),
    (l.addListener = w),
    (l.once = w),
    (l.off = w),
    (l.removeListener = w),
    (l.removeAllListeners = w),
    (l.emit = w),
    (l.prependListener = w),
    (l.prependOnceListener = w),
    (l.listeners = function (a) {
      return [];
    }),
    (l.binding = function (a) {
      throw new Error('process.binding is not supported');
    }),
    (l.cwd = function () {
      return '/';
    }),
    (l.chdir = function (a) {
      throw new Error('process.chdir is not supported');
    }),
    (l.umask = function () {
      return 0;
    });
  var Ge = de.exports;
  const me = qe(Ge),
    Ke = (a, f) => a + f,
    ze = (a, f) => a + f;
  var te = { exports: {} },
    Y = {};
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var ge;
  function Xe() {
    if (ge) return Y;
    ge = 1;
    var a = S,
      f = Symbol.for('react.element'),
      _ = Symbol.for('react.fragment'),
      F = Object.prototype.hasOwnProperty,
      G =
        a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
      K = { key: !0, ref: !0, __self: !0, __source: !0 };
    function U(j, p, A) {
      var g,
        O = {},
        P = null,
        z = null;
      A !== void 0 && (P = '' + A),
        p.key !== void 0 && (P = '' + p.key),
        p.ref !== void 0 && (z = p.ref);
      for (g in p) F.call(p, g) && !K.hasOwnProperty(g) && (O[g] = p[g]);
      if (j && j.defaultProps)
        for (g in ((p = j.defaultProps), p)) O[g] === void 0 && (O[g] = p[g]);
      return {
        $$typeof: f,
        type: j,
        key: P,
        ref: z,
        props: O,
        _owner: G.current,
      };
    }
    return (Y.Fragment = _), (Y.jsx = U), (Y.jsxs = U), Y;
  }
  var M = {},
    ye;
  function He() {
    return (
      ye ||
        ((ye = 1),
        me.env.NODE_ENV !== 'production' &&
          (function () {
            var a = S,
              f = Symbol.for('react.element'),
              _ = Symbol.for('react.portal'),
              F = Symbol.for('react.fragment'),
              G = Symbol.for('react.strict_mode'),
              K = Symbol.for('react.profiler'),
              U = Symbol.for('react.provider'),
              j = Symbol.for('react.context'),
              p = Symbol.for('react.forward_ref'),
              A = Symbol.for('react.suspense'),
              g = Symbol.for('react.suspense_list'),
              O = Symbol.for('react.memo'),
              P = Symbol.for('react.lazy'),
              z = Symbol.for('react.offscreen'),
              be = Symbol.iterator,
              Ze = '@@iterator';
            function er(e) {
              if (e === null || typeof e != 'object') return null;
              var r = (be && e[be]) || e[Ze];
              return typeof r == 'function' ? r : null;
            }
            var I = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
            function v(e) {
              {
                for (
                  var r = arguments.length,
                    t = new Array(r > 1 ? r - 1 : 0),
                    n = 1;
                  n < r;
                  n++
                )
                  t[n - 1] = arguments[n];
                rr('error', e, t);
              }
            }
            function rr(e, r, t) {
              {
                var n = I.ReactDebugCurrentFrame,
                  u = n.getStackAddendum();
                u !== '' && ((r += '%s'), (t = t.concat([u])));
                var s = t.map(function (o) {
                  return String(o);
                });
                s.unshift('Warning: ' + r),
                  Function.prototype.apply.call(console[e], console, s);
              }
            }
            var tr = !1,
              nr = !1,
              ar = !1,
              ir = !1,
              or = !1,
              Ee;
            Ee = Symbol.for('react.module.reference');
            function ur(e) {
              return !!(
                typeof e == 'string' ||
                typeof e == 'function' ||
                e === F ||
                e === K ||
                or ||
                e === G ||
                e === A ||
                e === g ||
                ir ||
                e === z ||
                tr ||
                nr ||
                ar ||
                (typeof e == 'object' &&
                  e !== null &&
                  (e.$$typeof === P ||
                    e.$$typeof === O ||
                    e.$$typeof === U ||
                    e.$$typeof === j ||
                    e.$$typeof === p ||
                    e.$$typeof === Ee ||
                    e.getModuleId !== void 0))
              );
            }
            function sr(e, r, t) {
              var n = e.displayName;
              if (n) return n;
              var u = r.displayName || r.name || '';
              return u !== '' ? t + '(' + u + ')' : t;
            }
            function _e(e) {
              return e.displayName || 'Context';
            }
            function R(e) {
              if (e == null) return null;
              if (
                (typeof e.tag == 'number' &&
                  v(
                    'Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.',
                  ),
                typeof e == 'function')
              )
                return e.displayName || e.name || null;
              if (typeof e == 'string') return e;
              switch (e) {
                case F:
                  return 'Fragment';
                case _:
                  return 'Portal';
                case K:
                  return 'Profiler';
                case G:
                  return 'StrictMode';
                case A:
                  return 'Suspense';
                case g:
                  return 'SuspenseList';
              }
              if (typeof e == 'object')
                switch (e.$$typeof) {
                  case j:
                    var r = e;
                    return _e(r) + '.Consumer';
                  case U:
                    var t = e;
                    return _e(t._context) + '.Provider';
                  case p:
                    return sr(e, e.render, 'ForwardRef');
                  case O:
                    var n = e.displayName || null;
                    return n !== null ? n : R(e.type) || 'Memo';
                  case P: {
                    var u = e,
                      s = u._payload,
                      o = u._init;
                    try {
                      return R(o(s));
                    } catch {
                      return null;
                    }
                  }
                }
              return null;
            }
            var x = Object.assign,
              N = 0,
              Re,
              Te,
              we,
              Oe,
              Se,
              Ce,
              je;
            function Pe() {}
            Pe.__reactDisabledLog = !0;
            function lr() {
              {
                if (N === 0) {
                  (Re = console.log),
                    (Te = console.info),
                    (we = console.warn),
                    (Oe = console.error),
                    (Se = console.group),
                    (Ce = console.groupCollapsed),
                    (je = console.groupEnd);
                  var e = {
                    configurable: !0,
                    enumerable: !0,
                    value: Pe,
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
                N++;
              }
            }
            function cr() {
              {
                if ((N--, N === 0)) {
                  var e = { configurable: !0, enumerable: !0, writable: !0 };
                  Object.defineProperties(console, {
                    log: x({}, e, { value: Re }),
                    info: x({}, e, { value: Te }),
                    warn: x({}, e, { value: we }),
                    error: x({}, e, { value: Oe }),
                    group: x({}, e, { value: Se }),
                    groupCollapsed: x({}, e, { value: Ce }),
                    groupEnd: x({}, e, { value: je }),
                  });
                }
                N < 0 &&
                  v(
                    'disabledDepth fell below zero. This is a bug in React. Please file an issue.',
                  );
              }
            }
            var ne = I.ReactCurrentDispatcher,
              ae;
            function X(e, r, t) {
              {
                if (ae === void 0)
                  try {
                    throw Error();
                  } catch (u) {
                    var n = u.stack.trim().match(/\n( *(at )?)/);
                    ae = (n && n[1]) || '';
                  }
                return (
                  `
` +
                  ae +
                  e
                );
              }
            }
            var ie = !1,
              H;
            {
              var fr = typeof WeakMap == 'function' ? WeakMap : Map;
              H = new fr();
            }
            function xe(e, r) {
              if (!e || ie) return '';
              {
                var t = H.get(e);
                if (t !== void 0) return t;
              }
              var n;
              ie = !0;
              var u = Error.prepareStackTrace;
              Error.prepareStackTrace = void 0;
              var s;
              (s = ne.current), (ne.current = null), lr();
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
                    } catch (m) {
                      n = m;
                    }
                    Reflect.construct(e, [], o);
                  } else {
                    try {
                      o.call();
                    } catch (m) {
                      n = m;
                    }
                    e.call(o.prototype);
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
                if (m && n && typeof m.stack == 'string') {
                  for (
                    var i = m.stack.split(`
`),
                      h = n.stack.split(`
`),
                      c = i.length - 1,
                      d = h.length - 1;
                    c >= 1 && d >= 0 && i[c] !== h[d];

                  )
                    d--;
                  for (; c >= 1 && d >= 0; c--, d--)
                    if (i[c] !== h[d]) {
                      if (c !== 1 || d !== 1)
                        do
                          if ((c--, d--, d < 0 || i[c] !== h[d])) {
                            var y =
                              `
` + i[c].replace(' at new ', ' at ');
                            return (
                              e.displayName &&
                                y.includes('<anonymous>') &&
                                (y = y.replace('<anonymous>', e.displayName)),
                              typeof e == 'function' && H.set(e, y),
                              y
                            );
                          }
                        while (c >= 1 && d >= 0);
                      break;
                    }
                }
              } finally {
                (ie = !1),
                  (ne.current = s),
                  cr(),
                  (Error.prepareStackTrace = u);
              }
              var W = e ? e.displayName || e.name : '',
                k = W ? X(W) : '';
              return typeof e == 'function' && H.set(e, k), k;
            }
            function dr(e, r, t) {
              return xe(e, !1);
            }
            function vr(e) {
              var r = e.prototype;
              return !!(r && r.isReactComponent);
            }
            function Q(e, r, t) {
              if (e == null) return '';
              if (typeof e == 'function') return xe(e, vr(e));
              if (typeof e == 'string') return X(e);
              switch (e) {
                case A:
                  return X('Suspense');
                case g:
                  return X('SuspenseList');
              }
              if (typeof e == 'object')
                switch (e.$$typeof) {
                  case p:
                    return dr(e.render);
                  case O:
                    return Q(e.type, r, t);
                  case P: {
                    var n = e,
                      u = n._payload,
                      s = n._init;
                    try {
                      return Q(s(u), r, t);
                    } catch {}
                  }
                }
              return '';
            }
            var q = Object.prototype.hasOwnProperty,
              ke = {},
              De = I.ReactDebugCurrentFrame;
            function Z(e) {
              if (e) {
                var r = e._owner,
                  t = Q(e.type, e._source, r ? r.type : null);
                De.setExtraStackFrame(t);
              } else De.setExtraStackFrame(null);
            }
            function pr(e, r, t, n, u) {
              {
                var s = Function.call.bind(q);
                for (var o in e)
                  if (s(e, o)) {
                    var i = void 0;
                    try {
                      if (typeof e[o] != 'function') {
                        var h = Error(
                          (n || 'React class') +
                            ': ' +
                            t +
                            ' type `' +
                            o +
                            '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                            typeof e[o] +
                            '`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.',
                        );
                        throw ((h.name = 'Invariant Violation'), h);
                      }
                      i = e[o](
                        r,
                        o,
                        n,
                        t,
                        null,
                        'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
                      );
                    } catch (c) {
                      i = c;
                    }
                    i &&
                      !(i instanceof Error) &&
                      (Z(u),
                      v(
                        '%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
                        n || 'React class',
                        t,
                        o,
                        typeof i,
                      ),
                      Z(null)),
                      i instanceof Error &&
                        !(i.message in ke) &&
                        ((ke[i.message] = !0),
                        Z(u),
                        v('Failed %s type: %s', t, i.message),
                        Z(null));
                  }
              }
            }
            var hr = Array.isArray;
            function oe(e) {
              return hr(e);
            }
            function mr(e) {
              {
                var r = typeof Symbol == 'function' && Symbol.toStringTag,
                  t =
                    (r && e[Symbol.toStringTag]) ||
                    e.constructor.name ||
                    'Object';
                return t;
              }
            }
            function gr(e) {
              try {
                return Fe(e), !1;
              } catch {
                return !0;
              }
            }
            function Fe(e) {
              return '' + e;
            }
            function Ae(e) {
              if (gr(e))
                return (
                  v(
                    'The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.',
                    mr(e),
                  ),
                  Fe(e)
                );
            }
            var B = I.ReactCurrentOwner,
              yr = { key: !0, ref: !0, __self: !0, __source: !0 },
              Ie,
              Le,
              ue;
            ue = {};
            function br(e) {
              if (q.call(e, 'ref')) {
                var r = Object.getOwnPropertyDescriptor(e, 'ref').get;
                if (r && r.isReactWarning) return !1;
              }
              return e.ref !== void 0;
            }
            function Er(e) {
              if (q.call(e, 'key')) {
                var r = Object.getOwnPropertyDescriptor(e, 'key').get;
                if (r && r.isReactWarning) return !1;
              }
              return e.key !== void 0;
            }
            function _r(e, r) {
              if (
                typeof e.ref == 'string' &&
                B.current &&
                r &&
                B.current.stateNode !== r
              ) {
                var t = R(B.current.type);
                ue[t] ||
                  (v(
                    'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
                    R(B.current.type),
                    e.ref,
                  ),
                  (ue[t] = !0));
              }
            }
            function Rr(e, r) {
              {
                var t = function () {
                  Ie ||
                    ((Ie = !0),
                    v(
                      '%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
                      r,
                    ));
                };
                (t.isReactWarning = !0),
                  Object.defineProperty(e, 'key', { get: t, configurable: !0 });
              }
            }
            function Tr(e, r) {
              {
                var t = function () {
                  Le ||
                    ((Le = !0),
                    v(
                      '%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
                      r,
                    ));
                };
                (t.isReactWarning = !0),
                  Object.defineProperty(e, 'ref', { get: t, configurable: !0 });
              }
            }
            var wr = function (e, r, t, n, u, s, o) {
              var i = {
                $$typeof: f,
                type: e,
                key: r,
                ref: t,
                props: o,
                _owner: s,
              };
              return (
                (i._store = {}),
                Object.defineProperty(i._store, 'validated', {
                  configurable: !1,
                  enumerable: !1,
                  writable: !0,
                  value: !1,
                }),
                Object.defineProperty(i, '_self', {
                  configurable: !1,
                  enumerable: !1,
                  writable: !1,
                  value: n,
                }),
                Object.defineProperty(i, '_source', {
                  configurable: !1,
                  enumerable: !1,
                  writable: !1,
                  value: u,
                }),
                Object.freeze && (Object.freeze(i.props), Object.freeze(i)),
                i
              );
            };
            function Or(e, r, t, n, u) {
              {
                var s,
                  o = {},
                  i = null,
                  h = null;
                t !== void 0 && (Ae(t), (i = '' + t)),
                  Er(r) && (Ae(r.key), (i = '' + r.key)),
                  br(r) && ((h = r.ref), _r(r, u));
                for (s in r)
                  q.call(r, s) && !yr.hasOwnProperty(s) && (o[s] = r[s]);
                if (e && e.defaultProps) {
                  var c = e.defaultProps;
                  for (s in c) o[s] === void 0 && (o[s] = c[s]);
                }
                if (i || h) {
                  var d =
                    typeof e == 'function'
                      ? e.displayName || e.name || 'Unknown'
                      : e;
                  i && Rr(o, d), h && Tr(o, d);
                }
                return wr(e, i, h, u, n, B.current, o);
              }
            }
            var se = I.ReactCurrentOwner,
              We = I.ReactDebugCurrentFrame;
            function L(e) {
              if (e) {
                var r = e._owner,
                  t = Q(e.type, e._source, r ? r.type : null);
                We.setExtraStackFrame(t);
              } else We.setExtraStackFrame(null);
            }
            var le;
            le = !1;
            function ce(e) {
              return typeof e == 'object' && e !== null && e.$$typeof === f;
            }
            function $e() {
              {
                if (se.current) {
                  var e = R(se.current.type);
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
            function Sr(e) {
              return '';
            }
            var Ye = {};
            function Cr(e) {
              {
                var r = $e();
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
            function Me(e, r) {
              {
                if (!e._store || e._store.validated || e.key != null) return;
                e._store.validated = !0;
                var t = Cr(r);
                if (Ye[t]) return;
                Ye[t] = !0;
                var n = '';
                e &&
                  e._owner &&
                  e._owner !== se.current &&
                  (n = ' It was passed a child from ' + R(e._owner.type) + '.'),
                  L(e),
                  v(
                    'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
                    t,
                    n,
                  ),
                  L(null);
              }
            }
            function Ve(e, r) {
              {
                if (typeof e != 'object') return;
                if (oe(e))
                  for (var t = 0; t < e.length; t++) {
                    var n = e[t];
                    ce(n) && Me(n, r);
                  }
                else if (ce(e)) e._store && (e._store.validated = !0);
                else if (e) {
                  var u = er(e);
                  if (typeof u == 'function' && u !== e.entries)
                    for (var s = u.call(e), o; !(o = s.next()).done; )
                      ce(o.value) && Me(o.value, r);
                }
              }
            }
            function jr(e) {
              {
                var r = e.type;
                if (r == null || typeof r == 'string') return;
                var t;
                if (typeof r == 'function') t = r.propTypes;
                else if (
                  typeof r == 'object' &&
                  (r.$$typeof === p || r.$$typeof === O)
                )
                  t = r.propTypes;
                else return;
                if (t) {
                  var n = R(r);
                  pr(t, e.props, 'prop', n, e);
                } else if (r.PropTypes !== void 0 && !le) {
                  le = !0;
                  var u = R(r);
                  v(
                    'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?',
                    u || 'Unknown',
                  );
                }
                typeof r.getDefaultProps == 'function' &&
                  !r.getDefaultProps.isReactClassApproved &&
                  v(
                    'getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.',
                  );
              }
            }
            function Pr(e) {
              {
                for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
                  var n = r[t];
                  if (n !== 'children' && n !== 'key') {
                    L(e),
                      v(
                        'Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.',
                        n,
                      ),
                      L(null);
                    break;
                  }
                }
                e.ref !== null &&
                  (L(e),
                  v('Invalid attribute `ref` supplied to `React.Fragment`.'),
                  L(null));
              }
            }
            var Ue = {};
            function Ne(e, r, t, n, u, s) {
              {
                var o = ur(e);
                if (!o) {
                  var i = '';
                  (e === void 0 ||
                    (typeof e == 'object' &&
                      e !== null &&
                      Object.keys(e).length === 0)) &&
                    (i +=
                      " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                  var h = Sr();
                  h ? (i += h) : (i += $e());
                  var c;
                  e === null
                    ? (c = 'null')
                    : oe(e)
                    ? (c = 'array')
                    : e !== void 0 && e.$$typeof === f
                    ? ((c = '<' + (R(e.type) || 'Unknown') + ' />'),
                      (i =
                        ' Did you accidentally export a JSX literal instead of a component?'))
                    : (c = typeof e),
                    v(
                      'React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s',
                      c,
                      i,
                    );
                }
                var d = Or(e, r, t, u, s);
                if (d == null) return d;
                if (o) {
                  var y = r.children;
                  if (y !== void 0)
                    if (n)
                      if (oe(y)) {
                        for (var W = 0; W < y.length; W++) Ve(y[W], e);
                        Object.freeze && Object.freeze(y);
                      } else
                        v(
                          'React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.',
                        );
                    else Ve(y, e);
                }
                if (q.call(r, 'key')) {
                  var k = R(e),
                    m = Object.keys(r).filter(function (Ir) {
                      return Ir !== 'key';
                    }),
                    fe =
                      m.length > 0
                        ? '{key: someKey, ' + m.join(': ..., ') + ': ...}'
                        : '{key: someKey}';
                  if (!Ue[k + fe]) {
                    var Ar =
                      m.length > 0 ? '{' + m.join(': ..., ') + ': ...}' : '{}';
                    v(
                      `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
                      fe,
                      k,
                      Ar,
                      k,
                    ),
                      (Ue[k + fe] = !0);
                  }
                }
                return e === F ? Pr(d) : jr(d), d;
              }
            }
            function xr(e, r, t) {
              return Ne(e, r, t, !0);
            }
            function kr(e, r, t) {
              return Ne(e, r, t, !1);
            }
            var Dr = kr,
              Fr = xr;
            (M.Fragment = F), (M.jsx = Dr), (M.jsxs = Fr);
          })()),
      M
    );
  }
  me.env.NODE_ENV === 'production' ? (te.exports = Xe()) : (te.exports = He());
  var V = te.exports;
  function Qe() {
    return V.jsxs($.Canvas, {
      children: [
        V.jsx('ambientLight', {}),
        V.jsxs('mesh', {
          children: [
            V.jsx('boxGeometry', { args: [1, 1, 1] }),
            V.jsx('meshStandardMaterial', { color: 'hotpink' }),
          ],
        }),
      ],
    });
  }
  (window.process = { env: { NODE_ENV: 'production' } }),
    (window.webGDL = { add: ze, sum: Ke, Button: Qe });
});

