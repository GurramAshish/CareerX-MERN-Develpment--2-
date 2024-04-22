function check() {
    let num = t1.value;
    if (num > 0) {
      lb1.innerHTML = "Positive";
      lb1.style.color = "green";
      lb1.style.background = "yellow";
    } else if (num == 0) {
      lb1.innerHTML = "It has no VALUE";
      lb1.style.color = "black";
      lb1.style.background = "pink";
    } else {
      lb1.innerHTML = "Negative";
      lb1.style.color = "red";
      lb1.style.background = "black";
    }
  }

  function square() {
    let a = l.value;
    let c = b.value;
    if (a == c) {
      lb2.innerHTML = "It's a SQUARE";
      lb2.style.color = "green";
      lb2.style.background = "yellow";
    } else {
      lb2.innerHTML = "It's not a SQUARE ";
      lb2.style.color = "red";
      lb2.style.background = "black";
    }
  }

  function greater() {
    let q = a1.value;
    let w = a2.value;
    let e = a3.value;
  }

  //     if (w > greatest) {
  //         lb3.innerHTML=`${w} is GREATEST`
  //     }
  //     else if(e > greatest){
  //         lb3.innerHTML=`${e} is GREATEST`
  //     }
  //     else{
  //         lb3.innerHTML=`${greatest}`
  //     }
  //   }
  ////////////////////////////////////////////////////////////
  // while(e < w || q){
  //     lb3.innerHTML=`${e} is Greater`
  //     break
  // }
  // while(q < w || e){
  //     lb3.innerHTML=`${q} is Greater`
  //     break
  // }
  // while(w< q || e){
  //     lb3.innerHTML=`${w} is Greater`
  //     break
  // }
  ///////////////////////////////////////////////////////////////////////////

  //   if (q >w) {
  //     lb3.innerHTML = `${q} is Greatest`;
  //   }
  //   else{
  //     lb3.innerHTML = `${w} is Greatest`;
  //   } if (q > e) {
  //     lb3.innerHTML = `${q} is Greatest`;
  //   }
  //   else{
  //     lb3.innerHTML = `${e} is Greatest`;
  //   }
  //    if (w > q) {
  //     lb3.innerHTML = `${w} is Greatest`;
  //   }
  //   else{
  //     lb3.innerHTML = `${q} is Greatest`;
  //   }
  //    if (w > e) {
  //     lb3.innerHTML = `${w} is Greatest`;
  //   }
  //   else{
  //     lb3.innerHTML = `${e} is Greatest`;
  //   }
  //    if (e > q) {
  //     lb3.innerHTML = `${e} is Greatest`;
  //   }
  //   else{
  //     lb3.innerHTML = `${q} is Greatest`;
  //   }
  //    if (e > w) {
  //     lb3.innerHTML = `${e} is Greatest`;
  //   } else
  //   {
  //     lb3.innerHTML = `${w} is Greatest`;
  //   }
  // }
  function divide5(){
    let p=adiv5.value
    if(p%5==0){
        lb5.innerHTML="DIVISIBLE By 5"
        lb5.style.color = "green";
        lb5.style.background = "yellow";
    }
    else{
        lb5.innerHTML="Not Divisible by 5"
        lb5.style.color = "red";
        lb5.style.background = "black";
    }
  }