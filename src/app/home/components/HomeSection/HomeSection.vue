<template>
  <div :class="[$style.homeSection, alternative ? $style.alternative : null]">
    <vue-grid>
      <vue-grid-row :class="[flip ? $style.flip : null]">
        <vue-grid-item>
          <div class="item" data-aos="fade-right">
            <vue-image v-if="image" :src="image.setImagen" :native="true" :class="$style.image"></vue-image>
            <vue-video v-if="video" :src="video.setVideo" :native="false" :class="$style.video"></vue-video>
          </div>
        </vue-grid-item>
        <vue-grid-item :class="$style.text"><slot /> </vue-grid-item>
      </vue-grid-row>
    </vue-grid>
  </div>
</template>

<script lang="ts">
import VueGrid from '@components/VueGrid/VueGrid.vue';
import VueGridRow from '@components/VueGridRow/VueGridRow.vue';
import VueGridItem from '@components/VueGridItem/VueGridItem.vue';
import VueImage from '@components/VueImage/VueImage.vue';
import VueVideo from '@components/VueVideo/VueVideo.vue';

export default {
  name: 'HomeSection',
  components: { VueImage, VueVideo, VueGridItem, VueGridRow, VueGrid },
  props: {
    image: {
      type: String,
      required: false,
    },
    video: {
      type: String,
      required: false,
    },
    alternative: {
      type: Boolean,
      required: false,
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

  p{
  text-align: justify;
  text-justify: inter-word;
  }

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
  background-repeat: no-repeat;
  border-radius: 10%;
  border: none !important;
  max-height: 65vh;
  /*  box-shadow: $button-active-shadow; */
  @include mediaMin(tabletPortrait) {
    width: 100%;
    height: 100%;
    object-fit: contain;
    margin-bottom: 0;
  }
  @include mediaMin(phone) {
    width: 100%;
    height: 100%;
    margin-bottom: $space-40;
    object-fit: contain;
  }
}
.video {
  min-height: 400px;
  margin-bottom: $space-32;
  border-radius: 5px;
  /*  box-shadow: $button-active-shadow; */

  @include mediaMin(tabletPortrait) {
    min-height: 512px;
    margin-bottom: 0;
  }
  iframe {
    height: 400px;
  }
}
</style>
