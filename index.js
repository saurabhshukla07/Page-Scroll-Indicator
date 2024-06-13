let indicator = document.querySelector(".indicator");

let documentHeight = document.documentElement.scrollHeight;
let remainHeight = document.documentElement.clientHeight;


window.onscroll=function(){
    // console.log(scrollY)

    let percentageScrolled = (scrollY / (documentHeight - remainHeight))*100 ;
    indicator.style.width = percentageScrolled + "%" ;
}