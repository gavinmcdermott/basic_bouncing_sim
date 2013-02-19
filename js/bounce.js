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
	// thanks stackOverflow - http://bit.ly/VsOxHX
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
		move: function() {
			// scale the GRAVITY vector,
			// then add the resulting vector to the ball's current vector
			this.vector = this.vector.add(GRAVITY.scale(0.1));

			// change the x and y position of the ball

			// check for collisions and change appropriately

			// set styling for the movement on screen to actuallly render


		}
	};

	var ball = new GravityBall(300, 150);

});