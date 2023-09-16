var clock = document.querySelector('.clock');
var flag="AM";
function hms(){

    let date=new Date();
    let hour=date.getHours();//0-23
    let second=date.getSeconds();//0-59
    let minutes=date.getMinutes();//0-59
   

    if (hour == 12){//وقت الظهر
        hour = 0
        
    }
    if (hour >12){//,وحتصير pm
        hour=hour-12
        flag="PM"
    }
   if (hour<10){
       hour = "0" +hour
   }
   
   if (second<10){
    second = "0" +second
}

if (minutes<10){
    minutes = "0" +minutes
}



//0-23
//وقت النهار  بدها تبدا ب 1 الي 12 عادي طبيبعيam
//وكمان بعدها بدها تصيير الساعة 13 تصير 1
   clock.innerText=`${hour} :${minutes} :${second}   ${flag}` 


   setTimeout(function(){
    hms()
},1000)














}

hms()

