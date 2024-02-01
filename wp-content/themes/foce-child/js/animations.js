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

// window & elements informations
let clouds = document.getElementById("cloud_animation");
let placeContainer = document.getElementById("place");
let placeContainerTop = placeContainer.getBoundingClientRect().top;
let placeContainerBottom = placeContainer.getBoundingClientRect().bottom;
let windowHeight = window.innerHeight;
let videoTitle = document.querySelector(".banner");
console.log(videoTitle.getBoundingClientRect().top + window.scrollY);
console.log(videoTitle.getBoundingClientRect().bottom + window.scrollY);

let positionCloudsContainer = placeContainerTop + window.scrollY;
/*
window.addEventListener("scroll", () => {
  let { scrollY } = window;
  let cloudsPosition = Math.min(0.1 * scrollY, 300);
  clouds.style.transform = "translateX(" + cloudsPosition + "px)";
  // clouds.style.transform = "translateX(" + 0.1 * scrollY + "px)";
});
*/

// init skrollr, remove when mobile version
jQuery(function () {
  if (jQuery(window).width() > 700) {
    skrollr.init();
  }

  jQuery(window).on("resize", function () {
    if (jQuery(window).width() <= 700) {
      skrollr.init().destroy();
    }
  });
});

// parallax effect title video

let titleVideo = document.querySelector("#title_video");
let videoContainer = document.querySelector(".banner");

window.addEventListener("scroll", () => {
  let { scrollY } = window;
  let titlePosition = Math.min(0.1 * scrollY, 300);
  titleVideo.style.transform = "translateY(" + titlePosition + "px)";
  // clouds.style.transform = "translateX(" + 0.1 * scrollY + "px)";
});

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

// flowers
