// Object to string
let json =JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json); //["apple", "banana"]

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${name} can jump!`);
    },
};

json = JSON.stringify(rabbit);
console.log(rabbit);

json = JSON.stringify(rabbit, ['name', 'color']);
console.log(rabbit);

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`)
    return value
});
console.log(rabbit);

// String to object
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);

rabbit.jump();

console.log(rabbit.birthDate.getDate());