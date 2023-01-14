const randomNumberGen = (min, max) => {
    let value = 0;
    switch (true){
        case min < 0:
        case min === 0:
            value = Math.floor(Math.random() * max + 1);
            break;
        case min > 0:
            value = Math.floor(Math.random() * max) + min;
            break;
        default:
            value = 0;
            console.log("Error with number provided")
            break;
    }

    return value;
}

const generateDay = () => {
    switch(month){
        case "January": 
        case "March": 
        case "May":  
        case "July": 
        case "August":
        case "October" :
        case "December":
            return randomNumberGen(1, 31);
            //day = Math.floor(Math.random() * 31) + 1;
            break;
        case "April": 
        case "June": 
        case "September": 
        case "November":
            return randomNumberGen(1, 30);
            //day = Math.floor(Math.random() * 30) + 1;
            break;
        case "Febuary":
            return randomNumberGen(1, 29);
            //day = Math.floor(Math.random() * 29) + 1;
            break;
        default:
            console.log("Error");
            return 0;
    }

}

const personObj = {
    name: ["Stacy", 
    "Johnny",
    "Priscilla",
    "Grahame", 
    "Vernon", 
    "Regina", 
    "Alan", 
    "Penny", 
    "Sarah-Jane", 
    "Elizabeth"],

    anime: ["Death Note",
    "Demon Slayer",
    "Sword Art Online",
    "Attack on Titan",
    "One Piece",
    "My Hero Academia",
    "Naruto",
    "One Punch Man",
    "Full Metal Alchemist Brotherhood",
    "Hunter X Hunter"],

    colour: ["white", 
    "blue", 
    "red", 
    "yellow", 
    "green", 
    "black", 
    "purple", 
    "pink"],

    month: ["January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"]
}


const name = personObj.name[randomNumberGen(0, personObj.name.length - 1)];
const anime = personObj.anime[randomNumberGen(0, personObj.anime.length - 1)];
const colour = personObj.colour[randomNumberGen(0, personObj.colour.length - 1)];
const month = personObj.month[randomNumberGen(0, personObj.month.length - 1)];

//for(let data in personObj)

let day = generateDay();



const sentence  = `${name} was born on ${day} ${month}. Their favorite anime is ${anime} and favorite colour is ${colour}.`;

console.log(sentence);