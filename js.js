// for (let i = 0; i < 7; i++) {
//   for (let j = 0; j < 7-i-1; j++) {
//     process.stdout.write(" ");
//   }
//   for (let j = 0; j < 2*i-1; j++) {
//     process.stdout.write("*");
//   }
//   for (let j = 0; j < 7-i-1; j++) {
//     process.stdout.write(" ");
//   }
//   console.log();
// }
// for (let i = 0; i < 7; i++) {
//   for (let j = 0; j < i; j++) {
//     process.stdout.write(" ");
//   }
//   for (let j = 0; j < 7 - 2 * i; j++) {
//     process.stdout.write("*");
//   }
//   for (let j = 0; j < i; j++) {
//     process.stdout.write(" ");
//   }
//   console.log();
// }
// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j < 2*i-1; j++) {
//     process.stdout.write("*");
//   }
//   console.log();}

//   for (let j = 0; j < 5; j++) {
//     for (let k = 0; k <5-j*2; k++) {
//       process.stdout.write("*");
//     }
//     console.log();
//   }
// let start = 1;
// for (let i = 0; i < 5; i++) {
//   if (i % 2 == 0) {
//     start = 0;
//   } else {
//     start = 1;
//   }
//   for (let j = 0; j < i; j++) {
//     process.stdout.write(String(start) + " ");
//     start = 1 - start;
//   }
//   console.log();
// }
// let space = 12
// for (let i = 1; i <= 6; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(String(j));
//   }
//   for (let j = 1; j <= space; j++) {
//     process.stdout.write(" ");
//   }

//   for (let j = i; j >=1; j--) {
//     process.stdout.write(String(j));
//   }
//   console.log();
//   space-=2

// }
// let num =1
// for (let index = 0; index < 6; index++) {
//   for (let j = 0; j <=index; j++) {
//     process.stdout.write(String(num)+ " ")
//     num=num+1;
//   }
//   console.log();
// }
// for (let index = 0; index < 6; index++) {
//   for (let ch="A".charCodeAt(0); ch <= "A".charCodeAt(0)+index; ch++) {
//       process.stdout.write(String.fromCharCode(ch));
//   }
//   console.log();
// }
// for (let index = 1; index < 6; index++) {
//   for (let ch="A".charCodeAt(0); ch <="A".charCodeAt(0) +(6-index -1) ; ch++) {
//       process.stdout.write(String.fromCharCode(ch));
//   }
//   console.log();
// }
// for (let i = 0; i < 6; i++) {
//   let ch = "A".charCodeAt(0) + i;
//   for (let j = 0; j <= i; j++) {
//     process.stdout.write(String.fromCharCode(ch));
//   }
//   console.log();
// }
// for (let i = 0; i <= 5; i++) {
//   // First loop: prints hyphens ("-") before the letters
//   for (let j = 0; j <= (15 - i); j++) {
//     process.stdout.write("-");
//   }

//   // Variables for the letter pattern
//   let breakpoint = 2 * i + 1;
//   // let ch = 'A'.charCodeAt(0);

//   // Second loop: prints uppercase letters in an increasing and then decreasing pattern
//   for (let ch = "A".charCodeAt(0); ch< "A".charCodeAt(0) + i; ch++) {
//     process.stdout.write(String.fromCharCode(ch));
//     if (ch <= breakpoint) {
//       break
//       // ch++;
//     } else {
//       ch--;
//     }
//   }

// Third loop: prints hyphens ("-") after the letters
//   for (let j = i; j <= (15 - i); j++) {
//     process.stdout.write("-");
//   }

//   // Move to the next line after completing each row
//   console.log();
// }
// Function to print a pyramid of uppercase letters
// function printAlphabetPyramid(rows) {
//   for (let i = 0; i < rows; i++) {
//     // Inner loop: prints spaces before the letters
//     for (let space = 0; space < rows - i - 1; space++) {
//       process.stdout.write("-");
//     }
//     // Inner loop: prints letters in increasing order
//     for (let j = 0; j <= i; j++) {
//       process.stdout.write(String.fromCharCode('A'.charCodeAt(0) + j));
//     }
//     // Inner loop: prints letters in decreasing order
//     for (let k = i - 1; k >= 0; k--) {
//       process.stdout.write(String.fromCharCode('A'.charCodeAt(0) + k));
//     }
//     // Move to the next line after completing each row
//     console.log();
//   }
// }

// Call the function with the desired number of rows (adjust as needed)
// printAlphabetPyramid(5);

// -----A-----
// ----ABA----
// ---ABCBA---
// --ABCDCBA--
// -ABCDEDBCA-

// for (let index = 0; index < 6; index++) {
//   for (let j = 0; j < 6; j++) {
//     process.stdout.write("- ")
//   }
//   console.log();
// }
// for (let i = 0; i < 5; i++) {
//   for (let index = 0; index < i; index++) {
// process.stdout.write("*")
//   }
//   console.log();
// }
// for (let i = 0; i < 6; i++) {
//   for (let j = 0; j < i; j++) {
//     process.stdout.write("*");
//   }
//   console.log();
// }
// for (let i = 0; i < 6; i++) {
// for (let k = 0; k < 6 - i - 1; k++) {
//     process.stdout.write("*");
//   }
//   console.log();}
// let n = 5;

// for (let index = 0; index <4; index++) {
//   for (let j = 0; j <= index; j++) {
//     process.stdout.write("*");
//   }
//   for (let j = 0; j <= 5 - 2 * index + 2; j++) {
//     process.stdout.write(" ");
//   }
//   for (let j = 0; j <= index; j++) {
//     process.stdout.write("*");
//   }
//   console.log();
// }
// for (let index = 0; index < 5; index++) {
//   for (let j = 0; j <= 5 - index - 1; j++) {
//     process.stdout.write("*");
//   }
//   for (let j = 0; j < 2 * index; j++) {
//     process.stdout.write(" ");
//   }
//   for (let j = 0; j <= 5 - index - 1; j++) {
//     process.stdout.write("*");
//   }
//   console.log();
// }
// for (let index = 0; index < 7; index++) {
//   for (let j = 0; j < 7 ;j++) {
//     if (index == 0||j==0||index==6||j==6) {
//       process.stdout.write("4 ")
//     } else if (index == 1||j==1||index==5||j==5){
//       process.stdout.write("3 ")
//     } else if (index == 2||j==2||index==4||j==4){
//       process.stdout.write("2 ")
//     }
//     else if (index == 3||j==3||index==3||j==3){
//       process.stdout.write("1 ")
//     }
//   }
//   console.log();
// }

// for (let i = 0; i < 2 * 4 - 1; i++) {
//   for (let j = 0; j < 2 * 4 - 1; j++) {
//     top = i;
//     down = 2 * 4 - 2 - i;
//     right = 2 * 4 - 2 - j;
//     left = j;
//     process.stdout.write(
//       `${7 - Math.min(Math.min(top, down), Math.min(right, left))} `
//           // process.stdout.write(`${7 - Math.min(top, down, right, left)} `);

//     )
//   }
//   console.log();
// }
// for (let i = 0; i < 2 * 4 - 1; i++) {
//   for (let j = 0; j < 2 * 4 - 1; j++) {
//     let top = i;
//     let down = 2 * 4 - 2 - i;
//     let right = 2 * 4 - 2 - j;
//     let left = j;

//     process.stdout.write(`${7 - Math.min(top, down, right, left)} `);
//   }
//   console.log(); // Move to the next line after each row
// }

// arrrryyy

// largest element in Array
// let array = [100,23,3556,67,78]
// smallest = array[0]
// for (let index = 0; index < array.length; index++) {
//   if (array[index] < smallest) {
//     smallest=array[index]

//   }

// }
// console.log(smallest);
//
//  second largest element

// let array = [12, 2, 323, 4, 5, 67];
// let largest = array[0];
// let secondlargest = -1;
// for (let index = 0; index < array.length; index++) {
//   if (array[index]>largest) {
//     secondlargest=largest
//     largest=array[index]

//   } else if (array[index]<largest && array[index]>secondlargest) {
//     secondlargest=array[index]

//   }
// }
// console.log("largest",largest);
// console.log("second largest",secondlargest);

// second largest and smnallest
// function getSecondOrderElements(n, a) {
//   let largest = a[0];
//   let secondLargest = -1;
//   let smallest = a[0];
//   let secondsmallest = Infinity;

//   for (let i = 0; i < n; i++) {
//     if (a[i] > largest) {
//       secondLargest = largest;
//       largest = a[i];
//     } else if (a[i] < largest && a[i] > secondLargest) {
//       secondLargest = a[i];
//     }

//     if (a[i] < smallest) {
//       secondsmallest = smallest;
//       smallest = a[i];
//     } else if (a[i] > smallest && a[i] < secondsmallest) {
//       secondsmallest = a[i];
//     }
//   }

//   return [secondLargest, secondsmallest];
// }

// // Example usage:
// let array = [5, 6, 9, 8, 1];
// let result = getSecondOrderElements(array.length, array);
// console.log("The second-largest element is:", result[0]);
// console.log("The second-smallest element is:", result[1]);

// //  sorted arry are not
// function sortedArrays(array) {
//   for (let index = 1; index < array.length; index++) {
//     if (array[index] >= array[index - 1]) {
//     } else {
//       return false;
//     }
//   }
//   return true;
// }
// let array = [12, 2, 34, 54, 67];
// console.log(sortedArrays(array));
// function secsmallest(array) {
//   smallest = array[0];
//   secondSmallest = -1;
//   for (let i = 1; i < array.length; i++) {
//     if (array[i] > smallest) {
//       secondSmallest=smallest
//       smallest=array[i]
//       process.stdout.write(String(smallest ))
//     }
//     else if (array[i]<smallest && array[i] > secondSmallest) {
//       secondSmallest = array[i]
//     } process.stdout.write("false ")
//   }
//   return [smallest,secondSmallest];
// }
// array = [56, 4, 1, 6, 8, 9];
// console.log(secsmallest(array));
function sorted(array) {
  sort = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < sort) {
      return false;
    }
    sort = array[i];
  }
  return true;
}
array = [1, 5, 6, 7];
console.log(sorted(array));