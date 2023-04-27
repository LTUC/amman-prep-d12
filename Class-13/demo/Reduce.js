// `array.reduce( fn(acc,v,i) {},initVal )` Much like `array.forEach()`
// The `array.reduce()` function iterates over an array and runs a call back for each element. The callback receives the accumalator, the value and the index of the array element as parameters.  

// The original array will never be harmed

// The accumaltor is a placeholder for what you want to return when the callback iteration is done running.


// Add up all the numbers in an array
// let numbers = [1, 2, 3, 4];
// let sum = numbers.reduce((acc, val, idx) => {
//   acc = acc + val;
//   return acc;
// });

// console.log(sum);


// change the shape of your data
// let family = [
//   { name: 'yousof', role: 'dad' },
//   { name: 'eman', role: 'mum' },
//   { name: 'mohammad', role: 'bro' },
//   { name: 'leen', role: 'sis' }
// ];

// let newFamily = family.reduce((acc, val, idx) => {
//   acc[val.role] = val.name;
//   return acc;
// }, {});

// console.log(newFamily);

// let x = 'mum';
// console.log(newFamily);
// console.log(newFamily['mum']);
// console.log(newFamily.mum);
// console.log(typeof newFamily)