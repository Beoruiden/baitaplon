document.addEventListener("DOMContentLoaded", function() {
  const banners = document.querySelectorAll(".banner-img");
  let currentIndex = 0;

  function showBanner(index) {
    banners.forEach((banner, i) => {
      if (i === index) {
        banner.classList.add("active");
      } else {
        banner.classList.remove("active");
      }
    });
  }

  function nextBanner() {
    currentIndex = (currentIndex + 1) % banners.length;
    showBanner(currentIndex);
  }

  setInterval(nextBanner, 5000); // Thay đổi hình ảnh mỗi 5 giây
});

