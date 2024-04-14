###SharedSimpleState Package Documentation

##Installation
To install the sharedsimplestate package, you can use npm or yarn. 


Using npm:
```npm install sharedsimplestate```

Using yarn:
```yarn add sharedsimplestate```

##Usage
Import the necessary dependencies in your React application:
```
import React from 'react';                
import ReactDOM from 'react-dom';
import { SharedStateProvider } from 'sharedsimplestate';
```

Wrap your application with the SharedStateProvider component. 
This component allows you to handle the shared context:

```
ReactDOM.render(
  <SharedStateProvider>
    <App />
  </SharedStateProvider>,
  document.getElementById('root')
);
```
Now, you can use the shared state in your components. To access the shared state, you can use the useSharedState hook:

```
import { useSharedState } from 'sharedsimplestate';

function MyComponent() {
  const [data, setSData = useSharedState(initialValue);


  return <div>{state}</div>;
}
```