# JavaScript + Operator with Undefined/Null Values

This repository demonstrates unexpected behavior of the `+` operator in JavaScript when used with `undefined` or `null` values. Specifically, it highlights that:

* `undefined + 1` evaluates to `NaN`
* `null + 1` evaluates to `1`

This can lead to subtle bugs in JavaScript applications if not handled carefully.  This repo illustrates the issue and provides a solution for robust handling.

## How to reproduce the bug

1. Clone the repository.
2. Open `bug.js` and run it in a JavaScript environment (e.g. Node.js, browser console).

## Solution

The file `bugSolution.js` offers ways to handle the case where `undefined` or `null` values might be present to avoid unexpected results. It shows how to explicitly check for these values and provide appropriate defaults using the `||` operator.