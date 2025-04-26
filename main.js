import { searchInput, usersRadio, theBtn } from "./theScripts/elements.js";
import performSearch from "./theScripts/performSearch.js";

theBtn.addEventListener("click", (e) => {
  e.preventDefault();
  performSearch(searchInput.value, usersRadio.checked);
});
