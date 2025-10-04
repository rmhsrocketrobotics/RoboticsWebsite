let slides = Array.from(document.querySelectorAll('.slide'));

function nextSlide() {
    if (screen.width > 700) {
        for (let i = 0; i < slides.length; i++) {
            let imagePosition = parseInt(slides[i].style.left, 10);

            //slide the images towards the left
            slides[i].style.left = (imagePosition - 100) + '%';

            let newImagePosition = imagePosition - 100;

            //if the image is off the screen, put it back on the right
            if (newImagePosition == -200) {
                slides[i].style.left = ((slides.length - 2) * 100) + '%';
            }

            //if the image is offscreen, don't display it
            if (newImagePosition == 0 || imagePosition == 0) {
                slides[i].style.visibility = "visible";
            } else {
                slides[i].style.visibility = "hidden";
            }
        }
    }
}
setInterval(nextSlide, 5000); // change slide every 5 seconds

if (screen.width <= 700) {
    window.location.replace("mobile/index.html");
    document.getElementById("contact").innerHTML = "";
    document.getElementById("donate").innerHTML = "";
    document.getElementById("sponsors").innerHTML = "";

    document.getElementById("hamburger").style.display = 'block';
    document.getElementById("mlogo").style.fontSize = "6vw";
    document.getElementById("mlogo").style.height = "5vw";
    document.getElementById("mslide1").style.display = "block";
    document.getElementById("mslide2").style.display = "block";
    document.getElementById("mslide3").style.display = "block";
    document.getElementById("mslide4").style.display = "block";
    document.getElementById("slide1").style.display = "none";
    document.getElementById("slide2").style.display = "none";
    document.getElementById("slide3").style.display = "none";
    document.getElementById("slide4").style.display = "none";
    document.getElementById("teamTitle").style.fontSize = "11vw";
    document.getElementById("teamText").style.marginLeft = "5%";
    document.getElementById("teamText").style.marginRight = "5%";
    document.getElementById("teamText").style.fontSize = "5vw";
    document.getElementById("meetTitle").style.fontSize = "11vw";
    document.getElementById("compCapt").style.fontSize = "4vw";
    document.getElementById("bottomEmoji").style.fontSize = "4vw";
    document.getElementById("carousel").style.height = "0vw";
    document.getElementById("leadershipPG").style.width = "100%"
    document.getElementById("leadershipPG").style.height = "100%"
    document.getElementById("bigpic").style.marginLeft = "auto"
    document.getElementById("bigpic").style.marginRight = "auto"
    document.getElementById("bigpic").style.display = "block"
    document.getElementById("mslide-container").style.height = "45vw";
    document.getElementById('baller').style.top = "8vw";
    document.getElementById('titleDiv').style.width = "100%";
    document.getElementById('scrollBtn').style.width = "8vh";
    document.getElementById('scrollBtn').style.height = "8vh";
}

function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');

    // Fade in each menu item one at a time
    const menuItems = document.querySelectorAll('.menu-item');
    let delay = 0.1; // Start delay for the first item
    menuItems.forEach(item => {
        item.style.transitionDelay = delay + 's';
        item.style.opacity = menu.classList.contains('active') ? '1' : '0';
        delay += 0.1; // Increment delay for each item
    });
}

class CustomDivider extends HTMLElement {
connectedCallback() {
    this.innerHTML = `
    <div style="left: 45vw;" class="star-container">
        <div class="line-left"></div>
        <div class="line-right"></div>
        <div class="square"></div>
        <div class="circle top-left"></div>
        <div class="circle top-right"></div>
        <div class="circle bottom-left"></div>
        <div class="circle bottom-right"></div>
    </div>
    `;
}
}

customElements.define('custom-divider', CustomDivider);

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
var scrollBtn = document.getElementById("scrollBtn");
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtn.style.display = "block";
} else {
    scrollBtn.style.display = "none";
}
}

document.getElementById('scrollBtn').addEventListener('click', function () {
window.scrollTo({ top: 0, behavior: 'smooth' });
});