const numbers=[20,25,14,16,15];
const addition=numbers.map(add);
function add(num){
    return num+10;
}
console.log(addition);