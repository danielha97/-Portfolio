let images = document.querySelectorAll(".back");
let crosses = document.querySelectorAll(".cross");


images.forEach((image)=>{
    image.addEventListener("click",(e)=>{
        let view = e.currentTarget.nextElementSibling;
        view.classList.add("show");
    });
});

crosses.forEach((cross)=>{
    cross.addEventListener("click",(e)=>{
        let remove = e.currentTarget.parentElement.parentElement.parentElement;
        remove.classList.remove("show");
    });
})

let navBar = document.querySelector(".nav-bar");

window.addEventListener("scroll",()=>{
    let base = window.pageYOffset;
    if(base>140){
        navBar.classList.add("scroll");
    }
    else{
        navBar.classList.remove("scroll");
    }
})

let links = document.querySelectorAll(".link");

links.forEach((link)=>{
    link.addEventListener("click",(e)=>{
        let name = e.currentTarget.getAttribute('href').slice(1);
        event.preventDefault();
        let section = document.getElementById(name);
        let destination = section.offsetTop;
        window.scrollTo({
            top:destination - 165,
            left:0,
        });
    });
});