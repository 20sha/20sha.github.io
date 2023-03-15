gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.GDDinoObjects1= [];
gdjs.Untitled_32sceneCode.GDDinoObjects2= [];
gdjs.Untitled_32sceneCode.GDDesertTileObjects1= [];
gdjs.Untitled_32sceneCode.GDDesertTileObjects2= [];
gdjs.Untitled_32sceneCode.GDMushroom2Objects1= [];
gdjs.Untitled_32sceneCode.GDMushroom2Objects2= [];
gdjs.Untitled_32sceneCode.GDDesertBackgroundObjects1= [];
gdjs.Untitled_32sceneCode.GDDesertBackgroundObjects2= [];
gdjs.Untitled_32sceneCode.GDCrateObjects1= [];
gdjs.Untitled_32sceneCode.GDCrateObjects2= [];
gdjs.Untitled_32sceneCode.GDScoreObjects1= [];
gdjs.Untitled_32sceneCode.GDScoreObjects2= [];

gdjs.Untitled_32sceneCode.conditionTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition1IsTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition2IsTrue_0 = {val:false};


gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDDinoObjects1Objects = Hashtable.newFrom({"Dino": gdjs.Untitled_32sceneCode.GDDinoObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDMushroom2Objects1Objects = Hashtable.newFrom({"Mushroom2": gdjs.Untitled_32sceneCode.GDMushroom2Objects1});
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dino"), gdjs.Untitled_32sceneCode.GDDinoObjects1);
{gdjs.playerAuthentication.displayAuthenticationBanner(runtimeScene);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDDinoObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDDinoObjects1[i].setPosition(62,400);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dino"), gdjs.Untitled_32sceneCode.GDDinoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mushroom2"), gdjs.Untitled_32sceneCode.GDMushroom2Objects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDDinoObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDMushroom2Objects1Objects, false, runtimeScene, false);
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Untitled_32sceneCode.GDMushroom2Objects1 */
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Untitled_32sceneCode.GDScoreObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDMushroom2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDMushroom2Objects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(50);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDScoreObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dino"), gdjs.Untitled_32sceneCode.GDDinoObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDDinoObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDDinoObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dino"), gdjs.Untitled_32sceneCode.GDDinoObjects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDDinoObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDDinoObjects1[i].getY() > gdjs.evtTools.window.getWindowInnerHeight() ) {
        gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Untitled_32sceneCode.GDDinoObjects1[k] = gdjs.Untitled_32sceneCode.GDDinoObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDDinoObjects1.length = k;}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Untitled_32sceneCode.GDDinoObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDDinoObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDDinoObjects1[i].setPosition(62,400);
}
}}

}


{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dino"), gdjs.Untitled_32sceneCode.GDDinoObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDDinoObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDDinoObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDDinoObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDDinoObjects1[i].flipX(true);
}
}}

}


{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dino"), gdjs.Untitled_32sceneCode.GDDinoObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDDinoObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDDinoObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDDinoObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDDinoObjects1[i].flipX(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dino"), gdjs.Untitled_32sceneCode.GDDinoObjects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDDinoObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDDinoObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Untitled_32sceneCode.GDDinoObjects1[k] = gdjs.Untitled_32sceneCode.GDDinoObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDDinoObjects1.length = k;}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Untitled_32sceneCode.GDDinoObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDDinoObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDDinoObjects1[i].setAnimationName("Jump");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dino"), gdjs.Untitled_32sceneCode.GDDinoObjects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDDinoObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDDinoObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Untitled_32sceneCode.GDDinoObjects1[k] = gdjs.Untitled_32sceneCode.GDDinoObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDDinoObjects1.length = k;}if ( gdjs.Untitled_32sceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDDinoObjects1.length;i<l;++i) {
    if ( !(gdjs.Untitled_32sceneCode.GDDinoObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = true;
        gdjs.Untitled_32sceneCode.GDDinoObjects1[k] = gdjs.Untitled_32sceneCode.GDDinoObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDDinoObjects1.length = k;}}
if (gdjs.Untitled_32sceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Untitled_32sceneCode.GDDinoObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDDinoObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDDinoObjects1[i].setAnimationName("Idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dino"), gdjs.Untitled_32sceneCode.GDDinoObjects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDDinoObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDDinoObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Untitled_32sceneCode.GDDinoObjects1[k] = gdjs.Untitled_32sceneCode.GDDinoObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDDinoObjects1.length = k;}if ( gdjs.Untitled_32sceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDDinoObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDDinoObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = true;
        gdjs.Untitled_32sceneCode.GDDinoObjects1[k] = gdjs.Untitled_32sceneCode.GDDinoObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDDinoObjects1.length = k;}}
if (gdjs.Untitled_32sceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Untitled_32sceneCode.GDDinoObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDDinoObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDDinoObjects1[i].setAnimationName("Run");
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Dino"), gdjs.Untitled_32sceneCode.GDDinoObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Untitled_32sceneCode.GDDinoObjects1.length !== 0 ? gdjs.Untitled_32sceneCode.GDDinoObjects1[0] : null), true, "", 0);
}}

}


{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dino"), gdjs.Untitled_32sceneCode.GDDinoObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDDinoObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDDinoObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDDinoObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDDinoObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDDesertTileObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDDesertTileObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDMushroom2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDMushroom2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDDesertBackgroundObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDDesertBackgroundObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDCrateObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDCrateObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDScoreObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDScoreObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);

return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
