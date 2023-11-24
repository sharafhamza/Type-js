// let type = document.querySelector(".shawon");
// let text = type.innerHTML.split("");
// let plaintext = type.innerHTML;
// let count = -1;

// type.innerHTML = ""

//  let typejs = () =>{
//     if(count < text.length){
//         count++;
//         type.innerHTML += plaintext.charAt(count);
//         text = plaintext.split("")
//     }else{
//         text.pop()
//         type.innerHTML = text.join("")
//         if(text.length == 0){
//             count = -1;
//         }
//     }
// }
// let stop = setInterval(()=>{
//     typejs()
// },100)

// const shawonElement = document.querySelector(".shawon");

// // Array of strings to type
// const textArray = [
//   "This is the first line.",
//   "And this is the second line.",
//   "Finally, the third line."
// ];

// let currentLineIndex = 0;
// let count = -1;

// shawonElement.textContent = "";

// const typeText = () => {
//   const currentLine = textArray[currentLineIndex];

//   if (count < currentLine.length - 1) {
//     count++;
//     shawonElement.textContent += currentLine.charAt(count);
//   } else {
//     // Move to the next line
//     currentLineIndex++;

//     // Reset the count when all lines are typed
//     if (currentLineIndex === textArray.length) {
//       currentLineIndex = 0;
//     }

//     // Clear the inner HTML of the element
//     shawonElement.textContent = "";
//     count = -1;
//   }
// };

// const typingInterval = setInterval(() => {
//   typeText();
// }, 100);

const shawonElement = document.querySelector(".shawon");

const textArray = [
  "This is the first line.",
  "And this is the second line.",
  "Finally, the third line."
];

let currentLineIndex = 0;
let count = -1;
let isTypingForward = true;

shawonElement.textContent = "";

const typeText = () => {
  const currentLine = textArray[currentLineIndex];

  if (isTypingForward) {
    // Typing forward
    if (count < currentLine.length - 1) {
      count++;
      shawonElement.textContent += currentLine.charAt(count);
    } else {
      // Switch to reverse typing
      isTypingForward = false;
      count--;
    }
  } else {
    // Typing in reverse
    if (count >= 0) {
      shawonElement.textContent = currentLine.substring(0, count);
      count--;
    } else {
      // Switch to typing forward for the next line
      isTypingForward = true;

      // Move to the next line
      currentLineIndex++;

      // Reset when all lines are typed
      if (currentLineIndex === textArray.length) {
        currentLineIndex = 0;
      }

      // Clear the inner HTML of the element
      shawonElement.textContent = "";
      count = -1;
    }
  }
};

const typingInterval = setInterval(() => {
  typeText();
}, 100);