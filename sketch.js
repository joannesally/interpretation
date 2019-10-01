function setup() {

createCanvas(1100, 600)

//orange table
	fill(255, 178, 102)
	
	noStroke()
	beginShape()
	vertex(0, 400)
	vertex(1100, 450)
	vertex(1100, 600)
	vertex(0, 600)

	endShape()

//background
	fill(102, 255, 255, 127)
	
	noStroke()
	beginShape()
	vertex(0, 400)
	vertex(1100,450)
	vertex(1100,0)
	vertex(0,0)

	endShape()

// vase bottom half
	noStroke()

	fill(255,217,179)
	beginShape()
	
	vertex(680, 370) 
	vertex(619, 497)
	vertex(460, 490)
	vertex(450, 400)

	endShape()

//flower background
	noStroke()
	fill(205,133,63)
	beginShape()
	ellipse(503, 283, 150, 130)
	endShape()

//vase top half
	noStroke()
	fill(255,212,128)


	beginShape()
	
	vertex(680, 370)
	vertex(640, 310)
	vertex(480, 320)
	vertex(450, 400)
	vertex(680, 370)
	

	endShape()


//stem
	push()
	strokeWeight(5)
	stroke(85,128,0)
	noFill()

	beginShape()
	curveVertex(492, 150)
	curveVertex(492, 150)
	curveVertex(503, 160)
	curveVertex(508, 180)
	curveVertex(508, 180)
	endShape()
	pop()

//stem
	push()
	strokeWeight(5)
	stroke(119,179,0)
	noFill()

	beginShape()
	curveVertex(638, 229)
	curveVertex(638, 229)
	curveVertex(664, 240)
	curveVertex(695, 309)
	curveVertex(695, 309)
	endShape()
	pop()

//stem
	push()
	strokeWeight(5)
	stroke(68,102,0)
	noFill()

	beginShape()
	curveVertex(630, 223)
	curveVertex(630, 223)
	curveVertex(658, 157)
	curveVertex(662, 123)
	curveVertex(662, 123)
	endShape()
	pop()

//stem
	push()
	strokeWeight(5)
	stroke(106,128,0)
	noFill()

	beginShape()
	curveVertex(634, 225)
	curveVertex(634, 225)
	curveVertex(660, 165)
	curveVertex(695, 119)
	curveVertex(695, 119)
	endShape()
	pop()

//flower bottom left
	noStroke()
	fill(218, 165, 32)
	beginShape()

	ellipse(440, 320, 120, 80)

	endShape()


//flower bottom middle
	noStroke()
	fill(184,134,11)
	beginShape()
	ellipse(517, 244, 110, 125)
	endShape()

	fill(85,107,47)
	beginShape()
	ellipse(520, 246, 30)
	endShape()


//flower bottom right
	noStroke()
	fill(220,130,30)
	beginShape()
	ellipse(600, 270, 130, 110)
	endShape()

	fill(128,128,0)
	beginShape()
	ellipse(623, 271, 37, 27)
	endShape()

//left bud
	noStroke()
	fill(25,77,0)
	beginShape()
	ellipse(430, 226, 105, 120)
	endShape()


//bottom right hanging flower
	noStroke()
	fill(204,136,0)
	beginShape()
	ellipse(696, 320, 37, 25)
	endShape()



//center flower
	noStroke()
	fill(205,133,63)
	beginShape()
	ellipse(587, 170, 125, 110)
	endShape()

	fill(204,102,0)
	beginShape()
	ellipse(587, 169, 45, 40)
	endShape()


//middle right flower
	noStroke()
	fill(230,153,0)
	beginShape()
	ellipse(718, 184, 130, 120)
	endShape()

	fill(153,77,0)
	beginShape()
	ellipse(715, 182, 50, 55)
	endShape()


//top left flower
	noStroke()
	fill(212,175,55)
	beginShape()
	ellipse(461, 96, 120, 125)
	endShape()

	fill(153,102,0)
	beginShape()
	ellipse(445, 81, 40, 50)
	endShape()



//top middle right flower
	noStroke()
	fill(255,179,25)
	beginShape()
	ellipse(652, 70, 135, 125)
	endShape()

	fill(102,68,0)
	beginShape()
	ellipse(650, 65, 60, 64)
	endShape()


//top middle left flower
	noStroke()
	fill(255,195,77)
	beginShape()
	ellipse(538, 73, 95, 110)
	endShape()
	
	fill(77,51,0)
	beginShape()
	ellipse(547, 72, 40, 53)
	endShape()



//top right flower
	noStroke()
	fill(230,115,0)
	beginShape()
	ellipse(734, 93, 95, 120)
	endShape()

	fill(153,102,0)
	beginShape()
	ellipse(754, 92, 20, 50)
	endShape()







//canvas frame
stroke(0)
noFill()
rect(0, 0, width, height)

}

function mouseClicked() {
	print(int(mouseX), int(mouseY))
}

