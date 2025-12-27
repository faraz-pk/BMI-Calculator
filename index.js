let heightEl = document.querySelector('.height');
let weightEl = document.querySelector('.weight');
let resultEl = document.querySelector('.result');
let conditionEl = document.querySelector('.condition');
let buttonEl = document.querySelector('button');
let errorEl = document.querySelector('.error');


function getBMI() {
    let height = heightEl.value / 100;
    let bmi = weightEl.value / (height * height);
    resultEl.value = bmi;
    
    if(heightEl.value === "" || weightEl.value === "") {
        errorEl.innerText = "Enter a valid height or weight";
    }
    
    if (bmi > 0 && bmi < 18.5) {
        conditionEl.innerText = "Under Weight";
        conditionEl.style.color = "yellow";
    } else if(bmi >= 18.5 && bmi <= 24.9){
        conditionEl.innerText = "Normal Weight";
        conditionEl.style.color = "green";
    } else if (bmi >= 25 && bmi <= 29.9) {
        conditionEl.innerText = "Over Weight";
        conditionEl.style.color = "orange";
    } else if (bmi >= 30) {
        conditionEl.innerText = "Obesity";
        conditionEl.style.color = "red";
    } else {
        errorEl.innerText = "Enter a valid height or weight";
    }
}
buttonEl.addEventListener('click', getBMI);