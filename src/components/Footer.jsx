import "./css/Footer.css"
export default function Footer() {

    return (
        <div className="footer container">
            <ul className="footer--list">
                <li className="footer--list--item">
                    <h4 className="footer--list--item--title">Madeepice logo</h4>
                </li>
                <li className="footer--list--item">
                    <h4 className="footer--list--item--title">Contact</h4>
                    <p className="footer--list--item--paragraph">
                        Optio sequi architecto facilis laborum rem, illo corrupti ipsam ipsa qui error iusto
                    </p>
                </li>
                <li className="footer--list--item">
                    <h4 className="footer--list--item--title">Boutique</h4>
                    <p className="footer--list--item--paragraph">
                        Optio sequi architecto facilis laborum rem, illo corrupti ipsam ipsa qui error iusto
                    </p>
                </li>
                <li className="footer--list--item" style={{ width: "140px" }}>
                    <h4 className="footer--list--item--title">Suivez-nous</h4>
                    <div className="footer--list--item--icon">
                        <i className="fa fa-solid fa-facebook"></i>
                        <p className="footer--list--item--icon--f">f</p>
                        <p className="footer--list--item--icon--o">o°</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}

