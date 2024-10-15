addEventListener("load", () => {
  const menubar = document.querySelector(".menubar");
  const subs = document.querySelectorAll(".sub");
  const subBg = document.querySelector(".subBg");

  menubar.addEventListener("mouseenter", down)
  subBg.addEventListener("mouseenter", down)

  
  menubar.addEventListener("mouseleave", up)
  subBg.addEventListener("mouseleave", up)

  function up(){
    for(const sub of subs){
      sub.style.maxHeight = "0px";
    }
    subBg.style.height = "0px";
  }

  function down(){
    for(const sub of subs){
      sub.style.maxHeight = sub.scrollHeight + "px";
    }
    subBg.style.height = "180px";
  }
});

let i = 0;
const guideLet = document.querySelectorAll('.guide-let-box > li')
function slide(){
  (i === guideLet.length) && (i = 0)
  console.log(guideLet)
  guideLet[i].className = 'topbt';
  guideLet[(i+1) % guideLet.length].className = 'top'
  guideLet[(i+2) % guideLet.length].className = 'topplus'
  i++;
}
setInterval(slide, 5500);

let mainTapSlide = document.querySelector('.slide-menu')
let mainTapSlideLi = document.querySelectorAll('.slide-menu>li')
let showNum = 4;
let total = mainTapSlideLi.length;
let liWidth = mainTapSlideLi[0].offsetWidth;

for(let i = 0; i < showNum; i++){
  const copyobj = mainTapSlideLi[i].cloneNode(true)
  mainTapSlide.appendChild(copyobj)
}

let num = 0;
document.querySelector('#next').addEventListener('click', ()=>{
  if(num === total){
    num = 0;
    mainTapSlide.style.transition = 'none'
    mainTapSlide.style.marginLeft = '0%'
    console.log(num)
  }
  setTimeout(function(){
    num++;
    mainTapSlide.style.transition = 'margin-left .5s'
    mainTapSlide.style.marginLeft = `${-liWidth*num}px`
  },50)
})

document.querySelector('#prev').addEventListener('click', ()=>{
  if(num === 0){
    num = total;
    mainTapSlide.style.transition ='none';
    mainTapSlide.style.marginLeft = `${-liWidth*num}px`
  }
  setTimeout(function(){
     num--;
     mainTapSlide.style.transition ='margin-left .5s';
     mainTapSlide.style.marginLeft = `${-liWidth*num}px`
  },50)
})

let subslideBox = document.querySelector('.tapslide')
let subslideLi = document.querySelectorAll('.tapslide>li')



