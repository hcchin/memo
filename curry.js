function curry(func) {
  return function curried(...args) {
    console.log("first curry, args=", args);
    if (args.length >= func.length) {
      console.log("  first curry-if, args=", args);
      return func.apply(this, args);
    } else {
      console.log("  first curry-else, args=", args);
      return function (...args2) {
        console.log("    second curry, args2=", args2);
        console.log(
          "      PROCESS >>> args.concat(args2) >>>",
          args.concat(args2)
        );
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

function sum(a, b, c) {
  console.log("    PROCESS >>> sum");
  return a + b + c;
}

let curriedSum = curry(sum);

// console.log("\nfull curry:");
// console.log(curriedSum(1)(2)(3));

// console.log("\ncurrying of 1st arg:");
// console.log(curriedSum(1)(2, 3));

// console.log("\nstill callable normally:");
// console.log(curriedSum(1, 2, 3));

console.log("\ncurrying of 2nd arg:");
console.log(curriedSum(1, 2)(3));
