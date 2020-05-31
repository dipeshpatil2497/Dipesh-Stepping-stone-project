
const selected = document.querySelector(".ST1");
const optionContanier = document.querySelector(".OC1");

const optionlist = document.querySelectorAll(".OT1");

selected.addEventListener("click" ,() => {

    optionContanier.classList.toggle("active");

});


const selected2 = document.querySelector(".ST2");
const optionContanier2 = document.querySelector(".OC2");

const optionlist2 = document.querySelectorAll(".OT2");

selected2.addEventListener("click" ,() => {

    optionContanier2.classList.toggle("active");

});


const selected3 = document.querySelector(".ST3");
const optionContanier3 = document.querySelector(".OC3");

const optionlist3 = document.querySelectorAll(".OT3");

selected3.addEventListener("click" ,() => {

    optionContanier3.classList.toggle("active");

});

const selected4 = document.querySelector(".ST4");
const optionContanier4 = document.querySelector(".OC4");

const optionlist4 = document.querySelectorAll(".OT4");

selected4.addEventListener("click" ,() => {

    optionContanier4.classList.toggle("active");

});

const selected5 = document.querySelector(".ST5");
const optionContanier5 = document.querySelector(".OC5");

const optionlist5 = document.querySelectorAll(".OT5");

selected5.addEventListener("click" ,() => {

    optionContanier5.classList.toggle("active");

});



// optionlist.forEach(o => {
//     o.addEventListener("click" , () => {
//         selected.innerHTML = o.querySelector("label").innerHTML;
//         optionContanier.classList.remove("active");
//     });
// });