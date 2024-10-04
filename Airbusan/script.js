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
    subBg.style.height = "200px";
  }
});