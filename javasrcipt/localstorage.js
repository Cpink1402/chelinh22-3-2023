// const valueInLocalStorage = localStorage.getItem("userName")



// const userNameInput = document.getElementById("userNameInput");
// const btnAdd = document.getElementById("add");
// console.log(btnAdd);
// const btnDelete = document.getElementById("delete");

// const show = document.getElementById("show");

// window.onload = (e)=>{
//     show.innerText = value
// }

// if(valueInLocalStorage){
//     btnAdd.textContent ="edit"
//     userNameInput.value = valueInLocalStorage
// }
// btnAdd.addEventListener("click", function (event){
//     const value= userNameInput.value;
//     show.innerText = value;
//     localStorage.setItem("userName", value)
//     btnAdd.textContent = "edit"
// })

// btnDelete.addEventListener("click",(e)=>{
//     localStorage.removeItem("userName")
//     userNameInput.value=""
//     btnAdd.textContent ="add"
//     show.innerText=""
// })

// userNameInput.onchange = (e) => {
//     console.log(event.target.value);
// }

//bài 2

// const username = document.getElementById("userName")
// const password = document.getElementById("password")

// const userNameInLocalStorage = localStorage.getItem("userName")
// const passInLocalStorage = localStorage.getItem("pasword")

// userName.addEventListener("change",(e)=>{
//     localStorage.setItem("userName", e.target.value)
//     sessionStorage.setItem("userName",e.target.value)
// })

// password.addEventListener("change",(e)=>{
//     localStorage.setItem("password", e.target.value)
//     sessionStorage.setItem("password",e.target.value)
// })

// const form = document.getElementById("form")
// form["userName"]

//bài 3
 
let arrayProduct = []

const namValue= document.getElementById("name")
const priceValue = document.getElementById("save")
const ulHtml = document.getElementById("ul")

saveBtn.addEventListener("click", event =>{
    let newProduct = {
        name: nameValue.value,
        price: priceValue.value
    }
})