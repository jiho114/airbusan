addEventListener("load", () => {
  const menubar = document.querySelector(".menubar");
  const subs = document.querySelectorAll(".sub");
  const subBg = document.querySelector(".subBg");

  menubar.addEventListener("mouseenter", down)
  subBg.addEventListener("mouseenter", down)


  menubar.addEventListener("mouseleave", up)
  subBg.addEventListener("mouseleave", up)

  function up() {
    for (const sub of subs) {
      sub.style.maxHeight = "0px";
    }
    subBg.style.height = "0px";
  }

  function down() {
    for (const sub of subs) {
      sub.style.maxHeight = sub.scrollHeight + "px";
    }
    subBg.style.height = "180px";
  }
});

let i = 0;
const guideLet = document.querySelectorAll('.guide-let-box > li')
function slide() {
  (i === guideLet.length) && (i = 0)
  guideLet[i].className = 'topbt';
  guideLet[(i + 1) % guideLet.length].className = 'top'
  guideLet[(i + 2) % guideLet.length].className = 'topplus'
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

    if (stepper.querySelector('.adult') || stepper.querySelector('.child')) {
      if (totalCount < 9) {
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

psPu.addEventListener('click', (event)=>{
  event.stopPropagation();
})

personSel.addEventListener('click', (event) => {
  event.stopPropagation();
  personSel.classList.toggle('on');
  psPu.classList.toggle('on')
});

closeBtn.addEventListener('click', (event) => {
  event.stopPropagation();
  psPu.classList.remove('on');
  personSel.classList.remove('on');
});

resultBtn.addEventListener('click', (event) => {
  event.stopPropagation();
  psPu.classList.remove('on');
  personSel.classList.remove('on');
})

document.addEventListener('click', () => {
  psPu.classList.remove('on');
  personSel.classList.remove('on');
});


let citySelectLi1 = document.querySelector('.city-select-li1');
let citySelectList1 = document.querySelector('.city-select-list1');
let citySelectClose1 = document.querySelector('.city-select-close1');

citySelectLi1.addEventListener('click', (event) => {
  event.stopPropagation(); // 버블링 방지
  citySelectList1.classList.toggle('active');
});

citySelectClose1.addEventListener('click', (event) => {
  event.stopPropagation(); // 버블링 방지
  citySelectList1.classList.remove('active');
});

citySelectList1.addEventListener('click', (event) => {
  event.stopPropagation(); // 리스트 내부 클릭 시 닫히지 않도록 방지
});

document.addEventListener('click', () => {
  citySelectList1.classList.remove('active');
});


let citySelectLi2 = document.querySelector('.city-select-li2');
let citySelectList2 = document.querySelector('.city-select-list2');
let citySelectClose2 = document.querySelector('.city-select-close2');

citySelectLi2.addEventListener('click', (event) => {
  event.stopPropagation(); // 버블링 방지
  citySelectList2.classList.toggle('active');
});

citySelectClose2.addEventListener('click', (event) => {
  event.stopPropagation(); // 버블링 방지
  citySelectList2.classList.remove('active');
});

citySelectList2.addEventListener('click', (event) => {
  event.stopPropagation(); // 리스트 내부 클릭 시 닫히지 않도록 방지
});

document.addEventListener('click', () => {
  citySelectList2.classList.remove('active');
});


const departurePicker = flatpickr("#departure", {
  dateFormat: "Y-m-d",
  minDate:"today",
  locale: "ko",
  onChange: function(selectedDates) {
      // 도착일 입력 필드 활성화
      document.getElementById("arrival").disabled = false;
      // 도착일 Flatpickr 초기화
      arrivalPicker.set('minDate', selectedDates[0]); // 출발일 이후만 선택 가능
      arrivalPicker.open(); // 도착일 데이트피커 열기
  }
});

// 도착일 Flatpickr 초기화
const arrivalPicker = flatpickr("#arrival", {
  dateFormat: "Y-m-d",
  locale: "ko",
  minDate: "today" // 기본적으로 오늘 날짜 이후로 설정
});



let mainTapSlide = document.querySelector('.slide-menu')
let mainTapSlideLi = document.querySelectorAll('.slide-menu>li')
let showNum = 4;
let total = mainTapSlideLi.length;
let liWidth = mainTapSlideLi[0].offsetWidth;

for (let i = 0; i < showNum; i++) {
  const copyobj = mainTapSlideLi[i].cloneNode(true)
  mainTapSlide.appendChild(copyobj)
}

let num = 0;
document.querySelector('#next').addEventListener('click', () => {
  if (num === total) {
    num = 0;
    mainTapSlide.style.transition = 'none'
    mainTapSlide.style.marginLeft = '0%'
  }
  setTimeout(function () {
    num++;
    mainTapSlide.style.transition = 'margin-left .5s'
    mainTapSlide.style.marginLeft = `${-liWidth * num}px`
  }, 50)
})

document.querySelector('#prev').addEventListener('click', () => {
  if (num === 0) {
    num = total;
    mainTapSlide.style.transition = 'none';
    mainTapSlide.style.marginLeft = `${-liWidth * num}px`
  }
  setTimeout(function () {
    num--;
    mainTapSlide.style.transition = 'margin-left .5s';
    mainTapSlide.style.marginLeft = `${-liWidth * num}px`
  }, 50)
})


//하단 탭 슬라이드 배너
//선언
let subSlideBox = document.querySelector('.tapslide>ul')
let subSlideLi = document.querySelectorAll('.tapslide>ul>li')
let subSlideWidth = subSlideLi[0].offsetWidth;
let bullets = document.querySelectorAll('.bullets>li')

// next 버튼 활성화
let subNum = 0;
document.querySelector('#subslidetap-right').addEventListener('click', () => {
  subNum++;

  if (subNum >= 4) subNum = 4;

  subSlideBox.style.transition = 'margin-left .5s'
  subSlideBox.style.marginLeft = `${-subSlideWidth * subNum}px`;

  for (let i = 0; i < bullets.length; i++) {
    bullets[i].classList.remove('on')
    // console.log(bullets[i])
  }

  bullets[subNum].classList.add('on')
})

//prev버튼 활성화
document.querySelector('#subslidetap-left').addEventListener('click', () => {
  subNum--;

  if (subNum <= 0) subNum = 0;

  subSlideBox.style.transition = 'margin-left .5s'
  subSlideBox.style.marginLeft = `${-subSlideWidth * subNum}px`;

  for (let i = 0; i < bullets.length; i++) {
    bullets[i].classList.remove('on')
  }
  bullets[subNum].classList.add('on')
})

let bannerSlideImg = document.querySelectorAll('.banner-slide li')
let bannerBullet = document.querySelectorAll('.page-nav li')

for(let i = 0; i < bannerBullet.length; i++){
  bannerBullet[i].addEventListener('click', ()=>{
    bannerBullet.forEach(bullet => bullet.classList.remove('on'));
    bannerBullet[i].classList.add('on')
    bannerSlideImg.forEach(slide => slide.classList.remove('on'))
   bannerSlideImg[i].classList.add('on')
  })
} console.log(bannerBullet)