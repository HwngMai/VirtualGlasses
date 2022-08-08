export let showKinh = (dsKinh) => {
  let contentHTML = "";
  for (let i = 0; i < dsKinh.length; i++) {
    contentHTML += `<div class="d-flex col-4">
    <button class="btn"><img class="img-fluid" src=${dsKinh[i].src}></button></div>`;
  }
  document.getElementById("vglassesList").innerHTML = contentHTML;
};
