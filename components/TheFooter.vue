<template>
  <footer class="bg-dark-rift text-chefs-hat">
    <div id="contact" class="flex flex-col wrapper">
      <div class="flex">
        <div class="tablet:w-11/12 ml-auto flex flex-col">
          <div class="space--right ml-auto">
            <p class="text-lg max-w-[34ch]">
              Ich bin offen für Jobangebote, Praktikas, kleinere Nebenprojekte,
              peer programming oder auch Kontakte zum Netzwerken.
            </p>
          </div>
        </div>
      </div>

      <div class="contact flex justify-center w-full">
        <a href="/" class="block text-center"
          ><span class="uppercase font-serif">Get in touch</span></a
        >
      </div>

      <!-- Bottom Navigation -->
      <nav aria-label="contact-navigation">
        <ul class="flex gap-x-6">
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
export default {}
</script>

<style scoped>
#contact {
  padding-top: var(--af-space-5-y);
}

.contact {
  font-size: var(--af-text-2xl);
  margin-top: var(--af-space-3-y);
  padding-bottom: var(--af-space-5-y);
}

nav {
  padding-bottom: 1.5rem;
}
</style>
