// Navbar color change on scroll
window.addEventListener("scroll", function(){
const header = document.getElementById("header");
header.classList.toggle("scrolled", window.scrollY > 50);
});

// Scroll Reveal Animation
function reveal(){
const reveals = document.querySelectorAll(".reveal");
for(let i=0;i<reveals.length;i++){
let windowHeight = window.innerHeight;
let elementTop = reveals[i].getBoundingClientRect().top;
let elementVisible = 100;
if(elementTop < windowHeight - elementVisible){
reveals[i].classList.add("active");
}
}
}
window.addEventListener("scroll", reveal);

// Counter Animation
const counters = document.querySelectorAll(".counter");
counters.forEach(counter => {
counter.innerText = '0';
const updateCounter = () => {
const target = +counter.getAttribute('data-target');
const c = +counter.innerText;
const increment = target / 200;
if(c < target){
counter.innerText = `${Math.ceil(c + increment)}`;
setTimeout(updateCounter, 10);
}else{
counter.innerText = target;
}
};
updateCounter();
});