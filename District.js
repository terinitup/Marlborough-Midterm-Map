class District {
    constructor(ID, mapPosition, seatPosition, fill, size) {
        this.ID = ID;
        this.mapPosition = mapPosition;
        this.seatPosition = seatPosition;
        this.position = mapPosition;
            this.size = size;
            this.fill = fill;
            this.t = 0;
    }

    display(){
        rect(this.position.x, this.position.y, this.size, this.size);
        fill(this.fill);
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