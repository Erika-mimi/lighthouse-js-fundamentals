const sayHello = function (name){
  console.log("Hello, " + name);
}
sayHello("Erika");

const returnSayHello = function (name2){
  return "Hello, " + name2;
}
const greeting = returnSayHello("Erika");
console.log(greeting);