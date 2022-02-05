<template>
  <div class="project__browse wrapper flex items-center justify-between">
    <div>
      <BaseProjectBrowsButton
        v-if="prevProject"
        left
        text="Previews"
        :url="prevProject.path"
        :subtitle="`0${findProjectNumber - 1} / 0${allProjects.length}`"
      />
    </div>

    <div>
      <BaseProjectBrowsButton
        v-if="nextProject"
        text="Next"
        :url="nextProject.path"
        :subtitle="`0${findProjectNumber + 1} / 0${allProjects.length}`"
      ></BaseProjectBrowsButton>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: Array,
      allProjects: []
    };
  },

  async fetch() {
    this.projects = await this.$content()
      .only(['title', 'path'])
      .surround(this.$route.path)
      .fetch();
  },

  computed: {
    nextProject() {
      return this.projects[1] ? this.projects[1] : false;
    },
    prevProject() {
      return this.projects[0] ? this.projects[0] : false;
    },

    findProjectNumber() {
      let currentNumber = 0;

      if (this.allProjects.length > 0) {
        currentNumber =
          this.allProjects.findIndex(
            (project) => project.slug === this.$route.params.slug
          ) + 1;
      }

      return currentNumber;
    }
  },

  watch: {
    $route() {
      this.$fetch();
    }
  },

  beforeMount() {
    this.getProjects();
  },

  methods: {
    async getProjects() {
      const allProjects = await this.$content().only(['slug']).fetch();
      this.allProjects = await allProjects;
    }
  }
};
</script>

<style scoped>
.project__browse {
  padding-top: var(--af-space-3-y);
  padding-bottom: var(--af-space-3-y);
}
a {
  padding: 1rem 0.25rem;
}
</style>
