console.log("HELLOO BACHO");

let year = 250;
if (year == 250) {
  console.log("sahi hai");
  console.log("bilkul");
}

if (1) {
  console.log("ching");
}
if (0) {
  console.log("chutney");
}

let cond = year == 250;
if (cond) {
  console.log("pinky");
}

let day = 50;

if (day == 60) {
  console.log("chor");
} else {
  console.log("chorni");
}

if (day > 40) {
  console.log("jyada");
} else if (day < 40) {
  console.log("kam");
} else {
  console.log("perfect");
}

let access;
let age = prompt("age", "14");

if (age > 18) {
  access = true;
} else {
  access = false;
}
console.log(access);

console.log("rukooooooo");

let entry = age > 18 ? true : "gadhe";
console.log(entry);

let ent = age > 18;
console.log(ent);

let born = prompt("age", 18);
let mesg =
  born < 3
    ? "hello"
    : born < 18
      ? "hey"
      : born < 100
        ? "namaste"
        : "what the fuk";

console.log(mesg);

let name = prompt("name?", "");

name == "vivek" ? console.log(true) : console.log(false);

name == "krishna" ? console.log(true) : console.log(false);
