import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProduct } from './../redux/actions';

export class ProductPage extends Component {
    handleClick = () => {
        this.props.addProduct(1);
    }

    renderProduct() {
        return this.props.productList.map(product => {
            return (
                <div key={product.id}>
                    <div>{product.name}</div>
                    <button onClick={this.handleClick}>Add</button>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                {this.renderProduct()}
            </div>
        )
    }
};

export default connect(null, { addProduct })(ProductPage);
