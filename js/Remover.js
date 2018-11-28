let isbn = [9,7,8,8,5,2,1,6,1,3,3,0,5];
let isbn2 = [8,5,2,4,0,2,3,9,4,5];

function verificar2(){
    let total = 0;
    for(let i = 0; i<10;i++){
        total = total + isbn2[i]*(10-i);
    }
    if(total%11 == 0){
        return true;
    }
    else{
        return false;
    }; 
}

function verificar(){
    let total = 0;
    for(let i = 0; i<13;i++){
        if(i % 2 == 0){
        total = total + isbn[i]*1;
        }
        else{
        total = total + isbn[i]*3;
        }
    }
    if(total%10 == 0){
        return true;
    }
    else{
        return false;
    }; 
}

console.log(verificar2());