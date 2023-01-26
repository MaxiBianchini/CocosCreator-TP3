// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    Personaje:cc.Node = null;

    Inicio:number = 0;
    Fin:number = 0;

    @property()
    Distancia:number = 0;

    Direccion:number = null;
  
    Rigid_Body:cc.RigidBody;


    // LIFE-CYCLE CALLBACKS:

    onLoad () {

        this.Direccion = 1;
        this.node.scaleX *= -1;

        this.Inicio = this.node.getPosition().x;
        this.Fin = this.Inicio + this.Distancia;
        
        this.node.getComponent(cc.Animation).play();
    }

    start () {

    }

    update (dt) {
        

        if(this.Personaje.getComponent('Player').Moviendo){
        
            this.node.setPosition(this.node.getPosition().x + (this.Direccion* 1.5), this.node.getPosition().y);
        }else{

        this.node.setPosition(this.node.getPosition().x + (this.Direccion/3), this.node.getPosition().y);
        }

        if(this.node.getPosition().x >= this.Fin || this.node.getPosition().x <= this.Inicio){
            this.Direccion *= -1;
            this.node.scaleX *= -1;
        }

        

    }
}
