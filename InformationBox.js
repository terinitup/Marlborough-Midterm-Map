class InformationBox{
	constructor(x, y, state, districtNum, candidates){
		this.x = x;
		this.y=y;
		this.w=300;
		this.h=130;
		
		this.state = state;
		this.districtNum=districtNum;
		this.candidates=candidates;
		
	}
	
	leader(){
		for (let c of this.candidates){
			if(c.leading){
				return c.party;
			}
		}
		return null;
	}
	
	display(){
		
		rectMode(CORNER);
		
		//box
		stroke(200);
		fill(255);
		rect(this.x, this.y, this.w, this.h);
		
		//accent bar
		noStroke();
		if (this.leader() == "Democrat"){
			//Dem. blue
			fill(0, 174, 243);
		} else if (this.leader()=="Republican"){
			fill(232, 27, 35);
		}else{
			fill(180);
		}
		rect(this.x, this.y, this.w, 6, 6, 6, 0, 0);
		
		//Title
		fill(0);
		textAlign(LEFT, TOP);
		textSize(16);
		textFont('Serif');
		 textStyle(BOLD);
		text(this.state.toUpperCase() + " DISTRICT " + this.districtNum, this.x + 10, this.y +14);
		
		
		//Candidates
		for(let i = 0; i <this.candidates.length; i++){
			let c = this.candidates[i];
					 textStyle(NORMAL);

			text(c.name + " | " + c.party, this.x +10, this.y + 40 + i*20);
			
		}	
		
	}
	
}
