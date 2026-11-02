class CreditBox{
	
	constructor(){
		this.x = mapWidth - 20; 
		this.y = mapHeight - 40; 
	}
	
	
	
	hover(){
		textSize(13);
		let w = textWidth('Credits');
		return mouseX > this.x -w && mouseX < this.x && mouseY > this.y && mouseY < this.y + 16;
	}
	
	display(){
		push();
		
		noStroke();
		fill(0);
		textAlign(RIGHT);
		textFont('Serif');
		textSize(13);
		textStyle(NORMAL);
		textAlign(RIGHT);
		text('Credits', this.x, this.y);
	
		if(this.hover()){
			let boxX = this.x-350;
			let boxY=this.y-50;
			
			stroke(0);
			fill(211);
			rect(boxX, boxY, 332, 55);
			
			noStroke();
			fill(0);
			textAlign(LEFT, TOP);
			textSize(13.5);
			textStyle(NORMAL);
			text("Coded by Terin '27 and Adison '28 for Honors Computer Science Projects taught by Dr. Darren Kessner", boxX + 10, boxY+14, 308, 70); 
			
		}
		
		pop();
	}
	
	
}


