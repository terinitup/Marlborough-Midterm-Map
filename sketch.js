let districts = [];
const allDistricts = {};


function createDistricts(){
    for (let state in rectangle_list){
        allDistricts[state] = rectangle_list[state].makeDistricts();
    }
}

function setup() {

  createCanvas(windowWidth, windowHeight);
  initRectangleList()
  createDistricts();

}

function transform_coordinates(p) {
    // map latitude/longitude to rect(0, 0, width, height)
    const x1 = -127;
    const x2 = -66;
    const y1 = 25;
    const y2 = 50;
    return [map(p[0], x1, x2, 0, mapWidth),
            map(p[1], y1, y2, mapHeight/1.1, mapHeight/6)]
}

function alaska_coordinates(p) {
    // map latitude/longitude to rect(0, 0, width, height)
    const x1 = -168;
    const x2 = 179;
    const y1 = 51;
    const y2 = 65;
    return [map(p[0], x1, x2, mapWidth/11, mapWidth*1.2),
            map(p[1], y1, y2, mapHeight, mapHeight/1.17)]
}

function hawaii_coordinates(p) {
    // map latitude/longitude to rect(0, 0, width, height)
    const x1 = -161;
    const x2 = -154;
    const y1 = 18;
    const y2 = 23;
    return [map(p[0], x1, x2, mapWidth/4.2, mapWidth/2.57),
            map(p[1], y1, y2, mapHeight, mapHeight/1.17)]
}

		 
function draw_state(name, transformFunction) {

    polygons = state_data[name];

    for (let polygon of polygons) {
        beginShape();
        for (let point of polygon) {
            q = transformFunction(point); 
            vertex(q[0], q[1]);
        }
        endShape();
    }

}


function draw() {
  background(255);

    noFill();

    for (let state in state_data) {
        stroke(150, 150, 150);
        strokeWeight(1);
        draw_state(state, transform_coordinates);
    }

        stroke(0);
        strokeWeight(1);
        draw_state("Alaska", alaska_coordinates);    
        draw_state("Hawaii", hawaii_coordinates);

    let hovered = null;

    for (let state in allDistricts){
        for (let d of allDistricts[state]){
            d.display();
                if (d.hover()){
                    hovered = d;
                }
        }
    }
    
    //drawing the abbreviations
    
    fill(0);
    noStroke();
    textStyle(NORMAL);
    textFont("Serif");
    textSize(12);
    textAlign(LEFT, BOTTOM);
    
    
    for(let state in allDistricts){
		let first = allDistricts[state][0]; 	
		let last = allDistricts[state][allDistricts[state].length - 1];
	
		let r = rectangle_list[state];
		
		let top = first.position.y;
		let bottom = last.position.y + last.size;
		
		let left = first.position.x;
        let right = left + (min(r.columnCount, r.districtNum) - 1) * r.distance + first.size;
		
		if (stateMeta_data[state].label == "left"){
			textAlign(RIGHT, TOP);
			text(stateMeta_data[state].abbreviation, left-3, top);
		
		} else if(stateMeta_data[state].label=="right"){
			textAlign(LEFT, TOP);
			text(stateMeta_data[state].abbreviation, right +4, top);
			
		}else if(stateMeta_data[state].abbreviation=="NY"){
			textAlign(CENTER, BOTTOM);
			text(stateMeta_data[state].abbreviation, right-15, top-1);
			
		}else if(stateMeta_data[state].abbreviation=="WV"){
			textAlign(CENTER, TOP);
			text(stateMeta_data[state].abbreviation, left-1, bottom+1);
			
		}else if(stateMeta_data[state].abbreviation=="OH"){
			textAlign(CENTER, BOTTOM);
			text(stateMeta_data[state].abbreviation, left-1, top+1);
			
		}else if(stateMeta_data[state].abbreviation=="PA"){
			textAlign(RIGHT, TOP);
			text(stateMeta_data[state].abbreviation, left-3, top);
			
		}else if(stateMeta_data[state].abbreviation=="IN"){
			textAlign(CENTER, BOTTOM);
			text(stateMeta_data[state].abbreviation, (left +right)/2, top+1);

		}else if(stateMeta_data[state].abbreviation=="FL"){
			textAlign(RIGHT, TOP);
			text(stateMeta_data[state].abbreviation, left-25, top-15);
		}else if(stateMeta_data[state].abbreviation=="VT"){
			textAlign(CENTER, BOTTOM);
			text(stateMeta_data[state].abbreviation, (left +(right+3))/2, top);
			
		}else if(stateMeta_data[state].abbreviation=="VA"){
			textAlign(CENTER, BOTTOM);
			text(stateMeta_data[state].abbreviation, (left +right)/2, top);
		
		}else if(stateMeta_data[state].abbreviation=="CT"){
			textAlign(CENTER, TOP);
			text(stateMeta_data[state].abbreviation, right+3, bottom-7);
			
		}else if(stateMeta_data[state].abbreviation=="MD"){
			textAlign(CENTER, TOP);
			text(stateMeta_data[state].abbreviation, right-5, bottom+2);
		}else if(stateMeta_data[state].abbreviation=="NJ"){
			textAlign(LEFT, TOP);
			text(stateMeta_data[state].abbreviation, right +4, top+10);

		}else if(stateMeta_data[state].label=="bottom"){
			textAlign(CENTER, TOP);
			text(stateMeta_data[state].abbreviation, (left +right)/2, bottom+2);

		}
		else{
			textAlign(CENTER, BOTTOM);
			text(stateMeta_data[state].abbreviation, (left +right)/2, top-2);
		}
	}
    
  
	
	if (hovered) {
		let candidates = [];
		let tossup = false;
		let result = 0;         
		let stateData = district_data[hovered.stateName];

		if (stateData && stateData[hovered.ID]) {
			candidates = stateData[hovered.ID].candidates || [];
			if (stateData[hovered.ID]["tossup"] == "TRUE") {
				tossup = true;
			}
		}
		
		if (vote_data[hovered.stateName] && vote_data[hovered.stateName][hovered.ID]) {
			result = vote_data[hovered.stateName][hovered.ID];
		}

		let box = new InformationBox(mouseX + 15, mouseY + 15, hovered.stateName, hovered.ID, candidates, tossup, result);
		box.display();
    }
    
    let scoreboard = new ScoreBoard();
    scoreboard.display();
}


