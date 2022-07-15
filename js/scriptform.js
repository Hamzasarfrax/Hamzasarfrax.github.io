let name= document.getElementById("name")
let password =document.getElementById("password")
let form = document.getElementById("form");
let error = document.getElementById("error");

form.addEventListner("submit" , (e) =>{
let message=[ ]

if(name.value === "" || name.value==null){
message.push("Name is required")
}
if(message.lenght>0){
e.preventDefault()
error.innerText=message.join(",")
}
})