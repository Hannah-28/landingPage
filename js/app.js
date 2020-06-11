/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
// gets all the elements with the <section> tag.
const sectionName = document.getElementsByTagName('section');
// get sthe elemnt with the section1 id.
const sectionOne = document.querySelector('#section1');
// gets the elemnt with the section2 id.
const sectionTwo = document.querySelector('#section2');
// gets the elemnt with the section3 id.
const sectionThree = document.querySelector('#section3');
// gets the elemnt with the section4 id.
const sectionFour = document.querySelector('#section4');
// gets all the elements with the menu__link class.
const menuLink = document.getElementsByClassName('menu__link');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav.
function navBuilder() {
    //a loop that stops only if it has gone through the loop the number of times there is a <section> tag
    for (let i = 1; i <= sectionName.length; i++) {
        //create a <li> tag
        let navMenu = document.createElement('li');
        // add some texts to the tag
        navMenu.innerHTML = `<a class="menu__link" href="#section${i}">Section ${i}</a>`;
        //add the <li> tag to the child of navbar__list id
        document.querySelector('#navbar__list').appendChild(navMenu);
    }
}

// Scroll to anchor ID using scrollTO event
// a function that scrolls to a particular section when clicked on.
function scrollToId() {
    // loop through each of the <anchor> tag in navbar__menu class.
    document.querySelectorAll('.navbar__menu a').forEach(anchor => {
        anchor.addEventListener('click', function (event) {
            // this prevents the default auto scroll.
            event.preventDefault();
            // gets the href of each <a> tag the scrolls smoothly there.
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// function that makes the go to top button scroll to the top
function topFunc() {
    // makes the anchor id scoll when clicked on.
    document.querySelector('#anchor').addEventListener('click', function (event) {
        // this prevents the default auto scroll.
        event.preventDefault();
        // gets the href of anchor id and scrolls smoothly there.
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
}

// Add class 'active' to section when near top of viewport. // Set sections as active
// a function to determine if the section is near the top of the viewport.
function makeActive() {
    //loops through all the <section> tag.
    for (const section of sectionName) {
        // calculates the size of each <section> tag and its position relative to the viewport.
      const box = section.getBoundingClientRect();
      // if the <section> tag is near top of viewport.
      if (box.top <= 150 && box.bottom >= 150) {
          // changes the background color of the <section> tag.
        section.style.backgroundColor = 'orange';
        // changes the transition
        section.style.transition = 'ease 1.5s all';
        // adds the active class to it.
        section.classList.add('active');
        // if the <section> tag isn't near top of viewport.
      } else {
        // no background color is given to it.
        section.style.backgroundColor = 'transparent';
        // remove the active class from it.
        section.classList.remove('active');
      }
    }
}

// a function that changes the backgroundcolor of each menu when its section is near the top of the viewport.
function menuChange() {
    function menuOne() {
        const target = sectionOne.getBoundingClientRect();
        // changes the background color of the first anchor tag when the first <section> tag is near the top of the viewport.
        if (target.top <= 150 && target.bottom >= 150) {
            menuLink[0].style.backgroundColor = '#5a71c4';
            // changes the transition
            menuLink[0].style.transition = 'ease 1.5s all';
        // removes the bacground color of the first anchor tag when the first <section> tag isn't near the top of the viewport.
        } else {
            menuLink[0].style.backgroundColor = 'transparent';
        }
    }
    function menuTwo() {
        const target = sectionTwo.getBoundingClientRect();
        // changes the background color of the second anchor tag when the second <section> tag is near the top of the viewport.
        if (target.top <= 150 && target.bottom >= 150) {
            menuLink[1].style.backgroundColor = '#5a71c4';
            // changes the transition
            menuLink[1].style.transition = 'ease 1.5s all';
        // removes the bacground color of the second anchor tag when the second <section> tag isn't near the top of the viewport.
        } else {
            menuLink[1].style.backgroundColor = 'transparent';
        }
    }
    function menuThree() {
        const target = sectionThree.getBoundingClientRect();
        // changes the background color of the third anchor tag when the third <section> tag is near the top of the viewport.
        if (target.top <= 150 && target.bottom >= 150) {
            menuLink[2].style.backgroundColor = '#5a71c4';
            // changes the transition
            menuLink[2].style.transition = 'ease 1.5s all';
            // removes the bacground color of the third anchor tag when the third <section> tag isn't near the top of the viewport.
        } else {
            menuLink[2].style.backgroundColor = 'transparent';
        }
    }
    function menuFour() {
        const target = sectionFour.getBoundingClientRect();
        // changes the background color of the fourth anchor tag when the fourth <section> tag is near the top of the viewport.
        if (target.top <= 150 && target.bottom >= 150) {
            menuLink[3].style.backgroundColor = '#5a71c4';
            // changes the transition
            menuLink[3].style.transition = 'ease 1.5s all';
            // removes the bacground color of the fourth anchor tag when the fourth <section> tag isn't near the top of the viewport.
        } else {
            menuLink[3].style.backgroundColor = 'transparent';
        }
    }
    menuOne();
    menuTwo();
    menuThree();
    menuFour();
}

// the functions should run while scolling.
document.addEventListener("scroll", function() {
    makeActive();
    menuChange();
});

// a function that determines when the go to top button shows while scrolling.
function topVisisbleOnScroll() {
    window.addEventListener('scroll', function () {
        // the go to top button shows when the page folds. 
        if (window.scrollY >= 80) {
            document.querySelector("#anchor").style.visibility = "visible";
        } else {
            document.querySelector("#anchor").style.visibility = "hidden";
        }
    })
}

// a function that hides the go to top button when the page is loaded.
function topNotVisisbleOnLoad() {
    window.addEventListener('load', function () {
            document.querySelector("#anchor").style.visibility = "hidden";
    })
}


/**
 * End Main Functions
*/

// function invoking.
navBuilder();
scrollToId();
topFunc();
topVisisbleOnScroll();
topNotVisisbleOnLoad();

