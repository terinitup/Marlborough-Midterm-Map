let squares=[];
let isDown=false;
let img=null;

let TopY;
let BottomY;

let data = {
	0: "Alabama",
	1:"Alaska",
	2: "Arizona",
	3: "Arkansas",
	4: "California",
	5: "Colorado",
	6: "Conneticut",
	7: "Deleware",
	8: "Florida",
	9:"Georgia"
}



async function setup() {
	img  = await loadImage('Usa.svg.webp');
	
  createCanvas(1200, 700);
 
  TopY=height/6;
  BottomY=random(height / 2, height - 50);
  //squares.push(new Square(width/6, TopY, 30));
  
   for (let col = 0; col <10; col++){
	for (let row = 0; row<1; row++){
		
		let x = 80 + col*80;
		let y = TopY + row*50;
		let id = data[col];
		squares.push(new Square(x, y, 50, id))

	}
  }
  
}

function draw() {
  background(255);
  
  if (img)
	image(img, 25, 25, 50, 50);

  
   for (let s of squares){
	s.shift();
	s.display();
	}

}
		 



function mousePressed(){
	isDown = !isDown;
	
	
	
	let targetY;
	if(isDown){
		targetY=BottomY;
		for(let s of squares){
		s.changeColor(232, 27, 35);

		}
		}else{
			targetY=TopY;
			for(let s of squares){
		s.changeColor(0, 174, 243);

		}
		}
	
	for(let s of squares){
		s.setTarget(s.pos.x, targetY);

		}
}
	//for (let i = 0; i < squares.length; i += 1) {
    //squares[i].setTarget(squares[i].pos.x, targetY);
	
	
	//for (let i = 0; i<vectors.length; i++){
	//	vectors[i].setTarget(vectors[i].pos.x, targetY);
		 
