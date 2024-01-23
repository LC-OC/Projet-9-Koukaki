// titles animation

const firstPartTitleAnimation = document.querySelectorAll(
  ".first_part_title_animation"
);
const secondPartTitleAnimation = document.querySelectorAll(
  ".second_part_title_animation"
);

function animationTitleOne() {
  const observerFirstPart = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("title_animation_scroll_one");
        return;
      }

      entry.target.classList.remove("title_animation_scroll_one");
    });
  });
  firstPartTitleAnimation.forEach((element) =>
    observerFirstPart.observe(element)
  );
}
function animationTitleTwo() {
  const observerSecondPart = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("title_animation_scroll_two");
        return;
      }

      entry.target.classList.remove("title_animation_scroll_two");
    });
  });
  secondPartTitleAnimation.forEach((element) =>
    observerSecondPart.observe(element)
  );
}

animationTitleOne();
animationTitleTwo();

// cloud animation
let clouds = document.getElementById("cloud_animation");
let placeContainer = document.getElementById("place").getBoundingClientRect();
console.log(placeContainer);
/*
window.addEventListener("scroll", () => {
  let { scrollY } = window;
  console.log(scrollY);
  let cloudsPosition = Math.min(0.1 * scrollY, 300);
  clouds.style.transform = "translateX(" + cloudsPosition + "px)";
  // clouds.style.transform = "translateX(" + 0.1 * scrollY + "px)";
});
*/

/*
const observerTest = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      window.addEventListener("scroll", () => {
        let { scrollY } = window;
        let cloudsPosition = Math.min(0.1 * scrollY, 300);
        clouds.style.transform = "translateX(" + cloudsPosition + "px)";
        console.log(cloudsPosition);
        // clouds.style.transform = "translateX(" + 0.1 * scrollY + "px)";
      });
      return; // if we added the class, exit the function
    }
  });
});

observerTest.observe(document.querySelector("#place"));
*/
// menu

let menuIconBurger = document.getElementById("icon-menu-burger");
let menuIconClose = document.getElementById("icon-menu-close");
let menuContent = document.getElementById("menu-content");
let menuLinks = document.querySelectorAll(".link-menu");

function hideMenu() {
  menuIconClose.style.display = "none";
  menuIconBurger.style.display = "block";
  menuContent.classList.remove("overlay");
}

menuIconBurger.addEventListener("click", function displayMenu() {
  menuIconBurger.style.display = "none";
  menuIconClose.style.display = "block";
  menuContent.classList.toggle("overlay");
});
menuIconClose.addEventListener("click", hideMenu);

menuLinks.forEach(function (menuLink) {
  menuLink.addEventListener("click", hideMenu);
});
