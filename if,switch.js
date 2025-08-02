// 1. if 조건문
let num = 4;
if (num < 3) {
  console.log("num은 10 이상입니다");
  console.log("조건이 참 입니다!");
} else if (num < 7) {
  console.log("num은 4보다 큽니다");
} else {
  console.log("조건이 거짓입니다");
}

// 2. Switch문
// -> if문과 기능같음
// -> 다수의 조건 처리할 때 if보다 더 직관적

let animal = "bear";
switch (animal) {
  case "cat": {
    console.log("고양이");
    break;
  }
  case "dog": {
    console.log("강아지");
    break;
  }
  case "bear": {
    console.log("곰");
    break;
  }
  case "snake": {
    console.log("뱀");
    break;
  }
  case "tiger": {
    console.log("호랑이");
    break;
  }
  default: {
    console.log("그런 동물은 없습니다");
  }
}
