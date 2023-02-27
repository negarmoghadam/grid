// let h1Elem = document.getElementById("about");
// console.log(h1Elem.setAttribute("class", "title"));
// let h1Elem = document.getElementById("about")
// h1Elem.style.color = "red"
// h1Elem.style.fontSize = "30px"
// let liItems = document.getElementsByClassName("list-item")
// liItems[1].style.fontSize="10px"
// let h1Elem = document.getElementById("about")
// console.log(h1Elem.textContent)
// let liItems = document.getElementsByClassName("list-item")
// console.log(liItems[1].innerHTML="100")
// let input = document.getElementById("input")
// input.value="vue js"
// console.log(input.value)
// let selectBox = document.getElementById("select-box")
// selectBox.value="mashhad"
// console.log(selectBox.value)
// let userName=prompt("plz enter a name")
// let newDivElem = document.createElement("h1")
// newDivElem.innerHTML = userName
// newDivElem.setAttribute("id", "divId")
// newDivElem.setAttribute("class","divClass")
// console.log(newDivElem)
// let ulElem = document.querySelector("ul")
// let newLi = document.createElement("li")
// newLi.innerHTML = "5"
// ulElem.append(newLi)
// let newLi2 = document.createElement("li")
// newLi2.innerHTML = "6"
// ulElem.append(newLi2)
// console.log(ulElem)
// let img1 = document.getElementById("img1")
// let img2 = document.getElementById("img2")
// let img3=img1
// function clickFunc() {
// img1===img2
// }

// function clickFunc2() {
//    img2===img3
// }
// let h1Elem=document.getElementById("about")
// function h1ColorFunc() {
//     h1Elem.style.color="red"
    
// }
// function keyLog() {
//     console.log("typeddd")
// }
// function focusFunc() {
//     console.log("focusss")
// }
// function blurFunc() {
//     console.log("blurrrr")

// }
// function dbFunc() {
//     console.log("double click")
// }
// let h1Elem = document.querySelector(".title")
// h1Elem.addEventListener("click", function () {
//     console.log("clicked")
// })
// let h1Elem = document.getElementById("title")
// h1Elem.addEventListener("click", function () {
//     h1Elem.classList.toggle("red")

// })
// function change() {
//     console.log("change")
// }
// let ulElem=document.getElementById("title")
// function addLi() {
//   let newLi=  document.createElement('li')
//     newLi.innerHTML = "product"
//     console.log(newLi)
//     let newLi2 = document.createElement("li")
//     newLi2.innerHTML="services"
//     ulElem.appendChild(newLi,newLi2)
// }
// function pressKey() {
//   console.log(" key press")
// }
// function downKey() {
//   console.log("key down")
// }
// function upKey() {
//   console.log(" key up")
// }
// let btn = document.getElementById("btn")
// function showLog() {
//   console.log("click shod")
// }
// btn.onclick = showLog
// let submitForm = document.getElementById("submit-form")

// submitForm.addEventListener("submit", function () {
//   console.log("submit shod")
// })
// let btn = document.getElementById("btn")
// btn.addEventListener("click", function (event) {
//   console.log(event.target)
// })
// let form = document.getElementById("form")
// let userNameInput = document.getElementById("username")
// let sabz = document.getElementById("sabz")
// console.log(sabz.nodeName)
// console.log(form.nodeName)
// console.log(form.nodeType)
// form.addEventListener("submit", function (event) {
//     event.preventDefault()
//     console.log(event)
// })
// userNameInput.addEventListener("keydown", function (event) {
//     event.preventDefault()
//     console.log(event)
// })
// sabz.addEventListener("click", function (event) {
//     event.preventDefault()
//     console.log(event)
// })
// let head3 = document.getElementById("head3")
// console.log(head3.nextElementSibling)
// let btn = document.getElementById("btn")
// let h1Elem = document.getElementById("text")
// btn.addEventListener("click", function () {
//     h1Elem.remove()
// })
// alert("im negar js ")
//const  userName="negar"
// let userFamily = "moghadam"
// let userName = +prompt("plz enter your name")
// alert(userName)
// console.log(userName)
// let bool= + (false)
// let num2 = +prompt("plz enter num2")
// let minus = num1 - num2
// allet num1 = +prompt("plz enter num1")
// ert(minus)
//
// let num1 = 10
// let num2 = 20
// let num3 = 30
// if (num1===num2) {
//     alert("num1 its to similar num2")
// } else if ( num1+num2===num3) {
//     alert("num1 + num2=num3")
// }else {
//     alert("nums is not valid")
// }
// let userNum = +prompt("enter your number as hour to min")
// let result = userNum * 60
// if (isNaN(userNum)) {
//     alert("check your number")
// } else {
//     alert(result)
// }
// let result=1401-userNum
// if (isNaN(userNum) ) {
//     alert("plz enter correctly number")
// } else {
//     alert("your birthday is :"+ result)
// }
// // let userNum2 = +prompt("enter num 2")
// // let result = userNum ** userNum2
// // alert(result)
// // if (userNum%2===0) {
// //     alert("its even num")
// // } else {
// //     alert("its odd")
// // }
// let userAge = +prompt("enter your age")
// let userSex = prompt("enter your sex")
// if (userAge<18 || userSex==="female") {
//     alert("you are not allowed")
// } else {
//     alert("welcome")
// }
// let userAge = prompt("enter age")
// switch (userAge) {
//     case "10" :
//     case "11":
//     case "12":
//         alert("too young")
//         break
//     case "20":
//     case "22":
//     case "23":
//         alert("your age is ok")
        
// }
// let result=userAge>18 ? alert("ok") : alert("not allowed")
// wValue()
// let showValue = function (num1,num2) {
//     alert(num1+num2)
// }
// showValue(30,20)
// function userNum(num1,num2,num3=22) {
//     let result = num1 + num2
//     alert(result)
//     return result
// }
// userNum(10,20)
// let userText = "sabzlearn.ir"
// console.log(userText.length)
// let userName = prompt("plz enter username")
// let passUser = prompt("plz enter your pass")
// if (userName.length < 3) {
//     alert("waen")
// } else if  (passUser.length<8){
//     alert("warn2")
// } else {
//     alert("you are login")
// }
// let myText = "im negar moghadam js react git html css bootstrap vue tailwind ,....... "
// console.log(myText.includes("js"))
// let userName = prompt("enter user name ")
// if (userName.toLowerCase()==="ali") {
//     alert("you are login")
// } else {
//     alert("you are not allowed to login")
// }
// let btn=document.querySelector("button")
// btn.addEventListener("click", function () {
//     let firstCaptcha = Math.random() * 100000
//     let finalCaptcha = Math.floor(firstCaptcha)
//     console.log(finalCaptcha)
// })
// for (let i = 0; i < 10;i++){
//     console.log("yes")
//     console.log(i)
// }
// let userText = "im negar js and react developer "
// for (let i = 0; i < userText.length;i++){
//     console.log(userText[i])
//
// let products=0
// for (let i = 0; i < 5; i++) {
//     products = products + Number(prompt("enter price"))
// }
// console.log(products)

// console.log(title)
// let priceProduct=0
// for (let i = 0; i < 5;i++){
//     priceProduct+=Number(prompt("plz enter the 5 prices"))
// }
// alert("final prices is :"+ priceProduct/5)
// if (new Date().getHours()<18) {
//     document.getElementById("demo").innerHTML=" good dayyy"
// } else (
//     document.getElementById("demo").innerHTML=" good nightssss"

// )
// let hour = new Date().getHours()
// let greeting=document.getElementById("demo")
// if (hour < 18) {
//     greeting.innerHTML="good evening"
// }
// function sum(a) {
//     let text;
//     if(a===1) ||
//     if(b===2)
//       text="its  two or one number  "
//      else
//         text="its another number "
    
//     return text
// }
// console.log(sum(1))
// let myBool = new Boolean(false)
// if (myBool) {
//     console.log("its true")
// } else {
//     console.log("its false")
// }
// let userScore = +prompt("plz enter your score ")
// if (userScore === 18) {
//     console.log("its perfect")
// } else if (userScore === 15) {
//     console.log("its okk")
// } else {
//     console.log("its not ok at all")
// }
// let age = 2
// let final = age>20 ?  console.log("bear") : console.log("juice")
//  console.log(final)
// if (age>18) {
//     document.write("<b>im 20 years old</b>")
// }
// function greeting(person) {
//     let user = person ? person : "stranger"
//     return user
// }
//  console.log(greeting(""))
// const score = 0
// const finalExam = score > 70 ? "excellent"  :"do better"
// console.log(finalExam)
// function excellent() {
//     console.log("veryyyyy gooddd")
//     return "succsesfully"
// }
// function badResult() {
//     console.log("veryyyy bad")
//     return "not passed"
// }
// let score=20
// let finalScor = score > 18 ? excellent() : badResult()
// console.log(finalScor)
// const score = 71
// const result = score > 70 ? "excellent" : score > 50 ? "average" : "do better"
// console.log(result)
// function sum(first, last) {
//     return first+last
// }
// let result = sum(10,20)
// console.log(result)
// function first(x) {
//     function last (y) {
//         return x*y
//     }
//     return last
// }
// first(2)
// let sum = num => num ** num
// console.log(sum(10))
// function greet(firstName) {
//     function sayHello() {
//         alert("hello " + firstName)
//     }
//     return sayHello()
// }
// greet("negar ")
// let x = 10
// let y = 18
// return (x + y)
// function sum(x, y) {
//     return x*y
// }
// let result = sum(10, 20)
// document.write(result)
// let userName = "        Lorem sit ipsum dolor sit amet consectetur, adipisicing elit.         "
// let text="negar moghadam 23 krj"
// let str1 = userName.trimStart()
// console.log(str1)
///////////////////////////////////////////
// let array = [0,1, 23,"malloss", 8, 1401]
// let str2 = array.slice(3,3)
// console.log(str2)
// function sum (num1,num2) {
//     let result=num1*num2
//     return (result)
        
    
// }

// sum(2,5)
// let userName = "negar"
// console.log(userName)
// let users=["ali","hassan","mohsen","neymar"]
// for (let i = 0; i < 10; i++){
//     if (i % 2 !== 0) continue;
//     document.write(i+"<br>")
// }
// let userName = "negar"
// let sum = 0
// let n=10
// for (let i = 1; i <= n; i++ ){
// sum+=i
    
// }
// console.log(sum)
// let numbers = [1, 2, 3, 5, 7, 9, 0, 1, 2, 12, 22, 3344]
// let oddNumbers = []
// let evenNumbers = []

// for (let i = 0; i < numbers.length;i++){
//     if (numbers[i]%2===0) {
//         evenNumbers.push(numbers[i])
//     } else {
//         oddNumbers.push(numbers[i])
//     }
// }
// console.log(evenNumbers)
// console.log(oddNumbers)
// let i = 0
// for (; i <= 10; i++){
//     console.log(i)
// }
// let text = `negar
// js
// react
// html
// css
// `
// let text2 = `moghadam`
// let sum = 2 + 10
// let array = [true, false]
// let final = `negar
// js
// react
