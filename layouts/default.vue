<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      class="elevation-4"
    >
      <nuxt-link class="d-flex justify-center" to="/home">
        <img class="my-10 logo hidden-md-and-down" src="~/assets/logo.png" />
      </nuxt-link>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon color="indigo darken-4">{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title
              class="font-weight-bold indigo--text text--darken-4"
              v-text="item.title"
            />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <nuxt-link class="d-flex justify-center button-logout" to="/">
        <v-btn width="90%" class="white--text" color="light-blue darken-3">
          LOGOUT
        </v-btn>
      </nuxt-link>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app color="light-blue darken-3">
      <v-app-bar-nav-icon color="white" @click.stop="drawer = !drawer" />
      <v-btn icon color="white" @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right"> </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: 'mdi-ruler',
          title: 'Sections',
          to: '/section/section',
        },
        {
          icon: 'mdi-image-frame',
          title: 'Contents',
          to: '/content/content',
        },
        {
          icon: 'mdi-clipboard-edit',
          title: 'Report Builder',
          to: '/report-builder',
        },
      ],
      miniVariant: false,
      right: true,
    }
  },
}
</script>
<style scoped>
.button-logout {
  position: absolute;
  bottom: 4%;
  width: 100%;
}

.logo {
  max-width: 80%;
}
</style>
