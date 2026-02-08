// DOM ==> document object model


// console.log(document.getElementsByTagName("h1"));

var h1Elements = document.getElementsByTagName("h1")
h1Elements[1].innerText = "Javascript"

// h1Elements.forEach(item=>{
//     console.log(item)
// })
for (var i = 0; i < h1Elements.length; i++) {
    // h1Elements[i].innerText = "Javascript"
    h1Elements[i].innerHTML = "<p>Javascript</p>"
}

h1Elements[2].style.color = "red"
h1Elements[2].style.backgroundColor = "lightgrey"


var h1Element = document.getElementById('h1_element')

// console.log(h1Element)
h1Element.style.color = "blue"

// console.log(document.getElementsByClassName("custom-class"));

// console.log(document.querySelector('.custom-class'));
// console.log(document.querySelectorAll('.custom-class'));

var changeImg = () => {
    var img = document.getElementById('img_id')
    console.log(img.src);
    // img.src = "images/2.jpg"
    // if (img.src.includes("images/1.jpg")) {
    if (img.src.endsWith("images/1.jpg")) {
        img.src = "images/2.jpg"
    }
    else {
        img.src = "images/1.jpg"
    }

}


function changeDivBg(){
    var div = document.querySelector('div')
    div.style.background = "lightgray"
    console.log('mouse enter')
}
function handleMouseLeave(){
     var div = document.querySelector('div')
    div.style.background = "blue"
    
}

function handleChange(type , element){
    //   var div = document.querySelector('div');
    //   var div = document.querySelectorAll('.custom_div');
    (type == 'mouseenter') ? 
    element.style.background = "lightgray" :
    element.style.background = "blue"
}


function handleClick(){
    var card = document.querySelector('#custom-card')
    // card.className = "bg-light"
    // card.classList.add("bg-light")
    // card.classList.remove("bg-light")
    card.classList.toggle("bg-light")
}








