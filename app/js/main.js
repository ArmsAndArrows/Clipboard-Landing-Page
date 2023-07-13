function createObserver(selector, options, callback) {
  const elements = document.querySelectorAll(selector);

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }
      callback(entry);
      observer.unobserve(entry.target);
    });
  }, options);

  elements.forEach(element => observer.observe(element));
}

// Image observer
const imageOptions = {
  threshold: 0.25,
  margin: "0px 0px 100px 0px"
};

createObserver(".image", imageOptions, entry => {
  entry.target.classList.add("slide-from-left");
});

// Title observer
const titleOptions = {
  threshold: 0.15,
  margin: "0px 0px 100px 0px"
};

createObserver(".title", titleOptions, entry => {
  entry.target.classList.add("opacity-title");
});

// List observer
const listOptions = {
  threshold: 0.15,
  margin: "0px 0px 100px 0px"
};

createObserver(".article__item", listOptions, entry => {
  entry.target.classList.add("slide-from-right");
});