$(function(){
	// set up my world rules
	var GRAVITY = new Vector(0, 9.81);
	var DRAG = 0.70;

	// set up my world boundaries
	var bounds = {
		x1: 0,
		y1: 0
	};
	// capture window resize events to change bounds
	// thanks stackOverflow - http://bit.ly/VsOxHX
	$(window).resize(function(){
		bounds.x2 = $(window).width();
		bounds.y2 = $(window).height();
	}).trigger("resize");

	// make a new GravityBall :) Constructor and Prototype
	window.GravityBall = function(point, velocity) {
		this.velocity = velocity || new Vector(-10,0);
		this.position = point;
		// add it to page
		this.$domNode = $('<div class="dot"></div>');
		console.log(this.position);
		$('body').append(this.$domNode);
		this.$domNode.css( {top: this.position.y, left: this.position.x} );
	};
	window.GravityBall.prototype = {
		removeFromView: function() {
			$(this.$domNode).css({'display': 'none'});
		},
		move: function() {
			// then add the resulting vector to the ball's current vector
			this.velocity = this.velocity.addVector(GRAVITY);

			// check for collisions and change appropriately
			// Hat tip to Shawn on having me set the position to the bounds :)
			if (this.position.y < bounds.y1) {
				console.log("hit top");
				this.velocity.x2 = -this.velocity.x2 * DRAG;
				this.position.y = bounds.y1;
			} else if (this.position.y > bounds.y2) {
				console.log("hit bottom");
				this.velocity.x2 = -this.velocity.x2 * DRAG;
				this.position.y = bounds.y2;
			};

			if (this.position.x < bounds.x1){
				console.log("hit left");
				this.velocity.x1 = -this.velocity.x1 * DRAG;
				this.position.x = bounds.x1;
			} else if (this.position.x > bounds.x2) {
				console.log("hit hit right");
				this.velocity.x1 = -this.velocity.x1 * DRAG;
				this.position.x = bounds.x2;
			};

			// change the x and y position of the ball
			this.position.x += this.velocity.x1;
			this.position.y += this.velocity.x2;

			// set styling for the movement on screen to actuallly render
			$(this.$domNode).css({
			    top: this.position.y,
			    left: this.position.x
			});
			return;
		}
	};

	window.gravityBalls = [];

	$(document).mousedown(function(event){
		var ball = new Point(event.pageX, event.pageY);
		var vec = new Vector(50, -50);
		var b = new GravityBall(ball, vec);
		window.gravityBalls.push(b)
	});

	setInterval(function(){
		for (var i = 0; i < window.gravityBalls.length; i++) {
		    window.gravityBalls[i].move();
		}
	}, 30);

	// var point = new Point(300, 150);
	// new GravityBall(point);

});