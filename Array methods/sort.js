const letters = ['z','a','w','y','f'];
letters.sort();
console.log(letters);

const numbers = [100,20,25,30];//sort will convert numbers to strings.
numbers.sort(comparefunction)
console.log(numbers);

function comparefunction(a,b){
    return(a-b);
}