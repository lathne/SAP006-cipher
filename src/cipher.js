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
         //sinais e pontuação " # $ % & ' () * + , - . /
         if(charCode >= 34 && charCode <= 47) {
            let switchCode = ((charCode - 34 + offsetNumber) % 26) + 34;
            cipherEncode += String.fromCharCode(switchCode); 
         } //numeros
         else if(charCode >= 48 && charCode <= 57) {
            let switchCode = ((charCode - 48 + offsetNumber) % 26) + 48;
            cipherEncode += String.fromCharCode(switchCode); 
         } //sinais e pontuação : ; < = > ?
         else if(charCode >= 58 && charCode <= 63) {
            let switchCode = ((charCode - 58 + offsetNumber) % 26) + 58;
            cipherEncode += String.fromCharCode(switchCode); 
         }//letras maiusculas
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
       
      if(charCode >= 65 && charCode <= 90) {
         let switchCode = 90-((90 - charCode + offsetNumber) % 26);
         cipherDecode += String.fromCharCode(switchCode);  
      } 
      else if(charCode >= 97 && charCode <= 122) {
         let switchCode = 122-((122 - charCode + offsetNumber) % 26);
         cipherDecode += String.fromCharCode(switchCode); 
      }
      else if(charCode >= 48 && charCode <= 57) {
         let switchCode = 48-((48 - charCode + offsetNumber) % 26);
         cipherDecode += String.fromCharCode(switchCode); 
      } 
      else if(charCode == 32 || charCode == 33 || charCode == 64) {
         cipherDecode += string.charAt(i);
      }
    }
    console.log(cipherDecode);
    return cipherDecode;
 }

};
  
export default cipher;


/*
encode 
 sinais, caracteres especiais e letras acentuadas 

else if (charCode >= 123 && charCode <= 165) {
let switchCode = ((charCode - 123 + offsetNumber) % 26) + 123;
cipherEncode += String.fromCharCode(switchCode); 
} 

decode
//sinais, caracteres especiais e letras acentuadas 

else if (charCode >= 123 && charCode <= 165) {
let switchCode = 123-((123 - charCode + offsetNumber) % 26);
cipherDecode += String.fromCharCode(switchCode); 
}
*/


     


     

   //       //sinais e pontuação : ; < = > ?
   //       else if(charCode >= 58 && charCode <= 63) {
   //          let switchCode = 58-((58 - charCode + offsetNumber) % 26);
   //          cipherDecode += String.fromCharCode(switchCode); 
   //      }
            //sinais e pontuação " # $ % & ' () * + , - . /
   //      if(charCode >= 34 && charCode <= 47) {
   //       let switchCode =  34-((34 - charCode + offsetNumber) % 26);
   //       cipherDecode += String.fromCharCode(switchCode); 
   //   } //numeros
   //   else if(charCode >= 48 && charCode <= 57) {
   //       let switchCode = 48-((48 - charCode + offsetNumber) % 26);
   //       cipherDecode += String.fromCharCode(switchCode); 
   //   } //letras maiusculas
   //   else if(charCode >= 65 && charCode <= 90) {
   //       let switchCode = 65-((65 - charCode + offsetNumber) % 26);
   //       cipherDecode += String.fromCharCode(switchCode);     
   //   } //letras minusculas
   //   else if(charCode >= 97 && charCode <= 122) {
   //       let switchCode = 97-((97 - charCode + offsetNumber) % 26);
   //       cipherDecode += String.fromCharCode(switchCode); 
   //   } //espaço, exclamação e @
   //   else if(charCode == 32 || charCode == 33 || charCode == 64) {
   //     //retorne o caractere nesse index específico 
   //       cipherDecode += string.charAt(i);
   //   }