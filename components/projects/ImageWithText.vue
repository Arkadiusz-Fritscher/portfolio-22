<script>
export default {
  props: {
    image: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: ''
    },
    imgLeft: {
      type: Boolean,
      default: false
    },
    sticky: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    imgUrl() {
      return this.image
        ? require(`@/assets/img/projects/${this.$route.params.slug}/${this.image}`)
        : '';
    }
  },

  mounted() {
    this.animateImageWithText();
  },

  methods: {
    animateImageWithText() {
      this.$gsap.set('.image-section > img', {
        autoAlpha: 0
      });

      this.$gsap.set('.image-section > div', {
        xPercent: -100
      });

      const tl = this.$gsap.timeline({
        defaults: {
          ease: 'power2.in',
          duration: 0.6
        }
      });

      tl.to('.image-section > div', {
        xPercent: 0
      });

      tl.to(
        '.image-section > img',
        {
          autoAlpha: 1,
          duration: 0
        },
        '<'
      );

      tl.to('.image-section > div', {
        xPercent: 100
      });
    }
  }
};
</script>

<template>
  <div
    class="image-text flex flex-col items-stretch gap-y-4 tablet:flex-row tablet:gap-y-0 tablet:gap-x-8"
  >
    <!-- Text section -->
    <div class="text-section" :class="{ 'text--right': imgLeft }">
      <p class="text-base text-grey-heather" :class="{ 'text-sticky': sticky }">
        <slot></slot>
      </p>
    </div>

    <!-- Image section -->
    <div class="image-section relative">
      <div class="absolute inset-0 z-20 bg-current"></div>
      <img :src="imgUrl" :alt="alt" loading="lazy" />
    </div>
  </div>
</template>

<style scoped>
.image-text {
  padding-top: var(--af-space-3-y);
  padding-bottom: var(--af-space-3-y);
}

.text-section {
  flex: 0 0 fill;
  position: relative;
}

.text-section p {
  max-width: 54ch;
}

.text-sticky {
  position: sticky;
  top: 40%;
}

.text--right {
  order: 0;
}

.image-section {
  flex: 1 0 60%;
  overflow: hidden;
}

.image-section img {
  object-fit: contain;
  object-position: center center;
}

@media screen(tablet) {
  .text--right {
    order: 2;
  }
}
</style>
