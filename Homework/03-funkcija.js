function skaitmenuKiekisSkaiciuje(x){
  if(typeof x !== 'number'){
      return ' Pateikta netinkamo tipo reiksme';
  } if (!isFinite (x)){
      return ' Pateikta netinkamo tipo reiksme';
  } else {
     return String (Math.floor(Math.abs(x))).length;
  }
}

console.log( skaitmenuKiekisSkaiciuje(5));
console.log( skaitmenuKiekisSkaiciuje(5127.585));
console.log( skaitmenuKiekisSkaiciuje(781));
console.log( skaitmenuKiekisSkaiciuje(37060123456));


console.log( skaitmenuKiekisSkaiciuje(true));
console.log( skaitmenuKiekisSkaiciuje('asd'));
console.log(skaitmenuKiekisSkaiciuje(NaN));