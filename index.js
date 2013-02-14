module.exports = actor;

var actor = function (pos, members) {
  return new Actor(pos, members);
};

var Actor = function (pos, members) {
  var self = this;
  self.x = pos.x;
  self.y = pos.y;
  self.last = {
    x: pos.x,
    y: pos.y
  };

  self.members = [];
  members.forEach(function (member) {
    addMember(self, member);
  });

  self.move = {
    to: function (pos) {
      moveActor(self, pos);
    },
    up: function () {
      moveActor(self, { self.x, self.y - 1 });
    },
    down: function () {
      moveActor(self, { self.x, self.y + 1 });
    },
    left: function () {
      moveActor(self, { self.x - 1, self.y });
    },
    right: function () {
      moveActor(self, { self.x + 1, self.y });
    },
  }
};

Actor.prototype.add = function (member) {
  addMember(this, member);
  return this;
};

var addMember = function (actor, member) {
  actor.members.push({
    el: member.el,
    x: member.x,
    y: member.y
  });
};

var moveActor = function (actor, pos) {
  actor.last.x = actor.x;
  actor.last.y = actor.y;
  actor.x = pos.x;
  actor.y = pos.y;
};
