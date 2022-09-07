alert("Welcome");
var userName = prompt("Ismingizni kriting!");
var userAge = prompt("Yoshingizni kriting");
var userCity = prompt("Yashash joyingizni kriting");
alert("Siz rostanam shu saytga kirmoqchimisz?");
console.log("Ismin " + userName + " Yoshim " + userAge + " Yashash joyim " + userCity);

btn.addEventListener('click', () => {
    var yil = prompt("Tug'ilgan yilingizni yozing");
    var sana = 2022 - yil;
    console.log("Siz " + sana + " yoshdasiz.");
});