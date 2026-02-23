## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

#### Ans:   
  #### getElementbyId() 
  getElementbyId is used to get HTML unique element and manipulate unique element. 

  #### getElementsByClassName()
  getElementsByClassName is used to get all HTML elements that contain a specified class name.
  it return HTML collections
 
  #### querySelector()
  querySelector is used to get a single HTML element that have specified class name that className given 
  in the querySelector(ClassName) method argument it's get a single HTML element.

  We can use same as CSS selector inside this 
  
  #### querySelectorAll()
  querySelectorAll is used to retrieve all html elements whose class matches the class given inside this method.
  We can use same as CSS selector inside this

  it return nodelist this nodelist have prototype inside this prototype have forEach method and other method
  we can manipulate there elements using there methods. 

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
      <div class="child2"></div>
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
  - By default when click the child2 that event fire in child2 and than automatic fire child1 than parent. 
   

### 4. What is Event Delegation in JavaScript? Why is it useful?
#### Ans:
  - Event Delegation such a method where we add a single eventListener to a parent element instead of
  attaching separate event listener to multiple child elements. When you click the targeted element it's
  do anithing without added eventListener. 

  ```html
  <div class="parent" style="width: 100px; height: 100px; background-color: rebeccapurple;">
    <div class="child1 divs" style="width: 60px; height: 60px; background-color: red;">div1</div>
    <div class="child2 divs" style="width: 30px; height: 30px; background-color: rgb(0, 255, 115);">div2 </div>
</div>
```


  ```js
   const child2 = document.querySelector(".child2");
        const child1 = document.querySelector(".child1");
        const parent = document.querySelector(".parent");

        parent.addEventListener("click", (e) => {
            if(e.target.classList.contains("divs")){  // when finds the divs it's do anything
                console.log(e.target.textContent)
            }
        });
        // output 
        // when click the parent element then it find where have divs and do it spacific task
        // click div1 output div1
        // click div2 output div2
        // we can add a single event listener for multiple child element 

  ``` 

  If there was no event delegation, I would have to fetch the element from the html separately. But because of this, I don't have to fetch it from the html and add the eventListener separately. That's why event delegation is so useful. 

### 5. What is the difference between preventDefault() and stopPropagation() methods?
#### Ans:
### preventDefault()
- it stop the html default behavior like when html form submit it's by default reload the page 
we can stop this behavior help of event.preventDefault() method

### stopPropagation();
- When We have parent element eventListener and child eventLisetner then by default at first trigger
the child event and then trigger parent and then parent.... when we have parent eventListener

but we can stop this default behavior using event.stopPropagation() method this time it only work on 
this child element. 

like this 
```html

<div class="parent" style="width: 100px; height: 100px; background-color: rebeccapurple;">
    <div class="child1" style="width: 60px; height: 60px; background-color: red;">
      <div class="child2" style="width: 30px; height: 30px; background-color: rgb(0, 255, 115);">div2</div>
    </div>
  </div>

    <script>
        const child2 = document.querySelector(".child2");
        const child1 = document.querySelector(".child1");
        const parent = document.querySelector(".parent");

        parent.addEventListener("click", () => {
            console.log("parent clicked")
        });
        child1.addEventListener("click", () => {
            console.log("child1 clicked")
        });
        child2.addEventListener("click", (e) => {
            e.stopPropagation();
            console.log("child2 clicked")
        });

        // output 
        // when click child2 
        // child2 clicked
    </script>
```
