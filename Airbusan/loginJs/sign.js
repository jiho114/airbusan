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

const boxes = {
  indiv: {
    button: document.querySelector('.individual-a'),
    box: document.querySelector('.individual-hidden-box')
  },

  busi: {
    button: document.querySelector('.business'),
    box: document.querySelector('.business-hidden-box')
  },

  trav: {
    button: document.querySelector('.travel'),
    box: document.querySelector('.travel-hidden-box')
  }
}

let currentVisibleBox = null;
let Ht = document.querySelector('.posiht')

function handleBoxClick(boxKey) {
  const { button, box } = boxes[boxKey];
  button.addEventListener('click', (e) => {
    e.preventDefault();

    if (currentVisibleBox && currentVisibleBox !== boxKey) {
      boxes[currentVisibleBox].box.style.display = 'none';
    }

    const isCurrentlyVisible = box.style.display === 'block';
    box.style.display = isCurrentlyVisible ? 'none' : 'block';

    currentVisibleBox = isCurrentlyVisible ? null : boxKey;

    if (currentVisibleBox) {
      Ht.classList.add('active');
    } else {
      Ht.classList.remove('active');
    }

    if (box.style.display === 'block') {
      box.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

Object.keys(boxes).forEach(handleBoxClick);