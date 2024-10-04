
window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
    // console.log(header.classList);
});

    window.addEventListener("scroll",()=>
        {
            const sections = document.querySelectorAll("section");
            const scrollY=window.pageYOffset;
        
            sections.forEach(current =>{
                let sectionHeight=current.offsetHeight;
                let sectionTop=current.offsetTop-50;
                let id=current.getAttribute("id");
        
                if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
                {
                        document.querySelector(".nav-items a[href*="+id +"]").classList.add("active");
                }
                else{
                    document.querySelector(".nav-items a[href*="+id +"]").classList.remove("active");
        
                }
                
            });
        });

const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");
 
//   js code to toggle sidebar
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});
body.addEventListener("click" , e =>{
    let clickedElm = e.target;
    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});









// service
const serviceModals=document.querySelectorAll(".service-modal");
const learnmoreBtns=document.querySelectorAll(".learn-more-btn");
const modalCloseBtns=document.querySelectorAll(".modal-close-btn");

var modal=function(modalClick)
{
    serviceModals[modalClick].classList.add("active");
}
learnmoreBtns.forEach((learnmoreBtns,i) => {
    learnmoreBtns.addEventListener("click",()=>{
        modal(i);
    });
});
modalCloseBtns.forEach((modalCloseBtns) => {
    modalCloseBtns.addEventListener("click",()=>{
    serviceModals.forEach((modalview)=>{
        modalview.classList.remove("active");
    })
    });
});
// service

// project
const portfolioModals=document.querySelectorAll(".portfolio-model");
const imgCards=document.querySelectorAll(".img-card");
const portfolioCloseBtns=document.querySelectorAll(".portfolio-close-btn");

var portfolioModal=function(modalClick)
{
    portfolioModals[modalClick].classList.add("active");
}
imgCards.forEach((imgCard,i) => {
    imgCard.addEventListener("click",()=>{
        portfolioModal(i);
    });
});
portfolioCloseBtns.forEach((portfolioCloseBtn) => {
    portfolioCloseBtn.addEventListener("click",()=>{
        portfolioModals.forEach((portfolioModalview)=>{
            portfolioModalview.classList.remove("active");
    })
    });
});
// project






// contact clear

    function clearFieldsAfterDelay(event) {
        setTimeout(() => {
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('subject').value = '';
            document.getElementById('message').value = '';
        }, 2000);
    }
// contact clear













