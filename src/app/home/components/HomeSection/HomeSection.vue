<template>
  <div :class="[$style.homeSection, alternative ? $style.alternative : null]">
    <vue-grid>
      <vue-grid-row :class="[flip ? $style.flip : null]">
        <vue-grid-item>
          <vue-image v-if="image" :src="image" :native="false" :class="$style.image"></vue-image>
          <vue-video v-if="video" :src="video.setVideo" :native="false" :class="$style.video"></vue-video>
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
  min-height: 400px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  margin-bottom: $space-32;
  border-radius: 5px;
  /*  box-shadow: $button-active-shadow; */

  @include mediaMin(tabletPortrait) {
    min-height: 512px;
    margin-bottom: 0;
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
    border: 5;
    height: 400px;
  }
}
</style>
