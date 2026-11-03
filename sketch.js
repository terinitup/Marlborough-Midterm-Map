let districts = [];
const allDistricts = {};
const allSenate = {};
let creditbox;
let tossupkey;
let scoreboard;


function isDem(party){
	return party == "Democratic" || party == "DFL" || party == "Democratic-NPL";
}

function partyColor(party){
    if (isDem(party)){
        return color(0, 174, 243);
    } else if (party == "Republican"){
        return color(232, 27, 35);
    }
    return color(255, 227, 87);
}

function getHouseWinner(state, id){
    return vote_data[state][id];
}

function getSenateWinner(state){
    return senate_vote[state];
}

function createDistricts(){
    for (let state in rectangle_list){
        allDistricts[state] = rectangle_list[state].makeDistricts();
    }
}
function createSenate(){
    for (let state in senate_position_list){
        allSenate[state] = new Senate(state, createVector(senate_position_list[state][0], senate_position_list[state][1]));
    }
}

function setup() {

  createCanvas(windowWidth, windowHeight);
  initRectangleList()
  createDistricts();
  createSenate();
  creditbox = new CreditBox();
  tossupkey = new TossupKey();

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

function keyPressed() {
  if (key === 'h' || key === 'H') {
    mapMODE = "HOUSE";
  } else if (key === 's' || key === 'S') {
    mapMODE = "SENATE";
  }
  console.log("map mode:", mapMODE);
}


function draw() {
  background(255);


    noFill();

    for (let state in state_data) {
        stroke(150);
        strokeWeight(1);
        draw_state(state, transform_coordinates);
    }

        stroke(150);
        strokeWeight(1);
        draw_state("Alaska", alaska_coordinates);    
        draw_state("Hawaii", hawaii_coordinates);

    let hovered = null;

    if(mapMODE == "HOUSE"){
        for (let state in allDistricts){
            for (let d of allDistricts[state]){
                d.display();
                if (d.hover()){
                  hovered = d;
                }
            }
        }
    } else if(mapMODE == "SENATE"){
        for (let state in allSenate){
            let s = allSenate[state];
            s.display();
            if (s.hover()){
              hovered = s;
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
    
    if(mapMODE == "HOUSE"){
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
          } else if (mapMODE == "SENATE"){
        for (let state in allDistricts){   // all 50 states

            let s;
            if (allSenate[state]){
                s = allSenate[state];   // has a Senate square
             }else {
                s = allDistricts[state][floor(allDistricts[state].length / 2)];   // middle House square
            }

            let left = s.position.x;
            let right = s.position.x + s.size;
            let top = s.position.y;
            let bottom = s.position.y + s.size;
            
			if (stateMeta_data[state].abbreviation=="NY"){
                textAlign(RIGHT, TOP);
                text(stateMeta_data[state].abbreviation, left-2, top-5);
                
           } else if(stateMeta_data[state].abbreviation=="CT"){
                text(stateMeta_data[state].abbreviation, left-3.5, top+13);
                
           } else if(stateMeta_data[state].abbreviation=="MD"){
                text(stateMeta_data[state].abbreviation, left+10, top+3);
                
           } else if(stateMeta_data[state].abbreviation=="VT"){
                text(stateMeta_data[state].abbreviation, left+4, top+2);
                
           } else if(stateMeta_data[state].abbreviation=="HI"){
                text(stateMeta_data[state].abbreviation, left-3, top+10);
                
           } else if(stateMeta_data[state].abbreviation=="CA"){
                text(stateMeta_data[state].abbreviation, left-35, top-45);
           
           } else if(stateMeta_data[state].abbreviation=="PA"){
                text(stateMeta_data[state].abbreviation, left, top+6);

           } else if (stateMeta_data[state].senateLabel == "left"){
                textAlign(RIGHT, TOP);
                text(stateMeta_data[state].abbreviation, left - 3, top);

            } else if (stateMeta_data[state].senateLabel == "right"){
                textAlign(LEFT, TOP);
                text(stateMeta_data[state].abbreviation, right + 4, top);

            } else if(stateMeta_data[state].senateLabel=="bottom"){
                textAlign(CENTER, TOP);
                text(stateMeta_data[state].abbreviation, (left +right)/2, bottom+2);

            } else {
                textAlign(CENTER, BOTTOM);
                fill(0);
				noStroke();
				textStyle(NORMAL);
				textFont("Serif");
				textSize(12)
                text(stateMeta_data[state].abbreviation, (left + right) / 2, top - 1.5);
            }
        }
    }
	
	if (hovered) {
        if(mapMODE == "HOUSE"){
            let district = district_data[hovered.stateName][hovered.ID];
            let candidates = district.candidates;
            let tossup = false;

            if (district.tossup=="TRUE") {
                tossup = true;
            }

            let winner = getHouseWinner(hovered.stateName, hovered.ID);

            let box = new InformationBox(mouseX + 15, mouseY + 15, hovered.stateName, hovered.ID, candidates, tossup, winner);
            box.display();
        } else if(mapMODE == "SENATE"){
            let senate = senate_data[hovered.stateName];
            let candidates = senate.candidates;
            let tossup = false;

            if (senate.tossup=="TRUE") {
                tossup = true;
            }

            let winner = getSenateWinner(hovered.stateName);

            let box = new InformationBox(mouseX + 15, mouseY + 15, hovered.stateName, undefined, candidates, tossup, winner);
            box.display();
        }
    }
    
    if(mapMODE == "HOUSE"){
        scoreboard = new ScoreBoard();
        scoreboard.display();
    }
    if(mapMODE == "SENATE"){
        scoreboard = new SenateScoreBoard();
        scoreboard.display();
    }
    creditbox.display();
    tossupkey.display();

    noStroke();
    textFont('Serif');
    textSize(13);
    textStyle(NORMAL);
    textAlign(RIGHT, BASELINE);

    fill(34, 34, 34);
    text('Results are as reported by The Associated Press at APNews.com', mapWidth - 10, mapHeight-10);

    textAlign(RIGHT, BASELINE);
    fill(34);
    text('Press "H" and "S" to toggle between House and Senate views', mapWidth - 10, mapHeight/6.5);

}


