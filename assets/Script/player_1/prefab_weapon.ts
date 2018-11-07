
// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

import BaseBallBar from '../weapon/BaseballBar';
const {ccclass, property} = cc._decorator;

@ccclass
export default class PrefabWeapon extends cc.Component {

    @property(cc.Prefab)
    weapon: cc.Prefab = null;

     //碰撞中
     isCollision: boolean = false;
     //第一个个碰撞的uuid
     firstCollisionUUID: string = null;

    // onLoad () {}

    weapon_map:cc.Node=null;

    start () {

    }

    update (dt) {
        
    }
    interact(){
        console.info("***********")

        if(this.weapon_map==null)return;

        var baseBallBar=  this.weapon_map.getComponent<BaseBallBar>(BaseBallBar);

        if( baseBallBar.firstCollisionUUID!= this.node.uuid) return;
        console.info("可以捡武器了！")
        
        baseBallBar.node.active=false;
        setTimeout(function () {
            baseBallBar.node.destroy();
          }.bind(this), 5000);
      

        var displayIndex=baseBallBar.nodeIndex;
        var weapon= cc.instantiate(this.weapon);

        weapon.zIndex=displayIndex;
        this.node.addChild(weapon);
        //weapon.setParent(this.node);
       return weapon;

    }

     /**
     * 当碰撞产生的时候调用
     * @param  {Collider} other  cc.BoxCollider产生碰撞的另一个碰撞组件
     * @param  {Collider} self  产生碰撞的自身的碰撞组件
     */
    onCollisionEnter(other, self) {
        // var node = <cc.Node>other.node;
        // this.firstCollisionUUID = node.uuid;
        // this.isCollision=true;
        this.weapon_map=other.node;
        console.info(" player enter");
        // // 碰撞系统会计算出碰撞组件在世界坐标系下的相关的值，并放到 world 这个属性里面
        // var world = self.world;
        // console.info(node.uuid);
        // 碰撞组件的 aabb 碰撞框
        // var aabb = world.aabb;
        // // 节点碰撞前上一帧 aabb 碰撞框的位置
        // var preAabb = world.preAabb;
        // // 碰撞框的世界矩阵
        // var t = world.transform;
        // // 以下属性为圆形碰撞组件特有属性
        // var r = world.radius;
        // var p = world.position;
        // // 以下属性为 矩形 和 多边形 碰撞组件特有属性
        // var ps = world.points;
    }

    /**
    * 碰撞产生后，碰撞结束前的情况下，每次计算碰撞结果后调用
    * @param other  产生碰撞的另一个碰撞组件
    * @param self  产生碰撞的自身的碰撞组件
    */
    onCollisionStay(other, self) {
        //console.log('on collision stay');
    }

    /**
     * 当碰撞结束后调用
     * @param other  产生碰撞的另一个碰撞组件
     * @param self  产生碰撞的自身的碰撞组件
     */
    onCollisionExit(other, self) {
        this.isCollision=false;
        this.weapon_map=null;
        //console.log('on collision exit');
    }

}
