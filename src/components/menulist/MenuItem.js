import React, { Component } from 'react'
import "./MenuItem.css"
import CoeurRouge from "../svg/CoeurRouge"
import CoeurNoir from "../svg/CoeurNoir"

class MenuItem extends Component {
    constructor(props) {
        super(props)
        this.state = { isFavorite: false };
        this.handleClickFavorite = this.handleClickFavorite.bind(this);
    }

    handleClickFavorite(){
        this.setState({isFavorite: !this.state.isFavorite});
    }

    render() {
        return (
            <div className="card">
                <div className="container">
                    <img className="card__img" src={this.props.img} alt={this.props.name} />
                    <h4 className="card__nameItem">{this.props.name}</h4>
                    <p className="card__description">{this.props.description}</p>
                    <p className="card__price">{this.props.price}$</p>
                    <span className="card__description pointer" onClick={()=> this.handleClickFavorite()}>{this.state.isFavorite ? <CoeurRouge/> : <CoeurNoir/> }</span>
                </div>
            </div>
        )
    }
}

export default MenuItem