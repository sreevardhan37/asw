class monster  {
    constructor(x,y){
      this.image = loadImage("sprites/Monster-01.png");
      this.body= Bodise .circle(this.x,this.y,(this.r)/2,options)
      World.add(world,this.body);
      this.image = loadImage("sprites/Monster-02.png");
      this.body= Bodise .circle(this.x,this.y,(this.r)/2,options)
      World.add(world,this.body);
    }
  
    display() {
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
      super.display();
    }
  }