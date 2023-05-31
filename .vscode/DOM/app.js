//1 truy van cac the html bang js
// truy van thong qua ID
// let divElement = document.getElementById("demo");
// console.log("truy van queryselector",divElement);

// // truy van thong qua class
// let divElement2 = document.getElementsByClassName("demo");
// console.log("truy van queryselector",divElement2);
// //truy van thong qua tagname
// let divElement3= document.getElementsByTagName("div");
// console.log("truy van queryselector",divElement3)

//truy van bang queryselector
//truy van qua class
// let divElement4=document.querySelector(".demo");
// console.log("truy van queryselector", divElement4);
// Truy van qua id
// let divElement4=document.querySelector("#demo");
// console.log("truy van queryselector", divElement4)
// //truy van qua queryselectorALL()
// let divElement5=document.querySelectorAll("#demo");
// console.log("truy van queryselectorALL", divElement5)

// 2.thao tác thay dổi các thuộc tính trong html qua js
//lấy content innerText; innerHTML, textContent
// let ulElement =document.getElementById("list-item");
// console.log(ulElement);

// console.log("1",ulElement.innerText);
// console.log("2",ulElement.innerHTML);
// console.log("3",ulElement.textContent);

//set và lấy các attribute ( thuộc tính )
//vd: <p attribute="value1", attribute="value2",attribute="value3",></p>

// set attribute : thêm attribute vào element
// get attribute để lấy giá trị thuộc tính.
// let ulElement =document.getElementById("list-item");
// ulElement.setAttribute("style", "color:red");
// ulElement.setAttribute("class", "demo");
// let getAttribute = ulElement.getAttribute("class");
// console.log(getAttribute);

// các thuộc tính css
// let ulElement =document.getElementById("list-item");
// ulElement.style.fontSize= "30px";
// ulElement.style.color= "red";

//event
// khi nhấn vào button thì text đổi sang trạng thái mới.
//  let btnChange=document.getElementById("change");
//  console.log(btnChange);
//  let pElement=document.getElementById("content");
//  console.log(pElement);
// //  btnChange.onclick = function (){
// //     console.log("haha");
// //  };
// //  console.log(pElement);
//  btnChange.onclick = function (){
    
//     pElement.innerText = "hello";
//     pElement.style.color = "pink";
//     pElement.style.fontSize =  "30px";

//  };

// function handleClick() {
//     pElement.innerText = "hello";
//     pElement.style.color = "pink";
//     pElement.style.fontSize =  "30px";

// }
// let btnBtn=document.getElementById("btn");
// let btnBtn2=document.getElementById("btn2");
// let pdplay=document.getElementById("dplay");

// btnBtn.onclick = function (){
//     if(dplay.innerText >0){

    
//         pdplay.innerText--;
//     }
        
//      };
    
// btnBtn2.onclick = function (){
//         pdplay.innerText++;
//      };

// let pElement=document.getElementById("zoom");
// let btnPlus=document.getElementById("plus");
// console.log("zoom, plus");

// pElement.setAttribute("style", "color: orange;font-size:16px");
// let count =16;
// btnPlus.onclick = function () {
//     if (count<31){
//         count++,
//         pElement.style.fontSize =`${count}px`;

//     }
//     else if (count ==31) {
//         pElement.style.color="red";
//     }
    
// }
//mathrandoom từ (r,g,b)

// găns sự kiện bằng addevent

// let parents = document.getElementById("parents");
// let content = document.getElementById("content");
// let btnChange = document.getElementById("change");
// console.log(parents,content,btnChange);

//cú pháp 1
// btnChange.addEventListener("click", handleClick);
// function handleClick(){
//     console.log("chào");
// }

//cú pháp 2
//  btnChange.addEventListener("click", function(){
//     console.log("chào 2");
//  });

 // 5 thêm và xóa cacs phần tử trong html
 //a, thêm phần tử html
//  let parents = document.getElementById("parents");
// let content = document.getElementById("content");
// let btnChange = document.getElementById("change");
// console.log(parents,content,btnChange);

// //tạo mới 1 thẻ div
// let div = document.createElement("div");
// console.log(div);
// div.setAttribute("class","demo-add");
// div.innerHTML = "chao ae";
// parents.appendChild (div);

// xóa phần tử trong HTML
// e.remove()
// content.remove();

//xóa với removeChild()
//e.removeChild(child)
// parents.removeChild(btnChange);


// ParentElement và Children
// console.log(content.parentElement);
// console.log(content.children[0].children);


//bài tạo boxmode
// let box=document.getElementById("box");
// let btnChange=document.getElementById("change");
 

// btnChange.onClick = function(){
//     let r = Math.floor(Math.random()*256);
//     let g = Math.floor(Math.random()*256);
//     let b = Math.floor(Math.random()*256);
//     console.log(r,g,b);
//     box.style.backgroundColor = `rgb(${r},${g},${b})`;
// }

let nangcao = document.getElementById("nangcao");
let item = document.getElementById("item");
let check=true;
 
nangcao.addEventListener("click",function(){
    if(check==true){
        nangcao.innerText = "ẩn tìm kiếm nâng cao";
        item.style.display="block";
        check=false;
    }else if(check==false) {
        nangcao.innerText = " tìm kiếm nâng cao";
        item.style.display="none";
        check=true;
    }
})

let item3 = document.getElementById("item3");
let btnAdd = document.getElementById("add");
let list2= document.getElementById("list2")
console.log(item3, btnAdd);

btnAdd.addEventListener("click", function(){
    if(item3.value ==""{
        item3.style.backgroundColor = "blue";

    } else if(item3.value !==""){
        let newItem= item3.value;
    //tạo mới thẻ li
    let li = document.createElement("li");
    li.innerText = newItem;
    list2.appendChild(li);
    item3.value="";
    }
})