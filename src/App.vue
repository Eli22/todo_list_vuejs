<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-2">
        <label for="inline-form-input-name">Atividade</label>
      </div>
      <div class="col-8">
        <b-input
          id="itemForm"
          class="mb-2 mr-sm-2 mb-sm-0"
          placeholder="Atividade a fazer..."
          v-model="descricao"
          v-on:keypress.enter="adicionar(descricao)"
        ></b-input>
      </div>
      <div class="col-2">
        <!-- Informar o objeto ou variavel dessa forma você passa a referencia -->
        <b-button variant="primary" v-on:click="adicionar(descricao)">Adicionar</b-button>
      </div>
    </div>
    <br>
    <br>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Nº</th>
          <th scope="col">Atividade</th>
          <th scope="col">Remover</th>
        </tr>
      </thead>
      <tbody>
        <tr scope="row" v-for="(atividade, index) in atividades" :key="atividade.index">
          <td>{{atividade.index}}</td>
          <td>{{atividade.texto}}</td>
          <td>
            <!-- Utilizar @ no lugar do v-on tem o mesmo resultado -->
            <button @click="remover(index)">X</button>
          </td>
        </tr>
      </tbody>
    </table>
    <hr />

    <h1>Todo List Class</h1>
    <div>
      <input type="text" v-model="todo.descricao">
      <button @click="add(todo)">Adicionar</button>
    </div>

    {{todos}}
    <div>
      <ul>
        <li v-for="todo in todos" :key="todo.id" @click="todo.concluido = !todo.concluido" :class="todo.concluido ? 'terminou' : ''">
          {{todo.descricao}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Todo from './models/Todo';
export default {
  name: "app",
  components: {},
  data: () => ({
    todo : new Todo(),
    todos : [],
    descricao: "",
    atividades: []
  }),
  methods: {
    add(value){
      if(value.descricao){
        /** Spread Operator */
        this.todos.push({...value});
        this.todo = new Todo();
      }
    },
    /*
    finish(obj){
      Ta ligado né?
      obj.concluido = !obj.concluido; 
  },*/
    adicionar: function(descricao) {
      if (descricao) {
        this.atividades.push({
          index: this.atividades.length + 1,
          texto: descricao
        });
        this.descricao = "";
      }
    },

    remover(index) {
      this.atividades.splice(index, 1);
    },

    alterar() {}
  }
};
</script>

<style>
.terminou{
  text-decoration-line:line-through
}
</style>
