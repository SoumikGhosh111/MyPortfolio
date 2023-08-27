let container = document.querySelector(".main-frame");
let aboutMeAddedSpace = container.querySelector(".about-me"); 
let aboutSection = container.querySelector(".about-me");  
let aboutMe = container.querySelector("#about-me");
let details = container.querySelector(".details") ; 
let aboutMeHobbiesImage = container.querySelector(".about-me-hobbies-image");
let educationAddedSpace = container.querySelector(".education");  
let educationCard = container.querySelector("#education-section"); 
let education = container.querySelector(".education-row"); 
let text = document.querySelector(".outer-span"); 
let h1 = container.querySelector(".education-h1-tag");
let h11 = container.querySelector(".skills-h1-tag");
let h12 = container.querySelector(".projects-h1-tag");  
let skillAddedSpace = container.querySelector(".experience"); 
let skillCard = container.querySelector("#experience-section"); 
let skillsShow = container.querySelector("#experience-cards-row-1"); 
let skillsShow2 = container.querySelector("#experience-cards-row-2");
let projectCard = container.querySelector("#project-section"); 
let projectAddedSpace = container.querySelector(".projects"); 
let pojectShow1 = container.querySelector("#projects-card-1"); 
let pojectShow2 = container.querySelector("#projects-card-2"); 
let pojectShow3 = container.querySelector("#projects-card-3"); 
let pojectShow4 = container.querySelector("#projects-card-4"); 
let pojectShow5 = container.querySelector("#projects-card-5"); 
let pojectShow6 = container.querySelector("#projects-card-6"); 
let form = container.querySelector(".contact-me-section"); 
// let skillsShowImags = container.querySelector(".experience-cards-courses"); 

const textLoader = () =>{ 
    setTimeout(()=>{
        text.textContent = "App Developement"
    }, 100)
    setTimeout(()=>{
        text.textContent = "Frontend Developement"
    }, 4050)
    setTimeout(()=>{
        text.textContent = "Backend Developement"
    }, 8005)
}

textLoader(); 
setInterval(textLoader, 12000); 
let MoreOnClick = document.querySelector("#More"); 
let cards = document.querySelector(".cards"); 
MoreOnClick.addEventListener("click", ()=>{
    cards.style.display = "block"; 
})

aboutMe.addEventListener("click", ()=>{ 
    details.classList.add("details-show"); 
    aboutMeHobbiesImage.classList.add("about-me-hobbies-image-show"); 
    aboutMeAddedSpace.classList.add("about-me-padding");
    form.classList.remove("display")
}); 
educationCard.addEventListener("click", ()=>{
    education.classList.add("education-show"); 
    h1.classList.add("education-h1-tag-show");
    educationAddedSpace.classList.add("education-margin-padding"); 
})

skillCard.addEventListener("click", ()=>{ 
    skillsShow.classList.add("experience-cards-row-show"); 
    skillsShow2.classList.add("experience-cards-row-show"); 
    h11.classList.add("skills-h1-tag-show");
    skillAddedSpace.classList.add("experience-padding")
})


projectCard.addEventListener("click", ()=>{ 
    projectAddedSpace.classList.add("project-margin"); 
    h12.classList.add("projects-h1-tag-show"); 
    pojectShow1.classList.add("projects-cards-row-show"); 
    pojectShow2.classList.add("projects-cards-row-show");
    pojectShow3.classList.add("projects-cards-row-show");
    pojectShow4.classList.add("projects-cards-row-show");
    pojectShow5.classList.add("projects-cards-row-show");
    pojectShow6.classList.add("projects-cards-row-show");
})



