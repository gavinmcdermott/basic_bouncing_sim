$(function(){
	// set up my world rules
	var GRAVITY = new Vector(0, 9.81);
	var VERT_FRIC = 0.7;
	var HORIZ_FRIC = 0.85;

	// set up my world boundaries
	var bounds = {
		x1: 0,
		y1: 0
	};
	// capture window resize events to change bounds
	// thanks stackOverflow - http://bit.ly/VsOxHX
	$(window).resize(function(){
		bounds.x2 = $(window).width();
		bounds.y2 = $(window).height()-25;
	}).trigger("resize");

	// make a new GravityBall :) Constructor and Prototype
	window.GravityBall = function(point, velocity) {
		this.velocity = velocity || new Vector(10,10);
		this.position = point;
		// add it to page
		this.$domNode = $('<div class="dot"></div>');
		// console.log(this.position);
		$('body').append(this.$domNode);
		this.$domNode.css( {top: this.position.y, left: this.position.x} );
	};
	window.GravityBall.prototype = {
		// Hat tip to Shawn on having me set the position to the bounds :)
		// setting the position to the screen boundary tricks the eye into
		// seeing  collision only with that item
		checkVerticalBounds: function(){
			if (this.position.y < bounds.y1) {
				this.velocity.x2 = -this.velocity.x2 * VERT_FRIC;
				this.position.y = bounds.y1;
			} else if (this.position.y > bounds.y2) {
				this.velocity.x2 = -this.velocity.x2 * VERT_FRIC;
				this.position.y = bounds.y2;
			}
		},
		checkHorizontalBounds: function() {
			if (this.position.x < bounds.x1){
				this.velocity.x1 = -this.velocity.x1 * HORIZ_FRIC;
				// reduce the horizontal velocity
				this.velocity.x2 = this.velocity.x2 * 0.45;
				this.position.x = bounds.x1;
			} else if (this.position.x > bounds.x2) {
				this.velocity.x1 = -this.velocity.x1 * HORIZ_FRIC;
				// reduce the horizontal velocity too
				this.velocity.x2 = this.velocity.x2 * 0.45;
				this.position.x = bounds.x2;
			}
		},
		throwBall: function() {
			// add gravity to the current ball's vector - but scale it by a little bit
			// http://stackoverflow.com/questions/342189/how-do-i-apply-gravity-to-my-bouncing-ball-application
			this.velocity = this.velocity.addVector(GRAVITY.scale(0.1));
			// my version
			// this.velocity = this.velocity.addVector(GRAVITY);

			// check for collisions with walls
			this.checkVerticalBounds();
			this.checkHorizontalBounds();
			// change the x and y position of the ball based on the velocity changes
			// from the collision checks
			this.position.x += this.velocity.x1;
			this.position.y += this.velocity.x2;
			// set styling
			$(this.$domNode).css({
				top: this.position.y,
				left: this.position.x
			});
			// debugger;
			return;
		}
	};

	window.gravityBalls = [];

	$(document).mousedown(function(event){
		var ball = new Point(event.pageX, event.pageY);
		var vec = new Vector(30, -27);
		var b = new GravityBall(ball, vec);
		window.gravityBalls.push(b);
	});

	setInterval(function(){
		for (var i = 0; i < window.gravityBalls.length; i++) {
			window.gravityBalls[i].throwBall();
		}
	}, 23);


});