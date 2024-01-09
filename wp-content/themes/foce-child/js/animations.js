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
