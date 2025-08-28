1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
All are different selection method of DOM
getElementById : It selects an specific element by it's ID.
getElementsByClassName : Selects a all elements of a class and returns a array like object.
and querySelector : It helps to select only the first element of a css selector.
querySelectorAll : It selects all the elements of a css selector.

2. How do you **create and insert a new element into the DOM**?
For creating a new element have to use: document.createElement()
appendChild() function is used for inserting new element into DOM. 

3. What is **Event Bubbling** and how does it work?
Event bubbling is how an event propagating in DOM.
When an event is triggered it not only effect the target element but also bubbles up through the DOM haiararchey this effect is called event bubbling.

4. What is **Event Delegation** in JavaScript? Why is it useful?
Event deligation is a technique for handling event efficiently, specially when working with large number of element or when dynamically adds elements.
It is implimented by attaching single event listener to common parent insted of each of the child. 

5. What is the difference between **preventDefault() and stopPropagation()** methods?
preventDefault(): Stops the default actions that applies normally when a event is triggered. Ex. Blocks page reloading when submitting a form.
stopPropagation(): Stops the Event bubbling for an event in the DOM.