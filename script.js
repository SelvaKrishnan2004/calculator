let input ='';

function display(value){
    input += value;
    document.getElementById('display1').innerText = input ;
}
function cleardisplay(){
    input='';
    document.getElementById('display1').innerText= '0' ;
}
function calculate(){
    try{
        const result=eval(input);
        input = result.toString();
        document.getElementById('display1').innerText= input ;
    }catch(error){
        document.getElementById('display1').innerText= 'Syntax error';
    }
    
}