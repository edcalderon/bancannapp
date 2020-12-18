<template>
  <div>
    <stage :disable-particles="disableParticles" />
    <!-- animations imports -->
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script>
      AOS.init();
    </script>
    <!-- END animations imports -->
    <home-section flip ref="home-section" :image="{ setImagen }" :class="$style.homeSection">
      <div class="item" data-aos="fade-right">
        <vue-headline appearance-level="2" level="2"> {{ $t('components.home.tittle') }}</vue-headline>
      </div>
      <br />
      <div class="item" data-aos="fade-left">
        <vue-headline appearance-level="3" level="3">{{ $t('components.home.headline-1') }}</vue-headline>
        <p>{{ $t('components.home.p-1') }}</p>
        <br />
        <vue-headline appearance-level="3" level="3">{{ $t('components.home.headline-2') }} </vue-headline>
        <p>
          {{ $t('components.home.p-2') }}
          <a href="https://e-groweed.com/" target="_blank" rel="noopener noreferrer"> {{ $t('about.bca.p7') }}</a>
        </p>
        <br />
        <vue-headline appearance-level="3" level="3">{{ $t('components.home.headline-3') }} </vue-headline>
        <p>
          {{ $t('components.home.p-3') }}
        </p>
      </div>
    </home-section>
  </div>
</template>

<script lang="ts">
import { mapState } from 'vuex';
import Stage from '../components/Stage/Stage.vue';
import HomeSection from '@/app/home/components/HomeSection/HomeSection.vue';
import VueCard from '@components/VueCard/VueCard.vue';
import { IState } from '@/app/state';
import VueHeadline from '@components/VueHeadline/VueHeadline.vue';

export default {
  metaInfo: {
    title: 'Bancannabis',
    meta: [
      {
        name: 'description',
        content: 'App.core.description',
      },
      {
        name: 'robots',
        content: 'INDEX,FOLLOW',
      },
      {
        name: 'keywords',
        content: 'cannabis, blockchain, invest in cannabis',
      },

      { name: 'og:url', content: 'https://bancannabis.org' },
      { name: 'og:site_name', content: 'bancannabis.co' },
      { name: 'og:type', content: 'website' },
      { name: 'og:locale', content: 'es' },
      {
        name: 'og:title',
        content: 'bancannabis',
      },
      {
        name: 'og:description',
        content: 'bancannabis',
      },
      { name: 'og:image:url', content: '/bancannapp.png' },

      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@bancannabis' },
      { name: 'twitter:creator', content: '@bancannabis' },
      {
        name: 'twitter:title',
        content: 'bancannabis',
      },
      { name: 'twitter:url', content: 'https://twitter.com/bancannabis' },
      { name: 'twitter:image', content: 'https://twitter.com/bancannabis' },
      {
        name: 'twitter:description',
        content: 'bancannabis',
      },
    ],
  },
  components: {
    VueHeadline,
    HomeSection,
    VueCard,
    Stage,
  },
  computed: {
    ...mapState({
      disableParticles: (state: IState) =>
        (state.app.config && state.app.config.features && state.app.config.features.disableParticles) || false,
    }),
    ...mapState({
      setVideo: (state: IState) => {
        if (state.app.locale == 'es') {
          return 'https://www.youtube.com/embed/cCjwIKJhsnY';
        } else {
          return 'https://www.youtube.com/embed/D4TpWJXlQtM';
        }
      },
      setImagen: (state: IState) => {
        if (state.app.locale == 'es') {
          return '/re-esp.png';
        } else {
          return '/re-eng.png';
        }
      },
    }),
  },
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.homeSection {
  a {
    color: #291e59 !important;
    font-weight: $footer-link-font-weight;

    &:hover {
      color: #9cbe34 !important;
    }
  }
}
</style>
