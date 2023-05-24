class Pessoa {
    private nome: string;
    private idade: number;

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

 
