// First Problem
function mindGame(num){
    const multiplication=num*3;
    const addition=multiplication+10;
    const division=addition/2;
    const substraction=division-5; 
    return substraction;
}
let Number=50;
let number= mindGame(Number);
console.log(number);
// Second Problem
function evenOdd(name){
    const remainder=name.length%2;
    if(remainder ===0){
        return"even";
    }
    else{
        return"odd";
    }
}
const Odd= evenOdd("batch7");
console.log(Odd);




// Third Problem
function isLGSeven(num){
    const substraction= num-7;
    if(substraction<=7){
        return substraction;
    }
    else{
        const double=num*2;
        return double;
    }
}
const myNumber=isLGSeven(6);
console.log(myNumber);
// Fourth Problem
function findingBadData(numbers){
    let count=0;
    for(let i=0;i<numbers.length;i++){
        const element = numbers[i];
        if(element<0) count++
    }
    return count;
}
let mainRes= findingBadData([-4, -9, -5, -33, -55]);
console.log(mainRes);




// Fifth Problem
function gemsToDiamond(first,second,third){
    let gemOfFirst=first*21;
    let gemOfSecond=second*32;
    let gemOfThird=third*43;
    let total=  gemOfFirst+gemOfSecond+gemOfThird;

    if(total>1000*2){
        return total-2000;
    }
    else{
        return total
    }
}
const myInput=gemsToDiamond(1,1,1);
console.log(myInput);