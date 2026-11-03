class Toggle{

	constructor(){
		this.w = 200;                     
		this.h = 30;
		this.x = mapWidth/2 + 190;  
		this.y = 90;    
	}


	display(){
		push();
		rectMode(CORNER);

		noStroke();
		fill(238);
		rect(this.x, this.y, this.w, this.h, this.h / 2);

		let pillX = this.x + 3;
		if (mapMODE == "SENATE"){
			pillX = this.x + this.w / 2;
		}
		fill(255);
		stroke(220);
		rect(pillX, this.y + 3, this.w / 2 - 3, this.h - 6, (this.h - 6) / 2);

		noStroke();
		textFont('Serif');
		textSize(15);
		textAlign(CENTER, CENTER);

		if (mapMODE == "HOUSE"){
			fill(0);
			textStyle(BOLD);
		} else {
			fill(120);
			textStyle(NORMAL);
		}
		text("House", this.x + this.w / 4, this.y + this.h / 2);

		if (mapMODE == "SENATE"){
			fill(0);
			textStyle(BOLD);
		} else {
			fill(120);
			textStyle(NORMAL);
		}
		text("Senate", this.x + this.w * 3 / 4, this.y + this.h / 2);

	

		pop();
	}
}
