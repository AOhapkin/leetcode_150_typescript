function DNAStrand(dna) {
  //your code here
  const map = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C'
  };

  let output = [];

  for (let i = 0; i < dna.length; i++) {
    output.push(map[dna[i]]);
  }

  return output.join('');
}


console.log(DNAStrand("ATTGC"));