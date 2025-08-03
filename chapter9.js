// 함수 선언
function greeting() {
  console.log("안녕하세요");
}
console.log("호출 전");
greeting();
console.log("호출 후");

// 넓이 구하는 함수

let area1 = getArea(10, 40);
console.log(area1); //호이스팅 -> 끌어올리다 라는 뜻

function getArea(width, height) {
  function another() {
    //중첩 함수
    console.log("another1");
  }
  another();
  let area = width * height;
  return area;
}
