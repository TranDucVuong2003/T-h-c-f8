// var fullName = 'Tran Duc Vuong';
// var age = 21;

// alert(fullName);
// alert(age);




// console.log(fullName)

// console.warn(fullName) //In ra cảnh báo màu vàng

// console.error(fullName) // Loi 

// confirm('Xác nhận bạn đủ 18 tuổi '); //Tạo ra thông báo có ok và cannel

// prompt('Nhập số tuổi của bạn') //Tạo ra thông báo cho nhập gtri 

// setTimeout(function(){
//     alert('Thong bao')
// }, 3000) //Chạy dòng code bên trong sau 1 tgian đc gắn định 1000 = 1s

// setInterval(function(){
//     console.log('Day la log')
// }, 1000) // Thực thi code liên tục trong 1 khoảng tgian 1000 = 1s







/**
 Giới thiệu toán tử 
1. Toán tử số học - Arithmetic
2. Toán tử gán - Assignment
3. Toán tử so sánh - Comparison
4. Toán tử logic
*/

// var a = 1 + 2; // Toán tử số học

// var fullName = 'Tran Duc Vuong'// Toán tử gán

// var a = 1;
// var b = 2;

// if (a < b){ 
//     alert('Dung')// So sánh
// }

// if (a>0 && b> 0){
//     alert('a & b lớn hơn 0 ') // Toán tử logic
// }







/** Toán tử số học
 
 +
 -
 *
 **  Lũy thừa
 /
 %  Chia lấy dư
 ++
 --

 */

// var a = 7;
// var b = 2;

// c = a + b;
// d = a % b;
// e = a ** b;

// console.log(c);
// console.log(d);
// console.log(e);










// Toán tử ++ --
// Prefix: tiền tố
// Postfix: hậu tố 

// var a = 6;
// // Việc 1: +1 cho a, a = a + 1 => a = 7
// // Việc 2: trả về a sau khi đc +1
// a++;

// console.log(a) // ra kết quả là 7



// var a = 6;
// /**
//  Việc 1: 'a copy', 'a copy' = 6
//  Việc 2: trừ 1 của a, a = a - 1 => a = 5
//  Việc 3: trả về 'a copy'
//  */


// var output = a--;

// console.log('output', output); // kết quả 6

// console.log(a); //kết quả bằng 5









/**
 Toán tử chuỗi - String operator
 */

//  var firstName = 'Tran';
//  var lastName = 'Vuong';

//  console.log(firstName +" " + lastName);








/**
 Boolen
 */

// var a = 1;
// var b = 2;

// var Comparison = a > b;
// console.log(Comparison); // Hiển thị False









/*
 If - Else
 */

/**
 * Các trường hợp sẽ hiểu là Faulse
 * 0
 * False
 * '' - ""
 * undefined
 * NaN
 * null
 */
// var x = 10;
// if (x){
//     console.log('Dung')
// } else {
//     console.log('Sai')

// }










/**
 * Toán tử logic
 * 1. && - And
 * 2.  || - Ỏ
 * 3. ! - Not
 */

// var a = 1;
// var b = 2;
// var c = 3;

// if (a > 0 && b > 0 && c > 0) {
//     console.log("Dung")
// }









/**
 Kiểu dữ liệu trong  Javascrip

 1.Dữ liệu nguyên thủy - Primitive Dta
 - Number
 - String
 - Loolean
 - Underfined
 - Null
 - Symbol

 2. Dữ liệu phức tạp - Complex Data
 - Funtion
 - Object
 */

// // Number 
// var a = 1;
// var b = 2;
// var c = 3;


// // String type
// var fullName = 'Tran Vuong';

// //Boolean
// var isSuccess = true;

// //Underfined 
// var age;

// //Null
// var isNull = null;
// console.log(isNull)

// //Symbol
// var id = Symbol('id'); //unique
// console.log(id);

// //Function
// var myFunction = function () {
//     alert('Hi, xin chao cac ban')
// }
// myFunction();

// //Oject types
// var myObject = {
//     name: 'Tran Vuong',
//     age: '21',
//     address: 'HN',
//     myFunction: function () {

//     }
// };

// var myArray = [
//     'Javascrip',
//     'PHP',
//     'Ruby'
// ];
// console.log(myArray);


// //Kiểm tra kiểu
// console.log(typeof myArray);













// // Toán tử so sánh 2
// /*
// ===
// !==
// */

// var a = 1;
// var c = '1';

// console.log(a == c); // So sánh giá trị
// console.log(a === c); // So sánh cả value vả data type






/**
  Các gtri bị convert sang boolean
  false
  NaN
  Undefined
  Null
  ''
  0
 */
// var a = 1;
// var b = 2;

// var result = 'A' && NaN && 'C';
// console.log(result); // Toán tử && đọc từ trái sang phải, kết thúc lệnh ở cái gtri cuối

// if (result) {
//     console.log('Dung')
// } else {
//     console.log('Sai')
// }


// var result = 'A' || 'B' || 'C' ;
// var result = undefined || 0 || false ;

// console.log(result); // Toán tử || đọc từ trái sang phải, so sánh cái đầu với những cái tiếp theo, gtri đầu mà false thì chuyển qua so sánh gia trị thứ 2 vs 3, chỉ cần giá trị đầu tiên khác false là lấy luôn gtri đầu
// if (result) {
//     console.log('Dung')
// } else {
//     console.log('Sai')
// }









// Hàm Function

/**
1. Hàm?
- Là một khối mã
- Làm 1 việc cụ thể

2. Loại hàm
- Built-in
- Tự định nghĩa

3. Tính chất
- Không thực thi khi định nghĩa
- Sẽ được thực thi khi được gọi
- Có thể nhận tham số
- Có thể trả về 1 gtri

4. Tạo hàm đầu tiên

Tên hàm:
a-z, A-Z, _ , $
 */



// function showDialog() {
//     // code
//     alert('Xin chao cac ban');
// }

// showDialog();







// Tham số Javascrip
// function writeLog(message, mas2){
//     console.log(message);
//     console.log(mas2);
// }

// writeLog("test message",'mas2');

// function writeLog(){
//     console.log(arguments)
// }

// writeLog('log1','log2','log3');

// function writeLog(){
//     var myString = '';
//     for(var param of arguments){
//         myString += `${param} - `
//     }
//     console.log(myString);
// }

// writeLog('log1','log2','log3');










// Return trong hàm

// function cong(a, b) {
//     return a + b;
// }

// var result = cong(2, 8);
// console.log(result)







/**
 1. Đặt function trùng tên ?
 2. Khai báo biến trong hàm ?
 3. Định nghĩa trong hàm
 */

// function showMessage(){
//   console.log('Message1')
// }
// function showMessage(){
//   console.log('Message2')
// } // Đặt trung tên function thì function sau sẽ đc gọi

// showMessage();

// function show(){
//   var number = 520;
//   console.log(number)
// }

// show();

// function fun1(){
//   function fun2(){
//     console.log('Day la function 2')
//   }

//   fun2();
// }


// fun1();






/**
 * Các loại function
 * 1. Declaration function
 * 2. Expression function
 * 3. Arrow function
 */
// function showMessage(){
//   // Declaration function
//   console.log('Declaration function')
// }



// var showMessage2 = function (){
//   // Expression function
//   console.log('Expression function')
// }

// showMessage();
// serTimeOut(function (){
//   // Expression function
// })

// var myObject = {
//   myFunction: function (){
//   // Expression function
//   }
// }








/**
 * CHUỖI TRONG JAVASCRIP
 * 
 * 1. Tạo chuỗi (2 cach)
 * 2. Một số case sử dụng backslash (\)
 * 3. Xem độ dài chuỗi
 * 4. Chú ý độ dài khi viết code
 * 5. Template string ES6
 */


// var fullName = 'Tran Vuong';
// var Name = new String('Tran Duc Vuong');

// console.log('fullName: ', fullName);
// console.log('Name: ', Name);

// var fullName = 'Tran Vuong \'dep trai\' ';

// console.log(fullName);
// // Đưa biến vào trong chuỗi

// var firstName = 'Tran';
// var lastName = 'Vuong';

// console.log(`Toi la: ${firstName} ${lastName}`);






// // Làm việc với chuỗi
// var myString = '     chuoi trong Javascrip on on on on on    ';


// // 1. Length
// console.log('Length of myString: ',myString.length);

// // 2. Find index
// console.log(myString.indexOf('on')); //Tìm kí tự 'on'
// console.log(myString.indexOf('on',10)); //Tìm kí tự 'on' từ vị trí số 10 trở đi
// console.log(myString.lastIndexOf('on')); // Tìm kí tự 'on' cuối cùng


// // 3. Cut string
// console.log(myString.slice(6,12)) // Cắt 1 đoạn chuỗi trong 1 chuỗi, cắt từ trái qua phải
// console.log(myString.slice(-3,-5))//Cắt từ dưới lên

// // 4. Replace
// console.log(myString.replace('on', 'pp')); // Tìm kiếm và thay thế từ chuỗi nào thành chuỗi nào
// console.log(myString.replace(/on/g, 'pp'));// Tìm và thay thế tất cả các chuỗi 

// // 5. Convert to upper case
// console.log(myString.toUpperCase()); // Viết hoa hết

// // 6. Convert to lower case
// console.log(myString.toLowerCase()); // Viết hoa hết

// // 7. Trim
// console.log(myString.trim());//Loại bỏ khoảng trắng đầu và cuối chuỗi

// // 8. Split
// var languages = 'Javascrip, PHP, Ruby'

// console.log(languages.split(', ')); // Dựa vào điểm chung cắt ra thành từng chuỗi
// console.log(languages.split(''));// Cắt từng kí tự

// // 9. Get a character by index
// const myString2 = 'Tran Vuong' ;

// console.log(myString2.charAt(2)); //Lấy ra kí tự số bn trong chuỗi
// console.log(typeof myString2.charAt(2));//Trả ra kiểu dữ liệu







/**
 Kiểu siis (Number) trong Javascrip
 1. Tạo các gtri Number
 - Các cách tạo
 - Dùng cách nào ? Tại sao ?
 - Kiểm tra Data type

 2. Làm việc với Number
 - To String
 - To Fixed
 */

// var age = 21;
// var Pi = 3.14;

//  var otherNumber = new Number(9);

// var result = 20 / 'abc';

// console.log(typeof result);
// console.log(isNaN(result));

// console.log(age.toString());

// var myString = Pi.toString();
// console.log(myString);
// console.log(typeof myString);

// console.log(Pi.toFixed()); // Làm tròn số thập phân
// console.log(typeof Pi.toFixed());







/**
 * Mảng trong Javascrip - Array
 *1. Tạo mảng
 - Cách tạo
 - Sử dụng cách nào ? Tại sao?
 - Kiểm tra data type ?

 2. Truy xuất mảng
 - Độ dài mảng
 - Lấy phần tử theo index
 */

// var languages = [
//   'Javascrip',
//   'PHP',
//   'Ruby',
//   'Html',
//   'Css',
//   null,
//   undefined,
//   function(){},
//   123,
// ]

// var languages = new Array(
//   'Javascrip',
//   'PHP',
//   'Ruby',
//   'Html',
//   'Css',
//   null,
//   undefined,
//   function(){},
//   123,
// );

// console.log(languages);
// console.log(typeof languages);
// console.log(Array.isArray(languages));

// console.log(languages.length);

// console.log(languages[0]);












/**
 Làm việc với Array

 1. To string
 2. Join
 3. Pop 
 4. Push
 5. Shift
 6. Unshift
 7. Splicing
 8. Concat
 9. Slicing
 */

//  var languages = [
//   'Javascrip',
//   'PHP',
//   'Ruby',
//   'Html',
//   'Css',
// ]
//  var languages1 = [
//   'Angola',
//   'ReaJs',
//  ]

// console.log(languages.toString());
// console.log(languages.join(" - ")); //Ngăn cách giữa các phần tử trong Array

// console.log(languages.pop()) // Xóa element cuối mảng và trả về phần tử đã xóa
// console.log(languages);

// console.log(languages.push('Dart', 'Java')); //Thêm 1 phần tử ở cuối mảng
// console.log(languages);

// console.log(languages.shift()); //Xóa đi 1 phần tử đầu và trả về phần tử đã xóa
// console.log(languages);

// console.log(languages.unshift('Dart')); // Thêm phần tử ở đầu mảng và trả về số phần tử trong mảng
// console.log(languages);

// languages.splice(1, 3); //Tham số thứ nhất là đặt con trỏ ở đâu, tham số thứ 2 là xóa bao nhiêu phần tử kể từ con trỏ
// languages.splice(1, 0, 'Dart'); // Thêm phần từ vào vị trí số 1 trong Array
// languages.splice(1, 1, 'Dart'); // Xóa phần tử thứ 1 và thay thế thành Dart
// console.log(languages);

// console.log(languages.concat(languages1)); // Nối 2 mảng vào làm 1 và trả về hàm mới

// console.log(languages.slice(-1)); //Cắt phần tử từ 1 đến 2 và in ra, không làm thay đổi Array

// console.log(languages);












/**Object   */


// var myInfor = {
//   name: 'Tran Vuong',
//   age: 18,
//   address: 'Ha Noi',
//   getName: function(){
//     return this.name;
//   }
// };

// myInfor.email = 'ducvuong31010@gmail.com' // Thêm phần tử cho Object
// myInfor['email-contact'] = 'rongcon838@gmail.com'

// delete myInfor.age; //Xóa 1 phần tử trong Object

// // console.log(myInfor.address);
// console.log(myInfor.getName());

// // Function --> phương thức / method
// // Other --> thuộc tính / property








// Object constructor

// function User(firstName, lastName, avatar) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.avatar = avatar;

//   this.getName = function () {
//     return `${this.firstName} ${this.lastName}`
//   };
// };

// User.prototype.classname = 'f8';
// User.prototype.getClassname = function(){
//   return this.classname;
// };

// var user2 = new User('Vương', 'Trần', 'Ảnh');
// var user = new User('Nam', 'Vũ', 'Ảnh');

// user2.title = "Thuộc tính của user2";
// user.comment = "Bình luận";

// console.log(user.classname);
// console.log(user2.getClassname());
// console.log(user2)


// Làm bài tại đây
// function Student(firstName, lastName){
//   this.firstName = firstName;
//   this.lastName = lastName;
// };

// Student.prototype.getFullName = function(){
//   return `${this.firstName} ${this.lastName}` ;
// };


// // Ví dụ khi sử dụng
// var student = new Student('Long', 'Bui');

// console.log(student.firstName);  // 'Long'
// console.log(student.lastName);  // 'Bui'
// console.log(student.getFullName());  // 'Long Bui'










// Đối tượng Date

// var date = new Date();

// console.log(typeof date);

// var year = date.getFullYear();
// var month = date.getMonth() + 1;
// var day = date.getDay();

// console.log(year);
// console.log(month);
// console.log(day);







/* Math Object
- Math.PI
- Math.round()
- Math.abs()
- Math.ceil()
- Math.floor()
- Math.random()
- Math.min()
- Math.max()

*/

// console.log(Math.PI);
// console.log(Math.round(1.3)); // làm tròn lên số nguyên gần nhất >= 0.5
// console.log(Math.abs(- 1000)); //Giá trị tuyệt đối 
// console.log(Math.ceil(2.3)); //Phương thức này làm tròn số lên số nguyên lớn hơn hoặc bằng số đó.
// console.log(Math.floor(2.3)); //Phương thức này làm tròn số xuống số nguyên nhỏ hơn hoặc bằng số đó.
// console.log(Math.random() ); //Phương thức này trả về một số ngẫu nhiên trong khoảng từ 0 (bao gồm) đến 1 (không bao gồm).
// console.log(Math.min(3, 1, 4, 2));
// console.log(Math.max(3, 1, 4, 2));


// //vd về random 
// var random = Math.floor(Math.random() * 5);

// var bonus = [
//   'a',
//   'b',
//   'c',
//   'd'
// ];

// console.log(bonus[random]);










/**
 lệnh rẽ nhanh If else
 */

// var date = 6;

// if (date === 2){
//   console.log('Hôm nay là thứ 2');
// } else if (date === 3){
//   console.log('Hom nay la thu 3');
// } else if (date === 4){
//   console.log('Hom nay la thu 4');
// } else{
//   console.log('khong biet');
// }


// //bai tap
// function run(a) {
//   if (a%3 === 0  && a%5 != 0 && a%15 != 0){
//       return 1;
//   } else if (a%5 === 0 && a%15 != 0 ){
//       return 2;
//   }else if (a%15 === 0){
//       return 3;
//   }
// }


// // Kỳ vọng
// console.log(run(3)) // 1
// console.log(run(5)) // 2
// console.log(run(15)) // 3






/*
Lenh re nhanh switch
*/
// var number ;
// function random(){
//   return number = Math.ceil(Math.random() * 5);

// }

// var number = random();
// console.log(number);

// switch (number) {
//   case 1:
//     console.log('so 1');
//     break;
//   case 2:
//     console.log('so 2');
//     break;
//   case 3:
//     console.log('so 3');
//     break;
//   case 4:
//     console.log('so 4');
//     break;
//   case 5:
//     console.log('so 5');
//     break;
//   default:
//     console.log('Khong co');

// }





/*
Toán tử 3 ngôi - ternary operator
*/

// var course = {
//   name: 'Javascrip',
//   coin: 200
// }

// // if (course.coin > 0 ){
// //   console.log(`${course.coin} Coins`);
// // } else {
// //   console.log('Mien phi')
// // }

// var result = course.coin > 0 ? `${course.coin} Coins` : console.log('Mien phi');
// console.log(result);


// // Làm bài baif taapj
// function getCanVoteMessage(age){
//   var condition = age >= 18 ? "Bạn có thể bỏ phiếu" : "Bạn chưa được bỏ phiếu";

//   return condition;
// }
// // Kỳ vọng
// console.log(getCanVoteMessage(18)) // 'Bạn có thể bỏ phiếu'
// console.log(getCanVoteMessage(15)) // 'Bạn chưa được bỏ phiếu'






/*
Vòng lặp - loop

for - lặp với điều kiện
for/in - lặp qua key của đối tượng
for/of lặp qua value của đối tượng
while - lặp khi nhiều điều kiện đúng
do/while - lặp ít nhất 1 lần, sau đó lặp nhiều lần khi điều kiện đúng
*/


// For loop

// for(var i = 1; i <= 1000; i++){
//   console.log(i);
// }


// // Làm bài
// function getRandNumbers(min, max, length) {

//   var newArr = [];

//   for (var i = 0; i < length; i++) {

//       var numRandom = Math.floor(Math.random() * (max - min) +1 )+ min;

//       newArr[i] = numRandom;

//   }

//   return newArr;

// }

// console.log(getRandNumbers(1,10,5));

// bài tập tính tổng các phần tử của mảng 
// function getTotal(arr) {
//   var sum = 0;
//   for (var i = 0; i < arr.length ; i++ ){
//       sum = sum + arr[i];
//   }
//   return sum;
// }



// var myArray = [
//   'js',
//   'php',
//   'java',
//   'ruby',
//   'python'
// ];
// var arrayLength = myArray.length;

// for (var i = 0; i< arrayLength; i++){
//   console.log(myArray[i]);
// }


// Bai tap tinh tong 
// var orders = [
//   {
//       name: 'Khóa học HTML - CSS Pro',
//       price: 3000000
//   },
//   {
//       name: 'Khóa học Javascript Pro',
//       price: 2500000
//   },
//   {
//       name: 'Khóa học React Pro',
//       price: 3200000
//   }
// ]

// function getTotal(arr){
//   var sum = 0;
//   for (var i = 0; i < arr.length ; i++){
//       sum = sum + arr[i].price;
//   }
//   return sum;
// }



// // Expected results:
// getTotal(orders) // Output: 8700000










//For/in loop

// var myInfo = {
//   name: 'Tran Vuong',
//   age : 21,
//   add : 'Ha Noi'
// };

// for (var key in myInfo){
//   console.log(key);
//   console.log(myInfo[key])
//   console.log(" ")
// }



// Bai tap 
// function run(object) {
//   var results = []
//   for (var key in object){
//       results.push(`Thuộc tính ${key} có giá trị ${object[key]}`);
//   }
//   return results;
// }

// // Expected results:
// console.log(run({ name: 'Nguyen Van A', age: 16 }));
// // Output:
// // [
// //     "Thuộc tính name có giá trị Nguyen Van A",
// //     "Thuộc tính age có giá trị 16"
// // ]







/*
For of loop
*/

// var myArray = [
//   'js',
//   'php',
//   'java',
//   'ruby',
//   'python'
// ];

// for (var value of myArray) {
//   console.log(value);
// }


// var myInfo = {
//   name: 'Tran Vuong',
//   age: 21,
//   add: 'Ha Noi'
// };


// console.log(Object.keys(myInfo));
// console.log(Object.values(myInfo));

// for (var item of Object.keys(myInfo)) {
//   console.log(item)
// }






// while loop

// var myArray = [
//   'java',
//   'php',
//   'ruby'
// ];

// var i = 0;

// while (i < myArray.length){
//   console.log(myArray[i]);
//   i++
// }








// Vong lap do/while loop

// var i = 0;
// var isSuccess = false;

// do {
//   i++;
//   console.log('Nap the lan'+  i );

//   if(false){
//     isSuccess = true
//   }

// } while (!isSuccess && i < 3);





//Break and Continue in Loop

// for ( var i = 0; i < 10 ; i++){

//   // if (i>5){
//   //   break;
//   // }

//   if(i%2 !== 0){
//     continue;

//   }
//   console.log(i);
// }







// Vòng lặp lồng nhau - Nested loop
// var myArray = [
//   [1,2],
//   [3,4],
//   [5,6]
// ];

// for ( var i = 0; i < myArray.length; i++){
//   for (var j = 0; j < myArray[i].length; j++){
//     console.log(myArray[i][j]);
//   }
// }




// De quy
// 1. Xac dinh diem dung
// 2. Logic handle => Tao ra diem dung



// function countDown(num){
//   if (num > 0){
//     console.log(num);
//     return countDown(num - 1);
//   }
//   return num;
// }

// countDown(5);

// function loop(start, end, cb){
//   if (start <= end ){
//     cb(start);
//     return loop(start + 1, end, cb )
//   }
// }


// var array = ['Javascrip', 'Html', 'Css'];

// loop(0, array.length - 1, function(index)
// {
//   console.log('index:', index);
// }
// );

// function giaithua(number){
//   var output = 1;
//   for (var i = number ; i > 0; i--){
//     output = output * i;
//   }
//   return output;
// }

// console.log(giaithua(6));








/*
Array methods:
forEach(function(currentValue, index, array)   dùng để lặp qua từng phần tử trong mảng và thực hiện một hành động nào đó.
every(currentValue, index, array) kiểm tra xem tất cả các phần tử của mảng có thỏa mãn điều kiện nào đó hay không. Nếu tất cả phần tử đều thỏa mãn, nó trả về true, nếu có ít nhất một phần tử không thỏa mãn, nó trả về false.
some(currentValue, index, array)  kiểm tra xem ít nhất một phần tử trong mảng có thỏa mãn điều kiện nào đó hay không. Nếu có ít nhất một phần tử thỏa mãn, nó trả về true.
find(currentValue, index, array)  trả về phần tử đầu tiên trong mảng thỏa mãn điều kiện. Nếu không có phần tử nào thỏa mãn, nó trả về undefined.
filter(currentValue, index, array)  trả về một mảng mới chứa tất cả các phần tử thỏa mãn điều kiện.
map(currentValue, index, array)  tạo ra một mảng mới với các giá trị được biến đổi dựa trên một hàm.
reduce(function(accumulator, currentValue, index, array)) dùng để tính toán một giá trị duy nhất bằng cách lặp qua các phần tử của mảng. Nó nhận vào một hàm callback và một giá trị khởi tạo (optional).
*/

// var courses = [
//   {
//     id: 1,
//     name: 'Javascrip',
//     coin: 250
//   },
//   {
//     id: 2,
//     name: 'HTMl',
//     coin: 0
//   },
//   {
//     id: 3,
//     name: 'CSS',
//     coin: 20
//   },
//   {
//     id: 4,
//     name: 'PHP',
//     coin: 2220
//   },
//   {
//     id: 7,
//     name: 'PHP',
//     coin: 2220
//   },
//   {
//     id: 1,
//     name: 'ReactJS',
//     coin: 500
//   }
// ];
// //foreach
// courses.forEach(function (course, index) {
//   console.log(index, course);
// });
// //every 
// var isFree = courses.every(function (course) {
//   return course.coin === 0;
// });
// console.log(isFree);
// //some
// var isFree = courses.some(function (course) {
//   return course.coin === 0;
// });
// console.log(isFree);
// //find 
// var isFree = courses.find(function (course, index) {
//   return course.name === 'PHP';
// });
// console.log(isFree);
// // filter
// var course = courses.filter(function (course, index) {
//   return course.name === 'PHP';
// });
// console.log(course);
// //map
// function courseHanler(course, index){
//   // console.log(course);
//   return {
//     id: course.id,
//     name: `Khoa hoc: ${course.name}`,
//     coin: course.coin,
//     cointext: `Gia: ${course.coin}`,
//     index: index
//   }
// }
// var newCourses = courses.map(courseHanler);
// console.log(newCourses);

//reduce

// var totalCoin = courses.reduce(function coinHandler(accumulator, currentValue, currentIndex, orginArray  ){
//   return accumulator + currentValue.coin;
// }, 0);
// console.log(totalCoin);




// // bai tap Reduce
// var numbers = [100, 200, 300, 400, 500];

// var total = numbers.reduce(function(total, number){
//   return total + number; 
// });
// console.log(total);


// //Flat - làm phẳng mảng
// var depthArray = [1 , 2 , [3 , 4] , 5 , [6 , 7 , 8] , 9];

// var flatArray = depthArray.reduce(function(firstItem, item){
//   return firstItem.concat(item);
// },[]);
// console.log(flatArray);










// // reduce2 

// Array.prototype.reduce2 = function(callback, result){
//   let i = 0;
//   if( arguments.length < 2){
//     i = 1
//     result = this[0]
//   }
//   for(; i < this.length; i++){
//     result = callback(result, this[i], i , this)
//   }
//   return result
// }

// const numbers = [1,2,3,4,5];

// const result = numbers.reduce2((total, number) => {
//   return total + number
// }, 10)

// console.log(result)





// var arr = [
//   ['name', 'Sơn Đặng'],
//   ['age', 18],
// ];

// const arrToObj = function(array){
//   return array.reduce(function(acc, cur) {
//       acc[cur[0]] = cur[1];
//       return acc;
//   },{})
// }

// console.log(arrToObj(arr));









//includes method

// var course = ['java', 'php', 'ruby'];

// console.log(course.includes('java',1))








/*Callback
1. là hàm
2. được truyền qua đối số
*/

// function myFunction(param){
//   if (typeof param === 'function'){
//     param ('Học lập trình');
//   }
// }

// function myCallback(value){
//   console.log('value: ', value);
// }

// myFunction(myCallback);






//Tạo hàm forEach2
// Array.prototype.forEach2 = function(array){
//   var lastResult = [];
//   var lengthOfArr = array.length;

//   for (i = 0; i <= lengthOfArr ; ++i){
//     var result = array(this[i], i);
//     lastResult.push(result);
//   }
//   return lastResult;
// }


// var arr = ['java', 'php', 'ruby'];

// result = arr.forEach(function(value, index){
//   console.log(`Số thứ tự ${index}, môn học: ${value}`)
// })

// result = arr.forEach2(function(value, index){
//   console.log(`Số thứ tự ${index}, môn học: ${value}`)
// })



//Tạo hàm filter
// Array.prototype.filter2 = function(callback) {
//   var lastResult = []; // Mảng lưu kết quả sau khi lọc
//   var lengthOfArr = this.length; // Lấy độ dài của mảng đang gọi hàm filter2

//   for (var i = 0; i < lengthOfArr; i++) { // Duyệt qua từng phần tử của mảng
//     if (callback(this[i], i, this)) { // Gọi callback với (phần tử hiện tại, chỉ số, mảng gốc)
//       lastResult.push(this[i]); // Nếu callback trả về true, thêm phần tử vào lastResult
//     }
//   }
//   return lastResult; // Trả về mảng kết quả
// };


// var arr = ['java', 'php', 'ruby'];

// result = arr.filter(function(value, index){
//   return index > 0;
// })
// console.log(result);

// result2 = arr.filter2(function(value, index){
//   return index > 0;
// console.log(result2)







// //forEach method
// Array.prototype.forEach2 = function(callback){
//   for(var index in this){
//     if (this.hasOwnProperty(index)){
//       callback(this[index], index, this)
//     }
//   }
// }

// var courses = new Array(100);

// courses.push('Javascrip', 'PHP');

// console.log(courses)

// courses.forEach2(function(course, index, array){
//   console.log(course, index, array);
// });




// // làm mới filter()
// Array.prototype.myFilter = function(cb) {
//   var finalResult = []; // Khai báo finalResult

//   for (var index in this) {
//       if (this.hasOwnProperty(index)) {
//           if (cb(this[index], index, this)) { // Sử dụng đúng chỉ số và mảng gốc
//               finalResult.push(this[index]); // Thêm phần tử vào finalResult
//           }
//       }
//   }
//   return finalResult; // Trả về kết quả sau khi duyệt hết các phần tử
// }

// var arr = ['java', 'php', 'ruby'];

// console.log(arr.myFilter(function(value, index, array){
//   return value === 'java';
// }))










//HTML DOM
//Get element methods

/*
1. Element: ID, class, tag, css selector, html collection
2. Attribute getAttribute, setAttribute
3. Text innerText, textcontent
*/

// var headingNote = document.querySelector('.heading-2');

// console.log(headingNote); 



// var lisItemNodes = document.querySelectorAll('.box-1 li')

// console.log(lisItemNodes)



// // DOM attributes 
// var headingElement = 
// document.querySelector('.heading-2');

// headingElement.title = 'title test';

// // headingElement.id = 'idHeading'; //thêm id vào trong thẻ có class .heading-2
// headingElement.setAttribute('id', 'idHeading-3'); //Cũng là thêm id vào thẻ có class là .heading2 nhưng dùng setAttribute
// console.log(headingElement.getAttribute('class')); //lấy giá trị trong 'class'
// console.log(headingElement.getAttribute('title')); //lấy giá trị trong 'title', vừa mới thêm bên js

// headingElement.innerText = 'thẻ h2';

//innerHTML, outterHTML 




//ClassList Property

// add
// contains
// remove
// toggle

// var boxElement = 
// document.querySelector('.box');

// boxElement.classList.add('red'); // thêm mới class red cho thẻ có class .box
// boxElement.classList.contains('red'); //nếu có class red thì trả về true còn không có thì là false

// setTimeout(()=>{
//   boxElement.classList.remove('red');
// }, 3000); //xóa class red trong boxElement sau 3s khi nó chạy

// setTimeout(()=>{
//   boxElement.classList.toggle('red');
// }, 3000); //Đoạn mã chạy toggle sẽ tìm xem trong boxElement có class red ko, nếu có thì xóa, nếu ko có thì thêm và sau 3s








//DOM events
// 1 Attribute 
// 2 Assign event using the element node

// var inputElement = document.querySelector('select');

// inputElement.onchange = function(e){
//   console.log(e.target.value);
// }






// ES6
// 1, let, const
// 2, temple literals
// 3, multi-line string 
// 4, arrow function
// 5, classes
// 6, enhanced object literals
// 7, default parameter values
// 8, destructuring
// 9, rest parmeters
// 10, spread
// 11, tagged template literal
// 12, modules





/*
enhanced object literals
1, định nghĩa key : value cho object
2, Định nghĩa key method cho object
3, Định nghĩa key cho object dưới dạng biến
*/

//spread operator 

// var array1 = ['javascrip', 'ruby', 'php'];

// var array2 = ['html', 'css'];

// var array3 = [...array1, ...array2]; // ...array là gọi ra hết các phần tử trong array đó
// console.log(array3)


//Modules JS



// Document.creatElement()

// const root = document.getElementById('root');
// const h1 = document.createElement('h1');

// h1.innerText = 'Hello gays! ';
// console.log(h1);
// h1.id= 'heading';
// h1.className = 'className'

// root.appendChild(h1) // chạy thẻ h1 trong element h1

// h1.classList





/*JSON là 
1 kiểu định dạng dữ liệu (chuỗi)
2. Javascrip Object Notation 
3. JSON: number,string, boolean, null, array, object

+ Mã hóa encode
+ Giải mã decode

Stringify: từ js --> JSON
Parse: từ JSON --> js
*/


// var json = '["Javascrip", "PHP"]';
// var json = '{"name": "Tran Vuong", "age": 18}';
// var a =  '"abc"' 

// console.log(JSON.parse(json))

// console.log(JSON.stringify("abc"));



/**Promise (concept)
 * 1. new Promise
 * 2. Executor
 * 
 * 3 trạng thái của promise
 * + Pendding
 * + Fulfilled
 * + Rejected 
 */

// var promise = new Promise(
//   //Executor
//   function(resolve, reject){
//     //Logic
//     //Thành công: resolve()
//     //Thất bại: reject()

//     //fale call api
//     reject('co loi !')
//   }
// )

// promise
//   .then(function(course){
//     console.log(course);

//   })
//   .catch(function(error){
//     console.log(error);

//   })
//   .finally(function(){
//     console.log('Done !');

//   })





// function fetchData() {
//   const promise = new Promise(
//     function (resolve, reject) {
//       console.log('T đang lấy dữ liệu: ');
//       setTimeout(() => {
//         let abc = "ok"
//         let status = false;
//         if (status) resolve(abc)
//         else reject("false")
//       }, 3000)
//     }
//   )
//   return promise;
// }

// fetchData()
//   .then(value => {
//     console.log(value);
//   })
//   .catch(error => {
//     console.log(error);
//   })
//   ;



// 
// const fetchData1 = () => {
//   return new Promise(
//     (resolve, reject) => {
//       setTimeout(()=>{
//         let number = 2;
//         if (number = 2) resolve("so 2")
//         else reject("K phai so 2")
//       }, 4000)
//     }
//   )

// }
// const fetchData2 = () => {
//   return new Promise(
//     (resolve, reject) => {
//       setTimeout(()=>{
//         let number = 4;
//         if (number = 4) resolve("so 4")
//         else reject("K phai so 4")
//       }, 5000)
//     }
//   )
// }

// Promise.all([fetchData1(), fetchData2()]) 
//   .then((value) =>{
//     console.log('Data cuar resolve: ', value);

//   })

var courseApi = 'http://localhost:3000/courses'

fetch(courseApi)
.then(function(response){
  return response.json();
})
.then(function(course){
  console.log(course);
});






























