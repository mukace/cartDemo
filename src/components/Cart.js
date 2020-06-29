import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Cart extends Component {

    render() {
        return (
            <div>
                <h1>CART {this.props.numberOfItem}</h1>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return { numberOfItem: state.NumberOfItem }
};

export default connect(mapStateToProps)(Cart);
