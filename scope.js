// 스코프
// -> 전역(전체 영역에서 접근가능) 스코프
// -> 지역(특정 영역에서만 접근가능) 스코프

let a = 1; // 전역 스코프
function funcA() {
  let b = 2; // 지역 스코프
  console.log(a);
}
funcA();

if (true) {
  let c = 3;
}
console.log(c); //오류 발생

for (let idx = 1; idx < 5; idx++) {
  let d = 4;
}
console.log(d); //오류 발생
