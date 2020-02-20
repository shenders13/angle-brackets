# Description of the problem

Given a string containing "<" and ">" only, balance the string so that every open has a close.

For example:

- "<>" should return "<>"

- "<" should return "<>"

- ">" should return "<>"

- "><<><" should return "<><<><>>"

# Location of code

- The main `balanceAngles` function is in `index.js`.
- I used a stack as a helper. That is defined in `anglesStack.js`
- The tests are in `index.test.js`

# How to run the tests

1. Clone the repo
2. `yarn install && yarn test`
