import persons from "./persons.js";
import { getAllEmails } from "./solution.js";

// Q1
console.log(getAllEmails(persons));
console.log(getAllEmails([]));
console.log(getAllEmails(undefined));
console.log(getAllEmails(null));
console.log(getAllEmails([{}, {}]));
