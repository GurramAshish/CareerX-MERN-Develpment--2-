function startquiz() {
  let div = document.getElementById("workingdiv");
  let div1 = document.getElementById("questionlabel");
  div.style.visibility = "visible";
  let a = getRandomNumber(1, 10);
  let b = getRandomNumber(1, 10);
  let add = `${a}+${b}`;
  // console.log(typeof(add))
  let add1 = parseInt(add);
  // console.log(typeof(add1))
  div1.innerHTML = add;
}
function bb() {
  let div1 = document.getElementById("questionlabel");
  let div123 = document.getElementById("answerinput");
  let div1122 = document.getElementById("lblscore");
  if (parseInt(div1) === div123.value) {
    answerlabel.innerHTML = "Correct Answer";
    div1122.innerHTML="10"
  } else {
    answerlabel.innerHTML = "Wrong Answer";
  }
}
//////////////////////////////////////////////////

/////////////////////////
////////////////////////////////////////////////////

// Function to generate a random number within a range
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to add two random numbers and display the result
function addRandomNumbers() {
  // Get the results container element
  const resultsContainer = document.getElementById("results");
  // Clear previous results
  resultsContainer.innerHTML = "";

  // Loop five times
  for (let i = 0; i < 5; i++) {
    // Generate two random numbers
    const num1 = getRandomNumber(1, 10);
    const num2 = getRandomNumber(1, 10);

    // Add the numbers
    const sum = num1 + num2;

    // Create a paragraph element to display the result
    const resultParagraph = document.createElement("div");
    resultParagraph.textContent = `${num1} + ${num2} = ${sum}`;

    // Append the paragraph to the results container
    resultsContainer.appendChild(resultParagraph);
  }
}
/////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
