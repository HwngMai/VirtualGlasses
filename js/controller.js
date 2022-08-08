import { dataGlasses } from "./main.js";
//**FUNCTION show kính */
export let showKinh = (dsKinh) => {
  let contentHTML = "";
  for (let i = 0; i < dsKinh.length; i++) {
    contentHTML += `
    <div class="d-flex col-4">
      <button 
        onclick="tryKinh(this.id), showInfo(this.id)"
        id="${i}" value="${i}"
        class="btn">
      <img class="img-fluid" src=${dsKinh[i].src}>
      </button>
    </div>`;
  }
  document.getElementById("vglassesList").innerHTML = contentHTML;
};
// **FUNCTION lấy ID kính dựa vào chính btn*/
export let tryKinh = (clickId) => {
  let contentHTML = "";
  //lấy src url đưa vào contentHTML
  contentHTML = `<img id="virtualImg" src=${dataGlasses[clickId].virtualImg}>`;
  console.log("contentHTML virtual: ", contentHTML);
  //show contentHTML
  document.getElementById("avatar").innerHTML = contentHTML;
};
window.tryKinh = tryKinh;
export let showInfo = (clickId) => {
  let contentHTML = "";
  //lấy src url đưa vào contentHTML
  contentHTML = `<p>Brand: ${dataGlasses[clickId].brand} - Name: ${dataGlasses[clickId].name}</p></br>
  <p>Price: ${dataGlasses[clickId].price} $</p></br>
  <p>Description:${dataGlasses[clickId].description}</p></br>`;
  console.log("contentHTML virtual: ", contentHTML);
  //show contentHTML
  document.getElementById("glassesInfo").innerHTML = contentHTML;
  document.getElementById("glassesInfo").style.display = "block";
};
window.showInfo = showInfo;

