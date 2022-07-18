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

  // checking if it's desktop display for highlights as we don't want it on mobile.
  // window.innerWidth > 960 &&  ADD INTO ALL IF STATEMENTS

  if (scrollPos < 600) {
    about.classList.add("highlight");
    skills.classList.remove("highlight");
    return;
  } else if (scrollPos < 1300) {
    skills.classList.add("highlight");
    about.classList.remove("highlight");
    projects.classList.remove("highlight");
    return;
  } else if (scrollPos < 1500) {
    projects.classList.add("highlight");
    skills.classList.remove("highlight");
    contact.classList.remove("highlight");
    return;
  } else if (scrollPos < 2000) {
    projects.classList.remove("highlight");
    contact.classList.add("highlight");
    return;
  }

  // if ((element && window.innerWidth < 960 && scrollPos < 600) || element) {
  //   element.classList.remove("highlight");
  // }
};

window.addEventListener("scroll", highlightMenu);
window.addEventListener("click", highlightMenu);
