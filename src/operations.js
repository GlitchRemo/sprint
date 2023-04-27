const put = function(state) {
  const {programCounter, memory} = state;
  const data = memory[programCounter + 1];
  const targetAddr = memory[programCounter + 2];

  memory[targetAddr] = data;
  state.programCounter += 3;

  return state;
}

const jump = function(state) {
  const {programCounter, memory} = state;
  state.programCounter = memory[programCounter + 1]; 

  return state;
}

const add = function(state) {
  const {programCounter, memory} = state;

  const addendAddr = memory[programCounter + 1];
  const augendAddr = memory[programCounter + 2];
  const targetAddr = memory[programCounter + 3];

  memory[targetAddr] = memory[augendAddr] + memory[addendAddr];
  state.programCounter += 4;

  return state;
}

const subtract = function(state) {
  const {programCounter, memory} = state;

  const subtrahendAddr = memory[programCounter + 1];
  const minuendAddr = memory[programCounter + 2];
  const targetAddr = memory[programCounter + 3];

  memory[targetAddr] = memory[subtrahendAddr] - memory[minuendAddr];
  state.programCounter += 4;

  return state;
}

exports.put = put;
exports.add = add;
exports.subtract = subtract;
exports.jump = jump;
