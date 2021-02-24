const numbers =[1,2,3,4,5];

const res = numbers.some(greater)
//res will get boolean value as result in this case it is true
function greater(item){
    return item > 4;
} 
console.log(res);
