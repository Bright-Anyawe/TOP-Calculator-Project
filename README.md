# TOP-Calculator-Project
- create functions for the following items and testing them in your browser’s console:
add
subtract
multiply
divide

- Create three variables for each of the parts of a calculator operation. 
- Create a variable for the first number, the operator, and the second number,
- You’ll use these variables to update your display later.

- Create a new function (operate) that takes an operator and 2 numbers
 and then calls one of the above functions on the numbers.

 - Create a basic HTML calculator with buttons for each digit, each of the above functions
  and an “Equals” key.
 
 - Create the functions that populate the display when you click the number buttons.
  You should be storing the ‘display value’ in a variable somewhere for use in the next step.

- Make the calculator work! You’ll need to store the first number and second number
 that are input into the calculator, utilize the operator that the user selects,
  and then operate() on the two numbers when the user presses the “=” key.
  ### NOTE!!
  - If you want how I did it check the breakpoint in the Commit message!!

- watch out for and fix these bugs if they show up in your code: 

* Users should be able to string together several operations and get
the right answer, with each pair of numbers being evaluated at a time.
For example, 12 + 7 - 5 * 3 = should yield 42.

* Your calculator should not evaluate more than a single pair of numbers at a time.
 Example: you press a number button (12), followed by an operator button (+), 
 a second number button (7), and finally a second operator button (-).
  Your calculator should then do the following: first, evaluate the first pair of numbers (12 + 7),
   second, display the result of that calculation (19), and finally,
    use that result (19) as the first number in your new calculation, along with the next operator (-).
    
* You should round answers with long decimals so that they don’t overflow the screen.

* Pressing = before entering all of the numbers or an operator could cause problems!

* Pressing = before entering all of the numbers or an operator could cause problems!

* Display a snarky error message if the user tries to divide by 0… and don’t let it crash your calculator!
