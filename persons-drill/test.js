import persons from "./persons.js";
import {
  getAllEmails,
  getHobbiesOfaSpecificAge,
  allStudentLiveInAustralia,
  logTheIndexedPerson,
  printAllAges,
  getFirstHobby,
  infoOfAged25,
  printCityAndCountry,
} from "./solution.js";

// Q1
console.log(getAllEmails(persons));
console.log(getAllEmails([]));
console.log(getAllEmails(undefined));
console.log(getAllEmails(null));
console.log(getAllEmails([{}, {}]));

// Q2
getHobbiesOfaSpecificAge(persons, 30);
getHobbiesOfaSpecificAge(persons, "30");
getHobbiesOfaSpecificAge(persons, null);
getHobbiesOfaSpecificAge([], 30);
getHobbiesOfaSpecificAge([{}, {}], 30);

// Q3
allStudentLiveInAustralia(persons);
allStudentLiveInAustralia([]);
allStudentLiveInAustralia([{}, {}]);
allStudentLiveInAustralia(undefined);

// Q4
logTheIndexedPerson(persons, 3);
logTheIndexedPerson(persons, 20); //index more than array size
logTheIndexedPerson(persons, -1); // negetive index
logTheIndexedPerson([], 3); // impty array
logTheIndexedPerson([{}, {}], 3); // empty object array

// Q5
printAllAges(persons);
printAllAges([]);
printAllAges([{}]);
printAllAges();

// Q6
getFirstHobby(persons);
getFirstHobby([{}]);
getFirstHobby(undefined);
getFirstHobby();

//  Q7
infoOfAged25(persons);
infoOfAged25([{ name: "Mark", age: 25 }]);
infoOfAged25([{ age: 25 }]);
infoOfAged25([]);
infoOfAged25();

// Q8
printCityAndCountry(persons);
printCityAndCountry();
printCityAndCountry([{}, {}]);
