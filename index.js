var arrayize = require('arrayize');

module.exports = function (pos, members) {
  return new Actor(pos, members);
};

var Actor = function (pos, members) {
  var self = this;
  this.x = pos.x;
  this.y = pos.y;

  this.members = [];
  arrayize(members).forEach(function (member) {
    addMember(self, member);
  });

  this.move = {
    to: function (pos) {
      moveActor(self, pos);
    },
    up: function () {
      moveActor(self, { x: self.x, y: self.y - 1 });
    },
    down: function () {
      moveActor(self, { x: self.x, y: self.y + 1 });
    },
    left: function () {
      moveActor(self, { x: self.x - 1, y: self.y });
    },
    right: function () {
      moveActor(self, { x: self.x + 1, y: self.y });
    },
  }
};

Actor.prototype.add = function (member) {
  addMember(this, member);
  return this;
};

Action.prototype.action = function (action) {
  this.action = action;
};

var addMember = function (actor, member) {
  actor.members.push({
    el: member.el,
    x: member.x,
    y: member.y
  });
};

var moveActor = function (actor, pos) {
  actor.x = pos.x;
  actor.y = pos.y;
};
