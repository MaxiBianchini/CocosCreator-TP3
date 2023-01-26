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

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

        //this.node.parent.getComponent('Player').Acelerar;
        //this.Rigid_Body = this.node.getComponent(cc.RigidBody);
        this.Direccion = 1;

        this.Inicio = this.node.getPosition().x;
        this.Fin = this.Inicio + this.Distancia;
    }

    start () {

    }

    update (dt) {
       // this.Mover  = this.Personaje.getComponent('Player').Moviendo;

        /*if(this.Mover == 1){

            this.node.setPosition(this.node.getPosition().x + 1, this.node.getPosition().y);
        }else if(this.Mover == -1){

            this.node.setPosition(this.node.getPosition().x - 1, this.node.getPosition().y);
        }*/



        if(this.Personaje.getComponent('Player').Moviendo){
            
            this.node.setPosition(this.node.getPosition().x + (this.Direccion* 1.5), this.node.getPosition().y);
        }else{

            this.node.setPosition(this.node.getPosition().x + (this.Direccion/3), this.node.getPosition().y);
            }

        if(this.node.getPosition().x >= this.Fin || this.node.getPosition().x <= this.Inicio){
            this.Direccion *= -1;
            //this.node.scaleX *= -1;
        }

        

    }
}
