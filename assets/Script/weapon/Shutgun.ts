import { WeaponType } from './WeaponType';

const { ccclass, property } = cc._decorator;

///棒球棍
@ccclass
export default class Shutgun extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
     text: string = '散弹枪；30点攻击';

     WeaponType:WeaponType=WeaponType.Shutgun;
    // constructor(){
    //     super();
    // }
    // LIFE-CYCLE CALLBACKS:

    //碰撞中
    isCollision: boolean = false;
    //第一个个碰撞的uuid
    firstCollisionUUID: string = null;

    nodeIndex:number=1;//放置在 第二的位置

    //旋转角度
    rotation:number=-90;
    //位置
    position:cc.Vec2=cc.v2(180,-10);

    //使用的手型
    armsName:string="arms_0_2";

    onLoad() {
       // this.WeaponType=WeaponType.Shutgun;
        //  this.label.string=this.text;
        //  this.label.node.active=false;
        // this.label.string=""
        // var manager = cc.director.getCollisionManager();
        // manager.enabled=true;
        // manager.enabledDrawBoundingBox=true;

    }

    start() {
        
    }

    // update (dt) {}


    
    /**
     * 当碰撞产生的时候调用
     * @param  {Collider} other  cc.BoxCollider产生碰撞的另一个碰撞组件
     * @param  {Collider} self  产生碰撞的自身的碰撞组件
     */
    onCollisionEnter(other, self) {
        var node = <cc.Node>other.node;
        this.firstCollisionUUID = node.uuid;
        this.isCollision=true;
        // this.label.node.active=true;

        // this.node.active=false;
        // this.node.destroy
        
        // console.info(" enter");
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
        // this.label.node.active=false;
        //console.log('on collision exit');
    }

    


}
