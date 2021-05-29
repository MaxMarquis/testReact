import React from 'react'

class Title extends React.Component {
    render() {
        return (
            <div>
                Bienvenue {this.props.name} sur ma page
            </div>
        )
    }
}

export default Title