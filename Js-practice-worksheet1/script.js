let students = [
  {
    name: "Amna",
    gender: "f",
    dob: new Date("02-04-1990"),
    address: {
      ilaqa: "Gulistan-e-Johar",
      city: "Karachi",
      country: "Pakistan",
      postalCode: 47114
    },
    phoneNo: "0331-2324243",
    admissionTestScore: 56,
    hasInternet: true,
    hasComputer: false,
    hasJob: true,
    hasSchoolBefore: false
  },
  {
    name: "Hadia",
    gender: "f",
    dob: new Date("05-15-1984"),
    address: {
      ilaqa: "Lyari",
      city: "Karachi",
      country: "Pakistan",
      postalCode: 75660
    },
    phoneNo: "0345-3452953",
    admissionTestScore: 48,
    hasInternet: false,
    hasComputer: false,
    hasJob: false,
    hasSchoolBefore: true
  },
  {
    name: "Ahmed",
    gender: "m",
    dob: new Date("06-27-2002"),
    address: {
      ilaqa: "University Road",
      city: "Quetta",
      country: "Pakistan",
      postalCode: 82215
    },
    phoneNo: "0333-0124325",
    admissionTestScore: 33,
    hasInternet: true,
    hasComputer: false,
    hasJob: false,
    hasSchoolBefore: false
  },
  {
    name: "Fariha",
    gender: "f",
    dob: new Date("09-13-1998"),
    address: {
      ilaqa: "University Road",
      city: "Karachi",
      country: "Pakistan",
      postalCode: 82215
    },
    phoneNo: "0331-9432532",
    admissionTestScore: 33,
    hasInternet: true,
    hasComputer: false,
    hasJob: false,
    hasSchoolBefore: false
  },
  {
    name: "Abdullah",
    gender: "m",
    dob: new Date("01-24-1972"),
    address: {
      ilaqa: "Bazar Colony",
      city: "Lahore",
      country: "Pakistan",
      postalCode: 32212
    },
    phoneNo: "0345-9912121",
    admissionTestScore: 33,
    hasInternet: false,
    hasComputer: false,
    hasJob: true,
    hasSchoolBefore: true
  }
];
//QUESTION 1

// for(i = 0; i < students.length; i++){
//   console.log("Name:" + students[i].name);
//   let gender;
//   if(students[i].gender === "f"){
//     gender = "female";
//   }else{
//     gender = "male";
//   }
//   console.log("Gender:" + gender);
//   console.log("City:" + students[i].address.city);
//   console.log("Score:" + students[i].admissionTestScore);
//   console.log("");
// }

//QUESTION 2

// for(i = 0; i < students.length; i++){
//   if(students[i].hasInternet === true && students[i].address.city === "Karachi" ){
//     console.log(students[i].name);
//   }
// }

//QUESTION 3

// for (i = 0; i < students.length; i++) {
//   console.log(students[i].name + "\'s" + " " + "address: \n "  + students[i].address.ilaqa + " in " + students[i].address.city + " , " + students[i].address.country);
// }

//QUESTION 4

// for (i = 0; i < students.length; i++){
//   if(students[i].phoneNo.charAt(2) == 3 && students[i].phoneNo.charAt(3) <= 7){
//     console.log(students[i].name + " " + students[i].phoneNo);
//   }
// } 

//QUESTION 5

// let groupA = [];
// let groupB = [];
// for (i = 0; i < students.length; i++) {
//   if (students[i].hasJob == true || students[i].hasSchoolBefore == true) {
//     groupB.push(students[i].name);
//   } else {
//     groupA.push(students[i].name);
//   }

// }
// console.log("Group A :" +  groupA.join(", "));
// console.log("Group B :" + groupB.join(", "));

//QUESTION 6
// - Get year
// - Get today year
// - Today year - year
// - Get month
// - Get today month

function findAge(date1, date2) {
  return date1 - date2;
  date1 = new Date();
  for (i = 0; i < students.length; i++) {
    date2 = new Date(students[i].dob) ;
  }
}
