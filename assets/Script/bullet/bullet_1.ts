// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class Bullet_1 extends cc.Component {


    life_time=3//秒
    is_time=false;
    onLoad () {

       
      
     
       //var manger= cc.director.getPhysicsManager();
       //manger.
        // cc.director.getPhysicsManager().debugDrawFlags = cc.PhysicsManager.DrawBits.e_aabbBit |
        // cc.PhysicsManager.DrawBits.e_pairBit |
        // cc.PhysicsManager.DrawBits.e_centerOfMassBit |
        // cc.PhysicsManager.DrawBits.e_jointBit |
        // cc.PhysicsManager.DrawBits.e_shapeBit
        // ;

    }

    start () {

        setTimeout(function() { 
            this.is_time=true; 
        }.bind(this), 2000);
        
        //var currentPosition=this.node.convertToWorldSpaceAR(cc.v2(0,0));
        //var currentPosition=this.node.getPosition();
        //var angle=this.node.rotation;
        //console.info(angle);
        // var angle=Math.atan2(-1*currentPosition.y,currentPosition.x);
        // var new_x=currentPosition.x+200*Math.cos(angle);
        // var new_y=currentPosition.y+200*Math.sin(angle);
        // var new_x=currentPosition.x+200;
        // var move_action=cc.moveBy(1,cc.v2(new_x,currentPosition.y));
        // this.node.runAction(move_action);
        //this.node.getComponent(cc.RigidBody)
        var v1= this.node.convertToWorldSpaceAR(cc.v2(300,0));
        var v2=this.node.convertToWorldSpaceAR(cc.v2(0,0));
        var v=v1.sub(v2);
        console.info(v1,v2);
        var rigidBody=  this.node.getComponent(cc.RigidBody);
        rigidBody.linearVelocity=v;
    }

    
    update (dt) {
        console.info(this.is_time);
        if(this.is_time){
         
            this.node.destroy();
        }
        //this.node.position.x+=200/1*dt
        // if(true){
        //     this.node.position.x=200/1*dt
        // }

    }

    // 只在两个碰撞体开始接触时被调用一次
    onBeginContact (contact, selfCollider, otherCollider) {
        console.info("发射碰撞:"+otherCollider.node.name)
    }

    // 只在两个碰撞体结束接触时被调用一次
    onEndContact (contact, selfCollider, otherCollider) {
        console.info("发射碰撞:"+otherCollider.node.name)
    }

    // 每次将要处理碰撞体接触逻辑时被调用
    onPreSolve (contact, selfCollider, otherCollider) {
        console.info("发射碰撞:"+otherCollider.node.name)
    }

    // 每次处理完碰撞体接触逻辑时被调用
    onPostSolve (contact, selfCollider, otherCollider) {
        console.info("发射碰撞:"+otherCollider.node.name)
    }
}
