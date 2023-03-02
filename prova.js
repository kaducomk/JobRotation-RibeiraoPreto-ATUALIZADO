// QUEST 2


// QUEST 5

function inverteString(str) {
    let novaStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
      novaStr += str[i];
    }
    return novaStr;
  }
  
let minhaString = 'Job Rotation - Ribeirão Preto - ATUALIZADO'; // Titulo do exercício no site da gupy
let minhaStringInvertida = inverteString(minhaString);
console.log(minhaStringInvertida);
  