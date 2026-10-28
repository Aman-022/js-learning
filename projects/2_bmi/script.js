// thats a form - form always submit in GET/POST type 
const form = document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault(); // prevent by web behvaour like reload 

   const height = parseFloat(document.querySelector('#height').value);
   const weight = parseFloat(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    if (isNaN(height) || height <= 0) {
    result.innerHTML = 'Enter valid height';} 
   else if (isNaN(weight) || weight <= 0) {
    result.innerHTML = 'Enter valid weight';}
    else {
        const heightInMetres = height / 100;
        const bmi = weight / (heightInMetres * heightInMetres);
         result.innerHTML = `<span>Your BMI is ${bmi.toFixed(2)}</span>`;
    }
    
})