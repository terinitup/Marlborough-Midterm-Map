class InformationBox{
	constructor(x, y, state, districtNum, candidates, tossup, winner){
		this.x = x;
		this.y=y;
		this.w=340;
		this.h = 78 + candidates.length * 28 ;
		
		this.state = state;
		this.districtNum=districtNum;
		this.candidates=candidates;
		this.tossup=tossup;
		this.winner=winner;
		
	}
	
	partyAbbrev(party) {
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
		
		
		//box
		stroke(200);
		fill(255);
		rect(this.x, this.y, this.w, this.h);
		
		//accent bar
		noStroke();
		if (this.winner != -1){
			fill(partyColor(this.candidates[this.winner].party));
		} else {
			fill(180);
		}
		rect(this.x, this.y, this.w, 6);
		
	
		//Title
		fill(0);
		textSize(15);
		textFont('Serif');
		textStyle(BOLD);
		text(this.state.toUpperCase() + " DISTRICT " + this.districtNum, this.x + 10, this.y +16);
		
		// "AP certified results" in the top riht 
		//textFont("Arial");
		//textSize(12);
		//textAlign(RIGHT, TOP);
		//textStyle(NORMAL);
		//fill(120);
		//text("AP certified results", this.x + this.w -5, this.y+this.h-15);
		//textAlign(LEFT, TOP);
		
		//Toss-up note
		if (this.tossup){
			fill(133, 79, 11);
			textSize(12);
			textStyle(NORMAL);
			text("* Toss-up race", this.x + 12, this.y + 36);
		}
		
		//column headers
		fill(120);
		textSize(11);
		textStyle(BOLD);
		textFont('Serif');
		textStyle(BOLD);
		text("CANDIDATE", this.x + 12, this.y + 54);
		textAlign(RIGHT, TOP);
		text("STATUS", this.x + this.w - 12, this.y + 54);
		textAlign(LEFT, TOP);
		
		stroke(220);
		line(this.x + 12, this.y + 70, this.x + this.w - 12, this.y + 72);		
		noStroke();
		
		//Candidates
		for(let i = 0; i <this.candidates.length; i++){
			let c = this.candidates[i];
			let rowY = this.y + 76 + i * 28;			
			
			//showing a colored square (blue or red) if candidate is leading, and a line if not
			fill(partyColor(c.party));
			if (i==this.winner){
				rect(this.x +12, rowY, 16, 16);
				textStyle(BOLD);
			}else{
				rect(this.x +18, rowY, 3, 16);
				textStyle(NORMAL);
			}
			
			
			//name and party
			fill(0);
			textSize(15);
			let cWidth = textWidth(c.name);
			text(c.name, this.x +36, rowY +1);
			
			fill(120);
			textSize(12);
			text(this.partyAbbrev(c.party), this.x +36+cWidth+8, rowY+3);
			
			//status
			textStyle(NORMAL);
			textAlign(RIGHT, TOP);
			if (i == this.winner){
				fill(partyColor(c.party));
				text("Winner", this.x + this.w -12, rowY +1);
			} else if (this.winner == -1){
				fill(170);
				text("-", this.x +this.w-12, rowY+1);
			}
			textAlign(LEFT, TOP);
			
			//line
			stroke(220);
			line(this.x+12, rowY+22, this.x+this.w-12, rowY +24);
			noStroke();
		}
		
		pop();
			
					

			
		}	
		
	}
	
