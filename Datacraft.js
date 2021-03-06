const services = document.querySelector('.services')
const list = document.querySelector('.down')
services.addEventListener('click', function(){
  list.classList.toggle('showing')
});

const links = document.querySelectorAll('.links')
links.forEach((item) => {
  item.addEventListener('click', function(){
    const i = document.getElementById(item.getAttribute("data-link"));
    i.scrollIntoView({behavior:"smooth", block:"center"})
  })
});

const menu = document.querySelector(".dropdown")
const show = document.querySelector(".nas")
menu.addEventListener('click', function(){
  if(show.classList.toggle('show')){
    menu.src = "./menu.svg"
  }else{
    menu.src = "./cross.svg"
  }
  

});
const txts = document.querySelector(".animate-text").children
txtsLen=txts.length;
let index=0;

function animateText() {
  for(let i=0; i<txtsLen; i++){
    txts[i].classList.remove("text-in","text-out");  
    }
    txts[index].classList.add("text-in");

  setTimeout(function(){
    txts[index].classList.add("text-out");              
    },2800)

  setTimeout(function(){
    if(index == txtsLen-1){
      index=0;
    }else{
      index++;
   }
  animateText();
  },3000); 
}


addEventListener('scroll', function(){
  const nav = document.querySelector('nav');
  nav.classList.toggle('hov', window.scrollY > 0)
})

addEventListener("load", animateText)









