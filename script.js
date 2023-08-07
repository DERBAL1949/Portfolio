
const big = document.querySelector('.first-text');

const container = document.querySelector('.container');
const newPage = document.querySelector('.newPage');

const textLoad = () => {
  big.textContent = "Mohammed";
 
  setTimeout(() => {
  
    big.textContent = "Derbal";

   
    setTimeout(() => {
      container.style.display = 'none';
      newPage.style.display = 'block';
      document.querySelector('.intro-text').classList.add('animate-fadeInLeft');
      document.querySelector('.laptop').classList.add('animate-fadeInRight');
    }, 4000)
    
  }, 4000);
};

textLoad();



const sideBar=document.querySelector('.sideBar')

function openFunction(){
  
  sideBar.style.width="600px";
}

function closeFunction(){
  
  sideBar.style.width="0px";
}
window.addEventListener('mouseup' ,function(event){
if(event.target!=sideBar){
  sideBar.style.width="0px";
}
})

// Get the tooling element within secTwo
const tooling = document.querySelector('.secTwo .tooling');

// Function to add animation class when user scrolls to a certain point
function animateToolingOnScroll() {
  const scrollPosition = window.scrollY;
  const triggerPosition = tooling.offsetTop - window.innerHeight;
 console.log( window.innerHeight)
  console.log(triggerPosition)
  console.log(scrollPosition)

  if (scrollPosition >= triggerPosition) {
    tooling.classList.add('animate-grow');
  } else {
    tooling.classList.remove('animate-grow');
  }
}

// Listen for scroll events and trigger the animation function
window.addEventListener('scroll', animateToolingOnScroll);

// Trigger the animation function on page load as well
animateToolingOnScroll();


 









































