import React, { Component } from 'react';
import ProductPage from './components/ProductPage';
import Cart from './components/Cart';

export class App extends Component {
    state = {
        products: [
            { id: 1, name: 'Product1' },
            { id: 2, name: 'Product2' },
            { id: 3, name: 'Product3' }
        ]
    }

    render() {

        return (
            <div>
                <Cart />
                <hr />
                <ProductPage
                    productList={this.state.products}
                />
            </div>
        )
    }
}

export default App;
