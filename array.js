let fruit1 = "banana"
let fruit2 = "apple"
let fruit3 = "grape"
let fruit4 = "mango"
console.log(fruit1, fruit2, fruit3, fruit4)
let fruit = ["banana","apple","grape","mango"]


// 배열과 함께 쓸수있는 함수들
// 1. pop
// 마지막 배열방에 데이터가 빠짐(삭제)
fruit.pop()
console.log(fruit)
// 2. push
// 배열방에 데이터넣기
fruit.push("pineapple")
console.log(fruit)
// 3. includes
// 배열방안에 특정데이터값(ex-"apple")을 포함하고 있나?
console.log(fruit.includes("apple"))
// 4. indexof
// fruit배열에서 특정데이터값(ex-"apple")이 몇번째 방안(몇번째 index인지)에 있는지 알려줌
console.log(fruit.indexOf("apple"))
// 5. slice
// 배열명.slice(indexnumber): 배열의 해당인덱스번호이후값들은 다 잘라서 반환해줌
console.log(fruit.slice(2))
// 배열명.slice(start_(idx)num, end_(idx)num): 시작하는 index번호부터 끝나는 index번호전까지 값을 자라서 반환해준다.
console.log(fruit.slice(1,3))

// 6.splice
// 배열명.splice(start_(idx)num, num_of_index): 잘라낼값의 시작점(start_num)에서 입력한 배열방의 갯수(num_ofindex)만큼 잘라낸다(제거)
fruit.splice(2,2)
console.log(fruit)
let patient = {
  name: "Hong",
  age: 17,
  disease: "cold"
}
  // 개체(객체).속성명
  // patient.name = "Lee" 
console.log(patient)
console.log(patient.name)
console.log(patient["name"])

patient.name = "Lee"
patient.age = 40
console.log(patient)

// 환자들의 list는 배열로 만들수 있다.
let patientList = [{name:"Lee",age:17},{name:"Hong",age:35},{name:"Kim", age:55}]

console.log(patientList)
console.log("첫번째 환자는 : ", patientList[0])
console.log("첫번째 환자 이름 : ", patientList[0].name)