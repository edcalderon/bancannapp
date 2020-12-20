<template>
  <div :class="$style.formExample">
    <vue-grid-row>
      <vue-grid-item class="vueGridItem">
        <vue-image :src="setImagen" :native="true" :class="$style.image"> </vue-image>
      </vue-grid-item>
    </vue-grid-row>

    <vue-grid-row>
      <vue-grid-item>
        <p>
          {{ $t('about.bca.p1') }}
          {{ $t('about.bca.p2') }}
        </p>
        <br />
      </vue-grid-item>
    </vue-grid-row>

    <vue-grid-row>
      <vue-grid-item>
        <br />
        <vue-headline appearance-level="3" level="3">{{ $t('about.bca.h1') }}</vue-headline>
        <br />
        <p>
          {{ $t('about.bca.p3') }}
          {{ $t('about.bca.p4') }}
        </p>
        <br />
      </vue-grid-item>
    </vue-grid-row>

    <vue-grid-row>
      <vue-grid-item>
        <br />
        <vue-headline appearance-level="3" level="3"> {{ $t('about.bca.h2') }}</vue-headline>
        <br />
        <p>{{ $t('about.bca.p5') }}</p>
        <p>
          {{ $t('about.bca.p6') }}
          <a href="https://e-groweed.com/" target="_blank" rel="noopener noreferrer"> {{ $t('about.bca.p7') }}</a>
        </p>
        <br />
      </vue-grid-item>
    </vue-grid-row>
  </div>
</template>

<script lang="ts">
import { mapState } from 'vuex';
import { IState } from '@/app/state';
import VueGridRow from '@components/VueGridRow/VueGridRow.vue';
import VueGridItem from '@components/VueGridItem/VueGridItem.vue';
import VueButton from '@components/VueButton/VueButton.vue';
import VueHeadline from '@components/VueHeadline/VueHeadline.vue';
import VueImage from '@components/VueImage/VueImage.vue';
import { addNotification, INotification } from '@components/VueNotificationStack/utils';

export default {
  $_veeValidate: {
    validator: 'new' as 'new',
  },
  name: 'FormExample',
  components: { VueGridItem, VueGridRow, VueHeadline, VueImage },
  data(): any {
    return {};
  },
  computed: {
    ...mapState({
      setImagen: (state: IState) => {
        if (state.app.locale == 'es') {
          return 'bca_token_esp.png';
        } else {
          return 'bca_token_eng.png';
        }
      },
    }),
  },
  methods: {
    onSubmit() {},
  },
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.image {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 5%;
  border-radius: 10%;
  border: none !important;
  /*  box-shadow: $button-active-shadow; */
  @include mediaMin(tabletPortrait) {
    width: 100%;
    height: 100%;
    object-fit: contain;
    margin-bottom: 0;
    zoom: -20%;
  }
  @include mediaMin(phone) {
    width: 100%;
    height: 100%;
    margin-bottom: $space-40;
    object-fit: contain;
  }
}

.formExample {
  display: block;

  p{
  text-align: justify;
  text-justify: inter-word;
  }

}
</style>
