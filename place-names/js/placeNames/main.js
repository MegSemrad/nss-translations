const names = ["Nashville", "Hong Kong", "The back yard", "Earth",
    "London", "The mall", "Ryman Auditorium", "The Great Wall of China"];


console.log("All Place Names")


for (let name of names) {
    console.log(`${name}`)
};


console.log("\n");


const namesThatStartsWithThe = names.filter(n => n.startsWith("The"))
console.log("'The' Place Names");
for (let nameThatStartsWithThe of namesThatStartsWithThe) {
    console.log(`${nameThatStartsWithThe}`);
}