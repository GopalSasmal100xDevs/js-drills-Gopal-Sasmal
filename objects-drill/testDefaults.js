import { defaults } from "./defaults.js";

const info = {
  user: "Gopal Sasmal",
  course: "CSE",
};

const defaultProps = {
  course: "B-tech (CSE)",
  techStack: "JavaScript",
  homeTown: "Kolkata",
  job: "Mountblue",
};
const ans = defaults(info, defaultProps);
console.log(ans);
