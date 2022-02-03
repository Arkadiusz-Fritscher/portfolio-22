<template>
  <div class="callout-container flex" :class="{ 'callout--right': right }">
    <div class="callout">
      <p class="text-lg text-tristesse">
        <slot></slot>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    right: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.callout-container {
  padding-top: var(--af-space-3-y);
  padding-bottom: var(--af-space-3-y);
}

.callout p {
  max-width: 20ch;
}

@media screen(sm) {
  .callout {
    flex: 0 1 80%;
  }

  .callout--right {
    justify-content: flex-end;
  }
}

@media screen(tablet) {
  .callout {
    flex: 0 1 60%;
  }
}
</style>
