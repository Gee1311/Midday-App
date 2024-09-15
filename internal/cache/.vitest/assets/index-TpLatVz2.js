var gx = Object.defineProperty;
var vx = (t, e, r) =>
  e in t
    ? gx(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r })
    : (t[e] = r);
var Vi = (t, e, r) => (vx(t, typeof e != "symbol" ? e + "" : e, r), r);
(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) o(s);
  new MutationObserver((s) => {
    for (const c of s)
      if (c.type === "childList")
        for (const f of c.addedNodes)
          f.tagName === "LINK" && f.rel === "modulepreload" && o(f);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(s) {
    const c = {};
    return (
      s.integrity && (c.integrity = s.integrity),
      s.referrerPolicy && (c.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (c.credentials = "include")
        : s.crossOrigin === "anonymous"
          ? (c.credentials = "omit")
          : (c.credentials = "same-origin"),
      c
    );
  }
  function o(s) {
    if (s.ep) return;
    s.ep = !0;
    const c = r(s);
    fetch(s.href, c);
  }
})();
function mh(t, e) {
  const r = Object.create(null),
    o = t.split(",");
  for (let s = 0; s < o.length; s++) r[o[s]] = !0;
  return e ? (s) => !!r[s.toLowerCase()] : (s) => !!r[s];
}
const we = {},
  Qo = [],
  _r = () => {},
  mx = () => !1,
  yx = /^on[^a-z]/,
  Oc = (t) => yx.test(t),
  yh = (t) => t.startsWith("onUpdate:"),
  Ie = Object.assign,
  bh = (t, e) => {
    const r = t.indexOf(e);
    r > -1 && t.splice(r, 1);
  },
  bx = Object.prototype.hasOwnProperty,
  le = (t, e) => bx.call(t, e),
  Ft = Array.isArray,
  Jo = (t) => Rc(t) === "[object Map]",
  zm = (t) => Rc(t) === "[object Set]",
  jt = (t) => typeof t == "function",
  Re = (t) => typeof t == "string",
  Dc = (t) => typeof t == "symbol",
  ye = (t) => t !== null && typeof t == "object",
  Fm = (t) => (ye(t) || jt(t)) && jt(t.then) && jt(t.catch),
  Im = Object.prototype.toString,
  Rc = (t) => Im.call(t),
  wx = (t) => Rc(t).slice(8, -1),
  Hm = (t) => Rc(t) === "[object Object]",
  wh = (t) =>
    Re(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t,
  Ya = mh(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted",
  ),
  zc = (t) => {
    const e = Object.create(null);
    return (r) => e[r] || (e[r] = t(r));
  },
  xx = /-(\w)/g,
  Er = zc((t) => t.replace(xx, (e, r) => (r ? r.toUpperCase() : ""))),
  _x = /\B([A-Z])/g,
  go = zc((t) => t.replace(_x, "-$1").toLowerCase()),
  Fc = zc((t) => t.charAt(0).toUpperCase() + t.slice(1)),
  nf = zc((t) => (t ? `on${Fc(t)}` : "")),
  ao = (t, e) => !Object.is(t, e),
  Za = (t, e) => {
    for (let r = 0; r < t.length; r++) t[r](e);
  },
  ac = (t, e, r) => {
    Object.defineProperty(t, e, { configurable: !0, enumerable: !1, value: r });
  },
  Ef = (t) => {
    const e = parseFloat(t);
    return isNaN(e) ? t : e;
  },
  qm = (t) => {
    const e = Re(t) ? Number(t) : NaN;
    return isNaN(e) ? t : e;
  };
let bg;
const Lf = () =>
  bg ||
  (bg =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
        ? self
        : typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : {});
function An(t) {
  if (Ft(t)) {
    const e = {};
    for (let r = 0; r < t.length; r++) {
      const o = t[r],
        s = Re(o) ? Tx(o) : An(o);
      if (s) for (const c in s) e[c] = s[c];
    }
    return e;
  } else if (Re(t) || ye(t)) return t;
}
const Sx = /;(?![^(]*\))/g,
  kx = /:([^]+)/,
  Cx = /\/\*[^]*?\*\//g;
function Tx(t) {
  const e = {};
  return (
    t
      .replace(Cx, "")
      .split(Sx)
      .forEach((r) => {
        if (r) {
          const o = r.split(kx);
          o.length > 1 && (e[o[0].trim()] = o[1].trim());
        }
      }),
    e
  );
}
function ge(t) {
  let e = "";
  if (Re(t)) e = t;
  else if (Ft(t))
    for (let r = 0; r < t.length; r++) {
      const o = ge(t[r]);
      o && (e += o + " ");
    }
  else if (ye(t)) for (const r in t) t[r] && (e += r + " ");
  return e.trim();
}
function Ex(t) {
  if (!t) return null;
  let { class: e, style: r } = t;
  return e && !Re(e) && (t.class = ge(e)), r && (t.style = An(r)), t;
}
const Lx =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  Ax = mh(Lx);
function Bm(t) {
  return !!t || t === "";
}
const Ut = (t) =>
    Re(t)
      ? t
      : t == null
        ? ""
        : Ft(t) || (ye(t) && (t.toString === Im || !jt(t.toString)))
          ? JSON.stringify(t, Wm, 2)
          : String(t),
  Wm = (t, e) =>
    e && e.__v_isRef
      ? Wm(t, e.value)
      : Jo(e)
        ? {
            [`Map(${e.size})`]: [...e.entries()].reduce(
              (r, [o, s]) => ((r[`${o} =>`] = s), r),
              {},
            ),
          }
        : zm(e)
          ? { [`Set(${e.size})`]: [...e.values()] }
          : ye(e) && !Ft(e) && !Hm(e)
            ? String(e)
            : e;
let Dn;
class Mx {
  constructor(e = !1) {
    (this.detached = e),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = Dn),
      !e && Dn && (this.index = (Dn.scopes || (Dn.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(e) {
    if (this._active) {
      const r = Dn;
      try {
        return (Dn = this), e();
      } finally {
        Dn = r;
      }
    }
  }
  on() {
    Dn = this;
  }
  off() {
    Dn = this.parent;
  }
  stop(e) {
    if (this._active) {
      let r, o;
      for (r = 0, o = this.effects.length; r < o; r++) this.effects[r].stop();
      for (r = 0, o = this.cleanups.length; r < o; r++) this.cleanups[r]();
      if (this.scopes)
        for (r = 0, o = this.scopes.length; r < o; r++) this.scopes[r].stop(!0);
      if (!this.detached && this.parent && !e) {
        const s = this.parent.scopes.pop();
        s &&
          s !== this &&
          ((this.parent.scopes[this.index] = s), (s.index = this.index));
      }
      (this.parent = void 0), (this._active = !1);
    }
  }
}
function Nx(t, e = Dn) {
  e && e.active && e.effects.push(t);
}
function Um() {
  return Dn;
}
function Px(t) {
  Dn && Dn.cleanups.push(t);
}
const xh = (t) => {
    const e = new Set(t);
    return (e.w = 0), (e.n = 0), e;
  },
  jm = (t) => (t.w & Ni) > 0,
  Gm = (t) => (t.n & Ni) > 0,
  $x = ({ deps: t }) => {
    if (t.length) for (let e = 0; e < t.length; e++) t[e].w |= Ni;
  },
  Ox = (t) => {
    const { deps: e } = t;
    if (e.length) {
      let r = 0;
      for (let o = 0; o < e.length; o++) {
        const s = e[o];
        jm(s) && !Gm(s) ? s.delete(t) : (e[r++] = s),
          (s.w &= ~Ni),
          (s.n &= ~Ni);
      }
      e.length = r;
    }
  },
  cc = new WeakMap();
let sl = 0,
  Ni = 1;
const Af = 30;
let or;
const oo = Symbol(""),
  Mf = Symbol("");
class _h {
  constructor(e, r = null, o) {
    (this.fn = e),
      (this.scheduler = r),
      (this.active = !0),
      (this.deps = []),
      (this.parent = void 0),
      Nx(this, o);
  }
  run() {
    if (!this.active) return this.fn();
    let e = or,
      r = Ti;
    for (; e; ) {
      if (e === this) return;
      e = e.parent;
    }
    try {
      return (
        (this.parent = or),
        (or = this),
        (Ti = !0),
        (Ni = 1 << ++sl),
        sl <= Af ? $x(this) : wg(this),
        this.fn()
      );
    } finally {
      sl <= Af && Ox(this),
        (Ni = 1 << --sl),
        (or = this.parent),
        (Ti = r),
        (this.parent = void 0),
        this.deferStop && this.stop();
    }
  }
  stop() {
    or === this
      ? (this.deferStop = !0)
      : this.active &&
        (wg(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function wg(t) {
  const { deps: e } = t;
  if (e.length) {
    for (let r = 0; r < e.length; r++) e[r].delete(t);
    e.length = 0;
  }
}
let Ti = !0;
const Vm = [];
function ms() {
  Vm.push(Ti), (Ti = !1);
}
function ys() {
  const t = Vm.pop();
  Ti = t === void 0 ? !0 : t;
}
function Nn(t, e, r) {
  if (Ti && or) {
    let o = cc.get(t);
    o || cc.set(t, (o = new Map()));
    let s = o.get(r);
    s || o.set(r, (s = xh())), Km(s);
  }
}
function Km(t, e) {
  let r = !1;
  sl <= Af ? Gm(t) || ((t.n |= Ni), (r = !jm(t))) : (r = !t.has(or)),
    r && (t.add(or), or.deps.push(t));
}
function jr(t, e, r, o, s, c) {
  const f = cc.get(t);
  if (!f) return;
  let h = [];
  if (e === "clear") h = [...f.values()];
  else if (r === "length" && Ft(t)) {
    const d = Number(o);
    f.forEach((g, v) => {
      (v === "length" || (!Dc(v) && v >= d)) && h.push(g);
    });
  } else
    switch ((r !== void 0 && h.push(f.get(r)), e)) {
      case "add":
        Ft(t)
          ? wh(r) && h.push(f.get("length"))
          : (h.push(f.get(oo)), Jo(t) && h.push(f.get(Mf)));
        break;
      case "delete":
        Ft(t) || (h.push(f.get(oo)), Jo(t) && h.push(f.get(Mf)));
        break;
      case "set":
        Jo(t) && h.push(f.get(oo));
        break;
    }
  if (h.length === 1) h[0] && Nf(h[0]);
  else {
    const d = [];
    for (const g of h) g && d.push(...g);
    Nf(xh(d));
  }
}
function Nf(t, e) {
  const r = Ft(t) ? t : [...t];
  for (const o of r) o.computed && xg(o);
  for (const o of r) o.computed || xg(o);
}
function xg(t, e) {
  (t !== or || t.allowRecurse) && (t.scheduler ? t.scheduler() : t.run());
}
function Dx(t, e) {
  var r;
  return (r = cc.get(t)) == null ? void 0 : r.get(e);
}
const Rx = mh("__proto__,__v_isRef,__isVue"),
  Xm = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((t) => t !== "arguments" && t !== "caller")
      .map((t) => Symbol[t])
      .filter(Dc),
  ),
  _g = zx();
function zx() {
  const t = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((e) => {
      t[e] = function (...r) {
        const o = ae(this);
        for (let c = 0, f = this.length; c < f; c++) Nn(o, "get", c + "");
        const s = o[e](...r);
        return s === -1 || s === !1 ? o[e](...r.map(ae)) : s;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((e) => {
      t[e] = function (...r) {
        ms();
        const o = ae(this)[e].apply(this, r);
        return ys(), o;
      };
    }),
    t
  );
}
function Fx(t) {
  const e = ae(this);
  return Nn(e, "has", t), e.hasOwnProperty(t);
}
class Ym {
  constructor(e = !1, r = !1) {
    (this._isReadonly = e), (this._shallow = r);
  }
  get(e, r, o) {
    const s = this._isReadonly,
      c = this._shallow;
    if (r === "__v_isReactive") return !s;
    if (r === "__v_isReadonly") return s;
    if (r === "__v_isShallow") return c;
    if (r === "__v_raw" && o === (s ? (c ? Zx : t0) : c ? Jm : Qm).get(e))
      return e;
    const f = Ft(e);
    if (!s) {
      if (f && le(_g, r)) return Reflect.get(_g, r, o);
      if (r === "hasOwnProperty") return Fx;
    }
    const h = Reflect.get(e, r, o);
    return (Dc(r) ? Xm.has(r) : Rx(r)) || (s || Nn(e, "get", r), c)
      ? h
      : Le(h)
        ? f && wh(r)
          ? h
          : h.value
        : ye(h)
          ? s
            ? Hc(h)
            : Sr(h)
          : h;
  }
}
class Zm extends Ym {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, r, o, s) {
    let c = e[r];
    if (as(c) && Le(c) && !Le(o)) return !1;
    if (
      !this._shallow &&
      (!uc(o) && !as(o) && ((c = ae(c)), (o = ae(o))),
      !Ft(e) && Le(c) && !Le(o))
    )
      return (c.value = o), !0;
    const f = Ft(e) && wh(r) ? Number(r) < e.length : le(e, r),
      h = Reflect.set(e, r, o, s);
    return (
      e === ae(s) && (f ? ao(o, c) && jr(e, "set", r, o) : jr(e, "add", r, o)),
      h
    );
  }
  deleteProperty(e, r) {
    const o = le(e, r);
    e[r];
    const s = Reflect.deleteProperty(e, r);
    return s && o && jr(e, "delete", r, void 0), s;
  }
  has(e, r) {
    const o = Reflect.has(e, r);
    return (!Dc(r) || !Xm.has(r)) && Nn(e, "has", r), o;
  }
  ownKeys(e) {
    return Nn(e, "iterate", Ft(e) ? "length" : oo), Reflect.ownKeys(e);
  }
}
class Ix extends Ym {
  constructor(e = !1) {
    super(!0, e);
  }
  set(e, r) {
    return !0;
  }
  deleteProperty(e, r) {
    return !0;
  }
}
const Hx = new Zm(),
  qx = new Ix(),
  Bx = new Zm(!0),
  Sh = (t) => t,
  Ic = (t) => Reflect.getPrototypeOf(t);
function Ma(t, e, r = !1, o = !1) {
  t = t.__v_raw;
  const s = ae(t),
    c = ae(e);
  r || (ao(e, c) && Nn(s, "get", e), Nn(s, "get", c));
  const { has: f } = Ic(s),
    h = o ? Sh : r ? Eh : xl;
  if (f.call(s, e)) return h(t.get(e));
  if (f.call(s, c)) return h(t.get(c));
  t !== s && t.get(e);
}
function Na(t, e = !1) {
  const r = this.__v_raw,
    o = ae(r),
    s = ae(t);
  return (
    e || (ao(t, s) && Nn(o, "has", t), Nn(o, "has", s)),
    t === s ? r.has(t) : r.has(t) || r.has(s)
  );
}
function Pa(t, e = !1) {
  return (
    (t = t.__v_raw), !e && Nn(ae(t), "iterate", oo), Reflect.get(t, "size", t)
  );
}
function Sg(t) {
  t = ae(t);
  const e = ae(this);
  return Ic(e).has.call(e, t) || (e.add(t), jr(e, "add", t, t)), this;
}
function kg(t, e) {
  e = ae(e);
  const r = ae(this),
    { has: o, get: s } = Ic(r);
  let c = o.call(r, t);
  c || ((t = ae(t)), (c = o.call(r, t)));
  const f = s.call(r, t);
  return (
    r.set(t, e), c ? ao(e, f) && jr(r, "set", t, e) : jr(r, "add", t, e), this
  );
}
function Cg(t) {
  const e = ae(this),
    { has: r, get: o } = Ic(e);
  let s = r.call(e, t);
  s || ((t = ae(t)), (s = r.call(e, t))), o && o.call(e, t);
  const c = e.delete(t);
  return s && jr(e, "delete", t, void 0), c;
}
function Tg() {
  const t = ae(this),
    e = t.size !== 0,
    r = t.clear();
  return e && jr(t, "clear", void 0, void 0), r;
}
function $a(t, e) {
  return function (o, s) {
    const c = this,
      f = c.__v_raw,
      h = ae(f),
      d = e ? Sh : t ? Eh : xl;
    return (
      !t && Nn(h, "iterate", oo), f.forEach((g, v) => o.call(s, d(g), d(v), c))
    );
  };
}
function Oa(t, e, r) {
  return function (...o) {
    const s = this.__v_raw,
      c = ae(s),
      f = Jo(c),
      h = t === "entries" || (t === Symbol.iterator && f),
      d = t === "keys" && f,
      g = s[t](...o),
      v = r ? Sh : e ? Eh : xl;
    return (
      !e && Nn(c, "iterate", d ? Mf : oo),
      {
        next() {
          const { value: y, done: w } = g.next();
          return w
            ? { value: y, done: w }
            : { value: h ? [v(y[0]), v(y[1])] : v(y), done: w };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function fi(t) {
  return function (...e) {
    return t === "delete" ? !1 : this;
  };
}
function Wx() {
  const t = {
      get(c) {
        return Ma(this, c);
      },
      get size() {
        return Pa(this);
      },
      has: Na,
      add: Sg,
      set: kg,
      delete: Cg,
      clear: Tg,
      forEach: $a(!1, !1),
    },
    e = {
      get(c) {
        return Ma(this, c, !1, !0);
      },
      get size() {
        return Pa(this);
      },
      has: Na,
      add: Sg,
      set: kg,
      delete: Cg,
      clear: Tg,
      forEach: $a(!1, !0),
    },
    r = {
      get(c) {
        return Ma(this, c, !0);
      },
      get size() {
        return Pa(this, !0);
      },
      has(c) {
        return Na.call(this, c, !0);
      },
      add: fi("add"),
      set: fi("set"),
      delete: fi("delete"),
      clear: fi("clear"),
      forEach: $a(!0, !1),
    },
    o = {
      get(c) {
        return Ma(this, c, !0, !0);
      },
      get size() {
        return Pa(this, !0);
      },
      has(c) {
        return Na.call(this, c, !0);
      },
      add: fi("add"),
      set: fi("set"),
      delete: fi("delete"),
      clear: fi("clear"),
      forEach: $a(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((c) => {
      (t[c] = Oa(c, !1, !1)),
        (r[c] = Oa(c, !0, !1)),
        (e[c] = Oa(c, !1, !0)),
        (o[c] = Oa(c, !0, !0));
    }),
    [t, r, e, o]
  );
}
const [Ux, jx, Gx, Vx] = Wx();
function kh(t, e) {
  const r = e ? (t ? Vx : Gx) : t ? jx : Ux;
  return (o, s, c) =>
    s === "__v_isReactive"
      ? !t
      : s === "__v_isReadonly"
        ? t
        : s === "__v_raw"
          ? o
          : Reflect.get(le(r, s) && s in o ? r : o, s, c);
}
const Kx = { get: kh(!1, !1) },
  Xx = { get: kh(!1, !0) },
  Yx = { get: kh(!0, !1) },
  Qm = new WeakMap(),
  Jm = new WeakMap(),
  t0 = new WeakMap(),
  Zx = new WeakMap();
function Qx(t) {
  switch (t) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Jx(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : Qx(wx(t));
}
function Sr(t) {
  return as(t) ? t : Ch(t, !1, Hx, Kx, Qm);
}
function e0(t) {
  return Ch(t, !1, Bx, Xx, Jm);
}
function Hc(t) {
  return Ch(t, !0, qx, Yx, t0);
}
function Ch(t, e, r, o, s) {
  if (!ye(t) || (t.__v_raw && !(e && t.__v_isReactive))) return t;
  const c = s.get(t);
  if (c) return c;
  const f = Jx(t);
  if (f === 0) return t;
  const h = new Proxy(t, f === 2 ? o : r);
  return s.set(t, h), h;
}
function ts(t) {
  return as(t) ? ts(t.__v_raw) : !!(t && t.__v_isReactive);
}
function as(t) {
  return !!(t && t.__v_isReadonly);
}
function uc(t) {
  return !!(t && t.__v_isShallow);
}
function n0(t) {
  return ts(t) || as(t);
}
function ae(t) {
  const e = t && t.__v_raw;
  return e ? ae(e) : t;
}
function Th(t) {
  return ac(t, "__v_skip", !0), t;
}
const xl = (t) => (ye(t) ? Sr(t) : t),
  Eh = (t) => (ye(t) ? Hc(t) : t);
function Lh(t) {
  Ti && or && ((t = ae(t)), Km(t.dep || (t.dep = xh())));
}
function Ah(t, e) {
  t = ae(t);
  const r = t.dep;
  r && Nf(r);
}
function Le(t) {
  return !!(t && t.__v_isRef === !0);
}
function Zt(t) {
  return r0(t, !1);
}
function bs(t) {
  return r0(t, !0);
}
function r0(t, e) {
  return Le(t) ? t : new t_(t, e);
}
class t_ {
  constructor(e, r) {
    (this.__v_isShallow = r),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = r ? e : ae(e)),
      (this._value = r ? e : xl(e));
  }
  get value() {
    return Lh(this), this._value;
  }
  set value(e) {
    const r = this.__v_isShallow || uc(e) || as(e);
    (e = r ? e : ae(e)),
      ao(e, this._rawValue) &&
        ((this._rawValue = e), (this._value = r ? e : xl(e)), Ah(this));
  }
}
function U(t) {
  return Le(t) ? t.value : t;
}
const e_ = {
  get: (t, e, r) => U(Reflect.get(t, e, r)),
  set: (t, e, r, o) => {
    const s = t[e];
    return Le(s) && !Le(r) ? ((s.value = r), !0) : Reflect.set(t, e, r, o);
  },
};
function i0(t) {
  return ts(t) ? t : new Proxy(t, e_);
}
class n_ {
  constructor(e) {
    (this.dep = void 0), (this.__v_isRef = !0);
    const { get: r, set: o } = e(
      () => Lh(this),
      () => Ah(this),
    );
    (this._get = r), (this._set = o);
  }
  get value() {
    return this._get();
  }
  set value(e) {
    this._set(e);
  }
}
function r_(t) {
  return new n_(t);
}
function i_(t) {
  const e = Ft(t) ? new Array(t.length) : {};
  for (const r in t) e[r] = o0(t, r);
  return e;
}
class o_ {
  constructor(e, r, o) {
    (this._object = e),
      (this._key = r),
      (this._defaultValue = o),
      (this.__v_isRef = !0);
  }
  get value() {
    const e = this._object[this._key];
    return e === void 0 ? this._defaultValue : e;
  }
  set value(e) {
    this._object[this._key] = e;
  }
  get dep() {
    return Dx(ae(this._object), this._key);
  }
}
class s_ {
  constructor(e) {
    (this._getter = e), (this.__v_isRef = !0), (this.__v_isReadonly = !0);
  }
  get value() {
    return this._getter();
  }
}
function Mh(t, e, r) {
  return Le(t)
    ? t
    : jt(t)
      ? new s_(t)
      : ye(t) && arguments.length > 1
        ? o0(t, e, r)
        : Zt(t);
}
function o0(t, e, r) {
  const o = t[e];
  return Le(o) ? o : new o_(t, e, r);
}
class l_ {
  constructor(e, r, o, s) {
    (this._setter = r),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this._dirty = !0),
      (this.effect = new _h(e, () => {
        this._dirty || ((this._dirty = !0), Ah(this));
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !s),
      (this.__v_isReadonly = o);
  }
  get value() {
    const e = ae(this);
    return (
      Lh(e),
      (e._dirty || !e._cacheable) &&
        ((e._dirty = !1), (e._value = e.effect.run())),
      e._value
    );
  }
  set value(e) {
    this._setter(e);
  }
}
function a_(t, e, r = !1) {
  let o, s;
  const c = jt(t);
  return (
    c ? ((o = t), (s = _r)) : ((o = t.get), (s = t.set)),
    new l_(o, s, c || !s, r)
  );
}
function Ei(t, e, r, o) {
  let s;
  try {
    s = o ? t(...o) : t();
  } catch (c) {
    Bl(c, e, r);
  }
  return s;
}
function jn(t, e, r, o) {
  if (jt(t)) {
    const c = Ei(t, e, r, o);
    return (
      c &&
        Fm(c) &&
        c.catch((f) => {
          Bl(f, e, r);
        }),
      c
    );
  }
  const s = [];
  for (let c = 0; c < t.length; c++) s.push(jn(t[c], e, r, o));
  return s;
}
function Bl(t, e, r, o = !0) {
  const s = e ? e.vnode : null;
  if (e) {
    let c = e.parent;
    const f = e.proxy,
      h = r;
    for (; c; ) {
      const g = c.ec;
      if (g) {
        for (let v = 0; v < g.length; v++) if (g[v](t, f, h) === !1) return;
      }
      c = c.parent;
    }
    const d = e.appContext.config.errorHandler;
    if (d) {
      Ei(d, null, 10, [t, f, h]);
      return;
    }
  }
  c_(t, r, s, o);
}
function c_(t, e, r, o = !0) {
  console.error(t);
}
let _l = !1,
  Pf = !1;
const en = [];
let br = 0;
const es = [];
let Br = null,
  to = 0;
const s0 = Promise.resolve();
let Nh = null;
function Kr(t) {
  const e = Nh || s0;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function u_(t) {
  let e = br + 1,
    r = en.length;
  for (; e < r; ) {
    const o = (e + r) >>> 1,
      s = en[o],
      c = Sl(s);
    c < t || (c === t && s.pre) ? (e = o + 1) : (r = o);
  }
  return e;
}
function Ph(t) {
  (!en.length || !en.includes(t, _l && t.allowRecurse ? br + 1 : br)) &&
    (t.id == null ? en.push(t) : en.splice(u_(t.id), 0, t), l0());
}
function l0() {
  !_l && !Pf && ((Pf = !0), (Nh = s0.then(c0)));
}
function f_(t) {
  const e = en.indexOf(t);
  e > br && en.splice(e, 1);
}
function $f(t) {
  Ft(t)
    ? es.push(...t)
    : (!Br || !Br.includes(t, t.allowRecurse ? to + 1 : to)) && es.push(t),
    l0();
}
function Eg(t, e = _l ? br + 1 : 0) {
  for (; e < en.length; e++) {
    const r = en[e];
    r && r.pre && (en.splice(e, 1), e--, r());
  }
}
function a0(t) {
  if (es.length) {
    const e = [...new Set(es)];
    if (((es.length = 0), Br)) {
      Br.push(...e);
      return;
    }
    for (Br = e, Br.sort((r, o) => Sl(r) - Sl(o)), to = 0; to < Br.length; to++)
      Br[to]();
    (Br = null), (to = 0);
  }
}
const Sl = (t) => (t.id == null ? 1 / 0 : t.id),
  h_ = (t, e) => {
    const r = Sl(t) - Sl(e);
    if (r === 0) {
      if (t.pre && !e.pre) return -1;
      if (e.pre && !t.pre) return 1;
    }
    return r;
  };
function c0(t) {
  (Pf = !1), (_l = !0), en.sort(h_);
  try {
    for (br = 0; br < en.length; br++) {
      const e = en[br];
      e && e.active !== !1 && Ei(e, null, 14);
    }
  } finally {
    (br = 0),
      (en.length = 0),
      a0(),
      (_l = !1),
      (Nh = null),
      (en.length || es.length) && c0();
  }
}
function d_(t, e, ...r) {
  if (t.isUnmounted) return;
  const o = t.vnode.props || we;
  let s = r;
  const c = e.startsWith("update:"),
    f = c && e.slice(7);
  if (f && f in o) {
    const v = `${f === "modelValue" ? "model" : f}Modifiers`,
      { number: y, trim: w } = o[v] || we;
    w && (s = r.map((_) => (Re(_) ? _.trim() : _))), y && (s = r.map(Ef));
  }
  let h,
    d = o[(h = nf(e))] || o[(h = nf(Er(e)))];
  !d && c && (d = o[(h = nf(go(e)))]), d && jn(d, t, 6, s);
  const g = o[h + "Once"];
  if (g) {
    if (!t.emitted) t.emitted = {};
    else if (t.emitted[h]) return;
    (t.emitted[h] = !0), jn(g, t, 6, s);
  }
}
function u0(t, e, r = !1) {
  const o = e.emitsCache,
    s = o.get(t);
  if (s !== void 0) return s;
  const c = t.emits;
  let f = {},
    h = !1;
  if (!jt(t)) {
    const d = (g) => {
      const v = u0(g, e, !0);
      v && ((h = !0), Ie(f, v));
    };
    !r && e.mixins.length && e.mixins.forEach(d),
      t.extends && d(t.extends),
      t.mixins && t.mixins.forEach(d);
  }
  return !c && !h
    ? (ye(t) && o.set(t, null), null)
    : (Ft(c) ? c.forEach((d) => (f[d] = null)) : Ie(f, c),
      ye(t) && o.set(t, f),
      f);
}
function qc(t, e) {
  return !t || !Oc(e)
    ? !1
    : ((e = e.slice(2).replace(/Once$/, "")),
      le(t, e[0].toLowerCase() + e.slice(1)) || le(t, go(e)) || le(t, e));
}
let Qe = null,
  Bc = null;
function fc(t) {
  const e = Qe;
  return (Qe = t), (Bc = (t && t.type.__scopeId) || null), e;
}
function f0(t) {
  Bc = t;
}
function h0() {
  Bc = null;
}
const p_ = (t) => ee;
function ee(t, e = Qe, r) {
  if (!e || t._n) return t;
  const o = (...s) => {
    o._d && Ig(-1);
    const c = fc(e);
    let f;
    try {
      f = t(...s);
    } finally {
      fc(c), o._d && Ig(1);
    }
    return f;
  };
  return (o._n = !0), (o._c = !0), (o._d = !0), o;
}
function rf(t) {
  const {
    type: e,
    vnode: r,
    proxy: o,
    withProxy: s,
    props: c,
    propsOptions: [f],
    slots: h,
    attrs: d,
    emit: g,
    render: v,
    renderCache: y,
    data: w,
    setupState: _,
    ctx: N,
    inheritAttrs: L,
  } = t;
  let A, T;
  const M = fc(t);
  try {
    if (r.shapeFlag & 4) {
      const E = s || o;
      (A = ir(v.call(E, E, y, c, _, w, N))), (T = d);
    } else {
      const E = e;
      (A = ir(
        E.length > 1 ? E(c, { attrs: d, slots: h, emit: g }) : E(c, null),
      )),
        (T = e.props ? d : v_(d));
    }
  } catch (E) {
    (hl.length = 0), Bl(E, t, 1), (A = It(Mn));
  }
  let $ = A;
  if (T && L !== !1) {
    const E = Object.keys(T),
      { shapeFlag: H } = $;
    E.length && H & 7 && (f && E.some(yh) && (T = m_(T, f)), ($ = Pi($, T)));
  }
  return (
    r.dirs && (($ = Pi($)), ($.dirs = $.dirs ? $.dirs.concat(r.dirs) : r.dirs)),
    r.transition && ($.transition = r.transition),
    (A = $),
    fc(M),
    A
  );
}
function g_(t) {
  let e;
  for (let r = 0; r < t.length; r++) {
    const o = t[r];
    if (Cl(o)) {
      if (o.type !== Mn || o.children === "v-if") {
        if (e) return;
        e = o;
      }
    } else return;
  }
  return e;
}
const v_ = (t) => {
    let e;
    for (const r in t)
      (r === "class" || r === "style" || Oc(r)) && ((e || (e = {}))[r] = t[r]);
    return e;
  },
  m_ = (t, e) => {
    const r = {};
    for (const o in t) (!yh(o) || !(o.slice(9) in e)) && (r[o] = t[o]);
    return r;
  };
function y_(t, e, r) {
  const { props: o, children: s, component: c } = t,
    { props: f, children: h, patchFlag: d } = e,
    g = c.emitsOptions;
  if (e.dirs || e.transition) return !0;
  if (r && d >= 0) {
    if (d & 1024) return !0;
    if (d & 16) return o ? Lg(o, f, g) : !!f;
    if (d & 8) {
      const v = e.dynamicProps;
      for (let y = 0; y < v.length; y++) {
        const w = v[y];
        if (f[w] !== o[w] && !qc(g, w)) return !0;
      }
    }
  } else
    return (s || h) && (!h || !h.$stable)
      ? !0
      : o === f
        ? !1
        : o
          ? f
            ? Lg(o, f, g)
            : !0
          : !!f;
  return !1;
}
function Lg(t, e, r) {
  const o = Object.keys(e);
  if (o.length !== Object.keys(t).length) return !0;
  for (let s = 0; s < o.length; s++) {
    const c = o[s];
    if (e[c] !== t[c] && !qc(r, c)) return !0;
  }
  return !1;
}
function $h({ vnode: t, parent: e }, r) {
  for (; e && e.subTree === t; ) ((t = e.vnode).el = r), (e = e.parent);
}
const d0 = "components",
  b_ = "directives";
function co(t, e) {
  return p0(d0, t, !0, e) || t;
}
const w_ = Symbol.for("v-ndc");
function vo(t) {
  return p0(b_, t);
}
function p0(t, e, r = !0, o = !1) {
  const s = Qe || Ve;
  if (s) {
    const c = s.type;
    if (t === d0) {
      const h = mS(c, !1);
      if (h && (h === e || h === Er(e) || h === Fc(Er(e)))) return c;
    }
    const f = Ag(s[t] || c[t], e) || Ag(s.appContext[t], e);
    return !f && o ? c : f;
  }
}
function Ag(t, e) {
  return t && (t[e] || t[Er(e)] || t[Fc(Er(e))]);
}
const x_ = (t) => t.__isSuspense,
  __ = {
    name: "Suspense",
    __isSuspense: !0,
    process(t, e, r, o, s, c, f, h, d, g) {
      t == null ? k_(e, r, o, s, c, f, h, d, g) : C_(t, e, r, o, s, f, h, d, g);
    },
    hydrate: T_,
    create: Oh,
    normalize: E_,
  },
  S_ = __;
function kl(t, e) {
  const r = t.props && t.props[e];
  jt(r) && r();
}
function k_(t, e, r, o, s, c, f, h, d) {
  const {
      p: g,
      o: { createElement: v },
    } = d,
    y = v("div"),
    w = (t.suspense = Oh(t, s, o, e, y, r, c, f, h, d));
  g(null, (w.pendingBranch = t.ssContent), y, null, o, w, c, f),
    w.deps > 0
      ? (kl(t, "onPending"),
        kl(t, "onFallback"),
        g(null, t.ssFallback, e, r, o, null, c, f),
        ns(w, t.ssFallback))
      : w.resolve(!1, !0);
}
function C_(t, e, r, o, s, c, f, h, { p: d, um: g, o: { createElement: v } }) {
  const y = (e.suspense = t.suspense);
  (y.vnode = e), (e.el = t.el);
  const w = e.ssContent,
    _ = e.ssFallback,
    { activeBranch: N, pendingBranch: L, isInFallback: A, isHydrating: T } = y;
  if (L)
    (y.pendingBranch = w),
      wr(w, L)
        ? (d(L, w, y.hiddenContainer, null, s, y, c, f, h),
          y.deps <= 0
            ? y.resolve()
            : A && (d(N, _, r, o, s, null, c, f, h), ns(y, _)))
        : (y.pendingId++,
          T ? ((y.isHydrating = !1), (y.activeBranch = L)) : g(L, s, y),
          (y.deps = 0),
          (y.effects.length = 0),
          (y.hiddenContainer = v("div")),
          A
            ? (d(null, w, y.hiddenContainer, null, s, y, c, f, h),
              y.deps <= 0
                ? y.resolve()
                : (d(N, _, r, o, s, null, c, f, h), ns(y, _)))
            : N && wr(w, N)
              ? (d(N, w, r, o, s, y, c, f, h), y.resolve(!0))
              : (d(null, w, y.hiddenContainer, null, s, y, c, f, h),
                y.deps <= 0 && y.resolve()));
  else if (N && wr(w, N)) d(N, w, r, o, s, y, c, f, h), ns(y, w);
  else if (
    (kl(e, "onPending"),
    (y.pendingBranch = w),
    y.pendingId++,
    d(null, w, y.hiddenContainer, null, s, y, c, f, h),
    y.deps <= 0)
  )
    y.resolve();
  else {
    const { timeout: M, pendingId: $ } = y;
    M > 0
      ? setTimeout(() => {
          y.pendingId === $ && y.fallback(_);
        }, M)
      : M === 0 && y.fallback(_);
  }
}
function Oh(t, e, r, o, s, c, f, h, d, g, v = !1) {
  const {
    p: y,
    m: w,
    um: _,
    n: N,
    o: { parentNode: L, remove: A },
  } = g;
  let T;
  const M = A_(t);
  M && e != null && e.pendingBranch && ((T = e.pendingId), e.deps++);
  const $ = t.props ? qm(t.props.timeout) : void 0,
    E = {
      vnode: t,
      parent: e,
      parentComponent: r,
      isSVG: f,
      container: o,
      hiddenContainer: s,
      anchor: c,
      deps: 0,
      pendingId: 0,
      timeout: typeof $ == "number" ? $ : -1,
      activeBranch: null,
      pendingBranch: null,
      isInFallback: !0,
      isHydrating: v,
      isUnmounted: !1,
      effects: [],
      resolve(H = !1, K = !1) {
        const {
          vnode: ct,
          activeBranch: Y,
          pendingBranch: nt,
          pendingId: rt,
          effects: dt,
          parentComponent: ht,
          container: G,
        } = E;
        let z = !1;
        if (E.isHydrating) E.isHydrating = !1;
        else if (!H) {
          (z = Y && nt.transition && nt.transition.mode === "out-in"),
            z &&
              (Y.transition.afterLeave = () => {
                rt === E.pendingId && (w(nt, G, B, 0), $f(dt));
              });
          let { anchor: B } = E;
          Y && ((B = N(Y)), _(Y, ht, E, !0)), z || w(nt, G, B, 0);
        }
        ns(E, nt), (E.pendingBranch = null), (E.isInFallback = !1);
        let k = E.parent,
          I = !1;
        for (; k; ) {
          if (k.pendingBranch) {
            k.effects.push(...dt), (I = !0);
            break;
          }
          k = k.parent;
        }
        !I && !z && $f(dt),
          (E.effects = []),
          M &&
            e &&
            e.pendingBranch &&
            T === e.pendingId &&
            (e.deps--, e.deps === 0 && !K && e.resolve()),
          kl(ct, "onResolve");
      },
      fallback(H) {
        if (!E.pendingBranch) return;
        const {
          vnode: K,
          activeBranch: ct,
          parentComponent: Y,
          container: nt,
          isSVG: rt,
        } = E;
        kl(K, "onFallback");
        const dt = N(ct),
          ht = () => {
            E.isInFallback && (y(null, H, nt, dt, Y, null, rt, h, d), ns(E, H));
          },
          G = H.transition && H.transition.mode === "out-in";
        G && (ct.transition.afterLeave = ht),
          (E.isInFallback = !0),
          _(ct, Y, null, !0),
          G || ht();
      },
      move(H, K, ct) {
        E.activeBranch && w(E.activeBranch, H, K, ct), (E.container = H);
      },
      next() {
        return E.activeBranch && N(E.activeBranch);
      },
      registerDep(H, K) {
        const ct = !!E.pendingBranch;
        ct && E.deps++;
        const Y = H.vnode.el;
        H.asyncDep
          .catch((nt) => {
            Bl(nt, H, 0);
          })
          .then((nt) => {
            if (H.isUnmounted || E.isUnmounted || E.pendingId !== H.suspenseId)
              return;
            H.asyncResolved = !0;
            const { vnode: rt } = H;
            Bf(H, nt, !1), Y && (rt.el = Y);
            const dt = !Y && H.subTree.el;
            K(H, rt, L(Y || H.subTree.el), Y ? null : N(H.subTree), E, f, d),
              dt && A(dt),
              $h(H, rt.el),
              ct && --E.deps === 0 && E.resolve();
          });
      },
      unmount(H, K) {
        (E.isUnmounted = !0),
          E.activeBranch && _(E.activeBranch, r, H, K),
          E.pendingBranch && _(E.pendingBranch, r, H, K);
      },
    };
  return E;
}
function T_(t, e, r, o, s, c, f, h, d) {
  const g = (e.suspense = Oh(
      e,
      o,
      r,
      t.parentNode,
      document.createElement("div"),
      null,
      s,
      c,
      f,
      h,
      !0,
    )),
    v = d(t, (g.pendingBranch = e.ssContent), r, g, c, f);
  return g.deps === 0 && g.resolve(!1, !0), v;
}
function E_(t) {
  const { shapeFlag: e, children: r } = t,
    o = e & 32;
  (t.ssContent = Mg(o ? r.default : r)),
    (t.ssFallback = o ? Mg(r.fallback) : It(Mn));
}
function Mg(t) {
  let e;
  if (jt(t)) {
    const r = cs && t._c;
    r && ((t._d = !1), st()), (t = t()), r && ((t._d = !0), (e = Wn), N0());
  }
  return (
    Ft(t) && (t = g_(t)),
    (t = ir(t)),
    e && !t.dynamicChildren && (t.dynamicChildren = e.filter((r) => r !== t)),
    t
  );
}
function L_(t, e) {
  e && e.pendingBranch
    ? Ft(t)
      ? e.effects.push(...t)
      : e.effects.push(t)
    : $f(t);
}
function ns(t, e) {
  t.activeBranch = e;
  const { vnode: r, parentComponent: o } = t,
    s = (r.el = e.el);
  o && o.subTree === r && ((o.vnode.el = s), $h(o, s));
}
function A_(t) {
  var e;
  return (
    ((e = t.props) == null ? void 0 : e.suspensible) != null &&
    t.props.suspensible !== !1
  );
}
function Dh(t, e) {
  return Rh(t, null, e);
}
const Da = {};
function Fe(t, e, r) {
  return Rh(t, e, r);
}
function Rh(
  t,
  e,
  { immediate: r, deep: o, flush: s, onTrack: c, onTrigger: f } = we,
) {
  var h;
  const d = Um() === ((h = Ve) == null ? void 0 : h.scope) ? Ve : null;
  let g,
    v = !1,
    y = !1;
  if (
    (Le(t)
      ? ((g = () => t.value), (v = uc(t)))
      : ts(t)
        ? ((g = () => t), (o = !0))
        : Ft(t)
          ? ((y = !0),
            (v = t.some((E) => ts(E) || uc(E))),
            (g = () =>
              t.map((E) => {
                if (Le(E)) return E.value;
                if (ts(E)) return no(E);
                if (jt(E)) return Ei(E, d, 2);
              })))
          : jt(t)
            ? e
              ? (g = () => Ei(t, d, 2))
              : (g = () => {
                  if (!(d && d.isUnmounted)) return w && w(), jn(t, d, 3, [_]);
                })
            : (g = _r),
    e && o)
  ) {
    const E = g;
    g = () => no(E());
  }
  let w,
    _ = (E) => {
      w = M.onStop = () => {
        Ei(E, d, 4);
      };
    },
    N;
  if (Tl)
    if (
      ((_ = _r),
      e ? r && jn(e, d, 3, [g(), y ? [] : void 0, _]) : g(),
      s === "sync")
    ) {
      const E = wS();
      N = E.__watcherHandles || (E.__watcherHandles = []);
    } else return _r;
  let L = y ? new Array(t.length).fill(Da) : Da;
  const A = () => {
    if (M.active)
      if (e) {
        const E = M.run();
        (o || v || (y ? E.some((H, K) => ao(H, L[K])) : ao(E, L))) &&
          (w && w(),
          jn(e, d, 3, [E, L === Da ? void 0 : y && L[0] === Da ? [] : L, _]),
          (L = E));
      } else M.run();
  };
  A.allowRecurse = !!e;
  let T;
  s === "sync"
    ? (T = A)
    : s === "post"
      ? (T = () => Cn(A, d && d.suspense))
      : ((A.pre = !0), d && (A.id = d.uid), (T = () => Ph(A)));
  const M = new _h(g, T);
  e
    ? r
      ? A()
      : (L = M.run())
    : s === "post"
      ? Cn(M.run.bind(M), d && d.suspense)
      : M.run();
  const $ = () => {
    M.stop(), d && d.scope && bh(d.scope.effects, M);
  };
  return N && N.push($), $;
}
function M_(t, e, r) {
  const o = this.proxy,
    s = Re(t) ? (t.includes(".") ? g0(o, t) : () => o[t]) : t.bind(o, o);
  let c;
  jt(e) ? (c = e) : ((c = e.handler), (r = e));
  const f = Ve;
  us(this);
  const h = Rh(s, c.bind(o), r);
  return f ? us(f) : so(), h;
}
function g0(t, e) {
  const r = e.split(".");
  return () => {
    let o = t;
    for (let s = 0; s < r.length && o; s++) o = o[r[s]];
    return o;
  };
}
function no(t, e) {
  if (!ye(t) || t.__v_skip || ((e = e || new Set()), e.has(t))) return t;
  if ((e.add(t), Le(t))) no(t.value, e);
  else if (Ft(t)) for (let r = 0; r < t.length; r++) no(t[r], e);
  else if (zm(t) || Jo(t))
    t.forEach((r) => {
      no(r, e);
    });
  else if (Hm(t)) for (const r in t) no(t[r], e);
  return t;
}
function nn(t, e) {
  const r = Qe;
  if (r === null) return t;
  const o = Vc(r) || r.proxy,
    s = t.dirs || (t.dirs = []);
  for (let c = 0; c < e.length; c++) {
    let [f, h, d, g = we] = e[c];
    f &&
      (jt(f) && (f = { mounted: f, updated: f }),
      f.deep && no(h),
      s.push({
        dir: f,
        instance: o,
        value: h,
        oldValue: void 0,
        arg: d,
        modifiers: g,
      }));
  }
  return t;
}
function Ki(t, e, r, o) {
  const s = t.dirs,
    c = e && e.dirs;
  for (let f = 0; f < s.length; f++) {
    const h = s[f];
    c && (h.oldValue = c[f].value);
    let d = h.dir[o];
    d && (ms(), jn(d, r, 8, [t.el, h, t, e]), ys());
  }
}
const yi = Symbol("_leaveCb"),
  Ra = Symbol("_enterCb");
function N_() {
  const t = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  };
  return (
    ws(() => {
      t.isMounted = !0;
    }),
    w0(() => {
      t.isUnmounting = !0;
    }),
    t
  );
}
const Bn = [Function, Array],
  v0 = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: Bn,
    onEnter: Bn,
    onAfterEnter: Bn,
    onEnterCancelled: Bn,
    onBeforeLeave: Bn,
    onLeave: Bn,
    onAfterLeave: Bn,
    onLeaveCancelled: Bn,
    onBeforeAppear: Bn,
    onAppear: Bn,
    onAfterAppear: Bn,
    onAppearCancelled: Bn,
  },
  P_ = {
    name: "BaseTransition",
    props: v0,
    setup(t, { slots: e }) {
      const r = Wl(),
        o = N_();
      let s;
      return () => {
        const c = e.default && y0(e.default(), !0);
        if (!c || !c.length) return;
        let f = c[0];
        if (c.length > 1) {
          for (const L of c)
            if (L.type !== Mn) {
              f = L;
              break;
            }
        }
        const h = ae(t),
          { mode: d } = h;
        if (o.isLeaving) return of(f);
        const g = Ng(f);
        if (!g) return of(f);
        const v = Of(g, h, o, r);
        Df(g, v);
        const y = r.subTree,
          w = y && Ng(y);
        let _ = !1;
        const { getTransitionKey: N } = g.type;
        if (N) {
          const L = N();
          s === void 0 ? (s = L) : L !== s && ((s = L), (_ = !0));
        }
        if (w && w.type !== Mn && (!wr(g, w) || _)) {
          const L = Of(w, h, o, r);
          if ((Df(w, L), d === "out-in"))
            return (
              (o.isLeaving = !0),
              (L.afterLeave = () => {
                (o.isLeaving = !1), r.update.active !== !1 && r.update();
              }),
              of(f)
            );
          d === "in-out" &&
            g.type !== Mn &&
            (L.delayLeave = (A, T, M) => {
              const $ = m0(o, w);
              ($[String(w.key)] = w),
                (A[yi] = () => {
                  T(), (A[yi] = void 0), delete v.delayedLeave;
                }),
                (v.delayedLeave = M);
            });
        }
        return f;
      };
    },
  },
  $_ = P_;
function m0(t, e) {
  const { leavingVNodes: r } = t;
  let o = r.get(e.type);
  return o || ((o = Object.create(null)), r.set(e.type, o)), o;
}
function Of(t, e, r, o) {
  const {
      appear: s,
      mode: c,
      persisted: f = !1,
      onBeforeEnter: h,
      onEnter: d,
      onAfterEnter: g,
      onEnterCancelled: v,
      onBeforeLeave: y,
      onLeave: w,
      onAfterLeave: _,
      onLeaveCancelled: N,
      onBeforeAppear: L,
      onAppear: A,
      onAfterAppear: T,
      onAppearCancelled: M,
    } = e,
    $ = String(t.key),
    E = m0(r, t),
    H = (Y, nt) => {
      Y && jn(Y, o, 9, nt);
    },
    K = (Y, nt) => {
      const rt = nt[1];
      H(Y, nt),
        Ft(Y) ? Y.every((dt) => dt.length <= 1) && rt() : Y.length <= 1 && rt();
    },
    ct = {
      mode: c,
      persisted: f,
      beforeEnter(Y) {
        let nt = h;
        if (!r.isMounted)
          if (s) nt = L || h;
          else return;
        Y[yi] && Y[yi](!0);
        const rt = E[$];
        rt && wr(t, rt) && rt.el[yi] && rt.el[yi](), H(nt, [Y]);
      },
      enter(Y) {
        let nt = d,
          rt = g,
          dt = v;
        if (!r.isMounted)
          if (s) (nt = A || d), (rt = T || g), (dt = M || v);
          else return;
        let ht = !1;
        const G = (Y[Ra] = (z) => {
          ht ||
            ((ht = !0),
            z ? H(dt, [Y]) : H(rt, [Y]),
            ct.delayedLeave && ct.delayedLeave(),
            (Y[Ra] = void 0));
        });
        nt ? K(nt, [Y, G]) : G();
      },
      leave(Y, nt) {
        const rt = String(t.key);
        if ((Y[Ra] && Y[Ra](!0), r.isUnmounting)) return nt();
        H(y, [Y]);
        let dt = !1;
        const ht = (Y[yi] = (G) => {
          dt ||
            ((dt = !0),
            nt(),
            G ? H(N, [Y]) : H(_, [Y]),
            (Y[yi] = void 0),
            E[rt] === t && delete E[rt]);
        });
        (E[rt] = t), w ? K(w, [Y, ht]) : ht();
      },
      clone(Y) {
        return Of(Y, e, r, o);
      },
    };
  return ct;
}
function of(t) {
  if (Wc(t)) return (t = Pi(t)), (t.children = null), t;
}
function Ng(t) {
  return Wc(t) ? (t.children ? t.children[0] : void 0) : t;
}
function Df(t, e) {
  t.shapeFlag & 6 && t.component
    ? Df(t.component.subTree, e)
    : t.shapeFlag & 128
      ? ((t.ssContent.transition = e.clone(t.ssContent)),
        (t.ssFallback.transition = e.clone(t.ssFallback)))
      : (t.transition = e);
}
function y0(t, e = !1, r) {
  let o = [],
    s = 0;
  for (let c = 0; c < t.length; c++) {
    let f = t[c];
    const h = r == null ? f.key : String(r) + String(f.key != null ? f.key : c);
    f.type === ne
      ? (f.patchFlag & 128 && s++, (o = o.concat(y0(f.children, e, h))))
      : (e || f.type !== Mn) && o.push(h != null ? Pi(f, { key: h }) : f);
  }
  if (s > 1) for (let c = 0; c < o.length; c++) o[c].patchFlag = -2;
  return o;
}
/*! #__NO_SIDE_EFFECTS__ */ function fe(t, e) {
  return jt(t) ? Ie({ name: t.name }, e, { setup: t }) : t;
}
const ul = (t) => !!t.type.__asyncLoader,
  Wc = (t) => t.type.__isKeepAlive;
function O_(t, e) {
  b0(t, "a", e);
}
function D_(t, e) {
  b0(t, "da", e);
}
function b0(t, e, r = Ve) {
  const o =
    t.__wdc ||
    (t.__wdc = () => {
      let s = r;
      for (; s; ) {
        if (s.isDeactivated) return;
        s = s.parent;
      }
      return t();
    });
  if ((Uc(e, o, r), r)) {
    let s = r.parent;
    for (; s && s.parent; )
      Wc(s.parent.vnode) && R_(o, e, r, s), (s = s.parent);
  }
}
function R_(t, e, r, o) {
  const s = Uc(e, t, o, !0);
  zh(() => {
    bh(o[e], s);
  }, r);
}
function Uc(t, e, r = Ve, o = !1) {
  if (r) {
    const s = r[t] || (r[t] = []),
      c =
        e.__weh ||
        (e.__weh = (...f) => {
          if (r.isUnmounted) return;
          ms(), us(r);
          const h = jn(e, r, t, f);
          return so(), ys(), h;
        });
    return o ? s.unshift(c) : s.push(c), c;
  }
}
const Zr =
    (t) =>
    (e, r = Ve) =>
      (!Tl || t === "sp") && Uc(t, (...o) => e(...o), r),
  z_ = Zr("bm"),
  ws = Zr("m"),
  F_ = Zr("bu"),
  I_ = Zr("u"),
  w0 = Zr("bum"),
  zh = Zr("um"),
  H_ = Zr("sp"),
  q_ = Zr("rtg"),
  B_ = Zr("rtc");
function W_(t, e = Ve) {
  Uc("ec", t, e);
}
function Rn(t, e, r, o) {
  let s;
  const c = r && r[o];
  if (Ft(t) || Re(t)) {
    s = new Array(t.length);
    for (let f = 0, h = t.length; f < h; f++)
      s[f] = e(t[f], f, void 0, c && c[f]);
  } else if (typeof t == "number") {
    s = new Array(t);
    for (let f = 0; f < t; f++) s[f] = e(f + 1, f, void 0, c && c[f]);
  } else if (ye(t))
    if (t[Symbol.iterator])
      s = Array.from(t, (f, h) => e(f, h, void 0, c && c[h]));
    else {
      const f = Object.keys(t);
      s = new Array(f.length);
      for (let h = 0, d = f.length; h < d; h++) {
        const g = f[h];
        s[h] = e(t[g], g, h, c && c[h]);
      }
    }
  else s = [];
  return r && (r[o] = s), s;
}
function Gn(t, e, r = {}, o, s) {
  if (Qe.isCE || (Qe.parent && ul(Qe.parent) && Qe.parent.isCE))
    return e !== "default" && (r.name = e), It("slot", r, o && o());
  let c = t[e];
  c && c._c && (c._d = !1), st();
  const f = c && x0(c(r)),
    h = te(
      ne,
      { key: r.key || (f && f.key) || `_${e}` },
      f || (o ? o() : []),
      f && t._ === 1 ? 64 : -2,
    );
  return (
    !s && h.scopeId && (h.slotScopeIds = [h.scopeId + "-s"]),
    c && c._c && (c._d = !0),
    h
  );
}
function x0(t) {
  return t.some((e) =>
    Cl(e) ? !(e.type === Mn || (e.type === ne && !x0(e.children))) : !0,
  )
    ? t
    : null;
}
const Rf = (t) => (t ? (D0(t) ? Vc(t) || t.proxy : Rf(t.parent)) : null),
  fl = Ie(Object.create(null), {
    $: (t) => t,
    $el: (t) => t.vnode.el,
    $data: (t) => t.data,
    $props: (t) => t.props,
    $attrs: (t) => t.attrs,
    $slots: (t) => t.slots,
    $refs: (t) => t.refs,
    $parent: (t) => Rf(t.parent),
    $root: (t) => Rf(t.root),
    $emit: (t) => t.emit,
    $options: (t) => Fh(t),
    $forceUpdate: (t) => t.f || (t.f = () => Ph(t.update)),
    $nextTick: (t) => t.n || (t.n = Kr.bind(t.proxy)),
    $watch: (t) => M_.bind(t),
  }),
  sf = (t, e) => t !== we && !t.__isScriptSetup && le(t, e),
  U_ = {
    get({ _: t }, e) {
      const {
        ctx: r,
        setupState: o,
        data: s,
        props: c,
        accessCache: f,
        type: h,
        appContext: d,
      } = t;
      let g;
      if (e[0] !== "$") {
        const _ = f[e];
        if (_ !== void 0)
          switch (_) {
            case 1:
              return o[e];
            case 2:
              return s[e];
            case 4:
              return r[e];
            case 3:
              return c[e];
          }
        else {
          if (sf(o, e)) return (f[e] = 1), o[e];
          if (s !== we && le(s, e)) return (f[e] = 2), s[e];
          if ((g = t.propsOptions[0]) && le(g, e)) return (f[e] = 3), c[e];
          if (r !== we && le(r, e)) return (f[e] = 4), r[e];
          Ff && (f[e] = 0);
        }
      }
      const v = fl[e];
      let y, w;
      if (v) return e === "$attrs" && Nn(t, "get", e), v(t);
      if ((y = h.__cssModules) && (y = y[e])) return y;
      if (r !== we && le(r, e)) return (f[e] = 4), r[e];
      if (((w = d.config.globalProperties), le(w, e))) return w[e];
    },
    set({ _: t }, e, r) {
      const { data: o, setupState: s, ctx: c } = t;
      return sf(s, e)
        ? ((s[e] = r), !0)
        : o !== we && le(o, e)
          ? ((o[e] = r), !0)
          : le(t.props, e) || (e[0] === "$" && e.slice(1) in t)
            ? !1
            : ((c[e] = r), !0);
    },
    has(
      {
        _: {
          data: t,
          setupState: e,
          accessCache: r,
          ctx: o,
          appContext: s,
          propsOptions: c,
        },
      },
      f,
    ) {
      let h;
      return (
        !!r[f] ||
        (t !== we && le(t, f)) ||
        sf(e, f) ||
        ((h = c[0]) && le(h, f)) ||
        le(o, f) ||
        le(fl, f) ||
        le(s.config.globalProperties, f)
      );
    },
    defineProperty(t, e, r) {
      return (
        r.get != null
          ? (t._.accessCache[e] = 0)
          : le(r, "value") && this.set(t, e, r.value, null),
        Reflect.defineProperty(t, e, r)
      );
    },
  };
function j_() {
  return G_().attrs;
}
function _0(t, e, r) {
  const o = Wl();
  if (r && r.local) {
    const s = Zt(t[e]);
    return (
      Fe(
        () => t[e],
        (c) => (s.value = c),
      ),
      Fe(s, (c) => {
        c !== t[e] && o.emit(`update:${e}`, c);
      }),
      s
    );
  } else
    return {
      __v_isRef: !0,
      get value() {
        return t[e];
      },
      set value(s) {
        o.emit(`update:${e}`, s);
      },
    };
}
function G_() {
  const t = Wl();
  return t.setupContext || (t.setupContext = z0(t));
}
function hc(t) {
  return Ft(t) ? t.reduce((e, r) => ((e[r] = null), e), {}) : t;
}
function zf(t, e) {
  return !t || !e
    ? t || e
    : Ft(t) && Ft(e)
      ? t.concat(e)
      : Ie({}, hc(t), hc(e));
}
let Ff = !0;
function V_(t) {
  const e = Fh(t),
    r = t.proxy,
    o = t.ctx;
  (Ff = !1), e.beforeCreate && Pg(e.beforeCreate, t, "bc");
  const {
    data: s,
    computed: c,
    methods: f,
    watch: h,
    provide: d,
    inject: g,
    created: v,
    beforeMount: y,
    mounted: w,
    beforeUpdate: _,
    updated: N,
    activated: L,
    deactivated: A,
    beforeDestroy: T,
    beforeUnmount: M,
    destroyed: $,
    unmounted: E,
    render: H,
    renderTracked: K,
    renderTriggered: ct,
    errorCaptured: Y,
    serverPrefetch: nt,
    expose: rt,
    inheritAttrs: dt,
    components: ht,
    directives: G,
    filters: z,
  } = e;
  if ((g && K_(g, o, null), f))
    for (const B in f) {
      const Q = f[B];
      jt(Q) && (o[B] = Q.bind(r));
    }
  if (s) {
    const B = s.call(r, r);
    ye(B) && (t.data = Sr(B));
  }
  if (((Ff = !0), c))
    for (const B in c) {
      const Q = c[B],
        yt = jt(Q) ? Q.bind(r, r) : jt(Q.get) ? Q.get.bind(r, r) : _r,
        At = !jt(Q) && jt(Q.set) ? Q.set.bind(r) : _r,
        Ht = xt({ get: yt, set: At });
      Object.defineProperty(o, B, {
        enumerable: !0,
        configurable: !0,
        get: () => Ht.value,
        set: (qt) => (Ht.value = qt),
      });
    }
  if (h) for (const B in h) S0(h[B], o, r, B);
  if (d) {
    const B = jt(d) ? d.call(r) : d;
    Reflect.ownKeys(B).forEach((Q) => {
      Qa(Q, B[Q]);
    });
  }
  v && Pg(v, t, "c");
  function I(B, Q) {
    Ft(Q) ? Q.forEach((yt) => B(yt.bind(r))) : Q && B(Q.bind(r));
  }
  if (
    (I(z_, y),
    I(ws, w),
    I(F_, _),
    I(I_, N),
    I(O_, L),
    I(D_, A),
    I(W_, Y),
    I(B_, K),
    I(q_, ct),
    I(w0, M),
    I(zh, E),
    I(H_, nt),
    Ft(rt))
  )
    if (rt.length) {
      const B = t.exposed || (t.exposed = {});
      rt.forEach((Q) => {
        Object.defineProperty(B, Q, {
          get: () => r[Q],
          set: (yt) => (r[Q] = yt),
        });
      });
    } else t.exposed || (t.exposed = {});
  H && t.render === _r && (t.render = H),
    dt != null && (t.inheritAttrs = dt),
    ht && (t.components = ht),
    G && (t.directives = G);
}
function K_(t, e, r = _r) {
  Ft(t) && (t = If(t));
  for (const o in t) {
    const s = t[o];
    let c;
    ye(s)
      ? "default" in s
        ? (c = Gr(s.from || o, s.default, !0))
        : (c = Gr(s.from || o))
      : (c = Gr(s)),
      Le(c)
        ? Object.defineProperty(e, o, {
            enumerable: !0,
            configurable: !0,
            get: () => c.value,
            set: (f) => (c.value = f),
          })
        : (e[o] = c);
  }
}
function Pg(t, e, r) {
  jn(Ft(t) ? t.map((o) => o.bind(e.proxy)) : t.bind(e.proxy), e, r);
}
function S0(t, e, r, o) {
  const s = o.includes(".") ? g0(r, o) : () => r[o];
  if (Re(t)) {
    const c = e[t];
    jt(c) && Fe(s, c);
  } else if (jt(t)) Fe(s, t.bind(r));
  else if (ye(t))
    if (Ft(t)) t.forEach((c) => S0(c, e, r, o));
    else {
      const c = jt(t.handler) ? t.handler.bind(r) : e[t.handler];
      jt(c) && Fe(s, c, t);
    }
}
function Fh(t) {
  const e = t.type,
    { mixins: r, extends: o } = e,
    {
      mixins: s,
      optionsCache: c,
      config: { optionMergeStrategies: f },
    } = t.appContext,
    h = c.get(e);
  let d;
  return (
    h
      ? (d = h)
      : !s.length && !r && !o
        ? (d = e)
        : ((d = {}),
          s.length && s.forEach((g) => dc(d, g, f, !0)),
          dc(d, e, f)),
    ye(e) && c.set(e, d),
    d
  );
}
function dc(t, e, r, o = !1) {
  const { mixins: s, extends: c } = e;
  c && dc(t, c, r, !0), s && s.forEach((f) => dc(t, f, r, !0));
  for (const f in e)
    if (!(o && f === "expose")) {
      const h = X_[f] || (r && r[f]);
      t[f] = h ? h(t[f], e[f]) : e[f];
    }
  return t;
}
const X_ = {
  data: $g,
  props: Og,
  emits: Og,
  methods: ll,
  computed: ll,
  beforeCreate: dn,
  created: dn,
  beforeMount: dn,
  mounted: dn,
  beforeUpdate: dn,
  updated: dn,
  beforeDestroy: dn,
  beforeUnmount: dn,
  destroyed: dn,
  unmounted: dn,
  activated: dn,
  deactivated: dn,
  errorCaptured: dn,
  serverPrefetch: dn,
  components: ll,
  directives: ll,
  watch: Z_,
  provide: $g,
  inject: Y_,
};
function $g(t, e) {
  return e
    ? t
      ? function () {
          return Ie(
            jt(t) ? t.call(this, this) : t,
            jt(e) ? e.call(this, this) : e,
          );
        }
      : e
    : t;
}
function Y_(t, e) {
  return ll(If(t), If(e));
}
function If(t) {
  if (Ft(t)) {
    const e = {};
    for (let r = 0; r < t.length; r++) e[t[r]] = t[r];
    return e;
  }
  return t;
}
function dn(t, e) {
  return t ? [...new Set([].concat(t, e))] : e;
}
function ll(t, e) {
  return t ? Ie(Object.create(null), t, e) : e;
}
function Og(t, e) {
  return t
    ? Ft(t) && Ft(e)
      ? [...new Set([...t, ...e])]
      : Ie(Object.create(null), hc(t), hc(e ?? {}))
    : e;
}
function Z_(t, e) {
  if (!t) return e;
  if (!e) return t;
  const r = Ie(Object.create(null), t);
  for (const o in e) r[o] = dn(t[o], e[o]);
  return r;
}
function k0() {
  return {
    app: null,
    config: {
      isNativeTag: mx,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let Q_ = 0;
function J_(t, e) {
  return function (o, s = null) {
    jt(o) || (o = Ie({}, o)), s != null && !ye(s) && (s = null);
    const c = k0(),
      f = new WeakSet();
    let h = !1;
    const d = (c.app = {
      _uid: Q_++,
      _component: o,
      _props: s,
      _container: null,
      _context: c,
      _instance: null,
      version: xS,
      get config() {
        return c.config;
      },
      set config(g) {},
      use(g, ...v) {
        return (
          f.has(g) ||
            (g && jt(g.install)
              ? (f.add(g), g.install(d, ...v))
              : jt(g) && (f.add(g), g(d, ...v))),
          d
        );
      },
      mixin(g) {
        return c.mixins.includes(g) || c.mixins.push(g), d;
      },
      component(g, v) {
        return v ? ((c.components[g] = v), d) : c.components[g];
      },
      directive(g, v) {
        return v ? ((c.directives[g] = v), d) : c.directives[g];
      },
      mount(g, v, y) {
        if (!h) {
          const w = It(o, s);
          return (
            (w.appContext = c),
            v && e ? e(w, g) : t(w, g, y),
            (h = !0),
            (d._container = g),
            (g.__vue_app__ = d),
            Vc(w.component) || w.component.proxy
          );
        }
      },
      unmount() {
        h && (t(null, d._container), delete d._container.__vue_app__);
      },
      provide(g, v) {
        return (c.provides[g] = v), d;
      },
      runWithContext(g) {
        pc = d;
        try {
          return g();
        } finally {
          pc = null;
        }
      },
    });
    return d;
  };
}
let pc = null;
function Qa(t, e) {
  if (Ve) {
    let r = Ve.provides;
    const o = Ve.parent && Ve.parent.provides;
    o === r && (r = Ve.provides = Object.create(o)), (r[t] = e);
  }
}
function Gr(t, e, r = !1) {
  const o = Ve || Qe;
  if (o || pc) {
    const s = o
      ? o.parent == null
        ? o.vnode.appContext && o.vnode.appContext.provides
        : o.parent.provides
      : pc._context.provides;
    if (s && t in s) return s[t];
    if (arguments.length > 1) return r && jt(e) ? e.call(o && o.proxy) : e;
  }
}
function tS(t, e, r, o = !1) {
  const s = {},
    c = {};
  ac(c, Gc, 1), (t.propsDefaults = Object.create(null)), C0(t, e, s, c);
  for (const f in t.propsOptions[0]) f in s || (s[f] = void 0);
  r ? (t.props = o ? s : e0(s)) : t.type.props ? (t.props = s) : (t.props = c),
    (t.attrs = c);
}
function eS(t, e, r, o) {
  const {
      props: s,
      attrs: c,
      vnode: { patchFlag: f },
    } = t,
    h = ae(s),
    [d] = t.propsOptions;
  let g = !1;
  if ((o || f > 0) && !(f & 16)) {
    if (f & 8) {
      const v = t.vnode.dynamicProps;
      for (let y = 0; y < v.length; y++) {
        let w = v[y];
        if (qc(t.emitsOptions, w)) continue;
        const _ = e[w];
        if (d)
          if (le(c, w)) _ !== c[w] && ((c[w] = _), (g = !0));
          else {
            const N = Er(w);
            s[N] = Hf(d, h, N, _, t, !1);
          }
        else _ !== c[w] && ((c[w] = _), (g = !0));
      }
    }
  } else {
    C0(t, e, s, c) && (g = !0);
    let v;
    for (const y in h)
      (!e || (!le(e, y) && ((v = go(y)) === y || !le(e, v)))) &&
        (d
          ? r &&
            (r[y] !== void 0 || r[v] !== void 0) &&
            (s[y] = Hf(d, h, y, void 0, t, !0))
          : delete s[y]);
    if (c !== h)
      for (const y in c) (!e || !le(e, y)) && (delete c[y], (g = !0));
  }
  g && jr(t, "set", "$attrs");
}
function C0(t, e, r, o) {
  const [s, c] = t.propsOptions;
  let f = !1,
    h;
  if (e)
    for (let d in e) {
      if (Ya(d)) continue;
      const g = e[d];
      let v;
      s && le(s, (v = Er(d)))
        ? !c || !c.includes(v)
          ? (r[v] = g)
          : ((h || (h = {}))[v] = g)
        : qc(t.emitsOptions, d) ||
          ((!(d in o) || g !== o[d]) && ((o[d] = g), (f = !0)));
    }
  if (c) {
    const d = ae(r),
      g = h || we;
    for (let v = 0; v < c.length; v++) {
      const y = c[v];
      r[y] = Hf(s, d, y, g[y], t, !le(g, y));
    }
  }
  return f;
}
function Hf(t, e, r, o, s, c) {
  const f = t[r];
  if (f != null) {
    const h = le(f, "default");
    if (h && o === void 0) {
      const d = f.default;
      if (f.type !== Function && !f.skipFactory && jt(d)) {
        const { propsDefaults: g } = s;
        r in g ? (o = g[r]) : (us(s), (o = g[r] = d.call(null, e)), so());
      } else o = d;
    }
    f[0] &&
      (c && !h ? (o = !1) : f[1] && (o === "" || o === go(r)) && (o = !0));
  }
  return o;
}
function T0(t, e, r = !1) {
  const o = e.propsCache,
    s = o.get(t);
  if (s) return s;
  const c = t.props,
    f = {},
    h = [];
  let d = !1;
  if (!jt(t)) {
    const v = (y) => {
      d = !0;
      const [w, _] = T0(y, e, !0);
      Ie(f, w), _ && h.push(..._);
    };
    !r && e.mixins.length && e.mixins.forEach(v),
      t.extends && v(t.extends),
      t.mixins && t.mixins.forEach(v);
  }
  if (!c && !d) return ye(t) && o.set(t, Qo), Qo;
  if (Ft(c))
    for (let v = 0; v < c.length; v++) {
      const y = Er(c[v]);
      Dg(y) && (f[y] = we);
    }
  else if (c)
    for (const v in c) {
      const y = Er(v);
      if (Dg(y)) {
        const w = c[v],
          _ = (f[y] = Ft(w) || jt(w) ? { type: w } : Ie({}, w));
        if (_) {
          const N = Fg(Boolean, _.type),
            L = Fg(String, _.type);
          (_[0] = N > -1),
            (_[1] = L < 0 || N < L),
            (N > -1 || le(_, "default")) && h.push(y);
        }
      }
    }
  const g = [f, h];
  return ye(t) && o.set(t, g), g;
}
function Dg(t) {
  return t[0] !== "$";
}
function Rg(t) {
  const e = t && t.toString().match(/^\s*(function|class) (\w+)/);
  return e ? e[2] : t === null ? "null" : "";
}
function zg(t, e) {
  return Rg(t) === Rg(e);
}
function Fg(t, e) {
  return Ft(e) ? e.findIndex((r) => zg(r, t)) : jt(e) && zg(e, t) ? 0 : -1;
}
const E0 = (t) => t[0] === "_" || t === "$stable",
  Ih = (t) => (Ft(t) ? t.map(ir) : [ir(t)]),
  nS = (t, e, r) => {
    if (e._n) return e;
    const o = ee((...s) => Ih(e(...s)), r);
    return (o._c = !1), o;
  },
  L0 = (t, e, r) => {
    const o = t._ctx;
    for (const s in t) {
      if (E0(s)) continue;
      const c = t[s];
      if (jt(c)) e[s] = nS(s, c, o);
      else if (c != null) {
        const f = Ih(c);
        e[s] = () => f;
      }
    }
  },
  A0 = (t, e) => {
    const r = Ih(e);
    t.slots.default = () => r;
  },
  rS = (t, e) => {
    if (t.vnode.shapeFlag & 32) {
      const r = e._;
      r ? ((t.slots = ae(e)), ac(e, "_", r)) : L0(e, (t.slots = {}));
    } else (t.slots = {}), e && A0(t, e);
    ac(t.slots, Gc, 1);
  },
  iS = (t, e, r) => {
    const { vnode: o, slots: s } = t;
    let c = !0,
      f = we;
    if (o.shapeFlag & 32) {
      const h = e._;
      h
        ? r && h === 1
          ? (c = !1)
          : (Ie(s, e), !r && h === 1 && delete s._)
        : ((c = !e.$stable), L0(e, s)),
        (f = e);
    } else e && (A0(t, e), (f = { default: 1 }));
    if (c) for (const h in s) !E0(h) && f[h] == null && delete s[h];
  };
function qf(t, e, r, o, s = !1) {
  if (Ft(t)) {
    t.forEach((w, _) => qf(w, e && (Ft(e) ? e[_] : e), r, o, s));
    return;
  }
  if (ul(o) && !s) return;
  const c = o.shapeFlag & 4 ? Vc(o.component) || o.component.proxy : o.el,
    f = s ? null : c,
    { i: h, r: d } = t,
    g = e && e.r,
    v = h.refs === we ? (h.refs = {}) : h.refs,
    y = h.setupState;
  if (
    (g != null &&
      g !== d &&
      (Re(g)
        ? ((v[g] = null), le(y, g) && (y[g] = null))
        : Le(g) && (g.value = null)),
    jt(d))
  )
    Ei(d, h, 12, [f, v]);
  else {
    const w = Re(d),
      _ = Le(d);
    if (w || _) {
      const N = () => {
        if (t.f) {
          const L = w ? (le(y, d) ? y[d] : v[d]) : d.value;
          s
            ? Ft(L) && bh(L, c)
            : Ft(L)
              ? L.includes(c) || L.push(c)
              : w
                ? ((v[d] = [c]), le(y, d) && (y[d] = v[d]))
                : ((d.value = [c]), t.k && (v[t.k] = d.value));
        } else
          w
            ? ((v[d] = f), le(y, d) && (y[d] = f))
            : _ && ((d.value = f), t.k && (v[t.k] = f));
      };
      f ? ((N.id = -1), Cn(N, r)) : N();
    }
  }
}
const Cn = L_;
function oS(t) {
  return sS(t);
}
function sS(t, e) {
  const r = Lf();
  r.__VUE__ = !0;
  const {
      insert: o,
      remove: s,
      patchProp: c,
      createElement: f,
      createText: h,
      createComment: d,
      setText: g,
      setElementText: v,
      parentNode: y,
      nextSibling: w,
      setScopeId: _ = _r,
      insertStaticContent: N,
    } = t,
    L = (
      R,
      F,
      V,
      J = null,
      lt = null,
      ft = null,
      kt = !1,
      mt = null,
      ut = !!F.dynamicChildren,
    ) => {
      if (R === F) return;
      R && !wr(R, F) && ((J = j(R)), qt(R, lt, ft, !0), (R = null)),
        F.patchFlag === -2 && ((ut = !1), (F.dynamicChildren = null));
      const { type: pt, ref: Dt, shapeFlag: Nt } = F;
      switch (pt) {
        case jc:
          A(R, F, V, J);
          break;
        case Mn:
          T(R, F, V, J);
          break;
        case lf:
          R == null && M(F, V, J, kt);
          break;
        case ne:
          ht(R, F, V, J, lt, ft, kt, mt, ut);
          break;
        default:
          Nt & 1
            ? H(R, F, V, J, lt, ft, kt, mt, ut)
            : Nt & 6
              ? G(R, F, V, J, lt, ft, kt, mt, ut)
              : (Nt & 64 || Nt & 128) &&
                pt.process(R, F, V, J, lt, ft, kt, mt, ut, at);
      }
      Dt != null && lt && qf(Dt, R && R.ref, ft, F || R, !F);
    },
    A = (R, F, V, J) => {
      if (R == null) o((F.el = h(F.children)), V, J);
      else {
        const lt = (F.el = R.el);
        F.children !== R.children && g(lt, F.children);
      }
    },
    T = (R, F, V, J) => {
      R == null ? o((F.el = d(F.children || "")), V, J) : (F.el = R.el);
    },
    M = (R, F, V, J) => {
      [R.el, R.anchor] = N(R.children, F, V, J, R.el, R.anchor);
    },
    $ = ({ el: R, anchor: F }, V, J) => {
      let lt;
      for (; R && R !== F; ) (lt = w(R)), o(R, V, J), (R = lt);
      o(F, V, J);
    },
    E = ({ el: R, anchor: F }) => {
      let V;
      for (; R && R !== F; ) (V = w(R)), s(R), (R = V);
      s(F);
    },
    H = (R, F, V, J, lt, ft, kt, mt, ut) => {
      (kt = kt || F.type === "svg"),
        R == null
          ? K(F, V, J, lt, ft, kt, mt, ut)
          : nt(R, F, lt, ft, kt, mt, ut);
    },
    K = (R, F, V, J, lt, ft, kt, mt) => {
      let ut, pt;
      const {
        type: Dt,
        props: Nt,
        shapeFlag: Ot,
        transition: Bt,
        dirs: Kt,
      } = R;
      if (
        ((ut = R.el = f(R.type, ft, Nt && Nt.is, Nt)),
        Ot & 8
          ? v(ut, R.children)
          : Ot & 16 &&
            Y(
              R.children,
              ut,
              null,
              J,
              lt,
              ft && Dt !== "foreignObject",
              kt,
              mt,
            ),
        Kt && Ki(R, null, J, "created"),
        ct(ut, R, R.scopeId, kt, J),
        Nt)
      ) {
        for (const oe in Nt)
          oe !== "value" &&
            !Ya(oe) &&
            c(ut, oe, null, Nt[oe], ft, R.children, J, lt, Tt);
        "value" in Nt && c(ut, "value", null, Nt.value),
          (pt = Nt.onVnodeBeforeMount) && yr(pt, J, R);
      }
      Kt && Ki(R, null, J, "beforeMount");
      const re = lS(lt, Bt);
      re && Bt.beforeEnter(ut),
        o(ut, F, V),
        ((pt = Nt && Nt.onVnodeMounted) || re || Kt) &&
          Cn(() => {
            pt && yr(pt, J, R),
              re && Bt.enter(ut),
              Kt && Ki(R, null, J, "mounted");
          }, lt);
    },
    ct = (R, F, V, J, lt) => {
      if ((V && _(R, V), J)) for (let ft = 0; ft < J.length; ft++) _(R, J[ft]);
      if (lt) {
        let ft = lt.subTree;
        if (F === ft) {
          const kt = lt.vnode;
          ct(R, kt, kt.scopeId, kt.slotScopeIds, lt.parent);
        }
      }
    },
    Y = (R, F, V, J, lt, ft, kt, mt, ut = 0) => {
      for (let pt = ut; pt < R.length; pt++) {
        const Dt = (R[pt] = mt ? bi(R[pt]) : ir(R[pt]));
        L(null, Dt, F, V, J, lt, ft, kt, mt);
      }
    },
    nt = (R, F, V, J, lt, ft, kt) => {
      const mt = (F.el = R.el);
      let { patchFlag: ut, dynamicChildren: pt, dirs: Dt } = F;
      ut |= R.patchFlag & 16;
      const Nt = R.props || we,
        Ot = F.props || we;
      let Bt;
      V && Xi(V, !1),
        (Bt = Ot.onVnodeBeforeUpdate) && yr(Bt, V, F, R),
        Dt && Ki(F, R, V, "beforeUpdate"),
        V && Xi(V, !0);
      const Kt = lt && F.type !== "foreignObject";
      if (
        (pt
          ? rt(R.dynamicChildren, pt, mt, V, J, Kt, ft)
          : kt || Q(R, F, mt, null, V, J, Kt, ft, !1),
        ut > 0)
      ) {
        if (ut & 16) dt(mt, F, Nt, Ot, V, J, lt);
        else if (
          (ut & 2 &&
            Nt.class !== Ot.class &&
            c(mt, "class", null, Ot.class, lt),
          ut & 4 && c(mt, "style", Nt.style, Ot.style, lt),
          ut & 8)
        ) {
          const re = F.dynamicProps;
          for (let oe = 0; oe < re.length; oe++) {
            const he = re[oe],
              se = Nt[he],
              rn = Ot[he];
            (rn !== se || he === "value") &&
              c(mt, he, se, rn, lt, R.children, V, J, Tt);
          }
        }
        ut & 1 && R.children !== F.children && v(mt, F.children);
      } else !kt && pt == null && dt(mt, F, Nt, Ot, V, J, lt);
      ((Bt = Ot.onVnodeUpdated) || Dt) &&
        Cn(() => {
          Bt && yr(Bt, V, F, R), Dt && Ki(F, R, V, "updated");
        }, J);
    },
    rt = (R, F, V, J, lt, ft, kt) => {
      for (let mt = 0; mt < F.length; mt++) {
        const ut = R[mt],
          pt = F[mt],
          Dt =
            ut.el && (ut.type === ne || !wr(ut, pt) || ut.shapeFlag & 70)
              ? y(ut.el)
              : V;
        L(ut, pt, Dt, null, J, lt, ft, kt, !0);
      }
    },
    dt = (R, F, V, J, lt, ft, kt) => {
      if (V !== J) {
        if (V !== we)
          for (const mt in V)
            !Ya(mt) &&
              !(mt in J) &&
              c(R, mt, V[mt], null, kt, F.children, lt, ft, Tt);
        for (const mt in J) {
          if (Ya(mt)) continue;
          const ut = J[mt],
            pt = V[mt];
          ut !== pt &&
            mt !== "value" &&
            c(R, mt, pt, ut, kt, F.children, lt, ft, Tt);
        }
        "value" in J && c(R, "value", V.value, J.value);
      }
    },
    ht = (R, F, V, J, lt, ft, kt, mt, ut) => {
      const pt = (F.el = R ? R.el : h("")),
        Dt = (F.anchor = R ? R.anchor : h(""));
      let { patchFlag: Nt, dynamicChildren: Ot, slotScopeIds: Bt } = F;
      Bt && (mt = mt ? mt.concat(Bt) : Bt),
        R == null
          ? (o(pt, V, J), o(Dt, V, J), Y(F.children, V, Dt, lt, ft, kt, mt, ut))
          : Nt > 0 && Nt & 64 && Ot && R.dynamicChildren
            ? (rt(R.dynamicChildren, Ot, V, lt, ft, kt, mt),
              (F.key != null || (lt && F === lt.subTree)) && M0(R, F, !0))
            : Q(R, F, V, Dt, lt, ft, kt, mt, ut);
    },
    G = (R, F, V, J, lt, ft, kt, mt, ut) => {
      (F.slotScopeIds = mt),
        R == null
          ? F.shapeFlag & 512
            ? lt.ctx.activate(F, V, J, kt, ut)
            : z(F, V, J, lt, ft, kt, ut)
          : k(R, F, ut);
    },
    z = (R, F, V, J, lt, ft, kt) => {
      const mt = (R.component = dS(R, J, lt));
      if ((Wc(R) && (mt.ctx.renderer = at), pS(mt), mt.asyncDep)) {
        if ((lt && lt.registerDep(mt, I), !R.el)) {
          const ut = (mt.subTree = It(Mn));
          T(null, ut, F, V);
        }
        return;
      }
      I(mt, R, F, V, lt, ft, kt);
    },
    k = (R, F, V) => {
      const J = (F.component = R.component);
      if (y_(R, F, V))
        if (J.asyncDep && !J.asyncResolved) {
          B(J, F, V);
          return;
        } else (J.next = F), f_(J.update), J.update();
      else (F.el = R.el), (J.vnode = F);
    },
    I = (R, F, V, J, lt, ft, kt) => {
      const mt = () => {
          if (R.isMounted) {
            let { next: Dt, bu: Nt, u: Ot, parent: Bt, vnode: Kt } = R,
              re = Dt,
              oe;
            Xi(R, !1),
              Dt ? ((Dt.el = Kt.el), B(R, Dt, kt)) : (Dt = Kt),
              Nt && Za(Nt),
              (oe = Dt.props && Dt.props.onVnodeBeforeUpdate) &&
                yr(oe, Bt, Dt, Kt),
              Xi(R, !0);
            const he = rf(R),
              se = R.subTree;
            (R.subTree = he),
              L(se, he, y(se.el), j(se), R, lt, ft),
              (Dt.el = he.el),
              re === null && $h(R, he.el),
              Ot && Cn(Ot, lt),
              (oe = Dt.props && Dt.props.onVnodeUpdated) &&
                Cn(() => yr(oe, Bt, Dt, Kt), lt);
          } else {
            let Dt;
            const { el: Nt, props: Ot } = F,
              { bm: Bt, m: Kt, parent: re } = R,
              oe = ul(F);
            if (
              (Xi(R, !1),
              Bt && Za(Bt),
              !oe && (Dt = Ot && Ot.onVnodeBeforeMount) && yr(Dt, re, F),
              Xi(R, !0),
              Nt && Et)
            ) {
              const he = () => {
                (R.subTree = rf(R)), Et(Nt, R.subTree, R, lt, null);
              };
              oe
                ? F.type.__asyncLoader().then(() => !R.isUnmounted && he())
                : he();
            } else {
              const he = (R.subTree = rf(R));
              L(null, he, V, J, R, lt, ft), (F.el = he.el);
            }
            if ((Kt && Cn(Kt, lt), !oe && (Dt = Ot && Ot.onVnodeMounted))) {
              const he = F;
              Cn(() => yr(Dt, re, he), lt);
            }
            (F.shapeFlag & 256 ||
              (re && ul(re.vnode) && re.vnode.shapeFlag & 256)) &&
              R.a &&
              Cn(R.a, lt),
              (R.isMounted = !0),
              (F = V = J = null);
          }
        },
        ut = (R.effect = new _h(mt, () => Ph(pt), R.scope)),
        pt = (R.update = () => ut.run());
      (pt.id = R.uid), Xi(R, !0), pt();
    },
    B = (R, F, V) => {
      F.component = R;
      const J = R.vnode.props;
      (R.vnode = F),
        (R.next = null),
        eS(R, F.props, J, V),
        iS(R, F.children, V),
        ms(),
        Eg(),
        ys();
    },
    Q = (R, F, V, J, lt, ft, kt, mt, ut = !1) => {
      const pt = R && R.children,
        Dt = R ? R.shapeFlag : 0,
        Nt = F.children,
        { patchFlag: Ot, shapeFlag: Bt } = F;
      if (Ot > 0) {
        if (Ot & 128) {
          At(pt, Nt, V, J, lt, ft, kt, mt, ut);
          return;
        } else if (Ot & 256) {
          yt(pt, Nt, V, J, lt, ft, kt, mt, ut);
          return;
        }
      }
      Bt & 8
        ? (Dt & 16 && Tt(pt, lt, ft), Nt !== pt && v(V, Nt))
        : Dt & 16
          ? Bt & 16
            ? At(pt, Nt, V, J, lt, ft, kt, mt, ut)
            : Tt(pt, lt, ft, !0)
          : (Dt & 8 && v(V, ""), Bt & 16 && Y(Nt, V, J, lt, ft, kt, mt, ut));
    },
    yt = (R, F, V, J, lt, ft, kt, mt, ut) => {
      (R = R || Qo), (F = F || Qo);
      const pt = R.length,
        Dt = F.length,
        Nt = Math.min(pt, Dt);
      let Ot;
      for (Ot = 0; Ot < Nt; Ot++) {
        const Bt = (F[Ot] = ut ? bi(F[Ot]) : ir(F[Ot]));
        L(R[Ot], Bt, V, null, lt, ft, kt, mt, ut);
      }
      pt > Dt ? Tt(R, lt, ft, !0, !1, Nt) : Y(F, V, J, lt, ft, kt, mt, ut, Nt);
    },
    At = (R, F, V, J, lt, ft, kt, mt, ut) => {
      let pt = 0;
      const Dt = F.length;
      let Nt = R.length - 1,
        Ot = Dt - 1;
      for (; pt <= Nt && pt <= Ot; ) {
        const Bt = R[pt],
          Kt = (F[pt] = ut ? bi(F[pt]) : ir(F[pt]));
        if (wr(Bt, Kt)) L(Bt, Kt, V, null, lt, ft, kt, mt, ut);
        else break;
        pt++;
      }
      for (; pt <= Nt && pt <= Ot; ) {
        const Bt = R[Nt],
          Kt = (F[Ot] = ut ? bi(F[Ot]) : ir(F[Ot]));
        if (wr(Bt, Kt)) L(Bt, Kt, V, null, lt, ft, kt, mt, ut);
        else break;
        Nt--, Ot--;
      }
      if (pt > Nt) {
        if (pt <= Ot) {
          const Bt = Ot + 1,
            Kt = Bt < Dt ? F[Bt].el : J;
          for (; pt <= Ot; )
            L(
              null,
              (F[pt] = ut ? bi(F[pt]) : ir(F[pt])),
              V,
              Kt,
              lt,
              ft,
              kt,
              mt,
              ut,
            ),
              pt++;
        }
      } else if (pt > Ot) for (; pt <= Nt; ) qt(R[pt], lt, ft, !0), pt++;
      else {
        const Bt = pt,
          Kt = pt,
          re = new Map();
        for (pt = Kt; pt <= Ot; pt++) {
          const Ae = (F[pt] = ut ? bi(F[pt]) : ir(F[pt]));
          Ae.key != null && re.set(Ae.key, pt);
        }
        let oe,
          he = 0;
        const se = Ot - Kt + 1;
        let rn = !1,
          Pn = 0;
        const wn = new Array(se);
        for (pt = 0; pt < se; pt++) wn[pt] = 0;
        for (pt = Bt; pt <= Nt; pt++) {
          const Ae = R[pt];
          if (he >= se) {
            qt(Ae, lt, ft, !0);
            continue;
          }
          let xn;
          if (Ae.key != null) xn = re.get(Ae.key);
          else
            for (oe = Kt; oe <= Ot; oe++)
              if (wn[oe - Kt] === 0 && wr(Ae, F[oe])) {
                xn = oe;
                break;
              }
          xn === void 0
            ? qt(Ae, lt, ft, !0)
            : ((wn[xn - Kt] = pt + 1),
              xn >= Pn ? (Pn = xn) : (rn = !0),
              L(Ae, F[xn], V, null, lt, ft, kt, mt, ut),
              he++);
        }
        const hr = rn ? aS(wn) : Qo;
        for (oe = hr.length - 1, pt = se - 1; pt >= 0; pt--) {
          const Ae = Kt + pt,
            xn = F[Ae],
            Yt = Ae + 1 < Dt ? F[Ae + 1].el : J;
          wn[pt] === 0
            ? L(null, xn, V, Yt, lt, ft, kt, mt, ut)
            : rn && (oe < 0 || pt !== hr[oe] ? Ht(xn, V, Yt, 2) : oe--);
        }
      }
    },
    Ht = (R, F, V, J, lt = null) => {
      const {
        el: ft,
        type: kt,
        transition: mt,
        children: ut,
        shapeFlag: pt,
      } = R;
      if (pt & 6) {
        Ht(R.component.subTree, F, V, J);
        return;
      }
      if (pt & 128) {
        R.suspense.move(F, V, J);
        return;
      }
      if (pt & 64) {
        kt.move(R, F, V, at);
        return;
      }
      if (kt === ne) {
        o(ft, F, V);
        for (let Nt = 0; Nt < ut.length; Nt++) Ht(ut[Nt], F, V, J);
        o(R.anchor, F, V);
        return;
      }
      if (kt === lf) {
        $(R, F, V);
        return;
      }
      if (J !== 2 && pt & 1 && mt)
        if (J === 0)
          mt.beforeEnter(ft), o(ft, F, V), Cn(() => mt.enter(ft), lt);
        else {
          const { leave: Nt, delayLeave: Ot, afterLeave: Bt } = mt,
            Kt = () => o(ft, F, V),
            re = () => {
              Nt(ft, () => {
                Kt(), Bt && Bt();
              });
            };
          Ot ? Ot(ft, Kt, re) : re();
        }
      else o(ft, F, V);
    },
    qt = (R, F, V, J = !1, lt = !1) => {
      const {
        type: ft,
        props: kt,
        ref: mt,
        children: ut,
        dynamicChildren: pt,
        shapeFlag: Dt,
        patchFlag: Nt,
        dirs: Ot,
      } = R;
      if ((mt != null && qf(mt, null, V, R, !0), Dt & 256)) {
        F.ctx.deactivate(R);
        return;
      }
      const Bt = Dt & 1 && Ot,
        Kt = !ul(R);
      let re;
      if ((Kt && (re = kt && kt.onVnodeBeforeUnmount) && yr(re, F, R), Dt & 6))
        Vt(R.component, V, J);
      else {
        if (Dt & 128) {
          R.suspense.unmount(V, J);
          return;
        }
        Bt && Ki(R, null, F, "beforeUnmount"),
          Dt & 64
            ? R.type.remove(R, F, V, lt, at, J)
            : pt && (ft !== ne || (Nt > 0 && Nt & 64))
              ? Tt(pt, F, V, !1, !0)
              : ((ft === ne && Nt & 384) || (!lt && Dt & 16)) && Tt(ut, F, V),
          J && Jt(R);
      }
      ((Kt && (re = kt && kt.onVnodeUnmounted)) || Bt) &&
        Cn(() => {
          re && yr(re, F, R), Bt && Ki(R, null, F, "unmounted");
        }, V);
    },
    Jt = (R) => {
      const { type: F, el: V, anchor: J, transition: lt } = R;
      if (F === ne) {
        Qt(V, J);
        return;
      }
      if (F === lf) {
        E(R);
        return;
      }
      const ft = () => {
        s(V), lt && !lt.persisted && lt.afterLeave && lt.afterLeave();
      };
      if (R.shapeFlag & 1 && lt && !lt.persisted) {
        const { leave: kt, delayLeave: mt } = lt,
          ut = () => kt(V, ft);
        mt ? mt(R.el, ft, ut) : ut();
      } else ft();
    },
    Qt = (R, F) => {
      let V;
      for (; R !== F; ) (V = w(R)), s(R), (R = V);
      s(F);
    },
    Vt = (R, F, V) => {
      const { bum: J, scope: lt, update: ft, subTree: kt, um: mt } = R;
      J && Za(J),
        lt.stop(),
        ft && ((ft.active = !1), qt(kt, R, F, V)),
        mt && Cn(mt, F),
        Cn(() => {
          R.isUnmounted = !0;
        }, F),
        F &&
          F.pendingBranch &&
          !F.isUnmounted &&
          R.asyncDep &&
          !R.asyncResolved &&
          R.suspenseId === F.pendingId &&
          (F.deps--, F.deps === 0 && F.resolve());
    },
    Tt = (R, F, V, J = !1, lt = !1, ft = 0) => {
      for (let kt = ft; kt < R.length; kt++) qt(R[kt], F, V, J, lt);
    },
    j = (R) =>
      R.shapeFlag & 6
        ? j(R.component.subTree)
        : R.shapeFlag & 128
          ? R.suspense.next()
          : w(R.anchor || R.el),
    it = (R, F, V) => {
      R == null
        ? F._vnode && qt(F._vnode, null, null, !0)
        : L(F._vnode || null, R, F, null, null, null, V),
        Eg(),
        a0(),
        (F._vnode = R);
    },
    at = {
      p: L,
      um: qt,
      m: Ht,
      r: Jt,
      mt: z,
      mc: Y,
      pc: Q,
      pbc: rt,
      n: j,
      o: t,
    };
  let Mt, Et;
  return (
    e && ([Mt, Et] = e(at)), { render: it, hydrate: Mt, createApp: J_(it, Mt) }
  );
}
function Xi({ effect: t, update: e }, r) {
  t.allowRecurse = e.allowRecurse = r;
}
function lS(t, e) {
  return (!t || (t && !t.pendingBranch)) && e && !e.persisted;
}
function M0(t, e, r = !1) {
  const o = t.children,
    s = e.children;
  if (Ft(o) && Ft(s))
    for (let c = 0; c < o.length; c++) {
      const f = o[c];
      let h = s[c];
      h.shapeFlag & 1 &&
        !h.dynamicChildren &&
        ((h.patchFlag <= 0 || h.patchFlag === 32) &&
          ((h = s[c] = bi(s[c])), (h.el = f.el)),
        r || M0(f, h)),
        h.type === jc && (h.el = f.el);
    }
}
function aS(t) {
  const e = t.slice(),
    r = [0];
  let o, s, c, f, h;
  const d = t.length;
  for (o = 0; o < d; o++) {
    const g = t[o];
    if (g !== 0) {
      if (((s = r[r.length - 1]), t[s] < g)) {
        (e[o] = s), r.push(o);
        continue;
      }
      for (c = 0, f = r.length - 1; c < f; )
        (h = (c + f) >> 1), t[r[h]] < g ? (c = h + 1) : (f = h);
      g < t[r[c]] && (c > 0 && (e[o] = r[c - 1]), (r[c] = o));
    }
  }
  for (c = r.length, f = r[c - 1]; c-- > 0; ) (r[c] = f), (f = e[f]);
  return r;
}
const cS = (t) => t.__isTeleport,
  ne = Symbol.for("v-fgt"),
  jc = Symbol.for("v-txt"),
  Mn = Symbol.for("v-cmt"),
  lf = Symbol.for("v-stc"),
  hl = [];
let Wn = null;
function st(t = !1) {
  hl.push((Wn = t ? null : []));
}
function N0() {
  hl.pop(), (Wn = hl[hl.length - 1] || null);
}
let cs = 1;
function Ig(t) {
  cs += t;
}
function P0(t) {
  return (
    (t.dynamicChildren = cs > 0 ? Wn || Qo : null),
    N0(),
    cs > 0 && Wn && Wn.push(t),
    t
  );
}
function St(t, e, r, o, s, c) {
  return P0(tt(t, e, r, o, s, c, !0));
}
function te(t, e, r, o, s) {
  return P0(It(t, e, r, o, s, !0));
}
function Cl(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function wr(t, e) {
  return t.type === e.type && t.key === e.key;
}
const Gc = "__vInternal",
  $0 = ({ key: t }) => t ?? null,
  Ja = ({ ref: t, ref_key: e, ref_for: r }) => (
    typeof t == "number" && (t = "" + t),
    t != null
      ? Re(t) || Le(t) || jt(t)
        ? { i: Qe, r: t, k: e, f: !!r }
        : t
      : null
  );
function tt(
  t,
  e = null,
  r = null,
  o = 0,
  s = null,
  c = t === ne ? 0 : 1,
  f = !1,
  h = !1,
) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && $0(e),
    ref: e && Ja(e),
    scopeId: Bc,
    slotScopeIds: null,
    children: r,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: c,
    patchFlag: o,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: Qe,
  };
  return (
    h
      ? (Hh(d, r), c & 128 && t.normalize(d))
      : r && (d.shapeFlag |= Re(r) ? 8 : 16),
    cs > 0 &&
      !f &&
      Wn &&
      (d.patchFlag > 0 || c & 6) &&
      d.patchFlag !== 32 &&
      Wn.push(d),
    d
  );
}
const It = uS;
function uS(t, e = null, r = null, o = 0, s = null, c = !1) {
  if (((!t || t === w_) && (t = Mn), Cl(t))) {
    const h = Pi(t, e, !0);
    return (
      r && Hh(h, r),
      cs > 0 &&
        !c &&
        Wn &&
        (h.shapeFlag & 6 ? (Wn[Wn.indexOf(t)] = h) : Wn.push(h)),
      (h.patchFlag |= -2),
      h
    );
  }
  if ((yS(t) && (t = t.__vccOpts), e)) {
    e = O0(e);
    let { class: h, style: d } = e;
    h && !Re(h) && (e.class = ge(h)),
      ye(d) && (n0(d) && !Ft(d) && (d = Ie({}, d)), (e.style = An(d)));
  }
  const f = Re(t) ? 1 : x_(t) ? 128 : cS(t) ? 64 : ye(t) ? 4 : jt(t) ? 2 : 0;
  return tt(t, e, r, o, s, f, c, !0);
}
function O0(t) {
  return t ? (n0(t) || Gc in t ? Ie({}, t) : t) : null;
}
function Pi(t, e, r = !1) {
  const { props: o, ref: s, patchFlag: c, children: f } = t,
    h = e ? Li(o || {}, e) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: h,
    key: h && $0(h),
    ref:
      e && e.ref
        ? r && s
          ? Ft(s)
            ? s.concat(Ja(e))
            : [s, Ja(e)]
          : Ja(e)
        : s,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: f,
    target: t.target,
    targetAnchor: t.targetAnchor,
    staticCount: t.staticCount,
    shapeFlag: t.shapeFlag,
    patchFlag: e && t.type !== ne ? (c === -1 ? 16 : c | 16) : c,
    dynamicProps: t.dynamicProps,
    dynamicChildren: t.dynamicChildren,
    appContext: t.appContext,
    dirs: t.dirs,
    transition: t.transition,
    component: t.component,
    suspense: t.suspense,
    ssContent: t.ssContent && Pi(t.ssContent),
    ssFallback: t.ssFallback && Pi(t.ssFallback),
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce,
  };
}
function me(t = " ", e = 0) {
  return It(jc, null, t, e);
}
function Gt(t = "", e = !1) {
  return e ? (st(), te(Mn, null, t)) : It(Mn, null, t);
}
function ir(t) {
  return t == null || typeof t == "boolean"
    ? It(Mn)
    : Ft(t)
      ? It(ne, null, t.slice())
      : typeof t == "object"
        ? bi(t)
        : It(jc, null, String(t));
}
function bi(t) {
  return (t.el === null && t.patchFlag !== -1) || t.memo ? t : Pi(t);
}
function Hh(t, e) {
  let r = 0;
  const { shapeFlag: o } = t;
  if (e == null) e = null;
  else if (Ft(e)) r = 16;
  else if (typeof e == "object")
    if (o & 65) {
      const s = e.default;
      s && (s._c && (s._d = !1), Hh(t, s()), s._c && (s._d = !0));
      return;
    } else {
      r = 32;
      const s = e._;
      !s && !(Gc in e)
        ? (e._ctx = Qe)
        : s === 3 &&
          Qe &&
          (Qe.slots._ === 1 ? (e._ = 1) : ((e._ = 2), (t.patchFlag |= 1024)));
    }
  else
    jt(e)
      ? ((e = { default: e, _ctx: Qe }), (r = 32))
      : ((e = String(e)), o & 64 ? ((r = 16), (e = [me(e)])) : (r = 8));
  (t.children = e), (t.shapeFlag |= r);
}
function Li(...t) {
  const e = {};
  for (let r = 0; r < t.length; r++) {
    const o = t[r];
    for (const s in o)
      if (s === "class")
        e.class !== o.class && (e.class = ge([e.class, o.class]));
      else if (s === "style") e.style = An([e.style, o.style]);
      else if (Oc(s)) {
        const c = e[s],
          f = o[s];
        f &&
          c !== f &&
          !(Ft(c) && c.includes(f)) &&
          (e[s] = c ? [].concat(c, f) : f);
      } else s !== "" && (e[s] = o[s]);
  }
  return e;
}
function yr(t, e, r, o = null) {
  jn(t, e, 7, [r, o]);
}
const fS = k0();
let hS = 0;
function dS(t, e, r) {
  const o = t.type,
    s = (e ? e.appContext : t.appContext) || fS,
    c = {
      uid: hS++,
      vnode: t,
      type: o,
      parent: e,
      appContext: s,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new Mx(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: e ? e.provides : Object.create(s.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: T0(o, s),
      emitsOptions: u0(o, s),
      emit: null,
      emitted: null,
      propsDefaults: we,
      inheritAttrs: o.inheritAttrs,
      ctx: we,
      data: we,
      props: we,
      attrs: we,
      slots: we,
      refs: we,
      setupState: we,
      setupContext: null,
      attrsProxy: null,
      slotsProxy: null,
      suspense: r,
      suspenseId: r ? r.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (c.ctx = { _: c }),
    (c.root = e ? e.root : c),
    (c.emit = d_.bind(null, c)),
    t.ce && t.ce(c),
    c
  );
}
let Ve = null;
const Wl = () => Ve || Qe;
let qh,
  Go,
  Hg = "__VUE_INSTANCE_SETTERS__";
(Go = Lf()[Hg]) || (Go = Lf()[Hg] = []),
  Go.push((t) => (Ve = t)),
  (qh = (t) => {
    Go.length > 1 ? Go.forEach((e) => e(t)) : Go[0](t);
  });
const us = (t) => {
    qh(t), t.scope.on();
  },
  so = () => {
    Ve && Ve.scope.off(), qh(null);
  };
function D0(t) {
  return t.vnode.shapeFlag & 4;
}
let Tl = !1;
function pS(t, e = !1) {
  Tl = e;
  const { props: r, children: o } = t.vnode,
    s = D0(t);
  tS(t, r, s, e), rS(t, o);
  const c = s ? gS(t, e) : void 0;
  return (Tl = !1), c;
}
function gS(t, e) {
  const r = t.type;
  (t.accessCache = Object.create(null)), (t.proxy = Th(new Proxy(t.ctx, U_)));
  const { setup: o } = r;
  if (o) {
    const s = (t.setupContext = o.length > 1 ? z0(t) : null);
    us(t), ms();
    const c = Ei(o, t, 0, [t.props, s]);
    if ((ys(), so(), Fm(c))) {
      if ((c.then(so, so), e))
        return c
          .then((f) => {
            Bf(t, f, e);
          })
          .catch((f) => {
            Bl(f, t, 0);
          });
      t.asyncDep = c;
    } else Bf(t, c, e);
  } else R0(t, e);
}
function Bf(t, e, r) {
  jt(e)
    ? t.type.__ssrInlineRender
      ? (t.ssrRender = e)
      : (t.render = e)
    : ye(e) && (t.setupState = i0(e)),
    R0(t, r);
}
let qg;
function R0(t, e, r) {
  const o = t.type;
  if (!t.render) {
    if (!e && qg && !o.render) {
      const s = o.template || Fh(t).template;
      if (s) {
        const { isCustomElement: c, compilerOptions: f } = t.appContext.config,
          { delimiters: h, compilerOptions: d } = o,
          g = Ie(Ie({ isCustomElement: c, delimiters: h }, f), d);
        o.render = qg(s, g);
      }
    }
    t.render = o.render || _r;
  }
  {
    us(t), ms();
    try {
      V_(t);
    } finally {
      ys(), so();
    }
  }
}
function vS(t) {
  return (
    t.attrsProxy ||
    (t.attrsProxy = new Proxy(t.attrs, {
      get(e, r) {
        return Nn(t, "get", "$attrs"), e[r];
      },
    }))
  );
}
function z0(t) {
  const e = (r) => {
    t.exposed = r || {};
  };
  return {
    get attrs() {
      return vS(t);
    },
    slots: t.slots,
    emit: t.emit,
    expose: e,
  };
}
function Vc(t) {
  if (t.exposed)
    return (
      t.exposeProxy ||
      (t.exposeProxy = new Proxy(i0(Th(t.exposed)), {
        get(e, r) {
          if (r in e) return e[r];
          if (r in fl) return fl[r](t);
        },
        has(e, r) {
          return r in e || r in fl;
        },
      }))
    );
}
function mS(t, e = !0) {
  return jt(t) ? t.displayName || t.name : t.name || (e && t.__name);
}
function yS(t) {
  return jt(t) && "__vccOpts" in t;
}
const xt = (t, e) => a_(t, e, Tl);
function Ul(t, e, r) {
  const o = arguments.length;
  return o === 2
    ? ye(e) && !Ft(e)
      ? Cl(e)
        ? It(t, null, [e])
        : It(t, e)
      : It(t, null, e)
    : (o > 3
        ? (r = Array.prototype.slice.call(arguments, 2))
        : o === 3 && Cl(r) && (r = [r]),
      It(t, e, r));
}
const bS = Symbol.for("v-scx"),
  wS = () => Gr(bS),
  xS = "3.3.8",
  _S = "http://www.w3.org/2000/svg",
  eo = typeof document < "u" ? document : null,
  Bg = eo && eo.createElement("template"),
  SS = {
    insert: (t, e, r) => {
      e.insertBefore(t, r || null);
    },
    remove: (t) => {
      const e = t.parentNode;
      e && e.removeChild(t);
    },
    createElement: (t, e, r, o) => {
      const s = e
        ? eo.createElementNS(_S, t)
        : eo.createElement(t, r ? { is: r } : void 0);
      return (
        t === "select" &&
          o &&
          o.multiple != null &&
          s.setAttribute("multiple", o.multiple),
        s
      );
    },
    createText: (t) => eo.createTextNode(t),
    createComment: (t) => eo.createComment(t),
    setText: (t, e) => {
      t.nodeValue = e;
    },
    setElementText: (t, e) => {
      t.textContent = e;
    },
    parentNode: (t) => t.parentNode,
    nextSibling: (t) => t.nextSibling,
    querySelector: (t) => eo.querySelector(t),
    setScopeId(t, e) {
      t.setAttribute(e, "");
    },
    insertStaticContent(t, e, r, o, s, c) {
      const f = r ? r.previousSibling : e.lastChild;
      if (s && (s === c || s.nextSibling))
        for (
          ;
          e.insertBefore(s.cloneNode(!0), r),
            !(s === c || !(s = s.nextSibling));
        );
      else {
        Bg.innerHTML = o ? `<svg>${t}</svg>` : t;
        const h = Bg.content;
        if (o) {
          const d = h.firstChild;
          for (; d.firstChild; ) h.appendChild(d.firstChild);
          h.removeChild(d);
        }
        e.insertBefore(h, r);
      }
      return [
        f ? f.nextSibling : e.firstChild,
        r ? r.previousSibling : e.lastChild,
      ];
    },
  },
  hi = "transition",
  tl = "animation",
  El = Symbol("_vtc"),
  Bh = (t, { slots: e }) => Ul($_, kS(t), e);
Bh.displayName = "Transition";
const F0 = {
  name: String,
  type: String,
  css: { type: Boolean, default: !0 },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String,
};
Bh.props = Ie({}, v0, F0);
const Yi = (t, e = []) => {
    Ft(t) ? t.forEach((r) => r(...e)) : t && t(...e);
  },
  Wg = (t) => (t ? (Ft(t) ? t.some((e) => e.length > 1) : t.length > 1) : !1);
function kS(t) {
  const e = {};
  for (const ht in t) ht in F0 || (e[ht] = t[ht]);
  if (t.css === !1) return e;
  const {
      name: r = "v",
      type: o,
      duration: s,
      enterFromClass: c = `${r}-enter-from`,
      enterActiveClass: f = `${r}-enter-active`,
      enterToClass: h = `${r}-enter-to`,
      appearFromClass: d = c,
      appearActiveClass: g = f,
      appearToClass: v = h,
      leaveFromClass: y = `${r}-leave-from`,
      leaveActiveClass: w = `${r}-leave-active`,
      leaveToClass: _ = `${r}-leave-to`,
    } = t,
    N = CS(s),
    L = N && N[0],
    A = N && N[1],
    {
      onBeforeEnter: T,
      onEnter: M,
      onEnterCancelled: $,
      onLeave: E,
      onLeaveCancelled: H,
      onBeforeAppear: K = T,
      onAppear: ct = M,
      onAppearCancelled: Y = $,
    } = e,
    nt = (ht, G, z) => {
      Zi(ht, G ? v : h), Zi(ht, G ? g : f), z && z();
    },
    rt = (ht, G) => {
      (ht._isLeaving = !1), Zi(ht, y), Zi(ht, _), Zi(ht, w), G && G();
    },
    dt = (ht) => (G, z) => {
      const k = ht ? ct : M,
        I = () => nt(G, ht, z);
      Yi(k, [G, I]),
        Ug(() => {
          Zi(G, ht ? d : c), di(G, ht ? v : h), Wg(k) || jg(G, o, L, I);
        });
    };
  return Ie(e, {
    onBeforeEnter(ht) {
      Yi(T, [ht]), di(ht, c), di(ht, f);
    },
    onBeforeAppear(ht) {
      Yi(K, [ht]), di(ht, d), di(ht, g);
    },
    onEnter: dt(!1),
    onAppear: dt(!0),
    onLeave(ht, G) {
      ht._isLeaving = !0;
      const z = () => rt(ht, G);
      di(ht, y),
        LS(),
        di(ht, w),
        Ug(() => {
          ht._isLeaving && (Zi(ht, y), di(ht, _), Wg(E) || jg(ht, o, A, z));
        }),
        Yi(E, [ht, z]);
    },
    onEnterCancelled(ht) {
      nt(ht, !1), Yi($, [ht]);
    },
    onAppearCancelled(ht) {
      nt(ht, !0), Yi(Y, [ht]);
    },
    onLeaveCancelled(ht) {
      rt(ht), Yi(H, [ht]);
    },
  });
}
function CS(t) {
  if (t == null) return null;
  if (ye(t)) return [af(t.enter), af(t.leave)];
  {
    const e = af(t);
    return [e, e];
  }
}
function af(t) {
  return qm(t);
}
function di(t, e) {
  e.split(/\s+/).forEach((r) => r && t.classList.add(r)),
    (t[El] || (t[El] = new Set())).add(e);
}
function Zi(t, e) {
  e.split(/\s+/).forEach((o) => o && t.classList.remove(o));
  const r = t[El];
  r && (r.delete(e), r.size || (t[El] = void 0));
}
function Ug(t) {
  requestAnimationFrame(() => {
    requestAnimationFrame(t);
  });
}
let TS = 0;
function jg(t, e, r, o) {
  const s = (t._endId = ++TS),
    c = () => {
      s === t._endId && o();
    };
  if (r) return setTimeout(c, r);
  const { type: f, timeout: h, propCount: d } = ES(t, e);
  if (!f) return o();
  const g = f + "end";
  let v = 0;
  const y = () => {
      t.removeEventListener(g, w), c();
    },
    w = (_) => {
      _.target === t && ++v >= d && y();
    };
  setTimeout(() => {
    v < d && y();
  }, h + 1),
    t.addEventListener(g, w);
}
function ES(t, e) {
  const r = window.getComputedStyle(t),
    o = (N) => (r[N] || "").split(", "),
    s = o(`${hi}Delay`),
    c = o(`${hi}Duration`),
    f = Gg(s, c),
    h = o(`${tl}Delay`),
    d = o(`${tl}Duration`),
    g = Gg(h, d);
  let v = null,
    y = 0,
    w = 0;
  e === hi
    ? f > 0 && ((v = hi), (y = f), (w = c.length))
    : e === tl
      ? g > 0 && ((v = tl), (y = g), (w = d.length))
      : ((y = Math.max(f, g)),
        (v = y > 0 ? (f > g ? hi : tl) : null),
        (w = v ? (v === hi ? c.length : d.length) : 0));
  const _ =
    v === hi && /\b(transform|all)(,|$)/.test(o(`${hi}Property`).toString());
  return { type: v, timeout: y, propCount: w, hasTransform: _ };
}
function Gg(t, e) {
  for (; t.length < e.length; ) t = t.concat(t);
  return Math.max(...e.map((r, o) => Vg(r) + Vg(t[o])));
}
function Vg(t) {
  return t === "auto" ? 0 : Number(t.slice(0, -1).replace(",", ".")) * 1e3;
}
function LS() {
  return document.body.offsetHeight;
}
function AS(t, e, r) {
  const o = t[El];
  o && (e = (e ? [e, ...o] : [...o]).join(" ")),
    e == null
      ? t.removeAttribute("class")
      : r
        ? t.setAttribute("class", e)
        : (t.className = e);
}
const Wh = Symbol("_vod"),
  Wf = {
    beforeMount(t, { value: e }, { transition: r }) {
      (t[Wh] = t.style.display === "none" ? "" : t.style.display),
        r && e ? r.beforeEnter(t) : el(t, e);
    },
    mounted(t, { value: e }, { transition: r }) {
      r && e && r.enter(t);
    },
    updated(t, { value: e, oldValue: r }, { transition: o }) {
      !e != !r &&
        (o
          ? e
            ? (o.beforeEnter(t), el(t, !0), o.enter(t))
            : o.leave(t, () => {
                el(t, !1);
              })
          : el(t, e));
    },
    beforeUnmount(t, { value: e }) {
      el(t, e);
    },
  };
function el(t, e) {
  t.style.display = e ? t[Wh] : "none";
}
function MS(t, e, r) {
  const o = t.style,
    s = Re(r);
  if (r && !s) {
    if (e && !Re(e)) for (const c in e) r[c] == null && Uf(o, c, "");
    for (const c in r) Uf(o, c, r[c]);
  } else {
    const c = o.display;
    s ? e !== r && (o.cssText = r) : e && t.removeAttribute("style"),
      Wh in t && (o.display = c);
  }
}
const Kg = /\s*!important$/;
function Uf(t, e, r) {
  if (Ft(r)) r.forEach((o) => Uf(t, e, o));
  else if ((r == null && (r = ""), e.startsWith("--"))) t.setProperty(e, r);
  else {
    const o = NS(t, e);
    Kg.test(r)
      ? t.setProperty(go(o), r.replace(Kg, ""), "important")
      : (t[o] = r);
  }
}
const Xg = ["Webkit", "Moz", "ms"],
  cf = {};
function NS(t, e) {
  const r = cf[e];
  if (r) return r;
  let o = Er(e);
  if (o !== "filter" && o in t) return (cf[e] = o);
  o = Fc(o);
  for (let s = 0; s < Xg.length; s++) {
    const c = Xg[s] + o;
    if (c in t) return (cf[e] = c);
  }
  return e;
}
const Yg = "http://www.w3.org/1999/xlink";
function PS(t, e, r, o, s) {
  if (o && e.startsWith("xlink:"))
    r == null
      ? t.removeAttributeNS(Yg, e.slice(6, e.length))
      : t.setAttributeNS(Yg, e, r);
  else {
    const c = Ax(e);
    r == null || (c && !Bm(r))
      ? t.removeAttribute(e)
      : t.setAttribute(e, c ? "" : r);
  }
}
function $S(t, e, r, o, s, c, f) {
  if (e === "innerHTML" || e === "textContent") {
    o && f(o, s, c), (t[e] = r ?? "");
    return;
  }
  const h = t.tagName;
  if (e === "value" && h !== "PROGRESS" && !h.includes("-")) {
    t._value = r;
    const g = h === "OPTION" ? t.getAttribute("value") : t.value,
      v = r ?? "";
    g !== v && (t.value = v), r == null && t.removeAttribute(e);
    return;
  }
  let d = !1;
  if (r === "" || r == null) {
    const g = typeof t[e];
    g === "boolean"
      ? (r = Bm(r))
      : r == null && g === "string"
        ? ((r = ""), (d = !0))
        : g === "number" && ((r = 0), (d = !0));
  }
  try {
    t[e] = r;
  } catch {}
  d && t.removeAttribute(e);
}
function Vo(t, e, r, o) {
  t.addEventListener(e, r, o);
}
function OS(t, e, r, o) {
  t.removeEventListener(e, r, o);
}
const Zg = Symbol("_vei");
function DS(t, e, r, o, s = null) {
  const c = t[Zg] || (t[Zg] = {}),
    f = c[e];
  if (o && f) f.value = o;
  else {
    const [h, d] = RS(e);
    if (o) {
      const g = (c[e] = IS(o, s));
      Vo(t, h, g, d);
    } else f && (OS(t, h, f, d), (c[e] = void 0));
  }
}
const Qg = /(?:Once|Passive|Capture)$/;
function RS(t) {
  let e;
  if (Qg.test(t)) {
    e = {};
    let o;
    for (; (o = t.match(Qg)); )
      (t = t.slice(0, t.length - o[0].length)), (e[o[0].toLowerCase()] = !0);
  }
  return [t[2] === ":" ? t.slice(3) : go(t.slice(2)), e];
}
let uf = 0;
const zS = Promise.resolve(),
  FS = () => uf || (zS.then(() => (uf = 0)), (uf = Date.now()));
function IS(t, e) {
  const r = (o) => {
    if (!o._vts) o._vts = Date.now();
    else if (o._vts <= r.attached) return;
    jn(HS(o, r.value), e, 5, [o]);
  };
  return (r.value = t), (r.attached = FS()), r;
}
function HS(t, e) {
  if (Ft(e)) {
    const r = t.stopImmediatePropagation;
    return (
      (t.stopImmediatePropagation = () => {
        r.call(t), (t._stopped = !0);
      }),
      e.map((o) => (s) => !s._stopped && o && o(s))
    );
  } else return e;
}
const Jg = /^on[a-z]/,
  qS = (t, e, r, o, s = !1, c, f, h, d) => {
    e === "class"
      ? AS(t, o, s)
      : e === "style"
        ? MS(t, r, o)
        : Oc(e)
          ? yh(e) || DS(t, e, r, o, f)
          : (
                e[0] === "."
                  ? ((e = e.slice(1)), !0)
                  : e[0] === "^"
                    ? ((e = e.slice(1)), !1)
                    : BS(t, e, o, s)
              )
            ? $S(t, e, o, c, f, h, d)
            : (e === "true-value"
                ? (t._trueValue = o)
                : e === "false-value" && (t._falseValue = o),
              PS(t, e, o, s));
  };
function BS(t, e, r, o) {
  return o
    ? !!(
        e === "innerHTML" ||
        e === "textContent" ||
        (e in t && Jg.test(e) && jt(r))
      )
    : e === "spellcheck" ||
        e === "draggable" ||
        e === "translate" ||
        e === "form" ||
        (e === "list" && t.tagName === "INPUT") ||
        (e === "type" && t.tagName === "TEXTAREA") ||
        (Jg.test(e) && Re(r))
      ? !1
      : e in t;
}
const tv = (t) => {
  const e = t.props["onUpdate:modelValue"] || !1;
  return Ft(e) ? (r) => Za(e, r) : e;
};
function WS(t) {
  t.target.composing = !0;
}
function ev(t) {
  const e = t.target;
  e.composing && ((e.composing = !1), e.dispatchEvent(new Event("input")));
}
const ff = Symbol("_assign"),
  US = {
    created(t, { modifiers: { lazy: e, trim: r, number: o } }, s) {
      t[ff] = tv(s);
      const c = o || (s.props && s.props.type === "number");
      Vo(t, e ? "change" : "input", (f) => {
        if (f.target.composing) return;
        let h = t.value;
        r && (h = h.trim()), c && (h = Ef(h)), t[ff](h);
      }),
        r &&
          Vo(t, "change", () => {
            t.value = t.value.trim();
          }),
        e ||
          (Vo(t, "compositionstart", WS),
          Vo(t, "compositionend", ev),
          Vo(t, "change", ev));
    },
    mounted(t, { value: e }) {
      t.value = e ?? "";
    },
    beforeUpdate(
      t,
      { value: e, modifiers: { lazy: r, trim: o, number: s } },
      c,
    ) {
      if (
        ((t[ff] = tv(c)),
        t.composing ||
          (document.activeElement === t &&
            t.type !== "range" &&
            (r ||
              (o && t.value.trim() === e) ||
              ((s || t.type === "number") && Ef(t.value) === e))))
      )
        return;
      const f = e ?? "";
      t.value !== f && (t.value = f);
    },
  },
  jS = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace",
  },
  jf = (t, e) => (r) => {
    if (!("key" in r)) return;
    const o = go(r.key);
    if (e.some((s) => s === o || jS[s] === o)) return t(r);
  },
  GS = Ie({ patchProp: qS }, SS);
let nv;
function VS() {
  return nv || (nv = oS(GS));
}
const I0 = (...t) => {
  const e = VS().createApp(...t),
    { mount: r } = e;
  return (
    (e.mount = (o) => {
      const s = KS(o);
      if (!s) return;
      const c = e._component;
      !jt(c) && !c.render && !c.template && (c.template = s.innerHTML),
        (s.innerHTML = "");
      const f = r(s, !1, s instanceof SVGElement);
      return (
        s instanceof Element &&
          (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")),
        f
      );
    }),
    e
  );
};
function KS(t) {
  return Re(t) ? document.querySelector(t) : t;
}
const mo = (t, e) => {
    const r = t.__vccOpts || t;
    for (const [o, s] of e) r[o] = s;
    return r;
  },
  XS = {};
function YS(t, e) {
  const r = co("RouterView");
  return st(), te(r);
}
const ZS = mo(XS, [["render", YS]]);
/*!
 * vue-router v4.2.5
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */ const Ko = typeof window < "u";
function QS(t) {
  return t.__esModule || t[Symbol.toStringTag] === "Module";
}
const pe = Object.assign;
function hf(t, e) {
  const r = {};
  for (const o in e) {
    const s = e[o];
    r[o] = ur(s) ? s.map(t) : t(s);
  }
  return r;
}
const dl = () => {},
  ur = Array.isArray,
  JS = /\/$/,
  tk = (t) => t.replace(JS, "");
function df(t, e, r = "/") {
  let o,
    s = {},
    c = "",
    f = "";
  const h = e.indexOf("#");
  let d = e.indexOf("?");
  return (
    h < d && h >= 0 && (d = -1),
    d > -1 &&
      ((o = e.slice(0, d)),
      (c = e.slice(d + 1, h > -1 ? h : e.length)),
      (s = t(c))),
    h > -1 && ((o = o || e.slice(0, h)), (f = e.slice(h, e.length))),
    (o = ik(o ?? e, r)),
    { fullPath: o + (c && "?") + c + f, path: o, query: s, hash: f }
  );
}
function ek(t, e) {
  const r = e.query ? t(e.query) : "";
  return e.path + (r && "?") + r + (e.hash || "");
}
function rv(t, e) {
  return !e || !t.toLowerCase().startsWith(e.toLowerCase())
    ? t
    : t.slice(e.length) || "/";
}
function nk(t, e, r) {
  const o = e.matched.length - 1,
    s = r.matched.length - 1;
  return (
    o > -1 &&
    o === s &&
    fs(e.matched[o], r.matched[s]) &&
    H0(e.params, r.params) &&
    t(e.query) === t(r.query) &&
    e.hash === r.hash
  );
}
function fs(t, e) {
  return (t.aliasOf || t) === (e.aliasOf || e);
}
function H0(t, e) {
  if (Object.keys(t).length !== Object.keys(e).length) return !1;
  for (const r in t) if (!rk(t[r], e[r])) return !1;
  return !0;
}
function rk(t, e) {
  return ur(t) ? iv(t, e) : ur(e) ? iv(e, t) : t === e;
}
function iv(t, e) {
  return ur(e)
    ? t.length === e.length && t.every((r, o) => r === e[o])
    : t.length === 1 && t[0] === e;
}
function ik(t, e) {
  if (t.startsWith("/")) return t;
  if (!t) return e;
  const r = e.split("/"),
    o = t.split("/"),
    s = o[o.length - 1];
  (s === ".." || s === ".") && o.push("");
  let c = r.length - 1,
    f,
    h;
  for (f = 0; f < o.length; f++)
    if (((h = o[f]), h !== "."))
      if (h === "..") c > 1 && c--;
      else break;
  return (
    r.slice(0, c).join("/") +
    "/" +
    o.slice(f - (f === o.length ? 1 : 0)).join("/")
  );
}
var Ll;
(function (t) {
  (t.pop = "pop"), (t.push = "push");
})(Ll || (Ll = {}));
var pl;
(function (t) {
  (t.back = "back"), (t.forward = "forward"), (t.unknown = "");
})(pl || (pl = {}));
function ok(t) {
  if (!t)
    if (Ko) {
      const e = document.querySelector("base");
      (t = (e && e.getAttribute("href")) || "/"),
        (t = t.replace(/^\w+:\/\/[^\/]+/, ""));
    } else t = "/";
  return t[0] !== "/" && t[0] !== "#" && (t = "/" + t), tk(t);
}
const sk = /^[^#]+#/;
function lk(t, e) {
  return t.replace(sk, "#") + e;
}
function ak(t, e) {
  const r = document.documentElement.getBoundingClientRect(),
    o = t.getBoundingClientRect();
  return {
    behavior: e.behavior,
    left: o.left - r.left - (e.left || 0),
    top: o.top - r.top - (e.top || 0),
  };
}
const Kc = () => ({ left: window.pageXOffset, top: window.pageYOffset });
function ck(t) {
  let e;
  if ("el" in t) {
    const r = t.el,
      o = typeof r == "string" && r.startsWith("#"),
      s =
        typeof r == "string"
          ? o
            ? document.getElementById(r.slice(1))
            : document.querySelector(r)
          : r;
    if (!s) return;
    e = ak(s, t);
  } else e = t;
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(e)
    : window.scrollTo(
        e.left != null ? e.left : window.pageXOffset,
        e.top != null ? e.top : window.pageYOffset,
      );
}
function ov(t, e) {
  return (history.state ? history.state.position - e : -1) + t;
}
const Gf = new Map();
function uk(t, e) {
  Gf.set(t, e);
}
function fk(t) {
  const e = Gf.get(t);
  return Gf.delete(t), e;
}
let hk = () => location.protocol + "//" + location.host;
function q0(t, e) {
  const { pathname: r, search: o, hash: s } = e,
    c = t.indexOf("#");
  if (c > -1) {
    let h = s.includes(t.slice(c)) ? t.slice(c).length : 1,
      d = s.slice(h);
    return d[0] !== "/" && (d = "/" + d), rv(d, "");
  }
  return rv(r, t) + o + s;
}
function dk(t, e, r, o) {
  let s = [],
    c = [],
    f = null;
  const h = ({ state: w }) => {
    const _ = q0(t, location),
      N = r.value,
      L = e.value;
    let A = 0;
    if (w) {
      if (((r.value = _), (e.value = w), f && f === N)) {
        f = null;
        return;
      }
      A = L ? w.position - L.position : 0;
    } else o(_);
    s.forEach((T) => {
      T(r.value, N, {
        delta: A,
        type: Ll.pop,
        direction: A ? (A > 0 ? pl.forward : pl.back) : pl.unknown,
      });
    });
  };
  function d() {
    f = r.value;
  }
  function g(w) {
    s.push(w);
    const _ = () => {
      const N = s.indexOf(w);
      N > -1 && s.splice(N, 1);
    };
    return c.push(_), _;
  }
  function v() {
    const { history: w } = window;
    w.state && w.replaceState(pe({}, w.state, { scroll: Kc() }), "");
  }
  function y() {
    for (const w of c) w();
    (c = []),
      window.removeEventListener("popstate", h),
      window.removeEventListener("beforeunload", v);
  }
  return (
    window.addEventListener("popstate", h),
    window.addEventListener("beforeunload", v, { passive: !0 }),
    { pauseListeners: d, listen: g, destroy: y }
  );
}
function sv(t, e, r, o = !1, s = !1) {
  return {
    back: t,
    current: e,
    forward: r,
    replaced: o,
    position: window.history.length,
    scroll: s ? Kc() : null,
  };
}
function pk(t) {
  const { history: e, location: r } = window,
    o = { value: q0(t, r) },
    s = { value: e.state };
  s.value ||
    c(
      o.value,
      {
        back: null,
        current: o.value,
        forward: null,
        position: e.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0,
    );
  function c(d, g, v) {
    const y = t.indexOf("#"),
      w =
        y > -1
          ? (r.host && document.querySelector("base") ? t : t.slice(y)) + d
          : hk() + t + d;
    try {
      e[v ? "replaceState" : "pushState"](g, "", w), (s.value = g);
    } catch (_) {
      console.error(_), r[v ? "replace" : "assign"](w);
    }
  }
  function f(d, g) {
    const v = pe({}, e.state, sv(s.value.back, d, s.value.forward, !0), g, {
      position: s.value.position,
    });
    c(d, v, !0), (o.value = d);
  }
  function h(d, g) {
    const v = pe({}, s.value, e.state, { forward: d, scroll: Kc() });
    c(v.current, v, !0);
    const y = pe({}, sv(o.value, d, null), { position: v.position + 1 }, g);
    c(d, y, !1), (o.value = d);
  }
  return { location: o, state: s, push: h, replace: f };
}
function gk(t) {
  t = ok(t);
  const e = pk(t),
    r = dk(t, e.state, e.location, e.replace);
  function o(c, f = !0) {
    f || r.pauseListeners(), history.go(c);
  }
  const s = pe(
    { location: "", base: t, go: o, createHref: lk.bind(null, t) },
    e,
    r,
  );
  return (
    Object.defineProperty(s, "location", {
      enumerable: !0,
      get: () => e.location.value,
    }),
    Object.defineProperty(s, "state", {
      enumerable: !0,
      get: () => e.state.value,
    }),
    s
  );
}
function vk(t) {
  return (
    (t = location.host ? t || location.pathname + location.search : ""),
    t.includes("#") || (t += "#"),
    gk(t)
  );
}
function mk(t) {
  return typeof t == "string" || (t && typeof t == "object");
}
function B0(t) {
  return typeof t == "string" || typeof t == "symbol";
}
const pi = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0,
  },
  W0 = Symbol("");
var lv;
(function (t) {
  (t[(t.aborted = 4)] = "aborted"),
    (t[(t.cancelled = 8)] = "cancelled"),
    (t[(t.duplicated = 16)] = "duplicated");
})(lv || (lv = {}));
function hs(t, e) {
  return pe(new Error(), { type: t, [W0]: !0 }, e);
}
function Hr(t, e) {
  return t instanceof Error && W0 in t && (e == null || !!(t.type & e));
}
const av = "[^/]+?",
  yk = { sensitive: !1, strict: !1, start: !0, end: !0 },
  bk = /[.+*?^${}()[\]/\\]/g;
function wk(t, e) {
  const r = pe({}, yk, e),
    o = [];
  let s = r.start ? "^" : "";
  const c = [];
  for (const g of t) {
    const v = g.length ? [] : [90];
    r.strict && !g.length && (s += "/");
    for (let y = 0; y < g.length; y++) {
      const w = g[y];
      let _ = 40 + (r.sensitive ? 0.25 : 0);
      if (w.type === 0)
        y || (s += "/"), (s += w.value.replace(bk, "\\$&")), (_ += 40);
      else if (w.type === 1) {
        const { value: N, repeatable: L, optional: A, regexp: T } = w;
        c.push({ name: N, repeatable: L, optional: A });
        const M = T || av;
        if (M !== av) {
          _ += 10;
          try {
            new RegExp(`(${M})`);
          } catch (E) {
            throw new Error(
              `Invalid custom RegExp for param "${N}" (${M}): ` + E.message,
            );
          }
        }
        let $ = L ? `((?:${M})(?:/(?:${M}))*)` : `(${M})`;
        y || ($ = A && g.length < 2 ? `(?:/${$})` : "/" + $),
          A && ($ += "?"),
          (s += $),
          (_ += 20),
          A && (_ += -8),
          L && (_ += -20),
          M === ".*" && (_ += -50);
      }
      v.push(_);
    }
    o.push(v);
  }
  if (r.strict && r.end) {
    const g = o.length - 1;
    o[g][o[g].length - 1] += 0.7000000000000001;
  }
  r.strict || (s += "/?"), r.end ? (s += "$") : r.strict && (s += "(?:/|$)");
  const f = new RegExp(s, r.sensitive ? "" : "i");
  function h(g) {
    const v = g.match(f),
      y = {};
    if (!v) return null;
    for (let w = 1; w < v.length; w++) {
      const _ = v[w] || "",
        N = c[w - 1];
      y[N.name] = _ && N.repeatable ? _.split("/") : _;
    }
    return y;
  }
  function d(g) {
    let v = "",
      y = !1;
    for (const w of t) {
      (!y || !v.endsWith("/")) && (v += "/"), (y = !1);
      for (const _ of w)
        if (_.type === 0) v += _.value;
        else if (_.type === 1) {
          const { value: N, repeatable: L, optional: A } = _,
            T = N in g ? g[N] : "";
          if (ur(T) && !L)
            throw new Error(
              `Provided param "${N}" is an array but it is not repeatable (* or + modifiers)`,
            );
          const M = ur(T) ? T.join("/") : T;
          if (!M)
            if (A)
              w.length < 2 &&
                (v.endsWith("/") ? (v = v.slice(0, -1)) : (y = !0));
            else throw new Error(`Missing required param "${N}"`);
          v += M;
        }
    }
    return v || "/";
  }
  return { re: f, score: o, keys: c, parse: h, stringify: d };
}
function xk(t, e) {
  let r = 0;
  for (; r < t.length && r < e.length; ) {
    const o = e[r] - t[r];
    if (o) return o;
    r++;
  }
  return t.length < e.length
    ? t.length === 1 && t[0] === 80
      ? -1
      : 1
    : t.length > e.length
      ? e.length === 1 && e[0] === 80
        ? 1
        : -1
      : 0;
}
function _k(t, e) {
  let r = 0;
  const o = t.score,
    s = e.score;
  for (; r < o.length && r < s.length; ) {
    const c = xk(o[r], s[r]);
    if (c) return c;
    r++;
  }
  if (Math.abs(s.length - o.length) === 1) {
    if (cv(o)) return 1;
    if (cv(s)) return -1;
  }
  return s.length - o.length;
}
function cv(t) {
  const e = t[t.length - 1];
  return t.length > 0 && e[e.length - 1] < 0;
}
const Sk = { type: 0, value: "" },
  kk = /[a-zA-Z0-9_]/;
function Ck(t) {
  if (!t) return [[]];
  if (t === "/") return [[Sk]];
  if (!t.startsWith("/")) throw new Error(`Invalid path "${t}"`);
  function e(_) {
    throw new Error(`ERR (${r})/"${g}": ${_}`);
  }
  let r = 0,
    o = r;
  const s = [];
  let c;
  function f() {
    c && s.push(c), (c = []);
  }
  let h = 0,
    d,
    g = "",
    v = "";
  function y() {
    g &&
      (r === 0
        ? c.push({ type: 0, value: g })
        : r === 1 || r === 2 || r === 3
          ? (c.length > 1 &&
              (d === "*" || d === "+") &&
              e(
                `A repeatable param (${g}) must be alone in its segment. eg: '/:ids+.`,
              ),
            c.push({
              type: 1,
              value: g,
              regexp: v,
              repeatable: d === "*" || d === "+",
              optional: d === "*" || d === "?",
            }))
          : e("Invalid state to consume buffer"),
      (g = ""));
  }
  function w() {
    g += d;
  }
  for (; h < t.length; ) {
    if (((d = t[h++]), d === "\\" && r !== 2)) {
      (o = r), (r = 4);
      continue;
    }
    switch (r) {
      case 0:
        d === "/" ? (g && y(), f()) : d === ":" ? (y(), (r = 1)) : w();
        break;
      case 4:
        w(), (r = o);
        break;
      case 1:
        d === "("
          ? (r = 2)
          : kk.test(d)
            ? w()
            : (y(), (r = 0), d !== "*" && d !== "?" && d !== "+" && h--);
        break;
      case 2:
        d === ")"
          ? v[v.length - 1] == "\\"
            ? (v = v.slice(0, -1) + d)
            : (r = 3)
          : (v += d);
        break;
      case 3:
        y(), (r = 0), d !== "*" && d !== "?" && d !== "+" && h--, (v = "");
        break;
      default:
        e("Unknown state");
        break;
    }
  }
  return r === 2 && e(`Unfinished custom RegExp for param "${g}"`), y(), f(), s;
}
function Tk(t, e, r) {
  const o = wk(Ck(t.path), r),
    s = pe(o, { record: t, parent: e, children: [], alias: [] });
  return e && !s.record.aliasOf == !e.record.aliasOf && e.children.push(s), s;
}
function Ek(t, e) {
  const r = [],
    o = new Map();
  e = hv({ strict: !1, end: !0, sensitive: !1 }, e);
  function s(v) {
    return o.get(v);
  }
  function c(v, y, w) {
    const _ = !w,
      N = Lk(v);
    N.aliasOf = w && w.record;
    const L = hv(e, v),
      A = [N];
    if ("alias" in v) {
      const $ = typeof v.alias == "string" ? [v.alias] : v.alias;
      for (const E of $)
        A.push(
          pe({}, N, {
            components: w ? w.record.components : N.components,
            path: E,
            aliasOf: w ? w.record : N,
          }),
        );
    }
    let T, M;
    for (const $ of A) {
      const { path: E } = $;
      if (y && E[0] !== "/") {
        const H = y.record.path,
          K = H[H.length - 1] === "/" ? "" : "/";
        $.path = y.record.path + (E && K + E);
      }
      if (
        ((T = Tk($, y, L)),
        w
          ? w.alias.push(T)
          : ((M = M || T),
            M !== T && M.alias.push(T),
            _ && v.name && !fv(T) && f(v.name)),
        N.children)
      ) {
        const H = N.children;
        for (let K = 0; K < H.length; K++) c(H[K], T, w && w.children[K]);
      }
      (w = w || T),
        ((T.record.components && Object.keys(T.record.components).length) ||
          T.record.name ||
          T.record.redirect) &&
          d(T);
    }
    return M
      ? () => {
          f(M);
        }
      : dl;
  }
  function f(v) {
    if (B0(v)) {
      const y = o.get(v);
      y &&
        (o.delete(v),
        r.splice(r.indexOf(y), 1),
        y.children.forEach(f),
        y.alias.forEach(f));
    } else {
      const y = r.indexOf(v);
      y > -1 &&
        (r.splice(y, 1),
        v.record.name && o.delete(v.record.name),
        v.children.forEach(f),
        v.alias.forEach(f));
    }
  }
  function h() {
    return r;
  }
  function d(v) {
    let y = 0;
    for (
      ;
      y < r.length &&
      _k(v, r[y]) >= 0 &&
      (v.record.path !== r[y].record.path || !U0(v, r[y]));
    )
      y++;
    r.splice(y, 0, v), v.record.name && !fv(v) && o.set(v.record.name, v);
  }
  function g(v, y) {
    let w,
      _ = {},
      N,
      L;
    if ("name" in v && v.name) {
      if (((w = o.get(v.name)), !w)) throw hs(1, { location: v });
      (L = w.record.name),
        (_ = pe(
          uv(
            y.params,
            w.keys.filter((M) => !M.optional).map((M) => M.name),
          ),
          v.params &&
            uv(
              v.params,
              w.keys.map((M) => M.name),
            ),
        )),
        (N = w.stringify(_));
    } else if ("path" in v)
      (N = v.path),
        (w = r.find((M) => M.re.test(N))),
        w && ((_ = w.parse(N)), (L = w.record.name));
    else {
      if (((w = y.name ? o.get(y.name) : r.find((M) => M.re.test(y.path))), !w))
        throw hs(1, { location: v, currentLocation: y });
      (L = w.record.name),
        (_ = pe({}, y.params, v.params)),
        (N = w.stringify(_));
    }
    const A = [];
    let T = w;
    for (; T; ) A.unshift(T.record), (T = T.parent);
    return { name: L, path: N, params: _, matched: A, meta: Mk(A) };
  }
  return (
    t.forEach((v) => c(v)),
    {
      addRoute: c,
      resolve: g,
      removeRoute: f,
      getRoutes: h,
      getRecordMatcher: s,
    }
  );
}
function uv(t, e) {
  const r = {};
  for (const o of e) o in t && (r[o] = t[o]);
  return r;
}
function Lk(t) {
  return {
    path: t.path,
    redirect: t.redirect,
    name: t.name,
    meta: t.meta || {},
    aliasOf: void 0,
    beforeEnter: t.beforeEnter,
    props: Ak(t),
    children: t.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      "components" in t
        ? t.components || null
        : t.component && { default: t.component },
  };
}
function Ak(t) {
  const e = {},
    r = t.props || !1;
  if ("component" in t) e.default = r;
  else for (const o in t.components) e[o] = typeof r == "object" ? r[o] : r;
  return e;
}
function fv(t) {
  for (; t; ) {
    if (t.record.aliasOf) return !0;
    t = t.parent;
  }
  return !1;
}
function Mk(t) {
  return t.reduce((e, r) => pe(e, r.meta), {});
}
function hv(t, e) {
  const r = {};
  for (const o in t) r[o] = o in e ? e[o] : t[o];
  return r;
}
function U0(t, e) {
  return e.children.some((r) => r === t || U0(t, r));
}
const j0 = /#/g,
  Nk = /&/g,
  Pk = /\//g,
  $k = /=/g,
  Ok = /\?/g,
  G0 = /\+/g,
  Dk = /%5B/g,
  Rk = /%5D/g,
  V0 = /%5E/g,
  zk = /%60/g,
  K0 = /%7B/g,
  Fk = /%7C/g,
  X0 = /%7D/g,
  Ik = /%20/g;
function Uh(t) {
  return encodeURI("" + t)
    .replace(Fk, "|")
    .replace(Dk, "[")
    .replace(Rk, "]");
}
function Hk(t) {
  return Uh(t).replace(K0, "{").replace(X0, "}").replace(V0, "^");
}
function Vf(t) {
  return Uh(t)
    .replace(G0, "%2B")
    .replace(Ik, "+")
    .replace(j0, "%23")
    .replace(Nk, "%26")
    .replace(zk, "`")
    .replace(K0, "{")
    .replace(X0, "}")
    .replace(V0, "^");
}
function qk(t) {
  return Vf(t).replace($k, "%3D");
}
function Bk(t) {
  return Uh(t).replace(j0, "%23").replace(Ok, "%3F");
}
function Wk(t) {
  return t == null ? "" : Bk(t).replace(Pk, "%2F");
}
function gc(t) {
  try {
    return decodeURIComponent("" + t);
  } catch {}
  return "" + t;
}
function Uk(t) {
  const e = {};
  if (t === "" || t === "?") return e;
  const o = (t[0] === "?" ? t.slice(1) : t).split("&");
  for (let s = 0; s < o.length; ++s) {
    const c = o[s].replace(G0, " "),
      f = c.indexOf("="),
      h = gc(f < 0 ? c : c.slice(0, f)),
      d = f < 0 ? null : gc(c.slice(f + 1));
    if (h in e) {
      let g = e[h];
      ur(g) || (g = e[h] = [g]), g.push(d);
    } else e[h] = d;
  }
  return e;
}
function dv(t) {
  let e = "";
  for (let r in t) {
    const o = t[r];
    if (((r = qk(r)), o == null)) {
      o !== void 0 && (e += (e.length ? "&" : "") + r);
      continue;
    }
    (ur(o) ? o.map((c) => c && Vf(c)) : [o && Vf(o)]).forEach((c) => {
      c !== void 0 &&
        ((e += (e.length ? "&" : "") + r), c != null && (e += "=" + c));
    });
  }
  return e;
}
function jk(t) {
  const e = {};
  for (const r in t) {
    const o = t[r];
    o !== void 0 &&
      (e[r] = ur(o)
        ? o.map((s) => (s == null ? null : "" + s))
        : o == null
          ? o
          : "" + o);
  }
  return e;
}
const Gk = Symbol(""),
  pv = Symbol(""),
  jh = Symbol(""),
  Y0 = Symbol(""),
  Kf = Symbol("");
function nl() {
  let t = [];
  function e(o) {
    return (
      t.push(o),
      () => {
        const s = t.indexOf(o);
        s > -1 && t.splice(s, 1);
      }
    );
  }
  function r() {
    t = [];
  }
  return { add: e, list: () => t.slice(), reset: r };
}
function wi(t, e, r, o, s) {
  const c = o && (o.enterCallbacks[s] = o.enterCallbacks[s] || []);
  return () =>
    new Promise((f, h) => {
      const d = (y) => {
          y === !1
            ? h(hs(4, { from: r, to: e }))
            : y instanceof Error
              ? h(y)
              : mk(y)
                ? h(hs(2, { from: e, to: y }))
                : (c &&
                    o.enterCallbacks[s] === c &&
                    typeof y == "function" &&
                    c.push(y),
                  f());
        },
        g = t.call(o && o.instances[s], e, r, d);
      let v = Promise.resolve(g);
      t.length < 3 && (v = v.then(d)), v.catch((y) => h(y));
    });
}
function pf(t, e, r, o) {
  const s = [];
  for (const c of t)
    for (const f in c.components) {
      let h = c.components[f];
      if (!(e !== "beforeRouteEnter" && !c.instances[f]))
        if (Vk(h)) {
          const g = (h.__vccOpts || h)[e];
          g && s.push(wi(g, r, o, c, f));
        } else {
          let d = h();
          s.push(() =>
            d.then((g) => {
              if (!g)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${f}" at "${c.path}"`),
                );
              const v = QS(g) ? g.default : g;
              c.components[f] = v;
              const w = (v.__vccOpts || v)[e];
              return w && wi(w, r, o, c, f)();
            }),
          );
        }
    }
  return s;
}
function Vk(t) {
  return (
    typeof t == "object" ||
    "displayName" in t ||
    "props" in t ||
    "__vccOpts" in t
  );
}
function gv(t) {
  const e = Gr(jh),
    r = Gr(Y0),
    o = xt(() => e.resolve(U(t.to))),
    s = xt(() => {
      const { matched: d } = o.value,
        { length: g } = d,
        v = d[g - 1],
        y = r.matched;
      if (!v || !y.length) return -1;
      const w = y.findIndex(fs.bind(null, v));
      if (w > -1) return w;
      const _ = vv(d[g - 2]);
      return g > 1 && vv(v) === _ && y[y.length - 1].path !== _
        ? y.findIndex(fs.bind(null, d[g - 2]))
        : w;
    }),
    c = xt(() => s.value > -1 && Zk(r.params, o.value.params)),
    f = xt(
      () =>
        s.value > -1 &&
        s.value === r.matched.length - 1 &&
        H0(r.params, o.value.params),
    );
  function h(d = {}) {
    return Yk(d)
      ? e[U(t.replace) ? "replace" : "push"](U(t.to)).catch(dl)
      : Promise.resolve();
  }
  return {
    route: o,
    href: xt(() => o.value.href),
    isActive: c,
    isExactActive: f,
    navigate: h,
  };
}
const Kk = fe({
    name: "RouterLink",
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: "page" },
    },
    useLink: gv,
    setup(t, { slots: e }) {
      const r = Sr(gv(t)),
        { options: o } = Gr(jh),
        s = xt(() => ({
          [mv(t.activeClass, o.linkActiveClass, "router-link-active")]:
            r.isActive,
          [mv(
            t.exactActiveClass,
            o.linkExactActiveClass,
            "router-link-exact-active",
          )]: r.isExactActive,
        }));
      return () => {
        const c = e.default && e.default(r);
        return t.custom
          ? c
          : Ul(
              "a",
              {
                "aria-current": r.isExactActive ? t.ariaCurrentValue : null,
                href: r.href,
                onClick: r.navigate,
                class: s.value,
              },
              c,
            );
      };
    },
  }),
  Xk = Kk;
function Yk(t) {
  if (
    !(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey) &&
    !t.defaultPrevented &&
    !(t.button !== void 0 && t.button !== 0)
  ) {
    if (t.currentTarget && t.currentTarget.getAttribute) {
      const e = t.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(e)) return;
    }
    return t.preventDefault && t.preventDefault(), !0;
  }
}
function Zk(t, e) {
  for (const r in e) {
    const o = e[r],
      s = t[r];
    if (typeof o == "string") {
      if (o !== s) return !1;
    } else if (!ur(s) || s.length !== o.length || o.some((c, f) => c !== s[f]))
      return !1;
  }
  return !0;
}
function vv(t) {
  return t ? (t.aliasOf ? t.aliasOf.path : t.path) : "";
}
const mv = (t, e, r) => t ?? e ?? r,
  Qk = fe({
    name: "RouterView",
    inheritAttrs: !1,
    props: { name: { type: String, default: "default" }, route: Object },
    compatConfig: { MODE: 3 },
    setup(t, { attrs: e, slots: r }) {
      const o = Gr(Kf),
        s = xt(() => t.route || o.value),
        c = Gr(pv, 0),
        f = xt(() => {
          let g = U(c);
          const { matched: v } = s.value;
          let y;
          for (; (y = v[g]) && !y.components; ) g++;
          return g;
        }),
        h = xt(() => s.value.matched[f.value]);
      Qa(
        pv,
        xt(() => f.value + 1),
      ),
        Qa(Gk, h),
        Qa(Kf, s);
      const d = Zt();
      return (
        Fe(
          () => [d.value, h.value, t.name],
          ([g, v, y], [w, _, N]) => {
            v &&
              ((v.instances[y] = g),
              _ &&
                _ !== v &&
                g &&
                g === w &&
                (v.leaveGuards.size || (v.leaveGuards = _.leaveGuards),
                v.updateGuards.size || (v.updateGuards = _.updateGuards))),
              g &&
                v &&
                (!_ || !fs(v, _) || !w) &&
                (v.enterCallbacks[y] || []).forEach((L) => L(g));
          },
          { flush: "post" },
        ),
        () => {
          const g = s.value,
            v = t.name,
            y = h.value,
            w = y && y.components[v];
          if (!w) return yv(r.default, { Component: w, route: g });
          const _ = y.props[v],
            N = _
              ? _ === !0
                ? g.params
                : typeof _ == "function"
                  ? _(g)
                  : _
              : null,
            A = Ul(
              w,
              pe({}, N, e, {
                onVnodeUnmounted: (T) => {
                  T.component.isUnmounted && (y.instances[v] = null);
                },
                ref: d,
              }),
            );
          return yv(r.default, { Component: A, route: g }) || A;
        }
      );
    },
  });
function yv(t, e) {
  if (!t) return null;
  const r = t(e);
  return r.length === 1 ? r[0] : r;
}
const Jk = Qk;
function tC(t) {
  const e = Ek(t.routes, t),
    r = t.parseQuery || Uk,
    o = t.stringifyQuery || dv,
    s = t.history,
    c = nl(),
    f = nl(),
    h = nl(),
    d = bs(pi);
  let g = pi;
  Ko &&
    t.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual");
  const v = hf.bind(null, (j) => "" + j),
    y = hf.bind(null, Wk),
    w = hf.bind(null, gc);
  function _(j, it) {
    let at, Mt;
    return (
      B0(j) ? ((at = e.getRecordMatcher(j)), (Mt = it)) : (Mt = j),
      e.addRoute(Mt, at)
    );
  }
  function N(j) {
    const it = e.getRecordMatcher(j);
    it && e.removeRoute(it);
  }
  function L() {
    return e.getRoutes().map((j) => j.record);
  }
  function A(j) {
    return !!e.getRecordMatcher(j);
  }
  function T(j, it) {
    if (((it = pe({}, it || d.value)), typeof j == "string")) {
      const V = df(r, j, it.path),
        J = e.resolve({ path: V.path }, it),
        lt = s.createHref(V.fullPath);
      return pe(V, J, {
        params: w(J.params),
        hash: gc(V.hash),
        redirectedFrom: void 0,
        href: lt,
      });
    }
    let at;
    if ("path" in j) at = pe({}, j, { path: df(r, j.path, it.path).path });
    else {
      const V = pe({}, j.params);
      for (const J in V) V[J] == null && delete V[J];
      (at = pe({}, j, { params: y(V) })), (it.params = y(it.params));
    }
    const Mt = e.resolve(at, it),
      Et = j.hash || "";
    Mt.params = v(w(Mt.params));
    const R = ek(o, pe({}, j, { hash: Hk(Et), path: Mt.path })),
      F = s.createHref(R);
    return pe(
      { fullPath: R, hash: Et, query: o === dv ? jk(j.query) : j.query || {} },
      Mt,
      { redirectedFrom: void 0, href: F },
    );
  }
  function M(j) {
    return typeof j == "string" ? df(r, j, d.value.path) : pe({}, j);
  }
  function $(j, it) {
    if (g !== j) return hs(8, { from: it, to: j });
  }
  function E(j) {
    return ct(j);
  }
  function H(j) {
    return E(pe(M(j), { replace: !0 }));
  }
  function K(j) {
    const it = j.matched[j.matched.length - 1];
    if (it && it.redirect) {
      const { redirect: at } = it;
      let Mt = typeof at == "function" ? at(j) : at;
      return (
        typeof Mt == "string" &&
          ((Mt =
            Mt.includes("?") || Mt.includes("#") ? (Mt = M(Mt)) : { path: Mt }),
          (Mt.params = {})),
        pe(
          {
            query: j.query,
            hash: j.hash,
            params: "path" in Mt ? {} : j.params,
          },
          Mt,
        )
      );
    }
  }
  function ct(j, it) {
    const at = (g = T(j)),
      Mt = d.value,
      Et = j.state,
      R = j.force,
      F = j.replace === !0,
      V = K(at);
    if (V)
      return ct(
        pe(M(V), {
          state: typeof V == "object" ? pe({}, Et, V.state) : Et,
          force: R,
          replace: F,
        }),
        it || at,
      );
    const J = at;
    J.redirectedFrom = it;
    let lt;
    return (
      !R &&
        nk(o, Mt, at) &&
        ((lt = hs(16, { to: J, from: Mt })), Ht(Mt, Mt, !0, !1)),
      (lt ? Promise.resolve(lt) : rt(J, Mt))
        .catch((ft) => (Hr(ft) ? (Hr(ft, 2) ? ft : At(ft)) : Q(ft, J, Mt)))
        .then((ft) => {
          if (ft) {
            if (Hr(ft, 2))
              return ct(
                pe({ replace: F }, M(ft.to), {
                  state:
                    typeof ft.to == "object" ? pe({}, Et, ft.to.state) : Et,
                  force: R,
                }),
                it || J,
              );
          } else ft = ht(J, Mt, !0, F, Et);
          return dt(J, Mt, ft), ft;
        })
    );
  }
  function Y(j, it) {
    const at = $(j, it);
    return at ? Promise.reject(at) : Promise.resolve();
  }
  function nt(j) {
    const it = Qt.values().next().value;
    return it && typeof it.runWithContext == "function"
      ? it.runWithContext(j)
      : j();
  }
  function rt(j, it) {
    let at;
    const [Mt, Et, R] = eC(j, it);
    at = pf(Mt.reverse(), "beforeRouteLeave", j, it);
    for (const V of Mt)
      V.leaveGuards.forEach((J) => {
        at.push(wi(J, j, it));
      });
    const F = Y.bind(null, j, it);
    return (
      at.push(F),
      Tt(at)
        .then(() => {
          at = [];
          for (const V of c.list()) at.push(wi(V, j, it));
          return at.push(F), Tt(at);
        })
        .then(() => {
          at = pf(Et, "beforeRouteUpdate", j, it);
          for (const V of Et)
            V.updateGuards.forEach((J) => {
              at.push(wi(J, j, it));
            });
          return at.push(F), Tt(at);
        })
        .then(() => {
          at = [];
          for (const V of R)
            if (V.beforeEnter)
              if (ur(V.beforeEnter))
                for (const J of V.beforeEnter) at.push(wi(J, j, it));
              else at.push(wi(V.beforeEnter, j, it));
          return at.push(F), Tt(at);
        })
        .then(
          () => (
            j.matched.forEach((V) => (V.enterCallbacks = {})),
            (at = pf(R, "beforeRouteEnter", j, it)),
            at.push(F),
            Tt(at)
          ),
        )
        .then(() => {
          at = [];
          for (const V of f.list()) at.push(wi(V, j, it));
          return at.push(F), Tt(at);
        })
        .catch((V) => (Hr(V, 8) ? V : Promise.reject(V)))
    );
  }
  function dt(j, it, at) {
    h.list().forEach((Mt) => nt(() => Mt(j, it, at)));
  }
  function ht(j, it, at, Mt, Et) {
    const R = $(j, it);
    if (R) return R;
    const F = it === pi,
      V = Ko ? history.state : {};
    at &&
      (Mt || F
        ? s.replace(j.fullPath, pe({ scroll: F && V && V.scroll }, Et))
        : s.push(j.fullPath, Et)),
      (d.value = j),
      Ht(j, it, at, F),
      At();
  }
  let G;
  function z() {
    G ||
      (G = s.listen((j, it, at) => {
        if (!Vt.listening) return;
        const Mt = T(j),
          Et = K(Mt);
        if (Et) {
          ct(pe(Et, { replace: !0 }), Mt).catch(dl);
          return;
        }
        g = Mt;
        const R = d.value;
        Ko && uk(ov(R.fullPath, at.delta), Kc()),
          rt(Mt, R)
            .catch((F) =>
              Hr(F, 12)
                ? F
                : Hr(F, 2)
                  ? (ct(F.to, Mt)
                      .then((V) => {
                        Hr(V, 20) &&
                          !at.delta &&
                          at.type === Ll.pop &&
                          s.go(-1, !1);
                      })
                      .catch(dl),
                    Promise.reject())
                  : (at.delta && s.go(-at.delta, !1), Q(F, Mt, R)),
            )
            .then((F) => {
              (F = F || ht(Mt, R, !1)),
                F &&
                  (at.delta && !Hr(F, 8)
                    ? s.go(-at.delta, !1)
                    : at.type === Ll.pop && Hr(F, 20) && s.go(-1, !1)),
                dt(Mt, R, F);
            })
            .catch(dl);
      }));
  }
  let k = nl(),
    I = nl(),
    B;
  function Q(j, it, at) {
    At(j);
    const Mt = I.list();
    return (
      Mt.length ? Mt.forEach((Et) => Et(j, it, at)) : console.error(j),
      Promise.reject(j)
    );
  }
  function yt() {
    return B && d.value !== pi
      ? Promise.resolve()
      : new Promise((j, it) => {
          k.add([j, it]);
        });
  }
  function At(j) {
    return (
      B ||
        ((B = !j),
        z(),
        k.list().forEach(([it, at]) => (j ? at(j) : it())),
        k.reset()),
      j
    );
  }
  function Ht(j, it, at, Mt) {
    const { scrollBehavior: Et } = t;
    if (!Ko || !Et) return Promise.resolve();
    const R =
      (!at && fk(ov(j.fullPath, 0))) ||
      ((Mt || !at) && history.state && history.state.scroll) ||
      null;
    return Kr()
      .then(() => Et(j, it, R))
      .then((F) => F && ck(F))
      .catch((F) => Q(F, j, it));
  }
  const qt = (j) => s.go(j);
  let Jt;
  const Qt = new Set(),
    Vt = {
      currentRoute: d,
      listening: !0,
      addRoute: _,
      removeRoute: N,
      hasRoute: A,
      getRoutes: L,
      resolve: T,
      options: t,
      push: E,
      replace: H,
      go: qt,
      back: () => qt(-1),
      forward: () => qt(1),
      beforeEach: c.add,
      beforeResolve: f.add,
      afterEach: h.add,
      onError: I.add,
      isReady: yt,
      install(j) {
        const it = this;
        j.component("RouterLink", Xk),
          j.component("RouterView", Jk),
          (j.config.globalProperties.$router = it),
          Object.defineProperty(j.config.globalProperties, "$route", {
            enumerable: !0,
            get: () => U(d),
          }),
          Ko &&
            !Jt &&
            d.value === pi &&
            ((Jt = !0), E(s.location).catch((Et) => {}));
        const at = {};
        for (const Et in pi)
          Object.defineProperty(at, Et, {
            get: () => d.value[Et],
            enumerable: !0,
          });
        j.provide(jh, it), j.provide(Y0, e0(at)), j.provide(Kf, d);
        const Mt = j.unmount;
        Qt.add(j),
          (j.unmount = function () {
            Qt.delete(j),
              Qt.size < 1 &&
                ((g = pi),
                G && G(),
                (G = null),
                (d.value = pi),
                (Jt = !1),
                (B = !1)),
              Mt();
          });
      },
    };
  function Tt(j) {
    return j.reduce((it, at) => it.then(() => nt(at)), Promise.resolve());
  }
  return Vt;
}
function eC(t, e) {
  const r = [],
    o = [],
    s = [],
    c = Math.max(e.matched.length, t.matched.length);
  for (let f = 0; f < c; f++) {
    const h = e.matched[f];
    h && (t.matched.find((g) => fs(g, h)) ? o.push(h) : r.push(h));
    const d = t.matched[f];
    d && (e.matched.find((g) => fs(g, d)) || s.push(d));
  }
  return [r, o, s];
}
const nC = ["top", "right", "bottom", "left"],
  bv = ["start", "end"],
  wv = nC.reduce((t, e) => t.concat(e, e + "-" + bv[0], e + "-" + bv[1]), []),
  Al = Math.min,
  Ji = Math.max,
  rC = { left: "right", right: "left", bottom: "top", top: "bottom" },
  iC = { start: "end", end: "start" };
function Xf(t, e, r) {
  return Ji(t, Al(e, r));
}
function yo(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function Lr(t) {
  return t.split("-")[0];
}
function ar(t) {
  return t.split("-")[1];
}
function Z0(t) {
  return t === "x" ? "y" : "x";
}
function Gh(t) {
  return t === "y" ? "height" : "width";
}
function jl(t) {
  return ["top", "bottom"].includes(Lr(t)) ? "y" : "x";
}
function Vh(t) {
  return Z0(jl(t));
}
function Q0(t, e, r) {
  r === void 0 && (r = !1);
  const o = ar(t),
    s = Vh(t),
    c = Gh(s);
  let f =
    s === "x"
      ? o === (r ? "end" : "start")
        ? "right"
        : "left"
      : o === "start"
        ? "bottom"
        : "top";
  return e.reference[c] > e.floating[c] && (f = mc(f)), [f, mc(f)];
}
function oC(t) {
  const e = mc(t);
  return [vc(t), e, vc(e)];
}
function vc(t) {
  return t.replace(/start|end/g, (e) => iC[e]);
}
function sC(t, e, r) {
  const o = ["left", "right"],
    s = ["right", "left"],
    c = ["top", "bottom"],
    f = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return r ? (e ? s : o) : e ? o : s;
    case "left":
    case "right":
      return e ? c : f;
    default:
      return [];
  }
}
function lC(t, e, r, o) {
  const s = ar(t);
  let c = sC(Lr(t), r === "start", o);
  return (
    s && ((c = c.map((f) => f + "-" + s)), e && (c = c.concat(c.map(vc)))), c
  );
}
function mc(t) {
  return t.replace(/left|right|bottom|top/g, (e) => rC[e]);
}
function aC(t) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...t };
}
function J0(t) {
  return typeof t != "number"
    ? aC(t)
    : { top: t, right: t, bottom: t, left: t };
}
function gl(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height,
  };
}
function xv(t, e, r) {
  let { reference: o, floating: s } = t;
  const c = jl(e),
    f = Vh(e),
    h = Gh(f),
    d = Lr(e),
    g = c === "y",
    v = o.x + o.width / 2 - s.width / 2,
    y = o.y + o.height / 2 - s.height / 2,
    w = o[h] / 2 - s[h] / 2;
  let _;
  switch (d) {
    case "top":
      _ = { x: v, y: o.y - s.height };
      break;
    case "bottom":
      _ = { x: v, y: o.y + o.height };
      break;
    case "right":
      _ = { x: o.x + o.width, y };
      break;
    case "left":
      _ = { x: o.x - s.width, y };
      break;
    default:
      _ = { x: o.x, y: o.y };
  }
  switch (ar(e)) {
    case "start":
      _[f] -= w * (r && g ? -1 : 1);
      break;
    case "end":
      _[f] += w * (r && g ? -1 : 1);
      break;
  }
  return _;
}
const cC = async (t, e, r) => {
  const {
      placement: o = "bottom",
      strategy: s = "absolute",
      middleware: c = [],
      platform: f,
    } = r,
    h = c.filter(Boolean),
    d = await (f.isRTL == null ? void 0 : f.isRTL(e));
  let g = await f.getElementRects({ reference: t, floating: e, strategy: s }),
    { x: v, y } = xv(g, o, d),
    w = o,
    _ = {},
    N = 0;
  for (let L = 0; L < h.length; L++) {
    const { name: A, fn: T } = h[L],
      {
        x: M,
        y: $,
        data: E,
        reset: H,
      } = await T({
        x: v,
        y,
        initialPlacement: o,
        placement: w,
        strategy: s,
        middlewareData: _,
        rects: g,
        platform: f,
        elements: { reference: t, floating: e },
      });
    (v = M ?? v),
      (y = $ ?? y),
      (_ = { ..._, [A]: { ..._[A], ...E } }),
      H &&
        N <= 50 &&
        (N++,
        typeof H == "object" &&
          (H.placement && (w = H.placement),
          H.rects &&
            (g =
              H.rects === !0
                ? await f.getElementRects({
                    reference: t,
                    floating: e,
                    strategy: s,
                  })
                : H.rects),
          ({ x: v, y } = xv(g, w, d))),
        (L = -1));
  }
  return { x: v, y, placement: w, strategy: s, middlewareData: _ };
};
async function Xc(t, e) {
  var r;
  e === void 0 && (e = {});
  const { x: o, y: s, platform: c, rects: f, elements: h, strategy: d } = t,
    {
      boundary: g = "clippingAncestors",
      rootBoundary: v = "viewport",
      elementContext: y = "floating",
      altBoundary: w = !1,
      padding: _ = 0,
    } = yo(e, t),
    N = J0(_),
    A = h[w ? (y === "floating" ? "reference" : "floating") : y],
    T = gl(
      await c.getClippingRect({
        element:
          (r = await (c.isElement == null ? void 0 : c.isElement(A))) == null ||
          r
            ? A
            : A.contextElement ||
              (await (c.getDocumentElement == null
                ? void 0
                : c.getDocumentElement(h.floating))),
        boundary: g,
        rootBoundary: v,
        strategy: d,
      }),
    ),
    M = y === "floating" ? { ...f.floating, x: o, y: s } : f.reference,
    $ = await (c.getOffsetParent == null
      ? void 0
      : c.getOffsetParent(h.floating)),
    E = (await (c.isElement == null ? void 0 : c.isElement($)))
      ? (await (c.getScale == null ? void 0 : c.getScale($))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    H = gl(
      c.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await c.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: h,
            rect: M,
            offsetParent: $,
            strategy: d,
          })
        : M,
    );
  return {
    top: (T.top - H.top + N.top) / E.y,
    bottom: (H.bottom - T.bottom + N.bottom) / E.y,
    left: (T.left - H.left + N.left) / E.x,
    right: (H.right - T.right + N.right) / E.x,
  };
}
const uC = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
        x: r,
        y: o,
        placement: s,
        rects: c,
        platform: f,
        elements: h,
        middlewareData: d,
      } = e,
      { element: g, padding: v = 0 } = yo(t, e) || {};
    if (g == null) return {};
    const y = J0(v),
      w = { x: r, y: o },
      _ = Vh(s),
      N = Gh(_),
      L = await f.getDimensions(g),
      A = _ === "y",
      T = A ? "top" : "left",
      M = A ? "bottom" : "right",
      $ = A ? "clientHeight" : "clientWidth",
      E = c.reference[N] + c.reference[_] - w[_] - c.floating[N],
      H = w[_] - c.reference[_],
      K = await (f.getOffsetParent == null ? void 0 : f.getOffsetParent(g));
    let ct = K ? K[$] : 0;
    (!ct || !(await (f.isElement == null ? void 0 : f.isElement(K)))) &&
      (ct = h.floating[$] || c.floating[N]);
    const Y = E / 2 - H / 2,
      nt = ct / 2 - L[N] / 2 - 1,
      rt = Al(y[T], nt),
      dt = Al(y[M], nt),
      ht = rt,
      G = ct - L[N] - dt,
      z = ct / 2 - L[N] / 2 + Y,
      k = Xf(ht, z, G),
      I =
        !d.arrow &&
        ar(s) != null &&
        z !== k &&
        c.reference[N] / 2 - (z < ht ? rt : dt) - L[N] / 2 < 0,
      B = I ? (z < ht ? z - ht : z - G) : 0;
    return {
      [_]: w[_] + B,
      data: {
        [_]: k,
        centerOffset: z - k - B,
        ...(I && { alignmentOffset: B }),
      },
      reset: I,
    };
  },
});
function fC(t, e, r) {
  return (
    t
      ? [...r.filter((s) => ar(s) === t), ...r.filter((s) => ar(s) !== t)]
      : r.filter((s) => Lr(s) === s)
  ).filter((s) => (t ? ar(s) === t || (e ? vc(s) !== s : !1) : !0));
}
const hC = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        name: "autoPlacement",
        options: t,
        async fn(e) {
          var r, o, s;
          const {
              rects: c,
              middlewareData: f,
              placement: h,
              platform: d,
              elements: g,
            } = e,
            {
              crossAxis: v = !1,
              alignment: y,
              allowedPlacements: w = wv,
              autoAlignment: _ = !0,
              ...N
            } = yo(t, e),
            L = y !== void 0 || w === wv ? fC(y || null, _, w) : w,
            A = await Xc(e, N),
            T = ((r = f.autoPlacement) == null ? void 0 : r.index) || 0,
            M = L[T];
          if (M == null) return {};
          const $ = Q0(
            M,
            c,
            await (d.isRTL == null ? void 0 : d.isRTL(g.floating)),
          );
          if (h !== M) return { reset: { placement: L[0] } };
          const E = [A[Lr(M)], A[$[0]], A[$[1]]],
            H = [
              ...(((o = f.autoPlacement) == null ? void 0 : o.overflows) || []),
              { placement: M, overflows: E },
            ],
            K = L[T + 1];
          if (K)
            return {
              data: { index: T + 1, overflows: H },
              reset: { placement: K },
            };
          const ct = H.map((rt) => {
              const dt = ar(rt.placement);
              return [
                rt.placement,
                dt && v
                  ? rt.overflows.slice(0, 2).reduce((ht, G) => ht + G, 0)
                  : rt.overflows[0],
                rt.overflows,
              ];
            }).sort((rt, dt) => rt[1] - dt[1]),
            nt =
              ((s = ct.filter((rt) =>
                rt[2].slice(0, ar(rt[0]) ? 2 : 3).every((dt) => dt <= 0),
              )[0]) == null
                ? void 0
                : s[0]) || ct[0][0];
          return nt !== h
            ? { data: { index: T + 1, overflows: H }, reset: { placement: nt } }
            : {};
        },
      }
    );
  },
  dC = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        name: "flip",
        options: t,
        async fn(e) {
          var r, o;
          const {
              placement: s,
              middlewareData: c,
              rects: f,
              initialPlacement: h,
              platform: d,
              elements: g,
            } = e,
            {
              mainAxis: v = !0,
              crossAxis: y = !0,
              fallbackPlacements: w,
              fallbackStrategy: _ = "bestFit",
              fallbackAxisSideDirection: N = "none",
              flipAlignment: L = !0,
              ...A
            } = yo(t, e);
          if ((r = c.arrow) != null && r.alignmentOffset) return {};
          const T = Lr(s),
            M = Lr(h) === h,
            $ = await (d.isRTL == null ? void 0 : d.isRTL(g.floating)),
            E = w || (M || !L ? [mc(h)] : oC(h));
          !w && N !== "none" && E.push(...lC(h, L, N, $));
          const H = [h, ...E],
            K = await Xc(e, A),
            ct = [];
          let Y = ((o = c.flip) == null ? void 0 : o.overflows) || [];
          if ((v && ct.push(K[T]), y)) {
            const ht = Q0(s, f, $);
            ct.push(K[ht[0]], K[ht[1]]);
          }
          if (
            ((Y = [...Y, { placement: s, overflows: ct }]),
            !ct.every((ht) => ht <= 0))
          ) {
            var nt, rt;
            const ht = (((nt = c.flip) == null ? void 0 : nt.index) || 0) + 1,
              G = H[ht];
            if (G)
              return {
                data: { index: ht, overflows: Y },
                reset: { placement: G },
              };
            let z =
              (rt = Y.filter((k) => k.overflows[0] <= 0).sort(
                (k, I) => k.overflows[1] - I.overflows[1],
              )[0]) == null
                ? void 0
                : rt.placement;
            if (!z)
              switch (_) {
                case "bestFit": {
                  var dt;
                  const k =
                    (dt = Y.map((I) => [
                      I.placement,
                      I.overflows
                        .filter((B) => B > 0)
                        .reduce((B, Q) => B + Q, 0),
                    ]).sort((I, B) => I[1] - B[1])[0]) == null
                      ? void 0
                      : dt[0];
                  k && (z = k);
                  break;
                }
                case "initialPlacement":
                  z = h;
                  break;
              }
            if (s !== z) return { reset: { placement: z } };
          }
          return {};
        },
      }
    );
  };
async function pC(t, e) {
  const { placement: r, platform: o, elements: s } = t,
    c = await (o.isRTL == null ? void 0 : o.isRTL(s.floating)),
    f = Lr(r),
    h = ar(r),
    d = jl(r) === "y",
    g = ["left", "top"].includes(f) ? -1 : 1,
    v = c && d ? -1 : 1,
    y = yo(e, t);
  let {
    mainAxis: w,
    crossAxis: _,
    alignmentAxis: N,
  } = typeof y == "number"
    ? { mainAxis: y, crossAxis: 0, alignmentAxis: null }
    : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...y };
  return (
    h && typeof N == "number" && (_ = h === "end" ? N * -1 : N),
    d ? { x: _ * v, y: w * g } : { x: w * g, y: _ * v }
  );
}
const gC = function (t) {
    return (
      t === void 0 && (t = 0),
      {
        name: "offset",
        options: t,
        async fn(e) {
          var r, o;
          const { x: s, y: c, placement: f, middlewareData: h } = e,
            d = await pC(e, t);
          return f === ((r = h.offset) == null ? void 0 : r.placement) &&
            (o = h.arrow) != null &&
            o.alignmentOffset
            ? {}
            : { x: s + d.x, y: c + d.y, data: { ...d, placement: f } };
        },
      }
    );
  },
  vC = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        name: "shift",
        options: t,
        async fn(e) {
          const { x: r, y: o, placement: s } = e,
            {
              mainAxis: c = !0,
              crossAxis: f = !1,
              limiter: h = {
                fn: (A) => {
                  let { x: T, y: M } = A;
                  return { x: T, y: M };
                },
              },
              ...d
            } = yo(t, e),
            g = { x: r, y: o },
            v = await Xc(e, d),
            y = jl(Lr(s)),
            w = Z0(y);
          let _ = g[w],
            N = g[y];
          if (c) {
            const A = w === "y" ? "top" : "left",
              T = w === "y" ? "bottom" : "right",
              M = _ + v[A],
              $ = _ - v[T];
            _ = Xf(M, _, $);
          }
          if (f) {
            const A = y === "y" ? "top" : "left",
              T = y === "y" ? "bottom" : "right",
              M = N + v[A],
              $ = N - v[T];
            N = Xf(M, N, $);
          }
          const L = h.fn({ ...e, [w]: _, [y]: N });
          return { ...L, data: { x: L.x - r, y: L.y - o } };
        },
      }
    );
  },
  mC = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        name: "size",
        options: t,
        async fn(e) {
          const { placement: r, rects: o, platform: s, elements: c } = e,
            { apply: f = () => {}, ...h } = yo(t, e),
            d = await Xc(e, h),
            g = Lr(r),
            v = ar(r),
            y = jl(r) === "y",
            { width: w, height: _ } = o.floating;
          let N, L;
          g === "top" || g === "bottom"
            ? ((N = g),
              (L =
                v ===
                ((await (s.isRTL == null ? void 0 : s.isRTL(c.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((L = g), (N = v === "end" ? "top" : "bottom"));
          const A = _ - d[N],
            T = w - d[L],
            M = !e.middlewareData.shift;
          let $ = A,
            E = T;
          if (y) {
            const K = w - d.left - d.right;
            E = v || M ? Al(T, K) : K;
          } else {
            const K = _ - d.top - d.bottom;
            $ = v || M ? Al(A, K) : K;
          }
          if (M && !v) {
            const K = Ji(d.left, 0),
              ct = Ji(d.right, 0),
              Y = Ji(d.top, 0),
              nt = Ji(d.bottom, 0);
            y
              ? (E =
                  w - 2 * (K !== 0 || ct !== 0 ? K + ct : Ji(d.left, d.right)))
              : ($ =
                  _ - 2 * (Y !== 0 || nt !== 0 ? Y + nt : Ji(d.top, d.bottom)));
          }
          await f({ ...e, availableWidth: E, availableHeight: $ });
          const H = await s.getDimensions(c.floating);
          return w !== H.width || _ !== H.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function Un(t) {
  var e;
  return ((e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function kr(t) {
  return Un(t).getComputedStyle(t);
}
const _v = Math.min,
  vl = Math.max,
  yc = Math.round;
function ty(t) {
  const e = kr(t);
  let r = parseFloat(e.width),
    o = parseFloat(e.height);
  const s = t.offsetWidth,
    c = t.offsetHeight,
    f = yc(r) !== s || yc(o) !== c;
  return f && ((r = s), (o = c)), { width: r, height: o, fallback: f };
}
function $i(t) {
  return ny(t) ? (t.nodeName || "").toLowerCase() : "";
}
let za;
function ey() {
  if (za) return za;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands)
    ? ((za = t.brands.map((e) => e.brand + "/" + e.version).join(" ")), za)
    : navigator.userAgent;
}
function Cr(t) {
  return t instanceof Un(t).HTMLElement;
}
function Ai(t) {
  return t instanceof Un(t).Element;
}
function ny(t) {
  return t instanceof Un(t).Node;
}
function Sv(t) {
  return typeof ShadowRoot > "u"
    ? !1
    : t instanceof Un(t).ShadowRoot || t instanceof ShadowRoot;
}
function Yc(t) {
  const { overflow: e, overflowX: r, overflowY: o, display: s } = kr(t);
  return (
    /auto|scroll|overlay|hidden|clip/.test(e + o + r) &&
    !["inline", "contents"].includes(s)
  );
}
function yC(t) {
  return ["table", "td", "th"].includes($i(t));
}
function Yf(t) {
  const e = /firefox/i.test(ey()),
    r = kr(t),
    o = r.backdropFilter || r.WebkitBackdropFilter;
  return (
    r.transform !== "none" ||
    r.perspective !== "none" ||
    (!!o && o !== "none") ||
    (e && r.willChange === "filter") ||
    (e && !!r.filter && r.filter !== "none") ||
    ["transform", "perspective"].some((s) => r.willChange.includes(s)) ||
    ["paint", "layout", "strict", "content"].some((s) => {
      const c = r.contain;
      return c != null && c.includes(s);
    })
  );
}
function ry() {
  return !/^((?!chrome|android).)*safari/i.test(ey());
}
function Kh(t) {
  return ["html", "body", "#document"].includes($i(t));
}
function iy(t) {
  return Ai(t) ? t : t.contextElement;
}
const oy = { x: 1, y: 1 };
function rs(t) {
  const e = iy(t);
  if (!Cr(e)) return oy;
  const r = e.getBoundingClientRect(),
    { width: o, height: s, fallback: c } = ty(e);
  let f = (c ? yc(r.width) : r.width) / o,
    h = (c ? yc(r.height) : r.height) / s;
  return (
    (f && Number.isFinite(f)) || (f = 1),
    (h && Number.isFinite(h)) || (h = 1),
    { x: f, y: h }
  );
}
function Ml(t, e, r, o) {
  var s, c;
  e === void 0 && (e = !1), r === void 0 && (r = !1);
  const f = t.getBoundingClientRect(),
    h = iy(t);
  let d = oy;
  e && (o ? Ai(o) && (d = rs(o)) : (d = rs(t)));
  const g = h ? Un(h) : window,
    v = !ry() && r;
  let y =
      (f.left +
        ((v && ((s = g.visualViewport) == null ? void 0 : s.offsetLeft)) ||
          0)) /
      d.x,
    w =
      (f.top +
        ((v && ((c = g.visualViewport) == null ? void 0 : c.offsetTop)) || 0)) /
      d.y,
    _ = f.width / d.x,
    N = f.height / d.y;
  if (h) {
    const L = Un(h),
      A = o && Ai(o) ? Un(o) : o;
    let T = L.frameElement;
    for (; T && o && A !== L; ) {
      const M = rs(T),
        $ = T.getBoundingClientRect(),
        E = getComputedStyle(T);
      ($.x += (T.clientLeft + parseFloat(E.paddingLeft)) * M.x),
        ($.y += (T.clientTop + parseFloat(E.paddingTop)) * M.y),
        (y *= M.x),
        (w *= M.y),
        (_ *= M.x),
        (N *= M.y),
        (y += $.x),
        (w += $.y),
        (T = Un(T).frameElement);
    }
  }
  return {
    width: _,
    height: N,
    top: w,
    right: y + _,
    bottom: w + N,
    left: y,
    x: y,
    y: w,
  };
}
function Mi(t) {
  return ((ny(t) ? t.ownerDocument : t.document) || window.document)
    .documentElement;
}
function Zc(t) {
  return Ai(t)
    ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop }
    : { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
}
function sy(t) {
  return Ml(Mi(t)).left + Zc(t).scrollLeft;
}
function Nl(t) {
  if ($i(t) === "html") return t;
  const e = t.assignedSlot || t.parentNode || (Sv(t) && t.host) || Mi(t);
  return Sv(e) ? e.host : e;
}
function ly(t) {
  const e = Nl(t);
  return Kh(e) ? e.ownerDocument.body : Cr(e) && Yc(e) ? e : ly(e);
}
function bc(t, e) {
  var r;
  e === void 0 && (e = []);
  const o = ly(t),
    s = o === ((r = t.ownerDocument) == null ? void 0 : r.body),
    c = Un(o);
  return s
    ? e.concat(c, c.visualViewport || [], Yc(o) ? o : [])
    : e.concat(o, bc(o));
}
function kv(t, e, r) {
  return e === "viewport"
    ? gl(
        (function (o, s) {
          const c = Un(o),
            f = Mi(o),
            h = c.visualViewport;
          let d = f.clientWidth,
            g = f.clientHeight,
            v = 0,
            y = 0;
          if (h) {
            (d = h.width), (g = h.height);
            const w = ry();
            (w || (!w && s === "fixed")) &&
              ((v = h.offsetLeft), (y = h.offsetTop));
          }
          return { width: d, height: g, x: v, y };
        })(t, r),
      )
    : Ai(e)
      ? gl(
          (function (o, s) {
            const c = Ml(o, !0, s === "fixed"),
              f = c.top + o.clientTop,
              h = c.left + o.clientLeft,
              d = Cr(o) ? rs(o) : { x: 1, y: 1 };
            return {
              width: o.clientWidth * d.x,
              height: o.clientHeight * d.y,
              x: h * d.x,
              y: f * d.y,
            };
          })(e, r),
        )
      : gl(
          (function (o) {
            const s = Mi(o),
              c = Zc(o),
              f = o.ownerDocument.body,
              h = vl(
                s.scrollWidth,
                s.clientWidth,
                f.scrollWidth,
                f.clientWidth,
              ),
              d = vl(
                s.scrollHeight,
                s.clientHeight,
                f.scrollHeight,
                f.clientHeight,
              );
            let g = -c.scrollLeft + sy(o);
            const v = -c.scrollTop;
            return (
              kr(f).direction === "rtl" &&
                (g += vl(s.clientWidth, f.clientWidth) - h),
              { width: h, height: d, x: g, y: v }
            );
          })(Mi(t)),
        );
}
function Cv(t) {
  return Cr(t) && kr(t).position !== "fixed" ? t.offsetParent : null;
}
function Tv(t) {
  const e = Un(t);
  let r = Cv(t);
  for (; r && yC(r) && kr(r).position === "static"; ) r = Cv(r);
  return r &&
    ($i(r) === "html" ||
      ($i(r) === "body" && kr(r).position === "static" && !Yf(r)))
    ? e
    : r ||
        (function (o) {
          let s = Nl(o);
          for (; Cr(s) && !Kh(s); ) {
            if (Yf(s)) return s;
            s = Nl(s);
          }
          return null;
        })(t) ||
        e;
}
function bC(t, e, r) {
  const o = Cr(e),
    s = Mi(e),
    c = Ml(t, !0, r === "fixed", e);
  let f = { scrollLeft: 0, scrollTop: 0 };
  const h = { x: 0, y: 0 };
  if (o || (!o && r !== "fixed"))
    if ((($i(e) !== "body" || Yc(s)) && (f = Zc(e)), Cr(e))) {
      const d = Ml(e, !0);
      (h.x = d.x + e.clientLeft), (h.y = d.y + e.clientTop);
    } else s && (h.x = sy(s));
  return {
    x: c.left + f.scrollLeft - h.x,
    y: c.top + f.scrollTop - h.y,
    width: c.width,
    height: c.height,
  };
}
const wC = {
    getClippingRect: function (t) {
      let { element: e, boundary: r, rootBoundary: o, strategy: s } = t;
      const c =
          r === "clippingAncestors"
            ? (function (g, v) {
                const y = v.get(g);
                if (y) return y;
                let w = bc(g).filter((A) => Ai(A) && $i(A) !== "body"),
                  _ = null;
                const N = kr(g).position === "fixed";
                let L = N ? Nl(g) : g;
                for (; Ai(L) && !Kh(L); ) {
                  const A = kr(L),
                    T = Yf(L);
                  (
                    N
                      ? T || _
                      : T ||
                        A.position !== "static" ||
                        !_ ||
                        !["absolute", "fixed"].includes(_.position)
                  )
                    ? (_ = A)
                    : (w = w.filter((M) => M !== L)),
                    (L = Nl(L));
                }
                return v.set(g, w), w;
              })(e, this._c)
            : [].concat(r),
        f = [...c, o],
        h = f[0],
        d = f.reduce(
          (g, v) => {
            const y = kv(e, v, s);
            return (
              (g.top = vl(y.top, g.top)),
              (g.right = _v(y.right, g.right)),
              (g.bottom = _v(y.bottom, g.bottom)),
              (g.left = vl(y.left, g.left)),
              g
            );
          },
          kv(e, h, s),
        );
      return {
        width: d.right - d.left,
        height: d.bottom - d.top,
        x: d.left,
        y: d.top,
      };
    },
    convertOffsetParentRelativeRectToViewportRelativeRect: function (t) {
      let { rect: e, offsetParent: r, strategy: o } = t;
      const s = Cr(r),
        c = Mi(r);
      if (r === c) return e;
      let f = { scrollLeft: 0, scrollTop: 0 },
        h = { x: 1, y: 1 };
      const d = { x: 0, y: 0 };
      if (
        (s || (!s && o !== "fixed")) &&
        (($i(r) !== "body" || Yc(c)) && (f = Zc(r)), Cr(r))
      ) {
        const g = Ml(r);
        (h = rs(r)), (d.x = g.x + r.clientLeft), (d.y = g.y + r.clientTop);
      }
      return {
        width: e.width * h.x,
        height: e.height * h.y,
        x: e.x * h.x - f.scrollLeft * h.x + d.x,
        y: e.y * h.y - f.scrollTop * h.y + d.y,
      };
    },
    isElement: Ai,
    getDimensions: function (t) {
      return Cr(t) ? ty(t) : t.getBoundingClientRect();
    },
    getOffsetParent: Tv,
    getDocumentElement: Mi,
    getScale: rs,
    async getElementRects(t) {
      let { reference: e, floating: r, strategy: o } = t;
      const s = this.getOffsetParent || Tv,
        c = this.getDimensions;
      return {
        reference: bC(e, await s(r), o),
        floating: { x: 0, y: 0, ...(await c(r)) },
      };
    },
    getClientRects: (t) => Array.from(t.getClientRects()),
    isRTL: (t) => kr(t).direction === "rtl",
  },
  xC = (t, e, r) => {
    const o = new Map(),
      s = { platform: wC, ...r },
      c = { ...s.platform, _c: o };
    return cC(t, e, { ...s, platform: c });
  };
function ay(t, e) {
  for (const r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      (typeof e[r] == "object" && t[r] ? ay(t[r], e[r]) : (t[r] = e[r]));
}
const cr = {
  disabled: !1,
  distance: 5,
  skidding: 0,
  container: "body",
  boundary: void 0,
  instantMove: !1,
  disposeTimeout: 150,
  popperTriggers: [],
  strategy: "absolute",
  preventOverflow: !0,
  flip: !0,
  shift: !0,
  overflowPadding: 0,
  arrowPadding: 0,
  arrowOverflow: !0,
  autoHideOnMousedown: !1,
  themes: {
    tooltip: {
      placement: "top",
      triggers: ["hover", "focus", "touch"],
      hideTriggers: (t) => [...t, "click"],
      delay: { show: 200, hide: 0 },
      handleResize: !1,
      html: !1,
      loadingContent: "...",
    },
    dropdown: {
      placement: "bottom",
      triggers: ["click"],
      delay: 0,
      handleResize: !0,
      autoHide: !0,
    },
    menu: {
      $extend: "dropdown",
      triggers: ["hover", "focus"],
      popperTriggers: ["hover"],
      delay: { show: 0, hide: 400 },
    },
  },
};
function Pl(t, e) {
  let r = cr.themes[t] || {},
    o;
  do
    (o = r[e]),
      typeof o > "u"
        ? r.$extend
          ? (r = cr.themes[r.$extend] || {})
          : ((r = null), (o = cr[e]))
        : (r = null);
  while (r);
  return o;
}
function _C(t) {
  const e = [t];
  let r = cr.themes[t] || {};
  do
    r.$extend && !r.$resetCss
      ? (e.push(r.$extend), (r = cr.themes[r.$extend] || {}))
      : (r = null);
  while (r);
  return e.map((o) => `v-popper--theme-${o}`);
}
function Ev(t) {
  const e = [t];
  let r = cr.themes[t] || {};
  do
    r.$extend
      ? (e.push(r.$extend), (r = cr.themes[r.$extend] || {}))
      : (r = null);
  while (r);
  return e;
}
let ds = !1;
if (typeof window < "u") {
  ds = !1;
  try {
    const t = Object.defineProperty({}, "passive", {
      get() {
        ds = !0;
      },
    });
    window.addEventListener("test", null, t);
  } catch {}
}
let cy = !1;
typeof window < "u" &&
  typeof navigator < "u" &&
  (cy = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const uy = ["auto", "top", "bottom", "left", "right"].reduce(
    (t, e) => t.concat([e, `${e}-start`, `${e}-end`]),
    [],
  ),
  Lv = {
    hover: "mouseenter",
    focus: "focus",
    click: "click",
    touch: "touchstart",
    pointer: "pointerdown",
  },
  Av = {
    hover: "mouseleave",
    focus: "blur",
    click: "click",
    touch: "touchend",
    pointer: "pointerup",
  };
function Mv(t, e) {
  const r = t.indexOf(e);
  r !== -1 && t.splice(r, 1);
}
function gf() {
  return new Promise((t) =>
    requestAnimationFrame(() => {
      requestAnimationFrame(t);
    }),
  );
}
const sr = [];
let Qi = null;
const Nv = {};
function Pv(t) {
  let e = Nv[t];
  return e || (e = Nv[t] = []), e;
}
let Zf = function () {};
typeof window < "u" && (Zf = window.Element);
function ie(t) {
  return function (e) {
    return Pl(e.theme, t);
  };
}
const vf = "__floating-vue__popper",
  fy = () =>
    fe({
      name: "VPopper",
      provide() {
        return { [vf]: { parentPopper: this } };
      },
      inject: { [vf]: { default: null } },
      props: {
        theme: { type: String, required: !0 },
        targetNodes: { type: Function, required: !0 },
        referenceNode: { type: Function, default: null },
        popperNode: { type: Function, required: !0 },
        shown: { type: Boolean, default: !1 },
        showGroup: { type: String, default: null },
        ariaId: { default: null },
        disabled: { type: Boolean, default: ie("disabled") },
        positioningDisabled: {
          type: Boolean,
          default: ie("positioningDisabled"),
        },
        placement: {
          type: String,
          default: ie("placement"),
          validator: (t) => uy.includes(t),
        },
        delay: { type: [String, Number, Object], default: ie("delay") },
        distance: { type: [Number, String], default: ie("distance") },
        skidding: { type: [Number, String], default: ie("skidding") },
        triggers: { type: Array, default: ie("triggers") },
        showTriggers: { type: [Array, Function], default: ie("showTriggers") },
        hideTriggers: { type: [Array, Function], default: ie("hideTriggers") },
        popperTriggers: { type: Array, default: ie("popperTriggers") },
        popperShowTriggers: {
          type: [Array, Function],
          default: ie("popperShowTriggers"),
        },
        popperHideTriggers: {
          type: [Array, Function],
          default: ie("popperHideTriggers"),
        },
        container: {
          type: [String, Object, Zf, Boolean],
          default: ie("container"),
        },
        boundary: { type: [String, Zf], default: ie("boundary") },
        strategy: {
          type: String,
          validator: (t) => ["absolute", "fixed"].includes(t),
          default: ie("strategy"),
        },
        autoHide: { type: [Boolean, Function], default: ie("autoHide") },
        handleResize: { type: Boolean, default: ie("handleResize") },
        instantMove: { type: Boolean, default: ie("instantMove") },
        eagerMount: { type: Boolean, default: ie("eagerMount") },
        popperClass: {
          type: [String, Array, Object],
          default: ie("popperClass"),
        },
        computeTransformOrigin: {
          type: Boolean,
          default: ie("computeTransformOrigin"),
        },
        autoMinSize: { type: Boolean, default: ie("autoMinSize") },
        autoSize: { type: [Boolean, String], default: ie("autoSize") },
        autoMaxSize: { type: Boolean, default: ie("autoMaxSize") },
        autoBoundaryMaxSize: {
          type: Boolean,
          default: ie("autoBoundaryMaxSize"),
        },
        preventOverflow: { type: Boolean, default: ie("preventOverflow") },
        overflowPadding: {
          type: [Number, String],
          default: ie("overflowPadding"),
        },
        arrowPadding: { type: [Number, String], default: ie("arrowPadding") },
        arrowOverflow: { type: Boolean, default: ie("arrowOverflow") },
        flip: { type: Boolean, default: ie("flip") },
        shift: { type: Boolean, default: ie("shift") },
        shiftCrossAxis: { type: Boolean, default: ie("shiftCrossAxis") },
        noAutoFocus: { type: Boolean, default: ie("noAutoFocus") },
        disposeTimeout: { type: Number, default: ie("disposeTimeout") },
      },
      emits: {
        show: () => !0,
        hide: () => !0,
        "update:shown": (t) => !0,
        "apply-show": () => !0,
        "apply-hide": () => !0,
        "close-group": () => !0,
        "close-directive": () => !0,
        "auto-hide": () => !0,
        resize: () => !0,
      },
      data() {
        return {
          isShown: !1,
          isMounted: !1,
          skipTransition: !1,
          classes: { showFrom: !1, showTo: !1, hideFrom: !1, hideTo: !0 },
          result: {
            x: 0,
            y: 0,
            placement: "",
            strategy: this.strategy,
            arrow: { x: 0, y: 0, centerOffset: 0 },
            transformOrigin: null,
          },
          randomId: `popper_${[Math.random(), Date.now()].map((t) => t.toString(36).substring(2, 10)).join("_")}`,
          shownChildren: new Set(),
          lastAutoHide: !0,
          pendingHide: !1,
          containsGlobalTarget: !1,
          isDisposed: !0,
          mouseDownContains: !1,
        };
      },
      computed: {
        popperId() {
          return this.ariaId != null ? this.ariaId : this.randomId;
        },
        shouldMountContent() {
          return this.eagerMount || this.isMounted;
        },
        slotData() {
          return {
            popperId: this.popperId,
            isShown: this.isShown,
            shouldMountContent: this.shouldMountContent,
            skipTransition: this.skipTransition,
            autoHide:
              typeof this.autoHide == "function"
                ? this.lastAutoHide
                : this.autoHide,
            show: this.show,
            hide: this.hide,
            handleResize: this.handleResize,
            onResize: this.onResize,
            classes: { ...this.classes, popperClass: this.popperClass },
            result: this.positioningDisabled ? null : this.result,
            attrs: this.$attrs,
          };
        },
        parentPopper() {
          var t;
          return (t = this[vf]) == null ? void 0 : t.parentPopper;
        },
        hasPopperShowTriggerHover() {
          var t, e;
          return (
            ((t = this.popperTriggers) == null
              ? void 0
              : t.includes("hover")) ||
            ((e = this.popperShowTriggers) == null
              ? void 0
              : e.includes("hover"))
          );
        },
      },
      watch: {
        shown: "$_autoShowHide",
        disabled(t) {
          t ? this.dispose() : this.init();
        },
        async container() {
          this.isShown &&
            (this.$_ensureTeleport(), await this.$_computePosition());
        },
        triggers: { handler: "$_refreshListeners", deep: !0 },
        positioningDisabled: "$_refreshListeners",
        ...[
          "placement",
          "distance",
          "skidding",
          "boundary",
          "strategy",
          "overflowPadding",
          "arrowPadding",
          "preventOverflow",
          "shift",
          "shiftCrossAxis",
          "flip",
        ].reduce((t, e) => ((t[e] = "$_computePosition"), t), {}),
      },
      created() {
        this.autoMinSize &&
          console.warn(
            '[floating-vue] `autoMinSize` option is deprecated. Use `autoSize="min"` instead.',
          ),
          this.autoMaxSize &&
            console.warn(
              "[floating-vue] `autoMaxSize` option is deprecated. Use `autoBoundaryMaxSize` instead.",
            );
      },
      mounted() {
        this.init(), this.$_detachPopperNode();
      },
      activated() {
        this.$_autoShowHide();
      },
      deactivated() {
        this.hide();
      },
      beforeUnmount() {
        this.dispose();
      },
      methods: {
        show({ event: t = null, skipDelay: e = !1, force: r = !1 } = {}) {
          var o, s;
          ((o = this.parentPopper) != null &&
            o.lockedChild &&
            this.parentPopper.lockedChild !== this) ||
            ((this.pendingHide = !1),
            (r || !this.disabled) &&
              (((s = this.parentPopper) == null ? void 0 : s.lockedChild) ===
                this && (this.parentPopper.lockedChild = null),
              this.$_scheduleShow(t, e),
              this.$emit("show"),
              (this.$_showFrameLocked = !0),
              requestAnimationFrame(() => {
                this.$_showFrameLocked = !1;
              })),
            this.$emit("update:shown", !0));
        },
        hide({ event: t = null, skipDelay: e = !1 } = {}) {
          var r;
          if (!this.$_hideInProgress) {
            if (this.shownChildren.size > 0) {
              this.pendingHide = !0;
              return;
            }
            if (this.hasPopperShowTriggerHover && this.$_isAimingPopper()) {
              this.parentPopper &&
                ((this.parentPopper.lockedChild = this),
                clearTimeout(this.parentPopper.lockedChildTimer),
                (this.parentPopper.lockedChildTimer = setTimeout(() => {
                  this.parentPopper.lockedChild === this &&
                    (this.parentPopper.lockedChild.hide({ skipDelay: e }),
                    (this.parentPopper.lockedChild = null));
                }, 1e3)));
              return;
            }
            ((r = this.parentPopper) == null ? void 0 : r.lockedChild) ===
              this && (this.parentPopper.lockedChild = null),
              (this.pendingHide = !1),
              this.$_scheduleHide(t, e),
              this.$emit("hide"),
              this.$emit("update:shown", !1);
          }
        },
        init() {
          var t;
          this.isDisposed &&
            ((this.isDisposed = !1),
            (this.isMounted = !1),
            (this.$_events = []),
            (this.$_preventShow = !1),
            (this.$_referenceNode =
              ((t = this.referenceNode) == null ? void 0 : t.call(this)) ??
              this.$el),
            (this.$_targetNodes = this.targetNodes().filter(
              (e) => e.nodeType === e.ELEMENT_NODE,
            )),
            (this.$_popperNode = this.popperNode()),
            (this.$_innerNode =
              this.$_popperNode.querySelector(".v-popper__inner")),
            (this.$_arrowNode = this.$_popperNode.querySelector(
              ".v-popper__arrow-container",
            )),
            this.$_swapTargetAttrs("title", "data-original-title"),
            this.$_detachPopperNode(),
            this.triggers.length && this.$_addEventListeners(),
            this.shown && this.show());
        },
        dispose() {
          this.isDisposed ||
            ((this.isDisposed = !0),
            this.$_removeEventListeners(),
            this.hide({ skipDelay: !0 }),
            this.$_detachPopperNode(),
            (this.isMounted = !1),
            (this.isShown = !1),
            this.$_updateParentShownChildren(!1),
            this.$_swapTargetAttrs("data-original-title", "title"));
        },
        async onResize() {
          this.isShown &&
            (await this.$_computePosition(), this.$emit("resize"));
        },
        async $_computePosition() {
          if (this.isDisposed || this.positioningDisabled) return;
          const t = { strategy: this.strategy, middleware: [] };
          (this.distance || this.skidding) &&
            t.middleware.push(
              gC({ mainAxis: this.distance, crossAxis: this.skidding }),
            );
          const e = this.placement.startsWith("auto");
          if (
            (e
              ? t.middleware.push(
                  hC({ alignment: this.placement.split("-")[1] ?? "" }),
                )
              : (t.placement = this.placement),
            this.preventOverflow &&
              (this.shift &&
                t.middleware.push(
                  vC({
                    padding: this.overflowPadding,
                    boundary: this.boundary,
                    crossAxis: this.shiftCrossAxis,
                  }),
                ),
              !e &&
                this.flip &&
                t.middleware.push(
                  dC({
                    padding: this.overflowPadding,
                    boundary: this.boundary,
                  }),
                )),
            t.middleware.push(
              uC({ element: this.$_arrowNode, padding: this.arrowPadding }),
            ),
            this.arrowOverflow &&
              t.middleware.push({
                name: "arrowOverflow",
                fn: ({ placement: o, rects: s, middlewareData: c }) => {
                  let f;
                  const { centerOffset: h } = c.arrow;
                  return (
                    o.startsWith("top") || o.startsWith("bottom")
                      ? (f = Math.abs(h) > s.reference.width / 2)
                      : (f = Math.abs(h) > s.reference.height / 2),
                    { data: { overflow: f } }
                  );
                },
              }),
            this.autoMinSize || this.autoSize)
          ) {
            const o = this.autoSize
              ? this.autoSize
              : this.autoMinSize
                ? "min"
                : null;
            t.middleware.push({
              name: "autoSize",
              fn: ({ rects: s, placement: c, middlewareData: f }) => {
                var h;
                if ((h = f.autoSize) != null && h.skip) return {};
                let d, g;
                return (
                  c.startsWith("top") || c.startsWith("bottom")
                    ? (d = s.reference.width)
                    : (g = s.reference.height),
                  (this.$_innerNode.style[
                    o === "min"
                      ? "minWidth"
                      : o === "max"
                        ? "maxWidth"
                        : "width"
                  ] = d != null ? `${d}px` : null),
                  (this.$_innerNode.style[
                    o === "min"
                      ? "minHeight"
                      : o === "max"
                        ? "maxHeight"
                        : "height"
                  ] = g != null ? `${g}px` : null),
                  { data: { skip: !0 }, reset: { rects: !0 } }
                );
              },
            });
          }
          (this.autoMaxSize || this.autoBoundaryMaxSize) &&
            ((this.$_innerNode.style.maxWidth = null),
            (this.$_innerNode.style.maxHeight = null),
            t.middleware.push(
              mC({
                boundary: this.boundary,
                padding: this.overflowPadding,
                apply: ({ availableWidth: o, availableHeight: s }) => {
                  (this.$_innerNode.style.maxWidth =
                    o != null ? `${o}px` : null),
                    (this.$_innerNode.style.maxHeight =
                      s != null ? `${s}px` : null);
                },
              }),
            ));
          const r = await xC(this.$_referenceNode, this.$_popperNode, t);
          Object.assign(this.result, {
            x: r.x,
            y: r.y,
            placement: r.placement,
            strategy: r.strategy,
            arrow: {
              ...r.middlewareData.arrow,
              ...r.middlewareData.arrowOverflow,
            },
          });
        },
        $_scheduleShow(t, e = !1) {
          if (
            (this.$_updateParentShownChildren(!0),
            (this.$_hideInProgress = !1),
            clearTimeout(this.$_scheduleTimer),
            Qi &&
              this.instantMove &&
              Qi.instantMove &&
              Qi !== this.parentPopper)
          ) {
            Qi.$_applyHide(!0), this.$_applyShow(!0);
            return;
          }
          e
            ? this.$_applyShow()
            : (this.$_scheduleTimer = setTimeout(
                this.$_applyShow.bind(this),
                this.$_computeDelay("show"),
              ));
        },
        $_scheduleHide(t, e = !1) {
          if (this.shownChildren.size > 0) {
            this.pendingHide = !0;
            return;
          }
          this.$_updateParentShownChildren(!1),
            (this.$_hideInProgress = !0),
            clearTimeout(this.$_scheduleTimer),
            this.isShown && (Qi = this),
            e
              ? this.$_applyHide()
              : (this.$_scheduleTimer = setTimeout(
                  this.$_applyHide.bind(this),
                  this.$_computeDelay("hide"),
                ));
        },
        $_computeDelay(t) {
          const e = this.delay;
          return parseInt((e && e[t]) || e || 0);
        },
        async $_applyShow(t = !1) {
          clearTimeout(this.$_disposeTimer),
            clearTimeout(this.$_scheduleTimer),
            (this.skipTransition = t),
            !this.isShown &&
              (this.$_ensureTeleport(),
              await gf(),
              await this.$_computePosition(),
              await this.$_applyShowEffect(),
              this.positioningDisabled ||
                this.$_registerEventListeners(
                  [...bc(this.$_referenceNode), ...bc(this.$_popperNode)],
                  "scroll",
                  () => {
                    this.$_computePosition();
                  },
                ));
        },
        async $_applyShowEffect() {
          if (this.$_hideInProgress) return;
          if (this.computeTransformOrigin) {
            const e = this.$_referenceNode.getBoundingClientRect(),
              r = this.$_popperNode.querySelector(".v-popper__wrapper"),
              o = r.parentNode.getBoundingClientRect(),
              s = e.x + e.width / 2 - (o.left + r.offsetLeft),
              c = e.y + e.height / 2 - (o.top + r.offsetTop);
            this.result.transformOrigin = `${s}px ${c}px`;
          }
          (this.isShown = !0),
            this.$_applyAttrsToTarget({
              "aria-describedby": this.popperId,
              "data-popper-shown": "",
            });
          const t = this.showGroup;
          if (t) {
            let e;
            for (let r = 0; r < sr.length; r++)
              (e = sr[r]),
                e.showGroup !== t && (e.hide(), e.$emit("close-group"));
          }
          sr.push(this), document.body.classList.add("v-popper--some-open");
          for (const e of Ev(this.theme))
            Pv(e).push(this),
              document.body.classList.add(`v-popper--some-open--${e}`);
          this.$emit("apply-show"),
            (this.classes.showFrom = !0),
            (this.classes.showTo = !1),
            (this.classes.hideFrom = !1),
            (this.classes.hideTo = !1),
            await gf(),
            (this.classes.showFrom = !1),
            (this.classes.showTo = !0),
            this.noAutoFocus || this.$_popperNode.focus();
        },
        async $_applyHide(t = !1) {
          if (this.shownChildren.size > 0) {
            (this.pendingHide = !0), (this.$_hideInProgress = !1);
            return;
          }
          if ((clearTimeout(this.$_scheduleTimer), !this.isShown)) return;
          (this.skipTransition = t),
            Mv(sr, this),
            sr.length === 0 &&
              document.body.classList.remove("v-popper--some-open");
          for (const r of Ev(this.theme)) {
            const o = Pv(r);
            Mv(o, this),
              o.length === 0 &&
                document.body.classList.remove(`v-popper--some-open--${r}`);
          }
          Qi === this && (Qi = null),
            (this.isShown = !1),
            this.$_applyAttrsToTarget({
              "aria-describedby": void 0,
              "data-popper-shown": void 0,
            }),
            clearTimeout(this.$_disposeTimer);
          const e = this.disposeTimeout;
          e !== null &&
            (this.$_disposeTimer = setTimeout(() => {
              this.$_popperNode &&
                (this.$_detachPopperNode(), (this.isMounted = !1));
            }, e)),
            this.$_removeEventListeners("scroll"),
            this.$emit("apply-hide"),
            (this.classes.showFrom = !1),
            (this.classes.showTo = !1),
            (this.classes.hideFrom = !0),
            (this.classes.hideTo = !1),
            await gf(),
            (this.classes.hideFrom = !1),
            (this.classes.hideTo = !0);
        },
        $_autoShowHide() {
          this.shown ? this.show() : this.hide();
        },
        $_ensureTeleport() {
          if (this.isDisposed) return;
          let t = this.container;
          if (
            (typeof t == "string"
              ? (t = window.document.querySelector(t))
              : t === !1 && (t = this.$_targetNodes[0].parentNode),
            !t)
          )
            throw new Error("No container for popover: " + this.container);
          t.appendChild(this.$_popperNode), (this.isMounted = !0);
        },
        $_addEventListeners() {
          const t = (r) => {
            (this.isShown && !this.$_hideInProgress) ||
              ((r.usedByTooltip = !0),
              !this.$_preventShow && this.show({ event: r }));
          };
          this.$_registerTriggerListeners(
            this.$_targetNodes,
            Lv,
            this.triggers,
            this.showTriggers,
            t,
          ),
            this.$_registerTriggerListeners(
              [this.$_popperNode],
              Lv,
              this.popperTriggers,
              this.popperShowTriggers,
              t,
            );
          const e = (r) => {
            r.usedByTooltip || this.hide({ event: r });
          };
          this.$_registerTriggerListeners(
            this.$_targetNodes,
            Av,
            this.triggers,
            this.hideTriggers,
            e,
          ),
            this.$_registerTriggerListeners(
              [this.$_popperNode],
              Av,
              this.popperTriggers,
              this.popperHideTriggers,
              e,
            );
        },
        $_registerEventListeners(t, e, r) {
          this.$_events.push({ targetNodes: t, eventType: e, handler: r }),
            t.forEach((o) =>
              o.addEventListener(e, r, ds ? { passive: !0 } : void 0),
            );
        },
        $_registerTriggerListeners(t, e, r, o, s) {
          let c = r;
          o != null && (c = typeof o == "function" ? o(c) : o),
            c.forEach((f) => {
              const h = e[f];
              h && this.$_registerEventListeners(t, h, s);
            });
        },
        $_removeEventListeners(t) {
          const e = [];
          this.$_events.forEach((r) => {
            const { targetNodes: o, eventType: s, handler: c } = r;
            !t || t === s
              ? o.forEach((f) => f.removeEventListener(s, c))
              : e.push(r);
          }),
            (this.$_events = e);
        },
        $_refreshListeners() {
          this.isDisposed ||
            (this.$_removeEventListeners(), this.$_addEventListeners());
        },
        $_handleGlobalClose(t, e = !1) {
          this.$_showFrameLocked ||
            (this.hide({ event: t }),
            t.closePopover
              ? this.$emit("close-directive")
              : this.$emit("auto-hide"),
            e &&
              ((this.$_preventShow = !0),
              setTimeout(() => {
                this.$_preventShow = !1;
              }, 300)));
        },
        $_detachPopperNode() {
          this.$_popperNode.parentNode &&
            this.$_popperNode.parentNode.removeChild(this.$_popperNode);
        },
        $_swapTargetAttrs(t, e) {
          for (const r of this.$_targetNodes) {
            const o = r.getAttribute(t);
            o && (r.removeAttribute(t), r.setAttribute(e, o));
          }
        },
        $_applyAttrsToTarget(t) {
          for (const e of this.$_targetNodes)
            for (const r in t) {
              const o = t[r];
              o == null ? e.removeAttribute(r) : e.setAttribute(r, o);
            }
        },
        $_updateParentShownChildren(t) {
          let e = this.parentPopper;
          for (; e; )
            t
              ? e.shownChildren.add(this.randomId)
              : (e.shownChildren.delete(this.randomId),
                e.pendingHide && e.hide()),
              (e = e.parentPopper);
        },
        $_isAimingPopper() {
          const t = this.$_referenceNode.getBoundingClientRect();
          if (ml >= t.left && ml <= t.right && yl >= t.top && yl <= t.bottom) {
            const e = this.$_popperNode.getBoundingClientRect(),
              r = ml - vi,
              o = yl - mi,
              s =
                e.left +
                e.width / 2 -
                vi +
                (e.top + e.height / 2) -
                mi +
                e.width +
                e.height,
              c = vi + r * s,
              f = mi + o * s;
            return (
              Fa(vi, mi, c, f, e.left, e.top, e.left, e.bottom) ||
              Fa(vi, mi, c, f, e.left, e.top, e.right, e.top) ||
              Fa(vi, mi, c, f, e.right, e.top, e.right, e.bottom) ||
              Fa(vi, mi, c, f, e.left, e.bottom, e.right, e.bottom)
            );
          }
          return !1;
        },
      },
      render() {
        return this.$slots.default(this.slotData);
      },
    });
if (typeof document < "u" && typeof window < "u") {
  if (cy) {
    const t = ds ? { passive: !0, capture: !0 } : !0;
    document.addEventListener("touchstart", (e) => $v(e, !0), t),
      document.addEventListener("touchend", (e) => Ov(e, !0), t);
  } else
    window.addEventListener("mousedown", (t) => $v(t, !1), !0),
      window.addEventListener("click", (t) => Ov(t, !1), !0);
  window.addEventListener("resize", kC);
}
function $v(t, e) {
  if (cr.autoHideOnMousedown) hy(t, e);
  else
    for (let r = 0; r < sr.length; r++) {
      const o = sr[r];
      try {
        o.mouseDownContains = o.popperNode().contains(t.target);
      } catch {}
    }
}
function Ov(t, e) {
  cr.autoHideOnMousedown || hy(t, e);
}
function hy(t, e) {
  const r = {};
  for (let o = sr.length - 1; o >= 0; o--) {
    const s = sr[o];
    try {
      const c = (s.containsGlobalTarget =
        s.mouseDownContains || s.popperNode().contains(t.target));
      (s.pendingHide = !1),
        requestAnimationFrame(() => {
          if (((s.pendingHide = !1), !r[s.randomId] && Dv(s, c, t))) {
            if (
              (s.$_handleGlobalClose(t, e),
              !t.closeAllPopover && t.closePopover && c)
            ) {
              let h = s.parentPopper;
              for (; h; ) (r[h.randomId] = !0), (h = h.parentPopper);
              return;
            }
            let f = s.parentPopper;
            for (; f && Dv(f, f.containsGlobalTarget, t); )
              f.$_handleGlobalClose(t, e), (f = f.parentPopper);
          }
        });
    } catch {}
  }
}
function Dv(t, e, r) {
  return r.closeAllPopover || (r.closePopover && e) || (SC(t, r) && !e);
}
function SC(t, e) {
  if (typeof t.autoHide == "function") {
    const r = t.autoHide(e);
    return (t.lastAutoHide = r), r;
  }
  return t.autoHide;
}
function kC() {
  for (let t = 0; t < sr.length; t++) sr[t].$_computePosition();
}
let vi = 0,
  mi = 0,
  ml = 0,
  yl = 0;
typeof window < "u" &&
  window.addEventListener(
    "mousemove",
    (t) => {
      (vi = ml), (mi = yl), (ml = t.clientX), (yl = t.clientY);
    },
    ds ? { passive: !0 } : void 0,
  );
function Fa(t, e, r, o, s, c, f, h) {
  const d =
      ((f - s) * (e - c) - (h - c) * (t - s)) /
      ((h - c) * (r - t) - (f - s) * (o - e)),
    g =
      ((r - t) * (e - c) - (o - e) * (t - s)) /
      ((h - c) * (r - t) - (f - s) * (o - e));
  return d >= 0 && d <= 1 && g >= 0 && g <= 1;
}
const CC = { extends: fy() },
  Qc = (t, e) => {
    const r = t.__vccOpts || t;
    for (const [o, s] of e) r[o] = s;
    return r;
  };
function TC(t, e, r, o, s, c) {
  return (
    st(),
    St(
      "div",
      {
        ref: "reference",
        class: ge(["v-popper", { "v-popper--shown": t.slotData.isShown }]),
      },
      [Gn(t.$slots, "default", Ex(O0(t.slotData)))],
      2,
    )
  );
}
const EC = Qc(CC, [["render", TC]]);
function LC() {
  var t = window.navigator.userAgent,
    e = t.indexOf("MSIE ");
  if (e > 0) return parseInt(t.substring(e + 5, t.indexOf(".", e)), 10);
  var r = t.indexOf("Trident/");
  if (r > 0) {
    var o = t.indexOf("rv:");
    return parseInt(t.substring(o + 3, t.indexOf(".", o)), 10);
  }
  var s = t.indexOf("Edge/");
  return s > 0 ? parseInt(t.substring(s + 5, t.indexOf(".", s)), 10) : -1;
}
let tc;
function Qf() {
  Qf.init || ((Qf.init = !0), (tc = LC() !== -1));
}
var Jc = {
  name: "ResizeObserver",
  props: {
    emitOnMount: { type: Boolean, default: !1 },
    ignoreWidth: { type: Boolean, default: !1 },
    ignoreHeight: { type: Boolean, default: !1 },
  },
  emits: ["notify"],
  mounted() {
    Qf(),
      Kr(() => {
        (this._w = this.$el.offsetWidth),
          (this._h = this.$el.offsetHeight),
          this.emitOnMount && this.emitSize();
      });
    const t = document.createElement("object");
    (this._resizeObject = t),
      t.setAttribute("aria-hidden", "true"),
      t.setAttribute("tabindex", -1),
      (t.onload = this.addResizeHandlers),
      (t.type = "text/html"),
      tc && this.$el.appendChild(t),
      (t.data = "about:blank"),
      tc || this.$el.appendChild(t);
  },
  beforeUnmount() {
    this.removeResizeHandlers();
  },
  methods: {
    compareAndNotify() {
      ((!this.ignoreWidth && this._w !== this.$el.offsetWidth) ||
        (!this.ignoreHeight && this._h !== this.$el.offsetHeight)) &&
        ((this._w = this.$el.offsetWidth),
        (this._h = this.$el.offsetHeight),
        this.emitSize());
    },
    emitSize() {
      this.$emit("notify", { width: this._w, height: this._h });
    },
    addResizeHandlers() {
      this._resizeObject.contentDocument.defaultView.addEventListener(
        "resize",
        this.compareAndNotify,
      ),
        this.compareAndNotify();
    },
    removeResizeHandlers() {
      this._resizeObject &&
        this._resizeObject.onload &&
        (!tc &&
          this._resizeObject.contentDocument &&
          this._resizeObject.contentDocument.defaultView.removeEventListener(
            "resize",
            this.compareAndNotify,
          ),
        this.$el.removeChild(this._resizeObject),
        (this._resizeObject.onload = null),
        (this._resizeObject = null));
    },
  },
};
const AC = p_();
f0("data-v-b329ee4c");
const MC = { class: "resize-observer", tabindex: "-1" };
h0();
const NC = AC((t, e, r, o, s, c) => (st(), te("div", MC)));
Jc.render = NC;
Jc.__scopeId = "data-v-b329ee4c";
Jc.__file = "src/components/ResizeObserver.vue";
const dy = (t = "theme") => ({
    computed: {
      themeClass() {
        return _C(this[t]);
      },
    },
  }),
  PC = fe({
    name: "VPopperContent",
    components: { ResizeObserver: Jc },
    mixins: [dy()],
    props: {
      popperId: String,
      theme: String,
      shown: Boolean,
      mounted: Boolean,
      skipTransition: Boolean,
      autoHide: Boolean,
      handleResize: Boolean,
      classes: Object,
      result: Object,
    },
    emits: ["hide", "resize"],
    methods: {
      toPx(t) {
        return t != null && !isNaN(t) ? `${t}px` : null;
      },
    },
  }),
  $C = ["id", "aria-hidden", "tabindex", "data-popper-placement"],
  OC = { ref: "inner", class: "v-popper__inner" },
  DC = tt("div", { class: "v-popper__arrow-outer" }, null, -1),
  RC = tt("div", { class: "v-popper__arrow-inner" }, null, -1),
  zC = [DC, RC];
function FC(t, e, r, o, s, c) {
  const f = co("ResizeObserver");
  return (
    st(),
    St(
      "div",
      {
        id: t.popperId,
        ref: "popover",
        class: ge([
          "v-popper__popper",
          [
            t.themeClass,
            t.classes.popperClass,
            {
              "v-popper__popper--shown": t.shown,
              "v-popper__popper--hidden": !t.shown,
              "v-popper__popper--show-from": t.classes.showFrom,
              "v-popper__popper--show-to": t.classes.showTo,
              "v-popper__popper--hide-from": t.classes.hideFrom,
              "v-popper__popper--hide-to": t.classes.hideTo,
              "v-popper__popper--skip-transition": t.skipTransition,
              "v-popper__popper--arrow-overflow":
                t.result && t.result.arrow.overflow,
              "v-popper__popper--no-positioning": !t.result,
            },
          ],
        ]),
        style: An(
          t.result
            ? {
                position: t.result.strategy,
                transform: `translate3d(${Math.round(t.result.x)}px,${Math.round(t.result.y)}px,0)`,
              }
            : void 0,
        ),
        "aria-hidden": t.shown ? "false" : "true",
        tabindex: t.autoHide ? 0 : void 0,
        "data-popper-placement": t.result ? t.result.placement : void 0,
        onKeyup:
          e[2] || (e[2] = jf((h) => t.autoHide && t.$emit("hide"), ["esc"])),
      },
      [
        tt("div", {
          class: "v-popper__backdrop",
          onClick: e[0] || (e[0] = (h) => t.autoHide && t.$emit("hide")),
        }),
        tt(
          "div",
          {
            class: "v-popper__wrapper",
            style: An(
              t.result ? { transformOrigin: t.result.transformOrigin } : void 0,
            ),
          },
          [
            tt(
              "div",
              OC,
              [
                t.mounted
                  ? (st(),
                    St(
                      ne,
                      { key: 0 },
                      [
                        tt("div", null, [Gn(t.$slots, "default")]),
                        t.handleResize
                          ? (st(),
                            te(f, {
                              key: 0,
                              onNotify:
                                e[1] || (e[1] = (h) => t.$emit("resize", h)),
                            }))
                          : Gt("", !0),
                      ],
                      64,
                    ))
                  : Gt("", !0),
              ],
              512,
            ),
            tt(
              "div",
              {
                ref: "arrow",
                class: "v-popper__arrow-container",
                style: An(
                  t.result
                    ? {
                        left: t.toPx(t.result.arrow.x),
                        top: t.toPx(t.result.arrow.y),
                      }
                    : void 0,
                ),
              },
              zC,
              4,
            ),
          ],
          4,
        ),
      ],
      46,
      $C,
    )
  );
}
const py = Qc(PC, [["render", FC]]),
  gy = {
    methods: {
      show(...t) {
        return this.$refs.popper.show(...t);
      },
      hide(...t) {
        return this.$refs.popper.hide(...t);
      },
      dispose(...t) {
        return this.$refs.popper.dispose(...t);
      },
      onResize(...t) {
        return this.$refs.popper.onResize(...t);
      },
    },
  };
let Jf = function () {};
typeof window < "u" && (Jf = window.Element);
const IC = fe({
  name: "VPopperWrapper",
  components: { Popper: EC, PopperContent: py },
  mixins: [gy, dy("finalTheme")],
  props: {
    theme: { type: String, default: null },
    referenceNode: { type: Function, default: null },
    shown: { type: Boolean, default: !1 },
    showGroup: { type: String, default: null },
    ariaId: { default: null },
    disabled: { type: Boolean, default: void 0 },
    positioningDisabled: { type: Boolean, default: void 0 },
    placement: { type: String, default: void 0 },
    delay: { type: [String, Number, Object], default: void 0 },
    distance: { type: [Number, String], default: void 0 },
    skidding: { type: [Number, String], default: void 0 },
    triggers: { type: Array, default: void 0 },
    showTriggers: { type: [Array, Function], default: void 0 },
    hideTriggers: { type: [Array, Function], default: void 0 },
    popperTriggers: { type: Array, default: void 0 },
    popperShowTriggers: { type: [Array, Function], default: void 0 },
    popperHideTriggers: { type: [Array, Function], default: void 0 },
    container: { type: [String, Object, Jf, Boolean], default: void 0 },
    boundary: { type: [String, Jf], default: void 0 },
    strategy: { type: String, default: void 0 },
    autoHide: { type: [Boolean, Function], default: void 0 },
    handleResize: { type: Boolean, default: void 0 },
    instantMove: { type: Boolean, default: void 0 },
    eagerMount: { type: Boolean, default: void 0 },
    popperClass: { type: [String, Array, Object], default: void 0 },
    computeTransformOrigin: { type: Boolean, default: void 0 },
    autoMinSize: { type: Boolean, default: void 0 },
    autoSize: { type: [Boolean, String], default: void 0 },
    autoMaxSize: { type: Boolean, default: void 0 },
    autoBoundaryMaxSize: { type: Boolean, default: void 0 },
    preventOverflow: { type: Boolean, default: void 0 },
    overflowPadding: { type: [Number, String], default: void 0 },
    arrowPadding: { type: [Number, String], default: void 0 },
    arrowOverflow: { type: Boolean, default: void 0 },
    flip: { type: Boolean, default: void 0 },
    shift: { type: Boolean, default: void 0 },
    shiftCrossAxis: { type: Boolean, default: void 0 },
    noAutoFocus: { type: Boolean, default: void 0 },
    disposeTimeout: { type: Number, default: void 0 },
  },
  emits: {
    show: () => !0,
    hide: () => !0,
    "update:shown": (t) => !0,
    "apply-show": () => !0,
    "apply-hide": () => !0,
    "close-group": () => !0,
    "close-directive": () => !0,
    "auto-hide": () => !0,
    resize: () => !0,
  },
  computed: {
    finalTheme() {
      return this.theme ?? this.$options.vPopperTheme;
    },
  },
  methods: {
    getTargetNodes() {
      return Array.from(this.$el.children).filter(
        (t) => t !== this.$refs.popperContent.$el,
      );
    },
  },
});
function HC(t, e, r, o, s, c) {
  const f = co("PopperContent"),
    h = co("Popper");
  return (
    st(),
    te(
      h,
      Li({ ref: "popper" }, t.$props, {
        theme: t.finalTheme,
        "target-nodes": t.getTargetNodes,
        "popper-node": () => t.$refs.popperContent.$el,
        class: [t.themeClass],
        onShow: e[0] || (e[0] = () => t.$emit("show")),
        onHide: e[1] || (e[1] = () => t.$emit("hide")),
        "onUpdate:shown": e[2] || (e[2] = (d) => t.$emit("update:shown", d)),
        onApplyShow: e[3] || (e[3] = () => t.$emit("apply-show")),
        onApplyHide: e[4] || (e[4] = () => t.$emit("apply-hide")),
        onCloseGroup: e[5] || (e[5] = () => t.$emit("close-group")),
        onCloseDirective: e[6] || (e[6] = () => t.$emit("close-directive")),
        onAutoHide: e[7] || (e[7] = () => t.$emit("auto-hide")),
        onResize: e[8] || (e[8] = () => t.$emit("resize")),
      }),
      {
        default: ee(
          ({
            popperId: d,
            isShown: g,
            shouldMountContent: v,
            skipTransition: y,
            autoHide: w,
            show: _,
            hide: N,
            handleResize: L,
            onResize: A,
            classes: T,
            result: M,
          }) => [
            Gn(t.$slots, "default", { shown: g, show: _, hide: N }),
            It(
              f,
              {
                ref: "popperContent",
                "popper-id": d,
                theme: t.finalTheme,
                shown: g,
                mounted: v,
                "skip-transition": y,
                "auto-hide": w,
                "handle-resize": L,
                classes: T,
                result: M,
                onHide: N,
                onResize: A,
              },
              {
                default: ee(() => [
                  Gn(t.$slots, "popper", { shown: g, hide: N }),
                ]),
                _: 2,
              },
              1032,
              [
                "popper-id",
                "theme",
                "shown",
                "mounted",
                "skip-transition",
                "auto-hide",
                "handle-resize",
                "classes",
                "result",
                "onHide",
                "onResize",
              ],
            ),
          ],
        ),
        _: 3,
      },
      16,
      ["theme", "target-nodes", "popper-node", "class"],
    )
  );
}
const Xh = Qc(IC, [["render", HC]]),
  qC = { ...Xh, name: "VDropdown", vPopperTheme: "dropdown" },
  BC = { ...Xh, name: "VMenu", vPopperTheme: "menu" },
  vy = { ...Xh, name: "VTooltip", vPopperTheme: "tooltip" },
  WC = fe({
    name: "VTooltipDirective",
    components: { Popper: fy(), PopperContent: py },
    mixins: [gy],
    inheritAttrs: !1,
    props: {
      theme: { type: String, default: "tooltip" },
      html: { type: Boolean, default: (t) => Pl(t.theme, "html") },
      content: { type: [String, Number, Function], default: null },
      loadingContent: {
        type: String,
        default: (t) => Pl(t.theme, "loadingContent"),
      },
      targetNodes: { type: Function, required: !0 },
    },
    data() {
      return { asyncContent: null };
    },
    computed: {
      isContentAsync() {
        return typeof this.content == "function";
      },
      loading() {
        return this.isContentAsync && this.asyncContent == null;
      },
      finalContent() {
        return this.isContentAsync
          ? this.loading
            ? this.loadingContent
            : this.asyncContent
          : this.content;
      },
    },
    watch: {
      content: {
        handler() {
          this.fetchContent(!0);
        },
        immediate: !0,
      },
      async finalContent() {
        await this.$nextTick(), this.$refs.popper.onResize();
      },
    },
    created() {
      this.$_fetchId = 0;
    },
    methods: {
      fetchContent(t) {
        if (
          typeof this.content == "function" &&
          this.$_isShown &&
          (t || (!this.$_loading && this.asyncContent == null))
        ) {
          (this.asyncContent = null), (this.$_loading = !0);
          const e = ++this.$_fetchId,
            r = this.content(this);
          r.then ? r.then((o) => this.onResult(e, o)) : this.onResult(e, r);
        }
      },
      onResult(t, e) {
        t === this.$_fetchId &&
          ((this.$_loading = !1), (this.asyncContent = e));
      },
      onShow() {
        (this.$_isShown = !0), this.fetchContent();
      },
      onHide() {
        this.$_isShown = !1;
      },
    },
  }),
  UC = ["innerHTML"],
  jC = ["textContent"];
function GC(t, e, r, o, s, c) {
  const f = co("PopperContent"),
    h = co("Popper");
  return (
    st(),
    te(
      h,
      Li({ ref: "popper" }, t.$attrs, {
        theme: t.theme,
        "target-nodes": t.targetNodes,
        "popper-node": () => t.$refs.popperContent.$el,
        onApplyShow: t.onShow,
        onApplyHide: t.onHide,
      }),
      {
        default: ee(
          ({
            popperId: d,
            isShown: g,
            shouldMountContent: v,
            skipTransition: y,
            autoHide: w,
            hide: _,
            handleResize: N,
            onResize: L,
            classes: A,
            result: T,
          }) => [
            It(
              f,
              {
                ref: "popperContent",
                class: ge({ "v-popper--tooltip-loading": t.loading }),
                "popper-id": d,
                theme: t.theme,
                shown: g,
                mounted: v,
                "skip-transition": y,
                "auto-hide": w,
                "handle-resize": N,
                classes: A,
                result: T,
                onHide: _,
                onResize: L,
              },
              {
                default: ee(() => [
                  t.html
                    ? (st(),
                      St(
                        "div",
                        { key: 0, innerHTML: t.finalContent },
                        null,
                        8,
                        UC,
                      ))
                    : (st(),
                      St(
                        "div",
                        { key: 1, textContent: Ut(t.finalContent) },
                        null,
                        8,
                        jC,
                      )),
                ]),
                _: 2,
              },
              1032,
              [
                "class",
                "popper-id",
                "theme",
                "shown",
                "mounted",
                "skip-transition",
                "auto-hide",
                "handle-resize",
                "classes",
                "result",
                "onHide",
                "onResize",
              ],
            ),
          ],
        ),
        _: 1,
      },
      16,
      ["theme", "target-nodes", "popper-node", "onApplyShow", "onApplyHide"],
    )
  );
}
const VC = Qc(WC, [["render", GC]]),
  my = "v-popper--has-tooltip";
function KC(t, e) {
  let r = t.placement;
  if (!r && e) for (const o of uy) e[o] && (r = o);
  return r || (r = Pl(t.theme || "tooltip", "placement")), r;
}
function yy(t, e, r) {
  let o;
  const s = typeof e;
  return (
    s === "string"
      ? (o = { content: e })
      : e && s === "object"
        ? (o = e)
        : (o = { content: !1 }),
    (o.placement = KC(o, r)),
    (o.targetNodes = () => [t]),
    (o.referenceNode = () => t),
    o
  );
}
let mf,
  $l,
  XC = 0;
function YC() {
  if (mf) return;
  ($l = Zt([])),
    (mf = I0({
      name: "VTooltipDirectiveApp",
      setup() {
        return { directives: $l };
      },
      render() {
        return this.directives.map((e) =>
          Ul(VC, {
            ...e.options,
            shown: e.shown || e.options.shown,
            key: e.id,
          }),
        );
      },
      devtools: { hide: !0 },
    }));
  const t = document.createElement("div");
  document.body.appendChild(t), mf.mount(t);
}
function by(t, e, r) {
  YC();
  const o = Zt(yy(t, e, r)),
    s = Zt(!1),
    c = { id: XC++, options: o, shown: s };
  return (
    $l.value.push(c),
    t.classList && t.classList.add(my),
    (t.$_popper = {
      options: o,
      item: c,
      show() {
        s.value = !0;
      },
      hide() {
        s.value = !1;
      },
    })
  );
}
function Yh(t) {
  if (t.$_popper) {
    const e = $l.value.indexOf(t.$_popper.item);
    e !== -1 && $l.value.splice(e, 1),
      delete t.$_popper,
      delete t.$_popperOldShown,
      delete t.$_popperMountTarget;
  }
  t.classList && t.classList.remove(my);
}
function Rv(t, { value: e, modifiers: r }) {
  const o = yy(t, e, r);
  if (!o.content || Pl(o.theme || "tooltip", "disabled")) Yh(t);
  else {
    let s;
    t.$_popper ? ((s = t.$_popper), (s.options.value = o)) : (s = by(t, e, r)),
      typeof e.shown < "u" &&
        e.shown !== t.$_popperOldShown &&
        ((t.$_popperOldShown = e.shown), e.shown ? s.show() : s.hide());
  }
}
const wy = {
  beforeMount: Rv,
  updated: Rv,
  beforeUnmount(t) {
    Yh(t);
  },
};
function zv(t) {
  t.addEventListener("mousedown", wc),
    t.addEventListener("click", wc),
    t.addEventListener("touchstart", xy, ds ? { passive: !0 } : !1);
}
function Fv(t) {
  t.removeEventListener("mousedown", wc),
    t.removeEventListener("click", wc),
    t.removeEventListener("touchstart", xy),
    t.removeEventListener("touchend", _y),
    t.removeEventListener("touchcancel", Sy);
}
function wc(t) {
  const e = t.currentTarget;
  (t.closePopover = !e.$_vclosepopover_touch),
    (t.closeAllPopover =
      e.$_closePopoverModifiers && !!e.$_closePopoverModifiers.all);
}
function xy(t) {
  if (t.changedTouches.length === 1) {
    const e = t.currentTarget;
    e.$_vclosepopover_touch = !0;
    const r = t.changedTouches[0];
    (e.$_vclosepopover_touchPoint = r),
      e.addEventListener("touchend", _y),
      e.addEventListener("touchcancel", Sy);
  }
}
function _y(t) {
  const e = t.currentTarget;
  if (((e.$_vclosepopover_touch = !1), t.changedTouches.length === 1)) {
    const r = t.changedTouches[0],
      o = e.$_vclosepopover_touchPoint;
    (t.closePopover =
      Math.abs(r.screenY - o.screenY) < 20 &&
      Math.abs(r.screenX - o.screenX) < 20),
      (t.closeAllPopover =
        e.$_closePopoverModifiers && !!e.$_closePopoverModifiers.all);
  }
}
function Sy(t) {
  const e = t.currentTarget;
  e.$_vclosepopover_touch = !1;
}
const ZC = {
    beforeMount(t, { value: e, modifiers: r }) {
      (t.$_closePopoverModifiers = r), (typeof e > "u" || e) && zv(t);
    },
    updated(t, { value: e, oldValue: r, modifiers: o }) {
      (t.$_closePopoverModifiers = o),
        e !== r && (typeof e > "u" || e ? zv(t) : Fv(t));
    },
    beforeUnmount(t) {
      Fv(t);
    },
  },
  QC = wy,
  JC = vy;
function tT(t, e = {}) {
  t.$_vTooltipInstalled ||
    ((t.$_vTooltipInstalled = !0),
    ay(cr, e),
    t.directive("tooltip", wy),
    t.directive("close-popper", ZC),
    t.component("VTooltip", vy),
    t.component("VDropdown", qC),
    t.component("VMenu", BC));
}
const ky = { version: "5.2.2", install: tT, options: cr },
  eT = 6e4;
function Cy(t) {
  return t;
}
const nT = Cy,
  { clearTimeout: rT, setTimeout: iT } = globalThis,
  oT = Math.random.bind(Math);
function sT(t, e) {
  const {
      post: r,
      on: o,
      eventNames: s = [],
      serialize: c = Cy,
      deserialize: f = nT,
      resolver: h,
      timeout: d = eT,
    } = e,
    g = new Map();
  let v;
  const y = new Proxy(
    {},
    {
      get(w, _) {
        if (_ === "$functions") return t;
        const N = (...A) => {
          r(c({ m: _, a: A, t: "q" }));
        };
        if (s.includes(_)) return (N.asEvent = N), N;
        const L = async (...A) => (
          await v,
          new Promise((T, M) => {
            var H, K;
            const $ = aT();
            let E;
            d >= 0 &&
              (E =
                (K = (H = iT(() => {
                  var ct;
                  try {
                    throw (
                      ((ct = e.onTimeoutError) == null || ct.call(e, _, A),
                      new Error(`[birpc] timeout on calling "${_}"`))
                    );
                  } catch (Y) {
                    M(Y);
                  }
                  g.delete($);
                }, d)).unref) == null
                  ? void 0
                  : K.call(H)),
              g.set($, { resolve: T, reject: M, timeoutId: E }),
              r(c({ m: _, a: A, i: $, t: "q" }));
          })
        );
        return (L.asEvent = N), L;
      },
    },
  );
  return (
    (v = o(async (w, ..._) => {
      const N = f(w);
      if (N.t === "q") {
        const { m: L, a: A } = N;
        let T, M;
        const $ = h ? h(L, t[L]) : t[L];
        if (!$) M = new Error(`[birpc] function "${L}" not found`);
        else
          try {
            T = await $.apply(y, A);
          } catch (E) {
            M = E;
          }
        N.i &&
          (M && e.onError && e.onError(M, L, A),
          r(c({ t: "s", i: N.i, r: T, e: M }), ..._));
      } else {
        const { i: L, r: A, e: T } = N,
          M = g.get(L);
        M && (rT(M.timeoutId), T ? M.reject(T) : M.resolve(A)), g.delete(L);
      }
    })),
    y
  );
}
const lT = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
function aT(t = 21) {
  let e = "",
    r = t;
  for (; r--; ) e += lT[(oT() * 64) | 0];
  return e;
}
/*! (c) 2020 Andrea Giammarchi */ const { parse: cT, stringify: uT } = JSON,
  { keys: fT } = Object,
  Ol = String,
  Ty = "string",
  Iv = {},
  xc = "object",
  Ey = (t, e) => e,
  hT = (t) => (t instanceof Ol ? Ol(t) : t),
  dT = (t, e) => (typeof e === Ty ? new Ol(e) : e),
  Ly = (t, e, r, o) => {
    const s = [];
    for (let c = fT(r), { length: f } = c, h = 0; h < f; h++) {
      const d = c[h],
        g = r[d];
      if (g instanceof Ol) {
        const v = t[g];
        typeof v === xc && !e.has(v)
          ? (e.add(v), (r[d] = Iv), s.push({ k: d, a: [t, e, v, o] }))
          : (r[d] = o.call(r, d, v));
      } else r[d] !== Iv && (r[d] = o.call(r, d, g));
    }
    for (let { length: c } = s, f = 0; f < c; f++) {
      const { k: h, a: d } = s[f];
      r[h] = o.call(r, h, Ly.apply(null, d));
    }
    return r;
  },
  Hv = (t, e, r) => {
    const o = Ol(e.push(r) - 1);
    return t.set(r, o), o;
  },
  th = (t, e) => {
    const r = cT(t, dT).map(hT),
      o = r[0],
      s = e || Ey,
      c = typeof o === xc && o ? Ly(r, new Set(), o, s) : o;
    return s.call({ "": c }, "", c);
  },
  pT = (t, e, r) => {
    const o =
        e && typeof e === xc
          ? (v, y) => (v === "" || -1 < e.indexOf(v) ? y : void 0)
          : e || Ey,
      s = new Map(),
      c = [],
      f = [];
    let h = +Hv(s, c, o.call({ "": t }, "", t)),
      d = !h;
    for (; h < c.length; ) (d = !0), (f[h] = uT(c[h++], g, r));
    return "[" + f.join(",") + "]";
    function g(v, y) {
      if (d) return (d = !d), y;
      const w = o.call(this, v, y);
      switch (typeof w) {
        case xc:
          if (w === null) return w;
        case Ty:
          return s.get(w) || Hv(s, c, w);
      }
      return w;
    }
  };
function gT(t = "") {
  return !t || !t.includes("\\") ? t : t.replace(/\\/g, "/");
}
const vT = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
function mT() {
  return typeof process < "u" ? process.cwd().replace(/\\/g, "/") : "/";
}
const qv = function (...t) {
  t = t.map((o) => gT(o));
  let e = "",
    r = !1;
  for (let o = t.length - 1; o >= -1 && !r; o--) {
    const s = o >= 0 ? t[o] : mT();
    !s || s.length === 0 || ((e = `${s}/${e}`), (r = Bv(s)));
  }
  return (e = yT(e, !r)), r && !Bv(e) ? `/${e}` : e.length > 0 ? e : ".";
};
function yT(t, e) {
  let r = "",
    o = 0,
    s = -1,
    c = 0,
    f = null;
  for (let h = 0; h <= t.length; ++h) {
    if (h < t.length) f = t[h];
    else {
      if (f === "/") break;
      f = "/";
    }
    if (f === "/") {
      if (!(s === h - 1 || c === 1))
        if (c === 2) {
          if (
            r.length < 2 ||
            o !== 2 ||
            r[r.length - 1] !== "." ||
            r[r.length - 2] !== "."
          ) {
            if (r.length > 2) {
              const d = r.lastIndexOf("/");
              d === -1
                ? ((r = ""), (o = 0))
                : ((r = r.slice(0, d)),
                  (o = r.length - 1 - r.lastIndexOf("/"))),
                (s = h),
                (c = 0);
              continue;
            } else if (r.length > 0) {
              (r = ""), (o = 0), (s = h), (c = 0);
              continue;
            }
          }
          e && ((r += r.length > 0 ? "/.." : ".."), (o = 2));
        } else
          r.length > 0
            ? (r += `/${t.slice(s + 1, h)}`)
            : (r = t.slice(s + 1, h)),
            (o = h - s - 1);
      (s = h), (c = 0);
    } else f === "." && c !== -1 ? ++c : (c = -1);
  }
  return r;
}
const Bv = function (t) {
    return vT.test(t);
  },
  Ay = function (t, e) {
    const r = qv(t).split("/"),
      o = qv(e).split("/"),
      s = [...r];
    for (const c of s) {
      if (o[0] !== c) break;
      r.shift(), o.shift();
    }
    return [...r.map(() => ".."), ...o].join("/");
  };
function bT(t) {
  return typeof AggregateError < "u" && t instanceof AggregateError
    ? !0
    : t instanceof Error && "errors" in t;
}
class My {
  constructor() {
    Vi(this, "filesMap", new Map());
    Vi(this, "pathsSet", new Set());
    Vi(this, "idMap", new Map());
    Vi(this, "taskFileMap", new WeakMap());
    Vi(this, "errorsSet", new Set());
    Vi(this, "processTimeoutCauses", new Set());
  }
  catchError(e, r) {
    if (bT(e)) return e.errors.forEach((s) => this.catchError(s, r));
    e === Object(e) ? (e.type = r) : (e = { type: r, message: e });
    const o = e;
    if (o && typeof o == "object" && o.code === "VITEST_PENDING") {
      const s = this.idMap.get(o.taskId);
      s &&
        ((s.mode = "skip"),
        s.result ?? (s.result = { state: "skip" }),
        (s.result.state = "skip"));
      return;
    }
    this.errorsSet.add(e);
  }
  clearErrors() {
    this.errorsSet.clear();
  }
  getUnhandledErrors() {
    return Array.from(this.errorsSet.values());
  }
  addProcessTimeoutCause(e) {
    this.processTimeoutCauses.add(e);
  }
  getProcessTimeoutCauses() {
    return Array.from(this.processTimeoutCauses.values());
  }
  getPaths() {
    return Array.from(this.pathsSet);
  }
  getFiles(e) {
    return e
      ? e
          .map((r) => this.filesMap.get(r))
          .filter(Boolean)
          .flat()
      : Array.from(this.filesMap.values()).flat();
  }
  getFilepaths() {
    return Array.from(this.filesMap.keys());
  }
  getFailedFilepaths() {
    return this.getFiles()
      .filter((e) => {
        var r;
        return ((r = e.result) == null ? void 0 : r.state) === "fail";
      })
      .map((e) => e.filepath);
  }
  collectPaths(e = []) {
    e.forEach((r) => {
      this.pathsSet.add(r);
    });
  }
  collectFiles(e = []) {
    e.forEach((r) => {
      const s = (this.filesMap.get(r.filepath) || []).filter(
        (c) => c.projectName !== r.projectName,
      );
      s.push(r), this.filesMap.set(r.filepath, s), this.updateId(r);
    });
  }
  clearFiles(e, r = []) {
    const o = e;
    r.forEach((s) => {
      const c = this.filesMap.get(s);
      if (!c) return;
      const f = c.filter((h) => h.projectName !== o.config.name);
      f.length ? this.filesMap.set(s, f) : this.filesMap.delete(s);
    });
  }
  updateId(e) {
    this.idMap.get(e.id) !== e &&
      (this.idMap.set(e.id, e),
      e.type === "suite" &&
        e.tasks.forEach((r) => {
          this.updateId(r);
        }));
  }
  updateTasks(e) {
    for (const [r, o, s] of e) {
      const c = this.idMap.get(r);
      c &&
        ((c.result = o),
        (c.meta = s),
        (o == null ? void 0 : o.state) === "skip" && (c.mode = "skip"));
    }
  }
  updateUserLog(e) {
    const r = e.taskId && this.idMap.get(e.taskId);
    r && (r.logs || (r.logs = []), r.logs.push(e));
  }
  getCountOfFailedTests() {
    return Array.from(this.idMap.values()).filter((e) => {
      var r;
      return ((r = e.result) == null ? void 0 : r.state) === "fail";
    }).length;
  }
  cancelFiles(e, r, o) {
    this.collectFiles(
      e.map((s) => ({
        filepath: s,
        name: Ay(r, s),
        id: s,
        mode: "skip",
        type: "suite",
        result: { state: "skip" },
        meta: {},
        tasks: [],
        projectName: o,
      })),
    );
  }
}
var uo =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : {};
function Ny(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
    ? t.default
    : t;
}
function Py(t) {
  return t != null;
}
function $y(t) {
  return t == null && (t = []), Array.isArray(t) ? t : [t];
}
function wT(t) {
  let e = 0;
  if (t.length === 0) return `${e}`;
  for (let r = 0; r < t.length; r++) {
    const o = t.charCodeAt(r);
    (e = (e << 5) - e + o), (e = e & e);
  }
  return `${e}`;
}
function eh(t) {
  return t.type === "test" || t.type === "custom";
}
function Oy(t) {
  const e = [],
    r = $y(t);
  for (const o of r)
    if (eh(o)) e.push(o);
    else
      for (const s of o.tasks)
        if (eh(s)) e.push(s);
        else {
          const c = Oy(s);
          for (const f of c) e.push(f);
        }
  return e;
}
function Zh(t = []) {
  return $y(t).flatMap((e) => (eh(e) ? [e] : [e, ...Zh(e.tasks)]));
}
function xT(t) {
  const e = [t.name];
  let r = t;
  for (; (r != null && r.suite) || (r != null && r.file); )
    (r = r.suite || r.file), r != null && r.name && e.unshift(r.name);
  return e;
}
function tu(t) {
  return Oy(t).some((e) => {
    var r, o;
    return (o = (r = e.result) == null ? void 0 : r.errors) == null
      ? void 0
      : o.some(
          (s) =>
            typeof (s == null ? void 0 : s.message) == "string" &&
            s.message.match(/Snapshot .* mismatched/),
        );
  });
}
function _T(t, e = {}) {
  const {
    handlers: r = {},
    autoReconnect: o = !0,
    reconnectInterval: s = 2e3,
    reconnectTries: c = 10,
    connectTimeout: f = 6e4,
    reactive: h = (M) => M,
    WebSocketConstructor: d = globalThis.WebSocket,
  } = e;
  let g = c;
  const v = h({
    ws: new d(t),
    state: new My(),
    waitForConnection: T,
    reconnect: L,
  });
  (v.state.filesMap = h(v.state.filesMap)), (v.state.idMap = h(v.state.idMap));
  let y;
  const w = {
      onPathsCollected(M) {
        var $;
        v.state.collectPaths(M),
          ($ = r.onPathsCollected) == null || $.call(r, M);
      },
      onCollected(M) {
        var $;
        v.state.collectFiles(M), ($ = r.onCollected) == null || $.call(r, M);
      },
      onTaskUpdate(M) {
        var $;
        v.state.updateTasks(M), ($ = r.onTaskUpdate) == null || $.call(r, M);
      },
      onUserConsoleLog(M) {
        v.state.updateUserLog(M);
      },
      onFinished(M, $) {
        var E;
        (E = r.onFinished) == null || E.call(r, M, $);
      },
      onFinishedReportCoverage() {
        var M;
        (M = r.onFinishedReportCoverage) == null || M.call(r);
      },
      onCancel(M) {
        var $;
        ($ = r.onCancel) == null || $.call(r, M);
      },
    },
    _ = {
      post: (M) => v.ws.send(M),
      on: (M) => (y = M),
      serialize: pT,
      deserialize: th,
      onTimeoutError(M) {
        throw new Error(`[vitest-ws-client]: Timeout calling "${M}"`);
      },
    };
  v.rpc = sT(w, _);
  let N;
  function L(M = !1) {
    M && (g = c), (v.ws = new d(t)), A();
  }
  function A() {
    (N = new Promise((M, $) => {
      var H, K;
      const E =
        (K =
          (H = setTimeout(() => {
            $(new Error(`Cannot connect to the server in ${f / 1e3} seconds`));
          }, f)) == null
            ? void 0
            : H.unref) == null
          ? void 0
          : K.call(H);
      v.ws.OPEN === v.ws.readyState && M(),
        v.ws.addEventListener("open", () => {
          (g = c), M(), clearTimeout(E);
        });
    })),
      v.ws.addEventListener("message", (M) => {
        y(M.data);
      }),
      v.ws.addEventListener("close", () => {
        (g -= 1), o && g > 0 && setTimeout(L, s);
      });
  }
  A();
  function T() {
    return N;
  }
  return v;
}
const ST = location.port,
  kT = [location.hostname, ST].filter(Boolean).join(":"),
  CT = `${location.protocol === "https:" ? "wss:" : "ws:"}//${kT}/__vitest_api__`,
  Xr = !!window.METADATA_PATH;
var Dy = {},
  Vr = {};
const TT = "Á",
  ET = "á",
  LT = "Ă",
  AT = "ă",
  MT = "∾",
  NT = "∿",
  PT = "∾̳",
  $T = "Â",
  OT = "â",
  DT = "´",
  RT = "А",
  zT = "а",
  FT = "Æ",
  IT = "æ",
  HT = "⁡",
  qT = "𝔄",
  BT = "𝔞",
  WT = "À",
  UT = "à",
  jT = "ℵ",
  GT = "ℵ",
  VT = "Α",
  KT = "α",
  XT = "Ā",
  YT = "ā",
  ZT = "⨿",
  QT = "&",
  JT = "&",
  tE = "⩕",
  eE = "⩓",
  nE = "∧",
  rE = "⩜",
  iE = "⩘",
  oE = "⩚",
  sE = "∠",
  lE = "⦤",
  aE = "∠",
  cE = "⦨",
  uE = "⦩",
  fE = "⦪",
  hE = "⦫",
  dE = "⦬",
  pE = "⦭",
  gE = "⦮",
  vE = "⦯",
  mE = "∡",
  yE = "∟",
  bE = "⊾",
  wE = "⦝",
  xE = "∢",
  _E = "Å",
  SE = "⍼",
  kE = "Ą",
  CE = "ą",
  TE = "𝔸",
  EE = "𝕒",
  LE = "⩯",
  AE = "≈",
  ME = "⩰",
  NE = "≊",
  PE = "≋",
  $E = "'",
  OE = "⁡",
  DE = "≈",
  RE = "≊",
  zE = "Å",
  FE = "å",
  IE = "𝒜",
  HE = "𝒶",
  qE = "≔",
  BE = "*",
  WE = "≈",
  UE = "≍",
  jE = "Ã",
  GE = "ã",
  VE = "Ä",
  KE = "ä",
  XE = "∳",
  YE = "⨑",
  ZE = "≌",
  QE = "϶",
  JE = "‵",
  tL = "∽",
  eL = "⋍",
  nL = "∖",
  rL = "⫧",
  iL = "⊽",
  oL = "⌅",
  sL = "⌆",
  lL = "⌅",
  aL = "⎵",
  cL = "⎶",
  uL = "≌",
  fL = "Б",
  hL = "б",
  dL = "„",
  pL = "∵",
  gL = "∵",
  vL = "∵",
  mL = "⦰",
  yL = "϶",
  bL = "ℬ",
  wL = "ℬ",
  xL = "Β",
  _L = "β",
  SL = "ℶ",
  kL = "≬",
  CL = "𝔅",
  TL = "𝔟",
  EL = "⋂",
  LL = "◯",
  AL = "⋃",
  ML = "⨀",
  NL = "⨁",
  PL = "⨂",
  $L = "⨆",
  OL = "★",
  DL = "▽",
  RL = "△",
  zL = "⨄",
  FL = "⋁",
  IL = "⋀",
  HL = "⤍",
  qL = "⧫",
  BL = "▪",
  WL = "▴",
  UL = "▾",
  jL = "◂",
  GL = "▸",
  VL = "␣",
  KL = "▒",
  XL = "░",
  YL = "▓",
  ZL = "█",
  QL = "=⃥",
  JL = "≡⃥",
  tA = "⫭",
  eA = "⌐",
  nA = "𝔹",
  rA = "𝕓",
  iA = "⊥",
  oA = "⊥",
  sA = "⋈",
  lA = "⧉",
  aA = "┐",
  cA = "╕",
  uA = "╖",
  fA = "╗",
  hA = "┌",
  dA = "╒",
  pA = "╓",
  gA = "╔",
  vA = "─",
  mA = "═",
  yA = "┬",
  bA = "╤",
  wA = "╥",
  xA = "╦",
  _A = "┴",
  SA = "╧",
  kA = "╨",
  CA = "╩",
  TA = "⊟",
  EA = "⊞",
  LA = "⊠",
  AA = "┘",
  MA = "╛",
  NA = "╜",
  PA = "╝",
  $A = "└",
  OA = "╘",
  DA = "╙",
  RA = "╚",
  zA = "│",
  FA = "║",
  IA = "┼",
  HA = "╪",
  qA = "╫",
  BA = "╬",
  WA = "┤",
  UA = "╡",
  jA = "╢",
  GA = "╣",
  VA = "├",
  KA = "╞",
  XA = "╟",
  YA = "╠",
  ZA = "‵",
  QA = "˘",
  JA = "˘",
  tM = "¦",
  eM = "𝒷",
  nM = "ℬ",
  rM = "⁏",
  iM = "∽",
  oM = "⋍",
  sM = "⧅",
  lM = "\\",
  aM = "⟈",
  cM = "•",
  uM = "•",
  fM = "≎",
  hM = "⪮",
  dM = "≏",
  pM = "≎",
  gM = "≏",
  vM = "Ć",
  mM = "ć",
  yM = "⩄",
  bM = "⩉",
  wM = "⩋",
  xM = "∩",
  _M = "⋒",
  SM = "⩇",
  kM = "⩀",
  CM = "ⅅ",
  TM = "∩︀",
  EM = "⁁",
  LM = "ˇ",
  AM = "ℭ",
  MM = "⩍",
  NM = "Č",
  PM = "č",
  $M = "Ç",
  OM = "ç",
  DM = "Ĉ",
  RM = "ĉ",
  zM = "∰",
  FM = "⩌",
  IM = "⩐",
  HM = "Ċ",
  qM = "ċ",
  BM = "¸",
  WM = "¸",
  UM = "⦲",
  jM = "¢",
  GM = "·",
  VM = "·",
  KM = "𝔠",
  XM = "ℭ",
  YM = "Ч",
  ZM = "ч",
  QM = "✓",
  JM = "✓",
  tN = "Χ",
  eN = "χ",
  nN = "ˆ",
  rN = "≗",
  iN = "↺",
  oN = "↻",
  sN = "⊛",
  lN = "⊚",
  aN = "⊝",
  cN = "⊙",
  uN = "®",
  fN = "Ⓢ",
  hN = "⊖",
  dN = "⊕",
  pN = "⊗",
  gN = "○",
  vN = "⧃",
  mN = "≗",
  yN = "⨐",
  bN = "⫯",
  wN = "⧂",
  xN = "∲",
  _N = "”",
  SN = "’",
  kN = "♣",
  CN = "♣",
  TN = ":",
  EN = "∷",
  LN = "⩴",
  AN = "≔",
  MN = "≔",
  NN = ",",
  PN = "@",
  $N = "∁",
  ON = "∘",
  DN = "∁",
  RN = "ℂ",
  zN = "≅",
  FN = "⩭",
  IN = "≡",
  HN = "∮",
  qN = "∯",
  BN = "∮",
  WN = "𝕔",
  UN = "ℂ",
  jN = "∐",
  GN = "∐",
  VN = "©",
  KN = "©",
  XN = "℗",
  YN = "∳",
  ZN = "↵",
  QN = "✗",
  JN = "⨯",
  tP = "𝒞",
  eP = "𝒸",
  nP = "⫏",
  rP = "⫑",
  iP = "⫐",
  oP = "⫒",
  sP = "⋯",
  lP = "⤸",
  aP = "⤵",
  cP = "⋞",
  uP = "⋟",
  fP = "↶",
  hP = "⤽",
  dP = "⩈",
  pP = "⩆",
  gP = "≍",
  vP = "∪",
  mP = "⋓",
  yP = "⩊",
  bP = "⊍",
  wP = "⩅",
  xP = "∪︀",
  _P = "↷",
  SP = "⤼",
  kP = "⋞",
  CP = "⋟",
  TP = "⋎",
  EP = "⋏",
  LP = "¤",
  AP = "↶",
  MP = "↷",
  NP = "⋎",
  PP = "⋏",
  $P = "∲",
  OP = "∱",
  DP = "⌭",
  RP = "†",
  zP = "‡",
  FP = "ℸ",
  IP = "↓",
  HP = "↡",
  qP = "⇓",
  BP = "‐",
  WP = "⫤",
  UP = "⊣",
  jP = "⤏",
  GP = "˝",
  VP = "Ď",
  KP = "ď",
  XP = "Д",
  YP = "д",
  ZP = "‡",
  QP = "⇊",
  JP = "ⅅ",
  t$ = "ⅆ",
  e$ = "⤑",
  n$ = "⩷",
  r$ = "°",
  i$ = "∇",
  o$ = "Δ",
  s$ = "δ",
  l$ = "⦱",
  a$ = "⥿",
  c$ = "𝔇",
  u$ = "𝔡",
  f$ = "⥥",
  h$ = "⇃",
  d$ = "⇂",
  p$ = "´",
  g$ = "˙",
  v$ = "˝",
  m$ = "`",
  y$ = "˜",
  b$ = "⋄",
  w$ = "⋄",
  x$ = "⋄",
  _$ = "♦",
  S$ = "♦",
  k$ = "¨",
  C$ = "ⅆ",
  T$ = "ϝ",
  E$ = "⋲",
  L$ = "÷",
  A$ = "÷",
  M$ = "⋇",
  N$ = "⋇",
  P$ = "Ђ",
  $$ = "ђ",
  O$ = "⌞",
  D$ = "⌍",
  R$ = "$",
  z$ = "𝔻",
  F$ = "𝕕",
  I$ = "¨",
  H$ = "˙",
  q$ = "⃜",
  B$ = "≐",
  W$ = "≑",
  U$ = "≐",
  j$ = "∸",
  G$ = "∔",
  V$ = "⊡",
  K$ = "⌆",
  X$ = "∯",
  Y$ = "¨",
  Z$ = "⇓",
  Q$ = "⇐",
  J$ = "⇔",
  tO = "⫤",
  eO = "⟸",
  nO = "⟺",
  rO = "⟹",
  iO = "⇒",
  oO = "⊨",
  sO = "⇑",
  lO = "⇕",
  aO = "∥",
  cO = "⤓",
  uO = "↓",
  fO = "↓",
  hO = "⇓",
  dO = "⇵",
  pO = "̑",
  gO = "⇊",
  vO = "⇃",
  mO = "⇂",
  yO = "⥐",
  bO = "⥞",
  wO = "⥖",
  xO = "↽",
  _O = "⥟",
  SO = "⥗",
  kO = "⇁",
  CO = "↧",
  TO = "⊤",
  EO = "⤐",
  LO = "⌟",
  AO = "⌌",
  MO = "𝒟",
  NO = "𝒹",
  PO = "Ѕ",
  $O = "ѕ",
  OO = "⧶",
  DO = "Đ",
  RO = "đ",
  zO = "⋱",
  FO = "▿",
  IO = "▾",
  HO = "⇵",
  qO = "⥯",
  BO = "⦦",
  WO = "Џ",
  UO = "џ",
  jO = "⟿",
  GO = "É",
  VO = "é",
  KO = "⩮",
  XO = "Ě",
  YO = "ě",
  ZO = "Ê",
  QO = "ê",
  JO = "≖",
  tD = "≕",
  eD = "Э",
  nD = "э",
  rD = "⩷",
  iD = "Ė",
  oD = "ė",
  sD = "≑",
  lD = "ⅇ",
  aD = "≒",
  cD = "𝔈",
  uD = "𝔢",
  fD = "⪚",
  hD = "È",
  dD = "è",
  pD = "⪖",
  gD = "⪘",
  vD = "⪙",
  mD = "∈",
  yD = "⏧",
  bD = "ℓ",
  wD = "⪕",
  xD = "⪗",
  _D = "Ē",
  SD = "ē",
  kD = "∅",
  CD = "∅",
  TD = "◻",
  ED = "∅",
  LD = "▫",
  AD = " ",
  MD = " ",
  ND = " ",
  PD = "Ŋ",
  $D = "ŋ",
  OD = " ",
  DD = "Ę",
  RD = "ę",
  zD = "𝔼",
  FD = "𝕖",
  ID = "⋕",
  HD = "⧣",
  qD = "⩱",
  BD = "ε",
  WD = "Ε",
  UD = "ε",
  jD = "ϵ",
  GD = "≖",
  VD = "≕",
  KD = "≂",
  XD = "⪖",
  YD = "⪕",
  ZD = "⩵",
  QD = "=",
  JD = "≂",
  tR = "≟",
  eR = "⇌",
  nR = "≡",
  rR = "⩸",
  iR = "⧥",
  oR = "⥱",
  sR = "≓",
  lR = "ℯ",
  aR = "ℰ",
  cR = "≐",
  uR = "⩳",
  fR = "≂",
  hR = "Η",
  dR = "η",
  pR = "Ð",
  gR = "ð",
  vR = "Ë",
  mR = "ë",
  yR = "€",
  bR = "!",
  wR = "∃",
  xR = "∃",
  _R = "ℰ",
  SR = "ⅇ",
  kR = "ⅇ",
  CR = "≒",
  TR = "Ф",
  ER = "ф",
  LR = "♀",
  AR = "ﬃ",
  MR = "ﬀ",
  NR = "ﬄ",
  PR = "𝔉",
  $R = "𝔣",
  OR = "ﬁ",
  DR = "◼",
  RR = "▪",
  zR = "fj",
  FR = "♭",
  IR = "ﬂ",
  HR = "▱",
  qR = "ƒ",
  BR = "𝔽",
  WR = "𝕗",
  UR = "∀",
  jR = "∀",
  GR = "⋔",
  VR = "⫙",
  KR = "ℱ",
  XR = "⨍",
  YR = "½",
  ZR = "⅓",
  QR = "¼",
  JR = "⅕",
  t2 = "⅙",
  e2 = "⅛",
  n2 = "⅔",
  r2 = "⅖",
  i2 = "¾",
  o2 = "⅗",
  s2 = "⅜",
  l2 = "⅘",
  a2 = "⅚",
  c2 = "⅝",
  u2 = "⅞",
  f2 = "⁄",
  h2 = "⌢",
  d2 = "𝒻",
  p2 = "ℱ",
  g2 = "ǵ",
  v2 = "Γ",
  m2 = "γ",
  y2 = "Ϝ",
  b2 = "ϝ",
  w2 = "⪆",
  x2 = "Ğ",
  _2 = "ğ",
  S2 = "Ģ",
  k2 = "Ĝ",
  C2 = "ĝ",
  T2 = "Г",
  E2 = "г",
  L2 = "Ġ",
  A2 = "ġ",
  M2 = "≥",
  N2 = "≧",
  P2 = "⪌",
  $2 = "⋛",
  O2 = "≥",
  D2 = "≧",
  R2 = "⩾",
  z2 = "⪩",
  F2 = "⩾",
  I2 = "⪀",
  H2 = "⪂",
  q2 = "⪄",
  B2 = "⋛︀",
  W2 = "⪔",
  U2 = "𝔊",
  j2 = "𝔤",
  G2 = "≫",
  V2 = "⋙",
  K2 = "⋙",
  X2 = "ℷ",
  Y2 = "Ѓ",
  Z2 = "ѓ",
  Q2 = "⪥",
  J2 = "≷",
  tz = "⪒",
  ez = "⪤",
  nz = "⪊",
  rz = "⪊",
  iz = "⪈",
  oz = "≩",
  sz = "⪈",
  lz = "≩",
  az = "⋧",
  cz = "𝔾",
  uz = "𝕘",
  fz = "`",
  hz = "≥",
  dz = "⋛",
  pz = "≧",
  gz = "⪢",
  vz = "≷",
  mz = "⩾",
  yz = "≳",
  bz = "𝒢",
  wz = "ℊ",
  xz = "≳",
  _z = "⪎",
  Sz = "⪐",
  kz = "⪧",
  Cz = "⩺",
  Tz = ">",
  Ez = ">",
  Lz = "≫",
  Az = "⋗",
  Mz = "⦕",
  Nz = "⩼",
  Pz = "⪆",
  $z = "⥸",
  Oz = "⋗",
  Dz = "⋛",
  Rz = "⪌",
  zz = "≷",
  Fz = "≳",
  Iz = "≩︀",
  Hz = "≩︀",
  qz = "ˇ",
  Bz = " ",
  Wz = "½",
  Uz = "ℋ",
  jz = "Ъ",
  Gz = "ъ",
  Vz = "⥈",
  Kz = "↔",
  Xz = "⇔",
  Yz = "↭",
  Zz = "^",
  Qz = "ℏ",
  Jz = "Ĥ",
  tF = "ĥ",
  eF = "♥",
  nF = "♥",
  rF = "…",
  iF = "⊹",
  oF = "𝔥",
  sF = "ℌ",
  lF = "ℋ",
  aF = "⤥",
  cF = "⤦",
  uF = "⇿",
  fF = "∻",
  hF = "↩",
  dF = "↪",
  pF = "𝕙",
  gF = "ℍ",
  vF = "―",
  mF = "─",
  yF = "𝒽",
  bF = "ℋ",
  wF = "ℏ",
  xF = "Ħ",
  _F = "ħ",
  SF = "≎",
  kF = "≏",
  CF = "⁃",
  TF = "‐",
  EF = "Í",
  LF = "í",
  AF = "⁣",
  MF = "Î",
  NF = "î",
  PF = "И",
  $F = "и",
  OF = "İ",
  DF = "Е",
  RF = "е",
  zF = "¡",
  FF = "⇔",
  IF = "𝔦",
  HF = "ℑ",
  qF = "Ì",
  BF = "ì",
  WF = "ⅈ",
  UF = "⨌",
  jF = "∭",
  GF = "⧜",
  VF = "℩",
  KF = "Ĳ",
  XF = "ĳ",
  YF = "Ī",
  ZF = "ī",
  QF = "ℑ",
  JF = "ⅈ",
  tI = "ℐ",
  eI = "ℑ",
  nI = "ı",
  rI = "ℑ",
  iI = "⊷",
  oI = "Ƶ",
  sI = "⇒",
  lI = "℅",
  aI = "∞",
  cI = "⧝",
  uI = "ı",
  fI = "⊺",
  hI = "∫",
  dI = "∬",
  pI = "ℤ",
  gI = "∫",
  vI = "⊺",
  mI = "⋂",
  yI = "⨗",
  bI = "⨼",
  wI = "⁣",
  xI = "⁢",
  _I = "Ё",
  SI = "ё",
  kI = "Į",
  CI = "į",
  TI = "𝕀",
  EI = "𝕚",
  LI = "Ι",
  AI = "ι",
  MI = "⨼",
  NI = "¿",
  PI = "𝒾",
  $I = "ℐ",
  OI = "∈",
  DI = "⋵",
  RI = "⋹",
  zI = "⋴",
  FI = "⋳",
  II = "∈",
  HI = "⁢",
  qI = "Ĩ",
  BI = "ĩ",
  WI = "І",
  UI = "і",
  jI = "Ï",
  GI = "ï",
  VI = "Ĵ",
  KI = "ĵ",
  XI = "Й",
  YI = "й",
  ZI = "𝔍",
  QI = "𝔧",
  JI = "ȷ",
  tH = "𝕁",
  eH = "𝕛",
  nH = "𝒥",
  rH = "𝒿",
  iH = "Ј",
  oH = "ј",
  sH = "Є",
  lH = "є",
  aH = "Κ",
  cH = "κ",
  uH = "ϰ",
  fH = "Ķ",
  hH = "ķ",
  dH = "К",
  pH = "к",
  gH = "𝔎",
  vH = "𝔨",
  mH = "ĸ",
  yH = "Х",
  bH = "х",
  wH = "Ќ",
  xH = "ќ",
  _H = "𝕂",
  SH = "𝕜",
  kH = "𝒦",
  CH = "𝓀",
  TH = "⇚",
  EH = "Ĺ",
  LH = "ĺ",
  AH = "⦴",
  MH = "ℒ",
  NH = "Λ",
  PH = "λ",
  $H = "⟨",
  OH = "⟪",
  DH = "⦑",
  RH = "⟨",
  zH = "⪅",
  FH = "ℒ",
  IH = "«",
  HH = "⇤",
  qH = "⤟",
  BH = "←",
  WH = "↞",
  UH = "⇐",
  jH = "⤝",
  GH = "↩",
  VH = "↫",
  KH = "⤹",
  XH = "⥳",
  YH = "↢",
  ZH = "⤙",
  QH = "⤛",
  JH = "⪫",
  tq = "⪭",
  eq = "⪭︀",
  nq = "⤌",
  rq = "⤎",
  iq = "❲",
  oq = "{",
  sq = "[",
  lq = "⦋",
  aq = "⦏",
  cq = "⦍",
  uq = "Ľ",
  fq = "ľ",
  hq = "Ļ",
  dq = "ļ",
  pq = "⌈",
  gq = "{",
  vq = "Л",
  mq = "л",
  yq = "⤶",
  bq = "“",
  wq = "„",
  xq = "⥧",
  _q = "⥋",
  Sq = "↲",
  kq = "≤",
  Cq = "≦",
  Tq = "⟨",
  Eq = "⇤",
  Lq = "←",
  Aq = "←",
  Mq = "⇐",
  Nq = "⇆",
  Pq = "↢",
  $q = "⌈",
  Oq = "⟦",
  Dq = "⥡",
  Rq = "⥙",
  zq = "⇃",
  Fq = "⌊",
  Iq = "↽",
  Hq = "↼",
  qq = "⇇",
  Bq = "↔",
  Wq = "↔",
  Uq = "⇔",
  jq = "⇆",
  Gq = "⇋",
  Vq = "↭",
  Kq = "⥎",
  Xq = "↤",
  Yq = "⊣",
  Zq = "⥚",
  Qq = "⋋",
  Jq = "⧏",
  tB = "⊲",
  eB = "⊴",
  nB = "⥑",
  rB = "⥠",
  iB = "⥘",
  oB = "↿",
  sB = "⥒",
  lB = "↼",
  aB = "⪋",
  cB = "⋚",
  uB = "≤",
  fB = "≦",
  hB = "⩽",
  dB = "⪨",
  pB = "⩽",
  gB = "⩿",
  vB = "⪁",
  mB = "⪃",
  yB = "⋚︀",
  bB = "⪓",
  wB = "⪅",
  xB = "⋖",
  _B = "⋚",
  SB = "⪋",
  kB = "⋚",
  CB = "≦",
  TB = "≶",
  EB = "≶",
  LB = "⪡",
  AB = "≲",
  MB = "⩽",
  NB = "≲",
  PB = "⥼",
  $B = "⌊",
  OB = "𝔏",
  DB = "𝔩",
  RB = "≶",
  zB = "⪑",
  FB = "⥢",
  IB = "↽",
  HB = "↼",
  qB = "⥪",
  BB = "▄",
  WB = "Љ",
  UB = "љ",
  jB = "⇇",
  GB = "≪",
  VB = "⋘",
  KB = "⌞",
  XB = "⇚",
  YB = "⥫",
  ZB = "◺",
  QB = "Ŀ",
  JB = "ŀ",
  t3 = "⎰",
  e3 = "⎰",
  n3 = "⪉",
  r3 = "⪉",
  i3 = "⪇",
  o3 = "≨",
  s3 = "⪇",
  l3 = "≨",
  a3 = "⋦",
  c3 = "⟬",
  u3 = "⇽",
  f3 = "⟦",
  h3 = "⟵",
  d3 = "⟵",
  p3 = "⟸",
  g3 = "⟷",
  v3 = "⟷",
  m3 = "⟺",
  y3 = "⟼",
  b3 = "⟶",
  w3 = "⟶",
  x3 = "⟹",
  _3 = "↫",
  S3 = "↬",
  k3 = "⦅",
  C3 = "𝕃",
  T3 = "𝕝",
  E3 = "⨭",
  L3 = "⨴",
  A3 = "∗",
  M3 = "_",
  N3 = "↙",
  P3 = "↘",
  $3 = "◊",
  O3 = "◊",
  D3 = "⧫",
  R3 = "(",
  z3 = "⦓",
  F3 = "⇆",
  I3 = "⌟",
  H3 = "⇋",
  q3 = "⥭",
  B3 = "‎",
  W3 = "⊿",
  U3 = "‹",
  j3 = "𝓁",
  G3 = "ℒ",
  V3 = "↰",
  K3 = "↰",
  X3 = "≲",
  Y3 = "⪍",
  Z3 = "⪏",
  Q3 = "[",
  J3 = "‘",
  t5 = "‚",
  e5 = "Ł",
  n5 = "ł",
  r5 = "⪦",
  i5 = "⩹",
  o5 = "<",
  s5 = "<",
  l5 = "≪",
  a5 = "⋖",
  c5 = "⋋",
  u5 = "⋉",
  f5 = "⥶",
  h5 = "⩻",
  d5 = "◃",
  p5 = "⊴",
  g5 = "◂",
  v5 = "⦖",
  m5 = "⥊",
  y5 = "⥦",
  b5 = "≨︀",
  w5 = "≨︀",
  x5 = "¯",
  _5 = "♂",
  S5 = "✠",
  k5 = "✠",
  C5 = "↦",
  T5 = "↦",
  E5 = "↧",
  L5 = "↤",
  A5 = "↥",
  M5 = "▮",
  N5 = "⨩",
  P5 = "М",
  $5 = "м",
  O5 = "—",
  D5 = "∺",
  R5 = "∡",
  z5 = " ",
  F5 = "ℳ",
  I5 = "𝔐",
  H5 = "𝔪",
  q5 = "℧",
  B5 = "µ",
  W5 = "*",
  U5 = "⫰",
  j5 = "∣",
  G5 = "·",
  V5 = "⊟",
  K5 = "−",
  X5 = "∸",
  Y5 = "⨪",
  Z5 = "∓",
  Q5 = "⫛",
  J5 = "…",
  t8 = "∓",
  e8 = "⊧",
  n8 = "𝕄",
  r8 = "𝕞",
  i8 = "∓",
  o8 = "𝓂",
  s8 = "ℳ",
  l8 = "∾",
  a8 = "Μ",
  c8 = "μ",
  u8 = "⊸",
  f8 = "⊸",
  h8 = "∇",
  d8 = "Ń",
  p8 = "ń",
  g8 = "∠⃒",
  v8 = "≉",
  m8 = "⩰̸",
  y8 = "≋̸",
  b8 = "ŉ",
  w8 = "≉",
  x8 = "♮",
  _8 = "ℕ",
  S8 = "♮",
  k8 = " ",
  C8 = "≎̸",
  T8 = "≏̸",
  E8 = "⩃",
  L8 = "Ň",
  A8 = "ň",
  M8 = "Ņ",
  N8 = "ņ",
  P8 = "≇",
  $8 = "⩭̸",
  O8 = "⩂",
  D8 = "Н",
  R8 = "н",
  z8 = "–",
  F8 = "⤤",
  I8 = "↗",
  H8 = "⇗",
  q8 = "↗",
  B8 = "≠",
  W8 = "≐̸",
  U8 = "​",
  j8 = "​",
  G8 = "​",
  V8 = "​",
  K8 = "≢",
  X8 = "⤨",
  Y8 = "≂̸",
  Z8 = "≫",
  Q8 = "≪",
  J8 = `
`,
  tW = "∄",
  eW = "∄",
  nW = "𝔑",
  rW = "𝔫",
  iW = "≧̸",
  oW = "≱",
  sW = "≱",
  lW = "≧̸",
  aW = "⩾̸",
  cW = "⩾̸",
  uW = "⋙̸",
  fW = "≵",
  hW = "≫⃒",
  dW = "≯",
  pW = "≯",
  gW = "≫̸",
  vW = "↮",
  mW = "⇎",
  yW = "⫲",
  bW = "∋",
  wW = "⋼",
  xW = "⋺",
  _W = "∋",
  SW = "Њ",
  kW = "њ",
  CW = "↚",
  TW = "⇍",
  EW = "‥",
  LW = "≦̸",
  AW = "≰",
  MW = "↚",
  NW = "⇍",
  PW = "↮",
  $W = "⇎",
  OW = "≰",
  DW = "≦̸",
  RW = "⩽̸",
  zW = "⩽̸",
  FW = "≮",
  IW = "⋘̸",
  HW = "≴",
  qW = "≪⃒",
  BW = "≮",
  WW = "⋪",
  UW = "⋬",
  jW = "≪̸",
  GW = "∤",
  VW = "⁠",
  KW = " ",
  XW = "𝕟",
  YW = "ℕ",
  ZW = "⫬",
  QW = "¬",
  JW = "≢",
  tU = "≭",
  eU = "∦",
  nU = "∉",
  rU = "≠",
  iU = "≂̸",
  oU = "∄",
  sU = "≯",
  lU = "≱",
  aU = "≧̸",
  cU = "≫̸",
  uU = "≹",
  fU = "⩾̸",
  hU = "≵",
  dU = "≎̸",
  pU = "≏̸",
  gU = "∉",
  vU = "⋵̸",
  mU = "⋹̸",
  yU = "∉",
  bU = "⋷",
  wU = "⋶",
  xU = "⧏̸",
  _U = "⋪",
  SU = "⋬",
  kU = "≮",
  CU = "≰",
  TU = "≸",
  EU = "≪̸",
  LU = "⩽̸",
  AU = "≴",
  MU = "⪢̸",
  NU = "⪡̸",
  PU = "∌",
  $U = "∌",
  OU = "⋾",
  DU = "⋽",
  RU = "⊀",
  zU = "⪯̸",
  FU = "⋠",
  IU = "∌",
  HU = "⧐̸",
  qU = "⋫",
  BU = "⋭",
  WU = "⊏̸",
  UU = "⋢",
  jU = "⊐̸",
  GU = "⋣",
  VU = "⊂⃒",
  KU = "⊈",
  XU = "⊁",
  YU = "⪰̸",
  ZU = "⋡",
  QU = "≿̸",
  JU = "⊃⃒",
  t4 = "⊉",
  e4 = "≁",
  n4 = "≄",
  r4 = "≇",
  i4 = "≉",
  o4 = "∤",
  s4 = "∦",
  l4 = "∦",
  a4 = "⫽⃥",
  c4 = "∂̸",
  u4 = "⨔",
  f4 = "⊀",
  h4 = "⋠",
  d4 = "⊀",
  p4 = "⪯̸",
  g4 = "⪯̸",
  v4 = "⤳̸",
  m4 = "↛",
  y4 = "⇏",
  b4 = "↝̸",
  w4 = "↛",
  x4 = "⇏",
  _4 = "⋫",
  S4 = "⋭",
  k4 = "⊁",
  C4 = "⋡",
  T4 = "⪰̸",
  E4 = "𝒩",
  L4 = "𝓃",
  A4 = "∤",
  M4 = "∦",
  N4 = "≁",
  P4 = "≄",
  $4 = "≄",
  O4 = "∤",
  D4 = "∦",
  R4 = "⋢",
  z4 = "⋣",
  F4 = "⊄",
  I4 = "⫅̸",
  H4 = "⊈",
  q4 = "⊂⃒",
  B4 = "⊈",
  W4 = "⫅̸",
  U4 = "⊁",
  j4 = "⪰̸",
  G4 = "⊅",
  V4 = "⫆̸",
  K4 = "⊉",
  X4 = "⊃⃒",
  Y4 = "⊉",
  Z4 = "⫆̸",
  Q4 = "≹",
  J4 = "Ñ",
  t6 = "ñ",
  e6 = "≸",
  n6 = "⋪",
  r6 = "⋬",
  i6 = "⋫",
  o6 = "⋭",
  s6 = "Ν",
  l6 = "ν",
  a6 = "#",
  c6 = "№",
  u6 = " ",
  f6 = "≍⃒",
  h6 = "⊬",
  d6 = "⊭",
  p6 = "⊮",
  g6 = "⊯",
  v6 = "≥⃒",
  m6 = ">⃒",
  y6 = "⤄",
  b6 = "⧞",
  w6 = "⤂",
  x6 = "≤⃒",
  _6 = "<⃒",
  S6 = "⊴⃒",
  k6 = "⤃",
  C6 = "⊵⃒",
  T6 = "∼⃒",
  E6 = "⤣",
  L6 = "↖",
  A6 = "⇖",
  M6 = "↖",
  N6 = "⤧",
  P6 = "Ó",
  $6 = "ó",
  O6 = "⊛",
  D6 = "Ô",
  R6 = "ô",
  z6 = "⊚",
  F6 = "О",
  I6 = "о",
  H6 = "⊝",
  q6 = "Ő",
  B6 = "ő",
  W6 = "⨸",
  U6 = "⊙",
  j6 = "⦼",
  G6 = "Œ",
  V6 = "œ",
  K6 = "⦿",
  X6 = "𝔒",
  Y6 = "𝔬",
  Z6 = "˛",
  Q6 = "Ò",
  J6 = "ò",
  tj = "⧁",
  ej = "⦵",
  nj = "Ω",
  rj = "∮",
  ij = "↺",
  oj = "⦾",
  sj = "⦻",
  lj = "‾",
  aj = "⧀",
  cj = "Ō",
  uj = "ō",
  fj = "Ω",
  hj = "ω",
  dj = "Ο",
  pj = "ο",
  gj = "⦶",
  vj = "⊖",
  mj = "𝕆",
  yj = "𝕠",
  bj = "⦷",
  wj = "“",
  xj = "‘",
  _j = "⦹",
  Sj = "⊕",
  kj = "↻",
  Cj = "⩔",
  Tj = "∨",
  Ej = "⩝",
  Lj = "ℴ",
  Aj = "ℴ",
  Mj = "ª",
  Nj = "º",
  Pj = "⊶",
  $j = "⩖",
  Oj = "⩗",
  Dj = "⩛",
  Rj = "Ⓢ",
  zj = "𝒪",
  Fj = "ℴ",
  Ij = "Ø",
  Hj = "ø",
  qj = "⊘",
  Bj = "Õ",
  Wj = "õ",
  Uj = "⨶",
  jj = "⨷",
  Gj = "⊗",
  Vj = "Ö",
  Kj = "ö",
  Xj = "⌽",
  Yj = "‾",
  Zj = "⏞",
  Qj = "⎴",
  Jj = "⏜",
  t9 = "¶",
  e9 = "∥",
  n9 = "∥",
  r9 = "⫳",
  i9 = "⫽",
  o9 = "∂",
  s9 = "∂",
  l9 = "П",
  a9 = "п",
  c9 = "%",
  u9 = ".",
  f9 = "‰",
  h9 = "⊥",
  d9 = "‱",
  p9 = "𝔓",
  g9 = "𝔭",
  v9 = "Φ",
  m9 = "φ",
  y9 = "ϕ",
  b9 = "ℳ",
  w9 = "☎",
  x9 = "Π",
  _9 = "π",
  S9 = "⋔",
  k9 = "ϖ",
  C9 = "ℏ",
  T9 = "ℎ",
  E9 = "ℏ",
  L9 = "⨣",
  A9 = "⊞",
  M9 = "⨢",
  N9 = "+",
  P9 = "∔",
  $9 = "⨥",
  O9 = "⩲",
  D9 = "±",
  R9 = "±",
  z9 = "⨦",
  F9 = "⨧",
  I9 = "±",
  H9 = "ℌ",
  q9 = "⨕",
  B9 = "𝕡",
  W9 = "ℙ",
  U9 = "£",
  j9 = "⪷",
  G9 = "⪻",
  V9 = "≺",
  K9 = "≼",
  X9 = "⪷",
  Y9 = "≺",
  Z9 = "≼",
  Q9 = "≺",
  J9 = "⪯",
  tG = "≼",
  eG = "≾",
  nG = "⪯",
  rG = "⪹",
  iG = "⪵",
  oG = "⋨",
  sG = "⪯",
  lG = "⪳",
  aG = "≾",
  cG = "′",
  uG = "″",
  fG = "ℙ",
  hG = "⪹",
  dG = "⪵",
  pG = "⋨",
  gG = "∏",
  vG = "∏",
  mG = "⌮",
  yG = "⌒",
  bG = "⌓",
  wG = "∝",
  xG = "∝",
  _G = "∷",
  SG = "∝",
  kG = "≾",
  CG = "⊰",
  TG = "𝒫",
  EG = "𝓅",
  LG = "Ψ",
  AG = "ψ",
  MG = " ",
  NG = "𝔔",
  PG = "𝔮",
  $G = "⨌",
  OG = "𝕢",
  DG = "ℚ",
  RG = "⁗",
  zG = "𝒬",
  FG = "𝓆",
  IG = "ℍ",
  HG = "⨖",
  qG = "?",
  BG = "≟",
  WG = '"',
  UG = '"',
  jG = "⇛",
  GG = "∽̱",
  VG = "Ŕ",
  KG = "ŕ",
  XG = "√",
  YG = "⦳",
  ZG = "⟩",
  QG = "⟫",
  JG = "⦒",
  tV = "⦥",
  eV = "⟩",
  nV = "»",
  rV = "⥵",
  iV = "⇥",
  oV = "⤠",
  sV = "⤳",
  lV = "→",
  aV = "↠",
  cV = "⇒",
  uV = "⤞",
  fV = "↪",
  hV = "↬",
  dV = "⥅",
  pV = "⥴",
  gV = "⤖",
  vV = "↣",
  mV = "↝",
  yV = "⤚",
  bV = "⤜",
  wV = "∶",
  xV = "ℚ",
  _V = "⤍",
  SV = "⤏",
  kV = "⤐",
  CV = "❳",
  TV = "}",
  EV = "]",
  LV = "⦌",
  AV = "⦎",
  MV = "⦐",
  NV = "Ř",
  PV = "ř",
  $V = "Ŗ",
  OV = "ŗ",
  DV = "⌉",
  RV = "}",
  zV = "Р",
  FV = "р",
  IV = "⤷",
  HV = "⥩",
  qV = "”",
  BV = "”",
  WV = "↳",
  UV = "ℜ",
  jV = "ℛ",
  GV = "ℜ",
  VV = "ℝ",
  KV = "ℜ",
  XV = "▭",
  YV = "®",
  ZV = "®",
  QV = "∋",
  JV = "⇋",
  t7 = "⥯",
  e7 = "⥽",
  n7 = "⌋",
  r7 = "𝔯",
  i7 = "ℜ",
  o7 = "⥤",
  s7 = "⇁",
  l7 = "⇀",
  a7 = "⥬",
  c7 = "Ρ",
  u7 = "ρ",
  f7 = "ϱ",
  h7 = "⟩",
  d7 = "⇥",
  p7 = "→",
  g7 = "→",
  v7 = "⇒",
  m7 = "⇄",
  y7 = "↣",
  b7 = "⌉",
  w7 = "⟧",
  x7 = "⥝",
  _7 = "⥕",
  S7 = "⇂",
  k7 = "⌋",
  C7 = "⇁",
  T7 = "⇀",
  E7 = "⇄",
  L7 = "⇌",
  A7 = "⇉",
  M7 = "↝",
  N7 = "↦",
  P7 = "⊢",
  $7 = "⥛",
  O7 = "⋌",
  D7 = "⧐",
  R7 = "⊳",
  z7 = "⊵",
  F7 = "⥏",
  I7 = "⥜",
  H7 = "⥔",
  q7 = "↾",
  B7 = "⥓",
  W7 = "⇀",
  U7 = "˚",
  j7 = "≓",
  G7 = "⇄",
  V7 = "⇌",
  K7 = "‏",
  X7 = "⎱",
  Y7 = "⎱",
  Z7 = "⫮",
  Q7 = "⟭",
  J7 = "⇾",
  tK = "⟧",
  eK = "⦆",
  nK = "𝕣",
  rK = "ℝ",
  iK = "⨮",
  oK = "⨵",
  sK = "⥰",
  lK = ")",
  aK = "⦔",
  cK = "⨒",
  uK = "⇉",
  fK = "⇛",
  hK = "›",
  dK = "𝓇",
  pK = "ℛ",
  gK = "↱",
  vK = "↱",
  mK = "]",
  yK = "’",
  bK = "’",
  wK = "⋌",
  xK = "⋊",
  _K = "▹",
  SK = "⊵",
  kK = "▸",
  CK = "⧎",
  TK = "⧴",
  EK = "⥨",
  LK = "℞",
  AK = "Ś",
  MK = "ś",
  NK = "‚",
  PK = "⪸",
  $K = "Š",
  OK = "š",
  DK = "⪼",
  RK = "≻",
  zK = "≽",
  FK = "⪰",
  IK = "⪴",
  HK = "Ş",
  qK = "ş",
  BK = "Ŝ",
  WK = "ŝ",
  UK = "⪺",
  jK = "⪶",
  GK = "⋩",
  VK = "⨓",
  KK = "≿",
  XK = "С",
  YK = "с",
  ZK = "⊡",
  QK = "⋅",
  JK = "⩦",
  tX = "⤥",
  eX = "↘",
  nX = "⇘",
  rX = "↘",
  iX = "§",
  oX = ";",
  sX = "⤩",
  lX = "∖",
  aX = "∖",
  cX = "✶",
  uX = "𝔖",
  fX = "𝔰",
  hX = "⌢",
  dX = "♯",
  pX = "Щ",
  gX = "щ",
  vX = "Ш",
  mX = "ш",
  yX = "↓",
  bX = "←",
  wX = "∣",
  xX = "∥",
  _X = "→",
  SX = "↑",
  kX = "­",
  CX = "Σ",
  TX = "σ",
  EX = "ς",
  LX = "ς",
  AX = "∼",
  MX = "⩪",
  NX = "≃",
  PX = "≃",
  $X = "⪞",
  OX = "⪠",
  DX = "⪝",
  RX = "⪟",
  zX = "≆",
  FX = "⨤",
  IX = "⥲",
  HX = "←",
  qX = "∘",
  BX = "∖",
  WX = "⨳",
  UX = "⧤",
  jX = "∣",
  GX = "⌣",
  VX = "⪪",
  KX = "⪬",
  XX = "⪬︀",
  YX = "Ь",
  ZX = "ь",
  QX = "⌿",
  JX = "⧄",
  tY = "/",
  eY = "𝕊",
  nY = "𝕤",
  rY = "♠",
  iY = "♠",
  oY = "∥",
  sY = "⊓",
  lY = "⊓︀",
  aY = "⊔",
  cY = "⊔︀",
  uY = "√",
  fY = "⊏",
  hY = "⊑",
  dY = "⊏",
  pY = "⊑",
  gY = "⊐",
  vY = "⊒",
  mY = "⊐",
  yY = "⊒",
  bY = "□",
  wY = "□",
  xY = "⊓",
  _Y = "⊏",
  SY = "⊑",
  kY = "⊐",
  CY = "⊒",
  TY = "⊔",
  EY = "▪",
  LY = "□",
  AY = "▪",
  MY = "→",
  NY = "𝒮",
  PY = "𝓈",
  $Y = "∖",
  OY = "⌣",
  DY = "⋆",
  RY = "⋆",
  zY = "☆",
  FY = "★",
  IY = "ϵ",
  HY = "ϕ",
  qY = "¯",
  BY = "⊂",
  WY = "⋐",
  UY = "⪽",
  jY = "⫅",
  GY = "⊆",
  VY = "⫃",
  KY = "⫁",
  XY = "⫋",
  YY = "⊊",
  ZY = "⪿",
  QY = "⥹",
  JY = "⊂",
  tZ = "⋐",
  eZ = "⊆",
  nZ = "⫅",
  rZ = "⊆",
  iZ = "⊊",
  oZ = "⫋",
  sZ = "⫇",
  lZ = "⫕",
  aZ = "⫓",
  cZ = "⪸",
  uZ = "≻",
  fZ = "≽",
  hZ = "≻",
  dZ = "⪰",
  pZ = "≽",
  gZ = "≿",
  vZ = "⪰",
  mZ = "⪺",
  yZ = "⪶",
  bZ = "⋩",
  wZ = "≿",
  xZ = "∋",
  _Z = "∑",
  SZ = "∑",
  kZ = "♪",
  CZ = "¹",
  TZ = "²",
  EZ = "³",
  LZ = "⊃",
  AZ = "⋑",
  MZ = "⪾",
  NZ = "⫘",
  PZ = "⫆",
  $Z = "⊇",
  OZ = "⫄",
  DZ = "⊃",
  RZ = "⊇",
  zZ = "⟉",
  FZ = "⫗",
  IZ = "⥻",
  HZ = "⫂",
  qZ = "⫌",
  BZ = "⊋",
  WZ = "⫀",
  UZ = "⊃",
  jZ = "⋑",
  GZ = "⊇",
  VZ = "⫆",
  KZ = "⊋",
  XZ = "⫌",
  YZ = "⫈",
  ZZ = "⫔",
  QZ = "⫖",
  JZ = "⤦",
  tQ = "↙",
  eQ = "⇙",
  nQ = "↙",
  rQ = "⤪",
  iQ = "ß",
  oQ = "	",
  sQ = "⌖",
  lQ = "Τ",
  aQ = "τ",
  cQ = "⎴",
  uQ = "Ť",
  fQ = "ť",
  hQ = "Ţ",
  dQ = "ţ",
  pQ = "Т",
  gQ = "т",
  vQ = "⃛",
  mQ = "⌕",
  yQ = "𝔗",
  bQ = "𝔱",
  wQ = "∴",
  xQ = "∴",
  _Q = "∴",
  SQ = "Θ",
  kQ = "θ",
  CQ = "ϑ",
  TQ = "ϑ",
  EQ = "≈",
  LQ = "∼",
  AQ = "  ",
  MQ = " ",
  NQ = " ",
  PQ = "≈",
  $Q = "∼",
  OQ = "Þ",
  DQ = "þ",
  RQ = "˜",
  zQ = "∼",
  FQ = "≃",
  IQ = "≅",
  HQ = "≈",
  qQ = "⨱",
  BQ = "⊠",
  WQ = "×",
  UQ = "⨰",
  jQ = "∭",
  GQ = "⤨",
  VQ = "⌶",
  KQ = "⫱",
  XQ = "⊤",
  YQ = "𝕋",
  ZQ = "𝕥",
  QQ = "⫚",
  JQ = "⤩",
  tJ = "‴",
  eJ = "™",
  nJ = "™",
  rJ = "▵",
  iJ = "▿",
  oJ = "◃",
  sJ = "⊴",
  lJ = "≜",
  aJ = "▹",
  cJ = "⊵",
  uJ = "◬",
  fJ = "≜",
  hJ = "⨺",
  dJ = "⃛",
  pJ = "⨹",
  gJ = "⧍",
  vJ = "⨻",
  mJ = "⏢",
  yJ = "𝒯",
  bJ = "𝓉",
  wJ = "Ц",
  xJ = "ц",
  _J = "Ћ",
  SJ = "ћ",
  kJ = "Ŧ",
  CJ = "ŧ",
  TJ = "≬",
  EJ = "↞",
  LJ = "↠",
  AJ = "Ú",
  MJ = "ú",
  NJ = "↑",
  PJ = "↟",
  $J = "⇑",
  OJ = "⥉",
  DJ = "Ў",
  RJ = "ў",
  zJ = "Ŭ",
  FJ = "ŭ",
  IJ = "Û",
  HJ = "û",
  qJ = "У",
  BJ = "у",
  WJ = "⇅",
  UJ = "Ű",
  jJ = "ű",
  GJ = "⥮",
  VJ = "⥾",
  KJ = "𝔘",
  XJ = "𝔲",
  YJ = "Ù",
  ZJ = "ù",
  QJ = "⥣",
  JJ = "↿",
  ttt = "↾",
  ett = "▀",
  ntt = "⌜",
  rtt = "⌜",
  itt = "⌏",
  ott = "◸",
  stt = "Ū",
  ltt = "ū",
  att = "¨",
  ctt = "_",
  utt = "⏟",
  ftt = "⎵",
  htt = "⏝",
  dtt = "⋃",
  ptt = "⊎",
  gtt = "Ų",
  vtt = "ų",
  mtt = "𝕌",
  ytt = "𝕦",
  btt = "⤒",
  wtt = "↑",
  xtt = "↑",
  _tt = "⇑",
  Stt = "⇅",
  ktt = "↕",
  Ctt = "↕",
  Ttt = "⇕",
  Ett = "⥮",
  Ltt = "↿",
  Att = "↾",
  Mtt = "⊎",
  Ntt = "↖",
  Ptt = "↗",
  $tt = "υ",
  Ott = "ϒ",
  Dtt = "ϒ",
  Rtt = "Υ",
  ztt = "υ",
  Ftt = "↥",
  Itt = "⊥",
  Htt = "⇈",
  qtt = "⌝",
  Btt = "⌝",
  Wtt = "⌎",
  Utt = "Ů",
  jtt = "ů",
  Gtt = "◹",
  Vtt = "𝒰",
  Ktt = "𝓊",
  Xtt = "⋰",
  Ytt = "Ũ",
  Ztt = "ũ",
  Qtt = "▵",
  Jtt = "▴",
  tet = "⇈",
  eet = "Ü",
  net = "ü",
  ret = "⦧",
  iet = "⦜",
  oet = "ϵ",
  set = "ϰ",
  aet = "∅",
  cet = "ϕ",
  uet = "ϖ",
  fet = "∝",
  het = "↕",
  det = "⇕",
  pet = "ϱ",
  get = "ς",
  vet = "⊊︀",
  met = "⫋︀",
  yet = "⊋︀",
  bet = "⫌︀",
  wet = "ϑ",
  xet = "⊲",
  _et = "⊳",
  ket = "⫨",
  Cet = "⫫",
  Tet = "⫩",
  Eet = "В",
  Let = "в",
  Aet = "⊢",
  Met = "⊨",
  Net = "⊩",
  Pet = "⊫",
  $et = "⫦",
  Oet = "⊻",
  Det = "∨",
  Ret = "⋁",
  zet = "≚",
  Fet = "⋮",
  Iet = "|",
  Het = "‖",
  qet = "|",
  Bet = "‖",
  Wet = "∣",
  Uet = "|",
  jet = "❘",
  Get = "≀",
  Vet = " ",
  Ket = "𝔙",
  Xet = "𝔳",
  Yet = "⊲",
  Zet = "⊂⃒",
  Qet = "⊃⃒",
  Jet = "𝕍",
  tnt = "𝕧",
  ent = "∝",
  nnt = "⊳",
  rnt = "𝒱",
  int = "𝓋",
  ont = "⫋︀",
  snt = "⊊︀",
  lnt = "⫌︀",
  ant = "⊋︀",
  cnt = "⊪",
  unt = "⦚",
  fnt = "Ŵ",
  hnt = "ŵ",
  dnt = "⩟",
  pnt = "∧",
  gnt = "⋀",
  vnt = "≙",
  mnt = "℘",
  ynt = "𝔚",
  bnt = "𝔴",
  wnt = "𝕎",
  xnt = "𝕨",
  _nt = "℘",
  Snt = "≀",
  knt = "≀",
  Cnt = "𝒲",
  Tnt = "𝓌",
  Ent = "⋂",
  Lnt = "◯",
  Ant = "⋃",
  Mnt = "▽",
  Nnt = "𝔛",
  Pnt = "𝔵",
  $nt = "⟷",
  Ont = "⟺",
  Dnt = "Ξ",
  Rnt = "ξ",
  znt = "⟵",
  Fnt = "⟸",
  Int = "⟼",
  Hnt = "⋻",
  qnt = "⨀",
  Bnt = "𝕏",
  Wnt = "𝕩",
  Unt = "⨁",
  jnt = "⨂",
  Gnt = "⟶",
  Vnt = "⟹",
  Knt = "𝒳",
  Xnt = "𝓍",
  Ynt = "⨆",
  Znt = "⨄",
  Qnt = "△",
  Jnt = "⋁",
  trt = "⋀",
  ert = "Ý",
  nrt = "ý",
  rrt = "Я",
  irt = "я",
  ort = "Ŷ",
  srt = "ŷ",
  lrt = "Ы",
  art = "ы",
  crt = "¥",
  urt = "𝔜",
  frt = "𝔶",
  hrt = "Ї",
  drt = "ї",
  prt = "𝕐",
  grt = "𝕪",
  vrt = "𝒴",
  mrt = "𝓎",
  yrt = "Ю",
  brt = "ю",
  wrt = "ÿ",
  xrt = "Ÿ",
  _rt = "Ź",
  Srt = "ź",
  krt = "Ž",
  Crt = "ž",
  Trt = "З",
  Ert = "з",
  Lrt = "Ż",
  Art = "ż",
  Mrt = "ℨ",
  Nrt = "​",
  Prt = "Ζ",
  $rt = "ζ",
  Ort = "𝔷",
  Drt = "ℨ",
  Rrt = "Ж",
  zrt = "ж",
  Frt = "⇝",
  Irt = "𝕫",
  Hrt = "ℤ",
  qrt = "𝒵",
  Brt = "𝓏",
  Wrt = "‍",
  Urt = "‌",
  Ry = {
    Aacute: TT,
    aacute: ET,
    Abreve: LT,
    abreve: AT,
    ac: MT,
    acd: NT,
    acE: PT,
    Acirc: $T,
    acirc: OT,
    acute: DT,
    Acy: RT,
    acy: zT,
    AElig: FT,
    aelig: IT,
    af: HT,
    Afr: qT,
    afr: BT,
    Agrave: WT,
    agrave: UT,
    alefsym: jT,
    aleph: GT,
    Alpha: VT,
    alpha: KT,
    Amacr: XT,
    amacr: YT,
    amalg: ZT,
    amp: QT,
    AMP: JT,
    andand: tE,
    And: eE,
    and: nE,
    andd: rE,
    andslope: iE,
    andv: oE,
    ang: sE,
    ange: lE,
    angle: aE,
    angmsdaa: cE,
    angmsdab: uE,
    angmsdac: fE,
    angmsdad: hE,
    angmsdae: dE,
    angmsdaf: pE,
    angmsdag: gE,
    angmsdah: vE,
    angmsd: mE,
    angrt: yE,
    angrtvb: bE,
    angrtvbd: wE,
    angsph: xE,
    angst: _E,
    angzarr: SE,
    Aogon: kE,
    aogon: CE,
    Aopf: TE,
    aopf: EE,
    apacir: LE,
    ap: AE,
    apE: ME,
    ape: NE,
    apid: PE,
    apos: $E,
    ApplyFunction: OE,
    approx: DE,
    approxeq: RE,
    Aring: zE,
    aring: FE,
    Ascr: IE,
    ascr: HE,
    Assign: qE,
    ast: BE,
    asymp: WE,
    asympeq: UE,
    Atilde: jE,
    atilde: GE,
    Auml: VE,
    auml: KE,
    awconint: XE,
    awint: YE,
    backcong: ZE,
    backepsilon: QE,
    backprime: JE,
    backsim: tL,
    backsimeq: eL,
    Backslash: nL,
    Barv: rL,
    barvee: iL,
    barwed: oL,
    Barwed: sL,
    barwedge: lL,
    bbrk: aL,
    bbrktbrk: cL,
    bcong: uL,
    Bcy: fL,
    bcy: hL,
    bdquo: dL,
    becaus: pL,
    because: gL,
    Because: vL,
    bemptyv: mL,
    bepsi: yL,
    bernou: bL,
    Bernoullis: wL,
    Beta: xL,
    beta: _L,
    beth: SL,
    between: kL,
    Bfr: CL,
    bfr: TL,
    bigcap: EL,
    bigcirc: LL,
    bigcup: AL,
    bigodot: ML,
    bigoplus: NL,
    bigotimes: PL,
    bigsqcup: $L,
    bigstar: OL,
    bigtriangledown: DL,
    bigtriangleup: RL,
    biguplus: zL,
    bigvee: FL,
    bigwedge: IL,
    bkarow: HL,
    blacklozenge: qL,
    blacksquare: BL,
    blacktriangle: WL,
    blacktriangledown: UL,
    blacktriangleleft: jL,
    blacktriangleright: GL,
    blank: VL,
    blk12: KL,
    blk14: XL,
    blk34: YL,
    block: ZL,
    bne: QL,
    bnequiv: JL,
    bNot: tA,
    bnot: eA,
    Bopf: nA,
    bopf: rA,
    bot: iA,
    bottom: oA,
    bowtie: sA,
    boxbox: lA,
    boxdl: aA,
    boxdL: cA,
    boxDl: uA,
    boxDL: fA,
    boxdr: hA,
    boxdR: dA,
    boxDr: pA,
    boxDR: gA,
    boxh: vA,
    boxH: mA,
    boxhd: yA,
    boxHd: bA,
    boxhD: wA,
    boxHD: xA,
    boxhu: _A,
    boxHu: SA,
    boxhU: kA,
    boxHU: CA,
    boxminus: TA,
    boxplus: EA,
    boxtimes: LA,
    boxul: AA,
    boxuL: MA,
    boxUl: NA,
    boxUL: PA,
    boxur: $A,
    boxuR: OA,
    boxUr: DA,
    boxUR: RA,
    boxv: zA,
    boxV: FA,
    boxvh: IA,
    boxvH: HA,
    boxVh: qA,
    boxVH: BA,
    boxvl: WA,
    boxvL: UA,
    boxVl: jA,
    boxVL: GA,
    boxvr: VA,
    boxvR: KA,
    boxVr: XA,
    boxVR: YA,
    bprime: ZA,
    breve: QA,
    Breve: JA,
    brvbar: tM,
    bscr: eM,
    Bscr: nM,
    bsemi: rM,
    bsim: iM,
    bsime: oM,
    bsolb: sM,
    bsol: lM,
    bsolhsub: aM,
    bull: cM,
    bullet: uM,
    bump: fM,
    bumpE: hM,
    bumpe: dM,
    Bumpeq: pM,
    bumpeq: gM,
    Cacute: vM,
    cacute: mM,
    capand: yM,
    capbrcup: bM,
    capcap: wM,
    cap: xM,
    Cap: _M,
    capcup: SM,
    capdot: kM,
    CapitalDifferentialD: CM,
    caps: TM,
    caret: EM,
    caron: LM,
    Cayleys: AM,
    ccaps: MM,
    Ccaron: NM,
    ccaron: PM,
    Ccedil: $M,
    ccedil: OM,
    Ccirc: DM,
    ccirc: RM,
    Cconint: zM,
    ccups: FM,
    ccupssm: IM,
    Cdot: HM,
    cdot: qM,
    cedil: BM,
    Cedilla: WM,
    cemptyv: UM,
    cent: jM,
    centerdot: GM,
    CenterDot: VM,
    cfr: KM,
    Cfr: XM,
    CHcy: YM,
    chcy: ZM,
    check: QM,
    checkmark: JM,
    Chi: tN,
    chi: eN,
    circ: nN,
    circeq: rN,
    circlearrowleft: iN,
    circlearrowright: oN,
    circledast: sN,
    circledcirc: lN,
    circleddash: aN,
    CircleDot: cN,
    circledR: uN,
    circledS: fN,
    CircleMinus: hN,
    CirclePlus: dN,
    CircleTimes: pN,
    cir: gN,
    cirE: vN,
    cire: mN,
    cirfnint: yN,
    cirmid: bN,
    cirscir: wN,
    ClockwiseContourIntegral: xN,
    CloseCurlyDoubleQuote: _N,
    CloseCurlyQuote: SN,
    clubs: kN,
    clubsuit: CN,
    colon: TN,
    Colon: EN,
    Colone: LN,
    colone: AN,
    coloneq: MN,
    comma: NN,
    commat: PN,
    comp: $N,
    compfn: ON,
    complement: DN,
    complexes: RN,
    cong: zN,
    congdot: FN,
    Congruent: IN,
    conint: HN,
    Conint: qN,
    ContourIntegral: BN,
    copf: WN,
    Copf: UN,
    coprod: jN,
    Coproduct: GN,
    copy: VN,
    COPY: KN,
    copysr: XN,
    CounterClockwiseContourIntegral: YN,
    crarr: ZN,
    cross: QN,
    Cross: JN,
    Cscr: tP,
    cscr: eP,
    csub: nP,
    csube: rP,
    csup: iP,
    csupe: oP,
    ctdot: sP,
    cudarrl: lP,
    cudarrr: aP,
    cuepr: cP,
    cuesc: uP,
    cularr: fP,
    cularrp: hP,
    cupbrcap: dP,
    cupcap: pP,
    CupCap: gP,
    cup: vP,
    Cup: mP,
    cupcup: yP,
    cupdot: bP,
    cupor: wP,
    cups: xP,
    curarr: _P,
    curarrm: SP,
    curlyeqprec: kP,
    curlyeqsucc: CP,
    curlyvee: TP,
    curlywedge: EP,
    curren: LP,
    curvearrowleft: AP,
    curvearrowright: MP,
    cuvee: NP,
    cuwed: PP,
    cwconint: $P,
    cwint: OP,
    cylcty: DP,
    dagger: RP,
    Dagger: zP,
    daleth: FP,
    darr: IP,
    Darr: HP,
    dArr: qP,
    dash: BP,
    Dashv: WP,
    dashv: UP,
    dbkarow: jP,
    dblac: GP,
    Dcaron: VP,
    dcaron: KP,
    Dcy: XP,
    dcy: YP,
    ddagger: ZP,
    ddarr: QP,
    DD: JP,
    dd: t$,
    DDotrahd: e$,
    ddotseq: n$,
    deg: r$,
    Del: i$,
    Delta: o$,
    delta: s$,
    demptyv: l$,
    dfisht: a$,
    Dfr: c$,
    dfr: u$,
    dHar: f$,
    dharl: h$,
    dharr: d$,
    DiacriticalAcute: p$,
    DiacriticalDot: g$,
    DiacriticalDoubleAcute: v$,
    DiacriticalGrave: m$,
    DiacriticalTilde: y$,
    diam: b$,
    diamond: w$,
    Diamond: x$,
    diamondsuit: _$,
    diams: S$,
    die: k$,
    DifferentialD: C$,
    digamma: T$,
    disin: E$,
    div: L$,
    divide: A$,
    divideontimes: M$,
    divonx: N$,
    DJcy: P$,
    djcy: $$,
    dlcorn: O$,
    dlcrop: D$,
    dollar: R$,
    Dopf: z$,
    dopf: F$,
    Dot: I$,
    dot: H$,
    DotDot: q$,
    doteq: B$,
    doteqdot: W$,
    DotEqual: U$,
    dotminus: j$,
    dotplus: G$,
    dotsquare: V$,
    doublebarwedge: K$,
    DoubleContourIntegral: X$,
    DoubleDot: Y$,
    DoubleDownArrow: Z$,
    DoubleLeftArrow: Q$,
    DoubleLeftRightArrow: J$,
    DoubleLeftTee: tO,
    DoubleLongLeftArrow: eO,
    DoubleLongLeftRightArrow: nO,
    DoubleLongRightArrow: rO,
    DoubleRightArrow: iO,
    DoubleRightTee: oO,
    DoubleUpArrow: sO,
    DoubleUpDownArrow: lO,
    DoubleVerticalBar: aO,
    DownArrowBar: cO,
    downarrow: uO,
    DownArrow: fO,
    Downarrow: hO,
    DownArrowUpArrow: dO,
    DownBreve: pO,
    downdownarrows: gO,
    downharpoonleft: vO,
    downharpoonright: mO,
    DownLeftRightVector: yO,
    DownLeftTeeVector: bO,
    DownLeftVectorBar: wO,
    DownLeftVector: xO,
    DownRightTeeVector: _O,
    DownRightVectorBar: SO,
    DownRightVector: kO,
    DownTeeArrow: CO,
    DownTee: TO,
    drbkarow: EO,
    drcorn: LO,
    drcrop: AO,
    Dscr: MO,
    dscr: NO,
    DScy: PO,
    dscy: $O,
    dsol: OO,
    Dstrok: DO,
    dstrok: RO,
    dtdot: zO,
    dtri: FO,
    dtrif: IO,
    duarr: HO,
    duhar: qO,
    dwangle: BO,
    DZcy: WO,
    dzcy: UO,
    dzigrarr: jO,
    Eacute: GO,
    eacute: VO,
    easter: KO,
    Ecaron: XO,
    ecaron: YO,
    Ecirc: ZO,
    ecirc: QO,
    ecir: JO,
    ecolon: tD,
    Ecy: eD,
    ecy: nD,
    eDDot: rD,
    Edot: iD,
    edot: oD,
    eDot: sD,
    ee: lD,
    efDot: aD,
    Efr: cD,
    efr: uD,
    eg: fD,
    Egrave: hD,
    egrave: dD,
    egs: pD,
    egsdot: gD,
    el: vD,
    Element: mD,
    elinters: yD,
    ell: bD,
    els: wD,
    elsdot: xD,
    Emacr: _D,
    emacr: SD,
    empty: kD,
    emptyset: CD,
    EmptySmallSquare: TD,
    emptyv: ED,
    EmptyVerySmallSquare: LD,
    emsp13: AD,
    emsp14: MD,
    emsp: ND,
    ENG: PD,
    eng: $D,
    ensp: OD,
    Eogon: DD,
    eogon: RD,
    Eopf: zD,
    eopf: FD,
    epar: ID,
    eparsl: HD,
    eplus: qD,
    epsi: BD,
    Epsilon: WD,
    epsilon: UD,
    epsiv: jD,
    eqcirc: GD,
    eqcolon: VD,
    eqsim: KD,
    eqslantgtr: XD,
    eqslantless: YD,
    Equal: ZD,
    equals: QD,
    EqualTilde: JD,
    equest: tR,
    Equilibrium: eR,
    equiv: nR,
    equivDD: rR,
    eqvparsl: iR,
    erarr: oR,
    erDot: sR,
    escr: lR,
    Escr: aR,
    esdot: cR,
    Esim: uR,
    esim: fR,
    Eta: hR,
    eta: dR,
    ETH: pR,
    eth: gR,
    Euml: vR,
    euml: mR,
    euro: yR,
    excl: bR,
    exist: wR,
    Exists: xR,
    expectation: _R,
    exponentiale: SR,
    ExponentialE: kR,
    fallingdotseq: CR,
    Fcy: TR,
    fcy: ER,
    female: LR,
    ffilig: AR,
    fflig: MR,
    ffllig: NR,
    Ffr: PR,
    ffr: $R,
    filig: OR,
    FilledSmallSquare: DR,
    FilledVerySmallSquare: RR,
    fjlig: zR,
    flat: FR,
    fllig: IR,
    fltns: HR,
    fnof: qR,
    Fopf: BR,
    fopf: WR,
    forall: UR,
    ForAll: jR,
    fork: GR,
    forkv: VR,
    Fouriertrf: KR,
    fpartint: XR,
    frac12: YR,
    frac13: ZR,
    frac14: QR,
    frac15: JR,
    frac16: t2,
    frac18: e2,
    frac23: n2,
    frac25: r2,
    frac34: i2,
    frac35: o2,
    frac38: s2,
    frac45: l2,
    frac56: a2,
    frac58: c2,
    frac78: u2,
    frasl: f2,
    frown: h2,
    fscr: d2,
    Fscr: p2,
    gacute: g2,
    Gamma: v2,
    gamma: m2,
    Gammad: y2,
    gammad: b2,
    gap: w2,
    Gbreve: x2,
    gbreve: _2,
    Gcedil: S2,
    Gcirc: k2,
    gcirc: C2,
    Gcy: T2,
    gcy: E2,
    Gdot: L2,
    gdot: A2,
    ge: M2,
    gE: N2,
    gEl: P2,
    gel: $2,
    geq: O2,
    geqq: D2,
    geqslant: R2,
    gescc: z2,
    ges: F2,
    gesdot: I2,
    gesdoto: H2,
    gesdotol: q2,
    gesl: B2,
    gesles: W2,
    Gfr: U2,
    gfr: j2,
    gg: G2,
    Gg: V2,
    ggg: K2,
    gimel: X2,
    GJcy: Y2,
    gjcy: Z2,
    gla: Q2,
    gl: J2,
    glE: tz,
    glj: ez,
    gnap: nz,
    gnapprox: rz,
    gne: iz,
    gnE: oz,
    gneq: sz,
    gneqq: lz,
    gnsim: az,
    Gopf: cz,
    gopf: uz,
    grave: fz,
    GreaterEqual: hz,
    GreaterEqualLess: dz,
    GreaterFullEqual: pz,
    GreaterGreater: gz,
    GreaterLess: vz,
    GreaterSlantEqual: mz,
    GreaterTilde: yz,
    Gscr: bz,
    gscr: wz,
    gsim: xz,
    gsime: _z,
    gsiml: Sz,
    gtcc: kz,
    gtcir: Cz,
    gt: Tz,
    GT: Ez,
    Gt: Lz,
    gtdot: Az,
    gtlPar: Mz,
    gtquest: Nz,
    gtrapprox: Pz,
    gtrarr: $z,
    gtrdot: Oz,
    gtreqless: Dz,
    gtreqqless: Rz,
    gtrless: zz,
    gtrsim: Fz,
    gvertneqq: Iz,
    gvnE: Hz,
    Hacek: qz,
    hairsp: Bz,
    half: Wz,
    hamilt: Uz,
    HARDcy: jz,
    hardcy: Gz,
    harrcir: Vz,
    harr: Kz,
    hArr: Xz,
    harrw: Yz,
    Hat: Zz,
    hbar: Qz,
    Hcirc: Jz,
    hcirc: tF,
    hearts: eF,
    heartsuit: nF,
    hellip: rF,
    hercon: iF,
    hfr: oF,
    Hfr: sF,
    HilbertSpace: lF,
    hksearow: aF,
    hkswarow: cF,
    hoarr: uF,
    homtht: fF,
    hookleftarrow: hF,
    hookrightarrow: dF,
    hopf: pF,
    Hopf: gF,
    horbar: vF,
    HorizontalLine: mF,
    hscr: yF,
    Hscr: bF,
    hslash: wF,
    Hstrok: xF,
    hstrok: _F,
    HumpDownHump: SF,
    HumpEqual: kF,
    hybull: CF,
    hyphen: TF,
    Iacute: EF,
    iacute: LF,
    ic: AF,
    Icirc: MF,
    icirc: NF,
    Icy: PF,
    icy: $F,
    Idot: OF,
    IEcy: DF,
    iecy: RF,
    iexcl: zF,
    iff: FF,
    ifr: IF,
    Ifr: HF,
    Igrave: qF,
    igrave: BF,
    ii: WF,
    iiiint: UF,
    iiint: jF,
    iinfin: GF,
    iiota: VF,
    IJlig: KF,
    ijlig: XF,
    Imacr: YF,
    imacr: ZF,
    image: QF,
    ImaginaryI: JF,
    imagline: tI,
    imagpart: eI,
    imath: nI,
    Im: rI,
    imof: iI,
    imped: oI,
    Implies: sI,
    incare: lI,
    in: "∈",
    infin: aI,
    infintie: cI,
    inodot: uI,
    intcal: fI,
    int: hI,
    Int: dI,
    integers: pI,
    Integral: gI,
    intercal: vI,
    Intersection: mI,
    intlarhk: yI,
    intprod: bI,
    InvisibleComma: wI,
    InvisibleTimes: xI,
    IOcy: _I,
    iocy: SI,
    Iogon: kI,
    iogon: CI,
    Iopf: TI,
    iopf: EI,
    Iota: LI,
    iota: AI,
    iprod: MI,
    iquest: NI,
    iscr: PI,
    Iscr: $I,
    isin: OI,
    isindot: DI,
    isinE: RI,
    isins: zI,
    isinsv: FI,
    isinv: II,
    it: HI,
    Itilde: qI,
    itilde: BI,
    Iukcy: WI,
    iukcy: UI,
    Iuml: jI,
    iuml: GI,
    Jcirc: VI,
    jcirc: KI,
    Jcy: XI,
    jcy: YI,
    Jfr: ZI,
    jfr: QI,
    jmath: JI,
    Jopf: tH,
    jopf: eH,
    Jscr: nH,
    jscr: rH,
    Jsercy: iH,
    jsercy: oH,
    Jukcy: sH,
    jukcy: lH,
    Kappa: aH,
    kappa: cH,
    kappav: uH,
    Kcedil: fH,
    kcedil: hH,
    Kcy: dH,
    kcy: pH,
    Kfr: gH,
    kfr: vH,
    kgreen: mH,
    KHcy: yH,
    khcy: bH,
    KJcy: wH,
    kjcy: xH,
    Kopf: _H,
    kopf: SH,
    Kscr: kH,
    kscr: CH,
    lAarr: TH,
    Lacute: EH,
    lacute: LH,
    laemptyv: AH,
    lagran: MH,
    Lambda: NH,
    lambda: PH,
    lang: $H,
    Lang: OH,
    langd: DH,
    langle: RH,
    lap: zH,
    Laplacetrf: FH,
    laquo: IH,
    larrb: HH,
    larrbfs: qH,
    larr: BH,
    Larr: WH,
    lArr: UH,
    larrfs: jH,
    larrhk: GH,
    larrlp: VH,
    larrpl: KH,
    larrsim: XH,
    larrtl: YH,
    latail: ZH,
    lAtail: QH,
    lat: JH,
    late: tq,
    lates: eq,
    lbarr: nq,
    lBarr: rq,
    lbbrk: iq,
    lbrace: oq,
    lbrack: sq,
    lbrke: lq,
    lbrksld: aq,
    lbrkslu: cq,
    Lcaron: uq,
    lcaron: fq,
    Lcedil: hq,
    lcedil: dq,
    lceil: pq,
    lcub: gq,
    Lcy: vq,
    lcy: mq,
    ldca: yq,
    ldquo: bq,
    ldquor: wq,
    ldrdhar: xq,
    ldrushar: _q,
    ldsh: Sq,
    le: kq,
    lE: Cq,
    LeftAngleBracket: Tq,
    LeftArrowBar: Eq,
    leftarrow: Lq,
    LeftArrow: Aq,
    Leftarrow: Mq,
    LeftArrowRightArrow: Nq,
    leftarrowtail: Pq,
    LeftCeiling: $q,
    LeftDoubleBracket: Oq,
    LeftDownTeeVector: Dq,
    LeftDownVectorBar: Rq,
    LeftDownVector: zq,
    LeftFloor: Fq,
    leftharpoondown: Iq,
    leftharpoonup: Hq,
    leftleftarrows: qq,
    leftrightarrow: Bq,
    LeftRightArrow: Wq,
    Leftrightarrow: Uq,
    leftrightarrows: jq,
    leftrightharpoons: Gq,
    leftrightsquigarrow: Vq,
    LeftRightVector: Kq,
    LeftTeeArrow: Xq,
    LeftTee: Yq,
    LeftTeeVector: Zq,
    leftthreetimes: Qq,
    LeftTriangleBar: Jq,
    LeftTriangle: tB,
    LeftTriangleEqual: eB,
    LeftUpDownVector: nB,
    LeftUpTeeVector: rB,
    LeftUpVectorBar: iB,
    LeftUpVector: oB,
    LeftVectorBar: sB,
    LeftVector: lB,
    lEg: aB,
    leg: cB,
    leq: uB,
    leqq: fB,
    leqslant: hB,
    lescc: dB,
    les: pB,
    lesdot: gB,
    lesdoto: vB,
    lesdotor: mB,
    lesg: yB,
    lesges: bB,
    lessapprox: wB,
    lessdot: xB,
    lesseqgtr: _B,
    lesseqqgtr: SB,
    LessEqualGreater: kB,
    LessFullEqual: CB,
    LessGreater: TB,
    lessgtr: EB,
    LessLess: LB,
    lesssim: AB,
    LessSlantEqual: MB,
    LessTilde: NB,
    lfisht: PB,
    lfloor: $B,
    Lfr: OB,
    lfr: DB,
    lg: RB,
    lgE: zB,
    lHar: FB,
    lhard: IB,
    lharu: HB,
    lharul: qB,
    lhblk: BB,
    LJcy: WB,
    ljcy: UB,
    llarr: jB,
    ll: GB,
    Ll: VB,
    llcorner: KB,
    Lleftarrow: XB,
    llhard: YB,
    lltri: ZB,
    Lmidot: QB,
    lmidot: JB,
    lmoustache: t3,
    lmoust: e3,
    lnap: n3,
    lnapprox: r3,
    lne: i3,
    lnE: o3,
    lneq: s3,
    lneqq: l3,
    lnsim: a3,
    loang: c3,
    loarr: u3,
    lobrk: f3,
    longleftarrow: h3,
    LongLeftArrow: d3,
    Longleftarrow: p3,
    longleftrightarrow: g3,
    LongLeftRightArrow: v3,
    Longleftrightarrow: m3,
    longmapsto: y3,
    longrightarrow: b3,
    LongRightArrow: w3,
    Longrightarrow: x3,
    looparrowleft: _3,
    looparrowright: S3,
    lopar: k3,
    Lopf: C3,
    lopf: T3,
    loplus: E3,
    lotimes: L3,
    lowast: A3,
    lowbar: M3,
    LowerLeftArrow: N3,
    LowerRightArrow: P3,
    loz: $3,
    lozenge: O3,
    lozf: D3,
    lpar: R3,
    lparlt: z3,
    lrarr: F3,
    lrcorner: I3,
    lrhar: H3,
    lrhard: q3,
    lrm: B3,
    lrtri: W3,
    lsaquo: U3,
    lscr: j3,
    Lscr: G3,
    lsh: V3,
    Lsh: K3,
    lsim: X3,
    lsime: Y3,
    lsimg: Z3,
    lsqb: Q3,
    lsquo: J3,
    lsquor: t5,
    Lstrok: e5,
    lstrok: n5,
    ltcc: r5,
    ltcir: i5,
    lt: o5,
    LT: s5,
    Lt: l5,
    ltdot: a5,
    lthree: c5,
    ltimes: u5,
    ltlarr: f5,
    ltquest: h5,
    ltri: d5,
    ltrie: p5,
    ltrif: g5,
    ltrPar: v5,
    lurdshar: m5,
    luruhar: y5,
    lvertneqq: b5,
    lvnE: w5,
    macr: x5,
    male: _5,
    malt: S5,
    maltese: k5,
    Map: "⤅",
    map: C5,
    mapsto: T5,
    mapstodown: E5,
    mapstoleft: L5,
    mapstoup: A5,
    marker: M5,
    mcomma: N5,
    Mcy: P5,
    mcy: $5,
    mdash: O5,
    mDDot: D5,
    measuredangle: R5,
    MediumSpace: z5,
    Mellintrf: F5,
    Mfr: I5,
    mfr: H5,
    mho: q5,
    micro: B5,
    midast: W5,
    midcir: U5,
    mid: j5,
    middot: G5,
    minusb: V5,
    minus: K5,
    minusd: X5,
    minusdu: Y5,
    MinusPlus: Z5,
    mlcp: Q5,
    mldr: J5,
    mnplus: t8,
    models: e8,
    Mopf: n8,
    mopf: r8,
    mp: i8,
    mscr: o8,
    Mscr: s8,
    mstpos: l8,
    Mu: a8,
    mu: c8,
    multimap: u8,
    mumap: f8,
    nabla: h8,
    Nacute: d8,
    nacute: p8,
    nang: g8,
    nap: v8,
    napE: m8,
    napid: y8,
    napos: b8,
    napprox: w8,
    natural: x8,
    naturals: _8,
    natur: S8,
    nbsp: k8,
    nbump: C8,
    nbumpe: T8,
    ncap: E8,
    Ncaron: L8,
    ncaron: A8,
    Ncedil: M8,
    ncedil: N8,
    ncong: P8,
    ncongdot: $8,
    ncup: O8,
    Ncy: D8,
    ncy: R8,
    ndash: z8,
    nearhk: F8,
    nearr: I8,
    neArr: H8,
    nearrow: q8,
    ne: B8,
    nedot: W8,
    NegativeMediumSpace: U8,
    NegativeThickSpace: j8,
    NegativeThinSpace: G8,
    NegativeVeryThinSpace: V8,
    nequiv: K8,
    nesear: X8,
    nesim: Y8,
    NestedGreaterGreater: Z8,
    NestedLessLess: Q8,
    NewLine: J8,
    nexist: tW,
    nexists: eW,
    Nfr: nW,
    nfr: rW,
    ngE: iW,
    nge: oW,
    ngeq: sW,
    ngeqq: lW,
    ngeqslant: aW,
    nges: cW,
    nGg: uW,
    ngsim: fW,
    nGt: hW,
    ngt: dW,
    ngtr: pW,
    nGtv: gW,
    nharr: vW,
    nhArr: mW,
    nhpar: yW,
    ni: bW,
    nis: wW,
    nisd: xW,
    niv: _W,
    NJcy: SW,
    njcy: kW,
    nlarr: CW,
    nlArr: TW,
    nldr: EW,
    nlE: LW,
    nle: AW,
    nleftarrow: MW,
    nLeftarrow: NW,
    nleftrightarrow: PW,
    nLeftrightarrow: $W,
    nleq: OW,
    nleqq: DW,
    nleqslant: RW,
    nles: zW,
    nless: FW,
    nLl: IW,
    nlsim: HW,
    nLt: qW,
    nlt: BW,
    nltri: WW,
    nltrie: UW,
    nLtv: jW,
    nmid: GW,
    NoBreak: VW,
    NonBreakingSpace: KW,
    nopf: XW,
    Nopf: YW,
    Not: ZW,
    not: QW,
    NotCongruent: JW,
    NotCupCap: tU,
    NotDoubleVerticalBar: eU,
    NotElement: nU,
    NotEqual: rU,
    NotEqualTilde: iU,
    NotExists: oU,
    NotGreater: sU,
    NotGreaterEqual: lU,
    NotGreaterFullEqual: aU,
    NotGreaterGreater: cU,
    NotGreaterLess: uU,
    NotGreaterSlantEqual: fU,
    NotGreaterTilde: hU,
    NotHumpDownHump: dU,
    NotHumpEqual: pU,
    notin: gU,
    notindot: vU,
    notinE: mU,
    notinva: yU,
    notinvb: bU,
    notinvc: wU,
    NotLeftTriangleBar: xU,
    NotLeftTriangle: _U,
    NotLeftTriangleEqual: SU,
    NotLess: kU,
    NotLessEqual: CU,
    NotLessGreater: TU,
    NotLessLess: EU,
    NotLessSlantEqual: LU,
    NotLessTilde: AU,
    NotNestedGreaterGreater: MU,
    NotNestedLessLess: NU,
    notni: PU,
    notniva: $U,
    notnivb: OU,
    notnivc: DU,
    NotPrecedes: RU,
    NotPrecedesEqual: zU,
    NotPrecedesSlantEqual: FU,
    NotReverseElement: IU,
    NotRightTriangleBar: HU,
    NotRightTriangle: qU,
    NotRightTriangleEqual: BU,
    NotSquareSubset: WU,
    NotSquareSubsetEqual: UU,
    NotSquareSuperset: jU,
    NotSquareSupersetEqual: GU,
    NotSubset: VU,
    NotSubsetEqual: KU,
    NotSucceeds: XU,
    NotSucceedsEqual: YU,
    NotSucceedsSlantEqual: ZU,
    NotSucceedsTilde: QU,
    NotSuperset: JU,
    NotSupersetEqual: t4,
    NotTilde: e4,
    NotTildeEqual: n4,
    NotTildeFullEqual: r4,
    NotTildeTilde: i4,
    NotVerticalBar: o4,
    nparallel: s4,
    npar: l4,
    nparsl: a4,
    npart: c4,
    npolint: u4,
    npr: f4,
    nprcue: h4,
    nprec: d4,
    npreceq: p4,
    npre: g4,
    nrarrc: v4,
    nrarr: m4,
    nrArr: y4,
    nrarrw: b4,
    nrightarrow: w4,
    nRightarrow: x4,
    nrtri: _4,
    nrtrie: S4,
    nsc: k4,
    nsccue: C4,
    nsce: T4,
    Nscr: E4,
    nscr: L4,
    nshortmid: A4,
    nshortparallel: M4,
    nsim: N4,
    nsime: P4,
    nsimeq: $4,
    nsmid: O4,
    nspar: D4,
    nsqsube: R4,
    nsqsupe: z4,
    nsub: F4,
    nsubE: I4,
    nsube: H4,
    nsubset: q4,
    nsubseteq: B4,
    nsubseteqq: W4,
    nsucc: U4,
    nsucceq: j4,
    nsup: G4,
    nsupE: V4,
    nsupe: K4,
    nsupset: X4,
    nsupseteq: Y4,
    nsupseteqq: Z4,
    ntgl: Q4,
    Ntilde: J4,
    ntilde: t6,
    ntlg: e6,
    ntriangleleft: n6,
    ntrianglelefteq: r6,
    ntriangleright: i6,
    ntrianglerighteq: o6,
    Nu: s6,
    nu: l6,
    num: a6,
    numero: c6,
    numsp: u6,
    nvap: f6,
    nvdash: h6,
    nvDash: d6,
    nVdash: p6,
    nVDash: g6,
    nvge: v6,
    nvgt: m6,
    nvHarr: y6,
    nvinfin: b6,
    nvlArr: w6,
    nvle: x6,
    nvlt: _6,
    nvltrie: S6,
    nvrArr: k6,
    nvrtrie: C6,
    nvsim: T6,
    nwarhk: E6,
    nwarr: L6,
    nwArr: A6,
    nwarrow: M6,
    nwnear: N6,
    Oacute: P6,
    oacute: $6,
    oast: O6,
    Ocirc: D6,
    ocirc: R6,
    ocir: z6,
    Ocy: F6,
    ocy: I6,
    odash: H6,
    Odblac: q6,
    odblac: B6,
    odiv: W6,
    odot: U6,
    odsold: j6,
    OElig: G6,
    oelig: V6,
    ofcir: K6,
    Ofr: X6,
    ofr: Y6,
    ogon: Z6,
    Ograve: Q6,
    ograve: J6,
    ogt: tj,
    ohbar: ej,
    ohm: nj,
    oint: rj,
    olarr: ij,
    olcir: oj,
    olcross: sj,
    oline: lj,
    olt: aj,
    Omacr: cj,
    omacr: uj,
    Omega: fj,
    omega: hj,
    Omicron: dj,
    omicron: pj,
    omid: gj,
    ominus: vj,
    Oopf: mj,
    oopf: yj,
    opar: bj,
    OpenCurlyDoubleQuote: wj,
    OpenCurlyQuote: xj,
    operp: _j,
    oplus: Sj,
    orarr: kj,
    Or: Cj,
    or: Tj,
    ord: Ej,
    order: Lj,
    orderof: Aj,
    ordf: Mj,
    ordm: Nj,
    origof: Pj,
    oror: $j,
    orslope: Oj,
    orv: Dj,
    oS: Rj,
    Oscr: zj,
    oscr: Fj,
    Oslash: Ij,
    oslash: Hj,
    osol: qj,
    Otilde: Bj,
    otilde: Wj,
    otimesas: Uj,
    Otimes: jj,
    otimes: Gj,
    Ouml: Vj,
    ouml: Kj,
    ovbar: Xj,
    OverBar: Yj,
    OverBrace: Zj,
    OverBracket: Qj,
    OverParenthesis: Jj,
    para: t9,
    parallel: e9,
    par: n9,
    parsim: r9,
    parsl: i9,
    part: o9,
    PartialD: s9,
    Pcy: l9,
    pcy: a9,
    percnt: c9,
    period: u9,
    permil: f9,
    perp: h9,
    pertenk: d9,
    Pfr: p9,
    pfr: g9,
    Phi: v9,
    phi: m9,
    phiv: y9,
    phmmat: b9,
    phone: w9,
    Pi: x9,
    pi: _9,
    pitchfork: S9,
    piv: k9,
    planck: C9,
    planckh: T9,
    plankv: E9,
    plusacir: L9,
    plusb: A9,
    pluscir: M9,
    plus: N9,
    plusdo: P9,
    plusdu: $9,
    pluse: O9,
    PlusMinus: D9,
    plusmn: R9,
    plussim: z9,
    plustwo: F9,
    pm: I9,
    Poincareplane: H9,
    pointint: q9,
    popf: B9,
    Popf: W9,
    pound: U9,
    prap: j9,
    Pr: G9,
    pr: V9,
    prcue: K9,
    precapprox: X9,
    prec: Y9,
    preccurlyeq: Z9,
    Precedes: Q9,
    PrecedesEqual: J9,
    PrecedesSlantEqual: tG,
    PrecedesTilde: eG,
    preceq: nG,
    precnapprox: rG,
    precneqq: iG,
    precnsim: oG,
    pre: sG,
    prE: lG,
    precsim: aG,
    prime: cG,
    Prime: uG,
    primes: fG,
    prnap: hG,
    prnE: dG,
    prnsim: pG,
    prod: gG,
    Product: vG,
    profalar: mG,
    profline: yG,
    profsurf: bG,
    prop: wG,
    Proportional: xG,
    Proportion: _G,
    propto: SG,
    prsim: kG,
    prurel: CG,
    Pscr: TG,
    pscr: EG,
    Psi: LG,
    psi: AG,
    puncsp: MG,
    Qfr: NG,
    qfr: PG,
    qint: $G,
    qopf: OG,
    Qopf: DG,
    qprime: RG,
    Qscr: zG,
    qscr: FG,
    quaternions: IG,
    quatint: HG,
    quest: qG,
    questeq: BG,
    quot: WG,
    QUOT: UG,
    rAarr: jG,
    race: GG,
    Racute: VG,
    racute: KG,
    radic: XG,
    raemptyv: YG,
    rang: ZG,
    Rang: QG,
    rangd: JG,
    range: tV,
    rangle: eV,
    raquo: nV,
    rarrap: rV,
    rarrb: iV,
    rarrbfs: oV,
    rarrc: sV,
    rarr: lV,
    Rarr: aV,
    rArr: cV,
    rarrfs: uV,
    rarrhk: fV,
    rarrlp: hV,
    rarrpl: dV,
    rarrsim: pV,
    Rarrtl: gV,
    rarrtl: vV,
    rarrw: mV,
    ratail: yV,
    rAtail: bV,
    ratio: wV,
    rationals: xV,
    rbarr: _V,
    rBarr: SV,
    RBarr: kV,
    rbbrk: CV,
    rbrace: TV,
    rbrack: EV,
    rbrke: LV,
    rbrksld: AV,
    rbrkslu: MV,
    Rcaron: NV,
    rcaron: PV,
    Rcedil: $V,
    rcedil: OV,
    rceil: DV,
    rcub: RV,
    Rcy: zV,
    rcy: FV,
    rdca: IV,
    rdldhar: HV,
    rdquo: qV,
    rdquor: BV,
    rdsh: WV,
    real: UV,
    realine: jV,
    realpart: GV,
    reals: VV,
    Re: KV,
    rect: XV,
    reg: YV,
    REG: ZV,
    ReverseElement: QV,
    ReverseEquilibrium: JV,
    ReverseUpEquilibrium: t7,
    rfisht: e7,
    rfloor: n7,
    rfr: r7,
    Rfr: i7,
    rHar: o7,
    rhard: s7,
    rharu: l7,
    rharul: a7,
    Rho: c7,
    rho: u7,
    rhov: f7,
    RightAngleBracket: h7,
    RightArrowBar: d7,
    rightarrow: p7,
    RightArrow: g7,
    Rightarrow: v7,
    RightArrowLeftArrow: m7,
    rightarrowtail: y7,
    RightCeiling: b7,
    RightDoubleBracket: w7,
    RightDownTeeVector: x7,
    RightDownVectorBar: _7,
    RightDownVector: S7,
    RightFloor: k7,
    rightharpoondown: C7,
    rightharpoonup: T7,
    rightleftarrows: E7,
    rightleftharpoons: L7,
    rightrightarrows: A7,
    rightsquigarrow: M7,
    RightTeeArrow: N7,
    RightTee: P7,
    RightTeeVector: $7,
    rightthreetimes: O7,
    RightTriangleBar: D7,
    RightTriangle: R7,
    RightTriangleEqual: z7,
    RightUpDownVector: F7,
    RightUpTeeVector: I7,
    RightUpVectorBar: H7,
    RightUpVector: q7,
    RightVectorBar: B7,
    RightVector: W7,
    ring: U7,
    risingdotseq: j7,
    rlarr: G7,
    rlhar: V7,
    rlm: K7,
    rmoustache: X7,
    rmoust: Y7,
    rnmid: Z7,
    roang: Q7,
    roarr: J7,
    robrk: tK,
    ropar: eK,
    ropf: nK,
    Ropf: rK,
    roplus: iK,
    rotimes: oK,
    RoundImplies: sK,
    rpar: lK,
    rpargt: aK,
    rppolint: cK,
    rrarr: uK,
    Rrightarrow: fK,
    rsaquo: hK,
    rscr: dK,
    Rscr: pK,
    rsh: gK,
    Rsh: vK,
    rsqb: mK,
    rsquo: yK,
    rsquor: bK,
    rthree: wK,
    rtimes: xK,
    rtri: _K,
    rtrie: SK,
    rtrif: kK,
    rtriltri: CK,
    RuleDelayed: TK,
    ruluhar: EK,
    rx: LK,
    Sacute: AK,
    sacute: MK,
    sbquo: NK,
    scap: PK,
    Scaron: $K,
    scaron: OK,
    Sc: DK,
    sc: RK,
    sccue: zK,
    sce: FK,
    scE: IK,
    Scedil: HK,
    scedil: qK,
    Scirc: BK,
    scirc: WK,
    scnap: UK,
    scnE: jK,
    scnsim: GK,
    scpolint: VK,
    scsim: KK,
    Scy: XK,
    scy: YK,
    sdotb: ZK,
    sdot: QK,
    sdote: JK,
    searhk: tX,
    searr: eX,
    seArr: nX,
    searrow: rX,
    sect: iX,
    semi: oX,
    seswar: sX,
    setminus: lX,
    setmn: aX,
    sext: cX,
    Sfr: uX,
    sfr: fX,
    sfrown: hX,
    sharp: dX,
    SHCHcy: pX,
    shchcy: gX,
    SHcy: vX,
    shcy: mX,
    ShortDownArrow: yX,
    ShortLeftArrow: bX,
    shortmid: wX,
    shortparallel: xX,
    ShortRightArrow: _X,
    ShortUpArrow: SX,
    shy: kX,
    Sigma: CX,
    sigma: TX,
    sigmaf: EX,
    sigmav: LX,
    sim: AX,
    simdot: MX,
    sime: NX,
    simeq: PX,
    simg: $X,
    simgE: OX,
    siml: DX,
    simlE: RX,
    simne: zX,
    simplus: FX,
    simrarr: IX,
    slarr: HX,
    SmallCircle: qX,
    smallsetminus: BX,
    smashp: WX,
    smeparsl: UX,
    smid: jX,
    smile: GX,
    smt: VX,
    smte: KX,
    smtes: XX,
    SOFTcy: YX,
    softcy: ZX,
    solbar: QX,
    solb: JX,
    sol: tY,
    Sopf: eY,
    sopf: nY,
    spades: rY,
    spadesuit: iY,
    spar: oY,
    sqcap: sY,
    sqcaps: lY,
    sqcup: aY,
    sqcups: cY,
    Sqrt: uY,
    sqsub: fY,
    sqsube: hY,
    sqsubset: dY,
    sqsubseteq: pY,
    sqsup: gY,
    sqsupe: vY,
    sqsupset: mY,
    sqsupseteq: yY,
    square: bY,
    Square: wY,
    SquareIntersection: xY,
    SquareSubset: _Y,
    SquareSubsetEqual: SY,
    SquareSuperset: kY,
    SquareSupersetEqual: CY,
    SquareUnion: TY,
    squarf: EY,
    squ: LY,
    squf: AY,
    srarr: MY,
    Sscr: NY,
    sscr: PY,
    ssetmn: $Y,
    ssmile: OY,
    sstarf: DY,
    Star: RY,
    star: zY,
    starf: FY,
    straightepsilon: IY,
    straightphi: HY,
    strns: qY,
    sub: BY,
    Sub: WY,
    subdot: UY,
    subE: jY,
    sube: GY,
    subedot: VY,
    submult: KY,
    subnE: XY,
    subne: YY,
    subplus: ZY,
    subrarr: QY,
    subset: JY,
    Subset: tZ,
    subseteq: eZ,
    subseteqq: nZ,
    SubsetEqual: rZ,
    subsetneq: iZ,
    subsetneqq: oZ,
    subsim: sZ,
    subsub: lZ,
    subsup: aZ,
    succapprox: cZ,
    succ: uZ,
    succcurlyeq: fZ,
    Succeeds: hZ,
    SucceedsEqual: dZ,
    SucceedsSlantEqual: pZ,
    SucceedsTilde: gZ,
    succeq: vZ,
    succnapprox: mZ,
    succneqq: yZ,
    succnsim: bZ,
    succsim: wZ,
    SuchThat: xZ,
    sum: _Z,
    Sum: SZ,
    sung: kZ,
    sup1: CZ,
    sup2: TZ,
    sup3: EZ,
    sup: LZ,
    Sup: AZ,
    supdot: MZ,
    supdsub: NZ,
    supE: PZ,
    supe: $Z,
    supedot: OZ,
    Superset: DZ,
    SupersetEqual: RZ,
    suphsol: zZ,
    suphsub: FZ,
    suplarr: IZ,
    supmult: HZ,
    supnE: qZ,
    supne: BZ,
    supplus: WZ,
    supset: UZ,
    Supset: jZ,
    supseteq: GZ,
    supseteqq: VZ,
    supsetneq: KZ,
    supsetneqq: XZ,
    supsim: YZ,
    supsub: ZZ,
    supsup: QZ,
    swarhk: JZ,
    swarr: tQ,
    swArr: eQ,
    swarrow: nQ,
    swnwar: rQ,
    szlig: iQ,
    Tab: oQ,
    target: sQ,
    Tau: lQ,
    tau: aQ,
    tbrk: cQ,
    Tcaron: uQ,
    tcaron: fQ,
    Tcedil: hQ,
    tcedil: dQ,
    Tcy: pQ,
    tcy: gQ,
    tdot: vQ,
    telrec: mQ,
    Tfr: yQ,
    tfr: bQ,
    there4: wQ,
    therefore: xQ,
    Therefore: _Q,
    Theta: SQ,
    theta: kQ,
    thetasym: CQ,
    thetav: TQ,
    thickapprox: EQ,
    thicksim: LQ,
    ThickSpace: AQ,
    ThinSpace: MQ,
    thinsp: NQ,
    thkap: PQ,
    thksim: $Q,
    THORN: OQ,
    thorn: DQ,
    tilde: RQ,
    Tilde: zQ,
    TildeEqual: FQ,
    TildeFullEqual: IQ,
    TildeTilde: HQ,
    timesbar: qQ,
    timesb: BQ,
    times: WQ,
    timesd: UQ,
    tint: jQ,
    toea: GQ,
    topbot: VQ,
    topcir: KQ,
    top: XQ,
    Topf: YQ,
    topf: ZQ,
    topfork: QQ,
    tosa: JQ,
    tprime: tJ,
    trade: eJ,
    TRADE: nJ,
    triangle: rJ,
    triangledown: iJ,
    triangleleft: oJ,
    trianglelefteq: sJ,
    triangleq: lJ,
    triangleright: aJ,
    trianglerighteq: cJ,
    tridot: uJ,
    trie: fJ,
    triminus: hJ,
    TripleDot: dJ,
    triplus: pJ,
    trisb: gJ,
    tritime: vJ,
    trpezium: mJ,
    Tscr: yJ,
    tscr: bJ,
    TScy: wJ,
    tscy: xJ,
    TSHcy: _J,
    tshcy: SJ,
    Tstrok: kJ,
    tstrok: CJ,
    twixt: TJ,
    twoheadleftarrow: EJ,
    twoheadrightarrow: LJ,
    Uacute: AJ,
    uacute: MJ,
    uarr: NJ,
    Uarr: PJ,
    uArr: $J,
    Uarrocir: OJ,
    Ubrcy: DJ,
    ubrcy: RJ,
    Ubreve: zJ,
    ubreve: FJ,
    Ucirc: IJ,
    ucirc: HJ,
    Ucy: qJ,
    ucy: BJ,
    udarr: WJ,
    Udblac: UJ,
    udblac: jJ,
    udhar: GJ,
    ufisht: VJ,
    Ufr: KJ,
    ufr: XJ,
    Ugrave: YJ,
    ugrave: ZJ,
    uHar: QJ,
    uharl: JJ,
    uharr: ttt,
    uhblk: ett,
    ulcorn: ntt,
    ulcorner: rtt,
    ulcrop: itt,
    ultri: ott,
    Umacr: stt,
    umacr: ltt,
    uml: att,
    UnderBar: ctt,
    UnderBrace: utt,
    UnderBracket: ftt,
    UnderParenthesis: htt,
    Union: dtt,
    UnionPlus: ptt,
    Uogon: gtt,
    uogon: vtt,
    Uopf: mtt,
    uopf: ytt,
    UpArrowBar: btt,
    uparrow: wtt,
    UpArrow: xtt,
    Uparrow: _tt,
    UpArrowDownArrow: Stt,
    updownarrow: ktt,
    UpDownArrow: Ctt,
    Updownarrow: Ttt,
    UpEquilibrium: Ett,
    upharpoonleft: Ltt,
    upharpoonright: Att,
    uplus: Mtt,
    UpperLeftArrow: Ntt,
    UpperRightArrow: Ptt,
    upsi: $tt,
    Upsi: Ott,
    upsih: Dtt,
    Upsilon: Rtt,
    upsilon: ztt,
    UpTeeArrow: Ftt,
    UpTee: Itt,
    upuparrows: Htt,
    urcorn: qtt,
    urcorner: Btt,
    urcrop: Wtt,
    Uring: Utt,
    uring: jtt,
    urtri: Gtt,
    Uscr: Vtt,
    uscr: Ktt,
    utdot: Xtt,
    Utilde: Ytt,
    utilde: Ztt,
    utri: Qtt,
    utrif: Jtt,
    uuarr: tet,
    Uuml: eet,
    uuml: net,
    uwangle: ret,
    vangrt: iet,
    varepsilon: oet,
    varkappa: set,
    varnothing: aet,
    varphi: cet,
    varpi: uet,
    varpropto: fet,
    varr: het,
    vArr: det,
    varrho: pet,
    varsigma: get,
    varsubsetneq: vet,
    varsubsetneqq: met,
    varsupsetneq: yet,
    varsupsetneqq: bet,
    vartheta: wet,
    vartriangleleft: xet,
    vartriangleright: _et,
    vBar: ket,
    Vbar: Cet,
    vBarv: Tet,
    Vcy: Eet,
    vcy: Let,
    vdash: Aet,
    vDash: Met,
    Vdash: Net,
    VDash: Pet,
    Vdashl: $et,
    veebar: Oet,
    vee: Det,
    Vee: Ret,
    veeeq: zet,
    vellip: Fet,
    verbar: Iet,
    Verbar: Het,
    vert: qet,
    Vert: Bet,
    VerticalBar: Wet,
    VerticalLine: Uet,
    VerticalSeparator: jet,
    VerticalTilde: Get,
    VeryThinSpace: Vet,
    Vfr: Ket,
    vfr: Xet,
    vltri: Yet,
    vnsub: Zet,
    vnsup: Qet,
    Vopf: Jet,
    vopf: tnt,
    vprop: ent,
    vrtri: nnt,
    Vscr: rnt,
    vscr: int,
    vsubnE: ont,
    vsubne: snt,
    vsupnE: lnt,
    vsupne: ant,
    Vvdash: cnt,
    vzigzag: unt,
    Wcirc: fnt,
    wcirc: hnt,
    wedbar: dnt,
    wedge: pnt,
    Wedge: gnt,
    wedgeq: vnt,
    weierp: mnt,
    Wfr: ynt,
    wfr: bnt,
    Wopf: wnt,
    wopf: xnt,
    wp: _nt,
    wr: Snt,
    wreath: knt,
    Wscr: Cnt,
    wscr: Tnt,
    xcap: Ent,
    xcirc: Lnt,
    xcup: Ant,
    xdtri: Mnt,
    Xfr: Nnt,
    xfr: Pnt,
    xharr: $nt,
    xhArr: Ont,
    Xi: Dnt,
    xi: Rnt,
    xlarr: znt,
    xlArr: Fnt,
    xmap: Int,
    xnis: Hnt,
    xodot: qnt,
    Xopf: Bnt,
    xopf: Wnt,
    xoplus: Unt,
    xotime: jnt,
    xrarr: Gnt,
    xrArr: Vnt,
    Xscr: Knt,
    xscr: Xnt,
    xsqcup: Ynt,
    xuplus: Znt,
    xutri: Qnt,
    xvee: Jnt,
    xwedge: trt,
    Yacute: ert,
    yacute: nrt,
    YAcy: rrt,
    yacy: irt,
    Ycirc: ort,
    ycirc: srt,
    Ycy: lrt,
    ycy: art,
    yen: crt,
    Yfr: urt,
    yfr: frt,
    YIcy: hrt,
    yicy: drt,
    Yopf: prt,
    yopf: grt,
    Yscr: vrt,
    yscr: mrt,
    YUcy: yrt,
    yucy: brt,
    yuml: wrt,
    Yuml: xrt,
    Zacute: _rt,
    zacute: Srt,
    Zcaron: krt,
    zcaron: Crt,
    Zcy: Trt,
    zcy: Ert,
    Zdot: Lrt,
    zdot: Art,
    zeetrf: Mrt,
    ZeroWidthSpace: Nrt,
    Zeta: Prt,
    zeta: $rt,
    zfr: Ort,
    Zfr: Drt,
    ZHcy: Rrt,
    zhcy: zrt,
    zigrarr: Frt,
    zopf: Irt,
    Zopf: Hrt,
    Zscr: qrt,
    zscr: Brt,
    zwj: Wrt,
    zwnj: Urt,
  },
  jrt = "Á",
  Grt = "á",
  Vrt = "Â",
  Krt = "â",
  Xrt = "´",
  Yrt = "Æ",
  Zrt = "æ",
  Qrt = "À",
  Jrt = "à",
  tit = "&",
  eit = "&",
  nit = "Å",
  rit = "å",
  iit = "Ã",
  oit = "ã",
  sit = "Ä",
  lit = "ä",
  ait = "¦",
  cit = "Ç",
  uit = "ç",
  fit = "¸",
  hit = "¢",
  dit = "©",
  pit = "©",
  git = "¤",
  vit = "°",
  mit = "÷",
  yit = "É",
  bit = "é",
  wit = "Ê",
  xit = "ê",
  _it = "È",
  Sit = "è",
  kit = "Ð",
  Cit = "ð",
  Tit = "Ë",
  Eit = "ë",
  Lit = "½",
  Ait = "¼",
  Mit = "¾",
  Nit = ">",
  Pit = ">",
  $it = "Í",
  Oit = "í",
  Dit = "Î",
  Rit = "î",
  zit = "¡",
  Fit = "Ì",
  Iit = "ì",
  Hit = "¿",
  qit = "Ï",
  Bit = "ï",
  Wit = "«",
  Uit = "<",
  jit = "<",
  Git = "¯",
  Vit = "µ",
  Kit = "·",
  Xit = " ",
  Yit = "¬",
  Zit = "Ñ",
  Qit = "ñ",
  Jit = "Ó",
  tot = "ó",
  eot = "Ô",
  not = "ô",
  rot = "Ò",
  iot = "ò",
  oot = "ª",
  sot = "º",
  lot = "Ø",
  aot = "ø",
  cot = "Õ",
  uot = "õ",
  fot = "Ö",
  hot = "ö",
  dot = "¶",
  pot = "±",
  got = "£",
  vot = '"',
  mot = '"',
  yot = "»",
  bot = "®",
  wot = "®",
  xot = "§",
  _ot = "­",
  Sot = "¹",
  kot = "²",
  Cot = "³",
  Tot = "ß",
  Eot = "Þ",
  Lot = "þ",
  Aot = "×",
  Mot = "Ú",
  Not = "ú",
  Pot = "Û",
  $ot = "û",
  Oot = "Ù",
  Dot = "ù",
  Rot = "¨",
  zot = "Ü",
  Fot = "ü",
  Iot = "Ý",
  Hot = "ý",
  qot = "¥",
  Bot = "ÿ",
  Wot = {
    Aacute: jrt,
    aacute: Grt,
    Acirc: Vrt,
    acirc: Krt,
    acute: Xrt,
    AElig: Yrt,
    aelig: Zrt,
    Agrave: Qrt,
    agrave: Jrt,
    amp: tit,
    AMP: eit,
    Aring: nit,
    aring: rit,
    Atilde: iit,
    atilde: oit,
    Auml: sit,
    auml: lit,
    brvbar: ait,
    Ccedil: cit,
    ccedil: uit,
    cedil: fit,
    cent: hit,
    copy: dit,
    COPY: pit,
    curren: git,
    deg: vit,
    divide: mit,
    Eacute: yit,
    eacute: bit,
    Ecirc: wit,
    ecirc: xit,
    Egrave: _it,
    egrave: Sit,
    ETH: kit,
    eth: Cit,
    Euml: Tit,
    euml: Eit,
    frac12: Lit,
    frac14: Ait,
    frac34: Mit,
    gt: Nit,
    GT: Pit,
    Iacute: $it,
    iacute: Oit,
    Icirc: Dit,
    icirc: Rit,
    iexcl: zit,
    Igrave: Fit,
    igrave: Iit,
    iquest: Hit,
    Iuml: qit,
    iuml: Bit,
    laquo: Wit,
    lt: Uit,
    LT: jit,
    macr: Git,
    micro: Vit,
    middot: Kit,
    nbsp: Xit,
    not: Yit,
    Ntilde: Zit,
    ntilde: Qit,
    Oacute: Jit,
    oacute: tot,
    Ocirc: eot,
    ocirc: not,
    Ograve: rot,
    ograve: iot,
    ordf: oot,
    ordm: sot,
    Oslash: lot,
    oslash: aot,
    Otilde: cot,
    otilde: uot,
    Ouml: fot,
    ouml: hot,
    para: dot,
    plusmn: pot,
    pound: got,
    quot: vot,
    QUOT: mot,
    raquo: yot,
    reg: bot,
    REG: wot,
    sect: xot,
    shy: _ot,
    sup1: Sot,
    sup2: kot,
    sup3: Cot,
    szlig: Tot,
    THORN: Eot,
    thorn: Lot,
    times: Aot,
    Uacute: Mot,
    uacute: Not,
    Ucirc: Pot,
    ucirc: $ot,
    Ugrave: Oot,
    ugrave: Dot,
    uml: Rot,
    Uuml: zot,
    uuml: Fot,
    Yacute: Iot,
    yacute: Hot,
    yen: qot,
    yuml: Bot,
  },
  Uot = "&",
  jot = "'",
  Got = ">",
  Vot = "<",
  Kot = '"',
  zy = { amp: Uot, apos: jot, gt: Got, lt: Vot, quot: Kot };
var Qh = {};
const Xot = {
  0: 65533,
  128: 8364,
  130: 8218,
  131: 402,
  132: 8222,
  133: 8230,
  134: 8224,
  135: 8225,
  136: 710,
  137: 8240,
  138: 352,
  139: 8249,
  140: 338,
  142: 381,
  145: 8216,
  146: 8217,
  147: 8220,
  148: 8221,
  149: 8226,
  150: 8211,
  151: 8212,
  152: 732,
  153: 8482,
  154: 353,
  155: 8250,
  156: 339,
  158: 382,
  159: 376,
};
var Yot =
  (uo && uo.__importDefault) ||
  function (t) {
    return t && t.__esModule ? t : { default: t };
  };
Object.defineProperty(Qh, "__esModule", { value: !0 });
var Wv = Yot(Xot),
  Zot =
    String.fromCodePoint ||
    function (t) {
      var e = "";
      return (
        t > 65535 &&
          ((t -= 65536),
          (e += String.fromCharCode(((t >>> 10) & 1023) | 55296)),
          (t = 56320 | (t & 1023))),
        (e += String.fromCharCode(t)),
        e
      );
    };
function Qot(t) {
  return (t >= 55296 && t <= 57343) || t > 1114111
    ? "�"
    : (t in Wv.default && (t = Wv.default[t]), Zot(t));
}
Qh.default = Qot;
var eu =
  (uo && uo.__importDefault) ||
  function (t) {
    return t && t.__esModule ? t : { default: t };
  };
Object.defineProperty(Vr, "__esModule", { value: !0 });
Vr.decodeHTML = Vr.decodeHTMLStrict = Vr.decodeXML = void 0;
var nh = eu(Ry),
  Jot = eu(Wot),
  tst = eu(zy),
  Uv = eu(Qh),
  est = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
Vr.decodeXML = Fy(tst.default);
Vr.decodeHTMLStrict = Fy(nh.default);
function Fy(t) {
  var e = Iy(t);
  return function (r) {
    return String(r).replace(est, e);
  };
}
var jv = function (t, e) {
  return t < e ? 1 : -1;
};
Vr.decodeHTML = (function () {
  for (
    var t = Object.keys(Jot.default).sort(jv),
      e = Object.keys(nh.default).sort(jv),
      r = 0,
      o = 0;
    r < e.length;
    r++
  )
    t[o] === e[r] ? ((e[r] += ";?"), o++) : (e[r] += ";");
  var s = new RegExp(
      "&(?:" + e.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)",
      "g",
    ),
    c = Iy(nh.default);
  function f(h) {
    return h.substr(-1) !== ";" && (h += ";"), c(h);
  }
  return function (h) {
    return String(h).replace(s, f);
  };
})();
function Iy(t) {
  return function (r) {
    if (r.charAt(1) === "#") {
      var o = r.charAt(2);
      return o === "X" || o === "x"
        ? Uv.default(parseInt(r.substr(3), 16))
        : Uv.default(parseInt(r.substr(2), 10));
    }
    return t[r.slice(1, -1)] || r;
  };
}
var zn = {},
  Hy =
    (uo && uo.__importDefault) ||
    function (t) {
      return t && t.__esModule ? t : { default: t };
    };
Object.defineProperty(zn, "__esModule", { value: !0 });
zn.escapeUTF8 =
  zn.escape =
  zn.encodeNonAsciiHTML =
  zn.encodeHTML =
  zn.encodeXML =
    void 0;
var nst = Hy(zy),
  qy = Wy(nst.default),
  By = Uy(qy);
zn.encodeXML = Vy(qy);
var rst = Hy(Ry),
  Jh = Wy(rst.default),
  ist = Uy(Jh);
zn.encodeHTML = sst(Jh, ist);
zn.encodeNonAsciiHTML = Vy(Jh);
function Wy(t) {
  return Object.keys(t)
    .sort()
    .reduce(function (e, r) {
      return (e[t[r]] = "&" + r + ";"), e;
    }, {});
}
function Uy(t) {
  for (var e = [], r = [], o = 0, s = Object.keys(t); o < s.length; o++) {
    var c = s[o];
    c.length === 1 ? e.push("\\" + c) : r.push(c);
  }
  e.sort();
  for (var f = 0; f < e.length - 1; f++) {
    for (
      var h = f;
      h < e.length - 1 && e[h].charCodeAt(1) + 1 === e[h + 1].charCodeAt(1);
    )
      h += 1;
    var d = 1 + h - f;
    d < 3 || e.splice(f, d, e[f] + "-" + e[h]);
  }
  return r.unshift("[" + e.join("") + "]"), new RegExp(r.join("|"), "g");
}
var jy =
    /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
  ost =
    String.prototype.codePointAt != null
      ? function (t) {
          return t.codePointAt(0);
        }
      : function (t) {
          return (
            (t.charCodeAt(0) - 55296) * 1024 + t.charCodeAt(1) - 56320 + 65536
          );
        };
function nu(t) {
  return (
    "&#x" +
    (t.length > 1 ? ost(t) : t.charCodeAt(0)).toString(16).toUpperCase() +
    ";"
  );
}
function sst(t, e) {
  return function (r) {
    return r
      .replace(e, function (o) {
        return t[o];
      })
      .replace(jy, nu);
  };
}
var Gy = new RegExp(By.source + "|" + jy.source, "g");
function lst(t) {
  return t.replace(Gy, nu);
}
zn.escape = lst;
function ast(t) {
  return t.replace(By, nu);
}
zn.escapeUTF8 = ast;
function Vy(t) {
  return function (e) {
    return e.replace(Gy, function (r) {
      return t[r] || nu(r);
    });
  };
}
(function (t) {
  Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.decodeXMLStrict =
      t.decodeHTML5Strict =
      t.decodeHTML4Strict =
      t.decodeHTML5 =
      t.decodeHTML4 =
      t.decodeHTMLStrict =
      t.decodeHTML =
      t.decodeXML =
      t.encodeHTML5 =
      t.encodeHTML4 =
      t.escapeUTF8 =
      t.escape =
      t.encodeNonAsciiHTML =
      t.encodeHTML =
      t.encodeXML =
      t.encode =
      t.decodeStrict =
      t.decode =
        void 0);
  var e = Vr,
    r = zn;
  function o(d, g) {
    return (!g || g <= 0 ? e.decodeXML : e.decodeHTML)(d);
  }
  t.decode = o;
  function s(d, g) {
    return (!g || g <= 0 ? e.decodeXML : e.decodeHTMLStrict)(d);
  }
  t.decodeStrict = s;
  function c(d, g) {
    return (!g || g <= 0 ? r.encodeXML : r.encodeHTML)(d);
  }
  t.encode = c;
  var f = zn;
  Object.defineProperty(t, "encodeXML", {
    enumerable: !0,
    get: function () {
      return f.encodeXML;
    },
  }),
    Object.defineProperty(t, "encodeHTML", {
      enumerable: !0,
      get: function () {
        return f.encodeHTML;
      },
    }),
    Object.defineProperty(t, "encodeNonAsciiHTML", {
      enumerable: !0,
      get: function () {
        return f.encodeNonAsciiHTML;
      },
    }),
    Object.defineProperty(t, "escape", {
      enumerable: !0,
      get: function () {
        return f.escape;
      },
    }),
    Object.defineProperty(t, "escapeUTF8", {
      enumerable: !0,
      get: function () {
        return f.escapeUTF8;
      },
    }),
    Object.defineProperty(t, "encodeHTML4", {
      enumerable: !0,
      get: function () {
        return f.encodeHTML;
      },
    }),
    Object.defineProperty(t, "encodeHTML5", {
      enumerable: !0,
      get: function () {
        return f.encodeHTML;
      },
    });
  var h = Vr;
  Object.defineProperty(t, "decodeXML", {
    enumerable: !0,
    get: function () {
      return h.decodeXML;
    },
  }),
    Object.defineProperty(t, "decodeHTML", {
      enumerable: !0,
      get: function () {
        return h.decodeHTML;
      },
    }),
    Object.defineProperty(t, "decodeHTMLStrict", {
      enumerable: !0,
      get: function () {
        return h.decodeHTMLStrict;
      },
    }),
    Object.defineProperty(t, "decodeHTML4", {
      enumerable: !0,
      get: function () {
        return h.decodeHTML;
      },
    }),
    Object.defineProperty(t, "decodeHTML5", {
      enumerable: !0,
      get: function () {
        return h.decodeHTML;
      },
    }),
    Object.defineProperty(t, "decodeHTML4Strict", {
      enumerable: !0,
      get: function () {
        return h.decodeHTMLStrict;
      },
    }),
    Object.defineProperty(t, "decodeHTML5Strict", {
      enumerable: !0,
      get: function () {
        return h.decodeHTMLStrict;
      },
    }),
    Object.defineProperty(t, "decodeXMLStrict", {
      enumerable: !0,
      get: function () {
        return h.decodeXML;
      },
    });
})(Dy);
function cst(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Gv(t, e) {
  for (var r = 0; r < e.length; r++) {
    var o = e[r];
    (o.enumerable = o.enumerable || !1),
      (o.configurable = !0),
      "value" in o && (o.writable = !0),
      Object.defineProperty(t, o.key, o);
  }
}
function ust(t, e, r) {
  return e && Gv(t.prototype, e), r && Gv(t, r), t;
}
function Ky(t, e) {
  var r = (typeof Symbol < "u" && t[Symbol.iterator]) || t["@@iterator"];
  if (!r) {
    if (
      Array.isArray(t) ||
      (r = fst(t)) ||
      (e && t && typeof t.length == "number")
    ) {
      r && (t = r);
      var o = 0,
        s = function () {};
      return {
        s,
        n: function () {
          return o >= t.length ? { done: !0 } : { done: !1, value: t[o++] };
        },
        e: function (g) {
          throw g;
        },
        f: s,
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var c = !0,
    f = !1,
    h;
  return {
    s: function () {
      r = r.call(t);
    },
    n: function () {
      var g = r.next();
      return (c = g.done), g;
    },
    e: function (g) {
      (f = !0), (h = g);
    },
    f: function () {
      try {
        !c && r.return != null && r.return();
      } finally {
        if (f) throw h;
      }
    },
  };
}
function fst(t, e) {
  if (t) {
    if (typeof t == "string") return Vv(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (
      (r === "Object" && t.constructor && (r = t.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Vv(t, e);
  }
}
function Vv(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, o = new Array(e); r < e; r++) o[r] = t[r];
  return o;
}
var hst = Dy,
  Kv = {
    fg: "#FFF",
    bg: "#000",
    newline: !1,
    escapeXML: !1,
    stream: !1,
    colors: dst(),
  };
function dst() {
  var t = {
    0: "#000",
    1: "#A00",
    2: "#0A0",
    3: "#A50",
    4: "#00A",
    5: "#A0A",
    6: "#0AA",
    7: "#AAA",
    8: "#555",
    9: "#F55",
    10: "#5F5",
    11: "#FF5",
    12: "#55F",
    13: "#F5F",
    14: "#5FF",
    15: "#FFF",
  };
  return (
    Ia(0, 5).forEach(function (e) {
      Ia(0, 5).forEach(function (r) {
        Ia(0, 5).forEach(function (o) {
          return pst(e, r, o, t);
        });
      });
    }),
    Ia(0, 23).forEach(function (e) {
      var r = e + 232,
        o = Xy(e * 10 + 8);
      t[r] = "#" + o + o + o;
    }),
    t
  );
}
function pst(t, e, r, o) {
  var s = 16 + t * 36 + e * 6 + r,
    c = t > 0 ? t * 40 + 55 : 0,
    f = e > 0 ? e * 40 + 55 : 0,
    h = r > 0 ? r * 40 + 55 : 0;
  o[s] = gst([c, f, h]);
}
function Xy(t) {
  for (var e = t.toString(16); e.length < 2; ) e = "0" + e;
  return e;
}
function gst(t) {
  var e = [],
    r = Ky(t),
    o;
  try {
    for (r.s(); !(o = r.n()).done; ) {
      var s = o.value;
      e.push(Xy(s));
    }
  } catch (c) {
    r.e(c);
  } finally {
    r.f();
  }
  return "#" + e.join("");
}
function Xv(t, e, r, o) {
  var s;
  return (
    e === "text"
      ? (s = bst(r, o))
      : e === "display"
        ? (s = mst(t, r, o))
        : e === "xterm256Foreground"
          ? (s = nc(t, o.colors[r]))
          : e === "xterm256Background"
            ? (s = rc(t, o.colors[r]))
            : e === "rgb" && (s = vst(t, r)),
    s
  );
}
function vst(t, e) {
  e = e.substring(2).slice(0, -1);
  var r = +e.substr(0, 2),
    o = e.substring(5).split(";"),
    s = o
      .map(function (c) {
        return ("0" + Number(c).toString(16)).substr(-2);
      })
      .join("");
  return ec(t, (r === 38 ? "color:#" : "background-color:#") + s);
}
function mst(t, e, r) {
  e = parseInt(e, 10);
  var o = {
      "-1": function () {
        return "<br/>";
      },
      0: function () {
        return t.length && Yy(t);
      },
      1: function () {
        return Si(t, "b");
      },
      3: function () {
        return Si(t, "i");
      },
      4: function () {
        return Si(t, "u");
      },
      8: function () {
        return ec(t, "display:none");
      },
      9: function () {
        return Si(t, "strike");
      },
      22: function () {
        return ec(
          t,
          "font-weight:normal;text-decoration:none;font-style:normal",
        );
      },
      23: function () {
        return Zv(t, "i");
      },
      24: function () {
        return Zv(t, "u");
      },
      39: function () {
        return nc(t, r.fg);
      },
      49: function () {
        return rc(t, r.bg);
      },
      53: function () {
        return ec(t, "text-decoration:overline");
      },
    },
    s;
  return (
    o[e]
      ? (s = o[e]())
      : 4 < e && e < 7
        ? (s = Si(t, "blink"))
        : 29 < e && e < 38
          ? (s = nc(t, r.colors[e - 30]))
          : 39 < e && e < 48
            ? (s = rc(t, r.colors[e - 40]))
            : 89 < e && e < 98
              ? (s = nc(t, r.colors[8 + (e - 90)]))
              : 99 < e && e < 108 && (s = rc(t, r.colors[8 + (e - 100)])),
    s
  );
}
function Yy(t) {
  var e = t.slice(0);
  return (
    (t.length = 0),
    e
      .reverse()
      .map(function (r) {
        return "</" + r + ">";
      })
      .join("")
  );
}
function Ia(t, e) {
  for (var r = [], o = t; o <= e; o++) r.push(o);
  return r;
}
function yst(t) {
  return function (e) {
    return (t === null || e.category !== t) && t !== "all";
  };
}
function Yv(t) {
  t = parseInt(t, 10);
  var e = null;
  return (
    t === 0
      ? (e = "all")
      : t === 1
        ? (e = "bold")
        : 2 < t && t < 5
          ? (e = "underline")
          : 4 < t && t < 7
            ? (e = "blink")
            : t === 8
              ? (e = "hide")
              : t === 9
                ? (e = "strike")
                : (29 < t && t < 38) || t === 39 || (89 < t && t < 98)
                  ? (e = "foreground-color")
                  : ((39 < t && t < 48) || t === 49 || (99 < t && t < 108)) &&
                    (e = "background-color"),
    e
  );
}
function bst(t, e) {
  return e.escapeXML ? hst.encodeXML(t) : t;
}
function Si(t, e, r) {
  return (
    r || (r = ""),
    t.push(e),
    "<".concat(e).concat(r ? ' style="'.concat(r, '"') : "", ">")
  );
}
function ec(t, e) {
  return Si(t, "span", e);
}
function nc(t, e) {
  return Si(t, "span", "color:" + e);
}
function rc(t, e) {
  return Si(t, "span", "background-color:" + e);
}
function Zv(t, e) {
  var r;
  if ((t.slice(-1)[0] === e && (r = t.pop()), r)) return "</" + e + ">";
}
function wst(t, e, r) {
  var o = !1,
    s = 3;
  function c() {
    return "";
  }
  function f(H, K) {
    return r("xterm256Foreground", K), "";
  }
  function h(H, K) {
    return r("xterm256Background", K), "";
  }
  function d(H) {
    return e.newline ? r("display", -1) : r("text", H), "";
  }
  function g(H, K) {
    (o = !0),
      K.trim().length === 0 && (K = "0"),
      (K = K.trimRight(";").split(";"));
    var ct = Ky(K),
      Y;
    try {
      for (ct.s(); !(Y = ct.n()).done; ) {
        var nt = Y.value;
        r("display", nt);
      }
    } catch (rt) {
      ct.e(rt);
    } finally {
      ct.f();
    }
    return "";
  }
  function v(H) {
    return r("text", H), "";
  }
  function y(H) {
    return r("rgb", H), "";
  }
  var w = [
    { pattern: /^\x08+/, sub: c },
    { pattern: /^\x1b\[[012]?K/, sub: c },
    { pattern: /^\x1b\[\(B/, sub: c },
    { pattern: /^\x1b\[[34]8;2;\d+;\d+;\d+m/, sub: y },
    { pattern: /^\x1b\[38;5;(\d+)m/, sub: f },
    { pattern: /^\x1b\[48;5;(\d+)m/, sub: h },
    { pattern: /^\n/, sub: d },
    { pattern: /^\r+\n/, sub: d },
    { pattern: /^\r/, sub: d },
    { pattern: /^\x1b\[((?:\d{1,3};?)+|)m/, sub: g },
    { pattern: /^\x1b\[\d?J/, sub: c },
    { pattern: /^\x1b\[\d{0,3};\d{0,3}f/, sub: c },
    { pattern: /^\x1b\[?[\d;]{0,3}/, sub: c },
    { pattern: /^(([^\x1b\x08\r\n])+)/, sub: v },
  ];
  function _(H, K) {
    (K > s && o) || ((o = !1), (t = t.replace(H.pattern, H.sub)));
  }
  var N = [],
    L = t,
    A = L.length;
  t: for (; A > 0; ) {
    for (var T = 0, M = 0, $ = w.length; M < $; T = ++M) {
      var E = w[T];
      if ((_(E, T), t.length !== A)) {
        A = t.length;
        continue t;
      }
    }
    if (t.length === A) break;
    N.push(0), (A = t.length);
  }
  return N;
}
function xst(t, e, r) {
  return (
    e !== "text" &&
      ((t = t.filter(yst(Yv(r)))),
      t.push({ token: e, data: r, category: Yv(r) })),
    t
  );
}
var _st = (function () {
    function t(e) {
      cst(this, t),
        (e = e || {}),
        e.colors && (e.colors = Object.assign({}, Kv.colors, e.colors)),
        (this.options = Object.assign({}, Kv, e)),
        (this.stack = []),
        (this.stickyStack = []);
    }
    return (
      ust(t, [
        {
          key: "toHtml",
          value: function (r) {
            var o = this;
            r = typeof r == "string" ? [r] : r;
            var s = this.stack,
              c = this.options,
              f = [];
            return (
              this.stickyStack.forEach(function (h) {
                var d = Xv(s, h.token, h.data, c);
                d && f.push(d);
              }),
              wst(r.join(""), c, function (h, d) {
                var g = Xv(s, h, d, c);
                g && f.push(g),
                  c.stream && (o.stickyStack = xst(o.stickyStack, h, d));
              }),
              s.length && f.push(Yy(s)),
              f.join("")
            );
          },
        },
      ]),
      t
    );
  })(),
  Sst = _st;
const kst = Ny(Sst);
function Cst(t = "") {
  return !t || !t.includes("\\") ? t : t.replace(/\\/g, "/");
}
const Tst = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
function Est() {
  return typeof process < "u" ? process.cwd().replace(/\\/g, "/") : "/";
}
const Lst = function (...t) {
  t = t.map((o) => Cst(o));
  let e = "",
    r = !1;
  for (let o = t.length - 1; o >= -1 && !r; o--) {
    const s = o >= 0 ? t[o] : Est();
    !s || s.length === 0 || ((e = `${s}/${e}`), (r = Qv(s)));
  }
  return (e = Ast(e, !r)), r && !Qv(e) ? `/${e}` : e.length > 0 ? e : ".";
};
function Ast(t, e) {
  let r = "",
    o = 0,
    s = -1,
    c = 0,
    f = null;
  for (let h = 0; h <= t.length; ++h) {
    if (h < t.length) f = t[h];
    else {
      if (f === "/") break;
      f = "/";
    }
    if (f === "/") {
      if (!(s === h - 1 || c === 1))
        if (c === 2) {
          if (
            r.length < 2 ||
            o !== 2 ||
            r[r.length - 1] !== "." ||
            r[r.length - 2] !== "."
          ) {
            if (r.length > 2) {
              const d = r.lastIndexOf("/");
              d === -1
                ? ((r = ""), (o = 0))
                : ((r = r.slice(0, d)),
                  (o = r.length - 1 - r.lastIndexOf("/"))),
                (s = h),
                (c = 0);
              continue;
            } else if (r.length > 0) {
              (r = ""), (o = 0), (s = h), (c = 0);
              continue;
            }
          }
          e && ((r += r.length > 0 ? "/.." : ".."), (o = 2));
        } else
          r.length > 0
            ? (r += `/${t.slice(s + 1, h)}`)
            : (r = t.slice(s + 1, h)),
            (o = h - s - 1);
      (s = h), (c = 0);
    } else f === "." && c !== -1 ? ++c : (c = -1);
  }
  return r;
}
const Qv = function (t) {
    return Tst.test(t);
  },
  Mst = 44,
  Jv = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  Nst = new Uint8Array(64),
  Zy = new Uint8Array(128);
for (let t = 0; t < Jv.length; t++) {
  const e = Jv.charCodeAt(t);
  (Nst[t] = e), (Zy[e] = t);
}
function Pst(t) {
  const e = new Int32Array(5),
    r = [];
  let o = 0;
  do {
    const s = $st(t, o),
      c = [];
    let f = !0,
      h = 0;
    e[0] = 0;
    for (let d = o; d < s; d++) {
      let g;
      d = rl(t, d, e, 0);
      const v = e[0];
      v < h && (f = !1),
        (h = v),
        tm(t, d, s)
          ? ((d = rl(t, d, e, 1)),
            (d = rl(t, d, e, 2)),
            (d = rl(t, d, e, 3)),
            tm(t, d, s)
              ? ((d = rl(t, d, e, 4)), (g = [v, e[1], e[2], e[3], e[4]]))
              : (g = [v, e[1], e[2], e[3]]))
          : (g = [v]),
        c.push(g);
    }
    f || Ost(c), r.push(c), (o = s + 1);
  } while (o <= t.length);
  return r;
}
function $st(t, e) {
  const r = t.indexOf(";", e);
  return r === -1 ? t.length : r;
}
function rl(t, e, r, o) {
  let s = 0,
    c = 0,
    f = 0;
  do {
    const d = t.charCodeAt(e++);
    (f = Zy[d]), (s |= (f & 31) << c), (c += 5);
  } while (f & 32);
  const h = s & 1;
  return (s >>>= 1), h && (s = -2147483648 | -s), (r[o] += s), e;
}
function tm(t, e, r) {
  return e >= r ? !1 : t.charCodeAt(e) !== Mst;
}
function Ost(t) {
  t.sort(Dst);
}
function Dst(t, e) {
  return t[0] - e[0];
}
const Rst = /^[\w+.-]+:\/\//,
  zst =
    /^([\w+.-]+:)\/\/([^@/#?]*@)?([^:/#?]*)(:\d+)?(\/[^#?]*)?(\?[^#]*)?(#.*)?/,
  Fst = /^file:(?:\/\/((?![a-z]:)[^/#?]*)?)?(\/?[^#?]*)(\?[^#]*)?(#.*)?/i;
var Oe;
(function (t) {
  (t[(t.Empty = 1)] = "Empty"),
    (t[(t.Hash = 2)] = "Hash"),
    (t[(t.Query = 3)] = "Query"),
    (t[(t.RelativePath = 4)] = "RelativePath"),
    (t[(t.AbsolutePath = 5)] = "AbsolutePath"),
    (t[(t.SchemeRelative = 6)] = "SchemeRelative"),
    (t[(t.Absolute = 7)] = "Absolute");
})(Oe || (Oe = {}));
function Ist(t) {
  return Rst.test(t);
}
function Hst(t) {
  return t.startsWith("//");
}
function Qy(t) {
  return t.startsWith("/");
}
function qst(t) {
  return t.startsWith("file:");
}
function em(t) {
  return /^[.?#]/.test(t);
}
function Ha(t) {
  const e = zst.exec(t);
  return Jy(
    e[1],
    e[2] || "",
    e[3],
    e[4] || "",
    e[5] || "/",
    e[6] || "",
    e[7] || "",
  );
}
function Bst(t) {
  const e = Fst.exec(t),
    r = e[2];
  return Jy(
    "file:",
    "",
    e[1] || "",
    "",
    Qy(r) ? r : "/" + r,
    e[3] || "",
    e[4] || "",
  );
}
function Jy(t, e, r, o, s, c, f) {
  return {
    scheme: t,
    user: e,
    host: r,
    port: o,
    path: s,
    query: c,
    hash: f,
    type: Oe.Absolute,
  };
}
function nm(t) {
  if (Hst(t)) {
    const r = Ha("http:" + t);
    return (r.scheme = ""), (r.type = Oe.SchemeRelative), r;
  }
  if (Qy(t)) {
    const r = Ha("http://foo.com" + t);
    return (r.scheme = ""), (r.host = ""), (r.type = Oe.AbsolutePath), r;
  }
  if (qst(t)) return Bst(t);
  if (Ist(t)) return Ha(t);
  const e = Ha("http://foo.com/" + t);
  return (
    (e.scheme = ""),
    (e.host = ""),
    (e.type = t
      ? t.startsWith("?")
        ? Oe.Query
        : t.startsWith("#")
          ? Oe.Hash
          : Oe.RelativePath
      : Oe.Empty),
    e
  );
}
function Wst(t) {
  if (t.endsWith("/..")) return t;
  const e = t.lastIndexOf("/");
  return t.slice(0, e + 1);
}
function Ust(t, e) {
  tb(e, e.type),
    t.path === "/" ? (t.path = e.path) : (t.path = Wst(e.path) + t.path);
}
function tb(t, e) {
  const r = e <= Oe.RelativePath,
    o = t.path.split("/");
  let s = 1,
    c = 0,
    f = !1;
  for (let d = 1; d < o.length; d++) {
    const g = o[d];
    if (!g) {
      f = !0;
      continue;
    }
    if (((f = !1), g !== ".")) {
      if (g === "..") {
        c ? ((f = !0), c--, s--) : r && (o[s++] = g);
        continue;
      }
      (o[s++] = g), c++;
    }
  }
  let h = "";
  for (let d = 1; d < s; d++) h += "/" + o[d];
  (!h || (f && !h.endsWith("/.."))) && (h += "/"), (t.path = h);
}
function jst(t, e) {
  if (!t && !e) return "";
  const r = nm(t);
  let o = r.type;
  if (e && o !== Oe.Absolute) {
    const c = nm(e),
      f = c.type;
    switch (o) {
      case Oe.Empty:
        r.hash = c.hash;
      case Oe.Hash:
        r.query = c.query;
      case Oe.Query:
      case Oe.RelativePath:
        Ust(r, c);
      case Oe.AbsolutePath:
        (r.user = c.user), (r.host = c.host), (r.port = c.port);
      case Oe.SchemeRelative:
        r.scheme = c.scheme;
    }
    f > o && (o = f);
  }
  tb(r, o);
  const s = r.query + r.hash;
  switch (o) {
    case Oe.Hash:
    case Oe.Query:
      return s;
    case Oe.RelativePath: {
      const c = r.path.slice(1);
      return c ? (em(e || t) && !em(c) ? "./" + c + s : c + s) : s || ".";
    }
    case Oe.AbsolutePath:
      return r.path + s;
    default:
      return r.scheme + "//" + r.user + r.host + r.port + r.path + s;
  }
}
function rm(t, e) {
  return e && !e.endsWith("/") && (e += "/"), jst(t, e);
}
function Gst(t) {
  if (!t) return "";
  const e = t.lastIndexOf("/");
  return t.slice(0, e + 1);
}
const Oi = 0,
  Vst = 1,
  Kst = 2,
  Xst = 3,
  Yst = 4;
function Zst(t, e) {
  const r = im(t, 0);
  if (r === t.length) return t;
  e || (t = t.slice());
  for (let o = r; o < t.length; o = im(t, o + 1)) t[o] = Jst(t[o], e);
  return t;
}
function im(t, e) {
  for (let r = e; r < t.length; r++) if (!Qst(t[r])) return r;
  return t.length;
}
function Qst(t) {
  for (let e = 1; e < t.length; e++) if (t[e][Oi] < t[e - 1][Oi]) return !1;
  return !0;
}
function Jst(t, e) {
  return e || (t = t.slice()), t.sort(tlt);
}
function tlt(t, e) {
  return t[Oi] - e[Oi];
}
let _c = !1;
function elt(t, e, r, o) {
  for (; r <= o; ) {
    const s = r + ((o - r) >> 1),
      c = t[s][Oi] - e;
    if (c === 0) return (_c = !0), s;
    c < 0 ? (r = s + 1) : (o = s - 1);
  }
  return (_c = !1), r - 1;
}
function nlt(t, e, r) {
  for (let o = r + 1; o < t.length && t[o][Oi] === e; r = o++);
  return r;
}
function rlt(t, e, r) {
  for (let o = r - 1; o >= 0 && t[o][Oi] === e; r = o--);
  return r;
}
function ilt() {
  return { lastKey: -1, lastNeedle: -1, lastIndex: -1 };
}
function olt(t, e, r, o) {
  const { lastKey: s, lastNeedle: c, lastIndex: f } = r;
  let h = 0,
    d = t.length - 1;
  if (o === s) {
    if (e === c) return (_c = f !== -1 && t[f][Oi] === e), f;
    e >= c ? (h = f === -1 ? 0 : f) : (d = f);
  }
  return (r.lastKey = o), (r.lastNeedle = e), (r.lastIndex = elt(t, e, h, d));
}
const slt = "`line` must be greater than 0 (lines start at line 1)",
  llt =
    "`column` must be greater than or equal to 0 (columns start at column 0)",
  om = -1,
  alt = 1;
let sm, eb;
class clt {
  constructor(e, r) {
    const o = typeof e == "string";
    if (!o && e._decodedMemo) return e;
    const s = o ? JSON.parse(e) : e,
      {
        version: c,
        file: f,
        names: h,
        sourceRoot: d,
        sources: g,
        sourcesContent: v,
      } = s;
    (this.version = c),
      (this.file = f),
      (this.names = h || []),
      (this.sourceRoot = d),
      (this.sources = g),
      (this.sourcesContent = v);
    const y = rm(d || "", Gst(r));
    this.resolvedSources = g.map((_) => rm(_ || "", y));
    const { mappings: w } = s;
    typeof w == "string"
      ? ((this._encoded = w), (this._decoded = void 0))
      : ((this._encoded = void 0), (this._decoded = Zst(w, o))),
      (this._decodedMemo = ilt()),
      (this._bySources = void 0),
      (this._bySourceMemos = void 0);
  }
}
(sm = (t) => t._decoded || (t._decoded = Pst(t._encoded))),
  (eb = (t, { line: e, column: r, bias: o }) => {
    if ((e--, e < 0)) throw new Error(slt);
    if (r < 0) throw new Error(llt);
    const s = sm(t);
    if (e >= s.length) return qa(null, null, null, null);
    const c = s[e],
      f = ult(c, t._decodedMemo, e, r, o || alt);
    if (f === -1) return qa(null, null, null, null);
    const h = c[f];
    if (h.length === 1) return qa(null, null, null, null);
    const { names: d, resolvedSources: g } = t;
    return qa(g[h[Vst]], h[Kst] + 1, h[Xst], h.length === 5 ? d[h[Yst]] : null);
  });
function qa(t, e, r, o) {
  return { source: t, line: e, column: r, name: o };
}
function ult(t, e, r, o, s) {
  let c = olt(t, o, e, r);
  return (
    _c ? (c = (s === om ? nlt : rlt)(t, o, c)) : s === om && c++,
    c === -1 || c === t.length ? -1 : c
  );
}
const nb = /^\s*at .*(\S+:\d+|\(native\))/m,
  flt = /^(eval@)?(\[native code])?$/,
  hlt = [
    "node:internal",
    /\/packages\/\w+\/dist\//,
    /\/@vitest\/\w+\/dist\//,
    "/vitest/dist/",
    "/vitest/src/",
    "/vite-node/dist/",
    "/vite-node/src/",
    "/node_modules/chai/",
    "/node_modules/tinypool/",
    "/node_modules/tinyspy/",
    "/deps/chai.js",
    /__vitest_browser__/,
  ];
function rb(t) {
  if (!t.includes(":")) return [t];
  const r = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(t.replace(/^\(|\)$/g, ""));
  if (!r) return [t];
  let o = r[1];
  return (
    (o.startsWith("http:") || o.startsWith("https:")) &&
      (o = new URL(o).pathname),
    o.startsWith("/@fs/") &&
      (o = o.slice(
        typeof process < "u" && process.platform === "win32" ? 5 : 4,
      )),
    [o, r[2] || void 0, r[3] || void 0]
  );
}
function dlt(t) {
  let e = t.trim();
  if (
    flt.test(e) ||
    (e.includes(" > eval") &&
      (e = e.replace(
        / line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g,
        ":$1",
      )),
    !e.includes("@") && !e.includes(":"))
  )
    return null;
  const r = /((.*".+"[^@]*)?[^@]*)(?:@)/,
    o = e.match(r),
    s = o && o[1] ? o[1] : void 0,
    [c, f, h] = rb(e.replace(r, ""));
  return !c || !f || !h
    ? null
    : {
        file: c,
        method: s || "",
        line: Number.parseInt(f),
        column: Number.parseInt(h),
      };
}
function plt(t) {
  let e = t.trim();
  if (!nb.test(e)) return null;
  e.includes("(eval ") &&
    (e = e
      .replace(/eval code/g, "eval")
      .replace(/(\(eval at [^()]*)|(,.*$)/g, ""));
  let r = e
    .replace(/^\s+/, "")
    .replace(/\(eval code/g, "(")
    .replace(/^.*?\s+/, "");
  const o = r.match(/ (\(.+\)$)/);
  r = o ? r.replace(o[0], "") : r;
  const [s, c, f] = rb(o ? o[1] : r);
  let h = (o && r) || "",
    d = s && ["eval", "<anonymous>"].includes(s) ? void 0 : s;
  return !d || !c || !f
    ? null
    : (h.startsWith("async ") && (h = h.slice(6)),
      d.startsWith("file://") && (d = d.slice(7)),
      (d = Lst(d)),
      h && (h = h.replace(/__vite_ssr_import_\d+__\./g, "")),
      {
        method: h,
        file: d,
        line: Number.parseInt(c),
        column: Number.parseInt(f),
      });
}
function glt(t, e = {}) {
  const { ignoreStackEntries: r = hlt } = e;
  let o = nb.test(t) ? mlt(t) : vlt(t);
  return (
    r.length && (o = o.filter((s) => !r.some((c) => s.file.match(c)))),
    o.map((s) => {
      var c;
      const f = (c = e.getSourceMap) == null ? void 0 : c.call(e, s.file);
      if (!f || typeof f != "object" || !f.version) return s;
      const h = new clt(f),
        { line: d, column: g } = eb(h, s);
      return d != null && g != null ? { ...s, line: d, column: g } : s;
    })
  );
}
function vlt(t) {
  return t
    .split(
      `
`,
    )
    .map((e) => dlt(e))
    .filter(Py);
}
function mlt(t) {
  return t
    .split(
      `
`,
    )
    .map((e) => plt(e))
    .filter(Py);
}
function ylt(t, e) {
  return e && t.endsWith(e);
}
async function ib(t, e, r) {
  const o = encodeURI(`${t}:${e}:${r}`);
  await fetch(`/__open-in-editor?file=${o}`);
}
function td(t) {
  return new kst({ fg: t ? "#FFF" : "#000", bg: t ? "#000" : "#FFF" });
}
function blt(t) {
  return t === null || (typeof t != "function" && typeof t != "object");
}
function ob(t) {
  let e = t;
  if (
    (blt(t) &&
      (e = { message: String(e).split(/\n/g)[0], stack: String(e), name: "" }),
    !t)
  ) {
    const r = new Error("unknown error");
    e = { message: r.message, stack: r.stack, name: "" };
  }
  return (
    (e.stacks = glt(e.stack || e.stackStr || "", { ignoreStackEntries: [] })), e
  );
}
function ed(t) {
  return Um() ? (Px(t), !0) : !1;
}
function Ar(t) {
  return typeof t == "function" ? t() : U(t);
}
const wlt = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const xlt = Object.prototype.toString,
  _lt = (t) => xlt.call(t) === "[object Object]",
  fo = () => {};
function nd(t, e) {
  function r(...o) {
    return new Promise((s, c) => {
      Promise.resolve(
        t(() => e.apply(this, o), { fn: e, thisArg: this, args: o }),
      )
        .then(s)
        .catch(c);
    });
  }
  return r;
}
const sb = (t) => t();
function lb(t, e = {}) {
  let r,
    o,
    s = fo;
  const c = (h) => {
    clearTimeout(h), s(), (s = fo);
  };
  return (h) => {
    const d = Ar(t),
      g = Ar(e.maxWait);
    return (
      r && c(r),
      d <= 0 || (g !== void 0 && g <= 0)
        ? (o && (c(o), (o = null)), Promise.resolve(h()))
        : new Promise((v, y) => {
            (s = e.rejectOnCancel ? y : v),
              g &&
                !o &&
                (o = setTimeout(() => {
                  r && c(r), (o = null), v(h());
                }, g)),
              (r = setTimeout(() => {
                o && c(o), (o = null), v(h());
              }, d));
          })
    );
  };
}
function Slt(t, e = !0, r = !0, o = !1) {
  let s = 0,
    c,
    f = !0,
    h = fo,
    d;
  const g = () => {
    c && (clearTimeout(c), (c = void 0), h(), (h = fo));
  };
  return (y) => {
    const w = Ar(t),
      _ = Date.now() - s,
      N = () => (d = y());
    return (
      g(),
      w <= 0
        ? ((s = Date.now()), N())
        : (_ > w && (r || !f)
            ? ((s = Date.now()), N())
            : e &&
              (d = new Promise((L, A) => {
                (h = o ? A : L),
                  (c = setTimeout(
                    () => {
                      (s = Date.now()), (f = !0), L(N()), g();
                    },
                    Math.max(0, w - _),
                  ));
              })),
          !r && !c && (c = setTimeout(() => (f = !0), w)),
          (f = !1),
          d)
    );
  };
}
function klt(t = sb) {
  const e = Zt(!0);
  function r() {
    e.value = !1;
  }
  function o() {
    e.value = !0;
  }
  const s = (...c) => {
    e.value && t(...c);
  };
  return { isActive: Hc(e), pause: r, resume: o, eventFilter: s };
}
function Clt(...t) {
  if (t.length !== 1) return Mh(...t);
  const e = t[0];
  return typeof e == "function" ? Hc(r_(() => ({ get: e, set: fo }))) : Zt(e);
}
function lm(t, e = 200, r = {}) {
  return nd(lb(e, r), t);
}
function Tlt(t, e = 200, r = !1, o = !0, s = !1) {
  return nd(Slt(e, r, o, s), t);
}
function Elt(t, e = 200, r = !0, o = !0) {
  if (e <= 0) return t;
  const s = Zt(t.value),
    c = Tlt(
      () => {
        s.value = t.value;
      },
      e,
      r,
      o,
    );
  return Fe(t, () => c()), s;
}
function ab(t, e, r = {}) {
  const { eventFilter: o = sb, ...s } = r;
  return Fe(t, nd(o, e), s);
}
function cb(t, e, r = {}) {
  const { eventFilter: o, ...s } = r,
    { eventFilter: c, pause: f, resume: h, isActive: d } = klt(o);
  return {
    stop: ab(t, e, { ...s, eventFilter: c }),
    pause: f,
    resume: h,
    isActive: d,
  };
}
function rd(t, e = !0) {
  Wl() ? ws(t) : e ? t() : Kr(t);
}
function Llt(t = !1, e = {}) {
  const { truthyValue: r = !0, falsyValue: o = !1 } = e,
    s = Le(t),
    c = Zt(t);
  function f(h) {
    if (arguments.length) return (c.value = h), c.value;
    {
      const d = Ar(r);
      return (c.value = c.value === d ? Ar(o) : d), c.value;
    }
  }
  return s ? f : [c, f];
}
function Alt(t, e, r = {}) {
  const { debounce: o = 0, maxWait: s = void 0, ...c } = r;
  return ab(t, e, { ...c, eventFilter: lb(o, { maxWait: s }) });
}
function Mlt(t, e, r) {
  const o = Fe(t, (...s) => (Kr(() => o()), e(...s)), r);
  return o;
}
function Nlt(t, e, r) {
  let o;
  Le(r) ? (o = { evaluating: r }) : (o = r || {});
  const {
      lazy: s = !1,
      evaluating: c = void 0,
      shallow: f = !0,
      onError: h = fo,
    } = o,
    d = Zt(!s),
    g = f ? bs(e) : Zt(e);
  let v = 0;
  return (
    Dh(async (y) => {
      if (!d.value) return;
      v++;
      const w = v;
      let _ = !1;
      c &&
        Promise.resolve().then(() => {
          c.value = !0;
        });
      try {
        const N = await t((L) => {
          y(() => {
            c && (c.value = !1), _ || L();
          });
        });
        w === v && (g.value = N);
      } catch (N) {
        h(N);
      } finally {
        c && w === v && (c.value = !1), (_ = !0);
      }
    }),
    s ? xt(() => ((d.value = !0), g.value)) : g
  );
}
function Sc(t) {
  var e;
  const r = Ar(t);
  return (e = r == null ? void 0 : r.$el) != null ? e : r;
}
const Mr = wlt ? window : void 0;
function ps(...t) {
  let e, r, o, s;
  if (
    (typeof t[0] == "string" || Array.isArray(t[0])
      ? (([r, o, s] = t), (e = Mr))
      : ([e, r, o, s] = t),
    !e)
  )
    return fo;
  Array.isArray(r) || (r = [r]), Array.isArray(o) || (o = [o]);
  const c = [],
    f = () => {
      c.forEach((v) => v()), (c.length = 0);
    },
    h = (v, y, w, _) => (
      v.addEventListener(y, w, _), () => v.removeEventListener(y, w, _)
    ),
    d = Fe(
      () => [Sc(e), Ar(s)],
      ([v, y]) => {
        if ((f(), !v)) return;
        const w = _lt(y) ? { ...y } : y;
        c.push(...r.flatMap((_) => o.map((N) => h(v, _, N, w))));
      },
      { immediate: !0, flush: "post" },
    ),
    g = () => {
      d(), f();
    };
  return ed(g), g;
}
function Plt(t) {
  return typeof t == "function"
    ? t
    : typeof t == "string"
      ? (e) => e.key === t
      : Array.isArray(t)
        ? (e) => t.includes(e.key)
        : () => !0;
}
function $lt(...t) {
  let e,
    r,
    o = {};
  t.length === 3
    ? ((e = t[0]), (r = t[1]), (o = t[2]))
    : t.length === 2
      ? typeof t[1] == "object"
        ? ((e = !0), (r = t[0]), (o = t[1]))
        : ((e = t[0]), (r = t[1]))
      : ((e = !0), (r = t[0]));
  const {
      target: s = Mr,
      eventName: c = "keydown",
      passive: f = !1,
      dedupe: h = !1,
    } = o,
    d = Plt(e);
  return ps(
    s,
    c,
    (v) => {
      (v.repeat && Ar(h)) || (d(v) && r(v));
    },
    f,
  );
}
function Olt() {
  const t = Zt(!1);
  return (
    Wl() &&
      ws(() => {
        t.value = !0;
      }),
    t
  );
}
function ub(t) {
  const e = Olt();
  return xt(() => (e.value, !!t()));
}
function fb(t, e = {}) {
  const { window: r = Mr } = e,
    o = ub(() => r && "matchMedia" in r && typeof r.matchMedia == "function");
  let s;
  const c = Zt(!1),
    f = (g) => {
      c.value = g.matches;
    },
    h = () => {
      s &&
        ("removeEventListener" in s
          ? s.removeEventListener("change", f)
          : s.removeListener(f));
    },
    d = Dh(() => {
      o.value &&
        (h(),
        (s = r.matchMedia(Ar(t))),
        "addEventListener" in s
          ? s.addEventListener("change", f)
          : s.addListener(f),
        (c.value = s.matches));
    });
  return (
    ed(() => {
      d(), h(), (s = void 0);
    }),
    c
  );
}
const Ba =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof self < "u"
            ? self
            : {},
  Wa = "__vueuse_ssr_handlers__",
  Dlt = Rlt();
function Rlt() {
  return Wa in Ba || (Ba[Wa] = Ba[Wa] || {}), Ba[Wa];
}
function hb(t, e) {
  return Dlt[t] || e;
}
function zlt(t) {
  return t == null
    ? "any"
    : t instanceof Set
      ? "set"
      : t instanceof Map
        ? "map"
        : t instanceof Date
          ? "date"
          : typeof t == "boolean"
            ? "boolean"
            : typeof t == "string"
              ? "string"
              : typeof t == "object"
                ? "object"
                : Number.isNaN(t)
                  ? "any"
                  : "number";
}
const Flt = {
    boolean: { read: (t) => t === "true", write: (t) => String(t) },
    object: { read: (t) => JSON.parse(t), write: (t) => JSON.stringify(t) },
    number: { read: (t) => Number.parseFloat(t), write: (t) => String(t) },
    any: { read: (t) => t, write: (t) => String(t) },
    string: { read: (t) => t, write: (t) => String(t) },
    map: {
      read: (t) => new Map(JSON.parse(t)),
      write: (t) => JSON.stringify(Array.from(t.entries())),
    },
    set: {
      read: (t) => new Set(JSON.parse(t)),
      write: (t) => JSON.stringify(Array.from(t)),
    },
    date: { read: (t) => new Date(t), write: (t) => t.toISOString() },
  },
  am = "vueuse-storage";
function db(t, e, r, o = {}) {
  var s;
  const {
      flush: c = "pre",
      deep: f = !0,
      listenToStorageChanges: h = !0,
      writeDefaults: d = !0,
      mergeDefaults: g = !1,
      shallow: v,
      window: y = Mr,
      eventFilter: w,
      onError: _ = (nt) => {
        console.error(nt);
      },
      initOnMounted: N,
    } = o,
    L = (v ? bs : Zt)(typeof e == "function" ? e() : e);
  if (!r)
    try {
      r = hb("getDefaultStorage", () => {
        var nt;
        return (nt = Mr) == null ? void 0 : nt.localStorage;
      })();
    } catch (nt) {
      _(nt);
    }
  if (!r) return L;
  const A = Ar(e),
    T = zlt(A),
    M = (s = o.serializer) != null ? s : Flt[T],
    { pause: $, resume: E } = cb(L, () => H(L.value), {
      flush: c,
      deep: f,
      eventFilter: w,
    });
  return (
    y &&
      h &&
      rd(() => {
        ps(y, "storage", Y), ps(y, am, ct), N && Y();
      }),
    N || Y(),
    L
  );
  function H(nt) {
    try {
      if (nt == null) r.removeItem(t);
      else {
        const rt = M.write(nt),
          dt = r.getItem(t);
        dt !== rt &&
          (r.setItem(t, rt),
          y &&
            y.dispatchEvent(
              new CustomEvent(am, {
                detail: { key: t, oldValue: dt, newValue: rt, storageArea: r },
              }),
            ));
      }
    } catch (rt) {
      _(rt);
    }
  }
  function K(nt) {
    const rt = nt ? nt.newValue : r.getItem(t);
    if (rt == null) return d && A !== null && r.setItem(t, M.write(A)), A;
    if (!nt && g) {
      const dt = M.read(rt);
      return typeof g == "function"
        ? g(dt, A)
        : T === "object" && !Array.isArray(dt)
          ? { ...A, ...dt }
          : dt;
    } else return typeof rt != "string" ? rt : M.read(rt);
  }
  function ct(nt) {
    Y(nt.detail);
  }
  function Y(nt) {
    if (!(nt && nt.storageArea !== r)) {
      if (nt && nt.key == null) {
        L.value = A;
        return;
      }
      if (!(nt && nt.key !== t)) {
        $();
        try {
          (nt == null ? void 0 : nt.newValue) !== M.write(L.value) &&
            (L.value = K(nt));
        } catch (rt) {
          _(rt);
        } finally {
          nt ? Kr(E) : E();
        }
      }
    }
  }
}
function Ilt(t) {
  return fb("(prefers-color-scheme: dark)", t);
}
function Hlt(t = {}) {
  const {
      selector: e = "html",
      attribute: r = "class",
      initialValue: o = "auto",
      window: s = Mr,
      storage: c,
      storageKey: f = "vueuse-color-scheme",
      listenToStorageChanges: h = !0,
      storageRef: d,
      emitAuto: g,
      disableTransition: v = !0,
    } = t,
    y = { auto: "", light: "light", dark: "dark", ...(t.modes || {}) },
    w = Ilt({ window: s }),
    _ = xt(() => (w.value ? "dark" : "light")),
    N =
      d ||
      (f == null
        ? Clt(o)
        : db(f, o, c, { window: s, listenToStorageChanges: h })),
    L = xt(() => (N.value === "auto" ? _.value : N.value)),
    A = hb("updateHTMLAttrs", (E, H, K) => {
      const ct =
        typeof E == "string"
          ? s == null
            ? void 0
            : s.document.querySelector(E)
          : Sc(E);
      if (!ct) return;
      let Y;
      if (
        (v &&
          ((Y = s.document.createElement("style")),
          Y.appendChild(
            document.createTextNode(
              "*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}",
            ),
          ),
          s.document.head.appendChild(Y)),
        H === "class")
      ) {
        const nt = K.split(/\s/g);
        Object.values(y)
          .flatMap((rt) => (rt || "").split(/\s/g))
          .filter(Boolean)
          .forEach((rt) => {
            nt.includes(rt) ? ct.classList.add(rt) : ct.classList.remove(rt);
          });
      } else ct.setAttribute(H, K);
      v && (s.getComputedStyle(Y).opacity, document.head.removeChild(Y));
    });
  function T(E) {
    var H;
    A(e, r, (H = y[E]) != null ? H : E);
  }
  function M(E) {
    t.onChanged ? t.onChanged(E, T) : T(E);
  }
  Fe(L, M, { flush: "post", immediate: !0 }), rd(() => M(L.value));
  const $ = xt({
    get() {
      return g ? N.value : L.value;
    },
    set(E) {
      N.value = E;
    },
  });
  try {
    return Object.assign($, { store: N, system: _, state: L });
  } catch {
    return $;
  }
}
function qlt(t = {}) {
  const { valueDark: e = "dark", valueLight: r = "" } = t,
    o = Hlt({
      ...t,
      onChanged: (c, f) => {
        var h;
        t.onChanged
          ? (h = t.onChanged) == null || h.call(t, c === "dark", f, c)
          : f(c);
      },
      modes: { dark: e, light: r },
    });
  return xt({
    get() {
      return o.value === "dark";
    },
    set(c) {
      const f = c ? "dark" : "light";
      o.system.value === f ? (o.value = "auto") : (o.value = f);
    },
  });
}
function Blt(t, e, r = {}) {
  const { window: o = Mr, ...s } = r;
  let c;
  const f = ub(() => o && "ResizeObserver" in o),
    h = () => {
      c && (c.disconnect(), (c = void 0));
    },
    d = xt(() => (Array.isArray(t) ? t.map((y) => Sc(y)) : [Sc(t)])),
    g = Fe(
      d,
      (y) => {
        if ((h(), f.value && o)) {
          c = new ResizeObserver(e);
          for (const w of y) w && c.observe(w, s);
        }
      },
      { immediate: !0, flush: "post", deep: !0 },
    ),
    v = () => {
      h(), g();
    };
  return ed(v), { isSupported: f, stop: v };
}
function cm(t, e, r = {}) {
  const { window: o = Mr } = r;
  return db(t, e, o == null ? void 0 : o.localStorage, r);
}
function Wlt(t = "history", e = {}) {
  const {
    initialValue: r = {},
    removeNullishValues: o = !0,
    removeFalsyValues: s = !1,
    write: c = !0,
    window: f = Mr,
  } = e;
  if (!f) return Sr(r);
  const h = Sr({});
  function d() {
    if (t === "history") return f.location.search || "";
    if (t === "hash") {
      const T = f.location.hash || "",
        M = T.indexOf("?");
      return M > 0 ? T.slice(M) : "";
    } else return (f.location.hash || "").replace(/^#/, "");
  }
  function g(T) {
    const M = T.toString();
    if (t === "history") return `${M ? `?${M}` : ""}${f.location.hash || ""}`;
    if (t === "hash-params")
      return `${f.location.search || ""}${M ? `#${M}` : ""}`;
    const $ = f.location.hash || "#",
      E = $.indexOf("?");
    return E > 0
      ? `${$.slice(0, E)}${M ? `?${M}` : ""}`
      : `${$}${M ? `?${M}` : ""}`;
  }
  function v() {
    return new URLSearchParams(d());
  }
  function y(T) {
    const M = new Set(Object.keys(h));
    for (const $ of T.keys()) {
      const E = T.getAll($);
      (h[$] = E.length > 1 ? E : T.get($) || ""), M.delete($);
    }
    Array.from(M).forEach(($) => delete h[$]);
  }
  const { pause: w, resume: _ } = cb(
    h,
    () => {
      const T = new URLSearchParams("");
      Object.keys(h).forEach((M) => {
        const $ = h[M];
        Array.isArray($)
          ? $.forEach((E) => T.append(M, E))
          : (o && $ == null) || (s && !$)
            ? T.delete(M)
            : T.set(M, $);
      }),
        N(T);
    },
    { deep: !0 },
  );
  function N(T, M) {
    w(),
      M && y(T),
      f.history.replaceState(
        f.history.state,
        f.document.title,
        f.location.pathname + g(T),
      ),
      _();
  }
  function L() {
    c && N(v(), !0);
  }
  ps(f, "popstate", L, !1), t !== "history" && ps(f, "hashchange", L, !1);
  const A = v();
  return A.keys().next().value ? y(A) : Object.assign(h, r), h;
}
function Ult(t = {}) {
  const {
      window: e = Mr,
      initialWidth: r = Number.POSITIVE_INFINITY,
      initialHeight: o = Number.POSITIVE_INFINITY,
      listenOrientation: s = !0,
      includeScrollbar: c = !0,
    } = t,
    f = Zt(r),
    h = Zt(o),
    d = () => {
      e &&
        (c
          ? ((f.value = e.innerWidth), (h.value = e.innerHeight))
          : ((f.value = e.document.documentElement.clientWidth),
            (h.value = e.document.documentElement.clientHeight)));
    };
  if ((d(), rd(d), ps("resize", d, { passive: !0 }), s)) {
    const g = fb("(orientation: portrait)");
    Fe(g, () => d());
  }
  return { width: f, height: h };
}
const pb = Wlt("hash", { initialValue: { file: "", view: null } }),
  xr = Mh(pb, "file"),
  nr = Mh(pb, "view");
var Fn = Uint8Array,
  Xo = Uint16Array,
  jlt = Int32Array,
  gb = new Fn([
    0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5,
    5, 5, 5, 0, 0, 0, 0,
  ]),
  vb = new Fn([
    0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10,
    11, 11, 12, 12, 13, 13, 0, 0,
  ]),
  Glt = new Fn([
    16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
  ]),
  mb = function (t, e) {
    for (var r = new Xo(31), o = 0; o < 31; ++o) r[o] = e += 1 << t[o - 1];
    for (var s = new jlt(r[30]), o = 1; o < 30; ++o)
      for (var c = r[o]; c < r[o + 1]; ++c) s[c] = ((c - r[o]) << 5) | o;
    return { b: r, r: s };
  },
  yb = mb(gb, 2),
  bb = yb.b,
  Vlt = yb.r;
(bb[28] = 258), (Vlt[258] = 28);
var Klt = mb(vb, 0),
  Xlt = Klt.b,
  rh = new Xo(32768);
for (var xe = 0; xe < 32768; ++xe) {
  var gi = ((xe & 43690) >> 1) | ((xe & 21845) << 1);
  (gi = ((gi & 52428) >> 2) | ((gi & 13107) << 2)),
    (gi = ((gi & 61680) >> 4) | ((gi & 3855) << 4)),
    (rh[xe] = (((gi & 65280) >> 8) | ((gi & 255) << 8)) >> 1);
}
var bl = function (t, e, r) {
    for (var o = t.length, s = 0, c = new Xo(e); s < o; ++s)
      t[s] && ++c[t[s] - 1];
    var f = new Xo(e);
    for (s = 1; s < e; ++s) f[s] = (f[s - 1] + c[s - 1]) << 1;
    var h;
    if (r) {
      h = new Xo(1 << e);
      var d = 15 - e;
      for (s = 0; s < o; ++s)
        if (t[s])
          for (
            var g = (s << 4) | t[s],
              v = e - t[s],
              y = f[t[s] - 1]++ << v,
              w = y | ((1 << v) - 1);
            y <= w;
            ++y
          )
            h[rh[y] >> d] = g;
    } else
      for (h = new Xo(o), s = 0; s < o; ++s)
        t[s] && (h[s] = rh[f[t[s] - 1]++] >> (15 - t[s]));
    return h;
  },
  Gl = new Fn(288);
for (var xe = 0; xe < 144; ++xe) Gl[xe] = 8;
for (var xe = 144; xe < 256; ++xe) Gl[xe] = 9;
for (var xe = 256; xe < 280; ++xe) Gl[xe] = 7;
for (var xe = 280; xe < 288; ++xe) Gl[xe] = 8;
var wb = new Fn(32);
for (var xe = 0; xe < 32; ++xe) wb[xe] = 5;
var Ylt = bl(Gl, 9, 1),
  Zlt = bl(wb, 5, 1),
  yf = function (t) {
    for (var e = t[0], r = 1; r < t.length; ++r) t[r] > e && (e = t[r]);
    return e;
  },
  rr = function (t, e, r) {
    var o = (e / 8) | 0;
    return ((t[o] | (t[o + 1] << 8)) >> (e & 7)) & r;
  },
  bf = function (t, e) {
    var r = (e / 8) | 0;
    return (t[r] | (t[r + 1] << 8) | (t[r + 2] << 16)) >> (e & 7);
  },
  Qlt = function (t) {
    return ((t + 7) / 8) | 0;
  },
  xb = function (t, e, r) {
    return (
      (e == null || e < 0) && (e = 0),
      (r == null || r > t.length) && (r = t.length),
      new Fn(t.subarray(e, r))
    );
  },
  Jlt = [
    "unexpected EOF",
    "invalid block type",
    "invalid length/literal",
    "invalid distance",
    "stream finished",
    "no stream handler",
    ,
    "no callback",
    "invalid UTF-8 data",
    "extra field too long",
    "date not in range 1980-2099",
    "filename too long",
    "stream finishing",
    "invalid zip data",
  ],
  Tn = function (t, e, r) {
    var o = new Error(e || Jlt[t]);
    if (
      ((o.code = t),
      Error.captureStackTrace && Error.captureStackTrace(o, Tn),
      !r)
    )
      throw o;
    return o;
  },
  id = function (t, e, r, o) {
    var s = t.length,
      c = o ? o.length : 0;
    if (!s || (e.f && !e.l)) return r || new Fn(0);
    var f = !r,
      h = f || e.i != 2,
      d = e.i;
    f && (r = new Fn(s * 3));
    var g = function (Et) {
        var R = r.length;
        if (Et > R) {
          var F = new Fn(Math.max(R * 2, Et));
          F.set(r), (r = F);
        }
      },
      v = e.f || 0,
      y = e.p || 0,
      w = e.b || 0,
      _ = e.l,
      N = e.d,
      L = e.m,
      A = e.n,
      T = s * 8;
    do {
      if (!_) {
        v = rr(t, y, 1);
        var M = rr(t, y + 1, 3);
        if (((y += 3), M))
          if (M == 1) (_ = Ylt), (N = Zlt), (L = 9), (A = 5);
          else if (M == 2) {
            var K = rr(t, y, 31) + 257,
              ct = rr(t, y + 10, 15) + 4,
              Y = K + rr(t, y + 5, 31) + 1;
            y += 14;
            for (var nt = new Fn(Y), rt = new Fn(19), dt = 0; dt < ct; ++dt)
              rt[Glt[dt]] = rr(t, y + dt * 3, 7);
            y += ct * 3;
            for (
              var ht = yf(rt), G = (1 << ht) - 1, z = bl(rt, ht, 1), dt = 0;
              dt < Y;
            ) {
              var k = z[rr(t, y, G)];
              y += k & 15;
              var $ = k >> 4;
              if ($ < 16) nt[dt++] = $;
              else {
                var I = 0,
                  B = 0;
                for (
                  $ == 16
                    ? ((B = 3 + rr(t, y, 3)), (y += 2), (I = nt[dt - 1]))
                    : $ == 17
                      ? ((B = 3 + rr(t, y, 7)), (y += 3))
                      : $ == 18 && ((B = 11 + rr(t, y, 127)), (y += 7));
                  B--;
                )
                  nt[dt++] = I;
              }
            }
            var Q = nt.subarray(0, K),
              yt = nt.subarray(K);
            (L = yf(Q)), (A = yf(yt)), (_ = bl(Q, L, 1)), (N = bl(yt, A, 1));
          } else Tn(1);
        else {
          var $ = Qlt(y) + 4,
            E = t[$ - 4] | (t[$ - 3] << 8),
            H = $ + E;
          if (H > s) {
            d && Tn(0);
            break;
          }
          h && g(w + E),
            r.set(t.subarray($, H), w),
            (e.b = w += E),
            (e.p = y = H * 8),
            (e.f = v);
          continue;
        }
        if (y > T) {
          d && Tn(0);
          break;
        }
      }
      h && g(w + 131072);
      for (var At = (1 << L) - 1, Ht = (1 << A) - 1, qt = y; ; qt = y) {
        var I = _[bf(t, y) & At],
          Jt = I >> 4;
        if (((y += I & 15), y > T)) {
          d && Tn(0);
          break;
        }
        if ((I || Tn(2), Jt < 256)) r[w++] = Jt;
        else if (Jt == 256) {
          (qt = y), (_ = null);
          break;
        } else {
          var Qt = Jt - 254;
          if (Jt > 264) {
            var dt = Jt - 257,
              Vt = gb[dt];
            (Qt = rr(t, y, (1 << Vt) - 1) + bb[dt]), (y += Vt);
          }
          var Tt = N[bf(t, y) & Ht],
            j = Tt >> 4;
          Tt || Tn(3), (y += Tt & 15);
          var yt = Xlt[j];
          if (j > 3) {
            var Vt = vb[j];
            (yt += bf(t, y) & ((1 << Vt) - 1)), (y += Vt);
          }
          if (y > T) {
            d && Tn(0);
            break;
          }
          h && g(w + 131072);
          var it = w + Qt;
          if (w < yt) {
            var at = c - yt,
              Mt = Math.min(yt, it);
            for (at + w < 0 && Tn(3); w < Mt; ++w) r[w] = o[at + w];
          }
          for (; w < it; ++w) r[w] = r[w - yt];
        }
      }
      (e.l = _),
        (e.p = qt),
        (e.b = w),
        (e.f = v),
        _ && ((v = 1), (e.m = L), (e.d = N), (e.n = A));
    } while (!v);
    return w != r.length && f ? xb(r, 0, w) : r.subarray(0, w);
  },
  tat = new Fn(0),
  eat = function (t) {
    (t[0] != 31 || t[1] != 139 || t[2] != 8) && Tn(6, "invalid gzip data");
    var e = t[3],
      r = 10;
    e & 4 && (r += (t[10] | (t[11] << 8)) + 2);
    for (var o = ((e >> 3) & 1) + ((e >> 4) & 1); o > 0; o -= !t[r++]);
    return r + (e & 2);
  },
  nat = function (t) {
    var e = t.length;
    return (
      (t[e - 4] | (t[e - 3] << 8) | (t[e - 2] << 16) | (t[e - 1] << 24)) >>> 0
    );
  },
  rat = function (t, e) {
    return (
      ((t[0] & 15) != 8 || t[0] >> 4 > 7 || ((t[0] << 8) | t[1]) % 31) &&
        Tn(6, "invalid zlib data"),
      ((t[1] >> 5) & 1) == +!e &&
        Tn(
          6,
          "invalid zlib data: " +
            (t[1] & 32 ? "need" : "unexpected") +
            " dictionary",
        ),
      ((t[1] >> 3) & 4) + 2
    );
  };
function iat(t, e) {
  return id(t, { i: 2 }, e && e.out, e && e.dictionary);
}
function oat(t, e) {
  var r = eat(t);
  return (
    r + 8 > t.length && Tn(6, "invalid gzip data"),
    id(
      t.subarray(r, -8),
      { i: 2 },
      (e && e.out) || new Fn(nat(t)),
      e && e.dictionary,
    )
  );
}
function sat(t, e) {
  return id(
    t.subarray(rat(t, e && e.dictionary), -4),
    { i: 2 },
    e && e.out,
    e && e.dictionary,
  );
}
function lat(t, e) {
  return t[0] == 31 && t[1] == 139 && t[2] == 8
    ? oat(t, e)
    : (t[0] & 15) != 8 || t[0] >> 4 > 7 || ((t[0] << 8) | t[1]) % 31
      ? iat(t, e)
      : sat(t, e);
}
var ih = typeof TextDecoder < "u" && new TextDecoder(),
  aat = 0;
try {
  ih.decode(tat, { stream: !0 }), (aat = 1);
} catch {}
var cat = function (t) {
  for (var e = "", r = 0; ; ) {
    var o = t[r++],
      s = (o > 127) + (o > 223) + (o > 239);
    if (r + s > t.length) return { s: e, r: xb(t, r - 1) };
    s
      ? s == 3
        ? ((o =
            (((o & 15) << 18) |
              ((t[r++] & 63) << 12) |
              ((t[r++] & 63) << 6) |
              (t[r++] & 63)) -
            65536),
          (e += String.fromCharCode(55296 | (o >> 10), 56320 | (o & 1023))))
        : s & 1
          ? (e += String.fromCharCode(((o & 31) << 6) | (t[r++] & 63)))
          : (e += String.fromCharCode(
              ((o & 15) << 12) | ((t[r++] & 63) << 6) | (t[r++] & 63),
            ))
      : (e += String.fromCharCode(o));
  }
};
function uat(t, e) {
  if (e) {
    for (var r = "", o = 0; o < t.length; o += 16384)
      r += String.fromCharCode.apply(null, t.subarray(o, o + 16384));
    return r;
  } else {
    if (ih) return ih.decode(t);
    var s = cat(t),
      c = s.s,
      r = s.r;
    return r.length && Tn(8), c;
  }
}
const wf = () => {},
  hn = () => Promise.resolve();
function fat() {
  const t = Sr({
    state: new My(),
    waitForConnection: f,
    reconnect: s,
    ws: new EventTarget(),
  });
  (t.state.filesMap = Sr(t.state.filesMap)),
    (t.state.idMap = Sr(t.state.idMap));
  let e;
  const r = {
    getFiles: () => e.files,
    getPaths: () => e.paths,
    getConfig: () => e.config,
    getModuleGraph: async (h) => e.moduleGraph[h],
    getUnhandledErrors: () => e.unhandledErrors,
    getTransformResult: async (h) => ({ code: h, source: "", map: null }),
    onDone: wf,
    onCollected: hn,
    onTaskUpdate: wf,
    writeFile: hn,
    rerun: hn,
    updateSnapshot: hn,
    resolveSnapshotPath: hn,
    snapshotSaved: hn,
    onAfterSuiteRun: hn,
    onCancel: hn,
    getCountOfFailedTests: () => 0,
    sendLog: hn,
    resolveSnapshotRawPath: hn,
    readSnapshotFile: hn,
    saveSnapshotFile: hn,
    readTestFile: hn,
    removeSnapshotFile: hn,
    onUnhandledError: wf,
    saveTestFile: hn,
    getProvidedContext: () => ({}),
  };
  t.rpc = r;
  let o;
  function s() {
    c();
  }
  async function c() {
    var v;
    const h = await fetch(window.METADATA_PATH),
      d =
        ((v = h.headers.get("content-type")) == null
          ? void 0
          : v.toLowerCase()) || "";
    if (d.includes("application/gzip") || d.includes("application/x-gzip")) {
      const y = new Uint8Array(await h.arrayBuffer()),
        w = uat(lat(y));
      e = th(w);
    } else e = th(await h.text());
    const g = new Event("open");
    t.ws.dispatchEvent(g);
  }
  c();
  function f() {
    return o;
  }
  return t;
}
const Dl = Zt("idle"),
  xi = Zt([]),
  De = (function () {
    return Xr
      ? fat()
      : _T(CT, {
          reactive: Sr,
          handlers: {
            onTaskUpdate() {
              Dl.value = "running";
            },
            onFinished(e, r) {
              (Dl.value = "idle"), (xi.value = (r || []).map(ob));
            },
            onFinishedReportCoverage() {
              const e = document.querySelector("iframe#vitest-ui-coverage");
              e instanceof HTMLIFrameElement &&
                e.contentWindow &&
                e.contentWindow.location.reload();
            },
          },
        });
  })();
function hat(t, e) {
  return t.name.localeCompare(e.name);
}
const od = bs({}),
  ro = Zt("CONNECTING"),
  mn = xt(() => De.state.getFiles().sort(hat)),
  Se = xt(() => mn.value.find((t) => t.id === xr.value)),
  _b = xt(
    () =>
      Zh(Se.value)
        .map((t) => (t == null ? void 0 : t.logs) || [])
        .flat() || [],
  );
function kc(t) {
  return mn.value.find((e) => e.id === t);
}
const dat = xt(() => ro.value === "OPEN"),
  xf = xt(() => ro.value === "CONNECTING");
xt(() => ro.value === "CLOSED");
function pat(t = De.state.getFiles()) {
  return Sb(t);
}
function Sb(t) {
  return (
    t.forEach((e) => {
      delete e.result, Zh(e).forEach((r) => delete r.result);
    }),
    De.rpc.rerun(t.map((e) => e.filepath))
  );
}
function gat() {
  if (Se.value) return Sb([Se.value]);
}
Fe(
  () => De.ws,
  (t) => {
    (ro.value = Xr ? "OPEN" : "CONNECTING"),
      t.addEventListener("open", async () => {
        (ro.value = "OPEN"), De.state.filesMap.clear();
        const [e, r, o] = await Promise.all([
          De.rpc.getFiles(),
          De.rpc.getConfig(),
          De.rpc.getUnhandledErrors(),
        ]);
        if (r.standalone) {
          const c = (await De.rpc.getTestFiles()).map(([f, h]) => {
            const d = Ay(r.root, h);
            return {
              filepath: h,
              name: d,
              id: wT(`${d}${f || ""}`),
              mode: "skip",
              type: "suite",
              result: { state: "skip" },
              meta: {},
              tasks: [],
              projectName: f,
            };
          });
          De.state.collectFiles(c);
        } else De.state.collectFiles(e);
        (xi.value = (o || []).map(ob)), (od.value = r);
      }),
      t.addEventListener("close", () => {
        setTimeout(() => {
          ro.value === "CONNECTING" && (ro.value = "CLOSED");
        }, 1e3);
      });
  },
  { immediate: !0 },
);
const vat = { "text-2xl": "" },
  mat = tt(
    "div",
    { "text-lg": "", op50: "" },
    " Check your terminal or start a new server with `vitest --ui` ",
    -1,
  ),
  yat = fe({
    __name: "ConnectionOverlay",
    setup(t) {
      return (e, r) =>
        U(dat)
          ? Gt("", !0)
          : (st(),
            St(
              "div",
              {
                key: 0,
                fixed: "",
                "inset-0": "",
                p2: "",
                "z-10": "",
                "select-none": "",
                text: "center sm",
                bg: "overlay",
                "backdrop-blur-sm": "",
                "backdrop-saturate-0": "",
                onClick:
                  r[0] ||
                  (r[0] = (...o) => U(De).reconnect && U(De).reconnect(...o)),
              },
              [
                tt(
                  "div",
                  {
                    "h-full": "",
                    flex: "~ col gap-2",
                    "items-center": "",
                    "justify-center": "",
                    class: ge(U(xf) ? "animate-pulse" : ""),
                  },
                  [
                    tt(
                      "div",
                      {
                        text: "5xl",
                        class: ge(
                          U(xf)
                            ? "i-carbon:renew animate-spin animate-reverse"
                            : "i-carbon-wifi-off",
                        ),
                      },
                      null,
                      2,
                    ),
                    tt(
                      "div",
                      vat,
                      Ut(U(xf) ? "Connecting..." : "Disconnected"),
                      1,
                    ),
                    mat,
                  ],
                  2,
                ),
              ],
            ));
    },
  });
function wl(t) {
  return t
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
const Vl = qlt(),
  bat = Llt(Vl),
  wat = { class: "scrolls scrolls-rounded task-error" },
  xat = ["onClickPassive"],
  _at = ["innerHTML"],
  Sat = fe({
    __name: "ViewReportError",
    props: { root: {}, filename: {}, error: {} },
    setup(t) {
      const e = t;
      function r(f) {
        return f.startsWith(e.root) ? f.slice(e.root.length) : f;
      }
      const o = xt(() => td(Vl.value)),
        s = xt(() => {
          var f;
          return !!((f = e.error) != null && f.diff);
        }),
        c = xt(() =>
          e.error.diff ? o.value.toHtml(wl(e.error.diff)) : void 0,
        );
      return (f, h) => {
        const d = vo("tooltip");
        return (
          st(),
          St("div", wat, [
            tt("pre", null, [
              tt("b", null, Ut(f.error.name || f.error.nameStr), 1),
              me(": " + Ut(f.error.message), 1),
            ]),
            (st(!0),
            St(
              ne,
              null,
              Rn(
                f.error.stacks,
                (g, v) => (
                  st(),
                  St(
                    "div",
                    {
                      key: v,
                      class: "op80 flex gap-x-2 items-center",
                      "data-testid": "stack",
                    },
                    [
                      tt(
                        "pre",
                        null,
                        " - " +
                          Ut(r(g.file)) +
                          ":" +
                          Ut(g.line) +
                          ":" +
                          Ut(g.column),
                        1,
                      ),
                      U(ylt)(g.file, f.filename)
                        ? nn(
                            (st(),
                            St(
                              "div",
                              {
                                key: 0,
                                class:
                                  "i-carbon-launch c-red-600 dark:c-red-400 hover:cursor-pointer min-w-1em min-h-1em",
                                tabindex: "0",
                                "aria-label": "Open in Editor",
                                onClickPassive: (y) =>
                                  U(ib)(g.file, g.line, g.column),
                              },
                              null,
                              40,
                              xat,
                            )),
                            [[d, "Open in Editor", void 0, { bottom: !0 }]],
                          )
                        : Gt("", !0),
                    ],
                  )
                ),
              ),
              128,
            )),
            U(s)
              ? (st(),
                St(
                  "pre",
                  { key: 0, "data-testid": "diff", innerHTML: U(c) },
                  null,
                  8,
                  _at,
                ))
              : Gt("", !0),
          ])
        );
      };
    },
  }),
  kat = mo(Sat, [["__scopeId", "data-v-ffc45ddf"]]),
  Cat = { "h-full": "", class: "scrolls" },
  Tat = { key: 0, class: "scrolls scrolls-rounded task-error" },
  Eat = ["innerHTML"],
  Lat = {
    key: 1,
    bg: "green-500/10",
    text: "green-500 sm",
    p: "x4 y2",
    "m-2": "",
    rounded: "",
  },
  Aat = fe({
    __name: "ViewReport",
    props: { file: {} },
    setup(t) {
      const e = t;
      function r(f, h) {
        var d;
        return ((d = f.result) == null ? void 0 : d.state) !== "fail"
          ? []
          : f.type === "test" || f.type === "custom"
            ? [{ ...f, level: h }]
            : [{ ...f, level: h }, ...f.tasks.flatMap((g) => r(g, h + 1))];
      }
      function o(f, h) {
        var v, y, w;
        let d = "";
        (v = h.message) != null &&
          v.includes("\x1B") &&
          (d = `<b>${h.nameStr || h.name}</b>: ${f.toHtml(wl(h.message))}`);
        const g = (y = h.stackStr) == null ? void 0 : y.includes("\x1B");
        return (
          (g || ((w = h.stack) != null && w.includes("\x1B"))) &&
            (d.length > 0
              ? (d += f.toHtml(wl(g ? h.stackStr : h.stack)))
              : (d = `<b>${h.nameStr || h.name}</b>: ${h.message}${f.toHtml(wl(g ? h.stackStr : h.stack))}`)),
          d.length > 0 ? d : null
        );
      }
      function s(f, h) {
        const d = td(f);
        return h.map((g) => {
          var w;
          const v = g.result;
          if (!v) return g;
          const y =
            (w = v.errors) == null
              ? void 0
              : w
                  .map((_) => o(d, _))
                  .filter((_) => _ != null)
                  .join("<br><br>");
          return y != null && y.length && (v.htmlError = y), g;
        });
      }
      const c = xt(() => {
        var v, y;
        const f = e.file,
          h =
            ((v = f == null ? void 0 : f.tasks) == null
              ? void 0
              : v.flatMap((w) => r(w, 0))) ?? [],
          d = f == null ? void 0 : f.result;
        if ((y = d == null ? void 0 : d.errors) == null ? void 0 : y[0]) {
          const w = {
            id: f.id,
            name: f.name,
            level: 0,
            type: "suite",
            mode: "run",
            meta: {},
            tasks: [],
            result: d,
          };
          h.unshift(w);
        }
        return h.length > 0 ? s(Vl.value, h) : h;
      });
      return (f, h) => (
        st(),
        St("div", Cat, [
          U(c).length
            ? (st(!0),
              St(
                ne,
                { key: 0 },
                Rn(U(c), (d) => {
                  var g, v, y;
                  return (
                    st(),
                    St("div", { key: d.id }, [
                      tt(
                        "div",
                        {
                          bg: "red-500/10",
                          text: "red-500 sm",
                          p: "x3 y2",
                          "m-2": "",
                          rounded: "",
                          style: An({
                            "margin-left": `${(g = d.result) != null && g.htmlError ? 0.5 : 2 * d.level + 0.5}rem`,
                          }),
                        },
                        [
                          me(Ut(d.name) + " ", 1),
                          (v = d.result) != null && v.htmlError
                            ? (st(),
                              St("div", Tat, [
                                tt(
                                  "pre",
                                  { innerHTML: d.result.htmlError },
                                  null,
                                  8,
                                  Eat,
                                ),
                              ]))
                            : (y = d.result) != null && y.errors
                              ? (st(!0),
                                St(
                                  ne,
                                  { key: 1 },
                                  Rn(d.result.errors, (w, _) => {
                                    var N;
                                    return (
                                      st(),
                                      te(
                                        kat,
                                        {
                                          key: _,
                                          error: w,
                                          filename:
                                            (N = f.file) == null
                                              ? void 0
                                              : N.name,
                                          root: U(od).root,
                                        },
                                        null,
                                        8,
                                        ["error", "filename", "root"],
                                      )
                                    );
                                  }),
                                  128,
                                ))
                              : Gt("", !0),
                        ],
                        4,
                      ),
                    ])
                  );
                }),
                128,
              ))
            : (st(), St("div", Lat, " All tests passed in this file ")),
        ])
      );
    },
  }),
  Mat = mo(Aat, [["__scopeId", "data-v-5e7bb715"]]),
  Nat = { border: "b base", "p-4": "" },
  Pat = ["innerHTML"],
  $at = fe({
    __name: "ViewConsoleOutputEntry",
    props: { taskName: {}, type: {}, time: {}, content: {} },
    setup(t) {
      function e(r) {
        return new Date(r).toLocaleTimeString();
      }
      return (r, o) => (
        st(),
        St("div", Nat, [
          tt(
            "div",
            {
              "text-xs": "",
              "mb-1": "",
              class: ge(
                r.type === "stderr" ? "text-red-600 dark:text-red-300" : "op30",
              ),
            },
            Ut(e(r.time)) + " | " + Ut(r.taskName) + " | " + Ut(r.type),
            3,
          ),
          tt(
            "pre",
            { "data-type": "html", innerHTML: r.content },
            null,
            8,
            Pat,
          ),
        ])
      );
    },
  }),
  Cc = xt(() =>
    mn.value.filter((t) => {
      var e;
      return ((e = t.result) == null ? void 0 : e.state) === "fail";
    }),
  ),
  Tc = xt(() =>
    mn.value.filter((t) => {
      var e;
      return ((e = t.result) == null ? void 0 : e.state) === "pass";
    }),
  ),
  sd = xt(() => mn.value.filter((t) => t.mode === "skip" || t.mode === "todo"));
xt(() =>
  mn.value.filter(
    (t) =>
      !Cc.value.includes(t) && !Tc.value.includes(t) && !sd.value.includes(t),
  ),
);
xt(() => sd.value.filter((t) => t.mode === "skip"));
const um = xt(() => mn.value.filter(tu));
xt(() => sd.value.filter((t) => t.mode === "todo"));
const Oat = xt(() => Dl.value === "idle"),
  ru = xt(() => Eb(mn.value)),
  kb = xt(() =>
    ru.value.filter((t) => {
      var e;
      return ((e = t.result) == null ? void 0 : e.state) === "fail";
    }),
  ),
  Cb = xt(() =>
    ru.value.filter((t) => {
      var e;
      return ((e = t.result) == null ? void 0 : e.state) === "pass";
    }),
  ),
  Tb = xt(() => ru.value.filter((t) => t.mode === "skip" || t.mode === "todo")),
  Dat = xt(() => Tb.value.filter((t) => t.mode === "skip")),
  Rat = xt(() => Tb.value.filter((t) => t.mode === "todo"));
xt(() => kb.value.length + Cb.value.length);
const zat = xt(() => {
  const t = mn.value.reduce((e, r) => {
    var o;
    return (
      (e += Math.max(0, r.collectDuration || 0)),
      (e += Math.max(0, r.setupDuration || 0)),
      (e += Math.max(0, ((o = r.result) == null ? void 0 : o.duration) || 0)),
      (e += Math.max(0, r.environmentLoad || 0)),
      (e += Math.max(0, r.prepareDuration || 0)),
      e
    );
  }, 0);
  return t > 1e3 ? `${(t / 1e3).toFixed(2)}s` : `${Math.round(t)}ms`;
});
function Fat(t) {
  return (t = t || []), Array.isArray(t) ? t : [t];
}
function fm(t) {
  return t.type === "test" || t.type === "custom";
}
function Eb(t) {
  const e = [],
    r = Fat(t);
  for (const o of r)
    if (fm(o)) e.push(o);
    else
      for (const s of o.tasks)
        if (fm(s)) e.push(s);
        else {
          const c = Eb(s);
          for (const f of c) e.push(f);
        }
  return e;
}
const Iat = {
    key: 0,
    "h-full": "",
    class: "scrolls",
    flex: "",
    "flex-col": "",
    "data-testid": "logs",
  },
  Hat = { key: 1, p6: "" },
  qat = tt("pre", { inline: "" }, "console.log(foo)", -1),
  Bat = fe({
    __name: "ViewConsoleOutput",
    setup(t) {
      const e = xt(() => {
        const o = _b.value;
        if (o) {
          const s = td(Vl.value);
          return o.map(({ taskId: c, type: f, time: h, content: d }) => ({
            taskId: c,
            type: f,
            time: h,
            content: s.toHtml(wl(d)),
          }));
        }
      });
      function r(o) {
        const s = o && De.state.idMap.get(o);
        return (s ? xT(s).slice(1).join(" > ") : "-") || "-";
      }
      return (o, s) => {
        var f;
        const c = $at;
        return (f = U(e)) != null && f.length
          ? (st(),
            St("div", Iat, [
              (st(!0),
              St(
                ne,
                null,
                Rn(
                  U(e),
                  ({ taskId: h, type: d, time: g, content: v }) => (
                    st(),
                    St("div", { key: h, "font-mono": "" }, [
                      It(
                        c,
                        { "task-name": r(h), type: d, time: g, content: v },
                        null,
                        8,
                        ["task-name", "type", "time", "content"],
                      ),
                    ])
                  ),
                ),
                128,
              )),
            ]))
          : (st(),
            St("p", Hat, [
              me(" Log something in your test and it would print here. (e.g. "),
              qat,
              me(") "),
            ]));
      };
    },
  });
var Lb = { exports: {} };
(function (t, e) {
  (function (r, o) {
    t.exports = o();
  })(uo, function () {
    var r = navigator.userAgent,
      o = navigator.platform,
      s = /gecko\/\d/i.test(r),
      c = /MSIE \d/.test(r),
      f = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(r),
      h = /Edge\/(\d+)/.exec(r),
      d = c || f || h,
      g = d && (c ? document.documentMode || 6 : +(h || f)[1]),
      v = !h && /WebKit\//.test(r),
      y = v && /Qt\/\d+\.\d+/.test(r),
      w = !h && /Chrome\/(\d+)/.exec(r),
      _ = w && +w[1],
      N = /Opera\//.test(r),
      L = /Apple Computer/.test(navigator.vendor),
      A = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(r),
      T = /PhantomJS/.test(r),
      M = L && (/Mobile\/\w+/.test(r) || navigator.maxTouchPoints > 2),
      $ = /Android/.test(r),
      E = M || $ || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(r),
      H = M || /Mac/.test(o),
      K = /\bCrOS\b/.test(r),
      ct = /win/i.test(o),
      Y = N && r.match(/Version\/(\d*\.\d*)/);
    Y && (Y = Number(Y[1])), Y && Y >= 15 && ((N = !1), (v = !0));
    var nt = H && (y || (N && (Y == null || Y < 12.11))),
      rt = s || (d && g >= 9);
    function dt(n) {
      return new RegExp("(^|\\s)" + n + "(?:$|\\s)\\s*");
    }
    var ht = function (n, i) {
      var a = n.className,
        l = dt(i).exec(a);
      if (l) {
        var u = a.slice(l.index + l[0].length);
        n.className = a.slice(0, l.index) + (u ? l[1] + u : "");
      }
    };
    function G(n) {
      for (var i = n.childNodes.length; i > 0; --i) n.removeChild(n.firstChild);
      return n;
    }
    function z(n, i) {
      return G(n).appendChild(i);
    }
    function k(n, i, a, l) {
      var u = document.createElement(n);
      if (
        (a && (u.className = a),
        l && (u.style.cssText = l),
        typeof i == "string")
      )
        u.appendChild(document.createTextNode(i));
      else if (i) for (var p = 0; p < i.length; ++p) u.appendChild(i[p]);
      return u;
    }
    function I(n, i, a, l) {
      var u = k(n, i, a, l);
      return u.setAttribute("role", "presentation"), u;
    }
    var B;
    document.createRange
      ? (B = function (n, i, a, l) {
          var u = document.createRange();
          return u.setEnd(l || n, a), u.setStart(n, i), u;
        })
      : (B = function (n, i, a) {
          var l = document.body.createTextRange();
          try {
            l.moveToElementText(n.parentNode);
          } catch {
            return l;
          }
          return (
            l.collapse(!0),
            l.moveEnd("character", a),
            l.moveStart("character", i),
            l
          );
        });
    function Q(n, i) {
      if ((i.nodeType == 3 && (i = i.parentNode), n.contains))
        return n.contains(i);
      do if ((i.nodeType == 11 && (i = i.host), i == n)) return !0;
      while ((i = i.parentNode));
    }
    function yt(n) {
      var i = n.ownerDocument || n,
        a;
      try {
        a = n.activeElement;
      } catch {
        a = i.body || null;
      }
      for (; a && a.shadowRoot && a.shadowRoot.activeElement; )
        a = a.shadowRoot.activeElement;
      return a;
    }
    function At(n, i) {
      var a = n.className;
      dt(i).test(a) || (n.className += (a ? " " : "") + i);
    }
    function Ht(n, i) {
      for (var a = n.split(" "), l = 0; l < a.length; l++)
        a[l] && !dt(a[l]).test(i) && (i += " " + a[l]);
      return i;
    }
    var qt = function (n) {
      n.select();
    };
    M
      ? (qt = function (n) {
          (n.selectionStart = 0), (n.selectionEnd = n.value.length);
        })
      : d &&
        (qt = function (n) {
          try {
            n.select();
          } catch {}
        });
    function Jt(n) {
      return n.display.wrapper.ownerDocument;
    }
    function Qt(n) {
      return Vt(n.display.wrapper);
    }
    function Vt(n) {
      return n.getRootNode ? n.getRootNode() : n.ownerDocument;
    }
    function Tt(n) {
      return Jt(n).defaultView;
    }
    function j(n) {
      var i = Array.prototype.slice.call(arguments, 1);
      return function () {
        return n.apply(null, i);
      };
    }
    function it(n, i, a) {
      i || (i = {});
      for (var l in n)
        n.hasOwnProperty(l) &&
          (a !== !1 || !i.hasOwnProperty(l)) &&
          (i[l] = n[l]);
      return i;
    }
    function at(n, i, a, l, u) {
      i == null && ((i = n.search(/[^\s\u00a0]/)), i == -1 && (i = n.length));
      for (var p = l || 0, m = u || 0; ; ) {
        var b = n.indexOf("	", p);
        if (b < 0 || b >= i) return m + (i - p);
        (m += b - p), (m += a - (m % a)), (p = b + 1);
      }
    }
    var Mt = function () {
      (this.id = null),
        (this.f = null),
        (this.time = 0),
        (this.handler = j(this.onTimeout, this));
    };
    (Mt.prototype.onTimeout = function (n) {
      (n.id = 0),
        n.time <= +new Date()
          ? n.f()
          : setTimeout(n.handler, n.time - +new Date());
    }),
      (Mt.prototype.set = function (n, i) {
        this.f = i;
        var a = +new Date() + n;
        (!this.id || a < this.time) &&
          (clearTimeout(this.id),
          (this.id = setTimeout(this.handler, n)),
          (this.time = a));
      });
    function Et(n, i) {
      for (var a = 0; a < n.length; ++a) if (n[a] == i) return a;
      return -1;
    }
    var R = 50,
      F = {
        toString: function () {
          return "CodeMirror.Pass";
        },
      },
      V = { scroll: !1 },
      J = { origin: "*mouse" },
      lt = { origin: "+move" };
    function ft(n, i, a) {
      for (var l = 0, u = 0; ; ) {
        var p = n.indexOf("	", l);
        p == -1 && (p = n.length);
        var m = p - l;
        if (p == n.length || u + m >= i) return l + Math.min(m, i - u);
        if (((u += p - l), (u += a - (u % a)), (l = p + 1), u >= i)) return l;
      }
    }
    var kt = [""];
    function mt(n) {
      for (; kt.length <= n; ) kt.push(ut(kt) + " ");
      return kt[n];
    }
    function ut(n) {
      return n[n.length - 1];
    }
    function pt(n, i) {
      for (var a = [], l = 0; l < n.length; l++) a[l] = i(n[l], l);
      return a;
    }
    function Dt(n, i, a) {
      for (var l = 0, u = a(i); l < n.length && a(n[l]) <= u; ) l++;
      n.splice(l, 0, i);
    }
    function Nt() {}
    function Ot(n, i) {
      var a;
      return (
        Object.create
          ? (a = Object.create(n))
          : ((Nt.prototype = n), (a = new Nt())),
        i && it(i, a),
        a
      );
    }
    var Bt =
      /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
    function Kt(n) {
      return (
        /\w/.test(n) ||
        (n > "" && (n.toUpperCase() != n.toLowerCase() || Bt.test(n)))
      );
    }
    function re(n, i) {
      return i
        ? i.source.indexOf("\\w") > -1 && Kt(n)
          ? !0
          : i.test(n)
        : Kt(n);
    }
    function oe(n) {
      for (var i in n) if (n.hasOwnProperty(i) && n[i]) return !1;
      return !0;
    }
    var he =
      /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
    function se(n) {
      return n.charCodeAt(0) >= 768 && he.test(n);
    }
    function rn(n, i, a) {
      for (; (a < 0 ? i > 0 : i < n.length) && se(n.charAt(i)); ) i += a;
      return i;
    }
    function Pn(n, i, a) {
      for (var l = i > a ? -1 : 1; ; ) {
        if (i == a) return i;
        var u = (i + a) / 2,
          p = l < 0 ? Math.ceil(u) : Math.floor(u);
        if (p == i) return n(p) ? i : a;
        n(p) ? (a = p) : (i = p + l);
      }
    }
    function wn(n, i, a, l) {
      if (!n) return l(i, a, "ltr", 0);
      for (var u = !1, p = 0; p < n.length; ++p) {
        var m = n[p];
        ((m.from < a && m.to > i) || (i == a && m.to == i)) &&
          (l(
            Math.max(m.from, i),
            Math.min(m.to, a),
            m.level == 1 ? "rtl" : "ltr",
            p,
          ),
          (u = !0));
      }
      u || l(i, a, "ltr");
    }
    var hr = null;
    function Ae(n, i, a) {
      var l;
      hr = null;
      for (var u = 0; u < n.length; ++u) {
        var p = n[u];
        if (p.from < i && p.to > i) return u;
        p.to == i && (p.from != p.to && a == "before" ? (l = u) : (hr = u)),
          p.from == i && (p.from != p.to && a != "before" ? (l = u) : (hr = u));
      }
      return l ?? hr;
    }
    var xn = (function () {
      var n =
          "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",
        i =
          "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111";
      function a(S) {
        return S <= 247
          ? n.charAt(S)
          : 1424 <= S && S <= 1524
            ? "R"
            : 1536 <= S && S <= 1785
              ? i.charAt(S - 1536)
              : 1774 <= S && S <= 2220
                ? "r"
                : 8192 <= S && S <= 8203
                  ? "w"
                  : S == 8204
                    ? "b"
                    : "L";
      }
      var l = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,
        u = /[stwN]/,
        p = /[LRr]/,
        m = /[Lb1n]/,
        b = /[1n]/;
      function x(S, P, D) {
        (this.level = S), (this.from = P), (this.to = D);
      }
      return function (S, P) {
        var D = P == "ltr" ? "L" : "R";
        if (S.length == 0 || (P == "ltr" && !l.test(S))) return !1;
        for (var W = S.length, q = [], Z = 0; Z < W; ++Z)
          q.push(a(S.charCodeAt(Z)));
        for (var ot = 0, vt = D; ot < W; ++ot) {
          var bt = q[ot];
          bt == "m" ? (q[ot] = vt) : (vt = bt);
        }
        for (var Ct = 0, wt = D; Ct < W; ++Ct) {
          var Lt = q[Ct];
          Lt == "1" && wt == "r"
            ? (q[Ct] = "n")
            : p.test(Lt) && ((wt = Lt), Lt == "r" && (q[Ct] = "R"));
        }
        for (var zt = 1, $t = q[0]; zt < W - 1; ++zt) {
          var Xt = q[zt];
          Xt == "+" && $t == "1" && q[zt + 1] == "1"
            ? (q[zt] = "1")
            : Xt == "," &&
              $t == q[zt + 1] &&
              ($t == "1" || $t == "n") &&
              (q[zt] = $t),
            ($t = Xt);
        }
        for (var ve = 0; ve < W; ++ve) {
          var Ue = q[ve];
          if (Ue == ",") q[ve] = "N";
          else if (Ue == "%") {
            var _e = void 0;
            for (_e = ve + 1; _e < W && q[_e] == "%"; ++_e);
            for (
              var kn =
                  (ve && q[ve - 1] == "!") || (_e < W && q[_e] == "1")
                    ? "1"
                    : "N",
                cn = ve;
              cn < _e;
              ++cn
            )
              q[cn] = kn;
            ve = _e - 1;
          }
        }
        for (var Ne = 0, un = D; Ne < W; ++Ne) {
          var Ge = q[Ne];
          un == "L" && Ge == "1" ? (q[Ne] = "L") : p.test(Ge) && (un = Ge);
        }
        for (var ze = 0; ze < W; ++ze)
          if (u.test(q[ze])) {
            var Pe = void 0;
            for (Pe = ze + 1; Pe < W && u.test(q[Pe]); ++Pe);
            for (
              var Ee = (ze ? q[ze - 1] : D) == "L",
                fn = (Pe < W ? q[Pe] : D) == "L",
                Uo = Ee == fn ? (Ee ? "L" : "R") : D,
                ui = ze;
              ui < Pe;
              ++ui
            )
              q[ui] = Uo;
            ze = Pe - 1;
          }
        for (var Ze = [], mr, je = 0; je < W; )
          if (m.test(q[je])) {
            var tf = je;
            for (++je; je < W && m.test(q[je]); ++je);
            Ze.push(new x(0, tf, je));
          } else {
            var Ir = je,
              ji = Ze.length,
              Gi = P == "rtl" ? 1 : 0;
            for (++je; je < W && q[je] != "L"; ++je);
            for (var tn = Ir; tn < je; )
              if (b.test(q[tn])) {
                Ir < tn && (Ze.splice(ji, 0, new x(1, Ir, tn)), (ji += Gi));
                var jo = tn;
                for (++tn; tn < je && b.test(q[tn]); ++tn);
                Ze.splice(ji, 0, new x(2, jo, tn)), (ji += Gi), (Ir = tn);
              } else ++tn;
            Ir < je && Ze.splice(ji, 0, new x(1, Ir, je));
          }
        return (
          P == "ltr" &&
            (Ze[0].level == 1 &&
              (mr = S.match(/^\s+/)) &&
              ((Ze[0].from = mr[0].length),
              Ze.unshift(new x(0, 0, mr[0].length))),
            ut(Ze).level == 1 &&
              (mr = S.match(/\s+$/)) &&
              ((ut(Ze).to -= mr[0].length),
              Ze.push(new x(0, W - mr[0].length, W)))),
          P == "rtl" ? Ze.reverse() : Ze
        );
      };
    })();
    function Yt(n, i) {
      var a = n.order;
      return a == null && (a = n.order = xn(n.text, i)), a;
    }
    var Zl = [],
      Rt = function (n, i, a) {
        if (n.addEventListener) n.addEventListener(i, a, !1);
        else if (n.attachEvent) n.attachEvent("on" + i, a);
        else {
          var l = n._handlers || (n._handlers = {});
          l[i] = (l[i] || Zl).concat(a);
        }
      };
    function Pr(n, i) {
      return (n._handlers && n._handlers[i]) || Zl;
    }
    function Ke(n, i, a) {
      if (n.removeEventListener) n.removeEventListener(i, a, !1);
      else if (n.detachEvent) n.detachEvent("on" + i, a);
      else {
        var l = n._handlers,
          u = l && l[i];
        if (u) {
          var p = Et(u, a);
          p > -1 && (l[i] = u.slice(0, p).concat(u.slice(p + 1)));
        }
      }
    }
    function ke(n, i) {
      var a = Pr(n, i);
      if (a.length)
        for (
          var l = Array.prototype.slice.call(arguments, 2), u = 0;
          u < a.length;
          ++u
        )
          a[u].apply(null, l);
    }
    function Ce(n, i, a) {
      return (
        typeof i == "string" &&
          (i = {
            type: i,
            preventDefault: function () {
              this.defaultPrevented = !0;
            },
          }),
        ke(n, a || i.type, n, i),
        on(i) || i.codemirrorIgnore
      );
    }
    function Hn(n) {
      var i = n._handlers && n._handlers.cursorActivity;
      if (i)
        for (
          var a =
              n.curOp.cursorActivityHandlers ||
              (n.curOp.cursorActivityHandlers = []),
            l = 0;
          l < i.length;
          ++l
        )
          Et(a, i[l]) == -1 && a.push(i[l]);
    }
    function _n(n, i) {
      return Pr(n, i).length > 0;
    }
    function Vn(n) {
      (n.prototype.on = function (i, a) {
        Rt(this, i, a);
      }),
        (n.prototype.off = function (i, a) {
          Ke(this, i, a);
        });
    }
    function Xe(n) {
      n.preventDefault ? n.preventDefault() : (n.returnValue = !1);
    }
    function bo(n) {
      n.stopPropagation ? n.stopPropagation() : (n.cancelBubble = !0);
    }
    function on(n) {
      return n.defaultPrevented != null
        ? n.defaultPrevented
        : n.returnValue == !1;
    }
    function Qr(n) {
      Xe(n), bo(n);
    }
    function Ss(n) {
      return n.target || n.srcElement;
    }
    function Kn(n) {
      var i = n.which;
      return (
        i == null &&
          (n.button & 1
            ? (i = 1)
            : n.button & 2
              ? (i = 3)
              : n.button & 4 && (i = 2)),
        H && n.ctrlKey && i == 1 && (i = 3),
        i
      );
    }
    var lu = (function () {
        if (d && g < 9) return !1;
        var n = k("div");
        return "draggable" in n || "dragDrop" in n;
      })(),
      wo;
    function Ql(n) {
      if (wo == null) {
        var i = k("span", "​");
        z(n, k("span", [i, document.createTextNode("x")])),
          n.firstChild.offsetHeight != 0 &&
            (wo = i.offsetWidth <= 1 && i.offsetHeight > 2 && !(d && g < 8));
      }
      var a = wo
        ? k("span", "​")
        : k(
            "span",
            " ",
            null,
            "display: inline-block; width: 1px; margin-right: -1px",
          );
      return a.setAttribute("cm-text", ""), a;
    }
    var ks;
    function Jr(n) {
      if (ks != null) return ks;
      var i = z(n, document.createTextNode("AخA")),
        a = B(i, 0, 1).getBoundingClientRect(),
        l = B(i, 1, 2).getBoundingClientRect();
      return G(n), !a || a.left == a.right ? !1 : (ks = l.right - a.right < 3);
    }
    var qn =
        `

b`.split(/\n/).length != 3
          ? function (n) {
              for (var i = 0, a = [], l = n.length; i <= l; ) {
                var u = n.indexOf(
                  `
`,
                  i,
                );
                u == -1 && (u = n.length);
                var p = n.slice(i, n.charAt(u - 1) == "\r" ? u - 1 : u),
                  m = p.indexOf("\r");
                m != -1
                  ? (a.push(p.slice(0, m)), (i += m + 1))
                  : (a.push(p), (i = u + 1));
              }
              return a;
            }
          : function (n) {
              return n.split(/\r\n?|\n/);
            },
      ti = window.getSelection
        ? function (n) {
            try {
              return n.selectionStart != n.selectionEnd;
            } catch {
              return !1;
            }
          }
        : function (n) {
            var i;
            try {
              i = n.ownerDocument.selection.createRange();
            } catch {}
            return !i || i.parentElement() != n
              ? !1
              : i.compareEndPoints("StartToEnd", i) != 0;
          },
      Jl = (function () {
        var n = k("div");
        return "oncopy" in n
          ? !0
          : (n.setAttribute("oncopy", "return;"),
            typeof n.oncopy == "function");
      })(),
      Xn = null;
    function au(n) {
      if (Xn != null) return Xn;
      var i = z(n, k("span", "x")),
        a = i.getBoundingClientRect(),
        l = B(i, 0, 1).getBoundingClientRect();
      return (Xn = Math.abs(a.left - l.left) > 1);
    }
    var xo = {},
      Yn = {};
    function Zn(n, i) {
      arguments.length > 2 &&
        (i.dependencies = Array.prototype.slice.call(arguments, 2)),
        (xo[n] = i);
    }
    function Ri(n, i) {
      Yn[n] = i;
    }
    function _o(n) {
      if (typeof n == "string" && Yn.hasOwnProperty(n)) n = Yn[n];
      else if (n && typeof n.name == "string" && Yn.hasOwnProperty(n.name)) {
        var i = Yn[n.name];
        typeof i == "string" && (i = { name: i }),
          (n = Ot(i, n)),
          (n.name = i.name);
      } else {
        if (typeof n == "string" && /^[\w\-]+\/[\w\-]+\+xml$/.test(n))
          return _o("application/xml");
        if (typeof n == "string" && /^[\w\-]+\/[\w\-]+\+json$/.test(n))
          return _o("application/json");
      }
      return typeof n == "string" ? { name: n } : n || { name: "null" };
    }
    function So(n, i) {
      i = _o(i);
      var a = xo[i.name];
      if (!a) return So(n, "text/plain");
      var l = a(n, i);
      if (ei.hasOwnProperty(i.name)) {
        var u = ei[i.name];
        for (var p in u)
          u.hasOwnProperty(p) &&
            (l.hasOwnProperty(p) && (l["_" + p] = l[p]), (l[p] = u[p]));
      }
      if (
        ((l.name = i.name),
        i.helperType && (l.helperType = i.helperType),
        i.modeProps)
      )
        for (var m in i.modeProps) l[m] = i.modeProps[m];
      return l;
    }
    var ei = {};
    function ko(n, i) {
      var a = ei.hasOwnProperty(n) ? ei[n] : (ei[n] = {});
      it(i, a);
    }
    function dr(n, i) {
      if (i === !0) return i;
      if (n.copyState) return n.copyState(i);
      var a = {};
      for (var l in i) {
        var u = i[l];
        u instanceof Array && (u = u.concat([])), (a[l] = u);
      }
      return a;
    }
    function Cs(n, i) {
      for (var a; n.innerMode && ((a = n.innerMode(i)), !(!a || a.mode == n)); )
        (i = a.state), (n = a.mode);
      return a || { mode: n, state: i };
    }
    function Co(n, i, a) {
      return n.startState ? n.startState(i, a) : !0;
    }
    var Te = function (n, i, a) {
      (this.pos = this.start = 0),
        (this.string = n),
        (this.tabSize = i || 8),
        (this.lastColumnPos = this.lastColumnValue = 0),
        (this.lineStart = 0),
        (this.lineOracle = a);
    };
    (Te.prototype.eol = function () {
      return this.pos >= this.string.length;
    }),
      (Te.prototype.sol = function () {
        return this.pos == this.lineStart;
      }),
      (Te.prototype.peek = function () {
        return this.string.charAt(this.pos) || void 0;
      }),
      (Te.prototype.next = function () {
        if (this.pos < this.string.length)
          return this.string.charAt(this.pos++);
      }),
      (Te.prototype.eat = function (n) {
        var i = this.string.charAt(this.pos),
          a;
        if (
          (typeof n == "string"
            ? (a = i == n)
            : (a = i && (n.test ? n.test(i) : n(i))),
          a)
        )
          return ++this.pos, i;
      }),
      (Te.prototype.eatWhile = function (n) {
        for (var i = this.pos; this.eat(n); );
        return this.pos > i;
      }),
      (Te.prototype.eatSpace = function () {
        for (
          var n = this.pos;
          /[\s\u00a0]/.test(this.string.charAt(this.pos));
        )
          ++this.pos;
        return this.pos > n;
      }),
      (Te.prototype.skipToEnd = function () {
        this.pos = this.string.length;
      }),
      (Te.prototype.skipTo = function (n) {
        var i = this.string.indexOf(n, this.pos);
        if (i > -1) return (this.pos = i), !0;
      }),
      (Te.prototype.backUp = function (n) {
        this.pos -= n;
      }),
      (Te.prototype.column = function () {
        return (
          this.lastColumnPos < this.start &&
            ((this.lastColumnValue = at(
              this.string,
              this.start,
              this.tabSize,
              this.lastColumnPos,
              this.lastColumnValue,
            )),
            (this.lastColumnPos = this.start)),
          this.lastColumnValue -
            (this.lineStart ? at(this.string, this.lineStart, this.tabSize) : 0)
        );
      }),
      (Te.prototype.indentation = function () {
        return (
          at(this.string, null, this.tabSize) -
          (this.lineStart ? at(this.string, this.lineStart, this.tabSize) : 0)
        );
      }),
      (Te.prototype.match = function (n, i, a) {
        if (typeof n == "string") {
          var l = function (m) {
              return a ? m.toLowerCase() : m;
            },
            u = this.string.substr(this.pos, n.length);
          if (l(u) == l(n)) return i !== !1 && (this.pos += n.length), !0;
        } else {
          var p = this.string.slice(this.pos).match(n);
          return p && p.index > 0
            ? null
            : (p && i !== !1 && (this.pos += p[0].length), p);
        }
      }),
      (Te.prototype.current = function () {
        return this.string.slice(this.start, this.pos);
      }),
      (Te.prototype.hideFirstChars = function (n, i) {
        this.lineStart += n;
        try {
          return i();
        } finally {
          this.lineStart -= n;
        }
      }),
      (Te.prototype.lookAhead = function (n) {
        var i = this.lineOracle;
        return i && i.lookAhead(n);
      }),
      (Te.prototype.baseToken = function () {
        var n = this.lineOracle;
        return n && n.baseToken(this.pos);
      });
    function Pt(n, i) {
      if (((i -= n.first), i < 0 || i >= n.size))
        throw new Error(
          "There is no line " + (i + n.first) + " in the document.",
        );
      for (var a = n; !a.lines; )
        for (var l = 0; ; ++l) {
          var u = a.children[l],
            p = u.chunkSize();
          if (i < p) {
            a = u;
            break;
          }
          i -= p;
        }
      return a.lines[i];
    }
    function $r(n, i, a) {
      var l = [],
        u = i.line;
      return (
        n.iter(i.line, a.line + 1, function (p) {
          var m = p.text;
          u == a.line && (m = m.slice(0, a.ch)),
            u == i.line && (m = m.slice(i.ch)),
            l.push(m),
            ++u;
        }),
        l
      );
    }
    function Ts(n, i, a) {
      var l = [];
      return (
        n.iter(i, a, function (u) {
          l.push(u.text);
        }),
        l
      );
    }
    function $n(n, i) {
      var a = i - n.height;
      if (a) for (var l = n; l; l = l.parent) l.height += a;
    }
    function C(n) {
      if (n.parent == null) return null;
      for (
        var i = n.parent, a = Et(i.lines, n), l = i.parent;
        l;
        i = l, l = l.parent
      )
        for (var u = 0; l.children[u] != i; ++u) a += l.children[u].chunkSize();
      return a + i.first;
    }
    function O(n, i) {
      var a = n.first;
      t: do {
        for (var l = 0; l < n.children.length; ++l) {
          var u = n.children[l],
            p = u.height;
          if (i < p) {
            n = u;
            continue t;
          }
          (i -= p), (a += u.chunkSize());
        }
        return a;
      } while (!n.lines);
      for (var m = 0; m < n.lines.length; ++m) {
        var b = n.lines[m],
          x = b.height;
        if (i < x) break;
        i -= x;
      }
      return a + m;
    }
    function et(n, i) {
      return i >= n.first && i < n.first + n.size;
    }
    function gt(n, i) {
      return String(n.lineNumberFormatter(i + n.firstLineNumber));
    }
    function X(n, i, a) {
      if ((a === void 0 && (a = null), !(this instanceof X)))
        return new X(n, i, a);
      (this.line = n), (this.ch = i), (this.sticky = a);
    }
    function _t(n, i) {
      return n.line - i.line || n.ch - i.ch;
    }
    function ce(n, i) {
      return n.sticky == i.sticky && _t(n, i) == 0;
    }
    function He(n) {
      return X(n.line, n.ch);
    }
    function sn(n, i) {
      return _t(n, i) < 0 ? i : n;
    }
    function To(n, i) {
      return _t(n, i) < 0 ? n : i;
    }
    function wd(n, i) {
      return Math.max(n.first, Math.min(i, n.first + n.size - 1));
    }
    function Wt(n, i) {
      if (i.line < n.first) return X(n.first, 0);
      var a = n.first + n.size - 1;
      return i.line > a
        ? X(a, Pt(n, a).text.length)
        : vw(i, Pt(n, i.line).text.length);
    }
    function vw(n, i) {
      var a = n.ch;
      return a == null || a > i ? X(n.line, i) : a < 0 ? X(n.line, 0) : n;
    }
    function xd(n, i) {
      for (var a = [], l = 0; l < i.length; l++) a[l] = Wt(n, i[l]);
      return a;
    }
    var ta = function (n, i) {
        (this.state = n), (this.lookAhead = i);
      },
      pr = function (n, i, a, l) {
        (this.state = i),
          (this.doc = n),
          (this.line = a),
          (this.maxLookAhead = l || 0),
          (this.baseTokens = null),
          (this.baseTokenPos = 1);
      };
    (pr.prototype.lookAhead = function (n) {
      var i = this.doc.getLine(this.line + n);
      return i != null && n > this.maxLookAhead && (this.maxLookAhead = n), i;
    }),
      (pr.prototype.baseToken = function (n) {
        if (!this.baseTokens) return null;
        for (; this.baseTokens[this.baseTokenPos] <= n; )
          this.baseTokenPos += 2;
        var i = this.baseTokens[this.baseTokenPos + 1];
        return {
          type: i && i.replace(/( |^)overlay .*/, ""),
          size: this.baseTokens[this.baseTokenPos] - n,
        };
      }),
      (pr.prototype.nextLine = function () {
        this.line++, this.maxLookAhead > 0 && this.maxLookAhead--;
      }),
      (pr.fromSaved = function (n, i, a) {
        return i instanceof ta
          ? new pr(n, dr(n.mode, i.state), a, i.lookAhead)
          : new pr(n, dr(n.mode, i), a);
      }),
      (pr.prototype.save = function (n) {
        var i = n !== !1 ? dr(this.doc.mode, this.state) : this.state;
        return this.maxLookAhead > 0 ? new ta(i, this.maxLookAhead) : i;
      });
    function _d(n, i, a, l) {
      var u = [n.state.modeGen],
        p = {};
      Ld(
        n,
        i.text,
        n.doc.mode,
        a,
        function (S, P) {
          return u.push(S, P);
        },
        p,
        l,
      );
      for (
        var m = a.state,
          b = function (S) {
            a.baseTokens = u;
            var P = n.state.overlays[S],
              D = 1,
              W = 0;
            (a.state = !0),
              Ld(
                n,
                i.text,
                P.mode,
                a,
                function (q, Z) {
                  for (var ot = D; W < q; ) {
                    var vt = u[D];
                    vt > q && u.splice(D, 1, q, u[D + 1], vt),
                      (D += 2),
                      (W = Math.min(q, vt));
                  }
                  if (Z)
                    if (P.opaque)
                      u.splice(ot, D - ot, q, "overlay " + Z), (D = ot + 2);
                    else
                      for (; ot < D; ot += 2) {
                        var bt = u[ot + 1];
                        u[ot + 1] = (bt ? bt + " " : "") + "overlay " + Z;
                      }
                },
                p,
              ),
              (a.state = m),
              (a.baseTokens = null),
              (a.baseTokenPos = 1);
          },
          x = 0;
        x < n.state.overlays.length;
        ++x
      )
        b(x);
      return { styles: u, classes: p.bgClass || p.textClass ? p : null };
    }
    function Sd(n, i, a) {
      if (!i.styles || i.styles[0] != n.state.modeGen) {
        var l = Es(n, C(i)),
          u =
            i.text.length > n.options.maxHighlightLength &&
            dr(n.doc.mode, l.state),
          p = _d(n, i, l);
        u && (l.state = u),
          (i.stateAfter = l.save(!u)),
          (i.styles = p.styles),
          p.classes
            ? (i.styleClasses = p.classes)
            : i.styleClasses && (i.styleClasses = null),
          a === n.doc.highlightFrontier &&
            (n.doc.modeFrontier = Math.max(
              n.doc.modeFrontier,
              ++n.doc.highlightFrontier,
            ));
      }
      return i.styles;
    }
    function Es(n, i, a) {
      var l = n.doc,
        u = n.display;
      if (!l.mode.startState) return new pr(l, !0, i);
      var p = mw(n, i, a),
        m = p > l.first && Pt(l, p - 1).stateAfter,
        b = m ? pr.fromSaved(l, m, p) : new pr(l, Co(l.mode), p);
      return (
        l.iter(p, i, function (x) {
          cu(n, x.text, b);
          var S = b.line;
          (x.stateAfter =
            S == i - 1 || S % 5 == 0 || (S >= u.viewFrom && S < u.viewTo)
              ? b.save()
              : null),
            b.nextLine();
        }),
        a && (l.modeFrontier = b.line),
        b
      );
    }
    function cu(n, i, a, l) {
      var u = n.doc.mode,
        p = new Te(i, n.options.tabSize, a);
      for (p.start = p.pos = l || 0, i == "" && kd(u, a.state); !p.eol(); )
        uu(u, p, a.state), (p.start = p.pos);
    }
    function kd(n, i) {
      if (n.blankLine) return n.blankLine(i);
      if (n.innerMode) {
        var a = Cs(n, i);
        if (a.mode.blankLine) return a.mode.blankLine(a.state);
      }
    }
    function uu(n, i, a, l) {
      for (var u = 0; u < 10; u++) {
        l && (l[0] = Cs(n, a).mode);
        var p = n.token(i, a);
        if (i.pos > i.start) return p;
      }
      throw new Error("Mode " + n.name + " failed to advance stream.");
    }
    var Cd = function (n, i, a) {
      (this.start = n.start),
        (this.end = n.pos),
        (this.string = n.current()),
        (this.type = i || null),
        (this.state = a);
    };
    function Td(n, i, a, l) {
      var u = n.doc,
        p = u.mode,
        m;
      i = Wt(u, i);
      var b = Pt(u, i.line),
        x = Es(n, i.line, a),
        S = new Te(b.text, n.options.tabSize, x),
        P;
      for (l && (P = []); (l || S.pos < i.ch) && !S.eol(); )
        (S.start = S.pos),
          (m = uu(p, S, x.state)),
          l && P.push(new Cd(S, m, dr(u.mode, x.state)));
      return l ? P : new Cd(S, m, x.state);
    }
    function Ed(n, i) {
      if (n)
        for (;;) {
          var a = n.match(/(?:^|\s+)line-(background-)?(\S+)/);
          if (!a) break;
          n = n.slice(0, a.index) + n.slice(a.index + a[0].length);
          var l = a[1] ? "bgClass" : "textClass";
          i[l] == null
            ? (i[l] = a[2])
            : new RegExp("(?:^|\\s)" + a[2] + "(?:$|\\s)").test(i[l]) ||
              (i[l] += " " + a[2]);
        }
      return n;
    }
    function Ld(n, i, a, l, u, p, m) {
      var b = a.flattenSpans;
      b == null && (b = n.options.flattenSpans);
      var x = 0,
        S = null,
        P = new Te(i, n.options.tabSize, l),
        D,
        W = n.options.addModeClass && [null];
      for (i == "" && Ed(kd(a, l.state), p); !P.eol(); ) {
        if (
          (P.pos > n.options.maxHighlightLength
            ? ((b = !1),
              m && cu(n, i, l, P.pos),
              (P.pos = i.length),
              (D = null))
            : (D = Ed(uu(a, P, l.state, W), p)),
          W)
        ) {
          var q = W[0].name;
          q && (D = "m-" + (D ? q + " " + D : q));
        }
        if (!b || S != D) {
          for (; x < P.start; ) (x = Math.min(P.start, x + 5e3)), u(x, S);
          S = D;
        }
        P.start = P.pos;
      }
      for (; x < P.pos; ) {
        var Z = Math.min(P.pos, x + 5e3);
        u(Z, S), (x = Z);
      }
    }
    function mw(n, i, a) {
      for (
        var l,
          u,
          p = n.doc,
          m = a ? -1 : i - (n.doc.mode.innerMode ? 1e3 : 100),
          b = i;
        b > m;
        --b
      ) {
        if (b <= p.first) return p.first;
        var x = Pt(p, b - 1),
          S = x.stateAfter;
        if (
          S &&
          (!a || b + (S instanceof ta ? S.lookAhead : 0) <= p.modeFrontier)
        )
          return b;
        var P = at(x.text, null, n.options.tabSize);
        (u == null || l > P) && ((u = b - 1), (l = P));
      }
      return u;
    }
    function yw(n, i) {
      if (
        ((n.modeFrontier = Math.min(n.modeFrontier, i)),
        !(n.highlightFrontier < i - 10))
      ) {
        for (var a = n.first, l = i - 1; l > a; l--) {
          var u = Pt(n, l).stateAfter;
          if (u && (!(u instanceof ta) || l + u.lookAhead < i)) {
            a = l + 1;
            break;
          }
        }
        n.highlightFrontier = Math.min(n.highlightFrontier, a);
      }
    }
    var Ad = !1,
      Or = !1;
    function bw() {
      Ad = !0;
    }
    function ww() {
      Or = !0;
    }
    function ea(n, i, a) {
      (this.marker = n), (this.from = i), (this.to = a);
    }
    function Ls(n, i) {
      if (n)
        for (var a = 0; a < n.length; ++a) {
          var l = n[a];
          if (l.marker == i) return l;
        }
    }
    function xw(n, i) {
      for (var a, l = 0; l < n.length; ++l)
        n[l] != i && (a || (a = [])).push(n[l]);
      return a;
    }
    function _w(n, i, a) {
      var l =
        a &&
        window.WeakSet &&
        (a.markedSpans || (a.markedSpans = new WeakSet()));
      l && n.markedSpans && l.has(n.markedSpans)
        ? n.markedSpans.push(i)
        : ((n.markedSpans = n.markedSpans ? n.markedSpans.concat([i]) : [i]),
          l && l.add(n.markedSpans)),
        i.marker.attachLine(n);
    }
    function Sw(n, i, a) {
      var l;
      if (n)
        for (var u = 0; u < n.length; ++u) {
          var p = n[u],
            m = p.marker,
            b = p.from == null || (m.inclusiveLeft ? p.from <= i : p.from < i);
          if (
            b ||
            (p.from == i &&
              m.type == "bookmark" &&
              (!a || !p.marker.insertLeft))
          ) {
            var x = p.to == null || (m.inclusiveRight ? p.to >= i : p.to > i);
            (l || (l = [])).push(new ea(m, p.from, x ? null : p.to));
          }
        }
      return l;
    }
    function kw(n, i, a) {
      var l;
      if (n)
        for (var u = 0; u < n.length; ++u) {
          var p = n[u],
            m = p.marker,
            b = p.to == null || (m.inclusiveRight ? p.to >= i : p.to > i);
          if (
            b ||
            (p.from == i && m.type == "bookmark" && (!a || p.marker.insertLeft))
          ) {
            var x =
              p.from == null || (m.inclusiveLeft ? p.from <= i : p.from < i);
            (l || (l = [])).push(
              new ea(m, x ? null : p.from - i, p.to == null ? null : p.to - i),
            );
          }
        }
      return l;
    }
    function fu(n, i) {
      if (i.full) return null;
      var a = et(n, i.from.line) && Pt(n, i.from.line).markedSpans,
        l = et(n, i.to.line) && Pt(n, i.to.line).markedSpans;
      if (!a && !l) return null;
      var u = i.from.ch,
        p = i.to.ch,
        m = _t(i.from, i.to) == 0,
        b = Sw(a, u, m),
        x = kw(l, p, m),
        S = i.text.length == 1,
        P = ut(i.text).length + (S ? u : 0);
      if (b)
        for (var D = 0; D < b.length; ++D) {
          var W = b[D];
          if (W.to == null) {
            var q = Ls(x, W.marker);
            q ? S && (W.to = q.to == null ? null : q.to + P) : (W.to = u);
          }
        }
      if (x)
        for (var Z = 0; Z < x.length; ++Z) {
          var ot = x[Z];
          if ((ot.to != null && (ot.to += P), ot.from == null)) {
            var vt = Ls(b, ot.marker);
            vt || ((ot.from = P), S && (b || (b = [])).push(ot));
          } else (ot.from += P), S && (b || (b = [])).push(ot);
        }
      b && (b = Md(b)), x && x != b && (x = Md(x));
      var bt = [b];
      if (!S) {
        var Ct = i.text.length - 2,
          wt;
        if (Ct > 0 && b)
          for (var Lt = 0; Lt < b.length; ++Lt)
            b[Lt].to == null &&
              (wt || (wt = [])).push(new ea(b[Lt].marker, null, null));
        for (var zt = 0; zt < Ct; ++zt) bt.push(wt);
        bt.push(x);
      }
      return bt;
    }
    function Md(n) {
      for (var i = 0; i < n.length; ++i) {
        var a = n[i];
        a.from != null &&
          a.from == a.to &&
          a.marker.clearWhenEmpty !== !1 &&
          n.splice(i--, 1);
      }
      return n.length ? n : null;
    }
    function Cw(n, i, a) {
      var l = null;
      if (
        (n.iter(i.line, a.line + 1, function (q) {
          if (q.markedSpans)
            for (var Z = 0; Z < q.markedSpans.length; ++Z) {
              var ot = q.markedSpans[Z].marker;
              ot.readOnly &&
                (!l || Et(l, ot) == -1) &&
                (l || (l = [])).push(ot);
            }
        }),
        !l)
      )
        return null;
      for (var u = [{ from: i, to: a }], p = 0; p < l.length; ++p)
        for (var m = l[p], b = m.find(0), x = 0; x < u.length; ++x) {
          var S = u[x];
          if (!(_t(S.to, b.from) < 0 || _t(S.from, b.to) > 0)) {
            var P = [x, 1],
              D = _t(S.from, b.from),
              W = _t(S.to, b.to);
            (D < 0 || (!m.inclusiveLeft && !D)) &&
              P.push({ from: S.from, to: b.from }),
              (W > 0 || (!m.inclusiveRight && !W)) &&
                P.push({ from: b.to, to: S.to }),
              u.splice.apply(u, P),
              (x += P.length - 3);
          }
        }
      return u;
    }
    function Nd(n) {
      var i = n.markedSpans;
      if (i) {
        for (var a = 0; a < i.length; ++a) i[a].marker.detachLine(n);
        n.markedSpans = null;
      }
    }
    function Pd(n, i) {
      if (i) {
        for (var a = 0; a < i.length; ++a) i[a].marker.attachLine(n);
        n.markedSpans = i;
      }
    }
    function na(n) {
      return n.inclusiveLeft ? -1 : 0;
    }
    function ra(n) {
      return n.inclusiveRight ? 1 : 0;
    }
    function hu(n, i) {
      var a = n.lines.length - i.lines.length;
      if (a != 0) return a;
      var l = n.find(),
        u = i.find(),
        p = _t(l.from, u.from) || na(n) - na(i);
      if (p) return -p;
      var m = _t(l.to, u.to) || ra(n) - ra(i);
      return m || i.id - n.id;
    }
    function $d(n, i) {
      var a = Or && n.markedSpans,
        l;
      if (a)
        for (var u = void 0, p = 0; p < a.length; ++p)
          (u = a[p]),
            u.marker.collapsed &&
              (i ? u.from : u.to) == null &&
              (!l || hu(l, u.marker) < 0) &&
              (l = u.marker);
      return l;
    }
    function Od(n) {
      return $d(n, !0);
    }
    function ia(n) {
      return $d(n, !1);
    }
    function Tw(n, i) {
      var a = Or && n.markedSpans,
        l;
      if (a)
        for (var u = 0; u < a.length; ++u) {
          var p = a[u];
          p.marker.collapsed &&
            (p.from == null || p.from < i) &&
            (p.to == null || p.to > i) &&
            (!l || hu(l, p.marker) < 0) &&
            (l = p.marker);
        }
      return l;
    }
    function Dd(n, i, a, l, u) {
      var p = Pt(n, i),
        m = Or && p.markedSpans;
      if (m)
        for (var b = 0; b < m.length; ++b) {
          var x = m[b];
          if (x.marker.collapsed) {
            var S = x.marker.find(0),
              P = _t(S.from, a) || na(x.marker) - na(u),
              D = _t(S.to, l) || ra(x.marker) - ra(u);
            if (
              !((P >= 0 && D <= 0) || (P <= 0 && D >= 0)) &&
              ((P <= 0 &&
                (x.marker.inclusiveRight && u.inclusiveLeft
                  ? _t(S.to, a) >= 0
                  : _t(S.to, a) > 0)) ||
                (P >= 0 &&
                  (x.marker.inclusiveRight && u.inclusiveLeft
                    ? _t(S.from, l) <= 0
                    : _t(S.from, l) < 0)))
            )
              return !0;
          }
        }
    }
    function Qn(n) {
      for (var i; (i = Od(n)); ) n = i.find(-1, !0).line;
      return n;
    }
    function Ew(n) {
      for (var i; (i = ia(n)); ) n = i.find(1, !0).line;
      return n;
    }
    function Lw(n) {
      for (var i, a; (i = ia(n)); )
        (n = i.find(1, !0).line), (a || (a = [])).push(n);
      return a;
    }
    function du(n, i) {
      var a = Pt(n, i),
        l = Qn(a);
      return a == l ? i : C(l);
    }
    function Rd(n, i) {
      if (i > n.lastLine()) return i;
      var a = Pt(n, i),
        l;
      if (!ni(n, a)) return i;
      for (; (l = ia(a)); ) a = l.find(1, !0).line;
      return C(a) + 1;
    }
    function ni(n, i) {
      var a = Or && i.markedSpans;
      if (a) {
        for (var l = void 0, u = 0; u < a.length; ++u)
          if (((l = a[u]), !!l.marker.collapsed)) {
            if (l.from == null) return !0;
            if (
              !l.marker.widgetNode &&
              l.from == 0 &&
              l.marker.inclusiveLeft &&
              pu(n, i, l)
            )
              return !0;
          }
      }
    }
    function pu(n, i, a) {
      if (a.to == null) {
        var l = a.marker.find(1, !0);
        return pu(n, l.line, Ls(l.line.markedSpans, a.marker));
      }
      if (a.marker.inclusiveRight && a.to == i.text.length) return !0;
      for (var u = void 0, p = 0; p < i.markedSpans.length; ++p)
        if (
          ((u = i.markedSpans[p]),
          u.marker.collapsed &&
            !u.marker.widgetNode &&
            u.from == a.to &&
            (u.to == null || u.to != a.from) &&
            (u.marker.inclusiveLeft || a.marker.inclusiveRight) &&
            pu(n, i, u))
        )
          return !0;
    }
    function Dr(n) {
      n = Qn(n);
      for (var i = 0, a = n.parent, l = 0; l < a.lines.length; ++l) {
        var u = a.lines[l];
        if (u == n) break;
        i += u.height;
      }
      for (var p = a.parent; p; a = p, p = a.parent)
        for (var m = 0; m < p.children.length; ++m) {
          var b = p.children[m];
          if (b == a) break;
          i += b.height;
        }
      return i;
    }
    function oa(n) {
      if (n.height == 0) return 0;
      for (var i = n.text.length, a, l = n; (a = Od(l)); ) {
        var u = a.find(0, !0);
        (l = u.from.line), (i += u.from.ch - u.to.ch);
      }
      for (l = n; (a = ia(l)); ) {
        var p = a.find(0, !0);
        (i -= l.text.length - p.from.ch),
          (l = p.to.line),
          (i += l.text.length - p.to.ch);
      }
      return i;
    }
    function gu(n) {
      var i = n.display,
        a = n.doc;
      (i.maxLine = Pt(a, a.first)),
        (i.maxLineLength = oa(i.maxLine)),
        (i.maxLineChanged = !0),
        a.iter(function (l) {
          var u = oa(l);
          u > i.maxLineLength && ((i.maxLineLength = u), (i.maxLine = l));
        });
    }
    var Eo = function (n, i, a) {
      (this.text = n), Pd(this, i), (this.height = a ? a(this) : 1);
    };
    (Eo.prototype.lineNo = function () {
      return C(this);
    }),
      Vn(Eo);
    function Aw(n, i, a, l) {
      (n.text = i),
        n.stateAfter && (n.stateAfter = null),
        n.styles && (n.styles = null),
        n.order != null && (n.order = null),
        Nd(n),
        Pd(n, a);
      var u = l ? l(n) : 1;
      u != n.height && $n(n, u);
    }
    function Mw(n) {
      (n.parent = null), Nd(n);
    }
    var Nw = {},
      Pw = {};
    function zd(n, i) {
      if (!n || /^\s*$/.test(n)) return null;
      var a = i.addModeClass ? Pw : Nw;
      return a[n] || (a[n] = n.replace(/\S+/g, "cm-$&"));
    }
    function Fd(n, i) {
      var a = I("span", null, null, v ? "padding-right: .1px" : null),
        l = {
          pre: I("pre", [a], "CodeMirror-line"),
          content: a,
          col: 0,
          pos: 0,
          cm: n,
          trailingSpace: !1,
          splitSpaces: n.getOption("lineWrapping"),
        };
      i.measure = {};
      for (var u = 0; u <= (i.rest ? i.rest.length : 0); u++) {
        var p = u ? i.rest[u - 1] : i.line,
          m = void 0;
        (l.pos = 0),
          (l.addToken = Ow),
          Jr(n.display.measure) &&
            (m = Yt(p, n.doc.direction)) &&
            (l.addToken = Rw(l.addToken, m)),
          (l.map = []);
        var b = i != n.display.externalMeasured && C(p);
        zw(p, l, Sd(n, p, b)),
          p.styleClasses &&
            (p.styleClasses.bgClass &&
              (l.bgClass = Ht(p.styleClasses.bgClass, l.bgClass || "")),
            p.styleClasses.textClass &&
              (l.textClass = Ht(p.styleClasses.textClass, l.textClass || ""))),
          l.map.length == 0 &&
            l.map.push(0, 0, l.content.appendChild(Ql(n.display.measure))),
          u == 0
            ? ((i.measure.map = l.map), (i.measure.cache = {}))
            : ((i.measure.maps || (i.measure.maps = [])).push(l.map),
              (i.measure.caches || (i.measure.caches = [])).push({}));
      }
      if (v) {
        var x = l.content.lastChild;
        (/\bcm-tab\b/.test(x.className) ||
          (x.querySelector && x.querySelector(".cm-tab"))) &&
          (l.content.className = "cm-tab-wrap-hack");
      }
      return (
        ke(n, "renderLine", n, i.line, l.pre),
        l.pre.className &&
          (l.textClass = Ht(l.pre.className, l.textClass || "")),
        l
      );
    }
    function $w(n) {
      var i = k("span", "•", "cm-invalidchar");
      return (
        (i.title = "\\u" + n.charCodeAt(0).toString(16)),
        i.setAttribute("aria-label", i.title),
        i
      );
    }
    function Ow(n, i, a, l, u, p, m) {
      if (i) {
        var b = n.splitSpaces ? Dw(i, n.trailingSpace) : i,
          x = n.cm.state.specialChars,
          S = !1,
          P;
        if (!x.test(i))
          (n.col += i.length),
            (P = document.createTextNode(b)),
            n.map.push(n.pos, n.pos + i.length, P),
            d && g < 9 && (S = !0),
            (n.pos += i.length);
        else {
          P = document.createDocumentFragment();
          for (var D = 0; ; ) {
            x.lastIndex = D;
            var W = x.exec(i),
              q = W ? W.index - D : i.length - D;
            if (q) {
              var Z = document.createTextNode(b.slice(D, D + q));
              d && g < 9 ? P.appendChild(k("span", [Z])) : P.appendChild(Z),
                n.map.push(n.pos, n.pos + q, Z),
                (n.col += q),
                (n.pos += q);
            }
            if (!W) break;
            D += q + 1;
            var ot = void 0;
            if (W[0] == "	") {
              var vt = n.cm.options.tabSize,
                bt = vt - (n.col % vt);
              (ot = P.appendChild(k("span", mt(bt), "cm-tab"))),
                ot.setAttribute("role", "presentation"),
                ot.setAttribute("cm-text", "	"),
                (n.col += bt);
            } else
              W[0] == "\r" ||
              W[0] ==
                `
`
                ? ((ot = P.appendChild(
                    k("span", W[0] == "\r" ? "␍" : "␤", "cm-invalidchar"),
                  )),
                  ot.setAttribute("cm-text", W[0]),
                  (n.col += 1))
                : ((ot = n.cm.options.specialCharPlaceholder(W[0])),
                  ot.setAttribute("cm-text", W[0]),
                  d && g < 9
                    ? P.appendChild(k("span", [ot]))
                    : P.appendChild(ot),
                  (n.col += 1));
            n.map.push(n.pos, n.pos + 1, ot), n.pos++;
          }
        }
        if (
          ((n.trailingSpace = b.charCodeAt(i.length - 1) == 32),
          a || l || u || S || p || m)
        ) {
          var Ct = a || "";
          l && (Ct += l), u && (Ct += u);
          var wt = k("span", [P], Ct, p);
          if (m)
            for (var Lt in m)
              m.hasOwnProperty(Lt) &&
                Lt != "style" &&
                Lt != "class" &&
                wt.setAttribute(Lt, m[Lt]);
          return n.content.appendChild(wt);
        }
        n.content.appendChild(P);
      }
    }
    function Dw(n, i) {
      if (n.length > 1 && !/  /.test(n)) return n;
      for (var a = i, l = "", u = 0; u < n.length; u++) {
        var p = n.charAt(u);
        p == " " &&
          a &&
          (u == n.length - 1 || n.charCodeAt(u + 1) == 32) &&
          (p = " "),
          (l += p),
          (a = p == " ");
      }
      return l;
    }
    function Rw(n, i) {
      return function (a, l, u, p, m, b, x) {
        u = u ? u + " cm-force-border" : "cm-force-border";
        for (var S = a.pos, P = S + l.length; ; ) {
          for (
            var D = void 0, W = 0;
            W < i.length && ((D = i[W]), !(D.to > S && D.from <= S));
            W++
          );
          if (D.to >= P) return n(a, l, u, p, m, b, x);
          n(a, l.slice(0, D.to - S), u, p, null, b, x),
            (p = null),
            (l = l.slice(D.to - S)),
            (S = D.to);
        }
      };
    }
    function Id(n, i, a, l) {
      var u = !l && a.widgetNode;
      u && n.map.push(n.pos, n.pos + i, u),
        !l &&
          n.cm.display.input.needsContentAttribute &&
          (u || (u = n.content.appendChild(document.createElement("span"))),
          u.setAttribute("cm-marker", a.id)),
        u && (n.cm.display.input.setUneditable(u), n.content.appendChild(u)),
        (n.pos += i),
        (n.trailingSpace = !1);
    }
    function zw(n, i, a) {
      var l = n.markedSpans,
        u = n.text,
        p = 0;
      if (!l) {
        for (var m = 1; m < a.length; m += 2)
          i.addToken(i, u.slice(p, (p = a[m])), zd(a[m + 1], i.cm.options));
        return;
      }
      for (
        var b = u.length, x = 0, S = 1, P = "", D, W, q = 0, Z, ot, vt, bt, Ct;
        ;
      ) {
        if (q == x) {
          (Z = ot = vt = W = ""), (Ct = null), (bt = null), (q = 1 / 0);
          for (var wt = [], Lt = void 0, zt = 0; zt < l.length; ++zt) {
            var $t = l[zt],
              Xt = $t.marker;
            if (Xt.type == "bookmark" && $t.from == x && Xt.widgetNode)
              wt.push(Xt);
            else if (
              $t.from <= x &&
              ($t.to == null ||
                $t.to > x ||
                (Xt.collapsed && $t.to == x && $t.from == x))
            ) {
              if (
                ($t.to != null &&
                  $t.to != x &&
                  q > $t.to &&
                  ((q = $t.to), (ot = "")),
                Xt.className && (Z += " " + Xt.className),
                Xt.css && (W = (W ? W + ";" : "") + Xt.css),
                Xt.startStyle && $t.from == x && (vt += " " + Xt.startStyle),
                Xt.endStyle &&
                  $t.to == q &&
                  (Lt || (Lt = [])).push(Xt.endStyle, $t.to),
                Xt.title && ((Ct || (Ct = {})).title = Xt.title),
                Xt.attributes)
              )
                for (var ve in Xt.attributes)
                  (Ct || (Ct = {}))[ve] = Xt.attributes[ve];
              Xt.collapsed && (!bt || hu(bt.marker, Xt) < 0) && (bt = $t);
            } else $t.from > x && q > $t.from && (q = $t.from);
          }
          if (Lt)
            for (var Ue = 0; Ue < Lt.length; Ue += 2)
              Lt[Ue + 1] == q && (ot += " " + Lt[Ue]);
          if (!bt || bt.from == x)
            for (var _e = 0; _e < wt.length; ++_e) Id(i, 0, wt[_e]);
          if (bt && (bt.from || 0) == x) {
            if (
              (Id(
                i,
                (bt.to == null ? b + 1 : bt.to) - x,
                bt.marker,
                bt.from == null,
              ),
              bt.to == null)
            )
              return;
            bt.to == x && (bt = !1);
          }
        }
        if (x >= b) break;
        for (var kn = Math.min(b, q); ; ) {
          if (P) {
            var cn = x + P.length;
            if (!bt) {
              var Ne = cn > kn ? P.slice(0, kn - x) : P;
              i.addToken(
                i,
                Ne,
                D ? D + Z : Z,
                vt,
                x + Ne.length == q ? ot : "",
                W,
                Ct,
              );
            }
            if (cn >= kn) {
              (P = P.slice(kn - x)), (x = kn);
              break;
            }
            (x = cn), (vt = "");
          }
          (P = u.slice(p, (p = a[S++]))), (D = zd(a[S++], i.cm.options));
        }
      }
    }
    function Hd(n, i, a) {
      (this.line = i),
        (this.rest = Lw(i)),
        (this.size = this.rest ? C(ut(this.rest)) - a + 1 : 1),
        (this.node = this.text = null),
        (this.hidden = ni(n, i));
    }
    function sa(n, i, a) {
      for (var l = [], u, p = i; p < a; p = u) {
        var m = new Hd(n.doc, Pt(n.doc, p), p);
        (u = p + m.size), l.push(m);
      }
      return l;
    }
    var Lo = null;
    function Fw(n) {
      Lo
        ? Lo.ops.push(n)
        : (n.ownsGroup = Lo = { ops: [n], delayedCallbacks: [] });
    }
    function Iw(n) {
      var i = n.delayedCallbacks,
        a = 0;
      do {
        for (; a < i.length; a++) i[a].call(null);
        for (var l = 0; l < n.ops.length; l++) {
          var u = n.ops[l];
          if (u.cursorActivityHandlers)
            for (; u.cursorActivityCalled < u.cursorActivityHandlers.length; )
              u.cursorActivityHandlers[u.cursorActivityCalled++].call(
                null,
                u.cm,
              );
        }
      } while (a < i.length);
    }
    function Hw(n, i) {
      var a = n.ownsGroup;
      if (a)
        try {
          Iw(a);
        } finally {
          (Lo = null), i(a);
        }
    }
    var As = null;
    function qe(n, i) {
      var a = Pr(n, i);
      if (a.length) {
        var l = Array.prototype.slice.call(arguments, 2),
          u;
        Lo
          ? (u = Lo.delayedCallbacks)
          : As
            ? (u = As)
            : ((u = As = []), setTimeout(qw, 0));
        for (
          var p = function (b) {
              u.push(function () {
                return a[b].apply(null, l);
              });
            },
            m = 0;
          m < a.length;
          ++m
        )
          p(m);
      }
    }
    function qw() {
      var n = As;
      As = null;
      for (var i = 0; i < n.length; ++i) n[i]();
    }
    function qd(n, i, a, l) {
      for (var u = 0; u < i.changes.length; u++) {
        var p = i.changes[u];
        p == "text"
          ? Ww(n, i)
          : p == "gutter"
            ? Wd(n, i, a, l)
            : p == "class"
              ? vu(n, i)
              : p == "widget" && Uw(n, i, l);
      }
      i.changes = null;
    }
    function Ms(n) {
      return (
        n.node == n.text &&
          ((n.node = k("div", null, null, "position: relative")),
          n.text.parentNode && n.text.parentNode.replaceChild(n.node, n.text),
          n.node.appendChild(n.text),
          d && g < 8 && (n.node.style.zIndex = 2)),
        n.node
      );
    }
    function Bw(n, i) {
      var a = i.bgClass
        ? i.bgClass + " " + (i.line.bgClass || "")
        : i.line.bgClass;
      if ((a && (a += " CodeMirror-linebackground"), i.background))
        a
          ? (i.background.className = a)
          : (i.background.parentNode.removeChild(i.background),
            (i.background = null));
      else if (a) {
        var l = Ms(i);
        (i.background = l.insertBefore(k("div", null, a), l.firstChild)),
          n.display.input.setUneditable(i.background);
      }
    }
    function Bd(n, i) {
      var a = n.display.externalMeasured;
      return a && a.line == i.line
        ? ((n.display.externalMeasured = null),
          (i.measure = a.measure),
          a.built)
        : Fd(n, i);
    }
    function Ww(n, i) {
      var a = i.text.className,
        l = Bd(n, i);
      i.text == i.node && (i.node = l.pre),
        i.text.parentNode.replaceChild(l.pre, i.text),
        (i.text = l.pre),
        l.bgClass != i.bgClass || l.textClass != i.textClass
          ? ((i.bgClass = l.bgClass), (i.textClass = l.textClass), vu(n, i))
          : a && (i.text.className = a);
    }
    function vu(n, i) {
      Bw(n, i),
        i.line.wrapClass
          ? (Ms(i).className = i.line.wrapClass)
          : i.node != i.text && (i.node.className = "");
      var a = i.textClass
        ? i.textClass + " " + (i.line.textClass || "")
        : i.line.textClass;
      i.text.className = a || "";
    }
    function Wd(n, i, a, l) {
      if (
        (i.gutter && (i.node.removeChild(i.gutter), (i.gutter = null)),
        i.gutterBackground &&
          (i.node.removeChild(i.gutterBackground), (i.gutterBackground = null)),
        i.line.gutterClass)
      ) {
        var u = Ms(i);
        (i.gutterBackground = k(
          "div",
          null,
          "CodeMirror-gutter-background " + i.line.gutterClass,
          "left: " +
            (n.options.fixedGutter ? l.fixedPos : -l.gutterTotalWidth) +
            "px; width: " +
            l.gutterTotalWidth +
            "px",
        )),
          n.display.input.setUneditable(i.gutterBackground),
          u.insertBefore(i.gutterBackground, i.text);
      }
      var p = i.line.gutterMarkers;
      if (n.options.lineNumbers || p) {
        var m = Ms(i),
          b = (i.gutter = k(
            "div",
            null,
            "CodeMirror-gutter-wrapper",
            "left: " +
              (n.options.fixedGutter ? l.fixedPos : -l.gutterTotalWidth) +
              "px",
          ));
        if (
          (b.setAttribute("aria-hidden", "true"),
          n.display.input.setUneditable(b),
          m.insertBefore(b, i.text),
          i.line.gutterClass && (b.className += " " + i.line.gutterClass),
          n.options.lineNumbers &&
            (!p || !p["CodeMirror-linenumbers"]) &&
            (i.lineNumber = b.appendChild(
              k(
                "div",
                gt(n.options, a),
                "CodeMirror-linenumber CodeMirror-gutter-elt",
                "left: " +
                  l.gutterLeft["CodeMirror-linenumbers"] +
                  "px; width: " +
                  n.display.lineNumInnerWidth +
                  "px",
              ),
            )),
          p)
        )
          for (var x = 0; x < n.display.gutterSpecs.length; ++x) {
            var S = n.display.gutterSpecs[x].className,
              P = p.hasOwnProperty(S) && p[S];
            P &&
              b.appendChild(
                k(
                  "div",
                  [P],
                  "CodeMirror-gutter-elt",
                  "left: " +
                    l.gutterLeft[S] +
                    "px; width: " +
                    l.gutterWidth[S] +
                    "px",
                ),
              );
          }
      }
    }
    function Uw(n, i, a) {
      i.alignable && (i.alignable = null);
      for (
        var l = dt("CodeMirror-linewidget"), u = i.node.firstChild, p = void 0;
        u;
        u = p
      )
        (p = u.nextSibling), l.test(u.className) && i.node.removeChild(u);
      Ud(n, i, a);
    }
    function jw(n, i, a, l) {
      var u = Bd(n, i);
      return (
        (i.text = i.node = u.pre),
        u.bgClass && (i.bgClass = u.bgClass),
        u.textClass && (i.textClass = u.textClass),
        vu(n, i),
        Wd(n, i, a, l),
        Ud(n, i, l),
        i.node
      );
    }
    function Ud(n, i, a) {
      if ((jd(n, i.line, i, a, !0), i.rest))
        for (var l = 0; l < i.rest.length; l++) jd(n, i.rest[l], i, a, !1);
    }
    function jd(n, i, a, l, u) {
      if (i.widgets)
        for (var p = Ms(a), m = 0, b = i.widgets; m < b.length; ++m) {
          var x = b[m],
            S = k(
              "div",
              [x.node],
              "CodeMirror-linewidget" + (x.className ? " " + x.className : ""),
            );
          x.handleMouseEvents || S.setAttribute("cm-ignore-events", "true"),
            Gw(x, S, a, l),
            n.display.input.setUneditable(S),
            u && x.above
              ? p.insertBefore(S, a.gutter || a.text)
              : p.appendChild(S),
            qe(x, "redraw");
        }
    }
    function Gw(n, i, a, l) {
      if (n.noHScroll) {
        (a.alignable || (a.alignable = [])).push(i);
        var u = l.wrapperWidth;
        (i.style.left = l.fixedPos + "px"),
          n.coverGutter ||
            ((u -= l.gutterTotalWidth),
            (i.style.paddingLeft = l.gutterTotalWidth + "px")),
          (i.style.width = u + "px");
      }
      n.coverGutter &&
        ((i.style.zIndex = 5),
        (i.style.position = "relative"),
        n.noHScroll || (i.style.marginLeft = -l.gutterTotalWidth + "px"));
    }
    function Ns(n) {
      if (n.height != null) return n.height;
      var i = n.doc.cm;
      if (!i) return 0;
      if (!Q(document.body, n.node)) {
        var a = "position: relative;";
        n.coverGutter &&
          (a += "margin-left: -" + i.display.gutters.offsetWidth + "px;"),
          n.noHScroll &&
            (a += "width: " + i.display.wrapper.clientWidth + "px;"),
          z(i.display.measure, k("div", [n.node], null, a));
      }
      return (n.height = n.node.parentNode.offsetHeight);
    }
    function Rr(n, i) {
      for (var a = Ss(i); a != n.wrapper; a = a.parentNode)
        if (
          !a ||
          (a.nodeType == 1 && a.getAttribute("cm-ignore-events") == "true") ||
          (a.parentNode == n.sizer && a != n.mover)
        )
          return !0;
    }
    function la(n) {
      return n.lineSpace.offsetTop;
    }
    function mu(n) {
      return n.mover.offsetHeight - n.lineSpace.offsetHeight;
    }
    function Gd(n) {
      if (n.cachedPaddingH) return n.cachedPaddingH;
      var i = z(n.measure, k("pre", "x", "CodeMirror-line-like")),
        a = window.getComputedStyle
          ? window.getComputedStyle(i)
          : i.currentStyle,
        l = { left: parseInt(a.paddingLeft), right: parseInt(a.paddingRight) };
      return !isNaN(l.left) && !isNaN(l.right) && (n.cachedPaddingH = l), l;
    }
    function gr(n) {
      return R - n.display.nativeBarWidth;
    }
    function zi(n) {
      return n.display.scroller.clientWidth - gr(n) - n.display.barWidth;
    }
    function yu(n) {
      return n.display.scroller.clientHeight - gr(n) - n.display.barHeight;
    }
    function Vw(n, i, a) {
      var l = n.options.lineWrapping,
        u = l && zi(n);
      if (!i.measure.heights || (l && i.measure.width != u)) {
        var p = (i.measure.heights = []);
        if (l) {
          i.measure.width = u;
          for (
            var m = i.text.firstChild.getClientRects(), b = 0;
            b < m.length - 1;
            b++
          ) {
            var x = m[b],
              S = m[b + 1];
            Math.abs(x.bottom - S.bottom) > 2 &&
              p.push((x.bottom + S.top) / 2 - a.top);
          }
        }
        p.push(a.bottom - a.top);
      }
    }
    function Vd(n, i, a) {
      if (n.line == i) return { map: n.measure.map, cache: n.measure.cache };
      if (n.rest) {
        for (var l = 0; l < n.rest.length; l++)
          if (n.rest[l] == i)
            return { map: n.measure.maps[l], cache: n.measure.caches[l] };
        for (var u = 0; u < n.rest.length; u++)
          if (C(n.rest[u]) > a)
            return {
              map: n.measure.maps[u],
              cache: n.measure.caches[u],
              before: !0,
            };
      }
    }
    function Kw(n, i) {
      i = Qn(i);
      var a = C(i),
        l = (n.display.externalMeasured = new Hd(n.doc, i, a));
      l.lineN = a;
      var u = (l.built = Fd(n, l));
      return (l.text = u.pre), z(n.display.lineMeasure, u.pre), l;
    }
    function Kd(n, i, a, l) {
      return vr(n, Ao(n, i), a, l);
    }
    function bu(n, i) {
      if (i >= n.display.viewFrom && i < n.display.viewTo)
        return n.display.view[Hi(n, i)];
      var a = n.display.externalMeasured;
      if (a && i >= a.lineN && i < a.lineN + a.size) return a;
    }
    function Ao(n, i) {
      var a = C(i),
        l = bu(n, a);
      l && !l.text
        ? (l = null)
        : l && l.changes && (qd(n, l, a, ku(n)), (n.curOp.forceUpdate = !0)),
        l || (l = Kw(n, i));
      var u = Vd(l, i, a);
      return {
        line: i,
        view: l,
        rect: null,
        map: u.map,
        cache: u.cache,
        before: u.before,
        hasHeights: !1,
      };
    }
    function vr(n, i, a, l, u) {
      i.before && (a = -1);
      var p = a + (l || ""),
        m;
      return (
        i.cache.hasOwnProperty(p)
          ? (m = i.cache[p])
          : (i.rect || (i.rect = i.view.text.getBoundingClientRect()),
            i.hasHeights || (Vw(n, i.view, i.rect), (i.hasHeights = !0)),
            (m = Yw(n, i, a, l)),
            m.bogus || (i.cache[p] = m)),
        {
          left: m.left,
          right: m.right,
          top: u ? m.rtop : m.top,
          bottom: u ? m.rbottom : m.bottom,
        }
      );
    }
    var Xd = { left: 0, right: 0, top: 0, bottom: 0 };
    function Yd(n, i, a) {
      for (var l, u, p, m, b, x, S = 0; S < n.length; S += 3)
        if (
          ((b = n[S]),
          (x = n[S + 1]),
          i < b
            ? ((u = 0), (p = 1), (m = "left"))
            : i < x
              ? ((u = i - b), (p = u + 1))
              : (S == n.length - 3 || (i == x && n[S + 3] > i)) &&
                ((p = x - b), (u = p - 1), i >= x && (m = "right")),
          u != null)
        ) {
          if (
            ((l = n[S + 2]),
            b == x && a == (l.insertLeft ? "left" : "right") && (m = a),
            a == "left" && u == 0)
          )
            for (; S && n[S - 2] == n[S - 3] && n[S - 1].insertLeft; )
              (l = n[(S -= 3) + 2]), (m = "left");
          if (a == "right" && u == x - b)
            for (
              ;
              S < n.length - 3 && n[S + 3] == n[S + 4] && !n[S + 5].insertLeft;
            )
              (l = n[(S += 3) + 2]), (m = "right");
          break;
        }
      return {
        node: l,
        start: u,
        end: p,
        collapse: m,
        coverStart: b,
        coverEnd: x,
      };
    }
    function Xw(n, i) {
      var a = Xd;
      if (i == "left")
        for (var l = 0; l < n.length && (a = n[l]).left == a.right; l++);
      else
        for (var u = n.length - 1; u >= 0 && (a = n[u]).left == a.right; u--);
      return a;
    }
    function Yw(n, i, a, l) {
      var u = Yd(i.map, a, l),
        p = u.node,
        m = u.start,
        b = u.end,
        x = u.collapse,
        S;
      if (p.nodeType == 3) {
        for (var P = 0; P < 4; P++) {
          for (; m && se(i.line.text.charAt(u.coverStart + m)); ) --m;
          for (
            ;
            u.coverStart + b < u.coverEnd &&
            se(i.line.text.charAt(u.coverStart + b));
          )
            ++b;
          if (
            (d && g < 9 && m == 0 && b == u.coverEnd - u.coverStart
              ? (S = p.parentNode.getBoundingClientRect())
              : (S = Xw(B(p, m, b).getClientRects(), l)),
            S.left || S.right || m == 0)
          )
            break;
          (b = m), (m = m - 1), (x = "right");
        }
        d && g < 11 && (S = Zw(n.display.measure, S));
      } else {
        m > 0 && (x = l = "right");
        var D;
        n.options.lineWrapping && (D = p.getClientRects()).length > 1
          ? (S = D[l == "right" ? D.length - 1 : 0])
          : (S = p.getBoundingClientRect());
      }
      if (d && g < 9 && !m && (!S || (!S.left && !S.right))) {
        var W = p.parentNode.getClientRects()[0];
        W
          ? (S = {
              left: W.left,
              right: W.left + No(n.display),
              top: W.top,
              bottom: W.bottom,
            })
          : (S = Xd);
      }
      for (
        var q = S.top - i.rect.top,
          Z = S.bottom - i.rect.top,
          ot = (q + Z) / 2,
          vt = i.view.measure.heights,
          bt = 0;
        bt < vt.length - 1 && !(ot < vt[bt]);
        bt++
      );
      var Ct = bt ? vt[bt - 1] : 0,
        wt = vt[bt],
        Lt = {
          left: (x == "right" ? S.right : S.left) - i.rect.left,
          right: (x == "left" ? S.left : S.right) - i.rect.left,
          top: Ct,
          bottom: wt,
        };
      return (
        !S.left && !S.right && (Lt.bogus = !0),
        n.options.singleCursorHeightPerLine ||
          ((Lt.rtop = q), (Lt.rbottom = Z)),
        Lt
      );
    }
    function Zw(n, i) {
      if (
        !window.screen ||
        screen.logicalXDPI == null ||
        screen.logicalXDPI == screen.deviceXDPI ||
        !au(n)
      )
        return i;
      var a = screen.logicalXDPI / screen.deviceXDPI,
        l = screen.logicalYDPI / screen.deviceYDPI;
      return {
        left: i.left * a,
        right: i.right * a,
        top: i.top * l,
        bottom: i.bottom * l,
      };
    }
    function Zd(n) {
      if (
        n.measure &&
        ((n.measure.cache = {}), (n.measure.heights = null), n.rest)
      )
        for (var i = 0; i < n.rest.length; i++) n.measure.caches[i] = {};
    }
    function Qd(n) {
      (n.display.externalMeasure = null), G(n.display.lineMeasure);
      for (var i = 0; i < n.display.view.length; i++) Zd(n.display.view[i]);
    }
    function Ps(n) {
      Qd(n),
        (n.display.cachedCharWidth =
          n.display.cachedTextHeight =
          n.display.cachedPaddingH =
            null),
        n.options.lineWrapping || (n.display.maxLineChanged = !0),
        (n.display.lineNumChars = null);
    }
    function Jd(n) {
      return w && $
        ? -(
            n.body.getBoundingClientRect().left -
            parseInt(getComputedStyle(n.body).marginLeft)
          )
        : n.defaultView.pageXOffset || (n.documentElement || n.body).scrollLeft;
    }
    function tp(n) {
      return w && $
        ? -(
            n.body.getBoundingClientRect().top -
            parseInt(getComputedStyle(n.body).marginTop)
          )
        : n.defaultView.pageYOffset || (n.documentElement || n.body).scrollTop;
    }
    function wu(n) {
      var i = Qn(n),
        a = i.widgets,
        l = 0;
      if (a) for (var u = 0; u < a.length; ++u) a[u].above && (l += Ns(a[u]));
      return l;
    }
    function aa(n, i, a, l, u) {
      if (!u) {
        var p = wu(i);
        (a.top += p), (a.bottom += p);
      }
      if (l == "line") return a;
      l || (l = "local");
      var m = Dr(i);
      if (
        (l == "local" ? (m += la(n.display)) : (m -= n.display.viewOffset),
        l == "page" || l == "window")
      ) {
        var b = n.display.lineSpace.getBoundingClientRect();
        m += b.top + (l == "window" ? 0 : tp(Jt(n)));
        var x = b.left + (l == "window" ? 0 : Jd(Jt(n)));
        (a.left += x), (a.right += x);
      }
      return (a.top += m), (a.bottom += m), a;
    }
    function ep(n, i, a) {
      if (a == "div") return i;
      var l = i.left,
        u = i.top;
      if (a == "page") (l -= Jd(Jt(n))), (u -= tp(Jt(n)));
      else if (a == "local" || !a) {
        var p = n.display.sizer.getBoundingClientRect();
        (l += p.left), (u += p.top);
      }
      var m = n.display.lineSpace.getBoundingClientRect();
      return { left: l - m.left, top: u - m.top };
    }
    function ca(n, i, a, l, u) {
      return l || (l = Pt(n.doc, i.line)), aa(n, l, Kd(n, l, i.ch, u), a);
    }
    function Jn(n, i, a, l, u, p) {
      (l = l || Pt(n.doc, i.line)), u || (u = Ao(n, l));
      function m(Z, ot) {
        var vt = vr(n, u, Z, ot ? "right" : "left", p);
        return (
          ot ? (vt.left = vt.right) : (vt.right = vt.left), aa(n, l, vt, a)
        );
      }
      var b = Yt(l, n.doc.direction),
        x = i.ch,
        S = i.sticky;
      if (
        (x >= l.text.length
          ? ((x = l.text.length), (S = "before"))
          : x <= 0 && ((x = 0), (S = "after")),
        !b)
      )
        return m(S == "before" ? x - 1 : x, S == "before");
      function P(Z, ot, vt) {
        var bt = b[ot],
          Ct = bt.level == 1;
        return m(vt ? Z - 1 : Z, Ct != vt);
      }
      var D = Ae(b, x, S),
        W = hr,
        q = P(x, D, S == "before");
      return W != null && (q.other = P(x, W, S != "before")), q;
    }
    function np(n, i) {
      var a = 0;
      (i = Wt(n.doc, i)), n.options.lineWrapping || (a = No(n.display) * i.ch);
      var l = Pt(n.doc, i.line),
        u = Dr(l) + la(n.display);
      return { left: a, right: a, top: u, bottom: u + l.height };
    }
    function xu(n, i, a, l, u) {
      var p = X(n, i, a);
      return (p.xRel = u), l && (p.outside = l), p;
    }
    function _u(n, i, a) {
      var l = n.doc;
      if (((a += n.display.viewOffset), a < 0))
        return xu(l.first, 0, null, -1, -1);
      var u = O(l, a),
        p = l.first + l.size - 1;
      if (u > p)
        return xu(l.first + l.size - 1, Pt(l, p).text.length, null, 1, 1);
      i < 0 && (i = 0);
      for (var m = Pt(l, u); ; ) {
        var b = Qw(n, m, u, i, a),
          x = Tw(m, b.ch + (b.xRel > 0 || b.outside > 0 ? 1 : 0));
        if (!x) return b;
        var S = x.find(1);
        if (S.line == u) return S;
        m = Pt(l, (u = S.line));
      }
    }
    function rp(n, i, a, l) {
      l -= wu(i);
      var u = i.text.length,
        p = Pn(
          function (m) {
            return vr(n, a, m - 1).bottom <= l;
          },
          u,
          0,
        );
      return (
        (u = Pn(
          function (m) {
            return vr(n, a, m).top > l;
          },
          p,
          u,
        )),
        { begin: p, end: u }
      );
    }
    function ip(n, i, a, l) {
      a || (a = Ao(n, i));
      var u = aa(n, i, vr(n, a, l), "line").top;
      return rp(n, i, a, u);
    }
    function Su(n, i, a, l) {
      return n.bottom <= a ? !1 : n.top > a ? !0 : (l ? n.left : n.right) > i;
    }
    function Qw(n, i, a, l, u) {
      u -= Dr(i);
      var p = Ao(n, i),
        m = wu(i),
        b = 0,
        x = i.text.length,
        S = !0,
        P = Yt(i, n.doc.direction);
      if (P) {
        var D = (n.options.lineWrapping ? t1 : Jw)(n, i, a, p, P, l, u);
        (S = D.level != 1),
          (b = S ? D.from : D.to - 1),
          (x = S ? D.to : D.from - 1);
      }
      var W = null,
        q = null,
        Z = Pn(
          function (zt) {
            var $t = vr(n, p, zt);
            return (
              ($t.top += m),
              ($t.bottom += m),
              Su($t, l, u, !1)
                ? ($t.top <= u && $t.left <= l && ((W = zt), (q = $t)), !0)
                : !1
            );
          },
          b,
          x,
        ),
        ot,
        vt,
        bt = !1;
      if (q) {
        var Ct = l - q.left < q.right - l,
          wt = Ct == S;
        (Z = W + (wt ? 0 : 1)),
          (vt = wt ? "after" : "before"),
          (ot = Ct ? q.left : q.right);
      } else {
        !S && (Z == x || Z == b) && Z++,
          (vt =
            Z == 0
              ? "after"
              : Z == i.text.length
                ? "before"
                : vr(n, p, Z - (S ? 1 : 0)).bottom + m <= u == S
                  ? "after"
                  : "before");
        var Lt = Jn(n, X(a, Z, vt), "line", i, p);
        (ot = Lt.left), (bt = u < Lt.top ? -1 : u >= Lt.bottom ? 1 : 0);
      }
      return (Z = rn(i.text, Z, 1)), xu(a, Z, vt, bt, l - ot);
    }
    function Jw(n, i, a, l, u, p, m) {
      var b = Pn(
          function (D) {
            var W = u[D],
              q = W.level != 1;
            return Su(
              Jn(
                n,
                X(a, q ? W.to : W.from, q ? "before" : "after"),
                "line",
                i,
                l,
              ),
              p,
              m,
              !0,
            );
          },
          0,
          u.length - 1,
        ),
        x = u[b];
      if (b > 0) {
        var S = x.level != 1,
          P = Jn(
            n,
            X(a, S ? x.from : x.to, S ? "after" : "before"),
            "line",
            i,
            l,
          );
        Su(P, p, m, !0) && P.top > m && (x = u[b - 1]);
      }
      return x;
    }
    function t1(n, i, a, l, u, p, m) {
      var b = rp(n, i, l, m),
        x = b.begin,
        S = b.end;
      /\s/.test(i.text.charAt(S - 1)) && S--;
      for (var P = null, D = null, W = 0; W < u.length; W++) {
        var q = u[W];
        if (!(q.from >= S || q.to <= x)) {
          var Z = q.level != 1,
            ot = vr(
              n,
              l,
              Z ? Math.min(S, q.to) - 1 : Math.max(x, q.from),
            ).right,
            vt = ot < p ? p - ot + 1e9 : ot - p;
          (!P || D > vt) && ((P = q), (D = vt));
        }
      }
      return (
        P || (P = u[u.length - 1]),
        P.from < x && (P = { from: x, to: P.to, level: P.level }),
        P.to > S && (P = { from: P.from, to: S, level: P.level }),
        P
      );
    }
    var Fi;
    function Mo(n) {
      if (n.cachedTextHeight != null) return n.cachedTextHeight;
      if (Fi == null) {
        Fi = k("pre", null, "CodeMirror-line-like");
        for (var i = 0; i < 49; ++i)
          Fi.appendChild(document.createTextNode("x")), Fi.appendChild(k("br"));
        Fi.appendChild(document.createTextNode("x"));
      }
      z(n.measure, Fi);
      var a = Fi.offsetHeight / 50;
      return a > 3 && (n.cachedTextHeight = a), G(n.measure), a || 1;
    }
    function No(n) {
      if (n.cachedCharWidth != null) return n.cachedCharWidth;
      var i = k("span", "xxxxxxxxxx"),
        a = k("pre", [i], "CodeMirror-line-like");
      z(n.measure, a);
      var l = i.getBoundingClientRect(),
        u = (l.right - l.left) / 10;
      return u > 2 && (n.cachedCharWidth = u), u || 10;
    }
    function ku(n) {
      for (
        var i = n.display,
          a = {},
          l = {},
          u = i.gutters.clientLeft,
          p = i.gutters.firstChild,
          m = 0;
        p;
        p = p.nextSibling, ++m
      ) {
        var b = n.display.gutterSpecs[m].className;
        (a[b] = p.offsetLeft + p.clientLeft + u), (l[b] = p.clientWidth);
      }
      return {
        fixedPos: Cu(i),
        gutterTotalWidth: i.gutters.offsetWidth,
        gutterLeft: a,
        gutterWidth: l,
        wrapperWidth: i.wrapper.clientWidth,
      };
    }
    function Cu(n) {
      return (
        n.scroller.getBoundingClientRect().left -
        n.sizer.getBoundingClientRect().left
      );
    }
    function op(n) {
      var i = Mo(n.display),
        a = n.options.lineWrapping,
        l =
          a && Math.max(5, n.display.scroller.clientWidth / No(n.display) - 3);
      return function (u) {
        if (ni(n.doc, u)) return 0;
        var p = 0;
        if (u.widgets)
          for (var m = 0; m < u.widgets.length; m++)
            u.widgets[m].height && (p += u.widgets[m].height);
        return a ? p + (Math.ceil(u.text.length / l) || 1) * i : p + i;
      };
    }
    function Tu(n) {
      var i = n.doc,
        a = op(n);
      i.iter(function (l) {
        var u = a(l);
        u != l.height && $n(l, u);
      });
    }
    function Ii(n, i, a, l) {
      var u = n.display;
      if (!a && Ss(i).getAttribute("cm-not-content") == "true") return null;
      var p,
        m,
        b = u.lineSpace.getBoundingClientRect();
      try {
        (p = i.clientX - b.left), (m = i.clientY - b.top);
      } catch {
        return null;
      }
      var x = _u(n, p, m),
        S;
      if (l && x.xRel > 0 && (S = Pt(n.doc, x.line).text).length == x.ch) {
        var P = at(S, S.length, n.options.tabSize) - S.length;
        x = X(
          x.line,
          Math.max(0, Math.round((p - Gd(n.display).left) / No(n.display)) - P),
        );
      }
      return x;
    }
    function Hi(n, i) {
      if (i >= n.display.viewTo || ((i -= n.display.viewFrom), i < 0))
        return null;
      for (var a = n.display.view, l = 0; l < a.length; l++)
        if (((i -= a[l].size), i < 0)) return l;
    }
    function ln(n, i, a, l) {
      i == null && (i = n.doc.first),
        a == null && (a = n.doc.first + n.doc.size),
        l || (l = 0);
      var u = n.display;
      if (
        (l &&
          a < u.viewTo &&
          (u.updateLineNumbers == null || u.updateLineNumbers > i) &&
          (u.updateLineNumbers = i),
        (n.curOp.viewChanged = !0),
        i >= u.viewTo)
      )
        Or && du(n.doc, i) < u.viewTo && ii(n);
      else if (a <= u.viewFrom)
        Or && Rd(n.doc, a + l) > u.viewFrom
          ? ii(n)
          : ((u.viewFrom += l), (u.viewTo += l));
      else if (i <= u.viewFrom && a >= u.viewTo) ii(n);
      else if (i <= u.viewFrom) {
        var p = ua(n, a, a + l, 1);
        p
          ? ((u.view = u.view.slice(p.index)),
            (u.viewFrom = p.lineN),
            (u.viewTo += l))
          : ii(n);
      } else if (a >= u.viewTo) {
        var m = ua(n, i, i, -1);
        m ? ((u.view = u.view.slice(0, m.index)), (u.viewTo = m.lineN)) : ii(n);
      } else {
        var b = ua(n, i, i, -1),
          x = ua(n, a, a + l, 1);
        b && x
          ? ((u.view = u.view
              .slice(0, b.index)
              .concat(sa(n, b.lineN, x.lineN))
              .concat(u.view.slice(x.index))),
            (u.viewTo += l))
          : ii(n);
      }
      var S = u.externalMeasured;
      S &&
        (a < S.lineN
          ? (S.lineN += l)
          : i < S.lineN + S.size && (u.externalMeasured = null));
    }
    function ri(n, i, a) {
      n.curOp.viewChanged = !0;
      var l = n.display,
        u = n.display.externalMeasured;
      if (
        (u &&
          i >= u.lineN &&
          i < u.lineN + u.size &&
          (l.externalMeasured = null),
        !(i < l.viewFrom || i >= l.viewTo))
      ) {
        var p = l.view[Hi(n, i)];
        if (p.node != null) {
          var m = p.changes || (p.changes = []);
          Et(m, a) == -1 && m.push(a);
        }
      }
    }
    function ii(n) {
      (n.display.viewFrom = n.display.viewTo = n.doc.first),
        (n.display.view = []),
        (n.display.viewOffset = 0);
    }
    function ua(n, i, a, l) {
      var u = Hi(n, i),
        p,
        m = n.display.view;
      if (!Or || a == n.doc.first + n.doc.size) return { index: u, lineN: a };
      for (var b = n.display.viewFrom, x = 0; x < u; x++) b += m[x].size;
      if (b != i) {
        if (l > 0) {
          if (u == m.length - 1) return null;
          (p = b + m[u].size - i), u++;
        } else p = b - i;
        (i += p), (a += p);
      }
      for (; du(n.doc, a) != a; ) {
        if (u == (l < 0 ? 0 : m.length - 1)) return null;
        (a += l * m[u - (l < 0 ? 1 : 0)].size), (u += l);
      }
      return { index: u, lineN: a };
    }
    function e1(n, i, a) {
      var l = n.display,
        u = l.view;
      u.length == 0 || i >= l.viewTo || a <= l.viewFrom
        ? ((l.view = sa(n, i, a)), (l.viewFrom = i))
        : (l.viewFrom > i
            ? (l.view = sa(n, i, l.viewFrom).concat(l.view))
            : l.viewFrom < i && (l.view = l.view.slice(Hi(n, i))),
          (l.viewFrom = i),
          l.viewTo < a
            ? (l.view = l.view.concat(sa(n, l.viewTo, a)))
            : l.viewTo > a && (l.view = l.view.slice(0, Hi(n, a)))),
        (l.viewTo = a);
    }
    function sp(n) {
      for (var i = n.display.view, a = 0, l = 0; l < i.length; l++) {
        var u = i[l];
        !u.hidden && (!u.node || u.changes) && ++a;
      }
      return a;
    }
    function $s(n) {
      n.display.input.showSelection(n.display.input.prepareSelection());
    }
    function lp(n, i) {
      i === void 0 && (i = !0);
      var a = n.doc,
        l = {},
        u = (l.cursors = document.createDocumentFragment()),
        p = (l.selection = document.createDocumentFragment()),
        m = n.options.$customCursor;
      m && (i = !0);
      for (var b = 0; b < a.sel.ranges.length; b++)
        if (!(!i && b == a.sel.primIndex)) {
          var x = a.sel.ranges[b];
          if (
            !(
              x.from().line >= n.display.viewTo ||
              x.to().line < n.display.viewFrom
            )
          ) {
            var S = x.empty();
            if (m) {
              var P = m(n, x);
              P && Eu(n, P, u);
            } else (S || n.options.showCursorWhenSelecting) && Eu(n, x.head, u);
            S || n1(n, x, p);
          }
        }
      return l;
    }
    function Eu(n, i, a) {
      var l = Jn(n, i, "div", null, null, !n.options.singleCursorHeightPerLine),
        u = a.appendChild(k("div", " ", "CodeMirror-cursor"));
      if (
        ((u.style.left = l.left + "px"),
        (u.style.top = l.top + "px"),
        (u.style.height =
          Math.max(0, l.bottom - l.top) * n.options.cursorHeight + "px"),
        /\bcm-fat-cursor\b/.test(n.getWrapperElement().className))
      ) {
        var p = ca(n, i, "div", null, null),
          m = p.right - p.left;
        u.style.width = (m > 0 ? m : n.defaultCharWidth()) + "px";
      }
      if (l.other) {
        var b = a.appendChild(
          k("div", " ", "CodeMirror-cursor CodeMirror-secondarycursor"),
        );
        (b.style.display = ""),
          (b.style.left = l.other.left + "px"),
          (b.style.top = l.other.top + "px"),
          (b.style.height = (l.other.bottom - l.other.top) * 0.85 + "px");
      }
    }
    function fa(n, i) {
      return n.top - i.top || n.left - i.left;
    }
    function n1(n, i, a) {
      var l = n.display,
        u = n.doc,
        p = document.createDocumentFragment(),
        m = Gd(n.display),
        b = m.left,
        x = Math.max(l.sizerWidth, zi(n) - l.sizer.offsetLeft) - m.right,
        S = u.direction == "ltr";
      function P(wt, Lt, zt, $t) {
        Lt < 0 && (Lt = 0),
          (Lt = Math.round(Lt)),
          ($t = Math.round($t)),
          p.appendChild(
            k(
              "div",
              null,
              "CodeMirror-selected",
              "position: absolute; left: " +
                wt +
                `px;
                             top: ` +
                Lt +
                "px; width: " +
                (zt ?? x - wt) +
                `px;
                             height: ` +
                ($t - Lt) +
                "px",
            ),
          );
      }
      function D(wt, Lt, zt) {
        var $t = Pt(u, wt),
          Xt = $t.text.length,
          ve,
          Ue;
        function _e(Ne, un) {
          return ca(n, X(wt, Ne), "div", $t, un);
        }
        function kn(Ne, un, Ge) {
          var ze = ip(n, $t, null, Ne),
            Pe = (un == "ltr") == (Ge == "after") ? "left" : "right",
            Ee =
              Ge == "after"
                ? ze.begin
                : ze.end - (/\s/.test($t.text.charAt(ze.end - 1)) ? 2 : 1);
          return _e(Ee, Pe)[Pe];
        }
        var cn = Yt($t, u.direction);
        return (
          wn(cn, Lt || 0, zt ?? Xt, function (Ne, un, Ge, ze) {
            var Pe = Ge == "ltr",
              Ee = _e(Ne, Pe ? "left" : "right"),
              fn = _e(un - 1, Pe ? "right" : "left"),
              Uo = Lt == null && Ne == 0,
              ui = zt == null && un == Xt,
              Ze = ze == 0,
              mr = !cn || ze == cn.length - 1;
            if (fn.top - Ee.top <= 3) {
              var je = (S ? Uo : ui) && Ze,
                tf = (S ? ui : Uo) && mr,
                Ir = je ? b : (Pe ? Ee : fn).left,
                ji = tf ? x : (Pe ? fn : Ee).right;
              P(Ir, Ee.top, ji - Ir, Ee.bottom);
            } else {
              var Gi, tn, jo, ef;
              Pe
                ? ((Gi = S && Uo && Ze ? b : Ee.left),
                  (tn = S ? x : kn(Ne, Ge, "before")),
                  (jo = S ? b : kn(un, Ge, "after")),
                  (ef = S && ui && mr ? x : fn.right))
                : ((Gi = S ? kn(Ne, Ge, "before") : b),
                  (tn = !S && Uo && Ze ? x : Ee.right),
                  (jo = !S && ui && mr ? b : fn.left),
                  (ef = S ? kn(un, Ge, "after") : x)),
                P(Gi, Ee.top, tn - Gi, Ee.bottom),
                Ee.bottom < fn.top && P(b, Ee.bottom, null, fn.top),
                P(jo, fn.top, ef - jo, fn.bottom);
            }
            (!ve || fa(Ee, ve) < 0) && (ve = Ee),
              fa(fn, ve) < 0 && (ve = fn),
              (!Ue || fa(Ee, Ue) < 0) && (Ue = Ee),
              fa(fn, Ue) < 0 && (Ue = fn);
          }),
          { start: ve, end: Ue }
        );
      }
      var W = i.from(),
        q = i.to();
      if (W.line == q.line) D(W.line, W.ch, q.ch);
      else {
        var Z = Pt(u, W.line),
          ot = Pt(u, q.line),
          vt = Qn(Z) == Qn(ot),
          bt = D(W.line, W.ch, vt ? Z.text.length + 1 : null).end,
          Ct = D(q.line, vt ? 0 : null, q.ch).start;
        vt &&
          (bt.top < Ct.top - 2
            ? (P(bt.right, bt.top, null, bt.bottom),
              P(b, Ct.top, Ct.left, Ct.bottom))
            : P(bt.right, bt.top, Ct.left - bt.right, bt.bottom)),
          bt.bottom < Ct.top && P(b, bt.bottom, null, Ct.top);
      }
      a.appendChild(p);
    }
    function Lu(n) {
      if (n.state.focused) {
        var i = n.display;
        clearInterval(i.blinker);
        var a = !0;
        (i.cursorDiv.style.visibility = ""),
          n.options.cursorBlinkRate > 0
            ? (i.blinker = setInterval(function () {
                n.hasFocus() || Po(n),
                  (i.cursorDiv.style.visibility = (a = !a) ? "" : "hidden");
              }, n.options.cursorBlinkRate))
            : n.options.cursorBlinkRate < 0 &&
              (i.cursorDiv.style.visibility = "hidden");
      }
    }
    function ap(n) {
      n.hasFocus() || (n.display.input.focus(), n.state.focused || Mu(n));
    }
    function Au(n) {
      (n.state.delayingBlurEvent = !0),
        setTimeout(function () {
          n.state.delayingBlurEvent &&
            ((n.state.delayingBlurEvent = !1), n.state.focused && Po(n));
        }, 100);
    }
    function Mu(n, i) {
      n.state.delayingBlurEvent &&
        !n.state.draggingText &&
        (n.state.delayingBlurEvent = !1),
        n.options.readOnly != "nocursor" &&
          (n.state.focused ||
            (ke(n, "focus", n, i),
            (n.state.focused = !0),
            At(n.display.wrapper, "CodeMirror-focused"),
            !n.curOp &&
              n.display.selForContextMenu != n.doc.sel &&
              (n.display.input.reset(),
              v &&
                setTimeout(function () {
                  return n.display.input.reset(!0);
                }, 20)),
            n.display.input.receivedFocus()),
          Lu(n));
    }
    function Po(n, i) {
      n.state.delayingBlurEvent ||
        (n.state.focused &&
          (ke(n, "blur", n, i),
          (n.state.focused = !1),
          ht(n.display.wrapper, "CodeMirror-focused")),
        clearInterval(n.display.blinker),
        setTimeout(function () {
          n.state.focused || (n.display.shift = !1);
        }, 150));
    }
    function ha(n) {
      for (
        var i = n.display,
          a = i.lineDiv.offsetTop,
          l = Math.max(0, i.scroller.getBoundingClientRect().top),
          u = i.lineDiv.getBoundingClientRect().top,
          p = 0,
          m = 0;
        m < i.view.length;
        m++
      ) {
        var b = i.view[m],
          x = n.options.lineWrapping,
          S = void 0,
          P = 0;
        if (!b.hidden) {
          if (((u += b.line.height), d && g < 8)) {
            var D = b.node.offsetTop + b.node.offsetHeight;
            (S = D - a), (a = D);
          } else {
            var W = b.node.getBoundingClientRect();
            (S = W.bottom - W.top),
              !x &&
                b.text.firstChild &&
                (P =
                  b.text.firstChild.getBoundingClientRect().right - W.left - 1);
          }
          var q = b.line.height - S;
          if (
            (q > 0.005 || q < -0.005) &&
            (u < l && (p -= q), $n(b.line, S), cp(b.line), b.rest)
          )
            for (var Z = 0; Z < b.rest.length; Z++) cp(b.rest[Z]);
          if (P > n.display.sizerWidth) {
            var ot = Math.ceil(P / No(n.display));
            ot > n.display.maxLineLength &&
              ((n.display.maxLineLength = ot),
              (n.display.maxLine = b.line),
              (n.display.maxLineChanged = !0));
          }
        }
      }
      Math.abs(p) > 2 && (i.scroller.scrollTop += p);
    }
    function cp(n) {
      if (n.widgets)
        for (var i = 0; i < n.widgets.length; ++i) {
          var a = n.widgets[i],
            l = a.node.parentNode;
          l && (a.height = l.offsetHeight);
        }
    }
    function da(n, i, a) {
      var l = a && a.top != null ? Math.max(0, a.top) : n.scroller.scrollTop;
      l = Math.floor(l - la(n));
      var u = a && a.bottom != null ? a.bottom : l + n.wrapper.clientHeight,
        p = O(i, l),
        m = O(i, u);
      if (a && a.ensure) {
        var b = a.ensure.from.line,
          x = a.ensure.to.line;
        b < p
          ? ((p = b), (m = O(i, Dr(Pt(i, b)) + n.wrapper.clientHeight)))
          : Math.min(x, i.lastLine()) >= m &&
            ((p = O(i, Dr(Pt(i, x)) - n.wrapper.clientHeight)), (m = x));
      }
      return { from: p, to: Math.max(m, p + 1) };
    }
    function r1(n, i) {
      if (!Ce(n, "scrollCursorIntoView")) {
        var a = n.display,
          l = a.sizer.getBoundingClientRect(),
          u = null,
          p = a.wrapper.ownerDocument;
        if (
          (i.top + l.top < 0
            ? (u = !0)
            : i.bottom + l.top >
                (p.defaultView.innerHeight || p.documentElement.clientHeight) &&
              (u = !1),
          u != null && !T)
        ) {
          var m = k(
            "div",
            "​",
            null,
            `position: absolute;
                         top: ` +
              (i.top - a.viewOffset - la(n.display)) +
              `px;
                         height: ` +
              (i.bottom - i.top + gr(n) + a.barHeight) +
              `px;
                         left: ` +
              i.left +
              "px; width: " +
              Math.max(2, i.right - i.left) +
              "px;",
          );
          n.display.lineSpace.appendChild(m),
            m.scrollIntoView(u),
            n.display.lineSpace.removeChild(m);
        }
      }
    }
    function i1(n, i, a, l) {
      l == null && (l = 0);
      var u;
      !n.options.lineWrapping &&
        i == a &&
        ((a = i.sticky == "before" ? X(i.line, i.ch + 1, "before") : i),
        (i = i.ch
          ? X(i.line, i.sticky == "before" ? i.ch - 1 : i.ch, "after")
          : i));
      for (var p = 0; p < 5; p++) {
        var m = !1,
          b = Jn(n, i),
          x = !a || a == i ? b : Jn(n, a);
        u = {
          left: Math.min(b.left, x.left),
          top: Math.min(b.top, x.top) - l,
          right: Math.max(b.left, x.left),
          bottom: Math.max(b.bottom, x.bottom) + l,
        };
        var S = Nu(n, u),
          P = n.doc.scrollTop,
          D = n.doc.scrollLeft;
        if (
          (S.scrollTop != null &&
            (Ds(n, S.scrollTop), Math.abs(n.doc.scrollTop - P) > 1 && (m = !0)),
          S.scrollLeft != null &&
            (qi(n, S.scrollLeft),
            Math.abs(n.doc.scrollLeft - D) > 1 && (m = !0)),
          !m)
        )
          break;
      }
      return u;
    }
    function o1(n, i) {
      var a = Nu(n, i);
      a.scrollTop != null && Ds(n, a.scrollTop),
        a.scrollLeft != null && qi(n, a.scrollLeft);
    }
    function Nu(n, i) {
      var a = n.display,
        l = Mo(n.display);
      i.top < 0 && (i.top = 0);
      var u =
          n.curOp && n.curOp.scrollTop != null
            ? n.curOp.scrollTop
            : a.scroller.scrollTop,
        p = yu(n),
        m = {};
      i.bottom - i.top > p && (i.bottom = i.top + p);
      var b = n.doc.height + mu(a),
        x = i.top < l,
        S = i.bottom > b - l;
      if (i.top < u) m.scrollTop = x ? 0 : i.top;
      else if (i.bottom > u + p) {
        var P = Math.min(i.top, (S ? b : i.bottom) - p);
        P != u && (m.scrollTop = P);
      }
      var D = n.options.fixedGutter ? 0 : a.gutters.offsetWidth,
        W =
          n.curOp && n.curOp.scrollLeft != null
            ? n.curOp.scrollLeft
            : a.scroller.scrollLeft - D,
        q = zi(n) - a.gutters.offsetWidth,
        Z = i.right - i.left > q;
      return (
        Z && (i.right = i.left + q),
        i.left < 10
          ? (m.scrollLeft = 0)
          : i.left < W
            ? (m.scrollLeft = Math.max(0, i.left + D - (Z ? 0 : 10)))
            : i.right > q + W - 3 &&
              (m.scrollLeft = i.right + (Z ? 0 : 10) - q),
        m
      );
    }
    function Pu(n, i) {
      i != null &&
        (pa(n),
        (n.curOp.scrollTop =
          (n.curOp.scrollTop == null ? n.doc.scrollTop : n.curOp.scrollTop) +
          i));
    }
    function $o(n) {
      pa(n);
      var i = n.getCursor();
      n.curOp.scrollToPos = {
        from: i,
        to: i,
        margin: n.options.cursorScrollMargin,
      };
    }
    function Os(n, i, a) {
      (i != null || a != null) && pa(n),
        i != null && (n.curOp.scrollLeft = i),
        a != null && (n.curOp.scrollTop = a);
    }
    function s1(n, i) {
      pa(n), (n.curOp.scrollToPos = i);
    }
    function pa(n) {
      var i = n.curOp.scrollToPos;
      if (i) {
        n.curOp.scrollToPos = null;
        var a = np(n, i.from),
          l = np(n, i.to);
        up(n, a, l, i.margin);
      }
    }
    function up(n, i, a, l) {
      var u = Nu(n, {
        left: Math.min(i.left, a.left),
        top: Math.min(i.top, a.top) - l,
        right: Math.max(i.right, a.right),
        bottom: Math.max(i.bottom, a.bottom) + l,
      });
      Os(n, u.scrollLeft, u.scrollTop);
    }
    function Ds(n, i) {
      Math.abs(n.doc.scrollTop - i) < 2 ||
        (s || Ou(n, { top: i }), fp(n, i, !0), s && Ou(n), Fs(n, 100));
    }
    function fp(n, i, a) {
      (i = Math.max(
        0,
        Math.min(
          n.display.scroller.scrollHeight - n.display.scroller.clientHeight,
          i,
        ),
      )),
        !(n.display.scroller.scrollTop == i && !a) &&
          ((n.doc.scrollTop = i),
          n.display.scrollbars.setScrollTop(i),
          n.display.scroller.scrollTop != i &&
            (n.display.scroller.scrollTop = i));
    }
    function qi(n, i, a, l) {
      (i = Math.max(
        0,
        Math.min(
          i,
          n.display.scroller.scrollWidth - n.display.scroller.clientWidth,
        ),
      )),
        !(
          (a ? i == n.doc.scrollLeft : Math.abs(n.doc.scrollLeft - i) < 2) && !l
        ) &&
          ((n.doc.scrollLeft = i),
          vp(n),
          n.display.scroller.scrollLeft != i &&
            (n.display.scroller.scrollLeft = i),
          n.display.scrollbars.setScrollLeft(i));
    }
    function Rs(n) {
      var i = n.display,
        a = i.gutters.offsetWidth,
        l = Math.round(n.doc.height + mu(n.display));
      return {
        clientHeight: i.scroller.clientHeight,
        viewHeight: i.wrapper.clientHeight,
        scrollWidth: i.scroller.scrollWidth,
        clientWidth: i.scroller.clientWidth,
        viewWidth: i.wrapper.clientWidth,
        barLeft: n.options.fixedGutter ? a : 0,
        docHeight: l,
        scrollHeight: l + gr(n) + i.barHeight,
        nativeBarWidth: i.nativeBarWidth,
        gutterWidth: a,
      };
    }
    var Bi = function (n, i, a) {
      this.cm = a;
      var l = (this.vert = k(
          "div",
          [k("div", null, null, "min-width: 1px")],
          "CodeMirror-vscrollbar",
        )),
        u = (this.horiz = k(
          "div",
          [k("div", null, null, "height: 100%; min-height: 1px")],
          "CodeMirror-hscrollbar",
        ));
      (l.tabIndex = u.tabIndex = -1),
        n(l),
        n(u),
        Rt(l, "scroll", function () {
          l.clientHeight && i(l.scrollTop, "vertical");
        }),
        Rt(u, "scroll", function () {
          u.clientWidth && i(u.scrollLeft, "horizontal");
        }),
        (this.checkedZeroWidth = !1),
        d &&
          g < 8 &&
          (this.horiz.style.minHeight = this.vert.style.minWidth = "18px");
    };
    (Bi.prototype.update = function (n) {
      var i = n.scrollWidth > n.clientWidth + 1,
        a = n.scrollHeight > n.clientHeight + 1,
        l = n.nativeBarWidth;
      if (a) {
        (this.vert.style.display = "block"),
          (this.vert.style.bottom = i ? l + "px" : "0");
        var u = n.viewHeight - (i ? l : 0);
        this.vert.firstChild.style.height =
          Math.max(0, n.scrollHeight - n.clientHeight + u) + "px";
      } else
        (this.vert.scrollTop = 0),
          (this.vert.style.display = ""),
          (this.vert.firstChild.style.height = "0");
      if (i) {
        (this.horiz.style.display = "block"),
          (this.horiz.style.right = a ? l + "px" : "0"),
          (this.horiz.style.left = n.barLeft + "px");
        var p = n.viewWidth - n.barLeft - (a ? l : 0);
        this.horiz.firstChild.style.width =
          Math.max(0, n.scrollWidth - n.clientWidth + p) + "px";
      } else
        (this.horiz.style.display = ""),
          (this.horiz.firstChild.style.width = "0");
      return (
        !this.checkedZeroWidth &&
          n.clientHeight > 0 &&
          (l == 0 && this.zeroWidthHack(), (this.checkedZeroWidth = !0)),
        { right: a ? l : 0, bottom: i ? l : 0 }
      );
    }),
      (Bi.prototype.setScrollLeft = function (n) {
        this.horiz.scrollLeft != n && (this.horiz.scrollLeft = n),
          this.disableHoriz &&
            this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz");
      }),
      (Bi.prototype.setScrollTop = function (n) {
        this.vert.scrollTop != n && (this.vert.scrollTop = n),
          this.disableVert &&
            this.enableZeroWidthBar(this.vert, this.disableVert, "vert");
      }),
      (Bi.prototype.zeroWidthHack = function () {
        var n = H && !A ? "12px" : "18px";
        (this.horiz.style.height = this.vert.style.width = n),
          (this.horiz.style.visibility = this.vert.style.visibility = "hidden"),
          (this.disableHoriz = new Mt()),
          (this.disableVert = new Mt());
      }),
      (Bi.prototype.enableZeroWidthBar = function (n, i, a) {
        n.style.visibility = "";
        function l() {
          var u = n.getBoundingClientRect(),
            p =
              a == "vert"
                ? document.elementFromPoint(u.right - 1, (u.top + u.bottom) / 2)
                : document.elementFromPoint(
                    (u.right + u.left) / 2,
                    u.bottom - 1,
                  );
          p != n ? (n.style.visibility = "hidden") : i.set(1e3, l);
        }
        i.set(1e3, l);
      }),
      (Bi.prototype.clear = function () {
        var n = this.horiz.parentNode;
        n.removeChild(this.horiz), n.removeChild(this.vert);
      });
    var zs = function () {};
    (zs.prototype.update = function () {
      return { bottom: 0, right: 0 };
    }),
      (zs.prototype.setScrollLeft = function () {}),
      (zs.prototype.setScrollTop = function () {}),
      (zs.prototype.clear = function () {});
    function Oo(n, i) {
      i || (i = Rs(n));
      var a = n.display.barWidth,
        l = n.display.barHeight;
      hp(n, i);
      for (
        var u = 0;
        (u < 4 && a != n.display.barWidth) || l != n.display.barHeight;
        u++
      )
        a != n.display.barWidth && n.options.lineWrapping && ha(n),
          hp(n, Rs(n)),
          (a = n.display.barWidth),
          (l = n.display.barHeight);
    }
    function hp(n, i) {
      var a = n.display,
        l = a.scrollbars.update(i);
      (a.sizer.style.paddingRight = (a.barWidth = l.right) + "px"),
        (a.sizer.style.paddingBottom = (a.barHeight = l.bottom) + "px"),
        (a.heightForcer.style.borderBottom = l.bottom + "px solid transparent"),
        l.right && l.bottom
          ? ((a.scrollbarFiller.style.display = "block"),
            (a.scrollbarFiller.style.height = l.bottom + "px"),
            (a.scrollbarFiller.style.width = l.right + "px"))
          : (a.scrollbarFiller.style.display = ""),
        l.bottom &&
        n.options.coverGutterNextToScrollbar &&
        n.options.fixedGutter
          ? ((a.gutterFiller.style.display = "block"),
            (a.gutterFiller.style.height = l.bottom + "px"),
            (a.gutterFiller.style.width = i.gutterWidth + "px"))
          : (a.gutterFiller.style.display = "");
    }
    var dp = { native: Bi, null: zs };
    function pp(n) {
      n.display.scrollbars &&
        (n.display.scrollbars.clear(),
        n.display.scrollbars.addClass &&
          ht(n.display.wrapper, n.display.scrollbars.addClass)),
        (n.display.scrollbars = new dp[n.options.scrollbarStyle](
          function (i) {
            n.display.wrapper.insertBefore(i, n.display.scrollbarFiller),
              Rt(i, "mousedown", function () {
                n.state.focused &&
                  setTimeout(function () {
                    return n.display.input.focus();
                  }, 0);
              }),
              i.setAttribute("cm-not-content", "true");
          },
          function (i, a) {
            a == "horizontal" ? qi(n, i) : Ds(n, i);
          },
          n,
        )),
        n.display.scrollbars.addClass &&
          At(n.display.wrapper, n.display.scrollbars.addClass);
    }
    var l1 = 0;
    function Wi(n) {
      (n.curOp = {
        cm: n,
        viewChanged: !1,
        startHeight: n.doc.height,
        forceUpdate: !1,
        updateInput: 0,
        typing: !1,
        changeObjs: null,
        cursorActivityHandlers: null,
        cursorActivityCalled: 0,
        selectionChanged: !1,
        updateMaxLine: !1,
        scrollLeft: null,
        scrollTop: null,
        scrollToPos: null,
        focus: !1,
        id: ++l1,
        markArrays: null,
      }),
        Fw(n.curOp);
    }
    function Ui(n) {
      var i = n.curOp;
      i &&
        Hw(i, function (a) {
          for (var l = 0; l < a.ops.length; l++) a.ops[l].cm.curOp = null;
          a1(a);
        });
    }
    function a1(n) {
      for (var i = n.ops, a = 0; a < i.length; a++) c1(i[a]);
      for (var l = 0; l < i.length; l++) u1(i[l]);
      for (var u = 0; u < i.length; u++) f1(i[u]);
      for (var p = 0; p < i.length; p++) h1(i[p]);
      for (var m = 0; m < i.length; m++) d1(i[m]);
    }
    function c1(n) {
      var i = n.cm,
        a = i.display;
      g1(i),
        n.updateMaxLine && gu(i),
        (n.mustUpdate =
          n.viewChanged ||
          n.forceUpdate ||
          n.scrollTop != null ||
          (n.scrollToPos &&
            (n.scrollToPos.from.line < a.viewFrom ||
              n.scrollToPos.to.line >= a.viewTo)) ||
          (a.maxLineChanged && i.options.lineWrapping)),
        (n.update =
          n.mustUpdate &&
          new ga(
            i,
            n.mustUpdate && { top: n.scrollTop, ensure: n.scrollToPos },
            n.forceUpdate,
          ));
    }
    function u1(n) {
      n.updatedDisplay = n.mustUpdate && $u(n.cm, n.update);
    }
    function f1(n) {
      var i = n.cm,
        a = i.display;
      n.updatedDisplay && ha(i),
        (n.barMeasure = Rs(i)),
        a.maxLineChanged &&
          !i.options.lineWrapping &&
          ((n.adjustWidthTo = Kd(i, a.maxLine, a.maxLine.text.length).left + 3),
          (i.display.sizerWidth = n.adjustWidthTo),
          (n.barMeasure.scrollWidth = Math.max(
            a.scroller.clientWidth,
            a.sizer.offsetLeft + n.adjustWidthTo + gr(i) + i.display.barWidth,
          )),
          (n.maxScrollLeft = Math.max(
            0,
            a.sizer.offsetLeft + n.adjustWidthTo - zi(i),
          ))),
        (n.updatedDisplay || n.selectionChanged) &&
          (n.preparedSelection = a.input.prepareSelection());
    }
    function h1(n) {
      var i = n.cm;
      n.adjustWidthTo != null &&
        ((i.display.sizer.style.minWidth = n.adjustWidthTo + "px"),
        n.maxScrollLeft < i.doc.scrollLeft &&
          qi(i, Math.min(i.display.scroller.scrollLeft, n.maxScrollLeft), !0),
        (i.display.maxLineChanged = !1));
      var a = n.focus && n.focus == yt(Qt(i));
      n.preparedSelection &&
        i.display.input.showSelection(n.preparedSelection, a),
        (n.updatedDisplay || n.startHeight != i.doc.height) &&
          Oo(i, n.barMeasure),
        n.updatedDisplay && Ru(i, n.barMeasure),
        n.selectionChanged && Lu(i),
        i.state.focused && n.updateInput && i.display.input.reset(n.typing),
        a && ap(n.cm);
    }
    function d1(n) {
      var i = n.cm,
        a = i.display,
        l = i.doc;
      if (
        (n.updatedDisplay && gp(i, n.update),
        a.wheelStartX != null &&
          (n.scrollTop != null || n.scrollLeft != null || n.scrollToPos) &&
          (a.wheelStartX = a.wheelStartY = null),
        n.scrollTop != null && fp(i, n.scrollTop, n.forceScroll),
        n.scrollLeft != null && qi(i, n.scrollLeft, !0, !0),
        n.scrollToPos)
      ) {
        var u = i1(
          i,
          Wt(l, n.scrollToPos.from),
          Wt(l, n.scrollToPos.to),
          n.scrollToPos.margin,
        );
        r1(i, u);
      }
      var p = n.maybeHiddenMarkers,
        m = n.maybeUnhiddenMarkers;
      if (p)
        for (var b = 0; b < p.length; ++b)
          p[b].lines.length || ke(p[b], "hide");
      if (m)
        for (var x = 0; x < m.length; ++x)
          m[x].lines.length && ke(m[x], "unhide");
      a.wrapper.offsetHeight && (l.scrollTop = i.display.scroller.scrollTop),
        n.changeObjs && ke(i, "changes", i, n.changeObjs),
        n.update && n.update.finish();
    }
    function Sn(n, i) {
      if (n.curOp) return i();
      Wi(n);
      try {
        return i();
      } finally {
        Ui(n);
      }
    }
    function Be(n, i) {
      return function () {
        if (n.curOp) return i.apply(n, arguments);
        Wi(n);
        try {
          return i.apply(n, arguments);
        } finally {
          Ui(n);
        }
      };
    }
    function Je(n) {
      return function () {
        if (this.curOp) return n.apply(this, arguments);
        Wi(this);
        try {
          return n.apply(this, arguments);
        } finally {
          Ui(this);
        }
      };
    }
    function We(n) {
      return function () {
        var i = this.cm;
        if (!i || i.curOp) return n.apply(this, arguments);
        Wi(i);
        try {
          return n.apply(this, arguments);
        } finally {
          Ui(i);
        }
      };
    }
    function Fs(n, i) {
      n.doc.highlightFrontier < n.display.viewTo &&
        n.state.highlight.set(i, j(p1, n));
    }
    function p1(n) {
      var i = n.doc;
      if (!(i.highlightFrontier >= n.display.viewTo)) {
        var a = +new Date() + n.options.workTime,
          l = Es(n, i.highlightFrontier),
          u = [];
        i.iter(
          l.line,
          Math.min(i.first + i.size, n.display.viewTo + 500),
          function (p) {
            if (l.line >= n.display.viewFrom) {
              var m = p.styles,
                b =
                  p.text.length > n.options.maxHighlightLength
                    ? dr(i.mode, l.state)
                    : null,
                x = _d(n, p, l, !0);
              b && (l.state = b), (p.styles = x.styles);
              var S = p.styleClasses,
                P = x.classes;
              P ? (p.styleClasses = P) : S && (p.styleClasses = null);
              for (
                var D =
                    !m ||
                    m.length != p.styles.length ||
                    (S != P &&
                      (!S ||
                        !P ||
                        S.bgClass != P.bgClass ||
                        S.textClass != P.textClass)),
                  W = 0;
                !D && W < m.length;
                ++W
              )
                D = m[W] != p.styles[W];
              D && u.push(l.line), (p.stateAfter = l.save()), l.nextLine();
            } else
              p.text.length <= n.options.maxHighlightLength && cu(n, p.text, l),
                (p.stateAfter = l.line % 5 == 0 ? l.save() : null),
                l.nextLine();
            if (+new Date() > a) return Fs(n, n.options.workDelay), !0;
          },
        ),
          (i.highlightFrontier = l.line),
          (i.modeFrontier = Math.max(i.modeFrontier, l.line)),
          u.length &&
            Sn(n, function () {
              for (var p = 0; p < u.length; p++) ri(n, u[p], "text");
            });
      }
    }
    var ga = function (n, i, a) {
      var l = n.display;
      (this.viewport = i),
        (this.visible = da(l, n.doc, i)),
        (this.editorIsHidden = !l.wrapper.offsetWidth),
        (this.wrapperHeight = l.wrapper.clientHeight),
        (this.wrapperWidth = l.wrapper.clientWidth),
        (this.oldDisplayWidth = zi(n)),
        (this.force = a),
        (this.dims = ku(n)),
        (this.events = []);
    };
    (ga.prototype.signal = function (n, i) {
      _n(n, i) && this.events.push(arguments);
    }),
      (ga.prototype.finish = function () {
        for (var n = 0; n < this.events.length; n++)
          ke.apply(null, this.events[n]);
      });
    function g1(n) {
      var i = n.display;
      !i.scrollbarsClipped &&
        i.scroller.offsetWidth &&
        ((i.nativeBarWidth = i.scroller.offsetWidth - i.scroller.clientWidth),
        (i.heightForcer.style.height = gr(n) + "px"),
        (i.sizer.style.marginBottom = -i.nativeBarWidth + "px"),
        (i.sizer.style.borderRightWidth = gr(n) + "px"),
        (i.scrollbarsClipped = !0));
    }
    function v1(n) {
      if (n.hasFocus()) return null;
      var i = yt(Qt(n));
      if (!i || !Q(n.display.lineDiv, i)) return null;
      var a = { activeElt: i };
      if (window.getSelection) {
        var l = Tt(n).getSelection();
        l.anchorNode &&
          l.extend &&
          Q(n.display.lineDiv, l.anchorNode) &&
          ((a.anchorNode = l.anchorNode),
          (a.anchorOffset = l.anchorOffset),
          (a.focusNode = l.focusNode),
          (a.focusOffset = l.focusOffset));
      }
      return a;
    }
    function m1(n) {
      if (
        !(!n || !n.activeElt || n.activeElt == yt(Vt(n.activeElt))) &&
        (n.activeElt.focus(),
        !/^(INPUT|TEXTAREA)$/.test(n.activeElt.nodeName) &&
          n.anchorNode &&
          Q(document.body, n.anchorNode) &&
          Q(document.body, n.focusNode))
      ) {
        var i = n.activeElt.ownerDocument,
          a = i.defaultView.getSelection(),
          l = i.createRange();
        l.setEnd(n.anchorNode, n.anchorOffset),
          l.collapse(!1),
          a.removeAllRanges(),
          a.addRange(l),
          a.extend(n.focusNode, n.focusOffset);
      }
    }
    function $u(n, i) {
      var a = n.display,
        l = n.doc;
      if (i.editorIsHidden) return ii(n), !1;
      if (
        !i.force &&
        i.visible.from >= a.viewFrom &&
        i.visible.to <= a.viewTo &&
        (a.updateLineNumbers == null || a.updateLineNumbers >= a.viewTo) &&
        a.renderedView == a.view &&
        sp(n) == 0
      )
        return !1;
      mp(n) && (ii(n), (i.dims = ku(n)));
      var u = l.first + l.size,
        p = Math.max(i.visible.from - n.options.viewportMargin, l.first),
        m = Math.min(u, i.visible.to + n.options.viewportMargin);
      a.viewFrom < p &&
        p - a.viewFrom < 20 &&
        (p = Math.max(l.first, a.viewFrom)),
        a.viewTo > m && a.viewTo - m < 20 && (m = Math.min(u, a.viewTo)),
        Or && ((p = du(n.doc, p)), (m = Rd(n.doc, m)));
      var b =
        p != a.viewFrom ||
        m != a.viewTo ||
        a.lastWrapHeight != i.wrapperHeight ||
        a.lastWrapWidth != i.wrapperWidth;
      e1(n, p, m),
        (a.viewOffset = Dr(Pt(n.doc, a.viewFrom))),
        (n.display.mover.style.top = a.viewOffset + "px");
      var x = sp(n);
      if (
        !b &&
        x == 0 &&
        !i.force &&
        a.renderedView == a.view &&
        (a.updateLineNumbers == null || a.updateLineNumbers >= a.viewTo)
      )
        return !1;
      var S = v1(n);
      return (
        x > 4 && (a.lineDiv.style.display = "none"),
        y1(n, a.updateLineNumbers, i.dims),
        x > 4 && (a.lineDiv.style.display = ""),
        (a.renderedView = a.view),
        m1(S),
        G(a.cursorDiv),
        G(a.selectionDiv),
        (a.gutters.style.height = a.sizer.style.minHeight = 0),
        b &&
          ((a.lastWrapHeight = i.wrapperHeight),
          (a.lastWrapWidth = i.wrapperWidth),
          Fs(n, 400)),
        (a.updateLineNumbers = null),
        !0
      );
    }
    function gp(n, i) {
      for (var a = i.viewport, l = !0; ; l = !1) {
        if (!l || !n.options.lineWrapping || i.oldDisplayWidth == zi(n)) {
          if (
            (a &&
              a.top != null &&
              (a = {
                top: Math.min(n.doc.height + mu(n.display) - yu(n), a.top),
              }),
            (i.visible = da(n.display, n.doc, a)),
            i.visible.from >= n.display.viewFrom &&
              i.visible.to <= n.display.viewTo)
          )
            break;
        } else l && (i.visible = da(n.display, n.doc, a));
        if (!$u(n, i)) break;
        ha(n);
        var u = Rs(n);
        $s(n), Oo(n, u), Ru(n, u), (i.force = !1);
      }
      i.signal(n, "update", n),
        (n.display.viewFrom != n.display.reportedViewFrom ||
          n.display.viewTo != n.display.reportedViewTo) &&
          (i.signal(
            n,
            "viewportChange",
            n,
            n.display.viewFrom,
            n.display.viewTo,
          ),
          (n.display.reportedViewFrom = n.display.viewFrom),
          (n.display.reportedViewTo = n.display.viewTo));
    }
    function Ou(n, i) {
      var a = new ga(n, i);
      if ($u(n, a)) {
        ha(n), gp(n, a);
        var l = Rs(n);
        $s(n), Oo(n, l), Ru(n, l), a.finish();
      }
    }
    function y1(n, i, a) {
      var l = n.display,
        u = n.options.lineNumbers,
        p = l.lineDiv,
        m = p.firstChild;
      function b(Z) {
        var ot = Z.nextSibling;
        return (
          v && H && n.display.currentWheelTarget == Z
            ? (Z.style.display = "none")
            : Z.parentNode.removeChild(Z),
          ot
        );
      }
      for (var x = l.view, S = l.viewFrom, P = 0; P < x.length; P++) {
        var D = x[P];
        if (!D.hidden)
          if (!D.node || D.node.parentNode != p) {
            var W = jw(n, D, S, a);
            p.insertBefore(W, m);
          } else {
            for (; m != D.node; ) m = b(m);
            var q = u && i != null && i <= S && D.lineNumber;
            D.changes &&
              (Et(D.changes, "gutter") > -1 && (q = !1), qd(n, D, S, a)),
              q &&
                (G(D.lineNumber),
                D.lineNumber.appendChild(
                  document.createTextNode(gt(n.options, S)),
                )),
              (m = D.node.nextSibling);
          }
        S += D.size;
      }
      for (; m; ) m = b(m);
    }
    function Du(n) {
      var i = n.gutters.offsetWidth;
      (n.sizer.style.marginLeft = i + "px"), qe(n, "gutterChanged", n);
    }
    function Ru(n, i) {
      (n.display.sizer.style.minHeight = i.docHeight + "px"),
        (n.display.heightForcer.style.top = i.docHeight + "px"),
        (n.display.gutters.style.height =
          i.docHeight + n.display.barHeight + gr(n) + "px");
    }
    function vp(n) {
      var i = n.display,
        a = i.view;
      if (
        !(!i.alignWidgets && (!i.gutters.firstChild || !n.options.fixedGutter))
      ) {
        for (
          var l = Cu(i) - i.scroller.scrollLeft + n.doc.scrollLeft,
            u = i.gutters.offsetWidth,
            p = l + "px",
            m = 0;
          m < a.length;
          m++
        )
          if (!a[m].hidden) {
            n.options.fixedGutter &&
              (a[m].gutter && (a[m].gutter.style.left = p),
              a[m].gutterBackground && (a[m].gutterBackground.style.left = p));
            var b = a[m].alignable;
            if (b) for (var x = 0; x < b.length; x++) b[x].style.left = p;
          }
        n.options.fixedGutter && (i.gutters.style.left = l + u + "px");
      }
    }
    function mp(n) {
      if (!n.options.lineNumbers) return !1;
      var i = n.doc,
        a = gt(n.options, i.first + i.size - 1),
        l = n.display;
      if (a.length != l.lineNumChars) {
        var u = l.measure.appendChild(
            k(
              "div",
              [k("div", a)],
              "CodeMirror-linenumber CodeMirror-gutter-elt",
            ),
          ),
          p = u.firstChild.offsetWidth,
          m = u.offsetWidth - p;
        return (
          (l.lineGutter.style.width = ""),
          (l.lineNumInnerWidth = Math.max(p, l.lineGutter.offsetWidth - m) + 1),
          (l.lineNumWidth = l.lineNumInnerWidth + m),
          (l.lineNumChars = l.lineNumInnerWidth ? a.length : -1),
          (l.lineGutter.style.width = l.lineNumWidth + "px"),
          Du(n.display),
          !0
        );
      }
      return !1;
    }
    function zu(n, i) {
      for (var a = [], l = !1, u = 0; u < n.length; u++) {
        var p = n[u],
          m = null;
        if (
          (typeof p != "string" && ((m = p.style), (p = p.className)),
          p == "CodeMirror-linenumbers")
        )
          if (i) l = !0;
          else continue;
        a.push({ className: p, style: m });
      }
      return (
        i && !l && a.push({ className: "CodeMirror-linenumbers", style: null }),
        a
      );
    }
    function yp(n) {
      var i = n.gutters,
        a = n.gutterSpecs;
      G(i), (n.lineGutter = null);
      for (var l = 0; l < a.length; ++l) {
        var u = a[l],
          p = u.className,
          m = u.style,
          b = i.appendChild(k("div", null, "CodeMirror-gutter " + p));
        m && (b.style.cssText = m),
          p == "CodeMirror-linenumbers" &&
            ((n.lineGutter = b),
            (b.style.width = (n.lineNumWidth || 1) + "px"));
      }
      (i.style.display = a.length ? "" : "none"), Du(n);
    }
    function Is(n) {
      yp(n.display), ln(n), vp(n);
    }
    function b1(n, i, a, l) {
      var u = this;
      (this.input = a),
        (u.scrollbarFiller = k("div", null, "CodeMirror-scrollbar-filler")),
        u.scrollbarFiller.setAttribute("cm-not-content", "true"),
        (u.gutterFiller = k("div", null, "CodeMirror-gutter-filler")),
        u.gutterFiller.setAttribute("cm-not-content", "true"),
        (u.lineDiv = I("div", null, "CodeMirror-code")),
        (u.selectionDiv = k(
          "div",
          null,
          null,
          "position: relative; z-index: 1",
        )),
        (u.cursorDiv = k("div", null, "CodeMirror-cursors")),
        (u.measure = k("div", null, "CodeMirror-measure")),
        (u.lineMeasure = k("div", null, "CodeMirror-measure")),
        (u.lineSpace = I(
          "div",
          [u.measure, u.lineMeasure, u.selectionDiv, u.cursorDiv, u.lineDiv],
          null,
          "position: relative; outline: none",
        ));
      var p = I("div", [u.lineSpace], "CodeMirror-lines");
      (u.mover = k("div", [p], null, "position: relative")),
        (u.sizer = k("div", [u.mover], "CodeMirror-sizer")),
        (u.sizerWidth = null),
        (u.heightForcer = k(
          "div",
          null,
          null,
          "position: absolute; height: " + R + "px; width: 1px;",
        )),
        (u.gutters = k("div", null, "CodeMirror-gutters")),
        (u.lineGutter = null),
        (u.scroller = k(
          "div",
          [u.sizer, u.heightForcer, u.gutters],
          "CodeMirror-scroll",
        )),
        u.scroller.setAttribute("tabIndex", "-1"),
        (u.wrapper = k(
          "div",
          [u.scrollbarFiller, u.gutterFiller, u.scroller],
          "CodeMirror",
        )),
        w && _ >= 105 && (u.wrapper.style.clipPath = "inset(0px)"),
        u.wrapper.setAttribute("translate", "no"),
        d &&
          g < 8 &&
          ((u.gutters.style.zIndex = -1), (u.scroller.style.paddingRight = 0)),
        !v && !(s && E) && (u.scroller.draggable = !0),
        n && (n.appendChild ? n.appendChild(u.wrapper) : n(u.wrapper)),
        (u.viewFrom = u.viewTo = i.first),
        (u.reportedViewFrom = u.reportedViewTo = i.first),
        (u.view = []),
        (u.renderedView = null),
        (u.externalMeasured = null),
        (u.viewOffset = 0),
        (u.lastWrapHeight = u.lastWrapWidth = 0),
        (u.updateLineNumbers = null),
        (u.nativeBarWidth = u.barHeight = u.barWidth = 0),
        (u.scrollbarsClipped = !1),
        (u.lineNumWidth = u.lineNumInnerWidth = u.lineNumChars = null),
        (u.alignWidgets = !1),
        (u.cachedCharWidth = u.cachedTextHeight = u.cachedPaddingH = null),
        (u.maxLine = null),
        (u.maxLineLength = 0),
        (u.maxLineChanged = !1),
        (u.wheelDX = u.wheelDY = u.wheelStartX = u.wheelStartY = null),
        (u.shift = !1),
        (u.selForContextMenu = null),
        (u.activeTouch = null),
        (u.gutterSpecs = zu(l.gutters, l.lineNumbers)),
        yp(u),
        a.init(u);
    }
    var va = 0,
      zr = null;
    d ? (zr = -0.53) : s ? (zr = 15) : w ? (zr = -0.7) : L && (zr = -1 / 3);
    function bp(n) {
      var i = n.wheelDeltaX,
        a = n.wheelDeltaY;
      return (
        i == null && n.detail && n.axis == n.HORIZONTAL_AXIS && (i = n.detail),
        a == null && n.detail && n.axis == n.VERTICAL_AXIS
          ? (a = n.detail)
          : a == null && (a = n.wheelDelta),
        { x: i, y: a }
      );
    }
    function w1(n) {
      var i = bp(n);
      return (i.x *= zr), (i.y *= zr), i;
    }
    function wp(n, i) {
      w &&
        _ == 102 &&
        (n.display.chromeScrollHack == null
          ? (n.display.sizer.style.pointerEvents = "none")
          : clearTimeout(n.display.chromeScrollHack),
        (n.display.chromeScrollHack = setTimeout(function () {
          (n.display.chromeScrollHack = null),
            (n.display.sizer.style.pointerEvents = "");
        }, 100)));
      var a = bp(i),
        l = a.x,
        u = a.y,
        p = zr;
      i.deltaMode === 0 && ((l = i.deltaX), (u = i.deltaY), (p = 1));
      var m = n.display,
        b = m.scroller,
        x = b.scrollWidth > b.clientWidth,
        S = b.scrollHeight > b.clientHeight;
      if ((l && x) || (u && S)) {
        if (u && H && v) {
          t: for (var P = i.target, D = m.view; P != b; P = P.parentNode)
            for (var W = 0; W < D.length; W++)
              if (D[W].node == P) {
                n.display.currentWheelTarget = P;
                break t;
              }
        }
        if (l && !s && !N && p != null) {
          u && S && Ds(n, Math.max(0, b.scrollTop + u * p)),
            qi(n, Math.max(0, b.scrollLeft + l * p)),
            (!u || (u && S)) && Xe(i),
            (m.wheelStartX = null);
          return;
        }
        if (u && p != null) {
          var q = u * p,
            Z = n.doc.scrollTop,
            ot = Z + m.wrapper.clientHeight;
          q < 0
            ? (Z = Math.max(0, Z + q - 50))
            : (ot = Math.min(n.doc.height, ot + q + 50)),
            Ou(n, { top: Z, bottom: ot });
        }
        va < 20 &&
          i.deltaMode !== 0 &&
          (m.wheelStartX == null
            ? ((m.wheelStartX = b.scrollLeft),
              (m.wheelStartY = b.scrollTop),
              (m.wheelDX = l),
              (m.wheelDY = u),
              setTimeout(function () {
                if (m.wheelStartX != null) {
                  var vt = b.scrollLeft - m.wheelStartX,
                    bt = b.scrollTop - m.wheelStartY,
                    Ct =
                      (bt && m.wheelDY && bt / m.wheelDY) ||
                      (vt && m.wheelDX && vt / m.wheelDX);
                  (m.wheelStartX = m.wheelStartY = null),
                    Ct && ((zr = (zr * va + Ct) / (va + 1)), ++va);
                }
              }, 200))
            : ((m.wheelDX += l), (m.wheelDY += u)));
      }
    }
    var On = function (n, i) {
      (this.ranges = n), (this.primIndex = i);
    };
    (On.prototype.primary = function () {
      return this.ranges[this.primIndex];
    }),
      (On.prototype.equals = function (n) {
        if (n == this) return !0;
        if (
          n.primIndex != this.primIndex ||
          n.ranges.length != this.ranges.length
        )
          return !1;
        for (var i = 0; i < this.ranges.length; i++) {
          var a = this.ranges[i],
            l = n.ranges[i];
          if (!ce(a.anchor, l.anchor) || !ce(a.head, l.head)) return !1;
        }
        return !0;
      }),
      (On.prototype.deepCopy = function () {
        for (var n = [], i = 0; i < this.ranges.length; i++)
          n[i] = new ue(He(this.ranges[i].anchor), He(this.ranges[i].head));
        return new On(n, this.primIndex);
      }),
      (On.prototype.somethingSelected = function () {
        for (var n = 0; n < this.ranges.length; n++)
          if (!this.ranges[n].empty()) return !0;
        return !1;
      }),
      (On.prototype.contains = function (n, i) {
        i || (i = n);
        for (var a = 0; a < this.ranges.length; a++) {
          var l = this.ranges[a];
          if (_t(i, l.from()) >= 0 && _t(n, l.to()) <= 0) return a;
        }
        return -1;
      });
    var ue = function (n, i) {
      (this.anchor = n), (this.head = i);
    };
    (ue.prototype.from = function () {
      return To(this.anchor, this.head);
    }),
      (ue.prototype.to = function () {
        return sn(this.anchor, this.head);
      }),
      (ue.prototype.empty = function () {
        return (
          this.head.line == this.anchor.line && this.head.ch == this.anchor.ch
        );
      });
    function tr(n, i, a) {
      var l = n && n.options.selectionsMayTouch,
        u = i[a];
      i.sort(function (W, q) {
        return _t(W.from(), q.from());
      }),
        (a = Et(i, u));
      for (var p = 1; p < i.length; p++) {
        var m = i[p],
          b = i[p - 1],
          x = _t(b.to(), m.from());
        if (l && !m.empty() ? x > 0 : x >= 0) {
          var S = To(b.from(), m.from()),
            P = sn(b.to(), m.to()),
            D = b.empty() ? m.from() == m.head : b.from() == b.head;
          p <= a && --a, i.splice(--p, 2, new ue(D ? P : S, D ? S : P));
        }
      }
      return new On(i, a);
    }
    function oi(n, i) {
      return new On([new ue(n, i || n)], 0);
    }
    function si(n) {
      return n.text
        ? X(
            n.from.line + n.text.length - 1,
            ut(n.text).length + (n.text.length == 1 ? n.from.ch : 0),
          )
        : n.to;
    }
    function xp(n, i) {
      if (_t(n, i.from) < 0) return n;
      if (_t(n, i.to) <= 0) return si(i);
      var a = n.line + i.text.length - (i.to.line - i.from.line) - 1,
        l = n.ch;
      return n.line == i.to.line && (l += si(i).ch - i.to.ch), X(a, l);
    }
    function Fu(n, i) {
      for (var a = [], l = 0; l < n.sel.ranges.length; l++) {
        var u = n.sel.ranges[l];
        a.push(new ue(xp(u.anchor, i), xp(u.head, i)));
      }
      return tr(n.cm, a, n.sel.primIndex);
    }
    function _p(n, i, a) {
      return n.line == i.line
        ? X(a.line, n.ch - i.ch + a.ch)
        : X(a.line + (n.line - i.line), n.ch);
    }
    function x1(n, i, a) {
      for (var l = [], u = X(n.first, 0), p = u, m = 0; m < i.length; m++) {
        var b = i[m],
          x = _p(b.from, u, p),
          S = _p(si(b), u, p);
        if (((u = b.to), (p = S), a == "around")) {
          var P = n.sel.ranges[m],
            D = _t(P.head, P.anchor) < 0;
          l[m] = new ue(D ? S : x, D ? x : S);
        } else l[m] = new ue(x, x);
      }
      return new On(l, n.sel.primIndex);
    }
    function Iu(n) {
      (n.doc.mode = So(n.options, n.doc.modeOption)), Hs(n);
    }
    function Hs(n) {
      n.doc.iter(function (i) {
        i.stateAfter && (i.stateAfter = null), i.styles && (i.styles = null);
      }),
        (n.doc.modeFrontier = n.doc.highlightFrontier = n.doc.first),
        Fs(n, 100),
        n.state.modeGen++,
        n.curOp && ln(n);
    }
    function Sp(n, i) {
      return (
        i.from.ch == 0 &&
        i.to.ch == 0 &&
        ut(i.text) == "" &&
        (!n.cm || n.cm.options.wholeLineUpdateBefore)
      );
    }
    function Hu(n, i, a, l) {
      function u(Ct) {
        return a ? a[Ct] : null;
      }
      function p(Ct, wt, Lt) {
        Aw(Ct, wt, Lt, l), qe(Ct, "change", Ct, i);
      }
      function m(Ct, wt) {
        for (var Lt = [], zt = Ct; zt < wt; ++zt)
          Lt.push(new Eo(S[zt], u(zt), l));
        return Lt;
      }
      var b = i.from,
        x = i.to,
        S = i.text,
        P = Pt(n, b.line),
        D = Pt(n, x.line),
        W = ut(S),
        q = u(S.length - 1),
        Z = x.line - b.line;
      if (i.full)
        n.insert(0, m(0, S.length)), n.remove(S.length, n.size - S.length);
      else if (Sp(n, i)) {
        var ot = m(0, S.length - 1);
        p(D, D.text, q),
          Z && n.remove(b.line, Z),
          ot.length && n.insert(b.line, ot);
      } else if (P == D)
        if (S.length == 1)
          p(P, P.text.slice(0, b.ch) + W + P.text.slice(x.ch), q);
        else {
          var vt = m(1, S.length - 1);
          vt.push(new Eo(W + P.text.slice(x.ch), q, l)),
            p(P, P.text.slice(0, b.ch) + S[0], u(0)),
            n.insert(b.line + 1, vt);
        }
      else if (S.length == 1)
        p(P, P.text.slice(0, b.ch) + S[0] + D.text.slice(x.ch), u(0)),
          n.remove(b.line + 1, Z);
      else {
        p(P, P.text.slice(0, b.ch) + S[0], u(0)),
          p(D, W + D.text.slice(x.ch), q);
        var bt = m(1, S.length - 1);
        Z > 1 && n.remove(b.line + 1, Z - 1), n.insert(b.line + 1, bt);
      }
      qe(n, "change", n, i);
    }
    function li(n, i, a) {
      function l(u, p, m) {
        if (u.linked)
          for (var b = 0; b < u.linked.length; ++b) {
            var x = u.linked[b];
            if (x.doc != p) {
              var S = m && x.sharedHist;
              (a && !S) || (i(x.doc, S), l(x.doc, u, S));
            }
          }
      }
      l(n, null, !0);
    }
    function kp(n, i) {
      if (i.cm) throw new Error("This document is already in use.");
      (n.doc = i),
        (i.cm = n),
        Tu(n),
        Iu(n),
        Cp(n),
        (n.options.direction = i.direction),
        n.options.lineWrapping || gu(n),
        (n.options.mode = i.modeOption),
        ln(n);
    }
    function Cp(n) {
      (n.doc.direction == "rtl" ? At : ht)(n.display.lineDiv, "CodeMirror-rtl");
    }
    function _1(n) {
      Sn(n, function () {
        Cp(n), ln(n);
      });
    }
    function ma(n) {
      (this.done = []),
        (this.undone = []),
        (this.undoDepth = n ? n.undoDepth : 1 / 0),
        (this.lastModTime = this.lastSelTime = 0),
        (this.lastOp = this.lastSelOp = null),
        (this.lastOrigin = this.lastSelOrigin = null),
        (this.generation = this.maxGeneration = n ? n.maxGeneration : 1);
    }
    function qu(n, i) {
      var a = { from: He(i.from), to: si(i), text: $r(n, i.from, i.to) };
      return (
        Lp(n, a, i.from.line, i.to.line + 1),
        li(
          n,
          function (l) {
            return Lp(l, a, i.from.line, i.to.line + 1);
          },
          !0,
        ),
        a
      );
    }
    function Tp(n) {
      for (; n.length; ) {
        var i = ut(n);
        if (i.ranges) n.pop();
        else break;
      }
    }
    function S1(n, i) {
      if (i) return Tp(n.done), ut(n.done);
      if (n.done.length && !ut(n.done).ranges) return ut(n.done);
      if (n.done.length > 1 && !n.done[n.done.length - 2].ranges)
        return n.done.pop(), ut(n.done);
    }
    function Ep(n, i, a, l) {
      var u = n.history;
      u.undone.length = 0;
      var p = +new Date(),
        m,
        b;
      if (
        (u.lastOp == l ||
          (u.lastOrigin == i.origin &&
            i.origin &&
            ((i.origin.charAt(0) == "+" &&
              u.lastModTime >
                p - (n.cm ? n.cm.options.historyEventDelay : 500)) ||
              i.origin.charAt(0) == "*"))) &&
        (m = S1(u, u.lastOp == l))
      )
        (b = ut(m.changes)),
          _t(i.from, i.to) == 0 && _t(i.from, b.to) == 0
            ? (b.to = si(i))
            : m.changes.push(qu(n, i));
      else {
        var x = ut(u.done);
        for (
          (!x || !x.ranges) && ya(n.sel, u.done),
            m = { changes: [qu(n, i)], generation: u.generation },
            u.done.push(m);
          u.done.length > u.undoDepth;
        )
          u.done.shift(), u.done[0].ranges || u.done.shift();
      }
      u.done.push(a),
        (u.generation = ++u.maxGeneration),
        (u.lastModTime = u.lastSelTime = p),
        (u.lastOp = u.lastSelOp = l),
        (u.lastOrigin = u.lastSelOrigin = i.origin),
        b || ke(n, "historyAdded");
    }
    function k1(n, i, a, l) {
      var u = i.charAt(0);
      return (
        u == "*" ||
        (u == "+" &&
          a.ranges.length == l.ranges.length &&
          a.somethingSelected() == l.somethingSelected() &&
          new Date() - n.history.lastSelTime <=
            (n.cm ? n.cm.options.historyEventDelay : 500))
      );
    }
    function C1(n, i, a, l) {
      var u = n.history,
        p = l && l.origin;
      a == u.lastSelOp ||
      (p &&
        u.lastSelOrigin == p &&
        ((u.lastModTime == u.lastSelTime && u.lastOrigin == p) ||
          k1(n, p, ut(u.done), i)))
        ? (u.done[u.done.length - 1] = i)
        : ya(i, u.done),
        (u.lastSelTime = +new Date()),
        (u.lastSelOrigin = p),
        (u.lastSelOp = a),
        l && l.clearRedo !== !1 && Tp(u.undone);
    }
    function ya(n, i) {
      var a = ut(i);
      (a && a.ranges && a.equals(n)) || i.push(n);
    }
    function Lp(n, i, a, l) {
      var u = i["spans_" + n.id],
        p = 0;
      n.iter(Math.max(n.first, a), Math.min(n.first + n.size, l), function (m) {
        m.markedSpans &&
          ((u || (u = i["spans_" + n.id] = {}))[p] = m.markedSpans),
          ++p;
      });
    }
    function T1(n) {
      if (!n) return null;
      for (var i, a = 0; a < n.length; ++a)
        n[a].marker.explicitlyCleared
          ? i || (i = n.slice(0, a))
          : i && i.push(n[a]);
      return i ? (i.length ? i : null) : n;
    }
    function E1(n, i) {
      var a = i["spans_" + n.id];
      if (!a) return null;
      for (var l = [], u = 0; u < i.text.length; ++u) l.push(T1(a[u]));
      return l;
    }
    function Ap(n, i) {
      var a = E1(n, i),
        l = fu(n, i);
      if (!a) return l;
      if (!l) return a;
      for (var u = 0; u < a.length; ++u) {
        var p = a[u],
          m = l[u];
        if (p && m)
          t: for (var b = 0; b < m.length; ++b) {
            for (var x = m[b], S = 0; S < p.length; ++S)
              if (p[S].marker == x.marker) continue t;
            p.push(x);
          }
        else m && (a[u] = m);
      }
      return a;
    }
    function Do(n, i, a) {
      for (var l = [], u = 0; u < n.length; ++u) {
        var p = n[u];
        if (p.ranges) {
          l.push(a ? On.prototype.deepCopy.call(p) : p);
          continue;
        }
        var m = p.changes,
          b = [];
        l.push({ changes: b });
        for (var x = 0; x < m.length; ++x) {
          var S = m[x],
            P = void 0;
          if ((b.push({ from: S.from, to: S.to, text: S.text }), i))
            for (var D in S)
              (P = D.match(/^spans_(\d+)$/)) &&
                Et(i, Number(P[1])) > -1 &&
                ((ut(b)[D] = S[D]), delete S[D]);
        }
      }
      return l;
    }
    function Bu(n, i, a, l) {
      if (l) {
        var u = n.anchor;
        if (a) {
          var p = _t(i, u) < 0;
          p != _t(a, u) < 0 ? ((u = i), (i = a)) : p != _t(i, a) < 0 && (i = a);
        }
        return new ue(u, i);
      } else return new ue(a || i, i);
    }
    function ba(n, i, a, l, u) {
      u == null && (u = n.cm && (n.cm.display.shift || n.extend)),
        Ye(n, new On([Bu(n.sel.primary(), i, a, u)], 0), l);
    }
    function Mp(n, i, a) {
      for (
        var l = [], u = n.cm && (n.cm.display.shift || n.extend), p = 0;
        p < n.sel.ranges.length;
        p++
      )
        l[p] = Bu(n.sel.ranges[p], i[p], null, u);
      var m = tr(n.cm, l, n.sel.primIndex);
      Ye(n, m, a);
    }
    function Wu(n, i, a, l) {
      var u = n.sel.ranges.slice(0);
      (u[i] = a), Ye(n, tr(n.cm, u, n.sel.primIndex), l);
    }
    function Np(n, i, a, l) {
      Ye(n, oi(i, a), l);
    }
    function L1(n, i, a) {
      var l = {
        ranges: i.ranges,
        update: function (u) {
          this.ranges = [];
          for (var p = 0; p < u.length; p++)
            this.ranges[p] = new ue(Wt(n, u[p].anchor), Wt(n, u[p].head));
        },
        origin: a && a.origin,
      };
      return (
        ke(n, "beforeSelectionChange", n, l),
        n.cm && ke(n.cm, "beforeSelectionChange", n.cm, l),
        l.ranges != i.ranges ? tr(n.cm, l.ranges, l.ranges.length - 1) : i
      );
    }
    function Pp(n, i, a) {
      var l = n.history.done,
        u = ut(l);
      u && u.ranges ? ((l[l.length - 1] = i), wa(n, i, a)) : Ye(n, i, a);
    }
    function Ye(n, i, a) {
      wa(n, i, a), C1(n, n.sel, n.cm ? n.cm.curOp.id : NaN, a);
    }
    function wa(n, i, a) {
      (_n(n, "beforeSelectionChange") ||
        (n.cm && _n(n.cm, "beforeSelectionChange"))) &&
        (i = L1(n, i, a));
      var l =
        (a && a.bias) ||
        (_t(i.primary().head, n.sel.primary().head) < 0 ? -1 : 1);
      $p(n, Dp(n, i, l, !0)),
        !(a && a.scroll === !1) &&
          n.cm &&
          n.cm.getOption("readOnly") != "nocursor" &&
          $o(n.cm);
    }
    function $p(n, i) {
      i.equals(n.sel) ||
        ((n.sel = i),
        n.cm &&
          ((n.cm.curOp.updateInput = 1),
          (n.cm.curOp.selectionChanged = !0),
          Hn(n.cm)),
        qe(n, "cursorActivity", n));
    }
    function Op(n) {
      $p(n, Dp(n, n.sel, null, !1));
    }
    function Dp(n, i, a, l) {
      for (var u, p = 0; p < i.ranges.length; p++) {
        var m = i.ranges[p],
          b = i.ranges.length == n.sel.ranges.length && n.sel.ranges[p],
          x = xa(n, m.anchor, b && b.anchor, a, l),
          S = m.head == m.anchor ? x : xa(n, m.head, b && b.head, a, l);
        (u || x != m.anchor || S != m.head) &&
          (u || (u = i.ranges.slice(0, p)), (u[p] = new ue(x, S)));
      }
      return u ? tr(n.cm, u, i.primIndex) : i;
    }
    function Ro(n, i, a, l, u) {
      var p = Pt(n, i.line);
      if (p.markedSpans)
        for (var m = 0; m < p.markedSpans.length; ++m) {
          var b = p.markedSpans[m],
            x = b.marker,
            S = "selectLeft" in x ? !x.selectLeft : x.inclusiveLeft,
            P = "selectRight" in x ? !x.selectRight : x.inclusiveRight;
          if (
            (b.from == null || (S ? b.from <= i.ch : b.from < i.ch)) &&
            (b.to == null || (P ? b.to >= i.ch : b.to > i.ch))
          ) {
            if (u && (ke(x, "beforeCursorEnter"), x.explicitlyCleared))
              if (p.markedSpans) {
                --m;
                continue;
              } else break;
            if (!x.atomic) continue;
            if (a) {
              var D = x.find(l < 0 ? 1 : -1),
                W = void 0;
              if (
                ((l < 0 ? P : S) &&
                  (D = Rp(n, D, -l, D && D.line == i.line ? p : null)),
                D &&
                  D.line == i.line &&
                  (W = _t(D, a)) &&
                  (l < 0 ? W < 0 : W > 0))
              )
                return Ro(n, D, i, l, u);
            }
            var q = x.find(l < 0 ? -1 : 1);
            return (
              (l < 0 ? S : P) && (q = Rp(n, q, l, q.line == i.line ? p : null)),
              q ? Ro(n, q, i, l, u) : null
            );
          }
        }
      return i;
    }
    function xa(n, i, a, l, u) {
      var p = l || 1,
        m =
          Ro(n, i, a, p, u) ||
          (!u && Ro(n, i, a, p, !0)) ||
          Ro(n, i, a, -p, u) ||
          (!u && Ro(n, i, a, -p, !0));
      return m || ((n.cantEdit = !0), X(n.first, 0));
    }
    function Rp(n, i, a, l) {
      return a < 0 && i.ch == 0
        ? i.line > n.first
          ? Wt(n, X(i.line - 1))
          : null
        : a > 0 && i.ch == (l || Pt(n, i.line)).text.length
          ? i.line < n.first + n.size - 1
            ? X(i.line + 1, 0)
            : null
          : new X(i.line, i.ch + a);
    }
    function zp(n) {
      n.setSelection(X(n.firstLine(), 0), X(n.lastLine()), V);
    }
    function Fp(n, i, a) {
      var l = {
        canceled: !1,
        from: i.from,
        to: i.to,
        text: i.text,
        origin: i.origin,
        cancel: function () {
          return (l.canceled = !0);
        },
      };
      return (
        a &&
          (l.update = function (u, p, m, b) {
            u && (l.from = Wt(n, u)),
              p && (l.to = Wt(n, p)),
              m && (l.text = m),
              b !== void 0 && (l.origin = b);
          }),
        ke(n, "beforeChange", n, l),
        n.cm && ke(n.cm, "beforeChange", n.cm, l),
        l.canceled
          ? (n.cm && (n.cm.curOp.updateInput = 2), null)
          : { from: l.from, to: l.to, text: l.text, origin: l.origin }
      );
    }
    function zo(n, i, a) {
      if (n.cm) {
        if (!n.cm.curOp) return Be(n.cm, zo)(n, i, a);
        if (n.cm.state.suppressEdits) return;
      }
      if (
        !(
          (_n(n, "beforeChange") || (n.cm && _n(n.cm, "beforeChange"))) &&
          ((i = Fp(n, i, !0)), !i)
        )
      ) {
        var l = Ad && !a && Cw(n, i.from, i.to);
        if (l)
          for (var u = l.length - 1; u >= 0; --u)
            Ip(n, {
              from: l[u].from,
              to: l[u].to,
              text: u ? [""] : i.text,
              origin: i.origin,
            });
        else Ip(n, i);
      }
    }
    function Ip(n, i) {
      if (!(i.text.length == 1 && i.text[0] == "" && _t(i.from, i.to) == 0)) {
        var a = Fu(n, i);
        Ep(n, i, a, n.cm ? n.cm.curOp.id : NaN), qs(n, i, a, fu(n, i));
        var l = [];
        li(n, function (u, p) {
          !p && Et(l, u.history) == -1 && (Wp(u.history, i), l.push(u.history)),
            qs(u, i, null, fu(u, i));
        });
      }
    }
    function _a(n, i, a) {
      var l = n.cm && n.cm.state.suppressEdits;
      if (!(l && !a)) {
        for (
          var u = n.history,
            p,
            m = n.sel,
            b = i == "undo" ? u.done : u.undone,
            x = i == "undo" ? u.undone : u.done,
            S = 0;
          S < b.length &&
          ((p = b[S]), !(a ? p.ranges && !p.equals(n.sel) : !p.ranges));
          S++
        );
        if (S != b.length) {
          for (u.lastOrigin = u.lastSelOrigin = null; ; )
            if (((p = b.pop()), p.ranges)) {
              if ((ya(p, x), a && !p.equals(n.sel))) {
                Ye(n, p, { clearRedo: !1 });
                return;
              }
              m = p;
            } else if (l) {
              b.push(p);
              return;
            } else break;
          var P = [];
          ya(m, x),
            x.push({ changes: P, generation: u.generation }),
            (u.generation = p.generation || ++u.maxGeneration);
          for (
            var D = _n(n, "beforeChange") || (n.cm && _n(n.cm, "beforeChange")),
              W = function (ot) {
                var vt = p.changes[ot];
                if (((vt.origin = i), D && !Fp(n, vt, !1)))
                  return (b.length = 0), {};
                P.push(qu(n, vt));
                var bt = ot ? Fu(n, vt) : ut(b);
                qs(n, vt, bt, Ap(n, vt)),
                  !ot &&
                    n.cm &&
                    n.cm.scrollIntoView({ from: vt.from, to: si(vt) });
                var Ct = [];
                li(n, function (wt, Lt) {
                  !Lt &&
                    Et(Ct, wt.history) == -1 &&
                    (Wp(wt.history, vt), Ct.push(wt.history)),
                    qs(wt, vt, null, Ap(wt, vt));
                });
              },
              q = p.changes.length - 1;
            q >= 0;
            --q
          ) {
            var Z = W(q);
            if (Z) return Z.v;
          }
        }
      }
    }
    function Hp(n, i) {
      if (
        i != 0 &&
        ((n.first += i),
        (n.sel = new On(
          pt(n.sel.ranges, function (u) {
            return new ue(
              X(u.anchor.line + i, u.anchor.ch),
              X(u.head.line + i, u.head.ch),
            );
          }),
          n.sel.primIndex,
        )),
        n.cm)
      ) {
        ln(n.cm, n.first, n.first - i, i);
        for (var a = n.cm.display, l = a.viewFrom; l < a.viewTo; l++)
          ri(n.cm, l, "gutter");
      }
    }
    function qs(n, i, a, l) {
      if (n.cm && !n.cm.curOp) return Be(n.cm, qs)(n, i, a, l);
      if (i.to.line < n.first) {
        Hp(n, i.text.length - 1 - (i.to.line - i.from.line));
        return;
      }
      if (!(i.from.line > n.lastLine())) {
        if (i.from.line < n.first) {
          var u = i.text.length - 1 - (n.first - i.from.line);
          Hp(n, u),
            (i = {
              from: X(n.first, 0),
              to: X(i.to.line + u, i.to.ch),
              text: [ut(i.text)],
              origin: i.origin,
            });
        }
        var p = n.lastLine();
        i.to.line > p &&
          (i = {
            from: i.from,
            to: X(p, Pt(n, p).text.length),
            text: [i.text[0]],
            origin: i.origin,
          }),
          (i.removed = $r(n, i.from, i.to)),
          a || (a = Fu(n, i)),
          n.cm ? A1(n.cm, i, l) : Hu(n, i, l),
          wa(n, a, V),
          n.cantEdit && xa(n, X(n.firstLine(), 0)) && (n.cantEdit = !1);
      }
    }
    function A1(n, i, a) {
      var l = n.doc,
        u = n.display,
        p = i.from,
        m = i.to,
        b = !1,
        x = p.line;
      n.options.lineWrapping ||
        ((x = C(Qn(Pt(l, p.line)))),
        l.iter(x, m.line + 1, function (q) {
          if (q == u.maxLine) return (b = !0), !0;
        })),
        l.sel.contains(i.from, i.to) > -1 && Hn(n),
        Hu(l, i, a, op(n)),
        n.options.lineWrapping ||
          (l.iter(x, p.line + i.text.length, function (q) {
            var Z = oa(q);
            Z > u.maxLineLength &&
              ((u.maxLine = q),
              (u.maxLineLength = Z),
              (u.maxLineChanged = !0),
              (b = !1));
          }),
          b && (n.curOp.updateMaxLine = !0)),
        yw(l, p.line),
        Fs(n, 400);
      var S = i.text.length - (m.line - p.line) - 1;
      i.full
        ? ln(n)
        : p.line == m.line && i.text.length == 1 && !Sp(n.doc, i)
          ? ri(n, p.line, "text")
          : ln(n, p.line, m.line + 1, S);
      var P = _n(n, "changes"),
        D = _n(n, "change");
      if (D || P) {
        var W = {
          from: p,
          to: m,
          text: i.text,
          removed: i.removed,
          origin: i.origin,
        };
        D && qe(n, "change", n, W),
          P && (n.curOp.changeObjs || (n.curOp.changeObjs = [])).push(W);
      }
      n.display.selForContextMenu = null;
    }
    function Fo(n, i, a, l, u) {
      var p;
      l || (l = a),
        _t(l, a) < 0 && ((p = [l, a]), (a = p[0]), (l = p[1])),
        typeof i == "string" && (i = n.splitLines(i)),
        zo(n, { from: a, to: l, text: i, origin: u });
    }
    function qp(n, i, a, l) {
      a < n.line ? (n.line += l) : i < n.line && ((n.line = i), (n.ch = 0));
    }
    function Bp(n, i, a, l) {
      for (var u = 0; u < n.length; ++u) {
        var p = n[u],
          m = !0;
        if (p.ranges) {
          p.copied || ((p = n[u] = p.deepCopy()), (p.copied = !0));
          for (var b = 0; b < p.ranges.length; b++)
            qp(p.ranges[b].anchor, i, a, l), qp(p.ranges[b].head, i, a, l);
          continue;
        }
        for (var x = 0; x < p.changes.length; ++x) {
          var S = p.changes[x];
          if (a < S.from.line)
            (S.from = X(S.from.line + l, S.from.ch)),
              (S.to = X(S.to.line + l, S.to.ch));
          else if (i <= S.to.line) {
            m = !1;
            break;
          }
        }
        m || (n.splice(0, u + 1), (u = 0));
      }
    }
    function Wp(n, i) {
      var a = i.from.line,
        l = i.to.line,
        u = i.text.length - (l - a) - 1;
      Bp(n.done, a, l, u), Bp(n.undone, a, l, u);
    }
    function Bs(n, i, a, l) {
      var u = i,
        p = i;
      return (
        typeof i == "number" ? (p = Pt(n, wd(n, i))) : (u = C(i)),
        u == null ? null : (l(p, u) && n.cm && ri(n.cm, u, a), p)
      );
    }
    function Ws(n) {
      (this.lines = n), (this.parent = null);
      for (var i = 0, a = 0; a < n.length; ++a)
        (n[a].parent = this), (i += n[a].height);
      this.height = i;
    }
    Ws.prototype = {
      chunkSize: function () {
        return this.lines.length;
      },
      removeInner: function (n, i) {
        for (var a = n, l = n + i; a < l; ++a) {
          var u = this.lines[a];
          (this.height -= u.height), Mw(u), qe(u, "delete");
        }
        this.lines.splice(n, i);
      },
      collapse: function (n) {
        n.push.apply(n, this.lines);
      },
      insertInner: function (n, i, a) {
        (this.height += a),
          (this.lines = this.lines
            .slice(0, n)
            .concat(i)
            .concat(this.lines.slice(n)));
        for (var l = 0; l < i.length; ++l) i[l].parent = this;
      },
      iterN: function (n, i, a) {
        for (var l = n + i; n < l; ++n) if (a(this.lines[n])) return !0;
      },
    };
    function Us(n) {
      this.children = n;
      for (var i = 0, a = 0, l = 0; l < n.length; ++l) {
        var u = n[l];
        (i += u.chunkSize()), (a += u.height), (u.parent = this);
      }
      (this.size = i), (this.height = a), (this.parent = null);
    }
    Us.prototype = {
      chunkSize: function () {
        return this.size;
      },
      removeInner: function (n, i) {
        this.size -= i;
        for (var a = 0; a < this.children.length; ++a) {
          var l = this.children[a],
            u = l.chunkSize();
          if (n < u) {
            var p = Math.min(i, u - n),
              m = l.height;
            if (
              (l.removeInner(n, p),
              (this.height -= m - l.height),
              u == p && (this.children.splice(a--, 1), (l.parent = null)),
              (i -= p) == 0)
            )
              break;
            n = 0;
          } else n -= u;
        }
        if (
          this.size - i < 25 &&
          (this.children.length > 1 || !(this.children[0] instanceof Ws))
        ) {
          var b = [];
          this.collapse(b),
            (this.children = [new Ws(b)]),
            (this.children[0].parent = this);
        }
      },
      collapse: function (n) {
        for (var i = 0; i < this.children.length; ++i)
          this.children[i].collapse(n);
      },
      insertInner: function (n, i, a) {
        (this.size += i.length), (this.height += a);
        for (var l = 0; l < this.children.length; ++l) {
          var u = this.children[l],
            p = u.chunkSize();
          if (n <= p) {
            if ((u.insertInner(n, i, a), u.lines && u.lines.length > 50)) {
              for (
                var m = (u.lines.length % 25) + 25, b = m;
                b < u.lines.length;
              ) {
                var x = new Ws(u.lines.slice(b, (b += 25)));
                (u.height -= x.height),
                  this.children.splice(++l, 0, x),
                  (x.parent = this);
              }
              (u.lines = u.lines.slice(0, m)), this.maybeSpill();
            }
            break;
          }
          n -= p;
        }
      },
      maybeSpill: function () {
        if (!(this.children.length <= 10)) {
          var n = this;
          do {
            var i = n.children.splice(n.children.length - 5, 5),
              a = new Us(i);
            if (n.parent) {
              (n.size -= a.size), (n.height -= a.height);
              var u = Et(n.parent.children, n);
              n.parent.children.splice(u + 1, 0, a);
            } else {
              var l = new Us(n.children);
              (l.parent = n), (n.children = [l, a]), (n = l);
            }
            a.parent = n.parent;
          } while (n.children.length > 10);
          n.parent.maybeSpill();
        }
      },
      iterN: function (n, i, a) {
        for (var l = 0; l < this.children.length; ++l) {
          var u = this.children[l],
            p = u.chunkSize();
          if (n < p) {
            var m = Math.min(i, p - n);
            if (u.iterN(n, m, a)) return !0;
            if ((i -= m) == 0) break;
            n = 0;
          } else n -= p;
        }
      },
    };
    var js = function (n, i, a) {
      if (a) for (var l in a) a.hasOwnProperty(l) && (this[l] = a[l]);
      (this.doc = n), (this.node = i);
    };
    (js.prototype.clear = function () {
      var n = this.doc.cm,
        i = this.line.widgets,
        a = this.line,
        l = C(a);
      if (!(l == null || !i)) {
        for (var u = 0; u < i.length; ++u) i[u] == this && i.splice(u--, 1);
        i.length || (a.widgets = null);
        var p = Ns(this);
        $n(a, Math.max(0, a.height - p)),
          n &&
            (Sn(n, function () {
              Up(n, a, -p), ri(n, l, "widget");
            }),
            qe(n, "lineWidgetCleared", n, this, l));
      }
    }),
      (js.prototype.changed = function () {
        var n = this,
          i = this.height,
          a = this.doc.cm,
          l = this.line;
        this.height = null;
        var u = Ns(this) - i;
        u &&
          (ni(this.doc, l) || $n(l, l.height + u),
          a &&
            Sn(a, function () {
              (a.curOp.forceUpdate = !0),
                Up(a, l, u),
                qe(a, "lineWidgetChanged", a, n, C(l));
            }));
      }),
      Vn(js);
    function Up(n, i, a) {
      Dr(i) < ((n.curOp && n.curOp.scrollTop) || n.doc.scrollTop) && Pu(n, a);
    }
    function M1(n, i, a, l) {
      var u = new js(n, a, l),
        p = n.cm;
      return (
        p && u.noHScroll && (p.display.alignWidgets = !0),
        Bs(n, i, "widget", function (m) {
          var b = m.widgets || (m.widgets = []);
          if (
            (u.insertAt == null
              ? b.push(u)
              : b.splice(Math.min(b.length, Math.max(0, u.insertAt)), 0, u),
            (u.line = m),
            p && !ni(n, m))
          ) {
            var x = Dr(m) < n.scrollTop;
            $n(m, m.height + Ns(u)),
              x && Pu(p, u.height),
              (p.curOp.forceUpdate = !0);
          }
          return !0;
        }),
        p && qe(p, "lineWidgetAdded", p, u, typeof i == "number" ? i : C(i)),
        u
      );
    }
    var jp = 0,
      ai = function (n, i) {
        (this.lines = []), (this.type = i), (this.doc = n), (this.id = ++jp);
      };
    (ai.prototype.clear = function () {
      if (!this.explicitlyCleared) {
        var n = this.doc.cm,
          i = n && !n.curOp;
        if ((i && Wi(n), _n(this, "clear"))) {
          var a = this.find();
          a && qe(this, "clear", a.from, a.to);
        }
        for (var l = null, u = null, p = 0; p < this.lines.length; ++p) {
          var m = this.lines[p],
            b = Ls(m.markedSpans, this);
          n && !this.collapsed
            ? ri(n, C(m), "text")
            : n && (b.to != null && (u = C(m)), b.from != null && (l = C(m))),
            (m.markedSpans = xw(m.markedSpans, b)),
            b.from == null &&
              this.collapsed &&
              !ni(this.doc, m) &&
              n &&
              $n(m, Mo(n.display));
        }
        if (n && this.collapsed && !n.options.lineWrapping)
          for (var x = 0; x < this.lines.length; ++x) {
            var S = Qn(this.lines[x]),
              P = oa(S);
            P > n.display.maxLineLength &&
              ((n.display.maxLine = S),
              (n.display.maxLineLength = P),
              (n.display.maxLineChanged = !0));
          }
        l != null && n && this.collapsed && ln(n, l, u + 1),
          (this.lines.length = 0),
          (this.explicitlyCleared = !0),
          this.atomic &&
            this.doc.cantEdit &&
            ((this.doc.cantEdit = !1), n && Op(n.doc)),
          n && qe(n, "markerCleared", n, this, l, u),
          i && Ui(n),
          this.parent && this.parent.clear();
      }
    }),
      (ai.prototype.find = function (n, i) {
        n == null && this.type == "bookmark" && (n = 1);
        for (var a, l, u = 0; u < this.lines.length; ++u) {
          var p = this.lines[u],
            m = Ls(p.markedSpans, this);
          if (m.from != null && ((a = X(i ? p : C(p), m.from)), n == -1))
            return a;
          if (m.to != null && ((l = X(i ? p : C(p), m.to)), n == 1)) return l;
        }
        return a && { from: a, to: l };
      }),
      (ai.prototype.changed = function () {
        var n = this,
          i = this.find(-1, !0),
          a = this,
          l = this.doc.cm;
        !i ||
          !l ||
          Sn(l, function () {
            var u = i.line,
              p = C(i.line),
              m = bu(l, p);
            if (
              (m &&
                (Zd(m), (l.curOp.selectionChanged = l.curOp.forceUpdate = !0)),
              (l.curOp.updateMaxLine = !0),
              !ni(a.doc, u) && a.height != null)
            ) {
              var b = a.height;
              a.height = null;
              var x = Ns(a) - b;
              x && $n(u, u.height + x);
            }
            qe(l, "markerChanged", l, n);
          });
      }),
      (ai.prototype.attachLine = function (n) {
        if (!this.lines.length && this.doc.cm) {
          var i = this.doc.cm.curOp;
          (!i.maybeHiddenMarkers || Et(i.maybeHiddenMarkers, this) == -1) &&
            (i.maybeUnhiddenMarkers || (i.maybeUnhiddenMarkers = [])).push(
              this,
            );
        }
        this.lines.push(n);
      }),
      (ai.prototype.detachLine = function (n) {
        if (
          (this.lines.splice(Et(this.lines, n), 1),
          !this.lines.length && this.doc.cm)
        ) {
          var i = this.doc.cm.curOp;
          (i.maybeHiddenMarkers || (i.maybeHiddenMarkers = [])).push(this);
        }
      }),
      Vn(ai);
    function Io(n, i, a, l, u) {
      if (l && l.shared) return N1(n, i, a, l, u);
      if (n.cm && !n.cm.curOp) return Be(n.cm, Io)(n, i, a, l, u);
      var p = new ai(n, u),
        m = _t(i, a);
      if ((l && it(l, p, !1), m > 0 || (m == 0 && p.clearWhenEmpty !== !1)))
        return p;
      if (
        (p.replacedWith &&
          ((p.collapsed = !0),
          (p.widgetNode = I("span", [p.replacedWith], "CodeMirror-widget")),
          l.handleMouseEvents ||
            p.widgetNode.setAttribute("cm-ignore-events", "true"),
          l.insertLeft && (p.widgetNode.insertLeft = !0)),
        p.collapsed)
      ) {
        if (
          Dd(n, i.line, i, a, p) ||
          (i.line != a.line && Dd(n, a.line, i, a, p))
        )
          throw new Error(
            "Inserting collapsed marker partially overlapping an existing one",
          );
        ww();
      }
      p.addToHistory &&
        Ep(n, { from: i, to: a, origin: "markText" }, n.sel, NaN);
      var b = i.line,
        x = n.cm,
        S;
      if (
        (n.iter(b, a.line + 1, function (D) {
          x &&
            p.collapsed &&
            !x.options.lineWrapping &&
            Qn(D) == x.display.maxLine &&
            (S = !0),
            p.collapsed && b != i.line && $n(D, 0),
            _w(
              D,
              new ea(p, b == i.line ? i.ch : null, b == a.line ? a.ch : null),
              n.cm && n.cm.curOp,
            ),
            ++b;
        }),
        p.collapsed &&
          n.iter(i.line, a.line + 1, function (D) {
            ni(n, D) && $n(D, 0);
          }),
        p.clearOnEnter &&
          Rt(p, "beforeCursorEnter", function () {
            return p.clear();
          }),
        p.readOnly &&
          (bw(),
          (n.history.done.length || n.history.undone.length) &&
            n.clearHistory()),
        p.collapsed && ((p.id = ++jp), (p.atomic = !0)),
        x)
      ) {
        if ((S && (x.curOp.updateMaxLine = !0), p.collapsed))
          ln(x, i.line, a.line + 1);
        else if (
          p.className ||
          p.startStyle ||
          p.endStyle ||
          p.css ||
          p.attributes ||
          p.title
        )
          for (var P = i.line; P <= a.line; P++) ri(x, P, "text");
        p.atomic && Op(x.doc), qe(x, "markerAdded", x, p);
      }
      return p;
    }
    var Gs = function (n, i) {
      (this.markers = n), (this.primary = i);
      for (var a = 0; a < n.length; ++a) n[a].parent = this;
    };
    (Gs.prototype.clear = function () {
      if (!this.explicitlyCleared) {
        this.explicitlyCleared = !0;
        for (var n = 0; n < this.markers.length; ++n) this.markers[n].clear();
        qe(this, "clear");
      }
    }),
      (Gs.prototype.find = function (n, i) {
        return this.primary.find(n, i);
      }),
      Vn(Gs);
    function N1(n, i, a, l, u) {
      (l = it(l)), (l.shared = !1);
      var p = [Io(n, i, a, l, u)],
        m = p[0],
        b = l.widgetNode;
      return (
        li(n, function (x) {
          b && (l.widgetNode = b.cloneNode(!0)),
            p.push(Io(x, Wt(x, i), Wt(x, a), l, u));
          for (var S = 0; S < x.linked.length; ++S)
            if (x.linked[S].isParent) return;
          m = ut(p);
        }),
        new Gs(p, m)
      );
    }
    function Gp(n) {
      return n.findMarks(
        X(n.first, 0),
        n.clipPos(X(n.lastLine())),
        function (i) {
          return i.parent;
        },
      );
    }
    function P1(n, i) {
      for (var a = 0; a < i.length; a++) {
        var l = i[a],
          u = l.find(),
          p = n.clipPos(u.from),
          m = n.clipPos(u.to);
        if (_t(p, m)) {
          var b = Io(n, p, m, l.primary, l.primary.type);
          l.markers.push(b), (b.parent = l);
        }
      }
    }
    function $1(n) {
      for (
        var i = function (l) {
            var u = n[l],
              p = [u.primary.doc];
            li(u.primary.doc, function (x) {
              return p.push(x);
            });
            for (var m = 0; m < u.markers.length; m++) {
              var b = u.markers[m];
              Et(p, b.doc) == -1 &&
                ((b.parent = null), u.markers.splice(m--, 1));
            }
          },
          a = 0;
        a < n.length;
        a++
      )
        i(a);
    }
    var O1 = 0,
      an = function (n, i, a, l, u) {
        if (!(this instanceof an)) return new an(n, i, a, l, u);
        a == null && (a = 0),
          Us.call(this, [new Ws([new Eo("", null)])]),
          (this.first = a),
          (this.scrollTop = this.scrollLeft = 0),
          (this.cantEdit = !1),
          (this.cleanGeneration = 1),
          (this.modeFrontier = this.highlightFrontier = a);
        var p = X(a, 0);
        (this.sel = oi(p)),
          (this.history = new ma(null)),
          (this.id = ++O1),
          (this.modeOption = i),
          (this.lineSep = l),
          (this.direction = u == "rtl" ? "rtl" : "ltr"),
          (this.extend = !1),
          typeof n == "string" && (n = this.splitLines(n)),
          Hu(this, { from: p, to: p, text: n }),
          Ye(this, oi(p), V);
      };
    (an.prototype = Ot(Us.prototype, {
      constructor: an,
      iter: function (n, i, a) {
        a
          ? this.iterN(n - this.first, i - n, a)
          : this.iterN(this.first, this.first + this.size, n);
      },
      insert: function (n, i) {
        for (var a = 0, l = 0; l < i.length; ++l) a += i[l].height;
        this.insertInner(n - this.first, i, a);
      },
      remove: function (n, i) {
        this.removeInner(n - this.first, i);
      },
      getValue: function (n) {
        var i = Ts(this, this.first, this.first + this.size);
        return n === !1 ? i : i.join(n || this.lineSeparator());
      },
      setValue: We(function (n) {
        var i = X(this.first, 0),
          a = this.first + this.size - 1;
        zo(
          this,
          {
            from: i,
            to: X(a, Pt(this, a).text.length),
            text: this.splitLines(n),
            origin: "setValue",
            full: !0,
          },
          !0,
        ),
          this.cm && Os(this.cm, 0, 0),
          Ye(this, oi(i), V);
      }),
      replaceRange: function (n, i, a, l) {
        (i = Wt(this, i)), (a = a ? Wt(this, a) : i), Fo(this, n, i, a, l);
      },
      getRange: function (n, i, a) {
        var l = $r(this, Wt(this, n), Wt(this, i));
        return a === !1
          ? l
          : a === ""
            ? l.join("")
            : l.join(a || this.lineSeparator());
      },
      getLine: function (n) {
        var i = this.getLineHandle(n);
        return i && i.text;
      },
      getLineHandle: function (n) {
        if (et(this, n)) return Pt(this, n);
      },
      getLineNumber: function (n) {
        return C(n);
      },
      getLineHandleVisualStart: function (n) {
        return typeof n == "number" && (n = Pt(this, n)), Qn(n);
      },
      lineCount: function () {
        return this.size;
      },
      firstLine: function () {
        return this.first;
      },
      lastLine: function () {
        return this.first + this.size - 1;
      },
      clipPos: function (n) {
        return Wt(this, n);
      },
      getCursor: function (n) {
        var i = this.sel.primary(),
          a;
        return (
          n == null || n == "head"
            ? (a = i.head)
            : n == "anchor"
              ? (a = i.anchor)
              : n == "end" || n == "to" || n === !1
                ? (a = i.to())
                : (a = i.from()),
          a
        );
      },
      listSelections: function () {
        return this.sel.ranges;
      },
      somethingSelected: function () {
        return this.sel.somethingSelected();
      },
      setCursor: We(function (n, i, a) {
        Np(this, Wt(this, typeof n == "number" ? X(n, i || 0) : n), null, a);
      }),
      setSelection: We(function (n, i, a) {
        Np(this, Wt(this, n), Wt(this, i || n), a);
      }),
      extendSelection: We(function (n, i, a) {
        ba(this, Wt(this, n), i && Wt(this, i), a);
      }),
      extendSelections: We(function (n, i) {
        Mp(this, xd(this, n), i);
      }),
      extendSelectionsBy: We(function (n, i) {
        var a = pt(this.sel.ranges, n);
        Mp(this, xd(this, a), i);
      }),
      setSelections: We(function (n, i, a) {
        if (n.length) {
          for (var l = [], u = 0; u < n.length; u++)
            l[u] = new ue(
              Wt(this, n[u].anchor),
              Wt(this, n[u].head || n[u].anchor),
            );
          i == null && (i = Math.min(n.length - 1, this.sel.primIndex)),
            Ye(this, tr(this.cm, l, i), a);
        }
      }),
      addSelection: We(function (n, i, a) {
        var l = this.sel.ranges.slice(0);
        l.push(new ue(Wt(this, n), Wt(this, i || n))),
          Ye(this, tr(this.cm, l, l.length - 1), a);
      }),
      getSelection: function (n) {
        for (var i = this.sel.ranges, a, l = 0; l < i.length; l++) {
          var u = $r(this, i[l].from(), i[l].to());
          a = a ? a.concat(u) : u;
        }
        return n === !1 ? a : a.join(n || this.lineSeparator());
      },
      getSelections: function (n) {
        for (var i = [], a = this.sel.ranges, l = 0; l < a.length; l++) {
          var u = $r(this, a[l].from(), a[l].to());
          n !== !1 && (u = u.join(n || this.lineSeparator())), (i[l] = u);
        }
        return i;
      },
      replaceSelection: function (n, i, a) {
        for (var l = [], u = 0; u < this.sel.ranges.length; u++) l[u] = n;
        this.replaceSelections(l, i, a || "+input");
      },
      replaceSelections: We(function (n, i, a) {
        for (var l = [], u = this.sel, p = 0; p < u.ranges.length; p++) {
          var m = u.ranges[p];
          l[p] = {
            from: m.from(),
            to: m.to(),
            text: this.splitLines(n[p]),
            origin: a,
          };
        }
        for (
          var b = i && i != "end" && x1(this, l, i), x = l.length - 1;
          x >= 0;
          x--
        )
          zo(this, l[x]);
        b ? Pp(this, b) : this.cm && $o(this.cm);
      }),
      undo: We(function () {
        _a(this, "undo");
      }),
      redo: We(function () {
        _a(this, "redo");
      }),
      undoSelection: We(function () {
        _a(this, "undo", !0);
      }),
      redoSelection: We(function () {
        _a(this, "redo", !0);
      }),
      setExtending: function (n) {
        this.extend = n;
      },
      getExtending: function () {
        return this.extend;
      },
      historySize: function () {
        for (var n = this.history, i = 0, a = 0, l = 0; l < n.done.length; l++)
          n.done[l].ranges || ++i;
        for (var u = 0; u < n.undone.length; u++) n.undone[u].ranges || ++a;
        return { undo: i, redo: a };
      },
      clearHistory: function () {
        var n = this;
        (this.history = new ma(this.history)),
          li(
            this,
            function (i) {
              return (i.history = n.history);
            },
            !0,
          );
      },
      markClean: function () {
        this.cleanGeneration = this.changeGeneration(!0);
      },
      changeGeneration: function (n) {
        return (
          n &&
            (this.history.lastOp =
              this.history.lastSelOp =
              this.history.lastOrigin =
                null),
          this.history.generation
        );
      },
      isClean: function (n) {
        return this.history.generation == (n || this.cleanGeneration);
      },
      getHistory: function () {
        return { done: Do(this.history.done), undone: Do(this.history.undone) };
      },
      setHistory: function (n) {
        var i = (this.history = new ma(this.history));
        (i.done = Do(n.done.slice(0), null, !0)),
          (i.undone = Do(n.undone.slice(0), null, !0));
      },
      setGutterMarker: We(function (n, i, a) {
        return Bs(this, n, "gutter", function (l) {
          var u = l.gutterMarkers || (l.gutterMarkers = {});
          return (u[i] = a), !a && oe(u) && (l.gutterMarkers = null), !0;
        });
      }),
      clearGutter: We(function (n) {
        var i = this;
        this.iter(function (a) {
          a.gutterMarkers &&
            a.gutterMarkers[n] &&
            Bs(i, a, "gutter", function () {
              return (
                (a.gutterMarkers[n] = null),
                oe(a.gutterMarkers) && (a.gutterMarkers = null),
                !0
              );
            });
        });
      }),
      lineInfo: function (n) {
        var i;
        if (typeof n == "number") {
          if (!et(this, n) || ((i = n), (n = Pt(this, n)), !n)) return null;
        } else if (((i = C(n)), i == null)) return null;
        return {
          line: i,
          handle: n,
          text: n.text,
          gutterMarkers: n.gutterMarkers,
          textClass: n.textClass,
          bgClass: n.bgClass,
          wrapClass: n.wrapClass,
          widgets: n.widgets,
        };
      },
      addLineClass: We(function (n, i, a) {
        return Bs(this, n, i == "gutter" ? "gutter" : "class", function (l) {
          var u =
            i == "text"
              ? "textClass"
              : i == "background"
                ? "bgClass"
                : i == "gutter"
                  ? "gutterClass"
                  : "wrapClass";
          if (!l[u]) l[u] = a;
          else {
            if (dt(a).test(l[u])) return !1;
            l[u] += " " + a;
          }
          return !0;
        });
      }),
      removeLineClass: We(function (n, i, a) {
        return Bs(this, n, i == "gutter" ? "gutter" : "class", function (l) {
          var u =
              i == "text"
                ? "textClass"
                : i == "background"
                  ? "bgClass"
                  : i == "gutter"
                    ? "gutterClass"
                    : "wrapClass",
            p = l[u];
          if (p)
            if (a == null) l[u] = null;
            else {
              var m = p.match(dt(a));
              if (!m) return !1;
              var b = m.index + m[0].length;
              l[u] =
                p.slice(0, m.index) +
                  (!m.index || b == p.length ? "" : " ") +
                  p.slice(b) || null;
            }
          else return !1;
          return !0;
        });
      }),
      addLineWidget: We(function (n, i, a) {
        return M1(this, n, i, a);
      }),
      removeLineWidget: function (n) {
        n.clear();
      },
      markText: function (n, i, a) {
        return Io(this, Wt(this, n), Wt(this, i), a, (a && a.type) || "range");
      },
      setBookmark: function (n, i) {
        var a = {
          replacedWith: i && (i.nodeType == null ? i.widget : i),
          insertLeft: i && i.insertLeft,
          clearWhenEmpty: !1,
          shared: i && i.shared,
          handleMouseEvents: i && i.handleMouseEvents,
        };
        return (n = Wt(this, n)), Io(this, n, n, a, "bookmark");
      },
      findMarksAt: function (n) {
        n = Wt(this, n);
        var i = [],
          a = Pt(this, n.line).markedSpans;
        if (a)
          for (var l = 0; l < a.length; ++l) {
            var u = a[l];
            (u.from == null || u.from <= n.ch) &&
              (u.to == null || u.to >= n.ch) &&
              i.push(u.marker.parent || u.marker);
          }
        return i;
      },
      findMarks: function (n, i, a) {
        (n = Wt(this, n)), (i = Wt(this, i));
        var l = [],
          u = n.line;
        return (
          this.iter(n.line, i.line + 1, function (p) {
            var m = p.markedSpans;
            if (m)
              for (var b = 0; b < m.length; b++) {
                var x = m[b];
                !(
                  (x.to != null && u == n.line && n.ch >= x.to) ||
                  (x.from == null && u != n.line) ||
                  (x.from != null && u == i.line && x.from >= i.ch)
                ) &&
                  (!a || a(x.marker)) &&
                  l.push(x.marker.parent || x.marker);
              }
            ++u;
          }),
          l
        );
      },
      getAllMarks: function () {
        var n = [];
        return (
          this.iter(function (i) {
            var a = i.markedSpans;
            if (a)
              for (var l = 0; l < a.length; ++l)
                a[l].from != null && n.push(a[l].marker);
          }),
          n
        );
      },
      posFromIndex: function (n) {
        var i,
          a = this.first,
          l = this.lineSeparator().length;
        return (
          this.iter(function (u) {
            var p = u.text.length + l;
            if (p > n) return (i = n), !0;
            (n -= p), ++a;
          }),
          Wt(this, X(a, i))
        );
      },
      indexFromPos: function (n) {
        n = Wt(this, n);
        var i = n.ch;
        if (n.line < this.first || n.ch < 0) return 0;
        var a = this.lineSeparator().length;
        return (
          this.iter(this.first, n.line, function (l) {
            i += l.text.length + a;
          }),
          i
        );
      },
      copy: function (n) {
        var i = new an(
          Ts(this, this.first, this.first + this.size),
          this.modeOption,
          this.first,
          this.lineSep,
          this.direction,
        );
        return (
          (i.scrollTop = this.scrollTop),
          (i.scrollLeft = this.scrollLeft),
          (i.sel = this.sel),
          (i.extend = !1),
          n &&
            ((i.history.undoDepth = this.history.undoDepth),
            i.setHistory(this.getHistory())),
          i
        );
      },
      linkedDoc: function (n) {
        n || (n = {});
        var i = this.first,
          a = this.first + this.size;
        n.from != null && n.from > i && (i = n.from),
          n.to != null && n.to < a && (a = n.to);
        var l = new an(
          Ts(this, i, a),
          n.mode || this.modeOption,
          i,
          this.lineSep,
          this.direction,
        );
        return (
          n.sharedHist && (l.history = this.history),
          (this.linked || (this.linked = [])).push({
            doc: l,
            sharedHist: n.sharedHist,
          }),
          (l.linked = [{ doc: this, isParent: !0, sharedHist: n.sharedHist }]),
          P1(l, Gp(this)),
          l
        );
      },
      unlinkDoc: function (n) {
        if ((n instanceof be && (n = n.doc), this.linked))
          for (var i = 0; i < this.linked.length; ++i) {
            var a = this.linked[i];
            if (a.doc == n) {
              this.linked.splice(i, 1), n.unlinkDoc(this), $1(Gp(this));
              break;
            }
          }
        if (n.history == this.history) {
          var l = [n.id];
          li(
            n,
            function (u) {
              return l.push(u.id);
            },
            !0,
          ),
            (n.history = new ma(null)),
            (n.history.done = Do(this.history.done, l)),
            (n.history.undone = Do(this.history.undone, l));
        }
      },
      iterLinkedDocs: function (n) {
        li(this, n);
      },
      getMode: function () {
        return this.mode;
      },
      getEditor: function () {
        return this.cm;
      },
      splitLines: function (n) {
        return this.lineSep ? n.split(this.lineSep) : qn(n);
      },
      lineSeparator: function () {
        return (
          this.lineSep ||
          `
`
        );
      },
      setDirection: We(function (n) {
        n != "rtl" && (n = "ltr"),
          n != this.direction &&
            ((this.direction = n),
            this.iter(function (i) {
              return (i.order = null);
            }),
            this.cm && _1(this.cm));
      }),
    })),
      (an.prototype.eachLine = an.prototype.iter);
    var Vp = 0;
    function D1(n) {
      var i = this;
      if ((Kp(i), !(Ce(i, n) || Rr(i.display, n)))) {
        Xe(n), d && (Vp = +new Date());
        var a = Ii(i, n, !0),
          l = n.dataTransfer.files;
        if (!(!a || i.isReadOnly()))
          if (l && l.length && window.FileReader && window.File)
            for (
              var u = l.length,
                p = Array(u),
                m = 0,
                b = function () {
                  ++m == u &&
                    Be(i, function () {
                      a = Wt(i.doc, a);
                      var q = {
                        from: a,
                        to: a,
                        text: i.doc.splitLines(
                          p
                            .filter(function (Z) {
                              return Z != null;
                            })
                            .join(i.doc.lineSeparator()),
                        ),
                        origin: "paste",
                      };
                      zo(i.doc, q),
                        Pp(i.doc, oi(Wt(i.doc, a), Wt(i.doc, si(q))));
                    })();
                },
                x = function (q, Z) {
                  if (
                    i.options.allowDropFileTypes &&
                    Et(i.options.allowDropFileTypes, q.type) == -1
                  ) {
                    b();
                    return;
                  }
                  var ot = new FileReader();
                  (ot.onerror = function () {
                    return b();
                  }),
                    (ot.onload = function () {
                      var vt = ot.result;
                      if (/[\x00-\x08\x0e-\x1f]{2}/.test(vt)) {
                        b();
                        return;
                      }
                      (p[Z] = vt), b();
                    }),
                    ot.readAsText(q);
                },
                S = 0;
              S < l.length;
              S++
            )
              x(l[S], S);
          else {
            if (i.state.draggingText && i.doc.sel.contains(a) > -1) {
              i.state.draggingText(n),
                setTimeout(function () {
                  return i.display.input.focus();
                }, 20);
              return;
            }
            try {
              var P = n.dataTransfer.getData("Text");
              if (P) {
                var D;
                if (
                  (i.state.draggingText &&
                    !i.state.draggingText.copy &&
                    (D = i.listSelections()),
                  wa(i.doc, oi(a, a)),
                  D)
                )
                  for (var W = 0; W < D.length; ++W)
                    Fo(i.doc, "", D[W].anchor, D[W].head, "drag");
                i.replaceSelection(P, "around", "paste"),
                  i.display.input.focus();
              }
            } catch {}
          }
      }
    }
    function R1(n, i) {
      if (d && (!n.state.draggingText || +new Date() - Vp < 100)) {
        Qr(i);
        return;
      }
      if (
        !(Ce(n, i) || Rr(n.display, i)) &&
        (i.dataTransfer.setData("Text", n.getSelection()),
        (i.dataTransfer.effectAllowed = "copyMove"),
        i.dataTransfer.setDragImage && !L)
      ) {
        var a = k("img", null, null, "position: fixed; left: 0; top: 0;");
        (a.src =
          "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),
          N &&
            ((a.width = a.height = 1),
            n.display.wrapper.appendChild(a),
            (a._top = a.offsetTop)),
          i.dataTransfer.setDragImage(a, 0, 0),
          N && a.parentNode.removeChild(a);
      }
    }
    function z1(n, i) {
      var a = Ii(n, i);
      if (a) {
        var l = document.createDocumentFragment();
        Eu(n, a, l),
          n.display.dragCursor ||
            ((n.display.dragCursor = k(
              "div",
              null,
              "CodeMirror-cursors CodeMirror-dragcursors",
            )),
            n.display.lineSpace.insertBefore(
              n.display.dragCursor,
              n.display.cursorDiv,
            )),
          z(n.display.dragCursor, l);
      }
    }
    function Kp(n) {
      n.display.dragCursor &&
        (n.display.lineSpace.removeChild(n.display.dragCursor),
        (n.display.dragCursor = null));
    }
    function Xp(n) {
      if (document.getElementsByClassName) {
        for (
          var i = document.getElementsByClassName("CodeMirror"), a = [], l = 0;
          l < i.length;
          l++
        ) {
          var u = i[l].CodeMirror;
          u && a.push(u);
        }
        a.length &&
          a[0].operation(function () {
            for (var p = 0; p < a.length; p++) n(a[p]);
          });
      }
    }
    var Yp = !1;
    function F1() {
      Yp || (I1(), (Yp = !0));
    }
    function I1() {
      var n;
      Rt(window, "resize", function () {
        n == null &&
          (n = setTimeout(function () {
            (n = null), Xp(H1);
          }, 100));
      }),
        Rt(window, "blur", function () {
          return Xp(Po);
        });
    }
    function H1(n) {
      var i = n.display;
      (i.cachedCharWidth = i.cachedTextHeight = i.cachedPaddingH = null),
        (i.scrollbarsClipped = !1),
        n.setSize();
    }
    for (
      var ci = {
          3: "Pause",
          8: "Backspace",
          9: "Tab",
          13: "Enter",
          16: "Shift",
          17: "Ctrl",
          18: "Alt",
          19: "Pause",
          20: "CapsLock",
          27: "Esc",
          32: "Space",
          33: "PageUp",
          34: "PageDown",
          35: "End",
          36: "Home",
          37: "Left",
          38: "Up",
          39: "Right",
          40: "Down",
          44: "PrintScrn",
          45: "Insert",
          46: "Delete",
          59: ";",
          61: "=",
          91: "Mod",
          92: "Mod",
          93: "Mod",
          106: "*",
          107: "=",
          109: "-",
          110: ".",
          111: "/",
          145: "ScrollLock",
          173: "-",
          186: ";",
          187: "=",
          188: ",",
          189: "-",
          190: ".",
          191: "/",
          192: "`",
          219: "[",
          220: "\\",
          221: "]",
          222: "'",
          224: "Mod",
          63232: "Up",
          63233: "Down",
          63234: "Left",
          63235: "Right",
          63272: "Delete",
          63273: "Home",
          63275: "End",
          63276: "PageUp",
          63277: "PageDown",
          63302: "Insert",
        },
        Vs = 0;
      Vs < 10;
      Vs++
    )
      ci[Vs + 48] = ci[Vs + 96] = String(Vs);
    for (var Sa = 65; Sa <= 90; Sa++) ci[Sa] = String.fromCharCode(Sa);
    for (var Ks = 1; Ks <= 12; Ks++) ci[Ks + 111] = ci[Ks + 63235] = "F" + Ks;
    var Fr = {};
    (Fr.basic = {
      Left: "goCharLeft",
      Right: "goCharRight",
      Up: "goLineUp",
      Down: "goLineDown",
      End: "goLineEnd",
      Home: "goLineStartSmart",
      PageUp: "goPageUp",
      PageDown: "goPageDown",
      Delete: "delCharAfter",
      Backspace: "delCharBefore",
      "Shift-Backspace": "delCharBefore",
      Tab: "defaultTab",
      "Shift-Tab": "indentAuto",
      Enter: "newlineAndIndent",
      Insert: "toggleOverwrite",
      Esc: "singleSelection",
    }),
      (Fr.pcDefault = {
        "Ctrl-A": "selectAll",
        "Ctrl-D": "deleteLine",
        "Ctrl-Z": "undo",
        "Shift-Ctrl-Z": "redo",
        "Ctrl-Y": "redo",
        "Ctrl-Home": "goDocStart",
        "Ctrl-End": "goDocEnd",
        "Ctrl-Up": "goLineUp",
        "Ctrl-Down": "goLineDown",
        "Ctrl-Left": "goGroupLeft",
        "Ctrl-Right": "goGroupRight",
        "Alt-Left": "goLineStart",
        "Alt-Right": "goLineEnd",
        "Ctrl-Backspace": "delGroupBefore",
        "Ctrl-Delete": "delGroupAfter",
        "Ctrl-S": "save",
        "Ctrl-F": "find",
        "Ctrl-G": "findNext",
        "Shift-Ctrl-G": "findPrev",
        "Shift-Ctrl-F": "replace",
        "Shift-Ctrl-R": "replaceAll",
        "Ctrl-[": "indentLess",
        "Ctrl-]": "indentMore",
        "Ctrl-U": "undoSelection",
        "Shift-Ctrl-U": "redoSelection",
        "Alt-U": "redoSelection",
        fallthrough: "basic",
      }),
      (Fr.emacsy = {
        "Ctrl-F": "goCharRight",
        "Ctrl-B": "goCharLeft",
        "Ctrl-P": "goLineUp",
        "Ctrl-N": "goLineDown",
        "Ctrl-A": "goLineStart",
        "Ctrl-E": "goLineEnd",
        "Ctrl-V": "goPageDown",
        "Shift-Ctrl-V": "goPageUp",
        "Ctrl-D": "delCharAfter",
        "Ctrl-H": "delCharBefore",
        "Alt-Backspace": "delWordBefore",
        "Ctrl-K": "killLine",
        "Ctrl-T": "transposeChars",
        "Ctrl-O": "openLine",
      }),
      (Fr.macDefault = {
        "Cmd-A": "selectAll",
        "Cmd-D": "deleteLine",
        "Cmd-Z": "undo",
        "Shift-Cmd-Z": "redo",
        "Cmd-Y": "redo",
        "Cmd-Home": "goDocStart",
        "Cmd-Up": "goDocStart",
        "Cmd-End": "goDocEnd",
        "Cmd-Down": "goDocEnd",
        "Alt-Left": "goGroupLeft",
        "Alt-Right": "goGroupRight",
        "Cmd-Left": "goLineLeft",
        "Cmd-Right": "goLineRight",
        "Alt-Backspace": "delGroupBefore",
        "Ctrl-Alt-Backspace": "delGroupAfter",
        "Alt-Delete": "delGroupAfter",
        "Cmd-S": "save",
        "Cmd-F": "find",
        "Cmd-G": "findNext",
        "Shift-Cmd-G": "findPrev",
        "Cmd-Alt-F": "replace",
        "Shift-Cmd-Alt-F": "replaceAll",
        "Cmd-[": "indentLess",
        "Cmd-]": "indentMore",
        "Cmd-Backspace": "delWrappedLineLeft",
        "Cmd-Delete": "delWrappedLineRight",
        "Cmd-U": "undoSelection",
        "Shift-Cmd-U": "redoSelection",
        "Ctrl-Up": "goDocStart",
        "Ctrl-Down": "goDocEnd",
        fallthrough: ["basic", "emacsy"],
      }),
      (Fr.default = H ? Fr.macDefault : Fr.pcDefault);
    function q1(n) {
      var i = n.split(/-(?!$)/);
      n = i[i.length - 1];
      for (var a, l, u, p, m = 0; m < i.length - 1; m++) {
        var b = i[m];
        if (/^(cmd|meta|m)$/i.test(b)) p = !0;
        else if (/^a(lt)?$/i.test(b)) a = !0;
        else if (/^(c|ctrl|control)$/i.test(b)) l = !0;
        else if (/^s(hift)?$/i.test(b)) u = !0;
        else throw new Error("Unrecognized modifier name: " + b);
      }
      return (
        a && (n = "Alt-" + n),
        l && (n = "Ctrl-" + n),
        p && (n = "Cmd-" + n),
        u && (n = "Shift-" + n),
        n
      );
    }
    function B1(n) {
      var i = {};
      for (var a in n)
        if (n.hasOwnProperty(a)) {
          var l = n[a];
          if (/^(name|fallthrough|(de|at)tach)$/.test(a)) continue;
          if (l == "...") {
            delete n[a];
            continue;
          }
          for (var u = pt(a.split(" "), q1), p = 0; p < u.length; p++) {
            var m = void 0,
              b = void 0;
            p == u.length - 1
              ? ((b = u.join(" ")), (m = l))
              : ((b = u.slice(0, p + 1).join(" ")), (m = "..."));
            var x = i[b];
            if (!x) i[b] = m;
            else if (x != m) throw new Error("Inconsistent bindings for " + b);
          }
          delete n[a];
        }
      for (var S in i) n[S] = i[S];
      return n;
    }
    function Ho(n, i, a, l) {
      i = ka(i);
      var u = i.call ? i.call(n, l) : i[n];
      if (u === !1) return "nothing";
      if (u === "...") return "multi";
      if (u != null && a(u)) return "handled";
      if (i.fallthrough) {
        if (Object.prototype.toString.call(i.fallthrough) != "[object Array]")
          return Ho(n, i.fallthrough, a, l);
        for (var p = 0; p < i.fallthrough.length; p++) {
          var m = Ho(n, i.fallthrough[p], a, l);
          if (m) return m;
        }
      }
    }
    function Zp(n) {
      var i = typeof n == "string" ? n : ci[n.keyCode];
      return i == "Ctrl" || i == "Alt" || i == "Shift" || i == "Mod";
    }
    function Qp(n, i, a) {
      var l = n;
      return (
        i.altKey && l != "Alt" && (n = "Alt-" + n),
        (nt ? i.metaKey : i.ctrlKey) && l != "Ctrl" && (n = "Ctrl-" + n),
        (nt ? i.ctrlKey : i.metaKey) && l != "Mod" && (n = "Cmd-" + n),
        !a && i.shiftKey && l != "Shift" && (n = "Shift-" + n),
        n
      );
    }
    function Jp(n, i) {
      if (N && n.keyCode == 34 && n.char) return !1;
      var a = ci[n.keyCode];
      return a == null || n.altGraphKey
        ? !1
        : (n.keyCode == 3 && n.code && (a = n.code), Qp(a, n, i));
    }
    function ka(n) {
      return typeof n == "string" ? Fr[n] : n;
    }
    function qo(n, i) {
      for (var a = n.doc.sel.ranges, l = [], u = 0; u < a.length; u++) {
        for (var p = i(a[u]); l.length && _t(p.from, ut(l).to) <= 0; ) {
          var m = l.pop();
          if (_t(m.from, p.from) < 0) {
            p.from = m.from;
            break;
          }
        }
        l.push(p);
      }
      Sn(n, function () {
        for (var b = l.length - 1; b >= 0; b--)
          Fo(n.doc, "", l[b].from, l[b].to, "+delete");
        $o(n);
      });
    }
    function Uu(n, i, a) {
      var l = rn(n.text, i + a, a);
      return l < 0 || l > n.text.length ? null : l;
    }
    function ju(n, i, a) {
      var l = Uu(n, i.ch, a);
      return l == null ? null : new X(i.line, l, a < 0 ? "after" : "before");
    }
    function Gu(n, i, a, l, u) {
      if (n) {
        i.doc.direction == "rtl" && (u = -u);
        var p = Yt(a, i.doc.direction);
        if (p) {
          var m = u < 0 ? ut(p) : p[0],
            b = u < 0 == (m.level == 1),
            x = b ? "after" : "before",
            S;
          if (m.level > 0 || i.doc.direction == "rtl") {
            var P = Ao(i, a);
            S = u < 0 ? a.text.length - 1 : 0;
            var D = vr(i, P, S).top;
            (S = Pn(
              function (W) {
                return vr(i, P, W).top == D;
              },
              u < 0 == (m.level == 1) ? m.from : m.to - 1,
              S,
            )),
              x == "before" && (S = Uu(a, S, 1));
          } else S = u < 0 ? m.to : m.from;
          return new X(l, S, x);
        }
      }
      return new X(l, u < 0 ? a.text.length : 0, u < 0 ? "before" : "after");
    }
    function W1(n, i, a, l) {
      var u = Yt(i, n.doc.direction);
      if (!u) return ju(i, a, l);
      a.ch >= i.text.length
        ? ((a.ch = i.text.length), (a.sticky = "before"))
        : a.ch <= 0 && ((a.ch = 0), (a.sticky = "after"));
      var p = Ae(u, a.ch, a.sticky),
        m = u[p];
      if (
        n.doc.direction == "ltr" &&
        m.level % 2 == 0 &&
        (l > 0 ? m.to > a.ch : m.from < a.ch)
      )
        return ju(i, a, l);
      var b = function (bt, Ct) {
          return Uu(i, bt instanceof X ? bt.ch : bt, Ct);
        },
        x,
        S = function (bt) {
          return n.options.lineWrapping
            ? ((x = x || Ao(n, i)), ip(n, i, x, bt))
            : { begin: 0, end: i.text.length };
        },
        P = S(a.sticky == "before" ? b(a, -1) : a.ch);
      if (n.doc.direction == "rtl" || m.level == 1) {
        var D = (m.level == 1) == l < 0,
          W = b(a, D ? 1 : -1);
        if (
          W != null &&
          (D ? W <= m.to && W <= P.end : W >= m.from && W >= P.begin)
        ) {
          var q = D ? "before" : "after";
          return new X(a.line, W, q);
        }
      }
      var Z = function (bt, Ct, wt) {
          for (
            var Lt = function (ve, Ue) {
              return Ue
                ? new X(a.line, b(ve, 1), "before")
                : new X(a.line, ve, "after");
            };
            bt >= 0 && bt < u.length;
            bt += Ct
          ) {
            var zt = u[bt],
              $t = Ct > 0 == (zt.level != 1),
              Xt = $t ? wt.begin : b(wt.end, -1);
            if (
              (zt.from <= Xt && Xt < zt.to) ||
              ((Xt = $t ? zt.from : b(zt.to, -1)),
              wt.begin <= Xt && Xt < wt.end)
            )
              return Lt(Xt, $t);
          }
        },
        ot = Z(p + l, l, P);
      if (ot) return ot;
      var vt = l > 0 ? P.end : b(P.begin, -1);
      return vt != null &&
        !(l > 0 && vt == i.text.length) &&
        ((ot = Z(l > 0 ? 0 : u.length - 1, l, S(vt))), ot)
        ? ot
        : null;
    }
    var Xs = {
      selectAll: zp,
      singleSelection: function (n) {
        return n.setSelection(n.getCursor("anchor"), n.getCursor("head"), V);
      },
      killLine: function (n) {
        return qo(n, function (i) {
          if (i.empty()) {
            var a = Pt(n.doc, i.head.line).text.length;
            return i.head.ch == a && i.head.line < n.lastLine()
              ? { from: i.head, to: X(i.head.line + 1, 0) }
              : { from: i.head, to: X(i.head.line, a) };
          } else return { from: i.from(), to: i.to() };
        });
      },
      deleteLine: function (n) {
        return qo(n, function (i) {
          return {
            from: X(i.from().line, 0),
            to: Wt(n.doc, X(i.to().line + 1, 0)),
          };
        });
      },
      delLineLeft: function (n) {
        return qo(n, function (i) {
          return { from: X(i.from().line, 0), to: i.from() };
        });
      },
      delWrappedLineLeft: function (n) {
        return qo(n, function (i) {
          var a = n.charCoords(i.head, "div").top + 5,
            l = n.coordsChar({ left: 0, top: a }, "div");
          return { from: l, to: i.from() };
        });
      },
      delWrappedLineRight: function (n) {
        return qo(n, function (i) {
          var a = n.charCoords(i.head, "div").top + 5,
            l = n.coordsChar(
              { left: n.display.lineDiv.offsetWidth + 100, top: a },
              "div",
            );
          return { from: i.from(), to: l };
        });
      },
      undo: function (n) {
        return n.undo();
      },
      redo: function (n) {
        return n.redo();
      },
      undoSelection: function (n) {
        return n.undoSelection();
      },
      redoSelection: function (n) {
        return n.redoSelection();
      },
      goDocStart: function (n) {
        return n.extendSelection(X(n.firstLine(), 0));
      },
      goDocEnd: function (n) {
        return n.extendSelection(X(n.lastLine()));
      },
      goLineStart: function (n) {
        return n.extendSelectionsBy(
          function (i) {
            return tg(n, i.head.line);
          },
          { origin: "+move", bias: 1 },
        );
      },
      goLineStartSmart: function (n) {
        return n.extendSelectionsBy(
          function (i) {
            return eg(n, i.head);
          },
          { origin: "+move", bias: 1 },
        );
      },
      goLineEnd: function (n) {
        return n.extendSelectionsBy(
          function (i) {
            return U1(n, i.head.line);
          },
          { origin: "+move", bias: -1 },
        );
      },
      goLineRight: function (n) {
        return n.extendSelectionsBy(function (i) {
          var a = n.cursorCoords(i.head, "div").top + 5;
          return n.coordsChar(
            { left: n.display.lineDiv.offsetWidth + 100, top: a },
            "div",
          );
        }, lt);
      },
      goLineLeft: function (n) {
        return n.extendSelectionsBy(function (i) {
          var a = n.cursorCoords(i.head, "div").top + 5;
          return n.coordsChar({ left: 0, top: a }, "div");
        }, lt);
      },
      goLineLeftSmart: function (n) {
        return n.extendSelectionsBy(function (i) {
          var a = n.cursorCoords(i.head, "div").top + 5,
            l = n.coordsChar({ left: 0, top: a }, "div");
          return l.ch < n.getLine(l.line).search(/\S/) ? eg(n, i.head) : l;
        }, lt);
      },
      goLineUp: function (n) {
        return n.moveV(-1, "line");
      },
      goLineDown: function (n) {
        return n.moveV(1, "line");
      },
      goPageUp: function (n) {
        return n.moveV(-1, "page");
      },
      goPageDown: function (n) {
        return n.moveV(1, "page");
      },
      goCharLeft: function (n) {
        return n.moveH(-1, "char");
      },
      goCharRight: function (n) {
        return n.moveH(1, "char");
      },
      goColumnLeft: function (n) {
        return n.moveH(-1, "column");
      },
      goColumnRight: function (n) {
        return n.moveH(1, "column");
      },
      goWordLeft: function (n) {
        return n.moveH(-1, "word");
      },
      goGroupRight: function (n) {
        return n.moveH(1, "group");
      },
      goGroupLeft: function (n) {
        return n.moveH(-1, "group");
      },
      goWordRight: function (n) {
        return n.moveH(1, "word");
      },
      delCharBefore: function (n) {
        return n.deleteH(-1, "codepoint");
      },
      delCharAfter: function (n) {
        return n.deleteH(1, "char");
      },
      delWordBefore: function (n) {
        return n.deleteH(-1, "word");
      },
      delWordAfter: function (n) {
        return n.deleteH(1, "word");
      },
      delGroupBefore: function (n) {
        return n.deleteH(-1, "group");
      },
      delGroupAfter: function (n) {
        return n.deleteH(1, "group");
      },
      indentAuto: function (n) {
        return n.indentSelection("smart");
      },
      indentMore: function (n) {
        return n.indentSelection("add");
      },
      indentLess: function (n) {
        return n.indentSelection("subtract");
      },
      insertTab: function (n) {
        return n.replaceSelection("	");
      },
      insertSoftTab: function (n) {
        for (
          var i = [], a = n.listSelections(), l = n.options.tabSize, u = 0;
          u < a.length;
          u++
        ) {
          var p = a[u].from(),
            m = at(n.getLine(p.line), p.ch, l);
          i.push(mt(l - (m % l)));
        }
        n.replaceSelections(i);
      },
      defaultTab: function (n) {
        n.somethingSelected()
          ? n.indentSelection("add")
          : n.execCommand("insertTab");
      },
      transposeChars: function (n) {
        return Sn(n, function () {
          for (var i = n.listSelections(), a = [], l = 0; l < i.length; l++)
            if (i[l].empty()) {
              var u = i[l].head,
                p = Pt(n.doc, u.line).text;
              if (p) {
                if (
                  (u.ch == p.length && (u = new X(u.line, u.ch - 1)), u.ch > 0)
                )
                  (u = new X(u.line, u.ch + 1)),
                    n.replaceRange(
                      p.charAt(u.ch - 1) + p.charAt(u.ch - 2),
                      X(u.line, u.ch - 2),
                      u,
                      "+transpose",
                    );
                else if (u.line > n.doc.first) {
                  var m = Pt(n.doc, u.line - 1).text;
                  m &&
                    ((u = new X(u.line, 1)),
                    n.replaceRange(
                      p.charAt(0) +
                        n.doc.lineSeparator() +
                        m.charAt(m.length - 1),
                      X(u.line - 1, m.length - 1),
                      u,
                      "+transpose",
                    ));
                }
              }
              a.push(new ue(u, u));
            }
          n.setSelections(a);
        });
      },
      newlineAndIndent: function (n) {
        return Sn(n, function () {
          for (var i = n.listSelections(), a = i.length - 1; a >= 0; a--)
            n.replaceRange(
              n.doc.lineSeparator(),
              i[a].anchor,
              i[a].head,
              "+input",
            );
          i = n.listSelections();
          for (var l = 0; l < i.length; l++)
            n.indentLine(i[l].from().line, null, !0);
          $o(n);
        });
      },
      openLine: function (n) {
        return n.replaceSelection(
          `
`,
          "start",
        );
      },
      toggleOverwrite: function (n) {
        return n.toggleOverwrite();
      },
    };
    function tg(n, i) {
      var a = Pt(n.doc, i),
        l = Qn(a);
      return l != a && (i = C(l)), Gu(!0, n, l, i, 1);
    }
    function U1(n, i) {
      var a = Pt(n.doc, i),
        l = Ew(a);
      return l != a && (i = C(l)), Gu(!0, n, a, i, -1);
    }
    function eg(n, i) {
      var a = tg(n, i.line),
        l = Pt(n.doc, a.line),
        u = Yt(l, n.doc.direction);
      if (!u || u[0].level == 0) {
        var p = Math.max(a.ch, l.text.search(/\S/)),
          m = i.line == a.line && i.ch <= p && i.ch;
        return X(a.line, m ? 0 : p, a.sticky);
      }
      return a;
    }
    function Ca(n, i, a) {
      if (typeof i == "string" && ((i = Xs[i]), !i)) return !1;
      n.display.input.ensurePolled();
      var l = n.display.shift,
        u = !1;
      try {
        n.isReadOnly() && (n.state.suppressEdits = !0),
          a && (n.display.shift = !1),
          (u = i(n) != F);
      } finally {
        (n.display.shift = l), (n.state.suppressEdits = !1);
      }
      return u;
    }
    function j1(n, i, a) {
      for (var l = 0; l < n.state.keyMaps.length; l++) {
        var u = Ho(i, n.state.keyMaps[l], a, n);
        if (u) return u;
      }
      return (
        (n.options.extraKeys && Ho(i, n.options.extraKeys, a, n)) ||
        Ho(i, n.options.keyMap, a, n)
      );
    }
    var G1 = new Mt();
    function Ys(n, i, a, l) {
      var u = n.state.keySeq;
      if (u) {
        if (Zp(i)) return "handled";
        if (
          (/\'$/.test(i)
            ? (n.state.keySeq = null)
            : G1.set(50, function () {
                n.state.keySeq == u &&
                  ((n.state.keySeq = null), n.display.input.reset());
              }),
          ng(n, u + " " + i, a, l))
        )
          return !0;
      }
      return ng(n, i, a, l);
    }
    function ng(n, i, a, l) {
      var u = j1(n, i, l);
      return (
        u == "multi" && (n.state.keySeq = i),
        u == "handled" && qe(n, "keyHandled", n, i, a),
        (u == "handled" || u == "multi") && (Xe(a), Lu(n)),
        !!u
      );
    }
    function rg(n, i) {
      var a = Jp(i, !0);
      return a
        ? i.shiftKey && !n.state.keySeq
          ? Ys(n, "Shift-" + a, i, function (l) {
              return Ca(n, l, !0);
            }) ||
            Ys(n, a, i, function (l) {
              if (typeof l == "string" ? /^go[A-Z]/.test(l) : l.motion)
                return Ca(n, l);
            })
          : Ys(n, a, i, function (l) {
              return Ca(n, l);
            })
        : !1;
    }
    function V1(n, i, a) {
      return Ys(n, "'" + a + "'", i, function (l) {
        return Ca(n, l, !0);
      });
    }
    var Vu = null;
    function ig(n) {
      var i = this;
      if (
        !(n.target && n.target != i.display.input.getField()) &&
        ((i.curOp.focus = yt(Qt(i))), !Ce(i, n))
      ) {
        d && g < 11 && n.keyCode == 27 && (n.returnValue = !1);
        var a = n.keyCode;
        i.display.shift = a == 16 || n.shiftKey;
        var l = rg(i, n);
        N &&
          ((Vu = l ? a : null),
          !l &&
            a == 88 &&
            !Jl &&
            (H ? n.metaKey : n.ctrlKey) &&
            i.replaceSelection("", null, "cut")),
          s &&
            !H &&
            !l &&
            a == 46 &&
            n.shiftKey &&
            !n.ctrlKey &&
            document.execCommand &&
            document.execCommand("cut"),
          a == 18 &&
            !/\bCodeMirror-crosshair\b/.test(i.display.lineDiv.className) &&
            K1(i);
      }
    }
    function K1(n) {
      var i = n.display.lineDiv;
      At(i, "CodeMirror-crosshair");
      function a(l) {
        (l.keyCode == 18 || !l.altKey) &&
          (ht(i, "CodeMirror-crosshair"),
          Ke(document, "keyup", a),
          Ke(document, "mouseover", a));
      }
      Rt(document, "keyup", a), Rt(document, "mouseover", a);
    }
    function og(n) {
      n.keyCode == 16 && (this.doc.sel.shift = !1), Ce(this, n);
    }
    function sg(n) {
      var i = this;
      if (
        !(n.target && n.target != i.display.input.getField()) &&
        !(
          Rr(i.display, n) ||
          Ce(i, n) ||
          (n.ctrlKey && !n.altKey) ||
          (H && n.metaKey)
        )
      ) {
        var a = n.keyCode,
          l = n.charCode;
        if (N && a == Vu) {
          (Vu = null), Xe(n);
          return;
        }
        if (!(N && (!n.which || n.which < 10) && rg(i, n))) {
          var u = String.fromCharCode(l ?? a);
          u != "\b" && (V1(i, n, u) || i.display.input.onKeyPress(n));
        }
      }
    }
    var X1 = 400,
      Ku = function (n, i, a) {
        (this.time = n), (this.pos = i), (this.button = a);
      };
    Ku.prototype.compare = function (n, i, a) {
      return this.time + X1 > n && _t(i, this.pos) == 0 && a == this.button;
    };
    var Zs, Qs;
    function Y1(n, i) {
      var a = +new Date();
      return Qs && Qs.compare(a, n, i)
        ? ((Zs = Qs = null), "triple")
        : Zs && Zs.compare(a, n, i)
          ? ((Qs = new Ku(a, n, i)), (Zs = null), "double")
          : ((Zs = new Ku(a, n, i)), (Qs = null), "single");
    }
    function lg(n) {
      var i = this,
        a = i.display;
      if (!(Ce(i, n) || (a.activeTouch && a.input.supportsTouch()))) {
        if ((a.input.ensurePolled(), (a.shift = n.shiftKey), Rr(a, n))) {
          v ||
            ((a.scroller.draggable = !1),
            setTimeout(function () {
              return (a.scroller.draggable = !0);
            }, 100));
          return;
        }
        if (!Xu(i, n)) {
          var l = Ii(i, n),
            u = Kn(n),
            p = l ? Y1(l, u) : "single";
          Tt(i).focus(),
            u == 1 && i.state.selectingText && i.state.selectingText(n),
            !(l && Z1(i, u, l, p, n)) &&
              (u == 1
                ? l
                  ? J1(i, l, p, n)
                  : Ss(n) == a.scroller && Xe(n)
                : u == 2
                  ? (l && ba(i.doc, l),
                    setTimeout(function () {
                      return a.input.focus();
                    }, 20))
                  : u == 3 && (rt ? i.display.input.onContextMenu(n) : Au(i)));
        }
      }
    }
    function Z1(n, i, a, l, u) {
      var p = "Click";
      return (
        l == "double"
          ? (p = "Double" + p)
          : l == "triple" && (p = "Triple" + p),
        (p = (i == 1 ? "Left" : i == 2 ? "Middle" : "Right") + p),
        Ys(n, Qp(p, u), u, function (m) {
          if ((typeof m == "string" && (m = Xs[m]), !m)) return !1;
          var b = !1;
          try {
            n.isReadOnly() && (n.state.suppressEdits = !0), (b = m(n, a) != F);
          } finally {
            n.state.suppressEdits = !1;
          }
          return b;
        })
      );
    }
    function Q1(n, i, a) {
      var l = n.getOption("configureMouse"),
        u = l ? l(n, i, a) : {};
      if (u.unit == null) {
        var p = K ? a.shiftKey && a.metaKey : a.altKey;
        u.unit = p
          ? "rectangle"
          : i == "single"
            ? "char"
            : i == "double"
              ? "word"
              : "line";
      }
      return (
        (u.extend == null || n.doc.extend) &&
          (u.extend = n.doc.extend || a.shiftKey),
        u.addNew == null && (u.addNew = H ? a.metaKey : a.ctrlKey),
        u.moveOnDrag == null && (u.moveOnDrag = !(H ? a.altKey : a.ctrlKey)),
        u
      );
    }
    function J1(n, i, a, l) {
      d ? setTimeout(j(ap, n), 0) : (n.curOp.focus = yt(Qt(n)));
      var u = Q1(n, a, l),
        p = n.doc.sel,
        m;
      n.options.dragDrop &&
      lu &&
      !n.isReadOnly() &&
      a == "single" &&
      (m = p.contains(i)) > -1 &&
      (_t((m = p.ranges[m]).from(), i) < 0 || i.xRel > 0) &&
      (_t(m.to(), i) > 0 || i.xRel < 0)
        ? tx(n, l, i, u)
        : ex(n, l, i, u);
    }
    function tx(n, i, a, l) {
      var u = n.display,
        p = !1,
        m = Be(n, function (S) {
          v && (u.scroller.draggable = !1),
            (n.state.draggingText = !1),
            n.state.delayingBlurEvent &&
              (n.hasFocus() ? (n.state.delayingBlurEvent = !1) : Au(n)),
            Ke(u.wrapper.ownerDocument, "mouseup", m),
            Ke(u.wrapper.ownerDocument, "mousemove", b),
            Ke(u.scroller, "dragstart", x),
            Ke(u.scroller, "drop", m),
            p ||
              (Xe(S),
              l.addNew || ba(n.doc, a, null, null, l.extend),
              (v && !L) || (d && g == 9)
                ? setTimeout(function () {
                    u.wrapper.ownerDocument.body.focus({ preventScroll: !0 }),
                      u.input.focus();
                  }, 20)
                : u.input.focus());
        }),
        b = function (S) {
          p =
            p ||
            Math.abs(i.clientX - S.clientX) + Math.abs(i.clientY - S.clientY) >=
              10;
        },
        x = function () {
          return (p = !0);
        };
      v && (u.scroller.draggable = !0),
        (n.state.draggingText = m),
        (m.copy = !l.moveOnDrag),
        Rt(u.wrapper.ownerDocument, "mouseup", m),
        Rt(u.wrapper.ownerDocument, "mousemove", b),
        Rt(u.scroller, "dragstart", x),
        Rt(u.scroller, "drop", m),
        (n.state.delayingBlurEvent = !0),
        setTimeout(function () {
          return u.input.focus();
        }, 20),
        u.scroller.dragDrop && u.scroller.dragDrop();
    }
    function ag(n, i, a) {
      if (a == "char") return new ue(i, i);
      if (a == "word") return n.findWordAt(i);
      if (a == "line") return new ue(X(i.line, 0), Wt(n.doc, X(i.line + 1, 0)));
      var l = a(n, i);
      return new ue(l.from, l.to);
    }
    function ex(n, i, a, l) {
      d && Au(n);
      var u = n.display,
        p = n.doc;
      Xe(i);
      var m,
        b,
        x = p.sel,
        S = x.ranges;
      if (
        (l.addNew && !l.extend
          ? ((b = p.sel.contains(a)), b > -1 ? (m = S[b]) : (m = new ue(a, a)))
          : ((m = p.sel.primary()), (b = p.sel.primIndex)),
        l.unit == "rectangle")
      )
        l.addNew || (m = new ue(a, a)), (a = Ii(n, i, !0, !0)), (b = -1);
      else {
        var P = ag(n, a, l.unit);
        l.extend ? (m = Bu(m, P.anchor, P.head, l.extend)) : (m = P);
      }
      l.addNew
        ? b == -1
          ? ((b = S.length),
            Ye(p, tr(n, S.concat([m]), b), { scroll: !1, origin: "*mouse" }))
          : S.length > 1 && S[b].empty() && l.unit == "char" && !l.extend
            ? (Ye(p, tr(n, S.slice(0, b).concat(S.slice(b + 1)), 0), {
                scroll: !1,
                origin: "*mouse",
              }),
              (x = p.sel))
            : Wu(p, b, m, J)
        : ((b = 0), Ye(p, new On([m], 0), J), (x = p.sel));
      var D = a;
      function W(wt) {
        if (_t(D, wt) != 0)
          if (((D = wt), l.unit == "rectangle")) {
            for (
              var Lt = [],
                zt = n.options.tabSize,
                $t = at(Pt(p, a.line).text, a.ch, zt),
                Xt = at(Pt(p, wt.line).text, wt.ch, zt),
                ve = Math.min($t, Xt),
                Ue = Math.max($t, Xt),
                _e = Math.min(a.line, wt.line),
                kn = Math.min(n.lastLine(), Math.max(a.line, wt.line));
              _e <= kn;
              _e++
            ) {
              var cn = Pt(p, _e).text,
                Ne = ft(cn, ve, zt);
              ve == Ue
                ? Lt.push(new ue(X(_e, Ne), X(_e, Ne)))
                : cn.length > Ne &&
                  Lt.push(new ue(X(_e, Ne), X(_e, ft(cn, Ue, zt))));
            }
            Lt.length || Lt.push(new ue(a, a)),
              Ye(p, tr(n, x.ranges.slice(0, b).concat(Lt), b), {
                origin: "*mouse",
                scroll: !1,
              }),
              n.scrollIntoView(wt);
          } else {
            var un = m,
              Ge = ag(n, wt, l.unit),
              ze = un.anchor,
              Pe;
            _t(Ge.anchor, ze) > 0
              ? ((Pe = Ge.head), (ze = To(un.from(), Ge.anchor)))
              : ((Pe = Ge.anchor), (ze = sn(un.to(), Ge.head)));
            var Ee = x.ranges.slice(0);
            (Ee[b] = nx(n, new ue(Wt(p, ze), Pe))), Ye(p, tr(n, Ee, b), J);
          }
      }
      var q = u.wrapper.getBoundingClientRect(),
        Z = 0;
      function ot(wt) {
        var Lt = ++Z,
          zt = Ii(n, wt, !0, l.unit == "rectangle");
        if (zt)
          if (_t(zt, D) != 0) {
            (n.curOp.focus = yt(Qt(n))), W(zt);
            var $t = da(u, p);
            (zt.line >= $t.to || zt.line < $t.from) &&
              setTimeout(
                Be(n, function () {
                  Z == Lt && ot(wt);
                }),
                150,
              );
          } else {
            var Xt = wt.clientY < q.top ? -20 : wt.clientY > q.bottom ? 20 : 0;
            Xt &&
              setTimeout(
                Be(n, function () {
                  Z == Lt && ((u.scroller.scrollTop += Xt), ot(wt));
                }),
                50,
              );
          }
      }
      function vt(wt) {
        (n.state.selectingText = !1),
          (Z = 1 / 0),
          wt && (Xe(wt), u.input.focus()),
          Ke(u.wrapper.ownerDocument, "mousemove", bt),
          Ke(u.wrapper.ownerDocument, "mouseup", Ct),
          (p.history.lastSelOrigin = null);
      }
      var bt = Be(n, function (wt) {
          wt.buttons === 0 || !Kn(wt) ? vt(wt) : ot(wt);
        }),
        Ct = Be(n, vt);
      (n.state.selectingText = Ct),
        Rt(u.wrapper.ownerDocument, "mousemove", bt),
        Rt(u.wrapper.ownerDocument, "mouseup", Ct);
    }
    function nx(n, i) {
      var a = i.anchor,
        l = i.head,
        u = Pt(n.doc, a.line);
      if (_t(a, l) == 0 && a.sticky == l.sticky) return i;
      var p = Yt(u);
      if (!p) return i;
      var m = Ae(p, a.ch, a.sticky),
        b = p[m];
      if (b.from != a.ch && b.to != a.ch) return i;
      var x = m + ((b.from == a.ch) == (b.level != 1) ? 0 : 1);
      if (x == 0 || x == p.length) return i;
      var S;
      if (l.line != a.line)
        S = (l.line - a.line) * (n.doc.direction == "ltr" ? 1 : -1) > 0;
      else {
        var P = Ae(p, l.ch, l.sticky),
          D = P - m || (l.ch - a.ch) * (b.level == 1 ? -1 : 1);
        P == x - 1 || P == x ? (S = D < 0) : (S = D > 0);
      }
      var W = p[x + (S ? -1 : 0)],
        q = S == (W.level == 1),
        Z = q ? W.from : W.to,
        ot = q ? "after" : "before";
      return a.ch == Z && a.sticky == ot ? i : new ue(new X(a.line, Z, ot), l);
    }
    function cg(n, i, a, l) {
      var u, p;
      if (i.touches) (u = i.touches[0].clientX), (p = i.touches[0].clientY);
      else
        try {
          (u = i.clientX), (p = i.clientY);
        } catch {
          return !1;
        }
      if (u >= Math.floor(n.display.gutters.getBoundingClientRect().right))
        return !1;
      l && Xe(i);
      var m = n.display,
        b = m.lineDiv.getBoundingClientRect();
      if (p > b.bottom || !_n(n, a)) return on(i);
      p -= b.top - m.viewOffset;
      for (var x = 0; x < n.display.gutterSpecs.length; ++x) {
        var S = m.gutters.childNodes[x];
        if (S && S.getBoundingClientRect().right >= u) {
          var P = O(n.doc, p),
            D = n.display.gutterSpecs[x];
          return ke(n, a, n, P, D.className, i), on(i);
        }
      }
    }
    function Xu(n, i) {
      return cg(n, i, "gutterClick", !0);
    }
    function ug(n, i) {
      Rr(n.display, i) ||
        rx(n, i) ||
        Ce(n, i, "contextmenu") ||
        rt ||
        n.display.input.onContextMenu(i);
    }
    function rx(n, i) {
      return _n(n, "gutterContextMenu")
        ? cg(n, i, "gutterContextMenu", !1)
        : !1;
    }
    function fg(n) {
      (n.display.wrapper.className =
        n.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") +
        n.options.theme.replace(/(^|\s)\s*/g, " cm-s-")),
        Ps(n);
    }
    var Bo = {
        toString: function () {
          return "CodeMirror.Init";
        },
      },
      hg = {},
      Ta = {};
    function ix(n) {
      var i = n.optionHandlers;
      function a(l, u, p, m) {
        (n.defaults[l] = u),
          p &&
            (i[l] = m
              ? function (b, x, S) {
                  S != Bo && p(b, x, S);
                }
              : p);
      }
      (n.defineOption = a),
        (n.Init = Bo),
        a(
          "value",
          "",
          function (l, u) {
            return l.setValue(u);
          },
          !0,
        ),
        a(
          "mode",
          null,
          function (l, u) {
            (l.doc.modeOption = u), Iu(l);
          },
          !0,
        ),
        a("indentUnit", 2, Iu, !0),
        a("indentWithTabs", !1),
        a("smartIndent", !0),
        a(
          "tabSize",
          4,
          function (l) {
            Hs(l), Ps(l), ln(l);
          },
          !0,
        ),
        a("lineSeparator", null, function (l, u) {
          if (((l.doc.lineSep = u), !!u)) {
            var p = [],
              m = l.doc.first;
            l.doc.iter(function (x) {
              for (var S = 0; ; ) {
                var P = x.text.indexOf(u, S);
                if (P == -1) break;
                (S = P + u.length), p.push(X(m, P));
              }
              m++;
            });
            for (var b = p.length - 1; b >= 0; b--)
              Fo(l.doc, u, p[b], X(p[b].line, p[b].ch + u.length));
          }
        }),
        a(
          "specialChars",
          /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]/g,
          function (l, u, p) {
            (l.state.specialChars = new RegExp(
              u.source + (u.test("	") ? "" : "|	"),
              "g",
            )),
              p != Bo && l.refresh();
          },
        ),
        a(
          "specialCharPlaceholder",
          $w,
          function (l) {
            return l.refresh();
          },
          !0,
        ),
        a("electricChars", !0),
        a(
          "inputStyle",
          E ? "contenteditable" : "textarea",
          function () {
            throw new Error(
              "inputStyle can not (yet) be changed in a running editor",
            );
          },
          !0,
        ),
        a(
          "spellcheck",
          !1,
          function (l, u) {
            return (l.getInputField().spellcheck = u);
          },
          !0,
        ),
        a(
          "autocorrect",
          !1,
          function (l, u) {
            return (l.getInputField().autocorrect = u);
          },
          !0,
        ),
        a(
          "autocapitalize",
          !1,
          function (l, u) {
            return (l.getInputField().autocapitalize = u);
          },
          !0,
        ),
        a("rtlMoveVisually", !ct),
        a("wholeLineUpdateBefore", !0),
        a(
          "theme",
          "default",
          function (l) {
            fg(l), Is(l);
          },
          !0,
        ),
        a("keyMap", "default", function (l, u, p) {
          var m = ka(u),
            b = p != Bo && ka(p);
          b && b.detach && b.detach(l, m), m.attach && m.attach(l, b || null);
        }),
        a("extraKeys", null),
        a("configureMouse", null),
        a("lineWrapping", !1, sx, !0),
        a(
          "gutters",
          [],
          function (l, u) {
            (l.display.gutterSpecs = zu(u, l.options.lineNumbers)), Is(l);
          },
          !0,
        ),
        a(
          "fixedGutter",
          !0,
          function (l, u) {
            (l.display.gutters.style.left = u ? Cu(l.display) + "px" : "0"),
              l.refresh();
          },
          !0,
        ),
        a(
          "coverGutterNextToScrollbar",
          !1,
          function (l) {
            return Oo(l);
          },
          !0,
        ),
        a(
          "scrollbarStyle",
          "native",
          function (l) {
            pp(l),
              Oo(l),
              l.display.scrollbars.setScrollTop(l.doc.scrollTop),
              l.display.scrollbars.setScrollLeft(l.doc.scrollLeft);
          },
          !0,
        ),
        a(
          "lineNumbers",
          !1,
          function (l, u) {
            (l.display.gutterSpecs = zu(l.options.gutters, u)), Is(l);
          },
          !0,
        ),
        a("firstLineNumber", 1, Is, !0),
        a(
          "lineNumberFormatter",
          function (l) {
            return l;
          },
          Is,
          !0,
        ),
        a("showCursorWhenSelecting", !1, $s, !0),
        a("resetSelectionOnContextMenu", !0),
        a("lineWiseCopyCut", !0),
        a("pasteLinesPerSelection", !0),
        a("selectionsMayTouch", !1),
        a("readOnly", !1, function (l, u) {
          u == "nocursor" && (Po(l), l.display.input.blur()),
            l.display.input.readOnlyChanged(u);
        }),
        a("screenReaderLabel", null, function (l, u) {
          (u = u === "" ? null : u),
            l.display.input.screenReaderLabelChanged(u);
        }),
        a(
          "disableInput",
          !1,
          function (l, u) {
            u || l.display.input.reset();
          },
          !0,
        ),
        a("dragDrop", !0, ox),
        a("allowDropFileTypes", null),
        a("cursorBlinkRate", 530),
        a("cursorScrollMargin", 0),
        a("cursorHeight", 1, $s, !0),
        a("singleCursorHeightPerLine", !0, $s, !0),
        a("workTime", 100),
        a("workDelay", 100),
        a("flattenSpans", !0, Hs, !0),
        a("addModeClass", !1, Hs, !0),
        a("pollInterval", 100),
        a("undoDepth", 200, function (l, u) {
          return (l.doc.history.undoDepth = u);
        }),
        a("historyEventDelay", 1250),
        a(
          "viewportMargin",
          10,
          function (l) {
            return l.refresh();
          },
          !0,
        ),
        a("maxHighlightLength", 1e4, Hs, !0),
        a("moveInputWithCursor", !0, function (l, u) {
          u || l.display.input.resetPosition();
        }),
        a("tabindex", null, function (l, u) {
          return (l.display.input.getField().tabIndex = u || "");
        }),
        a("autofocus", null),
        a(
          "direction",
          "ltr",
          function (l, u) {
            return l.doc.setDirection(u);
          },
          !0,
        ),
        a("phrases", null);
    }
    function ox(n, i, a) {
      var l = a && a != Bo;
      if (!i != !l) {
        var u = n.display.dragFunctions,
          p = i ? Rt : Ke;
        p(n.display.scroller, "dragstart", u.start),
          p(n.display.scroller, "dragenter", u.enter),
          p(n.display.scroller, "dragover", u.over),
          p(n.display.scroller, "dragleave", u.leave),
          p(n.display.scroller, "drop", u.drop);
      }
    }
    function sx(n) {
      n.options.lineWrapping
        ? (At(n.display.wrapper, "CodeMirror-wrap"),
          (n.display.sizer.style.minWidth = ""),
          (n.display.sizerWidth = null))
        : (ht(n.display.wrapper, "CodeMirror-wrap"), gu(n)),
        Tu(n),
        ln(n),
        Ps(n),
        setTimeout(function () {
          return Oo(n);
        }, 100);
    }
    function be(n, i) {
      var a = this;
      if (!(this instanceof be)) return new be(n, i);
      (this.options = i = i ? it(i) : {}), it(hg, i, !1);
      var l = i.value;
      typeof l == "string"
        ? (l = new an(l, i.mode, null, i.lineSeparator, i.direction))
        : i.mode && (l.modeOption = i.mode),
        (this.doc = l);
      var u = new be.inputStyles[i.inputStyle](this),
        p = (this.display = new b1(n, l, u, i));
      (p.wrapper.CodeMirror = this),
        fg(this),
        i.lineWrapping &&
          (this.display.wrapper.className += " CodeMirror-wrap"),
        pp(this),
        (this.state = {
          keyMaps: [],
          overlays: [],
          modeGen: 0,
          overwrite: !1,
          delayingBlurEvent: !1,
          focused: !1,
          suppressEdits: !1,
          pasteIncoming: -1,
          cutIncoming: -1,
          selectingText: !1,
          draggingText: !1,
          highlight: new Mt(),
          keySeq: null,
          specialChars: null,
        }),
        i.autofocus && !E && p.input.focus(),
        d &&
          g < 11 &&
          setTimeout(function () {
            return a.display.input.reset(!0);
          }, 20),
        lx(this),
        F1(),
        Wi(this),
        (this.curOp.forceUpdate = !0),
        kp(this, l),
        (i.autofocus && !E) || this.hasFocus()
          ? setTimeout(function () {
              a.hasFocus() && !a.state.focused && Mu(a);
            }, 20)
          : Po(this);
      for (var m in Ta) Ta.hasOwnProperty(m) && Ta[m](this, i[m], Bo);
      mp(this), i.finishInit && i.finishInit(this);
      for (var b = 0; b < Yu.length; ++b) Yu[b](this);
      Ui(this),
        v &&
          i.lineWrapping &&
          getComputedStyle(p.lineDiv).textRendering == "optimizelegibility" &&
          (p.lineDiv.style.textRendering = "auto");
    }
    (be.defaults = hg), (be.optionHandlers = Ta);
    function lx(n) {
      var i = n.display;
      Rt(i.scroller, "mousedown", Be(n, lg)),
        d && g < 11
          ? Rt(
              i.scroller,
              "dblclick",
              Be(n, function (x) {
                if (!Ce(n, x)) {
                  var S = Ii(n, x);
                  if (!(!S || Xu(n, x) || Rr(n.display, x))) {
                    Xe(x);
                    var P = n.findWordAt(S);
                    ba(n.doc, P.anchor, P.head);
                  }
                }
              }),
            )
          : Rt(i.scroller, "dblclick", function (x) {
              return Ce(n, x) || Xe(x);
            }),
        Rt(i.scroller, "contextmenu", function (x) {
          return ug(n, x);
        }),
        Rt(i.input.getField(), "contextmenu", function (x) {
          i.scroller.contains(x.target) || ug(n, x);
        });
      var a,
        l = { end: 0 };
      function u() {
        i.activeTouch &&
          ((a = setTimeout(function () {
            return (i.activeTouch = null);
          }, 1e3)),
          (l = i.activeTouch),
          (l.end = +new Date()));
      }
      function p(x) {
        if (x.touches.length != 1) return !1;
        var S = x.touches[0];
        return S.radiusX <= 1 && S.radiusY <= 1;
      }
      function m(x, S) {
        if (S.left == null) return !0;
        var P = S.left - x.left,
          D = S.top - x.top;
        return P * P + D * D > 20 * 20;
      }
      Rt(i.scroller, "touchstart", function (x) {
        if (!Ce(n, x) && !p(x) && !Xu(n, x)) {
          i.input.ensurePolled(), clearTimeout(a);
          var S = +new Date();
          (i.activeTouch = {
            start: S,
            moved: !1,
            prev: S - l.end <= 300 ? l : null,
          }),
            x.touches.length == 1 &&
              ((i.activeTouch.left = x.touches[0].pageX),
              (i.activeTouch.top = x.touches[0].pageY));
        }
      }),
        Rt(i.scroller, "touchmove", function () {
          i.activeTouch && (i.activeTouch.moved = !0);
        }),
        Rt(i.scroller, "touchend", function (x) {
          var S = i.activeTouch;
          if (
            S &&
            !Rr(i, x) &&
            S.left != null &&
            !S.moved &&
            new Date() - S.start < 300
          ) {
            var P = n.coordsChar(i.activeTouch, "page"),
              D;
            !S.prev || m(S, S.prev)
              ? (D = new ue(P, P))
              : !S.prev.prev || m(S, S.prev.prev)
                ? (D = n.findWordAt(P))
                : (D = new ue(X(P.line, 0), Wt(n.doc, X(P.line + 1, 0)))),
              n.setSelection(D.anchor, D.head),
              n.focus(),
              Xe(x);
          }
          u();
        }),
        Rt(i.scroller, "touchcancel", u),
        Rt(i.scroller, "scroll", function () {
          i.scroller.clientHeight &&
            (Ds(n, i.scroller.scrollTop),
            qi(n, i.scroller.scrollLeft, !0),
            ke(n, "scroll", n));
        }),
        Rt(i.scroller, "mousewheel", function (x) {
          return wp(n, x);
        }),
        Rt(i.scroller, "DOMMouseScroll", function (x) {
          return wp(n, x);
        }),
        Rt(i.wrapper, "scroll", function () {
          return (i.wrapper.scrollTop = i.wrapper.scrollLeft = 0);
        }),
        (i.dragFunctions = {
          enter: function (x) {
            Ce(n, x) || Qr(x);
          },
          over: function (x) {
            Ce(n, x) || (z1(n, x), Qr(x));
          },
          start: function (x) {
            return R1(n, x);
          },
          drop: Be(n, D1),
          leave: function (x) {
            Ce(n, x) || Kp(n);
          },
        });
      var b = i.input.getField();
      Rt(b, "keyup", function (x) {
        return og.call(n, x);
      }),
        Rt(b, "keydown", Be(n, ig)),
        Rt(b, "keypress", Be(n, sg)),
        Rt(b, "focus", function (x) {
          return Mu(n, x);
        }),
        Rt(b, "blur", function (x) {
          return Po(n, x);
        });
    }
    var Yu = [];
    be.defineInitHook = function (n) {
      return Yu.push(n);
    };
    function Js(n, i, a, l) {
      var u = n.doc,
        p;
      a == null && (a = "add"),
        a == "smart" && (u.mode.indent ? (p = Es(n, i).state) : (a = "prev"));
      var m = n.options.tabSize,
        b = Pt(u, i),
        x = at(b.text, null, m);
      b.stateAfter && (b.stateAfter = null);
      var S = b.text.match(/^\s*/)[0],
        P;
      if (!l && !/\S/.test(b.text)) (P = 0), (a = "not");
      else if (
        a == "smart" &&
        ((P = u.mode.indent(p, b.text.slice(S.length), b.text)),
        P == F || P > 150)
      ) {
        if (!l) return;
        a = "prev";
      }
      a == "prev"
        ? i > u.first
          ? (P = at(Pt(u, i - 1).text, null, m))
          : (P = 0)
        : a == "add"
          ? (P = x + n.options.indentUnit)
          : a == "subtract"
            ? (P = x - n.options.indentUnit)
            : typeof a == "number" && (P = x + a),
        (P = Math.max(0, P));
      var D = "",
        W = 0;
      if (n.options.indentWithTabs)
        for (var q = Math.floor(P / m); q; --q) (W += m), (D += "	");
      if ((W < P && (D += mt(P - W)), D != S))
        return (
          Fo(u, D, X(i, 0), X(i, S.length), "+input"), (b.stateAfter = null), !0
        );
      for (var Z = 0; Z < u.sel.ranges.length; Z++) {
        var ot = u.sel.ranges[Z];
        if (ot.head.line == i && ot.head.ch < S.length) {
          var vt = X(i, S.length);
          Wu(u, Z, new ue(vt, vt));
          break;
        }
      }
    }
    var er = null;
    function Ea(n) {
      er = n;
    }
    function Zu(n, i, a, l, u) {
      var p = n.doc;
      (n.display.shift = !1), l || (l = p.sel);
      var m = +new Date() - 200,
        b = u == "paste" || n.state.pasteIncoming > m,
        x = qn(i),
        S = null;
      if (b && l.ranges.length > 1)
        if (
          er &&
          er.text.join(`
`) == i
        ) {
          if (l.ranges.length % er.text.length == 0) {
            S = [];
            for (var P = 0; P < er.text.length; P++)
              S.push(p.splitLines(er.text[P]));
          }
        } else
          x.length == l.ranges.length &&
            n.options.pasteLinesPerSelection &&
            (S = pt(x, function (bt) {
              return [bt];
            }));
      for (var D = n.curOp.updateInput, W = l.ranges.length - 1; W >= 0; W--) {
        var q = l.ranges[W],
          Z = q.from(),
          ot = q.to();
        q.empty() &&
          (a && a > 0
            ? (Z = X(Z.line, Z.ch - a))
            : n.state.overwrite && !b
              ? (ot = X(
                  ot.line,
                  Math.min(Pt(p, ot.line).text.length, ot.ch + ut(x).length),
                ))
              : b &&
                er &&
                er.lineWise &&
                er.text.join(`
`) ==
                  x.join(`
`) &&
                (Z = ot = X(Z.line, 0)));
        var vt = {
          from: Z,
          to: ot,
          text: S ? S[W % S.length] : x,
          origin:
            u || (b ? "paste" : n.state.cutIncoming > m ? "cut" : "+input"),
        };
        zo(n.doc, vt), qe(n, "inputRead", n, vt);
      }
      i && !b && pg(n, i),
        $o(n),
        n.curOp.updateInput < 2 && (n.curOp.updateInput = D),
        (n.curOp.typing = !0),
        (n.state.pasteIncoming = n.state.cutIncoming = -1);
    }
    function dg(n, i) {
      var a = n.clipboardData && n.clipboardData.getData("Text");
      if (a)
        return (
          n.preventDefault(),
          !i.isReadOnly() &&
            !i.options.disableInput &&
            i.hasFocus() &&
            Sn(i, function () {
              return Zu(i, a, 0, null, "paste");
            }),
          !0
        );
    }
    function pg(n, i) {
      if (!(!n.options.electricChars || !n.options.smartIndent))
        for (var a = n.doc.sel, l = a.ranges.length - 1; l >= 0; l--) {
          var u = a.ranges[l];
          if (
            !(
              u.head.ch > 100 ||
              (l && a.ranges[l - 1].head.line == u.head.line)
            )
          ) {
            var p = n.getModeAt(u.head),
              m = !1;
            if (p.electricChars) {
              for (var b = 0; b < p.electricChars.length; b++)
                if (i.indexOf(p.electricChars.charAt(b)) > -1) {
                  m = Js(n, u.head.line, "smart");
                  break;
                }
            } else
              p.electricInput &&
                p.electricInput.test(
                  Pt(n.doc, u.head.line).text.slice(0, u.head.ch),
                ) &&
                (m = Js(n, u.head.line, "smart"));
            m && qe(n, "electricInput", n, u.head.line);
          }
        }
    }
    function gg(n) {
      for (var i = [], a = [], l = 0; l < n.doc.sel.ranges.length; l++) {
        var u = n.doc.sel.ranges[l].head.line,
          p = { anchor: X(u, 0), head: X(u + 1, 0) };
        a.push(p), i.push(n.getRange(p.anchor, p.head));
      }
      return { text: i, ranges: a };
    }
    function Qu(n, i, a, l) {
      n.setAttribute("autocorrect", a ? "on" : "off"),
        n.setAttribute("autocapitalize", l ? "on" : "off"),
        n.setAttribute("spellcheck", !!i);
    }
    function vg() {
      var n = k(
          "textarea",
          null,
          null,
          "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; min-height: 1em; outline: none",
        ),
        i = k(
          "div",
          [n],
          null,
          "overflow: hidden; position: relative; width: 3px; height: 0px;",
        );
      return (
        v ? (n.style.width = "1000px") : n.setAttribute("wrap", "off"),
        M && (n.style.border = "1px solid black"),
        i
      );
    }
    function ax(n) {
      var i = n.optionHandlers,
        a = (n.helpers = {});
      (n.prototype = {
        constructor: n,
        focus: function () {
          Tt(this).focus(), this.display.input.focus();
        },
        setOption: function (l, u) {
          var p = this.options,
            m = p[l];
          (p[l] == u && l != "mode") ||
            ((p[l] = u),
            i.hasOwnProperty(l) && Be(this, i[l])(this, u, m),
            ke(this, "optionChange", this, l));
        },
        getOption: function (l) {
          return this.options[l];
        },
        getDoc: function () {
          return this.doc;
        },
        addKeyMap: function (l, u) {
          this.state.keyMaps[u ? "push" : "unshift"](ka(l));
        },
        removeKeyMap: function (l) {
          for (var u = this.state.keyMaps, p = 0; p < u.length; ++p)
            if (u[p] == l || u[p].name == l) return u.splice(p, 1), !0;
        },
        addOverlay: Je(function (l, u) {
          var p = l.token ? l : n.getMode(this.options, l);
          if (p.startState) throw new Error("Overlays may not be stateful.");
          Dt(
            this.state.overlays,
            {
              mode: p,
              modeSpec: l,
              opaque: u && u.opaque,
              priority: (u && u.priority) || 0,
            },
            function (m) {
              return m.priority;
            },
          ),
            this.state.modeGen++,
            ln(this);
        }),
        removeOverlay: Je(function (l) {
          for (var u = this.state.overlays, p = 0; p < u.length; ++p) {
            var m = u[p].modeSpec;
            if (m == l || (typeof l == "string" && m.name == l)) {
              u.splice(p, 1), this.state.modeGen++, ln(this);
              return;
            }
          }
        }),
        indentLine: Je(function (l, u, p) {
          typeof u != "string" &&
            typeof u != "number" &&
            (u == null
              ? (u = this.options.smartIndent ? "smart" : "prev")
              : (u = u ? "add" : "subtract")),
            et(this.doc, l) && Js(this, l, u, p);
        }),
        indentSelection: Je(function (l) {
          for (var u = this.doc.sel.ranges, p = -1, m = 0; m < u.length; m++) {
            var b = u[m];
            if (b.empty())
              b.head.line > p &&
                (Js(this, b.head.line, l, !0),
                (p = b.head.line),
                m == this.doc.sel.primIndex && $o(this));
            else {
              var x = b.from(),
                S = b.to(),
                P = Math.max(p, x.line);
              p = Math.min(this.lastLine(), S.line - (S.ch ? 0 : 1)) + 1;
              for (var D = P; D < p; ++D) Js(this, D, l);
              var W = this.doc.sel.ranges;
              x.ch == 0 &&
                u.length == W.length &&
                W[m].from().ch > 0 &&
                Wu(this.doc, m, new ue(x, W[m].to()), V);
            }
          }
        }),
        getTokenAt: function (l, u) {
          return Td(this, l, u);
        },
        getLineTokens: function (l, u) {
          return Td(this, X(l), u, !0);
        },
        getTokenTypeAt: function (l) {
          l = Wt(this.doc, l);
          var u = Sd(this, Pt(this.doc, l.line)),
            p = 0,
            m = (u.length - 1) / 2,
            b = l.ch,
            x;
          if (b == 0) x = u[2];
          else
            for (;;) {
              var S = (p + m) >> 1;
              if ((S ? u[S * 2 - 1] : 0) >= b) m = S;
              else if (u[S * 2 + 1] < b) p = S + 1;
              else {
                x = u[S * 2 + 2];
                break;
              }
            }
          var P = x ? x.indexOf("overlay ") : -1;
          return P < 0 ? x : P == 0 ? null : x.slice(0, P - 1);
        },
        getModeAt: function (l) {
          var u = this.doc.mode;
          return u.innerMode
            ? n.innerMode(u, this.getTokenAt(l).state).mode
            : u;
        },
        getHelper: function (l, u) {
          return this.getHelpers(l, u)[0];
        },
        getHelpers: function (l, u) {
          var p = [];
          if (!a.hasOwnProperty(u)) return p;
          var m = a[u],
            b = this.getModeAt(l);
          if (typeof b[u] == "string") m[b[u]] && p.push(m[b[u]]);
          else if (b[u])
            for (var x = 0; x < b[u].length; x++) {
              var S = m[b[u][x]];
              S && p.push(S);
            }
          else
            b.helperType && m[b.helperType]
              ? p.push(m[b.helperType])
              : m[b.name] && p.push(m[b.name]);
          for (var P = 0; P < m._global.length; P++) {
            var D = m._global[P];
            D.pred(b, this) && Et(p, D.val) == -1 && p.push(D.val);
          }
          return p;
        },
        getStateAfter: function (l, u) {
          var p = this.doc;
          return (
            (l = wd(p, l ?? p.first + p.size - 1)), Es(this, l + 1, u).state
          );
        },
        cursorCoords: function (l, u) {
          var p,
            m = this.doc.sel.primary();
          return (
            l == null
              ? (p = m.head)
              : typeof l == "object"
                ? (p = Wt(this.doc, l))
                : (p = l ? m.from() : m.to()),
            Jn(this, p, u || "page")
          );
        },
        charCoords: function (l, u) {
          return ca(this, Wt(this.doc, l), u || "page");
        },
        coordsChar: function (l, u) {
          return (l = ep(this, l, u || "page")), _u(this, l.left, l.top);
        },
        lineAtHeight: function (l, u) {
          return (
            (l = ep(this, { top: l, left: 0 }, u || "page").top),
            O(this.doc, l + this.display.viewOffset)
          );
        },
        heightAtLine: function (l, u, p) {
          var m = !1,
            b;
          if (typeof l == "number") {
            var x = this.doc.first + this.doc.size - 1;
            l < this.doc.first
              ? (l = this.doc.first)
              : l > x && ((l = x), (m = !0)),
              (b = Pt(this.doc, l));
          } else b = l;
          return (
            aa(this, b, { top: 0, left: 0 }, u || "page", p || m).top +
            (m ? this.doc.height - Dr(b) : 0)
          );
        },
        defaultTextHeight: function () {
          return Mo(this.display);
        },
        defaultCharWidth: function () {
          return No(this.display);
        },
        getViewport: function () {
          return { from: this.display.viewFrom, to: this.display.viewTo };
        },
        addWidget: function (l, u, p, m, b) {
          var x = this.display;
          l = Jn(this, Wt(this.doc, l));
          var S = l.bottom,
            P = l.left;
          if (
            ((u.style.position = "absolute"),
            u.setAttribute("cm-ignore-events", "true"),
            this.display.input.setUneditable(u),
            x.sizer.appendChild(u),
            m == "over")
          )
            S = l.top;
          else if (m == "above" || m == "near") {
            var D = Math.max(x.wrapper.clientHeight, this.doc.height),
              W = Math.max(x.sizer.clientWidth, x.lineSpace.clientWidth);
            (m == "above" || l.bottom + u.offsetHeight > D) &&
            l.top > u.offsetHeight
              ? (S = l.top - u.offsetHeight)
              : l.bottom + u.offsetHeight <= D && (S = l.bottom),
              P + u.offsetWidth > W && (P = W - u.offsetWidth);
          }
          (u.style.top = S + "px"),
            (u.style.left = u.style.right = ""),
            b == "right"
              ? ((P = x.sizer.clientWidth - u.offsetWidth),
                (u.style.right = "0px"))
              : (b == "left"
                  ? (P = 0)
                  : b == "middle" &&
                    (P = (x.sizer.clientWidth - u.offsetWidth) / 2),
                (u.style.left = P + "px")),
            p &&
              o1(this, {
                left: P,
                top: S,
                right: P + u.offsetWidth,
                bottom: S + u.offsetHeight,
              });
        },
        triggerOnKeyDown: Je(ig),
        triggerOnKeyPress: Je(sg),
        triggerOnKeyUp: og,
        triggerOnMouseDown: Je(lg),
        execCommand: function (l) {
          if (Xs.hasOwnProperty(l)) return Xs[l].call(null, this);
        },
        triggerElectric: Je(function (l) {
          pg(this, l);
        }),
        findPosH: function (l, u, p, m) {
          var b = 1;
          u < 0 && ((b = -1), (u = -u));
          for (
            var x = Wt(this.doc, l), S = 0;
            S < u && ((x = Ju(this.doc, x, b, p, m)), !x.hitSide);
            ++S
          );
          return x;
        },
        moveH: Je(function (l, u) {
          var p = this;
          this.extendSelectionsBy(function (m) {
            return p.display.shift || p.doc.extend || m.empty()
              ? Ju(p.doc, m.head, l, u, p.options.rtlMoveVisually)
              : l < 0
                ? m.from()
                : m.to();
          }, lt);
        }),
        deleteH: Je(function (l, u) {
          var p = this.doc.sel,
            m = this.doc;
          p.somethingSelected()
            ? m.replaceSelection("", null, "+delete")
            : qo(this, function (b) {
                var x = Ju(m, b.head, l, u, !1);
                return l < 0
                  ? { from: x, to: b.head }
                  : { from: b.head, to: x };
              });
        }),
        findPosV: function (l, u, p, m) {
          var b = 1,
            x = m;
          u < 0 && ((b = -1), (u = -u));
          for (var S = Wt(this.doc, l), P = 0; P < u; ++P) {
            var D = Jn(this, S, "div");
            if (
              (x == null ? (x = D.left) : (D.left = x),
              (S = mg(this, D, b, p)),
              S.hitSide)
            )
              break;
          }
          return S;
        },
        moveV: Je(function (l, u) {
          var p = this,
            m = this.doc,
            b = [],
            x = !this.display.shift && !m.extend && m.sel.somethingSelected();
          if (
            (m.extendSelectionsBy(function (P) {
              if (x) return l < 0 ? P.from() : P.to();
              var D = Jn(p, P.head, "div");
              P.goalColumn != null && (D.left = P.goalColumn), b.push(D.left);
              var W = mg(p, D, l, u);
              return (
                u == "page" &&
                  P == m.sel.primary() &&
                  Pu(p, ca(p, W, "div").top - D.top),
                W
              );
            }, lt),
            b.length)
          )
            for (var S = 0; S < m.sel.ranges.length; S++)
              m.sel.ranges[S].goalColumn = b[S];
        }),
        findWordAt: function (l) {
          var u = this.doc,
            p = Pt(u, l.line).text,
            m = l.ch,
            b = l.ch;
          if (p) {
            var x = this.getHelper(l, "wordChars");
            (l.sticky == "before" || b == p.length) && m ? --m : ++b;
            for (
              var S = p.charAt(m),
                P = re(S, x)
                  ? function (D) {
                      return re(D, x);
                    }
                  : /\s/.test(S)
                    ? function (D) {
                        return /\s/.test(D);
                      }
                    : function (D) {
                        return !/\s/.test(D) && !re(D);
                      };
              m > 0 && P(p.charAt(m - 1));
            )
              --m;
            for (; b < p.length && P(p.charAt(b)); ) ++b;
          }
          return new ue(X(l.line, m), X(l.line, b));
        },
        toggleOverwrite: function (l) {
          (l != null && l == this.state.overwrite) ||
            ((this.state.overwrite = !this.state.overwrite)
              ? At(this.display.cursorDiv, "CodeMirror-overwrite")
              : ht(this.display.cursorDiv, "CodeMirror-overwrite"),
            ke(this, "overwriteToggle", this, this.state.overwrite));
        },
        hasFocus: function () {
          return this.display.input.getField() == yt(Qt(this));
        },
        isReadOnly: function () {
          return !!(this.options.readOnly || this.doc.cantEdit);
        },
        scrollTo: Je(function (l, u) {
          Os(this, l, u);
        }),
        getScrollInfo: function () {
          var l = this.display.scroller;
          return {
            left: l.scrollLeft,
            top: l.scrollTop,
            height: l.scrollHeight - gr(this) - this.display.barHeight,
            width: l.scrollWidth - gr(this) - this.display.barWidth,
            clientHeight: yu(this),
            clientWidth: zi(this),
          };
        },
        scrollIntoView: Je(function (l, u) {
          l == null
            ? ((l = { from: this.doc.sel.primary().head, to: null }),
              u == null && (u = this.options.cursorScrollMargin))
            : typeof l == "number"
              ? (l = { from: X(l, 0), to: null })
              : l.from == null && (l = { from: l, to: null }),
            l.to || (l.to = l.from),
            (l.margin = u || 0),
            l.from.line != null
              ? s1(this, l)
              : up(this, l.from, l.to, l.margin);
        }),
        setSize: Je(function (l, u) {
          var p = this,
            m = function (x) {
              return typeof x == "number" || /^\d+$/.test(String(x))
                ? x + "px"
                : x;
            };
          l != null && (this.display.wrapper.style.width = m(l)),
            u != null && (this.display.wrapper.style.height = m(u)),
            this.options.lineWrapping && Qd(this);
          var b = this.display.viewFrom;
          this.doc.iter(b, this.display.viewTo, function (x) {
            if (x.widgets) {
              for (var S = 0; S < x.widgets.length; S++)
                if (x.widgets[S].noHScroll) {
                  ri(p, b, "widget");
                  break;
                }
            }
            ++b;
          }),
            (this.curOp.forceUpdate = !0),
            ke(this, "refresh", this);
        }),
        operation: function (l) {
          return Sn(this, l);
        },
        startOperation: function () {
          return Wi(this);
        },
        endOperation: function () {
          return Ui(this);
        },
        refresh: Je(function () {
          var l = this.display.cachedTextHeight;
          ln(this),
            (this.curOp.forceUpdate = !0),
            Ps(this),
            Os(this, this.doc.scrollLeft, this.doc.scrollTop),
            Du(this.display),
            (l == null ||
              Math.abs(l - Mo(this.display)) > 0.5 ||
              this.options.lineWrapping) &&
              Tu(this),
            ke(this, "refresh", this);
        }),
        swapDoc: Je(function (l) {
          var u = this.doc;
          return (
            (u.cm = null),
            this.state.selectingText && this.state.selectingText(),
            kp(this, l),
            Ps(this),
            this.display.input.reset(),
            Os(this, l.scrollLeft, l.scrollTop),
            (this.curOp.forceScroll = !0),
            qe(this, "swapDoc", this, u),
            u
          );
        }),
        phrase: function (l) {
          var u = this.options.phrases;
          return u && Object.prototype.hasOwnProperty.call(u, l) ? u[l] : l;
        },
        getInputField: function () {
          return this.display.input.getField();
        },
        getWrapperElement: function () {
          return this.display.wrapper;
        },
        getScrollerElement: function () {
          return this.display.scroller;
        },
        getGutterElement: function () {
          return this.display.gutters;
        },
      }),
        Vn(n),
        (n.registerHelper = function (l, u, p) {
          a.hasOwnProperty(l) || (a[l] = n[l] = { _global: [] }), (a[l][u] = p);
        }),
        (n.registerGlobalHelper = function (l, u, p, m) {
          n.registerHelper(l, u, m), a[l]._global.push({ pred: p, val: m });
        });
    }
    function Ju(n, i, a, l, u) {
      var p = i,
        m = a,
        b = Pt(n, i.line),
        x = u && n.direction == "rtl" ? -a : a;
      function S() {
        var Ct = i.line + x;
        return Ct < n.first || Ct >= n.first + n.size
          ? !1
          : ((i = new X(Ct, i.ch, i.sticky)), (b = Pt(n, Ct)));
      }
      function P(Ct) {
        var wt;
        if (l == "codepoint") {
          var Lt = b.text.charCodeAt(i.ch + (a > 0 ? 0 : -1));
          if (isNaN(Lt)) wt = null;
          else {
            var zt =
              a > 0 ? Lt >= 55296 && Lt < 56320 : Lt >= 56320 && Lt < 57343;
            wt = new X(
              i.line,
              Math.max(0, Math.min(b.text.length, i.ch + a * (zt ? 2 : 1))),
              -a,
            );
          }
        } else u ? (wt = W1(n.cm, b, i, a)) : (wt = ju(b, i, a));
        if (wt == null)
          if (!Ct && S()) i = Gu(u, n.cm, b, i.line, x);
          else return !1;
        else i = wt;
        return !0;
      }
      if (l == "char" || l == "codepoint") P();
      else if (l == "column") P(!0);
      else if (l == "word" || l == "group")
        for (
          var D = null,
            W = l == "group",
            q = n.cm && n.cm.getHelper(i, "wordChars"),
            Z = !0;
          !(a < 0 && !P(!Z));
          Z = !1
        ) {
          var ot =
              b.text.charAt(i.ch) ||
              `
`,
            vt = re(ot, q)
              ? "w"
              : W &&
                  ot ==
                    `
`
                ? "n"
                : !W || /\s/.test(ot)
                  ? null
                  : "p";
          if ((W && !Z && !vt && (vt = "s"), D && D != vt)) {
            a < 0 && ((a = 1), P(), (i.sticky = "after"));
            break;
          }
          if ((vt && (D = vt), a > 0 && !P(!Z))) break;
        }
      var bt = xa(n, i, p, m, !0);
      return ce(p, bt) && (bt.hitSide = !0), bt;
    }
    function mg(n, i, a, l) {
      var u = n.doc,
        p = i.left,
        m;
      if (l == "page") {
        var b = Math.min(
            n.display.wrapper.clientHeight,
            Tt(n).innerHeight || u(n).documentElement.clientHeight,
          ),
          x = Math.max(b - 0.5 * Mo(n.display), 3);
        m = (a > 0 ? i.bottom : i.top) + a * x;
      } else l == "line" && (m = a > 0 ? i.bottom + 3 : i.top - 3);
      for (var S; (S = _u(n, p, m)), !!S.outside; ) {
        if (a < 0 ? m <= 0 : m >= u.height) {
          S.hitSide = !0;
          break;
        }
        m += a * 5;
      }
      return S;
    }
    var de = function (n) {
      (this.cm = n),
        (this.lastAnchorNode =
          this.lastAnchorOffset =
          this.lastFocusNode =
          this.lastFocusOffset =
            null),
        (this.polling = new Mt()),
        (this.composing = null),
        (this.gracePeriod = !1),
        (this.readDOMTimeout = null);
    };
    (de.prototype.init = function (n) {
      var i = this,
        a = this,
        l = a.cm,
        u = (a.div = n.lineDiv);
      (u.contentEditable = !0),
        Qu(
          u,
          l.options.spellcheck,
          l.options.autocorrect,
          l.options.autocapitalize,
        );
      function p(b) {
        for (var x = b.target; x; x = x.parentNode) {
          if (x == u) return !0;
          if (/\bCodeMirror-(?:line)?widget\b/.test(x.className)) break;
        }
        return !1;
      }
      Rt(u, "paste", function (b) {
        !p(b) ||
          Ce(l, b) ||
          dg(b, l) ||
          (g <= 11 &&
            setTimeout(
              Be(l, function () {
                return i.updateFromDOM();
              }),
              20,
            ));
      }),
        Rt(u, "compositionstart", function (b) {
          i.composing = { data: b.data, done: !1 };
        }),
        Rt(u, "compositionupdate", function (b) {
          i.composing || (i.composing = { data: b.data, done: !1 });
        }),
        Rt(u, "compositionend", function (b) {
          i.composing &&
            (b.data != i.composing.data && i.readFromDOMSoon(),
            (i.composing.done = !0));
        }),
        Rt(u, "touchstart", function () {
          return a.forceCompositionEnd();
        }),
        Rt(u, "input", function () {
          i.composing || i.readFromDOMSoon();
        });
      function m(b) {
        if (!(!p(b) || Ce(l, b))) {
          if (l.somethingSelected())
            Ea({ lineWise: !1, text: l.getSelections() }),
              b.type == "cut" && l.replaceSelection("", null, "cut");
          else if (l.options.lineWiseCopyCut) {
            var x = gg(l);
            Ea({ lineWise: !0, text: x.text }),
              b.type == "cut" &&
                l.operation(function () {
                  l.setSelections(x.ranges, 0, V),
                    l.replaceSelection("", null, "cut");
                });
          } else return;
          if (b.clipboardData) {
            b.clipboardData.clearData();
            var S = er.text.join(`
`);
            if (
              (b.clipboardData.setData("Text", S),
              b.clipboardData.getData("Text") == S)
            ) {
              b.preventDefault();
              return;
            }
          }
          var P = vg(),
            D = P.firstChild;
          Qu(D),
            l.display.lineSpace.insertBefore(P, l.display.lineSpace.firstChild),
            (D.value = er.text.join(`
`));
          var W = yt(Vt(u));
          qt(D),
            setTimeout(function () {
              l.display.lineSpace.removeChild(P),
                W.focus(),
                W == u && a.showPrimarySelection();
            }, 50);
        }
      }
      Rt(u, "copy", m), Rt(u, "cut", m);
    }),
      (de.prototype.screenReaderLabelChanged = function (n) {
        n
          ? this.div.setAttribute("aria-label", n)
          : this.div.removeAttribute("aria-label");
      }),
      (de.prototype.prepareSelection = function () {
        var n = lp(this.cm, !1);
        return (n.focus = yt(Vt(this.div)) == this.div), n;
      }),
      (de.prototype.showSelection = function (n, i) {
        !n ||
          !this.cm.display.view.length ||
          ((n.focus || i) && this.showPrimarySelection(),
          this.showMultipleSelections(n));
      }),
      (de.prototype.getSelection = function () {
        return this.cm.display.wrapper.ownerDocument.getSelection();
      }),
      (de.prototype.showPrimarySelection = function () {
        var n = this.getSelection(),
          i = this.cm,
          a = i.doc.sel.primary(),
          l = a.from(),
          u = a.to();
        if (
          i.display.viewTo == i.display.viewFrom ||
          l.line >= i.display.viewTo ||
          u.line < i.display.viewFrom
        ) {
          n.removeAllRanges();
          return;
        }
        var p = La(i, n.anchorNode, n.anchorOffset),
          m = La(i, n.focusNode, n.focusOffset);
        if (
          !(
            p &&
            !p.bad &&
            m &&
            !m.bad &&
            _t(To(p, m), l) == 0 &&
            _t(sn(p, m), u) == 0
          )
        ) {
          var b = i.display.view,
            x = (l.line >= i.display.viewFrom && yg(i, l)) || {
              node: b[0].measure.map[2],
              offset: 0,
            },
            S = u.line < i.display.viewTo && yg(i, u);
          if (!S) {
            var P = b[b.length - 1].measure,
              D = P.maps ? P.maps[P.maps.length - 1] : P.map;
            S = {
              node: D[D.length - 1],
              offset: D[D.length - 2] - D[D.length - 3],
            };
          }
          if (!x || !S) {
            n.removeAllRanges();
            return;
          }
          var W = n.rangeCount && n.getRangeAt(0),
            q;
          try {
            q = B(x.node, x.offset, S.offset, S.node);
          } catch {}
          q &&
            (!s && i.state.focused
              ? (n.collapse(x.node, x.offset),
                q.collapsed || (n.removeAllRanges(), n.addRange(q)))
              : (n.removeAllRanges(), n.addRange(q)),
            W && n.anchorNode == null
              ? n.addRange(W)
              : s && this.startGracePeriod()),
            this.rememberSelection();
        }
      }),
      (de.prototype.startGracePeriod = function () {
        var n = this;
        clearTimeout(this.gracePeriod),
          (this.gracePeriod = setTimeout(function () {
            (n.gracePeriod = !1),
              n.selectionChanged() &&
                n.cm.operation(function () {
                  return (n.cm.curOp.selectionChanged = !0);
                });
          }, 20));
      }),
      (de.prototype.showMultipleSelections = function (n) {
        z(this.cm.display.cursorDiv, n.cursors),
          z(this.cm.display.selectionDiv, n.selection);
      }),
      (de.prototype.rememberSelection = function () {
        var n = this.getSelection();
        (this.lastAnchorNode = n.anchorNode),
          (this.lastAnchorOffset = n.anchorOffset),
          (this.lastFocusNode = n.focusNode),
          (this.lastFocusOffset = n.focusOffset);
      }),
      (de.prototype.selectionInEditor = function () {
        var n = this.getSelection();
        if (!n.rangeCount) return !1;
        var i = n.getRangeAt(0).commonAncestorContainer;
        return Q(this.div, i);
      }),
      (de.prototype.focus = function () {
        this.cm.options.readOnly != "nocursor" &&
          ((!this.selectionInEditor() || yt(Vt(this.div)) != this.div) &&
            this.showSelection(this.prepareSelection(), !0),
          this.div.focus());
      }),
      (de.prototype.blur = function () {
        this.div.blur();
      }),
      (de.prototype.getField = function () {
        return this.div;
      }),
      (de.prototype.supportsTouch = function () {
        return !0;
      }),
      (de.prototype.receivedFocus = function () {
        var n = this,
          i = this;
        this.selectionInEditor()
          ? setTimeout(function () {
              return n.pollSelection();
            }, 20)
          : Sn(this.cm, function () {
              return (i.cm.curOp.selectionChanged = !0);
            });
        function a() {
          i.cm.state.focused &&
            (i.pollSelection(), i.polling.set(i.cm.options.pollInterval, a));
        }
        this.polling.set(this.cm.options.pollInterval, a);
      }),
      (de.prototype.selectionChanged = function () {
        var n = this.getSelection();
        return (
          n.anchorNode != this.lastAnchorNode ||
          n.anchorOffset != this.lastAnchorOffset ||
          n.focusNode != this.lastFocusNode ||
          n.focusOffset != this.lastFocusOffset
        );
      }),
      (de.prototype.pollSelection = function () {
        if (
          !(
            this.readDOMTimeout != null ||
            this.gracePeriod ||
            !this.selectionChanged()
          )
        ) {
          var n = this.getSelection(),
            i = this.cm;
          if (
            $ &&
            w &&
            this.cm.display.gutterSpecs.length &&
            cx(n.anchorNode)
          ) {
            this.cm.triggerOnKeyDown({
              type: "keydown",
              keyCode: 8,
              preventDefault: Math.abs,
            }),
              this.blur(),
              this.focus();
            return;
          }
          if (!this.composing) {
            this.rememberSelection();
            var a = La(i, n.anchorNode, n.anchorOffset),
              l = La(i, n.focusNode, n.focusOffset);
            a &&
              l &&
              Sn(i, function () {
                Ye(i.doc, oi(a, l), V),
                  (a.bad || l.bad) && (i.curOp.selectionChanged = !0);
              });
          }
        }
      }),
      (de.prototype.pollContent = function () {
        this.readDOMTimeout != null &&
          (clearTimeout(this.readDOMTimeout), (this.readDOMTimeout = null));
        var n = this.cm,
          i = n.display,
          a = n.doc.sel.primary(),
          l = a.from(),
          u = a.to();
        if (
          (l.ch == 0 &&
            l.line > n.firstLine() &&
            (l = X(l.line - 1, Pt(n.doc, l.line - 1).length)),
          u.ch == Pt(n.doc, u.line).text.length &&
            u.line < n.lastLine() &&
            (u = X(u.line + 1, 0)),
          l.line < i.viewFrom || u.line > i.viewTo - 1)
        )
          return !1;
        var p, m, b;
        l.line == i.viewFrom || (p = Hi(n, l.line)) == 0
          ? ((m = C(i.view[0].line)), (b = i.view[0].node))
          : ((m = C(i.view[p].line)), (b = i.view[p - 1].node.nextSibling));
        var x = Hi(n, u.line),
          S,
          P;
        if (
          (x == i.view.length - 1
            ? ((S = i.viewTo - 1), (P = i.lineDiv.lastChild))
            : ((S = C(i.view[x + 1].line) - 1),
              (P = i.view[x + 1].node.previousSibling)),
          !b)
        )
          return !1;
        for (
          var D = n.doc.splitLines(ux(n, b, P, m, S)),
            W = $r(n.doc, X(m, 0), X(S, Pt(n.doc, S).text.length));
          D.length > 1 && W.length > 1;
        )
          if (ut(D) == ut(W)) D.pop(), W.pop(), S--;
          else if (D[0] == W[0]) D.shift(), W.shift(), m++;
          else break;
        for (
          var q = 0,
            Z = 0,
            ot = D[0],
            vt = W[0],
            bt = Math.min(ot.length, vt.length);
          q < bt && ot.charCodeAt(q) == vt.charCodeAt(q);
        )
          ++q;
        for (
          var Ct = ut(D),
            wt = ut(W),
            Lt = Math.min(
              Ct.length - (D.length == 1 ? q : 0),
              wt.length - (W.length == 1 ? q : 0),
            );
          Z < Lt &&
          Ct.charCodeAt(Ct.length - Z - 1) == wt.charCodeAt(wt.length - Z - 1);
        )
          ++Z;
        if (D.length == 1 && W.length == 1 && m == l.line)
          for (
            ;
            q &&
            q > l.ch &&
            Ct.charCodeAt(Ct.length - Z - 1) ==
              wt.charCodeAt(wt.length - Z - 1);
          )
            q--, Z++;
        (D[D.length - 1] = Ct.slice(0, Ct.length - Z).replace(/^\u200b+/, "")),
          (D[0] = D[0].slice(q).replace(/\u200b+$/, ""));
        var zt = X(m, q),
          $t = X(S, W.length ? ut(W).length - Z : 0);
        if (D.length > 1 || D[0] || _t(zt, $t))
          return Fo(n.doc, D, zt, $t, "+input"), !0;
      }),
      (de.prototype.ensurePolled = function () {
        this.forceCompositionEnd();
      }),
      (de.prototype.reset = function () {
        this.forceCompositionEnd();
      }),
      (de.prototype.forceCompositionEnd = function () {
        this.composing &&
          (clearTimeout(this.readDOMTimeout),
          (this.composing = null),
          this.updateFromDOM(),
          this.div.blur(),
          this.div.focus());
      }),
      (de.prototype.readFromDOMSoon = function () {
        var n = this;
        this.readDOMTimeout == null &&
          (this.readDOMTimeout = setTimeout(function () {
            if (((n.readDOMTimeout = null), n.composing))
              if (n.composing.done) n.composing = null;
              else return;
            n.updateFromDOM();
          }, 80));
      }),
      (de.prototype.updateFromDOM = function () {
        var n = this;
        (this.cm.isReadOnly() || !this.pollContent()) &&
          Sn(this.cm, function () {
            return ln(n.cm);
          });
      }),
      (de.prototype.setUneditable = function (n) {
        n.contentEditable = "false";
      }),
      (de.prototype.onKeyPress = function (n) {
        n.charCode == 0 ||
          this.composing ||
          (n.preventDefault(),
          this.cm.isReadOnly() ||
            Be(this.cm, Zu)(
              this.cm,
              String.fromCharCode(n.charCode == null ? n.keyCode : n.charCode),
              0,
            ));
      }),
      (de.prototype.readOnlyChanged = function (n) {
        this.div.contentEditable = String(n != "nocursor");
      }),
      (de.prototype.onContextMenu = function () {}),
      (de.prototype.resetPosition = function () {}),
      (de.prototype.needsContentAttribute = !0);
    function yg(n, i) {
      var a = bu(n, i.line);
      if (!a || a.hidden) return null;
      var l = Pt(n.doc, i.line),
        u = Vd(a, l, i.line),
        p = Yt(l, n.doc.direction),
        m = "left";
      if (p) {
        var b = Ae(p, i.ch);
        m = b % 2 ? "right" : "left";
      }
      var x = Yd(u.map, i.ch, m);
      return (x.offset = x.collapse == "right" ? x.end : x.start), x;
    }
    function cx(n) {
      for (var i = n; i; i = i.parentNode)
        if (/CodeMirror-gutter-wrapper/.test(i.className)) return !0;
      return !1;
    }
    function Wo(n, i) {
      return i && (n.bad = !0), n;
    }
    function ux(n, i, a, l, u) {
      var p = "",
        m = !1,
        b = n.doc.lineSeparator(),
        x = !1;
      function S(q) {
        return function (Z) {
          return Z.id == q;
        };
      }
      function P() {
        m && ((p += b), x && (p += b), (m = x = !1));
      }
      function D(q) {
        q && (P(), (p += q));
      }
      function W(q) {
        if (q.nodeType == 1) {
          var Z = q.getAttribute("cm-text");
          if (Z) {
            D(Z);
            return;
          }
          var ot = q.getAttribute("cm-marker"),
            vt;
          if (ot) {
            var bt = n.findMarks(X(l, 0), X(u + 1, 0), S(+ot));
            bt.length &&
              (vt = bt[0].find(0)) &&
              D($r(n.doc, vt.from, vt.to).join(b));
            return;
          }
          if (q.getAttribute("contenteditable") == "false") return;
          var Ct = /^(pre|div|p|li|table|br)$/i.test(q.nodeName);
          if (!/^br$/i.test(q.nodeName) && q.textContent.length == 0) return;
          Ct && P();
          for (var wt = 0; wt < q.childNodes.length; wt++) W(q.childNodes[wt]);
          /^(pre|p)$/i.test(q.nodeName) && (x = !0), Ct && (m = !0);
        } else
          q.nodeType == 3 &&
            D(q.nodeValue.replace(/\u200b/g, "").replace(/\u00a0/g, " "));
      }
      for (; W(i), i != a; ) (i = i.nextSibling), (x = !1);
      return p;
    }
    function La(n, i, a) {
      var l;
      if (i == n.display.lineDiv) {
        if (((l = n.display.lineDiv.childNodes[a]), !l))
          return Wo(n.clipPos(X(n.display.viewTo - 1)), !0);
        (i = null), (a = 0);
      } else
        for (l = i; ; l = l.parentNode) {
          if (!l || l == n.display.lineDiv) return null;
          if (l.parentNode && l.parentNode == n.display.lineDiv) break;
        }
      for (var u = 0; u < n.display.view.length; u++) {
        var p = n.display.view[u];
        if (p.node == l) return fx(p, i, a);
      }
    }
    function fx(n, i, a) {
      var l = n.text.firstChild,
        u = !1;
      if (!i || !Q(l, i)) return Wo(X(C(n.line), 0), !0);
      if (i == l && ((u = !0), (i = l.childNodes[a]), (a = 0), !i)) {
        var p = n.rest ? ut(n.rest) : n.line;
        return Wo(X(C(p), p.text.length), u);
      }
      var m = i.nodeType == 3 ? i : null,
        b = i;
      for (
        !m &&
        i.childNodes.length == 1 &&
        i.firstChild.nodeType == 3 &&
        ((m = i.firstChild), a && (a = m.nodeValue.length));
        b.parentNode != l;
      )
        b = b.parentNode;
      var x = n.measure,
        S = x.maps;
      function P(vt, bt, Ct) {
        for (var wt = -1; wt < (S ? S.length : 0); wt++)
          for (
            var Lt = wt < 0 ? x.map : S[wt], zt = 0;
            zt < Lt.length;
            zt += 3
          ) {
            var $t = Lt[zt + 2];
            if ($t == vt || $t == bt) {
              var Xt = C(wt < 0 ? n.line : n.rest[wt]),
                ve = Lt[zt] + Ct;
              return (
                (Ct < 0 || $t != vt) && (ve = Lt[zt + (Ct ? 1 : 0)]), X(Xt, ve)
              );
            }
          }
      }
      var D = P(m, b, a);
      if (D) return Wo(D, u);
      for (
        var W = b.nextSibling, q = m ? m.nodeValue.length - a : 0;
        W;
        W = W.nextSibling
      ) {
        if (((D = P(W, W.firstChild, 0)), D)) return Wo(X(D.line, D.ch - q), u);
        q += W.textContent.length;
      }
      for (var Z = b.previousSibling, ot = a; Z; Z = Z.previousSibling) {
        if (((D = P(Z, Z.firstChild, -1)), D))
          return Wo(X(D.line, D.ch + ot), u);
        ot += Z.textContent.length;
      }
    }
    var Me = function (n) {
      (this.cm = n),
        (this.prevInput = ""),
        (this.pollingFast = !1),
        (this.polling = new Mt()),
        (this.hasSelection = !1),
        (this.composing = null),
        (this.resetting = !1);
    };
    (Me.prototype.init = function (n) {
      var i = this,
        a = this,
        l = this.cm;
      this.createField(n);
      var u = this.textarea;
      n.wrapper.insertBefore(this.wrapper, n.wrapper.firstChild),
        M && (u.style.width = "0px"),
        Rt(u, "input", function () {
          d && g >= 9 && i.hasSelection && (i.hasSelection = null), a.poll();
        }),
        Rt(u, "paste", function (m) {
          Ce(l, m) ||
            dg(m, l) ||
            ((l.state.pasteIncoming = +new Date()), a.fastPoll());
        });
      function p(m) {
        if (!Ce(l, m)) {
          if (l.somethingSelected())
            Ea({ lineWise: !1, text: l.getSelections() });
          else if (l.options.lineWiseCopyCut) {
            var b = gg(l);
            Ea({ lineWise: !0, text: b.text }),
              m.type == "cut"
                ? l.setSelections(b.ranges, null, V)
                : ((a.prevInput = ""),
                  (u.value = b.text.join(`
`)),
                  qt(u));
          } else return;
          m.type == "cut" && (l.state.cutIncoming = +new Date());
        }
      }
      Rt(u, "cut", p),
        Rt(u, "copy", p),
        Rt(n.scroller, "paste", function (m) {
          if (!(Rr(n, m) || Ce(l, m))) {
            if (!u.dispatchEvent) {
              (l.state.pasteIncoming = +new Date()), a.focus();
              return;
            }
            var b = new Event("paste");
            (b.clipboardData = m.clipboardData), u.dispatchEvent(b);
          }
        }),
        Rt(n.lineSpace, "selectstart", function (m) {
          Rr(n, m) || Xe(m);
        }),
        Rt(u, "compositionstart", function () {
          var m = l.getCursor("from");
          a.composing && a.composing.range.clear(),
            (a.composing = {
              start: m,
              range: l.markText(m, l.getCursor("to"), {
                className: "CodeMirror-composing",
              }),
            });
        }),
        Rt(u, "compositionend", function () {
          a.composing &&
            (a.poll(), a.composing.range.clear(), (a.composing = null));
        });
    }),
      (Me.prototype.createField = function (n) {
        (this.wrapper = vg()), (this.textarea = this.wrapper.firstChild);
        var i = this.cm.options;
        Qu(this.textarea, i.spellcheck, i.autocorrect, i.autocapitalize);
      }),
      (Me.prototype.screenReaderLabelChanged = function (n) {
        n
          ? this.textarea.setAttribute("aria-label", n)
          : this.textarea.removeAttribute("aria-label");
      }),
      (Me.prototype.prepareSelection = function () {
        var n = this.cm,
          i = n.display,
          a = n.doc,
          l = lp(n);
        if (n.options.moveInputWithCursor) {
          var u = Jn(n, a.sel.primary().head, "div"),
            p = i.wrapper.getBoundingClientRect(),
            m = i.lineDiv.getBoundingClientRect();
          (l.teTop = Math.max(
            0,
            Math.min(i.wrapper.clientHeight - 10, u.top + m.top - p.top),
          )),
            (l.teLeft = Math.max(
              0,
              Math.min(i.wrapper.clientWidth - 10, u.left + m.left - p.left),
            ));
        }
        return l;
      }),
      (Me.prototype.showSelection = function (n) {
        var i = this.cm,
          a = i.display;
        z(a.cursorDiv, n.cursors),
          z(a.selectionDiv, n.selection),
          n.teTop != null &&
            ((this.wrapper.style.top = n.teTop + "px"),
            (this.wrapper.style.left = n.teLeft + "px"));
      }),
      (Me.prototype.reset = function (n) {
        if (!(this.contextMenuPending || (this.composing && n))) {
          var i = this.cm;
          if (((this.resetting = !0), i.somethingSelected())) {
            this.prevInput = "";
            var a = i.getSelection();
            (this.textarea.value = a),
              i.state.focused && qt(this.textarea),
              d && g >= 9 && (this.hasSelection = a);
          } else
            n ||
              ((this.prevInput = this.textarea.value = ""),
              d && g >= 9 && (this.hasSelection = null));
          this.resetting = !1;
        }
      }),
      (Me.prototype.getField = function () {
        return this.textarea;
      }),
      (Me.prototype.supportsTouch = function () {
        return !1;
      }),
      (Me.prototype.focus = function () {
        if (
          this.cm.options.readOnly != "nocursor" &&
          (!E || yt(Vt(this.textarea)) != this.textarea)
        )
          try {
            this.textarea.focus();
          } catch {}
      }),
      (Me.prototype.blur = function () {
        this.textarea.blur();
      }),
      (Me.prototype.resetPosition = function () {
        this.wrapper.style.top = this.wrapper.style.left = 0;
      }),
      (Me.prototype.receivedFocus = function () {
        this.slowPoll();
      }),
      (Me.prototype.slowPoll = function () {
        var n = this;
        this.pollingFast ||
          this.polling.set(this.cm.options.pollInterval, function () {
            n.poll(), n.cm.state.focused && n.slowPoll();
          });
      }),
      (Me.prototype.fastPoll = function () {
        var n = !1,
          i = this;
        i.pollingFast = !0;
        function a() {
          var l = i.poll();
          !l && !n
            ? ((n = !0), i.polling.set(60, a))
            : ((i.pollingFast = !1), i.slowPoll());
        }
        i.polling.set(20, a);
      }),
      (Me.prototype.poll = function () {
        var n = this,
          i = this.cm,
          a = this.textarea,
          l = this.prevInput;
        if (
          this.contextMenuPending ||
          this.resetting ||
          !i.state.focused ||
          (ti(a) && !l && !this.composing) ||
          i.isReadOnly() ||
          i.options.disableInput ||
          i.state.keySeq
        )
          return !1;
        var u = a.value;
        if (u == l && !i.somethingSelected()) return !1;
        if (
          (d && g >= 9 && this.hasSelection === u) ||
          (H && /[\uf700-\uf7ff]/.test(u))
        )
          return i.display.input.reset(), !1;
        if (i.doc.sel == i.display.selForContextMenu) {
          var p = u.charCodeAt(0);
          if ((p == 8203 && !l && (l = "​"), p == 8666))
            return this.reset(), this.cm.execCommand("undo");
        }
        for (
          var m = 0, b = Math.min(l.length, u.length);
          m < b && l.charCodeAt(m) == u.charCodeAt(m);
        )
          ++m;
        return (
          Sn(i, function () {
            Zu(
              i,
              u.slice(m),
              l.length - m,
              null,
              n.composing ? "*compose" : null,
            ),
              u.length > 1e3 ||
              u.indexOf(`
`) > -1
                ? (a.value = n.prevInput = "")
                : (n.prevInput = u),
              n.composing &&
                (n.composing.range.clear(),
                (n.composing.range = i.markText(
                  n.composing.start,
                  i.getCursor("to"),
                  { className: "CodeMirror-composing" },
                )));
          }),
          !0
        );
      }),
      (Me.prototype.ensurePolled = function () {
        this.pollingFast && this.poll() && (this.pollingFast = !1);
      }),
      (Me.prototype.onKeyPress = function () {
        d && g >= 9 && (this.hasSelection = null), this.fastPoll();
      }),
      (Me.prototype.onContextMenu = function (n) {
        var i = this,
          a = i.cm,
          l = a.display,
          u = i.textarea;
        i.contextMenuPending && i.contextMenuPending();
        var p = Ii(a, n),
          m = l.scroller.scrollTop;
        if (!p || N) return;
        var b = a.options.resetSelectionOnContextMenu;
        b && a.doc.sel.contains(p) == -1 && Be(a, Ye)(a.doc, oi(p), V);
        var x = u.style.cssText,
          S = i.wrapper.style.cssText,
          P = i.wrapper.offsetParent.getBoundingClientRect();
        (i.wrapper.style.cssText = "position: static"),
          (u.style.cssText =
            `position: absolute; width: 30px; height: 30px;
      top: ` +
            (n.clientY - P.top - 5) +
            "px; left: " +
            (n.clientX - P.left - 5) +
            `px;
      z-index: 1000; background: ` +
            (d ? "rgba(255, 255, 255, .05)" : "transparent") +
            `;
      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);`);
        var D;
        v && (D = u.ownerDocument.defaultView.scrollY),
          l.input.focus(),
          v && u.ownerDocument.defaultView.scrollTo(null, D),
          l.input.reset(),
          a.somethingSelected() || (u.value = i.prevInput = " "),
          (i.contextMenuPending = q),
          (l.selForContextMenu = a.doc.sel),
          clearTimeout(l.detectingSelectAll);
        function W() {
          if (u.selectionStart != null) {
            var ot = a.somethingSelected(),
              vt = "​" + (ot ? u.value : "");
            (u.value = "⇚"),
              (u.value = vt),
              (i.prevInput = ot ? "" : "​"),
              (u.selectionStart = 1),
              (u.selectionEnd = vt.length),
              (l.selForContextMenu = a.doc.sel);
          }
        }
        function q() {
          if (
            i.contextMenuPending == q &&
            ((i.contextMenuPending = !1),
            (i.wrapper.style.cssText = S),
            (u.style.cssText = x),
            d && g < 9 && l.scrollbars.setScrollTop((l.scroller.scrollTop = m)),
            u.selectionStart != null)
          ) {
            (!d || (d && g < 9)) && W();
            var ot = 0,
              vt = function () {
                l.selForContextMenu == a.doc.sel &&
                u.selectionStart == 0 &&
                u.selectionEnd > 0 &&
                i.prevInput == "​"
                  ? Be(a, zp)(a)
                  : ot++ < 10
                    ? (l.detectingSelectAll = setTimeout(vt, 500))
                    : ((l.selForContextMenu = null), l.input.reset());
              };
            l.detectingSelectAll = setTimeout(vt, 200);
          }
        }
        if ((d && g >= 9 && W(), rt)) {
          Qr(n);
          var Z = function () {
            Ke(window, "mouseup", Z), setTimeout(q, 20);
          };
          Rt(window, "mouseup", Z);
        } else setTimeout(q, 50);
      }),
      (Me.prototype.readOnlyChanged = function (n) {
        n || this.reset(),
          (this.textarea.disabled = n == "nocursor"),
          (this.textarea.readOnly = !!n);
      }),
      (Me.prototype.setUneditable = function () {}),
      (Me.prototype.needsContentAttribute = !1);
    function hx(n, i) {
      if (
        ((i = i ? it(i) : {}),
        (i.value = n.value),
        !i.tabindex && n.tabIndex && (i.tabindex = n.tabIndex),
        !i.placeholder && n.placeholder && (i.placeholder = n.placeholder),
        i.autofocus == null)
      ) {
        var a = yt(Vt(n));
        i.autofocus =
          a == n || (n.getAttribute("autofocus") != null && a == document.body);
      }
      function l() {
        n.value = b.getValue();
      }
      var u;
      if (n.form && (Rt(n.form, "submit", l), !i.leaveSubmitMethodAlone)) {
        var p = n.form;
        u = p.submit;
        try {
          var m = (p.submit = function () {
            l(), (p.submit = u), p.submit(), (p.submit = m);
          });
        } catch {}
      }
      (i.finishInit = function (x) {
        (x.save = l),
          (x.getTextArea = function () {
            return n;
          }),
          (x.toTextArea = function () {
            (x.toTextArea = isNaN),
              l(),
              n.parentNode.removeChild(x.getWrapperElement()),
              (n.style.display = ""),
              n.form &&
                (Ke(n.form, "submit", l),
                !i.leaveSubmitMethodAlone &&
                  typeof n.form.submit == "function" &&
                  (n.form.submit = u));
          });
      }),
        (n.style.display = "none");
      var b = be(function (x) {
        return n.parentNode.insertBefore(x, n.nextSibling);
      }, i);
      return b;
    }
    function dx(n) {
      (n.off = Ke),
        (n.on = Rt),
        (n.wheelEventPixels = w1),
        (n.Doc = an),
        (n.splitLines = qn),
        (n.countColumn = at),
        (n.findColumn = ft),
        (n.isWordChar = Kt),
        (n.Pass = F),
        (n.signal = ke),
        (n.Line = Eo),
        (n.changeEnd = si),
        (n.scrollbarModel = dp),
        (n.Pos = X),
        (n.cmpPos = _t),
        (n.modes = xo),
        (n.mimeModes = Yn),
        (n.resolveMode = _o),
        (n.getMode = So),
        (n.modeExtensions = ei),
        (n.extendMode = ko),
        (n.copyState = dr),
        (n.startState = Co),
        (n.innerMode = Cs),
        (n.commands = Xs),
        (n.keyMap = Fr),
        (n.keyName = Jp),
        (n.isModifierKey = Zp),
        (n.lookupKey = Ho),
        (n.normalizeKeyMap = B1),
        (n.StringStream = Te),
        (n.SharedTextMarker = Gs),
        (n.TextMarker = ai),
        (n.LineWidget = js),
        (n.e_preventDefault = Xe),
        (n.e_stopPropagation = bo),
        (n.e_stop = Qr),
        (n.addClass = At),
        (n.contains = Q),
        (n.rmClass = ht),
        (n.keyNames = ci);
    }
    ix(be), ax(be);
    var px = "iter insert remove copy getEditor constructor".split(" ");
    for (var Aa in an.prototype)
      an.prototype.hasOwnProperty(Aa) &&
        Et(px, Aa) < 0 &&
        (be.prototype[Aa] = (function (n) {
          return function () {
            return n.apply(this.doc, arguments);
          };
        })(an.prototype[Aa]));
    return (
      Vn(an),
      (be.inputStyles = { textarea: Me, contenteditable: de }),
      (be.defineMode = function (n) {
        !be.defaults.mode && n != "null" && (be.defaults.mode = n),
          Zn.apply(this, arguments);
      }),
      (be.defineMIME = Ri),
      be.defineMode("null", function () {
        return {
          token: function (n) {
            return n.skipToEnd();
          },
        };
      }),
      be.defineMIME("text/plain", "null"),
      (be.defineExtension = function (n, i) {
        be.prototype[n] = i;
      }),
      (be.defineDocExtension = function (n, i) {
        an.prototype[n] = i;
      }),
      (be.fromTextArea = hx),
      dx(be),
      (be.version = "5.65.16"),
      be
    );
  });
})(Lb);
var xs = Lb.exports;
const Wat = Ny(xs);
var Uat = { exports: {} };
(function (t, e) {
  (function (r) {
    r(xs);
  })(function (r) {
    r.defineMode("javascript", function (o, s) {
      var c = o.indentUnit,
        f = s.statementIndent,
        h = s.jsonld,
        d = s.json || h,
        g = s.trackScope !== !1,
        v = s.typescript,
        y = s.wordCharacters || /[\w$\xa1-\uffff]/,
        w = (function () {
          function C(He) {
            return { type: He, style: "keyword" };
          }
          var O = C("keyword a"),
            et = C("keyword b"),
            gt = C("keyword c"),
            X = C("keyword d"),
            _t = C("operator"),
            ce = { type: "atom", style: "atom" };
          return {
            if: C("if"),
            while: O,
            with: O,
            else: et,
            do: et,
            try: et,
            finally: et,
            return: X,
            break: X,
            continue: X,
            new: C("new"),
            delete: gt,
            void: gt,
            throw: gt,
            debugger: C("debugger"),
            var: C("var"),
            const: C("var"),
            let: C("var"),
            function: C("function"),
            catch: C("catch"),
            for: C("for"),
            switch: C("switch"),
            case: C("case"),
            default: C("default"),
            in: _t,
            typeof: _t,
            instanceof: _t,
            true: ce,
            false: ce,
            null: ce,
            undefined: ce,
            NaN: ce,
            Infinity: ce,
            this: C("this"),
            class: C("class"),
            super: C("atom"),
            yield: gt,
            export: C("export"),
            import: C("import"),
            extends: gt,
            await: gt,
          };
        })(),
        _ = /[+\-*&%=<>!?|~^@]/,
        N =
          /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;
      function L(C) {
        for (var O = !1, et, gt = !1; (et = C.next()) != null; ) {
          if (!O) {
            if (et == "/" && !gt) return;
            et == "[" ? (gt = !0) : gt && et == "]" && (gt = !1);
          }
          O = !O && et == "\\";
        }
      }
      var A, T;
      function M(C, O, et) {
        return (A = C), (T = et), O;
      }
      function $(C, O) {
        var et = C.next();
        if (et == '"' || et == "'")
          return (O.tokenize = E(et)), O.tokenize(C, O);
        if (et == "." && C.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/))
          return M("number", "number");
        if (et == "." && C.match("..")) return M("spread", "meta");
        if (/[\[\]{}\(\),;\:\.]/.test(et)) return M(et);
        if (et == "=" && C.eat(">")) return M("=>", "operator");
        if (et == "0" && C.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/))
          return M("number", "number");
        if (/\d/.test(et))
          return (
            C.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/),
            M("number", "number")
          );
        if (et == "/")
          return C.eat("*")
            ? ((O.tokenize = H), H(C, O))
            : C.eat("/")
              ? (C.skipToEnd(), M("comment", "comment"))
              : $n(C, O, 1)
                ? (L(C),
                  C.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/),
                  M("regexp", "string-2"))
                : (C.eat("="), M("operator", "operator", C.current()));
        if (et == "`") return (O.tokenize = K), K(C, O);
        if (et == "#" && C.peek() == "!")
          return C.skipToEnd(), M("meta", "meta");
        if (et == "#" && C.eatWhile(y)) return M("variable", "property");
        if (
          (et == "<" && C.match("!--")) ||
          (et == "-" && C.match("->") && !/\S/.test(C.string.slice(0, C.start)))
        )
          return C.skipToEnd(), M("comment", "comment");
        if (_.test(et))
          return (
            (et != ">" || !O.lexical || O.lexical.type != ">") &&
              (C.eat("=")
                ? (et == "!" || et == "=") && C.eat("=")
                : /[<>*+\-|&?]/.test(et) &&
                  (C.eat(et), et == ">" && C.eat(et))),
            et == "?" && C.eat(".")
              ? M(".")
              : M("operator", "operator", C.current())
          );
        if (y.test(et)) {
          C.eatWhile(y);
          var gt = C.current();
          if (O.lastType != ".") {
            if (w.propertyIsEnumerable(gt)) {
              var X = w[gt];
              return M(X.type, X.style, gt);
            }
            if (
              gt == "async" &&
              C.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/, !1)
            )
              return M("async", "keyword", gt);
          }
          return M("variable", "variable", gt);
        }
      }
      function E(C) {
        return function (O, et) {
          var gt = !1,
            X;
          if (h && O.peek() == "@" && O.match(N))
            return (et.tokenize = $), M("jsonld-keyword", "meta");
          for (; (X = O.next()) != null && !(X == C && !gt); )
            gt = !gt && X == "\\";
          return gt || (et.tokenize = $), M("string", "string");
        };
      }
      function H(C, O) {
        for (var et = !1, gt; (gt = C.next()); ) {
          if (gt == "/" && et) {
            O.tokenize = $;
            break;
          }
          et = gt == "*";
        }
        return M("comment", "comment");
      }
      function K(C, O) {
        for (var et = !1, gt; (gt = C.next()) != null; ) {
          if (!et && (gt == "`" || (gt == "$" && C.eat("{")))) {
            O.tokenize = $;
            break;
          }
          et = !et && gt == "\\";
        }
        return M("quasi", "string-2", C.current());
      }
      var ct = "([{}])";
      function Y(C, O) {
        O.fatArrowAt && (O.fatArrowAt = null);
        var et = C.string.indexOf("=>", C.start);
        if (!(et < 0)) {
          if (v) {
            var gt = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(
              C.string.slice(C.start, et),
            );
            gt && (et = gt.index);
          }
          for (var X = 0, _t = !1, ce = et - 1; ce >= 0; --ce) {
            var He = C.string.charAt(ce),
              sn = ct.indexOf(He);
            if (sn >= 0 && sn < 3) {
              if (!X) {
                ++ce;
                break;
              }
              if (--X == 0) {
                He == "(" && (_t = !0);
                break;
              }
            } else if (sn >= 3 && sn < 6) ++X;
            else if (y.test(He)) _t = !0;
            else if (/["'\/`]/.test(He))
              for (; ; --ce) {
                if (ce == 0) return;
                var To = C.string.charAt(ce - 1);
                if (To == He && C.string.charAt(ce - 2) != "\\") {
                  ce--;
                  break;
                }
              }
            else if (_t && !X) {
              ++ce;
              break;
            }
          }
          _t && !X && (O.fatArrowAt = ce);
        }
      }
      var nt = {
        atom: !0,
        number: !0,
        variable: !0,
        string: !0,
        regexp: !0,
        this: !0,
        import: !0,
        "jsonld-keyword": !0,
      };
      function rt(C, O, et, gt, X, _t) {
        (this.indented = C),
          (this.column = O),
          (this.type = et),
          (this.prev = X),
          (this.info = _t),
          gt != null && (this.align = gt);
      }
      function dt(C, O) {
        if (!g) return !1;
        for (var et = C.localVars; et; et = et.next)
          if (et.name == O) return !0;
        for (var gt = C.context; gt; gt = gt.prev)
          for (var et = gt.vars; et; et = et.next) if (et.name == O) return !0;
      }
      function ht(C, O, et, gt, X) {
        var _t = C.cc;
        for (
          G.state = C,
            G.stream = X,
            G.marked = null,
            G.cc = _t,
            G.style = O,
            C.lexical.hasOwnProperty("align") || (C.lexical.align = !0);
          ;
        ) {
          var ce = _t.length ? _t.pop() : d ? Et : at;
          if (ce(et, gt)) {
            for (; _t.length && _t[_t.length - 1].lex; ) _t.pop()();
            return G.marked
              ? G.marked
              : et == "variable" && dt(C, gt)
                ? "variable-2"
                : O;
          }
        }
      }
      var G = { state: null, column: null, marked: null, cc: null };
      function z() {
        for (var C = arguments.length - 1; C >= 0; C--) G.cc.push(arguments[C]);
      }
      function k() {
        return z.apply(null, arguments), !0;
      }
      function I(C, O) {
        for (var et = O; et; et = et.next) if (et.name == C) return !0;
        return !1;
      }
      function B(C) {
        var O = G.state;
        if (((G.marked = "def"), !!g)) {
          if (O.context) {
            if (O.lexical.info == "var" && O.context && O.context.block) {
              var et = Q(C, O.context);
              if (et != null) {
                O.context = et;
                return;
              }
            } else if (!I(C, O.localVars)) {
              O.localVars = new Ht(C, O.localVars);
              return;
            }
          }
          s.globalVars &&
            !I(C, O.globalVars) &&
            (O.globalVars = new Ht(C, O.globalVars));
        }
      }
      function Q(C, O) {
        if (O)
          if (O.block) {
            var et = Q(C, O.prev);
            return et ? (et == O.prev ? O : new At(et, O.vars, !0)) : null;
          } else
            return I(C, O.vars) ? O : new At(O.prev, new Ht(C, O.vars), !1);
        else return null;
      }
      function yt(C) {
        return (
          C == "public" ||
          C == "private" ||
          C == "protected" ||
          C == "abstract" ||
          C == "readonly"
        );
      }
      function At(C, O, et) {
        (this.prev = C), (this.vars = O), (this.block = et);
      }
      function Ht(C, O) {
        (this.name = C), (this.next = O);
      }
      var qt = new Ht("this", new Ht("arguments", null));
      function Jt() {
        (G.state.context = new At(G.state.context, G.state.localVars, !1)),
          (G.state.localVars = qt);
      }
      function Qt() {
        (G.state.context = new At(G.state.context, G.state.localVars, !0)),
          (G.state.localVars = null);
      }
      Jt.lex = Qt.lex = !0;
      function Vt() {
        (G.state.localVars = G.state.context.vars),
          (G.state.context = G.state.context.prev);
      }
      Vt.lex = !0;
      function Tt(C, O) {
        var et = function () {
          var gt = G.state,
            X = gt.indented;
          if (gt.lexical.type == "stat") X = gt.lexical.indented;
          else
            for (
              var _t = gt.lexical;
              _t && _t.type == ")" && _t.align;
              _t = _t.prev
            )
              X = _t.indented;
          gt.lexical = new rt(X, G.stream.column(), C, null, gt.lexical, O);
        };
        return (et.lex = !0), et;
      }
      function j() {
        var C = G.state;
        C.lexical.prev &&
          (C.lexical.type == ")" && (C.indented = C.lexical.indented),
          (C.lexical = C.lexical.prev));
      }
      j.lex = !0;
      function it(C) {
        function O(et) {
          return et == C
            ? k()
            : C == ";" || et == "}" || et == ")" || et == "]"
              ? z()
              : k(O);
        }
        return O;
      }
      function at(C, O) {
        return C == "var"
          ? k(Tt("vardef", O), bo, it(";"), j)
          : C == "keyword a"
            ? k(Tt("form"), F, at, j)
            : C == "keyword b"
              ? k(Tt("form"), at, j)
              : C == "keyword d"
                ? G.stream.match(/^\s*$/, !1)
                  ? k()
                  : k(Tt("stat"), J, it(";"), j)
                : C == "debugger"
                  ? k(it(";"))
                  : C == "{"
                    ? k(Tt("}"), Qt, Pn, j, Vt)
                    : C == ";"
                      ? k()
                      : C == "if"
                        ? (G.state.lexical.info == "else" &&
                            G.state.cc[G.state.cc.length - 1] == j &&
                            G.state.cc.pop()(),
                          k(Tt("form"), F, at, j, wo))
                        : C == "function"
                          ? k(qn)
                          : C == "for"
                            ? k(Tt("form"), Qt, Ql, at, Vt, j)
                            : C == "class" || (v && O == "interface")
                              ? ((G.marked = "keyword"),
                                k(Tt("form", C == "class" ? C : O), xo, j))
                              : C == "variable"
                                ? v && O == "declare"
                                  ? ((G.marked = "keyword"), k(at))
                                  : v &&
                                      (O == "module" ||
                                        O == "enum" ||
                                        O == "type") &&
                                      G.stream.match(/^\s*\w/, !1)
                                    ? ((G.marked = "keyword"),
                                      O == "enum"
                                        ? k(Pt)
                                        : O == "type"
                                          ? k(Jl, it("operator"), Yt, it(";"))
                                          : k(
                                              Tt("form"),
                                              on,
                                              it("{"),
                                              Tt("}"),
                                              Pn,
                                              j,
                                              j,
                                            ))
                                    : v && O == "namespace"
                                      ? ((G.marked = "keyword"),
                                        k(Tt("form"), Et, at, j))
                                      : v && O == "abstract"
                                        ? ((G.marked = "keyword"), k(at))
                                        : k(Tt("stat"), Bt)
                                : C == "switch"
                                  ? k(
                                      Tt("form"),
                                      F,
                                      it("{"),
                                      Tt("}", "switch"),
                                      Qt,
                                      Pn,
                                      j,
                                      j,
                                      Vt,
                                    )
                                  : C == "case"
                                    ? k(Et, it(":"))
                                    : C == "default"
                                      ? k(it(":"))
                                      : C == "catch"
                                        ? k(Tt("form"), Jt, Mt, at, j, Vt)
                                        : C == "export"
                                          ? k(Tt("stat"), _o, j)
                                          : C == "import"
                                            ? k(Tt("stat"), ei, j)
                                            : C == "async"
                                              ? k(at)
                                              : O == "@"
                                                ? k(Et, at)
                                                : z(Tt("stat"), Et, it(";"), j);
      }
      function Mt(C) {
        if (C == "(") return k(Xn, it(")"));
      }
      function Et(C, O) {
        return V(C, O, !1);
      }
      function R(C, O) {
        return V(C, O, !0);
      }
      function F(C) {
        return C != "(" ? z() : k(Tt(")"), J, it(")"), j);
      }
      function V(C, O, et) {
        if (G.state.fatArrowAt == G.stream.start) {
          var gt = et ? pt : ut;
          if (C == "(") return k(Jt, Tt(")"), se(Xn, ")"), j, it("=>"), gt, Vt);
          if (C == "variable") return z(Jt, on, it("=>"), gt, Vt);
        }
        var X = et ? ft : lt;
        return nt.hasOwnProperty(C)
          ? k(X)
          : C == "function"
            ? k(qn, X)
            : C == "class" || (v && O == "interface")
              ? ((G.marked = "keyword"), k(Tt("form"), au, j))
              : C == "keyword c" || C == "async"
                ? k(et ? R : Et)
                : C == "("
                  ? k(Tt(")"), J, it(")"), j, X)
                  : C == "operator" || C == "spread"
                    ? k(et ? R : Et)
                    : C == "["
                      ? k(Tt("]"), Te, j, X)
                      : C == "{"
                        ? rn(re, "}", null, X)
                        : C == "quasi"
                          ? z(kt, X)
                          : C == "new"
                            ? k(Dt(et))
                            : k();
      }
      function J(C) {
        return C.match(/[;\}\)\],]/) ? z() : z(Et);
      }
      function lt(C, O) {
        return C == "," ? k(J) : ft(C, O, !1);
      }
      function ft(C, O, et) {
        var gt = et == !1 ? lt : ft,
          X = et == !1 ? Et : R;
        if (C == "=>") return k(Jt, et ? pt : ut, Vt);
        if (C == "operator")
          return /\+\+|--/.test(O) || (v && O == "!")
            ? k(gt)
            : v && O == "<" && G.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/, !1)
              ? k(Tt(">"), se(Yt, ">"), j, gt)
              : O == "?"
                ? k(Et, it(":"), X)
                : k(X);
        if (C == "quasi") return z(kt, gt);
        if (C != ";") {
          if (C == "(") return rn(R, ")", "call", gt);
          if (C == ".") return k(Kt, gt);
          if (C == "[") return k(Tt("]"), J, it("]"), j, gt);
          if (v && O == "as") return (G.marked = "keyword"), k(Yt, gt);
          if (C == "regexp")
            return (
              (G.state.lastType = G.marked = "operator"),
              G.stream.backUp(G.stream.pos - G.stream.start - 1),
              k(X)
            );
        }
      }
      function kt(C, O) {
        return C != "quasi"
          ? z()
          : O.slice(O.length - 2) != "${"
            ? k(kt)
            : k(J, mt);
      }
      function mt(C) {
        if (C == "}")
          return (G.marked = "string-2"), (G.state.tokenize = K), k(kt);
      }
      function ut(C) {
        return Y(G.stream, G.state), z(C == "{" ? at : Et);
      }
      function pt(C) {
        return Y(G.stream, G.state), z(C == "{" ? at : R);
      }
      function Dt(C) {
        return function (O) {
          return O == "."
            ? k(C ? Ot : Nt)
            : O == "variable" && v
              ? k(_n, C ? ft : lt)
              : z(C ? R : Et);
        };
      }
      function Nt(C, O) {
        if (O == "target") return (G.marked = "keyword"), k(lt);
      }
      function Ot(C, O) {
        if (O == "target") return (G.marked = "keyword"), k(ft);
      }
      function Bt(C) {
        return C == ":" ? k(j, at) : z(lt, it(";"), j);
      }
      function Kt(C) {
        if (C == "variable") return (G.marked = "property"), k();
      }
      function re(C, O) {
        if (C == "async") return (G.marked = "property"), k(re);
        if (C == "variable" || G.style == "keyword") {
          if (((G.marked = "property"), O == "get" || O == "set")) return k(oe);
          var et;
          return (
            v &&
              G.state.fatArrowAt == G.stream.start &&
              (et = G.stream.match(/^\s*:\s*/, !1)) &&
              (G.state.fatArrowAt = G.stream.pos + et[0].length),
            k(he)
          );
        } else {
          if (C == "number" || C == "string")
            return (G.marked = h ? "property" : G.style + " property"), k(he);
          if (C == "jsonld-keyword") return k(he);
          if (v && yt(O)) return (G.marked = "keyword"), k(re);
          if (C == "[") return k(Et, wn, it("]"), he);
          if (C == "spread") return k(R, he);
          if (O == "*") return (G.marked = "keyword"), k(re);
          if (C == ":") return z(he);
        }
      }
      function oe(C) {
        return C != "variable" ? z(he) : ((G.marked = "property"), k(qn));
      }
      function he(C) {
        if (C == ":") return k(R);
        if (C == "(") return z(qn);
      }
      function se(C, O, et) {
        function gt(X, _t) {
          if (et ? et.indexOf(X) > -1 : X == ",") {
            var ce = G.state.lexical;
            return (
              ce.info == "call" && (ce.pos = (ce.pos || 0) + 1),
              k(function (He, sn) {
                return He == O || sn == O ? z() : z(C);
              }, gt)
            );
          }
          return X == O || _t == O
            ? k()
            : et && et.indexOf(";") > -1
              ? z(C)
              : k(it(O));
        }
        return function (X, _t) {
          return X == O || _t == O ? k() : z(C, gt);
        };
      }
      function rn(C, O, et) {
        for (var gt = 3; gt < arguments.length; gt++) G.cc.push(arguments[gt]);
        return k(Tt(O, et), se(C, O), j);
      }
      function Pn(C) {
        return C == "}" ? k() : z(at, Pn);
      }
      function wn(C, O) {
        if (v) {
          if (C == ":") return k(Yt);
          if (O == "?") return k(wn);
        }
      }
      function hr(C, O) {
        if (v && (C == ":" || O == "in")) return k(Yt);
      }
      function Ae(C) {
        if (v && C == ":")
          return G.stream.match(/^\s*\w+\s+is\b/, !1) ? k(Et, xn, Yt) : k(Yt);
      }
      function xn(C, O) {
        if (O == "is") return (G.marked = "keyword"), k();
      }
      function Yt(C, O) {
        if (O == "keyof" || O == "typeof" || O == "infer" || O == "readonly")
          return (G.marked = "keyword"), k(O == "typeof" ? R : Yt);
        if (C == "variable" || O == "void") return (G.marked = "type"), k(Hn);
        if (O == "|" || O == "&") return k(Yt);
        if (C == "string" || C == "number" || C == "atom") return k(Hn);
        if (C == "[") return k(Tt("]"), se(Yt, "]", ","), j, Hn);
        if (C == "{") return k(Tt("}"), Rt, j, Hn);
        if (C == "(") return k(se(Ce, ")"), Zl, Hn);
        if (C == "<") return k(se(Yt, ">"), Yt);
        if (C == "quasi") return z(Ke, Hn);
      }
      function Zl(C) {
        if (C == "=>") return k(Yt);
      }
      function Rt(C) {
        return C.match(/[\}\)\]]/)
          ? k()
          : C == "," || C == ";"
            ? k(Rt)
            : z(Pr, Rt);
      }
      function Pr(C, O) {
        if (C == "variable" || G.style == "keyword")
          return (G.marked = "property"), k(Pr);
        if (O == "?" || C == "number" || C == "string") return k(Pr);
        if (C == ":") return k(Yt);
        if (C == "[") return k(it("variable"), hr, it("]"), Pr);
        if (C == "(") return z(ti, Pr);
        if (!C.match(/[;\}\)\],]/)) return k();
      }
      function Ke(C, O) {
        return C != "quasi"
          ? z()
          : O.slice(O.length - 2) != "${"
            ? k(Ke)
            : k(Yt, ke);
      }
      function ke(C) {
        if (C == "}")
          return (G.marked = "string-2"), (G.state.tokenize = K), k(Ke);
      }
      function Ce(C, O) {
        return (C == "variable" && G.stream.match(/^\s*[?:]/, !1)) || O == "?"
          ? k(Ce)
          : C == ":"
            ? k(Yt)
            : C == "spread"
              ? k(Ce)
              : z(Yt);
      }
      function Hn(C, O) {
        if (O == "<") return k(Tt(">"), se(Yt, ">"), j, Hn);
        if (O == "|" || C == "." || O == "&") return k(Yt);
        if (C == "[") return k(Yt, it("]"), Hn);
        if (O == "extends" || O == "implements")
          return (G.marked = "keyword"), k(Yt);
        if (O == "?") return k(Yt, it(":"), Yt);
      }
      function _n(C, O) {
        if (O == "<") return k(Tt(">"), se(Yt, ">"), j, Hn);
      }
      function Vn() {
        return z(Yt, Xe);
      }
      function Xe(C, O) {
        if (O == "=") return k(Yt);
      }
      function bo(C, O) {
        return O == "enum"
          ? ((G.marked = "keyword"), k(Pt))
          : z(on, wn, Kn, lu);
      }
      function on(C, O) {
        if (v && yt(O)) return (G.marked = "keyword"), k(on);
        if (C == "variable") return B(O), k();
        if (C == "spread") return k(on);
        if (C == "[") return rn(Ss, "]");
        if (C == "{") return rn(Qr, "}");
      }
      function Qr(C, O) {
        return C == "variable" && !G.stream.match(/^\s*:/, !1)
          ? (B(O), k(Kn))
          : (C == "variable" && (G.marked = "property"),
            C == "spread"
              ? k(on)
              : C == "}"
                ? z()
                : C == "["
                  ? k(Et, it("]"), it(":"), Qr)
                  : k(it(":"), on, Kn));
      }
      function Ss() {
        return z(on, Kn);
      }
      function Kn(C, O) {
        if (O == "=") return k(R);
      }
      function lu(C) {
        if (C == ",") return k(bo);
      }
      function wo(C, O) {
        if (C == "keyword b" && O == "else")
          return k(Tt("form", "else"), at, j);
      }
      function Ql(C, O) {
        if (O == "await") return k(Ql);
        if (C == "(") return k(Tt(")"), ks, j);
      }
      function ks(C) {
        return C == "var" ? k(bo, Jr) : C == "variable" ? k(Jr) : z(Jr);
      }
      function Jr(C, O) {
        return C == ")"
          ? k()
          : C == ";"
            ? k(Jr)
            : O == "in" || O == "of"
              ? ((G.marked = "keyword"), k(Et, Jr))
              : z(Et, Jr);
      }
      function qn(C, O) {
        if (O == "*") return (G.marked = "keyword"), k(qn);
        if (C == "variable") return B(O), k(qn);
        if (C == "(") return k(Jt, Tt(")"), se(Xn, ")"), j, Ae, at, Vt);
        if (v && O == "<") return k(Tt(">"), se(Vn, ">"), j, qn);
      }
      function ti(C, O) {
        if (O == "*") return (G.marked = "keyword"), k(ti);
        if (C == "variable") return B(O), k(ti);
        if (C == "(") return k(Jt, Tt(")"), se(Xn, ")"), j, Ae, Vt);
        if (v && O == "<") return k(Tt(">"), se(Vn, ">"), j, ti);
      }
      function Jl(C, O) {
        if (C == "keyword" || C == "variable")
          return (G.marked = "type"), k(Jl);
        if (O == "<") return k(Tt(">"), se(Vn, ">"), j);
      }
      function Xn(C, O) {
        return (
          O == "@" && k(Et, Xn),
          C == "spread"
            ? k(Xn)
            : v && yt(O)
              ? ((G.marked = "keyword"), k(Xn))
              : v && C == "this"
                ? k(wn, Kn)
                : z(on, wn, Kn)
        );
      }
      function au(C, O) {
        return C == "variable" ? xo(C, O) : Yn(C, O);
      }
      function xo(C, O) {
        if (C == "variable") return B(O), k(Yn);
      }
      function Yn(C, O) {
        if (O == "<") return k(Tt(">"), se(Vn, ">"), j, Yn);
        if (O == "extends" || O == "implements" || (v && C == ","))
          return (
            O == "implements" && (G.marked = "keyword"), k(v ? Yt : Et, Yn)
          );
        if (C == "{") return k(Tt("}"), Zn, j);
      }
      function Zn(C, O) {
        if (
          C == "async" ||
          (C == "variable" &&
            (O == "static" || O == "get" || O == "set" || (v && yt(O))) &&
            G.stream.match(/^\s+#?[\w$\xa1-\uffff]/, !1))
        )
          return (G.marked = "keyword"), k(Zn);
        if (C == "variable" || G.style == "keyword")
          return (G.marked = "property"), k(Ri, Zn);
        if (C == "number" || C == "string") return k(Ri, Zn);
        if (C == "[") return k(Et, wn, it("]"), Ri, Zn);
        if (O == "*") return (G.marked = "keyword"), k(Zn);
        if (v && C == "(") return z(ti, Zn);
        if (C == ";" || C == ",") return k(Zn);
        if (C == "}") return k();
        if (O == "@") return k(Et, Zn);
      }
      function Ri(C, O) {
        if (O == "!" || O == "?") return k(Ri);
        if (C == ":") return k(Yt, Kn);
        if (O == "=") return k(R);
        var et = G.state.lexical.prev,
          gt = et && et.info == "interface";
        return z(gt ? ti : qn);
      }
      function _o(C, O) {
        return O == "*"
          ? ((G.marked = "keyword"), k(Co, it(";")))
          : O == "default"
            ? ((G.marked = "keyword"), k(Et, it(";")))
            : C == "{"
              ? k(se(So, "}"), Co, it(";"))
              : z(at);
      }
      function So(C, O) {
        if (O == "as") return (G.marked = "keyword"), k(it("variable"));
        if (C == "variable") return z(R, So);
      }
      function ei(C) {
        return C == "string"
          ? k()
          : C == "("
            ? z(Et)
            : C == "."
              ? z(lt)
              : z(ko, dr, Co);
      }
      function ko(C, O) {
        return C == "{"
          ? rn(ko, "}")
          : (C == "variable" && B(O),
            O == "*" && (G.marked = "keyword"),
            k(Cs));
      }
      function dr(C) {
        if (C == ",") return k(ko, dr);
      }
      function Cs(C, O) {
        if (O == "as") return (G.marked = "keyword"), k(ko);
      }
      function Co(C, O) {
        if (O == "from") return (G.marked = "keyword"), k(Et);
      }
      function Te(C) {
        return C == "]" ? k() : z(se(R, "]"));
      }
      function Pt() {
        return z(Tt("form"), on, it("{"), Tt("}"), se($r, "}"), j, j);
      }
      function $r() {
        return z(on, Kn);
      }
      function Ts(C, O) {
        return (
          C.lastType == "operator" ||
          C.lastType == "," ||
          _.test(O.charAt(0)) ||
          /[,.]/.test(O.charAt(0))
        );
      }
      function $n(C, O, et) {
        return (
          (O.tokenize == $ &&
            /^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(
              O.lastType,
            )) ||
          (O.lastType == "quasi" &&
            /\{\s*$/.test(C.string.slice(0, C.pos - (et || 0))))
        );
      }
      return {
        startState: function (C) {
          var O = {
            tokenize: $,
            lastType: "sof",
            cc: [],
            lexical: new rt((C || 0) - c, 0, "block", !1),
            localVars: s.localVars,
            context: s.localVars && new At(null, null, !1),
            indented: C || 0,
          };
          return (
            s.globalVars &&
              typeof s.globalVars == "object" &&
              (O.globalVars = s.globalVars),
            O
          );
        },
        token: function (C, O) {
          if (
            (C.sol() &&
              (O.lexical.hasOwnProperty("align") || (O.lexical.align = !1),
              (O.indented = C.indentation()),
              Y(C, O)),
            O.tokenize != H && C.eatSpace())
          )
            return null;
          var et = O.tokenize(C, O);
          return A == "comment"
            ? et
            : ((O.lastType =
                A == "operator" && (T == "++" || T == "--") ? "incdec" : A),
              ht(O, et, A, T, C));
        },
        indent: function (C, O) {
          if (C.tokenize == H || C.tokenize == K) return r.Pass;
          if (C.tokenize != $) return 0;
          var et = O && O.charAt(0),
            gt = C.lexical,
            X;
          if (!/^\s*else\b/.test(O))
            for (var _t = C.cc.length - 1; _t >= 0; --_t) {
              var ce = C.cc[_t];
              if (ce == j) gt = gt.prev;
              else if (ce != wo && ce != Vt) break;
            }
          for (
            ;
            (gt.type == "stat" || gt.type == "form") &&
            (et == "}" ||
              ((X = C.cc[C.cc.length - 1]) &&
                (X == lt || X == ft) &&
                !/^[,\.=+\-*:?[\(]/.test(O)));
          )
            gt = gt.prev;
          f && gt.type == ")" && gt.prev.type == "stat" && (gt = gt.prev);
          var He = gt.type,
            sn = et == He;
          return He == "vardef"
            ? gt.indented +
                (C.lastType == "operator" || C.lastType == ","
                  ? gt.info.length + 1
                  : 0)
            : He == "form" && et == "{"
              ? gt.indented
              : He == "form"
                ? gt.indented + c
                : He == "stat"
                  ? gt.indented + (Ts(C, O) ? f || c : 0)
                  : gt.info == "switch" && !sn && s.doubleIndentSwitch != !1
                    ? gt.indented + (/^(?:case|default)\b/.test(O) ? c : 2 * c)
                    : gt.align
                      ? gt.column + (sn ? 0 : 1)
                      : gt.indented + (sn ? 0 : c);
        },
        electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
        blockCommentStart: d ? null : "/*",
        blockCommentEnd: d ? null : "*/",
        blockCommentContinue: d ? null : " * ",
        lineComment: d ? null : "//",
        fold: "brace",
        closeBrackets: "()[]{}''\"\"``",
        helperType: d ? "json" : "javascript",
        jsonldMode: h,
        jsonMode: d,
        expressionAllowed: $n,
        skipExpression: function (C) {
          ht(C, "atom", "atom", "true", new r.StringStream("", 2, null));
        },
      };
    }),
      r.registerHelper("wordChars", "javascript", /[\w$]/),
      r.defineMIME("text/javascript", "javascript"),
      r.defineMIME("text/ecmascript", "javascript"),
      r.defineMIME("application/javascript", "javascript"),
      r.defineMIME("application/x-javascript", "javascript"),
      r.defineMIME("application/ecmascript", "javascript"),
      r.defineMIME("application/json", { name: "javascript", json: !0 }),
      r.defineMIME("application/x-json", { name: "javascript", json: !0 }),
      r.defineMIME("application/manifest+json", {
        name: "javascript",
        json: !0,
      }),
      r.defineMIME("application/ld+json", { name: "javascript", jsonld: !0 }),
      r.defineMIME("text/typescript", { name: "javascript", typescript: !0 }),
      r.defineMIME("application/typescript", {
        name: "javascript",
        typescript: !0,
      });
  });
})();
var jat = Uat.exports,
  Gat = { exports: {} };
(function (t, e) {
  (function (r) {
    r(xs);
  })(function (r) {
    var o = {
        autoSelfClosers: {
          area: !0,
          base: !0,
          br: !0,
          col: !0,
          command: !0,
          embed: !0,
          frame: !0,
          hr: !0,
          img: !0,
          input: !0,
          keygen: !0,
          link: !0,
          meta: !0,
          param: !0,
          source: !0,
          track: !0,
          wbr: !0,
          menuitem: !0,
        },
        implicitlyClosed: {
          dd: !0,
          li: !0,
          optgroup: !0,
          option: !0,
          p: !0,
          rp: !0,
          rt: !0,
          tbody: !0,
          td: !0,
          tfoot: !0,
          th: !0,
          tr: !0,
        },
        contextGrabbers: {
          dd: { dd: !0, dt: !0 },
          dt: { dd: !0, dt: !0 },
          li: { li: !0 },
          option: { option: !0, optgroup: !0 },
          optgroup: { optgroup: !0 },
          p: {
            address: !0,
            article: !0,
            aside: !0,
            blockquote: !0,
            dir: !0,
            div: !0,
            dl: !0,
            fieldset: !0,
            footer: !0,
            form: !0,
            h1: !0,
            h2: !0,
            h3: !0,
            h4: !0,
            h5: !0,
            h6: !0,
            header: !0,
            hgroup: !0,
            hr: !0,
            menu: !0,
            nav: !0,
            ol: !0,
            p: !0,
            pre: !0,
            section: !0,
            table: !0,
            ul: !0,
          },
          rp: { rp: !0, rt: !0 },
          rt: { rp: !0, rt: !0 },
          tbody: { tbody: !0, tfoot: !0 },
          td: { td: !0, th: !0 },
          tfoot: { tbody: !0 },
          th: { td: !0, th: !0 },
          thead: { tbody: !0, tfoot: !0 },
          tr: { tr: !0 },
        },
        doNotIndent: { pre: !0 },
        allowUnquoted: !0,
        allowMissing: !0,
        caseFold: !0,
      },
      s = {
        autoSelfClosers: {},
        implicitlyClosed: {},
        contextGrabbers: {},
        doNotIndent: {},
        allowUnquoted: !1,
        allowMissing: !1,
        allowMissingTagName: !1,
        caseFold: !1,
      };
    r.defineMode("xml", function (c, f) {
      var h = c.indentUnit,
        d = {},
        g = f.htmlMode ? o : s;
      for (var v in g) d[v] = g[v];
      for (var v in f) d[v] = f[v];
      var y, w;
      function _(k, I) {
        function B(At) {
          return (I.tokenize = At), At(k, I);
        }
        var Q = k.next();
        if (Q == "<")
          return k.eat("!")
            ? k.eat("[")
              ? k.match("CDATA[")
                ? B(A("atom", "]]>"))
                : null
              : k.match("--")
                ? B(A("comment", "-->"))
                : k.match("DOCTYPE", !0, !0)
                  ? (k.eatWhile(/[\w\._\-]/), B(T(1)))
                  : null
            : k.eat("?")
              ? (k.eatWhile(/[\w\._\-]/),
                (I.tokenize = A("meta", "?>")),
                "meta")
              : ((y = k.eat("/") ? "closeTag" : "openTag"),
                (I.tokenize = N),
                "tag bracket");
        if (Q == "&") {
          var yt;
          return (
            k.eat("#")
              ? k.eat("x")
                ? (yt = k.eatWhile(/[a-fA-F\d]/) && k.eat(";"))
                : (yt = k.eatWhile(/[\d]/) && k.eat(";"))
              : (yt = k.eatWhile(/[\w\.\-:]/) && k.eat(";")),
            yt ? "atom" : "error"
          );
        } else return k.eatWhile(/[^&<]/), null;
      }
      _.isInText = !0;
      function N(k, I) {
        var B = k.next();
        if (B == ">" || (B == "/" && k.eat(">")))
          return (
            (I.tokenize = _),
            (y = B == ">" ? "endTag" : "selfcloseTag"),
            "tag bracket"
          );
        if (B == "=") return (y = "equals"), null;
        if (B == "<") {
          (I.tokenize = _), (I.state = K), (I.tagName = I.tagStart = null);
          var Q = I.tokenize(k, I);
          return Q ? Q + " tag error" : "tag error";
        } else
          return /[\'\"]/.test(B)
            ? ((I.tokenize = L(B)),
              (I.stringStartCol = k.column()),
              I.tokenize(k, I))
            : (k.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/), "word");
      }
      function L(k) {
        var I = function (B, Q) {
          for (; !B.eol(); )
            if (B.next() == k) {
              Q.tokenize = N;
              break;
            }
          return "string";
        };
        return (I.isInAttribute = !0), I;
      }
      function A(k, I) {
        return function (B, Q) {
          for (; !B.eol(); ) {
            if (B.match(I)) {
              Q.tokenize = _;
              break;
            }
            B.next();
          }
          return k;
        };
      }
      function T(k) {
        return function (I, B) {
          for (var Q; (Q = I.next()) != null; ) {
            if (Q == "<") return (B.tokenize = T(k + 1)), B.tokenize(I, B);
            if (Q == ">")
              if (k == 1) {
                B.tokenize = _;
                break;
              } else return (B.tokenize = T(k - 1)), B.tokenize(I, B);
          }
          return "meta";
        };
      }
      function M(k) {
        return k && k.toLowerCase();
      }
      function $(k, I, B) {
        (this.prev = k.context),
          (this.tagName = I || ""),
          (this.indent = k.indented),
          (this.startOfLine = B),
          (d.doNotIndent.hasOwnProperty(I) ||
            (k.context && k.context.noIndent)) &&
            (this.noIndent = !0);
      }
      function E(k) {
        k.context && (k.context = k.context.prev);
      }
      function H(k, I) {
        for (var B; ; ) {
          if (
            !k.context ||
            ((B = k.context.tagName),
            !d.contextGrabbers.hasOwnProperty(M(B)) ||
              !d.contextGrabbers[M(B)].hasOwnProperty(M(I)))
          )
            return;
          E(k);
        }
      }
      function K(k, I, B) {
        return k == "openTag"
          ? ((B.tagStart = I.column()), ct)
          : k == "closeTag"
            ? Y
            : K;
      }
      function ct(k, I, B) {
        return k == "word"
          ? ((B.tagName = I.current()), (w = "tag"), dt)
          : d.allowMissingTagName && k == "endTag"
            ? ((w = "tag bracket"), dt(k, I, B))
            : ((w = "error"), ct);
      }
      function Y(k, I, B) {
        if (k == "word") {
          var Q = I.current();
          return (
            B.context &&
              B.context.tagName != Q &&
              d.implicitlyClosed.hasOwnProperty(M(B.context.tagName)) &&
              E(B),
            (B.context && B.context.tagName == Q) || d.matchClosing === !1
              ? ((w = "tag"), nt)
              : ((w = "tag error"), rt)
          );
        } else
          return d.allowMissingTagName && k == "endTag"
            ? ((w = "tag bracket"), nt(k, I, B))
            : ((w = "error"), rt);
      }
      function nt(k, I, B) {
        return k != "endTag" ? ((w = "error"), nt) : (E(B), K);
      }
      function rt(k, I, B) {
        return (w = "error"), nt(k, I, B);
      }
      function dt(k, I, B) {
        if (k == "word") return (w = "attribute"), ht;
        if (k == "endTag" || k == "selfcloseTag") {
          var Q = B.tagName,
            yt = B.tagStart;
          return (
            (B.tagName = B.tagStart = null),
            k == "selfcloseTag" || d.autoSelfClosers.hasOwnProperty(M(Q))
              ? H(B, Q)
              : (H(B, Q), (B.context = new $(B, Q, yt == B.indented))),
            K
          );
        }
        return (w = "error"), dt;
      }
      function ht(k, I, B) {
        return k == "equals"
          ? G
          : (d.allowMissing || (w = "error"), dt(k, I, B));
      }
      function G(k, I, B) {
        return k == "string"
          ? z
          : k == "word" && d.allowUnquoted
            ? ((w = "string"), dt)
            : ((w = "error"), dt(k, I, B));
      }
      function z(k, I, B) {
        return k == "string" ? z : dt(k, I, B);
      }
      return {
        startState: function (k) {
          var I = {
            tokenize: _,
            state: K,
            indented: k || 0,
            tagName: null,
            tagStart: null,
            context: null,
          };
          return k != null && (I.baseIndent = k), I;
        },
        token: function (k, I) {
          if (
            (!I.tagName && k.sol() && (I.indented = k.indentation()),
            k.eatSpace())
          )
            return null;
          y = null;
          var B = I.tokenize(k, I);
          return (
            (B || y) &&
              B != "comment" &&
              ((w = null),
              (I.state = I.state(y || B, k, I)),
              w && (B = w == "error" ? B + " error" : w)),
            B
          );
        },
        indent: function (k, I, B) {
          var Q = k.context;
          if (k.tokenize.isInAttribute)
            return k.tagStart == k.indented
              ? k.stringStartCol + 1
              : k.indented + h;
          if (Q && Q.noIndent) return r.Pass;
          if (k.tokenize != N && k.tokenize != _)
            return B ? B.match(/^(\s*)/)[0].length : 0;
          if (k.tagName)
            return d.multilineTagIndentPastTag !== !1
              ? k.tagStart + k.tagName.length + 2
              : k.tagStart + h * (d.multilineTagIndentFactor || 1);
          if (d.alignCDATA && /<!\[CDATA\[/.test(I)) return 0;
          var yt = I && /^<(\/)?([\w_:\.-]*)/.exec(I);
          if (yt && yt[1])
            for (; Q; )
              if (Q.tagName == yt[2]) {
                Q = Q.prev;
                break;
              } else if (d.implicitlyClosed.hasOwnProperty(M(Q.tagName)))
                Q = Q.prev;
              else break;
          else if (yt)
            for (; Q; ) {
              var At = d.contextGrabbers[M(Q.tagName)];
              if (At && At.hasOwnProperty(M(yt[2]))) Q = Q.prev;
              else break;
            }
          for (; Q && Q.prev && !Q.startOfLine; ) Q = Q.prev;
          return Q ? Q.indent + h : k.baseIndent || 0;
        },
        electricInput: /<\/[\s\w:]+>$/,
        blockCommentStart: "<!--",
        blockCommentEnd: "-->",
        configuration: d.htmlMode ? "html" : "xml",
        helperType: d.htmlMode ? "html" : "xml",
        skipAttribute: function (k) {
          k.state == G && (k.state = dt);
        },
        xmlCurrentTag: function (k) {
          return k.tagName
            ? { name: k.tagName, close: k.type == "closeTag" }
            : null;
        },
        xmlCurrentContext: function (k) {
          for (var I = [], B = k.context; B; B = B.prev) I.push(B.tagName);
          return I.reverse();
        },
      };
    }),
      r.defineMIME("text/xml", "xml"),
      r.defineMIME("application/xml", "xml"),
      r.mimeModes.hasOwnProperty("text/html") ||
        r.defineMIME("text/html", { name: "xml", htmlMode: !0 });
  });
})();
var Vat = Gat.exports;
(function (t, e) {
  (function (r) {
    r(xs, Vat, jat);
  })(function (r) {
    function o(c, f, h, d) {
      (this.state = c), (this.mode = f), (this.depth = h), (this.prev = d);
    }
    function s(c) {
      return new o(
        r.copyState(c.mode, c.state),
        c.mode,
        c.depth,
        c.prev && s(c.prev),
      );
    }
    r.defineMode(
      "jsx",
      function (c, f) {
        var h = r.getMode(c, {
            name: "xml",
            allowMissing: !0,
            multilineTagIndentPastTag: !1,
            allowMissingTagName: !0,
          }),
          d = r.getMode(c, (f && f.base) || "javascript");
        function g(_) {
          var N = _.tagName;
          _.tagName = null;
          var L = h.indent(_, "", "");
          return (_.tagName = N), L;
        }
        function v(_, N) {
          return N.context.mode == h ? y(_, N, N.context) : w(_, N, N.context);
        }
        function y(_, N, L) {
          if (L.depth == 2)
            return (
              _.match(/^.*?\*\//) ? (L.depth = 1) : _.skipToEnd(), "comment"
            );
          if (_.peek() == "{") {
            h.skipAttribute(L.state);
            var A = g(L.state),
              T = L.state.context;
            if (T && _.match(/^[^>]*>\s*$/, !1)) {
              for (; T.prev && !T.startOfLine; ) T = T.prev;
              T.startOfLine
                ? (A -= c.indentUnit)
                : L.prev.state.lexical && (A = L.prev.state.lexical.indented);
            } else L.depth == 1 && (A += c.indentUnit);
            return (
              (N.context = new o(r.startState(d, A), d, 0, N.context)), null
            );
          }
          if (L.depth == 1) {
            if (_.peek() == "<")
              return (
                h.skipAttribute(L.state),
                (N.context = new o(
                  r.startState(h, g(L.state)),
                  h,
                  0,
                  N.context,
                )),
                null
              );
            if (_.match("//")) return _.skipToEnd(), "comment";
            if (_.match("/*")) return (L.depth = 2), v(_, N);
          }
          var M = h.token(_, L.state),
            $ = _.current(),
            E;
          return (
            /\btag\b/.test(M)
              ? />$/.test($)
                ? L.state.context
                  ? (L.depth = 0)
                  : (N.context = N.context.prev)
                : /^</.test($) && (L.depth = 1)
              : !M && (E = $.indexOf("{")) > -1 && _.backUp($.length - E),
            M
          );
        }
        function w(_, N, L) {
          if (
            _.peek() == "<" &&
            !_.match(/^<([^<>]|<[^>]*>)+,\s*>/, !1) &&
            d.expressionAllowed(_, L.state)
          )
            return (
              (N.context = new o(
                r.startState(h, d.indent(L.state, "", "")),
                h,
                0,
                N.context,
              )),
              d.skipExpression(L.state),
              null
            );
          var A = d.token(_, L.state);
          if (!A && L.depth != null) {
            var T = _.current();
            T == "{"
              ? L.depth++
              : T == "}" && --L.depth == 0 && (N.context = N.context.prev);
          }
          return A;
        }
        return {
          startState: function () {
            return { context: new o(r.startState(d), d) };
          },
          copyState: function (_) {
            return { context: s(_.context) };
          },
          token: v,
          indent: function (_, N, L) {
            return _.context.mode.indent(_.context.state, N, L);
          },
          innerMode: function (_) {
            return _.context;
          },
        };
      },
      "xml",
      "javascript",
    ),
      r.defineMIME("text/jsx", "jsx"),
      r.defineMIME("text/typescript-jsx", {
        name: "jsx",
        base: { name: "javascript", typescript: !0 },
      });
  });
})();
(function (t, e) {
  (function (r) {
    r(xs);
  })(function (r) {
    r.defineOption("placeholder", "", function (g, v, y) {
      var w = y && y != r.Init;
      if (v && !w)
        g.on("blur", f),
          g.on("change", h),
          g.on("swapDoc", h),
          r.on(
            g.getInputField(),
            "compositionupdate",
            (g.state.placeholderCompose = function () {
              c(g);
            }),
          ),
          h(g);
      else if (!v && w) {
        g.off("blur", f),
          g.off("change", h),
          g.off("swapDoc", h),
          r.off(
            g.getInputField(),
            "compositionupdate",
            g.state.placeholderCompose,
          ),
          o(g);
        var _ = g.getWrapperElement();
        _.className = _.className.replace(" CodeMirror-empty", "");
      }
      v && !g.hasFocus() && f(g);
    });
    function o(g) {
      g.state.placeholder &&
        (g.state.placeholder.parentNode.removeChild(g.state.placeholder),
        (g.state.placeholder = null));
    }
    function s(g) {
      o(g);
      var v = (g.state.placeholder = document.createElement("pre"));
      (v.style.cssText = "height: 0; overflow: visible"),
        (v.style.direction = g.getOption("direction")),
        (v.className = "CodeMirror-placeholder CodeMirror-line-like");
      var y = g.getOption("placeholder");
      typeof y == "string" && (y = document.createTextNode(y)),
        v.appendChild(y),
        g.display.lineSpace.insertBefore(v, g.display.lineSpace.firstChild);
    }
    function c(g) {
      setTimeout(function () {
        var v = !1;
        if (g.lineCount() == 1) {
          var y = g.getInputField();
          v =
            y.nodeName == "TEXTAREA"
              ? !g.getLine(0).length
              : !/[^\u200b]/.test(
                  y.querySelector(".CodeMirror-line").textContent,
                );
        }
        v ? s(g) : o(g);
      }, 20);
    }
    function f(g) {
      d(g) && s(g);
    }
    function h(g) {
      var v = g.getWrapperElement(),
        y = d(g);
      (v.className =
        v.className.replace(" CodeMirror-empty", "") +
        (y ? " CodeMirror-empty" : "")),
        y ? s(g) : o(g);
    }
    function d(g) {
      return g.lineCount() === 1 && g.getLine(0) === "";
    }
  });
})();
(function (t, e) {
  (function (r) {
    r(xs);
  })(function (r) {
    function o(f, h, d) {
      (this.orientation = h),
        (this.scroll = d),
        (this.screen = this.total = this.size = 1),
        (this.pos = 0),
        (this.node = document.createElement("div")),
        (this.node.className = f + "-" + h),
        (this.inner = this.node.appendChild(document.createElement("div")));
      var g = this;
      r.on(this.inner, "mousedown", function (y) {
        if (y.which != 1) return;
        r.e_preventDefault(y);
        var w = g.orientation == "horizontal" ? "pageX" : "pageY",
          _ = y[w],
          N = g.pos;
        function L() {
          r.off(document, "mousemove", A), r.off(document, "mouseup", L);
        }
        function A(T) {
          if (T.which != 1) return L();
          g.moveTo(N + (T[w] - _) * (g.total / g.size));
        }
        r.on(document, "mousemove", A), r.on(document, "mouseup", L);
      }),
        r.on(this.node, "click", function (y) {
          r.e_preventDefault(y);
          var w = g.inner.getBoundingClientRect(),
            _;
          g.orientation == "horizontal"
            ? (_ = y.clientX < w.left ? -1 : y.clientX > w.right ? 1 : 0)
            : (_ = y.clientY < w.top ? -1 : y.clientY > w.bottom ? 1 : 0),
            g.moveTo(g.pos + _ * g.screen);
        });
      function v(y) {
        var w =
            r.wheelEventPixels(y)[g.orientation == "horizontal" ? "x" : "y"],
          _ = g.pos;
        g.moveTo(g.pos + w), g.pos != _ && r.e_preventDefault(y);
      }
      r.on(this.node, "mousewheel", v), r.on(this.node, "DOMMouseScroll", v);
    }
    (o.prototype.setPos = function (f, h) {
      return (
        f < 0 && (f = 0),
        f > this.total - this.screen && (f = this.total - this.screen),
        !h && f == this.pos
          ? !1
          : ((this.pos = f),
            (this.inner.style[
              this.orientation == "horizontal" ? "left" : "top"
            ] = f * (this.size / this.total) + "px"),
            !0)
      );
    }),
      (o.prototype.moveTo = function (f) {
        this.setPos(f) && this.scroll(f, this.orientation);
      });
    var s = 10;
    o.prototype.update = function (f, h, d) {
      var g = this.screen != h || this.total != f || this.size != d;
      g && ((this.screen = h), (this.total = f), (this.size = d));
      var v = this.screen * (this.size / this.total);
      v < s && ((this.size -= s - v), (v = s)),
        (this.inner.style[
          this.orientation == "horizontal" ? "width" : "height"
        ] = v + "px"),
        this.setPos(this.pos, g);
    };
    function c(f, h, d) {
      (this.addClass = f),
        (this.horiz = new o(f, "horizontal", d)),
        h(this.horiz.node),
        (this.vert = new o(f, "vertical", d)),
        h(this.vert.node),
        (this.width = null);
    }
    (c.prototype.update = function (f) {
      if (this.width == null) {
        var h = window.getComputedStyle
          ? window.getComputedStyle(this.horiz.node)
          : this.horiz.node.currentStyle;
        h && (this.width = parseInt(h.height));
      }
      var d = this.width || 0,
        g = f.scrollWidth > f.clientWidth + 1,
        v = f.scrollHeight > f.clientHeight + 1;
      return (
        (this.vert.node.style.display = v ? "block" : "none"),
        (this.horiz.node.style.display = g ? "block" : "none"),
        v &&
          (this.vert.update(
            f.scrollHeight,
            f.clientHeight,
            f.viewHeight - (g ? d : 0),
          ),
          (this.vert.node.style.bottom = g ? d + "px" : "0")),
        g &&
          (this.horiz.update(
            f.scrollWidth,
            f.clientWidth,
            f.viewWidth - (v ? d : 0) - f.barLeft,
          ),
          (this.horiz.node.style.right = v ? d + "px" : "0"),
          (this.horiz.node.style.left = f.barLeft + "px")),
        { right: v ? d : 0, bottom: g ? d : 0 }
      );
    }),
      (c.prototype.setScrollTop = function (f) {
        this.vert.setPos(f);
      }),
      (c.prototype.setScrollLeft = function (f) {
        this.horiz.setPos(f);
      }),
      (c.prototype.clear = function () {
        var f = this.horiz.node.parentNode;
        f.removeChild(this.horiz.node), f.removeChild(this.vert.node);
      }),
      (r.scrollbarModel.simple = function (f, h) {
        return new c("CodeMirror-simplescroll", f, h);
      }),
      (r.scrollbarModel.overlay = function (f, h) {
        return new c("CodeMirror-overlayscroll", f, h);
      });
  });
})();
function Kat(t, e, r = {}) {
  const o = Wat.fromTextArea(t.value, {
    theme: "vars",
    ...r,
    scrollbarStyle: "simple",
  });
  let s = !1;
  return (
    o.on("change", () => {
      if (s) {
        s = !1;
        return;
      }
      e.value = o.getValue();
    }),
    Fe(
      e,
      (c) => {
        if (c !== o.getValue()) {
          s = !0;
          const f = o.listSelections();
          o.replaceRange(
            c,
            o.posFromIndex(0),
            o.posFromIndex(Number.POSITIVE_INFINITY),
          ),
            o.setSelections(f);
        }
      },
      { immediate: !0 },
    ),
    Th(o)
  );
}
const Xat = {
    relative: "",
    "font-mono": "",
    "text-sm": "",
    class: "codemirror-scrolls",
  },
  Ab = fe({
    __name: "CodeMirror",
    props: zf({ mode: {}, readOnly: { type: Boolean } }, { modelValue: {} }),
    emits: zf(["save"], ["update:modelValue"]),
    setup(t, { expose: e, emit: r }) {
      const o = r,
        s = _0(t, "modelValue"),
        c = j_(),
        f = {
          js: "javascript",
          mjs: "javascript",
          cjs: "javascript",
          ts: { name: "javascript", typescript: !0 },
          mts: { name: "javascript", typescript: !0 },
          cts: { name: "javascript", typescript: !0 },
          jsx: { name: "javascript", jsx: !0 },
          tsx: { name: "javascript", typescript: !0, jsx: !0 },
        },
        h = Zt(),
        d = bs();
      return (
        e({ cm: d }),
        ws(async () => {
          (d.value = Kat(h, s, {
            ...c,
            mode: f[t.mode || ""] || t.mode,
            readOnly: t.readOnly ? !0 : void 0,
            extraKeys: {
              "Cmd-S": function (g) {
                o("save", g.getValue());
              },
              "Ctrl-S": function (g) {
                o("save", g.getValue());
              },
            },
          })),
            d.value.setSize("100%", "100%"),
            d.value.clearHistory(),
            setTimeout(() => d.value.refresh(), 100);
        }),
        (g, v) => (
          st(),
          St("div", Xat, [tt("textarea", { ref_key: "el", ref: h }, null, 512)])
        )
      );
    },
  }),
  Yat = fe({
    __name: "ViewEditor",
    props: { file: {} },
    emits: ["draft"],
    setup(t, { emit: e }) {
      const r = t,
        o = e,
        s = Zt(""),
        c = bs(void 0),
        f = Zt(!1);
      Fe(
        () => r.file,
        async () => {
          var $;
          if (!r.file || !(($ = r.file) != null && $.filepath)) {
            (s.value = ""), (c.value = s.value), (f.value = !1);
            return;
          }
          (s.value = (await De.rpc.readTestFile(r.file.filepath)) || ""),
            (c.value = s.value),
            (f.value = !1);
        },
        { immediate: !0 },
      );
      const h = xt(() => {
          var $, E;
          return (
            ((E = ($ = r.file) == null ? void 0 : $.filepath) == null
              ? void 0
              : E.split(/\./g).pop()) || "js"
          );
        }),
        d = Zt(),
        g = xt(() => {
          var $;
          return ($ = d.value) == null ? void 0 : $.cm;
        }),
        v = xt(() => {
          var $;
          return (
            (($ = r.file) == null
              ? void 0
              : $.tasks.filter((E) => {
                  var H;
                  return ((H = E.result) == null ? void 0 : H.state) === "fail";
                })) || []
          );
        }),
        y = [],
        w = [],
        _ = [],
        N = Zt(!1);
      function L() {
        _.forEach(([$, E, H]) => {
          $.removeEventListener("click", E), H();
        }),
          (_.length = 0);
      }
      Blt(d, () => {
        var $;
        ($ = g.value) == null || $.refresh();
      });
      function A() {
        f.value = c.value !== g.value.getValue();
      }
      Fe(
        f,
        ($) => {
          o("draft", $);
        },
        { immediate: !0 },
      );
      function T($) {
        const E = (($ == null ? void 0 : $.stacks) || []).filter((rt) => {
            var dt;
            return (
              rt.file &&
              rt.file === ((dt = r.file) == null ? void 0 : dt.filepath)
            );
          }),
          H = E == null ? void 0 : E[0];
        if (!H) return;
        const K = document.createElement("div");
        K.className = "op80 flex gap-x-2 items-center";
        const ct = document.createElement("pre");
        (ct.className = "c-red-600 dark:c-red-400"),
          (ct.textContent = `${" ".repeat(H.column)}^ ${($ == null ? void 0 : $.nameStr) || $.name}: ${($ == null ? void 0 : $.message) || ""}`),
          K.appendChild(ct);
        const Y = document.createElement("span");
        (Y.className =
          "i-carbon-launch c-red-600 dark:c-red-400 hover:cursor-pointer min-w-1em min-h-1em"),
          (Y.tabIndex = 0),
          (Y.ariaLabel = "Open in Editor"),
          by(Y, { content: "Open in Editor", placement: "bottom" }, !1);
        const nt = async () => {
          await ib(H.file, H.line, H.column);
        };
        K.appendChild(Y),
          _.push([Y, nt, () => Yh(Y)]),
          w.push(g.value.addLineClass(H.line - 1, "wrap", "bg-red-500/10")),
          y.push(g.value.addLineWidget(H.line - 1, K));
      }
      Fe(
        [g, v],
        ([$]) => {
          if (!$) {
            L();
            return;
          }
          setTimeout(() => {
            L(),
              y.forEach((E) => E.clear()),
              w.forEach((E) => {
                var H;
                return (H = g.value) == null
                  ? void 0
                  : H.removeLineClass(E, "wrap");
              }),
              (y.length = 0),
              (w.length = 0),
              $.on("changes", A),
              v.value.forEach((E) => {
                var H, K;
                (K = (H = E.result) == null ? void 0 : H.errors) == null ||
                  K.forEach(T);
              }),
              N.value || $.clearHistory();
          }, 100);
        },
        { flush: "post" },
      );
      async function M($) {
        (N.value = !0),
          await De.rpc.saveTestFile(r.file.filepath, $),
          (c.value = $),
          (f.value = !1);
      }
      return ($, E) => {
        const H = Ab;
        return (
          st(),
          te(
            H,
            Li(
              {
                ref_key: "editor",
                ref: d,
                modelValue: U(s),
                "onUpdate:modelValue":
                  E[0] || (E[0] = (K) => (Le(s) ? (s.value = K) : null)),
                "h-full": "",
              },
              { lineNumbers: !0 },
              { mode: U(h), "data-testid": "code-mirror", onSave: M },
            ),
            null,
            16,
            ["modelValue", "mode"],
          )
        );
      };
    },
  }),
  Zat = fe({
    __name: "Modal",
    props: zf(
      { direction: { default: "bottom" } },
      { modelValue: { type: Boolean, default: !1 } },
    ),
    emits: ["update:modelValue"],
    setup(t) {
      const e = _0(t, "modelValue"),
        r = xt(() => {
          switch (t.direction) {
            case "bottom":
              return "bottom-0 left-0 right-0 border-t";
            case "top":
              return "top-0 left-0 right-0 border-b";
            case "left":
              return "bottom-0 left-0 top-0 border-r";
            case "right":
              return "bottom-0 top-0 right-0 border-l";
            default:
              return "";
          }
        }),
        o = xt(() => {
          switch (t.direction) {
            case "bottom":
              return "translateY(100%)";
            case "top":
              return "translateY(-100%)";
            case "left":
              return "translateX(-100%)";
            case "right":
              return "translateX(100%)";
            default:
              return "";
          }
        }),
        s = () => (e.value = !1);
      return (c, f) => (
        st(),
        St(
          "div",
          {
            class: ge([
              "fixed inset-0 z-40",
              e.value ? "" : "pointer-events-none",
            ]),
          },
          [
            tt(
              "div",
              {
                class: ge([
                  "bg-base inset-0 absolute transition-opacity duration-500 ease-out",
                  e.value ? "opacity-50" : "opacity-0",
                ]),
                onClick: s,
              },
              null,
              2,
            ),
            tt(
              "div",
              {
                class: ge([
                  "bg-base border-base absolute transition-all duration-200 ease-out scrolls",
                  [U(r)],
                ]),
                style: An(e.value ? {} : { transform: U(o) }),
              },
              [Gn(c.$slots, "default")],
              6,
            ),
          ],
          2,
        )
      );
    },
  }),
  Qat = ["aria-label", "opacity", "disabled", "hover"],
  _s = fe({
    __name: "IconButton",
    props: { icon: {}, title: {}, disabled: { type: Boolean } },
    setup(t) {
      return (e, r) => (
        st(),
        St(
          "button",
          {
            "aria-label": e.title,
            role: "button",
            opacity: e.disabled ? 10 : 70,
            rounded: "",
            disabled: e.disabled,
            hover: e.disabled ? "" : "bg-active op100",
            class: "w-1.4em h-1.4em flex",
          },
          [
            Gn(e.$slots, "default", {}, () => [
              tt("div", { class: ge(e.icon), ma: "" }, null, 2),
            ]),
          ],
          8,
          Qat,
        )
      );
    },
  }),
  Jat = {
    "w-350": "",
    "max-w-screen": "",
    "h-full": "",
    flex: "",
    "flex-col": "",
  },
  tct = { "p-4": "", relative: "" },
  ect = tt("p", null, "Module Info", -1),
  nct = { op50: "", "font-mono": "", "text-sm": "" },
  rct = { key: 0, "p-5": "" },
  ict = {
    grid: "~ cols-2 rows-[min-content_auto]",
    "overflow-hidden": "",
    "flex-auto": "",
  },
  oct = tt(
    "div",
    { p: "x3 y-1", "bg-overlay": "", border: "base b t r" },
    " Source ",
    -1,
  ),
  sct = tt(
    "div",
    { p: "x3 y-1", "bg-overlay": "", border: "base b t" },
    " Transformed ",
    -1,
  ),
  lct = { key: 0 },
  act = { p: "x3 y-1", "bg-overlay": "", border: "base b t" },
  cct = fe({
    __name: "ModuleTransformResultView",
    props: { id: {} },
    emits: ["close"],
    setup(t, { emit: e }) {
      const r = t,
        o = e,
        s = Nlt(() => De.rpc.getTransformResult(r.id)),
        c = xt(() => {
          var g;
          return ((g = r.id) == null ? void 0 : g.split(/\./g).pop()) || "js";
        }),
        f = xt(() => {
          var g, v;
          return (
            ((v = (g = s.value) == null ? void 0 : g.source) == null
              ? void 0
              : v.trim()) || ""
          );
        }),
        h = xt(() => {
          var g, v;
          return (
            ((v = (g = s.value) == null ? void 0 : g.code) == null
              ? void 0
              : v.replace(/\/\/# sourceMappingURL=.*\n/, "").trim()) || ""
          );
        }),
        d = xt(() => {
          var g, v, y, w;
          return {
            mappings:
              ((v = (g = s.value) == null ? void 0 : g.map) == null
                ? void 0
                : v.mappings) ?? "",
            version:
              (w = (y = s.value) == null ? void 0 : y.map) == null
                ? void 0
                : w.version,
          };
        });
      return (
        $lt("Escape", () => {
          o("close");
        }),
        (g, v) => {
          const y = _s,
            w = Ab;
          return (
            st(),
            St("div", Jat, [
              tt("div", tct, [
                ect,
                tt("p", nct, Ut(g.id), 1),
                It(y, {
                  icon: "i-carbon-close",
                  absolute: "",
                  "top-5px": "",
                  "right-5px": "",
                  "text-2xl": "",
                  onClick: v[0] || (v[0] = (_) => o("close")),
                }),
              ]),
              U(s)
                ? (st(),
                  St(
                    ne,
                    { key: 1 },
                    [
                      tt("div", ict, [
                        oct,
                        sct,
                        It(
                          w,
                          Li(
                            {
                              "h-full": "",
                              "model-value": U(f),
                              "read-only": "",
                            },
                            { lineNumbers: !0 },
                            { mode: U(c) },
                          ),
                          null,
                          16,
                          ["model-value", "mode"],
                        ),
                        It(
                          w,
                          Li(
                            {
                              "h-full": "",
                              "model-value": U(h),
                              "read-only": "",
                            },
                            { lineNumbers: !0 },
                            { mode: U(c) },
                          ),
                          null,
                          16,
                          ["model-value", "mode"],
                        ),
                      ]),
                      U(d).mappings !== ""
                        ? (st(),
                          St("div", lct, [
                            tt(
                              "div",
                              act,
                              " Source map (v" + Ut(U(d).version) + ") ",
                              1,
                            ),
                            It(
                              w,
                              Li(
                                {
                                  "model-value": U(d).mappings,
                                  "read-only": "",
                                },
                                { lineNumbers: !0 },
                                { mode: U(c) },
                              ),
                              null,
                              16,
                              ["model-value", "mode"],
                            ),
                          ]))
                        : Gt("", !0),
                    ],
                    64,
                  ))
                : (st(),
                  St(
                    "div",
                    rct,
                    " No transform result found for this module. ",
                  )),
            ])
          );
        }
      );
    },
  });
function uct(t, e) {
  let r;
  return (...o) => {
    r !== void 0 && clearTimeout(r), (r = setTimeout(() => t(...o), e));
  };
}
var oh = "http://www.w3.org/1999/xhtml";
const hm = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: oh,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/",
};
function iu(t) {
  var e = (t += ""),
    r = e.indexOf(":");
  return (
    r >= 0 && (e = t.slice(0, r)) !== "xmlns" && (t = t.slice(r + 1)),
    hm.hasOwnProperty(e) ? { space: hm[e], local: t } : t
  );
}
function fct(t) {
  return function () {
    var e = this.ownerDocument,
      r = this.namespaceURI;
    return r === oh && e.documentElement.namespaceURI === oh
      ? e.createElement(t)
      : e.createElementNS(r, t);
  };
}
function hct(t) {
  return function () {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Mb(t) {
  var e = iu(t);
  return (e.local ? hct : fct)(e);
}
function dct() {}
function ld(t) {
  return t == null
    ? dct
    : function () {
        return this.querySelector(t);
      };
}
function pct(t) {
  typeof t != "function" && (t = ld(t));
  for (var e = this._groups, r = e.length, o = new Array(r), s = 0; s < r; ++s)
    for (
      var c = e[s], f = c.length, h = (o[s] = new Array(f)), d, g, v = 0;
      v < f;
      ++v
    )
      (d = c[v]) &&
        (g = t.call(d, d.__data__, v, c)) &&
        ("__data__" in d && (g.__data__ = d.__data__), (h[v] = g));
  return new In(o, this._parents);
}
function gct(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function vct() {
  return [];
}
function Nb(t) {
  return t == null
    ? vct
    : function () {
        return this.querySelectorAll(t);
      };
}
function mct(t) {
  return function () {
    return gct(t.apply(this, arguments));
  };
}
function yct(t) {
  typeof t == "function" ? (t = mct(t)) : (t = Nb(t));
  for (var e = this._groups, r = e.length, o = [], s = [], c = 0; c < r; ++c)
    for (var f = e[c], h = f.length, d, g = 0; g < h; ++g)
      (d = f[g]) && (o.push(t.call(d, d.__data__, g, f)), s.push(d));
  return new In(o, s);
}
function Pb(t) {
  return function () {
    return this.matches(t);
  };
}
function $b(t) {
  return function (e) {
    return e.matches(t);
  };
}
var bct = Array.prototype.find;
function wct(t) {
  return function () {
    return bct.call(this.children, t);
  };
}
function xct() {
  return this.firstElementChild;
}
function _ct(t) {
  return this.select(t == null ? xct : wct(typeof t == "function" ? t : $b(t)));
}
var Sct = Array.prototype.filter;
function kct() {
  return Array.from(this.children);
}
function Cct(t) {
  return function () {
    return Sct.call(this.children, t);
  };
}
function Tct(t) {
  return this.selectAll(
    t == null ? kct : Cct(typeof t == "function" ? t : $b(t)),
  );
}
function Ect(t) {
  typeof t != "function" && (t = Pb(t));
  for (var e = this._groups, r = e.length, o = new Array(r), s = 0; s < r; ++s)
    for (var c = e[s], f = c.length, h = (o[s] = []), d, g = 0; g < f; ++g)
      (d = c[g]) && t.call(d, d.__data__, g, c) && h.push(d);
  return new In(o, this._parents);
}
function Ob(t) {
  return new Array(t.length);
}
function Lct() {
  return new In(this._enter || this._groups.map(Ob), this._parents);
}
function Ec(t, e) {
  (this.ownerDocument = t.ownerDocument),
    (this.namespaceURI = t.namespaceURI),
    (this._next = null),
    (this._parent = t),
    (this.__data__ = e);
}
Ec.prototype = {
  constructor: Ec,
  appendChild: function (t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function (t, e) {
    return this._parent.insertBefore(t, e);
  },
  querySelector: function (t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function (t) {
    return this._parent.querySelectorAll(t);
  },
};
function Act(t) {
  return function () {
    return t;
  };
}
function Mct(t, e, r, o, s, c) {
  for (var f = 0, h, d = e.length, g = c.length; f < g; ++f)
    (h = e[f]) ? ((h.__data__ = c[f]), (o[f] = h)) : (r[f] = new Ec(t, c[f]));
  for (; f < d; ++f) (h = e[f]) && (s[f] = h);
}
function Nct(t, e, r, o, s, c, f) {
  var h,
    d,
    g = new Map(),
    v = e.length,
    y = c.length,
    w = new Array(v),
    _;
  for (h = 0; h < v; ++h)
    (d = e[h]) &&
      ((w[h] = _ = f.call(d, d.__data__, h, e) + ""),
      g.has(_) ? (s[h] = d) : g.set(_, d));
  for (h = 0; h < y; ++h)
    (_ = f.call(t, c[h], h, c) + ""),
      (d = g.get(_))
        ? ((o[h] = d), (d.__data__ = c[h]), g.delete(_))
        : (r[h] = new Ec(t, c[h]));
  for (h = 0; h < v; ++h) (d = e[h]) && g.get(w[h]) === d && (s[h] = d);
}
function Pct(t) {
  return t.__data__;
}
function $ct(t, e) {
  if (!arguments.length) return Array.from(this, Pct);
  var r = e ? Nct : Mct,
    o = this._parents,
    s = this._groups;
  typeof t != "function" && (t = Act(t));
  for (
    var c = s.length,
      f = new Array(c),
      h = new Array(c),
      d = new Array(c),
      g = 0;
    g < c;
    ++g
  ) {
    var v = o[g],
      y = s[g],
      w = y.length,
      _ = Oct(t.call(v, v && v.__data__, g, o)),
      N = _.length,
      L = (h[g] = new Array(N)),
      A = (f[g] = new Array(N)),
      T = (d[g] = new Array(w));
    r(v, y, L, A, T, _, e);
    for (var M = 0, $ = 0, E, H; M < N; ++M)
      if ((E = L[M])) {
        for (M >= $ && ($ = M + 1); !(H = A[$]) && ++$ < N; );
        E._next = H || null;
      }
  }
  return (f = new In(f, o)), (f._enter = h), (f._exit = d), f;
}
function Oct(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Dct() {
  return new In(this._exit || this._groups.map(Ob), this._parents);
}
function Rct(t, e, r) {
  var o = this.enter(),
    s = this,
    c = this.exit();
  return (
    typeof t == "function"
      ? ((o = t(o)), o && (o = o.selection()))
      : (o = o.append(t + "")),
    e != null && ((s = e(s)), s && (s = s.selection())),
    r == null ? c.remove() : r(c),
    o && s ? o.merge(s).order() : s
  );
}
function zct(t) {
  for (
    var e = t.selection ? t.selection() : t,
      r = this._groups,
      o = e._groups,
      s = r.length,
      c = o.length,
      f = Math.min(s, c),
      h = new Array(s),
      d = 0;
    d < f;
    ++d
  )
    for (
      var g = r[d], v = o[d], y = g.length, w = (h[d] = new Array(y)), _, N = 0;
      N < y;
      ++N
    )
      (_ = g[N] || v[N]) && (w[N] = _);
  for (; d < s; ++d) h[d] = r[d];
  return new In(h, this._parents);
}
function Fct() {
  for (var t = this._groups, e = -1, r = t.length; ++e < r; )
    for (var o = t[e], s = o.length - 1, c = o[s], f; --s >= 0; )
      (f = o[s]) &&
        (c &&
          f.compareDocumentPosition(c) ^ 4 &&
          c.parentNode.insertBefore(f, c),
        (c = f));
  return this;
}
function Ict(t) {
  t || (t = Hct);
  function e(y, w) {
    return y && w ? t(y.__data__, w.__data__) : !y - !w;
  }
  for (
    var r = this._groups, o = r.length, s = new Array(o), c = 0;
    c < o;
    ++c
  ) {
    for (
      var f = r[c], h = f.length, d = (s[c] = new Array(h)), g, v = 0;
      v < h;
      ++v
    )
      (g = f[v]) && (d[v] = g);
    d.sort(e);
  }
  return new In(s, this._parents).order();
}
function Hct(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function qct() {
  var t = arguments[0];
  return (arguments[0] = this), t.apply(null, arguments), this;
}
function Bct() {
  return Array.from(this);
}
function Wct() {
  for (var t = this._groups, e = 0, r = t.length; e < r; ++e)
    for (var o = t[e], s = 0, c = o.length; s < c; ++s) {
      var f = o[s];
      if (f) return f;
    }
  return null;
}
function Uct() {
  let t = 0;
  for (const e of this) ++t;
  return t;
}
function jct() {
  return !this.node();
}
function Gct(t) {
  for (var e = this._groups, r = 0, o = e.length; r < o; ++r)
    for (var s = e[r], c = 0, f = s.length, h; c < f; ++c)
      (h = s[c]) && t.call(h, h.__data__, c, s);
  return this;
}
function Vct(t) {
  return function () {
    this.removeAttribute(t);
  };
}
function Kct(t) {
  return function () {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Xct(t, e) {
  return function () {
    this.setAttribute(t, e);
  };
}
function Yct(t, e) {
  return function () {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function Zct(t, e) {
  return function () {
    var r = e.apply(this, arguments);
    r == null ? this.removeAttribute(t) : this.setAttribute(t, r);
  };
}
function Qct(t, e) {
  return function () {
    var r = e.apply(this, arguments);
    r == null
      ? this.removeAttributeNS(t.space, t.local)
      : this.setAttributeNS(t.space, t.local, r);
  };
}
function Jct(t, e) {
  var r = iu(t);
  if (arguments.length < 2) {
    var o = this.node();
    return r.local ? o.getAttributeNS(r.space, r.local) : o.getAttribute(r);
  }
  return this.each(
    (e == null
      ? r.local
        ? Kct
        : Vct
      : typeof e == "function"
        ? r.local
          ? Qct
          : Zct
        : r.local
          ? Yct
          : Xct)(r, e),
  );
}
function Db(t) {
  return (
    (t.ownerDocument && t.ownerDocument.defaultView) ||
    (t.document && t) ||
    t.defaultView
  );
}
function tut(t) {
  return function () {
    this.style.removeProperty(t);
  };
}
function eut(t, e, r) {
  return function () {
    this.style.setProperty(t, e, r);
  };
}
function nut(t, e, r) {
  return function () {
    var o = e.apply(this, arguments);
    o == null ? this.style.removeProperty(t) : this.style.setProperty(t, o, r);
  };
}
function rut(t, e, r) {
  return arguments.length > 1
    ? this.each(
        (e == null ? tut : typeof e == "function" ? nut : eut)(t, e, r ?? ""),
      )
    : gs(this.node(), t);
}
function gs(t, e) {
  return (
    t.style.getPropertyValue(e) ||
    Db(t).getComputedStyle(t, null).getPropertyValue(e)
  );
}
function iut(t) {
  return function () {
    delete this[t];
  };
}
function out(t, e) {
  return function () {
    this[t] = e;
  };
}
function sut(t, e) {
  return function () {
    var r = e.apply(this, arguments);
    r == null ? delete this[t] : (this[t] = r);
  };
}
function lut(t, e) {
  return arguments.length > 1
    ? this.each((e == null ? iut : typeof e == "function" ? sut : out)(t, e))
    : this.node()[t];
}
function Rb(t) {
  return t.trim().split(/^|\s+/);
}
function ad(t) {
  return t.classList || new zb(t);
}
function zb(t) {
  (this._node = t), (this._names = Rb(t.getAttribute("class") || ""));
}
zb.prototype = {
  add: function (t) {
    var e = this._names.indexOf(t);
    e < 0 &&
      (this._names.push(t),
      this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function (t) {
    var e = this._names.indexOf(t);
    e >= 0 &&
      (this._names.splice(e, 1),
      this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function (t) {
    return this._names.indexOf(t) >= 0;
  },
};
function Fb(t, e) {
  for (var r = ad(t), o = -1, s = e.length; ++o < s; ) r.add(e[o]);
}
function Ib(t, e) {
  for (var r = ad(t), o = -1, s = e.length; ++o < s; ) r.remove(e[o]);
}
function aut(t) {
  return function () {
    Fb(this, t);
  };
}
function cut(t) {
  return function () {
    Ib(this, t);
  };
}
function uut(t, e) {
  return function () {
    (e.apply(this, arguments) ? Fb : Ib)(this, t);
  };
}
function fut(t, e) {
  var r = Rb(t + "");
  if (arguments.length < 2) {
    for (var o = ad(this.node()), s = -1, c = r.length; ++s < c; )
      if (!o.contains(r[s])) return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? uut : e ? aut : cut)(r, e));
}
function hut() {
  this.textContent = "";
}
function dut(t) {
  return function () {
    this.textContent = t;
  };
}
function put(t) {
  return function () {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function gut(t) {
  return arguments.length
    ? this.each(t == null ? hut : (typeof t == "function" ? put : dut)(t))
    : this.node().textContent;
}
function vut() {
  this.innerHTML = "";
}
function mut(t) {
  return function () {
    this.innerHTML = t;
  };
}
function yut(t) {
  return function () {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function but(t) {
  return arguments.length
    ? this.each(t == null ? vut : (typeof t == "function" ? yut : mut)(t))
    : this.node().innerHTML;
}
function wut() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function xut() {
  return this.each(wut);
}
function _ut() {
  this.previousSibling &&
    this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Sut() {
  return this.each(_ut);
}
function kut(t) {
  var e = typeof t == "function" ? t : Mb(t);
  return this.select(function () {
    return this.appendChild(e.apply(this, arguments));
  });
}
function Cut() {
  return null;
}
function Tut(t, e) {
  var r = typeof t == "function" ? t : Mb(t),
    o = e == null ? Cut : typeof e == "function" ? e : ld(e);
  return this.select(function () {
    return this.insertBefore(
      r.apply(this, arguments),
      o.apply(this, arguments) || null,
    );
  });
}
function Eut() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Lut() {
  return this.each(Eut);
}
function Aut() {
  var t = this.cloneNode(!1),
    e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Mut() {
  var t = this.cloneNode(!0),
    e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Nut(t) {
  return this.select(t ? Mut : Aut);
}
function Put(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function $ut(t) {
  return function (e) {
    t.call(this, e, this.__data__);
  };
}
function Out(t) {
  return t
    .trim()
    .split(/^|\s+/)
    .map(function (e) {
      var r = "",
        o = e.indexOf(".");
      return (
        o >= 0 && ((r = e.slice(o + 1)), (e = e.slice(0, o))),
        { type: e, name: r }
      );
    });
}
function Dut(t) {
  return function () {
    var e = this.__on;
    if (e) {
      for (var r = 0, o = -1, s = e.length, c; r < s; ++r)
        (c = e[r]),
          (!t.type || c.type === t.type) && c.name === t.name
            ? this.removeEventListener(c.type, c.listener, c.options)
            : (e[++o] = c);
      ++o ? (e.length = o) : delete this.__on;
    }
  };
}
function Rut(t, e, r) {
  return function () {
    var o = this.__on,
      s,
      c = $ut(e);
    if (o) {
      for (var f = 0, h = o.length; f < h; ++f)
        if ((s = o[f]).type === t.type && s.name === t.name) {
          this.removeEventListener(s.type, s.listener, s.options),
            this.addEventListener(s.type, (s.listener = c), (s.options = r)),
            (s.value = e);
          return;
        }
    }
    this.addEventListener(t.type, c, r),
      (s = { type: t.type, name: t.name, value: e, listener: c, options: r }),
      o ? o.push(s) : (this.__on = [s]);
  };
}
function zut(t, e, r) {
  var o = Out(t + ""),
    s,
    c = o.length,
    f;
  if (arguments.length < 2) {
    var h = this.node().__on;
    if (h) {
      for (var d = 0, g = h.length, v; d < g; ++d)
        for (s = 0, v = h[d]; s < c; ++s)
          if ((f = o[s]).type === v.type && f.name === v.name) return v.value;
    }
    return;
  }
  for (h = e ? Rut : Dut, s = 0; s < c; ++s) this.each(h(o[s], e, r));
  return this;
}
function Hb(t, e, r) {
  var o = Db(t),
    s = o.CustomEvent;
  typeof s == "function"
    ? (s = new s(e, r))
    : ((s = o.document.createEvent("Event")),
      r
        ? (s.initEvent(e, r.bubbles, r.cancelable), (s.detail = r.detail))
        : s.initEvent(e, !1, !1)),
    t.dispatchEvent(s);
}
function Fut(t, e) {
  return function () {
    return Hb(this, t, e);
  };
}
function Iut(t, e) {
  return function () {
    return Hb(this, t, e.apply(this, arguments));
  };
}
function Hut(t, e) {
  return this.each((typeof e == "function" ? Iut : Fut)(t, e));
}
function* qut() {
  for (var t = this._groups, e = 0, r = t.length; e < r; ++e)
    for (var o = t[e], s = 0, c = o.length, f; s < c; ++s)
      (f = o[s]) && (yield f);
}
var qb = [null];
function In(t, e) {
  (this._groups = t), (this._parents = e);
}
function Kl() {
  return new In([[document.documentElement]], qb);
}
function But() {
  return this;
}
In.prototype = Kl.prototype = {
  constructor: In,
  select: pct,
  selectAll: yct,
  selectChild: _ct,
  selectChildren: Tct,
  filter: Ect,
  data: $ct,
  enter: Lct,
  exit: Dct,
  join: Rct,
  merge: zct,
  selection: But,
  order: Fct,
  sort: Ict,
  call: qct,
  nodes: Bct,
  node: Wct,
  size: Uct,
  empty: jct,
  each: Gct,
  attr: Jct,
  style: rut,
  property: lut,
  classed: fut,
  text: gut,
  html: but,
  raise: xut,
  lower: Sut,
  append: kut,
  insert: Tut,
  remove: Lut,
  clone: Nut,
  datum: Put,
  on: zut,
  dispatch: Hut,
  [Symbol.iterator]: qut,
};
function En(t) {
  return typeof t == "string"
    ? new In([[document.querySelector(t)]], [document.documentElement])
    : new In([[t]], qb);
}
function Wut(t) {
  let e;
  for (; (e = t.sourceEvent); ) t = e;
  return t;
}
function Wr(t, e) {
  if (((t = Wut(t)), e === void 0 && (e = t.currentTarget), e)) {
    var r = e.ownerSVGElement || e;
    if (r.createSVGPoint) {
      var o = r.createSVGPoint();
      return (
        (o.x = t.clientX),
        (o.y = t.clientY),
        (o = o.matrixTransform(e.getScreenCTM().inverse())),
        [o.x, o.y]
      );
    }
    if (e.getBoundingClientRect) {
      var s = e.getBoundingClientRect();
      return [
        t.clientX - s.left - e.clientLeft,
        t.clientY - s.top - e.clientTop,
      ];
    }
  }
  return [t.pageX, t.pageY];
}
class pn {
  constructor(e, r) {
    (this.x = e), (this.y = r);
  }
  static of([e, r]) {
    return new pn(e, r);
  }
  add(e) {
    return new pn(this.x + e.x, this.y + e.y);
  }
  subtract(e) {
    return new pn(this.x - e.x, this.y - e.y);
  }
  multiply(e) {
    return new pn(this.x * e, this.y * e);
  }
  divide(e) {
    return new pn(this.x / e, this.y / e);
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - e.x * this.y;
  }
  hadamard(e) {
    return new pn(this.x * e.x, this.y * e.y);
  }
  length() {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }
  normalize() {
    const e = this.length();
    return new pn(this.x / e, this.y / e);
  }
  rotateByRadians(e) {
    const r = Math.cos(e),
      o = Math.sin(e);
    return new pn(this.x * r - this.y * o, this.x * o + this.y * r);
  }
  rotateByDegrees(e) {
    return this.rotateByRadians((e * Math.PI) / 180);
  }
}
var Uut = { value: () => {} };
function Xl() {
  for (var t = 0, e = arguments.length, r = {}, o; t < e; ++t) {
    if (!(o = arguments[t] + "") || o in r || /[\s.]/.test(o))
      throw new Error("illegal type: " + o);
    r[o] = [];
  }
  return new ic(r);
}
function ic(t) {
  this._ = t;
}
function jut(t, e) {
  return t
    .trim()
    .split(/^|\s+/)
    .map(function (r) {
      var o = "",
        s = r.indexOf(".");
      if (
        (s >= 0 && ((o = r.slice(s + 1)), (r = r.slice(0, s))),
        r && !e.hasOwnProperty(r))
      )
        throw new Error("unknown type: " + r);
      return { type: r, name: o };
    });
}
ic.prototype = Xl.prototype = {
  constructor: ic,
  on: function (t, e) {
    var r = this._,
      o = jut(t + "", r),
      s,
      c = -1,
      f = o.length;
    if (arguments.length < 2) {
      for (; ++c < f; )
        if ((s = (t = o[c]).type) && (s = Gut(r[s], t.name))) return s;
      return;
    }
    if (e != null && typeof e != "function")
      throw new Error("invalid callback: " + e);
    for (; ++c < f; )
      if ((s = (t = o[c]).type)) r[s] = dm(r[s], t.name, e);
      else if (e == null) for (s in r) r[s] = dm(r[s], t.name, null);
    return this;
  },
  copy: function () {
    var t = {},
      e = this._;
    for (var r in e) t[r] = e[r].slice();
    return new ic(t);
  },
  call: function (t, e) {
    if ((s = arguments.length - 2) > 0)
      for (var r = new Array(s), o = 0, s, c; o < s; ++o)
        r[o] = arguments[o + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (c = this._[t], o = 0, s = c.length; o < s; ++o) c[o].value.apply(e, r);
  },
  apply: function (t, e, r) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var o = this._[t], s = 0, c = o.length; s < c; ++s)
      o[s].value.apply(e, r);
  },
};
function Gut(t, e) {
  for (var r = 0, o = t.length, s; r < o; ++r)
    if ((s = t[r]).name === e) return s.value;
}
function dm(t, e, r) {
  for (var o = 0, s = t.length; o < s; ++o)
    if (t[o].name === e) {
      (t[o] = Uut), (t = t.slice(0, o).concat(t.slice(o + 1)));
      break;
    }
  return r != null && t.push({ name: e, value: r }), t;
}
const Vut = { passive: !1 },
  Rl = { capture: !0, passive: !1 };
function _f(t) {
  t.stopImmediatePropagation();
}
function is(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function Bb(t) {
  var e = t.document.documentElement,
    r = En(t).on("dragstart.drag", is, Rl);
  "onselectstart" in e
    ? r.on("selectstart.drag", is, Rl)
    : ((e.__noselect = e.style.MozUserSelect),
      (e.style.MozUserSelect = "none"));
}
function Wb(t, e) {
  var r = t.document.documentElement,
    o = En(t).on("dragstart.drag", null);
  e &&
    (o.on("click.drag", is, Rl),
    setTimeout(function () {
      o.on("click.drag", null);
    }, 0)),
    "onselectstart" in r
      ? o.on("selectstart.drag", null)
      : ((r.style.MozUserSelect = r.__noselect), delete r.__noselect);
}
const Ua = (t) => () => t;
function sh(
  t,
  {
    sourceEvent: e,
    subject: r,
    target: o,
    identifier: s,
    active: c,
    x: f,
    y: h,
    dx: d,
    dy: g,
    dispatch: v,
  },
) {
  Object.defineProperties(this, {
    type: { value: t, enumerable: !0, configurable: !0 },
    sourceEvent: { value: e, enumerable: !0, configurable: !0 },
    subject: { value: r, enumerable: !0, configurable: !0 },
    target: { value: o, enumerable: !0, configurable: !0 },
    identifier: { value: s, enumerable: !0, configurable: !0 },
    active: { value: c, enumerable: !0, configurable: !0 },
    x: { value: f, enumerable: !0, configurable: !0 },
    y: { value: h, enumerable: !0, configurable: !0 },
    dx: { value: d, enumerable: !0, configurable: !0 },
    dy: { value: g, enumerable: !0, configurable: !0 },
    _: { value: v },
  });
}
sh.prototype.on = function () {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function Kut(t) {
  return !t.ctrlKey && !t.button;
}
function Xut() {
  return this.parentNode;
}
function Yut(t, e) {
  return e ?? { x: t.x, y: t.y };
}
function Zut() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Qut() {
  var t = Kut,
    e = Xut,
    r = Yut,
    o = Zut,
    s = {},
    c = Xl("start", "drag", "end"),
    f = 0,
    h,
    d,
    g,
    v,
    y = 0;
  function w(E) {
    E.on("mousedown.drag", _)
      .filter(o)
      .on("touchstart.drag", A)
      .on("touchmove.drag", T, Vut)
      .on("touchend.drag touchcancel.drag", M)
      .style("touch-action", "none")
      .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function _(E, H) {
    if (!(v || !t.call(this, E, H))) {
      var K = $(this, e.call(this, E, H), E, H, "mouse");
      K &&
        (En(E.view).on("mousemove.drag", N, Rl).on("mouseup.drag", L, Rl),
        Bb(E.view),
        _f(E),
        (g = !1),
        (h = E.clientX),
        (d = E.clientY),
        K("start", E));
    }
  }
  function N(E) {
    if ((is(E), !g)) {
      var H = E.clientX - h,
        K = E.clientY - d;
      g = H * H + K * K > y;
    }
    s.mouse("drag", E);
  }
  function L(E) {
    En(E.view).on("mousemove.drag mouseup.drag", null),
      Wb(E.view, g),
      is(E),
      s.mouse("end", E);
  }
  function A(E, H) {
    if (t.call(this, E, H)) {
      var K = E.changedTouches,
        ct = e.call(this, E, H),
        Y = K.length,
        nt,
        rt;
      for (nt = 0; nt < Y; ++nt)
        (rt = $(this, ct, E, H, K[nt].identifier, K[nt])) &&
          (_f(E), rt("start", E, K[nt]));
    }
  }
  function T(E) {
    var H = E.changedTouches,
      K = H.length,
      ct,
      Y;
    for (ct = 0; ct < K; ++ct)
      (Y = s[H[ct].identifier]) && (is(E), Y("drag", E, H[ct]));
  }
  function M(E) {
    var H = E.changedTouches,
      K = H.length,
      ct,
      Y;
    for (
      v && clearTimeout(v),
        v = setTimeout(function () {
          v = null;
        }, 500),
        ct = 0;
      ct < K;
      ++ct
    )
      (Y = s[H[ct].identifier]) && (_f(E), Y("end", E, H[ct]));
  }
  function $(E, H, K, ct, Y, nt) {
    var rt = c.copy(),
      dt = Wr(nt || K, H),
      ht,
      G,
      z;
    if (
      (z = r.call(
        E,
        new sh("beforestart", {
          sourceEvent: K,
          target: w,
          identifier: Y,
          active: f,
          x: dt[0],
          y: dt[1],
          dx: 0,
          dy: 0,
          dispatch: rt,
        }),
        ct,
      )) != null
    )
      return (
        (ht = z.x - dt[0] || 0),
        (G = z.y - dt[1] || 0),
        function k(I, B, Q) {
          var yt = dt,
            At;
          switch (I) {
            case "start":
              (s[Y] = k), (At = f++);
              break;
            case "end":
              delete s[Y], --f;
            case "drag":
              (dt = Wr(Q || B, H)), (At = f);
              break;
          }
          rt.call(
            I,
            E,
            new sh(I, {
              sourceEvent: B,
              subject: z,
              target: w,
              identifier: Y,
              active: At,
              x: dt[0] + ht,
              y: dt[1] + G,
              dx: dt[0] - yt[0],
              dy: dt[1] - yt[1],
              dispatch: rt,
            }),
            ct,
          );
        }
      );
  }
  return (
    (w.filter = function (E) {
      return arguments.length
        ? ((t = typeof E == "function" ? E : Ua(!!E)), w)
        : t;
    }),
    (w.container = function (E) {
      return arguments.length
        ? ((e = typeof E == "function" ? E : Ua(E)), w)
        : e;
    }),
    (w.subject = function (E) {
      return arguments.length
        ? ((r = typeof E == "function" ? E : Ua(E)), w)
        : r;
    }),
    (w.touchable = function (E) {
      return arguments.length
        ? ((o = typeof E == "function" ? E : Ua(!!E)), w)
        : o;
    }),
    (w.on = function () {
      var E = c.on.apply(c, arguments);
      return E === c ? w : E;
    }),
    (w.clickDistance = function (E) {
      return arguments.length ? ((y = (E = +E) * E), w) : Math.sqrt(y);
    }),
    w
  );
}
function cd(t, e, r) {
  (t.prototype = e.prototype = r), (r.constructor = t);
}
function Ub(t, e) {
  var r = Object.create(t.prototype);
  for (var o in e) r[o] = e[o];
  return r;
}
function Yl() {}
var zl = 0.7,
  Lc = 1 / zl,
  os = "\\s*([+-]?\\d+)\\s*",
  Fl = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
  Tr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
  Jut = /^#([0-9a-f]{3,8})$/,
  tft = new RegExp(`^rgb\\(${os},${os},${os}\\)$`),
  eft = new RegExp(`^rgb\\(${Tr},${Tr},${Tr}\\)$`),
  nft = new RegExp(`^rgba\\(${os},${os},${os},${Fl}\\)$`),
  rft = new RegExp(`^rgba\\(${Tr},${Tr},${Tr},${Fl}\\)$`),
  ift = new RegExp(`^hsl\\(${Fl},${Tr},${Tr}\\)$`),
  oft = new RegExp(`^hsla\\(${Fl},${Tr},${Tr},${Fl}\\)$`),
  pm = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  };
cd(Yl, Il, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: gm,
  formatHex: gm,
  formatHex8: sft,
  formatHsl: lft,
  formatRgb: vm,
  toString: vm,
});
function gm() {
  return this.rgb().formatHex();
}
function sft() {
  return this.rgb().formatHex8();
}
function lft() {
  return jb(this).formatHsl();
}
function vm() {
  return this.rgb().formatRgb();
}
function Il(t) {
  var e, r;
  return (
    (t = (t + "").trim().toLowerCase()),
    (e = Jut.exec(t))
      ? ((r = e[1].length),
        (e = parseInt(e[1], 16)),
        r === 6
          ? mm(e)
          : r === 3
            ? new Ln(
                ((e >> 8) & 15) | ((e >> 4) & 240),
                ((e >> 4) & 15) | (e & 240),
                ((e & 15) << 4) | (e & 15),
                1,
              )
            : r === 8
              ? ja(
                  (e >> 24) & 255,
                  (e >> 16) & 255,
                  (e >> 8) & 255,
                  (e & 255) / 255,
                )
              : r === 4
                ? ja(
                    ((e >> 12) & 15) | ((e >> 8) & 240),
                    ((e >> 8) & 15) | ((e >> 4) & 240),
                    ((e >> 4) & 15) | (e & 240),
                    (((e & 15) << 4) | (e & 15)) / 255,
                  )
                : null)
      : (e = tft.exec(t))
        ? new Ln(e[1], e[2], e[3], 1)
        : (e = eft.exec(t))
          ? new Ln(
              (e[1] * 255) / 100,
              (e[2] * 255) / 100,
              (e[3] * 255) / 100,
              1,
            )
          : (e = nft.exec(t))
            ? ja(e[1], e[2], e[3], e[4])
            : (e = rft.exec(t))
              ? ja(
                  (e[1] * 255) / 100,
                  (e[2] * 255) / 100,
                  (e[3] * 255) / 100,
                  e[4],
                )
              : (e = ift.exec(t))
                ? wm(e[1], e[2] / 100, e[3] / 100, 1)
                : (e = oft.exec(t))
                  ? wm(e[1], e[2] / 100, e[3] / 100, e[4])
                  : pm.hasOwnProperty(t)
                    ? mm(pm[t])
                    : t === "transparent"
                      ? new Ln(NaN, NaN, NaN, 0)
                      : null
  );
}
function mm(t) {
  return new Ln((t >> 16) & 255, (t >> 8) & 255, t & 255, 1);
}
function ja(t, e, r, o) {
  return o <= 0 && (t = e = r = NaN), new Ln(t, e, r, o);
}
function aft(t) {
  return (
    t instanceof Yl || (t = Il(t)),
    t ? ((t = t.rgb()), new Ln(t.r, t.g, t.b, t.opacity)) : new Ln()
  );
}
function lh(t, e, r, o) {
  return arguments.length === 1 ? aft(t) : new Ln(t, e, r, o ?? 1);
}
function Ln(t, e, r, o) {
  (this.r = +t), (this.g = +e), (this.b = +r), (this.opacity = +o);
}
cd(
  Ln,
  lh,
  Ub(Yl, {
    brighter(t) {
      return (
        (t = t == null ? Lc : Math.pow(Lc, t)),
        new Ln(this.r * t, this.g * t, this.b * t, this.opacity)
      );
    },
    darker(t) {
      return (
        (t = t == null ? zl : Math.pow(zl, t)),
        new Ln(this.r * t, this.g * t, this.b * t, this.opacity)
      );
    },
    rgb() {
      return this;
    },
    clamp() {
      return new Ln(lo(this.r), lo(this.g), lo(this.b), Ac(this.opacity));
    },
    displayable() {
      return (
        -0.5 <= this.r &&
        this.r < 255.5 &&
        -0.5 <= this.g &&
        this.g < 255.5 &&
        -0.5 <= this.b &&
        this.b < 255.5 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    hex: ym,
    formatHex: ym,
    formatHex8: cft,
    formatRgb: bm,
    toString: bm,
  }),
);
function ym() {
  return `#${io(this.r)}${io(this.g)}${io(this.b)}`;
}
function cft() {
  return `#${io(this.r)}${io(this.g)}${io(this.b)}${io((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function bm() {
  const t = Ac(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${lo(this.r)}, ${lo(this.g)}, ${lo(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function Ac(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function lo(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function io(t) {
  return (t = lo(t)), (t < 16 ? "0" : "") + t.toString(16);
}
function wm(t, e, r, o) {
  return (
    o <= 0
      ? (t = e = r = NaN)
      : r <= 0 || r >= 1
        ? (t = e = NaN)
        : e <= 0 && (t = NaN),
    new lr(t, e, r, o)
  );
}
function jb(t) {
  if (t instanceof lr) return new lr(t.h, t.s, t.l, t.opacity);
  if ((t instanceof Yl || (t = Il(t)), !t)) return new lr();
  if (t instanceof lr) return t;
  t = t.rgb();
  var e = t.r / 255,
    r = t.g / 255,
    o = t.b / 255,
    s = Math.min(e, r, o),
    c = Math.max(e, r, o),
    f = NaN,
    h = c - s,
    d = (c + s) / 2;
  return (
    h
      ? (e === c
          ? (f = (r - o) / h + (r < o) * 6)
          : r === c
            ? (f = (o - e) / h + 2)
            : (f = (e - r) / h + 4),
        (h /= d < 0.5 ? c + s : 2 - c - s),
        (f *= 60))
      : (h = d > 0 && d < 1 ? 0 : f),
    new lr(f, h, d, t.opacity)
  );
}
function uft(t, e, r, o) {
  return arguments.length === 1 ? jb(t) : new lr(t, e, r, o ?? 1);
}
function lr(t, e, r, o) {
  (this.h = +t), (this.s = +e), (this.l = +r), (this.opacity = +o);
}
cd(
  lr,
  uft,
  Ub(Yl, {
    brighter(t) {
      return (
        (t = t == null ? Lc : Math.pow(Lc, t)),
        new lr(this.h, this.s, this.l * t, this.opacity)
      );
    },
    darker(t) {
      return (
        (t = t == null ? zl : Math.pow(zl, t)),
        new lr(this.h, this.s, this.l * t, this.opacity)
      );
    },
    rgb() {
      var t = (this.h % 360) + (this.h < 0) * 360,
        e = isNaN(t) || isNaN(this.s) ? 0 : this.s,
        r = this.l,
        o = r + (r < 0.5 ? r : 1 - r) * e,
        s = 2 * r - o;
      return new Ln(
        Sf(t >= 240 ? t - 240 : t + 120, s, o),
        Sf(t, s, o),
        Sf(t < 120 ? t + 240 : t - 120, s, o),
        this.opacity,
      );
    },
    clamp() {
      return new lr(xm(this.h), Ga(this.s), Ga(this.l), Ac(this.opacity));
    },
    displayable() {
      return (
        ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
        0 <= this.l &&
        this.l <= 1 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    formatHsl() {
      const t = Ac(this.opacity);
      return `${t === 1 ? "hsl(" : "hsla("}${xm(this.h)}, ${Ga(this.s) * 100}%, ${Ga(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
    },
  }),
);
function xm(t) {
  return (t = (t || 0) % 360), t < 0 ? t + 360 : t;
}
function Ga(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Sf(t, e, r) {
  return (
    (t < 60
      ? e + ((r - e) * t) / 60
      : t < 180
        ? r
        : t < 240
          ? e + ((r - e) * (240 - t)) / 60
          : e) * 255
  );
}
const Gb = (t) => () => t;
function fft(t, e) {
  return function (r) {
    return t + r * e;
  };
}
function hft(t, e, r) {
  return (
    (t = Math.pow(t, r)),
    (e = Math.pow(e, r) - t),
    (r = 1 / r),
    function (o) {
      return Math.pow(t + o * e, r);
    }
  );
}
function dft(t) {
  return (t = +t) == 1
    ? Vb
    : function (e, r) {
        return r - e ? hft(e, r, t) : Gb(isNaN(e) ? r : e);
      };
}
function Vb(t, e) {
  var r = e - t;
  return r ? fft(t, r) : Gb(isNaN(t) ? e : t);
}
const _m = (function t(e) {
  var r = dft(e);
  function o(s, c) {
    var f = r((s = lh(s)).r, (c = lh(c)).r),
      h = r(s.g, c.g),
      d = r(s.b, c.b),
      g = Vb(s.opacity, c.opacity);
    return function (v) {
      return (
        (s.r = f(v)), (s.g = h(v)), (s.b = d(v)), (s.opacity = g(v)), s + ""
      );
    };
  }
  return (o.gamma = t), o;
})(1);
function _i(t, e) {
  return (
    (t = +t),
    (e = +e),
    function (r) {
      return t * (1 - r) + e * r;
    }
  );
}
var ah = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
  kf = new RegExp(ah.source, "g");
function pft(t) {
  return function () {
    return t;
  };
}
function gft(t) {
  return function (e) {
    return t(e) + "";
  };
}
function vft(t, e) {
  var r = (ah.lastIndex = kf.lastIndex = 0),
    o,
    s,
    c,
    f = -1,
    h = [],
    d = [];
  for (t = t + "", e = e + ""; (o = ah.exec(t)) && (s = kf.exec(e)); )
    (c = s.index) > r &&
      ((c = e.slice(r, c)), h[f] ? (h[f] += c) : (h[++f] = c)),
      (o = o[0]) === (s = s[0])
        ? h[f]
          ? (h[f] += s)
          : (h[++f] = s)
        : ((h[++f] = null), d.push({ i: f, x: _i(o, s) })),
      (r = kf.lastIndex);
  return (
    r < e.length && ((c = e.slice(r)), h[f] ? (h[f] += c) : (h[++f] = c)),
    h.length < 2
      ? d[0]
        ? gft(d[0].x)
        : pft(e)
      : ((e = d.length),
        function (g) {
          for (var v = 0, y; v < e; ++v) h[(y = d[v]).i] = y.x(g);
          return h.join("");
        })
  );
}
var Sm = 180 / Math.PI,
  ch = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1,
  };
function Kb(t, e, r, o, s, c) {
  var f, h, d;
  return (
    (f = Math.sqrt(t * t + e * e)) && ((t /= f), (e /= f)),
    (d = t * r + e * o) && ((r -= t * d), (o -= e * d)),
    (h = Math.sqrt(r * r + o * o)) && ((r /= h), (o /= h), (d /= h)),
    t * o < e * r && ((t = -t), (e = -e), (d = -d), (f = -f)),
    {
      translateX: s,
      translateY: c,
      rotate: Math.atan2(e, t) * Sm,
      skewX: Math.atan(d) * Sm,
      scaleX: f,
      scaleY: h,
    }
  );
}
var Va;
function mft(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(
    t + "",
  );
  return e.isIdentity ? ch : Kb(e.a, e.b, e.c, e.d, e.e, e.f);
}
function yft(t) {
  return t == null ||
    (Va || (Va = document.createElementNS("http://www.w3.org/2000/svg", "g")),
    Va.setAttribute("transform", t),
    !(t = Va.transform.baseVal.consolidate()))
    ? ch
    : ((t = t.matrix), Kb(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Xb(t, e, r, o) {
  function s(g) {
    return g.length ? g.pop() + " " : "";
  }
  function c(g, v, y, w, _, N) {
    if (g !== y || v !== w) {
      var L = _.push("translate(", null, e, null, r);
      N.push({ i: L - 4, x: _i(g, y) }, { i: L - 2, x: _i(v, w) });
    } else (y || w) && _.push("translate(" + y + e + w + r);
  }
  function f(g, v, y, w) {
    g !== v
      ? (g - v > 180 ? (v += 360) : v - g > 180 && (g += 360),
        w.push({ i: y.push(s(y) + "rotate(", null, o) - 2, x: _i(g, v) }))
      : v && y.push(s(y) + "rotate(" + v + o);
  }
  function h(g, v, y, w) {
    g !== v
      ? w.push({ i: y.push(s(y) + "skewX(", null, o) - 2, x: _i(g, v) })
      : v && y.push(s(y) + "skewX(" + v + o);
  }
  function d(g, v, y, w, _, N) {
    if (g !== y || v !== w) {
      var L = _.push(s(_) + "scale(", null, ",", null, ")");
      N.push({ i: L - 4, x: _i(g, y) }, { i: L - 2, x: _i(v, w) });
    } else (y !== 1 || w !== 1) && _.push(s(_) + "scale(" + y + "," + w + ")");
  }
  return function (g, v) {
    var y = [],
      w = [];
    return (
      (g = t(g)),
      (v = t(v)),
      c(g.translateX, g.translateY, v.translateX, v.translateY, y, w),
      f(g.rotate, v.rotate, y, w),
      h(g.skewX, v.skewX, y, w),
      d(g.scaleX, g.scaleY, v.scaleX, v.scaleY, y, w),
      (g = v = null),
      function (_) {
        for (var N = -1, L = w.length, A; ++N < L; ) y[(A = w[N]).i] = A.x(_);
        return y.join("");
      }
    );
  };
}
var bft = Xb(mft, "px, ", "px)", "deg)"),
  wft = Xb(yft, ", ", ")", ")"),
  xft = 1e-12;
function km(t) {
  return ((t = Math.exp(t)) + 1 / t) / 2;
}
function _ft(t) {
  return ((t = Math.exp(t)) - 1 / t) / 2;
}
function Sft(t) {
  return ((t = Math.exp(2 * t)) - 1) / (t + 1);
}
const kft = (function t(e, r, o) {
  function s(c, f) {
    var h = c[0],
      d = c[1],
      g = c[2],
      v = f[0],
      y = f[1],
      w = f[2],
      _ = v - h,
      N = y - d,
      L = _ * _ + N * N,
      A,
      T;
    if (L < xft)
      (T = Math.log(w / g) / e),
        (A = function (ct) {
          return [h + ct * _, d + ct * N, g * Math.exp(e * ct * T)];
        });
    else {
      var M = Math.sqrt(L),
        $ = (w * w - g * g + o * L) / (2 * g * r * M),
        E = (w * w - g * g - o * L) / (2 * w * r * M),
        H = Math.log(Math.sqrt($ * $ + 1) - $),
        K = Math.log(Math.sqrt(E * E + 1) - E);
      (T = (K - H) / e),
        (A = function (ct) {
          var Y = ct * T,
            nt = km(H),
            rt = (g / (r * M)) * (nt * Sft(e * Y + H) - _ft(H));
          return [h + rt * _, d + rt * N, (g * nt) / km(e * Y + H)];
        });
    }
    return (A.duration = (T * 1e3 * e) / Math.SQRT2), A;
  }
  return (
    (s.rho = function (c) {
      var f = Math.max(0.001, +c),
        h = f * f,
        d = h * h;
      return t(f, h, d);
    }),
    s
  );
})(Math.SQRT2, 2, 4);
var vs = 0,
  al = 0,
  il = 0,
  Yb = 1e3,
  Mc,
  cl,
  Nc = 0,
  ho = 0,
  ou = 0,
  Hl = typeof performance == "object" && performance.now ? performance : Date,
  Zb =
    typeof window == "object" && window.requestAnimationFrame
      ? window.requestAnimationFrame.bind(window)
      : function (t) {
          setTimeout(t, 17);
        };
function ud() {
  return ho || (Zb(Cft), (ho = Hl.now() + ou));
}
function Cft() {
  ho = 0;
}
function Pc() {
  this._call = this._time = this._next = null;
}
Pc.prototype = fd.prototype = {
  constructor: Pc,
  restart: function (t, e, r) {
    if (typeof t != "function")
      throw new TypeError("callback is not a function");
    (r = (r == null ? ud() : +r) + (e == null ? 0 : +e)),
      !this._next &&
        cl !== this &&
        (cl ? (cl._next = this) : (Mc = this), (cl = this)),
      (this._call = t),
      (this._time = r),
      uh();
  },
  stop: function () {
    this._call && ((this._call = null), (this._time = 1 / 0), uh());
  },
};
function fd(t, e, r) {
  var o = new Pc();
  return o.restart(t, e, r), o;
}
function Tft() {
  ud(), ++vs;
  for (var t = Mc, e; t; )
    (e = ho - t._time) >= 0 && t._call.call(void 0, e), (t = t._next);
  --vs;
}
function Cm() {
  (ho = (Nc = Hl.now()) + ou), (vs = al = 0);
  try {
    Tft();
  } finally {
    (vs = 0), Lft(), (ho = 0);
  }
}
function Eft() {
  var t = Hl.now(),
    e = t - Nc;
  e > Yb && ((ou -= e), (Nc = t));
}
function Lft() {
  for (var t, e = Mc, r, o = 1 / 0; e; )
    e._call
      ? (o > e._time && (o = e._time), (t = e), (e = e._next))
      : ((r = e._next), (e._next = null), (e = t ? (t._next = r) : (Mc = r)));
  (cl = t), uh(o);
}
function uh(t) {
  if (!vs) {
    al && (al = clearTimeout(al));
    var e = t - ho;
    e > 24
      ? (t < 1 / 0 && (al = setTimeout(Cm, t - Hl.now() - ou)),
        il && (il = clearInterval(il)))
      : (il || ((Nc = Hl.now()), (il = setInterval(Eft, Yb))),
        (vs = 1),
        Zb(Cm));
  }
}
function Tm(t, e, r) {
  var o = new Pc();
  return (
    (e = e == null ? 0 : +e),
    o.restart(
      (s) => {
        o.stop(), t(s + e);
      },
      e,
      r,
    ),
    o
  );
}
var Aft = Xl("start", "end", "cancel", "interrupt"),
  Mft = [],
  Qb = 0,
  Em = 1,
  fh = 2,
  oc = 3,
  Lm = 4,
  hh = 5,
  sc = 6;
function su(t, e, r, o, s, c) {
  var f = t.__transition;
  if (!f) t.__transition = {};
  else if (r in f) return;
  Nft(t, r, {
    name: e,
    index: o,
    group: s,
    on: Aft,
    tween: Mft,
    time: c.time,
    delay: c.delay,
    duration: c.duration,
    ease: c.ease,
    timer: null,
    state: Qb,
  });
}
function hd(t, e) {
  var r = fr(t, e);
  if (r.state > Qb) throw new Error("too late; already scheduled");
  return r;
}
function Nr(t, e) {
  var r = fr(t, e);
  if (r.state > oc) throw new Error("too late; already running");
  return r;
}
function fr(t, e) {
  var r = t.__transition;
  if (!r || !(r = r[e])) throw new Error("transition not found");
  return r;
}
function Nft(t, e, r) {
  var o = t.__transition,
    s;
  (o[e] = r), (r.timer = fd(c, 0, r.time));
  function c(g) {
    (r.state = Em),
      r.timer.restart(f, r.delay, r.time),
      r.delay <= g && f(g - r.delay);
  }
  function f(g) {
    var v, y, w, _;
    if (r.state !== Em) return d();
    for (v in o)
      if (((_ = o[v]), _.name === r.name)) {
        if (_.state === oc) return Tm(f);
        _.state === Lm
          ? ((_.state = sc),
            _.timer.stop(),
            _.on.call("interrupt", t, t.__data__, _.index, _.group),
            delete o[v])
          : +v < e &&
            ((_.state = sc),
            _.timer.stop(),
            _.on.call("cancel", t, t.__data__, _.index, _.group),
            delete o[v]);
      }
    if (
      (Tm(function () {
        r.state === oc &&
          ((r.state = Lm), r.timer.restart(h, r.delay, r.time), h(g));
      }),
      (r.state = fh),
      r.on.call("start", t, t.__data__, r.index, r.group),
      r.state === fh)
    ) {
      for (
        r.state = oc, s = new Array((w = r.tween.length)), v = 0, y = -1;
        v < w;
        ++v
      )
        (_ = r.tween[v].value.call(t, t.__data__, r.index, r.group)) &&
          (s[++y] = _);
      s.length = y + 1;
    }
  }
  function h(g) {
    for (
      var v =
          g < r.duration
            ? r.ease.call(null, g / r.duration)
            : (r.timer.restart(d), (r.state = hh), 1),
        y = -1,
        w = s.length;
      ++y < w;
    )
      s[y].call(t, v);
    r.state === hh && (r.on.call("end", t, t.__data__, r.index, r.group), d());
  }
  function d() {
    (r.state = sc), r.timer.stop(), delete o[e];
    for (var g in o) return;
    delete t.__transition;
  }
}
function lc(t, e) {
  var r = t.__transition,
    o,
    s,
    c = !0,
    f;
  if (r) {
    e = e == null ? null : e + "";
    for (f in r) {
      if ((o = r[f]).name !== e) {
        c = !1;
        continue;
      }
      (s = o.state > fh && o.state < hh),
        (o.state = sc),
        o.timer.stop(),
        o.on.call(s ? "interrupt" : "cancel", t, t.__data__, o.index, o.group),
        delete r[f];
    }
    c && delete t.__transition;
  }
}
function Pft(t) {
  return this.each(function () {
    lc(this, t);
  });
}
function $ft(t, e) {
  var r, o;
  return function () {
    var s = Nr(this, t),
      c = s.tween;
    if (c !== r) {
      o = r = c;
      for (var f = 0, h = o.length; f < h; ++f)
        if (o[f].name === e) {
          (o = o.slice()), o.splice(f, 1);
          break;
        }
    }
    s.tween = o;
  };
}
function Oft(t, e, r) {
  var o, s;
  if (typeof r != "function") throw new Error();
  return function () {
    var c = Nr(this, t),
      f = c.tween;
    if (f !== o) {
      s = (o = f).slice();
      for (var h = { name: e, value: r }, d = 0, g = s.length; d < g; ++d)
        if (s[d].name === e) {
          s[d] = h;
          break;
        }
      d === g && s.push(h);
    }
    c.tween = s;
  };
}
function Dft(t, e) {
  var r = this._id;
  if (((t += ""), arguments.length < 2)) {
    for (var o = fr(this.node(), r).tween, s = 0, c = o.length, f; s < c; ++s)
      if ((f = o[s]).name === t) return f.value;
    return null;
  }
  return this.each((e == null ? $ft : Oft)(r, t, e));
}
function dd(t, e, r) {
  var o = t._id;
  return (
    t.each(function () {
      var s = Nr(this, o);
      (s.value || (s.value = {}))[e] = r.apply(this, arguments);
    }),
    function (s) {
      return fr(s, o).value[e];
    }
  );
}
function Jb(t, e) {
  var r;
  return (
    typeof e == "number"
      ? _i
      : e instanceof Il
        ? _m
        : (r = Il(e))
          ? ((e = r), _m)
          : vft
  )(t, e);
}
function Rft(t) {
  return function () {
    this.removeAttribute(t);
  };
}
function zft(t) {
  return function () {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Fft(t, e, r) {
  var o,
    s = r + "",
    c;
  return function () {
    var f = this.getAttribute(t);
    return f === s ? null : f === o ? c : (c = e((o = f), r));
  };
}
function Ift(t, e, r) {
  var o,
    s = r + "",
    c;
  return function () {
    var f = this.getAttributeNS(t.space, t.local);
    return f === s ? null : f === o ? c : (c = e((o = f), r));
  };
}
function Hft(t, e, r) {
  var o, s, c;
  return function () {
    var f,
      h = r(this),
      d;
    return h == null
      ? void this.removeAttribute(t)
      : ((f = this.getAttribute(t)),
        (d = h + ""),
        f === d
          ? null
          : f === o && d === s
            ? c
            : ((s = d), (c = e((o = f), h))));
  };
}
function qft(t, e, r) {
  var o, s, c;
  return function () {
    var f,
      h = r(this),
      d;
    return h == null
      ? void this.removeAttributeNS(t.space, t.local)
      : ((f = this.getAttributeNS(t.space, t.local)),
        (d = h + ""),
        f === d
          ? null
          : f === o && d === s
            ? c
            : ((s = d), (c = e((o = f), h))));
  };
}
function Bft(t, e) {
  var r = iu(t),
    o = r === "transform" ? wft : Jb;
  return this.attrTween(
    t,
    typeof e == "function"
      ? (r.local ? qft : Hft)(r, o, dd(this, "attr." + t, e))
      : e == null
        ? (r.local ? zft : Rft)(r)
        : (r.local ? Ift : Fft)(r, o, e),
  );
}
function Wft(t, e) {
  return function (r) {
    this.setAttribute(t, e.call(this, r));
  };
}
function Uft(t, e) {
  return function (r) {
    this.setAttributeNS(t.space, t.local, e.call(this, r));
  };
}
function jft(t, e) {
  var r, o;
  function s() {
    var c = e.apply(this, arguments);
    return c !== o && (r = (o = c) && Uft(t, c)), r;
  }
  return (s._value = e), s;
}
function Gft(t, e) {
  var r, o;
  function s() {
    var c = e.apply(this, arguments);
    return c !== o && (r = (o = c) && Wft(t, c)), r;
  }
  return (s._value = e), s;
}
function Vft(t, e) {
  var r = "attr." + t;
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (e == null) return this.tween(r, null);
  if (typeof e != "function") throw new Error();
  var o = iu(t);
  return this.tween(r, (o.local ? jft : Gft)(o, e));
}
function Kft(t, e) {
  return function () {
    hd(this, t).delay = +e.apply(this, arguments);
  };
}
function Xft(t, e) {
  return (
    (e = +e),
    function () {
      hd(this, t).delay = e;
    }
  );
}
function Yft(t) {
  var e = this._id;
  return arguments.length
    ? this.each((typeof t == "function" ? Kft : Xft)(e, t))
    : fr(this.node(), e).delay;
}
function Zft(t, e) {
  return function () {
    Nr(this, t).duration = +e.apply(this, arguments);
  };
}
function Qft(t, e) {
  return (
    (e = +e),
    function () {
      Nr(this, t).duration = e;
    }
  );
}
function Jft(t) {
  var e = this._id;
  return arguments.length
    ? this.each((typeof t == "function" ? Zft : Qft)(e, t))
    : fr(this.node(), e).duration;
}
function tht(t, e) {
  if (typeof e != "function") throw new Error();
  return function () {
    Nr(this, t).ease = e;
  };
}
function eht(t) {
  var e = this._id;
  return arguments.length ? this.each(tht(e, t)) : fr(this.node(), e).ease;
}
function nht(t, e) {
  return function () {
    var r = e.apply(this, arguments);
    if (typeof r != "function") throw new Error();
    Nr(this, t).ease = r;
  };
}
function rht(t) {
  if (typeof t != "function") throw new Error();
  return this.each(nht(this._id, t));
}
function iht(t) {
  typeof t != "function" && (t = Pb(t));
  for (var e = this._groups, r = e.length, o = new Array(r), s = 0; s < r; ++s)
    for (var c = e[s], f = c.length, h = (o[s] = []), d, g = 0; g < f; ++g)
      (d = c[g]) && t.call(d, d.__data__, g, c) && h.push(d);
  return new Yr(o, this._parents, this._name, this._id);
}
function oht(t) {
  if (t._id !== this._id) throw new Error();
  for (
    var e = this._groups,
      r = t._groups,
      o = e.length,
      s = r.length,
      c = Math.min(o, s),
      f = new Array(o),
      h = 0;
    h < c;
    ++h
  )
    for (
      var d = e[h], g = r[h], v = d.length, y = (f[h] = new Array(v)), w, _ = 0;
      _ < v;
      ++_
    )
      (w = d[_] || g[_]) && (y[_] = w);
  for (; h < o; ++h) f[h] = e[h];
  return new Yr(f, this._parents, this._name, this._id);
}
function sht(t) {
  return (t + "")
    .trim()
    .split(/^|\s+/)
    .every(function (e) {
      var r = e.indexOf(".");
      return r >= 0 && (e = e.slice(0, r)), !e || e === "start";
    });
}
function lht(t, e, r) {
  var o,
    s,
    c = sht(e) ? hd : Nr;
  return function () {
    var f = c(this, t),
      h = f.on;
    h !== o && (s = (o = h).copy()).on(e, r), (f.on = s);
  };
}
function aht(t, e) {
  var r = this._id;
  return arguments.length < 2
    ? fr(this.node(), r).on.on(t)
    : this.each(lht(r, t, e));
}
function cht(t) {
  return function () {
    var e = this.parentNode;
    for (var r in this.__transition) if (+r !== t) return;
    e && e.removeChild(this);
  };
}
function uht() {
  return this.on("end.remove", cht(this._id));
}
function fht(t) {
  var e = this._name,
    r = this._id;
  typeof t != "function" && (t = ld(t));
  for (var o = this._groups, s = o.length, c = new Array(s), f = 0; f < s; ++f)
    for (
      var h = o[f], d = h.length, g = (c[f] = new Array(d)), v, y, w = 0;
      w < d;
      ++w
    )
      (v = h[w]) &&
        (y = t.call(v, v.__data__, w, h)) &&
        ("__data__" in v && (y.__data__ = v.__data__),
        (g[w] = y),
        su(g[w], e, r, w, g, fr(v, r)));
  return new Yr(c, this._parents, e, r);
}
function hht(t) {
  var e = this._name,
    r = this._id;
  typeof t != "function" && (t = Nb(t));
  for (var o = this._groups, s = o.length, c = [], f = [], h = 0; h < s; ++h)
    for (var d = o[h], g = d.length, v, y = 0; y < g; ++y)
      if ((v = d[y])) {
        for (
          var w = t.call(v, v.__data__, y, d),
            _,
            N = fr(v, r),
            L = 0,
            A = w.length;
          L < A;
          ++L
        )
          (_ = w[L]) && su(_, e, r, L, w, N);
        c.push(w), f.push(v);
      }
  return new Yr(c, f, e, r);
}
var dht = Kl.prototype.constructor;
function pht() {
  return new dht(this._groups, this._parents);
}
function ght(t, e) {
  var r, o, s;
  return function () {
    var c = gs(this, t),
      f = (this.style.removeProperty(t), gs(this, t));
    return c === f ? null : c === r && f === o ? s : (s = e((r = c), (o = f)));
  };
}
function tw(t) {
  return function () {
    this.style.removeProperty(t);
  };
}
function vht(t, e, r) {
  var o,
    s = r + "",
    c;
  return function () {
    var f = gs(this, t);
    return f === s ? null : f === o ? c : (c = e((o = f), r));
  };
}
function mht(t, e, r) {
  var o, s, c;
  return function () {
    var f = gs(this, t),
      h = r(this),
      d = h + "";
    return (
      h == null && (d = h = (this.style.removeProperty(t), gs(this, t))),
      f === d ? null : f === o && d === s ? c : ((s = d), (c = e((o = f), h)))
    );
  };
}
function yht(t, e) {
  var r,
    o,
    s,
    c = "style." + e,
    f = "end." + c,
    h;
  return function () {
    var d = Nr(this, t),
      g = d.on,
      v = d.value[c] == null ? h || (h = tw(e)) : void 0;
    (g !== r || s !== v) && (o = (r = g).copy()).on(f, (s = v)), (d.on = o);
  };
}
function bht(t, e, r) {
  var o = (t += "") == "transform" ? bft : Jb;
  return e == null
    ? this.styleTween(t, ght(t, o)).on("end.style." + t, tw(t))
    : typeof e == "function"
      ? this.styleTween(t, mht(t, o, dd(this, "style." + t, e))).each(
          yht(this._id, t),
        )
      : this.styleTween(t, vht(t, o, e), r).on("end.style." + t, null);
}
function wht(t, e, r) {
  return function (o) {
    this.style.setProperty(t, e.call(this, o), r);
  };
}
function xht(t, e, r) {
  var o, s;
  function c() {
    var f = e.apply(this, arguments);
    return f !== s && (o = (s = f) && wht(t, f, r)), o;
  }
  return (c._value = e), c;
}
function _ht(t, e, r) {
  var o = "style." + (t += "");
  if (arguments.length < 2) return (o = this.tween(o)) && o._value;
  if (e == null) return this.tween(o, null);
  if (typeof e != "function") throw new Error();
  return this.tween(o, xht(t, e, r ?? ""));
}
function Sht(t) {
  return function () {
    this.textContent = t;
  };
}
function kht(t) {
  return function () {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function Cht(t) {
  return this.tween(
    "text",
    typeof t == "function"
      ? kht(dd(this, "text", t))
      : Sht(t == null ? "" : t + ""),
  );
}
function Tht(t) {
  return function (e) {
    this.textContent = t.call(this, e);
  };
}
function Eht(t) {
  var e, r;
  function o() {
    var s = t.apply(this, arguments);
    return s !== r && (e = (r = s) && Tht(s)), e;
  }
  return (o._value = t), o;
}
function Lht(t) {
  var e = "text";
  if (arguments.length < 1) return (e = this.tween(e)) && e._value;
  if (t == null) return this.tween(e, null);
  if (typeof t != "function") throw new Error();
  return this.tween(e, Eht(t));
}
function Aht() {
  for (
    var t = this._name,
      e = this._id,
      r = ew(),
      o = this._groups,
      s = o.length,
      c = 0;
    c < s;
    ++c
  )
    for (var f = o[c], h = f.length, d, g = 0; g < h; ++g)
      if ((d = f[g])) {
        var v = fr(d, e);
        su(d, t, r, g, f, {
          time: v.time + v.delay + v.duration,
          delay: 0,
          duration: v.duration,
          ease: v.ease,
        });
      }
  return new Yr(o, this._parents, t, r);
}
function Mht() {
  var t,
    e,
    r = this,
    o = r._id,
    s = r.size();
  return new Promise(function (c, f) {
    var h = { value: f },
      d = {
        value: function () {
          --s === 0 && c();
        },
      };
    r.each(function () {
      var g = Nr(this, o),
        v = g.on;
      v !== t &&
        ((e = (t = v).copy()),
        e._.cancel.push(h),
        e._.interrupt.push(h),
        e._.end.push(d)),
        (g.on = e);
    }),
      s === 0 && c();
  });
}
var Nht = 0;
function Yr(t, e, r, o) {
  (this._groups = t), (this._parents = e), (this._name = r), (this._id = o);
}
function ew() {
  return ++Nht;
}
var qr = Kl.prototype;
Yr.prototype = {
  constructor: Yr,
  select: fht,
  selectAll: hht,
  selectChild: qr.selectChild,
  selectChildren: qr.selectChildren,
  filter: iht,
  merge: oht,
  selection: pht,
  transition: Aht,
  call: qr.call,
  nodes: qr.nodes,
  node: qr.node,
  size: qr.size,
  empty: qr.empty,
  each: qr.each,
  on: aht,
  attr: Bft,
  attrTween: Vft,
  style: bht,
  styleTween: _ht,
  text: Cht,
  textTween: Lht,
  remove: uht,
  tween: Dft,
  delay: Yft,
  duration: Jft,
  ease: eht,
  easeVarying: rht,
  end: Mht,
  [Symbol.iterator]: qr[Symbol.iterator],
};
function Pht(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var $ht = { time: null, delay: 0, duration: 250, ease: Pht };
function Oht(t, e) {
  for (var r; !(r = t.__transition) || !(r = r[e]); )
    if (!(t = t.parentNode)) throw new Error(`transition ${e} not found`);
  return r;
}
function Dht(t) {
  var e, r;
  t instanceof Yr
    ? ((e = t._id), (t = t._name))
    : ((e = ew()), ((r = $ht).time = ud()), (t = t == null ? null : t + ""));
  for (var o = this._groups, s = o.length, c = 0; c < s; ++c)
    for (var f = o[c], h = f.length, d, g = 0; g < h; ++g)
      (d = f[g]) && su(d, t, e, g, f, r || Oht(d, e));
  return new Yr(o, this._parents, t, e);
}
Kl.prototype.interrupt = Pft;
Kl.prototype.transition = Dht;
const Ka = (t) => () => t;
function Rht(t, { sourceEvent: e, target: r, transform: o, dispatch: s }) {
  Object.defineProperties(this, {
    type: { value: t, enumerable: !0, configurable: !0 },
    sourceEvent: { value: e, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    transform: { value: o, enumerable: !0, configurable: !0 },
    _: { value: s },
  });
}
function Ur(t, e, r) {
  (this.k = t), (this.x = e), (this.y = r);
}
Ur.prototype = {
  constructor: Ur,
  scale: function (t) {
    return t === 1 ? this : new Ur(this.k * t, this.x, this.y);
  },
  translate: function (t, e) {
    return (t === 0) & (e === 0)
      ? this
      : new Ur(this.k, this.x + this.k * t, this.y + this.k * e);
  },
  apply: function (t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function (t) {
    return t * this.k + this.x;
  },
  applyY: function (t) {
    return t * this.k + this.y;
  },
  invert: function (t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function (t) {
    return (t - this.x) / this.k;
  },
  invertY: function (t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function (t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function (t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function () {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  },
};
var pd = new Ur(1, 0, 0);
Ur.prototype;
function Cf(t) {
  t.stopImmediatePropagation();
}
function ol(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function zht(t) {
  return (!t.ctrlKey || t.type === "wheel") && !t.button;
}
function Fht() {
  var t = this;
  return t instanceof SVGElement
    ? ((t = t.ownerSVGElement || t),
      t.hasAttribute("viewBox")
        ? ((t = t.viewBox.baseVal),
          [
            [t.x, t.y],
            [t.x + t.width, t.y + t.height],
          ])
        : [
            [0, 0],
            [t.width.baseVal.value, t.height.baseVal.value],
          ])
    : [
        [0, 0],
        [t.clientWidth, t.clientHeight],
      ];
}
function Am() {
  return this.__zoom || pd;
}
function Iht(t) {
  return (
    -t.deltaY *
    (t.deltaMode === 1 ? 0.05 : t.deltaMode ? 1 : 0.002) *
    (t.ctrlKey ? 10 : 1)
  );
}
function Hht() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function qht(t, e, r) {
  var o = t.invertX(e[0][0]) - r[0][0],
    s = t.invertX(e[1][0]) - r[1][0],
    c = t.invertY(e[0][1]) - r[0][1],
    f = t.invertY(e[1][1]) - r[1][1];
  return t.translate(
    s > o ? (o + s) / 2 : Math.min(0, o) || Math.max(0, s),
    f > c ? (c + f) / 2 : Math.min(0, c) || Math.max(0, f),
  );
}
function Bht() {
  var t = zht,
    e = Fht,
    r = qht,
    o = Iht,
    s = Hht,
    c = [0, 1 / 0],
    f = [
      [-1 / 0, -1 / 0],
      [1 / 0, 1 / 0],
    ],
    h = 250,
    d = kft,
    g = Xl("start", "zoom", "end"),
    v,
    y,
    w,
    _ = 500,
    N = 150,
    L = 0,
    A = 10;
  function T(z) {
    z.property("__zoom", Am)
      .on("wheel.zoom", Y, { passive: !1 })
      .on("mousedown.zoom", nt)
      .on("dblclick.zoom", rt)
      .filter(s)
      .on("touchstart.zoom", dt)
      .on("touchmove.zoom", ht)
      .on("touchend.zoom touchcancel.zoom", G)
      .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  (T.transform = function (z, k, I, B) {
    var Q = z.selection ? z.selection() : z;
    Q.property("__zoom", Am),
      z !== Q
        ? H(z, k, I, B)
        : Q.interrupt().each(function () {
            K(this, arguments)
              .event(B)
              .start()
              .zoom(null, typeof k == "function" ? k.apply(this, arguments) : k)
              .end();
          });
  }),
    (T.scaleBy = function (z, k, I, B) {
      T.scaleTo(
        z,
        function () {
          var Q = this.__zoom.k,
            yt = typeof k == "function" ? k.apply(this, arguments) : k;
          return Q * yt;
        },
        I,
        B,
      );
    }),
    (T.scaleTo = function (z, k, I, B) {
      T.transform(
        z,
        function () {
          var Q = e.apply(this, arguments),
            yt = this.__zoom,
            At =
              I == null
                ? E(Q)
                : typeof I == "function"
                  ? I.apply(this, arguments)
                  : I,
            Ht = yt.invert(At),
            qt = typeof k == "function" ? k.apply(this, arguments) : k;
          return r($(M(yt, qt), At, Ht), Q, f);
        },
        I,
        B,
      );
    }),
    (T.translateBy = function (z, k, I, B) {
      T.transform(
        z,
        function () {
          return r(
            this.__zoom.translate(
              typeof k == "function" ? k.apply(this, arguments) : k,
              typeof I == "function" ? I.apply(this, arguments) : I,
            ),
            e.apply(this, arguments),
            f,
          );
        },
        null,
        B,
      );
    }),
    (T.translateTo = function (z, k, I, B, Q) {
      T.transform(
        z,
        function () {
          var yt = e.apply(this, arguments),
            At = this.__zoom,
            Ht =
              B == null
                ? E(yt)
                : typeof B == "function"
                  ? B.apply(this, arguments)
                  : B;
          return r(
            pd
              .translate(Ht[0], Ht[1])
              .scale(At.k)
              .translate(
                typeof k == "function" ? -k.apply(this, arguments) : -k,
                typeof I == "function" ? -I.apply(this, arguments) : -I,
              ),
            yt,
            f,
          );
        },
        B,
        Q,
      );
    });
  function M(z, k) {
    return (
      (k = Math.max(c[0], Math.min(c[1], k))),
      k === z.k ? z : new Ur(k, z.x, z.y)
    );
  }
  function $(z, k, I) {
    var B = k[0] - I[0] * z.k,
      Q = k[1] - I[1] * z.k;
    return B === z.x && Q === z.y ? z : new Ur(z.k, B, Q);
  }
  function E(z) {
    return [(+z[0][0] + +z[1][0]) / 2, (+z[0][1] + +z[1][1]) / 2];
  }
  function H(z, k, I, B) {
    z.on("start.zoom", function () {
      K(this, arguments).event(B).start();
    })
      .on("interrupt.zoom end.zoom", function () {
        K(this, arguments).event(B).end();
      })
      .tween("zoom", function () {
        var Q = this,
          yt = arguments,
          At = K(Q, yt).event(B),
          Ht = e.apply(Q, yt),
          qt = I == null ? E(Ht) : typeof I == "function" ? I.apply(Q, yt) : I,
          Jt = Math.max(Ht[1][0] - Ht[0][0], Ht[1][1] - Ht[0][1]),
          Qt = Q.__zoom,
          Vt = typeof k == "function" ? k.apply(Q, yt) : k,
          Tt = d(
            Qt.invert(qt).concat(Jt / Qt.k),
            Vt.invert(qt).concat(Jt / Vt.k),
          );
        return function (j) {
          if (j === 1) j = Vt;
          else {
            var it = Tt(j),
              at = Jt / it[2];
            j = new Ur(at, qt[0] - it[0] * at, qt[1] - it[1] * at);
          }
          At.zoom(null, j);
        };
      });
  }
  function K(z, k, I) {
    return (!I && z.__zooming) || new ct(z, k);
  }
  function ct(z, k) {
    (this.that = z),
      (this.args = k),
      (this.active = 0),
      (this.sourceEvent = null),
      (this.extent = e.apply(z, k)),
      (this.taps = 0);
  }
  ct.prototype = {
    event: function (z) {
      return z && (this.sourceEvent = z), this;
    },
    start: function () {
      return (
        ++this.active === 1 &&
          ((this.that.__zooming = this), this.emit("start")),
        this
      );
    },
    zoom: function (z, k) {
      return (
        this.mouse &&
          z !== "mouse" &&
          (this.mouse[1] = k.invert(this.mouse[0])),
        this.touch0 &&
          z !== "touch" &&
          (this.touch0[1] = k.invert(this.touch0[0])),
        this.touch1 &&
          z !== "touch" &&
          (this.touch1[1] = k.invert(this.touch1[0])),
        (this.that.__zoom = k),
        this.emit("zoom"),
        this
      );
    },
    end: function () {
      return (
        --this.active === 0 && (delete this.that.__zooming, this.emit("end")),
        this
      );
    },
    emit: function (z) {
      var k = En(this.that).datum();
      g.call(
        z,
        this.that,
        new Rht(z, {
          sourceEvent: this.sourceEvent,
          target: T,
          type: z,
          transform: this.that.__zoom,
          dispatch: g,
        }),
        k,
      );
    },
  };
  function Y(z, ...k) {
    if (!t.apply(this, arguments)) return;
    var I = K(this, k).event(z),
      B = this.__zoom,
      Q = Math.max(
        c[0],
        Math.min(c[1], B.k * Math.pow(2, o.apply(this, arguments))),
      ),
      yt = Wr(z);
    if (I.wheel)
      (I.mouse[0][0] !== yt[0] || I.mouse[0][1] !== yt[1]) &&
        (I.mouse[1] = B.invert((I.mouse[0] = yt))),
        clearTimeout(I.wheel);
    else {
      if (B.k === Q) return;
      (I.mouse = [yt, B.invert(yt)]), lc(this), I.start();
    }
    ol(z),
      (I.wheel = setTimeout(At, N)),
      I.zoom("mouse", r($(M(B, Q), I.mouse[0], I.mouse[1]), I.extent, f));
    function At() {
      (I.wheel = null), I.end();
    }
  }
  function nt(z, ...k) {
    if (w || !t.apply(this, arguments)) return;
    var I = z.currentTarget,
      B = K(this, k, !0).event(z),
      Q = En(z.view).on("mousemove.zoom", qt, !0).on("mouseup.zoom", Jt, !0),
      yt = Wr(z, I),
      At = z.clientX,
      Ht = z.clientY;
    Bb(z.view),
      Cf(z),
      (B.mouse = [yt, this.__zoom.invert(yt)]),
      lc(this),
      B.start();
    function qt(Qt) {
      if ((ol(Qt), !B.moved)) {
        var Vt = Qt.clientX - At,
          Tt = Qt.clientY - Ht;
        B.moved = Vt * Vt + Tt * Tt > L;
      }
      B.event(Qt).zoom(
        "mouse",
        r($(B.that.__zoom, (B.mouse[0] = Wr(Qt, I)), B.mouse[1]), B.extent, f),
      );
    }
    function Jt(Qt) {
      Q.on("mousemove.zoom mouseup.zoom", null),
        Wb(Qt.view, B.moved),
        ol(Qt),
        B.event(Qt).end();
    }
  }
  function rt(z, ...k) {
    if (t.apply(this, arguments)) {
      var I = this.__zoom,
        B = Wr(z.changedTouches ? z.changedTouches[0] : z, this),
        Q = I.invert(B),
        yt = I.k * (z.shiftKey ? 0.5 : 2),
        At = r($(M(I, yt), B, Q), e.apply(this, k), f);
      ol(z),
        h > 0
          ? En(this).transition().duration(h).call(H, At, B, z)
          : En(this).call(T.transform, At, B, z);
    }
  }
  function dt(z, ...k) {
    if (t.apply(this, arguments)) {
      var I = z.touches,
        B = I.length,
        Q = K(this, k, z.changedTouches.length === B).event(z),
        yt,
        At,
        Ht,
        qt;
      for (Cf(z), At = 0; At < B; ++At)
        (Ht = I[At]),
          (qt = Wr(Ht, this)),
          (qt = [qt, this.__zoom.invert(qt), Ht.identifier]),
          Q.touch0
            ? !Q.touch1 &&
              Q.touch0[2] !== qt[2] &&
              ((Q.touch1 = qt), (Q.taps = 0))
            : ((Q.touch0 = qt), (yt = !0), (Q.taps = 1 + !!v));
      v && (v = clearTimeout(v)),
        yt &&
          (Q.taps < 2 &&
            ((y = qt[0]),
            (v = setTimeout(function () {
              v = null;
            }, _))),
          lc(this),
          Q.start());
    }
  }
  function ht(z, ...k) {
    if (this.__zooming) {
      var I = K(this, k).event(z),
        B = z.changedTouches,
        Q = B.length,
        yt,
        At,
        Ht,
        qt;
      for (ol(z), yt = 0; yt < Q; ++yt)
        (At = B[yt]),
          (Ht = Wr(At, this)),
          I.touch0 && I.touch0[2] === At.identifier
            ? (I.touch0[0] = Ht)
            : I.touch1 && I.touch1[2] === At.identifier && (I.touch1[0] = Ht);
      if (((At = I.that.__zoom), I.touch1)) {
        var Jt = I.touch0[0],
          Qt = I.touch0[1],
          Vt = I.touch1[0],
          Tt = I.touch1[1],
          j = (j = Vt[0] - Jt[0]) * j + (j = Vt[1] - Jt[1]) * j,
          it = (it = Tt[0] - Qt[0]) * it + (it = Tt[1] - Qt[1]) * it;
        (At = M(At, Math.sqrt(j / it))),
          (Ht = [(Jt[0] + Vt[0]) / 2, (Jt[1] + Vt[1]) / 2]),
          (qt = [(Qt[0] + Tt[0]) / 2, (Qt[1] + Tt[1]) / 2]);
      } else if (I.touch0) (Ht = I.touch0[0]), (qt = I.touch0[1]);
      else return;
      I.zoom("touch", r($(At, Ht, qt), I.extent, f));
    }
  }
  function G(z, ...k) {
    if (this.__zooming) {
      var I = K(this, k).event(z),
        B = z.changedTouches,
        Q = B.length,
        yt,
        At;
      for (
        Cf(z),
          w && clearTimeout(w),
          w = setTimeout(function () {
            w = null;
          }, _),
          yt = 0;
        yt < Q;
        ++yt
      )
        (At = B[yt]),
          I.touch0 && I.touch0[2] === At.identifier
            ? delete I.touch0
            : I.touch1 && I.touch1[2] === At.identifier && delete I.touch1;
      if (
        (I.touch1 && !I.touch0 && ((I.touch0 = I.touch1), delete I.touch1),
        I.touch0)
      )
        I.touch0[1] = this.__zoom.invert(I.touch0[0]);
      else if (
        (I.end(),
        I.taps === 2 &&
          ((At = Wr(At, this)), Math.hypot(y[0] - At[0], y[1] - At[1]) < A))
      ) {
        var Ht = En(this).on("dblclick.zoom");
        Ht && Ht.apply(this, arguments);
      }
    }
  }
  return (
    (T.wheelDelta = function (z) {
      return arguments.length
        ? ((o = typeof z == "function" ? z : Ka(+z)), T)
        : o;
    }),
    (T.filter = function (z) {
      return arguments.length
        ? ((t = typeof z == "function" ? z : Ka(!!z)), T)
        : t;
    }),
    (T.touchable = function (z) {
      return arguments.length
        ? ((s = typeof z == "function" ? z : Ka(!!z)), T)
        : s;
    }),
    (T.extent = function (z) {
      return arguments.length
        ? ((e =
            typeof z == "function"
              ? z
              : Ka([
                  [+z[0][0], +z[0][1]],
                  [+z[1][0], +z[1][1]],
                ])),
          T)
        : e;
    }),
    (T.scaleExtent = function (z) {
      return arguments.length
        ? ((c[0] = +z[0]), (c[1] = +z[1]), T)
        : [c[0], c[1]];
    }),
    (T.translateExtent = function (z) {
      return arguments.length
        ? ((f[0][0] = +z[0][0]),
          (f[1][0] = +z[1][0]),
          (f[0][1] = +z[0][1]),
          (f[1][1] = +z[1][1]),
          T)
        : [
            [f[0][0], f[0][1]],
            [f[1][0], f[1][1]],
          ];
    }),
    (T.constrain = function (z) {
      return arguments.length ? ((r = z), T) : r;
    }),
    (T.duration = function (z) {
      return arguments.length ? ((h = +z), T) : h;
    }),
    (T.interpolate = function (z) {
      return arguments.length ? ((d = z), T) : d;
    }),
    (T.on = function () {
      var z = g.on.apply(g, arguments);
      return z === g ? T : z;
    }),
    (T.clickDistance = function (z) {
      return arguments.length ? ((L = (z = +z) * z), T) : Math.sqrt(L);
    }),
    (T.tapDistance = function (z) {
      return arguments.length ? ((A = +z), T) : A;
    }),
    T
  );
}
function Wht(t) {
  const e = +this._x.call(null, t),
    r = +this._y.call(null, t);
  return nw(this.cover(e, r), e, r, t);
}
function nw(t, e, r, o) {
  if (isNaN(e) || isNaN(r)) return t;
  var s,
    c = t._root,
    f = { data: o },
    h = t._x0,
    d = t._y0,
    g = t._x1,
    v = t._y1,
    y,
    w,
    _,
    N,
    L,
    A,
    T,
    M;
  if (!c) return (t._root = f), t;
  for (; c.length; )
    if (
      ((L = e >= (y = (h + g) / 2)) ? (h = y) : (g = y),
      (A = r >= (w = (d + v) / 2)) ? (d = w) : (v = w),
      (s = c),
      !(c = c[(T = (A << 1) | L)]))
    )
      return (s[T] = f), t;
  if (
    ((_ = +t._x.call(null, c.data)),
    (N = +t._y.call(null, c.data)),
    e === _ && r === N)
  )
    return (f.next = c), s ? (s[T] = f) : (t._root = f), t;
  do
    (s = s ? (s[T] = new Array(4)) : (t._root = new Array(4))),
      (L = e >= (y = (h + g) / 2)) ? (h = y) : (g = y),
      (A = r >= (w = (d + v) / 2)) ? (d = w) : (v = w);
  while ((T = (A << 1) | L) === (M = ((N >= w) << 1) | (_ >= y)));
  return (s[M] = c), (s[T] = f), t;
}
function Uht(t) {
  var e,
    r,
    o = t.length,
    s,
    c,
    f = new Array(o),
    h = new Array(o),
    d = 1 / 0,
    g = 1 / 0,
    v = -1 / 0,
    y = -1 / 0;
  for (r = 0; r < o; ++r)
    isNaN((s = +this._x.call(null, (e = t[r])))) ||
      isNaN((c = +this._y.call(null, e))) ||
      ((f[r] = s),
      (h[r] = c),
      s < d && (d = s),
      s > v && (v = s),
      c < g && (g = c),
      c > y && (y = c));
  if (d > v || g > y) return this;
  for (this.cover(d, g).cover(v, y), r = 0; r < o; ++r)
    nw(this, f[r], h[r], t[r]);
  return this;
}
function jht(t, e) {
  if (isNaN((t = +t)) || isNaN((e = +e))) return this;
  var r = this._x0,
    o = this._y0,
    s = this._x1,
    c = this._y1;
  if (isNaN(r)) (s = (r = Math.floor(t)) + 1), (c = (o = Math.floor(e)) + 1);
  else {
    for (
      var f = s - r || 1, h = this._root, d, g;
      r > t || t >= s || o > e || e >= c;
    )
      switch (
        ((g = ((e < o) << 1) | (t < r)),
        (d = new Array(4)),
        (d[g] = h),
        (h = d),
        (f *= 2),
        g)
      ) {
        case 0:
          (s = r + f), (c = o + f);
          break;
        case 1:
          (r = s - f), (c = o + f);
          break;
        case 2:
          (s = r + f), (o = c - f);
          break;
        case 3:
          (r = s - f), (o = c - f);
          break;
      }
    this._root && this._root.length && (this._root = h);
  }
  return (this._x0 = r), (this._y0 = o), (this._x1 = s), (this._y1 = c), this;
}
function Ght() {
  var t = [];
  return (
    this.visit(function (e) {
      if (!e.length)
        do t.push(e.data);
        while ((e = e.next));
    }),
    t
  );
}
function Vht(t) {
  return arguments.length
    ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1])
    : isNaN(this._x0)
      ? void 0
      : [
          [this._x0, this._y0],
          [this._x1, this._y1],
        ];
}
function gn(t, e, r, o, s) {
  (this.node = t), (this.x0 = e), (this.y0 = r), (this.x1 = o), (this.y1 = s);
}
function Kht(t, e, r) {
  var o,
    s = this._x0,
    c = this._y0,
    f,
    h,
    d,
    g,
    v = this._x1,
    y = this._y1,
    w = [],
    _ = this._root,
    N,
    L;
  for (
    _ && w.push(new gn(_, s, c, v, y)),
      r == null
        ? (r = 1 / 0)
        : ((s = t - r), (c = e - r), (v = t + r), (y = e + r), (r *= r));
    (N = w.pop());
  )
    if (
      !(
        !(_ = N.node) ||
        (f = N.x0) > v ||
        (h = N.y0) > y ||
        (d = N.x1) < s ||
        (g = N.y1) < c
      )
    )
      if (_.length) {
        var A = (f + d) / 2,
          T = (h + g) / 2;
        w.push(
          new gn(_[3], A, T, d, g),
          new gn(_[2], f, T, A, g),
          new gn(_[1], A, h, d, T),
          new gn(_[0], f, h, A, T),
        ),
          (L = ((e >= T) << 1) | (t >= A)) &&
            ((N = w[w.length - 1]),
            (w[w.length - 1] = w[w.length - 1 - L]),
            (w[w.length - 1 - L] = N));
      } else {
        var M = t - +this._x.call(null, _.data),
          $ = e - +this._y.call(null, _.data),
          E = M * M + $ * $;
        if (E < r) {
          var H = Math.sqrt((r = E));
          (s = t - H), (c = e - H), (v = t + H), (y = e + H), (o = _.data);
        }
      }
  return o;
}
function Xht(t) {
  if (
    isNaN((v = +this._x.call(null, t))) ||
    isNaN((y = +this._y.call(null, t)))
  )
    return this;
  var e,
    r = this._root,
    o,
    s,
    c,
    f = this._x0,
    h = this._y0,
    d = this._x1,
    g = this._y1,
    v,
    y,
    w,
    _,
    N,
    L,
    A,
    T;
  if (!r) return this;
  if (r.length)
    for (;;) {
      if (
        ((N = v >= (w = (f + d) / 2)) ? (f = w) : (d = w),
        (L = y >= (_ = (h + g) / 2)) ? (h = _) : (g = _),
        (e = r),
        !(r = r[(A = (L << 1) | N)]))
      )
        return this;
      if (!r.length) break;
      (e[(A + 1) & 3] || e[(A + 2) & 3] || e[(A + 3) & 3]) &&
        ((o = e), (T = A));
    }
  for (; r.data !== t; ) if (((s = r), !(r = r.next))) return this;
  return (
    (c = r.next) && delete r.next,
    s
      ? (c ? (s.next = c) : delete s.next, this)
      : e
        ? (c ? (e[A] = c) : delete e[A],
          (r = e[0] || e[1] || e[2] || e[3]) &&
            r === (e[3] || e[2] || e[1] || e[0]) &&
            !r.length &&
            (o ? (o[T] = r) : (this._root = r)),
          this)
        : ((this._root = c), this)
  );
}
function Yht(t) {
  for (var e = 0, r = t.length; e < r; ++e) this.remove(t[e]);
  return this;
}
function Zht() {
  return this._root;
}
function Qht() {
  var t = 0;
  return (
    this.visit(function (e) {
      if (!e.length)
        do ++t;
        while ((e = e.next));
    }),
    t
  );
}
function Jht(t) {
  var e = [],
    r,
    o = this._root,
    s,
    c,
    f,
    h,
    d;
  for (
    o && e.push(new gn(o, this._x0, this._y0, this._x1, this._y1));
    (r = e.pop());
  )
    if (
      !t((o = r.node), (c = r.x0), (f = r.y0), (h = r.x1), (d = r.y1)) &&
      o.length
    ) {
      var g = (c + h) / 2,
        v = (f + d) / 2;
      (s = o[3]) && e.push(new gn(s, g, v, h, d)),
        (s = o[2]) && e.push(new gn(s, c, v, g, d)),
        (s = o[1]) && e.push(new gn(s, g, f, h, v)),
        (s = o[0]) && e.push(new gn(s, c, f, g, v));
    }
  return this;
}
function tdt(t) {
  var e = [],
    r = [],
    o;
  for (
    this._root &&
    e.push(new gn(this._root, this._x0, this._y0, this._x1, this._y1));
    (o = e.pop());
  ) {
    var s = o.node;
    if (s.length) {
      var c,
        f = o.x0,
        h = o.y0,
        d = o.x1,
        g = o.y1,
        v = (f + d) / 2,
        y = (h + g) / 2;
      (c = s[0]) && e.push(new gn(c, f, h, v, y)),
        (c = s[1]) && e.push(new gn(c, v, h, d, y)),
        (c = s[2]) && e.push(new gn(c, f, y, v, g)),
        (c = s[3]) && e.push(new gn(c, v, y, d, g));
    }
    r.push(o);
  }
  for (; (o = r.pop()); ) t(o.node, o.x0, o.y0, o.x1, o.y1);
  return this;
}
function edt(t) {
  return t[0];
}
function ndt(t) {
  return arguments.length ? ((this._x = t), this) : this._x;
}
function rdt(t) {
  return t[1];
}
function idt(t) {
  return arguments.length ? ((this._y = t), this) : this._y;
}
function gd(t, e, r) {
  var o = new vd(e ?? edt, r ?? rdt, NaN, NaN, NaN, NaN);
  return t == null ? o : o.addAll(t);
}
function vd(t, e, r, o, s, c) {
  (this._x = t),
    (this._y = e),
    (this._x0 = r),
    (this._y0 = o),
    (this._x1 = s),
    (this._y1 = c),
    (this._root = void 0);
}
function Mm(t) {
  for (var e = { data: t.data }, r = e; (t = t.next); )
    r = r.next = { data: t.data };
  return e;
}
var yn = (gd.prototype = vd.prototype);
yn.copy = function () {
  var t = new vd(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
    e = this._root,
    r,
    o;
  if (!e) return t;
  if (!e.length) return (t._root = Mm(e)), t;
  for (r = [{ source: e, target: (t._root = new Array(4)) }]; (e = r.pop()); )
    for (var s = 0; s < 4; ++s)
      (o = e.source[s]) &&
        (o.length
          ? r.push({ source: o, target: (e.target[s] = new Array(4)) })
          : (e.target[s] = Mm(o)));
  return t;
};
yn.add = Wht;
yn.addAll = Uht;
yn.cover = jht;
yn.data = Ght;
yn.extent = Vht;
yn.find = Kht;
yn.remove = Xht;
yn.removeAll = Yht;
yn.root = Zht;
yn.size = Qht;
yn.visit = Jht;
yn.visitAfter = tdt;
yn.x = ndt;
yn.y = idt;
function vn(t) {
  return function () {
    return t;
  };
}
function ki(t) {
  return (t() - 0.5) * 1e-6;
}
function odt(t) {
  return t.x + t.vx;
}
function sdt(t) {
  return t.y + t.vy;
}
function ldt(t) {
  var e,
    r,
    o,
    s = 1,
    c = 1;
  typeof t != "function" && (t = vn(t == null ? 1 : +t));
  function f() {
    for (var g, v = e.length, y, w, _, N, L, A, T = 0; T < c; ++T)
      for (y = gd(e, odt, sdt).visitAfter(h), g = 0; g < v; ++g)
        (w = e[g]),
          (L = r[w.index]),
          (A = L * L),
          (_ = w.x + w.vx),
          (N = w.y + w.vy),
          y.visit(M);
    function M($, E, H, K, ct) {
      var Y = $.data,
        nt = $.r,
        rt = L + nt;
      if (Y) {
        if (Y.index > w.index) {
          var dt = _ - Y.x - Y.vx,
            ht = N - Y.y - Y.vy,
            G = dt * dt + ht * ht;
          G < rt * rt &&
            (dt === 0 && ((dt = ki(o)), (G += dt * dt)),
            ht === 0 && ((ht = ki(o)), (G += ht * ht)),
            (G = ((rt - (G = Math.sqrt(G))) / G) * s),
            (w.vx += (dt *= G) * (rt = (nt *= nt) / (A + nt))),
            (w.vy += (ht *= G) * rt),
            (Y.vx -= dt * (rt = 1 - rt)),
            (Y.vy -= ht * rt));
        }
        return;
      }
      return E > _ + rt || K < _ - rt || H > N + rt || ct < N - rt;
    }
  }
  function h(g) {
    if (g.data) return (g.r = r[g.data.index]);
    for (var v = (g.r = 0); v < 4; ++v) g[v] && g[v].r > g.r && (g.r = g[v].r);
  }
  function d() {
    if (e) {
      var g,
        v = e.length,
        y;
      for (r = new Array(v), g = 0; g < v; ++g)
        (y = e[g]), (r[y.index] = +t(y, g, e));
    }
  }
  return (
    (f.initialize = function (g, v) {
      (e = g), (o = v), d();
    }),
    (f.iterations = function (g) {
      return arguments.length ? ((c = +g), f) : c;
    }),
    (f.strength = function (g) {
      return arguments.length ? ((s = +g), f) : s;
    }),
    (f.radius = function (g) {
      return arguments.length
        ? ((t = typeof g == "function" ? g : vn(+g)), d(), f)
        : t;
    }),
    f
  );
}
function adt(t) {
  return t.index;
}
function Nm(t, e) {
  var r = t.get(e);
  if (!r) throw new Error("node not found: " + e);
  return r;
}
function cdt(t) {
  var e = adt,
    r = y,
    o,
    s = vn(30),
    c,
    f,
    h,
    d,
    g,
    v = 1;
  t == null && (t = []);
  function y(A) {
    return 1 / Math.min(h[A.source.index], h[A.target.index]);
  }
  function w(A) {
    for (var T = 0, M = t.length; T < v; ++T)
      for (var $ = 0, E, H, K, ct, Y, nt, rt; $ < M; ++$)
        (E = t[$]),
          (H = E.source),
          (K = E.target),
          (ct = K.x + K.vx - H.x - H.vx || ki(g)),
          (Y = K.y + K.vy - H.y - H.vy || ki(g)),
          (nt = Math.sqrt(ct * ct + Y * Y)),
          (nt = ((nt - c[$]) / nt) * A * o[$]),
          (ct *= nt),
          (Y *= nt),
          (K.vx -= ct * (rt = d[$])),
          (K.vy -= Y * rt),
          (H.vx += ct * (rt = 1 - rt)),
          (H.vy += Y * rt);
  }
  function _() {
    if (f) {
      var A,
        T = f.length,
        M = t.length,
        $ = new Map(f.map((H, K) => [e(H, K, f), H])),
        E;
      for (A = 0, h = new Array(T); A < M; ++A)
        (E = t[A]),
          (E.index = A),
          typeof E.source != "object" && (E.source = Nm($, E.source)),
          typeof E.target != "object" && (E.target = Nm($, E.target)),
          (h[E.source.index] = (h[E.source.index] || 0) + 1),
          (h[E.target.index] = (h[E.target.index] || 0) + 1);
      for (A = 0, d = new Array(M); A < M; ++A)
        (E = t[A]),
          (d[A] = h[E.source.index] / (h[E.source.index] + h[E.target.index]));
      (o = new Array(M)), N(), (c = new Array(M)), L();
    }
  }
  function N() {
    if (f) for (var A = 0, T = t.length; A < T; ++A) o[A] = +r(t[A], A, t);
  }
  function L() {
    if (f) for (var A = 0, T = t.length; A < T; ++A) c[A] = +s(t[A], A, t);
  }
  return (
    (w.initialize = function (A, T) {
      (f = A), (g = T), _();
    }),
    (w.links = function (A) {
      return arguments.length ? ((t = A), _(), w) : t;
    }),
    (w.id = function (A) {
      return arguments.length ? ((e = A), w) : e;
    }),
    (w.iterations = function (A) {
      return arguments.length ? ((v = +A), w) : v;
    }),
    (w.strength = function (A) {
      return arguments.length
        ? ((r = typeof A == "function" ? A : vn(+A)), N(), w)
        : r;
    }),
    (w.distance = function (A) {
      return arguments.length
        ? ((s = typeof A == "function" ? A : vn(+A)), L(), w)
        : s;
    }),
    w
  );
}
const udt = 1664525,
  fdt = 1013904223,
  Pm = 4294967296;
function hdt() {
  let t = 1;
  return () => (t = (udt * t + fdt) % Pm) / Pm;
}
function ddt(t) {
  return t.x;
}
function pdt(t) {
  return t.y;
}
var gdt = 10,
  vdt = Math.PI * (3 - Math.sqrt(5));
function mdt(t) {
  var e,
    r = 1,
    o = 0.001,
    s = 1 - Math.pow(o, 1 / 300),
    c = 0,
    f = 0.6,
    h = new Map(),
    d = fd(y),
    g = Xl("tick", "end"),
    v = hdt();
  t == null && (t = []);
  function y() {
    w(), g.call("tick", e), r < o && (d.stop(), g.call("end", e));
  }
  function w(L) {
    var A,
      T = t.length,
      M;
    L === void 0 && (L = 1);
    for (var $ = 0; $ < L; ++$)
      for (
        r += (c - r) * s,
          h.forEach(function (E) {
            E(r);
          }),
          A = 0;
        A < T;
        ++A
      )
        (M = t[A]),
          M.fx == null ? (M.x += M.vx *= f) : ((M.x = M.fx), (M.vx = 0)),
          M.fy == null ? (M.y += M.vy *= f) : ((M.y = M.fy), (M.vy = 0));
    return e;
  }
  function _() {
    for (var L = 0, A = t.length, T; L < A; ++L) {
      if (
        ((T = t[L]),
        (T.index = L),
        T.fx != null && (T.x = T.fx),
        T.fy != null && (T.y = T.fy),
        isNaN(T.x) || isNaN(T.y))
      ) {
        var M = gdt * Math.sqrt(0.5 + L),
          $ = L * vdt;
        (T.x = M * Math.cos($)), (T.y = M * Math.sin($));
      }
      (isNaN(T.vx) || isNaN(T.vy)) && (T.vx = T.vy = 0);
    }
  }
  function N(L) {
    return L.initialize && L.initialize(t, v), L;
  }
  return (
    _(),
    (e = {
      tick: w,
      restart: function () {
        return d.restart(y), e;
      },
      stop: function () {
        return d.stop(), e;
      },
      nodes: function (L) {
        return arguments.length ? ((t = L), _(), h.forEach(N), e) : t;
      },
      alpha: function (L) {
        return arguments.length ? ((r = +L), e) : r;
      },
      alphaMin: function (L) {
        return arguments.length ? ((o = +L), e) : o;
      },
      alphaDecay: function (L) {
        return arguments.length ? ((s = +L), e) : +s;
      },
      alphaTarget: function (L) {
        return arguments.length ? ((c = +L), e) : c;
      },
      velocityDecay: function (L) {
        return arguments.length ? ((f = 1 - L), e) : 1 - f;
      },
      randomSource: function (L) {
        return arguments.length ? ((v = L), h.forEach(N), e) : v;
      },
      force: function (L, A) {
        return arguments.length > 1
          ? (A == null ? h.delete(L) : h.set(L, N(A)), e)
          : h.get(L);
      },
      find: function (L, A, T) {
        var M = 0,
          $ = t.length,
          E,
          H,
          K,
          ct,
          Y;
        for (T == null ? (T = 1 / 0) : (T *= T), M = 0; M < $; ++M)
          (ct = t[M]),
            (E = L - ct.x),
            (H = A - ct.y),
            (K = E * E + H * H),
            K < T && ((Y = ct), (T = K));
        return Y;
      },
      on: function (L, A) {
        return arguments.length > 1 ? (g.on(L, A), e) : g.on(L);
      },
    })
  );
}
function ydt() {
  var t,
    e,
    r,
    o,
    s = vn(-30),
    c,
    f = 1,
    h = 1 / 0,
    d = 0.81;
  function g(_) {
    var N,
      L = t.length,
      A = gd(t, ddt, pdt).visitAfter(y);
    for (o = _, N = 0; N < L; ++N) (e = t[N]), A.visit(w);
  }
  function v() {
    if (t) {
      var _,
        N = t.length,
        L;
      for (c = new Array(N), _ = 0; _ < N; ++_)
        (L = t[_]), (c[L.index] = +s(L, _, t));
    }
  }
  function y(_) {
    var N = 0,
      L,
      A,
      T = 0,
      M,
      $,
      E;
    if (_.length) {
      for (M = $ = E = 0; E < 4; ++E)
        (L = _[E]) &&
          (A = Math.abs(L.value)) &&
          ((N += L.value), (T += A), (M += A * L.x), ($ += A * L.y));
      (_.x = M / T), (_.y = $ / T);
    } else {
      (L = _), (L.x = L.data.x), (L.y = L.data.y);
      do N += c[L.data.index];
      while ((L = L.next));
    }
    _.value = N;
  }
  function w(_, N, L, A) {
    if (!_.value) return !0;
    var T = _.x - e.x,
      M = _.y - e.y,
      $ = A - N,
      E = T * T + M * M;
    if (($ * $) / d < E)
      return (
        E < h &&
          (T === 0 && ((T = ki(r)), (E += T * T)),
          M === 0 && ((M = ki(r)), (E += M * M)),
          E < f && (E = Math.sqrt(f * E)),
          (e.vx += (T * _.value * o) / E),
          (e.vy += (M * _.value * o) / E)),
        !0
      );
    if (_.length || E >= h) return;
    (_.data !== e || _.next) &&
      (T === 0 && ((T = ki(r)), (E += T * T)),
      M === 0 && ((M = ki(r)), (E += M * M)),
      E < f && (E = Math.sqrt(f * E)));
    do
      _.data !== e &&
        (($ = (c[_.data.index] * o) / E), (e.vx += T * $), (e.vy += M * $));
    while ((_ = _.next));
  }
  return (
    (g.initialize = function (_, N) {
      (t = _), (r = N), v();
    }),
    (g.strength = function (_) {
      return arguments.length
        ? ((s = typeof _ == "function" ? _ : vn(+_)), v(), g)
        : s;
    }),
    (g.distanceMin = function (_) {
      return arguments.length ? ((f = _ * _), g) : Math.sqrt(f);
    }),
    (g.distanceMax = function (_) {
      return arguments.length ? ((h = _ * _), g) : Math.sqrt(h);
    }),
    (g.theta = function (_) {
      return arguments.length ? ((d = _ * _), g) : Math.sqrt(d);
    }),
    g
  );
}
function bdt(t) {
  var e = vn(0.1),
    r,
    o,
    s;
  typeof t != "function" && (t = vn(t == null ? 0 : +t));
  function c(h) {
    for (var d = 0, g = r.length, v; d < g; ++d)
      (v = r[d]), (v.vx += (s[d] - v.x) * o[d] * h);
  }
  function f() {
    if (r) {
      var h,
        d = r.length;
      for (o = new Array(d), s = new Array(d), h = 0; h < d; ++h)
        o[h] = isNaN((s[h] = +t(r[h], h, r))) ? 0 : +e(r[h], h, r);
    }
  }
  return (
    (c.initialize = function (h) {
      (r = h), f();
    }),
    (c.strength = function (h) {
      return arguments.length
        ? ((e = typeof h == "function" ? h : vn(+h)), f(), c)
        : e;
    }),
    (c.x = function (h) {
      return arguments.length
        ? ((t = typeof h == "function" ? h : vn(+h)), f(), c)
        : t;
    }),
    c
  );
}
function wdt(t) {
  var e = vn(0.1),
    r,
    o,
    s;
  typeof t != "function" && (t = vn(t == null ? 0 : +t));
  function c(h) {
    for (var d = 0, g = r.length, v; d < g; ++d)
      (v = r[d]), (v.vy += (s[d] - v.y) * o[d] * h);
  }
  function f() {
    if (r) {
      var h,
        d = r.length;
      for (o = new Array(d), s = new Array(d), h = 0; h < d; ++h)
        o[h] = isNaN((s[h] = +t(r[h], h, r))) ? 0 : +e(r[h], h, r);
    }
  }
  return (
    (c.initialize = function (h) {
      (r = h), f();
    }),
    (c.strength = function (h) {
      return arguments.length
        ? ((e = typeof h == "function" ? h : vn(+h)), f(), c)
        : e;
    }),
    (c.y = function (h) {
      return arguments.length
        ? ((t = typeof h == "function" ? h : vn(+h)), f(), c)
        : t;
    }),
    c
  );
}
var xdt = Object.defineProperty,
  _dt = (t, e, r) =>
    e in t
      ? xdt(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (t[e] = r),
  $e = (t, e, r) => (_dt(t, typeof e != "symbol" ? e + "" : e, r), r);
function Sdt() {
  return {
    drag: { end: 0, start: 0.1 },
    filter: { link: 1, type: 0.1, unlinked: { include: 0.1, exclude: 0.1 } },
    focus: { acquire: () => 0.1, release: () => 0.1 },
    initialize: 1,
    labels: { links: { hide: 0, show: 0 }, nodes: { hide: 0, show: 0 } },
    resize: 0.5,
  };
}
function $m(t) {
  if (typeof t == "object" && t !== null) {
    if (typeof Object.getPrototypeOf == "function") {
      const e = Object.getPrototypeOf(t);
      return e === Object.prototype || e === null;
    }
    return Object.prototype.toString.call(t) === "[object Object]";
  }
  return !1;
}
function Ci(...t) {
  return t.reduce((e, r) => {
    if (Array.isArray(r))
      throw new TypeError(
        "Arguments provided to deepmerge must be objects, not arrays.",
      );
    return (
      Object.keys(r).forEach((o) => {
        ["__proto__", "constructor", "prototype"].includes(o) ||
          (Array.isArray(e[o]) && Array.isArray(r[o])
            ? (e[o] = Ci.options.mergeArrays
                ? Array.from(new Set(e[o].concat(r[o])))
                : r[o])
            : $m(e[o]) && $m(r[o])
              ? (e[o] = Ci(e[o], r[o]))
              : (e[o] = r[o]));
      }),
      e
    );
  }, {});
}
const rw = { mergeArrays: !0 };
Ci.options = rw;
Ci.withOptions = (t, ...e) => {
  Ci.options = { mergeArrays: !0, ...t };
  const r = Ci(...e);
  return (Ci.options = rw), r;
};
function kdt() {
  return {
    centering: { enabled: !0, strength: 0.1 },
    charge: { enabled: !0, strength: -1 },
    collision: { enabled: !0, strength: 1, radiusMultiplier: 2 },
    link: { enabled: !0, strength: 1, length: 128 },
  };
}
function Cdt() {
  return {
    includeUnlinked: !0,
    linkFilter: () => !0,
    nodeTypeFilter: void 0,
    showLinkLabels: !0,
    showNodeLabels: !0,
  };
}
function iw(t) {
  t.preventDefault(), t.stopPropagation();
}
function ow(t) {
  return typeof t == "number";
}
function Di(t, e) {
  return ow(t.nodeRadius) ? t.nodeRadius : t.nodeRadius(e);
}
function Tdt(t) {
  return `${t.source.id}-${t.target.id}`;
}
function sw(t) {
  return `link-arrow-${t}`.replace(/[()]/g, "~");
}
function Edt(t) {
  return `url(#${sw(t.color)})`;
}
function Ldt(t) {
  return {
    size: t,
    padding: (e, r) => Di(r, e) + 2 * t,
    ref: [t / 2, t / 2],
    path: [
      [0, 0],
      [0, t],
      [t, t / 2],
    ],
    viewBox: [0, 0, t, t].join(","),
  };
}
const lw = { Arrow: (t) => Ldt(t) },
  Adt = (t, e, r) => [e / 2, r / 2],
  aw = (t, e, r) => [Om(0, e), Om(0, r)];
function Om(t, e) {
  return Math.random() * (e - t) + t;
}
function Mdt(t) {
  const e = Object.fromEntries(t.nodes.map((r) => [r.id, [r.x, r.y]]));
  return (r, o, s) => {
    const [c, f] = e[r.id] ?? [];
    return !c || !f ? aw(r, o, s) : [c, f];
  };
}
const dh = { Centered: Adt, Randomized: aw, Stable: Mdt };
function Ndt() {
  return {
    autoResize: !1,
    callbacks: {},
    hooks: {},
    initial: Cdt(),
    nodeRadius: 16,
    marker: lw.Arrow(4),
    modifiers: {},
    positionInitializer: dh.Centered,
    simulation: { alphas: Sdt(), forces: kdt() },
    zoom: { initial: 1, min: 0.1, max: 2 },
  };
}
function Pdt(t = {}) {
  return Ci.withOptions({ mergeArrays: !1 }, Ndt(), t);
}
function $dt({
  applyZoom: t,
  container: e,
  onDoubleClick: r,
  onPointerMoved: o,
  onPointerUp: s,
  offset: [c, f],
  scale: h,
  zoom: d,
}) {
  const g = e
    .classed("graph", !0)
    .append("svg")
    .attr("height", "100%")
    .attr("width", "100%")
    .call(d)
    .on("contextmenu", (v) => iw(v))
    .on("dblclick", (v) => (r == null ? void 0 : r(v)))
    .on("dblclick.zoom", null)
    .on("pointermove", (v) => (o == null ? void 0 : o(v)))
    .on("pointerup", (v) => (s == null ? void 0 : s(v)))
    .style("cursor", "grab");
  return t && g.call(d.transform, pd.translate(c, f).scale(h)), g.append("g");
}
function Odt({ canvas: t, scale: e, xOffset: r, yOffset: o }) {
  t == null || t.attr("transform", `translate(${r},${o})scale(${e})`);
}
function Ddt({ config: t, onDragStart: e, onDragEnd: r }) {
  var o, s;
  const c = Qut()
    .filter((f) =>
      f.type === "mousedown"
        ? f.button === 0
        : f.type === "touchstart"
          ? f.touches.length === 1
          : !1,
    )
    .on("start", (f, h) => {
      f.active === 0 && e(f, h),
        En(f.sourceEvent.target).classed("grabbed", !0),
        (h.fx = h.x),
        (h.fy = h.y);
    })
    .on("drag", (f, h) => {
      (h.fx = f.x), (h.fy = f.y);
    })
    .on("end", (f, h) => {
      f.active === 0 && r(f, h),
        En(f.sourceEvent.target).classed("grabbed", !1),
        (h.fx = void 0),
        (h.fy = void 0);
    });
  return (s = (o = t.modifiers).drag) == null || s.call(o, c), c;
}
function Rdt({
  graph: t,
  filter: e,
  focusedNode: r,
  includeUnlinked: o,
  linkFilter: s,
}) {
  const c = t.links.filter(
      (d) => e.includes(d.source.type) && e.includes(d.target.type) && s(d),
    ),
    f = (d) =>
      c.find((g) => g.source.id === d.id || g.target.id === d.id) !== void 0,
    h = t.nodes.filter((d) => e.includes(d.type) && (o || f(d)));
  return r === void 0 || !e.includes(r.type)
    ? { nodes: h, links: c }
    : zdt({ nodes: h, links: c }, r);
}
function zdt(t, e) {
  const r = [...Fdt(t, e), ...Idt(t, e)],
    o = r.flatMap((s) => [s.source, s.target]);
  return { nodes: [...new Set([...o, e])], links: [...new Set(r)] };
}
function Fdt(t, e) {
  return cw(t, e, (r, o) => r.target.id === o.id);
}
function Idt(t, e) {
  return cw(t, e, (r, o) => r.source.id === o.id);
}
function cw(t, e, r) {
  const o = new Set(t.links),
    s = new Set([e]),
    c = [];
  for (; o.size > 0; ) {
    const f = [...o].filter((h) => [...s].some((d) => r(h, d)));
    if (f.length === 0) return c;
    f.forEach((h) => {
      s.add(h.source), s.add(h.target), c.push(h), o.delete(h);
    });
  }
  return c;
}
function ph(t) {
  return t.x ?? 0;
}
function gh(t) {
  return t.y ?? 0;
}
function md({ source: t, target: e }) {
  const r = new pn(ph(t), gh(t)),
    o = new pn(ph(e), gh(e)),
    s = o.subtract(r),
    c = s.length(),
    f = s.normalize(),
    h = f.multiply(-1);
  return { s: r, t: o, dist: c, norm: f, endNorm: h };
}
function uw({ center: t, node: e }) {
  const r = new pn(ph(e), gh(e));
  let o = t;
  return (
    r.x === o.x && r.y === o.y && (o = o.add(new pn(0, 1))), { n: r, c: o }
  );
}
function fw({ config: t, source: e, target: r }) {
  const { s: o, t: s, norm: c } = md({ config: t, source: e, target: r }),
    f = o.add(c.multiply(Di(t, e) - 1)),
    h = s.subtract(c.multiply(t.marker.padding(r, t)));
  return { start: f, end: h };
}
function Hdt(t) {
  const { start: e, end: r } = fw(t);
  return `M${e.x},${e.y}
          L${r.x},${r.y}`;
}
function qdt(t) {
  const { start: e, end: r } = fw(t),
    o = r.subtract(e).multiply(0.5),
    s = e.add(o);
  return `translate(${s.x - 8},${s.y - 4})`;
}
function Bdt({ config: t, source: e, target: r }) {
  const {
      s: o,
      t: s,
      dist: c,
      norm: f,
      endNorm: h,
    } = md({ config: t, source: e, target: r }),
    d = 10,
    g = f
      .rotateByDegrees(-d)
      .multiply(Di(t, e) - 1)
      .add(o),
    v = h
      .rotateByDegrees(d)
      .multiply(Di(t, r))
      .add(s)
      .add(h.rotateByDegrees(d).multiply(2 * t.marker.size)),
    y = 1.2 * c;
  return `M${g.x},${g.y}
          A${y},${y},0,0,1,${v.x},${v.y}`;
}
function Wdt({ center: t, config: e, node: r }) {
  const { n: o, c: s } = uw({ center: t, config: e, node: r }),
    c = Di(e, r),
    f = o.subtract(s),
    h = f.multiply(1 / f.length()),
    d = 40,
    g = h
      .rotateByDegrees(d)
      .multiply(c - 1)
      .add(o),
    v = h
      .rotateByDegrees(-d)
      .multiply(c)
      .add(o)
      .add(h.rotateByDegrees(-d).multiply(2 * e.marker.size));
  return `M${g.x},${g.y}
          A${c},${c},0,1,0,${v.x},${v.y}`;
}
function Udt({ config: t, source: e, target: r }) {
  const { t: o, dist: s, endNorm: c } = md({ config: t, source: e, target: r }),
    f = 10,
    h = c
      .rotateByDegrees(f)
      .multiply(0.5 * s)
      .add(o);
  return `translate(${h.x},${h.y})`;
}
function jdt({ center: t, config: e, node: r }) {
  const { n: o, c: s } = uw({ center: t, config: e, node: r }),
    c = o.subtract(s),
    f = c
      .multiply(1 / c.length())
      .multiply(3 * Di(e, r) + 8)
      .add(o);
  return `translate(${f.x},${f.y})`;
}
const ss = {
  line: { labelTransform: qdt, path: Hdt },
  arc: { labelTransform: Udt, path: Bdt },
  reflexive: { labelTransform: jdt, path: Wdt },
};
function Gdt(t) {
  return t.append("g").classed("links", !0).selectAll("path");
}
function Vdt({ config: t, graph: e, selection: r, showLabels: o }) {
  const s =
    r == null
      ? void 0
      : r
          .data(e.links, (c) => Tdt(c))
          .join((c) => {
            var f, h, d, g;
            const v = c.append("g"),
              y = v
                .append("path")
                .classed("link", !0)
                .style("marker-end", (_) => Edt(_))
                .style("stroke", (_) => _.color);
            (h = (f = t.modifiers).link) == null || h.call(f, y);
            const w = v
              .append("text")
              .classed("link__label", !0)
              .style("fill", (_) => (_.label ? _.label.color : null))
              .style("font-size", (_) => (_.label ? _.label.fontSize : null))
              .text((_) => (_.label ? _.label.text : null));
            return (g = (d = t.modifiers).linkLabel) == null || g.call(d, w), v;
          });
  return (
    s == null ||
      s.select(".link__label").attr("opacity", (c) => (c.label && o ? 1 : 0)),
    s
  );
}
function Kdt(t) {
  Xdt(t), Ydt(t);
}
function Xdt({ center: t, config: e, graph: r, selection: o }) {
  o == null ||
    o
      .selectAll("path")
      .attr("d", (s) =>
        s.source.x === void 0 ||
        s.source.y === void 0 ||
        s.target.x === void 0 ||
        s.target.y === void 0
          ? ""
          : s.source.id === s.target.id
            ? ss.reflexive.path({ config: e, node: s.source, center: t })
            : hw(r, s.source, s.target)
              ? ss.arc.path({ config: e, source: s.source, target: s.target })
              : ss.line.path({ config: e, source: s.source, target: s.target }),
      );
}
function Ydt({ config: t, center: e, graph: r, selection: o }) {
  o == null ||
    o.select(".link__label").attr("transform", (s) =>
      s.source.x === void 0 ||
      s.source.y === void 0 ||
      s.target.x === void 0 ||
      s.target.y === void 0
        ? "translate(0, 0)"
        : s.source.id === s.target.id
          ? ss.reflexive.labelTransform({
              config: t,
              node: s.source,
              center: e,
            })
          : hw(r, s.source, s.target)
            ? ss.arc.labelTransform({
                config: t,
                source: s.source,
                target: s.target,
              })
            : ss.line.labelTransform({
                config: t,
                source: s.source,
                target: s.target,
              }),
    );
}
function hw(t, e, r) {
  return (
    e.id !== r.id &&
    t.links.some((o) => o.target.id === e.id && o.source.id === r.id) &&
    t.links.some((o) => o.target.id === r.id && o.source.id === e.id)
  );
}
function Zdt(t) {
  return t.append("defs").selectAll("marker");
}
function Qdt({ config: t, graph: e, selection: r }) {
  return r == null
    ? void 0
    : r
        .data(Jdt(e), (o) => o)
        .join((o) => {
          const s = o
            .append("marker")
            .attr("id", (c) => sw(c))
            .attr("markerHeight", 4 * t.marker.size)
            .attr("markerWidth", 4 * t.marker.size)
            .attr("markerUnits", "userSpaceOnUse")
            .attr("orient", "auto")
            .attr("refX", t.marker.ref[0])
            .attr("refY", t.marker.ref[1])
            .attr("viewBox", t.marker.viewBox)
            .style("fill", (c) => c);
          return s.append("path").attr("d", tpt(t.marker.path)), s;
        });
}
function Jdt(t) {
  return [...new Set(t.links.map((e) => e.color))];
}
function tpt(t) {
  const [e, ...r] = t;
  if (!e) return "M0,0";
  const [o, s] = e;
  return r.reduce((c, [f, h]) => `${c}L${f},${h}`, `M${o},${s}`);
}
function ept(t) {
  return t.append("g").classed("nodes", !0).selectAll("circle");
}
function npt({
  config: t,
  drag: e,
  graph: r,
  onNodeContext: o,
  onNodeSelected: s,
  selection: c,
  showLabels: f,
}) {
  const h =
    c == null
      ? void 0
      : c
          .data(r.nodes, (d) => d.id)
          .join((d) => {
            var g, v, y, w;
            const _ = d.append("g");
            e !== void 0 && _.call(e);
            const N = _.append("circle")
              .classed("node", !0)
              .attr("r", (A) => Di(t, A))
              .on("contextmenu", (A, T) => {
                iw(A), o(T);
              })
              .on("pointerdown", (A, T) => ipt(A, T, s ?? o))
              .style("fill", (A) => A.color);
            (v = (g = t.modifiers).node) == null || v.call(g, N);
            const L = _.append("text")
              .classed("node__label", !0)
              .attr("dy", "0.33em")
              .style("fill", (A) => (A.label ? A.label.color : null))
              .style("font-size", (A) => (A.label ? A.label.fontSize : null))
              .style("stroke", "none")
              .text((A) => (A.label ? A.label.text : null));
            return (w = (y = t.modifiers).nodeLabel) == null || w.call(y, L), _;
          });
  return (
    h == null || h.select(".node").classed("focused", (d) => d.isFocused),
    h == null || h.select(".node__label").attr("opacity", f ? 1 : 0),
    h
  );
}
const rpt = 500;
function ipt(t, e, r) {
  if (t.button !== void 0 && t.button !== 0) return;
  const o = e.lastInteractionTimestamp,
    s = Date.now();
  if (o === void 0 || s - o > rpt) {
    e.lastInteractionTimestamp = s;
    return;
  }
  (e.lastInteractionTimestamp = void 0), r(e);
}
function opt(t) {
  t == null || t.attr("transform", (e) => `translate(${e.x ?? 0},${e.y ?? 0})`);
}
function spt({ center: t, config: e, graph: r, onTick: o }) {
  var s, c;
  const f = mdt(r.nodes),
    h = e.simulation.forces.centering;
  if (h && h.enabled) {
    const y = h.strength;
    f.force("x", bdt(() => t().x).strength(y)).force(
      "y",
      wdt(() => t().y).strength(y),
    );
  }
  const d = e.simulation.forces.charge;
  d && d.enabled && f.force("charge", ydt().strength(d.strength));
  const g = e.simulation.forces.collision;
  g &&
    g.enabled &&
    f.force(
      "collision",
      ldt().radius((y) => g.radiusMultiplier * Di(e, y)),
    );
  const v = e.simulation.forces.link;
  return (
    v &&
      v.enabled &&
      f.force(
        "link",
        cdt(r.links)
          .id((y) => y.id)
          .distance(e.simulation.forces.link.length)
          .strength(v.strength),
      ),
    f.on("tick", () => o()),
    (c = (s = e.modifiers).simulation) == null || c.call(s, f),
    f
  );
}
function lpt({ canvasContainer: t, config: e, min: r, max: o, onZoom: s }) {
  var c, f;
  const h = Bht()
    .scaleExtent([r, o])
    .filter((d) => {
      var g;
      return (
        d.button === 0 || ((g = d.touches) == null ? void 0 : g.length) >= 2
      );
    })
    .on("start", () => t().classed("grabbed", !0))
    .on("zoom", (d) => s(d))
    .on("end", () => t().classed("grabbed", !1));
  return (f = (c = e.modifiers).zoom) == null || f.call(c, h), h;
}
class apt {
  constructor(e, r, o) {
    if (
      ($e(this, "nodeTypes"),
      $e(this, "_nodeTypeFilter"),
      $e(this, "_includeUnlinked", !0),
      $e(this, "_linkFilter", () => !0),
      $e(this, "_showLinkLabels", !0),
      $e(this, "_showNodeLabels", !0),
      $e(this, "filteredGraph"),
      $e(this, "width", 0),
      $e(this, "height", 0),
      $e(this, "simulation"),
      $e(this, "canvas"),
      $e(this, "linkSelection"),
      $e(this, "nodeSelection"),
      $e(this, "markerSelection"),
      $e(this, "zoom"),
      $e(this, "drag"),
      $e(this, "xOffset", 0),
      $e(this, "yOffset", 0),
      $e(this, "scale"),
      $e(this, "focusedNode"),
      $e(this, "resizeObserver"),
      (this.container = e),
      (this.graph = r),
      (this.config = o),
      (this.scale = o.zoom.initial),
      this.resetView(),
      this.graph.nodes.forEach((s) => {
        const [c, f] = o.positionInitializer(
          s,
          this.effectiveWidth,
          this.effectiveHeight,
        );
        (s.x = s.x ?? c), (s.y = s.y ?? f);
      }),
      (this.nodeTypes = [...new Set(r.nodes.map((s) => s.type))]),
      (this._nodeTypeFilter = [...this.nodeTypes]),
      o.initial)
    ) {
      const {
        includeUnlinked: s,
        nodeTypeFilter: c,
        linkFilter: f,
        showLinkLabels: h,
        showNodeLabels: d,
      } = o.initial;
      (this._includeUnlinked = s ?? this._includeUnlinked),
        (this._showLinkLabels = h ?? this._showLinkLabels),
        (this._showNodeLabels = d ?? this._showNodeLabels),
        (this._nodeTypeFilter = c ?? this._nodeTypeFilter),
        (this._linkFilter = f ?? this._linkFilter);
    }
    this.filterGraph(void 0),
      this.initGraph(),
      this.restart(o.simulation.alphas.initialize),
      o.autoResize &&
        ((this.resizeObserver = new ResizeObserver(uct(() => this.resize()))),
        this.resizeObserver.observe(this.container));
  }
  get nodeTypeFilter() {
    return this._nodeTypeFilter;
  }
  get includeUnlinked() {
    return this._includeUnlinked;
  }
  set includeUnlinked(e) {
    (this._includeUnlinked = e), this.filterGraph(this.focusedNode);
    const { include: r, exclude: o } =
        this.config.simulation.alphas.filter.unlinked,
      s = e ? r : o;
    this.restart(s);
  }
  set linkFilter(e) {
    (this._linkFilter = e),
      this.filterGraph(this.focusedNode),
      this.restart(this.config.simulation.alphas.filter.link);
  }
  get linkFilter() {
    return this._linkFilter;
  }
  get showNodeLabels() {
    return this._showNodeLabels;
  }
  set showNodeLabels(e) {
    this._showNodeLabels = e;
    const { hide: r, show: o } = this.config.simulation.alphas.labels.nodes,
      s = e ? o : r;
    this.restart(s);
  }
  get showLinkLabels() {
    return this._showLinkLabels;
  }
  set showLinkLabels(e) {
    this._showLinkLabels = e;
    const { hide: r, show: o } = this.config.simulation.alphas.labels.links,
      s = e ? o : r;
    this.restart(s);
  }
  get effectiveWidth() {
    return this.width / this.scale;
  }
  get effectiveHeight() {
    return this.height / this.scale;
  }
  get effectiveCenter() {
    return pn
      .of([this.width, this.height])
      .divide(2)
      .subtract(pn.of([this.xOffset, this.yOffset]))
      .divide(this.scale);
  }
  resize() {
    const e = this.width,
      r = this.height,
      o = this.container.getBoundingClientRect().width,
      s = this.container.getBoundingClientRect().height,
      c = e.toFixed() !== o.toFixed(),
      f = r.toFixed() !== s.toFixed();
    if (!c && !f) return;
    (this.width = this.container.getBoundingClientRect().width),
      (this.height = this.container.getBoundingClientRect().height);
    const h = this.config.simulation.alphas.resize;
    this.restart(
      ow(h) ? h : h({ oldWidth: e, oldHeight: r, newWidth: o, newHeight: s }),
    );
  }
  restart(e) {
    var r;
    (this.markerSelection = Qdt({
      config: this.config,
      graph: this.filteredGraph,
      selection: this.markerSelection,
    })),
      (this.linkSelection = Vdt({
        config: this.config,
        graph: this.filteredGraph,
        selection: this.linkSelection,
        showLabels: this._showLinkLabels,
      })),
      (this.nodeSelection = npt({
        config: this.config,
        drag: this.drag,
        graph: this.filteredGraph,
        onNodeContext: (o) => this.toggleNodeFocus(o),
        onNodeSelected: this.config.callbacks.nodeClicked,
        selection: this.nodeSelection,
        showLabels: this._showNodeLabels,
      })),
      (r = this.simulation) == null || r.stop(),
      (this.simulation = spt({
        center: () => this.effectiveCenter,
        config: this.config,
        graph: this.filteredGraph,
        onTick: () => this.onTick(),
      })
        .alpha(e)
        .restart());
  }
  filterNodesByType(e, r) {
    e
      ? this._nodeTypeFilter.push(r)
      : (this._nodeTypeFilter = this._nodeTypeFilter.filter((o) => o !== r)),
      this.filterGraph(this.focusedNode),
      this.restart(this.config.simulation.alphas.filter.type);
  }
  shutdown() {
    var e, r;
    this.focusedNode !== void 0 &&
      ((this.focusedNode.isFocused = !1), (this.focusedNode = void 0)),
      (e = this.resizeObserver) == null || e.unobserve(this.container),
      (r = this.simulation) == null || r.stop();
  }
  initGraph() {
    (this.zoom = lpt({
      config: this.config,
      canvasContainer: () => En(this.container).select("svg"),
      min: this.config.zoom.min,
      max: this.config.zoom.max,
      onZoom: (e) => this.onZoom(e),
    })),
      (this.canvas = $dt({
        applyZoom: this.scale !== 1,
        container: En(this.container),
        offset: [this.xOffset, this.yOffset],
        scale: this.scale,
        zoom: this.zoom,
      })),
      this.applyZoom(),
      (this.linkSelection = Gdt(this.canvas)),
      (this.nodeSelection = ept(this.canvas)),
      (this.markerSelection = Zdt(this.canvas)),
      (this.drag = Ddt({
        config: this.config,
        onDragStart: () => {
          var e;
          return (e = this.simulation) == null
            ? void 0
            : e.alphaTarget(this.config.simulation.alphas.drag.start).restart();
        },
        onDragEnd: () => {
          var e;
          return (e = this.simulation) == null
            ? void 0
            : e.alphaTarget(this.config.simulation.alphas.drag.end).restart();
        },
      }));
  }
  onTick() {
    opt(this.nodeSelection),
      Kdt({
        config: this.config,
        center: this.effectiveCenter,
        graph: this.filteredGraph,
        selection: this.linkSelection,
      });
  }
  resetView() {
    var e;
    (e = this.simulation) == null || e.stop(),
      En(this.container).selectChildren().remove(),
      (this.zoom = void 0),
      (this.canvas = void 0),
      (this.linkSelection = void 0),
      (this.nodeSelection = void 0),
      (this.markerSelection = void 0),
      (this.simulation = void 0),
      (this.width = this.container.getBoundingClientRect().width),
      (this.height = this.container.getBoundingClientRect().height);
  }
  onZoom(e) {
    var r, o, s;
    (this.xOffset = e.transform.x),
      (this.yOffset = e.transform.y),
      (this.scale = e.transform.k),
      this.applyZoom(),
      (o = (r = this.config.hooks).afterZoom) == null ||
        o.call(r, this.scale, this.xOffset, this.yOffset),
      (s = this.simulation) == null || s.restart();
  }
  applyZoom() {
    Odt({
      canvas: this.canvas,
      scale: this.scale,
      xOffset: this.xOffset,
      yOffset: this.yOffset,
    });
  }
  toggleNodeFocus(e) {
    e.isFocused
      ? (this.filterGraph(void 0),
        this.restart(this.config.simulation.alphas.focus.release(e)))
      : this.focusNode(e);
  }
  focusNode(e) {
    this.filterGraph(e),
      this.restart(this.config.simulation.alphas.focus.acquire(e));
  }
  filterGraph(e) {
    this.focusedNode !== void 0 &&
      ((this.focusedNode.isFocused = !1), (this.focusedNode = void 0)),
      e !== void 0 &&
        this._nodeTypeFilter.includes(e.type) &&
        ((e.isFocused = !0), (this.focusedNode = e)),
      (this.filteredGraph = Rdt({
        graph: this.graph,
        filter: this._nodeTypeFilter,
        focusedNode: this.focusedNode,
        includeUnlinked: this._includeUnlinked,
        linkFilter: this._linkFilter,
      }));
  }
}
function Dm({ nodes: t, links: e }) {
  return { nodes: t ?? [], links: e ?? [] };
}
function cpt(t) {
  return { ...t };
}
function dw(t) {
  return { ...t, isFocused: !1, lastInteractionTimestamp: void 0 };
}
const upt = { "h-full": "", "min-h-75": "", "flex-1": "", overflow: "hidden" },
  fpt = { flex: "", "items-center": "", "gap-4": "", "px-3": "", "py-2": "" },
  hpt = ["id", "checked", "onChange"],
  dpt = ["for"],
  ppt = tt("div", { "flex-auto": "" }, null, -1),
  gpt = fe({
    __name: "ViewModuleGraph",
    props: { graph: {} },
    setup(t) {
      const e = t,
        { graph: r } = i_(e),
        o = Zt(),
        s = Zt(!1),
        c = Zt(),
        f = Zt();
      Dh(
        () => {
          s.value === !1 && setTimeout(() => (c.value = void 0), 300);
        },
        { flush: "post" },
      ),
        ws(() => {
          g();
        }),
        zh(() => {
          var y;
          (y = f.value) == null || y.shutdown();
        }),
        Fe(r, g);
      function h(y, w) {
        var _;
        (_ = f.value) == null || _.filterNodesByType(w, y);
      }
      function d(y) {
        (c.value = y), (s.value = !0);
      }
      function g() {
        var y;
        (y = f.value) == null || y.shutdown(),
          !(!r.value || !o.value) &&
            (f.value = new apt(
              o.value,
              r.value,
              Pdt({
                nodeRadius: 10,
                autoResize: !0,
                simulation: {
                  alphas: {
                    initialize: 1,
                    resize: ({ newHeight: w, newWidth: _ }) =>
                      w === 0 && _ === 0 ? 0 : 0.25,
                  },
                  forces: {
                    collision: { radiusMultiplier: 10 },
                    link: { length: 240 },
                  },
                },
                marker: lw.Arrow(2),
                modifiers: { node: v },
                positionInitializer:
                  r.value.nodes.length > 1 ? dh.Randomized : dh.Centered,
                zoom: { min: 0.5, max: 2 },
              }),
            ));
      }
      function v(y) {
        if (Xr) return;
        const w = (A) => A.button === 0;
        let _ = 0,
          N = 0,
          L = 0;
        y.on("pointerdown", (A, T) => {
          T.type !== "external" &&
            (!T.x || !T.y || !w(A) || ((_ = T.x), (N = T.y), (L = Date.now())));
        }).on("pointerup", (A, T) => {
          if (
            T.type === "external" ||
            !T.x ||
            !T.y ||
            !w(A) ||
            Date.now() - L > 500
          )
            return;
          const M = T.x - _,
            $ = T.y - N;
          M ** 2 + $ ** 2 < 100 && d(T.id);
        });
      }
      return (y, w) => {
        var T;
        const _ = _s,
          N = cct,
          L = Zat,
          A = vo("tooltip");
        return (
          st(),
          St("div", upt, [
            tt("div", null, [
              tt("div", fpt, [
                (st(!0),
                St(
                  ne,
                  null,
                  Rn((T = U(f)) == null ? void 0 : T.nodeTypes.sort(), (M) => {
                    var $;
                    return (
                      st(),
                      St(
                        "div",
                        {
                          key: M,
                          flex: "~ gap-1",
                          "items-center": "",
                          "select-none": "",
                        },
                        [
                          tt(
                            "input",
                            {
                              id: `type-${M}`,
                              type: "checkbox",
                              checked:
                                ($ = U(f)) == null
                                  ? void 0
                                  : $.nodeTypeFilter.includes(M),
                              onChange: (E) => h(M, E.target.checked),
                            },
                            null,
                            40,
                            hpt,
                          ),
                          tt(
                            "label",
                            {
                              "font-light": "",
                              "text-sm": "",
                              "ws-nowrap": "",
                              "overflow-hidden": "",
                              capitalize: "",
                              truncate: "",
                              for: `type-${M}`,
                              "border-b-2": "",
                              style: An({
                                "border-color": `var(--color-node-${M})`,
                              }),
                            },
                            Ut(M) + " Modules",
                            13,
                            dpt,
                          ),
                        ],
                      )
                    );
                  }),
                  128,
                )),
                ppt,
                tt("div", null, [
                  nn(It(_, { icon: "i-carbon-reset", onClick: g }, null, 512), [
                    [A, "Reset", void 0, { bottom: !0 }],
                  ]),
                ]),
              ]),
            ]),
            tt("div", { ref_key: "el", ref: o }, null, 512),
            It(
              L,
              {
                modelValue: U(s),
                "onUpdate:modelValue":
                  w[1] || (w[1] = (M) => (Le(s) ? (s.value = M) : null)),
                direction: "right",
              },
              {
                default: ee(() => [
                  U(c)
                    ? (st(),
                      te(
                        S_,
                        { key: 0 },
                        {
                          default: ee(() => [
                            It(
                              N,
                              {
                                id: U(c),
                                onClose: w[0] || (w[0] = (M) => (s.value = !1)),
                              },
                              null,
                              8,
                              ["id"],
                            ),
                          ]),
                          _: 1,
                        },
                      ))
                    : Gt("", !0),
                ]),
                _: 1,
              },
              8,
              ["modelValue"],
            ),
          ])
        );
      };
    },
  }),
  vpt = {
    key: 0,
    "text-green-500": "",
    "flex-shrink-0": "",
    "i-carbon:checkmark": "",
  },
  mpt = {
    key: 1,
    "text-red-500": "",
    "flex-shrink-0": "",
    "i-carbon:compare": "",
  },
  ypt = {
    key: 2,
    "text-red-500": "",
    "flex-shrink-0": "",
    "i-carbon:close": "",
  },
  bpt = {
    key: 3,
    "text-gray-500": "",
    "flex-shrink-0": "",
    "i-carbon:document-blank": "",
  },
  wpt = {
    key: 4,
    "text-gray-500": "",
    "flex-shrink-0": "",
    "i-carbon:redo": "",
    "rotate-90": "",
  },
  xpt = {
    key: 5,
    "text-yellow-500": "",
    "flex-shrink-0": "",
    "i-carbon:circle-dash": "",
    "animate-spin": "",
  },
  yd = fe({
    __name: "StatusIcon",
    props: { task: {} },
    setup(t) {
      return (e, r) => {
        var s, c, f;
        const o = vo("tooltip");
        return ((s = e.task.result) == null ? void 0 : s.state) === "pass"
          ? (st(), St("div", vpt))
          : U(tu)(e.task)
            ? nn((st(), St("div", mpt, null, 512)), [
                [o, "Contains failed snapshot", void 0, { right: !0 }],
              ])
            : ((c = e.task.result) == null ? void 0 : c.state) === "fail"
              ? (st(), St("div", ypt))
              : e.task.mode === "todo"
                ? nn((st(), St("div", bpt, null, 512)), [
                    [o, "Todo", void 0, { right: !0 }],
                  ])
                : e.task.mode === "skip" ||
                    ((f = e.task.result) == null ? void 0 : f.state) === "skip"
                  ? nn((st(), St("div", wpt, null, 512)), [
                      [o, "Skipped", void 0, { right: !0 }],
                    ])
                  : (st(), St("div", xpt));
      };
    },
  });
function _pt(t) {
  const e = new Map(),
    r = new Map(),
    o = [];
  for (;;) {
    let s = 0;
    if (
      (t.forEach((c, f) => {
        var v;
        const { splits: h, finished: d } = c;
        if (d) {
          s++;
          const { raw: y, candidate: w } = c;
          e.set(y, w);
          return;
        }
        if (h.length === 0) {
          c.finished = !0;
          return;
        }
        const g = h[0];
        r.has(g)
          ? ((c.candidate += c.candidate === "" ? g : `/${g}`),
            (v = r.get(g)) == null || v.push(f),
            h.shift())
          : (r.set(g, [f]), o.push(f));
      }),
      o.forEach((c) => {
        const f = t[c],
          h = f.splits.shift();
        f.candidate += f.candidate === "" ? h : `/${h}`;
      }),
      r.forEach((c) => {
        if (c.length === 1) {
          const f = c[0];
          t[f].finished = !0;
        }
      }),
      r.clear(),
      (o.length = 0),
      s === t.length)
    )
      break;
  }
  return e;
}
function Spt(t) {
  let e = t;
  e.includes("/node_modules/") && (e = t.split(/\/node_modules\//g).pop());
  const r = e.split(/\//g);
  return { raw: e, splits: r, candidate: "", finished: !1, id: t };
}
function kpt(t) {
  const e = t.map((o) => Spt(o)),
    r = _pt(e);
  return e.map(({ raw: o, id: s }) =>
    dw({
      color: "var(--color-node-external)",
      label: {
        color: "var(--color-node-external)",
        fontSize: "0.875rem",
        text: r.get(o) ?? "",
      },
      isFocused: !1,
      id: s,
      type: "external",
    }),
  );
}
function Cpt(t, e) {
  return dw({
    color: e ? "var(--color-node-root)" : "var(--color-node-inline)",
    label: {
      color: e ? "var(--color-node-root)" : "var(--color-node-inline)",
      fontSize: "0.875rem",
      text: t.split(/\//g).pop(),
    },
    isFocused: !1,
    id: t,
    type: "inline",
  });
}
function Tpt(t, e) {
  if (!t) return Dm({});
  const r = kpt(t.externalized),
    o = t.inlined.map((h) => Cpt(h, h === e)) ?? [],
    s = [...r, ...o],
    c = Object.fromEntries(s.map((h) => [h.id, h])),
    f = Object.entries(t.graph).flatMap(([h, d]) =>
      d
        .map((g) => {
          const v = c[h],
            y = c[g];
          if (!(v === void 0 || y === void 0))
            return cpt({
              source: v,
              target: y,
              color: "var(--color-link)",
              label: !1,
            });
        })
        .filter((g) => g !== void 0),
    );
  return Dm({ nodes: s, links: f });
}
const Ept = {
    key: 0,
    flex: "",
    "flex-col": "",
    "h-full": "",
    "max-h-full": "",
    "overflow-hidden": "",
    "data-testid": "file-detail",
  },
  Lpt = {
    p: "2",
    "h-10": "",
    flex: "~ gap-2",
    "items-center": "",
    "bg-header": "",
    border: "b base",
  },
  Apt = {
    "flex-1": "",
    "font-light": "",
    "op-50": "",
    "ws-nowrap": "",
    truncate: "",
    "text-sm": "",
  },
  Mpt = { class: "flex text-lg" },
  Npt = {
    flex: "~",
    "items-center": "",
    "bg-header": "",
    border: "b-2 base",
    "text-sm": "",
    "h-41px": "",
  },
  Ppt = { flex: "", "flex-col": "", "flex-1": "", overflow: "hidden" },
  $pt = ["flex-1"],
  Opt = fe({
    __name: "FileDetails",
    setup(t) {
      const e = Zt({ externalized: [], graph: {}, inlined: [] }),
        r = Zt({ nodes: [], links: [] }),
        o = Zt(!1),
        s = Zt(!1);
      Alt(
        Se,
        async (g, v) => {
          g &&
            g.filepath !== (v == null ? void 0 : v.filepath) &&
            ((e.value = await De.rpc.getModuleGraph(g.filepath)),
            (r.value = Tpt(e.value, g.filepath)));
        },
        { debounce: 100, immediate: !0 },
      );
      function c() {
        var v;
        const g = (v = Se.value) == null ? void 0 : v.filepath;
        g && fetch(`/__open-in-editor?file=${encodeURIComponent(g)}`);
      }
      function f(g) {
        g === "graph" && (s.value = !0), (nr.value = g);
      }
      const h = xt(() => {
        var g;
        return (
          ((g = _b.value) == null
            ? void 0
            : g.reduce((v, { size: y }) => v + y, 0)) ?? 0
        );
      });
      function d(g) {
        o.value = g;
      }
      return (g, v) => {
        var M, $;
        const y = yd,
          w = _s,
          _ = gpt,
          N = Yat,
          L = Bat,
          A = Mat,
          T = vo("tooltip");
        return U(Se)
          ? (st(),
            St("div", Ept, [
              tt("div", null, [
                tt("div", Lpt, [
                  It(y, { task: U(Se) }, null, 8, ["task"]),
                  tt(
                    "div",
                    Apt,
                    Ut((M = U(Se)) == null ? void 0 : M.filepath),
                    1,
                  ),
                  tt("div", Mpt, [
                    U(Xr)
                      ? Gt("", !0)
                      : nn(
                          (st(),
                          te(
                            w,
                            {
                              key: 0,
                              title: "Open in editor",
                              icon: "i-carbon-launch",
                              disabled: !(($ = U(Se)) != null && $.filepath),
                              onClick: c,
                            },
                            null,
                            8,
                            ["disabled"],
                          )),
                          [[T, "Open in editor", void 0, { bottom: !0 }]],
                        ),
                  ]),
                ]),
                tt("div", Npt, [
                  tt(
                    "button",
                    {
                      "tab-button": "",
                      class: ge({ "tab-button-active": U(nr) == null }),
                      "data-testid": "btn-report",
                      onClick: v[0] || (v[0] = (E) => f(null)),
                    },
                    " Report ",
                    2,
                  ),
                  tt(
                    "button",
                    {
                      "tab-button": "",
                      "data-testid": "btn-graph",
                      class: ge({ "tab-button-active": U(nr) === "graph" }),
                      onClick: v[1] || (v[1] = (E) => f("graph")),
                    },
                    " Module Graph ",
                    2,
                  ),
                  U(Xr)
                    ? Gt("", !0)
                    : (st(),
                      St(
                        "button",
                        {
                          key: 0,
                          "tab-button": "",
                          "data-testid": "btn-code",
                          class: ge({
                            "tab-button-active": U(nr) === "editor",
                          }),
                          onClick: v[2] || (v[2] = (E) => f("editor")),
                        },
                        Ut(U(o) ? "* " : "") + "Code ",
                        3,
                      )),
                  tt(
                    "button",
                    {
                      "tab-button": "",
                      "data-testid": "btn-console",
                      class: ge({
                        "tab-button-active": U(nr) === "console",
                        op20: U(nr) !== "console" && U(h) === 0,
                      }),
                      onClick: v[3] || (v[3] = (E) => f("console")),
                    },
                    " Console (" + Ut(U(h)) + ") ",
                    3,
                  ),
                ]),
              ]),
              tt("div", Ppt, [
                U(s)
                  ? (st(),
                    St(
                      "div",
                      { key: 0, "flex-1": U(nr) === "graph" && "" },
                      [
                        nn(
                          It(
                            _,
                            { graph: U(r), "data-testid": "graph" },
                            null,
                            8,
                            ["graph"],
                          ),
                          [[Wf, U(nr) === "graph"]],
                        ),
                      ],
                      8,
                      $pt,
                    ))
                  : Gt("", !0),
                U(nr) === "editor"
                  ? (st(),
                    te(
                      N,
                      {
                        key: U(Se).filepath,
                        file: U(Se),
                        "data-testid": "editor",
                        onDraft: d,
                      },
                      null,
                      8,
                      ["file"],
                    ))
                  : U(nr) === "console"
                    ? (st(),
                      te(
                        L,
                        { key: 2, file: U(Se), "data-testid": "console" },
                        null,
                        8,
                        ["file"],
                      ))
                    : U(nr)
                      ? Gt("", !0)
                      : (st(),
                        te(
                          A,
                          { key: 3, file: U(Se), "data-testid": "report" },
                          null,
                          8,
                          ["file"],
                        )),
              ]),
            ]))
          : Gt("", !0);
      };
    },
  }),
  Dpt = ["open"],
  Rpt = tt(
    "div",
    { "flex-1": "", "h-1px": "", border: "base b", op80: "" },
    null,
    -1,
  ),
  zpt = tt(
    "div",
    { "flex-1": "", "h-1px": "", border: "base b", op80: "" },
    null,
    -1,
  ),
  Fpt = fe({
    __name: "DetailsPanel",
    props: { color: {} },
    setup(t) {
      const e = Zt(!0);
      return (r, o) => (
        st(),
        St(
          "div",
          {
            open: U(e),
            class: "details-panel",
            "data-testid": "details-panel",
            onToggle: o[0] || (o[0] = (s) => (e.value = s.target.open)),
          },
          [
            tt(
              "div",
              {
                p: "y1",
                "text-sm": "",
                "bg-base": "",
                "items-center": "",
                "z-5": "",
                "gap-2": "",
                class: ge(r.color),
                "w-full": "",
                flex: "",
                "select-none": "",
                sticky: "",
                top: "-1",
              },
              [Rpt, Gn(r.$slots, "summary", { open: U(e) }), zpt],
              2,
            ),
            Gn(r.$slots, "default"),
          ],
          40,
          Dpt,
        )
      );
    },
  }),
  Ipt = {
    key: 0,
    flex: "~ row",
    "items-center": "",
    p: "x-2 y-1",
    "border-rounded": "",
    "cursor-pointer": "",
    hover: "bg-active",
  },
  Hpt = {
    key: 0,
    "i-logos:typescript-icon": "",
    "flex-shrink-0": "",
    "mr-2": "",
  },
  qpt = ["text"],
  Bpt = { "text-sm": "", truncate: "", "font-light": "" },
  Wpt = { key: 0, text: "xs", op20: "", style: { "white-space": "nowrap" } },
  Upt = fe({
    __name: "TaskItem",
    props: { task: {} },
    setup(t) {
      const e = t,
        r = xt(() => {
          const { result: o } = e.task;
          return o && Math.round(o.duration || 0);
        });
      return (o, s) => {
        var f, h;
        const c = yd;
        return o.task
          ? (st(),
            St("div", Ipt, [
              It(c, { task: o.task, "mr-2": "" }, null, 8, ["task"]),
              o.task.type === "suite" && o.task.meta.typecheck
                ? (st(), St("div", Hpt))
                : Gt("", !0),
              tt(
                "div",
                {
                  flex: "",
                  "items-end": "",
                  "gap-2": "",
                  text:
                    ((h = (f = o.task) == null ? void 0 : f.result) == null
                      ? void 0
                      : h.state) === "fail"
                      ? "red-500"
                      : "",
                },
                [
                  tt("span", Bpt, Ut(o.task.name), 1),
                  typeof U(r) == "number"
                    ? (st(),
                      St("span", Wpt, Ut(U(r) > 0 ? U(r) : "< 1") + "ms ", 1))
                    : Gt("", !0),
                ],
                8,
                qpt,
              ),
            ]))
          : Gt("", !0);
      };
    },
  });
function jpt(t) {
  return Object.hasOwnProperty.call(t, "tasks");
}
function pw(t, e) {
  return typeof t != "string" || typeof e != "string"
    ? !1
    : t.toLowerCase().includes(e.toLowerCase());
}
const Gpt = { key: 1 },
  Vpt = fe({
    inheritAttrs: !1,
    __name: "TaskTree",
    props: {
      task: {},
      indent: { default: 0 },
      nested: { type: Boolean, default: !1 },
      search: {},
      onItemClick: { type: Function },
    },
    setup(t) {
      return (e, r) => {
        const o = Upt,
          s = co("TaskTree", !0);
        return (
          st(),
          St(
            ne,
            null,
            [
              !e.nested || !e.search || U(pw)(e.task.name, e.search)
                ? (st(),
                  te(
                    o,
                    Li({ key: 0 }, e.$attrs, {
                      task: e.task,
                      style: { paddingLeft: `${e.indent * 0.75 + 1}rem` },
                      onClick:
                        r[0] ||
                        (r[0] = (c) => e.onItemClick && e.onItemClick(e.task)),
                    }),
                    null,
                    16,
                    ["task", "style"],
                  ))
                : Gt("", !0),
              e.nested && e.task.type === "suite" && e.task.tasks.length
                ? (st(),
                  St("div", Gpt, [
                    (st(!0),
                    St(
                      ne,
                      null,
                      Rn(
                        e.task.tasks,
                        (c) => (
                          st(),
                          te(
                            s,
                            {
                              key: c.id,
                              task: c,
                              nested: e.nested,
                              indent: e.indent + 1,
                              search: e.search,
                              "on-item-click": e.onItemClick,
                            },
                            null,
                            8,
                            [
                              "task",
                              "nested",
                              "indent",
                              "search",
                              "on-item-click",
                            ],
                          )
                        ),
                      ),
                      128,
                    )),
                  ]))
                : Gt("", !0),
            ],
            64,
          )
        );
      };
    },
  }),
  Kpt = { h: "full", flex: "~ col" },
  Xpt = {
    p: "2",
    "h-10": "",
    flex: "~ gap-2",
    "items-center": "",
    "bg-header": "",
    border: "b base",
  },
  Ypt = {
    p: "l3 y2 r2",
    flex: "~ gap-2",
    "items-center": "",
    "bg-header": "",
    border: "b-2 base",
  },
  Zpt = tt("div", { class: "i-carbon:search", "flex-shrink-0": "" }, null, -1),
  Qpt = ["op"],
  Jpt = { class: "scrolls", "flex-auto": "", "py-1": "" },
  tgt = { "text-red5": "" },
  egt = { "text-yellow5": "" },
  ngt = { "text-green5": "" },
  rgt = { class: "text-purple5:50" },
  igt = {
    key: 2,
    flex: "~ col",
    "items-center": "",
    p: "x4 y4",
    "font-light": "",
  },
  ogt = tt("div", { op30: "" }, " No matched test ", -1),
  gw = fe({
    inheritAttrs: !1,
    __name: "TasksList",
    props: {
      tasks: {},
      indent: { default: 0 },
      nested: { type: Boolean, default: !1 },
      groupByType: { type: Boolean, default: !1 },
      onItemClick: { type: Function },
    },
    emits: ["run"],
    setup(t, { emit: e }) {
      const r = e,
        o = Zt(""),
        s = Zt(),
        c = xt(() => o.value.trim() !== ""),
        f = xt(() =>
          o.value.trim() ? t.tasks.filter((A) => L([A], o.value)) : t.tasks,
        ),
        h = xt(() =>
          c.value ? f.value.map((A) => kc(A.id)).filter(Boolean) : [],
        ),
        d = xt(() =>
          f.value.filter((A) => {
            var T;
            return ((T = A.result) == null ? void 0 : T.state) === "fail";
          }),
        ),
        g = xt(() =>
          f.value.filter((A) => {
            var T;
            return ((T = A.result) == null ? void 0 : T.state) === "pass";
          }),
        ),
        v = xt(() =>
          f.value.filter((A) => A.mode === "skip" || A.mode === "todo"),
        ),
        y = xt(() =>
          f.value.filter(
            (A) =>
              !d.value.includes(A) &&
              !g.value.includes(A) &&
              !v.value.includes(A),
          ),
        ),
        w = xt(() => o.value === ""),
        _ = Elt(y, 250);
      function N(A) {
        var T;
        (o.value = ""), A && ((T = s.value) == null || T.focus());
      }
      function L(A, T) {
        let M = !1;
        for (let $ = 0; $ < A.length; $++) {
          const E = A[$];
          if (pw(E.name, T)) {
            M = !0;
            break;
          }
          if (jpt(E) && E.tasks && ((M = L(E.tasks, T)), M)) break;
        }
        return M;
      }
      return (A, T) => {
        const M = _s,
          $ = Vpt,
          E = Fpt,
          H = vo("tooltip");
        return (
          st(),
          St("div", Kpt, [
            tt("div", null, [
              tt("div", Xpt, [
                Gn(A.$slots, "header", { filteredTests: U(c) ? U(h) : void 0 }),
              ]),
              tt("div", Ypt, [
                Zpt,
                nn(
                  tt(
                    "input",
                    {
                      ref_key: "searchBox",
                      ref: s,
                      "onUpdate:modelValue":
                        T[0] || (T[0] = (K) => (Le(o) ? (o.value = K) : null)),
                      placeholder: "Search...",
                      outline: "none",
                      bg: "transparent",
                      font: "light",
                      text: "sm",
                      "flex-1": "",
                      "pl-1": "",
                      op: U(o).length ? "100" : "50",
                      onKeydown: [
                        T[1] || (T[1] = jf((K) => N(!1), ["esc"])),
                        T[2] ||
                          (T[2] = jf(
                            (K) => r("run", U(c) ? U(h) : void 0),
                            ["enter"],
                          )),
                      ],
                    },
                    null,
                    40,
                    Qpt,
                  ),
                  [[US, U(o)]],
                ),
                nn(
                  It(
                    M,
                    {
                      disabled: U(w),
                      title: "Clear search",
                      icon: "i-carbon:filter-remove",
                      onClickPassive: T[3] || (T[3] = (K) => N(!0)),
                    },
                    null,
                    8,
                    ["disabled"],
                  ),
                  [[H, "Clear search", void 0, { bottom: !0 }]],
                ),
              ]),
            ]),
            tt("div", Jpt, [
              A.groupByType
                ? (st(),
                  St(
                    ne,
                    { key: 0 },
                    [
                      U(d).length
                        ? (st(),
                          te(
                            E,
                            { key: 0 },
                            {
                              summary: ee(() => [
                                tt(
                                  "div",
                                  tgt,
                                  " FAIL (" + Ut(U(d).length) + ") ",
                                  1,
                                ),
                              ]),
                              default: ee(() => [
                                (st(!0),
                                St(
                                  ne,
                                  null,
                                  Rn(
                                    U(d),
                                    (K) => (
                                      st(),
                                      te(
                                        $,
                                        {
                                          key: K.id,
                                          task: K,
                                          nested: A.nested,
                                          search: U(o),
                                          class: ge(
                                            U(xr) === K.id ? "bg-active" : "",
                                          ),
                                          "on-item-click": A.onItemClick,
                                        },
                                        null,
                                        8,
                                        [
                                          "task",
                                          "nested",
                                          "search",
                                          "class",
                                          "on-item-click",
                                        ],
                                      )
                                    ),
                                  ),
                                  128,
                                )),
                              ]),
                              _: 1,
                            },
                          ))
                        : Gt("", !0),
                      U(y).length || U(Dl) === "running"
                        ? (st(),
                          te(
                            E,
                            { key: 1 },
                            {
                              summary: ee(() => [
                                tt(
                                  "div",
                                  egt,
                                  " RUNNING (" + Ut(U(_).length) + ") ",
                                  1,
                                ),
                              ]),
                              default: ee(() => [
                                (st(!0),
                                St(
                                  ne,
                                  null,
                                  Rn(
                                    U(_),
                                    (K) => (
                                      st(),
                                      te(
                                        $,
                                        {
                                          key: K.id,
                                          task: K,
                                          nested: A.nested,
                                          search: U(o),
                                          class: ge(
                                            U(xr) === K.id ? "bg-active" : "",
                                          ),
                                          "on-item-click": A.onItemClick,
                                        },
                                        null,
                                        8,
                                        [
                                          "task",
                                          "nested",
                                          "search",
                                          "class",
                                          "on-item-click",
                                        ],
                                      )
                                    ),
                                  ),
                                  128,
                                )),
                              ]),
                              _: 1,
                            },
                          ))
                        : Gt("", !0),
                      U(g).length
                        ? (st(),
                          te(
                            E,
                            { key: 2 },
                            {
                              summary: ee(() => [
                                tt(
                                  "div",
                                  ngt,
                                  " PASS (" + Ut(U(g).length) + ") ",
                                  1,
                                ),
                              ]),
                              default: ee(() => [
                                (st(!0),
                                St(
                                  ne,
                                  null,
                                  Rn(
                                    U(g),
                                    (K) => (
                                      st(),
                                      te(
                                        $,
                                        {
                                          key: K.id,
                                          task: K,
                                          nested: A.nested,
                                          search: U(o),
                                          class: ge(
                                            U(xr) === K.id ? "bg-active" : "",
                                          ),
                                          "on-item-click": A.onItemClick,
                                        },
                                        null,
                                        8,
                                        [
                                          "task",
                                          "nested",
                                          "search",
                                          "class",
                                          "on-item-click",
                                        ],
                                      )
                                    ),
                                  ),
                                  128,
                                )),
                              ]),
                              _: 1,
                            },
                          ))
                        : Gt("", !0),
                      U(v).length
                        ? (st(),
                          te(
                            E,
                            { key: 3 },
                            {
                              summary: ee(() => [
                                tt(
                                  "div",
                                  rgt,
                                  " SKIP (" + Ut(U(v).length) + ") ",
                                  1,
                                ),
                              ]),
                              default: ee(() => [
                                (st(!0),
                                St(
                                  ne,
                                  null,
                                  Rn(
                                    U(v),
                                    (K) => (
                                      st(),
                                      te(
                                        $,
                                        {
                                          key: K.id,
                                          task: K,
                                          nested: A.nested,
                                          search: U(o),
                                          class: ge(
                                            U(xr) === K.id ? "bg-active" : "",
                                          ),
                                          "on-item-click": A.onItemClick,
                                        },
                                        null,
                                        8,
                                        [
                                          "task",
                                          "nested",
                                          "search",
                                          "class",
                                          "on-item-click",
                                        ],
                                      )
                                    ),
                                  ),
                                  128,
                                )),
                              ]),
                              _: 1,
                            },
                          ))
                        : Gt("", !0),
                    ],
                    64,
                  ))
                : (st(!0),
                  St(
                    ne,
                    { key: 1 },
                    Rn(
                      U(f),
                      (K) => (
                        st(),
                        te(
                          $,
                          {
                            key: K.id,
                            task: K,
                            nested: A.nested,
                            search: U(o),
                            class: ge(U(xr) === K.id ? "bg-active" : ""),
                            "on-item-click": A.onItemClick,
                          },
                          null,
                          8,
                          [
                            "task",
                            "nested",
                            "search",
                            "class",
                            "on-item-click",
                          ],
                        )
                      ),
                    ),
                    128,
                  )),
              U(c) && U(f).length === 0
                ? (st(),
                  St("div", igt, [
                    ogt,
                    tt(
                      "button",
                      {
                        "font-light": "",
                        op: "50 hover:100",
                        "text-sm": "",
                        border: "~ gray-400/50 rounded",
                        p: "x2 y0.5",
                        m: "t2",
                        onClickPassive: T[4] || (T[4] = (K) => N(!0)),
                      },
                      " Clear ",
                      32,
                    ),
                  ]))
                : Gt("", !0),
            ]),
          ])
        );
      };
    },
  }),
  ql = Zt(),
  ls = Zt(!0),
  po = Zt(!1),
  $c = Zt(!0),
  Yo = xt(() => {
    var t;
    return (t = od.value) == null ? void 0 : t.coverage;
  }),
  vh = xt(() => {
    var t;
    return (t = Yo.value) == null ? void 0 : t.enabled;
  }),
  Zo = xt(() => vh.value && Yo.value.reporter.map(([t]) => t).includes("html")),
  sgt = xt(() => {
    if (Zo.value) {
      const t = Yo.value.reportsDirectory.lastIndexOf("/"),
        e = Yo.value.reporter.find((r) => {
          if (r[0] === "html") return r;
        });
      return e && "subdir" in e[1]
        ? `/${Yo.value.reportsDirectory.slice(t + 1)}/${e[1].subdir}/index.html`
        : `/${Yo.value.reportsDirectory.slice(t + 1)}/index.html`;
    }
  });
Fe(
  Dl,
  (t) => {
    $c.value = t === "running";
  },
  { immediate: !0 },
);
function lgt() {
  const t = xr.value;
  if (t && t.length > 0) {
    const e = kc(t);
    e
      ? ((ql.value = e), (ls.value = !1), (po.value = !1))
      : Mlt(
          () => De.state.getFiles(),
          () => {
            (ql.value = kc(t)), (ls.value = !1), (po.value = !1);
          },
        );
  }
  return ls;
}
function Tf(t) {
  (ls.value = t), (po.value = !1), t && ((ql.value = void 0), (xr.value = ""));
}
function agt() {
  (po.value = !0), (ls.value = !1), (ql.value = void 0), (xr.value = "");
}
const cgt = { key: 0, "h-full": "" },
  ugt = {
    key: 0,
    "i-logos:typescript-icon": "",
    "flex-shrink-0": "",
    "mr-1": "",
  },
  fgt = {
    "data-testid": "filenames",
    "font-bold": "",
    "text-sm": "",
    "flex-auto": "",
    "ws-nowrap": "",
    "overflow-hidden": "",
    truncate: "",
  },
  hgt = { class: "flex text-lg" },
  dgt = fe({
    __name: "Suites",
    setup(t) {
      const e = xt(() => {
          var c;
          return (c = Se.value) == null ? void 0 : c.name.split(/\//g).pop();
        }),
        r = xt(() => {
          var c, f;
          return (
            ((c = Se.value) == null ? void 0 : c.tasks) &&
            tu((f = Se.value) == null ? void 0 : f.tasks)
          );
        });
      function o() {
        return Se.value && De.rpc.updateSnapshot(Se.value);
      }
      async function s() {
        Zo.value && (($c.value = !0), await Kr()), await gat();
      }
      return (c, f) => {
        const h = yd,
          d = _s,
          g = gw,
          v = vo("tooltip");
        return U(Se)
          ? (st(),
            St("div", cgt, [
              It(
                g,
                { tasks: U(Se).tasks, nested: !0 },
                {
                  header: ee(() => [
                    It(h, { "mx-1": "", task: U(Se) }, null, 8, ["task"]),
                    U(Se).type === "suite" && U(Se).meta.typecheck
                      ? (st(), St("div", ugt))
                      : Gt("", !0),
                    tt("span", fgt, Ut(U(e)), 1),
                    tt("div", hgt, [
                      U(r) && !U(Xr)
                        ? nn(
                            (st(),
                            te(
                              d,
                              {
                                key: 0,
                                icon: "i-carbon-result-old",
                                onClick: f[0] || (f[0] = (y) => o()),
                              },
                              null,
                              512,
                            )),
                            [
                              [
                                v,
                                `Update failed snapshot(s) of ${U(Se).name}`,
                                void 0,
                                { bottom: !0 },
                              ],
                            ],
                          )
                        : Gt("", !0),
                      U(Xr)
                        ? Gt("", !0)
                        : nn(
                            (st(),
                            te(
                              d,
                              {
                                key: 1,
                                icon: "i-carbon-play",
                                onClick: f[1] || (f[1] = (y) => s()),
                              },
                              null,
                              512,
                            )),
                            [[v, "Rerun file", void 0, { bottom: !0 }]],
                          ),
                    ]),
                  ]),
                  _: 1,
                },
                8,
                ["tasks"],
              ),
            ]))
          : Gt("", !0);
      };
    },
  }),
  pgt = { h: "full", flex: "~ col" },
  ggt = tt(
    "div",
    {
      p: "3",
      "h-10": "",
      flex: "~ gap-2",
      "items-center": "",
      "bg-header": "",
      border: "b base",
    },
    [
      tt("div", { class: "i-carbon:folder-details-reference" }),
      tt(
        "span",
        {
          "pl-1": "",
          "font-bold": "",
          "text-sm": "",
          "flex-auto": "",
          "ws-nowrap": "",
          "overflow-hidden": "",
          truncate: "",
        },
        "Coverage",
      ),
    ],
    -1,
  ),
  vgt = { "flex-auto": "", "py-1": "", "bg-white": "" },
  mgt = ["src"],
  ygt = fe({
    __name: "Coverage",
    props: { src: {} },
    setup(t) {
      return (e, r) => (
        st(),
        St("div", pgt, [
          ggt,
          tt("div", vgt, [
            tt(
              "iframe",
              { id: "vitest-ui-coverage", src: e.src },
              null,
              8,
              mgt,
            ),
          ]),
        ])
      );
    },
  }),
  bgt = { bg: "red500/10", "p-1": "", "mb-1": "", "mt-2": "", rounded: "" },
  wgt = { "font-bold": "" },
  xgt = {
    key: 0,
    class: "scrolls",
    text: "xs",
    "font-mono": "",
    "mx-1": "",
    "my-2": "",
    "pb-2": "",
    "overflow-auto": "",
  },
  _gt = ["font-bold"],
  Sgt = { text: "red500/70" },
  kgt = tt("br", null, null, -1),
  Cgt = { key: 1, text: "sm", "mb-2": "" },
  Tgt = { "font-bold": "" },
  Egt = { key: 2, text: "sm", "mb-2": "" },
  Lgt = { "font-bold": "" },
  Agt = tt("br", null, null, -1),
  Mgt = tt(
    "ul",
    null,
    [
      tt(
        "li",
        null,
        " The error was thrown, while Vitest was running this test. ",
      ),
      tt(
        "li",
        null,
        " If the error occurred after the test had been completed, this was the last documented test before it was thrown. ",
      ),
    ],
    -1,
  ),
  Ngt = { key: 3, text: "sm", "font-thin": "" },
  Pgt = tt("br", null, null, -1),
  $gt = tt(
    "ul",
    null,
    [
      tt("li", null, " Cancel timeouts using clearTimeout and clearInterval. "),
      tt("li", null, " Wait for promises to resolve using the await keyword. "),
    ],
    -1,
  ),
  Ogt = fe({
    __name: "ErrorEntry",
    props: { error: {} },
    setup(t) {
      return (e, r) => {
        var o;
        return (
          st(),
          St(
            ne,
            null,
            [
              tt("h4", bgt, [
                tt("span", wgt, [
                  me(Ut(e.error.name || e.error.nameStr || "Unknown Error"), 1),
                  e.error.message
                    ? (st(), St(ne, { key: 0 }, [me(":")], 64))
                    : Gt("", !0),
                ]),
                me(" " + Ut(e.error.message), 1),
              ]),
              (o = e.error.stacks) != null && o.length
                ? (st(),
                  St("p", xgt, [
                    (st(!0),
                    St(
                      ne,
                      null,
                      Rn(
                        e.error.stacks,
                        (s, c) => (
                          st(),
                          St(
                            "span",
                            {
                              "whitespace-pre": "",
                              "font-bold": c === 0 ? "" : null,
                            },
                            [
                              me(
                                "❯ " + Ut(s.method) + " " + Ut(s.file) + ":",
                                1,
                              ),
                              tt(
                                "span",
                                Sgt,
                                Ut(s.line) + ":" + Ut(s.column),
                                1,
                              ),
                              kgt,
                            ],
                            8,
                            _gt,
                          )
                        ),
                      ),
                      256,
                    )),
                  ]))
                : Gt("", !0),
              e.error.VITEST_TEST_PATH
                ? (st(),
                  St("p", Cgt, [
                    me(" This error originated in "),
                    tt("span", Tgt, Ut(e.error.VITEST_TEST_PATH), 1),
                    me(
                      " test file. It doesn't mean the error was thrown inside the file itself, but while it was running. ",
                    ),
                  ]))
                : Gt("", !0),
              e.error.VITEST_TEST_NAME
                ? (st(),
                  St("p", Egt, [
                    me(" The latest test that might've caused the error is "),
                    tt("span", Lgt, Ut(e.error.VITEST_TEST_NAME), 1),
                    me(". It might mean one of the following:"),
                    Agt,
                    Mgt,
                  ]))
                : Gt("", !0),
              e.error.VITEST_AFTER_ENV_TEARDOWN
                ? (st(),
                  St("p", Ngt, [
                    me(
                      " This error was caught after test environment was torn down. Make sure to cancel any running tasks before test finishes:",
                    ),
                    Pgt,
                    $gt,
                  ]))
                : Gt("", !0),
            ],
            64,
          )
        );
      };
    },
  }),
  bn = (t) => (f0("data-v-09d153f7"), (t = t()), h0(), t),
  Dgt = {
    "data-testid": "test-files-entry",
    grid: "~ cols-[min-content_1fr_min-content]",
    "items-center": "",
    gap: "x-2 y-3",
    p: "x4",
    relative: "",
    "font-light": "",
    "w-80": "",
    op80: "",
  },
  Rgt = bn(() => tt("div", { "i-carbon-document": "" }, null, -1)),
  zgt = bn(() => tt("div", null, "Files", -1)),
  Fgt = { class: "number", "data-testid": "num-files" },
  Igt = bn(() => tt("div", { "i-carbon-checkmark": "" }, null, -1)),
  Hgt = bn(() => tt("div", null, "Pass", -1)),
  qgt = { class: "number" },
  Bgt = bn(() => tt("div", { "i-carbon-close": "" }, null, -1)),
  Wgt = bn(() => tt("div", null, " Fail ", -1)),
  Ugt = { class: "number", "text-red5": "" },
  jgt = bn(() => tt("div", { "i-carbon-compare": "" }, null, -1)),
  Ggt = bn(() => tt("div", null, " Snapshot Fail ", -1)),
  Vgt = { class: "number", "text-red5": "" },
  Kgt = bn(() =>
    tt("div", { "i-carbon-checkmark-outline-error": "" }, null, -1),
  ),
  Xgt = bn(() => tt("div", null, " Errors ", -1)),
  Ygt = { class: "number", "text-red5": "" },
  Zgt = bn(() => tt("div", { "i-carbon-timer": "" }, null, -1)),
  Qgt = bn(() => tt("div", null, "Time", -1)),
  Jgt = { class: "number", "data-testid": "run-time" },
  tvt = {
    key: 0,
    bg: "red500/10",
    text: "red500",
    p: "x3 y2",
    "max-w-xl": "",
    "m-2": "",
    rounded: "",
  },
  evt = bn(() =>
    tt("h3", { "text-center": "", "mb-2": "" }, " Unhandled Errors ", -1),
  ),
  nvt = {
    text: "sm",
    "font-thin": "",
    "mb-2": "",
    "data-testid": "unhandled-errors",
  },
  rvt = bn(() => tt("br", null, null, -1)),
  ivt = {
    "data-testid": "unhandled-errors-details",
    class: "scrolls unhandled-errors",
    text: "sm",
    "font-thin": "",
    "pe-2.5": "",
    "open:max-h-52": "",
    "overflow-auto": "",
  },
  ovt = bn(() =>
    tt("summary", { "font-bold": "", "cursor-pointer": "" }, "Errors", -1),
  ),
  svt = fe({
    __name: "TestFilesEntry",
    setup(t) {
      return (e, r) => {
        const o = Ogt;
        return (
          st(),
          St(
            ne,
            null,
            [
              tt("div", Dgt, [
                Rgt,
                zgt,
                tt("div", Fgt, Ut(U(mn).length), 1),
                U(Tc).length
                  ? (st(),
                    St(
                      ne,
                      { key: 0 },
                      [Igt, Hgt, tt("div", qgt, Ut(U(Tc).length), 1)],
                      64,
                    ))
                  : Gt("", !0),
                U(Cc).length
                  ? (st(),
                    St(
                      ne,
                      { key: 1 },
                      [Bgt, Wgt, tt("div", Ugt, Ut(U(Cc).length), 1)],
                      64,
                    ))
                  : Gt("", !0),
                U(um).length
                  ? (st(),
                    St(
                      ne,
                      { key: 2 },
                      [jgt, Ggt, tt("div", Vgt, Ut(U(um).length), 1)],
                      64,
                    ))
                  : Gt("", !0),
                U(xi).length
                  ? (st(),
                    St(
                      ne,
                      { key: 3 },
                      [Kgt, Xgt, tt("div", Ygt, Ut(U(xi).length), 1)],
                      64,
                    ))
                  : Gt("", !0),
                Zgt,
                Qgt,
                tt("div", Jgt, Ut(U(zat)), 1),
              ]),
              U(xi).length
                ? (st(),
                  St("div", tvt, [
                    evt,
                    tt("p", nvt, [
                      me(
                        " Vitest caught " +
                          Ut(U(xi).length) +
                          " error" +
                          Ut(U(xi).length > 1 ? "s" : "") +
                          " during the test run.",
                        1,
                      ),
                      rvt,
                      me(
                        " This might cause false positive tests. Resolve unhandled errors to make sure your tests are not affected. ",
                      ),
                    ]),
                    tt("details", ivt, [
                      ovt,
                      (st(!0),
                      St(
                        ne,
                        null,
                        Rn(
                          U(xi),
                          (s) => (
                            st(), te(o, { error: s }, null, 8, ["error"])
                          ),
                        ),
                        256,
                      )),
                    ]),
                  ]))
                : Gt("", !0),
            ],
            64,
          )
        );
      };
    },
  }),
  lvt = mo(svt, [["__scopeId", "data-v-09d153f7"]]),
  avt = { "p-2": "", "text-center": "", flex: "" },
  cvt = { "text-4xl": "", "min-w-2em": "" },
  uvt = { "text-md": "" },
  fvt = fe({
    __name: "DashboardEntry",
    props: { tail: { type: Boolean, default: !1 } },
    setup(t) {
      return (e, r) => (
        st(),
        St("div", avt, [
          tt("div", null, [
            tt("div", cvt, [Gn(e.$slots, "body")]),
            tt("div", uvt, [Gn(e.$slots, "header")]),
          ]),
        ])
      );
    },
  }),
  hvt = {
    flex: "~ wrap",
    "justify-evenly": "",
    "gap-2": "",
    p: "x-4",
    relative: "",
  },
  dvt = fe({
    __name: "TestsEntry",
    setup(t) {
      const e = xt(() => ru.value.length),
        r = xt(() => Cb.value.length),
        o = xt(() => kb.value.length),
        s = xt(() => Dat.value.length),
        c = xt(() => Rat.value.length);
      return (f, h) => {
        const d = fvt;
        return (
          st(),
          St("div", hvt, [
            It(
              d,
              { "text-green5": "", "data-testid": "pass-entry" },
              {
                header: ee(() => [me(" Pass ")]),
                body: ee(() => [me(Ut(U(r)), 1)]),
                _: 1,
              },
            ),
            It(
              d,
              {
                class: ge({ "text-red5": U(o), op50: !U(o) }),
                "data-testid": "fail-entry",
              },
              {
                header: ee(() => [me(" Fail ")]),
                body: ee(() => [me(Ut(U(o)), 1)]),
                _: 1,
              },
              8,
              ["class"],
            ),
            U(s)
              ? (st(),
                te(
                  d,
                  { key: 0, op50: "", "data-testid": "skipped-entry" },
                  {
                    header: ee(() => [me(" Skip ")]),
                    body: ee(() => [me(Ut(U(s)), 1)]),
                    _: 1,
                  },
                ))
              : Gt("", !0),
            U(c)
              ? (st(),
                te(
                  d,
                  { key: 1, op50: "", "data-testid": "todo-entry" },
                  {
                    header: ee(() => [me(" Todo ")]),
                    body: ee(() => [me(Ut(U(c)), 1)]),
                    _: 1,
                  },
                ))
              : Gt("", !0),
            It(
              d,
              { tail: !0, "data-testid": "total-entry" },
              {
                header: ee(() => [me(" Total ")]),
                body: ee(() => [me(Ut(U(e)), 1)]),
                _: 1,
              },
            ),
          ])
        );
      };
    },
  }),
  pvt = {},
  gvt = {
    "gap-0": "",
    flex: "~ col gap-4",
    "h-full": "",
    "justify-center": "",
    "items-center": "",
  },
  vvt = { "aria-labelledby": "tests", m: "y-4 x-2" };
function mvt(t, e) {
  const r = dvt,
    o = lvt;
  return st(), St("div", gvt, [tt("section", vvt, [It(r)]), It(o)]);
}
const yvt = mo(pvt, [["render", mvt]]),
  bvt = {},
  wvt = { h: "full", flex: "~ col" },
  xvt = tt(
    "div",
    {
      p: "3",
      "h-10": "",
      flex: "~ gap-2",
      "items-center": "",
      "bg-header": "",
      border: "b base",
    },
    [
      tt("div", { class: "i-carbon-dashboard" }),
      tt(
        "span",
        {
          "pl-1": "",
          "font-bold": "",
          "text-sm": "",
          "flex-auto": "",
          "ws-nowrap": "",
          "overflow-hidden": "",
          truncate: "",
        },
        "Dashboard",
      ),
    ],
    -1,
  ),
  _vt = { class: "scrolls", "flex-auto": "", "py-1": "" };
function Svt(t, e) {
  const r = yvt;
  return st(), St("div", wvt, [xvt, tt("div", _vt, [It(r)])]);
}
const kvt = mo(bvt, [["render", Svt]]),
  Cvt = "" + new URL("../favicon.svg", import.meta.url).href,
  Tvt = tt(
    "img",
    { "w-6": "", "h-6": "", src: Cvt, alt: "Vitest logo" },
    null,
    -1,
  ),
  Evt = tt(
    "span",
    { "font-light": "", "text-sm": "", "flex-1": "" },
    "Vitest",
    -1,
  ),
  Lvt = { class: "flex text-lg" },
  Avt = tt("div", { class: "i-carbon:folder-off ma" }, null, -1),
  Mvt = tt(
    "div",
    { class: "op100 gap-1 p-y-1", grid: "~ items-center cols-[1.5em_1fr]" },
    [
      tt("div", { class: "i-carbon:information-square w-1.5em h-1.5em" }),
      tt("div", null, "Coverage enabled but missing html reporter."),
      tt(
        "div",
        { style: { "grid-column": "2" } },
        " Add html reporter to your configuration to see coverage here. ",
      ),
    ],
    -1,
  ),
  Nvt = fe({
    __name: "Navigation",
    setup(t) {
      const e = xt(() => mn.value && tu(mn.value));
      function r() {
        return De.rpc.updateSnapshot();
      }
      const o = xt(() => (Vl.value ? "light" : "dark"));
      function s(f) {
        (xr.value = f.id), (ql.value = kc(f.id)), Tf(!1);
      }
      async function c(f) {
        Zo.value &&
          (($c.value = !0), await Kr(), po.value && (Tf(!0), await Kr())),
          await pat(f);
      }
      return (f, h) => {
        const d = _s,
          g = gw,
          v = vo("tooltip");
        return (
          st(),
          te(
            g,
            {
              border: "r base",
              tasks: U(mn),
              "on-item-click": s,
              "group-by-type": !0,
              onRun: c,
            },
            {
              header: ee(({ filteredTests: y }) => [
                Tvt,
                Evt,
                tt("div", Lvt, [
                  nn(
                    It(
                      d,
                      {
                        title: "Show dashboard",
                        class: "!animate-100ms",
                        "animate-count-1": "",
                        icon: "i-carbon:dashboard",
                        onClick: h[0] || (h[0] = (w) => U(Tf)(!0)),
                      },
                      null,
                      512,
                    ),
                    [
                      [Wf, (U(vh) && !U(Zo)) || !U(ls)],
                      [v, "Dashboard", void 0, { bottom: !0 }],
                    ],
                  ),
                  U(vh) && !U(Zo)
                    ? (st(),
                      te(
                        U(JC),
                        {
                          key: 0,
                          title: "Coverage enabled but missing html reporter",
                          class:
                            "w-1.4em h-1.4em op100 rounded flex color-red5 dark:color-#f43f5e cursor-help",
                        },
                        {
                          popper: ee(() => [Mvt]),
                          default: ee(() => [Avt]),
                          _: 1,
                        },
                      ))
                    : Gt("", !0),
                  U(Zo)
                    ? nn(
                        (st(),
                        te(
                          d,
                          {
                            key: 1,
                            disabled: U($c),
                            title: "Show coverage",
                            class: "!animate-100ms",
                            "animate-count-1": "",
                            icon: "i-carbon:folder-details-reference",
                            onClick: h[1] || (h[1] = (w) => U(agt)()),
                          },
                          null,
                          8,
                          ["disabled"],
                        )),
                        [
                          [Wf, !U(po)],
                          [v, "Coverage", void 0, { bottom: !0 }],
                        ],
                      )
                    : Gt("", !0),
                  U(e) && !U(Xr)
                    ? nn(
                        (st(),
                        te(
                          d,
                          {
                            key: 2,
                            icon: "i-carbon:result-old",
                            onClick: h[2] || (h[2] = (w) => r()),
                          },
                          null,
                          512,
                        )),
                        [
                          [
                            v,
                            "Update all failed snapshot(s)",
                            void 0,
                            { bottom: !0 },
                          ],
                        ],
                      )
                    : Gt("", !0),
                  U(Xr)
                    ? Gt("", !0)
                    : nn(
                        (st(),
                        te(
                          d,
                          {
                            key: 3,
                            disabled: (y == null ? void 0 : y.length) === 0,
                            icon: "i-carbon:play",
                            onClick: (w) => c(y),
                          },
                          null,
                          8,
                          ["disabled", "onClick"],
                        )),
                        [
                          [
                            v,
                            y
                              ? y.length === 0
                                ? "No test to run (clear filter)"
                                : "Rerun filtered"
                              : "Rerun all",
                            void 0,
                            { bottom: !0 },
                          ],
                        ],
                      ),
                  nn(
                    It(
                      d,
                      {
                        icon: "dark:i-carbon-moon i-carbon:sun",
                        onClick: h[3] || (h[3] = (w) => U(bat)()),
                      },
                      null,
                      512,
                    ),
                    [[v, `Toggle to ${U(o)} mode`, void 0, { bottom: !0 }]],
                  ),
                ]),
              ]),
              _: 1,
            },
            8,
            ["tasks"],
          )
        );
      };
    },
  }),
  Pvt = {
    "h-3px": "",
    relative: "",
    "overflow-hidden": "",
    class: "px-0",
    "w-screen": "",
  },
  $vt = fe({
    __name: "ProgressBar",
    setup(t) {
      const { width: e } = Ult(),
        r = xt(() =>
          mn.value.length === 0
            ? "!bg-gray-4 !dark:bg-gray-7 in-progress"
            : Oat.value
              ? null
              : "in-progress",
        ),
        o = xt(() => mn.value.length),
        s = xt(() => Tc.value.length),
        c = xt(() => Cc.value.length),
        f = xt(() => {
          const v = U(o);
          return v > 0 ? (e.value * s.value) / v : 0;
        }),
        h = xt(() => {
          const v = U(o);
          return v > 0 ? (e.value * c.value) / v : 0;
        }),
        d = xt(() => U(o) - c.value - s.value),
        g = xt(() => {
          const v = U(o);
          return v > 0 ? (e.value * d.value) / v : 0;
        });
      return (v, y) => (
        st(),
        St(
          "div",
          {
            absolute: "",
            "t-0": "",
            "l-0": "",
            "r-0": "",
            "z-index-1031": "",
            "pointer-events-none": "",
            "p-0": "",
            "h-3px": "",
            grid: "~ auto-cols-max",
            "justify-items-center": "",
            "w-screen": "",
            class: ge(U(r)),
          },
          [
            tt("div", Pvt, [
              tt(
                "div",
                {
                  absolute: "",
                  "l-0": "",
                  "t-0": "",
                  "bg-red5": "",
                  "h-3px": "",
                  class: ge(U(r)),
                  style: An(`width: ${U(h)}px;`),
                },
                "   ",
                6,
              ),
              tt(
                "div",
                {
                  absolute: "",
                  "l-0": "",
                  "t-0": "",
                  "bg-green5": "",
                  "h-3px": "",
                  class: ge(U(r)),
                  style: An(`left: ${U(h)}px; width: ${U(f)}px;`),
                },
                "   ",
                6,
              ),
              tt(
                "div",
                {
                  absolute: "",
                  "l-0": "",
                  "t-0": "",
                  "bg-yellow5": "",
                  "h-3px": "",
                  class: ge(U(r)),
                  style: An(`left: ${U(f) + U(h)}px; width: ${U(g)}px;`),
                },
                "   ",
                6,
              ),
            ]),
          ],
          2,
        )
      );
    },
  }),
  Ovt = mo($vt, [["__scopeId", "data-v-f967c1fe"]]),
  Rm = {
    name: "splitpanes",
    emits: [
      "ready",
      "resize",
      "resized",
      "pane-click",
      "pane-maximize",
      "pane-add",
      "pane-remove",
      "splitter-click",
    ],
    props: {
      horizontal: { type: Boolean },
      pushOtherPanes: { type: Boolean, default: !0 },
      dblClickSplitter: { type: Boolean, default: !0 },
      rtl: { type: Boolean, default: !1 },
      firstSplitter: { type: Boolean },
    },
    provide() {
      return {
        requestUpdate: this.requestUpdate,
        onPaneAdd: this.onPaneAdd,
        onPaneRemove: this.onPaneRemove,
        onPaneClick: this.onPaneClick,
      };
    },
    data: () => ({
      container: null,
      ready: !1,
      panes: [],
      touch: { mouseDown: !1, dragging: !1, activeSplitter: null },
      splitterTaps: { splitter: null, timeoutId: null },
    }),
    computed: {
      panesCount() {
        return this.panes.length;
      },
      indexedPanes() {
        return this.panes.reduce((t, e) => (t[e.id] = e) && t, {});
      },
    },
    methods: {
      updatePaneComponents() {
        this.panes.forEach((t) => {
          t.update &&
            t.update({
              [this.horizontal ? "height" : "width"]:
                `${this.indexedPanes[t.id].size}%`,
            });
        });
      },
      bindEvents() {
        document.addEventListener("mousemove", this.onMouseMove, {
          passive: !1,
        }),
          document.addEventListener("mouseup", this.onMouseUp),
          "ontouchstart" in window &&
            (document.addEventListener("touchmove", this.onMouseMove, {
              passive: !1,
            }),
            document.addEventListener("touchend", this.onMouseUp));
      },
      unbindEvents() {
        document.removeEventListener("mousemove", this.onMouseMove, {
          passive: !1,
        }),
          document.removeEventListener("mouseup", this.onMouseUp),
          "ontouchstart" in window &&
            (document.removeEventListener("touchmove", this.onMouseMove, {
              passive: !1,
            }),
            document.removeEventListener("touchend", this.onMouseUp));
      },
      onMouseDown(t, e) {
        this.bindEvents(),
          (this.touch.mouseDown = !0),
          (this.touch.activeSplitter = e);
      },
      onMouseMove(t) {
        this.touch.mouseDown &&
          (t.preventDefault(),
          (this.touch.dragging = !0),
          this.calculatePanesSize(this.getCurrentMouseDrag(t)),
          this.$emit(
            "resize",
            this.panes.map((e) => ({ min: e.min, max: e.max, size: e.size })),
          ));
      },
      onMouseUp() {
        this.touch.dragging &&
          this.$emit(
            "resized",
            this.panes.map((t) => ({ min: t.min, max: t.max, size: t.size })),
          ),
          (this.touch.mouseDown = !1),
          setTimeout(() => {
            (this.touch.dragging = !1), this.unbindEvents();
          }, 100);
      },
      onSplitterClick(t, e) {
        "ontouchstart" in window &&
          (t.preventDefault(),
          this.dblClickSplitter &&
            (this.splitterTaps.splitter === e
              ? (clearTimeout(this.splitterTaps.timeoutId),
                (this.splitterTaps.timeoutId = null),
                this.onSplitterDblClick(t, e),
                (this.splitterTaps.splitter = null))
              : ((this.splitterTaps.splitter = e),
                (this.splitterTaps.timeoutId = setTimeout(() => {
                  this.splitterTaps.splitter = null;
                }, 500))))),
          this.touch.dragging || this.$emit("splitter-click", this.panes[e]);
      },
      onSplitterDblClick(t, e) {
        let r = 0;
        (this.panes = this.panes.map(
          (o, s) => (
            (o.size = s === e ? o.max : o.min), s !== e && (r += o.min), o
          ),
        )),
          (this.panes[e].size -= r),
          this.$emit("pane-maximize", this.panes[e]),
          this.$emit(
            "resized",
            this.panes.map((o) => ({ min: o.min, max: o.max, size: o.size })),
          );
      },
      onPaneClick(t, e) {
        this.$emit("pane-click", this.indexedPanes[e]);
      },
      getCurrentMouseDrag(t) {
        const e = this.container.getBoundingClientRect(),
          { clientX: r, clientY: o } =
            "ontouchstart" in window && t.touches ? t.touches[0] : t;
        return { x: r - e.left, y: o - e.top };
      },
      getCurrentDragPercentage(t) {
        t = t[this.horizontal ? "y" : "x"];
        const e =
          this.container[this.horizontal ? "clientHeight" : "clientWidth"];
        return this.rtl && !this.horizontal && (t = e - t), (t * 100) / e;
      },
      calculatePanesSize(t) {
        const e = this.touch.activeSplitter;
        let r = {
          prevPanesSize: this.sumPrevPanesSize(e),
          nextPanesSize: this.sumNextPanesSize(e),
          prevReachedMinPanes: 0,
          nextReachedMinPanes: 0,
        };
        const o = 0 + (this.pushOtherPanes ? 0 : r.prevPanesSize),
          s = 100 - (this.pushOtherPanes ? 0 : r.nextPanesSize),
          c = Math.max(Math.min(this.getCurrentDragPercentage(t), s), o);
        let f = [e, e + 1],
          h = this.panes[f[0]] || null,
          d = this.panes[f[1]] || null;
        const g = h.max < 100 && c >= h.max + r.prevPanesSize,
          v = d.max < 100 && c <= 100 - (d.max + this.sumNextPanesSize(e + 1));
        if (g || v) {
          g
            ? ((h.size = h.max),
              (d.size = Math.max(
                100 - h.max - r.prevPanesSize - r.nextPanesSize,
                0,
              )))
            : ((h.size = Math.max(
                100 - d.max - r.prevPanesSize - this.sumNextPanesSize(e + 1),
                0,
              )),
              (d.size = d.max));
          return;
        }
        if (this.pushOtherPanes) {
          const y = this.doPushOtherPanes(r, c);
          if (!y) return;
          ({ sums: r, panesToResize: f } = y),
            (h = this.panes[f[0]] || null),
            (d = this.panes[f[1]] || null);
        }
        h !== null &&
          (h.size = Math.min(
            Math.max(c - r.prevPanesSize - r.prevReachedMinPanes, h.min),
            h.max,
          )),
          d !== null &&
            (d.size = Math.min(
              Math.max(
                100 - c - r.nextPanesSize - r.nextReachedMinPanes,
                d.min,
              ),
              d.max,
            ));
      },
      doPushOtherPanes(t, e) {
        const r = this.touch.activeSplitter,
          o = [r, r + 1];
        return e < t.prevPanesSize + this.panes[o[0]].min &&
          ((o[0] = this.findPrevExpandedPane(r).index),
          (t.prevReachedMinPanes = 0),
          o[0] < r &&
            this.panes.forEach((s, c) => {
              c > o[0] &&
                c <= r &&
                ((s.size = s.min), (t.prevReachedMinPanes += s.min));
            }),
          (t.prevPanesSize = this.sumPrevPanesSize(o[0])),
          o[0] === void 0)
          ? ((t.prevReachedMinPanes = 0),
            (this.panes[0].size = this.panes[0].min),
            this.panes.forEach((s, c) => {
              c > 0 &&
                c <= r &&
                ((s.size = s.min), (t.prevReachedMinPanes += s.min));
            }),
            (this.panes[o[1]].size =
              100 -
              t.prevReachedMinPanes -
              this.panes[0].min -
              t.prevPanesSize -
              t.nextPanesSize),
            null)
          : e > 100 - t.nextPanesSize - this.panes[o[1]].min &&
              ((o[1] = this.findNextExpandedPane(r).index),
              (t.nextReachedMinPanes = 0),
              o[1] > r + 1 &&
                this.panes.forEach((s, c) => {
                  c > r &&
                    c < o[1] &&
                    ((s.size = s.min), (t.nextReachedMinPanes += s.min));
                }),
              (t.nextPanesSize = this.sumNextPanesSize(o[1] - 1)),
              o[1] === void 0)
            ? ((t.nextReachedMinPanes = 0),
              (this.panes[this.panesCount - 1].size =
                this.panes[this.panesCount - 1].min),
              this.panes.forEach((s, c) => {
                c < this.panesCount - 1 &&
                  c >= r + 1 &&
                  ((s.size = s.min), (t.nextReachedMinPanes += s.min));
              }),
              (this.panes[o[0]].size =
                100 -
                t.prevPanesSize -
                t.nextReachedMinPanes -
                this.panes[this.panesCount - 1].min -
                t.nextPanesSize),
              null)
            : { sums: t, panesToResize: o };
      },
      sumPrevPanesSize(t) {
        return this.panes.reduce((e, r, o) => e + (o < t ? r.size : 0), 0);
      },
      sumNextPanesSize(t) {
        return this.panes.reduce((e, r, o) => e + (o > t + 1 ? r.size : 0), 0);
      },
      findPrevExpandedPane(t) {
        return (
          [...this.panes]
            .reverse()
            .find((e) => e.index < t && e.size > e.min) || {}
        );
      },
      findNextExpandedPane(t) {
        return this.panes.find((e) => e.index > t + 1 && e.size > e.min) || {};
      },
      checkSplitpanesNodes() {
        Array.from(this.container.children).forEach((t) => {
          const e = t.classList.contains("splitpanes__pane"),
            r = t.classList.contains("splitpanes__splitter");
          !e &&
            !r &&
            (t.parentNode.removeChild(t),
            console.warn(
              "Splitpanes: Only <pane> elements are allowed at the root of <splitpanes>. One of your DOM nodes was removed.",
            ));
        });
      },
      addSplitter(t, e, r = !1) {
        const o = t - 1,
          s = document.createElement("div");
        s.classList.add("splitpanes__splitter"),
          r ||
            ((s.onmousedown = (c) => this.onMouseDown(c, o)),
            typeof window < "u" &&
              "ontouchstart" in window &&
              (s.ontouchstart = (c) => this.onMouseDown(c, o)),
            (s.onclick = (c) => this.onSplitterClick(c, o + 1))),
          this.dblClickSplitter &&
            (s.ondblclick = (c) => this.onSplitterDblClick(c, o + 1)),
          e.parentNode.insertBefore(s, e);
      },
      removeSplitter(t) {
        (t.onmousedown = void 0),
          (t.onclick = void 0),
          (t.ondblclick = void 0),
          t.parentNode.removeChild(t);
      },
      redoSplitters() {
        const t = Array.from(this.container.children);
        t.forEach((r) => {
          r.className.includes("splitpanes__splitter") &&
            this.removeSplitter(r);
        });
        let e = 0;
        t.forEach((r) => {
          r.className.includes("splitpanes__pane") &&
            (!e && this.firstSplitter
              ? this.addSplitter(e, r, !0)
              : e && this.addSplitter(e, r),
            e++);
        });
      },
      requestUpdate({ target: t, ...e }) {
        const r = this.indexedPanes[t._.uid];
        Object.entries(e).forEach(([o, s]) => (r[o] = s));
      },
      onPaneAdd(t) {
        let e = -1;
        Array.from(t.$el.parentNode.children).some(
          (s) => (s.className.includes("splitpanes__pane") && e++, s === t.$el),
        );
        const r = parseFloat(t.minSize),
          o = parseFloat(t.maxSize);
        this.panes.splice(e, 0, {
          id: t._.uid,
          index: e,
          min: isNaN(r) ? 0 : r,
          max: isNaN(o) ? 100 : o,
          size: t.size === null ? null : parseFloat(t.size),
          givenSize: t.size,
          update: t.update,
        }),
          this.panes.forEach((s, c) => (s.index = c)),
          this.ready &&
            this.$nextTick(() => {
              this.redoSplitters(),
                this.resetPaneSizes({ addedPane: this.panes[e] }),
                this.$emit("pane-add", {
                  index: e,
                  panes: this.panes.map((s) => ({
                    min: s.min,
                    max: s.max,
                    size: s.size,
                  })),
                });
            });
      },
      onPaneRemove(t) {
        const e = this.panes.findIndex((o) => o.id === t._.uid),
          r = this.panes.splice(e, 1)[0];
        this.panes.forEach((o, s) => (o.index = s)),
          this.$nextTick(() => {
            this.redoSplitters(),
              this.resetPaneSizes({ removedPane: { ...r, index: e } }),
              this.$emit("pane-remove", {
                removed: r,
                panes: this.panes.map((o) => ({
                  min: o.min,
                  max: o.max,
                  size: o.size,
                })),
              });
          });
      },
      resetPaneSizes(t = {}) {
        !t.addedPane && !t.removedPane
          ? this.initialPanesSizing()
          : this.panes.some((e) => e.givenSize !== null || e.min || e.max < 100)
            ? this.equalizeAfterAddOrRemove(t)
            : this.equalize(),
          this.ready &&
            this.$emit(
              "resized",
              this.panes.map((e) => ({ min: e.min, max: e.max, size: e.size })),
            );
      },
      equalize() {
        const t = 100 / this.panesCount;
        let e = 0;
        const r = [],
          o = [];
        this.panes.forEach((s) => {
          (s.size = Math.max(Math.min(t, s.max), s.min)),
            (e -= s.size),
            s.size >= s.max && r.push(s.id),
            s.size <= s.min && o.push(s.id);
        }),
          e > 0.1 && this.readjustSizes(e, r, o);
      },
      initialPanesSizing() {
        let t = 100;
        const e = [],
          r = [];
        let o = 0;
        this.panes.forEach((c) => {
          (t -= c.size),
            c.size !== null && o++,
            c.size >= c.max && e.push(c.id),
            c.size <= c.min && r.push(c.id);
        });
        let s = 100;
        t > 0.1 &&
          (this.panes.forEach((c) => {
            c.size === null &&
              (c.size = Math.max(
                Math.min(t / (this.panesCount - o), c.max),
                c.min,
              )),
              (s -= c.size);
          }),
          s > 0.1 && this.readjustSizes(t, e, r));
      },
      equalizeAfterAddOrRemove({ addedPane: t, removedPane: e } = {}) {
        let r = 100 / this.panesCount,
          o = 0;
        const s = [],
          c = [];
        t &&
          t.givenSize !== null &&
          (r = (100 - t.givenSize) / (this.panesCount - 1)),
          this.panes.forEach((f) => {
            (o -= f.size),
              f.size >= f.max && s.push(f.id),
              f.size <= f.min && c.push(f.id);
          }),
          !(Math.abs(o) < 0.1) &&
            (this.panes.forEach((f) => {
              (t && t.givenSize !== null && t.id === f.id) ||
                (f.size = Math.max(Math.min(r, f.max), f.min)),
                (o -= f.size),
                f.size >= f.max && s.push(f.id),
                f.size <= f.min && c.push(f.id);
            }),
            o > 0.1 && this.readjustSizes(o, s, c));
      },
      readjustSizes(t, e, r) {
        let o;
        t > 0
          ? (o = t / (this.panesCount - e.length))
          : (o = t / (this.panesCount - r.length)),
          this.panes.forEach((s, c) => {
            if (t > 0 && !e.includes(s.id)) {
              const f = Math.max(Math.min(s.size + o, s.max), s.min),
                h = f - s.size;
              (t -= h), (s.size = f);
            } else if (!r.includes(s.id)) {
              const f = Math.max(Math.min(s.size + o, s.max), s.min),
                h = f - s.size;
              (t -= h), (s.size = f);
            }
            s.update({
              [this.horizontal ? "height" : "width"]:
                `${this.indexedPanes[s.id].size}%`,
            });
          }),
          Math.abs(t) > 0.1 &&
            this.$nextTick(() => {
              this.ready &&
                console.warn(
                  "Splitpanes: Could not resize panes correctly due to their constraints.",
                );
            });
      },
    },
    watch: {
      panes: {
        deep: !0,
        immediate: !1,
        handler() {
          this.updatePaneComponents();
        },
      },
      horizontal() {
        this.updatePaneComponents();
      },
      firstSplitter() {
        this.redoSplitters();
      },
      dblClickSplitter(t) {
        [...this.container.querySelectorAll(".splitpanes__splitter")].forEach(
          (e, r) => {
            e.ondblclick = t ? (o) => this.onSplitterDblClick(o, r) : void 0;
          },
        );
      },
    },
    beforeUnmount() {
      this.ready = !1;
    },
    mounted() {
      (this.container = this.$refs.container),
        this.checkSplitpanesNodes(),
        this.redoSplitters(),
        this.resetPaneSizes(),
        this.$emit("ready"),
        (this.ready = !0);
    },
    render() {
      return Ul(
        "div",
        {
          ref: "container",
          class: [
            "splitpanes",
            `splitpanes--${this.horizontal ? "horizontal" : "vertical"}`,
            { "splitpanes--dragging": this.touch.dragging },
          ],
        },
        this.$slots.default(),
      );
    },
  },
  Dvt = (t, e) => {
    const r = t.__vccOpts || t;
    for (const [o, s] of e) r[o] = s;
    return r;
  },
  Rvt = {
    name: "pane",
    inject: ["requestUpdate", "onPaneAdd", "onPaneRemove", "onPaneClick"],
    props: {
      size: { type: [Number, String], default: null },
      minSize: { type: [Number, String], default: 0 },
      maxSize: { type: [Number, String], default: 100 },
    },
    data: () => ({ style: {} }),
    mounted() {
      this.onPaneAdd(this);
    },
    beforeUnmount() {
      this.onPaneRemove(this);
    },
    methods: {
      update(t) {
        this.style = t;
      },
    },
    computed: {
      sizeNumber() {
        return this.size || this.size === 0 ? parseFloat(this.size) : null;
      },
      minSizeNumber() {
        return parseFloat(this.minSize);
      },
      maxSizeNumber() {
        return parseFloat(this.maxSize);
      },
    },
    watch: {
      sizeNumber(t) {
        this.requestUpdate({ target: this, size: t });
      },
      minSizeNumber(t) {
        this.requestUpdate({ target: this, min: t });
      },
      maxSizeNumber(t) {
        this.requestUpdate({ target: this, max: t });
      },
    },
  };
function zvt(t, e, r, o, s, c) {
  return (
    st(),
    St(
      "div",
      {
        class: "splitpanes__pane",
        onClick: e[0] || (e[0] = (f) => c.onPaneClick(f, t._.uid)),
        style: An(t.style),
      },
      [Gn(t.$slots, "default")],
      4,
    )
  );
}
const Xa = Dvt(Rvt, [["render", zvt]]),
  Fvt = { "h-screen": "", "w-screen": "", overflow: "hidden" },
  Ivt = fe({
    __name: "index",
    setup(t) {
      const e = lgt(),
        r = cm("vitest-ui_splitpanes-mainSizes", [33, 67], {
          initOnMounted: !0,
        }),
        o = cm("vitest-ui_splitpanes-detailSizes", [33, 67], {
          initOnMounted: !0,
        }),
        s = lm((h) => {
          h.forEach((d, g) => {
            r.value[g] = d.size;
          });
        }, 0),
        c = lm((h) => {
          h.forEach((d, g) => {
            o.value[g] = d.size;
          });
        }, 0);
      function f() {
        const h = window.innerWidth,
          d = Math.min(h / 3, 300);
        (r.value[0] = (100 * d) / h),
          (r.value[1] = 100 - r.value[0]),
          (o.value[0] = (100 * d) / (h - d)),
          (o.value[1] = 100 - o.value[0]);
      }
      return (h, d) => {
        const g = Ovt,
          v = Nvt,
          y = kvt,
          w = ygt,
          _ = dgt,
          N = Opt,
          L = yat;
        return (
          st(),
          St(
            ne,
            null,
            [
              It(g),
              tt("div", Fvt, [
                It(
                  U(Rm),
                  { class: "pt-4px", onResized: U(s), onReady: f },
                  {
                    default: ee(() => [
                      It(
                        U(Xa),
                        { size: U(r)[0] },
                        { default: ee(() => [It(v)]), _: 1 },
                        8,
                        ["size"],
                      ),
                      It(
                        U(Xa),
                        { size: U(r)[1] },
                        {
                          default: ee(() => [
                            It(Bh, null, {
                              default: ee(() => [
                                U(e)
                                  ? (st(), te(y, { key: "summary" }))
                                  : U(po)
                                    ? (st(),
                                      te(
                                        w,
                                        { key: "coverage", src: U(sgt) },
                                        null,
                                        8,
                                        ["src"],
                                      ))
                                    : (st(),
                                      te(
                                        U(Rm),
                                        { key: "detail", onResized: U(c) },
                                        {
                                          default: ee(() => [
                                            It(
                                              U(Xa),
                                              { size: U(o)[0] },
                                              {
                                                default: ee(() => [It(_)]),
                                                _: 1,
                                              },
                                              8,
                                              ["size"],
                                            ),
                                            It(
                                              U(Xa),
                                              { size: U(o)[1] },
                                              {
                                                default: ee(() => [It(N)]),
                                                _: 1,
                                              },
                                              8,
                                              ["size"],
                                            ),
                                          ]),
                                          _: 1,
                                        },
                                        8,
                                        ["onResized"],
                                      )),
                              ]),
                              _: 1,
                            }),
                          ]),
                          _: 1,
                        },
                        8,
                        ["size"],
                      ),
                    ]),
                    _: 1,
                  },
                  8,
                  ["onResized"],
                ),
              ]),
              It(L),
            ],
            64,
          )
        );
      };
    },
  }),
  Hvt = [{ name: "index", path: "/", component: Ivt, props: !0 }],
  qvt = { tooltip: QC };
ky.options.instantMove = !0;
ky.options.distance = 10;
function Bvt() {
  return tC({ history: vk(), routes: Hvt });
}
const Wvt = [Bvt],
  bd = I0(ZS);
Wvt.forEach((t) => {
  bd.use(t());
});
Object.entries(qvt).forEach(([t, e]) => {
  bd.directive(t, e);
});
bd.mount("#app");
