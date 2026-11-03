  const sDemRectX = 0;
  const sRectY = mapHeight * 60 / 650;
  const sRectH = mapHeight * 25 / 650;
  const sCenterX = mapWidth/2;
  const sFullBar = mapWidth;
	let sRepRectX;

	let sDVotes = 34;
	let sRVotes = 31;
	let sIVotes = 0;

	for (const state in senate_vote) {
		const value = senate_vote[state];

        if (value === -1 ) continue;

        const party = senate_data[state]["candidates"][value]["party"];
        if(party === "Democratic"){
            sDVotes++;
        } else if(party === "Republican"){
            sRVotes++;
        } else {
            sIVotes++;
        }
		
	}
	
	console.log(sRVotes);
	console.log(sDVotes);

	let sDemWidth;
	let sRepWidth;

class SenateScoreBoard {
  
  constructor() {
	    
	sDemWidth = map(sDVotes, 0, 100, 0, sFullBar);
	sRepWidth = map(sRVotes, 0, 100, 0, sFullBar);
	sRepRectX = sDemRectX + sDemWidth;

  }
  
  display() {

    textStyle(NORMAL);

    // Democrats and Republicans label
    textAlign(LEFT, TOP);
    textSize(16);
    textFont('Serif');
    text('Democrats', mapWidth * 17 / 900, mapHeight * 40 / 650);
    
    textSize(25);
    textStyle(BOLD);
    text(sDVotes, mapWidth * 17 / 900, mapHeight * 12 / 650);
    
    textStyle(NORMAL);
    textAlign(RIGHT, TOP);
    textSize(16);
    textFont('Serif');
    text('Republicans', mapWidth * 890 / 900, mapHeight * 40 / 650);
    
    textSize(25);
    textStyle(BOLD);
    text(sRVotes, mapWidth * 890 / 900, mapHeight * 12 / 650);
    
    // rectangles
    noStroke();
    fill(0, 174, 243);
    rect(sDemRectX, sRectY, sDemWidth, sRectH);

    fill(232, 27, 35);
    rect(sRepRectX, sRectY, sRepWidth, sRectH);
    
    // "218 to win" label and line
    stroke(0);
    strokeWeight(1);
    line(sCenterX, mapHeight * 55 / 650, sCenterX, mapHeight * 85 / 650);
  }
}
