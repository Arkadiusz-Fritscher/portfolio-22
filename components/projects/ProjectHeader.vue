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
  },

  mounted() {
    this.animateProjectHeader();
  },

  methods: {
    animateProjectHeader() {
      const tl = this.$gsap.timeline({
        defaults: {
          duration: 1,
          ease: 'power4.out'
        }
      });

      tl.from('.project--title > h1', {
        yPercent: 80,
        duration: 1,
        delay: 0.2
        // autoAlpha: 0
      });

      tl.from(
        this.$refs.project__date,
        {
          yPercent: 100,
          duration: 0.3,
          ease: 'power1.out'
        },
        '-=0.6'
      );

      tl.from(
        this.$gsap.utils.toArray(['.stack', '.services']),
        {
          yPercent: 10,
          autoAlpha: 0,
          stagger: 0.3,
          ease: 'power3.out'
        },
        '-=0.2'
      );

      tl.from(
        '.project--link',
        {
          // yPercent: 80,
          autoAlpha: 0,
          stagger: 0.2,
          ease: 'power2.out'
        },
        '<'
      );
    }
  }
};
</script>

<template>
  <header>
    <div class="pb-6 tablet:pb-20">
      <nuxt-link
        class="link__back flex max-w-fit items-center gap-x-2 text-sm"
        to="/#projects"
      >
        <BaseIconArrowRight class="arrow__icon h-8 w-8 rotate-180" />
        <span class="link font-serif text-base">Back</span>
      </nuxt-link>
    </div>

    <div>
      <div class="overflow-hidden">
        <span ref="project__date" class="block text-sm text-grey-heather">{{
          date
        }}</span>
      </div>

      <div ref="project__title" class="project--title overflow-hidden">
        <h1 class="font-serif text-2xl leading-snug">{{ title }}</h1>
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
          <ul class="link--list flex gap-x-2 tablet:justify-end tablet:gap-x-6">
            <li
              v-for="(url, name) in links"
              :key="name"
              class="overflow-hidden"
            >
              <a
                :href="url"
                class="project--link block rounded-full border border-current py-2 px-6 text-sm font-medium text-tristesse tablet:px-10 tablet:py-3"
                >{{ name }}</a
              >
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
  margin-bottom: var(--af-space-2-y);
}

.stack,
.services {
  flex: 0 1 46%;
}

.services {
}

.list--title {
  @apply mb-2 flex items-center gap-x-2 font-semibold text-tristesse;
}

.stack--list,
.services--list {
  @apply flex gap-x-1 text-grey-heather;
}

.stack--list li:not(:last-child)::after,
.services--list li:not(:last-child)::after {
  content: '/';
  padding-left: 0.125em;
}

.project--links {
  flex: 0 0 100%;
  display: block;
}

.project--link {
  transition: hover 0.3s ease-out;
  /* transition-delay: 0.2s; */
}

@media screen(tablet) {
  .stack,
  .services {
    flex: 0 1 30%;
  }
}

@media (hover: hover) {
  .link__back:hover .arrow__icon {
    @apply scale-110 border-transparent bg-ruddy text-chefs-hat;
    transition: transform 0.3s ease-out;
    transition-delay: 0.1s;
  }

  .project--link:hover {
    @apply bg-tristesse text-chefs-hat;
    transition: all 0.2s ease-in;
  }
}
</style>
