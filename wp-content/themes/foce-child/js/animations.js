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
console.log(clouds);

window.addEventListener("scroll", () => {
  let { scrollY } = window;
  let cloudsPosition = Math.min(0.1 * scrollY, 300);
  clouds.style.transform = "translateX(" + cloudsPosition + "px)";
  // clouds.style.transform = "translateX(" + 0.1 * scrollY + "px)";
});
