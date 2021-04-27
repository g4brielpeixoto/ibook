<template>
  <div class="dashboard">
    <img src="@/assets/img/dashboard.svg" />
    <PageTitle text="Você está no" strong="Dashboard" />
    <button @click="logout">Logout</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { auth } from '@/store'

export default Vue.extend({
  methods: {
    logout() {
      auth.logout()
      this.$router.push('/login')
    }
  }
})
</script>

<style lang="scss" scoped>
.dashboard {
  display: grid;
  grid-gap: 3em;
  align-items: center;
  justify-items: center;
  img {
    width: 100px;
  }
  button {
    font-weight: bold;
    color: color('light');
    padding: 0.5em 1em;
    background-color: color('dark', 'darkest');
    cursor: pointer;
    transition: 0.25s;
    border-radius: 25px;
    &:hover {
      background-color: black;
    }
  }
}
</style>
