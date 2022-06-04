// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const  pAequorFactory = (num, baseArr) => {
  return {
    specimenNum: num,
    dna: baseArr,
    mutate(){
      let base = returnRandBase();
      let randomStrand = math.floor(math.random()* 15);
      if (this.dna[randomStrand] !== base){
        this.dna[randomStrand] = base;
      }else{
        this.mutate();
      }
    },
    compareDNA(pAequor){
      let speciDNA = 0;
      for(i = 0; i < pAequor.dna.length; i++){
         if(this.dna[i] === pAequor.dna[i]){
           speciDNA += 1;
         }
      }
      console.log(`specimen #${ this.specimenNum } and specimen #${ pAequor.specimenNum } have ${ Math.floor(common*100/15) }% DNA in common`)
    },
    willLikelySurvive(){
      let result = this.dna.filter(base => base === 'C'|| base === 'G')
      return result.length / this.dna.length >= 0.6;
    }
  }
}
let pAequorsX = [];
let i = 0;
while(i < 30) {
  let temp = pAequorFactory(i, mockUpStrand());
  if (temp.willLikelySurvive()) {
    pAequorsX.push(temp);
    i++;
  }
  else {
    continue;
  }
}

console.log(pAequorsX.length)
console.log(pAequorsX.every(specie => specie.willLikelySurvive()))
