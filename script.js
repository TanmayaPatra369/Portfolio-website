function openTab(event, tabName) {
  var i, tabContent, tabLinks;

  // Hide all content
  tabContent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  // Remove active class from all tabs
  tabLinks = document.getElementsByClassName("tab-link");
  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].classList.remove("active");
  }

  // Show the clicked tab
  document.getElementById(tabName).style.display = "block";
  event.currentTarget.classList.add("active");
}

// Show default tab
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("skills").style.display = "block";
});

// Open the Skills Popup
function openSkillsPopup() {
  document.getElementById("skills-popup").classList.add("show");
}

// Close the Skills Popup
function closeSkillsPopup() {
  document.getElementById("skills-popup").classList.remove("show");
}

// Close the Popup when Clicking Outside the Box
window.onclick = function (event) {
  let popup = document.getElementById("skills-popup");
  if (event.target === popup) {
    popup.classList.remove("show");
  }
};

// Custom Cursor Movement
document.addEventListener("mousemove", function (e) {
  let cursor = document.querySelector(".custom-cursor");
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent actual form submission

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name && email && message) {
      alert("Thank you, " + name + "! Your message has been sent.");
      document.getElementById("contact-form").reset();
    } else {
      alert("Please fill in all fields.");
    }
  });

document.addEventListener("DOMContentLoaded", function () {
  const words = ["Developer", "Enggineer", "Web Devloper ", "Learner"];
  let index = 0;
  let letterIndex = 0;
  let isDeleting = false;
  let typingSpeed = 150; // Speed of typing

  function typeEffect() {
    const animatedText = document.querySelector(".animated-text");

    if (!animatedText) return; // Prevents errors if element is missing

    let currentWord = words[index];

    if (isDeleting) {
      letterIndex--;
    } else {
      letterIndex++;
    }

    animatedText.textContent = currentWord.substring(0, letterIndex);

    if (!isDeleting && letterIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
    } else if (isDeleting && letterIndex === 0) {
      isDeleting = false;
      index = (index + 1) % words.length;
      setTimeout(typeEffect, 500);
    } else {
      setTimeout(typeEffect, isDeleting ? 100 : typingSpeed);
    }
  }

  typeEffect();
});
