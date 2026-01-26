var ids = [2, 10, 5, 6]
// console.log(ids[0])
// console.log(ids[1])
// console.log(ids[2])
// console.log(ids[])

// for(var i = 0 ; i < ids.length ; i++ ){
//     console.log(ids[i])
// }

var ids = [2, 10, 5, 6]
// special function
// ids.forEach((ele , ind , array)=>{
//     // console.log(ele)
//     // console.log(ind)
//     // console.log(array)
//     if(ele > 6) console.log(`number = ${ele}`)
// })

// ()=>{

// }

var ids = [2, 7, 10, 5, 6]


// return item
var ele = ids.find((item) => item >= 6)
var ele = ids.find((item) => item >= 20) // undefined
// console.log(ele)
var index = ids.findIndex(item => item > 6)
var index = ids.findIndex(item => item > 20)  // -1
//  console.log(index)
// ()=>{

// }

// var items = ids.filter(item => item> 5)
// var items = ids.filter(item => item> 50)


// console.log(items)

// map ==> search


// var user = ['Nouran' , "Ahmed" , "Fayez" ,32 , "developer"]

var user = {
    firstName: "Nouran",
    lastName: "Fayez",
    age: 32,
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`
    },
    fullName: () => {
        // console.log(this) // window
        //  return `${this.firstName} ${this.lastName}`
    },
    addressList: function () {
        return {
            homeAddress: "Nasr city",
            officeAddress: 'Maadi',
            testAddress: {
                address1: 'October',
                address2: "New cairo"
            }
        }
    }
}
// console.log(user)
// console.log(user.firstName)
// console.log(user["age"])
// console.log(user.getFullName())
// console.log(user.fullName())
// console.log(user.addressList().officeAddress)
// console.log(user.addressList().testAddress.address2)

var user1 = {
    fName: "Ahmed",
    lName: 'Mohamed',
    age: 20
}
var user2 = {
    fName: "Marwa",
    lName: 'Mohamed',
    age: 30
}
var users = [
    {
        fName: "Ahmed",
        lName: 'Mohamed',
        age: 20
    },
    {
        fName: "Marwa",
        lName: 'Mohamed',
        age: 30
    }
]

var ind = users.findIndex((item)=> item.age == 20)
// ele.age = 25
// console.log(ele)

// console.log(users[ind].age = 40)

// console.log(users)




// name , id , balance

// addUsers() ==> name , id , balance
// editUserBalanceById() ==> id , newBalance
// deleteUserById() ==> id

if(localStorage.getItem('users')){
    var users = JSON.parse(localStorage.getItem('users'))

}
else var users = []

var addUsers = ()=>{
    var userName = prompt('enter user name')
    var userId = prompt('enter user id')
    // var userBalance = prompt('enter user Balance')
    var user = {
        userName : userName ,
        userId ,
        userBalance : prompt('enter user Balance')
    }
    usersList.push(user)
    console.table(usersList)
}

var usersNum = prompt('number of users')

for(var i = 0 ; i< usersNum ; i++){
    addUsers()
}


var usersList = [
    {age : 20 , email:"email@hotmail.com"}
]

