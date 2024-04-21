// Given two strings, write a function to determine if the second
// string is an anagram of the first. An anagram is a word, phrase,
// or name formed by rearranging the letters of another, such as
// cinema, formed from iceman.
// Example: '' & '' -> true
// Example: 'aaz' & 'zza' -> false
// Example: 'anagram' & 'nagaram' -> true
// Example: 'rat' & 'car' -> false
// Example: 'qwerty' & 'qeywrt' -> true
// Example: 'texttwisttime' & 'timetwisttext' -> true

const anagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  let frequencyString1 = {};
  let frequencyString2 = {};
  for (let character of str1) {
    frequencyString1[character] = (frequencyString1[character] || 0) + 1;
  }
  for (let character of str2) {
    frequencyString2[character] = (frequencyString2[character] || 0) + 1;
  }
  for (let key in frequencyString1) {
    if (frequencyString1[key] !== frequencyString2[key]) {
      return false;
    }
  }
  return true;
};

const anagram2 = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  let frequencyString = {};
  for (let character of str1) {
    frequencyString[character] = (frequencyString[character] || 0) + 1;
  }
  for (let character of str2) {
    if (!frequencyString[character]) {
      return false;
    } else {
      frequencyString[character] -= 1;
    }
  }
  return true;
};

console.log(anagram2("texttwisttime", "timetwisttext"));
console.log(anagram2("qwerty", "qeywrt"));
console.log(anagram2("anagrams", "anagramm"));
