// Point Constructor to make new points in space
var Point = function(x, y) {
	this.x = x;
	this.y = y;
};
// Vector constructor to move them around
var Vector = function(x1, x2) {
	this.x1 = x1;
	this.x2 = x2;
};
Vector.prototype.addVector = function(vector) {
	this.x1 = this.x1 + vector.x1;
	this.x2 = this.x2 + vector.x2;
	return this;
};
Vector.prototype.scalar = function(newScalar) {
	this.x1 = this.x1 * newScalar;
	this.x2 = this.x2 * newScalar;
	return this;
};