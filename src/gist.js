for (i = 0; i < 4; i++) {
  for(n = 0; n < 4; n++){
    var sprite = new cc.Sprite(res.cover_png);
    cc.log(i);
    cc.log(this.dropArray[i]);
    sprite.attr({
        x: size.width  *0.3 + 50 * n ,
        y: size.height  * 0.3 + 50 * i,
        scale: 1.0,
        rotation: 0
    });
    //this.dropSpriteArray.push(this.sprite);
    // this.addChild(this.sprite);
    this.addChild(sprite, 0);
}
}
