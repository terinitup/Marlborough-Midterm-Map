let squares=[];
let districts = [];
const allDistricts = {};


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

}

function transform_coordinates(p) {
    // map latitude/longitude to rect(0, 0, width, height)
    const x1 = -127;
    const x2 = -66;
    const y1 = 25;
    const y2 = 50;
    return [map(p[0], x1, x2, 0, width),
            map(p[1], y1, y2, height, height/8)]
}
		 
function draw_state(name) {

    polygons = state_data[name];

    for (let polygon of polygons) {
        beginShape();
        for (let point of polygon) {
            q = transform_coordinates(point); 
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
        draw_state(state);
    }

    for (let state in allDistricts){
        for (let d of allDistricts[state]){
            d.display();
                if (d.hover()){
                    noStroke();
                    text(d.ID, d.position.x, d.position.y - 10);
                }
        }
    }
}
		 
