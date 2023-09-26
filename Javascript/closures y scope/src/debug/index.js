var a = "hello";

function hello() {
  let b = "hello world";
  const c = "hello world!";
  if (true) {
    let d = "hello world!!";
    debugger;
  }
}

// Pal eduard
var first_number = 13;
var second_number = 27;

function add() {
  function sum(f1, f2) {
    return f1 + f2;
  }
  console.log(sum(first_number, second_number));
}

add(first_number, second_number);