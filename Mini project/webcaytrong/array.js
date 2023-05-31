// const array=[7,8,9,10,11,12,13];
// const array1=[1,2,3,4,5,6];
// const array2=array.concat(array1);
// array.copyWithin(2,3);
// array.copyWithin(0,5,3);
// let exists = array.includes(9);
// let exists = Arr.includes(3,3)
 

// console.table(array.includes(9));



// console.table(result);

// const array= prompt ();
// const 
    
//  console.log(array);
    
const danhSach=["linh"];

const userInput= prompt("nhập tên:");
danhSach.push(userInput);


console.table(danhSach);

const hsEdit = prompt("tên cần sửa");
if(danhSach.includes(hsEdit)) {
    const indexRemove = danh sach.indexof(hsEdit);
    danhSach.splice(indexRemove,1);
    console.log("---xóa thành công");
    console.table(danhSach)
}



