let backbtn = document.querySelector(".backbtn")

backbtn.addEventListener("click", ()=>{
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    })
})

window.addEventListener("scroll", ()=>{
    let scrolling = window.scrollY
    if(scrolling > 100){
        backbtn.style.display = "block"
    }else{
        backbtn.style.display = "none"
    }
})