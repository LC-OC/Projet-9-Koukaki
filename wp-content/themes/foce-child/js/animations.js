const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const titleTest = entry.target.querySelector(".title_animation");

    if (entry.isIntersecting) {
      titleTest.classList.add("title_animation_scroll");
      console.log(titleTest);
      return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    titleTest.classList.remove("title_animation_scroll");
  });
});

observer.observe(document.querySelector("#festival"));
