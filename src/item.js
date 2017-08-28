/**
 * Created by vanny on 24.08.2017.
 */
import React from 'react';
import Jquery from 'jquery';
import './index.css';


export class Items extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            basket_items: {},
            basket_array: [],
            totalAmount: 0
        };
    }

    getInfo(good) {
        return (
            <div id={"info " + good.id}>
                <h2>Price: {good.price}</h2>
                <h3>Count: {good.count}</h3>
                <p>{good.description}</p>
            </div>
        )
    }

    renderInfo() {
        window.onload = () => {
            let divs = document.querySelectorAll("div[id^='item']");
            const length = divs.length;
            const {goods} = this.props;
            const basket_items = this.state.basket_items;
            for (let i = 0; i < length; i++) {
                divs[i].onclick = () => {
                    this.openBox("info " + i, this);
                    return false;
                };
                divs[i].ondblclick = () => {
                    this.addBasket(basket_items, goods[i], this);
                    this.componentAdd()
                };
            }

        };
    }

    openBox(id) {
        let div = document.getElementById(id);
        if (div.style.display === 'block') {
            div.style.display = 'none';
        }
        else {
            div.style.display = 'block';
        }
    }

    addBasket(items, good) {
        if (typeof(items[good.name]) !== "object") {
            items[good.name] = {};
        }
        let name = items[good.name];
        if (isNaN(name.count)) {
            name.count = 0;
        }
        name.count++;
        name.sum = name.count * good.price;
        this.setState(
            {
                basket_array: this.crArrFrObj(this.state.basket_items)
            }
        );
    }

    crArrFrObj(thing) {
        const arr = [];
        for (let key in thing) {
            arr[key] = thing[key];
        }
        return arr;
    }

    runObj(arrays) {
        const reacts = [];
        for (let arr in arrays) {
            let react = [];
            for (let e in arrays[arr]) {
                react[e] = e + ':' + arrays[arr][e];
            }
            reacts[arr] = react;
        }

        return reacts;
    }

    transformObj(newObj) {
        let names = Object.keys(newObj);
        return names.map((name, index) => (
            <h4 className={"name " + name} key={index}>{name + ' '}{newObj[name].count + ' '}{newObj[name].sum}</h4>));

    }

    componentAdd() {
        const arrays = this.state.basket_items;
        let newObj = this.runObj(arrays);
        let totalAmount = 0;

        for (let key in newObj) {
            totalAmount += parseFloat(newObj[key].sum.substr(4));
        }
        this.setState({
            totalAmount: totalAmount
        });

    }

    renderBasket() {
        const arrays = this.state.basket_items;
        let newObj = this.runObj(arrays);
        return (
            <div className="bag">
                <div className="wrapper">
                    <i className="basket">
                        <div className="buyers">
                            <h3 id="bill">Total amount: {this.state.totalAmount} </h3>
                            <div className="buyer-wrapper">
                                {
                                    this.transformObj(newObj)
                                }
                            </div>
                        </div>
                    </i>
                </div>
            </div>
        )
    }


    render() {
        const {goods} = this.props;
        return (
            <div className="goods">
                {goods.map((good, index) =>
                    <div key={index} id={'item ' + good.id + '-' + good.name} onLoad={this.renderInfo()}>
                        <h2>{good.name}</h2>
                        <img src={good.img} alt={good.name}/>
                        {this.getInfo(good)}
                    </div>
                )}
                {this.renderBasket()}
            </div>
        )
    }
}