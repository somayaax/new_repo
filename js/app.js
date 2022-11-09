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

const mySections = document.querySelectorAll('section');
const myUl = document.getElementById("navbar__list");

/**
 * End Global Variables
 */


// build the nav and scroll to section on link click

mySections.forEach((oneSec) => {
    const newList = document.createElement('li');
    const newLink = document.createElement('a');

    newLink.setAttribute("href", `#${oneSec.id}`);  //link each anchor to the section it refers to using the section's id      
    newLink.classList.add("menu__link");    //add class menu__link to the element 'a'
    newLink.textContent = oneSec.getAttribute("data-nav");  //set the text content of the link as the value of the attribute data-nav in each section

    newList.appendChild(newLink);   //newLink is added as the last child to newList li>a
    myUl.appendChild(newList);  //newList is added as the last child to myUl ul>li
    //navbar is created 
});


// Add class 'active' to section when near top of viewport and add active class to the link that refrences this section
const getActive = () => {
    mySections.forEach((section) => {

        const viewPort = section.getBoundingClientRect();

        const link = document.querySelector(`a[href="#${section.id}"]`); //select the <a> element that links to the section that is active(has the same href as the section's id)

        if (viewPort.top > -100 && viewPort.top <= 400) { // if the section is between -100 & 350 from the top of the viewport

            section.classList.add("active");
            // add active class to the section that is appearing in the viewport(between -100 & 350 from the top)

            link.classList.add("active__link")
            //add active__link class to the link

        } else if (section.classList.contains("active")) {

            section.classList.remove("active");
            // remove active class when the section is not in the viewport

            if (link.classList.contains("active__link")) {
                link.classList.remove("active__link");
                //remove active__link class when the link doesn't refer to the section in the viewport and the link has an active__link class
            }
        };
    });

}

window.addEventListener("scroll", getActive)      // listen to the event scroll to make sections and links active (call getActive function) 
