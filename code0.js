gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.GDNinjaGirlObjects1= [];
gdjs.Untitled_32sceneCode.GDNinjaGirlObjects2= [];
gdjs.Untitled_32sceneCode.GDWallBrickFlatObjects1= [];
gdjs.Untitled_32sceneCode.GDWallBrickFlatObjects2= [];

gdjs.Untitled_32sceneCode.conditionTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition1IsTrue_0 = {val:false};


gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NinjaGirl"), gdjs.Untitled_32sceneCode.GDNinjaGirlObjects1);
{gdjs.playerAuthentication.displayAuthenticationBanner(runtimeScene);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNinjaGirlObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNinjaGirlObjects1[i].setX(800);
}
}}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDNinjaGirlObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNinjaGirlObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDWallBrickFlatObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDWallBrickFlatObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);

return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
