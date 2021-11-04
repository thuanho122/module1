// CÁCH1
// let year = parseInt(prompt("Enter a year"));
// if (year % 4 == 0) {
//     if (year % 100 == 0) {
//       if (year % 400 == 0) {
//         alert(year + " is a leap year");
//       } else {
//         alert(year + " is NOT a leap year");
//       }
//     } else {
//       alert(year + " is a leap year");
//     }
//   } else {
//     alert(year + " is NOT a leap year");
//   }


// CÁCH 2
// let year = parseInt(prompt("Enter a year"));
// let isLeapYear = false;

// if (year % 4 == 0) {
//   if (year % 100 == 0) {
//     if (year % 400 == 0) {
//       isLeapYear = true;
//     }
//   } else {
//     isLeapYear = true;
//   }
// }

// if (isLeapYear) {
//   alert(year + " is a leap year");
// } else {
//   alert(year + " is NOT a leap year");
// }

// CÁCH 3

var year = parseInt(prompt("Enter a year"));
        var isLeapYear = false;

        var isDivisibleBy4 = year % 4 == 0;
        if(isDivisibleBy4){
            var isDivisibleBy100 = year % 100 == 0;
            if(isDivisibleBy100){
                var isDivisibleBy400 = year % 400 == 0;
                if(isDivisibleBy400){
                    isLeapYear = true;
                }
            } else {
                isLeapYear = true;
            }
        }

        if(isLeapYear){
            alert(year + " is a leap year");
        } else {
            alert(year + " is NOT a leap year");
        }