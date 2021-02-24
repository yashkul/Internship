const Genres = ['Comedy','Action','Drama','Mystry'];
const res = Genres.find(Intrests);
function Intrests(item){
    return item == 'Mystry';
}
console.log(res);

