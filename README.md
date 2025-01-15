# Uncommon HTML/JavaScript Bug: Dynamic Element Event Listener Issues

This repository demonstrates a subtle bug related to attaching event listeners to dynamically created or added HTML elements.  The bug often manifests as event handlers not firing, even though the code appears correct.

## The Problem

The core issue is the timing of when event listeners are attached relative to the element's presence in the DOM. If you attempt to add an event listener to an element that hasn't yet been parsed and rendered by the browser, the listener won't be attached.  This can be especially tricky with dynamically created elements using JavaScript.

## Bug Reproduction

The `bug.html` file contains the problematic code.  The `bugSolution.js` file demonstrates the corrected approach.

## Solution

The solution involves ensuring that event listeners are attached *after* the target element has been added to the DOM. This often involves using event delegation or checking for the element's existence before attaching the listener.

## How to run

1. Clone this repository.
2. Open `bug.html` in a web browser.
3. Observe the lack of event response (the bug).
4. Run the `bugSolution.js` file (this is the corrected code). 