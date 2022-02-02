<script>
export default {
  async asyncData({ $content, params }) {
    const project = await $content(params.slug).fetch()

    return {
      project,
    }
  },
}
</script>

<template>
  <main class="wrapper mt-28">
    <ProjectsProjectHeader
      :title="project.title"
      :stack="project.stack"
      :services="project.services"
      :date="project.date"
      :links="project.links"
    />
    <nuxt-content :document="project" tag="article" />
  </main>
</template>

<style>
.nuxt-content h1 {
  @apply text-lg;
}
</style>
