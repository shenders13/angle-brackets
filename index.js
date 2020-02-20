const AnglesStack = require("./anglesStack.js");

const balanceAngles = angles => {
  // Validate angles is a string.
  if (typeof angles !== "string") {
    throw `Expected angles to be a string. Got ${typeof angles}.`;
  }

  // Validate angles is not an empty string.
  if (angles.length === 0) {
    throw `Expected angles to not be an empty string.`;
  }

  // Convert string to array.
  const anglesArray = angles.split("");

  // Validate angles only contains "<" and ">"
  const containsNonAngleCharacters =
    anglesArray.filter(angle => {
      return angle !== "<" && angle !== ">";
    }).length > 0;

  if (containsNonAngleCharacters) {
    throw `angles must only contain "<" and ">".`;
  }

  // Initialize a stack.
  const stack = new AnglesStack();

  for (let i = 0; i < anglesArray.length; i++) {
    const angle = anglesArray[i];

    if (stack.isEmpty) {
      stack.push(angle);
      continue;
    }

    if (stack.peek === ">" && angle === "<") {
      stack.push("<");
      continue;
    }

    if (stack.peek === ">" && angle === ">") {
      stack.push(">");
      continue;
    }

    if (stack.peek === "<" && angle === "<") {
      stack.push("<");
      continue;
    }

    if (stack.peek === "<" && angle === ">") {
      stack.pop();
      continue;
    }
  }

  // Return angles if they are already balanced.
  const areAnglesBalanced = stack.isEmpty;
  if (areAnglesBalanced) {
    return angles;
  }

  // if top of stack is ">"", prepend "<"
  if (stack.peek === ">") {
    return balanceAngles("<" + angles);
  }

  // if top of stack is "<, prepend "<"
  if (stack.peek === "<") {
    return balanceAngles(angles + ">");
  }
};

module.exports = balanceAngles;
