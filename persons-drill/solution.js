// Q1   Given the dataset of individuals, write a function that accesses and returns the email addresses of all individuals.
export function getAllEmails(persons) {
  if (!Array.isArray(persons)) {
    return [];
  }
  const personsEmail = [];
  for (let index = 0; index < persons.length; index++) {
    if (persons[index] && persons[index].email) {
      personsEmail.push(persons[index].email);
    }
  }
  return personsEmail;
}

// Q2   Implement a function that retrieves and prints the hobbies of individuals with a specific age, say 30 years old.

export function getHobbiesOfaSpecificAge(persons, age) {
  if (!Array.isArray(persons)) {
    console.log("First argument is not an array!");
    return;
  }

  if (persons.length == 0) {
    console.log("Array is empty!");
    return;
  }

  if (!Number.isInteger(age)) {
    console.log("Age is not a number!");
    return;
  }

  for (let index = 0; index < persons.length; index++) {
    const person = persons[index];
    if (person && person.age === age) {
      console.log(...person.hobbies);
    }
  }
}

// Q3   Create a function that extracts and displays the names of individuals who are students (`isStudent: true`) and live in Australia.
export function allStudentLiveInAustralia(persons) {
  if (!Array.isArray(persons)) {
    console.log("Argument is not an array");
    return;
  }

  for (let index = 0; index < persons.length; index++) {
    const person = persons[index];
    if (person.isStudent && person.country && person.country === "Australia") {
      console.log(`${person.name} is a student and live in Australia`);
    }
  }
}

// Q4   Write a function that accesses and logs the name and city of the individual at the index position 3 in the dataset.
export function logTheIndexedPerson(persons, index) {
  if (
    !Array.isArray(persons) ||
    !Number.isInteger(index) ||
    index < 0 ||
    index >= persons.length
  ) {
    console.log("Invalid argument");
    return;
  }

  const person = persons[index];
  console.log(`In index ${index} ${person.name} is present.`);
}

// Q5    Implement a loop to access and print the ages of all individuals in the dataset.
export function printAllAges(persons) {
  if (!Array.isArray(persons)) {
    console.log("Argument is not valid");
    return;
  }

  for (let index = 0; index < persons.length; index++) {
    const person = persons[index];
    if (person.name && person.age)
      console.log(`${person.name} is ${person.age} years old`);
  }
}

//  Q6  Create a function to retrieve and display the first hobby of each individual in the dataset.
export function getFirstHobby(persons) {
  if (!Array.isArray(persons)) {
    console.log("Argument is not valid");
    return;
  }
  for (let index = 0; index < persons.length; index++) {
    const person = persons[index];
    if (person.hasOwnProperty("hobbies") && person.hobbies?.length > 0)
      if (person.name && person.hobbies) {
        console.log(`${person.name} first hobby is ${person.hobbies[0]}`);
      }
  }
}
