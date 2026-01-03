// Toggle Menu
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

// Contact Form
/*
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("formMessage").innerText = "✅ Thank you! Your message has been sent.";
  this.reset();
});
*/
// Fade-In Animation
const fadeElements = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.2 }
);
fadeElements.forEach((el) => observer.observe(el));

// Dark/Light Mode
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  themeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Send Form 

/*
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("formMessage").innerText = "✅ Thank you! Your message has been sent.";
  this.reset();
});
*/

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };

  emailjs.send("service_n387ude", "template_rvaslef", params)
    .then(function(response) {
      alert("Message sent successfully!");
      document.getElementById("contactForm").reset();
    }, function(error) {
      alert("Failed to send message. Try again.");
      console.error(error);
    });
});
