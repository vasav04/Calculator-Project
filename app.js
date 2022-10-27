

(function(){
let screen=document.querySelector('.screen');
let buttons=document.querySelectorAll('.btn');
let clear=document.querySelector('.btn-clear');
let equal=document.querySelector('.btn-equal');
buttons.forEach(function(button){
    button.addEventListener('click',function(e){
        let value=e.target.dataset.num;
        screen.value +=value;
    });
});
equal.addEventListener('click',function(e){
    if(screen.value ===''){
        screen.value="";
    }else{
        let answer= eval(screen.value);
        screen.value=answer;
    }
});
clear.addEventListener('click',function(e){
    screen.value='';
});
})();
const val=document.getElementById('temp');
const bod=document.querySelector('body');
const cal=document.querySelector('section');
const form=document.querySelector('.screen');
const but=document.querySelector('.buttons');
const but2=document.querySelector('form');

val.addEventListener('click',function (){
	val.classList.toggle('active');
	bod.classList.toggle('active');
    cal.classList.toggle('active');
    form.classList.toggle('active');
    but.classList.toggle('active');
    but2.classList.toggle('active');
});