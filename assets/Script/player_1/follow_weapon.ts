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
export default class NewClass extends cc.Component {

    @property(cc.Node)
    targer: cc.Node=null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

        if(this.targer==null) return;
        //this.node.rotation=this.targer.rotation;

          this.node.rotation=this.targer.rotation;

    }

    update (dt) {
        if(this.targer==null) return;
        // var position_World=this.targer.convertToWorldSpaceAR(cc.v2(0,0));
        // // //cc.log("把player 的坐标 以 0，0 的世界坐标");
        // // //cc.log(position_World);
        //  var position_Node= this.node.convertToNodeSpaceAR(position_World);
        //cc.log("把 player 的世界坐标 转成 flower 的 父节点下的坐标");
        //cc.log(position_Node);
        this.node.x=this.targer.x;
        this.node.y=this.targer.y;
        this.node.rotation=this.targer.rotation;
    }
}
