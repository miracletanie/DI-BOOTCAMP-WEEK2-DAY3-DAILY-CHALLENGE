let n = 6;
let string = "";
for (let i = 1; i <= n; i++) {
    string += "* ".repeat(i);
    string += "\n";
}
console.log(string);


// SECOND

let n2 = 5;
let string2 = "";
for (let i = 1; i <= n2; i++) {
  for (let j = 0; j < i; j++) {
    string2 += "*";
  }
  string2 += "\n";
}
console.log(string2);