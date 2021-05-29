function Panier(props) {
    return (
        <div>
            <h1>Mon panier</h1>
            {props.articles.map(({id, name}) => (
                <p key={id}>{name}</p>
            ))}
            
        </div>
    )
}

export default Panier
