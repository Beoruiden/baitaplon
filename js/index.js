document.addEventListener("DOMContentLoaded", function () {
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

  setInterval(nextBanner, 3000); // Thay đổi hình ảnh mỗi 5 giây
});
const searchBars = document.querySelectorAll(".search");

searchBars.forEach((searchBar) => {
  const searchInput = searchBar.querySelector(".search-input");
  const searchButton = searchBar.querySelector(".search-btn");

  searchButton.addEventListener("click", () => {
    const keyword = searchInput.value.trim();
    if (keyword.length > 0) {
      // Thực hiện tìm kiếm dựa trên từ khóa
      console.log(`Đang tìm kiếm với từ khóa: ${keyword}`);
    }
  });
});
