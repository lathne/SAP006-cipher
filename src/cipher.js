const cipher = {
    
 encode: function(offset, string){
      //Se o tipo do offset não for um número de uma mensagem de erro
      if(offset == null || !string) {
      throw new TypeError('A chave precisa ser um número');
   } 

     let cipherEncode = "";
     let offsetNumber = parseInt(offset, 10);
     
     for(let i=0; i<=string.length; i++) {
        let charCode = string.charCodeAt(i);
            //numeros
         if(charCode >= 48 && charCode <= 57) {
            let switchCode = ((charCode - 48 + offsetNumber) % 26) + 48;
            cipherEncode += String.fromCharCode(switchCode); 
         } //letras maiusculas
         else if(charCode >= 65 && charCode <= 90) {
            let switchCode = ((charCode - 65 + offsetNumber) % 26) + 65;
            cipherEncode += String.fromCharCode(switchCode);     
         } //letras minusculas
         else if(charCode >= 97 && charCode <= 122) {
            let switchCode = ((charCode - 97 + offsetNumber) % 26) + 97;
            cipherEncode += String.fromCharCode(switchCode); 
         } //espaço, exclamação e @
         else if(charCode == 32 || charCode == 33 || charCode == 64) {
           //retorne o caractere nesse index específico 
            cipherEncode += string.charAt(i);
         } //sinais e pontuação " # $ % & ' () * + , - . /
         else if(charCode >= 34 && charCode <= 47) {
            cipherEncode += string.charAt(i);
         } //sinais e pontuação : ; < = > ?
         else if(charCode >= 58 && charCode <= 63) {
            cipherEncode += string.charAt(i);
         }
     }
   console.log(cipherEncode);
   return cipherEncode;
 },

 decode: function(offset, string){
    if(offset == null || !string) {
      throw new TypeError('A chave precisa ser um número');
   } 

    let cipherDecode = "";
    let offsetNumber = parseInt(offset);
     
    for(let i=0; i<=string.length; i++) {
      let charCode = string.charCodeAt(i);
      
      if(charCode >= 48 && charCode <= 57) {
         let switchCode = 48-((48 - charCode + offsetNumber) % 26);
         cipherDecode += String.fromCharCode(switchCode); 
      } 
      else if(charCode >= 65 && charCode <= 90) {
         let switchCode = 90-((90 - charCode + offsetNumber) % 26);
         cipherDecode += String.fromCharCode(switchCode);  
      } 
      else if(charCode >= 97 && charCode <= 122) {
         let switchCode = 122-((122 - charCode + offsetNumber) % 26);
         cipherDecode += String.fromCharCode(switchCode); 
      }     
      else if(charCode == 32 || charCode == 33 || charCode == 64) {
         cipherDecode += string.charAt(i);
      }
      else if(charCode >= 34 && charCode <= 47) {
         cipherDecode += string.charAt(i);
      }
      else if(charCode >= 58 && charCode <= 63) {
         cipherDecode += string.charAt(i);
      }      
    }
    console.log(cipherDecode);
    return cipherDecode;
 }

};
  
export default cipher;