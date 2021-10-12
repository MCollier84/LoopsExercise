// 1
for (i = 1; i < 8; i++){
    console.log(i);
}

// 2
console.log("//////");

for (i = 5; i <= 25; i += 4){
    console.log(i);
}

// 3a
const wizards = [
    "Harry Potter",
    "Hermione Granger",
    "Ron Weasley"
]

// 3b
for (hpchr of wizards){
    console.log(hpchr);
}
console.log(`========`);
// 4a
let harryPotterMovies = 0;
console.log(harryPotterMovies);

// 4b
while (harryPotterMovies < 8){
    harryPotterMovies++;
    console.log(harryPotterMovies);
}

// 4c
console.log(harryPotterMovies);

// Bonus
// 5a
const hogwartsHouses = 
    `Gryffindor` + `Hufflepuff` + `Ravenclaw` + `Slytherin`;
    

// 5b
for (houseName of hogwartsHouses) {
    console.log(houseName);
}

// 6a
const quote = [
    "Yer",
    "A",
    "Wizard",
    "Harry"
];
console.log(quote);

// 6b
const quote2 = [
    `Yer` + ` A` + ` Wizard` +` Harry`
]
while (quote !== quote2) {
    console.log(quote.join (` `));
    break;
}    
