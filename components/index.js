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
  constructor(navLink) {
    this.navLink = navLink;
    // console.log("navLink", navLink);
    // console.log("this.navLink", this.navLink);

    this.data = this.navLink.dataset.tab;
    // console.log("this.data", this.data);

    this.item = document.querySelector(`.featured[data-tab="${this.data}"]`);
    // console.log("this.item:", this.item);

    this.page = new Page(this.item);
    // console.log("this.page", this.page);

    this.navLink.addEventListener("click", () => this.select());
  }

  select() {
    const links = document.querySelectorAll(".featured");

    links.forEach(link => link.classList.remove("featured-active"));

    this.page.select();
  }
}

class Page {
  constructor(page) {
    this.page = page;
  }

  select() {
    const page = document.querySelector(
      `${
        this.page.dataset.tab == 1
          ? "#home"
          : this.page.dataset.tab == 2
          ? "#projects"
          : this.page.dataset.tab == 3
          ? "#about"
          : this.page.dataset.tab == 4
          ? "#contact"
          : null
      }`
    );
    console.log("selected:", page);
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
