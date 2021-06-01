import React, { Component } from 'react'
import "./MenuItem.css"
import CoeurRouge from "../svg/CoeurRouge"
import CoeurNoir from "../svg/CoeurNoir"

class MenuItem extends Component {
    constructor(props) {
        super(props)
        this.state = { isFavorite: this.props.isFavorite };
    }

    handleClickFavorite(){
        const { isFavorite } = this.state;
        this.setState({isFavorite: !isFavorite});
    }

    onDelete(id){
        console.log(id)
    }

    render() {
        const {menuItem} = this.props;
        return (
            <div className="card">
                <div className="container">
                    <img className="card__img" src={menuItem.img} alt={this.props.name} />
                    <h4 className="card__nameItem">{menuItem.name}</h4>
                    <p className="card__description">{menuItem.description}</p>
                    <p className="card__price">{menuItem.price}$</p>
                    <span className="card__description pointer" onClick={() => this.handleClickFavorite()}>{this.state.isFavorite ? <CoeurRouge/> : <CoeurNoir/> }</span>
                    <button onClick={() => this.onDelete(menuItem.id)}>Supprimer</button>
                </div>
            </div>
        )
    }
}

export default MenuItem