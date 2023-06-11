const str1 = 'Do geese see God? ';
const str2 = 'not a palindrome';
const str3 = 'Madam';


// first way (including phrases) | time complexity - O(n)
const isPalindrome = (str) => {
    const modifiedStr = str.replace(/[^A-Z0-9]/ig, "");
    let firstCharIndex = 0;
    let lastCharIndex = modifiedStr.length - 1;

    while(firstCharIndex < lastCharIndex) {
        const firstChar = modifiedStr[firstCharIndex];
        const lastChar = modifiedStr[lastCharIndex];

        if(firstChar.toLowerCase() !== lastChar.toLowerCase()) {
            return false;
        }

        firstCharIndex += 1;
        lastCharIndex -= 1;
    }

    return true;
}

isPalindrome(str1); // true

// second way (including phrases) | time complexity - O(n)
const isPalindrome2 = (str) => {
    const newStr = str.replace(/[^A-Z0-9]/ig, "").toLowerCase().split("").reverse().join("");

    return newStr === str.replace(/[^A-Z0-9]/ig, "").toLowerCase();
}

isPalindrome2(str2); // false