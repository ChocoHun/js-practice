//1.변수
let age;
console.log(age);
age = 30;
console.log(age);

//2.상수
const birth = "11/30";
console.log(birth);

//3.변수 명명규칙(네이밍 규칙)
//3-1. 숫자로 시작불가,기호는 _(언더바),$(달러)만 사용가능
let _apple = 30;
let $apple = 30;
console.log(_apple);
console.log($apple);

//3-2 예약어를 사용할 수 없다.

//3-3 변수 명명 가이드(누구나 알아볼 수 있는 의미있는 변수명으로)
let salesCount = 3;
let refundCount = 1;
let totalSalesCount = salesCount - refundCount;
console.log(totalSalesCount);
