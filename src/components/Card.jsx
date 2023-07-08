
function Card({name,descri}) {
    return (
        <>
            <div className="card" style={{width:'18rem'}}>
                <img className="card-img-top" src="..." alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{descri}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
        </>
    )
}

export default Card