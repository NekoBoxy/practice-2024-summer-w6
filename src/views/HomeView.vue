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
    <section class="landing">
      <div class="container">
        <div class="content">
          <p>獻給新世代的生活風格誌</p>
          <p>一起探索生活的無限可能</p>
          <div>
            <button type="button">馬上訂閱</button>
          </div>
        </div>
      </div>
    </section>

  </main>
</template>