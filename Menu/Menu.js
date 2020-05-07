/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

let loadMenu = menuArr => {

  let menu = document.createElement("div");
  menu.classList.add("menu");

  let ulist = document.createElement("ul");
  menu.appendChild(ulist);

  menuArr.forEach(element => {
    
    let menuOption = document.createElement("li");
    menuOption.textContent = element;
    menu.appendChild(menuOption);

  });

  return menu;
}

document.querySelector(".header").appendChild(loadMenu(menuItems));

gsap.to(".menu", {duration: 0, x: -500}); //Sets position to -500 on x axis at start so the opening animation starts from there

document.querySelector(".menu-button").addEventListener("click", event => {

  if (document.querySelector(".menu").classList.contains("menu--open") == false) {

    document.querySelector(".menu").classList.add("menu--open");
    gsap.to(".menu", {duration: 2, x: 0});

  }else {

    gsap.to(".menu", {duration: 2, x: -500, onComplete: () => {

      document.querySelector(".menu").classList.remove("menu--open")

    }});
  }
  

});

