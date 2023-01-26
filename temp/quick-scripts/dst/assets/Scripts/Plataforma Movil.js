
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Plataforma Movil.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUGxhdGFmb3JtYSBNb3ZpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQTBEQztRQXZERyxlQUFTLEdBQVcsSUFBSSxDQUFDO1FBRXpCLFlBQU0sR0FBVSxDQUFDLENBQUM7UUFDbEIsU0FBRyxHQUFVLENBQUMsQ0FBQztRQUdmLGVBQVMsR0FBVSxDQUFDLENBQUM7UUFFckIsZUFBUyxHQUFVLElBQUksQ0FBQzs7SUErQzVCLENBQUM7SUE3Q0csd0JBQXdCO0lBRXhCLHlCQUFNLEdBQU47UUFFSSxtREFBbUQ7UUFDbkQseURBQXlEO1FBQ3pELElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBRW5CLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDNUMsQ0FBQztJQUVELHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQseUJBQU0sR0FBTixVQUFRLEVBQUU7UUFDUCxnRUFBZ0U7UUFFL0Q7Ozs7OztXQU1HO1FBSUgsSUFBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLEVBQUM7WUFFOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFFLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdkc7YUFBSTtZQUVELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2hHO1FBRUwsSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUM7WUFDakYsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNyQix5QkFBeUI7U0FDNUI7SUFJTCxDQUFDO0lBdEREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ087SUFNekI7UUFEQyxRQUFRLEVBQUU7K0NBQ1U7SUFUSixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBMEQ1QjtJQUFELGVBQUM7Q0ExREQsQUEwREMsQ0ExRHFDLEVBQUUsQ0FBQyxTQUFTLEdBMERqRDtrQkExRG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIFBlcnNvbmFqZTpjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBJbmljaW86bnVtYmVyID0gMDtcclxuICAgIEZpbjpudW1iZXIgPSAwO1xyXG5cclxuICAgIEBwcm9wZXJ0eSgpXHJcbiAgICBEaXN0YW5jaWE6bnVtYmVyID0gMDtcclxuXHJcbiAgICBEaXJlY2Npb246bnVtYmVyID0gbnVsbDtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG5cclxuICAgICAgICAvL3RoaXMubm9kZS5wYXJlbnQuZ2V0Q29tcG9uZW50KCdQbGF5ZXInKS5BY2VsZXJhcjtcclxuICAgICAgICAvL3RoaXMuUmlnaWRfQm9keSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICB0aGlzLkRpcmVjY2lvbiA9IDE7XHJcblxyXG4gICAgICAgIHRoaXMuSW5pY2lvID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCkueDtcclxuICAgICAgICB0aGlzLkZpbiA9IHRoaXMuSW5pY2lvICsgdGhpcy5EaXN0YW5jaWE7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAvLyB0aGlzLk1vdmVyICA9IHRoaXMuUGVyc29uYWplLmdldENvbXBvbmVudCgnUGxheWVyJykuTW92aWVuZG87XHJcblxyXG4gICAgICAgIC8qaWYodGhpcy5Nb3ZlciA9PSAxKXtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKS54ICsgMSwgdGhpcy5ub2RlLmdldFBvc2l0aW9uKCkueSk7XHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5Nb3ZlciA9PSAtMSl7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24odGhpcy5ub2RlLmdldFBvc2l0aW9uKCkueCAtIDEsIHRoaXMubm9kZS5nZXRQb3NpdGlvbigpLnkpO1xyXG4gICAgICAgIH0qL1xyXG5cclxuXHJcblxyXG4gICAgICAgIGlmKHRoaXMuUGVyc29uYWplLmdldENvbXBvbmVudCgnUGxheWVyJykuTW92aWVuZG8pe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMubm9kZS5nZXRQb3NpdGlvbigpLnggKyAodGhpcy5EaXJlY2Npb24qIDEuNSksIHRoaXMubm9kZS5nZXRQb3NpdGlvbigpLnkpO1xyXG4gICAgICAgIH1lbHNle1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMubm9kZS5nZXRQb3NpdGlvbigpLnggKyAodGhpcy5EaXJlY2Npb24vMyksIHRoaXMubm9kZS5nZXRQb3NpdGlvbigpLnkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMubm9kZS5nZXRQb3NpdGlvbigpLnggPj0gdGhpcy5GaW4gfHwgdGhpcy5ub2RlLmdldFBvc2l0aW9uKCkueCA8PSB0aGlzLkluaWNpbyl7XHJcbiAgICAgICAgICAgIHRoaXMuRGlyZWNjaW9uICo9IC0xO1xyXG4gICAgICAgICAgICAvL3RoaXMubm9kZS5zY2FsZVggKj0gLTE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuXHJcbiAgICB9XHJcbn1cclxuIl19