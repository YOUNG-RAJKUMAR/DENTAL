// Loader
window.addEventListener("load", function(){
const loader = document.getElementById("loader");
if(loader){
loader.style.display = "none";
}
});

// Dark Mode (saved)
const toggle = document.getElementById("darkToggle");

if(toggle){
if(localStorage.getItem("darkMode") === "enabled"){
document.body.classList.add("dark-mode");
}

toggle.addEventListener("click", function(){
document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){
localStorage.setItem("darkMode","enabled");
}else{
localStorage.setItem("darkMode","disabled");
}
});
}

// Appointment Form (localStorage based)
const form = document.getElementById("appointmentForm");

if(form){
form.addEventListener("submit", function(e){
e.preventDefault();

const data = {
name: form[0].value,
email: form[1].value,
phone: form[2].value,
message: form[3].value,
date: new Date().toLocaleString()
};

let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
appointments.push(data);
localStorage.setItem("appointments", JSON.stringify(appointments));

document.getElementById("successMessage").innerHTML = 
"✅ Appointment Submitted Successfully!";

form.reset();
});
}