<template>
  <div :class="$style.formExample">
    <vue-grid-row>
      <vue-grid-item class="vueGridItem">
        <vue-image :src="setImagen" :native="true" :class="$style.image"> </vue-image>
      </vue-grid-item>
    </vue-grid-row>
    <vue-grid-row>
      <vue-grid-item> </vue-grid-item>
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
          return 'egroweed_esp.png';
        } else {
          return 'egroweed_eng.png';
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
}
</style>
