class AnglesStack {
  constructor() {
    this._angles = [];
  }

  push(angle) {
    this._angles.push(angle);
  }

  pop() {
    this._angles.pop();
  }

  get isEmpty() {
    return this._angles.length === 0;
  }

  get peek() {
    if (this.isEmpty) return null;
    return this._angles[this._angles.length - 1];
  }
}

module.exports = AnglesStack;
