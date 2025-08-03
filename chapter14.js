// 1.js 단락평가
function returnFalse() {
  console.log("false 함수");
  return false;
}
function returnTrue() {
  console.log("true 함수");
  return true;
}
console.log(returnFalse() && returnTrue());
// returnFalse로 이미 결정됨, returnTrue는 실행x

console.log(returnTrue() || returnFalse());
// returnTrue로 이미 결정됨, returnFalse는 실행x

// 2. 단락평가 활용 사례

function printName(person) {
  const name = person && person.name;
  console.log(name || "person 값 없음");
}
printName();
printName({ name: "송용훈" });

// True || True 첫번째 출력
// True && True 두번째 출력
