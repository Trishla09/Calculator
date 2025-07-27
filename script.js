let input=document.getElementById("inputt")
let buttons=document.querySelectorAll("button");

let string=""
let arr=Array.from(buttons);

function isValidInput(newChar) {
    const operators = ['+', '-', '*', '/', '.'];
    let lastChar = string[string.length - 1];
    if (operators.includes(lastChar) && operators.includes(newChar)) {
        return false;
    }
    return true;
}
arr.forEach(button =>{
    button.addEventListener('click',(e)=>{
        let val = e.target.innerHTML;
        if(val==='='){
            string=eval(string);
            input.value=string;
        }
        else if(val==='AC'){
            string="";
            input.value=string;
        }
        else if(val==='DEL'){
            string=string.substring(0,string.length-1);
            input.value=string;
        }
        else{
            if (isValidInput(val)) {
            string+=e.target.innerHTML;
            input.value=string;
            }
        }
    })

})
