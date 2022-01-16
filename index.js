// // Your code here
// const dodger = document.getElementById("dodger");

// function moveDodgerLeft() {
//     const leftNumbers = dodger.style.left.replace("px", "");
//     const left = parseInt(leftNumbers, 10);
  
//     if (left > 0) {
//       dodger.style.left = `${left - 1}px`;
//     }
//   }

// document.addEventListener("keydown", function (e) {
// if (e.key === "ArrowLeft") {
//     moveDodgerLeft();
// }
// });

// function moveDodgerRight() {
//     const rightNumbers = dodger.style.left.replace("px", "");
//     const right = parseInt(rightNumbers, 10);
  
//     if (right > 40) {
//       dodger.style.left = `${right + 1}px`;
//     }
//   }

// document.addEventListener("keydown", function (e) {
// if (e.key === "ArrowRight") {
//     moveDodgerRight();
// }
// });


/// REVIEW

const dodger = document.getElementById('dodger');
dodger.style.backgroundColor = "#FF69B4";

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});


const moveDodgerLeft = () => {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    if (left>0) {
      dodger.style.left = `${left - 1}px`;
    }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    moveDodgerRight();
  }
});


const moveDodgerRight = () => {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    if (left>40) {
      dodger.style.left = `${left + 1}px`;
    }
}

