!(function(e) {
  var t = {};
  function r(n) {
    if (t[n]) return t[n].exports;
    var i = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
  }
  (r.m = e),
    (r.c = t),
    (r.d = function(e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (r.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function(e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var i in e)
          r.d(
            n,
            i,
            function(t) {
              return e[t];
            }.bind(null, i)
          );
      return n;
    }),
    (r.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = ""),
    r((r.s = 13));
})([
  function(e, t, r) {
    "use strict";
    r.d(t, "c", function() {
      return i;
    }),
      r.d(t, "a", function() {
        return o;
      }),
      r.d(t, "b", function() {
        return u;
      }),
      r.d(t, "d", function() {
        return a;
      });
    /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
    var n = function(e, t) {
      return (n =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function(e, t) {
            e.__proto__ = t;
          }) ||
        function(e, t) {
          for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
        })(e, t);
    };
    function i(e, t) {
      function r() {
        this.constructor = e;
      }
      n(e, t),
        (e.prototype =
          null === t
            ? Object.create(t)
            : ((r.prototype = t.prototype), new r()));
    }
    var o = function() {
      return (o =
        Object.assign ||
        function(e) {
          for (var t, r = 1, n = arguments.length; r < n; r++)
            for (var i in (t = arguments[r]))
              Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          return e;
        }).apply(this, arguments);
    };
    function u(e, t, r, n) {
      return new (r || (r = Promise))(function(i, o) {
        function u(e) {
          try {
            s(n.next(e));
          } catch (e) {
            o(e);
          }
        }
        function a(e) {
          try {
            s(n.throw(e));
          } catch (e) {
            o(e);
          }
        }
        function s(e) {
          e.done
            ? i(e.value)
            : new r(function(t) {
                t(e.value);
              }).then(u, a);
        }
        s((n = n.apply(e, t || [])).next());
      });
    }
    function a(e, t) {
      var r,
        n,
        i,
        o,
        u = {
          label: 0,
          sent: function() {
            if (1 & i[0]) throw i[1];
            return i[1];
          },
          trys: [],
          ops: []
        };
      return (
        (o = { next: a(0), throw: a(1), return: a(2) }),
        "function" == typeof Symbol &&
          (o[Symbol.iterator] = function() {
            return this;
          }),
        o
      );
      function a(o) {
        return function(a) {
          return (function(o) {
            if (r) throw new TypeError("Generator is already executing.");
            for (; u; )
              try {
                if (
                  ((r = 1),
                  n &&
                    (i =
                      2 & o[0]
                        ? n.return
                        : o[0]
                        ? n.throw || ((i = n.return) && i.call(n), 0)
                        : n.next) &&
                    !(i = i.call(n, o[1])).done)
                )
                  return i;
                switch (((n = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                  case 0:
                  case 1:
                    i = o;
                    break;
                  case 4:
                    return u.label++, { value: o[1], done: !1 };
                  case 5:
                    u.label++, (n = o[1]), (o = [0]);
                    continue;
                  case 7:
                    (o = u.ops.pop()), u.trys.pop();
                    continue;
                  default:
                    if (
                      !(i = (i = u.trys).length > 0 && i[i.length - 1]) &&
                      (6 === o[0] || 2 === o[0])
                    ) {
                      u = 0;
                      continue;
                    }
                    if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                      u.label = o[1];
                      break;
                    }
                    if (6 === o[0] && u.label < i[1]) {
                      (u.label = i[1]), (i = o);
                      break;
                    }
                    if (i && u.label < i[2]) {
                      (u.label = i[2]), u.ops.push(o);
                      break;
                    }
                    i[2] && u.ops.pop(), u.trys.pop();
                    continue;
                }
                o = t.call(e, u);
              } catch (e) {
                (o = [6, e]), (n = 0);
              } finally {
                r = i = 0;
              }
            if (5 & o[0]) throw o[1];
            return { value: o[0] ? o[1] : void 0, done: !0 };
          })([o, a]);
        };
      }
    }
  },
  function(e, t, r) {
    "use strict";
    (function(e) {
      r.d(t, "x", function() {
        return f;
      }),
        r.d(t, "o", function() {
          return h;
        }),
        r.d(t, "n", function() {
          return p;
        }),
        r.d(t, "i", function() {
          return y;
        }),
        r.d(t, "j", function() {
          return b;
        }),
        r.d(t, "k", function() {
          return m;
        }),
        r.d(t, "g", function() {
          return g;
        }),
        r.d(t, "l", function() {
          return O;
        }),
        r.d(t, "h", function() {
          return w;
        }),
        r.d(t, "e", function() {
          return j;
        }),
        r.d(t, "f", function() {
          return S;
        }),
        r.d(t, "v", function() {
          return R;
        }),
        r.d(t, "c", function() {
          return P;
        }),
        r.d(t, "u", function() {
          return M;
        }),
        r.d(t, "a", function() {
          return a;
        }),
        r.d(t, "w", function() {
          return s;
        }),
        r.d(t, "q", function() {
          return c;
        }),
        r.d(t, "r", function() {
          return l;
        }),
        r.d(t, "b", function() {
          return v;
        }),
        r.d(t, "d", function() {
          return D;
        }),
        r.d(t, "y", function() {
          return T;
        }),
        r.d(t, "m", function() {
          return F;
        }),
        r.d(t, "p", function() {
          return _;
        }),
        r.d(t, "s", function() {
          return C;
        }),
        r.d(t, "t", function() {
          return L;
        });
      var n = r(3),
        i = r(2),
        o = r(0);
      r(9);
      function u(e, t, r, n) {
        if (
          (function(e) {
            return "IntValue" === e.kind;
          })(r) ||
          (function(e) {
            return "FloatValue" === e.kind;
          })(r)
        )
          e[t.value] = Number(r.value);
        else if (
          (function(e) {
            return "BooleanValue" === e.kind;
          })(r) ||
          (function(e) {
            return "StringValue" === e.kind;
          })(r)
        )
          e[t.value] = r.value;
        else if (
          (function(e) {
            return "ObjectValue" === e.kind;
          })(r)
        ) {
          var o = {};
          r.fields.map(function(e) {
            return u(o, e.name, e.value, n);
          }),
            (e[t.value] = o);
        } else if (
          (function(e) {
            return "Variable" === e.kind;
          })(r)
        ) {
          var a = (n || {})[r.name.value];
          e[t.value] = a;
        } else if (
          (function(e) {
            return "ListValue" === e.kind;
          })(r)
        )
          e[t.value] = r.values.map(function(e) {
            var r = {};
            return u(r, t, e, n), r[t.value];
          });
        else if (
          (function(e) {
            return "EnumValue" === e.kind;
          })(r)
        )
          e[t.value] = r.value;
        else {
          if (
            !(function(e) {
              return "NullValue" === e.kind;
            })(r)
          )
            throw new i.a();
          e[t.value] = null;
        }
      }
      function a(e, t) {
        if (e.arguments && e.arguments.length) {
          var r = {};
          return (
            e.arguments.forEach(function(e) {
              var n = e.name,
                i = e.value;
              return u(r, n, i, t);
            }),
            r
          );
        }
        return null;
      }
      function s(e) {
        return e.alias ? e.alias.value : e.name.value;
      }
      function c(e) {
        return "Field" === e.kind;
      }
      function l(e) {
        return "InlineFragment" === e.kind;
      }
      function f(e, t) {
        if ((void 0 === t && (t = {}), !e.directives)) return !0;
        var r = !0;
        return (
          e.directives.forEach(function(e) {
            if ("skip" === e.name.value || "include" === e.name.value) {
              var n = e.arguments || [],
                o = e.name.value;
              Object(i.b)(1 === n.length);
              var u = n[0];
              Object(i.b)(u.name && "if" === u.name.value);
              var a = n[0].value,
                s = !1;
              a && "BooleanValue" === a.kind
                ? (s = a.value)
                : (Object(i.b)("Variable" === a.kind),
                  (s = t[a.name.value]),
                  Object(i.b)(void 0 !== s)),
                "skip" === o && (s = !s),
                s || (r = !1);
            }
          }),
          r
        );
      }
      function h(e, t) {
        return (function(e) {
          var t = [];
          return (
            Object(n.b)(e, {
              Directive: function(e) {
                t.push(e.name.value);
              }
            }),
            t
          );
        })(t).some(function(t) {
          return e.indexOf(t) > -1;
        });
      }
      function p(e) {
        return e && h(["client"], e) && h(["export"], e);
      }
      function v(e) {
        for (var t = [], r = 1; r < arguments.length; r++)
          t[r - 1] = arguments[r];
        return (
          t.forEach(function(t) {
            null != t &&
              Object.keys(t).forEach(function(r) {
                e[r] = t[r];
              });
          }),
          e
        );
      }
      function y(e) {
        d(e);
        var t = e.definitions.filter(function(e) {
          return "OperationDefinition" === e.kind && "mutation" === e.operation;
        })[0];
        return Object(i.b)(t), t;
      }
      function d(e) {
        Object(i.b)(e && "Document" === e.kind);
        var t = e.definitions
          .filter(function(e) {
            return "FragmentDefinition" !== e.kind;
          })
          .map(function(e) {
            if ("OperationDefinition" !== e.kind) throw new i.a();
            return e;
          });
        return Object(i.b)(t.length <= 1), e;
      }
      function b(e) {
        return (
          d(e),
          e.definitions.filter(function(e) {
            return "OperationDefinition" === e.kind;
          })[0]
        );
      }
      function m(e) {
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
      function g(e) {
        return e.definitions.filter(function(e) {
          return "FragmentDefinition" === e.kind;
        });
      }
      function O(e) {
        var t = b(e);
        return Object(i.b)(t && "query" === t.operation), t;
      }
      function w(e) {
        var t;
        d(e);
        for (var r = 0, n = e.definitions; r < n.length; r++) {
          var o = n[r];
          if ("OperationDefinition" === o.kind) {
            var u = o.operation;
            if ("query" === u || "mutation" === u || "subscription" === u)
              return o;
          }
          "FragmentDefinition" !== o.kind || t || (t = o);
        }
        if (t) return t;
        throw new i.a();
      }
      function j(e) {
        void 0 === e && (e = []);
        var t = {};
        return (
          e.forEach(function(e) {
            t[e.name.value] = e;
          }),
          t
        );
      }
      function S(e) {
        if (e && e.variableDefinitions && e.variableDefinitions.length) {
          var t = e.variableDefinitions
            .filter(function(e) {
              return e.defaultValue;
            })
            .map(function(e) {
              var t = e.variable,
                r = e.defaultValue,
                n = {};
              return u(n, t.name, r), n;
            });
          return v.apply(void 0, [{}].concat(t));
        }
        return {};
      }
      function Q(e, t, r) {
        var n = 0;
        return (
          e.forEach(function(r, i) {
            t.call(this, r, i, e) && (e[n++] = r);
          }, r),
          (e.length = n),
          e
        );
      }
      function k(e) {
        return (function e(t, r) {
          return t.selectionSet.selections.every(function(t) {
            return "FragmentSpread" === t.kind && e(r[t.name.value], r);
          });
        })(
          b(e) ||
            (function(e) {
              Object(i.b)("Document" === e.kind),
                Object(i.b)(e.definitions.length <= 1);
              var t = e.definitions[0];
              return Object(i.b)("FragmentDefinition" === t.kind), t;
            })(e),
          j(g(e))
        )
          ? null
          : e;
      }
      function q(e) {
        return function(t) {
          return e.some(function(e) {
            return (e.name && e.name === t.name.value) || (e.test && e.test(t));
          });
        };
      }
      function E(e, t) {
        var r = Object.create(null),
          i = [],
          u = Object.create(null),
          a = [],
          s = k(
            Object(n.b)(t, {
              Variable: {
                enter: function(e, t, n) {
                  "VariableDefinition" !== n.kind && (r[e.name.value] = !0);
                }
              },
              Field: {
                enter: function(t) {
                  if (
                    e &&
                    t.directives &&
                    (e.some(function(e) {
                      return e.remove;
                    }) &&
                      t.directives &&
                      t.directives.some(q(e)))
                  )
                    return (
                      t.arguments &&
                        t.arguments.forEach(function(e) {
                          "Variable" === e.value.kind &&
                            i.push({ name: e.value.name.value });
                        }),
                      t.selectionSet &&
                        (function e(t) {
                          var r = [];
                          t.selections.forEach(function(t) {
                            ("Field" !== t.kind &&
                              "InlineFragment" !== t.kind) ||
                            !t.selectionSet
                              ? "FragmentSpread" === t.kind && r.push(t)
                              : e(t.selectionSet).forEach(function(e) {
                                  return r.push(e);
                                });
                          });
                          return r;
                        })(t.selectionSet).forEach(function(e) {
                          a.push({ name: e.name.value });
                        }),
                      null
                    );
                }
              },
              FragmentSpread: {
                enter: function(e) {
                  u[e.name.value] = !0;
                }
              },
              Directive: {
                enter: function(t) {
                  if (q(e)(t)) return null;
                }
              }
            })
          );
        return (
          s &&
            Q(i, function(e) {
              return !r[e.name];
            }).length &&
            (s = (function(e, t) {
              var r = (function(e) {
                return function(t) {
                  return e.some(function(e) {
                    return (
                      t.value &&
                      "Variable" === t.value.kind &&
                      t.value.name &&
                      (e.name === t.value.name.value || (e.test && e.test(t)))
                    );
                  });
                };
              })(e);
              return k(
                Object(n.b)(t, {
                  OperationDefinition: {
                    enter: function(t) {
                      return Object(o.a)({}, t, {
                        variableDefinitions: t.variableDefinitions.filter(
                          function(t) {
                            return !e.some(function(e) {
                              return e.name === t.variable.name.value;
                            });
                          }
                        )
                      });
                    }
                  },
                  Field: {
                    enter: function(t) {
                      var n = e.some(function(e) {
                        return e.remove;
                      });
                      if (n) {
                        var i = 0;
                        if (
                          (t.arguments.forEach(function(e) {
                            r(e) && (i += 1);
                          }),
                          1 === i)
                        )
                          return null;
                      }
                    }
                  },
                  Argument: {
                    enter: function(e) {
                      if (r(e)) return null;
                    }
                  }
                })
              );
            })(i, s)),
          s &&
            Q(a, function(e) {
              return !u[e.name];
            }).length &&
            (s = (function(e, t) {
              function r(t) {
                if (
                  e.some(function(e) {
                    return e.name === t.name.value;
                  })
                )
                  return null;
              }
              return k(
                Object(n.b)(t, {
                  FragmentSpread: { enter: r },
                  FragmentDefinition: { enter: r }
                })
              );
            })(a, s)),
          s
        );
      }
      var x = {
        test: function(e) {
          var t = "connection" === e.name.value;
          return (
            t &&
              ((e.arguments &&
                e.arguments.some(function(e) {
                  return "key" === e.name.value;
                })) ||
                console.warn(
                  "Removing an @connection directive even though it does not have a key. You may want to use the key parameter to specify a store key."
                )),
            t
          );
        }
      };
      function R(e) {
        return E([x], d(e));
      }
      function P(e) {
        return "query" === w(e).operation
          ? e
          : Object(n.b)(e, {
              OperationDefinition: {
                enter: function(e) {
                  return Object(o.a)({}, e, { operation: "query" });
                }
              }
            });
      }
      function M(e) {
        d(e);
        var t = E(
          [
            {
              test: function(e) {
                return "client" === e.name.value;
              },
              remove: !0
            }
          ],
          e
        );
        return (
          t &&
            (t = Object(n.b)(t, {
              FragmentDefinition: {
                enter: function(e) {
                  if (
                    e.selectionSet &&
                    e.selectionSet.selections.every(function(e) {
                      return (
                        "Field" === e.kind && "__typename" === e.name.value
                      );
                    })
                  )
                    return null;
                }
              }
            })),
          t
        );
      }
      var I = Object.prototype.toString;
      function D(e) {
        return (function e(t, r) {
          switch (I.call(t)) {
            case "[object Array]":
              if (r.has(t)) return r.get(t);
              var n = t.slice(0);
              return (
                r.set(t, n),
                n.forEach(function(t, i) {
                  n[i] = e(t, r);
                }),
                n
              );
            case "[object Object]":
              if (r.has(t)) return r.get(t);
              var i = Object.create(Object.getPrototypeOf(t));
              return (
                r.set(t, i),
                Object.keys(t).forEach(function(n) {
                  i[n] = e(t[n], r);
                }),
                i
              );
            default:
              return t;
          }
        })(e, new Map());
      }
      function T(e) {
        try {
          return e();
        } catch (e) {
          console.error && console.error(e);
        }
      }
      function F(e) {
        return e.errors && e.errors.length;
      }
      function _(e, t) {
        if (e === t) return !0;
        if (e instanceof Date && t instanceof Date)
          return e.getTime() === t.getTime();
        if (
          null != e &&
          "object" == typeof e &&
          null != t &&
          "object" == typeof t
        ) {
          for (var r in e)
            if (Object.prototype.hasOwnProperty.call(e, r)) {
              if (!Object.prototype.hasOwnProperty.call(t, r)) return !1;
              if (!_(e[r], t[r])) return !1;
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
      var V = Object.prototype.hasOwnProperty;
      function C() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return L(e);
      }
      function L(e) {
        var t = e[0] || {},
          r = e.length;
        if (r > 1) {
          var n = [];
          t = B(t, n);
          for (var i = 1; i < r; ++i) t = A(t, e[i], n);
        }
        return t;
      }
      function N(e) {
        return null !== e && "object" == typeof e;
      }
      function A(e, t, r) {
        return N(t) && N(e)
          ? (Object.isExtensible && !Object.isExtensible(e) && (e = B(e, r)),
            Object.keys(t).forEach(function(n) {
              var i = t[n];
              if (V.call(e, n)) {
                var o = e[n];
                i !== o && (e[n] = A(B(o, r), i, r));
              } else e[n] = i;
            }),
            e)
          : t;
      }
      function B(e, t) {
        return (
          null !== e &&
            "object" == typeof e &&
            t.indexOf(e) < 0 &&
            ((e = Array.isArray(e)
              ? e.slice(0)
              : Object(o.a)({ __proto__: Object.getPrototypeOf(e) }, e)),
            t.push(e)),
          e
        );
      }
      Object.create({});
    }.call(this, r(5)));
  },
  function(e, t, r) {
    "use strict";
    r.d(t, "a", function() {
      return a;
    }),
      r.d(t, "b", function() {
        return s;
      });
    var n = r(0),
      i = "Invariant Violation",
      o = Object.setPrototypeOf,
      u =
        void 0 === o
          ? function(e, t) {
              return (e.__proto__ = t), e;
            }
          : o,
      a = (function(e) {
        function t(r) {
          void 0 === r && (r = i);
          var n = e.call(this, r) || this;
          return (n.framesToPop = 1), (n.name = i), u(n, t.prototype), n;
        }
        return Object(n.c)(t, e), t;
      })(Error);
    function s(e, t) {
      if (!e) throw new a(t);
    }
    !(function(e) {
      (e.warn = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return console.warn.apply(console, e);
      }),
        (e.error = function() {
          for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
          return console.error.apply(console, e);
        });
    })(s || (s = {}));
  },
  function(e, t, r) {
    "use strict";
    var n =
      "function" == typeof Symbol
        ? Symbol.for("nodejs.util.inspect.custom")
        : void 0;
    function i(e) {
      return (i =
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
    var o = 10,
      u = 2;
    function a(e, t) {
      switch (i(e)) {
        case "string":
          return JSON.stringify(e);
        case "function":
          return e.name ? "[function ".concat(e.name, "]") : "[function]";
        case "object":
          return (function(e, t) {
            if (-1 !== t.indexOf(e)) return "[Circular]";
            var r = [].concat(t, [e]);
            if (e) {
              var i = (function(e) {
                var t = e[String(n)];
                if ("function" == typeof t) return t;
                if ("function" == typeof e.inspect) return e.inspect;
              })(e);
              if (i) {
                var s = i.call(e);
                if (s !== e) return "string" == typeof s ? s : a(s, r);
              } else if (Array.isArray(e))
                return (function(e, t) {
                  if (0 === e.length) return "[]";
                  if (t.length > u) return "[Array]";
                  for (
                    var r = Math.min(o, e.length),
                      n = e.length - r,
                      i = [],
                      s = 0;
                    s < r;
                    ++s
                  )
                    i.push(a(e[s], t));
                  1 === n
                    ? i.push("... 1 more item")
                    : n > 1 && i.push("... ".concat(n, " more items"));
                  return "[" + i.join(", ") + "]";
                })(e, r);
              return (function(e, t) {
                var r = Object.keys(e);
                if (0 === r.length) return "{}";
                if (t.length > u)
                  return (
                    "[" +
                    (function(e) {
                      var t = Object.prototype.toString
                        .call(e)
                        .replace(/^\[object /, "")
                        .replace(/]$/, "");
                      if (
                        "Object" === t &&
                        "function" == typeof e.constructor
                      ) {
                        var r = e.constructor.name;
                        if ("string" == typeof r) return r;
                      }
                      return t;
                    })(e) +
                    "]"
                  );
                return (
                  "{ " +
                  r
                    .map(function(r) {
                      var n = a(e[r], t);
                      return r + ": " + n;
                    })
                    .join(", ") +
                  " }"
                );
              })(e, r);
            }
            return String(e);
          })(e, t);
        default:
          return String(e);
      }
    }
    r.d(t, "a", function() {
      return c;
    }),
      r.d(t, "b", function() {
        return l;
      });
    var s = {
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
        FieldDefinition: [
          "description",
          "name",
          "arguments",
          "type",
          "directives"
        ],
        InputValueDefinition: [
          "description",
          "name",
          "type",
          "defaultValue",
          "directives"
        ],
        InterfaceTypeDefinition: [
          "description",
          "name",
          "directives",
          "fields"
        ],
        UnionTypeDefinition: ["description", "name", "directives", "types"],
        EnumTypeDefinition: ["description", "name", "directives", "values"],
        EnumValueDefinition: ["description", "name", "directives"],
        InputObjectTypeDefinition: [
          "description",
          "name",
          "directives",
          "fields"
        ],
        DirectiveDefinition: ["description", "name", "arguments", "locations"],
        SchemaExtension: ["directives", "operationTypes"],
        ScalarTypeExtension: ["name", "directives"],
        ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
        InterfaceTypeExtension: ["name", "directives", "fields"],
        UnionTypeExtension: ["name", "directives", "types"],
        EnumTypeExtension: ["name", "directives", "values"],
        InputObjectTypeExtension: ["name", "directives", "fields"]
      },
      c = {};
    function l(e, t) {
      var r =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s,
        n = void 0,
        i = Array.isArray(e),
        o = [e],
        u = -1,
        l = [],
        p = void 0,
        v = void 0,
        y = void 0,
        d = [],
        b = [],
        m = e;
      do {
        var g = ++u === o.length,
          O = g && 0 !== l.length;
        if (g) {
          if (
            ((v = 0 === b.length ? void 0 : d[d.length - 1]),
            (p = y),
            (y = b.pop()),
            O)
          ) {
            if (i) p = p.slice();
            else {
              for (var w = {}, j = Object.keys(p), S = 0; S < j.length; S++) {
                var Q = j[S];
                w[Q] = p[Q];
              }
              p = w;
            }
            for (var k = 0, q = 0; q < l.length; q++) {
              var E = l[q][0],
                x = l[q][1];
              i && (E -= k),
                i && null === x ? (p.splice(E, 1), k++) : (p[E] = x);
            }
          }
          (u = n.index),
            (o = n.keys),
            (l = n.edits),
            (i = n.inArray),
            (n = n.prev);
        } else {
          if (((v = y ? (i ? u : o[u]) : void 0), null == (p = y ? y[v] : m)))
            continue;
          y && d.push(v);
        }
        var R = void 0;
        if (!Array.isArray(p)) {
          if (!f(p)) throw new Error("Invalid AST Node: " + a(p, []));
          var P = h(t, p.kind, g);
          if (P) {
            if ((R = P.call(t, p, v, y, d, b)) === c) break;
            if (!1 === R) {
              if (!g) {
                d.pop();
                continue;
              }
            } else if (void 0 !== R && (l.push([v, R]), !g)) {
              if (!f(R)) {
                d.pop();
                continue;
              }
              p = R;
            }
          }
        }
        void 0 === R && O && l.push([v, p]),
          g
            ? d.pop()
            : ((n = { inArray: i, index: u, keys: o, edits: l, prev: n }),
              (o = (i = Array.isArray(p)) ? p : r[p.kind] || []),
              (u = -1),
              (l = []),
              y && b.push(y),
              (y = p));
      } while (void 0 !== n);
      return 0 !== l.length && (m = l[l.length - 1][1]), m;
    }
    function f(e) {
      return Boolean(e && "string" == typeof e.kind);
    }
    function h(e, t, r) {
      var n = e[t];
      if (n) {
        if (!r && "function" == typeof n) return n;
        var i = r ? n.leave : n.enter;
        if ("function" == typeof i) return i;
      } else {
        var o = r ? e.leave : e.enter;
        if (o) {
          if ("function" == typeof o) return o;
          var u = o[t];
          if ("function" == typeof u) return u;
        }
      }
    }
  },
  function(e, t, r) {
    "use strict";
    (function(e) {
      r.d(t, "a", function() {
        return a;
      });
      var n = r(0),
        i = "Invariant Violation",
        o = Object.setPrototypeOf,
        u =
          void 0 === o
            ? function(e, t) {
                return (e.__proto__ = t), e;
              }
            : o,
        a = (function(e) {
          function t(r) {
            void 0 === r && (r = i);
            var n =
              e.call(
                this,
                "number" == typeof r
                  ? i +
                      ": " +
                      r +
                      " (see https://github.com/apollographql/invariant-packages)"
                  : r
              ) || this;
            return (n.framesToPop = 1), (n.name = i), u(n, t.prototype), n;
          }
          return Object(n.c)(t, e), t;
        })(Error);
      function s(e, t) {
        if (!e) throw new a(t);
      }
      !(function(e) {
        (e.warn = function() {
          for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
          return console.warn.apply(console, e);
        }),
          (e.error = function() {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            return console.error.apply(console, e);
          });
      })(s || (s = {}));
    }.call(this, r(5)));
  },
  function(e, t) {
    var r,
      n,
      i = (e.exports = {});
    function o() {
      throw new Error("setTimeout has not been defined");
    }
    function u() {
      throw new Error("clearTimeout has not been defined");
    }
    function a(e) {
      if (r === setTimeout) return setTimeout(e, 0);
      if ((r === o || !r) && setTimeout)
        return (r = setTimeout), setTimeout(e, 0);
      try {
        return r(e, 0);
      } catch (t) {
        try {
          return r.call(null, e, 0);
        } catch (t) {
          return r.call(this, e, 0);
        }
      }
    }
    !(function() {
      try {
        r = "function" == typeof setTimeout ? setTimeout : o;
      } catch (e) {
        r = o;
      }
      try {
        n = "function" == typeof clearTimeout ? clearTimeout : u;
      } catch (e) {
        n = u;
      }
    })();
    var s,
      c = [],
      l = !1,
      f = -1;
    function h() {
      l &&
        s &&
        ((l = !1), s.length ? (c = s.concat(c)) : (f = -1), c.length && p());
    }
    function p() {
      if (!l) {
        var e = a(h);
        l = !0;
        for (var t = c.length; t; ) {
          for (s = c, c = []; ++f < t; ) s && s[f].run();
          (f = -1), (t = c.length);
        }
        (s = null),
          (l = !1),
          (function(e) {
            if (n === clearTimeout) return clearTimeout(e);
            if ((n === u || !n) && clearTimeout)
              return (n = clearTimeout), clearTimeout(e);
            try {
              n(e);
            } catch (t) {
              try {
                return n.call(null, e);
              } catch (t) {
                return n.call(this, e);
              }
            }
          })(e);
      }
    }
    function v(e, t) {
      (this.fun = e), (this.array = t);
    }
    function y() {}
    (i.nextTick = function(e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
      c.push(new v(e, t)), 1 !== c.length || l || a(p);
    }),
      (v.prototype.run = function() {
        this.fun.apply(null, this.array);
      }),
      (i.title = "browser"),
      (i.browser = !0),
      (i.env = {}),
      (i.argv = []),
      (i.version = ""),
      (i.versions = {}),
      (i.on = y),
      (i.addListener = y),
      (i.once = y),
      (i.off = y),
      (i.removeListener = y),
      (i.removeAllListeners = y),
      (i.emit = y),
      (i.prependListener = y),
      (i.prependOnceListener = y),
      (i.listeners = function(e) {
        return [];
      }),
      (i.binding = function(e) {
        throw new Error("process.binding is not supported");
      }),
      (i.cwd = function() {
        return "/";
      }),
      (i.chdir = function(e) {
        throw new Error("process.chdir is not supported");
      }),
      (i.umask = function() {
        return 0;
      });
  },
  function(e, t, r) {
    "use strict";
    (function(e, n) {
      var i,
        o = r(7);
      i =
        "undefined" != typeof self
          ? self
          : "undefined" != typeof window
          ? window
          : void 0 !== e
          ? e
          : n;
      var u = Object(o.a)(i);
      t.a = u;
    }.call(this, r(10), r(11)(e)));
  },
  function(e, t, r) {
    "use strict";
    function n(e) {
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
    r.d(t, "a", function() {
      return n;
    });
  },
  function(e, t, r) {
    e.exports = r(12).Observable;
  },
  function(e, t, r) {
    "use strict";
    e.exports = function(e, t) {
      t || (t = {}), "function" == typeof t && (t = { cmp: t });
      var r,
        n = "boolean" == typeof t.cycles && t.cycles,
        i =
          t.cmp &&
          ((r = t.cmp),
          function(e) {
            return function(t, n) {
              var i = { key: t, value: e[t] },
                o = { key: n, value: e[n] };
              return r(i, o);
            };
          }),
        o = [];
      return (function e(t) {
        if (
          (t && t.toJSON && "function" == typeof t.toJSON && (t = t.toJSON()),
          void 0 !== t)
        ) {
          if ("number" == typeof t) return isFinite(t) ? "" + t : "null";
          if ("object" != typeof t) return JSON.stringify(t);
          var r, u;
          if (Array.isArray(t)) {
            for (u = "[", r = 0; r < t.length; r++)
              r && (u += ","), (u += e(t[r]) || "null");
            return u + "]";
          }
          if (null === t) return "null";
          if (-1 !== o.indexOf(t)) {
            if (n) return JSON.stringify("__cycle__");
            throw new TypeError("Converting circular structure to JSON");
          }
          var a = o.push(t) - 1,
            s = Object.keys(t).sort(i && i(t));
          for (u = "", r = 0; r < s.length; r++) {
            var c = s[r],
              l = e(t[c]);
            l && (u && (u += ","), (u += JSON.stringify(c) + ":" + l));
          }
          return o.splice(a, 1), "{" + u + "}";
        }
      })(e);
    };
  },
  function(e, t) {
    var r;
    r = (function() {
      return this;
    })();
    try {
      r = r || new Function("return this")();
    } catch (e) {
      "object" == typeof window && (r = window);
    }
    e.exports = r;
  },
  function(e, t) {
    e.exports = function(e) {
      if (!e.webpackPolyfill) {
        var t = Object.create(e);
        t.children || (t.children = []),
          Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function() {
              return t.l;
            }
          }),
          Object.defineProperty(t, "id", {
            enumerable: !0,
            get: function() {
              return t.i;
            }
          }),
          Object.defineProperty(t, "exports", { enumerable: !0 }),
          (t.webpackPolyfill = 1);
      }
      return t;
    };
  },
  function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = (function() {
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
    function i(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    var o = function() {
        return "function" == typeof Symbol;
      },
      u = function(e) {
        return o() && Boolean(Symbol[e]);
      },
      a = function(e) {
        return u(e) ? Symbol[e] : "@@" + e;
      };
    o() && !u("observable") && (Symbol.observable = Symbol("observable"));
    var s = a("iterator"),
      c = a("observable"),
      l = a("species");
    function f(e, t) {
      var r = e[t];
      if (null != r) {
        if ("function" != typeof r)
          throw new TypeError(r + " is not a function");
        return r;
      }
    }
    function h(e) {
      var t = e.constructor;
      return (
        void 0 !== t && null === (t = t[l]) && (t = void 0),
        void 0 !== t ? t : j
      );
    }
    function p(e) {
      return e instanceof j;
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
    function d(e) {
      var t = e._cleanup;
      if (void 0 !== t && ((e._cleanup = void 0), t))
        try {
          if ("function" == typeof t) t();
          else {
            var r = f(t, "unsubscribe");
            r && r.call(t);
          }
        } catch (e) {
          v(e);
        }
    }
    function b(e) {
      (e._observer = void 0), (e._queue = void 0), (e._state = "closed");
    }
    function m(e, t, r) {
      e._state = "running";
      var n = e._observer;
      try {
        var i = f(n, t);
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
        ? d(e)
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
                      (m(e, t[r].type, t[r].value), "closed" !== e._state);
                      ++r
                    );
                  }
                })(e);
              }))
            : void m(e, t, r);
        e._queue.push({ type: t, value: r });
      }
    }
    var O = (function() {
        function e(t, r) {
          i(this, e),
            (this._cleanup = void 0),
            (this._observer = t),
            (this._queue = void 0),
            (this._state = "initializing");
          var n = new w(this);
          try {
            this._cleanup = r.call(void 0, n);
          } catch (e) {
            n.error(e);
          }
          "initializing" === this._state && (this._state = "ready");
        }
        return (
          n(e, [
            {
              key: "unsubscribe",
              value: function() {
                "closed" !== this._state && (b(this), d(this));
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
          i(this, e), (this._subscription = t);
        }
        return (
          n(e, [
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
      j = (t.Observable = (function() {
        function e(t) {
          if ((i(this, e), !(this instanceof e)))
            throw new TypeError("Observable cannot be called as a function");
          if ("function" != typeof t)
            throw new TypeError("Observable initializer must be a function");
          this._subscriber = t;
        }
        return (
          n(
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
                    new O(e, this._subscriber)
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
                  return new (h(this))(function(r) {
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
                  return new (h(this))(function(r) {
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
                  var r = h(this),
                    n = arguments.length > 1,
                    i = !1,
                    o = arguments[1];
                  return new r(function(r) {
                    return t.subscribe({
                      next: function(t) {
                        var u = !i;
                        if (((i = !0), !u || n))
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
                  var i = h(this);
                  return new i(function(t) {
                    var n = void 0,
                      o = 0;
                    return (
                      (function e(u) {
                        n = u.subscribe({
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
                  var r = h(this);
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
                              e >= 0 && i.splice(e, 1), u();
                            }
                          });
                          i.push(o);
                        },
                        error: function(e) {
                          n.error(e);
                        },
                        complete: function() {
                          u();
                        }
                      });
                    function u() {
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
                key: c,
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
                  var n = f(t, c);
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
                  if (u("iterator") && (n = f(t, s)))
                    return new r(function(e) {
                      y(function() {
                        if (!e.closed) {
                          var r = !0,
                            i = !1,
                            o = void 0;
                          try {
                            for (
                              var u, a = n.call(t)[Symbol.iterator]();
                              !(r = (u = a.next()).done);
                              r = !0
                            ) {
                              var s = u.value;
                              if ((e.next(s), e.closed)) return;
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
                  for (
                    var t = arguments.length, r = Array(t), n = 0;
                    n < t;
                    n++
                  )
                    r[n] = arguments[n];
                  return new ("function" == typeof this ? this : e)(function(
                    e
                  ) {
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
                key: l,
                get: function() {
                  return this;
                }
              }
            ]
          ),
          e
        );
      })());
    o() &&
      Object.defineProperty(j, Symbol("extensions"), {
        value: { symbol: c, hostReportError: v },
        configurable: !0
      });
  },
  function(e, t, r) {
    "use strict";
    r.r(t);
    var n = r(0),
      i = r(1),
      o = r(8),
      u = r.n(o).a,
      a = r(4),
      s = r(3);
    var c = {
      Name: function(e) {
        return e.value;
      },
      Variable: function(e) {
        return "$" + e.name;
      },
      Document: function(e) {
        return f(e.definitions, "\n\n") + "\n";
      },
      OperationDefinition: function(e) {
        var t = e.operation,
          r = e.name,
          n = p("(", f(e.variableDefinitions, ", "), ")"),
          i = f(e.directives, " "),
          o = e.selectionSet;
        return r || i || n || "query" !== t ? f([t, f([r, n]), i, o], " ") : o;
      },
      VariableDefinition: function(e) {
        var t = e.variable,
          r = e.type,
          n = e.defaultValue,
          i = e.directives;
        return t + ": " + r + p(" = ", n) + p(" ", f(i, " "));
      },
      SelectionSet: function(e) {
        return h(e.selections);
      },
      Field: function(e) {
        var t = e.alias,
          r = e.name,
          n = e.arguments,
          i = e.directives,
          o = e.selectionSet;
        return f(
          [p("", t, ": ") + r + p("(", f(n, ", "), ")"), f(i, " "), o],
          " "
        );
      },
      Argument: function(e) {
        return e.name + ": " + e.value;
      },
      FragmentSpread: function(e) {
        return "..." + e.name + p(" ", f(e.directives, " "));
      },
      InlineFragment: function(e) {
        var t = e.typeCondition,
          r = e.directives,
          n = e.selectionSet;
        return f(["...", p("on ", t), f(r, " "), n], " ");
      },
      FragmentDefinition: function(e) {
        var t = e.name,
          r = e.typeCondition,
          n = e.variableDefinitions,
          i = e.directives,
          o = e.selectionSet;
        return (
          "fragment ".concat(t).concat(p("(", f(n, ", "), ")"), " ") +
          "on ".concat(r, " ").concat(p("", f(i, " "), " ")) +
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
          ? (function(e) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "",
                r =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2],
                n = -1 === e.indexOf("\n"),
                i = " " === e[0] || "\t" === e[0],
                o = '"' === e[e.length - 1],
                u = !n || o || r,
                a = "";
              return (
                !u || (n && i) || (a += "\n" + t),
                (a += t ? e.replace(/\n/g, "\n" + t) : e),
                u && (a += "\n"),
                '"""' + a.replace(/"""/g, '\\"""') + '"""'
              );
            })(r, "description" === t ? "" : "  ")
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
        return "[" + f(e.values, ", ") + "]";
      },
      ObjectValue: function(e) {
        return "{" + f(e.fields, ", ") + "}";
      },
      ObjectField: function(e) {
        return e.name + ": " + e.value;
      },
      Directive: function(e) {
        return "@" + e.name + p("(", f(e.arguments, ", "), ")");
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
        return f(["schema", f(t, " "), h(r)], " ");
      },
      OperationTypeDefinition: function(e) {
        return e.operation + ": " + e.type;
      },
      ScalarTypeDefinition: l(function(e) {
        return f(["scalar", e.name, f(e.directives, " ")], " ");
      }),
      ObjectTypeDefinition: l(function(e) {
        var t = e.name,
          r = e.interfaces,
          n = e.directives,
          i = e.fields;
        return f(
          ["type", t, p("implements ", f(r, " & ")), f(n, " "), h(i)],
          " "
        );
      }),
      FieldDefinition: l(function(e) {
        var t = e.name,
          r = e.arguments,
          n = e.type,
          i = e.directives;
        return (
          t +
          (d(r) ? p("(\n", v(f(r, "\n")), "\n)") : p("(", f(r, ", "), ")")) +
          ": " +
          n +
          p(" ", f(i, " "))
        );
      }),
      InputValueDefinition: l(function(e) {
        var t = e.name,
          r = e.type,
          n = e.defaultValue,
          i = e.directives;
        return f([t + ": " + r, p("= ", n), f(i, " ")], " ");
      }),
      InterfaceTypeDefinition: l(function(e) {
        var t = e.name,
          r = e.directives,
          n = e.fields;
        return f(["interface", t, f(r, " "), h(n)], " ");
      }),
      UnionTypeDefinition: l(function(e) {
        var t = e.name,
          r = e.directives,
          n = e.types;
        return f(
          [
            "union",
            t,
            f(r, " "),
            n && 0 !== n.length ? "= " + f(n, " | ") : ""
          ],
          " "
        );
      }),
      EnumTypeDefinition: l(function(e) {
        var t = e.name,
          r = e.directives,
          n = e.values;
        return f(["enum", t, f(r, " "), h(n)], " ");
      }),
      EnumValueDefinition: l(function(e) {
        return f([e.name, f(e.directives, " ")], " ");
      }),
      InputObjectTypeDefinition: l(function(e) {
        var t = e.name,
          r = e.directives,
          n = e.fields;
        return f(["input", t, f(r, " "), h(n)], " ");
      }),
      DirectiveDefinition: l(function(e) {
        var t = e.name,
          r = e.arguments,
          n = e.locations;
        return (
          "directive @" +
          t +
          (d(r) ? p("(\n", v(f(r, "\n")), "\n)") : p("(", f(r, ", "), ")")) +
          " on " +
          f(n, " | ")
        );
      }),
      SchemaExtension: function(e) {
        var t = e.directives,
          r = e.operationTypes;
        return f(["extend schema", f(t, " "), h(r)], " ");
      },
      ScalarTypeExtension: function(e) {
        return f(["extend scalar", e.name, f(e.directives, " ")], " ");
      },
      ObjectTypeExtension: function(e) {
        var t = e.name,
          r = e.interfaces,
          n = e.directives,
          i = e.fields;
        return f(
          ["extend type", t, p("implements ", f(r, " & ")), f(n, " "), h(i)],
          " "
        );
      },
      InterfaceTypeExtension: function(e) {
        var t = e.name,
          r = e.directives,
          n = e.fields;
        return f(["extend interface", t, f(r, " "), h(n)], " ");
      },
      UnionTypeExtension: function(e) {
        var t = e.name,
          r = e.directives,
          n = e.types;
        return f(
          [
            "extend union",
            t,
            f(r, " "),
            n && 0 !== n.length ? "= " + f(n, " | ") : ""
          ],
          " "
        );
      },
      EnumTypeExtension: function(e) {
        var t = e.name,
          r = e.directives,
          n = e.values;
        return f(["extend enum", t, f(r, " "), h(n)], " ");
      },
      InputObjectTypeExtension: function(e) {
        var t = e.name,
          r = e.directives,
          n = e.fields;
        return f(["extend input", t, f(r, " "), h(n)], " ");
      }
    };
    function l(e) {
      return function(t) {
        return f([t.description, e(t)], "\n");
      };
    }
    function f(e, t) {
      return e
        ? e
            .filter(function(e) {
              return e;
            })
            .join(t || "")
        : "";
    }
    function h(e) {
      return e && 0 !== e.length ? "{\n" + v(f(e, "\n")) + "\n}" : "";
    }
    function p(e, t, r) {
      return t ? e + t + (r || "") : "";
    }
    function v(e) {
      return e && "  " + e.replace(/\n/g, "\n  ");
    }
    function y(e) {
      return -1 !== e.indexOf("\n");
    }
    function d(e) {
      return e && e.some(y);
    }
    !(function(e) {
      function t(t, r) {
        var n = e.call(this, t) || this;
        return (n.link = r), n;
      }
      Object(n.c)(t, e);
    })(Error);
    function b(e) {
      return e.request.length <= 1;
    }
    function m(e, t) {
      var r = Object(n.a)({}, e);
      return (
        Object.defineProperty(t, "setContext", {
          enumerable: !1,
          value: function(e) {
            r =
              "function" == typeof e
                ? Object(n.a)({}, r, e(r))
                : Object(n.a)({}, r, e);
          }
        }),
        Object.defineProperty(t, "getContext", {
          enumerable: !1,
          value: function() {
            return Object(n.a)({}, r);
          }
        }),
        Object.defineProperty(t, "toKey", {
          enumerable: !1,
          value: function() {
            return (function(e) {
              return (
                (t = e.query),
                Object(s.b)(t, { leave: c }) +
                  "|" +
                  JSON.stringify(e.variables) +
                  "|" +
                  e.operationName
              );
              var t;
            })(t);
          }
        }),
        t
      );
    }
    function g(e, t) {
      return t ? t(e) : u.of();
    }
    function O(e) {
      return "function" == typeof e ? new Q(e) : e;
    }
    function w() {
      return new Q(function() {
        return u.of();
      });
    }
    function j(e) {
      return 0 === e.length
        ? w()
        : e.map(O).reduce(function(e, t) {
            return e.concat(t);
          });
    }
    function S(e, t, r) {
      var n = O(t),
        i = O(r || new Q(g));
      return b(n) && b(i)
        ? new Q(function(t) {
            return e(t) ? n.request(t) || u.of() : i.request(t) || u.of();
          })
        : new Q(function(t, r) {
            return e(t) ? n.request(t, r) || u.of() : i.request(t, r) || u.of();
          });
    }
    var Q = (function() {
      function e(e) {
        e && (this.request = e);
      }
      return (
        (e.prototype.split = function(t, r, n) {
          return this.concat(S(t, r, n || new e(g)));
        }),
        (e.prototype.concat = function(e) {
          return (function(e, t) {
            var r = O(e);
            if (b(r)) return r;
            var n = O(t);
            return b(n)
              ? new Q(function(e) {
                  return (
                    r.request(e, function(e) {
                      return n.request(e) || u.of();
                    }) || u.of()
                  );
                })
              : new Q(function(e, t) {
                  return (
                    r.request(e, function(e) {
                      return n.request(e, t) || u.of();
                    }) || u.of()
                  );
                });
          })(this, e);
        }),
        (e.prototype.request = function(e, t) {
          throw new a.a(1);
        }),
        (e.empty = w),
        (e.from = j),
        (e.split = S),
        (e.execute = k),
        e
      );
    })();
    function k(e, t) {
      return (
        e.request(
          m(
            t.context,
            (function(e) {
              var t = {
                variables: e.variables || {},
                extensions: e.extensions || {},
                operationName: e.operationName,
                query: e.query
              };
              return (
                t.operationName ||
                  (t.operationName =
                    "string" != typeof t.query ? Object(i.k)(t.query) : ""),
                t
              );
            })(
              (function(e) {
                for (
                  var t = [
                      "query",
                      "operationName",
                      "variables",
                      "extensions",
                      "context"
                    ],
                    r = 0,
                    n = Object.keys(e);
                  r < n.length;
                  r++
                ) {
                  var i = n[r];
                  if (t.indexOf(i) < 0) throw new a.a(2);
                }
                return e;
              })(t)
            )
          )
        ) || u.of()
      );
    }
    var q,
      E = r(6),
      x = r(2),
      R = (function(e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (
            (t.inFlightRequestObservables = new Map()),
            (t.subscribers = new Map()),
            t
          );
        }
        return (
          Object(n.c)(t, e),
          (t.prototype.request = function(e, t) {
            var r = this;
            if (e.getContext().forceFetch) return t(e);
            var n = e.toKey();
            if (!this.inFlightRequestObservables.get(n)) {
              var i,
                o = t(e),
                a = new u(function(e) {
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
              this.inFlightRequestObservables.set(n, a);
            }
            return this.inFlightRequestObservables.get(n);
          }),
          t
        );
      })(Q);
    function P(e) {
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
    })(q || (q = {}));
    var M = (function(e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        Object(n.c)(t, e),
        (t.prototype[E.a] = function() {
          return this;
        }),
        (t.prototype["@@observable"] = function() {
          return this;
        }),
        t
      );
    })(u);
    function I(e) {
      return e.hasOwnProperty("graphQLErrors");
    }
    var D,
      T = function(e) {
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
      F = (function(e) {
        function t(r) {
          var n = r.graphQLErrors,
            i = r.networkError,
            o = r.errorMessage,
            u = r.extraInfo,
            a = e.call(this, o) || this;
          return (
            (a.graphQLErrors = n || []),
            (a.networkError = i || null),
            (a.message = o || T(a)),
            (a.extraInfo = u),
            (a.__proto__ = t.prototype),
            a
          );
        }
        return Object(n.c)(t, e), t;
      })(Error);
    !(function(e) {
      (e[(e.normal = 1)] = "normal"),
        (e[(e.refetch = 2)] = "refetch"),
        (e[(e.poll = 3)] = "poll");
    })(D || (D = {}));
    var _ = (function(e) {
      function t(t) {
        var r = t.queryManager,
          n = t.options,
          i = t.shouldSubscribe,
          o = void 0 === i || i,
          u =
            e.call(this, function(e) {
              return u.onSubscribe(e);
            }) || this;
        return (
          (u.isTornDown = !1),
          (u.options = n),
          (u.variables = n.variables || {}),
          (u.queryId = r.generateQueryId()),
          (u.shouldSubscribe = o),
          (u.queryManager = r),
          (u.observers = []),
          (u.subscriptionHandles = []),
          u
        );
      }
      return (
        Object(n.c)(t, e),
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
              networkStatus: q.error
            };
          var e,
            t,
            r = this.queryManager.queryStore.get(this.queryId);
          if (
            ((e = r),
            void 0 === (t = this.options.errorPolicy) && (t = "none"),
            e &&
              ((e.graphQLErrors &&
                e.graphQLErrors.length > 0 &&
                "none" === t) ||
                e.networkError))
          )
            return {
              data: void 0,
              loading: !1,
              networkStatus: r.networkStatus,
              error: new F({
                graphQLErrors: r.graphQLErrors,
                networkError: r.networkError
              })
            };
          r &&
            r.variables &&
            (this.options.variables = Object.assign(
              {},
              this.options.variables,
              r.variables
            ));
          var o,
            u = this.queryManager.getCurrentQueryResult(this),
            a = u.data,
            s = u.partial,
            c = !r || r.networkStatus === q.loading,
            l =
              ("network-only" === this.options.fetchPolicy && c) ||
              (s && "cache-only" !== this.options.fetchPolicy),
            f = {
              data: a,
              loading: P((o = r ? r.networkStatus : l ? q.loading : q.ready)),
              networkStatus: o
            };
          return (
            r &&
              r.graphQLErrors &&
              "all" === this.options.errorPolicy &&
              (f.errors = r.graphQLErrors),
            s ||
              ((this.lastResult = Object(n.a)({}, f, { stale: !1 })),
              (this.lastResultSnapshot = Object(i.d)(this.lastResult))),
            Object(n.a)({}, f, { partial: s })
          );
        }),
        (t.prototype.isDifferentFromLastResult = function(e) {
          var t = this.lastResultSnapshot;
          return !(
            t &&
            e &&
            t.networkStatus === e.networkStatus &&
            t.stale === e.stale &&
            Object(i.p)(t.data, e.data)
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
          Object(i.p)(this.variables, e) ||
            (this.variables = Object.assign({}, this.variables, e)),
            Object(i.p)(this.options.variables, this.variables) ||
              (this.options.variables = Object.assign(
                {},
                this.options.variables,
                this.variables
              ));
          var r = "network-only" === t || "no-cache" === t,
            o = Object(n.a)({}, this.options, {
              fetchPolicy: r ? t : "network-only"
            });
          return this.queryManager
            .fetchQuery(this.queryId, o, D.refetch)
            .then(function(e) {
              return e;
            });
        }),
        (t.prototype.fetchMore = function(e) {
          var t,
            r = this;
          return (
            Object(x.b)(e.updateQuery),
            Promise.resolve()
              .then(function() {
                var i = r.queryManager.generateQueryId();
                return (
                  ((t = e.query
                    ? e
                    : Object(n.a)({}, r.options, e, {
                        variables: Object.assign({}, r.variables, e.variables)
                      })).fetchPolicy = "network-only"),
                  r.queryManager.fetchQuery(i, t, D.normal, r.queryId)
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
            ("cache-only" === t.fetchPolicy &&
              "cache-only" !== e.fetchPolicy) ||
            ("standby" === t.fetchPolicy && "standby" !== e.fetchPolicy) ||
            !1;
          return this.setVariables(this.options.variables, r, e.fetchResults);
        }),
        (t.prototype.setVariables = function(e, t, r) {
          void 0 === t && (t = !1),
            void 0 === r && (r = !0),
            (this.isTornDown = !1);
          var o = e || this.variables;
          return Object(i.p)(o, this.variables) && !t
            ? 0 !== this.observers.length && r
              ? this.result()
              : new Promise(function(e) {
                  return e();
                })
            : ((this.variables = o),
              (this.options.variables = o),
              0 === this.observers.length
                ? new Promise(function(e) {
                    return e();
                  })
                : this.queryManager
                    .fetchQuery(
                      this.queryId,
                      Object(n.a)({}, this.options, {
                        variables: this.variables
                      })
                    )
                    .then(function(e) {
                      return e;
                    }));
        }),
        (t.prototype.updateQuery = function(e) {
          var t = this.queryManager.getQueryWithPreviousResult(this.queryId),
            r = t.previousResult,
            n = t.variables,
            o = t.document,
            u = Object(i.y)(function() {
              return e(r, { variables: n });
            });
          u &&
            (this.queryManager.dataStore.markUpdateQueryResult(o, n, u),
            this.queryManager.broadcastQueries());
        }),
        (t.prototype.stopPolling = function() {
          this.queryManager.stopPollingQuery(this.queryId),
            (this.options.pollInterval = void 0);
        }),
        (t.prototype.startPolling = function(e) {
          V(this),
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
              (V(this),
              this.queryManager.startPollingQuery(this.options, this.queryId));
          var t = {
            next: function(t) {
              (e.lastResult = t),
                (e.lastResultSnapshot = Object(i.d)(t)),
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
    })(M);
    function V(e) {
      var t = e.options.fetchPolicy;
      Object(x.b)("cache-first" !== t && "cache-only" !== t);
    }
    var C = (function() {
        function e() {
          this.store = {};
        }
        return (
          (e.prototype.getStore = function() {
            return this.store;
          }),
          (e.prototype.get = function(e) {
            return this.store[e];
          }),
          (e.prototype.initMutation = function(e, t, r) {
            this.store[e] = {
              mutation: t,
              variables: r || {},
              loading: !0,
              error: null
            };
          }),
          (e.prototype.markMutationError = function(e, t) {
            var r = this.store[e];
            r && ((r.loading = !1), (r.error = t));
          }),
          (e.prototype.markMutationResult = function(e) {
            var t = this.store[e];
            t && ((t.loading = !1), (t.error = null));
          }),
          (e.prototype.reset = function() {
            this.store = {};
          }),
          e
        );
      })(),
      L = (function() {
        function e() {
          this.store = {};
        }
        return (
          (e.prototype.getStore = function() {
            return this.store;
          }),
          (e.prototype.get = function(e) {
            return this.store[e];
          }),
          (e.prototype.initQuery = function(e) {
            var t = this.store[e.queryId];
            if (
              t &&
              t.document !== e.document &&
              !Object(i.p)(t.document, e.document)
            )
              throw new x.a();
            var r,
              n = !1,
              o = null;
            e.storePreviousVariables &&
              t &&
              t.networkStatus !== q.loading &&
              (Object(i.p)(t.variables, e.variables) ||
                ((n = !0), (o = t.variables))),
              (r = n
                ? q.setVariables
                : e.isPoll
                ? q.poll
                : e.isRefetch
                ? q.refetch
                : q.loading);
            var u = [];
            t && t.graphQLErrors && (u = t.graphQLErrors),
              (this.store[e.queryId] = {
                document: e.document,
                variables: e.variables,
                previousVariables: o,
                networkError: null,
                graphQLErrors: u,
                networkStatus: r,
                metadata: e.metadata
              }),
              "string" == typeof e.fetchMoreForQueryId &&
                this.store[e.fetchMoreForQueryId] &&
                (this.store[e.fetchMoreForQueryId].networkStatus = q.fetchMore);
          }),
          (e.prototype.markQueryResult = function(e, t, r) {
            this.store &&
              this.store[e] &&
              ((this.store[e].networkError = null),
              (this.store[e].graphQLErrors =
                t.errors && t.errors.length ? t.errors : []),
              (this.store[e].previousVariables = null),
              (this.store[e].networkStatus = q.ready),
              "string" == typeof r &&
                this.store[r] &&
                (this.store[r].networkStatus = q.ready));
          }),
          (e.prototype.markQueryError = function(e, t, r) {
            this.store &&
              this.store[e] &&
              ((this.store[e].networkError = t),
              (this.store[e].networkStatus = q.error),
              "string" == typeof r && this.markQueryResultClient(r, !0));
          }),
          (e.prototype.markQueryResultClient = function(e, t) {
            this.store &&
              this.store[e] &&
              ((this.store[e].networkError = null),
              (this.store[e].previousVariables = null),
              (this.store[e].networkStatus = t ? q.ready : q.loading));
          }),
          (e.prototype.stopQuery = function(e) {
            delete this.store[e];
          }),
          (e.prototype.reset = function(e) {
            var t = this;
            this.store = Object.keys(this.store)
              .filter(function(t) {
                return e.indexOf(t) > -1;
              })
              .reduce(function(e, r) {
                return (
                  (e[r] = Object(n.a)({}, t.store[r], {
                    networkStatus: q.loading
                  })),
                  e
                );
              }, {});
          }),
          e
        );
      })();
    var N = (function() {
        function e(e) {
          var t = e.cache,
            r = e.client,
            n = e.resolvers,
            i = e.fragmentMatcher;
          (this.cache = t),
            r && (this.client = r),
            n && this.addResolvers(n),
            i && this.setFragmentMatcher(i);
        }
        return (
          (e.prototype.addResolvers = function(e) {
            var t = this;
            (this.resolvers = this.resolvers || {}),
              Array.isArray(e)
                ? e.forEach(function(e) {
                    t.resolvers = Object(i.s)(t.resolvers, e);
                  })
                : (this.resolvers = Object(i.s)(this.resolvers, e));
          }),
          (e.prototype.setResolvers = function(e) {
            (this.resolvers = {}), this.addResolvers(e);
          }),
          (e.prototype.getResolvers = function() {
            return this.resolvers || {};
          }),
          (e.prototype.runResolvers = function(e) {
            var t = e.document,
              r = e.remoteResult,
              i = e.context,
              o = e.variables,
              u = e.onlyRunForcedResolvers,
              a = void 0 !== u && u;
            return Object(n.b)(this, void 0, void 0, function() {
              return Object(n.d)(this, function(e) {
                return t
                  ? [
                      2,
                      this.resolveDocument(
                        t,
                        r.data,
                        i,
                        o,
                        this.fragmentMatcher,
                        a
                      ).then(function(e) {
                        return Object(n.a)({}, r, { data: e.result });
                      })
                    ]
                  : [2, r];
              });
            });
          }),
          (e.prototype.setFragmentMatcher = function(e) {
            this.fragmentMatcher = e;
          }),
          (e.prototype.getFragmentMatcher = function() {
            return this.fragmentMatcher;
          }),
          (e.prototype.clientQuery = function(e) {
            return Object(i.o)(["client"], e) && this.resolvers ? e : null;
          }),
          (e.prototype.serverQuery = function(e) {
            return this.resolvers ? Object(i.u)(e) : e;
          }),
          (e.prototype.prepareContext = function(e) {
            void 0 === e && (e = {});
            var t = this.cache;
            return Object(n.a)({}, e, {
              cache: t,
              getCacheKey: function(e) {
                if (t.config) return t.config.dataIdFromObject(e);
                Object(x.b)(!1);
              }
            });
          }),
          (e.prototype.addExportedVariables = function(e, t, r) {
            return (
              void 0 === t && (t = {}),
              void 0 === r && (r = {}),
              Object(n.b)(this, void 0, void 0, function() {
                return Object(n.d)(this, function(i) {
                  return e
                    ? [
                        2,
                        this.resolveDocument(
                          e,
                          this.buildRootValueFromCache(e, t) || {},
                          this.prepareContext(r),
                          t
                        ).then(function(e) {
                          return Object(n.a)({}, t, e.exportedVariables);
                        })
                      ]
                    : [2, Object(n.a)({}, t)];
                });
              })
            );
          }),
          (e.prototype.shouldForceResolvers = function(e) {
            var t = !1;
            return (
              Object(s.b)(e, {
                Directive: {
                  enter: function(e) {
                    if (
                      "client" === e.name.value &&
                      e.arguments &&
                      (t = e.arguments.some(function(e) {
                        return (
                          "always" === e.name.value &&
                          "BooleanValue" === e.value.kind &&
                          !0 === e.value.value
                        );
                      }))
                    )
                      return s.a;
                  }
                }
              }),
              t
            );
          }),
          (e.prototype.shouldForceResolver = function(e) {
            return this.shouldForceResolvers(e);
          }),
          (e.prototype.buildRootValueFromCache = function(e, t) {
            return this.cache.diff({
              query: Object(i.c)(e),
              variables: t,
              optimistic: !1
            }).result;
          }),
          (e.prototype.resolveDocument = function(e, t, r, o, u, a) {
            return (
              void 0 === r && (r = {}),
              void 0 === o && (o = {}),
              void 0 === u &&
                (u = function() {
                  return !0;
                }),
              void 0 === a && (a = !1),
              Object(n.b)(this, void 0, void 0, function() {
                var s, c, l, f, h, p, v, y, d;
                return Object(n.d)(this, function(b) {
                  var m;
                  return (
                    (s = Object(i.h)(e)),
                    (c = Object(i.g)(e)),
                    (l = Object(i.e)(c)),
                    (f = s.operation),
                    (h = f
                      ? (m = f).charAt(0).toUpperCase() + m.slice(1)
                      : "Query"),
                    (v = (p = this).cache),
                    (y = p.client),
                    (d = {
                      fragmentMap: l,
                      context: Object(n.a)({}, r, { cache: v, client: y }),
                      variables: o,
                      fragmentMatcher: u,
                      defaultOperationType: h,
                      exportedVariables: {},
                      onlyRunForcedResolvers: a
                    }),
                    [
                      2,
                      this.resolveSelectionSet(s.selectionSet, t, d).then(
                        function(e) {
                          return {
                            result: e,
                            exportedVariables: d.exportedVariables
                          };
                        }
                      )
                    ]
                  );
                });
              })
            );
          }),
          (e.prototype.resolveSelectionSet = function(e, t, r) {
            return Object(n.b)(this, void 0, void 0, function() {
              var o,
                u,
                a,
                s,
                c,
                l = this;
              return Object(n.d)(this, function(f) {
                return (
                  (o = r.fragmentMap),
                  (u = r.context),
                  (a = r.variables),
                  (s = [t]),
                  (c = function(e) {
                    return Object(n.b)(l, void 0, void 0, function() {
                      var c, l;
                      return Object(n.d)(this, function(n) {
                        return Object(i.x)(e, a)
                          ? Object(i.q)(e)
                            ? [
                                2,
                                this.resolveField(e, t, r).then(function(t) {
                                  var r;
                                  void 0 !== t &&
                                    s.push((((r = {})[Object(i.w)(e)] = t), r));
                                })
                              ]
                            : (Object(i.r)(e)
                                ? (c = e)
                                : ((c = o[e.name.value]), Object(x.b)(c)),
                              c &&
                              c.typeCondition &&
                              ((l = c.typeCondition.name.value),
                              r.fragmentMatcher(t, l, u))
                                ? [
                                    2,
                                    this.resolveSelectionSet(
                                      c.selectionSet,
                                      t,
                                      r
                                    ).then(function(e) {
                                      s.push(e);
                                    })
                                  ]
                                : [2])
                          : [2];
                      });
                    });
                  }),
                  [
                    2,
                    Promise.all(e.selections.map(c)).then(function() {
                      return Object(i.t)(s);
                    })
                  ]
                );
              });
            });
          }),
          (e.prototype.resolveField = function(e, t, r) {
            return Object(n.b)(this, void 0, void 0, function() {
              var o,
                u,
                a,
                s,
                c,
                l,
                f,
                h,
                p,
                v = this;
              return Object(n.d)(this, function(n) {
                return (
                  (o = r.variables),
                  (u = e.name.value),
                  (a = Object(i.w)(e)),
                  (s = u !== a),
                  (c = t[a] || t[u]),
                  (l = Promise.resolve(c)),
                  (r.onlyRunForcedResolvers && !this.shouldForceResolver(e)) ||
                    ((f = t.__typename || r.defaultOperationType),
                    (h = this.resolvers && this.resolvers[f]) &&
                      (p = h[s ? u : a]) &&
                      (l = Promise.resolve(
                        p(t, Object(i.a)(e, o), r.context, { field: e })
                      ))),
                  [
                    2,
                    l.then(function(t) {
                      return (
                        void 0 === t && (t = c),
                        e.directives &&
                          e.directives.forEach(function(e) {
                            "export" === e.name.value &&
                              e.arguments &&
                              e.arguments.forEach(function(e) {
                                "as" === e.name.value &&
                                  "StringValue" === e.value.kind &&
                                  (r.exportedVariables[e.value.value] = t);
                              });
                          }),
                        e.selectionSet
                          ? null == t
                            ? t
                            : Array.isArray(t)
                            ? v.resolveSubSelectedArray(e, t, r)
                            : e.selectionSet
                            ? v.resolveSelectionSet(e.selectionSet, t, r)
                            : void 0
                          : t
                      );
                    })
                  ]
                );
              });
            });
          }),
          (e.prototype.resolveSubSelectedArray = function(e, t, r) {
            var n = this;
            return Promise.all(
              t.map(function(t) {
                return null === t
                  ? null
                  : Array.isArray(t)
                  ? n.resolveSubSelectedArray(e, t, r)
                  : e.selectionSet
                  ? n.resolveSelectionSet(e.selectionSet, t, r)
                  : void 0;
              })
            );
          }),
          e
        );
      })(),
      A = (function() {
        function e(e) {
          var t = e.link,
            r = e.queryDeduplication,
            n = void 0 !== r && r,
            i = e.store,
            o = e.onBroadcast,
            u = void 0 === o ? function() {} : o,
            a = e.ssrMode,
            s = void 0 !== a && a,
            c = e.clientAwareness,
            l = void 0 === c ? {} : c,
            f = e.localState;
          (this.mutationStore = new C()),
            (this.queryStore = new L()),
            (this.clientAwareness = {}),
            (this.idCounter = 1),
            (this.queries = new Map()),
            (this.fetchQueryRejectFns = new Map()),
            (this.queryIdsByName = {}),
            (this.pollingInfoByQueryId = new Map()),
            (this.nextPoll = null),
            (this.link = t),
            (this.deduplicator = Q.from([new R(), t])),
            (this.queryDeduplication = n),
            (this.dataStore = i),
            (this.onBroadcast = u),
            (this.clientAwareness = l),
            (this.localState = f || new N({ cache: i.getCache() })),
            (this.ssrMode = s);
        }
        return (
          (e.prototype.stop = function() {
            var e = this;
            this.queries.forEach(function(t, r) {
              e.stopQueryNoBroadcast(r);
            }),
              this.fetchQueryRejectFns.forEach(function(e) {
                e(new Error("QueryManager stopped while query was in flight"));
              });
          }),
          (e.prototype.mutate = function(e) {
            var t = e.mutation,
              r = e.variables,
              o = e.optimisticResponse,
              u = e.updateQueries,
              a = e.refetchQueries,
              s = void 0 === a ? [] : a,
              c = e.awaitRefetchQueries,
              l = void 0 !== c && c,
              f = e.update,
              h = e.errorPolicy,
              p = void 0 === h ? "none" : h,
              v = e.fetchPolicy,
              y = e.context,
              d = void 0 === y ? {} : y;
            return Object(n.b)(this, void 0, void 0, function() {
              var e,
                a,
                c,
                h,
                y,
                b = this;
              return Object(n.d)(this, function(m) {
                switch (m.label) {
                  case 0:
                    return (
                      Object(x.b)(t),
                      Object(x.b)(!v || "no-cache" === v),
                      (e = this.generateQueryId()),
                      (a = this.dataStore.getCache()),
                      (t = a.transformDocument(t)),
                      (r = Object(i.b)({}, Object(i.f)(Object(i.i)(t)), r)),
                      this.setQuery(e, function() {
                        return { document: t };
                      }),
                      (c = function() {
                        var e = {};
                        return (
                          u &&
                            Object.keys(u).forEach(function(t) {
                              return (b.queryIdsByName[t] || []).forEach(
                                function(r) {
                                  e[r] = {
                                    updater: u[t],
                                    query: b.queryStore.get(r)
                                  };
                                }
                              );
                            }),
                          e
                        );
                      }),
                      Object(i.n)(t)
                        ? [4, this.localState.addExportedVariables(t, r, d)]
                        : [3, 2]
                    );
                  case 1:
                    return (y = m.sent()), [3, 3];
                  case 2:
                    (y = r), (m.label = 3);
                  case 3:
                    return (
                      (h = y),
                      this.mutationStore.initMutation(e, t, h),
                      this.dataStore.markMutationInit({
                        mutationId: e,
                        document: t,
                        variables: h || {},
                        updateQueries: c(),
                        update: f,
                        optimisticResponse: o
                      }),
                      this.broadcastQueries(),
                      [
                        2,
                        new Promise(function(r, u) {
                          var a,
                            y,
                            m = b.buildOperationForLink(
                              t,
                              h,
                              Object(n.a)({}, d, { optimisticResponse: o })
                            ),
                            g = function() {
                              if (
                                (y && b.mutationStore.markMutationError(e, y),
                                b.dataStore.markMutationComplete({
                                  mutationId: e,
                                  optimisticResponse: o
                                }),
                                b.broadcastQueries(),
                                y)
                              )
                                return Promise.reject(y);
                              "function" == typeof s && (s = s(a));
                              for (
                                var t = [], r = 0, n = s;
                                r < n.length;
                                r++
                              ) {
                                var u = n[r];
                                if ("string" != typeof u) {
                                  var c = {
                                    query: u.query,
                                    variables: u.variables,
                                    fetchPolicy: "network-only"
                                  };
                                  u.context && (c.context = u.context),
                                    t.push(b.query(c));
                                } else {
                                  var f = b.refetchQueryByName(u);
                                  f && t.push(f);
                                }
                              }
                              return Promise.all(l ? t : []).then(function() {
                                return (
                                  b.setQuery(e, function() {
                                    return { document: null };
                                  }),
                                  "ignore" === p &&
                                    a &&
                                    Object(i.m)(a) &&
                                    delete a.errors,
                                  a
                                );
                              });
                            },
                            O = b.localState.clientQuery(m.query),
                            w = b.localState.serverQuery(m.query);
                          w && (m.query = w);
                          var j = w ? k(b.link, m) : M.of({ data: {} }),
                            S = b,
                            Q = !1,
                            q = !1;
                          j.subscribe({
                            next: function(o) {
                              return Object(n.b)(b, void 0, void 0, function() {
                                var s, l, d;
                                return Object(n.d)(this, function(n) {
                                  switch (n.label) {
                                    case 0:
                                      return (
                                        (q = !0),
                                        Object(i.m)(o) && "none" === p
                                          ? ((q = !1),
                                            (y = new F({
                                              graphQLErrors: o.errors
                                            })),
                                            [2])
                                          : (S.mutationStore.markMutationResult(
                                              e
                                            ),
                                            (s = o),
                                            (l = m.context),
                                            (d = m.variables),
                                            O && Object(i.o)(["client"], O)
                                              ? [
                                                  4,
                                                  S.localState
                                                    .runResolvers({
                                                      document: O,
                                                      remoteResult: o,
                                                      context: l,
                                                      variables: d
                                                    })
                                                    .catch(function(e) {
                                                      return (q = !1), u(e), o;
                                                    })
                                                ]
                                              : [3, 2])
                                      );
                                    case 1:
                                      (s = n.sent()), (n.label = 2);
                                    case 2:
                                      return (
                                        "no-cache" !== v &&
                                          S.dataStore.markMutationResult({
                                            mutationId: e,
                                            result: s,
                                            document: t,
                                            variables: h || {},
                                            updateQueries: c(),
                                            update: f
                                          }),
                                        (a = s),
                                        (q = !1),
                                        Q && g().then(r, u),
                                        [2]
                                      );
                                  }
                                });
                              });
                            },
                            error: function(t) {
                              S.mutationStore.markMutationError(e, t),
                                S.dataStore.markMutationComplete({
                                  mutationId: e,
                                  optimisticResponse: o
                                }),
                                S.broadcastQueries(),
                                S.setQuery(e, function() {
                                  return { document: null };
                                }),
                                u(new F({ networkError: t }));
                            },
                            complete: function() {
                              q || g().then(r, u), (Q = !0);
                            }
                          });
                        })
                      ]
                    );
                }
              });
            });
          }),
          (e.prototype.fetchQuery = function(e, t, r, o) {
            return Object(n.b)(this, void 0, void 0, function() {
              var u,
                a,
                s,
                c,
                l,
                f,
                h,
                p,
                v,
                y,
                d,
                b,
                m,
                g,
                O,
                w,
                j,
                S,
                Q,
                k,
                q,
                E,
                x = this;
              return Object(n.d)(this, function(R) {
                switch (R.label) {
                  case 0:
                    return (
                      (u = t.variables),
                      (a = void 0 === u ? {} : u),
                      (s = t.metadata),
                      (c = void 0 === s ? null : s),
                      (l = t.fetchPolicy),
                      (f = void 0 === l ? "cache-first" : l),
                      (h = t.context),
                      (p = void 0 === h ? {} : h),
                      (v = this.dataStore.getCache()),
                      (y = v.transformDocument(t.query)),
                      Object(i.n)(y)
                        ? [4, this.localState.addExportedVariables(y, a, p)]
                        : [3, 2]
                    );
                  case 1:
                    return (b = R.sent()), [3, 3];
                  case 2:
                    (b = a), (R.label = 3);
                  case 3:
                    if (
                      ((d = b),
                      (m = Object(n.a)({}, t, { variables: d })),
                      (O = "network-only" === f || "no-cache" === f),
                      r !== D.refetch &&
                        "network-only" !== f &&
                        "no-cache" !== f &&
                        ((w = this.dataStore
                          .getCache()
                          .diff({
                            query: y,
                            variables: d,
                            returnPartialData: !0,
                            optimistic: !1
                          })),
                        (j = w.complete),
                        (S = w.result),
                        (O = !j || "cache-and-network" === f),
                        (g = S)),
                      (Q = O && "cache-only" !== f && "standby" !== f),
                      Object(i.o)(["live"], y) && (Q = !0),
                      (k = this.generateRequestId()),
                      (q = this.updateQueryWatch(e, y, m)),
                      this.setQuery(e, function() {
                        return {
                          document: y,
                          lastRequestId: k,
                          invalidated: !0,
                          cancel: q
                        };
                      }),
                      this.invalidate(!0, o),
                      this.queryStore.initQuery({
                        queryId: e,
                        document: y,
                        storePreviousVariables: Q,
                        variables: d,
                        isPoll: r === D.poll,
                        isRefetch: r === D.refetch,
                        metadata: c,
                        fetchMoreForQueryId: o
                      }),
                      this.broadcastQueries(),
                      (!Q || "cache-and-network" === f) &&
                        (this.queryStore.markQueryResultClient(e, !Q),
                        this.invalidate(!0, e, o),
                        this.broadcastQueries(
                          this.localState.shouldForceResolvers(y)
                        )),
                      Q)
                    ) {
                      if (
                        ((E = this.fetchRequest({
                          requestId: k,
                          queryId: e,
                          document: y,
                          options: m,
                          fetchMoreForQueryId: o
                        }).catch(function(t) {
                          if (I(t)) throw t;
                          var r = x.getQuery(e).lastRequestId;
                          throw (k >= (r || 1) &&
                            (x.queryStore.markQueryError(e, t, o),
                            x.invalidate(!0, e, o),
                            x.broadcastQueries()),
                          new F({ networkError: t }));
                        })),
                        "cache-and-network" !== f)
                      )
                        return [2, E];
                      E.catch(function() {});
                    }
                    return [2, Promise.resolve({ data: g })];
                }
              });
            });
          }),
          (e.prototype.queryListenerForObserver = function(e, t, r) {
            var i = this,
              o = !1;
            return function(u, a, s) {
              return Object(n.b)(i, void 0, void 0, function() {
                var i, c, l, f, h, p, v, y, d, b, m, g, O, w, j, S, Q, k, q, E;
                return Object(n.d)(this, function(x) {
                  switch (x.label) {
                    case 0:
                      if ((this.invalidate(!1, e), !u)) return [2];
                      if (
                        ((i = this.getQuery(e).observableQuery),
                        "standby" ===
                          (c = i ? i.options.fetchPolicy : t.fetchPolicy))
                      )
                        return [2];
                      if (
                        ((l = i ? i.options.errorPolicy : t.errorPolicy),
                        (f = i ? i.getLastResult() : null),
                        (h = i ? i.getLastError() : null),
                        (p =
                          (!a && null != u.previousVariables) ||
                          "cache-only" === c ||
                          "cache-and-network" === c),
                        (v = Boolean(f && u.networkStatus !== f.networkStatus)),
                        (y =
                          l &&
                          (h && h.graphQLErrors) !== u.graphQLErrors &&
                          "none" !== l),
                        !(
                          !P(u.networkStatus) ||
                          (v && t.notifyOnNetworkStatusChange) ||
                          p
                        ))
                      )
                        return [3, 8];
                      if (
                        ((!l || "none" === l) &&
                          u.graphQLErrors &&
                          u.graphQLErrors.length > 0) ||
                        u.networkError
                      ) {
                        if (
                          ((d = new F({
                            graphQLErrors: u.graphQLErrors,
                            networkError: u.networkError
                          })),
                          (o = !0),
                          r.error)
                        )
                          try {
                            r.error(d);
                          } catch (e) {
                            setTimeout(function() {
                              throw e;
                            }, 0);
                          }
                        else
                          setTimeout(function() {
                            throw d;
                          }, 0);
                        return [2];
                      }
                      x.label = 1;
                    case 1:
                      if (
                        (x.trys.push([1, 7, , 8]),
                        (b = void 0),
                        (m = void 0),
                        a
                          ? ("no-cache" !== c &&
                              "network-only" !== c &&
                              this.setQuery(e, function() {
                                return { newData: null };
                              }),
                            (b = a.result),
                            (m = !a.complete || !1))
                          : f && f.data && !y
                          ? ((b = f.data), (m = !1))
                          : ((g = this.getQuery(e).document),
                            (O = this.dataStore
                              .getCache()
                              .diff({
                                query: g,
                                variables: u.previousVariables || u.variables,
                                optimistic: !0
                              })),
                            (b = O.result),
                            (m = !O.complete)),
                        (w = void 0),
                        (w =
                          m && "cache-only" !== c
                            ? {
                                data: f && f.data,
                                loading: P(u.networkStatus),
                                networkStatus: u.networkStatus,
                                stale: !0
                              }
                            : {
                                data: b,
                                loading: P(u.networkStatus),
                                networkStatus: u.networkStatus,
                                stale: !1
                              }),
                        "all" === l &&
                          u.graphQLErrors &&
                          u.graphQLErrors.length > 0 &&
                          (w.errors = u.graphQLErrors),
                        !r.next)
                      )
                        return [3, 6];
                      if (!o && i && !i.isDifferentFromLastResult(w))
                        return [3, 6];
                      x.label = 2;
                    case 2:
                      return (
                        x.trys.push([2, 5, , 6]),
                        s
                          ? ((j = t.query),
                            (S = t.variables),
                            (Q = t.context),
                            [
                              4,
                              this.localState.runResolvers({
                                document: j,
                                remoteResult: w,
                                context: Q,
                                variables: S,
                                onlyRunForcedResolvers: s
                              })
                            ])
                          : [3, 4]
                      );
                    case 3:
                      (k = x.sent()),
                        (w = Object(n.a)({}, w, k)),
                        (x.label = 4);
                    case 4:
                      return r.next(w), [3, 6];
                    case 5:
                      return (
                        (q = x.sent()),
                        setTimeout(function() {
                          throw q;
                        }, 0),
                        [3, 6]
                      );
                    case 6:
                      return (o = !1), [3, 8];
                    case 7:
                      return (
                        (E = x.sent()),
                        (o = !0),
                        r.error && r.error(new F({ networkError: E })),
                        [2]
                      );
                    case 8:
                      return [2];
                  }
                });
              });
            };
          }),
          (e.prototype.watchQuery = function(e, t) {
            void 0 === t && (t = !0), Object(x.b)("standby" !== e.fetchPolicy);
            var r = Object(i.l)(e.query);
            if (r.variableDefinitions && r.variableDefinitions.length) {
              var o = Object(i.f)(r);
              e.variables = Object(i.b)({}, o, e.variables);
            }
            void 0 === e.notifyOnNetworkStatusChange &&
              (e.notifyOnNetworkStatusChange = !1);
            var u = Object(n.a)({}, e);
            return new _({
              queryManager: this,
              options: u,
              shouldSubscribe: t
            });
          }),
          (e.prototype.query = function(e) {
            var t = this;
            return (
              Object(x.b)(e.query),
              Object(x.b)("Document" === e.query.kind),
              Object(x.b)(!e.returnPartialData),
              Object(x.b)(!e.pollInterval),
              new Promise(function(r, n) {
                var i = t.watchQuery(e, !1);
                t.fetchQueryRejectFns.set("query:" + i.queryId, n),
                  i
                    .result()
                    .then(r, n)
                    .then(function() {
                      return t.fetchQueryRejectFns.delete("query:" + i.queryId);
                    });
              })
            );
          }),
          (e.prototype.generateQueryId = function() {
            var e = this.idCounter.toString();
            return this.idCounter++, e;
          }),
          (e.prototype.stopQueryInStore = function(e) {
            this.stopQueryInStoreNoBroadcast(e), this.broadcastQueries();
          }),
          (e.prototype.stopQueryInStoreNoBroadcast = function(e) {
            this.stopPollingQuery(e),
              this.queryStore.stopQuery(e),
              this.invalidate(!0, e);
          }),
          (e.prototype.addQueryListener = function(e, t) {
            this.setQuery(e, function(e) {
              var r = e.listeners;
              return {
                listeners: (void 0 === r ? [] : r).concat([t]),
                invalidated: !1
              };
            });
          }),
          (e.prototype.updateQueryWatch = function(e, t, r) {
            var n = this,
              i = this.getQuery(e).cancel;
            i && i();
            return this.dataStore.getCache().watch({
              query: t,
              variables: r.variables,
              optimistic: !0,
              previousResult: function() {
                var t = null,
                  r = n.getQuery(e).observableQuery;
                if (r) {
                  var i = r.getLastResult();
                  i && (t = i.data);
                }
                return t;
              },
              callback: function(t) {
                n.setQuery(e, function() {
                  return { invalidated: !0, newData: t };
                });
              }
            });
          }),
          (e.prototype.addObservableQuery = function(e, t) {
            this.setQuery(e, function() {
              return { observableQuery: t };
            });
            var r = Object(i.l)(t.options.query);
            if (r.name && r.name.value) {
              var n = r.name.value;
              (this.queryIdsByName[n] = this.queryIdsByName[n] || []),
                this.queryIdsByName[n].push(t.queryId);
            }
          }),
          (e.prototype.removeObservableQuery = function(e) {
            var t = this.getQuery(e),
              r = t.observableQuery,
              n = t.cancel;
            if ((n && n(), r)) {
              var o = Object(i.l)(r.options.query),
                u = o.name ? o.name.value : null;
              this.setQuery(e, function() {
                return { observableQuery: null };
              }),
                u &&
                  (this.queryIdsByName[u] = this.queryIdsByName[u].filter(
                    function(e) {
                      return !(r.queryId === e);
                    }
                  ));
            }
          }),
          (e.prototype.clearStore = function() {
            this.fetchQueryRejectFns.forEach(function(e) {
              e(
                new Error(
                  "Store reset while query was in flight(not completed in link chain)"
                )
              );
            });
            var e = [];
            return (
              this.queries.forEach(function(t, r) {
                t.observableQuery && e.push(r);
              }),
              this.queryStore.reset(e),
              this.mutationStore.reset(),
              this.dataStore.reset()
            );
          }),
          (e.prototype.resetStore = function() {
            var e = this;
            return this.clearStore().then(function() {
              return e.reFetchObservableQueries();
            });
          }),
          (e.prototype.reFetchObservableQueries = function(e) {
            var t = this.getObservableQueryPromises(e);
            return this.broadcastQueries(), Promise.all(t);
          }),
          (e.prototype.startQuery = function(e, t, r) {
            return (
              this.addQueryListener(e, r),
              this.fetchQuery(e, t).catch(function() {}),
              e
            );
          }),
          (e.prototype.startGraphQLSubscription = function(e) {
            var t,
              r = this,
              o = e.query,
              u = !(e.fetchPolicy && "no-cache" === e.fetchPolicy),
              a = this.dataStore.getCache().transformDocument(o),
              s = Object(i.b)({}, Object(i.f)(Object(i.j)(o)), e.variables),
              c = s,
              l = [],
              f = this.localState.clientQuery(a);
            return new M(function(e) {
              if ((l.push(e), 1 === l.length)) {
                var o = 0,
                  h = !1,
                  p = {
                    next: function(e) {
                      return Object(n.b)(r, void 0, void 0, function() {
                        var t;
                        return Object(n.d)(this, function(r) {
                          switch (r.label) {
                            case 0:
                              return (
                                (o += 1),
                                (t = e),
                                f && Object(i.o)(["client"], f)
                                  ? [
                                      4,
                                      this.localState.runResolvers({
                                        document: f,
                                        remoteResult: e,
                                        context: {},
                                        variables: c
                                      })
                                    ]
                                  : [3, 2]
                              );
                            case 1:
                              (t = r.sent()), (r.label = 2);
                            case 2:
                              return (
                                u &&
                                  (this.dataStore.markSubscriptionResult(
                                    t,
                                    a,
                                    c
                                  ),
                                  this.broadcastQueries()),
                                l.forEach(function(e) {
                                  Object(i.m)(t) && e.error
                                    ? e.error(
                                        new F({ graphQLErrors: t.errors })
                                      )
                                    : e.next && e.next(t),
                                    (o -= 1);
                                }),
                                0 === o && h && p.complete(),
                                [2]
                              );
                          }
                        });
                      });
                    },
                    error: function(e) {
                      l.forEach(function(t) {
                        t.error && t.error(e);
                      });
                    },
                    complete: function() {
                      0 === o &&
                        l.forEach(function(e) {
                          e.complete && e.complete();
                        }),
                        (h = !0);
                    }
                  };
                Object(n.b)(r, void 0, void 0, function() {
                  var e, r, o, u;
                  return Object(n.d)(this, function(n) {
                    switch (n.label) {
                      case 0:
                        return Object(i.n)(a)
                          ? [4, this.localState.addExportedVariables(a, s)]
                          : [3, 2];
                      case 1:
                        return (r = n.sent()), [3, 3];
                      case 2:
                        (r = s), (n.label = 3);
                      case 3:
                        return (
                          (e = r),
                          (o = this.localState.serverQuery(a))
                            ? ((u = this.buildOperationForLink(o, e)),
                              (t = k(this.link, u).subscribe(p)))
                            : (t = M.of({ data: {} }).subscribe(p)),
                          [2]
                        );
                    }
                  });
                });
              }
              return function() {
                0 ===
                  (l = l.filter(function(t) {
                    return t !== e;
                  })).length &&
                  t &&
                  t.unsubscribe();
              };
            });
          }),
          (e.prototype.stopQuery = function(e) {
            this.stopQueryNoBroadcast(e), this.broadcastQueries();
          }),
          (e.prototype.stopQueryNoBroadcast = function(e) {
            this.stopQueryInStoreNoBroadcast(e), this.removeQuery(e);
          }),
          (e.prototype.removeQuery = function(e) {
            var t = this.getQuery(e).subscriptions;
            this.fetchQueryRejectFns.delete("query:" + e),
              this.fetchQueryRejectFns.delete("fetchRequest:" + e),
              t.forEach(function(e) {
                return e.unsubscribe();
              }),
              this.queries.delete(e);
          }),
          (e.prototype.getCurrentQueryResult = function(e, t) {
            void 0 === t && (t = !0);
            var r = e.options,
              n = r.variables,
              i = r.query,
              o = r.fetchPolicy,
              u = e.getLastResult(),
              a = this.getQuery(e.queryId).newData;
            if (a && a.complete) return { data: a.result, partial: !1 };
            if ("no-cache" === o || "network-only" === o)
              return { data: void 0, partial: !1 };
            try {
              return {
                data:
                  this.dataStore
                    .getCache()
                    .read({
                      query: i,
                      variables: n,
                      previousResult: u ? u.data : void 0,
                      optimistic: t
                    }) || void 0,
                partial: !1
              };
            } catch (e) {
              return { data: void 0, partial: !0 };
            }
          }),
          (e.prototype.getQueryWithPreviousResult = function(e) {
            var t;
            if ("string" == typeof e) {
              var r = this.getQuery(e).observableQuery;
              Object(x.b)(r), (t = r);
            } else t = e;
            var n = t.options,
              i = n.variables,
              o = n.query;
            return {
              previousResult: this.getCurrentQueryResult(t, !1).data,
              variables: i,
              document: o
            };
          }),
          (e.prototype.broadcastQueries = function(e) {
            var t = this;
            void 0 === e && (e = !1),
              this.onBroadcast(),
              this.queries.forEach(function(r, n) {
                r.invalidated &&
                  r.listeners &&
                  r.listeners
                    .filter(function(e) {
                      return !!e;
                    })
                    .forEach(function(i) {
                      i(t.queryStore.get(n), r.newData, e);
                    });
              });
          }),
          (e.prototype.getLocalState = function() {
            return this.localState;
          }),
          (e.prototype.getObservableQueryPromises = function(e) {
            var t = this,
              r = [];
            return (
              this.queries.forEach(function(n, i) {
                var o = n.observableQuery;
                if (o) {
                  var u = o.options.fetchPolicy;
                  o.resetLastResults(),
                    "cache-only" === u ||
                      (!e && "standby" === u) ||
                      r.push(o.refetch()),
                    t.setQuery(i, function() {
                      return { newData: null };
                    }),
                    t.invalidate(!0, i);
                }
              }),
              r
            );
          }),
          (e.prototype.fetchRequest = function(e) {
            var t,
              r,
              o = this,
              u = e.requestId,
              a = e.queryId,
              s = e.document,
              c = e.options,
              l = e.fetchMoreForQueryId,
              f = c.variables,
              h = c.context,
              p = c.errorPolicy,
              v = void 0 === p ? "none" : p,
              y = c.fetchPolicy;
            return new Promise(function(e, c) {
              var p,
                d = {},
                b = o.localState.clientQuery(s),
                m = o.localState.serverQuery(s);
              if (m) {
                var g = o.buildOperationForLink(
                  m,
                  f,
                  Object(n.a)({}, h, { forceFetch: !o.queryDeduplication })
                );
                (d = g.context), (p = k(o.deduplicator, g));
              } else (d = o.prepareContext(h)), (p = M.of({ data: {} }));
              o.fetchQueryRejectFns.set("fetchRequest:" + a, c);
              var O = !1,
                w = !0,
                j = {
                  next: function(e) {
                    return Object(n.b)(o, void 0, void 0, function() {
                      var o, h;
                      return Object(n.d)(this, function(n) {
                        switch (n.label) {
                          case 0:
                            return (
                              (w = !0),
                              (o = e),
                              (h = this.getQuery(a).lastRequestId),
                              u >= (h || 1)
                                ? b && Object(i.o)(["client"], b)
                                  ? [
                                      4,
                                      this.localState
                                        .runResolvers({
                                          document: b,
                                          remoteResult: e,
                                          context: d,
                                          variables: f
                                        })
                                        .catch(function(t) {
                                          return (w = !1), c(t), e;
                                        })
                                    ]
                                  : [3, 2]
                                : [3, 3]
                            );
                          case 1:
                            (o = n.sent()), (n.label = 2);
                          case 2:
                            if ("no-cache" !== y)
                              try {
                                this.dataStore.markQueryResult(
                                  o,
                                  s,
                                  f,
                                  l,
                                  "ignore" === v || "all" === v
                                );
                              } catch (e) {
                                return (w = !1), c(e), [2];
                              }
                            else
                              this.setQuery(a, function() {
                                return {
                                  newData: { result: o.data, complete: !0 }
                                };
                              });
                            this.queryStore.markQueryResult(a, o, l),
                              this.invalidate(!0, a, l),
                              this.broadcastQueries(),
                              (n.label = 3);
                          case 3:
                            if (o.errors && "none" === v)
                              return (
                                (w = !1),
                                c(new F({ graphQLErrors: o.errors })),
                                [2]
                              );
                            if (
                              ("all" === v && (r = o.errors),
                              l || "no-cache" === y)
                            )
                              t = o.data;
                            else
                              try {
                                t = this.dataStore
                                  .getCache()
                                  .read({
                                    variables: f,
                                    query: s,
                                    optimistic: !1
                                  });
                              } catch (e) {}
                            return (w = !1), O && j.complete(), [2];
                        }
                      });
                    });
                  },
                  error: function(e) {
                    o.fetchQueryRejectFns.delete("fetchRequest:" + a),
                      o.setQuery(a, function(e) {
                        return {
                          subscriptions: e.subscriptions.filter(function(e) {
                            return e !== S;
                          })
                        };
                      }),
                      c(e);
                  },
                  complete: function() {
                    w ||
                      (o.fetchQueryRejectFns.delete("fetchRequest:" + a),
                      o.setQuery(a, function(e) {
                        return {
                          subscriptions: e.subscriptions.filter(function(e) {
                            return e !== S;
                          })
                        };
                      }),
                      e({
                        data: t,
                        errors: r,
                        loading: !1,
                        networkStatus: q.ready,
                        stale: !1
                      })),
                      (O = !0);
                  }
                },
                S = p.subscribe(j);
              o.setQuery(a, function(e) {
                return { subscriptions: e.subscriptions.concat([S]) };
              });
            }).catch(function(e) {
              throw (o.fetchQueryRejectFns.delete("fetchRequest:" + a), e);
            });
          }),
          (e.prototype.refetchQueryByName = function(e) {
            var t = this,
              r = this.queryIdsByName[e];
            if (void 0 !== r)
              return Promise.all(
                r
                  .map(function(e) {
                    return t.getQuery(e).observableQuery;
                  })
                  .filter(function(e) {
                    return !!e;
                  })
                  .map(function(e) {
                    return e.refetch();
                  })
              );
          }),
          (e.prototype.generateRequestId = function() {
            var e = this.idCounter;
            return this.idCounter++, e;
          }),
          (e.prototype.getQuery = function(e) {
            return (
              this.queries.get(e) || {
                listeners: [],
                invalidated: !1,
                document: null,
                newData: null,
                lastRequestId: null,
                observableQuery: null,
                subscriptions: []
              }
            );
          }),
          (e.prototype.setQuery = function(e, t) {
            var r = this.getQuery(e),
              i = Object(n.a)({}, r, t(r));
            this.queries.set(e, i);
          }),
          (e.prototype.invalidate = function(e, t, r) {
            t &&
              this.setQuery(t, function() {
                return { invalidated: e };
              }),
              r &&
                this.setQuery(r, function() {
                  return { invalidated: e };
                });
          }),
          (e.prototype.buildOperationForLink = function(e, t, r) {
            var n = this.dataStore.getCache();
            return {
              query: n.transformForLink ? n.transformForLink(e) : e,
              variables: t,
              operationName: Object(i.k)(e) || void 0,
              context: this.prepareContext(r)
            };
          }),
          (e.prototype.prepareContext = function(e) {
            void 0 === e && (e = {});
            var t = this.localState.prepareContext(e);
            return Object(n.a)({}, t, {
              clientAwareness: this.clientAwareness
            });
          }),
          (e.prototype.checkInFlight = function(e) {
            var t = this.queryStore.get(e);
            return (
              t && t.networkStatus !== q.ready && t.networkStatus !== q.error
            );
          }),
          (e.prototype.startPollingQuery = function(e, t, r) {
            var i = e.pollInterval;
            return (
              Object(x.b)(i),
              this.ssrMode ||
                (this.pollingInfoByQueryId.set(t, {
                  interval: i,
                  lastPollTimeMs: Date.now() - 10,
                  options: Object(n.a)({}, e, { fetchPolicy: "network-only" })
                }),
                r && this.addQueryListener(t, r),
                this.schedulePoll(i)),
              t
            );
          }),
          (e.prototype.stopPollingQuery = function(e) {
            this.pollingInfoByQueryId.delete(e);
          }),
          (e.prototype.schedulePoll = function(e) {
            var t = this,
              r = Date.now();
            if (this.nextPoll) {
              if (!(e < this.nextPoll.time - r)) return;
              clearTimeout(this.nextPoll.timeout);
            }
            this.nextPoll = {
              time: r + e,
              timeout: setTimeout(function() {
                t.nextPoll = null;
                var e = 1 / 0;
                t.pollingInfoByQueryId.forEach(function(r, n) {
                  if (
                    (r.interval < e && (e = r.interval),
                    !t.checkInFlight(n) &&
                      Date.now() - r.lastPollTimeMs >= r.interval)
                  ) {
                    var i = function() {
                      r.lastPollTimeMs = Date.now();
                    };
                    t.fetchQuery(n, r.options, D.poll).then(i, i);
                  }
                }),
                  isFinite(e) && t.schedulePoll(e);
              }, e)
            };
          }),
          e
        );
      })(),
      B = (function() {
        function e(e) {
          this.cache = e;
        }
        return (
          (e.prototype.getCache = function() {
            return this.cache;
          }),
          (e.prototype.markQueryResult = function(e, t, r, n, o) {
            void 0 === o && (o = !1);
            var u = !Object(i.m)(e);
            o && Object(i.m)(e) && e.data && (u = !0),
              !n &&
                u &&
                this.cache.write({
                  result: e.data,
                  dataId: "ROOT_QUERY",
                  query: t,
                  variables: r
                });
          }),
          (e.prototype.markSubscriptionResult = function(e, t, r) {
            Object(i.m)(e) ||
              this.cache.write({
                result: e.data,
                dataId: "ROOT_SUBSCRIPTION",
                query: t,
                variables: r
              });
          }),
          (e.prototype.markMutationInit = function(e) {
            var t = this;
            if (e.optimisticResponse) {
              var r;
              r =
                "function" == typeof e.optimisticResponse
                  ? e.optimisticResponse(e.variables)
                  : e.optimisticResponse;
              this.cache.recordOptimisticTransaction(function(n) {
                var i = t.cache;
                t.cache = n;
                try {
                  t.markMutationResult({
                    mutationId: e.mutationId,
                    result: { data: r },
                    document: e.document,
                    variables: e.variables,
                    updateQueries: e.updateQueries,
                    update: e.update
                  });
                } finally {
                  t.cache = i;
                }
              }, e.mutationId);
            }
          }),
          (e.prototype.markMutationResult = function(e) {
            var t = this;
            if (!Object(i.m)(e.result)) {
              var r = [];
              r.push({
                result: e.result.data,
                dataId: "ROOT_MUTATION",
                query: e.document,
                variables: e.variables
              }),
                e.updateQueries &&
                  Object.keys(e.updateQueries)
                    .filter(function(t) {
                      return e.updateQueries[t];
                    })
                    .forEach(function(n) {
                      var o = e.updateQueries[n],
                        u = o.query,
                        a = o.updater,
                        s = t.cache.diff({
                          query: u.document,
                          variables: u.variables,
                          returnPartialData: !0,
                          optimistic: !1
                        }),
                        c = s.result;
                      if (s.complete) {
                        var l = Object(i.y)(function() {
                          return a(c, {
                            mutationResult: e.result,
                            queryName: Object(i.k)(u.document) || void 0,
                            queryVariables: u.variables
                          });
                        });
                        l &&
                          r.push({
                            result: l,
                            dataId: "ROOT_QUERY",
                            query: u.document,
                            variables: u.variables
                          });
                      }
                    }),
                this.cache.performTransaction(function(e) {
                  r.forEach(function(t) {
                    return e.write(t);
                  });
                });
              var n = e.update;
              n &&
                this.cache.performTransaction(function(t) {
                  Object(i.y)(function() {
                    return n(t, e.result);
                  });
                });
            }
          }),
          (e.prototype.markMutationComplete = function(e) {
            var t = e.mutationId;
            e.optimisticResponse && this.cache.removeOptimistic(t);
          }),
          (e.prototype.markUpdateQueryResult = function(e, t, r) {
            this.cache.write({
              result: r,
              dataId: "ROOT_QUERY",
              variables: t,
              query: e
            });
          }),
          (e.prototype.reset = function() {
            return this.cache.reset();
          }),
          e
        );
      })(),
      U = "2.5.1";
    !(function() {
      function e(e) {
        var t = this;
        (this.defaultOptions = {}),
          (this.resetStoreCallbacks = []),
          (this.clearStoreCallbacks = []),
          (this.clientAwareness = {});
        var r = e.cache,
          n = e.ssrMode,
          o = void 0 !== n && n,
          u = e.ssrForceFetchDelay,
          a = void 0 === u ? 0 : u,
          s = e.connectToDevTools,
          c = e.queryDeduplication,
          l = void 0 === c || c,
          f = e.defaultOptions,
          h = e.resolvers,
          p = e.typeDefs,
          v = e.fragmentMatcher,
          y = e.name,
          d = e.version,
          b = e.link;
        if ((!b && h && (b = Q.empty()), !b || !r)) throw new x.a();
        var m = new Map(),
          g = new Q(function(e, t) {
            var r = m.get(e.query);
            return (
              r || ((r = Object(i.v)(e.query)), m.set(e.query, r), m.set(r, r)),
              (e.query = r),
              t(e)
            );
          });
        (this.link = g.concat(b)),
          (this.cache = r),
          (this.store = new B(r)),
          (this.disableNetworkFetches = o || a > 0),
          (this.queryDeduplication = l),
          (this.ssrMode = o),
          (this.defaultOptions = f || {}),
          (this.typeDefs = p),
          a &&
            setTimeout(function() {
              return (t.disableNetworkFetches = !1);
            }, a),
          (this.watchQuery = this.watchQuery.bind(this)),
          (this.query = this.query.bind(this)),
          (this.mutate = this.mutate.bind(this)),
          (this.resetStore = this.resetStore.bind(this)),
          (this.reFetchObservableQueries = this.reFetchObservableQueries.bind(
            this
          ));
        void 0 !== s &&
          (s && "undefined" != typeof window) &&
          (window.__APOLLO_CLIENT__ = this),
          (this.version = U),
          y && (this.clientAwareness.name = y),
          d && (this.clientAwareness.version = d),
          (this.localState = new N({
            cache: r,
            client: this,
            resolvers: h,
            fragmentMatcher: v
          }));
      }
      (e.prototype.stop = function() {
        this.queryManager && this.queryManager.stop();
      }),
        (e.prototype.watchQuery = function(e) {
          return (
            this.defaultOptions.watchQuery &&
              (e = Object(n.a)({}, this.defaultOptions.watchQuery, e)),
            !this.disableNetworkFetches ||
              ("network-only" !== e.fetchPolicy &&
                "cache-and-network" !== e.fetchPolicy) ||
              (e = Object(n.a)({}, e, { fetchPolicy: "cache-first" })),
            this.initQueryManager().watchQuery(e)
          );
        }),
        (e.prototype.query = function(e) {
          return (
            this.defaultOptions.query &&
              (e = Object(n.a)({}, this.defaultOptions.query, e)),
            Object(x.b)("cache-and-network" !== e.fetchPolicy),
            this.disableNetworkFetches &&
              "network-only" === e.fetchPolicy &&
              (e = Object(n.a)({}, e, { fetchPolicy: "cache-first" })),
            this.initQueryManager().query(e)
          );
        }),
        (e.prototype.mutate = function(e) {
          return (
            this.defaultOptions.mutate &&
              (e = Object(n.a)({}, this.defaultOptions.mutate, e)),
            this.initQueryManager().mutate(e)
          );
        }),
        (e.prototype.subscribe = function(e) {
          return this.initQueryManager().startGraphQLSubscription(e);
        }),
        (e.prototype.readQuery = function(e, t) {
          return void 0 === t && (t = !1), this.initProxy().readQuery(e, t);
        }),
        (e.prototype.readFragment = function(e, t) {
          return void 0 === t && (t = !1), this.initProxy().readFragment(e, t);
        }),
        (e.prototype.writeQuery = function(e) {
          var t = this.initProxy().writeQuery(e);
          return this.initQueryManager().broadcastQueries(), t;
        }),
        (e.prototype.writeFragment = function(e) {
          var t = this.initProxy().writeFragment(e);
          return this.initQueryManager().broadcastQueries(), t;
        }),
        (e.prototype.writeData = function(e) {
          var t = this.initProxy().writeData(e);
          return this.initQueryManager().broadcastQueries(), t;
        }),
        (e.prototype.__actionHookForDevTools = function(e) {
          this.devToolsHookCb = e;
        }),
        (e.prototype.__requestRaw = function(e) {
          return k(this.link, e);
        }),
        (e.prototype.initQueryManager = function() {
          var e = this;
          return (
            this.queryManager ||
              (this.queryManager = new A({
                link: this.link,
                store: this.store,
                queryDeduplication: this.queryDeduplication,
                ssrMode: this.ssrMode,
                clientAwareness: this.clientAwareness,
                localState: this.localState,
                onBroadcast: function() {
                  e.devToolsHookCb &&
                    e.devToolsHookCb({
                      action: {},
                      state: {
                        queries: e.queryManager
                          ? e.queryManager.queryStore.getStore()
                          : {},
                        mutations: e.queryManager
                          ? e.queryManager.mutationStore.getStore()
                          : {}
                      },
                      dataWithOptimisticResults: e.cache.extract(!0)
                    });
                }
              })),
            this.queryManager
          );
        }),
        (e.prototype.resetStore = function() {
          var e = this;
          return Promise.resolve()
            .then(function() {
              return e.queryManager
                ? e.queryManager.clearStore()
                : Promise.resolve(null);
            })
            .then(function() {
              return Promise.all(
                e.resetStoreCallbacks.map(function(e) {
                  return e();
                })
              );
            })
            .then(function() {
              return e.queryManager && e.queryManager.reFetchObservableQueries
                ? e.queryManager.reFetchObservableQueries()
                : Promise.resolve(null);
            });
        }),
        (e.prototype.clearStore = function() {
          var e = this,
            t = this.queryManager;
          return Promise.resolve()
            .then(function() {
              return Promise.all(
                e.clearStoreCallbacks.map(function(e) {
                  return e();
                })
              );
            })
            .then(function() {
              return t ? t.clearStore() : Promise.resolve(null);
            });
        }),
        (e.prototype.onResetStore = function(e) {
          var t = this;
          return (
            this.resetStoreCallbacks.push(e),
            function() {
              t.resetStoreCallbacks = t.resetStoreCallbacks.filter(function(t) {
                return t !== e;
              });
            }
          );
        }),
        (e.prototype.onClearStore = function(e) {
          var t = this;
          return (
            this.clearStoreCallbacks.push(e),
            function() {
              t.clearStoreCallbacks = t.clearStoreCallbacks.filter(function(t) {
                return t !== e;
              });
            }
          );
        }),
        (e.prototype.reFetchObservableQueries = function(e) {
          return this.queryManager
            ? this.queryManager.reFetchObservableQueries(e)
            : Promise.resolve(null);
        }),
        (e.prototype.extract = function(e) {
          return this.initProxy().extract(e);
        }),
        (e.prototype.restore = function(e) {
          return this.initProxy().restore(e);
        }),
        (e.prototype.addResolvers = function(e) {
          this.localState.addResolvers(e);
        }),
        (e.prototype.setResolvers = function(e) {
          this.localState.setResolvers(e);
        }),
        (e.prototype.getResolvers = function() {
          return this.localState.getResolvers();
        }),
        (e.prototype.setLocalStateFragmentMatcher = function(e) {
          this.localState.setFragmentMatcher(e);
        }),
        (e.prototype.initProxy = function() {
          return (
            this.proxy || (this.initQueryManager(), (this.proxy = this.cache)),
            this.proxy
          );
        });
    })();
    console.log(I);
  }
]);
