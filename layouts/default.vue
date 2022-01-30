<script>
export default {
  mounted() {
    this.followPointer()
  },

  methods: {
    followPointer() {
      document.addEventListener('mousemove', (e) => {
        // console.log(e)
        this.$gsap.to('.cursor', {
          x: e.pageX,
          y: e.pageY,
          duration: 0.6,
        })
      })
    },
  },
}
</script>

<template>
  <section class="--vh relative">
    <div class="cursor"></div>
    <TheNavbar />
    <Nuxt />
  </section>
</template>

<style>
.cursor {
  --size: 8px;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  z-index: 9999;

  position: absolute;
  transform: translate(-50%, -50%);
  background-color: var(--af-color-ruddy);
  pointer-events: none;
}

.cursor-hover {
  --size: max(10vw, 80px);
  width: var(--size);
  height: var(--size);
  max-width: 160px;
  max-height: 160px;
  color: var(--af-color-chefs-hat);
  font-size: var(--af-text-sm);
  font-weight: 500;
  text-align: center;
  line-height: 100%;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
