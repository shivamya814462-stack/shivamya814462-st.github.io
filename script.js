const pages=document.querySelectorAll('.page');
let current=0;

function nextPage(){
  pages[current].classList.remove('active');
  current++;
  pages[current].classList.add('active');
}

const text="I have something special to tell you...";
let i=0;
function typeWriter(){
  if(i<text.length){
    document.getElementById("typeText").innerHTML+=text.charAt(i);
    i++;
    setTimeout(typeWriter,70);
  }
}
typeWriter();

const images=["images/p1.jpg","images/p2.jpg","images/p3.jpg"];
let s=0;
setInterval(()=>{
  if(document.getElementById("slide")){
    s=(s+1)%images.length;
    document.getElementById("slide").src=images[s];
  }
},2000);

function moveNo(){
  const btn=document.getElementById("noBtn");
  btn.style.left=Math.random()*200+"px";
  btn.style.top=Math.random()*80+"px";
}

function yesClicked(){
  heartBlast();
  pages[current].classList.remove('active');
  pages[3].classList.add('active');
}

function heartBlast(){
  for(let i=0;i<30;i++){
    const heart=document.createElement("div");
    heart.innerHTML="❤️";
    heart.style.position="fixed";
    heart.style.left=Math.random()*100+"vw";
    heart.style.top="100vh";
    heart.style.fontSize="24px";
    document.body.appendChild(heart);
    heart.animate([
      {transform:"translateY(0)",opacity:1},
      {transform:"translateY(-100vh)",opacity:0}
    ],{duration:3000});
    setTimeout(()=>heart.remove(),3000);
  }
}
