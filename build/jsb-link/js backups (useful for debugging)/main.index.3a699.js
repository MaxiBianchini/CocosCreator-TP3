window.__require = function t(e, o, n) {
function r(i, s) {
if (!o[i]) {
if (!e[i]) {
var a = i.split("/");
a = a[a.length - 1];
if (!e[a]) {
var p = "function" == typeof __require && __require;
if (!s && p) return p(a, !0);
if (c) return c(a, !0);
throw new Error("Cannot find module '" + i + "'");
}
i = a;
}
var u = o[i] = {
exports: {}
};
e[i][0].call(u.exports, function(t) {
return r(e[i][1][t] || t);
}, u, u.exports, t, e, o, n);
}
return o[i].exports;
}
for (var c = "function" == typeof __require && __require, i = 0; i < n.length; i++) r(n[i]);
return r;
}({
BanderaFinal: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "cca31aiNz1BopYmnaf/ewGh", "BanderaFinal");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, n) {
var r, c = arguments.length, i = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (i = (c < 3 ? r(i) : c > 3 ? r(e, o, i) : r(e, o)) || i);
return c > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, s = i.ccclass, a = (i.property, function(t) {
r(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onLoad = function() {};
e.prototype.start = function() {};
return c([ s ], e);
}(cc.Component));
o.default = a;
cc._RF.pop();
}, {} ],
"Enemigo 1": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "107196LPPdDY6/02Ojeab1b", "Enemigo 1");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, n) {
var r, c = arguments.length, i = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (i = (c < 3 ? r(i) : c > 3 ? r(e, o, i) : r(e, o)) || i);
return c > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, s = i.ccclass, a = i.property, p = function(t) {
r(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.Personaje = null;
e.Inicio = 0;
e.Fin = 0;
e.Distancia = 0;
e.Direccion = null;
return e;
}
e.prototype.onLoad = function() {
this.Direccion = 1;
this.node.scaleX *= -1;
this.Inicio = this.node.getPosition().x;
this.Fin = this.Inicio + this.Distancia;
this.node.getComponent(cc.Animation).play();
};
e.prototype.start = function() {};
e.prototype.update = function() {
this.Personaje.getComponent("Player").Moviendo ? this.node.setPosition(this.node.getPosition().x + 1.5 * this.Direccion, this.node.getPosition().y) : this.node.setPosition(this.node.getPosition().x + this.Direccion / 3, this.node.getPosition().y);
if (this.node.getPosition().x >= this.Fin || this.node.getPosition().x <= this.Inicio) {
this.Direccion *= -1;
this.node.scaleX *= -1;
}
};
c([ a(cc.Node) ], e.prototype, "Personaje", void 0);
c([ a() ], e.prototype, "Distancia", void 0);
return c([ s ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {} ],
"Enemigo 2": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "25e4aK7xctKUK2I137FBxdS", "Enemigo 2");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, n) {
var r, c = arguments.length, i = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (i = (c < 3 ? r(i) : c > 3 ? r(e, o, i) : r(e, o)) || i);
return c > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, s = i.ccclass, a = i.property, p = function(t) {
r(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.Personaje = null;
e.Inicio = 0;
e.Fin = 0;
e.Distancia = 0;
e.Direccion = null;
return e;
}
e.prototype.onLoad = function() {
this.Direccion = 1;
this.node.scaleX *= -1;
this.node.getComponent(cc.Animation).play();
this.Inicio = this.node.getPosition().x;
this.Fin = this.Inicio + this.Distancia;
};
e.prototype.start = function() {};
e.prototype.update = function() {
this.Personaje.getComponent("Player").Moviendo ? this.node.setPosition(this.node.getPosition().x + 1.5 * this.Direccion, this.node.getPosition().y) : this.node.setPosition(this.node.getPosition().x + this.Direccion / 3, this.node.getPosition().y);
if (this.node.getPosition().x >= this.Fin || this.node.getPosition().x <= this.Inicio) {
this.Direccion *= -1;
this.node.scaleX *= -1;
}
};
c([ a(cc.Node) ], e.prototype, "Personaje", void 0);
c([ a() ], e.prototype, "Distancia", void 0);
return c([ s ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {} ],
"Enemigo 3": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "3f26cmCVeJLP5RJAJiDwJFL", "Enemigo 3");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, n) {
var r, c = arguments.length, i = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (i = (c < 3 ? r(i) : c > 3 ? r(e, o, i) : r(e, o)) || i);
return c > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, s = i.ccclass, a = (i.property, function(t) {
r(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onLoad = function() {
this.node.getComponent(cc.Animation).play();
};
e.prototype.start = function() {};
return c([ s ], e);
}(cc.Component));
o.default = a;
cc._RF.pop();
}, {} ],
FinalScore: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "5ba12dHszdK86jQTiQGH5UU", "FinalScore");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, n) {
var r, c = arguments.length, i = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (i = (c < 3 ? r(i) : c > 3 ? r(e, o, i) : r(e, o)) || i);
return c > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, s = i.ccclass, a = i.property, p = function(t) {
r(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.FileTXT = null;
e.score = null;
return e;
}
e.prototype.onLoad = function() {
this.FileTXT.url = cc.url.raw("assets/Puntaje.txt");
this.score.string = "Puntaje Final: " + this.FileTXT;
};
e.prototype.start = function() {};
c([ a(cc.TextAsset) ], e.prototype, "FileTXT", void 0);
c([ a(cc.Label) ], e.prototype, "score", void 0);
return c([ s ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {} ],
Game: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "bc23e7toXdEd4j2NTjUu3/W", "Game");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, n) {
var r, c = arguments.length, i = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (i = (c < 3 ? r(i) : c > 3 ? r(e, o, i) : r(e, o)) || i);
return c > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, s = i.ccclass, a = i.property, p = function(t) {
r(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.Personaje = null;
e.FileTXT = null;
e.score = null;
e.vida = null;
return e;
}
e.prototype.BajarPuntaje = function() {
this.playerScore -= 5;
this.playerScore < 0 && (this.playerScore = 0);
this.score.string = "Puntaje: " + this.playerScore.toString();
};
e.prototype.StringVidas = function() {
this.playervidas = this.Personaje.getComponent("Player").Vidas;
this.vida.string = "Vidas: " + this.playervidas.toString();
};
e.prototype.gainScoreMoneda = function() {
this.playerScore += 10;
this.score.string = "Puntaje: " + this.playerScore.toString();
};
e.prototype.GameOver = function() {
this.FileTXT.text = this.playerScore.toString();
this.Personaje.stopAllActions();
cc.director.loadScene("Game Over");
};
e.prototype.GameWin = function() {
this.FileTXT.text = this.playerScore.toString();
this.Personaje.stopAllActions();
cc.director.loadScene("Game Win");
};
e.prototype.onLoad = function() {
var t = cc.director.getPhysicsManager();
t.enabled = !0;
t.gravity = cc.v2(0, -2e3);
cc.director.getCollisionManager().enabled = !0;
this.playerScore = 0;
this.playervidas = 0;
};
e.prototype.start = function() {};
e.prototype.update = function() {};
c([ a(cc.Node) ], e.prototype, "Personaje", void 0);
c([ a(cc.TextAsset) ], e.prototype, "FileTXT", void 0);
c([ a(cc.Label) ], e.prototype, "score", void 0);
c([ a(cc.Label) ], e.prototype, "vida", void 0);
return c([ s ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {} ],
InstruccionesButton: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "c90e6LasaFA3qDLHzIRhwHb", "InstruccionesButton");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, n) {
var r, c = arguments.length, i = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (i = (c < 3 ? r(i) : c > 3 ? r(e, o, i) : r(e, o)) || i);
return c > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, s = i.ccclass, a = (i.property, function(t) {
r(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onLoad = function() {
cc.director.preloadScene("Instructions");
this.node.on("touchstart", function() {
cc.director.loadScene("Instructions");
});
};
e.prototype.start = function() {};
return c([ s ], e);
}(cc.Component));
o.default = a;
cc._RF.pop();
}, {} ],
MainCamera: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "28820lXMHxFv5588sZ+UpHR", "MainCamera");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, n) {
var r, c = arguments.length, i = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (i = (c < 3 ? r(i) : c > 3 ? r(e, o, i) : r(e, o)) || i);
return c > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, s = i.ccclass, a = i.property, p = function(t) {
r(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.PlayerNode = null;
return e;
}
e.prototype.start = function() {};
e.prototype.update = function() {
var t = this.PlayerNode.getPosition();
t.x = t.x + 200;
t.y = cc.misc.clampf(t.y, 0, 220);
var e = this.node.getPosition();
e.lerp(t, .1, e);
this.node.setPosition(e);
};
c([ a(cc.Node) ], e.prototype, "PlayerNode", void 0);
return c([ s ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {} ],
MenuButton: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "903f3yNsgNBKpwixo/NmGbM", "MenuButton");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, n) {
var r, c = arguments.length, i = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (i = (c < 3 ? r(i) : c > 3 ? r(e, o, i) : r(e, o)) || i);
return c > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, s = i.ccclass, a = (i.property, function(t) {
r(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onLoad = function() {
cc.director.preloadScene("Menu");
this.node.on("touchstart", function() {
cc.director.loadScene("Menu");
});
};
e.prototype.start = function() {};
return c([ s ], e);
}(cc.Component));
o.default = a;
cc._RF.pop();
}, {} ],
Moneda: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "2d58eg14EBMRYWLm4kIxOda", "Moneda");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, n) {
var r, c = arguments.length, i = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (i = (c < 3 ? r(i) : c > 3 ? r(e, o, i) : r(e, o)) || i);
return c > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, s = i.ccclass, a = (i.property, function(t) {
r(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onCollisionEnter = function(t) {
if (2 == t.tag) {
this.node.parent.parent.getComponent("Game").gainScoreMoneda();
this.node.destroy();
}
};
e.prototype.onLoad = function() {};
e.prototype.start = function() {};
e.prototype.onDestroy = function() {};
return c([ s ], e);
}(cc.Component));
o.default = a;
cc._RF.pop();
}, {} ],
"Plataforma Movil": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "2bf21Jo3OpCm6E812afIHtn", "Plataforma Movil");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, n) {
var r, c = arguments.length, i = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (i = (c < 3 ? r(i) : c > 3 ? r(e, o, i) : r(e, o)) || i);
return c > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, s = i.ccclass, a = i.property, p = function(t) {
r(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.Personaje = null;
e.Inicio = 0;
e.Fin = 0;
e.Distancia = 0;
e.Direccion = null;
return e;
}
e.prototype.onLoad = function() {
this.Direccion = 1;
this.Inicio = this.node.getPosition().x;
this.Fin = this.Inicio + this.Distancia;
};
e.prototype.start = function() {};
e.prototype.update = function() {
this.Personaje.getComponent("Player").Moviendo ? this.node.setPosition(this.node.getPosition().x + 1.5 * this.Direccion, this.node.getPosition().y) : this.node.setPosition(this.node.getPosition().x + this.Direccion / 3, this.node.getPosition().y);
(this.node.getPosition().x >= this.Fin || this.node.getPosition().x <= this.Inicio) && (this.Direccion *= -1);
};
c([ a(cc.Node) ], e.prototype, "Personaje", void 0);
c([ a() ], e.prototype, "Distancia", void 0);
return c([ s ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {} ],
PlayButton: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "80531QX0kZPH4U7cF4xheQO", "PlayButton");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, n) {
var r, c = arguments.length, i = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (i = (c < 3 ? r(i) : c > 3 ? r(e, o, i) : r(e, o)) || i);
return c > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, s = i.ccclass, a = (i.property, function(t) {
r(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onLoad = function() {
cc.director.preloadScene("Game");
this.node.on("touchstart", function() {
cc.director.loadScene("Game");
});
};
e.prototype.start = function() {};
return c([ s ], e);
}(cc.Component));
o.default = a;
cc._RF.pop();
}, {} ],
Player: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "e4c4139LCpItIGXqotU+dVe", "Player");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, n) {
var r, c = arguments.length, i = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (i = (c < 3 ? r(i) : c > 3 ? r(e, o, i) : r(e, o)) || i);
return c > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, s = i.ccclass, a = (i.property, function(t) {
r(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.MoverPlayer = function(t) {
switch (t.keyCode) {
case cc.macro.KEY.left:
this.Acelerar = -1;
this.Primero = !0;
this.node.scaleX = -1;
this.HacerAnimacion();
break;

case cc.macro.KEY.right:
this.Acelerar = 1;
this.Primero = !0;
this.node.scaleX = 1;
this.HacerAnimacion();
break;

case cc.macro.KEY.space:
this.Saltar = 1;
}
};
e.prototype.PararPlayer = function(t) {
switch (t.keyCode) {
case cc.macro.KEY.left:
case cc.macro.KEY.right:
this.Acelerar = 0;
this.node.getComponent(cc.Animation).stop();
this.Segundo = !0;
break;

case cc.macro.KEY.space:
this.Saltar = 0;
}
};
e.prototype.HacerAnimacion = function() {
if (1 == this.Primero && 1 == this.Segundo) {
this.node.getComponent(cc.Animation).play();
this.Segundo = !1;
}
};
e.prototype.onBeginContact = function(t, e, o) {
2 == e.tag && (this.TocandoSuelo = !0);
1 == o.tag && (this.Morir = !0);
};
e.prototype.onCollisionEnter = function(t) {
4 == t.tag && this.node.parent.getComponent("Game").GameWin();
};
e.prototype.onLoad = function() {
cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.MoverPlayer, this);
cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.PararPlayer, this);
this.Vidas = 3;
this.Saltar = 0;
this.Acelerar = 0;
this.MaxVelocidad = 250;
this.FuerzaSalto = 8e5;
this.FuerzaCaminar = 2e4;
this.TocandoSuelo = !1;
this.Moviendo = !1;
this.Morir = !1;
this.Primero = !1;
this.Segundo = !0;
this.Rigid_Body = this.node.getComponent(cc.RigidBody);
};
e.prototype.start = function() {};
e.prototype.update = function() {
(1 == this.Acelerar && this.Rigid_Body.linearVelocity.x < this.MaxVelocidad || -1 == this.Acelerar && this.Rigid_Body.linearVelocity.x > -this.MaxVelocidad) && this.Rigid_Body.applyForceToCenter(cc.v2(this.Acelerar * this.FuerzaCaminar, 0), !0);
if (this.TocandoSuelo && 1 == this.Saltar) {
this.Rigid_Body.applyForceToCenter(cc.v2(0, this.FuerzaSalto), !0);
this.TocandoSuelo = !1;
}
0 == this.TocandoSuelo || 0 != this.Acelerar ? this.Moviendo = !0 : this.Moviendo = !1;
if (this.Morir) {
this.node.setPosition(cc.v2(-3e3, -162));
this.Vidas -= 1;
this.Morir = !1;
this.node.parent.getComponent("Game").BajarPuntaje();
this.node.parent.getComponent("Game").StringVidas();
0 == this.Vidas && this.node.parent.getComponent("Game").GameOver();
}
};
return c([ s ], e);
}(cc.Component));
o.default = a;
cc._RF.pop();
}, {} ]
}, {}, [ "BanderaFinal", "Enemigo 1", "Enemigo 2", "Enemigo 3", "FinalScore", "Game", "InstruccionesButton", "MainCamera", "MenuButton", "Moneda", "Plataforma Movil", "PlayButton", "Player" ]);