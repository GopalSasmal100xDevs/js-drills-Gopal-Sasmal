import persons from "./persons.js";
import {
  getAllEmails,
  getHobbiesOfaSpecificAge,
  allStudentLiveInAustralia,
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
