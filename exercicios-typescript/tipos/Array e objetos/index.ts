let array1: [string, string, number, boolean] = [
    "Pedro Henrique",
    "Pires Moreira",
    19,
    true
];
console.table(array1);
let array2: Array<string | number> = [
    "Pedro Henrique Pires Moreira",
    14,
    11,
    2003,
    "Macho"
];
console.table(array2);
let obj1: {nome: string, sobrenome: string, idade: number, saudavel: boolean} = {
    nome:"Pedro Henrique",
    sobrenome:"Pires Moreira",
    idade:19,
    saudavel: true
};
console.table(obj1);
let obj2: Array<{nome: string, sobrenome: string, idade: number, saudavel: boolean}> = [
    {
        nome:"Pedro Henrique1",
        sobrenome:"Pires Moreira",
        idade:19,
        saudavel: true  
    },
    {
        nome:"Pedro Henrique2",
        sobrenome:"Pires Moreira",
        idade:20,
        saudavel: false  
    },
    {
        nome:"Pedro Henrique3",
        sobrenome:"Pires Moreira",
        idade:21,
        saudavel: true  
    }  
];
console.table(obj2);