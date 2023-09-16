
var image_show=document.querySelector('#image_show');
var images=['images/1.jpg','images/2.png','images/3.jpg','images/4.jpg'];
var i=0;
function silde_show(){
image_show.setAttribute('src',images[i]);


if(i==images.length-1){
    i=0;
}else{
    i++;
}





setTimeout(function()
{ 
    silde_show();  },2000);
//2000 ثانيتن





}
silde_show();