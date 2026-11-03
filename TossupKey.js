class TossupKey{
	display(){
		push();
		
		textFont('Serif');
		textSize(13);
		textStyle(NORMAL);
		let label = "Toss-up race";
		let labelW = textWidth(label);
		
		noStroke();
		fill(255, 227, 87);
		rect(mapWidth-160, 96, mapWidth/130, mapWidth/130);

		// label
		fill(0);
		textAlign(RIGHT, CENTER);
		text(label, mapWidth-80, 100);

		pop();

	}
}
