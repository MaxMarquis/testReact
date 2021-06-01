import React, { Component } from 'react'

export default class Compteur extends Component {
    constructor(props){
        super(props);
        this.state = {n: 0};
    }

    compteur(){
        this.setState({
            n: this.state.n + 1 
        })
    }


    render() {
        return (
            <div>
                <input type="nombre" placeholder={this.state.n} disabled/>
                <button onClick={this.compteur.bind(this)}>Increment</button>
            </div>
        )
    }
}
