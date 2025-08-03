// 1.배열의 구조 분해 할당
//->배열의 저장된 값을 꺼내서 변수에 할당
let arr = [1, 2, 3];
let [one, two, three, four = 4] = arr;
console.log(one, two, three, four);

// 2.객체의 구조 분해 할당
let person = {
  name: "송용훈",
  time: 8,
  hobby: "youtube",
};

let { name, time: myTime, hobby, extra = "hello" } = person;
console.log(name, myTime, hobby, extra);

// 3.객체 구조분해 할당을 이용해서 함수의 매개변수를 받는 방법

const func = ({ name, time, hobby, extra }) => {
  console.log(name, time, hobby, extra);
};
func(person);
