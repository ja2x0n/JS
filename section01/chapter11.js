// 1.함수선언
// 함수 호출보다 선언을 아래에다 해도 호이스팅 때문에 문제없음
function greeting() {
    console.log("안녕하세요");
}
console.log("호출 전");
greeting();
console.log("호출 후");

// (매개변수)
function getArea(width, height) {

  function another() {
    console.log("another");
}

another();
    let area = width * height;

    return area;
    // 반환값
    console.log("hello");
}

// (인수)
let area1 = getArea(10, 20);
console.log(area1);
let area2 = getArea(30, 20);
console.log(area2);
getArea(120, 200);
