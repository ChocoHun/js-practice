// 1. 객체 생성
let obj1 = new Object(); //객체 생성자
let obj2 = {}; // 객체 리터럴(대부분 사용)

// 2.객체 프로퍼티(객체 속성)
let person = {
  name: "송용훈",
  home: "화성",
  hobby: "youtube",
  "like cat": true,
};
console.log(person);

// 3.특정 프로퍼티에 접근(점 표기법,대괄호 표기법)
console.log(person.name);
console.log(person["home"]);
console.log(person["like cat"]);
let property = "hobby";
console.log(person[property]);

// 4.새로운 프로퍼티 추가하는 방법
person.job = "fe developer";
person["favoriteFood"] = "떡볶이";

// 5.프로퍼티를 수정하는 방법
person.job = "educator";
person["favoriteFood"] = "삼겹살";

// 6.프로퍼티를 삭제하는 방법
delete person.job;
delete person["favoriteFood"];
console.log(person);

// 7.프로퍼티의 존재 유무를 확인하는 방법(in 연산자)
let result = "name" in person;
let result1 = "dog" in person;
console.log(result1);

// 8.상수 객체
const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};
animal.age = 2; //추가
animal.name = "까망이"; //수정
delete animal.color; //삭제
console.log(animal);

// 9. 메서드(객체 안에 있는 함수)
const person1 = {
  name: "송용훈",
  sayHi: function () {
    console.log("안녕");
  },
};
person1.sayHi();
person1["sayHi"]();
