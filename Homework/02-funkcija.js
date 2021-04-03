function daugyba(a, b){
    if(typeof a !== 'number'){
        return 'ERROR: pirma reiksme turi buti skaiciaus tipo';
    }
    if(typeof b !== 'number'){
        return 'ERROR: antra reiksme turi buti skaiciaus tipo';
    }    
    if(!isFinite (a)){
        return `ERROR: pirmasis skaicius negali buti ${a}`;
    }
    if(!isFinite (b)){
    return `ERROR: antrasis skaicius negali buti ${b}`;
    }
    const rezultatas = a * b;
    return rezultatas;
}


console.log(daugyba(NaN, 4));
console.log(daugyba(Infinity, 4));
console.log(daugyba(2, 'labas'));
console.log(daugyba('', 2));
console.log(daugyba('rytas', 'labas'));
console.log(daugyba(false, false));
console.log(daugyba(true, true));
console.log(daugyba(7, true));
console.log(daugyba(-7, true));
console.log(daugyba(-7, false));
console.log(daugyba(7, false));
console.log(daugyba(-7, [2]));
console.log(daugyba(-7, [-2]));
console.log(daugyba(-7, [2, 22]));
console.log(daugyba(-7, [-2, -22]));
    
console.log(daugyba(4, 5));
console.log(daugyba(-2.5, 0));
console.log(daugyba(4.5, 5));
