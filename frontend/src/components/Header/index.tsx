import logo from '../../assets/img/logo.svg'
import './styles.css'

function Hearder() {
    return (
        <header>

            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMETA" />
                <h1>DSMETA</h1>
                <p>
                    Desenvolvido por
                    <a href="https://www.instagram.com/felipesantossef/">@felipesantossef</a>
                </p>
            </div>

        </header>
    )
}

export default Hearder
