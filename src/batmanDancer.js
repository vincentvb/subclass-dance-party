var BatmanDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps)
}

BatmanDancer.prototype = Object.create(MakeDancer.prototype);
BatmanDancer.prototype.constructor = BatmanDancer


BatmanDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this)
  this.$node.toggle();
}
