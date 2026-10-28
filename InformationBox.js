class InformationBox{
	constructor(x, y, state, districtNum, candidates, tossup){
		this.x = x;
		this.y=y;
		this.w=300;
		this.h=150;
		
		this.state = state;
		this.districtNum=districtNum;
		this.candidates=candidates;
		this.tossup=tossup;
		
	}
	
	leader(){
		for (let c of this.candidates){
			if(c.leading){
				return c.party;
			}
		}
		return null;
	}
	
	partyColor(party){
		if (party=="Democrat"){
			return color(0, 174, 243);
		} else if (party == "Republican"){
			return color(232, 27, 35);
		} else {
			return color(180);
		}
	}
	
	partyAbbrev(party) {
		if (party=="Democrat"){
			return "DEM";
		} else if (party == "Republican"){
			return "GOP"
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
		fill(this.partyColor(this.leader()));
		rect(this.x, this.y, this.w, 6);
		
		//Title
		fill(0);
		textAlign(LEFT, TOP);
		textSize(20);
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
			textSize(13);
			text("* Toss-up race", this.x+12, this.y+38);
		}
		
		fill(120);
		textSize(14);
		textFont('Serif');
		textStyle(BOLD);
		text("CANDIDATE", this.x+12, this.y+58);
		textAlign(RIGHT, TOP);
		text("STATUS", this.x +this.w-12, this.y+58);
		textAlign(LEFT, TOP);
		
		stroke(220);
		line(this.x+12, this.y+76, this.x+this.w-12, this.y+76);
		noStroke();
		
		//Candidates
		for(let i = 0; i <this.candidates.length; i++){
			let c = this.candidates[i];
			let rowY = this.y+58 +22 + i*28;
			
			
			//showing a colored square (blue or red) if candidate is leading, and a line if not
			fill(this.partyColor(c.party));
			if(c.leading){
				rect(this.x +12, rowY, 16, 16);
				textStyle(BOLD);
			}else{
				rect(this.x +18, rowY, 3, 16);
				textStyle(NORMAL);
			}
			
			//name and party
			fill(0);
			textSize(18);
			let cWidth = textWidth(c.name);
			text(c.name, this.x +36, rowY +1);
			
			fill(120);
			textSize(15);
			text(this.partyAbbrev(c.party), this.x +36+cWidth+8, rowY+3);
			
			//status
			textStyle(NORMAL);
			textAlign(RIGHT, TOP);
			if(c.leading){
				fill(this.partyColor(c.party));
				text("Leading", this.x + this.w -12, rowY +1);
			} else if (this.leader()==null){
				fill(170);
				text("-", this.x +this.w-12, rowY+1);
			}
			textAlign(LEFT, TOP);
			
			//line
			stroke(220);
			line(this.x+12, rowY+24, this.x+this.w-12, rowY +24);
			noStroke();
		}
		
		pop();
			
					

			
		}	
		
	}
	
