class Pessoa {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade; 
    };
    public comer(comida: string){
        return `O ${this.nome} comeu ${comida}`
    };
    fezAniversario(){
        return `O ${this.nome} agora tem ${this.idade + 1} anos`
    };
};
 const pessoa = new Pessoa("Pedro Henrique", 19);

 class Funcionario extends Pessoa {
    cadastro: number;
    constructor(nome: string, idade: number, cadastro: number){
        super(nome, idade);
        this.cadastro = cadastro;
    }
 };
  const joão = new Funcionario("João", 25, 354423);

  console.log(joão.cadastro);
 
