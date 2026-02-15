
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
        if (typeof val == "number") {
            resolve(val * 2)
        }
        else {
            reject('invalid')
        }
        // return total
    }, 2000)
    })
}
// handling promise with then and catch
console.log(myPromise(30))
myPromise("dfghj").then((result)=>{
    console.log(result)
}).catch(err=>{
    console.log(err)
})

/// handling promise with async await

