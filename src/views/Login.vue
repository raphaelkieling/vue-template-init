<template>
  <md-card id="login_card">
    <md-card-content>
      <div class="login_logo">
        <img src="https://image.flaticon.com/icons/svg/1161/1161388.svg" alt="Login logo">
      </div>

      <form novalidate class="md-layout" @submit.prevent="submit">
        <md-field>
          <label>Login</label>
          <md-input v-model="form.login" placeholder="Login"></md-input>
        </md-field>

        <md-field>
          <label>Senha</label>
          <md-input v-model="form.password" type="password"></md-input>
        </md-field>

        <md-button class="md-dense md-raised md-primary login_card--submit" type="submit">Entrar</md-button>
      </form>
    </md-card-content>
  </md-card>
</template>

<script>
export default {
  data: () => ({
    form: {
      login: "",
      password: ""
    }
  }),
  methods: {
    submit: function() {
      console.log("login");
      setTimeout(() => {
        this.$store.commit("system/loading", { active: false });
        this.$store.commit("system/notification", {
          active: true,
          message: "Mensagem"
        });

        this.$router.push("/dashboard");
      }, 2000);
      this.$store.commit("system/loading", {
        active: true
      });
    }
  }
};
</script>

<style scoped>
#login_card {
  position: relative;
  top: 20px;
  max-width: 400px;
  margin: 0 auto;
}

.login_logo {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login_logo img {
  width: 150px;
}

.login_card--submit {
  width: 100%;
  margin: 0;
}
</style>

