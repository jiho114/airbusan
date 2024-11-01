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

let individual = document.querySelector('.individual-a');
let individualHiddenBox = document.querySelector('.individual-hidden-box');
let Ht = document.querySelector('.posiht');

let business = document.querySelector('.business');
let businessHiddenBox = document.querySelector('.business-hidden-box');

let travel = document.querySelector('.travel');
let travelHiddenBox = document.querySelector('.travel-hidden-box');

let currentVisibleBox = null; // 현재 보이는 박스를 저장할 변수

individual.addEventListener('click', (e) => {
  e.preventDefault();

  const currentDisplay = window.getComputedStyle(individualHiddenBox).display;

  // 이미 다른 박스가 보이고 있을 때
  if (currentVisibleBox && currentVisibleBox !== 'individual') {
    // 선택된 박스 숨기기
    if (currentVisibleBox === 'business') {
      businessHiddenBox.style.display = 'none';
    } else if (currentVisibleBox === 'travel') {
      travelHiddenBox.style.display = 'none';
    }
    Ht.classList.remove('active');
  }

  // 선택한 박스의 display 토글
  if (currentDisplay === 'none') {
    individualHiddenBox.style.display = 'block';
    currentVisibleBox = 'individual'; // 현재 보이는 박스를 업데이트
    Ht.classList.add('active');
  } else {
    individualHiddenBox.style.display = 'none';
    currentVisibleBox = null; // 아무것도 보이지 않을 경우 업데이트
    Ht.classList.remove('active');
  }
});

business.addEventListener('click', (e) => {
  e.preventDefault();

  const currentDisplayBs = window.getComputedStyle(businessHiddenBox).display;

  // 이미 다른 박스가 보이고 있을 때
  if (currentVisibleBox && currentVisibleBox !== 'business') {
    // 선택된 박스 숨기기
    if (currentVisibleBox === 'individual') {
      individualHiddenBox.style.display = 'none';
    } else if (currentVisibleBox === 'travel') {
      travelHiddenBox.style.display = 'none';
    }
    Ht.classList.remove('active');
  }

  // 선택한 박스의 display 토글
  if (currentDisplayBs === 'none') {
    businessHiddenBox.style.display = 'block';
    currentVisibleBox = 'business'; // 현재 보이는 박스를 업데이트
    Ht.classList.add('active');
  } else {
    businessHiddenBox.style.display = 'none';
    currentVisibleBox = null; // 아무것도 보이지 않을 경우 업데이트
    Ht.classList.remove('active');
  }
});

travel.addEventListener('click', (e) => {
  e.preventDefault();

  const currentDisplayTv = window.getComputedStyle(travelHiddenBox).display;

  // 이미 다른 박스가 보이고 있을 때
  if (currentVisibleBox && currentVisibleBox !== 'travel') {
    // 선택된 박스 숨기기
    if (currentVisibleBox === 'business') {
      businessHiddenBox.style.display = 'none';
    } else if (currentVisibleBox === 'individual') {
      individualHiddenBox.style.display = 'none';
    }
    Ht.classList.remove('active');
  }

  // 선택한 박스의 display 토글
  if (currentDisplayTv === 'none') {
    travelHiddenBox.style.display = 'block';
    currentVisibleBox = 'travel'; // 현재 보이는 박스를 업데이트
    Ht.classList.add('active');
  } else {
    travelHiddenBox.style.display = 'none';
    currentVisibleBox = null; // 아무것도 보이지 않을 경우 업데이트
    Ht.classList.remove('active');
  }
});
