﻿
function gamePageOne(){
    backGroundLayer.die();
    backGroundLayer.removeAllChild();
	var backGroundPic = new LSprite();
    backGroundPic=new LBitmap(new LBitmapData(imglist["backGround"]));
    backGroundLayer.addChild(backGroundPic);

    //---------------设置游戏边界函数--------------
    Bound();
    onup();
	//-----------------------------------------------
	
	
	
    //----------------浮力效果初始化-------------------
    var buoyancyController = new LGlobal.box2d.b2BuoyancyController();
    buoyancyController.offset = -1/LGlobal.box2d.drawScale;
    buoyancyController.density = 3;
    buoyancyController.linearDrag = 10;
    buoyancyController.angularDrag = 6;
    LGlobal.box2d.world.AddController(buoyancyController);

    var buoyancyControllerLayer = new LSprite();
    buoyancyControllerLayer.graphics.drawRect(0,"#ffffff",[0,0, 900, 600],false);
    buoyancyControllerLayer.alpha = 0.2;
    backGroundLayer.addChild(buoyancyControllerLayer);
	//---------------------------------------------------
	
	
	
    //导入音乐播放按钮图片
    musicBtn = new LSprite();
    musicBtn.x = 850;
    musicBtn.y = 10;
    backGroundLayer.addChild(musicBtn);
    var bitmap = new LBitmapData(imglist['whiteBtn2']);
    musicBtn.graphics.beginBitmapFill(bitmap);
    musicBtn.graphics.drawRect(1,"#000",[0,0,41,29],false);
  

    musicBtn.addEventListener(LMouseEvent.MOUSE_UP,onup);

   
	

/*  firstPlayerLayerx=200;
 firstPlayerLayery=300;

 secondPlayerLayerx=500;
 secondPlayerLayery=300;

 ballLayerx=450;
 ballLayery=300;

	reset_position={
		firstPlayerLayer_X:firstPlayerLayerx,
		firstPlayerLayer_Y:firstPlayerLayery,
		
		secondPlayerLayer_X:secondPlayerLayerx,
		secondPlayerLayer_Y:secondPlayerLayery,
		
		ballLayer_X:ballLayerx,
		ballLayer_Y:ballLayery
		
	}
	
	 */
	 
	  //-----------玩家1出现（梅西）------------
     firstPlayerLayer=new LSprite();
     firstPlayerLayer.x=200;
     firstPlayerLayer.y=300;
    backGroundLayer.addChild(firstPlayerLayer);
    var bitmapMeixi= new LBitmapData(imglist["meixi"]);
    firstPlayerLayer.graphics.beginBitmapFill(bitmapMeixi);
    firstPlayerLayer.graphics.drawArc(1,"#000",[40,40,40,0,2*Math.PI],false);
    firstPlayerLayer.addBodyCircle(40,40,40,1,3,0.2,0.9);
    //firstPlayerLayer.setBodyMouseJoint(true);
    buoyancyController.AddBody(firstPlayerLayer.box2dBody);
	
	
	
    //-----玩家2出现（内马尔）-----
    secondPlayerLayer=new LSprite();
    secondPlayerLayer.x=500;
    secondPlayerLayer.y=300;
    backGroundLayer.addChild(secondPlayerLayer);
    var bitmapNeimaer= new LBitmapData(imglist["neimaer"]);
    secondPlayerLayer.graphics.beginBitmapFill(bitmapNeimaer);
    secondPlayerLayer.graphics.drawArc(1,"#000",[40,40,40,0,2*Math.PI],false);
    secondPlayerLayer.addBodyCircle(40,40,40,1,3,0.2,0.9);
    //secondPlayerLayer.setBodyMouseJoint(true);
	secondPlayerLayer.addEventListener(LMouseEvent.MOUSE_MOVE,move);
    buoyancyController.AddBody(secondPlayerLayer.box2dBody);

    //-----足球-----
    ballLayer = new LSprite();
    ballLayer.x=450;
    ballLayer.y=300;
	
		//console.warn(ballLayer.x);
	
    backGroundLayer.addChild(ballLayer);
    var bitmap = new LBitmapData(imglist["football"]);
    ballLayer.graphics.beginBitmapFill(bitmap);
    ballLayer.graphics.drawArc(1,"#000",[20,20,20,0,2*Math.PI],false);
    ballLayer.addBodyCircle(20,20,20,1,3,0.01,2.5);
    buoyancyController.AddBody(ballLayer.box2dBody);

    showFlag.push(new LBitmapData(imglist["Argentina"]));
    showFlag.push(new LBitmapData(imglist["Brazil"]));

    //-----------显示国旗Argentina--------------
    var Argentina = new LBitmap(showFlag[0]);
    Argentina.x =50;
    Argentina.y = 5;
    backGroundLayer.addChild(Argentina);

    //------------显示国旗Brazil----------------
    var Brazil = new LBitmap(showFlag[1]);
    Brazil.x = 770;
    Brazil.y = 5;
    backGroundLayer.addChild(Brazil);

    RightDoor=new LSprite();
    RightDoor.x=825;
    RightDoor.y=300;
    backGroundLayer.addChild(RightDoor);
    RightDoor.addBodyPolygon(35,105,0,1,3,0,1);


//-----设置左边球门-----
    LeftDoor=new LSprite();
    LeftDoor.x=80;
    LeftDoor.y=300;
    backGroundLayer.addChild(LeftDoor);
    LeftDoor.addBodyPolygon(35,105,0,1,3,0,1);//RightDoor.setBodyMouseJoint(true);
    //buoyancyController.AddBody(LeftDoor.box2dBody);

    scoreText();
    onup();
    Bound();
//------------------------------------------------	
	
	
//-------------------------退出游戏-------------------
	var buttonExit = new LButtonSample1("退出游戏");
	buttonExit.x =790;
	buttonExit.y = 567;
	backGroundLayer.addChild(buttonExit);
	buttonExit.addEventListener(LMouseEvent.MOUSE_DOWN,Exit);
}
	function Exit(){
	     choisePage();
	}
//----------------------------------------------------	

//----------跟随鼠标------------------
  function move(e){
		secondPlayerLayer.setBodyMouseJoint(true);
        //e.target.startDrag();
		
    }
	
//----------------------------------------	