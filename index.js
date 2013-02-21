var uid = require('uid'),
    task = require('task'),
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

  this.actions = task();
};

Actor.prototype.add = {
  member: function (member) {
    addMember(this, member);
  return this;
};

var addMember = function (actor, member) {
  actor.members.push({
    tile: member.tile,
    x: member.x,
    y: member.y
  });
};
