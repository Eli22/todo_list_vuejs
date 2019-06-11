export default class Todo{
    constructor(){
        this.id = 0;
        this.descricao = "";
        this.concluido = false;
    }
    /*Criar get e set é opicional*/
    setId(id){
        this.id = id;
    }
    setDescricao(descricao){
        this.descricao = descricao;
    }
    
    getId(){
        return this.id;
    }
    getDescricao(){
        return this.descricao;
    }
}