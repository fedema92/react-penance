import React, { Component } from 'react';
import actions from './list.js';

//Put here the images name
const backgroundImages = [
    'airplane.png',
    'arctichare.png',
    'baboon.png',
    'boat.png',
];

//Interval between background change
const sliderTime = 5000;

class Penance extends Component {
    constructor(props) {
        super(props);
        const defaultBackGroundImages =
            backgroundImages && backgroundImages.length
                ? backgroundImages[0]
                : null;
        this.state = {
            backgroundImg: defaultBackGroundImages,
            actionToDo: '',
        };
    }

    componentDidMount() {
        if (backgroundImages)
            this.interval = setInterval(() => {
                var rand =
                    backgroundImages[
                        Math.floor(Math.random() * backgroundImages.length)
                    ];
                this.setState({
                    backgroundImg: rand,
                });
            }, sliderTime);
    }

    handleClick = () => {
        let index = this.getRandomInt(actions.length);
        this.setState({
            actionToDo: actions[index],
        });
    };

    getRandomInt = (max) => {
        return Math.floor(Math.random() * Math.floor(max));
    };

    render() {
        return (
            <div
                className='container'
                ref='image-pane'
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/img/${this.state.backgroundImg})`,
                }}
            >
                <div className={'flex-container'}>
                    <div className={'title'}>
                        <h1 className=''>{'TITLE'}</h1>
                    </div>

                    <button
                        className={'button-penance'}
                        onClick={this.handleClick}
                    >
                        {'Click and do penance'}
                    </button>
                    {this.state.actionToDo && (
                        <h3 className={'penance'}>{this.state.actionToDo}</h3>
                    )}
                </div>
            </div>
        );
    }
}

export default Penance;
