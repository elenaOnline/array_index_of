# Array Index Of Hackathon Fun

## Intro

This project is a simple one where we need to build the most efficient
`indexOf` implementation for an array.

Assume you have an array of ordered elements that are non-contiguous. This
means your numbers go up, but there will be gaps between them:

```
[0, 1, 11, 19, 45, 88, 173, 288, 358, 484]
```

In this array we want to find the `index` to the number `288`. In JavaScript
you might do something like this: `arr.indexOf(288) // <- 7`. But the
strategy for this lookup is likely a loop over the data giving us a
**Big O of _n_** cost. This means that to find the last element (484) you
would have to touch all _n_ elements (10). But if your strategy had been to
start from the back you would have had a cost of (1) instead.

Our challenge is to find a general algorithm that can solve this in the best
possible time for any-sized array. _Imagine millions of elements_.

## Rules

Your answer should be written in the `src/answer.js` file. Feel free to write
any number of other files while working -- we advise duplicating answer.js to
something like _try1.js_ and then repeating that as often as needed.

## Set Up

Now that you have this project checked out, let's
set things up:

```
npm install
```

## Test

Now you should have the required packages and you're ready to go. Let's
run the test program to see if everything is happy:

```
# from project root
node ./src/test_install.js

# EXPECTED OUTPUT: (or similar)
#  [ 0,   1,  11,  19,  45, 88, 173, 288, 358, 484 ]
#  [ 0,   1,  11,  19,  45, 88, 173, 288, 358, 484 ]
#  [ 0,   1,  11,  19,  45, 88, 173, 288, 358, 484 ]
```

## Dive In!
