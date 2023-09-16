// اول اشي بحط العناصر ب متغيرات
//get element into variable

var input = document.getElementById('input');
var btn = document.getElementById('btn');
var print_mes = document.getElementById('print');




//بشوف شو الEvent اللي حسويه
//هنا لما اضغط ع الزر  هات القيمة اللي فيه وحطها ب 
//<p>
//Event
btn.onclick = function() {
    var inp_mes=input.value;
    if (inp_mes !=""){
 print_mes.innerHTML  = inp_mes;
 input.value="";
    }
};





