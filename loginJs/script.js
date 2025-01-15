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