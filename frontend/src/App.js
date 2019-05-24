import React, { Component } from 'react';

class App extends Component {
  state = {
    products: []
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/');
      const products = await res.json();
      this.setState({
        products
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        {this.state.products.map(item => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <img src={item.url} alt={item.title} />
            <h2>{item.price}</h2>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
