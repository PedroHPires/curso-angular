 console.log(nomeFunction())
 function nomeFunction(){//                              AQUI TEM HOISTING
    return "Pedro henrique"
 }
 const nomeArrowFunction = () => "Pedro Henrique"// |    AQUI NÃO TEM HOISTING 
 console.log(nomeFunction())//                      |
 