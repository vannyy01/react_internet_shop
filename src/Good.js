/**
 * Created by vanny on 24.08.2017.
 */
import React from 'react';
import {Item} from './item.js';

export class Good extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            basket_items: window.basket_items
        }
    }


    render() {
        const {goods} = this.props;
        return (
            <div  >
                {goods.map((good, index) =>
                <Item key={index} goods={goods} good={good} />)}
                {this.renderBasket()}
            </div>
        )
    }
}