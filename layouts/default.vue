<script>
export default {
  mounted() {
    this.pointer = document.querySelector('.cursor')

    document.addEventListener('mouseenter', this.showCustomPointer)
    document.addEventListener('mouseleave', this.hideCustomPointer)
    this.followPointer()

    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)

    window.addEventListener('resize', () => {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    })
  },

  methods: {
    showCustomPointer(e) {
      this.pointer.style.display = 'flex'
    },

    hideCustomPointer() {
      this.pointer.style.display = 'none'
    },

    followPointer() {
      document.addEventListener('mousemove', (e) => {
        this.$gsap.to(this.pointer, {
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
  <section class="relative">
    <div class="cursor"></div>
    <TheNavbar />
    <Nuxt />
    <TheFooter />
  </section>
</template>

<style>
@media (pointer: coarse) {
  .cursor {
    display: none;
  }
}

@media (pointer: fine) {
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
    display: none;
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
}
</style>
