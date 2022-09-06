import { getNavBar, finishLoading } from "./game.js";
window.onload = () => {
  finishLoading();
  getNavBar("../layouts/arabicNavbar.html");
};
