var SuperHeroDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps)
}

SuperHeroDancer.prototype = Object.create(MakeDancer.prototype);
SuperHeroDancer.prototype.constructor = SuperHeroDancer;

SuperHeroDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  this.$node.toggle();
}
