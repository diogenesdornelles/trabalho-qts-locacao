'use strict'
var ya = Object.create
var sr = Object.defineProperty
var wa = Object.getOwnPropertyDescriptor
var Ea = Object.getOwnPropertyNames
var ba = Object.getPrototypeOf,
  xa = Object.prototype.hasOwnProperty
var Ae = (e, t) => () => (e && (t = e((e = 0))), t)
var Fe = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
  ar = (e, t) => {
    for (var r in t) sr(e, r, { get: t[r], enumerable: !0 })
  },
  li = (e, t, r, n) => {
    if ((t && typeof t == 'object') || typeof t == 'function')
      for (let i of Ea(t))
        !xa.call(e, i) &&
          i !== r &&
          sr(e, i, {
            get: () => t[i],
            enumerable: !(n = wa(t, i)) || n.enumerable,
          })
    return e
  }
var Je = (e, t, r) => (
    (r = e != null ? ya(ba(e)) : {}),
    li(
      t || !e || !e.__esModule
        ? sr(r, 'default', { value: e, enumerable: !0 })
        : r,
      e,
    )
  ),
  Pa = e => li(sr({}, '__esModule', { value: !0 }), e)
var y,
  u = Ae(() => {
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
var b,
  c = Ae(() => {
    'use strict'
    b =
      globalThis.performance ??
      (() => {
        let e = Date.now()
        return { now: () => Date.now() - e }
      })()
  })
var E,
  p = Ae(() => {
    'use strict'
    E = () => {}
    E.prototype = E
  })
var m = Ae(() => {
  'use strict'
})
var Ai = Fe(Ke => {
  'use strict'
  d()
  u()
  c()
  p()
  m()
  var di = (e, t) => () => (
      t || e((t = { exports: {} }).exports, t), t.exports
    ),
    va = di(e => {
      'use strict'
      ;(e.byteLength = l), (e.toByteArray = g), (e.fromByteArray = S)
      var t = [],
        r = [],
        n = typeof Uint8Array < 'u' ? Uint8Array : Array,
        i = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
      for (o = 0, s = i.length; o < s; ++o)
        (t[o] = i[o]), (r[i.charCodeAt(o)] = o)
      var o, s
      ;(r[45] = 62), (r[95] = 63)
      function a(R) {
        var A = R.length
        if (A % 4 > 0)
          throw new Error('Invalid string. Length must be a multiple of 4')
        var D = R.indexOf('=')
        D === -1 && (D = A)
        var M = D === A ? 0 : 4 - (D % 4)
        return [D, M]
      }
      function l(R) {
        var A = a(R),
          D = A[0],
          M = A[1]
        return ((D + M) * 3) / 4 - M
      }
      function f(R, A, D) {
        return ((A + D) * 3) / 4 - D
      }
      function g(R) {
        var A,
          D = a(R),
          M = D[0],
          U = D[1],
          O = new n(f(R, M, U)),
          F = 0,
          L = U > 0 ? M - 4 : M,
          J
        for (J = 0; J < L; J += 4)
          (A =
            (r[R.charCodeAt(J)] << 18) |
            (r[R.charCodeAt(J + 1)] << 12) |
            (r[R.charCodeAt(J + 2)] << 6) |
            r[R.charCodeAt(J + 3)]),
            (O[F++] = (A >> 16) & 255),
            (O[F++] = (A >> 8) & 255),
            (O[F++] = A & 255)
        return (
          U === 2 &&
            ((A = (r[R.charCodeAt(J)] << 2) | (r[R.charCodeAt(J + 1)] >> 4)),
            (O[F++] = A & 255)),
          U === 1 &&
            ((A =
              (r[R.charCodeAt(J)] << 10) |
              (r[R.charCodeAt(J + 1)] << 4) |
              (r[R.charCodeAt(J + 2)] >> 2)),
            (O[F++] = (A >> 8) & 255),
            (O[F++] = A & 255)),
          O
        )
      }
      function h(R) {
        return (
          t[(R >> 18) & 63] + t[(R >> 12) & 63] + t[(R >> 6) & 63] + t[R & 63]
        )
      }
      function v(R, A, D) {
        for (var M, U = [], O = A; O < D; O += 3)
          (M =
            ((R[O] << 16) & 16711680) +
            ((R[O + 1] << 8) & 65280) +
            (R[O + 2] & 255)),
            U.push(h(M))
        return U.join('')
      }
      function S(R) {
        for (
          var A, D = R.length, M = D % 3, U = [], O = 16383, F = 0, L = D - M;
          F < L;
          F += O
        )
          U.push(v(R, F, F + O > L ? L : F + O))
        return (
          M === 1
            ? ((A = R[D - 1]), U.push(t[A >> 2] + t[(A << 4) & 63] + '=='))
            : M === 2 &&
              ((A = (R[D - 2] << 8) + R[D - 1]),
              U.push(t[A >> 10] + t[(A >> 4) & 63] + t[(A << 2) & 63] + '=')),
          U.join('')
        )
      }
    }),
    Ta = di(e => {
      ;(e.read = function (t, r, n, i, o) {
        var s,
          a,
          l = o * 8 - i - 1,
          f = (1 << l) - 1,
          g = f >> 1,
          h = -7,
          v = n ? o - 1 : 0,
          S = n ? -1 : 1,
          R = t[r + v]
        for (
          v += S, s = R & ((1 << -h) - 1), R >>= -h, h += l;
          h > 0;
          s = s * 256 + t[r + v], v += S, h -= 8
        );
        for (
          a = s & ((1 << -h) - 1), s >>= -h, h += i;
          h > 0;
          a = a * 256 + t[r + v], v += S, h -= 8
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
            v = h >> 1,
            S = o === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            R = i ? 0 : s - 1,
            A = i ? 1 : -1,
            D = r < 0 || (r === 0 && 1 / r < 0) ? 1 : 0
          for (
            r = Math.abs(r),
              isNaN(r) || r === 1 / 0
                ? ((l = isNaN(r) ? 1 : 0), (a = h))
                : ((a = Math.floor(Math.log(r) / Math.LN2)),
                  r * (f = Math.pow(2, -a)) < 1 && (a--, (f *= 2)),
                  a + v >= 1 ? (r += S / f) : (r += S * Math.pow(2, 1 - v)),
                  r * f >= 2 && (a++, (f /= 2)),
                  a + v >= h
                    ? ((l = 0), (a = h))
                    : a + v >= 1
                      ? ((l = (r * f - 1) * Math.pow(2, o)), (a = a + v))
                      : ((l = r * Math.pow(2, v - 1) * Math.pow(2, o)),
                        (a = 0)));
            o >= 8;
            t[n + R] = l & 255, R += A, l /= 256, o -= 8
          );
          for (
            a = (a << o) | l, g += o;
            g > 0;
            t[n + R] = a & 255, R += A, a /= 256, g -= 8
          );
          t[n + R - A] |= D * 128
        })
    }),
    sn = va(),
    We = Ta(),
    ui =
      typeof Symbol == 'function' && typeof Symbol.for == 'function'
        ? Symbol.for('nodejs.util.inspect.custom')
        : null
  Ke.Buffer = T
  Ke.SlowBuffer = ka
  Ke.INSPECT_MAX_BYTES = 50
  var lr = 2147483647
  Ke.kMaxLength = lr
  T.TYPED_ARRAY_SUPPORT = Ca()
  !T.TYPED_ARRAY_SUPPORT &&
    typeof console < 'u' &&
    typeof console.error == 'function' &&
    console.error(
      'This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.',
    )
  function Ca() {
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
  Object.defineProperty(T.prototype, 'parent', {
    enumerable: !0,
    get: function () {
      if (T.isBuffer(this)) return this.buffer
    },
  })
  Object.defineProperty(T.prototype, 'offset', {
    enumerable: !0,
    get: function () {
      if (T.isBuffer(this)) return this.byteOffset
    },
  })
  function xe(e) {
    if (e > lr)
      throw new RangeError('The value "' + e + '" is invalid for option "size"')
    let t = new Uint8Array(e)
    return Object.setPrototypeOf(t, T.prototype), t
  }
  function T(e, t, r) {
    if (typeof e == 'number') {
      if (typeof t == 'string')
        throw new TypeError(
          'The "string" argument must be of type string. Received type number',
        )
      return un(e)
    }
    return fi(e, t, r)
  }
  T.poolSize = 8192
  function fi(e, t, r) {
    if (typeof e == 'string') return Aa(e, t)
    if (ArrayBuffer.isView(e)) return Sa(e)
    if (e == null)
      throw new TypeError(
        'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
          typeof e,
      )
    if (
      me(e, ArrayBuffer) ||
      (e && me(e.buffer, ArrayBuffer)) ||
      (typeof SharedArrayBuffer < 'u' &&
        (me(e, SharedArrayBuffer) || (e && me(e.buffer, SharedArrayBuffer))))
    )
      return hi(e, t, r)
    if (typeof e == 'number')
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number',
      )
    let n = e.valueOf && e.valueOf()
    if (n != null && n !== e) return T.from(n, t, r)
    let i = Ia(e)
    if (i) return i
    if (
      typeof Symbol < 'u' &&
      Symbol.toPrimitive != null &&
      typeof e[Symbol.toPrimitive] == 'function'
    )
      return T.from(e[Symbol.toPrimitive]('string'), t, r)
    throw new TypeError(
      'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
        typeof e,
    )
  }
  T.from = function (e, t, r) {
    return fi(e, t, r)
  }
  Object.setPrototypeOf(T.prototype, Uint8Array.prototype)
  Object.setPrototypeOf(T, Uint8Array)
  function gi(e) {
    if (typeof e != 'number')
      throw new TypeError('"size" argument must be of type number')
    if (e < 0)
      throw new RangeError('The value "' + e + '" is invalid for option "size"')
  }
  function Ra(e, t, r) {
    return (
      gi(e),
      e <= 0
        ? xe(e)
        : t !== void 0
          ? typeof r == 'string'
            ? xe(e).fill(t, r)
            : xe(e).fill(t)
          : xe(e)
    )
  }
  T.alloc = function (e, t, r) {
    return Ra(e, t, r)
  }
  function un(e) {
    return gi(e), xe(e < 0 ? 0 : cn(e) | 0)
  }
  T.allocUnsafe = function (e) {
    return un(e)
  }
  T.allocUnsafeSlow = function (e) {
    return un(e)
  }
  function Aa(e, t) {
    if (((typeof t != 'string' || t === '') && (t = 'utf8'), !T.isEncoding(t)))
      throw new TypeError('Unknown encoding: ' + t)
    let r = yi(e, t) | 0,
      n = xe(r),
      i = n.write(e, t)
    return i !== r && (n = n.slice(0, i)), n
  }
  function an(e) {
    let t = e.length < 0 ? 0 : cn(e.length) | 0,
      r = xe(t)
    for (let n = 0; n < t; n += 1) r[n] = e[n] & 255
    return r
  }
  function Sa(e) {
    if (me(e, Uint8Array)) {
      let t = new Uint8Array(e)
      return hi(t.buffer, t.byteOffset, t.byteLength)
    }
    return an(e)
  }
  function hi(e, t, r) {
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
      Object.setPrototypeOf(n, T.prototype),
      n
    )
  }
  function Ia(e) {
    if (T.isBuffer(e)) {
      let t = cn(e.length) | 0,
        r = xe(t)
      return r.length === 0 || e.copy(r, 0, 0, t), r
    }
    if (e.length !== void 0)
      return typeof e.length != 'number' || mn(e.length) ? xe(0) : an(e)
    if (e.type === 'Buffer' && Array.isArray(e.data)) return an(e.data)
  }
  function cn(e) {
    if (e >= lr)
      throw new RangeError(
        'Attempt to allocate Buffer larger than maximum size: 0x' +
          lr.toString(16) +
          ' bytes',
      )
    return e | 0
  }
  function ka(e) {
    return +e != e && (e = 0), T.alloc(+e)
  }
  T.isBuffer = function (e) {
    return e != null && e._isBuffer === !0 && e !== T.prototype
  }
  T.compare = function (e, t) {
    if (
      (me(e, Uint8Array) && (e = T.from(e, e.offset, e.byteLength)),
      me(t, Uint8Array) && (t = T.from(t, t.offset, t.byteLength)),
      !T.isBuffer(e) || !T.isBuffer(t))
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
  T.isEncoding = function (e) {
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
  T.concat = function (e, t) {
    if (!Array.isArray(e))
      throw new TypeError('"list" argument must be an Array of Buffers')
    if (e.length === 0) return T.alloc(0)
    let r
    if (t === void 0) for (t = 0, r = 0; r < e.length; ++r) t += e[r].length
    let n = T.allocUnsafe(t),
      i = 0
    for (r = 0; r < e.length; ++r) {
      let o = e[r]
      if (me(o, Uint8Array))
        i + o.length > n.length
          ? (T.isBuffer(o) || (o = T.from(o)), o.copy(n, i))
          : Uint8Array.prototype.set.call(n, o, i)
      else if (T.isBuffer(o)) o.copy(n, i)
      else throw new TypeError('"list" argument must be an Array of Buffers')
      i += o.length
    }
    return n
  }
  function yi(e, t) {
    if (T.isBuffer(e)) return e.length
    if (ArrayBuffer.isView(e) || me(e, ArrayBuffer)) return e.byteLength
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
          return ln(e).length
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return r * 2
        case 'hex':
          return r >>> 1
        case 'base64':
          return Ri(e).length
        default:
          if (i) return n ? -1 : ln(e).length
          ;(t = ('' + t).toLowerCase()), (i = !0)
      }
  }
  T.byteLength = yi
  function Oa(e, t, r) {
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
          return $a(this, t, r)
        case 'utf8':
        case 'utf-8':
          return Ei(this, t, r)
        case 'ascii':
          return Ua(this, t, r)
        case 'latin1':
        case 'binary':
          return qa(this, t, r)
        case 'base64':
          return La(this, t, r)
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return Va(this, t, r)
        default:
          if (n) throw new TypeError('Unknown encoding: ' + e)
          ;(e = (e + '').toLowerCase()), (n = !0)
      }
  }
  T.prototype._isBuffer = !0
  function Le(e, t, r) {
    let n = e[t]
    ;(e[t] = e[r]), (e[r] = n)
  }
  T.prototype.swap16 = function () {
    let e = this.length
    if (e % 2 !== 0)
      throw new RangeError('Buffer size must be a multiple of 16-bits')
    for (let t = 0; t < e; t += 2) Le(this, t, t + 1)
    return this
  }
  T.prototype.swap32 = function () {
    let e = this.length
    if (e % 4 !== 0)
      throw new RangeError('Buffer size must be a multiple of 32-bits')
    for (let t = 0; t < e; t += 4) Le(this, t, t + 3), Le(this, t + 1, t + 2)
    return this
  }
  T.prototype.swap64 = function () {
    let e = this.length
    if (e % 8 !== 0)
      throw new RangeError('Buffer size must be a multiple of 64-bits')
    for (let t = 0; t < e; t += 8)
      Le(this, t, t + 7),
        Le(this, t + 1, t + 6),
        Le(this, t + 2, t + 5),
        Le(this, t + 3, t + 4)
    return this
  }
  T.prototype.toString = function () {
    let e = this.length
    return e === 0
      ? ''
      : arguments.length === 0
        ? Ei(this, 0, e)
        : Oa.apply(this, arguments)
  }
  T.prototype.toLocaleString = T.prototype.toString
  T.prototype.equals = function (e) {
    if (!T.isBuffer(e)) throw new TypeError('Argument must be a Buffer')
    return this === e ? !0 : T.compare(this, e) === 0
  }
  T.prototype.inspect = function () {
    let e = '',
      t = Ke.INSPECT_MAX_BYTES
    return (
      (e = this.toString('hex', 0, t)
        .replace(/(.{2})/g, '$1 ')
        .trim()),
      this.length > t && (e += ' ... '),
      '<Buffer ' + e + '>'
    )
  }
  ui && (T.prototype[ui] = T.prototype.inspect)
  T.prototype.compare = function (e, t, r, n, i) {
    if (
      (me(e, Uint8Array) && (e = T.from(e, e.offset, e.byteLength)),
      !T.isBuffer(e))
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
  function wi(e, t, r, n, i) {
    if (e.length === 0) return -1
    if (
      (typeof r == 'string'
        ? ((n = r), (r = 0))
        : r > 2147483647
          ? (r = 2147483647)
          : r < -2147483648 && (r = -2147483648),
      (r = +r),
      mn(r) && (r = i ? 0 : e.length - 1),
      r < 0 && (r = e.length + r),
      r >= e.length)
    ) {
      if (i) return -1
      r = e.length - 1
    } else if (r < 0)
      if (i) r = 0
      else return -1
    if ((typeof t == 'string' && (t = T.from(t, n)), T.isBuffer(t)))
      return t.length === 0 ? -1 : ci(e, t, r, n, i)
    if (typeof t == 'number')
      return (
        (t = t & 255),
        typeof Uint8Array.prototype.indexOf == 'function'
          ? i
            ? Uint8Array.prototype.indexOf.call(e, t, r)
            : Uint8Array.prototype.lastIndexOf.call(e, t, r)
          : ci(e, [t], r, n, i)
      )
    throw new TypeError('val must be string, number or Buffer')
  }
  function ci(e, t, r, n, i) {
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
  T.prototype.includes = function (e, t, r) {
    return this.indexOf(e, t, r) !== -1
  }
  T.prototype.indexOf = function (e, t, r) {
    return wi(this, e, t, r, !0)
  }
  T.prototype.lastIndexOf = function (e, t, r) {
    return wi(this, e, t, r, !1)
  }
  function Da(e, t, r, n) {
    r = Number(r) || 0
    let i = e.length - r
    n ? ((n = Number(n)), n > i && (n = i)) : (n = i)
    let o = t.length
    n > o / 2 && (n = o / 2)
    let s
    for (s = 0; s < n; ++s) {
      let a = parseInt(t.substr(s * 2, 2), 16)
      if (mn(a)) return s
      e[r + s] = a
    }
    return s
  }
  function Ma(e, t, r, n) {
    return ur(ln(t, e.length - r), e, r, n)
  }
  function Na(e, t, r, n) {
    return ur(Qa(t), e, r, n)
  }
  function _a(e, t, r, n) {
    return ur(Ri(t), e, r, n)
  }
  function Fa(e, t, r, n) {
    return ur(Wa(t, e.length - r), e, r, n)
  }
  T.prototype.write = function (e, t, r, n) {
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
          return Da(this, e, t, r)
        case 'utf8':
        case 'utf-8':
          return Ma(this, e, t, r)
        case 'ascii':
        case 'latin1':
        case 'binary':
          return Na(this, e, t, r)
        case 'base64':
          return _a(this, e, t, r)
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return Fa(this, e, t, r)
        default:
          if (o) throw new TypeError('Unknown encoding: ' + n)
          ;(n = ('' + n).toLowerCase()), (o = !0)
      }
  }
  T.prototype.toJSON = function () {
    return {
      type: 'Buffer',
      data: Array.prototype.slice.call(this._arr || this, 0),
    }
  }
  function La(e, t, r) {
    return t === 0 && r === e.length
      ? sn.fromByteArray(e)
      : sn.fromByteArray(e.slice(t, r))
  }
  function Ei(e, t, r) {
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
    return Ba(n)
  }
  var pi = 4096
  function Ba(e) {
    let t = e.length
    if (t <= pi) return String.fromCharCode.apply(String, e)
    let r = '',
      n = 0
    for (; n < t; )
      r += String.fromCharCode.apply(String, e.slice(n, (n += pi)))
    return r
  }
  function Ua(e, t, r) {
    let n = ''
    r = Math.min(e.length, r)
    for (let i = t; i < r; ++i) n += String.fromCharCode(e[i] & 127)
    return n
  }
  function qa(e, t, r) {
    let n = ''
    r = Math.min(e.length, r)
    for (let i = t; i < r; ++i) n += String.fromCharCode(e[i])
    return n
  }
  function $a(e, t, r) {
    let n = e.length
    ;(!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n)
    let i = ''
    for (let o = t; o < r; ++o) i += Ha[e[o]]
    return i
  }
  function Va(e, t, r) {
    let n = e.slice(t, r),
      i = ''
    for (let o = 0; o < n.length - 1; o += 2)
      i += String.fromCharCode(n[o] + n[o + 1] * 256)
    return i
  }
  T.prototype.slice = function (e, t) {
    let r = this.length
    ;(e = ~~e),
      (t = t === void 0 ? r : ~~t),
      e < 0 ? ((e += r), e < 0 && (e = 0)) : e > r && (e = r),
      t < 0 ? ((t += r), t < 0 && (t = 0)) : t > r && (t = r),
      t < e && (t = e)
    let n = this.subarray(e, t)
    return Object.setPrototypeOf(n, T.prototype), n
  }
  function H(e, t, r) {
    if (e % 1 !== 0 || e < 0) throw new RangeError('offset is not uint')
    if (e + t > r) throw new RangeError('Trying to access beyond buffer length')
  }
  T.prototype.readUintLE = T.prototype.readUIntLE = function (e, t, r) {
    ;(e = e >>> 0), (t = t >>> 0), r || H(e, t, this.length)
    let n = this[e],
      i = 1,
      o = 0
    for (; ++o < t && (i *= 256); ) n += this[e + o] * i
    return n
  }
  T.prototype.readUintBE = T.prototype.readUIntBE = function (e, t, r) {
    ;(e = e >>> 0), (t = t >>> 0), r || H(e, t, this.length)
    let n = this[e + --t],
      i = 1
    for (; t > 0 && (i *= 256); ) n += this[e + --t] * i
    return n
  }
  T.prototype.readUint8 = T.prototype.readUInt8 = function (e, t) {
    return (e = e >>> 0), t || H(e, 1, this.length), this[e]
  }
  T.prototype.readUint16LE = T.prototype.readUInt16LE = function (e, t) {
    return (
      (e = e >>> 0), t || H(e, 2, this.length), this[e] | (this[e + 1] << 8)
    )
  }
  T.prototype.readUint16BE = T.prototype.readUInt16BE = function (e, t) {
    return (
      (e = e >>> 0), t || H(e, 2, this.length), (this[e] << 8) | this[e + 1]
    )
  }
  T.prototype.readUint32LE = T.prototype.readUInt32LE = function (e, t) {
    return (
      (e = e >>> 0),
      t || H(e, 4, this.length),
      (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
        this[e + 3] * 16777216
    )
  }
  T.prototype.readUint32BE = T.prototype.readUInt32BE = function (e, t) {
    return (
      (e = e >>> 0),
      t || H(e, 4, this.length),
      this[e] * 16777216 +
        ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
    )
  }
  T.prototype.readBigUInt64LE = Se(function (e) {
    ;(e = e >>> 0), He(e, 'offset')
    let t = this[e],
      r = this[e + 7]
    ;(t === void 0 || r === void 0) && vt(e, this.length - 8)
    let n = t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24,
      i = this[++e] + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + r * 2 ** 24
    return BigInt(n) + (BigInt(i) << BigInt(32))
  })
  T.prototype.readBigUInt64BE = Se(function (e) {
    ;(e = e >>> 0), He(e, 'offset')
    let t = this[e],
      r = this[e + 7]
    ;(t === void 0 || r === void 0) && vt(e, this.length - 8)
    let n = t * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e],
      i = this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + r
    return (BigInt(n) << BigInt(32)) + BigInt(i)
  })
  T.prototype.readIntLE = function (e, t, r) {
    ;(e = e >>> 0), (t = t >>> 0), r || H(e, t, this.length)
    let n = this[e],
      i = 1,
      o = 0
    for (; ++o < t && (i *= 256); ) n += this[e + o] * i
    return (i *= 128), n >= i && (n -= Math.pow(2, 8 * t)), n
  }
  T.prototype.readIntBE = function (e, t, r) {
    ;(e = e >>> 0), (t = t >>> 0), r || H(e, t, this.length)
    let n = t,
      i = 1,
      o = this[e + --n]
    for (; n > 0 && (i *= 256); ) o += this[e + --n] * i
    return (i *= 128), o >= i && (o -= Math.pow(2, 8 * t)), o
  }
  T.prototype.readInt8 = function (e, t) {
    return (
      (e = e >>> 0),
      t || H(e, 1, this.length),
      this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e]
    )
  }
  T.prototype.readInt16LE = function (e, t) {
    ;(e = e >>> 0), t || H(e, 2, this.length)
    let r = this[e] | (this[e + 1] << 8)
    return r & 32768 ? r | 4294901760 : r
  }
  T.prototype.readInt16BE = function (e, t) {
    ;(e = e >>> 0), t || H(e, 2, this.length)
    let r = this[e + 1] | (this[e] << 8)
    return r & 32768 ? r | 4294901760 : r
  }
  T.prototype.readInt32LE = function (e, t) {
    return (
      (e = e >>> 0),
      t || H(e, 4, this.length),
      this[e] | (this[e + 1] << 8) | (this[e + 2] << 16) | (this[e + 3] << 24)
    )
  }
  T.prototype.readInt32BE = function (e, t) {
    return (
      (e = e >>> 0),
      t || H(e, 4, this.length),
      (this[e] << 24) | (this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3]
    )
  }
  T.prototype.readBigInt64LE = Se(function (e) {
    ;(e = e >>> 0), He(e, 'offset')
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
  T.prototype.readBigInt64BE = Se(function (e) {
    ;(e = e >>> 0), He(e, 'offset')
    let t = this[e],
      r = this[e + 7]
    ;(t === void 0 || r === void 0) && vt(e, this.length - 8)
    let n = (t << 24) + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e]
    return (
      (BigInt(n) << BigInt(32)) +
      BigInt(this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + r)
    )
  })
  T.prototype.readFloatLE = function (e, t) {
    return (e = e >>> 0), t || H(e, 4, this.length), We.read(this, e, !0, 23, 4)
  }
  T.prototype.readFloatBE = function (e, t) {
    return (e = e >>> 0), t || H(e, 4, this.length), We.read(this, e, !1, 23, 4)
  }
  T.prototype.readDoubleLE = function (e, t) {
    return (e = e >>> 0), t || H(e, 8, this.length), We.read(this, e, !0, 52, 8)
  }
  T.prototype.readDoubleBE = function (e, t) {
    return (e = e >>> 0), t || H(e, 8, this.length), We.read(this, e, !1, 52, 8)
  }
  function re(e, t, r, n, i, o) {
    if (!T.isBuffer(e))
      throw new TypeError('"buffer" argument must be a Buffer instance')
    if (t > i || t < o)
      throw new RangeError('"value" argument is out of bounds')
    if (r + n > e.length) throw new RangeError('Index out of range')
  }
  T.prototype.writeUintLE = T.prototype.writeUIntLE = function (e, t, r, n) {
    if (((e = +e), (t = t >>> 0), (r = r >>> 0), !n)) {
      let s = Math.pow(2, 8 * r) - 1
      re(this, e, t, r, s, 0)
    }
    let i = 1,
      o = 0
    for (this[t] = e & 255; ++o < r && (i *= 256); ) this[t + o] = (e / i) & 255
    return t + r
  }
  T.prototype.writeUintBE = T.prototype.writeUIntBE = function (e, t, r, n) {
    if (((e = +e), (t = t >>> 0), (r = r >>> 0), !n)) {
      let s = Math.pow(2, 8 * r) - 1
      re(this, e, t, r, s, 0)
    }
    let i = r - 1,
      o = 1
    for (this[t + i] = e & 255; --i >= 0 && (o *= 256); )
      this[t + i] = (e / o) & 255
    return t + r
  }
  T.prototype.writeUint8 = T.prototype.writeUInt8 = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || re(this, e, t, 1, 255, 0),
      (this[t] = e & 255),
      t + 1
    )
  }
  T.prototype.writeUint16LE = T.prototype.writeUInt16LE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || re(this, e, t, 2, 65535, 0),
      (this[t] = e & 255),
      (this[t + 1] = e >>> 8),
      t + 2
    )
  }
  T.prototype.writeUint16BE = T.prototype.writeUInt16BE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || re(this, e, t, 2, 65535, 0),
      (this[t] = e >>> 8),
      (this[t + 1] = e & 255),
      t + 2
    )
  }
  T.prototype.writeUint32LE = T.prototype.writeUInt32LE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || re(this, e, t, 4, 4294967295, 0),
      (this[t + 3] = e >>> 24),
      (this[t + 2] = e >>> 16),
      (this[t + 1] = e >>> 8),
      (this[t] = e & 255),
      t + 4
    )
  }
  T.prototype.writeUint32BE = T.prototype.writeUInt32BE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || re(this, e, t, 4, 4294967295, 0),
      (this[t] = e >>> 24),
      (this[t + 1] = e >>> 16),
      (this[t + 2] = e >>> 8),
      (this[t + 3] = e & 255),
      t + 4
    )
  }
  function bi(e, t, r, n, i) {
    Ci(t, n, i, e, r, 7)
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
  function xi(e, t, r, n, i) {
    Ci(t, n, i, e, r, 7)
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
  T.prototype.writeBigUInt64LE = Se(function (e, t = 0) {
    return bi(this, e, t, BigInt(0), BigInt('0xffffffffffffffff'))
  })
  T.prototype.writeBigUInt64BE = Se(function (e, t = 0) {
    return xi(this, e, t, BigInt(0), BigInt('0xffffffffffffffff'))
  })
  T.prototype.writeIntLE = function (e, t, r, n) {
    if (((e = +e), (t = t >>> 0), !n)) {
      let a = Math.pow(2, 8 * r - 1)
      re(this, e, t, r, a - 1, -a)
    }
    let i = 0,
      o = 1,
      s = 0
    for (this[t] = e & 255; ++i < r && (o *= 256); )
      e < 0 && s === 0 && this[t + i - 1] !== 0 && (s = 1),
        (this[t + i] = (((e / o) >> 0) - s) & 255)
    return t + r
  }
  T.prototype.writeIntBE = function (e, t, r, n) {
    if (((e = +e), (t = t >>> 0), !n)) {
      let a = Math.pow(2, 8 * r - 1)
      re(this, e, t, r, a - 1, -a)
    }
    let i = r - 1,
      o = 1,
      s = 0
    for (this[t + i] = e & 255; --i >= 0 && (o *= 256); )
      e < 0 && s === 0 && this[t + i + 1] !== 0 && (s = 1),
        (this[t + i] = (((e / o) >> 0) - s) & 255)
    return t + r
  }
  T.prototype.writeInt8 = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || re(this, e, t, 1, 127, -128),
      e < 0 && (e = 255 + e + 1),
      (this[t] = e & 255),
      t + 1
    )
  }
  T.prototype.writeInt16LE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || re(this, e, t, 2, 32767, -32768),
      (this[t] = e & 255),
      (this[t + 1] = e >>> 8),
      t + 2
    )
  }
  T.prototype.writeInt16BE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || re(this, e, t, 2, 32767, -32768),
      (this[t] = e >>> 8),
      (this[t + 1] = e & 255),
      t + 2
    )
  }
  T.prototype.writeInt32LE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || re(this, e, t, 4, 2147483647, -2147483648),
      (this[t] = e & 255),
      (this[t + 1] = e >>> 8),
      (this[t + 2] = e >>> 16),
      (this[t + 3] = e >>> 24),
      t + 4
    )
  }
  T.prototype.writeInt32BE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || re(this, e, t, 4, 2147483647, -2147483648),
      e < 0 && (e = 4294967295 + e + 1),
      (this[t] = e >>> 24),
      (this[t + 1] = e >>> 16),
      (this[t + 2] = e >>> 8),
      (this[t + 3] = e & 255),
      t + 4
    )
  }
  T.prototype.writeBigInt64LE = Se(function (e, t = 0) {
    return bi(
      this,
      e,
      t,
      -BigInt('0x8000000000000000'),
      BigInt('0x7fffffffffffffff'),
    )
  })
  T.prototype.writeBigInt64BE = Se(function (e, t = 0) {
    return xi(
      this,
      e,
      t,
      -BigInt('0x8000000000000000'),
      BigInt('0x7fffffffffffffff'),
    )
  })
  function Pi(e, t, r, n, i, o) {
    if (r + n > e.length) throw new RangeError('Index out of range')
    if (r < 0) throw new RangeError('Index out of range')
  }
  function vi(e, t, r, n, i) {
    return (
      (t = +t),
      (r = r >>> 0),
      i || Pi(e, t, r, 4, 34028234663852886e22, -34028234663852886e22),
      We.write(e, t, r, n, 23, 4),
      r + 4
    )
  }
  T.prototype.writeFloatLE = function (e, t, r) {
    return vi(this, e, t, !0, r)
  }
  T.prototype.writeFloatBE = function (e, t, r) {
    return vi(this, e, t, !1, r)
  }
  function Ti(e, t, r, n, i) {
    return (
      (t = +t),
      (r = r >>> 0),
      i || Pi(e, t, r, 8, 17976931348623157e292, -17976931348623157e292),
      We.write(e, t, r, n, 52, 8),
      r + 8
    )
  }
  T.prototype.writeDoubleLE = function (e, t, r) {
    return Ti(this, e, t, !0, r)
  }
  T.prototype.writeDoubleBE = function (e, t, r) {
    return Ti(this, e, t, !1, r)
  }
  T.prototype.copy = function (e, t, r, n) {
    if (!T.isBuffer(e)) throw new TypeError('argument should be a Buffer')
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
  T.prototype.fill = function (e, t, r, n) {
    if (typeof e == 'string') {
      if (
        (typeof t == 'string'
          ? ((n = t), (t = 0), (r = this.length))
          : typeof r == 'string' && ((n = r), (r = this.length)),
        n !== void 0 && typeof n != 'string')
      )
        throw new TypeError('encoding must be a string')
      if (typeof n == 'string' && !T.isEncoding(n))
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
      let o = T.isBuffer(e) ? e : T.from(e, n),
        s = o.length
      if (s === 0)
        throw new TypeError(
          'The value "' + e + '" is invalid for argument "value"',
        )
      for (i = 0; i < r - t; ++i) this[i + t] = o[i % s]
    }
    return this
  }
  var Qe = {}
  function pn(e, t, r) {
    Qe[e] = class extends r {
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
  pn(
    'ERR_BUFFER_OUT_OF_BOUNDS',
    function (e) {
      return e
        ? `${e} is outside of buffer bounds`
        : 'Attempt to access memory outside buffer bounds'
    },
    RangeError,
  )
  pn(
    'ERR_INVALID_ARG_TYPE',
    function (e, t) {
      return `The "${e}" argument must be of type number. Received type ${typeof t}`
    },
    TypeError,
  )
  pn(
    'ERR_OUT_OF_RANGE',
    function (e, t, r) {
      let n = `The value of "${e}" is out of range.`,
        i = r
      return (
        Number.isInteger(r) && Math.abs(r) > 2 ** 32
          ? (i = mi(String(r)))
          : typeof r == 'bigint' &&
            ((i = String(r)),
            (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) &&
              (i = mi(i)),
            (i += 'n')),
        (n += ` It must be ${t}. Received ${i}`),
        n
      )
    },
    RangeError,
  )
  function mi(e) {
    let t = '',
      r = e.length,
      n = e[0] === '-' ? 1 : 0
    for (; r >= n + 4; r -= 3) t = `_${e.slice(r - 3, r)}${t}`
    return `${e.slice(0, r)}${t}`
  }
  function ja(e, t, r) {
    He(t, 'offset'),
      (e[t] === void 0 || e[t + r] === void 0) && vt(t, e.length - (r + 1))
  }
  function Ci(e, t, r, n, i, o) {
    if (e > r || e < t) {
      let s = typeof t == 'bigint' ? 'n' : '',
        a
      throw (
        (o > 3
          ? t === 0 || t === BigInt(0)
            ? (a = `>= 0${s} and < 2${s} ** ${(o + 1) * 8}${s}`)
            : (a = `>= -(2${s} ** ${(o + 1) * 8 - 1}${s}) and < 2 ** ${(o + 1) * 8 - 1}${s}`)
          : (a = `>= ${t}${s} and <= ${r}${s}`),
        new Qe.ERR_OUT_OF_RANGE('value', a, e))
      )
    }
    ja(n, i, o)
  }
  function He(e, t) {
    if (typeof e != 'number') throw new Qe.ERR_INVALID_ARG_TYPE(t, 'number', e)
  }
  function vt(e, t, r) {
    throw Math.floor(e) !== e
      ? (He(e, r), new Qe.ERR_OUT_OF_RANGE(r || 'offset', 'an integer', e))
      : t < 0
        ? new Qe.ERR_BUFFER_OUT_OF_BOUNDS()
        : new Qe.ERR_OUT_OF_RANGE(
            r || 'offset',
            `>= ${r ? 1 : 0} and <= ${t}`,
            e,
          )
  }
  var Ga = /[^+/0-9A-Za-z-_]/g
  function Ja(e) {
    if (((e = e.split('=')[0]), (e = e.trim().replace(Ga, '')), e.length < 2))
      return ''
    for (; e.length % 4 !== 0; ) e = e + '='
    return e
  }
  function ln(e, t) {
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
  function Qa(e) {
    let t = []
    for (let r = 0; r < e.length; ++r) t.push(e.charCodeAt(r) & 255)
    return t
  }
  function Wa(e, t) {
    let r,
      n,
      i,
      o = []
    for (let s = 0; s < e.length && !((t -= 2) < 0); ++s)
      (r = e.charCodeAt(s)), (n = r >> 8), (i = r % 256), o.push(i), o.push(n)
    return o
  }
  function Ri(e) {
    return sn.toByteArray(Ja(e))
  }
  function ur(e, t, r, n) {
    let i
    for (i = 0; i < n && !(i + r >= t.length || i >= e.length); ++i)
      t[i + r] = e[i]
    return i
  }
  function me(e, t) {
    return (
      e instanceof t ||
      (e != null &&
        e.constructor != null &&
        e.constructor.name != null &&
        e.constructor.name === t.name)
    )
  }
  function mn(e) {
    return e !== e
  }
  var Ha = (function () {
    let e = '0123456789abcdef',
      t = new Array(256)
    for (let r = 0; r < 16; ++r) {
      let n = r * 16
      for (let i = 0; i < 16; ++i) t[n + i] = e[r] + e[i]
    }
    return t
  })()
  function Se(e) {
    return typeof BigInt > 'u' ? Ka : e
  }
  function Ka() {
    throw new Error('BigInt not supported')
  }
})
var w,
  d = Ae(() => {
    'use strict'
    w = Je(Ai())
  })
function il() {
  return !1
}
var ol,
  sl,
  Gi,
  Ji = Ae(() => {
    'use strict'
    d()
    u()
    c()
    p()
    m()
    ;(ol = {}), (sl = { existsSync: il, promises: ol }), (Gi = sl)
  })
function al(...e) {
  return e.join('/')
}
function ll(...e) {
  return e.join('/')
}
var Qi,
  ul,
  cl,
  Rt,
  Wi = Ae(() => {
    'use strict'
    d()
    u()
    c()
    p()
    m()
    ;(Qi = '/'),
      (ul = { sep: Qi }),
      (cl = { resolve: al, posix: ul, join: ll, sep: Qi }),
      (Rt = cl)
  })
var Hi = Fe((fd, pl) => {
  pl.exports = {
    name: '@prisma/internals',
    version: '6.4.1',
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
      '@babel/helper-validator-identifier': '7.24.7',
      '@opentelemetry/api': '1.9.0',
      '@swc/core': '1.2.204',
      '@swc/jest': '0.2.37',
      '@types/babel__helper-validator-identifier': '7.15.2',
      '@types/jest': '29.5.14',
      '@types/node': '18.19.31',
      '@types/resolve': '1.20.6',
      archiver: '6.0.2',
      'checkpoint-client': '1.1.33',
      'cli-truncate': '2.1.0',
      dotenv: '16.4.7',
      esbuild: '0.24.2',
      'escape-string-regexp': '4.0.0',
      execa: '5.1.1',
      'fast-glob': '3.3.3',
      'find-up': '5.0.0',
      'fp-ts': '2.16.9',
      'fs-extra': '11.1.1',
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
      'replace-string': '3.1.0',
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
        '6.4.0-29.a9055b89e58b4b5bfb59600785423b1db3d0e75d',
      '@prisma/schema-files-loader': 'workspace:*',
      arg: '5.0.2',
      prompts: '2.4.2',
    },
    peerDependencies: { typescript: '>=5.1.0' },
    peerDependenciesMeta: { typescript: { optional: !0 } },
    sideEffects: !1,
  }
})
var gr,
  Yi = Ae(() => {
    'use strict'
    d()
    u()
    c()
    p()
    m()
    gr = class {
      constructor() {
        this.events = {}
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
var Xi = Fe((Xd, Zi) => {
  'use strict'
  d()
  u()
  c()
  p()
  m()
  Zi.exports = (e, t = 1, r) => {
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
var ro = Fe((mf, to) => {
  'use strict'
  d()
  u()
  c()
  p()
  m()
  to.exports = ({ onlyFirst: e = !1 } = {}) => {
    let t = [
      '[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)',
      '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))',
    ].join('|')
    return new RegExp(t, e ? void 0 : 'g')
  }
})
var io = Fe((wf, no) => {
  'use strict'
  d()
  u()
  c()
  p()
  m()
  var wl = ro()
  no.exports = e => (typeof e == 'string' ? e.replace(wl(), '') : e)
})
var On = Fe((sy, Po) => {
  'use strict'
  d()
  u()
  c()
  p()
  m()
  Po.exports = (function () {
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
        v,
        S,
        R,
        A,
        D,
        M,
        U,
        O,
        F = []
      for (l = 0; l < i; l++) F.push(l + 1), F.push(t.charCodeAt(s + l))
      for (var L = F.length - 1; a < o - 3; )
        for (
          D = r.charCodeAt(s + (f = a)),
            M = r.charCodeAt(s + (g = a + 1)),
            U = r.charCodeAt(s + (h = a + 2)),
            O = r.charCodeAt(s + (v = a + 3)),
            S = a += 4,
            l = 0;
          l < L;
          l += 2
        )
          (R = F[l]),
            (A = F[l + 1]),
            (f = e(R, f, g, D, A)),
            (g = e(f, g, h, M, A)),
            (h = e(g, h, v, U, A)),
            (S = e(h, v, S, O, A)),
            (F[l] = S),
            (v = h),
            (h = g),
            (g = f),
            (f = R)
      for (; a < o; )
        for (D = r.charCodeAt(s + (f = a)), S = ++a, l = 0; l < L; l += 2)
          (R = F[l]), (F[l] = S = e(R, f, S, D, F[l + 1])), (f = R)
      return S
    }
  })()
})
var Xo = Fe((Vb, ic) => {
  ic.exports = {
    name: '@prisma/engines-version',
    version: '6.4.0-29.a9055b89e58b4b5bfb59600785423b1db3d0e75d',
    main: 'index.js',
    types: 'index.d.ts',
    license: 'Apache-2.0',
    author: 'Tim Suchanek <suchanek@prisma.io>',
    prisma: { enginesVersion: 'a9055b89e58b4b5bfb59600785423b1db3d0e75d' },
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
var op = {}
ar(op, {
  Debug: () => En,
  Decimal: () => he,
  Extensions: () => dn,
  MetricsClient: () => mt,
  PrismaClientInitializationError: () => Q,
  PrismaClientKnownRequestError: () => ne,
  PrismaClientRustPanicError: () => ve,
  PrismaClientUnknownRequestError: () => ie,
  PrismaClientValidationError: () => Z,
  Public: () => fn,
  Sql: () => se,
  createParam: () => jo,
  defineDmmfProperty: () => zo,
  deserializeJsonResponse: () => tt,
  deserializeRawResult: () => en,
  dmmfToRuntimeDataModel: () => Ko,
  empty: () => ts,
  getPrismaClient: () => fa,
  getRuntime: () => Wr,
  join: () => es,
  makeStrictEnum: () => ga,
  makeTypedQueryFactory: () => Yo,
  objectEnumValues: () => Dr,
  raw: () => $n,
  serializeJsonQuery: () => Ur,
  skip: () => Br,
  sqltag: () => Vn,
  warnEnvConflicts: () => void 0,
  warnOnce: () => It,
})
module.exports = Pa(op)
d()
u()
c()
p()
m()
var dn = {}
ar(dn, { defineExtension: () => Si, getExtensionContext: () => Ii })
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
function Si(e) {
  return typeof e == 'function' ? e : t => t.$extends(e)
}
d()
u()
c()
p()
m()
function Ii(e) {
  return e
}
var fn = {}
ar(fn, { validator: () => ki })
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
function Tt(e) {
  return {
    ok: !1,
    error: e,
    map() {
      return Tt(e)
    },
    flatMap() {
      return Tt(e)
    },
  }
}
var gn = class {
    constructor() {
      this.registeredErrors = []
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
  hn = e => {
    let t = new gn(),
      r = de(t, e.transactionContext.bind(e)),
      n = {
        adapterName: e.adapterName,
        errorRegistry: t,
        queryRaw: de(t, e.queryRaw.bind(e)),
        executeRaw: de(t, e.executeRaw.bind(e)),
        provider: e.provider,
        transactionContext: async (...i) => (await r(...i)).map(s => za(t, s)),
      }
    return (
      e.getConnectionInfo &&
        (n.getConnectionInfo = Za(t, e.getConnectionInfo.bind(e))),
      n
    )
  },
  za = (e, t) => {
    let r = de(e, t.startTransaction.bind(t))
    return {
      adapterName: t.adapterName,
      provider: t.provider,
      queryRaw: de(e, t.queryRaw.bind(t)),
      executeRaw: de(e, t.executeRaw.bind(t)),
      startTransaction: async (...n) => (await r(...n)).map(o => Ya(e, o)),
    }
  },
  Ya = (e, t) => ({
    adapterName: t.adapterName,
    provider: t.provider,
    options: t.options,
    queryRaw: de(e, t.queryRaw.bind(t)),
    executeRaw: de(e, t.executeRaw.bind(t)),
    commit: de(e, t.commit.bind(t)),
    rollback: de(e, t.rollback.bind(t)),
  })
function de(e, t) {
  return async (...r) => {
    try {
      return await t(...r)
    } catch (n) {
      let i = e.registerNewError(n)
      return Tt({ kind: 'GenericJs', id: i })
    }
  }
}
function Za(e, t) {
  return (...r) => {
    try {
      return t(...r)
    } catch (n) {
      let i = e.registerNewError(n)
      return Tt({ kind: 'GenericJs', id: i })
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
var yn,
  Oi,
  Di,
  Mi,
  Ni = !0
typeof y < 'u' &&
  (({
    FORCE_COLOR: yn,
    NODE_DISABLE_COLORS: Oi,
    NO_COLOR: Di,
    TERM: Mi,
  } = y.env || {}),
  (Ni = y.stdout && y.stdout.isTTY))
var Xa = {
  enabled:
    !Oi && Di == null && Mi !== 'dumb' && ((yn != null && yn !== '0') || Ni),
}
function j(e, t) {
  let r = new RegExp(`\\x1b\\[${t}m`, 'g'),
    n = `\x1B[${e}m`,
    i = `\x1B[${t}m`
  return function (o) {
    return !Xa.enabled || o == null
      ? o
      : n + (~('' + o).indexOf(i) ? o.replace(r, i + n) : o) + i
  }
}
var cm = j(0, 0),
  cr = j(1, 22),
  pr = j(2, 22),
  pm = j(3, 23),
  _i = j(4, 24),
  mm = j(7, 27),
  dm = j(8, 28),
  fm = j(9, 29),
  gm = j(30, 39),
  ze = j(31, 39),
  Fi = j(32, 39),
  Li = j(33, 39),
  Bi = j(34, 39),
  hm = j(35, 39),
  Ui = j(36, 39),
  ym = j(37, 39),
  qi = j(90, 39),
  wm = j(90, 39),
  Em = j(40, 49),
  bm = j(41, 49),
  xm = j(42, 49),
  Pm = j(43, 49),
  vm = j(44, 49),
  Tm = j(45, 49),
  Cm = j(46, 49),
  Rm = j(47, 49)
var el = 100,
  $i = ['green', 'yellow', 'blue', 'magenta', 'cyan', 'red'],
  mr = [],
  Vi = Date.now(),
  tl = 0,
  wn = typeof y < 'u' ? y.env : {}
globalThis.DEBUG ??= wn.DEBUG ?? ''
globalThis.DEBUG_COLORS ??= wn.DEBUG_COLORS ? wn.DEBUG_COLORS === 'true' : !0
var Ct = {
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
function rl(e) {
  let t = {
      color: $i[tl++ % $i.length],
      enabled: Ct.enabled(e),
      namespace: e,
      log: Ct.log,
      extend: () => {},
    },
    r = (...n) => {
      let { enabled: i, namespace: o, color: s, log: a } = t
      if (
        (n.length !== 0 && mr.push([o, ...n]),
        mr.length > el && mr.shift(),
        Ct.enabled(o) || i)
      ) {
        let l = n.map(g => (typeof g == 'string' ? g : nl(g))),
          f = `+${Date.now() - Vi}ms`
        ;(Vi = Date.now()), a(o, ...l, f)
      }
    }
  return new Proxy(r, { get: (n, i) => t[i], set: (n, i, o) => (t[i] = o) })
}
var En = new Proxy(rl, { get: (e, t) => Ct[t], set: (e, t, r) => (Ct[t] = r) })
function nl(e, t = 2) {
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
function ji() {
  mr.length = 0
}
var ee = En
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
var ml = Hi(),
  bn = ml.version
d()
u()
c()
p()
m()
var Ki = 'library'
function Ye(e) {
  let t = dl()
  return (
    t ||
    (e?.config.engineType === 'library'
      ? 'library'
      : e?.config.engineType === 'binary'
        ? 'binary'
        : e?.config.engineType === 'client'
          ? 'client'
          : Ki)
  )
}
function dl() {
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
var zi = 'prisma+postgres',
  dr = `${zi}:`
function xn(e) {
  return e?.startsWith(`${dr}//`) ?? !1
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
var fr
;(t => {
  let e
  ;(L => (
    (L.findUnique = 'findUnique'),
    (L.findUniqueOrThrow = 'findUniqueOrThrow'),
    (L.findFirst = 'findFirst'),
    (L.findFirstOrThrow = 'findFirstOrThrow'),
    (L.findMany = 'findMany'),
    (L.create = 'create'),
    (L.createMany = 'createMany'),
    (L.createManyAndReturn = 'createManyAndReturn'),
    (L.update = 'update'),
    (L.updateMany = 'updateMany'),
    (L.updateManyAndReturn = 'updateManyAndReturn'),
    (L.upsert = 'upsert'),
    (L.delete = 'delete'),
    (L.deleteMany = 'deleteMany'),
    (L.groupBy = 'groupBy'),
    (L.count = 'count'),
    (L.aggregate = 'aggregate'),
    (L.findRaw = 'findRaw'),
    (L.aggregateRaw = 'aggregateRaw')
  ))((e = t.ModelAction ||= {}))
})((fr ||= {}))
var St = {}
ar(St, {
  error: () => hl,
  info: () => gl,
  log: () => fl,
  query: () => yl,
  should: () => eo,
  tags: () => At,
  warn: () => Pn,
})
d()
u()
c()
p()
m()
var At = {
    error: ze('prisma:error'),
    warn: Li('prisma:warn'),
    info: Ui('prisma:info'),
    query: Bi('prisma:query'),
  },
  eo = { warn: () => !y.env.PRISMA_DISABLE_WARNINGS }
function fl(...e) {
  console.log(...e)
}
function Pn(e, ...t) {
  eo.warn() && console.warn(`${At.warn} ${e}`, ...t)
}
function gl(e, ...t) {
  console.info(`${At.info} ${e}`, ...t)
}
function hl(e, ...t) {
  console.error(`${At.error} ${e}`, ...t)
}
function yl(e, ...t) {
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
function vn(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t)
}
d()
u()
c()
p()
m()
var Tn = (e, t) => e.reduce((r, n) => ((r[t(n)] = n), r), {})
d()
u()
c()
p()
m()
function Ze(e, t) {
  let r = {}
  for (let n of Object.keys(e)) r[n] = t(e[n], n)
  return r
}
d()
u()
c()
p()
m()
function Cn(e, t) {
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
function _(e, t) {
  Object.defineProperty(e, 'name', { value: t, configurable: !0 })
}
d()
u()
c()
p()
m()
var oo = new Set(),
  It = (e, t, ...r) => {
    oo.has(e) || (oo.add(e), Pn(t, ...r))
  }
var Q = class e extends Error {
  constructor(t, r, n) {
    super(t),
      (this.name = 'PrismaClientInitializationError'),
      (this.clientVersion = r),
      (this.errorCode = n),
      Error.captureStackTrace(e)
  }
  get [Symbol.toStringTag]() {
    return 'PrismaClientInitializationError'
  }
}
_(Q, 'PrismaClientInitializationError')
d()
u()
c()
p()
m()
var ne = class extends Error {
  constructor(t, { code: r, clientVersion: n, meta: i, batchRequestIdx: o }) {
    super(t),
      (this.name = 'PrismaClientKnownRequestError'),
      (this.code = r),
      (this.clientVersion = n),
      (this.meta = i),
      Object.defineProperty(this, 'batchRequestIdx', {
        value: o,
        enumerable: !1,
        writable: !0,
      })
  }
  get [Symbol.toStringTag]() {
    return 'PrismaClientKnownRequestError'
  }
}
_(ne, 'PrismaClientKnownRequestError')
d()
u()
c()
p()
m()
var ve = class extends Error {
  constructor(t, r) {
    super(t),
      (this.name = 'PrismaClientRustPanicError'),
      (this.clientVersion = r)
  }
  get [Symbol.toStringTag]() {
    return 'PrismaClientRustPanicError'
  }
}
_(ve, 'PrismaClientRustPanicError')
d()
u()
c()
p()
m()
var ie = class extends Error {
  constructor(t, { clientVersion: r, batchRequestIdx: n }) {
    super(t),
      (this.name = 'PrismaClientUnknownRequestError'),
      (this.clientVersion = r),
      Object.defineProperty(this, 'batchRequestIdx', {
        value: n,
        writable: !0,
        enumerable: !1,
      })
  }
  get [Symbol.toStringTag]() {
    return 'PrismaClientUnknownRequestError'
  }
}
_(ie, 'PrismaClientUnknownRequestError')
d()
u()
c()
p()
m()
var Z = class extends Error {
  constructor(r, { clientVersion: n }) {
    super(r)
    this.name = 'PrismaClientValidationError'
    this.clientVersion = n
  }
  get [Symbol.toStringTag]() {
    return 'PrismaClientValidationError'
  }
}
_(Z, 'PrismaClientValidationError')
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
var Xe = 9e15,
  De = 1e9,
  Rn = '0123456789abcdef',
  wr =
    '2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058',
  Er =
    '3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789',
  An = {
    precision: 20,
    rounding: 4,
    modulo: 1,
    toExpNeg: -7,
    toExpPos: 21,
    minE: -Xe,
    maxE: Xe,
    crypto: !1,
  },
  co,
  Te,
  N = !0,
  xr = '[DecimalError] ',
  Oe = xr + 'Invalid argument: ',
  po = xr + 'Precision limit exceeded',
  mo = xr + 'crypto unavailable',
  fo = '[object Decimal]',
  X = Math.floor,
  W = Math.pow,
  El = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
  bl = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
  xl = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
  go = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
  ce = 1e7,
  k = 7,
  Pl = 9007199254740991,
  vl = wr.length - 1,
  Sn = Er.length - 1,
  C = { toStringTag: fo }
C.absoluteValue = C.abs = function () {
  var e = new this.constructor(this)
  return e.s < 0 && (e.s = 1), I(e)
}
C.ceil = function () {
  return I(new this.constructor(this), this.e + 1, 2)
}
C.clampedTo = C.clamp = function (e, t) {
  var r,
    n = this,
    i = n.constructor
  if (((e = new i(e)), (t = new i(t)), !e.s || !t.s)) return new i(NaN)
  if (e.gt(t)) throw Error(Oe + t)
  return (r = n.cmp(e)), r < 0 ? e : n.cmp(t) > 0 ? t : new i(n)
}
C.comparedTo = C.cmp = function (e) {
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
C.cosine = C.cos = function () {
  var e,
    t,
    r = this,
    n = r.constructor
  return r.d
    ? r.d[0]
      ? ((e = n.precision),
        (t = n.rounding),
        (n.precision = e + Math.max(r.e, r.sd()) + k),
        (n.rounding = 1),
        (r = Tl(n, bo(n, r))),
        (n.precision = e),
        (n.rounding = t),
        I(Te == 2 || Te == 3 ? r.neg() : r, e, t, !0))
      : new n(1)
    : new n(NaN)
}
C.cubeRoot = C.cbrt = function () {
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
    N = !1,
      o = g.s * W(g.s * g, 1 / 3),
      !o || Math.abs(o) == 1 / 0
        ? ((r = z(g.d)),
          (e = g.e),
          (o = (e - r.length + 1) % 3) && (r += o == 1 || o == -2 ? '0' : '00'),
          (o = W(r, 1 / 3)),
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
      (n = $(f.plus(g).times(a), f.plus(l), s + 2, 1)),
      z(a.d).slice(0, s) === (r = z(n.d)).slice(0, s))
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
  return (N = !0), I(n, e, h.rounding, t)
}
C.decimalPlaces = C.dp = function () {
  var e,
    t = this.d,
    r = NaN
  if (t) {
    if (((e = t.length - 1), (r = (e - X(this.e / k)) * k), (e = t[e]), e))
      for (; e % 10 == 0; e /= 10) r--
    r < 0 && (r = 0)
  }
  return r
}
C.dividedBy = C.div = function (e) {
  return $(this, new this.constructor(e))
}
C.dividedToIntegerBy = C.divToInt = function (e) {
  var t = this,
    r = t.constructor
  return I($(t, new r(e), 0, 1, 1), r.precision, r.rounding)
}
C.equals = C.eq = function (e) {
  return this.cmp(e) === 0
}
C.floor = function () {
  return I(new this.constructor(this), this.e + 1, 3)
}
C.greaterThan = C.gt = function (e) {
  return this.cmp(e) > 0
}
C.greaterThanOrEqualTo = C.gte = function (e) {
  var t = this.cmp(e)
  return t == 1 || t === 0
}
C.hyperbolicCosine = C.cosh = function () {
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
      ? ((e = Math.ceil(i / 3)), (t = (1 / vr(4, e)).toString()))
      : ((e = 16), (t = '2.3283064365386962890625e-10')),
    (o = et(s, 1, o.times(t), new s(1), !0))
  for (var l, f = e, g = new s(8); f--; )
    (l = o.times(o)), (o = a.minus(l.times(g.minus(l.times(g)))))
  return I(o, (s.precision = r), (s.rounding = n), !0)
}
C.hyperbolicSine = C.sinh = function () {
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
    i = et(o, 2, i, i, !0)
  else {
    ;(e = 1.4 * Math.sqrt(n)),
      (e = e > 16 ? 16 : e | 0),
      (i = i.times(1 / vr(5, e))),
      (i = et(o, 2, i, i, !0))
    for (var s, a = new o(5), l = new o(16), f = new o(20); e--; )
      (s = i.times(i)), (i = i.times(a.plus(s.times(l.times(s).plus(f)))))
  }
  return (o.precision = t), (o.rounding = r), I(i, t, r, !0)
}
C.hyperbolicTangent = C.tanh = function () {
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
        $(r.sinh(), r.cosh(), (n.precision = e), (n.rounding = t)))
    : new n(r.s)
}
C.inverseCosine = C.acos = function () {
  var e = this,
    t = e.constructor,
    r = e.abs().cmp(1),
    n = t.precision,
    i = t.rounding
  return r !== -1
    ? r === 0
      ? e.isNeg()
        ? fe(t, n, i)
        : new t(0)
      : new t(NaN)
    : e.isZero()
      ? fe(t, n + 4, i).times(0.5)
      : ((t.precision = n + 6),
        (t.rounding = 1),
        (e = new t(1).minus(e).div(e.plus(1)).sqrt().atan()),
        (t.precision = n),
        (t.rounding = i),
        e.times(2))
}
C.inverseHyperbolicCosine = C.acosh = function () {
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
        (N = !1),
        (r = r.times(r).minus(1).sqrt().plus(r)),
        (N = !0),
        (n.precision = e),
        (n.rounding = t),
        r.ln())
      : new n(r)
}
C.inverseHyperbolicSine = C.asinh = function () {
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
      (N = !1),
      (r = r.times(r).plus(1).sqrt().plus(r)),
      (N = !0),
      (n.precision = e),
      (n.rounding = t),
      r.ln())
}
C.inverseHyperbolicTangent = C.atanh = function () {
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
            (i = $(i.plus(1), new o(1).minus(i), r + e, 1)),
            (o.precision = e + 4),
            (o.rounding = 1),
            (i = i.ln()),
            (o.precision = e),
            (o.rounding = t),
            i.times(0.5)))
    : new o(NaN)
}
C.inverseSine = C.asin = function () {
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
          ? ((e = fe(o, r + 4, n).times(0.5)), (e.s = i.s), e)
          : new o(NaN)
        : ((o.precision = r + 6),
          (o.rounding = 1),
          (i = i.div(new o(1).minus(i.times(i)).sqrt().plus(1)).atan()),
          (o.precision = r),
          (o.rounding = n),
          i.times(2)))
}
C.inverseTangent = C.atan = function () {
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
    v = g.rounding
  if (f.isFinite()) {
    if (f.isZero()) return new g(f)
    if (f.abs().eq(1) && h + 4 <= Sn)
      return (s = fe(g, h + 4, v).times(0.25)), (s.s = f.s), s
  } else {
    if (!f.s) return new g(NaN)
    if (h + 4 <= Sn) return (s = fe(g, h + 4, v).times(0.5)), (s.s = f.s), s
  }
  for (
    g.precision = a = h + 10,
      g.rounding = 1,
      r = Math.min(28, (a / k + 2) | 0),
      e = r;
    e;
    --e
  )
    f = f.div(f.times(f).plus(1).sqrt().plus(1))
  for (
    N = !1, t = Math.ceil(a / k), n = 1, l = f.times(f), s = new g(f), i = f;
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
    (N = !0),
    I(s, (g.precision = h), (g.rounding = v), !0)
  )
}
C.isFinite = function () {
  return !!this.d
}
C.isInteger = C.isInt = function () {
  return !!this.d && X(this.e / k) > this.d.length - 2
}
C.isNaN = function () {
  return !this.s
}
C.isNegative = C.isNeg = function () {
  return this.s < 0
}
C.isPositive = C.isPos = function () {
  return this.s > 0
}
C.isZero = function () {
  return !!this.d && this.d[0] === 0
}
C.lessThan = C.lt = function (e) {
  return this.cmp(e) < 0
}
C.lessThanOrEqualTo = C.lte = function (e) {
  return this.cmp(e) < 1
}
C.logarithm = C.log = function (e) {
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
    v = g.rounding,
    S = 5
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
    ((N = !1),
    (a = h + S),
    (s = ke(f, a)),
    (n = t ? br(g, a + 10) : ke(e, a)),
    (l = $(s, n, a, 1)),
    kt(l.d, (i = h), v))
  )
    do
      if (
        ((a += 10),
        (s = ke(f, a)),
        (n = t ? br(g, a + 10) : ke(e, a)),
        (l = $(s, n, a, 1)),
        !o)
      ) {
        ;+z(l.d).slice(i + 1, i + 15) + 1 == 1e14 && (l = I(l, h + 1, 0))
        break
      }
    while (kt(l.d, (i += 10), v))
  return (N = !0), I(l, h, v)
}
C.minus = C.sub = function (e) {
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
    v,
    S = this,
    R = S.constructor
  if (((e = new R(e)), !S.d || !e.d))
    return (
      !S.s || !e.s
        ? (e = new R(NaN))
        : S.d
          ? (e.s = -e.s)
          : (e = new R(e.d || S.s !== e.s ? S : NaN)),
      e
    )
  if (S.s != e.s) return (e.s = -e.s), S.plus(e)
  if (
    ((f = S.d), (v = e.d), (a = R.precision), (l = R.rounding), !f[0] || !v[0])
  ) {
    if (v[0]) e.s = -e.s
    else if (f[0]) e = new R(S)
    else return new R(l === 3 ? -0 : 0)
    return N ? I(e, a, l) : e
  }
  if (((r = X(e.e / k)), (g = X(S.e / k)), (f = f.slice()), (o = g - r), o)) {
    for (
      h = o < 0,
        h
          ? ((t = f), (o = -o), (s = v.length))
          : ((t = v), (r = g), (s = f.length)),
        n = Math.max(Math.ceil(a / k), s) + 2,
        o > n && ((o = n), (t.length = 1)),
        t.reverse(),
        n = o;
      n--;

    )
      t.push(0)
    t.reverse()
  } else {
    for (n = f.length, s = v.length, h = n < s, h && (s = n), n = 0; n < s; n++)
      if (f[n] != v[n]) {
        h = f[n] < v[n]
        break
      }
    o = 0
  }
  for (
    h && ((t = f), (f = v), (v = t), (e.s = -e.s)),
      s = f.length,
      n = v.length - s;
    n > 0;
    --n
  )
    f[s++] = 0
  for (n = v.length; n > o; ) {
    if (f[--n] < v[n]) {
      for (i = n; i && f[--i] === 0; ) f[i] = ce - 1
      --f[i], (f[n] += ce)
    }
    f[n] -= v[n]
  }
  for (; f[--s] === 0; ) f.pop()
  for (; f[0] === 0; f.shift()) --r
  return f[0]
    ? ((e.d = f), (e.e = Pr(f, r)), N ? I(e, a, l) : e)
    : new R(l === 3 ? -0 : 0)
}
C.modulo = C.mod = function (e) {
  var t,
    r = this,
    n = r.constructor
  return (
    (e = new n(e)),
    !r.d || !e.s || (e.d && !e.d[0])
      ? new n(NaN)
      : !e.d || (r.d && !r.d[0])
        ? I(new n(r), n.precision, n.rounding)
        : ((N = !1),
          n.modulo == 9
            ? ((t = $(r, e.abs(), 0, 3, 1)), (t.s *= e.s))
            : (t = $(r, e, 0, n.modulo, 1)),
          (t = t.times(e)),
          (N = !0),
          r.minus(t))
  )
}
C.naturalExponential = C.exp = function () {
  return In(this)
}
C.naturalLogarithm = C.ln = function () {
  return ke(this)
}
C.negated = C.neg = function () {
  var e = new this.constructor(this)
  return (e.s = -e.s), I(e)
}
C.plus = C.add = function (e) {
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
    v = h.constructor
  if (((e = new v(e)), !h.d || !e.d))
    return (
      !h.s || !e.s
        ? (e = new v(NaN))
        : h.d || (e = new v(e.d || h.s === e.s ? h : NaN)),
      e
    )
  if (h.s != e.s) return (e.s = -e.s), h.minus(e)
  if (
    ((f = h.d), (g = e.d), (a = v.precision), (l = v.rounding), !f[0] || !g[0])
  )
    return g[0] || (e = new v(h)), N ? I(e, a, l) : e
  if (((o = X(h.e / k)), (n = X(e.e / k)), (f = f.slice()), (i = o - n), i)) {
    for (
      i < 0
        ? ((r = f), (i = -i), (s = g.length))
        : ((r = g), (n = o), (s = f.length)),
        o = Math.ceil(a / k),
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
    (t = ((f[--i] = f[i] + g[i] + t) / ce) | 0), (f[i] %= ce)
  for (t && (f.unshift(t), ++n), s = f.length; f[--s] == 0; ) f.pop()
  return (e.d = f), (e.e = Pr(f, n)), N ? I(e, a, l) : e
}
C.precision = C.sd = function (e) {
  var t,
    r = this
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(Oe + e)
  return r.d ? ((t = ho(r.d)), e && r.e + 1 > t && (t = r.e + 1)) : (t = NaN), t
}
C.round = function () {
  var e = this,
    t = e.constructor
  return I(new t(e), e.e + 1, t.rounding)
}
C.sine = C.sin = function () {
  var e,
    t,
    r = this,
    n = r.constructor
  return r.isFinite()
    ? r.isZero()
      ? new n(r)
      : ((e = n.precision),
        (t = n.rounding),
        (n.precision = e + Math.max(r.e, r.sd()) + k),
        (n.rounding = 1),
        (r = Rl(n, bo(n, r))),
        (n.precision = e),
        (n.rounding = t),
        I(Te > 2 ? r.neg() : r, e, t, !0))
    : new n(NaN)
}
C.squareRoot = C.sqrt = function () {
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
    N = !1,
      f = Math.sqrt(+s),
      f == 0 || f == 1 / 0
        ? ((t = z(a)),
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
      (n = o.plus($(s, o, r + 2, 1)).times(0.5)),
      z(o.d).slice(0, r) === (t = z(n.d)).slice(0, r))
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
  return (N = !0), I(n, l, g.rounding, e)
}
C.tangent = C.tan = function () {
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
        (r = $(r, new n(1).minus(r.times(r)).sqrt(), e + 10, 0)),
        (n.precision = e),
        (n.rounding = t),
        I(Te == 2 || Te == 4 ? r.neg() : r, e, t, !0))
    : new n(NaN)
}
C.times = C.mul = function (e) {
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
    v = g.d,
    S = (e = new h(e)).d
  if (((e.s *= g.s), !v || !v[0] || !S || !S[0]))
    return new h(
      !e.s || (v && !v[0] && !S) || (S && !S[0] && !v)
        ? NaN
        : !v || !S
          ? e.s / 0
          : e.s * 0,
    )
  for (
    r = X(g.e / k) + X(e.e / k),
      l = v.length,
      f = S.length,
      l < f && ((o = v), (v = S), (S = o), (s = l), (l = f), (f = s)),
      o = [],
      s = l + f,
      n = s;
    n--;

  )
    o.push(0)
  for (n = f; --n >= 0; ) {
    for (t = 0, i = l + n; i > n; )
      (a = o[i] + S[n] * v[i - n - 1] + t),
        (o[i--] = a % ce | 0),
        (t = (a / ce) | 0)
    o[i] = (o[i] + t) % ce | 0
  }
  for (; !o[--s]; ) o.pop()
  return (
    t ? ++r : o.shift(),
    (e.d = o),
    (e.e = Pr(o, r)),
    N ? I(e, h.precision, h.rounding) : e
  )
}
C.toBinary = function (e, t) {
  return kn(this, 2, e, t)
}
C.toDecimalPlaces = C.toDP = function (e, t) {
  var r = this,
    n = r.constructor
  return (
    (r = new n(r)),
    e === void 0
      ? r
      : (oe(e, 0, De),
        t === void 0 ? (t = n.rounding) : oe(t, 0, 8),
        I(r, e + r.e + 1, t))
  )
}
C.toExponential = function (e, t) {
  var r,
    n = this,
    i = n.constructor
  return (
    e === void 0
      ? (r = ge(n, !0))
      : (oe(e, 0, De),
        t === void 0 ? (t = i.rounding) : oe(t, 0, 8),
        (n = I(new i(n), e + 1, t)),
        (r = ge(n, !0, e + 1))),
    n.isNeg() && !n.isZero() ? '-' + r : r
  )
}
C.toFixed = function (e, t) {
  var r,
    n,
    i = this,
    o = i.constructor
  return (
    e === void 0
      ? (r = ge(i))
      : (oe(e, 0, De),
        t === void 0 ? (t = o.rounding) : oe(t, 0, 8),
        (n = I(new o(i), e + i.e + 1, t)),
        (r = ge(n, !1, e + n.e + 1))),
    i.isNeg() && !i.isZero() ? '-' + r : r
  )
}
C.toFraction = function (e) {
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
    v,
    S = this,
    R = S.d,
    A = S.constructor
  if (!R) return new A(S)
  if (
    ((f = r = new A(1)),
    (n = l = new A(0)),
    (t = new A(n)),
    (o = t.e = ho(R) - S.e - 1),
    (s = o % k),
    (t.d[0] = W(10, s < 0 ? k + s : s)),
    e == null)
  )
    e = o > 0 ? t : f
  else {
    if (((a = new A(e)), !a.isInt() || a.lt(f))) throw Error(Oe + a)
    e = a.gt(t) ? (o > 0 ? t : f) : a
  }
  for (
    N = !1,
      a = new A(z(R)),
      g = A.precision,
      A.precision = o = R.length * k * 2;
    (h = $(a, t, 0, 1, 1)), (i = r.plus(h.times(n))), i.cmp(e) != 1;

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
    (i = $(e.minus(r), n, 0, 1, 1)),
    (l = l.plus(i.times(f))),
    (r = r.plus(i.times(n))),
    (l.s = f.s = S.s),
    (v =
      $(f, n, o, 1)
        .minus(S)
        .abs()
        .cmp($(l, r, o, 1).minus(S).abs()) < 1
        ? [f, n]
        : [l, r]),
    (A.precision = g),
    (N = !0),
    v
  )
}
C.toHexadecimal = C.toHex = function (e, t) {
  return kn(this, 16, e, t)
}
C.toNearest = function (e, t) {
  var r = this,
    n = r.constructor
  if (((r = new n(r)), e == null)) {
    if (!r.d) return r
    ;(e = new n(1)), (t = n.rounding)
  } else {
    if (((e = new n(e)), t === void 0 ? (t = n.rounding) : oe(t, 0, 8), !r.d))
      return e.s ? r : e
    if (!e.d) return e.s && (e.s = r.s), e
  }
  return (
    e.d[0]
      ? ((N = !1), (r = $(r, e, 0, t, 1).times(e)), (N = !0), I(r))
      : ((e.s = r.s), (r = e)),
    r
  )
}
C.toNumber = function () {
  return +this
}
C.toOctal = function (e, t) {
  return kn(this, 8, e, t)
}
C.toPower = C.pow = function (e) {
  var t,
    r,
    n,
    i,
    o,
    s,
    a = this,
    l = a.constructor,
    f = +(e = new l(e))
  if (!a.d || !e.d || !a.d[0] || !e.d[0]) return new l(W(+a, f))
  if (((a = new l(a)), a.eq(1))) return a
  if (((n = l.precision), (o = l.rounding), e.eq(1))) return I(a, n, o)
  if (((t = X(e.e / k)), t >= e.d.length - 1 && (r = f < 0 ? -f : f) <= Pl))
    return (i = yo(l, a, r, n)), e.s < 0 ? new l(1).div(i) : I(i, n, o)
  if (((s = a.s), s < 0)) {
    if (t < e.d.length - 1) return new l(NaN)
    if ((e.d[t] & 1 || (s = 1), a.e == 0 && a.d[0] == 1 && a.d.length == 1))
      return (a.s = s), a
  }
  return (
    (r = W(+a, f)),
    (t =
      r == 0 || !isFinite(r)
        ? X(f * (Math.log('0.' + z(a.d)) / Math.LN10 + a.e + 1))
        : new l(r + '').e),
    t > l.maxE + 1 || t < l.minE - 1
      ? new l(t > 0 ? s / 0 : 0)
      : ((N = !1),
        (l.rounding = a.s = 1),
        (r = Math.min(12, (t + '').length)),
        (i = In(e.times(ke(a, n + r)), n)),
        i.d &&
          ((i = I(i, n + 5, 1)),
          kt(i.d, n, o) &&
            ((t = n + 10),
            (i = I(In(e.times(ke(a, t + r)), t), t + 5, 1)),
            +z(i.d).slice(n + 1, n + 15) + 1 == 1e14 && (i = I(i, n + 1, 0)))),
        (i.s = s),
        (N = !0),
        (l.rounding = o),
        I(i, n, o))
  )
}
C.toPrecision = function (e, t) {
  var r,
    n = this,
    i = n.constructor
  return (
    e === void 0
      ? (r = ge(n, n.e <= i.toExpNeg || n.e >= i.toExpPos))
      : (oe(e, 1, De),
        t === void 0 ? (t = i.rounding) : oe(t, 0, 8),
        (n = I(new i(n), e, t)),
        (r = ge(n, e <= n.e || n.e <= i.toExpNeg, e))),
    n.isNeg() && !n.isZero() ? '-' + r : r
  )
}
C.toSignificantDigits = C.toSD = function (e, t) {
  var r = this,
    n = r.constructor
  return (
    e === void 0
      ? ((e = n.precision), (t = n.rounding))
      : (oe(e, 1, De), t === void 0 ? (t = n.rounding) : oe(t, 0, 8)),
    I(new n(r), e, t)
  )
}
C.toString = function () {
  var e = this,
    t = e.constructor,
    r = ge(e, e.e <= t.toExpNeg || e.e >= t.toExpPos)
  return e.isNeg() && !e.isZero() ? '-' + r : r
}
C.truncated = C.trunc = function () {
  return I(new this.constructor(this), this.e + 1, 1)
}
C.valueOf = C.toJSON = function () {
  var e = this,
    t = e.constructor,
    r = ge(e, e.e <= t.toExpNeg || e.e >= t.toExpPos)
  return e.isNeg() ? '-' + r : r
}
function z(e) {
  var t,
    r,
    n,
    i = e.length - 1,
    o = '',
    s = e[0]
  if (i > 0) {
    for (o += s, t = 1; t < i; t++)
      (n = e[t] + ''), (r = k - n.length), r && (o += Ie(r)), (o += n)
    ;(s = e[t]), (n = s + ''), (r = k - n.length), r && (o += Ie(r))
  } else if (s === 0) return '0'
  for (; s % 10 === 0; ) s /= 10
  return o + s
}
function oe(e, t, r) {
  if (e !== ~~e || e < t || e > r) throw Error(Oe + e)
}
function kt(e, t, r, n) {
  var i, o, s, a
  for (o = e[0]; o >= 10; o /= 10) --t
  return (
    --t < 0 ? ((t += k), (i = 0)) : ((i = Math.ceil((t + 1) / k)), (t %= k)),
    (o = W(10, k - t)),
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
              ((e[i + 1] / o / 100) | 0) == W(10, t - 2) - 1) ||
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
            ((e[i + 1] / o / 1e3) | 0) == W(10, t - 3) - 1),
    s
  )
}
function hr(e, t, r) {
  for (var n, i = [0], o, s = 0, a = e.length; s < a; ) {
    for (o = i.length; o--; ) i[o] *= t
    for (i[0] += Rn.indexOf(e.charAt(s++)), n = 0; n < i.length; n++)
      i[n] > r - 1 &&
        (i[n + 1] === void 0 && (i[n + 1] = 0),
        (i[n + 1] += (i[n] / r) | 0),
        (i[n] %= r))
  }
  return i.reverse()
}
function Tl(e, t) {
  var r, n, i
  if (t.isZero()) return t
  ;(n = t.d.length),
    n < 32
      ? ((r = Math.ceil(n / 3)), (i = (1 / vr(4, r)).toString()))
      : ((r = 16), (i = '2.3283064365386962890625e-10')),
    (e.precision += r),
    (t = et(e, 1, t.times(i), new e(1)))
  for (var o = r; o--; ) {
    var s = t.times(t)
    t = s.times(s).minus(s).times(8).plus(1)
  }
  return (e.precision -= r), t
}
var $ = (function () {
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
      v,
      S,
      R,
      A,
      D,
      M,
      U,
      O,
      F,
      L,
      J,
      rn,
      nr,
      Pt,
      nn,
      ue,
      ir,
      or = n.constructor,
      on = n.s == i.s ? 1 : -1,
      Y = n.d,
      V = i.d
    if (!Y || !Y[0] || !V || !V[0])
      return new or(
        !n.s || !i.s || (Y ? V && Y[0] == V[0] : !V)
          ? NaN
          : (Y && Y[0] == 0) || !V
            ? on * 0
            : on / 0,
      )
    for (
      l
        ? ((S = 1), (g = n.e - i.e))
        : ((l = ce), (S = k), (g = X(n.e / S) - X(i.e / S))),
        ue = V.length,
        Pt = Y.length,
        M = new or(on),
        U = M.d = [],
        h = 0;
      V[h] == (Y[h] || 0);
      h++
    );
    if (
      (V[h] > (Y[h] || 0) && g--,
      o == null
        ? ((J = o = or.precision), (s = or.rounding))
        : a
          ? (J = o + (n.e - i.e) + 1)
          : (J = o),
      J < 0)
    )
      U.push(1), (R = !0)
    else {
      if (((J = (J / S + 2) | 0), (h = 0), ue == 1)) {
        for (v = 0, V = V[0], J++; (h < Pt || v) && J--; h++)
          (rn = v * l + (Y[h] || 0)), (U[h] = (rn / V) | 0), (v = rn % V | 0)
        R = v || h < Pt
      } else {
        for (
          v = (l / (V[0] + 1)) | 0,
            v > 1 &&
              ((V = e(V, v, l)),
              (Y = e(Y, v, l)),
              (ue = V.length),
              (Pt = Y.length)),
            nr = ue,
            O = Y.slice(0, ue),
            F = O.length;
          F < ue;

        )
          O[F++] = 0
        ;(ir = V.slice()), ir.unshift(0), (nn = V[0]), V[1] >= l / 2 && ++nn
        do
          (v = 0),
            (f = t(V, O, ue, F)),
            f < 0
              ? ((L = O[0]),
                ue != F && (L = L * l + (O[1] || 0)),
                (v = (L / nn) | 0),
                v > 1
                  ? (v >= l && (v = l - 1),
                    (A = e(V, v, l)),
                    (D = A.length),
                    (F = O.length),
                    (f = t(A, O, D, F)),
                    f == 1 && (v--, r(A, ue < D ? ir : V, D, l)))
                  : (v == 0 && (f = v = 1), (A = V.slice())),
                (D = A.length),
                D < F && A.unshift(0),
                r(O, A, F, l),
                f == -1 &&
                  ((F = O.length),
                  (f = t(V, O, ue, F)),
                  f < 1 && (v++, r(O, ue < F ? ir : V, F, l))),
                (F = O.length))
              : f === 0 && (v++, (O = [0])),
            (U[h++] = v),
            f && O[0] ? (O[F++] = Y[nr] || 0) : ((O = [Y[nr]]), (F = 1))
        while ((nr++ < Pt || O[0] !== void 0) && J--)
        R = O[0] !== void 0
      }
      U[0] || U.shift()
    }
    if (S == 1) (M.e = g), (co = R)
    else {
      for (h = 1, v = U[0]; v >= 10; v /= 10) h++
      ;(M.e = h + g * S - 1), I(M, a ? o + M.e + 1 : o, s, R)
    }
    return M
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
    v,
    S = e.constructor
  e: if (t != null) {
    if (((h = e.d), !h)) return e
    for (i = 1, a = h[0]; a >= 10; a /= 10) i++
    if (((o = t - i), o < 0))
      (o += k), (s = t), (g = h[(v = 0)]), (l = (g / W(10, i - s - 1)) % 10 | 0)
    else if (((v = Math.ceil((o + 1) / k)), (a = h.length), v >= a))
      if (n) {
        for (; a++ <= v; ) h.push(0)
        ;(g = l = 0), (i = 1), (o %= k), (s = o - k + 1)
      } else break e
    else {
      for (g = a = h[v], i = 1; a >= 10; a /= 10) i++
      ;(o %= k),
        (s = o - k + i),
        (l = s < 0 ? 0 : (g / W(10, i - s - 1)) % 10 | 0)
    }
    if (
      ((n =
        n ||
        t < 0 ||
        h[v + 1] !== void 0 ||
        (s < 0 ? g : g % W(10, i - s - 1))),
      (f =
        r < 4
          ? (l || n) && (r == 0 || r == (e.s < 0 ? 3 : 2))
          : l > 5 ||
            (l == 5 &&
              (r == 4 ||
                n ||
                (r == 6 &&
                  (o > 0 ? (s > 0 ? g / W(10, i - s) : 0) : h[v - 1]) % 10 &
                    1) ||
                r == (e.s < 0 ? 8 : 7)))),
      t < 1 || !h[0])
    )
      return (
        (h.length = 0),
        f
          ? ((t -= e.e + 1), (h[0] = W(10, (k - (t % k)) % k)), (e.e = -t || 0))
          : (h[0] = e.e = 0),
        e
      )
    if (
      (o == 0
        ? ((h.length = v), (a = 1), v--)
        : ((h.length = v + 1),
          (a = W(10, k - o)),
          (h[v] = s > 0 ? ((g / W(10, i - s)) % W(10, s) | 0) * a : 0)),
      f)
    )
      for (;;)
        if (v == 0) {
          for (o = 1, s = h[0]; s >= 10; s /= 10) o++
          for (s = h[0] += a, a = 1; s >= 10; s /= 10) a++
          o != a && (e.e++, h[0] == ce && (h[0] = 1))
          break
        } else {
          if (((h[v] += a), h[v] != ce)) break
          ;(h[v--] = 0), (a = 1)
        }
    for (o = h.length; h[--o] === 0; ) h.pop()
  }
  return (
    N &&
      (e.e > S.maxE
        ? ((e.d = null), (e.e = NaN))
        : e.e < S.minE && ((e.e = 0), (e.d = [0]))),
    e
  )
}
function ge(e, t, r) {
  if (!e.isFinite()) return Eo(e)
  var n,
    i = e.e,
    o = z(e.d),
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
function Pr(e, t) {
  var r = e[0]
  for (t *= k; r >= 10; r /= 10) t++
  return t
}
function br(e, t, r) {
  if (t > vl) throw ((N = !0), r && (e.precision = r), Error(po))
  return I(new e(wr), t, 1, !0)
}
function fe(e, t, r) {
  if (t > Sn) throw Error(po)
  return I(new e(Er), t, r, !0)
}
function ho(e) {
  var t = e.length - 1,
    r = t * k + 1
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
function yo(e, t, r, n) {
  var i,
    o = new e(1),
    s = Math.ceil(n / k + 4)
  for (N = !1; ; ) {
    if (
      (r % 2 && ((o = o.times(t)), lo(o.d, s) && (i = !0)),
      (r = X(r / 2)),
      r === 0)
    ) {
      ;(r = o.d.length - 1), i && o.d[r] === 0 && ++o.d[r]
      break
    }
    ;(t = t.times(t)), lo(t.d, s)
  }
  return (N = !0), o
}
function ao(e) {
  return e.d[e.d.length - 1] & 1
}
function wo(e, t, r) {
  for (var n, i, o = new e(t[0]), s = 0; ++s < t.length; ) {
    if (((i = new e(t[s])), !i.s)) {
      o = i
      break
    }
    ;(n = o.cmp(i)), (n === r || (n === 0 && o.s === r)) && (o = i)
  }
  return o
}
function In(e, t) {
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
    v = e.constructor,
    S = v.rounding,
    R = v.precision
  if (!e.d || !e.d[0] || e.e > 17)
    return new v(
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
    t == null ? ((N = !1), (l = R)) : (l = t), a = new v(0.03125);
    e.e > -2;

  )
    (e = e.times(a)), (h += 5)
  for (
    n = ((Math.log(W(2, h)) / Math.LN10) * 2 + 5) | 0,
      l += n,
      r = o = s = new v(1),
      v.precision = l;
    ;

  ) {
    if (
      ((o = I(o.times(e), l, 1)),
      (r = r.times(++g)),
      (a = s.plus($(o, r, l, 1))),
      z(a.d).slice(0, l) === z(s.d).slice(0, l))
    ) {
      for (i = h; i--; ) s = I(s.times(s), l, 1)
      if (t == null)
        if (f < 3 && kt(s.d, l - n, S, f))
          (v.precision = l += 10), (r = o = a = new v(1)), (g = 0), f++
        else return I(s, (v.precision = R), S, (N = !0))
      else return (v.precision = R), s
    }
    s = a
  }
}
function ke(e, t) {
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
    v,
    S = 1,
    R = 10,
    A = e,
    D = A.d,
    M = A.constructor,
    U = M.rounding,
    O = M.precision
  if (A.s < 0 || !D || !D[0] || (!A.e && D[0] == 1 && D.length == 1))
    return new M(D && !D[0] ? -1 / 0 : A.s != 1 ? NaN : D ? 0 : A)
  if (
    (t == null ? ((N = !1), (g = O)) : (g = t),
    (M.precision = g += R),
    (r = z(D)),
    (n = r.charAt(0)),
    Math.abs((o = A.e)) < 15e14)
  ) {
    for (; (n < 7 && n != 1) || (n == 1 && r.charAt(1) > 3); )
      (A = A.times(e)), (r = z(A.d)), (n = r.charAt(0)), S++
    ;(o = A.e),
      n > 1 ? ((A = new M('0.' + r)), o++) : (A = new M(n + '.' + r.slice(1)))
  } else
    return (
      (f = br(M, g + 2, O).times(o + '')),
      (A = ke(new M(n + '.' + r.slice(1)), g - R).plus(f)),
      (M.precision = O),
      t == null ? I(A, O, U, (N = !0)) : A
    )
  for (
    h = A,
      l = s = A = $(A.minus(1), A.plus(1), g, 1),
      v = I(A.times(A), g, 1),
      i = 3;
    ;

  ) {
    if (
      ((s = I(s.times(v), g, 1)),
      (f = l.plus($(s, new M(i), g, 1))),
      z(f.d).slice(0, g) === z(l.d).slice(0, g))
    )
      if (
        ((l = l.times(2)),
        o !== 0 && (l = l.plus(br(M, g + 2, O).times(o + ''))),
        (l = $(l, new M(S), g, 1)),
        t == null)
      )
        if (kt(l.d, g - R, U, a))
          (M.precision = g += R),
            (f = s = A = $(h.minus(1), h.plus(1), g, 1)),
            (v = I(A.times(A), g, 1)),
            (i = a = 1)
        else return I(l, (M.precision = O), U, (N = !0))
      else return (M.precision = O), l
    ;(l = f), (i += 2)
  }
}
function Eo(e) {
  return String((e.s * e.s) / 0)
}
function yr(e, t) {
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
      (n = (r + 1) % k),
      r < 0 && (n += k),
      n < i)
    ) {
      for (n && e.d.push(+t.slice(0, n)), i -= k; n < i; )
        e.d.push(+t.slice(n, (n += k)))
      ;(t = t.slice(n)), (n = k - t.length)
    } else n -= i
    for (; n--; ) t += '0'
    e.d.push(+t),
      N &&
        (e.e > e.constructor.maxE
          ? ((e.d = null), (e.e = NaN))
          : e.e < e.constructor.minE && ((e.e = 0), (e.d = [0])))
  } else (e.e = 0), (e.d = [0])
  return e
}
function Cl(e, t) {
  var r, n, i, o, s, a, l, f, g
  if (t.indexOf('_') > -1) {
    if (((t = t.replace(/(\d)_(?=\d)/g, '$1')), go.test(t))) return yr(e, t)
  } else if (t === 'Infinity' || t === 'NaN')
    return +t || (e.s = NaN), (e.e = NaN), (e.d = null), e
  if (bl.test(t)) (r = 16), (t = t.toLowerCase())
  else if (El.test(t)) r = 2
  else if (xl.test(t)) r = 8
  else throw Error(Oe + t)
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
        (i = yo(n, new n(r), o, o * 2))),
      f = hr(t, r, ce),
      g = f.length - 1,
      o = g;
    f[o] === 0;
    --o
  )
    f.pop()
  return o < 0
    ? new n(e.s * 0)
    : ((e.e = Pr(f, g)),
      (e.d = f),
      (N = !1),
      s && (e = $(e, i, a * 4)),
      l && (e = e.times(Math.abs(l) < 54 ? W(2, l) : Be.pow(2, l))),
      (N = !0),
      e)
}
function Rl(e, t) {
  var r,
    n = t.d.length
  if (n < 3) return t.isZero() ? t : et(e, 2, t, t)
  ;(r = 1.4 * Math.sqrt(n)),
    (r = r > 16 ? 16 : r | 0),
    (t = t.times(1 / vr(5, r))),
    (t = et(e, 2, t, t))
  for (var i, o = new e(5), s = new e(16), a = new e(20); r--; )
    (i = t.times(t)), (t = t.times(o.plus(i.times(s.times(i).minus(a)))))
  return t
}
function et(e, t, r, n, i) {
  var o,
    s,
    a,
    l,
    f = 1,
    g = e.precision,
    h = Math.ceil(g / k)
  for (N = !1, l = r.times(r), a = new e(n); ; ) {
    if (
      ((s = $(a.times(l), new e(t++ * t++), g, 1)),
      (a = i ? n.plus(s) : n.minus(s)),
      (n = $(s.times(l), new e(t++ * t++), g, 1)),
      (s = a.plus(n)),
      s.d[h] !== void 0)
    ) {
      for (o = h; s.d[o] === a.d[o] && o--; );
      if (o == -1) break
    }
    ;(o = a), (a = n), (n = s), (s = o), f++
  }
  return (N = !0), (s.d.length = h + 1), s
}
function vr(e, t) {
  for (var r = e; --t; ) r *= e
  return r
}
function bo(e, t) {
  var r,
    n = t.s < 0,
    i = fe(e, e.precision, 1),
    o = i.times(0.5)
  if (((t = t.abs()), t.lte(o))) return (Te = n ? 4 : 1), t
  if (((r = t.divToInt(i)), r.isZero())) Te = n ? 3 : 2
  else {
    if (((t = t.minus(r.times(i))), t.lte(o)))
      return (Te = ao(r) ? (n ? 2 : 3) : n ? 4 : 1), t
    Te = ao(r) ? (n ? 1 : 4) : n ? 3 : 2
  }
  return t.minus(i).abs()
}
function kn(e, t, r, n) {
  var i,
    o,
    s,
    a,
    l,
    f,
    g,
    h,
    v,
    S = e.constructor,
    R = r !== void 0
  if (
    (R
      ? (oe(r, 1, De), n === void 0 ? (n = S.rounding) : oe(n, 0, 8))
      : ((r = S.precision), (n = S.rounding)),
    !e.isFinite())
  )
    g = Eo(e)
  else {
    for (
      g = ge(e),
        s = g.indexOf('.'),
        R
          ? ((i = 2), t == 16 ? (r = r * 4 - 3) : t == 8 && (r = r * 3 - 2))
          : (i = t),
        s >= 0 &&
          ((g = g.replace('.', '')),
          (v = new S(1)),
          (v.e = g.length - s),
          (v.d = hr(ge(v), 10, i)),
          (v.e = v.d.length)),
        h = hr(g, 10, i),
        o = l = h.length;
      h[--l] == 0;

    )
      h.pop()
    if (!h[0]) g = R ? '0p+0' : '0'
    else {
      if (
        (s < 0
          ? o--
          : ((e = new S(e)),
            (e.d = h),
            (e.e = o),
            (e = $(e, v, r, n, 0, i)),
            (h = e.d),
            (o = e.e),
            (f = co)),
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
      for (s = 0, g = ''; s < l; s++) g += Rn.charAt(h[s])
      if (R) {
        if (l > 1)
          if (t == 16 || t == 8) {
            for (s = t == 16 ? 4 : 3, --l; l % s; l++) g += '0'
            for (h = hr(g, i, t), l = h.length; !h[l - 1]; --l);
            for (s = 1, g = '1.'; s < l; s++) g += Rn.charAt(h[s])
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
function lo(e, t) {
  if (e.length > t) return (e.length = t), !0
}
function Al(e) {
  return new this(e).abs()
}
function Sl(e) {
  return new this(e).acos()
}
function Il(e) {
  return new this(e).acosh()
}
function kl(e, t) {
  return new this(e).plus(t)
}
function Ol(e) {
  return new this(e).asin()
}
function Dl(e) {
  return new this(e).asinh()
}
function Ml(e) {
  return new this(e).atan()
}
function Nl(e) {
  return new this(e).atanh()
}
function _l(e, t) {
  ;(e = new this(e)), (t = new this(t))
  var r,
    n = this.precision,
    i = this.rounding,
    o = n + 4
  return (
    !e.s || !t.s
      ? (r = new this(NaN))
      : !e.d && !t.d
        ? ((r = fe(this, o, 1).times(t.s > 0 ? 0.25 : 0.75)), (r.s = e.s))
        : !t.d || e.isZero()
          ? ((r = t.s < 0 ? fe(this, n, i) : new this(0)), (r.s = e.s))
          : !e.d || t.isZero()
            ? ((r = fe(this, o, 1).times(0.5)), (r.s = e.s))
            : t.s < 0
              ? ((this.precision = o),
                (this.rounding = 1),
                (r = this.atan($(e, t, o, 1))),
                (t = fe(this, o, 1)),
                (this.precision = n),
                (this.rounding = i),
                (r = e.s < 0 ? r.minus(t) : r.plus(t)))
              : (r = this.atan($(e, t, o, 1))),
    r
  )
}
function Fl(e) {
  return new this(e).cbrt()
}
function Ll(e) {
  return I((e = new this(e)), e.e + 1, 2)
}
function Bl(e, t, r) {
  return new this(e).clamp(t, r)
}
function Ul(e) {
  if (!e || typeof e != 'object') throw Error(xr + 'Object expected')
  var t,
    r,
    n,
    i = e.defaults === !0,
    o = [
      'precision',
      1,
      De,
      'rounding',
      0,
      8,
      'toExpNeg',
      -Xe,
      0,
      'toExpPos',
      0,
      Xe,
      'maxE',
      0,
      Xe,
      'minE',
      -Xe,
      0,
      'modulo',
      0,
      9,
    ]
  for (t = 0; t < o.length; t += 3)
    if (((r = o[t]), i && (this[r] = An[r]), (n = e[r]) !== void 0))
      if (X(n) === n && n >= o[t + 1] && n <= o[t + 2]) this[r] = n
      else throw Error(Oe + r + ': ' + n)
  if (((r = 'crypto'), i && (this[r] = An[r]), (n = e[r]) !== void 0))
    if (n === !0 || n === !1 || n === 0 || n === 1)
      if (n)
        if (
          typeof crypto < 'u' &&
          crypto &&
          (crypto.getRandomValues || crypto.randomBytes)
        )
          this[r] = !0
        else throw Error(mo)
      else this[r] = !1
    else throw Error(Oe + r + ': ' + n)
  return this
}
function ql(e) {
  return new this(e).cos()
}
function $l(e) {
  return new this(e).cosh()
}
function xo(e) {
  var t, r, n
  function i(o) {
    var s,
      a,
      l,
      f = this
    if (!(f instanceof i)) return new i(o)
    if (((f.constructor = i), uo(o))) {
      ;(f.s = o.s),
        N
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
        N
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
      return yr(f, o.toString())
    }
    if (l === 'string')
      return (
        (a = o.charCodeAt(0)) === 45
          ? ((o = o.slice(1)), (f.s = -1))
          : (a === 43 && (o = o.slice(1)), (f.s = 1)),
        go.test(o) ? yr(f, o) : Cl(f, o)
      )
    if (l === 'bigint')
      return o < 0 ? ((o = -o), (f.s = -1)) : (f.s = 1), yr(f, o.toString())
    throw Error(Oe + o)
  }
  if (
    ((i.prototype = C),
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
    (i.config = i.set = Ul),
    (i.clone = xo),
    (i.isDecimal = uo),
    (i.abs = Al),
    (i.acos = Sl),
    (i.acosh = Il),
    (i.add = kl),
    (i.asin = Ol),
    (i.asinh = Dl),
    (i.atan = Ml),
    (i.atanh = Nl),
    (i.atan2 = _l),
    (i.cbrt = Fl),
    (i.ceil = Ll),
    (i.clamp = Bl),
    (i.cos = ql),
    (i.cosh = $l),
    (i.div = Vl),
    (i.exp = jl),
    (i.floor = Gl),
    (i.hypot = Jl),
    (i.ln = Ql),
    (i.log = Wl),
    (i.log10 = Kl),
    (i.log2 = Hl),
    (i.max = zl),
    (i.min = Yl),
    (i.mod = Zl),
    (i.mul = Xl),
    (i.pow = eu),
    (i.random = tu),
    (i.round = ru),
    (i.sign = nu),
    (i.sin = iu),
    (i.sinh = ou),
    (i.sqrt = su),
    (i.sub = au),
    (i.sum = lu),
    (i.tan = uu),
    (i.tanh = cu),
    (i.trunc = pu),
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
function Vl(e, t) {
  return new this(e).div(t)
}
function jl(e) {
  return new this(e).exp()
}
function Gl(e) {
  return I((e = new this(e)), e.e + 1, 3)
}
function Jl() {
  var e,
    t,
    r = new this(0)
  for (N = !1, e = 0; e < arguments.length; )
    if (((t = new this(arguments[e++])), t.d)) r.d && (r = r.plus(t.times(t)))
    else {
      if (t.s) return (N = !0), new this(1 / 0)
      r = t
    }
  return (N = !0), r.sqrt()
}
function uo(e) {
  return e instanceof Be || (e && e.toStringTag === fo) || !1
}
function Ql(e) {
  return new this(e).ln()
}
function Wl(e, t) {
  return new this(e).log(t)
}
function Hl(e) {
  return new this(e).log(2)
}
function Kl(e) {
  return new this(e).log(10)
}
function zl() {
  return wo(this, arguments, -1)
}
function Yl() {
  return wo(this, arguments, 1)
}
function Zl(e, t) {
  return new this(e).mod(t)
}
function Xl(e, t) {
  return new this(e).mul(t)
}
function eu(e, t) {
  return new this(e).pow(t)
}
function tu(e) {
  var t,
    r,
    n,
    i,
    o = 0,
    s = new this(1),
    a = []
  if (
    (e === void 0 ? (e = this.precision) : oe(e, 1, De),
    (n = Math.ceil(e / k)),
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
    } else throw Error(mo)
  else for (; o < n; ) a[o++] = (Math.random() * 1e7) | 0
  for (
    n = a[--o],
      e %= k,
      n && e && ((i = W(10, k - e)), (a[o] = ((n / i) | 0) * i));
    a[o] === 0;
    o--
  )
    a.pop()
  if (o < 0) (r = 0), (a = [0])
  else {
    for (r = -1; a[0] === 0; r -= k) a.shift()
    for (n = 1, i = a[0]; i >= 10; i /= 10) n++
    n < k && (r -= k - n)
  }
  return (s.e = r), (s.d = a), s
}
function ru(e) {
  return I((e = new this(e)), e.e + 1, this.rounding)
}
function nu(e) {
  return (e = new this(e)), e.d ? (e.d[0] ? e.s : 0 * e.s) : e.s || NaN
}
function iu(e) {
  return new this(e).sin()
}
function ou(e) {
  return new this(e).sinh()
}
function su(e) {
  return new this(e).sqrt()
}
function au(e, t) {
  return new this(e).sub(t)
}
function lu() {
  var e = 0,
    t = arguments,
    r = new this(t[e])
  for (N = !1; r.s && ++e < t.length; ) r = r.plus(t[e])
  return (N = !0), I(r, this.precision, this.rounding)
}
function uu(e) {
  return new this(e).tan()
}
function cu(e) {
  return new this(e).tanh()
}
function pu(e) {
  return I((e = new this(e)), e.e + 1, 1)
}
C[Symbol.for('nodejs.util.inspect.custom')] = C.toString
C[Symbol.toStringTag] = 'Decimal'
var Be = (C.constructor = xo(An))
wr = new Be(wr)
Er = new Be(Er)
var he = Be
function tt(e) {
  return e === null
    ? e
    : Array.isArray(e)
      ? e.map(tt)
      : typeof e == 'object'
        ? mu(e)
          ? du(e)
          : Ze(e, tt)
        : e
}
function mu(e) {
  return e !== null && typeof e == 'object' && typeof e.$type == 'string'
}
function du({ $type: e, value: t }) {
  switch (e) {
    case 'BigInt':
      return BigInt(t)
    case 'Bytes': {
      let {
        buffer: r,
        byteOffset: n,
        byteLength: i,
      } = w.Buffer.from(t, 'base64')
      return new Uint8Array(r, n, i)
    }
    case 'DateTime':
      return new Date(t)
    case 'Decimal':
      return new he(t)
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
function rt(e) {
  return e.substring(0, 1).toLowerCase() + e.substring(1)
}
d()
u()
c()
p()
m()
function nt(e) {
  return (
    e instanceof Date || Object.prototype.toString.call(e) === '[object Date]'
  )
}
function Tr(e) {
  return e.toString() !== 'Invalid Date'
}
d()
u()
c()
p()
m()
function it(e) {
  return Be.isDecimal(e)
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
var fu = Je(Xi())
var gu = {
    red: ze,
    gray: qi,
    dim: pr,
    bold: cr,
    underline: _i,
    highlightSource: e => e.highlight(),
  },
  hu = {
    red: e => e,
    gray: e => e,
    dim: e => e,
    bold: e => e,
    underline: e => e,
    highlightSource: e => e,
  }
function yu({ message: e, originalMethod: t, isPanic: r, callArguments: n }) {
  return {
    functionName: `prisma.${t}()`,
    message: e,
    isPanic: r ?? !1,
    callArguments: n,
  }
}
function wu(
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
    t && a.push(s.underline(Eu(t))),
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
function Eu(e) {
  let t = [e.fileName]
  return (
    e.lineNumber && t.push(String(e.lineNumber)),
    e.columnNumber && t.push(String(e.columnNumber)),
    t.join(':')
  )
}
function Cr(e) {
  let t = e.showColors ? gu : hu,
    r
  return (
    typeof $getTemplateParameters < 'u'
      ? (r = $getTemplateParameters(e, t))
      : (r = yu(e)),
    wu(r, t)
  )
}
d()
u()
c()
p()
m()
var So = Je(On())
d()
u()
c()
p()
m()
function Co(e, t, r) {
  let n = Ro(e),
    i = bu(n),
    o = Pu(i)
  o ? Rr(o, t, r) : t.addErrorMessage(() => 'Unknown error')
}
function Ro(e) {
  return e.errors.flatMap(t => (t.kind === 'Union' ? Ro(t) : [t]))
}
function bu(e) {
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
            typeNames: xu(o.argument.typeNames, n.argument.typeNames),
          },
        })
      : t.set(i, n)
  }
  return r.push(...t.values()), r
}
function xu(e, t) {
  return [...new Set(e.concat(t))]
}
function Pu(e) {
  return Cn(e, (t, r) => {
    let n = vo(t),
      i = vo(r)
    return n !== i ? n - i : To(t) - To(r)
  })
}
function vo(e) {
  let t = 0
  return (
    Array.isArray(e.selectionPath) && (t += e.selectionPath.length),
    Array.isArray(e.argumentPath) && (t += e.argumentPath.length),
    t
  )
}
function To(e) {
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
    this.isRequired = !1
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
var ot = class {
  constructor(t = 0, r) {
    this.context = r
    this.lines = []
    this.currentLine = ''
    this.currentIndent = 0
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
var Ar = class {
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
var Sr = e => e,
  Ir = { bold: Sr, red: Sr, green: Sr, dim: Sr, enabled: !1 },
  Ao = { bold: cr, red: ze, green: Fi, dim: pr, enabled: !0 },
  st = {
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
    this.isUnderlined = !1
    this.color = t => t
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
var Me = class {
  constructor() {
    this.hasError = !1
  }
  markAsError() {
    return (this.hasError = !0), this
  }
}
var at = class extends Me {
  constructor() {
    super(...arguments)
    this.items = []
  }
  addItem(r) {
    return this.items.push(new Ar(r)), this
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
      .withIndent(() => r.writeJoined(st, this.items).newLine())
      .write(']'),
      this.hasError &&
        r.afterNextNewline(() => {
          r.writeLine(n.red('~'.repeat(this.getPrintWidth())))
        })
  }
  asObject() {}
}
var lt = class e extends Me {
  constructor() {
    super(...arguments)
    this.fields = {}
    this.suggestions = []
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
          : s.value instanceof at && (l = s.value.getField(Number(a))),
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
      r.writeJoined(st, [...n, ...this.suggestions]).newLine()
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
var K = class extends Me {
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
var Ot = class {
  constructor() {
    this.fields = []
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
        t.writeJoined(st, this.fields).newLine()
      })
      .write(r('}'))
      .addMarginSymbol(r('+'))
  }
}
function Rr(e, t, r) {
  switch (e.kind) {
    case 'MutuallyExclusiveFields':
      Tu(e, t)
      break
    case 'IncludeOnScalar':
      Cu(e, t)
      break
    case 'EmptySelection':
      Ru(e, t, r)
      break
    case 'UnknownSelectionField':
      ku(e, t)
      break
    case 'InvalidSelectionValue':
      Ou(e, t)
      break
    case 'UnknownArgument':
      Du(e, t)
      break
    case 'UnknownInputField':
      Mu(e, t)
      break
    case 'RequiredArgumentMissing':
      Nu(e, t)
      break
    case 'InvalidArgumentType':
      _u(e, t)
      break
    case 'InvalidArgumentValue':
      Fu(e, t)
      break
    case 'ValueTooLarge':
      Lu(e, t)
      break
    case 'SomeFieldsMissing':
      Bu(e, t)
      break
    case 'TooManyFieldsGiven':
      Uu(e, t)
      break
    case 'Union':
      Co(e, t, r)
      break
    default:
      throw new Error('not implemented: ' + e.kind)
  }
}
function Tu(e, t) {
  let r = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject()
  r &&
    (r.getField(e.firstField)?.markAsError(),
    r.getField(e.secondField)?.markAsError()),
    t.addErrorMessage(
      n =>
        `Please ${n.bold('either')} use ${n.green(`\`${e.firstField}\``)} or ${n.green(`\`${e.secondField}\``)}, but ${n.red('not both')} at the same time.`,
    )
}
function Cu(e, t) {
  let [r, n] = Dt(e.selectionPath),
    i = e.outputType,
    o = t.arguments.getDeepSelectionParent(r)?.value
  if (o && (o.getField(n)?.markAsError(), i))
    for (let s of i.fields)
      s.isRelation && o.addSuggestion(new le(s.name, 'true'))
  t.addErrorMessage(s => {
    let a = `Invalid scalar field ${s.red(`\`${n}\``)} for ${s.bold('include')} statement`
    return (
      i ? (a += ` on model ${s.bold(i.name)}. ${Mt(s)}`) : (a += '.'),
      (a += `
Note that ${s.bold('include')} statements only accept relation fields.`),
      a
    )
  })
}
function Ru(e, t, r) {
  let n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject()
  if (n) {
    let i = n.getField('omit')?.value.asObject()
    if (i) {
      Au(e, t, i)
      return
    }
    if (n.hasField('select')) {
      Su(e, t)
      return
    }
  }
  if (r?.[rt(e.outputType.name)]) {
    Iu(e, t)
    return
  }
  t.addErrorMessage(
    () => `Unknown field at "${e.selectionPath.join('.')} selection"`,
  )
}
function Au(e, t, r) {
  r.removeAllFields()
  for (let n of e.outputType.fields) r.addSuggestion(new le(n.name, 'false'))
  t.addErrorMessage(
    n =>
      `The ${n.red('omit')} statement includes every field of the model ${n.bold(e.outputType.name)}. At least one field must be included in the result`,
  )
}
function Su(e, t) {
  let r = e.outputType,
    n = t.arguments.getDeepSelectionParent(e.selectionPath)?.value,
    i = n?.isEmpty() ?? !1
  n && (n.removeAllFields(), Oo(n, r)),
    t.addErrorMessage(o =>
      i
        ? `The ${o.red('`select`')} statement for type ${o.bold(r.name)} must not be empty. ${Mt(o)}`
        : `The ${o.red('`select`')} statement for type ${o.bold(r.name)} needs ${o.bold('at least one truthy value')}.`,
    )
}
function Iu(e, t) {
  let r = new Ot()
  for (let i of e.outputType.fields) i.isRelation || r.addField(i.name, 'false')
  let n = new le('omit', r).makeRequired()
  if (e.selectionPath.length === 0) t.arguments.addSuggestion(n)
  else {
    let [i, o] = Dt(e.selectionPath),
      a = t.arguments.getDeepSelectionParent(i)?.value.asObject()?.getField(o)
    if (a) {
      let l = a?.value.asObject() ?? new lt()
      l.addSuggestion(n), (a.value = l)
    }
  }
  t.addErrorMessage(
    i =>
      `The global ${i.red('omit')} configuration excludes every field of the model ${i.bold(e.outputType.name)}. At least one field must be included in the result`,
  )
}
function ku(e, t) {
  let r = Do(e.selectionPath, t)
  if (r.parentKind !== 'unknown') {
    r.field.markAsError()
    let n = r.parent
    switch (r.parentKind) {
      case 'select':
        Oo(n, e.outputType)
        break
      case 'include':
        qu(n, e.outputType)
        break
      case 'omit':
        $u(n, e.outputType)
        break
    }
  }
  t.addErrorMessage(n => {
    let i = [`Unknown field ${n.red(`\`${r.fieldName}\``)}`]
    return (
      r.parentKind !== 'unknown' &&
        i.push(`for ${n.bold(r.parentKind)} statement`),
      i.push(`on model ${n.bold(`\`${e.outputType.name}\``)}.`),
      i.push(Mt(n)),
      i.join(' ')
    )
  })
}
function Ou(e, t) {
  let r = Do(e.selectionPath, t)
  r.parentKind !== 'unknown' && r.field.value.markAsError(),
    t.addErrorMessage(
      n =>
        `Invalid value for selection field \`${n.red(r.fieldName)}\`: ${e.underlyingError}`,
    )
}
function Du(e, t) {
  let r = e.argumentPath[0],
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject()
  n && (n.getField(r)?.markAsError(), Vu(n, e.arguments)),
    t.addErrorMessage(i =>
      Io(
        i,
        r,
        e.arguments.map(o => o.name),
      ),
    )
}
function Mu(e, t) {
  let [r, n] = Dt(e.argumentPath),
    i = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject()
  if (i) {
    i.getDeepField(e.argumentPath)?.markAsError()
    let o = i.getDeepFieldValue(r)?.asObject()
    o && Mo(o, e.inputType)
  }
  t.addErrorMessage(o =>
    Io(
      o,
      n,
      e.inputType.fields.map(s => s.name),
    ),
  )
}
function Io(e, t, r) {
  let n = [`Unknown argument \`${e.red(t)}\`.`],
    i = Gu(t, r)
  return (
    i && n.push(`Did you mean \`${e.green(i)}\`?`),
    r.length > 0 && n.push(Mt(e)),
    n.join(' ')
  )
}
function Nu(e, t) {
  let r
  t.addErrorMessage(l =>
    r?.value instanceof K && r.value.text === 'null'
      ? `Argument \`${l.green(o)}\` must not be ${l.red('null')}.`
      : `Argument \`${l.green(o)}\` is missing.`,
  )
  let n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject()
  if (!n) return
  let [i, o] = Dt(e.argumentPath),
    s = new Ot(),
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
      let l = e.inputTypes.map(ko).join(' | ')
      a.addSuggestion(new le(o, l).makeRequired())
    }
}
function ko(e) {
  return e.kind === 'list' ? `${ko(e.elementType)}[]` : e.name
}
function _u(e, t) {
  let r = e.argument.name,
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject()
  n && n.getDeepFieldValue(e.argumentPath)?.markAsError(),
    t.addErrorMessage(i => {
      let o = kr(
        'or',
        e.argument.typeNames.map(s => i.green(s)),
      )
      return `Argument \`${i.bold(r)}\`: Invalid value provided. Expected ${o}, provided ${i.red(e.inferredType)}.`
    })
}
function Fu(e, t) {
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
        let s = kr(
          'or',
          e.argument.typeNames.map(a => i.green(a)),
        )
        o.push(` Expected ${s}.`)
      }
      return o.join('')
    })
}
function Lu(e, t) {
  let r = e.argument.name,
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(),
    i
  if (n) {
    let s = n.getDeepField(e.argumentPath)?.value
    s?.markAsError(), s instanceof K && (i = s.text)
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
function Bu(e, t) {
  let r = e.argumentPath[e.argumentPath.length - 1],
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject()
  if (n) {
    let i = n.getDeepFieldValue(e.argumentPath)?.asObject()
    i && Mo(i, e.inputType)
  }
  t.addErrorMessage(i => {
    let o = [
      `Argument \`${i.bold(r)}\` of type ${i.bold(e.inputType.name)} needs`,
    ]
    return (
      e.constraints.minFieldCount === 1
        ? e.constraints.requiredFields
          ? o.push(
              `${i.green('at least one of')} ${kr(
                'or',
                e.constraints.requiredFields.map(s => `\`${i.bold(s)}\``),
              )} arguments.`,
            )
          : o.push(`${i.green('at least one')} argument.`)
        : o.push(
            `${i.green(`at least ${e.constraints.minFieldCount}`)} arguments.`,
          ),
      o.push(Mt(i)),
      o.join(' ')
    )
  })
}
function Uu(e, t) {
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
        `but you provided ${kr(
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
function Oo(e, t) {
  for (let r of t.fields)
    e.hasField(r.name) || e.addSuggestion(new le(r.name, 'true'))
}
function qu(e, t) {
  for (let r of t.fields)
    r.isRelation &&
      !e.hasField(r.name) &&
      e.addSuggestion(new le(r.name, 'true'))
}
function $u(e, t) {
  for (let r of t.fields)
    !e.hasField(r.name) &&
      !r.isRelation &&
      e.addSuggestion(new le(r.name, 'true'))
}
function Vu(e, t) {
  for (let r of t)
    e.hasField(r.name) ||
      e.addSuggestion(new le(r.name, r.typeNames.join(' | ')))
}
function Do(e, t) {
  let [r, n] = Dt(e),
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
function Mo(e, t) {
  if (t.kind === 'object')
    for (let r of t.fields)
      e.hasField(r.name) ||
        e.addSuggestion(new le(r.name, r.typeNames.join(' | ')))
}
function Dt(e) {
  let t = [...e],
    r = t.pop()
  if (!r) throw new Error('unexpected empty path')
  return [t, r]
}
function Mt({ green: e, enabled: t }) {
  return (
    'Available options are ' +
    (t ? `listed in ${e('green')}` : 'marked with ?') +
    '.'
  )
}
function kr(e, t) {
  if (t.length === 1) return t[0]
  let r = [...t],
    n = r.pop()
  return `${r.join(', ')} ${e} ${n}`
}
var ju = 3
function Gu(e, t) {
  let r = 1 / 0,
    n
  for (let i of t) {
    let o = (0, So.default)(e, i)
    o > ju || (o < r && ((r = o), (n = i)))
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
function No(e) {
  return e.substring(0, 1).toLowerCase() + e.substring(1)
}
d()
u()
c()
p()
m()
var Nt = class {
  constructor(t, r, n, i, o) {
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
function ut(e) {
  return e instanceof Nt
}
d()
u()
c()
p()
m()
var Or = Symbol(),
  Dn = new WeakMap(),
  Ce = class {
    constructor(t) {
      t === Or
        ? Dn.set(this, `Prisma.${this._getName()}`)
        : Dn.set(
            this,
            `new Prisma.${this._getNamespace()}.${this._getName()}()`,
          )
    }
    _getName() {
      return this.constructor.name
    }
    toString() {
      return Dn.get(this)
    }
  },
  _t = class extends Ce {
    _getNamespace() {
      return 'NullTypes'
    }
  },
  Ft = class extends _t {}
Mn(Ft, 'DbNull')
var Lt = class extends _t {}
Mn(Lt, 'JsonNull')
var Bt = class extends _t {}
Mn(Bt, 'AnyNull')
var Dr = {
  classes: { DbNull: Ft, JsonNull: Lt, AnyNull: Bt },
  instances: { DbNull: new Ft(Or), JsonNull: new Lt(Or), AnyNull: new Bt(Or) },
}
function Mn(e, t) {
  Object.defineProperty(e, 'name', { value: t, configurable: !0 })
}
d()
u()
c()
p()
m()
var _o = ': ',
  Mr = class {
    constructor(t, r) {
      this.name = t
      this.value = r
      this.hasError = !1
    }
    markAsError() {
      this.hasError = !0
    }
    getPrintWidth() {
      return this.name.length + this.value.getPrintWidth() + _o.length
    }
    write(t) {
      let r = new ye(this.name)
      this.hasError && r.underline().setColor(t.context.colors.red),
        t.write(r).write(_o).write(this.value)
    }
  }
var Nn = class {
  constructor(t) {
    this.errorMessages = []
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
function ct(e) {
  return new Nn(Fo(e))
}
function Fo(e) {
  let t = new lt()
  for (let [r, n] of Object.entries(e)) {
    let i = new Mr(r, Lo(n))
    t.addField(i)
  }
  return t
}
function Lo(e) {
  if (typeof e == 'string') return new K(JSON.stringify(e))
  if (typeof e == 'number' || typeof e == 'boolean') return new K(String(e))
  if (typeof e == 'bigint') return new K(`${e}n`)
  if (e === null) return new K('null')
  if (e === void 0) return new K('undefined')
  if (it(e)) return new K(`new Prisma.Decimal("${e.toFixed()}")`)
  if (e instanceof Uint8Array)
    return w.Buffer.isBuffer(e)
      ? new K(`Buffer.alloc(${e.byteLength})`)
      : new K(`new Uint8Array(${e.byteLength})`)
  if (e instanceof Date) {
    let t = Tr(e) ? e.toISOString() : 'Invalid Date'
    return new K(`new Date("${t}")`)
  }
  return e instanceof Ce
    ? new K(`Prisma.${e._getName()}`)
    : ut(e)
      ? new K(`prisma.${No(e.modelName)}.$fields.${e.name}`)
      : Array.isArray(e)
        ? Ju(e)
        : typeof e == 'object'
          ? Fo(e)
          : new K(Object.prototype.toString.call(e))
}
function Ju(e) {
  let t = new at()
  for (let r of e) t.addItem(Lo(r))
  return t
}
function Nr(e, t) {
  let r = t === 'pretty' ? Ao : Ir,
    n = e.renderAllMessages(r),
    i = new ot(0, { colors: r }).write(e).toString()
  return { message: n, args: i }
}
function _r({
  args: e,
  errors: t,
  errorFormat: r,
  callsite: n,
  originalMethod: i,
  clientVersion: o,
  globalOmit: s,
}) {
  let a = ct(e)
  for (let h of t) Rr(h, a, s)
  let { message: l, args: f } = Nr(a, r),
    g = Cr({
      message: l,
      callsite: n,
      originalMethod: i,
      showColors: r === 'pretty',
      callArguments: f,
    })
  throw new Z(g, { clientVersion: o })
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
    this._map = new Map()
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
function Ut(e) {
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
function Uo(e, t, r) {
  let n = Ee(r)
  return !t.result || !(t.result.$allModels || t.result[n])
    ? e
    : Qu({
        ...e,
        ...Bo(t.name, e, t.result.$allModels),
        ...Bo(t.name, e, t.result[n]),
      })
}
function Qu(e) {
  let t = new we(),
    r = (n, i) =>
      t.getOrCreate(n, () =>
        i.has(n)
          ? [n]
          : (i.add(n), e[n] ? e[n].needs.flatMap(o => r(o, i)) : [n]),
      )
  return Ze(e, n => ({ ...n, needs: r(n.name, new Set()) }))
}
function Bo(e, t, r) {
  return r
    ? Ze(r, ({ needs: n, compute: i }, o) => ({
        name: o,
        needs: n ? Object.keys(n).filter(s => n[s]) : [],
        compute: Wu(t, o, i),
      }))
    : {}
}
function Wu(e, t, r) {
  let n = e?.[t]?.compute
  return n ? i => r({ ...i, [t]: n(i) }) : r
}
function qo(e, t) {
  if (!t) return e
  let r = { ...e }
  for (let n of Object.values(t))
    if (e[n.name]) for (let i of n.needs) r[i] = !0
  return r
}
function $o(e, t) {
  if (!t) return e
  let r = { ...e }
  for (let n of Object.values(t))
    if (!e[n.name]) for (let i of n.needs) delete r[i]
  return r
}
var Fr = class {
    constructor(t, r) {
      this.extension = t
      this.previous = r
      this.computedFieldsCache = new we()
      this.modelExtensionsCache = new we()
      this.queryCallbacksCache = new we()
      this.clientExtensions = Ut(() =>
        this.extension.client
          ? {
              ...this.previous?.getAllClientExtensions(),
              ...this.extension.client,
            }
          : this.previous?.getAllClientExtensions(),
      )
      this.batchCallbacks = Ut(() => {
        let t = this.previous?.getAllBatchQueryCallbacks() ?? [],
          r = this.extension.query?.$__internalBatch
        return r ? t.concat(r) : t
      })
    }
    getAllComputedFields(t) {
      return this.computedFieldsCache.getOrCreate(t, () =>
        Uo(this.previous?.getAllComputedFields(t), this.extension, t),
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
  pt = class e {
    constructor(t) {
      this.head = t
    }
    static empty() {
      return new e()
    }
    static single(t) {
      return new e(new Fr(t))
    }
    isEmpty() {
      return this.head === void 0
    }
    append(t) {
      return new e(new Fr(t, this.head))
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
var Lr = class {
  constructor(t) {
    this.name = t
  }
}
function Vo(e) {
  return e instanceof Lr
}
function jo(e) {
  return new Lr(e)
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
var Go = Symbol(),
  qt = class {
    constructor(t) {
      if (t !== Go)
        throw new Error('Skip instance can not be constructed directly')
    }
    ifUndefined(t) {
      return t === void 0 ? Br : t
    }
  },
  Br = new qt(Go)
function be(e) {
  return e instanceof qt
}
var Hu = {
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
  Jo = 'explicitly `undefined` values are not allowed'
function Ur({
  modelName: e,
  action: t,
  args: r,
  runtimeDataModel: n,
  extensions: i = pt.empty(),
  callsite: o,
  clientMethod: s,
  errorFormat: a,
  clientVersion: l,
  previewFeatures: f,
  globalOmit: g,
}) {
  let h = new _n({
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
  return { modelName: e, action: Hu[t], query: $t(r, h) }
}
function $t({ select: e, include: t, ...r } = {}, n) {
  let i = r.omit
  return delete r.omit, { arguments: Wo(r, n), selection: Ku(e, t, i, n) }
}
function Ku(e, t, r, n) {
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
      Xu(e, n))
    : zu(n, t, r)
}
function zu(e, t, r) {
  let n = {}
  return (
    e.modelOrType &&
      !e.isRawAction() &&
      ((n.$composites = !0), (n.$scalars = !0)),
    t && Yu(n, t, e),
    Zu(n, r, e),
    n
  )
}
function Yu(e, t, r) {
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
      e[n] = $t(i === !0 ? {} : i, o)
      continue
    }
    if (i === !0) {
      e[n] = !0
      continue
    }
    e[n] = $t(i, o)
  }
}
function Zu(e, t, r) {
  let n = r.getComputedFields(),
    i = { ...r.getGlobalOmit(), ...t },
    o = $o(i, n)
  for (let [s, a] of Object.entries(o)) {
    if (be(a)) continue
    Fn(a, r.nestSelection(s))
    let l = r.findField(s)
    ;(n?.[s] && !l) || (e[s] = !a)
  }
}
function Xu(e, t) {
  let r = {},
    n = t.getComputedFields(),
    i = qo(e, n)
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
        l?.kind === 'object' ? (r[o] = $t({}, a)) : (r[o] = !0)
        continue
      }
      r[o] = $t(s, a)
    }
  }
  return r
}
function Qo(e, t) {
  if (e === null) return null
  if (typeof e == 'string' || typeof e == 'number' || typeof e == 'boolean')
    return e
  if (typeof e == 'bigint') return { $type: 'BigInt', value: String(e) }
  if (nt(e)) {
    if (Tr(e)) return { $type: 'DateTime', value: e.toISOString() }
    t.throwValidationError({
      kind: 'InvalidArgumentValue',
      selectionPath: t.getSelectionPath(),
      argumentPath: t.getArgumentPath(),
      argument: { name: t.getArgumentName(), typeNames: ['Date'] },
      underlyingError: 'Provided Date object is invalid',
    })
  }
  if (Vo(e)) return { $type: 'Param', value: e.name }
  if (ut(e))
    return {
      $type: 'FieldRef',
      value: { _ref: e.name, _container: e.modelName },
    }
  if (Array.isArray(e)) return ec(e, t)
  if (ArrayBuffer.isView(e)) {
    let { buffer: r, byteOffset: n, byteLength: i } = e
    return { $type: 'Bytes', value: w.Buffer.from(r, n, i).toString('base64') }
  }
  if (tc(e)) return e.values
  if (it(e)) return { $type: 'Decimal', value: e.toFixed() }
  if (e instanceof Ce) {
    if (e !== Dr.instances[e._getName()])
      throw new Error('Invalid ObjectEnumValue')
    return { $type: 'Enum', value: e._getName() }
  }
  if (rc(e)) return e.toJSON()
  if (typeof e == 'object') return Wo(e, t)
  t.throwValidationError({
    kind: 'InvalidArgumentValue',
    selectionPath: t.getSelectionPath(),
    argumentPath: t.getArgumentPath(),
    argument: { name: t.getArgumentName(), typeNames: [] },
    underlyingError: `We could not serialize ${Object.prototype.toString.call(e)} value. Serialize the object to JSON or implement a ".toJSON()" method on it`,
  })
}
function Wo(e, t) {
  if (e.$type) return { $type: 'Raw', value: e }
  let r = {}
  for (let n in e) {
    let i = e[n],
      o = t.nestArgument(n)
    be(i) ||
      (i !== void 0
        ? (r[n] = Qo(i, o))
        : t.isPreviewFeatureOn('strictUndefinedChecks') &&
          t.throwValidationError({
            kind: 'InvalidArgumentValue',
            argumentPath: o.getArgumentPath(),
            selectionPath: t.getSelectionPath(),
            argument: { name: t.getArgumentName(), typeNames: [] },
            underlyingError: Jo,
          }))
  }
  return r
}
function ec(e, t) {
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
    r.push(Qo(o, i))
  }
  return r
}
function tc(e) {
  return typeof e == 'object' && e !== null && e.__prismaRawParameters__ === !0
}
function rc(e) {
  return typeof e == 'object' && e !== null && typeof e.toJSON == 'function'
}
function Fn(e, t) {
  e === void 0 &&
    t.isPreviewFeatureOn('strictUndefinedChecks') &&
    t.throwValidationError({
      kind: 'InvalidSelectionValue',
      selectionPath: t.getSelectionPath(),
      underlyingError: Jo,
    })
}
var _n = class e {
  constructor(t) {
    this.params = t
    this.params.modelName &&
      (this.modelOrType =
        this.params.runtimeDataModel.models[this.params.modelName] ??
        this.params.runtimeDataModel.types[this.params.modelName])
  }
  throwValidationError(t) {
    _r({
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
      ? (this.params.globalOmit?.[rt(this.params.modelName)] ?? {})
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
function Ho(e) {
  if (!e._hasPreviewFlag('metrics'))
    throw new Z(
      '`metrics` preview feature must be enabled in order to access metrics API',
      { clientVersion: e._clientVersion },
    )
}
var mt = class {
  constructor(t) {
    this._client = t
  }
  prometheus(t) {
    return (
      Ho(this._client),
      this._client._engine.metrics({ format: 'prometheus', ...t })
    )
  }
  json(t) {
    return (
      Ho(this._client), this._client._engine.metrics({ format: 'json', ...t })
    )
  }
}
d()
u()
c()
p()
m()
function Ko(e) {
  return { models: Ln(e.models), enums: Ln(e.enums), types: Ln(e.types) }
}
function Ln(e) {
  let t = {}
  for (let { name: r, ...n } of e) t[r] = n
  return t
}
function zo(e, t) {
  let r = Ut(() => nc(t))
  Object.defineProperty(e, 'dmmf', { get: () => r.get() })
}
function nc(e) {
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
var Un = new WeakMap(),
  qr = '$$PrismaTypedSql',
  qn = class {
    constructor(t, r) {
      Un.set(this, { sql: t, values: r }),
        Object.defineProperty(this, qr, { value: qr })
    }
    get sql() {
      return Un.get(this).sql
    }
    get values() {
      return Un.get(this).values
    }
  }
function Yo(e) {
  return (...t) => new qn(e, t)
}
function Zo(e) {
  return e != null && e[qr] === qr
}
d()
u()
c()
p()
m()
var da = Je(Xo())
d()
u()
c()
p()
m()
Yi()
Ji()
Wi()
d()
u()
c()
p()
m()
var se = class e {
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
function es(e, t = ',', r = '', n = '') {
  if (e.length === 0)
    throw new TypeError(
      'Expected `join([])` to be called with an array of multiple elements, but got an empty array',
    )
  return new se([r, ...Array(e.length - 1).fill(t), n], e)
}
function $n(e) {
  return new se([e], [])
}
var ts = $n('')
function Vn(e, ...t) {
  return new se(e, t)
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
function Vt(e) {
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
function te(e, t) {
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
function Ue(e) {
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
var rs = Symbol.for('nodejs.util.inspect.custom')
function pe(e, t) {
  let r = oc(t),
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
        let s = ns(Reflect.ownKeys(o), r),
          a = ns(Array.from(r.keys()), r)
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
    (i[rs] = function () {
      let o = { ...this }
      return delete o[rs], o
    }),
    i
  )
}
function oc(e) {
  let t = new Map()
  for (let r of e) {
    let n = r.getKeys()
    for (let i of n) t.set(i, r)
  }
  return t
}
function ns(e, t) {
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
function is(e) {
  if (e === void 0) return ''
  let t = ct(e)
  return new ot(0, { colors: Ir }).write(t).toString()
}
d()
u()
c()
p()
m()
var sc = 'P2037'
function Gr({ error: e, user_facing_error: t }, r, n) {
  return t.error_code
    ? new ne(ac(t, n), {
        code: t.error_code,
        clientVersion: r,
        meta: t.meta,
        batchRequestIdx: t.batch_request_idx,
      })
    : new ie(e, { clientVersion: r, batchRequestIdx: t.batch_request_idx })
}
function ac(e, t) {
  let r = e.message
  return (
    (t === 'postgresql' || t === 'postgres' || t === 'mysql') &&
      e.error_code === sc &&
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
var jn = class {
  getLocation() {
    return null
  }
}
function Ne(e) {
  return typeof $EnabledCallSite == 'function' && e !== 'minimal'
    ? new $EnabledCallSite()
    : new jn()
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
var os = { _avg: !0, _count: !0, _sum: !0, _min: !0, _max: !0 }
function ft(e = {}) {
  let t = uc(e)
  return Object.entries(t).reduce(
    (n, [i, o]) => (
      os[i] !== void 0 ? (n.select[i] = { select: o }) : (n[i] = o), n
    ),
    { select: {} },
  )
}
function uc(e = {}) {
  return typeof e._count == 'boolean' ? { ...e, _count: { _all: e._count } } : e
}
function Jr(e = {}) {
  return t => (typeof e._count == 'boolean' && (t._count = t._count._all), t)
}
function ss(e, t) {
  let r = Jr(e)
  return t({ action: 'aggregate', unpacker: r, argsMapper: ft })(e)
}
d()
u()
c()
p()
m()
function cc(e = {}) {
  let { select: t, ...r } = e
  return typeof t == 'object'
    ? ft({ ...r, _count: t })
    : ft({ ...r, _count: { _all: !0 } })
}
function pc(e = {}) {
  return typeof e.select == 'object'
    ? t => Jr(e)(t)._count
    : t => Jr(e)(t)._count._all
}
function as(e, t) {
  return t({ action: 'count', unpacker: pc(e), argsMapper: cc })(e)
}
d()
u()
c()
p()
m()
function mc(e = {}) {
  let t = ft(e)
  if (Array.isArray(t.by))
    for (let r of t.by) typeof r == 'string' && (t.select[r] = !0)
  else typeof t.by == 'string' && (t.select[t.by] = !0)
  return t
}
function dc(e = {}) {
  return t => (
    typeof e?._count == 'boolean' &&
      t.forEach(r => {
        r._count = r._count._all
      }),
    t
  )
}
function ls(e, t) {
  return t({ action: 'groupBy', unpacker: dc(e), argsMapper: mc })(e)
}
function us(e, t, r) {
  if (t === 'aggregate') return n => ss(n, r)
  if (t === 'count') return n => as(n, r)
  if (t === 'groupBy') return n => ls(n, r)
}
d()
u()
c()
p()
m()
function cs(e, t) {
  let r = t.fields.filter(i => !i.relationName),
    n = Tn(r, i => i.name)
  return new Proxy(
    {},
    {
      get(i, o) {
        if (o in i || typeof o == 'symbol') return i[o]
        let s = n[o]
        if (s) return new Nt(e, o, s.type, s.isList, s.kind === 'enum')
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
var ps = e => (Array.isArray(e) ? e : e.split('.')),
  Gn = (e, t) => ps(t).reduce((r, n) => r && r[n], e),
  ms = (e, t, r) =>
    ps(t).reduceRight(
      (n, i, o, s) => Object.assign({}, Gn(e, s.slice(0, o)), { [i]: n }),
      r,
    )
function fc(e, t) {
  return e === void 0 || t === void 0 ? [] : [...t, 'select', e]
}
function gc(e, t, r) {
  return t === void 0 ? (e ?? {}) : ms(t, r, e || !0)
}
function Jn(e, t, r, n, i, o) {
  let a = e._runtimeDataModel.models[t].fields.reduce(
    (l, f) => ({ ...l, [f.name]: f }),
    {},
  )
  return l => {
    let f = Ne(e._errorFormat),
      g = fc(n, i),
      h = gc(l, o, g),
      v = r({ dataPath: g, callsite: f })(h),
      S = hc(e, t)
    return new Proxy(v, {
      get(R, A) {
        if (!S.includes(A)) return R[A]
        let M = [a[A].type, r, A],
          U = [g, h]
        return Jn(e, ...M, ...U)
      },
      ...Vr([...S, ...Object.getOwnPropertyNames(v)]),
    })
  }
}
function hc(e, t) {
  return e._runtimeDataModel.models[t].fields
    .filter(r => r.kind === 'object')
    .map(r => r.name)
}
var yc = [
    'findUnique',
    'findUniqueOrThrow',
    'findFirst',
    'findFirstOrThrow',
    'create',
    'update',
    'upsert',
    'delete',
  ],
  wc = ['aggregate', 'count', 'groupBy']
function Qn(e, t) {
  let r = e._extensions.getAllModelExtensions(t) ?? {},
    n = [
      Ec(e, t),
      xc(e, t),
      Vt(r),
      te('name', () => t),
      te('$name', () => t),
      te('$parent', () => e._appliedParent),
    ]
  return pe({}, n)
}
function Ec(e, t) {
  let r = Ee(t),
    n = Object.keys(fr.ModelAction).concat('count')
  return {
    getKeys() {
      return n
    },
    getPropertyValue(i) {
      let o = i,
        s = a => l => {
          let f = Ne(e._errorFormat)
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
      return yc.includes(o) ? Jn(e, t, s) : bc(i) ? us(e, i, s) : s({})
    },
  }
}
function bc(e) {
  return wc.includes(e)
}
function xc(e, t) {
  return Ue(
    te('fields', () => {
      let r = e._runtimeDataModel.models[t]
      return cs(t, r)
    }),
  )
}
d()
u()
c()
p()
m()
function ds(e) {
  return e.replace(/^./, t => t.toUpperCase())
}
var Wn = Symbol()
function jt(e) {
  let t = [
      Pc(e),
      vc(e),
      te(Wn, () => e),
      te('$parent', () => e._appliedParent),
    ],
    r = e._extensions.getAllClientExtensions()
  return r && t.push(Vt(r)), pe(e, t)
}
function Pc(e) {
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
function vc(e) {
  let t = Object.keys(e._runtimeDataModel.models),
    r = t.map(Ee),
    n = [...new Set(t.concat(r))]
  return Ue({
    getKeys() {
      return n
    },
    getPropertyValue(i) {
      let o = ds(i)
      if (e._runtimeDataModel.models[o] !== void 0) return Qn(e, o)
      if (e._runtimeDataModel.models[i] !== void 0) return Qn(e, i)
    },
    getPropertyDescriptor(i) {
      if (!r.includes(i)) return { enumerable: !1 }
    },
  })
}
function fs(e) {
  return e[Wn] ? e[Wn] : e
}
function gs(e) {
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
  return jt(t)
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
function hs({ result: e, modelName: t, select: r, omit: n, extensions: i }) {
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
    Tc(e, l.needs) && s.push(Cc(l, pe(e, s)))
  }
  return s.length > 0 || a.length > 0 ? pe(e, [...s, ...a]) : e
}
function Tc(e, t) {
  return t.every(r => vn(e, r))
}
function Cc(e, t) {
  return Ue(te(e.name, () => e.compute(t)))
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
      ys({
        includeOrSelect: r.include,
        result: o,
        parentModelName: i,
        runtimeDataModel: n,
        visitor: e,
      }),
    r.select &&
      ys({
        includeOrSelect: r.select,
        result: o,
        parentModelName: i,
        runtimeDataModel: n,
        visitor: e,
      }),
    o
  )
}
function ys({
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
function ws({
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
          return hs({
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
function Es(e) {
  if (e instanceof se) return Rc(e)
  if (Array.isArray(e)) {
    let r = [e[0]]
    for (let n = 1; n < e.length; n++) r[n] = Gt(e[n])
    return r
  }
  let t = {}
  for (let r in e) t[r] = Gt(e[r])
  return t
}
function Rc(e) {
  return new se(e.strings, e.values)
}
function Gt(e) {
  if (typeof e != 'object' || e == null || e instanceof Ce || ut(e)) return e
  if (it(e)) return new he(e.toFixed())
  if (nt(e)) return new Date(+e)
  if (ArrayBuffer.isView(e)) return e.slice(0)
  if (Array.isArray(e)) {
    let t = e.length,
      r
    for (r = Array(t); t--; ) r[t] = Gt(e[t])
    return r
  }
  if (typeof e == 'object') {
    let t = {}
    for (let r in e)
      r === '__proto__'
        ? Object.defineProperty(t, r, {
            value: Gt(e[r]),
            configurable: !0,
            enumerable: !0,
            writable: !0,
          })
        : (t[r] = Gt(e[r]))
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
var Rs = ee('prisma:client'),
  As = { Vercel: 'vercel', 'Netlify CI': 'netlify' }
function Ss({ postinstall: e, ciName: t, clientVersion: r }) {
  if (
    (Rs('checkPlatformCaching:postinstall', e),
    Rs('checkPlatformCaching:ciName', t),
    e === !0 && t && t in As)
  ) {
    let n = `Prisma has detected that this project was built on ${t}, which caches dependencies. This leads to an outdated Prisma Client because Prisma's auto-generation isn't triggered. To fix this, make sure to run the \`prisma generate\` command during the build process.

Learn how: https://pris.ly/d/${As[t]}-build`
    throw (console.error(n), new Q(n, r))
  }
}
d()
u()
c()
p()
m()
function Is(e, t) {
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
d()
u()
c()
p()
m()
var Ac = 'Cloudflare-Workers',
  Sc = 'node'
function ks() {
  return typeof Netlify == 'object'
    ? 'netlify'
    : typeof EdgeRuntime == 'string'
      ? 'edge-light'
      : globalThis.navigator?.userAgent === Ac
        ? 'workerd'
        : globalThis.Deno
          ? 'deno'
          : globalThis.__lagon__
            ? 'lagon'
            : globalThis.process?.release?.name === Sc
              ? 'node'
              : globalThis.Bun
                ? 'bun'
                : globalThis.fastly
                  ? 'fastly'
                  : 'unknown'
}
var Ic = {
  node: 'Node.js',
  workerd: 'Cloudflare Workers',
  deno: 'Deno and Deno Deploy',
  netlify: 'Netlify Edge Functions',
  'edge-light':
    'Edge Runtime (Vercel Edge Functions, Vercel Edge Middleware, Next.js (Pages Router) Edge API Routes, Next.js (App Router) Edge Route Handlers or Next.js Middleware)',
}
function Wr() {
  let e = ks()
  return {
    id: e,
    prettyName: Ic[e] || e,
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
    throw Wr().id === 'workerd'
      ? new Q(
          `error: Environment variable not found: ${s.fromEnvVar}.

In Cloudflare module Workers, environment variables are available only in the Worker's \`env\` parameter of \`fetch\`.
To solve this, provide the connection string directly: https://pris.ly/d/cloudflare-datasource-url`,
          n,
        )
      : new Q(`error: Environment variable not found: ${s.fromEnvVar}.`, n)
  if (i === void 0)
    throw new Q(
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
var Hr = class extends Error {
  constructor(t, r) {
    super(t), (this.clientVersion = r.clientVersion), (this.cause = r.cause)
  }
  get [Symbol.toStringTag]() {
    return this.name
  }
}
var ae = class extends Hr {
  constructor(t, r) {
    super(t, r), (this.isRetryable = r.isRetryable ?? !0)
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
function B(e, t) {
  return { ...e, isRetryable: t }
}
var ht = class extends ae {
  constructor(r) {
    super('This request must be retried', B(r, !0))
    this.name = 'ForcedRetryError'
    this.code = 'P5001'
  }
}
_(ht, 'ForcedRetryError')
d()
u()
c()
p()
m()
var qe = class extends ae {
  constructor(r, n) {
    super(r, B(n, !1))
    this.name = 'InvalidDatasourceError'
    this.code = 'P6001'
  }
}
_(qe, 'InvalidDatasourceError')
d()
u()
c()
p()
m()
var $e = class extends ae {
  constructor(r, n) {
    super(r, B(n, !1))
    this.name = 'NotImplementedYetError'
    this.code = 'P5004'
  }
}
_($e, 'NotImplementedYetError')
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
var G = class extends ae {
  constructor(t, r) {
    super(t, r), (this.response = r.response)
    let n = this.response.headers.get('prisma-request-id')
    if (n) {
      let i = `(The request id was: ${n})`
      this.message = this.message + ' ' + i
    }
  }
}
var Ve = class extends G {
  constructor(r) {
    super('Schema needs to be uploaded', B(r, !0))
    this.name = 'SchemaMissingError'
    this.code = 'P5005'
  }
}
_(Ve, 'SchemaMissingError')
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
var Hn = 'This request could not be understood by the server',
  Jt = class extends G {
    constructor(r, n, i) {
      super(n || Hn, B(r, !1))
      this.name = 'BadRequestError'
      this.code = 'P5000'
      i && (this.code = i)
    }
  }
_(Jt, 'BadRequestError')
d()
u()
c()
p()
m()
var Qt = class extends G {
  constructor(r, n) {
    super('Engine not started: healthcheck timeout', B(r, !0))
    this.name = 'HealthcheckTimeoutError'
    this.code = 'P5013'
    this.logs = n
  }
}
_(Qt, 'HealthcheckTimeoutError')
d()
u()
c()
p()
m()
var Wt = class extends G {
  constructor(r, n, i) {
    super(n, B(r, !0))
    this.name = 'EngineStartupError'
    this.code = 'P5014'
    this.logs = i
  }
}
_(Wt, 'EngineStartupError')
d()
u()
c()
p()
m()
var Ht = class extends G {
  constructor(r) {
    super('Engine version is not supported', B(r, !1))
    this.name = 'EngineVersionNotSupportedError'
    this.code = 'P5012'
  }
}
_(Ht, 'EngineVersionNotSupportedError')
d()
u()
c()
p()
m()
var Kn = 'Request timed out',
  Kt = class extends G {
    constructor(r, n = Kn) {
      super(n, B(r, !1))
      this.name = 'GatewayTimeoutError'
      this.code = 'P5009'
    }
  }
_(Kt, 'GatewayTimeoutError')
d()
u()
c()
p()
m()
var kc = 'Interactive transaction error',
  zt = class extends G {
    constructor(r, n = kc) {
      super(n, B(r, !1))
      this.name = 'InteractiveTransactionError'
      this.code = 'P5015'
    }
  }
_(zt, 'InteractiveTransactionError')
d()
u()
c()
p()
m()
var Oc = 'Request parameters are invalid',
  Yt = class extends G {
    constructor(r, n = Oc) {
      super(n, B(r, !1))
      this.name = 'InvalidRequestError'
      this.code = 'P5011'
    }
  }
_(Yt, 'InvalidRequestError')
d()
u()
c()
p()
m()
var zn = 'Requested resource does not exist',
  Zt = class extends G {
    constructor(r, n = zn) {
      super(n, B(r, !1))
      this.name = 'NotFoundError'
      this.code = 'P5003'
    }
  }
_(Zt, 'NotFoundError')
d()
u()
c()
p()
m()
var Yn = 'Unknown server error',
  yt = class extends G {
    constructor(r, n, i) {
      super(n || Yn, B(r, !0))
      this.name = 'ServerError'
      this.code = 'P5006'
      this.logs = i
    }
  }
_(yt, 'ServerError')
d()
u()
c()
p()
m()
var Zn = 'Unauthorized, check your connection string',
  Xt = class extends G {
    constructor(r, n = Zn) {
      super(n, B(r, !1))
      this.name = 'UnauthorizedError'
      this.code = 'P5007'
    }
  }
_(Xt, 'UnauthorizedError')
d()
u()
c()
p()
m()
var Xn = 'Usage exceeded, retry again later',
  er = class extends G {
    constructor(r, n = Xn) {
      super(n, B(r, !0))
      this.name = 'UsageExceededError'
      this.code = 'P5008'
    }
  }
_(er, 'UsageExceededError')
async function Dc(e) {
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
async function tr(e, t) {
  if (e.ok) return
  let r = { clientVersion: t, response: e },
    n = await Dc(e)
  if (n.type === 'QueryEngineError')
    throw new ne(n.body.message, { code: n.body.error_code, clientVersion: t })
  if (n.type === 'DataProxyError') {
    if (n.body === 'InternalDataProxyError')
      throw new yt(r, 'Internal Data Proxy error')
    if ('EngineNotStarted' in n.body) {
      if (n.body.EngineNotStarted.reason === 'SchemaMissing') return new Ve(r)
      if (n.body.EngineNotStarted.reason === 'EngineVersionNotSupported')
        throw new Ht(r)
      if ('EngineStartupError' in n.body.EngineNotStarted.reason) {
        let { msg: i, logs: o } =
          n.body.EngineNotStarted.reason.EngineStartupError
        throw new Wt(r, i, o)
      }
      if ('KnownEngineStartupError' in n.body.EngineNotStarted.reason) {
        let { msg: i, error_code: o } =
          n.body.EngineNotStarted.reason.KnownEngineStartupError
        throw new Q(i, t, o)
      }
      if ('HealthcheckTimeout' in n.body.EngineNotStarted.reason) {
        let { logs: i } = n.body.EngineNotStarted.reason.HealthcheckTimeout
        throw new Qt(r, i)
      }
    }
    if ('InteractiveTransactionMisrouted' in n.body) {
      let i = {
        IDParseError: 'Could not parse interactive transaction ID',
        NoQueryEngineFoundError:
          'Could not find Query Engine for the specified host and transaction ID',
        TransactionStartError: 'Could not start interactive transaction',
      }
      throw new zt(r, i[n.body.InteractiveTransactionMisrouted.reason])
    }
    if ('InvalidRequestError' in n.body)
      throw new Yt(r, n.body.InvalidRequestError.reason)
  }
  if (e.status === 401 || e.status === 403) throw new Xt(r, wt(Zn, n))
  if (e.status === 404) return new Zt(r, wt(zn, n))
  if (e.status === 429) throw new er(r, wt(Xn, n))
  if (e.status === 504) throw new Kt(r, wt(Kn, n))
  if (e.status >= 500) throw new yt(r, wt(Yn, n))
  if (e.status >= 400) throw new Jt(r, wt(Hn, n))
}
function wt(e, t) {
  return t.type === 'EmptyError' ? e : `${e}: ${JSON.stringify(t)}`
}
d()
u()
c()
p()
m()
function Os(e) {
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
var Re = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
function Ds(e) {
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
      (r += Re[s] + Re[a] + Re[l] + Re[f])
  return (
    i == 1
      ? ((g = t[o]),
        (s = (g & 252) >> 2),
        (a = (g & 3) << 4),
        (r += Re[s] + Re[a] + '=='))
      : i == 2 &&
        ((g = (t[o] << 8) | t[o + 1]),
        (s = (g & 64512) >> 10),
        (a = (g & 1008) >> 4),
        (l = (g & 15) << 2),
        (r += Re[s] + Re[a] + Re[l] + '=')),
    r
  )
}
d()
u()
c()
p()
m()
function Ms(e) {
  if (
    !!e.generator?.previewFeatures.some(r =>
      r.toLowerCase().includes('metrics'),
    )
  )
    throw new Q(
      'The `metrics` preview feature is not yet available with Accelerate.\nPlease remove `metrics` from the `previewFeatures` in your schema.\n\nMore information about Accelerate: https://pris.ly/d/accelerate',
      e.clientVersion,
    )
}
d()
u()
c()
p()
m()
function Mc(e) {
  return e[0] * 1e3 + e[1] / 1e6
}
function ei(e) {
  return new Date(Mc(e))
}
d()
u()
c()
p()
m()
var Ns = {
  '@prisma/debug': 'workspace:*',
  '@prisma/engines-version':
    '6.4.0-29.a9055b89e58b4b5bfb59600785423b1db3d0e75d',
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
var rr = class extends ae {
  constructor(r, n) {
    super(
      `Cannot fetch data from service:
${r}`,
      B(n, !0),
    )
    this.name = 'RequestError'
    this.code = 'P5010'
  }
}
_(rr, 'RequestError')
async function je(e, t, r = n => n) {
  let { clientVersion: n, ...i } = t,
    o = r(fetch)
  try {
    return await o(e, i)
  } catch (s) {
    let a = s.message ?? 'Unknown error'
    throw new rr(a, { clientVersion: n, cause: s })
  }
}
var _c = /^[1-9][0-9]*\.[0-9]+\.[0-9]+$/,
  _s = ee('prisma:client:dataproxyEngine')
async function Fc(e, t) {
  let r = Ns['@prisma/engines-version'],
    n = t.clientVersion ?? 'unknown'
  if (y.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION)
    return y.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION
  if (e.includes('accelerate') && n !== '0.0.0' && n !== 'in-memory') return n
  let [i, o] = n?.split('-') ?? []
  if (o === void 0 && _c.test(i)) return i
  if (o !== void 0 || n === '0.0.0' || n === 'in-memory') {
    if (e.startsWith('localhost') || e.startsWith('127.0.0.1')) return '0.0.0'
    let [s] = r.split('-') ?? [],
      [a, l, f] = s.split('.'),
      g = Lc(`<=${a}.${l}.${f}`),
      h = await je(g, { clientVersion: n })
    if (!h.ok)
      throw new Error(
        `Failed to fetch stable Prisma version, unpkg.com status ${h.status} ${h.statusText}, response body: ${(await h.text()) || '<empty body>'}`,
      )
    let v = await h.text()
    _s('length of body fetched from unpkg.com', v.length)
    let S
    try {
      S = JSON.parse(v)
    } catch (R) {
      throw (
        (console.error('JSON.parse error: body fetched from unpkg.com: ', v), R)
      )
    }
    return S.version
  }
  throw new $e(
    'Only `major.minor.patch` versions are supported by Accelerate.',
    { clientVersion: n },
  )
}
async function Fs(e, t) {
  let r = await Fc(e, t)
  return _s('version', r), r
}
function Lc(e) {
  return encodeURI(`https://unpkg.com/prisma@${e}/package.json`)
}
var Ls = 3,
  Kr = ee('prisma:client:dataproxyEngine'),
  ti = class {
    constructor({
      apiKey: t,
      tracingHelper: r,
      logLevel: n,
      logQueries: i,
      engineHash: o,
    }) {
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
      this.name = 'DataProxyEngine'
      Ms(t),
        (this.config = t),
        (this.env = { ...t.env, ...(typeof y < 'u' ? y.env : {}) }),
        (this.inlineSchema = Ds(t.inlineSchema)),
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
            (this.headerBuilder = new ti({
              apiKey: r,
              tracingHelper: this.tracingHelper,
              logLevel: this.config.logLevel,
              logQueries: this.config.logQueries,
              engineHash: this.engineHash,
            })),
            (this.remoteClientVersion = await Fs(t, this.config)),
            Kr('host', this.host)
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
              Kr(r)
              break
            case 'error':
            case 'warn':
            case 'info': {
              this.logEmitter.emit(r.level, {
                timestamp: ei(r.timestamp),
                message: r.attributes.message ?? '',
                target: r.target,
              })
              break
            }
            case 'query': {
              this.logEmitter.emit('query', {
                query: r.attributes.query ?? '',
                timestamp: ei(r.timestamp),
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
        let r = await je(await this.url('schema'), {
          method: 'PUT',
          headers: this.headerBuilder.build(),
          body: this.inlineSchema,
          clientVersion: this.clientVersion,
        })
        r.ok || Kr('schema response status', r.status)
        let n = await tr(r, this.clientVersion)
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
          let a = await je(
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
          a.ok || Kr('graphql response status', a.status),
            await this.handleError(await tr(a, this.clientVersion))
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
            let l = await je(a, {
              method: 'POST',
              headers: this.headerBuilder.build({ traceparent: r.traceparent }),
              body: s,
              clientVersion: this.clientVersion,
            })
            await this.handleError(await tr(l, this.clientVersion))
            let f = await l.json(),
              { extensions: g } = f
            g && this.propagateResponseExtensions(g)
            let h = f.id,
              v = f['data-proxy'].endpoint
            return { id: h, payload: { endpoint: v } }
          } else {
            let s = `${n.payload.endpoint}/${t}`
            o(s)
            let a = await je(s, {
              method: 'POST',
              headers: this.headerBuilder.build({ traceparent: r.traceparent }),
              clientVersion: this.clientVersion,
            })
            await this.handleError(await tr(a, this.clientVersion))
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
        throw new qe(
          `Error validating datasource \`${r}\`: the URL must start with the protocol \`prisma://\``,
          t,
        )
      }
      let { protocol: o, host: s, searchParams: a } = i
      if (o !== 'prisma:' && o !== dr)
        throw new qe(
          `Error validating datasource \`${r}\`: the URL must start with the protocol \`prisma://\``,
          t,
        )
      let l = a.get('api_key')
      if (l === null || l.length < 1)
        throw new qe(
          `Error validating datasource \`${r}\`: the URL must contain a valid API key`,
          t,
        )
      return [s, l]
    }
    metrics() {
      throw new $e('Metrics are not yet supported for Accelerate', {
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
          if (!(i instanceof ae) || !i.isRetryable) throw i
          if (r >= Ls) throw i instanceof ht ? i.cause : i
          this.logEmitter.emit('warn', {
            message: `Attempt ${r + 1}/${Ls} failed for ${t.actionGerund}: ${i.message ?? '(unknown)'}`,
            timestamp: new Date(),
            target: '',
          })
          let o = await Os(r)
          this.logEmitter.emit('warn', {
            message: `Retrying after ${o}ms`,
            timestamp: new Date(),
            target: '',
          })
        }
      }
    }
    async handleError(t) {
      if (t instanceof Ve)
        throw (
          (await this.uploadSchema(),
          new ht({ clientVersion: this.clientVersion, cause: t }))
        )
      if (t) throw t
    }
    convertProtocolErrorsToClientError(t) {
      return t.length === 1
        ? Gr(t[0], this.config.clientVersion, this.config.activeProvider)
        : new ie(JSON.stringify(t), {
            clientVersion: this.config.clientVersion,
          })
    }
    applyPendingMigrations() {
      throw new Error('Method not implemented.')
    }
  }
function Bs({ copyEngine: e = !0 }, t) {
  let r
  try {
    r = gt({
      inlineDatasources: t.inlineDatasources,
      overrideDatasources: t.overrideDatasources,
      env: { ...t.env, ...y.env },
      clientVersion: t.clientVersion,
    })
  } catch {}
  let n = !!(r?.startsWith('prisma://') || xn(r))
  e &&
    n &&
    It(
      'recommend--no-engine',
      'In production, we recommend using `prisma generate --no-engine` (See: `prisma generate --help`)',
    )
  let i = Ye(t.generator),
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
      new Z(
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
function zr({ generator: e }) {
  return e?.previewFeatures ?? []
}
d()
u()
c()
p()
m()
var Us = e => ({ command: e })
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
    return $s(e, 'fast')
  } catch {
    return $s(e, 'slow')
  }
}
function $s(e, t) {
  return JSON.stringify(e.map(r => js(r, t)))
}
function js(e, t) {
  if (Array.isArray(e)) return e.map(r => js(r, t))
  if (typeof e == 'bigint')
    return { prisma__type: 'bigint', prisma__value: e.toString() }
  if (nt(e)) return { prisma__type: 'date', prisma__value: e.toJSON() }
  if (he.isDecimal(e))
    return { prisma__type: 'decimal', prisma__value: e.toJSON() }
  if (w.Buffer.isBuffer(e))
    return { prisma__type: 'bytes', prisma__value: e.toString('base64') }
  if (Bc(e))
    return {
      prisma__type: 'bytes',
      prisma__value: w.Buffer.from(e).toString('base64'),
    }
  if (ArrayBuffer.isView(e)) {
    let { buffer: r, byteOffset: n, byteLength: i } = e
    return {
      prisma__type: 'bytes',
      prisma__value: w.Buffer.from(r, n, i).toString('base64'),
    }
  }
  return typeof e == 'object' && t === 'slow' ? Gs(e) : e
}
function Bc(e) {
  return e instanceof ArrayBuffer || e instanceof SharedArrayBuffer
    ? !0
    : typeof e == 'object' && e !== null
      ? e[Symbol.toStringTag] === 'ArrayBuffer' ||
        e[Symbol.toStringTag] === 'SharedArrayBuffer'
      : !1
}
function Gs(e) {
  if (typeof e != 'object' || e === null) return e
  if (typeof e.toJSON == 'function') return e.toJSON()
  if (Array.isArray(e)) return e.map(Vs)
  let t = {}
  for (let r of Object.keys(e)) t[r] = Vs(e[r])
  return t
}
function Vs(e) {
  return typeof e == 'bigint' ? e.toString() : Gs(e)
}
d()
u()
c()
p()
m()
var Uc = ['$connect', '$disconnect', '$on', '$transaction', '$use', '$extends'],
  Js = Uc
var qc = /^(\s*alter\s)/i,
  Qs = ee('prisma:client')
function ri(e, t, r, n) {
  if (
    !(e !== 'postgresql' && e !== 'cockroachdb') &&
    r.length > 0 &&
    qc.exec(t)
  )
    throw new Error(`Running ALTER using ${n} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`)
}
var ni =
    ({ clientMethod: e, activeProvider: t }) =>
    r => {
      let n = '',
        i
      if (Zo(r))
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
          ? Qs(`prisma.${e}(${n}, ${i.values})`)
          : Qs(`prisma.${e}(${n})`),
        { query: n, parameters: i }
      )
    },
  Ws = {
    requestArgsToMiddlewareArgs(e) {
      return [e.strings, ...e.values]
    },
    middlewareArgsToRequestArgs(e) {
      let [t, ...r] = e
      return new se(t, r)
    },
  },
  Hs = {
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
function ii(e) {
  return function (r, n) {
    let i,
      o = (s = e) => {
        try {
          return s === void 0 || s?.kind === 'itx' ? (i ??= Ks(r(s))) : Ks(r(s))
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
function Ks(e) {
  return typeof e.then == 'function' ? e : Promise.resolve(e)
}
d()
u()
c()
p()
m()
var $c = bn.split('.')[0],
  Vc = {
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
  oi = class {
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
      let t = globalThis[`V${$c}_PRISMA_INSTRUMENTATION`],
        r = globalThis.PRISMA_INSTRUMENTATION
      return t?.helper ?? r?.helper ?? Vc
    }
  }
function zs() {
  return new oi()
}
d()
u()
c()
p()
m()
function Ys(e, t = () => {}) {
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
function Zs(e) {
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
var Yr = class {
  constructor() {
    this._middlewares = []
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
var ea = Je(io())
d()
u()
c()
p()
m()
function Zr(e) {
  return typeof e.batchRequestIdx == 'number'
}
d()
u()
c()
p()
m()
function Xs(e) {
  if (e.action !== 'findUnique' && e.action !== 'findUniqueOrThrow') return
  let t = []
  return (
    e.modelName && t.push(e.modelName),
    e.query.arguments && t.push(si(e.query.arguments)),
    t.push(si(e.query.selection)),
    t.join('')
  )
}
function si(e) {
  return `(${Object.keys(e)
    .sort()
    .map(r => {
      let n = e[r]
      return typeof n == 'object' && n !== null ? `(${r} ${si(n)})` : r
    })
    .join(' ')})`
}
d()
u()
c()
p()
m()
var jc = {
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
function ai(e) {
  return jc[e]
}
d()
u()
c()
p()
m()
var Xr = class {
  constructor(t) {
    this.options = t
    this.tickActive = !1
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
function Ge(e, t) {
  if (t === null) return t
  switch (e) {
    case 'bigint':
      return BigInt(t)
    case 'bytes': {
      let {
        buffer: r,
        byteOffset: n,
        byteLength: i,
      } = w.Buffer.from(t, 'base64')
      return new Uint8Array(r, n, i)
    }
    case 'decimal':
      return new he(t)
    case 'datetime':
    case 'date':
      return new Date(t)
    case 'time':
      return new Date(`1970-01-01T${t}Z`)
    case 'bigint-array':
      return t.map(r => Ge('bigint', r))
    case 'bytes-array':
      return t.map(r => Ge('bytes', r))
    case 'decimal-array':
      return t.map(r => Ge('decimal', r))
    case 'datetime-array':
      return t.map(r => Ge('datetime', r))
    case 'date-array':
      return t.map(r => Ge('date', r))
    case 'time-array':
      return t.map(r => Ge('time', r))
    default:
      return t
  }
}
function en(e) {
  let t = [],
    r = Gc(e)
  for (let n = 0; n < e.rows.length; n++) {
    let i = e.rows[n],
      o = { ...r }
    for (let s = 0; s < i.length; s++) o[e.columns[s]] = Ge(e.types[s], i[s])
    t.push(o)
  }
  return t
}
function Gc(e) {
  let t = {}
  for (let r = 0; r < e.columns.length; r++) t[e.columns[r]] = null
  return t
}
var Jc = ee('prisma:client:request_handler'),
  tn = class {
    constructor(t, r) {
      ;(this.logEmitter = r),
        (this.client = t),
        (this.dataloader = new Xr({
          batchLoader: vs(async ({ requests: n, customDataProxyFetch: i }) => {
            let { transaction: o, otelParentCtx: s } = n[0],
              a = n.map(h => h.protocolQuery),
              l = this.client._tracingHelper.getTraceParent(s),
              f = n.some(h => ai(h.protocolQuery.action))
            return (
              await this.client._engine.requestBatch(a, {
                traceparent: l,
                transaction: Qc(o),
                containsWrite: f,
                customDataProxyFetch: i,
              })
            ).map((h, v) => {
              if (h instanceof Error) return h
              try {
                return this.mapQueryEngineResult(n[v], h)
              } catch (S) {
                return S
              }
            })
          }),
          singleLoader: async n => {
            let i = n.transaction?.kind === 'itx' ? ta(n.transaction) : void 0,
              o = await this.client._engine.request(n.protocolQuery, {
                traceparent: this.client._tracingHelper.getTraceParent(),
                interactiveTransaction: i,
                isWrite: ai(n.protocolQuery.action),
                customDataProxyFetch: n.customDataProxyFetch,
              })
            return this.mapQueryEngineResult(n, o)
          },
          batchBy: n =>
            n.transaction?.id
              ? `transaction-${n.transaction.id}`
              : Xs(n.protocolQuery),
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
      if ((Jc(t), Wc(t, i))) throw t
      if (t instanceof ne && Hc(t)) {
        let f = ra(t.meta)
        _r({
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
          (l = Cr({
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
        throw new ne(l, {
          code: t.code,
          clientVersion: this.client._clientVersion,
          meta: f,
          batchRequestIdx: t.batchRequestIdx,
        })
      } else {
        if (t.isPanic) throw new ve(l, this.client._clientVersion)
        if (t instanceof ie)
          throw new ie(l, {
            clientVersion: this.client._clientVersion,
            batchRequestIdx: t.batchRequestIdx,
          })
        if (t instanceof Q) throw new Q(l, this.client._clientVersion)
        if (t instanceof ve) throw new ve(l, this.client._clientVersion)
      }
      throw ((t.clientVersion = this.client._clientVersion), t)
    }
    sanitizeMessage(t) {
      return this.client._errorFormat && this.client._errorFormat !== 'pretty'
        ? (0, ea.default)(t)
        : t
    }
    unpack(t, r, n) {
      if (!t || (t.data && (t = t.data), !t)) return t
      let i = Object.keys(t)[0],
        o = Object.values(t)[0],
        s = r.filter(f => f !== 'select' && f !== 'include'),
        a = Gn(o, s),
        l = i === 'queryRaw' ? en(a) : tt(a)
      return n ? n(l) : l
    }
    get [Symbol.toStringTag]() {
      return 'RequestHandler'
    }
  }
function Qc(e) {
  if (e) {
    if (e.kind === 'batch')
      return { kind: 'batch', options: { isolationLevel: e.isolationLevel } }
    if (e.kind === 'itx') return { kind: 'itx', options: ta(e) }
    Pe(e, 'Unknown transaction kind')
  }
}
function ta(e) {
  return { id: e.id, payload: e.payload }
}
function Wc(e, t) {
  return Zr(e) && t?.kind === 'batch' && e.batchRequestIdx !== t.index
}
function Hc(e) {
  return e.code === 'P2009' || e.code === 'P2012'
}
function ra(e) {
  if (e.kind === 'Union') return { kind: 'Union', errors: e.errors.map(ra) }
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
var na = '6.4.1'
var ia = na
d()
u()
c()
p()
m()
var ua = Je(On())
d()
u()
c()
p()
m()
var q = class extends Error {
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
_(q, 'PrismaClientConstructorValidationError')
var oa = [
    'datasources',
    'datasourceUrl',
    'errorFormat',
    'adapter',
    'log',
    'transactionOptions',
    'omit',
    '__internal',
  ],
  sa = ['pretty', 'colorless', 'minimal'],
  aa = ['info', 'query', 'warn', 'error'],
  zc = {
    datasources: (e, { datasourceNames: t }) => {
      if (e) {
        if (typeof e != 'object' || Array.isArray(e))
          throw new q(
            `Invalid value ${JSON.stringify(e)} for "datasources" provided to PrismaClient constructor`,
          )
        for (let [r, n] of Object.entries(e)) {
          if (!t.includes(r)) {
            let i = xt(r, t) || ` Available datasources: ${t.join(', ')}`
            throw new q(
              `Unknown datasource ${r} provided to PrismaClient constructor.${i}`,
            )
          }
          if (typeof n != 'object' || Array.isArray(n))
            throw new q(`Invalid value ${JSON.stringify(e)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`)
          if (n && typeof n == 'object')
            for (let [i, o] of Object.entries(n)) {
              if (i !== 'url')
                throw new q(`Invalid value ${JSON.stringify(e)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`)
              if (typeof o != 'string')
                throw new q(`Invalid value ${JSON.stringify(o)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`)
            }
        }
      }
    },
    adapter: (e, t) => {
      if (!e && Ye(t.generator) === 'client')
        throw new q(
          'Using engine type "client" requires a driver adapter to be provided to PrismaClient constructor.',
        )
      if (e === null) return
      if (e === void 0)
        throw new q(
          '"adapter" property must not be undefined, use null to conditionally disable driver adapters.',
        )
      if (!zr(t).includes('driverAdapters'))
        throw new q(
          '"adapter" property can only be provided to PrismaClient constructor when "driverAdapters" preview feature is enabled.',
        )
      if (Ye(t.generator) === 'binary')
        throw new q(
          'Cannot use a driver adapter with the "binary" Query Engine. Please use the "library" Query Engine.',
        )
    },
    datasourceUrl: e => {
      if (typeof e < 'u' && typeof e != 'string')
        throw new q(`Invalid value ${JSON.stringify(e)} for "datasourceUrl" provided to PrismaClient constructor.
Expected string or undefined.`)
    },
    errorFormat: e => {
      if (e) {
        if (typeof e != 'string')
          throw new q(
            `Invalid value ${JSON.stringify(e)} for "errorFormat" provided to PrismaClient constructor.`,
          )
        if (!sa.includes(e)) {
          let t = xt(e, sa)
          throw new q(
            `Invalid errorFormat ${e} provided to PrismaClient constructor.${t}`,
          )
        }
      }
    },
    log: e => {
      if (!e) return
      if (!Array.isArray(e))
        throw new q(
          `Invalid value ${JSON.stringify(e)} for "log" provided to PrismaClient constructor.`,
        )
      function t(r) {
        if (typeof r == 'string' && !aa.includes(r)) {
          let n = xt(r, aa)
          throw new q(
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
              throw new q(
                `Invalid value ${JSON.stringify(i)} for "emit" in logLevel provided to PrismaClient constructor.${s}`,
              )
            }
          },
        }
        if (r && typeof r == 'object')
          for (let [i, o] of Object.entries(r))
            if (n[i]) n[i](o)
            else
              throw new q(
                `Invalid property ${i} for "log" provided to PrismaClient constructor`,
              )
      }
    },
    transactionOptions: e => {
      if (!e) return
      let t = e.maxWait
      if (t != null && t <= 0)
        throw new q(
          `Invalid value ${t} for maxWait in "transactionOptions" provided to PrismaClient constructor. maxWait needs to be greater than 0`,
        )
      let r = e.timeout
      if (r != null && r <= 0)
        throw new q(
          `Invalid value ${r} for timeout in "transactionOptions" provided to PrismaClient constructor. timeout needs to be greater than 0`,
        )
    },
    omit: (e, t) => {
      if (typeof e != 'object')
        throw new q('"omit" option is expected to be an object.')
      if (e === null) throw new q('"omit" option can not be `null`')
      let r = []
      for (let [n, i] of Object.entries(e)) {
        let o = Zc(n, t.runtimeDataModel)
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
      if (r.length > 0) throw new q(Xc(e, r))
    },
    __internal: e => {
      if (!e) return
      let t = ['debug', 'engine', 'configOverride']
      if (typeof e != 'object')
        throw new q(
          `Invalid value ${JSON.stringify(e)} for "__internal" to PrismaClient constructor`,
        )
      for (let [r] of Object.entries(e))
        if (!t.includes(r)) {
          let n = xt(r, t)
          throw new q(
            `Invalid property ${JSON.stringify(r)} for "__internal" provided to PrismaClient constructor.${n}`,
          )
        }
    },
  }
function ca(e, t) {
  for (let [r, n] of Object.entries(e)) {
    if (!oa.includes(r)) {
      let i = xt(r, oa)
      throw new q(
        `Unknown property ${r} provided to PrismaClient constructor.${i}`,
      )
    }
    zc[r](n, t)
  }
  if (e.datasourceUrl && e.datasources)
    throw new q(
      'Can not use "datasourceUrl" and "datasources" options at the same time. Pick one of them',
    )
}
function xt(e, t) {
  if (t.length === 0 || typeof e != 'string') return ''
  let r = Yc(e, t)
  return r ? ` Did you mean "${r}"?` : ''
}
function Yc(e, t) {
  if (t.length === 0) return null
  let r = t.map(i => ({ value: i, distance: (0, ua.default)(e, i) }))
  r.sort((i, o) => (i.distance < o.distance ? -1 : 1))
  let n = r[0]
  return n.distance < 3 ? n.value : null
}
function Zc(e, t) {
  return la(t.models, e) ?? la(t.types, e)
}
function la(e, t) {
  let r = Object.keys(e).find(n => rt(n) === t)
  if (r) return e[r]
}
function Xc(e, t) {
  let r = ct(e)
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
  let { message: n, args: i } = Nr(r, 'colorless')
  return `Error validating "omit" option:

${i}

${n}`
}
d()
u()
c()
p()
m()
function pa(e) {
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
              if (!Zr(g)) {
                l(g)
                return
              }
              g.batchRequestIdx === f ? l(g) : (i || (i = g), a())
            },
          )
      })
}
var _e = ee('prisma:client')
typeof globalThis == 'object' && (globalThis.NODE_CLIENT = !0)
var ep = {
    requestArgsToMiddlewareArgs: e => e,
    middlewareArgsToRequestArgs: e => e,
  },
  tp = Symbol.for('prisma.client.transaction.id'),
  rp = {
    id: 0,
    nextId() {
      return ++this.id
    },
  }
function fa(e) {
  class t {
    constructor(n) {
      this._originalClient = this
      this._middlewares = new Yr()
      this._createPrismaPromise = ii()
      this.$metrics = new mt(this)
      this.$extends = gs
      ;(e = n?.__internal?.configOverride?.(e) ?? e), Ss(e), n && ca(n, e)
      let i = new gr().on('error', () => {})
      ;(this._extensions = pt.empty()),
        (this._previewFeatures = zr(e)),
        (this._clientVersion = e.clientVersion ?? ia),
        (this._activeProvider = e.activeProvider),
        (this._globalOmit = n?.omit),
        (this._tracingHelper = zs())
      let o = {
          rootEnvPath:
            e.relativeEnvPaths.rootEnvPath &&
            Rt.resolve(e.dirname, e.relativeEnvPaths.rootEnvPath),
          schemaEnvPath:
            e.relativeEnvPaths.schemaEnvPath &&
            Rt.resolve(e.dirname, e.relativeEnvPaths.schemaEnvPath),
        },
        s
      if (n?.adapter) {
        s = hn(n.adapter)
        let l =
          e.activeProvider === 'postgresql' ? 'postgres' : e.activeProvider
        if (s.provider !== l)
          throw new Q(
            `The Driver Adapter \`${s.adapterName}\`, based on \`${s.provider}\`, is not compatible with the provider \`${l}\` specified in the Prisma schema.`,
            this._clientVersion,
          )
        if (n.datasources || n.datasourceUrl !== void 0)
          throw new Q(
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
        let h = Rt.resolve(e.dirname, e.relativePath)
        Gi.existsSync(h) || (h = e.dirname),
          _e('dirname', e.dirname),
          _e('relativePath', e.relativePath),
          _e('cwd', h)
        let v = f.engine || {}
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
            allowTriggerPanic: v.allowTriggerPanic,
            datamodelPath: Rt.join(e.dirname, e.filename ?? 'schema.prisma'),
            prismaPath: v.binaryPath ?? void 0,
            engineEndpoint: v.endpoint,
            generator: e.generator,
            showColors: this._errorFormat === 'pretty',
            logLevel: l.log && Zs(l.log),
            logQueries:
              l.log &&
              !!(typeof l.log == 'string'
                ? l.log === 'query'
                : l.log.find(S =>
                    typeof S == 'string' ? S === 'query' : S.level === 'query',
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
            overrideDatasources: Is(l, e.datasourceNames),
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
              PrismaClientUnknownRequestError: ie,
              PrismaClientInitializationError: Q,
              PrismaClientKnownRequestError: ne,
              debug: ee('prisma:client:accelerateEngine'),
              engineVersion: da.version,
              clientVersion: e.clientVersion,
            },
          }),
          _e('clientVersion', e.clientVersion),
          (this._engine = Bs(e, this._engineConfig)),
          (this._requestHandler = new tn(this, i)),
          l.log)
        )
          for (let S of l.log) {
            let R =
              typeof S == 'string' ? S : S.emit === 'stdout' ? S.level : null
            R &&
              this.$on(R, A => {
                St.log(`${St.tags[R] ?? ''}`, A.message || A.query)
              })
          }
      } catch (l) {
        throw ((l.clientVersion = this._clientVersion), l)
      }
      return (this._appliedParent = jt(this))
    }
    get [Symbol.toStringTag]() {
      return 'PrismaClient'
    }
    $use(n) {
      this._middlewares.use(n)
    }
    $on(n, i) {
      n === 'beforeExit'
        ? this._engine.onBeforeExit(i)
        : n && this._engineConfig.logEmitter.on(n, i)
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
        ji()
      }
    }
    $executeRawInternal(n, i, o, s) {
      let a = this._activeProvider
      return this._request({
        action: 'executeRaw',
        args: o,
        transaction: n,
        clientMethod: i,
        argsMapper: ni({ clientMethod: i, activeProvider: a }),
        callsite: Ne(this._errorFormat),
        dataPath: [],
        middlewareArgsMapper: s,
      })
    }
    $executeRaw(n, ...i) {
      return this._createPrismaPromise(o => {
        if (n.raw !== void 0 || n.sql !== void 0) {
          let [s, a] = ma(n, i)
          return (
            ri(
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
        throw new Z(
          "`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n",
          { clientVersion: this._clientVersion },
        )
      })
    }
    $executeRawUnsafe(n, ...i) {
      return this._createPrismaPromise(
        o => (
          ri(
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
        throw new Z(
          `The ${e.activeProvider} provider does not support $runCommandRaw. Use the mongodb provider.`,
          { clientVersion: this._clientVersion },
        )
      return this._createPrismaPromise(i =>
        this._request({
          args: n,
          clientMethod: '$runCommandRaw',
          dataPath: [],
          action: 'runCommandRaw',
          argsMapper: Us,
          callsite: Ne(this._errorFormat),
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
        argsMapper: ni({ clientMethod: i, activeProvider: a }),
        callsite: Ne(this._errorFormat),
        dataPath: [],
        middlewareArgsMapper: s,
      })
    }
    $queryRaw(n, ...i) {
      return this._createPrismaPromise(o => {
        if (n.raw !== void 0 || n.sql !== void 0)
          return this.$queryRawInternal(o, '$queryRaw', ...ma(n, i))
        throw new Z(
          "`$queryRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryraw\n",
          { clientVersion: this._clientVersion },
        )
      })
    }
    $queryRawTyped(n) {
      return this._createPrismaPromise(i => {
        if (!this._hasPreviewFlag('typedSql'))
          throw new Z(
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
      let o = rp.nextId(),
        s = Ys(n.length),
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
      return pa(a)
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
      return pe(
        jt(
          pe(fs(this), [
            te('_appliedParent', () => this._appliedParent._createItxClient(n)),
            te('_createPrismaPromise', () => ii(n)),
            te(tp, () => n.id),
          ]),
        ),
        [dt(Js)],
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
      let i = n.middlewareArgsMapper ?? ep,
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
            return this._tracingHelper.runInChildSpan(s.middleware, D =>
              g(f, M => (D?.end(), l(M))),
            )
          let { runInTransaction: h, args: v, ...S } = f,
            R = { ...n, ...S }
          v && (R.args = i.middlewareArgsToRequestArgs(v)),
            n.transaction !== void 0 && h === !1 && delete R.transaction
          let A = await Ps(this, R)
          return R.model
            ? ws({
                result: A,
                modelName: R.model,
                args: R.args,
                extensions: this._extensions,
                runtimeDataModel: this._runtimeDataModel,
                globalOmit: this._globalOmit,
              })
            : A
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
      otelParentCtx: v,
      customDataProxyFetch: S,
    }) {
      try {
        n = f ? f(n) : n
        let R = { name: 'serialize' },
          A = this._tracingHelper.runInChildSpan(R, () =>
            Ur({
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
            (_e('Prisma Client call:'),
            _e(`prisma.${i}(${is(n)})`),
            _e('Generated request:'),
            _e(
              JSON.stringify(A, null, 2) +
                `
`,
            )),
          g?.kind === 'batch' && (await g.lock),
          this._requestHandler.request({
            protocolQuery: A,
            modelName: l,
            action: a,
            clientMethod: i,
            dataPath: o,
            callsite: s,
            args: n,
            extensions: this._extensions,
            transaction: g,
            unpacker: h,
            otelParentCtx: v,
            otelChildCtx: this._tracingHelper.getActiveContext(),
            globalOmit: this._globalOmit,
            customDataProxyFetch: S,
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
function ma(e, t) {
  return np(e) ? [new se(e, t), Ws] : [e, Hs]
}
function np(e) {
  return Array.isArray(e) && Array.isArray(e.raw)
}
d()
u()
c()
p()
m()
var ip = new Set([
  'toJSON',
  '$$typeof',
  'asymmetricMatch',
  Symbol.iterator,
  Symbol.toStringTag,
  Symbol.isConcatSpreadable,
  Symbol.toPrimitive,
])
function ga(e) {
  return new Proxy(e, {
    get(t, r) {
      if (r in t) return t[r]
      if (!ip.has(r)) throw new TypeError(`Invalid enum value: ${String(r)}`)
    },
  })
}
d()
u()
c()
p()
m()
0 &&
  (module.exports = {
    Debug,
    Decimal,
    Extensions,
    MetricsClient,
    PrismaClientInitializationError,
    PrismaClientKnownRequestError,
    PrismaClientRustPanicError,
    PrismaClientUnknownRequestError,
    PrismaClientValidationError,
    Public,
    Sql,
    createParam,
    defineDmmfProperty,
    deserializeJsonResponse,
    deserializeRawResult,
    dmmfToRuntimeDataModel,
    empty,
    getPrismaClient,
    getRuntime,
    join,
    makeStrictEnum,
    makeTypedQueryFactory,
    objectEnumValues,
    raw,
    serializeJsonQuery,
    skip,
    sqltag,
    warnEnvConflicts,
    warnOnce,
  })
//# sourceMappingURL=edge.js.map
