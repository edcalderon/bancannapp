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
    <home-section ref="home-section" video="https://www.youtube.com/embed/dcfVI32ik2I">
      <div class="item" data-aos="fade-right">
        <vue-headline level="2"> {{ $t('components.home.tittle') }}</vue-headline>
      </div>
      <br />
      <div class="item" data-aos="fade-left">
        <vue-headline level="3">{{ $t('components.home.headline-1') }}</vue-headline>
        <p>{{ $t('components.home.p-1') }}</p>
        <br />
        <vue-headline level="3">{{ $t('components.home.headline-2') }} </vue-headline>
        <p>
          {{ $t('components.home.p-2') }}
        </p>
        <br />
        <vue-headline level="3">{{ $t('components.home.headline-3') }} </vue-headline>
        <p>
          {{ $t('components.home.p-3') }}
        </p>
      </div>
    </home-section>

    <vue-card>
      <p style="text-align: center;">
        Estamos en la preventa privada de nuestro Token <strong>BCA</strong> ingresa a
        <a href="https://bancannabis.co" target="_black;">bancannabis.co </a> y adquiere tu participación
      </p>
    </vue-card>
    <!--     <home-section-ieo>
      <vue-headline level="2">Enterprise ready</vue-headline>
      <br />
      <vue-headline level="3">SEO</vue-headline>
      <p>
        We support SEO (document head tags management) and server-side-rendering for search engines that support
        indexing of JavaScript content. (eg. Google)
      </p>
      <br />
      <vue-headline level="3">Best practices</vue-headline>
      <p>
        A Common style guide, TypeScript, and the best test setup: Automatically guarantee code quality and non-breaking
        changes.
      </p>
      <br />
      <vue-headline level="3">i18n</vue-headline>
      <p>
        Scalable apps need to support multiple languages, easily add and support multiple languages with vue-i18n.
      </p>
    </home-section-ieo> -->
  </div>
</template>

<script lang="ts">
import { mapState } from 'vuex';
import Stage from '../components/Stage/Stage.vue';
import HomeSection from '@/app/home/components/HomeSection/HomeSection.vue';
import HomeSectionIeo from '@/app/home/components/HomeSection/HomeSectionIeo.vue';
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

      { name: 'og:url', content: 'https://bancannabis.herokuapp.com/' },
      { name: 'og:site_name', content: 'bancannabis.co' },
      { name: 'og:type', content: 'website' },
      { name: 'og:locale', content: 'en' },
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
      { name: 'twitter:site', content: '@bancannabis.co' },
      { name: 'twitter:creator', content: '@bancannabis.co' },
      {
        name: 'twitter:title',
        content: 'bancannabis',
      },
      { name: 'twitter:url', content: 'https://bancannabis.herokuapp.com/' },
      { name: 'twitter:image', content: 'https://bancannabis.herokuapp.com/logo.png' },
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
  },
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.home-section {
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  text-align: center;
  text-shadow: 0 0 5px rgba(15, 15, 15, 0.4);
  padding-top: $space-84;

  image {
    max-width: 12.8rem;
    border-radius: 50%;
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
</style>
