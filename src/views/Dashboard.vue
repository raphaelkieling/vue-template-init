<template>
  <md-app md-waterfall md-mode="fixed" style="min-height: 100vh;">
    <md-app-toolbar class="md-primary">
      <span class="md-title">{{title}}</span>
    </md-app-toolbar>

    <md-app-drawer md-permanent="clipped">
      <md-toolbar class="md-transparent" md-elevation="0">Menu</md-toolbar>

      <md-list>
        <md-list-item
          v-for="(menu, index) of menus"
          v-bind:key="index"
          @click="goToRoute(menu.path)"
        >
          <md-icon>{{menu.icon}}</md-icon>
          <span class="md-list-item-text">{{menu.name}}</span>
        </md-list-item>
      </md-list>
    </md-app-drawer>

    <md-app-content>
      <router-view></router-view>
    </md-app-content>
  </md-app>
</template>

<style scoped>
.md-app {
  max-height: 400px;
  border: 1px solid rgba(#000, 0.12);
}

.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}
</style>

<script>
export default {
  methods: {
    goToRoute: function(path) {
      this.$router.push(path);
    }
  },
  computed: {
    title: function() {
      return this.$store.state.system.applicationTitle;
    },
    menus: function() {
      return this.$store.state.system.menu;
    }
  }
};
</script>
