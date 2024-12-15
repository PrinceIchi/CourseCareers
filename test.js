let arr = ['west side', '1987', 'i am the best', 'oh yeah']

function removeAllChars(arrayOfStrings, charactersToRemove) {
   const newArray = [];

   for (const str of arrayOfStrings) {
      let newStr = "";
      for (const char of str) {
         if (charactersToRemove.includes(char)) {
            continue;
         }
         newStr += char;
      }
      newArray.push(newStr);
   }
   return newArray;
}

const result = removeAllChars(
   arr,
   ['9', 's', 'l']
);
console.log(result)