class InformationBox{
	constructor(x, y, state, districtNum, candidates, w=220){
		this.x = x;
		this.y=y;
		this.w=w;
		
		this.state = state;
		this.districtNum=districtNum;
		this.candidates=[];
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
		text(this.state = " District " + this.districtNum, this.x + 10, this.y +14);
		
		//Candidates
		for(let i = 0; i <this.candidates.length; i++){
			let c = this.candidates[i];
			text(c.name + " | " + c.party, this.x +10, this.y + 40 + i*20);
			
		}	
		
	}
	
}
