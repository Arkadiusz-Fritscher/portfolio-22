<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    stack: {
      type: Array,
      required: true
    },
    services: {
      type: Array,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    links: {
      type: Object,
      required: true
    }
  }
};
</script>

<template>
  <header>
    <div class="pb-6 tablet:pb-10">
      <nuxt-link
        class="link__back flex max-w-fit items-center gap-x-2 text-sm"
        to="/#projects"
      >
        <BaseIconArrowRight class="arrow__icon h-8 w-8 rotate-180" />
        <span class="link font-serif">Back</span>
      </nuxt-link>
    </div>

    <div>
      <div>
        <span class="text-sm text-grey-heather">{{ date }}</span>
      </div>

      <div class="project--title">
        <h1 class="font-serif text-2xl">{{ title }}</h1>
      </div>

      <div class="flex flex-wrap gap-x-4 text-sm">
        <div v-if="stack" class="stack mb-8">
          <p class="list--title">
            <BaseIconStar class="w-4" />
            <span>Tech Stack</span>
          </p>
          <ul class="stack--list">
            <li v-for="entry in stack" :key="entry" class="whitespace-nowrap">
              {{ entry }}
            </li>
          </ul>
        </div>

        <div v-if="services" class="services mb-10">
          <p class="list--title">
            <BaseIconStar class="w-4" />
            <span>Services</span>
          </p>
          <ul class="services--list">
            <li
              v-for="service in services"
              :key="service"
              class="whitespace-nowrap"
            >
              {{ service }}
            </li>
          </ul>
        </div>

        <div v-if="links" class="project--links">
          <ul class="link--list">
            <li v-for="(url, name) in links" :key="name">
              <a :href="url" class="project--link">{{ name }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  padding-bottom: var(--af-space-3-y);
}

.project--title {
  padding-bottom: var(--af-space-2-y);
}

.stack,
.services {
  flex: 0 1 46%;
}

.services {
}

.list--title {
  @apply mb-2 flex items-center gap-x-2 text-tristesse;
}

.stack--list,
.services--list,
.link--list {
  @apply flex gap-x-1 text-grey-heather;
}

.stack--list li:not(:last-child)::after,
.services--list li:not(:last-child)::after {
  content: '/';
  padding-left: 0.125em;
}

.link--list {
  @apply gap-x-2 tablet:justify-end;
}

.project--links {
  flex: 0 0 100%;
  display: block;
}

.project--link {
  @apply rounded-full border border-tristesse py-2 px-6 text-tristesse;
  transition: all 0.3s ease-out;
  transition-delay: 0.2s;
}

.project--link:hover {
  @apply bg-tristesse text-chefs-hat;
  transition: all 0.4s ease-in;
}

@media screen(tablet) {
  .stack,
  .services {
    flex: 0 1 30%;
  }
}

@media (hover: hover) {
  .link__back:hover .arrow__icon {
    @apply border-transparent bg-ruddy text-chefs-hat;
    transition: all 0.2s ease-in;
  }
}
</style>
