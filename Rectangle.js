class Rectangle{
    constructor(xStart, yStart, columnCount, districtNum, stateName, shiftVal){
        this.xStart = xStart;
        this.yStart = yStart;
        this.columnCount = columnCount;
        this.distance = mapWidth/105;
        this.districtNum = districtNum;
        this.stateName = stateName;
        this.shiftVal = shiftVal;
        this.id = 1;
    }

    findPosition(tempI){
        let j = int(tempI%this.columnCount);
        let i = int(tempI/this.columnCount);
        return createVector(this.xStart + j * this.distance + (i*this.shiftVal),
                      this.yStart + i * this.distance);
    }

    makeDistricts(){

        let districts = [];
        
        for(let i = 0; i < this.districtNum; i++){
            districts.push(new District(this.id, this.stateName, this.findPosition(i), this.findPosition(i)));
            this.id++;
        }

        return districts;
    }

}