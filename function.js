function getArea(width, height) {
  function another() {
    console.log("another");
  }
  another();
  let area = width * height;
  return area;
}
let area1 = getArea(1, 2);
console.log(area1);
let area2 = getArea(5, 4);
console.log(area2);
let area3 = getArea(10, 10);
console.log(area3);
