<template>
  <div :class="$style.form">
    <vue-grid>
      <vue-breadcrumb :items="[{ label: 'Home', href: '/' }, { label: $t('about.egroweed') }]" />
      <vue-grid-row>
        <vue-grid-item>
          <content-page-egroweed />
        </vue-grid-item>
      </vue-grid-row>
    </vue-grid>
  </div>
</template>

<script lang="ts">
import VueGrid from '@components/VueGrid/VueGrid.vue';
import VueGridRow from '@components/VueGridRow/VueGridRow.vue';
import VueGridItem from '@components/VueGridItem/VueGridItem.vue';
import ContentPageEgroweed from '../ContentPageEgroweed/ContentPageEgroweed.vue';
import VueHeadline from '@components/VueHeadline/VueHeadline.vue';
import VueBreadcrumb from '@components/VueBreadcrumb/VueBreadcrumb.vue';

export default {
  metaInfo: {
    title: 'aboutEgroweed',
  },
  components: { VueBreadcrumb, VueHeadline, ContentPageEgroweed, VueGridItem, VueGridRow, VueGrid },
  computed: {},
  data(): any {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.form {
  padding-top: 5vh;
}
</style>
