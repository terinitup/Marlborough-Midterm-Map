class District {
    constructor(ID, mapPosition, seatPosition, fill, size) {
        this.ID = ID;
        this.mapPosition = mapPosition;
        this.seatPosition = seatPosition;
        this.position = mapPosition;
            this.size = size;
            this.t = 0;
            this.fill = fill;
    }

    display(){
        rect(this.position.x, this.position.y, this.size, this.size);
        fill(this.fill);
    }

    hover(){

    }

    moveToSenate(){

    }

    moveToMap(){

    }

}