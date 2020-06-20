function multiplyBy(num1) {
  return function(num2) {
    return num1 * num2;
  };
}

const b = new multiplyBy(5);
console.log(b(4));
