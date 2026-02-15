
// setTimeout(()=>{
//     console.log('Javascript')
// } , 3000)


// setInterval(()=>{
//     console.log('js')
// }, 1000)



// console.log('test')

// call back function

// let myFunct = (num , callBack)=>{
//     setTimeout(()=>{
//          if(num  > 10 ) {
//             callBack('greater than 10' , true)
//             console.log('greater than 10')
//         }
//             else callBack('less than 10' , false)
//     } , 2000)


// }

// myFunct(50 , (res , flag)=>{
//     console.log(res)
//     console.log(flag)
// })


// let sum = (val , cb) => {
//     setTimeout(() => {
//         if (typeof val == "number") {
//             cb(val * 2)
//         }
//         else {
//             cb('invalid')
//         }
//         // return total
//     }, 2000)
// }

// sum(20 , (result)=>{
//     console.log(result)
// })


// let arr = [3 , 4, 10]

// arr.forEach((item , i , arr)=>{

// })

// create promise

// let date = new Date()
// console.log(date)

// let p = new Promise()


// promise ==> object reading the asynchrounse data 
// promise ==> pending = waiting 
        //    fulfilled = operation succeeded
        //    reject = operation failed
let myPromise = (val)=>{
    return new Promise((resolve , reject)=>{
         setTimeout(() => {
        if (typeof val == "number") { resolve(val * 2)}
        else {reject('invalid')}
        // return total
    }, 2000)
    })
}

// let result 
// handling promise with then and catch
// console.log(myPromise(30))
// myPromise(20).then((result)=>{
//     result = result
//     return result
// }).then((result)=>{
//     console.log(result*100)
// })

// .catch(err=>{
//     console.log(err)
// })





// console.log(result)

/// handling promise with async await


// let promiseHandle = async ()=>{

//     try{
//         let resPromise = await myPromise(30)
//         let total = await resPromise*100
//         console.log(total)

//     }
//     catch(err){
//         console.log(err)
//     }


// }

// console.log(promiseHandle())





// let apiData = ()=>{
//    let data =  fetch('https://jsonplaceholder.typ')
//     data.then(result=>{
//         console.log(result)
//         return result.json()
//     }).then(apiRes=>{
//         console.log(apiRes)
//     }).catch(err=>{
//         console.log(err)
//     })


// }
// apiData()

let apiData = async ()=>{
    let data = await fetch("https://jsonplaceholder.typicode.com/users")
    let apiResult = await data.json()
    console.log(apiResult)
    apiResult.forEach(element => {
        console.log(element.username)
    });
}





apiData()



let div = document.getElementById('div_id')
let handleUserFunc = async ()=>{
    let data = await fetch("https://jsonplaceholder.typicode.com/users")
    let apiResult = await data.json()
    console.log(data)
    apiResult.forEach(element => {
        let h2element= document.createElement('h2')
        h2element.innerText = element.username
        div.appendChild(h2element)
        
    });
}



// all users = https://jsonplaceholder.typicode.com/users
// all posts = https://jsonplaceholder.typicode.com/posts




