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
