<script>
import CustomCursor from '@/mixins/CustomCursor';
export default {
  mixins: [CustomCursor],

  mounted() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    window.addEventListener('resize', () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  }
};
</script>

<template>
  <section class="relative">
    <div class="cursor"></div>
    <TheNavbar />
    <Nuxt />
    <TheFooter />
  </section>
</template>

<style></style>
