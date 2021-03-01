const names = ["Nashville", "Hong Kong", "The back yard", "Earth",
    "London", "The mall", "Ryman Auditorium", "The Great Wall of China"];


console.log("All Place Names")

for (let name of names) {
    console.log(`${name}`)
};


const namesThatStartsWithThe = names.filter(n => n.startsWith("The"))
const namesWithRemovedComma = namesThatStartsWithThe.join(" ")
console.log("'The' Place Names");;
console.log(`${namesWithRemovedComma}`)