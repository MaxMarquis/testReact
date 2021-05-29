import React, { Component } from 'react'

export class Clock extends Component {
    constructor(props){
        super(props);
        this.state = {date: new Date()}
        
    }

    componentDidMount(){
        this.timerID = setInterval (() => this.tick(), 1000);
    }

    tick(){
        this.setState({date: new Date()});
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    render() {
        return (
            <div>
                <h1>Bonjour, monde !</h1>
                <h2>Il est {this.state.date.toLocaleTimeString('fr')}.</h2>
            </div>
        )
    }
}

export default Clock