class District {
    constructor(ID, stateName, mapPosition, seatPosition) {
        this.ID = ID;
        this.stateName = stateName; 
        this.mapPosition = mapPosition;
        this.seatPosition = seatPosition;
        this.position = mapPosition;
            this.size = mapWidth/130;
            this.fill = color(230);
            this.t = 0;
    }

    display(){
        noStroke();
        
        let w = getWinner(this.stateName, this.ID);
        let district = district_data[this.stateName][this.ID];
        let isTossup = (district.tossup == "TRUE");


        if(w != -1){
			this.fill = partyColor(district.candidates[w].party);
		 } else if (district.tossup == "TRUE"){
            this.fill = color(255, 227, 87); 
		}else{
			this.fill = color(230);
		}
		
		fill(this.fill);
		rect(this.position.x, this.position.y, this.size, this.size);
		
		if(isTossup && w != -1){
			stroke(255, 227, 97);
			strokeWeight(1.5);
			
			let x = this.position.x;
            let y = this.position.y;
            let s = this.size;

            for (let c = 3; c < s * 2; c += 4){
                line(x + max(0, c - s), y + min(c, s),
                     x + min(c, s),     y + max(0, c - s));
            }
		}


    

        if(this.hover()){
            stroke(0);
            strokeWeight(1);
        }
       
    }

    hover(){
        if(mouseX > this.position.x && mouseX < this.position.x + this.size &&
           mouseY > this.position.y && mouseY < this.position.y + this.size) {
            return true;
        }
        else{
            return false;
        }
        
    }

    moveToSenate(){
        
    }

    moveToMap(){

    }

}
