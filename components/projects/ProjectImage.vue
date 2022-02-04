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
    full: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    url() {
      const path = require(`@/assets/img/projects/${this.$route.params.slug}/${this.image}`);
      return path || '';
    }
  }
};
</script>

<template>
  <div class="flex justify-center">
    <div class="project__image" :class="{ 'project__image--large': full }">
      <img v-if="url" :src="url" :alt="alt" />
    </div>
  </div>
</template>

<style scoped>
.project__image {
  flex: 0 1 60%;
  height: max-content;
}

.project__image img {
  object-position: center center;
  object-fit: contain;
}

.project__image--large {
  display: flex;
  flex: 0 1 100%;
}
</style>
