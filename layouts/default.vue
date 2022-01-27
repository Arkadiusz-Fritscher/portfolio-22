<script>
export default {
  // mounted() {
  //   // Set initial VH
  //   document
  //     .querySelector(':root')
  //     .style.setProperty('--vh', window.innerHeight / 100 + 'px')
  //   // Set VH on resize
  //   window.addEventListener('resize', () => {
  //     document
  //       .querySelector(':root')
  //       .style.setProperty('--vh', window.innerHeight / 100 + 'px')
  //   })
  // },
}
</script>

<template>
  <section class="--vh">
    <TheNavbar />
    <Nuxt />
  </section>
</template>
