const button = document.getElementById("btn");
const textElement = document.getElementById("text");

button.addEventListener("click", function() {
  setTimeout(function() {
    textElement.innerText = "ボタンをクリックしました";
  }, 2000); // 2000ミリ秒（2秒）後に実行
});
