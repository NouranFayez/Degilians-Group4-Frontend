function sum(num1 , num2 = 50){
    console.log(num2)
    var n1 = num1
    var n2 = num2
    var sumNumbers = n1 + n2
    // console.log(sumNumbers)
    return sumNumbers
}

// var res = sum(10 , 30)

// console.log(sum(100 , 20 ))
// console.log(sum(400 , 20 ))
// console.log(sum(100 , 50 ))
// console.log(sum(100 , 200)) // NaN ==> Not a Number

// var p = prompt()


// var age = 20
// function getFullName(firstName , lastName){
//     // return firstName + " " + lastName
//     // template string
//     return `name = '${firstName} ${lastName}'
//      , age = ${age}`
// }
// console.log(getFullName('zein' , 'ahmed'))

// "name = zein ahmed , age = 10" 




// function statement 
// function userInfo(){
//     return 'Zein'
// }
// var userName = userInfo()

// // function expression
// var user = function(){
//     return 'zein'
// }
// console.log(user())

// arrow function 
// var userBio = ()=> 'Zein'

// console.log(userBio())

// var result = (num)=> num > 10

// console.log(result(30))


// looping function ==>  startNum , endNum , breakNum , ContNum



// var fName = "Tamer"
// var LName = "Fayez"
// var age = 35
// var address = "Nasr city"

var userInfo = ["Tamer" , "Fayez" , 35 , "Nasr city" ]



console.log(userInfo.length)

console.log(userInfo[2])

userInfo[userInfo.length] = true


// Methods of Array
userInfo.push("developer")
userInfo.unshift("fghj" , "fghjkjhvghc")

userInfo.shift()
userInfo.pop()

// userInfo.splice(index , deletedCount , item/s)
userInfo.splice(3 , 2 ) // remove 
// userInfo.splice(1 , 0 , "Html" , "Css") // add
userInfo.splice(1 , 2 , "Html" , "Css") // remove/add
console.log(userInfo)

var courses = ["html" , 'css' , 'Js']
console.log(courses.includes("react"))

