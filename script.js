var form = document.getElementById("userForm"),
imgInput = document.querySelector(".imgholder img"),
userName = document.getElementById("name"),
age = document.getElementById("age"),
city = document.getElementById("city"),
file = document.getElementById("imgInput"),
email = document.getElementById("email"),
phone = document.getElementById("phone"),
post = document.getElementById("post"),
sDate = document.getElementById("sDate"),
submitBtn = document.querySelector('.submit'),
userInfo = document.getElementById("data"),
modal = document.getElementById('userForm'),
modalTitle = document.querySelector('#userForm .modal-title')


let getData = localStorage.getItem("userProfile") ? JSON.parse(localStorage.getItem("userProfile")) : []

let isEdit = false, editId


//I stopped at 20: 01
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

function showInfo(){
    getData.forEach((element, index)=>{
        let createElement = `<tr class= "employeDetails"> 
        <td>${index+1}</td>
        <td><img src="${element.picture}" alt="" width="50" height="50"></td>
        <td>${element.employeeName}</td>
        <td>${element.employeeAge}</td>
        <td>${element.employeeCity}</td>
        <td>${element.employeeEmail}</td>
        <td>${element.employeePhone}</td>
        <td>${element.employeePost}</td>
        <td>${element.startDate}</td>
        
        </tr>`
    })
}

form.addEventListener('submit', (e)=>{
    e.preventDefault()

    const information = {
        picture:  imgInput.src == undefined ? "person_icon.png" : imgInput.src,
        employeeName: userName.value,
        employeeAge: age.value,
        employeeCity: city.value,
        employeeEmail: email.value,
        emplyeePhone: phone.value,
        employeePost: post.value,
        startDate:sDate.value
    }

    if(!isEdit){getData.push(information)}else{
        isEdit = false
        getData[editId] = information
    }


    localStorage.setItem('userProfile', JSON.stringify(getData))

    submitBtn.innerText = "Submit"
    modalTitle.innerHTML = 'Fill The Form'

    showInfo();
    form.reset();

    imgInput.src = "person_icon.png"
    modal.style.display = "none"
    document.querySelector(".modal-backdrop").remove();
})