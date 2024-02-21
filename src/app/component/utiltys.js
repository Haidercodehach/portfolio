function reveal() {
  const reveals = document.querySelectorAll(".reveal");
  reveals.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (elementTop < windowHeight) {
      element.classList.add("active");
    }
  });
}

// Call the function when the page loads and on scroll
window.addEventListener("load", reveal);
window.addEventListener("scroll", reveal);
