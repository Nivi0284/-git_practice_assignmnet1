function Prime(num){
    let factors=0;
    for(let i=1; i<=num; i++){
        if(num%i==0){
            factors++;
            return true;
        }
        return false;
    }
}

let answer=Prime(19);
if(answer==true){
    console.log("prime");
}else{
    console.log("Not prime");
}