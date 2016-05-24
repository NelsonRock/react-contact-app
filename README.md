# React Contact App with Api:japanese_goblin:
```
node 5
git clone
npm install babel babel-preset-es5015 babel-preset-react babel-polyfill babel-loader -g 
npm install
```

  >Important it's not ready  yet!  
You will find the master branch is a React - Contact - App that will fetch data from an Api and we'll see lifecycle of Components.

- Stateful ContactApp Component - filterText state and handlerUserInput function as props to pure Component
- Pure Components
  * ContactAppContainer - Fetch json file and pass the results to       ContactApp component.
  * ContactApp - wrap all Components
  * SearchBar - handleChange with props from ContactApp
  * ContactList - props filterText from ContactApp
  * ContactItem

1. Component Lifecycle
  * componentWillMount
  * componentDidMount
  * componentWillUnmount
