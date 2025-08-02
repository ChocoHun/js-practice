// 1. 함수 표현식
function funcA() {
  console.log("funcA");
}
let apple = funcA;
apple();

let grape = function () {
  console.log("funcB");
};
grape();

// 2. 화살표 함수
let part1 = (value) => {
  console.log(value);
  return value + 1;
};
console.log(part1(10));
