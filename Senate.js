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
    
        let w = getSenateWinner(this.stateName);
        
         let senate = senate_data[this.stateName];
        let isTossup = senate && senate.tossup === "TRUE";
        
        
        if(w != -1){
            let party  = senate.candidates[w].party;
            this.fill = partyColor(party);
        } else if (isTossup) {
            this.fill = color(255, 227, 87);
        }else{
            this.fill = color(230);
        }
		noStroke();

		fill(this.fill);
		rect(this.position.x, this.position.y, this.size, this.size);

		
		if (isTossup && w != -1){
            stroke(255, 227, 97);
            strokeWeight(1);

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
            noFill();
            rect(this.position.x, this.position.y, this.size, this.size);
        }
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
