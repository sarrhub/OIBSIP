let read = document.querySelector('#read_btn');
let btn = document.querySelector('#read_btn').childNodes[0];
// console.log(btn)

read.addEventListener('click',()=>{
    let hide = document.querySelector('#hidden_para');
    if (hide.style.display === "none") {
        hide.style.display = "inline";
        btn.textContent = "Read less";
      } else {
        hide.style.display = "none";
        btn.textContent = "Read more";
      }
})