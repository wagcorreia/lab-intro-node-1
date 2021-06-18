![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# Intro to Node

## Introduction

In this Lab we're gonna practice OOP (Object Oriented Programming) and algorithms some more. This is a simple Lab where you're supposed to develop a class, instantiate it and test the results yourself. No automated testing in this one, but you can write your own if you want :)

## Requirements

- Fork this repo
- Clone this repo

## Submission

- Upon completion, run the following commands:

  ```
  git add .
  git commit -m "done"
  git push origin master
  ```

- Create Pull Request so your TAs can check up your work.

## Project Structure

Before we start coding, let's explain the provided project structure:

```
.
├── test
│   └── index.spec.js
└─ package.json
└─ index.js
```

We are going to be working with the **`index.js`** file. Here we will write the implementation of our `SortedList` class.

You can test your code using a tool like RunJS or Repl.it. Just paste the code you write there into **`index.js`** after you are done.

## Instructions

The task here is to create a class that maintains a **sorted list of numbers in ascending order**.

Go in the `index.js` file and there you will find the bare bones of the _SortedList_ class.

The **SortedList** class will have the following methods:

### Iteration 1: constructor()

`new SortedList` should create a new object from the `SortedList` class.

The object should have two properties: `items` and `length`.

- `items` should be an array,
- `length` should be the number of elements in the array.

### Iteration 2: add(item)

The `add(item)` method should add the value `item` to the items array, ensuring that **the items array stays sorted in ascending order**.
What does this mean? Well, if an array of items has these elements: `[2, 5, 7]`, and if `6` is added, the array of items should be as follows: `[2, 5, 6, 7]`.

Here you should also make sure that the length property gets updated accordingly when new items are added to the list.

### Iteration 3: get(pos)

The `get(pos)` method will get the value at index `pos` in the list. <br>
_Example_: if an instance of SortedList has elements: [2, 5, 7], when `get(2)` called, return should be `7` since this is element in that position in the array. Check the tests to see more examples.

In addition, make sure you _throw_ an error with the message _OutOfBounds_ if a user tries to get an element in the non-existing position (e.g. _if the array has 5 elements and we are trying to get the element on the position 7_).

To throw an error, you can do the following:

```js
throw new Error("OutOfBounds");
```

<!-- ### Iteration 4: make that list sorted!

Up to this moment, in the `add(item)` method we were just adding elements in the array of _items_. Our ultimate goal is to make this array _sorted in ascending order_. <br>
What does this mean? Well, if array of items has these elements: [2, 5, 7], if `6` is added, the array of items should be as follows: [2, 5, 6, 7]. See the failing tests for more examples and details. -->

### Iteration 4: max()

The `max()` method should return the highest value of the array.

In case you have an empty `SortedList`, you must throw an error with the message "EmptySortedList". For this, you can use:

```js
throw new Error("EmptySortedList");
```

### Iteration 5: min()

The `min()` method should return the lowest value of the array.

In case you have an empty `SortedList`, you must throw an error with the message "EmptySortedList".

## Bonus iterations

### Iteration 6: sum()

The `sum()` method should return the sum value of the array. At this point, we will not tell you anything else. Just go ahead and check the corresponding test and see if anything else needs to be added. You can do this! :heart:

### Iteration 7: avg()

The `avg()` method should return the average value of the array.

Just as before, check the corresponding test to see if there's anything else that needs to be added.

And you have reached the end!

Happy Coding! :heart:
