<script setup>
import { ref, onMounted } from "vue";
import Nav from "../component/CHeader.vue";
// import { Modal } from 'bootstrap';

// const myModal = ref(null);

onMounted(() => {
  // const test = new Modal(myModal.value);
  // test.show();
})
</script>

<template>
  <Nav />

  <main>
    <section>
      <!-- <div class="container">
        <div class="row">
          <div class="col"> -->
      <picture style="max-width: 100%;">
        <!-- 預設圖片 - 小版 -->
        <img src="../assets/images/bn-sm.png" alt="" srcset="">
        <!-- 預設圖片 - 大版 -->
        <source srcset="../assets/images/bn-lg.png" media="(min-width: 375px)">
      </picture>
      <!-- </div>
        </div>
      </div> -->
    </section>

  </main>
</template>
