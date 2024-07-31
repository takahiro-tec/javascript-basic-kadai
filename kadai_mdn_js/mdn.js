let today = new Date();
let year = today.getFullYear();
let month = today.getMonth() + 1; // JavaScriptの月は0から始まるため、1を加えます。
let date = today.getDate();


console.log(year + '年' + month + '月' + date + '日');

