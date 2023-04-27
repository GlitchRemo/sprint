const jump = function(state) {
  const {programCounter, program} = state;
  state.programCounter = program[programCounter + 1]; 

  return state;
}

const put = function(state) {
  const {programCounter, program} = state;
  const data = program[programCounter + 1];
  const targetAddr = program[programCounter + 2];

  program[targetAddr] = data;
  state.programCounter += 3;

  return state;
}

const add = function(state) {
  const {programCounter, program} = state;

  const addendAddr = program[programCounter + 1];
  const augendAddr = program[programCounter + 2];
  const targetAddr = program[programCounter + 3];

  program[targetAddr] = program[augendAddr] + program[addendAddr];
  state.programCounter += 4;

  return state;
}

const subtract = function(state) {
  const {programCounter, program} = state;

  const subtrahendAddr = program[programCounter + 1];
  const minuendAddr = program[programCounter + 2];
  const targetAddr = program[programCounter + 3];

  program[targetAddr] = program[subtrahendAddr] - program[minuendAddr];
  state.programCounter += 4;

  return state;
}

const createMemory = function() {
  const memorySize = 1000;
  let memory = [];
  let cell = 0;

  while(cell < memorySize) {
    memory.push('-');
    cell++;
  }

  return memory;
}

const pad = function(word) {
  const l = word.length;

  if(l % 2 === 0) return word;

  chars = word.split('');
  chars[Math.floor(l / 2)] += ' ';

  return chars.join('');
}

const displayMemory = function(memory) {
  let terms = 1;
  let line = "";

  while(terms <= 100) {
    const cell = "| " + memory[terms - 1] + " |";
    line = line + pad(cell);

    if(terms % 10 === 0){
      line = line + '\n';
    }

    terms++;
  }

  console.log(line);
}

const loadProgram = function(memory, program) {
  for(let index = 0; index < program.length; index++) {
    memory[index] = program[index];
  }

  return memory;
}

const run = function() {
  let memory = createMemory();
  let state = {
    program: memory,
    programCounter: 0
  };

  let code = [
    3, 2,
    0, 2, 50, 
    0, 3, 51, 
    1, 50, 51, 52, 
    9
  ];

  const instructions = {
    0: put,
    1: add,
    2: subtract,
    3: jump
  };

  memory = loadProgram(memory, code);

  while(state.program[state.programCounter] !== 9) {
    const instruction = state.program[state.programCounter];
    const operation = instructions[instruction];
    state = operation(state);
  }

  //   displayMemory(memory);
  return memory[52];
}

exports.run = run;

