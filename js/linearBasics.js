// to make new points in space
var Point = function(x, y) {
	this.x = x;
	this.y = y;
};
// to move them around
var Vector = function(x1, x2) {
	this.x1 = x1;
	this.x2 = x2;
};
Vector.prototype.add = function(newAddVector) {
	this.x1 = this.x1 + newAddVector.x1;
	this.x2 = this.x2 + newAddVector.x2;
};
Vector.prototype.scalar = function(newScalar) {
	this.x1 = this.x1 * newScalar.x1;
	this.x2 = this.x2 * newScalar.x2;
};