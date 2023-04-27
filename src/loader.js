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

const loadProgram = function(memory, program) {
  for(let index = 0; index < program.length; index++) {
    memory[index] = program[index];
  }

  return memory;
}

exports.createMemory = createMemory;
exports.loadProgram = loadProgram;
