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
  <header>
    <Nav />
  </header>

  <main></main>
</template>
