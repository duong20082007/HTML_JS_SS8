let sum = (a, b) => {
    return a + b;
};

// HOF

let handleSum = (callback) => {
    console.log(callback(1, 2));  
};

handleSum((a, b) => {
    return a + b;
});

// forEach 
let listNumber = [10, 20, 30 ,100, -20];

for(let i = 0; i < listNumber.length; i++){
    console.log(listNumber[i]);
}

listNumber.forEach((item, index, array) => {
    console.log(`${index} : ${item}`);
    console.log(`${array}`);
});

// map() : tạo ra mảng mới 
let = newArray = listNumber.map((number, index) => {
    let newNumber;
    if(index % 2 == 0){
        newNumber = number * 2;
    } else {
        newNumber = number; 
    }
    return newNumber;
});
console.log(newArray);

let newListNumber = [1, 2, 3, 4];
let newSo = newListNumber.filter(() => {

});

newListNumber.reduce((acc, cur, index, array) => {
    return acc += cur;
}, 0);
