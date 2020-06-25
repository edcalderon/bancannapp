<template>
  <div :class="[$style.homeSection, alternative ? $style.alternative : null]">
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script>
      AOS.init();
    </script>

    <vue-grid>
      <vue-grid-row :class="[flip ? $style.flip : null]">
        <vue-grid-item :class="$style.image">
          <vue-image :src="image" :native="false" :class="$style.image" class="inline-photo show-on-scroll" />
        </vue-grid-item>
        <vue-grid-item :class="$style.text"
          ><slot />
          <div class="item" data-aos="fade-right">33333333</div>
        </vue-grid-item>
      </vue-grid-row>
    </vue-grid>
  </div>
</template>

<script lang="ts">
import VueGrid from '@components/VueGrid/VueGrid.vue';
import VueGridRow from '@components/VueGridRow/VueGridRow.vue';
import VueGridItem from '@components/VueGridItem/VueGridItem.vue';
import VueImage from '@components/VueImage/VueImage.vue';

export default {
  name: 'HomeSection',
  components: { VueImage, VueGridItem, VueGridRow, VueGrid },
  props: {
    image: {
      type: String,
      required: true,
    },
    alternative: {
      type: Boolean,
    },
    flip: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.homeSection {
  padding: $space-48 0;

  @include mediaMin(tabletPortrait) {
    padding: $space-84 0;
  }
}

.alternative {
  background: $brand-bg-color-variant;
}

.flip {
  @include mediaMin(tabletPortrait) {
    flex-direction: row-reverse;
  }
}

.image {
  min-height: 256px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  margin-bottom: $space-32;
  border-radius: 70%;
  box-shadow: $button-active-shadow;

  @include mediaMin(tabletPortrait) {
    min-height: 512px;
    margin-bottom: 0;
  }
}
.inline-photo {
  border: 1em solid #fff;
  border-bottom: 4em solid #fff;
  border-radius: 0.25em;
  box-shadow: 1em 1em 2em 0.25em rgba(0, 0, 0, 0.2);
  margin: 2em auto;
  opacity: 0;
  transform: translateY(4em) rotateZ(-5deg);
  transition: transform 4s 0.25s cubic-bezier(0, 1, 0.3, 1), opacity 0.3s 0.25s ease-out;
  max-width: 600px;
  width: 90%;
  will-change: transform, opacity;
}

.inline-photo.is-visible {
  opacity: 1;
  transform: rotateZ(-2deg);
}
</style>
