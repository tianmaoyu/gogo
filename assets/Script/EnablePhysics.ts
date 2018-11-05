const {ccclass, property} = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {

    // @property(cc.Label)
    // label: cc.Label = null;

    // @property
    // text: string = 'hello';

    start () {
        // init logic
        //this.label.string = this.text;
    }

    onLoad(){
        var manager = cc.director.getPhysicsManager();
        manager.enabled = true;
        // manager.debugDrawFlags = cc.PhysicsManager.DrawBits.e_jointBit |
        // cc.PhysicsManager.DrawBits.e_aabbBit |
        // cc.PhysicsManager.DrawBits.e_centerOfMassBit |
        // cc.PhysicsManager.DrawBits.e_jointBit |
        // cc.PhysicsManager.DrawBits.e_shapeBit
        // ;

        var collisionManager = cc.director.getCollisionManager();
        collisionManager.enabled = true;
        collisionManager.enabledDebugDraw = true;
        collisionManager.enabledDrawBoundingBox=true;
    }
}
