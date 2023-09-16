//setup vars

var input_pass=document.querySelector('#input');
var btn=document.querySelector('#btn');


//Event
btn.addEventListener('click',toggle_password);


//Function
function  toggle_password(){
if(btn.getAttribute('data-text')=='show'){
    //لو كان الاتربوت ظاهر ) راح اغير نوع الانوبت ل نص واغير الزر لاخفاء واغير الاتربيوب
btn.setAttribute('data-text','hide');
btn.innerHTML='Hide';
input_pass.setAttribute('type','text');



}
else{
      //لو كان الاتربوت مخفي ) راح اغير نوع الانوبت ل باسورد واغير الزر لاظهار واغير الاتربيوب
btn.setAttribute('data-text','show');
btn.innerHTML='Show';
input_pass.setAttribute('type','password');

}

}
