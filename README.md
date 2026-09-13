Project Name: DevStack
Description: A website based on react, css, html , vite. Some dummy data's are used instead of Api's. Also, it was made responsive for mobile and desktop.
Technologies: React,Vite,DaisyUi
Features: 1.Resposive for small devices.
          2.fixed navbar for efficient scrolling
          3.react toaster notification for warning

What is JSX, and why is it used in React?
ans: jsx is basically a javascript language that allows us to use html and javascript inside one file, thats why it is used in react
What is the difference between props and state?
ans: props are basically the properties that are passed from parent to chile and states are created and owned inside a componenet

What does the useState hook do, and where did you use it in this project?
ans: useState is basically used to store and manage data that can be changed inside a component. I used it for storing the stack data, and when the data changes React updates the UI.

What does the useEffect hook do, and why did you need it to load the JSON data?
ans: useEffect is basically use for doing side effects in a component. I used it to load the JSON data when the component is loaded, so the data can show in the website
Why does every item in a .map() list need a unique key prop?
ans: key prop is used to give every item a unique identity. It helps React to understand which item is changed, added or removed from the list.
What is conditional rendering? Show one place you used it (example: the empty stack message).
ans: conditional rendering means showing something in the UI on a condition.I used it for empty stack message, so when the stack no item it shows "Stack Empty".
How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
ans: data is passed from parent to child using props. And if the child need to send something back to the parent, we can pass a function from the parent as a prop and call that function from the child.
