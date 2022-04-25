// SHOW AND HIDE MENU
const navClose = document.getElementById("nav-close");
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

navToggle.addEventListener("click", () => {
  showMenu();
});

const showMenu = () => {
  navMenu.classList.toggle("show-menu");
};

navClose.addEventListener("click", () => {
  showMenu();
});

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.querySelectorAll(".skills__content");
const skillsHeader = document.querySelectorAll(".skills__header");
const skillsList = document.querySelectorAll(".skills__list");

function toggleSkills() {
  let itemClass = this.parentNode.className;
  console.log(itemClass);
  for (let i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }

  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }
}

skillsHeader.forEach((event) => {
  event.addEventListener("click", toggleSkills);
});

/*==================== Tabs Qualification ====================*/

const tabs = document.querySelectorAll("[data-target]");
const tabsContent = document.querySelectorAll("[data-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const tabContent = document.querySelector(tab.dataset.target);

    tabs.forEach((tab) => {
      tab.classList.remove("qualification__active");
    });

    tabsContent.forEach((tabContent) => {
      tabContent.classList.remove("qualification__active");
    });

    tab.classList.add("qualification__active");
    tabContent.classList.add("qualification__active");
  });
});

/*==================== SERVICES MODAL ====================*/
const modalView = document.querySelectorAll(".services__modal");
const modalBtnS = document.querySelectorAll(".services__button");
const modalCloseS = document.querySelectorAll(".services__modal-close");

modalBtnS.forEach((modalBtn, index) => {
  modalBtn.addEventListener("click", () => {
    showModal(index);
  });
});

const showModal = (index) => {
  modalView[index].classList.toggle("active-modal");
};

modalCloseS.forEach((modalClose, index) => {
  modalClose.addEventListener("click", () => {
    console.log("marina");
    showModal(index);
  });
});

/*==================== PORTFOLIO SWIPER  ====================*/

// import Swiper from 'swiper/swiper-bundle.esm.js';
// import 'swiper/swiper-bundle.css';
let swiperPortfolio = new Swiper(".portfolio__container", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // mousewheel: true,
  // keyboard: true,
});

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper(".testimonial__container", {
  loop: true,
  grabCursor: true,
  spaceBetween: 48,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    568: {
      slidesPerView: 2,
    },
  },
});

/*==================== SHOW SCROLL UP ====================*/

function scrollTop() {
  const scrollTop = document.getElementById("scroll-up");
  if (this.scrollY >= 560) {
    scrollTop.classList.add("show-scroll");
  } else {
    scrollTop.classList.remove("show-scroll");
  }
}

window.addEventListener("scroll", scrollTop);

/*==================== chang background header ====================*/

window.addEventListener("scroll", scrollHeader);

function scrollHeader() {
  const nav = document.getElementById("header");

  if (this.scrollY >= 70) {
    nav.classList.add("scroll-header");
  } else {
    nav.classList.remove("scroll-header");
  }
}

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    console.log(sectionTop)
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx-moon" : "bx-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*==================== ITyped ====================*/

window.ityped.init(document.querySelector("#iTyped"), {
  loop: true,
  showCursor: true,
  strings: ["i'm mohammad"],
});
