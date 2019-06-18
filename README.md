![logo](logo.png)

### Installation

`npm install --save qsearch`

### How To Use

First import this component where you want to use it

`import Search from 'qsearch';`

Then just render it as :

`<Search config={config} /`

### Props

Needs to be an array of JSON objects, can also have nested objects!

#### Example data :
```
[
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
        }
    },
]

```

#### Example use :

```
import React, { Component } from 'react';
import Search from 'qsearch';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    }
  }
  
  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(resp => resp.json())
        .then(data => this.setState({ data, }));
  }
  
  /* Specify a callback to receive the 
     filtered (search results) back from the Component */
     
  getSearchData = (data) => {
      console.log(data);
  };
  
  render() {
    const { data } = this.state;
    
    const SearchBarStyles = {
      width: '300px',
      height: '50px',
      margin: '2%',
      borderRadius: '10px',
      paddingLeft: '5px'
    };
    
    /* 
        CONFIG:
        
        data: The data that needs to be searched upon.
        styles: Add custom styles to your search bar Component
        onEnter: Enable search on ENTER or on the fly!
        callback: mention a callback function to 
                  receive your search data
                  
    */
   
    const config = {
      data: data,
      styles: SearchBarStyles,
      onEnter: true,
      callback: this.getSearchData
    };
    
    return (
          data && <Search config={config} />
    );
  }
}

export default App;
```