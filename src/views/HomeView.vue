<script setup>
import { ref, onMounted } from "vue";
// import CHeader from "../component/CHeader.vue";
// import { Modal } from 'bootstrap';


// const myModal = ref(null);

onMounted(() => {
  // const test = new Modal(myModal.value);
  // test.show();
})
</script>

<template>
  <CHeader />

  <main>
    <section class="landing">
      <div class="landing-container">
        <!-- <picture>
          <img src="../assets/images/bn-sm.png" alt="" srcset="">
          <source srcset="../assets/images/bn-lg.png" media="(min-width: 375px)">
        </picture> -->


        <div class="content">
          <p>獻給新世代的生活風格誌</p>
          <p>一起探索生活的無限可能</p>
          <button type="button">
            馬上訂閱
            <img src="../assets/images/icon-arrow-right.svg" alt="" srcset="">
          </button>
        </div>
      </div>
    </section>

  </main>
</template>