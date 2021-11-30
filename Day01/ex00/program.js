function tabTriCarre(array){

    for(let i = 0; i < array.length; i++);
        array[i] = array[i] * array[i];

    function comparaison(num1, num2)
    {
        return num1 - num2;
    }

    array.sort(comparaison);
    return array;
}

// Merci de ne pas effacer la ligne en dessous.
exports.tabTriCarre =  tabTriCarre;