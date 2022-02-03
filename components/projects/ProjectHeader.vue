<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    stack: {
      type: Array,
      required: true,
    },
    services: {
      type: Array,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    links: {
      type: Object,
      required: true,
    },
  },
}
</script>

<template>
  <header>
    <div>
      <nuxt-link to="/#projects">Back</nuxt-link>
    </div>
    <div>
      <div>
        <span class="text-sm text-grey-heather">{{ date }}</span>
      </div>

      <div class="project--title">
        <h1 class="font-serif text-2xl">{{ title }}</h1>
      </div>

      <div class="text-sm flex flex-wrap">
        <div v-if="stack" class="stack mb-8">
          <p class="list--title">Tech Stack</p>
          <ul class="stack--list">
            <li v-for="entry in stack" :key="entry">{{ entry }}</li>
          </ul>
        </div>

        <div v-if="services" class="services mb-10">
          <p class="list--title">Services</p>
          <ul class="services--list">
            <li v-for="service in services" :key="service">
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
  flex: 0 1 50%;
}

.services {
}

.list--title {
  @apply text-tristesse mb-2;
}

.stack--list,
.services--list,
.link--list {
  @apply text-grey-heather flex gap-x-1;
}

.stack--list li:not(:last-child)::after,
.services--list li:not(:last-child)::after {
  content: '/';
  padding-left: 0.125em;
}

.link--list {
  @apply tablet:justify-end gap-x-2;
}

.project--links {
  flex: 0 0 100%;
  display: block;
}

.project--link {
  @apply py-2 px-6 text-tristesse border border-tristesse rounded-full;
  transition: all 0.3s ease-out;
  transition-delay: 0.2s;
}

.project--link:hover {
  @apply text-chefs-hat bg-tristesse;
  transition: all 0.4s ease-in;
}

@media screen(tablet) {
  .stack,
  .services {
    flex: 0 1 30%;
  }
}
</style>
