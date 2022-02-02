<script>
export default {
  async asyncData({ $content, params }) {
    const project = await $content(params.slug).fetch()

    return {
      project,
    }
  },
  mounted() {
    console.log(this.project)
  },
}
</script>

<template>
  <main class="wrapper mt-28">
    <nuxt-content :document="project" tag="article" />
  </main>
</template>

<style>
.nuxt-content h1 {
  @apply text-lg;
}
</style>
