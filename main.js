//opdr1
let personOne = {
    firstName: "Mamoun",
    lastName: "Alhtita",
    age : 19,
    opleiding : "ICT",
    score : 10,
}
console.log("person's naam is ", personOne);
//opdr 2


// 3
// Variabele voor de array met eetrecepten
const eetreceptenArray = [
    {
        titel: "Salade met gegrilde groenten",
        beschrijving: "Een heerlijke salade met gegrilde groenten, zoals courgette, paprika en aubergine.",
        gezond: true,
    },
    {
        titel: "Linzensoep",
        beschrijving: "Een voedzame en vullende soep met linzen, groenten en kruiden.",
        gezond: true,
    },
    {
        titel: "Gebakken zalm met broccoli",
        beschrijving: "Een smakelijk gerecht met zalm, broccoli en een romige saus.",
        gezond: true,
    },
];
console.log(eetreceptenArray);
//opdr4
let Bmw1 = {
    title: "BMW M8 Coupé",
    description: "..",
    price : 230.91220,
   kilometer : 0,
    
}
console.log(Bmw1);

let Bmw2 = {
    title: "BMW 840i Cabrio",
    description: "..",
    price :  153.42350,
   kilometer : 0,
    
}
console.log(Bmw2);

let Bmw3 = {
    title: "BMW XM",
    description: "..",
    price :  181.96310,
   kilometer : 0,
    
}
console.log(Bmw3);

// opdr 5

let item1 ={
    titel: "Dreft handafwas",
    beschrijving: "430 ml",
    prijs: 3.39
}
console.log(item1);
let item2 ={
    titel: "Dreft handafwas",
    beschrijving: "430 ml",
    prijs: 3.39
}
console.log(item2);
let item3 ={
    titel: "verse pasta",
    beschrijving: "250 gram",
    prijs: 2.99
}
console.log(item3);

//opdr 6




//opdr 7

for (let i= 0; i < eetreceptenArray.length; i++) {
    const e = eetreceptenArray[i];
    console.log("title is", e.titel );
    console.log("beschrijving is", e.beschrijving );
    console.log("gezond is", e.gezond );
}
//const productPindakaas = {
   // title: "pindakaas ",
   // description : "calve  250g",
   // price:  8.50,
//}
//console.log(" pindakaas is nu in aanbeiding", );

