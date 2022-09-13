//Variaveis e Arrays
var HarryPotter = ["https://m.media-amazon.com/images/I/51lRMYwP-4L.jpg","https://m.media-amazon.com/images/I/51PHM1T3wuL._SY346_.jpg","https://m.media-amazon.com/images/I/515TcMeZStL._SY346_.jpg","https://m.media-amazon.com/images/I/515pFJ2KfVL._SY346_.jpg","https://m.media-amazon.com/images/I/519namgWJTL._SY346_.jpg","https://m.media-amazon.com/images/I/519WGXbWCaL._SY346_.jpg","https://m.media-amazon.com/images/I/51-lxNye+pL.jpg"];

// metodo alternativo para adicionar um item a array
// nome da variente.push("nome");


// Strings
//   valor inicial  parâmetro 2     parâmetro 3
for (var i = 0; i < HarryPotter.length; i++) {

    document.write("<img src=" + HarryPotter[i] + ">");

} /* Como funciona: 
Estrutura:

var indice = 0; = valor inicial
indice < 8; ou HarryPotter.length = condição
indice ou i = indice + 1 ou indice++ = expressão final 

Lógica:
1. verifica item dentro das chaves;
2. veririfca do último parâmetro até o primeiro;

*/