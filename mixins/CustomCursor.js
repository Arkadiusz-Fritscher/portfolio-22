export default {
  mounted() {
    this.pointer = document.querySelector('.cursor');
    this.showCustomPointer();

    document.addEventListener('mouseenter', this.showCustomPointer);
    document.addEventListener('mouseleave', this.hideCustomPointer);
    this.followPointer();
  },

  methods: {
    showCustomPointer() {
      this.pointer.style.display = 'flex';
    },

    hideCustomPointer() {
      this.pointer.style.display = 'none';
    },

    followPointer() {
      document.addEventListener('mousemove', (e) => {
        this.$gsap.to(this.pointer, {
          x: e.pageX,
          y: e.pageY,
          duration: 0.6
        });
      });
    }
  }
};
