class Senate {
    constructor(stateName, mapPosition) {
        this.stateName = stateName; 
        this.mapPosition = mapPosition;
        this.position = mapPosition;
            this.size = mapWidth/90;
            this.fill = color(230);
            this.t = 0;
    }

    display(){
        noStroke();
    
        let w = getSenateWinner(this.stateName);
        if(w != -1){
            let party  = senate_data[this.stateName].candidates[w].party;
            this.fill = partyColor(party);
        }else{
            this.fill = color(200);
        }
		
		fill(this.fill);

        if(this.hover()){
            stroke(0);
            strokeWeight(1);
        }
        rect(this.position.x, this.position.y, this.size, this.size);
       // if (this.hover()){
           // text(this.ID, this.position.x, this.position.y - 10);
           // stroke(0);
           // strokeWeight(2);
	   // }
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
