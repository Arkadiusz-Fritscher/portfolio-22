<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
}
</script>

<template>
  <nuxt-link :to="url" class="flex gap-x-2 items-center group w-fit">
    <span class="link-text font-serif text-button">{{ text }}</span>
    <span
      class="icon flex items-center justify-center border rounded-full border-tristesse group-hover:bg-ruddy group-hover:border-transparent"
    >
      <svg
        class="fill-current group-hover:fill-chefs-hat"
        viewBox="0 0 20 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.0084 9.19727C14.3672 8.43187 14.714 7.76215 15.0488 7.1881C15.4076 6.61405 15.7544 6.13568 16.0893 5.75298L-3.01109e-07 5.75298L-4.32845e-07 4.2461L16.0893 4.2461C15.7544 3.83948 15.4076 3.34915 15.0488 2.7751C14.714 2.20105 14.3672 1.54329 14.0084 0.80181L15.2641 0.80181C16.771 2.54787 18.3496 3.83948 20 4.67664L20 5.32244C18.3496 6.13567 16.771 7.42728 15.2641 9.19727L14.0084 9.19727Z"
        />
      </svg>
    </span>
  </nuxt-link>
</template>

<style scoped>
.icon {
  --border-size: calc(var(--af-text-button) * 1.8);
  width: var(--border-size);
  height: var(--border-size);
  transition: all 0.4s ease-out;
  /* transition-delay: 0.2s; */
}

a svg {
  width: calc(var(--af-text-button) * 0.7);
  height: calc(var(--af-text-button) * 0.7);
}

.link-text {
  position: relative;
}

.link-text::before {
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

a:hover > .link-text::before {
  transform: scaleX(1);
  transition-delay: 0.2s;
  transform-origin: left center;
}

/* .link-text:hover::before {
  transform: scaleX(1);
  transition-delay: 0.2s;
  transform-origin: left center;
} */
</style>
