// f1:increment of 7
/*
function inc7(n) {
  n = n + 7;
  return n;
}

console.log(inc7(14));



// f2: lower to upper case and vice versa

function capitlize(s, f) {
  s = s.toUpperCase();
  f = f.toLowerCase();

  console.log(s, f);
}
capitlize("aFcd", "aKdLLLLad");

*/

// return the last value

function last() {
  let n = prompt("string:");
  console.log(n.length);
  console.log(n.length - 1);
  console.log(n[n.length - 1]);
}

last();
