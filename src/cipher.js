const cipher = {
    
 encode: function(offset, string){
     let cipherEncode = "";
     let offsetNumber = parseInt(offset);
     
     for(let i=0; i<=string.length; i++) {
        if(string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
           let caesarCode = ((string.charCodeAt(i) - 65 + offsetNumber) % 26) + 65;
           cipherEncode += String.fromCharCode(caesarCode);     
        } 
        else if(string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
            let caesarCode = ((string.charCodeAt(i) - 97 + offsetNumber) % 26) + 97;
            cipherEncode += String.fromCharCode(caesarCode); 
        }    
    }
   console.log(cipherEncode);
   return cipherEncode;
 },

 decode: function(offset, string){
    let cipherDecode = "";
    let offsetNumber = parseInt(offset);
     
    for(let i=0; i<=string.length; i++) {
       if(string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
          let caesarCode = 90-((90 - string.charCodeAt(i) + offsetNumber) % 26);
          cipherDecode += String.fromCharCode(caesarCode);  
       } 
       else if(string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
           let caesarCode = 122-((122 - string.charCodeAt(i) + offsetNumber) % 26);
           cipherDecode += String.fromCharCode(caesarCode); 
       }
    }
    console.log(cipherDecode);
    return cipherDecode;
 }

};
  
export default cipher;



