class Rectangle{
    constructor(xStart, yStart, rowCount, districtNum, stateName){
        this.xStart = xStart;
        this.yStart = yStart;
        this.rowCount = rowCount;
        this.distance = width/90;
        this.districtNum = districtNum;
        this.stateName = stateName;
        this.id = 1;
    }

    findPosition(tempI){
        return createVector(this.xStart + (tempI%this.rowCount) * this.distance,
                      this.yStart + int(tempI/this.rowCount) * this.distance);
    }

    makeDistricts(){

        let districts = [];
        
        for(let i = 0; i < this.districtNum; i++){
            districts.push(new District(this.id, this.stateName, this.findPosition(i), this.findPosition(i), color(0, 174, 243)));
            this.id++;
        }

        return districts;
    }

}