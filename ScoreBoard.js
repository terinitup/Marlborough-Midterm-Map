class ScoreBoard{
	
	constructor(dVotes, rVotes){
		this.dVotes = dVotes;
		this.rVotes = rVotes;
	}
	
	display(){
		textStyle(NORMAL);

		// Democrats and Republicans label
		textAlign(LEFT, TOP);
		textSize(17);
		textFont('Serif');
		text('Democrats', 17, 36);
		
		textSize(25);
		textStyle(BOLD);
		text('0', 17, 12);
		
		textStyle(NORMAL);
		textAlign(RIGHT, TOP);
		textSize(17);
		textFont('Serif');
		text('Republicans', (mapWidth)-10, 36);
		
		textSize(25);
		textStyle(BOLD);
		text('0', (mapWidth)-10, 12);
		
		
		//rectangles
		noStroke();
		fill(0, 174, 243);
		rect(15, 60, (mapWidth/2)-10, 25);
		fill (232, 27, 35);
		rect(mapWidth/2, 60, (mapWidth/2)-10, 25);
		
		//"218 to win" label and  line
		stroke(0);
		strokeWeight(2)
		line(mapWidth/2, 55, mapWidth/2, 85)
		
		
		fill(0);
		noStroke();
		textAlign(CENTER, TOP);
		textSize(12);
		textStyle(BOLD);
		text('218 TO WIN', mapWidth/2, 36);
		
		
	}
	
	
	
}
