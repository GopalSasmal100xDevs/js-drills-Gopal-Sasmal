import users from "./users.js";
import { interestedInVideoGame } from "./solution.js";

console.log("Interested Video game players are ", interestedInVideoGame(users));
console.log(
  "Interested Video game players are ",
  interestedInVideoGame({ mark: {}, alen: {} })
);
