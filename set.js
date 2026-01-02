const setOne = new Set()
setOne.add('Mango')
setOne.add(null)
setOne.add(12)
setOne.add(14)
// setOne.delete(12)
console.log(setOne.has(null));
console.log(setOne.size);
// setOne.clear()

for (const item of setOne) {
    console.log(item);
}