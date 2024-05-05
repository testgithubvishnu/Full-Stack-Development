var human = {
  canFly: false,
  canTalk: true,
  canEmotions: true,
  canWalk: true,
};
var alien = {
  canEat: true,
  canSleep: false,
  candrink: true,
};

alien.__proto__ = human;
