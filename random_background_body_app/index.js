var random_color =document.querySelector("#random");

random_color.addEventListener('click',random_color_change);
 function random_color_change(){
//console.log(Math.random().toString(16).slice(2,8));
document.body.style.backgroundColor  = "#"+ Math.random().toString(16).slice(2 ,8);




 }