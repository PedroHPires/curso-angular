let tenis = {
    tamanho: 45,
    estoque: true
}
let produto = {
    id: 001,
    quantidade: 238,
    preco: 259.90
}
let clone1 = tenis;
console.log(1,clone1);
console.log(2,tenis);

let mesclar1 = Object.assign(tenis, produto);
let mesclar2 = {...tenis,...produto};
clone1.estoque = false;
mesclar1.id = 002;

console.log(3,clone1);
console.log(4,tenis);
console.log(5,mesclar1);
console.log(6,mesclar2);