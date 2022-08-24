//function to select which button in the nav to highlight.
const highlightMenu = () => {
  const element = document.querySelector(".highlight");
  const about = document.querySelector("#about-page");
  const skills = document.querySelector("#skills-page");
  const projects = document.querySelector("#projects-page");
  const contact = document.querySelector("#contact-page");
  let scrollPos = window.scrollY;

  console.log(scrollPos);

  // now add 'highlight' class to my menu items...
  // checking if it's desktop display for highlights.

  if (window.innerWidth > 960 && scrollPos < 500) {
    about.classList.add("highlight");
    skills.classList.remove("highlight");
    contact.classList.remove("highlight");
    projects.classList.remove("highlight");
    document.getElementById("page-title").classList.remove("disappear");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1150) {
    skills.classList.add("highlight");
    about.classList.remove("highlight");
    projects.classList.remove("highlight");
    contact.classList.remove("highlight");
    document.getElementById("page-title").classList.remove("disappear");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1550) {
    projects.classList.add("highlight");
    skills.classList.remove("highlight");
    contact.classList.remove("highlight");
    about.classList.remove("highlight");
    document.getElementById("page-title").classList.remove("disappear");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2200) {
    contact.classList.add("highlight");
    projects.classList.remove("highlight");
    about.classList.remove("highlight");
    skills.classList.remove("highlight");
    document.getElementById("page-title").classList.remove("disappear");
    return;
  }

  if (window.innerWidth < 960 && element != null) {
    //removing highlight if there is actually an element highlighted.
    element.classList.remove("highlight");
    document.getElementById("page-title").classList.add("disappear");
  }
};

window.addEventListener("scroll", highlightMenu);
window.addEventListener("resize", highlightMenu);
window.addEventListener("click", highlightMenu);
