// Q1 Find all users who are interested in playing video games.
export function interestedInVideoGame(users) {
  if (users && !Object.keys(users).length === 0) {
    return [];
  }

  const interestedVideoGamePlayers = [];
  for (let user in users) {
    const { interests } = users[user];
    if (interests && interests.length === 0) {
      continue;
    }

    const regex = /video game/i;
    for (let index = 0; interests && index < interests.length; index++) {
      if (regex.test(interests[index])) {
        interestedVideoGamePlayers.push(user);
      }
    }
  }

  return interestedVideoGamePlayers;
}

// Q2 Find all users staying in Germany.

export function getAllUserStayInGermany(users) {
  if (users && !Object.keys(users).length === 0) {
    return [];
  }

  const usersLiveInGermany = [];
  for (let user in users) {
    if (users[user]?.nationality === "Germany") {
      usersLiveInGermany.push(user);
    }
  }

  return usersLiveInGermany;
}

// Q3 Find all users with masters Degree.

export function getAllUsersWithMastersDeg(users) {
  if (users && !Object.keys(users).length === 0) {
    return [];
  }

  const usersWithMastersDeg = [];
  const regex = /masters/i;
  for (let user in users) {
    if (regex.test(users[user]?.qualification)) {
      usersWithMastersDeg.push(user);
    }
  }

  return usersWithMastersDeg;
}

/*
Q4 Group users based on their Programming language mentioned in their designation.
*/

export function getDevelopers(users) {
  if (users && !Object.keys(users).length === 0) {
    return {};
  }

  const developers = { python: [], javascript: [], golang: [], others: [] };
  const pythonRegex = /python/i;
  const javascriptRegex = /javascript/i;
  const golangRegex = /golang/i;
  for (let user in users) {
    if (pythonRegex.test(users[user]?.desgination)) {
      developers["python"].push(user);
    } else if (javascriptRegex.test(users[user]?.desgination)) {
      developers["javascript"].push(user);
    } else if (golangRegex.test(users[user]?.desgination)) {
      developers["golang"].push(user);
    } else {
      developers["others"].push(user);
    }
  }
  return developers;
}
