function runLengthEncoding(string){
    let nombre = 0;
    let char = string[0];
    let encoder = "";

    for(i = 0; i <= string.length; i++){
        if(string[i] == char && nombre < 9){
            nombre++;
        }else{
            encoder += nombre + char;
            nombre = 1;
            char = string[i];
        }
    }

    return encoder;
}

// Merci de ne pas effacer la ligne en dessous.
exports.runLengthEncoding = runLengthEncoding;