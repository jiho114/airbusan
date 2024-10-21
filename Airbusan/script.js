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

const airSelectButtons = document.querySelectorAll('.airselect1'); // 모든 airselect 버튼 선택

airSelectButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('on')) {
      button.classList.remove('on');
    } else {
      // 다른 모든 버튼의 on 클래스 제거
      airSelectButtons.forEach(btn => btn.classList.remove('on'));
      
      // 현재 클릭한 버튼에 on 클래스 추가
      button.classList.add('on');
    }
  });
});

const steppers = document.querySelectorAll('.stepper');

steppers.forEach(stepper => {
    const plusBtn = stepper.querySelector('.plus');
    const minusBtn = stepper.querySelector('.minus');
    const input = stepper.querySelector('.result');

    plusBtn.addEventListener('click', () => {
        let currentValue = parseInt(input.value);
        let totalAdults = parseInt(document.querySelector('.adult').value)
        let totalChild = parseInt(document.querySelector('.child').value)
        let totalInfant = parseInt(document.querySelector('.infant').value)
        let totalCount = totalAdults + totalChild 

        if(stepper.querySelector('.adult') || stepper.querySelector('.child')){
          if(totalCount < 9){
            input.value = currentValue + 1;
          } 
        }
        else if (stepper.querySelector('.infant')) {
          if (currentValue < 9) {
              input.value = currentValue + 1;
          }
      }
    })

    minusBtn.addEventListener('click', () => {
        let currentValue = parseInt(input.value);
        if (currentValue > 0) {
            input.value = currentValue - 1;
        }
    });
});

let personSel = document.querySelector('.airselect2');
let psPu = document.querySelector('.passengers-popup');
let closeBtn = document.querySelector('.close-btn');
let resultBtn = document.querySelector('.pas-last-btn')

personSel.addEventListener('click', () => {
    personSel.classList.toggle('on');
  
    if (psPu.style.display === 'none' || psPu.style.display === '') {
        psPu.style.display = 'block';
    } else if(psPu.style.display === 'block') {
        psPu.style.display = 'none';
        personSel.classList.remove('on');
         // 현재 상태에 따라 block으로 설정
    }
});

closeBtn.addEventListener('click', () => {
    psPu.style.display = 'none';
    personSel.classList.remove('on');
});

resultBtn.addEventListener('click', ()=>{
  psPu.style.display = 'none';
  personSel.classList.remove('on');
  
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
