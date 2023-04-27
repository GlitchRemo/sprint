const {readFileSync} = require('fs');
const sourceCode = readFileSync('./src/code.txt', 'utf-8');

const {createMemory, loadProgram} = require('./loader.js');
const {tokenizer, parser} = require('./parser.js');
const {put, add, subtract, jump} = require('./operations.js');
const {displayMemory} = require('./display.js');

const run = function() {
  const tokens = tokenizer(sourceCode);
  const byteCode = parser(tokens);
  const instructions = {
    0: put,
    1: add,
    2: subtract,
    3: jump
  };

  let memory = createMemory();
  memory = loadProgram(memory, byteCode);

  let programCounter = 0;
  let state = {memory, programCounter};

  while(state.memory[state.programCounter] !== 9) {
    const instruction = state.memory[state.programCounter];
    const operation = instructions[instruction];
    state = operation(state);
  }

  return memory[52];
}

exports.run = run;

