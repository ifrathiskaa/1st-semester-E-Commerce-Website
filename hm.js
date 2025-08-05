const header= document.querySelector("header");
window.addEventListener ("scroll", function() {
    header.classList.toggle("sticky", window.scrollY >0);
});

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("open");
};

window.onscroll = () => {
    menu.classList.remove("bx-x");
    navbar.classList.remove("open");
};

const sr = ScrollReveal ({
    distance: "60px",
    duration:2500,
    delay:400,
    reset:true
})

sr.reveal(".Home-text",{delay:200,origin:"top"});
sr.reveal(".Home-img",{delay:300,origin:"top"});
sr.reveal(".feature-content, .product, .contact",{delay:250,origin:"top"});


const search = () =>{
    const searchbox=document.getElementById("search-item").value.toUpperCase();
    const storeitems=document.getElementById("product-list")
    const product=document.querySelectorAll("product")
    const pname=document.getElementsByTagName("h3")

    for( var i=0; i <pname.length; i++){
        let match=product[i].getElementsByTagName("h3")[0];

        if(match){
           let textvalue=  match.textContent || match.innerHTML
           
           if(textvalue.toUpperCase().indexOf(searchbox) > -1){
            product[i].style.display = "";
           }else{
            product[i].style.display = "none";
           }
        }
    }
}

