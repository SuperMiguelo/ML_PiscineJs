function firstDuplicateValue(array){

    for (let var1 = 0; var1 < array.length; var1++)
        if(array[var1] <= 0 ){
            return "Le tableau contient des valeurs incorects";
        }

    for (let var2 = var1 + 1; var2 < array.length; var1++){
        if(array[var1] == array[var2]){
            return array[var1];
        }
    }

    return -1;
}
// Merci de ne pas effacer la ligne en dessous.
exports.firstDuplicateValue =  firstDuplicateValue;