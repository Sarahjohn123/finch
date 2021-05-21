class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.image=loadImage("block.png");
      this.Visibility=225;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos= this.body.position;
      push ();
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width, this.height);
      this.Visibility=this.Visibility-5;
      tint (225,this.Visibility);
      pop ();
    }
}