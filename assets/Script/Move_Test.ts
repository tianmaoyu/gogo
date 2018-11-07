

// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

import PrefabWeapon from '../Script/player_1/prefab_weapon';

const { ccclass, property } = cc._decorator;

@ccclass
export default class Player extends cc.Component {

    // 移动速度
    @property
    moveSpeed: number = 0;

    x_Speed: number = 0;
    y_Speed: number = 0;

    // @property(cc.Node)
    // player: cc.Node = null;

    // @property(cc.Camera)
    // camera: cc.Camera = null;
    rigidBody: cc.RigidBody = null;

    // LIFE-CYCLE CALLBACKS:

    player_shoe: cc.Node = null;


    //武器
    weaponList: cc.Node[] = [];

    //背包
    packges: cc.Node[] = [];


    currentWeapon: cc.Node = null;

    prefabWeapon:PrefabWeapon=null;

    onLoad() {


        this.prefabWeapon=  this.getComponent<PrefabWeapon>(PrefabWeapon);

        //this.player_shoe=  this.node.getChildByName("shoe_0");
        //  var shoe_sprite= this.player_shoe.addComponent(cc.Sprite);
        //  shoe_sprite.spriteFrame.se
        //this.camera.x+=this.player.x;
        // this.camera.runAction();
        // this.node.on(cc.Node.EventType.MOUSE_DOWN, this.onKeyDown, this)
        // this.node.on(cc.Node.EventType.MOUSE_DOWN, this.onKeyDown, this)
        this.rigidBody = this.getComponent(cc.RigidBody);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }

    onKeyDown(event) {
        // set a flag when key pressed
        var oldVeloctin = this.rigidBody.linearVelocity;

        //var v2=cc.v2(0,0)
        switch (event.keyCode) {
            case cc.macro.KEY.a:
                //this.x_Speed = -this.moveSpeed;
                this.rigidBody.linearVelocity = cc.v2(-this.moveSpeed, oldVeloctin.y);
                cc.log("A");
                break;
            case cc.macro.KEY.d:
                //this.x_Speed = this.moveSpeed;
                this.rigidBody.linearVelocity = cc.v2(this.moveSpeed, oldVeloctin.y);
                cc.log("d");
                break;
            case cc.macro.KEY.w:
                //this.y_Speed = this.moveSpeed;
                this.rigidBody.linearVelocity = cc.v2(oldVeloctin.x, this.moveSpeed);
                cc.log("w");
                break;
            case cc.macro.KEY.s:
                //this.y_Speed = -this.moveSpeed;
                this.rigidBody.linearVelocity = cc.v2(oldVeloctin.x, -this.moveSpeed);
                cc.log("s");
                break;
        }
    }

    onKeyUp(event) {
        // unset a flag when key released
        var oldVeloctin = this.rigidBody.linearVelocity;
        switch (event.keyCode) {
            case cc.macro.KEY.a:
                this.x_Speed = 0;
                this.rigidBody.linearVelocity = cc.v2(0, oldVeloctin.y);
                break;
            case cc.macro.KEY.d:
                this.x_Speed = 0;
                this.rigidBody.linearVelocity = cc.v2(0, oldVeloctin.y);
                break;
            case cc.macro.KEY.w:
                this.y_Speed = 0;
                this.rigidBody.linearVelocity = cc.v2(oldVeloctin.x, 0);
                break;
            case cc.macro.KEY.s:
                this.y_Speed = 0;
                this.rigidBody.linearVelocity = cc.v2(oldVeloctin.x, 0);
                break;
        }
    }
    start() {
        var manager = cc.director.getPhysicsManager();
        manager.enabled = true;
        // manager.debugDrawFlags = cc.PhysicsManager.DrawBits.e_jointBit |
        // cc.PhysicsManager.DrawBits.e_aabbBit |
        // cc.PhysicsManager.DrawBits.e_centerOfMassBit |
        // cc.PhysicsManager.DrawBits.e_jointBit |
        // cc.PhysicsManager.DrawBits.e_shapeBit;

        var collisionManager = cc.director.getCollisionManager();
        collisionManager.enabled=true;
        collisionManager.enabledDrawBoundingBox=true;
        collisionManager.enabledDebugDraw=true;
        //     var position= this.player.getPosition();
        //     var cameraPosition=cc.v2(0,0);
        //     // var cameraPosition=  this.camera.getCameraToWorldPoint(position);
        //     // var WposAR= this.player.convertToNodeSpaceAR(cc.p(0,0));
        //     // var NposAR = this.node.convertToNodeSpaceAR(WposAR);

        //     // this.camera.node.setPosition(NposAR)
        //    this.camera.node.x+=position.x;
        //    this.camera.node.y+=position.y;



        //this.gogo();
    }

    time: number = 0;
    update(dt) {

        //    var boundingBox=this.player.getBoundingBox();
        //    //var boundingBoxClone=boundingBox.clone();

        //    var rect = cc.rect(boundingBox.xMin + this.x_Speed*dt*1.5,
        //     boundingBox.yMin + this.y_Speed*dt*1.7, 
        //     boundingBox.size.width, 
        //     boundingBox.size.height);

        //     this.time+=dt;




        //var origalVelocity= this.rigidBody.linearVelocity;
        // this.rigidBody.linearVelocity.x+=this.x_Speed*dt;
        // this.rigidBody.linearVelocity.y+=this.y_Speed*dt;

        // this.rigidBody.linearVelocity=cc.v2()
        if (this.time > 2) {
            cc.log(this.rigidBody.linearVelocity);
            // this.time=0;
            // this.player_shoe.rotation=-90;
        }
        //this.player_shoe.rotation+=2;
        //this.player_shoe.rotation=0;
        //    this.player.x+=this.x_Speed*dt;
        //    this.player.y+=this.y_Speed*dt;
        //       this.camera.node.x+=this.x_Speed;
        //    this.camera.node.y+=this.y_Speed;
    }

    gogo() {

        var forword = cc.rotateBy(1, 180)
        var back = cc.rotateBy(1, -180)
        var acttio = cc.repeatForever(cc.sequence(forword, back));
        // var action= this.player_shoe.rn(cc.rotateTo(1.5,180))
        this.player_shoe.runAction(acttio);
    }


    intersectionTest(react) {


        // cc.Intersection.rectRect(rect,);
    }


    //交互
    interact() {
        this.currentWeapon= this.prefabWeapon.interact();
    }


    //换武器
    change() {



    }


    //扔掉当前的武器
    dropWeapon() {
          
        //直接 武器的父节点 换即可
       //var player_world_position=  this.node.convertToWorldSpaceAR(cc.v2(0,0));
       //this.currentWeapon.destroy();
       this.currentWeapon.setPosition(this.node.getPosition());
       var canvas_node=cc.find("Canvas");
       this.currentWeapon.setParent(canvas_node);
      // var weapon = cc.instantiate(this.prefabWeapon);

    }



    isInrotate:boolean=false;
    //攻击,使用
    attract() {


        if(!this.isInrotate){
            this.isInrotate=true;
            var currentRotate = this.node.rotation;
            cc.log(currentRotate);
            var rotateTo90 = cc.rotateTo(0.15, currentRotate + 45).easing(cc.easeElasticInOut(3));
            var rotateToNetive = cc.rotateTo(0.15, currentRotate-135).easing(cc.easeElasticInOut(3));
            var rotateTo0 = cc.rotateTo(0.15, currentRotate).easing(cc.easeElasticInOut(3));
           
            //动作执行完后的回调
            var runComplete = cc.callFunc(function(){
                this.isInrotate=false;
            }, this);
            var actionIntervalList = cc.sequence(rotateTo90,rotateToNetive, rotateTo0,runComplete);
            var method= this.node.runAction(actionIntervalList,);
           // console.info(method.)
        }
       

    }


}
