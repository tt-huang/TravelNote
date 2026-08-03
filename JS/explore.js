console.log("JS開始執行");

// ===============================
// 取得 Filter 按鈕
// ===============================

// 找到所有分類按鈕
const filterButtons = document.querySelectorAll(".filter-btn");

// ===============================
// 取得文章卡片
// ===============================

// 找到所有文章卡片
const cards = document.querySelectorAll(".card");

// ===============================
// Filter 功能
// ===============================

// 讓每一個按鈕都監聽 click
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // 取得目前點擊按鈕的分類
    const category = button.dataset.category;

    console.log("選擇分類:", category);

    // 檢查每一張卡片
    cards.forEach((card) => {
      // 取得卡片自己的分類
      const cardCategory = card.dataset.category;

      // 如果選 All
      // 或是按鈕分類跟卡片分類相同
      if (category === "all" || category === cardCategory) {
        // 顯示卡片
        card.style.display = "block";
      } else {
        // 隱藏卡片
        card.style.display = "none";
      }
    });
  });
});
