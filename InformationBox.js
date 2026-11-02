class InformationBox{
	constructor(x, y, state, districtNum, candidates, tossup, winner){
		this.x = x;
		this.y = y;
		this.w = 280;
		this.h = 64 + candidates.length * 23;

		this.state = state;
		this.districtNum = districtNum;
		this.candidates = candidates;
		this.tossup = tossup;
		this.winner = winner;

		// too far right: show the box to the left of the mouse
		if (this.x + this.w > mapWidth){
			this.x = mouseX - 15 - this.w;
		}

		// too far down: show the box above the mouse
		if (this.y + this.h > mapHeight){
			this.y = mouseY - 15 - this.h;
		}

		this.x = max(this.x, 0);
		this.y = max(this.y, 0);
	}

	partyAbbrev(party){
		if (isDem(party)){
			return "DEM";
		} else if (party == "Republican"){
			return "GOP";
		} else {
			return "OTH";
		}
	}

	display(){
		push();
		rectMode(CORNER);
		textAlign(LEFT, TOP);

		// box
		stroke(200);
		fill(255);
		rect(this.x, this.y, this.w, this.h);

		// accent bar
		noStroke();
		if (this.winner != -1){
			fill(partyColor(this.candidates[this.winner].party));
		} else {
			fill(180);
		}
		rect(this.x, this.y, this.w, 5);

		// title
		fill(0);
		textSize(13);
		textFont('Serif');
		textStyle(BOLD);
		text(this.state.toUpperCase() + " DISTRICT " + this.districtNum, this.x + 10, this.y + 14);

		// toss-up note
		if (this.tossup){
			fill(133, 79, 11);
			textSize(10);
			textStyle(NORMAL);
			text("* Toss-up race", this.x + 10, this.y + 30);
		}

		// column headers
		fill(120);
		textSize(9);
		textStyle(BOLD);
		text("CANDIDATE", this.x + 10, this.y + 44);
		textAlign(RIGHT, TOP);
		text("STATUS", this.x + this.w - 10, this.y + 44);
		textAlign(LEFT, TOP);

		stroke(220);
		line(this.x + 10, this.y + 58, this.x + this.w - 10, this.y + 58);
		noStroke();

		// candidates
		for (let i = 0; i < this.candidates.length; i++){
			let c = this.candidates[i];
			let rowY = this.y + 62 + i * 23;

			// square for the winner, line for everyone else
			fill(partyColor(c.party));
			if (i == this.winner){
				rect(this.x + 10, rowY, 13, 13);
				textStyle(BOLD);
			} else {
				rect(this.x + 15, rowY, 3, 13);
				textStyle(NORMAL);
			}

			// name and party
			fill(0);
			textSize(12);
			let cWidth = textWidth(c.name);
			text(c.name, this.x + 30, rowY + 1);

			fill(120);
			textSize(10);
			text(this.partyAbbrev(c.party), this.x + 30 + cWidth + 6, rowY + 2);

			// status
			textStyle(NORMAL);
			textAlign(RIGHT, TOP);
			if (i == this.winner){
				fill(partyColor(c.party));
				text("Winner", this.x + this.w - 10, rowY + 1);
			} else if (this.winner == -1){
				fill(170);
				text("-", this.x + this.w - 10, rowY + 1);
			}
			textAlign(LEFT, TOP);

			// line under each row
			stroke(220);
			line(this.x + 10, rowY + 19, this.x + this.w - 10, rowY + 19);
			noStroke();
		}

		pop();
	}
}
