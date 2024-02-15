let buttonClick = document.getElementById("btn-primary")
let authentication = document.getElementById("authentication-fail")
buttonClick.addEventListener('click',()=>{
    let nameValue = document.getElementById("input-value").value.toUpperCase()
    if(nameValue.trim() === ""){
        alert("Please Enter a Valid Name")
    }
    else if (nameValue.trim() === "BINOD"){//Enter the name to whom you wanna send this in capital letters
        window.location.href = "love.html";
    }
    else{
        authentication.style.opacity = 100;
    }
    let mytimeOut = setTimeout(opacityDown, 3000)
})
function opacityDown(){
    authentication.style.opacity = 0;
}