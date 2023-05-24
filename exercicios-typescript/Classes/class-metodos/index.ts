class Pessoa1 {
    nome: string;
    idade: number;
    pessoa: boolean = true;

    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade; 
    };
    comer(comida: string){
        return `O ${this.nome} comeu ${comida}`
    };
    fezAniversario(){
        return `O ${this.nome} agora tem ${this.idade + 1} anos`
    };
};

const pessoa1 = new Pessoa("Pedro Henrique", 19)

//console.log(pessoa1);
//console.log(pessoa1.nome);
//console.log(pessoa1.idade);
//console.log(pessoa1.pessoa)
console.log(pessoa1.comer("Salgado"));
console.log(pessoa1.fezAniversario());