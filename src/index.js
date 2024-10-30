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
