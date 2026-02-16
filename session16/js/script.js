let str = "lorem ipsum dolor sit amet lorem consectetur"

let reg = /ghjjk/

let value = "abc123dfghjhg567"

let regDigits = /\d+/g

// console.log(reg.test(str))
// console.log(regDigits.test(value))
// console.log(value.match(regDigits))

// const email = "Nouranemail.com"

// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// console.log(emailRegex.test(email))


let myForm = document.querySelector('#myForm')


let emailValidation = (element)=>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let inputValue = element.value
    console.log(emailRegex.test(inputValue))
    if(!emailRegex.test(inputValue)) handleError(element , "invalid email")
    else handleError(element)
    

}

let handleError = (element , msg = "")=>{
    element.nextElementSibling.innerText = msg
}
myForm.addEventListener('input' , (e)=>{
    // console.log(e.target)

    if(e.target.name == "userEmail") emailValidation(e.target)

})











