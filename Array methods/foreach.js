const numbers=[1, 2, 3, 4, 5];
numbers.forEach(consoleItem);
function consoleItem(item,index,arr){
    console.log('a['+ index + ']  = ' + item);

};

const letters=['a','b','c','d','a'];
let count = {};
letters.forEach(item => {
    if(count[item]){
        count[item]++;
    }else{
        count[item] = 1;
    }
});
console.log(count);