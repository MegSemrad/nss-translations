const contentElement = document.querySelector(".placeNames");
const theNameContentElement = document.querySelector(".thePlaceNames");

const names = ["Nashville", "Hong Kong", "The back yard", "Earth",
    "London", "The mall", "Ryman Auditorium", "The Great Wall of China"];


for (let name of names) {
    contentElement.innerHTML += `${name}<br/>`
};


const namesThatStartsWithThe = names.filter(n => n.startsWith("The"))
const namesWithRemovedComma = namesThatStartsWithThe.join(" ")
theNameContentElement.innerHTML += `${namesWithRemovedComma}<br/>`