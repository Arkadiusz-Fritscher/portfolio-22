<template>
  <div
    ref="sectionTitleWrapper"
    class="section-title pointer-events-none overflow-x-hidden !overflow-x-clip"
  >
    <ul ref="sectionTitle" class="flex gap-x-[0.3em] font-serif text-display">
      <li v-for="i in 3" :key="i">
        {{ title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },

  mounted() {
    this.slideOnScroll();
  },

  methods: {
    slideOnScroll() {
      this.$gsap.to(this.$refs.sectionTitle, {
        scrollTrigger: {
          trigger: this.$refs.sectionTitleWrapper,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        },
        xPercent: -100,
        ease: 'sine.out'
      });
    }
  }
};
</script>

<style scoped>
.section-title {
  margin-top: var(--af-space-5-y);
  margin-bottom: var(--af-space-4-y);
}

li:nth-child(2n) {
  font-style: italic;
}
</style>
