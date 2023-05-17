function Name(name,sobrenome){
    this.name = name;
    this.sobrenome = sobrenome
    this.nomeCompleto = () => {
        let nomeCompleto = `${name} ${sobrenome}`;
        return nomeCompleto;
    };
}
const pedro = new Name("Pedro Henrique", "Pires Moreira");
const luciana = new Name("Luciana","Amorin");
console.log(pedro.name)
console.log(pedro.sobrenome)
console.log(pedro.nomeCompleto())
console.log(luciana.name)
console.log(luciana.sobrenome)
console.log(luciana.nomeCompleto())
