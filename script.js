document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  const scrollThreshold = 50; // Adjust the scroll threshold as needed

  window.addEventListener("scroll", function () {
    if (window.scrollY > scrollThreshold) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});
// Select all inputs and dropdowns with the animated-input class
const animatedInputs = document.querySelectorAll('.animated-input');

animatedInputs.forEach((input) => {
  // Add the 'popup' class when the input is clicked or focused
  input.addEventListener('focus', () => {
    input.classList.add('popup');
  });

  // Remove the 'popup' class when the input loses focus
  input.addEventListener('blur', () => {
    input.classList.remove('popup');
  });
});
// Select all elements with the assemble-animation class
const animatedElements = document.querySelectorAll('.assemble-animation');

// Create an Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add the 'show' class to trigger the animation
      entry.target.classList.add('show');
      // Stop observing the element once it has animated
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1 // Trigger animation when 10% of the element is visible
});

// Observe each animated element
animatedElements.forEach(element => observer.observe(element));





