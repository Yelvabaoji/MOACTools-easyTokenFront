<template>
  <q-layout view="lHh Lpr lFf">
    <!-- <q-header elevated> -->
    <q-header>
      <q-toolbar class="bg-white text-black">
        <q-btn flat dense round @click="leftDrawerOpen = !leftDrawerOpen" aria-label="Menu">
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          <strong> {{ title }} </strong>
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered content-class="bg-grey-2">
      <q-list>
        <q-item-label header>菜单选项</q-item-label>
        <q-item clickable v-ripple to="/myTokenList"
          :active="link === 'myTokenList'"
          @click="link = 'myTokenList'"
          v-on:click="selectMenu()"
          active-class="my-menu-link"
        >
          <q-item-section avatar>
            <q-avatar size="32px"><img src="statics/icons/mvg-logo.png" /></q-avatar>
          </q-item-section>
          <q-item-section>我发的币</q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/easyToken"
          :active="link === 'easyToken'"
          @click="link = 'easyToken'"
          v-on:click="selectMenu()"
          active-class="my-menu-link"
        >
          <q-item-section avatar>
            <q-avatar size="32px"><img src="statics/icons/mvp-logo.png" /></q-avatar>
          </q-item-section>
          <q-item-section>一键发币</q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/easyTokenHelp"
          :active="link === 'easyTokenHelp'"
          @click="link = 'easyTokenHelp'"
          v-on:click="selectMenu()"
          active-class="my-menu-link"
        >
          <q-item-section avatar>
            <q-icon color="blue" size="32px" name="help" />
          </q-item-section>
          <q-item-section>帮 助</q-item-section>
        </q-item>

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: false,
      link: 'myTokenList',
      title: '我发的币'
    }
  },
  methods: {
    selectMenu () {
      if (this.link === 'myTokenList') {
        this.title = '我发的币'
      } else if (this.link === 'easyToken') {
        this.title = '一键发币'
      } else if (this.link === 'easyTokenHelp') {
        this.title = '帮 助'
      }
    }
  }
}
</script>

<style lang="stylus">
.my-menu-link
  color white
  background-color #027BE3
  font-weight bold
</style>
