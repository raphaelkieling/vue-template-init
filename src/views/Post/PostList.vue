<template>
  <div>
    <router-link to="post/create">
      <md-button class="md-raised md-primary">Cadastrar</md-button>
    </router-link>

    <br>
    <md-table v-model="posts">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID" md-sort-by="id" md-numeric>{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Título" md-sort-by="title">{{ item.title }}</md-table-cell>
        <md-table-cell md-label="Ações">
          <md-button class="md-icon-button">
            <md-icon>update</md-icon>
          </md-button>

          <md-button class="md-icon-button">
            <md-icon>edit</md-icon>
          </md-button>

          <md-button class="md-icon-button">
            <md-icon>delete</md-icon>
          </md-button>
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
import PostApi from "@/api/post";
export default {
  data: () => ({
    posts: []
  }),
  mounted: function() {
    this.$store.commit("system/loading", {
      active: true,
      message: "Carregando Posts"
    });
    PostApi.getAll().then(response => {
      this.posts = response.data;
      this.$store.commit("system/loading", { active: false });
    });
  }
};
</script>