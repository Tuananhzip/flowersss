onload = () =>{
        document.body.classList.remove("container");
};
function updateCountdown() {
  const headerText = document.querySelector('.header-text');
  const now = new Date();

  // Lấy năm hiện tại
  let year = now.getFullYear();

  // Ngày sinh nhật Khánh Vy năm nay
  let birthday = new Date(year, 4, 23); // Tháng 4 vì tháng trong JS tính từ 0 (0 = Jan, 4 = May)

  // Nếu đã qua ngày 23/05 của năm nay, thì lấy ngày 23/05 của năm tiếp theo
  if (now > birthday) {
    birthday = new Date(year + 1, 4, 23);
  }

  // Kiểm tra nếu hôm nay đúng ngày 23/05
  if (
    now.getDate() === 23 &&
    now.getMonth() === 4
  ) {
    headerText.textContent = "Khánh Vy sinh nhật vui vẻ ✨🎉🍰";
    return; // Không cần đếm ngược nữa
  } else {
    headerText.textContent = "Chúc Khánh Vy một ngày ngập tràn hạnh phúc nè 🍬💐💖";
  }

  // Tính thời gian còn lại
  const diff = birthday - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  // Hiển thị countdown bên dưới dòng header-text (tạo thêm 1 thẻ span nếu chưa có)
  let countdown = document.querySelector('.countdown');
  if (!countdown) {
    countdown = document.createElement('div');
    countdown.className = 'countdown';
    countdown.style.marginTop = '10px';
    countdown.style.fontSize = '1.2rem';
    countdown.style.fontWeight = 'bold';
    document.querySelector('.header-text').after(countdown);
  }

  countdown.textContent = `Còn ${days} ngày ${hours} giờ ${minutes} phút ${seconds} giây đến sinh nhật Khánh Vy 🎂`;
}

// Cập nhật mỗi giây
setInterval(updateCountdown, 1000);
updateCountdown(); // gọi ngay khi load trang
