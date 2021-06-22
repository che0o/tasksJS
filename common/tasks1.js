var string = "Привет! Как дела?";

var vowels = ["а", "у", "о", "ы", "и", "э", "я", "ю"," ё", "е"];

var getVowels = stringFilter => {
    var comparisonElement = "";

    for (let i = 0; i < stringFilter.length; i++) {
        var element = stringFilter[i].toLowerCase();
        if (vowels.includes(element)) {
            comparisonElement += element;
        }
    }

    return comparisonElement;
}


console.log(getVowels(string));