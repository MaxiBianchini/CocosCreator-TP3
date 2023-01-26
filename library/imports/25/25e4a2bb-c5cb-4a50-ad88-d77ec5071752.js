"use strict";
cc._RF.push(module, '25e4aK7xctKUK2I137FBxdS', 'Enemigo 2');
// Scripts/Enemigo 2.ts

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
        //@property()
        _this.Inicio = 0;
        _this.Fin = 0;
        _this.Distancia = 0;
        //Inicio:number;
        _this.Direccion = null;
        return _this;
    }
    //this.Direccion = 1;
    //Rigid_Body:cc.RigidBody;
    //FuerzaCaminar:number; 
    //MaxVelocidad:number;
    /*onBeginContact(contact, selfCollider, otherCollider){

        if(otherCollider.tag == 1 /*||  otherCollider == 2*/ /*){
      /*  this.Direccion *= -1;
    }

    if(otherCollider.tag == 3/* || selfCollider.tag == 0*/ /*){
        //this.Morir = true;
    /*} */
    /* }*/
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        this.Direccion = 1;
        this.node.scaleX *= -1;
        this.node.getComponent(cc.Animation).play();
        this.Inicio = this.node.getPosition().x;
        this.Fin = this.Inicio + this.Distancia;
    };
    /*this.Fin = this.getComponentInChildren('Destino').getPosition().x;    ////children.GetPosition().x;
    this.Fin = this.node.getPosition().x;*/
    /*if(this.Fin > this.Inicio){
        this.Direccion = -1;
    }else this.Direccion = 1;

    //this.Direccion = 1;

   // this.Rigid_Body = this.node.getComponent(cc.RigidBody);
    //this.FuerzaCaminar = 1500;
   // this.MaxVelocidad = 100;
}
*/
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.update = function (dt) {
        /*if(this.node.getPosition().x == this.Fin){
            this.Direccion = -1;
            //this.node.setPosition(this.node.getPosition().x + 1, this.node.getPosition().y);
        }
        else if(this.node.getPosition().x == this.Inicio){
            this.Direccion = 1;
        }*/
        if (this.Personaje.getComponent('Player').Moviendo) {
            this.node.setPosition(this.node.getPosition().x + (this.Direccion * 1.5), this.node.getPosition().y);
        }
        else {
            this.node.setPosition(this.node.getPosition().x + (this.Direccion / 3), this.node.getPosition().y);
        }
        if (this.node.getPosition().x >= this.Fin || this.node.getPosition().x <= this.Inicio) {
            this.Direccion *= -1;
            this.node.scaleX *= -1;
        }
        /*if(this.Direccion == 1){
            this.node.scaleX = -1;
        }/*else{

        }


        //if(this.Personaje.getComponent('Player').Moviendo ) this.node.setPosition(this.node.getPosition().x + this.Direccion , this.node.getPosition().y);*/
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