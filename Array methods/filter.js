const numbers =[1,2,3,4,5,6];

const even = numbers.filter(isEven)

function isEven(value){
    return value % 2 == 0;
}

console.log(even);

const car =[
    {
        model:'Audi A5 Sportback',
        milage :18.2 
    },
    {
        model:'BMW X1',
        milage :20.1
    }
];

const MyCar = car.filter(bestMilage)

function bestMilage(value){
    return value.milage > 19;
}

console.log(MyCar);
