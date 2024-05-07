//[] square bracket = array
// {} curly bracket = object

const myAPI = [ 
    //data 0
{fruit: "Apple", good: "yes"},
// data 1
{fruit: "Banana", good: "yes"},
// data 2
{fruit: "Orange", good: "no"}
];

console.log(myAPI[1].fruit);
console.log(myAPI[1].good);

const catFact = [
    {fact: "Cats are the best", length: "17"},
    {fact: "Cats have four legs", length: "21"}
];

//Fetched catFact variable. Specifically nr.1. specifically the key fact.
console.log(catFact[1].fact);

async function catFactGenerator() {
    const response = await fetch("https://catfact.ninja/facts");

   const catFactData = await response.json();

    console.log(catFactData.data[0].fact);
};



catFactGenerator()
