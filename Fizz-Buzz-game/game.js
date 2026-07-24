let till = parseInt(prompt("enter the number:"));
let a = 0;
for (let i = 1; i <= till; i++) {
  if (i % 15 === 0) {
    //or use if (i%3===0 && i%5===0)

    a = a + 1;
    console.log("fizzbuzz");
  } else if (i % 3 === 0) {
    console.log("fizz");
  } else if (i % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(i);
  }
}
console.log("total fizzbuzz:", a);
