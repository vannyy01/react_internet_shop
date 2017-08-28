import React, {Component} from 'react';
import './App.css';
import {Items} from './item.js';
class App extends Component {
    constructor() {
        super();
        this.state = {
            goods: [
                {
                    id: 0,
                    name: 'Car',
                    price: 15000,
                    count: 10,
                    description: 'A car (or automobile) is a wheeled motor vehicle ' +
                    'used for transportation. Most definitions of car ' +
                    'say they run primarily on roads, seat one to eight people,' +
                    ' have four tires, and mainly transport people rather than goods.',
                    img: 'data:image/jpeg;base64,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'
                },
                {
                    id: 1,
                    name: 'Bike',
                    price: 7000,
                    count: 23,
                    description: 'The world’s best bikes come only from the world’s best bicycle company.' +
                    'Every Trek is built to enhance the quality of your ride, and every model is' +
                    'backed by our history of performance, durability,' +
                    ' and precision engineering. Find your next great ride here' +
                    'from our comprehensive offering of trail-shredding mountain bikes,' +
                    'lightning-quick road bikes, and stylish city bikes.',
                    img: 'https://trek.scene7.com/is/image/TrekBicycleProducts/1477500_2018_B_2_Domane_SLR_9_Disc_P1?wid=1360&hei=1020&fmt=jpg,rgb&qlt=40,1&iccEmbed=0&cache=on,on'
                },
                {
                    id: 2,
                    name: 'Wheels',
                    price: 1500,
                    count: 35,
                    description: 'A wheel is a circular component that is intended to rotate on ' +
                    'an axle bearing. The wheel is one of the main components of the wheel and ' +
                    'axle which is one of the six simple machines. Wheels, in conjunction with ' +
                    'axles, allow heavy objects to be moved easily facilitating movement or transportation' +
                    ' while supporting a load, or performing labor in machines. Wheels are also used' +
                    ' for other purposes, such as a ship`s wheel, steering wheel, potter`s wheel and flywheel.',
                    img: 'https://www.tirerack.com/content/dam/tirerack/desktop/Navigation/menuTires.png'
                }

            ],

        }
    }


    render() {
        return (
            <div>
                <div className="product">
                    <div className="head-element">
                        <div className="wrapper"><h1>Products</h1></div>
                    </div>
                </div>
                <Items goods={this.state.goods}/>
            </div>
        );
    }
}

export default App;
