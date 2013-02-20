var uid = require('uid'),
    arrayize = require('arrayize'),
    dictionary = require('dictionary'),
    xy = require('xy');

var id = uid();

module.exports = function (pos, members) {
  return new Actor(pos, members);
};

var Actor = function (pos, members) {
  var self = this,
      pos = xy();

  this.id = id();

  this.x = pos.x;
  this.y = pos.y;
  this.move = pos.move;
  
  this.members = [];
  arrayize(members).forEach(function (member) {
    addMember(self, member);
  });

  this.actions = dictionary();
};

Actor.prototype.add = function (member) {
  addMember(this, member);
  return this;
};

Actor.prototype.act = function (collisionDetecton) {
  var self = this;
  this.actions.each(function (action) {
    self.last.x = self.x;
    self.last.y = self.y;

    action();
    collisionDetecton();
  });
};

var addMember = function (actor, member) {
  actor.members.push({
    tile: member.tile,
    x: member.x,
    y: member.y
  });
};
