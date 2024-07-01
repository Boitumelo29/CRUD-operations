var form = document.getElementById("#userForm"),
imgInput = document.querySelector(".img"),
name = document.getElementById("name"),
age = document.getElementById("age"),
city = document.getElementById("city"),
file = document.getElementById("imgInput"),
email = document.getElementById("email"),
phone = document.getElementById("phone"),
post = document.getElementById("post"),
sDate = document.getElementById("sDate"),
submitBtn = document.querySelector('.submit'),
userInfo = document.getElementById("data")


let getData = localStorage.getItem("userProfile") ? JSON.parse(localStorage.getItem("userProfile")) : []

let isData = false, editId

file.onchange = function(){
    if(file.files[0].size < 100000000){
        var  fileReader = new FileReader();

        fileReader.onload = function(e){
            imgUrl = e.target.result
            imgInput.src = imgUrl
        }
        fileReader.readAsDataURL(file.files[0])
    }else{
        alert("file is too large")
    }
}