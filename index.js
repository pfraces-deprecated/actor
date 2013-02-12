module.exports = actor;

var actor = function (pos) {
  return new Actor(pos);
};

var Actor = function (pos) {
  var self = this;
  self.pos.x = pos.x;
  self.pos.y = pos.y;
  self.members = [];
  self.move = {
    to: function (pos) {
      moveActor(self, pos);
    }
  }
};

Actor.prototype.add = function (el, pos) {
  this.members.push({
    el: el,
    pos: {
      x: pos.x,
      y: pos.y
    }
  });
  return this;
};

moveActor = function (actor, pos) {
  actor.pos.x = pos.x;
  actor.pos.y = pos.y;
};
