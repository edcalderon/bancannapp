<template>
  <component :is="component" ref="video">
    <iframe width="800" :src="src"></iframe>
  </component>
</template>

<script lang="ts">
export default {
  name: 'VueVideo',
  components: {},
  props: {
    native: {
      type: Boolean,
      default: true,
    },
    src: {
      type: String,
      required: true,
    },
  },
  data(): any {
    return {
      observer: null,
    };
  },
  computed: {
    component() {
      return this.native ? 'img' : 'div';
    },
  },
  methods: {
    setImage() {
      if (this.native) {
        this.$refs.video.src = this.src;
      } else {
        this.$refs.video.style.backgroundImage = `url(${this.src})`;
      }
    },
    handleObserver(entries: IntersectionObserverEntry[]) {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.intersectionRatio > 0) {
          this.setImage();
          this.observer.disconnect();
        }
      });
    },
    createObserver() {
      this.observer = new IntersectionObserver(this.handleObserver, { rootMargin: '0px', threshold: 0.1 });
      this.observer.observe(this.$refs.video);
    },
  },
  mounted() {
    if ((window as any).IntersectionObserver) {
      this.createObserver();
    } else {
      this.setImage();
    }
  },
};
</script>
