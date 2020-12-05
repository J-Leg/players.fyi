/**
 * String to RGB code
 * @param input - input string
 * @returns 6-digit hex
 */
export function stringToRgb(input: string): string {
  return intToRGB(hashCode(input))
}

/**
 * Get hash code of a string
 * https://stackoverflow.com/questions/3426404/create-a-hexadecimal-colour-based-on-a-string-with-javascript
 * @param input - input string
 * @returns hash code
 */
function hashCode(input: string): number { 
  var hash = 0;
  for (var i = 0; i < input.length; i++) {
    hash = input.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
} 

/**
 * Integer to colour code
 * @param input - integer 
 * @returns 6-digit hex
 */
function intToRGB(input: number){
  var result: string = '#'
  for (var i = 0; i < 3; i++) {
    var value = (input >> (i * 8)) & 0xFF;
    result += ('00' + value.toString(16)).substr(-2);
  }
  return result
}

