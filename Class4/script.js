/*let steps = 0;
console.log("The current No of stept is: " + steps);
const AddSteps = 10;
console.log("The current No of stept to add is: " + AddSteps);

function UpdateNoOfSteps() {
  steps += AddSteps;
  console.log("The current No of stept is: " + steps);
}

function ResetSteps() {
  steps = 0;
  console.log("The current No of stept is: " + steps);
}

UpdateNoOfSteps();
UpdateNoOfSteps();
UpdateNoOfSteps();

ResetSteps();
UpdateNoOfSteps(); */

let counter = 0;
const incrementValue = 1;

function increaseCounter() {
  counter += incrementValue;
  console.log("The count is: " + counter);
}

function resetCounter() {
  counter = 0;
  console.log("The count is: " + counter);
}
console.log("The count is: " + counter);
increaseCounter();
increaseCounter();
increaseCounter();
increaseCounter();
resetCounter();
increaseCounter();
increaseCounter();
resetCounter();
