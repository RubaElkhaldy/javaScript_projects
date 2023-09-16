//بجيب كل العناصر  وبخزنها بمتغير
// Get all element into js(class)

// 1.selector      اول طريقة للclass
console.log('f')

var btn =document.querySelector(".btn");
var mydiv=document.querySelector(".mydiv");

//Event اضعط ع الرز ويتغير الوان الdiv
    //create array to contain colors

    //عند كل ضغطة زر بدي  يتغيير لون المربع 
    // الفكرة انا عندي 3 الوان كيف احفظهم عندي  كيف احفظهم ؟؟ظ
    // بدي احط 3 الوان  ب مصفوفة  الجوااب :

    var  colors=['red','green','blue'];
    var i=0;


//click into button
btn.onclick = function(){
    
mydiv.style.backgroundColor = colors[i];
i++; 

// عشان م يضل واقف ع اللون الاخير ويرجع من الاول
if(i==3){
    i=0
} 

}