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
