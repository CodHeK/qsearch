## React Color Component

### Installation

`npm install --save qsearch`

### How To Use

First import this component where you want to use it

`import Search from 'qsearch';`

Then just render it as :

`<Search data={data} />`

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
  
  render() {
    const { data } = this.state;
    return (
        data && <Search data={data} />
    );
  }
}

export default App;

```
