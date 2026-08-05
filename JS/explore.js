//＊＊＊＊＊ 讀取資料內容 ＊＊＊＊＊

// 找到 HTML 裡的 container class
const container = document.querySelector(".container");
// console.log(container);

//把 articles 裡面的每一筆資料拿出來，暫時叫它 article
articles.forEach((article) => {
  // console.log(article);

  //請 JS 幫我建立一個 <a> 標籤
  const card = document.createElement("a");
  //加上 card-link class
  card.classList.add("card-link");
  // console.log(card);

  // 設定點擊後要前往的網址
  card.href = `article.html?id=${article.id}`;

  //把 HTML 放到 <a> 裡面
  card.innerHTML = `
  <article class="card">

    <div class="card-photo">
      <img src="${article.image}">
    </div>

    <p class="category">${article.category}</p>

    <h1>${article.title}</h1>

    <p class="date">${article.date}</p>

   
  <div class="tags">
      ${article.tags.map((tag) => `<span>${tag}</span>`).join("")}
    </div>


  </article>
`;
  //把剛剛建立好的 card 放進 <section class="container">
  container.appendChild(card);
});

//＊＊＊＊＊ filter 程式 ＊＊＊＊＊

// 找到所有分類按鈕: <button class="filter-btn">
const filterButtons = document.querySelectorAll(".filter-btn");
// 找到所有文章卡片: <div class="card">
const cards = document.querySelectorAll(".card");
// forEach(): 對每一個分類按鈕都加入點擊事件
filterButtons.forEach((button) => {
  // 當按鈕被點擊時
  button.addEventListener("click", () => {
    // 取得目前按鈕的分類 (all、cafe、spot...)
    //button.dataset : 取得這顆按鈕所有 data-* 的資料

    const category = button.dataset.category;

    // 檢查每一張卡片
    cards.forEach((card) => {
      // 取得目前這張卡片的分類
      // 例如:cardCategory =  Cafe , Walk .....(新㽪卡片)
      const cardCategory = card.dataset.category;

      // 如果按的是all ， 或按鈕和卡片相同
      if (category == "all" || category === cardCategory) {
        // 顯示卡片
        //元素.style.屬性 = "值";
        // 修改卡片的 CSS display 屬性，讓卡片顯示
        card.style.display = "block";
      } else {
        // 隱藏卡片
        card.style.display = "none";
      }
    });
  });
});
