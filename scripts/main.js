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
    myHeading.textContent = 'Welcome, ' + myName;
    if(!localStorage.getItem('name')) {
        setUserName();
      } else {
        let myName = localStorage.getItem('name');
      }
}

let myImage= document.querySelector("img");

myImage.onclick= function(){
    changeimage();
}
let myHeading=document.querySelector('h2');