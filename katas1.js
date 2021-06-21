function position(letter){
    let alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let codigos = [];
    for (let i in letter) {
      codigos.push(alfabeto.indexOf(letter[i].toUpperCase()) + 1);
    }
    return codigos;
  }
  let result = position('');
  for (let i in result) {
    return "Position of alphabet:" + codigos
  }