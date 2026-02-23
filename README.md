## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

#### Ans:   
  #### getElementbyId() 
  getElementbyId is used to get HTML unique element and manipulate unique element. 

  #### getElementsByClassName()
  getElementsByClassName is used to get all that HTML element that element contains a specified className.
 
  #### querySelector()
  querySelector is used to get a single HTML element that have specified class name that className given in the querySelector(ClassName) method argument it's get a single HTML element
  
  #### querySelectorAll()
  querySelectorAll is used to retrieve all html elements whose class matches the class given inside this method.


### 2. How do you create and insert a new element into the DOM?
##### Ans:
  In javaScript document.createElement() use to create a new element and 
  parentElement.appendChild(child) is use to insert a new element in the DOM.

### 3. What is Event Bubbling? And how does it work?
#### Ans:
  in javaScript Event Bubling is a javaScript concept when click a HTML element that event 
  move to child element to parent element. frist time when click child element this event 
  fire in the child element and then event fire in that parent element and than that parent 
  element. like this 
  inside a child element to outsite element it's start child to upwards

  suppose 
  ```html
  <div class="parent">
    <div class="child1">
      <div class="child2">
    </div>
  </div>
  ```
  ```js
  const child2 = document.querySelector(".child2");
  const child1 = document.querySelector(".child1");
  const parent = document.querySelector(".parent");

  parent.addEventListener("click",()=>{
    console.log("parent clicked")
  });
  child1.addEventListener("click",()=>{
    console.log("child1 clicked")
  });
  child2.addEventListener("click",()=>{
    console.log("child2 clicked")
  });

  // when click the child 2 
  // output
  // child2 clicked
  // child1 clicked
  // parent clicked

  ```
  - when parent element have a event and than child1 have a event than child2 have a event
  - Atfrist by default when click the child2 that event fire in child2 and than automatic fire child1 than parent. 
   

### 4. What is Event Delegation in JavaScript? Why is it useful?

### 5. What is the difference between preventDefault() and stopPropagation() methods?

---


**Technology Stack:**
- HTML
- CSS (Vanilla/Tailwind/DaisyUI)
- JavaScript (Vanilla)


--- 

## What to submit: 

1. GitHub Repository Link: 
2. Live Site Link: 
