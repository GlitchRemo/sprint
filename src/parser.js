const tokenizer = function(string) {
  string = string.replace(/\n/g, ' ');
  string = string.replace(/:\s/g, ':');

  return string.trim().split(/\s+/g);
}

const isToken = function(candidate) {
  return /:/.test(candidate);
}

const toNumber = function(stringifiedNumber) {
  return +stringifiedNumber;
}

const filterSymbols = function(symbolTable, potentialSymbol, index) {
  if(isToken(potentialSymbol)) {
    const symbol = potentialSymbol.match(/(.*):/)[1];
    symbolTable[symbol] = index;
  }

  return symbolTable;
}

const parser = function(tokens) {
  const symbolTable = tokens.reduce(filterSymbols, {});
  let stringifiedTokens = JSON.stringify(tokens);
  stringifiedTokens = stringifiedTokens.replace(/\w+:/g, '');

  for(const symbol in symbolTable) {
    stringifiedTokens = stringifiedTokens.replaceAll(symbol, symbolTable[symbol]);
  }

  return JSON.parse(stringifiedTokens).map(toNumber);
}

exports.tokenizer = tokenizer;
exports.parser = parser;
