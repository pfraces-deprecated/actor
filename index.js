var uid = require('uid'),
    dictionary = require('dictionary'),
    xy = require('xy');

var id = uid();

module.exports = function (pos, members) {
  return new Actor(pos, members);
};

var Actor = function (x, y, members) {
  var self = this,
      pos = xy(x, y);

  this.id = id();

  this.x = pos.x;
  this.y = pos.y;
  this.move = pos.move;
  
  this.members = [];
  members && members.forEach(function (member) {
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
