const numbers = [1,2,3,4,5];

const total = numbers.reduce(sum, 0);
  
function sum(accumulator,value){
    return accumulator + value;
}
console.log(total);

const Bill = [
    {
        product: 'Body Soap',
        value: 320,
        count: 3
    },
    {
        product: 'Toothbrush',
        value: 75,
        count: 4

    },
    {
        product: 'Cheese',
        value: 89,
        count: 4
    }
];
const totalbill = Bill.reduce(
     (acc,item) => acc + (item.value * item.count),
     0
);

console.log(totalbill);