
// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class Player extends cc.Component {

    // 移动速度
    @property
    moveSpeed: number = 100;

    x_Speed:number=0;
    y_Speed:number=0;

    // @property(cc.Node)
    // player: cc.Node = null;

    @property(cc.Camera)
    camera: cc.Camera = null;

    rigidBody: cc.RigidBody = null;
    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        var manager = cc.director.getPhysicsManager();
        manager.enabled = true;
        //this.camera.x+=this.player.x;
        // this.camera.runAction();
        // this.node.on(cc.Node.EventType.MOUSE_DOWN, this.onKeyDown, this)
        // this.node.on(cc.Node.EventType.MOUSE_DOWN, this.onKeyDown, this)
        this.rigidBody = this.getComponent(cc.RigidBody);
        // cc.log(this.rigidBody);
        //this.rigidBody= this.getComponent(cc.RigidBody);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }

    // onKeyDown(event) {
    //     // set a flag when key pressed
    //     switch (event.keyCode) {
    //         case cc.macro.KEY.a:
    //             this.x_Speed = -this.moveSpeed;
    //             cc.log("A");
    //             break;
    //         case cc.macro.KEY.d:
    //             this.x_Speed = this.moveSpeed;
    //             cc.log("d");
    //             break;
    //         case cc.macro.KEY.w:
    //             this.y_Speed = this.moveSpeed;
    //             cc.log("w");
    //             break;
    //         case cc.macro.KEY.s:
    //             this.y_Speed = -this.moveSpeed;
    //             cc.log("s");
    //             break;
    //     }
    // }

    // onKeyUp(event) {
    //     // unset a flag when key released
    //     switch (event.keyCode) {
    //         case cc.macro.KEY.a:
    //         this.x_Speed = 0;
    //         break;
    //     case cc.macro.KEY.d:
    //         this.x_Speed = 0;
    //         break;
    //     case cc.macro.KEY.w:
    //         this.y_Speed = 0;
    //         break;
    //     case cc.macro.KEY.s:
    //         this.y_Speed = 0;
    //         break;
    //     }
    // }

    onKeyDown(event) {
        // set a flag when key pressed
        var oldVeloctin = this.rigidBody.linearVelocity;
        cc.log(oldVeloctin);
        //var v2=cc.v2(0,0)
        switch (event.keyCode) {
            case cc.macro.KEY.a:
                this.x_Speed = -this.moveSpeed;
                this.rigidBody.linearVelocity = cc.v2(-this.moveSpeed, oldVeloctin.y);
                // cc.log("A");
                break;
            case cc.macro.KEY.d:
                this.x_Speed = this.moveSpeed;
                this.rigidBody.linearVelocity = cc.v2(this.moveSpeed, oldVeloctin.y);
                // cc.log("d");
                break;
            case cc.macro.KEY.w:
                this.y_Speed = this.moveSpeed;
                this.rigidBody.linearVelocity = cc.v2(oldVeloctin.x, this.moveSpeed);
                // cc.log("w");
                break;
            case cc.macro.KEY.s:
                this.y_Speed = -this.moveSpeed;
                this.rigidBody.linearVelocity = cc.v2(oldVeloctin.x, -this.moveSpeed);
                // cc.log("s");
                break;
        }
    }

    onKeyUp(event) {
        // unset a flag when key released
        var oldVeloctin = this.rigidBody.linearVelocity;
        switch (event.keyCode) {
            case cc.macro.KEY.a:
            case cc.macro.KEY.d:
                 this.x_Speed = 0;
                this.rigidBody.linearVelocity = cc.v2(0, oldVeloctin.y);
                break;
            case cc.macro.KEY.w:
            case cc.macro.KEY.s:
                this.rigidBody.linearVelocity = cc.v2(oldVeloctin.x, 0);
                break;
        }
    }
    start() {
      
        // manager.debugDrawFlags = cc.PhysicsManager.DrawBits.e_jointBit |
        // cc.PhysicsManager.DrawBits.e_aabbBit |
        // cc.PhysicsManager.DrawBits.e_centerOfMassBit |
        // cc.PhysicsManager.DrawBits.e_jointBit |
        // cc.PhysicsManager.DrawBits.e_shapeBit;

        // var position = this.node.getPosition();
        // var cameraPosition = cc.v2(0, 0);

        // var playerWoldPosision= this.node.convertToWorldSpaceAR(cc.v2(0,0));
        // var cameraNodePosision=this.camera.node.getParent().convertToNodeSpaceAR(playerWoldPosision);
        // // var cameraPosition=  this.camera.getCameraToWorldPoint(position);
        // // var WposAR= this.player.convertToNodeSpaceAR(cc.p(0,0));
        // // var NposAR = this.node.convertToNodeSpaceAR(WposAR);

        // //this.camera.node.setPosition(NposAR)
        // this.camera.node.x += cameraNodePosision.x;
        // this.camera.node.y += cameraNodePosision.y;


        var forword=cc.rotateBy(0.5,270)
        var back=cc.rotateBy(0.5,-270)
        var acttio=cc.repeatForever(cc.sequence(forword,back));
        // var action= this.player_shoe.rn(cc.rotateTo(1.5,180))
        var player_shoe=  this.node.getChildByName("shoe_0");
        player_shoe.runAction(acttio);
    }

    update(dt) {
        //    this.player.x+=this.x_Speed;
        //    this.player.y+=this.y_Speed;
        //    this.camera.node.x+=this.x_Speed*dt;
        //    this.camera.node.y+=this.y_Speed*dt;
    }


}
