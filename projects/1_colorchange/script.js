const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach(function(button){
 button.addEventListener('click',function(e){
    console.log(e); // even type
       console.log(e.target); // event element 
    if(e.target.id == 'grey'){
        body.style.backgroundColor = e.target.id;
    }
    else if(e.target.id == 'white'){
        body.style.backgroundColor = e.target.id;
    }
   else if(e.target.id == 'yellow'){
        body.style.backgroundColor = e.target.id;
    } else body.style.backgroundColor = e.target.id;
 })
})

//  MORE SIMPLER 
// buttons.forEach(function(button) {
//     button.addEventListener('click', function(e) {
//         body.style.backgroundColor = e.target.id; });
