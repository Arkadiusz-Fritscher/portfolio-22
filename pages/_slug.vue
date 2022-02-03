<script>
export default {
  layout: 'projects',

  async asyncData({ $content, params }) {
    const project = await $content(params.slug).fetch();

    return {
      project
    };
  }
};
</script>

<template>
  <main class="wrapper">
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

main {
  padding-top: var(--af-space-5-y);
  padding-bottom: var(--af-space-4-y);
}
</style>
