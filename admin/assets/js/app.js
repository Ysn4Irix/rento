/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-1.10.2.min.map
*/
(function (e, t) {
    var n, r, i = typeof t, o = e.location, a = e.document, s = a.documentElement, l = e.jQuery, u = e.$, c = {},
        p = [], f = "1.10.2", d = p.concat, h = p.push, g = p.slice, m = p.indexOf, y = c.toString,
        v = c.hasOwnProperty, b = f.trim, x = function (e, t) {
            return new x.fn.init(e, t, r)
        }, w = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, T = /\S+/g, C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, k = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, E = /^[\],:{}\s]*$/,
        S = /(?:^|:|,)(?:\s*\[)+/g, A = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        j = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, D = /^-ms-/, L = /-([\da-z])/gi,
        H = function (e, t) {
            return t.toUpperCase()
        }, q = function (e) {
            (a.addEventListener || "load" === e.type || "complete" === a.readyState) && (_(), x.ready())
        }, _ = function () {
            a.addEventListener ? (a.removeEventListener("DOMContentLoaded", q, !1), e.removeEventListener("load", q, !1)) : (a.detachEvent("onreadystatechange", q), e.detachEvent("onload", q))
        };
    x.fn = x.prototype = {
        jquery: f, constructor: x, init: function (e, n, r) {
            var i, o;
            if (!e) return this;
            if ("string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : N.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                if (i[1]) {
                    if (n = n instanceof x ? n[0] : n, x.merge(this, x.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : a, !0)), k.test(i[1]) && x.isPlainObject(n)) for (i in n) x.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                    return this
                }
                if (o = a.getElementById(i[2]), o && o.parentNode) {
                    if (o.id !== i[2]) return r.find(e);
                    this.length = 1, this[0] = o
                }
                return this.context = a, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : x.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), x.makeArray(e, this))
        }, selector: "", length: 0, toArray: function () {
            return g.call(this)
        }, get: function (e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
        }, pushStack: function (e) {
            var t = x.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        }, each: function (e, t) {
            return x.each(this, e, t)
        }, ready: function (e) {
            return x.ready.promise().done(e), this
        }, slice: function () {
            return this.pushStack(g.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (e) {
            var t = this.length, n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        }, map: function (e) {
            return this.pushStack(x.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: h, sort: [].sort, splice: [].splice
    }, x.fn.init.prototype = x.fn, x.extend = x.fn.extend = function () {
        var e, n, r, i, o, a, s = arguments[0] || {}, l = 1, u = arguments.length, c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, l = 2), "object" == typeof s || x.isFunction(s) || (s = {}), u === l && (s = this, --l); u > l; l++) if (null != (o = arguments[l])) for (i in o) e = s[i], r = o[i], s !== r && (c && r && (x.isPlainObject(r) || (n = x.isArray(r))) ? (n ? (n = !1, a = e && x.isArray(e) ? e : []) : a = e && x.isPlainObject(e) ? e : {}, s[i] = x.extend(c, a, r)) : r !== t && (s[i] = r));
        return s
    }, x.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""), noConflict: function (t) {
            return e.$ === x && (e.$ = u), t && e.jQuery === x && (e.jQuery = l), x
        }, isReady: !1, readyWait: 1, holdReady: function (e) {
            e ? x.readyWait++ : x.ready(!0)
        }, ready: function (e) {
            if (e === !0 ? !--x.readyWait : !x.isReady) {
                if (!a.body) return setTimeout(x.ready);
                x.isReady = !0, e !== !0 && --x.readyWait > 0 || (n.resolveWith(a, [x]), x.fn.trigger && x(a).trigger("ready").off("ready"))
            }
        }, isFunction: function (e) {
            return "function" === x.type(e)
        }, isArray: Array.isArray || function (e) {
            return "array" === x.type(e)
        }, isWindow: function (e) {
            return null != e && e == e.window
        }, isNumeric: function (e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        }, type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[y.call(e)] || "object" : typeof e
        }, isPlainObject: function (e) {
            var n;
            if (!e || "object" !== x.type(e) || e.nodeType || x.isWindow(e)) return !1;
            try {
                if (e.constructor && !v.call(e, "constructor") && !v.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (r) {
                return !1
            }
            if (x.support.ownLast) for (n in e) return v.call(e, n);
            for (n in e) ;
            return n === t || v.call(e, n)
        }, isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        }, error: function (e) {
            throw Error(e)
        }, parseHTML: function (e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || a;
            var r = k.exec(e), i = !n && [];
            return r ? [t.createElement(r[1])] : (r = x.buildFragment([e], t, i), i && x(i).remove(), x.merge([], r.childNodes))
        }, parseJSON: function (n) {
            return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = x.trim(n), n && E.test(n.replace(A, "@").replace(j, "]").replace(S, ""))) ? Function("return " + n)() : (x.error("Invalid JSON: " + n), t)
        }, parseXML: function (n) {
            var r, i;
            if (!n || "string" != typeof n) return null;
            try {
                e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
            } catch (o) {
                r = t
            }
            return r && r.documentElement && !r.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + n), r
        }, noop: function () {
        }, globalEval: function (t) {
            t && x.trim(t) && (e.execScript || function (t) {
                e.eval.call(e, t)
            })(t)
        }, camelCase: function (e) {
            return e.replace(D, "ms-").replace(L, H)
        }, nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }, each: function (e, t, n) {
            var r, i = 0, o = e.length, a = M(e);
            if (n) {
                if (a) {
                    for (; o > i; i++) if (r = t.apply(e[i], n), r === !1) break
                } else for (i in e) if (r = t.apply(e[i], n), r === !1) break
            } else if (a) {
                for (; o > i; i++) if (r = t.call(e[i], i, e[i]), r === !1) break
            } else for (i in e) if (r = t.call(e[i], i, e[i]), r === !1) break;
            return e
        }, trim: b && !b.call("\ufeff\u00a0") ? function (e) {
            return null == e ? "" : b.call(e)
        } : function (e) {
            return null == e ? "" : (e + "").replace(C, "")
        }, makeArray: function (e, t) {
            var n = t || [];
            return null != e && (M(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : h.call(n, e)), n
        }, inArray: function (e, t, n) {
            var r;
            if (t) {
                if (m) return m.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++) if (n in t && t[n] === e) return n
            }
            return -1
        }, merge: function (e, n) {
            var r = n.length, i = e.length, o = 0;
            if ("number" == typeof r) for (; r > o; o++) e[i++] = n[o]; else while (n[o] !== t) e[i++] = n[o++];
            return e.length = i, e
        }, grep: function (e, t, n) {
            var r, i = [], o = 0, a = e.length;
            for (n = !!n; a > o; o++) r = !!t(e[o], o), n !== r && i.push(e[o]);
            return i
        }, map: function (e, t, n) {
            var r, i = 0, o = e.length, a = M(e), s = [];
            if (a) for (; o > i; i++) r = t(e[i], i, n), null != r && (s[s.length] = r); else for (i in e) r = t(e[i], i, n), null != r && (s[s.length] = r);
            return d.apply([], s)
        }, guid: 1, proxy: function (e, n) {
            var r, i, o;
            return "string" == typeof n && (o = e[n], n = e, e = o), x.isFunction(e) ? (r = g.call(arguments, 2), i = function () {
                return e.apply(n || this, r.concat(g.call(arguments)))
            }, i.guid = e.guid = e.guid || x.guid++, i) : t
        }, access: function (e, n, r, i, o, a, s) {
            var l = 0, u = e.length, c = null == r;
            if ("object" === x.type(r)) {
                o = !0;
                for (l in r) x.access(e, n, l, r[l], !0, a, s)
            } else if (i !== t && (o = !0, x.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function (e, t, n) {
                return c.call(x(e), n)
            })), n)) for (; u > l; l++) n(e[l], r, s ? i : i.call(e[l], l, n(e[l], r)));
            return o ? e : c ? n.call(e) : u ? n(e[0], r) : a
        }, now: function () {
            return (new Date).getTime()
        }, swap: function (e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i
        }
    }), x.ready.promise = function (t) {
        if (!n) if (n = x.Deferred(), "complete" === a.readyState) setTimeout(x.ready); else if (a.addEventListener) a.addEventListener("DOMContentLoaded", q, !1), e.addEventListener("load", q, !1); else {
            a.attachEvent("onreadystatechange", q), e.attachEvent("onload", q);
            var r = !1;
            try {
                r = null == e.frameElement && a.documentElement
            } catch (i) {
            }
            r && r.doScroll && function o() {
                if (!x.isReady) {
                    try {
                        r.doScroll("left")
                    } catch (e) {
                        return setTimeout(o, 50)
                    }
                    _(), x.ready()
                }
            }()
        }
        return n.promise(t)
    }, x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        c["[object " + t + "]"] = t.toLowerCase()
    });

    function M(e) {
        var t = e.length, n = x.type(e);
        return x.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    r = x(a), function (e, t) {
        var n, r, i, o, a, s, l, u, c, p, f, d, h, g, m, y, v, b = "sizzle" + -new Date, w = e.document, T = 0, C = 0,
            N = st(), k = st(), E = st(), S = !1, A = function (e, t) {
                return e === t ? (S = !0, 0) : 0
            }, j = typeof t, D = 1 << 31, L = {}.hasOwnProperty, H = [], q = H.pop, _ = H.push, M = H.push, O = H.slice,
            F = H.indexOf || function (e) {
                var t = 0, n = this.length;
                for (; n > t; t++) if (this[t] === e) return t;
                return -1
            },
            B = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            P = "[\\x20\\t\\r\\n\\f]", R = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", W = R.replace("w", "w#"),
            $ = "\\[" + P + "*(" + R + ")" + P + "*(?:([*^$|!~]?=)" + P + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + W + ")|)|)" + P + "*\\]",
            I = ":(" + R + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + $.replace(3, 8) + ")*)|.*)\\)|)",
            z = RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"), X = RegExp("^" + P + "*," + P + "*"),
            U = RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"), V = RegExp(P + "*[+~]"),
            Y = RegExp("=" + P + "*([^\\]'\"]*)" + P + "*\\]", "g"), J = RegExp(I), G = RegExp("^" + W + "$"), Q = {
                ID: RegExp("^#(" + R + ")"),
                CLASS: RegExp("^\\.(" + R + ")"),
                TAG: RegExp("^(" + R.replace("w", "w*") + ")"),
                ATTR: RegExp("^" + $),
                PSEUDO: RegExp("^" + I),
                CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
                bool: RegExp("^(?:" + B + ")$", "i"),
                needsContext: RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
            }, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            et = /^(?:input|select|textarea|button)$/i, tt = /^h\d$/i, nt = /'|\\/g,
            rt = RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"), it = function (e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r)
            };
        try {
            M.apply(H = O.call(w.childNodes), w.childNodes), H[w.childNodes.length].nodeType
        } catch (ot) {
            M = {
                apply: H.length ? function (e, t) {
                    _.apply(e, O.call(t))
                } : function (e, t) {
                    var n = e.length, r = 0;
                    while (e[n++] = t[r++]) ;
                    e.length = n - 1
                }
            }
        }

        function at(e, t, n, i) {
            var o, a, s, l, u, c, d, m, y, x;
            if ((t ? t.ownerDocument || t : w) !== f && p(t), t = t || f, n = n || [], !e || "string" != typeof e) return n;
            if (1 !== (l = t.nodeType) && 9 !== l) return [];
            if (h && !i) {
                if (o = Z.exec(e)) if (s = o[1]) {
                    if (9 === l) {
                        if (a = t.getElementById(s), !a || !a.parentNode) return n;
                        if (a.id === s) return n.push(a), n
                    } else if (t.ownerDocument && (a = t.ownerDocument.getElementById(s)) && v(t, a) && a.id === s) return n.push(a), n
                } else {
                    if (o[2]) return M.apply(n, t.getElementsByTagName(e)), n;
                    if ((s = o[3]) && r.getElementsByClassName && t.getElementsByClassName) return M.apply(n, t.getElementsByClassName(s)), n
                }
                if (r.qsa && (!g || !g.test(e))) {
                    if (m = d = b, y = t, x = 9 === l && e, 1 === l && "object" !== t.nodeName.toLowerCase()) {
                        c = mt(e), (d = t.getAttribute("id")) ? m = d.replace(nt, "\\$&") : t.setAttribute("id", m), m = "[id='" + m + "'] ", u = c.length;
                        while (u--) c[u] = m + yt(c[u]);
                        y = V.test(e) && t.parentNode || t, x = c.join(",")
                    }
                    if (x) try {
                        return M.apply(n, y.querySelectorAll(x)), n
                    } catch (T) {
                    } finally {
                        d || t.removeAttribute("id")
                    }
                }
            }
            return kt(e.replace(z, "$1"), t, n, i)
        }

        function st() {
            var e = [];

            function t(n, r) {
                return e.push(n += " ") > o.cacheLength && delete t[e.shift()], t[n] = r
            }

            return t
        }

        function lt(e) {
            return e[b] = !0, e
        }

        function ut(e) {
            var t = f.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function ct(e, t) {
            var n = e.split("|"), r = e.length;
            while (r--) o.attrHandle[n[r]] = t
        }

        function pt(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || D) - (~e.sourceIndex || D);
            if (r) return r;
            if (n) while (n = n.nextSibling) if (n === t) return -1;
            return e ? 1 : -1
        }

        function ft(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function dt(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function ht(e) {
            return lt(function (t) {
                return t = +t, lt(function (n, r) {
                    var i, o = e([], n.length, t), a = o.length;
                    while (a--) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        s = at.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, r = at.support = {}, p = at.setDocument = function (e) {
            var n = e ? e.ownerDocument || e : w, i = n.defaultView;
            return n !== f && 9 === n.nodeType && n.documentElement ? (f = n, d = n.documentElement, h = !s(n), i && i.attachEvent && i !== i.top && i.attachEvent("onbeforeunload", function () {
                p()
            }), r.attributes = ut(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), r.getElementsByTagName = ut(function (e) {
                return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
            }), r.getElementsByClassName = ut(function (e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
            }), r.getById = ut(function (e) {
                return d.appendChild(e).id = b, !n.getElementsByName || !n.getElementsByName(b).length
            }), r.getById ? (o.find.ID = function (e, t) {
                if (typeof t.getElementById !== j && h) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, o.filter.ID = function (e) {
                var t = e.replace(rt, it);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete o.find.ID, o.filter.ID = function (e) {
                var t = e.replace(rt, it);
                return function (e) {
                    var n = typeof e.getAttributeNode !== j && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), o.find.TAG = r.getElementsByTagName ? function (e, n) {
                return typeof n.getElementsByTagName !== j ? n.getElementsByTagName(e) : t
            } : function (e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++]) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, o.find.CLASS = r.getElementsByClassName && function (e, n) {
                return typeof n.getElementsByClassName !== j && h ? n.getElementsByClassName(e) : t
            }, m = [], g = [], (r.qsa = K.test(n.querySelectorAll)) && (ut(function (e) {
                e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || g.push("\\[" + P + "*(?:value|" + B + ")"), e.querySelectorAll(":checked").length || g.push(":checked")
            }), ut(function (e) {
                var t = n.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && g.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
            })), (r.matchesSelector = K.test(y = d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && ut(function (e) {
                r.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), m.push("!=", I)
            }), g = g.length && RegExp(g.join("|")), m = m.length && RegExp(m.join("|")), v = K.test(d.contains) || d.compareDocumentPosition ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e, t) {
                if (t) while (t = t.parentNode) if (t === e) return !0;
                return !1
            }, A = d.compareDocumentPosition ? function (e, t) {
                if (e === t) return S = !0, 0;
                var i = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
                return i ? 1 & i || !r.sortDetached && t.compareDocumentPosition(e) === i ? e === n || v(w, e) ? -1 : t === n || v(w, t) ? 1 : c ? F.call(c, e) - F.call(c, t) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
            } : function (e, t) {
                var r, i = 0, o = e.parentNode, a = t.parentNode, s = [e], l = [t];
                if (e === t) return S = !0, 0;
                if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : c ? F.call(c, e) - F.call(c, t) : 0;
                if (o === a) return pt(e, t);
                r = e;
                while (r = r.parentNode) s.unshift(r);
                r = t;
                while (r = r.parentNode) l.unshift(r);
                while (s[i] === l[i]) i++;
                return i ? pt(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0
            }, n) : f
        }, at.matches = function (e, t) {
            return at(e, null, null, t)
        }, at.matchesSelector = function (e, t) {
            if ((e.ownerDocument || e) !== f && p(e), t = t.replace(Y, "='$1']"), !(!r.matchesSelector || !h || m && m.test(t) || g && g.test(t))) try {
                var n = y.call(e, t);
                if (n || r.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
            } catch (i) {
            }
            return at(t, f, null, [e]).length > 0
        }, at.contains = function (e, t) {
            return (e.ownerDocument || e) !== f && p(e), v(e, t)
        }, at.attr = function (e, n) {
            (e.ownerDocument || e) !== f && p(e);
            var i = o.attrHandle[n.toLowerCase()], a = i && L.call(o.attrHandle, n.toLowerCase()) ? i(e, n, !h) : t;
            return a === t ? r.attributes || !h ? e.getAttribute(n) : (a = e.getAttributeNode(n)) && a.specified ? a.value : null : a
        }, at.error = function (e) {
            throw Error("Syntax error, unrecognized expression: " + e)
        }, at.uniqueSort = function (e) {
            var t, n = [], i = 0, o = 0;
            if (S = !r.detectDuplicates, c = !r.sortStable && e.slice(0), e.sort(A), S) {
                while (t = e[o++]) t === e[o] && (i = n.push(o));
                while (i--) e.splice(n[i], 1)
            }
            return e
        }, a = at.getText = function (e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += a(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else for (; t = e[r]; r++) n += a(t);
            return n
        }, o = at.selectors = {
            cacheLength: 50,
            createPseudo: lt,
            match: Q,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(rt, it), e[3] = (e[4] || e[5] || "").replace(rt, it), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || at.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && at.error(e[0]), e
                }, PSEUDO: function (e) {
                    var n, r = !e[5] && e[2];
                    return Q.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && J.test(r) && (n = mt(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(rt, it).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                }, CLASS: function (e) {
                    var t = N[e + " "];
                    return t || (t = RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && N(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== j && e.getAttribute("class") || "")
                    })
                }, ATTR: function (e, t, n) {
                    return function (r) {
                        var i = at.attr(r, e);
                        return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                }, CHILD: function (e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
                    return 1 === r && 0 === i ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, l) {
                        var u, c, p, f, d, h, g = o !== a ? "nextSibling" : "previousSibling", m = t.parentNode,
                            y = s && t.nodeName.toLowerCase(), v = !l && !s;
                        if (m) {
                            if (o) {
                                while (g) {
                                    p = t;
                                    while (p = p[g]) if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? m.firstChild : m.lastChild], a && v) {
                                c = m[b] || (m[b] = {}), u = c[e] || [], d = u[0] === T && u[1], f = u[0] === T && u[2], p = d && m.childNodes[d];
                                while (p = ++d && p && p[g] || (f = d = 0) || h.pop()) if (1 === p.nodeType && ++f && p === t) {
                                    c[e] = [T, d, f];
                                    break
                                }
                            } else if (v && (u = (t[b] || (t[b] = {}))[e]) && u[0] === T) f = u[1]; else while (p = ++d && p && p[g] || (f = d = 0) || h.pop()) if ((s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (v && ((p[b] || (p[b] = {}))[e] = [T, f]), p === t)) break;
                            return f -= i, f === r || 0 === f % r && f / r >= 0
                        }
                    }
                }, PSEUDO: function (e, t) {
                    var n, r = o.pseudos[e] || o.setFilters[e.toLowerCase()] || at.error("unsupported pseudo: " + e);
                    return r[b] ? r(t) : r.length > 1 ? (n = [e, e, "", t], o.setFilters.hasOwnProperty(e.toLowerCase()) ? lt(function (e, n) {
                        var i, o = r(e, t), a = o.length;
                        while (a--) i = F.call(e, o[a]), e[i] = !(n[i] = o[a])
                    }) : function (e) {
                        return r(e, 0, n)
                    }) : r
                }
            },
            pseudos: {
                not: lt(function (e) {
                    var t = [], n = [], r = l(e.replace(z, "$1"));
                    return r[b] ? lt(function (e, t, n, i) {
                        var o, a = r(e, null, i, []), s = e.length;
                        while (s--) (o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function (e, i, o) {
                        return t[0] = e, r(t, null, o, n), !n.pop()
                    }
                }), has: lt(function (e) {
                    return function (t) {
                        return at(e, t).length > 0
                    }
                }), contains: lt(function (e) {
                    return function (t) {
                        return (t.textContent || t.innerText || a(t)).indexOf(e) > -1
                    }
                }), lang: lt(function (e) {
                    return G.test(e || "") || at.error("unsupported lang: " + e), e = e.replace(rt, it).toLowerCase(), function (t) {
                        var n;
                        do if (n = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }), target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                }, root: function (e) {
                    return e === d
                }, focus: function (e) {
                    return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: function (e) {
                    return e.disabled === !1
                }, disabled: function (e) {
                    return e.disabled === !0
                }, checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                    return !0
                }, parent: function (e) {
                    return !o.pseudos.empty(e)
                }, header: function (e) {
                    return tt.test(e.nodeName)
                }, input: function (e) {
                    return et.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                }, first: ht(function () {
                    return [0]
                }), last: ht(function (e, t) {
                    return [t - 1]
                }), eq: ht(function (e, t, n) {
                    return [0 > n ? n + t : n]
                }), even: ht(function (e, t) {
                    var n = 0;
                    for (; t > n; n += 2) e.push(n);
                    return e
                }), odd: ht(function (e, t) {
                    var n = 1;
                    for (; t > n; n += 2) e.push(n);
                    return e
                }), lt: ht(function (e, t, n) {
                    var r = 0 > n ? n + t : n;
                    for (; --r >= 0;) e.push(r);
                    return e
                }), gt: ht(function (e, t, n) {
                    var r = 0 > n ? n + t : n;
                    for (; t > ++r;) e.push(r);
                    return e
                })
            }
        }, o.pseudos.nth = o.pseudos.eq;
        for (n in {radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) o.pseudos[n] = ft(n);
        for (n in {submit: !0, reset: !0}) o.pseudos[n] = dt(n);

        function gt() {
        }

        gt.prototype = o.filters = o.pseudos, o.setFilters = new gt;

        function mt(e, t) {
            var n, r, i, a, s, l, u, c = k[e + " "];
            if (c) return t ? 0 : c.slice(0);
            s = e, l = [], u = o.preFilter;
            while (s) {
                (!n || (r = X.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(i = [])), n = !1, (r = U.exec(s)) && (n = r.shift(), i.push({
                    value: n,
                    type: r[0].replace(z, " ")
                }), s = s.slice(n.length));
                for (a in o.filter) !(r = Q[a].exec(s)) || u[a] && !(r = u[a](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: a,
                    matches: r
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length : s ? at.error(e) : k(e, l).slice(0)
        }

        function yt(e) {
            var t = 0, n = e.length, r = "";
            for (; n > t; t++) r += e[t].value;
            return r
        }

        function vt(e, t, n) {
            var r = t.dir, o = n && "parentNode" === r, a = C++;
            return t.first ? function (t, n, i) {
                while (t = t[r]) if (1 === t.nodeType || o) return e(t, n, i)
            } : function (t, n, s) {
                var l, u, c, p = T + " " + a;
                if (s) {
                    while (t = t[r]) if ((1 === t.nodeType || o) && e(t, n, s)) return !0
                } else while (t = t[r]) if (1 === t.nodeType || o) if (c = t[b] || (t[b] = {}), (u = c[r]) && u[0] === p) {
                    if ((l = u[1]) === !0 || l === i) return l === !0
                } else if (u = c[r] = [p], u[1] = e(t, n, s) || i, u[1] === !0) return !0
            }
        }

        function bt(e) {
            return e.length > 1 ? function (t, n, r) {
                var i = e.length;
                while (i--) if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function xt(e, t, n, r, i) {
            var o, a = [], s = 0, l = e.length, u = null != t;
            for (; l > s; s++) (o = e[s]) && (!n || n(o, r, i)) && (a.push(o), u && t.push(s));
            return a
        }

        function wt(e, t, n, r, i, o) {
            return r && !r[b] && (r = wt(r)), i && !i[b] && (i = wt(i, o)), lt(function (o, a, s, l) {
                var u, c, p, f = [], d = [], h = a.length, g = o || Nt(t || "*", s.nodeType ? [s] : s, []),
                    m = !e || !o && t ? g : xt(g, f, e, s, l), y = n ? i || (o ? e : h || r) ? [] : a : m;
                if (n && n(m, y, s, l), r) {
                    u = xt(y, d), r(u, [], s, l), c = u.length;
                    while (c--) (p = u[c]) && (y[d[c]] = !(m[d[c]] = p))
                }
                if (o) {
                    if (i || e) {
                        if (i) {
                            u = [], c = y.length;
                            while (c--) (p = y[c]) && u.push(m[c] = p);
                            i(null, y = [], u, l)
                        }
                        c = y.length;
                        while (c--) (p = y[c]) && (u = i ? F.call(o, p) : f[c]) > -1 && (o[u] = !(a[u] = p))
                    }
                } else y = xt(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, l) : M.apply(a, y)
            })
        }

        function Tt(e) {
            var t, n, r, i = e.length, a = o.relative[e[0].type], s = a || o.relative[" "], l = a ? 1 : 0,
                c = vt(function (e) {
                    return e === t
                }, s, !0), p = vt(function (e) {
                    return F.call(t, e) > -1
                }, s, !0), f = [function (e, n, r) {
                    return !a && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r))
                }];
            for (; i > l; l++) if (n = o.relative[e[l].type]) f = [vt(bt(f), n)]; else {
                if (n = o.filter[e[l].type].apply(null, e[l].matches), n[b]) {
                    for (r = ++l; i > r; r++) if (o.relative[e[r].type]) break;
                    return wt(l > 1 && bt(f), l > 1 && yt(e.slice(0, l - 1).concat({value: " " === e[l - 2].type ? "*" : ""})).replace(z, "$1"), n, r > l && Tt(e.slice(l, r)), i > r && Tt(e = e.slice(r)), i > r && yt(e))
                }
                f.push(n)
            }
            return bt(f)
        }

        function Ct(e, t) {
            var n = 0, r = t.length > 0, a = e.length > 0, s = function (s, l, c, p, d) {
                var h, g, m, y = [], v = 0, b = "0", x = s && [], w = null != d, C = u,
                    N = s || a && o.find.TAG("*", d && l.parentNode || l), k = T += null == C ? 1 : Math.random() || .1;
                for (w && (u = l !== f && l, i = n); null != (h = N[b]); b++) {
                    if (a && h) {
                        g = 0;
                        while (m = e[g++]) if (m(h, l, c)) {
                            p.push(h);
                            break
                        }
                        w && (T = k, i = ++n)
                    }
                    r && ((h = !m && h) && v--, s && x.push(h))
                }
                if (v += b, r && b !== v) {
                    g = 0;
                    while (m = t[g++]) m(x, y, l, c);
                    if (s) {
                        if (v > 0) while (b--) x[b] || y[b] || (y[b] = q.call(p));
                        y = xt(y)
                    }
                    M.apply(p, y), w && !s && y.length > 0 && v + t.length > 1 && at.uniqueSort(p)
                }
                return w && (T = k, u = C), x
            };
            return r ? lt(s) : s
        }

        l = at.compile = function (e, t) {
            var n, r = [], i = [], o = E[e + " "];
            if (!o) {
                t || (t = mt(e)), n = t.length;
                while (n--) o = Tt(t[n]), o[b] ? r.push(o) : i.push(o);
                o = E(e, Ct(i, r))
            }
            return o
        };

        function Nt(e, t, n) {
            var r = 0, i = t.length;
            for (; i > r; r++) at(e, t[r], n);
            return n
        }

        function kt(e, t, n, i) {
            var a, s, u, c, p, f = mt(e);
            if (!i && 1 === f.length) {
                if (s = f[0] = f[0].slice(0), s.length > 2 && "ID" === (u = s[0]).type && r.getById && 9 === t.nodeType && h && o.relative[s[1].type]) {
                    if (t = (o.find.ID(u.matches[0].replace(rt, it), t) || [])[0], !t) return n;
                    e = e.slice(s.shift().value.length)
                }
                a = Q.needsContext.test(e) ? 0 : s.length;
                while (a--) {
                    if (u = s[a], o.relative[c = u.type]) break;
                    if ((p = o.find[c]) && (i = p(u.matches[0].replace(rt, it), V.test(s[0].type) && t.parentNode || t))) {
                        if (s.splice(a, 1), e = i.length && yt(s), !e) return M.apply(n, i), n;
                        break
                    }
                }
            }
            return l(e, f)(i, t, !h, n, V.test(e)), n
        }

        r.sortStable = b.split("").sort(A).join("") === b, r.detectDuplicates = S, p(), r.sortDetached = ut(function (e) {
            return 1 & e.compareDocumentPosition(f.createElement("div"))
        }), ut(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || ct("type|href|height|width", function (e, n, r) {
            return r ? t : e.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2)
        }), r.attributes && ut(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || ct("value", function (e, n, r) {
            return r || "input" !== e.nodeName.toLowerCase() ? t : e.defaultValue
        }), ut(function (e) {
            return null == e.getAttribute("disabled")
        }) || ct(B, function (e, n, r) {
            var i;
            return r ? t : (i = e.getAttributeNode(n)) && i.specified ? i.value : e[n] === !0 ? n.toLowerCase() : null
        }), x.find = at, x.expr = at.selectors, x.expr[":"] = x.expr.pseudos, x.unique = at.uniqueSort, x.text = at.getText, x.isXMLDoc = at.isXML, x.contains = at.contains
    }(e);
    var O = {};

    function F(e) {
        var t = O[e] = {};
        return x.each(e.match(T) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    x.Callbacks = function (e) {
        e = "string" == typeof e ? O[e] || F(e) : x.extend({}, e);
        var n, r, i, o, a, s, l = [], u = !e.once && [], c = function (t) {
            for (r = e.memory && t, i = !0, a = s || 0, s = 0, o = l.length, n = !0; l && o > a; a++) if (l[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                r = !1;
                break
            }
            n = !1, l && (u ? u.length && c(u.shift()) : r ? l = [] : p.disable())
        }, p = {
            add: function () {
                if (l) {
                    var t = l.length;
                    (function i(t) {
                        x.each(t, function (t, n) {
                            var r = x.type(n);
                            "function" === r ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== r && i(n)
                        })
                    })(arguments), n ? o = l.length : r && (s = t, c(r))
                }
                return this
            }, remove: function () {
                return l && x.each(arguments, function (e, t) {
                    var r;
                    while ((r = x.inArray(t, l, r)) > -1) l.splice(r, 1), n && (o >= r && o--, a >= r && a--)
                }), this
            }, has: function (e) {
                return e ? x.inArray(e, l) > -1 : !(!l || !l.length)
            }, empty: function () {
                return l = [], o = 0, this
            }, disable: function () {
                return l = u = r = t, this
            }, disabled: function () {
                return !l
            }, lock: function () {
                return u = t, r || p.disable(), this
            }, locked: function () {
                return !u
            }, fireWith: function (e, t) {
                return !l || i && !u || (t = t || [], t = [e, t.slice ? t.slice() : t], n ? u.push(t) : c(t)), this
            }, fire: function () {
                return p.fireWith(this, arguments), this
            }, fired: function () {
                return !!i
            }
        };
        return p
    }, x.extend({
        Deferred: function (e) {
            var t = [["resolve", "done", x.Callbacks("once memory"), "resolved"], ["reject", "fail", x.Callbacks("once memory"), "rejected"], ["notify", "progress", x.Callbacks("memory")]],
                n = "pending", r = {
                    state: function () {
                        return n
                    }, always: function () {
                        return i.done(arguments).fail(arguments), this
                    }, then: function () {
                        var e = arguments;
                        return x.Deferred(function (n) {
                            x.each(t, function (t, o) {
                                var a = o[0], s = x.isFunction(e[t]) && e[t];
                                i[o[1]](function () {
                                    var e = s && s.apply(this, arguments);
                                    e && x.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    }, promise: function (e) {
                        return null != e ? x.extend(e, r) : r
                    }
                }, i = {};
            return r.pipe = r.then, x.each(t, function (e, o) {
                var a = o[2], s = o[3];
                r[o[1]] = a.add, s && a.add(function () {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = a.fireWith
            }), r.promise(i), e && e.call(i, i), i
        }, when: function (e) {
            var t = 0, n = g.call(arguments), r = n.length, i = 1 !== r || e && x.isFunction(e.promise) ? r : 0,
                o = 1 === i ? e : x.Deferred(), a = function (e, t, n) {
                    return function (r) {
                        t[e] = this, n[e] = arguments.length > 1 ? g.call(arguments) : r, n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n)
                    }
                }, s, l, u;
            if (r > 1) for (s = Array(r), l = Array(r), u = Array(r); r > t; t++) n[t] && x.isFunction(n[t].promise) ? n[t].promise().done(a(t, u, n)).fail(o.reject).progress(a(t, l, s)) : --i;
            return i || o.resolveWith(u, n), o.promise()
        }
    }), x.support = function (t) {
        var n, r, o, s, l, u, c, p, f, d = a.createElement("div");
        if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*") || [], r = d.getElementsByTagName("a")[0], !r || !r.style || !n.length) return t;
        s = a.createElement("select"), u = s.appendChild(a.createElement("option")), o = d.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== d.className, t.leadingWhitespace = 3 === d.firstChild.nodeType, t.tbody = !d.getElementsByTagName("tbody").length, t.htmlSerialize = !!d.getElementsByTagName("link").length, t.style = /top/.test(r.getAttribute("style")), t.hrefNormalized = "/a" === r.getAttribute("href"), t.opacity = /^0.5/.test(r.style.opacity), t.cssFloat = !!r.style.cssFloat, t.checkOn = !!o.value, t.optSelected = u.selected, t.enctype = !!a.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== a.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, o.checked = !0, t.noCloneChecked = o.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !u.disabled;
        try {
            delete d.test
        } catch (h) {
            t.deleteExpando = !1
        }
        o = a.createElement("input"), o.setAttribute("value", ""), t.input = "" === o.getAttribute("value"), o.value = "t", o.setAttribute("type", "radio"), t.radioValue = "t" === o.value, o.setAttribute("checked", "t"), o.setAttribute("name", "t"), l = a.createDocumentFragment(), l.appendChild(o), t.appendChecked = o.checked, t.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function () {
            t.noCloneEvent = !1
        }), d.cloneNode(!0).click());
        for (f in {
            submit: !0,
            change: !0,
            focusin: !0
        }) d.setAttribute(c = "on" + f, "t"), t[f + "Bubbles"] = c in e || d.attributes[c].expando === !1;
        d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip;
        for (f in x(t)) break;
        return t.ownLast = "0" !== f, x(function () {
            var n, r, o,
                s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                l = a.getElementsByTagName("body")[0];
            l && (n = a.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", l.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = d.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", p = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", t.reliableHiddenOffsets = p && 0 === o[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", x.swap(l, null != l.style.zoom ? {zoom: 1} : {}, function () {
                t.boxSizing = 4 === d.offsetWidth
            }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {width: "4px"}).width, r = d.appendChild(a.createElement("div")), r.style.cssText = d.style.cssText = s, r.style.marginRight = r.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof d.style.zoom !== i && (d.innerHTML = "", d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (l.style.zoom = 1)), l.removeChild(n), n = d = o = r = null)
        }), n = s = l = u = r = o = null, t
    }({});
    var B = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, P = /([A-Z])/g;

    function R(e, n, r, i) {
        if (x.acceptData(e)) {
            var o, a, s = x.expando, l = e.nodeType, u = l ? x.cache : e, c = l ? e[s] : e[s] && s;
            if (c && u[c] && (i || u[c].data) || r !== t || "string" != typeof n) return c || (c = l ? e[s] = p.pop() || x.guid++ : s), u[c] || (u[c] = l ? {} : {toJSON: x.noop}), ("object" == typeof n || "function" == typeof n) && (i ? u[c] = x.extend(u[c], n) : u[c].data = x.extend(u[c].data, n)), a = u[c], i || (a.data || (a.data = {}), a = a.data), r !== t && (a[x.camelCase(n)] = r), "string" == typeof n ? (o = a[n], null == o && (o = a[x.camelCase(n)])) : o = a, o
        }
    }

    function W(e, t, n) {
        if (x.acceptData(e)) {
            var r, i, o = e.nodeType, a = o ? x.cache : e, s = o ? e[x.expando] : x.expando;
            if (a[s]) {
                if (t && (r = n ? a[s] : a[s].data)) {
                    x.isArray(t) ? t = t.concat(x.map(t, x.camelCase)) : t in r ? t = [t] : (t = x.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
                    while (i--) delete r[t[i]];
                    if (n ? !I(r) : !x.isEmptyObject(r)) return
                }
                (n || (delete a[s].data, I(a[s]))) && (o ? x.cleanData([e], !0) : x.support.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
            }
        }
    }

    x.extend({
        cache: {},
        noData: {applet: !0, embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
        hasData: function (e) {
            return e = e.nodeType ? x.cache[e[x.expando]] : e[x.expando], !!e && !I(e)
        },
        data: function (e, t, n) {
            return R(e, t, n)
        },
        removeData: function (e, t) {
            return W(e, t)
        },
        _data: function (e, t, n) {
            return R(e, t, n, !0)
        },
        _removeData: function (e, t) {
            return W(e, t, !0)
        },
        acceptData: function (e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
            var t = e.nodeName && x.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }), x.fn.extend({
        data: function (e, n) {
            var r, i, o = null, a = 0, s = this[0];
            if (e === t) {
                if (this.length && (o = x.data(s), 1 === s.nodeType && !x._data(s, "parsedAttrs"))) {
                    for (r = s.attributes; r.length > a; a++) i = r[a].name, 0 === i.indexOf("data-") && (i = x.camelCase(i.slice(5)), $(s, i, o[i]));
                    x._data(s, "parsedAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function () {
                x.data(this, e)
            }) : arguments.length > 1 ? this.each(function () {
                x.data(this, e, n)
            }) : s ? $(s, e, x.data(s, e)) : null
        }, removeData: function (e) {
            return this.each(function () {
                x.removeData(this, e)
            })
        }
    });

    function $(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(P, "-$1").toLowerCase();
            if (r = e.getAttribute(i), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : B.test(r) ? x.parseJSON(r) : r
                } catch (o) {
                }
                x.data(e, n, r)
            } else r = t
        }
        return r
    }

    function I(e) {
        var t;
        for (t in e) if (("data" !== t || !x.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    x.extend({
        queue: function (e, n, r) {
            var i;
            return e ? (n = (n || "fx") + "queue", i = x._data(e, n), r && (!i || x.isArray(r) ? i = x._data(e, n, x.makeArray(r)) : i.push(r)), i || []) : t
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = x.queue(e, t), r = n.length, i = n.shift(), o = x._queueHooks(e, t), a = function () {
                x.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return x._data(e, n) || x._data(e, n, {
                empty: x.Callbacks("once memory").add(function () {
                    x._removeData(e, t + "queue"), x._removeData(e, n)
                })
            })
        }
    }), x.fn.extend({
        queue: function (e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? x.queue(this[0], e) : n === t ? this : this.each(function () {
                var t = x.queue(this, e, n);
                x._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && x.dequeue(this, e)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                x.dequeue(this, e)
            })
        }, delay: function (e, t) {
            return e = x.fx ? x.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                var r = setTimeout(t, e);
                n.stop = function () {
                    clearTimeout(r)
                }
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, n) {
            var r, i = 1, o = x.Deferred(), a = this, s = this.length, l = function () {
                --i || o.resolveWith(a, [a])
            };
            "string" != typeof e && (n = e, e = t), e = e || "fx";
            while (s--) r = x._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(l));
            return l(), o.promise(n)
        }
    });
    var z, X, U = /[\t\r\n\f]/g, V = /\r/g, Y = /^(?:input|select|textarea|button|object)$/i, J = /^(?:a|area)$/i,
        G = /^(?:checked|selected)$/i, Q = x.support.getSetAttribute, K = x.support.input;
    x.fn.extend({
        attr: function (e, t) {
            return x.access(this, x.attr, e, t, arguments.length > 1)
        }, removeAttr: function (e) {
            return this.each(function () {
                x.removeAttr(this, e)
            })
        }, prop: function (e, t) {
            return x.access(this, x.prop, e, t, arguments.length > 1)
        }, removeProp: function (e) {
            return e = x.propFix[e] || e, this.each(function () {
                try {
                    this[e] = t, delete this[e]
                } catch (n) {
                }
            })
        }, addClass: function (e) {
            var t, n, r, i, o, a = 0, s = this.length, l = "string" == typeof e && e;
            if (x.isFunction(e)) return this.each(function (t) {
                x(this).addClass(e.call(this, t, this.className))
            });
            if (l) for (t = (e || "").match(T) || []; s > a; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : " ")) {
                o = 0;
                while (i = t[o++]) 0 > r.indexOf(" " + i + " ") && (r += i + " ");
                n.className = x.trim(r)
            }
            return this
        }, removeClass: function (e) {
            var t, n, r, i, o, a = 0, s = this.length, l = 0 === arguments.length || "string" == typeof e && e;
            if (x.isFunction(e)) return this.each(function (t) {
                x(this).removeClass(e.call(this, t, this.className))
            });
            if (l) for (t = (e || "").match(T) || []; s > a; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : "")) {
                o = 0;
                while (i = t[o++]) while (r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " ");
                n.className = e ? x.trim(r) : ""
            }
            return this
        }, toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : x.isFunction(e) ? this.each(function (n) {
                x(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function () {
                if ("string" === n) {
                    var t, r = 0, o = x(this), a = e.match(T) || [];
                    while (t = a[r++]) o.hasClass(t) ? o.removeClass(t) : o.addClass(t)
                } else (n === i || "boolean" === n) && (this.className && x._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : x._data(this, "__className__") || "")
            })
        }, hasClass: function (e) {
            var t = " " + e + " ", n = 0, r = this.length;
            for (; r > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(U, " ").indexOf(t) >= 0) return !0;
            return !1
        }, val: function (e) {
            var n, r, i, o = this[0];
            {
                if (arguments.length) return i = x.isFunction(e), this.each(function (n) {
                    var o;
                    1 === this.nodeType && (o = i ? e.call(this, n, x(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : x.isArray(o) && (o = x.map(o, function (e) {
                        return null == e ? "" : e + ""
                    })), r = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o))
                });
                if (o) return r = x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()], r && "get" in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(V, "") : null == n ? "" : n)
            }
        }
    }), x.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = x.find.attr(e, "value");
                    return null != t ? t : e.text
                }
            }, select: {
                get: function (e) {
                    var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i,
                        a = o ? null : [], s = o ? i + 1 : r.length, l = 0 > i ? s : o ? i : 0;
                    for (; s > l; l++) if (n = r[l], !(!n.selected && l !== i || (x.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && x.nodeName(n.parentNode, "optgroup"))) {
                        if (t = x(n).val(), o) return t;
                        a.push(t)
                    }
                    return a
                }, set: function (e, t) {
                    var n, r, i = e.options, o = x.makeArray(t), a = i.length;
                    while (a--) r = i[a], (r.selected = x.inArray(x(r).val(), o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }, attr: function (e, n, r) {
            var o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return typeof e.getAttribute === i ? x.prop(e, n, r) : (1 === s && x.isXMLDoc(e) || (n = n.toLowerCase(), o = x.attrHooks[n] || (x.expr.match.bool.test(n) ? X : z)), r === t ? o && "get" in o && null !== (a = o.get(e, n)) ? a : (a = x.find.attr(e, n), null == a ? t : a) : null !== r ? o && "set" in o && (a = o.set(e, r, n)) !== t ? a : (e.setAttribute(n, r + ""), r) : (x.removeAttr(e, n), t))
        }, removeAttr: function (e, t) {
            var n, r, i = 0, o = t && t.match(T);
            if (o && 1 === e.nodeType) while (n = o[i++]) r = x.propFix[n] || n, x.expr.match.bool.test(n) ? K && Q || !G.test(n) ? e[r] = !1 : e[x.camelCase("default-" + n)] = e[r] = !1 : x.attr(e, n, ""), e.removeAttribute(Q ? n : r)
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!x.support.radioValue && "radio" === t && x.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }, propFix: {"for": "htmlFor", "class": "className"}, prop: function (e, n, r) {
            var i, o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !x.isXMLDoc(e), a && (n = x.propFix[n] || n, o = x.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n]
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = x.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Y.test(e.nodeName) || J.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), X = {
        set: function (e, t, n) {
            return t === !1 ? x.removeAttr(e, n) : K && Q || !G.test(n) ? e.setAttribute(!Q && x.propFix[n] || n, n) : e[x.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, x.each(x.expr.match.bool.source.match(/\w+/g), function (e, n) {
        var r = x.expr.attrHandle[n] || x.find.attr;
        x.expr.attrHandle[n] = K && Q || !G.test(n) ? function (e, n, i) {
            var o = x.expr.attrHandle[n], a = i ? t : (x.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
            return x.expr.attrHandle[n] = o, a
        } : function (e, n, r) {
            return r ? t : e[x.camelCase("default-" + n)] ? n.toLowerCase() : null
        }
    }), K && Q || (x.attrHooks.value = {
        set: function (e, n, r) {
            return x.nodeName(e, "input") ? (e.defaultValue = n, t) : z && z.set(e, n, r)
        }
    }), Q || (z = {
        set: function (e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t
        }
    }, x.expr.attrHandle.id = x.expr.attrHandle.name = x.expr.attrHandle.coords = function (e, n, r) {
        var i;
        return r ? t : (i = e.getAttributeNode(n)) && "" !== i.value ? i.value : null
    }, x.valHooks.button = {
        get: function (e, n) {
            var r = e.getAttributeNode(n);
            return r && r.specified ? r.value : t
        }, set: z.set
    }, x.attrHooks.contenteditable = {
        set: function (e, t, n) {
            z.set(e, "" === t ? !1 : t, n)
        }
    }, x.each(["width", "height"], function (e, n) {
        x.attrHooks[n] = {
            set: function (e, r) {
                return "" === r ? (e.setAttribute(n, "auto"), r) : t
            }
        }
    })), x.support.hrefNormalized || x.each(["href", "src"], function (e, t) {
        x.propHooks[t] = {
            get: function (e) {
                return e.getAttribute(t, 4)
            }
        }
    }), x.support.style || (x.attrHooks.style = {
        get: function (e) {
            return e.style.cssText || t
        }, set: function (e, t) {
            return e.style.cssText = t + ""
        }
    }), x.support.optSelected || (x.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        x.propFix[this.toLowerCase()] = this
    }), x.support.enctype || (x.propFix.enctype = "encoding"), x.each(["radio", "checkbox"], function () {
        x.valHooks[this] = {
            set: function (e, n) {
                return x.isArray(n) ? e.checked = x.inArray(x(e).val(), n) >= 0 : t
            }
        }, x.support.checkOn || (x.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Z = /^(?:input|select|textarea)$/i, et = /^key/, tt = /^(?:mouse|contextmenu)|click/,
        nt = /^(?:focusinfocus|focusoutblur)$/, rt = /^([^.]*)(?:\.(.+)|)$/;

    function it() {
        return !0
    }

    function ot() {
        return !1
    }

    function at() {
        try {
            return a.activeElement
        } catch (e) {
        }
    }

    x.event = {
        global: {},
        add: function (e, n, r, o, a) {
            var s, l, u, c, p, f, d, h, g, m, y, v = x._data(e);
            if (v) {
                r.handler && (c = r, r = c.handler, a = c.selector), r.guid || (r.guid = x.guid++), (l = v.events) || (l = v.events = {}), (f = v.handle) || (f = v.handle = function (e) {
                    return typeof x === i || e && x.event.triggered === e.type ? t : x.event.dispatch.apply(f.elem, arguments)
                }, f.elem = e), n = (n || "").match(T) || [""], u = n.length;
                while (u--) s = rt.exec(n[u]) || [], g = y = s[1], m = (s[2] || "").split(".").sort(), g && (p = x.event.special[g] || {}, g = (a ? p.delegateType : p.bindType) || g, p = x.event.special[g] || {}, d = x.extend({
                    type: g,
                    origType: y,
                    data: o,
                    handler: r,
                    guid: r.guid,
                    selector: a,
                    needsContext: a && x.expr.match.needsContext.test(a),
                    namespace: m.join(".")
                }, c), (h = l[g]) || (h = l[g] = [], h.delegateCount = 0, p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on" + g, f))), p.add && (p.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), a ? h.splice(h.delegateCount++, 0, d) : h.push(d), x.event.global[g] = !0);
                e = null
            }
        },
        remove: function (e, t, n, r, i) {
            var o, a, s, l, u, c, p, f, d, h, g, m = x.hasData(e) && x._data(e);
            if (m && (c = m.events)) {
                t = (t || "").match(T) || [""], u = t.length;
                while (u--) if (s = rt.exec(t[u]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                    p = x.event.special[d] || {}, d = (r ? p.delegateType : p.bindType) || d, f = c[d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length;
                    while (o--) a = f[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, p.remove && p.remove.call(e, a));
                    l && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || x.removeEvent(e, d, m.handle), delete c[d])
                } else for (d in c) x.event.remove(e, d + t[u], n, r, !0);
                x.isEmptyObject(c) && (delete m.handle, x._removeData(e, "events"))
            }
        },
        trigger: function (n, r, i, o) {
            var s, l, u, c, p, f, d, h = [i || a], g = v.call(n, "type") ? n.type : n,
                m = v.call(n, "namespace") ? n.namespace.split(".") : [];
            if (u = f = i = i || a, 3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + x.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."), g = m.shift(), m.sort()), l = 0 > g.indexOf(":") && "on" + g, n = n[x.expando] ? n : new x.Event(g, "object" == typeof n && n), n.isTrigger = o ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : x.makeArray(r, [n]), p = x.event.special[g] || {}, o || !p.trigger || p.trigger.apply(i, r) !== !1)) {
                if (!o && !p.noBubble && !x.isWindow(i)) {
                    for (c = p.delegateType || g, nt.test(c + g) || (u = u.parentNode); u; u = u.parentNode) h.push(u), f = u;
                    f === (i.ownerDocument || a) && h.push(f.defaultView || f.parentWindow || e)
                }
                d = 0;
                while ((u = h[d++]) && !n.isPropagationStopped()) n.type = d > 1 ? c : p.bindType || g, s = (x._data(u, "events") || {})[n.type] && x._data(u, "handle"), s && s.apply(u, r), s = l && u[l], s && x.acceptData(u) && s.apply && s.apply(u, r) === !1 && n.preventDefault();
                if (n.type = g, !o && !n.isDefaultPrevented() && (!p._default || p._default.apply(h.pop(), r) === !1) && x.acceptData(i) && l && i[g] && !x.isWindow(i)) {
                    f = i[l], f && (i[l] = null), x.event.triggered = g;
                    try {
                        i[g]()
                    } catch (y) {
                    }
                    x.event.triggered = t, f && (i[l] = f)
                }
                return n.result
            }
        },
        dispatch: function (e) {
            e = x.event.fix(e);
            var n, r, i, o, a, s = [], l = g.call(arguments), u = (x._data(this, "events") || {})[e.type] || [],
                c = x.event.special[e.type] || {};
            if (l[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                s = x.event.handlers.call(this, e, u), n = 0;
                while ((o = s[n++]) && !e.isPropagationStopped()) {
                    e.currentTarget = o.elem, a = 0;
                    while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped()) (!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((x.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, n) {
            var r, i, o, a, s = [], l = n.delegateCount, u = e.target;
            if (l && u.nodeType && (!e.button || "click" !== e.type)) for (; u != this; u = u.parentNode || this) if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                for (o = [], a = 0; l > a; a++) i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? x(r, this).index(u) >= 0 : x.find(r, this, null, [u]).length), o[r] && o.push(i);
                o.length && s.push({elem: u, handlers: o})
            }
            return n.length > l && s.push({elem: this, handlers: n.slice(l)}), s
        },
        fix: function (e) {
            if (e[x.expando]) return e;
            var t, n, r, i = e.type, o = e, s = this.fixHooks[i];
            s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new x.Event(o), t = r.length;
            while (t--) n = r[t], e[n] = o[n];
            return e.target || (e.target = o.srcElement || a), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, n) {
                var r, i, o, s = n.button, l = n.fromElement;
                return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || a, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !e.relatedTarget && l && (e.relatedTarget = l === e.target ? n.toElement : l), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
            }
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== at() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {
                    }
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    return this === at() && this.blur ? (this.blur(), !1) : t
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    return x.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
                }, _default: function (e) {
                    return x.nodeName(e.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n, r) {
            var i = x.extend(new x.Event, n, {type: e, isSimulated: !0, originalEvent: {}});
            r ? x.event.trigger(i, null, t) : x.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, x.removeEvent = a.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function (e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n))
    }, x.Event = function (e, n) {
        return this instanceof x.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : ot) : this.type = e, n && x.extend(this, n), this.timeStamp = e && e.timeStamp || x.now(), this[x.expando] = !0, t) : new x.Event(e, n)
    }, x.Event.prototype = {
        isDefaultPrevented: ot,
        isPropagationStopped: ot,
        isImmediatePropagationStopped: ot,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = it, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = it, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = it, this.stopPropagation()
        }
    }, x.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (e, t) {
        x.event.special[e] = {
            delegateType: t, bindType: t, handle: function (e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return (!i || i !== r && !x.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), x.support.submitBubbles || (x.event.special.submit = {
        setup: function () {
            return x.nodeName(this, "form") ? !1 : (x.event.add(this, "click._submit keypress._submit", function (e) {
                var n = e.target, r = x.nodeName(n, "input") || x.nodeName(n, "button") ? n.form : t;
                r && !x._data(r, "submitBubbles") && (x.event.add(r, "submit._submit", function (e) {
                    e._submit_bubble = !0
                }), x._data(r, "submitBubbles", !0))
            }), t)
        }, postDispatch: function (e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && x.event.simulate("submit", this.parentNode, e, !0))
        }, teardown: function () {
            return x.nodeName(this, "form") ? !1 : (x.event.remove(this, "._submit"), t)
        }
    }), x.support.changeBubbles || (x.event.special.change = {
        setup: function () {
            return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (x.event.add(this, "propertychange._change", function (e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), x.event.add(this, "click._change", function (e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), x.event.simulate("change", this, e, !0)
            })), !1) : (x.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                Z.test(t.nodeName) && !x._data(t, "changeBubbles") && (x.event.add(t, "change._change", function (e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || x.event.simulate("change", this.parentNode, e, !0)
                }), x._data(t, "changeBubbles", !0))
            }), t)
        }, handle: function (e) {
            var n = e.target;
            return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
        }, teardown: function () {
            return x.event.remove(this, "._change"), !Z.test(this.nodeName)
        }
    }), x.support.focusinBubbles || x.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var n = 0, r = function (e) {
            x.event.simulate(t, e.target, x.event.fix(e), !0)
        };
        x.event.special[t] = {
            setup: function () {
                0 === n++ && a.addEventListener(e, r, !0)
            }, teardown: function () {
                0 === --n && a.removeEventListener(e, r, !0)
            }
        }
    }), x.fn.extend({
        on: function (e, n, r, i, o) {
            var a, s;
            if ("object" == typeof e) {
                "string" != typeof n && (r = r || n, n = t);
                for (a in e) this.on(a, n, r, e[a], o);
                return this
            }
            if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = ot; else if (!i) return this;
            return 1 === o && (s = i, i = function (e) {
                return x().off(e), s.apply(this, arguments)
            }, i.guid = s.guid || (s.guid = x.guid++)), this.each(function () {
                x.event.add(this, e, i, r, n)
            })
        }, one: function (e, t, n, r) {
            return this.on(e, t, n, r, 1)
        }, off: function (e, n, r) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, x(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, n, e[o]);
                return this
            }
            return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = ot), this.each(function () {
                x.event.remove(this, e, r, n)
            })
        }, trigger: function (e, t) {
            return this.each(function () {
                x.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, n) {
            var r = this[0];
            return r ? x.event.trigger(e, n, r, !0) : t
        }
    });
    var st = /^.[^:#\[\.,]*$/, lt = /^(?:parents|prev(?:Until|All))/, ut = x.expr.match.needsContext,
        ct = {children: !0, contents: !0, next: !0, prev: !0};
    x.fn.extend({
        find: function (e) {
            var t, n = [], r = this, i = r.length;
            if ("string" != typeof e) return this.pushStack(x(e).filter(function () {
                for (t = 0; i > t; t++) if (x.contains(r[t], this)) return !0
            }));
            for (t = 0; i > t; t++) x.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? x.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        }, has: function (e) {
            var t, n = x(e, this), r = n.length;
            return this.filter(function () {
                for (t = 0; r > t; t++) if (x.contains(this, n[t])) return !0
            })
        }, not: function (e) {
            return this.pushStack(ft(this, e || [], !0))
        }, filter: function (e) {
            return this.pushStack(ft(this, e || [], !1))
        }, is: function (e) {
            return !!ft(this, "string" == typeof e && ut.test(e) ? x(e) : e || [], !1).length
        }, closest: function (e, t) {
            var n, r = 0, i = this.length, o = [], a = ut.test(e) || "string" != typeof e ? x(e, t || this.context) : 0;
            for (; i > r; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (11 > n.nodeType && (a ? a.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
                n = o.push(n);
                break
            }
            return this.pushStack(o.length > 1 ? x.unique(o) : o)
        }, index: function (e) {
            return e ? "string" == typeof e ? x.inArray(this[0], x(e)) : x.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            var n = "string" == typeof e ? x(e, t) : x.makeArray(e && e.nodeType ? [e] : e), r = x.merge(this.get(), n);
            return this.pushStack(x.unique(r))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    });

    function pt(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    x.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return x.dir(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return x.dir(e, "parentNode", n)
        }, next: function (e) {
            return pt(e, "nextSibling")
        }, prev: function (e) {
            return pt(e, "previousSibling")
        }, nextAll: function (e) {
            return x.dir(e, "nextSibling")
        }, prevAll: function (e) {
            return x.dir(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return x.dir(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return x.dir(e, "previousSibling", n)
        }, siblings: function (e) {
            return x.sibling((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return x.sibling(e.firstChild)
        }, contents: function (e) {
            return x.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : x.merge([], e.childNodes)
        }
    }, function (e, t) {
        x.fn[e] = function (n, r) {
            var i = x.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = x.filter(r, i)), this.length > 1 && (ct[e] || (i = x.unique(i)), lt.test(e) && (i = i.reverse())), this.pushStack(i)
        }
    }), x.extend({
        filter: function (e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? x.find.matchesSelector(r, e) ? [r] : [] : x.find.matches(e, x.grep(t, function (e) {
                return 1 === e.nodeType
            }))
        }, dir: function (e, n, r) {
            var i = [], o = e[n];
            while (o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !x(o).is(r))) 1 === o.nodeType && i.push(o), o = o[n];
            return i
        }, sibling: function (e, t) {
            var n = [];
            for (; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });

    function ft(e, t, n) {
        if (x.isFunction(t)) return x.grep(e, function (e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return x.grep(e, function (e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (st.test(t)) return x.filter(t, e, n);
            t = x.filter(t, e)
        }
        return x.grep(e, function (e) {
            return x.inArray(e, t) >= 0 !== n
        })
    }

    function dt(e) {
        var t = ht.split("|"), n = e.createDocumentFragment();
        if (n.createElement) while (t.length) n.createElement(t.pop());
        return n
    }

    var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        gt = / jQuery\d+="(?:null|\d+)"/g, mt = RegExp("<(?:" + ht + ")[\\s/>]", "i"), yt = /^\s+/,
        vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, bt = /<([\w:]+)/,
        xt = /<tbody/i, wt = /<|&#?\w+;/, Tt = /<(?:script|style|link)/i, Ct = /^(?:checkbox|radio)$/i,
        Nt = /checked\s*(?:[^=]|=\s*.checked.)/i, kt = /^$|\/(?:java|ecma)script/i, Et = /^true\/(.*)/,
        St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, At = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: x.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        }, jt = dt(a), Dt = jt.appendChild(a.createElement("div"));
    At.optgroup = At.option, At.tbody = At.tfoot = At.colgroup = At.caption = At.thead, At.th = At.td, x.fn.extend({
        text: function (e) {
            return x.access(this, function (e) {
                return e === t ? x.text(this) : this.empty().append((this[0] && this[0].ownerDocument || a).createTextNode(e))
            }, null, e, arguments.length)
        }, append: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Lt(this, e);
                    t.appendChild(e)
                }
            })
        }, prepend: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Lt(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        }, before: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, remove: function (e, t) {
            var n, r = e ? x.filter(e, this) : this, i = 0;
            for (; null != (n = r[i]); i++) t || 1 !== n.nodeType || x.cleanData(Ft(n)), n.parentNode && (t && x.contains(n.ownerDocument, n) && _t(Ft(n, "script")), n.parentNode.removeChild(n));
            return this
        }, empty: function () {
            var e, t = 0;
            for (; null != (e = this[t]); t++) {
                1 === e.nodeType && x.cleanData(Ft(e, !1));
                while (e.firstChild) e.removeChild(e.firstChild);
                e.options && x.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        }, clone: function (e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
                return x.clone(this, e, t)
            })
        }, html: function (e) {
            return x.access(this, function (e) {
                var n = this[0] || {}, r = 0, i = this.length;
                if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(gt, "") : t;
                if (!("string" != typeof e || Tt.test(e) || !x.support.htmlSerialize && mt.test(e) || !x.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(vt, "<$1></$2>");
                    try {
                        for (; i > r; r++) n = this[r] || {}, 1 === n.nodeType && (x.cleanData(Ft(n, !1)), n.innerHTML = e);
                        n = 0
                    } catch (o) {
                    }
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var e = x.map(this, function (e) {
                return [e.nextSibling, e.parentNode]
            }), t = 0;
            return this.domManip(arguments, function (n) {
                var r = e[t++], i = e[t++];
                i && (r && r.parentNode !== i && (r = this.nextSibling), x(this).remove(), i.insertBefore(n, r))
            }, !0), t ? this : this.remove()
        }, detach: function (e) {
            return this.remove(e, !0)
        }, domManip: function (e, t, n) {
            e = d.apply([], e);
            var r, i, o, a, s, l, u = 0, c = this.length, p = this, f = c - 1, h = e[0], g = x.isFunction(h);
            if (g || !(1 >= c || "string" != typeof h || x.support.checkClone) && Nt.test(h)) return this.each(function (r) {
                var i = p.eq(r);
                g && (e[0] = h.call(this, r, i.html())), i.domManip(e, t, n)
            });
            if (c && (l = x.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = l.firstChild, 1 === l.childNodes.length && (l = r), r)) {
                for (a = x.map(Ft(l, "script"), Ht), o = a.length; c > u; u++) i = l, u !== f && (i = x.clone(i, !0, !0), o && x.merge(a, Ft(i, "script"))), t.call(this[u], i, u);
                if (o) for (s = a[a.length - 1].ownerDocument, x.map(a, qt), u = 0; o > u; u++) i = a[u], kt.test(i.type || "") && !x._data(i, "globalEval") && x.contains(s, i) && (i.src ? x._evalUrl(i.src) : x.globalEval((i.text || i.textContent || i.innerHTML || "").replace(St, "")));
                l = r = null
            }
            return this
        }
    });

    function Lt(e, t) {
        return x.nodeName(e, "table") && x.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function Ht(e) {
        return e.type = (null !== x.find.attr(e, "type")) + "/" + e.type, e
    }

    function qt(e) {
        var t = Et.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function _t(e, t) {
        var n, r = 0;
        for (; null != (n = e[r]); r++) x._data(n, "globalEval", !t || x._data(t[r], "globalEval"))
    }

    function Mt(e, t) {
        if (1 === t.nodeType && x.hasData(e)) {
            var n, r, i, o = x._data(e), a = x._data(t, o), s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s) for (r = 0, i = s[n].length; i > r; r++) x.event.add(t, n, s[n][r])
            }
            a.data && (a.data = x.extend({}, a.data))
        }
    }

    function Ot(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !x.support.noCloneEvent && t[x.expando]) {
                i = x._data(t);
                for (r in i.events) x.removeEvent(t, r, i.handle);
                t.removeAttribute(x.expando)
            }
            "script" === n && t.text !== e.text ? (Ht(t).text = e.text, qt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), x.support.html5Clone && e.innerHTML && !x.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ct.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }

    x.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        x.fn[e] = function (e) {
            var n, r = 0, i = [], o = x(e), a = o.length - 1;
            for (; a >= r; r++) n = r === a ? this : this.clone(!0), x(o[r])[t](n), h.apply(i, n.get());
            return this.pushStack(i)
        }
    });

    function Ft(e, n) {
        var r, o, a = 0,
            s = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
        if (!s) for (s = [], r = e.childNodes || e; null != (o = r[a]); a++) !n || x.nodeName(o, n) ? s.push(o) : x.merge(s, Ft(o, n));
        return n === t || n && x.nodeName(e, n) ? x.merge([e], s) : s
    }

    function Bt(e) {
        Ct.test(e.type) && (e.defaultChecked = e.checked)
    }

    x.extend({
        clone: function (e, t, n) {
            var r, i, o, a, s, l = x.contains(e.ownerDocument, e);
            if (x.support.html5Clone || x.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Dt.innerHTML = e.outerHTML, Dt.removeChild(o = Dt.firstChild)), !(x.support.noCloneEvent && x.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e))) for (r = Ft(o), s = Ft(e), a = 0; null != (i = s[a]); ++a) r[a] && Ot(i, r[a]);
            if (t) if (n) for (s = s || Ft(e), r = r || Ft(o), a = 0; null != (i = s[a]); a++) Mt(i, r[a]); else Mt(e, o);
            return r = Ft(o, "script"), r.length > 0 && _t(r, !l && Ft(e, "script")), r = s = i = null, o
        }, buildFragment: function (e, t, n, r) {
            var i, o, a, s, l, u, c, p = e.length, f = dt(t), d = [], h = 0;
            for (; p > h; h++) if (o = e[h], o || 0 === o) if ("object" === x.type(o)) x.merge(d, o.nodeType ? [o] : o); else if (wt.test(o)) {
                s = s || f.appendChild(t.createElement("div")), l = (bt.exec(o) || ["", ""])[1].toLowerCase(), c = At[l] || At._default, s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2], i = c[0];
                while (i--) s = s.lastChild;
                if (!x.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])), !x.support.tbody) {
                    o = "table" !== l || xt.test(o) ? "<table>" !== c[1] || xt.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length;
                    while (i--) x.nodeName(u = o.childNodes[i], "tbody") && !u.childNodes.length && o.removeChild(u)
                }
                x.merge(d, s.childNodes), s.textContent = "";
                while (s.firstChild) s.removeChild(s.firstChild);
                s = f.lastChild
            } else d.push(t.createTextNode(o));
            s && f.removeChild(s), x.support.appendChecked || x.grep(Ft(d, "input"), Bt), h = 0;
            while (o = d[h++]) if ((!r || -1 === x.inArray(o, r)) && (a = x.contains(o.ownerDocument, o), s = Ft(f.appendChild(o), "script"), a && _t(s), n)) {
                i = 0;
                while (o = s[i++]) kt.test(o.type || "") && n.push(o)
            }
            return s = null, f
        }, cleanData: function (e, t) {
            var n, r, o, a, s = 0, l = x.expando, u = x.cache, c = x.support.deleteExpando, f = x.event.special;
            for (; null != (n = e[s]); s++) if ((t || x.acceptData(n)) && (o = n[l], a = o && u[o])) {
                if (a.events) for (r in a.events) f[r] ? x.event.remove(n, r) : x.removeEvent(n, r, a.handle);
                u[o] && (delete u[o], c ? delete n[l] : typeof n.removeAttribute !== i ? n.removeAttribute(l) : n[l] = null, p.push(o))
            }
        }, _evalUrl: function (e) {
            return x.ajax({url: e, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
        }
    }), x.fn.extend({
        wrapAll: function (e) {
            if (x.isFunction(e)) return this.each(function (t) {
                x(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = x(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    var e = this;
                    while (e.firstChild && 1 === e.firstChild.nodeType) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        }, wrapInner: function (e) {
            return x.isFunction(e) ? this.each(function (t) {
                x(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = x(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        }, wrap: function (e) {
            var t = x.isFunction(e);
            return this.each(function (n) {
                x(this).wrapAll(t ? e.call(this, n) : e)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                x.nodeName(this, "body") || x(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var Pt, Rt, Wt, $t = /alpha\([^)]*\)/i, It = /opacity\s*=\s*([^)]*)/, zt = /^(top|right|bottom|left)$/,
        Xt = /^(none|table(?!-c[ea]).+)/, Ut = /^margin/, Vt = RegExp("^(" + w + ")(.*)$", "i"),
        Yt = RegExp("^(" + w + ")(?!px)[a-z%]+$", "i"), Jt = RegExp("^([+-])=(" + w + ")", "i"), Gt = {BODY: "block"},
        Qt = {position: "absolute", visibility: "hidden", display: "block"}, Kt = {letterSpacing: 0, fontWeight: 400},
        Zt = ["Top", "Right", "Bottom", "Left"], en = ["Webkit", "O", "Moz", "ms"];

    function tn(e, t) {
        if (t in e) return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = en.length;
        while (i--) if (t = en[i] + n, t in e) return t;
        return r
    }

    function nn(e, t) {
        return e = t || e, "none" === x.css(e, "display") || !x.contains(e.ownerDocument, e)
    }

    function rn(e, t) {
        var n, r, i, o = [], a = 0, s = e.length;
        for (; s > a; a++) r = e[a], r.style && (o[a] = x._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && nn(r) && (o[a] = x._data(r, "olddisplay", ln(r.nodeName)))) : o[a] || (i = nn(r), (n && "none" !== n || !i) && x._data(r, "olddisplay", i ? n : x.css(r, "display"))));
        for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }

    x.fn.extend({
        css: function (e, n) {
            return x.access(this, function (e, n, r) {
                var i, o, a = {}, s = 0;
                if (x.isArray(n)) {
                    for (o = Rt(e), i = n.length; i > s; s++) a[n[s]] = x.css(e, n[s], !1, o);
                    return a
                }
                return r !== t ? x.style(e, n, r) : x.css(e, n)
            }, e, n, arguments.length > 1)
        }, show: function () {
            return rn(this, !0)
        }, hide: function () {
            return rn(this)
        }, toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                nn(this) ? x(this).show() : x(this).hide()
            })
        }
    }), x.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Wt(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": x.support.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s, l = x.camelCase(n), u = e.style;
                if (n = x.cssProps[l] || (x.cssProps[l] = tn(u, l)), s = x.cssHooks[n] || x.cssHooks[l], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : u[n];
                if (a = typeof r, "string" === a && (o = Jt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(x.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || x.cssNumber[l] || (r += "px"), x.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (u[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) try {
                    u[n] = r
                } catch (c) {
                }
            }
        },
        css: function (e, n, r, i) {
            var o, a, s, l = x.camelCase(n);
            return n = x.cssProps[l] || (x.cssProps[l] = tn(e.style, l)), s = x.cssHooks[n] || x.cssHooks[l], s && "get" in s && (a = s.get(e, !0, r)), a === t && (a = Wt(e, n, i)), "normal" === a && n in Kt && (a = Kt[n]), "" === r || r ? (o = parseFloat(a), r === !0 || x.isNumeric(o) ? o || 0 : a) : a
        }
    }), e.getComputedStyle ? (Rt = function (t) {
        return e.getComputedStyle(t, null)
    }, Wt = function (e, n, r) {
        var i, o, a, s = r || Rt(e), l = s ? s.getPropertyValue(n) || s[n] : t, u = e.style;
        return s && ("" !== l || x.contains(e.ownerDocument, e) || (l = x.style(e, n)), Yt.test(l) && Ut.test(n) && (i = u.width, o = u.minWidth, a = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = s.width, u.width = i, u.minWidth = o, u.maxWidth = a)), l
    }) : a.documentElement.currentStyle && (Rt = function (e) {
        return e.currentStyle
    }, Wt = function (e, n, r) {
        var i, o, a, s = r || Rt(e), l = s ? s[n] : t, u = e.style;
        return null == l && u && u[n] && (l = u[n]), Yt.test(l) && !zt.test(n) && (i = u.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), u.left = "fontSize" === n ? "1em" : l, l = u.pixelLeft + "px", u.left = i, a && (o.left = a)), "" === l ? "auto" : l
    });

    function on(e, t, n) {
        var r = Vt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function an(e, t, n, r, i) {
        var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0;
        for (; 4 > o; o += 2) "margin" === n && (a += x.css(e, n + Zt[o], !0, i)), r ? ("content" === n && (a -= x.css(e, "padding" + Zt[o], !0, i)), "margin" !== n && (a -= x.css(e, "border" + Zt[o] + "Width", !0, i))) : (a += x.css(e, "padding" + Zt[o], !0, i), "padding" !== n && (a += x.css(e, "border" + Zt[o] + "Width", !0, i)));
        return a
    }

    function sn(e, t, n) {
        var r = !0, i = "width" === t ? e.offsetWidth : e.offsetHeight, o = Rt(e),
            a = x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = Wt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Yt.test(i)) return i;
            r = a && (x.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + an(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }

    function ln(e) {
        var t = a, n = Gt[e];
        return n || (n = un(e, t), "none" !== n && n || (Pt = (Pt || x("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (Pt[0].contentWindow || Pt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = un(e, t), Pt.detach()), Gt[e] = n), n
    }

    function un(e, t) {
        var n = x(t.createElement(e)).appendTo(t.body), r = x.css(n[0], "display");
        return n.remove(), r
    }

    x.each(["height", "width"], function (e, n) {
        x.cssHooks[n] = {
            get: function (e, r, i) {
                return r ? 0 === e.offsetWidth && Xt.test(x.css(e, "display")) ? x.swap(e, Qt, function () {
                    return sn(e, n, i)
                }) : sn(e, n, i) : t
            }, set: function (e, t, r) {
                var i = r && Rt(e);
                return on(e, t, r ? an(e, n, r, x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), x.support.opacity || (x.cssHooks.opacity = {
        get: function (e, t) {
            return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        }, set: function (e, t) {
            var n = e.style, r = e.currentStyle, i = x.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === x.trim(o.replace($t, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = $t.test(o) ? o.replace($t, i) : o + " " + i)
        }
    }), x(function () {
        x.support.reliableMarginRight || (x.cssHooks.marginRight = {
            get: function (e, n) {
                return n ? x.swap(e, {display: "inline-block"}, Wt, [e, "marginRight"]) : t
            }
        }), !x.support.pixelPosition && x.fn.position && x.each(["top", "left"], function (e, n) {
            x.cssHooks[n] = {
                get: function (e, r) {
                    return r ? (r = Wt(e, n), Yt.test(r) ? x(e).position()[n] + "px" : r) : t
                }
            }
        })
    }), x.expr && x.expr.filters && (x.expr.filters.hidden = function (e) {
        return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !x.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || x.css(e, "display"))
    }, x.expr.filters.visible = function (e) {
        return !x.expr.filters.hidden(e)
    }), x.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        x.cssHooks[e + t] = {
            expand: function (n) {
                var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n];
                for (; 4 > r; r++) i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, Ut.test(e) || (x.cssHooks[e + t].set = on)
    });
    var cn = /%20/g, pn = /\[\]$/, fn = /\r?\n/g, dn = /^(?:submit|button|image|reset|file)$/i,
        hn = /^(?:input|select|textarea|keygen)/i;
    x.fn.extend({
        serialize: function () {
            return x.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = x.prop(this, "elements");
                return e ? x.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !x(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Ct.test(e))
            }).map(function (e, t) {
                var n = x(this).val();
                return null == n ? null : x.isArray(n) ? x.map(n, function (e) {
                    return {name: t.name, value: e.replace(fn, "\r\n")}
                }) : {name: t.name, value: n.replace(fn, "\r\n")}
            }).get()
        }
    }), x.param = function (e, n) {
        var r, i = [], o = function (e, t) {
            t = x.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (n === t && (n = x.ajaxSettings && x.ajaxSettings.traditional), x.isArray(e) || e.jquery && !x.isPlainObject(e)) x.each(e, function () {
            o(this.name, this.value)
        }); else for (r in e) gn(r, e[r], n, o);
        return i.join("&").replace(cn, "+")
    };

    function gn(e, t, n, r) {
        var i;
        if (x.isArray(t)) x.each(t, function (t, i) {
            n || pn.test(e) ? r(e, i) : gn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        }); else if (n || "object" !== x.type(t)) r(e, t); else for (i in t) gn(e + "[" + i + "]", t[i], n, r)
    }

    x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        x.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), x.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }, bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        }, undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var mn, yn, vn = x.now(), bn = /\?/, xn = /#.*$/, wn = /([?&])_=[^&]*/, Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Cn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Nn = /^(?:GET|HEAD)$/, kn = /^\/\//,
        En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Sn = x.fn.load, An = {}, jn = {}, Dn = "*/".concat("*");
    try {
        yn = o.href
    } catch (Ln) {
        yn = a.createElement("a"), yn.href = "", yn = yn.href
    }
    mn = En.exec(yn.toLowerCase()) || [];

    function Hn(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0, o = t.toLowerCase().match(T) || [];
            if (x.isFunction(n)) while (r = o[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function qn(e, n, r, i) {
        var o = {}, a = e === jn;

        function s(l) {
            var u;
            return o[l] = !0, x.each(e[l] || [], function (e, l) {
                var c = l(n, r, i);
                return "string" != typeof c || a || o[c] ? a ? !(u = c) : t : (n.dataTypes.unshift(c), s(c), !1)
            }), u
        }

        return s(n.dataTypes[0]) || !o["*"] && s("*")
    }

    function _n(e, n) {
        var r, i, o = x.ajaxSettings.flatOptions || {};
        for (i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
        return r && x.extend(!0, e, r), e
    }

    x.fn.load = function (e, n, r) {
        if ("string" != typeof e && Sn) return Sn.apply(this, arguments);
        var i, o, a, s = this, l = e.indexOf(" ");
        return l >= 0 && (i = e.slice(l, e.length), e = e.slice(0, l)), x.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && x.ajax({
            url: e,
            type: a,
            dataType: "html",
            data: n
        }).done(function (e) {
            o = arguments, s.html(i ? x("<div>").append(x.parseHTML(e)).find(i) : e)
        }).complete(r && function (e, t) {
            s.each(r, o || [e.responseText, t, e])
        }), this
    }, x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        x.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), x.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: yn,
            type: "GET",
            isLocal: Cn.test(mn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Dn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": x.parseJSON, "text xml": x.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? _n(_n(e, x.ajaxSettings), t) : _n(x.ajaxSettings, e)
        },
        ajaxPrefilter: Hn(An),
        ajaxTransport: Hn(jn),
        ajax: function (e, n) {
            "object" == typeof e && (n = e, e = t), n = n || {};
            var r, i, o, a, s, l, u, c, p = x.ajaxSetup({}, n), f = p.context || p,
                d = p.context && (f.nodeType || f.jquery) ? x(f) : x.event, h = x.Deferred(),
                g = x.Callbacks("once memory"), m = p.statusCode || {}, y = {}, v = {}, b = 0, w = "canceled", C = {
                    readyState: 0, getResponseHeader: function (e) {
                        var t;
                        if (2 === b) {
                            if (!c) {
                                c = {};
                                while (t = Tn.exec(a)) c[t[1].toLowerCase()] = t[2]
                            }
                            t = c[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    }, getAllResponseHeaders: function () {
                        return 2 === b ? a : null
                    }, setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return b || (e = v[n] = v[n] || e, y[e] = t), this
                    }, overrideMimeType: function (e) {
                        return b || (p.mimeType = e), this
                    }, statusCode: function (e) {
                        var t;
                        if (e) if (2 > b) for (t in e) m[t] = [m[t], e[t]]; else C.always(e[C.status]);
                        return this
                    }, abort: function (e) {
                        var t = e || w;
                        return u && u.abort(t), k(0, t), this
                    }
                };
            if (h.promise(C).complete = g.add, C.success = C.done, C.error = C.fail, p.url = ((e || p.url || yn) + "").replace(xn, "").replace(kn, mn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = x.trim(p.dataType || "*").toLowerCase().match(T) || [""], null == p.crossDomain && (r = En.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (mn[3] || ("http:" === mn[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = x.param(p.data, p.traditional)), qn(An, p, n, C), 2 === b) return C;
            l = p.global, l && 0 === x.active++ && x.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Nn.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (bn.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + vn++) : o + (bn.test(o) ? "&" : "?") + "_=" + vn++)), p.ifModified && (x.lastModified[o] && C.setRequestHeader("If-Modified-Since", x.lastModified[o]), x.etag[o] && C.setRequestHeader("If-None-Match", x.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", p.contentType), C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01" : "") : p.accepts["*"]);
            for (i in p.headers) C.setRequestHeader(i, p.headers[i]);
            if (p.beforeSend && (p.beforeSend.call(f, C, p) === !1 || 2 === b)) return C.abort();
            w = "abort";
            for (i in {success: 1, error: 1, complete: 1}) C[i](p[i]);
            if (u = qn(jn, p, n, C)) {
                C.readyState = 1, l && d.trigger("ajaxSend", [C, p]), p.async && p.timeout > 0 && (s = setTimeout(function () {
                    C.abort("timeout")
                }, p.timeout));
                try {
                    b = 1, u.send(y, k)
                } catch (N) {
                    if (!(2 > b)) throw N;
                    k(-1, N)
                }
            } else k(-1, "No Transport");

            function k(e, n, r, i) {
                var c, y, v, w, T, N = n;
                2 !== b && (b = 2, s && clearTimeout(s), u = t, a = i || "", C.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, r && (w = Mn(p, C, r)), w = On(p, w, C, c), c ? (p.ifModified && (T = C.getResponseHeader("Last-Modified"), T && (x.lastModified[o] = T), T = C.getResponseHeader("etag"), T && (x.etag[o] = T)), 204 === e || "HEAD" === p.type ? N = "nocontent" : 304 === e ? N = "notmodified" : (N = w.state, y = w.data, v = w.error, c = !v)) : (v = N, (e || !N) && (N = "error", 0 > e && (e = 0))), C.status = e, C.statusText = (n || N) + "", c ? h.resolveWith(f, [y, N, C]) : h.rejectWith(f, [C, N, v]), C.statusCode(m), m = t, l && d.trigger(c ? "ajaxSuccess" : "ajaxError", [C, p, c ? y : v]), g.fireWith(f, [C, N]), l && (d.trigger("ajaxComplete", [C, p]), --x.active || x.event.trigger("ajaxStop")))
            }

            return C
        },
        getJSON: function (e, t, n) {
            return x.get(e, t, n, "json")
        },
        getScript: function (e, n) {
            return x.get(e, t, n, "script")
        }
    }), x.each(["get", "post"], function (e, n) {
        x[n] = function (e, r, i, o) {
            return x.isFunction(r) && (o = o || i, i = r, r = t), x.ajax({
                url: e,
                type: n,
                dataType: o,
                data: r,
                success: i
            })
        }
    });

    function Mn(e, n, r) {
        var i, o, a, s, l = e.contents, u = e.dataTypes;
        while ("*" === u[0]) u.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
        if (o) for (s in l) if (l[s] && l[s].test(o)) {
            u.unshift(s);
            break
        }
        if (u[0] in r) a = u[0]; else {
            for (s in r) {
                if (!u[0] || e.converters[s + " " + u[0]]) {
                    a = s;
                    break
                }
                i || (i = s)
            }
            a = a || i
        }
        return a ? (a !== u[0] && u.unshift(a), r[a]) : t
    }

    function On(e, t, n, r) {
        var i, o, a, s, l, u = {}, c = e.dataTypes.slice();
        if (c[1]) for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
        o = c.shift();
        while (o) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift()) if ("*" === o) o = l; else if ("*" !== l && l !== o) {
            if (a = u[l + " " + o] || u["* " + o], !a) for (i in u) if (s = i.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                a === !0 ? a = u[i] : u[i] !== !0 && (o = s[0], c.unshift(s[1]));
                break
            }
            if (a !== !0) if (a && e["throws"]) t = a(t); else try {
                t = a(t)
            } catch (p) {
                return {state: "parsererror", error: a ? p : "No conversion from " + l + " to " + o}
            }
        }
        return {state: "success", data: t}
    }

    x.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /(?:java|ecma)script/},
        converters: {
            "text script": function (e) {
                return x.globalEval(e), e
            }
        }
    }), x.ajaxPrefilter("script", function (e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), x.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var n, r = a.head || x("head")[0] || a.documentElement;
            return {
                send: function (t, i) {
                    n = a.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, t) {
                        (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
                    }, r.insertBefore(n, r.firstChild)
                }, abort: function () {
                    n && n.onload(t, !0)
                }
            }
        }
    });
    var Fn = [], Bn = /(=)\?(?=&|$)|\?\?/;
    x.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = Fn.pop() || x.expando + "_" + vn++;
            return this[e] = !0, e
        }
    }), x.ajaxPrefilter("json jsonp", function (n, r, i) {
        var o, a, s,
            l = n.jsonp !== !1 && (Bn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data");
        return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = x.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Bn, "$1" + o) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function () {
            return s || x.error(o + " was not called"), s[0]
        }, n.dataTypes[0] = "json", a = e[o], e[o] = function () {
            s = arguments
        }, i.always(function () {
            e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, Fn.push(o)), s && x.isFunction(a) && a(s[0]), s = a = t
        }), "script") : t
    });
    var Pn, Rn, Wn = 0, $n = e.ActiveXObject && function () {
        var e;
        for (e in Pn) Pn[e](t, !0)
    };

    function In() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {
        }
    }

    function zn() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {
        }
    }

    x.ajaxSettings.xhr = e.ActiveXObject ? function () {
        return !this.isLocal && In() || zn()
    } : In, Rn = x.ajaxSettings.xhr(), x.support.cors = !!Rn && "withCredentials" in Rn, Rn = x.support.ajax = !!Rn, Rn && x.ajaxTransport(function (n) {
        if (!n.crossDomain || x.support.cors) {
            var r;
            return {
                send: function (i, o) {
                    var a, s, l = n.xhr();
                    if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields) for (s in n.xhrFields) l[s] = n.xhrFields[s];
                    n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in i) l.setRequestHeader(s, i[s])
                    } catch (u) {
                    }
                    l.send(n.hasContent && n.data || null), r = function (e, i) {
                        var s, u, c, p;
                        try {
                            if (r && (i || 4 === l.readyState)) if (r = t, a && (l.onreadystatechange = x.noop, $n && delete Pn[a]), i) 4 !== l.readyState && l.abort(); else {
                                p = {}, s = l.status, u = l.getAllResponseHeaders(), "string" == typeof l.responseText && (p.text = l.responseText);
                                try {
                                    c = l.statusText
                                } catch (f) {
                                    c = ""
                                }
                                s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404
                            }
                        } catch (d) {
                            i || o(-1, d)
                        }
                        p && o(s, c, p, u)
                    }, n.async ? 4 === l.readyState ? setTimeout(r) : (a = ++Wn, $n && (Pn || (Pn = {}, x(e).unload($n)), Pn[a] = r), l.onreadystatechange = r) : r()
                }, abort: function () {
                    r && r(t, !0)
                }
            }
        }
    });
    var Xn, Un, Vn = /^(?:toggle|show|hide)$/, Yn = RegExp("^(?:([+-])=|)(" + w + ")([a-z%]*)$", "i"),
        Jn = /queueHooks$/, Gn = [nr], Qn = {
            "*": [function (e, t) {
                var n = this.createTween(e, t), r = n.cur(), i = Yn.exec(t), o = i && i[3] || (x.cssNumber[e] ? "" : "px"),
                    a = (x.cssNumber[e] || "px" !== o && +r) && Yn.exec(x.css(n.elem, e)), s = 1, l = 20;
                if (a && a[3] !== o) {
                    o = o || a[3], i = i || [], a = +r || 1;
                    do s = s || ".5", a /= s, x.style(n.elem, e, a + o); while (s !== (s = n.cur() / r) && 1 !== s && --l)
                }
                return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
            }]
        };

    function Kn() {
        return setTimeout(function () {
            Xn = t
        }), Xn = x.now()
    }

    function Zn(e, t, n) {
        var r, i = (Qn[t] || []).concat(Qn["*"]), o = 0, a = i.length;
        for (; a > o; o++) if (r = i[o].call(n, t, e)) return r
    }

    function er(e, t, n) {
        var r, i, o = 0, a = Gn.length, s = x.Deferred().always(function () {
            delete l.elem
        }), l = function () {
            if (i) return !1;
            var t = Xn || Kn(), n = Math.max(0, u.startTime + u.duration - t), r = n / u.duration || 0, o = 1 - r,
                a = 0, l = u.tweens.length;
            for (; l > a; a++) u.tweens[a].run(o);
            return s.notifyWith(e, [u, o, n]), 1 > o && l ? n : (s.resolveWith(e, [u]), !1)
        }, u = s.promise({
            elem: e,
            props: x.extend({}, t),
            opts: x.extend(!0, {specialEasing: {}}, n),
            originalProperties: t,
            originalOptions: n,
            startTime: Xn || Kn(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
                var r = x.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                return u.tweens.push(r), r
            },
            stop: function (t) {
                var n = 0, r = t ? u.tweens.length : 0;
                if (i) return this;
                for (i = !0; r > n; n++) u.tweens[n].run(1);
                return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this
            }
        }), c = u.props;
        for (tr(c, u.opts.specialEasing); a > o; o++) if (r = Gn[o].call(u, e, c, u.opts)) return r;
        return x.map(c, Zn, u), x.isFunction(u.opts.start) && u.opts.start.call(e, u), x.fx.timer(x.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function tr(e, t) {
        var n, r, i, o, a;
        for (n in e) if (r = x.camelCase(n), i = t[r], o = e[n], x.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = x.cssHooks[r], a && "expand" in a) {
            o = a.expand(o), delete e[r];
            for (n in o) n in e || (e[n] = o[n], t[n] = i)
        } else t[r] = i
    }

    x.Animation = x.extend(er, {
        tweener: function (e, t) {
            x.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            var n, r = 0, i = e.length;
            for (; i > r; r++) n = e[r], Qn[n] = Qn[n] || [], Qn[n].unshift(t)
        }, prefilter: function (e, t) {
            t ? Gn.unshift(e) : Gn.push(e)
        }
    });

    function nr(e, t, n) {
        var r, i, o, a, s, l, u = this, c = {}, p = e.style, f = e.nodeType && nn(e), d = x._data(e, "fxshow");
        n.queue || (s = x._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
            s.unqueued || l()
        }), s.unqueued++, u.always(function () {
            u.always(function () {
                s.unqueued--, x.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === x.css(e, "display") && "none" === x.css(e, "float") && (x.support.inlineBlockNeedsLayout && "inline" !== ln(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", x.support.shrinkWrapBlocks || u.always(function () {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (r in t) if (i = t[r], Vn.exec(i)) {
            if (delete t[r], o = o || "toggle" === i, i === (f ? "hide" : "show")) continue;
            c[r] = d && d[r] || x.style(e, r)
        }
        if (!x.isEmptyObject(c)) {
            d ? "hidden" in d && (f = d.hidden) : d = x._data(e, "fxshow", {}), o && (d.hidden = !f), f ? x(e).show() : u.done(function () {
                x(e).hide()
            }), u.done(function () {
                var t;
                x._removeData(e, "fxshow");
                for (t in c) x.style(e, t, c[t])
            });
            for (r in c) a = Zn(f ? d[r] : 0, r, u), r in d || (d[r] = a.start, f && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function rr(e, t, n, r, i) {
        return new rr.prototype.init(e, t, n, r, i)
    }

    x.Tween = rr, rr.prototype = {
        constructor: rr, init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (x.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var e = rr.propHooks[this.prop];
            return e && e.get ? e.get(this) : rr.propHooks._default.get(this)
        }, run: function (e) {
            var t, n = rr.propHooks[this.prop];
            return this.pos = t = this.options.duration ? x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this
        }
    }, rr.prototype.init.prototype = rr.prototype, rr.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = x.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            }, set: function (e) {
                x.fx.step[e.prop] ? x.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[x.cssProps[e.prop]] || x.cssHooks[e.prop]) ? x.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, x.each(["toggle", "show", "hide"], function (e, t) {
        var n = x.fn[t];
        x.fn[t] = function (e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i)
        }
    }), x.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(nn).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
        }, animate: function (e, t, n, r) {
            var i = x.isEmptyObject(e), o = x.speed(t, n, r), a = function () {
                var t = er(this, x.extend({}, e), o);
                (i || x._data(this, "finish")) && t.stop(!0)
            };
            return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        }, stop: function (e, n, r) {
            var i = function (e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                var t = !0, n = null != e && e + "queueHooks", o = x.timers, a = x._data(this);
                if (n) a[n] && a[n].stop && i(a[n]); else for (n in a) a[n] && a[n].stop && Jn.test(n) && i(a[n]);
                for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
                (t || !r) && x.dequeue(this, e)
            })
        }, finish: function (e) {
            return e !== !1 && (e = e || "fx"), this.each(function () {
                var t, n = x._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = x.timers,
                    a = r ? r.length : 0;
                for (n.finish = !0, x.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    });

    function ir(e, t) {
        var n, r = {height: e}, i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Zt[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    x.each({
        slideDown: ir("show"),
        slideUp: ir("hide"),
        slideToggle: ir("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, t) {
        x.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), x.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? x.extend({}, e) : {
            complete: n || !n && t || x.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !x.isFunction(t) && t
        };
        return r.duration = x.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in x.fx.speeds ? x.fx.speeds[r.duration] : x.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            x.isFunction(r.old) && r.old.call(this), r.queue && x.dequeue(this, r.queue)
        }, r
    }, x.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, x.timers = [], x.fx = rr.prototype.init, x.fx.tick = function () {
        var e, n = x.timers, r = 0;
        for (Xn = x.now(); n.length > r; r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1);
        n.length || x.fx.stop(), Xn = t
    }, x.fx.timer = function (e) {
        e() && x.timers.push(e) && x.fx.start()
    }, x.fx.interval = 13, x.fx.start = function () {
        Un || (Un = setInterval(x.fx.tick, x.fx.interval))
    }, x.fx.stop = function () {
        clearInterval(Un), Un = null
    }, x.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, x.fx.step = {}, x.expr && x.expr.filters && (x.expr.filters.animated = function (e) {
        return x.grep(x.timers, function (t) {
            return e === t.elem
        }).length
    }), x.fn.offset = function (e) {
        if (arguments.length) return e === t ? this : this.each(function (t) {
            x.offset.setOffset(this, e, t)
        });
        var n, r, o = {top: 0, left: 0}, a = this[0], s = a && a.ownerDocument;
        if (s) return n = s.documentElement, x.contains(n, a) ? (typeof a.getBoundingClientRect !== i && (o = a.getBoundingClientRect()), r = or(s), {
            top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : o
    }, x.offset = {
        setOffset: function (e, t, n) {
            var r = x.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i = x(e), o = i.offset(), a = x.css(e, "top"), s = x.css(e, "left"),
                l = ("absolute" === r || "fixed" === r) && x.inArray("auto", [a, s]) > -1, u = {}, c = {}, p, f;
            l ? (c = i.position(), p = c.top, f = c.left) : (p = parseFloat(a) || 0, f = parseFloat(s) || 0), x.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (u.top = t.top - o.top + p), null != t.left && (u.left = t.left - o.left + f), "using" in t ? t.using.call(e, u) : i.css(u)
        }
    }, x.fn.extend({
        position: function () {
            if (this[0]) {
                var e, t, n = {top: 0, left: 0}, r = this[0];
                return "fixed" === x.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), x.nodeName(e[0], "html") || (n = e.offset()), n.top += x.css(e[0], "borderTopWidth", !0), n.left += x.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - x.css(r, "marginTop", !0),
                    left: t.left - n.left - x.css(r, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                var e = this.offsetParent || s;
                while (e && !x.nodeName(e, "html") && "static" === x.css(e, "position")) e = e.offsetParent;
                return e || s
            })
        }
    }), x.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, n) {
        var r = /Y/.test(n);
        x.fn[e] = function (i) {
            return x.access(this, function (e, i, o) {
                var a = or(e);
                return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? x(a).scrollLeft() : o, r ? o : x(a).scrollTop()) : e[i] = o, t)
            }, e, i, arguments.length, null)
        }
    });

    function or(e) {
        return x.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }

    x.each({Height: "height", Width: "width"}, function (e, n) {
        x.each({padding: "inner" + e, content: n, "": "outer" + e}, function (r, i) {
            x.fn[i] = function (i, o) {
                var a = arguments.length && (r || "boolean" != typeof i),
                    s = r || (i === !0 || o === !0 ? "margin" : "border");
                return x.access(this, function (n, r, i) {
                    var o;
                    return x.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? x.css(n, r, s) : x.style(n, r, i, s)
                }, n, a ? i : t, a, null)
            }
        })
    }), x.fn.size = function () {
        return this.length
    }, x.fn.andSelf = x.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = x : (e.jQuery = e.$ = x, "function" == typeof define && define.amd && define("jquery", [], function () {
        return x
    }))
})(window);
;
;
;/*!
* clipboard.js v1.7.1
* https://zenorocha.github.io/clipboard.js
*
* Licensed MIT © Zeno Rocha
*/
!function (t) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = t(); else if ("function" == typeof define && define.amd) define([], t); else {
        var e;
        e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, e.Clipboard = t()
    }
}(function () {
    var t, e, n;
    return function t(e, n, o) {
        function i(a, c) {
            if (!n[a]) {
                if (!e[a]) {
                    var l = "function" == typeof require && require;
                    if (!c && l) return l(a, !0);
                    if (r) return r(a, !0);
                    var s = new Error("Cannot find module '" + a + "'");
                    throw s.code = "MODULE_NOT_FOUND", s
                }
                var u = n[a] = {exports: {}};
                e[a][0].call(u.exports, function (t) {
                    var n = e[a][1][t];
                    return i(n || t)
                }, u, u.exports, t, e, n, o)
            }
            return n[a].exports
        }

        for (var r = "function" == typeof require && require, a = 0; a < o.length; a++) i(o[a]);
        return i
    }({
        1: [function (t, e, n) {
            function o(t, e) {
                for (; t && t.nodeType !== i;) {
                    if ("function" == typeof t.matches && t.matches(e)) return t;
                    t = t.parentNode
                }
            }

            var i = 9;
            if ("undefined" != typeof Element && !Element.prototype.matches) {
                var r = Element.prototype;
                r.matches = r.matchesSelector || r.mozMatchesSelector || r.msMatchesSelector || r.oMatchesSelector || r.webkitMatchesSelector
            }
            e.exports = o
        }, {}], 2: [function (t, e, n) {
            function o(t, e, n, o, r) {
                var a = i.apply(this, arguments);
                return t.addEventListener(n, a, r), {
                    destroy: function () {
                        t.removeEventListener(n, a, r)
                    }
                }
            }

            function i(t, e, n, o) {
                return function (n) {
                    n.delegateTarget = r(n.target, e), n.delegateTarget && o.call(t, n)
                }
            }

            var r = t("./closest");
            e.exports = o
        }, {"./closest": 1}], 3: [function (t, e, n) {
            n.node = function (t) {
                return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType
            }, n.nodeList = function (t) {
                var e = Object.prototype.toString.call(t);
                return void 0 !== t && ("[object NodeList]" === e || "[object HTMLCollection]" === e) && "length" in t && (0 === t.length || n.node(t[0]))
            }, n.string = function (t) {
                return "string" == typeof t || t instanceof String
            }, n.fn = function (t) {
                return "[object Function]" === Object.prototype.toString.call(t)
            }
        }, {}], 4: [function (t, e, n) {
            function o(t, e, n) {
                if (!t && !e && !n) throw new Error("Missing required arguments");
                if (!c.string(e)) throw new TypeError("Second argument must be a String");
                if (!c.fn(n)) throw new TypeError("Third argument must be a Function");
                if (c.node(t)) return i(t, e, n);
                if (c.nodeList(t)) return r(t, e, n);
                if (c.string(t)) return a(t, e, n);
                throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
            }

            function i(t, e, n) {
                return t.addEventListener(e, n), {
                    destroy: function () {
                        t.removeEventListener(e, n)
                    }
                }
            }

            function r(t, e, n) {
                return Array.prototype.forEach.call(t, function (t) {
                    t.addEventListener(e, n)
                }), {
                    destroy: function () {
                        Array.prototype.forEach.call(t, function (t) {
                            t.removeEventListener(e, n)
                        })
                    }
                }
            }

            function a(t, e, n) {
                return l(document.body, t, e, n)
            }

            var c = t("./is"), l = t("delegate");
            e.exports = o
        }, {"./is": 3, delegate: 2}], 5: [function (t, e, n) {
            function o(t) {
                var e;
                if ("SELECT" === t.nodeName) t.focus(), e = t.value; else if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName) {
                    var n = t.hasAttribute("readonly");
                    n || t.setAttribute("readonly", ""), t.select(), t.setSelectionRange(0, t.value.length), n || t.removeAttribute("readonly"), e = t.value
                } else {
                    t.hasAttribute("contenteditable") && t.focus();
                    var o = window.getSelection(), i = document.createRange();
                    i.selectNodeContents(t), o.removeAllRanges(), o.addRange(i), e = o.toString()
                }
                return e
            }

            e.exports = o
        }, {}], 6: [function (t, e, n) {
            function o() {
            }

            o.prototype = {
                on: function (t, e, n) {
                    var o = this.e || (this.e = {});
                    return (o[t] || (o[t] = [])).push({fn: e, ctx: n}), this
                }, once: function (t, e, n) {
                    function o() {
                        i.off(t, o), e.apply(n, arguments)
                    }

                    var i = this;
                    return o._ = e, this.on(t, o, n)
                }, emit: function (t) {
                    var e = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[t] || []).slice(), o = 0,
                        i = n.length;
                    for (o; o < i; o++) n[o].fn.apply(n[o].ctx, e);
                    return this
                }, off: function (t, e) {
                    var n = this.e || (this.e = {}), o = n[t], i = [];
                    if (o && e) for (var r = 0, a = o.length; r < a; r++) o[r].fn !== e && o[r].fn._ !== e && i.push(o[r]);
                    return i.length ? n[t] = i : delete n[t], this
                }
            }, e.exports = o
        }, {}], 7: [function (e, n, o) {
            !function (i, r) {
                if ("function" == typeof t && t.amd) t(["module", "select"], r); else if (void 0 !== o) r(n, e("select")); else {
                    var a = {exports: {}};
                    r(a, i.select), i.clipboardAction = a.exports
                }
            }(this, function (t, e) {
                "use strict";

                function n(t) {
                    return t && t.__esModule ? t : {default: t}
                }

                function o(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                var i = n(e), r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, a = function () {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var o = e[n];
                            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                        }
                    }

                    return function (e, n, o) {
                        return n && t(e.prototype, n), o && t(e, o), e
                    }
                }(), c = function () {
                    function t(e) {
                        o(this, t), this.resolveOptions(e), this.initSelection()
                    }

                    return a(t, [{
                        key: "resolveOptions", value: function t() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            this.action = e.action, this.container = e.container, this.emitter = e.emitter, this.target = e.target, this.text = e.text, this.trigger = e.trigger, this.selectedText = ""
                        }
                    }, {
                        key: "initSelection", value: function t() {
                            this.text ? this.selectFake() : this.target && this.selectTarget()
                        }
                    }, {
                        key: "selectFake", value: function t() {
                            var e = this, n = "rtl" == document.documentElement.getAttribute("dir");
                            this.removeFake(), this.fakeHandlerCallback = function () {
                                return e.removeFake()
                            }, this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[n ? "right" : "left"] = "-9999px";
                            var o = window.pageYOffset || document.documentElement.scrollTop;
                            this.fakeElem.style.top = o + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, this.container.appendChild(this.fakeElem), this.selectedText = (0, i.default)(this.fakeElem), this.copyText()
                        }
                    }, {
                        key: "removeFake", value: function t() {
                            this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (this.container.removeChild(this.fakeElem), this.fakeElem = null)
                        }
                    }, {
                        key: "selectTarget", value: function t() {
                            this.selectedText = (0, i.default)(this.target), this.copyText()
                        }
                    }, {
                        key: "copyText", value: function t() {
                            var e = void 0;
                            try {
                                e = document.execCommand(this.action)
                            } catch (t) {
                                e = !1
                            }
                            this.handleResult(e)
                        }
                    }, {
                        key: "handleResult", value: function t(e) {
                            this.emitter.emit(e ? "success" : "error", {
                                action: this.action,
                                text: this.selectedText,
                                trigger: this.trigger,
                                clearSelection: this.clearSelection.bind(this)
                            })
                        }
                    }, {
                        key: "clearSelection", value: function t() {
                            this.trigger && this.trigger.focus(), window.getSelection().removeAllRanges()
                        }
                    }, {
                        key: "destroy", value: function t() {
                            this.removeFake()
                        }
                    }, {
                        key: "action", set: function t() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "copy";
                            if (this._action = e, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"')
                        }, get: function t() {
                            return this._action
                        }
                    }, {
                        key: "target", set: function t(e) {
                            if (void 0 !== e) {
                                if (!e || "object" !== (void 0 === e ? "undefined" : r(e)) || 1 !== e.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                                if ("copy" === this.action && e.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                if ("cut" === this.action && (e.hasAttribute("readonly") || e.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                                this._target = e
                            }
                        }, get: function t() {
                            return this._target
                        }
                    }]), t
                }();
                t.exports = c
            })
        }, {select: 5}], 8: [function (e, n, o) {
            !function (i, r) {
                if ("function" == typeof t && t.amd) t(["module", "./clipboard-action", "tiny-emitter", "good-listener"], r); else if (void 0 !== o) r(n, e("./clipboard-action"), e("tiny-emitter"), e("good-listener")); else {
                    var a = {exports: {}};
                    r(a, i.clipboardAction, i.tinyEmitter, i.goodListener), i.clipboard = a.exports
                }
            }(this, function (t, e, n, o) {
                "use strict";

                function i(t) {
                    return t && t.__esModule ? t : {default: t}
                }

                function r(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function a(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }

                function c(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }

                function l(t, e) {
                    var n = "data-clipboard-" + t;
                    if (e.hasAttribute(n)) return e.getAttribute(n)
                }

                var s = i(e), u = i(n), f = i(o),
                    d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                        return typeof t
                    } : function (t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    }, h = function () {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var o = e[n];
                                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                            }
                        }

                        return function (e, n, o) {
                            return n && t(e.prototype, n), o && t(e, o), e
                        }
                    }(), p = function (t) {
                        function e(t, n) {
                            r(this, e);
                            var o = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                            return o.resolveOptions(n), o.listenClick(t), o
                        }

                        return c(e, t), h(e, [{
                            key: "resolveOptions", value: function t() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                this.action = "function" == typeof e.action ? e.action : this.defaultAction, this.target = "function" == typeof e.target ? e.target : this.defaultTarget, this.text = "function" == typeof e.text ? e.text : this.defaultText, this.container = "object" === d(e.container) ? e.container : document.body
                            }
                        }, {
                            key: "listenClick", value: function t(e) {
                                var n = this;
                                this.listener = (0, f.default)(e, "click", function (t) {
                                    return n.onClick(t)
                                })
                            }
                        }, {
                            key: "onClick", value: function t(e) {
                                var n = e.delegateTarget || e.currentTarget;
                                this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new s.default({
                                    action: this.action(n),
                                    target: this.target(n),
                                    text: this.text(n),
                                    container: this.container,
                                    trigger: n,
                                    emitter: this
                                })
                            }
                        }, {
                            key: "defaultAction", value: function t(e) {
                                return l("action", e)
                            }
                        }, {
                            key: "defaultTarget", value: function t(e) {
                                var n = l("target", e);
                                if (n) return document.querySelector(n)
                            }
                        }, {
                            key: "defaultText", value: function t(e) {
                                return l("text", e)
                            }
                        }, {
                            key: "destroy", value: function t() {
                                this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
                            }
                        }], [{
                            key: "isSupported", value: function t() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
                                    n = "string" == typeof e ? [e] : e, o = !!document.queryCommandSupported;
                                return n.forEach(function (t) {
                                    o = o && !!document.queryCommandSupported(t)
                                }), o
                            }
                        }]), e
                    }(u.default);
                t.exports = p
            })
        }, {"./clipboard-action": 7, "good-listener": 4, "tiny-emitter": 6}]
    }, {}, [8])(8)
});
;(function (e) {
    e.color = {}, e.color.make = function (t, n, r, i) {
        var s = {};
        return s.r = t || 0, s.g = n || 0, s.b = r || 0, s.a = i != null ? i : 1, s.add = function (e, t) {
            for (var n = 0; n < e.length; ++n) s[e.charAt(n)] += t;
            return s.normalize()
        }, s.scale = function (e, t) {
            for (var n = 0; n < e.length; ++n) s[e.charAt(n)] *= t;
            return s.normalize()
        }, s.toString = function () {
            return s.a >= 1 ? "rgb(" + [s.r, s.g, s.b].join(",") + ")" : "rgba(" + [s.r, s.g, s.b, s.a].join(",") + ")"
        }, s.normalize = function () {
            function e(e, t, n) {
                return t < e ? e : t > n ? n : t
            }

            return s.r = e(0, parseInt(s.r), 255), s.g = e(0, parseInt(s.g), 255), s.b = e(0, parseInt(s.b), 255), s.a = e(0, s.a, 1), s
        }, s.clone = function () {
            return e.color.make(s.r, s.b, s.g, s.a)
        }, s.normalize()
    }, e.color.extract = function (t, n) {
        var r;
        do {
            r = t.css(n).toLowerCase();
            if (r != "" && r != "transparent") break;
            t = t.parent()
        } while (!e.nodeName(t.get(0), "body"));
        return r == "rgba(0, 0, 0, 0)" && (r = "transparent"), e.color.parse(r)
    }, e.color.parse = function (n) {
        var r, i = e.color.make;
        if (r = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(n)) return i(parseInt(r[1], 10), parseInt(r[2], 10), parseInt(r[3], 10));
        if (r = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(n)) return i(parseInt(r[1], 10), parseInt(r[2], 10), parseInt(r[3], 10), parseFloat(r[4]));
        if (r = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(n)) return i(parseFloat(r[1]) * 2.55, parseFloat(r[2]) * 2.55, parseFloat(r[3]) * 2.55);
        if (r = /rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(n)) return i(parseFloat(r[1]) * 2.55, parseFloat(r[2]) * 2.55, parseFloat(r[3]) * 2.55, parseFloat(r[4]));
        if (r = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(n)) return i(parseInt(r[1], 16), parseInt(r[2], 16), parseInt(r[3], 16));
        if (r = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(n)) return i(parseInt(r[1] + r[1], 16), parseInt(r[2] + r[2], 16), parseInt(r[3] + r[3], 16));
        var s = e.trim(n).toLowerCase();
        return s == "transparent" ? i(255, 255, 255, 0) : (r = t[s] || [0, 0, 0], i(r[0], r[1], r[2]))
    };
    var t = {
        aqua: [0, 255, 255],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        black: [0, 0, 0],
        blue: [0, 0, 255],
        brown: [165, 42, 42],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgrey: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkviolet: [148, 0, 211],
        fuchsia: [255, 0, 255],
        gold: [255, 215, 0],
        green: [0, 128, 0],
        indigo: [75, 0, 130],
        khaki: [240, 230, 140],
        lightblue: [173, 216, 230],
        lightcyan: [224, 255, 255],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        navy: [0, 0, 128],
        olive: [128, 128, 0],
        orange: [255, 165, 0],
        pink: [255, 192, 203],
        purple: [128, 0, 128],
        violet: [128, 0, 128],
        red: [255, 0, 0],
        silver: [192, 192, 192],
        white: [255, 255, 255],
        yellow: [255, 255, 0]
    }
})(jQuery), function (e) {
    function n(t, n) {
        var r = n.children("." + t)[0];
        if (r == null) {
            r = document.createElement("canvas"), r.className = t, e(r).css({
                direction: "ltr",
                position: "absolute",
                left: 0,
                top: 0
            }).appendTo(n);
            if (!r.getContext) {
                if (!window.G_vmlCanvasManager) throw new Error("Canvas is not available. If you're using IE with a fall-back such as Excanvas, then there's either a mistake in your conditional include, or the page has no DOCTYPE and is rendering in Quirks Mode.");
                r = window.G_vmlCanvasManager.initElement(r)
            }
        }
        this.element = r;
        var i = this.context = r.getContext("2d"), s = window.devicePixelRatio || 1,
            o = i.webkitBackingStorePixelRatio || i.mozBackingStorePixelRatio || i.msBackingStorePixelRatio || i.oBackingStorePixelRatio || i.backingStorePixelRatio || 1;
        this.pixelRatio = s / o, this.resize(n.width(), n.height()), this.textContainer = null, this.text = {}, this._textCache = {}
    }

    function r(t, r, s, o) {
        function E(e, t) {
            t = [w].concat(t);
            for (var n = 0; n < e.length; ++n) e[n].apply(this, t)
        }

        function S() {
            var t = {Canvas: n};
            for (var r = 0; r < o.length; ++r) {
                var i = o[r];
                i.init(w, t), i.options && e.extend(!0, a, i.options)
            }
        }

        function x(n) {
            e.extend(!0, a, n), n && n.colors && (a.colors = n.colors), a.xaxis.color == null && (a.xaxis.color = e.color.parse(a.grid.color).scale("a", .22).toString()), a.yaxis.color == null && (a.yaxis.color = e.color.parse(a.grid.color).scale("a", .22).toString()), a.xaxis.tickColor == null && (a.xaxis.tickColor = a.grid.tickColor || a.xaxis.color), a.yaxis.tickColor == null && (a.yaxis.tickColor = a.grid.tickColor || a.yaxis.color), a.grid.borderColor == null && (a.grid.borderColor = a.grid.color), a.grid.tickColor == null && (a.grid.tickColor = e.color.parse(a.grid.color).scale("a", .22).toString());
            var r, i, s, o = {
                style: t.css("font-style"),
                size: Math.round(.8 * (+t.css("font-size").replace("px", "") || 13)),
                variant: t.css("font-variant"),
                weight: t.css("font-weight"),
                family: t.css("font-family")
            };
            o.lineHeight = o.size * 1.15, s = a.xaxes.length || 1;
            for (r = 0; r < s; ++r) i = a.xaxes[r], i && !i.tickColor && (i.tickColor = i.color), i = e.extend(!0, {}, a.xaxis, i), a.xaxes[r] = i, i.font && (i.font = e.extend({}, o, i.font), i.font.color || (i.font.color = i.color));
            s = a.yaxes.length || 1;
            for (r = 0; r < s; ++r) i = a.yaxes[r], i && !i.tickColor && (i.tickColor = i.color), i = e.extend(!0, {}, a.yaxis, i), a.yaxes[r] = i, i.font && (i.font = e.extend({}, o, i.font), i.font.color || (i.font.color = i.color));
            a.xaxis.noTicks && a.xaxis.ticks == null && (a.xaxis.ticks = a.xaxis.noTicks), a.yaxis.noTicks && a.yaxis.ticks == null && (a.yaxis.ticks = a.yaxis.noTicks), a.x2axis && (a.xaxes[1] = e.extend(!0, {}, a.xaxis, a.x2axis), a.xaxes[1].position = "top"), a.y2axis && (a.yaxes[1] = e.extend(!0, {}, a.yaxis, a.y2axis), a.yaxes[1].position = "right"), a.grid.coloredAreas && (a.grid.markings = a.grid.coloredAreas), a.grid.coloredAreasColor && (a.grid.markingsColor = a.grid.coloredAreasColor), a.lines && e.extend(!0, a.series.lines, a.lines), a.points && e.extend(!0, a.series.points, a.points), a.bars && e.extend(!0, a.series.bars, a.bars), a.shadowSize != null && (a.series.shadowSize = a.shadowSize), a.highlightColor != null && (a.series.highlightColor = a.highlightColor);
            for (r = 0; r < a.xaxes.length; ++r) O(d, r + 1).options = a.xaxes[r];
            for (r = 0; r < a.yaxes.length; ++r) O(v, r + 1).options = a.yaxes[r];
            for (var u in b) a.hooks[u] && a.hooks[u].length && (b[u] = b[u].concat(a.hooks[u]));
            E(b.processOptions, [a])
        }

        function T(e) {
            u = N(e), M(), _()
        }

        function N(t) {
            var n = [];
            for (var r = 0; r < t.length; ++r) {
                var i = e.extend(!0, {}, a.series);
                t[r].data != null ? (i.data = t[r].data, delete t[r].data, e.extend(!0, i, t[r]), t[r].data = i.data) : i.data = t[r], n.push(i)
            }
            return n
        }

        function C(e, t) {
            var n = e[t + "axis"];
            return typeof n == "object" && (n = n.n), typeof n != "number" && (n = 1), n
        }

        function k() {
            return e.grep(d.concat(v), function (e) {
                return e
            })
        }

        function L(e) {
            var t = {}, n, r;
            for (n = 0; n < d.length; ++n) r = d[n], r && r.used && (t["x" + r.n] = r.c2p(e.left));
            for (n = 0; n < v.length; ++n) r = v[n], r && r.used && (t["y" + r.n] = r.c2p(e.top));
            return t.x1 !== undefined && (t.x = t.x1), t.y1 !== undefined && (t.y = t.y1), t
        }

        function A(e) {
            var t = {}, n, r, i;
            for (n = 0; n < d.length; ++n) {
                r = d[n];
                if (r && r.used) {
                    i = "x" + r.n, e[i] == null && r.n == 1 && (i = "x");
                    if (e[i] != null) {
                        t.left = r.p2c(e[i]);
                        break
                    }
                }
            }
            for (n = 0; n < v.length; ++n) {
                r = v[n];
                if (r && r.used) {
                    i = "y" + r.n, e[i] == null && r.n == 1 && (i = "y");
                    if (e[i] != null) {
                        t.top = r.p2c(e[i]);
                        break
                    }
                }
            }
            return t
        }

        function O(t, n) {
            return t[n - 1] || (t[n - 1] = {
                n: n,
                direction: t == d ? "x" : "y",
                options: e.extend(!0, {}, t == d ? a.xaxis : a.yaxis)
            }), t[n - 1]
        }

        function M() {
            var t = u.length, n = -1, r;
            for (r = 0; r < u.length; ++r) {
                var i = u[r].color;
                i != null && (t--, typeof i == "number" && i > n && (n = i))
            }
            t <= n && (t = n + 1);
            var s, o = [], f = a.colors, l = f.length, c = 0;
            for (r = 0; r < t; r++) s = e.color.parse(f[r % l] || "#666"), r % l == 0 && r && (c >= 0 ? c < .5 ? c = -c - .2 : c = 0 : c = -c), o[r] = s.scale("rgb", 1 + c);
            var h = 0, p;
            for (r = 0; r < u.length; ++r) {
                p = u[r], p.color == null ? (p.color = o[h].toString(), ++h) : typeof p.color == "number" && (p.color = o[p.color].toString());
                if (p.lines.show == null) {
                    var m, g = !0;
                    for (m in p) if (p[m] && p[m].show) {
                        g = !1;
                        break
                    }
                    g && (p.lines.show = !0)
                }
                p.lines.zero == null && (p.lines.zero = !!p.lines.fill), p.xaxis = O(d, C(p, "x")), p.yaxis = O(v, C(p, "y"))
            }
        }

        function _() {
            function x(e, t, n) {
                t < e.datamin && t != -r && (e.datamin = t), n > e.datamax && n != r && (e.datamax = n)
            }

            var t = Number.POSITIVE_INFINITY, n = Number.NEGATIVE_INFINITY, r = Number.MAX_VALUE, i, s, o, a, f, l, c,
                h, p, d, v, m, g, y, w, S;
            e.each(k(), function (e, r) {
                r.datamin = t, r.datamax = n, r.used = !1
            });
            for (i = 0; i < u.length; ++i) l = u[i], l.datapoints = {points: []}, E(b.processRawData, [l, l.data, l.datapoints]);
            for (i = 0; i < u.length; ++i) {
                l = u[i], w = l.data, S = l.datapoints.format;
                if (!S) {
                    S = [], S.push({x: !0, number: !0, required: !0}), S.push({y: !0, number: !0, required: !0});
                    if (l.bars.show || l.lines.show && l.lines.fill) {
                        var T = !!(l.bars.show && l.bars.zero || l.lines.show && l.lines.zero);
                        S.push({
                            y: !0,
                            number: !0,
                            required: !1,
                            defaultValue: 0,
                            autoscale: T
                        }), l.bars.horizontal && (delete S[S.length - 1].y, S[S.length - 1].x = !0)
                    }
                    l.datapoints.format = S
                }
                if (l.datapoints.pointsize != null) continue;
                l.datapoints.pointsize = S.length, h = l.datapoints.pointsize, c = l.datapoints.points;
                var N = l.lines.show && l.lines.steps;
                l.xaxis.used = l.yaxis.used = !0;
                for (s = o = 0; s < w.length; ++s, o += h) {
                    y = w[s];
                    var C = y == null;
                    if (!C) for (a = 0; a < h; ++a) m = y[a], g = S[a], g && (g.number && m != null && (m = +m, isNaN(m) ? m = null : m == Infinity ? m = r : m == -Infinity && (m = -r)), m == null && (g.required && (C = !0), g.defaultValue != null && (m = g.defaultValue))), c[o + a] = m;
                    if (C) for (a = 0; a < h; ++a) m = c[o + a], m != null && (g = S[a], g.autoscale && (g.x && x(l.xaxis, m, m), g.y && x(l.yaxis, m, m))), c[o + a] = null; else if (N && o > 0 && c[o - h] != null && c[o - h] != c[o] && c[o - h + 1] != c[o + 1]) {
                        for (a = 0; a < h; ++a) c[o + h + a] = c[o + a];
                        c[o + 1] = c[o - h + 1], o += h
                    }
                }
            }
            for (i = 0; i < u.length; ++i) l = u[i], E(b.processDatapoints, [l, l.datapoints]);
            for (i = 0; i < u.length; ++i) {
                l = u[i], c = l.datapoints.points, h = l.datapoints.pointsize, S = l.datapoints.format;
                var L = t, A = t, O = n, M = n;
                for (s = 0; s < c.length; s += h) {
                    if (c[s] == null) continue;
                    for (a = 0; a < h; ++a) {
                        m = c[s + a], g = S[a];
                        if (!g || g.autoscale === !1 || m == r || m == -r) continue;
                        g.x && (m < L && (L = m), m > O && (O = m)), g.y && (m < A && (A = m), m > M && (M = m))
                    }
                }
                if (l.bars.show) {
                    var _;
                    switch (l.bars.align) {
                        case"left":
                            _ = 0;
                            break;
                        case"right":
                            _ = -l.bars.barWidth;
                            break;
                        case"center":
                            _ = -l.bars.barWidth / 2;
                            break;
                        default:
                            throw new Error("Invalid bar alignment: " + l.bars.align)
                    }
                    l.bars.horizontal ? (A += _, M += _ + l.bars.barWidth) : (L += _, O += _ + l.bars.barWidth)
                }
                x(l.xaxis, L, O), x(l.yaxis, A, M)
            }
            e.each(k(), function (e, r) {
                r.datamin == t && (r.datamin = null), r.datamax == n && (r.datamax = null)
            })
        }

        function D() {
            t.css("padding", 0).children(":not(.flot-base,.flot-overlay)").remove(), t.css("position") == "static" && t.css("position", "relative"), f = new n("flot-base", t), l = new n("flot-overlay", t), h = f.context, p = l.context, c = e(l.element).unbind();
            var r = t.data("plot");
            r && (r.shutdown(), l.clear()), t.data("plot", w)
        }

        function P() {
            a.grid.hoverable && (c.mousemove(at), c.bind("mouseleave", ft)), a.grid.clickable && c.click(lt), E(b.bindEvents, [c])
        }

        function H() {
            ot && clearTimeout(ot), c.unbind("mousemove", at), c.unbind("mouseleave", ft), c.unbind("click", lt), E(b.shutdown, [c])
        }

        function B(e) {
            function t(e) {
                return e
            }

            var n, r, i = e.options.transform || t, s = e.options.inverseTransform;
            e.direction == "x" ? (n = e.scale = g / Math.abs(i(e.max) - i(e.min)), r = Math.min(i(e.max), i(e.min))) : (n = e.scale = y / Math.abs(i(e.max) - i(e.min)), n = -n, r = Math.max(i(e.max), i(e.min))), i == t ? e.p2c = function (e) {
                return (e - r) * n
            } : e.p2c = function (e) {
                return (i(e) - r) * n
            }, s ? e.c2p = function (e) {
                return s(r + e / n)
            } : e.c2p = function (e) {
                return r + e / n
            }
        }

        function j(e) {
            var t = e.options, n = e.ticks || [], r = t.labelWidth || 0, i = t.labelHeight || 0,
                s = r || e.direction == "x" ? Math.floor(f.width / (n.length || 1)) : null;
            legacyStyles = e.direction + "Axis " + e.direction + e.n + "Axis", layer = "flot-" + e.direction + "-axis flot-" + e.direction + e.n + "-axis " + legacyStyles, font = t.font || "flot-tick-label tickLabel";
            for (var o = 0; o < n.length; ++o) {
                var u = n[o];
                if (!u.label) continue;
                var a = f.getTextInfo(layer, u.label, font, null, s);
                r = Math.max(r, a.width), i = Math.max(i, a.height)
            }
            e.labelWidth = t.labelWidth || r, e.labelHeight = t.labelHeight || i
        }

        function F(t) {
            var n = t.labelWidth, r = t.labelHeight, i = t.options.position, s = t.options.tickLength,
                o = a.grid.axisMargin, u = a.grid.labelMargin, l = t.direction == "x" ? d : v, c, h,
                p = e.grep(l, function (e) {
                    return e && e.options.position == i && e.reserveSpace
                });
            e.inArray(t, p) == p.length - 1 && (o = 0);
            if (s == null) {
                var g = e.grep(l, function (e) {
                    return e && e.reserveSpace
                });
                h = e.inArray(t, g) == 0, h ? s = "full" : s = 5
            }
            isNaN(+s) || (u += +s), t.direction == "x" ? (r += u, i == "bottom" ? (m.bottom += r + o, t.box = {
                top: f.height - m.bottom,
                height: r
            }) : (t.box = {
                top: m.top + o,
                height: r
            }, m.top += r + o)) : (n += u, i == "left" ? (t.box = {
                left: m.left + o,
                width: n
            }, m.left += n + o) : (m.right += n + o, t.box = {
                left: f.width - m.right,
                width: n
            })), t.position = i, t.tickLength = s, t.box.padding = u, t.innermost = h
        }

        function I(e) {
            e.direction == "x" ? (e.box.left = m.left - e.labelWidth / 2, e.box.width = f.width - m.left - m.right + e.labelWidth) : (e.box.top = m.top - e.labelHeight / 2, e.box.height = f.height - m.bottom - m.top + e.labelHeight)
        }

        function q() {
            var t = a.grid.minBorderMargin, n = {x: 0, y: 0}, r, i;
            if (t == null) {
                t = 0;
                for (r = 0; r < u.length; ++r) t = Math.max(t, 2 * (u[r].points.radius + u[r].points.lineWidth / 2))
            }
            n.x = n.y = Math.ceil(t), e.each(k(), function (e, t) {
                var r = t.direction;
                t.reserveSpace && (n[r] = Math.ceil(Math.max(n[r], (r == "x" ? t.labelWidth : t.labelHeight) / 2)))
            }), m.left = Math.max(n.x, m.left), m.right = Math.max(n.x, m.right), m.top = Math.max(n.y, m.top), m.bottom = Math.max(n.y, m.bottom)
        }

        function R() {
            var t, n = k(), r = a.grid.show;
            for (var i in m) {
                var s = a.grid.margin || 0;
                m[i] = typeof s == "number" ? s : s[i] || 0
            }
            E(b.processOffset, [m]);
            for (var i in m) typeof a.grid.borderWidth == "object" ? m[i] += r ? a.grid.borderWidth[i] : 0 : m[i] += r ? a.grid.borderWidth : 0;
            e.each(n, function (e, t) {
                t.show = t.options.show, t.show == null && (t.show = t.used), t.reserveSpace = t.show || t.options.reserveSpace, U(t)
            });
            if (r) {
                var o = e.grep(n, function (e) {
                    return e.reserveSpace
                });
                e.each(o, function (e, t) {
                    z(t), W(t), X(t, t.ticks), j(t)
                });
                for (t = o.length - 1; t >= 0; --t) F(o[t]);
                q(), e.each(o, function (e, t) {
                    I(t)
                })
            }
            g = f.width - m.left - m.right, y = f.height - m.bottom - m.top, e.each(n, function (e, t) {
                B(t)
            }), r && G(), it()
        }

        function U(e) {
            var t = e.options, n = +(t.min != null ? t.min : e.datamin), r = +(t.max != null ? t.max : e.datamax),
                i = r - n;
            if (i == 0) {
                var s = r == 0 ? 1 : .01;
                t.min == null && (n -= s);
                if (t.max == null || t.min != null) r += s
            } else {
                var o = t.autoscaleMargin;
                o != null && (t.min == null && (n -= i * o, n < 0 && e.datamin != null && e.datamin >= 0 && (n = 0)), t.max == null && (r += i * o, r > 0 && e.datamax != null && e.datamax <= 0 && (r = 0)))
            }
            e.min = n, e.max = r
        }

        function z(t) {
            var n = t.options, r;
            typeof n.ticks == "number" && n.ticks > 0 ? r = n.ticks : r = .3 * Math.sqrt(t.direction == "x" ? f.width : f.height);
            var s = (t.max - t.min) / r, o = -Math.floor(Math.log(s) / Math.LN10), u = n.tickDecimals;
            u != null && o > u && (o = u);
            var a = Math.pow(10, -o), l = s / a, c;
            l < 1.5 ? c = 1 : l < 3 ? (c = 2, l > 2.25 && (u == null || o + 1 <= u) && (c = 2.5, ++o)) : l < 7.5 ? c = 5 : c = 10, c *= a, n.minTickSize != null && c < n.minTickSize && (c = n.minTickSize), t.delta = s, t.tickDecimals = Math.max(0, u != null ? u : o), t.tickSize = n.tickSize || c;
            if (n.mode == "time" && !t.tickGenerator) throw new Error("Time mode requires the flot.time plugin.");
            t.tickGenerator || (t.tickGenerator = function (e) {
                var t = [], n = i(e.min, e.tickSize), r = 0, s = Number.NaN, o;
                do o = s, s = n + r * e.tickSize, t.push(s), ++r; while (s < e.max && s != o);
                return t
            }, t.tickFormatter = function (e, t) {
                var n = t.tickDecimals ? Math.pow(10, t.tickDecimals) : 1, r = "" + Math.round(e * n) / n;
                if (t.tickDecimals != null) {
                    var i = r.indexOf("."), s = i == -1 ? 0 : r.length - i - 1;
                    if (s < t.tickDecimals) return (s ? r : r + ".") + ("" + n).substr(1, t.tickDecimals - s)
                }
                return r
            }), e.isFunction(n.tickFormatter) && (t.tickFormatter = function (e, t) {
                return "" + n.tickFormatter(e, t)
            });
            if (n.alignTicksWithAxis != null) {
                var h = (t.direction == "x" ? d : v)[n.alignTicksWithAxis - 1];
                if (h && h.used && h != t) {
                    var p = t.tickGenerator(t);
                    p.length > 0 && (n.min == null && (t.min = Math.min(t.min, p[0])), n.max == null && p.length > 1 && (t.max = Math.max(t.max, p[p.length - 1]))), t.tickGenerator = function (e) {
                        var t = [], n, r;
                        for (r = 0; r < h.ticks.length; ++r) n = (h.ticks[r].v - h.min) / (h.max - h.min), n = e.min + n * (e.max - e.min), t.push(n);
                        return t
                    };
                    if (!t.mode && n.tickDecimals == null) {
                        var m = Math.max(0, -Math.floor(Math.log(t.delta) / Math.LN10) + 1), g = t.tickGenerator(t);
                        g.length > 1 && /\..*0$/.test((g[1] - g[0]).toFixed(m)) || (t.tickDecimals = m)
                    }
                }
            }
        }

        function W(t) {
            var n = t.options.ticks, r = [];
            n == null || typeof n == "number" && n > 0 ? r = t.tickGenerator(t) : n && (e.isFunction(n) ? r = n(t) : r = n);
            var i, s;
            t.ticks = [];
            for (i = 0; i < r.length; ++i) {
                var o = null, u = r[i];
                typeof u == "object" ? (s = +u[0], u.length > 1 && (o = u[1])) : s = +u, o == null && (o = t.tickFormatter(s, t)), isNaN(s) || t.ticks.push({
                    v: s,
                    label: o
                })
            }
        }

        function X(e, t) {
            e.options.autoscaleMargin && t.length > 0 && (e.options.min == null && (e.min = Math.min(e.min, t[0].v)), e.options.max == null && t.length > 1 && (e.max = Math.max(e.max, t[t.length - 1].v)))
        }

        function V() {
            f.clear(), E(b.drawBackground, [h]);
            var e = a.grid;
            e.show && e.backgroundColor && K(), e.show && !e.aboveData && Q();
            for (var t = 0; t < u.length; ++t) E(b.drawSeries, [h, u[t]]), Y(u[t]);
            E(b.draw, [h]), e.show && e.aboveData && Q(), f.render(), ht()
        }

        function J(e, t) {
            var n, r, i, s, o = k();
            for (var u = 0; u < o.length; ++u) {
                n = o[u];
                if (n.direction == t) {
                    s = t + n.n + "axis", !e[s] && n.n == 1 && (s = t + "axis");
                    if (e[s]) {
                        r = e[s].from, i = e[s].to;
                        break
                    }
                }
            }
            e[s] || (n = t == "x" ? d[0] : v[0], r = e[t + "1"], i = e[t + "2"]);
            if (r != null && i != null && r > i) {
                var a = r;
                r = i, i = a
            }
            return {from: r, to: i, axis: n}
        }

        function K() {
            h.save(), h.translate(m.left, m.top), h.fillStyle = bt(a.grid.backgroundColor, y, 0, "rgba(255, 255, 255, 0)"), h.fillRect(0, 0, g, y), h.restore()
        }

        function Q() {
            var t, n, r, i;
            h.save(), h.translate(m.left, m.top);
            var s = a.grid.markings;
            if (s) {
                e.isFunction(s) && (n = w.getAxes(), n.xmin = n.xaxis.min, n.xmax = n.xaxis.max, n.ymin = n.yaxis.min, n.ymax = n.yaxis.max, s = s(n));
                for (t = 0; t < s.length; ++t) {
                    var o = s[t], u = J(o, "x"), f = J(o, "y");
                    u.from == null && (u.from = u.axis.min), u.to == null && (u.to = u.axis.max), f.from == null && (f.from = f.axis.min), f.to == null && (f.to = f.axis.max);
                    if (u.to < u.axis.min || u.from > u.axis.max || f.to < f.axis.min || f.from > f.axis.max) continue;
                    u.from = Math.max(u.from, u.axis.min), u.to = Math.min(u.to, u.axis.max), f.from = Math.max(f.from, f.axis.min), f.to = Math.min(f.to, f.axis.max);
                    if (u.from == u.to && f.from == f.to) continue;
                    u.from = u.axis.p2c(u.from), u.to = u.axis.p2c(u.to), f.from = f.axis.p2c(f.from), f.to = f.axis.p2c(f.to), u.from == u.to || f.from == f.to ? (h.beginPath(), h.strokeStyle = o.color || a.grid.markingsColor, h.lineWidth = o.lineWidth || a.grid.markingsLineWidth, h.moveTo(u.from, f.from), h.lineTo(u.to, f.to), h.stroke()) : (h.fillStyle = o.color || a.grid.markingsColor, h.fillRect(u.from, f.to, u.to - u.from, f.from - f.to))
                }
            }
            n = k(), r = a.grid.borderWidth;
            for (var l = 0; l < n.length; ++l) {
                var c = n[l], p = c.box, d = c.tickLength, v, b, E, S;
                if (!c.show || c.ticks.length == 0) continue;
                h.lineWidth = 1, c.direction == "x" ? (v = 0, d == "full" ? b = c.position == "top" ? 0 : y : b = p.top - m.top + (c.position == "top" ? p.height : 0)) : (b = 0, d == "full" ? v = c.position == "left" ? 0 : g : v = p.left - m.left + (c.position == "left" ? p.width : 0)), c.innermost || (h.strokeStyle = c.options.color, h.beginPath(), E = S = 0, c.direction == "x" ? E = g + 1 : S = y + 1, h.lineWidth == 1 && (c.direction == "x" ? b = Math.floor(b) + .5 : v = Math.floor(v) + .5), h.moveTo(v, b), h.lineTo(v + E, b + S), h.stroke()), h.strokeStyle = c.options.tickColor, h.beginPath();
                for (t = 0; t < c.ticks.length; ++t) {
                    var x = c.ticks[t].v;
                    E = S = 0;
                    if (isNaN(x) || x < c.min || x > c.max || d == "full" && (typeof r == "object" && r[c.position] > 0 || r > 0) && (x == c.min || x == c.max)) continue;
                    c.direction == "x" ? (v = c.p2c(x), S = d == "full" ? -y : d, c.position == "top" && (S = -S)) : (b = c.p2c(x), E = d == "full" ? -g : d, c.position == "left" && (E = -E)), h.lineWidth == 1 && (c.direction == "x" ? v = Math.floor(v) + .5 : b = Math.floor(b) + .5), h.moveTo(v, b), h.lineTo(v + E, b + S)
                }
                h.stroke()
            }
            r && (i = a.grid.borderColor, typeof r == "object" || typeof i == "object" ? (typeof r != "object" && (r = {
                top: r,
                right: r,
                bottom: r,
                left: r
            }), typeof i != "object" && (i = {
                top: i,
                right: i,
                bottom: i,
                left: i
            }), r.top > 0 && (h.strokeStyle = i.top, h.lineWidth = r.top, h.beginPath(), h.moveTo(0 - r.left, 0 - r.top / 2), h.lineTo(g, 0 - r.top / 2), h.stroke()), r.right > 0 && (h.strokeStyle = i.right, h.lineWidth = r.right, h.beginPath(), h.moveTo(g + r.right / 2, 0 - r.top), h.lineTo(g + r.right / 2, y), h.stroke()), r.bottom > 0 && (h.strokeStyle = i.bottom, h.lineWidth = r.bottom, h.beginPath(), h.moveTo(g + r.right, y + r.bottom / 2), h.lineTo(0, y + r.bottom / 2), h.stroke()), r.left > 0 && (h.strokeStyle = i.left, h.lineWidth = r.left, h.beginPath(), h.moveTo(0 - r.left / 2, y + r.bottom), h.lineTo(0 - r.left / 2, 0), h.stroke())) : (h.lineWidth = r, h.strokeStyle = a.grid.borderColor, h.strokeRect(-r / 2, -r / 2, g + r, y + r))), h.restore()
        }

        function G() {
            e.each(k(), function (e, t) {
                if (!t.show || t.ticks.length == 0) return;
                var n = t.box, r = t.direction + "Axis " + t.direction + t.n + "Axis",
                    i = "flot-" + t.direction + "-axis flot-" + t.direction + t.n + "-axis " + r,
                    s = t.options.font || "flot-tick-label tickLabel", o, u, a, l, c;
                f.removeText(i);
                for (var h = 0; h < t.ticks.length; ++h) {
                    o = t.ticks[h];
                    if (!o.label || o.v < t.min || o.v > t.max) continue;
                    t.direction == "x" ? (l = "center", u = m.left + t.p2c(o.v), t.position == "bottom" ? a = n.top + n.padding : (a = n.top + n.height - n.padding, c = "bottom")) : (c = "middle", a = m.top + t.p2c(o.v), t.position == "left" ? (u = n.left + n.width - n.padding, l = "right") : u = n.left + n.padding), f.addText(i, u, a, o.label, s, null, null, l, c)
                }
            })
        }

        function Y(e) {
            e.lines.show && Z(e), e.bars.show && nt(e), e.points.show && et(e)
        }

        function Z(e) {
            function t(e, t, n, r, i) {
                var s = e.points, o = e.pointsize, u = null, a = null;
                h.beginPath();
                for (var f = o; f < s.length; f += o) {
                    var l = s[f - o], c = s[f - o + 1], p = s[f], d = s[f + 1];
                    if (l == null || p == null) continue;
                    if (c <= d && c < i.min) {
                        if (d < i.min) continue;
                        l = (i.min - c) / (d - c) * (p - l) + l, c = i.min
                    } else if (d <= c && d < i.min) {
                        if (c < i.min) continue;
                        p = (i.min - c) / (d - c) * (p - l) + l, d = i.min
                    }
                    if (c >= d && c > i.max) {
                        if (d > i.max) continue;
                        l = (i.max - c) / (d - c) * (p - l) + l, c = i.max
                    } else if (d >= c && d > i.max) {
                        if (c > i.max) continue;
                        p = (i.max - c) / (d - c) * (p - l) + l, d = i.max
                    }
                    if (l <= p && l < r.min) {
                        if (p < r.min) continue;
                        c = (r.min - l) / (p - l) * (d - c) + c, l = r.min
                    } else if (p <= l && p < r.min) {
                        if (l < r.min) continue;
                        d = (r.min - l) / (p - l) * (d - c) + c, p = r.min
                    }
                    if (l >= p && l > r.max) {
                        if (p > r.max) continue;
                        c = (r.max - l) / (p - l) * (d - c) + c, l = r.max
                    } else if (p >= l && p > r.max) {
                        if (l > r.max) continue;
                        d = (r.max - l) / (p - l) * (d - c) + c, p = r.max
                    }
                    (l != u || c != a) && h.moveTo(r.p2c(l) + t, i.p2c(c) + n), u = p, a = d, h.lineTo(r.p2c(p) + t, i.p2c(d) + n)
                }
                h.stroke()
            }

            function n(e, t, n) {
                var r = e.points, i = e.pointsize, s = Math.min(Math.max(0, n.min), n.max), o = 0, u, a = !1, f = 1,
                    l = 0, c = 0;
                for (; ;) {
                    if (i > 0 && o > r.length + i) break;
                    o += i;
                    var p = r[o - i], d = r[o - i + f], v = r[o], m = r[o + f];
                    if (a) {
                        if (i > 0 && p != null && v == null) {
                            c = o, i = -i, f = 2;
                            continue
                        }
                        if (i < 0 && o == l + i) {
                            h.fill(), a = !1, i = -i, f = 1, o = l = c + i;
                            continue
                        }
                    }
                    if (p == null || v == null) continue;
                    if (p <= v && p < t.min) {
                        if (v < t.min) continue;
                        d = (t.min - p) / (v - p) * (m - d) + d, p = t.min
                    } else if (v <= p && v < t.min) {
                        if (p < t.min) continue;
                        m = (t.min - p) / (v - p) * (m - d) + d, v = t.min
                    }
                    if (p >= v && p > t.max) {
                        if (v > t.max) continue;
                        d = (t.max - p) / (v - p) * (m - d) + d, p = t.max
                    } else if (v >= p && v > t.max) {
                        if (p > t.max) continue;
                        m = (t.max - p) / (v - p) * (m - d) + d, v = t.max
                    }
                    a || (h.beginPath(), h.moveTo(t.p2c(p), n.p2c(s)), a = !0);
                    if (d >= n.max && m >= n.max) {
                        h.lineTo(t.p2c(p), n.p2c(n.max)), h.lineTo(t.p2c(v), n.p2c(n.max));
                        continue
                    }
                    if (d <= n.min && m <= n.min) {
                        h.lineTo(t.p2c(p), n.p2c(n.min)), h.lineTo(t.p2c(v), n.p2c(n.min));
                        continue
                    }
                    var g = p, y = v;
                    d <= m && d < n.min && m >= n.min ? (p = (n.min - d) / (m - d) * (v - p) + p, d = n.min) : m <= d && m < n.min && d >= n.min && (v = (n.min - d) / (m - d) * (v - p) + p, m = n.min), d >= m && d > n.max && m <= n.max ? (p = (n.max - d) / (m - d) * (v - p) + p, d = n.max) : m >= d && m > n.max && d <= n.max && (v = (n.max - d) / (m - d) * (v - p) + p, m = n.max), p != g && h.lineTo(t.p2c(g), n.p2c(d)), h.lineTo(t.p2c(p), n.p2c(d)), h.lineTo(t.p2c(v), n.p2c(m)), v != y && (h.lineTo(t.p2c(v), n.p2c(m)), h.lineTo(t.p2c(y), n.p2c(m)))
                }
            }

            h.save(), h.translate(m.left, m.top), h.lineJoin = "round";
            var r = e.lines.lineWidth, i = e.shadowSize;
            if (r > 0 && i > 0) {
                h.lineWidth = i, h.strokeStyle = "rgba(0,0,0,0.1)";
                var s = Math.PI / 18;
                t(e.datapoints, Math.sin(s) * (r / 2 + i / 2), Math.cos(s) * (r / 2 + i / 2), e.xaxis, e.yaxis), h.lineWidth = i / 2, t(e.datapoints, Math.sin(s) * (r / 2 + i / 4), Math.cos(s) * (r / 2 + i / 4), e.xaxis, e.yaxis)
            }
            h.lineWidth = r, h.strokeStyle = e.color;
            var o = rt(e.lines, e.color, 0, y);
            o && (h.fillStyle = o, n(e.datapoints, e.xaxis, e.yaxis)), r > 0 && t(e.datapoints, 0, 0, e.xaxis, e.yaxis), h.restore()
        }

        function et(e) {
            function t(e, t, n, r, i, s, o, u) {
                var a = e.points, f = e.pointsize;
                for (var l = 0; l < a.length; l += f) {
                    var c = a[l], p = a[l + 1];
                    if (c == null || c < s.min || c > s.max || p < o.min || p > o.max) continue;
                    h.beginPath(), c = s.p2c(c), p = o.p2c(p) + r, u == "circle" ? h.arc(c, p, t, 0, i ? Math.PI : Math.PI * 2, !1) : u(h, c, p, t, i), h.closePath(), n && (h.fillStyle = n, h.fill()), h.stroke()
                }
            }

            h.save(), h.translate(m.left, m.top);
            var n = e.points.lineWidth, r = e.shadowSize, i = e.points.radius, s = e.points.symbol;
            n == 0 && (n = 1e-4);
            if (n > 0 && r > 0) {
                var o = r / 2;
                h.lineWidth = o, h.strokeStyle = "rgba(0,0,0,0.1)", t(e.datapoints, i, null, o + o / 2, !0, e.xaxis, e.yaxis, s), h.strokeStyle = "rgba(0,0,0,0.2)", t(e.datapoints, i, null, o / 2, !0, e.xaxis, e.yaxis, s)
            }
            h.lineWidth = n, h.strokeStyle = e.color, t(e.datapoints, i, rt(e.points, e.color), 0, !1, e.xaxis, e.yaxis, s), h.restore()
        }

        function tt(e, t, n, r, i, s, o, u, a, f, l, c) {
            var h, p, d, v, m, g, y, b, w;
            l ? (b = g = y = !0, m = !1, h = n, p = e, v = t + r, d = t + i, p < h && (w = p, p = h, h = w, m = !0, g = !1)) : (m = g = y = !0, b = !1, h = e + r, p = e + i, d = n, v = t, v < d && (w = v, v = d, d = w, b = !0, y = !1));
            if (p < u.min || h > u.max || v < a.min || d > a.max) return;
            h < u.min && (h = u.min, m = !1), p > u.max && (p = u.max, g = !1), d < a.min && (d = a.min, b = !1), v > a.max && (v = a.max, y = !1), h = u.p2c(h), d = a.p2c(d), p = u.p2c(p), v = a.p2c(v), o && (f.beginPath(), f.moveTo(h, d), f.lineTo(h, v), f.lineTo(p, v), f.lineTo(p, d), f.fillStyle = o(d, v), f.fill()), c > 0 && (m || g || y || b) && (f.beginPath(), f.moveTo(h, d + s), m ? f.lineTo(h, v + s) : f.moveTo(h, v + s), y ? f.lineTo(p, v + s) : f.moveTo(p, v + s), g ? f.lineTo(p, d + s) : f.moveTo(p, d + s), b ? f.lineTo(h, d + s) : f.moveTo(h, d + s), f.stroke())
        }

        function nt(e) {
            function t(t, n, r, i, s, o, u) {
                var a = t.points, f = t.pointsize;
                for (var l = 0; l < a.length; l += f) {
                    if (a[l] == null) continue;
                    tt(a[l], a[l + 1], a[l + 2], n, r, i, s, o, u, h, e.bars.horizontal, e.bars.lineWidth)
                }
            }

            h.save(), h.translate(m.left, m.top), h.lineWidth = e.bars.lineWidth, h.strokeStyle = e.color;
            var n;
            switch (e.bars.align) {
                case"left":
                    n = 0;
                    break;
                case"right":
                    n = -e.bars.barWidth;
                    break;
                case"center":
                    n = -e.bars.barWidth / 2;
                    break;
                default:
                    throw new Error("Invalid bar alignment: " + e.bars.align)
            }
            var r = e.bars.fill ? function (t, n) {
                return rt(e.bars, e.color, t, n)
            } : null;
            t(e.datapoints, n, n + e.bars.barWidth, 0, r, e.xaxis, e.yaxis), h.restore()
        }

        function rt(t, n, r, i) {
            var s = t.fill;
            if (!s) return null;
            if (t.fillColor) return bt(t.fillColor, r, i, n);
            var o = e.color.parse(n);
            return o.a = typeof s == "number" ? s : .4, o.normalize(), o.toString()
        }

        function it() {
            t.find(".legend").remove();
            if (!a.legend.show) return;
            var n = [], r = [], i = !1, s = a.legend.labelFormatter, o, f;
            for (var l = 0; l < u.length; ++l) o = u[l], o.label && (f = s ? s(o.label, o) : o.label, f && r.push({
                label: f,
                color: o.color
            }));
            if (a.legend.sorted) if (e.isFunction(a.legend.sorted)) r.sort(a.legend.sorted); else if (a.legend.sorted == "reverse") r.reverse(); else {
                var c = a.legend.sorted != "descending";
                r.sort(function (e, t) {
                    return e.label == t.label ? 0 : e.label < t.label != c ? 1 : -1
                })
            }
            for (var l = 0; l < r.length; ++l) {
                var h = r[l];
                l % a.legend.noColumns == 0 && (i && n.push("</tr>"), n.push("<tr>"), i = !0), n.push('<td class="legendColorBox"><div style="border:1px solid ' + a.legend.labelBoxBorderColor + ';padding:1px"><div style="width:4px;height:0;border:5px solid ' + h.color + ';overflow:hidden"></div></div></td>' + '<td class="legendLabel">' + h.label + "</td>")
            }
            i && n.push("</tr>");
            if (n.length == 0) return;
            var p = '<table style="font-size:smaller;color:' + a.grid.color + '">' + n.join("") + "</table>";
            if (a.legend.container != null) e(a.legend.container).html(p); else {
                var d = "", v = a.legend.position, g = a.legend.margin;
                g[0] == null && (g = [g, g]), v.charAt(0) == "n" ? d += "top:" + (g[1] + m.top) + "px;" : v.charAt(0) == "s" && (d += "bottom:" + (g[1] + m.bottom) + "px;"), v.charAt(1) == "e" ? d += "right:" + (g[0] + m.right) + "px;" : v.charAt(1) == "w" && (d += "left:" + (g[0] + m.left) + "px;");
                var y = e('<div class="legend">' + p.replace('style="', 'style="position:absolute;' + d + ";") + "</div>").appendTo(t);
                if (a.legend.backgroundOpacity != 0) {
                    var b = a.legend.backgroundColor;
                    b == null && (b = a.grid.backgroundColor, b && typeof b == "string" ? b = e.color.parse(b) : b = e.color.extract(y, "background-color"), b.a = 1, b = b.toString());
                    var w = y.children();
                    e('<div style="position:absolute;width:' + w.width() + "px;height:" + w.height() + "px;" + d + "background-color:" + b + ';"> </div>').prependTo(y).css("opacity", a.legend.backgroundOpacity)
                }
            }
        }

        function ut(e, t, n) {
            var r = a.grid.mouseActiveRadius, i = r * r + 1, s = null, o = !1, f, l, c;
            for (f = u.length - 1; f >= 0; --f) {
                if (!n(u[f])) continue;
                var h = u[f], p = h.xaxis, d = h.yaxis, v = h.datapoints.points, m = p.c2p(e), g = d.c2p(t),
                    y = r / p.scale, b = r / d.scale;
                c = h.datapoints.pointsize, p.options.inverseTransform && (y = Number.MAX_VALUE), d.options.inverseTransform && (b = Number.MAX_VALUE);
                if (h.lines.show || h.points.show) for (l = 0; l < v.length; l += c) {
                    var w = v[l], E = v[l + 1];
                    if (w == null) continue;
                    if (w - m > y || w - m < -y || E - g > b || E - g < -b) continue;
                    var S = Math.abs(p.p2c(w) - e), x = Math.abs(d.p2c(E) - t), T = S * S + x * x;
                    T < i && (i = T, s = [f, l / c])
                }
                if (h.bars.show && !s) {
                    var N = h.bars.align == "left" ? 0 : -h.bars.barWidth / 2, C = N + h.bars.barWidth;
                    for (l = 0; l < v.length; l += c) {
                        var w = v[l], E = v[l + 1], k = v[l + 2];
                        if (w == null) continue;
                        if (u[f].bars.horizontal ? m <= Math.max(k, w) && m >= Math.min(k, w) && g >= E + N && g <= E + C : m >= w + N && m <= w + C && g >= Math.min(k, E) && g <= Math.max(k, E)) s = [f, l / c]
                    }
                }
            }
            return s ? (f = s[0], l = s[1], c = u[f].datapoints.pointsize, {
                datapoint: u[f].datapoints.points.slice(l * c, (l + 1) * c),
                dataIndex: l,
                series: u[f],
                seriesIndex: f
            }) : null
        }

        function at(e) {
            a.grid.hoverable && ct("plothover", e, function (e) {
                return e["hoverable"] != 0
            })
        }

        function ft(e) {
            a.grid.hoverable && ct("plothover", e, function (e) {
                return !1
            })
        }

        function lt(e) {
            ct("plotclick", e, function (e) {
                return e["clickable"] != 0
            })
        }

        function ct(e, n, r) {
            var i = c.offset(), s = n.pageX - i.left - m.left, o = n.pageY - i.top - m.top, u = L({left: s, top: o});
            u.pageX = n.pageX, u.pageY = n.pageY;
            var f = ut(s, o, r);
            f && (f.pageX = parseInt(f.series.xaxis.p2c(f.datapoint[0]) + i.left + m.left, 10), f.pageY = parseInt(f.series.yaxis.p2c(f.datapoint[1]) + i.top + m.top, 10));
            if (a.grid.autoHighlight) {
                for (var l = 0; l < st.length; ++l) {
                    var h = st[l];
                    h.auto == e && (!f || h.series != f.series || h.point[0] != f.datapoint[0] || h.point[1] != f.datapoint[1]) && vt(h.series, h.point)
                }
                f && dt(f.series, f.datapoint, e)
            }
            t.trigger(e, [u, f])
        }

        function ht() {
            var e = a.interaction.redrawOverlayInterval;
            if (e == -1) {
                pt();
                return
            }
            ot || (ot = setTimeout(pt, e))
        }

        function pt() {
            ot = null, p.save(), l.clear(), p.translate(m.left, m.top);
            var e, t;
            for (e = 0; e < st.length; ++e) t = st[e], t.series.bars.show ? yt(t.series, t.point) : gt(t.series, t.point);
            p.restore(), E(b.drawOverlay, [p])
        }

        function dt(e, t, n) {
            typeof e == "number" && (e = u[e]);
            if (typeof t == "number") {
                var r = e.datapoints.pointsize;
                t = e.datapoints.points.slice(r * t, r * (t + 1))
            }
            var i = mt(e, t);
            i == -1 ? (st.push({series: e, point: t, auto: n}), ht()) : n || (st[i].auto = !1)
        }

        function vt(e, t) {
            if (e == null && t == null) {
                st = [], ht();
                return
            }
            typeof e == "number" && (e = u[e]);
            if (typeof t == "number") {
                var n = e.datapoints.pointsize;
                t = e.datapoints.points.slice(n * t, n * (t + 1))
            }
            var r = mt(e, t);
            r != -1 && (st.splice(r, 1), ht())
        }

        function mt(e, t) {
            for (var n = 0; n < st.length; ++n) {
                var r = st[n];
                if (r.series == e && r.point[0] == t[0] && r.point[1] == t[1]) return n
            }
            return -1
        }

        function gt(t, n) {
            var r = n[0], i = n[1], s = t.xaxis, o = t.yaxis,
                u = typeof t.highlightColor == "string" ? t.highlightColor : e.color.parse(t.color).scale("a", .5).toString();
            if (r < s.min || r > s.max || i < o.min || i > o.max) return;
            var a = t.points.radius + t.points.lineWidth / 2;
            p.lineWidth = a, p.strokeStyle = u;
            var f = 1.5 * a;
            r = s.p2c(r), i = o.p2c(i), p.beginPath(), t.points.symbol == "circle" ? p.arc(r, i, f, 0, 2 * Math.PI, !1) : t.points.symbol(p, r, i, f, !1), p.closePath(), p.stroke()
        }

        function yt(t, n) {
            var r = typeof t.highlightColor == "string" ? t.highlightColor : e.color.parse(t.color).scale("a", .5).toString(),
                i = r, s = t.bars.align == "left" ? 0 : -t.bars.barWidth / 2;
            p.lineWidth = t.bars.lineWidth, p.strokeStyle = r, tt(n[0], n[1], n[2] || 0, s, s + t.bars.barWidth, 0, function () {
                return i
            }, t.xaxis, t.yaxis, p, t.bars.horizontal, t.bars.lineWidth)
        }

        function bt(t, n, r, i) {
            if (typeof t == "string") return t;
            var s = h.createLinearGradient(0, r, 0, n);
            for (var o = 0, u = t.colors.length; o < u; ++o) {
                var a = t.colors[o];
                if (typeof a != "string") {
                    var f = e.color.parse(i);
                    a.brightness != null && (f = f.scale("rgb", a.brightness)), a.opacity != null && (f.a *= a.opacity), a = f.toString()
                }
                s.addColorStop(o / (u - 1), a)
            }
            return s
        }

        var u = [], a = {
                colors: ["#edc240", "#afd8f8", "#cb4b4b", "#4da74d", "#9440ed"],
                legend: {
                    show: !0,
                    noColumns: 1,
                    labelFormatter: null,
                    labelBoxBorderColor: "#ccc",
                    container: null,
                    position: "ne",
                    margin: 5,
                    backgroundColor: null,
                    backgroundOpacity: .85,
                    sorted: null
                },
                xaxis: {
                    show: null,
                    position: "bottom",
                    mode: null,
                    font: null,
                    color: null,
                    tickColor: null,
                    transform: null,
                    inverseTransform: null,
                    min: null,
                    max: null,
                    autoscaleMargin: null,
                    ticks: null,
                    tickFormatter: null,
                    labelWidth: null,
                    labelHeight: null,
                    reserveSpace: null,
                    tickLength: null,
                    alignTicksWithAxis: null,
                    tickDecimals: null,
                    tickSize: null,
                    minTickSize: null
                },
                yaxis: {autoscaleMargin: .02, position: "left"},
                xaxes: [],
                yaxes: [],
                series: {
                    points: {show: !1, radius: 3, lineWidth: 2, fill: !0, fillColor: "#ffffff", symbol: "circle"},
                    lines: {lineWidth: 2, fill: !1, fillColor: null, steps: !1},
                    bars: {
                        show: !1,
                        lineWidth: 2,
                        barWidth: 1,
                        fill: !0,
                        fillColor: null,
                        align: "left",
                        horizontal: !1,
                        zero: !0
                    },
                    shadowSize: 3,
                    highlightColor: null
                },
                grid: {
                    show: !0,
                    aboveData: !1,
                    color: "#545454",
                    backgroundColor: null,
                    borderColor: null,
                    tickColor: null,
                    margin: 0,
                    labelMargin: 5,
                    axisMargin: 8,
                    borderWidth: 2,
                    minBorderMargin: null,
                    markings: null,
                    markingsColor: "#f4f4f4",
                    markingsLineWidth: 2,
                    clickable: !1,
                    hoverable: !1,
                    autoHighlight: !0,
                    mouseActiveRadius: 10
                },
                interaction: {redrawOverlayInterval: 1e3 / 60},
                hooks: {}
            }, f = null, l = null, c = null, h = null, p = null, d = [], v = [], m = {left: 0, right: 0, top: 0, bottom: 0},
            g = 0, y = 0, b = {
                processOptions: [],
                processRawData: [],
                processDatapoints: [],
                processOffset: [],
                drawBackground: [],
                drawSeries: [],
                draw: [],
                bindEvents: [],
                drawOverlay: [],
                shutdown: []
            }, w = this;
        w.setData = T, w.setupGrid = R, w.draw = V, w.getPlaceholder = function () {
            return t
        }, w.getCanvas = function () {
            return f.element
        }, w.getPlotOffset = function () {
            return m
        }, w.width = function () {
            return g
        }, w.height = function () {
            return y
        }, w.offset = function () {
            var e = c.offset();
            return e.left += m.left, e.top += m.top, e
        }, w.getData = function () {
            return u
        }, w.getAxes = function () {
            var t = {}, n;
            return e.each(d.concat(v), function (e, n) {
                n && (t[n.direction + (n.n != 1 ? n.n : "") + "axis"] = n)
            }), t
        }, w.getXAxes = function () {
            return d
        }, w.getYAxes = function () {
            return v
        }, w.c2p = L, w.p2c = A, w.getOptions = function () {
            return a
        }, w.highlight = dt, w.unhighlight = vt, w.triggerRedrawOverlay = ht, w.pointOffset = function (e) {
            return {
                left: parseInt(d[C(e, "x") - 1].p2c(+e.x) + m.left, 10),
                top: parseInt(v[C(e, "y") - 1].p2c(+e.y) + m.top, 10)
            }
        }, w.shutdown = H, w.resize = function () {
            var e = t.width(), n = t.height();
            f.resize(e, n), l.resize(e, n)
        }, w.hooks = b, S(w), x(s), D(), T(r), R(), V(), P();
        var st = [], ot = null
    }

    function i(e, t) {
        return t * Math.floor(e / t)
    }

    var t = Object.prototype.hasOwnProperty;
    n.prototype.resize = function (e, t) {
        if (e <= 0 || t <= 0) throw new Error("Invalid dimensions for plot, width = " + e + ", height = " + t);
        var n = this.element, r = this.context, i = this.pixelRatio;
        this.width != e && (n.width = e * i, n.style.width = e + "px", this.width = e), this.height != t && (n.height = t * i, n.style.height = t + "px", this.height = t), r.restore(), r.save(), r.scale(i, i)
    }, n.prototype.clear = function () {
        this.context.clearRect(0, 0, this.width, this.height)
    }, n.prototype.render = function () {
        var e = this._textCache;
        for (var n in e) if (t.call(e, n)) {
            var r = this.getTextLayer(n), i = e[n];
            r.hide();
            for (var s in i) if (t.call(i, s)) {
                var o = i[s];
                for (var u in o) if (t.call(o, u)) {
                    var a = o[u].positions;
                    for (var f = 0, l; l = a[f]; f++) l.active ? l.rendered || (r.append(l.element), l.rendered = !0) : (a.splice(f--, 1), l.rendered && l.element.detach());
                    a.length == 0 && delete o[u]
                }
            }
            r.show()
        }
    }, n.prototype.getTextLayer = function (t) {
        var n = this.text[t];
        return n == null && (this.textContainer == null && (this.textContainer = e("<div class='flot-text'></div>").css({
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            "font-size": "smaller",
            color: "#545454"
        }).insertAfter(this.element)), n = this.text[t] = e("<div></div>").addClass(t).css({
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
        }).appendTo(this.textContainer)), n
    }, n.prototype.getTextInfo = function (t, n, r, i, s) {
        var o, u, a, f;
        n = "" + n, typeof r == "object" ? o = r.style + " " + r.variant + " " + r.weight + " " + r.size + "px/" + r.lineHeight + "px " + r.family : o = r, u = this._textCache[t], u == null && (u = this._textCache[t] = {}), a = u[o], a == null && (a = u[o] = {}), f = a[n];
        if (f == null) {
            var l = e("<div></div>").html(n).css({
                position: "absolute",
                "max-width": s,
                top: -9999
            }).appendTo(this.getTextLayer(t));
            typeof r == "object" ? l.css({
                font: o,
                color: r.color
            }) : typeof r == "string" && l.addClass(r), f = a[n] = {
                width: l.outerWidth(!0),
                height: l.outerHeight(!0),
                element: l,
                positions: []
            }, l.detach()
        }
        return f
    }, n.prototype.addText = function (e, t, n, r, i, s, o, u, a) {
        var f = this.getTextInfo(e, r, i, s, o), l = f.positions;
        u == "center" ? t -= f.width / 2 : u == "right" && (t -= f.width), a == "middle" ? n -= f.height / 2 : a == "bottom" && (n -= f.height);
        for (var c = 0, h; h = l[c]; c++) if (h.x == t && h.y == n) {
            h.active = !0;
            return
        }
        h = {
            active: !0,
            rendered: !1,
            element: l.length ? f.element.clone() : f.element,
            x: t,
            y: n
        }, l.push(h), h.element.css({top: Math.round(n), left: Math.round(t), "text-align": u})
    }, n.prototype.removeText = function (e, n, r, i, s, o) {
        if (i == null) {
            var u = this._textCache[e];
            if (u != null) for (var a in u) if (t.call(u, a)) {
                var f = u[a];
                for (var l in f) if (t.call(f, l)) {
                    var c = f[l].positions;
                    for (var h = 0, p; p = c[h]; h++) p.active = !1
                }
            }
        } else {
            var c = this.getTextInfo(e, i, s, o).positions;
            for (var h = 0, p; p = c[h]; h++) p.x == n && p.y == r && (p.active = !1)
        }
    }, e.plot = function (t, n, i) {
        var s = new r(e(t), n, i, e.plot.plugins);
        return s
    }, e.plot.version = "0.8.1", e.plot.plugins = [], e.fn.plot = function (t, n) {
        return this.each(function () {
            e.plot(this, t, n)
        })
    }
}(jQuery);
;(function ($, h, c) {
    var a = $([]), e = $.resize = $.extend($.resize, {}), i, k = "setTimeout", j = "resize", d = j + "-special-event",
        b = "delay", f = "throttleWindow";
    e[b] = 250;
    e[f] = true;
    $.event.special[j] = {
        setup: function () {
            if (!e[f] && this[k]) return false;
            var l = $(this);
            a = a.add(l);
            $.data(this, d, {w: l.width(), h: l.height()});
            if (a.length === 1) g()
        }, teardown: function () {
            if (!e[f] && this[k]) return false;
            var l = $(this);
            a = a.not(l);
            l.removeData(d);
            if (!a.length) clearTimeout(i)
        }, add: function (l) {
            if (!e[f] && this[k]) return false;
            var n

            function m(s, o, p) {
                var q = $(this), r = $.data(this, d);
                r.w = o !== c ? o : q.width();
                r.h = p !== c ? p : q.height();
                n.apply(this, arguments)
            };
            if ($.isFunction(l)) {
                n = l;
                return m
            } else {
                n = l.handler;
                l.handler = m
            }
        }
    }

    function g() {
        i = h[k](function () {
            a.each(function () {
                var n = $(this), m = n.width(), l = n.height(), o = $.data(this, d);
                if (m !== o.w || l !== o.h) n.trigger(j, [o.w = m, o.h = l])
            });
            g()
        }, e[b])
    }
})(jQuery, this);
(function ($) {
    var options = {}

    function init(plot) {
        function onResize() {
            var placeholder = plot.getPlaceholder();
            if (placeholder.width() == 0 || placeholder.height() == 0) return;
            plot.resize();
            plot.setupGrid();
            plot.draw()
        }

        function bindEvents(plot, eventHolder) {
            plot.getPlaceholder().resize(onResize)
        }

        function shutdown(plot, eventHolder) {
            plot.getPlaceholder().unbind("resize", onResize)
        };plot.hooks.bindEvents.push(bindEvents);
        plot.hooks.shutdown.push(shutdown)
    };$.plot.plugins.push({init: init, options: options, name: 'resize', version: '1.0'})
})(jQuery);
;Array.prototype.indexOf || (Array.prototype.indexOf = function (t, i) {
    if (void 0 === this || null === this) throw new TypeError('"this" is null or not defined');
    var e = this.length >>> 0;
    for (i = +i || 0, 1 / 0 === Math.abs(i) && (i = 0), 0 > i && (i += e, 0 > i && (i = 0)); e > i; i++) if (this[i] === t) return i;
    return -1
}), function (t) {
    var i = {
        tooltip: !1,
        tooltipOpts: {
            content: "%s | X: %x | Y: %y",
            xDateFormat: null,
            yDateFormat: null,
            monthNames: null,
            dayNames: null,
            shifts: {x: 10, y: 20},
            defaultTheme: !0,
            onHover: function () {
            }
        }
    }, e = function (t) {
        this.tipPosition = {x: 0, y: 0}, this.init(t)
    };
    e.prototype.init = function (i) {
        function e(t) {
            var i = {};
            i.x = t.pageX, i.y = t.pageY, o.updateTooltipPosition(i)
        }

        function s(t, i, e) {
            var s = o.getDomElement();
            if (e) {
                var a;
                a = o.stringFormat(o.tooltipOptions.content, e), s.html(a), o.updateTooltipPosition({
                    x: i.pageX,
                    y: i.pageY
                }), s.css({
                    left: o.tipPosition.x + o.tooltipOptions.shifts.x,
                    top: o.tipPosition.y + o.tooltipOptions.shifts.y
                }).show(), "function" == typeof o.tooltipOptions.onHover && o.tooltipOptions.onHover(e, s)
            } else s.hide().html("")
        }

        var o = this, a = t.plot.plugins.length;
        if (this.plotPlugins = [], a) for (var n = 0; a > n; n++) this.plotPlugins.push(t.plot.plugins[n].name);
        i.hooks.bindEvents.push(function (i, a) {
            o.plotOptions = i.getOptions(), o.plotOptions.tooltip !== !1 && void 0 !== o.plotOptions.tooltip && (o.tooltipOptions = o.plotOptions.tooltipOpts, o.getDomElement(), t(i.getPlaceholder()).bind("plothover", s), t(a).bind("mousemove", e))
        }), i.hooks.shutdown.push(function (i, o) {
            t(i.getPlaceholder()).unbind("plothover", s), t(o).unbind("mousemove", e)
        })
    }, e.prototype.getDomElement = function () {
        var i = t("#flotTip");
        return 0 === i.length && (i = t("<div />").attr("id", "flotTip"), i.appendTo("body").hide().css({position: "absolute"}), this.tooltipOptions.defaultTheme && i.css({
            background: "#fff",
            "z-index": "1040",
            padding: "0.4em 0.6em",
            "border-radius": "0.5em",
            "font-size": "0.8em",
            border: "1px solid #111",
            display: "none",
            "white-space": "nowrap"
        })), i
    }, e.prototype.updateTooltipPosition = function (i) {
        var e = t("#flotTip"), s = e.outerWidth() + this.tooltipOptions.shifts.x,
            o = e.outerHeight() + this.tooltipOptions.shifts.y;
        i.x - t(window).scrollLeft() > t(window).innerWidth() - s && (i.x -= s), i.y - t(window).scrollTop() > t(window).innerHeight() - o && (i.y -= o), this.tipPosition.x = i.x, this.tipPosition.y = i.y
    }, e.prototype.stringFormat = function (t, i) {
        var e, s, o, a = /%p\.{0,1}(\d{0,})/, n = /%s/, r = /%lx/, p = /%ly/, l = /%x\.{0,1}(\d{0,})/,
            d = /%y\.{0,1}(\d{0,})/, x = "%x", h = "%y", u = "%ct";
        if (i.series.threshold !== void 0 ? (e = i.datapoint[0], s = i.datapoint[1], o = i.datapoint[2]) : i.series.lines !== void 0 && i.series.lines.steps ? (e = i.series.datapoints.points[2 * i.dataIndex], s = i.series.datapoints.points[2 * i.dataIndex + 1], o = "") : (e = i.series.data[i.dataIndex][0], s = i.series.data[i.dataIndex][1], o = i.series.data[i.dataIndex][2]), null === i.series.label && i.series.originSeries && (i.series.label = i.series.originSeries.label), "function" == typeof t && (t = t(i.series.label, e, s, i)), i.series.percent !== void 0 && (t = this.adjustValPrecision(a, t, i.series.percent)), t = i.series.label !== void 0 ? t.replace(n, i.series.label) : t.replace(n, ""), t = this.hasAxisLabel("xaxis", i) ? t.replace(r, i.series.xaxis.options.axisLabel) : t.replace(r, ""), t = this.hasAxisLabel("yaxis", i) ? t.replace(p, i.series.yaxis.options.axisLabel) : t.replace(p, ""), this.isTimeMode("xaxis", i) && this.isXDateFormat(i) && (t = t.replace(l, this.timestampToDate(e, this.tooltipOptions.xDateFormat, i.series.xaxis.options))), this.isTimeMode("yaxis", i) && this.isYDateFormat(i) && (t = t.replace(d, this.timestampToDate(s, this.tooltipOptions.yDateFormat, i.series.yaxis.options))), "number" == typeof e && (t = this.adjustValPrecision(l, t, e)), "number" == typeof s && (t = this.adjustValPrecision(d, t, s)), i.series.xaxis.ticks !== void 0) {
            var c;
            c = this.hasRotatedXAxisTicks(i) ? "rotatedTicks" : "ticks";
            var m = i.dataIndex + i.seriesIndex;
            if (i.series.xaxis[c].length > m && !this.isTimeMode("xaxis", i)) {
                var f = this.isCategoriesMode("xaxis", i) ? i.series.xaxis[c][m].label : i.series.xaxis[c][m].v;
                f === e && (t = t.replace(l, i.series.xaxis[c][m].label))
            }
        }
        if (i.series.yaxis.ticks !== void 0) for (var y in i.series.yaxis.ticks) if (i.series.yaxis.ticks.hasOwnProperty(y)) {
            var v = this.isCategoriesMode("yaxis", i) ? i.series.yaxis.ticks[y].label : i.series.yaxis.ticks[y].v;
            v === s && (t = t.replace(d, i.series.yaxis.ticks[y].label))
        }
        return i.series.xaxis.tickFormatter !== void 0 && (t = t.replace(x, i.series.xaxis.tickFormatter(e, i.series.xaxis).replace(/\$/g, "$$"))), i.series.yaxis.tickFormatter !== void 0 && (t = t.replace(h, i.series.yaxis.tickFormatter(s, i.series.yaxis).replace(/\$/g, "$$"))), o && (t = t.replace(u, o)), t
    }, e.prototype.isTimeMode = function (t, i) {
        return i.series[t].options.mode !== void 0 && "time" === i.series[t].options.mode
    }, e.prototype.isXDateFormat = function () {
        return this.tooltipOptions.xDateFormat !== void 0 && null !== this.tooltipOptions.xDateFormat
    }, e.prototype.isYDateFormat = function () {
        return this.tooltipOptions.yDateFormat !== void 0 && null !== this.tooltipOptions.yDateFormat
    }, e.prototype.isCategoriesMode = function (t, i) {
        return i.series[t].options.mode !== void 0 && "categories" === i.series[t].options.mode
    }, e.prototype.timestampToDate = function (i, e, s) {
        var o = t.plot.dateGenerator(i, s);
        return t.plot.formatDate(o, e, this.tooltipOptions.monthNames, this.tooltipOptions.dayNames)
    }, e.prototype.adjustValPrecision = function (t, i, e) {
        var s, o = i.match(t);
        return null !== o && "" !== RegExp.$1 && (s = RegExp.$1, e = e.toFixed(s), i = i.replace(t, e)), i
    }, e.prototype.hasAxisLabel = function (t, i) {
        return -1 !== this.plotPlugins.indexOf("axisLabels") && i.series[t].options.axisLabel !== void 0 && i.series[t].options.axisLabel.length > 0
    }, e.prototype.hasRotatedXAxisTicks = function (i) {
        return 1 === t.grep(t.plot.plugins, function (t) {
            return "tickRotor" === t.name
        }).length && i.series.xaxis.rotatedTicks !== void 0
    };
    var s = function (t) {
        new e(t)
    };
    t.plot.plugins.push({init: s, options: i, name: "tooltip", version: "0.6.7"})
}(jQuery);
;(function ($) {
    function fnPjax(selector, container, options) {
        var context = this;
        return this.on('click.pjax', selector, function (event) {
            var opts = $.extend({}, optionsFor(container, options));
            if (!opts.container) opts.container = $(this).attr('data-pjax') || context;
            handleClick(event, opts)
        })
    }

    function handleClick(event, container, options) {
        options = optionsFor(container, options);
        var link = event.currentTarget;
        if (link.tagName.toUpperCase() !== 'A') throw"$.fn.pjax or $.pjax.click requires an anchor element";
        if (event.which > 1 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        if (location.protocol !== link.protocol || location.hostname !== link.hostname) return;
        if (link.hash && link.href.replace(link.hash, '') === location.href.replace(location.hash, '')) return;
        if (link.href === location.href + '#') return;
        var defaults = {url: link.href, container: $(link).attr('data-pjax'), target: link},
            opts = $.extend({}, defaults, options), clickEvent = $.Event('pjax:click');
        $(link).trigger(clickEvent, [opts]);
        if (!clickEvent.isDefaultPrevented()) {
            pjax(opts);
            event.preventDefault()
        }
    }

    function handleSubmit(event, container, options) {
        options = optionsFor(container, options);
        var form = event.currentTarget;
        if (form.tagName.toUpperCase() !== 'FORM') throw"$.pjax.submit requires a form element";
        var defaults = {
            type: form.method.toUpperCase(),
            url: form.action,
            data: $(form).serializeArray(),
            container: $(form).attr('data-pjax'),
            target: form
        };
        pjax($.extend({}, defaults, options));
        event.preventDefault()
    }

    function pjax(options) {
        options = $.extend(true, {}, $.ajaxSettings, pjax.defaults, options);
        if ($.isFunction(options.url)) options.url = options.url();
        var target = options.target, hash = parseURL(options.url).hash,
            context = options.context = findContainerFor(options.container);
        if (!options.data) options.data = {};
        options.data._pjax = context.selector

        function fire(type, args) {
            var event = $.Event(type, {relatedTarget: target});
            context.trigger(event, args);
            return !event.isDefaultPrevented()
        };var timeoutTimer;
        options.beforeSend = function (xhr, settings) {
            if (settings.type !== 'GET') settings.timeout = 0;
            xhr.setRequestHeader('X-PJAX', 'true');
            xhr.setRequestHeader('X-PJAX-Container', context.selector);
            if (!fire('pjax:beforeSend', [xhr, settings])) return false;
            if (settings.timeout > 0) {
                timeoutTimer = setTimeout(function () {
                    if (fire('pjax:timeout', [xhr, options])) xhr.abort('timeout')
                }, settings.timeout);
                settings.timeout = 0
            }
            ;options.requestUrl = parseURL(settings.url).href
        };
        options.complete = function (xhr, textStatus) {
            if (timeoutTimer) clearTimeout(timeoutTimer);
            fire('pjax:complete', [xhr, textStatus, options]);
            fire('pjax:end', [xhr, options])
        };
        options.error = function (xhr, textStatus, errorThrown) {
            var container = extractContainer("", xhr, options),
                allowed = fire('pjax:error', [xhr, textStatus, errorThrown, options]);
            if (options.type == 'GET' && textStatus !== 'abort' && allowed) locationReplace(container.url)
        };
        options.success = function (data, status, xhr) {
            var currentVersion = (typeof $.pjax.defaults.version === 'function') ? $.pjax.defaults.version() : $.pjax.defaults.version,
                latestVersion = xhr.getResponseHeader('X-PJAX-Version'),
                container = extractContainer(data, xhr, options);
            if (currentVersion && latestVersion && currentVersion !== latestVersion) {
                locationReplace(container.url);
                return
            }
            ;
            if (!container.contents) {
                locationReplace(container.url);
                return
            }
            ;pjax.state = {
                id: options.id || uniqueId(),
                url: container.url,
                title: container.title,
                container: context.selector,
                fragment: options.fragment,
                timeout: options.timeout
            };
            if (options.push || options.replace) window.history.replaceState(pjax.state, container.title, container.url);
            document.activeElement.blur();
            if (container.title) document.title = container.title;
            context.html(container.contents);
            var autofocusEl = context.find('input[autofocus], textarea[autofocus]').last()[0];
            if (autofocusEl && document.activeElement !== autofocusEl) autofocusEl.focus();
            executeScriptTags(container.scripts);
            if (typeof options.scrollTo === 'number') $(window).scrollTop(options.scrollTo);
            if (hash !== '') {
                var url = parseURL(container.url);
                url.hash = hash;
                pjax.state.url = url.href;
                window.history.replaceState(pjax.state, container.title, url.href);
                var target = $(url.hash);
                if (target.length) $(window).scrollTop(target.offset().top)
            }
            ;fire('pjax:success', [data, status, xhr, options])
        };
        if (!pjax.state) {
            pjax.state = {
                id: uniqueId(),
                url: window.location.href,
                title: document.title,
                container: context.selector,
                fragment: options.fragment,
                timeout: options.timeout
            };
            window.history.replaceState(pjax.state, document.title)
        }
        ;var xhr = pjax.xhr;
        if (xhr && xhr.readyState < 4) {
            xhr.onreadystatechange = $.noop;
            xhr.abort()
        }
        ;pjax.options = options;
        var xhr = pjax.xhr = $.ajax(options);
        if (xhr.readyState > 0) {
            if (options.push && !options.replace) {
                cachePush(pjax.state.id, context.clone().contents());
                window.history.pushState(null, "", stripPjaxParam(options.requestUrl))
            }
            ;fire('pjax:start', [xhr, options]);
            fire('pjax:send', [xhr, options])
        }
        ;
        return pjax.xhr
    }

    function pjaxReload(container, options) {
        var defaults = {url: window.location.href, push: false, replace: true, scrollTo: false};
        return pjax($.extend(defaults, optionsFor(container, options)))
    }

    function locationReplace(url) {
        window.history.replaceState(null, "", "#");
        window.location.replace(url)
    };var initialPop = true, initialURL = window.location.href, initialState = window.history.state;
    if (initialState && initialState.container) pjax.state = initialState;
    if ('state' in window.history) initialPop = false

    function onPjaxPopstate(event) {
        var state = event.state;
        if (state && state.container) {
            if (initialPop && initialURL == state.url) return;
            if (pjax.state.id === state.id) return;
            var container = $(state.container);
            if (container.length) {
                var direction, contents = cacheMapping[state.id];
                if (pjax.state) {
                    direction = pjax.state.id < state.id ? 'forward' : 'back';
                    cachePop(direction, pjax.state.id, container.clone().contents())
                }
                ;var popstateEvent = $.Event('pjax:popstate', {state: state, direction: direction});
                container.trigger(popstateEvent);
                var options = {
                    id: state.id,
                    url: state.url,
                    container: container,
                    push: false,
                    fragment: state.fragment,
                    timeout: state.timeout,
                    scrollTo: false
                };
                if (contents) {
                    container.trigger('pjax:start', [null, options]);
                    if (state.title) document.title = state.title;
                    container.html(contents);
                    pjax.state = state;
                    container.trigger('pjax:end', [null, options])
                } else pjax(options);
                container[0].offsetHeight
            } else locationReplace(location.href)
        }
        ;initialPop = false
    }

    function fallbackPjax(options) {
        var url = $.isFunction(options.url) ? options.url() : options.url,
            method = options.type ? options.type.toUpperCase() : 'GET',
            form = $('<form>', {method: method === 'GET' ? 'GET' : 'POST', action: url, style: 'display:none'});
        if (method !== 'GET' && method !== 'POST') form.append($('<input>', {
            type: 'hidden',
            name: '_method',
            value: method.toLowerCase()
        }));
        var data = options.data;
        if (typeof data === 'string') {
            $.each(data.split('&'), function (index, value) {
                var pair = value.split('=');
                form.append($('<input>', {type: 'hidden', name: pair[0], value: pair[1]}))
            })
        } else if (typeof data === 'object') for (key in data) form.append($('<input>', {
            type: 'hidden',
            name: key,
            value: data[key]
        }));
        $(document.body).append(form);
        form.submit()
    }

    function uniqueId() {
        return (new Date()).getTime()
    }

    function stripPjaxParam(url) {
        return url.replace(/\?_pjax=[^&]+&?/, '?').replace(/_pjax=[^&]+&?/, '').replace(/[\?&]$/, '')
    }

    function parseURL(url) {
        var a = document.createElement('a');
        a.href = url;
        return a
    }

    function optionsFor(container, options) {
        if (container && options) {
            options.container = container
        } else if ($.isPlainObject(container)) {
            options = container
        } else options = {container: container};
        if (options.container) options.container = findContainerFor(options.container);
        return options
    }

    function findContainerFor(container) {
        container = $(container);
        if (!container.length) {
            throw"no pjax container for " + container.selector
        } else if (container.selector !== '' && container.context === document) {
            return container
        } else if (container.attr('id')) {
            return $('#' + container.attr('id'))
        } else throw"cant get selector for pjax container!"
    }

    function findAll(elems, selector) {
        return elems.filter(selector).add(elems.find(selector))
    }

    function parseHTML(html) {
        return $.parseHTML(html, document, true)
    }

    function extractContainer(data, xhr, options) {
        var obj = {};
        obj.url = stripPjaxParam(xhr.getResponseHeader('X-PJAX-URL') || options.requestUrl);
        if (/<html/i.test(data)) {
            var $head = $(parseHTML(data.match(/<head[^>]*>([\s\S.]*)<\/head>/i)[0])),
                $body = $(parseHTML(data.match(/<body[^>]*>([\s\S.]*)<\/body>/i)[0]))
        } else var $head = $body = $(parseHTML(data));
        if ($body.length === 0) return obj;
        obj.title = findAll($head, 'title').last().text();
        if (options.fragment) {
            if (options.fragment === 'body') {
                var $fragment = $body
            } else var $fragment = findAll($body, options.fragment).first();
            if ($fragment.length) {
                obj.contents = $fragment.contents();
                if (!obj.title) obj.title = $fragment.attr('title') || $fragment.data('title')
            }
        } else if (!/<html/i.test(data)) obj.contents = $body;
        if (obj.contents) {
            obj.contents = obj.contents.not(function () {
                return $(this).is('title')
            });
            obj.contents.find('title').remove();
            obj.scripts = findAll(obj.contents, 'script[src]').remove();
            obj.contents = obj.contents.not(obj.scripts)
        }
        ;
        if (obj.title) obj.title = $.trim(obj.title);
        return obj
    }

    function executeScriptTags(scripts) {
        if (!scripts) return;
        var existingScripts = $('script[src]');
        scripts.each(function () {
            var src = this.src, matchedScripts = existingScripts.filter(function () {
                return this.src === src
            });
            if (matchedScripts.length) return;
            var script = document.createElement('script');
            script.type = $(this).attr('type');
            script.src = $(this).attr('src');
            document.head.appendChild(script)
        })
    };var cacheMapping = {}, cacheForwardStack = [], cacheBackStack = []

    function cachePush(id, value) {
        cacheMapping[id] = value;
        cacheBackStack.push(id);
        while (cacheForwardStack.length) delete cacheMapping[cacheForwardStack.shift()];
        while (cacheBackStack.length > pjax.defaults.maxCacheLength) delete cacheMapping[cacheBackStack.shift()]
    }

    function cachePop(direction, id, value) {
        var pushStack, popStack;
        cacheMapping[id] = value;
        if (direction === 'forward') {
            pushStack = cacheBackStack;
            popStack = cacheForwardStack
        } else {
            pushStack = cacheForwardStack;
            popStack = cacheBackStack
        }
        ;pushStack.push(id);
        if (id = popStack.pop()) delete cacheMapping[id]
    }

    function findVersion() {
        return $('meta').filter(function () {
            var name = $(this).attr('http-equiv');
            return name && name.toUpperCase() === 'X-PJAX-VERSION'
        }).attr('content')
    }

    function enable() {
        $.fn.pjax = fnPjax;
        $.pjax = pjax;
        $.pjax.enable = $.noop;
        $.pjax.disable = disable;
        $.pjax.click = handleClick;
        $.pjax.submit = handleSubmit;
        $.pjax.reload = pjaxReload;
        $.pjax.defaults = {
            timeout: 650,
            push: true,
            replace: false,
            type: 'GET',
            dataType: 'html',
            scrollTo: 0,
            maxCacheLength: 20,
            version: findVersion
        };
        $(window).on('popstate.pjax', onPjaxPopstate)
    }

    function disable() {
        $.fn.pjax = function () {
            return this
        };
        $.pjax = fallbackPjax;
        $.pjax.enable = enable;
        $.pjax.disable = $.noop;
        $.pjax.click = $.noop;
        $.pjax.submit = $.noop;
        $.pjax.reload = function () {
            window.location.reload()
        };
        $(window).off('popstate.pjax', onPjaxPopstate)
    };
    if ($.inArray('state', $.event.props) < 0) $.event.props.push('state');
    $.support.pjax = window.history && window.history.pushState && window.history.replaceState && !navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]|WebApps\/.+CFNetwork)/);
    $.support.pjax ? enable() : disable()
})(jQuery);
;(function (factory) {
    if (typeof module === 'function') {
        module.exports = factory(this.jQuery || require('jquery'))
    } else this.NProgress = factory(this.jQuery)
})(function ($) {
    var NProgress = {};
    NProgress.version = '0.1.2';
    var Settings = NProgress.settings = {
        minimum: 0.08,
        easing: 'ease',
        positionUsing: '',
        speed: 200,
        trickle: true,
        trickleRate: 0.02,
        trickleSpeed: 800,
        showSpinner: true,
        template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
    };
    NProgress.configure = function (options) {
        $.extend(Settings, options);
        return this
    };
    NProgress.status = null;
    NProgress.set = function (n) {
        var started = NProgress.isStarted();
        n = clamp(n, Settings.minimum, 1);
        NProgress.status = (n === 1 ? null : n);
        var $progress = NProgress.render(!started), $bar = $progress.find('[role="bar"]'), speed = Settings.speed,
            ease = Settings.easing;
        $progress[0].offsetWidth;
        $progress.queue(function (next) {
            if (Settings.positionUsing === '') Settings.positionUsing = NProgress.getPositioningCSS();
            $bar.css(barPositionCSS(n, speed, ease));
            if (n === 1) {
                $progress.css({transition: 'none', opacity: 1});
                $progress[0].offsetWidth;
                setTimeout(function () {
                    $progress.css({transition: 'all ' + speed + 'ms linear', opacity: 0});
                    setTimeout(function () {
                        NProgress.remove();
                        next()
                    }, speed)
                }, speed)
            } else setTimeout(next, speed)
        });
        return this
    };
    NProgress.isStarted = function () {
        return typeof NProgress.status === 'number'
    };
    NProgress.start = function () {
        if (!NProgress.status) NProgress.set(0);
        var work = function () {
            setTimeout(function () {
                if (!NProgress.status) return;
                NProgress.trickle();
                work()
            }, Settings.trickleSpeed)
        };
        if (Settings.trickle) work();
        return this
    };
    NProgress.done = function (force) {
        if (!force && !NProgress.status) return this;
        return NProgress.inc(0.3 + 0.5 * Math.random()).set(1)
    };
    NProgress.inc = function (amount) {
        var n = NProgress.status;
        if (!n) {
            return NProgress.start()
        } else {
            if (typeof amount !== 'number') amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95);
            n = clamp(n + amount, 0, 0.994);
            return NProgress.set(n)
        }
    };
    NProgress.trickle = function () {
        return NProgress.inc(Math.random() * Settings.trickleRate)
    };
    NProgress.render = function (fromStart) {
        if (NProgress.isRendered()) return $("#nprogress");
        $('html').addClass('nprogress-busy');
        var $el = $("<div id='nprogress'>").html(Settings.template),
            perc = fromStart ? '-100' : toBarPerc(NProgress.status || 0);
        $el.find('[role="bar"]').css({transition: 'all 0 linear', transform: 'translate3d(' + perc + '%,0,0)'});
        if (!Settings.showSpinner) $el.find('[role="spinner"]').remove();
        $el.appendTo(document.body);
        return $el
    };
    NProgress.remove = function () {
        $('html').removeClass('nprogress-busy');
        $('#nprogress').remove()
    };
    NProgress.isRendered = function () {
        return ($("#nprogress").length > 0)
    };
    NProgress.getPositioningCSS = function () {
        var bodyStyle = document.body.style,
            vendorPrefix = ('WebkitTransform' in bodyStyle) ? 'Webkit' : ('MozTransform' in bodyStyle) ? 'Moz' : ('msTransform' in bodyStyle) ? 'ms' : ('OTransform' in bodyStyle) ? 'O' : '';
        if (vendorPrefix + 'Perspective' in bodyStyle) {
            return 'translate3d'
        } else if (vendorPrefix + 'Transform' in bodyStyle) {
            return 'translate'
        } else return 'margin'
    }

    function clamp(n, min, max) {
        if (n < min) return min;
        if (n > max) return max;
        return n
    }

    function toBarPerc(n) {
        return (-1 + n) * 100
    }

    function barPositionCSS(n, speed, ease) {
        var barCSS;
        if (Settings.positionUsing === 'translate3d') {
            barCSS = {transform: 'translate3d(' + toBarPerc(n) + '%,0,0)'}
        } else if (Settings.positionUsing === 'translate') {
            barCSS = {transform: 'translate(' + toBarPerc(n) + '%,0)'}
        } else barCSS = {'margin-left': toBarPerc(n) + '%'};
        barCSS.transition = 'all ' + speed + 'ms ' + ease;
        return barCSS
    };
    return NProgress
});
;(function (h, j, e) {
    var a = "placeholder" in j.createElement("input"), f = "placeholder" in j.createElement("textarea"), k = e.fn,
        d = e.valHooks, b = e.propHooks, m, l;
    if (a && f) {
        l = k.placeholder = function () {
            return this
        };
        l.input = l.textarea = true
    } else {
        l = k.placeholder = function () {
            var n = this;
            n.filter((a ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind({
                "focus.placeholder": c,
                "blur.placeholder": g
            }).data("placeholder-enabled", true).trigger("blur.placeholder");
            return n
        };
        l.input = a;
        l.textarea = f;
        m = {
            get: function (o) {
                var n = e(o), p = n.data("placeholder-password");
                if (p) return p[0].value;
                return n.data("placeholder-enabled") && n.hasClass("placeholder") ? "" : o.value
            }, set: function (o, q) {
                var n = e(o), p = n.data("placeholder-password");
                if (p) return p[0].value = q;
                if (!n.data("placeholder-enabled")) return o.value = q;
                if (q == "") {
                    o.value = q;
                    if (o != j.activeElement) g.call(o)
                } else if (n.hasClass("placeholder")) {
                    c.call(o, true, q) || (o.value = q)
                } else o.value = q;
                return n
            }
        };
        if (!a) {
            d.input = m;
            b.value = m
        }
        ;
        if (!f) {
            d.textarea = m;
            b.value = m
        }
        ;e(function () {
            e(j).delegate("form", "submit.placeholder", function () {
                var n = e(".placeholder", this).each(c);
                setTimeout(function () {
                    n.each(g)
                }, 10)
            })
        });
        e(h).bind("beforeunload.placeholder", function () {
            e(".placeholder").each(function () {
                this.value = ""
            })
        })
    }

    function i(o) {
        var n = {}, p = /^jQuery\d+$/;
        e.each(o.attributes, function (r, q) {
            if (q.specified && !p.test(q.name)) n[q.name] = q.value
        });
        return n
    }

    function c(o, p) {
        var n = this, q = e(n);
        if (n.value == q.attr("placeholder") && q.hasClass("placeholder")) if (q.data("placeholder-password")) {
            q = q.hide().next().show().attr("id", q.removeAttr("id").data("placeholder-id"));
            if (o === true) return q[0].value = p;
            q.focus()
        } else {
            n.value = "";
            q.removeClass("placeholder");
            n == j.activeElement && n.select()
        }
    }

    function g() {
        var r, n = this, q = e(n), p = this.id;
        if (n.value == "") {
            if (n.type == "password") {
                if (!q.data("placeholder-textinput")) {
                    try {
                        r = q.clone().attr({type: "text"})
                    } catch (o) {
                        r = e("<input>").attr(e.extend(i(this), {type: "text"}))
                    }
                    ;r.removeAttr("name").data({
                        "placeholder-password": q,
                        "placeholder-id": p
                    }).bind("focus.placeholder", c);
                    q.data({"placeholder-textinput": r, "placeholder-id": p}).before(r)
                }
                ;q = q.removeAttr("id").hide().prev().attr("id", p).show()
            }
            ;q.addClass("placeholder");
            q[0].value = q.attr("placeholder")
        } else q.removeClass("placeholder")
    }
}(this, document, jQuery));
window.Modernizr = function (a, b, c) {
    function w(a) {
        j.cssText = a
    }

    function x(a, b) {
        return w(m.join(a + ";") + (b || ""))
    }

    function y(a, b) {
        return typeof a === b
    }

    function z(a, b) {
        return !!~("" + a).indexOf(b)
    }

    function A(a, b, d) {
        for (var e in a) {
            var f = b[a[e]];
            if (f !== c) return d === !1 ? a[e] : y(f, "function") ? f.bind(d || b) : f
        }
        ;
        return !1
    };var d = "2.6.2", e = {}, f = !0, g = b.documentElement, h = "modernizr", i = b.createElement(h), j = i.style, k,
        l = {}.toString, m = " -webkit- -moz- -o- -ms- ".split(" "), n = {}, o = {}, p = {}, q = [], r = q.slice, s,
        t = function (a, c, d, e) {
            var f, i, j, k, l = b.createElement("div"), m = b.body, n = m || b.createElement("body");
            if (parseInt(d, 10)) while (d--) j = b.createElement("div"), j.id = e ? e[d] : h + (d + 1), l.appendChild(j);
            return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""), l.id = h, (m ? l : n).innerHTML += f, n.appendChild(l), m || (n.style.background = "", n.style.overflow = "hidden", k = g.style.overflow, g.style.overflow = "hidden", g.appendChild(n)), i = c(l, a), m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), g.style.overflow = k), !!i
        }, u = {}.hasOwnProperty, v;
    !y(u, "undefined") && !y(u.call, "undefined") ? v = function (a, b) {
        return u.call(a, b)
    } : v = function (a, b) {
        return b in a && y(a.constructor.prototype[b], "undefined")
    }, Function.prototype.bind || (Function.prototype.bind = function (b) {
        var c = this;
        if (typeof c != "function") throw new TypeError();
        var d = r.call(arguments, 1), e = function () {
            if (this instanceof e) {
                var a = function () {
                };
                a.prototype = c.prototype;
                var f = new a(), g = c.apply(f, d.concat(r.call(arguments)));
                return Object(g) === g ? g : f
            }
            ;
            return c.apply(b, d.concat(r.call(arguments)))
        };
        return e
    }), n.touch = function () {
        var c;
        return "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : t(["@media (", m.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function (a) {
            c = a.offsetTop === 9
        }), c
    };
    for (var B in n) v(n, B) && (s = B.toLowerCase(), e[s] = n[B](), q.push((e[s] ? "" : "no-") + s));
    return e.addTest = function (a, b) {
        if (typeof a == "object") {
            for (var d in a) v(a, d) && e.addTest(d, a[d])
        } else {
            a = a.toLowerCase();
            if (e[a] !== c) return e;
            b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
        }
        ;
        return e
    }, w(""), i = k = null, e._version = d, e._prefixes = m, e.testStyles = t, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + q.join(" ") : ""), e
}(this, this.document);
Modernizr.addTest('android', function () {
    return !!navigator.userAgent.match(/Android/i)
});
Modernizr.addTest('chrome', function () {
    return !!navigator.userAgent.match(/Chrome/i)
});
Modernizr.addTest('firefox', function () {
    return !!navigator.userAgent.match(/Firefox/i)
});
Modernizr.addTest('iemobile', function () {
    return !!navigator.userAgent.match(/IEMobile/i)
});
Modernizr.addTest('ie', function () {
    return !!navigator.userAgent.match(/MSIE/i)
});
Modernizr.addTest('ie10', function () {
    return !!navigator.userAgent.match(/MSIE 10/i)
});
Modernizr.addTest('ie11', function () {
    return !!navigator.userAgent.match(/Trident.*rv:11\./)
});
Modernizr.addTest('ios', function () {
    return !!navigator.userAgent.match(/iPhone|iPad|iPod/i)
});
+function ($) {
    "use strict";
    var Shift = function (element) {
        this.$element = $(element);
        this.$prev = this.$element.prev();
        !this.$prev.length && (this.$parent = this.$element.parent())
    };
    Shift.prototype = {
        constructor: Shift, init: function () {
            var $el = this.$element, method = $el.data()['toggle'].split(':')[1], $target = $el.data('target');
            $el.hasClass('in') || $el[method]($target).addClass('in')
        }, reset: function () {
            this.$parent && this.$parent['prepend'](this.$element);
            !this.$parent && this.$element['insertAfter'](this.$prev);
            this.$element.removeClass('in')
        }
    };
    $.fn.shift = function (option) {
        return this.each(function () {
            var $this = $(this), data = $this.data('shift');
            if (!data) $this.data('shift', (data = new Shift(this)));
            if (typeof option == 'string') data[option]()
        })
    };
    $.fn.shift.Constructor = Shift
}(jQuery);
Date.now = Date.now || function () {
    return +new Date()
};
+function ($) {
    $(function () {
        $('input[placeholder], textarea[placeholder]').placeholder();
        $("[data-toggle=popover]").popover();
        $(document).on('click', '.popover-title .close', function (e) {
            var $target = $(e.target), $popover = $target.closest('.popover').prev();
            $popover && $popover.popover('hide')
        });
        $(document).on('click', '[data-toggle="ajaxModal"]', function (e) {
            $('#ajaxModal').remove();
            e.preventDefault();
            var $this = $(this), $remote = $this.data('remote') || $this.attr('href'),
                $modal = $('<div class="modal" id="ajaxModal"><div class="modal-body"></div></div>');
            $('body').append($modal);
            $modal.modal();
            $modal.load($remote)
        });
        $.fn.dropdown.Constructor.prototype.change = function (e) {
            e.preventDefault();
            var $item = $(e.target), $select, $checked = false, $menu, $label;
            !$item.is('a') && ($item = $item.closest('a'));
            $menu = $item.closest('.dropdown-menu');
            $label = $menu.parent().find('.dropdown-label');
            $labelHolder = $label.text();
            $select = $item.find('input');
            $checked = $select.is(':checked');
            if ($select.is(':disabled')) return;
            if ($select.attr('type') == 'radio' && $checked) return;
            if ($select.attr('type') == 'radio') $menu.find('li').removeClass('active');
            $item.parent().removeClass('active');
            !$checked && $item.parent().addClass('active');
            $select.prop("checked", !$select.prop("checked"));
            $items = $menu.find('li > a > input:checked');
            if ($items.length) {
                $text = [];
                $items.each(function () {
                    var $str = $(this).parent().text();
                    $str && $text.push($.trim($str))
                });
                $text = $text.length < 4 ? $text.join(', ') : $text.length + ' selected';
                $label.html($text)
            } else $label.html($label.data('placeholder'))
        };
        $(document).on('click.dropdown-menu.radio', '.dropdown-select > li > a', $.fn.dropdown.Constructor.prototype.change);
        $("[data-toggle=tooltip]").tooltip();
        $(document).on('click', '[data-toggle^="class"]', function (e) {
            e && e.preventDefault();
            var $this = $(e.target), $class, $target, $tmp, $classes, $targets;
            !$this.data('toggle') && ($this = $this.closest('[data-toggle^="class"]'));
            $class = $this.data()['toggle'];
            $target = $this.data('target') || $this.attr('href');
            $class && ($tmp = $class.split(':')[1]) && ($classes = $tmp.split(','));
            $target && ($targets = $target.split(','));
            $targets && $targets.length && $.each($targets, function (index, value) {
                ($targets[index] != '#') && $($targets[index]).toggleClass($classes[index])
            });
            $this.toggleClass('active')
        });
        $(document).on('click', '.panel-toggle', function (e) {
            e && e.preventDefault();
            var $this = $(e.target), $class = 'collapse', $target;
            if (!$this.is('a')) $this = $this.closest('a');
            $target = $this.closest('.panel');
            $target.find('.panel-body').toggleClass($class);
            $this.toggleClass('active')
        });
        $('.carousel.auto').carousel();
        $(document).on('click.button.data-api', '[data-loading-text]', function (e) {
            var $this = $(e.target);
            $this.is('i') && ($this = $this.parent());
            $this.button('loading')
        });
        var scrollToTop = function () {
            !location.hash && setTimeout(function () {
                if (!pageYOffset) window.scrollTo(0, 0)
            }, 1e3)
        }, $window = $(window), mobile = function (option) {
            if (option == 'reset') {
                $('[data-toggle^="shift"]').shift('reset');
                return true
            }
            ;scrollToTop();
            $('[data-toggle^="shift"]').shift('init');
            return true
        };
        $window.width() < 768 && mobile();
        var $resize;
        $window.resize(function () {
            clearTimeout($resize);
            $resize = setTimeout(function () {
                $window.width() < 767 && mobile();
                $window.width() >= 768 && mobile('reset') && fixVbox()
            }, 500)
        });
        var fixVbox = function () {
            $('.ie11 .vbox').each(function () {
                $(this).height($(this).parent().height())
            })
        };
        fixVbox();
        $(document).on('click', '.nav-primary a', function (e) {
            var $this = $(e.target), $active;
            $this.is('a') || ($this = $this.closest('a'));
            if ($('.nav-vertical').length) return;
            $active = $this.parent().siblings(".active");
            $active && $active.find('> a').toggleClass('active') && $active.toggleClass('active').find('> ul:visible').slideUp(200);
            ($this.hasClass('active') && $this.next().slideUp(200)) || $this.next().slideDown(200);
            $this.toggleClass('active').parent().toggleClass('active');
            $this.next().is('ul') && e.preventDefault()
        });
        $(document).on('click.bs.dropdown.data-api', '.dropdown .on, .dropup .on', function (e) {
            e.stopPropagation()
        });
        $(document).on('click', '.ajax-pager a', function (e) {
            $.ajax({url: '?page=' + $(this).attr('href').split('page=')[1]}).done(function (data) {
                $('#links').html(data)
            }).fail(function () {
                alert('Posts could not be loaded.')
            });
            e.preventDefault()
        });
        $(document).on('submit', 'form#form-shorten', function (e) {
            e.preventDefault();
            var shortenlink = new Clipboard('#btn-copy');
            shortenlink.on('success', function (e) {
                $('#msg-shorten').html("<h5 class='text-success'><i class='fa fa-clipboard'></i> Copied to clipboard.</h5>");
                $('#btn-shorten').attr('disabled', false);
                $('#btn-shorten').removeClass('hidden');
                $('#btn-copy').addClass('hidden')
            });
            $.ajax({
                type: 'POST',
                url: BASE + '/shorten',
                data: $(this).serialize(),
                dataType: 'json',
                beforeSend: function () {
                },
                complete: function () {
                },
                success: function (data) {
                    if (data.error) {
                        $('#msg-shorten').html("<h5 class='text-danger'><i class='fa fa-times'></i> " + data.msg + "</h5>")
                    } else {
                        $('#msg-shorten').html("<h5 class='text-success'><i class='fa fa-check'></i> Click copy button or Ctrl + C to copy the link.</h5>");
                        $('#input-shorten').val(BASE + '/' + data.slug);
                        $('#input-shorten').select();
                        $('#btn-shorten').attr('disabled', true);
                        $('#btn-shorten').addClass('hidden');
                        $('#btn-copy').removeClass('hidden')
                    }
                }
            })
        })
    })
}(jQuery);
;!function ($) {
    $(document).on('ready pjax:complete', function () {
        var clipboard = new Clipboard('.btn-copy');
        $("#home-stats").length && $.plot($("#home-stats"), reservationsLineChart, {
            series: {
                lines: {
                    show: true,
                    lineWidth: 1,
                    fill: true,
                    fillColor: {colors: [{opacity: 0.1}, {opacity: 0.13}]}
                }, points: {show: true, lineWidth: 2, radius: 3}, shadowSize: 0, stack: true
            },
            grid: {hoverable: true, clickable: true, tickColor: "#f9f9f9", borderWidth: 0},
            colors: ["#30a0eb"],
            xaxis: {ticks: 30, tickDecimals: 0, font: {size: 12, color: "#697695"}},
            yaxis: {tickDecimals: 0, font: {size: 12, color: "#9da3a9"}},
            tooltip: true,
            tooltipOpts: {content: "Mois %x: %y %s", defaultTheme: false, shifts: {x: 0, y: 20}}
        });
        $(".datepicker-input").each(function () {
            $(this).datepicker()
        });
        var addPill = function ($input) {
            var $text = $input.val(), $pills = $input.closest('.pillbox'), $repeat = false, $repeatPill;
            if ($text == "") return;
            $("li", $pills).text(function (i, v) {
                if (v == $text) {
                    $repeatPill = $(this);
                    $repeat = true
                }
            });
            if ($repeat) {
                $repeatPill.fadeOut().fadeIn();
                return
            }
            ;$item = $('<li class="label bg-dark">' + $text + '</li> ');
            $item.insertBefore($input);
            $input.val('');
            $pills.trigger('change', $item)
        };
        $('.pillbox input').on('blur', function () {
            addPill($(this))
        });
        $('.pillbox input').on('keypress', function (e) {
            if (e.which == 13) {
                e.preventDefault();
                addPill($(this))
            }
        });
        if ($.fn.sortable) $('.sortable').sortable();
        if ($.fn.select2) {
            $("#select2-option").select2();
            $("#select2-tags").select2({tags: ["red", "green", "blue"], tokenSeparators: [",", " "]})
        }
    });
    $(document).on('click', '.fontawesome-icon-list a', function (e) {
        e && e.preventDefault()
    });
    if ($.support.pjax) {
        $(document).pjax('[data-pjax] a, a[data-pjax]', '#main');
        $(document).on('submit', '[data-pjax] form', function (event) {
            $.pjax.submit(event, '#content')
        });
        $(document).on('pjax:send', function () {
            NProgress.start()
        });
        $(document).on('pjax:complete', function () {
            NProgress.done()
        })
    }
}(window.jQuery);
;
if (typeof jQuery === "undefined") throw new Error("Bootstrap requires jQuery");
+function ($) {
    "use strict"

    function transitionEnd() {
        var el = document.createElement('bootstrap'), transEndEventNames = {
            WebkitTransition: 'webkitTransitionEnd',
            MozTransition: 'transitionend',
            OTransition: 'oTransitionEnd otransitionend',
            transition: 'transitionend'
        };
        for (var name in transEndEventNames) if (el.style[name] !== undefined) return {end: transEndEventNames[name]}
    };$.fn.emulateTransitionEnd = function (duration) {
        var called = false, $el = this;
        $(this).one($.support.transition.end, function () {
            called = true
        });
        var callback = function () {
            if (!called) $($el).trigger($.support.transition.end)
        };
        setTimeout(callback, duration);
        return this
    };
    $(function () {
        $.support.transition = transitionEnd()
    })
}(jQuery);
+function ($) {
    "use strict";
    var dismiss = '[data-dismiss="alert"]', Alert = function (el) {
        $(el).on('click', dismiss, this.close)
    };
    Alert.prototype.close = function (e) {
        var $this = $(this), selector = $this.attr('data-target');
        if (!selector) {
            selector = $this.attr('href');
            selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '')
        }
        ;var $parent = $(selector);
        if (e) e.preventDefault();
        if (!$parent.length) $parent = $this.hasClass('alert') ? $this : $this.parent();
        $parent.trigger(e = $.Event('close.bs.alert'));
        if (e.isDefaultPrevented()) return;
        $parent.removeClass('in')

        function removeElement() {
            $parent.trigger('closed.bs.alert').remove()
        };$.support.transition && $parent.hasClass('fade') ? $parent.one($.support.transition.end, removeElement).emulateTransitionEnd(150) : removeElement()
    };
    var old = $.fn.alert;
    $.fn.alert = function (option) {
        return this.each(function () {
            var $this = $(this), data = $this.data('bs.alert');
            if (!data) $this.data('bs.alert', (data = new Alert(this)));
            if (typeof option == 'string') data[option].call($this)
        })
    };
    $.fn.alert.Constructor = Alert;
    $.fn.alert.noConflict = function () {
        $.fn.alert = old;
        return this
    };
    $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)
}(jQuery);
+function ($) {
    "use strict";
    var Button = function (element, options) {
        this.$element = $(element);
        this.options = $.extend({}, Button.DEFAULTS, options)
    };
    Button.DEFAULTS = {loadingText: 'loading...'};
    Button.prototype.setState = function (state) {
        var d = 'disabled', $el = this.$element, val = $el.is('input') ? 'val' : 'html', data = $el.data();
        state = state + 'Text';
        if (!data.resetText) $el.data('resetText', $el[val]());
        $el[val](data[state] || this.options[state]);
        setTimeout(function () {
            state == 'loadingText' ? $el.addClass(d).attr(d, d) : $el.removeClass(d).removeAttr(d)
        }, 0)
    };
    Button.prototype.toggle = function () {
        var $parent = this.$element.closest('[data-toggle="buttons"]');
        if ($parent.length) {
            var $input = this.$element.find('input').prop('checked', !this.$element.hasClass('active')).trigger('change');
            if ($input.prop('type') === 'radio') $parent.find('.active').removeClass('active')
        }
        ;this.$element.toggleClass('active')
    };
    var old = $.fn.button;
    $.fn.button = function (option) {
        return this.each(function () {
            var $this = $(this), data = $this.data('bs.button'), options = typeof option == 'object' && option;
            if (!data) $this.data('bs.button', (data = new Button(this, options)));
            if (option == 'toggle') {
                data.toggle()
            } else if (option) data.setState(option)
        })
    };
    $.fn.button.Constructor = Button;
    $.fn.button.noConflict = function () {
        $.fn.button = old;
        return this
    };
    $(document).on('click.bs.button.data-api', '[data-toggle^=button]', function (e) {
        var $btn = $(e.target);
        if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn');
        $btn.button('toggle');
        e.preventDefault()
    })
}(jQuery);
+function ($) {
    "use strict";
    var Carousel = function (element, options) {
        this.$element = $(element);
        this.$indicators = this.$element.find('.carousel-indicators');
        this.options = options;
        this.paused = this.sliding = this.interval = this.$active = this.$items = null;
        this.options.pause == 'hover' && this.$element.on('mouseenter', $.proxy(this.pause, this)).on('mouseleave', $.proxy(this.cycle, this))
    };
    Carousel.DEFAULTS = {interval: 5e3, pause: 'hover', wrap: true};
    Carousel.prototype.cycle = function (e) {
        e || (this.paused = false);
        this.interval && clearInterval(this.interval);
        this.options.interval && !this.paused && (this.interval = setInterval($.proxy(this.next, this), this.options.interval));
        return this
    };
    Carousel.prototype.getActiveIndex = function () {
        this.$active = this.$element.find('.item.active');
        this.$items = this.$active.parent().children();
        return this.$items.index(this.$active)
    };
    Carousel.prototype.to = function (pos) {
        var that = this, activeIndex = this.getActiveIndex();
        if (pos > (this.$items.length - 1) || pos < 0) return;
        if (this.sliding) return this.$element.one('slid', function () {
            that.to(pos)
        });
        if (activeIndex == pos) return this.pause().cycle();
        return this.slide(pos > activeIndex ? 'next' : 'prev', $(this.$items[pos]))
    };
    Carousel.prototype.pause = function (e) {
        e || (this.paused = true);
        if (this.$element.find('.next, .prev').length && $.support.transition.end) {
            this.$element.trigger($.support.transition.end);
            this.cycle(true)
        }
        ;this.interval = clearInterval(this.interval);
        return this
    };
    Carousel.prototype.next = function () {
        if (this.sliding) return;
        return this.slide('next')
    };
    Carousel.prototype.prev = function () {
        if (this.sliding) return;
        return this.slide('prev')
    };
    Carousel.prototype.slide = function (type, next) {
        var $active = this.$element.find('.item.active'), $next = next || $active[type](), isCycling = this.interval,
            direction = type == 'next' ? 'left' : 'right', fallback = type == 'next' ? 'first' : 'last', that = this;
        if (!$next.length) {
            if (!this.options.wrap) return;
            $next = this.$element.find('.item')[fallback]()
        }
        ;this.sliding = true;
        isCycling && this.pause();
        var e = $.Event('slide.bs.carousel', {relatedTarget: $next[0], direction: direction});
        if ($next.hasClass('active')) return;
        if (this.$indicators.length) {
            this.$indicators.find('.active').removeClass('active');
            this.$element.one('slid', function () {
                var $nextIndicator = $(that.$indicators.children()[that.getActiveIndex()]);
                $nextIndicator && $nextIndicator.addClass('active')
            })
        }
        ;
        if ($.support.transition && this.$element.hasClass('slide')) {
            this.$element.trigger(e);
            if (e.isDefaultPrevented()) return;
            $next.addClass(type);
            $next[0].offsetWidth;
            $active.addClass(direction);
            $next.addClass(direction);
            $active.one($.support.transition.end, function () {
                $next.removeClass([type, direction].join(' ')).addClass('active');
                $active.removeClass(['active', direction].join(' '));
                that.sliding = false;
                setTimeout(function () {
                    that.$element.trigger('slid')
                }, 0)
            }).emulateTransitionEnd(600)
        } else {
            this.$element.trigger(e);
            if (e.isDefaultPrevented()) return;
            $active.removeClass('active');
            $next.addClass('active');
            this.sliding = false;
            this.$element.trigger('slid')
        }
        ;isCycling && this.cycle();
        return this
    };
    var old = $.fn.carousel;
    $.fn.carousel = function (option) {
        return this.each(function () {
            var $this = $(this), data = $this.data('bs.carousel'),
                options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option),
                action = typeof option == 'string' ? option : options.slide;
            if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)));
            if (typeof option == 'number') {
                data.to(option)
            } else if (action) {
                data[action]()
            } else if (options.interval) data.pause().cycle()
        })
    };
    $.fn.carousel.Constructor = Carousel;
    $.fn.carousel.noConflict = function () {
        $.fn.carousel = old;
        return this
    };
    $(document).on('click.bs.carousel.data-api', '[data-slide], [data-slide-to]', function (e) {
        var $this = $(this), href,
            $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')),
            options = $.extend({}, $target.data(), $this.data()), slideIndex = $this.attr('data-slide-to');
        if (slideIndex) options.interval = false;
        $target.carousel(options);
        if (slideIndex = $this.attr('data-slide-to')) $target.data('bs.carousel').to(slideIndex);
        e.preventDefault()
    });
    $(window).on('load', function () {
        $('[data-ride="carousel"]').each(function () {
            var $carousel = $(this);
            $carousel.carousel($carousel.data())
        })
    })
}(jQuery);
+function ($) {
    "use strict";
    var Collapse = function (element, options) {
        this.$element = $(element);
        this.options = $.extend({}, Collapse.DEFAULTS, options);
        this.transitioning = null;
        if (this.options.parent) this.$parent = $(this.options.parent);
        if (this.options.toggle) this.toggle()
    };
    Collapse.DEFAULTS = {toggle: true};
    Collapse.prototype.dimension = function () {
        var hasWidth = this.$element.hasClass('width');
        return hasWidth ? 'width' : 'height'
    };
    Collapse.prototype.show = function () {
        if (this.transitioning || this.$element.hasClass('in')) return;
        var startEvent = $.Event('show.bs.collapse');
        this.$element.trigger(startEvent);
        if (startEvent.isDefaultPrevented()) return;
        var actives = this.$parent && this.$parent.find('> .panel > .in');
        if (actives && actives.length) {
            var hasData = actives.data('bs.collapse');
            if (hasData && hasData.transitioning) return;
            actives.collapse('hide');
            hasData || actives.data('bs.collapse', null)
        }
        ;var dimension = this.dimension();
        this.$element.removeClass('collapse').addClass('collapsing')[dimension](0);
        this.transitioning = 1;
        var complete = function () {
            this.$element.removeClass('collapsing').addClass('in')[dimension]('auto');
            this.transitioning = 0;
            this.$element.trigger('shown.bs.collapse')
        };
        if (!$.support.transition) return complete.call(this);
        var scrollSize = $.camelCase(['scroll', dimension].join('-'));
        this.$element.one($.support.transition.end, $.proxy(complete, this)).emulateTransitionEnd(350)[dimension](this.$element[0][scrollSize])
    };
    Collapse.prototype.hide = function () {
        if (this.transitioning || !this.$element.hasClass('in')) return;
        var startEvent = $.Event('hide.bs.collapse');
        this.$element.trigger(startEvent);
        if (startEvent.isDefaultPrevented()) return;
        var dimension = this.dimension();
        this.$element[dimension](this.$element[dimension]())[0].offsetHeight;
        this.$element.addClass('collapsing').removeClass('collapse').removeClass('in');
        this.transitioning = 1;
        var complete = function () {
            this.transitioning = 0;
            this.$element.trigger('hidden.bs.collapse').removeClass('collapsing').addClass('collapse')
        };
        if (!$.support.transition) return complete.call(this);
        this.$element[dimension](0).one($.support.transition.end, $.proxy(complete, this)).emulateTransitionEnd(350)
    };
    Collapse.prototype.toggle = function () {
        this[this.$element.hasClass('in') ? 'hide' : 'show']()
    };
    var old = $.fn.collapse;
    $.fn.collapse = function (option) {
        return this.each(function () {
            var $this = $(this), data = $this.data('bs.collapse'),
                options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option);
            if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)));
            if (typeof option == 'string') data[option]()
        })
    };
    $.fn.collapse.Constructor = Collapse;
    $.fn.collapse.noConflict = function () {
        $.fn.collapse = old;
        return this
    };
    $(document).on('click.bs.collapse.data-api', '[data-toggle=collapse]', function (e) {
        var $this = $(this), href,
            target = $this.attr('data-target') || e.preventDefault() || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, ''),
            $target = $(target), data = $target.data('bs.collapse'), option = data ? 'toggle' : $this.data(),
            parent = $this.attr('data-parent'), $parent = parent && $(parent);
        if (!data || !data.transitioning) {
            if ($parent) $parent.find('[data-toggle=collapse][data-parent="' + parent + '"]').not($this).addClass('collapsed');
            $this[$target.hasClass('in') ? 'addClass' : 'removeClass']('collapsed')
        }
        ;$target.collapse(option)
    })
}(jQuery);
+function ($) {
    "use strict";
    var backdrop = '.dropdown-backdrop', toggle = '[data-toggle=dropdown]', Dropdown = function (element) {
        var $el = $(element).on('click.bs.dropdown', this.toggle)
    };
    Dropdown.prototype.toggle = function (e) {
        var $this = $(this);
        if ($this.is('.disabled, :disabled')) return;
        var $parent = getParent($this), isActive = $parent.hasClass('open');
        clearMenus();
        if (!isActive) {
            if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click', clearMenus);
            $parent.trigger(e = $.Event('show.bs.dropdown'));
            if (e.isDefaultPrevented()) return;
            $parent.toggleClass('open').trigger('shown.bs.dropdown');
            $this.focus()
        }
        ;
        return false
    };
    Dropdown.prototype.keydown = function (e) {
        if (!/(38|40|27)/.test(e.keyCode)) return;
        var $this = $(this);
        e.preventDefault();
        e.stopPropagation();
        if ($this.is('.disabled, :disabled')) return;
        var $parent = getParent($this), isActive = $parent.hasClass('open');
        if (!isActive || (isActive && e.keyCode == 27)) {
            if (e.which == 27) $parent.find(toggle).focus();
            return $this.click()
        }
        ;var $items = $('[role=menu] li:not(.divider):visible a', $parent);
        if (!$items.length) return;
        var index = $items.index($items.filter(':focus'));
        if (e.keyCode == 38 && index > 0) index--;
        if (e.keyCode == 40 && index < $items.length - 1) index++;
        if (!~index) index = 0;
        $items.eq(index).focus()
    }

    function clearMenus() {
        $(backdrop).remove();
        $(toggle).each(function (e) {
            var $parent = getParent($(this));
            if (!$parent.hasClass('open')) return;
            $parent.trigger(e = $.Event('hide.bs.dropdown'));
            if (e.isDefaultPrevented()) return;
            $parent.removeClass('open').trigger('hidden.bs.dropdown')
        })
    }

    function getParent($this) {
        var selector = $this.attr('data-target');
        if (!selector) {
            selector = $this.attr('href');
            selector = selector && /#/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '')
        }
        ;var $parent = selector && $(selector);
        return $parent && $parent.length ? $parent : $this.parent()
    };var old = $.fn.dropdown;
    $.fn.dropdown = function (option) {
        return this.each(function () {
            var $this = $(this), data = $this.data('dropdown');
            if (!data) $this.data('dropdown', (data = new Dropdown(this)));
            if (typeof option == 'string') data[option].call($this)
        })
    };
    $.fn.dropdown.Constructor = Dropdown;
    $.fn.dropdown.noConflict = function () {
        $.fn.dropdown = old;
        return this
    };
    $(document).on('click.bs.dropdown.data-api', clearMenus).on('click.bs.dropdown.data-api', '.dropdown form', function (e) {
        e.stopPropagation()
    }).on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle).on('keydown.bs.dropdown.data-api', toggle + ', [role=menu]', Dropdown.prototype.keydown)
}(jQuery);
+function ($) {
    "use strict";
    var Modal = function (element, options) {
        this.options = options;
        this.$element = $(element);
        this.$backdrop = this.isShown = null;
        if (this.options.remote) this.$element.load(this.options.remote)
    };
    Modal.DEFAULTS = {backdrop: true, keyboard: true, show: true};
    Modal.prototype.toggle = function (_relatedTarget) {
        return this[!this.isShown ? 'show' : 'hide'](_relatedTarget)
    };
    Modal.prototype.show = function (_relatedTarget) {
        var that = this, e = $.Event('show.bs.modal', {relatedTarget: _relatedTarget});
        this.$element.trigger(e);
        if (this.isShown || e.isDefaultPrevented()) return;
        this.isShown = true;
        this.escape();
        this.$element.on('click.dismiss.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this));
        this.backdrop(function () {
            var transition = $.support.transition && that.$element.hasClass('fade');
            if (!that.$element.parent().length) that.$element.appendTo(document.body);
            that.$element.show();
            if (transition) that.$element[0].offsetWidth;
            that.$element.addClass('in').attr('aria-hidden', false);
            that.enforceFocus();
            var e = $.Event('shown.bs.modal', {relatedTarget: _relatedTarget});
            transition ? that.$element.find('.modal-dialog').one($.support.transition.end, function () {
                that.$element.focus().trigger(e)
            }).emulateTransitionEnd(300) : that.$element.focus().trigger(e)
        })
    };
    Modal.prototype.hide = function (e) {
        if (e) e.preventDefault();
        e = $.Event('hide.bs.modal');
        this.$element.trigger(e);
        if (!this.isShown || e.isDefaultPrevented()) return;
        this.isShown = false;
        this.escape();
        $(document).off('focusin.bs.modal');
        this.$element.removeClass('in').attr('aria-hidden', true).off('click.dismiss.modal');
        $.support.transition && this.$element.hasClass('fade') ? this.$element.one($.support.transition.end, $.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal()
    };
    Modal.prototype.enforceFocus = function () {
        $(document).off('focusin.bs.modal').on('focusin.bs.modal', $.proxy(function (e) {
            if (this.$element[0] !== e.target && !this.$element.has(e.target).length) this.$element.focus()
        }, this))
    };
    Modal.prototype.escape = function () {
        if (this.isShown && this.options.keyboard) {
            this.$element.on('keyup.dismiss.bs.modal', $.proxy(function (e) {
                e.which == 27 && this.hide()
            }, this))
        } else if (!this.isShown) this.$element.off('keyup.dismiss.bs.modal')
    };
    Modal.prototype.hideModal = function () {
        var that = this;
        this.$element.hide();
        this.backdrop(function () {
            that.removeBackdrop();
            that.$element.trigger('hidden.bs.modal')
        })
    };
    Modal.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove();
        this.$backdrop = null
    };
    Modal.prototype.backdrop = function (callback) {
        var that = this, animate = this.$element.hasClass('fade') ? 'fade' : '';
        if (this.isShown && this.options.backdrop) {
            var doAnimate = $.support.transition && animate;
            this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />').appendTo(document.body);
            this.$element.on('click.dismiss.modal', $.proxy(function (e) {
                if (e.target !== e.currentTarget) return;
                this.options.backdrop == 'static' ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this)
            }, this));
            if (doAnimate) this.$backdrop[0].offsetWidth;
            this.$backdrop.addClass('in');
            if (!callback) return;
            doAnimate ? this.$backdrop.one($.support.transition.end, callback).emulateTransitionEnd(150) : callback()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass('in');
            $.support.transition && this.$element.hasClass('fade') ? this.$backdrop.one($.support.transition.end, callback).emulateTransitionEnd(150) : callback()
        } else if (callback) callback()
    };
    var old = $.fn.modal;
    $.fn.modal = function (option, _relatedTarget) {
        return this.each(function () {
            var $this = $(this), data = $this.data('bs.modal'),
                options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option);
            if (!data) $this.data('bs.modal', (data = new Modal(this, options)));
            if (typeof option == 'string') {
                data[option](_relatedTarget)
            } else if (options.show) data.show(_relatedTarget)
        })
    };
    $.fn.modal.Constructor = Modal;
    $.fn.modal.noConflict = function () {
        $.fn.modal = old;
        return this
    };
    $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
        var $this = $(this), href = $this.attr('href'),
            $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))),
            option = $target.data('modal') ? 'toggle' : $.extend({remote: !/#/.test(href) && href}, $target.data(), $this.data());
        e.preventDefault();
        $target.modal(option, this).one('hide', function () {
            $this.is(':visible') && $this.focus()
        })
    });
    $(document).on('show.bs.modal', '.modal', function () {
        $(document.body).addClass('modal-open')
    }).on('hidden.bs.modal', '.modal', function () {
        $(document.body).removeClass('modal-open')
    })
}(jQuery);
+function ($) {
    "use strict";
    var Tooltip = function (element, options) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null;
        this.init('tooltip', element, options)
    };
    Tooltip.DEFAULTS = {
        animation: true,
        placement: 'top',
        selector: false,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: 'hover focus',
        title: '',
        delay: 0,
        html: false,
        container: false
    };
    Tooltip.prototype.init = function (type, element, options) {
        this.enabled = true;
        this.type = type;
        this.$element = $(element);
        this.options = this.getOptions(options);
        var triggers = this.options.trigger.split(' ');
        for (var i = triggers.length; i--;) {
            var trigger = triggers[i];
            if (trigger == 'click') {
                this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
            } else if (trigger != 'manual') {
                var eventIn = trigger == 'hover' ? 'mouseenter' : 'focus',
                    eventOut = trigger == 'hover' ? 'mouseleave' : 'blur';
                this.$element.on(eventIn + '.' + this.type, this.options.selector, $.proxy(this.enter, this));
                this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
            }
        }
        ;this.options.selector ? (this._options = $.extend({}, this.options, {
            trigger: 'manual',
            selector: ''
        })) : this.fixTitle()
    };
    Tooltip.prototype.getDefaults = function () {
        return Tooltip.DEFAULTS
    };
    Tooltip.prototype.getOptions = function (options) {
        options = $.extend({}, this.getDefaults(), this.$element.data(), options);
        if (options.delay && typeof options.delay == 'number') options.delay = {
            show: options.delay,
            hide: options.delay
        };
        return options
    };
    Tooltip.prototype.getDelegateOptions = function () {
        var options = {}, defaults = this.getDefaults();
        this._options && $.each(this._options, function (key, value) {
            if (defaults[key] != value) options[key] = value
        });
        return options
    };
    Tooltip.prototype.enter = function (obj) {
        var self = obj instanceof this.constructor ? obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type);
        clearTimeout(self.timeout);
        self.hoverState = 'in';
        if (!self.options.delay || !self.options.delay.show) return self.show();
        self.timeout = setTimeout(function () {
            if (self.hoverState == 'in') self.show()
        }, self.options.delay.show)
    };
    Tooltip.prototype.leave = function (obj) {
        var self = obj instanceof this.constructor ? obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type);
        clearTimeout(self.timeout);
        self.hoverState = 'out';
        if (!self.options.delay || !self.options.delay.hide) return self.hide();
        self.timeout = setTimeout(function () {
            if (self.hoverState == 'out') self.hide()
        }, self.options.delay.hide)
    };
    Tooltip.prototype.show = function () {
        var e = $.Event('show.bs.' + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            if (e.isDefaultPrevented()) return;
            var $tip = this.tip();
            this.setContent();
            if (this.options.animation) $tip.addClass('fade');
            var placement = typeof this.options.placement == 'function' ? this.options.placement.call(this, $tip[0], this.$element[0]) : this.options.placement,
                autoToken = /\s?auto?\s?/i, autoPlace = autoToken.test(placement);
            if (autoPlace) placement = placement.replace(autoToken, '') || 'top';
            $tip.detach().css({top: 0, left: 0, display: 'block'}).addClass(placement);
            this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element);
            var pos = this.getPosition(), actualWidth = $tip[0].offsetWidth, actualHeight = $tip[0].offsetHeight;
            if (autoPlace) {
                var $parent = this.$element.parent(), orgPlacement = placement,
                    docScroll = document.documentElement.scrollTop || document.body.scrollTop,
                    parentWidth = this.options.container == 'body' ? window.innerWidth : $parent.outerWidth(),
                    parentHeight = this.options.container == 'body' ? window.innerHeight : $parent.outerHeight(),
                    parentLeft = this.options.container == 'body' ? 0 : $parent.offset().left;
                placement = placement == 'bottom' && pos.top + pos.height + actualHeight - docScroll > parentHeight ? 'top' : placement == 'top' && pos.top - docScroll - actualHeight < 0 ? 'bottom' : placement == 'right' && pos.right + actualWidth > parentWidth ? 'left' : placement == 'left' && pos.left - actualWidth < parentLeft ? 'right' : placement;
                $tip.removeClass(orgPlacement).addClass(placement)
            }
            ;var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight);
            this.applyPlacement(calculatedOffset, placement);
            this.$element.trigger('shown.bs.' + this.type)
        }
    };
    Tooltip.prototype.applyPlacement = function (offset, placement) {
        var replace, $tip = this.tip(), width = $tip[0].offsetWidth, height = $tip[0].offsetHeight,
            marginTop = parseInt($tip.css('margin-top'), 10), marginLeft = parseInt($tip.css('margin-left'), 10);
        if (isNaN(marginTop)) marginTop = 0;
        if (isNaN(marginLeft)) marginLeft = 0;
        offset.top = offset.top + marginTop;
        offset.left = offset.left + marginLeft;
        $tip.offset(offset).addClass('in');
        var actualWidth = $tip[0].offsetWidth, actualHeight = $tip[0].offsetHeight;
        if (placement == 'top' && actualHeight != height) {
            replace = true;
            offset.top = offset.top + height - actualHeight
        }
        ;
        if (/bottom|top/.test(placement)) {
            var delta = 0;
            if (offset.left < 0) {
                delta = offset.left * -2;
                offset.left = 0;
                $tip.offset(offset);
                actualWidth = $tip[0].offsetWidth;
                actualHeight = $tip[0].offsetHeight
            }
            ;this.replaceArrow(delta - width + actualWidth, actualWidth, 'left')
        } else this.replaceArrow(actualHeight - height, actualHeight, 'top');
        if (replace) $tip.offset(offset)
    };
    Tooltip.prototype.replaceArrow = function (delta, dimension, position) {
        this.arrow().css(position, delta ? (50 * (1 - delta / dimension) + "%") : '')
    };
    Tooltip.prototype.setContent = function () {
        var $tip = this.tip(), title = this.getTitle();
        $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title);
        $tip.removeClass('fade in top bottom left right')
    };
    Tooltip.prototype.hide = function () {
        var that = this, $tip = this.tip(), e = $.Event('hide.bs.' + this.type)

        function complete() {
            if (that.hoverState != 'in') $tip.detach()
        };this.$element.trigger(e);
        if (e.isDefaultPrevented()) return;
        $tip.removeClass('in');
        $.support.transition && this.$tip.hasClass('fade') ? $tip.one($.support.transition.end, complete).emulateTransitionEnd(150) : complete();
        this.$element.trigger('hidden.bs.' + this.type);
        return this
    };
    Tooltip.prototype.fixTitle = function () {
        var $e = this.$element;
        if ($e.attr('title') || typeof ($e.attr('data-original-title')) != 'string') $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    };
    Tooltip.prototype.hasContent = function () {
        return this.getTitle()
    };
    Tooltip.prototype.getPosition = function () {
        var el = this.$element[0];
        return $.extend({}, (typeof el.getBoundingClientRect == 'function') ? el.getBoundingClientRect() : {
            width: el.offsetWidth,
            height: el.offsetHeight
        }, this.$element.offset())
    };
    Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
        return placement == 'bottom' ? {
            top: pos.top + pos.height,
            left: pos.left + pos.width / 2 - actualWidth / 2
        } : placement == 'top' ? {
            top: pos.top - actualHeight,
            left: pos.left + pos.width / 2 - actualWidth / 2
        } : placement == 'left' ? {
            top: pos.top + pos.height / 2 - actualHeight / 2,
            left: pos.left - actualWidth
        } : {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width}
    };
    Tooltip.prototype.getTitle = function () {
        var title, $e = this.$element, o = this.options;
        title = $e.attr('data-original-title') || (typeof o.title == 'function' ? o.title.call($e[0]) : o.title);
        return title
    };
    Tooltip.prototype.tip = function () {
        return this.$tip = this.$tip || $(this.options.template)
    };
    Tooltip.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow')
    };
    Tooltip.prototype.validate = function () {
        if (!this.$element[0].parentNode) {
            this.hide();
            this.$element = null;
            this.options = null
        }
    };
    Tooltip.prototype.enable = function () {
        this.enabled = true
    };
    Tooltip.prototype.disable = function () {
        this.enabled = false
    };
    Tooltip.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    };
    Tooltip.prototype.toggle = function (e) {
        var self = e ? $(e.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type) : this;
        self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
    };
    Tooltip.prototype.destroy = function () {
        this.hide().$element.off('.' + this.type).removeData('bs.' + this.type)
    };
    var old = $.fn.tooltip;
    $.fn.tooltip = function (option) {
        return this.each(function () {
            var $this = $(this), data = $this.data('bs.tooltip'), options = typeof option == 'object' && option;
            if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)));
            if (typeof option == 'string') data[option]()
        })
    };
    $.fn.tooltip.Constructor = Tooltip;
    $.fn.tooltip.noConflict = function () {
        $.fn.tooltip = old;
        return this
    }
}(jQuery);
+function ($) {
    "use strict";
    var Popover = function (element, options) {
        this.init('popover', element, options)
    };
    if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js');
    Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
        placement: 'right',
        trigger: 'click',
        content: '',
        template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    });
    Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype);
    Popover.prototype.constructor = Popover;
    Popover.prototype.getDefaults = function () {
        return Popover.DEFAULTS
    };
    Popover.prototype.setContent = function () {
        var $tip = this.tip(), title = this.getTitle(), content = this.getContent();
        $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title);
        $tip.find('.popover-content')[this.options.html ? 'html' : 'text'](content);
        $tip.removeClass('fade top bottom left right in');
        if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
    };
    Popover.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    };
    Popover.prototype.getContent = function () {
        var $e = this.$element, o = this.options;
        return $e.attr('data-content') || (typeof o.content == 'function' ? o.content.call($e[0]) : o.content)
    };
    Popover.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find('.arrow')
    };
    Popover.prototype.tip = function () {
        if (!this.$tip) this.$tip = $(this.options.template);
        return this.$tip
    };
    var old = $.fn.popover;
    $.fn.popover = function (option) {
        return this.each(function () {
            var $this = $(this), data = $this.data('bs.popover'), options = typeof option == 'object' && option;
            if (!data) $this.data('bs.popover', (data = new Popover(this, options)));
            if (typeof option == 'string') data[option]()
        })
    };
    $.fn.popover.Constructor = Popover;
    $.fn.popover.noConflict = function () {
        $.fn.popover = old;
        return this
    }
}(jQuery);
+function ($) {
    "use strict"

    function ScrollSpy(element, options) {
        var href, process = $.proxy(this.process, this);
        this.$element = $(element).is('body') ? $(window) : $(element);
        this.$body = $('body');
        this.$scrollElement = this.$element.on('scroll.bs.scroll-spy.data-api', process);
        this.options = $.extend({}, ScrollSpy.DEFAULTS, options);
        this.selector = (this.options.target || ((href = $(element).attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) || '') + ' .nav li > a';
        this.offsets = $([]);
        this.targets = $([]);
        this.activeTarget = null;
        this.refresh();
        this.process()
    };ScrollSpy.DEFAULTS = {offset: 10};
    ScrollSpy.prototype.refresh = function () {
        var offsetMethod = this.$element[0] == window ? 'offset' : 'position';
        this.offsets = $([]);
        this.targets = $([]);
        var self = this, $targets = this.$body.find(this.selector).map(function () {
            var $el = $(this), href = $el.data('target') || $el.attr('href'), $href = /^#\w/.test(href) && $(href);
            return ($href && $href.length && [[$href[offsetMethod]().top + (!$.isWindow(self.$scrollElement.get(0)) && self.$scrollElement.scrollTop()), href]]) || null
        }).sort(function (a, b) {
            return a[0] - b[0]
        }).each(function () {
            self.offsets.push(this[0]);
            self.targets.push(this[1])
        })
    };
    ScrollSpy.prototype.process = function () {
        var scrollTop = this.$scrollElement.scrollTop() + this.options.offset,
            scrollHeight = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight,
            maxScroll = scrollHeight - this.$scrollElement.height(), offsets = this.offsets, targets = this.targets,
            activeTarget = this.activeTarget, i;
        if (scrollTop >= maxScroll) return activeTarget != (i = targets.last()[0]) && this.activate(i);
        for (i = offsets.length; i--;) activeTarget != targets[i] && scrollTop >= offsets[i] && (!offsets[i + 1] || scrollTop <= offsets[i + 1]) && this.activate(targets[i])
    };
    ScrollSpy.prototype.activate = function (target) {
        this.activeTarget = target;
        $(this.selector).parents('.active').removeClass('active');
        var selector = this.selector + '[data-target="' + target + '"],' + this.selector + '[href="' + target + '"]',
            active = $(selector).parents('li').addClass('active');
        if (active.parent('.dropdown-menu').length) active = active.closest('li.dropdown').addClass('active');
        active.trigger('activate')
    };
    var old = $.fn.scrollspy;
    $.fn.scrollspy = function (option) {
        return this.each(function () {
            var $this = $(this), data = $this.data('bs.scrollspy'), options = typeof option == 'object' && option;
            if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)));
            if (typeof option == 'string') data[option]()
        })
    };
    $.fn.scrollspy.Constructor = ScrollSpy;
    $.fn.scrollspy.noConflict = function () {
        $.fn.scrollspy = old;
        return this
    };
    $(window).on('load', function () {
        $('[data-spy="scroll"]').each(function () {
            var $spy = $(this);
            $spy.scrollspy($spy.data())
        })
    })
}(jQuery);
+function ($) {
    "use strict";
    var Tab = function (element) {
        this.element = $(element)
    };
    Tab.prototype.show = function () {
        var $this = this.element, $ul = $this.closest('ul:not(.dropdown-menu)'), selector = $this.data('target');
        if (!selector) {
            selector = $this.attr('href');
            selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '')
        }
        ;
        if ($this.parent('li').hasClass('active')) return;
        var previous = $ul.find('.active:last a')[0], e = $.Event('show.bs.tab', {relatedTarget: previous});
        $this.trigger(e);
        if (e.isDefaultPrevented()) return;
        var $target = $(selector);
        this.activate($this.parent('li'), $ul);
        this.activate($target, $target.parent(), function () {
            $this.trigger({type: 'shown.bs.tab', relatedTarget: previous})
        })
    };
    Tab.prototype.activate = function (element, container, callback) {
        var $active = container.find('> .active'),
            transition = callback && $.support.transition && $active.hasClass('fade')

        function next() {
            $active.removeClass('active').find('> .dropdown-menu > .active').removeClass('active');
            element.addClass('active');
            if (transition) {
                element[0].offsetWidth;
                element.addClass('in')
            } else element.removeClass('fade');
            if (element.parent('.dropdown-menu')) element.closest('li.dropdown').addClass('active');
            callback && callback()
        };transition ? $active.one($.support.transition.end, next).emulateTransitionEnd(150) : next();
        $active.removeClass('in')
    };
    var old = $.fn.tab;
    $.fn.tab = function (option) {
        return this.each(function () {
            var $this = $(this), data = $this.data('bs.tab');
            if (!data) $this.data('bs.tab', (data = new Tab(this)));
            if (typeof option == 'string') data[option]()
        })
    };
    $.fn.tab.Constructor = Tab;
    $.fn.tab.noConflict = function () {
        $.fn.tab = old;
        return this
    };
    $(document).on('click.bs.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
        e.preventDefault();
        $(this).tab('show')
    })
}(jQuery);
+function ($) {
    "use strict";
    var Affix = function (element, options) {
        this.options = $.extend({}, Affix.DEFAULTS, options);
        this.$window = $(window).on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this)).on('click.bs.affix.data-api', $.proxy(this.checkPositionWithEventLoop, this));
        this.$element = $(element);
        this.affixed = this.unpin = null;
        this.checkPosition()
    };
    Affix.RESET = 'affix affix-top affix-bottom';
    Affix.DEFAULTS = {offset: 0};
    Affix.prototype.checkPositionWithEventLoop = function () {
        setTimeout($.proxy(this.checkPosition, this), 1)
    };
    Affix.prototype.checkPosition = function () {
        if (!this.$element.is(':visible')) return;
        var scrollHeight = $(document).height(), scrollTop = this.$window.scrollTop(),
            position = this.$element.offset(), offset = this.options.offset, offsetTop = offset.top,
            offsetBottom = offset.bottom;
        if (typeof offset != 'object') offsetBottom = offsetTop = offset;
        if (typeof offsetTop == 'function') offsetTop = offset.top();
        if (typeof offsetBottom == 'function') offsetBottom = offset.bottom();
        var affix = this.unpin != null && (scrollTop + this.unpin <= position.top) ? false : offsetBottom != null && (position.top + this.$element.height() >= scrollHeight - offsetBottom) ? 'bottom' : offsetTop != null && (scrollTop <= offsetTop) ? 'top' : false;
        if (this.affixed === affix) return;
        if (this.unpin) this.$element.css('top', '');
        this.affixed = affix;
        this.unpin = affix == 'bottom' ? position.top - scrollTop : null;
        this.$element.removeClass(Affix.RESET).addClass('affix' + (affix ? '-' + affix : ''));
        if (affix == 'bottom') this.$element.offset({top: document.body.offsetHeight - offsetBottom - this.$element.height()})
    };
    var old = $.fn.affix;
    $.fn.affix = function (option) {
        return this.each(function () {
            var $this = $(this), data = $this.data('bs.affix'), options = typeof option == 'object' && option;
            if (!data) $this.data('bs.affix', (data = new Affix(this, options)));
            if (typeof option == 'string') data[option]()
        })
    };
    $.fn.affix.Constructor = Affix;
    $.fn.affix.noConflict = function () {
        $.fn.affix = old;
        return this
    };
    $(window).on('load', function () {
        $('[data-spy="affix"]').each(function () {
            var $spy = $(this), data = $spy.data();
            data.offset = data.offset || {};
            if (data.offsetBottom) data.offset.bottom = data.offsetBottom;
            if (data.offsetTop) data.offset.top = data.offsetTop;
            $spy.affix(data)
        })
    })
}(jQuery);
;