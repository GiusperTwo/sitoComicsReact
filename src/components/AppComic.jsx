import {useState} from "react"

function AppCard(prop) {
    const [rosso, setRosso] = useState(false)


    return (
        <div className="comic-card" onClick={() => setRosso(!rosso)}>
            <img className="comic-thumb" src={prop.image} alt={prop.titolo} />
            <p className={rosso ? "rosso" : ""} >
                {prop.nome}
            </p>
          </div>
    )
}

export default AppCard