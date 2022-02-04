<template>
  <nuxt-link
    :to="url"
    class="group flex flex-row-reverse items-center gap-x-4 text-right"
    :class="{ previews__link: left }"
  >
    <BaseIconArrowRight
      class="arrow__icon group-hover:border-transparent group-hover:bg-ruddy group-hover:text-chefs-hat"
      :class="{ 'rotate-180': left }"
    />
    <span class="flex flex-col gap-y-1">
      <span class="link__title font-serif text-lg">{{ text }}</span>
      <span v-if="subtitle" class="text-sm text-grey-heather">{{
        subtitle
      }}</span>
    </span>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    left: {
      type: Boolean,
      default: false
    },
    subtitle: {
      type: String,
      default: ''
    }
  }
};
</script>

<style scoped>
.arrow__icon {
  --size: calc(var(--af-text-lg) * 1.8);
  width: var(--size);
  height: var(--size);
  min-width: var(--size);
}

.previews__link {
  @apply flex-row text-left;
}

.link__title {
  position: relative;
}
.link__title::before {
  content: '';
  display: block;
  position: absolute;
  bottom: -3px;
  left: 0;
  right: 0;
  height: 0.0625rem;
  transform: scaleX(0);
  transform-origin: right center;
  background-color: currentColor;
  transition: transform 0.9s cubic-bezier(0.23, 1, 0.32, 1);
}

a:hover .link__title::before {
  transform: scaleX(1);
  transition-delay: 0.2s;
  transform-origin: left center;
}
</style>
