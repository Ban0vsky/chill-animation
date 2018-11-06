const 	body = document.getElementsByTagName('body')[0],
		aesthetic = document.getElementById('aesthetic'),
		phone = document.getElementById('phone'),
		angle = 15,
		offset = 1,
		gravityPoint = 0.5
		spread = 250


function updatePosition(Y, X) {
	aesthetic.style.top = `${Y-20}px`
	aesthetic.style.left = `${X-80}px`

	phone.style.transform = `
		rotate3d(
			${(((Y/body.clientHeight)-gravityPoint)*-1)/offset},
			${((X/body.clientWidth)-gravityPoint)/(offset*2)},
			${(
				(((Y/body.clientHeight)-gravityPoint)*-1) + 
				((X/body.clientWidth)-gravityPoint))
			/(offset*8)},
			${angle}deg
		)
		translate(
			${(((X/body.clientWidth)-gravityPoint)/offset)*spread}px,
			${(((Y/body.clientHeight)-gravityPoint)/offset)*spread}px
		)

		translatez(-50px)
	`
}

function handleTouch(e) {
	updatePosition(e.changedTouches[0].clientY, e.changedTouches[0].clientX)
}
	
function handleMouse(e) {
	updatePosition(e.clientY, e.clientX)
}

body.addEventListener("mousemove", (e) => {handleMouse(e)});
body.addEventListener("touchmove", (e) => {handleTouch(e)}, false);



