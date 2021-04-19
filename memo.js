// const data = {
//   john: "hello john",
//   sean: "hello sean",
// };
// let globalInput = "";
// let globalOutput = "";

const sayHello = (name) => {
  console.log("run");
  return `hello ${name}`;
};

const sayBye = (name) => {
  console.log("run");
  return `bye ${name}`;
};

const memo = (fn) => {
  let data = {};
  return {
    run: (name) => {
      if (data[name]) {
        return data[name];
      }

      data[name] = fn(name);
      return data[name];
    },
    data,
  };
};

const { run: memoSayHello, data: helloData } = memo(sayHello);
const { run: memoSayBye, data: byeData } = memo(sayBye);
const { run: memoSayBye2, data: byeData2 } = memo(sayBye);

console.log(memoSayHello("john"));
console.log(memoSayHello("john"));
console.log(memoSayHello("sean"));
console.log(memoSayHello("sean"));
console.log(memoSayBye("john"));
console.log(memoSayHello("john"));
console.log(memoSayHello("john"));
console.log(memoSayBye("john"));
console.log(memoSayBye2("john"));
console.log(helloData);
console.log(byeData);
console.log(byeData2);
