function checkSpam(subjects, words) {
    for (var i = 0; i < subjects.length; i++) {
        var subject = subjects[i];
        var result = "not spam";

        for (var j = 0; j < words.length; j++) {
            if (subject.includes(words[j])) {
                result = "spam";
                break;  // No need to check further if a match is found
            }
        }

        console.log(result);
    }
}

// Example usage:
var  subjects = ["check if this contains the word spam", "another subject with no spam", "not and down"];
var words = ["spam", "pop", "lock", "up"];

checkSpam(subjects, words);