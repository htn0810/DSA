// Write a function read the string and return the object with keys that are lowercase alphanumeric characters
// in the string, the values should be number of exist

const isAlphabet = (char) => {
  return /^[a-zA-Z]$/.test(char);
};

function charCount(str) {
  const resultObj = {};
  for (character of str.toLowerCase()) {
    if (
      character.trim() !== "" &&
      (!isNaN(+character) || isAlphabet(character))
    ) {
      if (resultObj.hasOwnProperty(character)) {
        resultObj[character]++;
      } else {
        resultObj[character] = 1;
      }
    }
  }
  return resultObj;
}

const test = "Hello every body!";
console.log(charCount(test));
