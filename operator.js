// 1. 대입 연산자
let var1 = 1;

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;
let num6 = (1 + 2) * 10;
console.log(num6);

// 3. 복합 대입 연산자
let num7 = 20;
num7 += 20;
num7 *= 4;
console.log(num7);

// 4. 증감 연산자
let num8 = 10;
console.log(++num8);
console.log(num8++);
console.log(num8);

// 5. 논리 연산자
let or = true || false; // 하나만 참이어도 참
let and = true && false; // 모두 참이어야 참
let not = !true; // 반대
console.log(or, and, not);

// 6. 비교 연산자
let comp1 = 1 === "1";
let comp2 = 1 !== 2;
console.log(comp1, comp2);
let comp3 = 2 > 1;
let comp4 = 2 < 1;
console.log(comp3, comp4);
let comp5 = 2 >= 2;
let comp6 = 2 <= 2;
console.log(comp5, comp6);

// 7.null,undefined 가 아닌 값을 찾아내는 연산자,아니면 맨 처음 값 출력
let var2;
let var3 = 10;
let var4 = 20;
let var5 = var2 ?? var4;
let var6 = var3 ?? var4;
console.log(var5);
console.log(var6);

// 8.typeof 연산자
let var7 = 1;
var7 = "hello";
var7 = true;
let t1 = typeof var7;
console.log(t1);

// 9.삼항 연산자
// -> 조건식?참일때 출력:거짓일때 출력
let var8 = 9;
let res = var8 % 2 === 0 ? "짝수" : "홀수";
console.log(res);
