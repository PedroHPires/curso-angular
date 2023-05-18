// TypeScript
// nmp installl -g typescript
// tsc --init

// Plugin: Code Runner
// nmp i -g ts -node
// ctrl + alt + n

console.log("npm install -g typescript")
const pedido = (pedido: any) => {
    return `Deu bom o seu pedido ${pedido}`
}
console.log(pedido(123))