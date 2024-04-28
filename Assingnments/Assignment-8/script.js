let a = () => {
  let div = document.getElementById("mainid");
  let div1 = document.getElementById("hiddendiv");
  div.style.opacity = 0.35;
  div1.style.visibility = "visible";
};
a();
function backtohome() {
  let div = document.getElementById("mainid");
  let div1 = document.getElementById("hiddendiv");
  div.style.opacity = 1;
  div1.style.visibility = "hidden";
}
