let i;
let difficulty=2000;
let lowerLimit=1000;
function reposition(){
    x=Math.random()*1000;
    y=Math.random()*500;
    target.style.left=`${x}px`
    target.style.top=`${y}px`
}
let x=Math.random()*1000;
let y= Math.random()*500;
let target=document.createElement("div");
target.id="tar";
let img=document.createElement("img");
img.setAttribute("src","./images/target.avif");
target.appendChild(img);
target.style.display="inline";
target.style.position="relative";
target.style.left=`${x}px`;
target.style.right=`${y}px`;
target.addEventListener('click',increasescore);
let alredyPlaying=false;
document.querySelector("#start").addEventListener('click',begin);
document.querySelector('#stop').addEventListener('click',terminate);

function begin(e){
    if(alredyPlaying===false){
        document.querySelector(".main").appendChild(target);
        i=setInterval(reposition,2000);
    }
    else{
        document.getElementById("score").innerHTML="0";
        i=setInterval(reposition,2000);
    }
    e.preventDefault();
}
function increasescore(){
    let score=document.getElementById('score').innerHTML;
    let s=Number(score);
    s+=100;
    if(s>lowerLimit&&s<10000){
        lowerLimit+=1000;
        difficulty-=120;
        displayMessage();
    }
    document.getElementById('score').innerHTML=s;
    clearInterval(i);
    i=setInterval(reposition,2000);
    reposition();
}
function terminate(){
    clearInterval(i);
    alredyPlaying=true;
    lowerLimit=1000;
    difficulty=2000;
}    
function displayMessage(){
    let msg=document.createElement("div");
    msg.id="m";
    msg.innerHTML="LEVEL UP !";
    let temp=document.querySelector(".main");
    temp.appendChild(msg);
    setTimeout(()=>{
        temp.removeChild(msg);
    },1000);
}