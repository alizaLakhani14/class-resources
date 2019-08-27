// let constructPerson = (personName, personGender, hobbies, meal) => {
//     return {
//         name : personName,
//         gender : personGender,
//         hobbies : hobbies,
//         eat : function () {
//             console.log(meal)
//         },
//         greet : function () {
//             console.log(`Hello ${this.name}`)
//         }

//     }

// }
// let personA = constructPerson("Aliza", "female", ["playing"], "biryani");

// let makeIdCard = function (name, age) {
//     let student = {
//         name: name,
//         age: age,
//         interests: [],
//         bio: function bio() {
//             console.log(`My name is ${this.name}.`)
//         }
//     }
//     return student;

// }

// function startCreatingIdCards() {
//     let names = ["Aliza", "Armia", "Arfa"];
//     let ages = [20, 21, 22];
//     let persons = []
//     for(let i=0; i < 3; i++){
//         let person = makeIdCard(names[i], ages[i]);
//         persons.push(person);
//     }
//  return persons;
// }                                              



// let makeCar = (name, color, model, owner) => {
//     let car = {
//         name: name,
//         colour: colour,
//         model: model,

//         ownedBy: function () {
//             console.log(`I am owned by ${this.owner}`);
//         }
//     }
//     return car;
// }


