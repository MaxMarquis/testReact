import React from 'react'

export default class Categorie extends React.Component {
    render() {
        return (
            <div>
                <h1>Catégories</h1>
                {this.props.categories.map(({name}) => (
                    <p>{name}</p>
                ))}
            </div>
        )
    }
}