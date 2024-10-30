// Toggle mobile menu
document.getElementById('menu-btn').onclick = function () {
  document.getElementById('mobile-menu').classList.toggle('hidden');
};

 // Image Slider
 const sliderImages = [
    './assets/images/setup-5.jpg',
    './assets/images/team.jpg',
    './assets/images/party-1.jpg',
    './assets/images/funeral.jpg',
    './assets/images/setup-3.jpg',
    './assets/images/setup-1.jpg',
    './assets/images/students.jpg',
    './assets/images/wedding-2.jpg'
  ];
  let currentImageIndex = 0;
  const slider = document.getElementById('slider');

  function changeSlide() {
    slider.style.backgroundImage = `url(${sliderImages[currentImageIndex]})`;
    currentImageIndex = (currentImageIndex + 1) % sliderImages.length;
  }

  // Initialize slider
  changeSlide();
  setInterval(changeSlide, 3000); // Change image every 3 seconds

 // Select form and input elements
const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

// Select error message elements
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');

// Helper function to display or hide error messages
const displayError = (input, errorElement, message) => {
  if (message) {
    errorElement.textContent = message;
    errorElement.classList.remove('hidden');
    input.classList.add('border-red-500');
  } else {
    errorElement.classList.add('hidden');
    input.classList.remove('border-red-500');
  }
};

// Validate each input field
const validateName = () => {
  const name = nameInput.value.trim();
  if (name === '') {
    displayError(nameInput, nameError, 'Please enter your name.');
    return false;
  }
  displayError(nameInput, nameError, '');
  return true;
};
// Validate email address
const validateEmail = () => {
  const email = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
  if (email === '') {
    displayError(emailInput, emailError, 'Please enter your email.');
    return false;
  } else if (!emailPattern.test(email)) {
    displayError(emailInput, emailError, 'Please enter a valid email address.');
    return false;
  }
  displayError(emailInput, emailError, '');
  return true;
};

const validateMessage = () => {
  const message = messageInput.value.trim();
  if (message === '') {
    displayError(messageInput, messageError, 'Please enter a message.');
    return false;
  }
  displayError(messageInput, messageError, '');
  return true;
};

// Add event listeners to validate on input
nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
messageInput.addEventListener('input', validateMessage);

// Form submission handler
form.addEventListener('submit', (event) => {
  // Prevent form submission if validation fails
  if (!validateName() || !validateEmail() || !validateMessage()) {
    event.preventDefault(); // Prevent form from submitting
  }
});
 