## Question-1-answer: 
### There are the many difference between getElementById, getElementByClassName and querySelector / querySelectorAll. 
Here it is,
- getElementById: const title = document.getElementById('Id name'); It returns a single element.It is Element type.
- getElementByClassName:const buttons = document.getElementByClassName("btn"); It returns a live HTMLCollection (like an arry,but not arry).
It Collection of element type.Need to loop through it to apply changes.
- querySelector: const first Btn = document .querySelector(".btn"); It returns the first element that matches the CSS selector.It type of Element.
- querySelector: const allBtns = document.querySelectorAll(".btn"); It returns a static NodeList(not live); It is collection of element type.
- ---
## Question-2-answer: 
### In javaScript I can create and insert a new element into the DOM using the following steps.
- step-1-crete a new element:const  document.createElement("tag");
- step-2-add content:textcontent or innerHTML
- step-3-Insert:appendChild()
---
## Question-3-answer:
### Event bubbing- Its the process where an event starts from the target element and then bubbles up to its parent elements one by one until it reaches the document.
- Example:Click on a button ==> button handler runs ==> then parent ==> then body.
---
## Question-4-answer:
### Event Delegation- Its a technique where you attach a single event listener to a parent element instead of multiple child elements.
The parent handles events from its children using event.target. 
- useful-1:Reduces memory usage
- useful-2: Handles dynamic elements added later
---
## Question-5-answer:
###  preventDefault()==> Stops the browser's default action(e.g.,link navegation,form submission).
- stopPropagation()==> Stops the event from bubbling or capturing to parent elements.
