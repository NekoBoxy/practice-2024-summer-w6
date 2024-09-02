<script setup>
// import { ref, onMounted } from "vue";
// import { Modal } from 'bootstrap';

// const myModal = ref(null);

// onMounted(() => {
// const test = new Modal(myModal.value);
// test.show();
// })
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
      <a class="navbar-brand" href="#">
        <picture>
          <!-- 預設圖片 - 小版 -->
          <img src="../assets/images/logo-sm.svg" alt="" srcset="">
          <!-- 預設圖片 - 大版 -->
          <source srcset="../assets/images/logo-lg.svg" media="(min-width: 1921px)">
        </picture>
      </a>

      <button class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop"
        aria-controls="offcanvasTop">
        <img src="../assets/images/icon-burger-default.svg" alt="">
      </button>

      <div class="offcanvas offcanvas-top h-100" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
        <div class="offcanvas-header">
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>

        <div class="offcanvas-body">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item mb-3">
              <form class="d-flex align-items-center position-relative" role="search">
                <input class="search-input form-control me-2 rounded-pill" type="search" placeholder="搜尋文章"
                  aria-label="Search">
                <button class="search-btn btn position-absolute" type="submit">
                  <img src="../assets/images/icon-search.svg" alt="">
                </button>
              </form>
            </li>

            <li class="nav-item mb-3">
              <a class="nav-link active" aria-current="page" href="#">
                <h6>所有文章</h6>
              </a>
            </li>

            <li class="nav-item mb-3">
              <a class="nav-link" href="#">
                <h6>訂閱方案</h6>
              </a>
            </li>

            <li class="nav-item mb-3">
              <a class="nav-link" href="#">
                <h6>關於我們</h6>
              </a>
            </li>

            <li class="nav-item btn-login">
              <button class="rounded-pill" type="button">登入 / 註冊</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
