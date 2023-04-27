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

exports.displayMemory = displayMemory;
