let type = document.querySelector(".type");
let typedText = type.innerHTML;
let typeArr = typedText.split("");
type.innerHTML = "";
let typing = 0;


function typedJs(){
    if(typing < typedText.length){
        type.innerHTML += typedText.charAt(typing);
        typing++
        typeArr = typedText.split("");
    }else{
        typeArr.pop("")
        type.innerHTML = typeArr.join("")

        if(typeArr.length == 0){
            typing = 0;
        }
    }
}
setInterval(()=>{
    typedJs()
},200)