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
