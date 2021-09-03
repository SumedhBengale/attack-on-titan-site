let myImage= document.querySelector("img");

myImage.onclick= function(){

    let src= myImage.getAttribute("src");
    if(src==="images/aot.jpg")
    {
        myImage.setAttribute('src','images/aot2.jpg');
    }
    else{

        myImage.setAttribute('src','images/aot.jpg');
    }
}