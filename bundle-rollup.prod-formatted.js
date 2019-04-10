"use strict";
var extendStatics = function(e, t) {
  return (extendStatics =
    Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array &&
      function(e, t) {
        e.__proto__ = t;
      }) ||
    function(e, t) {
      for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
    })(e, t);
};
function __extends(e, t) {
  function r() {
    this.constructor = e;
  }
  extendStatics(e, t),
    (e.prototype =
      null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()));
}
var __assign = function() {
    return (__assign =
      Object.assign ||
      function(e) {
        for (var t, r = 1, n = arguments.length; r < n; r++)
          for (var i in (t = arguments[r]))
            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e;
      }).apply(this, arguments);
  },
  nodejsCustomInspectSymbol =
    "function" == typeof Symbol
      ? Symbol.for("nodejs.util.inspect.custom")
      : void 0;
function _typeof(e) {
  return (_typeof =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function(e) {
          return typeof e;
        }
      : function(e) {
          return e &&
            "function" == typeof Symbol &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? "symbol"
            : typeof e;
        })(e);
}
var MAX_ARRAY_LENGTH = 10,
  MAX_RECURSIVE_DEPTH = 2;
function inspect(e) {
  return formatValue(e, []);
}
function formatValue(e, t) {
  switch (_typeof(e)) {
    case "string":
      return JSON.stringify(e);
    case "function":
      return e.name ? "[function ".concat(e.name, "]") : "[function]";
    case "object":
      return formatObjectValue(e, t);
    default:
      return String(e);
  }
}
function formatObjectValue(e, t) {
  if (-1 !== t.indexOf(e)) return "[Circular]";
  var r = [].concat(t, [e]);
  if (e) {
    var n = getCustomFn(e);
    if (n) {
      var i = n.call(e);
      if (i !== e) return "string" == typeof i ? i : formatValue(i, r);
    } else if (Array.isArray(e)) return formatArray(e, r);
    return formatObject(e, r);
  }
  return String(e);
}
function formatObject(e, t) {
  var r = Object.keys(e);
  return 0 === r.length
    ? "{}"
    : t.length > MAX_RECURSIVE_DEPTH
    ? "[" + getObjectTag(e) + "]"
    : "{ " +
      r
        .map(function(r) {
          return r + ": " + formatValue(e[r], t);
        })
        .join(", ") +
      " }";
}
function formatArray(e, t) {
  if (0 === e.length) return "[]";
  if (t.length > MAX_RECURSIVE_DEPTH) return "[Array]";
  for (
    var r = Math.min(MAX_ARRAY_LENGTH, e.length),
      n = e.length - r,
      i = [],
      o = 0;
    o < r;
    ++o
  )
    i.push(formatValue(e[o], t));
  return (
    1 === n
      ? i.push("... 1 more item")
      : n > 1 && i.push("... ".concat(n, " more items")),
    "[" + i.join(", ") + "]"
  );
}
function getCustomFn(e) {
  var t = e[String(nodejsCustomInspectSymbol)];
  return "function" == typeof t
    ? t
    : "function" == typeof e.inspect
    ? e.inspect
    : void 0;
}
function getObjectTag(e) {
  var t = Object.prototype.toString
    .call(e)
    .replace(/^\[object /, "")
    .replace(/]$/, "");
  if ("Object" === t && "function" == typeof e.constructor) {
    var r = e.constructor.name;
    if ("string" == typeof r) return r;
  }
  return t;
}
var QueryDocumentKeys = {
    Name: [],
    Document: ["definitions"],
    OperationDefinition: [
      "name",
      "variableDefinitions",
      "directives",
      "selectionSet"
    ],
    VariableDefinition: ["variable", "type", "defaultValue", "directives"],
    Variable: ["name"],
    SelectionSet: ["selections"],
    Field: ["alias", "name", "arguments", "directives", "selectionSet"],
    Argument: ["name", "value"],
    FragmentSpread: ["name", "directives"],
    InlineFragment: ["typeCondition", "directives", "selectionSet"],
    FragmentDefinition: [
      "name",
      "variableDefinitions",
      "typeCondition",
      "directives",
      "selectionSet"
    ],
    IntValue: [],
    FloatValue: [],
    StringValue: [],
    BooleanValue: [],
    NullValue: [],
    EnumValue: [],
    ListValue: ["values"],
    ObjectValue: ["fields"],
    ObjectField: ["name", "value"],
    Directive: ["name", "arguments"],
    NamedType: ["name"],
    ListType: ["type"],
    NonNullType: ["type"],
    SchemaDefinition: ["directives", "operationTypes"],
    OperationTypeDefinition: ["type"],
    ScalarTypeDefinition: ["description", "name", "directives"],
    ObjectTypeDefinition: [
      "description",
      "name",
      "interfaces",
      "directives",
      "fields"
    ],
    FieldDefinition: ["description", "name", "arguments", "type", "directives"],
    InputValueDefinition: [
      "description",
      "name",
      "type",
      "defaultValue",
      "directives"
    ],
    InterfaceTypeDefinition: ["description", "name", "directives", "fields"],
    UnionTypeDefinition: ["description", "name", "directives", "types"],
    EnumTypeDefinition: ["description", "name", "directives", "values"],
    EnumValueDefinition: ["description", "name", "directives"],
    InputObjectTypeDefinition: ["description", "name", "directives", "fields"],
    DirectiveDefinition: ["description", "name", "arguments", "locations"],
    SchemaExtension: ["directives", "operationTypes"],
    ScalarTypeExtension: ["name", "directives"],
    ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
    InterfaceTypeExtension: ["name", "directives", "fields"],
    UnionTypeExtension: ["name", "directives", "types"],
    EnumTypeExtension: ["name", "directives", "values"],
    InputObjectTypeExtension: ["name", "directives", "fields"]
  },
  BREAK = {};
function visit(e, t) {
  var r =
      arguments.length > 2 && void 0 !== arguments[2]
        ? arguments[2]
        : QueryDocumentKeys,
    n = void 0,
    i = Array.isArray(e),
    o = [e],
    s = -1,
    a = [],
    u = void 0,
    c = void 0,
    l = void 0,
    f = [],
    p = [],
    v = e;
  do {
    var y = ++s === o.length,
      h = y && 0 !== a.length;
    if (y) {
      if (
        ((c = 0 === p.length ? void 0 : f[f.length - 1]),
        (u = l),
        (l = p.pop()),
        h)
      ) {
        if (i) u = u.slice();
        else {
          for (var b = {}, d = Object.keys(u), g = 0; g < d.length; g++) {
            var m = d[g];
            b[m] = u[m];
          }
          u = b;
        }
        for (var w = 0, O = 0; O < a.length; O++) {
          var E = a[O][0],
            _ = a[O][1];
          i && (E -= w), i && null === _ ? (u.splice(E, 1), w++) : (u[E] = _);
        }
      }
      (s = n.index), (o = n.keys), (a = n.edits), (i = n.inArray), (n = n.prev);
    } else {
      if (((c = l ? (i ? s : o[s]) : void 0), null == (u = l ? l[c] : v)))
        continue;
      l && f.push(c);
    }
    var j = void 0;
    if (!Array.isArray(u)) {
      if (!isNode(u)) throw new Error("Invalid AST Node: " + inspect(u));
      var k = getVisitFn(t, u.kind, y);
      if (k) {
        if ((j = k.call(t, u, c, l, f, p)) === BREAK) break;
        if (!1 === j) {
          if (!y) {
            f.pop();
            continue;
          }
        } else if (void 0 !== j && (a.push([c, j]), !y)) {
          if (!isNode(j)) {
            f.pop();
            continue;
          }
          u = j;
        }
      }
    }
    void 0 === j && h && a.push([c, u]),
      y
        ? f.pop()
        : ((n = { inArray: i, index: s, keys: o, edits: a, prev: n }),
          (o = (i = Array.isArray(u)) ? u : r[u.kind] || []),
          (s = -1),
          (a = []),
          l && p.push(l),
          (l = u));
  } while (void 0 !== n);
  return 0 !== a.length && (v = a[a.length - 1][1]), v;
}
function isNode(e) {
  return Boolean(e && "string" == typeof e.kind);
}
function getVisitFn(e, t, r) {
  var n = e[t];
  if (n) {
    if (!r && "function" == typeof n) return n;
    var i = r ? n.leave : n.enter;
    if ("function" == typeof i) return i;
  } else {
    var o = r ? e.leave : e.enter;
    if (o) {
      if ("function" == typeof o) return o;
      var s = o[t];
      if ("function" == typeof s) return s;
    }
  }
}
var genericMessage = "Invariant Violation",
  _a = Object.setPrototypeOf,
  setPrototypeOf =
    void 0 === _a
      ? function(e, t) {
          return (e.__proto__ = t), e;
        }
      : _a,
  InvariantError = (function(e) {
    function t(r) {
      void 0 === r && (r = genericMessage);
      var n = e.call(this, r) || this;
      return (
        (n.framesToPop = 1),
        (n.name = genericMessage),
        setPrototypeOf(n, t.prototype),
        n
      );
    }
    return __extends(t, e), t;
  })(Error);
function invariant(e, t) {
  if (!e) throw new InvariantError(t);
}
function getOperationName(e) {
  return (
    e.definitions
      .filter(function(e) {
        return "OperationDefinition" === e.kind && e.name;
      })
      .map(function(e) {
        return e.name.value;
      })[0] || null
  );
}
!(function(e) {
  (e.warn = function() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return console.warn.apply(console, e);
  }),
    (e.error = function() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      return console.error.apply(console, e);
    });
})(invariant || (invariant = {}));
var toString = Object.prototype.toString;
function cloneDeep(e) {
  return cloneDeepHelper(e, new Map());
}
function cloneDeepHelper(e, t) {
  switch (toString.call(e)) {
    case "[object Array]":
      if (t.has(e)) return t.get(e);
      var r = e.slice(0);
      return (
        t.set(e, r),
        r.forEach(function(e, n) {
          r[n] = cloneDeepHelper(e, t);
        }),
        r
      );
    case "[object Object]":
      if (t.has(e)) return t.get(e);
      var n = Object.create(Object.getPrototypeOf(e));
      return (
        t.set(e, n),
        Object.keys(e).forEach(function(r) {
          n[r] = cloneDeepHelper(e[r], t);
        }),
        n
      );
    default:
      return e;
  }
}
function tryFunctionOrLogError(e) {
  try {
    return e();
  } catch (e) {
    console.error && console.error(e);
  }
}
function isEqual(e, t) {
  if (e === t) return !0;
  if (e instanceof Date && t instanceof Date)
    return e.getTime() === t.getTime();
  if (null != e && "object" == typeof e && null != t && "object" == typeof t) {
    for (var r in e)
      if (Object.prototype.hasOwnProperty.call(e, r)) {
        if (!Object.prototype.hasOwnProperty.call(t, r)) return !1;
        if (!isEqual(e[r], t[r])) return !1;
      }
    for (var r in t)
      if (
        Object.prototype.hasOwnProperty.call(t, r) &&
        !Object.prototype.hasOwnProperty.call(e, r)
      )
        return !1;
    return !0;
  }
  return !1;
}
function unwrapExports(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function createCommonjsModule(e, t) {
  return e((t = { exports: {} }), t.exports), t.exports;
}
var Observable_1 = createCommonjsModule(function(e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var r = (function() {
    function e(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
      }
    }
    return function(t, r, n) {
      return r && e(t.prototype, r), n && e(t, n), t;
    };
  })();
  function n(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  var i = function() {
      return "function" == typeof Symbol;
    },
    o = function(e) {
      return i() && Boolean(Symbol[e]);
    },
    s = function(e) {
      return o(e) ? Symbol[e] : "@@" + e;
    };
  i() && !o("observable") && (Symbol.observable = Symbol("observable"));
  var a = s("iterator"),
    u = s("observable"),
    c = s("species");
  function l(e, t) {
    var r = e[t];
    if (null != r) {
      if ("function" != typeof r) throw new TypeError(r + " is not a function");
      return r;
    }
  }
  function f(e) {
    var t = e.constructor;
    return (
      void 0 !== t && null === (t = t[c]) && (t = void 0), void 0 !== t ? t : O
    );
  }
  function p(e) {
    return e instanceof O;
  }
  function v(e) {
    v.log
      ? v.log(e)
      : setTimeout(function() {
          throw e;
        });
  }
  function y(e) {
    Promise.resolve().then(function() {
      try {
        e();
      } catch (e) {
        v(e);
      }
    });
  }
  function h(e) {
    var t = e._cleanup;
    if (void 0 !== t && ((e._cleanup = void 0), t))
      try {
        if ("function" == typeof t) t();
        else {
          var r = l(t, "unsubscribe");
          r && r.call(t);
        }
      } catch (e) {
        v(e);
      }
  }
  function b(e) {
    (e._observer = void 0), (e._queue = void 0), (e._state = "closed");
  }
  function d(e, t, r) {
    e._state = "running";
    var n = e._observer;
    try {
      var i = l(n, t);
      switch (t) {
        case "next":
          i && i.call(n, r);
          break;
        case "error":
          if ((b(e), !i)) throw r;
          i.call(n, r);
          break;
        case "complete":
          b(e), i && i.call(n);
      }
    } catch (e) {
      v(e);
    }
    "closed" === e._state
      ? h(e)
      : "running" === e._state && (e._state = "ready");
  }
  function g(e, t, r) {
    if ("closed" !== e._state) {
      if ("buffering" !== e._state)
        return "ready" !== e._state
          ? ((e._state = "buffering"),
            (e._queue = [{ type: t, value: r }]),
            void y(function() {
              return (function(e) {
                var t = e._queue;
                if (t) {
                  (e._queue = void 0), (e._state = "ready");
                  for (
                    var r = 0;
                    r < t.length &&
                    (d(e, t[r].type, t[r].value), "closed" !== e._state);
                    ++r
                  );
                }
              })(e);
            }))
          : void d(e, t, r);
      e._queue.push({ type: t, value: r });
    }
  }
  var m = (function() {
      function e(t, r) {
        n(this, e),
          (this._cleanup = void 0),
          (this._observer = t),
          (this._queue = void 0),
          (this._state = "initializing");
        var i = new w(this);
        try {
          this._cleanup = r.call(void 0, i);
        } catch (e) {
          i.error(e);
        }
        "initializing" === this._state && (this._state = "ready");
      }
      return (
        r(e, [
          {
            key: "unsubscribe",
            value: function() {
              "closed" !== this._state && (b(this), h(this));
            }
          },
          {
            key: "closed",
            get: function() {
              return "closed" === this._state;
            }
          }
        ]),
        e
      );
    })(),
    w = (function() {
      function e(t) {
        n(this, e), (this._subscription = t);
      }
      return (
        r(e, [
          {
            key: "next",
            value: function(e) {
              g(this._subscription, "next", e);
            }
          },
          {
            key: "error",
            value: function(e) {
              g(this._subscription, "error", e);
            }
          },
          {
            key: "complete",
            value: function() {
              g(this._subscription, "complete");
            }
          },
          {
            key: "closed",
            get: function() {
              return "closed" === this._subscription._state;
            }
          }
        ]),
        e
      );
    })(),
    O = (t.Observable = (function() {
      function e(t) {
        if ((n(this, e), !(this instanceof e)))
          throw new TypeError("Observable cannot be called as a function");
        if ("function" != typeof t)
          throw new TypeError("Observable initializer must be a function");
        this._subscriber = t;
      }
      return (
        r(
          e,
          [
            {
              key: "subscribe",
              value: function(e) {
                return (
                  ("object" == typeof e && null !== e) ||
                    (e = {
                      next: e,
                      error: arguments[1],
                      complete: arguments[2]
                    }),
                  new m(e, this._subscriber)
                );
              }
            },
            {
              key: "forEach",
              value: function(e) {
                var t = this;
                return new Promise(function(r, n) {
                  if ("function" == typeof e)
                    var i = t.subscribe({
                      next: function(t) {
                        try {
                          e(t, o);
                        } catch (e) {
                          n(e), i.unsubscribe();
                        }
                      },
                      error: n,
                      complete: r
                    });
                  else n(new TypeError(e + " is not a function"));
                  function o() {
                    i.unsubscribe(), r();
                  }
                });
              }
            },
            {
              key: "map",
              value: function(e) {
                var t = this;
                if ("function" != typeof e)
                  throw new TypeError(e + " is not a function");
                return new (f(this))(function(r) {
                  return t.subscribe({
                    next: function(t) {
                      try {
                        t = e(t);
                      } catch (e) {
                        return r.error(e);
                      }
                      r.next(t);
                    },
                    error: function(e) {
                      r.error(e);
                    },
                    complete: function() {
                      r.complete();
                    }
                  });
                });
              }
            },
            {
              key: "filter",
              value: function(e) {
                var t = this;
                if ("function" != typeof e)
                  throw new TypeError(e + " is not a function");
                return new (f(this))(function(r) {
                  return t.subscribe({
                    next: function(t) {
                      try {
                        if (!e(t)) return;
                      } catch (e) {
                        return r.error(e);
                      }
                      r.next(t);
                    },
                    error: function(e) {
                      r.error(e);
                    },
                    complete: function() {
                      r.complete();
                    }
                  });
                });
              }
            },
            {
              key: "reduce",
              value: function(e) {
                var t = this;
                if ("function" != typeof e)
                  throw new TypeError(e + " is not a function");
                var r = f(this),
                  n = arguments.length > 1,
                  i = !1,
                  o = arguments[1];
                return new r(function(r) {
                  return t.subscribe({
                    next: function(t) {
                      var s = !i;
                      if (((i = !0), !s || n))
                        try {
                          o = e(o, t);
                        } catch (e) {
                          return r.error(e);
                        }
                      else o = t;
                    },
                    error: function(e) {
                      r.error(e);
                    },
                    complete: function() {
                      if (!i && !n)
                        return r.error(
                          new TypeError("Cannot reduce an empty sequence")
                        );
                      r.next(o), r.complete();
                    }
                  });
                });
              }
            },
            {
              key: "concat",
              value: function() {
                for (
                  var e = this, t = arguments.length, r = Array(t), n = 0;
                  n < t;
                  n++
                )
                  r[n] = arguments[n];
                var i = f(this);
                return new i(function(t) {
                  var n = void 0,
                    o = 0;
                  return (
                    (function e(s) {
                      n = s.subscribe({
                        next: function(e) {
                          t.next(e);
                        },
                        error: function(e) {
                          t.error(e);
                        },
                        complete: function() {
                          o === r.length
                            ? ((n = void 0), t.complete())
                            : e(i.from(r[o++]));
                        }
                      });
                    })(e),
                    function() {
                      n && (n.unsubscribe(), (n = void 0));
                    }
                  );
                });
              }
            },
            {
              key: "flatMap",
              value: function(e) {
                var t = this;
                if ("function" != typeof e)
                  throw new TypeError(e + " is not a function");
                var r = f(this);
                return new r(function(n) {
                  var i = [],
                    o = t.subscribe({
                      next: function(t) {
                        if (e)
                          try {
                            t = e(t);
                          } catch (e) {
                            return n.error(e);
                          }
                        var o = r.from(t).subscribe({
                          next: function(e) {
                            n.next(e);
                          },
                          error: function(e) {
                            n.error(e);
                          },
                          complete: function() {
                            var e = i.indexOf(o);
                            e >= 0 && i.splice(e, 1), s();
                          }
                        });
                        i.push(o);
                      },
                      error: function(e) {
                        n.error(e);
                      },
                      complete: function() {
                        s();
                      }
                    });
                  function s() {
                    o.closed && 0 === i.length && n.complete();
                  }
                  return function() {
                    i.forEach(function(e) {
                      return e.unsubscribe();
                    }),
                      o.unsubscribe();
                  };
                });
              }
            },
            {
              key: u,
              value: function() {
                return this;
              }
            }
          ],
          [
            {
              key: "from",
              value: function(t) {
                var r = "function" == typeof this ? this : e;
                if (null == t) throw new TypeError(t + " is not an object");
                var n = l(t, u);
                if (n) {
                  var i = n.call(t);
                  if (Object(i) !== i)
                    throw new TypeError(i + " is not an object");
                  return p(i) && i.constructor === r
                    ? i
                    : new r(function(e) {
                        return i.subscribe(e);
                      });
                }
                if (o("iterator") && (n = l(t, a)))
                  return new r(function(e) {
                    y(function() {
                      if (!e.closed) {
                        var r = !0,
                          i = !1,
                          o = void 0;
                        try {
                          for (
                            var s, a = n.call(t)[Symbol.iterator]();
                            !(r = (s = a.next()).done);
                            r = !0
                          ) {
                            var u = s.value;
                            if ((e.next(u), e.closed)) return;
                          }
                        } catch (e) {
                          (i = !0), (o = e);
                        } finally {
                          try {
                            !r && a.return && a.return();
                          } finally {
                            if (i) throw o;
                          }
                        }
                        e.complete();
                      }
                    });
                  });
                if (Array.isArray(t))
                  return new r(function(e) {
                    y(function() {
                      if (!e.closed) {
                        for (var r = 0; r < t.length; ++r)
                          if ((e.next(t[r]), e.closed)) return;
                        e.complete();
                      }
                    });
                  });
                throw new TypeError(t + " is not observable");
              }
            },
            {
              key: "of",
              value: function() {
                for (var t = arguments.length, r = Array(t), n = 0; n < t; n++)
                  r[n] = arguments[n];
                return new ("function" == typeof this ? this : e)(function(e) {
                  y(function() {
                    if (!e.closed) {
                      for (var t = 0; t < r.length; ++t)
                        if ((e.next(r[t]), e.closed)) return;
                      e.complete();
                    }
                  });
                });
              }
            },
            {
              key: c,
              get: function() {
                return this;
              }
            }
          ]
        ),
        e
      );
    })());
  i() &&
    Object.defineProperty(O, Symbol("extensions"), {
      value: { symbol: u, hostReportError: v },
      configurable: !0
    });
});
unwrapExports(Observable_1);
var Observable_2 = Observable_1.Observable,
  zenObservable = Observable_1.Observable,
  Observable = zenObservable,
  genericMessage$1 = "Invariant Violation",
  _a$1 = Object.setPrototypeOf,
  setPrototypeOf$1 =
    void 0 === _a$1
      ? function(e, t) {
          return (e.__proto__ = t), e;
        }
      : _a$1,
  InvariantError$1 = (function(e) {
    function t(r) {
      void 0 === r && (r = genericMessage$1);
      var n =
        e.call(
          this,
          "number" == typeof r
            ? genericMessage$1 +
                ": " +
                r +
                " (see https://github.com/apollographql/invariant-packages)"
            : r
        ) || this;
      return (
        (n.framesToPop = 1),
        (n.name = genericMessage$1),
        setPrototypeOf$1(n, t.prototype),
        n
      );
    }
    return __extends(t, e), t;
  })(Error);
function invariant$1(e, t) {
  if (!e) throw new InvariantError$1(t);
}
function printBlockString(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
    r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    n = -1 === e.indexOf("\n"),
    i = " " === e[0] || "\t" === e[0],
    o = '"' === e[e.length - 1],
    s = !n || o || r,
    a = "";
  return (
    !s || (n && i) || (a += "\n" + t),
    (a += t ? e.replace(/\n/g, "\n" + t) : e),
    s && (a += "\n"),
    '"""' + a.replace(/"""/g, '\\"""') + '"""'
  );
}
function print(e) {
  return visit(e, { leave: printDocASTReducer });
}
!(function(e) {
  (e.warn = function() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return console.warn.apply(console, e);
  }),
    (e.error = function() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      return console.error.apply(console, e);
    });
})(invariant$1 || (invariant$1 = {}));
var printDocASTReducer = {
  Name: function(e) {
    return e.value;
  },
  Variable: function(e) {
    return "$" + e.name;
  },
  Document: function(e) {
    return join(e.definitions, "\n\n") + "\n";
  },
  OperationDefinition: function(e) {
    var t = e.operation,
      r = e.name,
      n = wrap("(", join(e.variableDefinitions, ", "), ")"),
      i = join(e.directives, " "),
      o = e.selectionSet;
    return r || i || n || "query" !== t
      ? join([t, join([r, n]), i, o], " ")
      : o;
  },
  VariableDefinition: function(e) {
    var t = e.variable,
      r = e.type,
      n = e.defaultValue,
      i = e.directives;
    return t + ": " + r + wrap(" = ", n) + wrap(" ", join(i, " "));
  },
  SelectionSet: function(e) {
    return block(e.selections);
  },
  Field: function(e) {
    var t = e.alias,
      r = e.name,
      n = e.arguments,
      i = e.directives,
      o = e.selectionSet;
    return join(
      [wrap("", t, ": ") + r + wrap("(", join(n, ", "), ")"), join(i, " "), o],
      " "
    );
  },
  Argument: function(e) {
    return e.name + ": " + e.value;
  },
  FragmentSpread: function(e) {
    return "..." + e.name + wrap(" ", join(e.directives, " "));
  },
  InlineFragment: function(e) {
    var t = e.typeCondition,
      r = e.directives,
      n = e.selectionSet;
    return join(["...", wrap("on ", t), join(r, " "), n], " ");
  },
  FragmentDefinition: function(e) {
    var t = e.name,
      r = e.typeCondition,
      n = e.variableDefinitions,
      i = e.directives,
      o = e.selectionSet;
    return (
      "fragment ".concat(t).concat(wrap("(", join(n, ", "), ")"), " ") +
      "on ".concat(r, " ").concat(wrap("", join(i, " "), " ")) +
      o
    );
  },
  IntValue: function(e) {
    return e.value;
  },
  FloatValue: function(e) {
    return e.value;
  },
  StringValue: function(e, t) {
    var r = e.value;
    return e.block
      ? printBlockString(r, "description" === t ? "" : "  ")
      : JSON.stringify(r);
  },
  BooleanValue: function(e) {
    return e.value ? "true" : "false";
  },
  NullValue: function() {
    return "null";
  },
  EnumValue: function(e) {
    return e.value;
  },
  ListValue: function(e) {
    return "[" + join(e.values, ", ") + "]";
  },
  ObjectValue: function(e) {
    return "{" + join(e.fields, ", ") + "}";
  },
  ObjectField: function(e) {
    return e.name + ": " + e.value;
  },
  Directive: function(e) {
    return "@" + e.name + wrap("(", join(e.arguments, ", "), ")");
  },
  NamedType: function(e) {
    return e.name;
  },
  ListType: function(e) {
    return "[" + e.type + "]";
  },
  NonNullType: function(e) {
    return e.type + "!";
  },
  SchemaDefinition: function(e) {
    var t = e.directives,
      r = e.operationTypes;
    return join(["schema", join(t, " "), block(r)], " ");
  },
  OperationTypeDefinition: function(e) {
    return e.operation + ": " + e.type;
  },
  ScalarTypeDefinition: addDescription(function(e) {
    return join(["scalar", e.name, join(e.directives, " ")], " ");
  }),
  ObjectTypeDefinition: addDescription(function(e) {
    var t = e.name,
      r = e.interfaces,
      n = e.directives,
      i = e.fields;
    return join(
      ["type", t, wrap("implements ", join(r, " & ")), join(n, " "), block(i)],
      " "
    );
  }),
  FieldDefinition: addDescription(function(e) {
    var t = e.name,
      r = e.arguments,
      n = e.type,
      i = e.directives;
    return (
      t +
      (hasMultilineItems(r)
        ? wrap("(\n", indent(join(r, "\n")), "\n)")
        : wrap("(", join(r, ", "), ")")) +
      ": " +
      n +
      wrap(" ", join(i, " "))
    );
  }),
  InputValueDefinition: addDescription(function(e) {
    var t = e.name,
      r = e.type,
      n = e.defaultValue,
      i = e.directives;
    return join([t + ": " + r, wrap("= ", n), join(i, " ")], " ");
  }),
  InterfaceTypeDefinition: addDescription(function(e) {
    var t = e.name,
      r = e.directives,
      n = e.fields;
    return join(["interface", t, join(r, " "), block(n)], " ");
  }),
  UnionTypeDefinition: addDescription(function(e) {
    var t = e.name,
      r = e.directives,
      n = e.types;
    return join(
      [
        "union",
        t,
        join(r, " "),
        n && 0 !== n.length ? "= " + join(n, " | ") : ""
      ],
      " "
    );
  }),
  EnumTypeDefinition: addDescription(function(e) {
    var t = e.name,
      r = e.directives,
      n = e.values;
    return join(["enum", t, join(r, " "), block(n)], " ");
  }),
  EnumValueDefinition: addDescription(function(e) {
    return join([e.name, join(e.directives, " ")], " ");
  }),
  InputObjectTypeDefinition: addDescription(function(e) {
    var t = e.name,
      r = e.directives,
      n = e.fields;
    return join(["input", t, join(r, " "), block(n)], " ");
  }),
  DirectiveDefinition: addDescription(function(e) {
    var t = e.name,
      r = e.arguments,
      n = e.locations;
    return (
      "directive @" +
      t +
      (hasMultilineItems(r)
        ? wrap("(\n", indent(join(r, "\n")), "\n)")
        : wrap("(", join(r, ", "), ")")) +
      " on " +
      join(n, " | ")
    );
  }),
  SchemaExtension: function(e) {
    var t = e.directives,
      r = e.operationTypes;
    return join(["extend schema", join(t, " "), block(r)], " ");
  },
  ScalarTypeExtension: function(e) {
    return join(["extend scalar", e.name, join(e.directives, " ")], " ");
  },
  ObjectTypeExtension: function(e) {
    var t = e.name,
      r = e.interfaces,
      n = e.directives,
      i = e.fields;
    return join(
      [
        "extend type",
        t,
        wrap("implements ", join(r, " & ")),
        join(n, " "),
        block(i)
      ],
      " "
    );
  },
  InterfaceTypeExtension: function(e) {
    var t = e.name,
      r = e.directives,
      n = e.fields;
    return join(["extend interface", t, join(r, " "), block(n)], " ");
  },
  UnionTypeExtension: function(e) {
    var t = e.name,
      r = e.directives,
      n = e.types;
    return join(
      [
        "extend union",
        t,
        join(r, " "),
        n && 0 !== n.length ? "= " + join(n, " | ") : ""
      ],
      " "
    );
  },
  EnumTypeExtension: function(e) {
    var t = e.name,
      r = e.directives,
      n = e.values;
    return join(["extend enum", t, join(r, " "), block(n)], " ");
  },
  InputObjectTypeExtension: function(e) {
    var t = e.name,
      r = e.directives,
      n = e.fields;
    return join(["extend input", t, join(r, " "), block(n)], " ");
  }
};
function addDescription(e) {
  return function(t) {
    return join([t.description, e(t)], "\n");
  };
}
function join(e, t) {
  return e
    ? e
        .filter(function(e) {
          return e;
        })
        .join(t || "")
    : "";
}
function block(e) {
  return e && 0 !== e.length ? "{\n" + indent(join(e, "\n")) + "\n}" : "";
}
function wrap(e, t, r) {
  return t ? e + t + (r || "") : "";
}
function indent(e) {
  return e && "  " + e.replace(/\n/g, "\n  ");
}
function isMultiline(e) {
  return -1 !== e.indexOf("\n");
}
function hasMultilineItems(e) {
  return e && e.some(isMultiline);
}
function validateOperation(e) {
  for (
    var t = ["query", "operationName", "variables", "extensions", "context"],
      r = 0,
      n = Object.keys(e);
    r < n.length;
    r++
  ) {
    var i = n[r];
    if (t.indexOf(i) < 0)
      throw "production" === process.env.NODE_ENV
        ? new InvariantError$1(2)
        : new InvariantError$1("illegal argument: " + i);
  }
  return e;
}
var LinkError = (function(e) {
  function t(t, r) {
    var n = e.call(this, t) || this;
    return (n.link = r), n;
  }
  return __extends(t, e), t;
})(Error);
function isTerminating(e) {
  return e.request.length <= 1;
}
function transformOperation(e) {
  var t = {
    variables: e.variables || {},
    extensions: e.extensions || {},
    operationName: e.operationName,
    query: e.query
  };
  return (
    t.operationName ||
      (t.operationName =
        "string" != typeof t.query ? getOperationName(t.query) : ""),
    t
  );
}
function createOperation(e, t) {
  var r = __assign({}, e);
  return (
    Object.defineProperty(t, "setContext", {
      enumerable: !1,
      value: function(e) {
        r = __assign({}, r, "function" == typeof e ? e(r) : e);
      }
    }),
    Object.defineProperty(t, "getContext", {
      enumerable: !1,
      value: function() {
        return __assign({}, r);
      }
    }),
    Object.defineProperty(t, "toKey", {
      enumerable: !1,
      value: function() {
        return getKey(t);
      }
    }),
    t
  );
}
function getKey(e) {
  return (
    print(e.query) + "|" + JSON.stringify(e.variables) + "|" + e.operationName
  );
}
function passthrough(e, t) {
  return t ? t(e) : Observable.of();
}
function toLink(e) {
  return "function" == typeof e ? new ApolloLink(e) : e;
}
function empty() {
  return new ApolloLink(function() {
    return Observable.of();
  });
}
function from(e) {
  return 0 === e.length
    ? empty()
    : e.map(toLink).reduce(function(e, t) {
        return e.concat(t);
      });
}
function split(e, t, r) {
  var n = toLink(t),
    i = toLink(r || new ApolloLink(passthrough));
  return isTerminating(n) && isTerminating(i)
    ? new ApolloLink(function(t) {
        return e(t)
          ? n.request(t) || Observable.of()
          : i.request(t) || Observable.of();
      })
    : new ApolloLink(function(t, r) {
        return e(t)
          ? n.request(t, r) || Observable.of()
          : i.request(t, r) || Observable.of();
      });
}
var root,
  concat = function(e, t) {
    var r = toLink(e);
    if (isTerminating(r))
      return (
        "production" === process.env.NODE_ENV ||
          invariant$1.warn(
            new LinkError(
              "You are calling concat on a terminating link, which will have no effect",
              r
            )
          ),
        r
      );
    var n = toLink(t);
    return isTerminating(n)
      ? new ApolloLink(function(e) {
          return (
            r.request(e, function(e) {
              return n.request(e) || Observable.of();
            }) || Observable.of()
          );
        })
      : new ApolloLink(function(e, t) {
          return (
            r.request(e, function(e) {
              return n.request(e, t) || Observable.of();
            }) || Observable.of()
          );
        });
  },
  ApolloLink = (function() {
    function e(e) {
      e && (this.request = e);
    }
    return (
      (e.prototype.split = function(t, r, n) {
        return this.concat(split(t, r, n || new e(passthrough)));
      }),
      (e.prototype.concat = function(e) {
        return concat(this, e);
      }),
      (e.prototype.request = function(e, t) {
        throw "production" === process.env.NODE_ENV
          ? new InvariantError$1(1)
          : new InvariantError$1("request is not implemented");
      }),
      (e.empty = empty),
      (e.from = from),
      (e.split = split),
      (e.execute = execute),
      e
    );
  })();
function execute(e, t) {
  return (
    e.request(
      createOperation(t.context, transformOperation(validateOperation(t)))
    ) || Observable.of()
  );
}
function symbolObservablePonyfill(e) {
  var t,
    r = e.Symbol;
  return (
    "function" == typeof r
      ? r.observable
        ? (t = r.observable)
        : ((t = r("observable")), (r.observable = t))
      : (t = "@@observable"),
    t
  );
}
var NetworkStatus,
  result = symbolObservablePonyfill(
    (root =
      "undefined" != typeof self
        ? self
        : "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof module
        ? module
        : Function("return this")())
  ),
  DedupLink = (function(e) {
    function t() {
      var t = (null !== e && e.apply(this, arguments)) || this;
      return (
        (t.inFlightRequestObservables = new Map()),
        (t.subscribers = new Map()),
        t
      );
    }
    return (
      __extends(t, e),
      (t.prototype.request = function(e, t) {
        var r = this;
        if (e.getContext().forceFetch) return t(e);
        var n = e.toKey();
        if (!this.inFlightRequestObservables.get(n)) {
          var i,
            o = t(e),
            s = new Observable(function(e) {
              return (
                r.subscribers.has(n) || r.subscribers.set(n, new Set()),
                r.subscribers.get(n).add(e),
                i ||
                  (i = o.subscribe({
                    next: function(e) {
                      var t = r.subscribers.get(n);
                      r.subscribers.delete(n),
                        r.inFlightRequestObservables.delete(n),
                        t &&
                          (t.forEach(function(t) {
                            return t.next(e);
                          }),
                          t.forEach(function(e) {
                            return e.complete();
                          }));
                    },
                    error: function(e) {
                      var t = r.subscribers.get(n);
                      r.subscribers.delete(n),
                        r.inFlightRequestObservables.delete(n),
                        t &&
                          t.forEach(function(t) {
                            return t.error(e);
                          });
                    }
                  })),
                function() {
                  r.subscribers.has(n) &&
                    (r.subscribers.get(n).delete(e),
                    0 === r.subscribers.get(n).size &&
                      (r.inFlightRequestObservables.delete(n),
                      i && i.unsubscribe()));
                }
              );
            });
          this.inFlightRequestObservables.set(n, s);
        }
        return this.inFlightRequestObservables.get(n);
      }),
      t
    );
  })(ApolloLink);
function isNetworkRequestInFlight(e) {
  return e < 7;
}
!(function(e) {
  (e[(e.loading = 1)] = "loading"),
    (e[(e.setVariables = 2)] = "setVariables"),
    (e[(e.fetchMore = 3)] = "fetchMore"),
    (e[(e.refetch = 4)] = "refetch"),
    (e[(e.poll = 6)] = "poll"),
    (e[(e.ready = 7)] = "ready"),
    (e[(e.error = 8)] = "error");
})(NetworkStatus || (NetworkStatus = {}));
var Observable$1 = (function(e) {
  function t() {
    return (null !== e && e.apply(this, arguments)) || this;
  }
  return (
    __extends(t, e),
    (t.prototype[result] = function() {
      return this;
    }),
    (t.prototype["@@observable"] = function() {
      return this;
    }),
    t
  );
})(Observable);
function isApolloError(e) {
  return e.hasOwnProperty("graphQLErrors");
}
var FetchType,
  generateErrorMessage = function(e) {
    var t = "";
    return (
      Array.isArray(e.graphQLErrors) &&
        0 !== e.graphQLErrors.length &&
        e.graphQLErrors.forEach(function(e) {
          var r = e ? e.message : "Error message not found.";
          t += "GraphQL error: " + r + "\n";
        }),
      e.networkError &&
        (t += "Network error: " + e.networkError.message + "\n"),
      (t = t.replace(/\n$/, ""))
    );
  },
  ApolloError = (function(e) {
    function t(r) {
      var n = r.graphQLErrors,
        i = r.networkError,
        o = r.errorMessage,
        s = r.extraInfo,
        a = e.call(this, o) || this;
      return (
        (a.graphQLErrors = n || []),
        (a.networkError = i || null),
        (a.message = o || generateErrorMessage(a)),
        (a.extraInfo = s),
        (a.__proto__ = t.prototype),
        a
      );
    }
    return __extends(t, e), t;
  })(Error);
!(function(e) {
  (e[(e.normal = 1)] = "normal"),
    (e[(e.refetch = 2)] = "refetch"),
    (e[(e.poll = 3)] = "poll");
})(FetchType || (FetchType = {}));
var hasError = function(e, t) {
    return (
      void 0 === t && (t = "none"),
      e &&
        ((e.graphQLErrors && e.graphQLErrors.length > 0 && "none" === t) ||
          e.networkError)
    );
  },
  ObservableQuery = (function(e) {
    function t(t) {
      var r = t.queryManager,
        n = t.options,
        i = t.shouldSubscribe,
        o = void 0 === i || i,
        s =
          e.call(this, function(e) {
            return s.onSubscribe(e);
          }) || this;
      return (
        (s.isTornDown = !1),
        (s.options = n),
        (s.variables = n.variables || {}),
        (s.queryId = r.generateQueryId()),
        (s.shouldSubscribe = o),
        (s.queryManager = r),
        (s.observers = []),
        (s.subscriptionHandles = []),
        s
      );
    }
    return (
      __extends(t, e),
      (t.prototype.result = function() {
        var e = this;
        return new Promise(function(t, r) {
          var n,
            i = {
              next: function(r) {
                t(r),
                  e.observers.some(function(e) {
                    return e !== i;
                  }) || e.queryManager.removeQuery(e.queryId),
                  setTimeout(function() {
                    n.unsubscribe();
                  }, 0);
              },
              error: function(e) {
                r(e);
              }
            };
          n = e.subscribe(i);
        });
      }),
      (t.prototype.currentResult = function() {
        var e = this.getCurrentResult();
        return void 0 === e.data && (e.data = {}), e;
      }),
      (t.prototype.getCurrentResult = function() {
        if (this.isTornDown)
          return {
            data: this.lastError
              ? void 0
              : this.lastResult
              ? this.lastResult.data
              : void 0,
            error: this.lastError,
            loading: !1,
            networkStatus: NetworkStatus.error
          };
        var e = this.queryManager.queryStore.get(this.queryId);
        if (hasError(e, this.options.errorPolicy))
          return {
            data: void 0,
            loading: !1,
            networkStatus: e.networkStatus,
            error: new ApolloError({
              graphQLErrors: e.graphQLErrors,
              networkError: e.networkError
            })
          };
        e &&
          e.variables &&
          (this.options.variables = Object.assign(
            {},
            this.options.variables,
            e.variables
          ));
        var t,
          r = this.queryManager.getCurrentQueryResult(this),
          n = r.data,
          i = r.partial,
          o = !e || e.networkStatus === NetworkStatus.loading,
          s =
            ("network-only" === this.options.fetchPolicy && o) ||
            (i && "cache-only" !== this.options.fetchPolicy),
          a = {
            data: n,
            loading: isNetworkRequestInFlight(
              (t = e
                ? e.networkStatus
                : s
                ? NetworkStatus.loading
                : NetworkStatus.ready)
            ),
            networkStatus: t
          };
        return (
          e &&
            e.graphQLErrors &&
            "all" === this.options.errorPolicy &&
            (a.errors = e.graphQLErrors),
          i ||
            ((this.lastResult = __assign({}, a, { stale: !1 })),
            (this.lastResultSnapshot = cloneDeep(this.lastResult))),
          __assign({}, a, { partial: i })
        );
      }),
      (t.prototype.isDifferentFromLastResult = function(e) {
        var t = this.lastResultSnapshot;
        return !(
          t &&
          e &&
          t.networkStatus === e.networkStatus &&
          t.stale === e.stale &&
          isEqual(t.data, e.data)
        );
      }),
      (t.prototype.getLastResult = function() {
        return this.lastResult;
      }),
      (t.prototype.getLastError = function() {
        return this.lastError;
      }),
      (t.prototype.resetLastResults = function() {
        delete this.lastResult,
          delete this.lastResultSnapshot,
          delete this.lastError,
          (this.isTornDown = !1);
      }),
      (t.prototype.refetch = function(e) {
        var t = this.options.fetchPolicy;
        if ("cache-only" === t)
          return Promise.reject(
            new Error(
              "cache-only fetchPolicy option should not be used together with query refetch."
            )
          );
        isEqual(this.variables, e) ||
          (this.variables = Object.assign({}, this.variables, e)),
          isEqual(this.options.variables, this.variables) ||
            (this.options.variables = Object.assign(
              {},
              this.options.variables,
              this.variables
            ));
        var r = "network-only" === t || "no-cache" === t,
          n = __assign({}, this.options, {
            fetchPolicy: r ? t : "network-only"
          });
        return this.queryManager
          .fetchQuery(this.queryId, n, FetchType.refetch)
          .then(function(e) {
            return e;
          });
      }),
      (t.prototype.fetchMore = function(e) {
        var t,
          r = this;
        return (
          "production" === process.env.NODE_ENV
            ? invariant(e.updateQuery)
            : invariant(
                e.updateQuery,
                "updateQuery option is required. This function defines how to update the query data with the new results."
              ),
          Promise.resolve()
            .then(function() {
              var n = r.queryManager.generateQueryId();
              return (
                ((t = e.query
                  ? e
                  : __assign({}, r.options, e, {
                      variables: Object.assign({}, r.variables, e.variables)
                    })).fetchPolicy = "network-only"),
                r.queryManager.fetchQuery(n, t, FetchType.normal, r.queryId)
              );
            })
            .then(function(n) {
              return (
                r.updateQuery(function(r) {
                  return e.updateQuery(r, {
                    fetchMoreResult: n.data,
                    variables: t.variables
                  });
                }),
                n
              );
            })
        );
      }),
      (t.prototype.subscribeToMore = function(e) {
        var t = this,
          r = this.queryManager
            .startGraphQLSubscription({
              query: e.document,
              variables: e.variables
            })
            .subscribe({
              next: function(r) {
                e.updateQuery &&
                  t.updateQuery(function(t, n) {
                    var i = n.variables;
                    return e.updateQuery(t, {
                      subscriptionData: r,
                      variables: i
                    });
                  });
              },
              error: function(t) {
                e.onError
                  ? e.onError(t)
                  : console.error("Unhandled GraphQL subscription error", t);
              }
            });
        return (
          this.subscriptionHandles.push(r),
          function() {
            var e = t.subscriptionHandles.indexOf(r);
            e >= 0 && (t.subscriptionHandles.splice(e, 1), r.unsubscribe());
          }
        );
      }),
      (t.prototype.setOptions = function(e) {
        var t = this.options;
        (this.options = Object.assign({}, this.options, e)),
          e.pollInterval
            ? this.startPolling(e.pollInterval)
            : 0 === e.pollInterval && this.stopPolling();
        var r =
          ("network-only" !== t.fetchPolicy &&
            "network-only" === e.fetchPolicy) ||
          ("cache-only" === t.fetchPolicy && "cache-only" !== e.fetchPolicy) ||
          ("standby" === t.fetchPolicy && "standby" !== e.fetchPolicy) ||
          !1;
        return this.setVariables(this.options.variables, r, e.fetchResults);
      }),
      (t.prototype.setVariables = function(e, t, r) {
        void 0 === t && (t = !1),
          void 0 === r && (r = !0),
          (this.isTornDown = !1);
        var n = e || this.variables;
        return isEqual(n, this.variables) && !t
          ? 0 !== this.observers.length && r
            ? this.result()
            : new Promise(function(e) {
                return e();
              })
          : ((this.variables = n),
            (this.options.variables = n),
            0 === this.observers.length
              ? new Promise(function(e) {
                  return e();
                })
              : this.queryManager
                  .fetchQuery(
                    this.queryId,
                    __assign({}, this.options, { variables: this.variables })
                  )
                  .then(function(e) {
                    return e;
                  }));
      }),
      (t.prototype.updateQuery = function(e) {
        var t = this.queryManager.getQueryWithPreviousResult(this.queryId),
          r = t.previousResult,
          n = t.variables,
          i = t.document,
          o = tryFunctionOrLogError(function() {
            return e(r, { variables: n });
          });
        o &&
          (this.queryManager.dataStore.markUpdateQueryResult(i, n, o),
          this.queryManager.broadcastQueries());
      }),
      (t.prototype.stopPolling = function() {
        this.queryManager.stopPollingQuery(this.queryId),
          (this.options.pollInterval = void 0);
      }),
      (t.prototype.startPolling = function(e) {
        assertNotCacheFirstOrOnly(this),
          (this.options.pollInterval = e),
          this.queryManager.startPollingQuery(this.options, this.queryId);
      }),
      (t.prototype.onSubscribe = function(e) {
        var t = this;
        return (
          e._subscription &&
            e._subscription._observer &&
            !e._subscription._observer.error &&
            (e._subscription._observer.error = function(e) {
              console.error("Unhandled error", e.message, e.stack);
            }),
          this.observers.push(e),
          e.next && this.lastResult && e.next(this.lastResult),
          e.error && this.lastError && e.error(this.lastError),
          1 === this.observers.length && this.setUpQuery(),
          function() {
            (t.observers = t.observers.filter(function(t) {
              return t !== e;
            })),
              0 === t.observers.length && t.tearDownQuery();
          }
        );
      }),
      (t.prototype.setUpQuery = function() {
        var e = this;
        this.shouldSubscribe &&
          this.queryManager.addObservableQuery(this.queryId, this),
          this.options.pollInterval &&
            (assertNotCacheFirstOrOnly(this),
            this.queryManager.startPollingQuery(this.options, this.queryId));
        var t = {
          next: function(t) {
            (e.lastResult = t),
              (e.lastResultSnapshot = cloneDeep(t)),
              e.observers.forEach(function(e) {
                return e.next && e.next(t);
              });
          },
          error: function(t) {
            (e.lastError = t),
              e.observers.forEach(function(e) {
                return e.error && e.error(t);
              });
          }
        };
        this.queryManager.startQuery(
          this.queryId,
          this.options,
          this.queryManager.queryListenerForObserver(
            this.queryId,
            this.options,
            t
          )
        );
      }),
      (t.prototype.tearDownQuery = function() {
        (this.isTornDown = !0),
          this.queryManager.stopPollingQuery(this.queryId),
          this.subscriptionHandles.forEach(function(e) {
            return e.unsubscribe();
          }),
          (this.subscriptionHandles = []),
          this.queryManager.removeObservableQuery(this.queryId),
          this.queryManager.stopQuery(this.queryId),
          (this.observers = []);
      }),
      t
    );
  })(Observable$1);
function assertNotCacheFirstOrOnly(e) {
  var t = e.options.fetchPolicy;
  "production" === process.env.NODE_ENV
    ? invariant("cache-first" !== t && "cache-only" !== t)
    : invariant(
        "cache-first" !== t && "cache-only" !== t,
        "Queries that specify the cache-first and cache-only fetchPolicies cannot also be polling queries."
      );
}
console.log(isApolloError);
