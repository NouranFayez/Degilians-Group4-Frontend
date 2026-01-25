var ids = [2, 10, 5 , 6]
// console.log(ids[0])
// console.log(ids[1])
// console.log(ids[2])
// console.log(ids[])

// for(var i = 0 ; i < ids.length ; i++ ){
//     console.log(ids[i])
// }

var ids = [2, 10, 5 , 6]
// special function
// ids.forEach((ele , ind , array)=>{
//     // console.log(ele)
//     // console.log(ind)
//     // console.log(array)
//     if(ele > 6) console.log(`number = ${ele}`)
// })

// ()=>{

// }

var ids = [2, 7 ,  10, 5 , 6]


// return item
var ele = ids.find((item)=> item >= 6)
var ele = ids.find((item)=> item >= 20) // undefined
    // console.log(ele)



 var index = ids.findIndex(item => item > 6)   
 var index = ids.findIndex(item => item > 20)  // -1
//  console.log(index)
// ()=>{

// }

var items = ids.filter(item => item> 5)
var items = ids.filter(item => item> 50)


// console.log(items)

// map ==> search


// var user = ['Nouran' , "Ahmed" , "Fayez" ,32 , "developer"]

var user = {
    firstName : "Nouran",
    lastName : "Fayez",
    age : 32 , 
    getFullName : function(){
       return `${this.firstName} ${this.lastName}`
    },
    fullName : ()=>{
        // console.log(this) // window
        //  return `${this.firstName} ${this.lastName}`
    },
    addressList : function(){
        return {
            homeAddress : "Nasr city",
            officeAddress : 'Maadi',
            testAddress : {
                address1 : 'October',
                address2: "New cairo"
            }
        }
    }
}
// console.log(user)
// console.log(user.firstName)
// console.log(user["age"])
// console.log(user.getFullName())
console.log(user.fullName())
console.log(user.addressList().officeAddress)
console.log(user.addressList().testAddress.address2)

