const clock = document.getElementById('clock'); 
// or. const clock = document.querySelector('#clock)'

// we need continous time , without refresshing each time 
setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
},1000)