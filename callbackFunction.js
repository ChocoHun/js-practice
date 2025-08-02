// 1. 콜백함수
// -> 다른함수의 인수로 전달되서 나중에 호출되는 함수
function main(value) {
  console.log(1);
  value();
  console.log(2);
}
function sub() {
  console.log("i am sub");
}
main(sub);

// 2. 콜백함수의 활용
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx); //함수 호출시 값을 넘겨줘야 실제로 받음
  }
}
repeat(5, function (idx) {
  console.log(idx);
});

// repeat(5, (idx) => {
//   console.log(idx * 2);
// });
