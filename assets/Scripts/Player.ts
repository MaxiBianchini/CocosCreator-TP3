// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    Vidas:number;

    Saltar:number;
    Acelerar:number;
    
    FuerzaSalto:number;
    MaxVelocidad:number;  
    FuerzaCaminar:number; 

    TocandoSuelo:boolean;
    Moviendo:boolean;
    Morir:boolean;

    Primero:boolean;
    Segundo:boolean;

    Rigid_Body:cc.RigidBody;

    MoverPlayer(event){
        switch(event.keyCode){
            case cc.macro.KEY.left:
                this.Acelerar = -1;
                this.Primero = true;
                this.node.scaleX = -1;
                this.HacerAnimacion();
                break;
            case cc.macro.KEY.right:
                this.Acelerar = 1;
                this.Primero = true;
                this.node.scaleX = 1;
                this.HacerAnimacion();
                break;
            case cc.macro.KEY.space:
                this.Saltar = 1;
                break;
        }
    }

    PararPlayer(event){
        switch(event.keyCode){
            case cc.macro.KEY.left:
                this.Acelerar = 0;
                this.node.getComponent(cc.Animation).stop();
                this.Segundo = true;
                break;
            case cc.macro.KEY.right:
                this.Acelerar = 0;
                this.node.getComponent(cc.Animation).stop();
                this.Segundo = true;
                break;
            case cc.macro.KEY.space:
                this.Saltar = 0;
                break;
        }
    }


    HacerAnimacion(){

        if(this.Primero == true && this.Segundo == true){
            this.node.getComponent(cc.Animation).play();
            this.Segundo = false;
        }

       


    }

    onBeginContact(contact, selfCollider, otherCollider){

        if(selfCollider.tag == 2){
            this.TocandoSuelo = true;
        }

        if(otherCollider.tag == 1){
            this.Morir = true;
        } 

        /*if(otherCollider.tag == 4){
            //this.Morir = true;
            this.node.parent.getComponent('Game').GameWin();
        }*/
    }

    onCollisionEnter(otherCollider,selfCollider){

        //this.node.parent.getComponent('Game').GameWin();
        //this.Morir = true;
        if(otherCollider.tag == 4){
            //this.Morir = true;
            this.node.parent.getComponent('Game').GameWin();
        }
    }

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.MoverPlayer,this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.PararPlayer,this);

        this.Vidas = 3;

        this.Saltar = 0;
        this.Acelerar = 0;
    
        this.MaxVelocidad = 250; 
        this.FuerzaSalto = 800000;
        this.FuerzaCaminar = 20000; 
    
        this.TocandoSuelo = false;
        this.Moviendo = false;
        this.Morir = false;

        this.Primero = false;
        this.Segundo = true;

        this.Rigid_Body = this.node.getComponent(cc.RigidBody);
    }

    start () {}

    update (dt) {


        

        if((this.Acelerar == 1 && this.Rigid_Body.linearVelocity.x < this.MaxVelocidad) || (this.Acelerar == -1 && this.Rigid_Body.linearVelocity.x > (-this.MaxVelocidad))){
            this.Rigid_Body.applyForceToCenter( cc.v2(this.Acelerar * this.FuerzaCaminar,0), true);


            
        }



       /* if(this.Acelerar != 0){
            this.node.getComponent(cc.Animation).play();
        }else{
            this.node.getComponent(cc.Animation).stop();
        }
*/


        if(this.TocandoSuelo && this.Saltar == 1){
            this.Rigid_Body.applyForceToCenter( cc.v2(0,this.FuerzaSalto) , true );
            this.TocandoSuelo = false;
        }



 
        if(this.TocandoSuelo == false || this.Acelerar != 0){
            this.Moviendo = true;
        }
        else {this.Moviendo = false;}

        if(this.Morir){

            this.node.setPosition(cc.v2 (-3000,-162));
            this.Vidas -= 1;
            this.Morir = false;
            this.node.parent.getComponent('Game').BajarPuntaje();
            this.node.parent.getComponent('Game').StringVidas();

            if(this.Vidas == 0){
                this.node.parent.getComponent('Game').GameOver();
            }
        }
    }
}
