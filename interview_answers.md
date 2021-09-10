# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?
   1. A) It reduces/removes prop drilling but still shares state between components. 
   
2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
   1. A) The store receives information from actions on how to effect current state to produce a new current state
   2. A) Reducers manage/modify state depending on the actions. They take current state + action and return a new current state.
   3. A) The Store is an immutable central state container available to all components in the app and that makes it a "single source of truth." 

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?
   1. A) Thunk is middleware that turns our synchonous applicaiton into an asynchonous application. A thunk is a function returned by another function that permits passing dispatch in as an argument which inturn premits asynchronous tasks like API calls and even dispatching other actions through .then(). Check out my [chartMiddleware.drawio](chartMiddleware.drawio) file. 

4. What is your favorite state management system you've learned and this sprint? Please explain why!
   1. Well for smaller projects Context API sure does make it easier to convey state. While using prop drilling via function components is a little harder, it's what we learned "frist" so I'm better at it... BUT, now using Redux and Reducers is my favorite. It makes me use less props drilling and hopefully as a result fewer mistakes. But, I don't see myself using class componenets to do this but I'm glad I know how to use both class and functional components. LOL. But, I'd say overall **my favortie is just vannila Function components with Redux and reducers.** It "makes sense" in my head dispite the extra work over Context API measures. Frankly having to learn them all gives me imposter Syndrome. I don't have the best grasp of Context API and my understanding of vanilla class components is weak too. Just about the time I thought I was getting props drilling ... well you know where this is going... we jumped to new material. Was like watering my favorite cocktail down more and more till it was not so good anymore. Sigh... Nonetheless, I'm a Reducer Pattern fan with a new found love of the Redux store and redux-async techniques. 
