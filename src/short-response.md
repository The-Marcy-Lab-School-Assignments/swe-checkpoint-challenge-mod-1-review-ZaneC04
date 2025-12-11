# Short Responses

For this assessment, aim to write a response with the following qualities:
- [ ] Addresses all parts of the prompt
- [ ] Accurately uses relevant technical terminology
- [ ] Is free of grammar and spelling mistakes
- [ ] Is easy to comprehend

For each prompt below, write your response in the space provided. Aim to answer each prompt in 2-5 concise sentences. Make sure to preview your markdown to check how it is rendered before submitting.

## Prompt 1

Consider the code below which has a bug. Instead of printing the correct letter grade, it always prints `"Your grade is: undefined"`.

```js
const getLetterGrade = (score) => {
  let letter;
  if (score >= 90) {
    let letter = "A";
  } else if (score >= 80) {
    let letter = "B";
  } else if (score >= 70) {
    let letter = "C";
  } else {
    let letter = "F";
  }

  return "Your grade is: " + letter;
}

console.log(getLetterGrade(95)); // This should print "Your grade is: A"
console.log(getLetterGrade(82)); // This should print "Your grade is: B"
console.log(getLetterGrade(74)); // This should print "Your grade is: C"
console.log(getLetterGrade(65)); // This should print "Your grade is: F"
```

**Part A**: Explain why this bug is occurring. Use proper technical terminology.

**Part B**: Then, explain how you would fix it.

### Response 1

**Part A:**

- This bug occurs due to `letter` being redeclared underneath each part of the `if else` statement. Since  `letter` was first declared outside of the `if` statement, there is no need to redeclare `letter` with `let` each time you want to reassign the variable. 

**Part B:**

- To fix this, you can remove every instance of `let` after `letter` is declared. This is shown below:
```js
const getLetterGrade = (score) => {
  let letter;
  if (score >= 90) {
    letter = "A";
  } else if (score >= 80) {
    letter = "B";
  } else if (score >= 70) {
    letter = "C";
  } else {
    letter = "F";
  }

  return "Your grade is: " + letter;
}

console.log(getLetterGrade(95)); // This should print "Your grade is: A"
console.log(getLetterGrade(82)); // This should print "Your grade is: B"
console.log(getLetterGrade(74)); // This should print "Your grade is: C"
console.log(getLetterGrade(65)); // This should print "Your grade is: F"
```

---

## Prompt 2

Read the following code:

```js
const originalSettings = { volume: 50, brightness: 80 };
const newSettings = originalSettings;
newSettings.volume = 75;
console.log(originalSettings.volume);
```

**Part A:** What will be logged to the console? Why does this happen? Be sure to use precise technical terminology in your answer.

**Part B:** How would you modify the code so that changing `newSettings.volume` does NOT affect `originalSettings.volume`? Write the corrected code below your explanation.

### Response 2

**Part A:**

- What will be logged into the console is the value of `originalSettings.volume` which will be `75`. This happens because when `newSettings` is being declared, `newSettings` is not copying the properties of `originalSettings`, but holding the reference. So when `newSettings.volume` gets changed to `75`, it will change `originalSettings`.

**Part B:**

- To fix this issue, you can use the spread operator to fill in a new object which will fill `newSettings` with the same properties as `originalSettings`, making it a true copy. 

**Corrected Code:**

```js
const originalSettings = { volume: 50, brightness: 80 };
const newSettings = {...originalSettings};
newSettings.volume = 75;
console.log(originalSettings.volume); // 50
console.log(newSettings.volume) // 75
```

---

## Prompt 3

Given this array of products and the code using `filter`:
```js
const products = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Phone", price: 700, inStock: false },
  { name: "Watch", price: 300, inStock: true },
  { name: "Tablet", price: 500, inStock: true },
];

const itemsInStock = products.filter((product) => {
  return product.inStock
});
```

Walk through what happens in the first iteration of filter:
- What is the value of `product`?
- What gets returned from the callback?
- What happens with that returned value?

### Response 3

- In the first iteration of `.filter`, `product` refers to each element in the `products` array. So during this iteration, `product` is the first object with the `name` property `"Laptop"`. 
- Since the callback function is checking if the `inStock` property is truthy and `"Laptop"` has `inStock` as `true`, `"Laptop"` will then be pushed into a new array as it meets the requirements.
