class Square {
  constructor(x, y, size, id) {
    this.pos = createVector(x, y);
    this.size = size;
    this.vel = createVector(0,0);
    
    this.c = color(0, 174, 243);
    this.target = createVector(x, y);
    this.id = id;
   // this.num = num;
  }
  
   hover(){
	 let d = dist(mouseX, mouseY, this.pos.x, this.pos.y);
	 return d<this.size/2;
	}

  display() {
   noStroke();
   fill(this.c);
   rectMode(CENTER);
   square(this.pos.x, this.pos.y, this.size);
   
   if (this.hover()){
	fill(255);
	textSize(16);
	textAlign(CENTER, CENTER);
	text(this.id, this.pos.x, this.pos.y);
	}
   
  }
  
  setTarget(tx, ty){
	  this.target.set(tx, ty);
  }
  
  changeColor(r, g, b){
	  this.c = color(r, g, b);
  }
	  
  
  shift() {
	  
	  this.pos.lerp(this.target, 0.05); 
	  //= p5.Vector.lerp(this.pos, this.target, 0.05);
	 
	  
  }
  
  

}
