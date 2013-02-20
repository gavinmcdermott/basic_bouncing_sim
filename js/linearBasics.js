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
	return new Vector(this.x1 + vector.x1, this.x2 + vector.x2);
};
Vector.prototype.scale = function(newScale) {
	return new Vector(this.x1 * newScale, this.x2 * newScale)
};