    const demRectX = 0;
    const rectY = mapHeight * 60 / 650;
	const rectH = mapHeight * 25 / 650;
    const centerX = mapWidth/2;
	const fullBar = mapWidth;
	let repRectX 

	let dVotes = 230;
	let rVotes = 205;
	let iVotes = 0;

	// for (const state in vote_data) {
	// 	for (const district in vote_data[state]) {
	// 		const value = vote_data[state][district];

	// 		if (value === 1) {
	// 		dVotes++;
	// 		} else if (value === 2) {
	// 		rVotes++;
	// 		} else if (value === 3) {
	// 		iVotes++;
	// 		}
	// 	}
	// }
	console.log(rVotes);
	console.log(dVotes);

	let demWidth;
	let repWidth;

class ScoreBoard {
  
  constructor() {
	    
	demWidth = map(dVotes, 0, 435, 0, fullBar);
	repWidth = map(rVotes, 0, 435, 0, fullBar);
	repRectX = demRectX + demWidth;

  }
  
  display() {

    textStyle(NORMAL);

    // Democrats and Republicans label
    textAlign(LEFT, TOP);
    textSize(17);
    textFont('Serif');
    text('Democrats', mapWidth * 17 / 900, mapHeight * 36 / 650);
    
    textSize(25);
    textStyle(BOLD);
    text(dVotes, mapWidth * 17 / 900, mapHeight * 12 / 650);
    
    textStyle(NORMAL);
    textAlign(RIGHT, TOP);
    textSize(17);
    textFont('Serif');
    text('Republicans', mapWidth * 890 / 900, mapHeight * 36 / 650);
    
    textSize(25);
    textStyle(BOLD);
    text(rVotes, mapWidth * 890 / 900, mapHeight * 12 / 650);
    
    // rectangles
    noStroke();
    fill(0, 174, 243);
    rect(demRectX, rectY, demWidth, rectH);

    fill(232, 27, 35);
    rect(repRectX, rectY, repWidth, rectH);
    
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
  }
}