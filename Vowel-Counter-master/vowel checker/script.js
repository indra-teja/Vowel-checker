document.addEventListener("DOMContentLoaded", function() {
    const inputText = document.getElementById("inputText");
    const countVowelsButton = document.getElementById("countVowels");
    const resultElement = document.getElementById("result");

    countVowelsButton.addEventListener("click", function() {
        const text = inputText.value;
        const vowelCount = countVowels(text);
        resultElement.textContent = `Total Vowels: ${vowelCount}`;
    });

    function countVowels(text) {
        let vowelCount = 0;
        const vowels = ["a", "e", "i", "o", "u"];
        for (let i = 0; i < text.length; i++) {
            const char = text.charAt(i).toLowerCase();
            if (vowels.includes(char)) {
                vowelCount++;
            }
        }
        return vowelCount;
    }
});