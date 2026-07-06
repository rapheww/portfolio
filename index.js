const header = document.head;
let link = header.querySelector('link[rel="stylesheet"]');
let button = document.getElementById("colorbtn");
let color = true;
let buttonText = document.body.querySelector('span[id="colorText"]');
const elementsToAnimate = document.querySelectorAll('.aboutme, .project, .current, .learn, .card');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.1
});

elementsToAnimate.forEach(el => observer.observe(el));

button.addEventListener('click', () => {
    if (color){
        document.body.setAttribute("data-theme", "purple");
        buttonText.textContent = "blue";
        color = false;
    }
    else{
        document.body.removeAttribute("data-theme");
        buttonText.textContent = "purple";
        color = true;
    }
    
    elementsToAnimate.forEach(el => {
        el.classList.remove('show');
        observer.unobserve(el);
    });

    setTimeout(() => {
        elementsToAnimate.forEach(el => observer.observe(el));
    }, 700);
});