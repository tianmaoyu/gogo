

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    joystic_bar: cc.Node = null;

    @property
    radius: number = 0; //背景的半径

    // LIFE-CYCLE CALLBACKS:
    //
    @property({displayName:"遥感视口X"})
    joystick_X:number=0;

    @property({displayName:"遥感视口Y"})
    joystick_Y:number=0;

    @property(cc.Node)
    player:cc.Node=null;// 玩家

    onLoad () {
        this.radius=this.node.width/2;
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStartEvent, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMoveEvent, this);
        // 触摸在圆圈内离开或在圆圈外离开后，摇杆归位，player速度为0
        this.node.on(cc.Node.EventType.TOUCH_END, this.touchEndEvent, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEndEvent, this);
    }

    start () {

    }

    // update (dt) {}

    touchStartEvent (e) {
        //var touchPos = this.node.convertToNodeSpaceAR(e.getLocation());

        var touchPosition= e.getLocation().sub(cc.v2(this.joystick_X,this.joystick_Y));

        

        cc.log(e.getLocation());
        var position_World=this.node.convertToWorldSpaceAR(cc.v2(0,0));
       
        //var position_World=this.node.convertToWorldSpaceAR(cc.v2(0,0));
        //cc.log(position_World);
        // this.joystic_bar.setPosition(touchPos);
        //var node_POSITON = this.node.convertToNodeSpaceAR(position_World);
        //cc.log(e.getLocation());
        cc.log(position_World);
        //cc.log(position_World);
        this.joystic_bar.setPosition(touchPosition);
    }

    touchMoveEvent (event) {
        //var position_World=this.node.convertToWorldSpaceAR(cc.v2(0,0));
        //var touchPos = this.node.convertToNodeSpaceAR(event.getLocation());
        var touchPos= event.getLocation().sub(cc.v2(this.joystick_X,this.joystick_Y));
        var distance=touchPos.mag();
        var playerRigidBody=this.player.getComponent(cc.RigidBody);
        if(this.radius > distance)
        {
            this.joystic_bar.setPosition(touchPos);
          
            playerRigidBody.linearVelocity=touchPos.scale(cc.v2(5,5));
        }
        else
        {
            //角度转弧度 π/180×角度
            //弧度变角度 180/π×弧度
            //控杆永远保持在圈内，并在圈内跟随触摸更新角度
            // var xoy=180/Math.PI*touchPos.angle(cc.v2(0,0));
            //Math.atan2(-1,0) 表示夹角
            var x =  Math.cos(Math.atan2(touchPos.y,touchPos.x)) * this.radius;
            var y =  Math.sin(Math.atan2(touchPos.y,touchPos.x)) * this.radius;
            this.joystic_bar.setPosition(cc.v2(x, y));
          
            //cc.log(-Math.atan2(x, y)*180/Math.PI) ? 不再是原来的方向
            playerRigidBody.linearVelocity=cc.v2(x, y).scale(cc.v2(5,5));
        }
        this.player.rotation=-Math.atan2(touchPos.y,touchPos.x)*180/Math.PI;
        
    }

    touchEndEvent() {
        this.joystic_bar.setPosition(this.node.getPosition());
        this.player.getComponent(cc.RigidBody).linearVelocity=cc.v2(0, 0);
    }
  
}
