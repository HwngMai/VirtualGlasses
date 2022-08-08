import { showKinh } from "./controller.js";
import { dataGlasses } from "./main.js";
showKinh(dataGlasses);
//**FUNC removeglasses */
let removeGlasses = (isRemove) => {
  if (isRemove) {
    document.getElementById("virtualImg").style.display = "block";
    document.getElementById("glassesInfo").style.display = "block";
  } else {
    document.getElementById("virtualImg").style.display = "none";
    document.getElementById("glassesInfo").style.display = "none";
  }
};
window.removeGlasses = removeGlasses;
