/**
 * Direction:
 * Swap these numbers without using temporary variable
 *
 * Expected Result:
 * {
 *  a: 4,
 *  b: 2
 * }
 */
let numbers = {
  a: 2,
  b: 4
 };

function result(numbers) {
   // Your Code Here
   numbers.a = numbers.a + numbers.b;
   numbers.b = numbers.a - numbers.b;
   numbers.a = numbers.a - numbers.b;

   var result = "a: " + numbers.a +  ",\nb: " + numbers.b;

   return result;
}
 
console.log(result(numbers));
 