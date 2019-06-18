![logo](cover.png)

![voila](https://img.shields.io/badge/npm-v1.0.4-blue.svg) ![build](https://img.shields.io/badge/build-passing-green.svg)

### Installation

```
npm install --save qsearch
```

### Demo

Try out the demo [App](https://nifty-elion-04a803.netlify.com/).

Link to the Demo [App repository](https://github.com/CodHeK/qsearch-demo-app).

### How To Use

First import this component where you want to use it

```
import Search from 'qsearch';
```

Then just render it as :

```
<Search config={config} />
```

### Props

```
/* 
    CONFIG PASSED AS PROPS: 
    
    data: The data that needs to be searched upon.
    styles: Add custom styles to your search bar Component
    onEnter: Enable search on ENTER or on the fly!
    callback: mention a callback function to 
              receive your search data
              
*/
```


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
     filtered entries and suggested words back from the Component */
     
  getSearchData = (data) => {
        const { filtered, suggested } = data;
        this.setState({ filtered, suggested });
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
### Also ...

If you find any bugs/edge-cases not taken care of :see_no_evil:, feel free to open an [issue](https://github.com/CodHeK/qsearch/issues). :smiley: