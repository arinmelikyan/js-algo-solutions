// first way (including phrases)
const isPalindrome = (str) => {
    const modifiedStr = str.trim().replace(/[^A-Z0-9]/ig, "");
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

isPalindrome('Do geese see God?');