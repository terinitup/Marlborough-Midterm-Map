class District {
    constructor(ID, stateName, mapPosition, seatPosition, fill) {
        this.ID = ID;
        this.stateName = stateName; 
        this.mapPosition = mapPosition;
        this.seatPosition = seatPosition;
        this.position = mapPosition;
            this.size = width/130;
            this.fill = fill;
            this.t = 0;
    }

    display(){
        noStroke();
        fill(this.fill);
        rect(this.position.x, this.position.y, this.size, this.size);
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