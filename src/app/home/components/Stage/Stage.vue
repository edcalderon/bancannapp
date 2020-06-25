<template>
  <div :class="$style.stage" ref="stage">
    <div :class="$style.canvas" ref="canvas" id="particles-js"></div>

    <vue-grid>
      <vue-grid-row>
        <vue-grid-item class="vueGridItem">
          <img src="logo-banca.png" alt="vuesion" />
          <vue-headline level="2">BANCANNABIS</vue-headline>
          <div :class="$style.subTitle">
            {{ $t('App.core.description') }}
          </div>

          <br />

          <a
            :class="$style.github"
            href="https://github.com/vuesion/vuesion"
            target="_blank"
            rel="noopener"
            aria-label="vuesion github repository"
          >
            <vue-icon-github />
          </a>
        </vue-grid-item>
      </vue-grid-row>
    </vue-grid>
    <script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"></script>
    <script src="particles.js"></script>
  </div>
</template>

<script lang="ts">
import { CircleAnimation } from '../../../shared/animations/CircleAnimation';
import { ParticleAnimation } from '../../../shared/animations/ParticlesAnimation';
import VueGrid from '@components/VueGrid/VueGrid.vue';
import VueGridRow from '@components/VueGridRow/VueGridRow.vue';
import VueGridItem from '@components/VueGridItem/VueGridItem.vue';
import VueIconGithub from '@components/icons/VueIconGithub/VueIconGithub.vue';
import VueHeadline from '@components/VueHeadline/VueHeadline.vue';

export default {
  components: { VueHeadline, VueIconGithub, VueGridItem, VueGridRow, VueGrid },
  props: {
    disableParticles: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    handleResize() {
      const canvas: HTMLCanvasElement = this.$refs.canvas;
      const stage: HTMLElement = this.$refs.stage;
      const stageRect: ClientRect =
        stage.getClientRects().length > 0
          ? stage.getClientRects().item(0)
          : ({
              width: 0,
              height: 0,
            } as ClientRect);

      canvas.width = stageRect.width;
      canvas.height = stageRect.height;
    },
  },
  beforeMount() {
    window.addEventListener('resize', this.handleResize);
  },
  mounted() {
    this.handleResize();

    if (!this.disableParticles) {
      /*  CircleAnimation(this.$refs.canvas); */
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.stage {
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  text-align: center;
  text-shadow: 0 0 5px rgba(15, 15, 15, 0.4);
  padding-top: $space-84;

  img {
    max-width: 12.8rem;
  }

  h1 {
    margin-bottom: $space-32;
    font-weight: $font-weight-light;
  }

  @include mediaMin(tabletPortrait) {
    min-height: 50vh;
    img {
      max-width: 25.6rem;
    }
  }
}

.canvas {
  min-height: 100vh;
  width: 100%;
  position: absolute;
  background-color: transparent;
  left: 0;
  top: 0;

  @include mediaMin(tabletPortrait) {
    min-height: 50vh;
  }
}

.github {
  font-size: $font-size-h1;
  display: inline-block;
  background: $brand-bg-color;
  transition: $button-transition;
  transition-property: box-shadow, background-color;
  color: #64b15e;
  border-radius: 50%;

  &:hover {
    box-shadow: $button-active-shadow;
    color: #54057b;
  }

  i {
    height: $font-size-h1;
    width: $font-size-h1;
  }
}
</style>
