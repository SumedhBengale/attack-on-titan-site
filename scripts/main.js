function changeimage(){
    let src= myImage.getAttribute("src");
    if(src==="images/aot.jpg")
    {
        myImage.setAttribute('src','images/aot2.jpg');
    }
    else{
        myImage.setAttribute('src','images/aot.jpg');
    }
}

function setusername(){
    let myName=prompt("Please Enter your name-");
    
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Welcome, ' + myName;
}

let myImage= document.querySelector("img");

myImage.onclick= function(){
    changeimage();
}
let myHeading=document.querySelector('h1');