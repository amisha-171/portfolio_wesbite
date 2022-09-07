//function to select which button in the nav to highlight.
const highlightMenu = () => {
  const element = document.querySelector(".highlight");
  const aboutButton = document.querySelector("#about-page");
  const skillsButton = document.querySelector("#skills-page");
  const projectsButton = document.querySelector("#projects-page");
  const contactButton = document.querySelector("#contact-page");

  const about = document.querySelector("#about");
  const skills = document.querySelector("#skills");
  const projects = document.querySelector("#projects");
  const contact = document.querySelector("#contact");

  // now add 'highlight' class to my menu items...
  // checking if it's desktop display for highlights.

  if (window.innerWidth < 960) {
    aboutButton.classList.remove("highlight");
    skillsButton.classList.remove("highlight");
    contactButton.classList.remove("highlight");
    projectsButton.classList.remove("highlight");
    document.getElementById("page-title").classList.add("disappear");
    document.getElementById("logo").classList.add("disappear");
    return;
  } else if (isInViewport(about)) {
    aboutButton.classList.add("highlight");
    skillsButton.classList.remove("highlight");
    contactButton.classList.remove("highlight");
    projectsButton.classList.remove("highlight");
    document.getElementById("page-title").classList.remove("disappear");
    document.getElementById("logo").classList.remove("disappear");
    return;
  } else if (isInViewport(skills)) {
    skillsButton.classList.add("highlight");
    aboutButton.classList.remove("highlight");
    projectsButton.classList.remove("highlight");
    contactButton.classList.remove("highlight");
    document.getElementById("page-title").classList.remove("disappear");
    document.getElementById("logo").classList.remove("disappear");
    return;
  } else if (isInViewport(projects)) {
    projectsButton.classList.add("highlight");
    skillsButton.classList.remove("highlight");
    contactButton.classList.remove("highlight");
    aboutButton.classList.remove("highlight");
    document.getElementById("page-title").classList.remove("disappear");
    document.getElementById("logo").classList.remove("disappear");
    return;
  } else if (isInViewport(contact)) {
    contactButton.classList.add("highlight");
    projectsButton.classList.remove("highlight");
    aboutButton.classList.remove("highlight");
    skillsButton.classList.remove("highlight");
    document.getElementById("page-title").classList.remove("disappear");
    document.getElementById("logo").classList.remove("disappear");

    return;
  }
};
window.addEventListener("scroll", highlightMenu);
window.addEventListener("resize", highlightMenu);
window.addEventListener("click", highlightMenu);

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
