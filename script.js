/* ================= FLOATING HEARTS (ALL PAGES) ================= */

const heartsContainer = document.querySelector(".hearts");

if(heartsContainer){
    for(let i=0;i<25;i++){
        let heart=document.createElement("span");

        heart.style.left=Math.random()*100+"vw";
        heart.style.animationDuration=(5+Math.random()*6)+"s";
        heart.style.opacity=Math.random();

        heartsContainer.appendChild(heart);
    }
}


/* ================= RUNAWAY NO BUTTON ================= */

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

if(yesBtn){
    yesBtn.onclick = ()=>{
        launchConfetti();
        setTimeout(()=>{
            window.location.href="yes.html";
        },700);
    };
}

if(noBtn){

let size = 1;
let moving=false;

function move(){

    if(moving) return;
    moving=true;

    const rect=noBtn.getBoundingClientRect();

    const maxX=window.innerWidth-rect.width-20;
    const maxY=window.innerHeight-rect.height-20;

    const x=Math.random()*maxX;
    const y=Math.random()*maxY;

    noBtn.style.position="fixed";
    noBtn.style.left=x+"px";
    noBtn.style.top=y+"px";

    size-=0.08;
    if(size<0.25) size=0.25;

    noBtn.style.transform=`scale(${size})`;

    setTimeout(()=>moving=false,300);
}

noBtn.addEventListener("mouseenter",move);
noBtn.addEventListener("touchstart",(e)=>{
    e.preventDefault();
    move();
});
}


/* ================= CONFETTI FUNCTION ================= */

function launchConfetti(){

    const colors=[
        "#ff4d6d",
        "#ff85a2",
        "#ffd166",
        "#06d6a0",
        "#118ab2",
        "#ffffff"
    ];

    for(let i=0;i<120;i++){

        const confetti=document.createElement("div");
        confetti.classList.add("confetti");

        confetti.style.left=Math.random()*100+"vw";
        confetti.style.background=colors[Math.floor(Math.random()*colors.length)];

        const duration=3+Math.random()*3;
        confetti.style.animationDuration=duration+"s";

        document.body.appendChild(confetti);

        setTimeout(()=>confetti.remove(),duration*1000);
    }
}


/* ================= AUTO CONFETTI ON YES PAGE ================= */

if(window.location.pathname.includes("yes.html")){
    setTimeout(launchConfetti,500);
}
