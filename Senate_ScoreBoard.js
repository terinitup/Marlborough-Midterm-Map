  //const sDemRectX = 0;
  const sRectY = mapHeight * 60 / 650;
  const sRectH = mapHeight * 25 / 650;
  const sCenterX = mapWidth/2;
  const sFullBar = mapWidth;
	//let sRepRectX;
	//console.log(sRVotes);
	//console.log(sDVotes);

class SenateScoreBoard {
  
  constructor() {
	  
	this.sDVotes = 34;
	this.sRVotes = 31;
	this.sIVotes = 0;
	
	for (const state in senate_vote) {
		const value = getSenateWinner(state);

        if (value === -1 ) continue;
        
        const candidate = senate_data[state].candidates[value];

        //const party = senate_data[state]["candidates"][value]["party"];
        if(isDem(candidate.party)){
            this.sDVotes++;
        } else if(candidate.party === "Republican"){
            this.sRVotes++;
        } else {
            this.sIVotes++;
        }
		
	}
	
	    
	this.sDemWidth = map(this.sDVotes, 0, 100, 0, sFullBar);
	this.sRepWidth = map(this.sRVotes, 0, 100, 0, sFullBar);
	this.sRepRectX = sFullBar - this.sRepWidth;

  }
  
  display() {
	  
	  push();
	  
	  fill(0);
		noStroke();
		textFont('Serif');

    textStyle(NORMAL);

    // Democrats and Republicans label
    textAlign(LEFT, TOP);
    textSize(16);
    textFont('Serif');
    text('Democrats', mapWidth * 17 / 900, mapHeight * 40 / 650);
    
    textSize(25);
    textStyle(BOLD);
    text(this.sDVotes, mapWidth * 17 / 900, mapHeight * 12 / 650);
    
    textStyle(NORMAL);
    textAlign(RIGHT, TOP);
    textSize(16);
    textFont('Serif');
    text('Republicans', mapWidth * 890 / 900, mapHeight * 40 / 650);
    
    textSize(25);
    textStyle(BOLD);
    text(this.sRVotes, mapWidth * 890 / 900, mapHeight * 12 / 650);
    
// gray background bar (undecided seats)
		fill(220);
		rect(0, sRectY, sFullBar, sRectH);

		// Democrats from the left
		fill(0, 174, 243);
		rect(0, sRectY, this.sDemWidth, sRectH);

		// Republicans from the right
		fill(232, 27, 35);
		rect(this.sRepRectX, sRectY, this.sRepWidth, sRectH);

		// "51 to win" line and label
		stroke(0);
		strokeWeight(1);
		line(sCenterX, mapHeight * 55 / 650, sCenterX, mapHeight * 85 / 650);
		
		noStroke();
		fill(0);
		textAlign(CENTER, TOP);
		textSize(12);
		textStyle(BOLD);
		text('51 TO WIN', sCenterX, mapHeight * 36 / 650);
		
		pop();

  }
}
