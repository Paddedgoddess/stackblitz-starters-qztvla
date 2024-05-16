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




const catFactData = document.querySelector("#catFactData");
console.log(catFactData)

//Fetched catFact variable. Specifically nr.1. specifically the key fact.
console.log(catFact[1].fact);

async function catFactGenerator() {
    const response = await fetch("https://catfact.ninja/facts");

   const catFactData = await response.json();

   const randomIndex = Math.floor(Math.random() * 10);

    const randomCatFact = catFactData.data[randomIndex].fact;

    console.log(randomCatFact);

    const catFactDisplay = document.querySelector("#catFactDisplay");
    catFactDisplay.textContent = randomCatFact;
};
;

catFactGenerator()


const newFact = document.querySelector("#newFact")
console.log(newFact)

document.getElementById("newFact").addEventListener("click", function() {
    // Reload the page
    location.reload();
});