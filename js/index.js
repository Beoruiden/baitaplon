// JavaScript để thực hiện chuyển đổi giữa hai ảnh bìa
const bannerImages = document.querySelectorAll('.banner-image');
let currentImageIndex = 0;

function changeImage() {
  const previousImageIndex = currentImageIndex === 0 ? 1 : 0;

  bannerImages[currentImageIndex].classList.add('active');
  bannerImages[previousImageIndex].classList.remove('active');

  currentImageIndex = previousImageIndex;

  setTimeout(changeImage, 5000); // Thay đổi ảnh sau mỗi 5 giây
}

changeImage();
