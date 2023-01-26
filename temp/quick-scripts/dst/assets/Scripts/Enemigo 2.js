
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Enemigo 2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcRW5lbWlnbyAyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBc0hDO1FBbkhHLGVBQVMsR0FBVyxJQUFJLENBQUM7UUFFekIsYUFBYTtRQUNiLFlBQU0sR0FBVSxDQUFDLENBQUM7UUFDbEIsU0FBRyxHQUFVLENBQUMsQ0FBQztRQUdmLGVBQVMsR0FBVSxDQUFDLENBQUM7UUFFckIsZ0JBQWdCO1FBQ2hCLGVBQVMsR0FBVSxJQUFJLENBQUM7O0lBeUc1QixDQUFDO0lBeEdHLHFCQUFxQjtJQUVyQiwwQkFBMEI7SUFFMUIsd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUl0Qjs7NERBRXdELENBQUE7Ozs7MERBSUUsQ0FBQTs7VUFFaEQ7SUFDWCxNQUFNO0lBS0wsd0JBQXdCO0lBRXhCLHlCQUFNLEdBQU47UUFFSSxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQztRQUV2QixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFNUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUM1QyxDQUFDO0lBR087MkNBQ3VDO0lBSzNDOzs7Ozs7Ozs7O0VBVU47SUFDRSx3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELHlCQUFNLEdBQU4sVUFBUSxFQUFFO1FBRU47Ozs7OztXQU1HO1FBWUgsSUFBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLEVBQUM7WUFFOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFFLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdkc7YUFBSTtZQUVELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2hHO1FBR0wsSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUM7WUFDakYsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQztTQUMxQjtRQUlEOzs7Ozs7OzhKQU9zSjtJQUUxSixDQUFDO0lBbEhEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ087SUFPekI7UUFEQyxRQUFRLEVBQUU7K0NBQ1U7SUFWSixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBc0g1QjtJQUFELGVBQUM7Q0F0SEQsQUFzSEMsQ0F0SHFDLEVBQUUsQ0FBQyxTQUFTLEdBc0hqRDtrQkF0SG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIFBlcnNvbmFqZTpjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICAvL0Bwcm9wZXJ0eSgpXHJcbiAgICBJbmljaW86bnVtYmVyID0gMDtcclxuICAgIEZpbjpudW1iZXIgPSAwO1xyXG5cclxuICAgIEBwcm9wZXJ0eSgpXHJcbiAgICBEaXN0YW5jaWE6bnVtYmVyID0gMDtcclxuXHJcbiAgICAvL0luaWNpbzpudW1iZXI7XHJcbiAgICBEaXJlY2Npb246bnVtYmVyID0gbnVsbDtcclxuICAgIC8vdGhpcy5EaXJlY2Npb24gPSAxO1xyXG5cclxuICAgIC8vUmlnaWRfQm9keTpjYy5SaWdpZEJvZHk7XHJcblxyXG4gICAgLy9GdWVyemFDYW1pbmFyOm51bWJlcjsgXHJcbiAgICAvL01heFZlbG9jaWRhZDpudW1iZXI7XHJcblxyXG5cclxuXHJcbiAgICAvKm9uQmVnaW5Db250YWN0KGNvbnRhY3QsIHNlbGZDb2xsaWRlciwgb3RoZXJDb2xsaWRlcil7XHJcblxyXG4gICAgICAgIGlmKG90aGVyQ29sbGlkZXIudGFnID09IDEgLyp8fCAgb3RoZXJDb2xsaWRlciA9PSAyKi8vKil7XHJcbiAgICAgICAgICAvKiAgdGhpcy5EaXJlY2Npb24gKj0gLTE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihvdGhlckNvbGxpZGVyLnRhZyA9PSAzLyogfHwgc2VsZkNvbGxpZGVyLnRhZyA9PSAwKi8vKil7XHJcbiAgICAgICAgICAgIC8vdGhpcy5Nb3JpciA9IHRydWU7XHJcbiAgICAgICAgLyp9ICovXHJcbiAgIC8qIH0qL1xyXG5cclxuXHJcblxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuRGlyZWNjaW9uID0gMTtcclxuICAgICAgICB0aGlzLm5vZGUuc2NhbGVYICo9IC0xO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG5cclxuICAgICAgICB0aGlzLkluaWNpbyA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpLng7XHJcbiAgICAgICAgdGhpcy5GaW4gPSB0aGlzLkluaWNpbyArIHRoaXMuRGlzdGFuY2lhO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIC8qdGhpcy5GaW4gPSB0aGlzLmdldENvbXBvbmVudEluQ2hpbGRyZW4oJ0Rlc3Rpbm8nKS5nZXRQb3NpdGlvbigpLng7ICAgIC8vLy9jaGlsZHJlbi5HZXRQb3NpdGlvbigpLng7XHJcbiAgICAgICAgICAgIHRoaXMuRmluID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCkueDsqL1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAvKmlmKHRoaXMuRmluID4gdGhpcy5JbmljaW8pe1xyXG4gICAgICAgICAgICB0aGlzLkRpcmVjY2lvbiA9IC0xO1xyXG4gICAgICAgIH1lbHNlIHRoaXMuRGlyZWNjaW9uID0gMTtcclxuXHJcbiAgICAgICAgLy90aGlzLkRpcmVjY2lvbiA9IDE7XHJcblxyXG4gICAgICAgLy8gdGhpcy5SaWdpZF9Cb2R5ID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIC8vdGhpcy5GdWVyemFDYW1pbmFyID0gMTUwMDsgXHJcbiAgICAgICAvLyB0aGlzLk1heFZlbG9jaWRhZCA9IDEwMDtcclxuICAgIH1cclxuKi9cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuXHJcbiAgICAgICAgLyppZih0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKS54ID09IHRoaXMuRmluKXtcclxuICAgICAgICAgICAgdGhpcy5EaXJlY2Npb24gPSAtMTtcclxuICAgICAgICAgICAgLy90aGlzLm5vZGUuc2V0UG9zaXRpb24odGhpcy5ub2RlLmdldFBvc2l0aW9uKCkueCArIDEsIHRoaXMubm9kZS5nZXRQb3NpdGlvbigpLnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKHRoaXMubm9kZS5nZXRQb3NpdGlvbigpLnggPT0gdGhpcy5JbmljaW8pe1xyXG4gICAgICAgICAgICB0aGlzLkRpcmVjY2lvbiA9IDE7XHJcbiAgICAgICAgfSovXHJcblxyXG5cclxuXHJcbiAgICAgICAgXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIGlmKHRoaXMuUGVyc29uYWplLmdldENvbXBvbmVudCgnUGxheWVyJykuTW92aWVuZG8pe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMubm9kZS5nZXRQb3NpdGlvbigpLnggKyAodGhpcy5EaXJlY2Npb24qIDEuNSksIHRoaXMubm9kZS5nZXRQb3NpdGlvbigpLnkpO1xyXG4gICAgICAgIH1lbHNle1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMubm9kZS5nZXRQb3NpdGlvbigpLnggKyAodGhpcy5EaXJlY2Npb24vMyksIHRoaXMubm9kZS5nZXRQb3NpdGlvbigpLnkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBpZih0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKS54ID49IHRoaXMuRmluIHx8IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpLnggPD0gdGhpcy5JbmljaW8pe1xyXG4gICAgICAgICAgICB0aGlzLkRpcmVjY2lvbiAqPSAtMTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCAqPSAtMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICAvKmlmKHRoaXMuRGlyZWNjaW9uID09IDEpe1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gLTE7XHJcbiAgICAgICAgfS8qZWxzZXtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy9pZih0aGlzLlBlcnNvbmFqZS5nZXRDb21wb25lbnQoJ1BsYXllcicpLk1vdmllbmRvICkgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMubm9kZS5nZXRQb3NpdGlvbigpLnggKyB0aGlzLkRpcmVjY2lvbiAsIHRoaXMubm9kZS5nZXRQb3NpdGlvbigpLnkpOyovXHJcblxyXG4gICAgfVxyXG59XHJcbiJdfQ==