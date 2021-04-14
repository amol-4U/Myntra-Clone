let main = document.querySelector(".main");

fetch("media/images/login_page/banner.jpg")
.then(function(response){
    if(!response.ok){throw new Error(response.status);}
    else {
        return response.blob();
    }
})
.then(function(myBlob){
    let objectURL = URL.createObjectURL(myBlob);
    let image = document.createElement('img');
    
    main.appendChild(image);
    image.src = objectURL;
})
.catch(function(error){
    main.innerHTML = error.message;
}
)


// header javascript code

let nav = document.querySelector(".nav");
let hover_navigation = document.querySelectorAll(".hover_navigation");
let nav_main = document.querySelectorAll(".nav_main");
nav.addEventListener("mouseover", main_brightness_minus);
nav.addEventListener("mouseout", main_brightness_add);
function main_brightness_minus(){
   main.style.filter = "brightness(90%)";

}

function main_brightness_add(){
    main.style.filter = "brightness(100%)";
 }

 hover_navigation[0].addEventListener("mouseover",border_add)
 hover_navigation[0].addEventListener("mouseout",border_minus)

 function border_add(){
    nav_main[0].style.border = "5px solid red";}

function border_minus(){
        nav_main[0].style.border = "none";}