const ans = document.querySelector('#ans')
const degree = document.querySelector('#degree')
const type = document.querySelector('#type')
const btn = document.querySelector('#button')

// reset on window loading
window.addEventListener("load", () =>{
    degree.value = "";
    ans.innerHTML = "";
})

btn.addEventListener("click", (e) =>{
    e.preventDefault();
    convert();
})

function convert(){
    let inputValue = degree.value;

    if(type.value === "fahrenheit"){
        const dTof = (inputValue - 32) * (5/9);
        ans.innerHTML = `${dTof.toFixed(3)} &deg;c`;
    }
    else if(type.value === "kelvin"){
        const dTof = (inputValue - 273.15)
        ans.innerHTML = `${dTof.toFixed(3)} &deg;c`;
    }
}