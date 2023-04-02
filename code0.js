gdjs.Level_321Code = {};
gdjs.Level_321Code.GDDinoObjects1= [];
gdjs.Level_321Code.GDDinoObjects2= [];
gdjs.Level_321Code.GDDesertTileObjects1= [];
gdjs.Level_321Code.GDDesertTileObjects2= [];
gdjs.Level_321Code.GDMushroom2Objects1= [];
gdjs.Level_321Code.GDMushroom2Objects2= [];
gdjs.Level_321Code.GDDesertBackgroundObjects1= [];
gdjs.Level_321Code.GDDesertBackgroundObjects2= [];
gdjs.Level_321Code.GDCrateObjects1= [];
gdjs.Level_321Code.GDCrateObjects2= [];
gdjs.Level_321Code.GDScoreObjects1= [];
gdjs.Level_321Code.GDScoreObjects2= [];
gdjs.Level_321Code.GDBulletObjects1= [];
gdjs.Level_321Code.GDBulletObjects2= [];
gdjs.Level_321Code.GDMonsterObjects1= [];
gdjs.Level_321Code.GDMonsterObjects2= [];
gdjs.Level_321Code.GDBush4Objects1= [];
gdjs.Level_321Code.GDBush4Objects2= [];
gdjs.Level_321Code.GDFlameObjects1= [];
gdjs.Level_321Code.GDFlameObjects2= [];
gdjs.Level_321Code.GDFireRoundButtonObjects1= [];
gdjs.Level_321Code.GDFireRoundButtonObjects2= [];
gdjs.Level_321Code.GDCoinObjects1= [];
gdjs.Level_321Code.GDCoinObjects2= [];
gdjs.Level_321Code.GDlifeObjects1= [];
gdjs.Level_321Code.GDlifeObjects2= [];

gdjs.Level_321Code.conditionTrue_0 = {val:false};
gdjs.Level_321Code.condition0IsTrue_0 = {val:false};
gdjs.Level_321Code.condition1IsTrue_0 = {val:false};
gdjs.Level_321Code.condition2IsTrue_0 = {val:false};


gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDDinoObjects1Objects = Hashtable.newFrom({"Dino": gdjs.Level_321Code.GDDinoObjects1});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDMushroom2Objects1Objects = Hashtable.newFrom({"Mushroom2": gdjs.Level_321Code.GDMushroom2Objects1});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.Level_321Code.GDBulletObjects1});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.Level_321Code.GDBulletObjects1});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDMonsterObjects1Objects = Hashtable.newFrom({"Monster": gdjs.Level_321Code.GDMonsterObjects1});
gdjs.Level_321Code.eventsList0 = function(runtimeScene) {

{

/* Reuse gdjs.Level_321Code.GDMonsterObjects1 */

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDMonsterObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDMonsterObjects1[i].getVariableNumber(gdjs.Level_321Code.GDMonsterObjects1[i].getVariables().getFromIndex(0)) == 3 ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDMonsterObjects1[k] = gdjs.Level_321Code.GDMonsterObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDMonsterObjects1.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDMonsterObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDMonsterObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDMonsterObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDDinoObjects1Objects = Hashtable.newFrom({"Dino": gdjs.Level_321Code.GDDinoObjects1});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDBush4Objects1Objects = Hashtable.newFrom({"Bush4": gdjs.Level_321Code.GDBush4Objects1});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDFlameObjects1Objects = Hashtable.newFrom({"Flame": gdjs.Level_321Code.GDFlameObjects1});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDFireRoundButtonObjects1Objects = Hashtable.newFrom({"FireRoundButton": gdjs.Level_321Code.GDFireRoundButtonObjects1});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDDinoObjects1Objects = Hashtable.newFrom({"Dino": gdjs.Level_321Code.GDDinoObjects1});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDCoinObjects1Objects = Hashtable.newFrom({"Coin": gdjs.Level_321Code.GDCoinObjects1});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDFireRoundButtonObjects1Objects = Hashtable.newFrom({"FireRoundButton": gdjs.Level_321Code.GDFireRoundButtonObjects1});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDDinoObjects1Objects = Hashtable.newFrom({"Dino": gdjs.Level_321Code.GDDinoObjects1});
gdjs.Level_321Code.eventsList1 = function(runtimeScene) {

{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dino"), gdjs.Level_321Code.GDDinoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.Level_321Code.GDMonsterObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDDinoObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDDinoObjects1[i].setPosition(62,400);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDMonsterObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDMonsterObjects1[i].setAnimationName("Fire");
}
}{for(var i = 0, len = gdjs.Level_321Code.GDMonsterObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDMonsterObjects1[i].setScale(2);
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "1de6b23c8434a16e7a95e7913e7d5618a0d999e9e495e88baf1770bd2c223648_From Page to Practice.aac", false, 25, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dino"), gdjs.Level_321Code.GDDinoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mushroom2"), gdjs.Level_321Code.GDMushroom2Objects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDDinoObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDMushroom2Objects1Objects, false, runtimeScene, false);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDMushroom2Objects1 */
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Level_321Code.GDScoreObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDMushroom2Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDMushroom2Objects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(50);
}{for(var i = 0, len = gdjs.Level_321Code.GDScoreObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDScoreObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dino"), gdjs.Level_321Code.GDDinoObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDDinoObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDDinoObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dino"), gdjs.Level_321Code.GDDinoObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDDinoObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDDinoObjects1[i].getY() > gdjs.evtTools.window.getWindowInnerHeight() ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDDinoObjects1[k] = gdjs.Level_321Code.GDDinoObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDDinoObjects1.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDDinoObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDDinoObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDDinoObjects1[i].setPosition(62,400);
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dino"), gdjs.Level_321Code.GDDinoObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDDinoObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDDinoObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.Level_321Code.GDDinoObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDDinoObjects1[i].flipX(true);
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dino"), gdjs.Level_321Code.GDDinoObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDDinoObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDDinoObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs.Level_321Code.GDDinoObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDDinoObjects1[i].flipX(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dino"), gdjs.Level_321Code.GDDinoObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDDinoObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDDinoObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDDinoObjects1[k] = gdjs.Level_321Code.GDDinoObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDDinoObjects1.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDDinoObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDDinoObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDDinoObjects1[i].setAnimationName("Jump");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dino"), gdjs.Level_321Code.GDDinoObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
gdjs.Level_321Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDDinoObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDDinoObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDDinoObjects1[k] = gdjs.Level_321Code.GDDinoObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDDinoObjects1.length = k;}if ( gdjs.Level_321Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDDinoObjects1.length;i<l;++i) {
    if ( !(gdjs.Level_321Code.GDDinoObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        gdjs.Level_321Code.condition1IsTrue_0.val = true;
        gdjs.Level_321Code.GDDinoObjects1[k] = gdjs.Level_321Code.GDDinoObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDDinoObjects1.length = k;}}
if (gdjs.Level_321Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDDinoObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDDinoObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDDinoObjects1[i].setAnimationName("Idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dino"), gdjs.Level_321Code.GDDinoObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
gdjs.Level_321Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDDinoObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDDinoObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDDinoObjects1[k] = gdjs.Level_321Code.GDDinoObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDDinoObjects1.length = k;}if ( gdjs.Level_321Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDDinoObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDDinoObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        gdjs.Level_321Code.condition1IsTrue_0.val = true;
        gdjs.Level_321Code.GDDinoObjects1[k] = gdjs.Level_321Code.GDDinoObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDDinoObjects1.length = k;}}
if (gdjs.Level_321Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDDinoObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDDinoObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDDinoObjects1[i].setAnimationName("Run");
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Dino"), gdjs.Level_321Code.GDDinoObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Level_321Code.GDDinoObjects1.length !== 0 ? gdjs.Level_321Code.GDDinoObjects1[0] : null), true, "", 0);
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.Level_321Code.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("Dino"), gdjs.Level_321Code.GDDinoObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDDinoObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDDinoObjects1[i].getBehavior("FireBullet").Fire((gdjs.Level_321Code.GDDinoObjects1[i].getPointX("")), (gdjs.Level_321Code.GDDinoObjects1[i].getPointY("")), gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDBulletObjects1Objects, 0, 150, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.Level_321Code.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.Level_321Code.GDMonsterObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDBulletObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDMonsterObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDBulletObjects1 */
/* Reuse gdjs.Level_321Code.GDMonsterObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDMonsterObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDMonsterObjects1[i].returnVariable(gdjs.Level_321Code.GDMonsterObjects1[i].getVariables().getFromIndex(0)).add(1);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDBulletObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDMonsterObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDMonsterObjects1[i].setScale(gdjs.Level_321Code.GDMonsterObjects1[i].getScale() - (0.5));
}
}
{ //Subevents
gdjs.Level_321Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bush4"), gdjs.Level_321Code.GDBush4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dino"), gdjs.Level_321Code.GDDinoObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDDinoObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDBush4Objects1Objects, false, runtimeScene, false);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDBush4Objects1 */
/* Reuse gdjs.Level_321Code.GDDinoObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDDinoObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDDinoObjects1[i].setScale(1.5);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDBush4Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDBush4Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDDinoObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDDinoObjects1[i].getBehavior("PlatformerObject").setJumpSpeed(1200);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.Level_321Code.GDMonsterObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDMonsterObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDMonsterObjects1[i].getBehavior("RepeatTimer").Repeat((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDMonsterObjects1[k] = gdjs.Level_321Code.GDMonsterObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDMonsterObjects1.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dino"), gdjs.Level_321Code.GDDinoObjects1);
gdjs.copyArray(runtimeScene.getObjects("FireRoundButton"), gdjs.Level_321Code.GDFireRoundButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Flame"), gdjs.Level_321Code.GDFlameObjects1);
/* Reuse gdjs.Level_321Code.GDMonsterObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDMonsterObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDMonsterObjects1[i].getBehavior("FireBullet").FireTowardPosition((gdjs.Level_321Code.GDMonsterObjects1[i].getCenterXInScene()), (gdjs.Level_321Code.GDMonsterObjects1[i].getPointY("")), gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDFlameObjects1Objects, (( gdjs.Level_321Code.GDDinoObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDDinoObjects1[0].getPointX("")), (( gdjs.Level_321Code.GDDinoObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDDinoObjects1[0].getPointY("")), 100, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDMonsterObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDMonsterObjects1[i].getBehavior("FireBullet").FireTowardPosition((gdjs.Level_321Code.GDMonsterObjects1[i].getPointX("")), (gdjs.Level_321Code.GDMonsterObjects1[i].getPointY("")), gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDFireRoundButtonObjects1Objects, (( gdjs.Level_321Code.GDDinoObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDDinoObjects1[0].getPointX("")), (( gdjs.Level_321Code.GDDinoObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDDinoObjects1[0].getPointY("")), 150, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.Level_321Code.GDCoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("Dino"), gdjs.Level_321Code.GDDinoObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDDinoObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDCoinObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDCoinObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Level_321Code.GDScoreObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDCoinObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDCoinObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(100);
}{for(var i = 0, len = gdjs.Level_321Code.GDScoreObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDScoreObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dino"), gdjs.Level_321Code.GDDinoObjects1);
gdjs.copyArray(runtimeScene.getObjects("FireRoundButton"), gdjs.Level_321Code.GDFireRoundButtonObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDFireRoundButtonObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDDinoObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDFireRoundButtonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("life"), gdjs.Level_321Code.GDlifeObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(1).sub(1);
}{for(var i = 0, len = gdjs.Level_321Code.GDlifeObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDlifeObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDFireRoundButtonObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDFireRoundButtonObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};

gdjs.Level_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_321Code.GDDinoObjects1.length = 0;
gdjs.Level_321Code.GDDinoObjects2.length = 0;
gdjs.Level_321Code.GDDesertTileObjects1.length = 0;
gdjs.Level_321Code.GDDesertTileObjects2.length = 0;
gdjs.Level_321Code.GDMushroom2Objects1.length = 0;
gdjs.Level_321Code.GDMushroom2Objects2.length = 0;
gdjs.Level_321Code.GDDesertBackgroundObjects1.length = 0;
gdjs.Level_321Code.GDDesertBackgroundObjects2.length = 0;
gdjs.Level_321Code.GDCrateObjects1.length = 0;
gdjs.Level_321Code.GDCrateObjects2.length = 0;
gdjs.Level_321Code.GDScoreObjects1.length = 0;
gdjs.Level_321Code.GDScoreObjects2.length = 0;
gdjs.Level_321Code.GDBulletObjects1.length = 0;
gdjs.Level_321Code.GDBulletObjects2.length = 0;
gdjs.Level_321Code.GDMonsterObjects1.length = 0;
gdjs.Level_321Code.GDMonsterObjects2.length = 0;
gdjs.Level_321Code.GDBush4Objects1.length = 0;
gdjs.Level_321Code.GDBush4Objects2.length = 0;
gdjs.Level_321Code.GDFlameObjects1.length = 0;
gdjs.Level_321Code.GDFlameObjects2.length = 0;
gdjs.Level_321Code.GDFireRoundButtonObjects1.length = 0;
gdjs.Level_321Code.GDFireRoundButtonObjects2.length = 0;
gdjs.Level_321Code.GDCoinObjects1.length = 0;
gdjs.Level_321Code.GDCoinObjects2.length = 0;
gdjs.Level_321Code.GDlifeObjects1.length = 0;
gdjs.Level_321Code.GDlifeObjects2.length = 0;

gdjs.Level_321Code.eventsList1(runtimeScene);

return;

}

gdjs['Level_321Code'] = gdjs.Level_321Code;
