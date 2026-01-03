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

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.send(
    "service_n387ude",
    "template_rvaslef",
    {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      title: "Contact Form Submission",
      message: document.getElementById("message").value
    }
  )
  .then(() => {
    document.getElementById("formMessage").innerText =
      "✅ Thank you! Your message has been sent.";
    this.reset();
  })
  .catch((error) => {
    console.error("EmailJS Error:", error);
    document.getElementById("formMessage").innerText =
      "❌ Failed to send message. Please try again.";
  });
});
