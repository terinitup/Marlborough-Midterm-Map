    const fullBar = mapWidth * (440 / 900) * 2;
	const rectX = mapWidth * 15 / 900;
    const rectY = mapHeight * 60 / 650;
	const rectH = mapHeight * 25 / 650;
    const centerX = mapWidth * 453 / 900;
	let repRectX 

	let dVotes = 217;
	let rVotes = 217;

	let demWidth;
	let repWidth;

class ScoreBoard {
  
  constructor() {
	    
	demWidth = map(dVotes, 0, 435, 0, fullBar);
	repWidth = map(rVotes, 0, 435, 0, fullBar);
	repRectX = rectX + demWidth;

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
    text('0', mapWidth * 17 / 900, mapHeight * 12 / 650);
    
    textStyle(NORMAL);
    textAlign(RIGHT, TOP);
    textSize(17);
    textFont('Serif');
    text('Republicans', mapWidth * 890 / 900, mapHeight * 36 / 650);
    
    textSize(25);
    textStyle(BOLD);
    text('0', mapWidth * 890 / 900, mapHeight * 12 / 650);
    
    // rectangles
    noStroke();
    fill(0, 174, 243);
    rect(rectX, rectY, demWidth, rectH);

    fill(232, 27, 35);
    rect(repRectX, rectY, repWidth, rectH);
    
    // "218 to win" label and line
    stroke(0);
    strokeWeight(2);
    line(centerX, mapHeight * 55 / 650, centerX, mapHeight * 85 / 650);
    
    fill(0);
    noStroke();
    textAlign(CENTER, TOP);
    textSize(12);
    textStyle(BOLD);
    text('218 TO WIN', centerX, mapHeight * 36 / 650);
  }
}