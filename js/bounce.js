$(function(){
	// set up my world rules
	var GRAVITY = new Vector(0, -9.81);
	var DRAG = 0.8;

	// set up my world boundaries
	var bounds = {
		x1: 0,
		y1: 0
	};
	// capture window resize events to change bounds
	$(window).resize(function(){
		bounds.x2 = $(window).width();
		bounds.y2 = $(window).height();
	}).trigger("resize");

	// make a new GravityBall :) Constructor and Prototype
	window.GravityBall = function(x, y, x1, x2) {
		// ??? Ask about best way to make default vars

		// set the basics
		this.position = new Point(x, y);
		this.velocity = new Vector(10, 0);
		// add it to page
		this.$domNode = $('<div class="dot"></div>');
		$('body').append(this.$domNode);
		this.$domNode.css( {top: x, left: y} );
	};
	GravityBall.prototype = {
		removeFromView: function() {
			$(this).remove();
		},
		render: function() {
			// scale the GRAVITY vector, then add to current vector
			this.vector = this.vector.add(GRAVITY.scale(0.1));


		}
	};

	// var ball = new GravityBall(300, 150);

});




// Fail 2

// // set up the boundaries
// var friction = 0.981;
// var bounds = {
// 	x1: 0,
// 	y1: 0
// };
// // capture resize events for the window
// // to change the bounds when we resie
// $(window).resize(function(){
// 	bounds.x2 = $(window).width();
// 	bounds.y2 = $(window).height();
// }).trigger("resize");

// console.log(bounds);

// var balls = [];

// var Ball = function(x, y, size) {
// 	this.x = x;
// 	this.y = y;
// 	// this.center = (0.5,);
// 	this.size = size;
// 	this.$domNode = $('<div class="dot"></div>');
// 	this.$domNode.css({
// 		'border-radius': this.size,
// 		'top': this.y,
// 		'left': this.x
// 	});
// };
// Ball.prototype.move = function(dx, dy) {
// 	if (this.x+this.size >= bounds.x2) {
// 		this.x = bounds.x2 - this.size;
// 		x = 0;
// 		y = 0;
// 		this.setPos(x, y);
// 	} else if (this.y+this.size >= bounds.y2) {
// 		this.y = bounds.y2 - this.size;
// 		y = 0;
// 		x = 0;
// 		this.setPos(x, y);
// 	} else if (this.y <= bounds.y1) {
// 		this.y = bounds.y1;
// 		y = 0;
// 		x = 0;
// 		this.setPos(x, y);
// 	} else if (this.x <= bounds.x1) {
// 		this.x = bounds.x1;
// 		y = 0;
// 		x = 0;
// 		this.setPos(x, y);
// 	} else {
// 		this.setPos(dx, dy);
// 	}
// };
// Ball.prototype.setPos = function(x, y) {
// 	this.$domNode.css({top: this.y+y, left: this.x+x});
// 	this.y = this.y+y;
// 	this.x = this.x+x;
// };
// Ball.prototype.fire = function(dirX, dirY) {
// 	setInterval(function (){
// 		this.move(dirX,dirY);
// 	}.bind(this), 0.1);
// };

// $(document).mouseup(function(event){
// 	var ball = new Ball(event.pageX, event.pageY, 20);
// 	$('body').append(ball.$domNode);
// 	// balls.push(ball);
// 	ball.fire(velocity.x, velocity.y);
// });

// var velocity = {
// 	x: 1,
// 	y: 10
// };

// $(document).keydown(function(e) {
//    switch (e.which) {
//    case 38:
// 		//up arrow key
// 		velocity.y += 1;
//      break;
//    case 40:
// 		//bottom arrow key
// 		velocity.y -= 1;
//      break;
//    }
// });
