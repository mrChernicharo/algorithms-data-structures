function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  for (let letter of str1) {
    let correctIndex = str2.indexOf(letter); // indexOf() cria um novo loop, dentro do for ()

    if (correctIndex === -1) return false;
    else {
      str2.slice(correctIndex, 1);
    }
  }
  return true;
}

console.log(isAnagram("iracema", "america"));

// TimeComplexity => O(n^2)
