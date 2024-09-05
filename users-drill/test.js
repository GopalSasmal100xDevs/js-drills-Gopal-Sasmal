import users from "./users.js";
import {
  interestedInVideoGame,
  getAllUserStayInGermany,
  getAllUsersWithMastersDeg,
} from "./solution.js";

// Q1
console.log("Interested Video game players are ", interestedInVideoGame(users));
console.log(
  "Interested Video game players are ",
  interestedInVideoGame({ mark: {}, alen: {} })
);

// Q2
console.log("Users who stay in Germany", getAllUserStayInGermany(users));
console.log("Users who stay in Germany", getAllUserStayInGermany({}));
console.log("Users who stay in Germany", getAllUserStayInGermany());

// Q3
console.log("Users who have master degree", getAllUsersWithMastersDeg(users));
console.log("Users who have master degree", getAllUsersWithMastersDeg({}));
console.log(
  "Users who have master degree",
  getAllUsersWithMastersDeg({ mark: {}, new: {} })
);
