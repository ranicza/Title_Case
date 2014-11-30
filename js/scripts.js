var titleCase = function(word){
    var sum_el = "";
    var split_sentense = word.split(" ");

    split_sentense.forEach(function(el){
        var s1 = el.charAt(0).toUpperCase();
        var s2 = el.slice(1).toLowerCase();
        var result = s1.concat(s2);
        sum_el += result + " ";
    });
    return sum_el;
}

