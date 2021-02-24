const numbers =[1,2,3,4,5];

const numbersDouble = numbers.map(double)

function double(value,index,arr){
    return value*2;
}
console.log(numbersDouble);