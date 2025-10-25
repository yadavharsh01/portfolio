
var typed = new Typed(".text", {
  strings: ["Web Developer","MERN Stack Dev","YouTuber","Cyber Security Enthusiast"],
  typeSpeed:100,
  backSpeed:60,
  backDelay:1000,
  loop: true,
})

//hamburger menu
 const hamburger = document.getElementById('hamburger');
  const navbar = document.getElementById('navbar');

  hamburger.onclick = () => {
    hamburger.classList.toggle('active');
    navbar.classList.toggle('active');
  };

  // Close menu after clicking a link (on mobile)
  document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navbar.classList.remove('active');
    });
  });
 
  // Close menu when clicking a navbar link
  document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navbar.classList.remove('active');
      });
  });
// Close menus when clicking outside navbar, hamburger, or extra menu
document.addEventListener('click', (e) => {
  if (
    !navbar.contains(e.target) &&
    !hamburger.contains(e.target) &&
    !extraMenu.contains(e.target) &&
    e.target !== menuToggle
  ) {
    hamburger.classList.remove('active');
    navbar.classList.remove('active');
    extraMenu.classList.remove('active');
    menuToggle.checked = false;
  }
});
//contact form
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent actual form submission

  // Get form values
  const name = contactForm.name.value.trim();
  const email = contactForm.email.value.trim();
  const subject = contactForm.subject.value.trim();
  const message = contactForm.message.value.trim();

  // Simple validation
  if (!name || !email || !message) {
    formMessage.style.color = "red";
    formMessage.textContent = "Please fill in all required fields.";
    return;
  }

  // Optional: validate email format
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    formMessage.style.color = "red";
    formMessage.textContent = "Please enter a valid email.";
    return;
  }

  // Success message
  formMessage.style.color = "green";
  formMessage.textContent = "Thank you! Your message has been submitted.";

  // Reset form
  contactForm.reset();
});
