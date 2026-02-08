
// localStorage.setItem("userName", "Nouran")

var users = [
    {
        fName: "Ahmed",
        LName: "Mohamed"
    },
    {
        fName: "Marwa",
        LName: "Mohamed"
    },
    {
        fName: "Hazem",
        LName: "Mohamed"
    }
]

localStorage.setItem('users' , JSON.stringify(users))

// var ids = [1 , 3, 5]

// console.log(users.toString())
// console.log(JSON.stringify(users))


// var newArray = JSON.parse(localStorage.getItem('users'))
// newArray.push({fName : 'tamer' , lName:'Fayez'})
// console.log(newArray)

// localStorage.removeItem('userName')
// console.log(JSON.parse(localStorage.getItem('users').push({fName : 'tamer' , lName:'Fayez'})));




// sessionStorage.setItem('userName' , 'Ahmed')


console.log(localStorage.getItem('address'));

var users = []
