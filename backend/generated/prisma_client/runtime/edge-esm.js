var ma = Object.create
var ar = Object.defineProperty
var da = Object.getOwnPropertyDescriptor
var fa = Object.getOwnPropertyNames
var ga = Object.getPrototypeOf,
  ha = Object.prototype.hasOwnProperty
var ya = (e, t, r) =>
  t in e
    ? ar(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
    : (e[t] = r)
var Re = (e, t) => () => (e && (t = e((e = 0))), t)
var Le = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
  nn = (e, t) => {
    for (var r in t) ar(e, r, { get: t[r], enumerable: !0 })
  },
  wa = (e, t, r, n) => {
    if ((t && typeof t == 'object') || typeof t == 'function')
      for (let i of fa(t))
        !ha.call(e, i) &&
          i !== r &&
          ar(e, i, {
            get: () => t[i],
            enumerable: !(n = da(t, i)) || n.enumerable,
          })
    return e
  }
var We = (e, t, r) => (
  (r = e != null ? ma(ga(e)) : {}),
  wa(
    t || !e || !e.__esModule
      ? ar(r, 'default', { value: e, enumerable: !0 })
      : r,
    e,
  )
)
var w = (e, t, r) => ya(e, typeof t != 'symbol' ? t + '' : t, r)
var y,
  u = Re(() => {
    'use strict'
    y = {
      nextTick: (e, ...t) => {
        setTimeout(() => {
          e(...t)
        }, 0)
      },
      env: {},
      version: '',
      cwd: () => '/',
      stderr: {},
      argv: ['/bin/node'],
    }
  })
var x,
  c = Re(() => {
    'use strict'
    x =
      globalThis.performance ??
      (() => {
        let e = Date.now()
        return { now: () => Date.now() - e }
      })()
  })
var b,
  p = Re(() => {
    'use strict'
    b = () => {}
    b.prototype = b
  })
var m = Re(() => {
  'use strict'
})
var Ci = Le(Ye => {
  'use strict'
  d()
  u()
  c()
  p()
  m()
  var pi = (e, t) => () => (
      t || e((t = { exports: {} }).exports, t), t.exports
    ),
    Ea = pi(e => {
      'use strict'
      ;(e.byteLength = l), (e.toByteArray = g), (e.fromByteArray = k)
      var t = [],
        r = [],
        n = typeof Uint8Array < 'u' ? Uint8Array : Array,
        i = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
      for (o = 0, s = i.length; o < s; ++o)
        (t[o] = i[o]), (r[i.charCodeAt(o)] = o)
      var o, s
      ;(r[45] = 62), (r[95] = 63)
      function a(R) {
        var S = R.length
        if (S % 4 > 0)
          throw new Error('Invalid string. Length must be a multiple of 4')
        var M = R.indexOf('=')
        M === -1 && (M = S)
        var N = M === S ? 0 : 4 - (M % 4)
        return [M, N]
      }
      function l(R) {
        var S = a(R),
          M = S[0],
          N = S[1]
        return ((M + N) * 3) / 4 - N
      }
      function f(R, S, M) {
        return ((S + M) * 3) / 4 - M
      }
      function g(R) {
        var S,
          M = a(R),
          N = M[0],
          U = M[1],
          D = new n(f(R, N, U)),
          L = 0,
          B = U > 0 ? N - 4 : N,
          Q
        for (Q = 0; Q < B; Q += 4)
          (S =
            (r[R.charCodeAt(Q)] << 18) |
            (r[R.charCodeAt(Q + 1)] << 12) |
            (r[R.charCodeAt(Q + 2)] << 6) |
            r[R.charCodeAt(Q + 3)]),
            (D[L++] = (S >> 16) & 255),
            (D[L++] = (S >> 8) & 255),
            (D[L++] = S & 255)
        return (
          U === 2 &&
            ((S = (r[R.charCodeAt(Q)] << 2) | (r[R.charCodeAt(Q + 1)] >> 4)),
            (D[L++] = S & 255)),
          U === 1 &&
            ((S =
              (r[R.charCodeAt(Q)] << 10) |
              (r[R.charCodeAt(Q + 1)] << 4) |
              (r[R.charCodeAt(Q + 2)] >> 2)),
            (D[L++] = (S >> 8) & 255),
            (D[L++] = S & 255)),
          D
        )
      }
      function h(R) {
        return (
          t[(R >> 18) & 63] + t[(R >> 12) & 63] + t[(R >> 6) & 63] + t[R & 63]
        )
      }
      function T(R, S, M) {
        for (var N, U = [], D = S; D < M; D += 3)
          (N =
            ((R[D] << 16) & 16711680) +
            ((R[D + 1] << 8) & 65280) +
            (R[D + 2] & 255)),
            U.push(h(N))
        return U.join('')
      }
      function k(R) {
        for (
          var S, M = R.length, N = M % 3, U = [], D = 16383, L = 0, B = M - N;
          L < B;
          L += D
        )
          U.push(T(R, L, L + D > B ? B : L + D))
        return (
          N === 1
            ? ((S = R[M - 1]), U.push(t[S >> 2] + t[(S << 4) & 63] + '=='))
            : N === 2 &&
              ((S = (R[M - 2] << 8) + R[M - 1]),
              U.push(t[S >> 10] + t[(S >> 4) & 63] + t[(S << 2) & 63] + '=')),
          U.join('')
        )
      }
    }),
    ba = pi(e => {
      ;(e.read = function (t, r, n, i, o) {
        var s,
          a,
          l = o * 8 - i - 1,
          f = (1 << l) - 1,
          g = f >> 1,
          h = -7,
          T = n ? o - 1 : 0,
          k = n ? -1 : 1,
          R = t[r + T]
        for (
          T += k, s = R & ((1 << -h) - 1), R >>= -h, h += l;
          h > 0;
          s = s * 256 + t[r + T], T += k, h -= 8
        );
        for (
          a = s & ((1 << -h) - 1), s >>= -h, h += i;
          h > 0;
          a = a * 256 + t[r + T], T += k, h -= 8
        );
        if (s === 0) s = 1 - g
        else {
          if (s === f) return a ? NaN : (R ? -1 : 1) * (1 / 0)
          ;(a = a + Math.pow(2, i)), (s = s - g)
        }
        return (R ? -1 : 1) * a * Math.pow(2, s - i)
      }),
        (e.write = function (t, r, n, i, o, s) {
          var a,
            l,
            f,
            g = s * 8 - o - 1,
            h = (1 << g) - 1,
            T = h >> 1,
            k = o === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            R = i ? 0 : s - 1,
            S = i ? 1 : -1,
            M = r < 0 || (r === 0 && 1 / r < 0) ? 1 : 0
          for (
            r = Math.abs(r),
              isNaN(r) || r === 1 / 0
                ? ((l = isNaN(r) ? 1 : 0), (a = h))
                : ((a = Math.floor(Math.log(r) / Math.LN2)),
                  r * (f = Math.pow(2, -a)) < 1 && (a--, (f *= 2)),
                  a + T >= 1 ? (r += k / f) : (r += k * Math.pow(2, 1 - T)),
                  r * f >= 2 && (a++, (f /= 2)),
                  a + T >= h
                    ? ((l = 0), (a = h))
                    : a + T >= 1
                      ? ((l = (r * f - 1) * Math.pow(2, o)), (a = a + T))
                      : ((l = r * Math.pow(2, T - 1) * Math.pow(2, o)),
                        (a = 0)));
            o >= 8;
            t[n + R] = l & 255, R += S, l /= 256, o -= 8
          );
          for (
            a = (a << o) | l, g += o;
            g > 0;
            t[n + R] = a & 255, R += S, a /= 256, g -= 8
          );
          t[n + R - S] |= M * 128
        })
    }),
    on = Ea(),
    Ke = ba(),
    ai =
      typeof Symbol == 'function' && typeof Symbol.for == 'function'
        ? Symbol.for('nodejs.util.inspect.custom')
        : null
  Ye.Buffer = C
  Ye.SlowBuffer = Aa
  Ye.INSPECT_MAX_BYTES = 50
  var lr = 2147483647
  Ye.kMaxLength = lr
  C.TYPED_ARRAY_SUPPORT = xa()
  !C.TYPED_ARRAY_SUPPORT &&
    typeof console < 'u' &&
    typeof console.error == 'function' &&
    console.error(
      'This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.',
    )
  function xa() {
    try {
      let e = new Uint8Array(1),
        t = {
          foo: function () {
            return 42
          },
        }
      return (
        Object.setPrototypeOf(t, Uint8Array.prototype),
        Object.setPrototypeOf(e, t),
        e.foo() === 42
      )
    } catch {
      return !1
    }
  }
  Object.defineProperty(C.prototype, 'parent', {
    enumerable: !0,
    get: function () {
      if (C.isBuffer(this)) return this.buffer
    },
  })
  Object.defineProperty(C.prototype, 'offset', {
    enumerable: !0,
    get: function () {
      if (C.isBuffer(this)) return this.byteOffset
    },
  })
  function xe(e) {
    if (e > lr)
      throw new RangeError('The value "' + e + '" is invalid for option "size"')
    let t = new Uint8Array(e)
    return Object.setPrototypeOf(t, C.prototype), t
  }
  function C(e, t, r) {
    if (typeof e == 'number') {
      if (typeof t == 'string')
        throw new TypeError(
          'The "string" argument must be of type string. Received type number',
        )
      return ln(e)
    }
    return mi(e, t, r)
  }
  C.poolSize = 8192
  function mi(e, t, r) {
    if (typeof e == 'string') return va(e, t)
    if (ArrayBuffer.isView(e)) return Ta(e)
    if (e == null)
      throw new TypeError(
        'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
          typeof e,
      )
    if (
      fe(e, ArrayBuffer) ||
      (e && fe(e.buffer, ArrayBuffer)) ||
      (typeof SharedArrayBuffer < 'u' &&
        (fe(e, SharedArrayBuffer) || (e && fe(e.buffer, SharedArrayBuffer))))
    )
      return fi(e, t, r)
    if (typeof e == 'number')
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number',
      )
    let n = e.valueOf && e.valueOf()
    if (n != null && n !== e) return C.from(n, t, r)
    let i = Ca(e)
    if (i) return i
    if (
      typeof Symbol < 'u' &&
      Symbol.toPrimitive != null &&
      typeof e[Symbol.toPrimitive] == 'function'
    )
      return C.from(e[Symbol.toPrimitive]('string'), t, r)
    throw new TypeError(
      'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
        typeof e,
    )
  }
  C.from = function (e, t, r) {
    return mi(e, t, r)
  }
  Object.setPrototypeOf(C.prototype, Uint8Array.prototype)
  Object.setPrototypeOf(C, Uint8Array)
  function di(e) {
    if (typeof e != 'number')
      throw new TypeError('"size" argument must be of type number')
    if (e < 0)
      throw new RangeError('The value "' + e + '" is invalid for option "size"')
  }
  function Pa(e, t, r) {
    return (
      di(e),
      e <= 0
        ? xe(e)
        : t !== void 0
          ? typeof r == 'string'
            ? xe(e).fill(t, r)
            : xe(e).fill(t)
          : xe(e)
    )
  }
  C.alloc = function (e, t, r) {
    return Pa(e, t, r)
  }
  function ln(e) {
    return di(e), xe(e < 0 ? 0 : un(e) | 0)
  }
  C.allocUnsafe = function (e) {
    return ln(e)
  }
  C.allocUnsafeSlow = function (e) {
    return ln(e)
  }
  function va(e, t) {
    if (((typeof t != 'string' || t === '') && (t = 'utf8'), !C.isEncoding(t)))
      throw new TypeError('Unknown encoding: ' + t)
    let r = gi(e, t) | 0,
      n = xe(r),
      i = n.write(e, t)
    return i !== r && (n = n.slice(0, i)), n
  }
  function sn(e) {
    let t = e.length < 0 ? 0 : un(e.length) | 0,
      r = xe(t)
    for (let n = 0; n < t; n += 1) r[n] = e[n] & 255
    return r
  }
  function Ta(e) {
    if (fe(e, Uint8Array)) {
      let t = new Uint8Array(e)
      return fi(t.buffer, t.byteOffset, t.byteLength)
    }
    return sn(e)
  }
  function fi(e, t, r) {
    if (t < 0 || e.byteLength < t)
      throw new RangeError('"offset" is outside of buffer bounds')
    if (e.byteLength < t + (r || 0))
      throw new RangeError('"length" is outside of buffer bounds')
    let n
    return (
      t === void 0 && r === void 0
        ? (n = new Uint8Array(e))
        : r === void 0
          ? (n = new Uint8Array(e, t))
          : (n = new Uint8Array(e, t, r)),
      Object.setPrototypeOf(n, C.prototype),
      n
    )
  }
  function Ca(e) {
    if (C.isBuffer(e)) {
      let t = un(e.length) | 0,
        r = xe(t)
      return r.length === 0 || e.copy(r, 0, 0, t), r
    }
    if (e.length !== void 0)
      return typeof e.length != 'number' || pn(e.length) ? xe(0) : sn(e)
    if (e.type === 'Buffer' && Array.isArray(e.data)) return sn(e.data)
  }
  function un(e) {
    if (e >= lr)
      throw new RangeError(
        'Attempt to allocate Buffer larger than maximum size: 0x' +
          lr.toString(16) +
          ' bytes',
      )
    return e | 0
  }
  function Aa(e) {
    return +e != e && (e = 0), C.alloc(+e)
  }
  C.isBuffer = function (e) {
    return e != null && e._isBuffer === !0 && e !== C.prototype
  }
  C.compare = function (e, t) {
    if (
      (fe(e, Uint8Array) && (e = C.from(e, e.offset, e.byteLength)),
      fe(t, Uint8Array) && (t = C.from(t, t.offset, t.byteLength)),
      !C.isBuffer(e) || !C.isBuffer(t))
    )
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array',
      )
    if (e === t) return 0
    let r = e.length,
      n = t.length
    for (let i = 0, o = Math.min(r, n); i < o; ++i)
      if (e[i] !== t[i]) {
        ;(r = e[i]), (n = t[i])
        break
      }
    return r < n ? -1 : n < r ? 1 : 0
  }
  C.isEncoding = function (e) {
    switch (String(e).toLowerCase()) {
      case 'hex':
      case 'utf8':
      case 'utf-8':
      case 'ascii':
      case 'latin1':
      case 'binary':
      case 'base64':
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return !0
      default:
        return !1
    }
  }
  C.concat = function (e, t) {
    if (!Array.isArray(e))
      throw new TypeError('"list" argument must be an Array of Buffers')
    if (e.length === 0) return C.alloc(0)
    let r
    if (t === void 0) for (t = 0, r = 0; r < e.length; ++r) t += e[r].length
    let n = C.allocUnsafe(t),
      i = 0
    for (r = 0; r < e.length; ++r) {
      let o = e[r]
      if (fe(o, Uint8Array))
        i + o.length > n.length
          ? (C.isBuffer(o) || (o = C.from(o)), o.copy(n, i))
          : Uint8Array.prototype.set.call(n, o, i)
      else if (C.isBuffer(o)) o.copy(n, i)
      else throw new TypeError('"list" argument must be an Array of Buffers')
      i += o.length
    }
    return n
  }
  function gi(e, t) {
    if (C.isBuffer(e)) return e.length
    if (ArrayBuffer.isView(e) || fe(e, ArrayBuffer)) return e.byteLength
    if (typeof e != 'string')
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
          typeof e,
      )
    let r = e.length,
      n = arguments.length > 2 && arguments[2] === !0
    if (!n && r === 0) return 0
    let i = !1
    for (;;)
      switch (t) {
        case 'ascii':
        case 'latin1':
        case 'binary':
          return r
        case 'utf8':
        case 'utf-8':
          return an(e).length
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return r * 2
        case 'hex':
          return r >>> 1
        case 'base64':
          return Ti(e).length
        default:
          if (i) return n ? -1 : an(e).length
          ;(t = ('' + t).toLowerCase()), (i = !0)
      }
  }
  C.byteLength = gi
  function Ra(e, t, r) {
    let n = !1
    if (
      ((t === void 0 || t < 0) && (t = 0),
      t > this.length ||
        ((r === void 0 || r > this.length) && (r = this.length), r <= 0) ||
        ((r >>>= 0), (t >>>= 0), r <= t))
    )
      return ''
    for (e || (e = 'utf8'); ; )
      switch (e) {
        case 'hex':
          return La(this, t, r)
        case 'utf8':
        case 'utf-8':
          return yi(this, t, r)
        case 'ascii':
          return _a(this, t, r)
        case 'latin1':
        case 'binary':
          return Fa(this, t, r)
        case 'base64':
          return Ma(this, t, r)
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return Ba(this, t, r)
        default:
          if (n) throw new TypeError('Unknown encoding: ' + e)
          ;(e = (e + '').toLowerCase()), (n = !0)
      }
  }
  C.prototype._isBuffer = !0
  function Be(e, t, r) {
    let n = e[t]
    ;(e[t] = e[r]), (e[r] = n)
  }
  C.prototype.swap16 = function () {
    let e = this.length
    if (e % 2 !== 0)
      throw new RangeError('Buffer size must be a multiple of 16-bits')
    for (let t = 0; t < e; t += 2) Be(this, t, t + 1)
    return this
  }
  C.prototype.swap32 = function () {
    let e = this.length
    if (e % 4 !== 0)
      throw new RangeError('Buffer size must be a multiple of 32-bits')
    for (let t = 0; t < e; t += 4) Be(this, t, t + 3), Be(this, t + 1, t + 2)
    return this
  }
  C.prototype.swap64 = function () {
    let e = this.length
    if (e % 8 !== 0)
      throw new RangeError('Buffer size must be a multiple of 64-bits')
    for (let t = 0; t < e; t += 8)
      Be(this, t, t + 7),
        Be(this, t + 1, t + 6),
        Be(this, t + 2, t + 5),
        Be(this, t + 3, t + 4)
    return this
  }
  C.prototype.toString = function () {
    let e = this.length
    return e === 0
      ? ''
      : arguments.length === 0
        ? yi(this, 0, e)
        : Ra.apply(this, arguments)
  }
  C.prototype.toLocaleString = C.prototype.toString
  C.prototype.equals = function (e) {
    if (!C.isBuffer(e)) throw new TypeError('Argument must be a Buffer')
    return this === e ? !0 : C.compare(this, e) === 0
  }
  C.prototype.inspect = function () {
    let e = '',
      t = Ye.INSPECT_MAX_BYTES
    return (
      (e = this.toString('hex', 0, t)
        .replace(/(.{2})/g, '$1 ')
        .trim()),
      this.length > t && (e += ' ... '),
      '<Buffer ' + e + '>'
    )
  }
  ai && (C.prototype[ai] = C.prototype.inspect)
  C.prototype.compare = function (e, t, r, n, i) {
    if (
      (fe(e, Uint8Array) && (e = C.from(e, e.offset, e.byteLength)),
      !C.isBuffer(e))
    )
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
          typeof e,
      )
    if (
      (t === void 0 && (t = 0),
      r === void 0 && (r = e ? e.length : 0),
      n === void 0 && (n = 0),
      i === void 0 && (i = this.length),
      t < 0 || r > e.length || n < 0 || i > this.length)
    )
      throw new RangeError('out of range index')
    if (n >= i && t >= r) return 0
    if (n >= i) return -1
    if (t >= r) return 1
    if (((t >>>= 0), (r >>>= 0), (n >>>= 0), (i >>>= 0), this === e)) return 0
    let o = i - n,
      s = r - t,
      a = Math.min(o, s),
      l = this.slice(n, i),
      f = e.slice(t, r)
    for (let g = 0; g < a; ++g)
      if (l[g] !== f[g]) {
        ;(o = l[g]), (s = f[g])
        break
      }
    return o < s ? -1 : s < o ? 1 : 0
  }
  function hi(e, t, r, n, i) {
    if (e.length === 0) return -1
    if (
      (typeof r == 'string'
        ? ((n = r), (r = 0))
        : r > 2147483647
          ? (r = 2147483647)
          : r < -2147483648 && (r = -2147483648),
      (r = +r),
      pn(r) && (r = i ? 0 : e.length - 1),
      r < 0 && (r = e.length + r),
      r >= e.length)
    ) {
      if (i) return -1
      r = e.length - 1
    } else if (r < 0)
      if (i) r = 0
      else return -1
    if ((typeof t == 'string' && (t = C.from(t, n)), C.isBuffer(t)))
      return t.length === 0 ? -1 : li(e, t, r, n, i)
    if (typeof t == 'number')
      return (
        (t = t & 255),
        typeof Uint8Array.prototype.indexOf == 'function'
          ? i
            ? Uint8Array.prototype.indexOf.call(e, t, r)
            : Uint8Array.prototype.lastIndexOf.call(e, t, r)
          : li(e, [t], r, n, i)
      )
    throw new TypeError('val must be string, number or Buffer')
  }
  function li(e, t, r, n, i) {
    let o = 1,
      s = e.length,
      a = t.length
    if (
      n !== void 0 &&
      ((n = String(n).toLowerCase()),
      n === 'ucs2' || n === 'ucs-2' || n === 'utf16le' || n === 'utf-16le')
    ) {
      if (e.length < 2 || t.length < 2) return -1
      ;(o = 2), (s /= 2), (a /= 2), (r /= 2)
    }
    function l(g, h) {
      return o === 1 ? g[h] : g.readUInt16BE(h * o)
    }
    let f
    if (i) {
      let g = -1
      for (f = r; f < s; f++)
        if (l(e, f) === l(t, g === -1 ? 0 : f - g)) {
          if ((g === -1 && (g = f), f - g + 1 === a)) return g * o
        } else g !== -1 && (f -= f - g), (g = -1)
    } else
      for (r + a > s && (r = s - a), f = r; f >= 0; f--) {
        let g = !0
        for (let h = 0; h < a; h++)
          if (l(e, f + h) !== l(t, h)) {
            g = !1
            break
          }
        if (g) return f
      }
    return -1
  }
  C.prototype.includes = function (e, t, r) {
    return this.indexOf(e, t, r) !== -1
  }
  C.prototype.indexOf = function (e, t, r) {
    return hi(this, e, t, r, !0)
  }
  C.prototype.lastIndexOf = function (e, t, r) {
    return hi(this, e, t, r, !1)
  }
  function Sa(e, t, r, n) {
    r = Number(r) || 0
    let i = e.length - r
    n ? ((n = Number(n)), n > i && (n = i)) : (n = i)
    let o = t.length
    n > o / 2 && (n = o / 2)
    let s
    for (s = 0; s < n; ++s) {
      let a = parseInt(t.substr(s * 2, 2), 16)
      if (pn(a)) return s
      e[r + s] = a
    }
    return s
  }
  function ka(e, t, r, n) {
    return ur(an(t, e.length - r), e, r, n)
  }
  function Ia(e, t, r, n) {
    return ur(Va(t), e, r, n)
  }
  function Oa(e, t, r, n) {
    return ur(Ti(t), e, r, n)
  }
  function Da(e, t, r, n) {
    return ur(ja(t, e.length - r), e, r, n)
  }
  C.prototype.write = function (e, t, r, n) {
    if (t === void 0) (n = 'utf8'), (r = this.length), (t = 0)
    else if (r === void 0 && typeof t == 'string')
      (n = t), (r = this.length), (t = 0)
    else if (isFinite(t))
      (t = t >>> 0),
        isFinite(r)
          ? ((r = r >>> 0), n === void 0 && (n = 'utf8'))
          : ((n = r), (r = void 0))
    else
      throw new Error(
        'Buffer.write(string, encoding, offset[, length]) is no longer supported',
      )
    let i = this.length - t
    if (
      ((r === void 0 || r > i) && (r = i),
      (e.length > 0 && (r < 0 || t < 0)) || t > this.length)
    )
      throw new RangeError('Attempt to write outside buffer bounds')
    n || (n = 'utf8')
    let o = !1
    for (;;)
      switch (n) {
        case 'hex':
          return Sa(this, e, t, r)
        case 'utf8':
        case 'utf-8':
          return ka(this, e, t, r)
        case 'ascii':
        case 'latin1':
        case 'binary':
          return Ia(this, e, t, r)
        case 'base64':
          return Oa(this, e, t, r)
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return Da(this, e, t, r)
        default:
          if (o) throw new TypeError('Unknown encoding: ' + n)
          ;(n = ('' + n).toLowerCase()), (o = !0)
      }
  }
  C.prototype.toJSON = function () {
    return {
      type: 'Buffer',
      data: Array.prototype.slice.call(this._arr || this, 0),
    }
  }
  function Ma(e, t, r) {
    return t === 0 && r === e.length
      ? on.fromByteArray(e)
      : on.fromByteArray(e.slice(t, r))
  }
  function yi(e, t, r) {
    r = Math.min(e.length, r)
    let n = [],
      i = t
    for (; i < r; ) {
      let o = e[i],
        s = null,
        a = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1
      if (i + a <= r) {
        let l, f, g, h
        switch (a) {
          case 1:
            o < 128 && (s = o)
            break
          case 2:
            ;(l = e[i + 1]),
              (l & 192) === 128 &&
                ((h = ((o & 31) << 6) | (l & 63)), h > 127 && (s = h))
            break
          case 3:
            ;(l = e[i + 1]),
              (f = e[i + 2]),
              (l & 192) === 128 &&
                (f & 192) === 128 &&
                ((h = ((o & 15) << 12) | ((l & 63) << 6) | (f & 63)),
                h > 2047 && (h < 55296 || h > 57343) && (s = h))
            break
          case 4:
            ;(l = e[i + 1]),
              (f = e[i + 2]),
              (g = e[i + 3]),
              (l & 192) === 128 &&
                (f & 192) === 128 &&
                (g & 192) === 128 &&
                ((h =
                  ((o & 15) << 18) |
                  ((l & 63) << 12) |
                  ((f & 63) << 6) |
                  (g & 63)),
                h > 65535 && h < 1114112 && (s = h))
        }
      }
      s === null
        ? ((s = 65533), (a = 1))
        : s > 65535 &&
          ((s -= 65536),
          n.push(((s >>> 10) & 1023) | 55296),
          (s = 56320 | (s & 1023))),
        n.push(s),
        (i += a)
    }
    return Na(n)
  }
  var ui = 4096
  function Na(e) {
    let t = e.length
    if (t <= ui) return String.fromCharCode.apply(String, e)
    let r = '',
      n = 0
    for (; n < t; )
      r += String.fromCharCode.apply(String, e.slice(n, (n += ui)))
    return r
  }
  function _a(e, t, r) {
    let n = ''
    r = Math.min(e.length, r)
    for (let i = t; i < r; ++i) n += String.fromCharCode(e[i] & 127)
    return n
  }
  function Fa(e, t, r) {
    let n = ''
    r = Math.min(e.length, r)
    for (let i = t; i < r; ++i) n += String.fromCharCode(e[i])
    return n
  }
  function La(e, t, r) {
    let n = e.length
    ;(!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n)
    let i = ''
    for (let o = t; o < r; ++o) i += Ga[e[o]]
    return i
  }
  function Ba(e, t, r) {
    let n = e.slice(t, r),
      i = ''
    for (let o = 0; o < n.length - 1; o += 2)
      i += String.fromCharCode(n[o] + n[o + 1] * 256)
    return i
  }
  C.prototype.slice = function (e, t) {
    let r = this.length
    ;(e = ~~e),
      (t = t === void 0 ? r : ~~t),
      e < 0 ? ((e += r), e < 0 && (e = 0)) : e > r && (e = r),
      t < 0 ? ((t += r), t < 0 && (t = 0)) : t > r && (t = r),
      t < e && (t = e)
    let n = this.subarray(e, t)
    return Object.setPrototypeOf(n, C.prototype), n
  }
  function K(e, t, r) {
    if (e % 1 !== 0 || e < 0) throw new RangeError('offset is not uint')
    if (e + t > r) throw new RangeError('Trying to access beyond buffer length')
  }
  C.prototype.readUintLE = C.prototype.readUIntLE = function (e, t, r) {
    ;(e = e >>> 0), (t = t >>> 0), r || K(e, t, this.length)
    let n = this[e],
      i = 1,
      o = 0
    for (; ++o < t && (i *= 256); ) n += this[e + o] * i
    return n
  }
  C.prototype.readUintBE = C.prototype.readUIntBE = function (e, t, r) {
    ;(e = e >>> 0), (t = t >>> 0), r || K(e, t, this.length)
    let n = this[e + --t],
      i = 1
    for (; t > 0 && (i *= 256); ) n += this[e + --t] * i
    return n
  }
  C.prototype.readUint8 = C.prototype.readUInt8 = function (e, t) {
    return (e = e >>> 0), t || K(e, 1, this.length), this[e]
  }
  C.prototype.readUint16LE = C.prototype.readUInt16LE = function (e, t) {
    return (
      (e = e >>> 0), t || K(e, 2, this.length), this[e] | (this[e + 1] << 8)
    )
  }
  C.prototype.readUint16BE = C.prototype.readUInt16BE = function (e, t) {
    return (
      (e = e >>> 0), t || K(e, 2, this.length), (this[e] << 8) | this[e + 1]
    )
  }
  C.prototype.readUint32LE = C.prototype.readUInt32LE = function (e, t) {
    return (
      (e = e >>> 0),
      t || K(e, 4, this.length),
      (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
        this[e + 3] * 16777216
    )
  }
  C.prototype.readUint32BE = C.prototype.readUInt32BE = function (e, t) {
    return (
      (e = e >>> 0),
      t || K(e, 4, this.length),
      this[e] * 16777216 +
        ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
    )
  }
  C.prototype.readBigUInt64LE = Se(function (e) {
    ;(e = e >>> 0), ze(e, 'offset')
    let t = this[e],
      r = this[e + 7]
    ;(t === void 0 || r === void 0) && vt(e, this.length - 8)
    let n = t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24,
      i = this[++e] + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + r * 2 ** 24
    return BigInt(n) + (BigInt(i) << BigInt(32))
  })
  C.prototype.readBigUInt64BE = Se(function (e) {
    ;(e = e >>> 0), ze(e, 'offset')
    let t = this[e],
      r = this[e + 7]
    ;(t === void 0 || r === void 0) && vt(e, this.length - 8)
    let n = t * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e],
      i = this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + r
    return (BigInt(n) << BigInt(32)) + BigInt(i)
  })
  C.prototype.readIntLE = function (e, t, r) {
    ;(e = e >>> 0), (t = t >>> 0), r || K(e, t, this.length)
    let n = this[e],
      i = 1,
      o = 0
    for (; ++o < t && (i *= 256); ) n += this[e + o] * i
    return (i *= 128), n >= i && (n -= Math.pow(2, 8 * t)), n
  }
  C.prototype.readIntBE = function (e, t, r) {
    ;(e = e >>> 0), (t = t >>> 0), r || K(e, t, this.length)
    let n = t,
      i = 1,
      o = this[e + --n]
    for (; n > 0 && (i *= 256); ) o += this[e + --n] * i
    return (i *= 128), o >= i && (o -= Math.pow(2, 8 * t)), o
  }
  C.prototype.readInt8 = function (e, t) {
    return (
      (e = e >>> 0),
      t || K(e, 1, this.length),
      this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e]
    )
  }
  C.prototype.readInt16LE = function (e, t) {
    ;(e = e >>> 0), t || K(e, 2, this.length)
    let r = this[e] | (this[e + 1] << 8)
    return r & 32768 ? r | 4294901760 : r
  }
  C.prototype.readInt16BE = function (e, t) {
    ;(e = e >>> 0), t || K(e, 2, this.length)
    let r = this[e + 1] | (this[e] << 8)
    return r & 32768 ? r | 4294901760 : r
  }
  C.prototype.readInt32LE = function (e, t) {
    return (
      (e = e >>> 0),
      t || K(e, 4, this.length),
      this[e] | (this[e + 1] << 8) | (this[e + 2] << 16) | (this[e + 3] << 24)
    )
  }
  C.prototype.readInt32BE = function (e, t) {
    return (
      (e = e >>> 0),
      t || K(e, 4, this.length),
      (this[e] << 24) | (this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3]
    )
  }
  C.prototype.readBigInt64LE = Se(function (e) {
    ;(e = e >>> 0), ze(e, 'offset')
    let t = this[e],
      r = this[e + 7]
    ;(t === void 0 || r === void 0) && vt(e, this.length - 8)
    let n =
      this[e + 4] + this[e + 5] * 2 ** 8 + this[e + 6] * 2 ** 16 + (r << 24)
    return (
      (BigInt(n) << BigInt(32)) +
      BigInt(t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24)
    )
  })
  C.prototype.readBigInt64BE = Se(function (e) {
    ;(e = e >>> 0), ze(e, 'offset')
    let t = this[e],
      r = this[e + 7]
    ;(t === void 0 || r === void 0) && vt(e, this.length - 8)
    let n = (t << 24) + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e]
    return (
      (BigInt(n) << BigInt(32)) +
      BigInt(this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + r)
    )
  })
  C.prototype.readFloatLE = function (e, t) {
    return (e = e >>> 0), t || K(e, 4, this.length), Ke.read(this, e, !0, 23, 4)
  }
  C.prototype.readFloatBE = function (e, t) {
    return (e = e >>> 0), t || K(e, 4, this.length), Ke.read(this, e, !1, 23, 4)
  }
  C.prototype.readDoubleLE = function (e, t) {
    return (e = e >>> 0), t || K(e, 8, this.length), Ke.read(this, e, !0, 52, 8)
  }
  C.prototype.readDoubleBE = function (e, t) {
    return (e = e >>> 0), t || K(e, 8, this.length), Ke.read(this, e, !1, 52, 8)
  }
  function ne(e, t, r, n, i, o) {
    if (!C.isBuffer(e))
      throw new TypeError('"buffer" argument must be a Buffer instance')
    if (t > i || t < o)
      throw new RangeError('"value" argument is out of bounds')
    if (r + n > e.length) throw new RangeError('Index out of range')
  }
  C.prototype.writeUintLE = C.prototype.writeUIntLE = function (e, t, r, n) {
    if (((e = +e), (t = t >>> 0), (r = r >>> 0), !n)) {
      let s = Math.pow(2, 8 * r) - 1
      ne(this, e, t, r, s, 0)
    }
    let i = 1,
      o = 0
    for (this[t] = e & 255; ++o < r && (i *= 256); ) this[t + o] = (e / i) & 255
    return t + r
  }
  C.prototype.writeUintBE = C.prototype.writeUIntBE = function (e, t, r, n) {
    if (((e = +e), (t = t >>> 0), (r = r >>> 0), !n)) {
      let s = Math.pow(2, 8 * r) - 1
      ne(this, e, t, r, s, 0)
    }
    let i = r - 1,
      o = 1
    for (this[t + i] = e & 255; --i >= 0 && (o *= 256); )
      this[t + i] = (e / o) & 255
    return t + r
  }
  C.prototype.writeUint8 = C.prototype.writeUInt8 = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || ne(this, e, t, 1, 255, 0),
      (this[t] = e & 255),
      t + 1
    )
  }
  C.prototype.writeUint16LE = C.prototype.writeUInt16LE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || ne(this, e, t, 2, 65535, 0),
      (this[t] = e & 255),
      (this[t + 1] = e >>> 8),
      t + 2
    )
  }
  C.prototype.writeUint16BE = C.prototype.writeUInt16BE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || ne(this, e, t, 2, 65535, 0),
      (this[t] = e >>> 8),
      (this[t + 1] = e & 255),
      t + 2
    )
  }
  C.prototype.writeUint32LE = C.prototype.writeUInt32LE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || ne(this, e, t, 4, 4294967295, 0),
      (this[t + 3] = e >>> 24),
      (this[t + 2] = e >>> 16),
      (this[t + 1] = e >>> 8),
      (this[t] = e & 255),
      t + 4
    )
  }
  C.prototype.writeUint32BE = C.prototype.writeUInt32BE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || ne(this, e, t, 4, 4294967295, 0),
      (this[t] = e >>> 24),
      (this[t + 1] = e >>> 16),
      (this[t + 2] = e >>> 8),
      (this[t + 3] = e & 255),
      t + 4
    )
  }
  function wi(e, t, r, n, i) {
    vi(t, n, i, e, r, 7)
    let o = Number(t & BigInt(4294967295))
    ;(e[r++] = o),
      (o = o >> 8),
      (e[r++] = o),
      (o = o >> 8),
      (e[r++] = o),
      (o = o >> 8),
      (e[r++] = o)
    let s = Number((t >> BigInt(32)) & BigInt(4294967295))
    return (
      (e[r++] = s),
      (s = s >> 8),
      (e[r++] = s),
      (s = s >> 8),
      (e[r++] = s),
      (s = s >> 8),
      (e[r++] = s),
      r
    )
  }
  function Ei(e, t, r, n, i) {
    vi(t, n, i, e, r, 7)
    let o = Number(t & BigInt(4294967295))
    ;(e[r + 7] = o),
      (o = o >> 8),
      (e[r + 6] = o),
      (o = o >> 8),
      (e[r + 5] = o),
      (o = o >> 8),
      (e[r + 4] = o)
    let s = Number((t >> BigInt(32)) & BigInt(4294967295))
    return (
      (e[r + 3] = s),
      (s = s >> 8),
      (e[r + 2] = s),
      (s = s >> 8),
      (e[r + 1] = s),
      (s = s >> 8),
      (e[r] = s),
      r + 8
    )
  }
  C.prototype.writeBigUInt64LE = Se(function (e, t = 0) {
    return wi(this, e, t, BigInt(0), BigInt('0xffffffffffffffff'))
  })
  C.prototype.writeBigUInt64BE = Se(function (e, t = 0) {
    return Ei(this, e, t, BigInt(0), BigInt('0xffffffffffffffff'))
  })
  C.prototype.writeIntLE = function (e, t, r, n) {
    if (((e = +e), (t = t >>> 0), !n)) {
      let a = Math.pow(2, 8 * r - 1)
      ne(this, e, t, r, a - 1, -a)
    }
    let i = 0,
      o = 1,
      s = 0
    for (this[t] = e & 255; ++i < r && (o *= 256); )
      e < 0 && s === 0 && this[t + i - 1] !== 0 && (s = 1),
        (this[t + i] = (((e / o) >> 0) - s) & 255)
    return t + r
  }
  C.prototype.writeIntBE = function (e, t, r, n) {
    if (((e = +e), (t = t >>> 0), !n)) {
      let a = Math.pow(2, 8 * r - 1)
      ne(this, e, t, r, a - 1, -a)
    }
    let i = r - 1,
      o = 1,
      s = 0
    for (this[t + i] = e & 255; --i >= 0 && (o *= 256); )
      e < 0 && s === 0 && this[t + i + 1] !== 0 && (s = 1),
        (this[t + i] = (((e / o) >> 0) - s) & 255)
    return t + r
  }
  C.prototype.writeInt8 = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || ne(this, e, t, 1, 127, -128),
      e < 0 && (e = 255 + e + 1),
      (this[t] = e & 255),
      t + 1
    )
  }
  C.prototype.writeInt16LE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || ne(this, e, t, 2, 32767, -32768),
      (this[t] = e & 255),
      (this[t + 1] = e >>> 8),
      t + 2
    )
  }
  C.prototype.writeInt16BE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || ne(this, e, t, 2, 32767, -32768),
      (this[t] = e >>> 8),
      (this[t + 1] = e & 255),
      t + 2
    )
  }
  C.prototype.writeInt32LE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || ne(this, e, t, 4, 2147483647, -2147483648),
      (this[t] = e & 255),
      (this[t + 1] = e >>> 8),
      (this[t + 2] = e >>> 16),
      (this[t + 3] = e >>> 24),
      t + 4
    )
  }
  C.prototype.writeInt32BE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || ne(this, e, t, 4, 2147483647, -2147483648),
      e < 0 && (e = 4294967295 + e + 1),
      (this[t] = e >>> 24),
      (this[t + 1] = e >>> 16),
      (this[t + 2] = e >>> 8),
      (this[t + 3] = e & 255),
      t + 4
    )
  }
  C.prototype.writeBigInt64LE = Se(function (e, t = 0) {
    return wi(
      this,
      e,
      t,
      -BigInt('0x8000000000000000'),
      BigInt('0x7fffffffffffffff'),
    )
  })
  C.prototype.writeBigInt64BE = Se(function (e, t = 0) {
    return Ei(
      this,
      e,
      t,
      -BigInt('0x8000000000000000'),
      BigInt('0x7fffffffffffffff'),
    )
  })
  function bi(e, t, r, n, i, o) {
    if (r + n > e.length) throw new RangeError('Index out of range')
    if (r < 0) throw new RangeError('Index out of range')
  }
  function xi(e, t, r, n, i) {
    return (
      (t = +t),
      (r = r >>> 0),
      i || bi(e, t, r, 4, 34028234663852886e22, -34028234663852886e22),
      Ke.write(e, t, r, n, 23, 4),
      r + 4
    )
  }
  C.prototype.writeFloatLE = function (e, t, r) {
    return xi(this, e, t, !0, r)
  }
  C.prototype.writeFloatBE = function (e, t, r) {
    return xi(this, e, t, !1, r)
  }
  function Pi(e, t, r, n, i) {
    return (
      (t = +t),
      (r = r >>> 0),
      i || bi(e, t, r, 8, 17976931348623157e292, -17976931348623157e292),
      Ke.write(e, t, r, n, 52, 8),
      r + 8
    )
  }
  C.prototype.writeDoubleLE = function (e, t, r) {
    return Pi(this, e, t, !0, r)
  }
  C.prototype.writeDoubleBE = function (e, t, r) {
    return Pi(this, e, t, !1, r)
  }
  C.prototype.copy = function (e, t, r, n) {
    if (!C.isBuffer(e)) throw new TypeError('argument should be a Buffer')
    if (
      (r || (r = 0),
      !n && n !== 0 && (n = this.length),
      t >= e.length && (t = e.length),
      t || (t = 0),
      n > 0 && n < r && (n = r),
      n === r || e.length === 0 || this.length === 0)
    )
      return 0
    if (t < 0) throw new RangeError('targetStart out of bounds')
    if (r < 0 || r >= this.length) throw new RangeError('Index out of range')
    if (n < 0) throw new RangeError('sourceEnd out of bounds')
    n > this.length && (n = this.length),
      e.length - t < n - r && (n = e.length - t + r)
    let i = n - r
    return (
      this === e && typeof Uint8Array.prototype.copyWithin == 'function'
        ? this.copyWithin(t, r, n)
        : Uint8Array.prototype.set.call(e, this.subarray(r, n), t),
      i
    )
  }
  C.prototype.fill = function (e, t, r, n) {
    if (typeof e == 'string') {
      if (
        (typeof t == 'string'
          ? ((n = t), (t = 0), (r = this.length))
          : typeof r == 'string' && ((n = r), (r = this.length)),
        n !== void 0 && typeof n != 'string')
      )
        throw new TypeError('encoding must be a string')
      if (typeof n == 'string' && !C.isEncoding(n))
        throw new TypeError('Unknown encoding: ' + n)
      if (e.length === 1) {
        let o = e.charCodeAt(0)
        ;((n === 'utf8' && o < 128) || n === 'latin1') && (e = o)
      }
    } else
      typeof e == 'number'
        ? (e = e & 255)
        : typeof e == 'boolean' && (e = Number(e))
    if (t < 0 || this.length < t || this.length < r)
      throw new RangeError('Out of range index')
    if (r <= t) return this
    ;(t = t >>> 0), (r = r === void 0 ? this.length : r >>> 0), e || (e = 0)
    let i
    if (typeof e == 'number') for (i = t; i < r; ++i) this[i] = e
    else {
      let o = C.isBuffer(e) ? e : C.from(e, n),
        s = o.length
      if (s === 0)
        throw new TypeError(
          'The value "' + e + '" is invalid for argument "value"',
        )
      for (i = 0; i < r - t; ++i) this[i + t] = o[i % s]
    }
    return this
  }
  var He = {}
  function cn(e, t, r) {
    He[e] = class extends r {
      constructor() {
        super(),
          Object.defineProperty(this, 'message', {
            value: t.apply(this, arguments),
            writable: !0,
            configurable: !0,
          }),
          (this.name = `${this.name} [${e}]`),
          this.stack,
          delete this.name
      }
      get code() {
        return e
      }
      set code(n) {
        Object.defineProperty(this, 'code', {
          configurable: !0,
          enumerable: !0,
          value: n,
          writable: !0,
        })
      }
      toString() {
        return `${this.name} [${e}]: ${this.message}`
      }
    }
  }
  cn(
    'ERR_BUFFER_OUT_OF_BOUNDS',
    function (e) {
      return e
        ? `${e} is outside of buffer bounds`
        : 'Attempt to access memory outside buffer bounds'
    },
    RangeError,
  )
  cn(
    'ERR_INVALID_ARG_TYPE',
    function (e, t) {
      return `The "${e}" argument must be of type number. Received type ${typeof t}`
    },
    TypeError,
  )
  cn(
    'ERR_OUT_OF_RANGE',
    function (e, t, r) {
      let n = `The value of "${e}" is out of range.`,
        i = r
      return (
        Number.isInteger(r) && Math.abs(r) > 2 ** 32
          ? (i = ci(String(r)))
          : typeof r == 'bigint' &&
            ((i = String(r)),
            (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) &&
              (i = ci(i)),
            (i += 'n')),
        (n += ` It must be ${t}. Received ${i}`),
        n
      )
    },
    RangeError,
  )
  function ci(e) {
    let t = '',
      r = e.length,
      n = e[0] === '-' ? 1 : 0
    for (; r >= n + 4; r -= 3) t = `_${e.slice(r - 3, r)}${t}`
    return `${e.slice(0, r)}${t}`
  }
  function qa(e, t, r) {
    ze(t, 'offset'),
      (e[t] === void 0 || e[t + r] === void 0) && vt(t, e.length - (r + 1))
  }
  function vi(e, t, r, n, i, o) {
    if (e > r || e < t) {
      let s = typeof t == 'bigint' ? 'n' : '',
        a
      throw (
        (o > 3
          ? t === 0 || t === BigInt(0)
            ? (a = `>= 0${s} and < 2${s} ** ${(o + 1) * 8}${s}`)
            : (a = `>= -(2${s} ** ${(o + 1) * 8 - 1}${s}) and < 2 ** ${(o + 1) * 8 - 1}${s}`)
          : (a = `>= ${t}${s} and <= ${r}${s}`),
        new He.ERR_OUT_OF_RANGE('value', a, e))
      )
    }
    qa(n, i, o)
  }
  function ze(e, t) {
    if (typeof e != 'number') throw new He.ERR_INVALID_ARG_TYPE(t, 'number', e)
  }
  function vt(e, t, r) {
    throw Math.floor(e) !== e
      ? (ze(e, r), new He.ERR_OUT_OF_RANGE(r || 'offset', 'an integer', e))
      : t < 0
        ? new He.ERR_BUFFER_OUT_OF_BOUNDS()
        : new He.ERR_OUT_OF_RANGE(
            r || 'offset',
            `>= ${r ? 1 : 0} and <= ${t}`,
            e,
          )
  }
  var Ua = /[^+/0-9A-Za-z-_]/g
  function $a(e) {
    if (((e = e.split('=')[0]), (e = e.trim().replace(Ua, '')), e.length < 2))
      return ''
    for (; e.length % 4 !== 0; ) e = e + '='
    return e
  }
  function an(e, t) {
    t = t || 1 / 0
    let r,
      n = e.length,
      i = null,
      o = []
    for (let s = 0; s < n; ++s) {
      if (((r = e.charCodeAt(s)), r > 55295 && r < 57344)) {
        if (!i) {
          if (r > 56319) {
            ;(t -= 3) > -1 && o.push(239, 191, 189)
            continue
          } else if (s + 1 === n) {
            ;(t -= 3) > -1 && o.push(239, 191, 189)
            continue
          }
          i = r
          continue
        }
        if (r < 56320) {
          ;(t -= 3) > -1 && o.push(239, 191, 189), (i = r)
          continue
        }
        r = (((i - 55296) << 10) | (r - 56320)) + 65536
      } else i && (t -= 3) > -1 && o.push(239, 191, 189)
      if (((i = null), r < 128)) {
        if ((t -= 1) < 0) break
        o.push(r)
      } else if (r < 2048) {
        if ((t -= 2) < 0) break
        o.push((r >> 6) | 192, (r & 63) | 128)
      } else if (r < 65536) {
        if ((t -= 3) < 0) break
        o.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (r & 63) | 128)
      } else if (r < 1114112) {
        if ((t -= 4) < 0) break
        o.push(
          (r >> 18) | 240,
          ((r >> 12) & 63) | 128,
          ((r >> 6) & 63) | 128,
          (r & 63) | 128,
        )
      } else throw new Error('Invalid code point')
    }
    return o
  }
  function Va(e) {
    let t = []
    for (let r = 0; r < e.length; ++r) t.push(e.charCodeAt(r) & 255)
    return t
  }
  function ja(e, t) {
    let r,
      n,
      i,
      o = []
    for (let s = 0; s < e.length && !((t -= 2) < 0); ++s)
      (r = e.charCodeAt(s)), (n = r >> 8), (i = r % 256), o.push(i), o.push(n)
    return o
  }
  function Ti(e) {
    return on.toByteArray($a(e))
  }
  function ur(e, t, r, n) {
    let i
    for (i = 0; i < n && !(i + r >= t.length || i >= e.length); ++i)
      t[i + r] = e[i]
    return i
  }
  function fe(e, t) {
    return (
      e instanceof t ||
      (e != null &&
        e.constructor != null &&
        e.constructor.name != null &&
        e.constructor.name === t.name)
    )
  }
  function pn(e) {
    return e !== e
  }
  var Ga = (function () {
    let e = '0123456789abcdef',
      t = new Array(256)
    for (let r = 0; r < 16; ++r) {
      let n = r * 16
      for (let i = 0; i < 16; ++i) t[n + i] = e[r] + e[i]
    }
    return t
  })()
  function Se(e) {
    return typeof BigInt > 'u' ? Ja : e
  }
  function Ja() {
    throw new Error('BigInt not supported')
  }
})
var E,
  d = Re(() => {
    'use strict'
    E = We(Ci())
  })
function el() {
  return !1
}
function Ji() {
  return {
    dev: 0,
    ino: 0,
    mode: 0,
    nlink: 0,
    uid: 0,
    gid: 0,
    rdev: 0,
    size: 0,
    blksize: 0,
    blocks: 0,
    atimeMs: 0,
    mtimeMs: 0,
    ctimeMs: 0,
    birthtimeMs: 0,
    atime: new Date(),
    mtime: new Date(),
    ctime: new Date(),
    birthtime: new Date(),
  }
}
function tl() {
  return Ji()
}
function rl() {
  return []
}
function nl(e) {
  e(null, [])
}
function il() {
  return ''
}
function ol() {
  return ''
}
function sl() {}
function al() {}
function ll() {}
function ul() {}
function cl() {}
function pl() {}
var ml,
  dl,
  Qi,
  Wi = Re(() => {
    'use strict'
    d()
    u()
    c()
    p()
    m()
    ;(ml = {}),
      (dl = {
        existsSync: el,
        lstatSync: Ji,
        statSync: tl,
        readdirSync: rl,
        readdir: nl,
        readlinkSync: il,
        realpathSync: ol,
        chmodSync: sl,
        renameSync: al,
        mkdirSync: ll,
        rmdirSync: ul,
        rmSync: cl,
        unlinkSync: pl,
        promises: ml,
      }),
      (Qi = dl)
  })
function fl(...e) {
  return e.join('/')
}
function gl(...e) {
  return e.join('/')
}
function hl(e) {
  let t = Hi(e),
    r = Ki(e),
    [n, i] = t.split('.')
  return { root: '/', dir: r, base: t, ext: i, name: n }
}
function Hi(e) {
  let t = e.split('/')
  return t[t.length - 1]
}
function Ki(e) {
  return e.split('/').slice(0, -1).join('/')
}
var zi,
  yl,
  wl,
  Ct,
  Yi = Re(() => {
    'use strict'
    d()
    u()
    c()
    p()
    m()
    ;(zi = '/'),
      (yl = { sep: zi }),
      (wl = {
        basename: Hi,
        dirname: Ki,
        join: gl,
        parse: hl,
        posix: yl,
        resolve: fl,
        sep: zi,
      }),
      (Ct = wl)
  })
var Zi = Le((Qd, El) => {
  El.exports = {
    name: '@prisma/internals',
    version: '6.5.0',
    description: "This package is intended for Prisma's internal use",
    main: 'dist/index.js',
    types: 'dist/index.d.ts',
    repository: {
      type: 'git',
      url: 'https://github.com/prisma/prisma.git',
      directory: 'packages/internals',
    },
    homepage: 'https://www.prisma.io',
    author: 'Tim Suchanek <suchanek@prisma.io>',
    bugs: 'https://github.com/prisma/prisma/issues',
    license: 'Apache-2.0',
    scripts: {
      dev: 'DEV=true tsx helpers/build.ts',
      build: 'tsx helpers/build.ts',
      test: 'dotenv -e ../../.db.env -- jest --silent',
      prepublishOnly: 'pnpm run build',
    },
    files: [
      'README.md',
      'dist',
      '!**/libquery_engine*',
      '!dist/get-generators/engines/*',
      'scripts',
    ],
    devDependencies: {
      '@antfu/ni': '0.21.12',
      '@babel/helper-validator-identifier': '7.25.9',
      '@opentelemetry/api': '1.9.0',
      '@swc/core': '1.11.5',
      '@swc/jest': '0.2.37',
      '@types/babel__helper-validator-identifier': '7.15.2',
      '@types/jest': '29.5.14',
      '@types/node': '18.19.76',
      '@types/resolve': '1.20.6',
      archiver: '6.0.2',
      'checkpoint-client': '1.1.33',
      'cli-truncate': '4.0.0',
      dotenv: '16.4.7',
      esbuild: '0.24.2',
      'escape-string-regexp': '4.0.0',
      execa: '5.1.1',
      'fast-glob': '3.3.3',
      'find-up': '7.0.0',
      'fp-ts': '2.16.9',
      'fs-extra': '11.3.0',
      'fs-jetpack': '5.1.0',
      'global-dirs': '4.0.0',
      globby: '11.1.0',
      'identifier-regex': '1.0.0',
      'indent-string': '4.0.0',
      'is-windows': '1.0.2',
      'is-wsl': '3.1.0',
      jest: '29.7.0',
      'jest-junit': '16.0.0',
      kleur: '4.1.5',
      'mock-stdin': '1.0.0',
      'new-github-issue-url': '0.2.1',
      'node-fetch': '3.3.2',
      'npm-packlist': '5.1.3',
      open: '7.4.2',
      'p-map': '4.0.0',
      'read-package-up': '11.0.0',
      resolve: '1.22.10',
      'string-width': '4.2.3',
      'strip-ansi': '6.0.1',
      'strip-indent': '3.0.0',
      'temp-dir': '2.0.0',
      tempy: '1.0.1',
      'terminal-link': '2.1.1',
      tmp: '0.2.3',
      'ts-node': '10.9.2',
      'ts-pattern': '5.6.2',
      'ts-toolbelt': '9.6.0',
      typescript: '5.4.5',
      yarn: '1.22.22',
    },
    dependencies: {
      '@prisma/config': 'workspace:*',
      '@prisma/debug': 'workspace:*',
      '@prisma/engines': 'workspace:*',
      '@prisma/fetch-engine': 'workspace:*',
      '@prisma/generator-helper': 'workspace:*',
      '@prisma/get-platform': 'workspace:*',
      '@prisma/prisma-schema-wasm':
        '6.5.0-73.173f8d54f8d52e692c7e27e72a88314ec7aeff60',
      '@prisma/schema-files-loader': 'workspace:*',
      arg: '5.0.2',
      prompts: '2.4.2',
    },
    peerDependencies: { typescript: '>=5.1.0' },
    peerDependenciesMeta: { typescript: { optional: !0 } },
    sideEffects: !1,
  }
})
var hr,
  to = Re(() => {
    'use strict'
    d()
    u()
    c()
    p()
    m()
    hr = class {
      constructor() {
        w(this, 'events', {})
      }
      on(t, r) {
        return (
          this.events[t] || (this.events[t] = []), this.events[t].push(r), this
        )
      }
      emit(t, ...r) {
        return this.events[t]
          ? (this.events[t].forEach(n => {
              n(...r)
            }),
            !0)
          : !1
      }
    }
  })
var no = Le((Mf, ro) => {
  'use strict'
  d()
  u()
  c()
  p()
  m()
  ro.exports = (e, t = 1, r) => {
    if (
      ((r = { indent: ' ', includeEmptyLines: !1, ...r }), typeof e != 'string')
    )
      throw new TypeError(
        `Expected \`input\` to be a \`string\`, got \`${typeof e}\``,
      )
    if (typeof t != 'number')
      throw new TypeError(
        `Expected \`count\` to be a \`number\`, got \`${typeof t}\``,
      )
    if (typeof r.indent != 'string')
      throw new TypeError(
        `Expected \`options.indent\` to be a \`string\`, got \`${typeof r.indent}\``,
      )
    if (t === 0) return e
    let n = r.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm
    return e.replace(n, r.indent.repeat(t))
  }
})
var so = Le((Jf, oo) => {
  'use strict'
  d()
  u()
  c()
  p()
  m()
  oo.exports = ({ onlyFirst: e = !1 } = {}) => {
    let t = [
      '[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)',
      '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))',
    ].join('|')
    return new RegExp(t, e ? void 0 : 'g')
  }
})
var lo = Le((Yf, ao) => {
  'use strict'
  d()
  u()
  c()
  p()
  m()
  var Al = so()
  ao.exports = e => (typeof e == 'string' ? e.replace(Al(), '') : e)
})
var Sn = Le((Gy, Ao) => {
  'use strict'
  d()
  u()
  c()
  p()
  m()
  Ao.exports = (function () {
    function e(t, r, n, i, o) {
      return t < r || n < r ? (t > n ? n + 1 : t + 1) : i === o ? r : r + 1
    }
    return function (t, r) {
      if (t === r) return 0
      if (t.length > r.length) {
        var n = t
        ;(t = r), (r = n)
      }
      for (
        var i = t.length, o = r.length;
        i > 0 && t.charCodeAt(i - 1) === r.charCodeAt(o - 1);

      )
        i--, o--
      for (var s = 0; s < i && t.charCodeAt(s) === r.charCodeAt(s); ) s++
      if (((i -= s), (o -= s), i === 0 || o < 3)) return o
      var a = 0,
        l,
        f,
        g,
        h,
        T,
        k,
        R,
        S,
        M,
        N,
        U,
        D,
        L = []
      for (l = 0; l < i; l++) L.push(l + 1), L.push(t.charCodeAt(s + l))
      for (var B = L.length - 1; a < o - 3; )
        for (
          M = r.charCodeAt(s + (f = a)),
            N = r.charCodeAt(s + (g = a + 1)),
            U = r.charCodeAt(s + (h = a + 2)),
            D = r.charCodeAt(s + (T = a + 3)),
            k = a += 4,
            l = 0;
          l < B;
          l += 2
        )
          (R = L[l]),
            (S = L[l + 1]),
            (f = e(R, f, g, M, S)),
            (g = e(f, g, h, N, S)),
            (h = e(g, h, T, U, S)),
            (k = e(h, T, k, D, S)),
            (L[l] = k),
            (T = h),
            (h = g),
            (g = f),
            (f = R)
      for (; a < o; )
        for (M = r.charCodeAt(s + (f = a)), k = ++a, l = 0; l < B; l += 2)
          (R = L[l]), (L[l] = k = e(R, f, k, M, L[l + 1])), (f = R)
      return k
    }
  })()
})
var Zo = Le((Ux, hc) => {
  hc.exports = {
    name: '@prisma/engines-version',
    version: '6.5.0-73.173f8d54f8d52e692c7e27e72a88314ec7aeff60',
    main: 'index.js',
    types: 'index.d.ts',
    license: 'Apache-2.0',
    author: 'Tim Suchanek <suchanek@prisma.io>',
    prisma: { enginesVersion: '173f8d54f8d52e692c7e27e72a88314ec7aeff60' },
    repository: {
      type: 'git',
      url: 'https://github.com/prisma/engines-wrapper.git',
      directory: 'packages/engines-version',
    },
    devDependencies: { '@types/node': '18.19.76', typescript: '4.9.5' },
    files: ['index.js', 'index.d.ts'],
    scripts: { build: 'tsc -d' },
  }
})
d()
u()
c()
p()
m()
var Si = {}
nn(Si, { defineExtension: () => Ai, getExtensionContext: () => Ri })
d()
u()
c()
p()
m()
d()
u()
c()
p()
m()
function Ai(e) {
  return typeof e == 'function' ? e : t => t.$extends(e)
}
d()
u()
c()
p()
m()
function Ri(e) {
  return e
}
var Ii = {}
nn(Ii, { validator: () => ki })
d()
u()
c()
p()
m()
d()
u()
c()
p()
m()
function ki(...e) {
  return t => t
}
d()
u()
c()
p()
m()
d()
u()
c()
p()
m()
d()
u()
c()
p()
m()
d()
u()
c()
p()
m()
d()
u()
c()
p()
m()
function mn(e) {
  return e.name === 'DriverAdapterError' && typeof e.cause == 'object'
}
d()
u()
c()
p()
m()
function cr(e) {
  return {
    ok: !0,
    value: e,
    map(t) {
      return cr(t(e))
    },
    flatMap(t) {
      return t(e)
    },
  }
}
function qe(e) {
  return {
    ok: !1,
    error: e,
    map() {
      return qe(e)
    },
    flatMap() {
      return qe(e)
    },
  }
}
var dn = class {
    constructor() {
      w(this, 'registeredErrors', [])
    }
    consumeError(t) {
      return this.registeredErrors[t]
    }
    registerNewError(t) {
      let r = 0
      for (; this.registeredErrors[r] !== void 0; ) r++
      return (this.registeredErrors[r] = { error: t }), r
    }
  },
  fn = e => {
    let t = new dn(),
      r = ce(t, e.transactionContext.bind(e)),
      n = {
        adapterName: e.adapterName,
        errorRegistry: t,
        queryRaw: ce(t, e.queryRaw.bind(e)),
        executeRaw: ce(t, e.executeRaw.bind(e)),
        executeScript: ce(t, e.executeScript.bind(e)),
        dispose: ce(t, e.dispose.bind(e)),
        provider: e.provider,
        transactionContext: async (...i) => (await r(...i)).map(s => Qa(t, s)),
      }
    return (
      e.getConnectionInfo &&
        (n.getConnectionInfo = Ha(t, e.getConnectionInfo.bind(e))),
      n
    )
  },
  Qa = (e, t) => {
    let r = ce(e, t.startTransaction.bind(t))
    return {
      adapterName: t.adapterName,
      provider: t.provider,
      queryRaw: ce(e, t.queryRaw.bind(t)),
      executeRaw: ce(e, t.executeRaw.bind(t)),
      startTransaction: async (...n) => (await r(...n)).map(o => Wa(e, o)),
    }
  },
  Wa = (e, t) => ({
    adapterName: t.adapterName,
    provider: t.provider,
    options: t.options,
    queryRaw: ce(e, t.queryRaw.bind(t)),
    executeRaw: ce(e, t.executeRaw.bind(t)),
    commit: ce(e, t.commit.bind(t)),
    rollback: ce(e, t.rollback.bind(t)),
  })
function ce(e, t) {
  return async (...r) => {
    try {
      return cr(await t(...r))
    } catch (n) {
      if (mn(n)) return qe(n.cause)
      let i = e.registerNewError(n)
      return qe({ kind: 'GenericJs', id: i })
    }
  }
}
function Ha(e, t) {
  return (...r) => {
    try {
      return cr(t(...r))
    } catch (n) {
      if (mn(n)) return qe(n.cause)
      let i = e.registerNewError(n)
      return qe({ kind: 'GenericJs', id: i })
    }
  }
}
d()
u()
c()
p()
m()
d()
u()
c()
p()
m()
var gn,
  Oi,
  Di,
  Mi,
  Ni = !0
typeof y < 'u' &&
  (({
    FORCE_COLOR: gn,
    NODE_DISABLE_COLORS: Oi,
    NO_COLOR: Di,
    TERM: Mi,
  } = y.env || {}),
  (Ni = y.stdout && y.stdout.isTTY))
var Ka = {
  enabled:
    !Oi && Di == null && Mi !== 'dumb' && ((gn != null && gn !== '0') || Ni),
}
function G(e, t) {
  let r = new RegExp(`\\x1b\\[${t}m`, 'g'),
    n = `\x1B[${e}m`,
    i = `\x1B[${t}m`
  return function (o) {
    return !Ka.enabled || o == null
      ? o
      : n + (~('' + o).indexOf(i) ? o.replace(r, i + n) : o) + i
  }
}
var Vm = G(0, 0),
  pr = G(1, 22),
  mr = G(2, 22),
  jm = G(3, 23),
  _i = G(4, 24),
  Gm = G(7, 27),
  Jm = G(8, 28),
  Qm = G(9, 29),
  Wm = G(30, 39),
  Ze = G(31, 39),
  Fi = G(32, 39),
  Li = G(33, 39),
  Bi = G(34, 39),
  Hm = G(35, 39),
  qi = G(36, 39),
  Km = G(37, 39),
  Ui = G(90, 39),
  zm = G(90, 39),
  Ym = G(40, 49),
  Zm = G(41, 49),
  Xm = G(42, 49),
  ed = G(43, 49),
  td = G(44, 49),
  rd = G(45, 49),
  nd = G(46, 49),
  id = G(47, 49)
var za = 100,
  $i = ['green', 'yellow', 'blue', 'magenta', 'cyan', 'red'],
  dr = [],
  Vi = Date.now(),
  Ya = 0,
  hn = typeof y < 'u' ? y.env : {}
globalThis.DEBUG ??= hn.DEBUG ?? ''
globalThis.DEBUG_COLORS ??= hn.DEBUG_COLORS ? hn.DEBUG_COLORS === 'true' : !0
var Tt = {
  enable(e) {
    typeof e == 'string' && (globalThis.DEBUG = e)
  },
  disable() {
    let e = globalThis.DEBUG
    return (globalThis.DEBUG = ''), e
  },
  enabled(e) {
    let t = globalThis.DEBUG.split(',').map(i =>
        i.replace(/[.+?^${}()|[\]\\]/g, '\\$&'),
      ),
      r = t.some(i =>
        i === '' || i[0] === '-'
          ? !1
          : e.match(RegExp(i.split('*').join('.*') + '$')),
      ),
      n = t.some(i =>
        i === '' || i[0] !== '-'
          ? !1
          : e.match(RegExp(i.slice(1).split('*').join('.*') + '$')),
      )
    return r && !n
  },
  log: (...e) => {
    let [t, r, ...n] = e
    ;(console.warn ?? console.log)(`${t} ${r}`, ...n)
  },
  formatters: {},
}
function Za(e) {
  let t = {
      color: $i[Ya++ % $i.length],
      enabled: Tt.enabled(e),
      namespace: e,
      log: Tt.log,
      extend: () => {},
    },
    r = (...n) => {
      let { enabled: i, namespace: o, color: s, log: a } = t
      if (
        (n.length !== 0 && dr.push([o, ...n]),
        dr.length > za && dr.shift(),
        Tt.enabled(o) || i)
      ) {
        let l = n.map(g => (typeof g == 'string' ? g : Xa(g))),
          f = `+${Date.now() - Vi}ms`
        ;(Vi = Date.now()), a(o, ...l, f)
      }
    }
  return new Proxy(r, { get: (n, i) => t[i], set: (n, i, o) => (t[i] = o) })
}
var ji = new Proxy(Za, { get: (e, t) => Tt[t], set: (e, t, r) => (Tt[t] = r) })
function Xa(e, t = 2) {
  let r = new Set()
  return JSON.stringify(
    e,
    (n, i) => {
      if (typeof i == 'object' && i !== null) {
        if (r.has(i)) return '[Circular *]'
        r.add(i)
      } else if (typeof i == 'bigint') return i.toString()
      return i
    },
    t,
  )
}
function Gi() {
  dr.length = 0
}
var ee = ji
d()
u()
c()
p()
m()
d()
u()
c()
p()
m()
var bl = Zi(),
  yn = bl.version
d()
u()
c()
p()
m()
var Xi = 'library'
function Xe(e) {
  let t = xl()
  return (
    t ||
    (e?.config.engineType === 'library'
      ? 'library'
      : e?.config.engineType === 'binary'
        ? 'binary'
        : e?.config.engineType === 'client'
          ? 'client'
          : Xi)
  )
}
function xl() {
  let e = y.env.PRISMA_CLIENT_ENGINE_TYPE
  return e === 'library'
    ? 'library'
    : e === 'binary'
      ? 'binary'
      : e === 'client'
        ? 'client'
        : void 0
}
d()
u()
c()
p()
m()
var eo = 'prisma+postgres',
  fr = `${eo}:`
function wn(e) {
  return e?.startsWith(`${fr}//`) ?? !1
}
d()
u()
c()
p()
m()
d()
u()
c()
p()
m()
var gr
;(t => {
  let e
  ;(B => (
    (B.findUnique = 'findUnique'),
    (B.findUniqueOrThrow = 'findUniqueOrThrow'),
    (B.findFirst = 'findFirst'),
    (B.findFirstOrThrow = 'findFirstOrThrow'),
    (B.findMany = 'findMany'),
    (B.create = 'create'),
    (B.createMany = 'createMany'),
    (B.createManyAndReturn = 'createManyAndReturn'),
    (B.update = 'update'),
    (B.updateMany = 'updateMany'),
    (B.updateManyAndReturn = 'updateManyAndReturn'),
    (B.upsert = 'upsert'),
    (B.delete = 'delete'),
    (B.deleteMany = 'deleteMany'),
    (B.groupBy = 'groupBy'),
    (B.count = 'count'),
    (B.aggregate = 'aggregate'),
    (B.findRaw = 'findRaw'),
    (B.aggregateRaw = 'aggregateRaw')
  ))((e = t.ModelAction ||= {}))
})((gr ||= {}))
var Rt = {}
nn(Rt, {
  error: () => Tl,
  info: () => vl,
  log: () => Pl,
  query: () => Cl,
  should: () => io,
  tags: () => At,
  warn: () => En,
})
d()
u()
c()
p()
m()
var At = {
    error: Ze('prisma:error'),
    warn: Li('prisma:warn'),
    info: qi('prisma:info'),
    query: Bi('prisma:query'),
  },
  io = { warn: () => !y.env.PRISMA_DISABLE_WARNINGS }
function Pl(...e) {
  console.log(...e)
}
function En(e, ...t) {
  io.warn() && console.warn(`${At.warn} ${e}`, ...t)
}
function vl(e, ...t) {
  console.info(`${At.info} ${e}`, ...t)
}
function Tl(e, ...t) {
  console.error(`${At.error} ${e}`, ...t)
}
function Cl(e, ...t) {
  console.log(`${At.query} ${e}`, ...t)
}
d()
u()
c()
p()
m()
function Pe(e, t) {
  throw new Error(t)
}
d()
u()
c()
p()
m()
function bn(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t)
}
d()
u()
c()
p()
m()
var xn = (e, t) => e.reduce((r, n) => ((r[t(n)] = n), r), {})
d()
u()
c()
p()
m()
function et(e, t) {
  let r = {}
  for (let n of Object.keys(e)) r[n] = t(e[n], n)
  return r
}
d()
u()
c()
p()
m()
function Pn(e, t) {
  if (e.length === 0) return
  let r = e[0]
  for (let n = 1; n < e.length; n++) t(r, e[n]) < 0 && (r = e[n])
  return r
}
d()
u()
c()
p()
m()
function F(e, t) {
  Object.defineProperty(e, 'name', { value: t, configurable: !0 })
}
d()
u()
c()
p()
m()
var uo = new Set(),
  yr = (e, t, ...r) => {
    uo.has(e) || (uo.add(e), En(t, ...r))
  }
var W = class e extends Error {
  constructor(r, n, i) {
    super(r)
    w(this, 'clientVersion')
    w(this, 'errorCode')
    w(this, 'retryable')
    ;(this.name = 'PrismaClientInitializationError'),
      (this.clientVersion = n),
      (this.errorCode = i),
      Error.captureStackTrace(e)
  }
  get [Symbol.toStringTag]() {
    return 'PrismaClientInitializationError'
  }
}
F(W, 'PrismaClientInitializationError')
d()
u()
c()
p()
m()
var se = class extends Error {
  constructor(r, { code: n, clientVersion: i, meta: o, batchRequestIdx: s }) {
    super(r)
    w(this, 'code')
    w(this, 'meta')
    w(this, 'clientVersion')
    w(this, 'batchRequestIdx')
    ;(this.name = 'PrismaClientKnownRequestError'),
      (this.code = n),
      (this.clientVersion = i),
      (this.meta = o),
      Object.defineProperty(this, 'batchRequestIdx', {
        value: s,
        enumerable: !1,
        writable: !0,
      })
  }
  get [Symbol.toStringTag]() {
    return 'PrismaClientKnownRequestError'
  }
}
F(se, 'PrismaClientKnownRequestError')
d()
u()
c()
p()
m()
var ke = class extends Error {
  constructor(r, n) {
    super(r)
    w(this, 'clientVersion')
    ;(this.name = 'PrismaClientRustPanicError'), (this.clientVersion = n)
  }
  get [Symbol.toStringTag]() {
    return 'PrismaClientRustPanicError'
  }
}
F(ke, 'PrismaClientRustPanicError')
d()
u()
c()
p()
m()
var ae = class extends Error {
  constructor(r, { clientVersion: n, batchRequestIdx: i }) {
    super(r)
    w(this, 'clientVersion')
    w(this, 'batchRequestIdx')
    ;(this.name = 'PrismaClientUnknownRequestError'),
      (this.clientVersion = n),
      Object.defineProperty(this, 'batchRequestIdx', {
        value: i,
        writable: !0,
        enumerable: !1,
      })
  }
  get [Symbol.toStringTag]() {
    return 'PrismaClientUnknownRequestError'
  }
}
F(ae, 'PrismaClientUnknownRequestError')
d()
u()
c()
p()
m()
var te = class extends Error {
  constructor(r, { clientVersion: n }) {
    super(r)
    w(this, 'name', 'PrismaClientValidationError')
    w(this, 'clientVersion')
    this.clientVersion = n
  }
  get [Symbol.toStringTag]() {
    return 'PrismaClientValidationError'
  }
}
F(te, 'PrismaClientValidationError')
d()
u()
c()
p()
m()
d()
u()
c()
p()
m()
var tt = 9e15,
  Me = 1e9,
  vn = '0123456789abcdef',
  br =
    '2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058',
  xr =
    '3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789',
  Tn = {
    precision: 20,
    rounding: 4,
    modulo: 1,
    toExpNeg: -7,
    toExpPos: 21,
    minE: -tt,
    maxE: tt,
    crypto: !1,
  },
  go,
  ve,
  _ = !0,
  vr = '[DecimalError] ',
  De = vr + 'Invalid argument: ',
  ho = vr + 'Precision limit exceeded',
  yo = vr + 'crypto unavailable',
  wo = '[object Decimal]',
  X = Math.floor,
  H = Math.pow,
  Rl = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
  Sl = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
  kl = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
  Eo = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
  me = 1e7,
  O = 7,
  Il = 9007199254740991,
  Ol = br.length - 1,
  Cn = xr.length - 1,
  A = { toStringTag: wo }
A.absoluteValue = A.abs = function () {
  var e = new this.constructor(this)
  return e.s < 0 && (e.s = 1), I(e)
}
A.ceil = function () {
  return I(new this.constructor(this), this.e + 1, 2)
}
A.clampedTo = A.clamp = function (e, t) {
  var r,
    n = this,
    i = n.constructor
  if (((e = new i(e)), (t = new i(t)), !e.s || !t.s)) return new i(NaN)
  if (e.gt(t)) throw Error(De + t)
  return (r = n.cmp(e)), r < 0 ? e : n.cmp(t) > 0 ? t : new i(n)
}
A.comparedTo = A.cmp = function (e) {
  var t,
    r,
    n,
    i,
    o = this,
    s = o.d,
    a = (e = new o.constructor(e)).d,
    l = o.s,
    f = e.s
  if (!s || !a)
    return !l || !f ? NaN : l !== f ? l : s === a ? 0 : !s ^ (l < 0) ? 1 : -1
  if (!s[0] || !a[0]) return s[0] ? l : a[0] ? -f : 0
  if (l !== f) return l
  if (o.e !== e.e) return (o.e > e.e) ^ (l < 0) ? 1 : -1
  for (n = s.length, i = a.length, t = 0, r = n < i ? n : i; t < r; ++t)
    if (s[t] !== a[t]) return (s[t] > a[t]) ^ (l < 0) ? 1 : -1
  return n === i ? 0 : (n > i) ^ (l < 0) ? 1 : -1
}
A.cosine = A.cos = function () {
  var e,
    t,
    r = this,
    n = r.constructor
  return r.d
    ? r.d[0]
      ? ((e = n.precision),
        (t = n.rounding),
        (n.precision = e + Math.max(r.e, r.sd()) + O),
        (n.rounding = 1),
        (r = Dl(n, To(n, r))),
        (n.precision = e),
        (n.rounding = t),
        I(ve == 2 || ve == 3 ? r.neg() : r, e, t, !0))
      : new n(1)
    : new n(NaN)
}
A.cubeRoot = A.cbrt = function () {
  var e,
    t,
    r,
    n,
    i,
    o,
    s,
    a,
    l,
    f,
    g = this,
    h = g.constructor
  if (!g.isFinite() || g.isZero()) return new h(g)
  for (
    _ = !1,
      o = g.s * H(g.s * g, 1 / 3),
      !o || Math.abs(o) == 1 / 0
        ? ((r = Y(g.d)),
          (e = g.e),
          (o = (e - r.length + 1) % 3) && (r += o == 1 || o == -2 ? '0' : '00'),
          (o = H(r, 1 / 3)),
          (e = X((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2))),
          o == 1 / 0
            ? (r = '5e' + e)
            : ((r = o.toExponential()),
              (r = r.slice(0, r.indexOf('e') + 1) + e)),
          (n = new h(r)),
          (n.s = g.s))
        : (n = new h(o.toString())),
      s = (e = h.precision) + 3;
    ;

  )
    if (
      ((a = n),
      (l = a.times(a).times(a)),
      (f = l.plus(g)),
      (n = V(f.plus(g).times(a), f.plus(l), s + 2, 1)),
      Y(a.d).slice(0, s) === (r = Y(n.d)).slice(0, s))
    )
      if (((r = r.slice(s - 3, s + 1)), r == '9999' || (!i && r == '4999'))) {
        if (!i && (I(a, e + 1, 0), a.times(a).times(a).eq(g))) {
          n = a
          break
        }
        ;(s += 4), (i = 1)
      } else {
        ;(!+r || (!+r.slice(1) && r.charAt(0) == '5')) &&
          (I(n, e + 1, 1), (t = !n.times(n).times(n).eq(g)))
        break
      }
  return (_ = !0), I(n, e, h.rounding, t)
}
A.decimalPlaces = A.dp = function () {
  var e,
    t = this.d,
    r = NaN
  if (t) {
    if (((e = t.length - 1), (r = (e - X(this.e / O)) * O), (e = t[e]), e))
      for (; e % 10 == 0; e /= 10) r--
    r < 0 && (r = 0)
  }
  return r
}
A.dividedBy = A.div = function (e) {
  return V(this, new this.constructor(e))
}
A.dividedToIntegerBy = A.divToInt = function (e) {
  var t = this,
    r = t.constructor
  return I(V(t, new r(e), 0, 1, 1), r.precision, r.rounding)
}
A.equals = A.eq = function (e) {
  return this.cmp(e) === 0
}
A.floor = function () {
  return I(new this.constructor(this), this.e + 1, 3)
}
A.greaterThan = A.gt = function (e) {
  return this.cmp(e) > 0
}
A.greaterThanOrEqualTo = A.gte = function (e) {
  var t = this.cmp(e)
  return t == 1 || t === 0
}
A.hyperbolicCosine = A.cosh = function () {
  var e,
    t,
    r,
    n,
    i,
    o = this,
    s = o.constructor,
    a = new s(1)
  if (!o.isFinite()) return new s(o.s ? 1 / 0 : NaN)
  if (o.isZero()) return a
  ;(r = s.precision),
    (n = s.rounding),
    (s.precision = r + Math.max(o.e, o.sd()) + 4),
    (s.rounding = 1),
    (i = o.d.length),
    i < 32
      ? ((e = Math.ceil(i / 3)), (t = (1 / Cr(4, e)).toString()))
      : ((e = 16), (t = '2.3283064365386962890625e-10')),
    (o = rt(s, 1, o.times(t), new s(1), !0))
  for (var l, f = e, g = new s(8); f--; )
    (l = o.times(o)), (o = a.minus(l.times(g.minus(l.times(g)))))
  return I(o, (s.precision = r), (s.rounding = n), !0)
}
A.hyperbolicSine = A.sinh = function () {
  var e,
    t,
    r,
    n,
    i = this,
    o = i.constructor
  if (!i.isFinite() || i.isZero()) return new o(i)
  if (
    ((t = o.precision),
    (r = o.rounding),
    (o.precision = t + Math.max(i.e, i.sd()) + 4),
    (o.rounding = 1),
    (n = i.d.length),
    n < 3)
  )
    i = rt(o, 2, i, i, !0)
  else {
    ;(e = 1.4 * Math.sqrt(n)),
      (e = e > 16 ? 16 : e | 0),
      (i = i.times(1 / Cr(5, e))),
      (i = rt(o, 2, i, i, !0))
    for (var s, a = new o(5), l = new o(16), f = new o(20); e--; )
      (s = i.times(i)), (i = i.times(a.plus(s.times(l.times(s).plus(f)))))
  }
  return (o.precision = t), (o.rounding = r), I(i, t, r, !0)
}
A.hyperbolicTangent = A.tanh = function () {
  var e,
    t,
    r = this,
    n = r.constructor
  return r.isFinite()
    ? r.isZero()
      ? new n(r)
      : ((e = n.precision),
        (t = n.rounding),
        (n.precision = e + 7),
        (n.rounding = 1),
        V(r.sinh(), r.cosh(), (n.precision = e), (n.rounding = t)))
    : new n(r.s)
}
A.inverseCosine = A.acos = function () {
  var e = this,
    t = e.constructor,
    r = e.abs().cmp(1),
    n = t.precision,
    i = t.rounding
  return r !== -1
    ? r === 0
      ? e.isNeg()
        ? ge(t, n, i)
        : new t(0)
      : new t(NaN)
    : e.isZero()
      ? ge(t, n + 4, i).times(0.5)
      : ((t.precision = n + 6),
        (t.rounding = 1),
        (e = new t(1).minus(e).div(e.plus(1)).sqrt().atan()),
        (t.precision = n),
        (t.rounding = i),
        e.times(2))
}
A.inverseHyperbolicCosine = A.acosh = function () {
  var e,
    t,
    r = this,
    n = r.constructor
  return r.lte(1)
    ? new n(r.eq(1) ? 0 : NaN)
    : r.isFinite()
      ? ((e = n.precision),
        (t = n.rounding),
        (n.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4),
        (n.rounding = 1),
        (_ = !1),
        (r = r.times(r).minus(1).sqrt().plus(r)),
        (_ = !0),
        (n.precision = e),
        (n.rounding = t),
        r.ln())
      : new n(r)
}
A.inverseHyperbolicSine = A.asinh = function () {
  var e,
    t,
    r = this,
    n = r.constructor
  return !r.isFinite() || r.isZero()
    ? new n(r)
    : ((e = n.precision),
      (t = n.rounding),
      (n.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6),
      (n.rounding = 1),
      (_ = !1),
      (r = r.times(r).plus(1).sqrt().plus(r)),
      (_ = !0),
      (n.precision = e),
      (n.rounding = t),
      r.ln())
}
A.inverseHyperbolicTangent = A.atanh = function () {
  var e,
    t,
    r,
    n,
    i = this,
    o = i.constructor
  return i.isFinite()
    ? i.e >= 0
      ? new o(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN)
      : ((e = o.precision),
        (t = o.rounding),
        (n = i.sd()),
        Math.max(n, e) < 2 * -i.e - 1
          ? I(new o(i), e, t, !0)
          : ((o.precision = r = n - i.e),
            (i = V(i.plus(1), new o(1).minus(i), r + e, 1)),
            (o.precision = e + 4),
            (o.rounding = 1),
            (i = i.ln()),
            (o.precision = e),
            (o.rounding = t),
            i.times(0.5)))
    : new o(NaN)
}
A.inverseSine = A.asin = function () {
  var e,
    t,
    r,
    n,
    i = this,
    o = i.constructor
  return i.isZero()
    ? new o(i)
    : ((t = i.abs().cmp(1)),
      (r = o.precision),
      (n = o.rounding),
      t !== -1
        ? t === 0
          ? ((e = ge(o, r + 4, n).times(0.5)), (e.s = i.s), e)
          : new o(NaN)
        : ((o.precision = r + 6),
          (o.rounding = 1),
          (i = i.div(new o(1).minus(i.times(i)).sqrt().plus(1)).atan()),
          (o.precision = r),
          (o.rounding = n),
          i.times(2)))
}
A.inverseTangent = A.atan = function () {
  var e,
    t,
    r,
    n,
    i,
    o,
    s,
    a,
    l,
    f = this,
    g = f.constructor,
    h = g.precision,
    T = g.rounding
  if (f.isFinite()) {
    if (f.isZero()) return new g(f)
    if (f.abs().eq(1) && h + 4 <= Cn)
      return (s = ge(g, h + 4, T).times(0.25)), (s.s = f.s), s
  } else {
    if (!f.s) return new g(NaN)
    if (h + 4 <= Cn) return (s = ge(g, h + 4, T).times(0.5)), (s.s = f.s), s
  }
  for (
    g.precision = a = h + 10,
      g.rounding = 1,
      r = Math.min(28, (a / O + 2) | 0),
      e = r;
    e;
    --e
  )
    f = f.div(f.times(f).plus(1).sqrt().plus(1))
  for (
    _ = !1, t = Math.ceil(a / O), n = 1, l = f.times(f), s = new g(f), i = f;
    e !== -1;

  )
    if (
      ((i = i.times(l)),
      (o = s.minus(i.div((n += 2)))),
      (i = i.times(l)),
      (s = o.plus(i.div((n += 2)))),
      s.d[t] !== void 0)
    )
      for (e = t; s.d[e] === o.d[e] && e--; );
  return (
    r && (s = s.times(2 << (r - 1))),
    (_ = !0),
    I(s, (g.precision = h), (g.rounding = T), !0)
  )
}
A.isFinite = function () {
  return !!this.d
}
A.isInteger = A.isInt = function () {
  return !!this.d && X(this.e / O) > this.d.length - 2
}
A.isNaN = function () {
  return !this.s
}
A.isNegative = A.isNeg = function () {
  return this.s < 0
}
A.isPositive = A.isPos = function () {
  return this.s > 0
}
A.isZero = function () {
  return !!this.d && this.d[0] === 0
}
A.lessThan = A.lt = function (e) {
  return this.cmp(e) < 0
}
A.lessThanOrEqualTo = A.lte = function (e) {
  return this.cmp(e) < 1
}
A.logarithm = A.log = function (e) {
  var t,
    r,
    n,
    i,
    o,
    s,
    a,
    l,
    f = this,
    g = f.constructor,
    h = g.precision,
    T = g.rounding,
    k = 5
  if (e == null) (e = new g(10)), (t = !0)
  else {
    if (((e = new g(e)), (r = e.d), e.s < 0 || !r || !r[0] || e.eq(1)))
      return new g(NaN)
    t = e.eq(10)
  }
  if (((r = f.d), f.s < 0 || !r || !r[0] || f.eq(1)))
    return new g(r && !r[0] ? -1 / 0 : f.s != 1 ? NaN : r ? 0 : 1 / 0)
  if (t)
    if (r.length > 1) o = !0
    else {
      for (i = r[0]; i % 10 === 0; ) i /= 10
      o = i !== 1
    }
  if (
    ((_ = !1),
    (a = h + k),
    (s = Oe(f, a)),
    (n = t ? Pr(g, a + 10) : Oe(e, a)),
    (l = V(s, n, a, 1)),
    St(l.d, (i = h), T))
  )
    do
      if (
        ((a += 10),
        (s = Oe(f, a)),
        (n = t ? Pr(g, a + 10) : Oe(e, a)),
        (l = V(s, n, a, 1)),
        !o)
      ) {
        ;+Y(l.d).slice(i + 1, i + 15) + 1 == 1e14 && (l = I(l, h + 1, 0))
        break
      }
    while (St(l.d, (i += 10), T))
  return (_ = !0), I(l, h, T)
}
A.minus = A.sub = function (e) {
  var t,
    r,
    n,
    i,
    o,
    s,
    a,
    l,
    f,
    g,
    h,
    T,
    k = this,
    R = k.constructor
  if (((e = new R(e)), !k.d || !e.d))
    return (
      !k.s || !e.s
        ? (e = new R(NaN))
        : k.d
          ? (e.s = -e.s)
          : (e = new R(e.d || k.s !== e.s ? k : NaN)),
      e
    )
  if (k.s != e.s) return (e.s = -e.s), k.plus(e)
  if (
    ((f = k.d), (T = e.d), (a = R.precision), (l = R.rounding), !f[0] || !T[0])
  ) {
    if (T[0]) e.s = -e.s
    else if (f[0]) e = new R(k)
    else return new R(l === 3 ? -0 : 0)
    return _ ? I(e, a, l) : e
  }
  if (((r = X(e.e / O)), (g = X(k.e / O)), (f = f.slice()), (o = g - r), o)) {
    for (
      h = o < 0,
        h
          ? ((t = f), (o = -o), (s = T.length))
          : ((t = T), (r = g), (s = f.length)),
        n = Math.max(Math.ceil(a / O), s) + 2,
        o > n && ((o = n), (t.length = 1)),
        t.reverse(),
        n = o;
      n--;

    )
      t.push(0)
    t.reverse()
  } else {
    for (n = f.length, s = T.length, h = n < s, h && (s = n), n = 0; n < s; n++)
      if (f[n] != T[n]) {
        h = f[n] < T[n]
        break
      }
    o = 0
  }
  for (
    h && ((t = f), (f = T), (T = t), (e.s = -e.s)),
      s = f.length,
      n = T.length - s;
    n > 0;
    --n
  )
    f[s++] = 0
  for (n = T.length; n > o; ) {
    if (f[--n] < T[n]) {
      for (i = n; i && f[--i] === 0; ) f[i] = me - 1
      --f[i], (f[n] += me)
    }
    f[n] -= T[n]
  }
  for (; f[--s] === 0; ) f.pop()
  for (; f[0] === 0; f.shift()) --r
  return f[0]
    ? ((e.d = f), (e.e = Tr(f, r)), _ ? I(e, a, l) : e)
    : new R(l === 3 ? -0 : 0)
}
A.modulo = A.mod = function (e) {
  var t,
    r = this,
    n = r.constructor
  return (
    (e = new n(e)),
    !r.d || !e.s || (e.d && !e.d[0])
      ? new n(NaN)
      : !e.d || (r.d && !r.d[0])
        ? I(new n(r), n.precision, n.rounding)
        : ((_ = !1),
          n.modulo == 9
            ? ((t = V(r, e.abs(), 0, 3, 1)), (t.s *= e.s))
            : (t = V(r, e, 0, n.modulo, 1)),
          (t = t.times(e)),
          (_ = !0),
          r.minus(t))
  )
}
A.naturalExponential = A.exp = function () {
  return An(this)
}
A.naturalLogarithm = A.ln = function () {
  return Oe(this)
}
A.negated = A.neg = function () {
  var e = new this.constructor(this)
  return (e.s = -e.s), I(e)
}
A.plus = A.add = function (e) {
  var t,
    r,
    n,
    i,
    o,
    s,
    a,
    l,
    f,
    g,
    h = this,
    T = h.constructor
  if (((e = new T(e)), !h.d || !e.d))
    return (
      !h.s || !e.s
        ? (e = new T(NaN))
        : h.d || (e = new T(e.d || h.s === e.s ? h : NaN)),
      e
    )
  if (h.s != e.s) return (e.s = -e.s), h.minus(e)
  if (
    ((f = h.d), (g = e.d), (a = T.precision), (l = T.rounding), !f[0] || !g[0])
  )
    return g[0] || (e = new T(h)), _ ? I(e, a, l) : e
  if (((o = X(h.e / O)), (n = X(e.e / O)), (f = f.slice()), (i = o - n), i)) {
    for (
      i < 0
        ? ((r = f), (i = -i), (s = g.length))
        : ((r = g), (n = o), (s = f.length)),
        o = Math.ceil(a / O),
        s = o > s ? o + 1 : s + 1,
        i > s && ((i = s), (r.length = 1)),
        r.reverse();
      i--;

    )
      r.push(0)
    r.reverse()
  }
  for (
    s = f.length,
      i = g.length,
      s - i < 0 && ((i = s), (r = g), (g = f), (f = r)),
      t = 0;
    i;

  )
    (t = ((f[--i] = f[i] + g[i] + t) / me) | 0), (f[i] %= me)
  for (t && (f.unshift(t), ++n), s = f.length; f[--s] == 0; ) f.pop()
  return (e.d = f), (e.e = Tr(f, n)), _ ? I(e, a, l) : e
}
A.precision = A.sd = function (e) {
  var t,
    r = this
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(De + e)
  return r.d ? ((t = bo(r.d)), e && r.e + 1 > t && (t = r.e + 1)) : (t = NaN), t
}
A.round = function () {
  var e = this,
    t = e.constructor
  return I(new t(e), e.e + 1, t.rounding)
}
A.sine = A.sin = function () {
  var e,
    t,
    r = this,
    n = r.constructor
  return r.isFinite()
    ? r.isZero()
      ? new n(r)
      : ((e = n.precision),
        (t = n.rounding),
        (n.precision = e + Math.max(r.e, r.sd()) + O),
        (n.rounding = 1),
        (r = Nl(n, To(n, r))),
        (n.precision = e),
        (n.rounding = t),
        I(ve > 2 ? r.neg() : r, e, t, !0))
    : new n(NaN)
}
A.squareRoot = A.sqrt = function () {
  var e,
    t,
    r,
    n,
    i,
    o,
    s = this,
    a = s.d,
    l = s.e,
    f = s.s,
    g = s.constructor
  if (f !== 1 || !a || !a[0])
    return new g(!f || (f < 0 && (!a || a[0])) ? NaN : a ? s : 1 / 0)
  for (
    _ = !1,
      f = Math.sqrt(+s),
      f == 0 || f == 1 / 0
        ? ((t = Y(a)),
          (t.length + l) % 2 == 0 && (t += '0'),
          (f = Math.sqrt(t)),
          (l = X((l + 1) / 2) - (l < 0 || l % 2)),
          f == 1 / 0
            ? (t = '5e' + l)
            : ((t = f.toExponential()),
              (t = t.slice(0, t.indexOf('e') + 1) + l)),
          (n = new g(t)))
        : (n = new g(f.toString())),
      r = (l = g.precision) + 3;
    ;

  )
    if (
      ((o = n),
      (n = o.plus(V(s, o, r + 2, 1)).times(0.5)),
      Y(o.d).slice(0, r) === (t = Y(n.d)).slice(0, r))
    )
      if (((t = t.slice(r - 3, r + 1)), t == '9999' || (!i && t == '4999'))) {
        if (!i && (I(o, l + 1, 0), o.times(o).eq(s))) {
          n = o
          break
        }
        ;(r += 4), (i = 1)
      } else {
        ;(!+t || (!+t.slice(1) && t.charAt(0) == '5')) &&
          (I(n, l + 1, 1), (e = !n.times(n).eq(s)))
        break
      }
  return (_ = !0), I(n, l, g.rounding, e)
}
A.tangent = A.tan = function () {
  var e,
    t,
    r = this,
    n = r.constructor
  return r.isFinite()
    ? r.isZero()
      ? new n(r)
      : ((e = n.precision),
        (t = n.rounding),
        (n.precision = e + 10),
        (n.rounding = 1),
        (r = r.sin()),
        (r.s = 1),
        (r = V(r, new n(1).minus(r.times(r)).sqrt(), e + 10, 0)),
        (n.precision = e),
        (n.rounding = t),
        I(ve == 2 || ve == 4 ? r.neg() : r, e, t, !0))
    : new n(NaN)
}
A.times = A.mul = function (e) {
  var t,
    r,
    n,
    i,
    o,
    s,
    a,
    l,
    f,
    g = this,
    h = g.constructor,
    T = g.d,
    k = (e = new h(e)).d
  if (((e.s *= g.s), !T || !T[0] || !k || !k[0]))
    return new h(
      !e.s || (T && !T[0] && !k) || (k && !k[0] && !T)
        ? NaN
        : !T || !k
          ? e.s / 0
          : e.s * 0,
    )
  for (
    r = X(g.e / O) + X(e.e / O),
      l = T.length,
      f = k.length,
      l < f && ((o = T), (T = k), (k = o), (s = l), (l = f), (f = s)),
      o = [],
      s = l + f,
      n = s;
    n--;

  )
    o.push(0)
  for (n = f; --n >= 0; ) {
    for (t = 0, i = l + n; i > n; )
      (a = o[i] + k[n] * T[i - n - 1] + t),
        (o[i--] = a % me | 0),
        (t = (a / me) | 0)
    o[i] = (o[i] + t) % me | 0
  }
  for (; !o[--s]; ) o.pop()
  return (
    t ? ++r : o.shift(),
    (e.d = o),
    (e.e = Tr(o, r)),
    _ ? I(e, h.precision, h.rounding) : e
  )
}
A.toBinary = function (e, t) {
  return Rn(this, 2, e, t)
}
A.toDecimalPlaces = A.toDP = function (e, t) {
  var r = this,
    n = r.constructor
  return (
    (r = new n(r)),
    e === void 0
      ? r
      : (ie(e, 0, Me),
        t === void 0 ? (t = n.rounding) : ie(t, 0, 8),
        I(r, e + r.e + 1, t))
  )
}
A.toExponential = function (e, t) {
  var r,
    n = this,
    i = n.constructor
  return (
    e === void 0
      ? (r = he(n, !0))
      : (ie(e, 0, Me),
        t === void 0 ? (t = i.rounding) : ie(t, 0, 8),
        (n = I(new i(n), e + 1, t)),
        (r = he(n, !0, e + 1))),
    n.isNeg() && !n.isZero() ? '-' + r : r
  )
}
A.toFixed = function (e, t) {
  var r,
    n,
    i = this,
    o = i.constructor
  return (
    e === void 0
      ? (r = he(i))
      : (ie(e, 0, Me),
        t === void 0 ? (t = o.rounding) : ie(t, 0, 8),
        (n = I(new o(i), e + i.e + 1, t)),
        (r = he(n, !1, e + n.e + 1))),
    i.isNeg() && !i.isZero() ? '-' + r : r
  )
}
A.toFraction = function (e) {
  var t,
    r,
    n,
    i,
    o,
    s,
    a,
    l,
    f,
    g,
    h,
    T,
    k = this,
    R = k.d,
    S = k.constructor
  if (!R) return new S(k)
  if (
    ((f = r = new S(1)),
    (n = l = new S(0)),
    (t = new S(n)),
    (o = t.e = bo(R) - k.e - 1),
    (s = o % O),
    (t.d[0] = H(10, s < 0 ? O + s : s)),
    e == null)
  )
    e = o > 0 ? t : f
  else {
    if (((a = new S(e)), !a.isInt() || a.lt(f))) throw Error(De + a)
    e = a.gt(t) ? (o > 0 ? t : f) : a
  }
  for (
    _ = !1,
      a = new S(Y(R)),
      g = S.precision,
      S.precision = o = R.length * O * 2;
    (h = V(a, t, 0, 1, 1)), (i = r.plus(h.times(n))), i.cmp(e) != 1;

  )
    (r = n),
      (n = i),
      (i = f),
      (f = l.plus(h.times(i))),
      (l = i),
      (i = t),
      (t = a.minus(h.times(i))),
      (a = i)
  return (
    (i = V(e.minus(r), n, 0, 1, 1)),
    (l = l.plus(i.times(f))),
    (r = r.plus(i.times(n))),
    (l.s = f.s = k.s),
    (T =
      V(f, n, o, 1)
        .minus(k)
        .abs()
        .cmp(V(l, r, o, 1).minus(k).abs()) < 1
        ? [f, n]
        : [l, r]),
    (S.precision = g),
    (_ = !0),
    T
  )
}
A.toHexadecimal = A.toHex = function (e, t) {
  return Rn(this, 16, e, t)
}
A.toNearest = function (e, t) {
  var r = this,
    n = r.constructor
  if (((r = new n(r)), e == null)) {
    if (!r.d) return r
    ;(e = new n(1)), (t = n.rounding)
  } else {
    if (((e = new n(e)), t === void 0 ? (t = n.rounding) : ie(t, 0, 8), !r.d))
      return e.s ? r : e
    if (!e.d) return e.s && (e.s = r.s), e
  }
  return (
    e.d[0]
      ? ((_ = !1), (r = V(r, e, 0, t, 1).times(e)), (_ = !0), I(r))
      : ((e.s = r.s), (r = e)),
    r
  )
}
A.toNumber = function () {
  return +this
}
A.toOctal = function (e, t) {
  return Rn(this, 8, e, t)
}
A.toPower = A.pow = function (e) {
  var t,
    r,
    n,
    i,
    o,
    s,
    a = this,
    l = a.constructor,
    f = +(e = new l(e))
  if (!a.d || !e.d || !a.d[0] || !e.d[0]) return new l(H(+a, f))
  if (((a = new l(a)), a.eq(1))) return a
  if (((n = l.precision), (o = l.rounding), e.eq(1))) return I(a, n, o)
  if (((t = X(e.e / O)), t >= e.d.length - 1 && (r = f < 0 ? -f : f) <= Il))
    return (i = xo(l, a, r, n)), e.s < 0 ? new l(1).div(i) : I(i, n, o)
  if (((s = a.s), s < 0)) {
    if (t < e.d.length - 1) return new l(NaN)
    if ((e.d[t] & 1 || (s = 1), a.e == 0 && a.d[0] == 1 && a.d.length == 1))
      return (a.s = s), a
  }
  return (
    (r = H(+a, f)),
    (t =
      r == 0 || !isFinite(r)
        ? X(f * (Math.log('0.' + Y(a.d)) / Math.LN10 + a.e + 1))
        : new l(r + '').e),
    t > l.maxE + 1 || t < l.minE - 1
      ? new l(t > 0 ? s / 0 : 0)
      : ((_ = !1),
        (l.rounding = a.s = 1),
        (r = Math.min(12, (t + '').length)),
        (i = An(e.times(Oe(a, n + r)), n)),
        i.d &&
          ((i = I(i, n + 5, 1)),
          St(i.d, n, o) &&
            ((t = n + 10),
            (i = I(An(e.times(Oe(a, t + r)), t), t + 5, 1)),
            +Y(i.d).slice(n + 1, n + 15) + 1 == 1e14 && (i = I(i, n + 1, 0)))),
        (i.s = s),
        (_ = !0),
        (l.rounding = o),
        I(i, n, o))
  )
}
A.toPrecision = function (e, t) {
  var r,
    n = this,
    i = n.constructor
  return (
    e === void 0
      ? (r = he(n, n.e <= i.toExpNeg || n.e >= i.toExpPos))
      : (ie(e, 1, Me),
        t === void 0 ? (t = i.rounding) : ie(t, 0, 8),
        (n = I(new i(n), e, t)),
        (r = he(n, e <= n.e || n.e <= i.toExpNeg, e))),
    n.isNeg() && !n.isZero() ? '-' + r : r
  )
}
A.toSignificantDigits = A.toSD = function (e, t) {
  var r = this,
    n = r.constructor
  return (
    e === void 0
      ? ((e = n.precision), (t = n.rounding))
      : (ie(e, 1, Me), t === void 0 ? (t = n.rounding) : ie(t, 0, 8)),
    I(new n(r), e, t)
  )
}
A.toString = function () {
  var e = this,
    t = e.constructor,
    r = he(e, e.e <= t.toExpNeg || e.e >= t.toExpPos)
  return e.isNeg() && !e.isZero() ? '-' + r : r
}
A.truncated = A.trunc = function () {
  return I(new this.constructor(this), this.e + 1, 1)
}
A.valueOf = A.toJSON = function () {
  var e = this,
    t = e.constructor,
    r = he(e, e.e <= t.toExpNeg || e.e >= t.toExpPos)
  return e.isNeg() ? '-' + r : r
}
function Y(e) {
  var t,
    r,
    n,
    i = e.length - 1,
    o = '',
    s = e[0]
  if (i > 0) {
    for (o += s, t = 1; t < i; t++)
      (n = e[t] + ''), (r = O - n.length), r && (o += Ie(r)), (o += n)
    ;(s = e[t]), (n = s + ''), (r = O - n.length), r && (o += Ie(r))
  } else if (s === 0) return '0'
  for (; s % 10 === 0; ) s /= 10
  return o + s
}
function ie(e, t, r) {
  if (e !== ~~e || e < t || e > r) throw Error(De + e)
}
function St(e, t, r, n) {
  var i, o, s, a
  for (o = e[0]; o >= 10; o /= 10) --t
  return (
    --t < 0 ? ((t += O), (i = 0)) : ((i = Math.ceil((t + 1) / O)), (t %= O)),
    (o = H(10, O - t)),
    (a = e[i] % o | 0),
    n == null
      ? t < 3
        ? (t == 0 ? (a = (a / 100) | 0) : t == 1 && (a = (a / 10) | 0),
          (s =
            (r < 4 && a == 99999) ||
            (r > 3 && a == 49999) ||
            a == 5e4 ||
            a == 0))
        : (s =
            (((r < 4 && a + 1 == o) || (r > 3 && a + 1 == o / 2)) &&
              ((e[i + 1] / o / 100) | 0) == H(10, t - 2) - 1) ||
            ((a == o / 2 || a == 0) && ((e[i + 1] / o / 100) | 0) == 0))
      : t < 4
        ? (t == 0
            ? (a = (a / 1e3) | 0)
            : t == 1
              ? (a = (a / 100) | 0)
              : t == 2 && (a = (a / 10) | 0),
          (s = ((n || r < 4) && a == 9999) || (!n && r > 3 && a == 4999)))
        : (s =
            (((n || r < 4) && a + 1 == o) || (!n && r > 3 && a + 1 == o / 2)) &&
            ((e[i + 1] / o / 1e3) | 0) == H(10, t - 3) - 1),
    s
  )
}
function wr(e, t, r) {
  for (var n, i = [0], o, s = 0, a = e.length; s < a; ) {
    for (o = i.length; o--; ) i[o] *= t
    for (i[0] += vn.indexOf(e.charAt(s++)), n = 0; n < i.length; n++)
      i[n] > r - 1 &&
        (i[n + 1] === void 0 && (i[n + 1] = 0),
        (i[n + 1] += (i[n] / r) | 0),
        (i[n] %= r))
  }
  return i.reverse()
}
function Dl(e, t) {
  var r, n, i
  if (t.isZero()) return t
  ;(n = t.d.length),
    n < 32
      ? ((r = Math.ceil(n / 3)), (i = (1 / Cr(4, r)).toString()))
      : ((r = 16), (i = '2.3283064365386962890625e-10')),
    (e.precision += r),
    (t = rt(e, 1, t.times(i), new e(1)))
  for (var o = r; o--; ) {
    var s = t.times(t)
    t = s.times(s).minus(s).times(8).plus(1)
  }
  return (e.precision -= r), t
}
var V = (function () {
  function e(n, i, o) {
    var s,
      a = 0,
      l = n.length
    for (n = n.slice(); l--; )
      (s = n[l] * i + a), (n[l] = s % o | 0), (a = (s / o) | 0)
    return a && n.unshift(a), n
  }
  function t(n, i, o, s) {
    var a, l
    if (o != s) l = o > s ? 1 : -1
    else
      for (a = l = 0; a < o; a++)
        if (n[a] != i[a]) {
          l = n[a] > i[a] ? 1 : -1
          break
        }
    return l
  }
  function r(n, i, o, s) {
    for (var a = 0; o--; )
      (n[o] -= a), (a = n[o] < i[o] ? 1 : 0), (n[o] = a * s + n[o] - i[o])
    for (; !n[0] && n.length > 1; ) n.shift()
  }
  return function (n, i, o, s, a, l) {
    var f,
      g,
      h,
      T,
      k,
      R,
      S,
      M,
      N,
      U,
      D,
      L,
      B,
      Q,
      en,
      ir,
      Pt,
      tn,
      pe,
      or,
      sr = n.constructor,
      rn = n.s == i.s ? 1 : -1,
      Z = n.d,
      j = i.d
    if (!Z || !Z[0] || !j || !j[0])
      return new sr(
        !n.s || !i.s || (Z ? j && Z[0] == j[0] : !j)
          ? NaN
          : (Z && Z[0] == 0) || !j
            ? rn * 0
            : rn / 0,
      )
    for (
      l
        ? ((k = 1), (g = n.e - i.e))
        : ((l = me), (k = O), (g = X(n.e / k) - X(i.e / k))),
        pe = j.length,
        Pt = Z.length,
        N = new sr(rn),
        U = N.d = [],
        h = 0;
      j[h] == (Z[h] || 0);
      h++
    );
    if (
      (j[h] > (Z[h] || 0) && g--,
      o == null
        ? ((Q = o = sr.precision), (s = sr.rounding))
        : a
          ? (Q = o + (n.e - i.e) + 1)
          : (Q = o),
      Q < 0)
    )
      U.push(1), (R = !0)
    else {
      if (((Q = (Q / k + 2) | 0), (h = 0), pe == 1)) {
        for (T = 0, j = j[0], Q++; (h < Pt || T) && Q--; h++)
          (en = T * l + (Z[h] || 0)), (U[h] = (en / j) | 0), (T = en % j | 0)
        R = T || h < Pt
      } else {
        for (
          T = (l / (j[0] + 1)) | 0,
            T > 1 &&
              ((j = e(j, T, l)),
              (Z = e(Z, T, l)),
              (pe = j.length),
              (Pt = Z.length)),
            ir = pe,
            D = Z.slice(0, pe),
            L = D.length;
          L < pe;

        )
          D[L++] = 0
        ;(or = j.slice()), or.unshift(0), (tn = j[0]), j[1] >= l / 2 && ++tn
        do
          (T = 0),
            (f = t(j, D, pe, L)),
            f < 0
              ? ((B = D[0]),
                pe != L && (B = B * l + (D[1] || 0)),
                (T = (B / tn) | 0),
                T > 1
                  ? (T >= l && (T = l - 1),
                    (S = e(j, T, l)),
                    (M = S.length),
                    (L = D.length),
                    (f = t(S, D, M, L)),
                    f == 1 && (T--, r(S, pe < M ? or : j, M, l)))
                  : (T == 0 && (f = T = 1), (S = j.slice())),
                (M = S.length),
                M < L && S.unshift(0),
                r(D, S, L, l),
                f == -1 &&
                  ((L = D.length),
                  (f = t(j, D, pe, L)),
                  f < 1 && (T++, r(D, pe < L ? or : j, L, l))),
                (L = D.length))
              : f === 0 && (T++, (D = [0])),
            (U[h++] = T),
            f && D[0] ? (D[L++] = Z[ir] || 0) : ((D = [Z[ir]]), (L = 1))
        while ((ir++ < Pt || D[0] !== void 0) && Q--)
        R = D[0] !== void 0
      }
      U[0] || U.shift()
    }
    if (k == 1) (N.e = g), (go = R)
    else {
      for (h = 1, T = U[0]; T >= 10; T /= 10) h++
      ;(N.e = h + g * k - 1), I(N, a ? o + N.e + 1 : o, s, R)
    }
    return N
  }
})()
function I(e, t, r, n) {
  var i,
    o,
    s,
    a,
    l,
    f,
    g,
    h,
    T,
    k = e.constructor
  e: if (t != null) {
    if (((h = e.d), !h)) return e
    for (i = 1, a = h[0]; a >= 10; a /= 10) i++
    if (((o = t - i), o < 0))
      (o += O), (s = t), (g = h[(T = 0)]), (l = (g / H(10, i - s - 1)) % 10 | 0)
    else if (((T = Math.ceil((o + 1) / O)), (a = h.length), T >= a))
      if (n) {
        for (; a++ <= T; ) h.push(0)
        ;(g = l = 0), (i = 1), (o %= O), (s = o - O + 1)
      } else break e
    else {
      for (g = a = h[T], i = 1; a >= 10; a /= 10) i++
      ;(o %= O),
        (s = o - O + i),
        (l = s < 0 ? 0 : (g / H(10, i - s - 1)) % 10 | 0)
    }
    if (
      ((n =
        n ||
        t < 0 ||
        h[T + 1] !== void 0 ||
        (s < 0 ? g : g % H(10, i - s - 1))),
      (f =
        r < 4
          ? (l || n) && (r == 0 || r == (e.s < 0 ? 3 : 2))
          : l > 5 ||
            (l == 5 &&
              (r == 4 ||
                n ||
                (r == 6 &&
                  (o > 0 ? (s > 0 ? g / H(10, i - s) : 0) : h[T - 1]) % 10 &
                    1) ||
                r == (e.s < 0 ? 8 : 7)))),
      t < 1 || !h[0])
    )
      return (
        (h.length = 0),
        f
          ? ((t -= e.e + 1), (h[0] = H(10, (O - (t % O)) % O)), (e.e = -t || 0))
          : (h[0] = e.e = 0),
        e
      )
    if (
      (o == 0
        ? ((h.length = T), (a = 1), T--)
        : ((h.length = T + 1),
          (a = H(10, O - o)),
          (h[T] = s > 0 ? ((g / H(10, i - s)) % H(10, s) | 0) * a : 0)),
      f)
    )
      for (;;)
        if (T == 0) {
          for (o = 1, s = h[0]; s >= 10; s /= 10) o++
          for (s = h[0] += a, a = 1; s >= 10; s /= 10) a++
          o != a && (e.e++, h[0] == me && (h[0] = 1))
          break
        } else {
          if (((h[T] += a), h[T] != me)) break
          ;(h[T--] = 0), (a = 1)
        }
    for (o = h.length; h[--o] === 0; ) h.pop()
  }
  return (
    _ &&
      (e.e > k.maxE
        ? ((e.d = null), (e.e = NaN))
        : e.e < k.minE && ((e.e = 0), (e.d = [0]))),
    e
  )
}
function he(e, t, r) {
  if (!e.isFinite()) return vo(e)
  var n,
    i = e.e,
    o = Y(e.d),
    s = o.length
  return (
    t
      ? (r && (n = r - s) > 0
          ? (o = o.charAt(0) + '.' + o.slice(1) + Ie(n))
          : s > 1 && (o = o.charAt(0) + '.' + o.slice(1)),
        (o = o + (e.e < 0 ? 'e' : 'e+') + e.e))
      : i < 0
        ? ((o = '0.' + Ie(-i - 1) + o), r && (n = r - s) > 0 && (o += Ie(n)))
        : i >= s
          ? ((o += Ie(i + 1 - s)),
            r && (n = r - i - 1) > 0 && (o = o + '.' + Ie(n)))
          : ((n = i + 1) < s && (o = o.slice(0, n) + '.' + o.slice(n)),
            r && (n = r - s) > 0 && (i + 1 === s && (o += '.'), (o += Ie(n)))),
    o
  )
}
function Tr(e, t) {
  var r = e[0]
  for (t *= O; r >= 10; r /= 10) t++
  return t
}
function Pr(e, t, r) {
  if (t > Ol) throw ((_ = !0), r && (e.precision = r), Error(ho))
  return I(new e(br), t, 1, !0)
}
function ge(e, t, r) {
  if (t > Cn) throw Error(ho)
  return I(new e(xr), t, r, !0)
}
function bo(e) {
  var t = e.length - 1,
    r = t * O + 1
  if (((t = e[t]), t)) {
    for (; t % 10 == 0; t /= 10) r--
    for (t = e[0]; t >= 10; t /= 10) r++
  }
  return r
}
function Ie(e) {
  for (var t = ''; e--; ) t += '0'
  return t
}
function xo(e, t, r, n) {
  var i,
    o = new e(1),
    s = Math.ceil(n / O + 4)
  for (_ = !1; ; ) {
    if (
      (r % 2 && ((o = o.times(t)), mo(o.d, s) && (i = !0)),
      (r = X(r / 2)),
      r === 0)
    ) {
      ;(r = o.d.length - 1), i && o.d[r] === 0 && ++o.d[r]
      break
    }
    ;(t = t.times(t)), mo(t.d, s)
  }
  return (_ = !0), o
}
function po(e) {
  return e.d[e.d.length - 1] & 1
}
function Po(e, t, r) {
  for (var n, i, o = new e(t[0]), s = 0; ++s < t.length; ) {
    if (((i = new e(t[s])), !i.s)) {
      o = i
      break
    }
    ;(n = o.cmp(i)), (n === r || (n === 0 && o.s === r)) && (o = i)
  }
  return o
}
function An(e, t) {
  var r,
    n,
    i,
    o,
    s,
    a,
    l,
    f = 0,
    g = 0,
    h = 0,
    T = e.constructor,
    k = T.rounding,
    R = T.precision
  if (!e.d || !e.d[0] || e.e > 17)
    return new T(
      e.d
        ? e.d[0]
          ? e.s < 0
            ? 0
            : 1 / 0
          : 1
        : e.s
          ? e.s < 0
            ? 0
            : e
          : NaN,
    )
  for (
    t == null ? ((_ = !1), (l = R)) : (l = t), a = new T(0.03125);
    e.e > -2;

  )
    (e = e.times(a)), (h += 5)
  for (
    n = ((Math.log(H(2, h)) / Math.LN10) * 2 + 5) | 0,
      l += n,
      r = o = s = new T(1),
      T.precision = l;
    ;

  ) {
    if (
      ((o = I(o.times(e), l, 1)),
      (r = r.times(++g)),
      (a = s.plus(V(o, r, l, 1))),
      Y(a.d).slice(0, l) === Y(s.d).slice(0, l))
    ) {
      for (i = h; i--; ) s = I(s.times(s), l, 1)
      if (t == null)
        if (f < 3 && St(s.d, l - n, k, f))
          (T.precision = l += 10), (r = o = a = new T(1)), (g = 0), f++
        else return I(s, (T.precision = R), k, (_ = !0))
      else return (T.precision = R), s
    }
    s = a
  }
}
function Oe(e, t) {
  var r,
    n,
    i,
    o,
    s,
    a,
    l,
    f,
    g,
    h,
    T,
    k = 1,
    R = 10,
    S = e,
    M = S.d,
    N = S.constructor,
    U = N.rounding,
    D = N.precision
  if (S.s < 0 || !M || !M[0] || (!S.e && M[0] == 1 && M.length == 1))
    return new N(M && !M[0] ? -1 / 0 : S.s != 1 ? NaN : M ? 0 : S)
  if (
    (t == null ? ((_ = !1), (g = D)) : (g = t),
    (N.precision = g += R),
    (r = Y(M)),
    (n = r.charAt(0)),
    Math.abs((o = S.e)) < 15e14)
  ) {
    for (; (n < 7 && n != 1) || (n == 1 && r.charAt(1) > 3); )
      (S = S.times(e)), (r = Y(S.d)), (n = r.charAt(0)), k++
    ;(o = S.e),
      n > 1 ? ((S = new N('0.' + r)), o++) : (S = new N(n + '.' + r.slice(1)))
  } else
    return (
      (f = Pr(N, g + 2, D).times(o + '')),
      (S = Oe(new N(n + '.' + r.slice(1)), g - R).plus(f)),
      (N.precision = D),
      t == null ? I(S, D, U, (_ = !0)) : S
    )
  for (
    h = S,
      l = s = S = V(S.minus(1), S.plus(1), g, 1),
      T = I(S.times(S), g, 1),
      i = 3;
    ;

  ) {
    if (
      ((s = I(s.times(T), g, 1)),
      (f = l.plus(V(s, new N(i), g, 1))),
      Y(f.d).slice(0, g) === Y(l.d).slice(0, g))
    )
      if (
        ((l = l.times(2)),
        o !== 0 && (l = l.plus(Pr(N, g + 2, D).times(o + ''))),
        (l = V(l, new N(k), g, 1)),
        t == null)
      )
        if (St(l.d, g - R, U, a))
          (N.precision = g += R),
            (f = s = S = V(h.minus(1), h.plus(1), g, 1)),
            (T = I(S.times(S), g, 1)),
            (i = a = 1)
        else return I(l, (N.precision = D), U, (_ = !0))
      else return (N.precision = D), l
    ;(l = f), (i += 2)
  }
}
function vo(e) {
  return String((e.s * e.s) / 0)
}
function Er(e, t) {
  var r, n, i
  for (
    (r = t.indexOf('.')) > -1 && (t = t.replace('.', '')),
      (n = t.search(/e/i)) > 0
        ? (r < 0 && (r = n), (r += +t.slice(n + 1)), (t = t.substring(0, n)))
        : r < 0 && (r = t.length),
      n = 0;
    t.charCodeAt(n) === 48;
    n++
  );
  for (i = t.length; t.charCodeAt(i - 1) === 48; --i);
  if (((t = t.slice(n, i)), t)) {
    if (
      ((i -= n),
      (e.e = r = r - n - 1),
      (e.d = []),
      (n = (r + 1) % O),
      r < 0 && (n += O),
      n < i)
    ) {
      for (n && e.d.push(+t.slice(0, n)), i -= O; n < i; )
        e.d.push(+t.slice(n, (n += O)))
      ;(t = t.slice(n)), (n = O - t.length)
    } else n -= i
    for (; n--; ) t += '0'
    e.d.push(+t),
      _ &&
        (e.e > e.constructor.maxE
          ? ((e.d = null), (e.e = NaN))
          : e.e < e.constructor.minE && ((e.e = 0), (e.d = [0])))
  } else (e.e = 0), (e.d = [0])
  return e
}
function Ml(e, t) {
  var r, n, i, o, s, a, l, f, g
  if (t.indexOf('_') > -1) {
    if (((t = t.replace(/(\d)_(?=\d)/g, '$1')), Eo.test(t))) return Er(e, t)
  } else if (t === 'Infinity' || t === 'NaN')
    return +t || (e.s = NaN), (e.e = NaN), (e.d = null), e
  if (Sl.test(t)) (r = 16), (t = t.toLowerCase())
  else if (Rl.test(t)) r = 2
  else if (kl.test(t)) r = 8
  else throw Error(De + t)
  for (
    o = t.search(/p/i),
      o > 0
        ? ((l = +t.slice(o + 1)), (t = t.substring(2, o)))
        : (t = t.slice(2)),
      o = t.indexOf('.'),
      s = o >= 0,
      n = e.constructor,
      s &&
        ((t = t.replace('.', '')),
        (a = t.length),
        (o = a - o),
        (i = xo(n, new n(r), o, o * 2))),
      f = wr(t, r, me),
      g = f.length - 1,
      o = g;
    f[o] === 0;
    --o
  )
    f.pop()
  return o < 0
    ? new n(e.s * 0)
    : ((e.e = Tr(f, g)),
      (e.d = f),
      (_ = !1),
      s && (e = V(e, i, a * 4)),
      l && (e = e.times(Math.abs(l) < 54 ? H(2, l) : Ue.pow(2, l))),
      (_ = !0),
      e)
}
function Nl(e, t) {
  var r,
    n = t.d.length
  if (n < 3) return t.isZero() ? t : rt(e, 2, t, t)
  ;(r = 1.4 * Math.sqrt(n)),
    (r = r > 16 ? 16 : r | 0),
    (t = t.times(1 / Cr(5, r))),
    (t = rt(e, 2, t, t))
  for (var i, o = new e(5), s = new e(16), a = new e(20); r--; )
    (i = t.times(t)), (t = t.times(o.plus(i.times(s.times(i).minus(a)))))
  return t
}
function rt(e, t, r, n, i) {
  var o,
    s,
    a,
    l,
    f = 1,
    g = e.precision,
    h = Math.ceil(g / O)
  for (_ = !1, l = r.times(r), a = new e(n); ; ) {
    if (
      ((s = V(a.times(l), new e(t++ * t++), g, 1)),
      (a = i ? n.plus(s) : n.minus(s)),
      (n = V(s.times(l), new e(t++ * t++), g, 1)),
      (s = a.plus(n)),
      s.d[h] !== void 0)
    ) {
      for (o = h; s.d[o] === a.d[o] && o--; );
      if (o == -1) break
    }
    ;(o = a), (a = n), (n = s), (s = o), f++
  }
  return (_ = !0), (s.d.length = h + 1), s
}
function Cr(e, t) {
  for (var r = e; --t; ) r *= e
  return r
}
function To(e, t) {
  var r,
    n = t.s < 0,
    i = ge(e, e.precision, 1),
    o = i.times(0.5)
  if (((t = t.abs()), t.lte(o))) return (ve = n ? 4 : 1), t
  if (((r = t.divToInt(i)), r.isZero())) ve = n ? 3 : 2
  else {
    if (((t = t.minus(r.times(i))), t.lte(o)))
      return (ve = po(r) ? (n ? 2 : 3) : n ? 4 : 1), t
    ve = po(r) ? (n ? 1 : 4) : n ? 3 : 2
  }
  return t.minus(i).abs()
}
function Rn(e, t, r, n) {
  var i,
    o,
    s,
    a,
    l,
    f,
    g,
    h,
    T,
    k = e.constructor,
    R = r !== void 0
  if (
    (R
      ? (ie(r, 1, Me), n === void 0 ? (n = k.rounding) : ie(n, 0, 8))
      : ((r = k.precision), (n = k.rounding)),
    !e.isFinite())
  )
    g = vo(e)
  else {
    for (
      g = he(e),
        s = g.indexOf('.'),
        R
          ? ((i = 2), t == 16 ? (r = r * 4 - 3) : t == 8 && (r = r * 3 - 2))
          : (i = t),
        s >= 0 &&
          ((g = g.replace('.', '')),
          (T = new k(1)),
          (T.e = g.length - s),
          (T.d = wr(he(T), 10, i)),
          (T.e = T.d.length)),
        h = wr(g, 10, i),
        o = l = h.length;
      h[--l] == 0;

    )
      h.pop()
    if (!h[0]) g = R ? '0p+0' : '0'
    else {
      if (
        (s < 0
          ? o--
          : ((e = new k(e)),
            (e.d = h),
            (e.e = o),
            (e = V(e, T, r, n, 0, i)),
            (h = e.d),
            (o = e.e),
            (f = go)),
        (s = h[r]),
        (a = i / 2),
        (f = f || h[r + 1] !== void 0),
        (f =
          n < 4
            ? (s !== void 0 || f) && (n === 0 || n === (e.s < 0 ? 3 : 2))
            : s > a ||
              (s === a &&
                (n === 4 ||
                  f ||
                  (n === 6 && h[r - 1] & 1) ||
                  n === (e.s < 0 ? 8 : 7)))),
        (h.length = r),
        f)
      )
        for (; ++h[--r] > i - 1; ) (h[r] = 0), r || (++o, h.unshift(1))
      for (l = h.length; !h[l - 1]; --l);
      for (s = 0, g = ''; s < l; s++) g += vn.charAt(h[s])
      if (R) {
        if (l > 1)
          if (t == 16 || t == 8) {
            for (s = t == 16 ? 4 : 3, --l; l % s; l++) g += '0'
            for (h = wr(g, i, t), l = h.length; !h[l - 1]; --l);
            for (s = 1, g = '1.'; s < l; s++) g += vn.charAt(h[s])
          } else g = g.charAt(0) + '.' + g.slice(1)
        g = g + (o < 0 ? 'p' : 'p+') + o
      } else if (o < 0) {
        for (; ++o; ) g = '0' + g
        g = '0.' + g
      } else if (++o > l) for (o -= l; o--; ) g += '0'
      else o < l && (g = g.slice(0, o) + '.' + g.slice(o))
    }
    g = (t == 16 ? '0x' : t == 2 ? '0b' : t == 8 ? '0o' : '') + g
  }
  return e.s < 0 ? '-' + g : g
}
function mo(e, t) {
  if (e.length > t) return (e.length = t), !0
}
function _l(e) {
  return new this(e).abs()
}
function Fl(e) {
  return new this(e).acos()
}
function Ll(e) {
  return new this(e).acosh()
}
function Bl(e, t) {
  return new this(e).plus(t)
}
function ql(e) {
  return new this(e).asin()
}
function Ul(e) {
  return new this(e).asinh()
}
function $l(e) {
  return new this(e).atan()
}
function Vl(e) {
  return new this(e).atanh()
}
function jl(e, t) {
  ;(e = new this(e)), (t = new this(t))
  var r,
    n = this.precision,
    i = this.rounding,
    o = n + 4
  return (
    !e.s || !t.s
      ? (r = new this(NaN))
      : !e.d && !t.d
        ? ((r = ge(this, o, 1).times(t.s > 0 ? 0.25 : 0.75)), (r.s = e.s))
        : !t.d || e.isZero()
          ? ((r = t.s < 0 ? ge(this, n, i) : new this(0)), (r.s = e.s))
          : !e.d || t.isZero()
            ? ((r = ge(this, o, 1).times(0.5)), (r.s = e.s))
            : t.s < 0
              ? ((this.precision = o),
                (this.rounding = 1),
                (r = this.atan(V(e, t, o, 1))),
                (t = ge(this, o, 1)),
                (this.precision = n),
                (this.rounding = i),
                (r = e.s < 0 ? r.minus(t) : r.plus(t)))
              : (r = this.atan(V(e, t, o, 1))),
    r
  )
}
function Gl(e) {
  return new this(e).cbrt()
}
function Jl(e) {
  return I((e = new this(e)), e.e + 1, 2)
}
function Ql(e, t, r) {
  return new this(e).clamp(t, r)
}
function Wl(e) {
  if (!e || typeof e != 'object') throw Error(vr + 'Object expected')
  var t,
    r,
    n,
    i = e.defaults === !0,
    o = [
      'precision',
      1,
      Me,
      'rounding',
      0,
      8,
      'toExpNeg',
      -tt,
      0,
      'toExpPos',
      0,
      tt,
      'maxE',
      0,
      tt,
      'minE',
      -tt,
      0,
      'modulo',
      0,
      9,
    ]
  for (t = 0; t < o.length; t += 3)
    if (((r = o[t]), i && (this[r] = Tn[r]), (n = e[r]) !== void 0))
      if (X(n) === n && n >= o[t + 1] && n <= o[t + 2]) this[r] = n
      else throw Error(De + r + ': ' + n)
  if (((r = 'crypto'), i && (this[r] = Tn[r]), (n = e[r]) !== void 0))
    if (n === !0 || n === !1 || n === 0 || n === 1)
      if (n)
        if (
          typeof crypto < 'u' &&
          crypto &&
          (crypto.getRandomValues || crypto.randomBytes)
        )
          this[r] = !0
        else throw Error(yo)
      else this[r] = !1
    else throw Error(De + r + ': ' + n)
  return this
}
function Hl(e) {
  return new this(e).cos()
}
function Kl(e) {
  return new this(e).cosh()
}
function Co(e) {
  var t, r, n
  function i(o) {
    var s,
      a,
      l,
      f = this
    if (!(f instanceof i)) return new i(o)
    if (((f.constructor = i), fo(o))) {
      ;(f.s = o.s),
        _
          ? !o.d || o.e > i.maxE
            ? ((f.e = NaN), (f.d = null))
            : o.e < i.minE
              ? ((f.e = 0), (f.d = [0]))
              : ((f.e = o.e), (f.d = o.d.slice()))
          : ((f.e = o.e), (f.d = o.d ? o.d.slice() : o.d))
      return
    }
    if (((l = typeof o), l === 'number')) {
      if (o === 0) {
        ;(f.s = 1 / o < 0 ? -1 : 1), (f.e = 0), (f.d = [0])
        return
      }
      if ((o < 0 ? ((o = -o), (f.s = -1)) : (f.s = 1), o === ~~o && o < 1e7)) {
        for (s = 0, a = o; a >= 10; a /= 10) s++
        _
          ? s > i.maxE
            ? ((f.e = NaN), (f.d = null))
            : s < i.minE
              ? ((f.e = 0), (f.d = [0]))
              : ((f.e = s), (f.d = [o]))
          : ((f.e = s), (f.d = [o]))
        return
      }
      if (o * 0 !== 0) {
        o || (f.s = NaN), (f.e = NaN), (f.d = null)
        return
      }
      return Er(f, o.toString())
    }
    if (l === 'string')
      return (
        (a = o.charCodeAt(0)) === 45
          ? ((o = o.slice(1)), (f.s = -1))
          : (a === 43 && (o = o.slice(1)), (f.s = 1)),
        Eo.test(o) ? Er(f, o) : Ml(f, o)
      )
    if (l === 'bigint')
      return o < 0 ? ((o = -o), (f.s = -1)) : (f.s = 1), Er(f, o.toString())
    throw Error(De + o)
  }
  if (
    ((i.prototype = A),
    (i.ROUND_UP = 0),
    (i.ROUND_DOWN = 1),
    (i.ROUND_CEIL = 2),
    (i.ROUND_FLOOR = 3),
    (i.ROUND_HALF_UP = 4),
    (i.ROUND_HALF_DOWN = 5),
    (i.ROUND_HALF_EVEN = 6),
    (i.ROUND_HALF_CEIL = 7),
    (i.ROUND_HALF_FLOOR = 8),
    (i.EUCLID = 9),
    (i.config = i.set = Wl),
    (i.clone = Co),
    (i.isDecimal = fo),
    (i.abs = _l),
    (i.acos = Fl),
    (i.acosh = Ll),
    (i.add = Bl),
    (i.asin = ql),
    (i.asinh = Ul),
    (i.atan = $l),
    (i.atanh = Vl),
    (i.atan2 = jl),
    (i.cbrt = Gl),
    (i.ceil = Jl),
    (i.clamp = Ql),
    (i.cos = Hl),
    (i.cosh = Kl),
    (i.div = zl),
    (i.exp = Yl),
    (i.floor = Zl),
    (i.hypot = Xl),
    (i.ln = eu),
    (i.log = tu),
    (i.log10 = nu),
    (i.log2 = ru),
    (i.max = iu),
    (i.min = ou),
    (i.mod = su),
    (i.mul = au),
    (i.pow = lu),
    (i.random = uu),
    (i.round = cu),
    (i.sign = pu),
    (i.sin = mu),
    (i.sinh = du),
    (i.sqrt = fu),
    (i.sub = gu),
    (i.sum = hu),
    (i.tan = yu),
    (i.tanh = wu),
    (i.trunc = Eu),
    e === void 0 && (e = {}),
    e && e.defaults !== !0)
  )
    for (
      n = [
        'precision',
        'rounding',
        'toExpNeg',
        'toExpPos',
        'maxE',
        'minE',
        'modulo',
        'crypto',
      ],
        t = 0;
      t < n.length;

    )
      e.hasOwnProperty((r = n[t++])) || (e[r] = this[r])
  return i.config(e), i
}
function zl(e, t) {
  return new this(e).div(t)
}
function Yl(e) {
  return new this(e).exp()
}
function Zl(e) {
  return I((e = new this(e)), e.e + 1, 3)
}
function Xl() {
  var e,
    t,
    r = new this(0)
  for (_ = !1, e = 0; e < arguments.length; )
    if (((t = new this(arguments[e++])), t.d)) r.d && (r = r.plus(t.times(t)))
    else {
      if (t.s) return (_ = !0), new this(1 / 0)
      r = t
    }
  return (_ = !0), r.sqrt()
}
function fo(e) {
  return e instanceof Ue || (e && e.toStringTag === wo) || !1
}
function eu(e) {
  return new this(e).ln()
}
function tu(e, t) {
  return new this(e).log(t)
}
function ru(e) {
  return new this(e).log(2)
}
function nu(e) {
  return new this(e).log(10)
}
function iu() {
  return Po(this, arguments, -1)
}
function ou() {
  return Po(this, arguments, 1)
}
function su(e, t) {
  return new this(e).mod(t)
}
function au(e, t) {
  return new this(e).mul(t)
}
function lu(e, t) {
  return new this(e).pow(t)
}
function uu(e) {
  var t,
    r,
    n,
    i,
    o = 0,
    s = new this(1),
    a = []
  if (
    (e === void 0 ? (e = this.precision) : ie(e, 1, Me),
    (n = Math.ceil(e / O)),
    this.crypto)
  )
    if (crypto.getRandomValues)
      for (t = crypto.getRandomValues(new Uint32Array(n)); o < n; )
        (i = t[o]),
          i >= 429e7
            ? (t[o] = crypto.getRandomValues(new Uint32Array(1))[0])
            : (a[o++] = i % 1e7)
    else if (crypto.randomBytes) {
      for (t = crypto.randomBytes((n *= 4)); o < n; )
        (i =
          t[o] + (t[o + 1] << 8) + (t[o + 2] << 16) + ((t[o + 3] & 127) << 24)),
          i >= 214e7
            ? crypto.randomBytes(4).copy(t, o)
            : (a.push(i % 1e7), (o += 4))
      o = n / 4
    } else throw Error(yo)
  else for (; o < n; ) a[o++] = (Math.random() * 1e7) | 0
  for (
    n = a[--o],
      e %= O,
      n && e && ((i = H(10, O - e)), (a[o] = ((n / i) | 0) * i));
    a[o] === 0;
    o--
  )
    a.pop()
  if (o < 0) (r = 0), (a = [0])
  else {
    for (r = -1; a[0] === 0; r -= O) a.shift()
    for (n = 1, i = a[0]; i >= 10; i /= 10) n++
    n < O && (r -= O - n)
  }
  return (s.e = r), (s.d = a), s
}
function cu(e) {
  return I((e = new this(e)), e.e + 1, this.rounding)
}
function pu(e) {
  return (e = new this(e)), e.d ? (e.d[0] ? e.s : 0 * e.s) : e.s || NaN
}
function mu(e) {
  return new this(e).sin()
}
function du(e) {
  return new this(e).sinh()
}
function fu(e) {
  return new this(e).sqrt()
}
function gu(e, t) {
  return new this(e).sub(t)
}
function hu() {
  var e = 0,
    t = arguments,
    r = new this(t[e])
  for (_ = !1; r.s && ++e < t.length; ) r = r.plus(t[e])
  return (_ = !0), I(r, this.precision, this.rounding)
}
function yu(e) {
  return new this(e).tan()
}
function wu(e) {
  return new this(e).tanh()
}
function Eu(e) {
  return I((e = new this(e)), e.e + 1, 1)
}
A[Symbol.for('nodejs.util.inspect.custom')] = A.toString
A[Symbol.toStringTag] = 'Decimal'
var Ue = (A.constructor = Co(Tn))
br = new Ue(br)
xr = new Ue(xr)
var Te = Ue
function kt(e) {
  return e === null
    ? e
    : Array.isArray(e)
      ? e.map(kt)
      : typeof e == 'object'
        ? bu(e)
          ? xu(e)
          : et(e, kt)
        : e
}
function bu(e) {
  return e !== null && typeof e == 'object' && typeof e.$type == 'string'
}
function xu({ $type: e, value: t }) {
  switch (e) {
    case 'BigInt':
      return BigInt(t)
    case 'Bytes': {
      let {
        buffer: r,
        byteOffset: n,
        byteLength: i,
      } = E.Buffer.from(t, 'base64')
      return new Uint8Array(r, n, i)
    }
    case 'DateTime':
      return new Date(t)
    case 'Decimal':
      return new Te(t)
    case 'Json':
      return JSON.parse(t)
    default:
      Pe(t, 'Unknown tagged value')
  }
}
d()
u()
c()
p()
m()
d()
u()
c()
p()
m()
function nt(e) {
  return e.substring(0, 1).toLowerCase() + e.substring(1)
}
d()
u()
c()
p()
m()
function it(e) {
  return (
    e instanceof Date || Object.prototype.toString.call(e) === '[object Date]'
  )
}
function Ar(e) {
  return e.toString() !== 'Invalid Date'
}
d()
u()
c()
p()
m()
function ot(e) {
  return Ue.isDecimal(e)
    ? !0
    : e !== null &&
        typeof e == 'object' &&
        typeof e.s == 'number' &&
        typeof e.e == 'number' &&
        typeof e.toFixed == 'function' &&
        Array.isArray(e.d)
}
d()
u()
c()
p()
m()
d()
u()
c()
p()
m()
var Pu = We(no())
var vu = {
    red: Ze,
    gray: Ui,
    dim: mr,
    bold: pr,
    underline: _i,
    highlightSource: e => e.highlight(),
  },
  Tu = {
    red: e => e,
    gray: e => e,
    dim: e => e,
    bold: e => e,
    underline: e => e,
    highlightSource: e => e,
  }
function Cu({ message: e, originalMethod: t, isPanic: r, callArguments: n }) {
  return {
    functionName: `prisma.${t}()`,
    message: e,
    isPanic: r ?? !1,
    callArguments: n,
  }
}
function Au(
  {
    functionName: e,
    location: t,
    message: r,
    isPanic: n,
    contextLines: i,
    callArguments: o,
  },
  s,
) {
  let a = [''],
    l = t ? ' in' : ':'
  if (
    (n
      ? (a.push(
          s.red(
            `Oops, an unknown error occurred! This is ${s.bold('on us')}, you did nothing wrong.`,
          ),
        ),
        a.push(
          s.red(`It occurred in the ${s.bold(`\`${e}\``)} invocation${l}`),
        ))
      : a.push(s.red(`Invalid ${s.bold(`\`${e}\``)} invocation${l}`)),
    t && a.push(s.underline(Ru(t))),
    i)
  ) {
    a.push('')
    let f = [i.toString()]
    o && (f.push(o), f.push(s.dim(')'))), a.push(f.join('')), o && a.push('')
  } else a.push(''), o && a.push(o), a.push('')
  return (
    a.push(r),
    a.join(`
`)
  )
}
function Ru(e) {
  let t = [e.fileName]
  return (
    e.lineNumber && t.push(String(e.lineNumber)),
    e.columnNumber && t.push(String(e.columnNumber)),
    t.join(':')
  )
}
function Rr(e) {
  let t = e.showColors ? vu : Tu,
    r
  return (
    typeof $getTemplateParameters < 'u'
      ? (r = $getTemplateParameters(e, t))
      : (r = Cu(e)),
    Au(r, t)
  )
}
d()
u()
c()
p()
m()
var Do = We(Sn())
d()
u()
c()
p()
m()
function ko(e, t, r) {
  let n = Io(e),
    i = Su(n),
    o = Iu(i)
  o ? Sr(o, t, r) : t.addErrorMessage(() => 'Unknown error')
}
function Io(e) {
  return e.errors.flatMap(t => (t.kind === 'Union' ? Io(t) : [t]))
}
function Su(e) {
  let t = new Map(),
    r = []
  for (let n of e) {
    if (n.kind !== 'InvalidArgumentType') {
      r.push(n)
      continue
    }
    let i = `${n.selectionPath.join('.')}:${n.argumentPath.join('.')}`,
      o = t.get(i)
    o
      ? t.set(i, {
          ...n,
          argument: {
            ...n.argument,
            typeNames: ku(o.argument.typeNames, n.argument.typeNames),
          },
        })
      : t.set(i, n)
  }
  return r.push(...t.values()), r
}
function ku(e, t) {
  return [...new Set(e.concat(t))]
}
function Iu(e) {
  return Pn(e, (t, r) => {
    let n = Ro(t),
      i = Ro(r)
    return n !== i ? n - i : So(t) - So(r)
  })
}
function Ro(e) {
  let t = 0
  return (
    Array.isArray(e.selectionPath) && (t += e.selectionPath.length),
    Array.isArray(e.argumentPath) && (t += e.argumentPath.length),
    t
  )
}
function So(e) {
  switch (e.kind) {
    case 'InvalidArgumentValue':
    case 'ValueTooLarge':
      return 20
    case 'InvalidArgumentType':
      return 10
    case 'RequiredArgumentMissing':
      return -10
    default:
      return 0
  }
}
d()
u()
c()
p()
m()
var le = class {
  constructor(t, r) {
    this.name = t
    this.value = r
    w(this, 'isRequired', !1)
  }
  makeRequired() {
    return (this.isRequired = !0), this
  }
  write(t) {
    let {
      colors: { green: r },
    } = t.context
    t.addMarginSymbol(r(this.isRequired ? '+' : '?')),
      t.write(r(this.name)),
      this.isRequired || t.write(r('?')),
      t.write(r(': ')),
      typeof this.value == 'string'
        ? t.write(r(this.value))
        : t.write(this.value)
  }
}
d()
u()
c()
p()
m()
d()
u()
c()
p()
m()
var st = class {
  constructor(t = 0, r) {
    this.context = r
    w(this, 'lines', [])
    w(this, 'currentLine', '')
    w(this, 'currentIndent', 0)
    w(this, 'marginSymbol')
    w(this, 'afterNextNewLineCallback')
    this.currentIndent = t
  }
  write(t) {
    return typeof t == 'string' ? (this.currentLine += t) : t.write(this), this
  }
  writeJoined(t, r, n = (i, o) => o.write(i)) {
    let i = r.length - 1
    for (let o = 0; o < r.length; o++) n(r[o], this), o !== i && this.write(t)
    return this
  }
  writeLine(t) {
    return this.write(t).newLine()
  }
  newLine() {
    this.lines.push(this.indentedCurrentLine()),
      (this.currentLine = ''),
      (this.marginSymbol = void 0)
    let t = this.afterNextNewLineCallback
    return (this.afterNextNewLineCallback = void 0), t?.(), this
  }
  withIndent(t) {
    return this.indent(), t(this), this.unindent(), this
  }
  afterNextNewline(t) {
    return (this.afterNextNewLineCallback = t), this
  }
  indent() {
    return this.currentIndent++, this
  }
  unindent() {
    return this.currentIndent > 0 && this.currentIndent--, this
  }
  addMarginSymbol(t) {
    return (this.marginSymbol = t), this
  }
  toString() {
    return this.lines.concat(this.indentedCurrentLine()).join(`
`)
  }
  getCurrentLineLength() {
    return this.currentLine.length
  }
  indentedCurrentLine() {
    let t = this.currentLine.padStart(
      this.currentLine.length + 2 * this.currentIndent,
    )
    return this.marginSymbol ? this.marginSymbol + t.slice(1) : t
  }
}
d()
u()
c()
p()
m()
d()
u()
c()
p()
m()
var kr = class {
  constructor(t) {
    this.value = t
  }
  write(t) {
    t.write(this.value)
  }
  markAsError() {
    this.value.markAsError()
  }
}
d()
u()
c()
p()
m()
var Ir = e => e,
  Or = { bold: Ir, red: Ir, green: Ir, dim: Ir, enabled: !1 },
  Oo = { bold: pr, red: Ze, green: Fi, dim: mr, enabled: !0 },
  at = {
    write(e) {
      e.writeLine(',')
    },
  }
d()
u()
c()
p()
m()
var ye = class {
  constructor(t) {
    this.contents = t
    w(this, 'isUnderlined', !1)
    w(this, 'color', t => t)
  }
  underline() {
    return (this.isUnderlined = !0), this
  }
  setColor(t) {
    return (this.color = t), this
  }
  write(t) {
    let r = t.getCurrentLineLength()
    t.write(this.color(this.contents)),
      this.isUnderlined &&
        t.afterNextNewline(() => {
          t.write(' '.repeat(r)).writeLine(
            this.color('~'.repeat(this.contents.length)),
          )
        })
  }
}
d()
u()
c()
p()
m()
var Ne = class {
  constructor() {
    w(this, 'hasError', !1)
  }
  markAsError() {
    return (this.hasError = !0), this
  }
}
var lt = class extends Ne {
  constructor() {
    super(...arguments)
    w(this, 'items', [])
  }
  addItem(r) {
    return this.items.push(new kr(r)), this
  }
  getField(r) {
    return this.items[r]
  }
  getPrintWidth() {
    return this.items.length === 0
      ? 2
      : Math.max(...this.items.map(n => n.value.getPrintWidth())) + 2
  }
  write(r) {
    if (this.items.length === 0) {
      this.writeEmpty(r)
      return
    }
    this.writeWithItems(r)
  }
  writeEmpty(r) {
    let n = new ye('[]')
    this.hasError && n.setColor(r.context.colors.red).underline(), r.write(n)
  }
  writeWithItems(r) {
    let { colors: n } = r.context
    r
      .writeLine('[')
      .withIndent(() => r.writeJoined(at, this.items).newLine())
      .write(']'),
      this.hasError &&
        r.afterNextNewline(() => {
          r.writeLine(n.red('~'.repeat(this.getPrintWidth())))
        })
  }
  asObject() {}
}
var ut = class e extends Ne {
  constructor() {
    super(...arguments)
    w(this, 'fields', {})
    w(this, 'suggestions', [])
  }
  addField(r) {
    this.fields[r.name] = r
  }
  addSuggestion(r) {
    this.suggestions.push(r)
  }
  getField(r) {
    return this.fields[r]
  }
  getDeepField(r) {
    let [n, ...i] = r,
      o = this.getField(n)
    if (!o) return
    let s = o
    for (let a of i) {
      let l
      if (
        (s.value instanceof e
          ? (l = s.value.getField(a))
          : s.value instanceof lt && (l = s.value.getField(Number(a))),
        !l)
      )
        return
      s = l
    }
    return s
  }
  getDeepFieldValue(r) {
    return r.length === 0 ? this : this.getDeepField(r)?.value
  }
  hasField(r) {
    return !!this.getField(r)
  }
  removeAllFields() {
    this.fields = {}
  }
  removeField(r) {
    delete this.fields[r]
  }
  getFields() {
    return this.fields
  }
  isEmpty() {
    return Object.keys(this.fields).length === 0
  }
  getFieldValue(r) {
    return this.getField(r)?.value
  }
  getDeepSubSelectionValue(r) {
    let n = this
    for (let i of r) {
      if (!(n instanceof e)) return
      let o = n.getSubSelectionValue(i)
      if (!o) return
      n = o
    }
    return n
  }
  getDeepSelectionParent(r) {
    let n = this.getSelectionParent()
    if (!n) return
    let i = n
    for (let o of r) {
      let s = i.value.getFieldValue(o)
      if (!s || !(s instanceof e)) return
      let a = s.getSelectionParent()
      if (!a) return
      i = a
    }
    return i
  }
  getSelectionParent() {
    let r = this.getField('select')?.value.asObject()
    if (r) return { kind: 'select', value: r }
    let n = this.getField('include')?.value.asObject()
    if (n) return { kind: 'include', value: n }
  }
  getSubSelectionValue(r) {
    return this.getSelectionParent()?.value.fields[r].value
  }
  getPrintWidth() {
    let r = Object.values(this.fields)
    return r.length == 0 ? 2 : Math.max(...r.map(i => i.getPrintWidth())) + 2
  }
  write(r) {
    let n = Object.values(this.fields)
    if (n.length === 0 && this.suggestions.length === 0) {
      this.writeEmpty(r)
      return
    }
    this.writeWithContents(r, n)
  }
  asObject() {
    return this
  }
  writeEmpty(r) {
    let n = new ye('{}')
    this.hasError && n.setColor(r.context.colors.red).underline(), r.write(n)
  }
  writeWithContents(r, n) {
    r.writeLine('{').withIndent(() => {
      r.writeJoined(at, [...n, ...this.suggestions]).newLine()
    }),
      r.write('}'),
      this.hasError &&
        r.afterNextNewline(() => {
          r.writeLine(r.context.colors.red('~'.repeat(this.getPrintWidth())))
        })
  }
}
d()
u()
c()
p()
m()
var z = class extends Ne {
  constructor(r) {
    super()
    this.text = r
  }
  getPrintWidth() {
    return this.text.length
  }
  write(r) {
    let n = new ye(this.text)
    this.hasError && n.underline().setColor(r.context.colors.red), r.write(n)
  }
  asObject() {}
}
d()
u()
c()
p()
m()
var It = class {
  constructor() {
    w(this, 'fields', [])
  }
  addField(t, r) {
    return (
      this.fields.push({
        write(n) {
          let { green: i, dim: o } = n.context.colors
          n.write(i(o(`${t}: ${r}`))).addMarginSymbol(i(o('+')))
        },
      }),
      this
    )
  }
  write(t) {
    let {
      colors: { green: r },
    } = t.context
    t.writeLine(r('{'))
      .withIndent(() => {
        t.writeJoined(at, this.fields).newLine()
      })
      .write(r('}'))
      .addMarginSymbol(r('+'))
  }
}
function Sr(e, t, r) {
  switch (e.kind) {
    case 'MutuallyExclusiveFields':
      Du(e, t)
      break
    case 'IncludeOnScalar':
      Mu(e, t)
      break
    case 'EmptySelection':
      Nu(e, t, r)
      break
    case 'UnknownSelectionField':
      Bu(e, t)
      break
    case 'InvalidSelectionValue':
      qu(e, t)
      break
    case 'UnknownArgument':
      Uu(e, t)
      break
    case 'UnknownInputField':
      $u(e, t)
      break
    case 'RequiredArgumentMissing':
      Vu(e, t)
      break
    case 'InvalidArgumentType':
      ju(e, t)
      break
    case 'InvalidArgumentValue':
      Gu(e, t)
      break
    case 'ValueTooLarge':
      Ju(e, t)
      break
    case 'SomeFieldsMissing':
      Qu(e, t)
      break
    case 'TooManyFieldsGiven':
      Wu(e, t)
      break
    case 'Union':
      ko(e, t, r)
      break
    default:
      throw new Error('not implemented: ' + e.kind)
  }
}
function Du(e, t) {
  let r = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject()
  r &&
    (r.getField(e.firstField)?.markAsError(),
    r.getField(e.secondField)?.markAsError()),
    t.addErrorMessage(
      n =>
        `Please ${n.bold('either')} use ${n.green(`\`${e.firstField}\``)} or ${n.green(`\`${e.secondField}\``)}, but ${n.red('not both')} at the same time.`,
    )
}
function Mu(e, t) {
  let [r, n] = Ot(e.selectionPath),
    i = e.outputType,
    o = t.arguments.getDeepSelectionParent(r)?.value
  if (o && (o.getField(n)?.markAsError(), i))
    for (let s of i.fields)
      s.isRelation && o.addSuggestion(new le(s.name, 'true'))
  t.addErrorMessage(s => {
    let a = `Invalid scalar field ${s.red(`\`${n}\``)} for ${s.bold('include')} statement`
    return (
      i ? (a += ` on model ${s.bold(i.name)}. ${Dt(s)}`) : (a += '.'),
      (a += `
Note that ${s.bold('include')} statements only accept relation fields.`),
      a
    )
  })
}
function Nu(e, t, r) {
  let n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject()
  if (n) {
    let i = n.getField('omit')?.value.asObject()
    if (i) {
      _u(e, t, i)
      return
    }
    if (n.hasField('select')) {
      Fu(e, t)
      return
    }
  }
  if (r?.[nt(e.outputType.name)]) {
    Lu(e, t)
    return
  }
  t.addErrorMessage(
    () => `Unknown field at "${e.selectionPath.join('.')} selection"`,
  )
}
function _u(e, t, r) {
  r.removeAllFields()
  for (let n of e.outputType.fields) r.addSuggestion(new le(n.name, 'false'))
  t.addErrorMessage(
    n =>
      `The ${n.red('omit')} statement includes every field of the model ${n.bold(e.outputType.name)}. At least one field must be included in the result`,
  )
}
function Fu(e, t) {
  let r = e.outputType,
    n = t.arguments.getDeepSelectionParent(e.selectionPath)?.value,
    i = n?.isEmpty() ?? !1
  n && (n.removeAllFields(), _o(n, r)),
    t.addErrorMessage(o =>
      i
        ? `The ${o.red('`select`')} statement for type ${o.bold(r.name)} must not be empty. ${Dt(o)}`
        : `The ${o.red('`select`')} statement for type ${o.bold(r.name)} needs ${o.bold('at least one truthy value')}.`,
    )
}
function Lu(e, t) {
  let r = new It()
  for (let i of e.outputType.fields) i.isRelation || r.addField(i.name, 'false')
  let n = new le('omit', r).makeRequired()
  if (e.selectionPath.length === 0) t.arguments.addSuggestion(n)
  else {
    let [i, o] = Ot(e.selectionPath),
      a = t.arguments.getDeepSelectionParent(i)?.value.asObject()?.getField(o)
    if (a) {
      let l = a?.value.asObject() ?? new ut()
      l.addSuggestion(n), (a.value = l)
    }
  }
  t.addErrorMessage(
    i =>
      `The global ${i.red('omit')} configuration excludes every field of the model ${i.bold(e.outputType.name)}. At least one field must be included in the result`,
  )
}
function Bu(e, t) {
  let r = Fo(e.selectionPath, t)
  if (r.parentKind !== 'unknown') {
    r.field.markAsError()
    let n = r.parent
    switch (r.parentKind) {
      case 'select':
        _o(n, e.outputType)
        break
      case 'include':
        Hu(n, e.outputType)
        break
      case 'omit':
        Ku(n, e.outputType)
        break
    }
  }
  t.addErrorMessage(n => {
    let i = [`Unknown field ${n.red(`\`${r.fieldName}\``)}`]
    return (
      r.parentKind !== 'unknown' &&
        i.push(`for ${n.bold(r.parentKind)} statement`),
      i.push(`on model ${n.bold(`\`${e.outputType.name}\``)}.`),
      i.push(Dt(n)),
      i.join(' ')
    )
  })
}
function qu(e, t) {
  let r = Fo(e.selectionPath, t)
  r.parentKind !== 'unknown' && r.field.value.markAsError(),
    t.addErrorMessage(
      n =>
        `Invalid value for selection field \`${n.red(r.fieldName)}\`: ${e.underlyingError}`,
    )
}
function Uu(e, t) {
  let r = e.argumentPath[0],
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject()
  n && (n.getField(r)?.markAsError(), zu(n, e.arguments)),
    t.addErrorMessage(i =>
      Mo(
        i,
        r,
        e.arguments.map(o => o.name),
      ),
    )
}
function $u(e, t) {
  let [r, n] = Ot(e.argumentPath),
    i = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject()
  if (i) {
    i.getDeepField(e.argumentPath)?.markAsError()
    let o = i.getDeepFieldValue(r)?.asObject()
    o && Lo(o, e.inputType)
  }
  t.addErrorMessage(o =>
    Mo(
      o,
      n,
      e.inputType.fields.map(s => s.name),
    ),
  )
}
function Mo(e, t, r) {
  let n = [`Unknown argument \`${e.red(t)}\`.`],
    i = Zu(t, r)
  return (
    i && n.push(`Did you mean \`${e.green(i)}\`?`),
    r.length > 0 && n.push(Dt(e)),
    n.join(' ')
  )
}
function Vu(e, t) {
  let r
  t.addErrorMessage(l =>
    r?.value instanceof z && r.value.text === 'null'
      ? `Argument \`${l.green(o)}\` must not be ${l.red('null')}.`
      : `Argument \`${l.green(o)}\` is missing.`,
  )
  let n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject()
  if (!n) return
  let [i, o] = Ot(e.argumentPath),
    s = new It(),
    a = n.getDeepFieldValue(i)?.asObject()
  if (a)
    if (
      ((r = a.getField(o)),
      r && a.removeField(o),
      e.inputTypes.length === 1 && e.inputTypes[0].kind === 'object')
    ) {
      for (let l of e.inputTypes[0].fields)
        s.addField(l.name, l.typeNames.join(' | '))
      a.addSuggestion(new le(o, s).makeRequired())
    } else {
      let l = e.inputTypes.map(No).join(' | ')
      a.addSuggestion(new le(o, l).makeRequired())
    }
}
function No(e) {
  return e.kind === 'list' ? `${No(e.elementType)}[]` : e.name
}
function ju(e, t) {
  let r = e.argument.name,
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject()
  n && n.getDeepFieldValue(e.argumentPath)?.markAsError(),
    t.addErrorMessage(i => {
      let o = Dr(
        'or',
        e.argument.typeNames.map(s => i.green(s)),
      )
      return `Argument \`${i.bold(r)}\`: Invalid value provided. Expected ${o}, provided ${i.red(e.inferredType)}.`
    })
}
function Gu(e, t) {
  let r = e.argument.name,
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject()
  n && n.getDeepFieldValue(e.argumentPath)?.markAsError(),
    t.addErrorMessage(i => {
      let o = [`Invalid value for argument \`${i.bold(r)}\``]
      if (
        (e.underlyingError && o.push(`: ${e.underlyingError}`),
        o.push('.'),
        e.argument.typeNames.length > 0)
      ) {
        let s = Dr(
          'or',
          e.argument.typeNames.map(a => i.green(a)),
        )
        o.push(` Expected ${s}.`)
      }
      return o.join('')
    })
}
function Ju(e, t) {
  let r = e.argument.name,
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(),
    i
  if (n) {
    let s = n.getDeepField(e.argumentPath)?.value
    s?.markAsError(), s instanceof z && (i = s.text)
  }
  t.addErrorMessage(o => {
    let s = ['Unable to fit value']
    return (
      i && s.push(o.red(i)),
      s.push(`into a 64-bit signed integer for field \`${o.bold(r)}\``),
      s.join(' ')
    )
  })
}
function Qu(e, t) {
  let r = e.argumentPath[e.argumentPath.length - 1],
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject()
  if (n) {
    let i = n.getDeepFieldValue(e.argumentPath)?.asObject()
    i && Lo(i, e.inputType)
  }
  t.addErrorMessage(i => {
    let o = [
      `Argument \`${i.bold(r)}\` of type ${i.bold(e.inputType.name)} needs`,
    ]
    return (
      e.constraints.minFieldCount === 1
        ? e.constraints.requiredFields
          ? o.push(
              `${i.green('at least one of')} ${Dr(
                'or',
                e.constraints.requiredFields.map(s => `\`${i.bold(s)}\``),
              )} arguments.`,
            )
          : o.push(`${i.green('at least one')} argument.`)
        : o.push(
            `${i.green(`at least ${e.constraints.minFieldCount}`)} arguments.`,
          ),
      o.push(Dt(i)),
      o.join(' ')
    )
  })
}
function Wu(e, t) {
  let r = e.argumentPath[e.argumentPath.length - 1],
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(),
    i = []
  if (n) {
    let o = n.getDeepFieldValue(e.argumentPath)?.asObject()
    o && (o.markAsError(), (i = Object.keys(o.getFields())))
  }
  t.addErrorMessage(o => {
    let s = [
      `Argument \`${o.bold(r)}\` of type ${o.bold(e.inputType.name)} needs`,
    ]
    return (
      e.constraints.minFieldCount === 1 && e.constraints.maxFieldCount == 1
        ? s.push(`${o.green('exactly one')} argument,`)
        : e.constraints.maxFieldCount == 1
          ? s.push(`${o.green('at most one')} argument,`)
          : s.push(
              `${o.green(`at most ${e.constraints.maxFieldCount}`)} arguments,`,
            ),
      s.push(
        `but you provided ${Dr(
          'and',
          i.map(a => o.red(a)),
        )}. Please choose`,
      ),
      e.constraints.maxFieldCount === 1
        ? s.push('one.')
        : s.push(`${e.constraints.maxFieldCount}.`),
      s.join(' ')
    )
  })
}
function _o(e, t) {
  for (let r of t.fields)
    e.hasField(r.name) || e.addSuggestion(new le(r.name, 'true'))
}
function Hu(e, t) {
  for (let r of t.fields)
    r.isRelation &&
      !e.hasField(r.name) &&
      e.addSuggestion(new le(r.name, 'true'))
}
function Ku(e, t) {
  for (let r of t.fields)
    !e.hasField(r.name) &&
      !r.isRelation &&
      e.addSuggestion(new le(r.name, 'true'))
}
function zu(e, t) {
  for (let r of t)
    e.hasField(r.name) ||
      e.addSuggestion(new le(r.name, r.typeNames.join(' | ')))
}
function Fo(e, t) {
  let [r, n] = Ot(e),
    i = t.arguments.getDeepSubSelectionValue(r)?.asObject()
  if (!i) return { parentKind: 'unknown', fieldName: n }
  let o = i.getFieldValue('select')?.asObject(),
    s = i.getFieldValue('include')?.asObject(),
    a = i.getFieldValue('omit')?.asObject(),
    l = o?.getField(n)
  return o && l
    ? { parentKind: 'select', parent: o, field: l, fieldName: n }
    : ((l = s?.getField(n)),
      s && l
        ? { parentKind: 'include', field: l, parent: s, fieldName: n }
        : ((l = a?.getField(n)),
          a && l
            ? { parentKind: 'omit', field: l, parent: a, fieldName: n }
            : { parentKind: 'unknown', fieldName: n }))
}
function Lo(e, t) {
  if (t.kind === 'object')
    for (let r of t.fields)
      e.hasField(r.name) ||
        e.addSuggestion(new le(r.name, r.typeNames.join(' | ')))
}
function Ot(e) {
  let t = [...e],
    r = t.pop()
  if (!r) throw new Error('unexpected empty path')
  return [t, r]
}
function Dt({ green: e, enabled: t }) {
  return (
    'Available options are ' +
    (t ? `listed in ${e('green')}` : 'marked with ?') +
    '.'
  )
}
function Dr(e, t) {
  if (t.length === 1) return t[0]
  let r = [...t],
    n = r.pop()
  return `${r.join(', ')} ${e} ${n}`
}
var Yu = 3
function Zu(e, t) {
  let r = 1 / 0,
    n
  for (let i of t) {
    let o = (0, Do.default)(e, i)
    o > Yu || (o < r && ((r = o), (n = i)))
  }
  return n
}
d()
u()
c()
p()
m()
d()
u()
c()
p()
m()
function Bo(e) {
  return e.substring(0, 1).toLowerCase() + e.substring(1)
}
d()
u()
c()
p()
m()
var Mt = class {
  constructor(t, r, n, i, o) {
    w(this, 'modelName')
    w(this, 'name')
    w(this, 'typeName')
    w(this, 'isList')
    w(this, 'isEnum')
    ;(this.modelName = t),
      (this.name = r),
      (this.typeName = n),
      (this.isList = i),
      (this.isEnum = o)
  }
  _toGraphQLInputType() {
    let t = this.isList ? 'List' : '',
      r = this.isEnum ? 'Enum' : ''
    return `${t}${r}${this.typeName}FieldRefInput<${this.modelName}>`
  }
}
function ct(e) {
  return e instanceof Mt
}
d()
u()
c()
p()
m()
var Mr = Symbol(),
  kn = new WeakMap(),
  Ce = class {
    constructor(t) {
      t === Mr
        ? kn.set(this, `Prisma.${this._getName()}`)
        : kn.set(
            this,
            `new Prisma.${this._getNamespace()}.${this._getName()}()`,
          )
    }
    _getName() {
      return this.constructor.name
    }
    toString() {
      return kn.get(this)
    }
  },
  Nt = class extends Ce {
    _getNamespace() {
      return 'NullTypes'
    }
  },
  _t = class extends Nt {}
On(_t, 'DbNull')
var Ft = class extends Nt {}
On(Ft, 'JsonNull')
var Lt = class extends Nt {}
On(Lt, 'AnyNull')
var In = {
  classes: { DbNull: _t, JsonNull: Ft, AnyNull: Lt },
  instances: { DbNull: new _t(Mr), JsonNull: new Ft(Mr), AnyNull: new Lt(Mr) },
}
function On(e, t) {
  Object.defineProperty(e, 'name', { value: t, configurable: !0 })
}
d()
u()
c()
p()
m()
var qo = ': ',
  Nr = class {
    constructor(t, r) {
      this.name = t
      this.value = r
      w(this, 'hasError', !1)
    }
    markAsError() {
      this.hasError = !0
    }
    getPrintWidth() {
      return this.name.length + this.value.getPrintWidth() + qo.length
    }
    write(t) {
      let r = new ye(this.name)
      this.hasError && r.underline().setColor(t.context.colors.red),
        t.write(r).write(qo).write(this.value)
    }
  }
var Dn = class {
  constructor(t) {
    w(this, 'arguments')
    w(this, 'errorMessages', [])
    this.arguments = t
  }
  write(t) {
    t.write(this.arguments)
  }
  addErrorMessage(t) {
    this.errorMessages.push(t)
  }
  renderAllMessages(t) {
    return this.errorMessages.map(r => r(t)).join(`
`)
  }
}
function pt(e) {
  return new Dn(Uo(e))
}
function Uo(e) {
  let t = new ut()
  for (let [r, n] of Object.entries(e)) {
    let i = new Nr(r, $o(n))
    t.addField(i)
  }
  return t
}
function $o(e) {
  if (typeof e == 'string') return new z(JSON.stringify(e))
  if (typeof e == 'number' || typeof e == 'boolean') return new z(String(e))
  if (typeof e == 'bigint') return new z(`${e}n`)
  if (e === null) return new z('null')
  if (e === void 0) return new z('undefined')
  if (ot(e)) return new z(`new Prisma.Decimal("${e.toFixed()}")`)
  if (e instanceof Uint8Array)
    return E.Buffer.isBuffer(e)
      ? new z(`Buffer.alloc(${e.byteLength})`)
      : new z(`new Uint8Array(${e.byteLength})`)
  if (e instanceof Date) {
    let t = Ar(e) ? e.toISOString() : 'Invalid Date'
    return new z(`new Date("${t}")`)
  }
  return e instanceof Ce
    ? new z(`Prisma.${e._getName()}`)
    : ct(e)
      ? new z(`prisma.${Bo(e.modelName)}.$fields.${e.name}`)
      : Array.isArray(e)
        ? Xu(e)
        : typeof e == 'object'
          ? Uo(e)
          : new z(Object.prototype.toString.call(e))
}
function Xu(e) {
  let t = new lt()
  for (let r of e) t.addItem($o(r))
  return t
}
function _r(e, t) {
  let r = t === 'pretty' ? Oo : Or,
    n = e.renderAllMessages(r),
    i = new st(0, { colors: r }).write(e).toString()
  return { message: n, args: i }
}
function Fr({
  args: e,
  errors: t,
  errorFormat: r,
  callsite: n,
  originalMethod: i,
  clientVersion: o,
  globalOmit: s,
}) {
  let a = pt(e)
  for (let h of t) Sr(h, a, s)
  let { message: l, args: f } = _r(a, r),
    g = Rr({
      message: l,
      callsite: n,
      originalMethod: i,
      showColors: r === 'pretty',
      callArguments: f,
    })
  throw new te(g, { clientVersion: o })
}
d()
u()
c()
p()
m()
d()
u()
c()
p()
m()
var we = class {
  constructor() {
    w(this, '_map', new Map())
  }
  get(t) {
    return this._map.get(t)?.value
  }
  set(t, r) {
    this._map.set(t, { value: r })
  }
  getOrCreate(t, r) {
    let n = this._map.get(t)
    if (n) return n.value
    let i = r()
    return this.set(t, i), i
  }
}
d()
u()
c()
p()
m()
function Bt(e) {
  let t
  return {
    get() {
      return t || (t = { value: e() }), t.value
    },
  }
}
d()
u()
c()
p()
m()
function Ee(e) {
  return e.replace(/^./, t => t.toLowerCase())
}
d()
u()
c()
p()
m()
function jo(e, t, r) {
  let n = Ee(r)
  return !t.result || !(t.result.$allModels || t.result[n])
    ? e
    : ec({
        ...e,
        ...Vo(t.name, e, t.result.$allModels),
        ...Vo(t.name, e, t.result[n]),
      })
}
function ec(e) {
  let t = new we(),
    r = (n, i) =>
      t.getOrCreate(n, () =>
        i.has(n)
          ? [n]
          : (i.add(n), e[n] ? e[n].needs.flatMap(o => r(o, i)) : [n]),
      )
  return et(e, n => ({ ...n, needs: r(n.name, new Set()) }))
}
function Vo(e, t, r) {
  return r
    ? et(r, ({ needs: n, compute: i }, o) => ({
        name: o,
        needs: n ? Object.keys(n).filter(s => n[s]) : [],
        compute: tc(t, o, i),
      }))
    : {}
}
function tc(e, t, r) {
  let n = e?.[t]?.compute
  return n ? i => r({ ...i, [t]: n(i) }) : r
}
function Go(e, t) {
  if (!t) return e
  let r = { ...e }
  for (let n of Object.values(t))
    if (e[n.name]) for (let i of n.needs) r[i] = !0
  return r
}
function Jo(e, t) {
  if (!t) return e
  let r = { ...e }
  for (let n of Object.values(t))
    if (!e[n.name]) for (let i of n.needs) delete r[i]
  return r
}
var Lr = class {
    constructor(t, r) {
      this.extension = t
      this.previous = r
      w(this, 'computedFieldsCache', new we())
      w(this, 'modelExtensionsCache', new we())
      w(this, 'queryCallbacksCache', new we())
      w(
        this,
        'clientExtensions',
        Bt(() =>
          this.extension.client
            ? {
                ...this.previous?.getAllClientExtensions(),
                ...this.extension.client,
              }
            : this.previous?.getAllClientExtensions(),
        ),
      )
      w(
        this,
        'batchCallbacks',
        Bt(() => {
          let t = this.previous?.getAllBatchQueryCallbacks() ?? [],
            r = this.extension.query?.$__internalBatch
          return r ? t.concat(r) : t
        }),
      )
    }
    getAllComputedFields(t) {
      return this.computedFieldsCache.getOrCreate(t, () =>
        jo(this.previous?.getAllComputedFields(t), this.extension, t),
      )
    }
    getAllClientExtensions() {
      return this.clientExtensions.get()
    }
    getAllModelExtensions(t) {
      return this.modelExtensionsCache.getOrCreate(t, () => {
        let r = Ee(t)
        return !this.extension.model ||
          !(this.extension.model[r] || this.extension.model.$allModels)
          ? this.previous?.getAllModelExtensions(t)
          : {
              ...this.previous?.getAllModelExtensions(t),
              ...this.extension.model.$allModels,
              ...this.extension.model[r],
            }
      })
    }
    getAllQueryCallbacks(t, r) {
      return this.queryCallbacksCache.getOrCreate(`${t}:${r}`, () => {
        let n = this.previous?.getAllQueryCallbacks(t, r) ?? [],
          i = [],
          o = this.extension.query
        return !o || !(o[t] || o.$allModels || o[r] || o.$allOperations)
          ? n
          : (o[t] !== void 0 &&
              (o[t][r] !== void 0 && i.push(o[t][r]),
              o[t].$allOperations !== void 0 && i.push(o[t].$allOperations)),
            t !== '$none' &&
              o.$allModels !== void 0 &&
              (o.$allModels[r] !== void 0 && i.push(o.$allModels[r]),
              o.$allModels.$allOperations !== void 0 &&
                i.push(o.$allModels.$allOperations)),
            o[r] !== void 0 && i.push(o[r]),
            o.$allOperations !== void 0 && i.push(o.$allOperations),
            n.concat(i))
      })
    }
    getAllBatchQueryCallbacks() {
      return this.batchCallbacks.get()
    }
  },
  mt = class e {
    constructor(t) {
      this.head = t
    }
    static empty() {
      return new e()
    }
    static single(t) {
      return new e(new Lr(t))
    }
    isEmpty() {
      return this.head === void 0
    }
    append(t) {
      return new e(new Lr(t, this.head))
    }
    getAllComputedFields(t) {
      return this.head?.getAllComputedFields(t)
    }
    getAllClientExtensions() {
      return this.head?.getAllClientExtensions()
    }
    getAllModelExtensions(t) {
      return this.head?.getAllModelExtensions(t)
    }
    getAllQueryCallbacks(t, r) {
      return this.head?.getAllQueryCallbacks(t, r) ?? []
    }
    getAllBatchQueryCallbacks() {
      return this.head?.getAllBatchQueryCallbacks() ?? []
    }
  }
d()
u()
c()
p()
m()
var Br = class {
  constructor(t) {
    this.name = t
  }
}
function Qo(e) {
  return e instanceof Br
}
function rc(e) {
  return new Br(e)
}
d()
u()
c()
p()
m()
d()
u()
c()
p()
m()
var Wo = Symbol(),
  qt = class {
    constructor(t) {
      if (t !== Wo)
        throw new Error('Skip instance can not be constructed directly')
    }
    ifUndefined(t) {
      return t === void 0 ? Mn : t
    }
  },
  Mn = new qt(Wo)
function be(e) {
  return e instanceof qt
}
var nc = {
    findUnique: 'findUnique',
    findUniqueOrThrow: 'findUniqueOrThrow',
    findFirst: 'findFirst',
    findFirstOrThrow: 'findFirstOrThrow',
    findMany: 'findMany',
    count: 'aggregate',
    create: 'createOne',
    createMany: 'createMany',
    createManyAndReturn: 'createManyAndReturn',
    update: 'updateOne',
    updateMany: 'updateMany',
    updateManyAndReturn: 'updateManyAndReturn',
    upsert: 'upsertOne',
    delete: 'deleteOne',
    deleteMany: 'deleteMany',
    executeRaw: 'executeRaw',
    queryRaw: 'queryRaw',
    aggregate: 'aggregate',
    groupBy: 'groupBy',
    runCommandRaw: 'runCommandRaw',
    findRaw: 'findRaw',
    aggregateRaw: 'aggregateRaw',
  },
  Ho = 'explicitly `undefined` values are not allowed'
function _n({
  modelName: e,
  action: t,
  args: r,
  runtimeDataModel: n,
  extensions: i = mt.empty(),
  callsite: o,
  clientMethod: s,
  errorFormat: a,
  clientVersion: l,
  previewFeatures: f,
  globalOmit: g,
}) {
  let h = new Nn({
    runtimeDataModel: n,
    modelName: e,
    action: t,
    rootArgs: r,
    callsite: o,
    extensions: i,
    selectionPath: [],
    argumentPath: [],
    originalMethod: s,
    errorFormat: a,
    clientVersion: l,
    previewFeatures: f,
    globalOmit: g,
  })
  return { modelName: e, action: nc[t], query: Ut(r, h) }
}
function Ut({ select: e, include: t, ...r } = {}, n) {
  let i = r.omit
  return delete r.omit, { arguments: zo(r, n), selection: ic(e, t, i, n) }
}
function ic(e, t, r, n) {
  return e
    ? (t
        ? n.throwValidationError({
            kind: 'MutuallyExclusiveFields',
            firstField: 'include',
            secondField: 'select',
            selectionPath: n.getSelectionPath(),
          })
        : r &&
          n.throwValidationError({
            kind: 'MutuallyExclusiveFields',
            firstField: 'omit',
            secondField: 'select',
            selectionPath: n.getSelectionPath(),
          }),
      lc(e, n))
    : oc(n, t, r)
}
function oc(e, t, r) {
  let n = {}
  return (
    e.modelOrType &&
      !e.isRawAction() &&
      ((n.$composites = !0), (n.$scalars = !0)),
    t && sc(n, t, e),
    ac(n, r, e),
    n
  )
}
function sc(e, t, r) {
  for (let [n, i] of Object.entries(t)) {
    if (be(i)) continue
    let o = r.nestSelection(n)
    if ((Fn(i, o), i === !1 || i === void 0)) {
      e[n] = !1
      continue
    }
    let s = r.findField(n)
    if (
      (s &&
        s.kind !== 'object' &&
        r.throwValidationError({
          kind: 'IncludeOnScalar',
          selectionPath: r.getSelectionPath().concat(n),
          outputType: r.getOutputTypeDescription(),
        }),
      s)
    ) {
      e[n] = Ut(i === !0 ? {} : i, o)
      continue
    }
    if (i === !0) {
      e[n] = !0
      continue
    }
    e[n] = Ut(i, o)
  }
}
function ac(e, t, r) {
  let n = r.getComputedFields(),
    i = { ...r.getGlobalOmit(), ...t },
    o = Jo(i, n)
  for (let [s, a] of Object.entries(o)) {
    if (be(a)) continue
    Fn(a, r.nestSelection(s))
    let l = r.findField(s)
    ;(n?.[s] && !l) || (e[s] = !a)
  }
}
function lc(e, t) {
  let r = {},
    n = t.getComputedFields(),
    i = Go(e, n)
  for (let [o, s] of Object.entries(i)) {
    if (be(s)) continue
    let a = t.nestSelection(o)
    Fn(s, a)
    let l = t.findField(o)
    if (!(n?.[o] && !l)) {
      if (s === !1 || s === void 0 || be(s)) {
        r[o] = !1
        continue
      }
      if (s === !0) {
        l?.kind === 'object' ? (r[o] = Ut({}, a)) : (r[o] = !0)
        continue
      }
      r[o] = Ut(s, a)
    }
  }
  return r
}
function Ko(e, t) {
  if (e === null) return null
  if (typeof e == 'string' || typeof e == 'number' || typeof e == 'boolean')
    return e
  if (typeof e == 'bigint') return { $type: 'BigInt', value: String(e) }
  if (it(e)) {
    if (Ar(e)) return { $type: 'DateTime', value: e.toISOString() }
    t.throwValidationError({
      kind: 'InvalidArgumentValue',
      selectionPath: t.getSelectionPath(),
      argumentPath: t.getArgumentPath(),
      argument: { name: t.getArgumentName(), typeNames: ['Date'] },
      underlyingError: 'Provided Date object is invalid',
    })
  }
  if (Qo(e)) return { $type: 'Param', value: e.name }
  if (ct(e))
    return {
      $type: 'FieldRef',
      value: { _ref: e.name, _container: e.modelName },
    }
  if (Array.isArray(e)) return uc(e, t)
  if (ArrayBuffer.isView(e)) {
    let { buffer: r, byteOffset: n, byteLength: i } = e
    return { $type: 'Bytes', value: E.Buffer.from(r, n, i).toString('base64') }
  }
  if (cc(e)) return e.values
  if (ot(e)) return { $type: 'Decimal', value: e.toFixed() }
  if (e instanceof Ce) {
    if (e !== In.instances[e._getName()])
      throw new Error('Invalid ObjectEnumValue')
    return { $type: 'Enum', value: e._getName() }
  }
  if (pc(e)) return e.toJSON()
  if (typeof e == 'object') return zo(e, t)
  t.throwValidationError({
    kind: 'InvalidArgumentValue',
    selectionPath: t.getSelectionPath(),
    argumentPath: t.getArgumentPath(),
    argument: { name: t.getArgumentName(), typeNames: [] },
    underlyingError: `We could not serialize ${Object.prototype.toString.call(e)} value. Serialize the object to JSON or implement a ".toJSON()" method on it`,
  })
}
function zo(e, t) {
  if (e.$type) return { $type: 'Raw', value: e }
  let r = {}
  for (let n in e) {
    let i = e[n],
      o = t.nestArgument(n)
    be(i) ||
      (i !== void 0
        ? (r[n] = Ko(i, o))
        : t.isPreviewFeatureOn('strictUndefinedChecks') &&
          t.throwValidationError({
            kind: 'InvalidArgumentValue',
            argumentPath: o.getArgumentPath(),
            selectionPath: t.getSelectionPath(),
            argument: { name: t.getArgumentName(), typeNames: [] },
            underlyingError: Ho,
          }))
  }
  return r
}
function uc(e, t) {
  let r = []
  for (let n = 0; n < e.length; n++) {
    let i = t.nestArgument(String(n)),
      o = e[n]
    if (o === void 0 || be(o)) {
      let s = o === void 0 ? 'undefined' : 'Prisma.skip'
      t.throwValidationError({
        kind: 'InvalidArgumentValue',
        selectionPath: i.getSelectionPath(),
        argumentPath: i.getArgumentPath(),
        argument: { name: `${t.getArgumentName()}[${n}]`, typeNames: [] },
        underlyingError: `Can not use \`${s}\` value within array. Use \`null\` or filter out \`${s}\` values`,
      })
    }
    r.push(Ko(o, i))
  }
  return r
}
function cc(e) {
  return typeof e == 'object' && e !== null && e.__prismaRawParameters__ === !0
}
function pc(e) {
  return typeof e == 'object' && e !== null && typeof e.toJSON == 'function'
}
function Fn(e, t) {
  e === void 0 &&
    t.isPreviewFeatureOn('strictUndefinedChecks') &&
    t.throwValidationError({
      kind: 'InvalidSelectionValue',
      selectionPath: t.getSelectionPath(),
      underlyingError: Ho,
    })
}
var Nn = class e {
  constructor(t) {
    this.params = t
    w(this, 'modelOrType')
    this.params.modelName &&
      (this.modelOrType =
        this.params.runtimeDataModel.models[this.params.modelName] ??
        this.params.runtimeDataModel.types[this.params.modelName])
  }
  throwValidationError(t) {
    Fr({
      errors: [t],
      originalMethod: this.params.originalMethod,
      args: this.params.rootArgs ?? {},
      callsite: this.params.callsite,
      errorFormat: this.params.errorFormat,
      clientVersion: this.params.clientVersion,
      globalOmit: this.params.globalOmit,
    })
  }
  getSelectionPath() {
    return this.params.selectionPath
  }
  getArgumentPath() {
    return this.params.argumentPath
  }
  getArgumentName() {
    return this.params.argumentPath[this.params.argumentPath.length - 1]
  }
  getOutputTypeDescription() {
    if (!(!this.params.modelName || !this.modelOrType))
      return {
        name: this.params.modelName,
        fields: this.modelOrType.fields.map(t => ({
          name: t.name,
          typeName: 'boolean',
          isRelation: t.kind === 'object',
        })),
      }
  }
  isRawAction() {
    return [
      'executeRaw',
      'queryRaw',
      'runCommandRaw',
      'findRaw',
      'aggregateRaw',
    ].includes(this.params.action)
  }
  isPreviewFeatureOn(t) {
    return this.params.previewFeatures.includes(t)
  }
  getComputedFields() {
    if (this.params.modelName)
      return this.params.extensions.getAllComputedFields(this.params.modelName)
  }
  findField(t) {
    return this.modelOrType?.fields.find(r => r.name === t)
  }
  nestSelection(t) {
    let r = this.findField(t),
      n = r?.kind === 'object' ? r.type : void 0
    return new e({
      ...this.params,
      modelName: n,
      selectionPath: this.params.selectionPath.concat(t),
    })
  }
  getGlobalOmit() {
    return this.params.modelName && this.shouldApplyGlobalOmit()
      ? (this.params.globalOmit?.[nt(this.params.modelName)] ?? {})
      : {}
  }
  shouldApplyGlobalOmit() {
    switch (this.params.action) {
      case 'findFirst':
      case 'findFirstOrThrow':
      case 'findUniqueOrThrow':
      case 'findMany':
      case 'upsert':
      case 'findUnique':
      case 'createManyAndReturn':
      case 'create':
      case 'update':
      case 'updateManyAndReturn':
      case 'delete':
        return !0
      case 'executeRaw':
      case 'aggregateRaw':
      case 'runCommandRaw':
      case 'findRaw':
      case 'createMany':
      case 'deleteMany':
      case 'groupBy':
      case 'updateMany':
      case 'count':
      case 'aggregate':
      case 'queryRaw':
        return !1
      default:
        Pe(this.params.action, 'Unknown action')
    }
  }
  nestArgument(t) {
    return new e({
      ...this.params,
      argumentPath: this.params.argumentPath.concat(t),
    })
  }
}
d()
u()
c()
p()
m()
function Yo(e) {
  if (!e._hasPreviewFlag('metrics'))
    throw new te(
      '`metrics` preview feature must be enabled in order to access metrics API',
      { clientVersion: e._clientVersion },
    )
}
var $t = class {
  constructor(t) {
    w(this, '_client')
    this._client = t
  }
  prometheus(t) {
    return (
      Yo(this._client),
      this._client._engine.metrics({ format: 'prometheus', ...t })
    )
  }
  json(t) {
    return (
      Yo(this._client), this._client._engine.metrics({ format: 'json', ...t })
    )
  }
}
d()
u()
c()
p()
m()
function mc(e) {
  return { models: Ln(e.models), enums: Ln(e.enums), types: Ln(e.types) }
}
function Ln(e) {
  let t = {}
  for (let { name: r, ...n } of e) t[r] = n
  return t
}
function dc(e, t) {
  let r = Bt(() => fc(t))
  Object.defineProperty(e, 'dmmf', { get: () => r.get() })
}
function fc(e) {
  return {
    datamodel: { models: Bn(e.models), enums: Bn(e.enums), types: Bn(e.types) },
  }
}
function Bn(e) {
  return Object.entries(e).map(([t, r]) => ({ name: t, ...r }))
}
d()
u()
c()
p()
m()
var qn = new WeakMap(),
  qr = '$$PrismaTypedSql',
  Vt = class {
    constructor(t, r) {
      qn.set(this, { sql: t, values: r }),
        Object.defineProperty(this, qr, { value: qr })
    }
    get sql() {
      return qn.get(this).sql
    }
    get values() {
      return qn.get(this).values
    }
  }
function gc(e) {
  return (...t) => new Vt(e, t)
}
function Ur(e) {
  return e != null && e[qr] === qr
}
d()
u()
c()
p()
m()
var pa = We(Zo())
d()
u()
c()
p()
m()
to()
Wi()
Yi()
d()
u()
c()
p()
m()
var ue = class e {
  constructor(t, r) {
    if (t.length - 1 !== r.length)
      throw t.length === 0
        ? new TypeError('Expected at least 1 string')
        : new TypeError(
            `Expected ${t.length} strings to have ${t.length - 1} values`,
          )
    let n = r.reduce((s, a) => s + (a instanceof e ? a.values.length : 1), 0)
    ;(this.values = new Array(n)),
      (this.strings = new Array(n + 1)),
      (this.strings[0] = t[0])
    let i = 0,
      o = 0
    for (; i < r.length; ) {
      let s = r[i++],
        a = t[i]
      if (s instanceof e) {
        this.strings[o] += s.strings[0]
        let l = 0
        for (; l < s.values.length; )
          (this.values[o++] = s.values[l++]), (this.strings[o] = s.strings[l])
        this.strings[o] += a
      } else (this.values[o++] = s), (this.strings[o] = a)
    }
  }
  get sql() {
    let t = this.strings.length,
      r = 1,
      n = this.strings[0]
    for (; r < t; ) n += `?${this.strings[r++]}`
    return n
  }
  get statement() {
    let t = this.strings.length,
      r = 1,
      n = this.strings[0]
    for (; r < t; ) n += `:${r}${this.strings[r++]}`
    return n
  }
  get text() {
    let t = this.strings.length,
      r = 1,
      n = this.strings[0]
    for (; r < t; ) n += `$${r}${this.strings[r++]}`
    return n
  }
  inspect() {
    return {
      sql: this.sql,
      statement: this.statement,
      text: this.text,
      values: this.values,
    }
  }
}
function yc(e, t = ',', r = '', n = '') {
  if (e.length === 0)
    throw new TypeError(
      'Expected `join([])` to be called with an array of multiple elements, but got an empty array',
    )
  return new ue([r, ...Array(e.length - 1).fill(t), n], e)
}
function Xo(e) {
  return new ue([e], [])
}
var wc = Xo('')
function es(e, ...t) {
  return new ue(e, t)
}
d()
u()
c()
p()
m()
d()
u()
c()
p()
m()
function jt(e) {
  return {
    getKeys() {
      return Object.keys(e)
    },
    getPropertyValue(t) {
      return e[t]
    },
  }
}
d()
u()
c()
p()
m()
function re(e, t) {
  return {
    getKeys() {
      return [e]
    },
    getPropertyValue() {
      return t()
    },
  }
}
d()
u()
c()
p()
m()
function $e(e) {
  let t = new we()
  return {
    getKeys() {
      return e.getKeys()
    },
    getPropertyValue(r) {
      return t.getOrCreate(r, () => e.getPropertyValue(r))
    },
    getPropertyDescriptor(r) {
      return e.getPropertyDescriptor?.(r)
    },
  }
}
d()
u()
c()
p()
m()
d()
u()
c()
p()
m()
var $r = { enumerable: !0, configurable: !0, writable: !0 }
function Vr(e) {
  let t = new Set(e)
  return {
    getPrototypeOf: () => Object.prototype,
    getOwnPropertyDescriptor: () => $r,
    has: (r, n) => t.has(n),
    set: (r, n, i) => t.add(n) && Reflect.set(r, n, i),
    ownKeys: () => [...t],
  }
}
var ts = Symbol.for('nodejs.util.inspect.custom')
function de(e, t) {
  let r = Ec(t),
    n = new Set(),
    i = new Proxy(e, {
      get(o, s) {
        if (n.has(s)) return o[s]
        let a = r.get(s)
        return a ? a.getPropertyValue(s) : o[s]
      },
      has(o, s) {
        if (n.has(s)) return !0
        let a = r.get(s)
        return a ? (a.has?.(s) ?? !0) : Reflect.has(o, s)
      },
      ownKeys(o) {
        let s = rs(Reflect.ownKeys(o), r),
          a = rs(Array.from(r.keys()), r)
        return [...new Set([...s, ...a, ...n])]
      },
      set(o, s, a) {
        return r.get(s)?.getPropertyDescriptor?.(s)?.writable === !1
          ? !1
          : (n.add(s), Reflect.set(o, s, a))
      },
      getOwnPropertyDescriptor(o, s) {
        let a = Reflect.getOwnPropertyDescriptor(o, s)
        if (a && !a.configurable) return a
        let l = r.get(s)
        return l
          ? l.getPropertyDescriptor
            ? { ...$r, ...l?.getPropertyDescriptor(s) }
            : $r
          : a
      },
      defineProperty(o, s, a) {
        return n.add(s), Reflect.defineProperty(o, s, a)
      },
      getPrototypeOf: () => Object.prototype,
    })
  return (
    (i[ts] = function () {
      let o = { ...this }
      return delete o[ts], o
    }),
    i
  )
}
function Ec(e) {
  let t = new Map()
  for (let r of e) {
    let n = r.getKeys()
    for (let i of n) t.set(i, r)
  }
  return t
}
function rs(e, t) {
  return e.filter(r => t.get(r)?.has?.(r) ?? !0)
}
d()
u()
c()
p()
m()
function dt(e) {
  return {
    getKeys() {
      return e
    },
    has() {
      return !1
    },
    getPropertyValue() {},
  }
}
d()
u()
c()
p()
m()
function jr(e, t) {
  return {
    batch: e,
    transaction:
      t?.kind === 'batch'
        ? { isolationLevel: t.options.isolationLevel }
        : void 0,
  }
}
d()
u()
c()
p()
m()
function ns(e) {
  if (e === void 0) return ''
  let t = pt(e)
  return new st(0, { colors: Or }).write(t).toString()
}
d()
u()
c()
p()
m()
var bc = 'P2037'
function Gr({ error: e, user_facing_error: t }, r, n) {
  return t.error_code
    ? new se(xc(t, n), {
        code: t.error_code,
        clientVersion: r,
        meta: t.meta,
        batchRequestIdx: t.batch_request_idx,
      })
    : new ae(e, { clientVersion: r, batchRequestIdx: t.batch_request_idx })
}
function xc(e, t) {
  let r = e.message
  return (
    (t === 'postgresql' || t === 'postgres' || t === 'mysql') &&
      e.error_code === bc &&
      (r += `
Prisma Accelerate has built-in connection pooling to prevent such errors: https://pris.ly/client/error-accelerate`),
    r
  )
}
d()
u()
c()
p()
m()
d()
u()
c()
p()
m()
d()
u()
c()
p()
m()
d()
u()
c()
p()
m()
d()
u()
c()
p()
m()
var Un = class {
  getLocation() {
    return null
  }
}
function _e(e) {
  return typeof $EnabledCallSite == 'function' && e !== 'minimal'
    ? new $EnabledCallSite()
    : new Un()
}
d()
u()
c()
p()
m()
d()
u()
c()
p()
m()
d()
u()
c()
p()
m()
var is = { _avg: !0, _count: !0, _sum: !0, _min: !0, _max: !0 }
function ft(e = {}) {
  let t = vc(e)
  return Object.entries(t).reduce(
    (n, [i, o]) => (
      is[i] !== void 0 ? (n.select[i] = { select: o }) : (n[i] = o), n
    ),
    { select: {} },
  )
}
function vc(e = {}) {
  return typeof e._count == 'boolean' ? { ...e, _count: { _all: e._count } } : e
}
function Jr(e = {}) {
  return t => (typeof e._count == 'boolean' && (t._count = t._count._all), t)
}
function os(e, t) {
  let r = Jr(e)
  return t({ action: 'aggregate', unpacker: r, argsMapper: ft })(e)
}
d()
u()
c()
p()
m()
function Tc(e = {}) {
  let { select: t, ...r } = e
  return typeof t == 'object'
    ? ft({ ...r, _count: t })
    : ft({ ...r, _count: { _all: !0 } })
}
function Cc(e = {}) {
  return typeof e.select == 'object'
    ? t => Jr(e)(t)._count
    : t => Jr(e)(t)._count._all
}
function ss(e, t) {
  return t({ action: 'count', unpacker: Cc(e), argsMapper: Tc })(e)
}
d()
u()
c()
p()
m()
function Ac(e = {}) {
  let t = ft(e)
  if (Array.isArray(t.by))
    for (let r of t.by) typeof r == 'string' && (t.select[r] = !0)
  else typeof t.by == 'string' && (t.select[t.by] = !0)
  return t
}
function Rc(e = {}) {
  return t => (
    typeof e?._count == 'boolean' &&
      t.forEach(r => {
        r._count = r._count._all
      }),
    t
  )
}
function as(e, t) {
  return t({ action: 'groupBy', unpacker: Rc(e), argsMapper: Ac })(e)
}
function ls(e, t, r) {
  if (t === 'aggregate') return n => os(n, r)
  if (t === 'count') return n => ss(n, r)
  if (t === 'groupBy') return n => as(n, r)
}
d()
u()
c()
p()
m()
function us(e, t) {
  let r = t.fields.filter(i => !i.relationName),
    n = xn(r, i => i.name)
  return new Proxy(
    {},
    {
      get(i, o) {
        if (o in i || typeof o == 'symbol') return i[o]
        let s = n[o]
        if (s) return new Mt(e, o, s.type, s.isList, s.kind === 'enum')
      },
      ...Vr(Object.keys(n)),
    },
  )
}
d()
u()
c()
p()
m()
d()
u()
c()
p()
m()
var cs = e => (Array.isArray(e) ? e : e.split('.')),
  $n = (e, t) => cs(t).reduce((r, n) => r && r[n], e),
  ps = (e, t, r) =>
    cs(t).reduceRight(
      (n, i, o, s) => Object.assign({}, $n(e, s.slice(0, o)), { [i]: n }),
      r,
    )
function Sc(e, t) {
  return e === void 0 || t === void 0 ? [] : [...t, 'select', e]
}
function kc(e, t, r) {
  return t === void 0 ? (e ?? {}) : ps(t, r, e || !0)
}
function Vn(e, t, r, n, i, o) {
  let a = e._runtimeDataModel.models[t].fields.reduce(
    (l, f) => ({ ...l, [f.name]: f }),
    {},
  )
  return l => {
    let f = _e(e._errorFormat),
      g = Sc(n, i),
      h = kc(l, o, g),
      T = r({ dataPath: g, callsite: f })(h),
      k = Ic(e, t)
    return new Proxy(T, {
      get(R, S) {
        if (!k.includes(S)) return R[S]
        let N = [a[S].type, r, S],
          U = [g, h]
        return Vn(e, ...N, ...U)
      },
      ...Vr([...k, ...Object.getOwnPropertyNames(T)]),
    })
  }
}
function Ic(e, t) {
  return e._runtimeDataModel.models[t].fields
    .filter(r => r.kind === 'object')
    .map(r => r.name)
}
var Oc = [
    'findUnique',
    'findUniqueOrThrow',
    'findFirst',
    'findFirstOrThrow',
    'create',
    'update',
    'upsert',
    'delete',
  ],
  Dc = ['aggregate', 'count', 'groupBy']
function jn(e, t) {
  let r = e._extensions.getAllModelExtensions(t) ?? {},
    n = [
      Mc(e, t),
      _c(e, t),
      jt(r),
      re('name', () => t),
      re('$name', () => t),
      re('$parent', () => e._appliedParent),
    ]
  return de({}, n)
}
function Mc(e, t) {
  let r = Ee(t),
    n = Object.keys(gr.ModelAction).concat('count')
  return {
    getKeys() {
      return n
    },
    getPropertyValue(i) {
      let o = i,
        s = a => l => {
          let f = _e(e._errorFormat)
          return e._createPrismaPromise(
            g => {
              let h = {
                args: l,
                dataPath: [],
                action: o,
                model: t,
                clientMethod: `${r}.${i}`,
                jsModelName: r,
                transaction: g,
                callsite: f,
              }
              return e._request({ ...h, ...a })
            },
            { action: o, args: l, model: t },
          )
        }
      return Oc.includes(o) ? Vn(e, t, s) : Nc(i) ? ls(e, i, s) : s({})
    },
  }
}
function Nc(e) {
  return Dc.includes(e)
}
function _c(e, t) {
  return $e(
    re('fields', () => {
      let r = e._runtimeDataModel.models[t]
      return us(t, r)
    }),
  )
}
d()
u()
c()
p()
m()
function ms(e) {
  return e.replace(/^./, t => t.toUpperCase())
}
var Gn = Symbol()
function Gt(e) {
  let t = [
      Fc(e),
      Lc(e),
      re(Gn, () => e),
      re('$parent', () => e._appliedParent),
    ],
    r = e._extensions.getAllClientExtensions()
  return r && t.push(jt(r)), de(e, t)
}
function Fc(e) {
  let t = Object.getPrototypeOf(e._originalClient),
    r = [...new Set(Object.getOwnPropertyNames(t))]
  return {
    getKeys() {
      return r
    },
    getPropertyValue(n) {
      return e[n]
    },
  }
}
function Lc(e) {
  let t = Object.keys(e._runtimeDataModel.models),
    r = t.map(Ee),
    n = [...new Set(t.concat(r))]
  return $e({
    getKeys() {
      return n
    },
    getPropertyValue(i) {
      let o = ms(i)
      if (e._runtimeDataModel.models[o] !== void 0) return jn(e, o)
      if (e._runtimeDataModel.models[i] !== void 0) return jn(e, i)
    },
    getPropertyDescriptor(i) {
      if (!r.includes(i)) return { enumerable: !1 }
    },
  })
}
function ds(e) {
  return e[Gn] ? e[Gn] : e
}
function fs(e) {
  if (typeof e == 'function') return e(this)
  if (e.client?.__AccelerateEngine) {
    let r = e.client.__AccelerateEngine
    this._originalClient._engine = new r(
      this._originalClient._accelerateEngineConfig,
    )
  }
  let t = Object.create(this._originalClient, {
    _extensions: { value: this._extensions.append(e) },
    _appliedParent: { value: this, configurable: !0 },
    $use: { value: void 0 },
    $on: { value: void 0 },
  })
  return Gt(t)
}
d()
u()
c()
p()
m()
d()
u()
c()
p()
m()
function gs({ result: e, modelName: t, select: r, omit: n, extensions: i }) {
  let o = i.getAllComputedFields(t)
  if (!o) return e
  let s = [],
    a = []
  for (let l of Object.values(o)) {
    if (n) {
      if (n[l.name]) continue
      let f = l.needs.filter(g => n[g])
      f.length > 0 && a.push(dt(f))
    } else if (r) {
      if (!r[l.name]) continue
      let f = l.needs.filter(g => !r[g])
      f.length > 0 && a.push(dt(f))
    }
    Bc(e, l.needs) && s.push(qc(l, de(e, s)))
  }
  return s.length > 0 || a.length > 0 ? de(e, [...s, ...a]) : e
}
function Bc(e, t) {
  return t.every(r => bn(e, r))
}
function qc(e, t) {
  return $e(re(e.name, () => e.compute(t)))
}
d()
u()
c()
p()
m()
function Qr({
  visitor: e,
  result: t,
  args: r,
  runtimeDataModel: n,
  modelName: i,
}) {
  if (Array.isArray(t)) {
    for (let s = 0; s < t.length; s++)
      t[s] = Qr({
        result: t[s],
        args: r,
        modelName: i,
        runtimeDataModel: n,
        visitor: e,
      })
    return t
  }
  let o = e(t, i, r) ?? t
  return (
    r.include &&
      hs({
        includeOrSelect: r.include,
        result: o,
        parentModelName: i,
        runtimeDataModel: n,
        visitor: e,
      }),
    r.select &&
      hs({
        includeOrSelect: r.select,
        result: o,
        parentModelName: i,
        runtimeDataModel: n,
        visitor: e,
      }),
    o
  )
}
function hs({
  includeOrSelect: e,
  result: t,
  parentModelName: r,
  runtimeDataModel: n,
  visitor: i,
}) {
  for (let [o, s] of Object.entries(e)) {
    if (!s || t[o] == null || be(s)) continue
    let l = n.models[r].fields.find(g => g.name === o)
    if (!l || l.kind !== 'object' || !l.relationName) continue
    let f = typeof s == 'object' ? s : {}
    t[o] = Qr({
      visitor: i,
      result: t[o],
      args: f,
      modelName: l.type,
      runtimeDataModel: n,
    })
  }
}
function ys({
  result: e,
  modelName: t,
  args: r,
  extensions: n,
  runtimeDataModel: i,
  globalOmit: o,
}) {
  return n.isEmpty() || e == null || typeof e != 'object' || !i.models[t]
    ? e
    : Qr({
        result: e,
        args: r ?? {},
        modelName: t,
        runtimeDataModel: i,
        visitor: (a, l, f) => {
          let g = Ee(l)
          return gs({
            result: a,
            modelName: g,
            select: f.select,
            omit: f.select ? void 0 : { ...o?.[g], ...f.omit },
            extensions: n,
          })
        },
      })
}
d()
u()
c()
p()
m()
d()
u()
c()
p()
m()
d()
u()
c()
p()
m()
var Uc = ['$connect', '$disconnect', '$on', '$transaction', '$use', '$extends'],
  ws = Uc
function Es(e) {
  if (e instanceof ue) return $c(e)
  if (Ur(e)) return Vc(e)
  if (Array.isArray(e)) {
    let r = [e[0]]
    for (let n = 1; n < e.length; n++) r[n] = Jt(e[n])
    return r
  }
  let t = {}
  for (let r in e) t[r] = Jt(e[r])
  return t
}
function $c(e) {
  return new ue(e.strings, e.values)
}
function Vc(e) {
  return new Vt(e.sql, e.values)
}
function Jt(e) {
  if (typeof e != 'object' || e == null || e instanceof Ce || ct(e)) return e
  if (ot(e)) return new Te(e.toFixed())
  if (it(e)) return new Date(+e)
  if (ArrayBuffer.isView(e)) return e.slice(0)
  if (Array.isArray(e)) {
    let t = e.length,
      r
    for (r = Array(t); t--; ) r[t] = Jt(e[t])
    return r
  }
  if (typeof e == 'object') {
    let t = {}
    for (let r in e)
      r === '__proto__'
        ? Object.defineProperty(t, r, {
            value: Jt(e[r]),
            configurable: !0,
            enumerable: !0,
            writable: !0,
          })
        : (t[r] = Jt(e[r]))
    return t
  }
  Pe(e, 'Unknown value')
}
function xs(e, t, r, n = 0) {
  return e._createPrismaPromise(i => {
    let o = t.customDataProxyFetch
    return (
      'transaction' in t &&
        i !== void 0 &&
        (t.transaction?.kind === 'batch' && t.transaction.lock.then(),
        (t.transaction = i)),
      n === r.length
        ? e._executeRequest(t)
        : r[n]({
            model: t.model,
            operation: t.model ? t.action : t.clientMethod,
            args: Es(t.args ?? {}),
            __internalParams: t,
            query: (s, a = t) => {
              let l = a.customDataProxyFetch
              return (
                (a.customDataProxyFetch = Cs(o, l)),
                (a.args = s),
                xs(e, a, r, n + 1)
              )
            },
          })
    )
  })
}
function Ps(e, t) {
  let { jsModelName: r, action: n, clientMethod: i } = t,
    o = r ? n : i
  if (e._extensions.isEmpty()) return e._executeRequest(t)
  let s = e._extensions.getAllQueryCallbacks(r ?? '$none', o)
  return xs(e, t, s)
}
function vs(e) {
  return t => {
    let r = { requests: t },
      n = t[0].extensions.getAllBatchQueryCallbacks()
    return n.length ? Ts(r, n, 0, e) : e(r)
  }
}
function Ts(e, t, r, n) {
  if (r === t.length) return n(e)
  let i = e.customDataProxyFetch,
    o = e.requests[0].transaction
  return t[r]({
    args: {
      queries: e.requests.map(s => ({
        model: s.modelName,
        operation: s.action,
        args: s.args,
      })),
      transaction: o
        ? { isolationLevel: o.kind === 'batch' ? o.isolationLevel : void 0 }
        : void 0,
    },
    __internalParams: e,
    query(s, a = e) {
      let l = a.customDataProxyFetch
      return (a.customDataProxyFetch = Cs(i, l)), Ts(a, t, r + 1, n)
    },
  })
}
var bs = e => e
function Cs(e = bs, t = bs) {
  return r => e(t(r))
}
d()
u()
c()
p()
m()
var As = ee('prisma:client'),
  Rs = { Vercel: 'vercel', 'Netlify CI': 'netlify' }
function Ss({ postinstall: e, ciName: t, clientVersion: r }) {
  if (
    (As('checkPlatformCaching:postinstall', e),
    As('checkPlatformCaching:ciName', t),
    e === !0 && t && t in Rs)
  ) {
    let n = `Prisma has detected that this project was built on ${t}, which caches dependencies. This leads to an outdated Prisma Client because Prisma's auto-generation isn't triggered. To fix this, make sure to run the \`prisma generate\` command during the build process.

Learn how: https://pris.ly/d/${Rs[t]}-build`
    throw (console.error(n), new W(n, r))
  }
}
d()
u()
c()
p()
m()
function ks(e, t) {
  return e
    ? e.datasources
      ? e.datasources
      : e.datasourceUrl
        ? { [t[0]]: { url: e.datasourceUrl } }
        : {}
    : {}
}
d()
u()
c()
p()
m()
d()
u()
c()
p()
m()
var jc = () => globalThis.process?.release?.name === 'node',
  Gc = () => !!globalThis.Bun || !!globalThis.process?.versions?.bun,
  Jc = () => !!globalThis.Deno,
  Qc = () => typeof globalThis.Netlify == 'object',
  Wc = () => typeof globalThis.EdgeRuntime == 'object',
  Hc = () => globalThis.navigator?.userAgent === 'Cloudflare-Workers'
function Kc() {
  return (
    [
      [Qc, 'netlify'],
      [Wc, 'edge-light'],
      [Hc, 'workerd'],
      [Jc, 'deno'],
      [Gc, 'bun'],
      [jc, 'node'],
    ]
      .flatMap(r => (r[0]() ? [r[1]] : []))
      .at(0) ?? ''
  )
}
var zc = {
  node: 'Node.js',
  workerd: 'Cloudflare Workers',
  deno: 'Deno and Deno Deploy',
  netlify: 'Netlify Edge Functions',
  'edge-light':
    'Edge Runtime (Vercel Edge Functions, Vercel Edge Middleware, Next.js (Pages Router) Edge API Routes, Next.js (App Router) Edge Route Handlers or Next.js Middleware)',
}
function Jn() {
  let e = Kc()
  return {
    id: e,
    prettyName: zc[e] || e,
    isEdge: ['workerd', 'deno', 'netlify', 'edge-light'].includes(e),
  }
}
d()
u()
c()
p()
m()
d()
u()
c()
p()
m()
d()
u()
c()
p()
m()
function gt({
  inlineDatasources: e,
  overrideDatasources: t,
  env: r,
  clientVersion: n,
}) {
  let i,
    o = Object.keys(e)[0],
    s = e[o]?.url,
    a = t[o]?.url
  if (
    (o === void 0
      ? (i = void 0)
      : a
        ? (i = a)
        : s?.value
          ? (i = s.value)
          : s?.fromEnvVar && (i = r[s.fromEnvVar]),
    s?.fromEnvVar !== void 0 && i === void 0)
  )
    throw Jn().id === 'workerd'
      ? new W(
          `error: Environment variable not found: ${s.fromEnvVar}.

In Cloudflare module Workers, environment variables are available only in the Worker's \`env\` parameter of \`fetch\`.
To solve this, provide the connection string directly: https://pris.ly/d/cloudflare-datasource-url`,
          n,
        )
      : new W(`error: Environment variable not found: ${s.fromEnvVar}.`, n)
  if (i === void 0)
    throw new W(
      'error: Missing URL environment variable, value, or override.',
      n,
    )
  return i
}
d()
u()
c()
p()
m()
d()
u()
c()
p()
m()
var Wr = class extends Error {
  constructor(r, n) {
    super(r)
    w(this, 'clientVersion')
    w(this, 'cause')
    ;(this.clientVersion = n.clientVersion), (this.cause = n.cause)
  }
  get [Symbol.toStringTag]() {
    return this.name
  }
}
var oe = class extends Wr {
  constructor(r, n) {
    super(r, n)
    w(this, 'isRetryable')
    this.isRetryable = n.isRetryable ?? !0
  }
}
d()
u()
c()
p()
m()
d()
u()
c()
p()
m()
function q(e, t) {
  return { ...e, isRetryable: t }
}
var ht = class extends oe {
  constructor(r) {
    super('This request must be retried', q(r, !0))
    w(this, 'name', 'ForcedRetryError')
    w(this, 'code', 'P5001')
  }
}
F(ht, 'ForcedRetryError')
d()
u()
c()
p()
m()
var Ve = class extends oe {
  constructor(r, n) {
    super(r, q(n, !1))
    w(this, 'name', 'InvalidDatasourceError')
    w(this, 'code', 'P6001')
  }
}
F(Ve, 'InvalidDatasourceError')
d()
u()
c()
p()
m()
var je = class extends oe {
  constructor(r, n) {
    super(r, q(n, !1))
    w(this, 'name', 'NotImplementedYetError')
    w(this, 'code', 'P5004')
  }
}
F(je, 'NotImplementedYetError')
d()
u()
c()
p()
m()
d()
u()
c()
p()
m()
var J = class extends oe {
  constructor(r, n) {
    super(r, n)
    w(this, 'response')
    this.response = n.response
    let i = this.response.headers.get('prisma-request-id')
    if (i) {
      let o = `(The request id was: ${i})`
      this.message = this.message + ' ' + o
    }
  }
}
var Ge = class extends J {
  constructor(r) {
    super('Schema needs to be uploaded', q(r, !0))
    w(this, 'name', 'SchemaMissingError')
    w(this, 'code', 'P5005')
  }
}
F(Ge, 'SchemaMissingError')
d()
u()
c()
p()
m()
d()
u()
c()
p()
m()
var Qn = 'This request could not be understood by the server',
  Qt = class extends J {
    constructor(r, n, i) {
      super(n || Qn, q(r, !1))
      w(this, 'name', 'BadRequestError')
      w(this, 'code', 'P5000')
      i && (this.code = i)
    }
  }
F(Qt, 'BadRequestError')
d()
u()
c()
p()
m()
var Wt = class extends J {
  constructor(r, n) {
    super('Engine not started: healthcheck timeout', q(r, !0))
    w(this, 'name', 'HealthcheckTimeoutError')
    w(this, 'code', 'P5013')
    w(this, 'logs')
    this.logs = n
  }
}
F(Wt, 'HealthcheckTimeoutError')
d()
u()
c()
p()
m()
var Ht = class extends J {
  constructor(r, n, i) {
    super(n, q(r, !0))
    w(this, 'name', 'EngineStartupError')
    w(this, 'code', 'P5014')
    w(this, 'logs')
    this.logs = i
  }
}
F(Ht, 'EngineStartupError')
d()
u()
c()
p()
m()
var Kt = class extends J {
  constructor(r) {
    super('Engine version is not supported', q(r, !1))
    w(this, 'name', 'EngineVersionNotSupportedError')
    w(this, 'code', 'P5012')
  }
}
F(Kt, 'EngineVersionNotSupportedError')
d()
u()
c()
p()
m()
var Wn = 'Request timed out',
  zt = class extends J {
    constructor(r, n = Wn) {
      super(n, q(r, !1))
      w(this, 'name', 'GatewayTimeoutError')
      w(this, 'code', 'P5009')
    }
  }
F(zt, 'GatewayTimeoutError')
d()
u()
c()
p()
m()
var Yc = 'Interactive transaction error',
  Yt = class extends J {
    constructor(r, n = Yc) {
      super(n, q(r, !1))
      w(this, 'name', 'InteractiveTransactionError')
      w(this, 'code', 'P5015')
    }
  }
F(Yt, 'InteractiveTransactionError')
d()
u()
c()
p()
m()
var Zc = 'Request parameters are invalid',
  Zt = class extends J {
    constructor(r, n = Zc) {
      super(n, q(r, !1))
      w(this, 'name', 'InvalidRequestError')
      w(this, 'code', 'P5011')
    }
  }
F(Zt, 'InvalidRequestError')
d()
u()
c()
p()
m()
var Hn = 'Requested resource does not exist',
  Xt = class extends J {
    constructor(r, n = Hn) {
      super(n, q(r, !1))
      w(this, 'name', 'NotFoundError')
      w(this, 'code', 'P5003')
    }
  }
F(Xt, 'NotFoundError')
d()
u()
c()
p()
m()
var Kn = 'Unknown server error',
  yt = class extends J {
    constructor(r, n, i) {
      super(n || Kn, q(r, !0))
      w(this, 'name', 'ServerError')
      w(this, 'code', 'P5006')
      w(this, 'logs')
      this.logs = i
    }
  }
F(yt, 'ServerError')
d()
u()
c()
p()
m()
var zn = 'Unauthorized, check your connection string',
  er = class extends J {
    constructor(r, n = zn) {
      super(n, q(r, !1))
      w(this, 'name', 'UnauthorizedError')
      w(this, 'code', 'P5007')
    }
  }
F(er, 'UnauthorizedError')
d()
u()
c()
p()
m()
var Yn = 'Usage exceeded, retry again later',
  tr = class extends J {
    constructor(r, n = Yn) {
      super(n, q(r, !0))
      w(this, 'name', 'UsageExceededError')
      w(this, 'code', 'P5008')
    }
  }
F(tr, 'UsageExceededError')
async function Xc(e) {
  let t
  try {
    t = await e.text()
  } catch {
    return { type: 'EmptyError' }
  }
  try {
    let r = JSON.parse(t)
    if (typeof r == 'string')
      switch (r) {
        case 'InternalDataProxyError':
          return { type: 'DataProxyError', body: r }
        default:
          return { type: 'UnknownTextError', body: r }
      }
    if (typeof r == 'object' && r !== null) {
      if ('is_panic' in r && 'message' in r && 'error_code' in r)
        return { type: 'QueryEngineError', body: r }
      if (
        'EngineNotStarted' in r ||
        'InteractiveTransactionMisrouted' in r ||
        'InvalidRequestError' in r
      ) {
        let n = Object.values(r)[0].reason
        return typeof n == 'string' &&
          !['SchemaMissing', 'EngineVersionNotSupported'].includes(n)
          ? { type: 'UnknownJsonError', body: r }
          : { type: 'DataProxyError', body: r }
      }
    }
    return { type: 'UnknownJsonError', body: r }
  } catch {
    return t === ''
      ? { type: 'EmptyError' }
      : { type: 'UnknownTextError', body: t }
  }
}
async function rr(e, t) {
  if (e.ok) return
  let r = { clientVersion: t, response: e },
    n = await Xc(e)
  if (n.type === 'QueryEngineError')
    throw new se(n.body.message, { code: n.body.error_code, clientVersion: t })
  if (n.type === 'DataProxyError') {
    if (n.body === 'InternalDataProxyError')
      throw new yt(r, 'Internal Data Proxy error')
    if ('EngineNotStarted' in n.body) {
      if (n.body.EngineNotStarted.reason === 'SchemaMissing') return new Ge(r)
      if (n.body.EngineNotStarted.reason === 'EngineVersionNotSupported')
        throw new Kt(r)
      if ('EngineStartupError' in n.body.EngineNotStarted.reason) {
        let { msg: i, logs: o } =
          n.body.EngineNotStarted.reason.EngineStartupError
        throw new Ht(r, i, o)
      }
      if ('KnownEngineStartupError' in n.body.EngineNotStarted.reason) {
        let { msg: i, error_code: o } =
          n.body.EngineNotStarted.reason.KnownEngineStartupError
        throw new W(i, t, o)
      }
      if ('HealthcheckTimeout' in n.body.EngineNotStarted.reason) {
        let { logs: i } = n.body.EngineNotStarted.reason.HealthcheckTimeout
        throw new Wt(r, i)
      }
    }
    if ('InteractiveTransactionMisrouted' in n.body) {
      let i = {
        IDParseError: 'Could not parse interactive transaction ID',
        NoQueryEngineFoundError:
          'Could not find Query Engine for the specified host and transaction ID',
        TransactionStartError: 'Could not start interactive transaction',
      }
      throw new Yt(r, i[n.body.InteractiveTransactionMisrouted.reason])
    }
    if ('InvalidRequestError' in n.body)
      throw new Zt(r, n.body.InvalidRequestError.reason)
  }
  if (e.status === 401 || e.status === 403) throw new er(r, wt(zn, n))
  if (e.status === 404) return new Xt(r, wt(Hn, n))
  if (e.status === 429) throw new tr(r, wt(Yn, n))
  if (e.status === 504) throw new zt(r, wt(Wn, n))
  if (e.status >= 500) throw new yt(r, wt(Kn, n))
  if (e.status >= 400) throw new Qt(r, wt(Qn, n))
}
function wt(e, t) {
  return t.type === 'EmptyError' ? e : `${e}: ${JSON.stringify(t)}`
}
d()
u()
c()
p()
m()
function Is(e) {
  let t = Math.pow(2, e) * 50,
    r = Math.ceil(Math.random() * t) - Math.ceil(t / 2),
    n = t + r
  return new Promise(i => setTimeout(() => i(n), n))
}
d()
u()
c()
p()
m()
var Ae = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
function Os(e) {
  let t = new TextEncoder().encode(e),
    r = '',
    n = t.byteLength,
    i = n % 3,
    o = n - i,
    s,
    a,
    l,
    f,
    g
  for (let h = 0; h < o; h = h + 3)
    (g = (t[h] << 16) | (t[h + 1] << 8) | t[h + 2]),
      (s = (g & 16515072) >> 18),
      (a = (g & 258048) >> 12),
      (l = (g & 4032) >> 6),
      (f = g & 63),
      (r += Ae[s] + Ae[a] + Ae[l] + Ae[f])
  return (
    i == 1
      ? ((g = t[o]),
        (s = (g & 252) >> 2),
        (a = (g & 3) << 4),
        (r += Ae[s] + Ae[a] + '=='))
      : i == 2 &&
        ((g = (t[o] << 8) | t[o + 1]),
        (s = (g & 64512) >> 10),
        (a = (g & 1008) >> 4),
        (l = (g & 15) << 2),
        (r += Ae[s] + Ae[a] + Ae[l] + '=')),
    r
  )
}
d()
u()
c()
p()
m()
function Ds(e) {
  if (
    !!e.generator?.previewFeatures.some(r =>
      r.toLowerCase().includes('metrics'),
    )
  )
    throw new W(
      'The `metrics` preview feature is not yet available with Accelerate.\nPlease remove `metrics` from the `previewFeatures` in your schema.\n\nMore information about Accelerate: https://pris.ly/d/accelerate',
      e.clientVersion,
    )
}
d()
u()
c()
p()
m()
function ep(e) {
  return e[0] * 1e3 + e[1] / 1e6
}
function Zn(e) {
  return new Date(ep(e))
}
d()
u()
c()
p()
m()
var Ms = {
  '@prisma/debug': 'workspace:*',
  '@prisma/engines-version':
    '6.5.0-73.173f8d54f8d52e692c7e27e72a88314ec7aeff60',
  '@prisma/fetch-engine': 'workspace:*',
  '@prisma/get-platform': 'workspace:*',
}
d()
u()
c()
p()
m()
d()
u()
c()
p()
m()
var nr = class extends oe {
  constructor(r, n) {
    super(
      `Cannot fetch data from service:
${r}`,
      q(n, !0),
    )
    w(this, 'name', 'RequestError')
    w(this, 'code', 'P5010')
  }
}
F(nr, 'RequestError')
async function Je(e, t, r = n => n) {
  let { clientVersion: n, ...i } = t,
    o = r(fetch)
  try {
    return await o(e, i)
  } catch (s) {
    let a = s.message ?? 'Unknown error'
    throw new nr(a, { clientVersion: n, cause: s })
  }
}
var rp = /^[1-9][0-9]*\.[0-9]+\.[0-9]+$/,
  Ns = ee('prisma:client:dataproxyEngine')
async function np(e, t) {
  let r = Ms['@prisma/engines-version'],
    n = t.clientVersion ?? 'unknown'
  if (y.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION)
    return y.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION
  if (e.includes('accelerate') && n !== '0.0.0' && n !== 'in-memory') return n
  let [i, o] = n?.split('-') ?? []
  if (o === void 0 && rp.test(i)) return i
  if (o !== void 0 || n === '0.0.0' || n === 'in-memory') {
    if (e.startsWith('localhost') || e.startsWith('127.0.0.1')) return '0.0.0'
    let [s] = r.split('-') ?? [],
      [a, l, f] = s.split('.'),
      g = ip(`<=${a}.${l}.${f}`),
      h = await Je(g, { clientVersion: n })
    if (!h.ok)
      throw new Error(
        `Failed to fetch stable Prisma version, unpkg.com status ${h.status} ${h.statusText}, response body: ${(await h.text()) || '<empty body>'}`,
      )
    let T = await h.text()
    Ns('length of body fetched from unpkg.com', T.length)
    let k
    try {
      k = JSON.parse(T)
    } catch (R) {
      throw (
        (console.error('JSON.parse error: body fetched from unpkg.com: ', T), R)
      )
    }
    return k.version
  }
  throw new je(
    'Only `major.minor.patch` versions are supported by Accelerate.',
    { clientVersion: n },
  )
}
async function _s(e, t) {
  let r = await np(e, t)
  return Ns('version', r), r
}
function ip(e) {
  return encodeURI(`https://unpkg.com/prisma@${e}/package.json`)
}
var Fs = 3,
  Hr = ee('prisma:client:dataproxyEngine'),
  Xn = class {
    constructor({
      apiKey: t,
      tracingHelper: r,
      logLevel: n,
      logQueries: i,
      engineHash: o,
    }) {
      w(this, 'apiKey')
      w(this, 'tracingHelper')
      w(this, 'logLevel')
      w(this, 'logQueries')
      w(this, 'engineHash')
      ;(this.apiKey = t),
        (this.tracingHelper = r),
        (this.logLevel = n),
        (this.logQueries = i),
        (this.engineHash = o)
    }
    build({ traceparent: t, interactiveTransaction: r } = {}) {
      let n = {
        Authorization: `Bearer ${this.apiKey}`,
        'Prisma-Engine-Hash': this.engineHash,
      }
      this.tracingHelper.isEnabled() &&
        (n.traceparent = t ?? this.tracingHelper.getTraceParent()),
        r && (n['X-transaction-id'] = r.id)
      let i = this.buildCaptureSettings()
      return i.length > 0 && (n['X-capture-telemetry'] = i.join(', ')), n
    }
    buildCaptureSettings() {
      let t = []
      return (
        this.tracingHelper.isEnabled() && t.push('tracing'),
        this.logLevel && t.push(this.logLevel),
        this.logQueries && t.push('query'),
        t
      )
    }
  },
  Et = class {
    constructor(t) {
      w(this, 'name', 'DataProxyEngine')
      w(this, 'inlineSchema')
      w(this, 'inlineSchemaHash')
      w(this, 'inlineDatasources')
      w(this, 'config')
      w(this, 'logEmitter')
      w(this, 'env')
      w(this, 'clientVersion')
      w(this, 'engineHash')
      w(this, 'tracingHelper')
      w(this, 'remoteClientVersion')
      w(this, 'host')
      w(this, 'headerBuilder')
      w(this, 'startPromise')
      Ds(t),
        (this.config = t),
        (this.env = { ...t.env, ...(typeof y < 'u' ? y.env : {}) }),
        (this.inlineSchema = Os(t.inlineSchema)),
        (this.inlineDatasources = t.inlineDatasources),
        (this.inlineSchemaHash = t.inlineSchemaHash),
        (this.clientVersion = t.clientVersion),
        (this.engineHash = t.engineVersion),
        (this.logEmitter = t.logEmitter),
        (this.tracingHelper = t.tracingHelper)
    }
    apiKey() {
      return this.headerBuilder.apiKey
    }
    version() {
      return this.engineHash
    }
    async start() {
      this.startPromise !== void 0 && (await this.startPromise),
        (this.startPromise = (async () => {
          let [t, r] = this.extractHostAndApiKey()
          ;(this.host = t),
            (this.headerBuilder = new Xn({
              apiKey: r,
              tracingHelper: this.tracingHelper,
              logLevel: this.config.logLevel,
              logQueries: this.config.logQueries,
              engineHash: this.engineHash,
            })),
            (this.remoteClientVersion = await _s(t, this.config)),
            Hr('host', this.host)
        })()),
        await this.startPromise
    }
    async stop() {}
    propagateResponseExtensions(t) {
      t?.logs?.length &&
        t.logs.forEach(r => {
          switch (r.level) {
            case 'debug':
            case 'trace':
              Hr(r)
              break
            case 'error':
            case 'warn':
            case 'info': {
              this.logEmitter.emit(r.level, {
                timestamp: Zn(r.timestamp),
                message: r.attributes.message ?? '',
                target: r.target,
              })
              break
            }
            case 'query': {
              this.logEmitter.emit('query', {
                query: r.attributes.query ?? '',
                timestamp: Zn(r.timestamp),
                duration: r.attributes.duration_ms ?? 0,
                params: r.attributes.params ?? '',
                target: r.target,
              })
              break
            }
            default:
              r.level
          }
        }),
        t?.traces?.length && this.tracingHelper.dispatchEngineSpans(t.traces)
    }
    onBeforeExit() {
      throw new Error(
        '"beforeExit" hook is not applicable to the remote query engine',
      )
    }
    async url(t) {
      return (
        await this.start(),
        `https://${this.host}/${this.remoteClientVersion}/${this.inlineSchemaHash}/${t}`
      )
    }
    async uploadSchema() {
      let t = { name: 'schemaUpload', internal: !0 }
      return this.tracingHelper.runInChildSpan(t, async () => {
        let r = await Je(await this.url('schema'), {
          method: 'PUT',
          headers: this.headerBuilder.build(),
          body: this.inlineSchema,
          clientVersion: this.clientVersion,
        })
        r.ok || Hr('schema response status', r.status)
        let n = await rr(r, this.clientVersion)
        if (n)
          throw (
            (this.logEmitter.emit('warn', {
              message: `Error while uploading schema: ${n.message}`,
              timestamp: new Date(),
              target: '',
            }),
            n)
          )
        this.logEmitter.emit('info', {
          message: `Schema (re)uploaded (hash: ${this.inlineSchemaHash})`,
          timestamp: new Date(),
          target: '',
        })
      })
    }
    request(
      t,
      { traceparent: r, interactiveTransaction: n, customDataProxyFetch: i },
    ) {
      return this.requestInternal({
        body: t,
        traceparent: r,
        interactiveTransaction: n,
        customDataProxyFetch: i,
      })
    }
    async requestBatch(
      t,
      { traceparent: r, transaction: n, customDataProxyFetch: i },
    ) {
      let o = n?.kind === 'itx' ? n.options : void 0,
        s = jr(t, n)
      return (
        await this.requestInternal({
          body: s,
          customDataProxyFetch: i,
          interactiveTransaction: o,
          traceparent: r,
        })
      ).map(
        l => (
          l.extensions && this.propagateResponseExtensions(l.extensions),
          'errors' in l ? this.convertProtocolErrorsToClientError(l.errors) : l
        ),
      )
    }
    requestInternal({
      body: t,
      traceparent: r,
      customDataProxyFetch: n,
      interactiveTransaction: i,
    }) {
      return this.withRetry({
        actionGerund: 'querying',
        callback: async ({ logHttpCall: o }) => {
          let s = i
            ? `${i.payload.endpoint}/graphql`
            : await this.url('graphql')
          o(s)
          let a = await Je(
            s,
            {
              method: 'POST',
              headers: this.headerBuilder.build({
                traceparent: r,
                interactiveTransaction: i,
              }),
              body: JSON.stringify(t),
              clientVersion: this.clientVersion,
            },
            n,
          )
          a.ok || Hr('graphql response status', a.status),
            await this.handleError(await rr(a, this.clientVersion))
          let l = await a.json()
          if (
            (l.extensions && this.propagateResponseExtensions(l.extensions),
            'errors' in l)
          )
            throw this.convertProtocolErrorsToClientError(l.errors)
          return 'batchResult' in l ? l.batchResult : l
        },
      })
    }
    async transaction(t, r, n) {
      let i = {
        start: 'starting',
        commit: 'committing',
        rollback: 'rolling back',
      }
      return this.withRetry({
        actionGerund: `${i[t]} transaction`,
        callback: async ({ logHttpCall: o }) => {
          if (t === 'start') {
            let s = JSON.stringify({
                max_wait: n.maxWait,
                timeout: n.timeout,
                isolation_level: n.isolationLevel,
              }),
              a = await this.url('transaction/start')
            o(a)
            let l = await Je(a, {
              method: 'POST',
              headers: this.headerBuilder.build({ traceparent: r.traceparent }),
              body: s,
              clientVersion: this.clientVersion,
            })
            await this.handleError(await rr(l, this.clientVersion))
            let f = await l.json(),
              { extensions: g } = f
            g && this.propagateResponseExtensions(g)
            let h = f.id,
              T = f['data-proxy'].endpoint
            return { id: h, payload: { endpoint: T } }
          } else {
            let s = `${n.payload.endpoint}/${t}`
            o(s)
            let a = await Je(s, {
              method: 'POST',
              headers: this.headerBuilder.build({ traceparent: r.traceparent }),
              clientVersion: this.clientVersion,
            })
            await this.handleError(await rr(a, this.clientVersion))
            let l = await a.json(),
              { extensions: f } = l
            f && this.propagateResponseExtensions(f)
            return
          }
        },
      })
    }
    extractHostAndApiKey() {
      let t = { clientVersion: this.clientVersion },
        r = Object.keys(this.inlineDatasources)[0],
        n = gt({
          inlineDatasources: this.inlineDatasources,
          overrideDatasources: this.config.overrideDatasources,
          clientVersion: this.clientVersion,
          env: this.env,
        }),
        i
      try {
        i = new URL(n)
      } catch {
        throw new Ve(
          `Error validating datasource \`${r}\`: the URL must start with the protocol \`prisma://\``,
          t,
        )
      }
      let { protocol: o, host: s, searchParams: a } = i
      if (o !== 'prisma:' && o !== fr)
        throw new Ve(
          `Error validating datasource \`${r}\`: the URL must start with the protocol \`prisma://\``,
          t,
        )
      let l = a.get('api_key')
      if (l === null || l.length < 1)
        throw new Ve(
          `Error validating datasource \`${r}\`: the URL must contain a valid API key`,
          t,
        )
      return [s, l]
    }
    metrics() {
      throw new je('Metrics are not yet supported for Accelerate', {
        clientVersion: this.clientVersion,
      })
    }
    async withRetry(t) {
      for (let r = 0; ; r++) {
        let n = i => {
          this.logEmitter.emit('info', {
            message: `Calling ${i} (n=${r})`,
            timestamp: new Date(),
            target: '',
          })
        }
        try {
          return await t.callback({ logHttpCall: n })
        } catch (i) {
          if (!(i instanceof oe) || !i.isRetryable) throw i
          if (r >= Fs) throw i instanceof ht ? i.cause : i
          this.logEmitter.emit('warn', {
            message: `Attempt ${r + 1}/${Fs} failed for ${t.actionGerund}: ${i.message ?? '(unknown)'}`,
            timestamp: new Date(),
            target: '',
          })
          let o = await Is(r)
          this.logEmitter.emit('warn', {
            message: `Retrying after ${o}ms`,
            timestamp: new Date(),
            target: '',
          })
        }
      }
    }
    async handleError(t) {
      if (t instanceof Ge)
        throw (
          (await this.uploadSchema(),
          new ht({ clientVersion: this.clientVersion, cause: t }))
        )
      if (t) throw t
    }
    convertProtocolErrorsToClientError(t) {
      return t.length === 1
        ? Gr(t[0], this.config.clientVersion, this.config.activeProvider)
        : new ae(JSON.stringify(t), {
            clientVersion: this.config.clientVersion,
          })
    }
    applyPendingMigrations() {
      throw new Error('Method not implemented.')
    }
  }
function Ls({ copyEngine: e = !0 }, t) {
  let r
  try {
    r = gt({
      inlineDatasources: t.inlineDatasources,
      overrideDatasources: t.overrideDatasources,
      env: { ...t.env, ...y.env },
      clientVersion: t.clientVersion,
    })
  } catch {}
  let n = !!(r?.startsWith('prisma://') || wn(r))
  e &&
    n &&
    yr(
      'recommend--no-engine',
      'In production, we recommend using `prisma generate --no-engine` (See: `prisma generate --help`)',
    )
  let i = Xe(t.generator),
    o = n || !e,
    s = !!t.adapter,
    a = i === 'library',
    l = i === 'binary',
    f = i === 'client'
  if ((o && s) || s) {
    let g
    throw (
      ((g = [
        'Prisma Client was configured to use the `adapter` option but it was imported via its `/edge` endpoint.',
        'Please either remove the `/edge` endpoint or remove the `adapter` from the Prisma Client constructor.',
      ]),
      new te(
        g.join(`
`),
        { clientVersion: t.clientVersion },
      ))
    )
  }
  return o ? new Et(t) : new Et(t)
}
d()
u()
c()
p()
m()
function Kr({ generator: e }) {
  return e?.previewFeatures ?? []
}
d()
u()
c()
p()
m()
var Bs = e => ({ command: e })
d()
u()
c()
p()
m()
d()
u()
c()
p()
m()
var qs = e => e.strings.reduce((t, r, n) => `${t}@P${n}${r}`)
d()
u()
c()
p()
m()
function bt(e) {
  try {
    return Us(e, 'fast')
  } catch {
    return Us(e, 'slow')
  }
}
function Us(e, t) {
  return JSON.stringify(e.map(r => Vs(r, t)))
}
function Vs(e, t) {
  if (Array.isArray(e)) return e.map(r => Vs(r, t))
  if (typeof e == 'bigint')
    return { prisma__type: 'bigint', prisma__value: e.toString() }
  if (it(e)) return { prisma__type: 'date', prisma__value: e.toJSON() }
  if (Te.isDecimal(e))
    return { prisma__type: 'decimal', prisma__value: e.toJSON() }
  if (E.Buffer.isBuffer(e))
    return { prisma__type: 'bytes', prisma__value: e.toString('base64') }
  if (op(e))
    return {
      prisma__type: 'bytes',
      prisma__value: E.Buffer.from(e).toString('base64'),
    }
  if (ArrayBuffer.isView(e)) {
    let { buffer: r, byteOffset: n, byteLength: i } = e
    return {
      prisma__type: 'bytes',
      prisma__value: E.Buffer.from(r, n, i).toString('base64'),
    }
  }
  return typeof e == 'object' && t === 'slow' ? js(e) : e
}
function op(e) {
  return e instanceof ArrayBuffer || e instanceof SharedArrayBuffer
    ? !0
    : typeof e == 'object' && e !== null
      ? e[Symbol.toStringTag] === 'ArrayBuffer' ||
        e[Symbol.toStringTag] === 'SharedArrayBuffer'
      : !1
}
function js(e) {
  if (typeof e != 'object' || e === null) return e
  if (typeof e.toJSON == 'function') return e.toJSON()
  if (Array.isArray(e)) return e.map($s)
  let t = {}
  for (let r of Object.keys(e)) t[r] = $s(e[r])
  return t
}
function $s(e) {
  return typeof e == 'bigint' ? e.toString() : js(e)
}
var sp = /^(\s*alter\s)/i,
  Gs = ee('prisma:client')
function ei(e, t, r, n) {
  if (
    !(e !== 'postgresql' && e !== 'cockroachdb') &&
    r.length > 0 &&
    sp.exec(t)
  )
    throw new Error(`Running ALTER using ${n} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`)
}
var ti =
    ({ clientMethod: e, activeProvider: t }) =>
    r => {
      let n = '',
        i
      if (Ur(r))
        (n = r.sql), (i = { values: bt(r.values), __prismaRawParameters__: !0 })
      else if (Array.isArray(r)) {
        let [o, ...s] = r
        ;(n = o), (i = { values: bt(s || []), __prismaRawParameters__: !0 })
      } else
        switch (t) {
          case 'sqlite':
          case 'mysql': {
            ;(n = r.sql),
              (i = { values: bt(r.values), __prismaRawParameters__: !0 })
            break
          }
          case 'cockroachdb':
          case 'postgresql':
          case 'postgres': {
            ;(n = r.text),
              (i = { values: bt(r.values), __prismaRawParameters__: !0 })
            break
          }
          case 'sqlserver': {
            ;(n = qs(r)),
              (i = { values: bt(r.values), __prismaRawParameters__: !0 })
            break
          }
          default:
            throw new Error(`The ${t} provider does not support ${e}`)
        }
      return (
        i?.values
          ? Gs(`prisma.${e}(${n}, ${i.values})`)
          : Gs(`prisma.${e}(${n})`),
        { query: n, parameters: i }
      )
    },
  Js = {
    requestArgsToMiddlewareArgs(e) {
      return [e.strings, ...e.values]
    },
    middlewareArgsToRequestArgs(e) {
      let [t, ...r] = e
      return new ue(t, r)
    },
  },
  Qs = {
    requestArgsToMiddlewareArgs(e) {
      return [e]
    },
    middlewareArgsToRequestArgs(e) {
      return e[0]
    },
  }
d()
u()
c()
p()
m()
function ri(e) {
  return function (r, n) {
    let i,
      o = (s = e) => {
        try {
          return s === void 0 || s?.kind === 'itx' ? (i ??= Ws(r(s))) : Ws(r(s))
        } catch (a) {
          return Promise.reject(a)
        }
      }
    return {
      get spec() {
        return n
      },
      then(s, a) {
        return o().then(s, a)
      },
      catch(s) {
        return o().catch(s)
      },
      finally(s) {
        return o().finally(s)
      },
      requestTransaction(s) {
        let a = o(s)
        return a.requestTransaction ? a.requestTransaction(s) : a
      },
      [Symbol.toStringTag]: 'PrismaPromise',
    }
  }
}
function Ws(e) {
  return typeof e.then == 'function' ? e : Promise.resolve(e)
}
d()
u()
c()
p()
m()
var ap = yn.split('.')[0],
  lp = {
    isEnabled() {
      return !1
    },
    getTraceParent() {
      return '00-10-10-00'
    },
    dispatchEngineSpans() {},
    getActiveContext() {},
    runInChildSpan(e, t) {
      return t()
    },
  },
  ni = class {
    isEnabled() {
      return this.getGlobalTracingHelper().isEnabled()
    }
    getTraceParent(t) {
      return this.getGlobalTracingHelper().getTraceParent(t)
    }
    dispatchEngineSpans(t) {
      return this.getGlobalTracingHelper().dispatchEngineSpans(t)
    }
    getActiveContext() {
      return this.getGlobalTracingHelper().getActiveContext()
    }
    runInChildSpan(t, r) {
      return this.getGlobalTracingHelper().runInChildSpan(t, r)
    }
    getGlobalTracingHelper() {
      let t = globalThis[`V${ap}_PRISMA_INSTRUMENTATION`],
        r = globalThis.PRISMA_INSTRUMENTATION
      return t?.helper ?? r?.helper ?? lp
    }
  }
function Hs() {
  return new ni()
}
d()
u()
c()
p()
m()
function Ks(e, t = () => {}) {
  let r,
    n = new Promise(i => (r = i))
  return {
    then(i) {
      return --e === 0 && r(t()), i?.(n)
    },
  }
}
d()
u()
c()
p()
m()
function zs(e) {
  return typeof e == 'string'
    ? e
    : e.reduce(
        (t, r) => {
          let n = typeof r == 'string' ? r : r.level
          return n === 'query'
            ? t
            : t && (r === 'info' || t === 'info')
              ? 'info'
              : n
        },
        void 0,
      )
}
d()
u()
c()
p()
m()
var zr = class {
  constructor() {
    w(this, '_middlewares', [])
  }
  use(t) {
    this._middlewares.push(t)
  }
  get(t) {
    return this._middlewares[t]
  }
  has(t) {
    return !!this._middlewares[t]
  }
  length() {
    return this._middlewares.length
  }
}
d()
u()
c()
p()
m()
var Zs = We(lo())
d()
u()
c()
p()
m()
function Yr(e) {
  return typeof e.batchRequestIdx == 'number'
}
d()
u()
c()
p()
m()
function Ys(e) {
  if (e.action !== 'findUnique' && e.action !== 'findUniqueOrThrow') return
  let t = []
  return (
    e.modelName && t.push(e.modelName),
    e.query.arguments && t.push(ii(e.query.arguments)),
    t.push(ii(e.query.selection)),
    t.join('')
  )
}
function ii(e) {
  return `(${Object.keys(e)
    .sort()
    .map(r => {
      let n = e[r]
      return typeof n == 'object' && n !== null ? `(${r} ${ii(n)})` : r
    })
    .join(' ')})`
}
d()
u()
c()
p()
m()
var up = {
  aggregate: !1,
  aggregateRaw: !1,
  createMany: !0,
  createManyAndReturn: !0,
  createOne: !0,
  deleteMany: !0,
  deleteOne: !0,
  executeRaw: !0,
  findFirst: !1,
  findFirstOrThrow: !1,
  findMany: !1,
  findRaw: !1,
  findUnique: !1,
  findUniqueOrThrow: !1,
  groupBy: !1,
  queryRaw: !1,
  runCommandRaw: !0,
  updateMany: !0,
  updateManyAndReturn: !0,
  updateOne: !0,
  upsertOne: !0,
}
function oi(e) {
  return up[e]
}
d()
u()
c()
p()
m()
var Zr = class {
  constructor(t) {
    this.options = t
    w(this, 'batches')
    w(this, 'tickActive', !1)
    this.batches = {}
  }
  request(t) {
    let r = this.options.batchBy(t)
    return r
      ? (this.batches[r] ||
          ((this.batches[r] = []),
          this.tickActive ||
            ((this.tickActive = !0),
            y.nextTick(() => {
              this.dispatchBatches(), (this.tickActive = !1)
            }))),
        new Promise((n, i) => {
          this.batches[r].push({ request: t, resolve: n, reject: i })
        }))
      : this.options.singleLoader(t)
  }
  dispatchBatches() {
    for (let t in this.batches) {
      let r = this.batches[t]
      delete this.batches[t],
        r.length === 1
          ? this.options
              .singleLoader(r[0].request)
              .then(n => {
                n instanceof Error ? r[0].reject(n) : r[0].resolve(n)
              })
              .catch(n => {
                r[0].reject(n)
              })
          : (r.sort((n, i) => this.options.batchOrder(n.request, i.request)),
            this.options
              .batchLoader(r.map(n => n.request))
              .then(n => {
                if (n instanceof Error)
                  for (let i = 0; i < r.length; i++) r[i].reject(n)
                else
                  for (let i = 0; i < r.length; i++) {
                    let o = n[i]
                    o instanceof Error ? r[i].reject(o) : r[i].resolve(o)
                  }
              })
              .catch(n => {
                for (let i = 0; i < r.length; i++) r[i].reject(n)
              }))
    }
  }
  get [Symbol.toStringTag]() {
    return 'DataLoader'
  }
}
d()
u()
c()
p()
m()
function Qe(e, t) {
  if (t === null) return t
  switch (e) {
    case 'bigint':
      return BigInt(t)
    case 'bytes': {
      let {
        buffer: r,
        byteOffset: n,
        byteLength: i,
      } = E.Buffer.from(t, 'base64')
      return new Uint8Array(r, n, i)
    }
    case 'decimal':
      return new Te(t)
    case 'datetime':
    case 'date':
      return new Date(t)
    case 'time':
      return new Date(`1970-01-01T${t}Z`)
    case 'bigint-array':
      return t.map(r => Qe('bigint', r))
    case 'bytes-array':
      return t.map(r => Qe('bytes', r))
    case 'decimal-array':
      return t.map(r => Qe('decimal', r))
    case 'datetime-array':
      return t.map(r => Qe('datetime', r))
    case 'date-array':
      return t.map(r => Qe('date', r))
    case 'time-array':
      return t.map(r => Qe('time', r))
    default:
      return t
  }
}
function si(e) {
  let t = [],
    r = cp(e)
  for (let n = 0; n < e.rows.length; n++) {
    let i = e.rows[n],
      o = { ...r }
    for (let s = 0; s < i.length; s++) o[e.columns[s]] = Qe(e.types[s], i[s])
    t.push(o)
  }
  return t
}
function cp(e) {
  let t = {}
  for (let r = 0; r < e.columns.length; r++) t[e.columns[r]] = null
  return t
}
var pp = ee('prisma:client:request_handler'),
  Xr = class {
    constructor(t, r) {
      w(this, 'client')
      w(this, 'dataloader')
      w(this, 'logEmitter')
      ;(this.logEmitter = r),
        (this.client = t),
        (this.dataloader = new Zr({
          batchLoader: vs(async ({ requests: n, customDataProxyFetch: i }) => {
            let { transaction: o, otelParentCtx: s } = n[0],
              a = n.map(h => h.protocolQuery),
              l = this.client._tracingHelper.getTraceParent(s),
              f = n.some(h => oi(h.protocolQuery.action))
            return (
              await this.client._engine.requestBatch(a, {
                traceparent: l,
                transaction: mp(o),
                containsWrite: f,
                customDataProxyFetch: i,
              })
            ).map((h, T) => {
              if (h instanceof Error) return h
              try {
                return this.mapQueryEngineResult(n[T], h)
              } catch (k) {
                return k
              }
            })
          }),
          singleLoader: async n => {
            let i = n.transaction?.kind === 'itx' ? Xs(n.transaction) : void 0,
              o = await this.client._engine.request(n.protocolQuery, {
                traceparent: this.client._tracingHelper.getTraceParent(),
                interactiveTransaction: i,
                isWrite: oi(n.protocolQuery.action),
                customDataProxyFetch: n.customDataProxyFetch,
              })
            return this.mapQueryEngineResult(n, o)
          },
          batchBy: n =>
            n.transaction?.id
              ? `transaction-${n.transaction.id}`
              : Ys(n.protocolQuery),
          batchOrder(n, i) {
            return n.transaction?.kind === 'batch' &&
              i.transaction?.kind === 'batch'
              ? n.transaction.index - i.transaction.index
              : 0
          },
        }))
    }
    async request(t) {
      try {
        return await this.dataloader.request(t)
      } catch (r) {
        let {
          clientMethod: n,
          callsite: i,
          transaction: o,
          args: s,
          modelName: a,
        } = t
        this.handleAndLogRequestError({
          error: r,
          clientMethod: n,
          callsite: i,
          transaction: o,
          args: s,
          modelName: a,
          globalOmit: t.globalOmit,
        })
      }
    }
    mapQueryEngineResult({ dataPath: t, unpacker: r }, n) {
      let i = n?.data,
        o = this.unpack(i, t, r)
      return y.env.PRISMA_CLIENT_GET_TIME ? { data: o } : o
    }
    handleAndLogRequestError(t) {
      try {
        this.handleRequestError(t)
      } catch (r) {
        throw (
          (this.logEmitter &&
            this.logEmitter.emit('error', {
              message: r.message,
              target: t.clientMethod,
              timestamp: new Date(),
            }),
          r)
        )
      }
    }
    handleRequestError({
      error: t,
      clientMethod: r,
      callsite: n,
      transaction: i,
      args: o,
      modelName: s,
      globalOmit: a,
    }) {
      if ((pp(t), dp(t, i))) throw t
      if (t instanceof se && fp(t)) {
        let f = ea(t.meta)
        Fr({
          args: o,
          errors: [f],
          callsite: n,
          errorFormat: this.client._errorFormat,
          originalMethod: r,
          clientVersion: this.client._clientVersion,
          globalOmit: a,
        })
      }
      let l = t.message
      if (
        (n &&
          (l = Rr({
            callsite: n,
            originalMethod: r,
            isPanic: t.isPanic,
            showColors: this.client._errorFormat === 'pretty',
            message: l,
          })),
        (l = this.sanitizeMessage(l)),
        t.code)
      ) {
        let f = s ? { modelName: s, ...t.meta } : t.meta
        throw new se(l, {
          code: t.code,
          clientVersion: this.client._clientVersion,
          meta: f,
          batchRequestIdx: t.batchRequestIdx,
        })
      } else {
        if (t.isPanic) throw new ke(l, this.client._clientVersion)
        if (t instanceof ae)
          throw new ae(l, {
            clientVersion: this.client._clientVersion,
            batchRequestIdx: t.batchRequestIdx,
          })
        if (t instanceof W) throw new W(l, this.client._clientVersion)
        if (t instanceof ke) throw new ke(l, this.client._clientVersion)
      }
      throw ((t.clientVersion = this.client._clientVersion), t)
    }
    sanitizeMessage(t) {
      return this.client._errorFormat && this.client._errorFormat !== 'pretty'
        ? (0, Zs.default)(t)
        : t
    }
    unpack(t, r, n) {
      if (!t || (t.data && (t = t.data), !t)) return t
      let i = Object.keys(t)[0],
        o = Object.values(t)[0],
        s = r.filter(f => f !== 'select' && f !== 'include'),
        a = $n(o, s),
        l = i === 'queryRaw' ? si(a) : kt(a)
      return n ? n(l) : l
    }
    get [Symbol.toStringTag]() {
      return 'RequestHandler'
    }
  }
function mp(e) {
  if (e) {
    if (e.kind === 'batch')
      return { kind: 'batch', options: { isolationLevel: e.isolationLevel } }
    if (e.kind === 'itx') return { kind: 'itx', options: Xs(e) }
    Pe(e, 'Unknown transaction kind')
  }
}
function Xs(e) {
  return { id: e.id, payload: e.payload }
}
function dp(e, t) {
  return Yr(e) && t?.kind === 'batch' && e.batchRequestIdx !== t.index
}
function fp(e) {
  return e.code === 'P2009' || e.code === 'P2012'
}
function ea(e) {
  if (e.kind === 'Union') return { kind: 'Union', errors: e.errors.map(ea) }
  if (Array.isArray(e.selectionPath)) {
    let [, ...t] = e.selectionPath
    return { ...e, selectionPath: t }
  }
  return e
}
d()
u()
c()
p()
m()
var ta = '6.5.0'
var ra = ta
d()
u()
c()
p()
m()
var aa = We(Sn())
d()
u()
c()
p()
m()
var $ = class extends Error {
  constructor(t) {
    super(
      t +
        `
Read more at https://pris.ly/d/client-constructor`,
    ),
      (this.name = 'PrismaClientConstructorValidationError')
  }
  get [Symbol.toStringTag]() {
    return 'PrismaClientConstructorValidationError'
  }
}
F($, 'PrismaClientConstructorValidationError')
var na = [
    'datasources',
    'datasourceUrl',
    'errorFormat',
    'adapter',
    'log',
    'transactionOptions',
    'omit',
    '__internal',
  ],
  ia = ['pretty', 'colorless', 'minimal'],
  oa = ['info', 'query', 'warn', 'error'],
  hp = {
    datasources: (e, { datasourceNames: t }) => {
      if (e) {
        if (typeof e != 'object' || Array.isArray(e))
          throw new $(
            `Invalid value ${JSON.stringify(e)} for "datasources" provided to PrismaClient constructor`,
          )
        for (let [r, n] of Object.entries(e)) {
          if (!t.includes(r)) {
            let i = xt(r, t) || ` Available datasources: ${t.join(', ')}`
            throw new $(
              `Unknown datasource ${r} provided to PrismaClient constructor.${i}`,
            )
          }
          if (typeof n != 'object' || Array.isArray(n))
            throw new $(`Invalid value ${JSON.stringify(e)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`)
          if (n && typeof n == 'object')
            for (let [i, o] of Object.entries(n)) {
              if (i !== 'url')
                throw new $(`Invalid value ${JSON.stringify(e)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`)
              if (typeof o != 'string')
                throw new $(`Invalid value ${JSON.stringify(o)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`)
            }
        }
      }
    },
    adapter: (e, t) => {
      if (!e && Xe(t.generator) === 'client')
        throw new $(
          'Using engine type "client" requires a driver adapter to be provided to PrismaClient constructor.',
        )
      if (e === null) return
      if (e === void 0)
        throw new $(
          '"adapter" property must not be undefined, use null to conditionally disable driver adapters.',
        )
      if (!Kr(t).includes('driverAdapters'))
        throw new $(
          '"adapter" property can only be provided to PrismaClient constructor when "driverAdapters" preview feature is enabled.',
        )
      if (Xe(t.generator) === 'binary')
        throw new $(
          'Cannot use a driver adapter with the "binary" Query Engine. Please use the "library" Query Engine.',
        )
    },
    datasourceUrl: e => {
      if (typeof e < 'u' && typeof e != 'string')
        throw new $(`Invalid value ${JSON.stringify(e)} for "datasourceUrl" provided to PrismaClient constructor.
Expected string or undefined.`)
    },
    errorFormat: e => {
      if (e) {
        if (typeof e != 'string')
          throw new $(
            `Invalid value ${JSON.stringify(e)} for "errorFormat" provided to PrismaClient constructor.`,
          )
        if (!ia.includes(e)) {
          let t = xt(e, ia)
          throw new $(
            `Invalid errorFormat ${e} provided to PrismaClient constructor.${t}`,
          )
        }
      }
    },
    log: e => {
      if (!e) return
      if (!Array.isArray(e))
        throw new $(
          `Invalid value ${JSON.stringify(e)} for "log" provided to PrismaClient constructor.`,
        )
      function t(r) {
        if (typeof r == 'string' && !oa.includes(r)) {
          let n = xt(r, oa)
          throw new $(
            `Invalid log level "${r}" provided to PrismaClient constructor.${n}`,
          )
        }
      }
      for (let r of e) {
        t(r)
        let n = {
          level: t,
          emit: i => {
            let o = ['stdout', 'event']
            if (!o.includes(i)) {
              let s = xt(i, o)
              throw new $(
                `Invalid value ${JSON.stringify(i)} for "emit" in logLevel provided to PrismaClient constructor.${s}`,
              )
            }
          },
        }
        if (r && typeof r == 'object')
          for (let [i, o] of Object.entries(r))
            if (n[i]) n[i](o)
            else
              throw new $(
                `Invalid property ${i} for "log" provided to PrismaClient constructor`,
              )
      }
    },
    transactionOptions: e => {
      if (!e) return
      let t = e.maxWait
      if (t != null && t <= 0)
        throw new $(
          `Invalid value ${t} for maxWait in "transactionOptions" provided to PrismaClient constructor. maxWait needs to be greater than 0`,
        )
      let r = e.timeout
      if (r != null && r <= 0)
        throw new $(
          `Invalid value ${r} for timeout in "transactionOptions" provided to PrismaClient constructor. timeout needs to be greater than 0`,
        )
    },
    omit: (e, t) => {
      if (typeof e != 'object')
        throw new $('"omit" option is expected to be an object.')
      if (e === null) throw new $('"omit" option can not be `null`')
      let r = []
      for (let [n, i] of Object.entries(e)) {
        let o = wp(n, t.runtimeDataModel)
        if (!o) {
          r.push({ kind: 'UnknownModel', modelKey: n })
          continue
        }
        for (let [s, a] of Object.entries(i)) {
          let l = o.fields.find(f => f.name === s)
          if (!l) {
            r.push({ kind: 'UnknownField', modelKey: n, fieldName: s })
            continue
          }
          if (l.relationName) {
            r.push({ kind: 'RelationInOmit', modelKey: n, fieldName: s })
            continue
          }
          typeof a != 'boolean' &&
            r.push({ kind: 'InvalidFieldValue', modelKey: n, fieldName: s })
        }
      }
      if (r.length > 0) throw new $(Ep(e, r))
    },
    __internal: e => {
      if (!e) return
      let t = ['debug', 'engine', 'configOverride']
      if (typeof e != 'object')
        throw new $(
          `Invalid value ${JSON.stringify(e)} for "__internal" to PrismaClient constructor`,
        )
      for (let [r] of Object.entries(e))
        if (!t.includes(r)) {
          let n = xt(r, t)
          throw new $(
            `Invalid property ${JSON.stringify(r)} for "__internal" provided to PrismaClient constructor.${n}`,
          )
        }
    },
  }
function la(e, t) {
  for (let [r, n] of Object.entries(e)) {
    if (!na.includes(r)) {
      let i = xt(r, na)
      throw new $(
        `Unknown property ${r} provided to PrismaClient constructor.${i}`,
      )
    }
    hp[r](n, t)
  }
  if (e.datasourceUrl && e.datasources)
    throw new $(
      'Can not use "datasourceUrl" and "datasources" options at the same time. Pick one of them',
    )
}
function xt(e, t) {
  if (t.length === 0 || typeof e != 'string') return ''
  let r = yp(e, t)
  return r ? ` Did you mean "${r}"?` : ''
}
function yp(e, t) {
  if (t.length === 0) return null
  let r = t.map(i => ({ value: i, distance: (0, aa.default)(e, i) }))
  r.sort((i, o) => (i.distance < o.distance ? -1 : 1))
  let n = r[0]
  return n.distance < 3 ? n.value : null
}
function wp(e, t) {
  return sa(t.models, e) ?? sa(t.types, e)
}
function sa(e, t) {
  let r = Object.keys(e).find(n => nt(n) === t)
  if (r) return e[r]
}
function Ep(e, t) {
  let r = pt(e)
  for (let o of t)
    switch (o.kind) {
      case 'UnknownModel':
        r.arguments.getField(o.modelKey)?.markAsError(),
          r.addErrorMessage(() => `Unknown model name: ${o.modelKey}.`)
        break
      case 'UnknownField':
        r.arguments.getDeepField([o.modelKey, o.fieldName])?.markAsError(),
          r.addErrorMessage(
            () =>
              `Model "${o.modelKey}" does not have a field named "${o.fieldName}".`,
          )
        break
      case 'RelationInOmit':
        r.arguments.getDeepField([o.modelKey, o.fieldName])?.markAsError(),
          r.addErrorMessage(
            () =>
              'Relations are already excluded by default and can not be specified in "omit".',
          )
        break
      case 'InvalidFieldValue':
        r.arguments.getDeepFieldValue([o.modelKey, o.fieldName])?.markAsError(),
          r.addErrorMessage(() => 'Omit field option value must be a boolean.')
        break
    }
  let { message: n, args: i } = _r(r, 'colorless')
  return `Error validating "omit" option:

${i}

${n}`
}
d()
u()
c()
p()
m()
function ua(e) {
  return e.length === 0
    ? Promise.resolve([])
    : new Promise((t, r) => {
        let n = new Array(e.length),
          i = null,
          o = !1,
          s = 0,
          a = () => {
            o || (s++, s === e.length && ((o = !0), i ? r(i) : t(n)))
          },
          l = f => {
            o || ((o = !0), r(f))
          }
        for (let f = 0; f < e.length; f++)
          e[f].then(
            g => {
              ;(n[f] = g), a()
            },
            g => {
              if (!Yr(g)) {
                l(g)
                return
              }
              g.batchRequestIdx === f ? l(g) : (i || (i = g), a())
            },
          )
      })
}
var Fe = ee('prisma:client')
typeof globalThis == 'object' && (globalThis.NODE_CLIENT = !0)
var bp = {
    requestArgsToMiddlewareArgs: e => e,
    middlewareArgsToRequestArgs: e => e,
  },
  xp = Symbol.for('prisma.client.transaction.id'),
  Pp = {
    id: 0,
    nextId() {
      return ++this.id
    },
  }
function vp(e) {
  class t {
    constructor(n) {
      w(this, '_originalClient', this)
      w(this, '_runtimeDataModel')
      w(this, '_requestHandler')
      w(this, '_connectionPromise')
      w(this, '_disconnectionPromise')
      w(this, '_engineConfig')
      w(this, '_accelerateEngineConfig')
      w(this, '_clientVersion')
      w(this, '_errorFormat')
      w(this, '_tracingHelper')
      w(this, '_middlewares', new zr())
      w(this, '_previewFeatures')
      w(this, '_activeProvider')
      w(this, '_globalOmit')
      w(this, '_extensions')
      w(this, '_engine')
      w(this, '_appliedParent')
      w(this, '_createPrismaPromise', ri())
      w(this, '$metrics', new $t(this))
      w(this, '$extends', fs)
      ;(e = n?.__internal?.configOverride?.(e) ?? e), Ss(e), n && la(n, e)
      let i = new hr().on('error', () => {})
      ;(this._extensions = mt.empty()),
        (this._previewFeatures = Kr(e)),
        (this._clientVersion = e.clientVersion ?? ra),
        (this._activeProvider = e.activeProvider),
        (this._globalOmit = n?.omit),
        (this._tracingHelper = Hs())
      let o = {
          rootEnvPath:
            e.relativeEnvPaths.rootEnvPath &&
            Ct.resolve(e.dirname, e.relativeEnvPaths.rootEnvPath),
          schemaEnvPath:
            e.relativeEnvPaths.schemaEnvPath &&
            Ct.resolve(e.dirname, e.relativeEnvPaths.schemaEnvPath),
        },
        s
      if (n?.adapter) {
        s = fn(n.adapter)
        let l =
          e.activeProvider === 'postgresql' ? 'postgres' : e.activeProvider
        if (s.provider !== l)
          throw new W(
            `The Driver Adapter \`${s.adapterName}\`, based on \`${s.provider}\`, is not compatible with the provider \`${l}\` specified in the Prisma schema.`,
            this._clientVersion,
          )
        if (n.datasources || n.datasourceUrl !== void 0)
          throw new W(
            'Custom datasource configuration is not compatible with Prisma Driver Adapters. Please define the database connection string directly in the Driver Adapter configuration.',
            this._clientVersion,
          )
      }
      let a = e.injectableEdgeEnv?.()
      try {
        let l = n ?? {},
          f = l.__internal ?? {},
          g = f.debug === !0
        g && ee.enable('prisma:client')
        let h = Ct.resolve(e.dirname, e.relativePath)
        Qi.existsSync(h) || (h = e.dirname),
          Fe('dirname', e.dirname),
          Fe('relativePath', e.relativePath),
          Fe('cwd', h)
        let T = f.engine || {}
        if (
          (l.errorFormat
            ? (this._errorFormat = l.errorFormat)
            : y.env.NODE_ENV === 'production'
              ? (this._errorFormat = 'minimal')
              : y.env.NO_COLOR
                ? (this._errorFormat = 'colorless')
                : (this._errorFormat = 'colorless'),
          (this._runtimeDataModel = e.runtimeDataModel),
          (this._engineConfig = {
            cwd: h,
            dirname: e.dirname,
            enableDebugLogs: g,
            allowTriggerPanic: T.allowTriggerPanic,
            datamodelPath: Ct.join(e.dirname, e.filename ?? 'schema.prisma'),
            prismaPath: T.binaryPath ?? void 0,
            engineEndpoint: T.endpoint,
            generator: e.generator,
            showColors: this._errorFormat === 'pretty',
            logLevel: l.log && zs(l.log),
            logQueries:
              l.log &&
              !!(typeof l.log == 'string'
                ? l.log === 'query'
                : l.log.find(k =>
                    typeof k == 'string' ? k === 'query' : k.level === 'query',
                  )),
            env: a?.parsed ?? {},
            flags: [],
            engineWasm: e.engineWasm,
            compilerWasm: e.compilerWasm,
            clientVersion: e.clientVersion,
            engineVersion: e.engineVersion,
            previewFeatures: this._previewFeatures,
            activeProvider: e.activeProvider,
            inlineSchema: e.inlineSchema,
            overrideDatasources: ks(l, e.datasourceNames),
            inlineDatasources: e.inlineDatasources,
            inlineSchemaHash: e.inlineSchemaHash,
            tracingHelper: this._tracingHelper,
            transactionOptions: {
              maxWait: l.transactionOptions?.maxWait ?? 2e3,
              timeout: l.transactionOptions?.timeout ?? 5e3,
              isolationLevel: l.transactionOptions?.isolationLevel,
            },
            logEmitter: i,
            isBundled: e.isBundled,
            adapter: s,
          }),
          (this._accelerateEngineConfig = {
            ...this._engineConfig,
            accelerateUtils: {
              resolveDatasourceUrl: gt,
              getBatchRequestPayload: jr,
              prismaGraphQLToJSError: Gr,
              PrismaClientUnknownRequestError: ae,
              PrismaClientInitializationError: W,
              PrismaClientKnownRequestError: se,
              debug: ee('prisma:client:accelerateEngine'),
              engineVersion: pa.version,
              clientVersion: e.clientVersion,
            },
          }),
          Fe('clientVersion', e.clientVersion),
          (this._engine = Ls(e, this._engineConfig)),
          (this._requestHandler = new Xr(this, i)),
          l.log)
        )
          for (let k of l.log) {
            let R =
              typeof k == 'string' ? k : k.emit === 'stdout' ? k.level : null
            R &&
              this.$on(R, S => {
                Rt.log(`${Rt.tags[R] ?? ''}`, S.message || S.query)
              })
          }
      } catch (l) {
        throw ((l.clientVersion = this._clientVersion), l)
      }
      return (this._appliedParent = Gt(this))
    }
    get [Symbol.toStringTag]() {
      return 'PrismaClient'
    }
    $use(n) {
      this._middlewares.use(n)
    }
    $on(n, i) {
      return (
        n === 'beforeExit'
          ? this._engine.onBeforeExit(i)
          : n && this._engineConfig.logEmitter.on(n, i),
        this
      )
    }
    $connect() {
      try {
        return this._engine.start()
      } catch (n) {
        throw ((n.clientVersion = this._clientVersion), n)
      }
    }
    async $disconnect() {
      try {
        await this._engine.stop()
      } catch (n) {
        throw ((n.clientVersion = this._clientVersion), n)
      } finally {
        Gi()
      }
    }
    $executeRawInternal(n, i, o, s) {
      let a = this._activeProvider
      return this._request({
        action: 'executeRaw',
        args: o,
        transaction: n,
        clientMethod: i,
        argsMapper: ti({ clientMethod: i, activeProvider: a }),
        callsite: _e(this._errorFormat),
        dataPath: [],
        middlewareArgsMapper: s,
      })
    }
    $executeRaw(n, ...i) {
      return this._createPrismaPromise(o => {
        if (n.raw !== void 0 || n.sql !== void 0) {
          let [s, a] = ca(n, i)
          return (
            ei(
              this._activeProvider,
              s.text,
              s.values,
              Array.isArray(n)
                ? 'prisma.$executeRaw`<SQL>`'
                : 'prisma.$executeRaw(sql`<SQL>`)',
            ),
            this.$executeRawInternal(o, '$executeRaw', s, a)
          )
        }
        throw new te(
          "`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n",
          { clientVersion: this._clientVersion },
        )
      })
    }
    $executeRawUnsafe(n, ...i) {
      return this._createPrismaPromise(
        o => (
          ei(
            this._activeProvider,
            n,
            i,
            'prisma.$executeRawUnsafe(<SQL>, [...values])',
          ),
          this.$executeRawInternal(o, '$executeRawUnsafe', [n, ...i])
        ),
      )
    }
    $runCommandRaw(n) {
      if (e.activeProvider !== 'mongodb')
        throw new te(
          `The ${e.activeProvider} provider does not support $runCommandRaw. Use the mongodb provider.`,
          { clientVersion: this._clientVersion },
        )
      return this._createPrismaPromise(i =>
        this._request({
          args: n,
          clientMethod: '$runCommandRaw',
          dataPath: [],
          action: 'runCommandRaw',
          argsMapper: Bs,
          callsite: _e(this._errorFormat),
          transaction: i,
        }),
      )
    }
    async $queryRawInternal(n, i, o, s) {
      let a = this._activeProvider
      return this._request({
        action: 'queryRaw',
        args: o,
        transaction: n,
        clientMethod: i,
        argsMapper: ti({ clientMethod: i, activeProvider: a }),
        callsite: _e(this._errorFormat),
        dataPath: [],
        middlewareArgsMapper: s,
      })
    }
    $queryRaw(n, ...i) {
      return this._createPrismaPromise(o => {
        if (n.raw !== void 0 || n.sql !== void 0)
          return this.$queryRawInternal(o, '$queryRaw', ...ca(n, i))
        throw new te(
          "`$queryRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryraw\n",
          { clientVersion: this._clientVersion },
        )
      })
    }
    $queryRawTyped(n) {
      return this._createPrismaPromise(i => {
        if (!this._hasPreviewFlag('typedSql'))
          throw new te(
            '`typedSql` preview feature must be enabled in order to access $queryRawTyped API',
            { clientVersion: this._clientVersion },
          )
        return this.$queryRawInternal(i, '$queryRawTyped', n)
      })
    }
    $queryRawUnsafe(n, ...i) {
      return this._createPrismaPromise(o =>
        this.$queryRawInternal(o, '$queryRawUnsafe', [n, ...i]),
      )
    }
    _transactionWithArray({ promises: n, options: i }) {
      let o = Pp.nextId(),
        s = Ks(n.length),
        a = n.map((l, f) => {
          if (l?.[Symbol.toStringTag] !== 'PrismaPromise')
            throw new Error(
              'All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function.',
            )
          let g =
              i?.isolationLevel ??
              this._engineConfig.transactionOptions.isolationLevel,
            h = { kind: 'batch', id: o, index: f, isolationLevel: g, lock: s }
          return l.requestTransaction?.(h) ?? l
        })
      return ua(a)
    }
    async _transactionWithCallback({ callback: n, options: i }) {
      let o = { traceparent: this._tracingHelper.getTraceParent() },
        s = {
          maxWait: i?.maxWait ?? this._engineConfig.transactionOptions.maxWait,
          timeout: i?.timeout ?? this._engineConfig.transactionOptions.timeout,
          isolationLevel:
            i?.isolationLevel ??
            this._engineConfig.transactionOptions.isolationLevel,
        },
        a = await this._engine.transaction('start', o, s),
        l
      try {
        let f = { kind: 'itx', ...a }
        ;(l = await n(this._createItxClient(f))),
          await this._engine.transaction('commit', o, a)
      } catch (f) {
        throw (
          (await this._engine.transaction('rollback', o, a).catch(() => {}), f)
        )
      }
      return l
    }
    _createItxClient(n) {
      return de(
        Gt(
          de(ds(this), [
            re('_appliedParent', () => this._appliedParent._createItxClient(n)),
            re('_createPrismaPromise', () => ri(n)),
            re(xp, () => n.id),
          ]),
        ),
        [dt(ws)],
      )
    }
    $transaction(n, i) {
      let o
      typeof n == 'function'
        ? this._engineConfig.adapter?.adapterName === '@prisma/adapter-d1'
          ? (o = () => {
              throw new Error(
                'Cloudflare D1 does not support interactive transactions. We recommend you to refactor your queries with that limitation in mind, and use batch transactions with `prisma.$transactions([])` where applicable.',
              )
            })
          : (o = () =>
              this._transactionWithCallback({ callback: n, options: i }))
        : (o = () => this._transactionWithArray({ promises: n, options: i }))
      let s = { name: 'transaction', attributes: { method: '$transaction' } }
      return this._tracingHelper.runInChildSpan(s, o)
    }
    _request(n) {
      n.otelParentCtx = this._tracingHelper.getActiveContext()
      let i = n.middlewareArgsMapper ?? bp,
        o = {
          args: i.requestArgsToMiddlewareArgs(n.args),
          dataPath: n.dataPath,
          runInTransaction: !!n.transaction,
          action: n.action,
          model: n.model,
        },
        s = {
          middleware: {
            name: 'middleware',
            middleware: !0,
            attributes: { method: '$use' },
            active: !1,
          },
          operation: {
            name: 'operation',
            attributes: {
              method: o.action,
              model: o.model,
              name: o.model ? `${o.model}.${o.action}` : o.action,
            },
          },
        },
        a = -1,
        l = async f => {
          let g = this._middlewares.get(++a)
          if (g)
            return this._tracingHelper.runInChildSpan(s.middleware, M =>
              g(f, N => (M?.end(), l(N))),
            )
          let { runInTransaction: h, args: T, ...k } = f,
            R = { ...n, ...k }
          T && (R.args = i.middlewareArgsToRequestArgs(T)),
            n.transaction !== void 0 && h === !1 && delete R.transaction
          let S = await Ps(this, R)
          return R.model
            ? ys({
                result: S,
                modelName: R.model,
                args: R.args,
                extensions: this._extensions,
                runtimeDataModel: this._runtimeDataModel,
                globalOmit: this._globalOmit,
              })
            : S
        }
      return this._tracingHelper.runInChildSpan(s.operation, () => l(o))
    }
    async _executeRequest({
      args: n,
      clientMethod: i,
      dataPath: o,
      callsite: s,
      action: a,
      model: l,
      argsMapper: f,
      transaction: g,
      unpacker: h,
      otelParentCtx: T,
      customDataProxyFetch: k,
    }) {
      try {
        n = f ? f(n) : n
        let R = { name: 'serialize' },
          S = this._tracingHelper.runInChildSpan(R, () =>
            _n({
              modelName: l,
              runtimeDataModel: this._runtimeDataModel,
              action: a,
              args: n,
              clientMethod: i,
              callsite: s,
              extensions: this._extensions,
              errorFormat: this._errorFormat,
              clientVersion: this._clientVersion,
              previewFeatures: this._previewFeatures,
              globalOmit: this._globalOmit,
            }),
          )
        return (
          ee.enabled('prisma:client') &&
            (Fe('Prisma Client call:'),
            Fe(`prisma.${i}(${ns(n)})`),
            Fe('Generated request:'),
            Fe(
              JSON.stringify(S, null, 2) +
                `
`,
            )),
          g?.kind === 'batch' && (await g.lock),
          this._requestHandler.request({
            protocolQuery: S,
            modelName: l,
            action: a,
            clientMethod: i,
            dataPath: o,
            callsite: s,
            args: n,
            extensions: this._extensions,
            transaction: g,
            unpacker: h,
            otelParentCtx: T,
            otelChildCtx: this._tracingHelper.getActiveContext(),
            globalOmit: this._globalOmit,
            customDataProxyFetch: k,
          })
        )
      } catch (R) {
        throw ((R.clientVersion = this._clientVersion), R)
      }
    }
    _hasPreviewFlag(n) {
      return !!this._engineConfig.previewFeatures?.includes(n)
    }
    $applyPendingMigrations() {
      return this._engine.applyPendingMigrations()
    }
  }
  return t
}
function ca(e, t) {
  return Tp(e) ? [new ue(e, t), Js] : [e, Qs]
}
function Tp(e) {
  return Array.isArray(e) && Array.isArray(e.raw)
}
d()
u()
c()
p()
m()
var Cp = new Set([
  'toJSON',
  '$$typeof',
  'asymmetricMatch',
  Symbol.iterator,
  Symbol.toStringTag,
  Symbol.isConcatSpreadable,
  Symbol.toPrimitive,
])
function Ap(e) {
  return new Proxy(e, {
    get(t, r) {
      if (r in t) return t[r]
      if (!Cp.has(r)) throw new TypeError(`Invalid enum value: ${String(r)}`)
    },
  })
}
d()
u()
c()
p()
m()
var export_warnEnvConflicts = void 0
export {
  ji as Debug,
  Te as Decimal,
  Si as Extensions,
  $t as MetricsClient,
  W as PrismaClientInitializationError,
  se as PrismaClientKnownRequestError,
  ke as PrismaClientRustPanicError,
  ae as PrismaClientUnknownRequestError,
  te as PrismaClientValidationError,
  Ii as Public,
  ue as Sql,
  rc as createParam,
  dc as defineDmmfProperty,
  kt as deserializeJsonResponse,
  si as deserializeRawResult,
  mc as dmmfToRuntimeDataModel,
  wc as empty,
  vp as getPrismaClient,
  Jn as getRuntime,
  yc as join,
  Ap as makeStrictEnum,
  gc as makeTypedQueryFactory,
  In as objectEnumValues,
  Xo as raw,
  _n as serializeJsonQuery,
  Mn as skip,
  es as sqltag,
  export_warnEnvConflicts as warnEnvConflicts,
  yr as warnOnce,
}
//# sourceMappingURL=edge-esm.js.map
