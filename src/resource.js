var res = {
    background_png : "res/background03.png",  //背景
    ship_png : "res/shrimp01.png",            //自機
    particle_png : "res/particle.png",        //パーティクル
    texturePlist : "res/particle_texture.plist", //テクスチャプリセット
    asteroid_png : "res/coral_under.png",     //サンゴ
    asteroid02_png : "res/coral_above.png",   //サンゴ
    bgm_main : "res/bgm_main.mp3",            //BGM
    se_bang : "res/se_bang.mp3",              //爆発
    title_png : "res/Title.png",              //タイトル
    replay_png : "res/replay_button.png",     //もう一回？
    gameOV_png : "res/gameover.png",          //ゲームオーバー
    gameST_png : "res/start.png",             //ゲームスタート
    ship02_png : "res/shrimp02.png",          //エビフライ差分
    ship03_png : "res/shrimp03.png",          //エビフライ差分
    ship04_png : "res/shrimp04.png",          //エビフライ差分
    secondBG01_png : "res/rock_above02.png",  //山っぽい背景
    secondBG02_png : "res/rock_under02.png",  //山っぽい背景
    thirdBG01_png : "res/ceiling02.png",      //岩っぽい背景
    thirdBG02_png : "res/land02.png",         //岩っぽい背景
    item01_png : "res/nagoya0.png",           //アイテム、うどん
    item02_png : "res/nagoya1.png",           //アイテム、串カツ
    item03_png : "res/nagoya2.png",           //アイテム、エビフライ
    item04_png : "res/nagoya3.png",           //アイテム、名古屋コーチン
    item05_png : "res/nagoya4.png",           //アイテム、シャチホコ
    item06_png : "res/nagoya5.png",           //アイテム、タワー
    item07_png : "res/nagoya6.png",           //アイテム、名古屋城
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}
