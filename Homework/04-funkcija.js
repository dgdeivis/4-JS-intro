

function didziausiasSkaiciusSarase(numeris){
     if (!numeris.length){
        return 'Pateiktas sarasas negali buti tuscias';
    } if (typeof numeris == 'number') {
        return 'Skaicius yra';
    } if (typeof numeris !== 'object'){
        return 'Pateikta netinkamo tipo reiksme';
    } let max = numeris[0];
    for(let i=1; i<numeris.length; i++){
      if(numeris[i] > max){
        max = numeris[i];   
      }
     }
   return max;
}
console.log( didziausiasSkaiciusSarase( [ 1 ] ) );
console.log( didziausiasSkaiciusSarase( [ 1, 2, 3 ] ) );
console.log( didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] ) );
console.log( didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ] ) );
console.log( didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ) );
console.log(didziausiasSkaiciusSarase([]));
console.log(didziausiasSkaiciusSarase('pomidoras'));