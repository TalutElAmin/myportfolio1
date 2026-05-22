
// console.log("✅ script.js is linked correctly!");
// alert("JavaScript is working!");

// emailjs.init("Sj61rMYhAUKtG0NYW");
// emailjs.sendForm("service_8btxvm5", "template_4dzjxog", this);


// ===== MENU TOGGLE =====
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// // ===== YEAR AUTO UPDATE =====
// document.getElementById("year").textContent = new Date().getFullYear();

// // ===== EMAILJS CONTACT FORM =====
// (function () {
//   emailjs.init("Sj61rMYhAUKtG0NYW"); // 🔹 Replace with your EmailJS public key
// })();

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

// contactForm.addEventListener("submit", function (event) {
//   event.preventDefault();

//   emailjs
//     .sendForm("service_8btxvm5", "template_4dzjxog", this)
//     .then(() => {
//       formStatus.style.color = "lightgreen";
//       formStatus.textContent = "✅ Message sent successfully!";
//       contactForm.reset();
//     })
//     .catch((error) => {
//       formStatus.style.color = "red";
//       formStatus.textContent = "❌ Failed to send message. Try again.";
//       console.error("Error:", error);
//     });
// });

// function sendMail(){
//   var params = {
//       name: document.getElementById("name").value,
//       email:document.getElementById("email").value,
//       message:document.getElementById("message").value,
// };
// const serviceID = "service_8btxvm5";
// const templateID = "template_ribmqlv";

// emailjs
//  .send(serviceID, templateID, params)
//  .then((res) =>{
//   document.getElementById("name").value= "";
//   document.getElementById("email").value= "";
//   document.getElementById("message").value= "";
//   console.log(res);
//   alert("your message sent successfully");
// })
// .catch((err) => console.log(err));
// }


function sendMail(event){
  event.preventDefault(); // Prevent form reload

  const params = {
    from_name: document.getElementById("name").value,
    from_email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_8btxvm5";
  const templateID = "template_ribmqlv";

  emailjs.send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      document.getElementById("form-status").textContent = "✅ Your message was sent successfully!";
      document.getElementById("form-status").style.color = "green";
      console.log(res);
    })
    .catch((err) => {
      document.getElementById("form-status").textContent = "❌ Failed to send message. Please try again.";
      document.getElementById("form-status").style.color = "red";
      console.error(err);
    });
}

// Scroll Animation
  const cards = document.querySelectorAll('.card');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, index * 150);
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    observer.observe(card);
  });