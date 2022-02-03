<template>
  <footer class="bg-dark-rift text-chefs-hat">
    <div id="contact" class="wrapper flex flex-col">
      <div class="flex justify-end tablet:w-11/12">
        <div class="space--right justify-end">
          <p class="max-w-[34ch] text-base">
            Ich bin offen für Jobangebote, Praktika, kleinere Nebenprojekte,
            peer programming oder auch Kontakte zum Netzwerken.
          </p>
        </div>
      </div>

      <div class="contact flex w-full justify-center">
        <a href="/" class="flex items-center text-center"
          ><span class="link font-serif uppercase">Get in touch</span>
          <BaseIconArrowRight class="icon" />
        </a>
      </div>

      <!-- Bottom Navigation -->
      <nav aria-label="contact-navigation">
        <ul class="flex gap-x-6 text-grey-heather">
          <li>2021</li>
          <li class="ml-auto">
            <a href="/" class="link">Linkedin</a>
          </li>
          <li>
            <a href="/" class="link">Github</a>
          </li>
          <li>
            <a href="/" class="link">Email</a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
#contact {
  padding-top: var(--af-space-5-y);
}

.contact {
  font-size: var(--af-text-contact);
  margin-top: var(--af-space-3-y);
  padding-bottom: var(--af-space-5-y);
}

.icon {
  --size: calc(var(--af-text-contact) * 1.4);
  width: var(--size);
  height: var(--size);
  margin-left: calc(var(--af-text-contact) * 0.2);
}

nav {
  padding-bottom: 1.5rem;
}
</style>
