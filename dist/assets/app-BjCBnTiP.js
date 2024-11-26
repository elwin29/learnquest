function Mn(e, t) {
    return function () {
        return e.apply(t, arguments);
    };
}
const { toString: gi } = Object.prototype,
    { getPrototypeOf: Ft } = Object,
    qe = ((e) => (t) => {
        const n = gi.call(t);
        return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
    })(Object.create(null)),
    j = (e) => ((e = e.toLowerCase()), (t) => qe(t) === e),
    He = (e) => (t) => typeof t === e,
    { isArray: se } = Array,
    ye = He("undefined");
function yi(e) {
    return (
        e !== null &&
        !ye(e) &&
        e.constructor !== null &&
        !ye(e.constructor) &&
        L(e.constructor.isBuffer) &&
        e.constructor.isBuffer(e)
    );
}
const jn = j("ArrayBuffer");
function bi(e) {
    let t;
    return (
        typeof ArrayBuffer < "u" && ArrayBuffer.isView
            ? (t = ArrayBuffer.isView(e))
            : (t = e && e.buffer && jn(e.buffer)),
        t
    );
}
const wi = He("string"),
    L = He("function"),
    In = He("number"),
    ze = (e) => e !== null && typeof e == "object",
    xi = (e) => e === !0 || e === !1,
    Le = (e) => {
        if (qe(e) !== "object") return !1;
        const t = Ft(e);
        return (
            (t === null ||
                t === Object.prototype ||
                Object.getPrototypeOf(t) === null) &&
            !(Symbol.toStringTag in e) &&
            !(Symbol.iterator in e)
        );
    },
    Ei = j("Date"),
    Si = j("File"),
    Ai = j("Blob"),
    Oi = j("FileList"),
    vi = (e) => ze(e) && L(e.pipe),
    Ri = (e) => {
        let t;
        return (
            e &&
            ((typeof FormData == "function" && e instanceof FormData) ||
                (L(e.append) &&
                    ((t = qe(e)) === "formdata" ||
                        (t === "object" &&
                            L(e.toString) &&
                            e.toString() === "[object FormData]"))))
        );
    },
    Ti = j("URLSearchParams"),
    [Ci, Pi, Ni, Li] = ["ReadableStream", "Request", "Response", "Headers"].map(
        j
    ),
    Fi = (e) =>
        e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function we(e, t, { allOwnKeys: n = !1 } = {}) {
    if (e === null || typeof e > "u") return;
    let r, i;
    if ((typeof e != "object" && (e = [e]), se(e)))
        for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
    else {
        const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
            o = s.length;
        let a;
        for (r = 0; r < o; r++) (a = s[r]), t.call(null, e[a], a, e);
    }
}
function Bn(e, t) {
    t = t.toLowerCase();
    const n = Object.keys(e);
    let r = n.length,
        i;
    for (; r-- > 0; ) if (((i = n[r]), t === i.toLowerCase())) return i;
    return null;
}
const J =
        typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
            ? self
            : typeof window < "u"
            ? window
            : global,
    Dn = (e) => !ye(e) && e !== J;
function ut() {
    const { caseless: e } = (Dn(this) && this) || {},
        t = {},
        n = (r, i) => {
            const s = (e && Bn(t, i)) || i;
            Le(t[s]) && Le(r)
                ? (t[s] = ut(t[s], r))
                : Le(r)
                ? (t[s] = ut({}, r))
                : se(r)
                ? (t[s] = r.slice())
                : (t[s] = r);
        };
    for (let r = 0, i = arguments.length; r < i; r++)
        arguments[r] && we(arguments[r], n);
    return t;
}
const Mi = (e, t, n, { allOwnKeys: r } = {}) => (
        we(
            t,
            (i, s) => {
                n && L(i) ? (e[s] = Mn(i, n)) : (e[s] = i);
            },
            { allOwnKeys: r }
        ),
        e
    ),
    ji = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
    Ii = (e, t, n, r) => {
        (e.prototype = Object.create(t.prototype, r)),
            (e.prototype.constructor = e),
            Object.defineProperty(e, "super", { value: t.prototype }),
            n && Object.assign(e.prototype, n);
    },
    Bi = (e, t, n, r) => {
        let i, s, o;
        const a = {};
        if (((t = t || {}), e == null)) return t;
        do {
            for (i = Object.getOwnPropertyNames(e), s = i.length; s-- > 0; )
                (o = i[s]),
                    (!r || r(o, e, t)) && !a[o] && ((t[o] = e[o]), (a[o] = !0));
            e = n !== !1 && Ft(e);
        } while (e && (!n || n(e, t)) && e !== Object.prototype);
        return t;
    },
    Di = (e, t, n) => {
        (e = String(e)),
            (n === void 0 || n > e.length) && (n = e.length),
            (n -= t.length);
        const r = e.indexOf(t, n);
        return r !== -1 && r === n;
    },
    ki = (e) => {
        if (!e) return null;
        if (se(e)) return e;
        let t = e.length;
        if (!In(t)) return null;
        const n = new Array(t);
        for (; t-- > 0; ) n[t] = e[t];
        return n;
    },
    $i = (
        (e) => (t) =>
            e && t instanceof e
    )(typeof Uint8Array < "u" && Ft(Uint8Array)),
    Ui = (e, t) => {
        const r = (e && e[Symbol.iterator]).call(e);
        let i;
        for (; (i = r.next()) && !i.done; ) {
            const s = i.value;
            t.call(e, s[0], s[1]);
        }
    },
    qi = (e, t) => {
        let n;
        const r = [];
        for (; (n = e.exec(t)) !== null; ) r.push(n);
        return r;
    },
    Hi = j("HTMLFormElement"),
    zi = (e) =>
        e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, i) {
            return r.toUpperCase() + i;
        }),
    on = (
        ({ hasOwnProperty: e }) =>
        (t, n) =>
            e.call(t, n)
    )(Object.prototype),
    Ki = j("RegExp"),
    kn = (e, t) => {
        const n = Object.getOwnPropertyDescriptors(e),
            r = {};
        we(n, (i, s) => {
            let o;
            (o = t(i, s, e)) !== !1 && (r[s] = o || i);
        }),
            Object.defineProperties(e, r);
    },
    Ji = (e) => {
        kn(e, (t, n) => {
            if (L(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
                return !1;
            const r = e[n];
            if (L(r)) {
                if (((t.enumerable = !1), "writable" in t)) {
                    t.writable = !1;
                    return;
                }
                t.set ||
                    (t.set = () => {
                        throw Error(
                            "Can not rewrite read-only method '" + n + "'"
                        );
                    });
            }
        });
    },
    Wi = (e, t) => {
        const n = {},
            r = (i) => {
                i.forEach((s) => {
                    n[s] = !0;
                });
            };
        return se(e) ? r(e) : r(String(e).split(t)), n;
    },
    Vi = () => {},
    Xi = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
    et = "abcdefghijklmnopqrstuvwxyz",
    an = "0123456789",
    $n = { DIGIT: an, ALPHA: et, ALPHA_DIGIT: et + et.toUpperCase() + an },
    Gi = (e = 16, t = $n.ALPHA_DIGIT) => {
        let n = "";
        const { length: r } = t;
        for (; e--; ) n += t[(Math.random() * r) | 0];
        return n;
    };
function Yi(e) {
    return !!(
        e &&
        L(e.append) &&
        e[Symbol.toStringTag] === "FormData" &&
        e[Symbol.iterator]
    );
}
const Zi = (e) => {
        const t = new Array(10),
            n = (r, i) => {
                if (ze(r)) {
                    if (t.indexOf(r) >= 0) return;
                    if (!("toJSON" in r)) {
                        t[i] = r;
                        const s = se(r) ? [] : {};
                        return (
                            we(r, (o, a) => {
                                const c = n(o, i + 1);
                                !ye(c) && (s[a] = c);
                            }),
                            (t[i] = void 0),
                            s
                        );
                    }
                }
                return r;
            };
        return n(e, 0);
    },
    Qi = j("AsyncFunction"),
    es = (e) => e && (ze(e) || L(e)) && L(e.then) && L(e.catch),
    Un = ((e, t) =>
        e
            ? setImmediate
            : t
            ? ((n, r) => (
                  J.addEventListener(
                      "message",
                      ({ source: i, data: s }) => {
                          i === J && s === n && r.length && r.shift()();
                      },
                      !1
                  ),
                  (i) => {
                      r.push(i), J.postMessage(n, "*");
                  }
              ))(`axios@${Math.random()}`, [])
            : (n) => setTimeout(n))(
        typeof setImmediate == "function",
        L(J.postMessage)
    ),
    ts =
        typeof queueMicrotask < "u"
            ? queueMicrotask.bind(J)
            : (typeof process < "u" && process.nextTick) || Un,
    f = {
        isArray: se,
        isArrayBuffer: jn,
        isBuffer: yi,
        isFormData: Ri,
        isArrayBufferView: bi,
        isString: wi,
        isNumber: In,
        isBoolean: xi,
        isObject: ze,
        isPlainObject: Le,
        isReadableStream: Ci,
        isRequest: Pi,
        isResponse: Ni,
        isHeaders: Li,
        isUndefined: ye,
        isDate: Ei,
        isFile: Si,
        isBlob: Ai,
        isRegExp: Ki,
        isFunction: L,
        isStream: vi,
        isURLSearchParams: Ti,
        isTypedArray: $i,
        isFileList: Oi,
        forEach: we,
        merge: ut,
        extend: Mi,
        trim: Fi,
        stripBOM: ji,
        inherits: Ii,
        toFlatObject: Bi,
        kindOf: qe,
        kindOfTest: j,
        endsWith: Di,
        toArray: ki,
        forEachEntry: Ui,
        matchAll: qi,
        isHTMLForm: Hi,
        hasOwnProperty: on,
        hasOwnProp: on,
        reduceDescriptors: kn,
        freezeMethods: Ji,
        toObjectSet: Wi,
        toCamelCase: zi,
        noop: Vi,
        toFiniteNumber: Xi,
        findKey: Bn,
        global: J,
        isContextDefined: Dn,
        ALPHABET: $n,
        generateString: Gi,
        isSpecCompliantForm: Yi,
        toJSONObject: Zi,
        isAsyncFn: Qi,
        isThenable: es,
        setImmediate: Un,
        asap: ts,
    };
function y(e, t, n, r, i) {
    Error.call(this),
        Error.captureStackTrace
            ? Error.captureStackTrace(this, this.constructor)
            : (this.stack = new Error().stack),
        (this.message = e),
        (this.name = "AxiosError"),
        t && (this.code = t),
        n && (this.config = n),
        r && (this.request = r),
        i && ((this.response = i), (this.status = i.status ? i.status : null));
}
f.inherits(y, Error, {
    toJSON: function () {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: f.toJSONObject(this.config),
            code: this.code,
            status: this.status,
        };
    },
});
const qn = y.prototype,
    Hn = {};
[
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
    "ERR_NOT_SUPPORT",
    "ERR_INVALID_URL",
].forEach((e) => {
    Hn[e] = { value: e };
});
Object.defineProperties(y, Hn);
Object.defineProperty(qn, "isAxiosError", { value: !0 });
y.from = (e, t, n, r, i, s) => {
    const o = Object.create(qn);
    return (
        f.toFlatObject(
            e,
            o,
            function (c) {
                return c !== Error.prototype;
            },
            (a) => a !== "isAxiosError"
        ),
        y.call(o, e.message, t, n, r, i),
        (o.cause = e),
        (o.name = e.name),
        s && Object.assign(o, s),
        o
    );
};
const ns = null;
function lt(e) {
    return f.isPlainObject(e) || f.isArray(e);
}
function zn(e) {
    return f.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function cn(e, t, n) {
    return e
        ? e
              .concat(t)
              .map(function (i, s) {
                  return (i = zn(i)), !n && s ? "[" + i + "]" : i;
              })
              .join(n ? "." : "")
        : t;
}
function rs(e) {
    return f.isArray(e) && !e.some(lt);
}
const is = f.toFlatObject(f, {}, null, function (t) {
    return /^is[A-Z]/.test(t);
});
function Ke(e, t, n) {
    if (!f.isObject(e)) throw new TypeError("target must be an object");
    (t = t || new FormData()),
        (n = f.toFlatObject(
            n,
            { metaTokens: !0, dots: !1, indexes: !1 },
            !1,
            function (g, d) {
                return !f.isUndefined(d[g]);
            }
        ));
    const r = n.metaTokens,
        i = n.visitor || l,
        s = n.dots,
        o = n.indexes,
        c = (n.Blob || (typeof Blob < "u" && Blob)) && f.isSpecCompliantForm(t);
    if (!f.isFunction(i)) throw new TypeError("visitor must be a function");
    function u(h) {
        if (h === null) return "";
        if (f.isDate(h)) return h.toISOString();
        if (!c && f.isBlob(h))
            throw new y("Blob is not supported. Use a Buffer instead.");
        return f.isArrayBuffer(h) || f.isTypedArray(h)
            ? c && typeof Blob == "function"
                ? new Blob([h])
                : Buffer.from(h)
            : h;
    }
    function l(h, g, d) {
        let m = h;
        if (h && !d && typeof h == "object") {
            if (f.endsWith(g, "{}"))
                (g = r ? g : g.slice(0, -2)), (h = JSON.stringify(h));
            else if (
                (f.isArray(h) && rs(h)) ||
                ((f.isFileList(h) || f.endsWith(g, "[]")) && (m = f.toArray(h)))
            )
                return (
                    (g = zn(g)),
                    m.forEach(function (x, A) {
                        !(f.isUndefined(x) || x === null) &&
                            t.append(
                                o === !0
                                    ? cn([g], A, s)
                                    : o === null
                                    ? g
                                    : g + "[]",
                                u(x)
                            );
                    }),
                    !1
                );
        }
        return lt(h) ? !0 : (t.append(cn(d, g, s), u(h)), !1);
    }
    const p = [],
        _ = Object.assign(is, {
            defaultVisitor: l,
            convertValue: u,
            isVisitable: lt,
        });
    function w(h, g) {
        if (!f.isUndefined(h)) {
            if (p.indexOf(h) !== -1)
                throw Error("Circular reference detected in " + g.join("."));
            p.push(h),
                f.forEach(h, function (m, b) {
                    (!(f.isUndefined(m) || m === null) &&
                        i.call(t, m, f.isString(b) ? b.trim() : b, g, _)) ===
                        !0 && w(m, g ? g.concat(b) : [b]);
                }),
                p.pop();
        }
    }
    if (!f.isObject(e)) throw new TypeError("data must be an object");
    return w(e), t;
}
function un(e) {
    const t = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0",
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
        return t[r];
    });
}
function Mt(e, t) {
    (this._pairs = []), e && Ke(e, this, t);
}
const Kn = Mt.prototype;
Kn.append = function (t, n) {
    this._pairs.push([t, n]);
};
Kn.toString = function (t) {
    const n = t
        ? function (r) {
              return t.call(this, r, un);
          }
        : un;
    return this._pairs
        .map(function (i) {
            return n(i[0]) + "=" + n(i[1]);
        }, "")
        .join("&");
};
function ss(e) {
    return encodeURIComponent(e)
        .replace(/%3A/gi, ":")
        .replace(/%24/g, "$")
        .replace(/%2C/gi, ",")
        .replace(/%20/g, "+")
        .replace(/%5B/gi, "[")
        .replace(/%5D/gi, "]");
}
function Jn(e, t, n) {
    if (!t) return e;
    const r = (n && n.encode) || ss,
        i = n && n.serialize;
    let s;
    if (
        (i
            ? (s = i(t, n))
            : (s = f.isURLSearchParams(t)
                  ? t.toString()
                  : new Mt(t, n).toString(r)),
        s)
    ) {
        const o = e.indexOf("#");
        o !== -1 && (e = e.slice(0, o)),
            (e += (e.indexOf("?") === -1 ? "?" : "&") + s);
    }
    return e;
}
class ln {
    constructor() {
        this.handlers = [];
    }
    use(t, n, r) {
        return (
            this.handlers.push({
                fulfilled: t,
                rejected: n,
                synchronous: r ? r.synchronous : !1,
                runWhen: r ? r.runWhen : null,
            }),
            this.handlers.length - 1
        );
    }
    eject(t) {
        this.handlers[t] && (this.handlers[t] = null);
    }
    clear() {
        this.handlers && (this.handlers = []);
    }
    forEach(t) {
        f.forEach(this.handlers, function (r) {
            r !== null && t(r);
        });
    }
}
const Wn = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1,
    },
    os = typeof URLSearchParams < "u" ? URLSearchParams : Mt,
    as = typeof FormData < "u" ? FormData : null,
    cs = typeof Blob < "u" ? Blob : null,
    us = {
        isBrowser: !0,
        classes: { URLSearchParams: os, FormData: as, Blob: cs },
        protocols: ["http", "https", "file", "blob", "url", "data"],
    },
    jt = typeof window < "u" && typeof document < "u",
    ft = (typeof navigator == "object" && navigator) || void 0,
    ls =
        jt &&
        (!ft || ["ReactNative", "NativeScript", "NS"].indexOf(ft.product) < 0),
    fs =
        typeof WorkerGlobalScope < "u" &&
        self instanceof WorkerGlobalScope &&
        typeof self.importScripts == "function",
    ds = (jt && window.location.href) || "http://localhost",
    ps = Object.freeze(
        Object.defineProperty(
            {
                __proto__: null,
                hasBrowserEnv: jt,
                hasStandardBrowserEnv: ls,
                hasStandardBrowserWebWorkerEnv: fs,
                navigator: ft,
                origin: ds,
            },
            Symbol.toStringTag,
            { value: "Module" }
        )
    ),
    P = { ...ps, ...us };
function hs(e, t) {
    return Ke(
        e,
        new P.classes.URLSearchParams(),
        Object.assign(
            {
                visitor: function (n, r, i, s) {
                    return P.isNode && f.isBuffer(n)
                        ? (this.append(r, n.toString("base64")), !1)
                        : s.defaultVisitor.apply(this, arguments);
                },
            },
            t
        )
    );
}
function _s(e) {
    return f
        .matchAll(/\w+|\[(\w*)]/g, e)
        .map((t) => (t[0] === "[]" ? "" : t[1] || t[0]));
}
function ms(e) {
    const t = {},
        n = Object.keys(e);
    let r;
    const i = n.length;
    let s;
    for (r = 0; r < i; r++) (s = n[r]), (t[s] = e[s]);
    return t;
}
function Vn(e) {
    function t(n, r, i, s) {
        let o = n[s++];
        if (o === "__proto__") return !0;
        const a = Number.isFinite(+o),
            c = s >= n.length;
        return (
            (o = !o && f.isArray(i) ? i.length : o),
            c
                ? (f.hasOwnProp(i, o) ? (i[o] = [i[o], r]) : (i[o] = r), !a)
                : ((!i[o] || !f.isObject(i[o])) && (i[o] = []),
                  t(n, r, i[o], s) && f.isArray(i[o]) && (i[o] = ms(i[o])),
                  !a)
        );
    }
    if (f.isFormData(e) && f.isFunction(e.entries)) {
        const n = {};
        return (
            f.forEachEntry(e, (r, i) => {
                t(_s(r), i, n, 0);
            }),
            n
        );
    }
    return null;
}
function gs(e, t, n) {
    if (f.isString(e))
        try {
            return (t || JSON.parse)(e), f.trim(e);
        } catch (r) {
            if (r.name !== "SyntaxError") throw r;
        }
    return (0, JSON.stringify)(e);
}
const xe = {
    transitional: Wn,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [
        function (t, n) {
            const r = n.getContentType() || "",
                i = r.indexOf("application/json") > -1,
                s = f.isObject(t);
            if (
                (s && f.isHTMLForm(t) && (t = new FormData(t)), f.isFormData(t))
            )
                return i ? JSON.stringify(Vn(t)) : t;
            if (
                f.isArrayBuffer(t) ||
                f.isBuffer(t) ||
                f.isStream(t) ||
                f.isFile(t) ||
                f.isBlob(t) ||
                f.isReadableStream(t)
            )
                return t;
            if (f.isArrayBufferView(t)) return t.buffer;
            if (f.isURLSearchParams(t))
                return (
                    n.setContentType(
                        "application/x-www-form-urlencoded;charset=utf-8",
                        !1
                    ),
                    t.toString()
                );
            let a;
            if (s) {
                if (r.indexOf("application/x-www-form-urlencoded") > -1)
                    return hs(t, this.formSerializer).toString();
                if (
                    (a = f.isFileList(t)) ||
                    r.indexOf("multipart/form-data") > -1
                ) {
                    const c = this.env && this.env.FormData;
                    return Ke(
                        a ? { "files[]": t } : t,
                        c && new c(),
                        this.formSerializer
                    );
                }
            }
            return s || i
                ? (n.setContentType("application/json", !1), gs(t))
                : t;
        },
    ],
    transformResponse: [
        function (t) {
            const n = this.transitional || xe.transitional,
                r = n && n.forcedJSONParsing,
                i = this.responseType === "json";
            if (f.isResponse(t) || f.isReadableStream(t)) return t;
            if (t && f.isString(t) && ((r && !this.responseType) || i)) {
                const o = !(n && n.silentJSONParsing) && i;
                try {
                    return JSON.parse(t);
                } catch (a) {
                    if (o)
                        throw a.name === "SyntaxError"
                            ? y.from(
                                  a,
                                  y.ERR_BAD_RESPONSE,
                                  this,
                                  null,
                                  this.response
                              )
                            : a;
                }
            }
            return t;
        },
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: { FormData: P.classes.FormData, Blob: P.classes.Blob },
    validateStatus: function (t) {
        return t >= 200 && t < 300;
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0,
        },
    },
};
f.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
    xe.headers[e] = {};
});
const ys = f.toObjectSet([
        "age",
        "authorization",
        "content-length",
        "content-type",
        "etag",
        "expires",
        "from",
        "host",
        "if-modified-since",
        "if-unmodified-since",
        "last-modified",
        "location",
        "max-forwards",
        "proxy-authorization",
        "referer",
        "retry-after",
        "user-agent",
    ]),
    bs = (e) => {
        const t = {};
        let n, r, i;
        return (
            e &&
                e
                    .split(
                        `
`
                    )
                    .forEach(function (o) {
                        (i = o.indexOf(":")),
                            (n = o.substring(0, i).trim().toLowerCase()),
                            (r = o.substring(i + 1).trim()),
                            !(!n || (t[n] && ys[n])) &&
                                (n === "set-cookie"
                                    ? t[n]
                                        ? t[n].push(r)
                                        : (t[n] = [r])
                                    : (t[n] = t[n] ? t[n] + ", " + r : r));
                    }),
            t
        );
    },
    fn = Symbol("internals");
function fe(e) {
    return e && String(e).trim().toLowerCase();
}
function Fe(e) {
    return e === !1 || e == null ? e : f.isArray(e) ? e.map(Fe) : String(e);
}
function ws(e) {
    const t = Object.create(null),
        n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let r;
    for (; (r = n.exec(e)); ) t[r[1]] = r[2];
    return t;
}
const xs = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function tt(e, t, n, r, i) {
    if (f.isFunction(r)) return r.call(this, t, n);
    if ((i && (t = n), !!f.isString(t))) {
        if (f.isString(r)) return t.indexOf(r) !== -1;
        if (f.isRegExp(r)) return r.test(t);
    }
}
function Es(e) {
    return e
        .trim()
        .toLowerCase()
        .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Ss(e, t) {
    const n = f.toCamelCase(" " + t);
    ["get", "set", "has"].forEach((r) => {
        Object.defineProperty(e, r + n, {
            value: function (i, s, o) {
                return this[r].call(this, t, i, s, o);
            },
            configurable: !0,
        });
    });
}
class N {
    constructor(t) {
        t && this.set(t);
    }
    set(t, n, r) {
        const i = this;
        function s(a, c, u) {
            const l = fe(c);
            if (!l) throw new Error("header name must be a non-empty string");
            const p = f.findKey(i, l);
            (!p ||
                i[p] === void 0 ||
                u === !0 ||
                (u === void 0 && i[p] !== !1)) &&
                (i[p || c] = Fe(a));
        }
        const o = (a, c) => f.forEach(a, (u, l) => s(u, l, c));
        if (f.isPlainObject(t) || t instanceof this.constructor) o(t, n);
        else if (f.isString(t) && (t = t.trim()) && !xs(t)) o(bs(t), n);
        else if (f.isHeaders(t)) for (const [a, c] of t.entries()) s(c, a, r);
        else t != null && s(n, t, r);
        return this;
    }
    get(t, n) {
        if (((t = fe(t)), t)) {
            const r = f.findKey(this, t);
            if (r) {
                const i = this[r];
                if (!n) return i;
                if (n === !0) return ws(i);
                if (f.isFunction(n)) return n.call(this, i, r);
                if (f.isRegExp(n)) return n.exec(i);
                throw new TypeError("parser must be boolean|regexp|function");
            }
        }
    }
    has(t, n) {
        if (((t = fe(t)), t)) {
            const r = f.findKey(this, t);
            return !!(
                r &&
                this[r] !== void 0 &&
                (!n || tt(this, this[r], r, n))
            );
        }
        return !1;
    }
    delete(t, n) {
        const r = this;
        let i = !1;
        function s(o) {
            if (((o = fe(o)), o)) {
                const a = f.findKey(r, o);
                a && (!n || tt(r, r[a], a, n)) && (delete r[a], (i = !0));
            }
        }
        return f.isArray(t) ? t.forEach(s) : s(t), i;
    }
    clear(t) {
        const n = Object.keys(this);
        let r = n.length,
            i = !1;
        for (; r--; ) {
            const s = n[r];
            (!t || tt(this, this[s], s, t, !0)) && (delete this[s], (i = !0));
        }
        return i;
    }
    normalize(t) {
        const n = this,
            r = {};
        return (
            f.forEach(this, (i, s) => {
                const o = f.findKey(r, s);
                if (o) {
                    (n[o] = Fe(i)), delete n[s];
                    return;
                }
                const a = t ? Es(s) : String(s).trim();
                a !== s && delete n[s], (n[a] = Fe(i)), (r[a] = !0);
            }),
            this
        );
    }
    concat(...t) {
        return this.constructor.concat(this, ...t);
    }
    toJSON(t) {
        const n = Object.create(null);
        return (
            f.forEach(this, (r, i) => {
                r != null &&
                    r !== !1 &&
                    (n[i] = t && f.isArray(r) ? r.join(", ") : r);
            }),
            n
        );
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
        return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n)
            .join(`
`);
    }
    get [Symbol.toStringTag]() {
        return "AxiosHeaders";
    }
    static from(t) {
        return t instanceof this ? t : new this(t);
    }
    static concat(t, ...n) {
        const r = new this(t);
        return n.forEach((i) => r.set(i)), r;
    }
    static accessor(t) {
        const r = (this[fn] = this[fn] = { accessors: {} }).accessors,
            i = this.prototype;
        function s(o) {
            const a = fe(o);
            r[a] || (Ss(i, o), (r[a] = !0));
        }
        return f.isArray(t) ? t.forEach(s) : s(t), this;
    }
}
N.accessor([
    "Content-Type",
    "Content-Length",
    "Accept",
    "Accept-Encoding",
    "User-Agent",
    "Authorization",
]);
f.reduceDescriptors(N.prototype, ({ value: e }, t) => {
    let n = t[0].toUpperCase() + t.slice(1);
    return {
        get: () => e,
        set(r) {
            this[n] = r;
        },
    };
});
f.freezeMethods(N);
function nt(e, t) {
    const n = this || xe,
        r = t || n,
        i = N.from(r.headers);
    let s = r.data;
    return (
        f.forEach(e, function (a) {
            s = a.call(n, s, i.normalize(), t ? t.status : void 0);
        }),
        i.normalize(),
        s
    );
}
function Xn(e) {
    return !!(e && e.__CANCEL__);
}
function oe(e, t, n) {
    y.call(this, e ?? "canceled", y.ERR_CANCELED, t, n),
        (this.name = "CanceledError");
}
f.inherits(oe, y, { __CANCEL__: !0 });
function Gn(e, t, n) {
    const r = n.config.validateStatus;
    !n.status || !r || r(n.status)
        ? e(n)
        : t(
              new y(
                  "Request failed with status code " + n.status,
                  [y.ERR_BAD_REQUEST, y.ERR_BAD_RESPONSE][
                      Math.floor(n.status / 100) - 4
                  ],
                  n.config,
                  n.request,
                  n
              )
          );
}
function As(e) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return (t && t[1]) || "";
}
function Os(e, t) {
    e = e || 10;
    const n = new Array(e),
        r = new Array(e);
    let i = 0,
        s = 0,
        o;
    return (
        (t = t !== void 0 ? t : 1e3),
        function (c) {
            const u = Date.now(),
                l = r[s];
            o || (o = u), (n[i] = c), (r[i] = u);
            let p = s,
                _ = 0;
            for (; p !== i; ) (_ += n[p++]), (p = p % e);
            if (((i = (i + 1) % e), i === s && (s = (s + 1) % e), u - o < t))
                return;
            const w = l && u - l;
            return w ? Math.round((_ * 1e3) / w) : void 0;
        }
    );
}
function vs(e, t) {
    let n = 0,
        r = 1e3 / t,
        i,
        s;
    const o = (u, l = Date.now()) => {
        (n = l),
            (i = null),
            s && (clearTimeout(s), (s = null)),
            e.apply(null, u);
    };
    return [
        (...u) => {
            const l = Date.now(),
                p = l - n;
            p >= r
                ? o(u, l)
                : ((i = u),
                  s ||
                      (s = setTimeout(() => {
                          (s = null), o(i);
                      }, r - p)));
        },
        () => i && o(i),
    ];
}
const Ie = (e, t, n = 3) => {
        let r = 0;
        const i = Os(50, 250);
        return vs((s) => {
            const o = s.loaded,
                a = s.lengthComputable ? s.total : void 0,
                c = o - r,
                u = i(c),
                l = o <= a;
            r = o;
            const p = {
                loaded: o,
                total: a,
                progress: a ? o / a : void 0,
                bytes: c,
                rate: u || void 0,
                estimated: u && a && l ? (a - o) / u : void 0,
                event: s,
                lengthComputable: a != null,
                [t ? "download" : "upload"]: !0,
            };
            e(p);
        }, n);
    },
    dn = (e, t) => {
        const n = e != null;
        return [
            (r) => t[0]({ lengthComputable: n, total: e, loaded: r }),
            t[1],
        ];
    },
    pn =
        (e) =>
        (...t) =>
            f.asap(() => e(...t)),
    Rs = P.hasStandardBrowserEnv
        ? (function () {
              const t =
                      P.navigator &&
                      /(msie|trident)/i.test(P.navigator.userAgent),
                  n = document.createElement("a");
              let r;
              function i(s) {
                  let o = s;
                  return (
                      t && (n.setAttribute("href", o), (o = n.href)),
                      n.setAttribute("href", o),
                      {
                          href: n.href,
                          protocol: n.protocol
                              ? n.protocol.replace(/:$/, "")
                              : "",
                          host: n.host,
                          search: n.search ? n.search.replace(/^\?/, "") : "",
                          hash: n.hash ? n.hash.replace(/^#/, "") : "",
                          hostname: n.hostname,
                          port: n.port,
                          pathname:
                              n.pathname.charAt(0) === "/"
                                  ? n.pathname
                                  : "/" + n.pathname,
                      }
                  );
              }
              return (
                  (r = i(window.location.href)),
                  function (o) {
                      const a = f.isString(o) ? i(o) : o;
                      return a.protocol === r.protocol && a.host === r.host;
                  }
              );
          })()
        : (function () {
              return function () {
                  return !0;
              };
          })(),
    Ts = P.hasStandardBrowserEnv
        ? {
              write(e, t, n, r, i, s) {
                  const o = [e + "=" + encodeURIComponent(t)];
                  f.isNumber(n) &&
                      o.push("expires=" + new Date(n).toGMTString()),
                      f.isString(r) && o.push("path=" + r),
                      f.isString(i) && o.push("domain=" + i),
                      s === !0 && o.push("secure"),
                      (document.cookie = o.join("; "));
              },
              read(e) {
                  const t = document.cookie.match(
                      new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
                  );
                  return t ? decodeURIComponent(t[3]) : null;
              },
              remove(e) {
                  this.write(e, "", Date.now() - 864e5);
              },
          }
        : {
              write() {},
              read() {
                  return null;
              },
              remove() {},
          };
function Cs(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Ps(e, t) {
    return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Yn(e, t) {
    return e && !Cs(t) ? Ps(e, t) : t;
}
const hn = (e) => (e instanceof N ? { ...e } : e);
function Q(e, t) {
    t = t || {};
    const n = {};
    function r(u, l, p) {
        return f.isPlainObject(u) && f.isPlainObject(l)
            ? f.merge.call({ caseless: p }, u, l)
            : f.isPlainObject(l)
            ? f.merge({}, l)
            : f.isArray(l)
            ? l.slice()
            : l;
    }
    function i(u, l, p) {
        if (f.isUndefined(l)) {
            if (!f.isUndefined(u)) return r(void 0, u, p);
        } else return r(u, l, p);
    }
    function s(u, l) {
        if (!f.isUndefined(l)) return r(void 0, l);
    }
    function o(u, l) {
        if (f.isUndefined(l)) {
            if (!f.isUndefined(u)) return r(void 0, u);
        } else return r(void 0, l);
    }
    function a(u, l, p) {
        if (p in t) return r(u, l);
        if (p in e) return r(void 0, u);
    }
    const c = {
        url: s,
        method: s,
        data: s,
        baseURL: o,
        transformRequest: o,
        transformResponse: o,
        paramsSerializer: o,
        timeout: o,
        timeoutMessage: o,
        withCredentials: o,
        withXSRFToken: o,
        adapter: o,
        responseType: o,
        xsrfCookieName: o,
        xsrfHeaderName: o,
        onUploadProgress: o,
        onDownloadProgress: o,
        decompress: o,
        maxContentLength: o,
        maxBodyLength: o,
        beforeRedirect: o,
        transport: o,
        httpAgent: o,
        httpsAgent: o,
        cancelToken: o,
        socketPath: o,
        responseEncoding: o,
        validateStatus: a,
        headers: (u, l) => i(hn(u), hn(l), !0),
    };
    return (
        f.forEach(Object.keys(Object.assign({}, e, t)), function (l) {
            const p = c[l] || i,
                _ = p(e[l], t[l], l);
            (f.isUndefined(_) && p !== a) || (n[l] = _);
        }),
        n
    );
}
const Zn = (e) => {
        const t = Q({}, e);
        let {
            data: n,
            withXSRFToken: r,
            xsrfHeaderName: i,
            xsrfCookieName: s,
            headers: o,
            auth: a,
        } = t;
        (t.headers = o = N.from(o)),
            (t.url = Jn(Yn(t.baseURL, t.url), e.params, e.paramsSerializer)),
            a &&
                o.set(
                    "Authorization",
                    "Basic " +
                        btoa(
                            (a.username || "") +
                                ":" +
                                (a.password
                                    ? unescape(encodeURIComponent(a.password))
                                    : "")
                        )
                );
        let c;
        if (f.isFormData(n)) {
            if (P.hasStandardBrowserEnv || P.hasStandardBrowserWebWorkerEnv)
                o.setContentType(void 0);
            else if ((c = o.getContentType()) !== !1) {
                const [u, ...l] = c
                    ? c
                          .split(";")
                          .map((p) => p.trim())
                          .filter(Boolean)
                    : [];
                o.setContentType([u || "multipart/form-data", ...l].join("; "));
            }
        }
        if (
            P.hasStandardBrowserEnv &&
            (r && f.isFunction(r) && (r = r(t)), r || (r !== !1 && Rs(t.url)))
        ) {
            const u = i && s && Ts.read(s);
            u && o.set(i, u);
        }
        return t;
    },
    Ns = typeof XMLHttpRequest < "u",
    Ls =
        Ns &&
        function (e) {
            return new Promise(function (n, r) {
                const i = Zn(e);
                let s = i.data;
                const o = N.from(i.headers).normalize();
                let {
                        responseType: a,
                        onUploadProgress: c,
                        onDownloadProgress: u,
                    } = i,
                    l,
                    p,
                    _,
                    w,
                    h;
                function g() {
                    w && w(),
                        h && h(),
                        i.cancelToken && i.cancelToken.unsubscribe(l),
                        i.signal && i.signal.removeEventListener("abort", l);
                }
                let d = new XMLHttpRequest();
                d.open(i.method.toUpperCase(), i.url, !0),
                    (d.timeout = i.timeout);
                function m() {
                    if (!d) return;
                    const x = N.from(
                            "getAllResponseHeaders" in d &&
                                d.getAllResponseHeaders()
                        ),
                        O = {
                            data:
                                !a || a === "text" || a === "json"
                                    ? d.responseText
                                    : d.response,
                            status: d.status,
                            statusText: d.statusText,
                            headers: x,
                            config: e,
                            request: d,
                        };
                    Gn(
                        function (B) {
                            n(B), g();
                        },
                        function (B) {
                            r(B), g();
                        },
                        O
                    ),
                        (d = null);
                }
                "onloadend" in d
                    ? (d.onloadend = m)
                    : (d.onreadystatechange = function () {
                          !d ||
                              d.readyState !== 4 ||
                              (d.status === 0 &&
                                  !(
                                      d.responseURL &&
                                      d.responseURL.indexOf("file:") === 0
                                  )) ||
                              setTimeout(m);
                      }),
                    (d.onabort = function () {
                        d &&
                            (r(new y("Request aborted", y.ECONNABORTED, e, d)),
                            (d = null));
                    }),
                    (d.onerror = function () {
                        r(new y("Network Error", y.ERR_NETWORK, e, d)),
                            (d = null);
                    }),
                    (d.ontimeout = function () {
                        let A = i.timeout
                            ? "timeout of " + i.timeout + "ms exceeded"
                            : "timeout exceeded";
                        const O = i.transitional || Wn;
                        i.timeoutErrorMessage && (A = i.timeoutErrorMessage),
                            r(
                                new y(
                                    A,
                                    O.clarifyTimeoutError
                                        ? y.ETIMEDOUT
                                        : y.ECONNABORTED,
                                    e,
                                    d
                                )
                            ),
                            (d = null);
                    }),
                    s === void 0 && o.setContentType(null),
                    "setRequestHeader" in d &&
                        f.forEach(o.toJSON(), function (A, O) {
                            d.setRequestHeader(O, A);
                        }),
                    f.isUndefined(i.withCredentials) ||
                        (d.withCredentials = !!i.withCredentials),
                    a && a !== "json" && (d.responseType = i.responseType),
                    u &&
                        (([_, h] = Ie(u, !0)),
                        d.addEventListener("progress", _)),
                    c &&
                        d.upload &&
                        (([p, w] = Ie(c)),
                        d.upload.addEventListener("progress", p),
                        d.upload.addEventListener("loadend", w)),
                    (i.cancelToken || i.signal) &&
                        ((l = (x) => {
                            d &&
                                (r(!x || x.type ? new oe(null, e, d) : x),
                                d.abort(),
                                (d = null));
                        }),
                        i.cancelToken && i.cancelToken.subscribe(l),
                        i.signal &&
                            (i.signal.aborted
                                ? l()
                                : i.signal.addEventListener("abort", l)));
                const b = As(i.url);
                if (b && P.protocols.indexOf(b) === -1) {
                    r(
                        new y(
                            "Unsupported protocol " + b + ":",
                            y.ERR_BAD_REQUEST,
                            e
                        )
                    );
                    return;
                }
                d.send(s || null);
            });
        },
    Fs = (e, t) => {
        const { length: n } = (e = e ? e.filter(Boolean) : []);
        if (t || n) {
            let r = new AbortController(),
                i;
            const s = function (u) {
                if (!i) {
                    (i = !0), a();
                    const l = u instanceof Error ? u : this.reason;
                    r.abort(
                        l instanceof y
                            ? l
                            : new oe(l instanceof Error ? l.message : l)
                    );
                }
            };
            let o =
                t &&
                setTimeout(() => {
                    (o = null),
                        s(new y(`timeout ${t} of ms exceeded`, y.ETIMEDOUT));
                }, t);
            const a = () => {
                e &&
                    (o && clearTimeout(o),
                    (o = null),
                    e.forEach((u) => {
                        u.unsubscribe
                            ? u.unsubscribe(s)
                            : u.removeEventListener("abort", s);
                    }),
                    (e = null));
            };
            e.forEach((u) => u.addEventListener("abort", s));
            const { signal: c } = r;
            return (c.unsubscribe = () => f.asap(a)), c;
        }
    },
    Ms = function* (e, t) {
        let n = e.byteLength;
        if (n < t) {
            yield e;
            return;
        }
        let r = 0,
            i;
        for (; r < n; ) (i = r + t), yield e.slice(r, i), (r = i);
    },
    js = async function* (e, t) {
        for await (const n of Is(e)) yield* Ms(n, t);
    },
    Is = async function* (e) {
        if (e[Symbol.asyncIterator]) {
            yield* e;
            return;
        }
        const t = e.getReader();
        try {
            for (;;) {
                const { done: n, value: r } = await t.read();
                if (n) break;
                yield r;
            }
        } finally {
            await t.cancel();
        }
    },
    _n = (e, t, n, r) => {
        const i = js(e, t);
        let s = 0,
            o,
            a = (c) => {
                o || ((o = !0), r && r(c));
            };
        return new ReadableStream(
            {
                async pull(c) {
                    try {
                        const { done: u, value: l } = await i.next();
                        if (u) {
                            a(), c.close();
                            return;
                        }
                        let p = l.byteLength;
                        if (n) {
                            let _ = (s += p);
                            n(_);
                        }
                        c.enqueue(new Uint8Array(l));
                    } catch (u) {
                        throw (a(u), u);
                    }
                },
                cancel(c) {
                    return a(c), i.return();
                },
            },
            { highWaterMark: 2 }
        );
    },
    Je =
        typeof fetch == "function" &&
        typeof Request == "function" &&
        typeof Response == "function",
    Qn = Je && typeof ReadableStream == "function",
    Bs =
        Je &&
        (typeof TextEncoder == "function"
            ? (
                  (e) => (t) =>
                      e.encode(t)
              )(new TextEncoder())
            : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
    er = (e, ...t) => {
        try {
            return !!e(...t);
        } catch {
            return !1;
        }
    },
    Ds =
        Qn &&
        er(() => {
            let e = !1;
            const t = new Request(P.origin, {
                body: new ReadableStream(),
                method: "POST",
                get duplex() {
                    return (e = !0), "half";
                },
            }).headers.has("Content-Type");
            return e && !t;
        }),
    mn = 64 * 1024,
    dt = Qn && er(() => f.isReadableStream(new Response("").body)),
    Be = { stream: dt && ((e) => e.body) };
Je &&
    ((e) => {
        ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
            !Be[t] &&
                (Be[t] = f.isFunction(e[t])
                    ? (n) => n[t]()
                    : (n, r) => {
                          throw new y(
                              `Response type '${t}' is not supported`,
                              y.ERR_NOT_SUPPORT,
                              r
                          );
                      });
        });
    })(new Response());
const ks = async (e) => {
        if (e == null) return 0;
        if (f.isBlob(e)) return e.size;
        if (f.isSpecCompliantForm(e))
            return (
                await new Request(P.origin, {
                    method: "POST",
                    body: e,
                }).arrayBuffer()
            ).byteLength;
        if (f.isArrayBufferView(e) || f.isArrayBuffer(e)) return e.byteLength;
        if ((f.isURLSearchParams(e) && (e = e + ""), f.isString(e)))
            return (await Bs(e)).byteLength;
    },
    $s = async (e, t) => {
        const n = f.toFiniteNumber(e.getContentLength());
        return n ?? ks(t);
    },
    Us =
        Je &&
        (async (e) => {
            let {
                url: t,
                method: n,
                data: r,
                signal: i,
                cancelToken: s,
                timeout: o,
                onDownloadProgress: a,
                onUploadProgress: c,
                responseType: u,
                headers: l,
                withCredentials: p = "same-origin",
                fetchOptions: _,
            } = Zn(e);
            u = u ? (u + "").toLowerCase() : "text";
            let w = Fs([i, s && s.toAbortSignal()], o),
                h;
            const g =
                w &&
                w.unsubscribe &&
                (() => {
                    w.unsubscribe();
                });
            let d;
            try {
                if (
                    c &&
                    Ds &&
                    n !== "get" &&
                    n !== "head" &&
                    (d = await $s(l, r)) !== 0
                ) {
                    let O = new Request(t, {
                            method: "POST",
                            body: r,
                            duplex: "half",
                        }),
                        C;
                    if (
                        (f.isFormData(r) &&
                            (C = O.headers.get("content-type")) &&
                            l.setContentType(C),
                        O.body)
                    ) {
                        const [B, ne] = dn(d, Ie(pn(c)));
                        r = _n(O.body, mn, B, ne);
                    }
                }
                f.isString(p) || (p = p ? "include" : "omit");
                const m = "credentials" in Request.prototype;
                h = new Request(t, {
                    ..._,
                    signal: w,
                    method: n.toUpperCase(),
                    headers: l.normalize().toJSON(),
                    body: r,
                    duplex: "half",
                    credentials: m ? p : void 0,
                });
                let b = await fetch(h);
                const x = dt && (u === "stream" || u === "response");
                if (dt && (a || (x && g))) {
                    const O = {};
                    ["status", "statusText", "headers"].forEach((ve) => {
                        O[ve] = b[ve];
                    });
                    const C = f.toFiniteNumber(b.headers.get("content-length")),
                        [B, ne] = (a && dn(C, Ie(pn(a), !0))) || [];
                    b = new Response(
                        _n(b.body, mn, B, () => {
                            ne && ne(), g && g();
                        }),
                        O
                    );
                }
                u = u || "text";
                let A = await Be[f.findKey(Be, u) || "text"](b, e);
                return (
                    !x && g && g(),
                    await new Promise((O, C) => {
                        Gn(O, C, {
                            data: A,
                            headers: N.from(b.headers),
                            status: b.status,
                            statusText: b.statusText,
                            config: e,
                            request: h,
                        });
                    })
                );
            } catch (m) {
                throw (
                    (g && g(),
                    m && m.name === "TypeError" && /fetch/i.test(m.message)
                        ? Object.assign(
                              new y("Network Error", y.ERR_NETWORK, e, h),
                              { cause: m.cause || m }
                          )
                        : y.from(m, m && m.code, e, h))
                );
            }
        }),
    pt = { http: ns, xhr: Ls, fetch: Us };
f.forEach(pt, (e, t) => {
    if (e) {
        try {
            Object.defineProperty(e, "name", { value: t });
        } catch {}
        Object.defineProperty(e, "adapterName", { value: t });
    }
});
const gn = (e) => `- ${e}`,
    qs = (e) => f.isFunction(e) || e === null || e === !1,
    tr = {
        getAdapter: (e) => {
            e = f.isArray(e) ? e : [e];
            const { length: t } = e;
            let n, r;
            const i = {};
            for (let s = 0; s < t; s++) {
                n = e[s];
                let o;
                if (
                    ((r = n),
                    !qs(n) &&
                        ((r = pt[(o = String(n)).toLowerCase()]), r === void 0))
                )
                    throw new y(`Unknown adapter '${o}'`);
                if (r) break;
                i[o || "#" + s] = r;
            }
            if (!r) {
                const s = Object.entries(i).map(
                    ([a, c]) =>
                        `adapter ${a} ` +
                        (c === !1
                            ? "is not supported by the environment"
                            : "is not available in the build")
                );
                let o = t
                    ? s.length > 1
                        ? `since :
` +
                          s.map(gn).join(`
`)
                        : " " + gn(s[0])
                    : "as no adapter specified";
                throw new y(
                    "There is no suitable adapter to dispatch the request " + o,
                    "ERR_NOT_SUPPORT"
                );
            }
            return r;
        },
        adapters: pt,
    };
function rt(e) {
    if (
        (e.cancelToken && e.cancelToken.throwIfRequested(),
        e.signal && e.signal.aborted)
    )
        throw new oe(null, e);
}
function yn(e) {
    return (
        rt(e),
        (e.headers = N.from(e.headers)),
        (e.data = nt.call(e, e.transformRequest)),
        ["post", "put", "patch"].indexOf(e.method) !== -1 &&
            e.headers.setContentType("application/x-www-form-urlencoded", !1),
        tr
            .getAdapter(e.adapter || xe.adapter)(e)
            .then(
                function (r) {
                    return (
                        rt(e),
                        (r.data = nt.call(e, e.transformResponse, r)),
                        (r.headers = N.from(r.headers)),
                        r
                    );
                },
                function (r) {
                    return (
                        Xn(r) ||
                            (rt(e),
                            r &&
                                r.response &&
                                ((r.response.data = nt.call(
                                    e,
                                    e.transformResponse,
                                    r.response
                                )),
                                (r.response.headers = N.from(
                                    r.response.headers
                                )))),
                        Promise.reject(r)
                    );
                }
            )
    );
}
const nr = "1.7.7",
    It = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
    (e, t) => {
        It[e] = function (r) {
            return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
        };
    }
);
const bn = {};
It.transitional = function (t, n, r) {
    function i(s, o) {
        return (
            "[Axios v" +
            nr +
            "] Transitional option '" +
            s +
            "'" +
            o +
            (r ? ". " + r : "")
        );
    }
    return (s, o, a) => {
        if (t === !1)
            throw new y(
                i(o, " has been removed" + (n ? " in " + n : "")),
                y.ERR_DEPRECATED
            );
        return (
            n &&
                !bn[o] &&
                ((bn[o] = !0),
                console.warn(
                    i(
                        o,
                        " has been deprecated since v" +
                            n +
                            " and will be removed in the near future"
                    )
                )),
            t ? t(s, o, a) : !0
        );
    };
};
function Hs(e, t, n) {
    if (typeof e != "object")
        throw new y("options must be an object", y.ERR_BAD_OPTION_VALUE);
    const r = Object.keys(e);
    let i = r.length;
    for (; i-- > 0; ) {
        const s = r[i],
            o = t[s];
        if (o) {
            const a = e[s],
                c = a === void 0 || o(a, s, e);
            if (c !== !0)
                throw new y(
                    "option " + s + " must be " + c,
                    y.ERR_BAD_OPTION_VALUE
                );
            continue;
        }
        if (n !== !0) throw new y("Unknown option " + s, y.ERR_BAD_OPTION);
    }
}
const ht = { assertOptions: Hs, validators: It },
    $ = ht.validators;
class V {
    constructor(t) {
        (this.defaults = t),
            (this.interceptors = { request: new ln(), response: new ln() });
    }
    async request(t, n) {
        try {
            return await this._request(t, n);
        } catch (r) {
            if (r instanceof Error) {
                let i;
                Error.captureStackTrace
                    ? Error.captureStackTrace((i = {}))
                    : (i = new Error());
                const s = i.stack ? i.stack.replace(/^.+\n/, "") : "";
                try {
                    r.stack
                        ? s &&
                          !String(r.stack).endsWith(
                              s.replace(/^.+\n.+\n/, "")
                          ) &&
                          (r.stack +=
                              `
` + s)
                        : (r.stack = s);
                } catch {}
            }
            throw r;
        }
    }
    _request(t, n) {
        typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
            (n = Q(this.defaults, n));
        const { transitional: r, paramsSerializer: i, headers: s } = n;
        r !== void 0 &&
            ht.assertOptions(
                r,
                {
                    silentJSONParsing: $.transitional($.boolean),
                    forcedJSONParsing: $.transitional($.boolean),
                    clarifyTimeoutError: $.transitional($.boolean),
                },
                !1
            ),
            i != null &&
                (f.isFunction(i)
                    ? (n.paramsSerializer = { serialize: i })
                    : ht.assertOptions(
                          i,
                          { encode: $.function, serialize: $.function },
                          !0
                      )),
            (n.method = (
                n.method ||
                this.defaults.method ||
                "get"
            ).toLowerCase());
        let o = s && f.merge(s.common, s[n.method]);
        s &&
            f.forEach(
                ["delete", "get", "head", "post", "put", "patch", "common"],
                (h) => {
                    delete s[h];
                }
            ),
            (n.headers = N.concat(o, s));
        const a = [];
        let c = !0;
        this.interceptors.request.forEach(function (g) {
            (typeof g.runWhen == "function" && g.runWhen(n) === !1) ||
                ((c = c && g.synchronous), a.unshift(g.fulfilled, g.rejected));
        });
        const u = [];
        this.interceptors.response.forEach(function (g) {
            u.push(g.fulfilled, g.rejected);
        });
        let l,
            p = 0,
            _;
        if (!c) {
            const h = [yn.bind(this), void 0];
            for (
                h.unshift.apply(h, a),
                    h.push.apply(h, u),
                    _ = h.length,
                    l = Promise.resolve(n);
                p < _;

            )
                l = l.then(h[p++], h[p++]);
            return l;
        }
        _ = a.length;
        let w = n;
        for (p = 0; p < _; ) {
            const h = a[p++],
                g = a[p++];
            try {
                w = h(w);
            } catch (d) {
                g.call(this, d);
                break;
            }
        }
        try {
            l = yn.call(this, w);
        } catch (h) {
            return Promise.reject(h);
        }
        for (p = 0, _ = u.length; p < _; ) l = l.then(u[p++], u[p++]);
        return l;
    }
    getUri(t) {
        t = Q(this.defaults, t);
        const n = Yn(t.baseURL, t.url);
        return Jn(n, t.params, t.paramsSerializer);
    }
}
f.forEach(["delete", "get", "head", "options"], function (t) {
    V.prototype[t] = function (n, r) {
        return this.request(
            Q(r || {}, { method: t, url: n, data: (r || {}).data })
        );
    };
});
f.forEach(["post", "put", "patch"], function (t) {
    function n(r) {
        return function (s, o, a) {
            return this.request(
                Q(a || {}, {
                    method: t,
                    headers: r ? { "Content-Type": "multipart/form-data" } : {},
                    url: s,
                    data: o,
                })
            );
        };
    }
    (V.prototype[t] = n()), (V.prototype[t + "Form"] = n(!0));
});
class Bt {
    constructor(t) {
        if (typeof t != "function")
            throw new TypeError("executor must be a function.");
        let n;
        this.promise = new Promise(function (s) {
            n = s;
        });
        const r = this;
        this.promise.then((i) => {
            if (!r._listeners) return;
            let s = r._listeners.length;
            for (; s-- > 0; ) r._listeners[s](i);
            r._listeners = null;
        }),
            (this.promise.then = (i) => {
                let s;
                const o = new Promise((a) => {
                    r.subscribe(a), (s = a);
                }).then(i);
                return (
                    (o.cancel = function () {
                        r.unsubscribe(s);
                    }),
                    o
                );
            }),
            t(function (s, o, a) {
                r.reason || ((r.reason = new oe(s, o, a)), n(r.reason));
            });
    }
    throwIfRequested() {
        if (this.reason) throw this.reason;
    }
    subscribe(t) {
        if (this.reason) {
            t(this.reason);
            return;
        }
        this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
    }
    unsubscribe(t) {
        if (!this._listeners) return;
        const n = this._listeners.indexOf(t);
        n !== -1 && this._listeners.splice(n, 1);
    }
    toAbortSignal() {
        const t = new AbortController(),
            n = (r) => {
                t.abort(r);
            };
        return (
            this.subscribe(n),
            (t.signal.unsubscribe = () => this.unsubscribe(n)),
            t.signal
        );
    }
    static source() {
        let t;
        return {
            token: new Bt(function (i) {
                t = i;
            }),
            cancel: t,
        };
    }
}
function zs(e) {
    return function (n) {
        return e.apply(null, n);
    };
}
function Ks(e) {
    return f.isObject(e) && e.isAxiosError === !0;
}
const _t = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511,
};
Object.entries(_t).forEach(([e, t]) => {
    _t[t] = e;
});
function rr(e) {
    const t = new V(e),
        n = Mn(V.prototype.request, t);
    return (
        f.extend(n, V.prototype, t, { allOwnKeys: !0 }),
        f.extend(n, t, null, { allOwnKeys: !0 }),
        (n.create = function (i) {
            return rr(Q(e, i));
        }),
        n
    );
}
const v = rr(xe);
v.Axios = V;
v.CanceledError = oe;
v.CancelToken = Bt;
v.isCancel = Xn;
v.VERSION = nr;
v.toFormData = Ke;
v.AxiosError = y;
v.Cancel = v.CanceledError;
v.all = function (t) {
    return Promise.all(t);
};
v.spread = zs;
v.isAxiosError = Ks;
v.mergeConfig = Q;
v.AxiosHeaders = N;
v.formToJSON = (e) => Vn(f.isHTMLForm(e) ? new FormData(e) : e);
v.getAdapter = tr.getAdapter;
v.HttpStatusCode = _t;
v.default = v;
window.axios = v;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
var mt = !1,
    gt = !1,
    X = [],
    yt = -1;
function Js(e) {
    Ws(e);
}
function Ws(e) {
    X.includes(e) || X.push(e), Xs();
}
function Vs(e) {
    let t = X.indexOf(e);
    t !== -1 && t > yt && X.splice(t, 1);
}
function Xs() {
    !gt && !mt && ((mt = !0), queueMicrotask(Gs));
}
function Gs() {
    (mt = !1), (gt = !0);
    for (let e = 0; e < X.length; e++) X[e](), (yt = e);
    (X.length = 0), (yt = -1), (gt = !1);
}
var ae,
    te,
    ce,
    ir,
    bt = !0;
function Ys(e) {
    (bt = !1), e(), (bt = !0);
}
function Zs(e) {
    (ae = e.reactive),
        (ce = e.release),
        (te = (t) =>
            e.effect(t, {
                scheduler: (n) => {
                    bt ? Js(n) : n();
                },
            })),
        (ir = e.raw);
}
function wn(e) {
    te = e;
}
function Qs(e) {
    let t = () => {};
    return [
        (r) => {
            let i = te(r);
            return (
                e._x_effects ||
                    ((e._x_effects = new Set()),
                    (e._x_runEffects = () => {
                        e._x_effects.forEach((s) => s());
                    })),
                e._x_effects.add(i),
                (t = () => {
                    i !== void 0 && (e._x_effects.delete(i), ce(i));
                }),
                i
            );
        },
        () => {
            t();
        },
    ];
}
function sr(e, t) {
    let n = !0,
        r,
        i = te(() => {
            let s = e();
            JSON.stringify(s),
                n
                    ? (r = s)
                    : queueMicrotask(() => {
                          t(s, r), (r = s);
                      }),
                (n = !1);
        });
    return () => ce(i);
}
var or = [],
    ar = [],
    cr = [];
function eo(e) {
    cr.push(e);
}
function Dt(e, t) {
    typeof t == "function"
        ? (e._x_cleanups || (e._x_cleanups = []), e._x_cleanups.push(t))
        : ((t = e), ar.push(t));
}
function ur(e) {
    or.push(e);
}
function lr(e, t, n) {
    e._x_attributeCleanups || (e._x_attributeCleanups = {}),
        e._x_attributeCleanups[t] || (e._x_attributeCleanups[t] = []),
        e._x_attributeCleanups[t].push(n);
}
function fr(e, t) {
    e._x_attributeCleanups &&
        Object.entries(e._x_attributeCleanups).forEach(([n, r]) => {
            (t === void 0 || t.includes(n)) &&
                (r.forEach((i) => i()), delete e._x_attributeCleanups[n]);
        });
}
function to(e) {
    var t, n;
    for (
        (t = e._x_effects) == null || t.forEach(Vs);
        (n = e._x_cleanups) != null && n.length;

    )
        e._x_cleanups.pop()();
}
var kt = new MutationObserver(Ht),
    $t = !1;
function Ut() {
    kt.observe(document, {
        subtree: !0,
        childList: !0,
        attributes: !0,
        attributeOldValue: !0,
    }),
        ($t = !0);
}
function dr() {
    no(), kt.disconnect(), ($t = !1);
}
var de = [];
function no() {
    let e = kt.takeRecords();
    de.push(() => e.length > 0 && Ht(e));
    let t = de.length;
    queueMicrotask(() => {
        if (de.length === t) for (; de.length > 0; ) de.shift()();
    });
}
function S(e) {
    if (!$t) return e();
    dr();
    let t = e();
    return Ut(), t;
}
var qt = !1,
    De = [];
function ro() {
    qt = !0;
}
function io() {
    (qt = !1), Ht(De), (De = []);
}
function Ht(e) {
    if (qt) {
        De = De.concat(e);
        return;
    }
    let t = new Set(),
        n = new Set(),
        r = new Map(),
        i = new Map();
    for (let s = 0; s < e.length; s++)
        if (
            !e[s].target._x_ignoreMutationObserver &&
            (e[s].type === "childList" &&
                (e[s].addedNodes.forEach((o) => o.nodeType === 1 && t.add(o)),
                e[s].removedNodes.forEach((o) => o.nodeType === 1 && n.add(o))),
            e[s].type === "attributes")
        ) {
            let o = e[s].target,
                a = e[s].attributeName,
                c = e[s].oldValue,
                u = () => {
                    r.has(o) || r.set(o, []),
                        r.get(o).push({ name: a, value: o.getAttribute(a) });
                },
                l = () => {
                    i.has(o) || i.set(o, []), i.get(o).push(a);
                };
            o.hasAttribute(a) && c === null
                ? u()
                : o.hasAttribute(a)
                ? (l(), u())
                : l();
        }
    i.forEach((s, o) => {
        fr(o, s);
    }),
        r.forEach((s, o) => {
            or.forEach((a) => a(o, s));
        });
    for (let s of n) t.has(s) || ar.forEach((o) => o(s));
    t.forEach((s) => {
        (s._x_ignoreSelf = !0), (s._x_ignore = !0);
    });
    for (let s of t)
        n.has(s) ||
            (s.isConnected &&
                (delete s._x_ignoreSelf,
                delete s._x_ignore,
                cr.forEach((o) => o(s)),
                (s._x_ignore = !0),
                (s._x_ignoreSelf = !0)));
    t.forEach((s) => {
        delete s._x_ignoreSelf, delete s._x_ignore;
    }),
        (t = null),
        (n = null),
        (r = null),
        (i = null);
}
function pr(e) {
    return Se(re(e));
}
function Ee(e, t, n) {
    return (
        (e._x_dataStack = [t, ...re(n || e)]),
        () => {
            e._x_dataStack = e._x_dataStack.filter((r) => r !== t);
        }
    );
}
function re(e) {
    return e._x_dataStack
        ? e._x_dataStack
        : typeof ShadowRoot == "function" && e instanceof ShadowRoot
        ? re(e.host)
        : e.parentNode
        ? re(e.parentNode)
        : [];
}
function Se(e) {
    return new Proxy({ objects: e }, so);
}
var so = {
    ownKeys({ objects: e }) {
        return Array.from(new Set(e.flatMap((t) => Object.keys(t))));
    },
    has({ objects: e }, t) {
        return t == Symbol.unscopables
            ? !1
            : e.some(
                  (n) =>
                      Object.prototype.hasOwnProperty.call(n, t) ||
                      Reflect.has(n, t)
              );
    },
    get({ objects: e }, t, n) {
        return t == "toJSON"
            ? oo
            : Reflect.get(e.find((r) => Reflect.has(r, t)) || {}, t, n);
    },
    set({ objects: e }, t, n, r) {
        const i =
                e.find((o) => Object.prototype.hasOwnProperty.call(o, t)) ||
                e[e.length - 1],
            s = Object.getOwnPropertyDescriptor(i, t);
        return s != null && s.set && s != null && s.get
            ? s.set.call(r, n) || !0
            : Reflect.set(i, t, n);
    },
};
function oo() {
    return Reflect.ownKeys(this).reduce(
        (t, n) => ((t[n] = Reflect.get(this, n)), t),
        {}
    );
}
function hr(e) {
    let t = (r) => typeof r == "object" && !Array.isArray(r) && r !== null,
        n = (r, i = "") => {
            Object.entries(Object.getOwnPropertyDescriptors(r)).forEach(
                ([s, { value: o, enumerable: a }]) => {
                    if (
                        a === !1 ||
                        o === void 0 ||
                        (typeof o == "object" && o !== null && o.__v_skip)
                    )
                        return;
                    let c = i === "" ? s : `${i}.${s}`;
                    typeof o == "object" && o !== null && o._x_interceptor
                        ? (r[s] = o.initialize(e, c, s))
                        : t(o) && o !== r && !(o instanceof Element) && n(o, c);
                }
            );
        };
    return n(e);
}
function _r(e, t = () => {}) {
    let n = {
        initialValue: void 0,
        _x_interceptor: !0,
        initialize(r, i, s) {
            return e(
                this.initialValue,
                () => ao(r, i),
                (o) => wt(r, i, o),
                i,
                s
            );
        },
    };
    return (
        t(n),
        (r) => {
            if (typeof r == "object" && r !== null && r._x_interceptor) {
                let i = n.initialize.bind(n);
                n.initialize = (s, o, a) => {
                    let c = r.initialize(s, o, a);
                    return (n.initialValue = c), i(s, o, a);
                };
            } else n.initialValue = r;
            return n;
        }
    );
}
function ao(e, t) {
    return t.split(".").reduce((n, r) => n[r], e);
}
function wt(e, t, n) {
    if ((typeof t == "string" && (t = t.split(".")), t.length === 1))
        e[t[0]] = n;
    else {
        if (t.length === 0) throw error;
        return e[t[0]] || (e[t[0]] = {}), wt(e[t[0]], t.slice(1), n);
    }
}
var mr = {};
function I(e, t) {
    mr[e] = t;
}
function xt(e, t) {
    let n = co(t);
    return (
        Object.entries(mr).forEach(([r, i]) => {
            Object.defineProperty(e, `$${r}`, {
                get() {
                    return i(t, n);
                },
                enumerable: !1,
            });
        }),
        e
    );
}
function co(e) {
    let [t, n] = Er(e),
        r = { interceptor: _r, ...t };
    return Dt(e, n), r;
}
function uo(e, t, n, ...r) {
    try {
        return n(...r);
    } catch (i) {
        be(i, e, t);
    }
}
function be(e, t, n = void 0) {
    (e = Object.assign(e ?? { message: "No error message given." }, {
        el: t,
        expression: n,
    })),
        console.warn(
            `Alpine Expression Error: ${e.message}

${
    n
        ? 'Expression: "' +
          n +
          `"

`
        : ""
}`,
            t
        ),
        setTimeout(() => {
            throw e;
        }, 0);
}
var Me = !0;
function gr(e) {
    let t = Me;
    Me = !1;
    let n = e();
    return (Me = t), n;
}
function G(e, t, n = {}) {
    let r;
    return T(e, t)((i) => (r = i), n), r;
}
function T(...e) {
    return yr(...e);
}
var yr = br;
function lo(e) {
    yr = e;
}
function br(e, t) {
    let n = {};
    xt(n, e);
    let r = [n, ...re(e)],
        i = typeof t == "function" ? fo(r, t) : ho(r, t, e);
    return uo.bind(null, e, t, i);
}
function fo(e, t) {
    return (n = () => {}, { scope: r = {}, params: i = [] } = {}) => {
        let s = t.apply(Se([r, ...e]), i);
        ke(n, s);
    };
}
var it = {};
function po(e, t) {
    if (it[e]) return it[e];
    let n = Object.getPrototypeOf(async function () {}).constructor,
        r =
            /^[\n\s]*if.*\(.*\)/.test(e.trim()) ||
            /^(let|const)\s/.test(e.trim())
                ? `(async()=>{ ${e} })()`
                : e,
        s = (() => {
            try {
                let o = new n(
                    ["__self", "scope"],
                    `with (scope) { __self.result = ${r} }; __self.finished = true; return __self.result;`
                );
                return (
                    Object.defineProperty(o, "name", {
                        value: `[Alpine] ${e}`,
                    }),
                    o
                );
            } catch (o) {
                return be(o, t, e), Promise.resolve();
            }
        })();
    return (it[e] = s), s;
}
function ho(e, t, n) {
    let r = po(t, n);
    return (i = () => {}, { scope: s = {}, params: o = [] } = {}) => {
        (r.result = void 0), (r.finished = !1);
        let a = Se([s, ...e]);
        if (typeof r == "function") {
            let c = r(r, a).catch((u) => be(u, n, t));
            r.finished
                ? (ke(i, r.result, a, o, n), (r.result = void 0))
                : c
                      .then((u) => {
                          ke(i, u, a, o, n);
                      })
                      .catch((u) => be(u, n, t))
                      .finally(() => (r.result = void 0));
        }
    };
}
function ke(e, t, n, r, i) {
    if (Me && typeof t == "function") {
        let s = t.apply(n, r);
        s instanceof Promise
            ? s.then((o) => ke(e, o, n, r)).catch((o) => be(o, i, t))
            : e(s);
    } else
        typeof t == "object" && t instanceof Promise
            ? t.then((s) => e(s))
            : e(t);
}
var zt = "x-";
function ue(e = "") {
    return zt + e;
}
function _o(e) {
    zt = e;
}
var $e = {};
function R(e, t) {
    return (
        ($e[e] = t),
        {
            before(n) {
                if (!$e[n]) {
                    console.warn(
                        String.raw`Cannot find directive \`${n}\`. \`${e}\` will use the default order of execution`
                    );
                    return;
                }
                const r = W.indexOf(n);
                W.splice(r >= 0 ? r : W.indexOf("DEFAULT"), 0, e);
            },
        }
    );
}
function mo(e) {
    return Object.keys($e).includes(e);
}
function Kt(e, t, n) {
    if (((t = Array.from(t)), e._x_virtualDirectives)) {
        let s = Object.entries(e._x_virtualDirectives).map(([a, c]) => ({
                name: a,
                value: c,
            })),
            o = wr(s);
        (s = s.map((a) =>
            o.find((c) => c.name === a.name)
                ? { name: `x-bind:${a.name}`, value: `"${a.value}"` }
                : a
        )),
            (t = t.concat(s));
    }
    let r = {};
    return t
        .map(Or((s, o) => (r[s] = o)))
        .filter(Rr)
        .map(bo(r, n))
        .sort(wo)
        .map((s) => yo(e, s));
}
function wr(e) {
    return Array.from(e)
        .map(Or())
        .filter((t) => !Rr(t));
}
var Et = !1,
    _e = new Map(),
    xr = Symbol();
function go(e) {
    Et = !0;
    let t = Symbol();
    (xr = t), _e.set(t, []);
    let n = () => {
            for (; _e.get(t).length; ) _e.get(t).shift()();
            _e.delete(t);
        },
        r = () => {
            (Et = !1), n();
        };
    e(n), r();
}
function Er(e) {
    let t = [],
        n = (a) => t.push(a),
        [r, i] = Qs(e);
    return (
        t.push(i),
        [
            {
                Alpine: Oe,
                effect: r,
                cleanup: n,
                evaluateLater: T.bind(T, e),
                evaluate: G.bind(G, e),
            },
            () => t.forEach((a) => a()),
        ]
    );
}
function yo(e, t) {
    let n = () => {},
        r = $e[t.type] || n,
        [i, s] = Er(e);
    lr(e, t.original, s);
    let o = () => {
        e._x_ignore ||
            e._x_ignoreSelf ||
            (r.inline && r.inline(e, t, i),
            (r = r.bind(r, e, t, i)),
            Et ? _e.get(xr).push(r) : r());
    };
    return (o.runCleanups = s), o;
}
var Sr =
        (e, t) =>
        ({ name: n, value: r }) => (
            n.startsWith(e) && (n = n.replace(e, t)), { name: n, value: r }
        ),
    Ar = (e) => e;
function Or(e = () => {}) {
    return ({ name: t, value: n }) => {
        let { name: r, value: i } = vr.reduce((s, o) => o(s), {
            name: t,
            value: n,
        });
        return r !== t && e(r, t), { name: r, value: i };
    };
}
var vr = [];
function Jt(e) {
    vr.push(e);
}
function Rr({ name: e }) {
    return Tr().test(e);
}
var Tr = () => new RegExp(`^${zt}([^:^.]+)\\b`);
function bo(e, t) {
    return ({ name: n, value: r }) => {
        let i = n.match(Tr()),
            s = n.match(/:([a-zA-Z0-9\-_:]+)/),
            o = n.match(/\.[^.\]]+(?=[^\]]*$)/g) || [],
            a = t || e[n] || n;
        return {
            type: i ? i[1] : null,
            value: s ? s[1] : null,
            modifiers: o.map((c) => c.replace(".", "")),
            expression: r,
            original: a,
        };
    };
}
var St = "DEFAULT",
    W = [
        "ignore",
        "ref",
        "data",
        "id",
        "anchor",
        "bind",
        "init",
        "for",
        "model",
        "modelable",
        "transition",
        "show",
        "if",
        St,
        "teleport",
    ];
function wo(e, t) {
    let n = W.indexOf(e.type) === -1 ? St : e.type,
        r = W.indexOf(t.type) === -1 ? St : t.type;
    return W.indexOf(n) - W.indexOf(r);
}
function me(e, t, n = {}) {
    e.dispatchEvent(
        new CustomEvent(t, {
            detail: n,
            bubbles: !0,
            composed: !0,
            cancelable: !0,
        })
    );
}
function ee(e, t) {
    if (typeof ShadowRoot == "function" && e instanceof ShadowRoot) {
        Array.from(e.children).forEach((i) => ee(i, t));
        return;
    }
    let n = !1;
    if ((t(e, () => (n = !0)), n)) return;
    let r = e.firstElementChild;
    for (; r; ) ee(r, t), (r = r.nextElementSibling);
}
function F(e, ...t) {
    console.warn(`Alpine Warning: ${e}`, ...t);
}
var xn = !1;
function xo() {
    xn &&
        F(
            "Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems."
        ),
        (xn = !0),
        document.body ||
            F(
                "Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"
            ),
        me(document, "alpine:init"),
        me(document, "alpine:initializing"),
        Ut(),
        eo((t) => k(t, ee)),
        Dt((t) => le(t)),
        ur((t, n) => {
            Kt(t, n).forEach((r) => r());
        });
    let e = (t) => !We(t.parentElement, !0);
    Array.from(document.querySelectorAll(Nr().join(",")))
        .filter(e)
        .forEach((t) => {
            k(t);
        }),
        me(document, "alpine:initialized"),
        setTimeout(() => {
            Ao();
        });
}
var Wt = [],
    Cr = [];
function Pr() {
    return Wt.map((e) => e());
}
function Nr() {
    return Wt.concat(Cr).map((e) => e());
}
function Lr(e) {
    Wt.push(e);
}
function Fr(e) {
    Cr.push(e);
}
function We(e, t = !1) {
    return Ae(e, (n) => {
        if ((t ? Nr() : Pr()).some((i) => n.matches(i))) return !0;
    });
}
function Ae(e, t) {
    if (e) {
        if (t(e)) return e;
        if ((e._x_teleportBack && (e = e._x_teleportBack), !!e.parentElement))
            return Ae(e.parentElement, t);
    }
}
function Eo(e) {
    return Pr().some((t) => e.matches(t));
}
var Mr = [];
function So(e) {
    Mr.push(e);
}
function k(e, t = ee, n = () => {}) {
    go(() => {
        t(e, (r, i) => {
            n(r, i),
                Mr.forEach((s) => s(r, i)),
                Kt(r, r.attributes).forEach((s) => s()),
                r._x_ignore && i();
        });
    });
}
function le(e, t = ee) {
    t(e, (n) => {
        to(n), fr(n);
    });
}
function Ao() {
    [
        ["ui", "dialog", ["[x-dialog], [x-popover]"]],
        ["anchor", "anchor", ["[x-anchor]"]],
        ["sort", "sort", ["[x-sort]"]],
    ].forEach(([t, n, r]) => {
        mo(n) ||
            r.some((i) => {
                if (document.querySelector(i))
                    return F(`found "${i}", but missing ${t} plugin`), !0;
            });
    });
}
var At = [],
    Vt = !1;
function Xt(e = () => {}) {
    return (
        queueMicrotask(() => {
            Vt ||
                setTimeout(() => {
                    Ot();
                });
        }),
        new Promise((t) => {
            At.push(() => {
                e(), t();
            });
        })
    );
}
function Ot() {
    for (Vt = !1; At.length; ) At.shift()();
}
function Oo() {
    Vt = !0;
}
function Gt(e, t) {
    return Array.isArray(t)
        ? En(e, t.join(" "))
        : typeof t == "object" && t !== null
        ? vo(e, t)
        : typeof t == "function"
        ? Gt(e, t())
        : En(e, t);
}
function En(e, t) {
    let n = (i) =>
            i
                .split(" ")
                .filter((s) => !e.classList.contains(s))
                .filter(Boolean),
        r = (i) => (
            e.classList.add(...i),
            () => {
                e.classList.remove(...i);
            }
        );
    return (t = t === !0 ? (t = "") : t || ""), r(n(t));
}
function vo(e, t) {
    let n = (a) => a.split(" ").filter(Boolean),
        r = Object.entries(t)
            .flatMap(([a, c]) => (c ? n(a) : !1))
            .filter(Boolean),
        i = Object.entries(t)
            .flatMap(([a, c]) => (c ? !1 : n(a)))
            .filter(Boolean),
        s = [],
        o = [];
    return (
        i.forEach((a) => {
            e.classList.contains(a) && (e.classList.remove(a), o.push(a));
        }),
        r.forEach((a) => {
            e.classList.contains(a) || (e.classList.add(a), s.push(a));
        }),
        () => {
            o.forEach((a) => e.classList.add(a)),
                s.forEach((a) => e.classList.remove(a));
        }
    );
}
function Ve(e, t) {
    return typeof t == "object" && t !== null ? Ro(e, t) : To(e, t);
}
function Ro(e, t) {
    let n = {};
    return (
        Object.entries(t).forEach(([r, i]) => {
            (n[r] = e.style[r]),
                r.startsWith("--") || (r = Co(r)),
                e.style.setProperty(r, i);
        }),
        setTimeout(() => {
            e.style.length === 0 && e.removeAttribute("style");
        }),
        () => {
            Ve(e, n);
        }
    );
}
function To(e, t) {
    let n = e.getAttribute("style", t);
    return (
        e.setAttribute("style", t),
        () => {
            e.setAttribute("style", n || "");
        }
    );
}
function Co(e) {
    return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function vt(e, t = () => {}) {
    let n = !1;
    return function () {
        n ? t.apply(this, arguments) : ((n = !0), e.apply(this, arguments));
    };
}
R(
    "transition",
    (e, { value: t, modifiers: n, expression: r }, { evaluate: i }) => {
        typeof r == "function" && (r = i(r)),
            r !== !1 &&
                (!r || typeof r == "boolean" ? No(e, n, t) : Po(e, r, t));
    }
);
function Po(e, t, n) {
    jr(e, Gt, ""),
        {
            enter: (i) => {
                e._x_transition.enter.during = i;
            },
            "enter-start": (i) => {
                e._x_transition.enter.start = i;
            },
            "enter-end": (i) => {
                e._x_transition.enter.end = i;
            },
            leave: (i) => {
                e._x_transition.leave.during = i;
            },
            "leave-start": (i) => {
                e._x_transition.leave.start = i;
            },
            "leave-end": (i) => {
                e._x_transition.leave.end = i;
            },
        }[n](t);
}
function No(e, t, n) {
    jr(e, Ve);
    let r = !t.includes("in") && !t.includes("out") && !n,
        i = r || t.includes("in") || ["enter"].includes(n),
        s = r || t.includes("out") || ["leave"].includes(n);
    t.includes("in") && !r && (t = t.filter((m, b) => b < t.indexOf("out"))),
        t.includes("out") &&
            !r &&
            (t = t.filter((m, b) => b > t.indexOf("out")));
    let o = !t.includes("opacity") && !t.includes("scale"),
        a = o || t.includes("opacity"),
        c = o || t.includes("scale"),
        u = a ? 0 : 1,
        l = c ? pe(t, "scale", 95) / 100 : 1,
        p = pe(t, "delay", 0) / 1e3,
        _ = pe(t, "origin", "center"),
        w = "opacity, transform",
        h = pe(t, "duration", 150) / 1e3,
        g = pe(t, "duration", 75) / 1e3,
        d = "cubic-bezier(0.4, 0.0, 0.2, 1)";
    i &&
        ((e._x_transition.enter.during = {
            transformOrigin: _,
            transitionDelay: `${p}s`,
            transitionProperty: w,
            transitionDuration: `${h}s`,
            transitionTimingFunction: d,
        }),
        (e._x_transition.enter.start = {
            opacity: u,
            transform: `scale(${l})`,
        }),
        (e._x_transition.enter.end = { opacity: 1, transform: "scale(1)" })),
        s &&
            ((e._x_transition.leave.during = {
                transformOrigin: _,
                transitionDelay: `${p}s`,
                transitionProperty: w,
                transitionDuration: `${g}s`,
                transitionTimingFunction: d,
            }),
            (e._x_transition.leave.start = {
                opacity: 1,
                transform: "scale(1)",
            }),
            (e._x_transition.leave.end = {
                opacity: u,
                transform: `scale(${l})`,
            }));
}
function jr(e, t, n = {}) {
    e._x_transition ||
        (e._x_transition = {
            enter: { during: n, start: n, end: n },
            leave: { during: n, start: n, end: n },
            in(r = () => {}, i = () => {}) {
                Rt(
                    e,
                    t,
                    {
                        during: this.enter.during,
                        start: this.enter.start,
                        end: this.enter.end,
                    },
                    r,
                    i
                );
            },
            out(r = () => {}, i = () => {}) {
                Rt(
                    e,
                    t,
                    {
                        during: this.leave.during,
                        start: this.leave.start,
                        end: this.leave.end,
                    },
                    r,
                    i
                );
            },
        });
}
window.Element.prototype._x_toggleAndCascadeWithTransitions = function (
    e,
    t,
    n,
    r
) {
    const i =
        document.visibilityState === "visible"
            ? requestAnimationFrame
            : setTimeout;
    let s = () => i(n);
    if (t) {
        e._x_transition && (e._x_transition.enter || e._x_transition.leave)
            ? e._x_transition.enter &&
              (Object.entries(e._x_transition.enter.during).length ||
                  Object.entries(e._x_transition.enter.start).length ||
                  Object.entries(e._x_transition.enter.end).length)
                ? e._x_transition.in(n)
                : s()
            : e._x_transition
            ? e._x_transition.in(n)
            : s();
        return;
    }
    (e._x_hidePromise = e._x_transition
        ? new Promise((o, a) => {
              e._x_transition.out(
                  () => {},
                  () => o(r)
              ),
                  e._x_transitioning &&
                      e._x_transitioning.beforeCancel(() =>
                          a({ isFromCancelledTransition: !0 })
                      );
          })
        : Promise.resolve(r)),
        queueMicrotask(() => {
            let o = Ir(e);
            o
                ? (o._x_hideChildren || (o._x_hideChildren = []),
                  o._x_hideChildren.push(e))
                : i(() => {
                      let a = (c) => {
                          let u = Promise.all([
                              c._x_hidePromise,
                              ...(c._x_hideChildren || []).map(a),
                          ]).then(([l]) => (l == null ? void 0 : l()));
                          return (
                              delete c._x_hidePromise,
                              delete c._x_hideChildren,
                              u
                          );
                      };
                      a(e).catch((c) => {
                          if (!c.isFromCancelledTransition) throw c;
                      });
                  });
        });
};
function Ir(e) {
    let t = e.parentNode;
    if (t) return t._x_hidePromise ? t : Ir(t);
}
function Rt(
    e,
    t,
    { during: n, start: r, end: i } = {},
    s = () => {},
    o = () => {}
) {
    if (
        (e._x_transitioning && e._x_transitioning.cancel(),
        Object.keys(n).length === 0 &&
            Object.keys(r).length === 0 &&
            Object.keys(i).length === 0)
    ) {
        s(), o();
        return;
    }
    let a, c, u;
    Lo(e, {
        start() {
            a = t(e, r);
        },
        during() {
            c = t(e, n);
        },
        before: s,
        end() {
            a(), (u = t(e, i));
        },
        after: o,
        cleanup() {
            c(), u();
        },
    });
}
function Lo(e, t) {
    let n,
        r,
        i,
        s = vt(() => {
            S(() => {
                (n = !0),
                    r || t.before(),
                    i || (t.end(), Ot()),
                    t.after(),
                    e.isConnected && t.cleanup(),
                    delete e._x_transitioning;
            });
        });
    (e._x_transitioning = {
        beforeCancels: [],
        beforeCancel(o) {
            this.beforeCancels.push(o);
        },
        cancel: vt(function () {
            for (; this.beforeCancels.length; ) this.beforeCancels.shift()();
            s();
        }),
        finish: s,
    }),
        S(() => {
            t.start(), t.during();
        }),
        Oo(),
        requestAnimationFrame(() => {
            if (n) return;
            let o =
                    Number(
                        getComputedStyle(e)
                            .transitionDuration.replace(/,.*/, "")
                            .replace("s", "")
                    ) * 1e3,
                a =
                    Number(
                        getComputedStyle(e)
                            .transitionDelay.replace(/,.*/, "")
                            .replace("s", "")
                    ) * 1e3;
            o === 0 &&
                (o =
                    Number(
                        getComputedStyle(e).animationDuration.replace("s", "")
                    ) * 1e3),
                S(() => {
                    t.before();
                }),
                (r = !0),
                requestAnimationFrame(() => {
                    n ||
                        (S(() => {
                            t.end();
                        }),
                        Ot(),
                        setTimeout(e._x_transitioning.finish, o + a),
                        (i = !0));
                });
        });
}
function pe(e, t, n) {
    if (e.indexOf(t) === -1) return n;
    const r = e[e.indexOf(t) + 1];
    if (!r || (t === "scale" && isNaN(r))) return n;
    if (t === "duration" || t === "delay") {
        let i = r.match(/([0-9]+)ms/);
        if (i) return i[1];
    }
    return t === "origin" &&
        ["top", "right", "left", "center", "bottom"].includes(
            e[e.indexOf(t) + 2]
        )
        ? [r, e[e.indexOf(t) + 2]].join(" ")
        : r;
}
var q = !1;
function z(e, t = () => {}) {
    return (...n) => (q ? t(...n) : e(...n));
}
function Fo(e) {
    return (...t) => q && e(...t);
}
var Br = [];
function Xe(e) {
    Br.push(e);
}
function Mo(e, t) {
    Br.forEach((n) => n(e, t)),
        (q = !0),
        Dr(() => {
            k(t, (n, r) => {
                r(n, () => {});
            });
        }),
        (q = !1);
}
var Tt = !1;
function jo(e, t) {
    t._x_dataStack || (t._x_dataStack = e._x_dataStack),
        (q = !0),
        (Tt = !0),
        Dr(() => {
            Io(t);
        }),
        (q = !1),
        (Tt = !1);
}
function Io(e) {
    let t = !1;
    k(e, (r, i) => {
        ee(r, (s, o) => {
            if (t && Eo(s)) return o();
            (t = !0), i(s, o);
        });
    });
}
function Dr(e) {
    let t = te;
    wn((n, r) => {
        let i = t(n);
        return ce(i), () => {};
    }),
        e(),
        wn(t);
}
function kr(e, t, n, r = []) {
    switch (
        (e._x_bindings || (e._x_bindings = ae({})),
        (e._x_bindings[t] = n),
        (t = r.includes("camel") ? zo(t) : t),
        t)
    ) {
        case "value":
            Bo(e, n);
            break;
        case "style":
            ko(e, n);
            break;
        case "class":
            Do(e, n);
            break;
        case "selected":
        case "checked":
            $o(e, t, n);
            break;
        default:
            $r(e, t, n);
            break;
    }
}
function Bo(e, t) {
    if (Hr(e))
        e.attributes.value === void 0 && (e.value = t),
            window.fromModel &&
                (typeof t == "boolean"
                    ? (e.checked = je(e.value) === t)
                    : (e.checked = Sn(e.value, t)));
    else if (Yt(e))
        Number.isInteger(t)
            ? (e.value = t)
            : !Array.isArray(t) &&
              typeof t != "boolean" &&
              ![null, void 0].includes(t)
            ? (e.value = String(t))
            : Array.isArray(t)
            ? (e.checked = t.some((n) => Sn(n, e.value)))
            : (e.checked = !!t);
    else if (e.tagName === "SELECT") Ho(e, t);
    else {
        if (e.value === t) return;
        e.value = t === void 0 ? "" : t;
    }
}
function Do(e, t) {
    e._x_undoAddedClasses && e._x_undoAddedClasses(),
        (e._x_undoAddedClasses = Gt(e, t));
}
function ko(e, t) {
    e._x_undoAddedStyles && e._x_undoAddedStyles(),
        (e._x_undoAddedStyles = Ve(e, t));
}
function $o(e, t, n) {
    $r(e, t, n), qo(e, t, n);
}
function $r(e, t, n) {
    [null, void 0, !1].includes(n) && Jo(t)
        ? e.removeAttribute(t)
        : (Ur(t) && (n = t), Uo(e, t, n));
}
function Uo(e, t, n) {
    e.getAttribute(t) != n && e.setAttribute(t, n);
}
function qo(e, t, n) {
    e[t] !== n && (e[t] = n);
}
function Ho(e, t) {
    const n = [].concat(t).map((r) => r + "");
    Array.from(e.options).forEach((r) => {
        r.selected = n.includes(r.value);
    });
}
function zo(e) {
    return e.toLowerCase().replace(/-(\w)/g, (t, n) => n.toUpperCase());
}
function Sn(e, t) {
    return e == t;
}
function je(e) {
    return [1, "1", "true", "on", "yes", !0].includes(e)
        ? !0
        : [0, "0", "false", "off", "no", !1].includes(e)
        ? !1
        : e
        ? !!e
        : null;
}
var Ko = new Set([
    "allowfullscreen",
    "async",
    "autofocus",
    "autoplay",
    "checked",
    "controls",
    "default",
    "defer",
    "disabled",
    "formnovalidate",
    "inert",
    "ismap",
    "itemscope",
    "loop",
    "multiple",
    "muted",
    "nomodule",
    "novalidate",
    "open",
    "playsinline",
    "readonly",
    "required",
    "reversed",
    "selected",
    "shadowrootclonable",
    "shadowrootdelegatesfocus",
    "shadowrootserializable",
]);
function Ur(e) {
    return Ko.has(e);
}
function Jo(e) {
    return ![
        "aria-pressed",
        "aria-checked",
        "aria-expanded",
        "aria-selected",
    ].includes(e);
}
function Wo(e, t, n) {
    return e._x_bindings && e._x_bindings[t] !== void 0
        ? e._x_bindings[t]
        : qr(e, t, n);
}
function Vo(e, t, n, r = !0) {
    if (e._x_bindings && e._x_bindings[t] !== void 0) return e._x_bindings[t];
    if (e._x_inlineBindings && e._x_inlineBindings[t] !== void 0) {
        let i = e._x_inlineBindings[t];
        return (i.extract = r), gr(() => G(e, i.expression));
    }
    return qr(e, t, n);
}
function qr(e, t, n) {
    let r = e.getAttribute(t);
    return r === null
        ? typeof n == "function"
            ? n()
            : n
        : r === ""
        ? !0
        : Ur(t)
        ? !![t, "true"].includes(r)
        : r;
}
function Yt(e) {
    return (
        e.type === "checkbox" ||
        e.localName === "ui-checkbox" ||
        e.localName === "ui-switch"
    );
}
function Hr(e) {
    return e.type === "radio" || e.localName === "ui-radio";
}
function zr(e, t) {
    var n;
    return function () {
        var r = this,
            i = arguments,
            s = function () {
                (n = null), e.apply(r, i);
            };
        clearTimeout(n), (n = setTimeout(s, t));
    };
}
function Kr(e, t) {
    let n;
    return function () {
        let r = this,
            i = arguments;
        n || (e.apply(r, i), (n = !0), setTimeout(() => (n = !1), t));
    };
}
function Jr({ get: e, set: t }, { get: n, set: r }) {
    let i = !0,
        s,
        o = te(() => {
            let a = e(),
                c = n();
            if (i) r(st(a)), (i = !1);
            else {
                let u = JSON.stringify(a),
                    l = JSON.stringify(c);
                u !== s ? r(st(a)) : u !== l && t(st(c));
            }
            (s = JSON.stringify(e())), JSON.stringify(n());
        });
    return () => {
        ce(o);
    };
}
function st(e) {
    return typeof e == "object" ? JSON.parse(JSON.stringify(e)) : e;
}
function Xo(e) {
    (Array.isArray(e) ? e : [e]).forEach((n) => n(Oe));
}
var K = {},
    An = !1;
function Go(e, t) {
    if ((An || ((K = ae(K)), (An = !0)), t === void 0)) return K[e];
    (K[e] = t),
        hr(K[e]),
        typeof t == "object" &&
            t !== null &&
            t.hasOwnProperty("init") &&
            typeof t.init == "function" &&
            K[e].init();
}
function Yo() {
    return K;
}
var Wr = {};
function Zo(e, t) {
    let n = typeof t != "function" ? () => t : t;
    return e instanceof Element ? Vr(e, n()) : ((Wr[e] = n), () => {});
}
function Qo(e) {
    return (
        Object.entries(Wr).forEach(([t, n]) => {
            Object.defineProperty(e, t, {
                get() {
                    return (...r) => n(...r);
                },
            });
        }),
        e
    );
}
function Vr(e, t, n) {
    let r = [];
    for (; r.length; ) r.pop()();
    let i = Object.entries(t).map(([o, a]) => ({ name: o, value: a })),
        s = wr(i);
    return (
        (i = i.map((o) =>
            s.find((a) => a.name === o.name)
                ? { name: `x-bind:${o.name}`, value: `"${o.value}"` }
                : o
        )),
        Kt(e, i, n).map((o) => {
            r.push(o.runCleanups), o();
        }),
        () => {
            for (; r.length; ) r.pop()();
        }
    );
}
var Xr = {};
function ea(e, t) {
    Xr[e] = t;
}
function ta(e, t) {
    return (
        Object.entries(Xr).forEach(([n, r]) => {
            Object.defineProperty(e, n, {
                get() {
                    return (...i) => r.bind(t)(...i);
                },
                enumerable: !1,
            });
        }),
        e
    );
}
var na = {
        get reactive() {
            return ae;
        },
        get release() {
            return ce;
        },
        get effect() {
            return te;
        },
        get raw() {
            return ir;
        },
        version: "3.14.3",
        flushAndStopDeferringMutations: io,
        dontAutoEvaluateFunctions: gr,
        disableEffectScheduling: Ys,
        startObservingMutations: Ut,
        stopObservingMutations: dr,
        setReactivityEngine: Zs,
        onAttributeRemoved: lr,
        onAttributesAdded: ur,
        closestDataStack: re,
        skipDuringClone: z,
        onlyDuringClone: Fo,
        addRootSelector: Lr,
        addInitSelector: Fr,
        interceptClone: Xe,
        addScopeToNode: Ee,
        deferMutations: ro,
        mapAttributes: Jt,
        evaluateLater: T,
        interceptInit: So,
        setEvaluator: lo,
        mergeProxies: Se,
        extractProp: Vo,
        findClosest: Ae,
        onElRemoved: Dt,
        closestRoot: We,
        destroyTree: le,
        interceptor: _r,
        transition: Rt,
        setStyles: Ve,
        mutateDom: S,
        directive: R,
        entangle: Jr,
        throttle: Kr,
        debounce: zr,
        evaluate: G,
        initTree: k,
        nextTick: Xt,
        prefixed: ue,
        prefix: _o,
        plugin: Xo,
        magic: I,
        store: Go,
        start: xo,
        clone: jo,
        cloneNode: Mo,
        bound: Wo,
        $data: pr,
        watch: sr,
        walk: ee,
        data: ea,
        bind: Zo,
    },
    Oe = na;
function ra(e, t) {
    const n = Object.create(null),
        r = e.split(",");
    for (let i = 0; i < r.length; i++) n[r[i]] = !0;
    return (i) => !!n[i];
}
var ia = Object.freeze({}),
    sa = Object.prototype.hasOwnProperty,
    Ge = (e, t) => sa.call(e, t),
    Y = Array.isArray,
    ge = (e) => Gr(e) === "[object Map]",
    oa = (e) => typeof e == "string",
    Zt = (e) => typeof e == "symbol",
    Ye = (e) => e !== null && typeof e == "object",
    aa = Object.prototype.toString,
    Gr = (e) => aa.call(e),
    Yr = (e) => Gr(e).slice(8, -1),
    Qt = (e) =>
        oa(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
    ca = (e) => {
        const t = Object.create(null);
        return (n) => t[n] || (t[n] = e(n));
    },
    ua = ca((e) => e.charAt(0).toUpperCase() + e.slice(1)),
    Zr = (e, t) => e !== t && (e === e || t === t),
    Ct = new WeakMap(),
    he = [],
    D,
    Z = Symbol("iterate"),
    Pt = Symbol("Map key iterate");
function la(e) {
    return e && e._isEffect === !0;
}
function fa(e, t = ia) {
    la(e) && (e = e.raw);
    const n = ha(e, t);
    return t.lazy || n(), n;
}
function da(e) {
    e.active &&
        (Qr(e), e.options.onStop && e.options.onStop(), (e.active = !1));
}
var pa = 0;
function ha(e, t) {
    const n = function () {
        if (!n.active) return e();
        if (!he.includes(n)) {
            Qr(n);
            try {
                return ma(), he.push(n), (D = n), e();
            } finally {
                he.pop(), ei(), (D = he[he.length - 1]);
            }
        }
    };
    return (
        (n.id = pa++),
        (n.allowRecurse = !!t.allowRecurse),
        (n._isEffect = !0),
        (n.active = !0),
        (n.raw = e),
        (n.deps = []),
        (n.options = t),
        n
    );
}
function Qr(e) {
    const { deps: t } = e;
    if (t.length) {
        for (let n = 0; n < t.length; n++) t[n].delete(e);
        t.length = 0;
    }
}
var ie = !0,
    en = [];
function _a() {
    en.push(ie), (ie = !1);
}
function ma() {
    en.push(ie), (ie = !0);
}
function ei() {
    const e = en.pop();
    ie = e === void 0 ? !0 : e;
}
function M(e, t, n) {
    if (!ie || D === void 0) return;
    let r = Ct.get(e);
    r || Ct.set(e, (r = new Map()));
    let i = r.get(n);
    i || r.set(n, (i = new Set())),
        i.has(D) ||
            (i.add(D),
            D.deps.push(i),
            D.options.onTrack &&
                D.options.onTrack({ effect: D, target: e, type: t, key: n }));
}
function H(e, t, n, r, i, s) {
    const o = Ct.get(e);
    if (!o) return;
    const a = new Set(),
        c = (l) => {
            l &&
                l.forEach((p) => {
                    (p !== D || p.allowRecurse) && a.add(p);
                });
        };
    if (t === "clear") o.forEach(c);
    else if (n === "length" && Y(e))
        o.forEach((l, p) => {
            (p === "length" || p >= r) && c(l);
        });
    else
        switch ((n !== void 0 && c(o.get(n)), t)) {
            case "add":
                Y(e)
                    ? Qt(n) && c(o.get("length"))
                    : (c(o.get(Z)), ge(e) && c(o.get(Pt)));
                break;
            case "delete":
                Y(e) || (c(o.get(Z)), ge(e) && c(o.get(Pt)));
                break;
            case "set":
                ge(e) && c(o.get(Z));
                break;
        }
    const u = (l) => {
        l.options.onTrigger &&
            l.options.onTrigger({
                effect: l,
                target: e,
                key: n,
                type: t,
                newValue: r,
                oldValue: i,
                oldTarget: s,
            }),
            l.options.scheduler ? l.options.scheduler(l) : l();
    };
    a.forEach(u);
}
var ga = ra("__proto__,__v_isRef,__isVue"),
    ti = new Set(
        Object.getOwnPropertyNames(Symbol)
            .map((e) => Symbol[e])
            .filter(Zt)
    ),
    ya = ni(),
    ba = ni(!0),
    On = wa();
function wa() {
    const e = {};
    return (
        ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
            e[t] = function (...n) {
                const r = E(this);
                for (let s = 0, o = this.length; s < o; s++)
                    M(r, "get", s + "");
                const i = r[t](...n);
                return i === -1 || i === !1 ? r[t](...n.map(E)) : i;
            };
        }),
        ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
            e[t] = function (...n) {
                _a();
                const r = E(this)[t].apply(this, n);
                return ei(), r;
            };
        }),
        e
    );
}
function ni(e = !1, t = !1) {
    return function (r, i, s) {
        if (i === "__v_isReactive") return !e;
        if (i === "__v_isReadonly") return e;
        if (i === "__v_raw" && s === (e ? (t ? Ma : oi) : t ? Fa : si).get(r))
            return r;
        const o = Y(r);
        if (!e && o && Ge(On, i)) return Reflect.get(On, i, s);
        const a = Reflect.get(r, i, s);
        return (Zt(i) ? ti.has(i) : ga(i)) || (e || M(r, "get", i), t)
            ? a
            : Nt(a)
            ? !o || !Qt(i)
                ? a.value
                : a
            : Ye(a)
            ? e
                ? ai(a)
                : sn(a)
            : a;
    };
}
var xa = Ea();
function Ea(e = !1) {
    return function (n, r, i, s) {
        let o = n[r];
        if (!e && ((i = E(i)), (o = E(o)), !Y(n) && Nt(o) && !Nt(i)))
            return (o.value = i), !0;
        const a = Y(n) && Qt(r) ? Number(r) < n.length : Ge(n, r),
            c = Reflect.set(n, r, i, s);
        return (
            n === E(s) &&
                (a ? Zr(i, o) && H(n, "set", r, i, o) : H(n, "add", r, i)),
            c
        );
    };
}
function Sa(e, t) {
    const n = Ge(e, t),
        r = e[t],
        i = Reflect.deleteProperty(e, t);
    return i && n && H(e, "delete", t, void 0, r), i;
}
function Aa(e, t) {
    const n = Reflect.has(e, t);
    return (!Zt(t) || !ti.has(t)) && M(e, "has", t), n;
}
function Oa(e) {
    return M(e, "iterate", Y(e) ? "length" : Z), Reflect.ownKeys(e);
}
var va = { get: ya, set: xa, deleteProperty: Sa, has: Aa, ownKeys: Oa },
    Ra = {
        get: ba,
        set(e, t) {
            return (
                console.warn(
                    `Set operation on key "${String(
                        t
                    )}" failed: target is readonly.`,
                    e
                ),
                !0
            );
        },
        deleteProperty(e, t) {
            return (
                console.warn(
                    `Delete operation on key "${String(
                        t
                    )}" failed: target is readonly.`,
                    e
                ),
                !0
            );
        },
    },
    tn = (e) => (Ye(e) ? sn(e) : e),
    nn = (e) => (Ye(e) ? ai(e) : e),
    rn = (e) => e,
    Ze = (e) => Reflect.getPrototypeOf(e);
function Re(e, t, n = !1, r = !1) {
    e = e.__v_raw;
    const i = E(e),
        s = E(t);
    t !== s && !n && M(i, "get", t), !n && M(i, "get", s);
    const { has: o } = Ze(i),
        a = r ? rn : n ? nn : tn;
    if (o.call(i, t)) return a(e.get(t));
    if (o.call(i, s)) return a(e.get(s));
    e !== i && e.get(t);
}
function Te(e, t = !1) {
    const n = this.__v_raw,
        r = E(n),
        i = E(e);
    return (
        e !== i && !t && M(r, "has", e),
        !t && M(r, "has", i),
        e === i ? n.has(e) : n.has(e) || n.has(i)
    );
}
function Ce(e, t = !1) {
    return (
        (e = e.__v_raw), !t && M(E(e), "iterate", Z), Reflect.get(e, "size", e)
    );
}
function vn(e) {
    e = E(e);
    const t = E(this);
    return Ze(t).has.call(t, e) || (t.add(e), H(t, "add", e, e)), this;
}
function Rn(e, t) {
    t = E(t);
    const n = E(this),
        { has: r, get: i } = Ze(n);
    let s = r.call(n, e);
    s ? ii(n, r, e) : ((e = E(e)), (s = r.call(n, e)));
    const o = i.call(n, e);
    return (
        n.set(e, t),
        s ? Zr(t, o) && H(n, "set", e, t, o) : H(n, "add", e, t),
        this
    );
}
function Tn(e) {
    const t = E(this),
        { has: n, get: r } = Ze(t);
    let i = n.call(t, e);
    i ? ii(t, n, e) : ((e = E(e)), (i = n.call(t, e)));
    const s = r ? r.call(t, e) : void 0,
        o = t.delete(e);
    return i && H(t, "delete", e, void 0, s), o;
}
function Cn() {
    const e = E(this),
        t = e.size !== 0,
        n = ge(e) ? new Map(e) : new Set(e),
        r = e.clear();
    return t && H(e, "clear", void 0, void 0, n), r;
}
function Pe(e, t) {
    return function (r, i) {
        const s = this,
            o = s.__v_raw,
            a = E(o),
            c = t ? rn : e ? nn : tn;
        return (
            !e && M(a, "iterate", Z),
            o.forEach((u, l) => r.call(i, c(u), c(l), s))
        );
    };
}
function Ne(e, t, n) {
    return function (...r) {
        const i = this.__v_raw,
            s = E(i),
            o = ge(s),
            a = e === "entries" || (e === Symbol.iterator && o),
            c = e === "keys" && o,
            u = i[e](...r),
            l = n ? rn : t ? nn : tn;
        return (
            !t && M(s, "iterate", c ? Pt : Z),
            {
                next() {
                    const { value: p, done: _ } = u.next();
                    return _
                        ? { value: p, done: _ }
                        : { value: a ? [l(p[0]), l(p[1])] : l(p), done: _ };
                },
                [Symbol.iterator]() {
                    return this;
                },
            }
        );
    };
}
function U(e) {
    return function (...t) {
        {
            const n = t[0] ? `on key "${t[0]}" ` : "";
            console.warn(
                `${ua(e)} operation ${n}failed: target is readonly.`,
                E(this)
            );
        }
        return e === "delete" ? !1 : this;
    };
}
function Ta() {
    const e = {
            get(s) {
                return Re(this, s);
            },
            get size() {
                return Ce(this);
            },
            has: Te,
            add: vn,
            set: Rn,
            delete: Tn,
            clear: Cn,
            forEach: Pe(!1, !1),
        },
        t = {
            get(s) {
                return Re(this, s, !1, !0);
            },
            get size() {
                return Ce(this);
            },
            has: Te,
            add: vn,
            set: Rn,
            delete: Tn,
            clear: Cn,
            forEach: Pe(!1, !0),
        },
        n = {
            get(s) {
                return Re(this, s, !0);
            },
            get size() {
                return Ce(this, !0);
            },
            has(s) {
                return Te.call(this, s, !0);
            },
            add: U("add"),
            set: U("set"),
            delete: U("delete"),
            clear: U("clear"),
            forEach: Pe(!0, !1),
        },
        r = {
            get(s) {
                return Re(this, s, !0, !0);
            },
            get size() {
                return Ce(this, !0);
            },
            has(s) {
                return Te.call(this, s, !0);
            },
            add: U("add"),
            set: U("set"),
            delete: U("delete"),
            clear: U("clear"),
            forEach: Pe(!0, !0),
        };
    return (
        ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
            (e[s] = Ne(s, !1, !1)),
                (n[s] = Ne(s, !0, !1)),
                (t[s] = Ne(s, !1, !0)),
                (r[s] = Ne(s, !0, !0));
        }),
        [e, n, t, r]
    );
}
var [Ca, Pa, tc, nc] = Ta();
function ri(e, t) {
    const n = e ? Pa : Ca;
    return (r, i, s) =>
        i === "__v_isReactive"
            ? !e
            : i === "__v_isReadonly"
            ? e
            : i === "__v_raw"
            ? r
            : Reflect.get(Ge(n, i) && i in r ? n : r, i, s);
}
var Na = { get: ri(!1) },
    La = { get: ri(!0) };
function ii(e, t, n) {
    const r = E(n);
    if (r !== n && t.call(e, r)) {
        const i = Yr(e);
        console.warn(
            `Reactive ${i} contains both the raw and reactive versions of the same object${
                i === "Map" ? " as keys" : ""
            }, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
        );
    }
}
var si = new WeakMap(),
    Fa = new WeakMap(),
    oi = new WeakMap(),
    Ma = new WeakMap();
function ja(e) {
    switch (e) {
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
function Ia(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : ja(Yr(e));
}
function sn(e) {
    return e && e.__v_isReadonly ? e : ci(e, !1, va, Na, si);
}
function ai(e) {
    return ci(e, !0, Ra, La, oi);
}
function ci(e, t, n, r, i) {
    if (!Ye(e))
        return console.warn(`value cannot be made reactive: ${String(e)}`), e;
    if (e.__v_raw && !(t && e.__v_isReactive)) return e;
    const s = i.get(e);
    if (s) return s;
    const o = Ia(e);
    if (o === 0) return e;
    const a = new Proxy(e, o === 2 ? r : n);
    return i.set(e, a), a;
}
function E(e) {
    return (e && E(e.__v_raw)) || e;
}
function Nt(e) {
    return !!(e && e.__v_isRef === !0);
}
I("nextTick", () => Xt);
I("dispatch", (e) => me.bind(me, e));
I("watch", (e, { evaluateLater: t, cleanup: n }) => (r, i) => {
    let s = t(r),
        a = sr(() => {
            let c;
            return s((u) => (c = u)), c;
        }, i);
    n(a);
});
I("store", Yo);
I("data", (e) => pr(e));
I("root", (e) => We(e));
I(
    "refs",
    (e) => (e._x_refs_proxy || (e._x_refs_proxy = Se(Ba(e))), e._x_refs_proxy)
);
function Ba(e) {
    let t = [];
    return (
        Ae(e, (n) => {
            n._x_refs && t.push(n._x_refs);
        }),
        t
    );
}
var ot = {};
function ui(e) {
    return ot[e] || (ot[e] = 0), ++ot[e];
}
function Da(e, t) {
    return Ae(e, (n) => {
        if (n._x_ids && n._x_ids[t]) return !0;
    });
}
function ka(e, t) {
    e._x_ids || (e._x_ids = {}), e._x_ids[t] || (e._x_ids[t] = ui(t));
}
I("id", (e, { cleanup: t }) => (n, r = null) => {
    let i = `${n}${r ? `-${r}` : ""}`;
    return $a(e, i, t, () => {
        let s = Da(e, n),
            o = s ? s._x_ids[n] : ui(n);
        return r ? `${n}-${o}-${r}` : `${n}-${o}`;
    });
});
Xe((e, t) => {
    e._x_id && (t._x_id = e._x_id);
});
function $a(e, t, n, r) {
    if ((e._x_id || (e._x_id = {}), e._x_id[t])) return e._x_id[t];
    let i = r();
    return (
        (e._x_id[t] = i),
        n(() => {
            delete e._x_id[t];
        }),
        i
    );
}
I("el", (e) => e);
li("Focus", "focus", "focus");
li("Persist", "persist", "persist");
function li(e, t, n) {
    I(t, (r) =>
        F(
            `You can't use [$${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${n}`,
            r
        )
    );
}
R(
    "modelable",
    (e, { expression: t }, { effect: n, evaluateLater: r, cleanup: i }) => {
        let s = r(t),
            o = () => {
                let l;
                return s((p) => (l = p)), l;
            },
            a = r(`${t} = __placeholder`),
            c = (l) => a(() => {}, { scope: { __placeholder: l } }),
            u = o();
        c(u),
            queueMicrotask(() => {
                if (!e._x_model) return;
                e._x_removeModelListeners.default();
                let l = e._x_model.get,
                    p = e._x_model.set,
                    _ = Jr(
                        {
                            get() {
                                return l();
                            },
                            set(w) {
                                p(w);
                            },
                        },
                        {
                            get() {
                                return o();
                            },
                            set(w) {
                                c(w);
                            },
                        }
                    );
                i(_);
            });
    }
);
R("teleport", (e, { modifiers: t, expression: n }, { cleanup: r }) => {
    e.tagName.toLowerCase() !== "template" &&
        F("x-teleport can only be used on a <template> tag", e);
    let i = Pn(n),
        s = e.content.cloneNode(!0).firstElementChild;
    (e._x_teleport = s),
        (s._x_teleportBack = e),
        e.setAttribute("data-teleport-template", !0),
        s.setAttribute("data-teleport-target", !0),
        e._x_forwardEvents &&
            e._x_forwardEvents.forEach((a) => {
                s.addEventListener(a, (c) => {
                    c.stopPropagation(),
                        e.dispatchEvent(new c.constructor(c.type, c));
                });
            }),
        Ee(s, {}, e);
    let o = (a, c, u) => {
        u.includes("prepend")
            ? c.parentNode.insertBefore(a, c)
            : u.includes("append")
            ? c.parentNode.insertBefore(a, c.nextSibling)
            : c.appendChild(a);
    };
    S(() => {
        o(s, i, t),
            z(() => {
                k(s), (s._x_ignore = !0);
            })();
    }),
        (e._x_teleportPutBack = () => {
            let a = Pn(n);
            S(() => {
                o(e._x_teleport, a, t);
            });
        }),
        r(() =>
            S(() => {
                s.remove(), le(s);
            })
        );
});
var Ua = document.createElement("div");
function Pn(e) {
    let t = z(
        () => document.querySelector(e),
        () => Ua
    )();
    return t || F(`Cannot find x-teleport element for selector: "${e}"`), t;
}
var fi = () => {};
fi.inline = (e, { modifiers: t }, { cleanup: n }) => {
    t.includes("self") ? (e._x_ignoreSelf = !0) : (e._x_ignore = !0),
        n(() => {
            t.includes("self") ? delete e._x_ignoreSelf : delete e._x_ignore;
        });
};
R("ignore", fi);
R(
    "effect",
    z((e, { expression: t }, { effect: n }) => {
        n(T(e, t));
    })
);
function Lt(e, t, n, r) {
    let i = e,
        s = (c) => r(c),
        o = {},
        a = (c, u) => (l) => u(c, l);
    if (
        (n.includes("dot") && (t = qa(t)),
        n.includes("camel") && (t = Ha(t)),
        n.includes("passive") && (o.passive = !0),
        n.includes("capture") && (o.capture = !0),
        n.includes("window") && (i = window),
        n.includes("document") && (i = document),
        n.includes("debounce"))
    ) {
        let c = n[n.indexOf("debounce") + 1] || "invalid-wait",
            u = Ue(c.split("ms")[0]) ? Number(c.split("ms")[0]) : 250;
        s = zr(s, u);
    }
    if (n.includes("throttle")) {
        let c = n[n.indexOf("throttle") + 1] || "invalid-wait",
            u = Ue(c.split("ms")[0]) ? Number(c.split("ms")[0]) : 250;
        s = Kr(s, u);
    }
    return (
        n.includes("prevent") &&
            (s = a(s, (c, u) => {
                u.preventDefault(), c(u);
            })),
        n.includes("stop") &&
            (s = a(s, (c, u) => {
                u.stopPropagation(), c(u);
            })),
        n.includes("once") &&
            (s = a(s, (c, u) => {
                c(u), i.removeEventListener(t, s, o);
            })),
        (n.includes("away") || n.includes("outside")) &&
            ((i = document),
            (s = a(s, (c, u) => {
                e.contains(u.target) ||
                    (u.target.isConnected !== !1 &&
                        ((e.offsetWidth < 1 && e.offsetHeight < 1) ||
                            (e._x_isShown !== !1 && c(u))));
            }))),
        n.includes("self") &&
            (s = a(s, (c, u) => {
                u.target === e && c(u);
            })),
        (Ka(t) || di(t)) &&
            (s = a(s, (c, u) => {
                Ja(u, n) || c(u);
            })),
        i.addEventListener(t, s, o),
        () => {
            i.removeEventListener(t, s, o);
        }
    );
}
function qa(e) {
    return e.replace(/-/g, ".");
}
function Ha(e) {
    return e.toLowerCase().replace(/-(\w)/g, (t, n) => n.toUpperCase());
}
function Ue(e) {
    return !Array.isArray(e) && !isNaN(e);
}
function za(e) {
    return [" ", "_"].includes(e)
        ? e
        : e
              .replace(/([a-z])([A-Z])/g, "$1-$2")
              .replace(/[_\s]/, "-")
              .toLowerCase();
}
function Ka(e) {
    return ["keydown", "keyup"].includes(e);
}
function di(e) {
    return ["contextmenu", "click", "mouse"].some((t) => e.includes(t));
}
function Ja(e, t) {
    let n = t.filter(
        (s) =>
            ![
                "window",
                "document",
                "prevent",
                "stop",
                "once",
                "capture",
                "self",
                "away",
                "outside",
                "passive",
            ].includes(s)
    );
    if (n.includes("debounce")) {
        let s = n.indexOf("debounce");
        n.splice(s, Ue((n[s + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
    }
    if (n.includes("throttle")) {
        let s = n.indexOf("throttle");
        n.splice(s, Ue((n[s + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
    }
    if (n.length === 0 || (n.length === 1 && Nn(e.key).includes(n[0])))
        return !1;
    const i = ["ctrl", "shift", "alt", "meta", "cmd", "super"].filter((s) =>
        n.includes(s)
    );
    return (
        (n = n.filter((s) => !i.includes(s))),
        !(
            i.length > 0 &&
            i.filter(
                (o) => (
                    (o === "cmd" || o === "super") && (o = "meta"), e[`${o}Key`]
                )
            ).length === i.length &&
            (di(e.type) || Nn(e.key).includes(n[0]))
        )
    );
}
function Nn(e) {
    if (!e) return [];
    e = za(e);
    let t = {
        ctrl: "control",
        slash: "/",
        space: " ",
        spacebar: " ",
        cmd: "meta",
        esc: "escape",
        up: "arrow-up",
        down: "arrow-down",
        left: "arrow-left",
        right: "arrow-right",
        period: ".",
        comma: ",",
        equal: "=",
        minus: "-",
        underscore: "_",
    };
    return (
        (t[e] = e),
        Object.keys(t)
            .map((n) => {
                if (t[n] === e) return n;
            })
            .filter((n) => n)
    );
}
R("model", (e, { modifiers: t, expression: n }, { effect: r, cleanup: i }) => {
    let s = e;
    t.includes("parent") && (s = e.parentNode);
    let o = T(s, n),
        a;
    typeof n == "string"
        ? (a = T(s, `${n} = __placeholder`))
        : typeof n == "function" && typeof n() == "string"
        ? (a = T(s, `${n()} = __placeholder`))
        : (a = () => {});
    let c = () => {
            let _;
            return o((w) => (_ = w)), Ln(_) ? _.get() : _;
        },
        u = (_) => {
            let w;
            o((h) => (w = h)),
                Ln(w) ? w.set(_) : a(() => {}, { scope: { __placeholder: _ } });
        };
    typeof n == "string" &&
        e.type === "radio" &&
        S(() => {
            e.hasAttribute("name") || e.setAttribute("name", n);
        });
    var l =
        e.tagName.toLowerCase() === "select" ||
        ["checkbox", "radio"].includes(e.type) ||
        t.includes("lazy")
            ? "change"
            : "input";
    let p = q
        ? () => {}
        : Lt(e, l, t, (_) => {
              u(at(e, t, _, c()));
          });
    if (
        (t.includes("fill") &&
            ([void 0, null, ""].includes(c()) ||
                (Yt(e) && Array.isArray(c())) ||
                (e.tagName.toLowerCase() === "select" && e.multiple)) &&
            u(at(e, t, { target: e }, c())),
        e._x_removeModelListeners || (e._x_removeModelListeners = {}),
        (e._x_removeModelListeners.default = p),
        i(() => e._x_removeModelListeners.default()),
        e.form)
    ) {
        let _ = Lt(e.form, "reset", [], (w) => {
            Xt(
                () => e._x_model && e._x_model.set(at(e, t, { target: e }, c()))
            );
        });
        i(() => _());
    }
    (e._x_model = {
        get() {
            return c();
        },
        set(_) {
            u(_);
        },
    }),
        (e._x_forceModelUpdate = (_) => {
            _ === void 0 && typeof n == "string" && n.match(/\./) && (_ = ""),
                (window.fromModel = !0),
                S(() => kr(e, "value", _)),
                delete window.fromModel;
        }),
        r(() => {
            let _ = c();
            (t.includes("unintrusive") &&
                document.activeElement.isSameNode(e)) ||
                e._x_forceModelUpdate(_);
        });
});
function at(e, t, n, r) {
    return S(() => {
        if (n instanceof CustomEvent && n.detail !== void 0)
            return n.detail !== null && n.detail !== void 0
                ? n.detail
                : n.target.value;
        if (Yt(e))
            if (Array.isArray(r)) {
                let i = null;
                return (
                    t.includes("number")
                        ? (i = ct(n.target.value))
                        : t.includes("boolean")
                        ? (i = je(n.target.value))
                        : (i = n.target.value),
                    n.target.checked
                        ? r.includes(i)
                            ? r
                            : r.concat([i])
                        : r.filter((s) => !Wa(s, i))
                );
            } else return n.target.checked;
        else {
            if (e.tagName.toLowerCase() === "select" && e.multiple)
                return t.includes("number")
                    ? Array.from(n.target.selectedOptions).map((i) => {
                          let s = i.value || i.text;
                          return ct(s);
                      })
                    : t.includes("boolean")
                    ? Array.from(n.target.selectedOptions).map((i) => {
                          let s = i.value || i.text;
                          return je(s);
                      })
                    : Array.from(n.target.selectedOptions).map(
                          (i) => i.value || i.text
                      );
            {
                let i;
                return (
                    Hr(e)
                        ? n.target.checked
                            ? (i = n.target.value)
                            : (i = r)
                        : (i = n.target.value),
                    t.includes("number")
                        ? ct(i)
                        : t.includes("boolean")
                        ? je(i)
                        : t.includes("trim")
                        ? i.trim()
                        : i
                );
            }
        }
    });
}
function ct(e) {
    let t = e ? parseFloat(e) : null;
    return Va(t) ? t : e;
}
function Wa(e, t) {
    return e == t;
}
function Va(e) {
    return !Array.isArray(e) && !isNaN(e);
}
function Ln(e) {
    return (
        e !== null &&
        typeof e == "object" &&
        typeof e.get == "function" &&
        typeof e.set == "function"
    );
}
R("cloak", (e) =>
    queueMicrotask(() => S(() => e.removeAttribute(ue("cloak"))))
);
Fr(() => `[${ue("init")}]`);
R(
    "init",
    z((e, { expression: t }, { evaluate: n }) =>
        typeof t == "string" ? !!t.trim() && n(t, {}, !1) : n(t, {}, !1)
    )
);
R("text", (e, { expression: t }, { effect: n, evaluateLater: r }) => {
    let i = r(t);
    n(() => {
        i((s) => {
            S(() => {
                e.textContent = s;
            });
        });
    });
});
R("html", (e, { expression: t }, { effect: n, evaluateLater: r }) => {
    let i = r(t);
    n(() => {
        i((s) => {
            S(() => {
                (e.innerHTML = s),
                    (e._x_ignoreSelf = !0),
                    k(e),
                    delete e._x_ignoreSelf;
            });
        });
    });
});
Jt(Sr(":", Ar(ue("bind:"))));
var pi = (
    e,
    { value: t, modifiers: n, expression: r, original: i },
    { effect: s, cleanup: o }
) => {
    if (!t) {
        let c = {};
        Qo(c),
            T(e, r)(
                (l) => {
                    Vr(e, l, i);
                },
                { scope: c }
            );
        return;
    }
    if (t === "key") return Xa(e, r);
    if (
        e._x_inlineBindings &&
        e._x_inlineBindings[t] &&
        e._x_inlineBindings[t].extract
    )
        return;
    let a = T(e, r);
    s(() =>
        a((c) => {
            c === void 0 && typeof r == "string" && r.match(/\./) && (c = ""),
                S(() => kr(e, t, c, n));
        })
    ),
        o(() => {
            e._x_undoAddedClasses && e._x_undoAddedClasses(),
                e._x_undoAddedStyles && e._x_undoAddedStyles();
        });
};
pi.inline = (e, { value: t, modifiers: n, expression: r }) => {
    t &&
        (e._x_inlineBindings || (e._x_inlineBindings = {}),
        (e._x_inlineBindings[t] = { expression: r, extract: !1 }));
};
R("bind", pi);
function Xa(e, t) {
    e._x_keyExpression = t;
}
Lr(() => `[${ue("data")}]`);
R("data", (e, { expression: t }, { cleanup: n }) => {
    if (Ga(e)) return;
    t = t === "" ? "{}" : t;
    let r = {};
    xt(r, e);
    let i = {};
    ta(i, r);
    let s = G(e, t, { scope: i });
    (s === void 0 || s === !0) && (s = {}), xt(s, e);
    let o = ae(s);
    hr(o);
    let a = Ee(e, o);
    o.init && G(e, o.init),
        n(() => {
            o.destroy && G(e, o.destroy), a();
        });
});
Xe((e, t) => {
    e._x_dataStack &&
        ((t._x_dataStack = e._x_dataStack),
        t.setAttribute("data-has-alpine-state", !0));
});
function Ga(e) {
    return q ? (Tt ? !0 : e.hasAttribute("data-has-alpine-state")) : !1;
}
R("show", (e, { modifiers: t, expression: n }, { effect: r }) => {
    let i = T(e, n);
    e._x_doHide ||
        (e._x_doHide = () => {
            S(() => {
                e.style.setProperty(
                    "display",
                    "none",
                    t.includes("important") ? "important" : void 0
                );
            });
        }),
        e._x_doShow ||
            (e._x_doShow = () => {
                S(() => {
                    e.style.length === 1 && e.style.display === "none"
                        ? e.removeAttribute("style")
                        : e.style.removeProperty("display");
                });
            });
    let s = () => {
            e._x_doHide(), (e._x_isShown = !1);
        },
        o = () => {
            e._x_doShow(), (e._x_isShown = !0);
        },
        a = () => setTimeout(o),
        c = vt(
            (p) => (p ? o() : s()),
            (p) => {
                typeof e._x_toggleAndCascadeWithTransitions == "function"
                    ? e._x_toggleAndCascadeWithTransitions(e, p, o, s)
                    : p
                    ? a()
                    : s();
            }
        ),
        u,
        l = !0;
    r(() =>
        i((p) => {
            (!l && p === u) ||
                (t.includes("immediate") && (p ? a() : s()),
                c(p),
                (u = p),
                (l = !1));
        })
    );
});
R("for", (e, { expression: t }, { effect: n, cleanup: r }) => {
    let i = Za(t),
        s = T(e, i.items),
        o = T(e, e._x_keyExpression || "index");
    (e._x_prevKeys = []),
        (e._x_lookup = {}),
        n(() => Ya(e, i, s, o)),
        r(() => {
            Object.values(e._x_lookup).forEach((a) =>
                S(() => {
                    le(a), a.remove();
                })
            ),
                delete e._x_prevKeys,
                delete e._x_lookup;
        });
});
function Ya(e, t, n, r) {
    let i = (o) => typeof o == "object" && !Array.isArray(o),
        s = e;
    n((o) => {
        Qa(o) && o >= 0 && (o = Array.from(Array(o).keys(), (d) => d + 1)),
            o === void 0 && (o = []);
        let a = e._x_lookup,
            c = e._x_prevKeys,
            u = [],
            l = [];
        if (i(o))
            o = Object.entries(o).map(([d, m]) => {
                let b = Fn(t, m, d, o);
                r(
                    (x) => {
                        l.includes(x) && F("Duplicate key on x-for", e),
                            l.push(x);
                    },
                    { scope: { index: d, ...b } }
                ),
                    u.push(b);
            });
        else
            for (let d = 0; d < o.length; d++) {
                let m = Fn(t, o[d], d, o);
                r(
                    (b) => {
                        l.includes(b) && F("Duplicate key on x-for", e),
                            l.push(b);
                    },
                    { scope: { index: d, ...m } }
                ),
                    u.push(m);
            }
        let p = [],
            _ = [],
            w = [],
            h = [];
        for (let d = 0; d < c.length; d++) {
            let m = c[d];
            l.indexOf(m) === -1 && w.push(m);
        }
        c = c.filter((d) => !w.includes(d));
        let g = "template";
        for (let d = 0; d < l.length; d++) {
            let m = l[d],
                b = c.indexOf(m);
            if (b === -1) c.splice(d, 0, m), p.push([g, d]);
            else if (b !== d) {
                let x = c.splice(d, 1)[0],
                    A = c.splice(b - 1, 1)[0];
                c.splice(d, 0, A), c.splice(b, 0, x), _.push([x, A]);
            } else h.push(m);
            g = m;
        }
        for (let d = 0; d < w.length; d++) {
            let m = w[d];
            m in a &&
                (S(() => {
                    le(a[m]), a[m].remove();
                }),
                delete a[m]);
        }
        for (let d = 0; d < _.length; d++) {
            let [m, b] = _[d],
                x = a[m],
                A = a[b],
                O = document.createElement("div");
            S(() => {
                A || F('x-for ":key" is undefined or invalid', s, b, a),
                    A.after(O),
                    x.after(A),
                    A._x_currentIfEl && A.after(A._x_currentIfEl),
                    O.before(x),
                    x._x_currentIfEl && x.after(x._x_currentIfEl),
                    O.remove();
            }),
                A._x_refreshXForScope(u[l.indexOf(b)]);
        }
        for (let d = 0; d < p.length; d++) {
            let [m, b] = p[d],
                x = m === "template" ? s : a[m];
            x._x_currentIfEl && (x = x._x_currentIfEl);
            let A = u[b],
                O = l[b],
                C = document.importNode(s.content, !0).firstElementChild,
                B = ae(A);
            Ee(C, B, s),
                (C._x_refreshXForScope = (ne) => {
                    Object.entries(ne).forEach(([ve, mi]) => {
                        B[ve] = mi;
                    });
                }),
                S(() => {
                    x.after(C), z(() => k(C))();
                }),
                typeof O == "object" &&
                    F(
                        "x-for key cannot be an object, it must be a string or an integer",
                        s
                    ),
                (a[O] = C);
        }
        for (let d = 0; d < h.length; d++)
            a[h[d]]._x_refreshXForScope(u[l.indexOf(h[d])]);
        s._x_prevKeys = l;
    });
}
function Za(e) {
    let t = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
        n = /^\s*\(|\)\s*$/g,
        r = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,
        i = e.match(r);
    if (!i) return;
    let s = {};
    s.items = i[2].trim();
    let o = i[1].replace(n, "").trim(),
        a = o.match(t);
    return (
        a
            ? ((s.item = o.replace(t, "").trim()),
              (s.index = a[1].trim()),
              a[2] && (s.collection = a[2].trim()))
            : (s.item = o),
        s
    );
}
function Fn(e, t, n, r) {
    let i = {};
    return (
        /^\[.*\]$/.test(e.item) && Array.isArray(t)
            ? e.item
                  .replace("[", "")
                  .replace("]", "")
                  .split(",")
                  .map((o) => o.trim())
                  .forEach((o, a) => {
                      i[o] = t[a];
                  })
            : /^\{.*\}$/.test(e.item) &&
              !Array.isArray(t) &&
              typeof t == "object"
            ? e.item
                  .replace("{", "")
                  .replace("}", "")
                  .split(",")
                  .map((o) => o.trim())
                  .forEach((o) => {
                      i[o] = t[o];
                  })
            : (i[e.item] = t),
        e.index && (i[e.index] = n),
        e.collection && (i[e.collection] = r),
        i
    );
}
function Qa(e) {
    return !Array.isArray(e) && !isNaN(e);
}
function hi() {}
hi.inline = (e, { expression: t }, { cleanup: n }) => {
    let r = We(e);
    r._x_refs || (r._x_refs = {}),
        (r._x_refs[t] = e),
        n(() => delete r._x_refs[t]);
};
R("ref", hi);
R("if", (e, { expression: t }, { effect: n, cleanup: r }) => {
    e.tagName.toLowerCase() !== "template" &&
        F("x-if can only be used on a <template> tag", e);
    let i = T(e, t),
        s = () => {
            if (e._x_currentIfEl) return e._x_currentIfEl;
            let a = e.content.cloneNode(!0).firstElementChild;
            return (
                Ee(a, {}, e),
                S(() => {
                    e.after(a), z(() => k(a))();
                }),
                (e._x_currentIfEl = a),
                (e._x_undoIf = () => {
                    S(() => {
                        le(a), a.remove();
                    }),
                        delete e._x_currentIfEl;
                }),
                a
            );
        },
        o = () => {
            e._x_undoIf && (e._x_undoIf(), delete e._x_undoIf);
        };
    n(() =>
        i((a) => {
            a ? s() : o();
        })
    ),
        r(() => e._x_undoIf && e._x_undoIf());
});
R("id", (e, { expression: t }, { evaluate: n }) => {
    n(t).forEach((i) => ka(e, i));
});
Xe((e, t) => {
    e._x_ids && (t._x_ids = e._x_ids);
});
Jt(Sr("@", Ar(ue("on:"))));
R(
    "on",
    z((e, { value: t, modifiers: n, expression: r }, { cleanup: i }) => {
        let s = r ? T(e, r) : () => {};
        e.tagName.toLowerCase() === "template" &&
            (e._x_forwardEvents || (e._x_forwardEvents = []),
            e._x_forwardEvents.includes(t) || e._x_forwardEvents.push(t));
        let o = Lt(e, t, n, (a) => {
            s(() => {}, { scope: { $event: a }, params: [a] });
        });
        i(() => o());
    })
);
Qe("Collapse", "collapse", "collapse");
Qe("Intersect", "intersect", "intersect");
Qe("Focus", "trap", "focus");
Qe("Mask", "mask", "mask");
function Qe(e, t, n) {
    R(t, (r) =>
        F(
            `You can't use [x-${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${n}`,
            r
        )
    );
}
Oe.setEvaluator(br);
Oe.setReactivityEngine({ reactive: sn, effect: fa, release: da, raw: E });
var ec = Oe,
    _i = ec;
window.Alpine = _i;
_i.start();
