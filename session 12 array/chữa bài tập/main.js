
const numberList =[];
//số hàng mà người dùng nhập vào
let inputRowUser = prompt ("nhập vào số hàng");
for (let i= 0; i<inputRowUser;i++){
    let inputColumUser = prompt ("nhập vào một dãy số");
    //thực hiện việc biến chuỗi thành mảng
    let result = inputColumUser.split(",");
    //thực hiện push vào mảng cha để trở thành mảng hai chiều
    numberList.push(result);
}
 console.log("mảng hai chiều là :" , numberList);


 // 2 trường hợp là có đương biên ==> hình chu nhật hoạc hình vuông
 // phần c

 let result = "";
 for(let i=0;i< numberList.length-1;i++){
    if(numberList[i].length != numberList[i+1].length){
        console.log("không đường biên");
        break;
    } else{
        result=true;
    }
 }

 console.log(result);
//bước thứ 2:
 if (result){
    for (let i =0 ; i< numberList.length; i++) {
        // lập qua phần tử con
        for (let j = 0; j< numberList[i].length; j++){
            if (i ==0 || i == numberList.length - 1){
                //un ra luôn mang con tại vị trí đầu tiên cũng như là cuối cung
                console.log(numberList[i][j]);
            }else{
                console.log(numberList[i][j], numberList[i][numberList[j].length-1]);
            }
        }
    }
 }


1,2,3
4,5,6
7,8,9