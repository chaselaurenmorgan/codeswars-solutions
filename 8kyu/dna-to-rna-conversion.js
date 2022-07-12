// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.



function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
    let rna = ''
    for(let i = 0; i < dna.length; i++){
        if(dna[i] === 'T'){
            rna += 'U'
        }else {
            rna += dna[i]
        }
    }
    return rna
  }



  /*
Create a function that replaces 'T' with 'U'
Parameter is string with capital letters, 'G','C','A','T','U' and it mght be empty 
Returning a string with the letters 'G','C','A','U', there not be a 'T'
Example - "GCAT"  =>  "GCAU", "TTTT"  =>  "UUUU",  GACCGCCGCC =>GACCGCCGCC
Pseudocode - 
Need replace the 'T' with the 'U'
  1. with a replaceAll() or a for loop 
  2. using a replaceAll(), return dna.replaceAll('T','U')
  3. using a for loop, in our initialization 
    for(initilazation let i = 0; condition i < dna.length; final expression i++ ){
        if(dna[i] === 'T'){
            rna += 'U'
        }else{
            rna += dna[i]
        }
        return rna 
    }

  */