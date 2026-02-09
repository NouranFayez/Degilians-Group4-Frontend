
// // var x 


// // console.log(firstName)
// var firstName = "Nouran"
// // var firstName = "ahmed"


// // console.log(lastName)
// let lastName = "mohamed"
// // let lastName = "zein"

// lastName = 30


// // const age = 31
// // age = 40
// // console.log(age)
// // const age = "xfghjk"


// function test(){
//     if(true){
//         var x = "fghj"
//         let h = "javascript"
//     }

//     console.log(x)
//     // console.log(h)


// }
// test()

// console.log(window)


// let input = document.getElementById('userName')

// input.addEventListener('input' , (e)=>{
//     // console.log('typing')
//     // console.log(input.value)
//     console.log(e.target.value)
//     e.target.nextElementSibling.innerText = e.target.value
// })


// let myForm = document.querySelector('#myForm')
// myForm.addEventListener('submit' , (e)=>{
//     e.preventDefault()
//     console.log('submitting')
//     console.log(e.target.elements.userEmailInput.value)
//     console.log(e.target.elements.userNameInput.value)
// })



// let scrollDiv = document.getElementById('scroll-div')
// scrollDiv.addEventListener('scroll' , (eve)=>{
//     console.log(eve.target.scrollTop)
//     if(eve.target.scrollTop > 400) eve.target.style.background = "teal"
// })

// let arrow = document.getElementById('topArrow')

// window.addEventListener("scroll" , ()=>{
//     console.log('scrolling')
//     console.log(document.documentElement.scrollTop)
//     if(document.documentElement.scrollTop > 300) arrow.classList.remove('d-none')
//     else arrow.classList.add('d-none')
// })


// let btn = document.getElementById('btn')

// btn.addEventListener('click' , ()=>{

// })


let tableBody = document.getElementById('tableBody')

let myForm = document.querySelector('#myForm')
myForm.addEventListener('submit' , (e)=>{
    e.preventDefault()
    console.log('submitting')
    console.log(e.target.elements.userEmailInput.value)
    console.log(e.target.elements.userNameInput.value)

    let tr = document.createElement("tr")
    let td = document.createElement("td")
    let tdEmail = document.createElement("td")
    td.innerText = e.target.elements.userNameInput.value
    tdEmail.innerText = e.target.elements.userEmailInput.value
    console.log(td)

    tr.appendChild(td)
    tr.appendChild(tdEmail)

    console.log(tr)

    tableBody.appendChild(tr)
    
})
















