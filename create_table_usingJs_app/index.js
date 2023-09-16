var row_input=document.getElementById('row');
var cols_input=document.getElementById('cols');
var btn=document.getElementById('btn');



btn.addEventListener('click',create_table);



function create_table(){

 let body=document.body;
let table=document.createElement("table");

table.style.border="2px black dotted";


for(var i=0;i<row_input.value;i++){
let tr= document.createElement('tr');
table.appendChild(tr);



for(var j=0;j<cols_input.value;j++){
    let td= document.createElement('td');
    td.style.border="2px black solid"
    tr.appendChild(td);

let  txt=document.createTextNode("item");
td.appendChild(txt);


}
    
    }
   
body.appendChild(table);


}

