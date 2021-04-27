<template>
  <div class="login-form">
    <Logo class="logo" />
    <div class="text">
      <p>Bem-vindo(a) ao Dashboard</p>
      <h2>Entre na sua conta</h2>
    </div>
    <span :class="error">Email ou senha incorreto</span>
    <form class="form" @submit.prevent="submit">
      <input
        v-model="form.email"
        class="email-input"
        type="email"
        placeholder="Email"
      />
      <div class="password">
        <input
          v-model="form.password"
          placeholder="Senha"
          class="password-input"
          :type="passwordType"
        />
        <div class="passwordToggle" @click="passwordToggleIcon">
          <img
            v-if="seePassword"
            src="@/assets/img/visible.svg"
            alt="Esconder Senha"
          />
          <img v-else src="@/assets/img/invisible.svg" alt="Ver Senha" />
        </div>
      </div>
      <button class="button" type="submit">Entrar</button>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { auth } from '@/store'

export default Vue.extend({
  data() {
    return {
      seePassword: false,
      error: 'error-message-off',
      form: {
        email: '',
        password: ''
      }
    }
  },
  computed: {
    passwordType() {
      if (this.seePassword) return 'text'
      else return 'password'
    }
  },
  methods: {
    async submit() {
      try {
        await auth.login(this.form)
        this.$router.push('/dashboard')
      } catch (error) {
        this.error = 'error-message'
        console.log(error)
      }
    },
    passwordToggleIcon() {
      this.seePassword = !this.seePassword
    }
  }
})
</script>

<style lang="scss" scoped>
.login-form {
  display: grid;
  grid-gap: 1em;
  align-items: center;
  padding: 5em 3em;
  width: 425px;
  color: color('light');
  background-color: color('dark', 'darkest');
  border-radius: 20px;
  box-shadow: -1px 4px 21px 9px rgba(0, 0, 0, 0.2);
  .logo {
    width: 100px;
    margin-bottom: 2em;
  }
  .error-message {
    margin: 1em auto;
    font-size: 13px;
    color: red;
    opacity: 1;
  }
  .error-message-off {
    margin: 1em auto;
    font-size: 13px;
    color: red;
    opacity: 0;
  }
  .form {
    display: grid;
    grid-gap: 1rem;
    .email-input,
    .password {
      display: grid;
      grid-template-columns: 1fr 10px;
      background-color: color('dark', 'darkest');
      border: 1px solid color('light');
      padding: 0.75em 1.3em;
      border-radius: 25px;
      color: color('light');
      align-items: center;
      &:focus {
        border: 2px solid color('light');
      }
      .password-input {
        color: color('light');
        background-color: transparent;
      }
      .passwordToggle {
        margin-top: 1px;
        cursor: pointer;
        img {
          width: 18px;
        }
      }
    }
    .password {
      padding: 0.5959em 1.3em;
      &:focus {
        border: 2px solid color('light');
      }
    }
    .button {
      display: grid;
      justify-items: center;
      margin-top: 2em;
      padding: 0.75em 1.3em;
      border-radius: 25px;
      color: color('dark', 'darkest');
      background-color: color('light');
      font-weight: bold;
      cursor: pointer;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      &:hover {
        background-color: color('light');
        background-color: rgb(194, 193, 193);
      }
    }
  }
}
</style>
