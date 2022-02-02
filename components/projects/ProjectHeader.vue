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
        <span>{{ date }}</span>
      </div>
      <div>
        <h1>{{ title }}</h1>
      </div>
      <div>
        <div v-if="stack">
          <p>Techsteck</p>
          <ul>
            <li v-for="entry in stack" :key="entry">{{ entry }}</li>
          </ul>
        </div>

        <div v-if="services">
          <p>Services</p>
          <ul>
            <li v-for="service in services" :key="service">{{ service }}</li>
          </ul>
        </div>

        <div v-if="links">
          <ul>
            <li v-for="(url, name) in links" :key="name">
              <a :href="url">{{ name }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
