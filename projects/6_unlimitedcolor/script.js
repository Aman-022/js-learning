
// generate random color 

const randomcolor = function(){
    const hex = "0123456789ABCDEF"
    let color ="#"

    for (let i =0; i <6;i++ ){
       color+=hex[ Math.floor(Math.random()*16)]
    }
    return color;
}

let intervalid ;
const changingcolor = function(){
intervalid = setInterval(chnagebcolor,1000)

function chnagebcolor(){
document.body.style.backgroundColor=randomcolor();
}
}
const stopchanging = function(){
      clearInterval(intervalid);
      intervalid=null // optimization
} 
document.querySelector("#start").addEventListener('click',changingcolor,false)

document.querySelector("#stop").addEventListener('click',stopchanging,false)