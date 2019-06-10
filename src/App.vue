<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-2">
        <label for="inline-form-input-name">Atividade</label>
      </div>
      <div class="col-8">
        <b-input
          id="inline-form-input-name"
          class="mb-2 mr-sm-2 mb-sm-0"
          placeholder="Atividade a fazer..."
          v-model="descritpion"
        ></b-input>
      </div>
      <div class="col-2">
        <b-button variant="primary"  v-on:click="adicionar()">Adicionar</b-button>
      </div>
    </div>
    <br>
    <br>

    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Nº</th>
          <th scope="col">Atividade</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  data: () => ({
    atividade : '',
    atividades: []
  }),
  methods:{
    adicionar(){
      this.atividades.push(atividade);
    },

    remover(){

    },

    alterar(){

    }

  }
};

</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
