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


    render() {
        const {handleDeleteRow, menuItem} = this.props;
        return (
            <div className="card">
                <div className="container">
                    <h4 className="card__nameItem">{menuItem.itemName}</h4>
                    <p className="card__description">{menuItem.description}</p>
                    <p className="card__price">{menuItem.price}$</p>
                    <span className="card__description pointer" onClick={() => this.handleClickFavorite()}>{this.state.isFavorite ? <CoeurRouge/> : <CoeurNoir/> }</span>
                    <button onClick={handleDeleteRow.bind(this, menuItem.id)}>
                        supprimer
                    </button>
                </div>
            </div>
        )
    }
}

export default MenuItem