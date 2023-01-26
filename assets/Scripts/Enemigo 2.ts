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

    //@property()
    Inicio:number = 0;
    Fin:number = 0;

    @property()
    Distancia:number = 0;

    //Inicio:number;
    Direccion:number = null;
    //this.Direccion = 1;

    //Rigid_Body:cc.RigidBody;

    //FuerzaCaminar:number; 
    //MaxVelocidad:number;



    /*onBeginContact(contact, selfCollider, otherCollider){

        if(otherCollider.tag == 1 /*||  otherCollider == 2*//*){
          /*  this.Direccion *= -1;
        }

        if(otherCollider.tag == 3/* || selfCollider.tag == 0*//*){
            //this.Morir = true;
        /*} */
   /* }*/




    // LIFE-CYCLE CALLBACKS:

    onLoad () {

        this.Direccion = 1;
        this.node.scaleX *= -1;

        this.node.getComponent(cc.Animation).play();

        this.Inicio = this.node.getPosition().x;
        this.Fin = this.Inicio + this.Distancia;
    }


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
    start () {

    }
    
    update (dt) {

        /*if(this.node.getPosition().x == this.Fin){
            this.Direccion = -1;
            //this.node.setPosition(this.node.getPosition().x + 1, this.node.getPosition().y);
        }
        else if(this.node.getPosition().x == this.Inicio){
            this.Direccion = 1;
        }*/



        







        if(this.Personaje.getComponent('Player').Moviendo){
            
            this.node.setPosition(this.node.getPosition().x + (this.Direccion* 1.5), this.node.getPosition().y);
        }else{

            this.node.setPosition(this.node.getPosition().x + (this.Direccion/3), this.node.getPosition().y);
            }


        if(this.node.getPosition().x >= this.Fin || this.node.getPosition().x <= this.Inicio){
            this.Direccion *= -1;
            this.node.scaleX *= -1;
        }

        

        /*if(this.Direccion == 1){
            this.node.scaleX = -1;
        }/*else{

        }


        //if(this.Personaje.getComponent('Player').Moviendo ) this.node.setPosition(this.node.getPosition().x + this.Direccion , this.node.getPosition().y);*/

    }
}
