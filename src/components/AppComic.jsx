function AppCard(prop) {
    return (
        <div className="comic-card">
            <img className="comic-thumb" src={prop.image} alt={prop.titolo} />
            <p>{prop.nome}</p>
          </div>
    )
}

export default AppCard