let screen = document.getElementById('screen');
let screen_sh1 = document.getElementById('screen_sh-1');
let screen_sh2 = document.getElementById('screen_sh-2');
let screen_sh3 = document.getElementById('screen_sh-3');
let screen_sh4 = document.getElementById('screen_sh-4');

let buttons = document.querySelectorAll('button');
let screenValue = '';
for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        screen.value += buttonText;
        console.log(buttonText);

        if(buttonText == 'C'){
            screenValue = '';
            screen.value = screenValue;
        }
        else if(buttonText == '='){
            screen.value =eval(screenValue);
            screen_sh1.value =(152) /eval(screenValue);
            screen_sh2.value =(143) /eval(screenValue);
            screen_sh3.value =(137) /eval(screenValue);
            screen_sh4.value =(39) /eval(screenValue);
           
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}