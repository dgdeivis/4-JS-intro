/*
Galimi variantai, kaip inicijuoti teksta:
- viengubos kabutes
-dvigubos kabutes

*/

cons vardas = 'Petras';
console.log(vardas);

const pavarde = "Petraitis";
console.log(pavarde);

// Cia yra vienguba (') kabute.
const kabute1 = "Cia yra vienguba (') kabute.";
console.log(kabute1);

// cia yra dviguba (") kabute.
const kabute2 = 'Cia yra dviguba (") kabute';
console.log(kabute2);

//Cia yra vienguba (') ir dviguba (") kabutes.
const kabutes = 'Cia yra vienguba (\') ir dviguba (") kabutes';
console.log(kabutes);

const fullname = vardas + ' ' + pavarde;
console.log(fullname);

const marke = 'Tesla';
const model = 'S';
const battery = 100;
const batteryunits = 'kW';

I wish I had Tesla model S with a 100kW battery.
const car = 'I wish a had' + marke + model + 'with a' + battery + batteryunits + '.';
console.log(car);

const backtick = `I wish I had $(marke) model $(model) with a $(battery + batteryunits).`
console.log(backtick);

















































