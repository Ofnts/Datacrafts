const txts=document.querySelector(".animate-text").children,
a =txts.length;
let index=0;
const textInTimer=3000,
textOutTimer=2800;

function animateText() {
    for(let i=0; i<a; i++){
        txts[i].classList.remove("text-in","text-out");  
          }
          txts[index].classList.add("text-in");

          setTimeout(function(){
              txts[index].classList.add("text-out");              
          },textOutTimer)

          setTimeout(function(){

            if(index == a-1){
                index=0;
              }
              else{
                  index++;
                }
              animateText();
          },textInTimer); 
        }
         
        window.onload=animateText;


const services = document.querySelector('.services')
const list = document.querySelector('.down')

services.addEventListener('click', function(){
  list.classList.toggle('showing')
});

const links = document.querySelectorAll('.links')
links.forEach((item) => {
  item.addEventListener('click', ()=>{
    const i = document.getElementById(item.getAttribute("data-link"));
    i.scrollIntoView({behavior:"smooth", block:"center"})
  })
})
window.addEventListener('scroll', function(){
  const nav = document.querySelector('nav');
  nav.classList.toggle('hov', window.scrollY > 0)
})




