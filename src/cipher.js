

const cipher = {
    
 encode: function(offset, string){
     
    let cipherText = "";
        //for loop para obter o valor unicode de cada index da string
    for(i=0; i<=string.lenght; i++) {
        //Letra A na tabela ASCII tem valor 65, letra Z tem valor 90
        if(string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
            //formula do Daniel 
           let newString = string.charCodeAt(i) - 65 + offset %26 + 65;
        }
        cipherText+=String.fromCharCode(newString);
    }
    return cipherText;
 }

//  decode: function(){

//  }

};
  
export default cipher;



