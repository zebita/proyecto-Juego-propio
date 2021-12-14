class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };