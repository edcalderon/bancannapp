<template>
  <div id="app" :class="$style.app">
    <vue-notification-stack />

    <vue-navigation-progress :is-navigating="isNavigating" />
    <vue-nav-bar>
      <vue-button
        :class="$style.button"
        slot="right"
        v-if="isAuthenticated === false"
        style="background:#efe58a;"
        color="purple"
        @click="redirectToSale()"
      >
        {{ $t('auth.LoginForm.bca') }}
      </vue-button>

      <vue-button slot="right" v-if="isAuthenticated" color="primary" @click="onLogout">
        Logout
      </vue-button>
    </vue-nav-bar>

    <router-view :class="$style.content" />

    <vue-footer />

    <vue-sidebar>
      <vue-sidebar-group title="Languages">
        <vue-sidebar-group-item>
          <vue-select name="lang" id="lang" :options="languages" @input="localeSwitch" :value="getLocale" />
        </vue-sidebar-group-item>
      </vue-sidebar-group>

      <vue-sidebar-group title="Navigation">
        <vue-sidebar-group-item to="/">
          <vue-icon-code />
          Home
        </vue-sidebar-group-item>
        <vue-sidebar-group-item to="/aboutBCA">
          <vue-icon-code />
          {{ $t('about.bca') }}
        </vue-sidebar-group-item>
        <vue-sidebar-group-item to="/aboutEgroweed">
          <vue-icon-code />
          {{ $t('about.egroweed') }}
        </vue-sidebar-group-item>
      </vue-sidebar-group>

      <vue-sidebar-group title="Docs">
        <vue-sidebar-group-item>
          <a href="/white_paper_bancannabis_esp.pdf" target="_blank" rel="noopener noreferrer" download>
            <vue-icon-puzzle-piece />
            White Paper Bancannabis Español
          </a>
        </vue-sidebar-group-item>
        <vue-sidebar-group-item>
          <a href="/white_paper_bancannabis_eng.pdf" target="_blank" rel="noopener noreferrer" download>
            <vue-icon-puzzle-piece />
            White Paper Bancannabis English
          </a>
        </vue-sidebar-group-item>
      </vue-sidebar-group>

      <vue-sidebar-group title="Community">
        <vue-sidebar-group-item>
          <a href="https://github.com/bancannabis" target="_blank" rel="noopener noreferrer">
            <vue-icon-github />
            Github
          </a>
        </vue-sidebar-group-item>

        <vue-sidebar-group-item>
          <a href="https://twitter.com/bancannabis" target="_blank" rel="noopener noreferrer">
            <vue-icon-twitter-square />
            Twitter
          </a>
        </vue-sidebar-group-item>

        <vue-sidebar-group-item>
          <a href="https://discord.gg/9rDVgJkT" target="_blank" rel="noopener noreferrer">
            <vue-icon-discord />
            Discord
          </a>
        </vue-sidebar-group-item>
      </vue-sidebar-group>
    </vue-sidebar>

    <vue-modal :show="showLoginModal" @close="showLoginModal = false">
      <login-form :loading="isLoginPending" @submit="onLoginSubmit" />
    </vue-modal>
  </div>
</template>

<script lang="ts">
import { mapActions, mapGetters } from 'vuex';
import { loadLocaleAsync } from '@shared/plugins/i18n/i18n';
import '@shared/designSystem/global.scss';
import VueNavBar from '@components/VueNavBar/VueNavBar.vue';
import VueGrid from '@components/VueGrid/VueGrid.vue';
import VueGridItem from '@components/VueGridItem/VueGridItem.vue';
import VueFooter from '@components/VueFooter/VueFooter.vue';
import VueNotificationStack from '@components/VueNotificationStack/VueNotificationStack.vue';
import VueCookieConsent from '@components/VueCookieConsent/VueCookieConsent.vue';
import VueNavigationProgress from '@components/VueNavigationProgress/VueNavigationProgress.vue';
import VueSidebar from '@components/VueSidebar/VueSidebar.vue';
import VueSidebarGroup from '@components/VueSidebar/VueSidebarGroup/VueSidebarGroup.vue';
import VueSidebarGroupItem from '@components/VueSidebar/VueSidebarGroupItem/VueSidebarGroupItem.vue';
import VueIconCode from '@components/icons/VueIconCode/VueIconCode.vue';
import VueIconBook from '@components/icons/VueIconBook/VueIconBook.vue';
import VueIconHashtag from '@components/icons/VueIconHashtag/VueIconHashtag.vue';
import VueIconGithub from '@components/icons/VueIconGithub/VueIconGithub.vue';
import VueIconTwitterSquare from '@components/icons/VueIconTwitterSquare/VueIconTwitterSquare.vue';
import VueIconDiscord from '@components/icons/VueIconDiscord/VueIconDiscord.vue';
import VueSelect from '@components/VueSelect/VueSelect.vue';
import VueIconPuzzlePiece from '@components/icons/VueIconPuzzlePiece/VueIconPuzzlePiece.vue';
import VueButton from '@components/VueButton/VueButton.vue';
import VueModal from '@components/VueModal/VueModal.vue';
import LoginForm from '@shared/modules/auth/LoginForm/LoginForm.vue';
import { addNotification } from '@components/VueNotificationStack/utils';
import Vue from 'vue';

export default {
  name: 'App',
  components: {
    LoginForm,
    VueModal,
    VueButton,
    VueIconPuzzlePiece,
    VueSelect,
    VueIconTwitterSquare,
    VueIconDiscord,
    VueIconGithub,
    VueIconHashtag,
    VueIconBook,
    VueIconCode,
    VueSidebarGroupItem,
    VueSidebarGroup,
    VueSidebar,
    VueNavigationProgress,
    VueCookieConsent,
    VueNavBar,
    VueGrid,
    VueGridItem,
    VueFooter,
    VueNotificationStack,
  },
  data(): any {
    return {
      isNavigating: false,
      languages: [{ label: 'English', value: 'en' }, { label: 'Español', value: 'es' }],
      showLoginModal: false,
      showBCAModal: false,
      isLoginPending: false,
    };
  },
  computed: {
    ...mapGetters('app', ['cookieConsentVersion', 'getLocale']),
    ...mapGetters('auth', ['isAuthenticated']),
  },
  methods: {
    ...mapActions('app', ['changeLocale', 'setCookieConsentVersion']),
    ...mapActions('auth', ['createToken', 'revokeToken']),
    localeSwitch(locale: string) {
      loadLocaleAsync(locale).catch((error: Error) => console.log(error)); // tslint:disable-line
      this.changeLocale(locale);
    },
    initProgressBar() {
      this.$router.beforeEach((to: any, from: any, next: any) => {
        this.isNavigating = true;
        next();
      });
      this.$router.afterEach(() => {
        this.isNavigating = false;
      });
    },
    async onLoginSubmit(formData: any) {
      this.isLoginPending = true;

      try {
        await this.createToken(formData);

        this.$router.push({ name: 'dashboard' });
      } catch (e) {
        addNotification({ title: 'Error during login', text: 'Please try again!' });
      }

      this.isLoginPending = false;
      this.showLoginModal = false;
    },
    async onLogout() {
      this.isLoginPending = true;

      await this.revokeToken();

      this.$router.push('/');

      this.isLoginPending = false;
      this.showLoginModal = false;
    },
    redirectToSale() {
      window.open('https://e-groweed.com/grower/', '_blank');
    },
  },
  created() {
    this.initProgressBar();
  },
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';
@import '~@/app/shared/designSystem/reset';
@import '~@/app/shared/designSystem/typo';

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
}

.button {
  color: #520978 !important;
  &:hover {
    background: #9182dd !important;
    color: #efe58a !important;
    border-color: #520978 !important;
  }
}

.content {
  flex: 1;
}

.vueModal {
  border-radius: 15px !important;
}

.logo {
  position: relative;
  top: $space-4;
  width: $space-24;
  height: $space-24;
}
</style>
