let enemies = [
    {
        firstName: "Joshua",
        lastName: "Flowers",
        offenses: [
            "Being a jerk to me in elementary school",
            "Not being nice to me in elementary school"
        ],
        isReallyHated: true
    },
    {
        firstName: "Darth",
        lastName: "Vader",
        offenses: [
            "Cut off Luke's hand",
            "Murdered all those kids",
            "Unkind management practices"
        ],
        isReallyHated: false
    },
    {
        firstName: "Betty",
        lastName: "Rudelady",
        offenses: [
            "Phone calls in the theater",
            "Phone calls on the bus",
            "Phone calls in line at the grocery store",
            "Poor conversationalist"
        ],
        isReallyHated: true
    },
    {
        firstName: "Leon",
        lastName: "Peck",
        offenses: [
            "Keeps giving me a hotplate"
        ],
        isReallyHated: false
    }
];

const enemiesList = (enemies) => {
    const mappedEnemies = enemies.map(e => {
        if (e.isReallyHated === true) {
            console.log(`${e.firstName} ${e.lastName} (Really, really dislike!)`)
        }
        else {
            console.log(`${e.firstName} ${e.lastName}`)
        }
    })
    return mappedEnemies
};

console.log("My Enemies List!")
console.log("-------------");;
enemiesList(enemies);