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

        if(this.stateName in vote_data)
        {	

            if(vote_data[this.stateName][this.ID] == 1){
                this.fill = color(0, 174, 243);
            }
            else if(vote_data[this.stateName][this.ID] == 2){
                this.fill = color(232, 27, 35);
            }
            else if(vote_data[this.stateName][this.ID] == 3){
                this.fill = color(255, 227, 87);
            }
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
