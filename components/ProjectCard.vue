<template>
  <li ref="projectCard" class="project--card">
    <!-- Project Count -->
    <div ref="projectCount" class="project--count text-caption">
      <span>0{{ number }}</span>
      <span>/</span>
      <span>0{{ totalProjects }}</span>
    </div>

    <!-- Project Title -->
    <div class="project--title pointer-events-none overflow-hidden">
      <p
        ref="projectTitle"
        class="font-serif text-2xl font-bold tracking-normal"
      >
        {{ project.title }}
      </p>
    </div>

    <!-- Project thumbnail -->
    <div class="project--thumbnail">
      <nuxt-link :to="project.slug" />
      <div ref="projectImg" class="project--img" :style="thumbnail"></div>
    </div>

    <!-- Project Description -->
    <ul ref="projectServices" class="project--description flex text-sm">
      <li class="project--description--date">{{ project.date }}</li>
      <li
        v-for="service in project.services"
        :key="service"
        class="project--description--service"
      >
        {{ service }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    },
    number: {
      type: Number,
      required: true
    },
    totalProjects: {
      type: Number,
      requied: true
    }
  },

  computed: {
    thumbnail() {
      // eslint-disable-next-line no-undef
      const url = require(`@/assets/img/thumbnails/${this.project.thumbnail}`);
      return {
        backgroundImage: `url(${url})`
      };
    }
  },

  mounted() {
    this.animateProjectCard();
  },

  methods: {
    animateProjectCard() {
      const tl = this.$gsap.timeline({
        scrollTrigger: {
          trigger: this.$refs.projectCard,
          start: 'top 80%',
          end: 'bottom bottom',
          toggleActions: 'play none none reset',
          //   scrub: 0.5,
          //   markers: true,
          delay: 0.3 // not sure
        },
        defaults: {
          ease: 'power4.out',
          duration: 0.8
        }
      });

      tl.from(this.$refs.projectImg, {
        yPercent: 100
      });

      tl.from(
        this.$refs.projectTitle,
        {
          xPercent: -100
        },
        '-=0.4'
      );

      tl.from(
        this.$refs.projectCount,
        {
          yPercent: 30,
          autoAlpha: 0,
          duration: 0.4
        },
        '-=0.2'
      );

      tl.from(
        this.$refs.projectServices,
        {
          autoAlpha: 0,
          yPercent: 40,
          duration: 0.4
        },
        '<'
      );
    }
  }
};
</script>

<style scoped>
.project--card {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content min-content min-content 1fr min-content;
  gap: 0px 0px;
}

.project--title {
  grid-area: 2 / 1 / 3 / 2;
  z-index: 10;
}

.project--count {
  grid-area: 1 / 1 / 2 / 2;
}

.project--thumbnail {
  grid-area: 3 / 1 / 5 / 2;
  position: relative;
  height: 70vh;
  overflow: hidden;
}

.project--img {
  position: absolute;
  inset: 0;
  /* background-image: url('https://images.unsplash.com/photo-1585399000684-d2f72660f092?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80'); */
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  z-index: 1;
  pointer-events: none;
}

.project--thumbnail a {
  display: block;
  position: absolute;
  inset: 0;
  z-index: 10;
}

.project--description {
  grid-area: 5 / 1 / 6 / 2;
  padding: 0.5rem 0 0;
}

.project--description--date {
  color: var(--af-color-grey-heather);
}

.project--description--service {
  margin-left: 1rem;
  list-style: disc;
}

.project--description--service::marker {
  color: var(--af-color-powder-dust);
}

@media screen(tablet) {
  .project--title {
    grid-area: 3 / 1 / 4 / 3;
  }

  .project--count {
    grid-area: 2 / 1 / 3 / 2;
  }

  .project--thumbnail {
    grid-area: 2 / 2 / 4 / 5;
  }

  .project--description {
    grid-area: 1 / 2 / 2 / 5;
    padding: 0 0 0.5rem;
  }

  .project--card {
    display: grid;
    grid-template-columns: 1fr repeat(3, 23.333%);
    grid-template-rows: max-content max-content 1fr;
    gap: 0px 0px;
  }

  .project--description--service {
    margin-left: 1.5rem;
  }
}
</style>
