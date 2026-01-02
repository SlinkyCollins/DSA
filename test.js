function reverseString(str) {
  // Base Case: If the string is empty, return an empty string
  if (str === '') {
    return '';
  }
  
  // Recursive Call: Returns the reverse of the substring (starting from the second character) 
  // and concatenates the first character to the END.
  return reverseString(str.substr(1)) + str.charAt(0);
}

console.log(reverseString("hello")); // Output: "olleh"