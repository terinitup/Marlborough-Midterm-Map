let districts = [];
const allDistricts = {};
let district_data;




let data = {
	0: "One",
	1: "Two",
	2: "Three",
	3: "Four",
	4: "Five",
	5: "Six",
	6: "Seven",
	7: "Eight",
	8: "Nine",
	9: "Ten"
}

function createDistricts(){
    for (let state in rectangle_list){
        allDistricts[state] = rectangle_list[state].makeDistricts();
    }
}

function setup() {

  createCanvas(windowWidth, windowHeight);
  initRectangleList()
  createDistricts();
  
  district_data = {
  "California": CA_district_data
};

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
        stroke(0);
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
    textFont("Serif");
    textSize(14);
    textAlign(LEFT, BOTTOM);
    
    for(let state in allDistricts){
		let first = allDistricts[state][0]; 		
		text (stateMeta_data[state].abbreviation, first.position.x, first.position.y -4);
	}
    
  
	
	if(hovered){
		let candidates = [];
		let tossup = false;
		let stateData = district_data[hovered.stateName];
		
		if (stateData && stateData[hovered.ID]){
        candidates = stateData[hovered.ID].candidates;
        if(stateData[hovered.ID].tossup){
			}
		}
			
		let box = new InformationBox(mouseX + 15, mouseY + 15, hovered.stateName, hovered.ID, candidates);
		box.display();
    }
}

