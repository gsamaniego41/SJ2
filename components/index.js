let tl = new TimelineMax();

let logo = {
  position: "absolute",
  top: "40vh",
  left: "40vh"
};

window.addEventListener("load", () => {
  tl.from(".welcome", 2.5, {opacity: 0}, 0.5)
    .from(".home-img-container", 2.5, {opacity: 0}, 0.5)
    .from("h1", 1.5, {left: "-50px", opacity: 0}, 1.5)
    .from(".social-icons", 1.5, {top: "80vh", opacity: 0}, 2)
    .from(".featured-container", 1.5, {top: "45vh", opacity: 0}, 2);
});

class FeaturedNav {
  constructor(navItem) {
    this.navItem = navItem;
    console.log("navItem", navItem);
    console.log("this.navItem", this.navItem);
  }
}

class Page {
  constructor(page) {
    this.page = page;
  }
}

let featuredNav = document
  .querySelectorAll(".featured")
  .forEach(nav => new FeaturedNav(nav));

// console.log("featuredNav:\n", featuredNav);
// const onFeaturedNavClick =
/* 
featuredNav.forEach(f => {
  f.addEventListener("click", () => {
    console.log("worked");

    f.classList.toggle("featured-active");
  });
}); 
*/