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
  guideLet[i].className = 'topbt';
  guideLet[(i+1) % guideLet.length].className = 'top'
  guideLet[(i+2) % guideLet.length].className = 'topplus'
  i++;
}
setInterval(slide, 5500);

 let intervalBtn = document.querySelector('.serch-btn>li>button')
 let interval = document.querySelector('.interval');

 intervalBtn.addEventListener('click', () => {
  let currentHeight = window.getComputedStyle(interval).height; // 현재 height 가져오기  
  intervalBtn.classList.remove('on')
  if (currentHeight === '0px') {
    interval.style.height = '30px'; // 원하는 높이로 설정
    intervalBtn.classList.add('on')
  } else {
    interval.style.height = '0px';  // 다시 0으로 줄이기
  }
});

interval.addEventListener('mouseenter', ()=>{
  interval.classList.add('check')
})
interval.addEventListener('mouseleave', ()=>{
  interval.classList.remove('check')
})



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

  
  //하단 탭 슬라이드 배너
  //선언
  let subSlideBox = document.querySelector('.tapslide>ul')
  let subSlideLi = document.querySelectorAll('.tapslide>ul>li')
  let subSlideWidth = subSlideLi[0].offsetWidth;
  let bullets = document.querySelectorAll('.bullets>li')

// next 버튼 활성화
let subNum = 0;
document.querySelector('#subslidetap-right').addEventListener('click', ()=>{
  subNum++;

  if(subNum >= 4) subNum = 4;
  
  subSlideBox.style.transition = 'margin-left .5s'
  subSlideBox.style.marginLeft = `${-subSlideWidth*subNum}px`;
  
  for(let i = 0; i < bullets.length; i++){
    bullets[i].classList.remove('on')
    // console.log(bullets[i])
  } 
  
  bullets[subNum].classList.add('on')
})

//prev버튼 활성화
document.querySelector('#subslidetap-left').addEventListener('click', ()=>{
  subNum--;

  if(subNum <= 0) subNum = 0;
  
  subSlideBox.style.transition = 'margin-left .5s'
  subSlideBox.style.marginLeft = `${-subSlideWidth*subNum}px`;
  
  for(let i = 0; i < bullets.length; i++){
    bullets[i].classList.remove('on')
  } 
    bullets[subNum].classList.add('on')
})

let personSel = document.querySelector('#airselect2')

personSel.addEventListener('click',()=>{
  personSel.classList.add('on')
  let psPu = document.querySelector('.passengers-popup');
  
  if(psPu.style.display = 'none'){
    psPu.style.display = 'block'
    let closeBtn = document.querySelector('.close-btn').addEventListener('click', ()=>{
      psPu.style.display = 'none'
      personSel.classList.remove('on')
  })
}else{
   psPu.style.display = 'none'
}
})