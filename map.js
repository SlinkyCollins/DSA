const mapOne = new Map();
mapOne.set([2,4,6,8,10], "even numbers");
mapOne.set([1,3,5,7,9], "odd numbers");
mapOne.set("name", "Mango");
mapOne.set("age", 12);
mapOne.set(true, 9087);
mapOne.set(null, "empty value");
mapOne.set(undefined, [{},{}])
mapOne.set(NaN, "not a number");
// mapOne.delete(undefined)
// mapOne.clear()

console.log(mapOne.size);
console.log(mapOne.get("name"));
console.log(mapOne.get(true));
console.log(mapOne.has(undefined));
console.log(mapOne);

// mapOne.forEach((item)=>{
//     console.log(item);
// })