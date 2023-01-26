"use strict";
cc._RF.push(module, '2bf21Jo3OpCm6E812afIHtn', 'Plataforma Movil');
// Scripts/Plataforma Movil.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Personaje = null;
        _this.Inicio = 0;
        _this.Fin = 0;
        _this.Distancia = 0;
        _this.Direccion = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        //this.node.parent.getComponent('Player').Acelerar;
        //this.Rigid_Body = this.node.getComponent(cc.RigidBody);
        this.Direccion = 1;
        this.Inicio = this.node.getPosition().x;
        this.Fin = this.Inicio + this.Distancia;
    };
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.update = function (dt) {
        // this.Mover  = this.Personaje.getComponent('Player').Moviendo;
        /*if(this.Mover == 1){

            this.node.setPosition(this.node.getPosition().x + 1, this.node.getPosition().y);
        }else if(this.Mover == -1){

            this.node.setPosition(this.node.getPosition().x - 1, this.node.getPosition().y);
        }*/
        if (this.Personaje.getComponent('Player').Moviendo) {
            this.node.setPosition(this.node.getPosition().x + (this.Direccion * 1.5), this.node.getPosition().y);
        }
        else {
            this.node.setPosition(this.node.getPosition().x + (this.Direccion / 3), this.node.getPosition().y);
        }
        if (this.node.getPosition().x >= this.Fin || this.node.getPosition().x <= this.Inicio) {
            this.Direccion *= -1;
            //this.node.scaleX *= -1;
        }
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "Personaje", void 0);
    __decorate([
        property()
    ], NewClass.prototype, "Distancia", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();