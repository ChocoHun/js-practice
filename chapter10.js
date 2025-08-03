// 1. for 반복문 for(초기식;조건식;증감식){실행코드}

for (idx = 0; idx < 10; idx++) {
  if (idx % 2 === 0) {
    continue;
  }
  console.log(idx);
  if (idx >= 5) {
    break;
  }
}
