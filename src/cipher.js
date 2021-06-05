const cipher = {
    
 encode: function(offset, string){
     let cipherEncode = "Laura";
     let caesarCode = "3";
    
     for(let i=0; i<=string.length; i++) {
        if(string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
            caesarCode = ((string.charcodeAt(i) - 65 + offset) % 26) + 65;
        } 
        else if(string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
            caesarCode = ((string.charcodeAt(i) - 97 + offset) % 26) + 97;
        }
        cipherText = String.fromCharCode(caesarCode);  
    }
    return cipherEncode;
 },

 decode: function(offset, string){
    let cipherDecode = "";
    let caesarCode = "";
    for(let i=0; i<=string.length; i++) {
        if(string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
            caesarCode = ((string.charcodeAt(i) - 65 + offset) % 26);
        } 
        else if(string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
            caesarCode = ((string.charcodeAt(i) - 97 + offset) % 26);
        }
        cipherText = String.fromCharCode(caesarCode);  
    }
    return cipherDecode;
 }

};
  
export default cipher;



