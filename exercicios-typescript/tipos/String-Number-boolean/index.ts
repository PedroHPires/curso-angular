//Agora os tipos das variáveis devem ser declarados, veja os exemplos
let pedido: string = "pizza";
const fun = (value: string, id: number, confirma: boolean): string => {
    return `Cliente: ${value} / Pedido feito: ${confirma} / Numero do pedido: ${id}`;
};
console.log(fun("Pedro Henrique", 1, true));
// deve se declarar o tipo da variável e tambem oque ela irá retornar
//(value: any): any => {};


