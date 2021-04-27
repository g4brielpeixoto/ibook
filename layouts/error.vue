<template>
  <div class="error">
    <img src="@/assets/img/404.svg" alt="Error 404" />
    <div class="text">
      <span>A página que você está procurando não existe ou foi removida</span>
    </div>
    <div class="button">
      <NuxtLink to="/"> Voltar para Home </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="scss" scoped>
.error {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: color('dark', 'darkest');
  color: color('light');
  padding: 3rem;
  justify-items: center;
  align-items: center;
  display: grid;
  grid-row: start;
  img {
    width: 480px;
  }
  .text {
    width: 300px;
    text-align: center;
  }
  .button {
    padding: 0.5em;
    background-color: color('light');
    transition: 0.5s;
    cursor: pointer;
    font-weight: bold;
    border-radius: 25px;
    &:hover {
      background-color: rgb(194, 193, 193);
    }
    a {
      color: color('dark', 'darkest');
      text-decoration: none;
    }
    a:hover {
      color: color('dark', 'darkest');
      text-decoration: none;
    }
  }
}
</style>
