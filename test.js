function Person(name) {
  if (!new.target) {
    throw new Error("Person은 `new`연산자가 필요합니다.");
  }
  this.name = name;
}

// const p1 = new Person("Alice"); // 생성자 함수 호출
// console.log(p1 instanceof Person); // true

const p2 = Person("Bob"); // 생성자 함수 일반 호출 (오류 발생)
// Uncaught Error: Person은 `new`연산자가 필요합니다.
