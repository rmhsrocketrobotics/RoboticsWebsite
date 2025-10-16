// ------custom star divider thingy (basically a fancy <hr>)
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

// ------desktop nav bar
class NavBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<ul>
    <li><a id="mlogo" class="minilogo" href="index.html">ROCKET ROBOTICS</a></li>
    <li><a class="nav-bar-item" id="outreach" href="outreach.html">outreach</a></li>
    <li><a class="nav-bar-item" id="sponsors" href="sponsors.html">sponsors</a></li>
    <li><a class="nav-bar-item" id="contact" href="contact.html">contact</a></li>
    <div id="hamburger" class="hamburger" style="display: none;padding: 1.8vw 5vw;" onclick="toggleMenu()">
    <div id="b1" class="bar"></div>
    <div id="b2" class="bar"></div>
    <div id="b3" class="bar"></div>
    </div>
</ul>
        `;
    }
}
customElements.define('nav-bar', NavBar);

// ------mobile hamburger menu
class HambugerMenu extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<div class="menu-container" id="menu">
<div id="inhamburger" class="hamburger" onclick="toggleMenu()">
    <div id="b1" class="bar" style="background-color: #000000;"></div>
    <div id="b2" class="bar" style="background-color: #000000;"></div>
    <div id="b3" class="bar" style="background-color: #000000;"></div>
</div>
<div class="menu-item"><a id="mlogo"
    style="font-size: 9vw; font-family: 'Epilogue', sans-serif; text-decoration: none; color:black;"
    href="index.html">ROCKET ROBOTICS</a></div>

<div class="menu-item"><a id="sponsors" href="sponsors.html"
    style="font-family: 'DM Sans', sans-serif; font-size: 8vw; text-decoration: none; color:black;">sponsors</a>
</div>
<div class="menu-item"><a id="contact" href="contact.html"
    style="font-family: 'DM Sans', sans-serif; font-size: 8vw; text-decoration: none; color:black;">contact</a>
</div>
        `;
    }
}
customElements.define('hamburger-menu', HambugerMenu);

// ------ desktop footer
class DesktopFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<footer style="margin-top: 6vw; background-color: black;">
<p id="bottom-emoji">
    ☮️❤️🤖<br>
    <a id="bottomEmail" style="text-align: left; padding: 2%;"
    href="mailto:contact@rmhsroboticsteam.com">contact@rmhsroboticsteam.com</a>
</p>
</footer>
        `;
    }
}
// ------ mobile footer
class MobileFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<footer style="margin-top: 6vw; background-color: black;">
<p id="bottom-emoji" style="justify-content: center;">☮️❤️🤖</p>
    <p id="bottom-emoji" style="justify-content: center;">
    <a id="bottomEmail" style="text-align: ceneter; padding: 2%;"
    href="mailto:contact@rmhsroboticsteam.com">contact@rmhsroboticsteam.com</a>
    </p>

</footer>
        `;
    }
}



// ------changes to mobile mode based on the screen width
function updateViewingMode() {
    if (window.innerWidth > 700) { //orgininally used screen.width
        customElements.define('custom-footer', DesktopFooter);
        return;
    }
    customElements.define('custom-footer', MobileFooter);

    let pElements = document.getElementsByTagName("p");
    let h2Elements = document.getElementsByTagName("h2");

    //hide desktop nav bar
    let navBarItems = document.getElementsByClassName("nav-bar-item");
    for (let i = 0; i < navBarItems.length; i++) {
        navBarItems[i].style.display = "none";
    }

    //show mobile hamburger menu
    document.getElementById("hamburger").style.display = 'block';
    document.getElementById("mlogo").style.fontSize = "6vw";
    document.getElementById("mlogo").style.height = "5vw";

    //change text size/fomatting
    for (let i = 0; i < pElements.length; i++) {
        pElements[i].style.fontSize = "5vw";
        pElements[i].style.marginLeft = "5%";
        pElements[i].style.marginRight = "5%";
    }
    for (let i = 0; i < h2Elements.length; i++) {
        h2Elements[i].style.fontSize = "9vw";
        h2Elements[i].style.marginLeft = "5%";
        h2Elements[i].style.marginRight = "5%";
        h2Elements[i].style.width = "90%";
    }

    //change go to top button size
    document.getElementById('scrollBtn').style.width = "8vh";
    document.getElementById('scrollBtn').style.height = "8vh";

    document.body.appendChild(document.createElement("star-divider"));
}
updateViewingMode()
//window.onresize = function () {updateViewingMode()}


// ------code for that button that scrolls to top of the page
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

// ------mobile hamburger menu code
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
