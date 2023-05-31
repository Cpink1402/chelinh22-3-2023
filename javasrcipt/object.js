// class Person{
    
//     constructor(name, age){
//         this.name=name;
//         this.age=age;
//     }
// }


// function Person1(name, age){
//     this.name = name
//     this.age= age

//     this.sayHi= function(){
//         return "hello, nam:" + this.name;
//     }
// }
// console.log("linh", 19)


// class Person2{
//     constructor(firstName, lastName){
//         this.firstName=Nguyenvan;
//         this.lastName=Binh;
//     }
// }
// console.log("name:"+this.firstName);

// function Person2(firstName, lastName){
//     this.firstName=Nguyenvan;
//     this.lastName=Binh;

// }


// Create an object containing the salaries of the employees
// const nhanvien = {
//     "mai": 1000,
//     "an": 2000,
//     "nam": 3000,
//   };
//   console.log("mai","an")
//   function tongLuong(salaries) {
//     let tong = 0;
//     for (const employee in salaries) {
//       tong += salaries[employee];
//     }
//     return tong;
//   }
  
//   // Call the function and log the result to the console
//   console.log(tongLuong(nhanvien)); 

//bai 4
// const menu = {
//     width:1000, height:500, title:"contact",

//     dbNumber : function(){
//         let arrayKeys= Object.keys(this)
//         console.log()

//         for (let i=0; i< arrayKeys.length; i++){
//             const key =arrayKeys[i];
//             if (typeof this[key]=== "number"){
//                 this[key]=this[key]*2
//             }
//         }
//     }
// }
// console.log(menu);
// menu.dbNumber()
// console.log(menu);

// bài 5

const computer ={

    read : function(number1,number2){
        this.number1= number1;
        this.number2= number2;
    },

    sum : function(){
        return this.number1 + this.number2
    },

    mul : function(){
        return this.number1 * this.number2
    }
}
console.log(computer);
computer.read(5,6)
console.log(computer);
console.log(computer.sum());
console.log(computer);
console.log(computer.mul());

  