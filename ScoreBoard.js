  const demRectX = 0;
  const rectY = mapHeight * 60 / 650;
	const rectH = mapHeight * 25 / 650;
  const centerX = mapWidth/2;
	const fullBar = mapWidth;

class ScoreBoard {
  
  constructor() {
	  
	this.dVotes = 0;
	this.rVotes = 0;
	this.iVotes = 0;

	for (const state in vote_data) {
		for (const district in vote_data[state]) {
			const value = getHouseWinner(state, district);

			if (value === -1 ) continue;

		const candidate = district_data[state][district].candidates[value];
		if (candidate === undefined) {
					console.log("Bad vote_data number: " + state + " " + district + " = " + value);
					continue;
				}
							
		if(isDem(candidate.party)){
				this.dVotes++;
			} else if(candidate.party === "Republican"){
				this.rVotes++;
			} else {
				this.iVotes++;
			}
		}

    
	}
	    
	this.demWidth = map(this.dVotes, 0, 435, 0, fullBar);
	this.repWidth = map(this.rVotes, 0, 435, 0, fullBar);
	this.repRectX = fullBar - this.repWidth;

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
    text(this.dVotes, mapWidth * 17 / 900, mapHeight * 12 / 650);
    
    textStyle(NORMAL);
    textAlign(RIGHT, TOP);
    textSize(16);
    textFont('Serif');
    text('Republicans', mapWidth * 890 / 900, mapHeight * 40 / 650);
    
    textSize(25);
    textStyle(BOLD);
    text(this.rVotes, mapWidth * 890 / 900, mapHeight * 12 / 650);
    
    // rectangles
    noStroke();

	fill(220);
	rect(0, rectY, fullBar, rectH);
		
    fill(0, 174, 243);
	rect(0, rectY, this.demWidth, rectH);
	
    fill(232, 27, 35);
	rect(this.repRectX, rectY, this.repWidth, rectH);

    
    // "218 to win" label and line
    stroke(0);
    strokeWeight(1);
    line(centerX, mapHeight * 55 / 650, centerX, mapHeight * 85 / 650);
    
    fill(0);
    noStroke();
    textAlign(CENTER, TOP);
    textSize(12);
    textStyle(BOLD);
    text('218 TO WIN', centerX, mapHeight * 36 / 650);
    
    pop();
  }
}
