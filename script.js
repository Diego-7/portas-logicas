function invalido(num1, num2, res){
  
if(num1 > 1 || num2 > 1 || num1 == '' || num2 == '') {
    
    res.value = "INVALIDO"
}

}

//PORTA AND
function andCalc(){

    const resAnd = document.querySelector(".saida-and");

    let num1 = document.andForm.f_and1.value;

    let num2 = document.andForm.f_and2.value;
    
    if(num1 == 1 && num2 == 1){

        resAnd.value = 1
    }
    
     else {
        resAnd.value = 0;
    }

    invalido(num1, num2, resAnd);

}

//PORTA OR
function orCalc(){

    const resOr = document.querySelector(".saida-or");

    let num1 = document.orForm.f_or1.value;

    let num2 = document.orForm.f_or2.value;

    if(num1 == 1 || num2 == 1){

        resOr.value = 1
    }
    
   else {
        resOr.value = 0;
    }

    invalido(num1, num2, resOr);
        
    } 

//PORTA NOT
function notCalc(){

    const resNot = document.querySelector(".saida-not");

    let num1 = document.notForm.f_not.value;

if(num1 > 1 || num1 == '') {
    
    resNot.value = "INVALIDO"
}

   else if(num1 == 1 ){

        resNot.value = 0

    }else{

    resNot.value = 1
        
    }
        
    } 

//PORTA XOR
function xorCalc(){

    const resXor = document.querySelector(".saida-xor");

    let num1 = document.xorForm.f_xor1.value;

    let num2 = document.xorForm.f_xor2.value;

    if(num1 == 1 && num2 == 0 || num1 == 0 && num2 == 1){

        resXor.value = 1
    }
    
   else {
        resXor.value = 0;
    }

    invalido(num1, num2, resXor);   
    
    } 

//PORTA NAND
function nandCalc(){

    const resNand = document.querySelector(".saida-nand");

    let num1 = document.nandForm.f_nand1.value;

    let num2 = document.nandForm.f_nand2.value;

    if(num1 == 1 && num2 == 1){

        resNand.value = 0
    }
    
    else {
        resNand.value = 1;
    }

    invalido(num1, num2, resNand);
}

//PORTA NOR
function norCalc(){

    const resNor = document.querySelector(".saida-nor");

    let num1 = document.norForm.f_nor1.value;

    let num2 = document.norForm.f_nor2.value;

    if(num1 == 0 && num2 == 0){

        resNor.value = 1
    }
    
   else {
        resNor.value = 0;
    }

    invalido(num1, num2, resNor);

}

//PORTA XNOR
function xnorCalc(){

    const resXnor = document.querySelector(".saida-xnor");

    let num1 = document.xnorForm.f_xnor1.value;

    let num2 = document.xnorForm.f_xnor2.value;

    if(num1 == 0 && num2 == 0 || num1 == 1 && num2 == 1){

        resXnor.value = 1
    }
    
   else {
        resXnor.value = 0;
    }

    invalido(num1, num2, resXnor);

}
