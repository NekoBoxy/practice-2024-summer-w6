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
          <source srcset="../assets/images/logo-lg.svg" media="(min-width: 375px)">
        </picture>
      </a>

      <button class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
        <img src="../assets/images/icon-burger-default.svg" alt="">
      </button>

      <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
        <div class="offcanvas-header">
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>

        <div class="offcanvas-body">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">搜尋文章</button>
              </form>
            </li>

            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">所有文章</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">訂閱方案</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">關於我們</a>
            </li>

            <li class="nav-item">
              <button type="button">登入 / 註冊</button>
            </li>
          </ul>
        </div>
      </div>

      <!-- ori -->
      <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div> -->
    </div>
  </nav>
</template>
