// function calculate(operation) {
//   switch (operation) {
//     case "ADD":
//       return function (a, b) {
//         console.log(`${a} + ${b} = ${a + b}`);
//       };
//     case "SUBTRACT":
//       return function (a, b) {
//         console.log(`${a} - ${b} = ${a - b}`);
//       };
//   }
// }

// const add = calculate("ADD")(5, 6);
// const subtract = calculate("SUBTRACT");
// // console.log(add(1, 2));

// function withOpacity(variableName) {
//   return ({ opacityValue }) => {
//     if (opacityValue !== undefined) {
//       return `grimey rgba(var(${variableName}), ${opacityValue})`;
//     }
//     console.log('hej', opacityValue);
//     return `rgb(var(${variableName}))`;
//   };
// }

// const color = withOpacity("--color-text-base")({ opacityValue: 0.5 });
// console.log(color);

async function hello() {
  return await Promise.resolve("Hello!");
}
const data = hello();
console.log(data);
console.log(Promise.resolve(123));
