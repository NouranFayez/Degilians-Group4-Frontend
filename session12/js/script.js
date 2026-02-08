var arr = [2, "html", "20", 30]

console.log(arr.slice(0, 2));


var item = arr.find(item => item > 2)
console.log(item)



arr.forEach((ele, i, arr) => {

})




// var nums = [2, 20 , 3]
// var newArray = nums.map(item =>  item*2)
// console.log(newArray)
// console.log(nums)



var str = "lorem ipsum"

console.log(str.length)

// str.forEach((item , i )=>{
//     console.log(item)
// })

// for(var i = 0 ; i < str.length ; i++){
//     console.log(str[i])
// }



// var obj = {
//     fName: "Ahmed",
//     lName: "Mohamed",
//     getFullName: function () {
//         return `${this.fName} ${this.lName}`
//     },
//     getName: () => {
//         return `${this.fName} ${obj.lName}`
//     }
// }


var str = "lorem ipsum html"

console.log(str.startsWith("html"));
console.log(str.endsWith("html"));
console.log(str.includes("ipsum"));

var txt = "              lorem ipsum html                     "
console.log(txt.trim());

// var p = prompt('number')
// console.log(p)
// console.log(parseInt(p))
// console.log(parseFloat(p))
// console.log(Number(p))

var test = "dfghjk"
var test = "20fhjjj"
console.log(isNaN(test));






